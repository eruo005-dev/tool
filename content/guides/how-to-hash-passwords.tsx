import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Parola depolama, yanlış yapılması en kolay şeylerden biridir ve yanlış yapıldığında en felaket sonuçlardan birini doğurur. Her yıl büyük bir şirket, düz metin veya zayıf hashlenmiş parolalarla dolu bir veritabanını sızdırır ve her yıl geliştiriciler aynı hataları yapmaya devam eder: MD5, tuzsuz SHA-256, ev yapımı gizleme şemaları. Bu kılavuz, hash'in gerçekte ne olduğunu, hızlı hash'lerin neden parolalar için yanlış olduğunu ve bunun yerine ne kullanılması gerektiğini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Hash'leme ve şifreleme arasındaki fark</h2>
    <p>
      Bir <strong>hash</strong> tek yönlüdür. Girdiden hesaplayabilirsiniz ancak tersine çeviremezsiniz. Bir hash verildiğinde, girdiyi bulmanın tek yolu girdileri tahmin etmek ve hash'lerinin eşleşip eşleşmediğini kontrol etmektir.
    </p>
    <p>
      <strong>Şifreleme</strong> tersine çevrilebilir — bir anahtar vardır ve anahtarla orijinali kurtarabilirsiniz. Şifreleme, parola depolama için yanlış araçtır çünkü bir saldırgan veritabanını ele geçirirse büyük olasılıkla anahtarı da ele geçirir ve ardından tüm parolalar düz metin haline gelir. Hash'leme, anahtarı tamamen denklemden çıkarır.
    </p>

    <h2>Düz metin neden en büyük hatadır</h2>
    <p>
      Parolaları olduğu gibi depolamak, herhangi bir veritabanı sızıntısının oyunun sonu olduğu anlamına gelir. Sadece siteniz için değil — parola tekrar kullanımı evrenseldir, bu nedenle sızdırılan düz metniniz, saldırganlara kullanıcılarınızın e-postası, bankası ve diğer her şeyi için kimlik bilgileri sağlar. Kullanıcılar e-postalarını <a href="/tools/password-breach-checker">bir ihlal denetleyicisinden</a> geçirerek neyin sızdığını görebilir, ancak o zamana kadar hasar çoktan oluşmuştur. Asla, asla düz metin depolamayın.
    </p>

    <h2>Düz SHA-256 neden de yanlıştır</h2>
    <p>
      SHA-256, hızlı ve güvenli bir kriptografik hash'tir. Bu, dosya bütünlüğü kontrolleri için harikadır ve parolalar için berbattır. Modern bir GPU, saniyede yaklaşık on milyar SHA-256 hash'i hesaplayabilir. Sızdırılmış bir veritabanı ve 2.000 dolarlık bir GPU ile bir saldırgan, bir hafta sonu boyunca her 8 karakterli parolayı deneyebilir.
    </p>
    <p>
      SHA-256'yı sağlama toplamları için harika yapan hız, onu parola depolama için berbat yapar. Tam tersini istiyorsunuz: <em>kasıtlı olarak yavaş</em> olan bir hash, böylece çalınmış bir veritabanıyla bile kaba kuvvet saldırısı ekonomik olarak uygulanamaz hale gelir.
    </p>

    <h2>bcrypt, Argon2 ve scrypt ne ekler</h2>
    <p>
      Bunlar, kasıtlı olarak yavaş ve bellek açısından yoğun olacak şekilde tasarlanmış parolaya özel hash'leme işlevleridir. bcrypt, 20 yıldır varsayılandır ve hala iyidir. Argon2, 2015'te Parola Hash'leme Yarışması'nı kazandı ve yeni projeler için mevcut öneridir. scrypt ikisinin arasında yer alır.
    </p>
    <p>
      Her üçü de bir <strong>iş faktörünü</strong> ayarlamanıza izin verir — tek bir hash'in ne kadar CPU ve belleğe mal olduğu. Bu sayıyı, <em>sizin</em> giriş uç noktanızın ~100-250ms sürmesi (kullanıcılar için kabul edilebilir) ancak çalınmış bir veritabanını kaba kuvvetle kırmaya çalışan bir saldırganın milyarlar yerine çekirdek başına saniyede ~5 hash alması için ayarlarsınız. Bu fark, tüm amacı oluşturur.
    </p>

    <h2>Tuz: kullanıcı başına benzersiz</h2>
    <p>
      Bir <strong>tuz</strong>, hash ile birlikte depolanan kullanıcı başına rastgele bir değerdir. Parolayı hash'lerken, <code>parola + tuz</code> değerini hash'lersiniz. Amaç: tuz olmadan, aynı parolaya sahip iki kullanıcı aynı hash'i üretir ve bir saldırgan yaygın parolalar için hash'leri önceden hesaplayabilir (gökkuşağı tabloları) ve milyonlarcasını aynı anda eşleştirebilir. Kullanıcı başına benzersiz bir tuz ile saldırgan, her kullanıcıya ayrı ayrı saldırmalıdır — bu büyük bir yavaşlamadır.
    </p>
    <p>
      Modern kütüphaneler sizin için tuzu oluşturur ve saklar — siz onu seçmezsiniz, onu yönetmezsiniz. bcrypt, tuzu depolanan hash dizesinin içine gömer. Tuzları manuel olarak yönetiyorsanız, yanlış kütüphaneyi kullanıyorsunuz demektir.
    </p>

    <h2>Biber: tek bir küresel sır</h2>
    <p>
      Bir <strong>biber</strong>, hash girdisine eklenen, veritabanı dışında (bir ortam değişkeninde, sır yöneticisinde veya HSM'de) saklanan uygulama çapında bir sırdır. Fikir: bir saldırgan veritabanını ancak sır deposunu çalmazsa, biber eksik olduğu için zayıf parolaları bile kaba kuvvetle kıramaz. İsteğe bağlı ancak ucuz bir derinlemesine savunma önlemidir.
    </p>

    <h2>Kural: kendi yönteminizi oluşturmayın</h2>
    <p>
      Kimlik doğrulama için, platformunuzun sağladığı iyi denetlenmiş kütüphaneyi kullanın. Node: <code>bcrypt</code> veya <code>argon2</code>. Python: <code>passlib</code> veya <code>argon2-cffi</code>. Go: <code>golang.org/x/crypto/bcrypt</code>. Ruby/Rails: <code>has_secure_password</code> aracılığıyla <code>bcrypt</code>. Bunlar tuz oluşturma, iş faktörü ayarlama ve zamanlama güvenli karşılaştırma işlemlerini halleder. Hash kodunu kendiniz yazıyorsanız, neredeyse kesinlikle bir hata ekliyorsunuz demektir.
    </p>

    <h2>Genel amaçlı hash'leme farklıdır</h2>
    <p>
      Dosya bütünlüğü, sağlama toplamları, içerik adresli depolama veya yineleme kaldırma için SHA-256 tam olarak doğrudur. Hızlıdır, çakışmaya dayanıklıdır ve standartlaştırılmıştır. <a href="/tools/hash-generator">Hash oluşturucumuzla</a> bir tane oluşturun. "Kasıtlı olarak yavaş" kuralı parolaya özeldir — her git commit hash'inin 200ms sürmesini istemezsiniz. İş için doğru hash'i kullanın: parolalar için Argon2 veya bcrypt, diğer her şey için SHA-256.
    </p>
  </>
);