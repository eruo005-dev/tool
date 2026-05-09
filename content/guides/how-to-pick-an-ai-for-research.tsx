import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da araştırma için bir yapay zeka seçmek çoğunlukla bulmanız mı yoksa sentezlemeniz mi gerektiğiyle ilgilidir.
    Bulmak = Perplexity. Sentezlemek = Claude Projects veya NotebookLM. Doğru cevap genellikle
    her ikisidir, sırayla kullanılır.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Üç araştırmaya özgü desen</h2>
    <ul>
      <li><strong>Kaynakçalı bulma:</strong> Perplexity Pro. Web'den kaynaklanan güncel bilgi
        gerektiren herhangi bir soru için varsayılan.</li>
      <li><strong>Yüklenen kaynaklar arasında sentezleme:</strong> NotebookLM (ücretsiz, 50'ye kadar
        kaynak) veya Claude Projects (20$/ay, 1M bağlam). NotebookLM'in kaynakça yoğunluğu
        daha yüksektir; Claude'un akıl yürütme derinliği daha yüksektir.</li>
      <li><strong>Tek bir uzun belgeyi analiz etme:</strong> Claude Sonnet (1M bağlam) veya Gemini
        2.5 Pro (2M bağlam).</li>
    </ul>

    <h2>Karar ağacı</h2>
    <ol>
      <li>Kaynaklarınız zaten var mı? <strong>Evet</strong> &rarr; NotebookLM (ücretsiz) veya Claude
        Projects (ücretli). <strong>Hayır</strong> &rarr; Perplexity Pro ile başlayın.</li>
      <li>En uzun tek kaynağınız ne kadar? <strong>200k token altı</strong> &rarr; Claude.
        <strong>200k-1M</strong> &rarr; Claude (1M). <strong>1M+</strong> &rarr; Gemini 2.5/3 Pro
        (2M bağlam).</li>
      <li>Kaynakçalar önemli mi? <strong>Evet, yüksek hassasiyetle</strong> &rarr; NotebookLM veya
        Perplexity. <strong>Evet, ancak akıl yürütme daha önemli</strong> &rarr; Claude.</li>
      <li>Ses veya video içeriyor mu? <strong>Evet</strong> &rarr; Gemini.</li>
    </ol>

    <h2>Neden her zaman Perplexity ile başlıyorum</h2>
    <p>
      Perplexity hızlı ve kaynakçalıdır &mdash; bir araştırma oturumunun ilk 10 dakikada ihtiyaç
      duyduğu iki nitelik. Derin çalışmayı Claude'da yapmayı planlasam bile, Perplexity ile başlamak
      bana Claude Projects veya NotebookLM'e eklemek için seçilmiş bir kaynak seti sağlar. Kaynakça
      listesi benim kaynak listem haline gelir.
    </p>

    <h2>Kullanıcı türüne göre dürüst değerlendirme</h2>
    <ul>
      <li><strong>Akademik araştırmacı:</strong> NotebookLM (ücretsiz) + Claude Pro (20$).</li>
      <li><strong>Gazeteci:</strong> Birincil olarak Perplexity Pro (20$); taslak için Claude veya ChatGPT.</li>
      <li><strong>Pazar analisti:</strong> Perplexity Pro + Claude Pro &mdash; altın standart için
        ayda 40$.</li>
      <li><strong>Öğrenci:</strong> NotebookLM (ücretsiz) + ChatGPT ücretsiz veya Claude ücretsiz.</li>
      <li><strong>Avukat:</strong> <a href="/guides/best-ai-for-legal-research">Hukuk araştırması için en iyi yapay zeka</a> sayfasına bakın &mdash; burada dikey hukuk yapay zekası önemlidir.</li>
    </ul>
    <p>
      Karşılaştır: <a href="/compare/claude-vs-perplexity">Claude vs Perplexity</a>,{" "}
      <a href="/compare/chatgpt-vs-perplexity">ChatGPT vs Perplexity</a>.
    </p>
  </>
);