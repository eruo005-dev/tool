import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Pazarlama <a href="/learn/roi">ROI</a>'si, bir kampanyanın para kazandırıp kazandırmadığının aritmetiğidir — şaşırtıcı derecede tartışmalı bir rakamdır, çünkü "maliyet" ve "getiri" olarak kabul edilenler bir düzine farklı şekilde tanımlanabilir. Bu rehber, temel formülü, ekiplerin bunu hesapladığı en yaygın üç yöntemi, neden ilişkilendirmenin her şeyi mahvettiğini ve bir CFO'nun sorularına karşı duracak kadar dürüst bir ROI rakamını nasıl raporlayacağınızı adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Temel formül</h2>
    <p>
      <code>ROI = (Kazanç − Maliyet) / Maliyet × 100%</code>
    </p>
    <p>
      Bir kampanyaya 10 bin dolar harcayın, 40 bin dolar atfedilebilir gelir elde edin:
      ROI = (40 bin $ − 10 bin $) / 10 bin $ × 100% = <strong>%300</strong>. Harcanan her dolar için, harcamanızı geri kazanmanın üzerine üç dolar kâr elde ettiniz.
    </p>

    <h2>Pazarlama ROI'si ve ROAS — bunları karıştırmayın</h2>
    <p>
      <strong>ROAS (Reklam Harcaması Getirisi)</strong> gelir ÷ reklam harcamasıdır. Aynı kampanya yukarıdaki gibi: 40 bin $ / 10 bin $ = 4,0x ROAS. ROAS, kâr marjını göz ardı eder. Brüt marjınız %20 ise, 40 bin dolarlık bu gelir aslında 8 bin dolar brüt kâr sağlamıştır — ve siz bunu elde etmek için 10 bin dolar harcadınız. ROAS kazandığınızı söyler; gerçek ROI ise para kaybettiğinizi söyler.
    </p>
    <p>
      <code>Gerçek ROI = (Gelir × Brüt marj − Pazarlama maliyeti) / Pazarlama maliyeti</code>. Pazarlama ekibinin üzerindeki herhangi birine ROI raporlarken her zaman marj adımını yapın, aksi takdirde gösterge paneli her şeyin harika olduğunu söylerken aslında parayı ateşe atarken yakalanırsınız.
    </p>

    <h2>Pazarlama ROI'sinin üç yaygın çeşidi</h2>
    <p>
      <strong>(1) Gelir ROI'si.</strong> (Gelir − Pazarlama maliyeti) ÷ Pazarlama maliyeti. Marjı göz ardı eder. Şişirilmiştir. Pazarlama ekipleri genellikle bunu raporlar. Dahili olarak sorun yok, harici olarak yanıltıcıdır.
    </p>
    <p>
      <strong>(2) Brüt kâr ROI'si.</strong> (Gelir × Brüt marj − Pazarlama maliyeti) ÷ Pazarlama maliyeti. Dürüst versiyon. CFO'lar bunu bekler.
    </p>
    <p>
      <strong>(3) Katkı marjı ROI'si.</strong> Tüm değişken maliyetleri (brüt marj + müşteri hizmetleri + nakliye + ödeme işleme) hesaba katar. Birim ekonomi odaklı şirketlerde ve girişim sermayesi destekli büyüme modellemelerinde kullanılır.
    </p>

    <h2>Zaman ufku sorunu</h2>
    <p>
      Edinme pazarlaması, müşterinin ilk satın almasında değil, ömür boyu değeri üzerinden kendini amorti eder. Ayda 100 dolar ödeyen bir müşteriyi 36 ay boyunca edinmek için 1.000 dolar harcayan bir SaaS işletmesi, birinci aydan sonra negatif ROI raporlamamalıdır. ROI'nin yanında{" "}
      <strong>geri ödeme süresi</strong> ve <strong>LTV:CAC oranı</strong> kullanın:
    </p>
    <p>
      <strong>LTV</strong> (ömür boyu değer) = ortalama müşteri geliri × ortalama marj × ortalama ömür.{" "}
      <strong>CAC</strong> (müşteri edinme maliyeti) = pazarlama harcaması ÷ edinilen müşteri sayısı. LTV:CAC oranının 3:1 veya daha yüksek olması SaaS referans değeridir. 2:1'in altı genellikle birim ekonominin bozuk olduğu anlamına gelir.
    </p>
    <p>
      Kampanyaları karşılaştırırken yıllıklandırın: tek dönemli ROI ve yıllıklandırılmış ROI'yi (Bileşik Yıllık Büyüme Oranı) yan yana görmek için{" "}
      <a href="/tools/roi-calculator">ROI hesaplayıcı</a>'ya bakın.
    </p>

    <h2>İlişkilendirme — ROI iddialarının öldüğü yer</h2>
    <p>
      İlişkilendirme, "hangi kampanya bu satın almaya neden oldu?" sorusudur. Çoğu dönüşüm 3–8 temas noktası içerir — bir Google reklamı, bir yeniden hedefleme görseli, bir e-posta, bir organik arama, bir podcast bahsi — ve ilişkilendirme modelleri krediyi farklı şekilde dağıtır:
    </p>
    <p>
      <strong>Son tıklama:</strong> Kredinin %100'ü son temas noktasına gider. Alt huni kampanyalarını kayırır. iOS 14.5 izleme değişiklikleri bu modeli çoğu mobil uygulama için bozdu.
    </p>
    <p>
      <strong>İlk tıklama:</strong> Kredinin %100'ü ilk temas noktasına gider. Üst huni marka kampanyalarını kayırır. Nadiren tek başına kullanılır.
    </p>
    <p>
      <strong>Doğrusal:</strong> Tüm temas noktalarına eşit kredi dağıtır. Basit ve savunulabilir, ancak bir marka bilinirliği gösterimini, bir ödeme sayfası yeniden hedefleme reklamıyla aynı şekilde ele alır.
    </p>
    <p>
      <strong>Veri odaklı / algoritmik:</strong> GA4'ün varsayılanı ve HubSpot ile Salesforce'taki benzer modeller. Kendi geçmiş dönüşüm yollarınızı kullanarak ağırlıklar atar. Genellikle en savunulabilir olanıdır, ancak anlamlı bir model üretmek için yeterli veri hacmi (binlerce dönüşüm) gerektirir.
    </p>
    <p>
      ROI'nin dürüst versiyonu, her zaman ilişkilendirme modelini rakamın yanında belirtir. "Kampanya ROI'si: %240 (son tıklama)" doğrudur. Sadece "Kampanya ROI'si: %240" demek, aylık değerlendirmede ortaya çıktığı anda birinin itiraz edeceği bir rakamdır.
    </p>

    <h2>Artımsallık — daha zor soru</h2>
    <p>
      Mükemmel ilişkilendirme olsa bile, ödediğiniz dönüşümlerin bir kısmı zaten gerçekleşecekti. Bu <em>artımsallık</em> sorunudur. Bunu ölçmenin tek güvenilir yolu, ayrılmış testlerdir: kitlenizin rastgele %10'una reklam göstermeyin, dönüşüm oranlarını karşılaştırın ve fark, gerçek artımsal katkınızdır.
    </p>
    <p>
      Çoğu ekip bunu, kasıtlı olarak dönüşüm kaybetmek gibi hissettirdiği için atlar. Ayrılmış testler yapanlar, rutin olarak "atfedilen" dönüşümlerin %20-50'sinin artımsal olmadığını bulur. Bir ayrılmış test yapmadıysanız, raporladığınız ROI bilinmeyen bir miktarda iyimserdir.
    </p>

    <h2>Kampanya düzeyinde ROI çalışma örneği</h2>
    <p>
      Kurumsal bir SaaS için LinkedIn reklamları. Harcama: 15.000 dolar. Atfedilen gelir (son tıklama, GA): İlk yıl sözleşme değeri olarak 180.000 dolar. Brüt marj: %75. Reklam operasyonları işçiliği (medya maliyetinin %10'u tahsis edilmiş): 1.500 dolar.
    </p>
    <p>
      Toplam maliyet: 15.000 $ + 1.500 $ = 16.500 $. Atfedilen gelirden brüt kâr: 180.000 $ × 0,75 = 135.000 $. ROI = (135.000 $ − 16.500 $) / 16.500 $ = brüt kâr bazında <strong>%718</strong>.
    </p>
    <p>
      Şimdi ilişkilendirme modeli riski için indirim yapın. Bir artımsallık testi, bu dönüşümlerin %60'ının artımsal olmadığını gösterseydi, gerçek dünya ROI'si = (135.000 $ × 0,40 − 16.500 $) / 16.500 $ = %227. Hâlâ kârlı, ancak çarpıcı biçimde farklı ve yalnızca biri altı ay sonra savunulabilir olacak.
    </p>

    <h2>Küçük kampanyalar için kısayol</h2>
    <p>
      Harcaması 10 bin doların altında ve 100 dönüşümün altındaki kampanyalar için ilişkilendirme modellemesini atlayın. Sadece eşleşen zaman dilimlerindeki harcama ve gelire bakın, son tıklama ilişkilendirmesini yeterince iyi kabul edin ve brüt kâr ROI'sini hesaplayın. Bu ölçekte varyans, hassas modellemenin kabataslak hesaplamayı yenmesi için çok yüksektir.
    </p>
    <p>
      Temel matematik için <a href="/tools/roi-calculator">ROI hesaplayıcı</a>'yı kullanın (hem basit hem de yıllıklandırılmışı işler). Bir kampanya maliyetinin geri kazanılabilir olup olmadığına karar verirken{" "}
      <a href="/tools/break-even-calculator">başabaş hesaplayıcı</a> ile eşleştirin ve gelir girdilerini ROI'nin brüt kâr versiyonuna dönüştürmek için{" "}
      <a href="/tools/profit-margin-calculator">kâr marjı hesaplayıcı</a>'yı kullanın.
    </p>
  </>
);