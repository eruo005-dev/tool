import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026 yılındaki ücretsiz AI ekosistemi gerçekten iyi. Kimseye para ödemeden ciddi işler yapabilirsiniz &mdash; araştırma,
    kodlama, yazma, görsel oluşturma, ses &mdash;. İşte kategorilere göre dürüst
    ücretsiz katman sıralaması, can sıkan hız sınırlarıyla birlikte.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>2026'nın ücretsiz katman yıldızları</h2>
    <ul>
      <li><strong>NotebookLM (Google)</strong> &mdash; 50 kaynağa kadar, alıntılarla tam sohbet,
        sesli özetler. En iyi ücretsiz araç, nokta. Önemsenecek hız sınırı yok.</li>
      <li><strong>Claude.ai (ücretsiz)</strong> &mdash; Günlük mesaj kotası ile Claude Sonnet 4.6. Mükemmel
        ücretsiz kodlama + yazma AI'sı.</li>
      <li><strong>ChatGPT (ücretsiz)</strong> &mdash; Mesaj kotaları ile GPT-5. Uygulamada ses modu.</li>
      <li><strong>Gemini (ücretsiz)</strong> &mdash; Gemini 2.5 Flash sınırsız; Gemini 2.5 Pro
        hız sınırlı.</li>
      <li><strong>Perplexity (ücretsiz)</strong> &mdash; Hızlı arama sınırsız, Pro Arama hız sınırlı
        ~5/gün.</li>
      <li><strong>DeepSeek (ücretsiz)</strong> &mdash; chat.deepseek.com V3.2 / R1 erişimi sağlar.</li>
      <li><strong>Kimi (ücretsiz)</strong> &mdash; 1M bağlam sohbeti, kimi.com'da ücretsiz.</li>
      <li><strong>Microsoft Copilot (ücretsiz)</strong> &mdash; Bing destekli, ChatGPT hesabı olmadan
        GPT-5 erişimi.</li>
    </ul>

    <h2>Göreve göre &mdash; ücretsiz seçenekler</h2>
    <ul>
      <li><strong>Alıntılarla araştırma:</strong> NotebookLM + Perplexity ücretsiz.</li>
      <li><strong>Yazma / taslak oluşturma:</strong> Claude.ai ücretsiz + ChatGPT ücretsiz.</li>
      <li><strong>Kodlama:</strong> Claude.ai ücretsiz + Öğrenci Paketi ile GitHub Copilot.</li>
      <li><strong>Görsel oluşturma:</strong> Bing Image Creator (ücretsiz, DALL-E 3) + Gemini (ücretsiz, Imagen 3).</li>
      <li><strong>Ses modu:</strong> ChatGPT ücretsiz ses (günlük sınırlı); Gemini Live (ücretsiz).</li>
      <li><strong>Uzun bağlam:</strong> Kimi (1M ücretsiz) veya Gemini Flash (1M, ücretsiz).</li>
      <li><strong>Yerel / kendi barındırma:</strong> Ollama + Llama 3.3 / Qwen 3.5 / DeepSeek-distill.
        Donanımınız varsa ücretsiz.</li>
    </ul>

    <h2>İşe yarayan yalnızca ücretsiz yığın</h2>
    <p>
      2026'da çoğu sıradan kullanıcı için &ldquo;AI'ya para ödeme&rdquo; yığını şudur: Claude.ai
      yazma + akıl yürütme için ücretsiz, araştırma için NotebookLM, görseller için Bing Image Creator,
      Claude'un günlük limitine ulaştığınızda ChatGPT ücretsiz. Toplam maliyet: 0$/ay.
    </p>

    <h2>Ücretsiz ne zaman can sıkıcı olur</h2>
    <ul>
      <li>Claude / ChatGPT günlük kotalarına düzenli olarak ulaşıyorsanız &mdash; birine 20$ ödeyin.</li>
      <li>Marka pazarlama kalitesinde görsel oluşturmaya ihtiyacınız varsa &mdash; Midjourney 10$/ay.</li>
      <li>API tabanlı bir şey inşa ediyorsanız &mdash; zaten ücretsiz katmanların ötesindesiniz.</li>
      <li>Yalnızca ödeme duvarının arkasında bulunan ücretli bir özelliğe ihtiyacınız varsa (Sora, Veo, Code Interpreter,
        Özel GPT'ler).</li>
    </ul>
  </>
);