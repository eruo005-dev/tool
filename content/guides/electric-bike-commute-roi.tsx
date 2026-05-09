import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    ABD'de e-bisiklet satışları 2022 ile 2026 arasında iki katına çıktı. Şehir içi işe gidip gelenler için, kapıdan kapıya sürede genellikle arabaları geride bırakıyorlar. İşte <a href="/learn/roi">ROI</a> hesaplaması + nasıl seçileceği.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Maliyet dökümü</h2>
    <ul>
      <li><strong>İyi şehir e-bisikleti:</strong> 1.500–3.000 $.</li>
      <li><strong>İşletme maliyeti:</strong> Elektrik için mil başına ~0,05 $'a karşı araba için mil başına ~0,65 $ (benzin + amortisman + orantılı sigorta).</li>
      <li><strong>Araba ile başa baş noktası:</strong> 10 millik günlük işe gidiş geliş için tipik olarak 18–30 ay.</li>
      <li><strong>Vergi kredileri:</strong> 2026'da birçok eyalet ve şehir 500–1.500 $ arasında teşvik sunuyor.</li>
    </ul>
    <h2>Şehirlerde arabalardan daha hızlı</h2>
    <p>
      1–8 millik yolculuklar için kapıdan kapıya hız: e-bisiklet genellikle sıkışık şehir rotalarında kazanır (park arama yok, trafiği baypas eder). 8 milin üzerinde, bisiklet altyapısına ve sürücü toleransına bağlıdır.
    </p>
    <h2>Nasıl seçilir</h2>
    <ul>
      <li><strong>Sınıf 1</strong> (pedal destekli, maks. 20 mph): çoğu bisiklet yolunda izin verilir.</li>
      <li><strong>Sınıf 2</strong> (gaz + pedal destekli, maks. 20 mph): bazı yol kısıtlamaları vardır.</li>
      <li><strong>Sınıf 3</strong> (pedal destekli, maks. 28 mph): genellikle sadece cadde, kask zorunludur.</li>
      <li><strong>Pil menzili:</strong> Gerçek kullanımda reklamı yapılan menzilin %60–70'ini varsayın.</li>
      <li><strong>Bilinmesi gereken markalar:</strong> Specialized, Trek, Tern, Lectric, Aventon, Rad Power.</li>
    </ul>
    <h2>Yaygın hatalar</h2>
    <ul>
      <li>Asla kullanmayacağınız maksimum menzil için satın almak &mdash; pahalı pil ağırlığı.</li>
      <li>"Temiz görünüm" için çamurlukları, ışıkları, kilidi atlamak &mdash; 2 hafta içinde eklersiniz.</li>
      <li>Bir apartmanda yaşıyorsanız depolamayı hesaba katmamak.</li>
      <li>E-bisikletlerin agresif bir şekilde çalındığını unutmak; gerçek bir kilit için 100–150 $ bütçe ayırın.</li>
    </ul>
  </>
);