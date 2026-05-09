import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      URL kodlaması — yüzde kodlaması — yanlış olduğunda sessizce işleri bozan temel konulardan biridir. %20 olması gereken bir boşluk + olarak kalır; sorgu değerindeki bir ve işareti URL'yi böler; bir Unicode karakter anlamsız karakterler halinde gelir. Bu kılavuz, kodlamanın gerçekte ne yaptığını, hangi karakterlerin buna ihtiyaç duyduğunu, <code>encodeURI</code> ve <code>encodeURIComponent</code> arasındaki kritik farkı, yol ve sorgu kodlamasını, çift kodlama tuzaklarını, form kodlamasını ve yalnızca ASCII ile test edenleri yakalayan Unicode işlemeyi kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>URL kodlaması nedir</h2>
    <p>
      URL'ler RFC 3986 tarafından belirli bir ASCII karakter kümesiyle sınırlandırılmıştır. Bu kümenin dışındaki her şey — boşluklar, çoğu noktalama işareti, ASCII olmayanlar — baytın onaltılık değeri XX olacak şekilde <code>%XX</code> olarak temsil edilmelidir.
    </p>
    <p>
      Örnek: boşluk (0x20) → %20. Et işareti (0x40) → %40. ASCII olmayan karakterler, UTF-8 bayt dizileri olarak, bayt başına bir %XX olacak şekilde kodlanır: é (U+00E9) → %C3%A9 (iki bayt).
    </p>

    <h2>Ayrılmış ve ayrılmamış karakterler</h2>
    <p>
      RFC 3986 URL karakterlerini kategorize eder:
    </p>
    <p>
      <strong>Ayrılmamış:</strong> A-Z, a-z, 0-9 ve
      <code> - _ . ~</code>. Asla kodlama gerektirmez.
    </p>
    <p>
      <strong>Ayrılmış (genel ayırıcılar):</strong> <code>: / ? # [ ] @</code>. URL'lerde yapısal anlam taşır. Verinin parçasıysa kodlayın, yapının parçasıysa kodlamayın.
    </p>
    <p>
      <strong>Ayrılmış (alt ayırıcılar):</strong> <code>! $ &amp; &apos;
      ( ) * + , ; =</code>. Sorgu değerlerinde veri olarak kullanıldığında kodlayın — formlarda ve sorgu sözdiziminde anlam taşırlar.
    </p>
    <p>
      <strong>Diğer her şey:</strong> boşluklar, Unicode, alışılmadık noktalama işaretleri — her zaman kodlayın.
    </p>

    <h2>encodeURI ve encodeURIComponent — JavaScript ayrımı</h2>
    <p>
      JavaScript'in iki URL kodlayıcısının farklı amaçları vardır ve bunları karıştırmak URL hatası #1'dir.
    </p>
    <p>
      <strong>encodeURI:</strong> tam bir URL'yi kodlar. Ayrılmış yapısal karakterleri korur (<code>: / ? # &amp; =</code>). İletim için güvenli hale getirilmesi gereken tam bir URL'niz olduğunda kullanın.
    </p>
    <p>
      <code>encodeURI(&quot;https://x.com/a b?q=1&amp;r=2&quot;)</code>
      {" "}→ <code>https://x.com/a%20b?q=1&amp;r=2</code>. Boşluğun kodlandığını ancak ? ve &amp;'nin kodlanmadığını fark edin.
    </p>
    <p>
      <strong>encodeURIComponent:</strong> bir URL bileşeninin (bir yol parçası, sorguda bir değer) içine yerleştirilecek bir değeri kodlar. Ayrılmış karakterleri kodlar. URL'leri parçalardan oluştururken kullanın.
    </p>
    <p>
      <code>encodeURIComponent(&quot;a&amp;b=c&quot;)</code> →
      <code> a%26b%3Dc</code>. Hem &amp; hem de ='yi kodlayarak bir değer olarak güvenle görünmelerini sağlar.
    </p>
    <p>
      <strong>Pratik kural:</strong> birleştirme yaparken her parça için encodeURIComponent kullanın, tamamı için encodeURI kullanmayın.
    </p>

    <h2>URLSearchParams yaklaşımı — daha güvenli, modern</h2>
    <p>
      Sorgu dizeleri için manuel kodlamayı tamamen atlayın:
    </p>
    <p>
      <code>const params = new URLSearchParams(); params.append(
      &quot;q&quot;, &quot;hello world&quot;); params.append(
      &quot;tag&quot;, &quot;a&amp;b&quot;); url.search =
      params.toString();</code>
    </p>
    <p>
      Doğru kodlama ve hata payı olmadan <code>q=hello+world&amp;tag=a%26b</code> üretir. Mümkün olduğunda bu deseni kullanın.
    </p>
    <p>
      Not: URLSearchParams boşluklar için <code>+</code> kullanır (eski form kodlaması), encodeURIComponent ise <code>%20</code> kullanır. Her ikisi de sunucuda doğru şekilde çözülür; aynı URL'de karıştırmayın.
    </p>

    <h2>Yol kodlaması ve sorgu kodlaması</h2>
    <p>
      URL'nin farklı bölümleri arasında ince farklar.
    </p>
    <p>
      <strong>Yol bölümleri:</strong> veride geçiyorsa <code>/</code>'yi kodlayın (aksi halde yeni bir yol bölümü oluşturur). Boşluklar %20 olarak.
    </p>
    <p>
      <strong>Sorgu dizeleri:</strong> Geleneksel form kodlamasında (application/x-www-form-urlencoded) <code>+</code> boşluk anlamına gelir. Modern URL ayrıştırıcılarında %20 de çalışır ve nettir.
      <code> &amp;</code> ve <code>=</code> yapısal anlam taşır ve değerlerde kodlanmalıdır.
    </p>
    <p>
      <strong>Parçalar (#):</strong> sorguya benzer kurallar; ayrıştırmayı bozacak karakterleri kodlayın.
    </p>

    <h2>Çift kodlama — klasik tuzak</h2>
    <p>
      Zaten kodlanmış bir URL'yi kodlamak %20'yi %2520'ye dönüştürür (çünkü % %25 olur). Sonuç geçerli bir URL gibi görünür ancak hedef sunucu boşluk yerine &ldquo;%20&rdquo; gerçek dizesini alır.
    </p>
    <p>
      Belirtiler: ürün sayfalarında başlıkta &ldquo;Item %26 Part&rdquo; görünmesi, basit terimler için arama sorgularının sonuç döndürmemesi, özel karakterli URL'lerde 404 hataları.
    </p>
    <p>
      <strong>Çözüm:</strong> kodunuzda bir dizenin kodlanmış mı yoksa çözülmüş mü olduğunu takip edin. Girişte ve ardından çıkışta kodlama yapmayın. URL oluşturan kütüphaneler her zaman çözülmüş dizeler almalı ve yalnızca sınırda bir kez kodlama yapmalıdır.
    </p>

    <h2>UTF-8 ve ASCII olmayan karakterler</h2>
    <p>
      Modern URL kodlaması, doğrudan Unicode kod noktaları üzerinde değil, UTF-8 baytları üzerinde tanımlanır. é gibi bir karakter önce UTF-8 olarak kodlanır (iki bayt: 0xC3 0xA9), ardından her bayt %XX (%C3%A9) olur.
    </p>
    <p>
      <code>encodeURIComponent(&quot;café&quot;)</code> →
      <code> caf%C3%A9</code>.
    </p>
    <p>
      <strong>IDN alan adları</strong> (örnek: münchen.de): alan adı kısmı Punycode kullanır (<code>xn--mnchen-3ya.de</code>), yüzde kodlaması değil. Yüzde kodlaması yalnızca yol/sorgu/parça içindir. Tarayıcılar dönüşümü halleder; sunucular genellikle Punycode görür.
    </p>
    <p>
      <strong>Eski sistemler:</strong> bazı sunucular ASCII olmayan karakterler için Windows-1252 veya ISO-8859-1 kodlaması bekler (böylece é %C3%A9 yerine %E9 olur). 2026'da bu neredeyse her zaman yanlıştır ancak eski sistemlerle entegrasyon yaparken yine de karşılaşabilirsiniz. Alıcının ne beklediğini her zaman kontrol edin.
    </p>

    <h2>Form kodlaması — ilgili ancak farklı</h2>
    <p>
      <code>application/x-www-form-urlencoded</code> ile gönderilen HTML formları, URL kodlamasının bir varyantını kullanır:
    </p>
    <p>
      Boşluklar <code>+</code> olur (%20 değil).
    </p>
    <p>
      Metin alanlarındaki satır sonları <code>%0D%0A</code> (CRLF) olur.
    </p>
    <p>
      Diğer her şey standart yüzde kodlamasını takip eder.
    </p>
    <p>
      <strong>multipart/form-data</strong> farklıdır — dosya yüklemeleri için kullanılır, değerleri sınırlayıcıyla ayrılmış parçalara sarar ve URL kodlaması gerektirmez.
    </p>

    <h2>Sunucu tarafında çözme</h2>
    <p>
      Çoğu web framework'ü otomatik olarak çözer — Express'te <code>req.query.q</code> veya Java'da <code>@QueryParam</code> size çözülmüş dizeyi verir. Çözme işlevlerini nadiren kendiniz çağırırsınız.
    </p>
    <p>
      <strong>Dikkat:</strong> bir URL'yi yeniden yayınlamanız gerekiyorsa (bir yönlendirmede veya veritabanında saklarken), çıktıdan önce yeniden kodlayın. Kodlanmış bir URL dizesini olduğu gibi asla saklamayın ve yayınlamayın — aşağı akış kodu çözülmüş girdi varsaydığında çift kodlamayla karşılaşırsınız.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>encodeURIComponent gerekirken encodeURI kullanmak.</strong>
      En yaygın hata: kullanıcı girdisini &amp; veya ='yi kodlamadan bir sorgu değerine koymak.
    </p>
    <p>
      <strong>Veri olmadan önce veriyi kodlamak.</strong> Bir veritabanı değerini saklarken kodlamak, ardından bir URL'de yayınlarken tekrar kodlamak — çift kodlama.
    </p>
    <p>
      <strong>URL parçalarını dize olarak birleştirmek.</strong>
      <code> const url = base + &quot;?q=&quot; + query;</code>. URL/URLSearchParams nesnelerini kullanın — doğru şekilde kodlarlar.
    </p>
    <p>
      <strong>Her yerde UTF-8 varsaymak.</strong> Çok eski uç noktalar farklı bir bayt kodlaması gerektirebilir. API belirtimini okuyun.
    </p>
    <p>
      <strong>Yollardaki eğik çizgileri yanlışlıkla kodlamak.</strong>
      <code>a/b/c</code> varsa ve encodeURIComponent çağırırsanız, <code>a%2Fb%2Fc</code> alırsınız — üç yerine bir yol bölümü. Önce bölün, her bölümü kodlayın, / ile yeniden birleştirin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      URL'leri anında kodlayın ve çözün{" "}
      <a href="/tools/url-encoder-decoder">URL kodlayıcı/çözücü</a> ile. Bunu, ikili yükleri URL güvenli metne gömmek için{" "}
      <a href="/tools/base64-encoder-decoder">Base64 kodlayıcı/çözücü</a>
      {" "}ve başlıkları URL yol bölümlerine dönüştürürken{" "}
      <a href="/tools/slug-generator">slug oluşturucu</a> ile birlikte kullanın.
    </p>
  </>
);