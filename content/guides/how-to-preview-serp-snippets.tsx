import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      SERP snippet önizlemesi, sayfanızın yayınlanmadan önce arama sonucunda nasıl görüneceğini gösterir. Üç satırlık blok&mdash;URL, mavi başlık, gri açıklama&mdash;kullanıcının gördüğü gerçek üründür. Her piksel genişlik, her karakter uzunluk ve her kalın sorgu eşleşmesi, kullanıcının sizin sonucunuza mı yoksa üstündekine mi tıklayacağını etkiler. Bir CMS alanında başlık ve açıklamayı izole bir şekilde yazmak bu bağlamı kaybettirir; işe yarayıp yaramadığını bilmek için görüntülemeyi canlandırmanız gerekir. Önizleme araçları, Google'ın düzenini yeterince yakından simüle eder, böylece yayına girmeden önce metin üzerinde yineleme yapabilirsiniz. Bu kılavuz, snippet'in içeriğini, başlık ve açıklama için piksel matematiğini, zengin snippet türlerini, mobil ve masaüstü farklılıklarını ve sıralamaları bozmadan başlıkları A/B test etmeyi kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir SERP snippet'inin anatomisi</h2>
    <p>
      Standart bir Google SERP snippet'i üç görünür öğeye sahiptir: en üstte ekmek kırıntısı benzeri bir URL (önceden tam URL), altında tıklanabilir başlık olan mavi bir başlık ve en altta gri bir açıklama paragrafı. İsteğe bağlı eklemeler arasında sitelinkler (alt sayfa bağlantıları girintili), bir favicon (mobilde), bir yazar görseli veya site adı ve yıldız derecelendirmeleri, SSS akordeonları, fiyat veya stok durumu gibi zengin sonuçlar bulunur. Temel snippet yaklaşık 3-4 satır dikey alan kaplar; zengin snippet'ler bunu ikiye katlayabilir.
    </p>
    <pre>{`toolpazar.com &gt; tools &gt; json-formatter
Free <a href="/tools/json-formatter">JSON Formatter</a> - Beautify, Validate, Minify
Format and validate JSON instantly in your browser. Paste, format,
validate against schema, convert to YAML. No login required.`}</pre>

    <h2>Piksel genişlik matematiği</h2>
    <p>
      Başlık sınırı: yaklaşık 600 piksel, Arial benzeri orantılı yazı tiplerinde kabaca 50-60 karakter. Açıklama sınırı: yaklaşık 920 piksel, kabaca 155-160 karakter. URL sınırı: Google çoğu durumda tam URL yerine bir ekmek kırıntısı gösterir, bu nedenle URL uzunluğu beş yıl öncesine göre daha az görsel öneme sahiptir. Karakter sayıları vekildir; gerçek kesme piksel tabanlıdır. Önizleme araçları, gerçek SERP yazı tiplerini kullanarak tam piksel genişliklerini ölçer, böylece kullanıcının göreceğiyle eşleşir.
    </p>

    <h2>Zengin snippet'ler ve yapılandırılmış veri</h2>
    <p>
      Zengin snippet'ler, yapılandırılmış işaretlemeden (schema.org <a href="/learn/json-ld">JSON-LD</a> veya mikro veri) ek veri çeker ve bunu SERP'de görüntüler. Yaygın zengin snippet türleri: genişletilebilir soru/cevap çiftleriyle SSS, numaralı adımlarla Nasıl Yapılır, fiyat ve derecelendirme ile Ürün, süre ve kalori ile Tarif, yazar ve tarih ile Makale, küçük resim ve süre ile Video, kategori navigasyonu ile Ekmek Kırıntıları ve tarih ve konum ile Etkinlik. Doğru şekilde doğrulanmış yapılandırılmış veriye sahip bir sayfa, zengin snippet'ler için uygundur (garanti değildir). Zengin snippet görüntülemeyi simüle eden bir önizleme aracı, hangi düzeni hedeflemeniz gerektiğini görmenize yardımcı olur.
    </p>

    <h2>Mobil ve masaüstü</h2>
    <p>
      Mobil SERP'ler, düzen, kesme noktaları ve zengin snippet davranışı açısından masaüstünden farklıdır. Mobil başlıklar benzer piksel genişliklerinde kesilir ancak ekrana göre daha büyük görüntülenir. Mobil açıklamalar, görüntü alanı daha dar olduğu için 160 yerine yaklaşık 120 karakterde kesilir. Mobil favicon'lar, masaüstünün genellikle atladığı yerlerde görünür. Mobil ayrıca AMP sonuçlarını farklı şekilde tanıtır (AMP kullanımdan kaldırılmış olsa da) ve eşleşen uygulamalar için uygulama yükleme istemleri gösterir. İyi bir önizleme, mobil ve masaüstü görünümleri arasında geçiş yapar çünkü aynı metin birinde işe yarayıp diğerinde başarısız olabilir.
    </p>

    <h2>URL görüntüleme ve ekmek kırıntıları</h2>
    <p>
      Google, çoğu modern SERP düzeninde URL'leri ekmek kırıntılarına dönüştürür. <code>https://toolpazar.com/tools/json-formatter</code> gibi bir URL, <code>toolpazar.com &gt; tools &gt; json-formatter</code> olarak görüntülenir. Ekmek kırıntısı site yapısını ortaya çıkarır ve varsayılan URL bölümlemesini geçersiz kılan BreadcrumbList yapılandırılmış verisi eklenerek özelleştirilebilir. Bu, derin URL yollarına sahip siteler için önemlidir: temiz bir ekmek kırıntısı hiyerarşisi yapı ve kategori sinyali verir.
    </p>

    <h2>Sorgu terimi vurgulama</h2>
    <p>
      Google, hem başlıkta hem de açıklamada sorgu terimlerini kalın yapar. Arayan kişi &ldquo;json formatter&rdquo; yazdıysa, &ldquo;json formatter&rdquo; kelimeleri başlığınızda ve açıklamanızda kalın olacaktır. Kalın yazı, gözü çeker ve <a href="/learn/ctr">TO</a>'yu ortalama yüzde 3-5 artırır. Sıralamak istediğiniz sorguların her iki alanda da doğal olarak en az bir kez göründüğünden emin olun. Kalın yazmayı simüle eden bir önizleme, kullanıcının gördüğü vurguyu görselleştirmeye yardımcı olur.
    </p>

    <h2>Başlık varyasyonlarını test etme</h2>
    <p>
      SEO'da başlıkları A/B test etmek, ücretli aramadan daha zordur çünkü farklı kullanıcılara farklı başlıklar sunamazsınız&mdash;arama motoru, HTML'nizin ne söylediğini görür. Doğru başlık testi sıralı olarak yapılır: A başlığını yayınlayın, 2-4 hafta bekleyin, Search Console'dan TO kaydedin, B başlığını yayınlayın, 2-4 hafta bekleyin, karşılaştırın. Mevsimsellik, algoritma güncellemeleri ve sıralama kaymasını kontrol edin. SearchPilot ve RankScience gibi araçlar bunu kurumsal ölçekte çalıştırır; küçük siteler için net dokümantasyonla manuel test yapmak iyi çalışır.
    </p>

    <h2>Şema odaklı snippet özellikleri</h2>
    <p>
      Bazı snippet özellikleri belirli yapılandırılmış veri türleri gerektirir. SSS snippet'leri, Soru ve Cevap düğümleriyle FAQPage şeması gerektirir. Nasıl Yapılır snippet'leri, adım dizileriyle HowTo şeması gerektirir. Tarif kartları, pişirme süresi, porsiyon ve kalori ile Recipe şeması gerektirir. Makale yazar adları, yazar ve datePublished ile Article veya NewsArticle şeması gerektirir. Özelliğe güvenmeden önce yapılandırılmış verileri Google'ın Zengin Sonuçlar Testi'nde test edin ve hatalar için Search Console'un İyileştirmeler bölümünü izleyin.
    </p>

    <h2>Görsel, video ve ses küçük resimleri</h2>
    <p>
      Görsel küçük resimleri çoğu durumda haber, tarif ve video sonuçları için görünür. Video küçük resimleri, <code>thumbnailUrl</code>, <code>name</code>, <code>description</code> ve <code>uploadDate</code> ile VideoObject şeması gerektirir. Podcast sonuçları bazen PodcastEpisode şemasından bölüm sanatı gösterir. Görsel bir küçük resmin TO'yu artıracağı sayfalar için gerekli şemayı ekleyin ve görselin Google'ın boyut gereksinimlerini karşıladığını doğrulayın (genellikle en uzun kenarda 1200 piksel, en boy oranı 1:1 ile 16:9 arasında).
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Sadece masaüstünü önizleme.</strong> Mobil, çoğu tüketici nişinde arama trafiğinin yüzde 60'ından fazlasını oluşturur. Masaüstünde çalışıp mobilde bozulan bir snippet, önemli miktarda trafik kaybettirir. Her zaman görünümler arasında geçiş yapın.
    </p>
    <p>
      <strong>Ekmek kırıntısı URL'sini unutma.</strong> Derin URL yolları, başlıkla görsel olarak rekabet edebilecek uzun ekmek kırıntıları haline gelir. Mümkünse kategori yollarını kısaltın veya özel BreadcrumbList verisi ekleyin.
    </p>
    <p>
      <strong>Sadece şema var diye zengin snippet beklemek.</strong> Google, hangi zengin sonuçları göstereceğine yapılandırılmış verinin varlığının ötesinde birçok sinyale dayanarak karar verir. Geçerli şema sizi uygun hale getirir, garanti etmez.
    </p>
    <p>
      <strong>Başlıkları ve açıklamaları arama için değil, önizleme için yazmak.</strong> Bir önizleme aracında harika görünen bir snippet, sayfanızın gerçekten sıralandığı sorgularla eşleşmiyorsa işe yaramaz. Önce amacı eşleştirin, ikinci olarak düzeni optimize edin.
    </p>
    <p>
      <strong>Sorgu kalın yazma sinyalini görmezden gelmek.</strong> Kalın yazılmış terim içermeyen snippet'ler, iki veya üç terim içerenlerden daha az alakalı görünür. Hedef sorgu terimlerini doğal bir şekilde ekleyin.
    </p>
    <p>
      <strong>Sürekli yeniden yazarak test etmek.</strong> Başlıkları haftalık olarak değiştirmek, Google'a ölçüm yapması için asla yeterli sinyal vermez. Her varyasyona en az iki hafta bağlı kalın.
    </p>
    <p>
      <strong>Güncel olmayan önizleme boyutlarını kullanmak.</strong> Google, SERP düzenini kabaca yılda bir kez ayarlar. 2019'da oluşturulmuş bir önizleme aracı, artık geçerli olmayan kesme noktaları gösterebilir. Yakın zamanda güncellenmiş bir araç kullanın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Başlık, URL ve açıklamanın tam olarak nasıl görüntüleneceğini{" "}
      <a href="/tools/serp-snippet-preview">SERP snippet önizlemesi</a> ile görselleştirin. Taahhüt etmeden önce piksel genişliğini doğrulamak için{" "}
      <a href="/tools/title-tag-length-checker">başlık etiketi uzunluk denetleyicisi</a> ile eşleştirin ve SSS, Nasıl Yapılır veya Ürün derecelendirmeleri gibi zengin snippet özelliklerini açan yapılandırılmış veri eklemek istediğinizde{" "}
      <a href="/tools/schema-markup-generator">şema işaretleme oluşturucuyu</a> kullanın.
    </p>
  </>
);