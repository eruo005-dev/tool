import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Ollama, yerel bir <a href="/learn/llm">LLM</a> çalıştırmanın en ağır kısmını (ağırlıklar, çalışma zamanı, <a href="/learn/quantization">kuantizasyon</a>) tek bir komutla kurulabilen tek bir ikili dosyada paketler. Bu kılavuz, Ollama'yı kurma, bir model çekme ve yerel API'ye karşı gerçek istemler çalıştırma adımlarını anlatır.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Ollama aslında nedir</h2>
    <p>
      Ollama, Go dilinde yazılmış ve arka planda <code>llama.cpp</code>'yi saran yerel bir model sunucusudur. Kuantize edilmiş GGUF ağırlıklarını indirir, <code>localhost:11434</code> üzerinde bir HTTP sunucusu başlatır ve bir CLI ile OpenAI uyumlu bir API sunar. Onunla, OpenAI ile konuştuğunuz gibi konuşursunuz &mdash; sadece istemcinizi <code>api.openai.com</code> yerine yerel uç noktaya yönlendirirsiniz.
    </p>
    <p>
      En büyük avantaj, model, çalışma zamanı, şablon ve parametrelerin tek bir adlandırılmış yapıta (Docker imajına benzer) paketlenmiş olmasıdır. <code>llama3.1:8b</code> çekersiniz ve birbirine eklemeniz gereken bir dosya klasörü değil, çalışan bir model elde edersiniz.
    </p>

    <h2>Ollama'yı Kurma</h2>
    <p>macOS veya Linux'ta, tek bir curl komutu ikili dosyayı almanızı sağlar:</p>
    <pre>{`curl -fsSL https://ollama.com/install.sh | sh`}</pre>
    <p>
      Windows'ta, ollama.com'dan yükleyiciyi alın. Linux sunucularında, kurulum betiği ayrıca bir systemd birimi kaydeder, böylece arka plan işlemi yeniden başlatmalarda hayatta kalır. Kurulumu doğrulayın:
    </p>
    <pre>{`ollama --version
systemctl status ollama   # Yalnızca Linux`}</pre>

    <h2>İlk modelinizi çekme ve çalıştırma</h2>
    <p>
      RAM'inize göre bir model seçin. 16 GB'lık bir dizüstü bilgisayar için, Q4'e kuantize edilmiş Llama 3.1 8B en uygun noktadır. 8 GB makineler için Phi-3 Mini veya Qwen 2.5 3B'ye geçin. 32 GB+ için Mistral Small veya Llama 3.1 70B (yoğun kuantize) kullanılabilir hale gelir.
    </p>
    <pre>{`ollama pull llama3.1:8b
ollama run llama3.1:8b "CRDT'leri iki cümlede açıkla."`}</pre>
    <p>
      İlk çalıştırma, token'ları terminalinize akıtır. Sonraki çalıştırmalar, boşta kalana kadar (varsayılan olarak beş dakika) yüklenen modeli bellekten yeniden kullanır.
    </p>

    <h2>HTTP API'sini Kullanma</h2>
    <p>
      Çektiğiniz her modele HTTP üzerinden erişilebilir. Yerel uç nokta <code>/api/generate</code>'dir ve ayrıca hazır SDK kullanımı için OpenAI uyumlu bir <code>/v1/chat/completions</code> da bulunur:
    </p>
    <pre>{`curl http://localhost:11434/api/generate -d '{
  "model": "llama3.1:8b",
  "prompt": "CAP teoremini özetle.",
  "stream": false
}'`}</pre>
    <p>OpenAI SDK ile, sadece temel URL'yi değiştirin ve API anahtarı için herhangi bir dize kullanın:</p>
    <pre>{`from openai import OpenAI
client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")
r = client.chat.completions.create(
    model="llama3.1:8b",
    messages=[{"role": "user", "content": "merhaba"}],
)`}</pre>

    <h2>Doğru kuantizasyonu seçme</h2>
    <p>
      GGUF modelleri birden çok kuantizasyonda gelir. <code>Q4_K_M</code> iyi bir varsayılandır &mdash; ağırlık başına yaklaşık 4 bit, minimum kalite kaybıyla. <code>Q8_0</code> neredeyse kayıpsızdır ancak belleği iki katına çıkarır. <code>Q2_K</code> agresiftir ve akıl yürütme görevlerinde çıktıyı gözle görülür şekilde düşürür. Ollama'nın varsayılan etiketleri genellikle mantıklı bir Q4 varyantını işaret eder, ancak açıkça sabitleyebilirsiniz:
    </p>
    <pre>{`ollama pull llama3.1:8b-instruct-q8_0`}</pre>
    <p>
      Ayrıca <code>OLLAMA_CONTEXT_LENGTH</code> veya bir <code>Modelfile</code> ile bağlam boyutunu ayarlayın &mdash; varsayılan 2048 token küçüktür ve Llama 3.1 gibi modeller yerel olarak 128k'yı destekler.
    </p>

    <h2>Ollama'nın yanlış seçim olduğu durumlar</h2>
    <p>
      Bir üretim <a href="/learn/inference">çıkarım</a> iş yükü için GPU doygunluğu sağlayan bir iş hacmine ihtiyacınız varsa, Ollama prototipler için iyidir ancak onu aşarsınız &mdash; toplu sunum için vLLM, TGI veya SGLang'a geçin. Ollama ayrıca çoklu GPU tensor paralelliğini iyi yapmaz. Kişisel günlük kullanım, çevrimdışı kodlama yardımı, gizlilik öncelikli RAG prototipleri ve CI dostu test fikstürleri için Ollama en az dirençli yoldur.
    </p>
  </>
);