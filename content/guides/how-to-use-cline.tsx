import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Cline (eski adıyla Claude Dev), VS Code yan panelinde çalışan otonom bir kodlama aracısıdır.
    Dosyalarınızı okur, düzenler, terminal komutlarını çalıştırır ve bir tarayıcıyı yönetebilir &mdash; tüm bunları
    insanın döngüde olduğu bir onay mekanizmasıyla yapar, böylece her değişikliği uygulanmadan önce görürsünüz.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Cline aslında nedir</h2>
    <p>
      Cline, bir öncü <a href="/learn/llm">LLM</a>'yi araç kullanan bir aracı döngüsüne saran bir VS Code eklentisidir. Her
      turda bir araç seçer &mdash; dosya oku, dosya yaz, komut çalıştır, ara, URL getir, tarayıcı
      kullan &mdash; ve siz eylemi onaylar veya reddedersiniz. Kullandığınız model zekayı sağlar;
      Cline ise altyapıyı, bir fark arayüzünü ve izin istemlerini sağlar.
    </p>

    <h2>Kurulum</h2>
    <p>
      VS Code Marketplace'ten <strong>Cline</strong> eklentisini yükleyin (yayıncı
      saoudrizwan'dır). Yan paneli açın, bir sağlayıcı seçin &mdash; Anthropic, OpenRouter, AWS
      Bedrock, GCP Vertex veya yerel bir Ollama uç noktası &mdash; ve bir anahtar yapıştırın. OpenRouter, üç ayrı hesap açmadan Claude, GPT ve Gemini'yi denemek istiyorsanız kolay düğmedir.
    </p>

    <h2>İlk görev</h2>
    <p>
      Cline panelini açın, somut bir şey yazın: &ldquo;bir{" "}
      <code>/api/users/:id</code> rotasına zod girdi doğrulaması, mutlu yol testi ekle ve
      OpenAPI dosyasını güncelle.&rdquo; Cline plan yapacak, dosyaları listeleyecek, ihtiyaç duyduklarını açacak ve
      bir fark görünümünde düzenlemeler önerecek. Her adımı onaylayın veya salt okunur eylemler için <strong>Otomatik onayla</strong> seçeneğini açın, böylece her <code>cat</code> komutunda durmaz.
    </p>

    <h2>Plan ve Uygulama modu</h2>
    <p>
      Plan modu yalnızca sohbet içindir &mdash; aracı okuyabilir ancak yazamaz. Önce tasarımı müzakere etmek için kullanın (&ldquo;bu nerede olmalı, hangi mevcut yardımcıyı yeniden kullanıyoruz&rdquo;) ve
      ardından uygulamak için Uygulama moduna geçin. Önemsiz olmayan bir işte Plan'ı atlamak, Cline kullanıcılarının atmak zorunda kalacakları bir ilk taslak için token harcamasının en yaygın yoludur.
    </p>

    <h2>Önemli yapılandırmalar</h2>
    <p>
      Güvendiğiniz okuma ve kabuk komutları (lint, test, tip kontrolü) için <strong>Otomatik onayla</strong> seçeneğini ayarlayın, ancak <code>rm</code>, <code>git push</code> ve çalışma alanı dışındaki yazma işlemlerini
      kısıtlayın. Bir <code>.clinerules</code> dosyası ekleyin &mdash; bu dosya sistem istemine enjekte edilir
      ve Cline'a &ldquo;her zaman pnpm kullan, asla npm kullanma&rdquo; veya &ldquo;işin bittiğini iddia etmeden önce <code>make check</code> komutunu çalıştır&rdquo; demenin yoludur. Uzun bir oturumda Sonnet kullanıyorsanız, model seçici aracılığıyla <a href="/learn/context-window">bağlam penceresi</a> harcamasını sınırlayın.
    </p>

    <h2>Cline'ın parladığı yerler</h2>
    <p>
      Orta ve büyük ölçekli özellikler; test paketini çalıştırabilen, hatayı okuyabilen ve
      yinelemeye devam edebilen bir aracı istediğinizde &mdash; tüm bunları VS Code'da farkları görsel olarak incelerken yapar. Tarayıcı aracı, çalışan bir ön ucu sekme değiştirmeden kontrol etmek için gerçekten kullanışlıdır.
    </p>

    <h2>Ne zaman kullanılmamalı</h2>
    <p>
      JetBrains veya Neovim kullanıyorsanız, Cline size göre değil &mdash; bunun yerine Continue veya Aider
      deneyin. Ayrıca, Copilot tarzı satır içi tamamlamanın daha hızlı olduğu tek satırlık düzeltmeler için gereksizdir. Ve faturaya dikkat edin: büyük bir bağlamı olan bir depoda Claude Sonnet çalıştırmak, bir öğleden sonrada bir aylık Copilot ücretinden daha fazlaya mal olabilir, bu nedenle ilk günden bir sağlayıcı harcama limiti belirleyin.
    </p>
  </>
);