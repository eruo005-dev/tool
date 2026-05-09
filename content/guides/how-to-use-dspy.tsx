import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    DSPy, Stanford&rsquo;un dil modellerini yönlendirmek yerine <em>programlamak</em> için geliştirdiği bir çerçevedir. Hangi girdi ve çıktıları istediğinizi bildirirsiniz; DSPy&rsquo;nin optimize edicileri, etiketli örneklerden yönlendirmeleri (ve bazen ince ayarları) derler. Bu bir zihniyet değişimidir: elle yönlendirme dizeleri oluşturmayı bırakın, yazılı imzalar yazmaya başlayın ve bir derleyicinin sizin için gösterimleri ayarlamasına izin verin.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>DSPy aslında nedir</h2>
    <p>
      DSPy&rsquo;nin üç parçası vardır. <strong>İmzalar</strong> bir çağrının girdi-çıktı sözleşmesini bildirir (&ldquo;soru, bağlam &rarr; cevap&rdquo;). <strong>Modüller</strong> imzaları bir stratejiyle sarar (<code>Predict</code>,
      <code> ChainOfThought</code>, <code>ReAct</code>,
      <code> ProgramOfThought</code>). <strong>Optimize Ediciler</strong> (teleprompterlar <code>BootstrapFewShot</code>,
      <code> MIPROv2</code>, <code>BootstrapFinetune</code> gibi) küçük bir eğitim seti ve bir metrik alır ve modelinizde metriği en üst düzeye çıkaran gösterimleri veya talimatları arar.
    </p>
    <p>
      Sonuç: Aynı Python kodu GPT-4o, Claude, Llama veya yerel bir modeli hedefleyebilir ve her biri kendi ayarlanmış yönlendirmesini alır. Asla elle bir yönlendirme dizesi düzenlemezsiniz.
    </p>

    <h2>Kurulum</h2>
    <pre>{`pip install -U dspy

# Değerlendirme veri kümeleri veya <a href="/learn/fine-tuning">ince ayar</a> yardımcıları istiyorsanız:
pip install "dspy[anthropic]" datasets`}</pre>
    <p>
      Python 3.9+. DSPy arka planda LiteLLM kullanır, bu nedenle LiteLLM&rsquo;in desteklediği her model kutudan çıktığı gibi çalışır.
    </p>

    <h2>İlk çalışan örnek</h2>
    <pre>{`import dspy

lm = dspy.LM("openai/gpt-4o-mini")
dspy.configure(lm=lm)

class Classify(dspy.Signature):
    """Bir ürün yorumunun duyarlılığını sınıflandır."""
    review: str = dspy.InputField()
    sentiment: str = dspy.OutputField(desc="positive, negative, or neutral")
    confidence: float = dspy.OutputField(desc="0.0 to 1.0")

classify = dspy.Predict(Classify)

out = classify(review="Battery lasts two days, screen is gorgeous.")
print(out.sentiment, out.confidence)
# positive 0.92`}</pre>
    <p>
      Hiç yönlendirme yazılmadı. DSPy, imza docstring&rsquo;inden, alan adlarından ve alan açıklamalarından bir tane oluşturur. Ücretsiz bir akıl yürütme alanı elde etmek için
      <code> dspy.Predict</code> yerine <code>dspy.ChainOfThought</code>
      {" "}kullanın.
    </p>

    <h2>Gerçek bir iş akışı &mdash; bir optimize ediciyle derleme</h2>
    <p>
      DSPy&rsquo;nin gücü, bir modülü bir metriğe karşı derlemektir. İşte
      <code> BootstrapFewShot</code> ile optimize edilmiş bir RAG programı:
    </p>
    <pre>{`import dspy

class RAG(dspy.Module):
    def __init__(self, retriever):
        self.retrieve = retriever
        self.generate = dspy.ChainOfThought("context, question -> answer")

    def forward(self, question):
        context = self.retrieve(question, k=5)
        return self.generate(context=context, question=question)

# Eğitim verileri: bir avuç (soru, altın_cevap) çifti.
trainset = [
    dspy.Example(question=q, answer=a).with_inputs("question")
    for q, a in load_my_qa_pairs()
]

def exact_match(example, pred, trace=None):
    return example.answer.lower() in pred.answer.lower()

optimizer = dspy.BootstrapFewShot(metric=exact_match, max_bootstrapped_demos=4)
compiled_rag = optimizer.compile(RAG(retriever=my_retriever), trainset=trainset)

compiled_rag.save("compiled_rag.json")`}</pre>
    <p>
      Derleyici, programınızı eğitim setinde çalıştırır, <code>exact_match</code>&rsquo;in başarılı olduğu izleri tutar ve bunları az örnekli gösterimler olarak yerleştirir. Daha sonra model değiştirmek mi? <code> compile</code>&rsquo;ı yeniden çalıştırın; Claude için en iyi çalışan gösterimler, GPT-4o için en iyi çalışan gösterimler değildir.
    </p>

    <h2>Değerlendirme</h2>
    <pre>{`evaluator = dspy.Evaluate(devset=devset, num_threads=8, display_progress=True)
score = evaluator(compiled_rag, metric=exact_match)`}</pre>
    <p>
      DSPy, değerlendirmeyi birinci sınıf bir vatandaş olarak ele alır. Sayısal olarak değerlendirmiyorsanız, yönlendirmelerde sadece el sallıyorsunuz demektir.
    </p>

    <h2>Tuzaklar</h2>
    <p>
      <strong>Etiketli veriye ihtiyacınız var.</strong> Optimize ediciler yalnızca eğitim setiniz ve metriğiniz kadar iyidir. 20&ndash;50 iyi örnek, her seferinde 500 gürültülü örneği yener.
    </p>
    <p>
      <strong>Derleme, modelinizi çok fazla çağırır.</strong>
      <code> BootstrapFewShot</code> iyi gösterimler ararken yüzlerce çağrı yapabilir; <code>MIPROv2</code> daha fazlasını yapar. Mümkün olduğunda öğretmen geçişi için ucuz bir model kullanın
      (<code>teacher_settings={`{ "lm": cheap_lm }`}</code>).
    </p>
    <p>
      <strong>Kaydedilen programlar model seçimini içerir.</strong> Bir model için optimize edilmiş derlenmiş bir program, başka bir modelle düşük performans gösterebilir. JSON yapıtını modele özgü olarak değerlendirin.
    </p>
    <p>
      <strong>İmzalar katı sözleşmelerdir.</strong> Model hatalı biçimlendirilmiş alanlar döndürürse, DSPy hata verir. Kendi kendini onarma döngüleri için
      <code> dspy.Suggest</code> veya <code>dspy.Assert</code> kullanın.
    </p>

    <h2>Ne ZAMAN kullanılmamalı</h2>
    <p>
      Tek seferlik çıkarma betikleri, demolar veya sayısal olarak değerlendirmeyeceğiniz herhangi bir şey için DSPy&rsquo;yi atlayın &mdash; optimize edici mekanizması aşırıya kaçmaktır. Sıkı <a href="/learn/stream">akış</a> UX&rsquo;ine ihtiyacınız varsa atlayın (DSPy&rsquo;nin güçlü yanı toplu tarzda akıl yürütme ve RAG&rsquo;dir). Aylarca üzerinde yineleme yapacağınız ve ölçülebilir kalite kazanımlarını önemseyeceğiniz bir sınıflandırıcı, çıkarıcı veya RAG sistemi gönderirken DSPy&rsquo;ye başvurun.
    </p>
    <p>
      İmza talimatlarını{" "}
      <a href="/tools/prompt-improver">yönlendirme iyileştirici</a> ile sıkılaştırın, derlenmiş program JSON&rsquo;unu{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile inceleyin ve bir gecelik derlemeye başlamadan önce optimize edici çalışmalarını{" "}
      <a href="/tools/ai-token-counter">token sayacı</a> ile bütçelendirin.
    </p>
  </>
);