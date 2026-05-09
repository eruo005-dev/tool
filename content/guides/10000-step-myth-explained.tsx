import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    10.000 adım sayısı, bir araştırma bulgusu değil, 1965 yılında Japonya'da Yamasa pedometre pazarlama kampanyasının bir ürünüydü. Modern
    veriler çok daha ilginç bir hikaye anlatıyor &mdash; işte verilerin gerçekte söylediği şey.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>10.000 sayısı nereden geldi</h2>
    <p>
      Yamasa, 1964 Tokyo Olimpiyatları öncesinde &ldquo;Manpo-kei&rdquo;yi (10.000 adım ölçer) piyasaya sürdü. Bu sayı,
      Japoncada 10.000 karakterinin yürüyen bir insana benzemesi nedeniyle seçildi. Tüm hikayenin kökeni budur.
    </p>
    <h2>Modern veriler ne söylüyor</h2>
    <ul>
      <li><strong>Yaklaşık 7.500'de ölüm oranı platosu:</strong> Lee ve ark. (2019, JAMA Intern Med) yaşlı kadınlar üzerinde.</li>
      <li><strong>60+ yaş:</strong> faydalar 6.000-7.000 adım gibi düşük bir seviyede platoya ulaşıyor.</li>
      <li><strong>Toplamdan çok tempo önemli:</strong> Günde ~30 dakika boyunca 100+ adım/dakika, 12.000 yavaş adımdan daha fazla sağlıkla ilişkilidir.</li>
      <li><strong>Azalan getiriler:</strong> ~10.000'in ötesinde marjinal fayda azalır; sıfır değil, sadece daha küçük.</li>
    </ul>
    <h2>Kişiselleştirilmiş hedefler</h2>
    <ul>
      <li><strong>60 yaş altı, hareketsiz temel:</strong> 7.500-8.000 doğru hedeftir.</li>
      <li><strong>60+:</strong> 6.000-7.000.</li>
      <li><strong>Kilo verme odaklı:</strong> Bakım marjınızdaki sinsi artışı temizlemek için 9.000-10.000+.</li>
      <li><strong>Sporcular:</strong> adım sayısı yararlı bir ölçüt değildir; antrenman yükünü takip edin.</li>
    </ul>
    <p>
      Kişiselleştirilmiş hedefinizi <a href="/tools/step-count-target-calculator">adım sayısı hedef hesaplayıcı</a> ile bulun.
    </p>
  </>
);