import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    LM Studio, yerel LLM'leri çalıştırmak için bir masaüstü GUI'sidir &mdash; yerleşik bir Hugging Face tarayıcısından ağırlıkları indirin,
    temiz bir arayüzde onlarla sohbet edin ve localhost üzerinde OpenAI uyumlu bir sunucu açın. Bu kılavuz, tipik bir geliştirici
    dizüstü bilgisayarında çalışan bir kurulumu kapsar.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>LM Studio Nedir</h2>
    <p>
      LM Studio, <code>llama.cpp</code>'yi (ve isteğe bağlı olarak Apple Silicon'da MLX'i) şık bir arayüzle saran bir Electron
      uygulamasıdır. Model keşfi, indirmeler, GPU yük boşaltma yapılandırması, sohbet şablonları ve sunucu hizmetini tek bir
      pencere üzerinden yönetir. Ollama CLI/sunucu deneyimiyse, LM Studio masaüstü-istemci deneyimidir &mdash; ve
      ikisi aynı makinede sorunsuzca bir arada çalışabilir.
    </p>
    <p>
      Kişisel kullanım için ücretsizdir. Ticari kullanım, sitelerindeki bir formu doldurmayı gerektirir; iş arkadaşlarınıza
      göndermeden önce en son şartları okuyun.
    </p>

    <h2>Kurulum ve ilk çalıştırma</h2>
    <p>
      lmstudio.ai adresinden macOS, Windows veya Linux için yükleyiciyi indirin. İlk çalıştırmada hangi çalışma zamanını
      kullanmak istediğinizi soracaktır &mdash; NVIDIA'da CUDA derlemesini, Apple Silicon'da Metal'i veya AMD'de Vulkan/ROCm
      derlemesini seçin. Uygulama, çalışma zamanını Ayarlar içinden kendi kendine günceller.
    </p>
    <p>
      Ayarlar altındaki Donanım sekmesini kontrol edin. GPU'nuzu algılamalı ve mevcut <a href="/learn/vrm-vram">VRAM</a>'i göstermelidir.
      Algılamazsa, sürücüleriniz büyük olasılıkla güncel değildir &mdash; bir model yüklemeden önce bunu düzeltin.
    </p>

    <h2>Model indirme ve yükleme</h2>
    <p>
      Model aramasını açmak için büyüteç simgesine tıklayın. <code>llama-3.1-8b-instruct</code> gibi bir şey yazın
      ve LM Studio, Hugging Face'den GGUF nicelemelerini listeler. Her sonuç, indirme boyutunu ve RAM + VRAM'inize sığıp
      sığmayacağını gösteren yeşil/sarı/kırmızı bir rozet gösterir.
    </p>
    <p>
      16GB MacBook için <code>Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf</code> iyi bir ilk seçimdir. İndirin,
      ardından Sohbet sekmesine tıklayın ve üst açılır menüden onu seçin. İlk yükleme, ağırlıklar GPU belleğine akarken
      birkaç saniye sürer.
    </p>

    <h2>Yerel sunucuyu kullanma</h2>
    <p>
      Sol kenar çubuğundaki yeşil Geliştirici sekmesine tıklayın ve <code>Durum: Çalışıyor</code> seçeneğini açın. LM Studio
      şimdi <code>http://localhost:1234/v1</code> adresinde OpenAI uyumlu bir API sunar:
    </p>
    <pre>{`curl http://localhost:1234/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "llama-3.1-8b-instruct",
    "messages": [{"role": "user", "content": "ping"}]
  }'`}</pre>
    <p>
      Python'dan, <code>base_url=&quot;http://localhost:1234/v1&quot;</code> ve boş olmayan herhangi bir API anahtarı ile
      OpenAI SDK'sını kullanın. Yapılandırılmış çıktılar ve araç çağırma, bunlar için ince ayar yapılmış modellerde çalışır.
    </p>

    <h2>GPU yük boşaltma ve bağlam uzunluğu</h2>
    <p>
      Sağ taraftaki yapılandırma panelinde, <code>GPU Yük Boşaltma</code> kaydırıcısı, kaç <a href="/learn/transformer">transformer</a>
      katmanının GPU'da çalışacağını kontrol eder. VRAM izin veriyorsa maksimuma itin; yükleme sırasında bellek hatası alırsanız,
      birkaç katman geri alın. <code>Bağlam Uzunluğu</code> alanı KV-önbellek penceresini ayarlar &mdash; daha büyük bağlamlar
      bazı çekirdeklerde belleği katlanarak tüketir, bu nedenle 4096 ile başlayın ve yalnızca gerçekten ihtiyacınız varsa artırın.
    </p>
    <p>
      Mümkün olduğunda <code>Flash Attention</code>'ı etkinleştirin &mdash; belleği azaltır ve uzun bağlamları hızlandırır.
      Apple Silicon'da, GGUF'den ölçülebilir şekilde daha hızlı token çıktısı için modellerin MLX çalışma zamanı
      varyantlarını deneyin.
    </p>

    <h2>LM Studio'nun yanlış seçim olduğu durumlar</h2>
    <p>
      LM Studio bir iş istasyonunda harikadır ancak başsız sunucular (bir GUI uygulamasıdır) ve modellerin kodda tanımlanmasını
      istediğiniz otomasyon boru hatları için uygun değildir. Ayrıca kapalı kaynaktır, bu da yığını denetlemeniz gerekiyorsa
      önemlidir. Sunucular için doğrudan Ollama veya llama.cpp kullanın. Masaüstü kullanımı ve modelleri hızlıca A/B test etmek
      için LM Studio, sıfırdan çalışan bir yerel <a href="/learn/llm">LLM</a>'ye giden en hızlı yoldur.
    </p>
  </>
);