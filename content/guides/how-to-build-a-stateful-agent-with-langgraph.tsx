export const intro = (
  <>
    <p>
      LangGraph, <strong>durum bilgisi olan, uzun süre çalışan ajanlar</strong> oluşturmak için kullanılan bir kütüphanedir. Açık graflar halinde yapılandırılır — düğümler adımları, kenarlar geçişleri temsil eder ve tüm çalışma boyunca bağlamı taşıyan bir durum nesnesi bulunur. Bir görevde dallanmalar, döngüler varsa veya yeniden başlatmaya dayanması gerekiyorsa başvurulacak çerçevedir.
    </p>
    <p>
      Bu kılavuz, sıfırdan başlayan bir anlatımdır: kurulum, grafik tanımlama, araçları bağlama, durumu kalıcı hale getirme ve çalıştırma. Daha önce{" "}
      <a href="/guides/how-to-build-a-multi-agent-system-with-crewai">CrewAI</a> gibi sıralı bir çerçeve denediyseniz ve "ya X olursa" sorusunun çirkinleştiği duvara çarptıysanız, LangGraph bir sonraki adımdır.
    </p>
  </>
);

export const body = (
  <>
    <h2>Zihinsel model</h2>
    <p>
      "Çoklu ajan konuşması"nı unutun. <em>Durum makinesi</em> olarak düşünün. Şunları tanımlarsınız:
    </p>
    <ul>
      <li>
        <strong>Bir Durum</strong> — ajanın şimdiye kadar öğrendiği her şeyi tutan yazılı bir sözlük.
      </li>
      <li>
        <strong>Düğümler</strong> — durumu okuyan ve ona güncellemeler döndüren Python fonksiyonları.
      </li>
      <li>
        <strong>Kenarlar</strong> — hangi düğümün bir sonraki çalışacağına dair kurallar, muhtemelen duruma bağlı olarak.
      </li>
    </ul>
    <p>
      Durum açık olduğu için LangGraph onu kontrol noktasına alabilir, çökme sonrası devam ettirebilir, bir düğümü yeniden deneyebilir ve dallanma yapabilir — sıralı bir ekibin temiz bir şekilde ifade edemeyeceği şeyler.
    </p>

    <h2>Adım 1 — Kurulum</h2>
    <pre><code>{`python -m venv .venv && source .venv/bin/activate
pip install langgraph langchain-openai`}</code></pre>
    <p>
      LangGraph modelden bağımsızdır. Burada OpenAI kullanacağız; <code>langchain-openai</code> yerine{" "}
      <code>langchain-anthropic</code> koyarak Anthropic'e geçebilirsiniz.
    </p>

    <h2>Adım 2 — Durumu tanımlayın</h2>
    <pre><code>{`from typing import TypedDict, Annotated, List
from operator import add

class State(TypedDict):
    question: str
    notes: Annotated[List[str], add]   # düğümler arasında birikir
    answer: str`}</code></pre>
    <p>
      <code>Annotated[..., add]</code>, "bir düğüm <code>notes</code> döndürdüğünde, listeye ekle, değiştirme" anlamına gelir. Bu, LangGraph'ın indirgeyici desenidir — her alan için güncellemelerin <em>nasıl</em> birleşeceğini söylersiniz.
    </p>

    <h2>Adım 3 — İki düğüm tanımlayın</h2>
    <pre><code>{`from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-5-mini")

def research(state: State):
    prompt = f"List 3 facts relevant to: {state['question']}"
    out = llm.invoke(prompt).content
    return {"notes": [out]}

def answer(state: State):
    joined = "\\n".join(state["notes"])
    prompt = f"Using these notes:\\n{joined}\\nAnswer: {state['question']}"
    out = llm.invoke(prompt).content
    return {"answer": out}`}</code></pre>

    <h2>Adım 4 — Grafiği bağlayın</h2>
    <pre><code>{`from langgraph.graph import StateGraph, START, END

builder = StateGraph(State)
builder.add_node("research", research)
builder.add_node("answer", answer)
builder.add_edge(START, "research")
builder.add_edge("research", "answer")
builder.add_edge("answer", END)
graph = builder.compile()`}</code></pre>

    <h2>Adım 5 — Çalıştırın</h2>
    <pre><code>{`result = graph.invoke({"question": "Why is MCP becoming the agent tool standard?"})
print(result["answer"])`}</code></pre>
    <p>
      Bu, çalışan bir LangGraph ajanıdır. Doğrusal, ancak diğer her şeyin üzerine inşa edildiği temel şekildir.
    </p>

    <h2>Adım 6 — Koşullu bir kenar ekleyin</h2>
    <p>
      LangGraph'ın gücü koşullu yönlendirmedir. Diyelim ki yalnızca en az bir not aldıysanız cevap düğümünü çağırmak istiyorsunuz.
    </p>
    <pre><code>{`def route(state: State):
    return "answer" if state["notes"] else "research"   # notlar olana kadar döngü

builder.add_conditional_edges("research", route, {"research": "research", "answer": "answer"})`}</code></pre>
    <p>
      Bu bir döngüdür — grafik, koşul değişene kadar <code>research</code>'i çalıştırmaya devam eder. Sonsuza kadar çalışamaması için bir yineleme sınırı koyun (8. adıma bakın).
    </p>

    <h2>Adım 7 — Durumu kalıcı hale getirin (kontrol noktası oluşturma)</h2>
    <p>
      En önemli özellik. Bir kontrol noktası ekleyin ve grafik duraklayabilir, yeniden başlayabilir ve herhangi bir düğümde incelenebilir.
    </p>
    <pre><code>{`from langgraph.checkpoint.sqlite import SqliteSaver

saver = SqliteSaver.from_conn_string("agent.sqlite")
graph = builder.compile(checkpointer=saver)

config = {"configurable": {"thread_id": "task-42"}}
graph.invoke({"question": "..."}, config=config)`}</code></pre>
    <p>
      Grafiğin her düğümden sonraki durumu SQLite'a (veya Postgres'e veya Redis'e) kaydedilir. Süreç çökerse, aynı <code>thread_id</code> ile devam edebilir ve kaldığı yerden devam alabilirsiniz. Bu nedenle LangGraph, uzun süreli iş yükleri için varsayılan seçimdir.
    </p>

    <h2>Adım 8 — Güvenlik önlemleri</h2>
    <ul>
      <li>
        Toplam yinelemeyi sınırlayın: <code>graph.invoke(..., config={'{"recursion_limit": 25}'})</code>.
      </li>
      <li>
        Bir dekoratörle her düğümü günlüğe kaydedin; grafikleri beklediğinizden üç kat daha sık hata ayıklamanız gerekecek.
      </li>
      <li>
        Token bütçesini önceden belirleyin. Döngüye sokmadan önce{" "}
        <a href="/tools/ai-token-counter">token sayacımız</a> ile uçtan uca bir geçiş yapın.
      </li>
      <li>
        İzlemeler için LangSmith veya OpenTelemetry kullanın. Grafiği bir görüntüleyicide görmek, günlükleri okumaktan farklı bir deneyimdir.
      </li>
    </ul>

    <h2>LangGraph NE ZAMAN KULLANILMAMALI</h2>
    <ul>
      <li>
        Ajanınız tek bir <a href="/learn/llm">LLM</a> çağrısıysa. Sadece LLM'i çağırın.
      </li>
      <li>
        Ajanınız 2-4 ajandan oluşan düz bir boru hattıysa. <a href="/guides/how-to-build-a-multi-agent-system-with-crewai">CrewAI</a> kullanın — daha basit bir zihinsel model.
      </li>
      <li>
        Editörde otomatik tamamlama yardımına ihtiyacınız varsa. LangGraph bir operasyon çerçevesidir, kodlama asistanı değil. <a href="/guides/how-to-set-up-cursor-ai-ide">Cursor</a> veya <a href="/guides/how-to-set-up-claude-code">Claude Code</a> kullanın.
      </li>
    </ul>
  </>
);