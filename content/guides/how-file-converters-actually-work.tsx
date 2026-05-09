/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Dosya dönüştürme dışarıdan sihirli görünür — bir PDF sürükleyip bırakırsınız, bir
      Word belgesi çıkar. Perde arkasında her dönüştürücünün kullandığı aynı teknikler
      vardır. Temelleri anlamak, doğru aracı seçmenize, hataları ayıklamanıza ve 2026'nın
      AI dönüştürücü dalgasındaki pazarlama kaynaklı saçmalıkları ayırt etmenize yardımcı olur.
    </p>
  </>
);

export const toc = [
  { id: "basic-pipeline", label: "Temel dönüştürme hattı" },
  { id: "lossy-decoding", label: "Kod çözme, dönüştürme, kodlama" },
  { id: "encrypted", label: "Şifrelenmiş dosyaları dönüştürebilir misiniz?" },
  { id: "rare-formats", label: "Nadir formatları dönüştürme (uzun kuyruk)" },
  { id: "myths", label: "Dosya dönüştürücü mitleri çürütüldü" },
];

export const body = (
  <>
    <h2 id="basic-pipeline">Temel dönüştürme hattı</h2>
    <p>
      Her dosya dönüştürücü üç adımı gerçekleştirir:
    </p>
    <ol>
      <li>
        <strong>Kod çözme.</strong> Kaynak dosyayı format spesifikasyonuna göre okuyun.
        Bir PDF, nesnelere (sayfalar, metin, resimler) ayrıştırılır. Bir JPG, piksel
        ızgarasına sıkıştırılmış halden çıkarılır. Bir CSV, satır ve sütunlara bölünür.
      </li>
      <li>
        <strong>Dönüştürme.</strong> Bellek içi temsili, hedef formata uygun bir temsile
        dönüştürün. PDF metni → Word metni + paragraf stilleri. Piksel ızgarası → farklı
        bir sıkıştırma algoritmasıyla yeniden kodlanır. CSV satırları → JSON nesneleri.
      </li>
      <li>
        <strong>Kodlama.</strong> Dönüştürülmüş veriyi hedef formatın spesifikasyonuna
        göre yazın. DOCX'in XML-zip'ini oluşturun. JPG bayt akışını yazın. JSON
        dizesini çıktılayın.
      </li>
    </ol>
    <p>
      Kalite ve doğruluk, her adımın ne kadar iyi uygulandığına bağlıdır. Kod çözme
      adımı genellikle darboğazdır — PDF gibi formatlar, "teknik olarak geçerli" yazılımların
      ürettiği ancak basit ayrıştırıcıları bozan onlarca yıllık uç durumlara sahiptir.
    </p>

    <h2 id="lossy-decoding">Bilgi neden kaybolur: kod çözme sınırlamaları</h2>
    <p>
      Dönüştürme başlamadan önce kod çözme adımında bazı bilgiler kaybolur:
    </p>
    <ul>
      <li>
        <strong>Taranmış PDF'ler.</strong> Metin olarak değil, resim olarak çözülür. Metin
        elde etmek için OCR gerekir (PDF ayrıştırmanın üzerine ayrı bir kod çözme adımı).
      </li>
      <li>
        <strong>Kayıplı sıkıştırılmış kaynak.</strong> JPG çözme, orijinal fotoğrafçının
        sıkıştırma öncesi görüntüsünü değil, pikselleri üretir. Kaybolan detay
        geri kazanılamaz.
      </li>
      <li>
        <strong>Tescilli dosya yapıları.</strong> Bazı eski veya nadir formatların yayınlanmış
        bir spesifikasyonu yoktur. Kod çözücüler tersine mühendislikle oluşturulur, bazen
        eksik. Uç durumlar bozulur.
      </li>
      <li>
        <strong>Gömülü meta verilerin açığa çıkarılmaması.</strong> Bazı dönüştürücüler
        basitlik için meta verileri kasıtlı olarak yok sayar. Kaynakta EXIF GPS verisi olsa
        bile, dönüştürücü bunu aktarmayabilir.
      </li>
    </ul>
    <p>
      Dürüst gerçek: mükemmel inşa edilmiş bir dönüştürücü bile kaynakta hiç olmayan
      bilgiyi geri kazanamaz. "Mükemmel dönüşüm" vaat eden pazarlama metinleri, hangi
      adımları atladığını gizler.
    </p>

    <h2 id="encrypted">Şifrelenmiş dosyaları dönüştürebilir misiniz?</h2>
    <p>
      Çoğunlukla hayır. Şifrelenmiş dosyalar (parola korumalı PDF'ler, şifrelenmiş ZIP'ler,
      DRM korumalı e-kitaplar) anahtar olmadan okunamayacak şekilde tasarlanmıştır. Bir
      dönüştürücü yalnızca okuyabildiğini çözebilir, yani:
    </p>
    <ul>
      <li>
        <strong>Parola korumalı PDF'ler:</strong> parolanız varsa, çoğu dönüştürücü bunu
        girdi olarak kabul eder ve devam eder. Parolanız yoksa, hiçbir meşru dönüştürücü
        sizin için kaba kuvvet saldırısı yapmaz.
      </li>
      <li>
        <strong>Şifrelenmiş ZIP / 7z:</strong> aynı. Parolayı sağlayın, dönüştürücü devam
        eder. Parola yoksa, dönüşüm olmaz.
      </li>
      <li>
        <strong>DRM korumalı medya (Kindle KFX, Audible AAX, iTunes M4P):</strong>{" "}
        DRM, şifrelemenin kendisidir. Bunu kaldırmak birçok yargı bölgesinde yasa dışıdır
        (ABD'de DMCA bölüm 1201). Hiçbir saygın dönüştürücü, DRM'yi aşma özelliği
        sunmaz.
      </li>
      <li>
        <strong>Kendi kendine şifrelenmiş belgeler (ayarladığınız Word / PDF parolaları):</strong>{" "}
        bunları bir dönüştürücü aracılığıyla genellikle kurtaramazsınız. Parola kurtarma
        araçları mevcuttur; yasallıkları, kendi parolanızı mı yoksa başka birinin
        parolasını mı kurtardığınıza bağlıdır.
      </li>
    </ul>
    <p>
      Kendi parolanızı gerçekten kaybettiyseniz, satıcı destek yolları (Microsoft hesap
      kurtarma, Adobe Acrobat parola sıfırlama) bazen işe yarar. Aksi takdirde, dosya
      olmadan yaşamayı planlayın veya orijinal kaynaklardan yeniden oluşturun.
    </p>

    <h2 id="rare-formats">Nadir formatları dönüştürme: mümkün mü?</h2>
    <p>
      Neredeyse her zaman evet, biraz sabırla. Çerçeve:
    </p>
    <ol>
      <li>
        <strong>Formatın yayınlanmış bir spesifikasyonu olup olmadığını kontrol edin.</strong>
        Çoğu önemsiz olmayan formatın vardır. ISO standartları, RFC, satıcı teknik
        belgeleri. Spesifikasyon varsa, muhtemelen açık kaynaklı bir kod çözücü de vardır.
      </li>
      <li>
        <strong>GitHub'da format adını arayın.</strong>{" "}
        "[format] parser" veya "[format] reader" genellikle 1-3 uygulama
        çıkarır. Uygulanabilirlik için yıldız + son taahhüt tarihini kontrol edin.
      </li>
      <li>
        <strong>Spesifikasyonu olmayan ikili formatlar için:</strong> r/ReverseEngineering
        veya belirli format araştırma sitelerindeki (Format Wiki) tersine mühendislik
        kılavuzları bazen alan bazında dökümler içerir.
      </li>
      <li>
        <strong>Gerçekten belirsiz formatlar için:</strong> dosya birkaç KB ise,
        bir hex düzenleyici + dikkatli desen eşleştirme genellikle yapıyı ortaya çıkarır.
        Zaman alıcı ancak başarılabilir.
      </li>
      <li>
        <strong>Son çare:</strong> veri formatı işinde uzmanlaşmış bir serbest çalışan
        tutun. Tek bir dosyanın tek seferlik dönüşümü için 100-500 dolar bazen buna
        değer.
      </li>
    </ol>

    <h2 id="myths">Dosya dönüştürücü mitleri: endişelenmeniz gerekmeyen şeyler</h2>
    <p>
      Reddit'te tekrar tekrar ortaya çıkan mitler, çürütülmüş halleriyle:
    </p>

    <h3>Mit: "Dosyaları birden çok kez dönüştürmek her zaman kaliteyi düşürür."</h3>
    <p>
      Yalnızca kayıplı zincirler için doğrudur. PNG → BMP → TIFF → PNG, orijinaliyle
      aynıdır. Tek bir kayıplı adımın ardından kayıpsız dönüşüm, kayıplı kaydetmeden
      kurtulan kaliteyi korur. Hasar yalnızca tekrarlanan kayıplı işlemlerle birikir.
    </p>

    <h3>Mit: "PDF'ler düzenlendiğinde her zaman kalite kaybeder."</h3>
    <p>
      Bir PDF metin alanını doğrudan (Acrobat'ta) düzenlemek kalite kaybına yol
      açmaz — metin metindir. Piksel tabanlı içeriği (PDF içindeki rasterleştirilmiş
      görüntüler) düzenlemek kalite kaybına yol açar. Çoğu basit metin düzenlemesi
      kayıpsızdır.
    </p>

    <h3>Mit: "AI destekli dönüştürücüler daha akıllı ve daha doğrudur."</h3>
    <p>
      Özellikle OCR için, modern AI modelleri bozuk girdilerde klasik OCR'den daha
      iyi performans gösterir. Diğer her şey için (görüntü formatı dönüştürme, belge
      yapısı, veri formatı dönüştürme), temel teknoloji aynıdır; AI bir pazarlama
      metnidir. İstisna, karmaşık tabloları koruyarak belge dönüştürme (PDF→DOCX)
      gibi düzen farkındalığı gerektiren durumlardır; burada modern ML yardımcı olur —
      ancak bunun için gerçek bir bedel ödersiniz.
    </p>

    <h3>Mit: "Ücretsiz dönüştürücüler ücretli olanlardan daha yavaştır."</h3>
    <p>
      Ücretsiz CLI araçları (Pandoc, FFmpeg, ImageMagick) genellikle ücretli SaaS'den
      daha hızlıdır çünkü yükleme-işleme-indirme yükü yoktur. Yalnızca tarayıcı
      tabanlı olanlar, "ücretsiz" kademeden değil, CPU farkından dolayı bulut
      tabanlı olanlardan daha yavaştır.
    </p>

    <h3>Mit: "Benzer formatlar arasında dönüştürme her zaman kayıpsızdır."</h3>
    <p>
      JPG ↔ HEIC her ikisi de kayıplı formatlardır; birinden diğerine dönüştürmek,
      bir kayıplı formatın kodunu çözer ve diğerinde yeniden kodlar, her iki yönde
      de yapaylıklar biriktirir. Herhangi bir kayıplı format çifti için aynıdır.
    </p>

    <h3>Mit: "Daha büyük çıktı dosyası daha yüksek kalite anlamına gelir."</h3>
    <p>
      Bazen. Aynı görüntünün 5 MB'lık kayıpsız bir PNG'si, 1 MB'lık bir JPG'sinden
      daha yüksek kalitelidir. Ancak 5 MB'lık bir kaynağın 50 MB'lık bir JPG'si,
      kaynaktan daha yüksek kaliteli değildir — yeniden kodlama kayıp veriyi geri
      kazandırmaz, yalnızca dosyayı gereksiz sıkıştırmayla şişirir.
    </p>
  </>
);

export const cta = {
  label: "XML'yi CSV'ye dönüştürün (ücretsiz, yalnızca tarayıcı)",
  targetSlug: "xml-to-csv",
};

export const faq = [
  {
    q: "Dosya formatı dönüştürücüler aslında nasıl çalışır?",
    a: "Üç adımlı hat: kod çözme (kaynağı format spesifikasyonuna göre ayrıştırma), dönüştürme (hedef formatın veri modeline çevirme), kodlama (hedef format baytlarını yazma). Kalite her adıma bağlıdır. Kod çözme genellikle darboğazdır — gerçek dünya dosyaları, basit ayrıştırıcıların bozulduğu uç durumlara sahiptir. 'Mükemmel' dönüşüm vaat eden pazarlama metinleri genellikle zor durumları atlar.",
  },
  {
    q: "Şifrelenmiş dosyaları dönüştürebilir misiniz?",
    a: "Parolanız/anahtarınız varsa evet — çoğu dönüştürücü kabul eder. Yoksa hayır — şifreleme, anahtar olmadan okumayı önlemek için tasarlanmıştır. DRM korumalı medyayı (Kindle KFX, Audible AAX) aşmak çoğu yargı bölgesinde yasa dışıdır. Kaybolan kendi parolaları bazen satıcı desteğiyle kurtarılabilir; aksi takdirde yeniden oluşturmayı planlayın.",
  },
  {
    q: "Nadir dosya formatları arasında dönüştürme yapabilir miyim?",
    a: "Neredeyse her zaman, sabırla. Formatın yayınlanmış bir spesifikasyonu olup olmadığını kontrol edin, GitHub'da ayrıştırıcılar arayın, tersine mühendislikle oluşturulmuş spesifikasyonlar için format araştırma sitelerine (Format Wiki) başvurun veya gerçekten belirsiz formatlar için bir hex düzenleyici kullanın. Son çare: dosya başına 100-500 dolar karşılığında veri formatı işinde uzmanlaşmış bir serbest çalışan tutun.",
  },
  {
    q: "Hangi dosya dönüştürücü mitlerini görmezden gelmeliyim?",
    a: "Birden çok dönüştürme her zaman kalite kaybına yol açmaz (yalnızca kayıplı zincirler yol açar). PDF'ler düzenlemede her zaman kalite kaybetmez. 'AI destekli' dönüştürücüler çoğunlukla pazarlamadır — istisna OCR'dir. Ücretsiz CLI dönüştürücüler genellikle ücretli SaaS'den daha hızlıdır. Daha büyük çıktı dosyaları daha yüksek kalite anlamına gelmez — yalnızca şişirilmiş ayarlarla yeniden kodlanmış olabilirler.",
  },
];