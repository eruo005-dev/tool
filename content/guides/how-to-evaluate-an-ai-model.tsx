import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Genel kıyaslamalar (MMLU, SWE-bench, HumanEval) faydalıdır ancak sizi yalnızca bir yere kadar götürür. Hangi modelin <em>sizin</em> kullanım senaryonuz için gerçekten en iyisi olduğunu bilmek için, onu kendi görevlerinizde değerlendirmeniz gerekir. İşte birkaç saat süren ve aylarca sürecek model değiştirme işlemlerinden tasarruf ettiren 2026 protokolü.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>4 adımlı değerlendirme protokolü</h2>

    <h3>1. 30 görevlik bir değerlendirme seti oluşturun (1 saat)</h3>
    <p>
      Gerçek işinizi temsil eden 30 görev seçin. Uç durumları, belirsizlikleri ve alanınıza özgü tuhaflıkları kapsayın. Girdileri ve "ideal" çıktılarınızı (veya çıktılar açık uçluysa değerlendirme kriterlerinizi) kaydedin. 30 görev ideal sayıdır; istatistiksel olarak anlamlı olacak kadar çok, elle notlandırmak için yeterince az.
    </p>

    <h3>2. Her aday modeli aynı <a href="/learn/system-prompt">sistem yönergesi</a> ile çalıştırın (30 dk)</h3>
    <p>
      Tutarlı bir yönerge şablonu kullanın. Bir modele diğerinden daha uzun talimatlar veya daha fazla örnek vererek avantaj sağlamayın. Adil bir karşılaştırma için, her adayı varsayılan <a href="/learn/temperature-ai">sıcaklık</a> ve aynı bağlamla çalıştırın. Çıktıları kaydedin.
    </p>

    <h3>3. Değerlendirme kriterleriyle notlandırın (1 saat)</h3>
    <p>
      Her çıktıyı ilgili boyutlarda 1-5 arası puanlayın: doğruluk, bağlılık, biçim uyumu, kısalık. Model başına ortalama puana göre toplayın. Rakamlar sizi şaşırtacak; gündelik sohbette "en iyi" gibi görünen model, tutarlılıkta genellikle kaybeder.
    </p>

    <h3>4. Başarısızlıkları gözden geçirin (30 dk)</h3>
    <p>
      Her modelden en kötü 5 çıktıya bakın. Kalıplar size ortalamalardan daha fazlasını söyler. Model A uç durumlarda başarısız oluyor ancak yaygın durumu mükemmel yapıyorsa ve Model B her alanda vasatsa, üretim için A kazanır.
    </p>

    <h2>Gerçekte ne ölçülmeli</h2>
    <ul>
      <li><strong>Doğruluk:</strong> Doğrulanabilir cevapları olan görevlerde ikili doğru/yanlış.</li>
      <li><strong>Bağlılık:</strong> Çıktı, sağlanan kaynağa sadık kalıyor mu? (RAG için en önemlisi.)</li>
      <li><strong>Talimata uyum:</strong> Sizden isteneni gerçekten yaptı mı?</li>
      <li><strong>Biçim uyumu:</strong> JSON istediğinizde JSON çıktısı verdi mi?</li>
      <li><strong>Gecikme süresi:</strong> İlk token ve tamamlama için p50 ve p95.</li>
      <li><strong>Görev başına maliyet:</strong> Toplam girdi + çıktı tokenları × fiyat.</li>
    </ul>

    <h2>Bunu kolaylaştıracak araçlar</h2>
    <ul>
      <li><strong>OpenAI <a href="/learn/evals">Evals</a></strong> &mdash; Yapılandırılmış değerlendirme çerçevesi, modelden bağımsız.</li>
      <li><strong>Promptfoo</strong> &mdash; YAML tabanlı çok modelli karşılaştırma. En kolay başlangıç noktası.</li>
      <li><strong>Anthropic Workbench</strong> &mdash; Claude'a özel yineleme için.</li>
      <li><strong>LangSmith</strong> &mdash; İzleme + değerlendirme, LangChain ile entegre olur.</li>
      <li><strong>Braintrust / Humanloop</strong> &mdash; Üretim düzeyinde değerlendirme operasyonları.</li>
    </ul>

    <h2>Kaçınılması gereken tuzak</h2>
    <p>
      5 yönergeyle "hissiyat kontrolü" yapmak ve <em>o 5'te</em> en iyi cevabı veren modeli seçmek. Taraflısınız. Her zaman ölçekte (30+ görev) değerlendirin ve yapısal olarak notlandırın. 2026'da hala birçok kişi model seçerken hissiyat kontrolü yapıyor, bu yüzden pek çok üretim dağıtımı yanlış modeli kullanıyor.
    </p>
    <p>
      Modelleri karşılaştırın: <a href="/tools/frontier-model-tracker">sınır modeli izleyici</a>. Maliyet karşılaştırması: <a href="/tools/claude-vs-deepseek-cost-calculator">Claude vs DeepSeek</a>.
    </p>
  </>
);