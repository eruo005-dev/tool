import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Phind, geliştiriciler için oluşturulmuş bir AI arama motorudur &mdash; web tabanlı alıntılar ve kendi kod odaklı modeli ile teknik soruları yanıtlar.</p>);

export const body: ReactElement = (
  <>
    <p>Phind, canlı web aramasını özel olarak ince ayar yapılmış bir <a href="/learn/llm">LLM</a> (Llama mimarilerine dayalı Phind-70B) ile birleştirerek programlama sorularını yanıtlar. Genel sohbet robotlarının aksine, kaynakları belirtir ve kod bloklarını sözdizimi vurgulamasıyla biçimlendirir, bu da onu &ldquo;cevabı sizin için yazan Stack Overflow&rdquo;a yaklaştırır.</p>
    <h2>Ne olduğu</h2>
    <p>Phind, ilgili sayfaları (dokümanlar, GitHub sorunları, blog yazıları) getiren ve bunları modeline bağlam olarak besleyen bir arama hattı çalıştırır. Phind-70B (hızlı, varsayılan) ile Claude Sonnet veya GPT gibi Pro modelleri arasında seçim yapabilirsiniz. Web arayüzü, VS Code eklentisi ve Pro kullanıcıları için API erişimi sunar.</p>
    <h2>Kurulum / kayıt</h2>
    <pre>{`# Web
open https://www.phind.com

# VS Code
code --install-extension Phind.phind

# Pro planı (daha büyük modeller ve daha yüksek limitler)
# https://www.phind.com/plans  ($20/ay)`}</pre>
    <h2>İlk oturum</h2>
    <p>Arama çubuğuna teknik bir soru yazın. Phind, satır içi alıntı etiketleriyle bir cevap akışı sağlar; kaynak sayfasını açmak için herhangi bir etikete tıklayın. Takip soruları aynı arama iş parçacığını korur.</p>
    <pre>{`$ # Örnek komut
> FastAPI'den bir React istemcisine sunucu tarafından gönderilen olayları nasıl akışla aktarırım?
# Phind, her iki taraf için kod + 6 alıntı etiketi döndürür`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>1. Bir hata mesajı yapıştırın &mdash; Phind, sorun izleyicilerini arar ve en yakın eşleşen GitHub sorunuyla birlikte düzeltmeyi döndürür.</li>
      <li>2. VS Code eklentisinde &ldquo;Pair Programmer&rdquo; modunu kullanarak dosyaları satır içi önerilerle düzenleyin.</li>
      <li>3. İş parçacıklarını bir Çalışma Alanına kaydedin, böylece ekibiniz daha önce yanıtlanmış sorulara göz atabilir.</li>
    </ul>
    <h2>İpuçları ve püf noktaları</h2>
    <p>Phind'in gücü tazeliğidir &mdash; yeni kütüphane sürümlerinde genellikle standart ChatGPT'yi geride bırakır çünkü mevcut dokümantasyon sayfasını gerçekten okur. Zayıf yönü uzun muhakeme zincirleridir; çok dosyalı yeniden düzenleme için özel bir kodlama aracısı kullanmak daha iyidir.</p>
    <p>Ücretsiz katman, günlük Pro model kullanımını sınırlar ancak Phind-70B'yi sınırsız bırakır. Kodun yanında daha fazla açıklama istiyorsanız, ayarlardan &ldquo;Kısa cevaplar&rdquo; seçeneğini kapatın.</p>
    <h2>Kimler için</h2>
    <p>Günde onlarca kez Google'da arama yapan ve bir kez sorup alıntılı, kod odaklı bir cevap almayı tercih eden geliştiriciler.</p>
  </>
);