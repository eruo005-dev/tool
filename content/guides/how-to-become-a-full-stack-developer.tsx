export const intro = (
  <>
    <p>
      &ldquo;Full-stack&rdquo; en yaygın geliştirici iş unvanıdır çünkü
      çoğu gerçek iş, yığının her iki ucunu da kapsar. Başlangıç seviyesinden
      işe alınabilir bir full-stack geliştirici olmaya giden yol, yaklaşık 12-18 aylık odaklanmış bir çabadır. Bir bootcamp hafta sonu değil, bir ömür değil — gerçekçi bir orta yol.
    </p>
    <p>
      İşte gerçekten işe yarayan müfredat.
    </p>
  </>
);

export const body = (
  <>
    <h2>1. HTML, CSS, JavaScript temelleri</h2>
    <p>
      Herhangi bir framework'ten önce, temel bilgilerle rahat olun. DOM manipülasyonu,
      olay yönetimi, flex ve grid ile CSS düzeni, modern JS (ES6+ sözdizimi,
      promise'ler, async/await). Burada 2-3 aylık projeler yapmak daha sonra karşılığını verir.
    </p>

    <h2>2. Bir ön yüz framework'ü: React</h2>
    <p>
      React iş piyasasında baskındır. Bileşenleri, hook'ları, state yönetimini,
      yönlendirmeyi öğrenin. Gerçek verileri depolayan ve API'lerden veri çeken 3-4 uygulama oluşturun.
      Vue ve Svelte yan projeler için iyidir; faturayı ödeyen React'tir.
    </p>

    <h2>3. Bir arka uç dili + framework'ü</h2>
    <p>
      Birini seçin: Node.js+Express, Python+FastAPI veya Go. Dikkatinizi
      bölmeyin. HTTP, REST, kimlik doğrulama, oturumlar, ara yazılımları öğrenin. Bkz.{" "}
      <a href="/guides/what-is-an-api">API rehberi</a>.
    </p>

    <h2>4. SQL veritabanı akıcılığı</h2>
    <p>
      PostgreSQL veya MySQL. Birleştirmeleri, indeksleri, işlemleri, geçişleri öğrenin. SQL
      sonsuz bir beceridir — öğrendiğiniz her JS framework'ünden daha uzun ömürlü olacaktır.
      Burada ciddi zaman harcayın. MongoDB isteğe bağlıdır; SQL zorunludur.
    </p>

    <h2>5. Git ve GitHub</h2>
    <p>
      İsteğe bağlı değil. Dallar, birleştirmeler, rebase'ler, çekme istekleri. İlk günden
      itibaren her projede kullanın. Birleştirme çakışmalarını panik yapmadan çözebilin.
      İşe alım yöneticileri mülakatlardan önce GitHub'ınızı kontrol eder.
    </p>

    <h2>6. Dağıtım ve temel DevOps</h2>
    <p>
      Vercel, Netlify, Railway, Render — herkes için ücretsiz katmanlar. Bitirdiğiniz her projeyi
      dağıtın. Ortam değişkenlerini, alan adı kurulumunu, HTTPS'yi öğrenin. Dizüstü bilgisayardan
      canlı URL'ye kadar ne olduğunu anlayın.
    </p>

    <h2>7. Doğru yapılmış kimlik doğrulama</h2>
    <p>
      Parola hash'leme, JWT vs. oturumlar, OAuth. Her gerçek uygulama kimlik doğrulama gerektirir ve
      çoğu başlangıç seviyesindeki bunu yanlış yapar. Buna odaklanmış bir hafta sonu ayırın; mülakatlarda
      bir süper güç haline gelir.
    </p>

    <h2>8. Eğitimleri değil, gerçek projeler oluşturun</h2>
    <p>
      Temel bilgilerden sonra, eğitimleri takip etmeyi bırakın. Kendi sorunlarınızı çözen
      kendi projelerinizi oluşturun. Eğitim cehennemi gerçektir. Google + dokümantasyon +
      Stack Overflow + AI döngüsü gerçek öğrenme ortamıdır.
    </p>

    <h2>9. İhtiyacınız olmadan önce TypeScript</h2>
    <p>
      Tip güvenliği ölçekte önemlidir. JS'de rahat olduğunuzda projelerinize TypeScript eklemeye
      başlayın. Birçok üst düzey iş TS'yi zorunlu olarak listeler.
      Kademeli olarak öğrenmek, hepsini birden öğrenmekten daha kolaydır.
    </p>

    <h2>10. Yayınla, dağıt, yinele</h2>
    <p>
      Full-stack geliştirici işi aslında &ldquo;fikri yayınlanmış ürüne dönüştürebilen kişi&rdquo;dir.
      3-5 gerçek proje oluşturun, bunları{" "}
      <a href="/guides/how-to-build-a-developer-portfolio">portföyünüze</a> koyun ve
      başvurun. İlk işinizde, ikinci yıl kendi kendinize çalışmaktan daha fazlasını öğreneceksiniz.
    </p>
  </>
);