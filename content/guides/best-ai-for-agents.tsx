import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da ajanlar için doğru yapay zekayı seçmek, çoğunlukla uzun vadelerde güvenilirlikle ilgilidir. Claude Opus 4.7 ve Sonnet 4.6, ajan koşum takımı kategorisinde liderdir; GPT-5 rekabetçidir ancak daha erken sürüklenir; DeepSeek V3.2 maliyet konusunda kazanır. Vade uzunluğuna ve bütçeye göre seçim yapın.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>"Ajanlar için en iyisi" ne anlama geliyor</h2>
    <p>
      Bir ajan, bir döngü içindeki bir modeldir: düşün &rarr; hareket et (araç çağrısı) &rarr; gözlemle &rarr; tekrar düşün. Zor kısım ilk adım değildir &mdash; bağlamın önceki araç çıktılarının 80k token'ı olduğu ve modelin akıllı bir sonraki hamleyi yapması gerektiği 50. adımdır. Güvenilirlik birikir; küçük farklılıklar uzun vadelerde büyük hale gelir.
    </p>

    <h2>2026 ajan sıralaması</h2>
    <ul>
      <li><strong>Claude Opus 4.7:</strong> 50+ adımda en yüksek güvenilirlik. En yüksek maliyet. Başarısız olamayacak üretim ajanları için doğru.</li>
      <li><strong>Claude Sonnet 4.6:</strong> Opus güvenilirliğinin %95'i 1/5 maliyetle. Çoğu ekip için varsayılan ajan modeli.</li>
      <li><strong>GPT-5:</strong> mükemmel muhakeme, ekosistem. Çok uzun vadelerde Claude'dan daha erken sürüklenir.</li>
      <li><strong>Gemini 2.5/3 Pro:</strong> çok modlu girdi ajanlarında (görüntü + metin adımları) güçlü. Saf metin muhakeme döngülerinde Claude'un gerisinde.</li>
      <li><strong>DeepSeek V3.2:</strong> en ucuz uygulanabilir ajan modeli. Marjinal güvenilirlik farkının kabul edilebilir olduğu maliyete duyarlı döngüler için kullanın.</li>
    </ul>

    <h2>Bilmeye değer çerçeveler</h2>
    <ul>
      <li><strong>Claude Agent SDK</strong> &mdash; Anthropic'in amaca yönelik koşum takımı. Kancalar, skill'ler, eğik çizgi komutları, <a href="/learn/mcp">MCP</a>. 2026'daki en iyi ajan yüzeyi.</li>
      <li><strong>OpenAI Agents SDK</strong> &mdash; GPT-5 ajanları için sıkı Python/TS API'si.</li>
      <li><strong>LangGraph</strong> &mdash; çerçeveden bağımsız grafik tabanlı ajan orkestratörü.</li>
      <li><strong>AutoGen</strong> &mdash; Microsoft'un çoklu ajan çerçevesi.</li>
      <li><strong>Crew AI</strong> &mdash; görüşlü çoklu ajan rol ataması.</li>
    </ul>

    <h2>Maliyet gerçeği</h2>
    <p>
      Ajan maliyetleri, vade uzunluğuyla birlikte patlar çünkü bağlam her adımda büyür. Her zaman prompt önbelleğe almayı kullanın; varsayılan olarak Opus yerine Sonnet kullanın; ucuz adımlar için DeepSeek ve zor adımlar için Claude'u karıştırın. İnşa etmeden önce bütçe yapmak için <a href="/tools/ai-agent-loop-cost-estimator">AI ajan döngüsü maliyet tahmin aracını</a> kullanın.
    </p>

    <h2>Gizli ipucu</h2>
    <p>
      <a href="/learn/prompt-caching">Prompt önbelleğe almayı</a> atlamayın. Anthropic'in %90 indirimli önbelleğe alınmış girdisiyle, aynı <a href="/learn/system-prompt">sistem komutunu</a> 50 adım boyunca yeniden kullanan bir ajan, saf bir versiyondan ~10 kat daha ucuza mal olur. Ajan çalışmalarındaki en büyük maliyet kaldıracı, model seçimi değil, önbelleğe almadır.
    </p>
    <p>
      Karşılaştırın: <a href="/compare/claude-vs-chatgpt">Claude vs ChatGPT</a>,{" "}
      <a href="/compare/claude-opus-vs-sonnet">Claude Opus vs Sonnet</a>.
    </p>
  </>
);