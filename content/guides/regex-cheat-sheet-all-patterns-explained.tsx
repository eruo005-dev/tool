export const intro = (
  <>
    <p>
      Kapsamlı bir regex referansı: her operatör, lehçeler arasındaki farklar
      (ECMAScript, PCRE, Python, Go RE2) ve gerçek dünyadaki eşleştirme görevlerinin
      ~%95'ini kapsayan 30 desen. Her desen, girdi, çıktı ve bir lehçe uyumluluk
      notu ile gösterilmiştir. Bunu çalışan bir referans olarak kullanın &mdash; yer imi ekleyin,
      ihtiyacınız olanı sayfa içinde arayın, kopyalayın ve uyarlayın.
    </p>
    <p>
      Çoğu regex eğitimi sözdizimini gereğinden fazla açıklar ve sizi üretimde zorlayan
      motor farklılıklarını yetersiz açıklar. Bu kılavuz tam tersini yapar: kısa sözdizimi
      özeti, uzun desen kütüphanesi ve açık lehçe uyarıları.
    </p>
  </>
);

export const toc = [
  { id: "core-syntax", label: "Temel sözdizimi özeti" },
  { id: "anchors", label: "Çıpalar ve sınırlar" },
  { id: "quantifiers", label: "Niceleyiciler (açgözlü, tembel, sahiplenici)" },
  { id: "character-classes", label: "Karakter sınıfları ve kısayollar" },
  { id: "groups", label: "Gruplar, yakalamalar, geri başvurular" },
  { id: "lookaround", label: "İleriye ve geriye bakma" },
  { id: "flavors", label: "Motor farklılıkları (ECMAScript, PCRE, Python, Go)" },
  { id: "patterns-validation", label: "Yaygın desenler: doğrulama" },
  { id: "patterns-extraction", label: "Yaygın desenler: çıkarma" },
  { id: "patterns-replacement", label: "Yaygın desenler: değiştirme" },
  { id: "redos", label: "Felaket geri izleme ve ReDoS" },
  { id: "performance", label: "Performans ipuçları" },
  { id: "antipatterns", label: "Bunları yapmayın" },
];

