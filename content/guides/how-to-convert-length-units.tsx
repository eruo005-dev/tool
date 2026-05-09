import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Uzunluk dönüşümleri insanların zorlanmasına neden olur çünkü metrik sistem ondalık, emperyal sistem ise ondalık değildir&mdash;bir fitte on iki inç, bir yardada üç fit, bir milde 1.760 yarda ve arazi ölçümlerinde hâlâ karşımıza çıkan furlong ve chain gibi birkaç eski birim vardır. Dönüşüm katsayısını bir ondalık basamak yanlış almak utanç verici derecede yaygındır: 1 metre yaklaşık 3,28 fittir, ancak ezberlenen 3,3 sayılar büyüdükçe sapar. Bu kılavuz, milimetreden kilometreye metrik merdiveni, inçten mile emperyal merdiveni, metre ile yarda arasındaki tam dönüşümü (tanım gereği), fit ile metre, mil ile kilometre arasında ne zaman hangisinin kullanılacağını, mühendislik ile günlük kullanım için hassasiyet seçimlerini ve sektörünüzün hangi birimi talep ettiğine bağlı kalmanın tarihsel ve teknik nedenlerini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Metrik merdiven</h2>
    <p>
      Metre, SI temel birimidir. Diğer tüm metrik uzunluklar, onun on katıdır:
    </p>
    <pre>{`1 km   = 1.000 m
1 m    = 100 cm = 1.000 mm
1 cm   = 10 mm
1 mm   = 1.000 µm (mikrometre)
1 µm   = 1.000 nm (nanometre)

1 m    = 10 dm   (desimetre, nadiren kullanılır)
1 m    = 1.000.000 µm
1 m    = 1.000.000.000 nm`}</pre>
    <p>
      Mühendislik çizimleri genellikle boyutları milimetre cinsinden verir; mimari çizimler metre cinsinden; şehir mesafeleri kilometre cinsinden. Bilimsel çalışmalar, sayıları insan ölçeğine uygun hale getiren on katını kullanır.
    </p>

    <h2>Emperyal merdiven</h2>
    <pre>{`1 fit (ft) = 12 inç (in)
1 yarda (yd) = 3 fit = 36 inç
1 mil (mi) = 1.760 yarda = 5.280 fit = 63.360 inç

Daha az yaygın:
1 chain     = 22 yarda = 66 fit   (haritacılık)
1 furlong   = 10 chain = 220 yarda
8 furlong   = 1 mil`}</pre>
    <p>
      ABD ve Birleşik Krallık, bazı emperyal birimler için biraz farklı tanımlar kullanır, ancak çoğu pratik amaç için eşleşirler. 1959 tarihli uluslararası yarda ve pound anlaşması, 1 yardayı tam olarak 0,9144 metre olarak sabitlemiştir ve bu, tüm türetilmiş dönüşümleri kesin hale getirir.
    </p>

    <h2>Metrik &harr; emperyal: anahtar sayılar</h2>
    <pre>{`1 inç   = 2,54 cm           (tam)
1 fit   = 30,48 cm           (tam)
1 yarda = 0,9144 m           (tam)
1 mil   = 1.609,344 m        (tam)
1 cm     ≈ 0,3937 inç
1 m      ≈ 3,2808 fit ≈ 1,0936 yarda
1 km     ≈ 0,6214 mil

Akılda kalıcı yaklaşımlar:
  inç → cm: 2,5 ile çarp (%2 hata payı)
  m → fit: 3,28 ile çarp
  km → mil: 0,62 ile çarp (veya 1,6'ya böl)
  mil → km: 1,6 ile çarp`}</pre>

    <h2>Her birimin standart olduğu durumlar</h2>
    <p>
      <strong>Milimetre:</strong> işleme, elektronik, hassas imalat, mimari detaylar. <strong>Santimetre:</strong> tekstil, ABD dışında insan vücudu ölçüleri, kırtasiye. <strong>Metre:</strong> oda boyutları, bina yükseklikleri, atletizm sahaları, bilimsel deneyler. <strong>Kilometre:</strong> yol mesafeleri, koşu etkinlikleri, coğrafya. <strong>İnç:</strong> ABD tüketici ürünleri, ekranlar, yağmur ölçerler, borular. <strong>Fit:</strong> ABD inşaatı, bina yükseklikleri, havacılık irtifaları. <strong>Yarda:</strong> ABD kumaşı, futbol, golf. <strong>Mil:</strong> ABD yol mesafeleri, koşu etkinlikleri.
    </p>

    <h2>Hassasiyet ve yuvarlama</h2>
    <p>
      6 fit boyundaki bir kişi 1,83 metredir. Bu, bir ehliyet için yeterli hassasiyettir. 0,25 inç deliğe sahip bir makine parçası 6,35 mm'dir&mdash;ve 6 mm'ye yuvarlarsanız, cıvata sığmaz. Hassasiyeti bağlama göre ayarlayın. Mühendislik için tam çarpanı kullanın (2,54, 0,9144, 1,609344). Günlük konuşma için yuvarlanmış çarpanlar yeterlidir.
    </p>

    <h2>Anlamlı rakamlar</h2>
    <p>
      En yakın inçe kadar hassas bir mezura ile 10 fit ölçerseniz, bu dört anlamlı rakamdır, altı değil. Metreye dönüştürmek 3,048 m verir; bu, orijinal hassasiyetinize bağlı olarak 3,05 m veya 3,1 m olarak rapor edilmelidir. 3,048000 m yazmak, ölçümünüzün hiç sahip olmadığı bir hassasiyeti varmış gibi gösterir.
    </p>

    <h2>Havacılık fit kullanır</h2>
    <p>
      Uçak irtifaları dünya çapında, ülkenin tercih ettiği birim sisteminden bağımsız olarak fit cinsinden rapor edilir&mdash;metrik atılımdan önce gelen bir havacılık standardizasyon tuhaflığı. Uçuş seviyeleri (FL), irtifayı 100'e böler: FL350 = 35.000 fit. Pist uzunlukları da benzer şekilde fit cinsindendir. Birkaç ülke (Rusya, Çin) metre kullanır ve bu, pilotların sürekli zihinsel dönüşüm yapmasını gerektirir.
    </p>

    <h2>Deniz mili</h2>
    <p>
      1 deniz mili = 1.852 metre = 1,15078 kara mili. Bir meridyen boyunca bir yay dakikası olarak tanımlanır. Gemi hızı knot (saatte deniz mili) cinsinden ölçülür. Havacılık da mesafeler için deniz mili ve hava hızı için knot kullanır. Bunları kara mili ile karıştırmayın&mdash;denizde %15'lik bir hata sizi yanlış yere götürür.
    </p>

    <h2>Astronomik birimler ve ışık yılı</h2>
    <p>
      Güneş sistemi içindeki mesafeler için gökbilimciler astronomik birimi (AU) kullanır: 149.597.870,7 km, ortalama Dünya-Güneş mesafesi. Yıldızlar arasında, parsek (3,26 ışık yılı = 30,857 trilyon km) ve ışık yılı (9,461 trilyon km) devreye girer. Bunlar günlük dönüşümle ilgili değildir ancak bilim gazeteciliğinde bilinmesi gerekecek kadar sık karşımıza çıkar.
    </p>

    <h2>Kumaş ve dikiş</h2>
    <p>
      ABD'de kumaş yarda ile satılır; dünyanın geri kalanının çoğunda metre ile. 1 yarda = 0,9144 m, yani 10 yarda kumaş 9,14 metredir. Kabaca tahmin için, yarda ve metre birbirine %10'dan daha yakındır&mdash;gündelik konuşmada "yarda" ve "metre" birbirinin yerine kullanılabilecek kadar yakındır, ancak dikiş kalıpları affetmez.
    </p>

    <h2>Koşu mesafeleri</h2>
    <pre>{`5K     = 5.000 m = 3,107 mil
10K    = 10.000 m = 6,214 mil
Yarı maraton = 21,0975 km = 13,1094 mil
Maraton = 42,195 km = 26,2188 mil
Mil    = 1,609 km`}</pre>
    <p>
      Pist etkinlikleri metrik mesafeler kullanır (100 m, 400 m, 1.500 m), ancak ABD yol yarışları metrik (5K, 10K) ve emperyal (mil, maraton) karışımıdır. Maraton mesafesi IAAF tarafından tam olarak 42,195 km olarak sabitlenmiştir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Dönüşüm katsayısını ters kullanmak.</strong> Çarpmanız gerekirken 2,54'e bölerseniz (veya tam tersi), sayınız ters yöne gider. Mantık kontrolü: bir metre bir fitten daha büyüktür, bu nedenle fit cinsinden bir sayı, aynı uzunluğun metre cinsinden değerinden daha büyük olmalıdır.
    </p>
    <p>
      <strong>2,5'i tam olarak kullanmak.</strong> İnçten santimetreye çarpan 2,54'tür, 2,5 değil. %2'lik hata kumaş için önemli değildir ancak işleme toleranslarını bozar.
    </p>
    <p>
      <strong>Kara mili ile deniz milini karıştırmak.</strong> 1 nm = 1,15 kara mili. İkisini karıştıran navigasyon hesaplamaları, sizi kaybettirecek %15'lik hatalar üretir.
    </p>
    <p>
      <strong>Anlamlı rakamları yuvarlamak.</strong> Bir mildeki 5.280 fit tamdır. Zihinsel aritmetik için 5.000 kullanırsanız, cevabınız %5'ten fazla sapar.
    </p>
    <p>
      <strong>ABD ve Birleşik Krallık arasında birim adlarının anlam değiştirdiğini unutmak.</strong> Bir Birleşik Krallık mili aynıdır. Bir Birleşik Krallık pinti, bir ABD pinti değildir. Uzunluk için, emperyal-ABD geleneksel ayrımı çoğunlukla görünmezdir; hacim için ise can sıkıcıdır.
    </p>
    <p>
      <strong>Kare veya kübik birimleri doğrusal çarpanlarla dönüştürmek.</strong> 1 m = 3,28 ft, ancak 1 m² = 10,76 ft² (3,28 değil). Doğrusal çarpanın karesini almak, dönüşümün karesini alır. Bu, alan dönüşümü tarafından ele alınan ayrı bir sorundur, ancak sistemler arasında ölçekleme yaparken hata yaygındır.
    </p>
    <p>
      <strong>Bir hesaplamada birimleri karıştırmak.</strong> Fit cinsinden bir uzunluktan inç cinsinden bir uzunluğu çıkarmak için her ikisinin de önce aynı birime dönüştürülmesi gerekir. Sütun başlıklarının görünmediği elektronik tablolarda birim hataları hızla birikir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Kafanızda 2,54 ile çarpmayı bırakın ve tüm metrik ve emperyal çiftler için{" "}
      <a href="/tools/length-converter">uzunluk dönüştürücümüzü</a> kullanın. İki boyuta ölçeklendirmeniz gerektiğinde <a href="/tools/area-converter">alan dönüştürücü</a> ile ve aynı ölçüm sorununun üç boyutlu uzantıları için{" "}
      <a href="/tools/volume-converter">hacim dönüştürücü</a> ile eşleştirin.
    </p>
  </>
);