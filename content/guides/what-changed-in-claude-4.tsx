import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Claude 4 (Opus 4, Sonnet 4, ardından 2025-2026 boyunca 4.5, 4.6, 4.7) Anthropic'in ürün yelpazesini yeniden şekillendirdi. Öne çıkanlar: daha iyi ajan güvenilirliği, tüm ürün yelpazesinde 1M bağlam, gerçekten işe yarayan <a href="/learn/prompt-caching">istem önbelleğe alma</a> ve amiral gemisi ürün olarak Claude Code.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Claude 3.7'ye göre yenilikler</h2>
    <ul>
      <li><strong>Sonnet + Opus'ta 1M bağlam.</strong> Haiku 200k'da kalıyor.</li>
      <li><strong>İstem önbelleğe alma:</strong> varsayılan 5 dakika, isteğe bağlı 1 saat TTL, önbelleğe alınan girdide %90 indirim. Sektör lideri.</li>
      <li><strong>En üst düzey SWE-bench Verified, Aider, Terminal-Bench puanları.</strong> En iyi ajan kodlayıcı.</li>
      <li><strong>Claude Code:</strong> terminal öncelikli ajan, Pro/Max planlarına dahil.</li>
      <li><strong>Beceriler + Kancalar:</strong> yeniden kullanılabilir davranış paketleri ve olay dinleyicileri.</li>
      <li><strong>Bilgisayar Kullanımı API'si:</strong> masaüstü arayüzünü kullanan ajanlar.</li>
    </ul>

    <h2>2026'daki model yelpazesi</h2>
    <ul>
      <li><strong>Opus 4.7</strong> &mdash; en yüksek güvenilirlik, Sonnet'in 5 katı maliyet.</li>
      <li><strong>Sonnet 4.6</strong> &mdash; varsayılan günlük sürücü, Opus kalitesinin %95'i.</li>
      <li><strong>Haiku 4.5</strong> &mdash; bütçe seviyesi, hızlı, tam araç yüzeyi.</li>
    </ul>

    <h2>Pratikte iyileşenler</h2>
    <ul>
      <li>Uzun ajan döngüleri (30+ adım) çok daha güvenilir.</li>
      <li>Çıktı stili daha temiz, daha az pazarlama odaklı.</li>
      <li>Web araması yeterli (sağlam araştırma için hala Perplexity'nin gerisinde).</li>
      <li>Projeler (konuşmalar arasında kalıcı bağlam) devam eden çalışmaları çok daha akıcı hale getiriyor.</li>
    </ul>

    <h2>Claude'un hala kaybettiği yerler</h2>
    <ul>
      <li>Yerel görüntü üretimi yok, Sora tarzı video yok, ses modu eşdeğeri yok (henüz).</li>
      <li>API fiyatı GPT-5'ten biraz daha yüksek ($3/$15 vs $2.50/$10) &mdash; ancak önbelleğe alma farkı daraltıyor.</li>
      <li>Pro planı ($20) yoğun günlerde ChatGPT Plus'tan daha sıkı sınırlara sahip.</li>
    </ul>

    <p>
      Alternatiflerle karşılaştırma için <a href="/compare/claude-vs-chatgpt">Claude vs ChatGPT</a> ve{" "}
      <a href="/compare/claude-vs-gemini">Claude vs Gemini</a>. Fiyatlandırma dökümü için{" "}
      <a href="/guides/claude-pricing-explained">Claude fiyatlandırması açıklaması</a>.
    </p>
  </>
);