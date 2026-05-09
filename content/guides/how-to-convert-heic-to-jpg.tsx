import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      HEIC, iOS 11'den bu yana iPhone'larda varsayılan fotoğraf formatıdır ve neredeyse her yerde hâlâ bir uyumluluk baş ağrısıdır. Windows kullanıcıları paylaşılan bir HEIC dosyasına çift tıkladığında hata alır; eski fotoğraf baskı kioskları reddeder; birçok web yayınlama aracı ve CMS bunu kaldıramaz. Buna karşılık JPEG, daha büyük dosyalar ve HDR veya çoklu görüntü patlama depolama gibi özellikler için destek olmaması pahasına her yerde çalışır. Dönüştürme genellikle tek tıklamayla yapılır, ancak kalite, meta veri ve iş akışı seçimlerini bilinçli yapmaya değer. Bu kılavuz, HEIC'in neden var olduğunu, ne zaman dönüştürüleceğini ve dönüştürme sırasında EXIF'in nasıl korunacağını açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>iPhone'lar neden HEIC çeker</h2>
    <p>
      HEIC (Yüksek Verimlilikli Görüntü Konteyneri), HEVC codec'ini kullanarak fotoğrafları aynı görsel kalitede JPEG'den yaklaşık %50 daha küçük sıkıştırır. 256 GB'lık bir iPhone'da bu gerçek bir fark yaratır: Fotoğraflar kitaplığınız yaklaşık iki kat daha fazla resim tutar.
    </p>
    <p>
      Ayrıca çoklu görüntü konteynerlerini (Canlı Fotoğraflar, patlama dizileri), daha geniş renk gamını ve daha zengin HDR için 10 bit rengi destekler. Apple'ın varsayılan olarak buna geçmesinin nedenleri bunlardır. Dezavantajı: HEIC, patentle korunan HEVC'dir ve bu da onu birçok üçüncü taraf ekosisteminin dışında tutmuştur.
    </p>

    <h2>HEIC'in uyumluluğu bozduğu yerler</h2>
    <p>
      HEIC, Apple ekosisteminde ve çoğu büyük platformun modern sürümlerinde çalışır, ancak boşluklar vardır:
    </p>
    <ul>
      <li><strong>Windows 10/11:</strong> önizleme için (bazen ücretli) bir uzantı paketi gerekir.</li>
      <li><strong>Eski Android:</strong> kısmi destek; OEM'e bağlıdır.</li>
      <li><strong>Birçok CMS ve forum:</strong> desteklenmeyen yükleme olarak reddedilir.</li>
      <li><strong>Baskı kioskları ve fotoğraf laboratuvarları:</strong> genellikle JPEG gerektirir.</li>
      <li><strong>Eski masaüstü uygulamaları:</strong> Microsoft Office, birçok PDF oluşturucu, eski resim düzenleyiciler.</li>
      <li><strong>E-posta önizlemeleri:</strong> eski posta istemcilerindeki alıcılar hiçbir şey görmez.</li>
    </ul>
    <p>
      Hedef Apple/iCloud baloncuğunun dışındaysa, JPEG (veya WebP/PNG) daha güvenlidir.
    </p>

    <h2>Dönüştürmenin kalite maliyeti</h2>
    <p>
      HEIC'i JPEG'e dönüştürmek, HEIC'in kodunu çözmek ve ardından JPEG olarak yeniden kodlamak anlamına gelir. JPEG daha az verimlidir, bu nedenle kalite eşleşen bir JPEG, orijinal HEIC'in dosya boyutunun yaklaşık 2 katıdır. Kalite-90 JPEG, bir telefon ekranında HEIC kaynağından ayırt edilemez görünür; kalite 75'e düşürmek, küçük görünür maliyetle önemli ölçüde bayt tasarrufu sağlar.
    </p>
    <p>
      Tekrar tekrar dönüştürmeyin ve yeniden sıkıştırmayın. Her gidiş dönüş daha fazla yapaylık ekler. Bir kalite ayarı seçin ve dönüştürülen dosyaya bağlı kalın.
    </p>

    <h2>Dönüştürme sırasında EXIF'i koruyun</h2>
    <p>
      HEIC dosyaları tam EXIF taşır &mdash; çekim tarihi, GPS, kamera ayarları. İyi bir dönüştürücü hepsini JPEG'e kopyalar. Kötü bir dönüştürücü meta verileri düşürür ve bu da şunlara neden olabilir:
    </p>
    <ul>
      <li>Yan dönmüş fotoğraflar (kayıp Yönlendirme etiketi).</li>
      <li>Fotoğrafların fotoğraf kitaplıklarının &ldquo;tarihsiz&rdquo; bölümlerinde görünmesi.</li>
      <li>Harita görünümleri için kayıp GPS verileri.</li>
      <li>Profesyonel dosyalar için kayıp yazarlık ve telif hakkı.</li>
    </ul>
    <p>
      Herhangi bir yeni dönüştürücünün çıktısını, bir toplu işlem için güvenmeden önce dosyalarınızdan birine karşı kontrol edin.
    </p>

    <h2>Canlı Fotoğraflar ve çoklu görüntü HEIC'leri</h2>
    <p>
      Canlı Fotoğraf, kısa bir MOV videosuyla eşleştirilmiş bir HEIC görüntüsüdür. HEIC'i dönüştürmek size hareketsiz görüntüyü verir; araç MOV'u ayrı olarak çıkarmadıkça hareket kaybolur. Bazı dönüştürücüler hem JPEG hem de MP4 çıktısı verir; çoğu size yalnızca hareketsiz kareyi verir.
    </p>
    <p>
      Patlama HEIC'leri (tek konteynerde birden çok kare), araç tüm kareleri çıkarmanıza izin vermedikçe tipik olarak ilk veya &ldquo;anahtar&rdquo; kareye dönüştürülür.
    </p>

    <h2>Toplu dönüştürme</h2>
    <p>
      En yaygın toplu işlem senaryosu: düzenleme için bir klasör iPhone fotoğrafını bir Windows PC'ye aktardınız. Her dosya HEIC ve hiçbiri açılmak istemiyor. İyi bir toplu dönüştürücü:
    </p>
    <ul>
      <li>Özyinelemeli klasör ağaçlarını işler.</li>
      <li>Tüm çalıştırma için bir kalite seviyesi belirlemenize izin verir.</li>
      <li>EXIF'i korur.</li>
      <li>Etiketi kaldırmadan önce yönlendirmeyi sabitler.</li>
      <li>HEIC orijinallerini korumak için ayrı bir klasöre çıktı verir.</li>
    </ul>

    <h2>Alternatif hedefler: WebP ve PNG</h2>
    <p>
      JPEG, yaygınlığı nedeniyle varsayılan HEIC dönüştürme hedefidir, ancak tek seçenek bu değildir:
    </p>
    <ul>
      <li><strong>WebP</strong> kabaca HEIC'in verimliliğiyle eşleşir ve tüm modern tarayıcılarda ve birçok araçta desteklenir. Web yüklemesi için iyidir.</li>
      <li><strong>PNG</strong> kayıpsızdır &mdash; arşiv kalitesi için ekran görüntülerini veya metin/UI öğeleri içeren görüntüleri dönüştürürken kullanın.</li>
      <li><strong>AVIF</strong> HEIC verimliliğiyle eşleşir veya onu geçer ve destek kazanmaktadır; bazı işlem hatları için hâlâ çok yenidir.</li>
    </ul>
    <p>
      Hedef, kontrol ettiğiniz bir web sitesiyse, HEIC'i doğrudan WebP'ye dönüştürmek JPEG adımını tamamen atlar.
    </p>

    <h2>iPhone: JPEG'i tercih ediyorsanız HEIC çekmeyi bırakın</h2>
    <p>
      HEIC iş akışınızda sürekli sürtüşmeye neden oluyorsa, iPhone'un kendisindeki çekim ayarını değiştirin:
    </p>
    <pre>{`Ayarlar &gt; Kamera &gt; Formatlar &gt; En Uyumlu`}</pre>
    <p>
      Bu, depolama maliyetiyle çekimi JPEG'e (ve H.264 videosuna) geçirir. Mevcut HEIC'ler geriye dönük olarak dönüştürülmez, ancak bu noktadan itibaren tüm yeni fotoğraflar JPEG olacaktır.
    </p>

    <h2>AirDrop ve paylaşım sayfası otomatik dönüştürmesi</h2>
    <p>
      iOS yardımcı olmaya çalışır: bir HEIC'i AirDrop ile bir Mac'e gönderdiğinizde HEIC olarak kalır; birçok üçüncü taraf uygulamayla paylaştığınızda, iOS genellikle anında JPEG'e dönüştürür. Bu nedenle bazı HEIC'ler bir Windows PC'ye zaten JPEG olarak ulaşır &mdash; kaynak JPEG olduğu için değil, paylaşım yolunun dönüştürmesi nedeniyle.
    </p>
    <p>
      Farklı aktarım yöntemlerinden tutarsız formatlar alıyorsanız, nedeni budur. Öngörülebilirlik için, Çekim'i &ldquo;En Uyumlu&rdquo; olarak ayarlayın veya her zaman orijinalleri aktarın (iCloud Fotoğrafları indirmesi veya DCIM'in kablo kopyası).
    </p>

    <h2>Renk uzayını koruyun</h2>
    <p>
      iPhone'lar, standart sRGB'den daha geniş bir renk gamı olan Display P3'te çekim yapar. JPEG'e dönüştürürken araç şunları yapabilir:
    </p>
    <ul>
      <li>P3 profilini JPEG'e gömün (modern tarayıcılar ve uygulamalar buna saygı duyar, renkler doğru görünür).</li>
      <li>Renkleri sRGB'ye dönüştürün (aptal görüntüleyiciler için daha güvenli; geniş gamlı renkler sıkıştırılır).</li>
    </ul>
    <p>
      Doygunluktan çok erişimin önemli olduğu web yüklemesi için sRGB pragmatik seçimdir. Fotoğraf baskısı ve arşivleme için, yazıcı veya hedef destekliyorsa P3 profilini koruyun.
    </p>

    <h2>Tarayıcı tabanlı ve masaüstü dönüştürme</h2>
    <p>
      Üç araç kategorisi:
    </p>
    <ul>
      <li><strong>Tarayıcı tabanlı (istemci tarafı):</strong> dosyalar cihazınızdan asla ayrılmaz; WebAssembly'yi yerel olarak çalıştırır. Gizlilik için en iyisi; büyük toplu işlemlerde tarayıcı belleğiyle sınırlıdır.</li>
      <li><strong>Yükleme ile çevrimiçi hizmetler:</strong> hızlı ve ölçeklenebilir, ancak fotoğraflarınız başka birinin sunucusundadır. Gizlilik politikasını okuyun.</li>
      <li><strong>Masaüstü uygulamaları:</strong> büyük kitaplıklar ve tekrarlanan iş akışları için en iyisi; kurulumu daha yavaştır.</li>
    </ul>
    <p>
      Hassas fotoğraflar için &mdash; tıbbi kayıtlar, aile fotoğrafları, belge taramaları &mdash; istemci tarafı araçlar tek güvenli seçenektir. Sıradan anlık görüntüler için, yüklemeye dayalı dönüştürme daha hızlıdır ve genellikle sorunsuzdur.
    </p>

    <h2>Dönüştürme hatalarını yönetme</h2>
    <p>
      Bazı HEIC dosyaları, dönüştürücü tarafından desteklenmeyen özellikler içerdikleri için dönüştürülemez: Canlı Fotoğraf video akışları, portre modu için derinlik haritaları veya satıcıya özel HDR konteynerleri. Bir dönüştürme hatası verdiğinde:
    </p>
    <ul>
      <li>Farklı bir araç deneyin &mdash; farklı kitaplıklar farklı uç durumları işler.</li>
      <li>HEIC'i Fotoğraflar'da (Mac) veya iPhone'da açın ve oradan JPEG'e yeniden dışa aktarın.</li>
      <li>Dosya iCloud Fotoğrafları'ndaysa, iPhone ayarlarında &ldquo;Mac veya PC'ye Aktar&rdquo;ı &ldquo;Otomatik&rdquo; olarak ayarlayın &mdash; bu, senkronizasyon sırasında otomatik olarak JPEG'e dönüştürür.</li>
    </ul>

    <h2>Disk alanı etkisi</h2>
    <p>
      Bir HEIC kitaplığını JPEG'lere dönüştürmek, görüntü koleksiyonu için depolama kullanımını kabaca ikiye katlar. 200 GB'lık bir iCloud kitaplığı, 400 GB'lık bir JPEG klasörü haline gelir. Hepsine JPEG olarak ihtiyacınız olup olmadığını veya yalnızca belirli olanlara (paylaştığınız, düzenlediğiniz veya yazdırdığınız) ihtiyacınız olup olmadığını düşünün.
    </p>
    <p>
      Seçici dönüştürme iş akışı &mdash; HEIC'i ana kitaplık olarak tutun, belirli kullanımlar için talep üzerine dönüştürün &mdash; çoğu kullanıcı için tam kitaplık dönüştürmeyi geride bırakır. Apple'ın kendi Fotoğraflar uygulaması, ekosistem dışında paylaşım yaparken tam olarak bunu yapar.
    </p>

    <h2>Karma kitaplıklar için adlandırma kuralları</h2>
    <p>
      Geçiş aşamasındaysanız (bazı HEIC, bazı JPEG) ve her ikisini de tutmak istiyorsanız, net bir adlandırma soneki karışıklığı önler:
    </p>
    <pre>{`IMG_1234.heic       (orijinal iPhone dosyası)
IMG_1234.jpg        (dönüştürülmüş, aynı içerik)
IMG_1234-edited.jpg (dönüştürme sonrası düzenlemeler)`}</pre>
    <p>
      Bazı dönüştürücüler otomatik olarak <code>_converted</code> ekler. Bir desen seçin ve ona bağlı kalın &mdash; 5000 fotoğraflı bir kitaplıkta karışık kurallar kalıcı bir organizasyon sorunudur.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      EXIF'i sessizce düşüren bir dönüştürücü kullanmak ve haftalar sonra dönüştürülmüş kitaplığınızın tarih veya GPS içermediğini keşfetmek. Bir HEIC'i kalite 60'ta JPEG'e dönüştürmek, orijinalin üzerine kaydetmek ve bir daha geri gelmeyecek ayrıntıları kaybetmek. Yönlendirme etiketini görmezden gelmek ve yan dönmüş fotoğraflar yayınlamak. Birine e-postayla HEIC göndermeye çalışmak ve neden açamadıklarını merak etmek &mdash; önce dönüştürün. Ve ince olan: HEIC'i PNG'ye dönüştürmek, PNG'nin &ldquo;daha yüksek kaliteli&rdquo; olduğunu düşünmek &mdash; teknik olarak kayıpsız, evet, ancak HEIC'in zaten attığını geri sıkıştıramazsınız ve ortaya çıkan PNG genellikle görünür bir kazanç olmadan 4&ndash;8 kat daha büyüktür.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/heic-to-jpg">HEIC'ten JPG'ye dönüştürücümüz</a> tek dosyaları ve toplu işlemleri işler, EXIF'i korur, yönlendirmeyi güvenli bir şekilde sabitler ve kalite ön ayarları sunar. Diğer format dönüştürmeleri için &mdash; PNG'den WebP'ye, JPEG'den AVIF'e &mdash; daha genel <a href="/tools/image-format-converter">görüntü formatı dönüştürücü</a> hepsini kapsar. Dönüştürülen dosyalar hâlâ şişkinse, <a href="/tools/image-compressor">görüntü sıkıştırıcı</a> piksel boyutlarına dokunmadan onları kırpar.
    </p>
  </>
);