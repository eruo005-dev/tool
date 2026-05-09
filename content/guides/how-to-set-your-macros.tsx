import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Makro <a href="/learn/macros">ayarlamak</a> — her gün tükettiğiniz protein, karbonhidrat ve yağ gramları — sizi belirsiz &ldquo;daha iyi beslen&rdquo; hedeflerinden takip edebileceğiniz bir sayıya taşır. Matematik, fitness sektörünün söylediğinden daha basittir, ancak neredeyse tüm hesaplayıcılar hangi varsayımları yaptıklarını söylemeden size sayılar verir. Bu rehber, makroların kaloriye nasıl dönüştüğünü, üç yaygın hedef stratejisini (kesme, koruma, hacim) ve diğer her şey esnek olsa bile savunmaya değer olan protein tabanını adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Ezberlemeniz gereken kalori eşdeğerleri</h2>
    <p>
      <strong>Protein: Gram başına 4 kalori.</strong>
    </p>
    <p>
      <strong>Karbonhidratlar: Gram başına 4 kalori.</strong>
    </p>
    <p>
      <strong>Yağ: Gram başına 9 kalori.</strong>
    </p>
    <p>
      <strong>Alkol: Gram başına 7 kalori</strong> (genellikle makro hesaplayıcılara dahil edilmez ancak belirtmekte fayda var — bir kadeh şarap ~120 kcal'dir ve neredeyse sıfır makro faydası vardır).
    </p>

    <h2>Adım 1 — günlük toplam kalorinizi belirleyin</h2>
    <p>
      Yuvarlak bir sayıyla değil, TDEE (toplam günlük enerji harcaması) ile başlayın. Bunu hesaplamak için <a href="/guides/how-to-calculate-tdee-and-bmr">TDEE + BMR rehberimizi</a> kullanın. Ardından hedefinize göre ayarlayın:
    </p>
    <p>
      <strong>Yağ kaybı:</strong> TDEE − %15 ila 25. Günde 500 kalori açığı = haftada ~0.5 kg. TDEE − %30'un altına inmeyin — bu, uyumu ve kas korumayı zorlaştırır.
    </p>
    <p>
      <strong>Koruma:</strong> TDEE ±100 kcal. Mevcut kilonuzu korurken vücut kompozisyonunuzu iyileştirmeye çalışıyorsunuz.
    </p>
    <p>
      <strong>Kas kazanımı (hacim):</strong> TDEE + %10 ila 15 (yağsız hacim) veya TDEE + %20 (geleneksel). %20'den fazlası, daha sonra kesmek zorunda kalacağınız yağ ekler.
    </p>

    <h2>Adım 2 — önce proteini sabitleyin</h2>
    <p>
      Protein, korunmaya değer makrodur çünkü açık döneminde kasları korur ve fazla döneminde kas protein sentezini destekler. Kanıta dayalı hedefler:
    </p>
    <p>
      <strong>Vücut ağırlığının kg'ı başına 1.6–2.2 g</strong> kas yapmaya veya korumaya çalışan aktif yetişkinler için. 82 kg'lık bir kişi için bu, günde 126–180 g'dır.
    </p>
    <p>
      <strong>Hedef ağırlığın kg'ı başına 1.8–2.6 g</strong> (veya biliyorsanız yağsız vücut kütlesi) fazla kilolu bireyler için daha iyi çalışır, çünkü vücut ağırlığı × 1.0 sayıyı şişirir.
    </p>
    <p>
      <strong>Kg başına 1.3 g taban</strong> — bunun altı, orta düzeyde bir açıkta bile kas korumayı tehlikeye atar. Çoğu Amerikalı yetersiz protein tüketir, ortalama kg başına ~0.9 g.
    </p>
    <p>
      82 kg × 1.8 g/kg = günde 144 g protein = 576 kcal (2,000 kcal'lik bir planın yaklaşık %30'u).
    </p>

    <h2>Adım 3 — ardından yağı belirleyin</h2>
    <p>
      Yağ, hormonal işlevi (özellikle testosteron, adet düzeni) ve tokluğu destekler. Vücut ağırlığının kg'ı başına 0.7 g'ın altına inmeyin ve keto yapmıyorsanız kalorilerin ~%45'inin üzerine çıkmayın.
    </p>
    <p>
      <strong>Makul aralık:</strong> Vücut ağırlığının kg'ı başına 0.7–1.1 g veya toplam kalorilerin %25–35'i.
    </p>
    <p>
      82 kg × 0.9 g/kg = 72 g yağ = 648 kcal (2,000 kcal'in %32'si).
    </p>

    <h2>Adım 4 — karbonhidratlar geri kalanı doldurur</h2>
    <p>
      Karbonhidratların zorunlu bir diyet gereksinimi yoktur (protein ve yağın aksine), ancak performansı ve toparlanmayı besler. Protein ve yağdan sonra kalan kalorileri 4'e bölerek karbonhidrat gramını bulun.
    </p>
    <p>
      2,000 − 576 (protein) − 648 (yağ) = 776 kcal kalan ÷ 4 ={" "}
      <strong>194 g karbonhidrat</strong>.
    </p>
    <p>
      2,000 kcal kesme diyetindeki 82 kg'lık bir kişi için son makro dağılımı:{" "}
      <strong>144 g protein / 194 g karbonhidrat / 72 g yağ.</strong>
    </p>

    <h2>Yaygın hedef arketipleri</h2>
    <p>
      <strong>Yağ kaybı:</strong> Yüksek protein (kg başına 2.2 g), orta yağ (kg başına 0.8 g), kalan kalorilerden karbonhidrat. Kas ve tokluğu korur.
    </p>
    <p>
      <strong>Kas kazanımı:</strong> Orta-yüksek protein (kg başına 1.8 g), düşük-orta yağ (kg başına 0.8 g), antrenmanı beslemek için yüksek karbonhidrat. TDEE'nin %10–20 üzerinde fazla.
    </p>
    <p>
      <strong>Dayanıklılık performansı:</strong> Düşük yağ, yüksek karbonhidrat (kalorilerin %50–65'i), orta protein. Glikojen ihtiyacını karşılar.
    </p>
    <p>
      <strong>Keto / düşük karbonhidrat:</strong> %70–75 yağ, %20–25 protein, %5–10 karbonhidrat. Belirli durumlar için tedavi edicidir, vücut kompozisyonu için doğası gereği üstün değildir.
    </p>

    <h2>Takip ve %80 kuralı</h2>
    <p>
      Makroları bir uygulamayla (MyFitnessPal, Cronometer, MacroFactor) 2–4 hafta takip etmek size kalibrasyon sağlar — tabakta 30 g proteinin neye benzediğini öğrenirsiniz. Bundan sonra çoğu kişi &ldquo;esnek takibe&rdquo; geçer — her öğünde protein, porsiyon bilincinde karbonhidrat ve yağlar, haftada bir tartım.
    </p>
    <p>
      Her gün hedefi tam olarak tutturmak gerekli değildir. Haftada 5 gün her hedefin ±%10'u içinde olmak, takıntılı hassasiyetle aynı fizyolojik sonucu verir ve çok daha iyi uyum sağlar.
    </p>

    <h2>Mikro besinler — görünmez makro</h2>
    <p>
      Lif, sebze ve mikro besin yoğunluğunu dikkate almadan makro odaklı beslenmek, insanların protein tozları ve bisküvilerle &ldquo;makroları tutturmak&rdquo; ve kendini kötü hissetmekle sonuçlanmasına yol açar. Günde 25–35 g lif hedefleyin ve öğünlerin %80'inden fazlasını tam gıdalarla oluşturun. Makrolar size <em>miktarı</em> söyler; gıda kalitesi, sayının sizin için ne kadar iyi çalıştığını belirler.
    </p>

    <h2>Kendinizinkini hesaplayın</h2>
    <p>
      Kilonuzu, hedefinizi ve aktivite seviyenizi{" "}
      <a href="/tools/macro-calculator">makro hesaplayıcıya</a> girerek bir protein/karbonhidrat/yağ dağılımı alın. Toplam alımınızı TDEE'nize karşı doğrulamak için{" "}
      <a href="/tools/calorie-calculator">kalori hesaplayıcıyla</a> ve başlangıç noktasını kontrol etmek için{" "}
      <a href="/tools/bmi-calculator">BMI hesaplayıcı</a> ile{" "}
      <a href="/guides/how-to-interpret-your-bmi">BMI yorumlama rehberimizi</a> kullanın — vücut kompozisyonu fazla kiloluysa &ldquo;kesme&rdquo; doğru makrodur, zaten sağlıklı bir aralıktaysanız &ldquo;korumak ve direnç antrenmanı yapmak&rdquo; daha iyi olabilir.
    </p>
  </>
);