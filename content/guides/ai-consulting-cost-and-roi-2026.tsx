export const intro = (
  <>
    <p>
      2026'da AI stratejisi başlıklarında en çok sorulan soru:{" "}
      <em>&ldquo;ne kadar ödemeyi beklemeliyim ve buna değer mi?&rdquo;</em> Satıcı
      web siteleri 15.000$ ile 500.000$ arasında değişen fiyat aralıklarından bahseder, ancak bu aralığın hangi ucunun size uygulanacağına dair yararlı bir sinyal vermez. Bu rehber size dürüst fiyatlandırma modelini + <a href="/learn/roi">ROI</a>
      hesaplamasını + geri ödeme beklentilerini verir.
    </p>
    <p>
      Okurken başka bir sekmede sayılarınızı{" "}
      <a href="/tools/ai-consulting-roi-calculator">AI danışmanlık ROI hesaplayıcımıza</a> girin.
    </p>
  </>
);

export const toc = [
  { id: "models", label: "Fiyatlandırma modelleri" },
  { id: "ranges", label: "Gerçekçi maliyet aralıkları" },
  { id: "roi", label: "Beklenen ROI" },
  { id: "timeline", label: "Zaman çizelgesi beklentileri" },
  { id: "cheap", label: "En ucuz meşru seçenekler" },
];

