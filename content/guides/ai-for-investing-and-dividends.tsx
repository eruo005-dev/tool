/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;AI hisse senetlerini tahmin edebilir mi?&rdquo; sorusu r/investing,
      r/dividends ve çeşitli FinTech alt dizinlerinde her hafta soruluyor. Pazarlama cevabı evet; dürüst
      cevap ise &ldquo;hayır, ancak buna yakın konularda faydalıdır.&rdquo;
      Bu rehber, AI'ın kişisel yatırımda gerçekten neyi iyi yaptığına dair uygulayıcı bakış açısıdır — ve nerede şüpheci olunması gerektiğine.
    </p>
  </>
);

export const toc = [
  { id: "predictions", label: "AI temettüleri ve büyümeyi tahmin edebilir mi?" },
  { id: "portfolio", label: "Portföy analizi için AI" },
  { id: "dividends", label: "AI ile sürdürülebilir temettü stratejisi" },
  { id: "growth-passive", label: "Büyüme ve pasif geliri dengelemek" },
  { id: "tools", label: "Gerçekten faydalı olan AI araçları" },
];

export const body = (
  <>
    <h2 id="predictions">AI gerçekten hisse senedi temettülerini ve büyümeyi tahmin edebilir mi?</h2>
    <p>
      Kısa cevap: <strong>hayır, endekslemeyi geçecek herhangi bir şekilde değil</strong>. Uzun cevap:
      AI, açıklanan bilgilerdeki geçmiş verileri <em>özetleme</em> ve <em>kalıpları tespit etme</em> konusunda mükemmeldir,
      bu faydalıdır, ancak gerçek hisse senedi seçme araştırmaları, kurumsal algoritmik ticaretin bile 10+ yıllık ufuklarda ücretlerden sonra nadiren kıyaslamalardan daha iyi performans gösterdiğini göstermektedir.
    </p>
    <p>
      AI'ın bu alanda iyi olduğu şeyler:
    </p>
    <ul>
      <li>
        <strong>10-K'ları sizden daha hızlı okumak.</strong> Bir üç aylık raporu yapıştırın ve
        &ldquo;Geçen yıla göre değişen 5 şey, bahsedilen 3 risk faktörü ve olağandışı
        dil.&rdquo; isteyin. Her dosyalama için 30 dakika kazandırır.
      </li>
      <li>
        <strong>Birden çok hisse senedindeki temettü geçmişlerini karşılaştırmak.</strong> &ldquo;Bu 12 sembol için şunları özetle: temettü getirisi, 5 yıllık ödeme oranı eğilimi, son
        kesinti, borç/özsermaye.&rdquo; AI verileri yapılandırmada harikadır; tezi yine siz seçersiniz.
      </li>
      <li>
        <strong>Kriterlerden izleme listeleri oluşturmak.</strong> &ldquo;Şu özelliklere sahip S&amp;P 500
        hisselerini bul: temettü &gt; %3, ödeme oranı &lt; %60, 5 yılda HBK büyümesi &gt; %5.&rdquo; Yine de birincil verilerle doğrulama yaparsınız; AI taramayı hızlandırır.
      </li>
    </ul>
    <p>
      AI'ın kötü olduğu şeyler:
    </p>
    <ul>
      <li>
        <strong>Fiyat hareketlerini tahmin etmek.</strong> Piyasalar kamuya açık bilgileri fiyatlar.
        AI'ın kamuya açık olmayan bilgileri yoktur. Geçmiş veriler tek başına gelecekteki fiyatları güvenilir bir şekilde tahmin edemez — bu nedenle ChatGPT'den çok daha sofistike modellere sahip kantitatif fonlar bile ücretlerden sonra S&P'yi geçmekte zorlanır.
      </li>
      <li>
        <strong>Temettü kesintilerini tahmin etmek.</strong> Sinyaller (ödeme oranı artışı,
        bozulan nakit akışı) finansallarda görünür ve AI bunları özetleyebilir — ancak
        şirketin gerçekten kesinti yapıp yapmayacağı, AI'ın tahmin edemeyeceği yönetim kararlarına bağlıdır.
      </li>
      <li>
        <strong>&ldquo;AI ile geriye dönük test edilmiş&rdquo; iddiasında bulunan her şey.</strong> Geriye dönük testler neredeyse her zaman geçmiş verilere aşırı uyarlanır. AI bunu düzeltmez.
      </li>
    </ul>

    <h2 id="portfolio">Portföy analizi için AI kullanmak</h2>
    <p>
      Meşru, yüksek kaldıraçlı kullanım durumları:
    </p>
    <ol>
      <li>
        <strong>Varlık dağılımı incelemesi.</strong> Portföyünüzü + yüzdeleri yapıştırın. Şunu sorun:
        &ldquo;Sektöre, coğrafyaya, piyasa değerine ve varlık sınıfına göre kategorize et. Bir sektörde &gt; %20'lik herhangi bir yoğunlaşma riskini belirle. %60/40 veya Bogleheads 3-fon gibi bir hedefle karşılaştır.&rdquo; Aşırı ağırlıklı pozisyonları 30 saniyede bulursunuz, bir saatlik manuel çalışmaya karşı.
      </li>
      <li>
        <strong>Vergi kaybı hasadı adayları.</strong> &ldquo;Bu gerçekleşmemiş zararlar listesinden, 30 günlük yıkama satışı kuralını ihlal etmeden benzer fonlarla değiştirilebilecek pozisyonları belirle.&rdquo; Aralık ayında kullanışlıdır.
      </li>
      <li>
        <strong>Yeniden dengeleme matematiği.</strong> &ldquo;Dağılımımın X/Y/Z olmasını istiyorsam ve şu anda toplam $D olan A/B/C'yi tutuyorsam, hangi işlemleri yapmam gerekiyor?&rdquo; Elektronik tablo matematiğinden daha hızlı.
      </li>
      <li>
        <strong>Ücret karşılaştırması.</strong> Fon sembollerini yapıştırın. &ldquo;Gider oranlarını, son toplam getirileri ve temel holding örtüşmesini karşılaştır.&rdquo; %0,85 gider oranlı bir fonun çoğunlukla %0,04'lük bir fonla aynı olduğu durumları ortaya çıkarır.
      </li>
    </ol>
    <p>
      Desen: AI, mevcut verilerinizin yapılandırılmış analizini hızlandırır.
      Alfa üretmez.
    </p>

    <h2 id="dividends">AI ile sürdürülebilir bir temettü büyüme stratejisi oluşturmak</h2>
    <p>
      Temettü-büyüme yatırım oyun kitabı temelde değişmedi; AI sadece zamanı sıkıştırır. Standart kontrol listesi:
    </p>
    <ul>
      <li>
        <strong>Temettü getirisi %2–5.</strong> %5'in üzeri genellikle bir getiri tuzağıdır. %2'nin altı pasif gelirinizi yıllarca aç bırakır.
      </li>
      <li>
        <strong>Ödeme oranı &lt; %60.</strong> %80'in üzeri tehlikelidir; şirket kazandığının neredeyse tamamını ödüyordur.
      </li>
      <li>
        <strong>5+ yıl ardışık temettü artışı.</strong> Sadece havadan veya yapısal nakit akışından ödeme yapan şirketleri eler.
      </li>
      <li>
        <strong>Serbest nakit akışı büyümesi.</strong> Temettüler kazançtan değil, nakitten gelir.
      </li>
      <li>
        <strong>Makul borç seviyeleri.</strong> Yüksek kaldıraçlı temettü ödeyenler faizler yükseldiğinde ilk kesenler olur.
      </li>
    </ul>
    <p>
      Bunu 30 saniyede çalıştıran AI istemi:
    </p>
    <pre><code>{`Bu sembollerin her biri için [10-20 sembol listeleyin] şunları
bir tabloda özetleyin: cari getiri, ödeme oranı, ardışık
artış yılları, 5 yıllık SNA büyüme %, borç/özsermaye. Ödeme
oranı &gt; %70 olan veya son 10 yılda temettüsü kesilenleri
işaretleyin.`}</code></pre>
    <p>
      AI'ın sayılarını harekete geçmeden önce birincil kaynağa (şirketin 10-K'sı veya
      Macrotrends / Schwab gibi bir veri sağlayıcısı) karşı doğrulayın. AI, finansal
      sayıları insanların fark ettiğinden daha sık halüsinasyon görür.
    </p>

    <h2 id="growth-passive">Bir işi büyütürken temettü geliri oluşturmak</h2>
    <p>
      Tekrarlayan küçük işletme sahibi sorusu: her şeyi işinize yeniden yatırırken aynı zamanda pasif temettü
      gelirini nasıl oluşturursunuz? Dürüst çerçeve:
    </p>
    <ol>
      <li>
        <strong>Önce kendinize bir taban maaş ödeyin.</strong> Toplam ~50 bin doların altında,
        nakiti temettü hisselerine yönlendirmek genellikle bir hatadır — işinizin alıkonulan sermaye üzerinde daha yüksek getirisi vardır.
      </li>
      <li>
        <strong>Net kârın %5-10'unu vergi sonrası bir aracı kuruma ayırın.</strong>{" "}
        İşi aç bırakmaz; 10 yıl içinde anlamlı hale gelir.
      </li>
      <li>
        <strong>Temettü kısmı için: düşük ücretli bir temettü ETF'i (VYM, SCHD veya
        benzeri) çoğu hisse senedi seçiminden daha iyi performans gösterir.</strong> Zamanınızı bireysel menkul kıymet seçiminden ziyade işinize harcamak daha iyidir.
      </li>
      <li>
        <strong>Portföy incelemesini çeyrek başına 30 dakikanın altında tutmak için AI kullanın.</strong>{" "}
        Dağılım incelemesi, temettü kesintisi uyarıları, yeniden dengeleme matematiği. Yatırım yapmayı işle rekabet eden bir hobi haline getirmeyin.
      </li>
    </ol>
    <p>
      Tuzak: işte yılda 500 bin dolarlık potansiyel kazanç masadayken temettü araştırmasına haftada 5 saat harcamak. Önce işi büyütün; temettü portföyünün otomatik pilotta birikmesine izin verin.
    </p>

    <h2 id="tools">Yatırım için gerçekten faydalı AI araçları</h2>
    <ul>
      <li>
        <strong>Analiz için ChatGPT / Claude / Gemini.</strong> Ücretsiz katmanlar yukarıdaki iş akışları için yeterlidir. Ücretli katmanlar yükleme boyutu ve muhakeme derinliği ekler.
      </li>
      <li>
        <strong>Güncel veriler için Perplexity.</strong> Eğitim kesinti tarihinden itibaren değil, bugünkü getirilere ve oranlara ihtiyacınız olduğunda. Birincil kaynağa karşı doğrulayın.
      </li>
      <li>
        <strong>Açık kaynak geriye dönük test kütüphaneleri (zipline, vectorbt).</strong> Stratejileri test etmek istiyorsanız, gerçek geriye dönük test araçları &ldquo;ChatGPT, ne olurdu eğer&rdquo; — model geriye dönük testi gerçekten çalıştıramadığı, sadece anlattığı için çalışmaz — seçeneğini yener.
      </li>
      <li>
        <strong>Kaçının:</strong> AI &ldquo;hisse senedi seçici&rdquo; abonelik uygulamaları, tahmin edici olarak pazarlanan sosyal duygu toplayıcıları, perakendeye yönelik pazarlama metninde &ldquo;quant&rdquo; olan her şey.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Bileşik faiz hesaplayıcıyı deneyin",
  targetSlug: "compound-interest-calculator",
};

