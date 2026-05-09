import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Kesirler, toplama, çarpma veya ondalığa çevirme işlemlerinde kuralların değişmesi nedeniyle olduğundan daha zor görünür. 1/3 ile 1/4'ü toplamak ortak payda gerektirir; çarpmak gerektirmez. 24/36'yı sadeleştirmek OBEB bulmayı gerektirir; 1/7'yi ondalığa çevirmek sonsuz tekrar eden bir desen verir ve bu da insanları aritmetik hata yaptıklarını düşündürür. 2 3/4 gibi tam sayılı kesirler, ya bileşik kesre çevirme ya da ayrı tutma gibi ekstra bir adımı gizler. Bu rehber, terimleri (basit, bileşik, tam sayılı), dört işlemi çözümlü örneklerle, en büyük ortak bölen kullanarak sadeleştirmeyi, tekrar eden ondalıklar dahil ondalığa çevirmeyi ve kesir aritmetiğini gizemli değil mekanik hissettiren püf noktalarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Terimler</h2>
    <p>
      Bir kesrin üstünde <strong>pay</strong>, altında <strong>payda</strong> bulunur. <strong>Basit kesirler</strong> payı paydadan küçük olanlardır (3/4, 2/7). <strong>Bileşik kesirler</strong> payı paydadan büyük veya eşit olanlardır (7/4, 5/5). <strong>Tam sayılı kesirler</strong> bir tam sayı ile bir basit kesri birleştirir (1 3/4). Her bileşik kesir tam sayılı kesre ve tersi şekilde yazılabilir.
    </p>
    <pre>{`7/4 = 1 3/4         (bileşik → tam sayılı: 7÷4 = 1 kalan 3)
2 1/3 = 7/3         (tam sayılı → bileşik: 2×3 + 1 = 7)
5/5 = 1             (bir tam sayıya eşit bileşik kesir)`}</pre>

    <h2>OBEB ile Sadeleştirme</h2>
    <p>
      Pay ve paydayı <strong>en büyük ortak bölenlerine</strong> bölün. 24/36 için OBEB = 12, yani 24/36 = 2/3. 15/25 için OBEB = 5, yani 15/25 = 3/5. Öklid algoritması OBEB'i hızlıca bulur: büyük sayıyı bölümün kalanıyla tekrar tekrar değiştirin. Sorun özel bir form istemediği sürece her zaman sonunda sadeleştirin.
    </p>
    <pre>{`24/36  → obeb 12 → 2/3
15/25  → obeb 5  → 3/5
100/75 → obeb 25 → 4/3 → 1 1/3
42/56  → obeb 14 → 3/4`}</pre>

    <h2>Toplama ve çıkarma: ortak payda gerekir</h2>
    <p>
      1/3 ve 1/4'ü doğrudan toplayamazsınız. <strong>En küçük ortak paydayı</strong> (EKOP) bulun, her iki kesri bu payda üzerinden yeniden yazın, ardından payları toplayın. 1/3 ve 1/4 için EKOP = 12, yani 1/3 = 4/12 ve 1/4 = 3/12, sonuç 7/12.
    </p>
    <pre>{`1/3 + 1/4
  EKOP = 12
  = 4/12 + 3/12
  = 7/12

5/6 − 1/4
  EKOP = 12
  = 10/12 − 3/12
  = 7/12`}</pre>
    <p>
      Paydalar ortak çarpan içermediğinde, EKOP çarpımlarıdır. Ortak çarpan içerdiklerinde, EKOP'u her paydanın benzersiz asal çarpanlarını en yüksek üsleriyle çarparak bulun.
    </p>

    <h2>Çarpma: doğrudan çarpın</h2>
    <p>
      Payları kendi arasında, paydaları kendi arasında çarpın, ardından sadeleştirin:{" "}
      <code>a/b &times; c/d = (ac)/(bd)</code>. Ortak payda gerekmez. Tam sayılı kesirler için önce bileşik kesre çevirin.
    </p>
    <pre>{`2/3 × 4/5 = 8/15
1/2 × 3/4 = 3/8
1 1/2 × 2/3 = 3/2 × 2/3 = 6/6 = 1

Kısayol: çarpmadan önce sadeleştirin
  4/9 × 3/8 = (4/8) × (3/9) = 1/2 × 1/3 = 1/6`}</pre>

    <h2>Bölme: ters çevirip çarpın</h2>
    <p>
      İkinci kesri ters çevirin ve çarpın: <code>a/b &divide; c/d = a/b &times; d/c = ad/bc</code>.
      Bu kural keyfi görünse de, bölmenin tersiyle çarpma olarak tanımından kaynaklanır.
    </p>
    <pre>{`2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6
1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2
3/4 ÷ 6    = 3/4 × 1/6 = 3/24 = 1/8`}</pre>

    <h2>Ondalığa çevirme</h2>
    <p>
      Payı paydaya bölün. Bazı kesirler sonlanır (3/4 = 0.75); bazıları tekrar eder (1/3 = 0.3333..., 1/7 = 0.142857142857...). Bir kesir, ancak ve ancak sadeleştirilmiş paydasının asal çarpanları yalnızca 2 ve 5 ise sonlanır. Diğer her şey tekrar eder.
    </p>
    <pre>{`1/2  = 0.5          (sonlanır; payda = 2)
3/8  = 0.375        (sonlanır; payda = 8 = 2³)
1/3  = 0.333...     (tekrar eder; payda = 3)
1/7  = 0.142857...  (6 basamaklı tekrar bloğu)
1/11 = 0.090909...
1/6  = 0.1666...`}</pre>

    <h2>Tekrar eden ondalığı kesre çevirme</h2>
    <p>
      <code>x = 0.3333...</code> olsun. O zaman <code>10x = 3.3333...</code> ve çıkarma işlemi <code>9x = 3</code> verir, yani <code>x = 3/9 = 1/3</code>. Daha uzun bir tekrar bloğu için, <em>n</em> tekrar uzunluğu olmak üzere <code>10^n</code> ile çarpın: <code>0.142857142857...</code> için <code>10^6</code> ile çarpın ve çıkarın.
    </p>

    <h2>Kesirleri karşılaştırma</h2>
    <p>
      Üç teknik. Birincisi, ortak paydaya çevirip payları karşılaştırın. İkincisi, çapraz çarpma: <code>a/b</code> ile <code>c/d</code> karşılaştırmasında <code>ad</code> ve <code>bc</code>'den hangisi büyükse cevabı verir. Üçüncüsü, ondalığa çevirme (bir yığın kesir için en hızlısı, kesin karşılaştırma için daha yavaş).
    </p>
    <pre>{`5/8 &gt; 3/5 mi?
  Çapraz çarpma: 5×5 = 25 vs 3×8 = 24
  25 &gt; 24, yani 5/8 &gt; 3/5  ✓`}</pre>

    <h2>Tam sayılı kesirler: iki yaklaşım</h2>
    <p>
      Toplama için tam kısımları ayrı tutabilirsiniz: <code>2 1/3 + 1 1/4 = 3 + (1/3 + 1/4) = 3 + 7/12 = 3 7/12</code>. Çarpma ve bölme için her zaman önce bileşik kesre çevirin&mdash;doğrudan çarpma yaklaşımı klasik bir tuzaktır.
    </p>

    <h2>Sık yapılan hatalar</h2>
    <p>
      <strong>Pay ve paydaları doğrudan toplamak.</strong> 1/3 + 1/4, 2/7 DEĞİLDİR. Önce ortak payda bulmalısınız. Bu en yaygın hatadır.
    </p>
    <p>
      <strong>Bölerken ters çevirmeyi unutmak.</strong> <code>2/3 &divide; 4/5</code>, <code>8/15</code> DEĞİLDİR; bu çarpım sonucudur. Bölme, ikinci kesri ters çevirip çarpmayı gerektirir.
    </p>
    <p>
      <strong>Tam sayılı kesirleri çevirmeden çarpmak.</strong> <code>2 1/2 &times; 3 1/3</code>, <code>6 1/6</code> DEĞİLDİR. Önce her birini bileşik kesre çevirin: <code>5/2 &times; 10/3 = 50/6 = 25/3 = 8 1/3</code>.
    </p>
    <p>
      <strong>Çarpmadan önce aşırı sadeleştirme.</strong> Çarpma işleminde herhangi bir paydan herhangi bir paydaya karşı bir çarpanı sadeleştirebilirsiniz, ancak toplama veya çıkarmada yapamazsınız. <code>2/3 + 3/4</code> işleminde çapraz sadeleştirme yapmayın.
    </p>
    <p>
      <strong>Tekrar eden ondalığı yuvarlama hatasıyla karıştırmak.</strong> 1/3 gerçekten sonsuza kadar 3'lerle 0.3333... şeklindedir, sonlu bir basamak dizisi olan 0.3333333 değil. Hesap makinesi 0.33333333 gösterdiğinde, kısaltma yapıyordur.
    </p>
    <p>
      <strong>Paydaya 0 yazmak.</strong> Sıfıra bölme tanımsızdır. <code>3/0</code> bir sayı değildir; <code>/0</code>'a giden herhangi bir işlem zinciri yanlış yolda olduğunuzu gösterir.
    </p>
    <p>
      <strong>Cevabı sadeleştirmeden bırakmak.</strong> Çoğu öğretmen ve çoğu gerçek dünya bağlamı sadeleştirilmiş form bekler. 6/8, 3/4 olmalıdır; 10/4, 5/2 veya 2 1/2 olmalıdır.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Ortak payda aritmetiğini atlayın ve adımları çözüm gösterimiyle ele alması için <a href="/tools/fraction-calculator">kesir hesaplayıcımızı</a> kullanın. Sorun aslında gizli bir orantı olduğunda <a href="/tools/ratio-calculator">oran hesaplayıcı</a> ile, bir kesri yüzdeye çevirmenin yaygın durumu için de <a href="/tools/percentage-calculator">yüzde hesaplayıcı</a> ile birlikte kullanın.
    </p>
  </>
);