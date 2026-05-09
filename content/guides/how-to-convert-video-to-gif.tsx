import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir videoyu GIF'e dönüştürmek basit bir tek tıklamalık iş gibi görünür. Bunu yapan çoğu araç berbat sonuçlar üretir &mdash; bulanık renkler, devasa dosya boyutları veya dikkati dağılmış bir gencin çizdiği flipbook'u andıran kare hızları. İyi GIF'ler üreten araçların hepsi perde arkasında aynı şeyi yapar: önce kırp, akıllı bir palet oluştur ve kodlayıcıyı doğru bayraklarla çalıştır. Bu kılavuz, bir video GIF olduğunda ne olduğunu, neredeyse her web dönüştürücüsünün arkasındaki motorun neden FFmpeg olduğunu, çıktı kalitesini dönüştüren iki geçişli palet tekniğini, renk taklidi ödünleşimlerini, önemli olan dosya boyutu hedeflerini ve GIF yerine ne zaman APNG veya animasyonlu WebP kullanılacağını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Gerçekte ne oluyor</h2>
    <p>
      Video codec'leri (H.264, H.265, VP9, AV1) kareleri önceki karelerden farklar olarak saklar &mdash; ana kareler artı delta farkları. GIF her kareyi bağımsız bir görüntü olarak saklar. Dönüştürmek için kod çözücü her video karesini tam renkli olarak yeniden oluşturur, ardından GIF kodlayıcı 256 renkli bir palet seçer ve her pikseli o paletteki en yakın renge indirger.
    </p>
    <p>
      Bunun üç büyük sonucu vardır: dosya boyutu patlar (GIF çoğu kare için kareler arası sıkıştırmaya sahip değildir), kalite düşer (256 renk yumuşak geçişleri temsil edemez) ve kodlama yavaştır (her kare bağımsız olarak işlenir). Dönüştürme sürecindeki her karar bu üçünü dengeler.
    </p>

    <h2>FFmpeg ile perde arkası</h2>
    <p>
      FFmpeg, web'deki neredeyse her video-GIF dönüştürücüsünün arkasındaki açık kaynaklı motordur. Saf bir tek satırlık kod kötü çıktı üretir:
    </p>
    <pre>{`# Saf: tek geçiş, genel palet, çirkin sonuç
ffmpeg -i input.mp4 -r 12 -s 640x360 output.gif`}</pre>
    <p>
      Sorun palettir. FFmpeg, videonuzdaki gerçek renklerle eşleşmeyen genel bir 256 renkli palet seçer, bu nedenle kırmızılar turuncuya, gök mavileri mora döner. Çözüm, iki geçişli palet oluşturmadır.
    </p>

    <h2>İki geçişli palet tekniği</h2>
    <pre>{`# Geçiş 1: videoyu tara, en uygun paleti oluştur
ffmpeg -i input.mp4 -vf "fps=12,scale=640:-1:flags=lanczos,palettegen" palette.png

# Geçiş 2: bu özel paleti kullanarak GIF'i kodla
ffmpeg -i input.mp4 -i palette.png \\
  -filter_complex "fps=12,scale=640:-1:flags=lanczos[x];[x][1:v]paletteuse" \\
  output.gif`}</pre>
    <p>
      İlk geçiş, videodaki her kareyi analiz eder ve içeriği en iyi temsil eden 256 rengi seçer. İkinci geçiş, kodlama için bu paleti kullanır. Sonuç: dosya boyutu cezası olmadan önemli ölçüde daha iyi renk doğruluğu. Web'deki kalite odaklı her GIF dönüştürücüsü bunun bir versiyonunu yapar.
    </p>

    <h2>Kodlamadan önce kırp</h2>
    <p>
      Dönüştürmeden önce kaynak videoyu her zaman istediğiniz tam bölüme kırpın. 10 saniyelik bir klip 3MB'lık bir GIF olur; 30 saniyelik bir klip 12MB'lık bir GIF olur. Fazladan görüntüyü kodlayıp sonra kırpmayın &mdash; kodlama süresi toplam süreye bağlıdır.
    </p>
    <pre>{`# Önce kırp, sonra dönüştür
ffmpeg -ss 00:00:15 -to 00:00:23 -i input.mp4 -c copy trimmed.mp4
# Ardından trimmed.mp4 üzerinde iki geçişli paleti çalıştır`}</pre>

    <h2>Renk taklidi: açık veya kapalı</h2>
    <p>
      Renk taklidi, palette olmayan ara renkleri simüle etmek için renk hatalarını komşu piksellere dağıtır. FFmpeg'in varsayılanı, ince taneli bir gürültü deseni gibi görünen Sierra3 renk taklididir.
    </p>
    <p>
      <strong>Renk taklidini açın</strong> fotoğraf içerikleri, ten tonları, gökyüzü, gün batımları &mdash; yumuşak renk geçişlerinin önemli olduğu her yer için. Bantlanma kaybolur, yerini ince bir doku alır.
    </p>
    <p>
      <strong>Renk taklidini kapatın</strong> (<code>dither=none</code>) kullanıcı arayüzü ekran kayıtları, düz logolar, geniş düz renk alanlarına sahip animasyonlar için. Renk taklidi bunlara görünür gürültü ekler ve sıkıştırmaya zarar verir. Geriye dönük, kasıtlı piksel sanatı görünümü için <code>bayer</code> renk taklidini kullanın.
    </p>

    <h2>Kare hızı ödünleşimi</h2>
    <p>
      GIF dosya boyutu, kare sayısıyla doğrusal olarak artar. 30fps'den 15fps'ye düşürmek boyutu yarıya indirir. Çoğu içerik için, 12&ndash;15fps, sıradan izleyiciler için 30fps'den ayırt edilemez &mdash; beyin hareketi tamamlar. Yavaş, kasıtlı içerikler için (metin solması, bir araç ipucunun belirmesi), 8&ndash;10fps yeterlidir.
    </p>

    <h2>Hedef dosya boyutu</h2>
    <pre>{`# İki geçişli palette sonra kabaca tahminler:
480x270 @ 12fps, 3 sn:   300-600 KB
640x360 @ 12fps, 3 sn:   500-900 KB
640x360 @ 15fps, 5 sn:   1.2-2.0 MB
720x405 @ 15fps, 4 sn:   1.5-2.5 MB
1080x608 @ 15fps, 5 sn:  3-5 MB (genellikle çok büyük)`}</pre>
    <p>
      Blog yazıları için 2MB'ın altında GIF'ler gönderin; Slack için 500KB'ın altında. Aşarsanız, önce boyutları küçültün (en büyük etki), ardından süreyi kısaltın, ardından kare hızını düşürün.
    </p>

    <h2>Ölçekleme ve en boy oranı</h2>
    <p>
      Lanczos filtreleme (<code>flags=lanczos</code>), varsayılan çift doğrusal filtreden daha keskin küçültülmüş çıktı üretir. Her zaman belirtin. En boy oranı için, FFmpeg'in diğer boyutu orantılı olarak hesaplamasına izin vermek için <code>scale=WIDTH:-1</code> veya <code>scale=-1:HEIGHT</code> kullanın. <code>-1</code> yerine <code>-2</code> kullanmak, elde edilen boyutun 2'ye bölünebilir olmasını sağlar; bu, bazı alt akış araçlarının gerektirdiği bir durumdur.
    </p>

    <h2>APNG ve animasyonlu WebP alternatifleri</h2>
    <p>
      Hedef platformunuz bunları destekliyorsa, her iki format da GIF'i açık ara yener.
      <strong> Animasyonlu WebP</strong> tipik olarak eşdeğer bir GIF'in boyutunun %30&ndash;50'si kadardır, tam renk ve gerçek alfa kanalına sahiptir. Tüm modern tarayıcılar ve çoğu sohbet platformu tarafından desteklenir. Çoğu e-posta istemcisi tarafından desteklenmez.
    </p>
    <p>
      <strong>APNG</strong>, kayıpsız yeteneğe sahip PNG'nin animasyonlu versiyonudur. Evrensel tarayıcı desteği, kullanıcı arayüzü animasyonları için mükemmeldir, ancak animasyonlu WebP'den daha büyüktür.
    </p>
    <pre>{`# Animasyonlu WebP (aynı kalite için GIF'ten çok daha küçük)
ffmpeg -i input.mp4 -vf "fps=15,scale=640:-2:flags=lanczos" \\
  -loop 0 -q:v 80 output.webp`}</pre>
    <p>
      Web yerleştirmeleri için varsayılan olarak animasyonlu WebP'yi kullanın. Yalnızca e-posta uyumluluğuna ihtiyacınız olduğunda veya bilinmeyen formatları kaldıran bir platforma gönderi yaparken GIF'e aktarın.
    </p>

    <h2>Kenarlardaki kalite</h2>
    <p>
      Kareler arasındaki keskin geçişler (kesmeler, solmalar, beliren metin), GIF'lerin en kötü göründüğü yerlerdir &mdash; palet her iki durumu da kapsamak zorundadır ve her biri için daha az palet alanı bırakır. Bir klibin ortasında sert bir kesme varsa, onu iki GIF'e bölmeyi veya palete nefes alma alanı sağlamak için kesmeden önce bir kareyi tutmayı düşünün.
    </p>

    <h2>Döngü ve kare tutma</h2>
    <p>
      FFmpeg'in varsayılan döngüsü sonsuzdur. Açık olmak için <code>-loop 0</code> belirtin. Profesyonel bir çıktı için, son kareyi 500&ndash;800ms uzatın (döngü yeniden başlamadan önce tutun) &mdash; aniden kesilmek yerine profesyonel hissettirir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Tek geçişli palet kodlaması.</strong> Genel palet renklerin yanlış görünmesine neden olur. Her zaman iki geçişli palettegen/paletteuse iş akışını kullanın.
    </p>
    <p>
      <strong>Tam video çözünürlüğünde dönüştürme.</strong> 1080p GIF'ler neredeyse hiçbir zaman istediğiniz şey değildir. 480&ndash;720 piksele küçültün.
    </p>
    <p>
      <strong>Başta/sonda kullanılmayan görüntüyü bırakmak.</strong> Her ekstra saniye dosyayı şişirir. Tam ana kırpın.
    </p>
    <p>
      <strong>Düz kullanıcı arayüzü ekran kayıtlarında renk taklidi kullanmak.</strong> Gürültü ekler, sıkıştırmaya zarar verir, kirli görünür. Yapay içerik için kapatın.
    </p>
    <p>
      <strong>WebP desteklenirken GIF kullanmak.</strong> WebP, daha iyi renklerle yarı boyuttadır. Hedef platformunuz kabul etmediği sürece varsayılan olarak WebP'yi kullanın.
    </p>
    <p>
      <strong>Kare hızını 20fps'nin üzerine çıkarmak.</strong> Algılanan pürüzsüzlükte azalan getiri, dosya boyutunda doğrusal maliyet.
    </p>
    <p>
      <strong>30 saniyelik klipleri GIF'e dönüştürmek.</strong> Herhangi bir kalitede 10MB+ olurlar. 6&ndash;8 saniyeden uzun herhangi bir şey için bunun yerine sessiz otomatik oynatmalı bir video kullanın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Videoları döngülü GIF'lere dönüştürmek için{" "}
      <a href="/tools/video-to-gif">video-GIF dönüştürücüyü</a> kullanın. Kaynağı döngüye değer tam bölüme kesmek için bunu{" "}
      <a href="/tools/video-trimmer">video kırpıcıyla</a> ve mevcut görüntüleri dönüştürmek yerine sıfırdan kareler birleştiriyorsanız{" "}
      <a href="/tools/gif-maker">GIF yapıcıyla</a> eşleştirin.
    </p>
  </>
);