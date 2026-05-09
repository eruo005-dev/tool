import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    DSPy, Stanford&rsquo;un dil modellerini doğrudan prompt yazmak yerine <em>programlamak</em>
    {" "}için geliştirdiği bir çerçevedir. Hangi girdileri ve çıktıları istediğinizi bildirirsiniz; DSPy&rsquo;nin
    optimize edicileri, etiketli örneklerden promptları (ve bazen ince ayarları) derler.
    Bu bir zihniyet değişimidir: prompt dizelerini elle yazmayı bırakın, yazılı imzalar yazmaya başlayın
    ve bir derleyicinin sizin için gösterimleri ayarlamasına izin verin.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>DSPy aslında nedir</h2>
    <p>
      DSPy üç parçadan oluşur. <strong>İmzalar</strong> bir çağrının girdi-çıktı sözleşmesini bildirir
      (&ldquo;soru, bağlam &rarr; cevap&rdquo;). <strong>Modüller</strong> imzaları bir stratejiyle sarar
      (<code>Predict</code>, <code>ChainOfThought</code>, <code>ReAct</code>,
      <code>ProgramOfThought</code>). <strong>Optimize Ediciler</strong>
      (<code>BootstrapFewShot</code>, <code>MIPROv2</code>, <code>BootstrapFinetune</code> gibi teleprompterlar)
      küçük bir eğitim seti ve bir metrik alır ve modelinizde metriği en üst düzeye çıkaran
      gösterimleri veya talimatları arar.
    </p>
    <p>
      Sonuç: aynı Python kodu GPT-4o, Claude, Llama veya yerel bir modeli hedefleyebilir
      ve her biri kendi ayarlanmış promptunu alır. Asla bir prompt dizesini elle düzenlemezsiniz.
    </p>

    <h2>Kurulum</h2>
    <pre>{`pip install -U dspy

# Değerlendirme veri kümeleri veya <a href="/learn/fine-tuning">ince ayar</a> yardımcıları istiyorsanız:
pip install "dspy[anthropic]" datasets`}</pre>
    <p>
      Python 3.9+. DSPy arka planda LiteLLM kullanır, bu nedenle LiteLLM&rsquo;in desteklediği herhangi bir model
      kutudan çıktığı gibi çalışır.
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
      Hiç prompt yazılmadı. DSPy, imza docstring&rsquo;inden, alan adlarından ve alan açıklamalarından bir tane oluşturur.
      <code> dspy.Predict</code> yerine <code>dspy.ChainOfThought</code> kullanarak
      {" "}ücretsiz bir akıl yürütme alanı elde edin.
    </p>

    <h2>Gerçek bir iş akışı &mdash; bir optimize ediciyle derleme</h2>
    <p>
      DSPy&rsquo;nin gücü, bir modülü bir metriğe karşı derlemektir.
      İşte <code>BootstrapFewShot</code> ile optimize edilmiş bir RAG programı:
    </p>
    <pre>{`import dspy

class RAG(dspy.Module):
    def __init__(self, retriever):
        self.retrieve = retriever
        self.generate = dspy.ChainOfThought("context, question -> answer")

    def forward(self, question):
        context = self.retrieve(question, k=5)
        return self.generate(context=context, question=question)

# Eğitim verileri: bir avuç (soru, doğru_cevap) çifti.
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
      Derleyici, programınızı eğitim setinde çalıştırır, <code>exact_match</code>&rsquo;in başarılı olduğu
      izleri tutar ve bunları az örnekli gösterimler olarak ekler. Daha sonra model değiştirmek mi istiyorsunuz?
      <code> compile</code>&rsquo;ı yeniden çalıştırın; Claude için en iyi çalışan gösterimler,
      GPT-4o için en iyi çalışan gösterimler değildir.
    </p>

    <h2>Değerlendirme</h2>
    <pre>{`evaluator = dspy.Evaluate(devset=devset, num_threads=8, display_progress=True)
score = evaluator(compiled_rag, metric=exact_match)`}</pre>
    <p>
      DSPy, değerlendirmeyi birinci sınıf bir vatandaş olarak ele alır. Sayısal olarak değerlendirmiyorsanız,
      promptlarla sadece el sallıyorsunuz demektir.
    </p>

    <h2>Dikkat edilmesi gerekenler</h2>
    <p>
      <strong>Etiketli veriye ihtiyacınız var.</strong> Optimize