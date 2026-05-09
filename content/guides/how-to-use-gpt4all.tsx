import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    GPT4All, Nomic AI tarafından geliştirilen, açık kaynaklı LLM'leri standart donanımda yerel olarak çalıştırmak için kullanılan bir masaüstü istemcisidir. Model keşfi, sohbet ve LocalDocs adlı yerel belge tarama özelliğini tek bir ücretsiz uygulamada birleştirir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>GPT4All Nedir</h2>
    <p>
      GPT4All, 2023 yılında yerel <a href="/learn/llm">LLM</a> uygulamaları arasında kullanımı en kolay olanlardan biri olarak başlamış ve o zamandan beri istikrarlı, platformlar arası bir istemci haline gelmiştir. <a href="/learn/inference">Çıkarım</a> için llama.cpp'yi kullanır, küratörlüğünü yaptığı bir GGUF model kataloğunu korur ve LocalDocs'u &mdash; PDF'ler, işaretleme dilleri, kod ve ofis belgelerinden oluşan klasörleri yerel bir vektör deposunda indeksleyen bir RAG özelliği &mdash; sunar. Proje, ticari kullanıma izin veren MIT lisansına sahiptir.
    </p>
    <p>
      LM Studio veya Jan ile karşılaştırıldığında, GPT4All, yalnızca ham sohbet yerine varsayılan iş akışı olarak &ldquo;dosyalarınızla sohbet&rdquo; özelliğine daha fazla ağırlık verir.
    </p>

    <h2>GPT4All Kurulumu</h2>
    <p>
      macOS, Windows veya Ubuntu için yükleyiciyi nomic.ai/gpt4all adresinden edinin. Yükleyici basit bir sihirbazdır; Linux'ta ayrıca sağlanan .run dosyasını da kullanabilirsiniz. İlk çalıştırmada anonim telemetriye katılıp katılmamak için bir seçenek sunulur &mdash; tamamen çevrimdışı kullanmak istiyorsanız reddedin.
    </p>
    <p>
      Modeller macOS'ta <code>~/Library/Application Support/nomic.ai/GPT4All/</code> dizinine, Windows ve Linux'ta ise benzer yollara indirilir. Disk alanınız kısıtlıysa, bu yolu sembolik bağlantı ile harici bir sürücüye yönlendirin.
    </p>

    <h2>Model Seçme ve İndirme</h2>
    <p>
      Modeller sekmesini açın. GPT4All, boyut ve RAM gereksinimleri açıkça belirtilmiş, test edilmiş GGUF modellerinden oluşan kısa bir liste sunar. İyi başlangıç seçenekleri:
    </p>
    <ul>
      <li><code>Llama 3.1 8B Instruct</code> &mdash; genel amaçlı, yaklaşık 8GB RAM gerektirir</li>
      <li><code>Qwen 2.5 Coder 7B</code> &mdash; kod yardımı, benzer bellek</li>
      <li><code>Phi-3 Mini 4K</code> &mdash; 8GB makinelerde boş alanla çalışır</li>
      <li><code>Mistral 7B Instruct</code> &mdash; hızlı ve güvenilir temel model</li>
    </ul>
    <p>
      İndir'e tıklayın ve ilerleme çubuğunu izleyin. Sohbetler sekmesine geçin ve bir oturum başlatmak için sağ üstteki açılır menüden modeli seçin.
    </p>

    <h2>Özel RAG için LocalDocs Kullanımı</h2>
    <p>
      LocalDocs, en önemli özelliktir. LocalDocs sekmesinde <code>+ Koleksiyon Ekle</code>'ye tıklayın, bir ad verin ve bir belge klasörünü işaret edin. GPT4All, desteklenen dosya türlerini (PDF, DOCX, TXT, MD, kaynak kodu) tarar, parçalara ayırır ve yerleşik bir Nomic Embed modeli kullanarak bunları yerel olarak gömer.
    </p>
    <p>
      Bir sohbet dizisinde, veritabanı simgesi aracılığıyla koleksiyonu etkinleştirin. Sorgular artık yanıt oluşturmadan önce belgelerinizden ilgili parçaları alır. Kenar çubuğu, modelin halüsinasyon görüp görmediğini doğrulayabilmeniz için alıntıları gösterir. Hiçbir şey makinenizden ayrılmaz.
    </p>

    <h2>API Erişimi ve Yapılandırma</h2>
    <p>
      Ayarlar &rarr; Uygulama &rarr; API Sunucusu'nu açın ve etkinleştirin. GPT4All, <code>http://localhost:4891/v1</code> adresinde OpenAI uyumlu bir uç nokta sunar:
    </p>
    <pre>{`curl http://localhost:4891/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "model": "Llama 3.1 8B Instruct",\n    "messages": [{"role": "user", "content": "ping"}]\n  }'`}</pre>
    <p>
      Ayarlar &rarr; Model altında, model başına <a href="/learn/temperature-ai">sıcaklık</a>, top-k, top-p, tekrar cezası ve bağlam uzunluğunu ayarlayabilirsiniz. NVIDIA GPU'nuz veya Apple Silicon'unuz varsa, Ayarlar &rarr; Uygulama'da GPU'yu etkinleştirin &mdash; yalnızca CPU kullanımı 7B+ modellerde yavaştır.
    </p>

    <h2>GPT4All'ün Yanlış Tercih Olduğu Durumlar</h2>
    <p>
      GPT4All, gizlilik odaklı masaüstü kullanımı ve yapılandırma gerektirmeyen &ldquo;PDF'lerimle sohbet&rdquo; aracına ihtiyaç duyan teknik olmayan ekip üyeleri için harikadır. Üretim sunucusu, çok kullanıcılı dağıtım veya hızlı model denemeleri için tasarlanmamıştır &mdash; küratörlü kataloğu, LM Studio'nun Hugging Face tarayıcısından daha dardır. Sunucular için Ollama'ya yönelin. Model çeşitliliği için LM Studio'yu tercih edin. Kutudan çıktığı gibi cilalı bir yerel RAG için GPT4All'ü geçmek zordur.
    </p>
  </>
);