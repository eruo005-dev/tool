import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Langfuse, LLM uygulamanızın ilk günden itibaren sahip olması gereken gözlemlenebilirlik katmanıdır &mdash; tek bir OSS yığınında izler, puanlar, istemler ve değerlendirmeler.</p>);

export const body: ReactElement = (
  <>
    <p>Langfuse, &ldquo;sohbet botum neden bunu söyledi?&rdquo; sorununu çözer. Her LLM çağrısını, araç çağrısını ve kullanıcı etkileşimini iç içe bir iz olarak yakalar, gecikme ve maliyet hesaplamaları ekler ve çıktıları manuel olarak veya LLM yargıç ile puanlamanıza olanak tanır. Açık kaynaklıdır, kendi kendine barındırılabilir ve birkaç satır kodla Python veya JS uygulamalarına entegre olur.</p>
    <h2>Ne olduğu</h2>
    <p>Bir Next.js + Postgres + ClickHouse yığını (nesne depolama için Redis ve S3). Python ve TypeScript için SDK'lar, yayınlama API'sine olaylar gönderir ve bu olaylar, yayılmalar, nesiller ve olaylardan oluşan izleri doldurur. Arayüz, izleri görüntüler, metrikleri toplar ve istem sürümlerine karşı veri kümesi tabanlı değerlendirmeler çalıştırır.</p>
    <h2>Kurulum / ayarlama</h2>
    <pre>{`# kendi kendine barındırma
git clone https://github.com/langfuse/langfuse
cd langfuse
docker compose up -d
# veya bulutu kullan
pip install langfuse`}</pre>
    <h2>İlk çalıştırma</h2>
    <p>cloud.langfuse.com adresine veya kendi kendine barındırdığınız URL'ye kaydolun, bir proje oluşturun ve genel ve gizli anahtarları kopyalayın. Uygulamanızı enstrümante edin: giriş işlevine bir dekoratör veya bir <code>@observe()</code> eklemek, panoda iç içe izleri görmeye başlamak için yeterlidir.</p>
    <pre>{`$ python
from langfuse.decorators import observe
@observe()
def sor(q): return llm.invoke(q)
sor("merhaba")
# iz arayüzde görünür`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Langfuse'de sistem istemlerini sürümlemek için İstemleri kullanın ve çalışma zamanında <code>langfuse.get_prompt()</code> ile bunları çekin.</li>
      <li>Üretim izlerinden Veri Kümeleri oluşturun, ardından yeni istem sürümlerini tanıtmadan önce bunlara karşı Değerlendirmeler çalıştırın.</li>
      <li>Zaman içinde kaliteyi takip etmek için arayüzde izleri puanlayın (beğen/beğenme) veya LLM yargıç şablonları aracılığıyla otomatik olarak puanlayın.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>ClickHouse, v3 itibarıyla zorunludur ve eski Postgres yalnız yığından daha ağırdır. Küçük bir sanal makinede kendi kendine barındırıyorsanız, yayınlama işçisi geride kalabilir ve izler dakikalar sonra gelir. Örneğinizi ClickHouse için boyutlandırın, Next.js için değil.</p>
    <p>Maliyet doğruluğu, token sayımlarına bağlıdır. Model sağlayıcınız kullanımı döndürmezse, Langfuse metinden tahmin eder &mdash; kabaca doğru için iyi, faturalama için kötü. Maliyet panolarınızın kurgu olmaması için <code>langfuse.generation()</code> işlevini manuel olarak çağırdığınızda her zaman <code>usage</code> parametresini açıkça iletin.</p>
    <h2>Kimler için</h2>
    <p>Gerçek kullanıcılara bir LLM özelliği gönderen herhangi bir ekip. Günde 10'dan fazla konuşmanız olduğu ve birinin &ldquo;iyileşiyor mu yoksa kötüleşiyor mu?&rdquo; diye sorduğu an, Langfuse veya benzeri bir şeye ihtiyacınız var.</p>
  </>
);