export const intro = (
  <>
    <p>
      Şema işaretlemesi, HTML'inize eklediğiniz ve arama motorlarına sayfanızın gerçekte neyle ilgili olduğunu söyleyen yapılandırılmış verilerdir. Bir tarif sayfası, bir ürün sayfası ve bir iş ilanı, sıradan bir web tarayıcısına &ldquo;bir sayfa&rdquo; gibi görünür. Şema ile bunlar, her biri kendi yapılandırılmış alanlarına sahip ve aramada zengin sonuçlar almaya uygun bir tarif, bir ürün ve bir iş haline gelir.
    </p>
    <p>
      Getirisi gerçektir. Geçerli şemaya sahip sayfalar yıldız derecelendirmeleri, SSS akordeonları, fiyat gösterimleri, ekmek kırıntıları ve bilgi paneli girişleri kazanabilir; tüm bunlar listeyi genişletir ve rakipleri ekrandan iter. Bu kılavuz, şemanın ne olduğunu, hangi türlerin önemli olduğunu ve sitenizi bozmadan nasıl uygulanacağını kapsar.
    </p>
  </>
);

export const body = (
  <>
    <h2>Şema işaretlemesi aslında nedir</h2>
    <p>
      Şema, <code>schema.org</code> adresinde tutulan ve Google, Bing, Pinterest ve diğer arama motorlarının anladığı ortak bir kelime dağarcığıdır. Bunu sayfanıza <a href="/learn/json-ld">JSON-LD</a> olarak, JavaScript benzeri küçük bir JSON bloğu olarak gömersiniz ve sayfadaki varlığı tanımlar: makale, ürün, etkinlik, kişi, kuruluş ve yaklaşık 800 diğeri. Tarayıcılar JSON'u okur, bilgi grafikleriyle eşleştirir ve isteğe bağlı olarak aramada daha zengin bir sonuç gösterir.
    </p>

    <h2>JSON-LD vs mikro veri vs RDFa</h2>
    <p>
      Şema yazmanın üç yolu vardır. Google, <strong>JSON-LD</strong>'yi açıkça önerir çünkü <code>&lt;head&gt;</code> veya <code>&lt;body&gt;</code> içinde tek bir <code>&lt;script&gt;</code> etiketinde yaşar, görünür HTML'ye müdahale etmez ve bakımı kolaydır. Mikro veri ve RDFa, öznitelikleri doğrudan HTML etiketlerine gömer — daha kırılgan, denetlemesi daha zordur. JSON-LD'yi seçin. Sözdizimini ezberlemeden oluşturmak için <a href="/tools/schema-markup-generator">şema işaretlemesi oluşturucumuzu</a> kullanın.
    </p>

    <h2>Zaman ayırmaya değer şema türleri</h2>
    <p>
      Her şema türü zengin bir sonuç tetiklemez. 2026'da yüksek değerli olanlar: <strong>Article</strong> (haber, blog yazıları), <strong>FAQPage</strong> (sonuçlarda akordeon gösterir), <strong>HowTo</strong> (numaralı adım atlıkarıncası), <strong>Product</strong> (fiyat, stok durumu, derecelendirmeler), <strong>Recipe</strong> (görsel, süre, kalori), <strong>Event</strong> (tarihler, mekan), <strong>BreadcrumbList</strong> (URL'yi yolla değiştirir), <strong>Organization</strong> (bilgi paneli logosu) ve <strong>LocalBusiness</strong> (çalışma saatleri, adres, harita işareti).
    </p>

    <h2>FAQPage en hızlı kazançtır</h2>
    <p>
      Soruları yanıtlayan herhangi bir içerik yazıyorsanız, FAQPage şeması ekleyin. Kazanılması en ucuz zengin sonuçtur — Google, SSS'nizi listenizin altında daraltılabilir bir akordeon olarak gösterir ve dikey alanı ikiye katlar. JSON-LD'yi doğrudan <a href="/tools/faq-schema-generator">FAQ şema oluşturucumuzla</a> oluşturabilirsiniz. Not: Yalnızca sayfada herkese açık, görünür yanıtları olan sorular uygundur.
    </p>

    <h2>Sitenize nasıl eklenir</h2>
    <p>
      JSON-LD bloğunu sayfada herhangi bir yerde bir <code>&lt;script type=&quot;application/ld+json&quot;&gt;</code> etiketinin içine yapıştırın. Next.js veya benzeri çerçevelerde, sunucu tarafında oluşturun ve sayfa başlığında işleyin. İstemci tarafı JavaScript ile enjekte etmeyin — Googlebot bazen işaretlemeyi okumadan önce JS'nin çalışmasını beklemez.
    </p>

    <h2>Yayınlamadan önce doğrulayın</h2>
    <p>
      Google'ın Zengin Sonuçlar Testi (<code>search.google.com/test/rich-results</code>) ve Şema İşaretlemesi Doğrulayıcısı (<code>validator.schema.org</code>) ihtiyacınız olan iki araçtır. Bir URL veya ham HTML yapıştırın ve unuttuğunuz her gerekli özelliği işaretlerler. JSON'daki tek bir geçersiz karakter tüm bloğun yok sayılmasına neden olur, bu nedenle doğrulama isteğe bağlı değildir.
    </p>

    <h2>Şemayı görünür içerikle eşleştirin</h2>
    <p>
      Google'ın spam politikası, şemanın kullanıcı için gerçekten görünür olan içeriği tanımlamasını gerektirir. Sayfada görünmeyen bir şemada 5 yıldızlı derecelendirme iddia etmek, manuel bir işlem kazandırabilir ve sıralamaları düşürebilir. Kural: Şemadaysa, sayfada da olmalıdır.
    </p>

    <h2>Çakışan şemalara dikkat edin</h2>
    <p>
      Aynı sayfada hem Article hem de NewsArticle şemasına veya aynı ürün için iki Product bloğuna sahip olmak tarayıcıların kafasını karıştırır. Yeni şema eklemeden önce eski sayfaları denetleyin — WordPress eklentileri bazen sizinkiyle çakışan kendi işaretlemelerini otomatik olarak ekler.
    </p>

    <h2>Ekmek kırıntısı şeması sessizce güçlüdür</h2>
    <p>
      BreadcrumbList, arama sonucundaki ham URL'yi okunabilir bir yolla değiştirir — Ana Sayfa &gt; Kılavuzlar &gt; Şema İşaretlemesi. Site genelinde eklemesi beş dakika sürer, her dizine eklenebilir sayfada <a href="/learn/ctr">TO</a>'yu yükseltir ve hiçbir dezavantajı yoktur. Henüz yapmadıysanız önce bunu yapın.
    </p>

    <h2>Her zengin sonucun peşinden koşmayın</h2>
    <p>
      Dikeyinizdeki şema kullanılabilirliğini gözden geçirin. Tarif şeması bir SaaS sitesi için işe yaramaz; Ürün şeması bir blogda anlamsızdır. İçeriğinizle eşleşen iki veya üç türü seçin ve bunları iyi uygulayın. Yirmi yarı bozuk şema bloğu, iki doğru olandan daha kötüdür.
    </p>

    <h2>Search Console'da aylık olarak inceleyin</h2>
    <p>
      Google Search Console'un &ldquo;İyileştirmeler&rdquo; bölümü, sitenizde algıladığı her şema türünü ve ayrıca hataları ve uyarıları gösterir. Aylık olarak kontrol edin. Herhangi bir yeni hata, genellikle bir şablon değişikliğinin sayfaların tam bir bölümünde işaretlemeyi bozduğu anlamına gelir.
    </p>

    <p>
      İlgili: <a href="/guides/seo-basics-for-beginners">Yeni başlayanlar için SEO temelleri</a>, <a href="/guides/how-to-write-a-meta-description">meta açıklaması nasıl yazılır</a> ve şemanızın ilk denemede doğrulanması için <a href="/guides/how-to-format-json-properly">JSON'u doğru biçimlendirme</a>.
    </p>
  </>
);