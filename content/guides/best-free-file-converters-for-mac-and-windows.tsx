/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;En iyi ücretsiz dosya dönüştürücü&rdquo; sorusunun cevabı, neyi dönüştürdüğünüze, ne sıklıkta yaptığınıza ve içeriğin ne kadar hassas olduğuna göre değişir. Bu rehber, platformlar arası bir dökümdür — Mac vs Windows'a ne kurulmalı, hangi araçlar yerleşik gelir ve kurulum gerektirmeyen tarayıcı tabanlı araçlar diğer her şeyi nasıl kapsar.
    </p>
  </>
);

export const toc = [
  { id: "browser", label: "Yalnızca tarayıcı (kurulum yok)" },
  { id: "mac", label: "Mac yerleşik seçenekleri" },
  { id: "windows", label: "Windows yerleşik seçenekleri" },
  { id: "desktop", label: "Platformlar arası masaüstü araçları" },
  { id: "business", label: "İş belgesi dönüştürücüleri" },
  { id: "review", label: "Hangi araçlar gerçekten değer?" },
];

export const body = (
  <>
    <h2 id="browser">Yalnızca tarayıcı dönüştürücüleri (kurulum gerekmez, her işletim sisteminde çalışır)</h2>
    <p>
      Herhangi bir makinede tek seferlik dönüşümler için en hızlı yol. Aşağıdaki her araç tarayıcınızda yerel olarak çalışır — dosyalar hiçbir yere yüklenmez. Kapsam:
    </p>
    <ul>
      <li><strong>PDF:</strong> <a href="/tools/pdf-to-text">PDF araçları dizinimize</a> bakın — 14+ PDF dönüştürücü ve düzenleyici.</li>
      <li><strong>Görseller:</strong> <a href="/tools/image-format-converter">PNG/JPG/WEBP</a>, <a href="/tools/heic-to-jpg">HEIC</a>, <a href="/tools/svg-to-png">SVG</a>, GIF, AVIF.</li>
      <li><strong>Veri:</strong> <a href="/tools/json-to-csv">JSON ↔ CSV</a>, <a href="/tools/xml-to-csv">XML'den CSV'ye</a>, <a href="/tools/csv-to-excel-xml">CSV'den Excel'e</a>, YAML.</li>
      <li><strong>Metin:</strong> Markdown ↔ HTML, Base64, büyük/küçük harf dönüşümü.</li>
      <li><strong>OCR:</strong> <a href="/tools/pdf-ocr-to-text">taranmış/el yazısı PDF'den metne</a>.</li>
    </ul>
    <p>
      Gündelik dönüşümlerin %80'i için yalnızca tarayıcı yeterlidir — kurulum yok, hesap yok, yükleme yok, Mac/Windows/Linux/ChromeOS'te aynı şekilde çalışır.
    </p>

    <h2 id="mac">Mac yerleşik seçenekleri (kurulum gerekmez)</h2>
    <p>
      macOS, şaşırtıcı derecede yetenekli yerleşik dönüştürme araçlarıyla gelir:
    </p>
    <ul>
      <li>
        <strong>Preview uygulaması:</strong> neredeyse tüm görsel ve PDF formatlarını açar. Farklı Kaydet ile PNG/JPG/HEIC/PDF/TIFF arasında dönüşüm yapabilirsiniz. Gizli numara: Finder'da birden çok görsel seçin, sağ tıklayın, Hızlı İşlemler → Görsel Dönüştür ile hiçbir şey açmadan toplu dönüşüm yapabilirsiniz.
      </li>
      <li>
        <strong>Hızlı İşlemler menüsü:</strong> herhangi bir dosyaya sağ tıklayın → Hızlı İşlemler. Yerleşik işlemler arasında &ldquo;PDF Oluştur&rdquo; (herhangi bir dosya türü), &ldquo;Görsel Dönüştür&rdquo; (aynı anda birden çok görsel), &ldquo;Seçili Video Dosyalarını Kodla&rdquo; (video dönüştürme) bulunur.
      </li>
      <li>
        <strong>Automator + Kısayollar:</strong> macOS otomasyon çerçevesi, 5 dakikada özel dosya dönüştürücüler oluşturur. Sürükle-bırak arayüzü, kodlama gerektirmez. Toplu işler, zamanlanmış klasörler vb. için çalışır.
      </li>
      <li>
        <strong>Pages / Numbers / Keynote → Dosya → Dışa Aktar:</strong> PDF, Word, Excel, PowerPoint, EPUB, düz metin olarak dışa aktarın. iWork'unuz varsa (macOS ile ücretsiz) Office formatı dönüşümleri için üçüncü taraf araca gerek yoktur.
      </li>
      <li>
        <strong>Terminal:</strong> macOS, <code>sips</code> (görsel işleme), <code>iconutil</code> (icns) içerir ve belge dönüşümü için Pandoc (homebrew) kurabilirsiniz. İleri düzey kullanıcı alanı.
      </li>
    </ul>

    <h2 id="windows">Windows yerleşik seçenekleri</h2>
    <p>
      Windows, macOS kadar cömert değildir ancak temel ihtiyaçlar mevcuttur:
    </p>
    <ul>
      <li>
        <strong>Microsoft PDF'ye Yazdır:</strong> Windows 10'dan beri yerleşiktir. Yazdır → Microsoft PDF'ye Yazdır, yazdırılabilir herhangi bir belgeyi PDF'ye dönüştürür. Herhangi bir uygulamadan çalışır.
      </li>
      <li>
        <strong>Photos uygulaması:</strong> HEIC, PNG, JPG, GIF, WEBP, BMP açar. Temel format dönüşümü için Farklı Kaydet.
      </li>
      <li>
        <strong>Ekran Alıntısı Aracı / Alıntı ve Taslak:</strong> ekran görüntüleri PNG olarak kaydedilir; zengin açıklama. Boyut küçültme için JPG olarak kaydedin.
      </li>
      <li>
        <strong>Office:</strong> Word, Excel, PowerPoint'in tümü PDF, XPS, düz metin ve diğer birçok formata Farklı Kaydet'i destekler. Ücretsiz Office Online, tarayıcıda aynısını yapar.
      </li>
      <li>
        <strong>PowerShell:</strong> yerleşik betik dili. <code>ImageMagick</code>{" "}
        (ücretsiz, winget ile ayrı kurulum) artı PowerShell döngüleri, büyük ölçekte toplu dönüşümü halleder.
      </li>
      <li>
        <strong>WSL2:</strong> ileri düzey kullanıcılar için — <code>pandoc</code>, <code>imagemagick</code>, <code>ffmpeg</code> ve ihtiyacınız olan her şeyi içeren tam Linux alt sistemi.
      </li>
    </ul>

    <h2 id="desktop">Platformlar arası masaüstü araçları (ileri düzey kullanıcı seçimleri)</h2>
    <ul>
      <li>
        <strong>Pandoc</strong> (ücretsiz, açık kaynak). Evrensel belge dönüştürücü. Markdown ↔ HTML ↔ DOCX ↔ EPUB ↔ LaTeX ↔ çok daha fazlası. CLI tabanlı ancak iyi belgelenmiştir. Toplu belge dönüşümü için doğru araç.
      </li>
      <li>
        <strong>FFmpeg</strong> (ücretsiz, açık kaynak). Evrensel video ve ses dönüştürücü. Dik öğrenme eğrisi; neredeyse her şeyi yapabilir. Video dönüşümü için fiili standart.
      </li>
      <li>
        <strong>ImageMagick</strong> (ücretsiz, açık kaynak). Evrensel görsel dönüştürücü ve düzenleyici. FFmpeg ile aynı yapıda — CLI, karmaşık, ancak yetenekli. <code>convert input.png output.jpg</code> — işte bu kadar.
      </li>
      <li>
        <strong>Calibre</strong> (ücretsiz, açık kaynak). E-kitap dönüşümünde (EPUB ↔ MOBI ↔ AZW3 ↔ PDF) en iyisi — iş akışı için <a href="/guides/ebook-and-3d-file-conversion">e-kitap + 3D dönüşüm rehberimize</a> bakın.
      </li>
      <li>
        <strong>LibreOffice</strong> (ücretsiz, açık kaynak). Microsoft Office alternatifi. Başsız mod (<code>libreoffice --headless --convert-to pdf *.docx</code>) yüzlerce dosyayı toplu olarak dönüştürür. Kalite Office'e yakındır.
      </li>
    </ul>

    <h2 id="business">İş belgeleri için en iyi dosya dönüştürücü</h2>
    <p>
      Profesyonel belgeler (sözleşmeler, raporlar, mali tablolar) için:
    </p>
    <ul>
      <li>
        <strong>Microsoft Word + Excel + PowerPoint:</strong> Office formatlarında gidiş-dönüş için en güvenli seçenek. Ücretsiz Office Online çoğu durumu halleder.
      </li>
      <li>
        <strong>Adobe Acrobat Pro</strong> (aylık $20). En iyi PDF gidiş-dönüşü, özellikle karmaşık düzenleri (formlar, tablolar, imzalar) korurken.
      </li>
      <li>
        <strong>LibreOffice</strong> Office formatlarının toplu dönüşümü için — düzenlerin %95'ini Microsoft Office ile aynı şekilde işler, ücretsizdir, başsız çalıştırılabilir.
      </li>
      <li>
        <strong>Pandoc</strong> Markdown tabanlı iş akışları için — mühendislik ekipleri, teknik yazarlar, dokümanlar için Git kullanan herkes. Temiz yapılandırılmış içeriği dönüştürmek için en iyisi.
      </li>
      <li>
        <strong>Bu sitede yalnızca tarayıcı:</strong> günlük görevler (CSV ↔ Excel, PDF metin çıkarma, görsel format değiştirme) için gizlilik dostu yol.
      </li>
    </ul>

    <h2 id="review">Hangi dosya dönüştürücü araçları gerçekten değer?</h2>
    <p>
      Dürüst değerlendirme:
    </p>
    <ul>
      <li>
        <strong>Değer:</strong> Pandoc, FFmpeg, ImageMagick, Calibre, LibreOffice — hepsi ücretsiz, kendi alanlarında en iyisi. Profesyonel PDF iş akışları için Adobe Acrobat Pro (aylık $20). Ara sıra yapılan görevler için yalnızca tarayıcı dönüştürücüleri.
      </li>
      <li>
        <strong>Atlayın:</strong> aylık $5 olan düzinelerce &ldquo;hepsi bir arada dönüştürücü&rdquo; SaaS uygulaması. Çoğu, yukarıdaki ücretsiz araçların daha kötü kullanıcı deneyimi ve daha kötü gizlilikle sarılmış halleridir. İstisna: CloudConvert gibi birkaçı ölçekte gerçek değer sunar, ancak bireysel kullanıcılar için ücretsiz seçenekler yeterlidir.
      </li>
      <li>
        <strong>Şüpheci olun:</strong> &ldquo;Yapay zeka destekli dosya dönüştürücü&rdquo; pazarlamasına karşı. Altta yatan teknoloji aynıdır; yapay zeka moda sözcüğü genellikle yetenek eklemeden maliyet ekler. İstisna, modern yapay zeka modellerinin bozuk girdilerde Tesseract'tan gerçekten daha iyi performans gösterdiği OCR'dir.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "XML'den CSV'ye dönüştürücümüzü deneyin (kurulum yok)",
  targetSlug: "xml-to-csv",
};

