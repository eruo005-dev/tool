import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Pydantic AI, arkasındaki ekip tarafından geliştirilen bir Python ajan çerçevesidir.
    Pydantic. <a href="/learn/llm">LLM</a> çıktısını diğer güvenilmeyen girdiler gibi ele alır
    &mdash; bir şemaya göre doğrular, başarısızlıkta yeniden dener ve
    tip denetleyicisinin hatalarınızı yakalamasına izin verir. Zaten Pydantic kullanıyorsanız
    FastAPI istek gövdeleri için, Pydantic AI ajanlara ve araç çağrılarına
    bariz bir uzantı gibi gelir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Pydantic AI aslında nedir</h2>
    <p>
      Model API'leri (OpenAI, Anthropic, Gemini, Groq, Ollama, Bedrock) etrafında ince, tipli bir sarmalayıcıdır ve her yanıtı
      bir Pydantic modelinden geçmeye zorlar. Bir <code>Agent</code> tanımlarsınız
      bir <code>result_type</code> ile, araçları süslenmiş Python işlevleri olarak bağlarsınız
      ve çerçeve JSON-şeması oluşturma, doğrulama ve yeniden deneme döngülerini halleder. Sonuç, tam IDE otomatik tamamlama ile
      <code> .attribute</code> erişebileceğiniz bir nesnedir
      <code>response["choices"][0][...]</code> yerine.
    </p>
    <p>
      LangChain ile karşılaştırıldığında daha küçük, daha görüşlü ve
      gerçekten tiplidir. Ham API çağrılarına kıyasla size yapılandırılmış çıktı,
      şema uyuşmazlığında otomatik yeniden denemeler ve bağımlılıkları (veritabanı oturumları, API
      istemcileri) <code>deps_type</code> sistemi aracılığıyla asmak için standart bir yer verir.
    </p>

    <h2>Kurulum</h2>
    <pre>{`pip install pydantic-ai

# veya belirli bir model sağlayıcı eklentisi ile
pip install "pydantic-ai[openai]"
pip install "pydantic-ai[anthropic]"`}</pre>
    <p>
      Sağlayıcı API anahtarını ortamınıza ayarlayın
      (<code>OPENAI_API_KEY</code>,
      <code> ANTHROPIC_API_KEY</code>, vb.). Python 3.9 veya daha yeni.
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
    "Acme Corp bize 1.249,00 EUR fatura kesti, son tarih 2026-05-15."
)
print(result.data)
# Invoice(vendor='Acme Corp', total=1249.0, currency='EUR', due_date='2026-05-15')`}</pre>
    <p>
      JSON ayrıştırma yok, <code> json.loads</code> etrafında try/except yok,
      &ldquo;model yine düz metin döndürdü&rdquo; yok. Model geçersiz JSON veya yanlış
      şekil yayarsa, Pydantic AI varsayılan olarak <code>retries=1</code>'e kadar
      doğrulama hatasını geri bildirim olarak kullanarak yeniden dener.
    </p>

    <h2>Gerçek bir iş akışı &mdash; araçlar ve bağımlılıklar</h2>
    <p>
      Ajanlar, işlevleri çağırabildiklerinde kullanışlı hale gelir. Araçları
      <code>@agent.tool</code> ile kaydedin; Pydantic AI JSON şemasını imzadan türetir.
    </p>
    <pre>{`from dataclasses import dataclass
from pydantic_ai import Agent, RunContext

@dataclass
class Deps:
    db: "Database"

support_agent = Agent(
    "anthropic:claude-sonnet-4",
    deps_type=Deps,
    system_prompt="Sen bir destek ajanısın. Müşterileri aramak için araçları kullan.",
)

@support_agent.tool
async def get_customer(ctx: RunContext[Deps], email: str) -> dict:
    """E-posta ile bir müşteri satırını getir."""
    return await ctx.deps.db.fetch_one(
        "SELECT id, plan, mrr FROM customers WHERE email = $1", email
    )

async def handle_ticket(db, question: str):
    result = await support_agent.run(question, deps=Deps(db=db))
    return result.data`}</pre>
    <p>
      <code>RunContext</code>, araçlara paylaşılan bağımlılıklara tipli erişim sağlar.
      Global durum yok, monkey-patching yok, LangChain geri çağırma işleyicileri yok
      &mdash; sadece içine aktardığınız bir veri sınıfı.
    </p>

    <h2>Tuzaklar</h2>
    <p>
      <strong><a href="/learn/stream">Akış</a> ve yapılandırılmış çıktı temiz bir şekilde
      karışmaz.</strong> Token akışı istiyorsanız,
      <code> result_type</code>'ı bırakın ve düz dizeleri akışlayın veya
      kısmi doğrulama API'si ile <code> run_stream</code> kullanın ve
      erken parçaların doğrulanamayabileceğini kabul edin.
    </p>
    <p>
      <strong>Yeniden denemeler maliyetleri gizler.</strong> Bir doğrulama hatası,
      o tur için token faturanızı ikiye katlar. Özellikle pahalı modellerle
      istemleri ayarlarken sonuçlardaki <code> usage</code> alanını izleyin.
    </p>
    <p>
      <strong>Araç docstring'leri istemdir.</strong> İşlev docstring'i ve parametre türleri,
      modelin gördüğü JSON şeması haline gelir. Özensiz docstring'ler özensiz araç çağrıları üretir.
      Onlara API belgeleri gibi davranın.
    </p>

    <h2>Ne ZAMAN kullanılmamalı</h2>
    <p>
      Büyük bir önceden oluşturulmuş araç ekosistemine ihtiyacınız varsa Pydantic AI'yı atlayın
      (LangChain'in entegrasyonları hala bir büyüklük sırası daha büyüktür),
      JavaScript/TypeScript'te kalıyorsanız veya
      belgeler üzerinde saf RAG yapıyorsanız &mdash;
      LlamaIndex bunu daha az bağlantı koduyla halleder. Küçük tipli
      çıkar-ve-araç-çağrısı hizmetleri için, Pydantic AI bugün Python'daki
      en az acı veren seçenektir.
    </p>
    <p>
      Ajan sistem isteminizi{" "}
      <a href="/tools/prompt-improver">istem iyileştirici</a> ile sıkılaştırın,
      örnek JSON yüklerini{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a>de Pydantic şemalarınıza karşı doğrulayın ve
      göndermeden önce istem token'larını{" "}
      <a href="/tools/ai-token-counter">token sayacı</a> ile sayın.
    </p>
  </>
);