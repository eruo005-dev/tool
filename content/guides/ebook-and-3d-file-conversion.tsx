/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      İki niş ama yüksek arama niyetli dönüşüm alanı: e-kitap formatları (e-okuyucularda okumak için PDF ↔ EPUB ↔ MOBI) ve 3D baskı formatları (dilimleme için STL ↔ OBJ ↔ 3MF). Her ikisinin de ücretsiz dönüştürücülerin genellikle ele almadığı kendine özgü incelikleri vardır. Bu rehber, neyi, ne zaman kullanmanız gerektiğini ve ne bekleyeceğinizi kapsar.
    </p>
  </>
);

export const toc = [
  { id: "ebook-overview", label: "E-kitap formatına genel bakış" },
  { id: "pdf-to-epub", label: "E-okuyucular için PDF'ten EPUB'a" },
  { id: "scientific", label: "Matematik sembollü bilimsel PDF'ler" },
  { id: "3d-overview", label: "3D baskı formatına genel bakış" },
  { id: "stl-obj", label: "3D baskı için STL'den OBJ'ye" },
  { id: "3mf", label: "Detay kaybetmeden 3MF dönüşümü" },
];

export const body = (
  <>
    <h2 id="ebook-overview">E-kitap formatına genel bakış</h2>
    <p>
      Ana e-kitap formatları ve her birinin ne için iyi olduğu:
    </p>
    <ul>
      <li>
        <strong>EPUB:</strong> açık standart, yeniden akıcı. Ekran boyutuna uyum sağlar — metin sarılır, yazı tipi ölçeklenir. Apple Books, Kobo, Adobe Digital Editions ve Kindle dışındaki çoğu e-kitap okuyucu tarafından kullanılır.
      </li>
      <li>
        <strong>MOBI:</strong> Amazon'un eski Kindle formatı. 2026 itibarıyla büyük ölçüde kullanımdan kaldırıldı — Amazon, 2022'nin sonlarında MOBI yüklemelerini kabul etmeyi durdurdu. İleriye dönük uyumluluk için eski MOBI'yi EPUB'a (veya AZW3'e) dönüştürün.
      </li>
      <li>
        <strong>AZW3 / KF8:</strong> Amazon'un mevcut Kindle formatı. MOBI'den daha iyi tipografi. Daha yeni Kindle'lar bunu destekler.
      </li>
      <li>
        <strong>KFX:</strong> Amazon'un en yeni formatı. En son Kindle'lar tarafından kullanılır. Calibre + eklentiler tarafından kısmen desteklenir; tam destek, formatın tescilli olması nedeniyle zordur.
      </li>
      <li>
        <strong>PDF:</strong> gerçek bir e-kitap formatı değil. Sabit düzen, küçük ekranlarda kötü görünmesine neden olur. Mümkünse e-okuyucular için kaçının.
      </li>
    </ul>
    <p>
      Evrensel dönüştürücü: <strong>Calibre</strong> (ücretsiz, açık kaynak). Dosyanızı sürükleyin, çıktı formatını seçin, sonucu alın. Calibre, PDF→EPUB dahil hemen hemen her e-kitap formatı kombinasyonunu işler.
    </p>

    <h2 id="pdf-to-epub">E-okuyucular için PDF'ten EPUB'a</h2>
    <p>
      İş akışı:
    </p>
    <ol>
      <li>
        <strong>Calibre'yi kurun.</strong> Ücretsiz, Mac, Windows, Linux'ta mevcut.
      </li>
      <li>
        <strong>PDF'nizi Calibre'ye sürükleyin.</strong> Kitaplığınızda görünür.
      </li>
      <li>
        <strong>Kitapları Dönüştür'e tıklayın.</strong> Çıktı formatı olarak EPUB'ı seçin.
      </li>
      <li>
        <strong>Ayarları ince ayar yapın.</strong> Varsayılanlar yeterlidir. Karmaşık düzenli PDF'ler için "PDF Girişi" sekmesini deneyin ve yalnızca metin istiyorsanız "Resim yok" seçeneğini açın.
      </li>
      <li>
        <strong>Tamam'a tıklayın.</strong> EPUB kitaplığınıza gelir. E-okuyucunuza gönderin.
      </li>
    </ol>
    <p>
      Uyarılar:
    </p>
    <ul>
      <li>
        Çok sütunlu PDF'ler kötü dönüşür. Calibre, sütunları tek sütunlu yeniden akıcı metne düzleştirmeye çalışır, ancak sıralama karışabilir.
      </li>
      <li>
        Görsel ağırlıklı PDF'ler büyük EPUB'lar üretir. Boyut sorunsa önce görselleri sıkıştırın.
      </li>
      <li>
        Formlar ve etkileşimli öğeler dönüşmez.
      </li>
      <li>
        Kindle için, PDF → EPUB → AZW3'e dönüştürün (Calibre üçünü de halleder), ardından Send to Kindle e-postası veya USB ile gönderin.
      </li>
    </ul>

    <h2 id="scientific">Matematik sembollü bilimsel PDF'leri dönüştürme</h2>
    <p>
      PDF'lerdeki matematik notasyonu genellikle gömülü yazı tipleri veya görseller olarak işlenir. Dönüşüm zorluğu:
    </p>
    <ul>
      <li>
        <strong>Calibre PDF → EPUB:</strong> matematiği gömülü görseller (işlenmiş glifler) olarak korur. Okunabilir, ancak düzenleyemez veya yeniden işleyemezsiniz.
      </li>
      <li>
        <strong>Mathpix Snip:</strong> ticari, ancak matematik görsellerini düzenlenebilir LaTeX'e dönüştürür. Denklem çıkarması gereken akademisyenler için en iyisi.
      </li>
      <li>
        <strong>arXiv kaynağı:</strong> makale arXiv'deyse, PDF yerine LaTeX kaynağını indirin. Pandoc ile EPUB'a derleyin:
        <code>pandoc paper.tex -o paper.epub --mathml</code>. Matematik, MathML'yi destekleyen EPUB okuyucularında yerel olarak işlenir.
      </li>
      <li>
        <strong>Pandoc + özel iş akışı:</strong> yüksek hacimli bilimsel belge dönüşümü için Pandoc, LaTeX matematik içeren Markdown alabilir ve matematiği koruyarak EPUB / DOCX / PDF üretebilir.
      </li>
    </ul>
    <p>
      Dürüst cevap: bilimsel PDF → okunabilir e-okuyucu formatı, gündelik okuma için iyi çalışır. Matematiği düzenlemek veya yeniden işlemek için LaTeX kaynağına (veya Mathpix için ödeme yapmanız) gerekir.
    </p>

    <h2 id="3d-overview">3D baskı formatına genel bakış</h2>
    <ul>
      <li>
        <strong>STL (Stereolitografi):</strong> evrensel 3D baskı formatı. Sadece bir üçgen ağ — renk, doku, meta veri yok. Her dilimleyici kabul eder. Hobi amaçlı 3D baskı için varsayılan.
      </li>
      <li>
        <strong>OBJ:</strong> ağ + doku koordinatları + köşe renkleri. 3D işleme ve oyun geliştirme için kullanılır; bazen renkli 3D baskı için.
      </li>
      <li>
        <strong>3MF (3D Üretim Formatı):</strong> Microsoft + 3D baskı konsorsiyumu formatı. Ağ, renk, malzemeler, çok parçalı montajlar içerir. STL'nin modern halefi — ancak benimsenme beklenenden daha yavaş.
      </li>
      <li>
        <strong>STEP / IGES:</strong> CAD değişim formatları. Sadece ağlar değil, parametrik modeller. Mühendislikte kullanılır. Çoğu tüketici dilimleyici STEP'i okuyamaz — önce STL'ye dönüştürün.
      </li>
      <li>
        <strong>G-kodu:</strong> dilimleyici çıktısı, yazıcı girişi. Bir CAD formatı değil — yazıcınıza özel makine talimatları.
      </li>
    </ul>

    <h2 id="stl-obj">3D baskı için STL'den OBJ'ye</h2>
    <p>
      Çoğu 3D modelleme aracı bu gidiş-dönüşü halleder. Ücretsiz seçenekler:
    </p>
    <ul>
      <li>
        <strong>Blender:</strong> Dosya → STL İçe Aktar → Dosya → OBJ Dışa Aktar. Geometriyi korur, dışa aktarmadan önce doku ve köşe renkleri eklemenizi sağlar.
      </li>
      <li>
        <strong>MeshLab:</strong> ağ formatları için minimal görüntüleyici-dönüştürücü. Sürükle-bırak dönüşümü. Blender'dan daha küçük kurulum.
      </li>
      <li>
        <strong>FreeCAD:</strong> STL içe aktar, OBJ dışa aktar. Geometriyi de düzenlemeniz gerekiyorsa kullanışlıdır.
      </li>
      <li>
        <strong>Çevrimiçi dönüştürücüler:</strong> STL yükleyin, OBJ indirin. Kullanışlı ancak modelinizi yükler. Tescilli veya ticari tasarımlar için kaçının.
      </li>
    </ul>
    <p>
      Dönüşümün kendisi basittir — her iki format da bir üçgen ağı temsil eder, OBJ, STL'de olmayan doku koordinatlarını ekler. Yanlış gidebilecek şeyler:
    </p>
    <ul>
      <li>
        <strong>Ölçek uyumsuzluğu.</strong> STL birimleri kodlamaz. OBJ kodlar. Dönüştürücü tahmin etmek zorundadır. Dilimleyicinizde boyutu doğrulayın.
      </li>
      <li>
        <strong>Üçgen sarma.</strong> Bazı araçlar sarma yönünü tersine çevirir, bu da normalleri ters çevirebilir. Dilimleyicinizde bir normaller görselleştirmesi ile kontrol edin.
      </li>
      <li>
        <strong>Köşe hassasiyeti.</strong> STL, köşeleri ikili kayan noktalar olarak saklar. OBJ, ASCII metni kullanır. Gidiş-dönüş, küçük hassasiyet hatalarına neden olabilir — genellikle görünmez ancak ultra hassas baskılar için nadiren sorunludur.
      </li>
    </ul>

    <h2 id="3mf">Detay kaybetmeden 3MF dönüşümü</h2>
    <p>
      3MF, STL'den daha fazla bilgi taşır: parça başına malzemeler, renkler, çok parçalı montajlar, gömülü küçük resimler. 3MF → STL dönüştürmek bunu atar. Stratejiler:
    </p>
    <ul>
      <li>
        <strong>Dilimleyiciniz 3MF kabul ediyorsa:</strong> doğrudan 3MF kullanın. Cura, PrusaSlicer, Bambu Studio'nun tümü destekler. Dönüşüm gerekmez.
      </li>
      <li>
        <strong>STL'ye dönüştürmeniz gerekiyorsa:</strong> her parçayı ayrı bir STL dosyası olarak dışa aktarın. Çok parçalı montaj meta verilerini kaybeder ancak geometriyi korur. Dilimleyicinizde yeniden birleştirin.
      </li>
      <li>
        <strong>3MF'den OBJ'ye:</strong> Blender + 3MF içe aktarma eklentisi, ardından OBJ dışa aktarın. Renkleri ve malzemeleri STL'den daha iyi korur.
      </li>
      <li>
        <strong>Paylaşmak için:</strong> 3MF doğru modern formattır. Ana dosyanızı 3MF'de tutun; yalnızca eski dilimleyicileri hedeflerken STL'ye dışa aktarın.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "SVG'den PNG'ye dönüştürücümüzü deneyin",
  targetSlug: "svg-to-png",
};

export const faq = [
  {
    q: "Daha iyi e-okuyucu okuması için PDF'yi EPUB'a nasıl dönüştürebilirim?",
    a: "Calibre'yi kullanın (ücretsiz, açık kaynak). PDF'nizi sürükleyin, Kitapları Dönüştür'e tıklayın, EPUB'ı seçin. Varsayılanlar yeterlidir. Kindle için, ardından EPUB'ı AZW3'e dönüştürün. Çok sütunlu PDF'ler kötü dönüşür — metin sırası karışabilir. Görsel ağırlıklı PDF'ler büyük EPUB'lar üretir.",
  },
  {
    q: "3D baskı için STL dosyalarını OBJ'ye nasıl dönüştürebilirim?",
    a: "Ücretsiz seçenekler: Blender (en güçlüsü, doku eklemenizi sağlar), MeshLab (hafif görüntüleyici-dönüştürücü), FreeCAD (düzenleme de gerekiyorsa iyidir). Hepsi geometriyi korur. STL birimleri veya doku koordinatlarını kodlamaz; dönüşümden sonra dilimleyicinizde ölçeği doğrulayın.",
  },
  {
    q: "3D baskı detaylarını kaybetmeden 3MF'yi nasıl dönüştürebilirim?",
    a: "Dilimleyiciniz 3MF kabul ediyorsa (Cura, PrusaSlicer, Bambu Studio'nun tümü destekler), doğrudan 3MF kullanın. STL'ye dönüştürmeniz gerekiyorsa: her parçayı ayrı STL olarak dışa aktarın — geometriyi korur ancak çok parçalı montajı kaybeder. OBJ'ye: Blender'ın 3MF içe aktarma eklentisini kullanın, OBJ dışa aktarın — renkleri STL'den daha iyi korur.",
  },
  {
    q: "Matematik sembollü bilimsel PDF'leri EPUB'a nasıl dönüştürebilirim?",
    a: "Calibre PDF → EPUB, matematiği işlenmiş görseller olarak korur (okunabilir ancak düzenlenemez). Düzenlenebilir LaTeX için: Mathpix (ücretli) denklemleri çıkarır. Makale arXiv'deyse, PDF yerine LaTeX kaynağını indirin ve --mathml bayrağıyla Pandoc kullanın — matematik, MathML'yi destekleyen okuyucularda yerel olarak işlenir.",
  },
];