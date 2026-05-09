import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Çektiğiniz her fotoğraf, EXIF adı verilen gizli meta verileri kaydeder: kamera modeli, enstantane hızı, ISO, çekimin yapıldığı tam GPS koordinatları, saniyesine kadar tarih ve saat ve bazen cihazın seri numarası. Bunların çoğu fotoğrafçılar için kullanışlıdır ve gizlilik için felakettir. Bir telefon fotoğrafını çevrimiçi biriyle paylaştığınızda ev adresinizi de paylaşmış olabilirsiniz. Yayınlamadan önce EXIF'i kaldırmak, her içerik oluşturucunun edinmesi gereken tek tıklamalık bir alışkanlıktır ve bu kaldırma işlemi, görüntünün tek bir pikseline dokunmadan yapılabilir. Bu kılavuz, EXIF'in ne içerdiğini, ne zaman kaldırılması gerektiğini ve ne zaman saklanmasının önemli olduğunu kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir EXIF kaydında gerçekte ne var</h2>
    <p>
      EXIF (Değiştirilebilir Görüntü Dosyası Biçimi), JPEG, TIFF ve giderek artan şekilde WebP/HEIC dosyalarına eklenen standart bir meta veri bloğudur. Tipik bir kayıt şunları içerir:
    </p>
    <ul>
      <li><strong>Kamera markası ve modeli</strong> (ör. Apple iPhone 15 Pro)</li>
      <li><strong>Lens markası ve modeli</strong>, odak uzaklığı, diyafram</li>
      <li><strong>Enstantane hızı, ISO, poz telafisi</strong></li>
      <li><strong>Çekim tarihi ve saati</strong>, bazen saat dilimiyle birlikte</li>
      <li><strong>GPS enlemi, boylamı ve yüksekliği</strong> &mdash; genellikle birkaç metre hassasiyetinde</li>
      <li><strong>Yönlendirme etiketi</strong> (görüntüleme için döndürme ipucu)</li>
      <li><strong>Cihaz seri numarası</strong> (bazı kameralarda)</li>
      <li><strong>Sanatçı/sahip adı</strong> kamerada yapılandırılmışsa</li>
      <li><strong>Dosyayı işlemek için kullanılan yazılım</strong> (Lightroom, Photoshop, filtre uygulamaları)</li>
    </ul>

    <h2>Gizliliğin burada neden önemli olduğu</h2>
    <p>
      GPS koordinatları en büyük sorundur. Bir ebeveyn, çocuğunun okulun ilk günü fotoğrafını yayınlar; EXIF, enlem 40.748847, boylam -73.985368 der ve meta verileri okuyan herkes artık ailenin evini veya çocuğun okulunu bilir. Emlak dolandırıcıları, takipçiler ve sıradan sapıklar bunu kontrol etmeyi bilir.
    </p>
    <p>
      Zaman damgaları ikinci risktir. Diğer kamuya açık bilgilerle birleştirildiğinde, &ldquo;Bugün Paris'ten çalışıyorum&rdquo; gönderisi ve 6 saat önceki Paris saatiyle bir EXIF zaman damgası, bir kişinin konumunu ve programını istediğinden daha kesin bir şekilde doğrular.
    </p>

    <h2>Hangi platformlar EXIF'i kaldırır ve hangileri kaldırmaz</h2>
    <p>
      Sizi korumaları için platformlara güvenmeyin &mdash; davranışları değişir:
    </p>
    <ul>
      <li><strong>Instagram, Facebook, Twitter/X, LinkedIn:</strong> yükleme sırasında GPS dahil çoğu EXIF'i kaldırır.</li>
      <li><strong>WhatsApp:</strong> fotoğraflardan çoğu EXIF'i kaldırır; iletilen &ldquo;belge&rdquo; dosyaları kaldırılmayabilir.</li>
      <li><strong>E-posta ekleri:</strong> genellikle dokunulmaz.</li>
      <li><strong>Kişisel web siteleri ve bloglar:</strong> CMS açıkça kaldırmadıkça dokunulmaz.</li>
      <li><strong>Dosya aktarım hizmetleri (Dropbox, iCloud):</strong> dokunulmaz.</li>
      <li><strong>Görüntü panoları ve forumlar:</strong> büyük ölçüde değişir.</li>
    </ul>
    <p>
      Güvenli alışkanlık: her seferinde yüklemeden önce kaldırın.
    </p>

    <h2>Kayıpsız kaldırma</h2>
    <p>
      EXIF'i kaldırmak piksel verilerine dokunmaz. İyi araçlar yalnızca meta veri bloklarını düzenler; görüntünün kendisi piksel temsilinde bayt olarak aynıdır ve JPEG'ler orijinal sıkıştırma kalitelerinde kalır. Bir dosya tipik olarak birkaç KB (tam çözünürlüklü bir küçük resim önizlemesi depolanıyorsa bazen onlarca KB) küçülür.
    </p>
    <p>
      JPEG'i yeniden kaydederek &ldquo;EXIF kaldıran&rdquo; araçlardan kaçının, çünkü bu yeniden kodlama yapar ve kalite kaybına neden olur. Özel bir EXIF aracı, yalnızca meta veri işlemi olmalıdır.
    </p>

    <h2>Yönlendirme etiketi tuzağı</h2>
    <p>
      EXIF'i kaldırdığınızda, Yönlendirme etiketi de gider. Görüntü, dik görüntüleme için etikete güvenen yanlamasına bir piksel arabelleğiyse, şimdi her yerde yanlamasına görünecektir. Çözüm: önce pikselleri fiziksel olarak döndürün, ardından etiketi kaldırın.
    </p>
    <p>
      İyi EXIF kaldırıcılar, Yönlendirme etiketini algılar, döndürmeyi piksellere işler, ardından kaldırır. Kötü olanlar körü körüne kaldırır ve size yanlamasına fotoğraflar bırakır.
    </p>

    <h2>Başka neler kaldırılır</h2>
    <p>
      EXIF'in ötesinde, fotoğraflar genellikle şunları taşır:
    </p>
    <ul>
      <li><strong>IPTC</strong> &mdash; altyazı, anahtar kelimeler, telif hakkı, yazarlık (haber ve stok ile popüler).</li>
      <li><strong>XMP</strong> &mdash; Adobe'nin genişletilmiş meta verileri (düzenleme geçmişi, derecelendirmeler, anahtar kelimeler).</li>
      <li><strong>ICC profilleri</strong> &mdash; renk uzayı açıklaması.</li>
      <li><strong>Küçük resim önizlemeleri</strong> &mdash; dosyanın içine gömülü küçük kopyalar.</li>
    </ul>
    <p>
      Çoğu kaldırıcı, EXIF, IPTC ve XMP'yi birlikte temizler. Hedefin eksik renk bilgisini zarif bir şekilde işlediğini bilmiyorsanız ICC profilini saklayın &mdash; profili kaldırırsanız ve izleyici kaynak Adobe RGB iken sRGB varsayarsa renkler gözle görülür şekilde kayabilir.
    </p>

    <h2>Toplu kaldırma iş akışları</h2>
    <p>
      Toplu işler için &mdash; paylaşmadan önce tüm fotoğraf kitaplıkları, bulut depolamaya yüklemeden önce tüm tatil fotoğrafları &mdash; toplu kaldırıcılar saniyeler içinde yüzlerce dosyayı işler. Şunlara bakın:
    </p>
    <ul>
      <li>Özyinelemeli klasör desteği.</li>
      <li>Türe göre filtrele (yalnızca JPEG, RAW'ı atla).</li>
      <li>Orijinalleri koruma seçeneği (çıktıyı ayrı bir klasöre yaz).</li>
      <li>Yönlendirme güvenli modu.</li>
      <li>Seçici kaldırma (telif hakkını sakla, GPS'i kaldır).</li>
    </ul>

    <h2>EXIF'in saklanmasının faydalı olduğu durumlar</h2>
    <p>
      Her kullanım durumu tam kaldırma gerektirmez:
    </p>
    <ul>
      <li><strong>Profesyonel fotoğrafçılık portföyleri:</strong> kamera, lens, ayarlar içeriğin bir parçasıdır ve ilgili ziyaretçiler bunları okur.</li>
      <li><strong>Foto muhabirliği:</strong> zaman damgaları ve bazen GPS, bir fotoğrafın ne zaman ve nerede çekildiğine dair kanıttır.</li>
      <li><strong>Sigorta ve yasal talepler:</strong> yakalama meta verileri kanıt olarak önemli olabilir.</li>
      <li><strong>Kişisel fotoğraf kitaplığı organizasyonu:</strong> tarihler ve GPS, harita ve zaman çizelgesi özelliklerini yönlendirir.</li>
      <li><strong>Bilimsel görüntüler:</strong> yakalama parametreleri verinin bir parçasıdır.</li>
    </ul>
    <p>
      Bu durumlar için, herkese açık paylaşımdan önce yalnızca GPS ve yazar alanlarını kaldırın; gerisini saklayın.
    </p>

    <h2>Seçici kaldırma</h2>
    <p>
      En güvenli orta yol, seçici kaldırmadır: GPS ve yazar adını kaldırın, diğer her şeyi saklayın. Çoğu gelişmiş EXIF aracı, alan bazında kontrol sunar.
    </p>
    <pre>{`Kaldır: GPSLatitude, GPSLongitude, GPSAltitude,
        GPSTimeStamp, Artist, OwnerName,
        CameraOwnerName, SerialNumber
Sakla:  Make, Model, ExposureTime, FNumber,
        ISO, DateTimeOriginal, ICC profili`}</pre>
    <p>
      Bu denge, fotoğrafçılık becerisini görünür kılar ve kişisel verileri gizli tutar.
    </p>

    <h2>Kaldırmadan sonra doğrulama</h2>
    <p>
      Güvenmeyin &mdash; doğrulayın. Kaldırma işlemini çalıştırdıktan sonra, dosyayı bir EXIF görüntüleyicide açın ve hassas alanların gerçekten gittiğini onaylayın. Kaldırdığını iddia eden ancak bir yerde bir GPS alanı bırakan bir araç, yanlış güven oluşturduğu için hiç araç olmamasından daha kötüdür.
    </p>
    <p>
      Bir dosyayı iki farklı kaldırıcıdan geçirmek, bazen birinin kaçırdığını ortaya çıkarır. Hassas içerik için, çifte önlem iyidir.
    </p>

    <h2>İşletim sistemi hızlı kaldırma seçenekleri</h2>
    <p>
      Bazı işletim sistemleri, özel bir araç olmadan temel EXIF kaldırma sunar:
    </p>
    <ul>
      <li><strong>Windows:</strong> bir dosyaya sağ tıklayın, Özellikler, Ayrıntılar sekmesi, &ldquo;Özellikleri ve Kişisel Bilgileri Kaldır.&rdquo; Dosya bazında veya tüm klasör bazında çalışır.</li>
      <li><strong>macOS:</strong> Preview'ın &ldquo;Dışa Aktar&rdquo; özelliği, &ldquo;Meta verileri sakla&rdquo; onay kutusu işaretli değilken çoğu alanı kaldırır. GPS için özel olarak, Fotoğraflar uygulamasının &ldquo;Görüntü &gt; Konum &gt; Konumu Gizle&rdquo; özelliği dışa aktarmadan önce çalışır.</li>
      <li><strong>iOS:</strong> paylaşırken, paylaşım sayfasının üst kısmındaki &ldquo;Seçenekler&rdquo;e dokunun ve &ldquo;Konum&rdquo;u kapatın.</li>
      <li><strong>Android:</strong> OEM'e göre değişir; Google Fotoğraflar'ın dosya bazında &ldquo;Coğrafi konumu kaldır&rdquo; seçeneği vardır.</li>
    </ul>
    <p>
      Bu yerleşik özellikler yaygın durumları halleder. Özel araçlar, toplu iş ve seçici kaldırma için hala onları geride bırakır.
    </p>

    <h2>Yasal ve gazetecilikle ilgili hususlar</h2>
    <p>
      Gazetecilik için, kaynak doğrulaması için saklanan temiz bir kopya olmadan kanıt fotoğraflarından asla EXIF kaldırmayın. Meta veriler genellikle &ldquo;bu iddia güvenilir&rdquo; ile &ldquo;bunu doğrulayamıyoruz&rdquo; arasındaki farktır. Orijinalleri saklayın; kaldırılmış türevleri yayınlayın.
    </p>
    <p>
      Yasal keşif için, meta veriler belgenin bir parçasıdır ve bunu kaldırmak başlı başına bir sorun olabilir. Dava ile ilgili herhangi bir şeyi toplu olarak kaldırmadan önce avukata danışın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      JPEG'i yeniden kodlayan, sessizce kalite kaybına neden olan bir araçla EXIF kaldırmak. Yönlendirmeyi işlemeden kaldırma yapmak ve yanlamasına fotoğraflarla sonuçlanmak. Bazı alanları kaldırırken bazılarını kaldırmayan bir sosyal platforma güvenmek. Kaldırmanın yalnızca geçerli dosya için geçerli olduğunu unutmak &mdash; daha sonra telefonunuzdan orijinal HEIC'i paylaşırsanız, başa dönersiniz. Ve ince olanı: bazı gizlilik bilincine sahip kullanıcılar EXIF'i kaldırır ancak &ldquo;IMG_20250810_142355.jpg&rdquo; dosya adını bırakır, bu da çekim tarihini sızdırır. Tam hijyen için dosyaları da yeniden adlandırın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/exif-remover">EXIF kaldırıcımız</a>, kayıpsız bir meta veri kaldırma işlemi gerçekleştirir, yönlendirmeyi güvenli bir şekilde işler ve meşru olarak kullanışlı alanlar için seçici saklama sunar. Sonucu onaylamak için <a href="/tools/exif-viewer">EXIF görüntüleyici</a>, herhangi bir dosyada tam olarak ne olduğunu gösterir. Ve dosya boyutunu da azaltan bir gizlilik geçişi için, kaldırılmış dosyaları daha sonra <a href="/tools/image-compressor">görüntü sıkıştırıcıdan</a> geçirin.
    </p>
  </>
);