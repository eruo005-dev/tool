import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      JSON Web Token'lar her yerde — OAuth akışları, API kimlik doğrulaması, oturum
      yönetimi, servisler arası çağrılar. Aynı zamanda en çok yanlış kullanılan
      kimlik doğrulama altyapılarından biridir. Spesifikasyonu küçüktür; hatalar
      çoktur: payload'da sırları saklamak, "alg" başlığına güvenmek, token'ları
      çok uzun süre canlı bırakmak, herhangi bir XSS'in çalabileceği localStorage'a
      göndermek. Bu kılavuz, JWT'nin gerçekte ne olduğunu, nasıl düzgün bir şekilde
      doğrulanacağını, gerçek dünya sonuçları olan güvenlik tuzaklarını ve JWT'lerin
      düz bir oturuma karşı ne zaman kullanılacağını anlatır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Anatomi — üç parça, nokta ile ayrılmış</h2>
    <p>
      Bir JWT şuna benzer: <code>xxxxx.yyyyy.zzzzz</code>. Her bölüm
      Base64URL ile kodlanmıştır.
    </p>
    <p>
      <strong>Başlık</strong> (ilk bölüm): İmzalama algoritmasını (alg) ve token
      türünü (typ) açıklayan JSON. Örnek:
      {` {"alg":"HS256","typ":"JWT"}`}.
    </p>
    <p>
      <strong>Payload</strong> (ikinci bölüm): Talepleri içeren JSON — token'ın
      taşıdığı gerçek veri. Standart talepler: iss (yayıncı),
      sub (konu), aud (hedef kitle), exp (son kullanma), iat (yayınlanma zamanı),
      nbf (önce değil), jti (JWT ID).
    </p>
    <p>
      <strong>İmza</strong> (üçüncü bölüm): Token'ın kurcalanmadığının
      kriptografik kanıtı. Bir sır (HMAC) veya özel anahtar (RSA/
      ECDSA) kullanılarak başlık + payload üzerinden hesaplanır.
    </p>
    <p>
      Kritik: <strong>payload şifrelenmemiştir.</strong> Sadece
      Base64 kodlanmıştır. Token'a sahip olan herkes talepleri okuyabilir.
      Bir JWT payload'ına açığa çıkmasını istemediğiniz sırları, şifreleri veya
      PII'yi asla koymayın.
    </p>

    <h2>İmzalama nasıl çalışır — HS256 vs RS256</h2>
    <p>
      <strong>HS256 (SHA-256 ile HMAC):</strong> simetrik — aynı
      sır imzalar ve doğrular. Hızlı, basit. Sorun: doğrulayan her
      hizmet sırrı bilmelidir ve sırrı olan herkes token oluşturabilir. Bir
      tarafın imzaladığı ve doğruladığı basit kurulumlar için kullanın.
    </p>
    <p>
      <strong>RS256 (SHA-256 ile RSA) / ES256 (ECDSA):</strong>
      asimetrik — özel anahtar imzalar, genel anahtar doğrular. Yayıncı özel
      anahtarı tutar; tüketiciler yalnızca genel anahtara ihtiyaç duyar. Çoklu
      hizmet veya üçüncü taraf tüketimi için tercih edilir.
    </p>
    <p>
      <strong>Kural:</strong> birden fazla hizmetin token'ları doğrulaması
      gerekiyorsa, RS256 kullanın ve genel anahtarı dağıtın (genellikle bir
      JWKS uç noktası aracılığıyla). HS256 sırlarını ekipler veya
      hizmetler arasında paylaşmayın.
    </p>

    <h2>"alg: none" saldırısı</h2>
    <p>
      Tarihsel güvenlik açığı: bazı JWT kütüphaneleri,
      <code> alg: &quot;none&quot;</code> olan token'ları kabul etti ve imza
      doğrulamasını atladı. Bir saldırgan, rastgele talepler içeren ve imzasız
      bir token oluşturur; savunmasız bir sunucu bunu kabul eder.
    </p>
    <p>
      <strong>Savunma:</strong> doğrulama çağrınızda her zaman beklenen algoritmayı
      belirtin. <code>jwt.verify(token, secret,
      {` { algorithms: ['RS256'] }`})</code>. Sunucunun, token'ın kendisindeki
      alg başlığına güvenmesine asla izin vermeyin.
    </p>
    <p>
      İlgili: "genel anahtarı sır olarak kullanan HMAC" saldırısı.
      Sunucu RS256 bekler (genel anahtar doğrular); saldırgan, sunucunun
      genel anahtarını sır olarak kullanarak imzalanmış bir HS256 token'ı gönderir;
      savunmasız kütüphaneler genel anahtarı bir HMAC sırrı olarak kullanır ve
      doğrular. Çözüm: algoritmaları açıkça kilitleyin.
    </p>

    <h2>Son kullanma — en çok gözden kaçan alan</h2>
    <p>
      <strong>exp</strong> olmayan bir JWT, asla ölmeyen bir taşıyıcı
      kimlik bilgisidir. Her token için bir son kullanma tarihi belirleyin.
    </p>
    <p>
      <strong>Erişim token'ları:</strong> kısa ömürlü. 5-15 dakika. Sızarsa,
      hasar penceresi küçüktür.
    </p>
    <p>
      <strong>Yenileme token'ları:</strong> daha uzun (saatlerden günlere).
      Yalnızca yeni erişim token'ları almak için kullanılır. Daha dikkatli
      saklanır (httpOnly çerez, localStorage değil). İptal edilebilir.
    </p>
    <p>
      <strong>Saat kayması:</strong> yayıncı ve doğrulayıcı arasındaki saat
      farklılıklarını tolere etmek için gelecekte ~60 saniyeye kadar
      yayınlanmış token'ları kabul edin. Çoğu kütüphanede saat toleransı
      seçeneği vardır.
    </p>

    <h2>Depolama — ön uç sorusu</h2>
    <p>
      <strong>localStorage:</strong> kolay, ancak herhangi bir XSS güvenlik açığı
      token'ı anında çalar. Hassas hiçbir şey için kaçının.
    </p>
    <p>
      <strong>sessionStorage:</strong> sekme kapatıldığında temizlenir. localStorage
      ile aynı XSS riski.
    </p>
    <p>
      <strong>httpOnly, Secure, SameSite=Lax çerez:</strong> JavaScript'ten
      erişilemez, sekme kapatıldığında kalıcıdır, aynı site isteklerinde otomatik
      olarak gönderilir. Web uygulamaları için en iyi varsayılan.
    </p>
    <p>
      <strong>Bellek içi (JavaScript değişkeni):</strong> sayfa yeniden
      yüklendiğinde kaybolur ancak XSS'den en güvenlisidir. Genellikle kimlik
      doğrulamayı sessizce geri yüklemek için bir yenileme token'ı çereziyle
      eşleştirilir.
    </p>
    <p>
      Mobil uygulamalar için: güvenli bölge (iOS Keychain, Android Keystore).
      Token'lar için asla düz SharedPreferences veya UserDefaults kullanmayın.
    </p>

    <h2>JWT vs sunucu tarafı oturumları — ne zaman hangisini seçmeli</h2>
    <p>
      <strong>Sunucu tarafı oturumlar</strong> (oturum ID çerezi + sunucu
      deposu): anında iptal edilebilir, istemci tarafından görünmez, basit. Çoğu
      monolit ve aynı kaynaklı web uygulaması için kullanın.
    </p>
    <p>
      <strong>JWT:</strong> durumsuz doğrulama, dağıtılabilir,
      bir oturum deposu olmadan yatay olarak ölçeklenir. Birden fazla
      hizmetin merkezi bir depoya danışmadan kimlik doğrulamasını doğrulaması
      gerektiğinde veya üçüncü taraf tüketicilere (API'ler,
      OAuth entegrasyonları) token yayınlarken kullanın.
    </p>
    <p>
      Klasik bir hata: tek bir arka uca sahip ve çapraz hizmet ihtiyacı olmayan
      bir uygulama için JWT kullanmak. Tüm dezavantajları (iptal etmesi zor,
      token şişkinliği talepleri) hiçbir faydası olmadan elde edersiniz.
    </p>

    <h2>İptal — zor problem</h2>
    <p>
      Durumsuz token'lar kolayca iptal edilemez. Bir token sızarsa,
      kısa son kullanma süreleri ana savunmanızdır.
    </p>
    <p>
      Gerçek iptal için seçenekler:
    </p>
    <p>
      <strong>Kara liste:</strong> doğal olarak süreleri dolana kadar Redis'te
      iptal edilen jti değerlerinin bir listesini tutun. İptal sağlar ancak
      her doğrulama için bir ağ çağrısı ekler.
    </p>
    <p>
      <strong>Kısa son kullanma + yenileme token'ı:</strong> erişim token'ları
      hızlı bir şekilde sona erer (5-15 dk); yenileme token'ları çıkış
      yapıldığında iptal edilebilir. İptal, erişim token'ının ömrü boyunca
      yayılır.
    </p>
    <p>
      <strong>Kullanıcı düzeyinde sürüm sayacı:</strong> JWT'ye bir
      "oturum sürümü" ekleyin; sunucu, çıkış/şifre değişikliğinde
      sürümü yükseltir; eski sürümlere sahip token'lar reddedilir. Yine de bir
      arama gerektirir ancak minimum düzeydedir.
    </p>

    <h2>Talep doğrulama — decode'a güvenmeyin</h2>
    <p>
      İmzayı doğrulamak yalnızca ilk adımdır. İmza geçtikten
      sonra şunları doğrulayın:
    </p>
    <p>
      <strong>exp:</strong> token süresi dolmamış.
    </p>
    <p>
      <strong>nbf:</strong> token zaten kullanılabilir.
    </p>
    <p>
      <strong>iss:</strong> beklenen tarafça yayınlanmış.
    </p>
    <p>
      <strong>aud:</strong> hizmetiniz için tasarlanmış. Çoklu
      hizmet kurulumları için kritiktir — A hizmeti için yayınlanan bir token,
      B hizmetinin kimliğini doğrulamamalıdır.
    </p>
    <p>
      <strong>sub:</strong> kullanıcıyı tanımlar, ancak kullanıcının hala
      var olduğunu ve aktif olduğunu doğrulayın (yasaklanmış, silinmiş, şifresi
      değiştirilmiş hesaplar).
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>1. Payload'a sır koymak.</strong> Şifreler,
      API anahtarları, özel veriler. Payload herkes tarafından okunabilir.
    </p>
    <p>
      <strong>2. Zayıf HS256 sırları kullanmak.</strong> "secret"
      veya "changeme" kaba kuvvetle kırılabilir. 256+ bitlik
      rastgele bir sır kullanın.
    </p>
    <p>
      <strong>3. Anahtarları döndürmemek.</strong> Anahtarlar zamanla sızdırılır.
      Periyodik olarak döndürün; döndürme sırasında birden çok aktif anahtarı
      desteklemek için başlıkta bir kid (anahtar kimliği) kullanın.
    </p>
    <p>
      <strong>4. Token'ları günlüğe kaydetmek.</strong> Erişim günlüklerindeki,
      Sentry breadcrumbs'larındaki veya hata raporlarındaki token'lar bir veri
      sızıntısıdır. Telemetriden Authorization başlıklarını ve JWT benzeri
      dizeleri temizleyin.
    </p>
    <p>
      <strong>5. İmzasız token'ları geçerli saymak.</strong> ("sadece
      talepleri okumak" için) doğrulama yapmadan ayrıştırma kod yolları
      yanlışlıkla yetkilendirme kararları için kullanılır. Yalnızca decode etme
      ile doğrulama ve güvenme kod yollarını ayırın.
    </p>
    <p>
      <strong>6. Token'ları URL parametrelerinde kabul etmek.</strong> URL'ler
      tarayıcı geçmişinde, sunucu günlüklerinde, yönlendirenlerde kalır. Her zaman
      Authorization başlığı veya çerez ile gönderin.
    </p>

    <h2>Hızlı "JWT'm iyi mi" kontrol listesi</h2>
    <p>
      RS256 veya HS256 ile imzalanmış ("none" değil).
    </p>
    <p>
      exp var. İdeal olarak kısa (erişim token'ları için dakikalar).
    </p>
    <p>
      Payload'da sır yok.
    </p>
    <p>
      Doğrulayıcı beklenen algoritmayı açıkça belirtiyor.
    </p>
    <p>
      aud / iss doğrulandı.
    </p>
    <p>
      Authorization başlığı veya güvenli çerez ile taşınıyor.
    </p>
    <p>
      Yenileme token'ı iptal yolu mevcut.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir JWT'nin içindeki talepleri{" "}
      <a href="/tools/jwt-decoder">JWT kod çözücü</a> ile inceleyin. Manuel
      bölüm kod çözme için{" "}
      <a href="/tools/base64-encoder-decoder">Base64 kodlayıcı/kod çözücü</a>
      {" "}ve HS256 token'ları için HMAC imzaları oluştururken veya karşılaştırırken{" "}
      <a href="/tools/hash-generator">hash oluşturucu</a> ile birlikte kullanın.
    </p>
  </>
);