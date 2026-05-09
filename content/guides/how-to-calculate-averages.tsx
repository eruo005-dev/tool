import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      &ldquo;Ortalama&rdquo; çoğu cümlede büyük bir iş yapar ve insanlar genellikle
      aritmetik ortalamayı kasteder&mdash;her şeyi topla, sayıya böl. Ancak medyan ve
      mod da ortalamadır ve çarpık verilerde tipik durumu ortalamadan daha iyi
      tanımlarlar. Amerika Birleşik Devletleri'ndeki ortalama hane geliri, medyan hane
      gelirinden daha yüksektir çünkü bir avuç milyarder ortalamayı yukarı çeker;
      ortalamayı bildirirseniz insanları &ldquo;orta&rdquo; hane hakkında yanıltırsınız.
      Ağırlıklı ortalamalar notların hesaplandığı her yerde karşımıza çıkar, geometrik
      ortalamalar finans ve biyolojide görülür ve harmonik ortalamalar oranları
      ortalamada önemlidir. Bu kılavuz, üç ana ortalamayı ve her birinin ne zaman
      kullanılacağını, ağırlıklı ortalamaları, aykırı değerlerin ortalamayı nasıl
      bozduğunu ve geometrik veya harmonik ortalamaların ne zaman doğru seçim olduğunu
      kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Aritmetik ortalama</h2>
    <p>
      Değerleri toplayın, sayıya bölün. 80, 90, 70, 100 test puanları için: toplam = 340, sayı =
      4, ortalama = 85. Çoğu insanın &ldquo;ortalama&rdquo; dediği şey budur. Verilerin
      denge noktasıdır&mdash;her değere bir sayı doğrusu üzerinde ağırlık koyarsanız,
      ortalama, doğrunun dengelendiği yerdir.
    </p>
    <pre>{`değerler: 80, 90, 70, 100
toplam:    340
sayı:  4
ortalama:   340 / 4 = 85`}</pre>

    <h2>Medyan</h2>
    <p>
      Değerleri sıralayın ve ortadakini seçin. Çift sayı için, iki ortadaki değerin
      ortalamasını alın. Medyan aykırı değerlere karşı duyarsızdır&mdash;en büyük değeri
      100'den 1.000.000'a değiştirmek medyanı hiç etkilemez. Bu, onu gelir, ev fiyatları
      ve web sayfası yüklenme süreleri gibi çarpık dağılımlar için doğru seçim yapar.
    </p>
    <pre>{`sıralanmış: 70, 80, 90, 100
çift sayı → medyan = (80 + 90) / 2 = 85

sıralanmış: 70, 80, 90, 100, 1000000
tek sayı → medyan = 90 (aykırı değerden etkilenmez)
ortalama 200.148 olurdu — son derece temsil edici değil`}</pre>

    <h2>Mod</h2>
    <p>
      En sık görünen değer. Hiç mod olmayabilir (tüm değerler benzersiz), bir mod
      (tek modlu) veya birden çok mod (çift modlu, çok modlu) olabilir. Mod, kategorik
      veriler (&ldquo;en yaygın tişört bedeni&rdquo;) için kullanışlıdır; burada ortalama
      ve medyan anlamlı değildir ve sayısal verilerde kümelenmeyi tespit etmek için
      kullanılır.
    </p>
    <pre>{`değerler: 2, 3, 3, 5, 7, 7, 7, 9
mod: 7 (üç kez görünür)

değerler: 4, 4, 6, 8, 8, 10
modlar: 4 ve 8 (çift modlu)`}</pre>

    <h2>Ortalama vs. medyan vs. mod: her birini ne zaman kullanmalı</h2>
    <p>
      Veriler kabaca simetrik olduğunda ve toplamı önemsediğinizde (notlar, zar atışları,
      boylar) <strong>ortalamayı</strong> kullanın. Veriler çarpık olduğunda veya aykırı
      değerler içerdiğinde (gelir, ev fiyatları, yanıt süreleri) <strong>medyanı</strong>
      kullanın. Kategorik veriler için veya &ldquo;tipik seçimi&rdquo; tanımlamak
      istediğinizde <strong>modu</strong> kullanın.
    </p>

    <h2>Ağırlıklı ortalamalar</h2>
    <p>
      Bazı değerler diğerlerinden daha fazla sayıldığında, her birini ağırlığıyla çarpın,
      toplayın, ardından toplam ağırlığa bölün. Ders notları klasiktir: ödev %20, ara
      sınav %30, final %50. Bunlarda 85/100/70 alan bir öğrenci (85&times;0,2 +
      100&times;0,3 + 70&times;0,5) / 1 = (17 + 30 + 35) = 82 alır.
    </p>
    <pre>{`Ağırlıklar: 20, 30, 50  (toplamı 100 olmalı)
Puanlar:  85, 100, 70

Ağırlıklı ortalama = (85×20 + 100×30 + 70×50) / 100
              = (1700 + 3000 + 3500) / 100
              = 8200 / 100
              = 82`}</pre>

    <h2>Aykırı değerlerin etkisi</h2>
    <p>
      Tek bir uç değer ortalamayı çarpıtabilir. Yedi maaş düşünün: altısı 50.000 $ ve bir
      CEO 2.000.000 $. Ortalama maaş 328.571 $'dır. Medyan 50.000 $'dır. Ortalama
      matematiksel olarak doğrudur ancak iletişimsel olarak yanıltıcıdır. Ortalamaları
      insanlara bildirirken önce dağılımın şeklini kontrol edin&mdash;uzun bir kuyruk
      varsa medyan daha dürüsttür.
    </p>

    <h2>Geometrik ortalama</h2>
    <p>
      <em>n</em> değer için geometrik ortalama, çarpımlarının <em>n</em>-inci
      köküdür. Oranları, büyüme oranlarını ve çarpımsal miktarları ortalamak için doğru
      araçtır. +%20, &minus;%10, +%30 yıllık yatırım getirilerinin geometrik ortalaması
      <code>&radic;[3]{`(1,20 × 0,90 × 1,30)`}</code> &minus; 1 &asymp; %12,0'dır ve bu
      gerçek bileşik büyümeyle eşleşir. Aritmetik ortalamayı (%13,3) almak getirilerinizi
      olduğundan fazla gösterir.
    </p>
    <pre>{`Getiriler: +%20, −%10, +%30
Çarpanlar olarak: 1,20, 0,90, 1,30

Aritmetik ortalama: (0,20 + (−0,10) + 0,30) / 3 = %13,3  ← YANLIŞ
Geometrik ortalama: (1,20 × 0,90 × 1,30)^(1/3) − 1 ≈ %12,0  ← doğru`}</pre>

    <h2>Harmonik ortalama</h2>
    <p>
      <em>n</em> değerin harmonik ortalaması, <em>n</em>'nin karşılıkların toplamına
      bölümüdür. Temel birim aynı olduğunda oranlar için doğru ortalamadır. 60 mili 30
      mph'de ve 60 mili 60 mph'de sürerseniz, ortalama hızınız 45 mph DEĞİLDİR. Harmonik
      ortalamayı kullanarak: <code>2 / (1/30 + 1/60) = 2 / (3/60) = 40 mph</code>, bu da
      toplam mesafeye (120 mil) bölü toplam süreye (3 saat) eşittir.
    </p>

    <h2>Geometrik veya harmonik ne zaman kullanılır</h2>
    <p>
      Değişim oranlarını, büyüme oranlarını, yatırım getirilerini veya herhangi bir
      çarpımsal süreci ortalamak için <strong>geometrik ortalamayı</strong> kullanın.
      Payı sabit tuttuğunuz oranları (eşit mesafelerdeki hızlar, öğe başına fiyatlar)
      ortalamak için <strong>harmonik ortalamayı</strong> kullanın. Bu durumlar için
      aritmetik ortalama neredeyse her zaman yanlıştır.
    </p>

    <h2>Aralık ve yayılım kaybolmaz</h2>
    <p>
      Tek başına bir ortalama genellikle yetersizdir. İki veri kümesi aynı ortalamalara
      sahip olabilir ancak çok farklı yayılımlara sahip olabilir: {`{49, 50, 51}`} ve
      {`{0, 50, 100}`} her ikisinin de ortalaması 50'dir, ancak birincisine girdiğinizi
      bilmeyi tercih edersiniz. Bir ortalamayı bir yayılım ölçüsüyle birlikte
      bildirin&mdash;standart sapma, çeyrekler arası aralık veya min/maks.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Çarpık veriler için ortalama bildirmek.</strong> Gelir, konut maliyetleri,
      yüklenme süreleri ve viral popülerlik ağır bir şekilde sağa çarpıktır. Ortalama
      kuyrukla birlikte yukarı kayar; medyan tipik durumda kalır. Medyanı kullanın.
    </p>
    <p>
      <strong>Ortalamaları ağırlıksız ortalamak.</strong> A sınıfında ortalaması 80 olan
      30 öğrenci ve B sınıfında ortalaması 90 olan 10 öğrenci varsa, birleşik ortalama 85
      DEĞİLDİR. <code>(30&times;80 + 10&times;90) / 40 = 82,5</code>'tir. Grup boyutuna
      göre ağırlıklandırmanız gerekir.
    </p>
    <p>
      <strong>Büyüme oranlarında aritmetik ortalama kullanmak.</strong> Bileşik büyüme
      çarpımsaldır; aritmetik ortalama getirileri olduğundan fazla gösterir. Geometrik
      ortalama doğru ortalamadır.
    </p>
    <p>
      <strong>Oranlarda aritmetik ortalama kullanmak.</strong> Sabit mesafelerde ortalama
      hız, sabit miktar başına ortalama fiyat ve benzeri problemler harmonik ortalamayı
      gerektirir, aritmetik ortalamayı değil.
    </p>
    <p>
      <strong>Kategorik veriler için modu göz ardı etmek.</strong> &ldquo;Kırmızı, mavi,
      mavi, yeşil&rdquo;in ortalamasını alamazsınız. Sayısal olmayan kategoriler için
      anlamlı olan tek ortalama moddur.
    </p>
    <p>
      <strong>Ortalamayı &ldquo;cevap&rdquo; olarak ele almak.</strong> Her zaman min,
      maks ve yayılımı kontrol edin. 0&ndash;100 aralığına sahip 50 ortalaması,
      49&ndash;51 aralığına sahip 50 ortalamasından çok farklıdır.
    </p>
    <p>
      <strong>Medyanın ortalamaya eşit olabileceğini unutmak.</strong> Normal dağılım
      gibi simetrik dağılımlar için ortalama, medyan ve mod çakışır. Fark yalnızca çarpık
      verilerde ortaya çıkar, bu yüzden insanlar test puanlarında bunlarla özensiz
      davranır ve sonra maaşlarda kendilerini yanıltırlar.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Veri kümenizi <a href="/tools/average-calculator">ortalama hesaplayıcımıza</a> bırakın ve
      tek seferde ortalama, medyan, mod, aralık ve standart sapmayı alın. Ortalamadan
      farklılıkları yüzde olarak ifade etmek için{" "}
      <a href="/tools/percentage-calculator">yüzde hesaplayıcı</a> ile ve gruplar arası
      ortalamaları karşılaştırırken <a href="/tools/ratio-calculator">oran
      hesaplayıcı</a> ile birlikte kullanın.
    </p>
  </>
);