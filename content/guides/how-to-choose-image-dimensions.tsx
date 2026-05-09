export const intro = (
  <>
    <p>
      Görsel boyutları, içeriğin profesyonel mi yoksa amatörce mi göründüğünü belirleyen küçük, gösterişsiz detaylardan biridir. Bir bloga 2400 piksel genişliğinde bir görsel yükleyin, yavaş yüklenir; 600 piksellik bir görsel yükleyin, yüksek çözünürlüklü ekranlarda pikselli görünür. Instagram'a yanlış en-boy oranına sahip bir fotoğraf yükleyin, platform önemli kısmı kırpar.
    </p>
    <p>
      Bu rehber, her bağlam için (web, sosyal medya, e-posta, baskı) doğru boyutları nasıl seçeceğinizi ve en-boy oranının neden genellikle ham piksel sayısından daha önemli olduğunu ele alıyor. Bu seçimleri bir kez doğru yapın, görselleriniz ekstra çaba gerektirmeden her yerde profesyonel görünecektir.
    </p>
  </>
);

export const body = (
  <>
    <h2>Pikseller, en-boy oranı ve yoğunluk</h2>
    <p>
      Her görsel üç sayı ile tanımlanır: <strong>piksel boyutları</strong> (genişlik × yükseklik piksel olarak), <strong>en-boy oranı</strong> (şekil—16:9, 1:1, 4:5) ve{" "}
      <strong>piksel yoğunluğu</strong> (ekran pikseli başına düşen görsel piksel sayısı). Platformlar önce en-boy oranına (düzenlerine uyuyor mu?), sonra piksel boyutlarına (yeterince keskin mi?), ardından dosya boyutuna (ne kadar hızlı yükleniyor?) bakar. İlk ikisi için tasarlayın; üçüncüsü için sıkıştırın.
    </p>

    <h2>Web görselleri: 2× kuralı</h2>
    <p>
      Modern telefonlar, tabletler ve dizüstü bilgisayarlar yüksek DPI ekranlar kullanır. Ekranda 600 piksel genişliğinde olan bir görsel, dosyada en az 1200 piksel genişliğinde olmalıdır—aksi takdirde retina ekranlarda yumuşak görünür. Bu 2× kuralıdır. Görüntüleme boyutunda tasarlayın, 2× olarak dışa aktarın ve kahraman görseller için dosya boyutunu 200 KB'ın, küçük resimler için 50 KB'ın altında tutmak için sıkıştırın. İşlenmiş boyutlarınızı{" "}
      <a href="/tools/image-dimensions-checker">görsel boyutları denetleyicimiz</a> ile kontrol edin.
    </p>

    <h2>Blog yazısı öne çıkan görselleri</h2>
    <p>
      Güvenli bir standart: 1200 × 630 piksel (yaklaşık 1.91:1). Bu, Open Graph özellikleriyle eşleşir, böylece aynı dosya bir blog kahramanı ve Twitter/LinkedIn önizleme kartı olarak çalışır. Biraz daha uzun bir kahraman görseli istiyorsanız, 1200 × 675 (16:9) olarak kırpın, ancak OG sürümünü 1.91:1'de tutun.
    </p>

    <h2>Sosyal medya platform bazında</h2>
    <p>
      Instagram akışı: 1080 × 1080 (1:1) veya 1080 × 1350 (4:5)—dikey daha iyi performans gösterir. Instagram hikaye/Reel: 1080 × 1920 (9:16). Twitter/X akış içi: 1600 × 900 (16:9). LinkedIn gönderisi: 1200 × 1200 (1:1) veya 1200 × 627 (1.91:1). YouTube küçük resmi: 1280 × 720. Pinterest pin: 1000 × 1500 (2:3, dikey en iyi performansı gösterir). Tam kopya kağıdını{" "}
      <a href="/tools/social-media-image-sizes">sosyal medya görsel boyutları</a> aracımızda görün.
    </p>

    <h2>Sosyal gönderileri mahveden en-boy oranı hatası</h2>
    <p>
      Instagram'a 16:9 masaüstü ekran görüntüsü yüklemek. Platform ya onu 1:1'e kırpar (kenarları keser), 4:5'e zorlar (küçük bir şerit haline getirir) veya mektup kutusu ekler (çerçevenin yarısını boşa harcar). Her zaman hedef oranda kompozisyon yapın. Ölçeklerken oranlar arasında dönüştürmek için{" "}
      <a href="/tools/aspect-ratio-calculator">en-boy oranı hesaplayıcısını</a> kullanın.
    </p>

    <h2>E-posta başlık görselleri</h2>
    <p>
      Çoğu e-posta istemcisi maksimum 600 piksel genişliğinde işleme yapar. Başlıkları 600 × 200 veya 1200 × 400 (retina için) olarak tasarlayın. Dosyayı 100 KB'ın altında tutun—büyük görseller Gmail tarafından kaldırılır veya ek olarak gösterilir. Her zaman anlamlı bir alt özniteliği belirleyin; birçok alıcı e-postayı görseller engellenmiş olarak görüntüler ve gördükleri alt metindir.
    </p>

    <h2>Doğru formatı kullanın</h2>
    <p>
      <strong>JPEG</strong> fotoğraflar için. <strong>PNG</strong> şeffaflık veya keskin kenarlar içeren görseller için (logolar, ekran görüntüleri). <strong>SVG</strong> simgeler ve basit illüstrasyonlar için—her boyutta mükemmel ölçeklenir. <strong>WebP</strong> veya <strong>AVIF</strong> platformunuz destekliyorsa—aynı kalitede JPEG'den %30–50 daha küçük.{" "}
      <a href="/tools/image-format-converter">Görsel format dönüştürücümüz</a> tarayıcıda tüm yaygın dönüşümleri halleder.
    </p>

    <h2>Agresif sıkıştırın</h2>
    <p>
      Web için, %70–85 JPEG kalitesi insan gözüne %100'den ayırt edilemez ancak dosya boyutunun yarısı kadardır. PNG için, son kayıttan önce kayıplı bir optimize edici (pngquant) kullanın. Sayfa hızı kazançları birikir—kahraman görselden kestiğiniz her kilobayt her ziyaretçi tarafından yüklenir. Yayınlamadan önce görselleri{" "}
      <a href="/tools/image-compressor">görsel sıkıştırıcımızdan</a> geçirin.
    </p>

    <h2>Gerçek cihazlarda test edin</h2>
    <p>
      27 inç monitörde mükemmel görünen bir düzen, iPhone SE'de bozulabilir. Bir sayfayı yayınlamadan önce, telefonunuzda, tabletinizde ve dizüstü bilgisayarınızda görüntüleyin. Özellikle garip kırpılan, yavaş yüklenen veya metni ekran dışına iten görselleri arayın.
    </p>

    <h2>Bir şablon kitaplığı oluşturun</h2>
    <p>
      Blogunuz, sosyal gönderileriniz, e-posta başlıklarınız ve küçük resimleriniz için boyutları bir kez öğrendikten sonra, tasarım aracınızda şablonlar kaydedin. Doğru şablona bir tıklama, asla boş bir tuval açıp tahmin etmemeniz anlamına gelir. Ekiplerin yanlış görsel boyutunu göndermesinin bir numaralı nedeni kontrol etmeyi unutmaktır—şablonlar kararı ortadan kaldırır.
    </p>

    <h2>Alt metin de görsel meta verisidir</h2>
    <p>
      Web'deki her görselin alt metni olmalıdır—ekran okuyucular için, SEO için ve görsel yüklenemediğinde dayanıklılık için. Görselde ne olduğunu ve çevreleyen metin için neden önemli olduğunu tanımlayın, sadece neye benzediğini değil.{" "}
      <a href="/tools/alt-text-helper">Alt metin yardımcımız</a>, bir dakikadan kısa sürede makul bir taslak oluşturmanızda size yol gösterir.
    </p>

    <p>
      İlgili: <a href="/guides/how-to-compress-images-without-losing-quality">kalite kaybetmeden görseller nasıl sıkıştırılır</a>, <a href="/guides/how-to-convert-webp-to-jpg">WebP'den JPG'ye nasıl dönüştürülür</a> ve <a href="/guides/how-to-crop-images-online">çevrimiçi görseller nasıl kırpılır</a>.
    </p>
  </>
);