/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Dosyam neden dönüştürdükten sonra daha kötü görünüyor?&rdquo; evrensel
      bir hayal kırıklığıdır. İyi haber: hangi dönüştürme adımlarının kayıplı,
      hangilerinin kayıpsız olduğunu anladığınızda çoğu kalite kaybı önlenebilir.
      Bu rehber pratik bir dökümdür — her dönüştürme türünün dosyanıza ne yaptığı,
      kalite kaybının kaçınılmaz olduğu durumlar ve bunu nasıl en aza indireceğiniz.
    </p>
  </>
);

export const toc = [
  { id: "lossy-vs-lossless", label: "Kayıplı ve kayıpsız dönüştürmeler" },
  { id: "image-quality", label: "Görüntü kalitesini koruma" },
  { id: "metadata", label: "Meta verileri dönüştürmeler arasında saklama" },
  { id: "compression", label: "Sıkıştırma dönüştürmeyi etkiler mi?" },
  { id: "multi-stage", label: "Çok aşamalı dönüştürme hasarı" },
  { id: "structure", label: "Yapıyı koruma (tablolar, listeler)" },
];

export const body = (
  <>
    <h2 id="lossy-vs-lossless">Kayıplı ve kayıpsız: en önemli ayrım</h2>
    <p>
      Her dönüştürme iki türden biridir:
    </p>
    <ul>
      <li>
        <strong>Kayıpsız:</strong> orijinal, çıktıdan mükemmel bir şekilde yeniden
        oluşturulabilir. Örnekler: PNG'den BMP'ye, WAV'dan FLAC'a, düz metinden düz
        metine. Kalite sorunu yok; özgürce dönüştürebilirsiniz.
      </li>
      <li>
        <strong>Kayıplı:</strong> bazı bilgiler kalıcı olarak atılır.
        Örnekler: PNG'den JPG'ye, WAV'dan MP3'e, karmaşık PDF'den düz metine. Kalite
        düşer; yalnızca kaybı kabul ettiğinizde dönüştürün.
      </li>
    </ul>
    <p>
      Tuzak: birçok kayıplı dönüştürme, varsayılan ayarlarda KAYIPSIZ gibi görünür.
      Bir PNG'yi %100 kalitede JPG'ye dönüştürmek yine de göremediğiniz renk
      bilgilerini atar — ancak aynı JPG'yi yeniden kaydeden üçüncü bir dönüştürücü
      kaybı katlayacaktır. Kalite, her kaydetmeyle kademeli olarak düşer.
    </p>

    <h2 id="image-quality">Dönüştürme sırasında görüntü kalitesini koruma</h2>
    <p>
      Görüntü formatı kalite hiyerarşisi:
    </p>
    <ul>
      <li>
        <strong>Kayıpsız formatlar (kalite kaybı yok):</strong> PNG, BMP, TIFF,
        WebP-kayıpsız, AVIF-kayıpsız. Ekran görüntüleri, illüstrasyonlar, çizgi
        sanatı, keskin kenarlı her şey için kullanın.
      </li>
      <li>
        <strong>Kayıplı formatlar:</strong> JPG (en eski), WebP-kayıplı, AVIF-kayıplı,
        HEIC. Fotoğraflar için daha iyi sıkıştırma. %85–95 kalite ayarları genellikle
        kaynaktan görsel olarak ayırt edilemez.
      </li>
      <li>
        <strong>Vektör:</strong> SVG, PDF (bazen). Sonsuz çözünürlük.
        Logolar, simgeler, ölçeklemeniz gereken her şey için kullanın.
      </li>
    </ul>
    <p>
      Dönüştürme kuralları:
    </p>
    <ul>
      <li>
        <strong>Kayıpsız ↔ kayıpsız:</strong> güvenli. PNG ↔ BMP ↔ TIFF: kalite
        değişmez, yalnızca dosya boyutu farklılıkları.
      </li>
      <li>
        <strong>Kayıpsız → kayıplı:</strong> kalite kaybı kalıcıdır. PNG → %90
        JPG tek kayıt için iyidir. PNG → JPG → yeniden kaydet → yeniden kaydet
        artefaktları biriktirir.
      </li>
      <li>
        <strong>Kayıplı → kayıpsız:</strong> dosya büyür ancak kaliteyi geri
        kazanamazsınız. JPG → PNG, JPG artefaktlarını sonsuza kadar korur.
      </li>
      <li>
        <strong>Vektör → raster:</strong> doğru çıktı çözünürlüğünü ayarlayın. SVG
        → PNG 96 DPI ile 300 DPI arasında büyük bir kalite farkı vardır.{" "}
        <a href="/tools/svg-to-png">SVG'den PNG'ye aracımızı</a> çözünürlük
        kaydırıcısıyla kullanın.
      </li>
      <li>
        <strong>Raster → vektör:</strong> kırılgan. Otomatik izleme araçları temiz
        çizgi sanatı için çalışır, fotoğraflarda başarısız olur. Orijinal vektörü
        bulmak veya yeniden oluşturmak daha iyidir.
      </li>
    </ul>

    <h2 id="metadata">Meta verileri dönüştürmeler arasında saklama</h2>
    <p>
      Meta veri = dosya <em>hakkındaki</em> veri: yazar, oluşturma tarihi, GPS
      koordinatları, kamera modeli, belge özellikleri. Her format bunu farklı
      şekilde işler:
    </p>
    <ul>
      <li>
        <strong>JPEG, HEIC, TIFF:</strong> EXIF meta verilerini (kamera, GPS,
        tarih, pozlama) gömer. Çoğu dönüştürücü, basit format değişikliklerinde
        EXIF'i korur; ihtiyacınız varsa çıktıyı kontrol edin.{" "}
        <a href="/tools/pdf-metadata-viewer">PDF meta veri görüntüleyicimiz</a>,
        dönüştürmeden neyin kurtulduğunu gösterir.
      </li>
      <li>
        <strong>PDF:</strong> başlık, yazar, konu, anahtar kelimeleri gömer.
        Çoğu PDF→PDF işleminde korunur; PDF'den görüntü formatlarına
        dönüştürdüğünüzde kaybolur. Paylaşmadan önce meta verileri kaldırmak
        istiyorsanız{" "}
        <a href="/tools/pdf-metadata-remover">meta veri kaldırıcımızı</a> kullanın.
      </li>
      <li>
        <strong>DOCX, ODT:</strong> yazar, son değiştiren, revizyon
        geçmişini gömer. DOCX ↔ ODT dönüşümlerinde korunur; belge özelliklerini
        açıkça dahil etmediğiniz sürece PDF'ye aktarımda kaybolur.
      </li>
      <li>
        <strong>Düz metin + CSV + JSON:</strong> yerleşik meta veri yok. Korumak
        istediğiniz her şey dosya içeriğine (bir başlık yorumu, bir metadata.json
        yan dosyası) gider.
      </li>
    </ul>
    <p>
      <strong>Gizlilik açısı:</strong> meta veriler genellikle paylaşmayı
      amaçlamadığınız şeyleri içerir — evinizden GPS koordinatları, Word
      belgesinin kimin neyi düzenlediğini gösteren revizyon geçmişi.
      Hassas dosyaları herkese açık olarak paylaşmadan önce meta verileri her zaman
      kaldırın.
    </p>

    <h2 id="compression">Sıkıştırma format dönüştürmeyi etkiler mi?</h2>
    <p>
      İnsanların &ldquo;sıkıştırma&rdquo; ile kastettiği üç farklı şey:
    </p>
    <ul>
      <li>
        <strong>Kayıpsız sıkıştırma</strong> (ZIP, gzip, PNG'nin dahili
        sıkıştırması, FLAC). Kaliteyi etkilemez; yalnızca dosya boyutunu.
        Özgürce dönüştürün.
      </li>
      <li>
        <strong>Kayıplı sıkıştırma</strong> (JPG kalite kaydırıcısı, MP3 bit hızı,
        H.264 CRF). Daha agresif sıkıştırmayla kalite düşer. Mümkün olan en yüksek
        kalitede kaydedin.
      </li>
      <li>
        <strong>Sıkıştırma öncesi arşivler</strong> (RAR, 7z, ZIP). Alttaki
        dosyalar değişmez; arşiv yalnızca bir kapsayıcıdır. Dönüştürmeden önce her zaman
        açın.
      </li>
    </ul>
    <p>
      Yaygın tuzaklar: ağır sıkıştırılmış bir JPG'yi PNG'ye dönüştürüp daha iyi kalite
      beklemek (atılanı geri alamazsınız); çift sıkıştırma (bir ZIP'i sıkıştırmak dosyayı
      büyütür, küçültmez).
    </p>

    <h2 id="multi-stage">Dosyaları birden çok kez dönüştürmek kaliteye zarar verir mi?</h2>
    <p>
      Zincire bağlıdır:
    </p>
    <ul>
      <li>
        <strong>Tamamen kayıpsız:</strong> kaç kez olursa olsun hasar yok.
        PNG → BMP → TIFF → PNG orijinaliyle aynıdır.
      </li>
      <li>
        <strong>Bir kayıplı adım:</strong> kalite bir kez düşer, ardından kayıpsız
        formatlarda kalırsanız sabit kalır. PNG → JPG → BMP → PNG
        JPG'nin kaybını korur ancak daha fazla eklemez.
      </li>
      <li>
        <strong>Birden çok kayıplı adım:</strong> nesil kaybı birikir. PNG
        → JPG → JPG (yeniden kaydedilmiş) → JPG artefaktları biriktirir. Her adımda
        %95 kalitede bile 10 nesil yeniden kaydetme gözle görülür şekilde bozar.
      </li>
      <li>
        <strong>Karışık kayıplı formatlar:</strong> en kötü durum. PNG → JPG → WebP
        → AVIF, farklı kayıplı algoritmaların artefaktlarını öngörülemez
        şekillerde birleştirir. Bir kayıplı hedef seçin ve orada kalın veya
        baştan sona kayıpsız kalın.
      </li>
    </ul>
    <p>
      Pratik kural: ana dosyalarınızı kayıpsız bir formatta saklayın. Kayıplı
      formatlara yalnızca dağıtım için ihtiyaç duyulduğunda dışa aktarın. Kayıplı bir
      dosyayı asla yeniden düzenlemeyin — kayıpsız ana dosyaya dönün, düzenleyin,
      yeniden dışa aktarın.
    </p>

    <h2 id="structure">Yapıyı koruma: tablolar, listeler, hiyerarşi</h2>
    <p>
      Çok farklı yapılar arasındaki format dönüştürmeleri en çok kaybettirir:
    </p>
    <ul>
      <li>
        <strong>PDF'deki tablolar → düz metin:</strong> satırlar satırlara, sütunlar
        boşluklara dönüşür. Orijinal hizalama kaybolur. Geçici çözüm: Markdown'a
        dönüştürün (tablo sözdizimini korur) veya daha yüksek doğruluk için
        ABBYY/Acrobat Pro kullanın.
      </li>
      <li>
        <strong>HTML'deki başlıklar + listeler → düz metin:</strong> hiyerarşi
        sinyalleri kaybolur. Markdown daha iyi bir ara formattır.
      </li>
      <li>
        <strong>Çok sütunlu belgeler → doğrusal metin:</strong> sütunlar
        iç içe geçer. Ücretsiz araçlar bunu nadiren iyi işler.
      </li>
      <li>
        <strong>E-tablo formülleri → CSV:</strong> formüller önbelleğe alınmış
        değerlerine dönüşür; formül mantığı kaybolur. Formülleri korumak için XLSX
        olarak kaydedin; CSV yalnızca değerlerdir.
      </li>
    </ul>
    <p>
      Dürüst yaklaşım: yapı korunması önemliyse, dönüştürmeden sonra manuel olarak
      doğrulamayı ve temizlemeyi planlayın. Ücretsiz dönüştürücüler sizi %80'e
      getirir; son %20 insan işidir.
    </p>
  </>
);

