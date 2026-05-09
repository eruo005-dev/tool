import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Karbonhidrat sayımı, tip 1 diyabet hastaları için bir hayatta kalma aracı olarak başlamış ve o zamandan beri kan şekerini, kiloyu, atletik performansı veya ketojenik diyeti yöneten herkes için standart bir uygulama haline gelmiştir. Beceri aynıdır: etiketleri okuyun, porsiyonları tartın, gerektiğinde lifi çıkarın ve paketteki gramlar ile vücudunuzdaki gramlar arasındaki farkı anlayın. Bu kılavuz, toplam ve net karbonhidratları, glisemik indeks ve glisemik yükü, diyabetik insülin dozlamasının nasıl çalıştığını, 20-50g keto eşiklerini ve gizli şekerleri yakalayan etiket okuma taktiklerini kapsar. Sonunda, herhangi bir öğündeki karbonhidratları birkaç gram hassasiyetle tahmin edebilmelisiniz.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. Toplam karbonhidrat ve net karbonhidrat</h2>
    <p>
      <strong>Toplam karbonhidrat</strong> = şekerler + nişastalar + lif + şeker alkolleri. Bu, bir besin etiketinin ana satırında görünendir.
    </p>
    <p>
      <strong>Net karbonhidrat</strong> = toplam karbonhidrat − lif − (çoğu) şeker alkolü. Bu, kan şekerini gerçekten yükselten kısımdır.
    </p>
    <pre>{`net carbs = total carbs - fiber - sugar alcohols
(ABD etiketi hesaplaması; AB etiketleri lifi zaten hariç tutar)`}</pre>
    <p>
      AB ve Birleşik Krallık etiketleri karbonhidratları "karbonhidrat" (lif zaten hariç tutulmuş) ve "bunun şekerleri" olarak listeler. ABD etiketleri karbonhidratları toplam olarak listeler ve lifi ayrıca belirtir. Aynı yiyecek, kutuda farklı sayılar.
    </p>

    <h2>2. Lif neden çıkarılır</h2>
    <p>
      Lif, insan enzimleri tarafından sindirilmez. Kan şekerini yükseltmeden geçer, bu nedenle insülin gerektirmez. Diyabet hastaları ve keto diyeti yapanlar için, porsiyon başına &gt; 5g ise tüm lifi, &lt; 5g ise yarısını çıkarın (yaygın klinik uygulama).
    </p>

    <h2>3. Şeker alkolleri: kısmi çıkarma</h2>
    <p>
      Eritritol, ksilitol, maltitol ve sorbitol "toplam karbonhidrat" içinde sayılır ancak tutarsız bir şekilde emilir. Yönergeler:
    </p>
    <ul>
      <li>Eritritol: tamamen çıkarın (0 glisemik etki)</li>
      <li>Ksilitol, sorbitol: çoğu yetişkin için tamamen çıkarın</li>
      <li>Maltitol: sadece yarısını çıkarın — kan şekerini yükseltir</li>
      <li>Alluloz: tamamen çıkarın (karbonhidrat olarak metabolize edilmez)</li>
    </ul>

    <h2>4. Glisemik indeks ve glisemik yük</h2>
    <p>
      <strong>Glisemik indeks (GI)</strong>, sabit 50g doz için bir yiyeceğin karbonhidratlarının saf glikoza (100) kıyasla kan şekerini ne kadar hızlı yükselttiğini sıralar. Karpuz GI 76, beyaz ekmek 75, mercimek 32.
    </p>
    <p>
      <strong>Glisemik yük (GL)</strong>, porsiyon boyutuna göre ayarlama yapar:
    </p>
    <pre>{`GL = (GI × porsiyon başına karbonhidrat) / 100`}</pre>
    <p>
      Karpuz yüksek GI'ye sahiptir ancak fincan başına sadece 11g karbonhidrat içerir, bu nedenle GL = 8 (düşük). Bir simit orta GI'ye sahiptir ancak 50g karbonhidrat içerir, bu nedenle GL = 35 (çok yüksek). <strong>Önemli olan sayı GL'dir</strong> yemek planlaması için. &lt;10 düşük, 11-19 orta, 20+ yüksek.
    </p>

    <h2>5. Diyabetik karbonhidrat sayımı ve insülin oranları</h2>
    <p>
      Tip 1 diyabet hastaları, bir <strong>insülin-karbonhidrat oranına</strong> (örneğin, 10g karbonhidrat başına 1 ünite) ve mevcut kan şekeri için bir düzeltme faktörüne dayanarak insülin dozlar. 15g yanlış saymak, 1.5 ünitelik bir hataya neden olabilir — hipoglisemiyi tetiklemek için yeterli. Sadece metformin kullanan tip 2 diyabet hastaları bu hassasiyete ihtiyaç duymaz ancak öğünleri ~45-60g karbonhidratın altında tutmaktan fayda görür. Oranları belirlemek için her zaman sertifikalı bir diyabet eğitimcisi ile çalışın; asla başkasınınkini kopyalamayın.
    </p>

    <h2>6. Keto eşikleri</h2>
    <ul>
      <li>Sıkı keto: günde &lt;20g net karbonhidrat</li>
      <li>Orta keto: günde 20-50g net karbonhidrat</li>
      <li>Düşük karbonhidrat (keto değil): günde 50-100g</li>
      <li>Standart ABD/Birleşik Krallık diyeti: günde 200-300g</li>
    </ul>
    <p>
      Ketozis tipik olarak 20g altında 2-4 gün içinde başlar. 100g karbonhidratlı bir hile öğünü sizi 1-3 gün ketozisten çıkarır. İdrar şeritleriyle (sadece ilk hafta — sonra doğruluk düşer) veya kan keton ölçerlerle (~$40) ölçün.
    </p>

    <h2>7. ABD besin etiketi okuma</h2>
    <p>
      Üç satıra odaklanın: porsiyon boyutu, toplam karbonhidrat, diyet lifi. Ardından:
    </p>
    <pre>{`1. Gerçek porsiyon / porsiyon boyutu ile çarpın
2. Lifi çıkarın (tamamen)
3. Yukarıdaki kurallara göre şeker alkollerini çıkarın
4. Bu sizin net karbonhidrat sayınızdır`}</pre>
    <p>
      Porsiyon boyutları genellikle gülünç derecede küçüktür. Mısır gevreği kutuları tipik olarak 30-40g porsiyonlar listeler. Gerçek bir kase 80-100g'dır — bu nedenle sayıları ikiye veya üçe katlayın.
    </p>

    <h2>8. Gizli karbonhidratlar ve sinsi içerikler</h2>
    <ul>
      <li>Soslar: BBQ, teriyaki, ketçap — yemek kaşığı başına 6-15g</li>
      <li>Salata sosları: 2 yemek kaşığı başına 7g</li>
      <li>Protein barları: 15-30g, çoğunlukla şeker</li>
      <li>Aromalı yoğurtlar: 20g+ eklenmiş şeker</li>
      <li>Panelı proteinler: parça başına 10-15g</li>
      <li>Smoothie'ler: bir içecekte 40-70g karbonhidrat</li>
      <li>Restoran wok sosu: yemek başına 25-40g</li>
    </ul>
    <p>
      "Sağlıklı" düşük karbonhidrat anlamına gelmez. Bir granola kasesi 70g'ı aşabilir.
    </p>

    <h2>9. Tartma ve göz kararı</h2>
    <p>
      Pişmiş pirinç: fincan başına 45g karbonhidrat — ancak 1 fincan nasıl aldığınıza bağlı olarak %30 değişir. Bir mutfak terazisi ($15) tahmin yürütmeyi ortadan kaldırır. Gözünüzü kalibre etmek için iki hafta boyunca yüksek karbonhidratlı temel gıdaları (pirinç, makarna, ekmek, mısır gevreği, patates) tartın. Bundan sonra tahminler ±%10 içinde güvenilir hale gelir.
    </p>

    <h2>10. Porsiyon başına yaygın karbonhidratlar</h2>
    <ul>
      <li>1 fincan pişmiş pirinç (158g): 45g</li>
      <li>1 fincan pişmiş makarna (140g): 43g</li>
      <li>1 orta boy patates (173g): 37g</li>
      <li>1 dilim ekmek: 15-20g</li>
      <li>1 un tortilla (10"): 35g</li>
      <li>1 muz (orta boy): 27g</li>
      <li>1 elma (orta boy): 25g</li>
      <li>1 fincan süt: 12g</li>
      <li>1 fincan brokoli: 6g (4g net)</li>
      <li>1 fincan çilek: 15g (8g net)</li>
    </ul>

    <h2>11. Aktiviteye göre karbonhidrat ayarlama</h2>
    <p>
      Karbonhidratlar, anaerobik ve yüksek yoğunluklu çalışmayı besler. 90 dakikalık bir futbol maçı ~200g depolanmış glikojen yakar. Hareketsizseniz, günlük karbonhidrat ihtiyacı çok daha düşüktür. Sporcular için yaklaşık aralıklar: hafif antrenman için 3-5 g/kg, orta için 5-7 g/kg, ağır dayanıklılık için 6-10 g/kg. Karbonhidrat zamanlamasını egzersizlerle (öncesi, sırası, sonrası) hizalayın ve dinlenme günlerinde karbonhidratları azaltın.
    </p>

    <h2>12. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>"Fincan"ı gevşek kullanmak.</strong> Gevşek dolu bir fincan ile sıkı dolu bir fincan pirinç %50 farklılık gösterir.
      </li>
      <li>
        <strong>Pişmiş ve çiğ farkını görmezden gelmek.</strong> 100g çiğ makarna ~75g karbonhidrat. 100g pişmiş makarna ~25g karbonhidrat. Etiketin hangisine atıfta bulunduğunu bilin.
      </li>
      <li>
        <strong>Sıvı karbonhidratları unutmak.</strong> Meyve suyu, soda, aromalı kahve ve spor içecekleri fark etmeden 60g ekleyebilir.
      </li>
      <li>
        <strong>"Keto" etiketlerine güvenmek.</strong> Keto kurabiyeleri genellikle maltitol kullanır — yarısını çıkarın, tamamını değil.
      </li>
      <li>
        <strong>Sebzeleri takıntılı bir şekilde saymak.</strong> Nişastalı olmayan sebzeler (yapraklı yeşillikler, brokoli, biber) keto'da bile özgürce yenmeye değerdir.
      </li>
    </ul>

    <h2>13. Sayılarınızı hesaplayın</h2>
    <p>
      Hedefinizi (keto, diyabetik, atletik, bakım) ve kalori hedefinizi girmek ve hedefleyeceğiniz günlük bir karbonhidrat sayısı almak için aşağıdaki hesaplayıcıyı kullanın.
    </p>
    <p>
      <a href="/tools/carbohydrate-calculator">Karbonhidrat hesaplayıcı</a>
      <a href="/tools/macro-calculator">Makro hesaplayıcı</a>
      <a href="/tools/calorie-calculator">Kalori hesaplayıcı</a>
    </p>
  </>
);