export const faq = [
  {
    q: "AI gerçekten hisse senedi temettülerini ve büyümeyi tahmin edebilir mi?",
    a: "Hayır — ücretlerden sonra endekslemeyi geçecek herhangi bir şekilde değil. AI, finansal dosyaları özetleme, hisse senetleri arasında temettü geçmişlerini karşılaştırma ve kriterlerden izleme listeleri oluşturma konusunda iyidir. Fiyat hareketlerini veya temettü kesintilerini tahmin edemez çünkü tahmine dayalı sinyaller AI'ın erişebildiği verilerde yoktur.",
  },
  {
    q: "Yatırım portföyümü analiz etmek için AI'ı nasıl kullanabilirim?",
    a: "Varlık dağılımı incelemesi (yoğunlaşma riski, sektör kırılımı), vergi kaybı hasadı adayları, yeniden dengeleme matematiği, benzer fonlar arasında ücret/örtüşme karşılaştırması. AI, mevcut portföyünüzün yapılandırılmış analizini hızlandırır — alfa üretmez.",
  },
  {
    q: "AI sürdürülebilir bir temettü büyüme stratejisi oluşturmama yardımcı olabilir mi?",
    a: "Taramayı hızlandırır: 20 sembol yapıştırın, bir tabloda getiri/ödeme-oranı/SNA-büyümesi/borç-özsermaye alın, güvenli eşiklerin üzerindekileri işaretleyin. Stratejinin kendisi (getiri %2-5, ödeme <%60, 5 yıl artış, SNA büyümesi) değişmedi. AI'ın sayılarını her zaman birincil kaynağa karşı doğrulayın — finansal halüsinasyonlar yaygındır.",
  },
  {
    q: "İşimi büyütürken temettü gelirini nasıl oluşturabilirim?",
    a: "Önce kendinize taban maaş ödeyin (~50 bin doların altında, işinizin alıkonulan sermaye üzerinde daha yüksek getirisi vardır). Ardından net kârın %5-10'unu vergi sonrası aracı kuruma aktarın. Hisse senedi seçmek yerine düşük ücretli bir temettü ETF'i (VYM, SCHD) kullanın. Portföy incelemesini çeyrek başına 30 dakikanın altında tutmak için AI kullanın — yatırım yapmanın işle rekabet eden bir hobi haline gelmesine izin vermeyin.",
  },
];