export const intro = (
  <>
    <p>
      2026 yılı için şifre güvenliği konusunda eksiksiz bir rehber: entropi gerçekte nasıl çalışır,
      neden &ldquo;P@ssw0rd123!&rdquo; zayıftır, neden &ldquo;correct horse battery
      staple&rdquo; artık yeterli değildir ve mevcut saldırı yetenekleri karşısında hangi şifre
      uzunluğu ve yapısı yeterlidir.
    </p>
    <p>
      Çoğu şifre tavsiyesi 2005 yılından kalma olup tehdit modelinin nasıl değiştiğini görmezden
      gelir: kaba kuvvet artık darboğaz değildir (CSPRNG'ler ve uzunluk onu yener);
      yeniden kullanım, kimlik avı ve kimlik bilgisi doldurma asıl sorundur. Bu rehber önce
      matematiği, ardından pratik tavsiyeleri ele alır &mdash; her ikisi de halk bilgeliğine değil,
      mevcut saldırgan yeteneklerine dayanır.
    </p>
  </>
);

export const toc = [
  { id: "entropy-formula", label: "Entropi gerçekte ne anlama gelir" },
  { id: "real-numbers", label: "Yapıya göre gerçek entropi (örneklerle)" },
  { id: "attacker-speeds", label: "2026'da saldırgan hızları" },
  { id: "diceware", label: "Diceware parolaları: matematik ve nasıl yapılır" },
  { id: "managers", label: "Şifre yöneticileri: hangisi kullanılmalı" },
  { id: "two-factor", label: "İki faktörlü kimlik doğrulama: neden önemlidir" },
  { id: "common-myths", label: "Ölmeyen mitler" },
  { id: "real-attacks", label: "Gerçek saldırılar: şifreler gerçekte nasıl sızdırılır" },
  { id: "policies", label: "İyi şifre politikaları nasıl görünür" },
  { id: "site-categories", label: "Site türüne göre uzunluk önerileri" },
  { id: "checklist", label: "Kişisel güvenlik kontrol listesi" },
];

export const body = (
  <>
    <h2 id="entropy-formula">Entropi gerçekte ne anlama gelir</h2>
    <p>
      Şifre entropisi, öngörülemezliği bit cinsinden ölçer. Formül:
    </p>
    <pre>{`entropi = log2(havuz_boyutu) × uzunluk`}</pre>
    <p>
      Burada <code>havuz_boyutu</code> olası karakter sayısı ve
      <code> uzunluk</code> şifre uzunluğudur. 26 harfli bir havuzdan 10 karakterli bir şifre:
      log2(26) &times; 10 = 4,7 &times; 10 = 47 bit.
    </p>
    <p>
      Bitler arama alanını ikiye katlar: 1 bit = 2 seçenek, 10 bit = 1.024 seçenek, 80 bit
      = ~1,2 sekstilyon seçenek. Her ek bit, kaba kuvvetle kırma süresini ortalama ikiye katlar.
    </p>
    <p>
      <strong>Kritik uyarı</strong>: bu formül, karakterlerin eşit şekilde RASTGELE olduğunu varsayar.
      &ldquo;qwerasdfzxcv&rdquo; şifresi teknik olarak 26'lık bir havuzdan 12 karakter kullanır (teorik olarak 56 bit),
      ancak herhangi bir makul saldırganın ilk 10.000 şifresi arasındadır (~13 bit etkili). Formül size
      mümkün olan maksimum entropiyi söyler; şifrenin buna ulaşıp ulaşmadığı nasıl oluşturulduğuna bağlıdır.
    </p>

    <h2 id="real-numbers">Şifre yapısına göre gerçek entropi</h2>
    <table>
      <thead>
        <tr>
          <th>Şifre yapısı</th>
          <th>Teorik entropi</th>
          <th>Gerçek dünya entropisi</th>
          <th>Kırma süresi (çevrimdışı GPU)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&ldquo;password&rdquo; (ilk 100 listesi)</td>
          <td>38 bit</td>
          <td>~7 bit</td>
          <td>Anında (herhangi bir saldırgan sözlüğünde)</td>
        </tr>
        <tr>
          <td>&ldquo;P@ssw0rd123!&rdquo; (leet-speak yaygın kelime)</td>
          <td>78 bit</td>
          <td>~25 bit</td>
          <td>Saniyeler (kural tabanlı sözlük saldırısı)</td>
        </tr>
        <tr>
          <td>&ldquo;Tr1nity@2026&rdquo; (isim + yıl + sembol)</td>
          <td>78 bit</td>
          <td>~32 bit</td>
          <td>Saatler</td>
        </tr>
        <tr>
          <td>10 rastgele a-z karakteri</td>
          <td>47 bit</td>
          <td>47 bit</td>
          <td>~3 gün (10⁹ tahmin/sn)</td>
        </tr>
        <tr>
          <td>10 rastgele a-zA-Z0-9</td>
          <td>60 bit</td>
          <td>60 bit</td>
          <td>~36 yıl</td>
        </tr>
        <tr>
          <td>16 rastgele a-zA-Z0-9 + semboller (94 havuz)</td>
          <td>105 bit</td>
          <td>105 bit</td>
          <td>10²² yıl (kırılamaz)</td>
        </tr>
        <tr>
          <td>20 rastgele karakter (94 havuz)</td>
          <td>131 bit</td>
          <td>131 bit</td>
          <td>Evrenin ısı ölümü kadar kırılamaz</td>
        </tr>
        <tr>
          <td>Diceware 4 rastgele kelime (7.776 kelimelik liste)</td>
          <td>52 bit</td>
          <td>52 bit</td>
          <td>~yıl (10⁹/sn)</td>
        </tr>
        <tr>
          <td>Diceware 6 rastgele kelime</td>
          <td>77 bit</td>
          <td>77 bit</td>
          <td>~10⁶ yıl (10⁹/sn)</td>
        </tr>
        <tr>
          <td>Diceware 7 rastgele kelime</td>
          <td>91 bit</td>
          <td>91 bit</td>
          <td>~10¹¹ yıl</td>
        </tr>
      </tbody>
    </table>
    <p>
      <strong>Çıkarımın özeti</strong>: insan tarafından seçilen şifreler, teorik entropilerinin
      %60-80'ini kaybeder çünkü insanlar rastgele değildir. CSPRNG tarafından oluşturulan şifreler
      (veya gerçek diceware atışları) teorik entropilerine ulaşır.
    </p>

    <h2 id="attacker-speeds">2026'da saldırgan hızları</h2>
    <p>
      Kaba kuvvet hızları, hash algoritmasına ve donanıma bağlıdır. Gerçek sayılar:
    </p>
    <ul>
      <li>
        <strong>MD5 (eski, kırık)</strong>: Tek bir üst düzey GPU'da (RTX 5090 veya benzeri) ~10¹¹ tahmin/sn.
        Küme: 10¹³+. MD5, saldırganlar için tuzsuz olarak uygundur.
      </li>
      <li>
        <strong>SHA-1 (kullanımdan kaldırıldı)</strong>: ~3 &times; 10¹⁰ tahmin/sn.
      </li>
      <li>
        <strong>bcrypt maliyet 12 (varsayılan)</strong>: GPU'da ~30.000 tahmin/sn. Yavaş olacak şekilde
        tasarlanmıştır. İyi korunan hizmetlerin çoğu bcrypt veya Argon2 kullanır.
      </li>
      <li>
        <strong>Argon2id (modern öneri)</strong>: Tipik parametrelerde ~10.000 tahmin/sn. Bellek yoğun,
        GPU'ya dayanıklı.
      </li>
      <li>
        <strong>scrypt</strong>: Parametrelere bağlı olarak ~50.000 tahmin/sn.
      </li>
    </ul>
    <p>
      <strong>Anlamı</strong>: Argon2id ile korunan 60 bit entropili şifreler, çevrimdışı kaba kuvvete
      karşı esasen sonsuza kadar dayanır. MD5 ile korunan aynı şifreler günler içinde düşer. Hash
      algoritması, şifre uzunluğu kadar önemlidir.
    </p>

    <h2 id="diceware">Diceware parolaları: matematik ve nasıl yapılır</h2>
    <p>
      Diceware, 7.776 kelimelik bir listeden kelimeler seçmek için fiziksel zar kullanır. Her kelime
      log2(7.776) = 12,92 bit entropi sağlar. 5 zar atışı 5 haneli bir sayı üretir; bu sayı bir
      kelimeye karşılık gelir.
    </p>
    <p>
      <strong>Nasıl yapılır</strong>:
    </p>
    <ol>
      <li>EFF uzun kelime listesini alın (eff.org/dice). 7.776 girişi vardır.</li>
      <li>5 standart zar atın (veya bir zarı 5 kez). Değerleri soldan sağa 5 haneli bir sayı olarak okuyun, örn. 41524.</li>
      <li>Listede bu sayıyı bulun. Bu sizin ilk kelimenizdir.</li>
      <li>İstenen entropi için 5-7 kez tekrarlayın.</li>
      <li>Kelimeleri boşluk veya benzersiz bir ayırıcı ile birleştirin: &ldquo;outlast-recolor-magnetic-finance-clutch-glaze&rdquo;.</li>
    </ol>
    <p>
      <strong>Modern öneri</strong>: Sıradan şifreler için 6 kelime (77 bit), önemli şifreler için (ana şifre, bankacılık, hassas
      hesaplar) 7 kelime (91 bit). Bir ayırıcı karakter eklemek veya bir kelimeyi büyük harfle yazmak birkaç ekstra bit
      ekler ve kelime listesi tabanlı herhangi bir sözlük saldırısını kırar.
    </p>
    <p>
      <strong>Neden fiziksel zar?</strong> Bilgisayar tabanlı RNG'ler, CSPRNG'ler ise genellikle sorunsuzdur (tarayıcılarda
      <code>crypto.getRandomValues()</code>, Python'da <code>secrets.choice()</code>). Ancak zarlar, kötü amaçlı yazılım
      tarafından sessizce tehlikeye atılamayacak denetlenebilir rastgelelik sağlar.
    </p>

    <h2 id="managers">Şifre yöneticileri: hangisi kullanılmalı</h2>
    <p>
      Bir şifre yöneticisi, ölçekte gerçekten önemli olan tek şifre sorununu çözer:
      <strong>yeniden kullanım</strong>. Bir yönetici olmadan, insanlar tipik olarak yüzlerce hesapta 5-10 şifreyi
      yeniden kullanır; bir ihlal hepsini tehlikeye atar. Bir yönetici ile: her hesap benzersiz bir rastgele 20+ karakterli
      şifre alır ve bir ana parola kasayı korur.
    </p>
    <p>
      <strong>En iyi seviye (önerilen)</strong>:
    </p>
    <ul>
      <li>
        <strong>Bitwarden</strong>: açık kaynak, bireysel kullanım için ücretsiz, premium için yılda 10 dolar.
        Denetlenmiş, kendi barındırma seçeneği, güçlü şifreleme. Maliyet / özellikler / güven dengesi en iyisi.
      </li>
      <li>
        <strong>1Password</strong>: Bireysel için yılda 36 dolar, aile için yılda 60 dolar. Şık kullanıcı arayüzü,
        tescilli ancak iyi denetlenmiş. Seyahat modu (sınırlarda kasaları gizler) benzersizdir.
      </li>
      <li>
        <strong>KeePassXC</strong>: açık kaynak, ücretsiz, tamamen çevrimdışı. Kasayı yerel bir dosya olarak saklar.
        Paranoyak kullanıcılar için en iyisi; kendi bulutunuz (Dropbox vb.) ile senkronize edin.
      </li>
    </ul>
    <p>
      <strong>Tarayıcıya yerleşik (kabul edilebilir ancak daha az güvenli)</strong>: Chrome, Firefox,
      Safari. Ücretsiz, kullanışlı. Kötü amaçlı yazılımlara karşı özel yöneticilerden daha az korumalıdır çünkü
      kasa anahtarlarına tarayıcıda yerleşik saldırganların erişmesi daha kolaydır.
    </p>
    <p>
      <strong>Kaçının</strong>: LastPass (zayıf ifşa ile birden çok ihlal), güvenlik denetimine açık olmayan
      herhangi bir şifre yöneticisi, şifreleri düz metin olarak saklayan herhangi bir şey.
    </p>

    <h2 id="two-factor">İki faktörlü kimlik doğrulama: neden önemlidir</h2>
    <p>
      130 bitlik bir şifre bile kimlik avına (kullanıcının sahte bir siteye şifresini yazması) ve kimlik
      bilgisi doldurmaya (saldırganın şifreyi başka bir ihlalden alması) karşı savunmasızdır. İki faktörlü
      kimlik doğrulama (2FA), ikinci bir kimlik kanıtı ekler.
    </p>
    <p>
      <strong>Güvenliğe göre sıralanmış yöntemler</strong>:
    </p>
    <ol>
      <li>
        <strong>Donanım güvenlik anahtarları (YubiKey, Titan)</strong>: 25-75 dolarlık USB veya NFC çubuğu.
        Tasarım gereği kimlik avına dayanıklıdır; anahtar, isteği gerçek alan adına göre kriptografik olarak
        imzalar. Yüksek riskli hesaplar (e-posta, finans, yönetici) için altın standarttır.
      </li>
      <li>
        <strong>Passkeys (FIDO2/WebAuthn)</strong>: Modern işletim sistemlerine (iOS, Android,
        macOS, Windows 11) yerleşiktir. Güvenlik anahtarlarıyla aynı kriptografik güçte; cihaz biyometrisini
        kullanır. Kimlik doğrulamanın geleceği; büyük sitelerde kullanıma sunuluyor.
      </li>
      <li>
        <strong>TOTP uygulamaları (Authy, Google Authenticator, 1Password)</strong>: Her 30 saniyede bir
        değişen 6 haneli kod. Kimlik bilgisi doldurmaya karşı güçlü; karmaşık kimlik avına (gerçek zamanlı
        aktarma saldırıları) karşı savunmasızdır. Güvenlik anahtarlarının desteklenmediği yerlerde bunu kullanın.
      </li>
      <li>
        <strong>SMS</strong>: İkinci bir faktör, ancak SIM değiştirme saldırılarına karşı savunmasızdır (bir
        saldırgan, operatörünüzü numaranızı aktarmaya ikna eder). Hiç yoktan iyidir; TOTP'den kötüdür.
        Yüksek riskli hesaplar için kaçının.
      </li>
    </ol>
    <p>
      <strong>Pratik öneri</strong>: 2FA'yı sunulduğu her yerde etkinleştirin. E-posta, şifre yöneticisi ana
      şifresi, bankacılık ve alan adı kayıt kuruluşu için passkeys veya donanım anahtarları kullanın. Diğer
      her şey için TOTP. SMS yalnızca başka seçenek yoksa.
    </p>

    <h2 id="common-myths">Ölmeyen mitler</h2>
    <ul>
      <li>
        <strong>&ldquo;Şifreleri her 90 günde bir değiştirin&rdquo;</strong>. NIST kılavuzu
        (SP 800-63B), 2017'den beri zorunlu rotasyona KARŞI açıkça tavsiyede bulunur. Zorunlu
        rotasyon daha zayıf şifreler üretir (insanlar &ldquo;1&rdquo; sonra &ldquo;2&rdquo; ekler...).
        Bilinen bir ihlalden sonra rotasyon yapın, bir programa göre değil.
      </li>
      <li>
        <strong>&ldquo;Bileşim kuralları şifreleri daha güçlü yapar&rdquo;</strong>. &ldquo;1 büyük harf,
        1 sayı, 1 sembol&rdquo; kuralı, saldırganların önce denemeyi bildiği belirli kalıpları zorlar.
        Modern kılavuz: yalnızca uzunluk gerektirin.
      </li>
      <li>
        <strong>&ldquo;İpucu soruları güvenliği artırır&rdquo;</strong>. Annenin kızlık soyadı, ilk araba,
        favori öğretmen &mdash; tümü sosyal medyadan kolayca tahmin edilebilir veya toplanabilir.
        NIST SP 800-63B, mevcut kılavuzda bunları yasaklar.
      </li>
      <li>
        <strong>&ldquo;Ana şifreyi yeniden kullanmayın&rdquo;</strong>. Önemsiz derecede doğru,
        ancak özellikle: şifre yöneticinizin ana şifresi, sahip olduğunuz en yüksek değerli sırdır.
        Benzersiz, uzun bir parola kullanın. Ezberleyin. Bir kasada saklamak üzere kağıda yazın (yöneticide değil).
      </li>
      <li>
        <strong>&ldquo;HTTPS şifremi güvende yapar&rdquo;</strong>. HTTPS, şifrenizi aktarım sırasında
        korur. Alıcı sunucunun tehlikeye atılmasına, şifrenin kötü niyetli bir klona avlanmasına veya şifre
        yöneticisine saldırılmasına karşı koruma sağlamaz. Çok katmanlı savunma.
      </li>
    </ul>

    <h2 id="real-attacks">Gerçek saldırılar: şifreler gerçekte nasıl sızdırılır</h2>
    <p>
      Modern saldırganlar nadiren tek bir hesaba kaba kuvvet uygular. Gerçek saldırı modelleri:
    </p>
    <ol>
      <li>
        <strong>Veritabanı ihlalleri</strong>: saldırgan bir sunucuyu tehlikeye atar, kullanıcı tablosunu
        boşaltır. Hash'ler zayıfsa (MD5, SHA-1, tuzsuz), şifreler çevrimdışı olarak kurtarılır.
        Have I Been Pwned (<a href="https://haveibeenpwned.com">haveibeenpwned.com</a>)
        12+ milyar sızdırılmış kimlik bilgisini kataloglar.
      </li>
      <li>
        <strong>Kimlik bilgisi doldurma</strong>: saldırgan, bir ihlalden sızdırılmış kullanıcı adları+şifreleri
        alır ve bunları diğer sitelerde dener. 2024-2025'te çoğu tüketici sitesindeki saldırıların ~%85'i
        kimlik bilgisi doldurmadır. Savunma: site başına benzersiz şifreler.
      </li>
      <li>
        <strong>Kimlik avı</strong>: saldırgan sahte bir giriş sayfası gönderir, kullanıcı gerçek
        kimlik bilgilerini girer. Kurumsal ihlallerin %90'ından fazlası burada başlar. Savunma: passkeys / donanım
        anahtarları (kimlik avına dayanıklı), eğitim, 2FA.
      </li>
      <li>
        <strong>Kötü amaçlı yazılım</strong>: keylogger, tarayıcı uzantısı hırsızı, şifre yöneticisi
        saldırganı. Savunma: işletim sistemini ve tarayıcıyı güncel tutun, şifre yöneticisi bütünlüğünü
        doğrulayın, en yüksek riskli hesaplar için donanım anahtarları kullanın.
      </li>
      <li>
        <strong>Sosyal mühendislik</strong>: bir müşteri hizmetleri temsilcisini hesabı sıfırlamaya
        ikna etmek. Savunma: hesap kurtarma 2FA'sını etkinleştirin, güvenilir kişiler belirleyin, benzersiz
        kurtarma e-postaları kullanın.
      </li>
      <li>
        <strong>SIM değiştirme</strong>: saldırgan, operatörü numaranızı taşımaya ikna eder.
        Savunma: SMS yerine TOTP / donanım anahtarları, operatör düzeyinde PIN'ler.
      </li>
    </ol>
    <p>
      Dikkat edin: saf kaba kuvvet ilk 6'da değil. Gerçek saldırılar, entropiyi yeniden kullanım,
      kimlik avı veya sosyal mühendislik yoluyla atlar. Bu nedenle şifre yöneticileri + 2FA,
      &ldquo;gerçekten güçlü bir şifre&rdquo; seçmekten daha önemlidir.
    </p>

    <h2 id="policies">İyi şifre politikaları nasıl görünür</h2>
    <p>
      Şifre kuralları belirleyen kuruluşlar için mevcut NIST kılavuzu (SP 800-63B):
    </p>
    <ul>
      <li>Minimum 8 karakter (12+ önerilir).</li>
      <li>En az 64 karaktere izin verin.</li>
      <li>TÜM yazdırılabilir Unicode'a (boşluklar ve emoji dahil) izin verin.</li>
      <li>Bilinen ihlal listelerindeki şifreleri reddedin (HIBP API).</li>
      <li>Bağlama özgü listelerdeki şifreleri reddedin (hizmet adınız, yaygın kullanıcı adları).</li>
      <li>Bileşim kuralı YOK.</li>
      <li>Zorunlu rotasyon YOK.</li>
      <li>İpucu sorusu YOK.</li>
      <li>Hash'leme için Argon2id, bcrypt maliyet 12+ veya scrypt kullanın. Asla MD5 veya SHA-1 kullanmayın.</li>
      <li>Yönetici veya ayrıcalıklı erişime sahip herhangi bir hesap için 2FA gerektirin.</li>
      <li>IP başına / kullanıcı başına başarısız denemelere dayalı kilitlenme politikaları, hız sınırlaması ile.</li>
    </ul>

    <h2 id="site-categories">Site türüne göre uzunluk önerileri</h2>
    <ul>
      <li>
        <strong>Tek kullanımlık / düşük riskli (forumlar, haber siteleri, ücretsiz denemeler)</strong>: 12+
        rastgele karakter.
      </li>
      <li>
        <strong>Sıradan (e-posta, sosyal medya, perakende, iş araçları)</strong>: 16+
        rastgele karakter.
      </li>
      <li>
        <strong>Finansal (bankalar, aracı kurumlar, kripto borsaları)</strong>: 20+
        rastgele karakter + donanım anahtarı veya passkey ile 2FA.
      </li>
      <li>
        <strong>Kritik (şifre yöneticisi ana şifresi, birincil e-posta, alan adı kayıt kuruluşu)</strong>:
        diceware parolası 7+ kelime VEYA 24+ rastgele karakter + donanım anahtarı 2FA.
      </li>
      <li>
        <strong>Sunucu / SSH / API anahtarları</strong>: ed25519 veya RSA-4096 anahtarları, şifreler değil.
        Özel anahtarlarda parolalar 7+ diceware kelimesi.
      </li>
    </ul>

    <h2 id="checklist">Kişisel güvenlik kontrol listesi</h2>
    <ol>
      <li>Bir şifre yöneticisi kurun (Bitwarden ücretsiz yeterlidir).</li>
      <li>7 kelimelik bir diceware ana parolası belirleyin. Ezberleyin. Bir kasada kağıda saklayın.</li>
      <li>Şifre yöneticisinde 2FA'yı etkinleştirin (donanım anahtarı veya passkey).</li>
      <li>Mevcut şifreleri denetleyin: yeniden kullanılan var mı? Benzersiz 20+ karakterli şifreler oluşturun ve saklayın.</li>
      <li>Tüm e-posta adreslerinizle <a href="https://haveibeenpwned.com">haveibeenpwned.com</a> adresinde eski ihlalleri denetleyin.</li>
      <li>E-postada 2FA'yı etkinleştirin (diğer her şey için kurtarma vektörü). Donanım anahtarı veya passkey kullanın.</li>
      <li>Bankacılık, aracı kurumlar ve alan adı kayıt kuruluşunda 2FA'yı etkinleştirin.</li>
      <li>Hesap kurtarma 2FA'sı kurun: güvenilir kişiler, yazdırılmış kurtarma kodları, doğrulanmış yedek telefon.</li>
      <li>Mümkün olan her yerde SMS 2FA'yı TOTP ile değiştirin.</li>
      <li>Kullanılmayan uygulama izinlerini gözden geçirin ve iptal edin (Google, Apple, GitHub OAuth izinleri).</li>
      <li>E-postanızı içeren yeni ihlaller için periyodik olarak kontrol edin (HIBP uyarı gönderebilir).</li>
    </ol>

    <h2>80/20 çıkarımı</h2>
    <p>
      Matematik açıktır: 80+ bit gerçek entropi, kaba kuvvetle kırılamaz. 130+
      bit sonsuza kadar kırılamaz. <a href="/tools/password-generator">Şifre
      oluşturucu</a> varsayılan olarak 130 bitlik şifreler üretir. Zor sorunlar güç
      değildir &mdash; bunlar yeniden kullanım (bir şifre yöneticisi ile çözün), kimlik avı
      (donanım anahtarları / passkeys ile çözün) ve eski ihlallerdir (HIBP denetimi ve
      gelecekte benzersiz şifreler ile çözün).
    </p>
    <p>
      Üç şey yaparsanız: (1) benzersiz 20+ karakterli şifrelerle bir şifre yöneticisi kullanın,
      (2) e-postanızda ve şifre yöneticinizde donanım anahtarı veya passkey 2FA'sını etkinleştirin,
      (3) her 6 ayda bir yeni ihlaller için HIBP'yi kontrol edin &mdash; gerçek dünya saldırı
      vektörlerinin %95'ini halletmiş olursunuz. Kalan %5 (karmaşık kimlik avı, tedarik zinciri
      kötü amaçlı yazılımı) kurumsal savunmalar gerektirir; bireyler için bu üç adım sizi güvenlik
      duruşunda ilk %1'e sokar.
    </p>
  </>
);

export const cta = {
  label: "Kriptografik olarak rastgele 130 bitlik şifreler oluşturun",
  targetSlug: "password-generator",
};

export const faq = [
  {
    q: "12 karakterlik rastgele bir şifreyi kırmak ne kadar sürer?",
    a: "Karakter havuzuna ve hash algoritmasına bağlıdır. 12 rastgele alfanümerik karakter (a-zA-Z0-9, 62 havuz) = ~71 bit entropi. Tüketici GPU'sunda 10¹¹ tahmin/sn ile MD5'e (kırık hash) karşı: ortalama ~750 yıl. bcrypt maliyet 12'ye ~30.000 tahmin/sn ile: ~10¹⁵ yıl (ısı ölümü kırılamaz). Aynı şifre Argon2id'e karşı: benzer. Hash algoritması, şifre uzunluğu kadar önemlidir. Çoğu modern hizmet bcrypt veya Argon2id kullanır. Kamu hizmeti: herhangi bir sızıntı olup olmadığını bilmek için hesaplarınızda HIBP şifre izlemeyi etkinleştirin.",
  },
  {
    q: "'correct horse battery staple' hala güçlü bir parola mı?",
    a: "Yalnızca ~44 bit entropidir (küçük bir listeden 4 rastgele kelime) ve artık saldırgan sözlüklerinde birebir yer alacak kadar ünlüdür. Modern kılavuz: 7.776 kelimelik EFF diceware listesinden 6-7 rastgele kelime = 77-91 bit. Kelime listesi sözlük saldırılarına karşı direnç için bir ayırıcı karakter ekleyin veya bir kelimeyi büyük harfle yazın. Fiziksel zar veya bir CSPRNG (tarayıcılarda crypto.getRandomValues) ile oluşturun. Sonucu ezberleyin. Bunu hafızadan yazmanız gereken her şey için kullanın: şifre yöneticisi ana şifresi, tam disk şifreleme.",
  },
  {
    q: "Güçlü bir şifre oluşturmanın en güvenli yolu nedir?",
    a: "Bir şifre yöneticisinin yerleşik oluşturucusunu VEYA bir CSPRNG tabanlı aracı (Web Crypto'nun getRandomValues'ını kullanan şifre oluşturucumuz gibi) kullanın. Her ikisi de kriptografik olarak rastgele çıktı üretir. ASLA Math.random() (tahmin edilebilir), şifrenizi sunucularına gönderen çevrimiçi siteler (genellikle günlüğe kaydedilir) veya kendi 'rastgele görünen' dizinizi (insanlar rastgele değildir) kullanmayın. Ezberlemeniz gereken şifreler için: 6-7 kelimelik bir parola oluşturmak üzere EFF diceware kelime listesini kullanarak fiziksel zar atın. Oluşturduktan sonra entropiyi doğrulayın; KeePassXC gibi araçlar, kelime listesi saldırılarını hesaba katan entropi tahminleri gösterir.",
  },
  {
    q: "Modern şifre politikalarının çoğu neden bileşim kurallarını atlıyor?",
    a: "NIST SP 800-63B (2017+), bileşim kurallarına ('1 büyük harf, 1 rakam, 1 sembol içermelidir') KARŞI açıkça tavsiyede bulunur. Nedenleri: (1) Saldırganların önce denemeyi bildiği belirli kalıpları zorlarlar ('Password1!' çoğu kuralı karşılar). (2) İnsan yaratıcılığını sınırlayarak daha zayıf şifreler üretirler. (3) Kullanıcıların şifreleri yazmasına veya siteler arasında küçük varyasyonları yeniden kullanmasına neden olurlar. Modern politika: yalnızca uzunluk gerektirin (12+ karakter), bilinen ihlal şifrelerini reddedin (HIBP API), tüm yazdırılabilir Unicode'a izin verin. Sonuç: daha az kullanıcı sürtüşmesiyle daha güçlü gerçek dünya şifreleri.",
  },
];