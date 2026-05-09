export const intro = (
  <>
    <p>
      2026 yılı için eksiksiz bir parola güvenliği referansı: entropi gerçekte nasıl çalışır,
      &ldquo;P@ssw0rd123!&rdquo; neden zayıftır, &ldquo;correct horse battery
      staple&rdquo; neden artık yeterli değildir ve mevcut saldırı yetenekleri göz önüne alındığında
      hangi parola uzunluğu ve yapısı yeterlidir.
    </p>
    <p>
      Çoğu parola tavsiyesi 2005 yılından kalma olup tehdit modelinin nasıl değiştiğini
      görmezden gelir: kaba kuvvet (brute-force) artık darboğaz değildir (CSPRNG'ler ve uzunluk bunu
      yener); yeniden kullanım, kimlik avı (phishing) ve kimlik bilgisi doldurma (credential stuffing)
      asıl sorundur. Bu kılavuz önce matematiği, ardından pratik yönergeleri ele alır &mdash; her ikisi de
      halk bilgeliğine değil, güncel saldırgan yeteneklerine dayanır.
    </p>
  </>
);

export const toc = [
  { id: "entropy-formula", label: "Entropi gerçekte ne anlama gelir" },
  { id: "real-numbers", label: "Yapıya göre gerçek entropi (örneklerle)" },
  { id: "attacker-speeds", label: "2026'da saldırgan hızları" },
  { id: "diceware", label: "Diceware parolaları: matematik ve nasıl yapılır" },
  { id: "managers", label: "Parola yöneticileri: hangisi kullanılmalı" },
  { id: "two-factor", label: "İki faktörlü kimlik doğrulama: neden önemlidir" },
  { id: "common-myths", label: "Ölmeyen mitler" },
  { id: "real-attacks", label: "Gerçek saldırılar: parolalar gerçekte nasıl sızdırılır" },
  { id: "policies", label: "İyi parola politikaları nasıl görünür" },
  { id: "site-categories", label: "Site türüne göre uzunluk önerileri" },
  { id: "checklist", label: "Kişisel güvenlik kontrol listesi" },
];

