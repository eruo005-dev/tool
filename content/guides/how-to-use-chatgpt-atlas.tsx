import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    ChatGPT Atlas, OpenAI&rsquo;nin bağımsız aracı tarayıcısıdır &mdash; GPT-5 ve Operator entegre edilmiş Chromium tabanlı bir tarayıcı. Bir yapay zekanın sizin adınıza web üzerinde gerçekten işler <em>yapmasını</em> sağlamanın en temiz yoludur. İşte iş akışınızı bozmadan ondan nasıl değer alabileceğiniz.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Atlas'ın iyi olduğu şeyler</h2>
    <ul>
      <li><strong>Sekmeler arası özetleme:</strong> 6 açık sekmeyi vurgulayın, bir sentez alın.</li>
      <li><strong>Form doldurma:</strong> &ldquo;bunu iş adresimle doldur&rdquo; dediğinizde çalışır.</li>
      <li><strong>Çok adımlı araştırma:</strong> &ldquo;bana 5 milyon doların altında fon alan 5 SaaS rakibi bul&rdquo;.</li>
      <li><strong>Rezervasyon akışları:</strong> Operator uçuşları, otelleri, restoran rezervasyonlarını halleder.</li>
      <li><strong>Alışveriş karşılaştırması:</strong> &ldquo;bu ceketin bedenime uygun en ucuz versiyonu&rdquo;.</li>
    </ul>

    <h2>Henüz iyi olmadığı şeyler</h2>
    <ul>
      <li>Banka düzeyinde kimlik doğrulama gerektiren giriş akışları (2FA için sizin müdahale etmeniz gerekecek).</li>
      <li>Uzun süre çalışan arka plan aracıları &mdash; Operator oturum süresi 2026'da sınırlanıyor.</li>
      <li>Eğitim dağılımında olmayan, son derece özelleştirilmiş kurumsal SaaS arayüzleri.</li>
    </ul>

    <h2>Gizlilik notları</h2>
    <p>
      Tarama verileri varsayılan olarak OpenAI üzerinden yönlendirilir. Hassas oturumlar için gizli moda geçin (Operator gizli modda çalışamaz) veya tamamen ayrı bir tarayıcı kullanın. Atlas, geri alınamaz işlemler (satın alma, gönderme) öncesinde onay ister.
    </p>

    <h2>Kurulum</h2>
    <ol>
      <li>chatgpt.com/atlas adresinden indirin (macOS, Windows, Linux).</li>
      <li>ChatGPT Plus veya Pro ile oturum açın.</li>
      <li>Cmd/Ctrl + K ile AI kenar çubuğunu açın. İlk gün &ldquo;sekmelerimi özetle&rdquo;yi deneyin.</li>
      <li>Ayarlar &rarr; Aracılar bölümünden Operator'ü etkinleştirin (Pro katmanı gereklidir).</li>
    </ol>

    <p>
      Alternatiflerle karşılaştırma için <a href="/tools/agentic-browser-comparison">aracı tarayıcı karşılaştırması</a> sayfasına bakın. Genel olarak yapay zeka aracıları hakkında daha fazla bilgi için <a href="/guides/best-ai-for-agents">aracılar için en iyi yapay zeka</a> rehberine göz atın.
    </p>
  </>
);