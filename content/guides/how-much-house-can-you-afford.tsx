import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Ne kadar ev alabileceğiniz, bir borç verenin sizi onaylayacağı rakam değildir — kapanıştan sonra bütçenizi ayakta tutan rakamdır. Borç verenler sizi brüt gelir ve borç oranlarına göre onaylar; çocuk bakım masraflarını, 401k katkılarını veya ara sıra dışarıda yemek yemek istediğinizi görmezler. Bu rehber, 28/36 kuralını, maksimum onayın neden genellikle bir hata olduğunu ve belirli bir ilanı gerçek bir net maaş bütçesine karşı nasıl test edeceğinizi anlatır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>28/36 kuralı</h2>
    <p>
      Borç verme sektörünün temel kuralı: konut maliyetleri (tam PITI — anapara, faiz, vergiler, sigorta) ≤{" "}
      <strong>brüt aylık gelirin %28'i</strong> olmalı ve toplam borç (konut + araba + öğrenci kredileri + kredi kartı asgari ödemeleri) ≤{" "}
      <strong>brüt aylık gelirin %36'sı</strong> olmalıdır.
    </p>
    <p>
      Örnek: Yıllık 120.000$ brüt = aylık 10.000$. %28 → maksimum 2.800$ PITI. %36 → toplam 3.600$ borç. Halihazırda araba kredisine 500$ ve öğrenci kredilerine 200$ ödüyorsanız, gerçek konut tavanınız 3.600$ − 700$ = 2.900$'dır. Arka uç oranı daha sıkı olduğunda konut tavanı %28'in üzerinde kazanır.
    </p>

    <h2>Brüt ve net — <a href="/learn/fire-movement">FIRE</a> topluluğu düzeltmesi</h2>
    <p>
      Brütün %28'i, vergilerin, sigorta primlerinin ve emeklilik katkılarının hesabınıza yansımadığını göz ardı eder. Daha muhafazakar bir versiyon: <strong>konut ≤ net maaşın %25'i.</strong>{" "}
      Kişisel finans yazarlarının varsayılan olarak kullandığı kural budur ve vergi diliminize bağlı olarak kabaca brütün %20-22'sine karşılık gelir. Nakit akışı istikrarını kaldıraçtan daha çok önemsiyorsanız net maaşı kullanın.
    </p>

    <h2>Aylık ödemeden satın alma fiyatına</h2>
    <p>
      Hedef bir PITI verildiğinde, geriye doğru çalışın. 30 yıl için %6,5 faiz oranında, 2.800$'lık bir PITI hedefi şu şekilde ayrışır: vergileri çıkarın (400.000$'lık bir evde %1,2 efektif oranla aylık 400$ = 400$) ve sigortayı (aylık 125$). Kalan A&F bütçesi: 2.800$ − 400$ − 125$ = 2.275$.
    </p>
    <p>
      %6,5 faiz × 30 yılda aylık 2.275$ anapara+faiz, yaklaşık{" "}
      <strong>360.000$'lık bir ipoteği</strong> destekler. Peşinatınızı ekleyin (diyelim %20 = 90.000$) ve satın alma fiyatı olarak <strong>450.000$</strong> elde edersiniz. Yıllık 120.000$ brüt gelirle 2.800$ PITI hedefinde alabileceğiniz ev budur.
    </p>

    <h2>Borç veren ön onayının bundan neden daha yüksek olduğu</h2>
    <p>
      Borç verenler genellikle %43 DTI ("nitelikli ipotek" sınırı) veya daha yükseğinde onay verir. 120.000$ brütte bu, aylık 4.300$ toplam borç anlamına gelir — mevcut borçlardan sonra 3.800$'a yaklaşan bir PITI. Bu onayı almak size daha büyük bir ev ve sıfır finansal marjı olan bir hayat satın alır. Ev zengini, nakit fakiri olursunuz ve bir işten çıkarmadan paniğe kapılırsınız. Temel kural vardır çünkü haciz oranlarının DTI'ye karşı regresyonu 28/36'nın ötesinde çirkinleşir.
    </p>

    <h2>Gerçekten uygulanması gereken stres testleri</h2>
    <p>
      Bir ilana aşık olmadan önce, üç senaryoya karşı stres testi yapın:
    </p>
    <p>
      <strong>(1) Tek gelir senaryosu.</strong> Bu çift gelirli bir hane ise, tek bir gelir 3 ay boyunca birikimleri tüketmeden PITI'yi karşılayabilir mi? Cevap hayırsa, aşırı borçlanmışsınız demektir.
    </p>
    <p>
      <strong>(2) Faiz oranı sıfırlama senaryosu.</strong> Faiz oranı bugünkü tekliften %1 daha yüksek olsa, ödeme hala uyuyor mu? (ARM'ler için geçerlidir, sabit faizliler için daha az.)
    </p>
    <p>
      <strong>(3) Bakım yılı.</strong> Beklenen bakım olarak ev değerinin yılda %1'ini ekleyin. 450.000$'lık bir evde bu, bir ev onarım fonuna biriktirmeniz gereken 4.500$ ≈ aylık 375$'dır. PITI + 375$ hala uymalıdır.
    </p>

    <h2>Yüksek maliyetli piyasalarda %28 tuzağı</h2>
    <p>
      San Francisco, Manhattan, Boston veya Seattle'da, ilk kez ev alacaklar için katı %28 genellikle imkansızdır — bazı piyasalarda medyan ev fiyatı / medyan gelir oranı 10'u aşar. %28'i aşmanız gerekiyorsa en azından: (a) 6+ aylık acil durum fonunuz nakitte olsun, (b) başka hiçbir tüketici borcunuz olmasın ve (c) zorunlu satışta işlem maliyetlerini yememek için 5+ yıl kalmayı planlayın.
    </p>

    <h2>Peşinat, PMI ve %20 kısayolu</h2>
    <p>
      %20 peşinat, PMI'den (özel ipotek sigortası, kredinin yıllık %0,3-1,5'i) kaçınır. %0,8 PMI ile 360.000$'lık bir ipotekte bu, yılda 2.880$ veya ayda 240$'dır — %20 peşinatta tamamen düşer. Birçok alıcı eve daha erken girmek için %20 hedefini atlar; bu sorun değil, ancak PMI'nin gerçek PITI'nize eklediğini anlayın. %20 LTV'de yeniden finansman veya kaldırma talebiyle (yasa gereği %22 LTV'de otomatik olarak düşer) kaldırın.
    </p>

    <h2>Kapanış maliyetleri — çoğu ilk kez alıcının gözden kaçırdığı bütçe darbesi</h2>
    <p>
      Kapanış maliyetleri <strong>satın alma fiyatının %2-5'i</strong> arasındadır: borç veren ücretleri, tapu sigortası, emanet hesabı kurulumu, avukat (bazı eyaletlerde), peşin ödenmiş faiz ve vergiler. 450.000$'lık bir evde, peşinatınızın üzerinde 9.000$–22.000$ nakit bütçe ayırın. İlk kez alıcı programları bazen bunun bir kısmını karşılar; emlakçınıza sorun.
    </p>

    <h2>Tam karşılanabilirlik değerlendirmesini yapın</h2>
    <p>
      28/36 tavanınızı almak için{" "}
      <a href="/tools/mortgage-affordability-calculator">ipotek karşılanabilirlik hesaplayıcısı</a> ile başlayın, ardından gerçek PITI'yi görmek için belirli ilanı{" "}
      <a href="/tools/mortgage-calculator">ipotek hesaplayıcısına</a> girin.{" "}
      <a href="/tools/budget-calculator">Bütçe hesaplayıcısında</a> gerçek harcamalarınızla çapraz kontrol yapın — amaç, halihazırda sahip olduğunuz hayatın içine sığan bir PITI'dir, sahip olduğunuz hayatı sığdırmak için küçülmeye zorlayan bir PITI değil.
    </p>
  </>
);