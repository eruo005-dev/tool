/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Dönüştürücüler başarısız olur. Tarayıcılar dönüşüm sırasında belleği tüketir,
      çıktı dosyaları bozulur, OCR anlamsız karakterler döndürür ve &ldquo;30
      saniye&rdquo; 30 dakikalık bir bekleyişe dönüşür. Bu kılavuz sistematik bir
      sorun giderme rehberidir — neyi kontrol etmeli, hangi sırayla ve
      işler gerçekten ters gittiğinde kurtarma seçenekleri.
    </p>
  </>
);

export const toc = [
  { id: "common-failures", label: "Yaygın hata türleri" },
  { id: "speed", label: "Dönüşümler neden uzun sürer" },
  { id: "large-files", label: "Çok büyük dosyaları işleme" },
  { id: "speed-tips", label: "Daha hızlı dönüşüm ipuçları" },
  { id: "recovery", label: "Dönüştürücü başarısız olduğunda" },
];

export const body = (
  <>
    <h2 id="common-failures">Yaygın hata türleri (sıklık sırasına göre)</h2>

    <h3>1. Çıktı bozuk veya anlamsız karakterler içeriyor</h3>
    <p>
      Neredeyse her zaman şunlardan biri: yanlış kaynak formatı algılandı, kodlama uyuşmazlığı
      (UTF-8 vs Latin-1) veya dosya uzantısının belirttiğinden farklı bir formattaydı. Teşhis:
    </p>
    <ul>
      <li>Kaynağı bir hex düzenleyicide açın (Windows'ta HxD, Mac/Linux'ta xxd). İlk birkaç bayt genellikle gerçek formatı tanımlayan bir sihirli sayıdır.</li>
      <li>Dosya uzantısının sihirli sayıyla eşleşip eşleşmediğini kontrol edin. İlk 4 baytta &ldquo;%PDF&rdquo; olmayan bir .pdf dosyası yeniden adlandırılmış bir dosyadır.</li>
      <li>Metin için: kodlamayı kontrol edin. iconv (Mac/Linux) veya Notepad++ &ldquo;Encoding&rdquo; menüsü (Windows) ile açıkça UTF-8 olarak yeniden kaydedebilirsiniz.</li>
    </ul>

    <h3>2. Tarayıcı sekmesi çöküyor veya donuyor</h3>
    <p>
      Bellek yetersiz. İstemci tarafı dönüşüm, tüm dosyayı RAM'de tutar,
      bazen birden çok kez (kod çözme, işleme ve kodlama sırasında). Çok büyük dosyalar için,
      tarayıcı sekmeleri yaklaşık 2-4 GB bellek ile sınırlıdır.
    </p>
    <p>Çözümler:</p>
    <ul>
      <li>Belleği boşaltmak için diğer sekmeleri kapatın.</li>
      <li>Safari yerine Chrome'u deneyin (Chrome, deneyimlerimize göre büyük sekmeleri daha iyi yönetir).</li>
      <li>Dönüşümden önce dosyayı bölün — 1 GB'lık bir PDF'i her biri 250 MB'lık 4 parçaya bölün.</li>
      <li>500 MB'tan büyük dosyalar için bir masaüstü aracına geçin (FFmpeg, ImageMagick, Pandoc).</li>
    </ul>

    <h3>3. OCR anlamsız karakterler döndürüyor</h3>
    <p>
      Tesseract anlamsız karakterleri genellikle şu anlama gelir: düşük çözünürlüklü girdi,
      dil uyuşmazlığı (İngilizce OCR'den İspanyolca metni ayrıştırmasını istemek) veya metin olmayan
      içerik (taramayla karıştırılan bir fotoğraf). Çözümler:
    </p>
    <ul>
      <li>Dil seçiminin kaynakla eşleştiğini doğrulayın.</li>
      <li>Kaynak, kötü aydınlatılmış taranmış bir fotoğrafsa, OCR'dan önce daha iyi aydınlatmayla yeniden çekin veya yeniden tarayın.</li>
      <li>Çok dilli belgeler için, her seferinde doğru dille sayfa veya bölüm başına OCR çalıştırın.</li>
      <li>Düşük çözünürlüklü taramalar (200 DPI altı) için, önce <a href="/tools/image-resizer">görüntü yeniden boyutlandırıcı</a> ile bikübik enterpolasyon kullanarak büyütün, ardından OCR yapın.</li>
    </ul>

    <h3>4. PDF hedef uygulamada açılmıyor</h3>
    <p>
      PDF bozuk, parola korumalı veya hedef uygulamanın desteklemediği bir özellik kullanıyor
      (XFA formları, katmanlı PDF'ler). Teşhis:
    </p>
    <ul>
      <li>Farklı bir uygulamada (Adobe Reader, Preview, Chrome) açmayı deneyin. Başka bir yerde açılırsa, orijinal hedefte bir özellik eksikliği vardır.</li>
      <li>Parola korumasını kontrol edin — dönüştürücüler genellikle şifrelenmiş PDF'lerde sessizce başarısız olur.</li>
      <li>Bozuk PDF'ler için: <a href="/tools/pdf-organizer">PDF düzenleyicimiz</a> veya pdf-lib tabanlı araçlar bazen okunabilir sayfaları kurtarabilir.</li>
    </ul>

    <h3>5. Dönüşüm tamamlanıyor ancak çıktı boş</h3>
    <p>
      Genellikle kaynak, istenen hedef için çıkarılabilir içeriğe sahip değildir.
      Örnekler: taranmış PDF (çıkarılabilir metin yok — OCR gerekli), düz bir dönüşümde saydamlığını kaybeden görüntü, şifrelenmiş belge.
    </p>

    <h3>6. Özel karakterler veya aksan işaretleri eksik</h3>
    <p>
      Kodlama sorunu. Kaynağı UTF-8 olarak yeniden kaydedin ve tekrar deneyin. Kaynak
      Windows-1252 ise (Batı Avrupa makinelerinde Excel dışa aktarımlarında yaygın), dönüşümün
      yeniden kodlamayı bilmesi gerekir.
    </p>

    <h2 id="speed">Bazı dosya dönüşümleri neden çok uzun sürer</h2>
    <p>
      Hız şunlara bağlıdır:
    </p>
    <ul>
      <li>
        <strong>Girdi dosyası boyutu ve karmaşıklığı.</strong> 500 MB'lık bir PDF,
        5 MB'lık bir PDF'den daha uzun sürer. Çok sütunlu veya görüntü yoğun PDF'ler,
        yalnızca metin içerenlerden daha yavaştır.
      </li>
      <li>
        <strong>Dönüşüm türü.</strong> Kayıpsız yeniden biçimlendirme (PNG'den BMP'ye)
        hızlıdır. Yeniden akış + yeniden yapılandırma (PDF'den DOCX'e düzeni koruyarak) yavaştır.
      </li>
      <li>
        <strong>İstemci tarafı vs bulut.</strong> Bulut sunucularında GPU'lar ve
        daha fazla RAM bulunur. İstemci tarafı CPU'nuzu kullanır. Daha yavaş ancak özeldir.
      </li>
      <li>
        <strong>Özellikle OCR.</strong> Her zaman yavaştır. İstemci tarafı Tesseract,
        sayfa başına 5-15 saniye sürer. Bulut GPU OCR, sayfa başına 1-2 saniye sürer.
      </li>
      <li>
        <strong>Arka plan sekmeleri.</strong> Tarayıcılar, arka plan sekmeleri için CPU'yu kısar.
        Dönüşüm sekmesini ön planda tutun.
      </li>
    </ul>

    <h2 id="large-files">Büyük dosyaları dönüştürme: boyut önemli mi?</h2>
    <p>
      Evet, üç şekilde:
    </p>
    <ol>
      <li>
        <strong>Bellek baskısı.</strong> Tarayıcı sekmeleri yaklaşık 2-4 GB ile sınırlıdır.
        500 MB üzeri dosyalar, dönüşüm sırasında belleğin tükenmesi riski altındadır.
        Belirtiler: donma, çökme, &ldquo;sayfa yanıt vermiyor&rdquo; uyarıları.
      </li>
      <li>
        <strong>Doğrusal veya daha kötü zaman karmaşıklığı.</strong> Bazı dönüşümler
        dosya boyutuyla doğrusal olarak ölçeklenir (işlenen baytlar). Diğerleri
        doğrusalın üzerinde ölçeklenir (görüntü işleme, video kodlama). 10 kat dosya boyutu
        nadiren 10 kat zaman anlamına gelir.
      </li>
      <li>
        <strong>Yükleme bant genişliği (bulut tabanlıysa).</strong> 10 Mbps bağlantı üzerinden
        bulut OCR'ye 1 GB yüklemek, herhangi bir işlemden önce yalnızca yükleme için 13 dakika sürer.
      </li>
    </ol>
    <p>
      500 MB'tan büyük dosyalar için, yalnızca tarayıcı tabanlı dönüştürücüler güvenilmez hale gelir.
      Bir masaüstü aracına geçin: video için FFmpeg, görüntüler için ImageMagick, belgeler için Pandoc veya
      LibreOffice headless. Gigabayt boyutundaki dosyaları sorunsuzca işlerler.
    </p>

    <h2 id="speed-tips">Dosyaları daha hızlı dönüştürmek için ipuçları</h2>
    <ul>
      <li>
        <strong>Dönüşüm sekmesini ön planda tutun.</strong> Tarayıcı
        arka plan sekmelerini kısar.
      </li>
      <li>
        <strong>Diğer sekmeleri kapatın.</strong> Dönüşüm için bellek ve CPU'yu boşaltın.
      </li>
      <li>
        <strong>Mükemmel çıktıya ihtiyacınız yoksa daha düşük kalite ayarları kullanın.</strong>
        %90 JPG, %100 ile görsel olarak aynıdır ancak daha hızlı dönüşür. 1080p yerine 720p video,
        kodlama süresini yarıya indirir.
      </li>
      <li>
        <strong>Toplu işlem.</strong> 100 dosyayı 100 ayrı işlemde sırayla dönüştürmeyin.
        Yüklenen motoru yeniden kullanan bir toplu iş aracı (FFmpeg,
        Pandoc) kullanın.
      </li>
      <li>
        <strong>Gereksiz ara adımları atlayın.</strong> Yalnızca farklı bir PDF'e ihtiyacınız varsa PDF → DOCX → PDF israftır. Doğrudan yolu bulun.
      </li>
      <li>
        <strong>Mümkün olduğunda ön işleme yapın.</strong> OCR'dan önce ihtiyacınız olmayan sayfaları kırpın. Biçim dönüşümünden önce büyük görüntüleri yeniden boyutlandırın. Metnin zaten çıkarılabilir olduğu sayfalarda OCR yapmayın.
      </li>
    </ul>

    <h2 id="recovery">Bir dosya dönüştürücü başarısız olduğunda ne olur: kurtarma seçenekleri</h2>
    <p>
      Öncelik sırasına göre hata kurtarma:
    </p>
    <ol>
      <li>
        <strong>Farklı bir araçla yeniden deneyin.</strong> Yalnızca tarayıcı tabanlı başarısız olursa,
        masaüstünü deneyin. Bir bulut hizmeti başarısız olursa, diğerini deneyin. Farklı
        motorların farklı hata türleri vardır — biri çalışırken diğeri takılıp kalabilir.
      </li>
      <li>
        <strong>Kaynağın bozuk olmadığını doğrulayın.</strong> Kaynak dosyayı kendi
        yerel uygulamasında açın. Orada sorunsuz açılıyorsa, sorun dönüştürücüdür. Açılmıyorsa,
        sorun kaynaktır.
      </li>
      <li>
        <strong>Bir ara biçim üzerinden dönüştürmeyi deneyin.</strong> Doğrudan PDF
        → DOCX başarısız mı oluyor? PDF → ODT → DOCX veya PDF → Markdown → DOCX deneyin. Ara biçim
        genellikle doğrudan yolun takılıp kaldığı noktayı atlar.
      </li>
      <li>
        <strong>Yapabildiğinizi kurtarın.</strong> Dönüşüm kısmen başarılıysa
        (100 sayfadan 50'si dönüştürüldü), kısmi sonucu kabul edin ve yalnızca başarısız sayfaları yeniden işleyin.
      </li>
      <li>
        <strong>Yedekten veya orijinalden kurtarın.</strong> Orijinali her zaman saklayın.
        Dönüşüm dosyayı yok ederse, ana kopyanız hâlâ durur.
      </li>
      <li>
        <strong>Gerçekten takılı kaldıysanız:</strong> Kaynak dosya biçimi, hedef biçim ve tam hatayla birlikte r/SoftwareRecs veya SuperUser'a gönderi yapın. Belirli uç durumlar için genellikle topluluk tarafından bilinen çözümler vardır.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "PDF OCR aracımızı deneyin (zorlu taramaları işler)",
  targetSlug: "pdf-ocr-to-text",
};

export const faq = [
  {
    q: "Dosya dönüştürücüm çalışmıyor — ne yapmalıyım?",
    a: "Sistematik kontroller: (1) kaynak dosyanın bozuk olmadığını doğrulayın (kendi yerel uygulamasında açılıyor mu?), (2) sihirli sayı ile dosya uzantısı eşleşmesini kontrol edin, (3) tarayıcı donmaları için diğer sekmeleri kapatın / Chrome'u deneyin / dosyayı bölün, (4) anlamsız karakter çıktısı için kodlamayı (UTF-8 vs Latin-1) ve OCR dilini kontrol edin. Hâlâ takılıysa, farklı bir dönüştürücü deneyin veya bir ara biçim üzerinden dönüştürün.",
  },
  {
    q: "Bir dosya dönüştürücü başarısız olduğunda ne olur?",
    a: "Kurtarma seçenekleri: farklı bir araçla yeniden deneyin, kaynağın bozuk olmadığını doğrulayın, bir ara biçim deneyin (doğrudan PDF → DOCX başarısız olduğunda PDF → ODT → DOCX genellikle işe yarar), kısmi çıktıyı kurtarın, orijinalden kurtarın (her zaman ana kopyaları saklayın). Son çare: biçim ayrıntılarıyla r/SoftwareRecs'e gönderi yapın — belirli uç durumların topluluk tarafından bilinen çözümleri vardır.",
  },
  {
    q: "Dosya dönüşümleri neden bu kadar uzun sürüyor?",
    a: "Beş faktör: dosya boyutu ve karmaşıklığı, dönüşüm türü (kayıpsız yeniden biçimlendirme hızlıdır, yeniden akış + yeniden yapılandırma yavaştır), istemci tarafı vs bulut (bulutta GPU'lar vardır), OCR her zaman yavaştır, tarayıcı arka plan sekmeleri CPU tarafından kısılır. Hızlandırmak için: sekmeyi ön planda tutun, diğer sekmeleri kapatın, kabul edilebilir olduğunda daha düşük kalite kullanın, masaüstü araçlarıyla toplu işlem yapın.",
  },
  {
    q: "Dosya boyutu dönüşüm hızını etkiler mi?",
    a: "Evet. Bellek baskısı tarayıcı sekmelerini yaklaşık 2-4 GB ile sınırlar. Zaman karmaşıklığı boyutla doğrusal veya daha kötüdür. Yükleme bant genişliği bulut araçları için önemlidir. 500 MB üzeri dosyalar tarayıcı araçlarını sınırlarına iter — gigabayt ölçeğindeki dosyalar için FFmpeg / ImageMagick / Pandoc / LibreOffice headless gibi masaüstü araçlarına geçin.",
  },
];