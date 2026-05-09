import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Ödüller, eğitim, bağ kurma ve diş sağlığı için bir araçtır &mdash; dördüncü bir öğün değil. Sağlıklı bir köpeğin günlük kalorisini aşmanın en hızlı yolu, ödül kavanozunu serbestçe doldurmaktır. Veteriner hekimlerin genel kuralı &mdash; %10 kuralı &mdash; size temiz bir günlük bütçe sağlar ve diğer yiyeceklerin, tasarlandıkları besleyici işi yapmasına olanak tanır.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>%10 kuralı, sade Türkçe</h2>
    <p>
      Ödüller, toplam günlük kalorinin en fazla %10'unu oluşturmalıdır. Kalan %90, dengeli, eksiksiz ve dengeli bir diyetten (kuru mama, taze mama, çiğ mama, nasıl beslerseniz besleyin) gelir. AAFCO ve AAHA bu sayıyı destekler çünkü eksiksiz diyetler, kalorilerin çoğunun buradan geldiği varsayımıyla formüle edilmiştir. Ödülleri %10'un çok üzerine çıkarırsanız, toplam enerji alımını artırırken köpeğin mikro besinlerden yararlanmasını azaltmaya başlarsınız &mdash; yavaş kilo alımı için mükemmel bir düzenek.
    </p>

    <h2>Köpeğinizin gerçek bütçesini nasıl bulursunuz</h2>
    <p>
      Dinlenme enerji ihtiyacı (RER) ile başlayın, ardından bir aktivite faktörü ile çarpın:
    </p>
    <ul>
      <li><strong>RER</strong> = 70 &times; (kg cinsinden vücut ağırlığı)<sup>0,75</sup></li>
      <li><strong>Günlük enerji ihtiyacı (DER)</strong> = RER &times; aktivite faktörü</li>
      <li><strong>Ödül bütçesi</strong> = DER &times; 0,10</li>
    </ul>
    <p>
      Aktivite faktörleri kabaca 1,2 (düşük: yaşlı, kısırlaştırılmış, kanepe köpeği), 1,6 (orta: günlük yürüyüşler), 1,8 (aktif: çalışan/spor yapan/kısırlaştırılmamış) şeklindedir. Hamile, emziren, büyüyen yavru köpekler ve düşük kilolu kurtarma köpekleri özel ilgi gerektirir &mdash; veterinerinize danışın.
    </p>

    <p>
      40 kiloluk orta derecede aktif yetişkin bir köpek: ~18 kg, RER &asymp; 612 kcal, DER &asymp; 980 kcal, ödül bütçesi &asymp; 98 kcal/gün. Bu, yaklaşık bir adet bully stick, üç orta boy eğitim seansına yetecek kadar küçük bisküvi veya çeyrek su bardağı sade konserve balkabağına eşittir.
    </p>

    <h2>Gizli kalori bombalarına dikkat edin</h2>
    <ul>
      <li><strong>Bully stick ve rawhide'lar:</strong> Her biri 80&ndash;120 kcal &mdash; küçük bir köpek için tüm bütçe bu.</li>
      <li><strong>Peynir:</strong> Ons başına 110 kcal &mdash; köpek sahipliğinde en çok fazla verilen ödül.</li>
      <li><strong>Fıstık ezmesi:</strong> Yemek kaşığı başına 95 kcal. Hapları gizlemek için kullanışlıdır, ancak bir çay kaşığı yeterlidir.</li>
      <li><strong>Greenies veya Dentastix gibi diş çiğneme ürünleri:</strong> Boyutuna bağlı olarak her biri 30&ndash;100 kcal. Bunları takip edin.</li>
      <li><strong>Sofra artıkları:</strong> Tek bir tavuk but derisi, küçük bir cins için günlük bütçeyi aşabilir.</li>
    </ul>

    <h2>İşe yarayan düşük kalorili alternatifler</h2>
    <p>
      Eğitim amaçlı yoğun çalışmalar için &mdash; bir seansta 50&ndash;100 pekiştireç verdiğiniz durumlar &mdash; sayının artmaması için ultra düşük kalorili seçeneklere geçin:
    </p>
    <ul>
      <li>Üzerinde &ldquo;her biri 1 kcal&rdquo; veya &ldquo;düşük kalorili&rdquo; yazan sade eğitim ödülleri (parça başına 3&ndash;5 kcal gerçekçidir).</li>
      <li>Dondurulmuş yaban mersini (her biri 1 kcal) &mdash; yaz aylarında harikadır.</li>
      <li>Havuç çubukları (orta boy bir bebek havucunda 4 kcal, çiğnemesi tatmin edicidir).</li>
      <li>Dörde bölünmüş sade pirinç kekleri (her biri ~9 kcal).</li>
      <li>Salatalık halkaları (önemsiz kalori).</li>
      <li>Köpeğin günlük porsiyonundan ayrılan normal kuru mamasının küçük bir kısmı &mdash; sıfır net kalori etkisi.</li>
    </ul>

    <h2>Bir köpeğe asla verilmemesi gereken yiyecekler</h2>
    <p>
      %10 kuralı <em>güvenli</em> ödüller için geçerlidir. Bazı insan yiyecekleri, porsiyon boyutundan bağımsız olarak toksiktir:
    </p>
    <ul>
      <li>Çikolata &mdash; teobromin toksiktir, özellikle bitter çikolata.</li>
      <li>Üzüm ve kuru üzüm &mdash; akut böbrek yetmezliğine neden olabilir.</li>
      <li>Soğan, sarımsak, pırasa, frenk soğanı &mdash; allium toksisitesi kırmızı kan hücrelerine zarar verir.</li>
      <li>Ksilitol (şekersiz sakız, fıstık ezmesi, fırıncılıkta tatlandırıcı) &mdash; şiddetli insülin yükselmesi, genellikle ölümcül.</li>
      <li>Macadamia fındığı &mdash; halsizlik ve titremeye neden olur.</li>
      <li>Pişmiş kemikler &mdash; kırılır ve delinmeye neden olur. Çiğ, büyük eğlence kemikleri ayrı (ve tartışmalı) bir konudur.</li>
      <li>Çiğ ekmek hamuru &mdash; midede genişler ve alkol fermente eder.</li>
    </ul>
    <p>
      Bir yiyecekten emin değilseniz, ASPCA Hayvan Zehir Kontrol hattı (888-426-4435) 7/24 hizmet vermektedir. Ücretli olabilir, ancak bir acil servis ziyaretinden çok daha ucuzdur.
    </p>

    <h2>Kilo kaybı için ayarlama</h2>
    <p>
      Köpeğinizin kilo vermesi gerekiyorsa, protokol <em>toplam</em> kaloriyi yaklaşık %10&ndash;20 oranında azaltmak ve ödül oranını yeni toplamın %10'unda veya altında tutmaktır &mdash; eski toplamın değil. Düşük kalorili ödüllere geçmek ve öğün miktarını azaltmak, ödülleri aniden sıfıra indirmekten daha etkilidir, çünkü aşırı beslemeyi tetikleyen yalvarma davranışı, köpek açken ortadan kalkmaz. Herhangi bir anlamlı kilo verme planını önce veterinerinizle görüşün.
    </p>

    <h2>Köpeğiniz için matematiği yapın</h2>
    <p>
      <a href="/tools/dog-treat-calorie-budget">Köpek ödülü kalori bütçesi hesaplayıcımız</a>, kilo ve aktivite seviyesini alır ve günlük kalori ihtiyacı ile %10 ödül sınırını döndürür. Ayrıca, her seferinde matematik yapmadan bir strateji seçebilmeniz için bu sınırın altına kaç tane sığdığını gösteren 12 yaygın ödülü listeler.
    </p>
  </>
);