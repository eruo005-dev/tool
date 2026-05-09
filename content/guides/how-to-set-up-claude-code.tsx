export const intro = (
  <>
    <p>
      Claude Code, Anthropic'in terminal tabanlı kodlama ajanıdır. Tüm reponuzu okur, dosyaları düzenler, komutları çalıştırır ve git'i yönetir — tüm bunları doğal dil ile yapar. 16 Nisan 2026'da yayınlanan Claude Opus 4.7 tarafından desteklenir ve bugün kullanabileceğiniz en yetenekli otonom kodlama ajanıdır; geliştirici memnuniyeti anketlerinde zirvede yer alır.
    </p>
    <p>
      Bu kılavuz, sırasıyla kurulum, ilk gerçek oturumunuz, alt-ajanlar, beceriler ve izin modelini kapsar. Daha önce terminal kullandığınızı ve bir Anthropic API anahtarınız olduğunu varsayar.
    </p>
  </>
);

export const body = (
  <>
    <h2>Adım 1 — Kurulum</h2>
    <p>
      Claude Code bir npm paketi olarak gelir. Node.js 18+ gereklidir.
    </p>
    <pre><code>{`npm install -g @anthropic-ai/claude-code`}</code></pre>
    <p>
      Ardından, herhangi bir proje dizininden:
    </p>
    <pre><code>{`cd ~/code/my-project
claude`}</code></pre>
    <p>
      İlk çalıştırmada sizden giriş yapmanızı (veya bir API anahtarı yapıştırmanızı) isteyecektir. Bazı IDE eklentileri onu sarar — VS Code, JetBrains — ancak terminal ana yüzeydir; sarmalayıcılar aynı oturumu satır içinde işler.
    </p>

    <h2>Adım 2 — İlk oturumunuz</h2>
    <p>Gerçek ama sınırlı bir şey seçin. İyi ilk oturum yönergeleri:</p>
    <ul>
      <li>&ldquo;Bu reponun mimarisini 6 madde ile özetle.&rdquo;</li>
      <li>&ldquo;/src içindeki ölü kodu bul ve satır numaralarıyla listele.&rdquo;</li>
      <li>&ldquo;utils/date.ts dosyasındaki fonksiyon için bir birim testi ekle.&rdquo;</li>
    </ul>
    <p>
      &ldquo;Tüm uygulamayı yeniden düzenle&rdquo; ile başlamayın. Claude Code, kapsam tek bir PR'ın değişiklik miktarına sığdığında en güvenilirdir. Büyük kapsamlar parçalanmalıdır — genellikle adım 5'te ele alacağımız alt-ajanlara.
    </p>

    <h2>Adım 3 — İzin modelini anlayın</h2>
    <p>
      Claude Code, izniniz olmadan asla bir yazma komutu çalıştırmaz. Sık sık üç istem göreceksiniz:
    </p>
    <ul>
      <li>
        <strong>Dosya yazma</strong> — onayla, reddet veya oturum içinde &ldquo;bu dosya için bir daha sorma.&rdquo;
      </li>
      <li>
        <strong>Shell komutu</strong> — aynı, ancak komutun tam önizlemesiyle.
      </li>
      <li>
        <strong>Araç kullanımı</strong> (web getirme, <a href="/learn/mcp">MCP</a> araçları) — onayla veya reddet.
      </li>
    </ul>
    <p>
      &ldquo;Her şeyi otomatik onayla&rdquo; dürtüsüne direnin. İnceleme modu sizi yaklaşık üç oturum boyunca yavaşlatır, ardından hızlı bir kas hafızası haline gelir. Ayrıca, bir ajanın yanlış dizini silmek üzere olduğunu fark etme şeklinizdir ki bu bir saatlik sürtüşmeye değer.
    </p>

    <h2>Adım 4 — CLAUDE.md</h2>
    <p>
      Reponuzun kökünde bir <code>CLAUDE.md</code> dosyası oluşturun. Bu, Claude Code'un her oturumun başında okuduğu düz metin bir talimat setidir. İçine, takımdaki her yeni geliştiricinin bilmesini <em>istediğiniz</em> şeyleri koyun:
    </p>
    <pre><code>{`# Kurallar
- TypeScript strict modu her yerde.
- Testler dosyanın yanında: foo.ts -> foo.test.ts.
- .env dosyalarını asla commit etme.
- PR'dan önce 'npm run lint' ile lint yap.

# Bu repo
- /app Next.js uygulama yönlendirici sayfalarıdır.
- /lib/pages.ts her sayfanın tek manifestosudur.
- Bu dosyayı değiştirmek tam statik derlemeyi tetikler.`}</code></pre>
    <p>
      CLAUDE.md, aynı bağlamı yeniden yazmadan oturumlar arasında tutarlı davranış elde etme şeklinizdir. Aynı zamanda çıktı kalitesi için en önemli kaldıraçtır — belirsiz CLAUDE.md, belirsiz ajan.
    </p>

    <h2>Adım 5 — Alt-ajanlar</h2>
    <p>
      Birden çok aşamalı görevler için (ör. &ldquo;bu hatayı bul, düzelt, bir test yaz, bir değişiklik günlüğü girişi yaz&rdquo;), Claude Code <strong>alt-ajanlar</strong> oluşturabilir. Her alt-ajan kendi bağlamında çalışır, tek bir şey yapar ve ana ajana bir özet döndürür. Bu, uzun görevler için en büyük yaşam kalitesi özelliğidir — ana oturumun bağlamının &ldquo;yirmi dakika önce okuduğum dosyada ne vardı&rdquo; ile karmaşıklaşmasını önler.
    </p>
    <p>
      Alt-ajan tanımlarını <code>.claude/agents/</code> içinde, kısa bir <a href="/learn/system-prompt">sistem yönergesi</a> ve bir izin listesi ile Markdown dosyaları olarak oluşturun. Claude Code bunları otomatik olarak alır.
    </p>

    <h2>Adım 6 — Beceriler</h2>
    <p>
      Beceriler, yeniden kullanılabilir &ldquo;tariflerdir&rdquo; — <code>.claude/skills/</code> altında, ajana beceriyi ne zaman ve nasıl kullanacağını söyleyen bir <code>SKILL.md</code> içeren klasörlerdir. Bunları tekrarlanabilir yapılar için kullanın: &ldquo;bir PR açıklaması yaparken bu formatı kullan,&rdquo; &ldquo;sürüm notları yazarken bunu yap.&rdquo; Beceriler, her seferinde yeni bir oturuma bir yönerge kopyalayıp yapıştırmaktan daha iyidir.
    </p>

    <h2>Adım 7 — MCP sunucuları</h2>
    <p>
      Claude Code, MCP'yi destekler — <a href="/guides/how-to-connect-an-agent-to-mcp-tools">MCP kılavuzumuzda</a> ele alınan aynı Model Context Protocol. PR'ları açmak için bir GitHub MCP'si, sorunları okumak için bir Linear MCP'si, geliştirme veritabanınızı sorgulamak için bir Postgres MCP'si bağlayın. Bunları <code>.claude/mcp.json</code> içinde yapılandırın ve istediğiniz araçları izin listesine ekleyin.
    </p>

    <h2>Adım 8 — Bütçe</h2>
    <p>
      Claude Opus 4.7 premium modeldir; uzun bir ajan oturumu 5–15 dolar arasında harcama yapabilir. Anthropic konsolunda aylık bir sınır belirleyin. Daha ucuz yineleme istiyorsanız, Claude Code'u rutin görevler için Sonnet'e düşecek şekilde yapılandırın ve Opus'u zor olanlar için ayırın. Ayrıca, içine yapıştırdığınız şeyleri önce <a href="/tools/ai-token-counter">token sayacımızdan</a> geçirin, böylece bir temeliniz olur.
    </p>

    <h2>Çalıştığını nasıl anlarsınız</h2>
    <p>
      İyi işaretler: değişikliklerin çoğunu ilk geçişte onaylarsınız, düzenlemelerden sonra testler hala yeşildir, PR boyutları sıkıcı ve odaklıdır. Kötü işaretler: çok sayıda &ldquo;tekrar deneyeyim,&rdquo; dokunulmaması gereken dosyalara dokunulması, büyük farklar. Çözüm neredeyse her zaman daha sıkı bir CLAUDE.md ve daha dar kapsamdır, daha akıllı bir model değil.
    </p>
    <p>
      Claude Code'u, sıkı düzenleyici içi döngüler için <a href="/guides/how-to-set-up-cursor-ai-ide">Cursor</a> gibi düzenleyici tabanlı bir ajanla eşleştirin ve Claude Code'u ağır, çok dosyalı, planla-ve-uygula işleri için saklayın. İkisi birbirini tamamlar — 2026'da çoğu geliştiricinin üzerinde anlaştığı iş akışı budur.
    </p>
  </>
);