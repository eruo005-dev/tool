/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Düzinelerce ücretsiz dönüştürücü ve yüzlerce ücretli seçenek arasından, özel göreviniz için doğru aracı seçmek olması gerekenden daha zordur. Bu rehber, yapılandırılmış bir seçim çerçevesidir — sorulacak beş soru, doğrulanması gereken kapsam ve pratik karar ağacı.
    </p>
  </>
);

export const toc = [
  { id: "framework", label: "5 soruluk seçim çerçevesi" },
  { id: "coverage", label: "Biçim desteğini doğrulama" },
  { id: "comparison", label: "Seçim yapmadan önce dönüştürücüleri karşılaştırma" },
  { id: "decision-tree", label: "Kullanım senaryosuna göre karar ağacı" },
];

export const body = (
  <>
    <h2 id="framework">5 soruluk seçim çerçevesi</h2>

    <h3>1. İçerik ne kadar hassas?</h3>
    <p>
      Yerel ve bulut arasındaki kararı belirler. Bir yabancıya vermeyeceğiniz her şey yerel kalmalıdır — yalnızca tarayıcı tabanlı bir dönüştürücü veya masaüstü uygulaması kullanın. Herkese açık memler ve genel içerikler bulutu rahatça kullanabilir.
    </p>

    <h3>2. Bu dönüşümü ne sıklıkla yapacağım?</h3>
    <p>
      Tek seferlik: herhangi bir araç iş görür; en hızlı yolu seçin. Haftalık: bir masaüstü aracı veya tarayıcı yer imi kurmak için 30 dakika ayırın. Günlük / toplu: uygun otomasyona (CLI betikleri, Automator, zamanlanmış görevler) bir saat yatırım yapın.
    </p>

    <h3>3. Dosyanın karmaşıklığı nedir?</h3>
    <p>
      Basit dosya (düz metin, temel görsel, küçük PDF): herhangi bir araç iş görür. Karmaşık dosya (çok sütunlu PDF, bilimsel makale, malzemeli 3B model, taranmış el yazısı): uzman bir araca ihtiyacınız var. Genel dönüştürücüler işe yaramaz çıktı üretir.
    </p>

    <h3>4. Hangi çıktı kalitesine ihtiyacım var?</h3>
    <p>
      &ldquo;Salt okunur&rdquo; — yalnızca içeriğin çıkarılması gerekiyor: ücretsiz araçlar yeterlidir. &ldquo;Düzenlenebilir&rdquo; — dönüşümden sonra değişiklik yapılması gerekiyor: düzen kalitesine dikkat edin. &ldquo;Profesyonel&rdquo; — ödeme yapan bir müşteriye, düzenleyici kuruma veya son yayına gidecek: Adobe Acrobat Pro veya özel araçlar için ödeme yapın.
    </p>

    <h3>5. Bütçem nedir?</h3>
    <p>
      Çoğu ihtiyaç ücretsiz olarak karşılanır. Yalnızca şu durumlarda ödeme yapın: (a) dönüştürücü, ücretsiz araçların yapamadığı belirli bir karmaşık durumu ele alıyorsa, (b) hacim bir aboneliği haklı çıkarıyorsa veya (c) düzenleyici / profesyonel gereklilikler belirli bir ücretli aracı zorunlu kılıyorsa.
    </p>

    <h2 id="coverage">Dönüştürücü hangi dosya biçimlerini gerçekten destekliyor?</h2>
    <p>
      Pazarlama metinleri yalan söyler. Taahhüt etmeden önce doğrulayın:
    </p>
    <ol>
      <li>
        <strong>Desteklenen biçimler listesini dikkatlice okuyun.</strong> Sadece &ldquo;PDF&rdquo; değil, özellikle &ldquo;Gömülü yazı tipleri ve formlar içeren PDF v1.4-2.0.&rdquo; Ayrıntı önemlidir.
      </li>
      <li>
        <strong>Taahhüt etmeden önce gerçek dosyanızla test edin.</strong> Çoğu ücretsiz araç küçük bir dosyayı kabul eder. Dosyanızı çalıştırın ve çıktıyı doğrulayın. Bariz sorunlar varsa, başka bir araç bulun.
      </li>
      <li>
        <strong>Açık sınırlamaları arayın.</strong> Sınırlamalarını açıklayan araçlar (&ldquo;form alanlarını korumayabilir,&rdquo; &ldquo;tablolar metne dönüştürülür&rdquo;) her şeyi mükemmel bir şekilde işlediğini iddia eden araçlardan daha güvenilirdir.
      </li>
      <li>
        <strong>Yalnızca başarı/başarısızlığa değil, çıktı kalitesine de bakın.</strong>{" "}
        Bir dönüştürücü &ldquo;başarılı&rdquo; olabilir (hata yok) ve işe yaramaz çıktı üretebilir (yanlış sırada metin, eksik sayfalar, bozuk düzen). Sonucu her zaman doğrulayın.
      </li>
    </ol>

    <h2 id="comparison">Seçim yapmadan önce dönüştürücüleri karşılaştırma</h2>
    <p>
      10 dakikalık karşılaştırma protokolü:
    </p>
    <ol>
      <li>2-3 aday dönüştürücü seçin.</li>
      <li>Her biriyle aynı kaynak dosyayı dönüştürün.</li>
      <li>Her çıktıyı açın ve karşılaştırın:
        <ul>
          <li>Yapısal kalite (tablolar / düzenler korunuyor mu?)</li>
          <li>Metin doğruluğu (bozuk karakterler, yanlış sıralama var mı?)</li>
          <li>Meta veri koruması (EXIF / belge özellikleri kurtuldu mu?)</li>
          <li>Dosya boyutu (çıktı, biçim için makul olmalıdır)</li>
        </ul>
      </li>
      <li>En iyisini seçin. Gelecekte kullanmak için yer imlerine ekleyin veya kurun.</li>
    </ol>
    <p>
      Bu karşılaştırmayı ücretsiz seçeneklere karşı yapmadan ücretli bir dönüştürücüye bağlanmayın. Fiyat kaliteyi garanti etmez — ve ücretsiz araçlar bazen belirli kullanım durumları için ücretlilerden daha iyi performans gösterir.
    </p>

    <h2 id="decision-tree">Kullanım senaryosuna göre karar ağacı</h2>

    <h3>Belge dönüşümü (PDF, DOCX, ODT, RTF, MD)</h3>
    <ul>
      <li>Tek seferlik, basit PDF → DOCX: Microsoft Word Dosya → Aç</li>
      <li>Tek seferlik, hassas PDF → metin: <a href="/tools/pdf-to-text">PDF'den metne aracımız</a></li>
      <li>Taranmış PDF → metin: <a href="/tools/pdf-ocr-to-text">PDF OCR aracımız</a></li>
      <li>Toplu belge dönüşümü: Pandoc CLI</li>
      <li>Profesyonel PDF düzenleme: Adobe Acrobat Pro</li>
    </ul>

    <h3>Görsel dönüşümü (PNG, JPG, WebP, AVIF, HEIC, SVG)</h3>
    <ul>
      <li>Tek seferlik PNG/JPG/WebP: <a href="/tools/image-format-converter">görsel biçim dönüştürücümüz</a></li>
      <li>iPhone'dan HEIC: <a href="/tools/heic-to-jpg">HEIC'ten JPG'ye</a></li>
      <li>SVG'den rastere: <a href="/tools/svg-to-png">SVG'den PNG'ye</a></li>
      <li>Toplu görsel dönüşümü: macOS Hızlı İşlemler, ImageMagick CLI</li>
      <li>Profesyonel fotoğraf çalışmaları: Photoshop veya GIMP</li>
    </ul>

    <h3>Veri dönüşümü (CSV, JSON, XML, YAML, Excel)</h3>
    <ul>
      <li>JSON'dan CSV'ye: <a href="/tools/json-to-csv">JSON'dan CSV'ye aracımız</a></li>
      <li>CSV'den JSON'a: <a href="/tools/csv-to-json">CSV'den JSON'a aracımız</a></li>
      <li>XML'den CSV'ye: <a href="/tools/xml-to-csv">XML'den CSV'ye aracımız</a></li>
      <li>CSV'den Excel'e: <a href="/tools/csv-to-excel-xml">CSV'den Excel'e aracımız</a></li>
      <li>YAML ↔ JSON: <a href="/tools/yaml-json-converter">YAML JSON aracımız</a></li>
      <li>Büyük veri (Parquet, Avro): pandas / Spark / DuckDB</li>
    </ul>

    <h3>E-kitap + 3B + niş</h3>
    <ul>
      <li>E-kitap dönüşümü: Calibre (evrensel)</li>
      <li>3B biçim dönüşümü: Blender, MeshLab, FreeCAD</li>
      <li>CAD: LibreCAD, FreeCAD, ODA Dosya Dönüştürücü</li>
      <li>CBS: QGIS</li>
      <li>Ses/video: FFmpeg</li>
    </ul>
  </>
);