export const cta = {
  label: "Paylaşmadan önce PDF meta verilerini kaldırın",
  targetSlug: "pdf-metadata-remover",
};

export const faq = [
  {
    q: "Dosyaları dönüştürmek neden bazen kalite kaybına yol açar?",
    a: "Kayıplı dönüştürmeler (PNG'den JPG'ye, WAV'dan MP3'e, karmaşık PDF'den düz metine) bilgileri kalıcı olarak atar. 'Yüksek kalite' ayarları bile veri kaybeder — sadece görünmez. Kalite, her kayıplı kaydetmeyle kademeli olarak düşer. Kayıpsız dönüştürmeler (PNG'den BMP'ye, FLAC'tan WAV'a) hiçbir şey kaybetmez. Hangisini yaptığınızı bilin.",
  },
  {
    q: "Meta verileri kaybetmeden dosyaları nasıl dönüştürebilirim?",
    a: "JPG/HEIC/TIFF: çoğu dönüştürücü, basit format değişikliklerinde EXIF'i korur. PDF: PDF↔PDF arasında korunur, görüntü formatlarına dönüştürürken kaybolur. DOCX: DOCX↔ODT arasında korunur, açıkça etkinleştirilmediği sürece PDF dışa aktarımında kaybolur. Düz metin + CSV + JSON: meta veri desteği yok — gerekirse içeriğe gömün. Doğrulamak için çıktıyı her zaman kontrol edin.",
  },
  {
    q: "Dosya sıkıştırması format dönüştürmeyi etkiler mi?",
    a: "Kayıpsız sıkıştırma (ZIP, PNG dahili, FLAC): kalite üzerinde etkisi yok. Kayıplı sıkıştırma (JPG, MP3, H.264): daha agresif ayarlarla kalite düşer. Sıkıştırma öncesi arşivler (ZIP, RAR): önce açın, sonra dönüştürün — sıkıştırılmış arşivleri dönüştürmek alttaki dosyaları işlemez.",
  },
  {
    q: "Dosyaları birden çok kez dönüştürmek kaliteye zarar verir mi?",
    a: "Kayıpsız zincirler: kaç kez olursa olsun hasar yok. Tek kayıplı adım, ardından kayıpsız: ilk kayıplı kaydetmeden sonra sabit. Birden çok kayıplı adım: nesil kaybı birikir — yüksek kalitede 10+ JPG yeniden kaydetmeden sonra görünür, düşük kalitede daha hızlı. Ana dosyaları kayıpsız formatta saklayın; yalnızca dağıtım için kayıplıya dışa aktarın.",
  },
  {
    q: "Format dönüştürürken dosya yapısını nasıl korurum?",
    a: "Tablolar ve çok sütunlu düzenler çoğu ücretsiz dönüştürücüde yapıyı kaybeder — yüksek doğruluk için ABBYY FineReader veya Adobe Acrobat Pro kullanın. HTML→metin için ara format olarak Markdown kullanın — hiyerarşiyi korur. E-tablo formülleri için XLSX olarak kaydedin (CSV yalnızca değerlerdir). Dönüştürmeden sonra manuel olarak temizlemeyi planlayın — ücretsiz araçlar %80'e ulaşır.",
  },
];