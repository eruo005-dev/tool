import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Aralıklı oruç, her gün belirli bir zaman diliminde yemek yemeyi ve
      geri kalan zamanda yememeyi içerir. Geleneksel anlamda bir diyet
      değildir — belirlenmiş bir yiyecek listesi yoktur — sadece bir
      programdır. İnsanlar bunu yemek planlamasını basitleştirmek, kiloyu
      yönetmek, metabolik belirteçleri iyileştirmek veya suçluluk
      duymadan kahvaltıyı atlamanın rahatlığını elde etmek için kullanır.
      Araştırma vakası gerçektir ancak fenomen videolarının önerdiğinden
      daha mütevazıdır; kilo değişiminin ana mekanizması hala kalori
      azaltımıdır, orucun sihri değil. Bu rehber, yaygın programları
      (16:8, 18:6, OMAD), orucu gerçekte neyin bozduğunu, faydaları ve
      riskleri, makul bir şekilde nasıl başlanacağını ve bu yaklaşımı
      tamamen atlaması gereken kişileri kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>En yaygın programlar</h2>
    <p>
      Aralıklı oruç (IF) tek bir protokol değil, bir ailedir:
    </p>
    <pre>{`16:8     16 saat oruç, 8 saat yeme penceresi     en popüler, en kolay
18:6     18 saat oruç, 6 saat yeme penceresi     daha katı
20:4     20 saat oruç, 4 saat pencere             "savaşçı diyeti"
OMAD     günde bir öğün, ~1 saat pencere         agresif
5:2      5 gün normal yeme, 2 gün ~500 kcal      haftalık ritim
ADF      dönüşümlü gün orucu                     agresif, sürdürmesi zor
24 saat  haftada 1-2 kez tam gün orucu           epizodik`}</pre>
    <p>
      IF'ye bağlı kalan çoğu kişi 16:8 veya daha hafif bir 14:10'da
      karar kılar. Daha katı varyantlar eğer hoşunuza gidiyorsa işe
      yarar ancak orantılı olarak daha fazla fayda sağlamaz.
    </p>

    <h2>16:8 gerçekte nasıl görünür</h2>
    <pre>{`Seçenek A (kahvaltıyı atla)
  Ye:   12:00 - 20:00
  Oruç: 20:00 - 12:00 ertesi gün
  Oruç sırasında: su, sade kahve, sade çay

Seçenek B (erken yiyenler)
  Ye:   08:00 - 16:00
  Oruç: 16:00 - 08:00 ertesi gün`}</pre>
    <p>
      Seçenek B sirkadiyen ritimlerle daha uyumludur ve çalışmalarda
      biraz daha iyi metabolik belirteçler gösterme eğilimindedir.
      Seçenek A çoğu kişi için sosyal olarak daha kolaydır.
    </p>

    <h2>Orucu gerçekte ne bozar</h2>
    <p>
      Katı tanım: kalorisi olan her şey. Pratik tanım: anlamlı bir
      insülin yanıtına neden olan her şey.
    </p>
    <pre>{`Orucu bozar: herhangi bir yiyecek, tatlandırılmış içecekler,
               kahvede süt, meyve suyu, et suyu, şeker alkollü
               sakız, meyve

Genelde sorun yok: su, sade kahve, sade çay, soda,
                    eser miktarda elektrolit (bir tutam tuz)

Gri alan:        stevia, diyet soda (kalorisiz ancak olası
                 insülin yanıtı), MCT yağı (kalorili ancak
                 minimal insülin etkisi), kemik suyu`}</pre>
    <p>
      Amacınız kilo yönetimiyse, katı tanım önemli değildir — toplam
      kaloriler yine sonucu belirler. Amacınız otofaji veya orucun
      iddia edilen metabolik etkileriyse, katı listeye bağlı kalın.
    </p>

    <h2>İddia edilen faydalar</h2>
    <ul>
      <li>Kilo kaybı — gerçek, ancak daha küçük pencereden kalori azaltımı yoluyla</li>
      <li>İyileşmiş insülin duyarlılığı — mütevazı, sürekli kalori kısıtlamasına benzer</li>
      <li>
        Azalmış visseral yağ — bazı deneyler, oruçsuz eşit kalorili
        diyetlere göre hafif bir avantaj gösteriyor
      </li>
      <li>
        Hücresel otofaji — hayvan modellerinde gösterilmiştir; insan
        kanıtı daha zayıftır ve 16 saatten daha uzun oruçlar gerektirir
      </li>
      <li>Daha basit yemek planlaması — değeri az bilinir ancak gerçektir</li>
      <li>Sabit enerji (alışmış oruç tutanlarda) — anekdot olarak tutarlı</li>
    </ul>

    <h2>Geçerli olmayan iddia edilen faydalar</h2>
    <p>
      <strong>Eşdeğer kalori açıklarına göre dramatik yağ kaybı.</strong>{" "}
      Meta-analizler, IF'nin vücut kompozisyonunda sürekli kalori
      kısıtlamasıyla eşleştiğini, geçmediğini gösteriyor.
    </p>
    <p>
      <strong>Büyük büyüme hormonu artışı.</strong> Gerçek ancak kısa
      süreli ve çoğu kişi için klinik olarak önemsiz.
    </p>
    <p>
      <strong>Hipertrofi/kas kazanımı için işe yarar.</strong> Kısa bir
      pencerede protein ve kalori hedeflerine ulaşmak zordur; agresif
      kazanım hedefleri için optimal değildir.
    </p>

    <h2>Yeni başlayanlar için kademeli geçiş</h2>
    <p>
      Tüm gün atıştırmaktan doğrudan 16:8'e atlamak genellikle açlık,
      sinirlilik ve pencere açıldığında tıkınma ile sonuçlanır. Yavaş
      başlayın:
    </p>
    <pre>{`Hafta 1:  12:12   (yatmadan 3 saat önce yemeyi bırak)
Hafta 2:  14:10
Hafta 3:  15:9
Hafta 4:  16:8`}</pre>
    <p>
      Çoğu kişi iki hafta içinde alışır. Sabah açlığı azalır; kahve ve
      su ilk 3-4 saati idare eder.
    </p>

    <h2>Pencerede ne yenmeli</h2>
    <p>
      Oruç, serbest geçiş kartı değildir. 8 saatlik pencereniz pizza ve
      dondurmayla doluysa, mükemmel bir oruç programıyla bile kilo
      veremezsiniz. Pencereyi yapılandırın:
    </p>
    <ul>
      <li>Proteini önceliklendirin — öğünlerde vücut ağırlığının kg'ı başına 1.6-2.2 g</li>
      <li>Lif ekleyin — oruç boyunca tokluğu korur</li>
      <li>Karbonhidrat ve yağları genel kalori hedefinize göre ayarlayın</li>
      <li>Pencere açıldığında büyük kan şekeri dalgalanmalarından kaçının (boş mideye rafine karbonhidrat yüklemek rahatsız edicidir)</li>
    </ul>

    <h2>Egzersiz ve oruç</h2>
    <p>
      Aç karnına kardiyo iyidir ve alışmış kişiler için iyi çalışabilir.
      Aç karnına ağırlık kaldırmak yapılabilir ancak güç kazanımları
      için optimal değildir; güç bir öncelikse, ağır seanslardan önce
      orucu bozun.
    </p>
    <p>
      Antrenman sonrası öğün: birkaç saat içinde protein almak, 90'ların
      30 dakikalık "anabolik pencere" paniğinden daha önemlidir. Zor bir
      seansı, orucunuz başlarken saat 22:00'de bitirmeyin — bu
      toparlanmayı tehlikeye atar.
    </p>

    <h2>Riskler ve yan etkiler</h2>
    <p>
      İlk 2-3 hafta en zorudur:
    </p>
    <ul>
      <li>Baş ağrıları (genellikle dehidrasyon veya kafein yoksunluğu)</li>
      <li>Oruç penceresinin sonunda sinirlilik</li>
      <li>Yatağa çok yakın yemek yemekten uyku bozukluğu</li>
      <li>Öğünler büyüdüğünde sindirim ayarlaması</li>
      <li>Elektrolit tükenmesiyle baş dönmesi</li>
    </ul>
    <p>
      Çoğu sorun daha iyi zamanlama, tuz ve su ile çözülür. Belirtiler
      3-4 haftadan sonra devam ederse, IF sizin için uygun olmayabilir.
    </p>

    <h2>IF yapmaması gerekenler</h2>
    <p>
      Tıbbi dikkat veya kontrendikasyon:
    </p>
    <ul>
      <li>Yeme bozukluğu geçmişi (herhangi bir kısıtlama yeniden tetikleyebilir)</li>
      <li>Hamilelik veya emzirme</li>
      <li>Tip 1 diyabet veya insüline bağımlı T2 (tıbbi rehberlik olmadan)</li>
      <li>Zayıf veya yetersiz beslenmiş bireyler</li>
      <li>Çocuklar ve gençler</li>
      <li>Yiyecek gerektiren ilaçlar kullanan kişiler</li>
      <li>Sezondaki rekabetçi sporcular (performansı beslemek zordur)</li>
    </ul>

    <h2>Kadınlar ve IF</h2>
    <p>
      Bazı kadınlar katı IF'de (uzun oruçlar veya az yeme) adet döngüsü
      bozukluğu bildiriyor. Döngü değişiklikleri görürseniz, oruç
      penceresini kısaltın veya kalori ekleyin. Buradaki araştırmalar
      karışıktır ve bireysel yanıt değişir — protokolden ziyade
      vücudunuza dikkat edin.
    </p>

    <h2>Kahve, çay ve elektrolitler</h2>
    <p>
      Sade siyah kahve ve sade çay oruç sırasında standarttır. Süt,
      krema, yulaf sütü katı tanıma göre orucu bozar (ve insülini
      yükseltir). Yapay tatlandırıcılar gri bir alandır; bazı
      araştırmalar insülin yanıtı oruçlarını bozabileceklerini
      öne sürüyor.
    </p>
    <p>
      Daha uzun bir oruç sırasında suya bir tutam tuz yardımcı olur.
      Ticari elektrolit içecekleri genellikle şeker içerir — etiketi
      kontrol edin.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Doğrudan OMAD'a atlamak.</strong> Neredeyse kesin olarak
      geri teper. Haftalar içinde kademeli geçiş yapın.
    </p>
    <p>
      <strong>Pencerede abur cubur yemek.</strong> IF bir programdır,
      diyet değil. Genel alımınız düşük kaliteli veya aşırı kaloriliyse,
      IF sizi kurtarmaz.
    </p>
    <p>
      <strong>Yeterince su içmemek.</strong> Çoğu "oruç baş ağrısı"
      dehidrasyondur. Su ve tuz.
    </p>
    <p>
      <strong>Pencereyi çok kısa yapmak.</strong> 4 saatlik bir pencerede
      2.800 kcal yemeye çalışmak rahatsız edicidir ve genellikle az
      yemeye yol açar.
    </p>
    <p>
      <strong>Proteini ihmal etmek.</strong> OMAD veya 18:6'da proteini
      az tüketmek kolaydır. İlk öğünde bütçeleyin.
    </p>
    <p>
      <strong>IF'yi tıkınma-kısıtlama döngüsü olarak kullanmak.</strong>
      Kısıtlama - tıkınma - kısıtlama disiplin değil, bozukluktur. Bu
      sizin modelinizse, IF'den uzaklaşın.
    </p>
    <p>
      <strong>Nasıl hissettiğinizi görmezden gelmek.</strong> 16:8 sizi
      üç ay boyunca mutsuz ediyorsa, başka bir araç bulun. Kalıcı
      mutsuzluğa değecek hiçbir fayda yoktur.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Yeme pencerenizi{" "}
      <a href="/tools/fasting-timer">oruç zamanlayıcı</a> ile takip
      edin. Pencere için kalori hedefinizi{" "}
      <a href="/tools/calorie-calculator">kalori hesaplayıcı</a> ile
      belirleyin (IF hala TDEE matematiğini takip eder) ve su alımınızı{" "}
      <a href="/tools/water-intake-calculator">su alımı hesaplayıcı</a>{" "}
      ile izleyin çünkü uygun hidrasyon, oruç sırasında iyi hissetmek
      için en büyük tek kaldıraçtır.
    </p>
  </>
);