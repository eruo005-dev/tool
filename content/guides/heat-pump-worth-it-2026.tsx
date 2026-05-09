import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Isı pompaları, 2026 yılının ev elektrifikasyonunda baskın hikaye. IRA vergi kredisi + eyalet indirimleri genellikle kurulum maliyetini yarıya indirince, hesap değişti. İşte ne zaman kendini amorti ettiği ve etmediği.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Temel hesap</h2>
    <p>
      Isı pompaları ısıyı üretmek yerine taşır &mdash; performans katsayısı (COP) tipik olarak 2,5-4,0 arasındadır, yani elektrik dirençli ısıtmaya kıyasla birim enerji başına 2,5-4 kat daha fazla ısı sağlarlar. Tüm maliyet hikayesi bu.
    </p>
    <h2>Amorti süresi kısa olduğunda (5 yılın altında)</h2>
    <ul>
      <li>Kuzeydoğu/Ortabatı'da petrolle ısıtmanın yerini alması.</li>
      <li>Propanın yerini alması.</li>
      <li>Soğuk iklimlerde elektrik dirençli/süpürgelik ısıtmanın yerini alması.</li>
      <li>Federal IRA kredisi + kurulumun %50'sinden fazlasını karşılayan eyalet indirimlerinin birleştirilmesi.</li>
    </ul>
    <h2>Amorti süresi uzun olduğunda (10+ yıl)</h2>
    <ul>
      <li>Verimli doğal gaz + düşük elektrik tarifelerinin yerini alması.</li>
      <li>Isınma faturalarının zaten düşük olduğu ılıman iklimler.</li>
      <li>Büyük elektrik veya kanal yükseltmesi gerektiren eski evler.</li>
    </ul>
    <h2>Pratik notlar</h2>
    <ul>
      <li>Soğuk iklim ısı pompaları (Mitsubishi Hyper-Heat, Bosch IDS) -5°F ve altında çalışır.</li>
      <li>Bunun altında, çift yakıtlı hibrit kurulumlar boşluğu doldurur.</li>
      <li>Genel bir HVAC dükkanı değil, ısı pompası sertifikasına sahip bir yüklenici bulun.</li>
      <li>Eyaletinizin indirim programları için <code>energy.gov</code> adresini kontrol edin.</li>
    </ul>
    <p>
      <a href="/tools/heat-pump-savings-calculator">Isı pompası tasarruf hesaplayıcısı</a> ile kendi rakamlarınızı hesaplayın.
    </p>
  </>
);