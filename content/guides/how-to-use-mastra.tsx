import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>Mastra, Gatsby ekibinden gelen, ajanlar, iş akışları ve <a href="/learn/evals">değerlendirmeler</a> için TypeScript-native bir AI framework'üdür.</p>
);

export const body: ReactElement = (
  <>
    <p>
      Mastra, LangChain tarzı ilkelleri &mdash; ajanlar, araçlar, bellek, RAG, iş akışları &mdash; güçlü bir DX odağıyla
      doğal TypeScript'e taşır. Yerel bir geliştirme oyun alanı, yerleşik izleme ve dallanma ve yeniden denemelerle
      gerçek bir orkestratöre benzeyen bir iş akışı motoru sunar. Node, Vercel, Cloudflare Workers veya bağımsız bir
      sunucu olarak dağıtılabilir.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      Mastra, Mastra ekibi (çoğu eski Gatsby mühendisi) tarafından sürdürülen, Elastic-2.0 lisanslı açık kaynaklı bir
      projedir. Model erişimi için Vercel AI SDK üzerine inşa edilmiştir, bu nedenle SDK'nın desteklediği her sağlayıcı
      &mdash; OpenAI, Anthropic, Google, Groq, Ollama &mdash; kullanılabilir. TypeScript-ilk, Zod destekli şemalar
      her yerde.
    </p>

    <h2>Kurulum</h2>
    <pre>{`npm create mastra@latest
# veya mevcut bir projeye ekleyin
npm install @mastra/core @ai-sdk/openai zod`}</pre>

    <h2>İlk çalıştırma</h2>
    <p>Bir ajan tanımlayın ve çağırın &mdash; localhost:4111'deki oyun alanı size ücretsiz bir sohbet arayüzü sunar:</p>
    <pre>{`import { Agent } from "@mastra/core/agent"
import { openai } from "@ai-sdk/openai"

export const assistant = new Agent({
  name: "assistant",
  instructions: "Sen kısa ve öz bir kodlama yardımcısısın.",
  model: openai("gpt-4o-mini"),
})

const { text } = await assistant.generate("useEffect'i 2 satırda açıkla.")
console.log(text)`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>createWorkflow().step().then().branch() ile türlü girdilere sahip dayanıklı çok adımlı boru hatları oluşturun.</li>
      <li>createTool ve bir Zod şeması ile tanımlanan araçları ekleyin &mdash; Mastra JSON-şema dönüşümünü halleder.</li>
      <li>CI'da ajan çıktılarını altın veri kümelerine karşı puanlamak için değerlendirmeler (mastra/evals) ekleyin.</li>
    </ul>

    <h2>Püf noktaları ve ipuçları</h2>
    <p>
      Mastra genç ve 1.0 öncesi &mdash; API'ler küçük sürümler arasında hala değişiyor. Yükseltmeden önce bir
      package-lock dosyasını kaydedin ve değişiklik günlüğünü okuyun. Depolama katmanı varsayılan olarak LibSQL
      dosya-diskte kullanır, bu geliştirme için uygundur ancak üretimde Postgres veya Upstash ile değiştirilmesi gerekir.
    </p>
    <p>
      Mastra, Vercel AI SDK üzerinde çalıştığı için, oradaki herhangi bir tuhaflık buraya da yansır &mdash; sağlayıcılar
      arasında araç çağrısı formatlarında ara sıra yapılan kırıcı değişiklikler dahil. Değiştirmeyi planlıyorsanız
      modeller arasında entegrasyon testi yapın.
    </p>

    <h2>Kimler için</h2>
    <p>
      Python eğitimlerini JS'ye çevirmekten bıkmış TypeScript ekipleri. İpucu: sadece bir ajana ihtiyacınız olsa bile,
      bir İş Akışı ile başlayın &mdash; yeniden denemeler ve izleme ücretsizdir ve bir araç çağrısı zaman aşımına
      uğradığında ilk seferde bunlara ihtiyacınız olacak.
    </p>
  </>
);