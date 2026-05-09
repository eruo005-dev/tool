export const intro = (
  <>
    <p>
      Dosya dönüştürme ile ilgili sık sorulan sorulara hızlı cevaplar. Bu sorular
      r/learnprogramming, r/techsupport, r/SoftwareRecs ve çeşitli ofis uygulaması
      alt dizinlerinde sürekli karşımıza çıkıyor. Her biri, cevabın daha fazla
      alana ihtiyaç duyduğu durumlarda daha ayrıntılı bir kılavuza bağlanır.
    </p>
  </>
);

export const toc = [
  { id: "office-text", label: "Ofis belgelerinden düz metne" },
  { id: "metadata", label: "Meta veri + gizlilik" },
  { id: "graphics", label: "Grafik formatı seçenekleri" },
  { id: "speed", label: "Hız + boyut soruları" },
  { id: "rare", label: "Nadir formatlar + uç durumlar" },
];

export const body = (
  <>
    <h2 id="office-text">Ofis belgelerinden düz metne</h2>

    <h3>Ofis belgelerini düz metne dönüştürmenin en iyi yolu nedir?</h3>
    <p>
      Üç hızlı seçenek:
    </p>
    <ol>
      <li>
        <strong>Word / Google Dokümanlar:</strong> Dosya → Farklı Kaydet → Düz Metin (.txt).
        Tüm biçimlendirmeyi kaybeder; metin içeriğini korur.
      </li>
      <li>
        <strong>Pandoc CLI:</strong> <code>pandoc -o output.txt input.docx</code>.
        Toplu işlemler için en iyisi — <code>--to=markdown</code> kullanırsanız
        başlıkları Markdown tarzı işaretleyiciler olarak korur.
      </li>
      <li>
        <strong>Hassas içerik için:</strong> LibreOffice headless kullanın
        (<code>libreoffice --headless --convert-to txt *.docx</code>), bulut
        gidiş-dönüşü olmaz.
      </li>
    </ol>
    <p>
      Biçimlendirmeyi kaldırma ipucu: biçimlendirilmiş metni önce düz metin
      düzenleyicisine yapıştırın, ardından hedefe tekrar yapıştırın. Tüm gizli
      stilleri, renkleri, yazı tiplerini kaldırır. Biçimlendirmenizle uğraşan
      web uygulamaları arasında metin aktarımı için çalışır.
    </p>

    <h2 id="metadata">Meta veri + gizlilik</h2>

    <h3>Meta verileri kaybetmeden dosyaları nasıl dönüştürebilirim?</h3>
    <p>
      Format bazında. JPEG/HEIC/TIFF: çoğu dönüştürücü basit format
      değişikliklerinde EXIF'i korur — çıktıyı doğrulayın. PDF: PDF↔PDF
      arasında korunur, görüntülere dönüştürülürken kaybolur. DOCX: DOCX↔ODT
      arasında korunur, açıkça etkinleştirilmediği sürece PDF dışa aktarımında
      kaybolur. Düz metin + CSV + JSON meta veri desteğine sahip değildir —
      gerekirse içeriğe gömün. Ayrıntılı döküm için{" "}
      <a href="/guides/converting-files-without-losing-quality">kalite koruma kılavuzumuza</a>{" "}
      bakın.
    </p>

    <h3>Paylaşmadan önce bir PDF'den meta verileri nasıl kaldırırım?</h3>
    <p>
      <a href="/tools/pdf-metadata-remover">PDF meta veri kaldırıcımızı</a> kullanın.
      Yalnızca tarayıcı tabanlıdır, başlık / yazar / konu / anahtar kelimeler /
      oluşturma tarihi / üretici alanlarını kaldırır. Meta verilerin paylaşmak
      istemediğiniz bir şeyi (dahili yazar adları, taslak geçmişi, makine adları)
      ortaya çıkardığı herhangi bir belge için iyidir.
    </p>

    <h3>Bir PDF'de hangi meta verilerin olduğunu nasıl görebilirim?</h3>
    <p>
      <a href="/tools/pdf-metadata-viewer">PDF meta veri görüntüleyicimizi</a> kullanın.
      Yalnızca tarayıcı tabanlıdır, varsa tüm standart PDF meta veri alanlarını
      ve XMP'yi gösterir. Paylaşmadan önce kullanışlıdır — tam olarak neyin
      sızacağını görürsünüz.
    </p>

    <h2 id="graphics">Grafik formatı seçenekleri</h2>

    <h3>Grafikler için en iyi dosya dönüştürücü hangisidir?</h3>
    <p>
      Dönüştürmeye bağlıdır. PNG/JPG/WebP/AVIF:{" "}
      <a href="/tools/image-format-converter">görüntü formatı dönüştürücümüz</a>{" "}
      hepsini tarayıcıda işler. HEIC: <a href="/tools/heic-to-jpg">HEIC'den
      JPG'ye</a>. SVG'den rastere: <a href="/tools/svg-to-png">SVG'den PNG'ye</a>{" "}
      çözünürlük kaydırıcısı ile. Toplu görüntü işleme için: ImageMagick CLI.
      Profesyonel fotoğraf düzenleme için: Photoshop veya GIMP.
    </p>

    <h3>PNG, JPG ve SVG arasındaki fark nedir?</h3>
    <p>
      JPG: fotoğraflar için kayıplı sıkıştırma. PNG: şeffaflıkla kayıpsız,
      ekran görüntüleri ve çizgi sanatı için. SVG: vektör formatı, sonsuz
      çözünürlük, logolar ve simgeler için. JPG/PNG piksel tabanlıdır; SVG
      matematik tabanlıdır. Ayrıntılı karşılaştırma için{" "}
      <a href="/guides/file-formats-you-actually-need-to-know">dosya formatları
      kılavuzumuza</a> bakın.
    </p>

    <h2 id="speed">Hız + boyut soruları</h2>

    <h3>Dosyaları nasıl daha hızlı dönüştürebilirim?</h3>
    <p>
      Beş ipucu: dönüştürme sekmesini ön planda tutun, diğer sekmeleri kapatın,
      bozulmamış çıktı gerekmiyorsa daha düşük kalite ayarları kullanın,
      yeniden kullanılan motorla (FFmpeg, Pandoc) toplu işlem yapın, gereksiz
      ara adımları atlayın. Ayrıntılı döküm için{" "}
      <a href="/guides/file-converter-troubleshooting-guide">sorun giderme
      kılavuzumuza</a> bakın.
    </p>

    <h3>Dosya boyutu dönüştürme hızını etkiler mi?</h3>
    <p>
      Evet — ancak doğrusal veya daha kötüdür. Tarayıcı sekmeleri 2-4 GB
      bellekle sınırlıdır. 500 MB'ın üzerindeki dosyalar yalnızca tarayıcı
      tabanlı araçları sınırlarına iter. Gigabayt ölçeğindeki dosyalar için
      masaüstü araçlarına (FFmpeg, ImageMagick, Pandoc, LibreOffice headless)
      geçin.
    </p>

    <h3>Bazı dosya dönüştürmeleri neden bu kadar uzun sürüyor?</h3>
    <p>
      Beş faktör: dosya boyutu, kaynak format karmaşıklığı (çok sütunlu PDF'ler
      yalnızca metin olanlardan daha yavaştır), dönüştürme türü (kayıpsız
      yeniden biçimlendirme hızlıdır, yeniden akış + yeniden yapılandırma
      yavaştır), tarayıcı tarafı vs bulut (bulutta GPU'lar vardır), OCR her
      zaman sayfa başına 5-15 saniye ile yavaştır. Tam tanılama akışı için{" "}
      <a href="/guides/file-converter-troubleshooting-guide">sorun giderme
      kılavuzuna</a> bakın.
    </p>

    <h2 id="rare">Nadir formatlar + uç durumlar</h2>

    <h3>Şifrelenmiş dosyaları dönüştürebilir misiniz?</h3>
    <p>
      Parola/anahtar ile evet. Onsuz hayır — şifreleme, anahtar olmadan
      okumayı engellemek için tasarlanmıştır. DRM korumalı medya (Kindle KFX,
      Audible AAX) çoğu yargı bölgesinde atlatılması yasa dışıdır. Kaybolan
      kendi parolaları bazen satıcı desteği (Microsoft hesap kurtarma, Adobe)
      aracılığıyla kurtarılabilir. Aksi takdirde onsuz yaşamayı planlayın veya
      yeniden oluşturun.
    </p>

    <h3>Nadir dosya formatları arasında dönüştürme yapabilir miyim?</h3>
    <p>
      Neredeyse her zaman, sabırla. Formatın yayınlanmış bir spesifikasyonu
      olup olmadığını kontrol edin (çoğu vardır — ISO, RFC, satıcı teknik
      incelemeleri). Ayrıştırıcılar için GitHub'da arama yapın. İkili formatlar
      için, Format Wiki gibi format araştırma siteleri bazen alan alan
      dökümler içerir. Son çare: veri formatı işinde uzmanlaşmış bir
      serbest çalışan kiralayın — dosya başına 100-500 dolar. Ayrıntılı
      bilgi için{" "}
      <a href="/guides/how-file-converters-actually-work">perde arkası
      kılavuzumuzda</a>.
    </p>

    <h3>Hangi dosya dönüştürücü efsanelerini görmezden gelmeliyim?</h3>
    <p>
      Birden çok dönüştürme her zaman kaliteyi bozmaz (yalnızca kayıplı
      zincirler bozar). PDF'ler düzenlemede her zaman kalite kaybetmez.
      AI destekli dönüştürücüler çoğunlukla pazarlamadır — istisna OCR'dir.
      Ücretsiz CLI araçları genellikle ücretli SaaS'den hız konusunda daha
      iyidir. Daha büyük çıktı dosyaları daha yüksek kalite anlamına gelmez.
      Tam efsane yıkımı için{" "}
      <a href="/guides/how-file-converters-actually-work">perde arkası
      kılavuzumuzda</a>.
    </p>
  </>
);

export const cta = {
  label: "Taranmış bir PDF'yi OCR ile metne dönüştürün (ücretsiz, tarayıcı tarafı)",
  targetSlug: "pdf-ocr-to-text",
};

export const faq = [
  {
    q: "Ofis belgelerini düz metne dönüştürmenin en iyi yolu nedir?",
    a: "Word/Google Dokümanlar: Dosya → Farklı Kaydet → Düz Metin. Toplu işlemler için Pandoc CLI. Hassas içerik için LibreOffice headless (bulut yok). Hızlı ipucu: biçimlendirilmiş metni önce düz metin düzenleyicisine yapıştırın, ardından hedefe tekrar yapıştırın — web uygulamaları arasında kopyalarken gizli stilleri kaldırır.",
  },
  {
    q: "Meta verileri kaybetmeden dosyaları nasıl dönüştürebilirim?",
    a: "JPEG/HEIC/TIFF: çoğu dönüştürücü format değişikliklerinde EXIF'i korur. PDF: PDF↔PDF arasında korunur, görüntülere dönüştürülürken kaybolur. DOCX: DOCX↔ODT arasında korunur, açıkça etkinleştirilmediği sürece PDF dışa aktarımında kaybolur. Düz metin + CSV + JSON: meta veri yok — gerekirse içeriğe gömün.",
  },
  {
    q: "Grafikler için en iyi dosya dönüştürücü hangisidir?",
    a: "PNG/JPG/WebP/AVIF için görüntü formatı dönüştürücümüz, iPhone fotoğrafları için HEIC'den JPG'ye, vektörden rastere çözünürlük kaydırıcısı ile SVG'den PNG'ye. Toplu görüntü işleme için: ImageMagick CLI. Profesyonel fotoğraf düzenleme için: Photoshop veya GIMP.",
  },
  {
    q: "Dönüştürücüm hangi dosya formatlarını destekliyor?",
    a: "Belgeleri dikkatlice okuyun — 'PDF' tek başına 'gömülü yazı tipleri ve formlar içeren PDF v1.4-2.0' karşısında belirsizdir. Taahhüt etmeden önce gerçek dosyanızla test edin. Açık sınırlamalar arayın — güvenilir araçlar bunları açıklar. Yalnızca başarı/başarısızlığı değil, her zaman çıktı kalitesini doğrulayın.",
  },
];