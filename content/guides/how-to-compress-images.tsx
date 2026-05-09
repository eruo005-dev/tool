import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Açılış sayfanızdaki 4 MB'lık bir kahraman görseli, mobil ziyaretçileri kaybetmenin en hızlı yoludur. Google'ın kendi verileri, 3G'de sayfa ağırlığı 2 MB'ı aştığında hemen çıkma oranlarının keskin bir şekilde arttığını gösteriyor ve optimize edilmemiş tek bir iPhone fotoğrafı genellikle bundan daha ağırdır. Çözüm, kulağa basit gelen ancak gerçek ödünleşmeleri gizleyen görsel sıkıştırmadır: kayıplı vs kayıpsız, JPEG kalite kaydırıcıları, WebP benimsemesi, PNG optimizasyonu, EXIF kaldırma ve "iyi görünüyor" ile "hızlı yükleniyor" arasındaki fark. Bu kılavuz, her sıkıştırma modunun nasıl çalıştığını, farklı sayfa bağlamları için hedef dosya boyutlarını, mobil ve masaüstünün neden farklı ayarlara ihtiyaç duyduğunu ve profesyonel sıkıştırmayı varsayılan bir dışa aktarmadan ayıran küçük ayrıntıları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Kayıplı vs kayıpsız</h2>
    <p>
      <strong>Kayıplı sıkıştırma</strong>, insan gözünün fark etmesi muhtemel olmayan bilgileri atarak önemli boyut küçültmeleri sağlar — ince renk geçişleri, yüksek frekanslı ayrıntılar, algılanamayan tonlar. JPEG, WebP (kayıplı mod) ve AVIF kayıplıdır. Tipik bir 12 MP fotoğraf, yüksek kalitede ~10 MB RAW'dan 1-3 MB'a veya orta kalitede 200-500 KB'a düşer.
    </p>
    <p>
      <strong>Kayıpsız sıkıştırma</strong> her pikseli tam olarak korur; sadece onları daha verimli bir şekilde kodlar. PNG, WebP (kayıpsız mod), TIFF ve FLIF kayıpsızdır. Boyut küçültmeleri daha küçüktür — tipik olarak %10-40 — ancak çıktı, girdiyle piksel olarak aynıdır. Ekran görüntüleri, diyagramlar ve keskin kenarlı veya saydamlığı olan her şey için kayıpsız kullanın.
    </p>

    <h2>JPEG kalitesi: kaydırıcının gerçekte yaptığı şey</h2>
    <p>
      JPEG kalitesi, DCT katsayılarının ne kadar agresif bir şekilde nicelendiğini kontrol eden 0 ile 100 arasında bir sayıdır. Doğrusal bir ölçek değildir. Web fotoğrafları için en uygun nokta 75-85'tir. 60'ın altında, gökyüzü gradyanları gibi düz alanlarda görünür blok yapıları görmeye başlarsınız. 90'ın üzerinde, neredeyse hiç algılanabilir kalite kazancı olmadan dosya boyutunu şişiriyorsunuzdur.
    </p>
    <pre>{`Kalite  Tipik 1920x1080 fotoğraf boyutu
100      1.8 MB    (israf)
95       900 KB
85       430 KB    (fotoğraflar için önerilen)
75       280 KB    (web varsayılanı)
60       170 KB
50       140 KB    (görünür yapılar)
30       90 KB     (belirgin şekilde bozulmuş)`}</pre>
    <p>
      Kaynaktan kalite 85'te bir kez kaydedin. Ayrıntıyı kurtarmayı umarak bir JPEG'i yüksek kalitede asla yeniden kaydetmeyin — bir kez gitti mi, gitti ve her yeniden kodlama daha fazla kayıp ekler ("nesil kaybı").
    </p>

    <h2>WebP: modern varsayılan</h2>
    <p>
      WebP, aynı görsel kalitede JPEG'den kabaca %25-35 daha küçük dosya boyutuna sahiptir ve saydamlık desteği ekler. 2020'den beri tüm büyük tarayıcılar tarafından desteklenmektedir, bu nedenle göndermemek için pratik bir neden yoktur. Kalite 85'teki 430 KB'lık bir JPEG, aynı görsel doğrulukta tipik olarak 290 KB'lık bir WebP'dir.
    </p>
    <p>
      Olağan desen: <code>&lt;picture&gt;</code> aracılığıyla bir JPEG yedeği ile WebP sunun veya bir CDN'nin <code>Accept</code> başlığı aracılığıyla içerik anlaşmasını yönetmesine izin verin. AVIF daha da küçüktür (JPEG'in ~%50'si) ancak daha yavaş kodlamaya ve daha düşük araç desteğine sahiptir — yalnızca en büyük görselleriniz için kullanın.
    </p>

    <h2>PNG optimizasyonu</h2>
    <p>
      PNG kayıpsızdır, bu nedenle "sıkıştırma", verileri atmak değil, daha iyi bir kodlama bulmak anlamına gelir. Temel ayarlar: <strong>renk paleti azaltma</strong> (görüntüde 256'dan az farklı renk varsa PNG-24 gerçek renkten PNG-8 paletine geçmek boyutu %70 oranında azaltabilir — simgeler ve diyagramlar genellikle böyledir), <strong>filtre ve sıkıştırma seviyesi</strong> (zlib seviyeleri 0-9; 9 en yavaş ve en küçüktür) ve <strong>öbek kaldırma</strong> (<code>tEXt</code> ve <code>iTXt</code> gibi meta veri öbeklerini kaldırma).
    </p>
    <p>
      pngquant ve oxipng gibi araçlar, tipik bir PNG ekran görüntüsünü görünür bir değişiklik olmadan %40-70 oranında azaltabilir. Fotoğraf içeriği için her zaman JPEG veya WebP'yi PNG'ye tercih edin — fotoğraflarda PNG, aynı algılanan kalite için JPEG'in dosya boyutunun 5-10 katıdır.
    </p>

    <h2>Bağlama göre hedef boyutlar</h2>
    <pre>{`Bağlam               Hedef boyut         Biçim
Kahraman görseli     150-400 KB          WebP veya JPEG q80
Blog içi fotoğraf    80-200 KB           WebP veya JPEG q80
Küçük resim          15-40 KB            WebP
Ürün ızgarası        50-120 KB           WebP
Sosyal medya paylaşımı 200-400 KB        JPEG q85, 1200x630
E-posta bülteni      maks. 100 KB her biri JPEG q75
Favicon               < 10 KB toplam     PNG veya ICO
Mobil uygulama simgesi 40-80 KB          PNG-8`}</pre>
    <p>
      Bunlar fotogerçekçi hedeflerdir. SVG'deki düz illüstrasyonlar 2-10 KB'dir ve logolar, simgeler ve diyagramlar için neredeyse her zaman raster üzerinde kullanılmalıdır.
    </p>

    <h2>Sıkıştırmadan önce çözünürlük</h2>
    <p>
      6000x4000'lik bir görüntüyü 200 KB'a sıkıştırmak, önce onu 1920x1280'e yeniden boyutlandırıp ardından sıkıştırmaktan daha fazla hasar verir. Sıkıştırıcının çalışması için daha az piksel vardır, bu nedenle piksel başına bit daha yüksektir. Sıkıştırmadan önce her zaman görüntüleme boyutuna (veya Retina için 2x) yeniden boyutlandırın. 400 piksel genişliğindeki bir kart küçük resmi, 4000 piksellik bir kaynağa ihtiyaç duymaz.
    </p>

    <h2>Mobil vs masaüstü</h2>
    <p>
      Fiber üzerindeki bir masaüstü ziyaretçisi, 500 KB'lık bir kahraman görselini fark etmeden işleyebilir. Kırsal bir 4G kulesindeki bir mobil ziyaretçi, her ek 100 KB'ı hisseder. Daha küçük ekranlara daha küçük dosyalar sunmak için <code>srcset</code> ile duyarlı görseller kullanın:
    </p>
    <pre>{`<img
  src="hero-1280.webp"
  srcset="hero-640.webp 640w,
          hero-960.webp 960w,
          hero-1280.webp 1280w,
          hero-1920.webp 1920w"
  sizes="(max-width: 768px) 100vw, 1280px"
  alt="..."
  loading="lazy">`}</pre>
    <p>
      Bu, aynı işaretlemeden telefonlara 60 KB 640 genişliğinde bir dosya ve masaüstlerine 350 KB 1920 genişliğinde bir dosya sunar. <code>loading=&quot;lazy&quot;</code> özelliği, ekran dışı görselleri kaydırma yapılana kadar erteler.
    </p>

    <h2>EXIF kaldırma</h2>
    <p>
      Telefonlardan ve kameralardan gelen fotoğraflar EXIF meta verileri taşır: GPS koordinatları, kamera modeli, lens, pozlama ayarları, bazen fotoğrafçının adı. Bu, görsel başına 5-50 KB ekler ve daha da önemlisi, yayınlamayı asla amaçlamadığınız konum verilerini sızdırabilir — çocuğunuzun doğum günü partisinin bir fotoğrafı ev adresinizi coğrafi olarak etiketleyebilir. Bunu tutmak için belirli bir nedeniniz yoksa (foto muhabirliği, stok fotoğraf atıfı), genel web'e giden herhangi bir görselde EXIF'i kaldırın.
    </p>

    <h2>Aşamalı JPEG</h2>
    <p>
      Aşamalı bir JPEG, yukarıdan aşağıya yerine katmanlı geçişlerle yüklenir — bulanık önizleme, ardından daha keskin, ardından son. Yavaş bağlantılarda, kullanıcı hızlı bir şekilde anlamlı bir şey görür. Dosya boyutu, temel JPEG ile neredeyse aynıdır (genellikle biraz daha küçüktür). Çoğu kodlayıcının bir "aşamalı" veya "geçmeli" onay kutusu vardır; onu açın.
    </p>

    <h2>Toplu sıkıştırma</h2>
    <p>
      Yüzlerce sıkıştırılmamış görsele sahip mevcut bir site için, <code>sharp</code>, <code>imagemin</code> veya <code>squoosh-cli</code> gibi araçlarla tek seferlik bir toplu işlem çalıştırın. Makul bir işlem hattı: maksimum 1920 genişliğe yeniden boyutlandırın, kalite 80'de WebP'ye dönüştürün, hem WebP hem de bir JPEG yedeği yazın, EXIF'i kaldırın. Bir pazarlama sitesi için, tipik olarak toplam görsel ağırlığını %60-80 oranında azaltırsınız.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Aynı JPEG'i birden çok kez kaydetmek.</strong> Her yeniden kodlama kalite kaybına neden olur. Kayıpsız bir ana kopya (PNG veya orijinal) saklayın ve JPEG'i her seferinde ondan yeniden dışa aktarın.
    </p>
    <p>
      <strong>Fotoğraflar için PNG kullanmak.</strong> PNG, fotoğraflar için JPEG'den 5-10 kat daha büyüktür ve algılanabilir bir kalite avantajı yoktur. PNG'yi yalnızca ekran görüntüleri, diyagramlar, saydamlık veya keskin metin içeren görseller için kullanın.
    </p>
    <p>
      <strong>6000 piksellik bir kaynağı 200 KB'a sıkıştırmak.</strong> Önce yeniden boyutlandırın. 1920 piksellik bir görüntüyü 200 KB'a sıkıştırırken piksel başına kalite, 24 milyon pikseli aynı bütçeye sıkıştırmaktan çok daha yüksektir.
    </p>
    <p>
      <strong>Kaliteyi açıkça ayarlamayı unutmak.</strong> Varsayılan JPEG kalitesi araçlar arasında büyük farklılık gösterir — bazıları 75'e, diğerleri 95'e varsayılan olarak ayarlanır. Ayarlayın.
    </p>
    <p>
      <strong>Herkese açık fotoğraflarda EXIF meta verilerini bırakmak.</strong> GPS koordinatları, cihaz modeli ve zaman damgaları, onları kaldırmadığınız sürece her yüklemede sızar.
    </p>
    <p>
      <strong>Tüm ekranlar için tek bir boyut sunmak.</strong> 1920 piksellik bir kahraman görseli, 375 piksellik bir telefonda aşırıya kaçar ve bant genişliğini boşa harcar. <code>srcset</code> kullanın.
    </p>
    <p>
      <strong>"Tarayıcı desteği" nedeniyle WebP'yi atlamak.</strong> WebP, 2024 itibarıyla %99+ küresel desteğe sahiptir. Göndermek güvenlidir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Bir masaüstü uygulaması olmadan fotoğrafları <a href="/tools/image-compressor">görsel sıkıştırıcı</a> ile sıkıştırın. Sıkıştırmadan önce boyutları önemli ölçüde küçültmek için <a href="/tools/image-resizer">görsel yeniden boyutlandırıcı</a> ile eşleştirin ve yayınlamadan önce konum ve cihaz meta verilerini temizlemek için <a href="/tools/exif-remover">EXIF kaldırıcı</a> kullanın.
    </p>
  </>
);