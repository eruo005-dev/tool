import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Şifreniz bilinen bir sızıntıda yer aldıysa, saldırganlar zaten ona sahiptir. Sızıntı veritabanlarını kontrol etmek, hesap ele geçirmenin en yaygın yöntemi olan kimlik bilgisi doldurma saldırılarını önleyen 10 saniyelik bir alışkanlıktır. Bu rehber, sızıntı kontrollerinin nasıl çalıştığını (k-anonimlik, düz metin gönderilmez), HaveIBeenPwned gibi hizmetlerin ne yaptığını, şifrelerin e-postalara karşı ne zaman kontrol edileceğini, bir sızıntı bulunduğunda ne yapılması gerektiğini ve kontrol etmenin neden bir şifre yöneticisi kullanmanın yerini almadığını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Sızıntı veritabanı nedir</h2>
    <p>
      Bir hizmet tehlikeye girdiğinde, saldırganlar genellikle çalınan kullanıcı verilerini yayınlar (veya satar). HaveIBeenPwned (HIBP) gibi siteler bu sızıntıları toplar ve bunları e-posta veya şifre hash'ine göre aranabilir hale getirir.
    </p>
    <p>
      HIBP şu anda binlerce sızıntıdan 10 milyardan fazla sızdırılmış kayıt tutar — LinkedIn, Adobe, Yahoo, Dropbox ve daha fazlası. Şifreniz orada görünüyorsa, kimlik bilgisi doldurma saldırıları yapan herkes tarafından kullanılabilir.
    </p>

    <h2>K-anonimlik — kontrolü güvende tutmak</h2>
    <p>
      Şifrenizi kontrol ettiğini iddia eden herhangi bir web sitesine yapıştırmakta tereddüt edebilirsiniz. İyi haber: bunu yapmak zorunda değilsiniz.
    </p>
    <p>
      HIBP'nin Pwned Passwords API'si <strong>k-anonimlik</strong> kullanır:
    </p>
    <p>
      1. Tarayıcınız şifrenizin SHA-1 hash'ini yerel olarak hesaplar.
    </p>
    <p>
      2. Hash'in yalnızca ilk 5 onaltılık karakterini gönderin.
    </p>
    <p>
      3. HIBP, bu 5 karakterle başlayan tüm hash'leri döndürür (genellikle birkaç yüz).
    </p>
    <p>
      4. Tarayıcınız, tam hash'inizin bunlardan herhangi biriyle eşleşip eşleşmediğini yerel olarak kontrol eder.
    </p>
    <p>
      HIBP tam hash'inizi asla görmez, şifrenizi asla görmez. Yanıt ele geçirilse bile, saldırgan yalnızca bir ön ek görür — sizi tanımlamak için yeterli değildir.
    </p>
    <p>
      K-anonimlik kullanan herhangi bir araç, gerçek şifrelerle kullanmak için güvenlidir. Kontrol ettiğini iddia eden ancak tam şifreyi bir sunucuya yapıştırmanızı gerektiren araçlardan kaçının.
    </p>

    <h2>Şifre düzeyi ve e-posta düzeyi kontrolleri</h2>
    <p>
      İki farklı soru, iki farklı cevap.
    </p>
    <p>
      <strong>Şifre kontrolü:</strong> bu belirli şifre herhangi bir sızıntıda göründü mü? K-anonimlik API'si aracılığıyla yapılır. "Evet, 1.234.567 kez" veya "hayır" döndürür.
    </p>
    <p>
      <strong>E-posta kontrolü:</strong> bu e-posta herhangi bir sızıntıda göründü mü? E-posta ile aranır. Hangi hizmetlerin hesabınıza sahip olduğunu ve hangi verilerin (şifreler, telefon, adres vb.) açığa çıktığını söyler.
    </p>
    <p>
      İkisini de yapın. Şifre kontrolü, bir şifrenin yeniden kullanılıp kullanılmadığını ve açığa çıkıp çıkmadığını söyler. E-posta kontrolü, hangi hesapların belirli bir eylem gerektirdiğini söyler.
    </p>

    <h2>Bir şifre kontrolünün size söyledikleri</h2>
    <p>
      Bir eşleşme, şifrenin sızıntılarda görüldüğü, muhtemelen diğer kişiler tarafından diğer hizmetlerde kullanıldığı anlamına gelir. Bu mutlaka <em>sizin</em> hesabınızın sızdırıldığı anlamına gelmez — yaygın şifreler (<code>password123</code>, <code>qwerty</code>) sadece yaygın oldukları için milyonlarca eşleşme alır.
    </p>
    <p>
      <strong>Herhangi bir eşleşme = bu şifreyi kullanmayın.</strong>{" "}
      Kimlik bilgisi doldurma saldırıları, bilinen açığa çıkmış şifreleri milyonlarca e-posta/şifre kombinasyonuna karşı dener. Bunlardan biri olmak istemezsiniz.
    </p>
    <p>
      <strong>Sıfır eşleşme</strong> şifrenin bilinen herhangi bir sızıntıda olmadığı anlamına gelir. <em>Güçlü</em> olduğu anlamına gelmez — yalnızca açığa çıkmadığı anlamına gelir. Güç ve sızıntıya maruz kalma ayrı endişelerdir.
    </p>

    <h2>Şifreniz sızdırıldıysa ne yapmalısınız</h2>
    <p>
      <strong>Etkilenen hizmette hemen değiştirin.</strong>
    </p>
    <p>
      <strong>Yeniden kullandığınız her hizmette değiştirin</strong>
      {" "}— ana saldırı vektörü budur.
    </p>
    <p>
      <strong>Destekleyen her hizmette 2FA / MFA'yı etkinleştirin.</strong>
      {" "}İkinci bir faktörünüz varsa, sızdırılmış bir şifre tek başına erişim sağlamaz.
    </p>
    <p>
      <strong>E-posta sızıntı listesini kontrol edin</strong>
      {" "}hangi belirli verilerin (telefon, doğum tarihi, güvenlik cevapları) açığa çıktığını anlamak için — sadece şifreden daha fazlasını değiştirmeniz gerekebilir.
    </p>

    <h2>Bir e-posta sızıntıda göründüğünde</h2>
    <p>
      Farklı maruz kalma sınıflarının farklı ciddiyetleri vardır:
    </p>
    <p>
      <strong>E-posta + şifre (düz metin veya zayıf hash):</strong>{" "}
      en yüksek aciliyet. Her yerde değiştirin.
    </p>
    <p>
      <strong>E-posta + şifre hash'i (bcrypt/argon2):</strong> daha
      düşük aciliyet. Güçlü hash'ler kırılması zordur, ancak yine de etkilenen hizmette değiştirin.
    </p>
    <p>
      <strong>E-posta + meta veriler (isim, adres, telefon):</strong>{" "}
      hesap güvenliği için daha düşük aciliyet, kimlik avı riski için daha yüksek.
      Saldırganlar, sızdırılan bilgileri kullanarak hedefli kimlik avı e-postaları oluşturabilir.
    </p>
    <p>
      <strong>Yalnızca e-posta:</strong> düşük aciliyet. Spam alabilirsiniz,
      ancak hesap erişimi doğrudan risk altında değildir.
    </p>

    <h2>Bir şifre yöneticisinin bunu neden kolaylaştırdığı</h2>
    <p>
      Sızıntı kontrolü ve şifre yönetimi örtüşen sorunları çözer. Bir şifre yöneticisi:
    </p>
    <p>
      Site başına benzersiz şifreler oluşturur → bir hizmetin sızıntısı diğerlerine sıçramaz.
    </p>
    <p>
      Çoğu (1Password, Bitwarden, Dashlane) HIBP tarzı sızıntı kontrollerini otomatik olarak entegre eder. Kaydedilmiş bir şifre yeni bir sızıntıda göründüğünde uyarı alırsınız.
    </p>
    <p>
      Bunları güvenli bir şekilde saklar, böylece ezberlemeniz veya yeniden kullanmanız gerekmez.
    </p>
    <p>
      <strong>Sızıntı kontrolü tek başına yeterli değildir.</strong> Ne zaman değiştireceğinizi söyler; bir şifre yöneticisi, yeniden kullanmadan nasıl değiştireceğinizi söyler.
    </p>

    <h2>Düzenli kontrolleri otomatikleştirme</h2>
    <p>
      Tek seferlik kontroller bir başlangıçtır. Sürekli izleme daha iyidir.
    </p>
    <p>
      <strong>HIBP bildirimleri:</strong> e-postanızı abone edin ve bu e-postayı içeren yeni sızıntılar göründüğünde bildirim alın.
    </p>
    <p>
      <strong>1Password Watchtower, Bitwarden Reports, Dashlane
      Dark Web Monitoring:</strong> kaydedilmiş kimlik bilgilerinize karşı sürekli çalışır.
    </p>
    <p>
      <strong>Tarayıcı entegrasyonları:</strong> Chrome, Firefox ve
      Safari'nin tümü yerleşik sızıntı uyarılarına sahiptir. Bunları devre dışı bırakmayın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>K-anonimlik kullanmayan bir siteye şifre yapıştırmak.</strong>
      {" "}Az önce şifrenizi onlara verdiniz. Önce aracın yöntemini kontrol edin.
    </p>
    <p>
      <strong>Yalnızca bir kez kontrol etmek.</strong> Her ay yeni sızıntılar olur. Bildirimlere abone olun.
    </p>
    <p>
      <strong>Sıfır eşleşme sonuçlarını görmezden gelmek.</strong> Sıfır maruz kalma, şifrenin güçlü olduğu anlamına gelmez. Düşük entropili şifreler, sızıntı olmadan bile kırılır.
    </p>
    <p>
      <strong>Yalnızca sızdırılan hizmeti değiştirmek.</strong> Şifreyi yeniden kullandıysanız, her site risk altındadır.
    </p>
    <p>
      <strong>MFA'yı isteğe bağlı olarak görmek.</strong> MFA en güçlü kontroldür; destekleyen her hesapta, özellikle e-posta ve bankacılıkta etkinleştirin.
    </p>
    <p>
      <strong>Güvenlik sorularını unutmak.</strong> "Annenin kızlık soyadı" genellikle şifreyle birlikte sızdırılır. Cevapları şifreler gibi ele alın — benzersiz ve tahmin edilemez.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Bir şifrenin bilinen sızıntılarda olup olmadığını{" "}
      <a href="/tools/password-breach-checker">şifre sızıntı denetleyicisi</a> ile kontrol edin.
      Bunu{" "}
      <a href="/tools/password-strength-checker">şifre gücü denetleyicisi</a>
      {" "} ile birlikte kullanarak yeni bir şifrenin güçlü olduğundan emin olun ve{" "}
      <a href="/tools/password-generator">şifre oluşturucu</a>
      {" "} ile benzersiz bir tane oluşturun.
    </p>
  </>
);