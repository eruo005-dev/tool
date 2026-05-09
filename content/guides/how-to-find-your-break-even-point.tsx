import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Başabaş noktası, gelirin maliyeti tam olarak karşıladığı noktadır —
      bu noktanın altında her satışta para kaybedersiniz, üstünde ise
      kazanırsınız. Çoğu yeni işletme, başabaş hacimlerini bilmedikleri
      için yanlış fiyatlandırma yapar ve çoğu ürün, ölçeklenmeyi
      imkansız kılan marjlarla piyasaya sürülür. Bu rehber, formülü,
      doğru ayırmanız gereken maliyet kategorilerini ve başabaş
      sayısının hemen yanıtladığı üç soruyu adım adım anlatır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Sade dille formül</h2>
    <p>
      <strong>Başabaş birim sayısı = Sabit maliyetler / (Birim başına fiyat −
      Birim başına değişken maliyet)</strong>
    </p>
    <p>
      Payda — <strong>fiyat eksi değişken maliyet</strong> —{" "}
      <strong>katkı payı</strong> olarak adlandırılır. Her satışın sabit
      maliyetlerinizi karşılamaya katkıda bulunan dolar miktarıdır.
    </p>
    <p>
      Örnek: Aylık 29$'a bir abonelik satıyorsunuz. Müşteri başına aylık
      değişken maliyetiniz (barındırma, ödeme işleme, müşteri hizmetleri
      dakikaları) 6$. Katkı payı = müşteri başına aylık 23$. Sabit
      maliyetler (maaşlar, kira, yazılım) aylık 50.000$. Başabaş =
      50.000 / 23 ≈ <strong>2.174 ödeme yapan müşteri</strong>.
    </p>
    <p>
      Bu sayı, strateji sunumlarının genellikle sormadığı bir soruyu
      yanıtlar: &ldquo;Sadece para kaybetmemek için kaç müşteriye
      ihtiyacımız var?&rdquo; Bu sayı, gerçekçi 12 aylık satış
      hedefinizden çok daha büyükse, birim ekonominiz veya maliyet
      yapınız bozuk demektir.
    </p>

    <h2>Adım 1 — maliyetleri doğru sınıflandırın</h2>
    <p>
      Çoğu kurucu, maliyetleri yanlış kutuya koyar ve işe yaramaz bir
      yanıt alır. Temiz kural:
    </p>
    <p>
      <strong>Sabit maliyetler</strong>, bir sonraki satışla değişmeyen
      maliyetlerdir. Kira, maaşlar, muhasebe danışmanlığı, sigorta,
      çoğu yazılım aboneliği. 10 veya 1.000 satış yapmanız fark etmez,
      sabittir.
    </p>
    <p>
      <strong>Değişken maliyetler</strong>, sattığınız her birimle
      birlikte değişir. Satılan malın maliyeti (COGS), nakliye, ödeme
      işleme ücretleri (%2,9 + 0,30$), birim başına doğrudan işçilik,
      satış başına komisyon.
    </p>
    <p>
      Tuzak: pazarlama harcaması genellikle değişkene benzer (adım
      fonksiyonu), gerçekten sabit değildir. Başabaş noktası pazarlamaya
      duyarlıysa, bunu bir kalem olarak değil, edinme başına maliyet
      olarak modelleyin.
    </p>

    <h2>Adım 2 — gerçek birim fiyatınızı bulun</h2>
    <p>
      Faturadaki &ldquo;Fiyat&rdquo; genellikle elinizde kalan fiyat
      değildir. Şunları çıkarın:
    </p>
    <p>
      <strong>İndirimler.</strong> Siparişlerin %30'u %20 indirim kodu
      kullanıyorsa, efektif fiyat etiket fiyatından %6 daha düşüktür.
    </p>
    <p>
      <strong>İadeler ve geri ödemeler.</strong> E-ticaret için tipik
      olarak %8–15. Orantılı olarak çıkarın.
    </p>
    <p>
      <strong>Ödeme işleme.</strong> Kartlarda ~%3.
    </p>
    <p>
      <strong>Platform ücretleri.</strong> Pazaryerlerinde (Amazon, App
      Store, Etsy) %15–30.
    </p>
    <p>
      100$ MSRP'li bir ürün Amazon üzerinden satıldığında (%15 ücret),
      ortalama %10 indirim ve %10 iade ile size yaklaşık 72$ kalabilir —
      ve başabaş hesabına giren sayı budur.
    </p>

    <h2>Adım 3 — matematiği üç şekilde yapın</h2>
    <p>
      <strong>Başabaş birim sayısı</strong> (yukarıda yanıtlandı):
      maliyetleri karşılamak için kaç satış gerekiyor.
    </p>
    <p>
      <strong>Başabaş geliri</strong> = Sabit maliyetler / Katkı payı
      oranı, burada oran = (Fiyat − Değişken maliyet) / Fiyat. Abonelik
      örneği için: 50.000 / (23/29) = 50.000 / 0,793 ≈{" "}
      <strong>aylık 63.070$ gelir</strong>.
    </p>
    <p>
      <strong>Başabaş fiyatı</strong> (belirli bir hedef hacim için):
      1.000 müşteride, hangi fiyat sizi başabaş yapar? 50.000 / 1.000 +
      6 = <strong>aylık 56$</strong>. Bunun altındaki her şeyde para
      kaybedersiniz.
    </p>

    <h2>Başabaş noktasının açtığı üç karar</h2>
    <p>
      <strong>(1) Bu ürünü piyasaya sürmeli miyiz?</strong> Başabaş
      hacmi, gerçekçi 1. yıl satış tahmininizin 10 katıysa, ekonomi
      çalışmıyordur. Ya fiyat çok düşük, maliyet çok yüksek ya da
      maliyet yapınız için çok küçük bir pazarın peşindesiniz.
    </p>
    <p>
      <strong>(2) Bir indirim promosyonunu kaldırabilir miyiz?</strong>
      %20'lik bir indirim, katkı payını %20'den fazla keser (çünkü sabit
      maliyetler değişmez). Mevcut hacminizde KM, sabit maliyet
      karşılama seviyesinin altına düşerse, promosyon daha fazla birim
      gönderse bile para kaybettirir.
    </p>
    <p>
      <strong>(3) Bu yeni işe alımı karşılayabilir miyiz?</strong> 120
      bin dolarlık bir mühendis, sabit maliyetlere ayda 10 bin dolar
      ekler. Abonelik başına 23$ KM ile, bunu nötrleştirmek için 435
      daha fazla ödeme yapan müşteriye ihtiyacınız var. İşe alım bu
      artımlı talebi yaratıyor mu? Yaratmıyorsa, işe alım çukurunuzu
      derinleştirir.
    </p>

    <h2>Çok ürünlü başabaş (ağırlıklı ortalama)</h2>
    <p>
      Farklı katkı paylarına sahip birden fazla ürün satıyorsanız,
      satış karışımına dayalı ağırlıklı ortalama KM kullanın:
    </p>
    <p>
      Ürün A: Satışların %60'ı, 20$ KM. Ürün B: Satışların %40'ı, 35$
      KM. Ağırlıklı KM = (0,60 × 20) + (0,40 × 35) = 26$. Başabaş =
      Sabit maliyetler / 26$.
    </p>
    <p>
      Önemli: Satış karışımı düşük KM'li ürünlere kayarsa, aynı toplam
      gelirde bile başabaş hacmi artar. Bu nedenle SaaS işletmeleri,
      hesap başına ortalama geliri (ARPA) izler — aynı müşteri
      sayısında daha düşük bir ARPA, başabaş noktasının yükseldiği
      anlamına gelir.
    </p>

    <h2>Başabaş süresi (diğer başabaş)</h2>
    <p>
      Ön yatırım gerektiren bir işletme için — envanter, yazılım
      geliştirme, pazarlama atağı — başabaş noktasının bir{" "}
      <em>zaman</em> boyutu vardır: kümülatif kârın ön maliyeti
      karşılaması kaç ay sürer?
    </p>
    <p>
      1. Ay: −100 bin dolar (lansman maliyetleri). Aylık KM × 200
      müşteri = sabit maliyetlerden sonra aylık 5.000$ kâr. Başabaş
      süresi: 20 ay.
    </p>
    <p>
      Kritik test: Nakit akışınız o kadar uzun süre dayanıyor mu?
      Girişim pist hesaplayıcısı 14 aylık nakit olduğunu ve başabaşın
      20 ay sürdüğünü söylüyorsa, ya lansman maliyetlerini azaltmanız,
      daha fazla fon toplamanız, daha hızlı büyümeniz ya da mecbur
      kalmadan ürünü öldürmeniz gerekir.
    </p>

    <h2>Hizmet işletmelerinde başabaş</h2>
    <p>
      Hizmetler, &ldquo;birim&rdquo; yerine &ldquo;faturalanabilir
      saat&rdquo; veya &ldquo;müşteri&rdquo; koyar. Aylık 30 bin dolar
      sabit maliyeti ve saat başına 150$ ücreti (teslimat maliyeti
      sonrası %80 faturalanabilir) olan bir danışmanlık firmasının
      başabaş noktasına ulaşması için ayda 30.000$ / 120$ = 250
      faturalanabilir saate ihtiyacı vardır. Danışman başına haftada 30
      faturalanabilir saatte, bu ~2 tam zamanlı danışmanın tam haftalar
      boyunca fatura kesmesi anlamına gelir.
    </p>
    <p>
      Hizmet işletmelerinde başabaş, kullanım oranı düştüğünde hızla
      çöker — bu nedenle ajans yanması yavaş aylarda keskin görünür.
    </p>

    <h2>Başabaş duyarlılığı — asıl soru</h2>
    <p>
      Tek bir başabaş sayısı, bir duyarlılık tablosundan daha az
      kullanışlıdır. Her girdiyi ±%20 değiştirin ve başabaşın nasıl
      hareket ettiğini görün:
    </p>
    <p>
      <strong>Fiyat −%10:</strong> başabaş hacmi tipik olarak %20–40
      sıçrar çünkü KM fiyattan daha hızlı küçülür.
    </p>
    <p>
      <strong>Değişken maliyet +%10:</strong> KM'ye benzer darbe,
      başabaş hacminde benzer sıçrama.
    </p>
    <p>
      <strong>Sabit maliyet +%10:</strong> başabaş hacmi orantılı olarak
      artar.
    </p>
    <p>
      En büyük kaldıraca sahip girdiler fiyat ve değişken maliyettir,
      çünkü her birimi etkilerler. Optimizasyonu önce oraya
      odaklayın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Sabit maliyetlerinizi, fiyatınızı ve değişken maliyetinizi{" "}
      <a href="/tools/break-even-calculator">başabaş hesaplayıcıya</a>
      {" "}girerek birim, gelir ve fiyat görünümlerini alın.{" "}
      <a href="/tools/profit-margin-calculator">Kâr marjı
      hesaplayıcı</a> ile &ldquo;KM sağlıklı mı&rdquo; kontrolü yapın ve
      <a href="/tools/startup-runway-calculator">girişim pist
      hesaplayıcı</a> ile nakdinizin başabaş noktasına ulaşacak kadar
      uzun süre dayanıp dayanmadığını görün.
    </p>
  </>
);