/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Çevrimiçi dosya dönüştürücülerle ilgili en büyük gizlilik endişesi, aynı
      zamanda düzeltilmesi en kolay olanıdır: çoğu &ldquo;ücretsiz&rdquo; dönüştürücü,
      dosyanızı bir sunucuya yükler, orada işler ve sonucu e-posta ile gönderir
      veya indirmenizi sağlar. Sözleşmeniz, vergi belgeniz, taranmış pasaportunuz
      veya mali PDF&rsquo;niz, başka birinin makinesinde yaşar — bazen saatlerce,
      bazen sonsuza kadar, gizlilik politikalarına bağlı olarak.
    </p>
    <p>
      Yalnızca tarayıcı tabanlı alternatif, aynı dönüşümü dosyayı hiçbir yere
      göndermeden yerel olarak gerçekleştirir. Bu sitedeki her dönüştürücü bu
      şekilde çalışır. Bu kılavuz, nelere dikkat etmeniz gerektiğini, çevrimiçi
      ve yerel dönüşümün ne zaman önemli olduğunu ve çoğu incelemenin gözden
      kaçırdığı şekillerde ücretsiz ve ücretli dönüştürücülerin farklılaştığı
      durumları açıklar.
    </p>
  </>
);

export const toc = [
  { id: "why", label: "Yerel dönüşüm neden önemlidir" },
  { id: "test", label: "Bir dönüştürücünün gerçekten yerel olup olmadığı nasıl test edilir" },
  { id: "online-vs-desktop", label: "Çevrimiçi ve masaüstü dönüştürücüler" },
  { id: "free-vs-paid", label: "Ücretsiz ve ücretli: gerçek fark nedir?" },
  { id: "tools", label: "Dosya türüne göre yalnızca tarayıcı tabanlı dönüştürücüler" },
];

