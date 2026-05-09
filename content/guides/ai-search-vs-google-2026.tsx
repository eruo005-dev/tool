import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Google, 2026'da kullanım açısından hâlâ arama pazarının sahibi &mdash; ancak payı, 20+ yıl sonra ilk kez önemli ölçüde düştü. Bunun nedeni, yapay zeka arama motorlarının (Perplexity, ChatGPT Search, Bing Copilot, Kagi) sentez ağırlıklı sorguları ele geçirmesi. İşte her birinin kazandığı alanlar.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Yapay zeka aramasının kazandığı yerler</h2>
    <ul>
      <li><strong>Sentez soruları:</strong> &ldquo;X ve Y'yi karşılaştır&rdquo;, &ldquo;Z hakkındaki son tartışmayı özetle&rdquo;.</li>
      <li><strong>Çok adımlı araştırma:</strong> Pro Arama modları sorguları zincirler.</li>
      <li><strong>Kod soruları:</strong> Phind ve ChatGPT bu konuda Google'ı geçiyor.</li>
      <li><strong>Normalde 5 sekme açarak cevaplayacağınız her şey.</strong></li>
    </ul>
    <h2>Google'ın hâlâ kazandığı yerler</h2>
    <ul>
      <li><strong>Yerel arama:</strong> &ldquo;yakınımdaki kahve&rdquo;, &ldquo;nalbur dükkanı çalışma saatleri&rdquo;.</li>
      <li><strong>İşlemsel sorgular:</strong> alışveriş, uçuşlar, ürünler.</li>
      <li><strong>Son dakika haberleri:</strong> Google, çoğu yapay zeka motorundan daha hızlı indeksler.</li>
      <li><strong>Görsel arama:</strong> tersine görsel arama, görsel arama.</li>
      <li><strong>Güvenilir kaynak otoritesi:</strong> özellikle .gov / .edu sayfasını istediğinizde.</li>
    </ul>
    <h2>Yeni zihinsel model</h2>
    <p>
      &ldquo;X'i açıkla&rdquo; ve &ldquo;Y konusunda karar vermeme yardım et&rdquo; için Perplexity / ChatGPT Search kullanın. &ldquo;Yakınımdaki X'i bul&rdquo; ve &ldquo;Y haberiyle ilgili son gelişme ne?&rdquo; için Google kullanın. Beceri, hangi soruya hangi aracın uygun olduğunu bilmektir.
    </p>
    <p>
      Motorları yan yana karşılaştırmak için <a href="/tools/ai-search-engine-comparison">yapay zeka arama motoru karşılaştırması</a> sayfasını ziyaret edin.
    </p>
  </>
);