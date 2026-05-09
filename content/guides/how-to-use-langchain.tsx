import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>LangChain, Python veya JavaScript'te <a href="/learn/llm">LLM</a> çağrıları, alıcılar, araçlar ve ajanlar oluşturmak için kapsamlı ancak savaşta test edilmiş bir çerçevedir.</p>
);

export const body: ReactElement = (
  <>
    <p>
      LangChain size bir kelime dağarcığı sunar &mdash; istemler, sohbet modelleri, çıktı ayrıştırıcıları, alıcılar, vektör depoları, ajanlar
      &mdash; ve bunları birbirine bağlamak için yapıştırıcı. Modern kompozisyon katmanı LCEL (LangChain Expression Language),
      Runnables'ları zincirlemek için bir boru operatörü kullanır: prompt | model | parser, veri akışının kendisi gibi okunur ve
      <a href="/learn/stream">streaming</a>, toplu işleme ve asenkron çalışmayı ücretsiz olarak sunar.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      LangChain, MIT lisanslıdır ve LangChain Inc. (Harrison Chase ve ekip) tarafından sürdürülmektedir. 2024'te
      langchain-core (Runnables ve arayüzler), langchain (üst düzey zincirler), langchain-openai ve langchain-anthropic gibi ortak paketler
      ve üçüncü taraf entegrasyonları için langchain-community olarak ayrıldı. JavaScript, eşdeğer modüllerle ayrı bir
      monorepoda bulunur.
    </p>

    <h2>Kurulum</h2>
    <pre>{`pip install langchain langchain-openai langchain-community
# JavaScript
npm install langchain @langchain/openai`}</pre>

    <h2>İlk çalıştırma</h2>
    <p>Yapılandırılmış çıktıyla bir soruyu yanıtlayan üç adımlı bir LCEL zinciri:</p>
    <pre>{`from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

prompt = ChatPromptTemplate.from_template("Kısaca cevapla: {q}")
model = ChatOpenAI(model="gpt-4o-mini")
chain = prompt | model | StrOutputParser()

print(chain.invoke({"q": "Gökyüzü neden mavidir?"}))`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Bir Chroma veya pgvector alıcısını bir isteme bağlayarak RAG oluşturun; kalite için bir yeniden sıralayıcı ekleyin.</li>
      <li>Zinciri LangServe veya Flask ile HTTP üzerinden sunun; her çalıştırmayı LangSmith'te izleyin.</li>
      <li>Ajanlar için, eski AgentExecutor yerine LangGraph'ı (kardeş proje) tercih edin &mdash; daha kontrol edilebilirdir.</li>
    </ul>

    <h2>Tuzaklar ve ipuçları</h2>
    <p>
      LangChain'in yüzey alanı çok geniştir ve dokümantasyon kodun gerisinde kalır. Sürümleri sabitleyin, dokümanlar çeliştiğinde kaynağı okuyun
      ve izleyemediğiniz derinlemesine iç içe geçmiş zincirlerden kaçının. Anladığınız 5 satırlık bir zincir, bir eğitimden kopyaladığınız
      50 satırlık bir zincirden daha iyidir.
    </p>
    <p>
      Üretim uyarıları önemlidir: birçok topluluk entegrasyonu topluluk tarafından sürdürülür, yani düzensiz güvenilirlik anlamına gelir.
      Harici araçları yeniden denemeler, zaman aşımları ve devre kesicilerle sarın; bir alıcının SLA içinde döneceğine
      ölçmeden asla güvenmeyin.
    </p>

    <h2>Kimin için</h2>
    <p>
      En geniş entegrasyon ekosistemini isteyen ve karmaşıklık vergisini ödemeye istekli ekipler. İpucu: LangSmith
      izleme, en büyük yaşam kalitesi yükseltmesidir &mdash; ikinci zincirinizi yazmadan önce açın.
    </p>
  </>
);