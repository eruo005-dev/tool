import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Kiralama veya satın alma, en yaygın ve en çok tartışmalı kişisel finans kararlarından biridir.
      En yüksek sesler &ldquo;kiralama bir kazıktır&rdquo; ya da &ldquo;satın almak sermaye israfıdır&rdquo; der.
      Her iki ifade de fazla basittir. Gerçek cevap, aracı ne kadar süre tutacağınıza, kaç kilometre yaptığınıza,
      yeni özelliklere ne kadar değer verdiğinize, vergi durumunuza ve aracın amortisman eğrisinde nerede olduğuna bağlıdır.
      Bu rehber, her iki seçenek için toplam sahip olma maliyetini karşılaştırır, kalıntı değerleri,
      kilometre sınırlarını, iş kullanımı kesintilerini açıklar ve kiralamanın satın almaya üstün geldiği belirli senaryoları
      &mdash; ve satın almanın (özellikle ikinci el) kazandığı çok daha fazla senaryoyu adım adım inceler.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. Aslında ne için ödeme yapıyorsunuz</h2>
    <p>
      <strong>Satın alma</strong>: aracın tamamı için (takas hariç) ödeme yapar, satana kadar elinizde tutar
      ve tüm amortismanı üstlenirsiniz.
    </p>
    <p>
      <strong>Kiralama</strong>: kiralama süresi boyunca gerçekleşen amortisman artı bir finansman ücreti (para faktörü) için ödeme yapar,
      ardından aracı geri verirsiniz.
    </p>
    <pre>{`kira ödemesi ≈ (sermaye maliyeti - kalıntı değer) / süre + para faktörü + vergi`}</pre>
    <p>
      45.000$'lık bir araç 36 ay sonra 27.000$ değerindeyse, 36 ay boyunca 18.000$'lık amortisman artı faizi finanse ediyorsunuz
      = ~550$/ay. Aynı aracı krediyle satın almak 750$/ay olur, ancak sonunda 27.000$ değerinde bir varlığa sahip olursunuz.
    </p>

    <h2>2. Zaman içinde toplam sahip olma maliyeti</h2>
    <p>
      40.000$'lık bir sedan için 5 yıllık karşılaştırma:
    </p>
    <pre>{`Satın alma (60 ay kredi, %6):
  Ödemeler:       46.400$
  5 yıl sonra:    ~18.000$ değerinde
  Net maliyet:    28.400$

Kiralama (3 yıl, ardından yeni 3 yıl):
  Ödemeler (6 yıl): 42.000$
  6 yılda kalıntı:  0$
  Net maliyet:      42.000$`}</pre>
    <p>
      5-6 yıl boyunca satın almak tipik olarak 10.000-20.000$ daha ucuzdur. Fark, aracı ne kadar uzun süre tutarsanız o kadar açılır.
    </p>

    <h2>3. Amortisman eğrisi</h2>
    <p>
      Yeni bir araç 1. yılda değerinin ~%20'sini, 2. yılda ~%15'ini, ardından 5. yıla kadar yılda ~%10'unu kaybeder.
      1-3. yıllar, kilometre başına sahip olmanın en pahalı yıllarıdır.
    </p>
    <ul>
      <li>0-3. yıllar: ~%40-50 amortisman (kiralama tatlı noktası)</li>
      <li>3-6. yıllar: ~%20 amortisman</li>
      <li>6-10. yıllar: ~%10-15 amortisman</li>
    </ul>
    <p>
      2-3 yaşında ikinci el satın almak, amortisman sonrası değer aşamasını yakalar. Bu nedenle ikinci el satın almak,
      çoğu hane için matematiksel olarak baskın seçenektir.
    </p>

    <h2>4. Kalıntı değer açıklaması</h2>
    <p>
      Kalıntı değer, üreticinin kiralama sonunda garantili geri alım fiyatıdır. Yüksek kalıntı değerler = daha ucuz kira ödemeleri.
      Farklı modellerin kalıntı değerleri çok farklıdır: Toyota ve Honda değerini en iyi korur, Alman lüksü ve çoğu EV hızlı amorti olur.
      Kiralamaları karşılaştırırken, 36 ay sonra kalıntı değerin MSRP'ye oranına bakın &mdash; %55+ mükemmeldir, %45'in altı yüksek kira ödemeleri anlamına gelir.
    </p>

    <h2>5. Kilometre sınırları</h2>
    <p>
      Standart kiralamalar yılda 10.000, 12.000 veya 15.000 kilometreye izin verir. Fazla kilometre başına 0,15-0,30$ maliyet vardır.
      Yılda 20.000 km yapan bir sürücü, 12.000 km'lik bir kiralama ile 3 yıllık sürede 7.200-14.400$ fazla öder.
      Yılda 15.000 km'den fazla yapıyorsanız, kiralama neredeyse her zaman yanlıştır. Daha yüksek kilometreli kiralama paketleri mevcuttur,
      ancak ek amortismanı peşin fiyatlandırır.
    </p>

    <h2>6. Para faktörü</h2>
    <p>
      Kiralamalar faiz oranını &ldquo;para faktörü&rdquo; olarak gizler. Dönüştürmek için:
    </p>
    <pre>{`<a href="/learn/apr">APR</a> ≈ para faktörü × 2400`}</pre>
    <p>
      Para faktörü 0,00250 = yaklaşık %6 APR. Her zaman para faktörünü sorun ve tipik bir oto kredisi oranıyla karşılaştırın.
      Bayiler, kredi oranlarını artırdıkları gibi kar için para faktörünü de artırır.
    </p>

    <h2>7. Kiralamanın gerçekten mantıklı olduğu durumlar</h2>
    <ul>
      <li>
        <strong>Vergi kesintileri ile iş kullanımı.</strong> Araç öncelikle iş için kullanılıyorsa, kira ödemeleri (iş kullanım yüzdesi dahil)
        genellikle satın almadan daha avantajlı bir şekilde düşülebilir.
      </li>
      <li>
        <strong>Her zaman en yeni modeli istiyorsunuz.</strong> Her 3 yılda bir aracını değiştirecek biri her iki şekilde de benzer para harcar,
        ancak kiralama satış zahmetini ortadan kaldırır.
      </li>
      <li>
        <strong>Tüm süre boyunca garanti kapsamı istiyorsunuz.</strong> Kiralamalar tipik olarak 3 yıllık tampondan tampona garanti süresiyle eşleşir.
      </li>
      <li>
        <strong>Teknoloji riski olan elektrikli araçlar.</strong> EV teknolojisi hızla gelişiyor ve piller bozuluyor. Kiralama bu riski üreticiye aktarır.
      </li>
      <li>
        <strong>Yüksek kalıntı değer + düşük para faktörü promosyonları.</strong> Üretici teşvikleri bazen belirli bir kiralamayı eşdeğer finansmandan daha ucuz hale getirir.
      </li>
    </ul>

    <h2>8. Satın almanın açıkça daha iyi olduğu durumlar</h2>
    <ul>
      <li>Araçları 6+ yıl tutuyorsanız</li>
      <li>Yılda 15.000 km'den fazla yapıyorsanız</li>
      <li>İç mekanı yıpratan çocuklarınız, evcil hayvanlarınız veya hobileriniz varsa (kiralama hasar ücretleri)</li>
      <li>Aracı modifiye etmek istiyorsanız</li>
      <li>Nakitiniz varsa veya ödemeyi zorlanmadan karşılayabiliyorsanız</li>
      <li>Düşük kilometreli 2-3 yaşında ikinci el satın alabiliyorsanız</li>
    </ul>

    <h2>9. İkinci el satın alın: sessiz kazanç</h2>
    <p>
      Büyük bir markadan 3 yaşında sertifikalı ikinci el (CPO) bir araç:
    </p>
    <ul>
      <li>Yeni MSRP'nin ~%60'ına mal olur</li>
      <li>Genellikle kalan fabrika garantisine sahiptir</li>
      <li>En dik amortismanı çoktan atlatmıştır</li>
      <li>Sürekli sahiplik, yıllık toplam sahip olma maliyetini düşürür</li>
    </ul>
    <p>
      Çoğu hane için bu finansal olarak en uygun yoldur. Yeni araç kiralama ve yeni araç satın alma, 10 yıllık maliyet bazında CPO'ya kaybeder.
    </p>

    <h2>10. Kiralama sonu seçenekleri</h2>
    <p>
      Kiralama sonunda şunları yapabilirsiniz:
    </p>
    <ul>
      <li>Aracı iade edin (en yaygın)</li>
      <li>Kalıntı değerden satın alın (piyasa değeri daha yüksekse bazen iyi bir anlaşma)</li>
      <li>Başka bir kiralama veya satın alma için takas yapın</li>
    </ul>
    <p>
      2021-2023'te ikinci el araç değerleri fırladı ve 2020'de belirlenen kalıntı değerler aniden piyasanın altında kaldı &mdash; kiralama satın almaları mevcut en iyi araba fırsatları haline geldi.
      Aracı iade etmeden önce her zaman piyasa değerini kalıntı değerle karşılaştırın.
    </p>

    <h2>11. Gap sigortası ve aşınma-yıpranma</h2>
    <p>
      Kiralamalar neredeyse her zaman gap sigortası gerektirir (borcunuz ile aracın toplamda değeri arasındaki farkı kapsar). Genellikle kiralamaya dahildir.
      İadede aşınma-yıpranma ücretleri önemli olabilir: kredi kartı boyutunu aşan göçükler, çizikler, lekeli döşeme, fazla kilometre, hatta olağandışı lastik aşınması.
      İadede 500-2.000$ bütçe ayırın.
    </p>

    <h2>12. Psikolojik tuzak</h2>
    <p>
      Kiralama pazarlaması aylık ödemeye çok yüklenir: &ldquo;Sadece 399$/ay!&rdquo; Bu, ödemeye odaklanır, toplam maliyete değil.
      55.000$'lık bir araç için 399$'lık bir kiralama ve her 3 yılda bir değiştirme, 30 yılda 143.600$+ ve ortada hiçbir şey bırakmaz.
      Aynı 30 yıl boyunca satın alıp 10 yıl tutmak 90-100.000$'a mal olur ve 30. yılda çalışan bir araç bırakır.
    </p>

    <h2>13. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Kira ödemesini kredi ödemesiyle karşılaştırmak.</strong> Farklı ürünler; toplam 6 yıllık veya 10 yıllık maliyeti karşılaştırın.
      </li>
      <li>
        <strong>Kilometre gerçeğini görmezden gelmek.</strong> &ldquo;Gelecek yıl daha az yaparım.&rdquo;
        Yapmazsınız.
      </li>
      <li>
        <strong>Yüksek para faktörü imzalamak.</strong> Her zaman para faktörünü pazarlık edin &mdash;
        bayiler nadiren yapabileceklerinin en iyisini sunar.
      </li>
      <li>
        <strong>Kiralamayı kiralama olarak görmek.</strong> Bakım, sigorta, hasar ve fazla kilometre için hala sorumlusunuz.
      </li>
      <li>
        <strong>5 yıllık matematiği yapmadan kiralama yapmak.</strong> Sayıları her iki şekilde de en az bir kez hesaplayın.
      </li>
    </ul>

    <h2>14. Sayıları hesaplayın</h2>
    <p>
      Araç fiyatını, kredi koşullarını, kira ödemesini, kalıntı değeri ve beklenen yıllık kilometreyi girerek planlanan sahiplik süreniz boyunca hangisinin daha avantajlı olduğunu görün.
    </p>
    <p>
      <a href="/tools/lease-vs-buy-calculator">Kiralama vs satın alma hesaplayıcısı</a>
      <a href="/tools/auto-loan-calculator">Oto kredisi hesaplayıcısı</a>
      <a href="/tools/loan-calculator">Kredi hesaplayıcısı</a>
    </p>
  </>
);