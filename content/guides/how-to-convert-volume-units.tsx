import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Hacim, birim karışıklığının pahalıya patladığı alandır çünkü ABD ve Birleşik Krallık galonları farklıdır
      (ABD galonu = 3,785 L, Birleşik Krallık galonu = 4,546 L) ve hiçbiri litre değildir, ayrıca mutfak
      ölçüleri, ağırlık onsuyla aynı olmayan sıvı onslarına ayrılır.
      Bir İngiliz tarifini Amerikan mutfağında yarıya indiren biri, kurabiyelerin neden yanlış çıktığını fark etmeden
      malzeme miktarlarında kolayca %20 sapma yaşayabilir. Nakliye hacimleri
      fit küp ve metreküp kullanır ve bu da doğrusal dönüşüm faktörlerinin küpünü almayı gerektirir. ABD mutfağındaki
      sıvı ve kuru ölçüler başka bir katman ekler: kuru bardak ve sıvı bardak, çoğu kişi bunları birbirinin yerine kullansa da
      referans standartları biraz farklıdır.
      Bu kılavuz, metrik hacmi, ABD ve Birleşik Krallık emperyal hacmini, mutfak ölçülerini, ABD
      ve Birleşik Krallık galonlarını, sıvı ve kuru ayrımlarını ve nakliye ve inşaatta karşılaşılan
      kübik hacim hesaplamalarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Metrik hacim</h2>
    <pre>{`1 metreküp (m³) = 1.000 litre (L) = 1.000.000 mL = 1.000.000 cm³
1 litre (L)        = 1.000 mL = 1.000 cm³ = 1 dm³
1 mL               = 1 cm³
1 kL (kilolitre)   = 1.000 L = 1 m³`}</pre>
    <p>
      Bir litre, tam olarak bir desimetreküp (her kenarı 10 cm) olarak tanımlanır. Bir mililitre
      tam olarak bir santimetreküpe eşittir&mdash;bu eşdeğerlik, tıbbi dozaj ve laboratuvar
      çalışmalarında cc ve mL'nin birbirinin yerine kullanılmasının nedenidir. 4&thinsp;&deg;C'deki su için
      1 mL tam olarak 1 g ağırlığındadır, bu da suyu kütle ve hacim arasında zihinsel bir kalibrasyon noktası yapar.
    </p>

    <h2>ABD emperyal hacmi</h2>
    <pre>{`1 ABD galonu (gal)   = 4 quart (qt) = 8 pint (pt) = 16 bardak = 128 fl oz
1 quart             = 2 pint = 4 bardak = 32 fl oz
1 pint              = 2 bardak = 16 fl oz
1 bardak            = 8 fl oz = 16 yemek kaşığı = 48 çay kaşığı
1 sıvı ons (fl oz)  = 2 yemek kaşığı = 6 çay kaşığı
1 yemek kaşığı (yemek kaşığı) = 3 çay kaşığı (çay kaşığı) = 0,5 fl oz

Tam: 1 ABD galonu = 3,785411784 L`}</pre>

    <h2>Birleşik Krallık emperyal hacmi</h2>
    <pre>{`1 Birleşik Krallık galonu = 4 Birleşik Krallık quart = 8 Birleşik Krallık pint = 160 Birleşik Krallık fl oz
1 Birleşik Krallık pint   = 20 Birleşik Krallık fl oz   (16 değil!)
1 Birleşik Krallık fl oz  = 28,4131 mL    (ABD'deki gibi 29,5735 değil)

Tam: 1 Birleşik Krallık galonu = 4,54609 L

Galonlar: ABD 3,785 L vs Birleşik Krallık 4,546 L — %20 farklı
Pintler:   ABD 473 mL vs Birleşik Krallık 568 mL — %20 farklı`}</pre>
    <p>
      ABD pinti 16 sıvı ons; Birleşik Krallık pinti 20 sıvı ons. ABD sıvı onsu ve
      Birleşik Krallık sıvı onsu da boyut olarak biraz farklıdır. Bira, şarap ve ev tarifleri için
      %20'lik bir fark çok büyüktür. Bir tarifin veya bir pub'ın ABD mi yoksa Birleşik Krallık mı
      ölçüleri kullandığını her zaman kontrol edin.
    </p>

    <h2>Metrik &harr; ABD emperyal</h2>
    <pre>{`1 ABD galonu = 3,7854 L
1 L         = 0,2642 ABD galonu
1 ABD qt    = 0,9464 L     (litreye yakın!)
1 ABD bardağı = 236,6 mL
1 ABD fl oz = 29,5735 mL
1 yemek kaşığı = 14,787 mL
1 çay kaşığı  = 4,929 mL     (genellikle 5 mL'ye yuvarlanır)

Hatırlanması kolay:
  1 quart ≈ 1 litre (%5 sapma)
  1 bardak ≈ 240 mL (%1,5 sapma)
  1 yemek kaşığı ≈ 15 mL
  1 çay kaşığı ≈ 5 mL`}</pre>

    <h2>Sıvı ons vs ağırlık onsu</h2>
    <p>
      Bir sıvı ons hacmi ölçer; bir ağırlık onsu kütleyi ölçer. Su için 1 fl oz yaklaşık
      1 oz ağırlığındadır (sistem bunun etrafında tasarlanmıştır). Daha yoğun sıvılar (bal, şurup) için 1
      fl oz daha ağırdır; daha hafif olanlar (alkol, yağ) için daha hafiftir. Bir besin etiketindeki
      &ldquo;8 ons&rdquo; ağırlıktır; bir ölçü bardağındaki &ldquo;8 ons&rdquo; hacimdir. Bunlar
      sayısal olarak yalnızca su için çakışır.
    </p>

    <h2>Kuru ve sıvı ölçüleri (ABD mutfağı)</h2>
    <p>
      ABD mutfağında iki bardak standardı vardır. <strong>Sıvı bardağı</strong> (8 fl oz = 237 mL)
      dökmek için ağızlı olarak tasarlanmıştır. <strong>Kuru bardak</strong> (hacim olarak da ~237 mL
      ancak &ldquo;üstünü düzleme&rdquo; ölçüsüyle tanımlanır) un ve şeker için kullanılır. Pratikte
      hacimler eşdeğerdir; şekil farklıdır, böylece kuru malzemeler bir bıçakla düzlenebilir. Bazı eski
      referanslar 231 ve 237 mL arasında bir ayrımdan bahseder, ancak modern kullanım
      bunları aynı 237 mL olarak kabul eder.
    </p>

    <h2>Kübik hacim</h2>
    <p>
      3B hacimler (nakliye, inşaat, tank boyutları) için doğrusal dönüşüm faktörünün küpünü almayı
      unutmayın.
    </p>
    <pre>{`1 ft³     = 0,02832 m³
1 m³      = 35,315 ft³
1 yd³     = 27 ft³ = 0,7646 m³

2 ft × 3 ft × 4 ft boyutlarındaki bir kutu = 24 ft³ = 0,68 m³
24 × 0,3048 = 7,3 m³ değil (35 kat hata)`}</pre>

    <h2>Mutfak dönüşüm tablosu</h2>
    <pre>{`1 çay kaşığı = 5 mL          (yaklaşık)
1 yemek kaşığı = 15 mL = 3 çay kaşığı
1/4 bardak = 60 mL = 4 yemek kaşığı
1/3 bardak = 80 mL
1/2 bardak = 120 mL
1 bardak   = 240 mL
2 bardak   = 480 mL (yaklaşık 1 pint)
4 bardak   = 950 mL (yaklaşık 1 quart ≈ 1 L)
1 galon    = 3,8 L`}</pre>

    <h2>Nakliye boyutları</h2>
    <p>
      Nakliye şirketleri hacim için fit küp veya metreküp kullanır, bazen boyutsal ağırlık (hacim tabanlı fiyatlandırma) olarak faturalandırılır. 1 m&sup3;'lük bir konteyner yaklaşık 35,3 ft&sup3; alır.
      20 metrelik bir intermodal nakliye konteyneri yaklaşık 33 m&sup3; kargo alır. Navlun teklifleri
      genellikle aynı birimde uzunluk, genişlik, yükseklik gerektirir; çarpmadan önce dönüştürün.
    </p>

    <h2>Yakıt ve kimyasallar</h2>
    <p>
      Benzin ABD'de ABD galonuyla, neredeyse her yerde litreyle satılır. Jet
      yakıtı, havaalanına bağlı olarak ABD galonu, İmparatorluk galonu ve litre cinsinden ve bazen
      uçuş planlaması için ağırlık (pound veya kilogram) cinsinden ölçülür. Endüstriyel kimyasallar
      genellikle 55 ABD galonluk varillerde (208 L) veya 200 litrelik varillerde (53 ABD galonu) gelir&mdash;görünüşleri benzer olmasına rağmen
      farklı kaplar.
    </p>

    <h2>Tıbbi dozaj</h2>
    <p>
      Tıbbi bağlamlarda mL ve cc birbirinin yerine kullanılır (tanım gereği aynıdırlar).
      Damlalar (gtt) kabaca 0,05 mL'dir, bu nedenle 20 damla &asymp; 1 mL'dir, ancak bu damlalık
      tasarımına göre değişir. Konsantrasyonu bilmeden asla hacmi ağırlık bazlı bir dozun (mg/kg) yerine koymayın&mdash;bir
      1 mL pediatrik asetaminofen dozu, formülasyona bağlı olarak 100 mg veya 160 mg
      olabilir.
    </p>

    <h2>Sıvı dram ve minim</h2>
    <p>
      Eski farmasötik ve eczacı metinleri <strong>sıvı dram</strong> (1 fl dr =
      1/8 fl oz = 3,7 mL) ve <strong>minim</strong> (1/60 fl dr = 0,062 mL) kullanır. Bunlar
      modern uygulamada geçerliliğini yitirmiştir ancak antika şişelerde ve tarihi
      tariflerde hala görülür.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Bir tarif Birleşik Krallık galonu isterken ABD galonu kullanmak (veya tam tersi).</strong>
      %20'lik fark tarifleri bozar ve yakıt faturalarını şişirir. Ölçümün kaynağını her zaman doğrulayın.
    </p>
    <p>
      <strong>Doğrusal dönüşümü kübik hacme uygulamak.</strong> 1 m = 3,28 ft, ancak 1 m&sup3;
      = 35,3 ft&sup3; (faktörün küpünü alın). Bir hacmin doğrusal dönüşümü ~11 kat
      hatalıdır.
    </p>
    <p>
      <strong>Sıvı onsu ile ağırlık onsunu karıştırmak.</strong> Bunlar sayısal olarak
      yalnızca su için eşittir. Bal, yağ veya un için ağırlık ve hacim onsları farklılaşır.
    </p>
    <p>
      <strong>ABD ve Birleşik Krallık pintlerini karıştırmak.</strong> Bir ABD pinti 473 mL; bir Birleşik Krallık pinti 568 mL'dir.
      Londra'da bir pint sipariş edin, New York'takinden daha fazla bira alırsınız.
    </p>
    <p>
      <strong>Pişirme hassasiyeti için hacim kullanmak.</strong> Bir bardak un, kepçe tekniğine bağlı olarak 110 g ile
      150 g arasında değişir. Ağırlık ölçümleri tekrarlanabilir; hacim
      değildir.
    </p>
    <p>
      <strong>Yemek kaşığı ve çay kaşığının evrensel olmadığını unutmak.</strong> Avustralya
      yemek kaşıkları 20 mL'dir (15 değil); Kanada ve Birleşik Krallık yemek kaşıkları 15 mL'dir. Avustralya'dan
      tarifler ayarlama gerektirir.
    </p>
    <p>
      <strong>Yakıt tüketimi dönüşümünü yanlış okumak.</strong> ABD MPG ve Birleşik Krallık MPG, galonlar farklı olduğu için farklıdır.
      30 MPG (ABD), 36 MPG (Birleşik Krallık) = 7,84 L/100km'dir. Avrupa ve Kuzey
      Amerika yakıt ekonomisi rakamları, dönüştürülmeden doğrudan karşılaştırılamaz.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Bir tarifin ABD mi yoksa Birleşik Krallık mı olduğunu tahmin etmeyi bırakın; değerinizi{" "}
      <a href="/tools/volume-converter">hacim dönüştürücümüze</a> girin ve tüm standart birimleri bir kerede alın.
      Ağırlık ve hacmi birlikte içeren tarife özel dönüşümler için <a href="/tools/cooking-converter">mutfak dönüştürücüyle</a> ve
      bardakla un ve gramla un sorunu için <a href="/tools/weight-converter">ağırlık dönüştürücüyle</a> eşleştirin.
    </p>
  </>
);