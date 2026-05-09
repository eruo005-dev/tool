/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      GitHub Copilot fiyatlandırması basittir; asıl tartışma, ChatGPT ve diğer yapay zeka kodlama araçlarıyla nasıl karşılaştırıldığıdır. Bu rehber pratik bir döküm sunmaktadır.
    </p>
  </>
);

export const toc = [
  { id: "pricing", label: "Fiyatlandırma katmanları" },
  { id: "free-vs-paid", label: "Ücretsiz ve ücretli: fark nedir?" },
  { id: "vs-chatgpt", label: "Kodlama için Copilot ve ChatGPT" },
  { id: "vs-others", label: "Copilot ve Cursor, Tabnine, Codeium" },
  { id: "ever-free", label: "Copilot hiç ücretsiz olacak mı?" },
  { id: "cancel", label: "Aboneliğinizi iptal etme" },
];

export const body = (
  <>
    <h2 id="pricing">GitHub Copilot fiyatlandırma katmanları (2026)</h2>
    <ul>
      <li>
        <strong>Copilot Free:</strong> Sınırlı aylık tamamlama, doğrulanmış öğrenciler/öğretmenler, açık kaynak bakımcıları ve temel bireysel kullanıcılar için ücretsiz. Değişikliğe tabidir.
      </li>
      <li>
        <strong>Copilot Individual (Pro):</strong> Aylık $10 veya yıllık $100. Sınırsız tamamlama + sohbet. Solo geliştiriciler için varsayılan seçenek.
      </li>
      <li>
        <strong>Copilot Business:</strong> Koltuk başına aylık $19. Merkezi faturalandırma, denetim günlükleri, organizasyon düzeyinde politikalar, eğitim verisi kullanımından vazgeçme.
      </li>
      <li>
        <strong>Copilot Enterprise:</strong> Koltuk başına aylık $39. Depo tabanlı özel talimatlar, bilgi tabanları, IP tazminatı, gelişmiş güvenlik eklentileri.
      </li>
    </ul>

    <h2 id="free-vs-paid">GitHub Copilot Ücretsiz ve Ücretli Karşılaştırması</h2>
    <p>
      Farklar:
    </p>
    <ul>
      <li>
        <strong>Ücretsiz katman:</strong> Sınırlı aylık tamamlama (limit değişir; mevcut durumu kontrol edin). Değerlendirme için kullanışlıdır. Günlük yoğun kullanım için yeterli değildir.
      </li>
      <li>
        <strong>Ücretli katman (Individual / Business / Enterprise):</strong> Sınırsız tamamlama. Sürekli kullanım için gereklidir.
      </li>
    </ul>
    <p>
      Değerlendirme için: ücretsiz katman veya Individual için 30 günlük deneme. Sürekli kullanım için: ödeme yapın. Ekipler için: Business standart seçimdir; Enterprise yalnızca ek güvenlik veya özelleştirme özelliklerine ihtiyacınız varsa.
    </p>

    <h2 id="vs-chatgpt">Kodlama için GitHub Copilot ve ChatGPT</h2>
    <p>
      Farklı araçlar, farklı işler:
    </p>
    <ul>
      <li>
        <strong>Copilot:</strong> IDE içi satır içi tamamlamalar. Daha düşük sürtünme; daha hızlı akış. Anında kod yazmak için en iyisi.
      </li>
      <li>
        <strong>ChatGPT:</strong> Ayrı sohbet arayüzü. "Bu kod tabanını açıkla," hata ayıklama tartışmaları, mimari akıl yürütme için daha iyidir. Satır içi kodlama akışı için daha kötüdür.
      </li>
    </ul>
    <p>
      Çalışan geliştiricilerin çoğu her ikisini de kullanır: yazmak için Copilot, açıklama, hata ayıklama ve akıl yürütme için ChatGPT (veya Claude). Her iki Pro katmanı için toplam ~$30/ay; üretkenlik artışı bunu kolayca haklı çıkarır.
    </p>

    <h2 id="vs-others">Copilot ve Cursor, Tabnine, Codeium, Continue</h2>
    <ul>
      <li>
        <strong>Cursor:</strong> Daha derin yapay zeka entegrasyonuna sahip bir VSCode çatalı. Ajan özellikleri (çoklu dosya düzenlemeleri, kod tabanı genelinde yeniden düzenlemeler) 2026'da Copilot'u geride bırakıyor. Aylık $20. En güçlü rakip.
      </li>
      <li>
        <strong>Tabnine:</strong> Daha eski bir oyuncu. Gizlilik konusunda güçlü (kendi kendine barındırma seçeneği). Kod tamamlama kalitesi çoğu yığın için Copilot'un altındadır.
      </li>
      <li>
        <strong>Codeium:</strong> Cömert ücretsiz katman. Kalite Copilot'un altındadır ancak solo geliştiricileri değerlendirmek için ücretsiz olmasıyla tartışmak zordur.
      </li>
      <li>
        <strong>Continue.dev:</strong> Açık kaynak, kendi modelinizi getirin (yerel olarak Ollama veya API aracılığıyla Claude/GPT kullanın). En yüksek özelleştirme; teknik kurulum gerektirir.
      </li>
    </ul>
    <p>
      2026'da ödeme yapan solo geliştiriciler için: Cursor &gt; Copilot ≈ Cody ≈ Codeium Pro. Cursor en iyi ajan özelliklerine sahiptir; Copilot en büyük kurulum tabanına ve en sıkı GitHub entegrasyonuna sahiptir. Organizasyonlar için: Copilot Business veya Enterprise, satın alma olgunluğu + IP tazminatı nedeniyle en güvenli seçim olmaya devam etmektedir.
    </p>

    <h2 id="ever-free">GitHub Copilot hiç ücretsiz olacak mı?</h2>
    <p>
      Zaten kısmen öyle. Doğrulanmış öğrenciler, öğretmenler ve açık kaynak bakımcıları ücretsiz erişim elde eder. Temel Copilot Free katmanı, 2024'ün sonlarında sınırlı tamamlamalarla kullanıma sunuldu. Herkes için tamamen sınırsız ücretsiz? Olası değil — <a href="/learn/inference">çıkarım</a> maliyetleri gerçek ve devam ediyor.
    </p>
    <p>
      Gidişat: zamanla daha fazla ücretsiz katman kapasitesi, ücretli katmanlar ücretli kalır ancak özellik eklemeye devam eder. Ücretsizin sınırsız olacağını planlamayın.
    </p>

    <h2 id="cancel">Copilot aboneliğinizi iptal etme</h2>
    <ol>
      <li>github.com adresine giriş yapın.</li>
      <li><code>Settings → Billing and plans → Plans and usage</code> bölümüne gidin.</li>
      <li>"GitHub Copilot" bölümünü bulun. İptal'e tıklayın.</li>
      <li>Abonelik, mevcut fatura döneminin sonuna kadar aktif kalır.</li>
    </ol>
    <p>
      Business + Enterprise için: aynı işlem ancak organizasyon düzeyinde. Organizasyon yöneticisi iptal etmelidir; bireysel kullanıcılar kendileri iptal edemez.
    </p>
  </>
);

