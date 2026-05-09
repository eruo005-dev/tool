export const intro = (
  <>
    <p>
      CrewAI, <strong>rol tabanlı çoklu ajan sistemleri</strong> için en erişilebilir framework'tür. Bir düzine sorumluluğu tek bir devasa prompt'ta toplamak yerine, küçük bir ajan ekibi tanımlarsınız — Araştırmacı, Yazar, Editör — her birine araçlar ve bir hedef verir, işi birbirlerine devretmelerini sağlarsınız.
    </p>
    <p>
      Bu rehber, Python'da çalışan üç ajanlı bir ekip kurar, dört temel yapı taşını (Ajan, Görev, Ekip, Araç) açıklar ve bir ekibi zamanlamaya koyduğunuzda karşılaşacağınız hata modlarını işaret eder. Nisan 2026'da yazılmıştır.
    </p>
  </>
);

export const body = (
  <>
    <h2>CrewAI'ye ne zaman başvurmalı</h2>
    <p>
      CrewAI, görev <em>doğal olarak</em> birbiriyle konuşan uzman rollere ayrıştığında değerlidir. Uygun kullanım alanları: içerik hatları, araştırma raporları, müşteri kayıt akışları, çok adımlı analizler. Uygun olmayan kullanım alanları: tek bir API çağrısı görevi (çok ağır), düşük gecikme süreli işler (çok fazla yük), derin dallanan mantık (LangGraph kullanın —{" "}
      <a href="/guides/how-to-build-a-stateful-agent-with-langgraph">LangGraph rehberimize</a> bakın).
    </p>

    <h2>Adım 1 — Kurulum</h2>
    <pre><code>{`python -m venv .venv && source .venv/bin/activate
pip install crewai crewai-tools`}</code></pre>
    <p>
      Kullanacağınız modele göre <code>OPENAI_API_KEY</code> veya <code>ANTHROPIC_API_KEY</code> ayarlayın. CrewAI modelden bağımsızdır; yapılandırmayı ajan bazında yaparsınız.
    </p>

    <h2>Adım 2 — Dört temel yapı taşı</h2>
    <ul>
      <li>
        <strong>Ajan</strong> — bir hedefi, bir geçmişi (kısa!) ve isteğe bağlı bir araç listesi olan bir rol.
      </li>
      <li>
        <strong>Görev</strong> — bir ajana verilen, beklenen bir çıktı formatı olan belirli bir iş birimi.
      </li>
      <li>
        <strong>Ekip</strong> — orkestratör. Ajanları, görevleri ve süreci (sıralı veya hiyerarşik) bilir.
      </li>
      <li>
        <strong>Araç</strong> — herhangi bir ajanın çağırabileceği bir fonksiyon. Web arama, dosya G/Ç vb. için yerleşik araçlar.
      </li>
    </ul>

    <h2>Adım 3 — Üç ajanlı bir ekip</h2>
    <p>Kanonik örnek: araştır, yaz, düzenle. <code>crew.py</code> dosyasına yapıştırın:</p>
    <pre><code>{`from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool

search_tool = SerperDevTool()

researcher = Agent(
    role="Researcher",
    goal="Find 3 recent, credible sources on the topic.",
    backstory="You value citations and primary sources.",
    tools=[search_tool],
    verbose=True,
)

writer = Agent(
    role="Writer",
    goal="Produce a 400-word briefing from the research.",
    backstory="You write like a tired editor: short, specific, no fluff.",
    verbose=True,
)

editor = Agent(
    role="Editor",
    goal="Cut fluff, check claims, return a tightened version.",
    backstory="You hate adverbs.",
    verbose=True,
)

research_task = Task(
    description="Research: AI agent frameworks used in production in 2026.",
    agent=researcher,
    expected_output="3 source URLs with one-line summaries.",
)

write_task = Task(
    description="Draft a 400-word briefing using the research.",
    agent=writer,
    expected_output="A 400-word markdown briefing.",
    context=[research_task],
)

edit_task = Task(
    description="Edit the draft. Keep it under 400 words, no adverbs.",
    agent=editor,
    expected_output="Final briefing text.",
    context=[write_task],
)

crew = Crew(
    agents=[researcher, writer, editor],
    tasks=[research_task, write_task, edit_task],
    process=Process.sequential,
)

if __name__ == "__main__":
    result = crew.kickoff()
    print(result)`}</code></pre>

    <h2>Adım 4 — Çalıştırın</h2>
    <pre><code>{`python crew.py`}</code></pre>
    <p>
      Konsolda ajanların birbirleriyle konuştuğunu göreceksiniz. Her görevin çıktısı bir sonraki görevin bağlamına akar, bu nedenle <code>context=[previous_task]</code> önemlidir — onsuz, sonraki ajan sıfırdan başlar.
    </p>

    <h2>Adım 5 — Prompt'ları sıkılaştırın</h2>
    <p>
      CrewAI'nin en büyük tuzağı ayrıntılı geçmişlerdir. Bunları bir veya iki cümleyle sınırlayın. Uzun bir geçmiş, bağlamı tüketir ve modelin dikkatini dağıtır. "Yazar" ajanınız konudan sapıyorsa, geçmişi değil hedefi kısaltın.
    </p>

    <h2>Adım 6 — Sıralı ve hiyerarşik</h2>
    <ul>
      <li>
        <strong>Sıralı</strong> (varsayılan) — görevler sırayla çalışır; her biri bir sonrakini besler. Belirleyici, hata ayıklaması kolay.
      </li>
      <li>
        <strong>Hiyerarşik</strong> — bir yönetici ajan, görevleri dinamik olarak devreder. Daha esnek, hata ayıklaması daha zor. Yalnızca sıralı iş akışını ifade edemediğinde kullanın.
      </li>
    </ul>

    <h2>Adım 7 — Maliyet kontrolü</h2>
    <p>
      Her ajan ayrı bir model çağrısıdır. Yeniden denemeleri olan 3 ajanlı sıralı bir ekip, kolayca 15-20 tura ulaşabilir. Bir ekibi zamanlamaya koymadan önce:
    </p>
    <ul>
      <li><code>verbose=True</code> ile bir kez çalıştırın ve turları sayın.</li>
      <li><a href="/tools/ai-token-counter">token sayacımızla</a> çalıştırma başına maliyeti tahmin edin.</li>
      <li>Kaçak döngüleri önlemek için ekipte <code>max_rpm</code> sınırlayın.</li>
      <li>Güvenlik için görev başına <code>max_iter</code> ayarlayın.</li>
    </ul>

    <h2>Adım 8 — Zamanlayın</h2>
    <p>
      Ekip dizüstü bilgisayarınızda sorunsuz çalıştığında, bir FastAPI işleyicisine sarın, bir cron'dan tetikleyin veya bir Modal / Temporal işçisine bırakın. Ajanlar aynı kalır; yalnızca tetikleyici değişir. Uzun süreli veya durum bilgisi olan işler için{" "}
      <a href="/guides/how-to-build-a-stateful-agent-with-langgraph">LangGraph</a> ile karşılaştırın — CrewAI'nin sunmadığı yeniden denemeler ve durum kalıcılığı sağlar.
    </p>

    <h2>Sık yapılan hatalar</h2>
    <ul>
      <li>
        <strong>Çok fazla ajan.</strong> Üç veya dört ideal sayıdır. On ajan = on prompt kayması kaynağı.
      </li>
      <li>
        <strong>Örtüşen roller.</strong> "Araştırmacı" ve "Analist" aynı kişi olabiliyorsa, öyle olmalıdır.
      </li>
      <li>
        <strong><code>expected_output</code> yok.</strong> Olmadan, ajanlar formatı serbest bırakır ve sonraki ajan ayrıştırmakta zorlanır.
      </li>
      <li>
        <strong>CrewAI'yi sohbet sarmalayıcısı olarak kullanmak.</strong> Görev tek turluysa, doğrudan modeli çağırın.
      </li>
    </ul>
  </>
);