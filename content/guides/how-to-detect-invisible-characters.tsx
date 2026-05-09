import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Metin işlemedeki en sinir bozucu hatalardan bazıları, kelimenin tam anlamıyla göremediğiniz karakterlerden kaynaklanır. Sıfır genişlikli boşluklar, bölünemez boşluklar, bayt sırası işaretleri, sıfır genişlikli birleştiriciler ve Unicode'da kullanılan egzotik etiket karakterleri, yapıştırılan metinlerde gizlenir, regex temizliğinden sağ çıkar ve sessizce dize eşleştirmeyi, arama indekslerini ve CSV ayrıştırmayı bozar. Bir şifre alanı girdinizi reddeder; bir regex, orada olduğunu bildiğiniz şeyle eşleşmez; bir dosyada gizemli bir ilk karakter bulunur. Bu kılavuz, en yaygın görünmez karakterleri, iş akışınıza nasıl sızdıklarını ve gerçekten işe yarayan tespit ve temizleme kalıplarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Olağan şüpheliler</h2>
    <ul>
      <li><strong>NBSP</strong> (U+00A0) &mdash; bölünemez boşluk, boşluk gibi görünür</li>
      <li><strong>ZWSP</strong> (U+200B) &mdash; sıfır genişlikli boşluk, genişlik kaplamaz</li>
      <li><strong>ZWNJ</strong> (U+200C) &mdash; sıfır genişlikli birleştirici olmayan</li>
      <li><strong>ZWJ</strong> (U+200D) &mdash; sıfır genişlikli birleştirici (emoji'lerde kullanılır)</li>
      <li><strong>BOM</strong> (U+FEFF) &mdash; bayt sırası işareti, genellikle dosya başında</li>
      <li><strong>Yumuşak tire</strong> (U+00AD) &mdash; yalnızca satır sonu noktalarında görünür</li>
      <li><strong>LRM/RLM</strong> (U+200E/U+200F) &mdash; soldan sağa/sağdan sola işaretleri</li>
      <li><strong>Etiket karakterleri</strong> (U+E0000 bloğu) &mdash; görünmez gizli mesaj vektörü</li>
      <li><strong>Değişim seçicileri</strong> (U+FE00&ndash;U+FE0F)</li>
      <li><strong>İdeografik boşluk</strong> (U+3000) &mdash; tam genişlikli boşluk</li>
    </ul>

    <h2>Nasıl bulaşırlar</h2>
    <p>
      Yapıştırma iş akışları ana kaynaktır:
    </p>
    <ul>
      <li>Microsoft Word'den kopyalama &rarr; NBSP ve akıllı tırnaklar</li>
      <li>Web sayfalarından kopyalama &rarr; kelime bölme ipuçları için ZWSP</li>
      <li>Excel CSV'den kaydetme &rarr; dosya başında BOM</li>
      <li>Terminalden kopyalama &rarr; ANSI kaçış dizileri</li>
      <li>Mesajlaşma uygulamalarından yapıştırma &rarr; emoji dizilerinde ZWJ</li>
      <li>Kötü niyetli yapıştırma &rarr; kasıtlı olarak gizlenmiş yükler</li>
    </ul>

    <h2>Hex dökümü ile tespit</h2>
    <p>
      En güvenilir inceleme: hex'i görüntüleyin. Görünür bir bölgede ASCII olmayan herhangi bir şey şüphelidir.
    </p>
    <pre>{`// JS: her kod noktasını dök
[...str].forEach((c, i) => {
  const cp = c.codePointAt(0).toString(16).padStart(4, "0");
  console.log(i, c, "U+" + cp.toUpperCase());
});`}</pre>
    <p>
      Komut satırında: <code>xxd</code>, <code>od -c</code> veya
      <code>hexyl</code>.
    </p>

    <h2>Regex ile tespit</h2>
    <p>
      Sıfır veya belirsiz genişlikte görüntülenen her şeyi eşleştirin:
    </p>
    <pre>{`const INVISIBLES = /[\\u00A0\\u00AD\\u034F\\u061C\\u115F\\u1160\\u17B4\\u17B5\\u180E\\u2000-\\u200F\\u2028-\\u202F\\u205F-\\u206F\\u3000\\u2060-\\u2064\\uFEFF\\uFFF9-\\uFFFB]/gu;

str.match(INVISIBLES);`}</pre>
    <p>
      Bu, Unicode'da açıkça "varsayılan olarak yok sayılabilir" veya bilinen görünmez boşluk karakterleri olarak listelenen aralıkları kapsar. Gizli mesaj saldırıları konusunda paranoyaksanız, E0000 etiket bloğu ile genişletin.
    </p>

    <h2>Sıfır genişlikli karakterler</h2>
    <p>
      U+200B&ndash;U+200D ve U+FEFF sıfır işleme genişliği alır. İşlevsel olarak görünmezdirler ancak şunları etkiler:
    </p>
    <ul>
      <li>Dize uzunluğu (<code>"a\u200Bb".length === 3</code>)</li>
      <li>Regex eşleştirme (<code>/ab/</code> eşleşmez)</li>
      <li>Arama indeksleri</li>
      <li>URL ayrıştırma ve alan adı doğrulama</li>
      <li>Şifre karşılaştırma</li>
    </ul>
    <p>
      Giriş normalizasyonu için agresif bir şekilde temizleyin:
    </p>
    <pre>{`str.replace(/[\\u200B-\\u200D\\uFEFF]/g, "")`}</pre>

    <h2>BOM sorunu</h2>
    <p>
      Bir dosyanın başındaki U+FEFF, bazı araçlar tarafından UTF kodlamasını belirtmek için kullanılan bir bayt sırası işaretidir. Şunlara neden olur:
    </p>
    <ul>
      <li>CSV ayrıştırıcılarının ilk sütun başlığı olarak "&#xFEFF;Ad" okuması</li>
      <li>JSON ayrıştırıcılarının "beklenmeyen karakter" hatası vermesi</li>
      <li>Kabuk betiklerinin shebang satırı geçersiz kılındığı için başarısız olması</li>
      <li>Diff araçlarının 0. konumda "orada olmayan" bir bayt göstermesi</li>
    </ul>
    <pre>{`// yalnızca dosya başındaki BOM'u temizle
str.replace(/^\\uFEFF/, "")`}</pre>

    <h2>Bölünemez boşluk çeşitleri</h2>
    <p>
      NBSP (U+00A0) en yaygın sahtekardır. Boşlukla aynı görünür. Şunları bozar:
    </p>
    <ul>
      <li><code>/ /</code> regex'i</li>
      <li><code>str.split(" ")</code></li>
      <li>Trim (eski motorlarda)</li>
    </ul>
    <p>
      Dikkat edilmesi gereken diğer boşluk çeşitleri: U+2007 (figür boşluğu), U+2008 (noktalama boşluğu), U+202F (dar kırılmaz boşluk), U+3000 (ideografik boşluk). Tümünü normal boşluğa normalleştirin:
    </p>
    <pre>{`str.replace(/[\\u00A0\\u2000-\\u200A\\u202F\\u205F\\u3000]/g, " ")`}</pre>

    <h2>Etiket karakterleri &mdash; gizli mesaj vektörü</h2>
    <p>
      Unicode'un U+E0020&ndash;U+E007F bloğu ASCII'yi yansıtır ancak varsayılan olarak yok sayılabilir. Normal metne ekleyerek tüm bir mesajı "görünmez" etiket karakterleriyle kodlayabilirsiniz. Çoğu regex'ten, çoğu UI görüntülemesinden ve çoğu kopyala-yapıştırdan kurtulur. Filigranlama ve bazı saldırı senaryolarında kullanılır. Bunları saklamak için özel bir nedeniniz yoksa temizleyin.
    </p>
    <pre>{`str.replace(/[\\u{E0020}-\\u{E007F}]/gu, "")`}</pre>

    <h2>Tespit UI kalıpları</h2>
    <p>
      Bir kullanıcı "form girdimin geçersiz olduğunu söylüyor ama iyi görünüyor" diye şikayet ettiğinde, karakter karakter bir tanılama gösterin:
    </p>
    <ul>
      <li>Her karakteri kod noktasıyla birlikte işleyin</li>
      <li>Güvenli bir izin listesinde olmayanları vurgulayın</li>
      <li>Otomatik olarak temizlenmiş bir sürüm önerin</li>
    </ul>

    <h2>Giriş sınırlarında önleme</h2>
    <p>
      Düzeltme, sorguda değil, alımda yapılır. Her kullanıcı metni girişinde:
    </p>
    <pre>{`function cleanInput(s) {
  return s
    .normalize("NFC")
    .replace(/^\\uFEFF/, "")
    .replace(/[\\u200B-\\u200D\\u2060-\\u2064\\uFEFF]/g, "")
    .replace(/[\\u00A0\\u2000-\\u200A\\u202F\\u205F\\u3000]/g, " ")
    .replace(/[\\x00-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]/g, "")
    .trim();
}`}</pre>

    <h2>Görünmez karakterlerin istendiği durumlar</h2>
    <p>
      Her zaman çöp değildir. Meşru kullanımlar şunları içerir:
    </p>
    <ul>
      <li>Emoji dizilerinde ZWJ (aile, meslekler, bayraklar)</li>
      <li>Farsça ve Arapça metinlerde doğru harf birleştirme için ZWNJ</li>
      <li>Baskı tipografisinde satır sonu ipuçları için yumuşak tireler</li>
      <li>Çift yönlü metin görüntülemeyi düzeltmek için LRM/RLM</li>
    </ul>
    <p>
      Yalnızca bağlama duyarlı temizleme. Emoji'den ZWJ'yi silmeyin.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      NBSP ve ideografik boşluğu kaçıran bir "boşluk temizleme" rutini yazmak. CSV içe aktarmalarından BOM'u temizlememek ve bozuk bir ilk sütuna sahip olmak. Her dilde <code>trim()</code>'in Unicode boşluğunu işlediğini varsaymak (bazı eski çalışma zamanlarında işlemez). Bazıları anlam taşırken tüm sıfır genişlikli karakterleri gürültü olarak ele almak. Ve bir gizem hatası geldiğinde kod noktalarını günlüğe kaydetmemek &mdash; görünmez karakterleri hex dökümü olmadan hata ayıklamak işkencedir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      <a href="/tools/invisible-character-detector">Görünmez karakter dedektörü</a>
      <a href="/tools/unicode-text-normalizer">Unicode metin normalleştirici</a>
      <a href="/tools/whitespace-remover">Boşluk temizleyici</a>
    </p>
  </>
);