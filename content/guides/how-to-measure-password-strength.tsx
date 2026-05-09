import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Şifre gücü ölçerler genellikle yalan söyler. &ldquo;Tr0ub4dor&amp;3&rdquo;
      çoğu ölçerde &ldquo;güçlü&rdquo; puanı alır ancak kırılması saatler sürer;
      &ldquo;correct horse battery staple&rdquo; zayıf puan alır ancak kırılması yüzyıllar
      sürer. Güç, sembol karışımıyla değil, entropi ve bilinen saldırılara karşı
      dirençle ilgilidir. Bu kılavuz, şifre gücünün gerçekte neyi ölçtüğünü,
      doğru ölçen (zxcvbn) ve yanlış ölçen (kural tabanlı) ölçerleri, uzunluğun
      karmaşıklığı nasıl yendiğini, ihlal kontrolünün neden &ldquo;güçlü&rdquo;
      olmaktan daha önemli olduğunu ve gerçek dünya saldırı desenlerine direnen
      şifreler oluşturmak için pratik rehberliği kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Güç ölçerlerin ölçmeye çalıştığı şey</h2>
    <p>
      Şifre gücü = bir saldırganın mevcut donanım ve yöntemlerle onu kırması
      için gereken süre. <strong>Tahmin</strong> (kırılma olasılığından önce)
      veya eşdeğer <strong>entropi biti</strong> cinsinden ölçülür.
    </p>
    <p>
      Kötülük sırasına göre azalan üç yaygın yöntem:
    </p>
    <p>
      <strong>Kural tabanlı:</strong> &ldquo;büyük harf, rakam, sembol içermelidir.&rdquo;
      <code>Password1!</code> kodunu güçlü olarak puanlar. Berbat. Çoğu kurumsal
      politika bunu kullanır.
    </p>
    <p>
      <strong>Karakter sınıfları üzerinden Shannon entropisi:</strong>{" "}
      72 sembolden 8 karakter ≈ 49 bit. Sözlük kelimelerini yok sayar.
      Biraz daha iyidir ancak yine de yaygın desenler tarafından kandırılır.
    </p>
    <p>
      <strong>Saldırı simülasyonu (zxcvbn):</strong> gerçek kırma işlemini
      modeller — sözlük saldırıları, leet ikameleri, klavye desenleri, tarihler,
      yaygın isimler. log₁₀(tahmin) 0-4 puanlar. Gerçekçi ve yaygın olarak kullanılır.
    </p>

    <h2>Kural tabanlı ölçer sorunu</h2>
    <p>
      &ldquo;Büyük harf + rakam + sembol + 8 karakter&rdquo; kuralları
      2003 tarihli bir NIST belgesinden gelir. NIST bu kılavuzu 2017'de geri
      çekti, ancak kurumsal BT bunu korudu.
    </p>
    <p>
      <strong>Kurallar kullanıcıları tahmin edilebilir desenlere iter:</strong>
      {" "}ilk harfi büyük yap (<code>Password</code>), bir rakam ekle
      (<code>Password1</code>), bir sembol ekle (<code>Password1!</code>).
      Saldırganlar bunu bilir. Önce bu permütasyonları denerler.
    </p>
    <p>
      <strong>Modern NIST SP 800-63B kılavuzu:</strong> karmaşıklık yerine
      uzunluk. Tüm ASCII ve Unicode'a izin ver. Periyodik rotasyonu zorlama.
      İhlal listelerine karşı kontrol et. Sözlüklere karşı kontrol et.
    </p>

    <h2>Uzunluk karmaşıklığı yener</h2>
    <p>
      26 harfli bir alfabeden 12 karakterli bir şifrenin 26¹² ≈ 9.5 × 10¹⁶
      kombinasyonu vardır. 26 harfli bir alfabeden 16 karakterli bir şifrenin
      26¹⁶ ≈ 4.3 × 10²² kombinasyonu vardır. Dört ekstra küçük harf karakteri,
      büyük harf ve rakam eklemekten daha fazla entropi ekler.
    </p>
    <p>
      Pratik çıkarım: 4-6 rastgele kelimeden oluşan parolalar, hem güvenlik
      hem de akılda kalıcılık açısından &ldquo;güçlü&rdquo; 8 karakterli şifreleri
      yener.
    </p>
    <p>
      <strong>Örnek parolalar:</strong>{" "}
      &ldquo;correct horse battery staple&rdquo; (~44 bit);{" "}
      &ldquo;marine peach rocket helm panda&rdquo; (~55 bit).{" "}
      Her ikisi de hatırlaması daha kolay ve &ldquo;X#9qLmp4&rdquo;den çok daha güçlüdür.
    </p>

    <h2>zxcvbn — doğru ölçer</h2>
    <p>
      <strong>Dropbox'ın zxcvbn</strong> kırma mantığını simüle eder:
    </p>
    <p>
      30.000+ en yaygın şifreyi kontrol eder.
    </p>
    <p>
      Sözlük kelimelerini kontrol eder (ters çevrilmiş dahil,{" "}
      <code>password</code> → <code>drowssap</code>).
    </p>
    <p>
      Leet ikameleri: <code>p@ssw0rd</code>, <code>password</code> gibi puan alır.
    </p>
    <p>
      Klavye desenleri: <code>qwerty</code>, <code>asdfgh</code>,{" "}
      <code>1qaz2wsx</code>.
    </p>
    <p>
      Tekrarlar/diziler: <code>aaaa</code>, <code>1234</code>,{" "}
      <code>abcde</code>.
    </p>
    <p>
      Tarihler: <code>1987</code>, <code>01011990</code>.
    </p>
    <p>
      0-4 arası bir puan ve gereken tahmin sayısı tahmini çıktılar. 4 ≈
      &ldquo;10 yıllık çabayla çevrimdışı yavaş hash kırmadan güvenli&rdquo;.
      3 ≈ &ldquo;çevrimdışı hızlı hashten güvenli&rdquo;.
      2 ≈ &ldquo;çevrimiçi kısıtlanmıştan güvenli&rdquo;. 0-1 ≈ dakikalar içinde kırılır.
    </p>

    <h2>İhlal maruziyeti &gt; teorik güç</h2>
    <p>
      En güçlü görünen şifre, bir ihlalde görünürse tüm değerini kaybeder.
      <code>Hg7$sKq3Mpx9</code> güçlü görünür ancak sızdırılmış bir dökümdeyse,
      saldırganlar kimlik bilgisi doldurmada önce onu dener.
    </p>
    <p>
      <strong>Güç kontrolü + ihlal kontrolü birlikte:</strong>
    </p>
    <p>
      <strong>Güç kontrolü:</strong> şifreyi henüz bilmeyen bir saldırgan için
      teorik zorluk.
    </p>
    <p>
      <strong>İhlal kontrolü:</strong> şifrenin saldırganlar tarafından zaten
      bilinip bilinmediği.
    </p>
    <p>
      İkisini de kullanın. İhlal temiz + zxcvbn 3+ makul bir eşiktir.
    </p>

    <h2>Saldırı modelleri önemlidir</h2>
    <p>
      Güç, bir saldırganın şifreleri nasıl deneyebileceğine bağlıdır:
    </p>
    <p>
      <strong>Çevrimiçi kısıtlanmış:</strong> hız sınırlamalı giriş formu.
      Maksimum ~10 tahmin/saniye. Zayıf şifreler bile kısa saldırılara dayanır.
    </p>
    <p>
      <strong>Çevrimiçi kısıtlanmamış:</strong> sınırlamasız giriş formu.
      100-1000 tahmin/saniye. Zayıf şifreler hızla düşer.
    </p>
    <p>
      <strong>Çevrimdışı hızlı hash (MD5/SHA-1):</strong> şifre hash'i sızdırıldı.
      GPU'da milyar tahmin/saniye. 8 karakterli rastgele şifreler saatler içinde düşer.
    </p>
    <p>
      <strong>Çevrimdışı yavaş hash (bcrypt/argon2):</strong> şifre hash'i sızdırıldı
      ancak hash algoritması kasıtlı olarak yavaş. Binlerce tahmin/saniye.
      12+ karakterli rastgele şifreler hayatta kalır.
    </p>
    <p>
      En kötü durum için tasarlayın: çevrimdışı hızlı hash. Şifreniz orada
      kırılırsa, çok zayıftır.
    </p>

    <h2>Gücün korumadığı şeyler</h2>
    <p>
      <strong>Oltalama:</strong> sahte bir siteye verilen güçlü bir şifre,
      zayıf bir şifredir. Hiçbir güç burada yardımcı olmaz — MFA yardımcı olur.
    </p>
    <p>
      <strong>Keylogger'lar:</strong> saldırgan tuş vuruşlarını yakalarsa, güç
      önemsizdir.
    </p>
    <p>
      <strong>Şifre yöneticisi ihlali:</strong> kasanız tüm güçlü şifreleri
      içerir. Kasa kırılırsa, her şifre sızar. Güçlü bir ana şifre + MFA kullanın.
    </p>
    <p>
      <strong>Oturum hırsızlığı:</strong> çerezler girişten sonra erişim sağlar.
      Güç yardımcı olmaz.
    </p>
    <p>
      Güçlü şifreler önemlidir. Ancak hikayenin tamamı değildir.
    </p>

    <h2>Kullanım durumuna göre iyi şifreler</h2>
    <p>
      <strong>Şifre yöneticisi için ana şifre:</strong> 5+ rastgele kelime,
      akılda kalıcı. Fiziksel olarak güvenli bir yere yazın. Bu unutamayacağınız
      tek şifredir.
    </p>
    <p>
      <strong>Hizmet başına şifreler:</strong> şifre yöneticiniz tarafından
      oluşturulur, 16+ rastgele karakter. Bunları ezberlemezsiniz.
    </p>
    <p>
      <strong>Çevrimdışı / yöneticisiz hesaplar:</strong> içine bir rakam ve
      sembol eklenmiş 4 kelimelik parola — hala akılda kalıcı, hala güçlü.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Kural tabanlı ölçerlere güvenmek.</strong> Ölçerde &ldquo;Güçlü&rdquo;
      genellikle &ldquo;bir saatten kısa sürede kırılabilir&rdquo; anlamına gelir.
    </p>
    <p>
      <strong>Teorik entropiyi optimize ederken şifreleri yeniden kullanmak.</strong>
      {" "}En güçlü şifre bile hizmetler arasında paylaşılırsa zayıftır.
    </p>
    <p>
      <strong>Kişisel bilgileri kullanmak.</strong> Evcil hayvan isimleri,
      doğum günleri, adresler kamu verilerinde görünür. Kırıcılar bilir.
    </p>
    <p>
      <strong>Şifreleri bir programa göre döndürmek.</strong> Sebepsiz rotasyon
      kullanıcıları tahmin edilebilir varyantlara iter. NIST artık rotasyonu
      yalnızca bir ihlalden sonra önermektedir.
    </p>
    <p>
      <strong>Uzunluğu yok saymak.</strong> 8 karakterli &ldquo;güçlü&rdquo;
      bir şifre, 16 karakterli tamamen küçük harfli bir ifadeden daha zayıftır.
    </p>
    <p>
      <strong>Gücü kontrol edip ihlal maruziyetini kontrol etmemek.</strong>
      {" "}Bir ihlaldeki &ldquo;güçlü&rdquo; bir şifre hala tehlikeye atılmıştır.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Şifrenizin gerçek gücünü{" "}
      <a href="/tools/password-strength-checker">şifre gücü denetleyicisi</a>
      ile ölçün. Maruziyet için{" "}
      <a href="/tools/password-breach-checker">şifre ihlal denetleyicisi</a>
      {" "}ve benzersiz güçlü yedekler oluşturmak için{" "}
      <a href="/tools/password-generator">şifre oluşturucu</a>
      ile birlikte kullanın.
    </p>
  </>
);