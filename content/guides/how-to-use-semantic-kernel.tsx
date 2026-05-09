import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Semantic Kernel, Microsoft&rsquo;un C#, Python veya Java ile LLM'leri, eklentileri ve planlayıcıları düzenlemek için geliştirdiği açık kaynaklı SDK'sıdır.</p>);

export const body: ReactElement = (
  <>
    <p>LangChain genişlik ve deney için optimize edilirken, Semantic Kernel kurumsal uygulamaları hedefler: güçlü tipleme, bağımlılık enjeksiyonu, telemetri ve Azure OpenAI için birinci sınıf destek. Microsoft'un kendi Copilot yüzeyinin çoğuna güç veren çerçevedir.</p>
    <h2>Ne olduğu</h2>
    <p>Semantic Kernel, AI hizmetlerini (sohbet, gömme, görüntü), eklentileri (modelin çağırabileceği çağrılabilir işlevler), belleği (vektör depoları) ve bir hedefi işlev çağrıları dizisine dönüştüren planlayıcıları birbirine bağlayan bir Kernel nesnesi sunar. NuGet, PyPI ve Maven paketleri olarak diller arasında neredeyse eşitlikle kullanılabilir.</p>
    <h2>Kurulum / kaydolma</h2>
    <pre>{`# Python
pip install semantic-kernel

# .NET
dotnet add package Microsoft.SemanticKernel

# Java
# pom.xml'e ekleyin:
# <dependency>com.microsoft.semantic-kernel:semantickernel-api</dependency>

# Bir OpenAI veya Azure OpenAI anahtarı gerekli`}</pre>
    <h2>İlk oturum</h2>
    <p>Bir Kernel oluşturun, bir sohbet hizmeti kaydedin ve bir eklenti ekleyin. Model daha sonra, ilgili olduğuna karar verdiğinde eklenti işlevlerinizi otomatik olarak çağırabilir.</p>
    <pre>{`$ python
import semantic_kernel as sk
from semantic_kernel.connectors.ai.open_ai import OpenAIChatCompletion

kernel = sk.Kernel()
kernel.add_service(OpenAIChatCompletion("gpt-4o", api_key))
kernel.add_plugin(parent_directory="./plugins", plugin_name="Weather")

reply = await kernel.invoke_prompt("What's the weather in Oslo?")
print(reply)`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>1. Mevcut REST API'lerini eklenti olarak sarın &mdash; model, uygun olduğunda bunları <a href="/learn/function-calling">işlev çağırma</a> yoluyla çağıracaktır.</li>
      <li>2. Karmaşık hedefleri sıralı eklenti çağrılarına ayırmak için Handlebars veya Stepwise planlayıcısını kullanın.</li>
      <li>3. Alım artırımlı sohbet için bir bellek deposu (Azure AI Search, Qdrant, Redis) ekleyin.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Semantic Kernel büyük ölçüde bağımlılık enjeksiyonuna dayanır; özellikle .NET'te, bir Kernel'i manuel olarak oluşturmak yerine hizmetleri ana bilgisayar oluşturucuya kaydedin &mdash; böylece doğru günlük kaydı ve yapılandırma elde edersiniz. Uzun eklenti zincirlerinde hata ayıklayabilmek için OpenTelemetry entegrasyonunu erken kullanın.</p>
    <p>Planlayıcılar token'ları hızla tüketebilir; iş akışı bilindiğinde açık işlev kompozisyonunu tercih edin ve planlayıcıları açık uçlu hedefler için saklayın. Python ve .NET SDK'ları bazen farklılaşır &mdash; üretimde sürümleri sabitleyin ve önizleme paketlerindeki kırıcı değişiklikler için sürüm notlarını kontrol edin.</p>
    <h2>Kimin için olduğu</h2>
    <p>Özellikle Azure'da, araştırma düzeyinde bir çerçeve yerine güçlü tipleme ve gözlemlenebilirliğe sahip desteklenen bir SDK isteyen, Copilot tarzı özellikler oluşturan kurumsal ekipler.</p>
  </>
);
===END FILE===