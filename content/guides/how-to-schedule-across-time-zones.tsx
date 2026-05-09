import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Farklı zaman dilimleri arasında planlama yapmak, çok sayıda kaçırılan toplantıya, sabah 3'te gelen uyandırma çağrılarına ve "bekle, bu senin sabahın mıydı yoksa bizim mi?" Slack yazışmalarına yol açan küçük bir sorundur. Sorunların çoğu dört öngörülebilir hata moduna dayanır: Yaz Saati Uygulaması, belirsiz kısaltmalar, yarım saatlik ve 45 dakikalık farklar ve her zaman bir tarafın zorlu saati almasıyla ilgili asimetrik adalet sorunu. Bu rehber, gerçekten işe yarayan matematiği, araçları ve ekip kurallarını adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Eşzamansız duyurular için her zaman UTC tabanlı saatler kullanın</h2>
    <p>
      "Saat 15:00'te toplantı" yazmak yerine{" "}
      <strong>"Saat 15:00 Pasifik / 18:00 Doğu / 22:00 UTC / 23:00 Londra (ertesi gün 07:00 Tokyo)"</strong> yazın. Üç satır size on beş saniyeye mal olur ve kaçırılan toplantıların en büyük nedenini ortadan kaldırır. Daha iyisi: anı tüm bölgelerde canlı olarak gösteren kalıcı bir dünya saati URL'sine (everytimezone.com, timeanddate.com) bağlantı verin.
    </p>

    <h2>Yaz Saati Uygulaması — sessiz toplantı katili</h2>
    <p>
      YSU, planlamadaki en büyük sorundur çünkü farklı bölgeler farklı tarihlerde geçiş yapar:
    </p>
    <p>
      <strong>ABD</strong> Mart ayının ikinci Pazar günü ileri, Kasım ayının ilk Pazar günü geri alır.
    </p>
    <p>
      <strong>Avrupa (çoğu)</strong> Mart ayının son Pazar günü ve Ekim ayının son Pazar günü değişir.
    </p>
    <p>
      <strong>Avustralya</strong> Ekim ve Nisan aylarında değişir (Kuzey Yarımküre'den farklı aylar, ters yön).
    </p>
    <p>
      <strong>Japonya, Asya'nın çoğu, Afrika'nın çoğu, Güney Amerika'nın çoğu, Arizona, Hawaii</strong> hiç YSU uygulamaz.
    </p>
    <p>
      Pratik sonuç: Her yıl Mart/Nisan ve Ekim/Kasım aylarında 2-3 hafta boyunca, YSU uygulayan herhangi iki bölge arasındaki normal saat farkı normalden farklıdır. Sabit bir 09:00 ET / 14:00 İngiltere toplantısı, ABD'nin ileri aldığı ancak İngiltere'nin henüz almadığı hafta için 09:00 ET / 13:00 İngiltere olur. Takvim aracınız bunu genellikle doğru şekilde halleder, <em>eğer</em> toplantıyı konum bilincine sahip bir zaman dilimi ile planladıysanız. "UTC+1"i manuel olarak kullandıysanız, bozulur.
    </p>

    <h2>Saat dilimi kısaltmaları — belirsiz, bunlardan kaçının</h2>
    <p>
      "CST", Merkezi Standart Saat (ABD, UTC-6) veya Çin Standart Saati (UTC+8) anlamına gelir. "BST", İngiliz Yaz Saati veya Bangladeş Standart Saati'dir. "IST", Hindistan, İsrail veya İrlanda'dır. Her zaman bir şehir adı ("Şikago saati") veya sayısal bir fark ("UTC-6") ile netleştirin.
    </p>

    <h2>Yarım saatlik ve 45 dakikalık farklar herkesi yakalar</h2>
    <p>
      <strong>Hindistan</strong> UTC+5:30'dur. <strong>İran</strong> UTC+3:30'dur (ve yılın yarısında değişir). <strong>Newfoundland</strong>{" "}
      UTC-3:30'dur. <strong>Nepal</strong> UTC+5:45'tir. <strong>Myanmar</strong>{" "}
      UTC+6:30'dur. Bu bölgelerden herhangi biriyle planlama yapan kişilerin dörtte üçü en yakın tam saati tahmin eder ve yanılır. Her zaman bir takvim aracı veya açık dönüşüm kullanın, asla zihinsel matematik yapmayın.
    </p>

    <h2>Tekrarlanan toplantılar için adil dönüşüm</h2>
    <p>
      İki ekip 6+ saatlik bir farkla ayrıldığında, birisi her zaman zorlanır. "Adalet" varsayılanı, kimin sabahı/akşamı olduğunu dönüşümlü olarak değiştirmektir:
    </p>
    <p>
      <strong>Dönüşüm A:</strong> Tek numaralı haftalar A tarafının sabahında, çift numaralı haftalar B tarafının sabahında yapılır. Adil ve öngörülebilir.
    </p>
    <p>
      <strong>Dönüşüm B:</strong> Toplantıyı kademelendirin — iki haftada bir bir saatte, diğer haftalarda başka bir saatte buluşun. Her iki taraf da eşit derecede zorlanır; hiçbiri her hafta zorlanmaz.
    </p>
    <p>
      <strong>Çoğu iş için eşzamansız varsayılan:</strong> Senkron toplantıları yüksek bant genişlikli tartışmalar için saklayın. Durum güncellemelerini, raporları ve kararları yazılı forma taşıyın, böylece saat dilimi önemsiz hale gelir. Bu, küresel olarak dağıtılmış ekipler için en büyük üretkenlik artışıdır.
    </p>

    <h2>Acı toleransı için 6 saat kuralı</h2>
    <p>
      6 saatten az bir fark, her iki taraf için de makul bir zaman diliminde planlanabilir (ABD Doğu ↔ Avrupa 5-6 saattir, yönetilebilir). 8 saatten fazla (ABD Batı ↔ Avrupa 9, ABD ↔ Asya 12-15) birisi her zaman ya sabah 7'den önce ya da akşam 8'den sonradır. Bu noktada eşzamansız neredeyse her zaman daha iyi bir seçenektir; günlük senkron, haftalık güncellemeler veya açık kriz müdahalesi için ayrılması gereken kadar pahalı hale gelir.
    </p>

    <h2>En yaygın üç planlama hatası</h2>
    <p>
      <strong>(1) Fiziksel konumunuzla eşleşmeyen bir saat dilimi ayarlamak.</strong> Dijital göçebe takvimini UTC'ye ayarlar, Lizbon'a uçar, bir ABD ekibini toplantıya davet eder. Herkes "10:00"ı farklı yorumlar. Çözüm: takviminizin saat dilimini fiziksel olarak bulunduğunuz yere göre ayarlayın, seyahat ettiğinizde güncelleyin.
    </p>
    <p>
      <strong>(2) Kopyala-yapıştır zamanı ile birini davet etmek.</strong> Takvim uygulamaları toplantıları mutlak anlar olarak (dahili olarak UTC) saklar ve her katılımcının yerel saatine çevirir. Başka bir bölgedeki bir kişi için bir davet alanına, arayüzün hangi bölgeyi kastettiğinizi bilmeden "14:00" kopyalayıp yapıştırmak, davetlinin bölgesinde saat 14:00'te toplantı yapmanıza yol açar, oysa siz kendi bölgenizde 14:00'ü kastetmişsinizdir.
    </p>
    <p>
      <strong>(3) Diğer bölgelerdeki tatilleri hesaba katmamak.</strong> ABD Şükran Günü Avrupa'da yoktur. Çin Yeni Yılı, Asya'nın çoğunu bir hafta boyunca etkisiz hale getirir. Japonya'da Altın Hafta Mayıs başıdır. Brezilya'da Karnaval Şubat sonu/Mart başıdır. Küresel bilince sahip bir ekip, bir lansman tarihini kilitlemeden önce ilgili tüm bölgelerin tatillerini kontrol eder.
    </p>

    <h2>İş için doğru araç</h2>
    <p>
      Tek seferlik dönüşümler için{" "}
      <a href="/tools/time-zone-converter">saat dilimi dönüştürücüyü</a> kullanın. Tekrarlanan toplantılar için takviminizin yerel saat dilimi desteğini kullanın (Google Calendar, Outlook, şehir adı verilmiş bir bölge seçerseniz YSU'yu doğru şekilde halleder). Geniş ekip planlaması için, tüm ekibin gününü bir bakışta görmek üzere everytimezone.com veya worldtimebuddy.com kullanın.
    </p>
    <p>
      Dört zaman dilimi arasında 10 kişilik bir senkron toplantının gerçekten planlamaya değer mi yoksa eşzamansıza mı geçilmesi gerektiğine karar vermek için{" "}
      <a href="/tools/meeting-cost-calculator">toplantı maliyeti hesaplayıcı</a> ile ve nadir senkron zaman dilimini yüksek etkili tutmak için{" "}
      <a href="/tools/meeting-agenda-builder">toplantı gündemi oluşturucu</a> ile birlikte kullanın.
    </p>
  </>
);