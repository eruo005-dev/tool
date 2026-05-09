import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026 yılına gelindiğinde, pazarlamacılar reklam metinleri, sosyal medya gönderileri, SEO içerikleri, görsel oluşturma, video ve müşteri araştırması için yapay zeka kullanıyor. Tek bir model her şeyi kazanmıyor &mdash; ancak küçük bir set işin %95'ini kapsıyor.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>2026 pazarlama yapay zeka seti</h2>
    <ul>
      <li><strong>ChatGPT Plus</strong> &mdash; reklam metinleri, sosyal medya gönderileri, marka sesi keşfi, Sora ile video, DALL-E ile görseller. Genel amaçlı pazarlama aracı.</li>
      <li><strong>Claude Pro</strong> &mdash; uzun biçimli blog yazıları, beyaz kağıtlar, vaka çalışmaları. Düşünce liderliği içerikleri için daha temiz çıktı.</li>
      <li><strong>Perplexity Pro</strong> &mdash; rakip araştırması, müşteri sorun noktası araştırması, alıntılarla trend konular.</li>
      <li><strong>Midjourney</strong> &mdash; pazarlama kalitesinde görsel oluşturma için altın standart. $10-60/ay.</li>
      <li><strong>Runway / Veo / Sora</strong> &mdash; reklam yaratıcıları için yapay zeka videosu.</li>
      <li><strong>Jasper / Copy.ai</strong> &mdash; temel modelleri saran pazarlamaya özel bir kullanıcı deneyimi istiyorsanız. Prompt yönetmek istemeyen ekipler için değerli.</li>
    </ul>

    <h2>Pazarlama görevine göre</h2>
    <ul>
      <li><strong>Reklam başlıkları:</strong> ChatGPT Plus. 30 saniyede 20 varyant çalıştırın.</li>
      <li><strong>Uzun biçimli SEO blog yazıları:</strong> Taslak için Claude Sonnet, ses + gerçekler için insan düzenlemesi. Önce <a href="/guides/seo-basics-for-beginners">SEO temellerini</a> kullanın.</li>
      <li><strong>E-posta dizileri:</strong> Ton için Claude, varyant oluşturma için ChatGPT.</li>
      <li><strong>Sosyal medya takvimi (LinkedIn / X / Instagram):</strong> Her iki amiral gemisi model + 5 örnek gönderi içeren bir ton promptu.</li>
      <li><strong>Müşteri araştırması / anketleri:</strong> Trend araştırması için Perplexity Pro, anket tasarımı + analizi için Claude.</li>
      <li><strong>Görsel yaratıcı:</strong> Kahraman görselleri için Midjourney, hızlı sosyal varyantlar için ChatGPT'nin görsel oluşturucusu.</li>
      <li><strong>Video yaratıcı:</strong> Sora (ChatGPT Plus'ta) veya Runway (~$15-95/ay).</li>
      <li><strong>Açılış sayfası metni:</strong> Netlik için Claude, dönüşüm odaklı çerçeveler için ChatGPT.</li>
    </ul>

    <h2>Pazarlama için Gemini ne durumda?</h2>
    <p>
      Pazarlama setiniz Google Workspace'te yaşıyorsa &mdash; taslak için Dokümanlar, kampanya takibi için E-Tablolar, sunumlar için Slaytlar &mdash; Gemini Advanced parlar. Yerel Workspace yapay zekası hızlı ve bağlamsaldır. Google dışı ekipler için ChatGPT + Claude genellikle kazanır.
    </p>

    <h2>Aylık $50 pazarlama seti</h2>
    <ul>
      <li>ChatGPT Plus ($20) &mdash; reklam metinleri, sosyal medya, görsel oluşturma.</li>
      <li>Claude Pro ($20) &mdash; uzun biçim + düşünce liderliği.</li>
      <li>Midjourney Basic ($10) &mdash; marka kalitesinde görsel oluşturma.</li>
    </ul>
    <p>
      Ciddi rakip araştırması için Perplexity Pro ($20) ekleyin. Karşılaştırın:{" "}
      <a href="/compare/claude-vs-chatgpt">Claude vs ChatGPT</a>,{" "}
      <a href="/compare/chatgpt-vs-perplexity">ChatGPT vs Perplexity</a>.
    </p>
  </>
);