export const intro = (
  <>
    <p>
      GitHub Copilot en yaygın kullanılan yapay zeka kodlama aracıdır — yaklaşık 15
      milyon geliştirici tarafından kullanılıyor. 2026'nın başlarında anlamlı bir
      yükseltme aldı: Claude ve Codex model erişimi tüm plan katmanlarına (Pro dahil
      $10/ay) açıldı ve <strong>Copilot Workspace</strong> — doğrudan issue'lar ve
      pull request'ler üzerinde çalışan ajan modu — gerçek bir uçtan uca iş akışına
      dönüştü.
    </p>
    <p>
      Bu kılavuz özellikle Copilot'un <em>ajan tarafına</em> odaklanıyor: bir GitHub
      issue'sinden, Copilot'un aradaki işi yaptığı çalışan bir PR'a nasıl gidilir.
      Sadece otomatik tamamlama istiyorsanız, zaten ona sahipsiniz.
    </p>
  </>
);

export const body = (
  <>
    <h2>Copilot Workspace / ajan modu nedir?</h2>
    <p>
      Copilot Workspace, bir GitHub issue'sini girdi olarak alır, bir çözüm planlar,
      dosyaları düzenler, testleri çalıştırır ve bir PR oluşturur.{" "}
      <a href="https://github.com/copilot">github.com/copilot</a> adresinde ve
      VS Code'un Copilot Chat'i içinde bulunur. Yine de her diff'i siz incelersiniz —
      her diff'i her zaman incelersiniz — ancak iskelet sizin için hazırlanır.
    </p>

    <h2>Adım 1 — Planınızın ajan moduna sahip olduğundan emin olun</h2>
    <p>
      Ajan modu Pro ve üzeri planlardadır. Ücretsiz katman otomatik tamamlama ve sohbet
      alır ancak çok dosyalı ajanı almaz. Business/Enterprise, denetim günlükleri,
      IP tazminatı ve yönetici kontrolleri ekler. Planınızı{" "}
      <a href="https://github.com/settings/copilot">github.com/settings/copilot</a>
      adresinden kontrol edin.
    </p>

    <h2>Adım 2 — Doğru modeli seçin</h2>
    <p>
      Şubat 2026 güncellemesinden bu yana, Copilot'un model seçici, planlar arasında
      Claude ve Codex seçeneklerini sunar. Ajan modu çalışması için şunları seçin:
    </p>
    <ul>
      <li><strong>Claude Opus 4.7</strong> — derin akıl yürütme, çok dosyalı değişiklikler.</li>
      <li><strong>GPT-5 / Codex</strong> — yapılandırılmış düzenlemeler, iyi araç kullanımı.</li>
      <li><strong>Claude Sonnet</strong> — rutin değişiklikler için daha hızlı, daha ucuz.</li>
    </ul>
    <p>
      Oturum ortasında geçiş yapabilirsiniz. Bir yeniden düzenleme için Opus/GPT-5 ile başlayın;
      &ldquo;null kontrolü ve bir test ekle&rdquo; için Sonnet yeterlidir.
    </p>

    <h2>Adım 3 — Issue'yu bir brifing gibi yazın</h2>
    <p>
      Ajanın çıktısının kalitesi, issue'nun kalitesiyle sınırlıdır.
      İyi issue'lar şunları içerir:
    </p>
    <ul>
      <li>Ne bozuk veya eksik (bir örnekle).</li>
      <li>Beklenen davranışın ne olduğu.</li>
      <li>Hangi dosyalara veya alanlara bakılacağı.</li>
      <li>Herhangi bir kısıtlama (X'e dokunma, Y API'sini sabit tut).</li>
    </ul>
    <p>
      Bunu, gerçek zamanlı olarak konuşamayacağınız yetenekli bir kıdemsiz mühendise brifing
      vermek gibi düşünün. Belirsiz issue'lar, belirsiz PR'lar üretir.{" "}
      <a href="/tools/prompt-improver">Prompt iyileştirici</a>miz issue metni üzerinde de
      çalışır — metni yapıştırın, daha sıkı bir sürüm elde edin.
    </p>

    <h2>Adım 4 — Issue'yu Copilot'a devredin</h2>
    <p>
      Bir GitHub issue'sinden <strong>Assign to Copilot</strong>'a tıklayın (veya
      Copilot Workspace'te açın). Ajan bir plan üretir — değiştirmeyi amaçladığı dosyaların
      listesi ve neden. Bunu onaylamadan önce dikkatlice okuyun.
      Kötü PR'ların %90'ı sorgulanmayan kötü planlardır.
    </p>

    <h2>Adım 5 — Sadece diff'i değil, planı da inceleyin</h2>
    <p>
      Plan, kapsam kaymasını yakaladığınız yerdir. Ajan 2 satırlık bir hata düzeltmesi için
      14 dosyaya dokunacağını söylüyorsa, durun ve yönlendirin.
      Planı düzenlemek ucuzdur. PR'ı sonradan düzenlemek pahalıdır.
    </p>

    <h2>Adım 6 — Çalışmasına izin verin, ardından insan PR'ı gibi inceleyin</h2>
    <p>
      Planı onayladıktan sonra Copilot kodu yazar, testleri çalıştırır (yapılandırılmışsa)
      ve bir dal gönderir. Yapay zeka tarafından oluşturulmuş bir açıklama ile PR'ı açar.
      Bunu, bir takım arkadaşınızın çalışmasını incelediğiniz gibi inceleyin:
    </p>
    <ul>
      <li>Sadece özeti değil, gerçek diff'i okuyun.</li>
      <li>Riskli bir şeye dokunuyorsa kodu yerel olarak çalıştırın.</li>
      <li>Testlerin değişikliği gerçekten test ettiğini, sadece geçmediğini kontrol edin.</li>
      <li>İstemediğiniz ilgisiz düzenlemeleri arayın.</li>
    </ul>

    <h2>Adım 7 — Yorum yaparak yineleyin</h2>
    <p>
      Copilot, PR yorumlarına yanıt verir. Manuel olarak düzeltmek yerine,
      &ldquo;bu mantık null'ı işlemeli&rdquo; gibi bir inceleme yorumu bırakın ve
      ajan bir takip commit'i gönderir. Küçük detaylar için yine de manuel olarak düzenleyin —
      tam bir ajan gidiş-dönüşünden daha hızlıdır.
    </p>

    <h2>Adım 8 — Depo düzeyinde kurallar yapılandırın</h2>
    <p>
      Bir <code>.github/copilot-instructions.md</code> dosyası ekleyin. Copilot, her ajan
      görevinde bunu otomatik olarak okur. Depo kurallarınızı oraya koyun —
      framework sürümü, test komutu, stil kuralları. Cursor'un{" "}
      <code>.cursorrules</code> ve Claude Code'un <code>CLAUDE.md</code> dosyasıyla aynı fikir.
    </p>

    <h2>Copilot ajan modu vs. alternatifleri ne zaman kullanmalı</h2>
    <p>
      Copilot, işiniz zaten GitHub'da yaşadığında kazanır — issue, PR, inceleme,
      birleştirme. Sıkı entegrasyon özelliktir.{" "}
      <a href="/guides/how-to-set-up-claude-code">Claude Code</a>, yerel depolar üzerinde
      uzun akıl yürütme için kazanır.{" "}
      <a href="/guides/how-to-set-up-cursor-ai-ide">Cursor</a>, düzenleyici içi akış için
      kazanır. Çoğu ekip üçünü de kullanır ve göreve hangisi uyuyorsa onu kullanır.
    </p>

    <h2>Güvenlik ve gizlilik</h2>
    <p>
      Business ve Enterprise Copilot planları kodunuz üzerinde eğitim yapmaz ve
      IP tazminatı sağlar. Pro'da, ajana hassas bir şey yönlendirmeden önce{" "}
      <a href="https://github.com/settings/copilot">settings/copilot</a> adresindeki
      gizlilik ayarlarını çift kontrol edin. API anahtarlarını, sırları veya müşteri
      verilerini asla prompt'lara veya issue'lara koymayın — bu her kodlama ajanı için geçerlidir.
    </p>
  </>
);