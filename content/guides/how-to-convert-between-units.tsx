import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Birim dönüşümü kulağa basit gelir — bir çarpanla çarpmak — ta ki
      Fahrenheit'ten Celsius'a geçerken (sadece oran değil, bir ekleme de gerektirir),
      ABD ile İmparatorluk galonları (%20 farklı) arasında takılıp kalana ya da
      &ldquo;ton&rdquo;un uluslararası belirsizliğiyle karşılaşana kadar. Bu rehber,
      önemli olan dönüşüm faktörlerini, insanları yanıltanları ve en sık
      yapacağınız dönüşümler için bir zihinsel matematik araç setini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>İki tür dönüşüm</h2>
    <p>
      <strong>Çarpmalı:</strong> çoğu dönüşüm. Sabit bir faktörle çarpın.
      Metre → fit: × 3,281. Kilogram → pound: × 2,205. Her iki yönde de aynı formül,
      karşılıklı olarak.
    </p>
    <p>
      <strong>Doğrusal (eklemeli):</strong> Fahrenheit ↔ Celsius hem bir oran hem de
      bir ekleme gerektirir. &ldquo;Tek bir sayıyla çarpamazsınız.&rdquo;
    </p>

    <h2><a href="/learn/temperature-ai">Sıcaklık</a> — ekleme gerektiren</h2>
    <p>
      <strong>C → F:</strong> F = (C × 9/5) + 32. Veya yaklaşık olarak:
      C'yi ikiye katla, %10 çıkar, 32 ekle.
    </p>
    <p>
      <strong>F → C:</strong> C = (F − 32) × 5/9. Veya yaklaşık olarak:
      32 çıkar, 0,56 ile çarp.
    </p>
    <p>
      <strong>C → K (Kelvin):</strong> K = C + 273,15. Oran yok,
      sadece ekleme.
    </p>
    <p>
      Ezberlemeye değer referans noktaları:
    </p>
    <p>
      0°C = 32°F (donma)
    </p>
    <p>
      20°C = 68°F (oda sıcaklığı)
    </p>
    <p>
      37°C = 98,6°F (vücut sıcaklığı)
    </p>
    <p>
      100°C = 212°F (kaynama)
    </p>
    <p>
      −40°C = −40°F (eşleştikleri tek nokta)
    </p>

    <h2>Uzunluk — metrik vs emperyal</h2>
    <p>
      <strong>1 inç = 2,54 cm</strong> (tam, tanım gereği).
    </p>
    <p>
      <strong>1 fit = 30,48 cm</strong> (tam).
    </p>
    <p>
      <strong>1 yarda = 0,9144 m</strong> (tam).
    </p>
    <p>
      <strong>1 mil = 1,609344 km</strong>. Yaklaşık: km ≈
      mil × 1,6. Veya: mil ≈ km × 0,62.
    </p>
    <p>
      <strong>1 m = 3,281 ft = 39,37 in</strong>.
    </p>
    <p>
      Zihinsel matematik: cm → inç için 2,5'e bölün (veya 0,4 ile çarpın).
      10 cm ≈ 4 in. m → yarda için yaklaşık olarak eşdeğerdirler
      (1 m ≈ 1,09 yd). Tahmin için yeterince yakın.
    </p>

    <h2>Ağırlık / kütle</h2>
    <p>
      <strong>1 lb = 0,4536 kg</strong>. Yaklaşık: lb × 0,45
      veya kg × 2,2.
    </p>
    <p>
      <strong>1 kg = 2,2046 lb</strong>.
    </p>
    <p>
      <strong>1 oz = 28,35 g</strong>.
    </p>
    <p>
      <strong>Ton</strong> — üç farklı değer. ABD &ldquo;kısa ton&rdquo; = 2.000 lb = 907 kg.
      Birleşik Krallık &ldquo;uzun ton&rdquo; = 2.240 lb = 1.016 kg. Metrik ton (tonne) = 1.000 kg = 2.205 lb.
      Hangisi olduğunu her zaman netleştirin.
    </p>
    <p>
      Zihinsel matematik: kg → lb, ikiye katlayın ve %10 ekleyin. 50 kg × 2 = 100,
      + 10 = 110 lb (gerçek: 110,23).
    </p>

    <h2>Hacim — ABD ve Birleşik Krallık'ın ayrıldığı yer</h2>
    <p>
      <strong>1 ABD galonu = 3,785 L = 4 ABD quartı = 128 ABD sıvı onsu</strong>.
    </p>
    <p>
      <strong>1 İmparatorluk (Birleşik Krallık) galonu = 4,546 L</strong> — ABD'den yaklaşık %20
      daha büyük.
    </p>
    <p>
      <strong>1 ABD sıvı onsu = 29,57 mL</strong>.
    </p>
    <p>
      <strong>1 İmparatorluk sıvı onsu = 28,41 mL</strong>. Galon daha büyük olmasına rağmen,
      ABD sıvı onsundan biraz daha küçük.
    </p>
    <p>
      <strong>1 su bardağı (ABD) = 236,6 mL</strong>. Not: su bardağı ABD'ye özgüdür;
      Birleşik Krallık nadiren &ldquo;İmparatorluk su bardağı&rdquo;nı (284 mL) kullanır. Birleşik Krallık
      tarifleri genellikle gram veya mL belirtir.
    </p>
    <p>
      <strong>1 metreküp = 1.000 L</strong>.
    </p>
    <p>
      Tarif dönüşüm tuzağı: bir ABD su bardağı tereyağı ≈ 227 g; bir Birleşik Krallık
      &ldquo;su bardağı&rdquo; tereyağı 240 mL ≈ 230 g veya 284 mL
      ≈ 270 g anlamına gelebilir. Hassasiyet önemliyse her zaman tartın.
    </p>

    <h2>Alan</h2>
    <p>
      <strong>1 sq ft = 0,0929 m²</strong>.
    </p>
    <p>
      <strong>1 m² = 10,764 sq ft</strong>. Yaklaşık: m² × 10,8
      sq ft için.
    </p>
    <p>
      <strong>1 akre = 4.047 m² = 0,4047 hektar = 43.560 sq ft</strong>.
    </p>
    <p>
      <strong>1 hektar = 10.000 m² = 2,471 akre</strong>.
    </p>
    <p>
      <strong>1 sq mil = 640 akre = 2,59 km²</strong>.
    </p>

    <h2>Hız</h2>
    <p>
      <strong>mph → km/h:</strong> × 1,609. ABD'de 65 mph hız sınırı
      = ~105 km/h.
    </p>
    <p>
      <strong>km/h → mph:</strong> × 0,621. Alman otobanında 130
      km/h = ~81 mph.
    </p>
    <p>
      <strong>Knot → mph:</strong> × 1,151. Knot → km/h: × 1,852.
    </p>
    <p>
      <strong>m/s → km/h:</strong> × 3,6. Usain Bolt'un zirvesi
      ~12 m/s = ~43 km/h.
    </p>

    <h2>Enerji ve güç</h2>
    <p>
      <strong>1 kalori (küçük)</strong> = 4,184 J. Ancak gıda
      &ldquo;kalorileri&rdquo; kilokaloridir (kcal) = 4.184 J.
      Kafa karıştırıcı ama yerleşik.
    </p>
    <p>
      <strong>1 kWh = 3.600.000 J = 3,6 MJ</strong>.
    </p>
    <p>
      <strong>1 BTU = 1.055 J</strong>. 1.000 BTU/h = ~293 W.
    </p>
    <p>
      <strong>1 beygir gücü (mekanik) = 745,7 W</strong>. 1
      beygir gücü (metrik) = 735,5 W. Evet, iki farklı beygir gücü.
    </p>

    <h2>Veri boyutları — ondalık taban-10 vs ikili taban-2</h2>
    <p>
      Tarihsel olarak &ldquo;MB&rdquo; 2^20 = 1.048.576 bayt anlamına geliyordu
      (ikili). Şimdi resmi olarak:
    </p>
    <p>
      <strong>MB (megabayt) = 10^6 = 1.000.000 bayt</strong> (ondalık,
      depolama üreticileri tarafından kullanılır).
    </p>
    <p>
      <strong>MiB (mebibayt) = 2^20 = 1.048.576 bayt</strong>
      (ikili, işletim sistemi / RAM tarafından kullanılır).
    </p>
    <p>
      &ldquo;1 TB&rdquo; bir sabit disk, işletim sisteminizde ~931 GiB olarak görünür.
      Bu bir dolandırıcılık değil — sadece ondalık-ikili uyumsuzluğu. Her
      ölçekte aynı: KB/KiB, GB/GiB, TB/TiB.
    </p>

    <h2>Açı, basınç ve diğer özel alanlar</h2>
    <p>
      <strong>1 radyan = 180/π derece ≈ 57,296°</strong>. π radyan
      = 180°.
    </p>
    <p>
      <strong>1 atm = 101.325 Pa = 14,7 psi = 760 mmHg = 1,013 bar</strong>.
      Lastik basıncı 32 psi = 220 kPa = 2,2 bar.
    </p>
    <p>
      <strong>Yakıt ekonomisi:</strong> mpg (ABD) × 0,425 = km/L. Veya
      235,21 / mpg_ABD = L/100km. 30 mpg ≈ 7,8 L/100km.
    </p>
    <p>
      <strong>Birleşik Krallık mpg ≠ ABD mpg.</strong> Birleşik Krallık İmparatorluk galonlarını kullanır. 30
      Birleşik Krallık mpg = 25 ABD mpg. Her zaman netleştirin.
    </p>

    <h2>Yaygın dönüşüm hataları</h2>
    <p>
      <strong>1. Ekleme gereken yerde oran uygulamak.</strong>
      Özellikle sıcaklıklar. 20°C, &ldquo;20 × 1,8 = 36°F&rdquo; değildir.
      68°F'dir. +32 eklemesine ihtiyacınız var.
    </p>
    <p>
      <strong>2. ABD ve Birleşik Krallık galonlarını karıştırmak.</strong> %20
      fark — yakıt ekonomisi ve yemek pişirmede büyük.
    </p>
    <p>
      <strong>3. &ldquo;Kalori&rdquo; ile &ldquo;kcal&rdquo;yi karıştırmak.</strong>
      200 &ldquo;kalorilik&rdquo; bir kurabiye 200 kcal = 200.000 küçük
      kaloridir.
    </p>
    <p>
      <strong>4. Yanlış &ldquo;ton&rdquo;u kullanmak.</strong> ABD
      kısa tonu, Birleşik Krallık uzun tonu, metrik ton — %12'ye varan farklar.
    </p>
    <p>
      <strong>5. Çok erken yuvarlamak.</strong> Zincirleme dönüşümler, her adım 2 anlamlı basamağa
      yuvarlanırsa hassasiyeti hızla kaybeder. Ara adımlarda daha fazla
      basamak tutun; nihai cevabı yuvarlayın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir birimi{" "}
      <a href="/tools/unit-converter">birim dönüştürücü</a> ile dönüştürün.
      Ekleme gerektiren sıcaklık dönüşümleri için{" "}
      <a href="/tools/temperature-converter">sıcaklık dönüştürücü</a>
      {" "}ile ve birim matematiğinin yanında çapraz para birimi değerlerine
      ihtiyacınız olduğunda{" "}
      <a href="/tools/currency-converter">para birimi dönüştürücü</a>
      ile birlikte kullanın.
    </p>
  </>
);