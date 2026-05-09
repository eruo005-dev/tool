import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Mors kodu, alfabeyi kısa ve uzun sinyal desenlerine dönüştüren 180 yıllık bir kodlama sistemidir. Başlangıçta elektriksel darbelerin bir telgraf teli boyunca dil taşıması için tasarlanmıştır. Telgraftan bir yüzyıl daha uzun yaşamıştır çünkü iki durumu ayırt edebilen hemen her ortamda çalışır: ses, ışık, radyo darbeleri, vurulan bir boru, yanıp sönen bir el feneri. Modern havacılık hâlâ seyrüsefer feneri tanımlaması için kullanır, amatör telsizcilik onu HF bantlarında canlı tutar ve herkesin en az bir kez öğretildiği yedek acil durum sinyali olarak kalır (nokta nokta nokta, çizgi çizgi çizgi, nokta nokta nokta). Bu rehber, uluslararası Mors alfabesini, zamanlama kurallarını, gerçek dünya trafiğini çerçeveleyen prosignları, uluslararası ve Amerikan demiryolu Mors'u arasındaki farkı, SOS'un tam olarak neden bu şekilde olduğunu ve kodun bugün lisans sınavlarında kalmasını sağlayan pratik kullanımları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Noktalar, çizgiler ve zamanlama</h2>
    <p>
      Her Mors karakteri, iki sinyal uzunluğunun bir dizisidir:
      kısa (&ldquo;nokta&rdquo; veya &ldquo;dit&rdquo;) ve uzun
      (&ldquo;çizgi&rdquo; veya &ldquo;dah&rdquo;). Çizgi, noktanın
      üç katı uzunluğundadır &mdash; bu oran, Mors'u rastgele bir
      diziden ayıran şeydir.
    </p>
    <p>
      Tam zamanlama kuralları:
    </p>
    <p>
      Bir nokta = bir zaman birimi.
      Bir çizgi = üç zaman birimi.
      Aynı harfin parçaları arasındaki boşluk = bir birim.
      Harfler arasındaki boşluk = üç birim.
      Kelimeler arasındaki boşluk = yedi birim.
    </p>
    <p>
      &ldquo;Zaman birimi&rdquo; operatörün seçtiği şeydir.
      Dakikada 20 kelimede, bir nokta yaklaşık 60 milisaniyedir.
      PARIS kelimesi (geleneksel standart) 50 birim uzunluğundadır,
      bu nedenle dakikadaki kelime sayısı 50 &times; (saniyedeki birim) / 60'a eşittir.
    </p>

    <h2>Uluslararası Mors alfabesi</h2>
    <pre>{`A .-      N -.       0 -----
B -...    O ---      1 .----
C -.-.    P .--.     2 ..---
D -..     Q --.-     3 ...--
E .       R .-.      4 ....-
F ..-.    S ...      5 .....
G --.     T -        6 -....
H ....    U ..-      7 --...
I ..      V ...-     8 ---..
J .---    W .--      9 ----.
K -.-     X -..-
L .-..    Y -.--
M --      Z --..`}</pre>
    <p>
      Kısa kodlar sık kullanılan harflere gider. E tek bir noktadır çünkü
      E, İngilizcede en sık kullanılan harftir &mdash; Huffman kodlamasını
      yönlendiren aynı sıklık içgörüsü, bir yüzyıl önce Alfred Vail
      tarafından keşfedilmiştir; Vail, Samuel Morse itibarı alırken
      asıl atama işinin çoğunu yapmıştır.
    </p>

    <h2>Noktalama işaretleri ve özel karakterler</h2>
    <pre>{`.  .-.-.-       :  ---...
,  --..--       ;  -.-.-.
?  ..--..       =  -...-
'  .----.       +  .-.-.
!  -.-.--       /  -..-.
/  -..-.        (  -.--.
&  .-...        )  -.--.-
@  .--.-.       -  -....-`}</pre>
    <p>
      <code>@</code> ataması (2004'te ITU tarafından eklenmiştir)
      on yıllar sonraki ilk yeni Mors karakteriydi ve amatör
      yarışmalarda e-posta dönemi kullanımını yansıtıyordu.
    </p>

    <h2>Prosignlar &mdash; operatör sinyalleri</h2>
    <p>
      Prosignlar, boşluksuz gönderilen iki harfli desenlerdir ve bir
      harften ziyade prosedürel bir talimat anlamına gelir. Harflerin
      üzerinde bir çizgi ile yazılır.
    </p>
    <p>
      <strong>&#172;AR</strong> (<code>.-.-.</code>) &mdash; mesajın
      sonu.
    </p>
    <p>
      <strong>&#172;SK</strong> (<code>...-.-</code>) &mdash; temasın
      sonu.
    </p>
    <p>
      <strong>&#172;BT</strong> (<code>-...-</code>) &mdash; mesaj
      içinde ayırıcı (paragraf arası gibi).
    </p>
    <p>
      <strong>&#172;KN</strong> (<code>-.--.</code>) &mdash; &ldquo;devam
      et, yalnızca belirli istasyon.&rdquo;
    </p>
    <p>
      <strong>&#172;SOS</strong> (<code>...---...</code>) &mdash;
      evrensel imdat çağrısı, kesintisiz tek bir desen olarak gönderilir.
    </p>

    <h2>SOS</h2>
    <p>
      SOS, en yaygın bilinen Mors dizisidir. Bir kısaltma değildir
      (&ldquo;Save Our Souls&rdquo; değildir &mdash; bu sonradan
      uydurulmuştur); desen
      <code> . . . &mdash; &mdash; &mdash; . . .</code> kısa,
      simetrik, yanlış anlaşılmaz ve kazara oluşan herhangi bir
      gürültüden ayırt edilebilir olduğu için seçilmiştir.
    </p>
    <p>
      1906 Berlin Radyotelgraf Konferansı'nda uluslararası deniz
      imdat sinyali olarak kabul edilmiştir. 1999'da otomatik GMDSS
      imdat sinyallemesi ile değiştirilmiştir, ancak SOS hâlâ
      yasaldır, hâlâ tanınır ve hâlâ hayatta kalma eğitimlerinde
      uygulanır.
    </p>

    <h2>Uluslararası ve Amerikan Mors'u</h2>
    <p>
      Samuel Morse'un 1840'lardaki orijinal kodu (&ldquo;Amerikan
      Mors'u&rdquo; veya &ldquo;Demiryolu Mors'u&rdquo;) modern
      uluslararası olandan farklı desenlere sahipti; buna karakterler
      içinde boşluklar da dahildi (<code>C = .. .</code> bir boşlukla).
      1920'lere kadar Kuzey Amerika kablolu telgrafında kullanıldı.
    </p>
    <p>
      Yukarıdaki <strong>Uluslararası Mors kodu</strong>, 1851'de
      Avrupa'daki konferanslar ve daha sonra diğer her yer tarafından
      kabul edildi. Karakter içi boşlukları ortadan kaldırdı, radyo
      iletimini basitleştirdi ve 2026'da &ldquo;Mors kodu&rdquo;
      denilen şeydir.
    </p>

    <h2>Mors gönderme</h2>
    <p>
      Mors, iki durumlu herhangi bir ortam üzerinden gönderilebilir:
    </p>
    <p>
      <strong>Ses</strong>: tuşa basıldığında sürekli bir ton üretilir
      (amatör telsizde tipik olarak 700 Hz), tuş serbestken sessizdir.
    </p>
    <p>
      <strong>Işık</strong>: el feneri, Aldis lambası (askeri
      sinyalleme), yanıp sönen LED, hatta araba farları.
    </p>
    <p>
      <strong>Radyo</strong>: sürekli dalganın (CW) aç-kapa
      anahtarlaması. Orijinal kullanım alanı ve hâlâ amatör HF
      bantlarında aktiftir.
    </p>
    <p>
      <strong>Vuruş</strong>: boru, duvar, hücre kapısı. Ünlü
      kullanım: Amiral Jeremiah Denton, 1966 Vietnam savaş esiri
      röportajında T-O-R-T-U-R-E'yi göz kırparak heceledi.
    </p>

    <h2>Hız ve PARIS standardı</h2>
    <p>
      Dakikadaki kelime sayısı (WPM), referans olarak 50 birimlik
      PARIS kelimesi kullanılarak ölçülür. Tipik hızlar:
    </p>
    <p>
      <strong>5 WPM</strong>: başlangıç seviyesi. Eski FCC amatör
      telsiz lisanslama tabanı.
    </p>
    <p>
      <strong>13 WPM</strong>: tarihi FCC Genel Sınıf gereksinimi
      (2007'de kaldırıldı).
    </p>
    <p>
      <strong>20 WPM</strong>: aktif CW operatörleri arasında rahat
      konuşma hızı.
    </p>
    <p>
      <strong>30&ndash;40 WPM</strong>: yarışma ve DXpedisyon
      operatörleri.
    </p>
    <p>
      <strong>60+ WPM</strong>: elit. Yüksek Hızlı Telgraf dünya
      şampiyonası rekorları dakikada 300 karakteri aşar.
    </p>

    <h2>Farnsworth zamanlaması</h2>
    <p>
      Öğrenciler, yaklaşık 10&ndash;12 WPM'de, tek tek harfleri
      çözebildikleri ancak bunları kelimelere dönüştürmekte
      zorlandıkları bir platoya ulaşırlar. Farnsworth yöntemi
      (1959), karakter hızını yüksek (20 WPM) tutar ancak karakterler
      arası boşlukları uzatır &mdash; böylece her dit/dah tam hızda
      duyulacak gibi gelir, ancak öğrencinin tanıması için zamanı
      olur. Akıcılık arttıkça boşlukları kapatırsınız.
    </p>

    <h2>Seyrüsefer fenerleri hâlâ Mors kullanıyor</h2>
    <p>
      Havacılık VOR (çok yüksek frekanslı omnidirectional menzil)
      istasyonları ve NDB'ler (yönsüz fenerler), normal sinyallerinin
      üzerine 2 veya 3 harfli kodlarının Mors koduyla kendilerini
      tanımlarlar. Bir pilot frekansı ayarlar ve örneğin
      &ldquo;çizgi-nokta-çizgi-nokta nokta-nokta-çizgi&rdquo;
      (CIM) duyarak doğru istasyonu aldığını teyit eder.
    </p>

    <h2>Amatör telsizcilik</h2>
    <p>
      Kod modu (CW) temasları, amatör HF spektrumunun hâlâ en aktif
      kısımlarından biridir. CW, sesin geçemediği yerden geçer
      &mdash; dar bir bant genişliği (500 Hz'in altında), sinyalin
      daha az spektrumda yoğunlaşması anlamına gelir, bu nedenle
      gürültüyü deler. 5 watt ve bir tel antenle dünya çapında
      temaslar CW operatörleri için rutindir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Yanlış çizgi uzunluğu.</strong> Çizginiz noktanın
      üç katı yerine sadece iki katıysa, deneyimli dinleyiciler
      bunu &ldquo;yayvan&rdquo; olarak duyar ve alıcı yazılımı
      yanlış çözer. Bir metronomla pratik yapın.
    </p>
    <p>
      <strong>Tutarsız harf arası boşluklar.</strong> Harfleri
      birbirine bitiştirmek (<code>....-</code> net bir boşluk
      olmadan), 4 sayısı yerine H ve ardından T olarak okunur.
      Mors'ta bir nokta tek başına E olabilir, bu nedenle boşluk
      disiplini her şeydir.
    </p>
    <p>
      <strong>SOS'u üç harf olarak göndermek.</strong> SOS, harf
      arası boşluksuz tek bir prosigndır <code>...---...</code>.
      S, O, S'yi ayrı ayrı göndermek prosedürel bir hatadır, ancak
      duyan herkes yine de anlar.
    </p>
    <p>
      <strong>Uluslararası Mors kullanılırken Amerikan Mors'u
      varsaymak.</strong> Tarihi demiryolu bağlamları dışında,
      herkes Uluslararası Mors kullanır. C, F, J, L, Q, X, Y, Z
      için arama tabloları farklıdır.
    </p>
    <p>
      <strong>Birkaç harfi kalıcı olarak yanlış ezberlemek.</strong>
      Q (<code>--.-</code>) ve Y (<code>-.--</code>) sıklıkla
      karıştırılır. H (<code>....</code>) ve 5
      (<code>.....</code>) de öyle. Fark otomatik hale gelene kadar
      çiftleri tekrarlayın.
    </p>
    <p>
      <strong>Sayılar için desenin sezgisel olmasını beklemek.</strong>
      Sayım bir eksiktir:
      <code> 1 = .----</code>, <code>2 = ..---</code>, vb. 0 ise
      <code> -----</code>. Ezberleyin; tahmin etmeyin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Metin ve Mors'u{" "}
      <a href="/tools/morse-code-translator">Mors kodu çeviricisi</a>
      ile ileri geri çevirin. Nokta-çizgiyi ikili tabanla karıştıran
      katmanlı sinyalleme bulmacaları için{" "}
      <a href="/tools/binary-text-encoder">ikili metin kodlayıcı</a>
      ile ve tarihsel dönem kodlamalarını bir ikame katmanıyla
      birleştirmek istediğinizde{" "}
      <a href="/tools/caesar-cipher">Sezar şifreleme aracı</a>
      ile eşleştirin.
    </p>
  </>
);