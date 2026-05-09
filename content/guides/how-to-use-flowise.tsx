import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Flowise, Python yazmak yerine bir tuval üzerinde düğümleri sürükleyerek LangChain akışları oluşturmanızı sağlar.</p>);

export const body: ReactElement = (
  <>
    <p>Flowise, <a href="/learn/llm">LLM</a> orkestrasyonu için açık kaynaklı bir görsel oluşturucudur. Bir tuval üzerinde LLM'ler, istemler, bellek, vektör depoları ve araçlar gibi düğümleri birbirine bağlarsınız ve çalışan bir API uç noktası oluşturur. Arkasında LangChain JS vardır, bu nedenle LangChain'in yapabileceği her şeyi Flowise, kod yazmadan birbirine bağlayabilir.</p>
    <h2>Ne olduğu</h2>
    <p>React Flow tuvaline sahip bir Node.js uygulamasıdır. Her düğüm, bir LangChain sınıfının etrafında ince bir sarmalayıcıdır. Çalışma zamanı, sohbet akışı uç noktasına bir istek geldiğinde grafiği yürütür ve stüdyo, siz oluştururken bir yan panelde konuşmaları test etmenize olanak tanır.</p>
    <h2>Kurulum</h2>
    <pre>{`# npx hızlı başlangıç
npx flowise start
# veya docker
docker run -d -p 3000:3000 \\
  -v ~/.flowise:/root/.flowise \\
  flowiseai/flowise`}</pre>
    <h2>İlk çalıştırma</h2>
    <p><code>http://localhost:3000</code> adresini açın, Yeni Sohbet Akışı'na tıklayın ve tuval üzerine bir Sohbet Modeli düğümü, bir Konuşma Zinciri düğümü ve bir Arabellek Bellek düğümü bırakın. Bunları bağlayın, model düğümüne OpenAI anahtarınızı ekleyin ve test etmek için mor sohbet simgesine tıklayın.</p>
    <pre>{`$ curl -X POST http://localhost:3000/api/v1/prediction/<flowId> \\
  -H "Content-Type: application/json" \\
  -d '{"question":"hello"}'
{"text":"Merhaba! Size nasıl yardımcı olabilirim?"}`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Sıfırdan oluşturmak yerine bir pazar yeri şablonundan (RAG, SQL aracısı, çoklu aracı) başlayın, ardından özelleştirin.</li>
      <li>API anahtarlarının dışa aktarılan akışlara gömülmemesi için Kimlik Bilgileri kasasını kullanın.</li>
      <li>Oluşturulan sohbet widget'ını, sağlanan &lt;script&gt; snippet'ı ile bir web sitesine gömün, arka uç yapıştırıcısı gerekmez.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Akışlar arka planda JSON'dur, ancak düğüm sürümleri Flowise sürümleri arasında değişir. Akışları düzenli olarak dışa aktarın ve bir yükseltmeden sonra test edin &mdash; bir düğümde yeniden adlandırılan bir giriş, bağlantıyı sessizce düşürecek ve aracınız çalışma zamanında yanlış davranacaktır.</p>
    <p>Tuval, LangChain'i soyutlar ancak keskin kenarlarını gizlemez. Belirteç pencereleri, <a href="/learn/stream">akış</a> tuhaflıkları ve araç çağırma döngüleri yine de sizi zorlayacaktır. Yineleme yaparken tarayıcı geliştirici araçlarını sunucu günlükleri sekmesinde açık tutun &mdash; gerçek hatalar orada ortaya çıkar.</p>
    <h2>Kimler için olduğu</h2>
    <p>Görsel düşünen geliştiriciler, kod yazmadan önce bir aracı tanıtmak isteyen prototipçiler ve mühendis olmayan bir ürün yöneticisini LangChain bilgisine sahip bir geliştiriciyle eşleştiren ekipler. Üretim düzeyindeki iş yükleri genellikle ham koda geçer, ancak Flowise sizi hızlı bir şekilde çalışan bir prototipe ulaştırır.</p>
  </>
);