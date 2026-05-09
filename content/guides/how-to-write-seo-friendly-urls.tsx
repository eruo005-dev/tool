import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      URL'ler, en yüksek kaldıraçlı ve en düşük çaba gerektiren SEO faktörlerinden biridir.
      Arama sonuçlarında görünürler, sosyal medyada kopyalanırlar, geri bağlantılarda
      sonsuza kadar yaşarlar ve tıklanmadan önce hem insanlara hem de tarayıcılara bir sayfanın
      ne hakkında olduğunu söylerler. İyi bir URL kısa, okunabilir,
      anahtar kelime odaklı ve kararlıdır. Kötü bir URL ise uzun, parametre dolu,
      kırılgan ve sessizce sıralamalara mal olur. Bu kılavuz, önemli olan kuralları
      (ve olmayan mitleri), nasıl slug seçileceğini,
      farklı sayfa türleri için yapısal kalıpları ve
      SEO'yu bozmadan değişikliklerin nasıl yönetileceğini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>İyi bir URL'nin anatomisi</h2>
    <p>
      İyi biçimlendirilmiş bir URL şuna benzer:
    </p>
    <p>
      <code>https://example.com/guides/how-to-write-seo-friendly-urls</code>
    </p>
    <p>
      <strong>HTTPS:</strong> pazarlık konusu değil. Tarayıcılar HTTP sitelerini
      &ldquo;güvenli değil&rdquo; olarak işaretler, Google HTTPS'yi bir sıralama
      sinyali olarak kullanır.
    </p>
    <p>
      <strong>Açıklayıcı alan adı:</strong> ziyaretçilere bir bakışta ne tür bir
      sitede olduklarını söyler.
    </p>
    <p>
      <strong>Mantıksal yol:</strong> /guides/ veya /blog/ içerik
      kategorisini belirtir; /tools/ bir araç olduğunu belirtir.
    </p>
    <p>
      <strong>Okunabilir slug:</strong> küçük harf, kelimeler arasında tire,
      hedef anahtar kelimeyi içerir, gereksiz kelime dolgusu yok.
    </p>
    <p>
      <strong>Kurallı içerik için sorgu parametresi yok.</strong>
      ?p=123 veya ?page=product&id=abc filtreler için uygundur ancak
      bir sayfanın birincil URL'si için uygun değildir.
    </p>

    <h2>Slug kuralları — yapılması gerekenler</h2>
    <p>
      <strong>Küçük harf kullanın.</strong> URL'ler büyük/küçük harfe duyarlıdır. /Guide
      ve /guide, ikisi de çözümlenebilecek farklı URL'lerdir ve bu da yinelenen
      içeriğe neden olur. Her zaman küçük harf kullanın.
    </p>
    <p>
      <strong>Kelimeleri tire ile ayırın.</strong> /how-to-write, /how_to_write
      veya /howToWrite değil. Google, tirelerin kelime ayırıcı olduğunu belirtti;
      alt çizgiler değildir.
    </p>
    <p>
      <strong>Hedef anahtar kelimeyi ekleyin.</strong> Sayfa
      &ldquo;nginx timeout config&rdquo; hedefliyorsa, slug bunu
      yansıtmalıdır. /nginx-timeout-config, /article-1742 değil.
    </p>
    <p>
      <strong>Anlam katmadıklarında gereksiz kelimeleri çıkarın.</strong>
      &ldquo;how-to-fix-a-leaky-faucet&rdquo; yerine
      &ldquo;how-to-fix-a-leaky-faucet&rdquo; (&ldquo;a&rdquo; okunabilirlik için kalabilir) veya
      &ldquo;fix-leaky-faucet&rdquo; daha iyidir. Slug'ı anlaşılmaz hale getirecek kadar
      agresif bir şekilde kısaltmaktan kaçının.
    </p>
    <p>
      <strong>Kısa tutun.</strong> 3-5 anlamlı kelime hedefleyin.
      Yaklaşık 60 karakterin üzerinde, arama motorları sonuçlarda kısaltır. Uzun
      URL'ler daha az paylaşılır.
    </p>
    <p>
      <strong>İnsan tarafından okunabilir olun.</strong> URL'den tek başına sayfanın ne hakkında
      olduğunu anlayabiliyor musunuz? Anlayamıyorsanız, slug'ı düzeltin.
    </p>

    <h2>Slug kuralları — yapılmaması gerekenler</h2>
    <p>
      <strong>Güncel olmayan içerik için tarih kullanmayın.</strong>
      /2024/03/15/how-to-write-seo-urls zamanla kötüleşir. İçeriği güncellediğinizde,
      URL bayat görünür. Tarihleri yalnızca gerçekten tarihli
      içerikler için kullanın (haberler, değişiklik günlükleri).
    </p>
    <p>
      <strong>Anahtar kelime doldurmayın.</strong> /best-cheap-
      affordable-budget-laptops-under-500, hem kullanıcılar hem de
      modern arama motorları için spam olarak okunur.
    </p>
    <p>
      <strong>Kurallı URL'ler için oturum kimlikleri veya sorgu parametreleri
      kullanmayın.</strong> /product?sid=abc123&category=shoes —
      her oturum için yinelenen URL, tarama bütçesi israfı.
    </p>
    <p>
      <strong>Özel karakterler kullanmayın.</strong> Boşluklar,
      aksan işaretleri, ve işaretleri ve noktalama işaretleri URL kodlamasına
      %20/%E9/%26 olarak dönüşür — çirkin ve kırılgan. a-z, 0-9, tire kullanın.
    </p>
    <p>
      <strong>Otomatik oluşturulan numaraları kullanmayın.</strong>
      /post/8472 hiçbir şey söylemez. Bunu hala yapan siteler (bazı
      WordPress varsayılanları, bazı CMS'ler), okunabilir
      slug'lı sitelere kıyasla SEO değeri kaybeder.
    </p>
    <p>
      <strong>Derin klasör yapısını yansıtmayın.</strong>
      /category/subcategory/sub-subcategory/topic/page bürokratik olarak okunur.
      İki seviyeli hiyerarşi genellikle yeterlidir.
    </p>

    <h2>Sayfa türüne göre yapısal kalıplar</h2>
    <p>
      <strong>Blog yazıları / kılavuzlar:</strong> /guides/[slug] veya
      /blog/[slug]. İçeriği gruplandırır, /guides/ ve /blog/ adreslerinde
      merkez sayfalara izin verir.
    </p>
    <p>
      <strong>Ürün sayfaları:</strong> /products/[slug] veya alan adı
      ürün odaklıysa sadece /[slug].
    </p>
    <p>
      <strong>Kategoriler:</strong> /categories/[category-slug] veya
      site kategori ağırlıklıysa /[category].
    </p>
    <p>
      <strong>Araçlar:</strong> /tools/[tool-slug]. Kullanıcılar bu
      kalıbı tanır; yer imlerine eklemesi temizdir.
    </p>
    <p>
      <strong>Yazar sayfaları:</strong> /author/[name-slug]. E-E-A-T için iyidir
      (Google'ın uzmanlık/deneyim sinyalleri).
    </p>
    <p>
      <strong>Arama ve filtreleme:</strong> /search?q=... ve
      /category/shoes?color=red&size=10. Sorgu parametreleri burada iyidir
      çünkü bunlar oluşturulmuş sayfalardır, kurallı içerik değildir.
    </p>

    <h2>Sondaki eğik çizgiler</h2>
    <p>
      /about ve /about/ teknik olarak farklı URL'lerdir. Birini seçin ve
      diğerini yönlendirin. Çoğu modern framework (Next.js, Gatsby,
      Hugo) bir kural seçer ve ona bağlı kalır.
    </p>
    <p>
      <strong>Yaygın seçim:</strong> dizin benzeri yollar dışında sondaki eğik çizgi yok.
      /about, /tools, /tools/calculator.
    </p>
    <p>
      Yönlendirmenin 301 (kalıcı) olduğundan emin olun, 302 değil, böylece bağlantı değeri
      kurallı sürümde toplanır.
    </p>

    <h2>Kurallaştırma — tarayıcılara hangi URL'nin gerçek olduğunu söyleyin</h2>
    <p>
      İyi URL yapısına rağmen, yinelenenler olur: UTM
      parametreleri, www vs. www olmayan, filtrelenmiş kategori sayfaları, sayfalama.
    </p>
    <p>
      <strong>rel=&ldquo;canonical&rdquo; etiketi</strong>
      &lt;head&gt; içinde, bir içerik parçası için tercih edilen URL'yi bildirir.
      Her sayfada kendisini işaret eden (kendi kendine kurallı)
      veya bir kopya/varyant ise ana sürümü işaret eden bir tane olmalıdır.
    </p>
    <p>
      <strong>www veya www olmayanı seçin.</strong> Bir birincil seçin, diğerine
      301 yönlendirmesi yapın. Barındırma yapılandırmanızda veya
      Cloudflare Sayfa Kuralları aracılığıyla ayarlayın.
    </p>
    <p>
      <strong>HTTPS'yi seçin.</strong> Tüm HTTP'yi HTTPS'ye 301 yönlendirin.
    </p>
    <p>
      <strong>UTM'leri yönetin.</strong> ?utm_source=twitter... sayfalarının
      temiz URL'ye geri işaret eden kurallı etiketlere ihtiyacı vardır, aksi takdirde
      paylaşılan her bağlantı tarayıcılar için &ldquo;yeni&rdquo; bir sayfa haline gelir.
    </p>

    <h2>URL değişiklikleri — yönlendirme oyun kitabı</h2>
    <p>
      Bir URL'yi değiştirmeniz gerekiyorsa (yeniden markalama, yeniden yapılandırma,
      içeriği birleştirme):
    </p>
    <p>
      <strong>1. Eski → yeni 301 yönlendirmesi.</strong> Kalıcı yönlendirmeler
      bağlantı değerinin ~%95'ini aktarır (Google'ın yıllar içindeki
      açıklamalarına göre). 302 ve 307 geçicidir ve daha az etkilidir.
    </p>
    <p>
      <strong>2. Dahili bağlantıları güncelleyin.</strong> Sonsuza kadar
      yönlendirmelere güvenmeyin — her yönlendirme atlaması gecikme ekler ve
      küçük bir miktar değer kaybettirir. Site içi bağlantıları yeni URL'ye düzeltin.
    </p>
    <p>
      <strong>3. Kurallı etiketleri güncelleyin.</strong> Yeni sayfa, kendi kendine
      kurallı olarak yeni URL'yi işaret etmelidir.
    </p>
    <p>
      <strong>4. sitemap.xml'i güncelleyin.</strong> Eski URL'leri kaldırın,
      yenisini gönderin.
    </p>
    <p>
      <strong>5. Search Console'u izleyin.</strong> Sonraki
      haftalarda 404 artışları, kapsam sorunları ve kaybedilen sıralamalar için
      izleyin.
    </p>
    <p>
      İçerik gerçekten emekliye ayrılmadıkça (o zaman 410 Gone, 404'ten daha temiz olabilir)
      bir URL'yi yönlendirme olmadan asla silmeyin.
    </p>

    <h2>Uluslararası ve dil</h2>
    <p>
      <strong>Alt dizinler:</strong> /en/, /fr/, /de/. Tek bir alan adından
      yönetmesi kolaydır, alan adı otoritesini devralır.
    </p>
    <p>
      <strong>Alt alan adları:</strong> en.example.com, fr.example.com.
      Ayrı tarama bütçesi, her biri Google'ın bakış açısından farklı bir &ldquo;site&rdquo;dir.
    </p>
    <p>
      <strong>Ülke alan adları (ccTLD'ler):</strong> example.fr,
      example.de. En güçlü yerel sinyal; yönetmesi en zor.
    </p>
    <p>
      Hangisini seçerseniz seçin, diller arasında eşdeğer sayfaları eşlemek için <code>hreflang</code> etiketlerini kullanın.
    </p>

    <h2>Uç durumlar</h2>
    <p>
      <strong>Bir sayfaya hizmet eden birden çok URL:</strong> kurallı
      birleştirir. Veya biri hariç tümünü yönlendirin. Yinelenenleri
      taranabilir ve yönetilmeyen bırakmayın.
    </p>
    <p>
      <strong>URL bir telefon numarası, e-posta veya kişisel
      bilgi içeriyor:</strong> yapmayın. URL'ler günlüklerde, geri bağlantılarda,
      yönlendirenlerde biter. Hassas verileri asla yola veya sorguya koymayın.
    </p>
    <p>
      <strong>Analitik için URL süsleyicileri:</strong> UTM, gclid,
      fbclid. Kabul edin, kurallı olarak uzaklaştırın, kendi
      dahili bağlantılarınıza dahil etmeyin.
    </p>
    <p>
      <strong>Başlıklardan otomatik oluşturulan slug'lar:</strong> CMS'ler için
      kabul edilebilir, ancak yüksek değerli sayfaları manuel olarak düzenleyin. Bir blog
      yazısı başlığı &ldquo;10 Tips for Better X (That You Haven't Heard
      Before!)&rdquo; bir URL haline gelmemelidir.
    </p>

    <h2>URL sağlığını kontrol etmek için araçlar</h2>
    <p>
      <strong>Google Search Console:</strong> Google'ın nasıl taradığını, hangi kurallıyı atadığını,
      indeksleme durumunu görmek için herhangi bir URL'yi inceleyin.
    </p>
    <p>
      <strong>Screaming Frog:</strong> kendi sitenizi tarayın, kurallı olmayan
      URL'leri, yönlendirme zincirlerini, 404'leri yakalayın.
    </p>
    <p>
      <strong>Ahrefs / Semrush:</strong> en çok geri bağlantı alan URL'leri görün —
      bunlar, 301 olmadan asla bozmamanız gereken URL'lerdir.
    </p>
    <p>
      <strong>Tarayıcı geliştirici araçları Ağ sekmesi:</strong> yönlendirmelerin
      301 (Kalıcı) vs 302 (Geçici) olduğunu onaylayın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>URL'leri içeriğe göre değil, CMS'ye göre oluşturmak.</strong>
      /?p=42 veya /node/185 bir CMS yönetici URL'sidir, kullanıcıya yönelik değil.
      Her zaman özelleştirin.
    </p>
    <p>
      <strong>Slug'larda anahtar kelime doldurmak.</strong> /best-cheap-top-
      affordable-laptops-2024 spam gibi görünür.
    </p>
    <p>
      <strong>URL'leri ekmek kırıntısı hiyerarşisi için tek doğruluk kaynağı
      olarak kullanmak.</strong> Ekmek kırıntıları ve URL yolları genellikle uyumlu
      olmalıdır ancak mükemmel bir şekilde yansıtmak zorunda değildir.
    </p>
    <p>
      <strong>Mobil kullanıcıyı görmezden gelmek.</strong> Mobilde uzun URL'ler
      paylaşım iletişim kutularında okunamaz. Kısa olan kazanır.
    </p>
    <p>
      <strong>Yumuşak 404'leri izlememek.</strong> 200 döndüren ancak
      &ldquo;hiçbir şey bulunamadı&rdquo; içeriği gösteren bir sayfa, tarama
      bütçesini boşa harcar ve sıralamaları düşürebilir.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Herhangi bir başlığı temiz bir SEO slug'ına dönüştürmek için{" "}
      <a href="/tools/slug-generator">URL slug oluşturucuyu</a> kullanın.
      Slug'lamadan önce metni standartlaştırmak için{" "}
      <a href="/tools/case-converter">büyük/küçük harf dönüştürücüyle</a>
      eşleştirin ve özel karakterlerle uğraşırken veya yüzde
      kodlu bağlantıları hata ayıklarken{" "}
      <a href="/tools/url-encoder-decoder">URL kodlayıcı/kod çözücüyü</a>
      {" "}kullanın.
    </p>
  </>
);