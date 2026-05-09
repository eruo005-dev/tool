import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Goose, Block (Square/Cash App şirketi) tarafından geliştirilen, açık kaynaklı ve genişletilebilir bir <a href="/learn/agent">AI ajanıdır</a>.
    Makinenizde çalışır, doğal olarak <a href="/learn/mcp">MCP</a> ile iletişim kurar ve yeni araçlar ekleyebilmeniz için tasarlanmıştır
    &mdash; GitHub, tarayıcı, veritabanı, kendi betikleriniz &mdash; ve ajanın bunları özel bir bağlantı kodu olmadan
    kullanmasını sağlar.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Goose aslında nedir</h2>
    <p>
      Goose, bir masaüstü uygulaması veya CLI üzerinden yönettiğiniz yerel bir ajandır. Herhangi bir
      <a href="/learn/llm">LLM</a> sağlayıcısına (Anthropic, OpenAI, Google, Databricks, Ollama, OpenRouter ve daha fazlası) bağlanır ve
      yetenekler kazanmak için <strong>eklentileri</strong> &mdash; yani MCP sunucularını &mdash; kullanır.
      Geliştirici eklentisi varsayılan olarak gelir ve ajana bir kabuk, dosya düzenleyici ve metin
      araçları sağlar; diğer her şey isteğe bağlıdır.
    </p>

    <h2>Kurulum</h2>
    <pre>{`# macOS / Linux CLI
curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | bash

# veya block.github.io/goose adresinden Masaüstü uygulamasını yükleyin`}</pre>
    <p>
      Bir sağlayıcı ve model seçmek için <code>goose configure</code> komutunu bir kez çalıştırın, ardından
      konuşmaya başlamak için <code>goose session</code> komutunu kullanın. Masaüstü uygulaması aynı motoru bir
      sohbet arayüzü, eklenti anahtarları ve bir günlük görüntüleyici ile sarar; perde arkasında her ikisi de aynı oturumları paylaşır.
    </p>

    <h2>İlk oturum</h2>
    <pre>{`cd my-project
goose session --name refactor-auth`}</pre>
    <p>
      Görevi tanımlayın: &ldquo;oturum token'ını nasıl ilettiğimizi denetle, onu bir httpOnly
      çereze taşı ve localStorage'dan okuyan iki fetch yardımcısını güncelle.&rdquo; Goose,
      geliştirici eklentisi aracılığıyla grep yapacak, düzenleyecek, testleri çalıştıracak ve görev tamamlanana veya
      bir araç hatasıyla karşılaşana kadar devam edecektir. Adlandırılmış oturumlar, ertesi sabah
      <code>goose session --resume</code> ile tam geçmişle kaldığınız yerden devam edebileceğiniz anlamına gelir.
    </p>

    <h2>Eklentiler ve tarifler</h2>
    <p>
      Asıl güç eklentilerdedir. Goose'un PR açmasına izin vermek için GitHub MCP'yi, tarayıcı otomasyonu
      için Playwright MCP'yi, şema çalışmaları için bir Postgres MCP'yi ekleyin veya kendi dahili
      MCP sunucunuza yönlendirin. <strong>Tarifler</strong>, sağlayıcıyı, eklentileri
      ve bir başlangıç istemini önceden tanımlayan YAML dosyalarıdır &mdash; bunları deponuzda sürümleyin, böylece takım arkadaşlarınız
      tek bir komutla aynı ajan yapılandırmasını başlatabilir.
    </p>

    <h2>Yapılandırma tuzakları</h2>
    <p>
      Goose, makinenizde gerçek komutlar çalıştırır, bu nedenle geliştirici eklentisi etkili bir şekilde çalışma alanınızda kök yetkisine sahiptir.
      Silmekten çekinmeyeceğiniz bir proje dizini kullanın veya ilk temasta bir devcontainer ile
      yalıtın. Ayrıca bağlama dikkat edin: Goose büyük dosyaları mutlu bir şekilde içe aktaracaktır &mdash;
      <code>GOOSE_MAX_TURNS</code> değişkenini ayarlayın veya <code>lead/worker</code> model ayrımını kullanın, böylece
      uzun süren ağır işleri ucuz bir model halleder ve yalnızca planlayıcı premium token'larınızı kullanır.
    </p>

    <h2>Goose'un parladığı yerler</h2>
    <p>
      Aynı oturumda git'e, dosyalara, bir veritabanına ve bir tarayıcıya dokunmasını istediğiniz
      operasyon odaklı işler. Ayrıca MCP'ye meraklıysanız güçlü bir seçenektir, çünkü ekosistem
      sonradan eklenmiş değil, doğaldır.
    </p>

    <h2>Ne zaman kullanılmamalı</h2>
    <p>
      Satır içi farklar ve tıkla-onayla özellikleriyle sıkı bir IDE entegrasyonu istiyorsanız, Cline veya
      Windsurf daha cilalı hissettirir. Goose öncelikle bir terminal ve pencere aracıdır; düzenleyici
      deneyimi kasıtlı olarak odak noktası değildir. Ayrıca dokümantasyon hızlı değişir &mdash; takım kullanımı için
      <code>stable</code> sürümünü takip etmek yerine bir sürümü sabitleyin.
    </p>
  </>
);