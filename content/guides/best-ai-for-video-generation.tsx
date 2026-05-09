import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da yapay zeka videosu hızla olgunlaştı. Sora 2 (OpenAI), Veo 3 (Google), Runway Gen-4, Kling 2.5 ve
    Pika 2.5'ın her biri bir alanda öne çıkıyor. Doğru aracı seçmek; uzunluk, stil, kontrol ve
    maliyete bağlı.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Kullanım alanına göre liderler</h2>
    <ul>
      <li><strong>Sinematik / film görünümü:</strong> Sora 2 (ChatGPT Plus / Pro'da). En iyi hareket
        tutarlılığı ve sinematografi.</li>
      <li><strong>Gerçekçi + kontrol edilebilir:</strong> Veo 3 (Gemini Advanced'de). Güçlü fizik,
        öngörülebilir çıktılar.</li>
      <li><strong>Yönetmen kontrolü iş akışları:</strong> Runway Gen-4. Kamera kontrolü, hareket fırçası
        ve Yönetmen Modu.</li>
      <li><strong>Hızlı yinelemeli kısa biçim:</strong> Pika 2.5 + Kling 2.5. Ucuz, hızlı, sosyal medyaya hazır.</li>
      <li><strong>Dudak senkronizasyonu + karakter tutarlılığı:</strong> Hedra Character-2 + Higgsfield.</li>
      <li><strong>Açık ağırlıklı, kendi barındırmalı:</strong> CogVideoX, HunyuanVideo. Kalite
        tescilli çözümlere yaklaşıyor, gecikme çok daha yüksek.</li>
    </ul>

    <h2>Fiyatlandırma</h2>
    <ul>
      <li><strong>ChatGPT Plus (20$):</strong> Sora sınırlı; Pro (200$) sınırsız.</li>
      <li><strong>Gemini Advanced (20$):</strong> Veo sınırlı; Ultra (250$) daha yüksek kotalar.</li>
      <li><strong>Runway Standard (15-95$):</strong> kredi tabanlı, Yönetmen Modu.</li>
      <li><strong>Pika / Kling / Higgsfield:</strong> Aylık 10-60$, kredi paketleriyle.</li>
    </ul>

    <h2>Gerçek dünya iş akışı</h2>
    <p>
      Profesyoneller 2026'da reklamları uçtan uca tek bir araçla üretmiyor. 2026 iş akışı şöyle:
      Ana kare için Midjourney &rarr; Bu ana kareden video için Runway &rarr; Uzun çekimler için Sora veya
      Veo &rarr; Yükseltme için Topaz Video AI &rarr; Kurgu için Premiere / Resolve. Her araç bir işi iyi yapar.
    </p>

    <h2>Bilinmesi gereken sınırlamalar</h2>
    <ul>
      <li>2026'da çoğu araç çekim başına 8-15 saniye ile sınırlı. Post prodüksiyonda birleştiriyorsunuz.</li>
      <li>Gerçek kişilerin yüzleri tüm büyük sağlayıcılarda kısıtlanmıştır.</li>
      <li>Müzik + ses senkronizasyonu gelişiyor ancak hala sorunlu &mdash; sesi ayrı oluşturun
        (Suno, Udio).</li>
      <li>Bazı yargı bölgelerinde filigran zorunludur. Ticari kullanımdan önce kontrol edin.</li>
    </ul>
    <p>
      Karşılaştırma: <a href="/compare/chatgpt-vs-gemini">ChatGPT vs Gemini</a>.
    </p>
  </>
);