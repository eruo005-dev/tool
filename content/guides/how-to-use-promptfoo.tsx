import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Promptfoo, prompt'ları kod gibi ele alan bir CLI aracıdır &mdash; YAML testleri, iddialar, farklar ve CI dostu çıktı.</p>);

export const body: ReactElement = (
  <>
    <p>Promptfoo, LLM'ler için birim testlerinin nasıl göründüğüdür. Bir YAML dosyasında prompt'lar, test senaryoları ve iddialar tanımlar, <code>promptfoo eval</code> komutunu çalıştırır ve geçer/kalır puanlamasıyla yan yana bir çıktı ızgarası elde edersiniz. CI'ya entegre olur, kırmızı takım çalışmalarını destekler ve neredeyse tüm model sağlayıcılarıyla yerel olarak konuşur.</p>
    <h2>Nedir</h2>
    <p>Bir Node.js CLI ve web görüntüleyicisi. Bir yapılandırma yükler, sağlayıcılar ve prompt varyantları arasında istekleri dağıtır, deterministik (içerir, regex, eşittir) ve model dereceli (llm-rubric, benzer) iddiaları çalıştırır ve sonuçları yerel bir SQLite veritabanına yazar. Görüntüleyici farkları gösterir ve sonuçları paylaşmanıza olanak tanır.</p>
    <h2>Kurulum / ayarlama</h2>
    <pre>{`# global kurulum
npm install -g promptfoo
promptfoo init
export OPENAI_API_KEY=sk-...`}</pre>
    <h2>İlk çalıştırma</h2>
    <p><code>promptfoo init</code>, örnek bir prompt ve iki test senaryosu içeren bir <code>promptfooconfig.yaml</code> dosyası oluşturur. <code>promptfoo eval</code> komutunu çalıştırın; prompt'ların, sağlayıcıların ve testlerin her kombinasyonunu yürütür ve ardından sonuç ızgarasının bir tarayıcı görünümünü açar.</p>
    <pre>{`$ promptfoo eval
[


] 8/8 tamamlandı
$ promptfoo view
http://localhost:15500 adresini aç`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Hala geçen en ucuz modeli seçmek için aynı test setinde GPT-4o, Claude ve yerel bir Llama'yı karşılaştırın.</li>
      <li>Prompt regresyonlarının asla yayınlanmaması için CI'da <code>promptfoo eval --assert</code> ile pull request'leri engelleyin.</li>
      <li>Uygulamanıza karşı düşmanca girdiler (jailbreak'ler, PII sızıntıları, prompt enjeksiyonu) oluşturmak için <code>promptfoo redteam</code> komutunu çalıştırın.</li>
    </ul>
    <h2>Dikkat edilmesi gerekenler ve ipuçları</h2>
    <p>Model dereceli iddialar, çıktıları derecelendirmek için bir <a href="/learn/llm">LLM</a> kullanır; bu, test başına maliyetin iki katına çıkması ve derecelendiricinin kendisinin yanlış olabilmesi anlamına gelir. Derecelendiriciyi güçlü bir modele (<code>gpt-4o</code> veya <code>claude-3-5-sonnet</code>) sabitleyin, <code>--no-cache=false</code> ile agresif bir şekilde önbelleğe alın ve ilk birkaç çalıştırmada başarısızlıkları manuel olarak kontrol edin.</p>
    <p>Yapılandırma dosyaları hızla büyür. Testleri ayrı YAML dosyalarına bölün ve <code>tests: file://tests/*.yaml</code> ile dahil edin; pahalı sabitleri <code>vars</code> dosyalarında saklayın, böylece ana yapılandırmaya 500 satırlık prompt'lar yapıştırmazsınız. Paylaşılan bir arka uç yoksa geçmişi korumak için SQLite veritabanını kaydedin.</p>
    <h2>Kimler için</h2>
    <p>Prompt'ları üretim kodu olarak ele alan ve onlar için Jest tarzı bir iş akışı isteyen mühendisler. Ayrıca <a href="/learn/red-team">kırmızı takım</a> alıştırmaları yapan güvenlik ekipleri &mdash; yerleşik saldırı kütüphanesi gerçekten kullanışlıdır ve haftalarca süren manuel çalışmayı kurtarır.</p>
  </>
);