export const body = (
  <>
    <h2 id="models">Dört fiyatlandırma modeli</h2>
    <ul>
      <li>
        <strong>Sabit ücretli proje.</strong> Tanımlanmış bir kapsam için tek bir rakam.
        İyi tanımlanmış sorunlar için en iyisidir (bir belge sınıflandırıcı oluşturmak, Claude'u CRM'inize entegre etmek).
        Risk: kapsam kayması marjı yer ve danışman değişikliklere sert bir şekilde direnir.
      </li>
      <li>
        <strong>Tavanlı zaman ve malzeme.</strong> Sert bir üst sınırı olan saatlik faturalandırma.
        Kapsamın gerçekten belirsiz olduğu keşif amaçlı çalışmalar için en iyisidir. Risk: tavana ulaşılır ve zayıf bir konumdan müzakere edersiniz.
      </li>
      <li>
        <strong>Retainer.</strong> Kesirli-CTO benzeri bir angajman için aylık ücret.
        Devam eden strateji + uygulama denetimi için en iyisidir. Risk: değerde platoya ulaştığınızda ödemeye devam etmek kolaydır.
      </li>
      <li>
        <strong>Sonuç bazlı / öz sermaye.</strong> Satıcı, ölçülen tasarrufların veya gelir artışının bir yüzdesini alır.
        Teoride kulağa hoş gelir; pratikte ölçüm tartışmalıdır ve çoğu firma bunu gerçekten sunmaz. Sunan birkaç firma, matematiği çalıştırmak için prim oranları talep eder.
      </li>
    </ul>
    <p>
      İlk angajmanlar için kilometre taşları olan sabit ücreti tercih edin. Yalnızca firmayla bir geçmişiniz varsa T&amp;M veya retainer'a geçin.
    </p>

    <h2 id="ranges">Gerçekçi maliyet aralıkları (USD, 2026)</h2>
    <p>
      Bu aralıklar, RFP'lerden, satıcı tekliflerinden ve yayınlanmış vaka çalışmalarından elde edilen kamuya açık fiyatlandırma gözlemleridir &mdash; satıcı pazarlamasındaki &ldquo;başlangıç&rdquo; fiyatları değil.
    </p>
    <ul>
      <li>
        <strong>Yalnızca strateji angajmanları (6–12 hafta):</strong> 25.000$–80.000$. Çıktı: bir AI
        yol haritası, önceliklendirilmiş kullanım durumları, oluşturma-satın alma önerileri, satıcı kısa listesi.
        Hiçbir kod teslim edilmez.
      </li>
      <li>
        <strong>Tek kullanım durumu uygulaması (8–16 hafta):</strong> 50.000$–200.000$. Çıktı:
        hazır bir modelin belirli bir iş akışına (müşteri desteği, belge işleme, dahili arama) üretime hazır entegrasyonu.
      </li>
      <li>
        <strong>Özel model <a href="/learn/fine-tuning">ince ayarı</a> + dağıtımı (16–24 hafta):</strong> 150.000$–500.000$.
        Çıktı: değerlendirme koşum takımı, barındırılan altyapı, çalışma kitapları ile alana özgü ince ayarlı model.
      </li>
      <li>
        <strong>Kurumsal dönüşüm programları:</strong> 500.000$–5Milyon$+. Çok yıllı. Büyük
        danışmanlık firmaları (Accenture, Deloitte, BCG GAMMA). Çoğunlukla KOBİ'ler için kapsam dışı.
      </li>
      <li>
        <strong>Butik / kesirli-AI-lideri retainers:</strong> 20–40 saat kıdemli danışman süresi için ayda 5.000$–25.000$.
        Büyük bir patlamaya taahhüt etmeden rehberlik isteyen KOBİ'ler için en iyi giriş noktası.
      </li>
    </ul>
    <p>
      Sizi her aralığın üst ucuna iten şeyler: düzenlemeye tabi sektör (hukuk, sağlık,
      finans), büyük veri hacimleri, özel model gereksinimleri, çok paydaşlı
      kuruluşlar. Sizi alt uca çeken şeyler: net kullanım durumu, hazır API'leri kullanma isteği, tek karar verici, orta ölçekli veri.
    </p>

    <h2 id="roi">Beklenen ROI</h2>
    <p>
      Sayılarınız için{" "}
      <a href="/tools/ai-consulting-roi-calculator">ROI hesaplayıcımızı</a> kullanın,
      ancak tipik modeller:
    </p>
    <ul>
      <li>
        <strong>Güçlü uyumlu angajmanlar:</strong> 3–6 aylık geri ödeme, 3 yılda 3–10× getiri.
        Bunlar, net tekrarlanabilir iş akışlarına (müşteri destek biletleri, belge işleme, dahili S&amp;C) sahip projelerdir.
      </li>
      <li>
        <strong>Sınırda angajmanlar:</strong> 9–18 aylık geri ödeme. Kullanım durumu gerçektir
        ancak doğruluk beklenenden daha zordur, entegrasyon daha uzun sürer veya kazanılan-saat tahminleri iyimserdi.
      </li>
      <li>
        <strong>Başarısız angajmanlar:</strong> negatif ROI. En yaygın neden
        yanlış-sorunun-çözülmesidir &mdash; AI inşa edildiği gibi çalışır ancak işletmenin önemsediği metriği hareket ettirmez.
      </li>
    </ul>
    <p>
      AI angajmanlarının kabaca %60'ı 12. ayda pozitif ROI sağlar. Bunu yapmayan
      %40'ın ortak modelleri: tanımlanmamış başarı kriterleri, yanlış satıcı seçimi,
      gerçeklikle temas halinde ayakta kalamayan kazanılan-saat tahminleri.
    </p>

    <h2 id="timeline">Zaman çizelgesi beklentileri</h2>
    <p>
      Angajman türüne göre sonuçları görene kadar ne kadar süre:
    </p>
    <ul>
      <li>
        <strong>Hızlı kazanımlar (6–8 hafta):</strong> kullanım durumu önceliklendirmesi, hazır
        araç entegrasyonu, mevcut bir iş akışı için prompt mühendisliği. 2. ayda üretimde ölçülebilir bir şeyiniz olacak.
      </li>
      <li>
        <strong>Orta düzey projeler (3–4 ay):</strong> tek iş akışı otomasyonu,
        geri getirme artırılmış üretim (RAG) boru hatları, müşteri desteği AI. 2. ayda beta, 4. ayda üretim.
      </li>
      <li>
        <strong>Uzun projeler (6–9 ay):</strong> özel ince ayarlı modeller, çoklu sistem
        entegrasyonları, düzenlemeye tabi sektör dağıtımları. 4–5. ayda ilk ölçülebilir sonuç; 6–9. ayda üretim.
      </li>
      <li>
        <strong>Kurumsal programlar (12–24+ ay):</strong> Birden çok departmanı kapsayan AI odaklı
        dönüşümler. Aşamalı; 6. ayda ilk kazanımlar, 18+ ayda tam kapsam.
      </li>
    </ul>
    <p>
      Bir satıcı &ldquo;30 günde üretim AI&rdquo; vaat ediyorsa, ya kapsam çok küçüktür
      ya da sağlamlaştırma aşamasını geçiştiriyorlardır. Her ikisi de sorun değil &mdash; sadece hangisini satın aldığınızı bilin.
    </p>

    <h2 id="cheap">En ucuz meşru seçenekler</h2>
    <p>
      Bütçe bilincine sahip ekipler için, 20.000$'ın altında dört gerçek yol:
    </p>
    <ol>
      <li>
        <strong>3 ay boyunca ayda 5.000$'a kesirli AI danışmanı.</strong> 20–40 saat
        kıdemli strateji süresi. Toplam 15.000$. Çıktı: önceliklendirilmiş yol haritası + satıcı kısa listesi
        + takıldığınızda arayabileceğiniz biri.
      </li>
      <li>
        <strong>Yalnızca uygulama yüklenicisi.</strong> Güçlü AI mühendisliği deneyimine sahip bir serbest çalışanı
        saatte 100–200$'a, toplam 50–80 saat olacak şekilde işe alın. Toplam 5.000$–15.000$.
        Stratejiyi zaten kendiniz yaptıysanız en iyisidir.
      </li>
      <li>
        <strong>AI satıcı profesyonel hizmetleri.</strong> Çoğu büyük AI satıcısının
        (Anthropic, OpenAI, Vertex AI) odaklanmış entegrasyon çalışması yapacak profesyonel hizmet ekipleri vardır.
        Genellikle genelci bir danışmanlık firmasından daha ucuzdur ve daha derin ürün uzmanlığıyla gelir.
      </li>
      <li>
        <strong>Kendi kendine hizmet + topluluk.</strong> 15.000$'ı AI araçları + LangChain/
        LlamaIndex eğitimi + ekibiniz için birkaç konferans biletine harcayın. Güçlü mühendislere sahip
        startup'lar için bu, genellikle dışarıdan danışman tutmaktan daha iyi sonuç verir.
      </li>
    </ol>
    <p>
      Upwork'te bulduğunuz 5.000$'ın altındaki &ldquo;AI danışmanı&rdquo; risklidir. İyi olanlar
      daha pahalıdır; geri kalanı, bir şey teslim etmeden verilerinizi ve bütçenizi yakacaktır.
    </p>
  </>
);

