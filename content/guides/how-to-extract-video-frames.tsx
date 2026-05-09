import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir videodan tek bir kare çıkarmak kulağa basit gelir &mdash; ta ki bir makine öğrenimi veri seti için 2 dakikalık bir klipten 2.400 eşit aralıklı kareye, bir küçük resim için tam olarak 00:01:23.416'daki tek bir kareye veya bir saatlik güvenlik kamerası görüntüsündeki her ana kareye ihtiyacınız olana kadar. &ldquo;İdare eder&rdquo; ile &ldquo;gerçekten kullanışlı&rdquo; çıkarma arasındaki fark, video codec'inin ne depoladığı ile aracınızın neyi yeniden oluşturabileceğini anlamaktır. Bu kılavuz, tek kareye karşı toplu çıkarma, ana karelere karşı enterpole edilmiş kareler, FFmpeg'in fps filtresi, çıktı kalite ayarları, grupları düzenli tutan adlandırma kuralları ve seçimleri yönlendiren kullanım durumlarını &mdash; küçük resimler, ML eğitim verileri, zaman atlamalı, manuel inceleme &mdash; kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Belirli bir andaki tek kare</h2>
    <p>
      Küçük resimler ve kahraman görseller için, belirli bir zamanda tek bir kare istersiniz. FFmpeg bunu arama ve tek kare çıktısı ile halleder.
    </p>
    <pre>{`# 00:01:23'te bir kare çıkar
ffmpeg -ss 00:01:23 -i input.mp4 -vframes 1 -q:v 2 frame.jpg

# Kalite ölçeği 2, neredeyse maksimum JPEG kalitesidir (ölçek 2-31, düşük=daha iyi)
# PNG için (kayıpsız):
ffmpeg -ss 00:01:23 -i input.mp4 -vframes 1 frame.png`}</pre>
    <p>
      <code>-ss</code>'yi <code>-i</code>'den önce koyarak hızlı arama yapın (en yakın ana kareye atlar, hızlı). <code>-ss</code>'yi <code>-i</code>'den sonra koyarak hassas arama yapın (baştan itibaren kod çözer, yavaş ama kare hassasiyetinde). Birleşik form, uzlaşmadır &mdash; önce hızlı arama, sonra hassas ayar.
    </p>

    <h2>Dizi çıkarma: fps filtresi</h2>
    <p>
      Bir videodan N kare çıkarmak için (küçük resim şeridi, ML eğitimi), hızı kontrol etmek üzere fps filtresini kullanın. <code>fps=1</code>, videonun saniyesi başına bir kare anlamına gelir.
    </p>
    <pre>{`# Saniyede bir kare, frame_0001.jpg, frame_0002.jpg... olarak adlandırılır
ffmpeg -i input.mp4 -vf fps=1 -q:v 2 frame_%04d.jpg

# Saniyede iki kare (her 0.5 saniyede bir)
ffmpeg -i input.mp4 -vf fps=2 frame_%04d.jpg

# Orijinalden her 10. kare (30fps kaynak varsayılarak)
ffmpeg -i input.mp4 -vf "select=not(mod(n\\,10))" -vsync vfr out_%04d.jpg

# Her kare (kaynakla aynı hızda)
ffmpeg -i input.mp4 frame_%04d.png`}</pre>
    <p>
      Dosya adındaki <code>%04d</code>, sıfırla doldurulmuş bir sayaçtır. 9.999 kareye kadar olan gruplar için 4 hane, daha büyükleri için 5 hane kullanın. Dolgu, dosyaların dosya yöneticilerinde kronolojik sırada sıralanmasını sağlar.
    </p>

    <h2>Ana kareler ve enterpole edilmiş kareler</h2>
    <p>
      Ana kareler (I-kareleri) kendi kendine yeterlidir ve yüksek kalitelidir. P ve B kareleri, çevreleyen karelerden farklardır ve kod çözüldükten sonra ana karelerle aynı kalitededir &mdash; ancak yalnızca ana kareleri çıkarmak videonun çoğunu atlar ve çok daha hızlıdır.
    </p>
    <pre>{`# Yalnızca ana kareleri (I-kareleri) çıkar
ffmpeg -skip_frame nokey -i input.mp4 -vsync 0 -frame_pts true \\
  keyframe_%04d.jpg`}</pre>
    <p>
      Yalnızca ana kare çıkarma, seyrek örnekleme istediğiniz uzun kayıtlar &mdash; CCTV incelemesi, araç kamerası görüntüleri, uzun dersler &mdash; için doğru seçimdir. Kodlamanın GOP boyutuna bağlı olarak her birkaç saniyede bir kare alırsınız ve neredeyse sıfır kod çözme maliyeti vardır.
    </p>

    <h2>Sahne algılama</h2>
    <p>
      Önemli görsel değişikliklerdeki (yeni sahneler, kesmeler) kareleri çıkarmak için sahne değişikliği dedektörünü kullanın. Hikaye tahtası küçük resimleri oluşturmak için kullanışlıdır.
    </p>
    <pre>{`# Sahne değişikliği puanı &gt; 0.4 olan kareleri çıkar
ffmpeg -i input.mp4 -vf "select='gt(scene,0.4)'" -vsync vfr \\
  scene_%04d.jpg`}</pre>
    <p>
      Eşiği ayarlayın: 0.4 orta düzey bir kesme, 0.2 ince geçişleri yakalar, 0.6 yalnızca sert kesmeleri yakalar. Sahne algılama kusursuz değildir &mdash; hızlı kaydırmalar ve ışık değişiklikleri de onu tetikler &mdash; ancak otomatik hikaye tahtası oluşturma için iyi bir başlangıç noktasıdır.
    </p>

    <h2>Çıktı biçimleri: JPEG, PNG, WebP</h2>
    <p>
      <strong>JPEG</strong> &mdash; en küçük, kayıplı, küçük resimler ve önizlemeler için iyidir. Yüksek kalite için <code>-q:v 2</code> kullanın (tipik: 1080p'de kare başına 100&ndash;300KB).
    </p>
    <p>
      <strong>PNG</strong> &mdash; kayıpsız, daha büyük, piksel mükemmelliği analizi, sıkıştırma yapaylıklarının bir modeli karıştırabileceği ML eğitimi veya diğer yazılımlarla birleştirme için en iyisidir.
    </p>
    <p>
      <strong>WebP</strong> &mdash; aynı kalitede JPEG'den daha küçük, kayıpsız modu destekler, modern web için iyi bir varsayılandır.
    </p>
    <p>
      <strong>TIFF/BMP</strong> &mdash; sıkıştırılmamış, büyük dosyalar, yalnızca profesyonel birleştirme veya arşivleme iş akışları için.
    </p>

    <h2>Çözünürlük ve kalite kontrolü</h2>
    <pre>{`# Çıkarma sırasında 640 genişliğe küçült
ffmpeg -i input.mp4 -vf "fps=1,scale=640:-1" frame_%04d.jpg

# Kaynak çözünürlükte çıkar (varsayılan)
ffmpeg -i input.mp4 -vf fps=1 frame_%04d.jpg

# Yüksek kaliteli JPEG (q=2)
ffmpeg -i input.mp4 -vf fps=1 -q:v 2 frame_%04d.jpg

# Daha küçük JPEG (q=10, yine de iyi görünür)
ffmpeg -i input.mp4 -vf fps=1 -q:v 10 frame_%04d.jpg`}</pre>

    <h2>Gruplar için adlandırma kuralları</h2>
    <p>
      ML veri setleri ve toplu inceleme için, dosyaları daha sonra sıralamak ve bulmak üzere dosya adına yeterli meta veri ekleyin. İyi kalıplar:
    </p>
    <pre>{`sourceclip_000001.jpg            # basit sayısal
sourceclip_t00h01m23s.jpg         # adda zaman damgası
sourceclip_frame000123_t83s.jpg   # kare numarası + saniye
20240423_cam1_00005.jpg           # tarih + kaynak + sayaç`}</pre>
    <p>
      Boşluklardan, büyük harflerden ve özel karakterlerden kaçının. Alfabetik sıralamanın kronolojik sıralamaya eşit olması için sıfırla doldurulmuş sayılar kullanın. Birden çok çıkarmayı birleştirdikten sonra izini kaybetmemek için kaynak video tanımlayıcısını ekleyin.
    </p>

    <h2>Kullanım durumu: küçük resim şeritleri</h2>
    <p>
      Bir küçük resim şeridi (&ldquo;sprite sayfası&rdquo;), bir tarayıcı önizlemesi veya iletişim sayfası için N kareyi tek bir görüntüde paketler. Düzenli aralıklarla kareler çıkarın, ardından ImageMagick veya FFmpeg'in döşeme filtresiyle bunları birleştirin.
    </p>
    <pre>{`# 5x2 ızgarada 10 kare, her biri 160 piksel genişliğinde
ffmpeg -i input.mp4 -vf "fps=10/duration,scale=160:-1,tile=5x2" \\
  -frames:v 1 sprites.jpg`}</pre>

    <h2>Kullanım durumu: ML eğitim verileri</h2>
    <p>
      Bilgisayarlı görme modellerini eğitmek için, anlamlı varyasyonu yakalayan ancak neredeyse kopyalardan kaçınan aralıklarla kareler çıkarın. İyi bir buluşsal yöntem: genel içerik için saniyede 0.5&ndash;2 kare, seyrek örnekleme için ana kare başına 1, eylem tanıma için her N. kare (N, modelinizin zamansal çözünürlüğüyle eşleşir).
    </p>
    <p>
      Eğitim için her zaman kaynak çözünürlükte PNG'ye çıkarın. Eğitim hattının küçültmesine izin verin; çıkarma aşamasında kayıplı bir JPEG'i dahil etmeyin.
    </p>

    <h2>Kullanım durumu: zaman atlamalı kaynak kareler</h2>
    <p>
      Bir zaman atlamalı video yapmak için, uzun bir kaynaktan eşit aralıklı kareler çıkarın ve yüksek kare hızında yeniden birleştirin.
    </p>
    <pre>{`# Her 30. kareyi PNG olarak çıkar
ffmpeg -i 10hour_timelapse.mp4 -vf "select=not(mod(n\\,30))" \\
  -vsync vfr tl_%04d.png

# 24fps'de yeniden birleştir:
ffmpeg -framerate 24 -i tl_%04d.png -c:v libx264 \\
  -crf 18 -pix_fmt yuv420p output.mp4`}</pre>

    <h2>Çıkarılan karelerde toplu zaman damgası</h2>
    <p>
      Her karenin kaynak zaman damgasını bilmeniz gerekiyorsa, ayrıntılı günlük kaydıyla çıkarın ve PTS'yi ayrıştırın veya dosyaları doğrudan zaman damgasıyla adlandırın:
    </p>
    <pre>{`ffmpeg -i input.mp4 -vf fps=1 \\
  -frame_pts 1 frame_%d.jpg
# Bu, dosyaları kaynak zaman damgalarına göre adlandırır (zaman tabanı birimlerinde)`}</pre>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Uzun videolar için -ss'yi -i'den sonra kullanmak.</strong> Her seferinde baştan itibaren kod çözer. 2 saatlik bir videonun 1. saatindeki tek bir kare için bu, saniyeler yerine dakikalar alır.
    </p>
    <p>
      <strong>Dolgu genişliğini unutmak.</strong> Sıfır dolgusu olmayan <code>%d</code>, 1, 10, 100, 2, 20... şeklinde sıralar. <code>%04d</code> veya daha genişini kullanın.
    </p>
    <p>
      <strong>Yalnızca ana karelere ihtiyacınız varken her kareyi çıkarmak.</strong> Binlerce neredeyse aynı görüntü yazar. Gözetleme tipi görüntüler için yalnızca ana kare çıkarmayı kullanın.
    </p>
    <p>
      <strong>ML eğitimi için varsayılan olarak JPEG kullanmak.</strong> JPEG yapaylıkları, ince dokuları ayırt etmesi gereken modelleri karıştırabilir. Eğitim verileri için PNG kullanın.
    </p>
    <p>
      <strong>JPEG için kalite bayrağını atlamak.</strong> FFmpeg'in varsayılan kalite ölçeği 5'tir ve vasattır. Arşiv kalitesinde kareler için <code>-q:v 2</code> kullanın.
    </p>
    <p>
      <strong>Varsayılan eşikte sahne algılama.</strong> 0.4 varsayılanı bir başlangıç noktasıdır, evrensel bir ayar değildir. Kaynağa göre ayarlayın.
    </p>
    <p>
      <strong>Çıktı dizini için plan yapmamak.</strong> Ana klasörünüze 10.000 kare çıkarmak karmakarışık olur. Önce özel bir çıktı dizini oluşturun.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      FFmpeg kurmadan videodan tek kareler veya tam diziler çekmek için <a href="/tools/video-frame-extractor">video kare çıkarıcıyı</a> kullanın. Toplu çıkarmadan önce klibi ilgi alanına göre kesmek için <a href="/tools/video-trimmer">video kırpıcı</a> ile ve çıkarılan kareleri küçük resimler veya veri seti hazırlığı için tek tip bir boyuta toplu olarak yeniden boyutlandırmak için <a href="/tools/image-resizer">görüntü yeniden boyutlandırıcı</a> ile birlikte kullanın.
    </p>
  </>
);