export const body = (
  <>
    <h2 id="entropy-formula">Entropi gerçekte ne anlama gelir</h2>
    <p>
      Parola entropisi, bit cinsinden öngörülemezliği ölçer. Formül:
    </p>
    <pre>{`entropy = log2(pool_size) × length`}</pre>
    <p>
      Burada <code>pool_size</code> olası karakter sayısı ve
      <code> length</code> parola uzunluğudur. 26 harfli bir havuzdan 10 karakterli bir parola:
      log2(26) &times; 10 = 4.7 &times; 10 = 47 bit.
    </p>
    <p>
      Bitler arama alanını ikiye katlar: 1 bit = 2 seçenek, 10 bit = 1.024 seçenek, 80 bit
      = ~1.2 sekstilyon seçenek. Eklenen her bir bit, kaba kuvvet (brute-force) için gereken ortalama süreyi
      ikiye katlar.
    </p>
    <p>
      <strong>Kritik uyarı</strong>: bu formül, karakterlerin tekdüze bir şekilde
      RASTGELE olduğunu varsayar. &ldquo;qwerasdfzxcv&rdquo; parolası teknik olarak 26'lık bir havuzdan
      12 karakter kullanır (56 bit teorik), ancak herhangi bir mantıklı saldırganın ilk 10.000
      parolası arasındadır (~13 bit etkin). Formül size mümkün olan maksimum entropiyi söyler;
      parolanın bunu başarıp başaramadığı, nasıl oluşturulduğuna bağlıdır.
    </p>

    <h2 id="real-numbers">Parola yapısına göre gerçek entropi</h2>
    <table>
      <thead>
        <tr>
          <th>Parola yapısı</th>
          <th>Teorik entropi</th>
          <th>Gerçek dünya entropisi</th>
          <th>Kırma süresi (çevrimdışı GPU)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&ldquo;password&rdquo; (ilk-100 listesi)</td>
          <td>38 bit</td>
          <td>~7 bit</td>
          <td>Anında (herhangi bir saldırgan sözlüğünde)</td>
        </tr>
        <tr>
          <td>&ldquo;P@ssw0rd123!&rdquo; (leet-konuşma yaygın kelime)</td>
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
          <td>Saniyede 10⁹ tahminde ~3 gün</td>
        </tr>
        <tr>
          <td>10 rastgele a-zA-Z0-9</td>
          <td>60 bit</td>
          <td>60 bit</td>
          <td>~36 yıl</td>
        </tr>
        <tr>
          <td>16 rastgele a-zA-Z0-9 + sembol (94 havuz)</td>
          <td>105 bit</td>
          <td>105 bit</td>
          <td>10²² yıl (kırılamaz)</td>
        </tr>
        <tr>
          <td>20 rastgele karakter (94 havuz)</td>
          <td>131 bit</td>
          <td>131 bit</td>
          <td>Evrenin-ısı-ölümü kırılamaz</td>
        </tr>
        <tr>
          <td>Diceware 4 rastgele kelime (7.776 kelimelik liste)</td>
          <td>52 bit</td>
          <td>52 bit</td>
          <td>Saniyede 10⁹ ile ~yıl</td>
        </tr>
        <tr>
          <td>Diceware 6 rastgele kelime</td>
          <td>77 bit</td>
          <td>77 bit</td>
          <td>Saniyede 10⁹ ile ~10⁶ yıl</td>
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
      <strong>Çıkarımın şekli</strong>: insan tarafından seçilen parolalar, teorik
      entropilerinin %60-80'ini kaybeder çünkü insanlar rastgele değildir. CSPRNG tarafından oluşturulan
      parolalar (veya gerçek diceware atışları) teorik entropilerine ulaşır.
    </p>

    <h2 id="attacker-speeds">2026'da saldırgan hızları</h2>
    <p>
      Kaba kuvvet (brute-force) hızları, hash algoritmasına ve donanıma bağlıdır. Gerçek sayılar:
    </p>
    <ul>
      <li>
        <strong>MD5 (eski, kırık)</strong>: Tek bir üst düzey GPU'da (RTX 5090 veya benzeri) saniyede ~10¹¹ tahmin.
        Küme: 10¹³+. MD5, saldırganlar için tuzsuz (unsalted) olmaya uygundur.
      </li>
      <li>
        <strong>SHA-1 (kullanımdan kaldırıldı)</strong>: Saniyede ~3 &times; 10¹⁰ tahmin.
      </li>
      <li>
        <strong>bcrypt maliyet 12 (varsayılan)</strong>: Bir GPU'da saniyede ~30.000 tahmin. Yavaş
        olacak şekilde tasarlanmıştır. İyi korunan çoğu hizmet bcrypt veya Argon2 kullanır.
      </li>
      <li>
        <strong>Argon2id (modern öneri)</strong>: Tipik parametrelerde saniyede ~10.000 tahmin.
        Bellek yoğun, GPU'ya dayanıklı.
      </li>
      <li>
        <strong>scrypt</strong>: Parametrelere bağlı olarak saniyede ~50.000 tahmin.
      </li>
    </ul>
    <p>
      <strong>Anlamı</strong>: Argon2id ile korunan 60 bit entropili parolalar,
      çevrimdışı kaba kuvvet (brute force) saldırılarına karşı esasen süresiz olarak hayatta kalır. MD5 ile korunan
      aynı parolalar günler içinde düşer. Hash algoritması, parola uzunluğu kadar önemlidir.
    </p>

    <h2 id="diceware">Diceware parolaları: matematik ve nasıl yapılır</h2>
    <p>
      Diceware, 7.776 kelimelik bir listeden kelimeler seçmek için fiziksel zarlar kullanır. Her kelime
      log2(7.776) = 12,92 bit entropi sağlar. 5 zar atışı 5 basamaklı bir
      sayı üretir; bu sayı bir kelimeyle eşleşir.
    </p>
    <p>
      <strong>Nasıl yapılır</strong>:
    </p>
    <ol>
      <li>EFF uzun kelime listesini alın (eff.org/dice). 7.776 girişi vardır.</li>
      <li>5 standart zar atın (veya bir zarı 5 kez). Değerleri soldan sağa 5 basamaklı bir sayı olarak okuyun, örn., 41524.</li>
      <li>Listede bu sayıyı bulun. Bu sizin ilk kelimenizdir.</li>
      <li>İstenen entropi için 5-7 kez tekrarlayın.</li>
      <li>Kelimeleri boşluk veya benzersiz bir ayırıcı ile birleştirin: &ldquo;outlast-recolor-magnetic-finance-clutch-glaze&rdquo;.</li>
    </ol>
    <p>
      <strong>Modern öneri</strong>: Sıradan parolalar için 6 kelime (77 bit),
      önemli olanlar için (ana parola, bankacılık, hassas
      hesaplar) 7 kelime (91 bit). Bir ayırıcı karakter eklemek veya bir kelimeyi büyük harfle başlatmak birkaç ekstra
      bit ekler ve herhangi bir kelime listesi tabanlı sözlük saldırısını kırar.
    </p>
    <p>
      <strong>Neden fiziksel zarlar?</strong> Bilgisayar tabanlı RNG'ler, eğer
      CSPRNG'ler ise genellikle iyidir (tarayıcılarda <code>crypto.getRandomValues()</code>,{" "}
      Python'da <code>secrets.choice()</code>). Ancak zarlar, kötü amaçlı yazılım tarafından
      sessizce tehlikeye atılamayacak denetlenebilir rastgelelik sağlar.
    </p>

    <h2 id="managers">Parola yöneticileri: hangisi kullanılmalı</h2>
    <p>
      Bir parola yöneticisi, ölçekte gerçekten önemli olan tek parola sorununu çözer:
      <strong>yeniden kullanım</strong>. Bir yönetici olmadan, insanlar tipik olarak yüzlerce hesap arasında
      5-10 parolayı yeniden kullanır; bir ihlal hepsini tehlikeye atar. Bir yöneticiyle:
      her hesap benzersiz, rastgele 20+ karakterli bir parola alır ve tek bir ana parola
      kasayı korur.
    </p>
    <p>
      <strong>En iyi seviye (önerilen)</strong>:
    </p>
    <ul>
      <li>
        <strong>Bitwarden</strong>: açık kaynak, bireysel kullanım için ücretsiz, premium için yıllık $10.
        Denetlenmiş, kendi kendine barındırma seçeneği, güçlü şifreleme. Maliyet / özellikler / güven dengesi en iyisi.
      </li>
      <li>
        <strong>1Password</strong>: Bireysel yıllık $36, aile yıllık $60. Cilalı kullanıcı deneyimi,
        tescilli ancak iyi denetlenmiş. Seyahat modu (sınırlarda kasaları gizler) benzersizdir.
      </li>
      <li>
        <strong>KeePassXC</strong>: açık kaynak, ücretsiz, tamamen çevrimdışı. Kasayı yerel bir
        dosya olarak saklar. Paranoyak kullanıcılar için en iyisi; kendi bulutunuz (Dropbox, vb.) üzerinden senkronize edin.
      </li>
    </ul>
    <p>
      <strong>Tarayıcıya gömülü (kabul edilebilir ancak daha az güvenli)</strong>: Chrome, Firefox,
      Safari. Ücretsiz, kullanışlı. Kötü amaçlı yazılımlara karşı özel yöneticilerden daha az korumalıdır
      çünkü kasa anahtarlarına tarayıcıda yerleşik saldırganların erişmesi daha kolaydır.
    </p>
    <p>
      <strong>Kaçının</strong>: LastPass (zayıf ifşa ile birden çok ihlal), güvenlik denetimine açık olmayan
      herhangi bir parola yöneticisi, parolaları düz metin olarak saklayan herhangi bir şey.
    </p>

    <h2 id="two-factor">İki faktörlü kimlik doğrulama: neden önemlidir</h2>
    <p>
      130 bitlik bir parola bile kimlik avına (phishing) (kullanıcının sahte bir siteye yazması)
      ve kimlik bilgisi doldurmaya (credential stuffing) (saldırganın parolayı farklı bir ihlalden alması) karşı savunmasızdır.
      İki faktörlü kimlik doğrulama (2FA), ikinci bir kimlik kanıtı ekler.
    </p>
    <p>
      <strong>Güvenliğe göre sıralanmış yöntemler</strong>:
    </p>
    <ol>
      <li>
        <strong>Donanım güvenlik anahtarları (YubiKey, Titan)</strong>: $25-75 USB veya NFC çubuğu.
        Tasarım gereği kimlik avına (phishing) dayanıklıdır; anahtar, isteği gerçek alan adına
        kapsamlı olarak kriptografik olarak imzalar. Yüksek riskli hesaplar (e-posta, finans,
        yönetici) için altın standarttır.
      </li>
      <li>
        <strong>Geçiş anahtarları (Passkeys) (FIDO2/WebAuthn)</strong>: Modern işletim sistemlerine (iOS, Android,
        macOS, Windows 11) yerleşiktir. Güvenlik anahtarlarıyla aynı kriptografik güçte; cihaz
        biyometrisini kullanır. Kimlik doğrulamanın geleceği; büyük sitelerde kullanıma sunuluyor.
      </li>
      <li>
        <strong>TOTP uygulamaları (Authy, Google Authenticator, 1Password)</strong>: Her 30 saniyede bir
        dönen 6 haneli kod. Kimlik bilgisi doldurmaya (credential stuffing) karşı güçlü; karmaşık
        kimlik avına (phishing) (gerçek zamanlı aktarma saldırıları) karşı savunmasızdır. Güvenlik anahtarlarının
        desteklenmediği durumlarda bunu kullanın.
      </li>
      <li>
        <strong>SMS</strong>: ikinci bir faktör, ancak SIM değiştirme saldırılarına (saldırganın
        operatörünüzü numaranızı aktarmaya ikna etmesi) karşı savunmasızdır. Hiç yoktan iyidir;
        TOTP'den kötüdür. Yüksek riskli hesaplar için kaçının.
      </li>
    </ol>
    <p>
      <strong>Pratik öneri</strong>: sunulan her yerde 2FA'yı etkinleştirin. E-posta, parola yöneticisi anahtarı, bankacılık ve
      alan adı kayıt kuruluşu için geçiş anahtarları (passkeys) veya donanım anahtarları kullanın. Diğer her şey için TOTP.
      SMS yalnızca başka seçenek yoksa.
    </p>

    <h2 id="common-myths">Ölmeyen mitler</h2>
    <ul>
      <li>
        <strong>&ldquo;Parolaları her 90 günde bir değiştirin&rdquo;</strong>. NIST kılavuzu
        (SP 800-63B), 2017'den beri zorunlu rotasyona KARŞI açıkça tavsiyede bulunur. Zorunlu
        rotasyon daha zayıf parolalar üretir (insanlar &ldquo;1&rdquo; sonra
        &ldquo;2&rdquo; ekler...). Bir programa göre değil, bilinen bir ihlalden sonra döndürün.
      </li>
      <li>
        <strong>&ldquo;Bileşim kuralları parolaları güçlendirir&rdquo;</strong>.
        &ldquo;1 büyük harf, 1 rakam, 1 sembol&rdquo; kuralı, saldırganların önce denemeyi bildiği
        belirli kalıpları zorlar. Modern kılavuz: yalnızca uzunluk gerektirin.
      </li>
      <li>
        <strong>&ldquo;İpucu soruları güvenliği artırır&rdquo;</strong>. Annenin
        kızlık soyadı, ilk araba, favori öğretmen &mdash; tümü kolayca tahmin edilebilir veya sosyal medyadan
        toplanabilir. NIST SP 800-63B, mevcut kılavuzda bunları yasaklar.
      </li>
      <li>
        <strong>&ldquo;Ana parolayı yeniden kullanmayın&rdquo;</strong>. Önemsiz derecede doğru,
        ancak özellikle: parola yöneticinizin anahtarı sahip olduğunuz en yüksek değerli sırdır.
        Benzersiz, uzun bir parola kullanın. Ezberleyin. Bir kağıda yazın ve bir kasada saklayın
        (yöneticide değil).
      </li>
      <li>
        <strong>&ldquo;HTTPS parolamı güvende yapar&rdquo;</strong>. HTTPS, parolanızı
        aktarım sırasında korur. Alıcı sunucunun tehlikeye atılmasına, parolanın kötü niyetli bir klona
        avlanmasına (phishing) veya parola yöneticisine saldırılmasına karşı koruma sağlamaz. Çok katmanlı savunma.
      </li>
    </ul>

    <h2 id="real-attacks">Gerçek saldırılar: parolalar gerçekte nasıl sızdırılır</h2>
    <p>
      Modern saldırganlar nadiren tek bir hesaba kaba kuvvet (brute-force) uygular. Gerçek saldırı modelleri:
    </p>
    <ol>
      <li>
        <strong>Veritabanı ihlalleri</strong>: saldırgan bir sunucuyu tehlikeye atar, kullanıcı
        tablosunu boşaltır. Hash'ler zayıfsa (MD5, SHA-1, tuzsuz (unsalted)), parolalar çevrimdışı olarak kurtarılır.
        Have I Been Pwned (<a href="https://haveibeenpwned.com">haveibeenpwned.com</a>)
        12+ milyar adet çalınmış kimlik bilgisini kataloglar.
      </li>
      <li>
        <strong>Kimlik bilgisi doldurma (Credential stuffing)</strong>: saldırgan, bir ihlalden sızdırılmış kullanıcı adları+parolaları
        alır ve bunları diğer sitelerde dener. 2024-2025'te çoğu tüketici
        sitesindeki saldırıların ~%85'i kimlik bilgisi doldurmadır (credential stuffing). Savunma: site başına benzersiz parolalar.
      </li>
      <li>
        <strong>Kimlik avı (Phishing)</strong>: saldırgan sahte bir giriş sayfası gönderir, kullanıcı gerçek
        kimlik bilgilerini girer. Kurumsal ihlallerin %90'ından fazlası burada başlar. Savunma: geçiş anahtarları (passkeys) / donanım
        anahtarları (kimlik avına (phishing) dayanıklı), eğitim, 2FA.
      </li>
      <li>
        <strong>Kötü amaçlı yazılım (Malware)</strong>: keylogger, tarayıcı uzantısı hırsızı, parola yöneticisi
        saldırganı. Savunma: işletim sistemini ve tarayıcıyı güncel tutun, parola yöneticisi
        bütünlüğünü doğrulayın, en yüksek riskli hesaplar için donanım anahtarları kullanın.
      </li>
      <li>
        <strong>Sosyal mühendislik (Social engineering)</strong>: bir müşteri hizmetleri temsilcisini hesabı
        sıfırlamaya ikna etmek. Savunma: hesap kurtarma 2FA'sını etkinleştirin, güvenilir kişiler belirleyin, benzersiz
        kurtarma e-postaları kullanın.
      </li>
      <li>
        <strong>SIM değiştirme (SIM swap)</strong>: saldırgan, operatörü numaranızı taşımaya ikna eder.
        Savunma: SMS yerine TOTP / donanım anahtarları, operatör düzeyinde PIN'ler.
      </li>
    </ol>
    <p>
      Dikkat edin: saf kaba kuvvet (brute-force) ilk 6'da değildir. Gerçek saldırılar, entropiyi
      yeniden kullanım, kimlik avı (phishing) veya sosyal mühendislik yoluyla atlar. Bu nedenle parola yöneticileri + 2FA,
      &ldquo;gerçekten güçlü bir parola&rdquo; seçmekten daha önemlidir.
    </p>

    <h2 id="policies">İyi parola politikaları nasıl görünür</h2>
    <p>
      Parola kuralları belirleyen kuruluşlar için mevcut NIST kılavuzu (SP 800-63B):
    </p>
    <ul>
      <li>Minimum 8 karakter (12+ önerilir).</li>
      <li>En az 64 karaktere izin verin.</li>
      <li>TÜM yazdırılabilir Unicode'a (boşluklar ve emoji dahil) izin verin.</li>
      <li>Bilinen ihlal listelerindeki parolaları reddedin (HIBP API).</li>
      <li>Bağlama özel listelerdeki parolaları reddedin (hizmet adınız, yaygın kullanıcı adları).</li>
      <li>HİÇBİR bileşim kuralı yok.</li>
      <li>ZORUNLU rotasyon YOK.</li>
      <li>İPUCU sorusu YOK.</li>
      <li>Hash'leme için Argon2id, bcrypt maliyet 12+ veya scrypt kullanın. Asla MD5 veya SHA-1 kullanmayın.</li>
      <li>Yönetici veya ayrıcalıklı erişimi olan herhangi bir hesap için 2FA gerektirin.</li>
      <li>IP başına / kullanıcı başına başarısız denemelere dayalı kilitlenme politikaları, hız sınırlaması ile.</li>
    </ul>

    <h2 id="site-categories">Site türüne göre uzunluk önerileri</h2>
    <ul>
      <li>
        <strong>Tek kullanımlık / düşük riskli (forumlar, haber siteleri, ücretsiz denemeler)</strong>: 12+
        rastgele karakter.
      </li>
      <li>
        <strong>Sıradan (e-posta, sosyal medya, perakende, iş araçları)</strong>: 16+ rastgele
        karakter.
      </li>
      <li>
        <strong>Finansal (bankalar, aracı kurumlar, kripto para borsaları)</strong>: 20+ rastgele
        karakter + donanım anahtarı veya geçiş anahtarı (passkey) ile 2FA.
      </li>
      <li>
        <strong>Kritik (parola yöneticisi anahtarı, birincil e-posta, alan adı kayıt kuruluşu)</strong>:
        diceware parolası 7+ kelime VEYA 24+ rastgele karakter + donanım anahtarı 2FA.
      </li>
      <li>
        <strong>Sunucu / SSH / API anahtarları</strong>: parolalar değil, ed25519 veya RSA-4096 anahtarları.
        Özel anahtarlarda 7+ diceware kelimesinden oluşan parolalar.
      </li>
    </ul>

    <h2 id="checklist">Kişisel güvenlik kontrol listesi</h2>
    <ol>
      <li>Bir parola yöneticisi kurun (Bitwarden ücretsiz sürümü yeterlidir).</li>
      <li>7 kelimelik bir diceware ana parolası belirleyin. Ezberleyin. Bir kasada kağıda saklayın.</li>
      <li>Parola yöneticisinde 2FA'yı etkinleştirin (donanım anahtarı veya geçiş anahtarı (passkey)).</li>
      <li>Mevcut parolaları denetleyin: yeniden kullanılan var mı? Benzersiz 20+ karakterli olanları oluşturun ve saklayın.</li>
      <li>Tüm e-posta adreslerinizle <a href="https://haveibeenpwned.com">haveibeenpwned.com</a> adresinde eski ihlalleri denetleyin.</li>
      <li>E-postada 2FA'yı etkinleştirin (diğer her şey için kurtarma vektörü). Donanım anahtarı veya geçiş anahtarı (passkey) kullanın.</li>
      <li>Bankacılık, aracı kurumlar ve alan adı kayıt kuruluşunda 2FA'yı etkinleştirin.</li>
      <li>Hesap kurtarma 2FA'sını ayarlayın: güvenilir kişiler, yazdırılmış kurtarma kodları, doğrulanmış yedek telefon.</li>
      <li>Mümkün olan her yerde SMS 2FA'yı TOTP ile değiştirin.</li>
      <li>Kullanılmayan uygulama izinlerini gözden geçirin ve iptal edin (Google, Apple, GitHub OAuth izinleri).</li>
      <li>E-postanızı içeren yeni ihlaller için periyodik olarak kontrol edin (HIBP uyarı gönderebilir).</li>
    </ol>

    <h2>80/20 çıkarımı</h2>
    <p>
      Matematik açıktır: 80+ bit gerçek entropi, kaba kuvvet (brute force) ile kırılamaz. 130+
      bit sonsuza kadar kırılamaz. <a href="/tools/password-generator">Parola
      oluşturucu</a> varsayılan olarak 130 bitlik parolalar üretir. Zor sorunlar
      güç değildir &mdash; bunlar yeniden kullanım (bir parola yöneticisiyle çözün), kimlik avı (phishing)
      (donanım anahtarları / geçiş anahtarları (passkeys) ile çözün) ve eski ihlallerdir (HIBP denetimi ve
      ileriye dönük benzersiz parolalarla çözün).
    </p>
    <p>
      Üç şey yaparsanız: (1) benzersiz 20+ karakterli parolalarla bir parola yöneticisi kullanın,
      (2) e-postanızda ve parola yöneticinizde donanım anahtarı veya geçiş anahtarı (passkey) 2FA'sını etkinleştirin,
      (3) yeni ihlaller için her 6 ayda bir HIBP'yi kontrol edin &mdash; gerçek dünyadaki
      saldırı vektörlerinin %95'ini halletmiş olursunuz. Kalan %5 (karmaşık kimlik avı (phishing), tedarik zinciri
      kötü amaçlı yazılımı) kurumsal savunmalar gerektirir; bireyler için bu üç adım sizi
      güvenlik duruşunun en iyi %1'ine sokar.
    </p>
  </>
);

