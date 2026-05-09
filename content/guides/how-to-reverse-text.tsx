import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir metni ters çevirmek, herhangi bir programlama eğitimindeki ilk
      problemlerden biridir ve bu, işin basit olduğu yanılsamasını yaratır.
      Oysa öyle değildir. "Bu metni ters çevir" ifadesi, her karakteri ters
      çevirmek, her kelimeyi ters çevirmek, baytları ters çevirmek veya
      kullanıcının algıladığı karakterleri ters çevirmek anlamına gelebilir
      &mdash; ve emoji, birleşik aksan işaretleri veya sağdan sola yazılan
      betikler eklediğinizde bunların her biri farklı bir cevap verir. Bu
      kılavuz, dört yaygın ters çevirme tanımını, basit bir karakter
      karakter döngünün neden modern Unicode metinlerde bozulduğunu ve bayrak
      emojisi, Tayland sesli harf işaretleri ve İbranice gibi uç durumların
      nasıl ele alınacağını kapsar. Ayrıca palindrom kontrol uygulamasını ve
      buna özgü tuzakları da öğreneceksiniz.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>"Ters çevirme"nin dört tanımı</h2>
    <p>
      Kod yazmadan önce bir tanım seçin:
    </p>
    <ul>
      <li><strong>Karakter ters çevirme</strong> &mdash; son karakter ilk, ilk karakter son</li>
      <li><strong>Kelime ters çevirme</strong> &mdash; kelime sırası ters döner, kelimelerin yazılışı aynı kalır</li>
      <li><strong>Bayt ters çevirme</strong> &mdash; nadiren istenen şeydir, tamamlık açısından gösterilmiştir</li>
      <li><strong>Grafem ters çevirme</strong> &mdash; kullanıcıların emoji/aksan işaretleriyle gerçekten beklediği şey</li>
    </ul>

    <h2>Karakter ters çevirme: basit versiyon</h2>
    <p>
      Ders kitabı yaklaşımı saf ASCII için işe yarar:
    </p>
    <pre>{`"hello" -> "olleh"

// JS
[...str].reverse().join("")

// Python
str[::-1]`}</pre>
    <p>
      Bu, girdi temel çok dilli düzlemin ötesinde bir şey içerene kadar çalışır.
    </p>

    <h2>Basit ters çevirmenin emoji üzerinde neden bozulduğu</h2>
    <p>
      Birçok emoji, UTF-16'da <strong>yedek çiftler</strong> olarak saklanır
      &mdash; bir kullanıcının algıladığı karakteri oluşturan iki kod birimi.
      JavaScript'in <code>str.split("")</code> yöntemi kod birimi düzeyinde
      böler ve bu da yedek çiftleri birbirinden ayırır.
    </p>
    <pre>{`// Bozuk:
"a\\uD83D\\uDE00b".split("").reverse().join("")
// bozuk yedek sırası üretir

// Doğru:
[..."a\\uD83D\\uDE00b"].reverse().join("")
// spread yineleyiciyi kullanır, bu da kod noktalarına saygı duyar`}</pre>

    <h2>Birleşik karakterler: daha derin sorun</h2>
    <p>
      Kod noktası yinelemesi bile yeterli değildir. Bir "é" harfi tek bir kod
      noktası (U+00E9) veya iki kod noktası (U+0065 + U+0301 birleşik vurgu)
      olabilir. İki kod noktalı formu ters çevirirseniz, vurgu yanlış harfe
      gelir.
    </p>
    <pre>{`"cafe\\u0301" basitçe ters çevrilirse -> "\\u0301efac"
// birleşik işaret artı kendisinden önceki
// herhangi bir şeye eklenir, "e" harfine değil`}</pre>
    <p>
      Çözüm: kod noktalarına değil, <em>grafem kümelerine</em> göre bölün.
      Modern JS'de <code>Intl.Segmenter</code> veya Python'da
      <code>regex</code> paketini kullanın.
    </p>

    <h2>Grafem güvenli ters çevirme</h2>
    <pre>{`// JS
const seg = new Intl.Segmenter("en", { granularity: "grapheme" });
const graphemes = [...seg.segment(str)].map(s => s.segment);
const reversed = graphemes.reverse().join("");

// Python
import regex
graphemes = regex.findall(r"\\X", str)
reversed = "".join(graphemes[::-1])`}</pre>
    <p>
      Bu, bayrak emojilerini (bölgesel gösterge çiftleri), cilt tonu
      değiştiricilerini, ZWJ dizilerini (aile emojisi) ve birleşik işaretleri
      doğru şekilde işler.
    </p>

    <h2>Kelime ters çevirme</h2>
    <p>
      Kelime düzeyinde ters çevirme, her bir kelimeyi ters çevirmeden
      belirteçlerin sırasını tersine çevirir. "Hızlı kahverengi tilki"
      ifadesi "tilki kahverengi hızlı" olur.
    </p>
    <pre>{`str.split(/\\s+/).reverse().join(" ")`}</pre>
    <p>
      Boşluk işlemesine dikkat edin &mdash; çift boşluklar, sekmeler, yeni
      satırlar. Tam boşluğu korumak mı yoksa normalleştirmek mi istediğinize
      karar verin.
    </p>

    <h2>Sağdan sola betikler</h2>
    <p>
      Arapça, İbranice ve Farsça zaten sağdan sola görüntülenir. Bunları
      karakter düzeyinde ters çevirmek, soldan sağa sırada görüntülenen bir
      metin üretir; bu, bir LTR okuyucusuna "düz" gibi görünse de aslında
      karıştırılmış bir dizedir. RTL içerik için ters çevirme neredeyse hiçbir
      zaman istenen şey değildir. Karma betikli bir cümle oluşturuyorsanız,
      Unicode çift yönlü algoritması görsel sırayı depolama sırasından ayrı
      olarak işler &mdash; onunla savaşmayın.
    </p>

    <h2>Bayt ters çevirme</h2>
    <p>
      Ham UTF-8 baytlarını ters çevirmek neredeyse her durumda geçersiz UTF-8
      üretir ve yalnızca ASCII verileri üzerinde düşük seviyeli işler
      yapmıyorsanız kaçınılmalıdır. Çok baytlı devam baytları, başlangıç
      baytlarının ait olduğu konumlara gelecektir.
    </p>

    <h2>Palindrom kontrolü</h2>
    <p>
      Klasik uygulama. Standart iş akışı:
    </p>
    <ul>
      <li>Küçük harfe çevir</li>
      <li>Noktalama işaretlerini ve boşlukları kaldır</li>
      <li>Unicode'u normalleştir (NFC)</li>
      <li>Grafem olarak ters çevrilmiş haliyle karşılaştır</li>
    </ul>
    <pre>{`function isPalindrome(s) {
  const norm = s.toLowerCase()
    .normalize("NFC")
    .replace(/[^\\p{L}\\p{N}]/gu, "");
  const seg = new Intl.Segmenter("en", { granularity: "grapheme" });
  const graphs = [...seg.segment(norm)].map(x => x.segment);
  return graphs.join("") === graphs.slice().reverse().join("");
}`}</pre>

    <h2>Satır satır ters çevirme</h2>
    <p>
      Farklı bir "ters çevirme" türü: her satırı bozulmadan tutar ancak son
      satırı ilk sıraya koyar. Kronolojik günlük dosyaları için kullanışlıdır.
    </p>
    <pre>{`str.split("\\n").reverse().join("\\n")`}</pre>

    <h2>Performans notları</h2>
    <p>
      Yaklaşık 10&nbsp;KB'nin altındaki dizeler için, grafem bölümleme yeterince
      hızlıdır, bu yüzden endişelenmemelisiniz. Çok MB'lık girdiler için,
      yineleyici tabanlı yaklaşımlar her şeyi bir diziye bölmekten daha iyidir.
      <a href="/learn/stream">Akış</a> grafem bölümleme, bir grafem
      parçalar arasında yayılabileceğinden arabellek işleme gerektirir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Boş dizeye bölüp ters çevirmek &mdash; emoji ve birleşik işaretleri
      bozar. Palindromları ters çevirip sonra küçük harfe çevirmek (bunu ters
      sırada yapın &mdash; bazı betiklerde büyük/küçük harf değişiklikleri kod
      noktası sayısını değiştirir). Karşılaştırmadan önce normalleştirmeyi
      unutmak, bu yüzden "café" ve "cafe + birleşik vurgu" eşit olmayan şekilde
      karşılaştırılır. RTL metni ters çevirmekten anlamlı bir çıktı beklemek.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      <a href="/tools/text-reverser">Metin ters çevirici</a>
      <a href="/tools/text-repeater">Metin tekrarlayıcı</a>
      <a href="/tools/case-converter">Büyük/küçük harf dönüştürücü</a>
    </p>
  </>
);