export const cta = {
  label: "PDF OCR — zorlu taramaları halleder (ücretsiz)",
  targetSlug: "pdf-ocr-to-text",
};

export const faq = [
  {
    q: "Farklı dosya biçimi dönüştürücüleri arasında nasıl seçim yapabilirim?",
    a: "5 soruluk çerçeve: (1) içerik ne kadar hassas (yerel vs bulut kararını belirler), (2) ne sıklıkla (araçlara yatırımı belirler), (3) dosya karmaşıklığı (basit vs uzman), (4) gereken çıktı kalitesi (salt okunur vs düzenlenebilir vs profesyonel), (5) bütçe. Çoğu ihtiyaç ücretsiz karşılanır; yalnızca belirli karmaşık durumlar veya hacim için ödeme yapın.",
  },
  {
    q: "Dönüştürücüm hangi dosya biçimlerini gerçekten destekliyor?",
    a: "Dikkatlice doğrulayın: desteklenen biçimler listesini okuyun (ayrıntılar önemlidir — sadece 'PDF' değil 'PDF v1.4-2.0'), taahhüt etmeden önce gerçek dosyanızla test edin, açık sınırlamaları arayın (güvenilir araçlar bunları açıklar), yalnızca başarı/başarısızlığa değil çıktı kalitesine bakın. Başarılı olup işe yaramaz çıktı üreten ücretsiz araçlar yaygındır.",
  },
  {
    q: "Taahhüt etmeden önce dosya dönüştürücülerini nasıl karşılaştırabilirim?",
    a: "10 dakikalık protokol: 2-3 aday seçin, her biriyle aynı dosyayı dönüştürün, yapısal kaliteyi, metin doğruluğunu, meta veri korumasını, dosya boyutunu karşılaştırın. Önce ücretsiz seçenekleri kontrol etmeden ücretliye bağlanmayın — fiyat kaliteyi garanti etmez.",
  },
  {
    q: "[Belirli biçim çifti] için doğru dönüştürücü nedir?",
    a: "Hızlı karar ağacı: belgeler (basit için Word Dosyası → Aç, toplu için Pandoc), görseller (tek seferlikler için buradaki tarayıcı tabanlı dönüştürücüler, toplu için ImageMagick), veri (buradaki JSON/CSV/XML/YAML/Excel dönüştürücüleri), e-kitaplar (Calibre), 3B (Blender/MeshLab), ses/video (FFmpeg).",
  },
];