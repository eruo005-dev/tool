import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    EV/hybrid kararı 2025-2026'da şarj altyapısının olgunlaşması ve PHEV (plug-in hybrid)
    seçeneklerinin genişlemesiyle değişti. İşte 2026'da araç satın almak için dürüst karar ağacı.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Tam EV seçin eğer</h2>
    <ul>
      <li>Evde şarj edebiliyorsanız (garaj / araba yolu priz ile).</li>
      <li>Günlük işe gidiş gelişiniz 200 milin altındaysa.</li>
      <li>Yılda 4&times;'ten az yolculuğa çıkıyorsanız.</li>
      <li>Güçlü halka açık şarj ağına sahip bir metropolde yaşıyorsanız.</li>
      <li>Federal $7.500 + eyalet teşvikleri satın alımınıza uygulanıyorsa.</li>
    </ul>
    <h2>PHEV (plug-in hybrid) seçin eğer</h2>
    <ul>
      <li>Evde şarj edebiliyor ancak ayda 1+&times; kez uzun yol yapıyorsanız.</li>
      <li>Çoğunlukla şehir içi kullanım ama ülkeler arası ihtiyaçlarınız varsa.</li>
      <li>Saf EV'lerin zorlandığı çekme veya taşıma ihtiyaçlarınız varsa.</li>
      <li>Soğuk kışları olan bir bölgede yaşıyorsanız (0°F'de EV'lerde menzil kaygısı hala gerçek).</li>
    </ul>
    <h2>Hybrid (fişsiz) ile devam edin eğer</h2>
    <ul>
      <li>Apartman / evde şarj imkanınız yoksa.</li>
      <li>Sık sık uzun yolculuklar yapıyorsanız &mdash; şarj kesintileri ciddi zaman ekler.</li>
      <li>Garajsız çok soğuk iklimde yaşıyorsanız.</li>
      <li>Toyota Prius / Camry Hybrid sınıfının basitliğini ve uzun vadeli güvenilirliğini istiyorsanız.</li>
    </ul>
    <h2>2026'da toplam sahip olma maliyeti</h2>
    <ul>
      <li><strong>EV:</strong> en düşük yakıt + bakım; daha yüksek peşinat; 8-10 yıl sonra batarya değiştirme riski.</li>
      <li><strong>PHEV:</strong> işe gidiş geliş elektrik menziline sığıyorsa daha düşük yakıt; batarya + ICE = çift bakım karmaşıklığı.</li>
      <li><strong>Hybrid:</strong> üçü arasında en yüksek yakıt maliyeti; en düşük karmaşıklık; güvenilir 200 bin mil ömür.</li>
    </ul>
    <p>
      Menzil hesaplamalarını <a href="/tools/ev-range-estimator">EV menzil hesaplayıcı</a> ile yapın. Evde şarj için güneş enerjisi geri ödemesi için
      <a href="/tools/solar-panel-payback-calculator">güneş paneli geri ödeme hesaplayıcı</a>'ya bakın.
    </p>
  </>
);