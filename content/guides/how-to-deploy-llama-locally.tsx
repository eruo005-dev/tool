import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Llama 3.3 veya Llama 4'ü yerel olarak çalıştırmak, marjinal maliyet olarak 0$'dır, size tam gizlilik sağlar
    ve çevrimdışı çalışır. 2026'da bu yol, göründüğünden daha basit &mdash; işte 30 dakikalık kurulum.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Adım 1: Ollama'yı yükleyin</h2>
    <pre className="rounded bg-slate-900 p-3 text-xs text-slate-100"><code>{`# macOS / Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows: yükleyiciyi ollama.com adresinden indirin`}</code></pre>

    <h2>Adım 2: Makinenize uygun bir Llama modeli çekin</h2>
    <ul>
      <li><strong>16 GB RAM:</strong> <code>ollama run llama3.2:3b</code> &mdash; hızlı, kullanışlı, şaşırtıcı derecede yetenekli.</li>
      <li><strong>32 GB RAM:</strong> <code>ollama run llama3.3:8b</code> veya <code>llama4:scout</code>.</li>
      <li><strong>64 GB RAM:</strong> <code>ollama run llama3.3:70b-q4_K_M</code> &mdash; amiral gemisi, yavaş ama mükemmel.</li>
      <li><strong>192 GB birleşik (Mac Studio Ultra):</strong> <code>llama4:maverick</code> &mdash; tam <a href="/learn/moe">MoE</a> amiral gemisi.</li>
    </ul>

    <h2>Adım 3: Sohbet edin veya API'yi açığa çıkarın</h2>
    <p>
      Sohbet için <code>&gt;&gt;&gt;</code> istemine yazın. Yerel ağınızda OpenAI uyumlu bir API'yi açığa çıkarmak için:
      <code>OLLAMA_HOST=0.0.0.0:11434 ollama serve</code>. Cursor / Continue.dev'i <code>http://your-ip:11434/v1</code> adresine yönlendirin.
    </p>

    <h2>Hız beklentileri</h2>
    <ul>
      <li>4090 / M serisi Mac'te Llama 3.3 8B: 60-90 token/sn.</li>
      <li>Mac Studio M2 Ultra'da Llama 3.3 70B Q4: 12-16 token/sn.</li>
      <li>RTX 4090 + 64 GB DDR5 (boşaltma) üzerinde Llama 3.3 70B Q4: 8-12 token/sn.</li>
    </ul>

    <p>
      Çoklu makine havuzu için <a href="/guides/how-to-set-up-a-hyperspace-pod">hiperuzay pod'u nasıl kurulur</a> bölümüne bakın. Açık
      ağırlık takipçisi <a href="/tools/open-source-llm-tracker">açık kaynak LLM takipçisi</a> adresinde.
    </p>
  </>
);