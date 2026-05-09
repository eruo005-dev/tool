import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    ChatGPT'nin 2026 fiyatlandırması; Free, Plus, Pro, Team, Enterprise ve OpenAI API katmanlarını içeriyor.
    İşte çoğu açıklamanın atladığı püf noktalarıyla (hız sınırı değişiklikleri, model yönlendirme sürprizleri) birlikte döküm.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Tüketici planları</h2>
    <ul>
      <li><strong>Free</strong> &mdash; Sınırlı GPT-5 (3 saatte 200 mesaj), "Otomatik" modda muhakeme yönlendiricisi, temel ses modu. Cömert başlangıç katmanı.</li>
      <li><strong>Plus (20$/ay)</strong> &mdash; 5 kat daha fazla kullanım, Sora videosu, gelişmiş ses modu, Kod Yorumlayıcı, özel GPT'ler, görsel üretimi. Varsayılan ücretli katman.</li>
      <li><strong>Pro (200$/ay)</strong> &mdash; Sınırsız GPT-5 muhakeme, o-Pro muhakeme modeli, daha yüksek Sora limitleri, ChatGPT Atlas. Her gün yoğun muhakeme kullanan güç kullanıcıları için değer.</li>
    </ul>

    <h2>Takım / Enterprise</h2>
    <ul>
      <li><strong>Team (25-30$/koltuk/ay)</strong> &mdash; En az 2 koltuk, yönetici konsolu, veriler üzerinde eğitim yok, paylaşılan çalışma alanı.</li>
      <li><strong>Enterprise</strong> &mdash; SSO, SCIM, gelişmiş kontroller, özel taahhütler. Satış sözleşmesi.</li>
    </ul>

    <h2>API fiyatlandırması (1M token başına)</h2>
    <ul>
      <li><strong>GPT-5:</strong> $2.50 / $10. Önbellek okumaları $1.25.</li>
      <li><strong>GPT-5 mini:</strong> $0.25 / $2.</li>
      <li><strong>GPT-5 nano:</strong> $0.05 / $0.40. Sınıra en yakın en ucuz seçenek.</li>
      <li><strong>GPT-4o:</strong> $2.50 / $10 &mdash; GPT-5 ile aynı; eski.</li>
      <li><strong>o-pro muhakeme:</strong> premium fiyatlandırma, ~$15 / $60.</li>
      <li><strong>Gömme (Embeddings):</strong> text-embedding-3-large $0.13/1M, small $0.02/1M.</li>
      <li><strong>Görsel üretimi:</strong> Görsel başına $0.04-0.19.</li>
      <li><strong>Ses (Whisper):</strong> $0.006/dk giriş.</li>
      <li><strong>Sora videosu:</strong> 5 saniyelik klip başına $0.30-0.50.</li>
      <li><strong>Toplu (%50 indirim):</strong> 24 saat SLA ile eşzamansız.</li>
    </ul>

    <h2>Hız sınırı püf noktaları</h2>
    <ul>
      <li>Katman 1 (5$ yüklemeden sonra): GPT-5'te 30k TPM &mdash; şaşırtıcı derecede düşük.</li>
      <li>Katmanlar, 50$, 100$, 250$, 1000$ kümülatif harcama + 7 gün sonra otomatik olarak yükselir.</li>
      <li>Plus günlük limitleri, sunucular yoğun olduğunda daralır. Pro limitleri daralmaz.</li>
    </ul>

    <h2>Her katman ne zaman değer</h2>
    <ul>
      <li><strong>Free:</strong> Hafif, sıradan kullanıcılar.</li>
      <li><strong>Plus 20$:</strong> Günlük kullanıcılar; değer planı.</li>
      <li><strong>Pro 200$:</strong> GPT-5 muhakeme + Sora'yı yoğun kullanan güç kullanıcıları.</li>
      <li><strong>API:</strong> Herhangi bir ürün veya otomatik iş akışı.</li>
    </ul>
    <p>
      Karşılaştırma: <a href="/compare/chatgpt-plus-vs-claude-pro">ChatGPT Plus vs Claude Pro</a>. Maliyet hesaplaması: <a href="/tools/gemini-vs-chatgpt-cost-calculator">Gemini vs ChatGPT</a>.
    </p>
  </>
);