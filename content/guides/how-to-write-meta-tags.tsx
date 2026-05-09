import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Meta etiketleri, bir HTML belgesinin <code>&lt;head&gt;</code> kısmında tarayıcıya, arama motoruna veya tarayıcıya verdiğiniz talimatlardır. Çoğu küçüktür, ancak toplu olarak sayfanın nasıl indeksleneceğini, mobilde nasıl görüntüleneceğini, tarayıcının hangi karakter setini kullanacağını, hangi URL'nin kanonik olduğunu, sayfanın hangi dillerde alternatifleri olduğunu ve paylaşıldığında nasıl görüneceğini kontrol ederler. Bir zamanlar kritik olan bazı meta etiketleri artık ölüdür (<code>meta keywords</code> on yılı aşkın süredir büyük arama motorları tarafından dikkate alınmamaktadır). Unutulması kolay olan diğerleri (<code>viewport</code>, <code>charset</code>) eksik olduklarında sayfayı tamamen bozar. Bu kılavuz, 2026'da gerçekten önemli olan etiketleri, ölü ağırlık olanları ve bunların birbirleriyle ve yapılandırılmış verilerle nasıl etkileşime girdiğini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Karakter seti ve görüntü alanı: pazarlık konusu olmayanlar</h2>
    <p>
      <code>&lt;head&gt;</code> içindeki ilk meta etiketi <code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code> olmalıdır. Belgenin ilk 1024 baytı içinde görünmelidir, aksi takdirde tarayıcılar yanlış bir varsayılan kodlamaya geri dönebilir.
      <code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,
      initial-scale=1&quot;&gt;</code> mobil tarayıcılara, uzaklaştırılmış bir masaüstü simülasyonu yerine cihazın gerçek genişliğinde işleme yapmalarını söyler. Bu olmadan, siteniz telefonlarda küçük görünür ve Google'ın mobil uyumluluk testinde başarısız olur, bu da doğrudan mobil sıralamayı etkiler.
    </p>
    <pre>{`<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">`}</pre>

    <h2>Başlık ve açıklama</h2>
    <p>
      <code>&lt;title&gt;</code> etiketi ve <code>&lt;meta name=&quot;description&quot;&gt;</code>
      en yüksek etkiye sahip iki baş öğesidir. Başlık bir sıralama sinyalidir ve SERP
      başlığıdır; açıklama tıklama oranını etkiler. Başlık hedefi 50-60 karakterdir.
      Açıklama hedefi 150-160 karakterdir. Her ikisinin de sayfa başına benzersiz olması gerekir. Ayrıntılı kılavuzlarda ayrı ayrı ele alınmıştır, ancak her meta etiket kontrol listesinde yer aldıkları için burada bahsedilmiştir.
    </p>

    <h2>Robot yönergeleri</h2>
    <p>
      <code>&lt;meta name=&quot;robots&quot; content=&quot;...&quot;&gt;</code> sayfa için tarayıcı
      davranışını kontrol eder. Yaygın değerler: <code>index, follow</code> (varsayılan, atlanabilir), <code>noindex</code> (arama sonuçlarına dahil etme),
      <code>nofollow</code> (bağlantı değerini iletme), <code>noindex, nofollow</code>
      (tamamen hariç tut). Daha spesifik yönergeler arasında <code>noarchive</code> (bir kopyayı önbelleğe alma), <code>nosnippet</code> (bir açıklama gösterme), <code>max-snippet</code>,
      <code>max-image-preview</code> ve <code>max-video-preview</code> bulunur. <code>noindex</code> içeren bir sayfa yine de taranır ancak listelenmez; <code>noindex, nofollow</code> içeren bir sayfa taranır ve ne listelenir ne de herhangi bir bağlantı değeri iletir.
    </p>

    <h2>Kanonik bağlantı</h2>
    <p>
      Teknik olarak bir <code>&lt;meta&gt;</code> değil, bir <code>&lt;link&gt;</code> olan
      kanonik etiketi, herhangi bir meta etiket kontrol listesinde yer almalıdır.
      <code>&lt;link rel=&quot;canonical&quot; href=&quot;https://example.com/page&quot;&gt;</code>
      arama motorlarına, birden çok URL aynı içeriği sunduğunda hangi URL'nin birincil sürüm olduğunu söyler. Mutlak URL'ler kullanın, birincil sayfalarda kendine referans veren kanonikler kullanın ve
      <a href="/learn/canonical-url">kanonik URL'nin</a> gerçekten var olduğundan ve 200 durumu döndürdüğünden emin olun. Var olmayan veya yönlendiren bir URL'yi işaret eden bir kanonik, tarayıcıların kafasını karıştırır.
    </p>

    <h2>Dil ve hreflang alternatifleri</h2>
    <p>
      Kök öğedeki <code>&lt;html lang=&quot;en&quot;&gt;</code>, sayfanın birincil dilini
      ekran okuyucular ve arama motorları için bildirir. Çok dilli siteler için,
      <code>&lt;link rel=&quot;alternate&quot; hreflang=&quot;fr&quot;
      href=&quot;https://example.com/fr/page&quot;&gt;</code> alternatif dil
      sürümlerini listeler. Hreflang karmaşıktır: her varyant diğer her varyanta ve kendisine referans vermelidir; <code>x-default</code> geri dönüşü belirtir; geçersiz kombinasyonlar alternatiflerin indeks dışı kalmasına neden olabilir. Google Search Console, Uluslararası Hedefleme raporunda hreflang hatalarını işaretler.
    </p>
    <pre>{`<link rel="alternate" hreflang="en" href="https://example.com/page" />
<link rel="alternate" hreflang="fr" href="https://example.com/fr/page" />
<link rel="alternate" hreflang="es" href="https://example.com/es/page" />
<link rel="alternate" hreflang="x-default" href="https://example.com/page" />`}</pre>

    <h2>Tema rengi ve uygulama meta verileri</h2>
    <p>
      <code>&lt;meta name=&quot;theme-color&quot; content=&quot;#0066cc&quot;&gt;</code>
      Android Chrome ve iOS Safari Technology Preview'da mobil tarayıcı kromunun (URL çubuğu) rengini kontrol eder. <code>&lt;meta name=&quot;application-name&quot;&gt;</code>
      site, uygun bir PWA manifestosu olmadan bir cihaz ana ekranına kaydedildiğinde kısa adı sağlar. Tam PWA desteği için bunun yerine ayrı bir <code>manifest.json</code> dosyasına bağlantı verin&mdash;manifesto, eski Apple'a özgü meta etiketlerinin çoğunu kapsar.
    </p>

    <h2>Ölü anahtar kelime etiketi</h2>
    <p>
      <code>&lt;meta name=&quot;keywords&quot;&gt;</code> ölüdür. Google en az 2009'dan beri onu dikkate almamaktadır, Bing 2014 civarında onu bir sıralama sinyali olarak kullanmayı bırakmıştır ve çoğu SEO aracı artık varlığını karmaşa olarak işaretlemektedir. Dahil edilmesi doğrudan bir zarar vermez, ancak içerik ekibiniz anahtar kelime meta etiketlerini düzenlemek için zaman harcıyorsa, bu zaman boşa harcanıyordur. Bir sonraki şablon denetimi sırasında kaldırın.
    </p>

    <h2>Open Graph ve Twitter Kartları</h2>
    <p>
      Open Graph etiketleri (<code>og:title</code>, <code>og:description</code>, <code>og:image</code>,
      <code>og:url</code>, <code>og:type</code>) sayfanın Facebook, LinkedIn, Slack, iMessage ve çoğu sohbet uygulamasında paylaşıldığında nasıl önizleneceğini kontrol eder. Twitter Kartı etiketleri
      (<code>twitter:card</code>, <code>twitter:site</code>, <code>twitter:creator</code>)
      Twitter/X paylaşımlarını kontrol eder. Ayrıntılı bir kılavuzda derinlemesine ele alınmıştır. Dizine eklenebilir her sayfaya dört temel og etiketini ekleyin.
    </p>

    <h2>Yönlendiren politikası ve güvenlik başlıkları</h2>
    <p>
      <code>&lt;meta name=&quot;referrer&quot; content=&quot;strict-origin-when-cross-origin&quot;&gt;</code>
      kullanıcılar harici bağlantılara tıkladığında ne kadar yönlendiren bilgisinin gönderileceğini kontrol eder. Yaygın değerler: <code>no-referrer</code>, <code>same-origin</code>,
      <code>strict-origin-when-cross-origin</code> (modern varsayılan),
      <code>unsafe-url</code>. Çoğu site için HTTP yanıt başlıkları bu politika için doğru yerdir, ancak meta etiket geri dönüşleri, bir CDN başlıkları kaldırdığında yardımcı olur.
      İçerik-Güvenlik-Politikası da meta aracılığıyla ayarlanabilir, ancak HTTP başlıkları tercih edilir.
    </p>

    <h2>Doğrulama ve sahiplik etiketleri</h2>
    <p>
      Google Search Console, Bing Web Yöneticisi Araçları, Pinterest, Facebook Alan Adı Doğrulaması ve
      diğerleri, meta etiket tabanlı sahiplik doğrulaması sunar:
      <code>&lt;meta name=&quot;google-site-verification&quot; content=&quot;...&quot;&gt;</code>.
      Birçok site yıllar içinde yarım düzine kadar biriktirir. Güncellerse zararsızdırlar, ancak eskimişlerse baş kısmını karıştırırlar. Artık kullanmadığınız hizmetler için doğrulama etiketlerini periyodik olarak denetleyin ve kaldırın.
    </p>

    <h2>Atlayabileceğiniz eski etiketler</h2>
    <p>
      <code>meta http-equiv=&quot;Content-Type&quot;</code>, <code>meta charset</code> ile gereksizdir. <code>meta name=&quot;author&quot;</code> arama motorları tarafından kullanılmaz&mdash;yazarlık gerekiyorsa yapılandırılmış veri kullanın. <code>meta
      name=&quot;generator&quot;</code> CMS sürümünüzü sızdırır ve kullanıcıya yönelik bir değeri yoktur.
      Apple'a özgü meta etiketleri (<code>apple-mobile-web-app-capable</code>,
      <code>apple-mobile-web-app-title</code>) bir PWA manifestosu ile değiştirilmiştir.
      <code>meta name=&quot;revisit-after&quot;</code> hiçbir zaman büyük bir arama motoru tarafından desteklenmemiştir. Şablon temizliği sırasında bunların tümünü kaldırın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Eksik görüntü alanı.</strong> Görüntü alanı meta etiketi olmadan, mobil masaüstü genişliğinde işlenir ve uzaklaştırılır. Google'ın mobil uyumluluk kontrolünde başarısız olur ve mobil sıralamaları düşürür. Her zaman mevcut olmalıdır.
    </p>
    <p>
      <strong>Karakter seti 1024. baytın altında.</strong> Tarayıcılar, kodlamayı algılamak için ilk kilobaytı ayrıştırır. Karakter seti etiketi bu sınırın altındaysa, tarayıcı yanlış tahmin edebilir ve özel karakterleri bozuk metin olarak işleyebilir.
    </p>
    <p>
      <strong>Noindex'in üretimde bırakılması.</strong> Yanlışlıkla <code>noindex</code> içeren bir hazırlık şablonunu yayınlamak en yaygın SEO felaketlerinden biridir. Yayınlamadan önce robot yönergelerini her zaman denetleyin.
    </p>
    <p>
      <strong>Kanonik'in yanlış URL'yi işaret etmesi.</strong> Birincil sayfalarda kendine referans veren kanonikler; kopyalarda tercih edilen sürüme kanonikler. Yönlendiren veya var olmayan bir URL'ye kanonik, tarayıcıların kafasını karıştırır ve sayfanın indeks dışı kalmasına neden olabilir.
    </p>
    <p>
      <strong>Anahtar kelime meta etiketini tutmak.</strong> Sıfır etki, sürekli editoryal zaman kaybı. Şablonlardan kaldırın.
    </p>
    <p>
      <strong>Hreflang yazım hataları.</strong> Bölge kodları ISO 3166-1'dir (<code>GB</code> gibi, <code>UK</code> değil). Dil kodları ISO 639-1'dir (İbranice için <code>he</code> gibi, <code>iw</code> değil). Yazım hataları alternatifi sessizce yok sayar.
    </p>
    <p>
      <strong>Doğrulama etiketlerinin birikmesi.</strong> Eski Pinterest, Bing ve Yandex doğrulamaları yıllar içinde birikir. Artık ihtiyaç duyulmayanları denetleyin ve kaldırın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Eksiksiz, modern bir meta etiket bloğunu tek seferde{" "}
      <a href="/tools/meta-tag-generator">meta etiket oluşturucu</a> ile oluşturun. Baş kısmının sosyal paylaşım yarısı için{" "}
      <a href="/tools/open-graph-generator">Open Graph oluşturucu</a> ve arama sonuçlarında zengin snippet özelliklerinin kilidini açan <a href="/learn/json-ld">JSON-LD</a>
      yapılandırılmış verileri için{" "}
      <a href="/tools/schema-markup-generator">şema işaretleme oluşturucu</a> ile eşleştirin.
    </p>
  </>
);