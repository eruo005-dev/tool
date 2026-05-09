import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      &ldquo;Gücünüzün yettiği kadar&rdquo; kiralama, bunu ev sahibinize, bütçe tablonuza veya gelecekteki kendinize sorup sormadığınıza bağlıdır. Ev sahipleri, brüt gelirin aylık kiranın 3 katı olmasını ister. Finansal planlamacılar, net gelirinizin en fazla %30&rsquo;unu kiraya harcamanızı önerir. 50/30/20 çerçevesi, kirayı gelirinizin &ldquo;ihtiyaçlar&rdquo; yarısına dahil eder. Bu rehber, her kuralı adım adım açıklar, nerede çeliştiklerini gösterir ve doğru rakamın, maaşınızdan çok diğer sabit maliyetlerinize (öğrenci kredileri, araba ödemesi, çocuk bakımı) bağlı olduğunu açıklar. Sonunda, ulaşılabilir değil, gerçekçi bir kira tavanınız olacak.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. %30 kira kuralı</h2>
    <p>
      En eski temel kural: <strong>brüt aylık gelirinizin</strong> en fazla %30&rsquo;unu kiraya harcayın. Yılda 72.000$ (ayda 6.000$ brüt) kazanıyorsanız, tavan ayda 1.800$&rsquo;dır.
    </p>
    <pre>{`max kira = brüt aylık gelir × 0.30`}</pre>
    <p>
      Bu kural, 1969 ABD konut politikasında kodlanmıştır ve güncellenmemiştir. Hızlı bir mantık kontrolü olarak işe yarar, ancak yaşam maliyetinin yüksek olduğu şehirlerde %40-50&rsquo;nin artık normal olduğu ve düşük gelirli durumlarda %30&rsquo;un ezici olduğu durumlarda geçerliliğini kaybeder.
    </p>

    <h2>2. Net gelir versiyonu (daha gerçekçi)</h2>
    <p>
      Daha iyi bir formülasyon <strong>net maaş</strong> (vergiler, 401k, sağlık sigortası sonrası) kullanır:
    </p>
    <pre>{`max kira = net aylık gelir × 0.30`}</pre>
    <p>
      Aynı 72 bin dolarlık maaşta, net maaş ayda 4.500$ olabilir. Netin %30&rsquo;u = ayda 1.350$. Bu, brüt versiyondan ayda 450$ daha azdır ve genellikle gerçekten sürdürebileceğiniz rakama daha yakındır.
    </p>

    <h2>3. 50/30/20 bütçe kontrolü</h2>
    <p>
      Net maaşınızı bölün:
    </p>
    <ul>
      <li>%50 &mdash; ihtiyaçlar (kira, faturalar, market, sigorta, asgari borç ödemeleri)</li>
      <li>%30 &mdash; istekler (dışarıda yemek, eğlence, abonelikler, seyahat)</li>
      <li>%20 &mdash; tasarruf ve ek borç ödemesi</li>
    </ul>
    <p>
      Kira genellikle en büyük &ldquo;ihtiyaç&rdquo; kalemidir. Kira tek başına net gelirin %35&rsquo;ini veya daha fazlasını tüketiyorsa, ihtiyaç kovası taşar ve her ay isteklerden veya tasarruflardan çalmak zorunda kalırsınız.
    </p>

    <h2>4. Ev sahibinin 3 kat gelir şartı</h2>
    <p>
      Çoğu ABD&rsquo;li ev sahibi, yıllık brüt gelirin en az <strong>aylık kiranın 40 katı</strong> veya aylık brüt gelirin <strong>kiranın 3 katı</strong> olmasını ister. Ayda 2.000$&rsquo;lık bir daire genellikle ayda 6.000$ brüt gelir (yılda 72 bin $) gerektirir. Bazı şehirler ve ev sahipleri 2,5 kat veya hatta 2 kat talep eder; lüks binalar ve New York genellikle yıllık 40 kat ister.
    </p>
    <p>
      Eksik kalıyorsanız, seçenekler arasında bir kefil (80 kat geliri olan birinin ortak imzası), birkaç aylık peşin ödeme veya Insurent gibi hizmetler bulunur. Ancak bunlara ihtiyacınız varsa, muhtemelen birimi gerçekten karşılayamıyorsunuzdur.
    </p>

    <h2>5. Depozito ve taşınma maliyetleri</h2>
    <p>
      İmza sırasında tek seferlik maliyetler olarak bunları bütçeleyin:
    </p>
    <ul>
      <li>İlk ayın kirası</li>
      <li>Son ayın kirası (yaygın)</li>
      <li>Depozito (genellikle 1 ay, bazen 1,5-2)</li>
      <li>Emlakçı ücreti (New York/Boston&rsquo;da yıllık kiranın %12-15&rsquo;i)</li>
      <li>Başvuru ücreti (30-100$)</li>
      <li>Kiracı sigortası (~15$/ay)</li>
    </ul>
    <p>
      2.000$&rsquo;lık bir daire için taşınma nakit toplamı 6.000-14.000$ olabilir. Aramaya başlamadan önce bunu biriktirmiş olun.
    </p>

    <h2>6. Faturaları dahil edin ve aşmayı durdurun</h2>
    <p>
      Kiracı tarafından ödenen faturaları olan &ldquo;1.800$&rsquo;lık bir daire&rdquo; genellikle toplamda 2.100-2.300$&rsquo;a çıkar. Tipik aylık eklemeler:
    </p>
    <ul>
      <li>Elektrik: 50-150$</li>
      <li>Gaz/ısıtma: mevsimsel olarak 30-150$</li>
      <li>Su/kanalizasyon: 30-80$</li>
      <li>İnternet: 50-80$</li>
      <li>Çöp: 0-30$</li>
      <li>Kiracı sigortası: 15-25$</li>
    </ul>
    <p>
      Potansiyel ev sahiplerine önceki kiracının ortalama fatura tutarını sorun. Çoğu paylaşacaktır.
    </p>

    <h2>7. Yüksek maliyetli şehirler %30 kuralını bozar</h2>
    <p>
      New York, San Francisco, Boston, Washington DC ve Londra&rsquo;da medyan kira-gelir oranları %35-50&rsquo;dir. İnsanlar bunu şu şekilde başarır: ev arkadaşı edinmek, arabadan vazgeçmek, evde yemek yemek, emeklilik katkılarını sınırlamak. Bunların hiçbiri bedava değildir &mdash; &ldquo;tasarruflar&rdquo; bütçenin başka bir yerinden gelir. %30&rsquo;un üzerine çıkıyorsanız, hangi ödünleşimleri yaptığınıza açıkça karar verin.
    </p>

    <h2>8. Sabit maliyet ayarlamaları</h2>
    <p>
      %30 kuralı tipik borç yüklerini varsayar. Eğer varsa:
    </p>
    <ul>
      <li>Ayda 500$+ öğrenci kredisi: kira hedefini %25&rsquo;e düşürün</li>
      <li>Araba ödemesi + sigorta 600$+: %25&rsquo;e düşürün</li>
      <li>Çocuk bakımı 1.500$+: %20-22&rsquo;ye düşürün</li>
      <li>Borç yok, araba yok: %32-35&rsquo;i haklı çıkarabilir</li>
    </ul>
    <p>
      <strong>Borç-gelir oranınız</strong> maaşınız kadar önemlidir. Ev sahipleri ve borç verenler ikisine de bakar.</p>

    <h2>9. Ev arkadaşları matematiği tamamen değiştirir</h2>
    <p>
      2.800$&rsquo;lık 2 yatak odalı bir daireyi iki adet 1.400$&rsquo;lık odaya bölmek, karşılanamaz bir birimi kolay bir birime dönüştürür. Hesaplamayı birim başına değil, kişi başına yapın. Bir ev arkadaşı, ortalama ABD&rsquo;li kiracıya ayda 500-1.200$ tasarruf sağlar. 2 yıllık bir kira sözleşmesinde bu 12.000-29.000$&rsquo;dır.

    </p>

    <h2>10. Planlanması gereken kira artışları</h2>
    <p>
      ABD&rsquo;de kiralar son on yılda yıllık %4-6 oranında arttı. Bugün gelirin %30&rsquo;u ile imza atarsanız, geliriniz sabitse 3. yılda %34+&rsquo;e çıkabilirsiniz. Mümkün olduğunda kira sözleşmesinde bir tavan (yıllık maksimum %2-3 artış) pazarlığı yapın. Veya oran tavanınızı aşarsa taşınmayı planlayın.
    </p>

    <h2>11. Kira-gelir kıyaslamaları</h2>
    <ul>
      <li>%25&rsquo;in altı: rahat, agresif tasarruf için yer bırakır</li>
      <li>%25-30: sağlıklı, önerilen aralık</li>
      <li>%30-35: sıkı, diğer kategorilerde disiplin gerektirir</li>
      <li>%35-45: HUD&rsquo;a göre &ldquo;kira yükü altında&rdquo; &mdash; yüksek maliyetli şehirlerde yaygın</li>
      <li>%45+: ağır yük altında, bir kötü ayda kriz</li>
    </ul>

    <h2>12. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Net gelir harcanabilirken brüt geliri kullanmak.</strong> Brüt, kira tavanınızı %25-35 oranında olduğundan fazla gösterir.
      </li>
      <li>
        <strong>Tek seferlik maliyetleri unutmak.</strong> Emlakçı ücretleri ve depozitolar, peşin olarak 3 aylık kiraya eşit olabilir.
      </li>
      <li>
        <strong>İşe gidip gelme maliyetlerini görmezden gelmek.</strong> Ayda 300$&rsquo;lık ulaşım ve park ücreti olan daha ucuz bir banliyö, bazen daha yakındaki 200$&rsquo;lık bir yükseltmeden daha pahalı olabilir.
      </li>
      <li>
        <strong>İş kaybı için stres testi yapmamak.</strong> Kirayı 3 ay boyunca tasarruflarınızdan karşılayabilir misiniz? Cevap hayırsa, daha az kiralayın.
      </li>
      <li>
        <strong>Birime aşırı ağırlık vermek, kira sözleşmesini hafife almak.</strong> Gecikme ücretleri, iade edilmeyen depozitolar ve otomatik yenileme maddeleri binlerce dolara mal olabilir.
      </li>
    </ul>

    <h2>13. Rakamları hesaplayın</h2>
    <p>
      Gerçekten neyi karşılayabileceğinizi görmek için aşağıya gelirinizi ve borçlarınızı girin &mdash; hem %30 kuralına göre hem de daha katı ihtiyaç bazlı 50/30/20 kontrolüne göre.
    </p>
    <p>
      <a href="/tools/apartment-affordability-calculator">Daire satın alınabilirlik hesaplayıcısı</a>
      <a href="/tools/mortgage-affordability-calculator">Mortgage satın alınabilirlik hesaplayıcısı</a>
      <a href="/tools/budget-calculator">Bütçe hesaplayıcısı</a>
    </p>
  </>
);