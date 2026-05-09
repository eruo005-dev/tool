import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Agentik bir tarayıcı size sadece web'i göstermez — onun üzerinde işlem yapar. ChatGPT Atlas, Comet,
    Dia ve Edge'deki Microsoft Copilot, bir yapay zekanın formları doldurmasını, seyahat rezervasyonu yapmasını,
    sekmeleri özetlemesini ve siteler arasında görev zincirlemesini sağlar. İşte 2026 kadrosu, gerçekten iyi yaptıkları şeyler
    ve hangisinin iş akışınıza uyduğu.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Bir tarayıcıda "agentik" ne anlama gelir</h2>
    <p>
      Üç yetenek seviyesi: <strong>Kenar Çubuğu Yapay Zekası</strong> (mevcut sekmeyi bilen sohbet), <strong>çapraz sekme ajanı</strong>
      (diğer sekmelerde ne açık olduğunu bilir ve bunlar arasında özetleyebilir) ve <strong>tam ajan</strong> (sizin adınıza tıklar, yazar,
      gezinir, çok adımlı). Çoğu mevcut tarayıcı seviye 1'i yapar; ChatGPT Atlas ve Operator seviye 3'ü yapar.
    </p>

    <h2>2026 kadrosu</h2>
    <ul>
      <li><strong>ChatGPT Atlas (OpenAI)</strong> — bağımsız Chromium tarayıcı. En iyi özerklik. GPT-5 + Operator entegre.</li>
      <li><strong>Comet (Perplexity)</strong> — varsayılan kullanıcı arayüzü olarak alıntılanmış yanıtlar. Pro Search derin çok adımlı araştırma yapar.</li>
      <li><strong>Dia (Browser Company)</strong> — Arc sonrası, Skills (özel mini-ajanlar) ile yapay zeka kenar çubuğu. Önce macOS.</li>
      <li><strong>Edge'de Microsoft Copilot</strong> — en sıkı M365 entegrasyonu; ücretsiz katman güçlü.</li>
      <li><strong>Chrome (Gemini)</strong> — adres çubuğu Gemini, Workspace entegrasyonu, en büyük kurulum tabanı.</li>
      <li><strong>Leo ile Brave</strong> — gizlilik odaklı, Llama / Mixtral çalıştırır.</li>
    </ul>

    <h2>En çok ne yaptığınıza göre seçin</h2>
    <ul>
      <li><strong>Çok adımlı web görevleri (uçak bileti rezervasyonu, form doldurma, alışveriş):</strong> ChatGPT Atlas + Operator.</li>
      <li><strong>Kaynaklarla araştırma:</strong> Comet.</li>
      <li><strong>Yapay zeka desteğiyle günlük gezinme:</strong> Dia veya Edge'de Copilot.</li>
      <li><strong>Workspace'te yaşayanlar:</strong> Gemini ile Chrome.</li>
      <li><strong>Önce gizlilik:</strong> Brave + Leo.</li>
    </ul>

    <p>
      Bunları yan yana <a href="/tools/agentic-browser-comparison">agentik tarayıcı karşılaştırma</a> aracında karşılaştırın.
      Tarayıcıların ötesindeki ajan platformları için <a href="/tools/ai-agent-platform-comparison">ajan platform karşılaştırmasına</a> bakın.
    </p>
  </>
);