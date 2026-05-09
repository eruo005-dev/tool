import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    OpenHands (eski adıyla OpenDevin), kendinizin çalıştırdığı açık kaynaklı, otonom bir kodlama aracısıdır. Bir depoyu işaret eder, ona bir görev verirsiniz; plan yapar, dosyaları düzenler, bir kabuk çalıştırır ve görev başarılı olana kadar tekrarlar. Devin'e en yakın açık kaynak alternatifidir — karşılığında altyapıyı ve API anahtarını siz sağlarsınız.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>OpenHands aslında nedir</h2>
    <p>
      OpenHands, All Hands AI ekibi ve geniş bir katkıda bulunanlar topluluğu tarafından sürdürülen bir Python + TypeScript projesidir. Bir web arayüzü, başsız bir mod ve bir dizi aracı kişiliği sunar (varsayılan CodeActAgent'dır). Aracı, sandbox'lanmış bir Docker konteyneri içinde çalışır; bu, ana makinenize dokunmadan ona gerçek bir kabuk, bir tarayıcı ve bir dosya düzenleyici sağlar. Siz <a href="/learn/llm">LLM</a>'yi getirirsiniz — Anthropic, OpenAI, Groq, LiteLLM aracılığıyla yerel modeller veya OpenAI uyumlu herhangi bir şeyle konuşur.
    </p>

    <h2>Kurulum</h2>
    <p>
      En hızlı yol, önceden oluşturulmuş Docker imajıdır. Docker Desktop (veya motor + compose) ve kullanmayı planladığınız model için bir API anahtarına ihtiyacınız vardır.
    </p>
    <pre>{`docker run -it --rm --pull=always \\
  -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.all-hands.dev/all-hands-ai/runtime:latest \\
  -e LOG_ALL_EVENTS=true \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -v ~/.openhands:/.openhands \\
  -p 3000:3000 \\
  --name openhands-app \\
  docker.all-hands.dev/all-hands-ai/openhands:latest`}</pre>
    <p>
      <code>http://localhost:3000</code> adresini açın, API anahtarınızı ayarlar sayfasına yapıştırın, bir model seçin (Claude Opus 4.7 ve GPT-5 en yetenekli seçeneklerdir) ve kullanmaya başlayın.
    </p>

    <h2>İlk oturumunuz</h2>
    <p>
      Bir depoyu çekmek için GitHub bağlayıcısını kullanın veya <code>-v /path/to/repo:/workspace</code> ile yerel bir klasörü bağlayın. Küçük bir şeyle başlayın: "<code>{`{ "ok": true }`}</code> döndüren bir <code>/health</code> uç noktası ve geçen bir test ekleyin." Olay akışını izleyin — düşündüğünü, <code>ls</code> çalıştırdığını, dosyaları açtığını, düzenlemeler yaptığını, testleri çalıştırdığını ve başarısızlıkta yeniden denediğini göreceksiniz. Çığırından çıkarsa, durdur düğmesine basın. Döngü budur.
    </p>

    <h2>Gerçekçi bir iş akışı</h2>
    <p>
      OpenHands'i bir dalda çalışan bir stajyer olarak düşünün. Bir özellik dalı oluşturun, görevi kısa bir brifing olarak yazın (ne, nerede, kısıtlamalar, tamamlama kriterleri) ve çalışmasına izin verin. Değişiklikleri bir PR gibi inceleyin — testleri yerel olarak çalıştırın, ilgisiz düzenlemeleri tarayın, commit mesajlarına bakın. Birkaç dosyadan daha büyük herhangi bir şey için, görevi alt görevlere bölün ve bağlamı dar ve ucuz tutmak için bunları ayrı oturumlar olarak çalıştırın.
    </p>

    <h2>Tuzaklar ve sınırlamalar</h2>
    <p>
      En büyüğü maliyettir — döngü yapan bir aracı, token'ları hızla tüketir. Ayarlarda maksimum bir yineleme sınırı belirleyin (20–40 makul bir başlangıç sınırıdır) ve API panelinizi izleyin. Docker içinde Docker gereksinimi gerçektir; Windows/WSL'de ara sıra soket izni sorunlarıyla karşılaşırsınız — kullanıcınızı <code>docker</code> grubuna ekleyerek düzeltin. Ayrıca, testleri olmayan depolarda "bitti" sinyali olmadığı için zorlanır. Kendi çalışmasını doğrulaması için bir yol verin.
    </p>

    <h2>Ne ZAMAN kullanılmamalı</h2>
    <p>
      Tek dosyalı otomatik tamamlama için OpenHands'i atlayın — GitHub Copilot veya Cursor daha hızlıdır. Belirleyici düzenlemeler gerektiren üretim olayları için atlayın — terminalde Claude Code kullanan bir insan, bir planlama aracısından gecikme açısından daha iyidir. Ve sandbox belgelerini okuyup model sağlayıcınızın veri politikasının risk toleransınıza uyup uymadığına karar verene kadar, sırlarla dolu özel bir depoya yöneltmeyin. Operasyon işi olmayan barındırılan alternatifler için Devin ve Replit Agent kılavuzlarımıza bakın.
    </p>
  </>
);