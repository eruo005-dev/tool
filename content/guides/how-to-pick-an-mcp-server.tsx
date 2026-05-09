import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026 yılına kadar yüzlerce <a href="/learn/mcp">MCP</a> sunucusu var — bazıları resmi, çoğu topluluk tarafından oluşturulmuş. Kurulumunuz için doğru olanları seçmek çoğunlukla üç soruya dayanır: iş akışı, güven duruşu, barındırma. İşte çerçeve.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Soru 1: <a href="/learn/agent">AI ajanınızın</a> ne yapması gerekiyor?</h2>
    <ul>
      <li><strong>Kodlama:</strong> Dosya Sistemi, Git, GitHub, Sıralı Düşünme, Bellek.</li>
      <li><strong>Araştırma:</strong> Brave Arama, Getir, Bellek, Dosya Sistemi.</li>
      <li><strong>Veri analizi:</strong> Postgres, SQLite, Dosya Sistemi, Bellek.</li>
      <li><strong>Müşteri desteği:</strong> Slack, Notion, Linear, Bellek.</li>
      <li><strong>PM / operasyonlar:</strong> Linear, Notion, Slack, GitHub, Google Drive.</li>
    </ul>
    <h2>Soru 2: resmi mi yoksa topluluk mu?</h2>
    <ul>
      <li><strong>Resmi</strong> (modelcontextprotocol/* + satıcı tarafından yayınlanan): Genellikle SOC 2 incelemesi mümkün, kaynak bakımı yapılır, hatalar düzeltilir.</li>
      <li><strong>Topluluk:</strong> genellikle daha yüksek özellik hızı, ancak kalite ve terk edilme riski değişir.</li>
      <li><strong>Kılavuz:</strong> hassas verileri okuyan her şey için resmi kullanın; ek araçlar için topluluk uygundur.</li>
    </ul>
    <h2>Soru 3: stdio mu yoksa HTTP mi?</h2>
    <ul>
      <li><strong>stdio:</strong> yalnızca yerel, daha basit, ağa maruz kalmaz. Varsayılan seçim.</li>
      <li><strong>HTTP/SSE:</strong> uzaktan dağıtılabilir, çok kullanıcılı. Ajanınız bulutta çalışıyorsa gereklidir.</li>
    </ul>
    <h2>Güvenlik + emniyet</h2>
    <ul>
      <li>Herhangi bir topluluk sunucusuna dosya sistemi veya ağ erişimi vermeden önce kaynağını okuyun.</li>
      <li>MCP sunucularına kullanıcı düzeyinde ayrıcalıklara sahipmiş gibi davranın. Dosyalarınızı OKUYABİLİRLER.</li>
      <li>Kapsamlı kimlik bilgileri kullanın — minimum izinlere sahip tokenlar.</li>
      <li>Erişim günlüklerini periyodik olarak denetleyin (Anthropic + OpenAI bunları sunar).</li>
    </ul>
    <p>
      Kişiselleştirilmiş seçimler ve Claude Desktop yapılandırması için <a href="/tools/mcp-server-picker">MCP sunucu seçici</a> sayfasını ziyaret edin.
      Protokole genel bakış için <a href="/guides/what-is-mcp-protocol">MCP protokolü nedir</a> bölümüne bakın.
    </p>
  </>
);