export const cta = {
  label: "Copilot ROI'sini Hesapla",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "GitHub Copilot'un gerçek maliyeti nedir?",
    a: "Ücretsiz: sınırlı aylık tamamlama (öğrenciler/öğretmenler/açık kaynak bakımcıları için ücretsiz). Individual/Pro: aylık $10 veya yıllık $100 (sınırsız). Business: koltuk başına aylık $19. Enterprise: koltuk başına aylık $39 (özel talimatlar, IP tazminatı ekler).",
  },
  {
    q: "GitHub Copilot Ücretsiz ve Ücretli — fark nedir?",
    a: "Ücretsiz: sınırlı aylık tamamlama. Ücretli (Individual $10/ay): sınırsız. Ücretsiz değerlendirme için uygundur; sürekli kullanım için ücretli gereklidir. Çoğu geliştirici, ücretli sürümün ilk hafta içinde kendini amorti ettiğini bulur.",
  },
  {
    q: "Kodlama için GitHub Copilot ve ChatGPT — hangisi daha iyi?",
    a: "Farklı işler. Copilot: IDE içi satır içi tamamlamalar, anında yazma için en düşük sürtünme. ChatGPT/Claude: sohbet arayüzü, açıklama + hata ayıklama + mimari akıl yürütme için daha iyidir. Çalışan geliştiricilerin çoğu her ikisini de kullanır — toplam ~$30/ay, üretkenlik artışı bunu haklı çıkarır.",
  },
  {
    q: "GitHub Copilot mevcut yapay zeka kodlama aracımdan daha mı iyi?",
    a: "Ne kullandığınıza bağlıdır. Tabnine ile karşılaştırıldığında: Copilot'un kalitesi genellikle daha yüksektir. Codeium ile karşılaştırıldığında: kalite yakındır, Copilot daha sıkı GitHub entegrasyonuna sahiptir. Cursor ile karşılaştırıldığında: Cursor'un ajan özellikleri 2026'da Copilot'u geride bırakır, ancak Copilot ölçekte daha geniş IDE desteği + IP tazminatı sunar.",
  },
  {
    q: "GitHub Copilot hiç ücretsiz olacak mı?",
    a: "Zaten kısmen öyle — doğrulanmış öğrenciler, öğretmenler, açık kaynak bakımcıları için ücretsiz. Herkes için sınırlı bir ücretsiz katman 2024'ün sonlarında kullanıma sunuldu. Tamamen sınırsız ücretsiz olası değildir (çıkarım maliyetleri gerçektir). Gidişat: zamanla daha fazla ücretsiz kapasite, ücretli kalır ancak özellik eklemeye devam eder.",
  },
  {
    q: "GitHub Copilot aboneliğimi nasıl iptal ederim?",
    a: "github.com adresine giriş yapın → Settings → Billing and plans → Plans and usage → GitHub Copilot bölümünün altında İptal'e tıklayın. Mevcut dönemin sonuna kadar aktif kalır. Business/Enterprise için: organizasyon yöneticisi, organizasyon düzeyindeki ayarlardan iptal etmelidir.",
  },
];