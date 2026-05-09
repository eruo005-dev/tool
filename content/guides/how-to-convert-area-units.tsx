import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Alan dönüşümü sinsi bir iştir. Herkes 1 metrenin 3,28 feet olduğunu bilir, ancak çok fazla kişi
      1 metrekarenin 3,28 feet kare olduğunu varsayar. Oysa gerçekte 10,76 feet karedir,
      çünkü doğrusal dönüşüm faktörünün karesini almanız gerekir. Bu tek hata&mdash;doğrusal
      bir faktörü kareli bir büyüklüğe uygulamak&mdash;her gün emlak ilanlarında, müteahhit
      tahminlerinde ve bahçe hesap makinelerinde karşımıza çıkar. Buna alanın kendine özgü
      birimlerinin (dönüm, hektar, mil kare) hiçbirinin bilinen birimlerin katları olmaması
      eklenince, kafa karışıklığı katlanarak artar. Bu kılavuz; metrik alan basamaklarını,
      dönüm ve mil kare dahil emperyal alan birimlerini, uluslararası arazi standardı olarak
      hektarı, dönüşüm faktörlerinin neden karelerinin alındığını, dikdörtgen ve düzensiz
      şekillerin alanlarının nasıl hesaplanacağını ve her birimin standart olduğu bağlamları
      kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Temel içgörü: doğrusal faktörün karesini alın</h2>
    <p>
      Bir uzunluğu feet'ten metreye çevirirken 0,3048 ile çarparsınız. Bir alanı çevirirken
      ise <code>0,3048<sup>2</sup> = 0,0929</code> ile çarparsınız. Neden? Çünkü alan,
      uzunluk çarpı uzunluktur ve her bir uzunluk dönüşüm faktörünü alır.
    </p>
    <pre>{`1 ft  = 0,3048 m
1 ft² = 0,3048² m² = 0,0929 m²

1 m  = 3,2808 ft
1 m² = 3,2808² ft² = 10,7639 ft²

20 ft × 15 ft'lik bir oda = 300 ft² = 27,87 m²
300 × 0,3048 = 91,4 m² değil (3,28 kat hatalı)`}</pre>

    <h2>Metrik alan birimleri</h2>
    <pre>{`1 km²         = 1.000.000 m² = 100 hektar
1 hektar (ha) = 10.000 m² = 100 m × 100 m'lik kare
1 ar (a)      = 100 m²  (nadiren kullanılır, "hektar" dışında)
1 m²          = 10.000 cm²
1 cm²         = 100 mm²`}</pre>
    <p>
      Hektar, uluslararası alanda arazi için ana birimdir&mdash;çiftlik büyüklükleri, orman
      parselleri, arazi kullanım araştırmaları. Tam olarak 10.000 m&sup2;'dir ve m&sup2;
      (arazi için çok küçük) ile km&sup2; (bireysel parseller için çok büyük) arasında rahatça
      yer alır.
    </p>

    <h2>Emperyal alan birimleri</h2>
    <pre>{`1 mi²        = 640 dönüm
1 dönüm      = 43.560 ft² = 4.840 yd²
1 yd²        = 9 ft²
1 ft²        = 144 in²
1 in²        = 1/144 ft²

Bir dönüm 660 ft × 66 ft'dir (tarihi bir furlong × chain),
kabaca uç bölgeleri hariç bir Amerikan futbolu sahası.`}</pre>

    <h2>Metrik &harr; emperyal</h2>
    <pre>{`1 m²      = 10,7639 ft²
1 ft²     = 0,0929 m²
1 dönüm   = 4.046,86 m² = 0,4047 hektar
1 hektar  = 2,4711 dönüm
1 km²     = 0,3861 mi²
1 mi²     = 2,5900 km²

Hatırlanması kolay:
  hektar ≈ 2,5 dönüm (%1 hata payıyla)
  km² ≈ 0,4 mi² (kaba işler için kabul edilebilir)
  m²'den ft²'ye: 10 ile çarpın (%7 hata payıyla, hızlı tahminler için yeterli)`}</pre>

    <h2>Arazi için dönüm ve hektar</h2>
    <p>
      ABD ve İngiltere'de arazi dönüm ile satılır. Dünyanın geri kalanının çoğu hektar kullanır.
      Bilinmesi gereken dönüşümler: çeyrek dönümlük bir arsa yaklaşık 1.012 m&sup2;'dir. Bir hektar yaklaşık
      2,47 dönümdür. Bir Amerikan futbolu sahası yaklaşık 1,32 dönüm, Avrupa futbol sahası yaklaşık
      0,7 hektardır. Bir mil kare 640 dönümdür ve bu, ABD arazi ölçümünde tarihi
      "bölüm"dür&mdash;Kamu Arazi Ölçüm ızgarası, 160 dönümlük çeyrek bölümlere ayrılmış mil kareler üzerine kuruludur.
    </p>

    <h2>Dikdörtgen alanlar</h2>
    <p>
      Bir dikdörtgen için alan = uzunluk &times; genişlik. Her bir boyutu ayrı ayrı dönüştürün ve
      alanı hedef birimde hesaplayın veya kaynak birimde hesaplayıp kareli faktörü uygulayın.
      İkinci yaklaşım, faktörün karesini almayı unutursanız hataya açıktır.
    </p>
    <pre>{`Oda: 12 ft × 15 ft
ft² cinsinden alan:  12 × 15 = 180 ft²
m² cinsinden alan:   (12 × 0,3048) × (15 × 0,3048) = 3,66 × 4,57 = 16,72 m²
       veya:         180 × 0,0929 = 16,72 m²  ✓`}</pre>

    <h2>Düzensiz alanlar</h2>
    <p>
      Dikdörtgen olmayan şekiller için, bunları dikdörtgenlere ve üçgenlere ayırın veya uygun
      formülü kullanın (daire = &pi;r&sup2;, üçgen = &frac12; taban &times; yükseklik).
      Gerçekten düzensiz arazi parselleri için, haritacılar koordinat geometrisi (ayakkabı bağı
      formülü) veya alanı doğrudan bildiren GPS tabanlı araçlar kullanır.
    </p>

    <h2>Yemek pişirme ve fırınlama: tava boyutları</h2>
    <p>
      9&times;13 inçlik bir tava gerektiren bir tarifin alanı 117 in&sup2; = 754 cm&sup2;'dir. 8&times;8
      kare tava 64 in&sup2; = 413 cm&sup2;'dir. Bir tarifi tava boyutları arasında ölçeklendirirseniz,
      doğrusal orana değil, alan oranına göre ölçeklendirin&mdash;8 inçlik bir yuvarlak tavayı (50 in&sup2;)
      12 inçlik bir yuvarlak tavaya (113 in&sup2;) uyduracak şekilde iki katına çıkarmak aslında 2,26 kat
      ölçeklendirmedir.
    </p>
    <pre>{`8" yuvarlak:   π × 4² = 50,3 in²
9" yuvarlak:   π × 4,5² = 63,6 in²
10" yuvarlak:  π × 5² = 78,5 in²
8" × 8":       64 in²
9" × 13":      117 in²
10" × 15":     150 in²`}</pre>

    <h2>Döşeme, boya ve duvar kağıdı</h2>
    <p>
      Döşeme, feet kare veya metre kare olarak satılır. Boya kaplama alanı genellikle galon başına feet kare
      veya litre başına m&sup2; olarak belirtilir (tipik: ABD galonu başına 350 ft&sup2;, düz duvarlarda tek kat için
      litre başına 10&ndash;12 m&sup2;). Duvar kağıdı için rulolar doğrusal uzunluk ve genişlikle ölçülür;
      alan için çarpın ve fire ve desen eşleştirme için %10&ndash;15 ekleyin.
    </p>

    <h2>Emlak piyasası kuralları</h2>
    <p>
      ABD emlak piyasasında iç alan için yalnızca feet kare kullanılır. Japon emlak piyasasında
      <em>tsubo</em> kullanılır (1 tsubo = 3,306 m&sup2; = 2 tatami hasırı). Hint emlak piyasasında şehirlerde feet kare,
      kırsal alanlarda bigha ve katha kullanılır (bölgesel farklılıklar vardır: bihar bigha'sı
      &asymp; 1.338 m&sup2;, batı bengal bigha'sı &asymp; 1.337 m&sup2;, gujarat bigha'sı &asymp;
      1.618 m&sup2;). Uluslararası alanda arazi satın alırken her zaman birimi teyit edin.
    </p>

    <h2>Harita ölçeği ve alan</h2>
    <p>
      1:24.000'lik bir haritanın doğrusal ölçeği 1:24.000'dir. Alan ölçeği ise
      <code> 1:24.000<sup>2</sup> = 1:576.000.000</code>'dir. Haritadaki bir inç kare,
      yerde 576 milyon inç kare = 4 milyon feet kare &asymp; 92 dönümü temsil eder. Bu nedenle
      bir haritadan dönüm miktarını tahmin etmek dikkat gerektirir.
    </p>

    <h2>Sık yapılan hatalar</h2>
    <p>
      <strong>Alan dönüşümü için doğrusal faktör kullanmak.</strong> Feet kareyi 0,3048 ile çarpmak
      size 3,28 kat hatalı bir sayı verir. Karesini almalısınız:
      0,3048&sup2; = 0,0929.
    </p>
    <p>
      <strong>Hektar ve dönümü karıştırmak.</strong> 1 hektar = 2,47 dönüm. Gündelik kullanımda
      birbirlerinin yerine geçecek kadar yakındırlar, ancak 10 dönümlük bir parsel 10 hektarlık bir parsel
      değildir&mdash;aralarında 15 dönüm fark vardır.
    </p>
    <p>
      <strong>Bir tarifi doğrusal olarak iki katına çıkarmak yerine alana göre iki katına çıkarmamak.</strong> 8 inçlik bir yuvarlak tavayı
      16 inçlik bir yuvarlak tavaya iki katına çıkarmak alanı 2 kat değil, 4 kat artırır. Kekiniz taşar
      veya fırınınız erir.
    </p>
    <p>
      <strong>Boya için birden fazla kat gerektiğini unutmak.</strong> Bir galon, <em>tek kat</em> için
      350 ft&sup2; kaplar. İki kat için iki katına ihtiyacınız vardır. Her zaman kaplama iddialarını
      gerçek dünya koşullarına karşı kontrol edin.
    </p>
    <p>
      <strong>Düzensiz araziyi tek bir dikdörtgen olarak ele almak.</strong> Ölçüm parselleri nadiren
      dört adet 90 derecelik açıya sahiptir. Mülkü, ölçülmüş kenarları olan bir çokgen olarak ele alın ve
      alanı buna göre hesaplayın.
    </p>
    <p>
      <strong>Feet kare ve yarda kareyi karıştırmak.</strong> 1 yd&sup2; = 9 ft&sup2;'dir. Yarda ve feet
      cinsinden döşeme tahminleri 9 kat farklılık gösterir. Satıcının hangi birimi kullandığını her zaman kontrol edin.
    </p>
    <p>
      <strong>Fire faktörünü göz ardı etmek.</strong> Döşeme, fayans veya duvar kağıdı satın alırken
      kesimler, fire ve hatalar için %10&ndash;15 ekleyin. Ham alan hesaplaması minimumdur,
      sipariş miktarı değildir.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Dönüşüm faktörlerinin karesini elle almayı bırakın;{" "}
      <a href="/tools/area-converter">alan dönüştürücümüz</a>, kareli faktör tuzağı olmadan
      m&sup2;, ft&sup2;, dönüm, hektar ve mil kare birimlerini halleder. Tek boyutlu ölçümlerle
      başladığınızda <a href="/tools/length-converter">uzunluk dönüştürücü</a> ile,
      sorun üç boyuta uzandığında ise <a href="/tools/volume-converter">hacim dönüştürücü</a> ile
      birlikte kullanın.
    </p>
  </>
);