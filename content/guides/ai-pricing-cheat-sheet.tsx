import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Her öncü AI modelinin fiyatlandırması tek sayfada. Tüketici planları, API ücretleri, gizli limitler
    ve faturalamayı değiştiren 5 kaldıraç. 2026 Q1 için güncellenmiştir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Tüketici aylık planları (USD)</h2>
    <ul>
      <li><strong>Claude Pro / Max:</strong> $20 / $100 / $200.</li>
      <li><strong>ChatGPT Plus / Pro:</strong> $20 / $200.</li>
      <li><strong>Gemini Advanced / Ultra:</strong> $20 / $250.</li>
      <li><strong>Perplexity Pro / Max:</strong> $20 / $200.</li>
      <li><strong>Grok (X Premium / Premium+):</strong> $8 / $40.</li>
      <li><strong>NotebookLM:</strong> Ücretsiz (Plus, Gemini Advanced ile birlikte gelir).</li>
      <li><strong>Microsoft Copilot Pro:</strong> $20.</li>
    </ul>

    <h2>API fiyatlandırması (1M token başına)</h2>
    <table className="my-3 w-full text-left text-sm">
      <thead className="text-xs uppercase tracking-wide text-slate-500">
        <tr><th>Model</th><th>Giriş</th><th>Çıkış</th></tr>
      </thead>
      <tbody>
        <tr><td>Claude Opus 4.7</td><td>$15</td><td>$75</td></tr>
        <tr><td>Claude Sonnet 4.6</td><td>$3</td><td>$15</td></tr>
        <tr><td>Claude Haiku 4.5</td><td>$0.80</td><td>$4</td></tr>
        <tr><td>GPT-5</td><td>$2.50</td><td>$10</td></tr>
        <tr><td>GPT-5 mini</td><td>$0.25</td><td>$2</td></tr>
        <tr><td>GPT-5 nano</td><td>$0.05</td><td>$0.40</td></tr>
        <tr><td>Gemini 3 Pro</td><td>$2.50</td><td>$10</td></tr>
        <tr><td>Gemini 2.5 Pro</td><td>$1.25</td><td>$5</td></tr>
        <tr><td>Gemini 2.5 Flash</td><td>$0.30</td><td>$2.50</td></tr>
        <tr><td>DeepSeek V3.2</td><td>$0.27</td><td>$1.10</td></tr>
        <tr><td>DeepSeek R1</td><td>$0.55</td><td>$2.19</td></tr>
        <tr><td>Kimi K2</td><td>$0.60</td><td>$2.50</td></tr>
        <tr><td>Grok 4</td><td>$3</td><td>$15</td></tr>
        <tr><td>Mistral Large 3</td><td>$2</td><td>$6</td></tr>
      </tbody>
    </table>

    <h2>Faturanızı düşüren 5 kaldıraç</h2>
    <ol>
      <li><strong><a href="/learn/prompt-caching">İstem önbelleğe alma</a></strong> &mdash; Anthropic / Google'da önbelleğe alınmış girdide %90 indirim.
        Kararlı sistem istemleri için her zaman açık.</li>
      <li><strong>Toplu API (%50 indirim)</strong> &mdash; 24 saat SLA ile herhangi bir eşzamansız iş için.</li>
      <li><strong>Doğru boyutlandırılmış model</strong> &mdash; Rutin işler için Haiku Sonnet değil, Sonnet Opus değil, Flash
        Pro değil.</li>
      <li><strong>Yoğun olmayan saat DeepSeek</strong> &mdash; UTC 16:30-00:30 arasında yine %50 indirim.</li>
      <li><strong><a href="/learn/open-weights">Açık ağırlıklar</a> / kendi barındırma</strong> &mdash; tutarlı yüke sahip sürekli iş yükleri için.
        <a href="/tools/local-vs-api-breakeven-calculator">Başabaş hesaplayıcıya</a> bakın.</li>
    </ol>

    <h2>Çok modlu ek ücretler</h2>
    <ul>
      <li><strong>Görsel:</strong> Görsel başına ~$0.04 (Imagen 4, DALL-E 4).</li>
      <li><strong>Video:</strong> 5-10 saniyelik klip başına $0.30-0.50 (Sora, Veo).</li>
      <li><strong>Ses girişi:</strong> ~$0.006/dakika (Whisper); sohbet planlarında yerel olarak paketlenmiştir.</li>
      <li><strong>Görsel girişi (görüntü işleme):</strong> Amiral gemisi oranlarında görsel başına ~1500 token.</li>
      <li><strong>Video girişi:</strong> 1 fps'de saniyede ~250 token (Gemini).</li>
    </ul>

    <h2>Bilmeye değer diğer 2026 araçları</h2>
    <ul>
      <li><strong>GitHub Copilot Pro / Business:</strong> $10 / $19.</li>
      <li><strong>Cursor Pro / Ultra:</strong> $20 / $200.</li>
      <li><strong>Windsurf Pro:</strong> $15.</li>
      <li><strong>Midjourney:</strong> Katmanlara göre $10-120.</li>
      <li><strong>Perplexity Spaces / API:</strong> Sonar API ~1M token başına $5.</li>
    </ul>

    <p>
      Gerçek hacminize karşı matematiği çalıştırın:{" "}
      <a href="/tools/ai-cost-estimator">AI maliyet tahmincisi</a>,{" "}
      <a href="/tools/ai-monthly-cost-budgeter">aylık bütçeleyici</a>,{" "}
      <a href="/tools/local-vs-api-breakeven-calculator">yerel vs API başabaş</a>.
    </p>
  </>
);