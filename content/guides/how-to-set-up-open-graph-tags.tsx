import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Open Graph etiketleri, bağlantılarınızın paylaşıldığında nasıl görüneceğini kontrol eder — tek bir başlık, tek bir görsel, kısa bir açıklama. İyi bir OG kurulumu, bir URL yapıştırmasını küçük bir reklama dönüştürür. Kötü bir OG kurulumu ise onu kimsenin tıklamadığı çıplak bir bağlantı haline getirir. OG, iyi yapılandırılmış bir blog yazısının LinkedIn'de paylaşıldığında profesyonel görünmesinin, kötü yapılandırılmış birinin ise bozuk görünmesinin nedenidir. Bu kılavuz, tam OG spesifikasyonunu (her etiketin ne işe yaradığı, hangilerinin zorunlu olduğu), her büyük platform için görsel gereksinimlerini, türe özgü varyantları (makale, ürün, video), kurulumunuzu her platformun hata ayıklayıcısıyla nasıl test edeceğinizi ve herkesin takıldığı LinkedIn, Discord, Slack ve iMessage ayrıştırma tuhaflıklarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Open Graph Nedir</h2>
    <p>
      Open Graph, Facebook'un 2010 yılında web sayfalarının zengin önizlemeler için kendi meta verilerini bildirmesine izin vermek amacıyla tanıttığı bir protokoldür. Artık tüm büyük sosyal ve mesajlaşma platformları tarafından kullanılmaktadır — Facebook, Instagram (Facebook üzerinden), LinkedIn, Slack, Discord, iMessage, WhatsApp, Telegram, Signal.
    </p>
    <p>
      OG etiketleri, <code>&lt;head&gt;</code> içinde <code>property=&quot;og:*&quot;</code> ile meta etiketler olarak bulunur:
    </p>
    <p>
      <code>&lt;meta property=&quot;og:title&quot; content=&quot;Sayfa Başlığı&quot;&gt;</code>
      <br />
      <code>&lt;meta property=&quot;og:description&quot; content=&quot;Açıklama&quot;&gt;</code>
      <br />
      <code>&lt;meta property=&quot;og:image&quot; content=&quot;https://ornek.com/resim.jpg&quot;&gt;</code>
      <br />
      <code>&lt;meta property=&quot;og:url&quot; content=&quot;https://ornek.com/sayfa&quot;&gt;</code>
      <br />
      <code>&lt;meta property=&quot;og:type&quot; content=&quot;article&quot;&gt;</code>
    </p>
    <p>
      Not: OG, <code>name=</code> değil <code>property=</code> kullanır. Facebook'un ayrıştırıcısı için zorunludur.
    </p>

    <h2>Zorunlu Etiketler</h2>
    <p>
      <strong>og:title</strong> — önizleme kartı için başlık. <code>&lt;title&gt;</code>'den farkı, özellikle paylaşım için olmasıdır (daha kısa/çarpıcı olabilir). Eksikse, <code>&lt;title&gt;</code>'e geri döner.
    </p>
    <p>
      <strong>og:url</strong> — bu kaynağın <a href="/learn/canonical-url">kurallı URL'si</a>. Paylaşılan önizleme, mevcut URL'ye değil, bu URL'ye bağlanır. Birden çok URL aynı içeriğe yönlendirdiğinde kullanışlıdır.
    </p>
    <p>
      <strong>og:image</strong> — önizleme görseli. <a href="/learn/ctr">TO</a> için en etkili tek OG etiketi.
    </p>
    <p>
      <strong>og:type</strong> — içerik kategorisi. Yoksa varsayılan olarak <code>website</code> olur.
    </p>
    <p>
      <strong>og:description</strong> — başlığın altındaki kısa açıklama. İsteğe bağlıdır ancak yoğun olarak kullanılır; atlanması önizlemeyi zayıf bırakır.
    </p>

    <h2>og:image Özellikleri</h2>
    <p>
      <strong>Önerilen boyut:</strong> 1200&times;630 piksel (1.91:1 en-boy oranı). Tüm platformlarda çalışır. Facebook 1200&times;630 olarak görüntüler; Twitter 2:1'e (ortalanmış) kırpar; LinkedIn 1200&times;627'ye kırpar; Slack 1200&times;630'u korur.
    </p>
    <p>
      <strong>Minimum boyut:</strong> 600&times;315. Bunun altında, Facebook ve LinkedIn bazen büyük kart olarak işlemeyi reddeder, küçük bir küçük resme geri döner.
    </p>
    <p>
      <strong>Dosya boyutu:</strong> Facebook için 8MB'ın altında, diğerleri için 5MB'ın altında. Pratikte, yükleme hızı için 300KB'ın altında olması akıllıcadır.
    </p>
    <p>
      <strong>Biçim:</strong> PNG, JPG veya WebP. SVG'den kaçının — çoğu ayrıştırıcı onu işlemez.
    </p>
    <p>
      <strong>Görsel üzerinde metin:</strong> başlığı görsel metni olarak tekrar ekleyin. Kullanıcılar görsel olarak daha hızlı tarar ve başlık aşağıda işlenirse, pekiştirme tıklama oranını artırır.
    </p>
    <p>
      <strong>Güvenli bölge:</strong> kritik içeriği merkez 1000&times;500 alanında tutun. Farklı platformlar kenarlarda farklı şekilde kırpar.
    </p>

    <h2>İsteğe Bağlı Ama Kullanışlı Etiketler</h2>
    <p>
      <strong>og:image:alt</strong> — görsel için alternatif metin. Erişilebilirlik + küçük bir SEO artışı.
    </p>
    <p>
      <strong>og:image:width, og:image:height</strong> — açık boyutlar. Bazı ayrıştırıcıların daha hızlı işlemesine izin verir, küçük kartlara geri dönmeyi önler.
    </p>
    <p>
      <strong>og:image:type</strong> — MIME türü. Nadiren gerekir.
    </p>
    <p>
      <strong>og:locale</strong> — <code>en_US</code>, <code>fr_FR</code> vb. Varsayılan <code>en_US</code>'dir.
    </p>
    <p>
      <strong>og:locale:alternate</strong> — mevcut diğer yerel ayarların listesi. Çok dilli siteler için kullanışlıdır.
    </p>
    <p>
      <strong>og:site_name</strong> — marka adınız. Platforma bağlı olarak kartın üstünde veya altında işlenir.
    </p>

    <h2>Makaleye Özgü Etiketler</h2>
    <p>
      <code>og:type=&quot;article&quot;</code> olduğunda, daha zengin önizlemeler için bunları ekleyin:
    </p>
    <p>
      <code>article:published_time</code> (ISO 8601)
      <br />
      <code>article:modified_time</code>
      <br />
      <code>article:author</code> (yazar sayfasının URL'si)
      <br />
      <code>article:section</code> (konu kategorisi)
      <br />
      <code>article:tag</code> (etiket başına bir tane; tekrarlanabilir)
    </p>

    <h2>Ürüne Özgü Etiketler</h2>
    <p>
      <code>og:type=&quot;product&quot;</code> olduğunda:
    </p>
    <p>
      <code>product:price:amount</code>, <code>product:price:currency</code>, <code>product:availability</code> (<code>in stock</code>, <code>out of stock</code>, <code>preorder</code>), <code>product:condition</code> (<code>new</code>, <code>used</code>, <code>refurbished</code>).
    </p>
    <p>
      Bunlar, Facebook Shop entegrasyonlarına ve ticaret önizlemelerine beslenir.
    </p>

    <h2>Videoya Özgü Etiketler</h2>
    <p>
      OG önizlemelerinde video yerleştirmeleri için:
    </p>
    <p>
      <code>og:video</code> (oynatıcının URL'si)
      <br />
      <code>og:video:type</code> (<code>video/mp4</code>, yerleştirmeler için <code>text/html</code>)
      <br />
      <code>og:video:width</code>, <code>og:video:height</code>
    </p>
    <p>
      Yalnızca Facebook, OG videolarını akışta tam olarak oynatır. Twitter kendi video etiketlerini kullanır. Çoğu platform görsele geri döner.
    </p>

    <h2>Twitter Kart Uyumluluğu</h2>
    <p>
      X, <code>twitter:*</code> etiketlerini okur, OG'ye geri döner. Minimum Twitter etiket seti:
    </p>
    <p>
      <code>&lt;meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot;&gt;</code>
      <br />
      <code>&lt;meta name=&quot;twitter:site&quot; content=&quot;@markaniz&quot;&gt;</code>
    </p>
    <p>
      <code>summary_large_image</code> büyük 2:1 önizlemeyi kullanır. <code>summary</code> küçük bir kare küçük resim kullanır.
    </p>
    <p>
      OG'niz tamamlanmışsa, Twitter tarafında ihtiyacınız olan tek şey budur.
    </p>

    <h2>Platform Tuhaflıkları</h2>
    <p>
      <strong>LinkedIn:</strong> agresif bir şekilde önbelleğe alır. LinkedIn kartınızı bir kez aldığında, değişiklikler günlerce görünmez. Yenilemeyi zorlamak için Post Inspector aracını kullanın.
    </p>
    <p>
      <strong>Slack:</strong> hızlı işler ancak boyutlar konusunda katıdır. Açık <code>og:image:width</code> ve <code>og:image:height</code> ekleyin.
    </p>
    <p>
      <strong>Discord:</strong> kanala göre agresif önbelleğe alma. Temizlemek için sunucu yöneticisi araçları gerekir. Değişiklikleri test etmek için farklı bir kanalda yeniden paylaşın.
    </p>
    <p>
      <strong>iMessage:</strong> Apple, birçok geri dönüşle kendi ayrıştırmasını yapar. Genellikle kutudan çıktığı gibi çalışır ancak dinamik içerikle kırılgandır.
    </p>
    <p>
      <strong>WhatsApp:</strong> bir konuşma süresince önbelleğe alır. Yalnızca küçük önizlemeler.
    </p>
    <p>
      <strong>Bluesky, Mastodon:</strong> her ikisi de OG'ye saygı duyar. Bluesky daha büyük görselleri (4MB'a kadar) destekler.
    </p>

    <h2>Dinamik OG Görselleri</h2>
    <p>
      Modern çerçeveler (Next.js, Vercel Edge, Cloudflare Workers) sayfa başına OG görselleri oluşturabilir — başlık katmanı, yazar fotoğrafı, gradyan arka plan. Vercel'in <code>@vercel/og</code>'si, istek anında SVG'den PNG'ye işlenmiş görseller gönderir.
    </p>
    <p>
      Faydaları: her sayfa benzersiz, markalı bir önizleme alır. Maliyeti: ilk paylaşım başına bir kenar işlevi çağrısı. Önbellek başlıkları bunu amorti eder.
    </p>

    <h2>Yayınlamadan Önce Test Etme</h2>
    <p>
      <strong>Facebook Paylaşım Hata Ayıklayıcısı:</strong> <code>developers.facebook.com/tools/debug</code>. URL'yi yapıştırın, Facebook'un ne gördüğünü görün. "Scrape Again" yeniden getirmeyi zorlar.
    </p>
    <p>
      <strong>LinkedIn Post Inspector:</strong> <code>linkedin.com/post-inspector</code>. Herhangi bir OG değişikliğinden sonra gereklidir — aksi takdirde LinkedIn ~7 gün önbelleğe alır.
    </p>
    <p>
      <strong>Twitter Kart Doğrulayıcı:</strong> kullanımdan kaldırıldı ancak X hala OG'yi işler; vekil olarak Facebook hata ayıklayıcısını kullanın.
    </p>
    <p>
      <strong>Manuel test:</strong> her platformda kendinize bir bağlantı DM olarak gönderin. Önizlemenin ekran görüntüsünü alın. Niyetinizle karşılaştırın.
    </p>

    <h2>Yaygın Hatalar</h2>
    <p>
      <strong>Göreli URL'ler kullanmak</strong> <code>og:image</code> veya <code>og:url</code> için. Protokolle (<code>https://</code>) mutlak olmalıdır.
    </p>
    <p>
      <strong>JavaScript tarafından ayarlanan OG etiketlerini yayınlamak.</strong> Çoğu ayrıştırıcı JS çalıştırmaz. <a href="/learn/ssr">SSR</a> veya ön işleme.
    </p>
    <p>
      <strong>Yanlış görsel boyutları.</strong> 800&times;800 kare görseller çoğu platformda şeritler halinde kırpılır. 1.91:1 kullanın.
    </p>
    <p>
      <strong>Sayfalar arasında aynı OG etiketleri.</strong> Her sayfanın benzersiz <code>og:title</code>, <code>og:description</code>, <code>og:image</code>'a ihtiyacı vardır. Sayfa içeriğinden otomatik oluşturma standart uygulamadır.
    </p>
    <p>
      <strong>og:url'yi atlamak.</strong> Kurallaştırma zarar görür. Bağlantılar yeniden paylaşıldığında, atıf kaybederler.
    </p>
    <p>
      <strong>property= ve name='i birbirinin yerine kullanmak.</strong> OG, <code>property=</code> ister. Twitter, <code>name=</code> ister. Farklıdırlar.
    </p>
    <p>
      <strong>Büyük og:image dosyaları.</strong> 4MB OG görselleri, mobil operatörlerde önizlemeleri yavaşlatır. Mümkün olduğunda 300KB'ın altında tutun.
    </p>

    <h2>Rakamları Çalıştırın</h2>
    <p>
      <a href="/tools/open-graph-generator">Open Graph oluşturucu</a> ile tam bir OG etiket bloğu oluşturun. Daha geniş SEO meta yığını için <a href="/tools/meta-tag-generator">meta etiket oluşturucu</a> ve OG görselinizi tam olarak 1200&times;630'a getirmek için <a href="/tools/image-resizer">görsel yeniden boyutlandırıcı</a> ile eşleştirin.
    </p>
  </>
);