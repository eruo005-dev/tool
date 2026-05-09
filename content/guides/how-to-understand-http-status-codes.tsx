import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      HTTP durum kodları, her istekle birlikte gelen üç haneli sayılardır. İlk hane onları beş sınıfa ayırır ve sınıfı bildiğinizde kabaca ne olduğunu anlarsınız: 1xx hala çalışıyor, 2xx her şey yolunda, 3xx başka yere bak, 4xx yanlış istedin, 5xx biz patladık. Basit çerçevenin altında RFC 9110 (Haziran 2022'de yayınlanan güncel HTTP semantik spesifikasyonu) ve WebDAV, hız sınırlama ve yasal kısıtlamalar için kodlar ekleyen yaklaşık bir düzine yardımcı RFC yatar. Doğru kodu seçmek önemlidir: önbellek davranışını, yeniden denemeleri, arama motoru indekslemeyi ve varsayılan hata sayfası gibi tarayıcı arayüzünü yönlendirir. Bu kılavuz, üretimde gerçekten kullanılan kodlarla beş sınıfın tamamını, yaygın yeniden deneme ve indeksleme etkilerini, 301 ve 302 arasındaki farkı, 503'ün ne zaman doğru ve ne zaman tembel olduğunu ve insanların kullanmaya yöneldiği ancak kullanmamaları gereken kodları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Beş sınıf</h2>
    <p>
      Durum kodunun ilk hanesi sınıfı belirler:
    </p>
    <p>
      <strong>1xx bilgilendirme</strong> &mdash; istek alındı, işlenmeye devam ediliyor. Uygulama kodunda nadiren görülür.
    </p>
    <p>
      <strong>2xx başarı</strong> &mdash; istek çalıştı.
    </p>
    <p>
      <strong>3xx yönlendirme</strong> &mdash; daha fazla işlem gerekli (genellikle farklı bir URL).
    </p>
    <p>
      <strong>4xx istemci hatası</strong> &mdash; istemci hatalı bir istek gönderdi.
    </p>
    <p>
      <strong>5xx sunucu hatası</strong> &mdash; sunucu geçerli bir isteği işleyemedi.
    </p>

    <h2>1xx bilgilendirme</h2>
    <p>
      <strong>100 Devam</strong> &mdash; sunucu istek başlıklarını aldı ve istemci gövdeyi gönderebilir. Büyük yüklemeler için <code> Expect: 100-continue</code> ile kullanılır, böylece sunucu reddedecekse istemci erken vazgeçebilir.
    </p>
    <p>
      <strong>101 Protokol Değiştirme</strong> &mdash; bir <code>Upgrade</code> başlığına yanıt olarak gönderilir, en yaygın olarak HTTP'den WebSocket'e geçiş yapar.
    </p>
    <p>
      <strong>103 Erken İpuçları</strong> &mdash; sunucunun, gerçek yanıt hala oluşturulurken istemcinin önceden yüklemesi gereken kaynakları belirtmesine olanak tanır. Chrome 103+ sürümünde desteklenir ve CDN'ler tarafından giderek daha fazla kullanılır.
    </p>

    <h2>2xx başarı</h2>
    <p>
      <strong>200 Tamam</strong> &mdash; varsayılan başarı. Yanıt gövdesi istenen her şeyi içerir.
    </p>
    <p>
      <strong>201 Oluşturuldu</strong> &mdash; yeni bir kaynak oluşturuldu. Yeni kaynağı gösteren bir <code>Location</code> başlığı ekleyin. Oluşturan POST'lar için REST kuralı.
    </p>
    <p>
      <strong>202 Kabul Edildi</strong> &mdash; istek sıraya alındı ancak henüz işlenmedi. Zaman uyumsuz işler için kullanılır.
    </p>
    <p>
      <strong>204 İçerik Yok</strong> &mdash; başarılı ve kasıtlı olarak gövde yok. DELETE genellikle 204 döndürür.
    </p>
    <p>
      <strong>206 Kısmi İçerik</strong> &mdash; bir <code> Range</code> isteğine yanıt. Devam ettirilebilir indirmeler ve video <a href="/learn/stream">akışı</a> için kullanılır.
    </p>

    <h2>3xx yönlendirme</h2>
    <p>
      <strong>301 Kalıcı Olarak Taşındı</strong> &mdash; kaynağın yeni bir <a href="/learn/canonical-url">kurallı URL'si</a> var ve geri taşınmayacak. Arama motorları bağlantı değerini yeni URL'ye aktarır. Tarayıcılar 301'leri agresif bir şekilde önbelleğe alır; yanlış bir 301'i geri almak acı vericidir. Sonsuza kadar kullanacağınız zaman kullanın.
    </p>
    <p>
      <strong>302 Bulundu</strong> &mdash; geçici yönlendirme. Tarayıcılar takip eder ancak yönlendirmenin kendisini önbelleğe almaz. Tarihsel not: RFC 2616, istemcilerin 302'de POST'u GET'e değiştirmesine izin verdi; RFC 9110 bunu yapmamaları gerektiğini söyler, ancak çoğu yine de yapar, bu nedenle 307 ve 308 vardır.
    </p>
    <p>
      <strong>303 Diğerine Bak</strong> &mdash; yöntemi açıkça GET olarak değiştirir. Klasik kullanım: bir kaynak oluşturan bir POST'tan sonra, oluşturulan kaynağın URL'sini işaret eden 303 ile yanıt verin, böylece tarayıcı yenilemesi yeniden gönderme yapmaz.
    </p>
    <p>
      <strong>304 Değiştirilmedi</strong> &mdash; kaynak değişmediğinde koşullu bir GET'e (<code>If-Modified-Since</code> veya <code> If-None-Match</code>) yanıt. Gövde yok. Tarayıcı önbelleğe alınmış kopyasını kullanır.
    </p>
    <p>
      <strong>307 Geçici Yönlendirme</strong> &mdash; 302 gibi ancak yöntem değişmemelidir. POST, POST olarak kalır.
    </p>
    <p>
      <strong>308 Kalıcı Yönlendirme</strong> &mdash; 301 gibi ancak yöntem değişmemelidir. API uç noktalarını kalıcı olarak yönlendirmek için kullanışlıdır.
    </p>

    <h2>4xx istemci hataları</h2>
    <p>
      <strong>400 Kötü İstek</strong> &mdash; istek hatalı biçimlendirilmiş (kötü JSON, eksik zorunlu alan). Genel.
    </p>
    <p>
      <strong>401 Yetkisiz</strong> &mdash; kimlik doğrulama gerekli ve sağlanmadı veya geçersiz. Yanıltıcı bir şekilde adlandırılmış &mdash; bu aslında &ldquo;kimliği doğrulanmamış.&rdquo; Bir <code>WWW-Authenticate</code> başlığı ekleyin.
    </p>
    <p>
      <strong>403 Yasak</strong> &mdash; kimlik doğrulandı, ancak kimlik bilgileri bu eyleme izin vermiyor. Yetkilendirme hataları için kullanın.
    </p>
    <p>
      <strong>404 Bulunamadı</strong> &mdash; kaynak mevcut değil. Arama motorları sonunda 404 URL'lerini dizinden çıkarır.
    </p>
    <p>
      <strong>405 İzin Verilmeyen Yöntem</strong> &mdash; URL mevcut ancak bu HTTP yöntemini işlemiyor. Geçerli yöntemleri listeleyen bir <code> Allow</code> başlığı ekleyin.
    </p>
    <p>
      <strong>408 İstek Zaman Aşımı</strong> &mdash; istemci isteği göndermek için çok uzun sürdü. Bazı CDN'ler 504 kullanmaları gerekirken 408 kullanır.
    </p>
    <p>
      <strong>409 Çakışma</strong> &mdash; istek bir çakışma yaratacaktır (yinelenen anahtar, bir wikide düzenleme çakışması). İstemci genellikle düzeltebilir ve yeniden deneyebilir.
    </p>
    <p>
      <strong>410 Gitmiş</strong> &mdash; kaynak eskiden vardı ve kalıcı olarak kaldırıldı. SEO için 404'ten daha güçlüdür; Google'a daha hızlı dizinden çıkarmasını söyler.
    </p>
    <p>
      <strong>413 Yük Çok Büyük</strong> &mdash; gövde sunucu sınırlarını aşıyor.
    </p>
    <p>
      <strong>418 Ben bir çaydanlığım</strong> &mdash; RFC 2324'ten, HTCPCP Nisan Şakası spesifikasyonu. Bazı ekipler bunu şaka amaçlı bir sağlık kontrolü yanıtı olarak kullanır.
    </p>
    <p>
      <strong>422 İşlenemez İçerik</strong> &mdash; sözdizimsel olarak geçerli ancak anlamsal olarak geçersiz (örneğin, JSON ayrıştırıldı ancak alanlar doğrulamayı geçemedi). API'ler tarafından doğrulama hataları için düz 400 yerine tercih edilir.
    </p>
    <p>
      <strong>429 Çok Fazla İstek</strong> &mdash; hız sınırı aşıldı. Beklenecek saniyeleri içeren bir <code>Retry-After</code> başlığı ekleyin.
    </p>
    <p>
      <strong>451 Yasal Nedenlerle Kullanılamıyor</strong> &mdash; kaynak bir mahkeme veya hükümet emriyle engellendi. Sayı, Fahrenheit 451 referansıdır.
    </p>

    <h2>5xx sunucu hataları</h2>
    <p>
      <strong>500 Dahili Sunucu Hatası</strong> &mdash; genel sunucu tarafı hatası. Genellikle işlenmemiş bir istisna anlamına gelir.
    </p>
    <p>
      <strong>501 Uygulanmadı</strong> &mdash; sunucu yöntemi desteklemiyor. 405'ten farklıdır (yönteme <em>bu</em> URL için izin verilmiyor).
    </p>
    <p>
      <strong>502 Kötü Ağ Geçidi</strong> &mdash; bir üst sunucu kötü bir yanıt verdi. Genellikle ters proxy'nin (Nginx, CDN) kaynağa ulaşamadığı veya ayrıştıramadığı anlamına gelir.
    </p>
    <p>
      <strong>503 Hizmet Kullanılamıyor</strong> &mdash; sunucu isteği geçici olarak işleyemiyor. Planlı bakım veya aşırı yük için kullanın. <code>Retry-After</code> ekleyin. Arama motorları kısa süreli 503'leri geçici olarak değerlendirir; uzun süreli 503'ler sıralamalara zarar vermeye başlar.
    </p>
    <p>
      <strong>504 Ağ Geçidi Zaman Aşımı</strong> &mdash; üst sunucu zamanında yanıt vermedi.
    </p>
    <p>
      <strong>511 Ağ Kimlik Doğrulaması Gerekli</strong> &mdash; kullanıcı bağlantı noktaları (captive portal), istemcilere ağın giriş gerektirdiğini bildirmek için bunu kullanır.
    </p>

    <h2>Önbellekleme etkileri</h2>
    <p>
      Proxy'ler ve tarayıcılar, açık başlıklar olmasa bile belirli kodları varsayılan olarak önbelleğe alır: 200, 203, 204, 206, 300, 301, 308, 404, 405, 410, 414, 501. Diğer her şey açık bir <code> Cache-Control</code> gerektirir. Bugün sunduğunuz bir 301, bir yıl boyunca önbelleğe alınabilir &mdash; fikrinizi değiştirirseniz, önbellek düşmandır.
    </p>

    <h2>Yeniden deneme davranışı</h2>
    <p>
      İyi huylu istemciler belirli kodlarda otomatik olarak yeniden dener. <strong> 408, 425, 429, 500, 502, 503, 504</strong> genellikle üstel geri çekilme ile yeniden denenebilir. <strong>Bunların dışındaki 4xx</strong> yeniden denenemez &mdash; bir 400 veya 404'ü yeniden denemek size aynı sonucu verir.
    </p>
    <p>
      Etkisiz yöntemler (GET, PUT, DELETE, HEAD, OPTIONS) yeniden denemek için güvenlidir. POST genellikle güvenli değildir &mdash; bir ağ hatasından sonra yeniden denemek kaynağı iki kez oluşturabilir. Güvenli yeniden denemeler için yazma uç noktalarında bir etkisizlik anahtarı başlığı kullanın.
    </p>

    <h2>Durum kodları ve arama motorları</h2>
    <p>
      Googlebot ve diğer tarayıcılar büyük ölçüde durum kodlarına güvenir.
    </p>
    <p>
      <strong>200</strong>: tarama ve indeksleme.
    </p>
    <p>
      <strong>301, 308</strong>: sinyalleri yeni URL'ye aktar, indeksi güncelle.
    </p>
    <p>
      <strong>302, 307</strong>: takip et, ancak sinyalleri aktarma. Uzun süreli 302'ler sonunda 301 olarak ele alınır.
    </p>
    <p>
      <strong>404, 410</strong>: dizinden çıkar. 410 daha hızlıdır.
    </p>
    <p>
      <strong>503</strong>: sonra tekrar gel. Bir hafta boyunca 503 döndüren bir site sıralamalarda düşmeye başlar.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Hata gövdesiyle 200 döndürmek.</strong> &ldquo;HTTP 200, JSON başarı: false diyor.&rdquo; Her yeniden deneme politikasını, her izleme uyarısını, her CDN istatistiğini bozar. Doğru durum kodunu kullanın.
    </p>
    <p>
      <strong>Yetkilendirme hataları için 401 kullanmak.</strong> 401 &ldquo;lütfen kimlik doğrulaması yapın&rdquo; anlamına gelir; 403 &ldquo;kimlik doğrulandı ancak yasak&rdquo; anlamına gelir. Bunları karıştırmak OAuth akışlarını bozar.
    </p>
    <p>
      <strong>302 demek istediğinizde 301 kullanmak.</strong> Kalıcı bir yönlendirme, fikrinizi değiştirdikten çok sonra tarayıcılarda ve arama motorlarında önbelleğe alınır. Tersine çevirebileceğiniz her şey için 302 kullanın.
    </p>
    <p>
      <strong>Her hata için 500.</strong> 500 &ldquo;çöktük&rdquo; demektir. Doğrulama hataları 400 veya 422'dir. Bulunamadı 404'tür. İzlemenin triyaj yapabilmesi için belirli kodu kullanın.
    </p>
    <p>
      <strong>429 ve 503'te <code>Retry-After</code> eksikliği.</strong> {" "}İstemcilerin ne kadar bekleyeceği hakkında hiçbir fikri yoktur. Kütüphaneler genellikle sorunu büyüten agresif yeniden denemelere başvurur.
    </p>
    <p>
      <strong>Erişim kontrolünü gizlemek için 404 kullanmak.</strong> Bazı siteler, bir kaynak mevcut olduğunda ancak kullanıcı göremediğinde (varlığı sızdırmamak için) 404 döndürür. Geçerli bir gizlilik tekniğidir ancak 403 bekleyen istemcileri bozar.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Beklenen davranış ve önbellekleme kurallarıyla herhangi bir durum kodunu{" "}
      <a href="/tools/http-status-code-lookup">HTTP durum kodu arama</a> aracıyla sorgulayın. Hem Content-Type hem de durum söz konusu olduğunda{" "}
      <a href="/tools/mime-type-lookup">MIME türü arama</a> ile ve botlara özgü durum davranışını hata ayıklamak için{" "}
      <a href="/tools/user-agent-parser">kullanıcı aracısı ayrıştırıcı</a> ile eşleştirin.
    </p>
  </>
);