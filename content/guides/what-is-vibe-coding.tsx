import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    &ldquo;<a href="/learn/vibe-coding">Vibe coding</a>&rdquo;, Andrej Karpathy'nin 2025'te yazılım geliştirmede yaşanan değişimi tanımlamak için kullandığı bir terimdir: niyeti doğal dille ifade edip bir yapay zekanın kodu yazmasını, çalıştırmasını ve düzeltmesini sağlamak. 2026 itibarıyla birçok bağımsız kurucu, hobi geliştirici ve hatta profesyonel bu yöntemle prototip oluşturuyor.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Gerçekte nasıl görünüyor</h2>
    <p>
      Bir dosya açmıyorsunuz. Cursor, Bolt.new, Lovable, v0 veya Replit Agent'ı açıp &ldquo;bana giriş yapma özelliği olan bir takvim uygulaması yap&rdquo; yazıyorsunuz. Yapay zeka kodu oluşturuyor, bir sanal alanda çalıştırıyor, size sonucu gösteriyor ve siz &ldquo;butonları yuvarlak yap&rdquo; veya &ldquo;saat dilimi desteği ekle&rdquo; diyerek iyileştirme yapıyorsunuz. Koda neredeyse hiç bakmıyorsunuz.
    </p>

    <h2>Neye iyi geliyor</h2>
    <ul>
      <li><strong>Prototipler:</strong> bir fikri bir öğleden sonrada doğrulayın.</li>
      <li><strong>İç araçlar:</strong> şirket içi uygulamaların %80'i ustalık gerektirmez, sadece çalışması yeterlidir.</li>
      <li><strong>Geliştirici olmayanlar:</strong> bir pazarlamacı, geliştirici sırası beklemeden bir açılış sayfası aracı çıkarabilir.</li>
      <li><strong>Yan projeler:</strong> başlama eşiği sıfıra iner.</li>
    </ul>

    <h2>Neye iyi gelmiyor</h2>
    <ul>
      <li><strong>Ölçekte üretim:</strong> güvenlik, performans, gözlemlenebilirlik ve uç durumların tümü kod incelemesi gerektirir.</li>
      <li><strong>Kritik görevler:</strong> tıp, finans ve hataların gerçekten zarar verebileceği her şey.</li>
      <li><strong>Uzun ömürlü kod tabanları:</strong> yapay zeka tarafından üretilen kod tutarsızlıkları biriktirir.</li>
    </ul>

    <h2>2026 araç zinciri</h2>
    <ul>
      <li><strong>Bolt.new</strong> &mdash; tam yığın, tarayıcı içi, çalışan bir uygulamaya en hızlı yol.</li>
      <li><strong>Lovable</strong> &mdash; görüş sahibi, güzel arayüzler sunar.</li>
      <li><strong>v0 (Vercel)</strong> &mdash; UI bileşenleri + Next.js + dağıtım.</li>
      <li><strong>Cursor + Claude Code</strong> &mdash; mevcut bir kod tabanına vibe coding yapmak için.</li>
      <li><strong>Replit Agent</strong> &mdash; oluşturma ve barındırma tek bir yerde.</li>
    </ul>

    <p>
      Bunları <a href="/tools/ai-agent-platform-comparison">aracı platform karşılaştırması</a> sayfasında karşılaştırın. Daha derinlemesine kodlama aracı seçimleri için <a href="/guides/best-ai-for-coding-2026">2026'nın en iyi kodlama yapay zekası</a> rehberine bakın.
    </p>
  </>
);