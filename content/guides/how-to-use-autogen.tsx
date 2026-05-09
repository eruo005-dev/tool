import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>Microsoft AutoGen, çoklu ajan <a href="/learn/llm">LLM</a> uygulamaları oluşturmak için konuşma yoluyla sorunları çözen açık kaynaklı bir framework'tür.</p>
);

export const body: ReactElement = (
  <>
    <p>
      AutoGen, AI iş akışlarını uzmanlaşmış ajanlar arasındaki konuşmalar olarak ele alır. Prompt'ları zincirlemek yerine,
      kod yazabilen bir AssistantAgent, kodu çalıştırabilen bir UserProxyAgent ve isteğe bağlı olarak birçok ajan arasında
      sıra yönlendirmesi yapan bir grup sohbet yöneticisi tanımlarsınız. Döngü, bir sonlandırma koşulu karşılanana kadar
      devam eder &mdash; bir regex eşleşmesi, maksimum tur sınırı veya bir insanın &ldquo;çıkış&rdquo; demesi. Sonuç,
      bir boru hattından çok bir ekip toplantısı gibi hissettirir.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      AutoGen, Microsoft Research tarafından geliştirilmekte ve MIT lisansı altında yayınlanmaktadır. Mevcut sürüm AutoGen 0.4+ olup,
      üç pakete ayrılır: autogen-core (olay odaklı çalışma zamanı), autogen-agentchat (çoğu kullanıcının dokunduğu üst düzey sohbet API'si)
      ve autogen-ext (model istemcileri ve araçlar). Birincil dil Python'dur; bir .NET sürümü de mevcuttur.
    </p>

    <h2>Kurulum</h2>
    <pre>{`pip install -U "autogen-agentchat" "autogen-ext[openai]"
# veya klasik 0.2 API'si için
pip install pyautogen`}</pre>

    <h2>İlk çalıştırma</h2>
    <p>Araçları çağırabilen ve TERMINATE dediğinde durabilen minimal iki ajanlı bir asistan:</p>
    <pre>{`import asyncio
from autogen_agentchat.agents import AssistantAgent
from autogen_ext.models.openai import OpenAIChatCompletionClient

async def main():
    model = OpenAIChatCompletionClient(model="gpt-4o-mini")
    agent = AssistantAgent("writer", model_client=model)
    result = await agent.run(task="3 satırlık bir ürün sloganı yaz.")
    print(result.messages[-1].content)

asyncio.run(main())`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Bir AssistantAgent'ı, code_execution_config ile Docker'da Python çalıştıracak şekilde ayarlanmış bir UserProxyAgent ile eşleştirin.</li>
      <li>Zorlu görevler için bir planlayıcı, kodlayıcı ve eleştirmen ajanından oluşan bir RoundRobinGroupChat oluşturun.</li>
      <li>Her şeyi, yapıştırıcı kod yazmadan prototip oluşturmak için AutoGen Studio'nun web arayüzü ile sarın.</li>
    </ul>

    <h2>Tuzaklar ve ipuçları</h2>
    <p>
      0.2'den 0.4'e geçiş tam bir yeniden yazımdı &mdash; bloglarda bulduğunuz eğitimler artık var olmayan isimleri içerebilir.
      Proje başına tek bir ana sürüm hattına bağlı kalın. Ayrıca sonlandırmaya dikkat edin: TextMentionTermination veya MaxMessageTermination olmadan,
      ajanlar kibarca sonsuza kadar döngüye girip token bütçenizi yakabilir.
    </p>
    <p>
      Kod çalıştırma güçlü ama tehlikelidir. UserProxyAgent'ın yürütücüsünü her zaman ana bilgisayar kabuğuna değil, sanal alana alınmış bir Docker imajına
      yönlendirin ve modellerin kodunuzu bozamaması için repo kök dizininizin dışında bir çalışma dizini ayarlayın.
    </p>

    <h2>Kimler için</h2>
    <p>
      Tek bir LLM çağrısının ötesinde ajan desenlerini keşfeden araştırmacılar ve arka uç mühendisleri. İpucu: iki ajanla başlayın;
      çiftin görevi çözemeyeceği somut bir neden belirleyemediğiniz sürece üçüncüyü eklemeyin.
    </p>
  </>
);