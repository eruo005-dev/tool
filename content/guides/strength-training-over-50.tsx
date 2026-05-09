import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    50 yaşından sonra kuvvet antrenmanı bir seçenek değildir &mdash; aslında işe yarayan bir uzun ömür ilacına en yakın şeydir. Sarkopeni, osteopeni, düşme riski ve metabolik düşüş, haftada iki seansla daha iyiye doğru yönelir. İşte başlamanın (veya yeniden başlamanın) doğru yolu.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>50'den sonra neden daha önemli</h2>
    <p>
      Direnç antrenmanı yapılmazsa, 30 yaşından sonra kas kütlesi yılda ~%1 oranında azalır. 70 yaşına gelindiğinde ortalama bir kişi %30'unu kaybeder. Bunun ardından gelen etkiler (düşmeler, denge, kan şekeri düzenlemesi, kemik yoğunluğu) birbirini tetikler. Haftada iki kuvvet seansı, bunun çoğunu 12 haftada tersine çevirir.
    </p>
    <h2>Doğru başlangıç yapısı</h2>
    <ul>
      <li><strong>Haftada 2 tam vücut seansı.</strong> Seans başına 3-4 kaldırış, 2-3 set, 5-10 tekrar.</li>
      <li><strong>Önce bileşik hareketler:</strong> squat, kalça menteşesi (deadlift / kalça itişi), itme (bench / baş üstü), çekme (row / pulldown).</li>
      <li><strong>Yükten önce form:</strong> formu oturtmak için 4-6 seanslık bir antrenör tutun. Bir sakatlıktan daha ucuzdur.</li>
      <li><strong>İlk 8 haftada büyük kaldırışlarda ağırlığı haftada ~2.5-5 lbs artırın.</strong> Sonra yavaşlatın.</li>
    </ul>
    <h2>Erken dönemde nelerden kaçınılmalı</h2>
    <ul>
      <li>Form oturmadan ağır iki taraflı halter çalışmaları.</li>
      <li>Agresif HIIT / CrossFit tarzı yoğunluk. 4. aya kadar saklayın.</li>
      <li>Kuvveti gölgeleyen kardiyo öncelikli programlar.</li>
    </ul>
    <h2>Toparlanma</h2>
    <ul>
      <li>Vücut ağırlığının kilogramı başına günlük 1.6-2.2 gram protein.</li>
      <li>7-9 saat uyku tartışılmaz.</li>
      <li>Aynı kas grubunu çalıştıran seanslar arasında en az 48 saat.</li>
    </ul>
    <p>
      Kardiyo ile eşleştirin: <a href="/tools/zone-2-heart-rate-calculator">bölge 2 kalp atış hızı hesaplayıcısı</a> ve{" "}
      <a href="/tools/vo2-max-estimator">VO2 maks tahmincisi</a> aerobik taraf için.
    </p>
  </>
);