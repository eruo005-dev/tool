import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Kalp atış hızı bölgeleri, kardiyo yoğunluğunu öznel çabaya
      güvenmeden belirlemenin en temiz yoludur. Bölge 2'nin Bölge
      4'ten farklı bir canlı olduğunu bilmek, kolay günlerin gerçekten
      kolay, zor günlerin ise gerçekten zor olduğu bir antrenman
      haftası oluşturmanızı sağlar. Yeni başlayanlar genellikle kolay
      koşularını çok zorlarlar, bu da zor günleri vasat hale getirir;
      bölgeleri kullanmak bunu düzeltir. Matematik yaklaşıktır &mdash;
      maksimum kalp atış hızı kişiden kişiye 10+ atım fark eder
      &mdash; ancak kabaca bölgeler bile yalnızca hisse göre koşmaktan
      iyidir. Bu kılavuz, 220-yaş tahminini, daha doğru Karvonen
      yöntemini, her bölgede fizyolojik olarak neler olduğunu, sistemi
      temellendiren laktat eşiklerini ve antrenman günlerinize bölgeleri
      nasıl atayacağınızı kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Maksimum kalp atış hızı</h2>
    <p>
      Bölgeler, maksimum KAH'ın (veya KAH rezervinin) yüzdeleridir, bu
      nedenle ilk iş maksimumu tahmin etmektir.
    </p>
    <pre>{`Fox & Haskell (1971):   KAHmaks = 220 - yaş
Tanaka ve ark. (2001):    KAHmaks = 208 - 0.7 * yaş
Gellish ve ark. (2007):   KAHmaks = 207 - 0.7 * yaş

40 yaşındaki biri için:
220-yaş:  180 atım/dk
Tanaka:   180 atım/dk
Gellish:  179 atım/dk`}</pre>
    <p>
      220-yaş formülü genç yetişkinler için olduğundan fazla, yaşlılar
      için ise olduğundan az tahmin eder. Tanaka biraz daha doğrudur.
      Tüm formüllerin standart hatası ~10 atım/dk'dır &mdash; gerçek
      maksimumunuz bu aralıkta herhangi bir yerde olabilir.
    </p>

    <h2>Maksimumu gerçekten ölçmek</h2>
    <p>
      En doğru yaklaşım bir saha testidir. Kapsamlı bir ısınmanın
      ardından:
    </p>
    <pre>{`Koşu:  4 dk maksimum efor, ardından 3 dk kolay, ardından 3 dk maksimum.
          İkinci eforun son dakikasındaki en yüksek KAH maksimuma yakındır.

Bisiklet:  20 dk maksimum zaman denemesi. Sondaki en yüksek KAH genellikle maksimumun 5 atım/dk altındadır.

Koşu bandı rampası: başarısızlığa kadar dakikada %1 eğim artırın. Başarısızlık anındaki KAH = maksimum.`}</pre>
    <p>
      Bu testler acıtır. Soğukken yapmayın ve taranmamış kardiyovasküler
      risk faktörleriniz varsa yapmayın. Bir klinisyenle yapılan egzersiz
      stres testi güvenli versiyondur.
    </p>

    <h2>Dinlenik kalp atış hızı</h2>
    <p>
      Sabah ilk iş, yataktan çıkmadan önce, kahveden önce ölçün.
      3&ndash;5 gün boyunca ortalama alın.
    </p>
    <pre>{`Hareketsiz yetişkin:     60-80 atım/dk
Rekreasyonel sporcu: 55-65 atım/dk
Antrenmanlı dayanıklılık:    40-55 atım/dk
Elit:               30-45 atım/dk`}</pre>
    <p>
      Dinlenik KAH, kabaca bir fitness ölçüsüdür. Aylar süren antrenmanla
      5&ndash;10 atım/dk düşmesi iyi bir işarettir. Aniden yükselen
      dinlenik KAH (taban çizgisinin 10+ atım/dk üzerinde) yorgunluk,
      hastalık veya aşırı antrenmanı gösterir.
    </p>

    <h2>Maksimum yüzdesi (basit bölgeler)</h2>
    <pre>{`Bölge 1  %50-60 KAHmaks  Aktif toparlanma, ısınma
Bölge 2  %60-70 KAHmaks  Aerobik taban, yağ yakımı
Bölge 3  %70-80 KAHmaks  Tempo, aerobik güç
Bölge 4  %80-90 KAHmaks  Eşik / laktat
Bölge 5  %90-100 KAHmaks VO2maks, kısa aralıklar`}</pre>
    <p>
      KAHmaks 180 için örnek:
    </p>
    <pre>{`Bölge 1  90-108 atım/dk
Bölge 2  108-126 atım/dk
Bölge 3  126-144 atım/dk
Bölge 4  144-162 atım/dk
Bölge 5  162-180 atım/dk`}</pre>

    <h2>Karvonen yöntemi (KAH rezervi)</h2>
    <p>
      Maksimum yüzdesi yaklaşımı, fitness seviyelerine göre büyük ölçüde
      değişen dinlenik KAH'ınızı görmezden gelir. Karvonen formülü, daha
      kişiselleştirilmiş olan KAH rezervini (KAHr) kullanır.
    </p>
    <pre>{`KAHr = KAHmaks - KAHdinlenik
Hedef KAH = (KAHr * yoğunluk%) + KAHdinlenik

KAHmaks 180, KAHdinlenik 50, %70 yoğunluk için:
KAHr = 130
Hedef = 130 * 0.70 + 50 = 141 atım/dk`}</pre>
    <p>
      Karvonen bölgeleri, antrenmanlı sporcular için genellikle düz
      maksimum yüzdesinden daha yüksek KAH sayılarına ulaşır ve çabayı
      daha doğru takip eder.
    </p>

    <h2>Her bölgede fizyolojik olarak neler olur</h2>
    <p>
      <strong>Bölge 1 (%50&ndash;60 KAHmaks).</strong> Tempolu yürüyüş,
      ısınma. Kan hareket ediyor, eklemler gevşiyor. Süresiz olarak
      sürdürülebilir.
    </p>
    <p>
      <strong>Bölge 2 (%60&ndash;70).</strong> Aerobik taban. Tam bir
      sohbet edebilirsiniz. Birincil yakıt: yağ. Mitokondri ve kılcal
      damar yoğunluğunu artırır. Dayanıklılık sporcularının
      antrenmanlarının %70&ndash;80'ini geçirdiği bölge.
    </p>
    <p>
      <strong>Bölge 3 (%70&ndash;80).</strong> Tempo. Sohbet kısa
      cümlelere dönüşür. Yakıt karışımı karbonhidratlara kayar.
      Yeni başlayanların genellikle koştuğu ve kaçınması gereken
      &ldquo;gri bölge&rdquo; &mdash; toparlanmak için çok zor, en üst
      düzey adaptasyonları tetiklemek için çok kolay.
    </p>
    <p>
      <strong>Bölge 4 (%80&ndash;90).</strong> Eşik. Sadece birkaç
      kelime söyleyebilirsiniz. Laktat, onu temizleme kapasitenize
      yakın bir şekilde birikmeye başlar. Eşik aralıkları sürdürülebilir
      yarış temposunu iyileştirir.
    </p>
    <p>
      <strong>Bölge 5 (%90&ndash;100).</strong> VO2maks. Tam nefes,
      konuşma yok. 1&ndash;5 dakikalık aralıklar. En yüksek oksijen
      iletimini artırır.
    </p>

    <h2>Laktat eşikleri (LE1 ve LE2)</h2>
    <p>
      KAH bölgelerinden daha hassastır. Bölgeler bir vekildir; eşikler
      altta yatan fizyolojidir.
    </p>
    <p>
      <strong>LE1</strong> (birinci laktat eşiği, ~%60&ndash;70
      KAHmaks) saf aerobik ve karışık metabolizma arasındaki sınırdır.
      Kolay gün temposu LE1'in altında kalmalıdır.
    </p>
    <p>
      <strong>LE2</strong> (ikinci laktat eşiği, ~%85&ndash;92
      KAHmaks) laktatın temizlemeden daha hızlı biriktiği noktadır.
      Yaklaşık bir saat boyunca koruyabileceğiniz en hızlı tempodur.
      Eşik aralıkları LE2'nin hemen üzerinde yaşar.
    </p>
    <p>
      Laboratuvar testleri bunları hassas bir şekilde ölçer. Saha
      tahminleri: LE2 KAH'ı genellikle 60 dakikalık bir yarış
      eforundaki ortalama KAH'ınızdan birkaç atım içindedir.
    </p>

    <h2>Bölgelere göre antrenman reçeteleri</h2>
    <pre>{`Tipik bir dayanıklılık sporcusu için haftalık dağılım:
Bölge 1-2  %80  (kolay, uzun)
Bölge 3    %5   (bilinçli olarak en aza indirilmiş)
Bölge 4    %10  (eşik aralıkları)
Bölge 5    %5   (VO2maks aralıkları)`}</pre>
    <p>
      &ldquo;Kutuplaşmış antrenman&rdquo; &mdash; çoğunlukla çok kolay,
      birazcık çok zor, arada neredeyse hiçbir şey &mdash; çoğu
      dayanıklılık çalışmasında &ldquo;eşik antrenmanından&rdquo;
      (çoğunlukla Bölge 3) daha iyi performans gösterir. Yeni başlayanlar
      tam tersini yapma ve platoya ulaşma eğilimindedir.
    </p>

    <h2>Kalp atış hızı kayması</h2>
    <p>
      KAH, sabit tempoda bile uzun süreli eforlar sırasında yukarı
      doğru kayar. Nedenleri: dehidrasyon, sıcak, yorgunluk. Aynı
      tempoda 150 atım/dk'da başlayıp 160 atım/dk'da biten bir koşu,
      eforunuzun aslında arttığı anlamına gelir. Bölge 2 antrenmanında,
      KAH'ı sabit tutmaya öncelik verin &mdash; bu, ikinci yarıda
      yavaşlamak anlamına gelebilir.
    </p>

    <h2>Monitörler ve doğruluk</h2>
    <p>
      <strong>Göğüs bantları</strong> elektrik sinyalini okur ve
      doğruluk için referans standarttır.
    </p>
    <p>
      <strong>Bilek optik sensörleri</strong> kan akışını tespit etmek
      için LED'ler kullanır &mdash; sabit eforlarda iyi, bileğin
      hareket ettiği veya gerildiği aralıklar ve ağırlık antrenmanı
      sırasında zayıftır. Ağırlık kaldırma sırasında 20+ atım/dk
      sapabilir.
    </p>
    <p>
      Bölge antrenmanı sizin için önemliyse, en azından aralık ve eşik
      çalışmaları için bir göğüs bandı takın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>220-yaş'ı mutlak doğru kabul etmek.</strong> Standart hata
      ~10 atım/dk. Bir saha testiyle iyileştirmeyi planlayın.
    </p>
    <p>
      <strong>Tüm kolay koşuları Bölge 3'te koşmak.</strong> Toparlanmak
      için çok zor, en üst düzey adaptasyonları tetiklemek için yeterince
      zor değil. Bölge 2'yi sıkıcı tutun.
    </p>
    <p>
      <strong>Yüksek dinlenik KAH ile KAHmaks tabanlı bölgeleri
      kullanmak.</strong> Karvonen'e geçin; sayılar gerçekten çabayla
      eşleşecektir.
    </p>
    <p>
      <strong>Uzun koşularda KAH kaymasını görmezden gelmek.</strong>
      Artan KAH ile sabit tempo, artan efor anlamına gelir. Temponun
      ayarlanmasına izin verin.
    </p>
    <p>
      <strong>Aralıklar için bilek KAH'ı.</strong> Optik sensörler zorlu
      eforlarda gecikir ve yanlış okur. Aralıklar için göğüs bandı.
    </p>
    <p>
      <strong>Sadece Bölge 4'te antrenman yapmak.</strong> Çabuk
      tüketir, aerobik tabanı atlar. Zamanınızın çoğu daha kolay
      olmalı, daha zor değil.
    </p>
    <p>
      <strong>Fitness kazandıktan sonra aynı bölgeleri kullanmak.</strong>
      Dinlenik KAH düşer ve LE2 kayar. Bölgeleri her 3&ndash;6 ayda bir
      yeniden değerlendirin.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Karvonen bölgeleri için atım/dk cinsinden yaşı ve dinlenik KAH'ı{" "}
      <a href="/tools/heart-rate-zone-calculator">kalp atış hızı bölgesi hesaplayıcısına</a>{" "}
      girin. Her bölgedeki tempoyu{" "}
      <a href="/tools/running-pace-calculator">koşu temposu hesaplayıcısı</a> ile
      dönüştürün ve antrenman yükünü beslenmeyle eşleştirirken seans kalori
      yakımını{" "}
      <a href="/tools/calorie-calculator">kalori hesaplayıcısı</a> ile kontrol edin.
    </p>
  </>
);