/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Geliştiricilerin sevdiği bir CLI ile sadece katlandıkları bir CLI arasındaki fark özellikler değil, küçük detaylardır. ripgrep, fd, gh, kubectl ve hyperfine gibi araçların tümü bir dizi prensibi paylaşır. Bu kılavuz, bu prensiplerin yoğunlaştırılmış bir versiyonudur ve ayrıca ekibinizin kullanmasını istediğiniz araçları oluştururken uygulayacağınız iş akışı otomasyon prensiplerini de içerir.
    </p>
  </>
);

export const toc = [
  { id: "principles", label: "6 tasarım prensibi" },
  { id: "ux", label: "Önemli olan ilk kullanım UX detayları" },
  { id: "automation", label: "Geliştiricilerin gerçekten kullandığı iş akışı otomasyon araçları" },
  { id: "checklist", label: "16 maddelik öz değerlendirme kontrol listesi" },
];

export const body = (
  <>
    <h2 id="principles">Geliştiricilerin sevdiği CLI araçları için 6 tasarım prensibi</h2>
    <ol>
      <li>
        <strong>Birleştirilebilirlik.</strong> Aracınız bir Unix ilkelidir. Varsayılan çıktı, sorunsuz bir şekilde başka bir araca aktarılmalıdır. Kullanıcıların aracınızı kırılgan metinleri ayrıştırmadan betiklerde kullanabilmesi için yapılandırılmış çıktı (JSON) ekleyin. CLI tasarımındaki en büyük güç çarpanı.
      </li>
      <li>
        <strong>Makul varsayılanlar, yapılandırılabilir düğmeler.</strong> %80'lik durum sıfır bayrakla çalışmalıdır. %20'lik duruma açık bayraklarla ulaşılabilmelidir. Aracınız yararlı bir şey yapmak için bir README okumayı gerektiriyorsa, varsayılan yanlıştır.
      </li>
      <li>
        <strong>İnsan gibi konuşun, makine gibi değil.</strong> Hata mesajları kullanıcıya ne olduğunu ve bundan sonra ne yapması gerektiğini söyler. "Bağlantı reddedildi" işe yaramaz. "Bağlantı reddedildi — $XDG_CONFIG_HOME/foo/auth adresindeki belirtecinizin süresi dolmuş olabilir; `foo auth refresh` komutunu çalıştırın" altın değerindedir.
      </li>
      <li>
        <strong>Varsayılan olarak güven.</strong> Sessizce bir şeyleri silmeyin, sunucunuza veri göndermeyin veya genel durumu değiştirmeyin. Yıkıcı işlemler bir --dry-run veya onay gerektirir. Telemetri, kullanıcının açık iznine bağlı olmalıdır (veya en azından belgelenmeli ve devre dışı bırakılması kolay olmalıdır).
      </li>
      <li>
        <strong>Platformlar arasında tahmin edilebilir.</strong> Aynı bayraklar Linux, macOS, Windows'ta çalışır. Aynı çıkış kodları aynı anlama gelir. Aynı giriş dosyası formatı her yerde çalışır. Platformlar arası testler hataları yakalar.
      </li>
      <li>
        <strong>Hızlı geri bildirim.</strong> Saniyeden kısa başlatma süresi. <a href="/learn/stream">Akış</a> çıktısı (yazdırmadan önce her şeyi arabelleğe almayın). Uzun işlemlerde ilerleme göstergeleri. Geliştiriciler sabırsızdır — buna göre tasarım yapın.
      </li>
    </ol>

    <h2 id="ux">Önemli olan ilk kullanım UX detayları</h2>
    <p>
      Bir geliştiricinin CLI'nizle geçirdiği ilk 30 saniye, benimsenme sinyalini belirler. Karşılığını veren detaylar:
    </p>
    <ul>
      <li>
        <strong>Çalışan --help.</strong> --help, -h ve argümansız çağrıların tümü yardımı göstermelidir. Her biri farklı bir kullanıcı zihinsel modelidir.
      </li>
      <li>
        <strong>--help içinde örnekler.</strong> 2-3 gerçek kullanım örneği, herhangi bir miktardaki bayrak açıklamasından daha iyidir.
      </li>
      <li>
        <strong>Sekme tamamlama dahil, isteğe bağlı değil.</strong> bash + zsh + fish tamamlamaları oluşturun; kurulumu 1 komutta belgeleyin.
      </li>
      <li>
        <strong>Boş durum için yararlı varsayılan çıktı.</strong> "Şimdi ne olacak?" en kötü başlangıç noktasıdır. Kullanıcıya ne denemesi gerektiğini gösterin.
      </li>
      <li>
        <strong>Commit SHA ile --version.</strong> Tam derlemeyi bildiğinizde hata raporları 10 kat daha hızlıdır.
      </li>
      <li>
        <strong>Yönlendirmede otomatik olarak devre dışı kalan renk.</strong> Renk TTY'lerde dostanedir; renk kodları yönlendirilmiş çıktıda düşmancadır. Algılayın ve uyum sağlayın.
      </li>
    </ul>

    <h2 id="automation">Geliştiricilerin gerçekten kullandığı iş akışı otomasyon araçları</h2>
    <p>
      CLI olmayan ancak iş akışı otomasyonu olan araçlar için (n8n, GitHub Actions, geliştiriciler için Zapier kategorileri):
    </p>
    <ul>
      <li>
        <strong>On sıkıcı sorunu yarı yarıya çözmektense, bir sıkıcı sorunu tamamen çözün.</strong> Sıkıcı-ve-tam çıtası ("X, Y için bariz seçimdir") ulaşılabilirdir; geniş-ama-sığ çıtası ulaşılabilir değildir.
      </li>
      <li>
        <strong>Geliştiricilerin zaten çalıştığı yerlere entegre olun.</strong> GitHub, Slack, IDE'leri. Ayrı bir giriş gerektiren bağımsız web arayüzleri, genellikle aracı öldüren bir benimseme vergisiyle karşı karşıyadır.
      </li>
      <li>
        <strong>Bir çıkış rampası sağlayın.</strong> Kullanıcılar otomasyonlarını düz kod olarak (bir betik, bir YAML) dışa aktarabiliyorsa, aracınıza daha çok güvenirler. Kilitlenme, benimseme direncini artırır.
      </li>
      <li>
        <strong>Çalıştırmalar sırasında gerçek zamanlı çıktı gösterin.</strong> Yürütmeyi "işleniyor..." döndürücülerinin arkasına gizleyen iş akışı araçları, giderken yazdıran betiklerden daha kötü hissettirir.
      </li>
      <li>
        <strong>Uygulanabilir tanılama ile yüksek sesle başarısız olun.</strong> Bir otomasyonun 7. adımı başarısız olduğunda, kullanıcının 7. adımın başarısız olduğunu, nedenini ve 1-6. adımları yeniden çalıştırmadan nasıl düzelteceğini bilmesi gerekir.
      </li>
    </ul>
    <p>
      Özellikle n8n ve benzeri düşük kodlu otomasyon platformları için: SaaS API'leri (Slack → Jira → E-posta) arasındaki "tutkal" entegrasyonlarında başarılıdırlar. Durum bilgisi olan uzun süreli işlemler veya karmaşık dallanma mantığı gerektiğinde zorlanırlar — bunlar hala gerçek koda aittir.
    </p>

    <h2 id="checklist">16 maddelik öz değerlendirme kontrol listesi</h2>
    <p>
      Yukarıdaki prensipleri etkileşimli bir kontrol listesine dönüştürdük:{" "}
      <a href="/tools/cli-dx-checklist">CLI DX kontrol listemiz</a>. Beş kategori (ilk kullanım, çıktı, hatalar, güven + emniyet, dağıtım), her biri bir gerekçeyle birlikte 16 madde. Öğeleri işaretledikçe tarayıcınıza kaydedilir. Derleme sırasında veya herkese açık lansmandan önce öz değerlendirme olarak kullanın.
    </p>
  </>
);

