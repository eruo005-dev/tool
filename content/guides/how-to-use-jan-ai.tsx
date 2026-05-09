import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Jan, ChatGPT benzeri bir arayüze sahip, LLM'leri yerel olarak çalıştıran açık kaynaklı bir masaüstü uygulamasıdır &mdash; hesap gerektirmez, bulut kullanmaz, verileriniz makinenizden ayrılmaz. Bu kılavuz, Jan'ı kurmayı, bir model yüklemeyi ve mevcut araçlarınıza entegre etmeyi kapsar.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Jan Nedir</h2>
    <p>
      Jan, Homebrew Computer Company (Jan ekibi) tarafından geliştirilen bir Electron uygulamasıdır. llama.cpp'yi ve bir eklenti sistemini sarar, cilalı bir sohbet arayüzü sunar ve modelleri yerel olarak çalıştırabilir veya OpenAI, Anthropic, Groq ve Mistral gibi uzak sağlayıcılara tek bir arayüz üzerinden proxy yapabilir. Tamamı AGPL lisanslıdır ve GitHub'da mevcuttur.
    </p>
    <p>
      "Dizüstü bilgisayarımda ChatGPT" isteyen, CLI araçlarını öğrenmek veya Python'a dokunmak istemeyen kullanıcıları hedefler. Perde arkasında, Ollama ve LM Studio'yu da çalıştıran aynı GGUF/llama.cpp yığınının üzerinde ince bir istemcidir.
    </p>

    <h2>Jan'ı Kurma</h2>
    <p>
      macOS, Windows veya Linux için yükleyiciyi jan.ai adresinden indirin. Linux'ta hem AppImage hem de .deb yayınlanmaktadır. İlk çalıştırmada verilerinizi <code>~/jan</code> (veya Windows'ta <code>%APPDATA%\jan</code>) dizinine koyar; ev bölümünüz küçükse bunu yedekleyebilir veya başka bir diske sembolik bağlantı oluşturabilirsiniz.
    </p>
    <p>
      Jan varsayılan olarak eve bilgi göndermez. Bunu, Ayarlar &rarr; Gelişmiş altındaki telemetri geçişini kontrol ederek ve favori aracınızla ağ trafiğini izleyerek doğrulayabilirsiniz.
    </p>

    <h2>İlk modelinizi yükleme</h2>
    <p>
      Hub sekmesini açın. Jan, RAM'inize göre "Cihazınız için önerilen" olarak etiketlenmiş önerilen nicelemelerle birlikte seçilmiş bir model listesi (Llama 3.1, Mistral, Qwen, Phi, Gemma, DeepSeek) gösterir. Size uyan birine İndir'e tıklayın &mdash; 16GB bir makine için Llama 3.1 8B Q4 veya Qwen 2.5 7B Q4 sağlam seçimlerdir.
    </p>
    <p>
      İndirme tamamlandıktan sonra yeni bir konu başlatın ve sağ üstteki açılır menüden modeli seçin. Sağ panelde, genel varsayılanları değiştirmeden konu başına <a href="/learn/temperature-ai">sıcaklık</a>, top-p ve maksimum token ayarlarını yapabilirsiniz.
    </p>

    <h2>Yerel API sunucusunu kullanma</h2>
    <p>
      Jan, kutudan çıktığı gibi OpenAI uyumlu bir sunucu sunar. Ayarlar &rarr; Yerel API Sunucusu'nu açın ve etkinleştirin; varsayılan port <code>1337</code>'dir. Çalıştıktan sonra, herhangi bir OpenAI uyumlu istemciyi buna yönlendirin:
    </p>
    <pre>{`curl http://localhost:1337/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "llama3.1-8b-instruct",
    "messages": [{"role": "user", "content": "hello"}]
  }'`}</pre>
    <p>
      Jan'ı Continue.dev, Aider veya kendi betikleriniz gibi araçlara bağlamanın yolu budur &mdash; sohbet arayüzü, kodunuzun eriştiği aynı model için bir hata ayıklama yüzeyi haline gelir.
    </p>

    <h2>Uzak sağlayıcılar ve eklentiler ekleme</h2>
    <p>
      Ayarlar &rarr; Model Sağlayıcıları altında bir OpenAI, Anthropic, Groq, Mistral veya OpenRouter API anahtarı yapıştırabilirsiniz ve Jan bu modelleri yerel modellerinizin yanında göstermeye başlayacaktır. Her konu herhangi bir sağlayıcıyı hedefleyebilir, böylece aynı istemde Claude ile yerel bir Llama'yı hızlıca karşılaştırabilirsiniz.
    </p>
    <p>
      Eklentiler sayfası, alma, <a href="/learn/function-calling">fonksiyon çağırma</a> ve diğer eklentileri etkinleştirmenizi sağlar. Bunları deneysel olarak değerlendirin &mdash; kararlı yüzey sohbet ve yerel API'dir.
    </p>

    <h2>Jan'ın yanlış seçim olduğu durumlar</h2>
    <p>
      Jan, bir ChatGPT yedeği ve ara sıra API erişimi isteyen masaüstü güç kullanıcıları için idealdir. Bir üretim <a href="/learn/inference">çıkarım</a> sunucusu değildir ve model kataloğu, yeni sürümlerde ham Hugging Face'in bir veya iki hafta gerisinde kalır. Çıktıkları gün en son ağırlıklara ihtiyacınız varsa, doğrudan llama.cpp kullanın. UI'sız hafif bir arka plan sunucusu istiyorsanız, Ollama kullanın. Jan'ın tatlı noktası "Yerel modellerle sohbet etmek istiyorum ve gerçek bir uygulama penceresini seviyorum."dur.
    </p>
  </>
);