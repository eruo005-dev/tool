import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    smolagents, Hugging Face'in minimalist ajan kütüphanesidir ve bir dil modelinin, yaklaşık bin satır kaynak kodla, araçları çağırmanın birincil yolu olarak Python kodu yazmasını sağlar.
  </p>
);

export const body: ReactElement = (
  <>
    <p>
      smolagents, Hugging Face tarafından geliştirilen, kod yazarak ve çalıştırarak akıl yürüten <a href="/learn/llm">LLM</a> destekli ajanlar oluşturmak için açık kaynaklı bir Python framework'üdür. Alışılagelmiş JSON araç çağrısı dansı yerine, varsayılan ajan (<code>CodeAgent</code>) modelden kayıtlı araçları çağıran bir Python kodu parçacığı üretmesini ister ve ardından bunu bir sanal alanda çalıştırır. Araştırmacılar bunu ReAct tarzı ajan makalelerini yeniden oluşturmak için, girişimler LangChain'i dahil etmeden asistan prototipleri yapmak için ve hobici ler tüm kütüphaneyi tek bir öğleden sonra okuyup anlayabildikleri için kullanır. Apache-2.0 lisanslıdır ve Hugging Face ekibi tarafından bakımı yapılır.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      Kütüphane iki ana sınıf sunar: Araçları düzenlemek için Python yazan <code>CodeAgent</code> ve standart JSON fonksiyon çağrılarını kullanan <code>ToolCallingAgent</code>. Modeller <code>HfApiEngine</code>, <code>LiteLLMModel</code> veya <code>TransformersModel</code> gibi motorlar aracılığıyla bağlanır. Araçlar <code>@tool</code> ile dekore edilmiş sıradan Python fonksiyonlarıdır ve yürütme kısıtlı bir yerel yorumlayıcıda veya bir E2B uzak sanal alanında gerçekleşir.
    </p>

    <h2>Kurulum</h2>
    <pre>{`pip install smolagents
# sanal alanda yürütme ve web tarama için isteğe bağlı ekstralar
pip install "smolagents[e2b,litellm]"`}</pre>

    <h2>İlk çalıştırma</h2>
    <p>
      Bir Hugging Face <a href="/learn/inference">Inference</a> API modeline karşı kod yazan bir ajan başlatın ve ona çok adımlı bir soru sorun. Ajan araç çağrılarına karar verecek ve ilerledikçe akıl yürütmesini yazdıracaktır.
    </p>
    <pre>{`$ python -c "
from smolagents import CodeAgent, HfApiEngine, DuckDuckGoSearchTool
agent = CodeAgent(tools=[DuckDuckGoSearchTool()], model=HfApiEngine())
agent.run('Eyfel Kulesi\'nin feet cinsinden yüksekliği nedir?')
"
Düşünce: Eyfel Kulesi'nin yüksekliği için web'de arama yapmalıyım.
Kod: results = web_search(query="Eyfel Kulesi yüksekliği")
Son cevap: 1.083 feet (330 m)`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Özel bir API'yi sarın &mdash; bir fonksiyonu @tool ile dekore edin ve araçlar listesine ekleyin, işte bu kadar.</li>
      <li>Maliyet için modelleri değiştirin &mdash; aynı ajantı Claude, GPT-4o veya yerel bir Ollama uç noktasına yönlendirmek için LiteLLMModel kullanın.</li>
      <li>Güvenli yürütme &mdash; oluşturulan Python'un dizüstü bilgisayarınız yerine uzak bir sanal alanda çalışması için executor_type="e2b" olarak ayarlayın.</li>
    </ul>

    <h2>Tuzaklar ve ipuçları</h2>
    <p>
      CodeAgent güçlüdür ancak tehlikelidir: varsayılan olarak, model tarafından oluşturulan Python'u, sınırlı bir izin verilen içe aktarma listesiyle ortamınıza karşı yürütür. Yerel yorumlayıcıyı "exec'ten daha güvenli" olarak değerlendirin, "güvenli" olarak değil &mdash; üretime yönelik her şeyi E2B veya Docker'ın arkasına koyun. Daha küçük modeller (&lt;14B) genellikle kod yazma formatında başarısız olur ve sözdizimi hataları üretir; bunlar için ToolCallingAgent'e geri dönün.
    </p>
    <p>
      Gecikme birikir çünkü her adım tam bir model dönüşü artı bir Python yürütmesidir. Etkileşimli kullanım için max_steps'i 6 veya 8 ile sınırlayın ve bir çalıştırmadan sonra her zaman ajanın <code>logs</code> özniteliğini günlüğe kaydedin &mdash; bir gidişatın neden ters gittiğini hata ayıklamanın tek yolu budur.
    </p>

    <h2>Kimin için</h2>
    <p>
      smolagents, ajan döngüsünü kara kutu olarak ele almak yerine uçtan uca anlamak isteyen Python geliştiricileri için uygundur. <code>smolagents/agents.py</code> dosyasını okuyarak başlayın &mdash; tek oturuşta gözden geçirebilecek kadar kısadır ve daha sonra saatlerce hata ayıklamadan kurtarırsınız.
    </p>
  </>
);