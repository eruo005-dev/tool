import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      CSS gradyanları modern tasarımda her yerde — hero arka planları,
      buton hover efektleri, kart kaplamaları, mesh tarzı arka planlar,
      metin efektleri. Ayrıca aşırıya kaçmak da kolaydır.
      İyi yerleştirilmiş bir gradyan sayfanın tasarlandığı hissini verir; kötü bir
      gradyan ise 2012 Bootstrap'i anımsatır. Bu kılavuz, gradyan
      türlerini, gerçekten iyi görünen yönleri ve durakları nasıl seçeceğinizi, performans
      etkilerini, erişilebilirlik hususlarını (evet, gradyanların da kontrast kuralları vardır) ve
      düz tasarımlara derinlik katan modern teknikleri — mesh gradyanlar, animasyonlu gradyanlar,
      konik gradyanlar — kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>CSS'te üç gradyan türü</h2>
    <p>
      <strong>Doğrusal gradyan:</strong> renkler düz bir çizgi boyunca geçiş yapar.
      En çok kullanılan gradyan. <code>linear-gradient(
      to right, #f00, #00f)</code>.
    </p>
    <p>
      <strong>Radyal gradyan:</strong> renkler bir merkez noktasından dışarıya doğru yayılır.
      Spot ışığı veya karartma efekti oluşturur. <code>
      radial-gradient(circle at center, #fff, #000)</code>.
    </p>
    <p>
      <strong>Konik gradyan:</strong> renkler bir merkez noktası etrafında dönerek
      pasta grafiği veya renk çarkı efekti oluşturur. <code>
      conic-gradient(from 0deg, red, yellow, green, blue, red)</code>.
      Az kullanılır ve genellikle modern görünümlü gradyanların anahtarıdır.
    </p>

    <h2>Yön — sadece &ldquo;yukarıdan aşağıya&rdquo; değil</h2>
    <p>
      Doğrusal gradyanlar anahtar kelimeleri (<code>to top</code>,
      <code> to right</code>, <code>to bottom left</code>) veya açıları
      (<code>45deg</code>, <code>135deg</code>) kabul eder.
    </p>
    <p>
      <strong>0deg</strong> = aşağıdan yukarıya (geleneksel matematik
      kurallarının aksine).
    </p>
    <p>
      <strong>90deg</strong> = soldan sağa.
    </p>
    <p>
      <strong>180deg</strong> = yukarıdan aşağıya (varsayılan).
    </p>
    <p>
      <strong>İpucu:</strong> çapraz gradyanlar (30-60deg veya
      120-150deg) tam yatay/dikey olanlardan daha dinamik hissettirir.
      <code>linear-gradient(to right, #f00, #00f)</code> ile
      <code>linear-gradient(135deg, #f00, #00f)</code>'yi karşılaştırın —
      çapraz olan daha modern hissettirir.
    </p>

    <h2>Renk durakları — gizli beceri</h2>
    <p>
      Varsayılan olarak, renkler eşit şekilde dağılır. Geçiş yapacakları
      yeri kontrol etmek her şeyi değiştirir.
    </p>
    <p>
      <code>linear-gradient(to right, red, blue)</code> = %50
      geçiş noktası.
    </p>
    <p>
      <code>linear-gradient(to right, red, blue 80%)</code> = mavi
      %80'de başlar, kırmızı baskındır.
    </p>
    <p>
      <code>linear-gradient(to right, red 0%, red 30%, blue 70%,
      blue 100%)</code> = ortada bir bant ile sert kenarlar.
    </p>
    <p>
      <strong>&ldquo;Gri bulanıklık&rdquo; sorunu:</strong>
      tamamlayıcı renkler (kırmızı→yeşil, mavi→turuncu) arasında geçiş yapmak
      çamurlu bir orta alan oluşturur. Çözüm: gri bölgeyi atlayan bir
      orta nokta ekleyin.
    </p>
    <p>
      <code>linear-gradient(to right, red, orange, yellow)</code> —
      renk çarkının etrafından dolaşarak çamurlu orta alanı önler.
    </p>

    <h2>Renk enterpolasyonu — yeni CSS süper gücü</h2>
    <p>
      Modern tarayıcılar (2024+) gradyan enterpolasyonu için <code>in oklch</code> ve
      diğer renk uzaylarını destekler:
    </p>
    <p>
      <code>linear-gradient(in oklch to right, red, blue)</code>
    </p>
    <p>
      <strong>Bu neden önemli:</strong> varsayılan sRGB uzayında enterpolasyon
      zıt renkler arasında çamurlu orta tonlar üretir. OKLCH (algısal olarak tekdüze)
      canlı, eşit geçişler üretir. Pürüzsüz renk tonu geçişleri için kullanın.
    </p>
    <p>
      Ayrıca mevcut: <code>in oklab</code>, <code>in hsl</code>,
      <code>in lab</code>. Farklı uzaylar farklı orta alanlar üretir;
      deney yapın.
    </p>

    <h2>Gradyanları doğru kullanma</h2>
    <p>
      <strong>Hero arka planları:</strong> ince gradyanlar kaliteli hissettirir.
      Birbirine yakın iki analog renk seçin (mavi → teal,
      mor → pembe). Tam doygunlukta zıt renklerden kaçının.
    </p>
    <p>
      <strong>Okunabilirlik için kaplamalar:</strong> bir görselin üzerindeki metin
      genellikle okunabilir kalmak için bir gradyan kaplamaya ihtiyaç duyar. <code>
      linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7))</code>
      metnin bulunduğu alt yarıyı karartır.
    </p>
    <p>
      <strong>Butonlar:</strong> ince bir gradyan (açıktan biraz
      koyuya) boyut kazandırır, göze batmaz. Skeuomorfik hissettiren
      buton gradyanlarından kaçının.
    </p>
    <p>
      <strong>Kart vurgu şeritleri:</strong> bir kartın kenarında 4px'lik bir gradyan şerit
      incelik katar.
    </p>
    <p>
      <strong>Metin efektleri:</strong> <code>background:
      linear-gradient(...); -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;</code> metni bir
      gradyanla doldurur. Başlıklar için çarpıcı; 2020-2022'de aşırı kullanıldığı
      için şimdi idareli kullanın.
    </p>

    <h2>Mesh gradyanlar — güncel tasarım akımı</h2>
    <p>
      Mesh gradyanlar (organik damlalar oluşturan çok noktalı, çok renkli gradyanlar)
      2024-2026 tasarımında her yerde. CSS'nin
      yerel mesh gradyan desteği yoktur, ancak
      üst üste bindirilmiş radyal gradyanlarla taklit edebilirsiniz.
    </p>
    <p>
      <code>background: radial-gradient(circle at 20% 30%, #f0f 0,
      transparent 40%), radial-gradient(circle at 80% 60%, #0ff 0,
      transparent 40%), #fff;</code>
    </p>
    <p>
      Her radyal gradyan bir &ldquo;damla&rdquo;dır; saydam geçiş
      alttaki rengin görünmesini sağlar. meshgradient.in gibi araçlar
      bunları görsel olarak oluşturur.
    </p>

    <h2>Gradyanları canlandırma</h2>
    <p>
      CSS'de <code>background-image</code> gradyanlarını doğrudan canlandıramazsınız
      (özellik enterpolasyon yapmaz).
      Geçici çözümler:
    </p>
    <p>
      <strong>Büyük boyutlu bir gradyanda background-position'ı canlandırın</strong>:
    </p>
    <p>
      <code>background: linear-gradient(45deg, red, blue, red);
      background-size: 400% 400%; animation: shift 10s ease infinite;</code>
    </p>
    <p>
      Pürüzsüz, yaygın olarak desteklenir, performanslıdır.
    </p>
    <p>
      <strong>Gradyan duraklarını canlandırmak için @property:</strong>
      özel bir özelliği renk olarak kaydedin, ardından canlandırın.
      Yalnızca modern tarayıcılar.
    </p>
    <p>
      <strong>Karmaşık mesh-gradyan animasyonu için Canvas veya WebGL</strong> —
      çoğu kullanım durumu için gereksiz.
    </p>

    <h2>Performans hususları</h2>
    <p>
      Gradyanlar modern tarayıcılarda GPU hızlandırmalıdır — genellikle
      görsellerden daha hızlıdır ve sınırsız ölçeklenir.
    </p>
    <p>
      İstisnalar:
    </p>
    <p>
      <strong>Büyük alanlar üzerindeki büyük radyal gradyanlar</strong> eski
      GPU'ları zorlayabilir. Düşük uçlu cihazlarda test edin.
    </p>
    <p>
      <strong>Büyük yüzeylerdeki animasyonlu gradyanlar</strong> (tam
      görünüm alanı) mobilde pil tüketebilir. Azaltılmış hareket
      yedeklemesini düşünün.
    </p>
    <p>
      <strong>Üst üste bindirilmiş radyal gradyanlar (mesh efekti)</strong>
      4+ katman ile yeniden boyama gecikmesine neden olabilir. Bir kez
      canvas'a render etmeyi düşünün.
    </p>

    <h2>Erişilebilirlik</h2>
    <p>
      Metnin arkasındaki gradyanların yine de kontrasta ihtiyacı vardır.
    </p>
    <p>
      <strong>Her iki ucu test edin.</strong> Maviden açık maviye giden bir gradyan
      üzerindeki beyaz metin, açık uçta kontrastı kaybeder.
    </p>
    <p>
      <strong>Gerekirse yarı saydam bir kaplama ekleyin.</strong>
      <code>linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))</code>
      gradyanın üzerinde, alttaki renk hikayesini değiştirmeden eşit şekilde karartır.
    </p>
    <p>
      <strong>Animasyonlu gradyanlar için prefers-reduced-motion'a saygı gösterin</strong>:
    </p>
    <p>
      <code>@media (prefers-reduced-motion: reduce) {`{ animation: none; }`}</code>
    </p>

    <h2>Karanlık mod gradyanları</h2>
    <p>
      Aydınlık mod gradyanları doğrudan karanlık moda taşındığında genellikle
      göz alıcı görünür. Doygunluğu azaltın ve daha koyu orta tonlara kaydırın.
    </p>
    <p>
      Renk şemasına yanıt veren CSS özel özelliklerini kullanın:
    </p>
    <p>
      <code>@media (prefers-color-scheme: dark) {`{ --gradient-from: #1a1a2e; --gradient-to: #16213e; }`}</code>
    </p>
    <p>
      Ardından gradyan bildirimlerinizde <code>var(--gradient-from)</code> değerine
      başvurun.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Tam doygunlukta gökkuşağı gradyanları.</strong> 4+ tam doygunluk durağına sahip
      çok renkli gradyanlar kaotik görünür. 2-3 analog
      renk seçin.
    </p>
    <p>
      <strong>Her şey için gradyanlar.</strong> Her yüzeyin
      derinliğe ihtiyacı yoktur. Bir vurgu gradyanına sahip düz arka planlar,
      gradyan çorbası sayfalardan daha iyidir.
    </p>
    <p>
      <strong>Yedekleme yok.</strong> Çok eski tarayıcılar
      gelişmiş gradyan sözdizimini işlemeyebilir. Gradyan bildiriminden önce her zaman
      <code>background-color:
      #hexfallback;</code> ekleyin.
    </p>
    <p>
      <strong>Düşük kontrastlı kaplamalar.</strong> Yine metin üzerinde gradyan
      sorunu. Her zaman en kötü durumu kontrol edin.
    </p>
    <p>
      <strong>Gerçek cihazlarda test etmemek.</strong> Gradyanlar
      platformlar arasında biraz farklı işlenir. Safari vs Chrome,
      Android vs iOS — gerçek donanımda hızlıca test edin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Gradyanları görsel olarak{" "}
      <a href="/tools/gradient-generator">CSS gradyan oluşturucu</a> ile oluşturun.
      Tam durak renklerini seçmek için{" "}
      <a href="/tools/color-picker">renk seçici</a> ile ve
      <a href="/learn/fine-tuning">ince ayar</a> için HEX/RGB/HSL arasında
      çeviri yaparken{" "}
      <a href="/tools/color-converter">renk dönüştürücü</a> ile eşleştirin.
    </p>
  </>
);
===END FILE===