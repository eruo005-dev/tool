import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      EXIF meta verileri, neye bakmanız gerektiğini biliyorsanız bir altın madenidir: fotoğrafın ne zaman ve nerede çekildiğini, hangi kamera ve ayarlarla çekildiğini ve dosyanın düzenlenip düzenlenmediğini ortaya çıkarır. Fotoğrafçılar kendi çalışmalarından ders çıkarmak için kullanır; gazeteciler ve araştırmacılar özgünlüğü doğrulamak için kullanır; gizlilik bilincine sahip kullanıcılar ise bir fotoğrafı paylaşmadan önce hangi kişisel bilgileri taşıdığını kontrol etmek için kullanır. Bu kılavuz, okumaya değer EXIF alanlarını, bunların nasıl yorumlanacağını ve en yaygın tuzakları kapsar &mdash; saat dilimi kayması, düzenlenmiş ancak meta verileri temizlenmemiş dosyalar ve sahte meta veriler.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Temel EXIF alanları</h2>
    <p>
      Bir fotoğraf düzinelerce alan taşıyabilir, ancak bir avuç alan işin çoğunu görür:
    </p>
    <ul>
      <li><strong>Make, Model:</strong> fotoğrafı çeken kamera.</li>
      <li><strong>LensModel, FocalLength:</strong> lens ve yakınlaştırma ayarı.</li>
      <li><strong>FNumber, ExposureTime, ISO:</strong> pozlama üçlüsü.</li>
      <li><strong>DateTimeOriginal:</strong> deklanşörün ne zaman basıldığı.</li>
      <li><strong>GPSLatitude, GPSLongitude, GPSAltitude:</strong> nerede çekildiği.</li>
      <li><strong>Orientation:</strong> görüntüleme dönüşü (1 = dik, 6 = telefon portresi).</li>
      <li><strong>Flash:</strong> flaşın patlayıp patlamadığı ve nasıl patladığı.</li>
      <li><strong>Software:</strong> dosyayı en son kaydeden uygulama.</li>
      <li><strong>Artist, Copyright:</strong> kamera veya kullanıcı tarafından ayarlanmışsa yazarlık bilgisi.</li>
    </ul>

    <h2>Kamera ayarlarını okuma</h2>
    <p>
      Kendi çalışmalarını inceleyen fotoğrafçılar için pozlama üçlüsü, kameranın (veya sizin) hangi kararları verdiğini söyler:
    </p>
    <pre>{`FNumber:       f/2.8
ExposureTime:  1/125 s
ISO:           400
FocalLength:   50 mm
Flash:         Patlamadı`}</pre>
    <p>
      Hızlı bir enstantane ile geniş bir diyafram (düşük f-sayısı) ve orta düzeyde ISO, loş bir mekanda doğal ışık anlamına gelir. Yavaş bir enstantane ile yüksek ISO, flaşsız düşük ışık anlamına gelir. Bir galerideki deseni okumak alışkanlıklarınızı gösterir &mdash; belki çok geniş diyaframda çekiyorsunuzdur veya ISO varsayılanlarınız çok muhafazakardır.
    </p>

    <h2>Zaman damgaları ve saat dilimi tuzağı</h2>
    <p>
      <code>DateTimeOriginal</code> alanı, çekim anındaki yerel saati saklar, ancak çoğu kamera saat dilimini kaydetmez. Fotoğrafı Tokyo'da saat 2'de çekip daha sonra New York'a yüklediyseniz, zaman damgası hala saat 2'yi gösterir &mdash; ancak başka bir bağlam olmadan bunun Tokyo yerel saati mi yoksa New York yerel saati mi olduğunu bilemezsiniz.
    </p>
    <p>
      Modern telefonlar genellikle, belirsizliği ortadan kaldıran bir <code>OffsetTimeOriginal</code> alanı (ör. <code>+09:00</code>) ekler. Eski kameralar neredeyse hiç eklemez. Kronoloji önemliyse, her iki alanı da kontrol edin.
    </p>

    <h2>GPS hassasiyeti ve formatı</h2>
    <p>
      GPS alanları derece-dakika-saniye veya ondalık derece olarak gelir. Tipik bir okuma:
    </p>
    <pre>{`GPSLatitude:     40° 44' 55.85" K
GPSLongitude:    73° 59' 11.35" B
GPSAltitude:     21.3 m Deniz Seviyesinin Üstünde`}</pre>
    <p>
      Bu, birkaç metre hassasiyetle Midtown Manhattan. Ondalık formu (40.748847, -73.985368) herhangi bir harita aracına yapıştırın ve tam binayı görebilirsiniz. Bu hassasiyet, paylaşmadan önce GPS'in neden temizlenmesi gerektiğini açıklar.
    </p>
    <p>
      Her fotoğrafta GPS yoktur &mdash; telefonlar varsayılan olarak kaydeder ancak kameraların bir akıllı telefonla eşleşmesi veya yerleşik GPS'in etkinleştirilmesi gerekir. GPS'in olmaması fotoğrafın anonim olduğu anlamına gelmez; cihazın bir konum kaydetmediği anlamına gelir.
    </p>

    <h2>Düzenlenmiş ancak meta verileri temizlenmemiş fotoğrafları tespit etme</h2>
    <p>
      <code>Software</code> alanı, bir dosyanın son işlemcisini ortaya çıkarır. Bir fotoğrafın doğrudan kameradan çıkmış bir anlık görüntü olduğu iddia ediliyorsa ancak Software alanı <strong>Adobe Photoshop 25.0</strong> yazıyorsa, birileri düzenleme yapmıştır.
    </p>
    <p>
      Diğer ipuçları:
    </p>
    <ul>
      <li><strong>Uyumsuz Make/Model:</strong> meta verilerdeki lens, iddia edilen kamera gövdesi için mevcut değildir.</li>
      <li><strong>Olağandışı DateTimeDigitized ve DateTimeOriginal:</strong> büyük bir fark, işlem sonrası veya baskıdan tarama olduğunu gösterir.</li>
      <li><strong>EXIF'in tamamen eksik olması:</strong> ya temizlenmiştir ya da dosya, meta verileri düşüren bir araç tarafından yeniden kaydedilmiştir. EXIF'siz bir "ham kamera JPEG"i şüphelidir.</li>
      <li><strong>Küçük resim uyuşmazlığı:</strong> bazı dosyalar küçük bir önizleme saklar; tam görüntüden farklıysa, tam görüntü düzenlenmiştir.</li>
    </ul>

    <h2>Özgünlüğü doğrulama</h2>
    <p>
      Gazeteciler ve araştırmacılar, EXIF'i bir özgünlük kontrol katmanı olarak kullanır. Belirli bir konumdan çekildiği iddia edilen ancak GPS'i başka bir yeri gösteren bir fotoğraf kırmızı bayraktır. Tasvir ettiği olaydan önceki bir zaman damgası başka bir kırmızı bayraktır.
    </p>
    <p>
      EXIF'in kolayca sahtesinin yapılabileceğini unutmayın &mdash; kararlı bir aktör alanları yeniden yazabilir. EXIF analizi, bir başlangıç noktası olarak kullanışlıdır, kanıt olarak değil. Tersine görsel arama, gölge açısı analizi ve bağlam ile birleştirin.
    </p>

    <h2>EXIF'in ötesinde IPTC ve XMP</h2>
    <p>
      EXIF'in ötesinde, profesyonel fotoğraf iş akışları IPTC (altyazı, anahtar kelimeler, telif hakkı, yazar) ve XMP (Adobe'nin düzenleme geçmişi ve derecelendirmeleri) blokları gömer. İyi bir görüntüleyici üçünü de yan yana gösterir. IPTC telif hakkını okumak, yazarlığı kimin talep ettiğini söyler; XMP'yi okumak, Lightroom'un kaydettiği şekilde düzenleme geçmişini ortaya çıkarır.
    </p>
    <p>
      Bir tarayıcı çıktısı genellikle tarama yazılımını gösteren XMP'ye sahip olur; yoğun şekilde düzenlenmiş bir dosya katmanlar, derecelendirmeler ve dışa aktarma ayarları gösterir.
    </p>

    <h2>Yönlendirme ve fotoğrafların neden yan döndüğü</h2>
    <p>
      Orientation etiketi, "yan" görünen bir fotoğrafın aslında görüntülenirken döndürülmesi gereken bir manzara piksel arabelleği olup olmadığını ortaya çıkarır. Değer 1 dik anlamına gelir, 6 görüntüleme için saat yönünde 90° döndürme anlamına gelir (standart iPhone portresi), 8 saat yönünde 270° döndürme anlamına gelir (diğer yönde tutulan portre).
    </p>
    <p>
      Bir fotoğraf bazı uygulamalarda doğru görünüyorsa ancak diğerlerinde yan görünüyorsa, Orientation etiketi açıklamadır. Buna saygı duyan uygulamalar dik gösterir; saygı duymayanlar ham pikselleri gösterir.
    </p>

    <h2>EXIF'i özel olarak okuma</h2>
    <p>
      Dosyaları yerel olarak işleyen tarayıcı tabanlı bir görüntüleyici, fotoğrafınızı hiçbir yere yüklemez &mdash; görüntü hassas bilgiler içerebileceğinde bu önemlidir. Bir görüntüleyici dosya yüklemesi talep ediyorsa, ona bir aile veya tıbbi fotoğrafı vermeden önce iki kez düşünün.
    </p>
    <p>
      Gerçek çevrimdışı inceleme için <code>exiftool</code> komut satırı aracı altın standarttır. İyi bir web görüntüleyicisi, WebAssembly'ye derlenmiş aynı ayrıştırma kitaplığını kullanır ve tarayıcınızda çalıştırır.
    </p>

    <h2>Gizliliğin ötesinde pratik kullanımlar</h2>
    <p>
      EXIF'i kontrol etmenin bazı günlük kazanımları:
    </p>
    <ul>
      <li>Telefon fotoğraflarının neden "yumuşak göründüğünü" teşhis etmek &mdash; ISO ve enstantane hızını kontrol edin.</li>
      <li>Bir stok fotoğrafın gerçekten iddia edildiği kadar yeni olduğunu onaylamak.</li>
      <li>Taklit etmek istediğiniz harika bir çekimdeki tam lensi belirlemek.</li>
      <li>Bir emlak ilanı fotoğrafının bu yıla ait olduğunu, beş yıl öncesine ait olmadığını doğrulamak.</li>
      <li>İletilen bir fotoğrafın işlenip işlenmediğini araştırmak.</li>
    </ul>

    <h2>EXIF eksik olduğunda</h2>
    <p>
      Hiç EXIF'i olmayan bir dosya temizlenmiş, meta verileri düşüren bir araçla dönüştürülmüş veya bir sosyal platform tarafından yeniden kaydedilmiştir. "EXIF yok"un "orijinal" anlamına geldiğini varsaymayın. Genellikle bunun tersi doğrudur: orijinaller en fazla meta veriye sahiptir ve türevler onu kaybeder.
    </p>

    <h2>Bir toplu işte EXIF'i karşılaştırma</h2>
    <p>
      Bir fotoğraf klasörü genelinde EXIF'in elektronik tablo görünümü, denetim için güçlüdür:
    </p>
    <ul>
      <li>Dosya adı tarihleri olmasa bile bir zaman çizelgesi oluşturmak için DateTimeOriginal'a göre sıralayın.</li>
      <li>Hangi kameranın hangi görüntüleri ürettiğini görmek için Make/Model'e göre gruplayın.</li>
      <li>Temizlenmemiş konum verilerini tespit etmek için GPS varlığına göre filtreleyin.</li>
      <li>Düzenlemeye değer yüksek gürültülü çekimleri bulmak için ISO'ya göre sıralayın.</li>
      <li>Düzenleme araçlarından geçmiş dosyaları yakalamak için Software alanını çapraz kontrol edin.</li>
    </ul>
    <p>
      Komut satırı <code>exiftool</code> bunun için CSV dışa aktarabilir; web araçları giderek aynısını bir "toplu bilgi" modu olarak sunar.
    </p>

    <h2>Ham dosyalar ve tescilli meta veriler</h2>
    <p>
      Kamera ham dosyaları (CR3, NEF, ARW, DNG), JPEG'lerden çok daha zengin meta veriler içerir &mdash; ayarlandığı şekliyle beyaz dengesi, kullanılan otomatik odak noktası, görüntü sabitleme durumu, hatta tam yön sensörü okumaları. Çoğu web görüntüleyicisi bu tescilli alanları temizler veya ayrıştıramaz. Derin ham analiz için kamera satıcısının yazılımını veya <code>exiftool</code>'u kullanın.
    </p>
    <p>
      Çoğu günlük ihtiyaç, ham düzeyde meta veri gerektirmez &mdash; JPEG EXIF, en niş alanlar dışında her şeye sahiptir. Ancak bir odak kaçırma sorununu teşhis ediyor veya belirli bir çekim ayarını doğruluyorsanız, ham dosya tam kaydı taşır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      EXIF'i mutlak gerçek olarak kabul etmek &mdash; her alanın doğru araçla düzenlenebileceğini unutmak. Saat dilimi farkını hesaba katmadan zaman damgalarını okumak. GPS yokluğunun fotoğrafın coğrafi konumunun belirlenemeyeceği anlamına geldiğini varsaymak (tersine görsel arama ve görsel ipuçları genellikle bunu yapabilir). Orientation etiketini görmezden gelmek ve "yan" ham pikseller tarafından kafa karıştırmak. Bir fotoğrafı, dosyayı gizlice günlüğe kaydeden bir "EXIF görüntüleyici" hizmetine yüklemek &mdash; tarayıcıda yerel olarak işleyen araçları tercih edin. Ve EXIF'e gömülü küçük resmi gerçek görüntüyle karıştırmak; düzenlenmiş dosyalarda önemli ölçüde farklılık gösterebilirler.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/exif-viewer">EXIF görüntüleyicimiz</a>, tüm EXIF, IPTC ve XMP alanlarını tarayıcıda yerel olarak okur &mdash; dosyalar cihazınızdan asla ayrılmaz. İncelemeden sonra amacınız hassas alanları temizlemekse, <a href="/tools/exif-remover">EXIF temizleyici</a> bir sonraki adımdır. Ve bir görüntünün düşündüğünüz boyutta olup olmadığına dair hızlı bir mantık kontrolü için, <a href="/tools/image-dimensions-checker">görüntü boyutları denetleyicisi</a> size genişlik, yükseklik ve dosya boyutunu bir bakışta verir.
    </p>
  </>
);
===END FILE===