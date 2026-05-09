/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;PDF'yi 30 saniyede Word'e nasıl dönüştürebilirim?&rdquo; Reddit'te
      en çok sorulan PDF sorusudur. Dürüst cevap: sahip olduğunuz PDF'e bağlı
      olarak üç yol vardır ve bunlardan yalnızca biri 30 saniyelik yoldur. Bu
      kılavuz, her birini adım adım açıklayarak ilk seferde doğru aracı
      seçmenizi sağlar.
    </p>
  </>
);

export const toc = [
  { id: "fast-path", label: "30 saniyelik yol (metin tabanlı PDF'ler)" },
  { id: "scanned", label: "Taranmış + el yazısı PDF'ler (OCR gerekli)" },
  { id: "complex", label: "Karmaşık düzenler (tablolar, çok sütunlu)" },
  { id: "editable", label: "PDF metnini düzenlenebilir hale getirme" },
  { id: "tools", label: "Senaryoya göre önerilen araçlar" },
];

export const body = (
  <>
    <h2 id="fast-path">30 saniyelik yol: Metin tabanlı PDF'ler için PDF'den Word'e</h2>
    <p>
      PDF'iniz bir Word belgesinden oluşturulduysa, bir web sayfasından
      dışa aktarıldıysa veya bir yazılım tarafından oluşturulduysa, metin
      zaten seçilebilir durumdadır. PDF'i açıp bir paragrafı vurgulamayı
      deneyerek bunu doğrulayabilirsiniz — vurgu kalıyorsa, metin tabanlıdır.
    </p>
    <p>
      Üç seçenek, hepsi 30 saniyenin altında:
    </p>
    <ol>
      <li>
        <strong>Microsoft Word (zaten bilgisayarınızda var).</strong> Dosya → Aç →
        PDF'i seçin. Word, onu anında düzenlenebilir bir belgeye dönüştürür.
        Düzen doğruluğu: basit PDF'ler için %80–95, karmaşık düzenler için daha düşük.
      </li>
      <li>
        <strong>Google Dokümanlar.</strong> PDF'i Drive'a yükleyin, sağ tıklayın →
        Google Dokümanlar ile açın. Word ile aynı fikir, benzer doğruluk. Ücretsiz.
      </li>
      <li>
        <strong>Yalnızca tarayıcıda metin çıkarma.</strong>{" "}
        <a href="/tools/pdf-to-text">PDF'den metne aracımızı</a> kullanarak metni
        çıkarın, ardından Word/Dokümanlar'a yapıştırın. Biçimlendirmeyi kaybeder
        ancak gizlilik avantajı önemlidir — yükleme yok, bulut gidiş-dönüşü yok.
      </li>
    </ol>
    <p>
      Çoğu kullanıcı için Word/Dokümanlar yolu en hızlısıdır. Hassas belgeler
      (hukuki, mali, tıbbi) için yalnızca tarayıcı yolu dosyanızı yerel tutar.
    </p>

    <h2 id="scanned">Taranmış + el yazısı PDF'ler (OCR gerekli)</h2>
    <p>
      Taranmış bir PDF, yalnızca bir PDF kılıfına bağlanmış metin görüntüleridir.
      Word ve Dokümanlar, önce OCR (optik karakter tanıma) olmadan bunları
      dönüştüremez. Belirtiler: metin seçemezsiniz, kopyala-yapıştır boş veya
      anlamsız gelir.
    </p>
    <p>
      Ücretsiz OCR seçenekleri:
    </p>
    <ul>
      <li>
        <strong><a href="/tools/pdf-ocr-to-text">PDF OCR aracımız</a>.</strong>{" "}
        Tesseract.js kullanarak tarayıcı tarafında OCR. İngilizce, İspanyolca, Fransızca,
        Almanca, Portekizce, İtalyanca için çalışır. Baskı + temiz el yazısı %85–95
        doğruluk sağlar. Bulut OCR'den daha yavaştır (sayfa başına 5–15 sn) ancak gizlidir.
      </li>
      <li>
        <strong>Adobe Acrobat Pro.</strong> Yerleşik OCR yüksek kalitelidir. Aylık $20.
        Bunu her gün yapıyorsanız değer.
      </li>
      <li>
        <strong>Google Drive.</strong> PDF yükleyin, sağ tıklayın → Google Dokümanlar
        ile açın. Drive, taranmış PDF'leri otomatik olarak OCR yapar. Kalite yeterlidir.
        Dosya Google'ın sunucularından geçer — gizlilik takası.
      </li>
      <li>
        <strong>ABBYY FineReader.</strong> Özellikle tablolar ve karmaşık düzenlerde
        en iyi OCR doğruluğu. Tek seferlik $200 veya abonelik. Profesyonel araç.
      </li>
    </ul>
    <p>
      Özellikle el yazısı için doğruluk büyük ölçüde değişir. Baskı el yazısı
      ve net bitişik eğik yazı: %70–90. Dağınık / kişisel kısaltmalı eğik yazı: %30–60.
      Yine de düzeltme okumanız gerekecek.
    </p>

    <h2 id="complex">Karmaşık düzenler: tablolar, çok sütunlu, bilimsel</h2>
    <p>
      Yukarıdaki ücretsiz araçlar şunlarda zorlanır:
    </p>
    <ul>
      <li>
        <strong>Tablolar:</strong> genellikle boşlukla ayrılmış metin olarak çıkar,
        yapı kaybolur. Geçici çözümler: ABBYY FineReader (ücretli) veya çıkarma
        sonrası bir e-tabloda manuel temizlik.
      </li>
      <li>
        <strong>Çok sütunlu düzenler:</strong> genellikle tek bir sütuna
        karıştırılır. Geçici çözüm: yalnızca 2–3 sütun varsa sütun sütun manuel
        çıkarma; çok sayıda sütun için ABBYY'ye ödeme yapın.
      </li>
      <li>
        <strong>Matematik sembollü bilimsel makaleler:</strong> LaTeX ile
        oluşturulmuş denklemler düz metinde anlamsız karakterler olarak çıkar.
        EPUB veya DOCX'e dönüştürme, oluşturulmuş görüntüleri korur ancak
        denklemleri düzenleyemezsiniz. Akademik iş akışı için{" "}
        <a href="/guides/ebook-and-3d-file-conversion">e-kitap dönüştürme kılavuzumuza</a>{" "}
        bakın.
      </li>
      <li>
        <strong>Formlar:</strong> form alanları iyi bir şekilde gidiş-dönüş
        yapmaz. Burada güvenilir tek seçenek Adobe Acrobat Pro'dur.
      </li>
    </ul>
    <p>
      Dürüst olmak gerekirse: PDF'iniz karmaşık bir yapıya sahipse ve
      düzenlenebilir çıktıya ihtiyacınız varsa, bu belirli görev için Adobe
      Acrobat Pro'ya ödeme yapmayı planlayın. Ücretsiz yollar, basit belgeler
      için sizi %80'e, karmaşık olanlar için daha azına ulaştırır.
    </p>

    <h2 id="editable">Hızlı düzeltme: PDF metnini düzenlenebilir hale getirme</h2>
    <p>
      Bir PDF'de yalnızca biraz metin düzenlemeniz gerektiğinde en basit iş akışı:
    </p>
    <ol>
      <li>
        PDF'i tarayıcınızda açın (Chrome, Edge, Safari'nin tümünde yerleşik
        PDF okuyucular vardır).
      </li>
      <li>
        Sejda ücretsiz katmanı (saatte 3 belge sınırı) veya PDFescape ücretsiz
        gibi ücretsiz bir PDF düzenleyici bulun.
      </li>
      <li>
        Daha kapsamlı düzenlemeler için Word veya Google Dokümanlar'a
        dönüştürün (yukarıdaki yollar), düzenleyin, ardından PDF'e geri
        dışa aktarın.
      </li>
      <li>
        Form alanları ve imzalar için: imzalama için Adobe Acrobat Reader'ı
        (ücretsiz), tam düzenleme için Acrobat Pro'yu (aylık $20) yükleyin.
      </li>
    </ol>
    <p>
      Hassas olmayan PDF'ler için yükle-düzenle-indir akışı yeterlidir. Hassas
      içerik için yerel olarak Word'e dönüştür → düzenle → yeniden dışa aktar
      akışını tercih edin.
    </p>

    <h2 id="tools">Senaryoya göre önerilen araçlar</h2>
    <table>
      <thead>
        <tr>
          <th>Senaryo</th>
          <th>En iyi ücretsiz seçenek</th>
          <th>Ne zaman ödeme yapmalı</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Metin tabanlı PDF, basit düzen</td>
          <td>Word Dosya → Aç veya Google Dokümanlar</td>
          <td>Nadiren gerekli</td>
        </tr>
        <tr>
          <td>Metin tabanlı PDF, hassas içerik</td>
          <td><a href="/tools/pdf-to-text">PDF'den metne aracımız</a> + Word'e yapıştır</td>
          <td>Toplu işlemler için Adobe Acrobat Pro</td>
        </tr>
        <tr>
          <td>Taranmış PDF (makine baskısı)</td>
          <td><a href="/tools/pdf-ocr-to-text">PDF OCR aracımız</a></td>
          <td>Tablolarda doğruluk için ABBYY</td>
        </tr>
        <tr>
          <td>El yazısı PDF</td>
          <td><a href="/tools/pdf-ocr-to-text">PDF OCR aracımız</a> (yazıya bağlı olarak %50-90)</td>
          <td>ABBYY (özelleşmiş el yazısı modelleri)</td>
        </tr>
        <tr>
          <td>Karmaşık tablolar / formlar</td>
          <td>Güvenilir yok — temizlik yapmayı planlayın</td>
          <td>ABBYY FineReader veya Adobe Acrobat Pro</td>
        </tr>
        <tr>
          <td>Matematikli bilimsel makale</td>
          <td>Calibre (PDF → EPUB) oluşturulmuş matematiği korur</td>
          <td>Düzenlenebilir LaTeX için Mathpix</td>
        </tr>
      </tbody>
    </table>
  </>
);