export const cta = {
  label: "Kriptografik olarak rastgele 130 bitlik parolalar oluşturun",
  targetSlug: "password-generator",
};

export const faq = [
  {
    q: "12 karakterlik rastgele bir parolayı kırmak ne kadar sürer?",
    a: "Karakter havuzuna ve hash algoritmasına bağlıdır. 12 rastgele alfanümerik karakter (a-zA-Z0-9, 62 havuz) = ~71 bit entropi. Tüketici GPU'sunda saniyede 10¹¹ tahminle MD5'e (kırık hash) karşı: ortalama ~750 yıl. bcrypt maliyet 12'ye karşı saniyede ~30.000 tahminle: ~10¹⁵ yıl (ısı-ölümü kırılamaz). Argon2id'e karşı aynı parola: benzer. Hash algoritması, parola uzunluğu kadar önemlidir. Çoğu modern hizmet bcrypt veya Argon2id kullanır. Kamu hizmeti: herhangi bir sızıntı olup olmadığını bilmek için hesaplarınızda HIBP parola izlemeyi etkinleştirin.",
  },
  {
    q: "'correct horse battery staple' hala güçlü bir parola mı?",
    a: "Yalnızca ~44 bit entropidir (küçük bir listeden 4 rastgele kelime) ve artık saldırgan sözlüklerinde aynen yer alacak kadar ünlüdür. Modern kılavuz: 7.776 kelimelik EFF diceware listesinden 6-7 rastgele kelime = 77-91 bit. Kelime listesi sözlük saldırılarına karşı direnç için bir ayırıcı karakter ekleyin veya bir kelimeyi büyük harfle başlatın. Fiziksel zarlar veya bir CSPRNG (tarayıcılarda crypto.getRandomValues) ile oluşturun. Sonucu ezberleyin. Bunu hafızadan yazmanız gereken her şey için kullanın: parola yöneticisi anahtarı, tam disk şifreleme.",
  },
  {
    q: "Güçlü bir parola oluşturmanın en güvenli yolu nedir?",
    a: "Bir parola yöneticisinin yerleşik oluşturucusunu VEYA CSPRNG tabanlı bir aracı (Web Crypto'nun getRandomValues'ını kullanan parola oluşturucumuz gibi) kullanın. Her ikisi de kriptografik olarak rastgele çıktı üretir. ASLA Math.random() (tahmin edilebilir), parolanızı sunucularına gönderen çevrimiçi siteleri (genellikle günlüğe kaydedilir) veya kendi 'rastgele görünen' dizinizi (insanlar rastgele değildir) KULLANMAYIN. Ezberlemeniz gereken parolalar için: 6-7 kelimelik bir parola oluşturmak üzere EFF diceware kelime listesini kullanarak fiziksel zarlar atın. Oluşturduktan sonra entropiyi doğrulayın; KeePassXC gibi araçlar, kelime listesi saldırılarını hesaba katan entropi tahminleri gösterir.",
  },
  {
    q: "Modern parola politikalarının çoğu neden bileşim kurallarını atlıyor?",
    a: "NIST SP 800-63B (2017+), bileşim kurallarına ('1 büyük harf, 1 rakam, 1 sembol içermelidir') KARŞI açıkça tavsiyede bulunur. Nedenleri: (1) Saldırganların önce denemeyi bildiği belirli kalıpları zorlarlar ('Password1!' çoğu kuralı karşılar). (2) İnsan yaratıcılığını sınırlayarak daha zayıf parolalar üretirler. (3) Kullanıcıların parolaları yazmasına veya siteler arasında küçük varyasyonları yeniden kullanmasına neden olurlar. Modern politika: yalnızca uzunluk gerektirin (12+ karakter), bilinen ihlal parolalarını reddedin (HIBP API), tüm yazdırılabilir Unicode'a izin verin. Sonuç: daha az kullanıcı sürtüşmesiyle daha güçlü gerçek dünya parolaları.",
  },
];