import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    llama.cpp, yerel <a href="/learn/llm">LLM</a> ekosisteminin büyük kısmının (Ollama, LM Studio, Jan, GPT4All) üzerine inşa edildiği C++ <a href="/learn/inference">çıkarım</a> motorudur. Doğrudan kullanmak, GGUF ağırlıklarını CPU'lar, Apple Silicon ve GPU'lar üzerinde minimum ek yük ile çalıştırmanın en hızlı yoludur.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>llama.cpp nedir</h2>
    <p>
      llama.cpp, Georgi Gerganov'un Llama ailesi çıkarımını gerçekleştiren tek depolu C/C++ uygulamasıdır. Düzinelerce model mimarisini (Llama 2/3, Mistral, Qwen, Phi, Gemma, DeepSeek ve daha fazlası) destekler, bunları GGUF'a niceler ve CPU, CUDA, Metal, Vulkan, ROCm ve SYCL üzerinde çalıştırır. Proje, bir CLI (<code>llama-cli</code>), bir sunucu (<code>llama-server</code>) ve Python, Go, Rust ile Node için bağlamalar sunar.
    </p>
    <p>
      Diğer tüm "kolay" yerel-LLM araçları eninde sonunda buraya dayanır. llama.cpp'yi doğrudan bilmek, sarıcılar yolunuza çıktığında onları atlayabileceğiniz anlamına gelir.
    </p>

    <h2>Kaynaktan derleme</h2>
    <p>
      Depoyu klonlayın ve CMake ile derleyin. Varsayılan derleme yalnızca CPU içindir; hızlandırıcınız için bayrakları ekleyin:
    </p>
    <pre>{`git clone https://github.com/ggml-org/llama.cpp
cd llama.cpp
cmake -B build -DGGML_CUDA=ON    # NVIDIA
# cmake -B build -DGGML_METAL=ON   # Apple Silicon (varsayılan olarak açık)
# cmake -B build -DGGML_VULKAN=ON  # AMD / Intel / çapraz-GPU
cmake --build build --config Release -j`}</pre>
    <p>
      İkili dosyalar <code>build/bin/</code> altına yerleşir. macOS'ta ayrıca Metal destekli önceden derlenmiş bir sürüm için <code>brew install llama.cpp</code> ile de kurabilirsiniz.
    </p>

    <h2>GGUF modeli edinme</h2>
    <p>
      Hugging Face'den önceden nicelenmiş bir GGUF çekin. <code>bartowski</code> ve <code>TheBloke</code> hesapları, en popüler temel modeller için yüksek kaliteli dönüşümler yayınlar:
    </p>
    <pre>{`huggingface-cli download bartowski/Meta-Llama-3.1-8B-Instruct-GGUF \\\\
  Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf \\\\
  --local-dir ./models`}</pre>
    <p>
      Ham Hugging Face ağırlıklarınız varsa, bunları <code>convert_hf_to_gguf.py</code> ile kendiniz dönüştürün ve <code>llama-quantize</code> ikili dosyası ile nicelendirin.
    </p>

    <h2>Çıkarım çalıştırma</h2>
    <p>CLI'dan tek seferlik istem:</p>
    <pre>{`./build/bin/llama-cli \\\\
  -m ./models/Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf \\\\
  -p "Dağıtık sistemler hakkında bir haiku yaz." \\\\
  -n 128 -ngl 99`}</pre>
    <p>
      <code>-ngl 99</code> tüm katmanları GPU'ya aktarır. OpenAI uyumlu bir sunucu için <code>llama-server</code> kullanın:
    </p>
    <pre>{`./build/bin/llama-server \\\\
  -m ./models/Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf \\\\
  --host 0.0.0.0 --port 8080 -ngl 99 -c 8192`}</pre>
    <p>
      Sunucu, <code>/v1/chat/completions</code>, <code>/v1/embeddings</code> uç noktalarını ve kök URL'de yerleşik bir web arayüzünü sunar.
    </p>

    <h2><a href="/learn/quantization">Niceleme</a> ve bağlam seçimi</h2>
    <p>
      Standart niceleme ızgarası <code>Q2_K</code>'dan <code>Q8_0</code>'a kadardır ve <code>K_M</code> ile <code>K_S</code> varyantları bulunur. Çoğu 7B&ndash;13B modeli için <code>Q4_K_M</code> doğru varsayılandır. Kod ve akıl yürütme için, bellek izin veriyorsa <code>Q5_K_M</code> veya <code>Q6_K</code>'ya yükseltin &mdash; Q4, matematik ve kod doğruluğunu belirgin şekilde düşürür.
    </p>
    <p>
      <code>-c</code> bayrağı bağlam boyutunu ayarlar. İhtiyacınız olanın ötesine çıkarmayın &mdash; KV önbelleği bağlamla doğrusal olarak büyür ve <a href="/learn/vrm-vram">VRAM</a>'i hızla tüketir. Desteklendiğinde ek yükü azaltmak için <code>--flash-attn</code> kullanın.
    </p>

    <h2>llama.cpp'nin ötesine ne zaman geçmeli</h2>
    <p>
      llama.cpp, tüketici donanımında tek kullanıcılı çıkarım için rakipsizdir ve sunucusu küçük iç araçlar için yeterlidir. Sürekli toplu işleme ve sayfalı dikkat ile yüksek eşzamanlılık gerektiren üretim sunumu için vLLM veya SGLang'a geçin. Eğitim veya <a href="/learn/fine-tuning">ince ayar</a> için PyTorch + transformers veya Unsloth kullanın &mdash; llama.cpp bir çıkarım motorudur, eğitici değildir.
    </p>
  </>
);