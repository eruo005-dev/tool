import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir <a href="/learn/robots-txt">robots.txt</a> dosyası, 1994 yılından kalma düz metin protokolüdür ve
      hâlâ Googlebot, Bingbot ve diğer birçok tarayıcının sitenize
      dokunup dokunmayacağını kontrol eder. Tam olarak tek bir yolda bulunur &mdash;
      <code> /robots.txt</code> kök alan adınızda &mdash; ve tek bir
      yazım hatası, hazırlık ortamınızı arama sonuçlarına sızdırabilir
      veya tüm üretim sitenizin dizinden çıkarılmasına neden olabilir. Sözdizimi
      basit görünür, ancak öncelik, joker karakterler ve
      tarama ile dizine ekleme arasındaki farkla ilgili kurallar, deneyimli
      SEO uzmanlarını bile zorlar. Bu kılavuz, tüm yönerge kümesini
      (User-agent, Disallow, Allow, Sitemap, Crawl-delay), joker karakter
      ve çapa eşleştirmesini, <code>Noindex</code>'in neden 2019'da
      robots.txt'den çıkarıldığını ve hazırlık ortamlarını
      üretimi bozmadan özel tutan yaygın kalıpları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>robots.txt aslında neyi kontrol eder</h2>
    <p>
      Robots.txt, iyi huylu tarayıcılara hangi URL'leri isteyebileceklerini
      söyler. Hiçbir şeyi zorunlu kılmaz &mdash; kötü niyetli kazıyıcılar
      bunu yok sayar &mdash; ve bir sayfanın arama sonuçlarında görünmesini
      doğrudan engellemez. robots.txt'de engellenen bir URL, Google tarafından harici bağlantılar aracılığıyla keşfedilirse
      yine de dizine eklenebilir; arama sonucunda sadece snippet olmaz
      çünkü tarayıcı sayfa gövdesini hiç okumamıştır.
    </p>
    <p>
      Bir sayfanın dizinde kalmamasını istiyorsanız, bir HTTP
      <code> X-Robots-Tag: noindex</code> başlığı veya bir
      <code> &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;</code>
      etiketi kullanın &mdash; ve kritik olarak, Google'ın yönergeyi görebilmesi için
      URL'yi taranabilir bırakın.
    </p>

    <h2>Dosya konumu ve biçimi</h2>
    <p>
      Dosya <code>https://example.com/robots.txt</code> adresinde olmalıdır.
      Alt alan adlarının kendilerine ait olması gerekir &mdash;
      <code> blog.example.com/robots.txt</code>,
      <code> example.com/robots.txt</code>'den ayrıdır. İçerik türü
      <code> text/plain</code> ve kodlama UTF-8 olmalıdır. Başlangıçta bir BOM
      tolere edilir, ancak bundan kaçının.
    </p>
    <p>
      Google tarafından kabul edilen maksimum dosya boyutu 500 KiB'dir. Bunun
      ötesindeki her şey kesilir ve kesilme, kuralın ortasında gerçekleşebilir. Gerçek
      dünya dosyalarını 50 KiB'nin oldukça altında tutun.
    </p>

    <h2>User-agent: belirli tarayıcıları hedefleme</h2>
    <p>
      Her kural bloğu, bir veya daha fazla <code>User-agent</code>
      {" "}satırıyla başlar. Değer, tarayıcının ürün belirtecine karşı büyük/küçük harf duyarsız bir alt dize eşleşmesidir.
    </p>
    <pre>{`User-agent: Googlebot
Disallow: /admin/

User-agent: Bingbot
Disallow: /admin/
Crawl-delay: 10

User-agent: *
Disallow: /private/`}</pre>
    <p>
      <code>*</code> joker karakteri, daha spesifik bir bloğu olmayan her
      tarayıcıyla eşleşir. Bir tarayıcı, <strong>en spesifik eşleşen grubu</strong> seçer
      ve yalnızca ona uyar &mdash; kurallar
      gruplar arasında birleşmez. Googlebot, kendi bloğuyla ve <code>*</code>
      bloğuyla eşleşirse, yalnızca Googlebot bloğunu takip eder.
    </p>

    <h2>Disallow ve Allow</h2>
    <p>
      <code>Disallow</code>, tarayıcının istememesi gereken bir yol öneki verir.
      <code>Allow</code>, daha dar bir yol için daha geniş bir Disallow'u geçersiz kılar. Her ikisi de alan adının
      kökünden başlayan önek eşleşmeleridir.
    </p>
    <pre>{`User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php`}</pre>
    <p>
      Kurallar çakıştığında, Google <strong>en uzun eşleşen yol kuralını</strong> kullanır.
      Yukarıda, <code> /wp-admin/admin-ajax.php</code> isteği, Allow (28
      karakter) ile Disallow'dan (10 karakter) daha spesifik olarak eşleşir, bu nedenle
      izin verilir.
    </p>
    <p>
      Yol içermeyen bir <code>Disallow:</code>, "hiçbir şey
      yasaklanmamıştır" anlamına gelir &mdash; bir bölümü tekrar
      açmanın yoludur. <code>Disallow: /</code> tüm siteyi engeller.
    </p>

    <h2>Joker karakterler ve URL sonu çapası</h2>
    <p>
      Google, Bing ve çoğu modern tarayıcı, düz önek eşleştirmesinin ötesinde iki kalıp
      karakterini destekler:
    </p>
    <p>
      <code>*</code> herhangi bir karakter dizisiyle eşleşir.
      <code> $</code>, kalıbı URL'nin sonuna sabitler.
    </p>
    <pre>{`User-agent: *
Disallow: /*?sessionid=
Disallow: /*.pdf$
Allow:    /public/*.pdf$`}</pre>
    <p>
      İlk satır, <code> ?sessionid=</code> içeren herhangi bir URL'yi engeller.
      İkincisi, <code> .pdf</code> ile biten URL'leri engeller &mdash; <code>$</code> olmadan,
      <code> /file.pdf.html</code> da eşleşirdi. Allow satırı
      daha sonra <code>/public/</code> altındaki PDF'leri yeniden açar.
    </p>

    <h2>Sitemap yönergesi</h2>
    <p>
      Kural yönergelerinin aksine, <code>Sitemap</code> satırları
      küreseldir &mdash; herhangi bir User-agent grubuna bağlı değildirler ve
      dosyada herhangi bir yerde görünebilirler. Mutlak URL'ler kullanın.
    </p>
    <pre>{`Sitemap: https://example.com/sitemap.xml
Sitemap: https://example.com/sitemap-news.xml`}</pre>
    <p>
      Birden çok site haritası listeleyebilir veya bir site haritası dizinine işaret edebilirsiniz. Bu,
      tarayıcılara içeriği nerede bulacaklarını aktif olarak söyleyen tek yönergedir &mdash;
      geri kalanı yalnızca nereye gitmeyeceklerini söyler.
    </p>

    <h2>Crawl-delay &mdash; sınırlı destek</h2>
    <p>
      <code>Crawl-delay: N</code>, tarayıcıdan istekler arasında N saniye
      beklemesini ister. Bing ve Yandex buna uyar; Google bunu tamamen
      yok sayar (bunun yerine Search Console tarama hızı ayarlarını kullanın).
      Baidu bunu farklı yorumlar. Pratikte, buna saygı duyan botlarla
      sınırlayın.
    </p>

    <h2>Noindex artık burada desteklenmiyor</h2>
    <p>
      Google, 1 Eylül 2019'da robots.txt'deki <code>Noindex:</code>
      yönergelerine uymayı durdurdu. Hâlâ
      <code> Noindex: /thanks</code> satırlarınız varsa, bu kontrolü bir
      <code> &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;</code>
      {" "}etiketi veya bir <code>X-Robots-Tag</code> başlığına taşıyın ve URL'nin
      taranabilir olduğundan emin olun. Hem noindex hem de
      robots-engelli olan bir sayfa, her iki dünyanın da en kötüsüdür: Google
      noindex etiketini göremez, bu nedenle URL'yi snippetsiz bir bağlantı olarak
      dizinde bırakabilir.
    </p>

    <h2>Hazırlık ve önizleme için kalıplar</h2>
    <p>
      Hazırlık alt alan adları (<code>staging.example.com</code>) için şunu sunun:
    </p>
    <pre>{`User-agent: *
Disallow: /`}</pre>
    <p>
      HTTP Temel Kimlik Doğrulaması veya IP beyaz listesiyle birleştirin &mdash;
      robots.txt tek başına bir nezakettir, bir geçit değildir. Bir rakip veya
      kazıyıcı hazırlık URL'sini bulursa, robots.txt'nizi yok sayar
      ve yine de tarar.
    </p>
    <p>
      Özel bir yönetici alanına ve dizine eklenmesini istemediğiniz bir arama
      sonuçları sayfasına sahip bir üretim sitesi için:
    </p>
    <pre>{`User-agent: *
Disallow: /admin/
Disallow: /cart
Disallow: /search
Disallow: /*?utm_
Allow: /

Sitemap: https://example.com/sitemap.xml`}</pre>
    <p>
      <code>/*?utm_</code> satırı, UTM etiketli gelen bağlantıların oluşturduğu yinelenen içerik
      URL'lerini engeller.
    </p>

    <h2>Dosyanızı test etme</h2>
    <p>
      Google Search Console'da Ayarlar altında, son getirilen kopyayı, ayrıştırma
      hatalarını ve zaman damgasını gösteren bir robots.txt raporu bulunur. Belirli URL'lere karşı canlı test
      için URL İnceleme aracını kullanın &mdash; belirli bir URL'nin
      engellenip engellenmediğini ve hangi kuralın onu engellediğini bildirir.
    </p>
    <p>
      Dağıtmadan önce, tüm dosyayı Google'ın öncelik kurallarını anlayan bir sözdizimi
      denetleyicisinden geçirin. Yanlış yerleştirilmiş bir
      Allow/Disallow zararsız görünebilir, ancak sessizce tüm bir
      bölümü engelleyebilir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>CSS ve JS'yi engelleme.</strong> Google'ın sayfaları değerlendirmek için
      işlemesi gerekir.
      <code> /wp-content/</code> veya <code>/static/</code> dizinlerine izin vermemek, Googlebot'un düzen için kullandığı stilleri ve komut dosyalarını
      gizleyebilir ve bu da sıralamalara zarar verir. Varlık dizinlerini taranabilir bırakın.
    </p>
    <p>
      <strong>Hassas URL'leri gizlemek için robots.txt kullanma.</strong>
      Dosya herkese açıktır. Bir Disallow satırında <code>/admin-secret-backup/</code> listelemek,
      üzerine dev bir ok koymak gibidir. Güvenlik için robots.txt değil, kimlik doğrulama kullanın.
    </p>
    <p>
      <strong>Disallow'ın sayfaları dizinden kaldırmasını beklemek.</strong>
      Disallow, taramayı durdurur, dizine eklemeyi değil. Halihazırda dizine eklenmiş URL'ler,
      aylarca snippetsiz bağlantılar olarak arama sonuçlarında kalabilir. Kaldırmak
      için, Google işleyene kadar noindex kullanın (ve taranabilir tutun), ardından engelleyin.
    </p>
    <p>
      <strong>Büyük/küçük harf duyarlı yol uyuşmazlığı.</strong> Yollar
      büyük/küçük harf duyarlıdır. <code>Disallow: /Admin/</code>,
      <code> /admin/</code> yolunu engellemez. Gerçek URL büyük/küçük harf kullanımınızla eşleştirin.
    </p>
    <p>
      <strong>Alt alan adı kapsamını unutmak.</strong>
      Köke <code> robots.txt</code> yüklemek,
      <code> cdn.example.com</code> için hiçbir şey yapmaz. HTTP sunan her alt alan adının
      kendi dosyasına ihtiyacı vardır.
    </p>
    <p>
      <strong>Sondaki eğik çizgi sürprizleri.</strong>
      <code> Disallow: /foo</code>,
      <code> /foo</code>, <code>/foo/</code>,
      <code> /foobar</code> ve <code>/foo.html</code> yollarını engeller. Yalnızca
      klasörü kastettiyseniz, <code>Disallow: /foo/</code> yazın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/robots-txt-generator">robots.txt oluşturucu</a> ile üretime hazır bir dosya
      taslağı oluşturun ve doğrulayın.
      Eklediğiniz <code>Sitemap:</code> satırının iyi biçimlendirilmiş bir dosyayı işaret ettiğinden emin olmak için
      <a href="/tools/sitemap-url-generator">site haritası URL oluşturucu</a>
      {" "}ile ve kurallarınızın eşleşeceği tam yol şeklini doğrulamak için
      <a href="/tools/url-parser">URL ayrıştırıcı</a> ile eşleştirin.
    </p>
  </>
);