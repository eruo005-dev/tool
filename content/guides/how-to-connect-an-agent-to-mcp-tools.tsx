export const intro = (
  <>
    <p>
      Model Context Protocol — <strong><a href="/learn/mcp">MCP</a></strong> — AI ajanlarını harici araçlara ve verilere bağlamak için açık bir standarttır. 2026'da varsayılan haline gelmiştir. Claude Code, Claude Agent SDK, Cursor ve çoğu ajan çerçevesi bunu konuşur; GitHub, Slack, Postgres, Notion, Linear, dahili API'leriniz ve yüzlerce başka sistem için büyüyen bir MCP sunucu ekosistemi vardır.
    </p>
    <p>
      Bu kılavuz, MCP'nin aslında ne olduğunu, bir sunucunun nasıl kurulup bağlanacağını, yalnızca istediğiniz araçların nasıl izin listesine alınacağını ve yeni başlayanların sıkça yaptığı güvenlik hatalarından nasıl kaçınılacağını açıklar.
    </p>
  </>
);

export const body = (
  <>
    <h2>MCP aslında nedir (basit terimlerle)</h2>
    <p>
      MCP, herhangi bir ajanın uyumlu herhangi bir araç sağlayıcısıyla konuşmasını sağlayan küçük bir JSON-RPC protokolüdür. Sağlayıcıya <strong>MCP sunucusu</strong> denir; ajanınız <strong>MCP istemcisidir</strong>. Sunucu, bir araç listesi (ve kaynaklar ve istemler) yayınlar. İstemci, argümanlarla bir aracın çağrılmasını ister. Hepsi bu kadar.
    </p>
    <p>
      Getirisi: Aynı Slack MCP sunucusu, Claude Code, Claude Agent SDK ve diğer çoğu ajan çerçevesiyle çalışır. Entegrasyonu bir kez yazarsınız, her yerde kullanırsınız.
    </p>

    <h2>Adım 1 — Başlamak için bir sunucu seçin</h2>
    <p>
      Net ve düşük riskli bir araç setine sahip bir şey seçin. İyi ilk MCP sunucuları:
    </p>
    <ul>
      <li>
        <strong>Dosya Sistemi</strong> — bir dizine kapsamlı.
      </li>
      <li>
        <strong>Fetch</strong> — bir URL'yi getirir ve metin döndürür.
      </li>
      <li>
        <strong>GitHub (salt okunur)</strong> — depoları listele, sorunları oku, kodu oku.
      </li>
      <li>
        <strong>Postgres (salt okunur)</strong> — üretim değil, geliştirme veritabanına karşı.
      </li>
    </ul>
    <p>
      <em>Yazma</em> yapabilen bir sunucuyla başlamaktan kaçının — Slack'e gönderme, e-posta yollama, PR'leri birleştirme. Bunları ajana güvendikten sonra ekleyin.
    </p>

    <h2>Adım 2 — Bir MCP sunucusu kurun</h2>
    <p>
      Çoğu MCP sunucusu npm veya Python paketleri olarak gelir. Örnek — dosya sistemi sunucusu:
    </p>
    <pre><code>{`npx -y @modelcontextprotocol/server-filesystem /path/to/allowed/dir`}</code></pre>
    <p>
      Bu tek komut, geçirdiğiniz dizine kapsamlı, stdio üzerinden bir MCP sunucusu başlatır. <code>read_file</code>, <code>write_file</code>, <code>list_directory</code> gibi araçları listeleyecektir.
    </p>

    <h2>Adım 3 — Ajanınıza bağlayın</h2>
    <h3>Claude Code</h3>
    <p>
      Deponuzda <code>.claude/mcp.json</code> oluşturun:
    </p>
    <pre><code>{`{
  "mcpServers": {
    "fs": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "./docs"]
    }
  }
}`}</code></pre>
    <p>
      Claude Code'u yeniden başlatın ve ajan <code>mcp__fs__read_file</code> vb. çağırabilir. Tam resim için{" "}
      <a href="/guides/how-to-set-up-claude-code">Claude Code kurulum kılavuzumuza</a>{" "}
      bakın.
    </p>

    <h3>Claude Agent SDK (Python)</h3>
    <pre><code>{`from claude_agent_sdk import ClaudeAgentOptions, query

opts = ClaudeAgentOptions(
    mcp_servers={
        "fs": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-filesystem", "./docs"],
        }
    },
    allowed_tools=["mcp__fs__read_file", "mcp__fs__list_directory"],
)

async for m in query(prompt="Dosyaları docs'ta listele ve README.md'yi oku.", options=opts):
    print(m)`}</code></pre>
    <p>
      <code>allowed_tools</code> listesine dikkat edin — yalnızca bu araçlar çağrılabilir. Sunucu <code>write_file</code> yayınlasa bile, ajan onu listelememişseniz çağıramaz.
    </p>

    <h3>Cursor</h3>
    <p>
      Cursor, aynı yapıya sahip <code>.cursor/mcp.json</code> dosyasını okur. Sunucuyu ekleyin, yeniden başlatın ve ajan, ajan modunda araçlarını kullanabilir.
    </p>

    <h2>Adım 4 — Dar bir izin listesi oluşturun</h2>
    <p>
      Varsayılan olarak <em>salt okunur</em> araçları kullanın. Yazma araçlarını tek tek ekleyin, her seferinde şunu sorun: &ldquo;bu araç yanlış çağrılırsa, kurtarmak için ne gerekir?&rdquo; Bir Slack DM'si göndermek kurtarılabilir. Bir Postgres tablosunu düşürmek kurtarılamaz.
    </p>

    <h2>Adım 5 — Denetim ve harcama için kanca ekleyin</h2>
    <p>
      Claude Agent SDK'da, her araç çağrısını günlüğe kaydeden ve yanlış görünenleri veto edebilen bir <code>pre_tool_use</code> kancası ekleyin. Ücretsiz bir mantık kontrolü, hiçbir maliyeti yok, sizi bir kez kurtarır.
    </p>

    <h2>Adım 6 — Sırlar için istemler değil, ortam değişkenleri kullanın</h2>
    <p>
      API anahtarlarını asla bir MCP sunucusunun istemine veya ajana görünür yapılandırmasına koymayın. Bunları sunucu işlemine ortam değişkenleri olarak iletin. Ajan, kimlik bilgisini asla görmeden aracı kullanabilmelidir.
    </p>

    <h2>Adım 7 — Güvenilmeyen MCP sunucularını dikkatle çalıştırın</h2>
    <p>
      MCP sunucuları, makinenizde çalışan gerçek kodlardır. Kötü niyetli bir MCP sunucusu, özellikle ajan hassas girdileri ona iletirse, verileri sızdırabilir. Temel kurallar:
    </p>
    <ul>
      <li>Yalnızca normal bir npm/pip bağımlılığı olarak güveneceğiniz sunucuları çalıştırın.</li>
      <li>Varsa resmi sunucuları (Anthropic, GitHub, Vercel vb.) tercih edin.</li>
      <li>Şüpheli üçüncü taraf sunucular için, bunları bir kapsayıcıda veya sıfır kullanıcıda çalıştırın.</li>
      <li>Dosya sistemi sunucusunun yolunu kapsamlı tutun; <code>/</code> işaretine yöneltmeyin.</li>
    </ul>

    <h2>En net avantaj</h2>
    <p>
      MCP, ajan araç entegrasyonunu çerçeve başına bir projeden tak-çalıştır bir alıştırmaya dönüştürür. Hala tek bir çerçeve içinde elle REST istemcileri kodluyorsanız, artık ödemeniz gerekmeyen bir vergi ödüyorsunuz. Bir MCP sunucusu seçin, bağlayın ve neden standart haline geldiğini göreceksiniz.
    </p>

    <p>
      MCP'nin daha büyük ajan resminde nereye oturduğu hakkında bağlam için{" "}
      <a href="/guides/how-to-set-up-an-ai-agent">AI ajanı kurulumuna genel bakışımıza</a>{" "}
      bakın — MCP, karar ağacındaki hemen hemen her yolda araç katmanıdır.
    </p>
  </>
);