export const body = (
  <>
    <h2 id="why">Yerel dönüşüm neden önemlidir</h2>
    <p>
      Bulut tabanlı dosya dönüştürücülerle ilgili üç risk kategorisi:
    </p>
    <ul>
      <li>
        <strong>Aktif saklama.</strong> Birçok ücretsiz dönüştürücü, dosyanızı
        &ldquo;hizmetlerini iyileştirmek&rdquo; için açıkça 24 saat, 7 gün veya daha
        uzun süre saklar. Taslak Gizlilik Sözleşmeniz, vergi beyannameniz veya
        tıbbi taramanız bu süre boyunca altyapılarında kalır.
      </li>
      <li>
        <strong>Pasif günlükleme.</strong> Bir satıcı dosyaları sileceğine söz
        verse bile, sunucu erişim günlükleri genellikle dosya adlarını,
        boyutlarını ve zaman damgalarını 30–90 gün boyunca kaydeder. Bir ihlal,
        dosyaların kendileri gitmiş olsa bile bu meta verileri açığa çıkarır.
      </li>
      <li>
        <strong>Alt işleyici maruziyeti.</strong> Kullandığınız ucuz çevrimiçi
        dönüştürücü genellikle AWS Lambda veya Cloudflare Workers etrafında ince
        bir sarmalayıcıdır. Gizlilik politikaları genellikle dönüştürücünün
        pazarlama metninden daha az katıdır.
      </li>
    </ul>
    <p>
      Günlük hassas olmayan dönüşümler (bir meme, herkese açık bir belge, genel
      bir görsel) için çevrimiçi kullanım sorun değildir. Bir yabancıya
      vermeyeceğiniz herhangi bir şey için yerel dönüşüm doğru varsayılandır.
    </p>

    <h2 id="test">Bir dönüştürücünün gerçekten yerel olup olmadığı nasıl test edilir</h2>
    <p>
      Pazarlama metinleri yalan söyler. Gerçek test 30 saniye sürer:
    </p>
    <ol>
      <li>
        Tarayıcı Geliştirici Araçları&rsquo;nı açın (Windows&rsquo;ta F12,
        Mac&rsquo;te Cmd+Opt+I).
      </li>
      <li>Ağ sekmesine gidin.</li>
      <li>Ağ günlüğünü temizleyin.</li>
      <li>Dönüştürmeyi çalıştırın.</li>
      <li>
        Dönüştürme sırasında ağ sekmesini izleyin. Dosyanızın bir sunucuya
        gittiğini görürseniz (multipart/form-data veya büyük istek gövdeleri
        içeren POST isteklerine bakın), dönüştürücü çevrimiçidir. Yalnızca
        statik varlık yüklemeleri (JS, CSS, yazı tipleri) görürseniz, yereldir.
      </li>
    </ol>
    <p>
      Araçlarımız için bu test sıfır dosya yüklemesi gösterecektir — bu sitedeki
      her dönüştürücü yalnızca tarayıcı tabanlıdır. Bunu bir övünme olarak değil,
      bir ayrım noktası olduğu için belirtiyoruz: bizi bulut tabanlı alternatiflerle
      karşılaştırdığınızda, gizlilik farkı yapısal, pazarlama değil.
    </p>

    <h2 id="online-vs-desktop">Çevrimiçi ve masaüstü dönüştürücüler: hangisini ne zaman kullanmalı</h2>
    <p>
      Üç kategori, üç cevap:
    </p>
    <ul>
      <li>
        <strong>Çevrimiçi bulut dönüştürücü (dosya yüklenir):</strong> büyük
        dosyalar için en hızlısıdır çünkü sunucuları dizüstü bilgisayarınızdan
        daha büyüktür. Gizlilik için en kötüsüdür. Yalnızca hassas olmayan
        içerikler için kullanın.
      </li>
      <li>
        <strong>Çevrimiçi yalnızca tarayıcı tabanlı dönüştürücü:</strong> çoğu
        kişi için ideal noktadır. Kurulum gerektirmez, dönüştürme yerel olarak
        gerçekleşir, dosya cihazınızdan asla ayrılmaz. Çok büyük dosyalar için
        bulut sunucularından daha yavaştır, ancak ~50 MB altındaki her şey için
        yeterlidir.
      </li>
      <li>
        <strong>Masaüstü uygulaması:</strong> tekrarlayan toplu dönüşümler, çok
        büyük dosyalar (gigabaytlar) veya hava boşluklu ortamlar için güç
        kullanıcıları için doğru cevaptır. Pandoc, FFmpeg, ImageMagick komut
        satırı araçları ücretsiz ve savaşta test edilmiştir. Daha yüksek öğrenme
        eğrisi.
      </li>
    </ul>
    <p>
      Çoğu günlük dönüştürme ihtiyacı için yalnızca tarayıcı tabanlı kategori
      yeterlidir. Masaüstü, aynı dönüşümü haftada 50+ kez yapıyorsanız kuruluma
      değer.
    </p>

    <h2 id="free-vs-paid">Ücretsiz ve ücretli dosya dönüştürücüler: gerçek fark nedir?</h2>
    <p>
      Ücretli dönüştürücü tekliflerinin ücretsiz olanlara karşı dürüst
      dökümü:
    </p>
    <ul>
      <li>
        <strong>Toplu işleme sınırları.</strong> Ücretsiz dönüştürücüler genellikle
        aynı anda 1 dosya veya oturum başına 5 dosya ile sınırlıdır. Ücretli
        sınırı kaldırır. Toplu dönüştürme yapıyorsanız gerçek fark; aksi halde
        önemsizdir.
      </li>
      <li>
        <strong>Dosya boyutu sınırları.</strong> Ücretsiz genellikle 50–100 MB
        ile sınırlıdır. Ücretli gigabaytları işler. Çoğu kullanıcı sınıra
        ulaşmaz.
      </li>
      <li>
        <strong>OCR doğruluğu.</strong> Ücretli OCR hizmetleri, özel eğitim
        verilerine sahip GPU hızlandırmalı modeller kullanır. Ücretsiz OCR
        (Tesseract) temiz baskıda ~%85-95, dağınık el yazısında %50-70 arası
        başarı sağlar. Yüksek hacimli profesyonel OCR (hukuk, sağlık) için
        ücretli anlamlı derecede daha iyidir.
      </li>
      <li>
        <strong>Biçim koruma.</strong> Ücretli dönüştürücüler genellikle karmaşık
        düzenleri (çok sütunlu PDF&rsquo;ler, tablolar) ücretsizden daha iyi
        korur. Basit belgeler için fark ihmal edilebilir düzeydedir.
      </li>
      <li>
        <strong>Müşteri desteği.</strong> Ücretli, e-posta gönderebileceğiniz bir
        insan olduğu anlamına gelir. Çoğu ücretsiz araçta kendi başınızasınız.
      </li>
      <li>
        <strong>Gizlilik.</strong> Sezgisel olmayan bir şekilde, ücretli genellikle
        DAHA ÖZEL DEĞİLDİR — birçok ücretli dönüştürücü, dosyaları &ldquo;kalite
        iyileştirme&rdquo; için saklar. Gizlilik politikasını özellikle okuyun;
        varsaymayın.
      </li>
    </ul>
    <p>
      Çoğu kişisel ve küçük işletme ihtiyacı için ücretsiz yalnızca tarayıcı
      tabanlı dönüştürücüler işi görür. Ücretli, özellikle şunlar için değerlidir:
      yüksek hacimli toplu iş, çok büyük dosyalar, profesyonel OCR veya satıcı
      desteğine ihtiyaç duyduğunuzda.
    </p>

    <h2 id="tools">Dosya türüne göre yalnızca tarayıcı tabanlı dönüştürücüler (bu sitede)</h2>
    <p>Yalnızca tarayıcı tabanlı dönüştürme araçlarının tam envanteri — her biri yerel olarak çalışır:</p>
    <ul>
      <li>
        <strong>PDF:</strong>{" "}
        <a href="/tools/pdf-to-text">PDF&rsquo;den metne</a>,{" "}
        <a href="/tools/pdf-ocr-to-text">PDF OCR (taranmış + el yazısı)</a>,{" "}
        <a href="/tools/pdf-to-jpg">PDF&rsquo;den JPG&rsquo;ye</a>,{" "}
        <a href="/tools/jpg-to-pdf">JPG&rsquo;den PDF&rsquo;ye</a>,{" "}
        <a href="/tools/merge-pdf">PDF birleştirme</a>,{" "}
        <a href="/tools/pdf-split">PDF bölme</a>,{" "}
        <a href="/tools/pdf-to-long-image">PDF&rsquo;den uzun görsele</a>,{" "}
        <a href="/tools/pdf-watermark">filigran ekleme</a>,{" "}
        <a href="/tools/pdf-organizer">sayfaları yeniden sıralama</a>,{" "}
        <a href="/tools/pdf-page-numbers">sayfa numarası ekleme</a>,{" "}
        <a href="/tools/pdf-crop">sayfaları kırpma</a>,{" "}
        <a href="/tools/pdf-page-range-extractor">sayfa aralığı çıkarma</a>,{" "}
        <a href="/tools/pdf-metadata-viewer">meta veri görüntüleyici</a>,{" "}
        <a href="/tools/pdf-metadata-remover">meta veri temizleyici</a>.
      </li>
      <li>
        <strong>Görseller:</strong>{" "}
        <a href="/tools/image-format-converter">PNG/JPG/WEBP dönüştürücü</a>,{" "}
        <a href="/tools/image-resizer">görsel yeniden boyutlandırıcı</a>,{" "}
        <a href="/tools/image-compressor">sıkıştırıcı</a>,{" "}
        <a href="/tools/image-cropper">kırpıcı</a>,{" "}
        <a href="/tools/svg-to-png">SVG&rsquo;den PNG&rsquo;ye</a>,{" "}
        <a href="/tools/heic-to-jpg">HEIC&rsquo;den JPG&rsquo;ye</a>,{" "}
        <a href="/tools/webp-to-jpg">WEBP&rsquo;den JPG&rsquo;ye</a>,{" "}
        <a href="/tools/color-extractor">renk paleti çıkarıcı</a>,{" "}
        <a href="/tools/gif-maker">GIF oluşturucu</a>.
      </li>
      <li>
        <strong>Veri:</strong>{" "}
        <a href="/tools/json-to-csv">JSON&rsquo;dan CSV&rsquo;ye</a>,{" "}
        <a href="/tools/csv-to-json">CSV&rsquo;den JSON&rsquo;a</a>,{" "}
        <a href="/tools/xml-to-csv">XML&rsquo;den CSV&rsquo;ye</a>,{" "}
        <a href="/tools/csv-to-excel-xml">CSV&rsquo;den Excel&rsquo;e</a>,{" "}
        <a href="/tools/yaml-json-converter">YAML ↔ JSON</a>.
      </li>
      <li>
        <strong>Metin + işaretleme:</strong>{" "}
        <a href="/tools/html-to-markdown">HTML&rsquo;den Markdown&rsquo;a</a>,{" "}
        <a href="/tools/markdown-to-html">Markdown&rsquo;dan HTML&rsquo;ye</a>,{" "}
        <a href="/tools/case-converter">büyük/küçük harf dönüştürücü</a>,{" "}
        <a href="/tools/base64-encoder-decoder">Base64 kodlama/kod çözme</a>.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Bir PDF&rsquo;yi tarayıcı tarafında OCR ile tanı (yükleme yok)",
  targetSlug: "pdf-ocr-to-text",
};

