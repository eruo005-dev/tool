import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Sorgu dizeleri, URL'nin <code>?</code> işaretinden sonra gelen kısmıdır &mdash;
      arama terimlerini, filtreleri, sayfalamayı, kampanya etiketlerini ve
      oturum ipuçlarını taşıyan, <code>&amp;</code> ile ayrılmış anahtar-değer
      çiftlerinden oluşan bir listedir. Sözdizimi, birinin bitirmeyi unuttuğu bir haftalık projeye benzer: tekrarlanan anahtarlar için standart yok, dizi veya iç içe nesneleri ifade etmenin resmi bir yolu yok ve URL'ler, HTML formları ve
      application/x-www-form-urlencoded arasında üç farklı kodlama kuralı bulunur. Bu kılavuz, modern <code>URLSearchParams</code> API'sini, gerçekte geçerli olan kodlama kurallarını, tekrarlanan anahtarlar ve köşeli parantez notasyonunun dizileri nasıl ele aldığını, PHP tarzı iç içe anahtar hack'ini, sunucular ve CDN'ler arasındaki URL uzunluğu sınırlarını ve Unicode ile emojilerin tüm boru hattından nasıl geçtiğini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir sorgu dizesinin anatomisi</h2>
    <p>
      <code> https://example.com/search?q=hello&amp;page=2</code> URL'sinde,
      sorgu dizesi <code>q=hello&amp;page=2</code> &mdash;
      <code>?</code>'den sonra ve <code>#</code>'den önceki her şeydir.
      Çiftler <code>&amp;</code> ile birleştirilir; anahtarlar ve değerler
      <code>=</code> ile ayrılır.
    </p>
    <p>
      URL'lerin nasıl çalıştığını tanımlayan standart RFC 3986'dır. Sorgu
      dizelerinin veri için <strong>nasıl kullanıldığı</strong> &mdash; tekrarlanan
      anahtarlar, köşeli parantezler, boolean'lar &mdash; standartlaştırma değil, gelenektir.
    </p>

    <h2>URLSearchParams &mdash; modern API</h2>
    <p>
      Tüm güncel tarayıcılar ve Node 10+, ayrıştırma ve oluşturma için
      <code> URLSearchParams</code>'a sahiptir.
    </p>
    <pre>{`const params = new URLSearchParams('q=hello&page=2&tag=red&tag=blue');

params.get('q');        // 'hello'
params.get('tag');      // 'red'  (ilk eşleşme)
params.getAll('tag');   // ['red', 'blue']
params.has('page');     // true
params.keys();          // yineleyici
[...params.entries()];  // [['q','hello'],['page','2'],['tag','red'],['tag','blue']]`}</pre>
    <p>
      Yapıcı, bir dize, bir nesne veya bir çift dizisi kabul eder. Değerleri otomatik olarak URL'den çözer, bu nedenle
      <code> ?q=hello%20world</code> size <code> &ldquo;hello world&rdquo;</code> dizesini verir.
    </p>

    <h2>Sorgu dizelerinde kodlama kuralları</h2>
    <p>
      Sorgu değerlerinde kodlanması gereken üç karakter sınıfı vardır:
    </p>
    <p>
      <strong>Ayrılmış alt sınırlayıcılar</strong>:
      <code> ! $ &amp; &apos; ( ) * + , ; =</code>. En önemlisi,
      <code> &amp;</code> ve <code>=</code> yapısal ayırıcılardır &mdash; bir değerdeki gerçek <code>&amp;</code> karakteri
      <code>%26</code>, gerçek <code>=</code> karakteri ise
      <code> %3D</code> olmalıdır.
    </p>
    <p>
      <strong>Boşluk</strong>: <code> application/x-www-form-urlencoded</code> varyantında (HTML form gönderimleri ve URLSearchParams çıktısı tarafından kullanılır) <code>+</code> olarak kodlanır veya katı RFC 3986 kodlamasında
      <code> %20</code> olarak kodlanır. Her ikisi de tüm büyük ayrıştırıcılarda boşluğa dönüşür, ancak aynı URL'de karıştırmak özensiz görünür.
    </p>
    <p>
      <strong>ASCII olmayan</strong>: UTF-8 baytları olarak kodlanır, her bayt
      <code>%XX</code> şeklindedir. &ldquo;&#128512;&rdquo; (U+1F600) emojisi
      dört UTF-8 baytıdır (<code>F0 9F 98 80</code>) ve
      <code> %F0%9F%98%80</code> olarak kodlanır.
    </p>

    <h2>Tekrarlanan anahtarlar &mdash; dizi geleneği</h2>
    <p>
      Standart, bir anahtarın tekrarlanması hakkında hiçbir şey söylemez. Pratikte,
      üç gelenek yaygındır:
    </p>
    <p>
      <strong>Düz tekrarlama</strong>:
      <code> ?tag=red&amp;tag=blue&amp;tag=green</code>.
      <code> getAll(&apos;tag&apos;)</code> ile okunur. Bu,
      <code> URLSearchParams</code>'ın beklediği ve çoğu modern sunucunun
      yerel olarak işlediği yaklaşımdır.
    </p>
    <p>
      <strong>Köşeli parantez notasyonu</strong> (PHP, Rails):
      <code> ?tag[]=red&amp;tag[]=blue</code>. Köşeli parantez karakterlerinin
      kendilerinin kodlanması gerekir: <code>tag%5B%5D=red</code>. PHP
      bunu <code> $_GET[&apos;tag&apos;]</code> dizisine ayrıştırır.
      <code> URLSearchParams</code> tarafından anlaşılmaz &mdash; ham anahtarı
      <code> &ldquo;tag[]&rdquo;</code> olarak döndürür.
    </p>
    <p>
      <strong>Virgülle ayrılmış</strong>:
      <code> ?tag=red,blue,green</code>. Günlükler için en basit, manuel
      bölme gerektirir, değer virgül içeriyorsa bozulur.
    </p>
    <p>
      API başına bir gelenek seçin ve belgeleyin.
      <code> tag</code> ve <code>tag[]</code>'yi karıştırmak, gece yarısı dağıtımı sırasında bulunan türden bir hatadır.
    </p>

    <h2>İç içe anahtarlar &mdash; PHP tarzı</h2>
    <p>
      Köşeli parantez notasyonu ayrıca iç içe nesneleri ifade eder:
    </p>
    <pre>{`?user[name]=jay&user[role]=admin&user[prefs][theme]=dark

// (PHP / qs kütüphanesinde) Şuna çözülür:
// { user: { name: 'jay', role: 'admin', prefs: { theme: 'dark' } } }`}</pre>
    <p>
      <code>qs</code> npm kütüphanesi, PHP dışındaki en yaygın
      uygulamadır. İç içe geçmeyi, dizileri ve çeşitli dizi biçimi seçeneklerini destekler. Express, varsayılan olarak
      <code> req.query</code> için bunu kullanır.
    </p>
    <p>
      <code>URLSearchParams</code> iç içe geçmeyi hiç anlamaz; tüm köşeli parantezli dizeyi düz bir anahtar olarak görür. Modern bir API üzerindeyseniz, karmaşık yapıları sorgu dizesine serileştirmek yerine istek gövdesine JSON olarak koymayı şiddetle düşünün.
    </p>

    <h2>URL uzunluğu sınırları</h2>
    <p>
      HTTP spesifikasyonunda resmi bir URL uzunluğu sınırı yoktur, ancak
      pratik tavanlar önemlidir.
    </p>
    <p>
      <strong>Tarayıcılar</strong>: Chrome, Firefox, Safari'nin tümü
      yaklaşık 32.000 karaktere kadar olan URL'leri güvenilir bir şekilde işler; eski IE 2.083 ile sınırlıydı.
    </p>
    <p>
      <strong>Web sunucuları</strong>: Apache varsayılan olarak 8 KiB
      (<code>LimitRequestLine</code>), Nginx 8 KiB
      (<code>large_client_header_buffers</code>), IIS 16 KiB.
    </p>
    <p>
      <strong>CDN'ler ve yük dengeleyiciler</strong>: Cloudflare 16 KiB,
      AWS ALB 16 KiB başlıklar (istek satırı dahil).
    </p>
    <p>
      Tüm altyapıda güvenli olmak için sorgu dizelerini 2 KiB'nin altında tutun. Bu sınıra yaklaşıyorsanız, verileri bir POST gövdesine taşıyın.
    </p>

    <h2>Boolean gelenekleri</h2>
    <p>
      URL'lerdeki boolean'lar tamamen gelenektir. Bir desen seçin:
    </p>
    <p>
      <strong>Sadece varlık</strong>:
      <code> ?includeArchived</code> true anlamına gelir, yokluğu false anlamına gelir.
      Kompakt, ancak boş değere sahip bir anahtarla karıştırılması kolaydır.
    </p>
    <p>
      <strong>Açık değer</strong>:
      <code> ?includeArchived=true</code>. Sunucunun &ldquo;true&rdquo; dizesini zorlamasını gerektirir &mdash; ve
      &ldquo;false&rdquo;, &ldquo;no&rdquo; ve
      &ldquo;0&rdquo;'ın çoğu dilde doğruluk değeri olan dizeler olduğunu unutmayın.
    </p>
    <p>
      <strong>0/1</strong>:
      <code> ?archived=1</code>. Net, özlü, eski API'lerde yaygın.
    </p>

    <h2>Sorgu dizelerini güvenli bir şekilde oluşturma</h2>
    <p>
      Dizeleri asla <code>&amp;</code> ve <code>=</code> ile birleştirmeyin. Her zaman <code>URLSearchParams</code> veya bir URL oluşturma kütüphanesi kullanın.
    </p>
    <pre>{`const url = new URL('https://example.com/search');
url.searchParams.set('q', 'hello & goodbye');
url.searchParams.append('tag', 'red');
url.searchParams.append('tag', 'blue');
console.log(url.toString());
// https://example.com/search?q=hello+%26+goodbye&tag=red&tag=blue`}</pre>
    <p>
      Değerin içindeki <code>&amp;</code>'nin doğru bir şekilde <code>%26</code> olarak kodlandığını ve boşluğun
      <code> +</code> olduğunu fark edin. Bunu elle yapmaya çalışmak, hataların yaşadığı yerdir.
    </p>

    <h2>Unicode, normalleştirme ve harmanlama</h2>
    <p>
      Eşit görünen iki dize, farklı bayt dizilerine sahip olabilir.
      &ldquo;caf&eacute;&rdquo; tek bir birleşik karakter (U+00E9) veya &ldquo;e&rdquo; + birleştirici vurgu (U+0065 U+0301) olabilir.
      Her ikisi de geçerli ancak farklı sorgu dizelerine kodlanır. Karşılaştırmadan veya veritabanı anahtarı olarak kullanmadan önce girdiyi
      <code>string.normalize(&apos;NFC&apos;)</code> ile normalleştirin.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong><code>&amp;</code> ve <code>=</code> ile manuel olarak bölmek.</strong>
      {" "}Bir değer gerçek karakteri içerene kadar çalışır.
      <code>URLSearchParams</code> kullanın.
    </p>
    <p>
      <strong>Çift kodlama.</strong> Zaten kodlanmış bir dize üzerinde
      <code> encodeURIComponent</code> çalıştırmak, <code>%20</code>'yi <code>%2520</code>'ye dönüştürür. Kodlanmış ve çözülmüş durumu kodunuzda dikkatlice takip edin.
    </p>
    <p>
      <strong>Anahtar sırasının önemli olduğunu varsaymak.</strong> Sıra
      çoğu ayrıştırıcı tarafından korunur, ancak hiçbir spesifikasyon tarafından garanti edilmez. Önbellek anahtarları, imzalar veya eşitlik kontrolleri için buna güvenmeyin &mdash; önce anahtarları sıralayın.
    </p>
    <p>
      <strong>Birden çok değer olabileceğinde <code>.get()</code> kullanmak.</strong>
      {" "}<code>get()</code> yalnızca ilk oluşumu döndürür.
      <code> getAll()</code> her birini döndürür. Geleneğinize uygun olanı kullanın.
    </p>
    <p>
      <strong><code>+</code> ve <code>%20</code>'yi karıştırmak.</strong>
      Her ikisi de boşluğa çözülür ancak tutarsız görünür. Birini seçin
      (URLSearchParams her zaman <code>+</code> yayar; katı kodlayıcılar
      <code>%20</code> yayar) ve ona bağlı kalın.
    </p>
    <p>
      <strong>Hassas verileri sorgu dizelerine koymak.</strong>
      Sorgu dizeleri sunucular, proxy'ler ve tarayıcı geçmişi tarafından günlüğe kaydedilir. Token'lar, parolalar ve PII, başlıklara veya POST gövdelerine, asla URL'lere konulmalıdır.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir URL'yi parametrelerine ayırmak için{" "}
      <a href="/tools/query-string-parser">sorgu dizesi ayrıştırıcısını</a> kullanın.
      Etrafındaki tam protokol/ana bilgisayar/yol dökümü için{" "}
      <a href="/tools/url-parser">URL ayrıştırıcısı</a> ile eşleştirin ve
      tek bir değer yanlış davrandığında ve tam olarak neyin kodlandığını görmeniz gerektiğinde{" "}
      <a href="/tools/url-encoder-decoder">URL kodlayıcı/kod çözücüyü</a>
      {" "}kullanın.
    </p>
  </>
);