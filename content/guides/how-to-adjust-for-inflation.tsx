import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Enflasyon, hareketsiz duran her doların üzerindeki sessiz vergidir. 2000 yılındaki 100 dolar, 2026'da yaklaşık 180 dolar satın alma gücüne sahiptir &mdash; bu, nakit tutan herkes için %44'lük bir reel kayıptır. Maaşlar, yatırımlar, kiralar ve fiyatlar nominal olarak hareket eder; önemli olan, enflasyon çıkarıldıktan sonraki reel değerdir. Bu rehber, TÜFE endeksi matematiğini, nominal getirilerin reel getirilere nasıl dönüştürüleceğini, Fisher denklemini, ABD'nin tarihsel enflasyon kaydını ve görünüşte mütevazı %3'lük bir enflasyon oranının bir kariyer veya emeklilik döneminde nasıl dramatik bir şekilde biriktiğini adım adım açıklar. Doğru enflasyon düşüncesi, zengin hissetmek ile zengin olmak arasındaki farktır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. TÜFE Endeksi</h2>
    <p>
      Tüketici Fiyat Endeksi (ABD'de TÜFE-U), zaman içinde bir tüketici mal sepetinin fiyatını takip eder. Bir baz döneminde (1982-1984 ortalaması = 100) 100 olarak belirlenir. Ocak 2026'daki TÜFE yaklaşık 315'tir, yani aynı sepet 1980'lerin başındakinin yaklaşık 3,15 katıdır. Yıllık enflasyon şöyledir:
    </p>
    <pre>{`enflasyon % = (TÜFE_simdi - TÜFE_once) / TÜFE_once × 100`}</pre>

    <h2>2. Yıllar arasında dönüştürme</h2>
    <p>
      A yılındaki X dolarını B yılının satın alma gücüne dönüştürmek için:
    </p>
    <pre>{`deger_B = deger_A × (TÜFE_B / TÜFE_A)`}</pre>
    <p>
      Örnek: 1990'da (TÜFE 130) 50.000 dolarlık bir maaş, 2026 dolarıyla
      <code> 50000 × (315 / 130) = 121.000 dolar</code>'a eşdeğerdir. Dedelerinizin 1975'te (TÜFE 54) "Evimi 30.000 dolara aldım" demesi,
      <code> 30000 × (315 / 54) = 175.000 dolar</code>'a denk gelir.
    </p>

    <h2>3. Nominal ve reel getiriler</h2>
    <p>
      <strong>Nominal</strong> = hesap ekstresinde yazandır.<br />
      <strong>Reel</strong> = nominal eksi enflasyon = gerçekte daha fazla ne satın alabileceğinizdir.
    </p>
    <p>
      Enflasyon %3 iken %4 kazandıran bir banka hesabı size %1 reel getiri sağlar. %8 enflasyon sırasında %4'lük bir tasarruf hesabı size <em>negatif %4</em> reel getiri sağlar — bakiye büyüse bile satın alma gücünüzü kaybediyorsunuzdur.
    </p>

    <h2>4. Fisher denklemi</h2>
    <p>
      Nominal, reel ve enflasyon oranlarını ilişkilendiren kesin bir formül:
    </p>
    <pre>{`(1 + nominal) = (1 + reel) × (1 + enflasyon)`}</pre>
    <p>
      Yeniden düzenlenmiş hali:
    </p>
    <pre>{`reel = (1 + nominal) / (1 + enflasyon) - 1`}</pre>
    <p>
      Düşük oranlarda, <code>reel ≈ nominal - enflasyon</code> yaklaşımı işe yarar. Daha yüksek oranlarda tam formülü kullanın. Nominal %10, enflasyon %7: kısa yol %3 der, Fisher ise <code>1.10/1.07 - 1 = %2.80</code> der. Küçük bir fark, ancak birikir.
    </p>

    <h2>5. ABD'nin tarihsel enflasyonu</h2>
    <ul>
      <li>1910-2020 ortalaması: yılda ~%3,1</li>
      <li>1970'ler zirvesi: %13,5 (1980)</li>
      <li>1990-2020: ortalama %2,3 ("Büyük Ilımlılık")</li>
      <li>2021-2023: %6-9 sıçraması</li>
      <li>2024-2026: ~%3'e normalize oldu</li>
    </ul>
    <p>
      Uzun vadede %3 gerçekçi planlama rakamıdır. Daha düşüğü bonus, daha yükseği ise risktir.
    </p>

    <h2>6. %3 neden hissedilenden daha hızlı birikir</h2>
    <p>
      Yıllık %3 enflasyonda:
    </p>
    <ul>
      <li>10 yıl: fiyatlar %34 daha yüksek</li>
      <li>20 yıl: %81 daha yüksek</li>
      <li>30 yıl: %143 daha yüksek</li>
      <li>40 yıl: %226 daha yüksek</li>
    </ul>
    <p>
      Yıllık 60 bin dolar harcamayla başlayan 30 yıllık bir emeklilik, aynı yaşam standardını sürdürebilmek için 30. yılda yılda 145 bin doların üzerinde gerektirecektir. Bu nedenle sabit emekli maaşları erozyona uğrar ve tahvil ağırlıklı emeklilik portföyleri başarısız olabilir.
    </p>

    <h2>7. Reel olarak yatırım getirileri</h2>
    <p>
      Uzun vadeli tarihsel reel getiriler (enflasyon sonrası):
    </p>
    <ul>
      <li>ABD hisse senetleri: ~%6,5-7</li>
      <li>ABD tahvilleri: ~%1-2</li>
      <li>Nakit / Hazine bonoları: ~%0-0,5</li>
      <li>Altın: ~%0-1</li>
      <li>Gayrimenkul: ~%3-4</li>
    </ul>
    <p>
      Alıntılanan "%7 hisse senedi getirisi" genellikle <em>reel</em> rakamdır. Hisse senetleri tarihsel olarak 20+ yıllık ufuklarda en güvenilir enflasyon yenici olmuştur.
    </p>

    <h2>8. Maaş ve enflasyon</h2>
    <p>
      %4 enflasyon sırasında %3 zam, bir maaş kesintisidir. ABD'de ücret artışı on yıllar boyunca enflasyonu takip etme eğilimindedir ancak enflasyon sıçramaları sırasında 1-3 yıl geride kalabilir. Zamları her zaman reel olarak değerlendirin:
    </p>
    <pre>{`reel zam = (1 + nominal zam) / (1 + enflasyon) - 1`}</pre>
    <p>
      İş değiştirmek, yerinde kalmaktan daha büyük reel zamlar sağlama eğilimindedir — 2023-2024'te iş değiştirenler ortalama %7-10 nominal artış alırken, kalanlar %4-5 aldı.
    </p>

    <h2>9. Enflasyona karşı korumalı araçlar</h2>
    <ul>
      <li><strong>TIPS</strong> (Hazine Enflasyona Karşı Korumalı Menkul Kıymetler): anapara TÜFE ile ayarlanır; enflasyonun üzerinde reel getiri sağlar</li>
      <li><strong>I-bondları</strong>: Enflasyona bağlı oranlı ABD tasarruf bonosu, yıllık 10 bin dolar limiti</li>
      <li><strong>Hisse senetleri</strong>: Kusurlu enflasyon koruması, 20+ yıllık ufuklarda daha iyidir</li>
      <li><strong>Gayrimenkul</strong>: Kiralar enflasyonla birlikte yükselir, mülk değeri de öyle</li>
      <li><strong>Emtialar</strong>: Değişkendir ancak enflasyonla pozitif korelasyonludur</li>
    </ul>

    <h2>10. TÜFE ve kişisel enflasyonunuz</h2>
    <p>
      TÜFE bir sepet ortalamasıdır. Kişisel enflasyon oranınız ne satın aldığınıza bağlıdır. Harcamalarınızda sağlık ve üniversite baskınsa, manşet TÜFE %2 olsa bile yılda %5-6 ile karşı karşıyasınızdır. Çok araba kullanıyorsanız, benzin fiyatı oynaklığı daha sert vurur. Zincirleme TÜFE (C-TÜFE-U) ve Fed'in tercih ettiği PCE endeksi, teknik nedenlerle genellikle manşet TÜFE'den %0,3-0,5 daha düşük çalışır. Haberlerdeki rakamın sizin için geçerli olduğunu varsaymayın.
    </p>

    <h2>11. Emeklilik planlaması reel rakamlar kullanır</h2>
    <p>
      "%4 güvenli çekme oranı" gördüğünüzde, bu enflasyona göre düzeltilmiştir — 1. yılda başlangıç portföyünün %4'ünü çeker, ardından her yıl bu dolar miktarını artı TÜFE'yi çekersiniz. Emeklilik projeksiyonlarını nominal dolar cinsinden yapmak yanıltıcı derecede büyük nihai bakiyeler verecektir. Her zaman reel olarak modelleyin.
    </p>

    <h2>12. Bugünkü değer ve iskonto oranları</h2>
    <p>
      Parayı zaman içinde karşılaştırmak için (emekli maaşları, tazminatlar, gelir sigortaları), gelecekteki nakit akışlarını iskonto edersiniz:
    </p>
    <pre>{`bugünkü değer = gelecekteki değer / (1 + r)^yıl`}</pre>
    <p>
      İskonto oranı <em>r</em>, hem enflasyon beklentilerini hem de bir risk primini yansıtmalıdır. 20 yıl içinde garantili 10.000 doların %3 ile iskonto edilmiş değeri
      <code> 10000 / 1.03^20 = 5.537 dolar</code>'dır.
    </p>

    <h2>13. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Nakit tasarruflarda enflasyonu göz ardı etmek.</strong> %3 enflasyon sırasında %0,5 kazandıran 50 bin dolarlık acil durum fonu, yılda 1.250 dolar reel değer kaybeder.
      </li>
      <li>
        <strong>Nominal kazançları kutlamak.</strong> 15 yılda 100 dolardan 150 dolara çıkan bir hisse senedi, enflasyona zar zor ayak uydurmuştur.
      </li>
      <li>
        <strong>Eski fiyatlara takılıp kalmak.</strong> "Benzin 2 dolardı" — evet, bir kahve de 0,25 dolardı. Her şeyi enflasyona göre düzeltin.
      </li>
      <li>
        <strong>TÜFE ve TÜFE-U'yu karıştırmak.</strong> Farklı nüfuslar için farklı endeksler; serileri karıştırmayın.
      </li>
      <li>
        <strong>Sonsuza kadar %2 varsaymak.</strong> 1970'ler oldu ve tekrar olabilir. Güvende kalmak için %3-4 ile plan yapın.
      </li>
    </ul>

    <h2>14. Rakamları hesaplayın</h2>
    <p>
      Aşağıdaki hesaplayıcı ile herhangi bir tarihsel dolar tutarını bugünün satın alma gücüne dönüştürün veya belirli bir enflasyon oranında gelecekteki maliyetleri tahmin edin.
    </p>
    <p>
      <a href="/tools/inflation-calculator">Enflasyon hesaplayıcı</a>
      <a href="/tools/compound-interest-calculator">Bileşik faiz hesaplayıcı</a>
      <a href="/tools/currency-converter">Döviz çevirici</a>
    </p>
  </>
);