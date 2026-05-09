/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Hangi dosya formatlarını gerçekten bilmem gerekiyor?&rdquo; sorusu
      r/learnprogramming ve r/computerscience'da haftalık olarak soruluyor. Dürüst
      cevap: belki 20 format günlük kullanımın %95'ini kapsıyor. Geri kalanı
      tarihsel meraklar veya alana özgü.
    </p>
    <p>
      Bu rehber pratik bir sınıflandırmadır: gerçekten karşılaşacağınız
      formatlar, ne işe yaradıkları ve benzer görünenler arasındaki gerçek
      farklar (örneğin PNG vs JPG vs SVG).
    </p>
  </>
);

export const toc = [
  { id: "documents", label: "Belge formatları" },
  { id: "images", label: "Görsel formatları: PNG, JPG, SVG, WebP, AVIF" },
  { id: "data", label: "Veri formatları: CSV, JSON, XML, YAML" },
  { id: "audio-video", label: "Ses + video formatları" },
  { id: "archives", label: "Arşiv + sıkıştırma formatları" },
  { id: "rare", label: "Nadir dosya formatları arasında dönüşüm" },
];

export const body = (
  <>
    <h2 id="documents">Belge formatları</h2>
    <ul>
      <li>
        <strong>PDF (Taşınabilir Belge Formatı):</strong> görsel bütünlük öncelikli.
        Her cihazda aynı görünür. Düzenlemesi zordur. Tamamlanmış belgeleri
        paylaşmak için varsayılan.
      </li>
      <li>
        <strong>DOCX (Microsoft Word):</strong> düzenlenebilir zengin metin + düzen.
        Word, Google Dokümanlar, LibreOffice, Pages'te çalışır. İşbirlikçi
        taslak hazırlamada varsayılan.
      </li>
      <li>
        <strong>ODT (OpenDocument Metin):</strong> açık kaynak DOCX eşdeğeri.
        LibreOffice tarafından kullanılır. Küçük biçimlendirme kaymalarıyla DOCX
        ile dönüşümlüdür.
      </li>
      <li>
        <strong>RTF (Zengin Metin Formatı):</strong> DOCX'ten daha basit, temel
        biçimlendirmeye sahip düz metin benzeri. Çoğunlukla tarihsel; eski veya
        özel yazılımlarla uyumluluk için kullanışlı.
      </li>
      <li>
        <strong>TXT (düz metin):</strong> sadece karakterler, biçimlendirme yok.
        Evrensel en düşük ortak payda formatı.
      </li>
      <li>
        <strong>MD (Markdown):</strong> yapısal kuralları olan düz metin
        (# başlıklar için, * kalın için vb.). Mühendislerin ve teknik
        yazarların tercih ettiği format.
      </li>
      <li>
        <strong>EPUB:</strong> yeniden akıcı e-kitap formatı. Kindle (AZW3'e
        dönüşüm yoluyla), iBooks, Adobe Digital Editions tarafından kullanılır.
        Küçük ekranlarda okumak için PDF'den daha iyidir.
      </li>
    </ul>

    <h2 id="images">Görsel formatları: PNG, JPG, SVG, WebP, AVIF (farklar açıklandı)</h2>
    <p>
      Her görsel formatı farklı bir şey için optimize edilmiştir:
    </p>
    <ul>
      <li>
        <strong>JPG / JPEG:</strong> fotoğraflar için kayıplı sıkıştırma. 30+
        yıllık; evrensel uyumluluk. Şunlar için kullanın: fotoğraflar,
        foto-gerçekçi görseller, maksimum uyumluluk gereken her yer.
      </li>
      <li>
        <strong>PNG:</strong> kayıpsız. Saydamlığı destekler. Şunlar için
        kullanın: ekran görüntüleri, çizimler, saydam logolar, keskin
        kenarlı her şey.
      </li>
      <li>
        <strong>GIF:</strong> animasyonlu görseller, kayıpsız palet sıkıştırması
        (maksimum 256 renk). Animasyon için çoğunlukla video formatları ve
        WebP/AVIF ile değiştirildi. Uyumluluk nedeniyle hâlâ yaygın.
      </li>
      <li>
        <strong>SVG (Ölçeklenebilir Vektör Grafikleri):</strong> vektör formatı.
        Piksel değil matematikle tanımlanır — sonsuz çözünürlük. Logolar,
        simgeler, ölçeklenmesi gereken her şey için kullanın.
      </li>
      <li>
        <strong>WebP:</strong> Google'ın modern formatı. Hem kayıplı hem kayıpsız
        modlar. Benzer kalitede JPG/PNG'den %25–35 daha küçük. Geniş tarayıcı
        desteği. Web görselleri için kullanın.
      </li>
      <li>
        <strong>AVIF:</strong> WebP'den daha yeni, daha iyi sıkıştırma.
        Tarayıcı desteği eşitleniyor. En yeni web için kullanın; eski
        tarayıcılar için WebP'ye düşüş yapın.
      </li>
      <li>
        <strong>HEIC / HEIF:</strong> iPhone fotoğrafları için Apple'ın varsayılanı.
        JPG'den daha iyi sıkıştırma. Apple ekosistemi dışında uyumluluk
        sorunludur — geniş çapta paylaşmadan önce JPG'ye dönüştürün.{" "}
        <a href="/tools/heic-to-jpg">HEIC'den JPG'ye aracımızı</a> kullanın.
      </li>
      <li>
        <strong>BMP:</strong> sıkıştırılmamış bitmap. Büyük dosyalar. Çoğunlukla
        tarihsel / Windows'a özgü.
      </li>
      <li>
        <strong>TIFF:</strong> yüksek kaliteli kayıpsız görsel. Yayıncılıkta,
        taramada, profesyonel fotoğrafçılıkta kullanılır. Büyük dosyalar.
      </li>
    </ul>
    <p>
      Bu sitede hızlı dönüşümler: <a
      href="/tools/image-format-converter">PNG/JPG/WebP dönüştürücü</a>,{" "}
      <a href="/tools/svg-to-png">SVG'den PNG'ye</a>,{" "}
      <a href="/tools/heic-to-jpg">HEIC'den JPG'ye</a>,{" "}
      <a href="/tools/webp-to-jpg">WebP'den JPG'ye</a>.
    </p>

    <h2 id="data">Veri formatları: CSV, JSON, XML, YAML</h2>
    <ul>
      <li>
        <strong>CSV (virgülle ayrılmış değerler):</strong> en eski, en basit,
        elektronik tablo yerel. Her satır bir satırdır; sütunlar virgülle ayrılır.
        Excel, R, Python pandas, her şeyle çalışır. Sınırlama: iç içe veri
        yok.
      </li>
      <li>
        <strong>JSON (JavaScript Nesne Gösterimi):</strong> iç içe veri
        yapısı. Web API varsayılanı. Hiyerarşik nesneler + diziler. En
        modern veri alışverişi.
      </li>
      <li>
        <strong>XML (Genişletilebilir İşaretleme Dili):</strong> niteliklerle
        hiyerarşik. JSON'dan daha eski; kurumsal sistemlerde, SOAP API'lerinde,
        belge formatlarında (DOCX, ODT dahili olarak sıkıştırılmış XML'dir) yaygın.
        JSON'dan daha ayrıntılı ancak daha ifade gücü yüksek (nitelikler, ad alanları).
      </li>
      <li>
        <strong>YAML (YAML Bir İşaretleme Dili Değildir):</strong> insan dostu
        iç içe veri. Yapılandırmalar için kullanılır (Kubernetes, Ansible, GitHub Actions).
        Girintiye duyarlı — boşlukla bozulması kolay.
      </li>
      <li>
        <strong>TOML:</strong> yapılandırmalar için YAML'dan daha basit. Cargo
        (Rust), Poetry (Python) tarafından kullanılır.
      </li>
      <li>
        <strong>Parquet, Avro, ORC:</strong> büyük veri için sütunlu ikili formatlar.
        Analitik iş yükleri için CSV/JSON'dan daha küçük ve daha hızlı. Spark,
        BigQuery, Snowflake ile kullanılır. İnsan tarafından okunamaz.
      </li>
    </ul>
    <p>
      Bu sitede dönüşümler:{" "}
      <a href="/tools/json-to-csv">JSON'dan CSV'ye</a>,{" "}
      <a href="/tools/csv-to-json">CSV'den JSON'a</a>,{" "}
      <a href="/tools/xml-to-csv">XML'den CSV'ye</a>,{" "}
      <a href="/tools/yaml-json-converter">YAML ↔ JSON</a>,{" "}
      <a href="/tools/csv-to-excel-xml">CSV'den Excel'e</a>.
    </p>

    <h2 id="audio-video">Ses + video formatları</h2>
    <p>
      Hızlı başvuru:
    </p>
    <ul>
      <li>
        <strong>Ses kayıpsız:</strong> WAV (sıkıştırılmamış), FLAC (sıkıştırılmış
        kayıpsız), ALAC (Apple kayıpsız).
      </li>
      <li>
        <strong>Ses kayıplı:</strong> MP3 (evrensel), AAC (daha yeni, daha iyi
        sıkıştırma), OGG (açık kaynak), Opus (en iyi sıkıştırma).
      </li>
      <li>
        <strong>Video kayıplı:</strong> H.264/MP4 (evrensel varsayılan), H.265/HEVC
        (daha iyi sıkıştırma ancak patent engelli), VP9 (Google'ın
        telifsiz), AV1 (en yeni telifsiz, en iyi sıkıştırma).
      </li>
      <li>
        <strong>Video kapları:</strong> MP4, MOV, MKV, WebM, AVI. Kap,
        codec'i tutar — aynı H.264 videosu MP4, MOV veya MKV'de olabilir.
      </li>
    </ul>
    <p>
      Bu sitede ses/video dönüşümü kasıtlı olarak sınırlıdır — uygun
      dönüştürme, yalnızca tarayıcı için çok ağır olan FFmpeg'i gerektirir.
    </p>

    <h2 id="archives">Arşiv + sıkıştırma formatları</h2>
    <ul>
      <li>
        <strong>ZIP:</strong> evrensel, her işletim sistemi destekler. Kayıpsız
        sıkıştırma + birden çok dosyayı tek bir arşivde birleştirir.
      </li>
      <li>
        <strong>7z:</strong> ZIP'ten daha iyi sıkıştırma. 7-Zip veya
        uyumlu bir yazılım gerektirir.
      </li>
      <li>
        <strong>RAR:</strong> tescilli. Korsanlık için popülerdi; azalıyor.
      </li>
      <li>
        <strong>TAR:</strong> Unix arşivi (sadece birleştirir, sıkıştırma yok).
        gzip ile birleştirilir → .tar.gz, bzip2 ile → .tar.bz2, xz ile →
        .tar.xz.
      </li>
      <li>
        <strong>Tek dosya sıkıştırma:</strong> gz, bz2, xz — her seferinde bir
        dosyayı sıkıştırır. Birden çok dosyanın arşivleri için TAR ile birleştirilir.
      </li>
    </ul>

    <h2 id="rare">Nadir dosya formatları arasında dönüşüm</h2>
    <p>
      Olağandışı veya alana özgü formatlar için:
    </p>
    <ul>
      <li>
        <strong>3D baskı (STL, OBJ, 3MF, STEP):</strong>{" "}
        <a href="/guides/ebook-and-3d-file-conversion">e-kitap + 3D dönüşüm rehberimize</a> bakın.
      </li>
      <li>
        <strong>CAD (DWG, DXF):</strong> AutoCAD'in DWG'si tescillidir;
        DXF daha açıktır. Ücretsiz araçlar: LibreCAD, FreeCAD, ODA Dosya Dönüştürücü.
      </li>
      <li>
        <strong>CBS (Shapefile, GeoJSON, KML):</strong> QGIS hepsini işler,
        ücretsiz ve açık kaynak.
      </li>
      <li>
        <strong>DAW proje dosyaları (.als, .flp, .logicx):</strong> tescilli,
        temiz bir DAW'lar arası dönüşüm yok. Stem'leri WAV/AIFF olarak dışa aktarın.
      </li>
      <li>
        <strong>E-okuyucu formatları (AZW3, MOBI, KFX):</strong> Calibre evrensel
        dönüştürücüdür. KFX (Kindle'ın en yenisi) kısmen desteklenir.
      </li>
      <li>
        <strong>Soybilim (GEDCOM):</strong> evrensel soybilim formatı. Çoğu
        soybilim yazılımı onu içe/dışa aktarır.
      </li>
    </ul>
    <p>
      Gerçekten nadir formatlar için iş akışı şudur: GitHub'da açık kaynaklı bir
      dönüştürücü arayın (genellikle vardır) veya bir kütüphane aracılığıyla
      temel verileri çıkarın (çoğu nadir format, yayınlanmış bir özellikle
      sıkıştırılmış XML veya ikilidir).
    </p>
  </>
);

export const cta = {
  label: "PNG/JPG/WebP görsel dönüştürücü (ücretsiz)",
  targetSlug: "image-format-converter",
};

export const faq = [
  {
    q: "Hangi dosya formatlarını gerçekten bilmem gerekiyor?",
    a: "Yaklaşık 20 format günlük kullanımın %95'ini kapsar: belgeler için PDF/DOCX/ODT/RTF/TXT/MD/EPUB, görseller için JPG/PNG/GIF/SVG/WebP/AVIF/HEIC/TIFF, veri için CSV/JSON/XML/YAML, ses/video için MP3/AAC/MP4/H.264, arşivler için ZIP/TAR.GZ. Geri kalan her şey alana özgüdür.",
  },
  {
    q: "PNG, JPG ve SVG arasındaki fark nedir?",
    a: "JPG: fotoğraflar için kayıplı sıkıştırma. PNG: saydamlıkla kayıpsız, ekran görüntüleri ve çizimler için. SVG: vektör formatı, sonsuz çözünürlük, logolar ve simgeler için. JPG/PNG piksel tabanlıdır; SVG matematik tabanlıdır. Fotoğraflar için JPG, keskin kenarlı içerik için PNG, ölçeklenmesi gereken her şey için SVG kullanın.",
  },
  {
    q: "Nadir dosya formatları arasında dönüşüm yapabilir miyim?",
    a: "Çoğu durumda evet. 3D baskı (STL/OBJ/3MF) — 3D dönüşüm rehberimize bakın. CAD (DWG/DXF) — LibreCAD/FreeCAD. CBS (Shapefile/GeoJSON/KML) — QGIS. E-okuyucu (AZW3/MOBI) — Calibre. Soybilim (GEDCOM) — çoğu soybilim yazılımı. Gerçekten belirsiz formatlar için GitHub'da arama yapın — açık kaynaklı dönüştürücüler genellikle vardır.",
  },
  {
    q: "Grafikler için en iyi dosya dönüştürücü hangisidir?",
    a: "PNG/JPG/WebP/AVIF için: görsel format dönüştürücümüz hepsini tarayıcı tarafında işler. HEIC için: HEIC'den JPG'ye. SVG'den rastere: çözünürlük kaydırıcılı SVG'den PNG'ye. Toplu görsel dönüşümü için: macOS Hızlı Eylemler, Windows ImageMagick veya gelişmiş işler için platformlar arası GIMP.",
  },
];