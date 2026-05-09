import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bazal metabolizma hızı, vücudunuzun kesinlikle hiçbir şey yapmadığınızda
      yaktığı miktardır &mdash; yatakta uzanırken, açken, uyanıkken, rahat bir
      <a href="/learn/temperature-ai">sıcaklıkta</a>. Önemsediğiniz diğer tüm kalori
      sayılarının altındaki tabandır. Çoğu kişi BMH'yi idame kalorileriyle
      karıştırır; ne kadar aktif olduğunuza bağlı olarak %30&ndash;70 oranında
      farklılık gösterirler. BMH'yi anlamak önemlidir çünkü denklemin uzun
      süreli açıklara, yaşlanmaya ve kas kütlesine yanıt veren tek kısmıdır.
      Bu rehber, tanımı, onu tahmin eden formülleri, sayıyı gerçekten neyin
      değiştirdiğini, metabolik adaptasyon kavramını ve en iyi BMH formülünün
      bile neden yalnızca bir tahmin olduğunu kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>BMH gerçekte neyi ölçer</h2>
    <p>
      BMH, temel fizyolojik süreçlerin enerji maliyetidir: kalp atışı,
      akciğer solunumu, böbrek filtrasyonu, karaciğer metabolizması, beyin
      çalışması, hücrelerin kendini onarması. Laboratuvarda ölçülür: 12 saat
      aç, hareketsiz uzanırken, nötr sıcaklıkta, uyanıkken.
    </p>
    <p>
      <strong><a href="/learn/resting-metabolic-rate">DMH</a></strong> (dinlenme metabolik hızı), çoğu kliniğin
      gerçekte ölçtüğü daha az katı versiyondur &mdash; hareketsiz uzanmak
      ancak mutlaka aç olmak gerekmez. DMH tipik olarak BMH'den %5&ndash;10
      daha yüksektir. Popüler kullanımda terimler birbirinin yerine
      kullanılır.
    </p>

    <h2>Mifflin-St Jeor (güncel standart)</h2>
    <p>
      1990'da yayımlanmış, modern popülasyonlar için en iyi doğrulanmış
      formül. Belirli bir nedeniniz yoksa bunu kullanın.
    </p>
    <pre>{`Erkek:    BMH = 10*kilo(kg) + 6.25*boy(cm) - 5*yaş + 5
Kadın:    BMH = 10*kilo(kg) + 6.25*boy(cm) - 5*yaş - 161

30 yaşında kadın, 65kg, 165cm:
BMH = 650 + 1031.25 - 150 - 161 = 1,370 kcal/gün`}</pre>
    <p>
      Normal kilolu kişilerin %82'si için ~%10 doğruluk payıyla geçerlidir.
      Yaş ve vücut kompozisyonunun uç noktalarında doğruluk düşer.
    </p>

    <h2>Harris-Benedict (1984 revize)</h2>
    <p>
      Daha eski standart, hâlâ ders kitaplarında yaygın. Modern (daha ağır)
      popülasyonlar için hafif fazla tahmin eder.
    </p>
    <pre>{`Erkek:   88.362 + 13.397*kilo(kg) + 4.799*boy(cm) - 5.677*yaş
Kadın: 447.593 + 9.247*kilo(kg) + 3.098*boy(cm) - 4.330*yaş`}</pre>
    <p>
      Aynı kişi için Mifflin-St Jeor'dan ~100 kcal daha yüksek değerler verir.
      Yalnızca bunu kullanan mevcut bir çalışma veya cihazla eşleşiyorsanız
      kullanın.
    </p>

    <h2>Katch-McArdle (vücut kompozisyonu bilincinde)</h2>
    <p>
      Vücut yağ yüzdenizi biliyorsanız, bu formül yağsız vücut kütlesini
      kullanır ve yağsız kütlesi ortalamadan sapan zayıf veya kaslı kişiler
      için daha doğrudur.
    </p>
    <pre>{`YKK = kilo * (1 - vücut_yağ_oranı)
BMH = 370 + 21.6 * YKK(kg)

Örnek: 70kg, %12 vücut yağı
YKK = 70 * 0.88 = 61.6 kg
BMH = 370 + 21.6 * 61.6 = 1,700 kcal`}</pre>
    <p>
      Vücut geliştiriciler ve sporcular için Katch-McArdle, Mifflin'den
      100&ndash;200 kcal daha iyidir. Daha yüksek vücut yağına sahip hareketsiz
      kişiler için hafif düşük tahmin eder.
    </p>

    <h2>BMH'nizi gerçekte ne belirler</h2>
    <p>
      Dört faktör varyansın çoğunu açıklar:
    </p>
    <p>
      <strong>Yağsız kütle.</strong> Kas, dinlenme halinde ~13 kcal/kg/gün
      yakar; yağ ~4.5 yakar. Aynı kiloda ancak farklı kompozisyondaki iki
      kişinin BMH'si 150+ kcal farklılık gösterebilir.
    </p>
    <p>
      <strong>Yaş.</strong> BMH, 30'dan sonra her on yılda ~%2 düşer. Kısmen
      kas kaybı, kısmen metabolik verimlilik.
    </p>
    <p>
      <strong>Cinsiyet.</strong> Erkekler ortalama olarak daha fazla kasa
      sahiptir, bu nedenle aynı kiloda daha yüksek BMH.
    </p>
    <p>
      <strong>Genetik.</strong> Farklı evlerde büyütülen tek yumurta
      ikizlerinin BMH'leri çok benzerdir. Bir aralık miras alırsınız.
    </p>

    <h2>İnsanların söylediği kadar önemli olmayan şeyler</h2>
    <p>
      <strong>Öğün sıklığı.</strong> Altı küçük öğün vs üç büyük öğün neredeyse
      hiç BMH farkı yaratmaz. Termik etki toplam alımla ölçeklenir, öğün
      sayısıyla değil.
    </p>
    <p>
      <strong>Baharatlı yiyecek / yeşil çay / soğuk duş.</strong> Gerçek
      etkiler mevcuttur ancak 20&ndash;80 kcal/gün'e yuvarlanır. Hayatınızı
      buna göre şekillendirmeye değmez.
    </p>
    <p>
      <strong>Tiroid (normal aralıkta).</strong> Tiroidin subklinik
      varyasyonu BMH'yi anlamlı şekilde değiştirmez. Gerçek hipo/hiper-tiroidi
      değiştirir; şüpheleniyorsanız test yaptırın.
    </p>

    <h2>Metabolik adaptasyon</h2>
    <p>
      Çoğu BMH hesaplayıcısının göz ardı ettiği en önemli kavram: BMH sabit
      değildir. Uzun süreli kalori kısıtlaması, BMH'yi yalnızca kilo kaybının
      hesaba kattığının ötesinde düşürür.
    </p>
    <pre>{`12 hafta 500-kcal açık:
Kilo kaybından beklenen BMH düşüşü:     ~80 kcal
Gerçek BMH düşüşü (adaptasyon dahil):  ~160-250 kcal`}</pre>
    <p>
      Bu nedenle platolar oluşur ve &ldquo;diyet molaları&rdquo; yardımcı
      olur. 1&ndash;2 haftalık idameye dönüş, adaptasyonu kısmen tersine
      çevirir. Biggest Loser takip çalışması en ünlü örnektir &mdash;
      yarışmacıların BMH'si yıllar sonra bile tahmin edilenin 400+ kcal
      altındaydı.
    </p>

    <h2>BMH ve yaşlanma</h2>
    <p>
      Yaygın iddia, metabolizmanın 30 veya 40'tan sonra &ldquo;yavaşladığı&rdquo;
      yönündedir. 6,400 kişiyi izleyen 2021 tarihli bir Science makalesi
      gerçeğin daha az dramatik olduğunu gösterdi:
    </p>
    <ul>
      <li>0&ndash;12 ay: BMH fırlar, yetişkin oranının +%50'si</li>
      <li>1&ndash;20: yetişkin taban çizgisine kademeli düşüş</li>
      <li>20&ndash;60: vücut kompozisyonuna göre ayarlandığında esasen sabit</li>
      <li>60+: gerçek düşüş başlar, yılda yaklaşık %0.7</li>
    </ul>
    <p>
      30 ile 50 arasında &ldquo;metabolizma yavaşladı&rdquo; denilen şey
      aslında aktivite ve kas kaybıdır, BMH değişimi değil.
    </p>

    <h2>BMH'yi gerçekten nasıl ölçersiniz</h2>
    <p>
      Doğruluk önemliyse (klinik, araştırma), altın standartlar şunlardır:
    </p>
    <p>
      <strong>Dolaylı kalorimetri.</strong> Bir maske, 20&ndash;30 dakika
      boyunca O2 alımını ve CO2 çıkışını ölçer; oran ve hacim BMH'yi verir.
      Bazı spor salonlarında ve spor-hekimliği kliniklerinde 100&ndash;200
      $ karşılığında mevcuttur.
    </p>
    <p>
      <strong>Çift etiketli su.</strong> Araştırma altın standardı. Kararlı
      izotoplar içeren su içersiniz, 10 gün boyunca idrar örnekleri
      verirsiniz; BMH ve THH, eliminasyon oranlarından hesaplanır. Pahalıdır,
      çalışmalarda kullanılır.
    </p>
    <p>
      Fitness saatleri ve akıllı tartılar, BMH'yi perde arkasındaki
      formüllerle tahmin eder; çıktılarına ölçülmüş gibi davranmayın.
    </p>

    <h2>Herhangi bir BMH formülünün sınırlamaları</h2>
    <p>
      <strong>Popülasyon ortalamaları.</strong> Formüller, binlerce kişiden
      alınan regresyonlardır. Ortalamadan bireysel sapma ~%10 standart
      sapmadır.
    </p>
    <p>
      <strong>Yakın geçmişi yakalamaz.</strong> İki haftalık oruç veya aşırı
      beslenme BMH'yi geçici olarak değiştirir; formül bunu bilmez.
    </p>
    <p>
      <strong>Standart vücut kompozisyonu varsayar.</strong> Vücut
      geliştiriciler ve maratoncular modeli çarpıtır; Katch-McArdle kullanın.
    </p>
    <p>
      <strong>Geri bildirim döngüsü yok.</strong> Bir formül, sizinkinin uzun
      bir kesimden adapte olup olmadığını bilemez. Bu sizi tanımlıyorsa
      100&ndash;200 kcal ayarlayın.
    </p>

    <h2>Diyet yapmıyor olsanız bile BMH neden önemlidir</h2>
    <p>
      Yakıt için tabanı belirler. Yiyecek alımıyla BMH'nin altına düşmek, herhangi
      bir aktiviteden önce bile açıkta olduğunuz anlamına gelir. Haftalar
      içinde bu, kas kaybına ve metabolik adaptasyona yol açar. Sıkı bir
      kesimde bile, en az BMH'nizi yemek olağan reçetedir.
    </p>
    <p>
      BMH'yi bilmek, yiyecek ambalajlarını yorumlamanızı da sağlar. 400
      kalorilik bir öğün, küçük ve hareketsiz bir kişi için yarım gün, büyük
      ve aktif bir kişi için günün beşte biridir. &ldquo;Kalori yoğun&rdquo;
      mutlak değil, BMH'ye göredir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>BMH'yi idame ile karıştırmak.</strong> İdame = BMH &times;
      aktivite faktörü. BMH tek başına komadayken yakacağınız miktardır.
    </p>
    <p>
      <strong>2026'da Harris-Benedict kullanmak.</strong> Mifflin-St Jeor
      modern popülasyonlar için daha doğrudur. Değiştirin.
    </p>
    <p>
      <strong>Vücut kompozisyonunu göz ardı etmek.</strong> Standart formülü
      kullanan kaslı bir kişi, yüzlerce kalori eksik tahmin ediyordur.
    </p>
    <p>
      <strong>Her gün yeniden hesaplamak.</strong> BMH'niz günden güne
      değişmez. Anlamlı kilo veya kompozisyon değişikliklerinde yeniden
      hesaplayın.
    </p>
    <p>
      <strong>Fitness saati BMH'sine güvenmek.</strong> Perde arkasında bir
      formül kullanırlar &mdash; ölçülmüş gibi davranmayın.
    </p>
    <p>
      <strong>Kesimde BMH'nin altında yemek.</strong> Adaptasyonu
      şiddetlendirir, performansı öldürür, kas yakar. Kural olarak alım &gt;=
      BMH tutun.
    </p>
    <p>
      <strong>Uzun bir kesimden sonra adaptasyonu göz ardı etmek.</strong>
      Aylardır diyet yapıyorsanız, gerçek BMH'niz hesaplayıcının söylediğinden
      daha düşüktür.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Verilerinizi{" "}
      <a href="/tools/bmr-calculator">BMH hesaplayıcısına</a> girerek bir
      Mifflin-St Jeor sayısı alın.{" "}
      <a href="/tools/calorie-calculator">Kalori hesaplayıcısında</a> aktivite
      faktörünüzle çarparak idame kalorilerini elde edin ve popülasyon-ortalama
      formülü yerine gerçek yağsız kütle kullanarak Katch-McArdle ile
      iyileştirmek istediğinizde{" "}
      <a href="/tools/body-fat-calculator">vücut yağ hesaplayıcısını</a> kullanın.
    </p>
  </>
);