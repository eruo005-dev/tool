export const intro = (
  <>
    <p>
      OpenAI Agents SDK, eski Swarm deneylerinin üretime yönelik halefidir —
      araçları kullanan, diğer ajanlara devreden ve bir kum havuzu içinde çalışan ajanlar oluşturmak için küçük, keskin bir Python ve TypeScript kütüphanesidir.
      ChatGPT ajan modunun yeterli olmadığı ve modeli <em>kendi kodunuzun</em> yönetmesini istediğinizde başvuracağınız araçtır.
    </p>
    <p>
      Bu kılavuz, <code>pip install</code> komutundan, Nisan 2026'da gerçekten ihtiyacınız olan dört temel yapı taşıyla (Ajanlar, Araçlar, Devir Teslimler, Korkuluklar) gerçek bir şey yapan çalışan bir ajana kadar sizi adım adım götürür.
    </p>
  </>
);

export const body = (
  <>
    <h2>Ön Koşullar</h2>
    <ul>
      <li>Python 3.10 veya daha yenisi.</li>
      <li>Faturalandırması ayarlanmış bir OpenAI API anahtarı (<code>OPENAI_API_KEY</code>).</li>
      <li>Anahtar üzerinde bir harcama limiti. Tek satır kod yazmadan önce bunu ayarlayın.</li>
    </ul>

    <h2>Adım 1 — SDK'yı Kurun</h2>
    <pre><code>{`python -m venv .venv
source .venv/bin/activate   # Windows: .venv\\Scripts\\activate
pip install openai-agents`}</code></pre>
    <p>
      Paket adı <code>openai-agents</code>'tir. Bunu eski <code>openai</code> temel kütüphanesiyle karıştırmayın — ikisini de kullanacaksınız.
    </p>

    <h2>Adım 2 — Çalışan en küçük ajan</h2>
    <p>Bunu <code>agent.py</code> dosyasına yapıştırın:</p>
    <pre><code>{`from agents import Agent, Runner

agent = Agent(
    name="Tutor",
    instructions="You are a patient tutor. Answer in <= 3 sentences.",
)

if __name__ == "__main__":
    result = Runner.run_sync(agent, "Explain eigenvectors like I'm 12.")
    print(result.final_output)`}</code></pre>
    <p>
      <code>python agent.py</code> ile çalıştırın. Bir açıklama yazdırırsa, 2. adımı tamamlamışsınız demektir — SDK, anahtar ve modelin tümü bağlanmıştır.
    </p>

    <h2>Adım 3 — Bir araç ekleyin</h2>
    <p>
      Araçlar, ajanın çağırabileceği fonksiyonlardır. Bunları{" "}
      <code>@function_tool</code> ile dekore edin ve otomatik olarak modelin fonksiyon listesinde görünürler.
    </p>
    <pre><code>{`from agents import Agent, Runner, function_tool

@function_tool
def word_count(text: str) -> int:
    """Count words in a string."""
    return len(text.split())

agent = Agent(
    name="Editor",
    instructions="When asked about length, call word_count.",
    tools=[word_count],
)`}</code></pre>
    <p>
      <em>&ldquo;How long is &lsquo;the quick brown fox&rsquo;?&rdquo;</em> sorusuyla çalıştırın.
      Model <code>word_count</code>'u çağırmaya karar verir, SDK Python'u çalıştırır, sonuç konuşmaya geri akar.
    </p>

    <h2>Adım 4 — Bir devir teslim ekleyin</h2>
    <p>
      Devir teslimler, bir ajanın bir uzmana yetki devretmesini sağlar. Dev bir komut istemi yerine, küçük ajanlar oluşturursunuz.
    </p>
    <pre><code>{`from agents import Agent

math_agent = Agent(name="Math", instructions="Solve step-by-step.")
writing_agent = Agent(name="Writing", instructions="Edit for clarity.")

triage = Agent(
    name="Triage",
    instructions="Hand off to math for math, writing for prose.",
    handoffs=[math_agent, writing_agent],
)`}</code></pre>
    <p>
      Triyaj ajanı kullanıcının mesajını okur, hangi uzmanı çağıracağına karar verir ve SDK konuşmayı aktarır. Her uzmanı ayrı ayrı hata ayıklarsınız — SDK'yı tek bir dev komut istemi yerine kullanmanın en büyük nedeni budur.
    </p>

    <h2>Adım 5 — Bir korkuluk ekleyin</h2>
    <p>
      Korkuluklar, SDK'nın girdiler ve çıktılar üzerinde çalıştırdığı doğrulayıcılardır.
    </p>
    <pre><code>{`from agents import input_guardrail, GuardrailFunctionOutput

@input_guardrail
def no_secrets(ctx, agent, input_str):
    banned = ("api_key", "password", "ssn")
    tripped = any(b in input_str.lower() for b in banned)
    return GuardrailFunctionOutput(
        output_info={"flagged": tripped},
        tripwire_triggered=tripped,
    )`}</code></pre>
    <p>
      Bunu ajanınıza{" "}
      <code>Agent(&hellip;, input_guardrails=[no_secrets])</code> ile ekleyin. Korkuluk tetiklenirse, SDK model komut istemini görmeden önce bir hata yükseltir — ucuz, hızlı ve günlüğe kaydedilir.
    </p>

    <h2>Adım 6 — Kod ve dosya işlerini kum havuzunda yapın</h2>
    <p>
      Nisan 2026 Agents SDK, <strong>modele özgü bir koşum takımı</strong> ile birlikte gelir — ajan, dosyaları inceleyebilir, düzenleyebilir, kabuk komutları çalıştırabilir ve sürecinizin kontrol ettiği bir kum havuzu içinde uzun vadeli görevler üzerinde yineleme yapabilir. Bu, bir ajana ham kabuk erişimi vermek istediğinizde kullanmanız gereken özelliktir: vermeyin, bunun yerine koşum takımını kullanın.
    </p>

    <h2>Adım 7 — Dağıtın</h2>
    <p>
      Aynı Python dosyası dizüstü bilgisayarınızda, Fly.io'da, bir VPS'te, Lambda'da çalışır. Bir webhook için FastAPI işleyicisine, bir cron için zamanlanmış bir işe veya insanlar için bir CLI'ya sarın. SDK aynı kalır — hafif olmasının amacı da budur.
    </p>

    <h2>Gördüğüm tuzaklar</h2>
    <ul>
      <li>
        <strong>Devasa tek ajanlar.</strong> Erken aşamada devir teslimlerle onları bölün.
        600 satırlık bir <a href="/learn/system-prompt">sistem komut isteminde</a> hata ayıklamak eziyettir.
      </li>
      <li>
        <strong>Beş iş yapan araçlar.</strong> Her aracı tek bir sorumlulukta tutun — model onları daha iyi seçer.
      </li>
      <li>
        <strong>Token sınırı yok.</strong> Çalıştırıcıda{" "}
        <code>max_turns</code> ayarlayın. Saat 3'te sonsuz döngüye giren bir ajan, pahalı bir öğrenme deneyimidir.
      </li>
    </ul>

    <p>
      Alıştıktan sonra, akışı{" "}
      <a href="/guides/how-to-build-an-agent-with-the-claude-agent-sdk">
        Claude Agent SDK
      </a>{" "}
      ile karşılaştırın — aynı temel yapı taşları, farklı model güçleri ve araç standardı olarak <a href="/learn/mcp">MCP</a>.
      Ayrıca, komut istemlerinizi <a href="/tools/ai-token-counter">token sayacımızdan</a> geçirin, böylece bir cron'a koymadan önce her dönüşün ne kadara mal olduğunu bilirsiniz.
    </p>
  </>
);