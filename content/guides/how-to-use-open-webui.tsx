import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Open WebUI, kendi yerel modellerinizin üzerinde ChatGPT tarzı bir arayüz sunar ve içinde RAG ile <a href="/learn/mcp">MCP</a> desteği barındırır.</p>);

export const body: ReactElement = (
  <>
    <p>Open WebUI (eski adıyla Ollama WebUI), açık kaynak ekosistemindeki en cilalı, kendi kendine barındırılan sohbet ön yüzüdür. Varsayılan olarak Ollama'yı hedef alır ancak herhangi bir OpenAI uyumlu API ile çalışır, belge RAG'ını paketler ve yakın zamanda MCP araç desteği eklemiştir. Tek bir Docker komutuyla, tamamen donanımınızda çalışan özel bir ChatGPT klonu elde edersiniz.</p>
    <h2>Ne olduğu</h2>
    <p>Bir FastAPI hizmeti tarafından desteklenen bir SvelteKit web uygulamasıdır. Kullanıcıları, sohbet geçmişini, model kataloglarını, komut kitaplıklarını ve getirme için yerleşik bir vektör deposunu yönetir. Kutudan çıktığı gibi <code>http://host.docker.internal:11434</code> adresindeki Ollama'ya ve bir yapılandırma paneli aracılığıyla herhangi bir OpenAI uyumlu uç noktaya bağlanır.</p>
    <h2>Kurulum / ayarlama</h2>
    <pre>{`# docker dağıtımı
docker run -d -p 3000:8080 \\
  --add-host=host.docker.internal:host-gateway \\
  -v open-webui:/app/backend/data \\
  --name open-webui --restart always \\
  ghcr.io/open-webui/open-webui:main`}</pre>
    <h2>İlk çalıştırma</h2>
    <p><code>http://localhost:3000</code> adresini açın, yönetici hesabını oluşturun (ilk kayıt her zaman yöneticidir) ve açılır menüden bir model seçin. Ollama yerel olarak çalışıyorsa ve en az bir model çekilmişse, otomatik olarak görünür.</p>
    <pre>{`$ ollama pull llama3.1
$ curl http://localhost:3000
# ardından tarayıcıda sohbet edin`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Sohbete bir PDF bırakın, anında indeksleyin ve ona karşı sorular sorun &mdash; RAG satır içinde gerçekleşir.</li>
      <li>Bir <a href="/learn/system-prompt">sistem komutu</a>, <a href="/learn/temperature-ai">sıcaklık</a> ve bilgi koleksiyonu ile bir &ldquo;model&rdquo; ön ayarı oluşturun, ardından ekibinizle paylaşın.</li>
      <li>Sohbetin harici API'leri (GitHub, dosya sistemi, veritabanları) çağırmasına izin vermek için Ayarlar &rarr; Araçlar bölümünde bir MCP sunucusu kaydedin.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>İlk kayıt yönetici olur, bu nedenle bağlantı noktasını açmadan önce kendinizi kaydedin. Bu adımı atlarsanız ve bir yabancı URL'ye ilk önce ulaşırsa, örneğin sahibi olurlar. Üretim için <code>WEBUI_AUTH=true</code> ayarlayın ve TLS ile bir ters proxy arkasına koyun.</p>
    <p>Güncellemeler hızlı gelir &mdash; bazen haftada birkaç kez. Üretimde <code>main</code> etiketini kovalamak yerine belirli bir görüntü etiketini sabitleyin ve yükseltmeden önce sürüm notlarını okuyun çünkü veritabanı geçişleri yaygındır.</p>
    <h2>Kimler için</h2>
    <p>Yerel veya özel modellerde ChatGPT kullanıcı deneyimi isteyen ekipler ve meraklılar. Ollama çalıştırıyorsanız ve terminalden sıkıldıysanız, bir sonraki kuracağınız ön yüz budur.</p>
  </>
);