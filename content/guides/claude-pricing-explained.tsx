import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Claude fiyatlandırması tüketici planları (Pro, Max), API katmanları (Opus, Sonnet, Haiku)
    ve ekip/kurumsal planlar olarak ayrılır. İşte 2026 için geçerli tüm rakamlar ve her katmanın
    gerçekten ne zaman değerli olduğu.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Tüketici planları</h2>
    <ul>
      <li><strong>Ücretsiz</strong> &mdash; Claude Sonnet 4.6, günlük mesaj sınırı (~10-30, model
        yüküne bağlı). Gündelik kullanım için yeterli.</li>
      <li><strong>Pro (20$/ay)</strong> &mdash; Ücretsize kıyasla 5 kat kullanım, Opus 4.7 erişimi, Claude Code,
        Projeler, sohbetlerde <a href="/learn/prompt-caching">istem önbellekleme</a>. Çoğu ücretli kullanıcı için ideal nokta.</li>
      <li><strong>Max 5x (100$/ay)</strong> &mdash; Pro'nun 5 katı kullanım. Pro'nun sizi günlük
        olarak sınırladığı durumlar için.</li>
      <li><strong>Max 20x (200$/ay)</strong> &mdash; Pro'nun 20 katı kullanım. Uzun süreli ajan görevleri yürüten
        yoğun Claude Code kullanıcıları için uygun.</li>
    </ul>

    <h2>Ekip / Kurumsal</h2>
    <ul>
      <li><strong>Ekip (25-30$/koltuk/ay)</strong> &mdash; en az 5 koltuk, yönetici kontrolleri, paylaşımlı
        Projeler, merkezi faturalama.</li>
      <li><strong>Kurumsal</strong> &mdash; SSO, SCIM, denetim günlükleri, genişletilmiş kullanım, özel
        sözleşmeler. Fiyatlandırma için &ldquo;satış ekibiyle iletişime geçin.&rdquo;</li>
    </ul>

    <h2>API fiyatlandırması (1M token başına)</h2>
    <ul>
      <li><strong>Claude Opus 4.7:</strong> 15$ giriş / 75$ çıkış. Önbellek yazma 18.75$; önbellek okuma
        1.50$.</li>
      <li><strong>Claude Sonnet 4.6:</strong> 3$ / 15$. Önbellek yazma 3.75$; önbellek okuma 0.30$.</li>
      <li><strong>Claude Haiku 4.5:</strong> 0.80$ / 4$. Önbellek okuma 0.08$.</li>
      <li><strong>Toplu API (%50 indirim):</strong> asenkron, 24 saat SLA. Aynı modeller.</li>
    </ul>

    <h2>Tasarruf kolları</h2>
    <ul>
      <li><strong>İstem önbellekleme</strong> &mdash; önbelleğe alınmış girişte %90 indirim. Her zaman kullanın.</li>
      <li><strong>Toplu API</strong> &mdash; gecikme önemli olmadığında %50 indirim.</li>
      <li><strong>Opus yerine Sonnet</strong> &mdash; %95 kalitede 5 kat daha ucuz.</li>
      <li><strong>Rutin işler için Haiku</strong> &mdash; otomatik tamamlama/sınıflandırmada Sonnet'ten 4 kat daha ucuz.</li>
    </ul>

    <h2>Her katman ne zaman değerli</h2>
    <ul>
      <li><strong>Ücretsiz:</strong> Claude'u test eden gündelik kullanıcılar.</li>
      <li><strong>Pro 20$:</strong> ciddi günlük kullanıcılar için varsayılan.</li>
      <li><strong>Max 100$:</strong> Pro sınırına haftalık takılıyorsanız. Claude Code
        güç kullanıcıları için yaygın.</li>
      <li><strong>API:</strong> herhangi bir ürün oluştururken veya otomatik iş akışları çalıştırırken. Katman
        1'den başlayın (5$ fonlu), kullanımla büyütün.</li>
    </ul>
    <p>
      Diğer planlarla karşılaştırın: <a href="/compare/chatgpt-plus-vs-claude-pro">ChatGPT Plus vs
      Claude Pro</a>. API hesabı yapın: <a href="/tools/claude-vs-deepseek-cost-calculator">maliyet
      hesaplayıcı</a>,{" "}
      <a href="/tools/prompt-cache-savings-calculator">önbellek tasarrufu</a>.
    </p>
  </>
);