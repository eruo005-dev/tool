import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir ipoteği yeniden finanse etmek, mevcut kredinizi yenisiyle değiştirmek anlamına gelir &mdash;
      genellikle daha düşük bir faiz oranı elde etmek, vadeyi değiştirmek, değişken faizli krediden (ARM) sabit faizliye geçmek veya
      ev sermayesinden nakit çekmek için. Basit vaat şudur: &ldquo;Faiz oranınızı düşürün, taksidinizi
      düşürün.&rdquo; Gerçeklik daha karmaşıktır çünkü kapanış maliyetleri, kalan vade,
      vergi etkileri ve evle ilgili planlarınız hesabı değiştirir. Ayda 300$ tasarruf sağlayan bir yeniden finansman,
      18 ay içinde satarsanız veya vadenizi on yıl uzatırsanız yine de zarar olabilir. Bu rehber, başabaş noktası formülünde, gerçekten önemli olan faiz oranı farklarında, nakit çekme takaslarında ve yeniden finansmanın açıkça doğru veya açıkça yanlış olduğu bir avuç durumda size yol gösterir.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. Başabaş noktası formülü</h2>
    <p>
      Temel hesaplama:
    </p>
    <pre>{`başabaş ay = toplam kapanış maliyetleri / aylık tasarruf`}</pre>
    <p>
      Kapanış maliyetleri 6.000$ ve ayda 250$ tasarruf ediyorsanız, başabaş noktası
      <code> 6000 / 250 = 24 ay</code> olur. Evde 24 aydan daha uzun süre kalmayı planlıyorsanız, yeniden finansman net kârlıdır. 18 ay içinde taşınacaksanız, bu bir kayıptır. <strong>Soru &ldquo;faiz oranı daha düşük mü?&rdquo; değil &mdash;
      &ldquo;başabaş noktasının ötesinde kalacak mısınız?&rdquo; sorusudur.</strong>
    </p>

    <h2>2. Kapanış maliyetlerine neler dahildir</h2>
    <ul>
      <li>Başvuru ücreti: 75-500$</li>
      <li>Kredi oluşturma ücreti: Kredi tutarının %0,5-1'i</li>
      <li>Ekspertiz: 400-700$</li>
      <li>Tapu araştırması ve sigortası: 400-900$</li>
      <li>Kayıt ücretleri: 50-250$</li>
      <li>Kredi raporu: 25-75$</li>
      <li>İndirim puanları (isteğe bağlı): Faiz indirimi puanı başına kredinin %1'i</li>
      <li>Emanet fonu: birkaç aylık vergi ve sigorta</li>
    </ul>
    <p>
      Tipik toplam: <strong>Kredi tutarının %2-5'i</strong>. 400 bin dolarlık bir ipotekte bu,
      8 bin-20 bin dolar eder. Bazı maliyetler yeni krediye dahil edilir, ancak dahil edilen maliyetler yine de başabaş noktasını etkiler.
    </p>

    <h2>3. Faiz oranı farkı kuralı</h2>
    <p>
      Geçmişteki kılavuz &ldquo;faiz oranları %2 daha düşükse yeniden finanse edin&rdquo; şeklindeydi. Günümüzün
      daha düşük kapanış maliyetleri ve çevrimiçi borç verenlerle, <strong>%0,75-1'lik bir faiz oranı düşüşü</strong> genellikle
      5+ yıl kalacaksanız yeterlidir. 400 bin dolarlık 30 yıllık bir kredi için hızlı referans:
    </p>
    <ul>
      <li>%0,25 daha düşük: Ayda ~60$ tasarruf (nadiren değer)</li>
      <li>%0,50 daha düşük: Ayda ~120$ tasarruf (marjinal, maliyetlere bağlı)</li>
      <li>%1,00 daha düşük: Ayda ~250$ tasarruf (genellikle değer)</li>
      <li>%1,50 daha düşük: Ayda ~380$ tasarruf (büyük olasılıkla değer)</li>
    </ul>

    <h2>4. Vade sıfırlama tuzağına dikkat edin</h2>
    <p>
      30 yıllık bir ipoteğin 7. yılındaysanız ve yeni bir 30 yıllığa yeniden finanse ederseniz,
      faiz ödemelerine 7 yıl daha eklemiş olursunuz. Aylık ödeme düşer, ancak
      ömür boyu faiz maliyeti artabilir. Bundan kaçınmanın iki yolu:
    </p>
    <ul>
      <li>Daha kısa bir vadeye (15 veya 20 yıl) yeniden finanse edin</li>
      <li>Yeni 30 yıllık ödemeyi eski ödeme tutarınızda tutun &mdash; erken ödeme farkı kapatır</li>
    </ul>

    <h2>5. 30 yıldan 15 yıla geçmeli misiniz?</h2>
    <p>
      15 yıllık krediler genellikle 30 yıllık faiz oranlarının ~%0,5-0,75 altında fiyatlanır. Ömür boyu
      faizden büyük ölçüde tasarruf edersiniz, ancak ödemeler ~%50 daha yüksektir. Şu durumlarda yapın:
    </p>
    <ul>
      <li>Daha yüksek aylık ödemeyi emeklilik birikimlerinizi kısmadan karşılayabiliyorsanız</li>
      <li>Planlanan emekliliğinize 15 yıl kala evin ödenmiş olmasını istiyorsanız</li>
      <li>Acil durum fonunuz tamamen doluysa ve borçlarınız kontrol altındaysa</li>
    </ul>
    <p>
      401(k) katkılarınızı kısmak veya acil durum fonundan vazgeçmek anlamına geliyorsa yapmayın.
      %6 faizli bir ipoteği daha yavaş öderken, %7+ getiri sağlayan endeks fonlarına yatırım yapmak yine de
      daha kârlıdır.
    </p>

    <h2>6. Nakit çekmeli yeniden finansman takasları</h2>
    <p>
      Nakit çekmeli yeniden finansman, anaparanızı artırır ve size farkı verir. Makul
      kullanımlar:
    </p>
    <ul>
      <li>Yüksek faizli borçları ödemek (&gt;%10 <a href="/learn/apr">APR</a>)</li>
      <li>Mülk değerini artıran büyük ev iyileştirmeleri</li>
      <li>Ticari krediden daha düşük maliyetle bir iş kurmak veya yeniden sermayelendirmek</li>
    </ul>
    <p>
      Makul olmayan kullanımlar:
    </p>
    <ul>
      <li>Tatiller, arabalar, yaşam tarzı harcamaları</li>
      <li>Yeni ipotek faiz oranının üzerinde getiri sağlaması beklenmeyen yatırımlar</li>
      <li>Davranış değişikliği olmadan borç konsolidasyonu</li>
    </ul>

    <h2>7. Değişken faizli krediden (ARM) sabit faizliye dönüşümler</h2>
    <p>
      Değişken faizli ipotekler (ARM'ler) tipik olarak ilk 5-10 yıl sabit faizli kredilerin altında başlar,
      ardından bir referans orana göre sıfırlanır. Sabit dönem sona eriyor ve faiz oranları
      yükselmişse, sabit faizliye yeniden finansman öngörülebilirliği kilitler. Sabit faizli oranlar
      ARM'nizin sabit döneminin altına düştüğünde, yeniden finansman kalıcı tasarruf sağlar. Faiz
      oranlarının yükseldiği bir ortamda, bu kararda erken olmak çok değerlidir.
    </p>

    <h2>8. Sermayeniz olduğunda FHA'dan konvansiyonele geçiş</h2>
    <p>
      FHA kredileri, %10'dan az peşinat ödediyseniz kredinin ömrü boyunca ipotek sigortası primi (MIP) taşır.
      %20 sermaye oluşturduğunuzda, konvansiyonel bir krediye yeniden finansman MIP'yi düşürür &mdash;
      genellikle faiz oranı değişikliğinden bağımsız olarak ayda 150-300$ tasarruf sağlar.
      Eviniz kayda değer ölçüde değer kazandığında bu kontrolü yapın.
    </p>

    <h2>9. Krediniz ve Borç/Gelir Oranınız (DTI) önemlidir</h2>
    <p>
      Borç verenler, yeniden finansmanları yeni ipoteklerle aynı şekilde değerlendirir. Asgari
      eşikler:
    </p>
    <ul>
      <li>Konvansiyonel için FICO 620+ (740+ en iyi faiz oranlarını alır)</li>
      <li>DTI &lt; %43 (%36'nın altı idealdir)</li>
      <li>PMI olmaması için %20 sermaye (FHA/VA için daha az)</li>
      <li>2+ yıllık istikrarlı gelir belgesi</li>
    </ul>
    <p>
      Orijinal krediden bu yana mali durumunuz kötüleştiyse, mevcut olandan daha iyi bir faiz oranına hak kazanamayabilirsiniz.
    </p>

    <h2>10. &ldquo;Kapanış maliyetsiz&rdquo; seçenek</h2>
    <p>
      Borç verenler bazen, biraz daha yüksek bir faiz oranı (tipik olarak %0,25-0,5 daha yüksek) karşılığında veya maliyetleri kredi bakiyesine dahil ederek kapanış maliyetlerini üstlenir. Şu durumlarda mantıklıdır:
    </p>
    <ul>
      <li>Peşin maliyetleri geri kazanacak kadar uzun süre kalmayı planlamıyorsanız</li>
      <li>Kapanış için elde nakit paranız yoksa</li>
      <li>Faiz oranlarının tekrar düşmesini bekliyorsanız ve yakında tekrar yeniden finanse edebilirseniz</li>
    </ul>
    <p>
      Her iki şekilde de karşılaştırma yapın — maliyetler peşin ödenmiş ve paketlenmiş olarak — ve
      5 yıllık toplam maliyeti kontrol edin.
    </p>

    <h2>11. Zamanlama ve faiz oranı kilitlemeleri</h2>
    <p>
      İpotek faiz oranları bir günde %0,125-0,25 oynayabilir. Başvurduğunuzda, faiz oranınızı 30-60
      gün için kilitleyin. Daha uzun kilitler orantılı olarak daha pahalıdır. Dibe vurmayı denemeyin; eğer hesap
      bugünkü faiz oranında çalışıyorsa, kapatın. Faiz oranları daha sonra %0,5 daha düşerse,
      tekrar yeniden finanse edebilirsiniz.
    </p>

    <h2>12. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Kapanış maliyetlerini görmezden gelmek.</strong> 15 bin dolar maliyetle &ldquo;daha düşük faiz oranı&rdquo;
        ücretsiz değildir.
      </li>
      <li>
        <strong>Vadeyi düşünmeden uzatmak.</strong> Ayda 200$ tasarruf etmek için 7 yıllık ilerlemeyi silmek.
      </li>
      <li>
        <strong>Yaşam tarzı için nakit çekmek.</strong> Teminatsız yaşam tarzı harcamalarını
        teminatlı ipotek borcuna dönüştürmek.
      </li>
      <li>
        <strong>Taşınmaya yakın bir zamanda yeniden finanse etmek.</strong> Başabaş noktasına ulaşamamak, kapanış
        maliyetlerini çöpe atmak anlamına gelir.
      </li>
      <li>
        <strong>Borç verenleri karşılaştırmamak.</strong> Aynı borçlu için faiz oranı ve maliyet teklifleri %0,5+ farklılık gösterebilir. 3-5 kredi tahmini alın.
      </li>
    </ul>

    <h2>13. Rakamları hesaplayın</h2>
    <p>
      Mevcut bakiyenizi, faiz oranınızı ve kalan vadenizi, ayrıca teklif edilen yeni faiz oranını ve
      kapanış maliyetlerini girerek tam başabaş ayınızı ve ömür boyu tasarrufunuzu görün.
    </p>
    <p>
      <a href="/tools/refinance-calculator">Yeniden finansman hesaplayıcısı</a>
      <a href="/tools/mortgage-calculator">İpotek hesaplayıcısı</a>
      <a href="/tools/loan-calculator">Kredi hesaplayıcısı</a>
    </p>
  </>
);