export const cta = {
  label: "ROI hesaplayıcıda sayılarınızı çalıştırın",
  targetSlug: "ai-consulting-roi-calculator",
};

export const faq = [
  {
    q: "2026'da AI danışmanlığı gerçekte ne kadara mal oluyor?",
    a: "Strateji angajmanları 25.000$-80.000$ arasındadır. Tek kullanım durumu uygulamaları 50.000$-200.000$. Özel ince ayar + dağıtım 150.000$-500.000$. Kesirli-AI-lideri retainers ayda 5.000$-25.000$. Kurumsal programlar 500.000$+. Aralık, sektöre, kapsama ve hazır veya özel seçeneğe göre değişir.",
  },
  {
    q: "Bir AI danışmanıyla çalışmanın ROI'si nedir?",
    a: "Güçlü uyumlu angajmanlar: 3-6 aylık geri ödeme, 3 yılda 3-10× getiri. Sınırda: 9-18 ay. Angajmanların yaklaşık %60'ı 12. ayda pozitif ROI sağlar; diğer %40'ı çoğunlukla tanımlanmamış başarı kriterleri veya iyimser kazanılan-saat tahminleri nedeniyle başarısız olur. İmzalamadan önce gerçek bir ROI hesaplayıcı kullanın.",
  },
  {
    q: "AI danışmanlığının sonuç göstermesi ne kadar sürer?",
    a: "Hızlı kazanımlar (kullanım durumu önceliklendirmesi, hazır entegrasyon): 6-8 hafta. Orta düzey projeler (tek iş akışı otomasyonu, RAG boru hatları): 3-4 ay. Uzun projeler (özel modeller, çoklu sistem, düzenlemeye tabi sektörler): 6-9 ay. Kurumsal programlar: 12-24+ ay. '30 günde üretim AI' genellikle küçük kapsam veya sağlamlaştırmayı geçiştirme anlamına gelir.",
  },
  {
    q: "Profesyonel AI yardımı almanın en ucuz yolu nedir?",
    a: "Kesirli AI danışmanı (3 ay için toplam 5.000$-15.000$), yalnızca uygulama serbest çalışan yüklenicisi (5.000$-15.000$), AI satıcı profesyonel hizmetleri (genellikle genelcilerden daha derin ürün uzmanlığı) veya eğitim bütçesiyle kendi kendine hizmet. 5.000$'ın altındaki Upwork seçeneğinden kaçının &mdash; risk genellikle değeri aşar.",
  },
];