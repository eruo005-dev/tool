import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Schema markup, arama motorlarının sayfanızdaki varlıkları (makaleler, ürünler, etkinlikler, incelemeler, kişiler) anladığı bir kelime dağarcığıyla tanımlayan yapılandırılmış veridir. Doğru uygulandığında, zengin sonuçların kilidini açar: SERP'de yıldız puanları, SSS akordeonları, tarif kartları, ekmek kırıntısı yolları ve Bilgi Grafiği girişleri. Yanlış uygulandığında ise manuel müdahalelere ve sessizce filtrelenmeye yol açar. Kelime dağarcığı <code>schema.org</code>'dan gelir, ancak onu yerleştirmenin üç yolu vardır ve Google'ın 2015'ten beri güçlü bir şekilde tercih ettiği bir format vardır. Bu kılavuz, <a href="/learn/json-ld">JSON-LD</a> ile mikro veri ve RDFa arasındaki farkı, 2026'da zengin sonuçların kilidini açan türleri (Article, Product, FAQPage, BreadcrumbList, Organization, Review), Rich Results Test ve Schema Validator ile nasıl test yapılacağını ve zengin snippet'lerinizi sessizce devre dışı bırakan doğrulama hatalarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>JSON-LD vs mikro veri vs RDFa</h2>
    <p>
      Schema.org verileri üç sözdizimiyle yerleştirilebilir. Her üçü de aynı anlamsal grafiği üretir; işaretlemeyi sarma biçimleri farklıdır.
    </p>
    <p>
      <strong>JSON-LD:</strong> Bir <code> &lt;script type=&quot;application/ld+json&quot;&gt;</code> etiketi içindeki bir JSON nesnesi, genellikle <code>&lt;head&gt;</code> içine yerleştirilir. Görünür HTML ile iç içe geçmez. Google bu formatı açıkça önerir ve çoğu dokümantasyon örneği bunu kullanır.
    </p>
    <p>
      <strong>Mikro veri:</strong> Görünür HTML'ye serpiştirilmiş nitelikler (<code>itemscope</code>, <code>itemtype</code>, <code> itemprop</code>). İşaretleme ve içerik bir arada kalır, bu caziptir ancak şablon değişiklikleri grafiği sessizce bozabilir.
    </p>
    <p>
      <strong>RDFa:</strong> Farklı nitelikler (<code>vocab</code>, <code>typeof</code>, <code> property</code>) kullanan mikro veriye benzer. Modern web'de devlet ve akademik siteler dışında nadiren kullanılır.
    </p>
    <p>
      Aksi bir kısıtlamanız yoksa JSON-LD'yi seçin. Yapılandırılmış verileri CMS'nizin ürettiği DOM'dan ayrı tutmanıza izin veren tek formattır.
    </p>

    <h2>JSON-LD iskeleti</h2>
    <p>
      Her JSON-LD bloğunun bir bağlamı ve bir türü olması gerekir. Geri kalanı, schema.org'da tanımlandığı gibi bu türün özellikleridir.
    </p>
    <pre>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to add schema markup",
  "datePublished": "2026-04-23",
  "author": {
    "@type": "Person",
    "name": "Jay Rivera"
  }
}
</script>`}</pre>
    <p>
      Bağlam için <code>https://schema.org</code> (http değil) kullanın. Doğrulayıcılar her ikisini de kabul eder ancak standart değer https'dir.
    </p>

    <h2>Article &mdash; haber, blog, uzun metin</h2>
    <p>
      <code>Article</code>, <code>NewsArticle</code> veya <code> BlogPosting</code> kullanın. Google'ın Öne Çıkan Haberler için gereklidir: <code>headline</code>, <code>image</code>, <code> datePublished</code> ve logosu 60 pikselden yüksek olmayan bir <code> Publisher</code>. Başlık, Öne Çıkan Haberler'de görünmek için 110 karakter veya daha az olmalıdır; daha uzun başlıklar bazı yüzeylerde kısaltılır.
    </p>

    <h2>Product &mdash; en büyük zengin sonuç kazancı</h2>
    <p>
      <code>Product</code>, <code>offers</code> ve <code> aggregateRating</code> ile birlikte fiyat, stok durumu ve yıldız puanı snippet'leri kazandırır. Minimal örnek:
    </p>
    <pre>{`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mechanical Keyboard K7",
  "image": "https://example.com/k7.jpg",
  "brand": {"@type": "Brand", "name": "Clackco"},
  "offers": {
    "@type": "Offer",
    "price": "129.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "382"
  }
}`}</pre>
    <p>
      Google, incelemelerin insanlar tarafından yazılmasını ve sayfada görünür olmasını gerektirir. Otomatik oluşturulan veya kullanıcılar tarafından görülemeyen puanlar, spam yapılandırılmış veri için manuel müdahaleyi tetikler.
    </p>

    <h2>FAQPage &mdash; güçlü ancak kısıtlı</h2>
    <p>
      Ağustos 2023 itibarıyla Google, SSS zengin sonuçlarını yalnızca yetkili devlet ve sağlık siteleri için gösteriyor. Diğer herkes daha net anlamsal sinyalden faydalanmaya devam ediyor ve snippet'ler daha sonra diğer dikeyler için geri dönebilir.
    </p>
    <pre>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Is JSON-LD case sensitive?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Property names must match schema.org casing exactly."
    }
  }]
}`}</pre>
    <p>
      İşaretlemedeki her soru, görünür sayfada aynen görünmelidir. Sayfanın aslında hiç yanıtlamadığı bir soruyu işaretlemede sormak bir politika ihlalidir.
    </p>

    <h2>BreadcrumbList</h2>
    <p>
      SERP'de gösterilen URL'yi bir ekmek kırıntısı yolu ile değiştirir. <code> position</code> özelliği 1'den başlayan ve artan bir tam sayı olmalıdır. Son öğenin <code>item</code>'i atlanabilir &mdash; Google geçerli sayfayı örtük olarak kabul eder.
    </p>
    <pre>{`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home",
     "item": "https://example.com/"},
    {"@type": "ListItem", "position": 2, "name": "Guides",
     "item": "https://example.com/guides/"},
    {"@type": "ListItem", "position": 3, "name": "Schema"}
  ]
}`}</pre>

    <h2>Organization ve Person</h2>
    <p>
      Site başına bir <code>Organization</code> bloğu, genellikle ana sayfada, markanız için Bilgi Grafiği panelini doldurur. <code>name</code>, <code>url</code>, <code> logo</code> ve <code>sameAs</code> (sosyal ve yetkili profillerinizin bir dizisi) ekleyin. Yazarlar için, her makalenin <code> author</code> alanına bağlı bir <code> Person</code> bloğu ekleyerek yazar yetkisi oluşturun.
    </p>

    <h2>Test araçları</h2>
    <p>
      Yayınlamadan önce her değişikliği iki doğrulayıcıdan geçirin.
    </p>
    <p>
      <strong>Google Rich Results Test</strong> (<code> search.google.com/test/rich-results</code> adresinde) sayfanızın hangi zengin sonuçlara hak kazandığını ve hangi özelliklerin eksik olduğunu söyler.
    </p>
  </>
);