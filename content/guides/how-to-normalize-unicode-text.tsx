import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Unicode, aynı görünen metnin birden çok şekilde kodlanmasına izin verir.
      &ldquo;&eacute;&rdquo; harfi bir kod noktası (U+00E9) veya iki
      (U+0065 + U+0301) olabilir ve her ikisi de aynı şekilde görüntülenir. İki
      dizgiyi karşılaştırdığınızda, bir veritabanında indekslediğinizde, önbellek anahtarı olarak kullandığınızda veya
      üzerlerinde bir regex çalıştırdığınızda, bu eşdeğer-ancak-farklı kodlamalar
      sessizce ayrışır. Unicode normalizasyonu, iki
      &ldquo;eşit&rdquo; dizginin gerçekten eşit karşılaştırılması için kurallı bir formu zorlar. Bu kılavuz
      dört normalizasyon formunu (NFC, NFD, NFKC, NFKD), her birini ne zaman
      kullanacağınızı, homoglif saldırılarının güvenlik etkilerini ve tutarlı
      normalizasyona bağlı olan veritabanı ve arama indeksi kalıplarını
      kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Normalizasyon neden var</h2>
    <p>
      Unicode, aksanlı karakterleri iki uyumlu şekilde ekledi. Eski
      önceden oluşturulmuş (tek kod noktası) ve birleştirici (harf artı
      değiştirici). Her ikisi de aynı şekilde görüntülenir. Hiçbiri &ldquo;yanlış&rdquo; değildir.
      Ancak bunları karşılaştırmak normalizasyon gerektirir.
    </p>
    <pre>{`"caf\\u00e9"         // 4 kod noktası (önceden oluşturulmuş)
"cafe\\u0301"        // 5 kod noktası (ayrıştırılmış)

uzunluk:             4          5
===:                 false
normalize'den sonra:     her ikisi de "caf\\u00e9" olur`}</pre>

    <h2>Dört form</h2>
    <ul>
      <li>
        <strong>NFC</strong> &mdash; Kurallı Birleştirme. Ayrıştırılmış
        karakterleri önceden oluşturulmuş formda birleştirir. Genellikle istediğiniz
        şey budur.
      </li>
      <li>
        <strong>NFD</strong> &mdash; Kurallı Ayrıştırma. Önceden oluşturulmuş
        karakterleri taban + birleştirici işaretlerine ayırır. Aksanları
        kaldırmak için kullanışlıdır.
      </li>
      <li>
        <strong>NFKC</strong> &mdash; Uyumluluk Birleştirmesi. NFC
        artı uyumluluk değiştirmeleri (örneğin, tam genişlikten yarım genişliğe,
        bitişik harflerden bireysel harflere).
      </li>
      <li>
        <strong>NFKD</strong> &mdash; Uyumluluk Ayrıştırması.
        NFD artı uyumluluk eşlemesi.
      </li>
    </ul>

    <h2>NFC: depolama ve karşılaştırma için varsayılan</h2>
    <p>
      NFC en kısa, en yaygın formu üretir. Web'in çoğu metni
      NFC'de saklar. &ldquo;Aynı kullanıcı tarafından algılanan
      dizi mi&rdquo; testleri için NFC ile karşılaştırın.
    </p>
    <pre>{`a.normalize("NFC") === b.normalize("NFC")`}</pre>

    <h2>NFD: aksanları kaldırmak istediğinizde</h2>
    <p>
      Ayrıştırılmış forma normalleştirin, ardından birleştirici işaretlerini kaldırın
      (<code>{`\\p{M}`}</code>). Diyakritik işaretler olmadan ASCII benzeri harfler
      elde edersiniz.
    </p>
    <pre>{`"caf\\u00e9".normalize("NFD").replace(/\\p{M}/gu, "")
// -&gt; "cafe"`}</pre>
    <p>
      Bu, slug oluşturma ve aksan duyarsız
      aramanın temelidir.
    </p>

    <h2>NFKC: kayıplı ama kullanışlı</h2>
    <p>
      NFKC, görsel varyantları &ldquo;düz&rdquo; formlarına daraltır:
    </p>
    <pre>{`"\\uFF21\\uFF22\\uFF23".normalize("NFKC")
// -&gt; "ABC" (tam genişlikten yarım genişliğe)

"\\uFB00".normalize("NFKC")
// -&gt; "ff" (bitişik harften harflere)

"\\u00B2".normalize("NFKC")
// -&gt; "2" (üst simgeden rakama)`}</pre>
    <p>
      Arama ve yineleme giderme için harika. Yazarın niyetini
      korumak için <em>harika değil</em> &mdash; bir belgenin tipografik
      bitişik harfleri ve üst simgeleri anlamlıdır.
    </p>

    <h2>NFKD: arama indeksi formu</h2>
    <p>
      NFKD, arama için agresif &ldquo;tek gerçek formdur&rdquo;:
      uyumluluk varyantlarını kaldırın ve ayrıştırın. Ardından tam aksan duyarsız
      indeksleme için birleştirici işaretlerini kaldırabilirsiniz.
    </p>
    <pre>{`function searchKey(s) {
  return s
    .normalize("NFKD")
    .replace(/\\p{M}/gu, "")
    .toLowerCase();
}`}</pre>

    <h2>Normalizasyonların anlaşmazlığa düştüğü durumlar</h2>
    <p>
      NFC ve NFD güvenli bir şekilde gidiş-dönüş yapar &mdash; NFC'yi NFD'ye, ardından tekrar
      NFC'ye dönüştürün, orijinali elde edersiniz. NFKC ve NFKD <strong>kayıplıdır</strong>.
      ff bitişik harfini içeren bir dizgiyi NFKC yaptıktan sonra,
      bitişik harfi &ldquo;ff&rdquo;den kurtaramazsınız.
    </p>

    <h2>Veritabanı anahtar normalizasyonu</h2>
    <p>
      DB'niz kullanıcı adları, e-posta adresleri veya kullanıcı tarafından yazılan
      herhangi bir şeyi birincil anahtar olarak saklıyorsa, eklemeden <em>ve</em>
      aramadan önce normalleştirin. Görüntüyü koruyan depolama için NFC'yi seçin; tam genişlik
      ve yarım genişliği eşdeğer olarak ele almak istiyorsanız NFKC'yi seçin.
    </p>
    <pre>{`INSERT INTO users (handle) VALUES (NFC(input));
SELECT * FROM users WHERE handle = NFC(lookup);`}</pre>
    <p>
      Postgres'te yerleşik <code>normalize()</code> vardır. MySQL ve SQLite
      uygulama düzeyinde normalizasyon gerektirir.
    </p>

    <h2>Homoglif saldırıları</h2>
    <p>
      Saldırganlar, farklı alfabelerden görsel olarak benzer karakterlerden yararlanır.
      Latin &ldquo;a&rdquo; (U+0061) ve Kiril
      &ldquo;&#1072;&rdquo; (U+0430) aynı görünür ancak farklı kod
      noktalarıdır. Normalizasyon bunları <em>daraltmaz</em>
      &mdash; bunlar farklı Unicode karakterlerdir. Savunmak için:
    </p>
    <ul>
      <li>Tanımlayıcıları tek bir alfabeyle sınırlayın (alan adları için Unicode IDN kuralları)</li>
      <li>Karışık alfabeli dizgileri işaretleyin veya engelleyin</li>
      <li>Unicode CLDR'den <code>confusables.txt</code> verilerini kullanın</li>
      <li>Parolalar ve kullanıcı adları için PRECIS profillerini (RFC 8264) uygulayın</li>
    </ul>

    <h2>Normalizasyon + büyük/küçük harf dönüşümü</h2>
    <p>
      Büyük/küçük harf duyarsız karşılaştırma, yalnızca
      <code>toLowerCase</code> değil, büyük/küçük harf dönüşümü gerektirir. Almanca &szlig; büyük harfte SS olur; Türkçe
      noktasız &#305; ve noktalı i, İngilizce'nin beklediği gibi eşlenmez.
    </p>
    <pre>{`// JS sınırlı dönüşüme sahiptir
str.normalize("NFC").toLowerCase();

// Intl.Collator yerel ayarı doğru şekilde işler
new Intl.Collator("tr", { sensitivity: "accent" })
  .compare(a, b) === 0`}</pre>

    <h2>Performans testi ve dosya boyutu</h2>
    <p>
      Normalizasyon, kısa dizgiler için ucuzdur (mikrosaniyeler). Büyük
      belgeler (kitaplar, derlemler) milisaniyelerle ölçülebilir.
      <a href="/learn/stream">Akış</a> hatları için, grafik sınırlarına hizalanmış
      parçalar halinde normalleştirin &mdash; birleştirici bir dizinin yarısını normalleştirmeyin.
    </p>

    <h2>Sistemler arasında gidiş-dönüş</h2>
    <p>
      Windows, macOS, Linux ve web uygulamaları arasında kopyalayın ve normalizasyon
      formu sessizce değişebilir. macOS, dosya sistemi için ünlü bir şekilde NFD kullanır,
      bu da diğer sistemlere kopyalanan dosya adlarının form değiştirdiği anlamına gelir. Her zaman sınırlarda normalleştirin: girişte, depolamada,
      çıkışta.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Dizgileri normalleştirmeden karşılaştırmak ve &ldquo;eşit&rdquo;
      dizgilerin neden eşleşmediğini merak etmek. Arşiv depolama için NFKC kullanmak
      ve tipografik bitişik harfleri kaybetmek. Büyük/küçük harf duyarsız karşılaştırma
      için <code>toLowerCase</code>'in yerel ayarlar arasında yeterli olduğunu varsaymak. Normalizasyonun homogliflere karşı
      savunduğunu düşünmek &mdash; savunmaz. Ve macOS'tan gelen dosya adlarının
      genellikle NFD iken veritabanınızın NFC sakladığını unutmak, imkansız görünen
      büyük/küçük harf benzeri uyumsuzluklara neden olur.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      <a href="/tools/unicode-text-normalizer">Unicode metin normalleştirici</a>
      <a href="/tools/invisible-character-detector">Görünmez karakter dedektörü</a>
      <a href="/tools/special-character-remover">Özel karakter kaldırıcı</a>
    </p>
  </>
);