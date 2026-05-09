import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Araba satın alırken en büyük finansal kaldıraç, etiket fiyatı değil — onu nasıl finanse ettiğinizdir. 30.000$'lık bir kredide 5 yıl boyunca <a href="/learn/apr">APR</a>'de 3 puanlık bir fark, fazladan 2.500$ faiz anlamına gelir; bu, bayide pazarlıkla indirilen fiyatların çoğundan daha fazladır. Bu rehber, krediyi arabadan ayrı olarak nasıl araştıracağınızı, gerçekten önemli olan rakamları ve alıcılara binlerce dolara mal olan dört bayi taktiğini anlatıyor.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Adım 1 — bayiye girmeden önce ön onay alın</h2>
    <p>
      En önemli tek hamle: bayiyi ziyaret etmeden <em>önce</em> bankanızdan, kredi birliğinizden veya çevrimiçi bir borç verenden ön onay almak. Nedenleri:
    </p>
    <p>
      <strong>Finansmandan ayrılmış fiyat pazarlığı.</strong>
      Elinizde finansmanla girdiğinizde, arabanın fiyatı net bir pazarlık konusudur. Bayiler finansman sunduğunda, birinden verip diğerinden alabilirler.
    </p>
    <p>
      <strong>Referans oranı.</strong> Artık gerçek oran tabanınızı biliyorsunuz. Bayi finansmanı bunu geçebilir (bazen üretici teşvikleriyle yaparlar) — ancak bir karşılaştırma yapmadan bilemezsiniz.
    </p>
    <p>
      <strong>Pazarlık gücü.</strong> "%6,2'den ön onaylıyım" diyerek içeri girmek, %8,5 teklif edip "yapabileceklerinin en iyisi bu" dediklerinde geri çevirmenizi sağlar.
    </p>
    <p>
      Oranları şuradan kontrol edin: ana bankanız, yerel kredi birlikleri (genellikle en iyi oranlar), LightStream, LendingClub, Capital One Auto gibi çevrimiçi borç verenler. 14 günlük bir sürede 2-3 teklif alın; kredi büroları, bu süre içinde yapılan araştırmayı tek bir sorgulama olarak kabul eder.
    </p>

    <h2>Adım 2 — önemli olan 4 rakamı bilin</h2>
    <p>
      <strong>APR (yıllık yüzde oranı)</strong> — kredinin gerçek maliyeti. Teklifleri karşılaştırırken aylık ödemeye değil, buna bakın.
    </p>
    <p>
      <strong>Vade (ay cinsinden kredi süresi)</strong> — 36, 48, 60, 72 veya 84 ay. Daha uzun = daha düşük aylık ödeme = daha fazla toplam faiz. Çok daha fazla toplam faiz.
    </p>
    <p>
      <strong>Peşinat</strong> — daha fazla peşinat, daha az kredi, daha az faiz ve arabanın ödemesini yaptığınızdan daha hızlı değer kaybetmesi durumunda su altında kalma (arabanın değerinden fazla borçlanma) riskinin daha düşük olması anlamına gelir.
    </p>
    <p>
      <strong>Kredinin toplam maliyeti</strong> = aylık ödeme × ay sayısı + peşinat. Bu, arabanın gerçek maliyetini gösteren rakamdır. Bayiler bunu göstermez; sizin hesaplamanız gerekir.
    </p>

    <h2>Vade süresi tuzağı</h2>
    <p>
      Çoğu bayi daha uzun vadeleri iter çünkü aylık ödeme daha küçük görünür. %7 APR ile 30.000$'ın matematiği:
    </p>
    <p>
      <strong>48 ay:</strong> 719$/ay, toplam faiz ~4.500$.
    </p>
    <p>
      <strong>60 ay:</strong> 594$/ay, toplam faiz ~5.650$.
    </p>
    <p>
      <strong>72 ay:</strong> 512$/ay, toplam faiz ~6.860$.
    </p>
    <p>
      <strong>84 ay:</strong> 453$/ay, toplam faiz ~8.070$.
    </p>
    <p>
      84 aylık kredi, aynı araba için 48 aylık krediden 3.570$ daha fazla faize mal olur. Ayrıca: daha uzun süre su altında kalırsınız (arabanın amorti edilmiş değerinden fazla borçlanırsınız), yani arabayı pert ederseniz veya satmanız gerekirse, farkı siz ödersiniz.
    </p>
    <p>
      <strong>Genel kural:</strong> 48 ay veya daha kısa sürede finanse edebileceğiniz bir araba satın alın. 48 aylık ödeme çok fazlaysa, 72 aylık ödeme nasıl görünürse görünsün, araba bütçeniz için çok pahalıdır.
    </p>

    <h2>Peşinat kuralı (ideal olarak %20)</h2>
    <p>
      Standart tavsiye: arabanın fiyatının en az %20'sini peşinat olarak yatırın. Neden:
    </p>
    <p>
      Yeni arabalar ilk yılda %10-20 değer kaybeder. %0 peşinat yatırıp tüm fiyatı finanse ederseniz, anında su altında kalırsınız — arabanın değerinden fazla borçlanırsınız. Açık sigortası yardımcı olur; durumdan kaçınmak daha iyidir.
    </p>
    <p>
      %20 peşinat, sizi kabaca amortismanla başa baş tutar, riski azaltır ve tipik olarak daha iyi bir oran almanızı sağlar (borç verenler düşük LTV'li kredilere daha düşük APR'ler uygular).
    </p>
    <p>
      Takaslar peşinata dahil edilir. Mevcut arabanızı özel olarak satmak da (genellikle takas değerinden 1.000-3.000$ daha fazla) aynı işi görür.
    </p>

    <h2>20/4/10 kuralı — bir sağlamlık kontrolü</h2>
    <p>
      Bir korkuluk görevi gören popüler finans kuralı:
    </p>
    <p>
      <strong>%20</strong> minimum peşinat.
    </p>
    <p>
      <strong>4 yıl</strong> maksimum kredi vadesi.
    </p>
    <p>
      <strong>%10</strong> aylık brüt gelirin maksimum toplam araba maliyeti (ödeme + sigorta + yakıt + bakım).
    </p>
    <p>
      İstediğiniz araba, gelirinizle 20/4/10 kuralına uymuyorsa, sadece "sıkışık" değil, mevcut durumunuzda satın alınamaz demektir.
    </p>

    <h2>Tanımanız gereken 4 bayi finansman taktiği</h2>
    <p>
      <strong>Taktik 1: "Aylık ödemeye odaklanın."</strong>
      Bayiler, toplam fiyat, faiz ve vade sessizce değişirken hedef aylık rakama ulaşmak için vadeyi uzatır. Önce fiyatı, sonra finansmanı ayrı ayrı pazarlık edin. Onlara hedef aylık ödemenizi söylemeyin.
    </p>
    <p>
      <strong>Taktik 2: Oran karı.</strong>
      Bayiler, borç verenlerinden toptan oranı alır, ardından size teklif etmeden önce kar marjı ekler — bu kar onların kârıdır. Krediniz %6,5'e uygunken %8,5 teklif eden bir bayi, %2'lik farkı cebine atıyordur. Bankanızdan bir ön onay bunu ortaya çıkarır.
    </p>
    <p>
      <strong>Taktik 3: Ürün paketleme.</strong>
      Genişletilmiş garanti, açık sigortası, boya koruması, lastik ve jant kapsamı, VIN kazıma — yüzlerce ila binlerce dolarlık eklentiler, genellikle fark etmeyesiniz diye finansmana dahil edilir. Döküm isteyin; istemediğiniz hiçbir şeyi reddedin.
    </p>
    <p>
      <strong>Taktik 4: Takas manipülasyonu.</strong>
      Takasınız 8 bin dolar değerindeyse ancak yeni arabanın 2 bin dolar fazla fiyatlandırıldığı uyarısıyla 10 bin dolar teklif ederlerse, hiçbir şeyi değiştirmeden rakamları oynatmış olurlar. Pazarlığa başlamadan <em>önce</em> mevcut arabanızın KBB özel satış değerini öğrenin.
    </p>

    <h2>Yeni vs ikinci el — marj matematiği</h2>
    <p>
      Yeni arabalar en hızlı 1-3. yıllarda değer kaybeder. 2-3 yaşında sertifikalı ikinci el bir araba, en kötü amortisman darbesini zaten almıştır. Tipik toplam sahip olma maliyeti farkı (3 yıl):
    </p>
    <p>
      Yeni araba, 35 bin dolar: 22 bin dolara değer kaybeder. Sahip olma maliyeti: 13 bin dolar amortisman + faiz + sigorta + bakım.
    </p>
    <p>
      Aynı araba, satın alındığında 3 yaşında, 22 bin dolar: 3 yıllık sahipliğinizde 15 bin dolara değer kaybeder. Maliyet: 7 bin dolar amortisman + benzer faiz + sigorta + biraz daha yüksek bakım.
    </p>
    <p>
      İkinci el, aynı sürüş faydası için 3 yılda tipik olarak 3-6 bin dolar daha ucuzdur. Ödünleşimler: biraz daha kısa garanti, daha eski teknoloji, ancak genellikle daha iyi değer.
    </p>

    <h2>Erken ödeme vs farkı yatırma</h2>
    <p>
      Kredi APR'niz %6'nın altındaysa, fazla parayı geniş bir endeks fonuna yatırmak (tarihsel ~%7 reel getiri), krediyi ödemekten biraz daha iyi beklenen değere sahiptir. %7 APR'nin üzerinde, krediyi ödemek garantili bir getiridir ve piyasa beklentilerini geçer.
    </p>
    <p>
      Yine de ödemenin psikolojik argümanı: garantili, sıfır riskli, zihinsel yükü temizler. Birçok kişi, matematik hafifçe yatırımı desteklese bile bunu tercih eder.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Araç fiyatı, peşinat, APR ve vadeyi aylık ödeme ve toplam faiz için{" "}
      <a href="/tools/car-loan-calculator">araba kredisi hesaplayıcısına</a> girin. Borç verenler arasındaki teklifleri karşılaştırmak için{" "}
      <a href="/tools/loan-calculator">genel kredi hesaplayıcısı</a> ile ve bütçenize karşı toplam sahip olma maliyetini tamamlamak için{" "}
      <a href="/tools/fuel-cost-calculator">yakıt maliyeti hesaplayıcısı</a>
      {" "}ile birlikte kullanın.
    </p>
  </>
);