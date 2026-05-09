import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      URL ayrıştırma, regex problemi gibi görünen ancak aslında bir
      spesifikasyon problemi olan temel konulardan biridir. RFC
      3986 genel URI dilbilgisini tanımlar, WHATWG URL Yaşayan
      Standart tarayıcıların ne yaptığını tanımlar (bu tam olarak
      3986 değildir) ve gerçek dünyada karşılaştığınız URL
      dizeleri ters eğik çizgiler, Unicode ve bazen eksik bir
      protokol içerir. Kendi ayrıştırıcınızı yazmak neredeyse her
      zaman bir hatadır. Bu kılavuz, her modern çalışma zamanında
      yerleşik olan URL API'sini, bir URL'nin sekiz bileşenini ve
      bunların API özellikleriyle nasıl eşleştiğini, IDN alan
      adlarını ve Punycode'u, dosya URL'lerini ve bir tabana göre
      göreli URL çözümlemesini, <code>URL</code> ile
      <code> URLSearchParams</code> arasındaki farkı ve yol, sorgu
      ve parça arasındaki boşluklarda yaşayan yaygın hataları
      kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>URL API'si</h2>
    <p>
      Her güncel tarayıcı, Node 10+, Deno ve Bun, WHATWG
      <code>URL</code> yapıcısını içerir. Bir dizeyi, canlı
      alıcılar ve ayarlayıcılar içeren yapılandırılmış bir nesneye
      ayrıştırır.
    </p>
    <pre>{`const u = new URL('https://user:pass@api.example.com:8080/v1/items?q=k#top');

u.protocol;  // 'https:'
u.username;  // 'user'
u.password;  // 'pass'
u.host;      // 'api.example.com:8080'
u.hostname;  // 'api.example.com'
u.port;      // '8080'
u.pathname;  // '/v1/items'
u.search;    // '?q=k'
u.hash;      // '#top'
u.origin;    // 'https://api.example.com:8080'`}</pre>
    <p>
      Girdi ayrıştırılamazsa &mdash; eksik şema, kötü karakterler,
      geçersiz Unicode &mdash; yapıcı bir
      <code> TypeError</code> fırlatır. Hata fırlatmadan kontrol
      etmek için <code>try/catch</code> ile sarın veya
      <code> URL.canParse()</code> (Node 19.9+, Chrome 120+)
      kullanın.
    </p>

    <h2>Sekiz bileşen</h2>
    <p>
      Her URL, sabit ayırıcılarla ayrılmış en fazla sekiz parçadan
      oluşur. Şu biçimde:
      <code> scheme://userinfo@host:port/path?query#fragment</code>:
    </p>
    <p>
      <strong>protokol / şema</strong> &mdash; iki nokta üst üste
      ile biter. <code>//</code> öncesindeki tek kısım. Büyük/küçük
      harf duyarsız; ayrıştırıcı tarafından küçük harfe çevrilir.
    </p>
    <p>
      <strong>kullanıcı bilgisi</strong> &mdash; <code>@</code>
      {" "}öncesindeki <code>user:pass</code>. Sözdizimsel olarak
      hala geçerlidir ancak tarayıcılar 2017'den beri gezinmede
      güvenlik uyarısı göstermektedir ve Chrome, gezinmelerde
      kimlik bilgilerini tamamen engeller.
    </p>
    <p>
      <strong>host</strong> &mdash; alan adı veya IP. Büyük/küçük
      harf duyarsız; küçük harfe çevrilir.
    </p>
    <p>
      <strong>port</strong> &mdash; 1-65535. URL, şeması için
      varsayılan bağlantı noktasını kullandığında (https için 443,
      http için 80) <code>port</code> özelliği
      <code> &quot;&quot;</code> olur.
    </p>
    <p>
      <strong>yol</strong> &mdash; hosttan sonraki ilk
      <code> /</code>'den <code>?</code> veya
      <code> #</code>'e kadar her şey. Kök <code>&quot;/&quot;</code>
      'dir, asla boş dize değildir.
    </p>
    <p>
      <strong>sorgu</strong> &mdash; <code>?</code> ile başlar.
      <code>search</code> içinde bulunur;
      <code> searchParams</code> ile ayrıştırılır.
    </p>
    <p>
      <strong>parça</strong> &mdash; <code>#</code> ile başlar.
      Yalnızca istemci tarafı; sunucuya asla gönderilmez.
    </p>

    <h2>IDN alan adları ve Punycode</h2>
    <p>
      <code> m&uuml;nchen.de</code> veya
      <code> example.&#26085;&#26412;</code> gibi
      uluslararasılaştırılmış alan adları (IDN'ler), DNS'de
      Punycode kullanılarak ASCII olarak saklanır:
      <code> xn--mnchen-3ya.de</code>,
      <code> example.xn--wgv71a</code>. URL yapıcısı sizin için
      dönüştürür.
    </p>
    <pre>{`const u = new URL('https://m\u00fcnchen.de/info');
u.hostname;  // 'xn--mnchen-3ya.de'
u.href;      // 'https://xn--mnchen-3ya.de/info'`}</pre>
    <p>
      Kullanıcı tarafından görülebilir içerik sunarken, bir
      Punycode kütüphanesi veya <code>new Intl.DisplayNames</code>
      kullanarak geri dönüştürün. Ağ çağrıları için ASCII biçimini
      kullanın &mdash; her DNS çözümleyicisi bunu yerel olarak
      konuşur.
    </p>
    <p>
      Karışık betikli IDN alan adları, homograf saldırıları için
      vektördür:
      <code> xn--pple-43d.com</code>, <code> &#1072;pple.com</code>
      (Kiril a) olarak görüntülenir. Modern tarayıcılar, betikler
      karıştığında Punycode biçimini gösterir.
    </p>

    <h2>Dosya URL'leri</h2>
    <p>
      <code>file:</code> URL'leri, yerel dosya sistemi yollarına
      başvurur. Basit görünürler ancak sürprizlerle doludurlar.
    </p>
    <pre>{`new URL('file:///Users/jay/notes.txt').pathname
// '/Users/jay/notes.txt'

new URL('file:///C:/Users/jay/notes.txt').pathname
// '/C:/Users/jay/notes.txt'   -- baştaki eğik çizgiye dikkat edin

new URL('file://server/share/file.txt').host
// 'server'`}</pre>
    <p>
      Üç eğik çizgi (<code>file:///</code>) localhost anlamına
      gelir; iki eğik çizgi (<code>file://</code>) bir sonraki
      bölümün bir host olduğu anlamına gelir (Windows'ta UNC
      paylaşımı). Windows sürücü harflerini doğru şekilde işlemek
      için Node'da <code> url.fileURLToPath(u)</code> ile
      <code> pathname</code>'i bir işletim sistemi yoluna geri
      dönüştürün.
    </p>

    <h2>Göreli URL'ler ve taban çözümlemesi</h2>
    <p>
      İki bağımsız değişkenli biçim, göreli bir URL'yi bir tabana
      göre çözümler.
    </p>
    <pre>{`new URL('/help', 'https://example.com/blog/').href;
// 'https://example.com/help'

new URL('help', 'https://example.com/blog/').href;
// 'https://example.com/blog/help'

new URL('../site/', 'https://example.com/a/b/c').href;
// 'https://example.com/a/site/'

new URL('//cdn.example.com/js', 'https://example.com/').href;
// 'https://cdn.example.com/js'`}</pre>
    <p>
      Göreli çözümleme kuralları RFC 3986 bölüm 5'ten gelir.
      Baştaki <code>/</code> yolu köke sıfırlar; eğik çizgi yoksa
      geçerli dizine eklenir; <code>..</code> yukarı çıkar;
      <code> //</code> hostu değiştirir ancak şemayı korur.
    </p>

    <h2>URL ve URLSearchParams</h2>
    <p>
      <code>URL</code> her şeyi ayrıştırır.
      <code> URLSearchParams</code> yalnızca sorgu dizesini
      ayrıştırır. Bir <code>URL</code> örneğinde,
      <code>url.searchParams</code> size canlı bir
      <code>URLSearchParams</code> verir &mdash; üzerinde yapılan
      değişiklikler <code>url.search</code>'i otomatik olarak
      günceller.
    </p>
    <pre>{`const u = new URL('https://example.com/s?q=old');
u.searchParams.set('q', 'new');
u.searchParams.append('page', '2');
u.href;  // 'https://example.com/s?q=new&page=2'`}</pre>
    <p>
      URL'leri bu şekilde oluşturmak, kitaptaki her kodlama
      hatasından kaçınır. Manuel dize birleştirme, hataların
      yaşadığı yerdir.
    </p>

    <h2>Normalleştirme</h2>
    <p>
      URL ayrıştırıcı, ayrıştırırken normalleştirir:
    </p>
    <p>
      Şemayı ve hostu küçük harfe çevirir.
      Yollardaki <code>..</code> ve <code>.</code> bölümlerini
      çözümler.
      Varsayılan bağlantı noktalarını kaldırır.
      Ayrılmamış yüzde kodlu karakterlerin kodunu çözer
      (<code>%41</code> &rarr; <code>A</code>).
      Yoldaki ters eğik çizgileri düz eğik çizgilere dönüştürür
      (HTTP URL'leri için özel WHATWG davranışı).
    </p>
    <p>
      Aynı <code> href</code>'e normalleşen iki girdi dizesi
      anlamsal olarak eşdeğerdir, bu da kurallaştırma için
      karşılaştırdığınız şeydir.
    </p>

    <h2>Veri URL'leri ve diğer şemalar</h2>
    <p>
      <code>http:</code>, <code>https:</code> ve
      <code> file:</code>'ın ötesinde, ayrıştırıcı
      <code> data:</code>, <code>blob:</code>,
      <code> javascript:</code>,
      <code> mailto:</code> ve icat ettiğiniz herhangi bir şemayı
      işler.
      <strong> Özel olmayan şemalar</strong> ince farklılıklarla
      ayrıştırılır &mdash; host bileşeni yoktur ve
      <code> pathname</code> şema sonrası tüm içeriği alır.
    </p>
    <pre>{`const d = new URL('data:text/plain;base64,SGVsbG8=');
d.pathname;  // 'text/plain;base64,SGVsbG8='
d.host;      // ''`}</pre>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Regex ile ayrıştırma.</strong> &ldquo;Sadece
      <code>://</code>'den sonraki her şeyi al&rdquo; işe yarar,
      ta ki kullanıcı bilgisi, köşeli parantez içinde bir IPv6
      hostu veya bir IDN içeren bir URL ile karşılaşana kadar. URL
      yapıcısını kullanın.
    </p>
    <p>
      <strong><code>host</code>'un <code>hostname</code>'e eşit olduğunu varsaymak.</strong>
      {" "}<code>host</code>, mevcut olduğunda bağlantı noktasını
      içerir. <code> hostname</code> asla içermez. Açık bağlantı
      noktası <code>:443</code> olan bir URL'nin bir izin
      listesiyle eşleşmediği hata genellikle buna dayanır.
    </p>
    <p>
      <strong><code>search</code> ve <code>searchParams</code>'i bağımsız olarak ele almak.</strong>
      {" "}<code>u.search = &quot;?q=new&quot;</code> ayarlamak
      parametreleri yeniden oluşturur.
      <code> u.searchParams</code>'i değiştirmek aramayı yeniden
      yazar. Aynı işlemde ikisine de dokunmayın.
    </p>
    <p>
      <strong>Temel URL'lerde sondaki eğik çizgiyi unutmak.</strong>
      {" "}<code>new URL(&apos;help&apos;, &apos;https://x.com/blog&apos;)</code>
      <code>https://x.com/help</code> olarak çözümlenir,
      <code> /blog/help</code> değil, çünkü <code>/blog</code>'un
      sondaki eğik çizgisi yoktur &mdash; bu bir dosyadır, bir
      dizin değil.
    </p>
    <p>
      <strong>Yapıcının hata fırlatmasını ele almamak.</strong> URL
      ayrıştırıcılarına kullanıcı girdisi sürekli bir istisna
      kaynağıdır. <code> URL.canParse()</code> kullanın veya
      try/catch ile sarın.
    </p>
    <p>
      <strong>Güvenilmeyen girdiden gelen URL'lere güvenmek.</strong>
      Geçerli bir URL nesnesi güvenli bir hedef anlamına gelmez.
      URL'yi <code>window.location</code> veya bir
      <code> &lt;a href&gt;</code> içinde kullanmadan önce
      <code> protocol</code>'ü (<code>javascript:</code> yok!) ve
      <code> origin</code>'i izin listenize göre kontrol edin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir URL'yi bileşenlerine ayırın{" "}
      <a href="/tools/url-parser">URL ayrıştırıcı</a> ile. Sorgu
      karmaşık kısım olduğunda{" "}
      <a href="/tools/query-string-parser">sorgu dizesi
      ayrıştırıcı</a> ile eşleştirin ve belirli bir dizenin bir URL
      bileşenine gömülmeden önce nasıl kodlandığını kontrol etmek
      için{" "}
      <a href="/tools/url-encoder-decoder">URL kodlayıcı/kod
      çözücü</a> ile kullanın.
    </p>
  </>
);