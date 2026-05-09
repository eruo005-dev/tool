import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Pydantic AI, Pydantic ekibinin geliştirdiği bir Python ajan çerçevesidir. <a href="/learn/llm">LLM</a> çıktılarını, diğer güvenilmeyen girdiler gibi ele alır &mdash; bir şemaya göre doğrular, başarısızlıkta yeniden dener ve tip denetleyicisinin hatalarınızı yakalamasını sağlar. Zaten FastAPI istek gövdeleri için Pydantic kullanıyorsanız, Pydantic AI ajanlar ve araç çağrıları için bariz bir uzantı gibi hissettirir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Pydantic AI aslında nedir</h2>
    <p>
      Model API'leri (OpenAI, Anthropic, Gemini, Groq, Ollama, Bedrock) etrafında ince, tipli bir sarmalayıcıdır ve her yanıtı bir Pydantic modelinden geçmeye zorlar. Bir <code>result_type</code> ile bir <code>Agent</code> tanımlar, araçları dekore edilmiş Python fonksiyonları olarak bağlarsınız ve çerçeve JSON-şeması oluşturma, doğrulama ve yeniden deneme döngülerini halleder. Sonuç, <code>response["choices"][0][...]</code> yerine tam IDE otomatik tamamlama ile <code>.attribute</code> erişebileceğiniz bir nesnedir.
    </p>
    <p>
      LangChain ile karşılaştırıldığında daha küçük, daha katı ve gerçekten tiplidir. Ham API çağrılarına kıyasla size yapılandırılmış çıktı, şema uyuşmazlığında otomatik yeniden denemeler ve <code>deps_type</code> sistemi aracılığıyla bağımlılıkları (veritabanı oturumları, API istemcileri) asmak için standart bir yer sağlar.
    </p>

    <h2>Kurulum</h2>
    <pre>{`pip install pydantic-ai

# veya belirli bir model sağlayıcı eklentisi ile
pip install "pydantic-ai[openai]"
pip install "pydantic-ai[anthropic]"`}</pre>
    <p>
      Sağlayıcı API anahtarını ortam değişkenlerinize ayarlayın (<code>OPENAI_API_KEY</code>, <code>ANTHROPIC_API_KEY</code>, vb.). Python 3.9 veya daha yeni.
    </p>

    <h2>İlk çalışan örnek</h2>
    <pre>{`from pydantic import BaseModel
from pydantic_ai import Agent

class Invoice(BaseModel):
    vendor: str
    total: float
    currency: str
    due_date: str

agent = Agent(
    "openai:gpt-4o-mini",
    result_type=Invoice,
    system_prompt="Kullanıcı mesajından fatura alanlarını çıkar.",
)

result = agent.run_sync(
    "Acme Corp bize 1.249,00 EUR fatura kesti, son ödeme 2026-05-15."
)
print(result.data)
# Invoice(vendor='Acme Corp', total=1249.0, currency='EUR', due_date='2026-05-15')`}</pre>
    <p>
      JSON ayrıştırma yok, <code>json.loads</code> etrafında try/except yok, &ldquo;model yine düz metin döndürdü&rdquo; yok. Model geçersiz JSON veya yanlış şekil üretirse, Pydantic AI varsayılan olarak <code>retries=1</code>'e kadar doğrulama hatasını geri bildirim olarak kullanarak yeniden dener.
    </p>

    <h2>Gerçek bir iş akışı &mdash; araçlar ve bağımlılıklar</h2>
    <p>
      Ajanlar, fonksiyonları çağırabildiklerinde kullanışlı hale gelir. Araçları <code>@agent.tool</code> ile kaydedin; Pydantic AI, JSON şemasını imzadan türetir.
    </p>
    <pre>{`from dataclasses import dataclass
from pydantic_ai import Agent, RunContext

@dataclass
class Deps:
    db: "Database"

support_agent = Agent(
    "anthropic:claude-sonnet-4",
    deps_type=Deps,
    system_prompt="Bir destek ajanısınız. Müşterileri bulmak için araçları kullanın.",
)

@support_agent.tool
async def get_customer(ctx: RunContext[Deps], email: str) -> dict:
    """E-posta ile bir müşteri kaydını getir."""
    return await ctx.deps.db.fetch_one(
        "SELECT id, plan, mrr FROM customers WHERE email = $1", email
    )

async def handle_ticket(db, question: str):
    result = await support_agent.run(question, deps=Deps(db=db))
    return result.data`}</pre>
    <p>
      <code>RunContext</code>, araçlara paylaşılan bağımlılıklara tipli erişim sağlar. Global durum yok, maymun yaması yok, LangChain geri çağırma işleyicileri yok &mdash; sadece içine geçirdiğiniz bir veri sınıfı.
    </p>

    <h2>Tuzaklar</h2>
    <p>
      <strong><a href="/learn/stream">Akış</a> ve yapılandırılmış çıktı temiz bir şekilde bir araya gelmez.</strong> Token akışı istiyorsanız, <code>result_type</code>'ı bırakın ve düz dizeleri akışlayın veya kısmi doğrulama API'si ile <code>run_stream</code>'ı kullanın ve erken parçaların doğrulanamayabileceğini kabul edin.
    </p>
    <p>
      <strong>Yeniden denemeler maliyetleri gizler.</strong> Bir doğrulama hatası, o tur için token faturanızı ikiye katlar. Özellikle pahalı modellerle istemleri ayarlarken sonuçlardaki <code>usage</code> alanını izleyin.
    </p>
    <p>
      <strong>Araç docstring'leri istemdir.</strong> Fonksiyon docstring'i ve parametre türleri, modelin gördüğü JSON şeması haline gelir. Özensiz docstring'ler özensiz araç çağrıları üretir. Onlara API belgeleri gibi davranın.
    </p>

    <h2>Ne ZAMAN kullanılmamalı</h2>
    <p>
      Büyük bir önceden oluşturulmuş araç ekosistemine ihtiyacınız varsa (LangChain'in entegrasyonları hala bir kat daha büyük), JavaScript/TypeScript'te kalıyorsanız veya belgeler üzerinde saf RAG yapıyorsanız &mdash; LlamaIndex bunu daha az yapıştırıcı kodla halleder. Ancak küçük, tipli çıkarım ve araç çağrısı hizmetleri için Pydantic AI, bugün Python'daki en az acı verici seçenektir.
    </p>
    <p>
      Ajan sistem isteminizi{" "}
      <a href="/tools/prompt-improver">istem iyileştirici</a> ile sıkılaştırın, örnek JSON yüklerini <a href="/tools/json-formatter">JSON biçimlendirici</a>de Pydantic şemalarınıza karşı doğrulayın ve <a href="/tools/ai-token-counter">token sayacı</a> ile göndermeden önce istem token'larını sayın.
    </p>
  </>
);