export const cta = {
  label: "Taranmış bir PDF'de OCR yapın (yalnızca tarayıcı, ücretsiz)",
  targetSlug: "pdf-ocr-to-text",
};

export const faq = [
  {
    q: "PDF'yi 30 saniyede Word'e nasıl dönüştürebilirim?",
    a: "PDF metin tabanlıysa (vurgulanabilir metin), Microsoft Word'de (Dosya → Aç) veya Google Dokümanlar'da (yükle + Google Dokümanlar ile aç) açın. Her ikisi de otomatik olarak düzenlenebilir hale dönüştürür. Hassas belgeler için PDF'den metne aracımızı kullanın ve Word'e yapıştırın — biçimlendirmeyi kaybeder ancak gizli kalır.",
  },
  {
    q: "Taranmış veya el yazısı bir PDF'i aranabilir metne nasıl dönüştürebilirim?",
    a: "OCR (optik karakter tanıma) gereklidir. PDF OCR aracımız Tesseract'ı tarayıcınızda çalıştırır — yükleme yok, 6 dil destekler, baskıda %85-95, el yazısında %50-90 doğruluk. Karmaşık düzenlerde daha iyi doğruluk için ABBYY FineReader (ücretli) veya Adobe Acrobat Pro en iyisidir.",
  },
  {
    q: "PDF metnini nasıl düzenlenebilir hale getirebilirim?",
    a: "Üç yol: (1) Word/Google Dokümanlar'a dönüştürün ve orada düzenleyin, (2) Sejda veya PDFescape gibi ücretsiz bir PDF düzenleyici kullanın (sınırlı ücretsiz katman), (3) Form alanları ve imzalar dahil tam düzenleme için Adobe Acrobat Pro (aylık $20). Hassas PDF'ler için yerel dönüştür-düzenle-yeniden dışa aktar akışını tercih edin.",
  },
  {
    q: "Karmaşık PDF'ler neden kötü dönüşür?",
    a: "Tablolar boşlukla ayrılmış metne düzleştirilir. Çok sütunlu düzenler karıştırılır. Matematik sembolleri anlamsız karakterler olarak çıkar. Formlar gidiş-dönüş yapmaz. Temizlik süresi planlayın veya düzen doğruluğunun önemli olduğu tek seferlik karmaşık dönüşümler için ABBYY FineReader / Adobe Acrobat Pro kullanın.",
  },
];