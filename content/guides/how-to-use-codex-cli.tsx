import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Codex CLI, OpenAI&rsquo;nin açık kaynaklı terminal ajanıdır: dosyaları düzenleyen, shell komutları çalıştıran ve bir sandbox içinde kod hakkında akıl yürüten bir `codex` komutu.
  </p>
);

export const body: ReactElement = (
  <>
    <p>
      Codex CLI, OpenAI&rsquo;nin kodlama için optimize edilmiş modelleri tarafından desteklenen, komut satırında bir ajan döngüsü sunar. Herhangi bir dizinde `codex` başlatır, bir görev tanımlarsınız ve dosyaları okur, düzenlemeler önerir, komutlar çalıştırır ve görev tamamlanana veya girdinize ihtiyaç duyana kadar yineler. Bir sohbet penceresinin aksine, yürütmeyi bir sandbox içinde tutar ve diske dokunmadan önce onay için farkları (diff) gösterir, bu da gerçek işleri emanet etmeyi daha güvenli hale getirir.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      Codex CLI, GitHub'da OpenAI'den Apache-2.0 lisanslı bir projedir. Bir npm paketi olarak gelir ve bir ChatGPT girişi (planınızın kullanımına bağlı) veya bir OpenAI API anahtarı ile kimlik doğrulaması yapar. Ajan çok modludur &mdash; terminale yapıştırılan görselleri okuyabilir &mdash; ve arka planda Responses API'yi kullanır. Araçları genişletmek için <a href="/learn/mcp">MCP</a> sunucularını destekler.
    </p>

    <h2>Kurulum</h2>
    <pre>{`# Node 20+
npm install -g @openai/codex

# ilk çalıştırmada giriş veya API anahtarı istenir
codex
`}</pre>

    <h2>İlk oturum</h2>
    <p>
      Bir proje dizininde `codex` çalıştırın. Bir onay modu seçin (öner, otomatik düzenle veya tam otomatik) ve bir görev tanımlayın.
    </p>
    <pre>{`$ codex
> tests/users.spec.ts dosyasındaki başarısız testi düzelt
&rarr; testi okur &rarr; kaynağı tarar &rarr; yama önerir &rarr; npm test çalıştırır`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Hata triyajı &mdash; başarısız bir CI günlüğünü yapıştırın ve Codex'in yerel olarak yeniden oluşturmasına ve yama yapmasına izin verin.</li>
      <li>Küçük özellikler &mdash; tek bir uç nokta veya bileşen kapsamı belirleyin ve otomatik düzenleme modunda çalışmasına izin verin.</li>
      <li>Yeniden düzenlemeler &mdash; bir yeniden adlandırma veya çıkarma isteyin, farkı inceleyin, commit yapın.</li>
    </ul>

    <h2>Püf noktaları ve ipuçları</h2>
    <p>
      Tam otomatik mod caziptir ancak görev belirsizse büyük kod parçalarını mutlu bir şekilde yeniden yazar. Üretime yakın her şey için öner modunu kullanın ve kirli çalışma ağaçlarını uzak tutun &mdash; Codex bazen değişiklikleri aşamalandırır ve sonra geri alır. Başlamadan önce commit veya stash yapın.
    </p>
    <p>
      Sandbox, bazı platformlarda varsayılan olarak ağı engeller; göreviniz npm install veya curl gerektiriyorsa, bu oturum için ağ erişimini açıkça etkinleştirin. Depo kökündeki bir codex.md veya AGENTS.md dosyası, her çalıştırmada geçerli olan kuralları sabitlemenizi sağlar.
    </p>

    <h2>Kimler için</h2>
    <p>
      OpenAI ekosisteminde olan ve ChatGPT'nin kod yorumlayıcısına terminal tabanlı bir alternatif isteyen, yerel dosya sistemlerine gerçek erişime sahip geliştiriciler. Bir test-düzeltme göreviyle başlayın &mdash; dar, doğrulanabilir ve aracın davranışı için harika bir sağlık kontrolü.
    </p>
  </>
);