export const body = (
  <>
    <h2 id="core-syntax">Temel sözdizimi özeti (90 saniyede)</h2>
    <ul>
      <li><code>.</code> &mdash; yeni satır hariç herhangi bir karakter (noktanın yeni satırları da eşleştirdiği &ldquo;dotall&rdquo; modu için <code>s</code> bayrağını kullanın).</li>
      <li><code>\d</code> &mdash; rakam. Çoğu lehçede <code>[0-9]</code> ile eşdeğerdir. Python'da Unicode duyarlı, ECMAScript'te <code>u</code> bayrağı ile.</li>
      <li><code>\w</code> &mdash; kelime karakteri. Çoğu lehçede <code>[a-zA-Z0-9_]</code>.</li>
      <li><code>\s</code> &mdash; boşluk (boşluk, sekme, yeni satır vb.).</li>
      <li><code>\D \W \S</code> &mdash; büyük harf = olumsuzlanmış.</li>
      <li><code>[abc]</code> &mdash; karakter sınıfı: a, b veya c. <code>[a-z]</code> &mdash; aralık. <code>[^abc]</code> &mdash; olumsuzlama.</li>
      <li><code>|</code> &mdash; seçenek: <code>cat|dog</code> kedi VEYA köpeği eşleştirir.</li>
      <li><code>?</code> &mdash; 0 veya 1 tekrar. <code>*</code> &mdash; 0 veya daha fazla. <code>+</code> &mdash; 1 veya daha fazla.</li>
      <li><code>{`{n}`}</code> &mdash; tam olarak n. <code>{`{n,}`}</code> &mdash; n veya daha fazla. <code>{`{n,m}`}</code> &mdash; n ile m arasında.</li>
    </ul>

    <h2 id="anchors">Çıpalar ve sınırlar</h2>
    <ul>
      <li><code>^</code> &mdash; dize başlangıcı. <code>m</code> bayrağı ile satır başlangıcı.</li>
      <li><code>$</code> &mdash; dize sonu. <code>m</code> bayrağı ile satır sonu.</li>
      <li><code>\b</code> &mdash; kelime sınırı (<code>\w</code> ve <code>\W</code> arasında). <code>\bcat\b</code> &ldquo;cat&rdquo; ile eşleşir ancak &ldquo;catalog&rdquo; ile eşleşmez.</li>
      <li><code>\B</code> &mdash; kelime olmayan sınır. <code>\Bcat\B</code> &ldquo;concatenate&rdquo; ile eşleşir ancak &ldquo;cat box&rdquo; ile eşleşmez.</li>
      <li><code>\A</code> &mdash; dizenin mutlak başlangıcı (Python, PCRE). ECMAScript'te yoktur.</li>
      <li><code>\Z</code> / <code>\z</code> &mdash; dizenin mutlak sonu (Python, PCRE). ECMAScript'te yoktur.</li>
    </ul>
    <p>
      <strong>En yaygın tuzak</strong>: <code>^</code> ve <code>$</code> varsayılan olarak
      dize başlangıcı/sonudur, satır başlangıcı/sonu değil. Satır satır eşleştirmek için çok satırlı
      <code> m</code> bayrağını ekleyin: <code>/^foo$/m</code>.
    </p>

    <h2 id="quantifiers">Niceleyiciler: açgözlü vs tembel vs sahiplenici</h2>
    <p>
      Modern regex motorlarında üç niceleyici stratejisi (tüm lehçeler üçünü de
      desteklemez):
    </p>
    <ul>
      <li>
        <strong>Açgözlü (varsayılan)</strong>: mümkün olduğunca fazla eşleştir, sonra geri adım at.
        <code>.*</code> &ldquo;abc&rdquo; üzerinde &ldquo;abc&rdquo; ile eşleşir.
      </li>
      <li>
        <strong>Tembel / isteksiz</strong>: <code>.*?</code>, <code>.+?</code>. Mümkün olduğunca az
        eşleştir. &ldquo;Sınırlayıcılar arasında eşleştir&rdquo; desenleri için kullanışlıdır.
      </li>
      <li>
        <strong>Sahiplenici</strong>: <code>.*+</code>, <code>.++</code>. Açgözlü gibi ancak
        asla geri vermez. Eşleşme yoksa hızlı başarısız olur. PCRE, Java, Ruby'de mevcuttur;
        ECMAScript veya Python'da YOKTUR.
      </li>
    </ul>
    <p>
      <code>&lt;b&gt;hello&lt;/b&gt; &lt;b&gt;world&lt;/b&gt;</code> üzerinde çalışılmış örnek:
    </p>
    <ul>
      <li>Açgözlü <code>&lt;b&gt;.*&lt;/b&gt;</code> &rarr; tüm dizeyi eşleştirir (tek bir büyük eşleşme).</li>
      <li>Tembel <code>&lt;b&gt;.*?&lt;/b&gt;</code> &rarr; her <code>&lt;b&gt;...&lt;/b&gt;</code> öğesini ayrı ayrı eşleştirir.</li>
    </ul>

    <h2 id="character-classes">Karakter sınıfları ve kısayollar</h2>
    <ul>
      <li><code>[abc]</code> &mdash; a, b veya c'den biri.</li>
      <li><code>[a-zA-Z0-9]</code> &mdash; alfanümerik ASCII.</li>
      <li><code>[^abc]</code> &mdash; a, b veya c DEĞİL (bir karakter).</li>
      <li><code>[\d.-]</code> &mdash; rakam, nokta veya tire. <code>[]</code> içinde çoğu meta karakter özel anlamını kaybeder. <code>-</code> gerçek anlamı için başta/sonda olur.</li>
      <li><code>\p{`{Letter}`}</code> &mdash; Unicode özellik sınıfı: herhangi bir harf (Yunanca, Kiril vb.). ECMAScript'te <code>u</code> bayrağı gerektirir.</li>
      <li><code>\p{`{Number}`}</code> &mdash; herhangi bir Unicode rakamı (Arapça, Devanagari vb.).</li>
    </ul>

    <h2 id="groups">Gruplar, yakalamalar, geri başvurular</h2>
    <ul>
      <li><code>(abc)</code> &mdash; yakalayan grup. Değiştirmede <code>$1</code>, kodda <code>match[1]</code> olarak erişilebilir.</li>
      <li><code>(?:abc)</code> &mdash; yakalamayan grup. Aynı gruplama davranışı, yakalama yükü yok.</li>
      <li><code>(?&lt;name&gt;abc)</code> &mdash; adlandırılmış yakalama. <code>match.groups.name</code> olarak erişilebilir.</li>
      <li><code>\1 \2 ...</code> &mdash; yakalanan gruba geri başvuru. <code>(a)\1</code> &ldquo;aa&rdquo; ile eşleşir.</li>
      <li><code>\k&lt;name&gt;</code> &mdash; ada göre geri başvuru.</li>
    </ul>
    <p>
      Çalışılmış örnek: e-postadan kullanıcı ve alan adı çıkarma. Desen:{" "}
      <code>(?&lt;user&gt;\w+)@(?&lt;domain&gt;[\w.-]+)</code>. &ldquo;hello@example.com&rdquo;
      üzerinde:
      <code>match.groups.user === &quot;hello&quot;</code>,{" "}
      <code>match.groups.domain === &quot;example.com&quot;</code>.
    </p>

    <h2 id="lookaround">İleriye ve geriye bakma</h2>
    <p>
      Sıfır genişlikli iddialar: bir konumun belirli bir bağlama sahip olup olmadığını kontrol ederler, ancak
      karakter tüketmezler.
    </p>
    <ul>
      <li><code>(?=...)</code> &mdash; olumlu ileriye bakma. <code>foo(?=bar)</code> &ldquo;foo&rdquo; yalnızca ardından &ldquo;bar&rdquo; geliyorsa eşleşir.</li>
      <li><code>(?!...)</code> &mdash; olumsuz ileriye bakma. <code>foo(?!bar)</code> &ldquo;foo&rdquo; ardından &ldquo;bar&rdquo; gelmiyorsa eşleşir.</li>
      <li><code>(?&lt;=...)</code> &mdash; olumlu geriye bakma. <code>(?&lt;=foo)bar</code> &ldquo;bar&rdquo; öncesinde &ldquo;foo&rdquo; varsa eşleşir.</li>
      <li><code>(?&lt;!...)</code> &mdash; olumsuz geriye bakma. <code>(?&lt;!foo)bar</code> &ldquo;bar&rdquo; öncesinde &ldquo;foo&rdquo; YOKSA eşleşir.</li>
    </ul>
    <p>
      <strong>Lehçe desteği</strong>: Python <code>re</code> sabit genişlikli
      geriye bakma gerektirir; <code>regex</code> modülü değişken genişliği destekler. ECMAScript
      ES2018 itibarıyla her ikisini de destekler. Go RE2'de hiçbir ileriye/geriye bakma yoktur (doğrusal zaman garantisi).
    </p>

    <h2 id="flavors">Motor farklılıkları (ECMAScript, PCRE, Python, Go)</h2>
    <table>
      <thead>
        <tr>
          <th>Özellik</th>
          <th>ECMAScript</th>
          <th>PCRE / Perl</th>
          <th>Python re</th>
          <th>Go RE2</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Geriye bakma</td><td>ES2018+ (herhangi bir genişlik)</td><td>Evet (herhangi)</td><td>Yalnızca sabit genişlik</td><td>HAYIR</td></tr>
        <tr><td>Sahiplenici niceleyiciler</td><td>HAYIR</td><td>Evet</td><td>HAYIR</td><td>HAYIR</td></tr>
        <tr><td>Özyineleme / alt yordamlar</td><td>HAYIR</td><td>Evet</td><td>HAYIR</td><td>HAYIR</td></tr>
        <tr><td>Adlandırılmış gruplar</td><td><code>(?&lt;name&gt;)</code></td><td><code>(?P&lt;name&gt;)</code> veya <code>(?&lt;name&gt;)</code></td><td><code>(?P&lt;name&gt;)</code></td><td><code>(?P&lt;name&gt;)</code></td></tr>
        <tr><td>Geri izleme</td><td>Evet</td><td>Evet</td><td>Evet</td><td>HAYIR (doğrusal zaman)</td></tr>
        <tr><td>Unicode özellik sınıfları</td><td><code>u</code> bayrağı ile</td><td>Evet</td><td>Evet</td><td>Evet</td></tr>
      </tbody>
    </table>
    <p>
      <strong>Pratik çıkarım</strong>: regex101.com'un PCRE modunda çalışan bir desen,
      JavaScript kodunuzda başarısız olabilir. Her zaman dağıtacağınız motorda test edin.
      <a href="/tools/regex-tester">Tarayıcı regex test aracı</a>, üretim kodunuzla tam olarak aynı
      ECMAScript'i kullanır.
    </p>

    <h2 id="patterns-validation">Yaygın desenler: doğrulama</h2>
    <p>Aksi belirtilmedikçe her desen ECMAScript lehçesindedir. Gerektiği gibi çevirin.</p>

    <h3>E-posta (pragmatik)</h3>
    <pre>{`/^[\\w.+-]+@[\\w-]+\\.[\\w.-]+$/`}</pre>
    <p>
      RFC 5321'i eşleştirmeye çalışmayın &mdash; tam spesifikasyon regex'i 6.425 karakterdir.
      Yukarıdaki, gerçek e-postaların ~%99,9'unu kabul eder ve çoğu geçersiz girdiyi reddeder.
      Kurşun geçirmez doğrulama için bunun yerine bir onay e-postası gönderin.
    </p>

    <h3>URL (HTTP/HTTPS)</h3>
    <pre>{`/^https?:\\/\\/[\\w.-]+(?::\\d+)?(?:\\/[^\\s]*)?$/`}</pre>

    <h3>ABD telefon numarası</h3>
    <pre>{`/^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/`}</pre>
    <p>Eşleşir: (415) 555-1234, 415-555-1234, 415.555.1234, 4155551234.</p>

    <h3>IPv4 adresi</h3>
    <pre>{`/^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$/`}</pre>

    <h3>Güçlü parola (8+ karakter, büyük-küçük harf, rakam, özel)</h3>
    <pre>{`/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{8,}$/`}</pre>
    <p>
      Daha iyi yaklaşım: kompozisyon kurallarını tamamen atlayın, uzunluk 12+ gerektirin ve
      ihlal veritabanlarına (HIBP) karşı kontrol edin. Modern güvenlik yönergeleri
      kompozisyon gereksinimlerinden uzaklaşmıştır.
    </p>

    <h3>ISO 8601 tarihi (YYYY-AA-GG)</h3>
    <pre>{`/^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/`}</pre>

    <h3>Hex rengi</h3>
    <pre>{`/^#?(?:[0-9a-f]{3}|[0-9a-f]{6})$/i`}</pre>

    <h3>Slug (URL güvenli tanımlayıcı)</h3>
    <pre>{`/^[a-z0-9]+(?:-[a-z0-9]+)*$/`}</pre>

    <h2 id="patterns-extraction">Yaygın desenler: çıkarma</h2>

    <h3>Sınırlayıcılar arasında eşleştir (tembel)</h3>
    <pre>{`/<title>(.*?)<\\/title>/`}</pre>
    <p>
      Uyarı: en basit durumların ötesinde HTML'yi regex ile ayrıştırmayın.
      Bunun yerine <code>DOMParser</code> kullanın.
    </p>

    <h3>Bir dizedeki tüm sayılar</h3>
    <pre>{`/-?\\d+(?:\\.\\d+)?/g`}</pre>

    <h3>Tırnak içindeki dizeler (kaçışlı tırnakları işler)</h3>
    <pre>{`/"((?:[^"\\\\]|\\\\.)*)"/g`}</pre>

    <h3>Bir tweet'teki hashtag'ler</h3>
    <pre>{`/#[\\w_]+/g`}</pre>

    <h3>Markdown bağlantısı</h3>
    <pre>{`/\\[([^\\]]+)\\]\\(([^)]+)\\)/g`}</pre>
    <p>Yakalar: $1 = bağlantı metni, $2 = URL.</p>

    <h3>CSV satırı (basit, gömülü virgül yok)</h3>
    <pre>{`/[^,\\n]+/g`}</pre>
    <p>Gerçek CSV için tırnak içindeki alanlar ve gömülü virgüllerle bir CSV ayrıştırıcı kütüphanesi kullanın.</p>

    <h2 id="patterns-replacement">Yaygın desenler: değiştirme</h2>

    <h3>HTML etiketlerini kaldır</h3>
    <pre>{`text.replace(/<[^>]+>/g, '')`}</pre>

    <h3>Birden çok boşluğu daralt</h3>
    <pre>{`text.replace(/\\s+/g, ' ').trim()`}</pre>

    <h3>camelCase'i snake_case'e dönüştür</h3>
    <pre>{`text.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()`}</pre>

    <h3>E-posta ortasını maskele</h3>
    <pre>{`email.replace(/^(.{2}).*?(@.*)$/, '$1***$2')`}</pre>
    <p>Çıktı: <code>he***@example.com</code></p>

    <h3>Telefonu E.164'e dönüştür</h3>
    <pre>{`text.replace(/[^\\d]/g, '').replace(/^/, '+1')`}</pre>

    <h2 id="redos">Felaket geri izleme ve ReDoS</h2>
    <p>
      Düzenli İfade Hizmet Reddi (ReDoS) gerçek bir saldırı sınıfıdır. Güvenlik açığı olan
      desenler, düşmanca girdilerde üstel yollar üreten iç içe niceleyicilere sahiptir. Klasik örnek:
    </p>
    <pre>{`/^(a+)+$/`}</pre>
    <p>
      &ldquo;aaaaaaaaaaaaaaaaaaa!&rdquo; (eşleşen <code>$</code> yok) girdisinde, regex
      motoru iç ve dış niceleyici arasındaki <code>a</code> karakterlerinin olası her
      bölünmesini dener. Süre 2^n olarak büyür. 30 a = 1 milyar yol = 30+ saniyelik
      donma.
    </p>
    <p>
      Denetlenecek yaygın ReDoS desenleri:
    </p>
    <ul>
      <li><code>(a+)+</code>, <code>(a*)*</code> &mdash; örtüşen sınıflarda iç içe niceleyiciler.</li>
      <li><code>(a|aa)+</code> &mdash; örtüşmeli seçenek.</li>
      <li>
        E-posta regex'i <code>^([a-zA-Z0-9._-]+)+@</code> &mdash; izin verici iç
        niceleyici ile iç içe grup.
      </li>
    </ul>
    <p>
      <strong>Savunmalar</strong>: (1) Güvenilmeyen girdiler için Go RE2 veya RE2 uyumlu motorlar (Cloudflare,
      Google'ın açık kaynak RE2 kütüphanesi) kullanın &mdash; doğrusal zaman
      garantisi. (2) Kullanıcı tarafından sağlanan desenleri çalıştırırken zaman aşımları ekleyin. (3) Riskli desenleri işaretlemek için statik analiz araçları (rxxr2, safe-regex) kullanın. (4) İç içe
      niceleyicilerden kaçının; desteklenen yerlerde atomik grupları <code>(?&gt;...)</code> veya sahiplenici
      niceleyicileri tercih edin.
    </p>

    <h2 id="performance">Performans ipuçları</h2>
    <ul>
      <li>
        <strong>Desenlerinizi çıpalayın</strong>: <code>^abc</code>, eşleşmelerin 0. konumda başladığı
        uzun girdilerde <code>abc</code>'den önemli ölçüde daha hızlıdır.
      </li>
      <li>
        <strong>Seçenek yerine karakter sınıflarını tercih edin</strong>: <code>[abc]</code>,
        <code>a|b|c</code>'den daha hızlıdır.
      </li>
      <li>
        <strong>Bir kez derleyin, birçok kez yeniden kullanın</strong>: Python'da <code>re.compile()</code>{" "}
        ve Java'da <code>Pattern.compile()</code> ile derlenmiş deseni sıcak döngüler için kaydedin.
        ECMAScript motorları regex değişmezlerini otomatik olarak önbelleğe alır.
      </li>
      <li>
        <strong>Yakalamayan gruplar kullanın</strong> <code>(?:...)</code>{" "}
        yakalamaya ihtiyacınız olmadığında &mdash; bellekten tasarruf sağlar.
      </li>
      <li>
        <strong>Optimize etmeden önce profil oluşturun</strong>: çoğu regex performans sorunu
        felaket geri izlemedir, mikro optimizasyon değil. Bir regex profil oluşturucu kullanın.
      </li>
    </ul>

    <h2 id="antipatterns">Bunları yapmayın</h2>
    <ul>
      <li>
        <strong>HTML'yi regex ile ayrıştırmayın.</strong> HTML özyinelemelidir; regex değildir.
        <code>DOMParser</code>, BeautifulSoup, jsoup veya html.parser kullanın.
      </li>
      <li>
        <strong>JSON'u regex ile ayrıştırmayın.</strong> <code>JSON.parse</code> veya
        dilinizin eşdeğerini kullanın.
      </li>
      <li>
        <strong>RFC 5321 e-postalarını tek bir regex ile eşleştirmeyin.</strong> Uygun regex 6.425
        karakterdir; kimse gerçekten kullanmaz. Pragmatik bir desenle biçimi doğrulayın, ardından
        bir onay e-postası gönderin.
      </li>
      <li>
        <strong>SQL tanımlayıcılarını izin verici regex ile doğrulamayın.</strong> Parametreli
        sorgular kullanın; SQL enjeksiyon önlemini kendiniz yapmayın.
      </li>
      <li>
        <strong>Dengeli sınırlayıcıları regex ile eşleştirmeyin.</strong> Özyineleme gereklidir;
        çoğu regex motoru bunu desteklemez. Yığın tabanlı bir ayrıştırıcı kullanın.
      </li>
      <li>
        <strong>Kullanıcı tarafından sağlanan regex'e zaman aşımı olmadan güvenmeyin.</strong> ReDoS işleminizi
        donduracaktır.
      </li>
    </ul>

    <h2>80/20 çıkarımı</h2>
    <p>
      6 şeyde ustalaşın ve gerçek dünyadaki regex görevlerinin ~%95'ini halledebilirsiniz: karakter
      sınıfları, niceleyiciler (açgözlü ve tembel), çıpalar, yakalama grupları, seçenek,
      geri başvurular. Geri kalanı (ileriye/geriye bakma, sahiplenici niceleyiciler, atomik gruplar) durumsaldır.
      Dağıtacağınız tam motorda test edin ({" "}
      <a href="/tools/regex-tester">regex test aracı</a> ECMAScript kullanır). Güvenilmeyen girdiyi işleyen herhangi bir
      deseni ReDoS için denetleyin. Ve her zaman regex'in doğru şekilde işleyemediği durumlar için
      hazır bir regex dışı yedek planınız olsun &mdash; HTML ayrıştırıcıları, JSON ayrıştırıcıları, gerçek CSV
      kütüphaneleri &mdash;.
    </p>
  </>
);

export const cta = {
  label: "Regex desenlerini tarayıcı tabanlı regex test aracında anında test edin",
  targetSlug: "regex-tester",
};

export const faq = [
  {
    q: "Regex lehçeleri arasındaki fark nedir?",
    a: "Başlıca motorlar: ECMAScript (tarayıcılar, Node.js), PCRE (PHP, Perl), Python re, Go RE2, Java'nın java.util.regex, Ruby. Farklılıklar arasında geriye bakma desteği (Go RE2'de yok), özyineleme (yalnızca PCRE/Perl), Unicode işleme, sahiplenici niceleyiciler (yalnızca PCRE/Java/Ruby) bulunur. Aynı desen bir lehçede eşleşebilir ve diğerinde başarısız olabilir. Her zaman dağıtacağınız tam motorda test edin.",
  },
  {
    q: "Regex desenim neden takılıyor veya zaman aşımına uğruyor?",
    a: "Büyük olasılıkla felaket geri izleme — bir ReDoS deseni. Yaygın suçlular: (a+)+ gibi iç içe niceleyiciler, (a|aa)+ gibi örtüşmeli seçenek, ([a-z]+)+ gibi izin verici iç içe gruplar. Süre, girdi uzunluğuyla üstel olarak artar. Savunmalar: (1) iç içe niceleyicileri kaldırmak için deseni yeniden yazın, (2) güvenilmeyen girdiler için Go RE2 veya RE2 uyumlu motorlar kullanın (doğrusal zaman garantili), (3) yürütme zaman aşımları ekleyin, (4) riskli desenleri işaretlemek için safe-regex gibi statik analizörler çalıştırın.",
  },
  {
    q: "E-postalar için regex'i nasıl doğru yazabilirim?",
    a: "RFC 5321 mükemmelliği için uğraşmayın — kanonik regex 6.425 karakterdir. Gerçek e-postaların ~%99,9'unu yakalayan ve çoğu geçersiz girdiyi reddeden /^[\\w.+-]+@[\\w-]+\\.[\\w.-]+$/ gibi pragmatik bir desen kullanın. Yüksek riskli doğrulama (kayıt formları) için: önce yazım hatalarını filtrelemek için pragmatik regex, ardından bir onay e-postası gönderin — yalnızca gelen kutusu sahibi bağlantıya tıklayabilir, bu da hem sözdizimsel hem de teslim edilebilir geçerliliği kanıtlar. Doğrulama regex'ini teslim edilebilirlik kontrolleriyle birleştirmeyin; endişeleri ayırın.",
  },
];