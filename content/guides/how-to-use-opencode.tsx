import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    OpenCode, sst ekibinden açık kaynaklı bir terminal AI kodlama ajanıdır. Kabuğunuzda çalışır,
    deponuzdaki dosyaları okur ve düzenler, komutları çalıştırır ve kendi TUI'sini getirir, böylece
    terminalden ayrılmadan kodlamaya devam edebilirsiniz.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>OpenCode aslında nedir</h2>
    <p>
      OpenCode, bağımsız, modelden bağımsız bir ajandır. Bir VS Code eklentisi değildir ve
      başka birinin CLI'sının etrafına sarılmış bir araç değildir. Bir dizini hedef alırsınız, ona bir görev verirsiniz ve o
      planlar, dosyaları düzenler ve bu çalışma ağacı içinde kabuk komutlarını yürütür. Anthropic,
      OpenAI, Google ve yerel sağlayıcıları kendi anahtarları veya bir ağ geçidi aracılığıyla destekler, böylece
      model satıcısına doğrudan ödeme yaparsınız, bir aracıya değil.
    </p>

    <h2>Kurulum</h2>
    <pre>{`# macOS / Linux
curl -fsSL https://opencode.ai/install | bash

# veya npm ile
npm install -g opencode-ai`}</pre>
    <p>
      Kurulumdan sonra <code>opencode auth login</code> komutunu çalıştırın ve bir sağlayıcı seçin. Anthropic ve
      OpenRouter en yaygın iki yoldur; OpenRouter, üç fatura panosu arasında geçiş yapmadan
      Claude, GPT ve Gemini arasında geçiş yapmak istiyorsanız kullanışlıdır.
    </p>

    <h2>İlk oturum</h2>
    <pre>{`cd ~/code/my-app
opencode`}</pre>
    <p>
      Bu sizi TUI'ye atar. İsteğinizi düz İngilizce ile yazın &mdash; &ldquo;/healthz adresinde 200 ve git sha'sını döndüren bir sağlık
      kontrol uç noktası ekle&rdquo; &mdash; ve OpenCode ilgili dosyaları okuyacak, düzenlemeler önerecek ve kabuk komutlarını çalıştırmadan önce soracaktır. Oturum ortasında modelleri değiştirmek için <code>/model</code>{" "}
      ve gelecekteki oturumların daha hızlı başlaması için derleme/test komutlarınızı yakalayan bir <code>AGENTS.md</code>{" "}
      oluşturması için <code>/init</code> kullanın.
    </p>

    <h2>Önemli yapılandırma</h2>
    <p>
      Varsayılan modeli sabitlemek, <a href="/learn/mcp">MCP</a> sunucularını kaydetmek ve izin verilen kabuk komutlarını bildirmek için depo köküne bir <code>opencode.json</code> dosyası bırakın. En büyük kazanç, izin yapılandırmasıdır: yeni bir kod tabanı için{" "}
      <code>permission.edit</code> değerini <code>ask</code> olarak ayarlayın ve döngüye güvendiğinizde{" "}
      <code>allow</code> yapın. Ayrıca bir <code>AGENTS.md</code> ekleyin &mdash; OpenCode onu otomatik olarak okur ve ajana &ldquo;işin bittiğini iddia etmeden önce her zaman pnpm typecheck çalıştır&rdquo; demeyi öğretme şeklinizdir.
    </p>

    <h2>OpenCode'un parladığı yerler</h2>
    <p>
      Ajanın depoyu grep ile taramasını, beş dosyayı düzenlemesini, testleri çalıştırmasını ve yeşil olana kadar yineleme yapmasını istediğiniz çok dosyalı yeniden düzenlemeler &mdash; tüm bunlar tmux'tan ayrılmadan. TUI'nin fark görünümü
      gerçekten iyidir ve sağlayıcıdan bağımsız olduğu için mevcut API anahtarlarınızı kullanmaya devam edebilirsiniz. Ayrıca
      uzak bir geliştirme kutusundaki SSH oturumlarıyla da iyi çalışır, bu da çoğu düzenleyiciye bağlı
      ajanın kötü idare ettiği bir şeydir.
    </p>

    <h2>Ne zaman kullanmamalısınız</h2>
    <p>
      İş akışınız &ldquo;yazarken otomatik tamamlama&rdquo; ise Copilot veya Cursor
      Tab istersiniz, OpenCode değil. Ve ajanın makinenizde kabuk komutları çalıştırması fikrinden nefret ediyorsanız, izinleri her yerde <code>ask</code> olarak ayarlayın veya bunun yerine bir inceleyici tarzı araç
      seçin. Son olarak, faturalar gerçek olabilir &mdash; tek bir büyük yeniden düzenleme, birkaç dolar
      Claude Sonnet token'ı yakabilir, bu nedenle ilk hafta sağlayıcı panosunu takip edin.
    </p>
  </>
);