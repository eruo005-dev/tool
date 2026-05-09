import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Gemini'nin 2026 fiyatlandırması, ücretsiz Gemini, Gemini Advanced, AI Pro/Ultra, Workspace eklentileri
    ve Gemini API'yi kapsar. Google'ın sitesindeki ayrımlar kafa karıştırıcı &mdash; işte
    basitleştirilmiş versiyonu.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Tüketici planları</h2>
    <ul>
      <li><strong>Ücretsiz Gemini</strong> &mdash; 2.5 Flash sınırsız, 2.5 Pro hız sınırlı. En iyi
        ücretsiz 2M bağlam katmanı.</li>
      <li><strong>Gemini Advanced (aylık $20, Google AI Pro dahil)</strong> &mdash; Gemini 2.5/3 Pro,
        Veo, Imagen, NotebookLM Plus, 2 TB Drive depolama.</li>
      <li><strong>Google AI Ultra (aylık $250)</strong> &mdash; Pro'daki her şey, daha yüksek Veo limitleri,
        Project Astra, Derin Araştırma, 30 TB depolama. Yoğun yaratıcı ve araştırma kullanıcıları için.</li>
    </ul>

    <h2>Workspace entegrasyonu</h2>
    <ul>
      <li>Workspace'teki Gemini, Google Workspace planlarıyla birlikte gelir (2026'da Business Starter $7-Plus
        kullanıcı başına $22). Gmail, Dokümanlar, E-Tablolar, Slaytlar'da Gemini'yi içerir.</li>
      <li>Bağımsız Workspace için Gemini eklentisi: Workspace'in üzerine kullanıcı başına yaklaşık $20, gelişmiş
        özellikler için.</li>
    </ul>

    <h2>API fiyatlandırması (1M token başına)</h2>
    <ul>
      <li><strong>Gemini 3 Pro:</strong> $2.50 / $10.</li>
      <li><strong>Gemini 2.5 Pro:</strong> $1.25 / $5 (200k bağlam altında); üstünde daha yüksek.</li>
      <li><strong>Gemini 2.5 Flash:</strong> $0.30 / $2.50.</li>
      <li><strong>Gemini 2.5 Flash-Lite:</strong> $0.10 / $0.40.</li>
      <li><strong>Gömülü (text-embedding-005):</strong> $0.025/1M.</li>
      <li><strong>Görsel oluşturma (Imagen 4):</strong> görsel başına yaklaşık $0.04.</li>
      <li><strong>Video (Veo 3):</strong> oluşturulan video saniyesi başına yaklaşık $0.50.</li>
      <li><strong>Ses:</strong> sohbete dahil; bağımsız API saniye başına fiyatlandırılır.</li>
      <li><strong>Toplu (%50 indirim):</strong> 24 saat asenkron.</li>
      <li><strong>Bağlam önbelleği:</strong> önbelleğe alınan okumalar için standart giriş fiyatının yaklaşık %25'i.</li>
    </ul>

    <h2>Gemini tuzakları</h2>
    <ul>
      <li>Ücretsiz API, 5 RPM, günde 25 istek ile sıkı sınırlıdır. Hızla yükseltme gerektirir.</li>
      <li>Uzun bağlam ek ücreti: 2.5 Pro, 200k token üzerinde giriş fiyatını ikiye katlar.</li>
      <li>Workspace Gemini paket halinde ancak özellik sınırlı &mdash; Veo varsayılan olarak Workspace'te
        mevcut değildir.</li>
    </ul>

    <h2>Her katman ne zaman değer</h2>
    <ul>
      <li><strong>Ücretsiz:</strong> Gündelik kullanıcıların %90'ı. Gerçekten güçlü.</li>
      <li><strong>Gemini Advanced $20:</strong> Veo + Pro bağlam + NotebookLM Plus isteyen günlük kullanıcılar.</li>
      <li><strong>Ultra $250:</strong> Yoğun yaratıcı veya araştırma. Niş.</li>
      <li><strong>API:</strong> Maliyet duyarlı ürün geliştirmeleri, özellikle çok modlu her şey.</li>
    </ul>
    <p>
      Karşılaştır: <a href="/compare/gemini-advanced-vs-chatgpt-plus">Gemini Advanced vs ChatGPT
      Plus</a>. Maliyet hesaplayıcı: <a href="/tools/gemini-vs-chatgpt-cost-calculator">Gemini vs ChatGPT
      maliyet hesaplayıcı</a>.
    </p>
  </>
);