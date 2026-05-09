import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      MIME türleri &mdash; Çok Amaçlı İnternet Posta Uzantıları, şimdi
      resmi olarak &ldquo;medya türleri&rdquo; olarak adlandırılır &mdash; bir
      bayt akışını etiketleyerek alıcının ne olduğunu bilmesini sağlar.
      <code> Content-Type</code> HTTP yanıt başlığında sunulur, her
      dosya yüklemesinde damgalanır ve işletim sistemi tarafından
      dosya açma diyaloglarında kullanılır; tarayıcınızın baytları
      işlemesine, indirmesine veya reddetmesine karar verirler. Biçim
      basittir: <code>type/subtype</code>, isteğe bağlı parametrelerle.
      Arkasındaki kayıt defteri IANA tarafından tutulur ve
      binlerce giriş içerir. Türü yanlış almak sessiz hatalara
      neden olur &mdash; resimler işlenmez, JSON ayrıştırılmak yerine
      indirilir, yazı tipleri Firefox'ta sessizce başarısız olur. Bu kılavuz
      bir MIME türünün yapısını, gerçekten karşılaşacağınız yaygın türleri,
      IANA atamasının nasıl çalıştığını, dosya uzantısı
      eşlemesini,
      <code> X-Content-Type-Options: nosniff</code>'in güvenlik
      etkilerini ve tarayıcıların izin verdiğinizde neden
      koklama yaptığını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir medya türünün yapısı</h2>
    <p>
      Genel biçim
      <code> type/subtype;parameter=value</code> şeklindedir. Örnek:
      <code> text/html; charset=utf-8</code>.
    </p>
    <p>
      <strong>Üst düzey tür</strong> sabit bir kümeden biridir:
      <code> application</code>, <code>audio</code>,
      <code> example</code>, <code>font</code>,
      <code> image</code>, <code>message</code>,
      <code> model</code>, <code>multipart</code>,
      <code> text</code>, <code>video</code>.
    </p>
    <p>
      <strong>Alt tür</strong> belirli biçimi tanımlar:
      <code> html</code>, <code>json</code>, <code>png</code>.
    </p>
    <p>
      <strong>Parametreler</strong> bağlam ekler &mdash; metin için karakter kümesi,
      çok parçalı için sınır, bağlantılı veri JSON için profil.
    </p>
    <p>
      <strong>Alt türlerdeki ön ekler</strong> durumu belirtir:
      <code> x-</code> 2012 öncesi kayıtlı olmayan türler için kullanılan
      kuraldı (<code>application/x-custom</code>), şimdi
      satıcıya özel için <code>vnd.</code> ve kişisel kullanım için
      <code> prs.</code> lehine kullanımdan kaldırılmıştır.
    </p>

    <h2>Yapılandırılmış sözdizimi son ekleri</h2>
    <p>
      Alt türdeki bir <code>+</code>, ortak bir sözdizimi üzerine
      inşa edilmiş bir biçimi belirtir. Örnekler:
    </p>
    <p>
      <code>application/ld+json</code> &mdash; <a href="/learn/json-ld">JSON-LD</a>, bağlantılı
      veri anlam bilimi ile JSON.
    </p>
    <p>
      <code>image/svg+xml</code> &mdash; XML olan SVG.
    </p>
    <p>
      <code>application/atom+xml</code> &mdash; Atom beslemesi, ayrıca
      XML.
    </p>
    <p>
      Temel sözdizimini tanıyan ayrıştırıcılar
      (<code>+json</code>, <code>+xml</code>,
      <code> +cbor</code>, <code>+zip</code>), belirli türü
      bilmiyorlarsa genel işlemeye geri dönebilir.
    </p>

    <h2>Haftalık karşılaştığınız yaygın türler</h2>
    <p>
      <strong>text/html</strong> &mdash; HTML belgeleri.
    </p>
    <p>
      <strong>text/css</strong>, <strong>text/javascript</strong>
      &mdash; stil sayfaları ve betikler. (Tarihsel olarak
      <code> application/javascript</code>; IANA şimdi
      <code> text/javascript</code>'i önerir.)
    </p>
    <p>
      <strong>application/json</strong> &mdash; JSON. Not:
      <code> application</code>, <code> text</code> değil,
      ve spesifikasyona göre karakter kümesi parametresi yok (JSON
      UTF-8 olarak tanımlanmıştır).
    </p>
    <p>
      <strong>application/xml</strong>,
      <strong> text/xml</strong> &mdash; XML. İkisi de çalışır ancak
      <code> application/xml</code>, makine tarafından tüketilen XML
      için RFC 7303 önerisidir.
    </p>
    <p>
      <strong>image/jpeg</strong> (<code>jpg</code> değil),
      <strong> image/png</strong>,
      <strong> image/gif</strong>,
      <strong> image/webp</strong>,
      <strong> image/avif</strong>,
      <strong> image/svg+xml</strong>.
    </p>
    <p>
      <strong>application/pdf</strong>,
      <strong> application/zip</strong>,
      <strong> application/octet-stream</strong> (bilinmeyen ikili).
    </p>
    <p>
      <strong>font/woff2</strong> (2017'den beri; önceden
      <code> application/font-woff2</code>),
      <strong> font/woff</strong>,
      <strong> font/ttf</strong>.
    </p>
    <p>
      <strong>multipart/form-data</strong> &mdash; HTML dosya yüklemeleri.
      Sunucunun parçaları ayırması gereken bir <code>boundary=</code>
      parametresi içerir.
    </p>
    <p>
      <strong>application/x-www-form-urlencoded</strong> &mdash;
      dosyalar olmadan standart HTML form gönderimleri.
    </p>

    <h2>IANA kayıt defteri</h2>
    <p>
      Resmi olarak tanınan her medya türü IANA'ya
      <code>iana.org/assignments/media-types</code> adresinde kayıtlıdır. Kayıt
      defterinde dört atama ağacı vardır:
    </p>
    <p>
      <strong>Standartlar ağacı</strong>: yaygın, ön ek yok
      (<code>application/json</code>).
    </p>
    <p>
      <strong>Satıcı ağacı</strong>: <code>vnd.</code> ön eki
      (<code>application/vnd.ms-excel</code>,
      <code> application/vnd.google-earth.kml+xml</code>).
    </p>
    <p>
      <strong>Kişisel ağaç</strong>: <code>prs.</code> ön eki, kişisel
      veya deneysel türler için.
    </p>
    <p>
      <strong>Kayıtlı olmayan ağaç</strong>: <code>x.</code> ön eki özel
      kullanım için. Eski türler noktasız <code>x-</code> kullanırdı
      (<code>application/x-shockwave-flash</code>) ve çoğu
      eski kullanım olarak korunur.
    </p>
    <p>
      Yeni bir tür kaydetmek kısa bir form ve halka açık bir incelemedir.
      API yazarları için: <code> application/my-custom-thing</code>
      icat etmeyin; genel istemcilerde JSON işlemesini
      devralması için <code> application/vnd.acme.thing+json</code>
      kullanın.
    </p>

    <h2>Dosya uzantısı eşlemesi</h2>
    <p>
      MIME türü ve dosya uzantısı aynı şeyi söylemenin iki yoludur
      ve eşleme neredeyse her zaman paylaşılan bir sistem
      tablosundadır. Linux'ta <code>/etc/mime.types</code>; Apache'de
      <code> mime.types</code>; Node.js'de <code>mime</code>
      {" "}paketi vardır; her dil ekosistemi bir tane sağlar.
    </p>
    <p>
      Bazı türlerin birden çok geçerli uzantısı vardır:
      <code> image/jpeg</code> &rarr; <code>.jpg</code>,
      <code> .jpeg</code>, <code>.jpe</code>. Bir uzantı, içeriğe bağlı
      olarak birden çok geçerli türe sahip olabilir:
      <code> .ogg</code> ses veya video olabilir. Kullanıcı yüklemeleri
      için türü asla yalnızca uzantıdan çıkarmayın &mdash; gerçek
      baytları kontrol edin.
    </p>

    <h2>Content-Type ve karakter kümesi</h2>
    <p>
      Metin tabanlı türler için her zaman karakter kümesini ekleyin:
      <code> Content-Type: text/html; charset=utf-8</code>. Onsuz,
      tarayıcılar tahmin eder, bu da baytlar yanlış kodlamada
      yorumlandığında <code> mojibake</code>'e &mdash;
      &ldquo;&eacute;&rdquo;nin &ldquo;&Atilde;&copy;&rdquo; olarak
      görünmesi &mdash; neden olabilir.
    </p>
    <p>
      İkili türler için karakter kümesi anlamlı değildir. Bir tane
      eklemek (<code>image/png; charset=utf-8</code>) zararsızdır ancak
      anlamsızdır ve temizlemeye değer.
    </p>

    <h2>MIME koklama ve nosniff</h2>
    <p>
      Tarayıcılar tarihsel olarak bir yanıtın ilk birkaç yüz baytını
      koklar ve aynı fikirde değillerse bildirilen <code>Content-Type</code>'ı
      geçersiz kılar. Bu, yanlış etiketlenmiş sunuculara yardımcı oldu ancak
      bir güvenlik açığı yarattı: bir saldırgan, tarayıcıların HTML olarak
      koklayıp betikleri çalıştırdığı <code> text/plain</code> etiketli
      bir dosya yükler.
    </p>
    <p>
      Savunma, tarayıcıya &ldquo;Content-Type'ıma güven, koklama.&rdquo; diyen
      <code> X-Content-Type-Options: nosniff</code> başlığıdır.
      Her yanıtta gönderin. Doğru türlerle birleştirildiğinde,
      bir sınıf siteler arası betik saldırısını etkisiz hale getirir.
    </p>
    <p>
      <strong>Kullanıcı yüklemelerinde ve eklerinde her zaman nosniff
      gönderin.</strong> Tarayıcıların aksi halde işleyeceği türler için
      indirmeyi zorlamak üzere <code> Content-Disposition: attachment</code>
      ile birleştirin.
    </p>

    <h2>Accept'te joker karakterler</h2>
    <p>
      <code>Accept</code> istek başlığı, joker karakterler ve kalite
      değerleri (q-faktörleri) ile medya türlerini kullanır:
    </p>
    <pre>{`Accept: text/html,application/xhtml+xml,
        application/xml;q=0.9,
        image/webp,image/avif,*/*;q=0.8`}</pre>
    <p>
      <code>*/*</code> her şeyle eşleşir; <code>image/*</code>
      {" "}herhangi bir resimle eşleşir. <code>q</code>, varsayılan 1
      olmak üzere 0 ile 1 arasında bir tercih ağırlığıdır. Sunucu,
      üretebileceği en çok tercih edilen türü seçer.
    </p>

    <h2><a href="/learn/stream">Akış</a> ve parçalı içerik için MIME</h2>
    <p>
      Canlı akış biçimlerinin kendi türleri vardır:
    </p>
    <p>
      <strong>application/vnd.apple.mpegurl</strong> (HLS oynatma listesi).
    </p>
    <p>
      <strong>application/dash+xml</strong> (DASH manifestosu).
    </p>
    <p>
      <strong>text/event-stream</strong> (Sunucu Tarafından Gönderilen Olaylar).
    </p>
    <p>
      WebSocket için ilk yükseltme,
      <code> application/octet-stream</code> benzeri yüklerle HTTP'dir, ancak
      WebSocket'in kendisi mesaj başına Content-Type kullanmaz.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>JSON'u <code>text/plain</code> olarak sunmak.</strong>
      {" "}Birçok istemci (fetch, XHR) yine de
      <code> response.json()</code> ile ayrıştıracaktır, ancak CORS ön kontrolleri
      ve içerik filtreleri bildirilen türe göre çalışır. Her zaman
      <code> application/json</code> bildirin.
    </p>
    <p>
      <strong>JS'yi <code>text/html</code> olarak sunmak.</strong> Eski
      CDN yanlış yapılandırmaları. <code> nosniff</code> ile modern
      tarayıcılar çalıştırmayı reddederek uygulamanızı bozar. Geliştirici
      araçlarında <code>Content-Type</code>'ı kontrol edin.
    </p>
    <p>
      <strong>Yüklemede kullanıcı tarafından bildirilen türe güvenmek.</strong>
      Bir kullanıcının <code>malware.exe</code> dosyasını <code>image.png</code>
      {" "}olarak yeniden adlandırması ve <code>image/png</code> olduğunu iddia
      etmesi önemsizdir. Doğrulamak için ilk baytları (&ldquo;sihirli sayılar&rdquo;)
      okuyun.
    </p>
    <p>
      <strong>HTML'de karakter kümesini atlamak.</strong> Tarayıcıya göre
      değişen kodlama tahminlerine yol açar. Her zaman
      <code> charset=utf-8</code> bildirin.
    </p>
    <p>
      <strong>Tembel bir varsayılan olarak <code>application/octet-stream</code>
      kullanmak.</strong> Tarayıcıları işlemek yerine indirmeye zorlar.
      Gerçek ikili yığınlar için kabul edilebilir; gerçek metin veya
      resimler için can sıkıcıdır.
    </p>
    <p>
      <strong>İcat edilmiş türler.</strong>
      <code> application/x-my-widget-v2</code>. Yapılandırılmış sözdizimi
      son eki ile satıcı ağacını kullanın:
      <code> application/vnd.mycompany.widget-v2+json</code>.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir türü veya uzantıyı anında{" "}
      <a href="/tools/mime-type-lookup">MIME türü arama</a> ile
      bulun. Content-Type ve yanıt kodunun her ikisinin de teşhis
      edilmesi gerektiğinde{" "}
      <a href="/tools/http-status-code-lookup">HTTP durum kodu arama</a>
      {" "}ile ve UA ile Accept'in etkileşime girdiği içerik
      anlaşması hata ayıklaması için{" "}
      <a href="/tools/user-agent-parser">kullanıcı aracısı ayrıştırıcı</a>
      ile eşleştirin.
    </p>
  </>
);