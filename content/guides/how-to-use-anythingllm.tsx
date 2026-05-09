import { type ReactElement } from "react";

export const intro: ReactElement = (<p>AnythingLLM, özel RAG, çalışma alanları ve ajanları tek bir masaüstü veya Docker uygulamasında paketler.</p>);

export const body: ReactElement = (
  <>
    <p>Mintplex Labs tarafından geliştirilen AnythingLLM, belgelerinizle sohbet etmek için kapsamlı bir platformdur. Veri alımı, gömme, vektör depolama, <a href="/learn/llm">LLM</a> yönlendirme ve temiz bir çalışma alanı arayüzü sunar; böylece beş farklı servisi birbirine bağlamak zorunda kalmazsınız. Kişisel kullanım için bir masaüstü sürümü ve ekip dağıtımları için bir Docker imajı sunar.</p>
    <h2>Ne olduğu</h2>
    <p>Bilgiyi çalışma alanları halinde düzenleyen bir Node/React uygulamasıdır. Her çalışma alanının kendi belgeleri, vektör ad alanı, <a href="/learn/system-prompt">sistem yönergesi</a> ve izin verilen kullanıcıları vardır. Düzinelerce LLM sağlayıcısını (OpenAI, Anthropic, Ollama, LM Studio, Azure) ve değiştirilebilir vektör depolarını (varsayılan olarak LanceDB, Pinecone, Qdrant, Chroma, Weaviate) destekler.</p>
    <h2>Kurulum / ayarlama</h2>
    <pre>{`# docker
docker pull mintplexlabs/anythingllm
docker run -d -p 3001:3001 \\
  --cap-add SYS_ADMIN \\
  -v anythingllm_storage:/app/server/storage \\
  mintplexlabs/anythingllm`}</pre>
    <h2>İlk çalıştırma</h2>
    <p><code>http://localhost:3001</code> adresine gidin, kurulum sihirbazını takip edin, bir LLM sağlayıcısı seçin ve bir API anahtarı girin. Bir çalışma alanı oluşturun, birkaç PDF yükleyin veya bir web sitesine yönlendirin ve sohbet etmeye başlayın &mdash; gömme işlemleri arka planda gerçekleşir.</p>
    <pre>{`$ curl -F "file=@whitepaper.pdf" \\
  http://localhost:3001/api/v1/document/upload
{"success": true, "location": "..."}`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Proje veya müşteri başına bir çalışma alanı oluşturun, böylece bağlamlar asla birbirine karışmaz.</li>
      <li>Ajan sekmesini etkinleştirerek çalışma alanının web araması yapmasını, sayfaları kazımasını veya özel beceriler aracılığıyla SQL çalıştırmasını sağlayın.</li>
      <li>Çalışma alanını, kapsamlı bir API anahtarıyla bir pazarlama sitesinde gömülebilir bir sohbet widget'ı olarak kullanıma sunun.</li>
    </ul>
    <h2>Dikkat edilmesi gerekenler ve ipuçları</h2>
    <p>Masaüstü uygulaması ve Docker sunucusu verileri farklı konumlarda saklar ve senkronize olmaz. Baştan tek bir dağıtım modeli seçin. Masaüstünde başlayıp daha sonra Docker'a geçerseniz, her şeyi yeniden almanız gerekir &mdash; geçiş yolu yoktur.</p>
    <p>Varsayılan parçalama geneldir. Yoğun teknik belgeler için, alım öncesinde çalışma alanı ayarlarında parça boyutunu ve örtüşmeyi artırın, aksi takdirde geri alma kalitesi düşer. Parçalamayı değiştirdikten sonra yeniden gömme işlemi şu anda manuel silme ve yeniden yükleme gerektirir.</p>
    <h2>Kimler için uygun</h2>
    <p>Özel, çok kullanıcılı bir RAG sohbetine ihtiyaç duyan ancak bir tane oluşturmak istemeyen küçük ekipler için. Kullanıcı yönetimiyle belgeleriniz üzerinde ChatGPT benzeri bir deneyim istiyor ve LangChain'e dokunmak istemiyorsanız, AnythingLLM en kısa yoldur.</p>
  </>
);