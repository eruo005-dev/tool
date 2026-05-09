export const intro = (
  <>
    <p>
      Claude Agent SDK, Anthropic&rsquo;in Claude Opus 4.7 ve Sonnet üzerine kendi ajanlarınızı oluşturmanız için geliştirdiği kütüphanedir. Claude Code&rsquo;u çalıştıran aynı mekanizmayı — araçlar, kancalar, <a href="/learn/mcp">MCP</a> ve alt ajanlar — Python veya Node servisinize entegre edebileceğiniz temel yapı taşları olarak sunar.
    </p>
    <p>
      Bu kılavuz, ihtiyacınız olan dört kavramı (araçlar, kancalar, MCP sunucuları, alt ajanlar) kapsar, Mart 2026 itibarıyla mevcut sürümü kurar ve çalışan bir ajan sağlar. OpenAI Agents SDK ile bu SDK arasında karar veriyorsanız, önce{" "}
      <a href="/guides/how-to-set-up-an-ai-agent">ajan kurulumuna genel bakış</a> yazımızı okuyun.
    </p>
  </>
);

export const body = (
  <>
    <h2>Ön koşullar</h2>
    <ul>
      <li>Python 3.10+ <em>veya</em> Node.js 18+.</li>
      <li>Bir Anthropic API anahtarı (<code>ANTHROPIC_API_KEY</code>).</li>
      <li>
        Konsolda bir harcama limiti. Döngüye giren ajanlar pahalıdır; önce bütçe, sonra kod.
      </li>
    </ul>

    <h2>Adım 1 — Kurulum</h2>
    <p>Python (Mart 2026 itibarıyla PyPI&rsquo;da sürüm 0.1.48):</p>
    <pre><code>{`python -m venv .venv && source .venv/bin/activate
pip install claude-agent-sdk`}</code></pre>
    <p>TypeScript (npm&rsquo;de sürüm 0.2.71):</p>
    <pre><code>{`npm install @anthropic-ai/agent-sdk`}</code></pre>

    <h2>Adım 2 — Dört temel kavram</h2>
    <ul>
      <li>
        <strong>Araçlar</strong> — ajanın çağırabileceği fonksiyonlar. Yerleşik araçlar dosya, kabuk, HTTP ve web aramasını kapsar. Gerektiğinde kendi araçlarınızı ekleyebilirsiniz.
      </li>
      <li>
        <strong>Kancalar</strong> — araç çağrıları ve model dönüşlerinden önce/sonra tetiklenen geri çağrılar. Günlükleme, doğrulama ve harcama limitleri için kullanılır.
      </li>
      <li>
        <strong>MCP sunucuları</strong> — ajanın bağlanabileceği harici araç sağlayıcıları. Slack, GitHub, veritabanları, dahili API&rsquo;leriniz.
      </li>
      <li>
        <strong>Alt ajanlar</strong> — ana ajanın yetki devrettiği daha dar kapsamlı uzmanlar. Daha küçük yönergeler, daha iyi sonuçlar, daha kolay hata ayıklama.
      </li>
    </ul>

    <h2>Adım 3 — Minimum çalışan ajan (Python)</h2>
    <pre><code>{`from claude_agent_sdk import query, AssistantMessage, TextBlock
import asyncio

async def main():
    async for message in query(prompt="MCP'yi 2 cümlede açıkla."):
        if isinstance(message, AssistantMessage):
            for block in message.content:
                if isinstance(block, TextBlock):
                    print(block.text)

asyncio.run(main())`}</code></pre>
    <p>
      Bu, çalışan bir ajandır. Henüz araç yok, güvenlik önlemi yok — sadece SDK üzerinden erişilebilen Claude. Herhangi bir katman eklemeden önce anahtarınızın çalıştığını doğrulamak için çalıştırın.
    </p>

    <h2>Adım 4 — Özel bir araç ekleyin</h2>
    <p>
      Claude Agent SDK&rsquo;daki özel araçlar, süreç içi MCP sunucularıdır. Kulağa ağır geliyor; öyle değil. Bir Python fonksiyonunu{" "}
      <code>@tool</code> ile sarın ve <code>create_sdk_mcp_server</code> aracılığıyla kaydedin.
    </p>
    <pre><code>{`from claude_agent_sdk import tool, create_sdk_mcp_server, ClaudeAgentOptions, query

@tool("square", "Bir sayının karesini al", {"n": int})
async def square(args):
    return {"content": [{"type": "text", "text": str(args["n"] ** 2)}]}

math_server = create_sdk_mcp_server(name="math", tools=[square])

opts = ClaudeAgentOptions(
    mcp_servers={"math": math_server},
    allowed_tools=["mcp__math__square"],
)

async def run():
    async for m in query(prompt="Aracını kullanarak 17'nin karesini al.", options=opts):
        print(m)`}</code></pre>
    <p>
      Burada iki şey önemlidir. İlk olarak, özel araçlar <code>mcp__&lt;sunucu&gt;__&lt;araç&gt;</code> ad alanına sahip MCP araçlarıdır — izin listesi dizesinin bu şekilde görünmesinin nedeni budur. İkinci olarak,{" "}
      <code>allowed_tools</code> bir güvenlik çitidir: ajan, bu listede olmayan hiçbir şeyi çağıramaz.
    </p>

    <h2>Adım 5 — Bir kanca ekleyin</h2>
    <p>
      Kancalar, yönergeleri değiştirmeden ajanın davranışını veto etmenize, günlüklemenize veya değiştirmenize olanak tanır.
    </p>
    <pre><code>{`async def pre_tool(tool_name, args, ctx):
    print(f"-> {tool_name} çağrılıyor, argümanlar: {args}")
    return {"allow": True}

opts = ClaudeAgentOptions(
    mcp_servers={"math": math_server},
    allowed_tools=["mcp__math__square"],
    hooks={"pre_tool_use": [pre_tool]},
)`}</code></pre>
    <p>
      Çağrıyı engellemek için <code>allow</code> değerini <code>False</code> yapın. Harcama limitinizi (&ldquo;total_tokens &gt; 100k ise: engelle&rdquo;) veya HTTP getirmeleri için alan adı izin listenizi buraya koyarsınız.
    </p>

    <h2>Adım 6 — Harici bir MCP sunucusuna bağlanın</h2>
    <p>
      Diyelim ki ajanın Slack&rsquo;i okumasını istiyorsunuz. Slack MCP sunucusunu kurun (ajan seçeneklerinizde tek satır), kullanmak istediğiniz belirli araçları izin listesine ekleyin, ajan bunları kullanabilir. Tam desen için özel{" "}
      <a href="/guides/how-to-connect-an-agent-to-mcp-tools">MCP kurulum kılavuzumuza</a> bakın.
    </p>

    <h2>Adım 7 — Karmaşık işler için alt ajanlar</h2>
    <p>
      Bir ajanın araç listesi ~8 aracı geçtiğinde veya yönergeleri ~300 satırı aştığında, bir alt ajan oluşturun. Ana ajan, alt ajanı bir araçmış gibi çağırır; alt ajanın kendi izin listesi, kendi yönergeleri ve kendi güvenlik önlemleri vardır. Alt ajanlar, kapsam büyüdükçe üretim ajanını güvenilir tutmanın en temiz yoludur.
    </p>

    <h2>Adım 8 — Dağıtım</h2>
    <p>
      Python veya Node çalıştıran herhangi bir sunucu bunu çalıştırır. Async iş yükleri için SDK, FastAPI, Cloudflare Workers (TS) veya AWS Lambda içinde sorunsuz çalışır. Bir istek düzeyinde zaman aşımı, token limiti ve yapılandırılmış günlükleme ekleyin — ve bir üretim ajanınız olur. Özellikle geliştirme aracı ajanları için{" "}
      <a href="/guides/how-to-set-up-claude-code">Claude Code kurulum kılavuzumuza</a> bakın — Claude Code, aynı SDK üzerine inşa edilmiştir.
    </p>

    <h2>Sık yapılan hatalar</h2>
    <ul>
      <li>
        <code>allowed_tools</code> listesini unutmak. Bu olmadan ajanın araç izinleri yoktur ve hiçbir şeyi çağıramaz.
      </li>
      <li>
        Ajana birkaç küçük sunucu yerine tek bir 40 araçlı sunucu vermek. ~12 seçeneğin üzerinde araç seçim doğruluğu hızla düşer.
      </li>
      <li>
        Yönergeleri önce{" "}
        <a href="/tools/ai-token-counter">token sayacımızdan</a> geçirmemek. Ajan dönüşleri, giriş <em>artı</em> çıkış üzerinden fiyatlandırılır; geveze bir <a href="/learn/system-prompt">sistem yönergesi</a> her döngüde size maliyet çıkarır.
      </li>
    </ul>
  </>
);