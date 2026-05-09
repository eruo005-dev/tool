import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      &ldquo;Özel karakterleri temizle&rdquo; talebi göründüğünden daha
      muğlaktır. &ldquo;Özel&rdquo; karakterin evrensel bir tanımı
      yoktur &mdash; metni ne için temizlediğinize bağlıdır.
      URL uyumlu çıktı bir karakter seti ister; veritabanı birincil
      anahtarları başka birini ister; insan tarafından okunabilir
      görüntüleme üçüncü birini ister. <code>/[^a-zA-Z0-9]/g</code>
      gibi genel bir regex kullanmak, muhtemelen korumak istediğiniz
      boşlukları, aksanları ve noktalama işaretlerini yok eder. Bu
      kılavuz, kullanım durumunuza göre &ldquo;özel&rdquo; tanımını
      yapmayı, her biri için regex kalıplarını, yaygın noktalama
      işaretlerini seçici olarak nasıl koruyacağınızı ve metnin
      anlamını bozmadan yalnızca ASCII veya URL uyumlu çıktıyı nasıl
      üreteceğinizi adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>&ldquo;Özel&rdquo; tanımını yaparak başlayın</h2>
    <p>
      Önce çıktı kısıtlamasını seçin, ardından izin verilenler
      listesini oluşturun:
    </p>
    <ul>
      <li><strong>Dosya adı uyumlu</strong> &mdash; <code>/ \\ : * ? &ldquo; &lt; &gt; |</code> yok</li>
      <li><strong>URL uyumlu</strong> &mdash; alfanümerik, tire, alt çizgi, nokta</li>
      <li><strong>Yalnızca ASCII</strong> &mdash; U+0000&ndash;U+007F dışındaki her şeyi temizle veya dönüştür</li>
      <li><strong>Yalnızca alfanümerik</strong> &mdash; harfler ve rakamlar, başka hiçbir şey</li>
      <li><strong>İnsan tarafından okunabilir</strong> &mdash; noktalama işaretlerini koru, kontrol karakterlerini temizle</li>
    </ul>

    <h2>Yasaklama listesi yerine izin verme listesi</h2>
    <p>
      Yasaklama listesi (&ldquo;bu kötü karakterleri kaldır&rdquo;)
      aklınıza gelmeyen karakterlere karşı sizi savunmasız bırakır
      &mdash; özellikle Unicode karıştırıcıları, sıfır genişlikli
      karakterler ve görünmez etiketler. İzin verme listesi
      (&ldquo;yalnızca bu karakterleri tut&rdquo;) daha güvenlidir.
    </p>
    <pre>{`// İzin verme listesi: alfanümerik + boşluk + temel noktalama
str.replace(/[^\\p{L}\\p{N} .,!?'-]/gu, "")

// \\p{L} = herhangi bir harf (herhangi bir alfabe)
// \\p{N} = herhangi bir sayı
// u bayrağı = Unicode`}</pre>

    <h2>Dönüştürme ile yalnızca ASCII</h2>
    <p>
      ASCII olmayanı sadece temizlemeyin &mdash; önce dönüştürün ki
      &ldquo;caf&eacute;&rdquo; &ldquo;caf&rdquo; değil, &ldquo;cafe&rdquo;
      olsun. İşin püf noktası: NFD'ye (ayrıştırılmış biçim) normalleştirin,
      ardından birleştirme işaretlerini temizleyin, ardından hâlâ ASCII
      olmayan her şeyi temizleyin.
    </p>
    <pre>{`function toAscii(s) {
  return s
    .normalize("NFD")
    .replace(/\\p{M}/gu, "")       // birleştirme işaretlerini temizle
    .replace(/[^\\x00-\\x7F]/g, ""); // kalan ASCII olmayanları at
}

toAscii("caf\\u00e9")        // "cafe"
toAscii("na\\u00efve")       // "naive"
toAscii("r\\u00e9sum\\u00e9") // "resume"`}</pre>
    <p>
      Bu, aksanlı Latin harflerini harika bir şekilde işler. Latin
      olmayan alfabeleri dönüştüremez &mdash; Kiril, Yunan veya Çin-Japon-Kore
      için özel bir kütüphaneye ihtiyacınız vardır.
    </p>

    <h2>URL uyumlu çıktı</h2>
    <p>
      URL'ler dar bir karakter setine izin verir. Standart kalıp:
    </p>
    <pre>{`function toSlug(s) {
  return s
    .normalize("NFD")
    .replace(/\\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

toSlug("Hello, World!")       // "hello-world"
toSlug("caf\\u00e9 &amp; bar")   // "cafe-bar"`}</pre>

    <h2>Boşlukları koru ama noktalama işaretlerini temizle</h2>
    <p>
      Metni tokenizasyon veya arama indeksleme için hazırlarken yaygındır:
    </p>
    <pre>{`str.replace(/[^\\p{L}\\p{N}\\s]/gu, "")
   .replace(/\\s+/g, " ")
   .trim()`}</pre>
    <p>
      Noktalama işaretlerini kaldırır ancak kelime sınırlarını korur.
    </p>

    <h2>Dosya adı temizleme</h2>
    <p>
      En katı işletim sistemi Windows'tur. Güvenli dosya adı regex'i:
    </p>
    <pre>{`function sanitizeFilename(name) {
  return name
    .replace(/[\\/\\\\:*?"&lt;&gt;|]/g, "_")
    .replace(/\\s+/g, " ")
    .trim()
    .slice(0, 200);              // uzantı için yer bırak
}`}</pre>
    <p>
      Ayrıca Windows'ta ayrılmış adları kontrol edin: <code>CON</code>,
      <code>PRN</code>, <code>AUX</code>, <code>NUL</code>,
      <code>COM1</code>&ndash;<code>COM9</code>, <code>LPT1</code>&ndash;<code>LPT9</code>.
      Bunlar ne uzantılı ne de uzantısız dosya adı olarak kullanılamaz.
    </p>

    <h2>Kontrol karakterlerini temizleme</h2>
    <p>
      Kontrol karakterleri (U+0000&ndash;U+001F ve U+007F) görüntüleme,
      günlükler ve veritabanlarında kaosa neden olur. Özellikle
      <code>\t</code>, <code>\n</code>, <code>\r</code>'ye ihtiyacınız
      yoksa evrensel olarak temizleyin:
    </p>
    <pre>{`str.replace(/[\\x00-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]/g, "")`}</pre>

    <h2>Tırnak işaretlerini ve kesme işaretlerini koruma</h2>
    <p>
      &ldquo;Akıllı&rdquo; tırnaklar (U+2018, U+2019, U+201C, U+201D) ile
      düz tırnaklar (U+0027, U+0022) sık sık baş ağrısı yapar. Birini
      seçin ve normalleştirin:
    </p>
    <pre>{`str
  .replace(/[\\u2018\\u2019\\u201A\\u201B]/g, "'")
  .replace(/[\\u201C\\u201D\\u201E\\u201F]/g, "\\"");`}</pre>

    <h2>Unicode ile kategori bazlı temizleme</h2>
    <p>
      Regex Unicode kategorileri, kod noktasına göre değil, anlama göre
      temizlemenizi sağlar:
    </p>
    <ul>
      <li><code>{`\\p{L}`}</code> &mdash; harfler</li>
      <li><code>{`\\p{N}`}</code> &mdash; sayılar</li>
      <li><code>{`\\p{P}`}</code> &mdash; noktalama işaretleri</li>
      <li><code>{`\\p{S}`}</code> &mdash; semboller (matematik, para birimi vb.)</li>
      <li><code>{`\\p{M}`}</code> &mdash; işaretler (birleştirme aksanları)</li>
      <li><code>{`\\p{C}`}</code> &mdash; kontrol ve biçim karakterleri</li>
      <li><code>{`\\p{Z}`}</code> &mdash; ayırıcılar (boşluklar)</li>
    </ul>
    <pre>{`// Yalnızca noktalama ve sembolleri temizle
str.replace(/[\\p{P}\\p{S}]/gu, "")`}</pre>

    <h2>Filtrenizi test etme</h2>
    <p>
      Her zaman bir işkence testi dizesi üzerinde çalıştırın:
    </p>
    <pre>{`const test = "Caf\\u00e9 \\u2014 'Na\\u00efve' &lt;3 &#x1F600; \\u0000\\u200B";
console.log(filter(test));`}</pre>
    <p>
      Çıktıyı akıllı tırnaklar, birleştirme işaretleri, emoji,
      sıfır genişlikli boşluk ve kontrol karakterleri açısından
      kontrol edin. Herhangi biri geçtiyse, izin verme listenizi
      sıkılaştırın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Unicode bayrağı olmadan <code>[^a-zA-Z0-9]</code> kullanmak ve
      ASCII olmayan tüm harfleri yok etmek. Önce NFD'ye normalleştirmeden
      birleştirme işaretlerini temizlemek, böylece &ldquo;caf&eacute;&rdquo;
      (tek kod noktası) bozulmadan kalırken &ldquo;cafe + birleştirme
      vurgusu&rdquo; &ldquo;cafe&rdquo; olur &mdash; girdiler arasında
      tutarsız sonuçlar. Sıfır genişlikli karakterlerin varlığını
      unutmak. Gelecek hafta birinin yapıştırabileceği bir karakter
      sınıfını kaçıran bir yasaklama listesi yazmak.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      <a href="/tools/special-character-remover">Özel karakter temizleyici</a>
      <a href="/tools/unicode-text-normalizer">Unicode metin normalleştirici</a>
      <a href="/tools/slug-generator">Slug oluşturucu</a>
    </p>
  </>
);