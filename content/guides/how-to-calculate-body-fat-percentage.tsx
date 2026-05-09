import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Vücut yağ yüzdesi, kilonuzun aslında nelerden oluştuğunu söyler. 170 libre olan iki kişi tamamen farklı görünebilir ve farklı olabilir: %15 vücut yağına sahip biri zayıf bir atlettir, %30'a sahip biri ise ortalamadır ve muhtemelen istediğinden daha fazla iç organ yağı taşıyordur. BMI bunları ayırt edemez. Bu rehber, vücut yağ yüzdesini ölçmenin beş yolunu, ABD Donanması bant yönteminin çoğu insan için neden en iyi ücretsiz seçenek olduğunu ve bunu güvenilir bir şekilde nasıl takip edeceğinizi anlatır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Vücut yağ %'si neden BMI'dan daha önemlidir</h2>
    <p>
      BMI, bireysel teşhis için asla tasarlanmamış iki sayılı bir orandır (boy ve kilo). 1830'larda nüfus istatistikleri için oluşturulmuştur. 5'10", 200 libre ve %12 vücut yağına sahip bir halterci, nüfusun %90'ından daha az yağ taşımasına rağmen BMI tablosunda "fazla kilolu" olarak görünür. Bu arada, aynı boyda ve 160 libre ağırlığındaki hareketsiz bir ofis çalışanı "sağlıklı" BMI olarak okunabilir ancak %30 yağ ve buna karşılık gelen metabolik risk taşır.
    </p>
    <p>
      Vücut yağ yüzdesi, doktorların, antrenörlerin ve sigorta aktüerlerinin perde arkasında gerçekten önemsediği şeydir. Tartının ötesinde yalnızca bir şeyi ölçebiliyorsanız, bunu ölçün.
    </p>

    <h2>Beş yöntem, doğruluk sırasına göre sıralanmıştır</h2>
    <p>
      <strong>1. DEXA taraması.</strong> Röntgen tabanlı, ±%1 doğruluk, yağı yağsız kütle ve kemikten ayırır. Araştırma düzeyinde standarttır. Yerel bir klinikte tarama başına 50–150 dolar arasındadır.
    </p>
    <p>
      <strong>2. BodPod.</strong> Hava değiştirme pletismografisi. ±%2 doğruluk. DEXA'ya benzer maliyet, daha az yaygın olarak bulunur.
    </p>
    <p>
      <strong>3. Deri kıvrım kaliperleri.</strong> Eğitimli bir operatör 3 veya 7 bölgeyi sıkıştırır ve bir vücut yağ %'sine eşler. Bir profesyonel tarafından yapılırsa ±%3; kendi kendine ölçülürse ±%6. Ucuz ve tekrarlanabilir ancak operatöre bağlıdır.
    </p>
    <p>
      <strong>4. ABD Donanması bant yöntemi.</strong> Ücretsizdir, yalnızca esnek bir bant gerektirir. Çoğu yetişkin için ±%3–4 doğruluk. Boyun ve bel çevresine (kadınlar için kalça eklenir) dayanır. Bu, en iyi ücretsiz seçenektir.
    </p>
    <p>
      <strong>5. Biyoelektrik empedans (BIA) tartıları.</strong> Vücudunuzdan düşük bir akım geçirir ve dirençten tahmin eder. Sadece hidrasyonla sayılar %3–5 oranında dalgalanır, bu nedenle günlük eğilimler gürültülüdür. Yoktan iyidir, ancak bant tutarlılıkta kazanır.
    </p>

    <h2>ABD Donanması bant yöntemi pratikte</h2>
    <p>
      Donanma formülü, 1984'ten beri ABD ordusu tarafından PFA uyumu için kullanılmaktadır. İşe yarar çünkü karın yağı, aynı boydaki vücut kompozisyonları arasındaki baskın ayırt edicidir.
    </p>
    <p>
      Erkekler için:{" "}
      <code>
        VY% = 86,010 × log10(bel − boyun) − 70,041 × log10(boy) + 36,76
      </code>
      . Kadınlar için:{" "}
      <code>
        VY% = 163,205 × log10(bel + kalça − boyun) − 97,684 × log10(boy)
        − 78,387
      </code>
      . İnç cinsinden ölçüm yaparsınız. Hesabı elle yapmayın —{" "}
      <a href="/tools/body-fat-calculator">vücut yağ hesaplayıcı</a> anında halleder.
    </p>
    <p>
      <strong>Doğru ölçün.</strong> Beli göbek deliğinden, bandı her yerde aynı seviyede tutun, karnınızı içeri çekmeyin. Boynu gırtlağın hemen altından, bant düz olacak şekilde. Kalçayı (kadınlar) en geniş noktadan ölçün. Yemek yemeden veya içmeden önce sabah ilk iş olarak ölçün — dolu bir mide bele yarım inç ekleyebilir ve sonucu 1–2 puan oynatabilir.
    </p>

    <h2>Sağlıklı aralıklar</h2>
    <p>
      Amerikan Egzersiz Konseyi vücut yağ yüzdelerini kabaca aşağıdaki gibi gruplandırır. Erkekler: %2–5 temel, %6–13 atletik, %14–17 formda, %18–24 ortalama, %25+ yüksek. Kadınlar daha fazla temel yağ taşır: %10–13 temel, %14–20 atletik, %21–24 formda, %25–31 ortalama, %32+ yüksek. Bunlar yaşla birlikte biraz değişir.
    </p>
    <p>
      "Sağlıklı", "düşük" ile aynı şey değildir. %6'nın altındaki erkekler ve %14'ün altındaki kadınlar adet fonksiyonunu, kemik yoğunluğunu, bağışıklık sağlığını ve testosteronu kaybedebilir. Atletik aralık, neredeyse herkes için temel aralıktan daha iyi bir hedeftir.
    </p>

    <h2>Ne sıklıkla ölçülmeli</h2>
    <p>
      2–4 haftada bir yeterlidir. Vücut yağı günden güne anlamlı şekilde dalgalanmaz — tartı dalgalanır, ancak bunun çoğu su ve glikojendir. Her gün ölçerseniz, gürültünün peşinde koşarak kendinizi çıldırtırsınız.
    </p>
    <p>
      8 hafta boyunca iki sayıyı takip edin: vücut yağ yüzdesi ve bel çevresi. İkisi de düşüyorsa, yağ kaybediyorsunuzdur. Bel düşüyor ancak vücut yağı sabit kalıyorsa, muhtemelen hidrasyondur. Vücut yağı kilo sabitken yükseliyorsa, kas kaybediyorsunuzdur — kesimi yavaşlatın veya daha fazla protein tüketin.
    </p>

    <h2>Sayıyı gerçekten ne değiştirir</h2>
    <p>
      Sır yok. Günde 300–500 kalorilik bir açık (dürüstçe takip edilen), hedef kilonun libresi başına 0,8–1,0 gram protein, haftada 3+ gün direnç antrenmanı ve 7+ saat uyku. 12 hafta boyunca bu kombinasyon çoğu insanda vücut yağını 2–4 puan düşürür — neredeyse herkes tarafından tekrarlanabilir, bu yüzden reklamı yapılan bir sihirli protokol değildir.
    </p>
    <p>
      Vücut yağ hesaplayıcıyı, kalori hedefini belirlemek için{" "}
      <a href="/tools/bmr-calculator">BMR hesaplayıcımız</a> ve hedef tabanlı bir alım sayısı için <a href="/tools/calorie-calculator">kalori hesaplayıcı</a> ile birlikte kullanın. Antrenman tarafı için{" "}
      <a href="/guides/how-to-build-muscle-as-a-beginner">yeni başlayan biri olarak kas nasıl yapılır</a> rehberine bakın.
    </p>
  </>
);