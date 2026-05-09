import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      "Emeklilikte ne kadar param olacak?" sorusunun arkasında tek bir formül
      ve üç önemli değişken vardır: ne kadar birikimle başladığınız, her ay ne
      kadar eklediğiniz ve paranın ne kadar süre bileşik getiri sağladığı. Bu
      rehber, projeksiyon matematiğini, kullanılması gereken gerçekçi getiri
      varsayımlarını (ve hangilerinin rakamı haksız yere şişirdiğini) ve
      korkutucu derecede büyük gelecek rakamını gerçekçi bir aylık gelire nasıl
      dönüştüreceğinizi adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Gelecek değer formülü</h2>
    <p>
      <code>GD = B × (1 + r)<sup>n</sup> + A × [((1 + r)<sup>n</sup> − 1) / r]</code>
    </p>
    <p>
      Burada <strong>B</strong> = başlangıç bakiyesi, <strong>A</strong> =
      dönem başına katkı, <strong>r</strong> = dönem başına getiri,{" "}
      <strong>n</strong> = dönem sayısı. Yıllık getiri oranı ile aylık
      bileşik faiz için <code>r = yıllık / 12</code> ve{" "}
      <code>n = yıl × 12</code> kullanın.
    </p>

    <h2>Gerçekçi bir senaryo</h2>
    <p>
      30 yaşında, 401(k)'de halihazırda birikmiş $20,000. Ayda $800 katkı
      (çalışan + işveren eşleşmesi). 65 yaşında emeklilik hedefi. Varsayılan
      %7 reel (enflasyona göre düzeltilmiş) getiri.
    </p>
    <p>
      <code>GD = $20.000 × 1,07<sup>35</sup> + $800 × [(1,07<sup>35</sup> − 1) / 0,07]</code>
    </p>
    <p>
      = $213.000 + $1.326.000 = <strong>65 yaşında bugünün dolarıyla
      $1,54 milyon</strong>. $20 bin başlangıç ve ayda $800 için fena değil.
    </p>

    <h2>Hangi getiri varsayımını kullanmalısınız?</h2>
    <p>
      <strong>%10 nominal</strong> — 1926'dan bu yana ABD hisse senedi
      piyasasının enflasyona göre düzeltilmemiş ham uzun vadeli ortalaması.
      Bunu kullanmak projeksiyonunuzu harika gösterir ancak dolarlar,
      bugünkünden daha az satın alma gücüne sahip gelecek dolarıdır.
    </p>
    <p>
      <strong>%7 reel</strong> — yaklaşık %3 tarihsel enflasyon düşülmüş
      aynı getiri. Çıktı, bugünün satın alma gücü cinsindendir. Gerçek
      hayatınızı planlamak için kullanacağınız herhangi bir projeksiyonda
      bunu kullanın.
    </p>
    <p>
      <strong>%5–6 reel</strong> — önemli miktarda tahvil içeren portföyler
      için muhafazakar bir varsayım. Stres testi olarak kullanışlıdır.
    </p>
    <p>
      <strong>%4</strong> — bazı stratejistlerin 2020'lerdeki yüksek
      değerlemeler sonrası yeni normal beklenen reel getiri olarak
      adlandırdığı oran. Aşırı muhafazakar alt sınır.
    </p>
    <p>
      Nominal getiri kullanan hesaplayıcıları reel getiri kullananlarla asla
      karşılaştırmayın — 35 yıl boyunca aradaki fark, nihai bakiyede
      kabaca 2–3 katıdır.
    </p>

    <h2>%4 kuralı — birikimden aylık gelire</h2>
    <p>
      Trinity çalışması, emeklilik birikiminizin <strong>%4'ünü</strong> ilk
      yıl çekebileceğinizi, sonraki her yıl enflasyona göre ayarlayabileceğinizi
      ve portföyünüzün 30 yıl dayanma olasılığının %95 olduğunu öne sürer.
      $1,54M × %4 = $61.600/yıl = vergi öncesi ayda $5.133.
    </p>
    <p>
      Daha muhafazakar bir hedef için (daha uzun emeklilik, düşük getiri
      ortamı), bazı danışmanlar artık %3,5 hatta %3 önermektedir. $1,54M ×
      %3,5 = $53.900/yıl.
    </p>

    <h2>Finansal bağımsızlık hedefi için "25× kuralı"</h2>
    <p>
      %4'ün tersi: hedeflediğiniz yıllık harcamayı 25 ile çarparak ihtiyacınız
      olan birikimi bulun. Yılda $60k mı istiyorsunuz? $1,5M hedefleyin.
      Yılda $100k mı istiyorsunuz? $2,5M hedefleyin.
    </p>

    <h2>Erken başlamanın süper gücü</h2>
    <p>
      İki yatırımcı, aynı aylık $400 katkı, %7 getiri. Anna 25–35 yaşları
      arasında yatırım yapıyor (10 yıl, $48k katkı), duruyor ve 65 yaşına
      kadar birikimini bırakıyor. ~$470k ile bitiriyor. Ben 35 yaşında
      başlıyor, 30 yıl boyunca ayda $400 yatırıyor ($144k katkı), ~$484k ile
      bitiriyor. Ben, Anna'nın 3 katı katkı yaptı ve onu zar zor geçti.
      Zaman, miktardan daha baskındır; katkıları erken yapmak, daha sonra
      telafi etmekten orantısız şekilde daha değerlidir.
    </p>

    <h2>Varsayımları stres testine tabi tutun</h2>
    <p>
      Bir projeksiyona bağlanmadan önce, 3 getiri oranında (%5, %7,
      %9) ve 2 katkı oranında (mevcut, mevcut + %20) hesaplama yapın.
      Gerçek sonucunuz bu aralıkta bir yere düşecektir. Kendinize bir
      projeksiyonu sunmanın dürüst yolu, tek bir nokta değil, bir aralıktır.
    </p>
    <p>
      Mütevazı olunması gereken bir örnek: 30 yıllık bir ufukta kötü bir
      getiri sıralaması (başlangıçta 2000–2010 türü bir on yıl), <em>ortalama</em>
      getiri aynı olsa bile, düzgün bir %7 varsayımına göre önemli ölçüde
      daha düşük nihai bakiyeler üretir. Gerçek dünya yolları inişli
      çıkışlıdır.
    </p>

    <h2>Vergiler ve hesap türleri</h2>
    <p>
      401(k) ve geleneksel IRA katkıları vergi öncesidir — para çekme
      işlemlerinde normal gelir vergisi ödersiniz. $1,54M'lik geleneksel bir
      401(k), emeklilikte %25 efektif oran sonrası net ~$1,15M olur.
    </p>
    <p>
      Roth 401(k)/IRA katkıları vergi sonrasıdır — para çekme işlemleri
      vergisizdir. $1,54M, $1,54M olarak kalır.
    </p>
    <p>
      Çoğu hesaplayıcı (bizimki dahil) bunu görmezden gelir — yansıtılan
      rakam geleneksel hesaplar için vergi öncesi, Roth için vergisizdir.
      İstediğiniz harcamayla karşılaştırırken zihinsel olarak ayarlama yapın.
    </p>

    <h2>İşveren eşleşmesi — katkıda bulunabileceğiniz en büyük getiri</h2>
    <p>
      İşvereniniz maaşınızın ilk %6'sına %50 eşleşme sunuyorsa, bu %6'lık
      katkı bakiyenize karşı %9 olur — %50 anlık getiri ve bu getiri piyasa
      getirilerinin üzerine bileşik olarak eklenir. Tam eşleşmeyi almak için
      her zaman en azından yeterli katkıyı yapın; daha azı masada saf nakit
      bırakmaktır.
    </p>

    <h2>Kendi projeksiyonunuzu yapın</h2>
    <p>
      Başlangıç bakiyenizi, aylık katkınızı, beklenen getirinizi (temel
      senaryo için %7 reel kullanın) ve emekliliğe kalan yıl sayısını{" "}
      <a href="/tools/compound-interest-calculator">bileşik faiz
      hesaplayıcısına</a> girin. Gerçekçi bir aralık görmek için %5, %7 ve
      %9'da hesaplatın. Hedefi, belirli bir rakama ulaşmak için gereken aylık
      katkıyı geriye dönük hesaplamak üzere{" "}
      <a href="/tools/savings-goal-calculator">tasarruf hedefi
      hesaplayıcısı</a> ile çapraz kontrol edin ve her yıl gerçek ilerlemeyi
      takip etmek için{" "}
      <a href="/tools/net-worth-calculator">net değer hesaplayıcısı</a> ile
      birlikte kullanın.
    </p>
  </>
);