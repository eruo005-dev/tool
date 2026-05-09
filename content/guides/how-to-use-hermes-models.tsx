import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Hermes, Nous Research'in Meta'nın Llama temel modelleri üzerine inşa edilmiş açık ağırlıklı ince ayar ailesidir.
    Bu rehber, Hermes 3'ün gerçekten ne kadar iyi olduğunu, doğru boyutu nasıl seçeceğinizi ve mevcut <a href="/learn/llm">LLM</a> yığınınızla birlikte yerel olarak nasıl çalıştıracağınızı kapsar.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Hermes modelleri nedir</h2>
    <p>
      Hermes 3, Nous Research'in amiral gemisi ince ayar serisidir ve Llama 3.1 tabanına uygun boyutlarda (8B, 70B, 405B) yayınlanmıştır. Nous, talimat takibi, <a href="/learn/function-calling">fonksiyon çağırma</a>, yapılandırılmış çıktılar, uzun bağlam güvenilirliği ve yönlendirilebilirliği koruma konularında uzmanlaşmıştır &mdash; Hermes modelleri, stok Llama-Instruct'e göre daha az reddetme eğilimindedir ve sistem istemlerini daha harfiyen takip eder.
    </p>
    <p>
      Ağırlıklar Llama-3.1 lisanslıdır (Meta'dan devralınmıştır), bu nedenle olağan Llama koşulları altında ticari olarak kullanabilirsiniz. Hugging Face'te <code>NousResearch/Hermes-3-Llama-3.1-*</code> altında yayınlarlar.
    </p>

    <h2>Doğru boyutu seçmek</h2>
    <p>Donanımınıza ve görevinize göre seçim yapın:</p>
    <ul>
      <li>
        <strong>Hermes 3 8B</strong> &mdash; Q4'te 16GB bir dizüstü bilgisayarda çalışır. İyi ajan/asistan kalitesi, stok Llama 3.1 Instruct'tan daha iyi fonksiyon çağırma.
      </li>
      <li>
        <strong>Hermes 3 70B</strong> &mdash; ciddi donanım gerektirir (Q4'te 48GB+ <a href="/learn/vrm-vram">VRAM</a> veya yeterli birleşik belleğe sahip bir Mac Studio). Akıl yürütmede açık kaynak öncü modellerle rekabetçidir.
      </li>
      <li>
        <strong>Hermes 3 405B</strong> &mdash; yalnızca veri merkezi. Çoklu GPU veya bir H100 kümesinde ağır şekilde nicelenmiş.
      </li>
    </ul>
    <p>
      Çoğu yerel kullanım durumu için 8B ile başlayın. Pragmatik tatlı noktadır ve daha büyük kardeşleriyle aynı fonksiyon çağırma ve yapılandırılmış çıktı eğitimiyle birlikte gelir.
    </p>

    <h2>Hermes'i yerel olarak çalıştırmak</h2>
    <p>Ollama ile, bir topluluk GGUF bağlantı noktasını çekin (veya llama.cpp'nin dönüştürücüsüyle kendinizinkini oluşturun):</p>
    <pre>{`ollama pull hermes3:8b
ollama run hermes3:8b "Sen kısa ve öz bir kod incelemecisisin. Bu fonksiyonu incele: ..."`}</pre>
    <p>Doğrudan llama.cpp ile, bir GGUF indirin ve sunun:</p>
    <pre>{`huggingface-cli download bartowski/Hermes-3-Llama-3.1-8B-GGUF \\\
  Hermes-3-Llama-3.1-8B-Q4_K_M.gguf --local-dir ./models
./build/bin/llama-server -m ./models/Hermes-3-Llama-3.1-8B-Q4_K_M.gguf \\\
  --host 0.0.0.0 --port 8080 -c 8192 -ngl 99`}</pre>

    <h2>Fonksiyon çağırma ve yapılandırılmış çıktıları kullanmak</h2>
    <p>
      Hermes 3, üzerinde eğitildiği belirli bir araç çağrısı formatını kullanır. JSON yükleriyle birlikte{" "}
      <code>&lt;tool_call&gt;...&lt;/tool_call&gt;</code> XML etiketleri içinde sarılmış çağrılar yayar. Model kartı, tam
      <a href="/learn/system-prompt">sistem istemi</a> şablonunu belirtir &mdash; üzerine bir ajan oluşturmadan önce okuyun.
    </p>
    <p>
      Katı JSON çıktısı için, net bir sistem istemini llama.cpp'nin <code>--grammar</code> bayrağı veya bir GBNF dil bilgisi dosyasıyla birleştirerek kod çözmeyi kısıtlayın. Yalnızca modele güvenmekten çok daha güvenilir yapılandırılmış çıktılar elde edeceksiniz:
    </p>
    <pre>{`./build/bin/llama-cli -m ./models/hermes-3-8b.gguf \\\
  --grammar-file json.gbnf \\\
  -p "JSON olarak ad ve yaşı çıkar: 'Sam 34 yaşında.'"`}</pre>

    <h2>Önemli olan örnekleme ayarları</h2>
    <p>
      Hermes, ajanlık çalışmaları için stok Llama'dan biraz daha düşük sıcaklıklardan faydalanır. Başlangıç noktası olarak{" "}
      <code>temperature=0.4</code>, <code>top_p=0.9</code> ve hafif bir tekrar cezası olarak <code>1.05</code> deneyin. Yaratıcı yazı için, <a href="/learn/temperature-ai">sıcaklığı</a> 0.8&ndash;1.0'a yükseltin. Bağlam uzunluğu Llama 3.1'den devralınmıştır, bu nedenle kağıt üzerinde 128k desteklenir, ancak donanımınız tam KV önbelleğini sığdıramazsa kalite ~32k'dan sonra düşer.
    </p>

    <h2>Hermes'in yanlış seçim olduğu durumlar</h2>
    <p>
      Kod odaklı bir iş yapıyorsanız, Qwen 2.5 Coder veya DeepSeek-Coder V2 genellikle aynı boyuttaki Hermes'i yener. Kesinlikle en reddetmesiz sohbet modelini istiyorsanız, daha özelleşmiş ince ayarlar vardır &mdash; ancak bunlar kendi risklerini taşır. Genel amaçlı asistanlar, ajanlar ve açık ağırlıklarda fonksiyon çağırma iş yükleri için Hermes 3, güçlü ve iyi desteklenen bir varsayılandır.
    </p>
  </>
);