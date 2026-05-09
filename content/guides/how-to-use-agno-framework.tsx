import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Agno &mdash; eskiden Phidata olarak bilinirdi &mdash; çoklu etmen
    sistemleri oluşturmak için bir Python çerçevesidir. Size bellek,
    araçlar, bilgi tabanları ve birden fazla etmenin birbirine iş
    aktarmasını sağlayan bir ekip soyutlaması içeren, her şeyiyle
    gelen bir <code>Agent</code> sınıfı sunar. Vektör depolarını ve
    mesaj geçmişini kendiniz bağlamadan bir etmeni üretime göndermek
    istiyorsanız, Agno çoğu hazırlık kodunu ortadan kaldırır.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Agno aslında nedir</h2>
    <p>
      Agno, tek bir içe aktarma ile gelen bir çerçevedir: araç
      çağırma ile bir etmen döngüsü, takılabilir bellek (SQLite,
      Postgres, MongoDB), takılabilir vektör bilgisi (PgVector,
      LanceDB, Chroma, Pinecone), model sağlayıcı bağdaştırıcıları ve
      birden fazla etmeni koordineli, işbirlikçi veya yönlendirme
      modlarında düzenlemek için bir <code>Team</code> ilkelini
      içerir. Ayrıca, bir ön yüz oluşturmadan etmenlerinizle sohbet
      edebilmeniz için yerel bir oyun alanı arayüzü de sunar.
    </p>
    <p>
      LangChain ile karşılaştırıldığında, Agno daha küçük ve daha
      kural odaklıdır &mdash; aynı şeyi yapmanın daha az yolu vardır.
      CrewAI ile karşılaştırıldığında, daha güçlü birinci sınıf
      bellek ve bilgi desteğine sahiptir ve daha az çerçeve benzeri
      hissettirir.
    </p>

    <h2>Kurulum</h2>
    <pre>{`pip install -U agno

# Gerçekten kullanacağınız yaygın ek paketler
pip install openai duckduckgo-search yfinance lancedb`}</pre>
    <p>
      Agno'nun kendisi hafif kalır; her araç ve depolama arka ucu,
      ihtiyaç duydukça yüklediğiniz isteğe bağlı bir bağımlılıktır.
      Çalıştırmadan önce <code>OPENAI_API_KEY</code> (veya hangi
      sağlayıcıysa) ortam değişkenini dışa aktarın.
    </p>

    <h2>İlk çalışan örnek</h2>
    <pre>{`from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.duckduckgo import DuckDuckGoTools

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    tools=[DuckDuckGoTools()],
    description="Sen bir haber analistisin. Kaynakları URL'lerle belirt.",
    markdown=True,
)

agent.print_response(
    "Bu hafta AB Yapay Zeka Yasası'nın uygulanmasıyla ilgili ne oldu?",
    stream=True,
)`}</pre>
    <p>
      Tek bir etmen, tek bir araç, Markdown işleme ile stdout'a
      akış. <code>print_response</code> yardımcısı hızlı yineleme
      içindir; üretimde metni, mesajları ve araç izini içeren bir
      <code> RunResponse</code> döndüren
      <code> agent.run()</code> kullanacaksınız.
    </p>

    <h2>Gerçek bir iş akışı &mdash; bellek ve bilgiye sahip bir ekip</h2>
    <pre>{`from agno.agent import Agent
from agno.team import Team
from agno.models.openai import OpenAIChat
from agno.tools.yfinance import YFinanceTools
from agno.knowledge.pdf_url import PDFUrlKnowledgeBase
from agno.vectordb.lancedb import LanceDb
from agno.storage.sqlite import SqliteStorage

kb = PDFUrlKnowledgeBase(
    urls=["https://example.com/10-k.pdf"],
    vector_db=LanceDb(table_name="filings", uri="tmp/lancedb"),
)
kb.load(recreate=False)

researcher = Agent(
    name="Araştırmacı",
    model=OpenAIChat(id="gpt-4o"),
    knowledge=kb,
    search_knowledge=True,
    role="10-K dosyası hakkındaki soruları yanıtla.",
)

analyst = Agent(
    name="Analist",
    model=OpenAIChat(id="gpt-4o"),
    tools=[YFinanceTools(stock_price=True, company_info=True)],
    role="Canlı piyasa verilerini çek ve araştırma bulgularıyla birleştir.",
)

team = Team(
    name="Hisse Senedi Masası",
    members=[researcher, analyst],
    mode="coordinate",
    storage=SqliteStorage(table_name="team", db_file="tmp/team.db"),
)

team.print_response("AAPL'nin mevcut fiyatı en son 10-K rehberliğiyle tutarlı mı?")`}</pre>
    <p>
      <code>coordinate</code> modu, bir ekip liderinin alt görevleri
      üyelere yönlendirmesine ve nihai bir yanıt oluşturmasına olanak
      tanır. SQLite depolama, oturumları yeniden başlatmalar arasında
      kalıcı hale getirir, böylece ekip önceki konuşmaları hatırlar.
    </p>

    <h2>Tuzaklar</h2>
    <p>
      <strong>Bilgi tabanı yeniden yüklemeleri pahalıdır.</strong>
      Üretimde <code> kb.load(recreate=False)</code> çağırın,
      <code>True</code> değil. <code>True</code> her çalıştırmada her
      belgeyi yeniden gömmeye zorlar &mdash; gömme bütçenizi hızla
      tüketir.
    </p>
    <p>
      <strong>Oyun alanı varsayılan olarak yalnızca yereldir.</strong>
      <code> agno playground</code> localhost'a bağlanır. Kimlik
      doğrulama olmadan internete açmayın; herkesin API anahtarlarınızla
      etmenlerinizi çağırmasına izin verir.
    </p>
    <p>
      <strong>Ekip modları önemlidir.</strong>
      <code> route</code> bir üyeyi seçer; <code>collaborate</code>
      {" "}tüm üyelerin yanıt vermesine izin verir;
      <code> coordinate</code> bir lider kullanır. Yanlış seçerseniz,
      yalnızca birine ihtiyacınız varken her turda her üye için
      ödeme yaparsınız.
    </p>
    <p>
      <strong>Python 3.10+.</strong> Agno, 3.9'da içe aktarılmayacak
      modern tip yazım sözdizimi (<code>str | None</code>) kullanır.
    </p>

    <h2>Ne ZAMAN kullanılmamalı</h2>
    <p>
      TypeScript kullanıyorsanız, Mastra veya Vercel AI SDK'ya
      bakın. Küçük, tür güvenli bir çıktı hizmetinde sağlam tür
      güvenliğine ihtiyacınız varsa, Pydantic AI daha uygundur. Saf
      belge RAG yapıyorsanız, LlamaIndex daha derin alma ilkellerine
      sahiptir. Agno, dört kütüphaneyi birbirine yapıştırmadan tek
      bir uyumlu Python paketinde çoklu etmen orkestrasyonu artı
      bellek artı bilgi istediğinizde parlar.
    </p>
    <p>
      Etmen sistem yönergelerini{" "}
      <a href="/tools/prompt-improver">yönlendirme iyileştirici</a>
      ile keskinleştirin, araç çağrısı JSON'unu{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile
      doğrulayın ve her turda bağlam penceresi kullanımını{" "}
      <a href="/tools/ai-token-counter">token sayacı</a> ile tahmin
      edin.
    </p>
  </>
);