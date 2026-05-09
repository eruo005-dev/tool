import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    smolagents, Hugging Face'in minimalist ajan kütüphanesidir ve bir dil modelinin araçları çağırmak için birincil yöntem olarak Python kodu yazmasını sağlar; yaklaşık bin satır kaynak koddan oluşur.
  </p>
);

export const body: ReactElement = (
  <>
    <p>
      smolagents, Hugging Face tarafından geliştirilen, kod yazarak ve çalıştırarak akıl yürüten <a href="/learn/llm">LLM</a> destekli ajanlar oluşturmak için açık kaynaklı bir Python çerçevesidir. Olağan JSON araç çağrısı dansı yerine, varsayılan ajan &mdash; <code>CodeAgent</code> &mdash; modelden kayıtlı araçları çağıran bir Python parçacığı yayınlamasını ister ve ardından bunu bir sanal alanda çalıştırır. Araştırmacılar bunu ReAct tarzı ajan makalelerini kopyalamak için, girişimler LangChain'i dahil etmeden asistan prototipleri oluşturmak için ve hobici ise tüm kütüphanenin tek bir öğleden sonra okunabilecek kadar küçük olması nedeniyle kullanır. Apache-2.0 lisanslıdır ve Hugging Face ekibi tarafından bakımı yapılır.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      Kütüphane iki ana sınıf sunar: araçları düzenlemek için Python yazan <code>CodeAgent</code> ve standart JSON fonksiyon çağrılarını kullanan <code>ToolCallingAgent</code>. Modeller, <code>HfApiEngine</code>, <code>LiteLLMModel</code> veya <code>TransformersModel</code> gibi motorlar aracılığıyla bağlanır. Araçlar, <code>@tool</code> ile dekore edilmiş sıradan Python fonksiyonlarıdır ve yürütme, kısıtlı bir yerel yorumlayıcıda veya bir E2B uzak sanal alanında gerçekleşir.
    </p>

    <h2>Kurulum</h2>
    <pre>{`pip install smolagents
# sanal alan yürütme ve web taraması için isteğe bağlı ekstralar
pip install "smolagents[e2b,litellm]"`}</pre>

    <h2>İlk çalıştırma</h2>
    <p>
      Bir Hugging Face <a href="/learn/inference">Inference</a> API modeline karşı kod yazan bir ajan başlatın ve ona çok adımlı bir soru sorun. Ajan, araç çağrılarına karar verecek ve ilerledikçe akıl yürütmesini yazdıracaktır.
    </p>
    <pre>{`$ python -c "
from smolagents import CodeAgent, HfApiEngine, DuckDuckGoSearchTool
agent = CodeAgent(tools=[DuckDuckGoSearchTool()], model=HfApiEngine())
agent.run('Eyfel Kulesi\\'nin yüksekliği fit cinsinden ne kadardır?')
"
Düşünce: Eyfel Kulesi'nin yüksekliğini internette aramalıyım.
Kod: results = web_search(query="Eyfel Kulesi yüksekliği")
Son cevap: 1.083 fit (330 m)`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Özel bir API'yi sarın &mdash; bir fonksiyonu @tool ile dekore edin ve araçlar listesine ekleyin, işte bu kadar.</li>
      <li>Maliyet için modelleri değiştirin &mdash; aynı ajanı Claude, GPT-4o veya yerel bir Ollama uç noktasına yönlendirmek için LiteLLMModel kullanın.</li>
      <li>Güvenli yürütme &mdash; oluşturulan Python'un dizüstü bilgisayarınız yerine uzak bir sanal alanda çalışması için executor_type=&ldquo;e2b&rdquo; olarak ayarlayın.</li>
    </ul>

    <h2>Tuzaklar ve ipuçları</h2>
    <p>
      CodeAgent güçlü ama tehlikelidir: varsayılan olarak, model tarafından oluşturulan Python'u sınırlı bir izin verilen içe aktarma listesiyle ortamınıza karşı çalıştırır. Yerel yorumlayıcıyı &ldquo;exec'ten daha güvenli&rdquo; olarak değerlendirin, &ldquo;güvenli&rdquo; olarak değil &mdash; üretime yönelik her şeyi E2B veya Docker'ın arkasına koyun. Daha küçük modeller (&lt;14B) genellikle kod yazma formatında başarısız olur ve sözdizimi hataları üretir; bunlar için ToolCallingAgent'e geri dönün.
    </p>
    <p>
      Gecikme birikir çünkü her adım tam bir model dönüşü artı bir Python yürütmesidir. Etkileşimli kullanım için max_steps'i 6 veya 8 ile sınırlayın ve bir çalıştırmadan sonra ajanın <code>logs</code> özniteliğini her zaman günlüğe kaydedin &mdash; bir gidişatın neden yanlış gittiğini hata ayıklamanın tek yolu budur.
    </p>

    <h2>Kimler için</h2>
    <p>
      smolagents, ajan döngülerini kara kutu olarak ele almak yerine uçtan uca anlamak isteyen Python geliştiricilerine uygundur. <code>smolagents/agents.py</code> dosyasını okuyarak başlayın &mdash; tek oturuşta gözden geçirilecek kadar kısadır ve daha sonra saatlerce hata ayıklamadan kurtarırsınız.
    </p>
  </>
);
===END FILE===