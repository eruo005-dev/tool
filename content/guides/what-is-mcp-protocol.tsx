import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    <a href="/learn/mcp">MCP</a> &mdash; Model Context Protocol &mdash; yapay zeka asistanlarını araçlara ve veri
    kaynaklarına bağlamak için açık standarttır. Anthropic bunu 2024 sonlarında başlattı; 2026 itibarıyla Claude, ChatGPT, Cursor, Zed, Goose ve giderek büyüyen bir liste tarafından destekleniyor. Bunu yapay zeka entegrasyonları için USB-C gibi düşünün.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>MCP'nin çözdüğü sorun</h2>
    <p>
      MCP öncesinde, her yapay zeka aracının harici sistemlerle entegre olmak için kendi yöntemi vardı. Cursor uzantıları, ChatGPT özel eylemleri,
      Claude araçları &mdash; hepsi uyumsuzdu. MCP ortak bir protokol tanımlar, böylece bir kere yazdığınız sunucu her yerde çalışır.
      Claude Desktop için kurduğunuz Slack MCP sunucusu ayrıca Cursor, Zed, ChatGPT vb. yerlerde de çalışır.
    </p>

    <h2>Nasıl çalışır</h2>
    <p>
      Bir MCP sunucusu <em>kaynakları</em> (salt okunur veri), <em>araçları</em> (çağrılabilir işlevler) ve <em>istemleri</em>
      (şablonlar) sunar. Yapay zeka istemcisi, JSON-RPC üzerinden sunucuya bağlanır (yerel için stdio, uzak için HTTP/SSE) ve
      nelerin mevcut olduğunu keşfeder. Kimlik doğrulama sunucu tarafından yönetilir.
    </p>

    <h2>2026'da bilinmeye değer sunucular</h2>
    <ul>
      <li><strong>Filesystem, GitHub, Git, SQLite, Postgres, Slack</strong> &mdash; resmi sunucular.</li>
      <li><strong>Linear, Notion, Stripe, Google Drive</strong> &mdash; satıcı tarafından yayınlananlar.</li>
      <li><strong>Brave Search, Fetch, Puppeteer</strong> &mdash; web erişimi.</li>
      <li><strong>Memory, Sequential Thinking</strong> &mdash; bilişsel geliştirmeler.</li>
    </ul>

    <p>
      İş akışına göre kurulum önerileri için <a href="/tools/mcp-server-picker">MCP sunucu seçiciyi</a> kullanın. Ajan
      tasarımı genel olarak için <a href="/guides/best-ai-for-agents">ajanlar için en iyi yapay zekayı</a> inceleyin.
    </p>
  </>
);