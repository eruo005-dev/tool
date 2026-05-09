import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      User-Agent başlığı, 30 yıllık bir kulaktan kulağa oyunudur.
      Mosaic'in kısa bir kendini tanımlaması olarak başlayan
      (<code>NCSA_Mosaic/2.0</code>) şey, her tarayıcının kendinden önceki
      tarayıcı için hazırlanmış içeriği almak istemesi yüzünden bugünkü
      okunamaz Mozilla uyumlu karmaşaya dönüştü. UA dizelerini güvenilir bir
      şekilde ayrıştırmak, günlükleme ve özellik uyumluluğu için hâlâ
      kullanışlıdır, ancak zemin altından kaydı: Chrome ve Edge, UA
      dizesinin çoğunu User-Agent Client Hints'in arkasında dondurdu,
      Safari iOS'ta kasıtlı olarak azaltılmış bir UA gönderiyor ve gizlilik
      tarayıcıları bilerek yalan söylüyor. Bu kılavuz, bir UA dizesinin
      anatomisini, neredeyse her tarayıcının neden Mozilla gibi
      davrandığını, tarayıcı/işletim sistemi/cihazın temiz bir şekilde nasıl
      çıkarılacağını, sahte ve rastgeleleştirilmiş UA'ların oyunu nasıl
      değiştirdiğini ve UA ayrıştırmasını sessizce tamamen değiştiren Client
      Hints API'sini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir UA dizesinin anatomisi</h2>
    <p>
      Temsili bir modern UA dizesi:
    </p>
    <pre>{`Mozilla/5.0 (Windows NT 10.0; Win64; x64)
AppleWebKit/537.36 (KHTML, like Gecko)
Chrome/125.0.0.0 Safari/537.36`}</pre>
    <p>
      Dil bilgisi gevşek bir şekilde
      <code> ürün/sürüm (yorum) ürün/sürüm ...</code> şeklindedir.
      Boşluklarla ayrılmış belirteçler; parantez içi yorumlar platform
      ayrıntılarını taşır. Sıralama kısmen RFC 9110 bölüm 10.1.5 tarafından
      standartlaştırılmıştır, ancak her tarayıcının tarihsel bir bagajı vardır.
    </p>

    <h2>Herkes neden Mozilla olduğunu iddia ediyor</h2>
    <p>
      1993'te Netscape Navigator kendini
      <code> Mozilla/1.0</code> olarak tanımladı. Siteler, gelişmiş içerik
      sunmak için &ldquo;Mozilla&rdquo;yı kontrol ediyordu &mdash; çerçeveler,
      resimler, daha sonra JavaScript. Internet Explorer 1995'te piyasaya
      sürüldüğünde, Microsoft Mozilla tanımlayıcısını kopyaladı
      (<code>Mozilla/1.22 (compatible; MSIE 2.0; ...)</code>) böylece
      siteler IE'ye aynı içeriği sunacaktı. O zamandan beri her tarayıcı
      aynı numarayı yaptı: Safari'nin WebKit'i KHTML ile uyumlu olduğunu
      iddia ediyor; Chrome, Safari ile uyumlu olduğunu iddia ediyor; Opera
      her şeyle uyumlu olduğunu iddia ediyor.
    </p>
    <p>
      Sonuç: baştaki <code>Mozilla/5.0</code> belirteci hiçbir şeyi
      tanımlamaz. Onu atlayın ve daha sağdaki belirteçleri okuyun.
    </p>

    <h2>Tarayıcı, işletim sistemi ve cihazı çıkarma</h2>
    <p>
      Yukarıdaki Chrome UA'sının modern dökümü:
    </p>
    <p>
      <strong>Tarayıcı</strong>: <code>AppleWebKit</code>,
      <code> KHTML</code> veya <code>Safari</code> olmayan son anlamlı
      ürün/sürüm belirteci. Chrome için:
      <code> Chrome/125.0.0.0</code>.
    </p>
    <p>
      <strong>Motor</strong>:
      <code> AppleWebKit/537.36</code> ortada.
    </p>
    <p>
      <strong>İşletim Sistemi</strong>: ilk parantez içinde.
      <code> Windows NT 10.0</code>, Windows 10/11'e karşılık gelir (her
      ikisi de aynı NT sürümünü kullanır).
    </p>
    <p>
      <strong>Cihaz</strong>: mobil UA'larda yorumda:
      <code> iPhone</code>,
      <code> SM-G991B</code> (bir Samsung modeli),
      <code> Pixel 8</code>.
    </p>
    <p>
      Yaygın ayrıştırma kütüphaneleri &mdash; <code>ua-parser-js</code>,
      Python'un <code>user_agents</code>'ı,
      Java'nın <code>uap-core</code>'u &mdash; uç durumları düzenli olarak
      güncellenen regex setleriyle halleder. Kendi ayrıştırıcınızı yalnızca
      günlükleme için yazın, asla özellik tespiti için.
    </p>

    <h2>Dondurulmuş UA'lar ve UA azaltımı</h2>
    <p>
      2021'de Google, <strong>User-Agent azaltımını</strong> duyurdu ve
      ardından göndermeye başladı: Chrome, çoğu UA alanını statik
      değerlere sabitler. 2024 itibarıyla, masaüstünde azaltılmış Chrome
      UA'sı şöyle görünür:
    </p>
    <pre>{`Mozilla/5.0 (Windows NT 10.0; Win64; x64)
AppleWebKit/537.36 (KHTML, like Gecko)
Chrome/125.0.0.0 Safari/537.36`}</pre>
    <p>
      Windows 10 <em>ve</em> Windows 11 <em>ve</em> Windows 8.1'deki her
      Chrome kullanıcısı artık aynı <code> Windows NT 10.0</code> dizesini
      gönderiyor. Cihaz bilgisi gitti, alt sürüm
      <code> .0.0.0</code>'da donduruldu ve gerçek değerler yalnızca
      User-Agent Client Hints aracılığıyla kullanılabilir.
    </p>
    <p>
      iOS'taki Safari her zaman eksik rapor vermiştir: iPad Safari varsayılan
      olarak bir masaüstü UA'sı gönderir. Linux'taki Firefox, gizli
      gezintide birkaç biti rastgeleleştirir. UA dizelerine kesin tanımlama
      değil, kaba bir yaklaşım olarak davranın.
    </p>

    <h2>User-Agent Client Hints</h2>
    <p>
      Client Hints, UA'yı, her biri sitenin talep etmeyi seçmesi gereken
      birçok küçük HTTP başlığına böler.
    </p>
    <pre>{`Sec-CH-UA: "Chromium";v="125", "Not.A/Brand";v="24"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"`}</pre>
    <p>
      Bu üçü varsayılan olarak her istekte gönderilir. Daha yüksek entropili
      ipuçları (tam tarayıcı sürümü, model, mimari, platform sürümü), sitenin
      önceki bir yanıtta
      <code> Accept-CH: Sec-CH-UA-Platform-Version, Sec-CH-UA-Model</code>
      {" "}göndermesini gerektirir. Bir sonraki istekte tarayıcı bunları
      ekler.
    </p>
    <p>
      İstemci tarafında, bunları <code>navigator.userAgentData</code>
      {" "}API'si aracılığıyla okuyun. <code>navigator.userAgentData.getHighEntropyValues</code>
      {" "}, istenen alanları içeren bir nesneye çözümlenen bir promise döndürür.
    </p>

    <h2>Sahte UA'lar</h2>
    <p>
      Üç grup UA'larında yalan söyler:
    </p>
    <p>
      <strong>Gizlilik tarayıcıları</strong>: Brave, Tor Browser ve gizlilik
      eklentileri, parmak izine karşı koymak için UA'yı kasıtlı olarak
      rastgeleleştirir veya genelleştirir.
    </p>
    <p>
      <strong>Güç kullanıcıları</strong>: Chrome, Edge ve Firefox'un
      hepsinde, genellikle mobil siteleri test etmek veya UA ile kısıtlanmış
      ödeme duvarlarını aşmak için kullanılan, özel bir UA gönderme seçeneği
      vardır.
    </p>
    <p>
      <strong>Botlar ve kazıyıcılar</strong>: iyi olanlar dürüstçe tanımlar
      (<code>Googlebot/2.1</code>,
      <code> bingbot/2.0</code>). Kötü olanlar, karışmak için Chrome veya
      Safari'yi tam olarak taklit eder.
    </p>
    <p>
      Güvenlik kararları için asla UA ayrıştırması kullanmayın. Hız sınırlama,
      CAPTCHA ve davranışsal analiz doğru araçlardır.
    </p>

    <h2>Bot tanımlama kalıpları</h2>
    <p>
      Meşru tarayıcılar öngörülebilir bir kalıbı takip eder:
      <code> Ad/Sürüm (+URL)</code>.
    </p>
    <pre>{`Googlebot/2.1 (+http://www.google.com/bot.html)
bingbot/2.0 (+http://www.bing.com/bingbot.htm)
DuckDuckBot/1.1; (+http://duckduckgo.com/duckduckbot.html)
facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)
Slackbot 1.0 (+https://api.slack.com/robots)`}</pre>
    <p>
      <code>+URL</code> kuralı, bir UA'nın bot olduğuna dair güçlü bir
      ipucudur. Googlebot olduğu iddiasını ters DNS ile doğrulayın: isteğin
      IP'si <code> *.googlebot.com</code> veya <code>*.google.com</code>'a
      çözümlenmeli ve bu ana bilgisayar adının ileri çözümlemesi aynı IP'yi
      döndürmelidir.
    </p>

    <h2>Mobilde UA</h2>
    <p>
      iPhone (iOS 17, Safari):
    </p>
    <pre>{`Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X)
AppleWebKit/605.1.15 (KHTML, like Gecko)
Version/17.5 Mobile/15E148 Safari/604.1`}</pre>
    <p>
      Android Chrome:
    </p>
    <pre>{`Mozilla/5.0 (Linux; Android 14; Pixel 8 Build/UQ1A.240205.004)
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0
Mobile Safari/537.36`}</pre>
    <p>
      Model (<code>Pixel 8</code>) Android'de görünür ancak azaltılmış UA'lı
      Chrome masaüstünde görünmez. iPad Safari, macOS Safari'den ayırt
      edilemeyen bir masaüstü UA'sı gönderir &mdash; iPad'i
      <code> navigator.maxTouchPoints &gt; 1</code> ve
      <code> Mac</code> UA'da olarak tespit edin.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>UA dizesi aracılığıyla özellik tespiti.</strong>
      <code> if (&apos;IntersectionObserver&apos; in window)</code>
      kullanın, <code>if (chromeVersion &gt; 50)</code> değil. İlki
      sonraki UA azaltımından sağ çıkar; ikincisi her sürümde bozulur.
    </p>
    <p>
      <strong>Chrome'u tanımlamak için &ldquo;Chrome&rdquo; ile eşleştirme.</strong>
      {" "}Edge, Opera, Brave, Arc ve Samsung Internet'in tümü Chrome
      belirtecini içerir. Önce Edge, Opera vb.'yi kontrol edin ve kısa devre
      yapın.
    </p>
    <p>
      <strong>Safari'yi tanımlamak için &ldquo;Safari&rdquo; ile eşleştirme.</strong>
      {" "}Chrome, tarihsel uyumluluk için <code>Safari/537.36</code>
      içerir. Önce <code>Chrome</code> veya <code> CriOS</code>'u kontrol
      edin.
    </p>
    <p>
      <strong>Windows NT 10.0'ı Windows 10 olarak ele alma.</strong>
      Windows 11 hâlâ <code>Windows NT 10.0</code> bildirir. Client
      Hints'teki platform sürümü
      (<code>Sec-CH-UA-Platform-Version</code>) bunları ayırt eder.
    </p>
    <p>
      <strong>Ayrıştırılmış UA dizelerini yeniden ayrıştırmadan saklama.</strong>
      {" "}Ayrıştırıcı kütüphaneleri, yeni tarayıcıları işlemek için aylık
      olarak güncellenir. 2023'te bilinmeyen olarak sınıflandırılan bir dize
      bugün temiz bir şekilde ayrıştırılabilir. Yazarken değil, okurken
      ayrıştırın.
    </p>
    <p>
      <strong>UA üzerinde güvenlik kapıları oluşturma.</strong> Sahtesi
      kolay, tespiti güvenilmez. Gerçek sinyalleri kullanın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir UA dizesini tarayıcı, işletim sistemi, cihaz ve motora
      ayırın{" "}
      <a href="/tools/user-agent-parser">kullanıcı aracısı ayrıştırıcısı</a>
      ile. Sunucu tarafı UA ile kısıtlanmış yanıtları hata ayıklarken{" "}
      <a href="/tools/http-status-code-lookup">HTTP durum kodu arama</a>
      ile ve içerik anlaşmasının Accept-başlık tarafı için{" "}
      <a href="/tools/mime-type-lookup">MIME türü arama</a>
      ile eşleştirin.
    </p>
  </>
);