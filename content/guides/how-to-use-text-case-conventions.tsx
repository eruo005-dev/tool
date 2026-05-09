import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      camelCase, PascalCase, snake_case, kebab-case, SCREAMING_CASE,
      Title Case — ve bunlar birbirinin yerine kullanılamaz. Bunları
      tek bir kod tabanında karıştırmak amatörce görünür; bir URL veya
      ortam değişkeni için yanlış olanı seçmek sessizce sorun çıkarır.
      Bu kılavuz, her bir büyük/küçük harf kuralını, hangi bağlamda
      standart olduğunu, her seçimin ardındaki mantığı, uç durumları
      (kısaltmalar, sayılar, baştaki alt çizgiler) ve üst düzey kod
      tabanlarının takip ettiği stil kılavuzu kurallarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Kullanacağınız altı büyük/küçük harf kuralı</h2>
    <p>
      <strong>camelCase:</strong> ilk kelime küçük harf, sonraki
      kelimeler büyük harfle başlar. <code>userName</code>, <code>getUserById</code>.
      JavaScript, Java, Kotlin, Swift değişkenleri ve fonksiyonları.
    </p>
    <p>
      <strong>PascalCase</strong> (diğer adıyla UpperCamelCase): her
      kelime büyük harfle başlar. <code>UserAccount</code>, <code>HttpRequest</code>.
      Sınıf adları, türler, React bileşenleri, Go dışa aktarılan
      tanımlayıcılar.
    </p>
    <p>
      <strong>snake_case:</strong> küçük harfli kelimeler alt çizgi
      ile birleştirilir. <code>user_name</code>, <code>get_user_by_id</code>.
      Python, Ruby, Rust değişkenleri; PostgreSQL ve çoğu SQL veritabanı
      şeması.
    </p>
    <p>
      <strong>SCREAMING_SNAKE_CASE:</strong> büyük harfler ve alt
      çizgiler. <code>MAX_RETRIES</code>, <code>API_KEY</code>.
      Hemen hemen her dilde sabitler ve ortam değişkenleri.
    </p>
    <p>
      <strong>kebab-case</strong> (diğer adıyla lisp-case veya dash-case):
      küçük harfler ve tireler. <code>user-name</code>, <code>my-app-
      config</code>. URL'ler, CSS sınıf adları, HTML özellikleri, CLI
      bayrakları.
    </p>
    <p>
      <strong>Title Case:</strong> her ana kelime büyük harfle başlar ve
      aralarında boşluk olur. <code>The Quick Brown Fox</code>. Makale
      başlıkları, başlıklar, kitap adları, UI etiketleri.
    </p>

    <h2>Büyük/küçük harf kuralını bağlama göre eşleştirme</h2>
    <p>
      <strong>JavaScript / TypeScript:</strong>
    </p>
    <p>
      Değişkenler, fonksiyonlar, metotlar için camelCase. Sınıflar,
      türler, bileşenler, arayüzler için PascalCase. Sabitler için
      SCREAMING_SNAKE_CASE. Dosya adları için genellikle kebab-case,
      ancak React bileşen dosyaları için PascalCase de yaygındır.
    </p>
    <p>
      <strong>Python:</strong>
    </p>
    <p>
      Değişkenler, fonksiyonlar, modüller için snake_case. Sınıflar
      için PascalCase. Modül düzeyindeki sabitler için
      SCREAMING_SNAKE_CASE. Baştaki alt çizgi (<code>_private</code>)
      dahili kullanımı belirtir; çift baştaki alt çizgi
      (<code>__dunder</code>) sınıflarda ad karıştırmayı tetikler.
    </p>
    <p>
      <strong>Go:</strong>
    </p>
    <p>
      Dışa aktarılmayanlar için camelCase. Dışa aktarılanlar (public)
      için PascalCase. Görünürlük büyük/küçük harf ile kodlanmıştır —
      dil bunu zorunlu kılar, bu nedenle kural isteğe bağlı değildir.
    </p>
    <p>
      <strong>Ruby:</strong>
    </p>
    <p>
      Değişkenler ve metotlar için snake_case. Sınıflar ve modüller
      için PascalCase. Sabitler için SCREAMING_SNAKE_CASE (Ruby
      zorunlu kılar — büyük harfle başlamak = sabit).
    </p>
    <p>
      <strong>Rust:</strong>
    </p>
    <p>
      Değişkenler ve fonksiyonlar için snake_case. Türler, özellikler
      ve enum'lar için PascalCase. Sabitler ve statikler için
      SCREAMING_SNAKE_CASE.
    </p>
    <p>
      <strong>SQL (çoğu lehçe):</strong>
    </p>
    <p>
      Tablolar, sütunlar, indeksler için snake_case. Tanımlayıcılar
      büyük/küçük harfe duyarsızdır ancak kurallar önemlidir:
      <code>user_profiles</code>, <code> created_at</code>.
    </p>
    <p>
      <strong>CSS:</strong>
    </p>
    <p>
      Sınıf adları ve özel özellikler için kebab-case.
      <code> .nav-item</code>, <code>--text-color</code>. HTML
      özellikleri aynı kurala tabidir: <code>data-user-id</code>.
    </p>
    <p>
      <strong>URL'ler:</strong>
    </p>
    <p>
      Yollar ve slug'lar için kebab-case. <code>/blog/how-to-use-css-gradients</code>,
      <code>/blog/how_to_use_css_gradients</code> değil. Google,
      kelime ayırıcı olarak alt çizgiler yerine tirelerin tercih
      edildiğini onaylamıştır.
    </p>
    <p>
      <strong>Dosya adları:</strong>
    </p>
    <p>
      kebab-case en güvenlisidir (platformlar arası, kaçış karakteri
      gerektirmez, URL güvenli). İstisnalar: React bileşen dosyaları
      (<code>UserCard.jsx</code>), Python modülleri
      (<code>user_service.py</code>).
    </p>
    <p>
      <strong>Ortam değişkenleri:</strong>
    </p>
    <p>
      SCREAMING_SNAKE_CASE. <code>DATABASE_URL</code>,
      <code> NODE_ENV</code>. Tüm kabuklarda, CI sistemlerinde,
      konteyner orkestratörlerinde evrenseldir.
    </p>

    <h2>Kısaltmalar — en zor uç durum</h2>
    <p>
      &ldquo;HTTP sunucusu&rdquo; camelCase'de nasıl yazılır?
    </p>
    <p>
      <strong>Standart (Google, Microsoft, Go):</strong> kısaltmalar
      büyük harf kalır. <code>HTTPServer</code>, <code>parseXMLFile</code>.
      Kısaltmayı tek bir birim olarak ele alır.
    </p>
    <p>
      <strong>Alternatif (Java, eski Microsoft):</strong> kısaltmaları
      kelime olarak ele alır. <code>HttpServer</code>, <code>parseXmlFile</code>.
      Görsel olarak ayrıştırması daha kolaydır; alt sınıflarda
      belirsizliği önler (<code>HttpServerFactory</code> vs
      <code>HTTPServerFactory</code>).
    </p>
    <p>
      <strong>2026 pratiğinde:</strong> &ldquo;kısaltmaları kelime
      olarak ele al&rdquo; stili (<code>HttpServer</code>) çoğunlukla
      kazandı, özellikle yeni TypeScript ve JavaScript kod tabanlarında.
      Go hala tümü büyük harf kısaltmaları stil spesifikasyonunun bir
      parçası olarak koruyor.
    </p>
    <p>
      Birini seçin, belgeleyin, uygulayın. Aynı dosyada
      <code> HTTPClient</code> ve <code>XmlParser</code>'ı karıştırmayın.
    </p>

    <h2>Tanımlayıcılarda sayılar</h2>
    <p>
      Sayılar, genellikle ayırıcı olmadan bitişik kelimeye eklenir:
      <code>parseH264Stream</code>, <code>connectIPv6</code>.
    </p>
    <p>
      snake_case'de: <code>parse_h264_stream</code>, <code>connect_ipv6</code>.
      Sayı bitişik kalır; kelimelerin etrafında hala ayırıcı bulunur.
    </p>
    <p>
      <strong>Baştaki rakamlar çoğu dilde geçersizdir.</strong>
      <code>1stPlace</code> → ya <code>firstPlace</code> ya da
      <code>placeOne</code>.
    </p>

    <h2>Title Case kuralları</h2>
    <p>
      Başlıklar ve görüntü metinleri için Title Case, sadece &ldquo;her
      kelimeyi büyük harfle başlat&rdquo; değildir. Kurallar mevcuttur:
    </p>
    <p>
      <strong>APA stili:</strong> ilk ve son kelimeleri büyük harfle
      başlatın; tüm ana kelimeleri (isimler, fiiller, sıfatlar,
      zarflar) büyük harfle başlatın; edatları (a, an, the), kısa
      edatları (of, in, for) ve bağlaçları (and, but, or) küçük harf
      yazın. &ldquo;How to Choose a Color Palette for a Website.&rdquo;
    </p>
    <p>
      <strong>Chicago stili:</strong> benzer ancak 4+ harfli edatları
      (about, after, above) büyük harfle başlatır.
    </p>
    <p>
      <strong>Sentence case:</strong> yalnızca ilk kelime büyük harfle
      başlar, artı özel isimler. &ldquo;How to choose a color palette
      for a website.&rdquo; Modern ürün arayüzlerinde popülerdir
      (Slack, Stripe, GitHub).
    </p>
    <p>
      <strong>TÜMÜ BÜYÜK HARF:</strong> bağırmak. Çok kısa etiketler
      ve bildirimler için kullanışlıdır; paragraf uzunluğunda yorucudur
      (okuma hızını ~%15-20 azaltır).
    </p>

    <h2>Büyük/küçük harf kuralları arasında programatik dönüşüm</h2>
    <p>
      Programatik olarak dönüştürmeniz gerektiğinde, çoğu dilde
      kütüphaneler veya hızlı regex yaklaşımları bulunur:
    </p>
    <p>
      <strong>camelCase → snake_case:</strong> büyük harfleri alt çizgi
      + küçük harf ile değiştirin. <code>someText.replace(/
      ([A-Z])/g, &quot;_$1&quot;).toLowerCase()</code>.
    </p>
    <p>
      <strong>snake_case → camelCase:</strong> alt çizgi + harfi büyük
      harf ile değiştirin. <code>someText.replace(/_([a-z])/g,
      (_, c) =&gt; c.toUpperCase())</code>.
    </p>
    <p>
      <strong>Kütüphaneler:</strong> lodash'te <code>_.camelCase</code>,
      <code> _.snakeCase</code>, <code>_.kebabCase</code>, <code>
      _.startCase</code> bulunur. Python'da <code>inflection</code>
      vardır. Ruby'de bunlar ActiveSupport'a dahildir.
    </p>

    <h2>Okumaya değer stil kılavuzları</h2>
    <p>
      <strong>Google:</strong> JavaScript, Python, Java, Go, C++,
      Shell için dile özgü stil kılavuzları.
    </p>
    <p>
      <strong>Airbnb JavaScript stil kılavuzu:</strong> modern JS için
      endüstri standardı. Tanımlayıcı türü başına büyük/küçük harf
      kurallarını detaylandırır.
    </p>
    <p>
      <strong>PEP 8:</strong> Python adlandırma kuralı İncili.
    </p>
    <p>
      <strong>Effective Go:</strong> resmi Go büyük/küçük harf ve
      adlandırma kuralları.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Tek bir kod tabanında kuralları karıştırmak.</strong>
      camelCase fonksiyonların yanında snake_case fonksiyonların
      olduğu bir Python projesi, kafa karışıklığı yayan bir kod
      kokusudur.
    </p>
    <p>
      <strong>URL'lerde snake_case kullanmak.</strong> Tireler SEO
      açısından daha güvenlidir. Alt çizgiler, boşlukların orada
      olduğu ve bozulduğu izlenimini verir; arama motorları kısa
      çizgileri kelime ayırıcı olarak ele alır.
    </p>
    <p>
      <strong>API alan adlarıyla eşleşen veritabanı sütun adlarını
      büyük/küçük harf kuralına sokmak.</strong> Veritabanı snake_case;
      API genellikle camelCase'dir. Ya sınırda dönüştürün ya da
      uyumsuzluğu kabul edin — ikisini de yarım yamalak yapmayın.
    </p>
    <p>
      <strong>Title Case'i aşırı büyük harfle başlatmak.</strong>
      &ldquo;The How Of&rdquo; yanlış görünür çünkü <code>Of</code>
      çoğu stilde büyük harfle başlamamalıdır.
    </p>
    <p>
      <strong>Tutarsız kısaltma kullanımı.</strong> &ldquo;Http&rdquo;
      veya &ldquo;HTTP&rdquo; seçin ve tüm projede buna bağlı kalın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Metni tüm yaygın büyük/küçük harf kuralları arasında anında
      dönüştürmek için{" "}
      <a href="/tools/case-converter">büyük/küçük harf dönüştürücüyü</a>{" "}
      kullanın. Başlıklardan URL güvenli kebab-case üretmek için{" "}
      <a href="/tools/slug-generator">slug oluşturucu</a> ile ve bir
      dosyadaki tanımlayıcıları yeniden adlandırırken öncesi/sonrasını
      karşılaştırmak için{" "}
      <a href="/tools/diff-checker">fark denetleyici</a> ile birlikte
      kullanın.
    </p>
  </>
);