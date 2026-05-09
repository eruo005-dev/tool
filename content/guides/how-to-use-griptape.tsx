import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Griptape, güçlü güvenlik önlemleri, prompt dışı veri işleme ve yeniden kullanılabilir Görevler ile AI ajanları ve iş akışları oluşturmak için modüler bir Python framework'üdür.</p>);

export const body: ReactElement = (
  <>
    <p>Griptape pragmatik bir duruş sergiler: hassas verileri prompt'un dışında tutar, yapılandırılmış Kural Setleri ile kuralları uygular ve ajanın üzerinde düşündüğü şeyleri (Görevler) hatırladığı şeylerden (Bellek) ayırır. Üretimde davranışları hakkında akıl yürütebilecekleri ajanlar isteyen ekipler için tasarlanmıştır.</p>
    <h2>Ne olduğu</h2>
    <p>Temel yapı taşları Yapılar (Ajan, İş Akışı, Pipeline), Görevler (prompt, araç, kod yürütme), Araçlar (çağrılabilir entegrasyonlar), Kural Setleri (kısıtlamalar) ve Sürücülerdir (takılabilir model/depolama arka uçları). En belirgin özellik "prompt dışı" veridir: büyük araç çıktıları Görev Belleği'ne gider ve model, bunları bağlama yeniden enjekte etmek yerine bir tanıtıcı ile referans alır.</p>
    <h2>Kurulum / kayıt</h2>
    <pre>{`# Python 3.9+
pip install griptape

# Bir model sağlayıcı anahtarı ayarlayın
export OPENAI_API_KEY=sk-...
# veya ANTHROPIC_API_KEY, ya da herhangi bir Sürücü yapılandırın

# İsteğe bağlı barındırılan platform: https://cloud.griptape.ai`}</pre>
    <h2>İlk oturum</h2>
    <p>Bir Ajan oluşturun, ona araçlar verin ve bir prompt çalıştırın. Griptape sizin için araç çağırma döngüsünü, belleği ve kural uygulamayı halleder.</p>
    <pre>{`$ python
from griptape.structures import Agent
from griptape.tools import WebScraperTool, FileManagerTool
from griptape.rules import Ruleset, Rule

agent = Agent(
    tools=[WebScraperTool(off_prompt=True), FileManagerTool()],
    rulesets=[Ruleset("security", rules=[Rule("Never fetch URLs outside example.com")])],
)
agent.run("Summarize https://example.com/pricing and save it to pricing.md")`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>1. Her Görevin çıktısının bir sonrakini beslediği bir Pipeline oluşturun &mdash; kazıma, özetleme ve e-posta akışları için kullanışlıdır.</li>
      <li>2. Görevler paralel olarak çalışabildiğinde, örneğin birden fazla kaynağı araştırırken, bir İş Akışı (DAG tarzı) kullanın.</li>
      <li>3. Büyük yapıları Görev Belleği'nde saklayın, böylece sonraki Görevler modelin ham baytları asla görmeden bunlara referans verebilir.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Prompt dışı desen en önemli özelliktir ve aynı zamanda yanlış yapılandırılması en kolay olanıdır &mdash; çıktısı <a href="/learn/context-window">bağlam pencerenizi</a> şişirebilecek veya PII sızdırabilecek herhangi bir araçta off_prompt=True ayarlayın. Kural Setleri, promptlama yoluyla uygulanan yumuşak kısıtlamalardır, bu nedenle güvenlik açısından kritik her şey için bunları sert güvenlik önlemleri (izin listeleri, sanal alan) ile birleştirin.</p>
    <p>Sürücüler, OpenAI'i Anthropic veya yerel bir modelle değiştirmeyi kolaylaştırır, ancak embedding ve vektör deposu Sürücüleri bir pipeline boyunca tutarlı bir şekilde yapılandırılmalıdır &mdash; uyumsuz boyutlar sessizce almayı bozacaktır. Griptape Cloud, dizüstü bilgisayarınızda istemediğiniz uzun süreli işler için kullanışlıdır.</p>
    <h2>Kimler için</h2>
    <p>Gerçek verilere dokunan ajanlar oluşturan Python ekipleri &mdash; kazıma, ETL, müşteri iletişimleri &mdash; ve geniş bir eklenti ekosistemi yerine kompozisyon, kurallar ve prompt dışı bellek gerektirenler.</p>
  </>
);