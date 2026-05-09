import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir unix zaman damgası <code>1713830400</code> gibi görünür ve onu çözene kadar
      hiçbir anlam ifade etmez. Çözdüğünüzde, bilgisayarların zamanı paylaşmasının en
      güvenilir yoludur &mdash; zaman dilimi yok, yaz saati uygulaması yok, belirsiz
      tarih formatları yok, sadece 1970'teki sabit bir andan itibaren geçen saniyeler.
      Ancak bu zaman damgasını bir insana göstermeniz, bir veritabanında saklamanız,
      farklı sistemlerden gelen iki değeri karşılaştırmanız veya 2038 sonrası tarihleri
      işlemeniz gerektiğinde, basit fikir hızla karmaşıklaşır. Bu rehber, dönemin
      (epoch) gerçekte ne olduğunu, API'leri her gün bozan kritik saniye-milisaniye
      ayrımını, 2038 Yılı Sorununu, işaretli ve işaretsiz temsilleri, zaman dilimi
      yönetimini ve en az beklediğiniz anda canınızı sıkan uç durumları (artık
      saniyeler, 1970 öncesi tarihler) kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Unix dönemi (epoch) nedir</h2>
    <p>
      <strong>Unix dönemi</strong>, 1 Ocak 1970 00:00:00 UTC'dir. Bir unix zaman damgası,
      o andan itibaren geçen, artık saniyeleri yok sayan saniye sayısıdır. Bazen
      &ldquo;dönem zamanı&rdquo; veya &ldquo;POSIX zamanı&rdquo; olarak da adlandırılır.
      1970 seçimi tarihseldir &mdash; Bell Labs'taki ilk Unix tasarımcıları için
      uygundu ve fiili bir standart haline geldi.
    </p>
    <p>
      Kritik özellik: unix zaman damgaları her zaman <strong>UTC</strong> cinsindendir.
      Zaman dilimleri yoktur. <code>1713830400</code> değerini &ldquo;23 Nisan 2024
      12:00&rdquo; olarak dönüştürdüğünüzde, onu göstermek için bir zaman dilimi
      seçiyorsunuzdur. Zaman damgasının kendisi hangi zaman diliminde olduğunuzu
      bilmez.
    </p>

    <h2>Saniye ve milisaniye</h2>
    <p>
      Bu, zaman damgalarıyla çalışırken en sık karşılaşılan hatadır. Unix zamanı orijinal
      haliyle <strong>saniye</strong> cinsinden ölçülür. JavaScript'in{" "}
      <code>Date.now()</code> metodu <strong>milisaniye</strong> döndürür. Python'un{" "}
      <code>time.time()</code> metodu saniye (ondalıklı sayı olarak) döndürür. Java'nın{" "}
      <code>System.currentTimeMillis()</code> metodu milisaniye döndürür. Bunları
      karıştırırsanız, 1970 tarihleri (saniyeler milisaniye olarak işlenir) veya yıl
      55000 (milisaniyeler saniye olarak işlenir) gibi tarihler elde edersiniz.
    </p>
    <pre>{`// Aynı an, farklı birimler:
saniye:        1713830400
milisaniye:    1713830400000
mikrosaniye:   1713830400000000
nanosaniye:    1713830400000000000

// Kestirme: 10 haneli sayı saniyedir.
// 13 haneli sayı milisaniyedir.
// 2024 itibarıyla, saniye cinsinden bir zaman damgası
// 2286 yılına kadar 10 hanelidir, sonra 11 haneye çıkar.`}</pre>

    <h2>2038 Yılı Sorunu</h2>
    <p>
      19 Ocak 2038'de 03:14:07 UTC'de, unix zaman damgası 2.147.483.647'ye ulaşır
      &mdash; bu, işaretli 32-bit bir tamsayının maksimum değeridir. Bir saniye sonra,
      32-bit işaretli bir zaman damgası &minus;2.147.483.648'e taşar ve bu da 13 Aralık
      1901'i temsil eder. Hala 32-bit işaretli zaman kullanan herhangi bir sistem, tarihi
      1901 olarak okuyacaktır.
    </p>
    <p>
      Bu varsayımsal değildir. Gömülü cihazlar, eski veritabanları, eski dosya
      formatları ve <code>INT</code> yerine <code>BIGINT</code> olarak bildirilmiş SQL
      sütunlarının tümü savunmasızdır. Modern sistemler, taşmayı yıl 292.277.026.596'ya
      &mdash; yani neredeyse sonsuza &mdash; iten 64-bit işaretli tamsayılar kullanır.
      Bugün bir şema tasarlıyorsanız, 64-bit bir tür kullanın ve bir daha geriye
      bakmayın.
    </p>

    <h2>İşaretli ve işaretsiz</h2>
    <p>
      İşaretli 32-bit bir tamsayı, 1901-12-13 ile 2038-01-19 arasındaki tarihleri temsil
      edebilir. İşaretsiz 32-bit bir tamsayı, 1970-01-01 ile 2106-02-07 arasını temsil
      edebilir ancak 1970 öncesi hiçbir tarihi temsil edemez. Çoğu dil varsayılan olarak
      işaretli kullanır, bu nedenle 2106'dan daha çok 2038'den bahsedildiğini
      görürsünüz. Bazı eski sistemler (belirli C API'leri, bazı veritabanları) işaretsiz
      kullanır &mdash; bu, 1955'teki bir doğum tarihi gibi tarihsel bir tarihin
      saklanamayacağı anlamına gelir.
    </p>

    <h2>Saat dilimleri ve ofsetler</h2>
    <p>
      Bir unix zaman damgasını bir insana göstermek için bir saat dilimi ofseti
      uygulayın. UTC'nin ofseti +00:00'dır. Kışın New York &minus;05:00, yazın
      &minus;04:00'dır (yaz saati uygulaması). Tokyo yıl boyunca +09:00'dır. Zaman
      damgasından yerel saate dönüştürme:
    </p>
    <pre>{`timestamp = 1713830400        // 2024-04-23 00:00:00 UTC
offsetSaat = -5              // New York EST
yerelSaat = (timestamp / 3600 + offsetSaat) % 24

// Veya Python'da:
from datetime import datetime, timezone, timedelta
utc = datetime.fromtimestamp(1713830400, tz=timezone.utc)
ny = utc.astimezone(timezone(timedelta(hours=-5)))
print(ny.isoformat())  # 2024-04-22T19:00:00-05:00`}</pre>
    <p>
      Kritik kural: <strong>zaman damgalarını UTC olarak saklayın, yerel saatte
      görüntüleyin</strong>. Veritabanına asla &ldquo;2024-04-23 12:00 Eastern&rdquo;
      gibi bir değer kaydetmeyin &mdash; karşılaştırma, sıralama veya diğer
      bölgelerdeki kullanıcıları işleme yeteneğinizi kaybedersiniz.
    </p>

    <h2>Artık saniyeler</h2>
    <p>
      Dünya'nın dönüşü biraz düzensizdir, bu nedenle uluslararası zaman işleyişi ara
      sıra bir <strong>artık saniye</strong> ekler &mdash; bir sonraki gün başlamadan
      önce 23:59:60 UTC. Unix zamanı artık saniyeleri yok sayar; onlar yokmuş gibi
      davranır. Bu, unix zamanının atom zamanıyla tam olarak sürekli olmadığı anlamına
      gelir. Çoğu uygulama için bu önemli değildir. Finansal ticaret, uydu takibi veya
      yıllar boyunca saniye altı doğruluk gerektiren herhangi bir şey için önemlidir
      &mdash; bu nedenle bu sistemler bunun yerine TAI (Uluslararası Atom Zamanı)
      kullanır.
    </p>
    <p>
      1972 ile 2024 arasında 27 artık saniye eklenmiştir. Ağırlıklar ve Ölçüler Genel
      Konferansı 2022'de 2035'e kadar artık saniyeleri etkili bir şekilde terk etme
      kararı almıştır.
    </p>

    <h2>1970 öncesi tarihler</h2>
    <p>
      Unix zaman damgaları negatif olabilir. <code>-1</code>, 31 Aralık 1969 23:59:59
      UTC anlamına gelir. <code>-31536000</code> kabaca 1 Ocak 1969'dur. Birçok
      kütüphane negatif zaman damgalarını doğru işler; bazıları işlemez. JavaScript'in{" "}
      <code>new Date(-1000)</code> ifadesi çalışır. İşaretsiz platformlardaki eski C
      <code>time_t</code> yapısı çalışmaz. Güvenmeden önce test edin.
    </p>

    <h2>Yaygın formatlar ve zaman damgaları</h2>
    <pre>{`ISO 8601:       2024-04-23T00:00:00Z
RFC 2822:       Tue, 23 Apr 2024 00:00:00 +0000
Unix saniye:    1713830400
Unix ms:        1713830400000
Windows FILETIME: 133584672000000000  (1601'den beri 100ns)
.NET Ticks:     638493696000000000    (yıl 1'den beri 100ns)
Excel tarihi:     45405                 (1900-01-01'den beri gün)`}</pre>
    <p>
      Excel'in tarih seri numarasının ünlü bir hatası vardır: 1900'ü yanlışlıkla artık
      yıl olarak kabul eder, bu nedenle Mart 1900'den önceki tarihler bir gün hatalıdır.
      Bu, Lotus 1-2-3 uyumluluğu için korunmuştur ve asla düzeltilemez.
    </p>

    <h2>Veritabanı depolama</h2>
    <p>
      PostgreSQL'in <code>timestamptz</code> türü bir UTC anını saklar ve onu oturum
      saat diliminde döndürür &mdash; bunu kullanın. MySQL'in <code>TIMESTAMP</code> türü
      UTC olarak saklanır, 4 bayttır, ancak 32-bit yapılarda 1970&ndash;2038 ile
      sınırlıdır &mdash; bu aralığın dışındaki tarihler için <code>DATETIME</code>
      kullanın. SQLite'ın yerel bir türü yoktur &mdash; tamsayı (unix saniye) veya ISO
      metni olarak saklayın. MongoDB, BSON Date (milisaniye, 64-bit işaretli) kullanır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Saniye ve milisaniyeyi karıştırmak.</strong> 1000 kat hata, 1970 veya 55000
      tarihleri üretir. Sistemler arasında zaman damgası göndermeden önce birimi her
      zaman doğrulayın.
    </p>
    <p>
      <strong>Yerel saati ofset olmadan saklamak.</strong> &ldquo;2024-04-23 12:00&rdquo;
      belirsizdir &mdash; ondan UTC'yi kurtaramazsınız. UTC artı isteğe bağlı görüntüleme
      saat dilimini saklayın.
    </p>
    <p>
      <strong>Yeni şemalar için 32-bit tamsayı kullanmak.</strong> 2038 sorunu, uzun
      ömürlü herhangi bir sistemin 64-bit zaman sütunlarına ihtiyaç duyacağı kadar
      yakındır.
    </p>
    <p>
      <strong>Bir günün 86.400 saniye olduğunu varsaymak.</strong> Artık saniye
      günlerinde 86.401'dir. Yerel saatte DST geçiş günlerinde 23 veya 25 saattir. Gün
      aritmetiği için takvim bilincine sahip tarih matematiği kullanın.
    </p>
    <p>
      <strong>İstemci saatlerine güvenmek.</strong> Kullanıcı cihazları genellikle 30
      saniyeden saatlere kadar sapar. Kimlik doğrulama token'ları, imzalar ve güvenlik
      açısından hassas herhangi bir karşılaştırma için sunucu saatini kullanın ve bir
      saat kayması toleransına izin verin.
    </p>
    <p>
      <strong>&ldquo;2024-04-23&rdquo; ifadesini UTC gece yarısı olarak ayrıştırmak.</strong>
      Kütüphaneye bağlı olarak, yalnızca tarih içeren bir dize, UTC gece yarısı, yerel
      gece yarısı olarak ayrıştırılır veya hata verir. Her zaman açık saat dilimi
      belirtin.
    </p>
    <p>
      <strong>Zamanlama yaparken yaz saatini yok saymak.</strong> Sabit bir UTC zaman
      damgasındaki &ldquo;Her gün saat 9'da&rdquo; ifadesi, DST ülkelerinde yılda iki
      kez bir saat kayar. Yerel niyeti saklayın ve UTC tetikleyicisini her çalıştırmada
      yeniden hesaplayın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Unix zaman damgaları ve insan tarafından okunabilir tarihler arasında{" "}
      <a href="/tools/unix-timestamp-converter">unix zaman damgası dönüştürücü</a> ile
      dönüşüm yapın. Bir UTC anını bölgeler arasında çevirmek için{" "}
      <a href="/tools/time-zone-converter">saat dilimi dönüştürücü</a> ile eşleştirin ve
      bu zaman damgalarını her izleyicinin yerel bölgesinde doğru şekilde görüntülenecek
      mesajlara gömmek için{" "}
      <a href="/tools/discord-timestamp">discord zaman damgası oluşturucu</a>'yu
      kullanın.
    </p>
  </>
);