export const cta = {
  label: "CLI DX kontrol listesini uygulayın (ücretsiz)",
  targetSlug: "cli-dx-checklist",
};

export const faq = [
  {
    q: "Geliştiricilerin seveceği CLI araçlarını nasıl tasarlarım?",
    a: "Altı prensip: birleştirilebilirlik (çıktı temiz bir şekilde aktarılır, yapılandırılmış çıktı mevcuttur), ayarlanabilir düğmelerle makul varsayılanlar, hata mesajlarında insan gibi konuşun, varsayılan olarak güvenin (sessiz yıkıcı eylemler veya açıklanmayan telemetri yok), platformlar arasında tahmin edilebilir, hızlı geri bildirim (saniyeden kısa başlatma, akış çıktısı). Lansmandan önce 16 maddelik öz değerlendirme kontrol listemizi kullanın.",
  },
  {
    q: "İyi bir geliştirici aracını ne oluşturur?",
    a: "On sorunu yarı yarıya çözmektense bir sıkıcı sorunu tamamen çözmek, geliştiricilerin zaten çalıştığı yerlere entegre olmak (GitHub, Slack, IDE), kilitlenme olmadan bir çıkış rampası sağlamak, yürütme sırasında gerçek zamanlı çıktı göstermek, uygulanabilir tanılama ile yüksek sesle başarısız olmak. İlk kullanım UX'i, özellik sayısından daha önemlidir.",
  },
  {
    q: "Geliştiricilerin gerçekten kullanacağı otomasyon araçları nasıl oluşturulur?",
    a: "Bir problemde derinleşmek, birçok problemde sığ kalmaktan iyidir. Bulundukları yere entegre olun (GitHub/Slack/IDE) — bağımsız web arayüzleri benimsemeyi kaybeder. Kullanıcıların platforma güvenmesi için bir çıkış rampası (düz koda dışa aktarma) sağlayın. Gerçek zamanlı çıktı gösterin. Uygulanabilir tanılama ile yüksek sesle başarısız olun. SaaS-tutkal otomasyonları için n8n ile oluşturun; karmaşık/uzun süreli iş akışları için gerçek kodu ayırın.",
  },
  {
    q: "Geliştirici otomasyonu için n8n nasıl öğrenilir?",
    a: "Resmi hızlı başlangıç kılavuzuyla başlayın (~30 dk). Kendi iş akışınızdan 2-3 gerçek otomasyon oluşturun (PR incelemesinde Slack bildirimi, GitHub sorunu → Jira bileti vb.). Kavramsal sıçrama, zorunlu betiklerden düğüm tabanlı akışlara geçiştir — çoğu geliştirici bunu birkaç proje içinde sezgisel bulur. Güçlü yönler: SaaS-tutkal entegrasyonları. Zayıf yönler: durum bilgisi olan uzun süreli mantık, karmaşık dallanma.",
  },
];