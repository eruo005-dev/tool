import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Gemini CLI, Google&rsquo;ın açık kaynaklı terminal aracısıdır ve Gemini&rsquo;nin 1M token <a href="/learn/context-window">bağlam penceresini</a> tek bir `gemini` komutunun arkasına koyar.
  </p>
);

export const body: ReactElement = (
  <>
    <p>
      Gemini CLI, Google&rsquo;ın Claude Code ve Codex CLI gibi terminal öncelikli yapay zeka araçlarına verdiği yanıttır. Bir kez kurar, kişisel bir Google hesabıyla giriş yaparsınız ve günlük ve dakikalık cömert bir ücretsiz kullanım kotasıyla Gemini 2.5 Pro&rsquo;ya erişirsiniz. Dosyaları okur, kabuk komutlarını çalıştırır, kodu düzenler ve tüm bir depoyu veya uzun belgeleri kapsayan sorular için web aramasını ve 1M token bağlam penceresinin tamamını kullanabilir.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      Gemini CLI, Google&rsquo;ın GitHub&rsquo;daki Apache-2.0 lisanslı bir projesidir. Bir npm paketi (gemini-cli) olarak gelir ve Node üzerinde çalışır. Kimlik doğrulama, ücretsiz kullanım için kişisel bir Google girişi veya daha yüksek limitler ve ekip kullanımı için Google AI Studio / Vertex AI aracılığıyla bir API anahtarıdır. Model Bağlam Protokolü&rsquo;nü (Model Context Protocol) takip eder, bu nedenle <a href="/learn/mcp">MCP</a> sunucuları araç olarak eklenir.
    </p>

    <h2>Kurulum</h2>
    <pre>{`# Node 20+
npm install -g @google/gemini-cli

# ilk çalıştırma giriş yapmayı tetikler
gemini
`}</pre>

    <h2>İlk oturum</h2>
    <p>
      Herhangi bir proje dizininde `gemini` komutunu çalıştırın. REPL açılır, varsa bir GEMINI.md dosyasını okur ve bir görev bekler.
    </p>
    <pre>{`$ cd my-repo && gemini
> Bu depoda kimlik doğrulamanın nasıl yapılandırıldığını özetle
→ grep, dosyaları oku, yolları belirt, yanıtla`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Kod tabanı soruları &mdash; büyük bir depoya yöneltin ve mimari sorular sorun; 1M bağlam burada parlar.</li>
      <li>Betikli yeniden düzenlemeler &mdash; dosyaları yerinde düzenlemesine izin verin, farkı inceleyin, commit yapın.</li>
      <li>Araştırma &mdash; yerleşik Google Arama, yanıtları güncel olmayan eğitim verileri yerine canlı bağlantılara dayandırır.</li>
    </ul>

    <h2>Tuzaklar ve ipuçları</h2>
    <p>
      Ücretsiz kullanım hız sınırları dakikalık ve günlüktür, bu nedenle uzun ve araç yoğun görevler takılabilir. Sınıra ulaşırsanız, bir API anahtarına geçin veya ucuz yinelemeler için Gemini 2.5 Flash&rsquo;a düşün. CLI, hassas yolları bağlamın dışında tutmak için .gitignore tarzı bir desen dosyasını dikkate alır.
    </p>
    <p>
      Bağlam sıkıştırması uzun oturumlarda otomatik olarak çalışır, ancak /compress ile zorlayabilirsiniz. Proje köküne kurallar, test komutları ve yasaklı dosyalar içeren bir GEMINI.md dosyası koyun &mdash; her oturumda yüklenir ve tutarlı çıktı almanın en kolay yoludur.
    </p>

    <h2>Kimler için</h2>
    <p>
      Çok geniş bir bağlam penceresine sahip, ücretsiz, açık kaynaklı bir terminal aracısı isteyen ve Google&rsquo;ın model ailesi içinde kalmaktan rahatsız olmayan geliştiriciler. Dosyaları düzenlemesine izin vermeden önce araç kullanım döngüsünü hissetmek için salt okunur bir görevle başlayın.
    </p>
  </>
);