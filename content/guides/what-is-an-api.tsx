export const intro = (
  <>
    <p>
      API'ler modern yazılımın tesisatıdır. Kullandığınız her uygulama — Slack, Spotify,
      Uber — diğer API'lerle konuşan bir API yığınıdır. Bunları anlamak, programlama
      öğrendikten sonra belki de en önemli kavramdır.
    </p>
    <p>
      Bu kılavuz, API'leri sade bir dille, gerçekten kullanabileceğiniz kadar ayrıntıyla
      açıklar. Laf kalabalığı yok.
    </p>
  </>
);

export const body = (
  <>
    <h2>1. API = &ldquo;Uygulama Programlama Arayüzü&rdquo;</h2>
    <p>
      Bir programın diğeriyle konuşmasını sağlayan bir sözleşme. Bir istek gönderirsiniz,
      bir yanıt alırsınız. Klasik benzetme: bir restoran menüsü. Mutfağa nasıl
      pişirileceğini söylemezsiniz — adıyla sipariş verirsiniz, onlar teslim eder.
    </p>

    <h2>2. Bir web API'si neye benzer</h2>
    <p>
      <code>https://api.example.com/users/42</code> gibi bir URL. Bir HTTP isteği gönderirsiniz,
      genellikle JSON alırsınız. Modern web bağlamında &ldquo;API&rdquo;nin %95'i budur.
    </p>

    <h2>3. HTTP yöntemleri bir nefeste</h2>
    <p>
      GET okumak için. POST oluşturmak için. PUT/PATCH güncellemek için. DELETE silmek için.
      REST alfabesinin tamamı budur. Farklı fiiller, aynı URL yapısı — fiil sunucuya ne
      istediğinizi söyler.
    </p>

    <h2>4. Durum kodları önemlidir</h2>
    <p>
      2xx = başarı. 3xx = yönlendirme. 4xx = sizin hatanız (400 hatalı istek, 401 kimlik
      doğrulama eksik, 404 bulunamadı). 5xx = onların hatası (500 sunucu hatası). Kodları
      hızlı okumak bir hata ayıklama becerisidir.
    </p>

    <h2>5. JSON ortak dildir</h2>
    <p>
      Çoğu API JSON gönderir ve alır: {`{"name": "Ada", "age": 30}`}. Anahtarlar string,
      değerler string/sayı/boolean/dizi/nesne olabilir. Her dilde yerleşik JSON desteği
      vardır. Hızlı dönüşümler için <a href="/tools/json-to-csv">JSON'dan CSV'ye dönüştürücü</a>
      {' '}sayfasına bakın.
    </p>

    <h2>6. Kimlik doğrulama: API anahtarları ve token'lar</h2>
    <p>
      Çoğu API, <code>Authorization: Bearer xyz123</code> gibi bir başlıkta gönderilen bir
      API anahtarı (gizli bir string) gerektirir. Anahtarları asla git'e eklemeyin. Ortam
      değişkenleri kullanın. Bu, startup'larda en yaygın güvenlik hatasıdır.
    </p>

    <h2>7. REST vs GraphQL vs RPC</h2>
    <p>
      REST, URL'ler + HTTP fiilleri kullanır. GraphQL, esnek bir şekilde sorgulayabileceğiniz
      tek bir uç nokta sunar. RPC (gRPC), ağ üzerinden fonksiyon çağrılarıdır. REST
      varsayılandır; diğerleri özelleşmiştir. <a href="/guides/rest-vs-graphql">REST vs GraphQL</a>
      sayfasına bakın.
    </p>

    <h2>8. Bir API nasıl test edilir</h2>
    <p>
      curl, Postman veya Insomnia kullanın. Uç noktaya istek atın, yanıtı inceleyin.
      Dokümanlar bazen yalan söyler — gerçek sözleşme, sunucunun gerçekte döndürdüğüdür.
      Üzerine inşa etmeden önce test edin.
    </p>

    <h2>9. Hız sınırları ve sayfalama</h2>
    <p>
      Çoğu API, dakikada kaç istek yapabileceğinizi sınırlar ve büyük sonuç kümelerini
      sayfalar. Sınırlara saygı gösterin, 429 yanıtlarını işleyin, sayfalama bağlantılarını
      takip edin. Prod'da hız sınırlarına takılmak acemi hatasıdır.
    </p>

    <h2>10. Webhook'lar = ters API'ler</h2>
    <p>
      Normalde siz onları ararsınız. Webhook'larda, bir şey olduğunda (yeni sipariş, mesaj
      vb.) onlar sizi arar. Onlara bir URL verirsiniz, onlar POST yapar. Olay odaklı
      akışlar için harikadır.
    </p>

    <h2>11. Dokümantasyon her şeydir</h2>
    <p>
      İyi API dokümanları benimsenmeyi sağlar veya engeller. Stripe altın standarttır.
      Kendi API'nizi oluştururken dokümanlar kod kadar önemlidir. Kötü dokümanlar
      kullanıcıların pes etmesine neden olur.
    </p>

    <h2>12. Kendi API'nizi oluşturmak</h2>
    <p>
      Bir dil/çerçeve seçin (Express, FastAPI, Go net/http). Rotaları tanımlayın. JSON
      döndürün. Kimlik doğrulama ekleyin. Dağıtın. Bir API oluşturdunuz. Kavram,
      jargonun ima ettiğinden daha basittir. Bağlam için <a href="/guides/frontend-vs-backend-development">frontend
      vs backend</a> sayfasına bakın.
    </p>
  </>
);