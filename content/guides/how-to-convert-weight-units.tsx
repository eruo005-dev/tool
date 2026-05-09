import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Ağırlık dönüşümü, basit bir çarpma işlemi gibi görünmesine rağmen şaşırtıcı miktarda incelik barındırır. Kütle ve ağırlık teknik olarak farklıdır&mdash;ağırlık, yerçekiminin kütleye uyguladığı kuvvettir; kütle ise madde miktarıdır&mdash;ancak günlük kullanımda, yerçekimi yaklaşık olarak sabit olduğunda (yani Dünya'da) bu iki kelime birbirinin yerine kullanılır. Bunun ötesinde, pound iki çeşittir (günlük kullanım için avoirdupois, değerli metaller için troy), ons üç çeşittir (avoirdupois, troy, sıvı) ve grain, mühimmat ve ilaç bağlamlarında karşımıza çıkar. Mutfak terazileri gram kullanır; banyo terazileri ülkeye bağlı olarak pound veya kilogram kullanır; nakliye kilogram veya pound kullanır; mermiler grain kullanır; altın troy ons kullanır. Bu kılavuz, metrik ve emperyal kütle birimlerini, troy ve avoirdupois arasındaki farkı, grain, karat ve her birinin profesyonel standart olduğu alanları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Kütle ve ağırlık</h2>
    <p>
      Bilimsel olarak, <strong>kütle</strong> bir nesnedeki madde miktarıdır ve kilogram cinsinden ölçülür. <strong>Ağırlık</strong> ise yerçekiminin bu kütleye uyguladığı kuvvettir ve newton cinsinden ölçülür. Dünya'da, 1 kg kütle yaklaşık 9.81 N ağırlığındadır. Fizik dersi dışında, insanlar "ağırlık" derken "kütle"yi kastederler&mdash;banyo teraziniz bir kuvvet okur ve dahili olarak dönüştürür. Ay'da, 1 kg kütle yaklaşık 1.6 N ağırlığındadır (teraziniz daha düşük okur), ancak kütle değişmez. Dünya'ya bağlı dönüşümler için bu ayrım neredeyse hiç önemli değildir; havacılık veya Ay bağlamlarında ise kesinlikle önemlidir.
    </p>

    <h2>Metrik basamaklar</h2>
    <pre>{`1 ton (metrik ton) = 1.000 kg = 1.000.000 g
1 kilogram (kg)      = 1.000 g
1 gram (g)           = 1.000 mg (miligram)
1 mg                 = 1.000 µg (mikrogram)

Not: "metrik ton", 1.000 kg olan tondur.
ABD "kısa ton"u 2.000 lb'dir (yaklaşık 907 kg).
Birleşik Krallık "uzun ton"u 2.240 lb'dir (yaklaşık 1.016 kg).`}</pre>

    <h2>Emperyal basamaklar (avoirdupois)</h2>
    <p>
      Avoirdupois, ABD'de market terazileri, vücut ağırlığı, nakliye ve yemek pişirme için kullanılan günlük sistemdir.
    </p>
    <pre>{`1 pound (lb)  = 16 ons (oz)
1 stone       = 14 pound  (BK vücut ağırlığı)
1 kısa ton    = 2.000 lb   (ABD)
1 uzun ton    = 2.240 lb   (BK)
1 ons         = 437,5 grain
1 pound       = 7.000 grain`}</pre>

    <h2>Metrik &harr; emperyal</h2>
    <pre>{`1 kg      = 2,20462 lb
1 lb      = 0,45359 kg  (tam: 0,45359237)
1 oz      = 28,3495 g
1 g       = 0,03527 oz
1 stone   = 6,35 kg

Akılda kalıcı yaklaşımlar:
  kg → lb: 2,2 ile çarpın
  lb → kg: 2,2'ye bölün (veya 0,45 ile çarpın)
  oz → g: 28,35 ile çarpın
  g → oz: 28,35'e bölün`}</pre>
    <p>
      Tam dönüşüm, 1959'da uluslararası anlaşma ile sabitlenmiştir: 1 pound = 0,45359237 kg. Diğer tüm avoirdupois dönüşümleri bundan türetilir.
    </p>

    <h2>Troy ve avoirdupois</h2>
    <p>
      Değerli metaller (altın, gümüş, platin) <strong>troy</strong> birimleriyle tartılır ve bunlar günlük avoirdupois sisteminden farklıdır.
    </p>
    <pre>{`1 troy ons (oz t) = 31,1035 g  (normal onstan daha ağır!)
1 normal ons     = 28,3495 g
1 troy pound     = 12 troy ons = 373,24 g  (normal pounddan daha hafif!)
1 normal pound   = 16 ons = 453,59 g`}</pre>
    <p>
      Bir troy ons, avoirdupois onstan yaklaşık %10 daha ağırdır, ancak bir troy pound, avoirdupois pounddan yaklaşık %18 <em>daha hafiftir</em> çünkü yalnızca 12 (16 değil) troy ons içerir. Bu nedenle, ons başına verilen altın fiyatları farklı bağlamlarda farklı duyulur. Londra Külçe Piyasası her zaman troy onsu ifade eder.
    </p>

    <h2>Grain</h2>
    <p>
      Bir grain, 64,79891 miligramdır ve kabaca tek bir arpa tanesinin kütlesidir. Modern kullanımları: <strong>mühimmat</strong> (mermi ağırlıkları, örn. 55 grain 5,56 mm), <strong>ilaç</strong> (bazı eski ilaç dozları, örn. aspirin tarihsel olarak 5 grain idi) ve <strong>okçuluk</strong> (ok ağırlıkları). 437,5 grain bir avoirdupois ons eder; 480 grain bir troy ons eder.
    </p>

    <h2>Karat ve ayar</h2>
    <p>
      Bir <strong>karat</strong> (değerli taşlar) 200 miligramdır. 1 karatlık bir elmas 0,2 gram ağırlığındadır. Bir <strong>ayar</strong> (altın saflığı) 24 üzerinden bir kesirdir: 24 ayar altın %99,9 saftır, 18 ayar altın %75 saftır. Aynı kelime, tamamen farklı iki anlam. 5 karatlık bir değerli taşı 5 ayar altınla asla karıştırmayın; birincisi boyut, ikincisi saflıktır.
    </p>

    <h2>Yemek pişirme ölçüleri</h2>
    <p>
      ABD tarifleri genellikle katılar için hacim (bardak, yemek kaşığı) kullanır ki bu hassas değildir çünkü un farklı şekillerde sıkışır. Avrupa tarifleri ağırlık (gram) kullanır ki bu tekrarlanabilirdir. Yaygın dönüşümler:
    </p>
    <pre>{`1 bardak çok amaçlı un ≈ 125 g
1 bardak toz şeker  ≈ 200 g
1 bardak tereyağı           = 227 g  (2 çubuk)
1 çubuk tereyağı         = 113 g = 4 oz
1 oz                   = 28,35 g`}</pre>
    <p>
      Ciddi fırıncılar, tutarlılık için dijital teraziler ve ağırlık bazlı tarifler kullanır. Katıların hacim ölçümleri, sıkıştırmaya bağlı olarak %20 oranında değişebilir.
    </p>

    <h2>Nakliye ve kargo</h2>
    <p>
      Nakliyede <strong>brüt ağırlık</strong> (paket artı içindekiler), <strong>net ağırlık</strong> (yalnızca içindekiler) ve <strong>dara ağırlığı</strong> (yalnızca kap) kullanılır. Hava kargo ayrıca, paket boyutuna göre hafifse hacim üzerinden ücretlendiren <strong>hacimsel ağırlık</strong> kullanır. 5 pound ağırlığındaki 30 inçlik bir küp, 50 pound olarak faturalandırılabilir. Hacimsel ağırlık tipik olarak uzunluk &times; genişlik &times; yüksekliğin bir faktöre (ABD içi için 139, uluslararası için 166, taşıyıcıya göre değişir) bölünmesiyle hesaplanır.
    </p>

    <h2>Vücut ağırlığı</h2>
    <p>
      ABD pound kullanır. Birleşik Krallık stone ve pound kullanır ("12 stone 5" = 173 lb). Dünyanın geri kalanının çoğu kilogram kullanır. BMI hesaplamaları tutarlı birimler gerektirir&mdash;BMI = kg / m&sup2; ve emperyal versiyonu farklıdır (lb / in&sup2; &times; 703). BMI hesaplamasında birimleri karıştırmak, gülünç sonuçların yaygın bir kaynağıdır.
    </p>

    <h2>Bilimsel kurallar</h2>
    <p>
      SI kilogram kullanır. Kimya gram ve molar kütleler kullanır. Fizik formüllerde kilogram kullanır ve küçük örnekler için gramı tolere eder. Farmakoloji, ilaç dozları için miligram ve mikrogram kullanır (mcg, mg, g), burada 1000 katlık bir hata, dağıtım felaketidir. Hesaplamalarda birimleri her zaman taşıyın; 1000 katını not etmeden asla bir gramı bir kilograma bölmeyin.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Avoirdupois kastederken troy ons kullanmak.</strong> Bir troy ons 31,1 g, avoirdupois ise 28,35 g'dır. Troy ons başına 2.000 $ olan bir altın fiyatı ile avoirdupois ons başına aynı fiyat %10 farklılık gösterir.
    </p>
    <p>
      <strong>"Ton"un evrensel olduğunu varsaymak.</strong> Metrik ton = 1.000 kg. ABD kısa tonu = 907 kg. BK uzun tonu = 1.016 kg. Nakliye teklifleri genellikle belirtmez ve kargoda %10'luk bir hata pahalıdır.
    </p>
    <p>
      <strong>Karat ve ayarı karıştırmak.</strong> Farklı yazılışlar, farklı anlamlar. 14 ayar altın bir yüzük, altın saflığıdır (%58,3). 14 karatlık bir yüzük, 2,8 gram ağırlığında bir değerli taştır. Kuyumcular her iki bağlamı da kullanır ve uzman olmayanlar bunları ters anlar.
    </p>
    <p>
      <strong>Farmakolojide 1000 kat hata.</strong> mg ve mcg 1.000 kat farklılık gösterir. 500 mg aspirin, 500 mcg aspirin değildir (ikincisi etkisiz olur). Birim karışıklığından kaynaklanan ilaç hataları, hastane hatalarının en çok takip edilen ve en ölümcül sınıflarından biridir.
    </p>
    <p>
      <strong>Unu ölçmek için hacim kullanmak.</strong> Bir "bardak" un, alma tekniğine bağlı olarak 110 g ile 150 g arasında değişir. Tartın.
    </p>
    <p>
      <strong>Yerçekiminin ağırlık-ama-kütle için önemli olduğunu unutmak.</strong> Ay'da nesneler daha hafif hissettirir çünkü ağırlık daha küçüktür, ancak kütle (ve eylemsizlik) değişmez. Yüzünüze bir ay taşıyla vurun, yine de burnunuzu kırar.
    </p>
    <p>
      <strong>Nakliyede hacimsel ağırlığı göz ardı etmek.</strong> Hafif ama hacimli bir paket, hacme göre faturalandırılır. Bir müşteriye teklif vermeden önce bunu bilmek, acı verici fatura sürprizlerini önler.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Tam faktörü aramadan metrik, emperyal, troy ve grain dönüşümleri için <a href="/tools/weight-converter">ağırlık dönüştürücümüzü</a> kullanın. Sorununuz aynı anda birden çok boyut içerdiğinde bunu <a href="/tools/unit-converter">birim dönüştürücü</a> ile, tarif malzemeler için ağırlık ve hacmi karıştırdığında ise <a href="/tools/cooking-converter">yemek dönüştürücü</a> ile eşleştirin.
    </p>
  </>
);