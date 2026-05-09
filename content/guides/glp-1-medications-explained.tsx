import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    GLP-1 reseptör agonistleri &mdash; Ozempic, Wegovy, Mounjaro, Zepbound, Trulicity &mdash; 2026'da diyabet bakımını
    ve kilo kaybını yeniden şekillendiriyor. İşte tıbbi olmayan, gerçeklere dayalı bir genel bakış: ne oldukları, nasıl çalıştıkları ve
    kültürel tartışmaların sıklıkla yanlış anladığı noktalar. Tıbbi tavsiye değildir; doktorunuzla konuşun.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Ne oldukları</h2>
    <p>
      Glukagon benzeri peptid-1 (GLP-1), yemekten sonra salınan doğal bir bağırsak hormonudur. GLP-1 agonistleri, bu hormonu taklit eden
      haftalık (veya eski formülasyonlarda günlük) alınan sentetik versiyonlardır. Başlangıçta tip-2 diyabet için geliştirilmişlerdir;
      kilo kaybı etkisi, keşfedilen ve manşetlere taşınan bir yan etkiydi.
    </p>

    <h2>Mevcut ilaçlar</h2>
    <ul>
      <li><strong>Semaglutid (Ozempic, Wegovy, Rybelsus)</strong> &mdash; haftalık enjeksiyon (Ozempic / Wegovy) veya günlük ağızdan (Rybelsus).</li>
      <li><strong>Tirzepatid (Mounjaro, Zepbound)</strong> &mdash; haftalık. GLP-1 + GIP ikili agonisti; biraz daha güçlü.</li>
      <li><strong>Liraglutid (Saxenda, Victoza)</strong> &mdash; günlük enjeksiyon; daha eski.</li>
      <li><strong>Retatrutid</strong> &mdash; üçlü agonist, 2026'da son aşama denemelerde, daha da güçlü olması bekleniyor.</li>
    </ul>

    <h2>Kilo kaybı nasıl çalışır</h2>
    <p>
      Yavaşlayan mide boşalması + azalan iştah sinyalleri. İnsanlar kendilerini daha çabuk tok hisseder ve daha uzun süre tok kalır. Denemelerde
      ortalama kilo kaybı: semaglutid ile vücut ağırlığının ~%15'i, tirzepatid ile ~%22'si. Sadece davranışsal programlarla karşılaştırıldığında %5-7.
    </p>

    <h2>Ödünleşimler</h2>
    <ul>
      <li><strong>Yan etkiler:</strong> mide bulantısı, kabızlık, yorgunluk (ilk haftalar). Çoğu geçer.</li>
      <li><strong>Kas kaybı:</strong> Kaybedilen kilonun ~%25-40'ı kuvvet antrenmanı yapılmazsa yağsız kütle olabilir. Ağırlık kaldırın.</li>
      <li><strong>Bırakınca geri alma:</strong> çoğu kişi bıraktıktan sonraki bir yıl içinde kilonun %60-80'ini geri alır. Bunlar genellikle uzun süreli bir ilaçtır.</li>
      <li><strong>Maliyet:</strong> ABD perakende fiyatı ayda 900-1.500 dolar; sigorta kapsamı eşitsizdir. Birleşik versiyonlar daha ucuz ancak daha az güvenilirdir.</li>
    </ul>

    <h2>Sık sık basitleştirilenler</h2>
    <ul>
      <li>Bu bir &ldquo;hızlı çözüm&rdquo; değildir &mdash; diyet + kuvvet antrenmanı olmadan sonuçlar daha düşüktür ve kaybetmesi daha kolaydır.</li>
      <li>Sadece obezler için değildir &mdash; doktorlar 2026'da kardiyometabolik risk için daha düşük BMI'larda reçete eder.</li>
      <li>Kültürel &ldquo;Ozempic yüzü&rdquo; gerçektir (deri altı yağ kaybı) ancak sıvı alımı + protein + ağırlık kaldırma ile tersine çevrilebilir.</li>
    </ul>

    <p>
      Bununla birlikte uygulanabilecek uzun ömür odaklı fitness pratikleri için bkz.{" "}
      <a href="/tools/zone-2-heart-rate-calculator">bölge 2 kalp atış hızı hesaplayıcısı</a> ve{" "}
      <a href="/tools/vo2-max-estimator">VO2 maks tahmincisi</a>. <em>Bu sayfa bilgilendirme amaçlıdır, tıbbi tavsiye değildir.</em>
    </p>
  </>
);