import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Kelime frekansı, en eski metin analizi tekniklerinden biridir ve hâlâ SEO, içerik denetimleri, intihal tespiti, stil kontrolü ve temel NLP'yi destekler. Bir belgede her kelimenin kaç kez geçtiğini sayarak aşırı kullanılan terimleri, anahtar kelime kapsama boşluklarını, ton alışkanlıklarını ve bir külliyatın şeklini tespit edebilirsiniz. Ancak saf bir <code>split(" ")</code> noktalama işaretlerinde bozulur, "run," "runs" ve "running" ifadelerini üç farklı kelime olarak ele alır ve anlamlı içeriği yaygın dolgu kelimeleriyle karıştırır. Bu kılavuz, tokenizasyon kurallarını, durdurma kelimelerini, kök bulmayı, n-gramları ve SEO, stil ile araştırma uygulamaları için ihtiyaç duyduğunuz özel ayarlamaları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Tokenizasyon: ilk zor karar</h2>
    <p>
      Metni kelimelere nasıl ayırdığınız, sonraki tüm sayımları belirler. Saf boşlukla ayırma:
    </p>
    <pre>{`"Don't split on hyphens, maybe."
 ->  ["Don't", "split", "on", "hyphens,", "maybe."]`}</pre>
    <p>
      Noktalama işaretleri eklenmiştir. Daha iyisi: kelime olmayan karakterlerden ayırın, ardından küçük harfe çevirin:
    </p>
    <pre>{`str.toLowerCase().match(/\\b[\\p{L}\\p{N}']+\\b/gu)`}</pre>
    <p>
      Bu, kısaltmaları ("don't") korur ancak virgül ve noktaları atar. "state-of-the-art" ifadesini tek bir token olarak istiyorsanız, karakter sınıfına kısa çizgi ekleyin.
    </p>

    <h2>Büyük/küçük harf dönüşümü</h2>
    <p>
      "The" ve "the" aynı kelime olarak sayılmalıdır, ancak büyük harf kullanım modellerini analiz ediyorsanız sayılmamalıdır. <code>toLowerCase</code> genellikle yeterlidir, ancak yerel ayara özgü kuralları unutmayın (Türkçe noktalı/noktasız i, Almanca ß).
    </p>

    <h2>Durdurma kelimeleri</h2>
    <p>
      İngilizce metindeki en sık 20 kelime "the, of, and, a, to, in, is, you, that, it, he, was, for, on, are" şeklindedir — nadiren ilginçtir. Standart durdurma kelime listeleri bunları atar, böylece kalan sayımlar içeriği yansıtır.
    </p>
    <pre>{`const STOP = new Set([
  "the","a","an","and","or","but","if","then","else","of",
  "to","in","on","at","for","from","by","with","as","is",
  "are","was","were","be","been","being","have","has","had",
  "do","does","did","will","would","shall","should","may","might",
  "must","can","could","this","that","these","those","i","you",
  "he","she","it","we","they"
]);

tokens.filter(t => !STOP.has(t))`}</pre>
    <p>
      Listeyi alanınıza göre özelleştirin. SEO durdurma kelime listeleri genellikle araştırma külliyatı listelerinden daha fazla terim tutar.
    </p>

    <h2>Kök bulma ve lemmatizasyon</h2>
    <p>
      Her ikisi de kelime varyantlarını tek bir forma indirger:
    </p>
    <ul>
      <li>
        <strong>Kök bulma</strong> — algoritmik, ucuz, agresif. "running" → "run", "better" → "better" (düzensizleri işlemez)
      </li>
      <li>
        <strong>Lemmatizasyon</strong> — sözlük tabanlı, doğru, yavaş. "running" → "run", "better" → "good"
      </li>
    </ul>
    <p>
      Kök bulma genellikle frekans sayımı için yeterlidir. Porter kök bulucu klasiktir; Snowball modern türevidir. Doğruluk kritik işler için <code>spaCy</code> veya <code>NLTK</code> ile WordNet kullanın.
    </p>

    <h2>Sayma</h2>
    <p>
      Bir harita ile basit:
    </p>
    <pre>{`const counts = new Map();
for (const t of tokens) {
  counts.set(t, (counts.get(t) || 0) + 1);
}

// azalan sırala
const sorted = [...counts.entries()]
  .sort((a, b) => b[1] - a[1]);`}</pre>

    <h2>N-gramlar: tek kelimelerin ötesinde</h2>
    <p>
      Tek kelime sayımları ifadeleri kaçırır. "San Francisco", "san" + "francisco"nun ayrı ayrı taşıdığından daha fazla bilgi taşır. Bigramlar (2 kelime) ve trigramlar (3 kelime) bunu yakalar:
    </p>
    <pre>{`function ngrams(tokens, n) {
  const out = [];
  for (let i = 0; i <= tokens.length - n; i++) {
    out.push(tokens.slice(i, i + n).join(" "));
  }
  return out;
}

const bigrams = ngrams(tokens, 2);
const trigrams = ngrams(tokens, 3);`}</pre>
    <p>
      Bigram durdurma kelime filtrelemesi daha zordur — "of the" gürültüdür ancak "state of the art" sinyaldir. Her iki tokenin de durdurma kelimesi olduğu bigramları atın, gerisini tutun.
    </p>

    <h2>TF-IDF: bağlam içinde frekans</h2>
    <p>
      Ham frekans, durdurma kelimelerini ve yaygın terimleri kayırır. TF-IDF (terim frekansı ters belge frekansı), bir kelimenin bir külliyata göre <em>bu belge için</em> ne kadar ayırt edici olduğunu ölçer.
    </p>
    <pre>{`tf(t, d)   = t'nin d'deki sayısı / d'deki toplam terim
idf(t)     = log(N / n_t)   // N toplam belge, n_t t'yi içeren belge
tfidf(t,d) = tf(t, d) * idf(t)`}</pre>
    <p>
      Yüksek TF-IDF = belgenin karakteristiği. Etiketleme, konu çıkarma ve "öz" kelimeleri bulmak için harika.
    </p>

    <h2>SEO uygulaması: anahtar kelime yoğunluğu</h2>
    <p>
      Anahtar kelime yoğunluğu = (anahtar kelime sayısı / toplam kelime) × 100. Eski SEO hedefi %1–3 idi. Modern görüş: doğal dil, zorlanmış yoğunluğu yener. Frekans sayımını şunlar için kullanın:
    </p>
    <ul>
      <li>Bariz anahtar kelime doldurmayı yakalama (herhangi bir terim için &gt;%5)</li>
      <li>Beklenen terimlerin eksik olduğu kapsama boşluklarını bulma</li>
      <li>Çok sayfalı tutarlılığı denetleme</li>
      <li>Durdurma kelimesi benzeri ifadelere aşırı odaklanmayı tespit etme</li>
    </ul>

    <h2>Stil kontrolü</h2>
    <p>
      Frekans sayımları alışılmış dil kalıplarını ortaya çıkarır: "really," "just," "very," "that" dolgu olarak aşırı kullanılır. Taslağınızı bir frekans geçişinden geçirin ve ilk 30 içerik kelimesi kalıplarınızı gösterir.
    </p>

    <h2>Araştırma ve külliyat analizi</h2>
    <p>
      Daha büyük külliyatlar için:
    </p>
    <ul>
      <li>NFKC'ye normalleştirin, küçük harfe çevirin, noktalamayı atın</li>
      <li>Alana özgü bir durdurma kelime listesi uygulayın</li>
      <li>Snowball veya Porter ile kök bulun</li>
      <li>Uni/bi/trigramlar oluşturun, her birinin ilk 50'sini raporlayın</li>
      <li>Daha büyük analizler için belge bazında TF-IDF hesaplayın</li>
    </ul>

    <h2>Hapax legomena ve Zipf yasası</h2>
    <p>
      Doğal dil frekans dağılımları Zipf yasasını takip eder: N'inci en yaygın kelimenin frekansı kabaca 1/N ile orantılıdır. En yaygın kelime, ikinciden iki kat, üçüncüden üç kat daha sık görülür, vb. Zipf yasasından sapmalar genellikle yapay olarak oluşturulmuş veya çevrilmiş metni gösterir. Hapax legomena (tam olarak bir kez görünen kelimeler) tipik olarak herhangi bir külliyattaki farklı kelime dağarcığının %40–60'ını oluşturur — kullanışlı bir mantık kontrolü.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Yalnızca boşluklara bölmek ve noktalama işaretlerini tokenlara ekli tutmak. Büyük/küçük harf dönüşümünü çok erken yapmak ve özel isim ayrımını kaybetmek. İngilizce olmayan metne İngilizce durdurma kelime listesi uygulamak. "run," "runs" ve "running" ifadelerini tek bir kavram olarak kastederken ayrı ayrı saymak. HTML etiketlerinin, URL'lerin ve sayıların ayrı işleme ihtiyacı olduğunu unutmak. Ve frekans sırasını önemle karıştırmak — Zipf yasası "the"nin her zaman kazandığını garanti eder.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      <a href="/tools/word-frequency-counter">Kelime frekansı sayacı</a>
      <a href="/tools/keyword-density-checker">Anahtar kelime yoğunluğu denetleyicisi</a>
      <a href="/tools/word-counter">Kelime sayacı</a>
    </p>
  </>
);