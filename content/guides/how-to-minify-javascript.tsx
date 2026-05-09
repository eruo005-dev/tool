import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      JavaScript'i küçültmek, paket boyutunu azaltır, sayfa yüklemelerini hızlandırır
      ve kullanıcıların yavaş bağlantılarda indirdiği bayt miktarını düşürür.
      Doğru yapıldığında görünmezdir — aynı davranış, daha az kilobayt.
      Yanlış yapıldığında, uygulamanızı canlı ortamda bozar. Bu kılavuz,
      küçültmenin gerçekte ne yaptığını (boşluk kaldırma, değişken yeniden adlandırma,
      ölü kod temizleme), küçültme ile sıkıştırma arasındaki farkı, Terser vs esbuild vs
      SWC kullanma zamanlarını, küçültülmüş kodu hata ayıklamak için kaynak haritalarını,
      küçültülmüş paketleri bozan tuzakları ve modern paketleyicilerin tüm bunları
      otomatik olarak nasıl ele aldığını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Küçültme gerçekte ne yapar</h2>
    <p>
      Bir küçültücü, JavaScript kaynağınızı okur ve anlamsal olarak eşdeğer
      ancak daha küçük kod çıktısı verir. Dönüşümler şunları içerir:
    </p>
    <p>
      <strong>Boşluk kaldırma:</strong> gereksiz boşlukları, sekmeleri
      ve yeni satırları temizler. Genellikle %10-20 tasarruf sağlar.
    </p>
    <p>
      <strong>Değişken yeniden adlandırma (mangling):</strong>{" "}
      <code>totalUserCount</code> değişkenini <code>a</code> olarak yeniden adlandırır.
      Yalnızca yerel kapsam değişkenlerinde çalışır, dışa aktarımlarda veya özelliklerde değil.
      Tanımlayıcı ağırlıklı kodda %30-50 tasarruf sağlar.
    </p>
    <p>
      <strong>Ölü kod temizleme:</strong> ulaşılamaz dalları, kullanılmayan
      içe aktarımları ve <code>process.env.NODE_ENV !== &apos;production&apos;</code> ile
      korunan yalnızca geliştirme kodunu kaldırır.
    </p>
    <p>
      <strong>Sabit katlama:</strong>{" "}
      <code>2 + 3</code> ifadesi <code>5</code> olur.{" "}
      <code>&quot;foo&quot; + &quot;bar&quot;</code> ifadesi{" "}
      <code>&quot;foobar&quot;</code> olur.
    </p>
    <p>
      <strong>Kısa biçim yeniden yazmaları:</strong>{" "}
      <code>true</code> ifadesi <code>!0</code> olur;{" "}
      <code>undefined</code> ifadesi <code>void 0</code> olur. Bayt
      tasarrufu sağlar, okunabilirliği bozar — ancak okunabilirlik
      canlı ortamda önemli değildir.
    </p>

    <h2>Küçültme ve sıkıştırma karşılaştırması</h2>
    <p>
      Küçültme ve gzip/brotli tamamlayıcıdır, gereksiz değildir.
    </p>
    <p>
      <strong>Küçültme</strong>, JS ayrıştırıcısı tarafından görülebilen
      fazlalığı kaldırır.
    </p>
    <p>
      <strong>Sıkıştırma</strong> (gzip, brotli), bayt düzeyinde bir
      algoritma tarafından görülebilen fazlalığı kaldırır.
    </p>
    <p>
      Tipik sonuçlar: 100KB ham JS → 40KB küçültülmüş → 12KB brotli.
      Her ikisi de önemlidir. Küçültme, ayrıştırma süresi için daha önemlidir
      (motor daha küçük girdide daha az iş yapar); sıkıştırma, aktarım
      süresi için daha önemlidir.
    </p>

    <h2>Kaynak haritaları — küçültülmüş kodda hata ayıklama</h2>
    <p>
      Küçültülmüş kod okunamaz. Bir <strong>kaynak haritası</strong>,
      küçültülmüş konumları orijinal kaynağa eşler, böylece tarayıcı
      geliştirici araçları hata ayıklama sırasında size orijinal dosyayı
      gösterebilir.
    </p>
    <p>
      <strong>Satır içi:</strong>{" "}
      <code>//# sourceMappingURL=data:application/json;base64,...</code>{" "}
      JS dosyasına gömülüdür. Dosya boyutunu artırır; yalnızca geliştirme
      için saklayın.
    </p>
    <p>
      <strong>Harici:</strong> <code>//# sourceMappingURL=app.js.map</code>
      {" "}olarak yan dosya. Tarayıcı yalnızca geliştirici araçları
      açıkken getirir.
    </p>
    <p>
      <strong>Gizli kaynak haritaları:</strong> haritayı oluşturun ancak
      JS'de referans vermeyin. Kaynağı herkese açık hale getirmeden
      hata izleme için Sentry/Datadog/Rollbar'a yükleyin.
    </p>
    <p>
      <strong>Kaynağın görünmesini istemiyorsanız, herkese açık URL'lere
      referans veren kaynak haritalarını göndermeyin.</strong> Açık, ancak
      yaygın bir hata.
    </p>

    <h2>Terser, esbuild, SWC — küçültücü seçimi</h2>
    <p>
      <strong>Terser:</strong> çoğu paketleyici için varsayılan. JS ile
      yazılmıştır, yavaştır ancak en küçük çıktıyı üretir. UglifyJS'den
      çatallanmıştır, modern ES sözdizimini işler.
    </p>
    <p>
      <strong>esbuild:</strong> Go ile yazılmıştır. Terser'dan 10-100 kat
      daha hızlıdır. Çıktı biraz daha büyüktür (birkaç yüzde). Bu ödünleşim
      genellikle geliştirme döngü hızı için değerlidir.
    </p>
    <p>
      <strong>SWC:</strong> Next.js ve diğerleri tarafından kullanılan
      Rust tabanlı küçültücü. esbuild gibi hızlıdır, çıktısı Terser ile
      karşılaştırılabilir. Artık çoğu modern araç zincirinde varsayılandır.
    </p>
    <p>
      <strong>Kural:</strong> paketleyicinizin varsayılan olarak ne
      kullandığını kullanın. Farklar küçüktür; değiştirme çabası nadiren
      karşılığını verir.
    </p>

    <h2>Küçültmeden kaynaklanan yaygın bozulmalar</h2>
    <p>
      <strong>Dize tabanlı özellik erişimi:</strong>{" "}
      <code>obj[&quot;longName&quot;]</code> vs{" "}
      <code>obj.longName</code>. Küçültücü ikincisini{" "}
      <code>obj.a</code> olarak değiştirir; dizeyi olduğu gibi bırakır.
      Kodunuz çöker.
    </p>
    <p>
      <strong>Sınıf/fonksiyon adlarında yansıma:</strong>{" "}
      <code>SomeClass.name</code> değeri, karıştırmadan sonra{" "}
      <code>&quot;a&quot;</code> döndürebilir. Sınıf adlarına dayanan
      yönlendirme/DI sistemlerini etkiler.
    </p>
    <p>
      <strong>Dize parametreli Angular stili DI:</strong> eski Angular
      kodu, bağımlılıkları fonksiyon parametre adlarıyla eşleşen dizeler
      olarak bildirirdi. Karıştırma eşleşmeyi bozar. Dizi biçimli
      ek açıklamalar veya <code>ngAnnotate</code> kullanılarak düzeltilir.
    </p>
    <p>
      <strong>Yan etkili modül içe aktarımları:</strong> ağaç sallama,
      yükleme sırasında kod çalıştıran içe aktarımları düşürebilir.
      package.json'da <code>sideEffects: false</code> ayarı, paketleyiciye
      kullanılmayan içe aktarımları kaldırmanın güvenli olduğunu söyler.
    </p>
    <p>
      <strong>Dinamik <code>eval</code>:</strong> küçültülmüş kod
      içindeki <code>eval</code>, değerlendirilen kod yeniden adlandırılmış
      sembollere referans veriyorsa bozulabilir. <code>eval</code>'den kaçının.
    </p>

    <h2>Küçültücülerin yardımcı olamayacağı şeyler</h2>
    <p>
      <strong>Yinelenen kod:</strong> dosyalar arasında kopyala-yapıştır
      yapılmış mantık, küçültmeden sonra iki ayrı kopya olarak kalır
      (kapsamlar arasında tekilleme yok).
    </p>
    <p>
      <strong>Büyük bağımlılıklar:</strong> moment.js içe aktarmak
      küçültülmüş halde ~70KB maliyet getirir. Küçültücü, size ait olmayan
      üçüncü taraf kodunu küçültemez.
    </p>
    <p>
      <strong>Ağaç sallama sınırlamaları:</strong> yalnızca ESM içe
      aktarımları temiz bir şekilde ağaç sallar. CommonJS <code>require()</code>
      dinamiktir; paketleyici neyin kullanılmadığını her zaman kanıtlayamaz.
    </p>

    <h2>Küçültmeyi yapılandırma</h2>
    <p>
      Çoğu ayar, paketleyici yapılandırması üzerinden yapılır. Bilinmeye
      değer yaygın Terser seçenekleri:
    </p>
    <p>
      <strong>drop_console:</strong> canlı ortamda{" "}
      <code>console.log</code> çağrılarını kaldırır.
    </p>
    <p>
      <strong>drop_debugger:</strong> <code>debugger</code>
      {" "}ifadelerini temizler.
    </p>
    <p>
      <strong>pure_funcs:</strong> fonksiyonları yan etkisiz olarak
      işaretler, böylece dönüş değeri kullanılmazsa çağrılar kaldırılır.
    </p>
    <p>
      <strong>reserved:</strong> asla karıştırılmaması gereken adlar
      (ör. DI belirteçleri, genel API yüzeyleri).
    </p>
    <p>
      <strong>keep_classnames / keep_fnames:</strong> yansıma tabanlı
      kod için adları korur.
    </p>

    <h2>Paketleyiciler bunu sizin için yapar</h2>
    <p>
      <strong>Webpack:</strong> varsayılan olarak üretim modunda Terser
      ile küçültür.
    </p>
    <p>
      <strong>Next.js / Vite / Parcel:</strong> üretim derlemelerini
      otomatik olarak küçültür.
    </p>
    <p>
      <strong>esbuild:</strong>{" "}
      <code>--minify</code> bayrağı veya yapılandırmada{" "}
      <code>minify: true</code>.
    </p>
    <p>
      Bağımsız bir küçültücü çalıştırmanız nadiren gerekir. İstisna:
      bir derleme hattının parçası olmayan tek bir dosya veya satır içi
      betik gönderiyorsanız.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Küçültülmemiş kod göndermek.</strong> Derleme çıktınızı
      kontrol edin. Okunabilirse, küçültülmemiştir.
    </p>
    <p>
      <strong>Kaynak haritalarını herkese açık göndermek.</strong>
      Saldırganlar kodunuzu tersine mühendislikle çözebilir. Bir hata
      izleme hizmetine yüklenen gizli kaynak haritalarını kullanın.
    </p>
    <p>
      <strong>Geliştirme derlemelerini küçültmek.</strong> Hata ayıklamayı
      zorlaştırır. Üretim modunu yalnızca üretim için kullanın.
    </p>
    <p>
      <strong>Sunucuda sıkıştırmayı etkinleştirmeyi unutmak.</strong>
      Gzip/brotli olmadan küçültme, tasarrufun %70'ini masada bırakır.
    </p>
    <p>
      <strong>Davranış için sınıf/fonksiyon adlarına güvenmek.</strong>
      Küçültücü bunu sessizce bozar. Açık belirteçler kullanın veya
      karıştırmayı seçici olarak devre dışı bırakın.
    </p>

    <h2>Rakamları görün</h2>
    <p>
      JavaScript'i tarayıcınızda anında küçültmek için{" "}
      <a href="/tools/js-minifier">JS küçültücü</a> aracını kullanın.
      Stil sayfası küçültme için{" "}
      <a href="/tools/css-minifier">CSS küçültücü</a> ile ve küçültmeden
      önce işaretlemeyi temizlemek için{" "}
      <a href="/tools/html-formatter">HTML biçimlendirici</a> ile
      birleştirin.
    </p>
  </>
);