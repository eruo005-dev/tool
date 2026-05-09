import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Continue, VS Code ve JetBrains içinde çalışan açık kaynaklı bir AI kodlama asistanıdır.
    Model seçimine, yapılandırmaya sizin karar verdiğiniz ve hatta tamamen yerel olarak
    çalıştırabildiğiniz, GitHub Copilot'a en yakın alternatiftir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Continue aslında nedir</h2>
    <p>
      Continue dört temel özellik sunar: satır içi otomatik tamamlama, sohbet kenar çubuğu,
      hızlı düzenleme komutu ve araçları çalıştırabilen bir ajan modu. Copilot'tan farklı olarak,
      istediğiniz modele yönlendirebilirsiniz &mdash; Claude, GPT, Gemini, DeepSeek, yerel bir
      Ollama modeli veya kendi barındırdığınız bir vLLM uç noktası &mdash; ve yapılandırmayı
      sürüm kontrolüne alırsınız.
    </p>

    <h2>Kurulum</h2>
    <p>
      <strong>Continue</strong>'u VS Code Marketplace veya JetBrains eklenti deposundan yükleyin.
      İlk açılışta bir yapılandırma arayüzü açar; ayrıca <code>~/.continue/config.yaml</code>
      dosyasını doğrudan düzenleyebilirsiniz, çoğu ileri düzey kullanıcı bunu yapar. Otomatik
      tamamlama için, küçük ve hızlı bir model (Ollama'da Qwen-Coder-7B veya benzeri) öncü bir
      modelden daha iyi hissettirir &mdash; bu alan için gecikme süresi IQ'dan daha önemlidir.
    </p>

    <h2>İlk oturum</h2>
    <pre>{`# ~/.continue/config.yaml
models:
  - name: Claude Sonnet
    provider: anthropic
    model: claude-sonnet-4-5
    apiKey: \${ANTHROPIC_API_KEY}
  - name: Yerel Otomatik Tamamlama
    provider: ollama
    model: qwen2.5-coder:7b
    roles: [autocomplete]`}</pre>
    <p>
      Pencereyi yeniden yükleyin. Sohbet kısayoluna basın, bir kod bloğu seçin, "bu neden iki kez
      bellek ayırıyor" diye sorun ve doğru dosya bağlamıyla bir yanıt alacaksınız. Sohbet
      girişinde <code>@</code> kullanarak belirli dosyaları, belgeleri veya terminal çıktısını
      isteme ekleyebilirsiniz.
    </p>

    <h2>Önemli yapılandırma</h2>
    <p>
      <code>config.yaml</code> tüm ürün yüzeyidir. <code>roles</code> (<code>chat</code>,{" "}
      <code>edit</code>, <code>autocomplete</code>, <code>apply</code>, <code>embed</code>,{" "}
      <code>rerank</code>) ile birden fazla model tanımlayın, böylece sohbet için Sonnet ve satır
      içi tamamlamalar için ucuz bir yerel model kullanabilirsiniz. Önemsediğiniz kütüphane
      belgelerini işaret eden <code>docs</code> girişleri ekleyin &mdash; Continue bunları
      indeksleyecek ve istemlerde <code>@</code> ile referans vermenize izin verecek, bu da
      yabancı çerçeveler için harika bir özelliktir.
    </p>

    <h2>Takım çalışması</h2>
    <p>
      Continue, Hub aracılığıyla takım yapılandırmalarını destekler: bir kişi model kurulumunu
      tanımlar, diğer herkes onu çeker. Bu, ekibin yarısının standartlaştırma yolu olmayan farklı
      bir modelde olduğu Copilot sorununu önler. Depo düzeyinde bir <code>.continue/</code>
      klasörü işleyerek şirket stilini kodlayan istem şablonları gönderebilirsiniz.
    </p>

    <h2>Continue ne zaman parlar</h2>
    <p>
      Copilot kullanım kolaylığı isteyen ancak kendi barındırması gereken, veri saklama
      kurallarına uyması gereken veya tek bir satıcıya bağlı kalmak istemeyen takımlar. Ayrıca,
      maliyetleri sabit tutmak için yerel bir otomatik tamamlama modelini bulut sohbet modeliyle
      karıştırmak isteyen solo geliştiriciler için de harikadır.
    </p>

    <h2>Ne zaman kullanılmamalı</h2>
    <p>
      Çok adımlı değişiklikler planlayan tamamen otonom bir ajan istiyorsanız, Continue'nin ajan
      modu çalışır ancak Cline ve Cursor bu akış için daha cilalı hissettirir. Otomatik tamamlama
      yalnızca bağladığınız model kadar iyidir &mdash; öncü bir sohbet modelini{" "}
      <code>autocomplete</code> rolüne takmak yazmayı berbat hale getirir, bu nedenle her zaman
      orada küçük ve hızlı bir model kullanın.
    </p>
  </>
);