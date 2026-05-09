import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Base64, "keyfi baytları yalnızca metin içeren bir kanala sıkıştırmam gerekiyor" durumunun İsviçre çakısıdır. E-posta ekleri, JWT token'ları, CSS'deki veri URI'leri, API kimlik doğrulama başlıkları — hepsi buna dayanır. Bu rehber, Base64'ün gerçekte ne yaptığını (spoiler: şifreleme değil), ne zaman kullanılacağını, karşılaşacağınız varyantları (standart, URL güvenli, MIME), %33'lük boyut artışını ve yaygın hataları — güvenlik için kullanmak, dolguyu unutmak ve kodlama yönlerini karıştırmak — açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Base64 nedir — ve ne değildir</h2>
    <p>
      Base64, ikiliden metne bir kodlamadır. İkili veriyi 64 ASCII karakteri (A-Z, a-z, 0-9, +, /) ve dolgu için = kullanarak temsil eder. Girdideki her 3 bayt, çıktıda 4 karakter olur.
    </p>
    <p>
      <strong>Şifreleme DEĞİLDİR.</strong> Herkes Base64'ü herhangi bir kod çözücüyle anında çözebilir. "Base64 kodlu" ifadesini "gizlenmiş" veya "güvenli" olarak ele almak, denetimlerde ve güvenlik incelemelerinde klasik bir hatadır.
    </p>
    <p>
      <strong>Sıkıştırma DEĞİLDİR.</strong> Base64, veriyi ~%33 oranında <em>genişletir</em>. Sıkıştırılmış veriyi (bir zip dosyası gibi) Base64'te kodlamak, onu küçültmez, büyütür.
    </p>
    <p>
      Base64'ün tüm amacı, ikili verinin metin varsayan sistemlerde (HTTP başlıkları, JSON değerleri, e-posta gövdeleri, URL parametreleri, XML) dolaşmasını sağlamaktır.
    </p>

    <h2>Kodlama mekaniği — 3 nasıl 4 olur</h2>
    <p>
      Girdi: 3 bayt (24 bit).
    </p>
    <p>
      Bu 24 biti, her biri 6 bitlik 4 gruba ayırın.
    </p>
    <p>
      Her 6 bitlik grup, 64 karakterden birine karşılık gelir (bu nedenle "Base 64").
    </p>
    <p>
      Çıktı: 4 karakter, tümü yazdırılabilir ASCII, her yere iletilebilir.
    </p>
    <p>
      Girdi 3 baytın katı değilse, sıfır bitlerle doldurun ve = ile belirtin:
    </p>
    <p>
      <strong>1 bayt girdi:</strong> 2 karakter çıktı + "==".
    </p>
    <p>
      <strong>2 bayt girdi:</strong> 3 karakter çıktı + "=".
    </p>
    <p>
      <strong>3 bayt girdi:</strong> 4 karakter, dolgu yok.
    </p>
    <p>
      Bu nedenle Base64 dizeleri her zaman 0, 1 veya 2 eşittir işaretiyle biter. Uzunluk her zaman 4'ün katıdır.
    </p>

    <h2>Base64 varyantları</h2>
    <p>
      <strong>Standart Base64 (RFC 4648):</strong> 63. ve 64. karakter olarak + ve / kullanır. = ile dolgu. Çoğu bağlam için çalışır.
    </p>
    <p>
      <strong>URL güvenli Base64 (RFC 4648 §5):</strong> + yerine - (eksi) ve / yerine _ (alt çizgi) kullanır. Dolgu isteğe bağlıdır. JWT token'larında, URL yol parametrelerinde, + ve /'nin URL kodlanacağı veya sorgu ayırıcılarla karıştırılacağı her yerde kullanılır.
    </p>
    <p>
      <strong>MIME Base64 (RFC 2045):</strong> her 76 karakterde bir satır sonu olan standart Base64. E-posta eklerinde kullanılır.
    </p>
    <p>
      <strong>Dolgusuz Base64:</strong> bazı formatlar (JWT) kompaktlık için sondaki = işaretlerini kaldırır. Kod çözücüler hem dolgulu hem de dolgusuz girdiyi işleyebilmelidir.
    </p>
    <p>
      Varyantları karıştırmak yaygın bir hata kaynağıdır: standart Base64 bekleyen bir kod çözücü, - veya _ içeren URL güvenli girdide takılır. Hangi varyantta olduğunuzu bilin.
    </p>

    <h2>%33 boyut artışı</h2>
    <p>
      Çıktı boyutu = ⌈girdi_baytı / 3⌉ × 4.
    </p>
    <p>
      100 bayt girdi → 136 bayt çıktı (dolgu sayıldığında %36 daha büyük).
    </p>
    <p>
      1 KB → ~1.33 KB.
    </p>
    <p>
      1 MB → ~1.33 MB.
    </p>
    <p>
      Anlamı: görselleri veri URI'si olarak satır içine almak ("data:image/png;base64,...") %33 ekler. 1 MB'lık bir kahraman görseli için, tarayıcının herhangi bir şey göstermeden önce ayrıştırması gereken 333 KB ek yük demektir. Küçük simgeler: sorun yok. Büyük görseller: kötü takas.
    </p>

    <h2>Base64 ne zaman kullanılır</h2>
    <p>
      <strong>E-posta ekleri.</strong> SMTP tarihsel olarak yalnızca 7 bitlik ASCII'yi destekliyordu. MIME Base64 hala standarttır.
    </p>
    <p>
      <strong>HTTP Temel Kimlik Doğrulama başlıkları.</strong>
      "Authorization: Basic &lt;base64(kullanıcı:şifre)&gt;". Unutmayın — bu kodlamadır, güvenlik değil. TLS olmadan Temel Kimlik Doğrulama düz metindir.
    </p>
    <p>
      <strong>JWT token'ları.</strong> JSON Web Token'ları, noktalarla ayrılmış üç URL güvenli Base64 bölümüdür: başlık.veri.imza.
    </p>
    <p>
      <strong>Veri URI'leri.</strong> "data:image/png;base64,..." ikili varlıkları HTML/CSS içinde satır içine alır. Küçük simgeler, SVG yedekleri için kullanın.
    </p>
    <p>
      <strong>İkili veri içeren API yanıtları.</strong> JSON bir görsel, dosya veya şifreleme anahtarı içermesi gerektiğinde, onu Base64 yapın.
    </p>
    <p>
      <strong>Yalnızca metin sütunları olan veritabanlarında ikili veri depolama.</strong> Daha iyi uygulama ikili bir sütun (BLOB, BYTEA) kullanmaktır, ancak yapamadığınızda VARCHAR içinde Base64 işe yarar.
    </p>

    <h2>Base64 ne zaman KULLANILMAMALI</h2>
    <p>
      <strong>Hassas verileri gizleme.</strong> Önemsiz bir şekilde tersine çevrilebilir. Base64 değil, gerçek şifreleme (AES, RSA vb.) kullanın.
    </p>
    <p>
      <strong>Büyük dosya aktarımı.</strong> %33 ek yük ve metin ayrıştırma maliyeti, onu ikili protokollere kıyasla israf yapar. İkili veriyi doğrudan akışla aktarın.
    </p>
    <p>
      <strong>Veritabanı birincil anahtarları.</strong> Sıralama düzeni tuhaftır, önek indeksleme gariptir. Bunun yerine ikili sütunlar veya onaltılık kodlama kullanın.
    </p>
    <p>
      <strong>Büyük satır içi görseller.</strong> Yukarıdaki gibi — %33 boyut cezası gerçektir. Normal bir görsel dosyası veya bir CDN kullanın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>1. Base64'ü güvenlik olarak ele almak.</strong> "API anahtarını Base64 ile gizledik" bir kırmızı bayraktır. Çözülmesi 1 saniye sürer.
    </p>
    <p>
      <strong>2. + ve / ile URL'yi bozmak.</strong> Standart Base64'ü bir URL sorgu parametresinde iletmek: + boşluk olur, / yol ayrıştırıcılarını karıştırabilir. URL güvenli Base64 kullanın veya tüm dizeyi URL kodlayın.
    </p>
    <p>
      <strong>3. Base64'ün girdi olduğunu varsaymak.</strong> Bir işlem hattı zaten kodlanmış veriyi kodladığında çift kodlama oluşur. Sonuç, orijinali değil, bir Base64 dizesine çözülür.
    </p>
    <p>
      <strong>4. Dolguyu kaldırıp ardından katı bir kod çözücüye beslemek.</strong> Toleranslı modu olmayan bir kod çözücünün = işaretine ihtiyacı vardır. Dolgu ekleyin: dize + "=" × ((4 − uzunluk mod 4) mod 4).
    </p>
    <p>
      <strong>5. Metni yanlış karakter setiyle kodlamak.</strong> Base64, karakterleri değil, baytları kodlar. Dize UTF-8 ise, kod noktalarını değil, UTF-8 bayt temsilini kodlayın. Farklı diller bunu farklı şekilde ele alır; ASCII olmayan verilerle test edin.
    </p>

    <h2>Farklı dillerde kodlama ve kod çözme</h2>
    <p>
      <strong>JavaScript (tarayıcı):</strong> kodlama için btoa(), kod çözme için atob(). Dikkat: bunlar yalnızca Latin-1 dizeleri için çalışır — UTF-8 için, encodeURIComponent/decodeURIComponent dansıyla sarın veya TextEncoder + Uint8Array kullanın.
    </p>
    <p>
      <strong>Node.js:</strong> Kodlamak için Buffer.from(s, 'utf8').toString('base64'); kod çözmek için Buffer.from(s, 'base64').toString('utf8').
    </p>
    <p>
      <strong>Python:</strong> base64.b64encode(bytes) ve base64.b64decode(string). URL güvenli varyant için base64.urlsafe_b64encode kullanın.
    </p>
    <p>
      <strong>CLI (Linux / macOS):</strong> Kodlamak için echo "merhaba" | base64; kod çözmek için echo "aGVsbG8K" | base64 -d.
    </p>

    <h2>JWT — herkesin gördüğü örnek</h2>
    <p>
      Bir JWT, xxxxx.yyyyy.zzzzz gibi görünür. Her bölüm, dolgusuz URL güvenli Base64'tür.
    </p>
    <p>
      Herhangi bir bölümü bir Base64 kod çözücüyle çözün ve JSON'u göreceksiniz. Veri herkes tarafından okunabilir — bir JWT verisine asla sır koymayın. İmza (üçüncü bölüm) token'ın kimliğini doğrular; içeriği herkes okuyabilir, ancak yalnızca imzalama anahtarının sahibi bir tane sahtesini yapabilir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Base64'ü{" "}
      <a href="/tools/base64-encoder-decoder">Base64 kodlayıcı/kod çözücü</a> ile kodlayın veya çözün.
      Token'ları incelerken (bunlar perde arkasında URL güvenli Base64'tür){" "}
      <a href="/tools/jwt-decoder">JWT kod çözücü</a> ile ve Base64'ün yanında sıklıkla ihtiyaç duyduğunuz bir sonraki katman URL yüzde kodlaması için{" "}
      <a href="/tools/url-encoder-decoder">URL kodlayıcı/kod çözücü</a> ile eşleştirin.
    </p>
  </>
);