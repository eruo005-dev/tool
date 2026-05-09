import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Promptfoo, prompt'ları kod gibi ele alan bir CLI aracıdır &mdash; YAML testleri, iddialar (assertions), farklar (diffs) ve CI dostu çıktı.</p>);

export const body: ReactElement = (
  <>
    <p>Promptfoo, LLM'ler için birim testlerinin neye benzediğidir. Bir YAML dosyasında prompt'lar, test senaryoları ve iddialar (assertions) tanımlar, <code>promptfoo eval</code> komutunu çalıştırır ve geçti/kaldı puanlamasıyla birlikte yan yana bir çıktı ızgarası elde edersiniz. CI'ya entegre olur, red-team (saldırı simülasyonu) çalışmalarını destekler ve neredeyse tüm model sağlayıcılarıyla yerel olarak çalışır.</p>
    <h2>Ne olduğu</h2>
    <p>Bir Node.js CLI ve web görüntüleyicisi. Bir yapılandırma dosyasını yükler, sağlayıcılar ve prompt varyantları arasında istekleri dağıtır, deterministik (içerir, regex, eşittir) ve model tarafından derecelendirilen (llm-rubric, benzer) iddiaları (assertions) çalıştırır ve sonuçları yerel bir SQLite veritabanına yazar. Görüntüleyici farkları (diffs) gösterir ve sonuçları paylaşmanıza olanak tanır.</p>
    <h2>Kurulum / ayarlama</h2>
    <pre>{`# global kurulum
npm install -g promptfoo
promptfoo init
export OPENAI_API_KEY=sk-...`}</pre>
    <h2>İlk çalıştırma</h2>
    <p><code>promptfoo init</code> komutu, örnek bir prompt ve iki test senaryosu içeren bir <code>promptfooconfig.yaml</code> dosyası oluşturur. <code>promptfoo eval</code> komutunu çalıştırın; prompt'ların, sağlayıcıların ve testlerin her kombinasyonunu yürütür ve ardından sonuç ızgarasının bir tarayıcı görünümünü açar.</p>
    <pre>{`$ promptfoo eval
[==================] 8/8 tamamlandı
$ promptfoo view
http://localhost:15500 adresini açın`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Aynı test setinde GPT-4o, Claude ve yerel bir Llama'yı karşılaştırarak hala geçen en ucuz modeli seçin.</li>
      <li>CI'da <code>promptfoo eval --assert</code> ile pull request'leri denetleyin, böylece prompt regresyonları asla yayınlanmaz.</li>
      <li>Uygulamanıza karşı saldırgan girdiler (jailbreak'ler, PII sızıntıları, prompt injection) oluşturmak için <code>promptfoo redteam</code> komutunu çalıştırın.</li>
    </ul>
    <h2>Dikkat edilmesi gerekenler ve ipuçları</h2>
    <p>Model tarafından derecelendirilen iddialar (assertions), çıktıları derecelendirmek için bir <a href="/learn/llm">LLM</a> kullanır; bu, test başına maliyetin iki katına çıkması ve derecelendiricinin kendisinin hatalı olabilmesi anlamına gelir. Derecelendiriciyi güçlü bir modele (<code>gpt-4o</code> veya <code>claude-3-5-sonnet</code>) sabitleyin, <code>--no-cache=false</code> ile agresif bir şekilde önbelleğe alın ve ilk birkaç çalıştırmada başarısız olanları manuel olarak kontrol edin.</p>
    <p>Yapılandırma dosyaları hızla büyür. Testleri ayrı YAML dosyalarına bölün ve <code>tests: file://tests/*.yaml</code> ile dahil edin; pahalı sabit verileri (fixtures) <code>vars</code> dosyalarında saklayın, böylece ana yapılandırmaya 500 satırlık prompt'lar yapıştırmazsınız. Paylaşılan bir arka uç sunucunuz yoksa, geçmişi korumak için SQLite veritabanını commit edin.</p>
    <h2>Kimler için uygun</h2>
    <p>Prompt'ları üretim kodu olarak ele alan ve onlar için Jest benzeri bir iş akışı isteyen mühendisler. Ayrıca <a href="/learn/red-team">red-team</a> alıştırmaları yapan güvenlik ekipleri &mdash; yerleşik saldırı kütüphanesi gerçekten kullanışlıdır ve haftalarca sürecek manuel işi kurtarır.</p>
  </>
);