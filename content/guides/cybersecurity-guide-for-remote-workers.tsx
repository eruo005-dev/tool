import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Uzaktan çalışmak, güvenlik çevresini ofis güvenlik duvarından mutfak masanıza taşır — ve bu, temel şeylerin birdenbire çok daha önemli hale geldiği anlamına gelir.</p>);

export const body: ReactElement = (
  <>
    <p>İyi haber: Kendinizi korumak için bir güvenlik mühendisi olmanıza gerek yok. Küçük bir alışkanlık yığını — benzersiz şifreler, 2FA, şifreleme, şüphecilik — uzaktan çalışanları hedef alan gerçek dünya saldırılarının büyük çoğunluğunu durdurur. Kötü haber: Bunlardan herhangi birini atlamak, saldırganların aktif olarak aradığı bir boşluk bırakır. Aşağıda, kabaca saat başına çabaya göre sıralanmış pratik bir kontrol listesi bulunmaktadır. Önce en üstteki maddeleri yapın; gerisi bir hafta bekleyebilir.</p>

    <h2>Şifreler ve 2FA, doğru şekilde</h2>
    <p>Her hesap için benzersiz bir şifre kullanın, bunları 1Password veya Bitwarden gibi bir şifre yöneticisinde oluşturun ve saklayın. Yeniden kullanılan şifreler, hesap ele geçirmelerinin en büyük tek kaynağıdır çünkü herhangi bir yerdeki ihlal, kimlik bilgilerini her yere sızdırır. 2FA ekleyin — ve e-posta, bankacılık ve iş SSO'su için kimlik avına dayanıklı donanım anahtarlarını (YubiKey, Titan) tercih edin. Uygulama tabanlı TOTP kodları (Authy, 1Password) diğer her şey için uygundur. SMS kodları, SIM değiştirme saldırıları mevcut olduğu için en zayıf seçenektir, ancak yine de hiç 2FA olmamasından daha iyidir.</p>

    <h2>VPN: yalnızca gerçekten ihtiyacınız olduğunda</h2>
    <p>VPN sizi güvenilmeyen ağlarda korur — otel WiFi'si, havaalanları, kafeler. Günlük ev kullanımı için sihirli bir gizlilik battaniyesi değildir ve modern sitelerin çoğu zaten uçtan uca HTTPS kullanır. Genel WiFi'deyken veya işvereniniz dahili kaynaklar için bunu gerektirdiğinde VPN'i açın. Aksi takdirde kapalı bırakın; tüm trafiğinizi bir üçüncü taraf üzerinden yönlendirmenin kendi takasları vardır.</p>

    <h2>Dizüstü bilgisayarı şifreleyin, verileri yedekleyin</h2>
    <ul>
      <li>FileVault'u (macOS) veya BitLocker'ı (Windows) açın. Disk şifrelemesi olmayan kayıp bir dizüstü bilgisayar, kayıp bir veri ihlalidir.</li>
      <li>3-2-1 yedekleme kuralını izleyin: Verilerinizin 3 kopyası, 2 farklı ortamda, 1'i sitede olmayan (Backblaze gibi bir bulut yedeklemesi sayılır).</li>
      <li>Her çeyrekte bir geri yüklemeyi test edin. Test edilmemiş bir yedekleme, bir umuttur, bir yedekleme değildir.</li>
    </ul>

    <h2>Kimlik avı kırmızı bayrakları</h2>
    <p>Kimlik avı hala işe yarıyor çünkü sizi hızlı hareket etmeye zorluyor. Bir mesaj aciliyet yarattığında (&ldquo;hesabınız kapatılacak&rdquo;), kimlik bilgileri istediğinde veya biraz farklı bir alan adından (&ldquo;paypa1.com&rdquo;) geldiğinde yavaşlayın. Tıklamadan önce bağlantıların üzerine gelin, olağandışı istekleri ikinci bir kanaldan onaylayın ve tetiklemediğiniz bir 2FA bildirimini asla onaylamayın. Eğer bir &ldquo;CEO&rdquo; size hediye kartları isteyen mesaj atıyorsa, o CEO değildir.</p>

    <h2>Fiziksel ve cihaz hijyeni</h2>
    <p>Otoparkta bulduğunuz veya istenmeden alınan bir USB sürücüsünü asla takmayın — kötü amaçlı USB yükleri sadece bir film klişesi değil, gerçek bir saldırıdır. Uzaklaştığınızda ekranınızı kilitleyin. İşletim sisteminizi, tarayıcınızı ve şifre yöneticinizi otomatik güncellemede tutun; istismar edilen güvenlik açıklarının çoğu için aylardır yamalar mevcuttur.</p>

    <h2>İşvereninizin bir iş dizüstü bilgisayarında görebilecekleri</h2>
    <p>Yönetilen bir iş cihazında, işvereninizin yüklü uygulamaları, ziyaret edilen alan adlarını, ekran görüntülerini, pano içeriğini ve bazen tuş vuruşlarını görebileceğini varsayın — kullanılan MDM ve uç nokta araçlarına bağlı olarak. Genellikle kişisel iCloud'unuzu, Gmail'inizi veya şifrelenmiş iMessage içeriğinizi okuyamazlar, ancak iş tarayıcısına veya iş uygulamalarına yazılan her şey serbesttir. BT'nin okumasından utanacağınız bir şey varsa, kişisel bir ağda kişisel bir cihaz kullanın.</p>

    <h2>BYOD: iş için kişisel cihazlar</h2>
    <p>Kendi dizüstü bilgisayarınızı veya telefonunuzu iş için kullanmak, şirket onu MDM'ye kaydedene ve uzaktan silme, politikalar uygulama veya verileri denetleme yeteneği kazanana kadar kulağa uygun gelir. BYOD gerekiyorsa, ayrı bir iş profili (iOS İş Profili, Android İş Profili, özel bir macOS kullanıcısı) oluşturun, böylece uzaktan silme işlemi aile fotoğraflarınızı da götürmez.</p>

    <h2>Yaygın hatalar</h2>
    <p>Slack veya e-posta üzerinden şifre paylaşmak, &ldquo;can sıkıcı&rdquo; olduğu için 2FA'yı devre dışı bırakmak, işletim sistemi güncellemelerini aylarca görmezden gelmek, kurtarma kodlarını kurtarmaya çalıştığınız aynı şifre yöneticisinde saklamak ve ev yönlendiricisini kur ve unut olarak ele almak (varsayılan yönetici şifresini değiştirin, donanım yazılımını güncelleyin).</p>

    <h2>Sonuç</h2>
    <p>Mükemmel güvenliğe ihtiyacınız yok — saldırganların yoluna devam etmesi için yeterli sürtüşmeye ihtiyacınız var. Bir şifre yöneticisi, her yerde 2FA, disk şifrelemesi, yedeklemeler ve sağlıklı şüphecilik, gerçek tehdidin %90'ını kapsar.</p>
  </>
);