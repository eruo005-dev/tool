import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Fazladan boşluk, metin işleme hatlarının sessiz çirkinliğidir. Sondaki
      boşluklar farkları bozar, boşluk dizileri hizalamayı mahveder, boşluklarla
      karışan sekmeler kodu bozar ve Word'den yapıştırılan bölünmez boşluklar
      normal boşluklarla aynı görünür ancak eşit olmayan karşılaştırmalara ve
      dize eşleştirmelerinin gizemli bir şekilde başarısız olmasına neden olur.
      &ldquo;Fazladan boşluğu kaldır&rdquo; işlemi, ne demek istediğinize bağlı
      olarak bir düzine farklı işlemdir: kırpma, dizileri daraltma, sekmeleri
      dönüştürme, görünmez varyantları temizleme veya hepsini normalleştirme.
      Bu kılavuz, her işlemi, gerçekten çalışan regex kalıplarını ve kod
      girintisi gibi, temizlemek istemediğiniz durumları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Boşluk olarak kabul edilenler</h2>
    <p>
      Sadece boşluk karakterinden daha fazlası. Unicode boşluk sınıfı
      şunları içerir:
    </p>
    <ul>
      <li>Normal boşluk (U+0020)</li>
      <li>Sekme (U+0009)</li>
      <li>Satır besleme, satır başı, form besleme, dikey sekme</li>
      <li>Bölünmez boşluk (U+00A0) &mdash; boşluk gibi görünür, öyle değildir</li>
      <li>En boşluk, em boşluk, ince boşluk, kıl boşluk (U+2000 ila U+200A)</li>
      <li>Sıfır genişlikli boşluk (U+200B) &mdash; teknik olarak Unicode'da boşluk değildir, ancak genellikle öyle işlem görür</li>
      <li>İdeografik boşluk (U+3000) &mdash; CJK'den tam genişlikli boşluk</li>
    </ul>

    <h2>Kırpma</h2>
    <p>
      Baştaki ve sondaki boşlukları kaldırın, ortadakini bırakın.
      Her dilde yerleşik bir işlev vardır. Regex ile:
    </p>
    <pre>{`str.replace(/^\\s+|\\s+$/g, "")

// Veya JS yerleşik işlevi
str.trim();        // her iki uç
str.trimStart();   // sadece baş
str.trimEnd();     // sadece son`}</pre>
    <p>
      JavaScript'in <code>trim</code> işlevi Unicode boşluk sınıfını
      kullanır, bu nedenle bölünmez boşluk ve egzotik Unicode
      boşluklarını da işler.
    </p>

    <h2>Boşluk dizilerini daraltma</h2>
    <p>
      Herhangi bir boşluk dizisini tek bir boşlukla değiştirin:
    </p>
    <pre>{`str.replace(/\\s+/g, " ")`}</pre>
    <p>
      Bu, sekmeleri, birden çok boşluğu ve içindeki satır sonlarını
      düzleştirir. Klasik &ldquo;bu karışıklığı temizle&rdquo; işlemi
      için kırpma ile birleştirin:
    </p>
    <pre>{`str.replace(/\\s+/g, " ").trim()`}</pre>

    <h2>Satır içi dizileri daraltırken satır yapısını koruma</h2>
    <p>
      Temiz satırlar istediğinizde ancak yine de <em>satırlar</em>
      istediğinizde:
    </p>
    <pre>{`str
  .split(/\\r\\n|\\r|\\n/)
  .map(l =&gt; l.replace(/[^\\S\\n]+/g, " ").trim())
  .join("\\n")`}</pre>
    <p>
      <code>[^\\S\\n]</code>, &ldquo;yeni satır olmayan boşluk&rdquo;
      anlamına gelir, klasik bir numara.
    </p>

    <h2>Bölünmez boşluklar</h2>
    <p>
      NBSP (U+00A0), kopyala-yapıştır iş akışlarının kötü karakteridir.
      Çoğu yazı tipinde bir boşlukla aynı görünür ancak:
    </p>
    <ul>
      <li><code>/ /</code> regex'iyle eşleşmez (yalnızca gerçek boşluğu eşleştirir)</li>
      <li>HTML işlemede satırları bölmez</li>
      <li>Basit <code>split(&rdquo; &rdquo;)</code> tokenizasyonunu bozar</li>
    </ul>
    <p>
      <code>/\\s/</code> ile <em>eşleşir</em>, bu nedenle daraltma
      regex'i onu şeffaf bir şekilde işler. NBSP'yi (tipografik nedenlerle)
      korumak ve yalnızca normal boşlukları daraltmak istiyorsanız, açık
      olun:
    </p>
    <pre>{`str.replace(/ +/g, " ")   // yalnızca ASCII boşluk
str.replace(/\\s+/g, " ")  // tüm boşluklar`}</pre>

    <h2>Sekmeden boşluğa dönüşüm</h2>
    <p>
      Sekmeler, düzenleyiciler arasında farklı görünür ve karışık
      girintili kodlarda hizalama kaosuna neden olur. N boşluğa
      dönüştürün:
    </p>
    <pre>{`str.replace(/\\t/g, "  ")   // 2 boşluk
str.replace(/\\t/g, "    ") // 4 boşluk`}</pre>
    <p>
      Sütun hizalaması (sekme genişletme) için sekme duraklarına
      ihtiyacınız vardır:
    </p>
    <pre>{`function expandTabs(str, tabSize = 4) {
  return str.split("\\n").map(line =&gt; {
    let out = "";
    for (const ch of line) {
      if (ch === "\\t") {
        const pad = tabSize - (out.length % tabSize);
        out += " ".repeat(pad);
      } else {
        out += ch;
      }
    }
    return out;
  }).join("\\n");
}`}</pre>

    <h2>Kod girintisini koruma</h2>
    <p>
      Baştaki boşluğu <strong>kesinlikle</strong> daraltmamanız gereken
      durum. Kod, girinti seviyelerinde anlam taşır (özellikle Python,
      ayrıca YAML, Makefile ve satır yapısını takip eden her şey).
      Sondaki boşluğu kırpın, dizileri yalnızca girinti olmayan
      <em>iç</em> bölgelerde daraltın:
    </p>
    <pre>{`str.split("\\n").map(line =&gt; {
  const indent = line.match(/^[ \\t]*/)[0];
  const rest = line.slice(indent.length).replace(/[ \\t]+/g, " ").trimEnd();
  return indent + rest;
}).join("\\n");`}</pre>

    <h2>Satır başına sondaki boşluk</h2>
    <p>
      En evrensel olarak güvenli temizlik: her satırdaki sondaki boşluğu
      temizleyin. Anlamı asla bozmaz, düzenleyici kalıntılarını temizler.
    </p>
    <pre>{`str.replace(/[ \\t]+$/gm, "")`}</pre>
    <p>
      <code>m</code> bayrağı, <code>$</code> işaretinin yalnızca dize
      sonunda değil, satır sonlarında da eşleşmesini sağlar.
    </p>

    <h2>Boş satır daraltma</h2>
    <p>
      İki veya daha fazla boş satır bir olur:
    </p>
    <pre>{`str.replace(/\\n{3,}/g, "\\n\\n")`}</pre>
    <p>
      Üç veya daha fazla yeni satır, iki veya daha fazla boş satır
      anlamına gelir (çünkü bir yeni satır bir satırın sonudur, boş
      satır değildir).
    </p>

    <h2>Tam normalleştirme hattı</h2>
    <pre>{`function cleanWhitespace(s) {
  return s
    .replace(/\\r\\n?/g, "\\n")         // satır sonlarını normalleştir
    .replace(/[ \\t]+$/gm, "")         // satır başına sondakini kırp
    .replace(/\\n{3,}/g, "\\n\\n")      // boş satırları daralt
    .split("\\n")
    .map(l =&gt; l.replace(/[ \\t]+/g, " ").trimStart() === ""
                ? ""
                : l)
    .join("\\n")
    .trim();
}`}</pre>

    <h2>Yaygın hatalar</h2>
    <p>
      Boşlukları eşleştirmek için <code>/ /</code> kullanmak ve NBSP'yi
      kaçırmak. Kodda baştaki boşluğu daraltmak. CSV alanlarından tüm
      boşlukları temizlemek ve isimlerdeki önemli boşlukları kaybetmek.
      Regex'ten önce satır sonlarını normalleştirmeyi unutmak ve CRLF
      dosyalarında eşleşmeleri kaçırmak. Ve Markdown gibi anlamlı boşluk
      dillerinde sondaki boşluğu temizlemek, burada iki sondaki boşluk
      = <code>&lt;br&gt;</code> anlamına gelir.
    </p>

    <h2>Sayıları çalıştır</h2>
    <p>
      <a href="/tools/whitespace-remover">Boşluk temizleyici</a>
      <a href="/tools/line-break-remover">Satır sonu temizleyici</a>
      <a href="/tools/special-character-remover">Özel karakter temizleyici</a>
    </p>
  </>
);