export const faq = [
  {
    q: "Dosyaları buluta yüklemeden yerel olarak nasıl dönüştürebilirim?",
    a: "Yalnızca tarayıcı tabanlı bir dönüştürücü kullanın — dönüştürmeyi yerel olarak yapmak için tarayıcınızda JavaScript çalıştırır. Dosya cihazınızdan asla ayrılmaz. Dönüştürme sırasında Geliştirici Araçları → Ağ sekmesini açarak test edin; yükleme isteği görmüyorsanız, yereldir. Bu sitedeki her dönüştürücü bu şekilde çalışır.",
  },
  {
    q: "Dosyaları çevrimiçi dönüştürmek güvenli midir?",
    a: "Bulut tabanlı çevrimiçi dönüştürücüler dosyanızı bir sunucuya yükler. Risk, dönüştürücünün saklama politikasına, sunucu günlüklerine ve alt işleyici işlemlerine bağlıdır. Hassas olmayan içerikler (memler, herkese açık belgeler, genel görseller) için çevrimiçi kullanım sorun değildir. Bir yabancıya vermeyeceğiniz herhangi bir şey için yalnızca tarayıcı tabanlı veya masaüstü dönüştürücü kullanın.",
  },
  {
    q: "Çevrimiçi mi yoksa masaüstü dosya dönüştürücüler mi kullanmalıyım",
    a: "Çoğu günlük kullanım için yalnızca tarayıcı tabanlı çevrimiçi dönüştürücüler idealdir: kurulum gerektirmez, dosyanız cihazınızdan ayrılmaz ve ~50 MB altındaki dosyalar için yeterince hızlıdır. Masaüstü uygulamaları (Pandoc, FFmpeg, ImageMagick gibi) şu durumlarda daha iyidir: aynı dönüşümü haftada 50+ kez yapıyorsanız, gigabayt boyutunda dosyalarla çalışıyorsanız veya internet bağlantısı olmayan bir ortamda çalışıyorsanız. Bulut tabanlı çevrimiçi dönüştürücüleri yalnızca dosya hassas değilse ve büyükse kullanın.",
  },
];