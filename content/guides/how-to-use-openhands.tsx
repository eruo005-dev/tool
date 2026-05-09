import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    OpenHands (daha önce OpenDevin olarak bilinen proje), kendi başınıza çalıştırdığınız açık kaynaklı
    otonom bir kodlama aracısıdır. Bir repoyu işaret eder, ona bir görev verirsiniz,
    o da plan yapar, dosyaları düzenler, bir kabuk çalıştırır ve görev
    tamamlanana kadar yinelemeye devam eder. Devin'in açık kaynaklı en yakın
    eşdeğeridir; karşılığında altyapıyı ve API anahtarını siz sağlarsınız.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>OpenHands aslında nedir</h2>
    <p>
      OpenHands, All Hands AI ekibi ve geniş bir katkıda bulunan topluluğu tarafından
      sürdürülen bir Python + TypeScript projesidir. Bir web arayüzü, başsız
      bir mod ve bir dizi aracı kişiliği (varsayılan olarak CodeActAgent) sunar.
      Aracı, sandboxlanmış bir Docker konteyneri içinde çalışır; bu sayede gerçek bir
      kabuk, bir tarayıcı ve bir dosya düzenleyicisine sahip olur, ana makinenize
      dokunmaz. <a href="/learn/llm">LLM</a>'yi siz getirirsiniz &mdash; Anthropic, OpenAI, Groq, LiteLLM
      aracılığıyla yerel modeller veya OpenAI uyumlu herhangi bir şeyle konuşur.
    </p>

    <h2>Kurulum</h2>
    <p>
      En hızlı yol, önceden oluşturulmuş Docker imajıdır. Docker Desktop
      (veya engine + compose) ve kullanmayı planladığınız model için bir API anahtarına
      ihtiyacınız vardır.
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
      <code>http://localhost:3000</code> adresini açın, ayarlar sayfasında API anahtarınızı
      yapıştırın, bir model seçin (Claude Opus 4.7 ve GPT-5 en
      güçlü seçeneklerdir) ve kullanmaya başlayın.
    </p>

    <h2>İlk oturumunuz</h2>
    <p>
      Bir repoyu çekmek için GitHub bağlayıcısını kullanın veya yerel bir klasörü
      <code>-v /path/to/repo:/workspace</code> ile bağlayın. Sınırlı bir şeyle başlayın:
      &ldquo;<code>{`{ "ok": true }`}</code> döndüren bir <code>/health</code> uç noktası
      ve geçen bir test ekleyin.&rdquo; Olay akışını izleyin &mdash;
      düşündüğünü, <code>ls</code> çalıştırdığını, dosyaları açtığını, düzenlemeler yaptığını,
      testleri çalıştırdığını ve başarısızlıkta yeniden denediğini göreceksiniz. Eğer
      kontrolden çıkarsa, durdur'a tıklayın. Döngü bu kadar.
    </p>

    <h2>Gerçekçi bir iş akışı</h2>
    <p>
      OpenHands'i bir branch üzerinde çalışan bir stajyer gibi düşünün. Bir özellik branch'i
      oluşturun, görevi kısa bir özet olarak yazın (ne, nerede, kısıtlamalar, tamamlanma
      kriterleri) ve çalışmasına izin verin. Değişiklikleri bir PR gibi inceleyin &mdash; testleri
      yerel olarak çalıştırın, ilgisiz düzenlemeleri tarayın, commit mesajlarına
      bakın. Birkaç dosyadan büyük herhangi bir şey için, görevi
      alt görevlere bölün ve bunları ayrı oturumlar olarak çalıştırın, böylece bağlam
      dar ve ucuz kalır.
    </p>

    <h2>Tuzaklar ve sınırlamalar</h2>
    <p>
      En büyüğü maliyettir &mdash; döngü yapan bir aracı hızla token tüketir.
      Ayarlarda maksimum yineleme sınırı belirleyin (20&ndash;40 makul bir
      başlangıç ​​tavanıdır) ve API panelinizi izleyin. Docker-İçinde-Docker
      gereksinimi gerçektir; Windows/WSL'de ara sıra soket
      izin sorunlarıyla karşılaşırsınız &mdash; kullanıcınızı
      <code>docker</code> grubuna ekleyerek düzeltin. Ayrıca, &ldquo;tamamlandı&rdquo; sinyali
      olmadığı için testleri olmayan repolarda zorlanır. Kendi çalışmasını
      doğrulaması için bir yol verin.
    </p>

    <h2>Ne ZAMAN kullanılmamalı</h2>
    <p>
      Tek dosyalı otomatik tamamlama için OpenHands'i atlayın &mdash; GitHub Copilot veya
      Cursor daha hızlıdır. Belirleyici düzenlemeler gerektiren üretim
      olayları için atlayın &mdash; terminalde Claude Code kullanan bir insan,
      planlama aracısını gecikme konusunda geçecektir. Ve sırlarla dolu özel bir repoya,
      sandbox belgelerini okuyup model sağlayıcınızın veri politikasının
      risk toleransınıza uyup uymadığına karar verene kadar yönlendirmeyin.
      Operasyon işi olmayan barındırılan alternatifler için Devin ve Replit Agent
      kılavuzlarımıza bakın.
    </p>
  </>
);