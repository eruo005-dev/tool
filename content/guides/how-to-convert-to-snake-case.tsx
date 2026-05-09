import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      snake_case, küçük harfli kelimelerin alt çizgi ile birleştirildiği
      bir adlandırma kuralıdır. Python fonksiyonları ve değişkenleri,
      Ruby metotları, veritabanı sütun adları, Rust yerel değişkenleri
      ve çoğu yapılandırma dosyası için varsayılan kuraldır. Diğer
      yazım stillerinden &mdash; PascalCase, camelCase, kebab-case,
      Boşluklu Başlık Biçimi &mdash; dönüşüm, kısaltmalara
      (HTMLParser &rarr; html_parser? veya h_t_m_l_parser?),
      tanımlayıcılara gömülü sayılara ve sabitler için kullanılan
      SCREAMING_SNAKE varyantına rastlayana kadar tek satırlık bir
      regex gibi görünür. Bu kılavuz, kurallara uygun dönüşüm
      kurallarını, her dil topluluğunun uç durumları nasıl ele aldığını
      ve tutarlı sonuçlar üreten regex kalıplarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Dört snake varyantı</h2>
    <ul>
      <li><strong>snake_case</strong> &mdash; standart küçük harf, isimler için</li>
      <li><strong>SCREAMING_SNAKE_CASE</strong> &mdash; büyük harf, sabitler için</li>
      <li><strong>Title_Snake_Case</strong> &mdash; nadir, bazen HTTP başlık stili</li>
      <li><strong>camel_Snake_Case</strong> &mdash; çok nadir, hibrit</li>
    </ul>

    <h2>camelCase ve PascalCase'den</h2>
    <p>
      Kurala uygun yöntem: küçük harften önce gelen her büyük harfin
      önüne bir alt çizgi ekleyin, ardından tamamını küçük harfe çevirin.
    </p>
    <pre>{`str.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase()

"camelCase"       -&gt; "camel_case"
"PascalCase"      -&gt; "pascal_case"
"getXMLParser"    -&gt; "get_xml_parser"  ??  (sonraki bölüme bakın)`}</pre>

    <h2>Kısaltma sorunu</h2>
    <p>
      &ldquo;HTMLParser&rdquo; tek bir kavramdır ancak arka arkaya üç
      büyük harf içerir. Basit regex bunu &ldquo;htmlparser&rdquo;
      (kelime ayrımını kaybeder) veya &ldquo;h_t_m_l_parser&rdquo; (çok
      agresif) haline getirir. Kurala uygun düzeltme, iki sınıra alt
      çizgi ekler:
    </p>
    <ul>
      <li>Küçük harf &rarr; büyük harf: &ldquo;a&rdquo; &rarr; &ldquo;A&rdquo;</li>
      <li>Büyük harf + büyük harf-sonra-küçük harf: &ldquo;AB&rdquo; + &ldquo;c&rdquo; ayrımında</li>
    </ul>
    <pre>{`function toSnake(s) {
  return s
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
    .toLowerCase();
}

toSnake("HTMLParser")      // "html_parser"
toSnake("getHTTPResponse") // "get_http_response"
toSnake("APIKey")          // "api_key"
toSnake("iOSVersion")      // "i_os_version"  (uç durum!)`}</pre>
    <p>
      &ldquo;iOSVersion&rdquo; örneği sınırı gösterir: &ldquo;iOS&rdquo;un
      tek bir kısaltma olduğunu sözlük olmadan bilmenin bir yolu yoktur.
      Çoğu kod tabanı, kaynakta <em>IOSVersion</em> veya
      <em>iOsVersion</em> yazarak bu durumu aşar.
    </p>

    <h2>kebab-case'den</h2>
    <p>
      Basit bir değiştirme:
    </p>
    <pre>{`str.replace(/-/g, "_").toLowerCase()

"my-variable-name" -&gt; "my_variable_name"`}</pre>

    <h2>Başlık Biçimi veya boşlukla ayrılmıştan</h2>
    <pre>{`str.replace(/\\s+/g, "_").toLowerCase()

"Get User Name" -&gt; "get_user_name"`}</pre>
    <p>
      Sağlamlık için önce noktalama işaretlerini kaldırın:
    </p>
    <pre>{`str
  .replace(/[^\\p{L}\\p{N}\\s]/gu, "")
  .replace(/\\s+/g, "_")
  .toLowerCase()`}</pre>

    <h2>Tanımlayıcılardaki sayılar</h2>
    <p>
      Dil toplulukları, harflerin yanındaki rakamların nasıl ele
      alınacağı konusunda farklı görüşlere sahiptir:
    </p>
    <ul>
      <li><code>user2FA</code> &rarr; <code>user_2_f_a</code>? <code>user_2fa</code>? <code>user2_fa</code>?</li>
      <li><code>version2</code> &rarr; <code>version_2</code> veya <code>version2</code>?</li>
    </ul>
    <p>
      Python'un <code>inflection</code> kütüphanesi
      <code>user_2fa</code> ve <code>version_2</code> kullanır. Rails
      aynı kuralı kullanır. Go, rakamlardan önce alt çizgi olmadan
      <code>user2fa</code> tercih eder. Birini seçin ve tutarlı kalın.
    </p>

    <h2>Sabitler için SCREAMING_SNAKE_CASE</h2>
    <p>
      snake_case'i büyük harfe çevirerek SCREAMING_SNAKE'e dönüştürün:
    </p>
    <pre>{`"max_retry_count".toUpperCase()
// -&gt; "MAX_RETRY_COUNT"`}</pre>
    <p>
      Python, Ruby, JavaScript, Rust ve çoğu C benzeri dil, derleme
      zamanı sabitleri ve ortam değişkenleri için SCREAMING_SNAKE
      kullanır. <code>API_KEY</code>, <code>MAX_CONNECTIONS</code>,
      <code>DEFAULT_TIMEOUT_MS</code>.
    </p>

    <h2>Dil kuralları</h2>
    <ul>
      <li>
        <strong>Python</strong> (PEP 8) &mdash; fonksiyonlar ve
        değişkenler için snake_case, sınıflar için PascalCase,
        modül seviyesindeki sabitler için SCREAMING_SNAKE.
      </li>
      <li>
        <strong>Ruby</strong> &mdash; metotlar ve değişkenler için
        snake_case, sınıflar ve modüller için PascalCase,
        sabitler için SCREAMING_SNAKE.
      </li>
      <li>
        <strong>Rust</strong> &mdash; değişkenler, fonksiyonlar,
        modüller için snake_case; türler için PascalCase;
        sabitler ve statikler için SCREAMING_SNAKE.
      </li>
      <li>
        <strong>PHP</strong> &mdash; snake_case tarihsel kuraldı;
        modern PHP (PSR-1) metotlar için camelCase tercih eder.
      </li>
      <li>
        <strong>SQL</strong> &mdash; sütun adları neredeyse evrensel
        olarak snake_case'dir. Sütun adlarında PascalCase ve camelCase,
        özellikle PostgreSQL'de tırnak işareti sorunlarına yol açar.
      </li>
    </ul>

    <h2>Veritabanı sütun adlandırması</h2>
    <p>
      Neredeyse tüm ORM'ler snake_case sütun adlarını bekler ve bunları
      uygulama kodunda otomatik olarak camelCase veya PascalCase
      alanlarına eşler. Rails
      <code>first_name</code> sütunu &lt;-&gt; Ruby <code>first_name</code>
      özelliği. ActiveRecord ve SQLAlchemy bu dönüşümü otomatik olarak
      yapar; veritabanı yazımını bozarsanız tüm gün ORM ile uğraşırsınız.
    </p>

    <h2>Ortam değişkenleri</h2>
    <p>
      Geleneksel olarak SCREAMING_SNAKE: <code>DATABASE_URL</code>,
      <code>NODE_ENV</code>, <code>API_KEY</code>. POSIX kabukları
      değişken adlarını tanımlayıcı olarak ele alır, bu nedenle alt
      çizgiler ve rakamlar sorunsuzdur; kısa çizgiler sorunludur.
    </p>

    <h2>Gidiş-dönüş değerlendirmeleri</h2>
    <p>
      snake_case &rarr; camelCase &rarr; snake_case genellikle
      sorunsuz bir şekilde gidiş-dönüş yapar <em>eğer</em> kısaltmalardan
      ve rakam uç durumlarından kaçınırsanız. Sorunlu örnekler:
    </p>
    <pre>{`"html_parser"  -&gt; "htmlParser"  -&gt; "html_parser"   TAMAM
"user_2fa"     -&gt; "user2Fa"     -&gt; "user_2_fa"    TAMAM DEĞİL
"io_s_version" -&gt; "ioSVersion"  -&gt; "io_s_version"  TAMAM
"api_key"      -&gt; "apiKey"      -&gt; "api_key"       TAMAM`}</pre>

    <h2>Baştaki alt çizgi kuralları</h2>
    <p>
      Python, modül içi isimler için <code>_private</code> ve özel
      protokol metotları için <code>__dunder__</code> kullanır.
      JavaScript, dilin artık gerçek özel sözdizimi olmasına rağmen
      geleneksel olarak özel alanlara alt çizgi ile ön ek ekler.
      Dönüşümde baştaki alt çizgileri koruyun:
    </p>
    <pre>{`function toSnakePreservePrefix(s) {
  const leading = s.match(/^_+/)?.[0] ?? "";
  const rest = s.slice(leading.length);
  return leading + toSnake(rest);
}`}</pre>

    <h2>Yaygın hatalar</h2>
    <p>
      Tek bir regex geçişi kullanmak ve &ldquo;HTMLParser&rdquo;ı yanlış
      almak. Farklı kurallara sahip kaynaklardan kopyala-yapıştır
      yaparak aynı kod tabanında snake ve camel'i karıştırmak. Uzun
      tanımlayıcılar için SCREAMING_SNAKE kullanmak ve onları okunamaz
      hale getirmek (<code>MAX_ALLOWED_RETRY_COUNT_BEFORE_FAIL</code>
      adlı bir sabit bir kural başarısı değil, kod kokusudur). Veritabanı
      sütunlarını camelCase'e dönüştürmek ve Postgres'te tırnak işareti
      sorunları yaratmak. Ve kısaltmaların sonsuz uç durum olduğunu
      unutmak &mdash; kuralınızı seçin ve belgeleyin.
    </p>

    <h2>Sayıları çalıştır</h2>
    <p>
      <a href="/tools/snake-case-converter">Snake case dönüştürücü</a>
      <a href="/tools/kebab-case-converter">Kebab case dönüştürücü</a>
      <a href="/tools/case-converter">Case dönüştürücü</a>
    </p>
  </>
);