export const faq = [
  {
    q: "Mac için en iyi ücretsiz dosya formatı dönüştürücü nedir?",
    a: "macOS'un şaşırtıcı derecede yetenekli yerleşik araçları vardır: görsel/PDF dönüşümü için Preview, toplu görsel dönüşümü için Finder'da Hızlı İşlemler, Office formatları için Pages/Numbers/Keynote, özel iş akışları için Automator. Bunların dışında kalanlar için yalnızca tarayıcı dönüştürücüleri hiçbir şey kurmadan çalışır.",
  },
  {
    q: "Windows için en iyi ücretsiz dosya formatı dönüştürücü nedir?",
    a: "Microsoft PDF'ye Yazdır yerleşiktir; Office (veya ücretsiz Office Online) belge formatlarını halleder; görseller için Photos; toplu işler için PowerShell + ImageMagick. Bunların dışında kalan her şey için yalnızca tarayıcı dönüştürücüleri veya winget ile Pandoc/FFmpeg/Calibre kurulumu boşlukları doldurur.",
  },
  {
    q: "Mac'te ekstra yazılım olmadan dosyaları nasıl dönüştürebilirim?",
    a: "Preview uygulaması: Farklı Kaydet ile görsel/PDF formatları arasında dönüşüm yapın. Finder Hızlı İşlemler: dosyaları seçin → sağ tıklayın → Görsel Dönüştür toplu işler için çalışır. Pages/Numbers/Keynote: Dosya → PDF/Word/Excel/EPUB/metin olarak Dışa Aktar. Automator: özel dönüştürücüler için sürükle-bırak oluşturucu. Terminal: görsel işleme için sips, icns için iconutil.",
  },
  {
    q: "Ücretli dosya dönüştürücü araçları buna değer mi?",
    a: "Profesyonel PDF iş akışları için Adobe Acrobat Pro (aylık $20) değer. Pandoc, FFmpeg, ImageMagick, Calibre, LibreOffice'in tümü ücretsiz ve kendi alanlarında en iyisidir — ücretli alternatifler nadiren onları geçer. Aylık $5 olan 'hepsi bir arada dönüştürücü' SaaS uygulamalarını atlayın; çoğu, bu ücretsiz araçların daha kötü gizlilikle sarılmış halleridir.",
  },
];