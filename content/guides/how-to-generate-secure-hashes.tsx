import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Kriptografik bir özet fonksiyonu, herhangi bir girdiyi alır ve
      (teoride) tek yönlü olan sabit uzunlukta bir parmak izi üretir:
      tersine çevrilmesi olanaksız, çakışan iki girdi bulunması
      olanaksız. &ldquo;Teoride&rdquo; kısmı büyük bir iş yükü
      taşır, çünkü hâlâ yaygın olarak kullanılan iki özet fonksiyonu
      &mdash; MD5 ve SHA-1 &mdash; için pratik çakışmalar yayınlanmıştır
      (MD5 2004'te, SHA-1 2017'de Google'ın SHAttered
      saldırısıyla). Bunları bugün bütünlük veya kimlik için kullanmak
      bilinen bir güvenlik açığıdır. Bunun da ötesinde, özet fonksiyonları
      şifreler için tamamen yanlış araçtır &mdash; Argon2 veya
      bcrypt gibi kasıtlı olarak yavaş bir şifre-özetleme fonksiyonu
      istersiniz. Bu kılavuz, hangi özetlerin kırıldığını, hangilerinin
      güncel olduğunu (SHA-256, SHA-3, BLAKE3), çakışma ve ön görüntü
      direncinin nasıl farklılaştığını, şifre-özetleme ailesini ve neden
      ayrı olduğunu, tuzlama ve biberlemeyi ve 2026'da yapmanız gereken
      belirli seçimi kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir özet fonksiyonunun garantileri</h2>
    <p>
      Kriptografik bir özet fonksiyonu <code>H</code>, herhangi bir
      uzunluktaki girdiyi sabit boyutlu bir çıktıya eşler. Üç güvenlik
      özelliği:
    </p>
    <p>
      <strong>Ön görüntü direnci</strong>: verilen
      <code> H(x)</code> ile <code>x</code>'i bulmak olanaksızdır.
    </p>
    <p>
      <strong>İkinci ön görüntü direnci</strong>: verilen
      <code> x</code> ile <code>H(x') = H(x)</code> olacak şekilde
      farklı bir <code> x'</code> bulmak olanaksızdır.
    </p>
    <p>
      <strong>Çakışma direnci</strong>: <code>H(x) = H(x')</code>
      olacak şekilde herhangi bir <code>x, x'</code> çifti bulmak
      olanaksızdır.
    </p>
    <p>
      Çakışma direncini korumak en zorudur; bir özet zayıfladığında
      ilk önce bu başarısız olur.
    </p>

    <h2>MD5 &mdash; kırık; kullanmayın</h2>
    <p>
      MD5, 128 bitlik bir çıktı üretir. Çakışma saldırıları 2004'ten
      beri pratiktir; 2008'de araştırmacılar MD5 çakışmalarını kullanarak
      meşru bir CA sertifikasını taklit etti. Modern GPU'lar dakikalar
      içinde MD5 çakışmaları üretebilir.
    </p>
    <p>
      Güvenlik dışı kullanımlar için hâlâ kabul edilebilir: dosya
      parçalama, önbellek temizleme, saldırganın tehdit modelinde
      olmadığı kriptografik olmayan sağlama toplamları. Dijital
      imzalar, sertifikalar, bütünlük doğrulaması veya şifre
      özetleme için asla kabul edilemez.
    </p>

    <h2>SHA-1 &mdash; çakışmalar için kırık</h2>
    <p>
      SHA-1, 160 bit üretir. 2005'ten beri teorik saldırılar;
      Google'ın SHAttered makalesi (2017) gerçek bir çakışma
      yayınladı ve takip çalışması (Shambles, 2020), seçilmiş-ön ekli
      çakışmaları GPU zamanında yaklaşık 45.000 $ maliyetle pratik
      hale getirdi.
    </p>
    <p>
      Tarayıcılar 2017'de SHA-1 sertifikalarını kabul etmeyi bıraktı.
      Git, nesne kimlikleri için hâlâ SHA-1 kullanıyor; Linus riski
      kabul etti ve Git projesi SHA-256'ya geçiş için çalışıyor.
      Herhangi bir yeni güvenlikle ilgili kullanım için SHA-1'den
      kaçının.
    </p>

    <h2>SHA-2 ailesi &mdash; güncel standart</h2>
    <p>
      SHA-2 bir ailedir: <strong>SHA-224, SHA-256, SHA-384,
      SHA-512</strong>, ayrıca kısaltılmış varyantlar SHA-512/224 ve
      SHA-512/256. Bit cinsinden çıktı, addaki sayıyla eşleşir.
    </p>
    <p>
      <strong>SHA-256</strong>, 2026'da çoğu genel amaçlı özetleme
      için varsayılan seçimdir: dosya bütünlüğü, TLS sertifikaları,
      Bitcoin adresleri, içerik adresli depolama. Pratik saldırı yok.
    </p>
    <p>
      <strong>SHA-512</strong>, 64-bit CPU'larda SHA-256'dan daha
      hızlıdır ve ek marjın önemli olduğu kullanım durumları (HKDF,
      uzun vadeli arşivleme) için daha büyük bir çıktı sağlar.
    </p>
    <pre>{`import crypto from 'crypto';
const digest = crypto.createHash('sha256')
  .update('hello world')
  .digest('hex');
// b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9`}</pre>

    <h2>SHA-3 &mdash; farklı iç tasarım</h2>
    <p>
      SHA-3, 2015'te (FIPS 202) SHA-2'ye yapısal olarak farklı bir
      alternatif olarak standartlaştırıldı. SHA-2'nin Merkle–Damgård
      kullandığı yerde Keccak sünger yapısını kullanır. Çıktı
      boyutları aynıdır: SHA3-224, SHA3-256, SHA3-384, SHA3-512.
    </p>
    <p>
      Hem SHA-2 hem de SHA-3, 2026'da güvenlidir. Çeşitlendirmeye
      ihtiyacınız varsa (tüm güvenliğinizi tek bir yapının
      hayatta kalmasına bağlamak istemiyorsanız) veya değişken çıktılı
      SHAKE128/SHAKE256'ya ihtiyacınız varsa SHA-3 kullanın. Aksi
      takdirde SHA-2 daha iyi donanım desteğine sahiptir ve çoğu
      CPU'da biraz daha hızlıdır.
    </p>

    <h2>BLAKE2 ve BLAKE3 &mdash; hızlı ve modern</h2>
    <p>
      <strong>BLAKE2</strong> (2012), SHA-3 kadar güvenlidir ancak
      çok daha hızlıdır &mdash; modern CPU'larda genellikle MD5'ten
      bile hızlıdır. WireGuard, Argon2 ve birçok içerik adresli
      sistem tarafından kullanılır.
    </p>
    <p>
      <strong>BLAKE3</strong> (2020) daha da ileri gider: paralelleştirilebilir,
      artımlı ve genişletilebilir çıktılıdır. Tipik donanımda
      SHA-256'dan 10–20 kat daha hızlıdır. Pratik saldırı yok.
      Zcash, IPFS (SHA-256'nın yanında) ve içerik adresli derleme
      araçları tarafından benimsenmiştir.
    </p>
    <p>
      Her iki ucu da kontrol ettiğiniz dahili sistemler için BLAKE3
      güçlü bir varsayılandır. Standartlarla birlikte çalışabilirlik
      için SHA-256'yı seçin.
    </p>

    <h2>Şifreler farklıdır &mdash; bir KDF kullanın</h2>
    <p>
      Şifre özetleme, dosya özetlemeden zıt hedeflere sahiptir.
      Fonksiyonun <strong>yavaş</strong> ve bellek yoğun olmasını
      istersiniz, böylece çalıntı bir veritabanının karşılaşacağı
      GPU kümelerine direnir.
    </p>
    <p>
      <strong>Argon2id</strong> (2015 Şifre Özetleme Yarışması
      birincisi, RFC 9106'da standartlaştırılmıştır) OWASP'ın güncel
      önerisidir. 2026 başlangıç noktası olarak
      <code> t=3</code> yineleme, <code>m=12288</code> KiB bellek,
      <code> p=1</code> paralellik ile yapılandırın.
    </p>
    <p>
      <strong>scrypt</strong> (2009) de bellek zorlamalıdır ve iyi
      analiz edilmiştir. <code>N=131072, r=8, p=1</code>
      varsayılanları iyi bir başlangıç noktasıdır.
    </p>
    <p>
      <strong>bcrypt</strong> (1999) daha eskidir ancak özellikle
      Argon2 mevcut olmadığında hâlâ kabul edilebilir. 2026'da 12
      veya daha yüksek bir iş faktörü kullanın; 10, 2015'te iyiydi,
      şimdi modern GPU'larda çok hızlı. bcrypt'in girdileri 72
      baytta kırptığını unutmayın.
    </p>
    <p>
      En az 600.000 yineleme ile <strong>PBKDF2-HMAC-SHA256</strong>
      (OWASP 2023 kılavuzu), FIPS onaylı ilkeller gerektiren
      düzenlenmiş ortamlarda kabul edilebilir, ancak bellek zorlamalı
      değildir ve GPU saldırılarına alternatiflerden daha hızlı
      yenilir.
    </p>

    <h2>Tuzlama</h2>
    <p>
      Tuz, şifreye özetlemeden önce eklenen benzersiz bir rastgele
      değerdir. Gökkuşağı tablolarını etkisiz hale getirir ve aynı
      şifreye sahip iki kullanıcının farklı özetler almasını sağlar.
    </p>
    <p>
      Minimum tuz uzunluğu: 16 bayt kriptografik olarak rastgele
      veri. Kullanıcı başına oluşturun, özetin yanında saklayın.
      Argon2, bcrypt ve scrypt, tuzu çıktı dizelerine gömülü olarak
      saklar &mdash; ayrıca yönetmeniz gerekmez.
    </p>

    <h2>Biberleme &mdash; isteğe bağlı ek katman</h2>
    <p>
      Biber, her kullanıcı için aynı olan, özetlemeden önce karıştırılan
      gizli bir değerdir. Uygulama yapılandırmasında tutulur,
      veritabanında değil. Veritabanı tek başına çalınırsa, saldırganın
      kaba kuvvet için bibere ihtiyacı olur.
    </p>
    <p>
      Biberleme, yavaş özetlemenin yerini almaz, ancak onun üzerine
      katman ekler. En büyük sorun: biberi döndürmek her şifre
      özetini geçersiz kılar. Sürümlü bir şema kullanın:
      <code> pepper_v2_value</code> ve sürümü özetin yanında
      saklayın.
    </p>

    <h2>HMAC ve anahtarlı özetleme</h2>
    <p>
      Düz bir özet kimlik doğrulaması yapamaz &mdash; H herkese açık
      olduğu için herkes <code> H(mesaj)</code> üretebilir. HMAC
      (<code>HMAC(anahtar, mesaj)</code>) bunu düzeltir. API isteği
      imzalama, JWT HS256 tokenları ve çerez bütünlüğü için kullanılır.
    </p>
    <p>
      Çoğu modern kütüphane <code>hmac(anahtar, mesaj,
      'sha256')</code> işlevini sunar. Hem mesaj hem de anahtar
      doğrulama tarafında bulunmalıdır. Zamanlama sızıntılarını
      önlemek için bir HMAC'ı kontrol ederken sabit zamanlı karşılaştırma
      kullanın (Node'da <code>crypto.timingSafeEqual</code>).
    </p>

    <h2>Özet uzunluğu ve çıktı gösterimi</h2>
    <p>
      SHA-256, 32 bayt üretir. Tipik gösterimler:
    </p>
    <p>
      <strong>Hex</strong>: 64 karakter. İnsan tarafından okunabilir.
    </p>
    <p>
      <strong>Base64</strong>: dolgulu 44 karakter, dolgusuz 43
      karakter. Daha kompakt.
    </p>
    <p>
      <strong>Base32</strong>: 56 karakter. Büyük/küçük harf duyarsız;
      URL'lerde kullanılır.
    </p>
    <p>
      Güvenli bir özeti kimlik amaçları için kısaltmak, doğum günü
      sınırı saldırıları göz önüne alındığında çakışma direnci için
      yaklaşık 128 bit (32 hex karakter) kadar güvenlidir. Güvenlik
      açısından hassas kimlikler için asla bunun altına kısaltmayın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Şifreleri SHA-256 ile özetlemek.</strong> Herhangi bir
      hızlı özet, şifreler için bir hatadır. Sıradan bir GPU saniyede
      milyarlarca SHA-256 hesaplar &mdash; 8 karakterlik bir şifre
      saatler içinde kırılır. Argon2id, scrypt veya bcrypt kullanın.
    </p>
    <p>
      <strong>Tuz eksikliği.</strong> Aynı şifreler aynı özetleri
      alır, gökkuşağı tabloları çalışır, tek bir ihlal tüm kullanıcı
      sütunlarını açığa çıkarır. Her zaman tuzlayın.
    </p>
    <p>
      <strong>Tuzu kullanıcılar arasında yeniden kullanmak.</strong>
      Paylaşılan bir tuz, tuz olmamasına eşdeğerdir &mdash; gökkuşağı
      tabloları buna karşı yeniden oluşturulabilir. Her kullanıcı
      için taze.
    </p>
    <p>
      <strong>Bütünlük için MD5 kullanmak.</strong> &ldquo;Bu sadece
      bir sağlama toplamı.&rdquo; Bir saldırgan dosyayı etkileyebiliyorsa
      değil. Önemli olan herhangi bir bütünlük kontrolü için SHA-256
      veya BLAKE3 kullanın.
    </p>
    <p>
      <strong>Özetleri <code>==</code> ile karşılaştırmak.</strong>
      Dize eşitliği zamanlama bilgisi sızdırır &mdash; saldırganlar
      eşleşme konumunu ikili arayabilir. Sabit zamanlı karşılaştırma
      kullanın.
    </p>
    <p>
      <strong>Özetleri şifreleme olarak ele almak.</strong> Özetler
      tek yönlüdür. Bir özetin &ldquo;şifresini çözmek&rdquo; diye
      bir şey yoktur. Orijinal veriyi kurtarmanız gerekiyorsa,
      şifrelemeye (AES, ChaCha20) ihtiyacınız vardır, özetlemeye
      değil.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      MD5, SHA-1, SHA-256, SHA-512 ve daha fazlası arasında özetler
      oluşturun{" "}
      <a href="/tools/hash-generator">özet oluşturucu</a> ile. Bunu,
      bu özetlerin koruyacağı girdiler için{" "}
      <a href="/tools/password-generator">şifre oluşturucu</a>
      {" "}ve bir özetin aşırı olacağı benzersiz, hassas olmayan
      kimliklere ihtiyacınız olduğunda{" "}
      <a href="/tools/uuid-generator">UUID oluşturucu</a> ile
      eşleştirin.
    </p>
  </>
);