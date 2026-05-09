import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir iş teklifinde &ldquo;yıllık 50.000 dolar&rdquo; dendiğinde, çoğu kişi
      bunu 2.080&rsquo;e böler — 40 saatlik bir haftanın yıllık saat karşılığı — ve
      24,04 dolar elde eder. Bu muhasebe saatlik ücretidir. Gerçekte kazandığınız
      ücret bu değildir. Bu rehber, maaş etiketini gerçek saat başına kazancınıza
      dönüştüren üç düzeltmeyi ve 65 bin dolarlık bir işin neden 55 bin dolarlık
      bir işten saat başına daha az kazandırabileceğini adım adım açıklıyor.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Basit hesapla başlayın</h2>
    <p>
      Maaşı 2.080&rsquo;e bölün. 50.000 dolar/yıl ÷ 2.080 = 24,04 dolar/saat.
      Bu, iş teklifi karşılaştırma araçlarında ve LinkedIn&rsquo;de görünen
      sayıdır. Neredeyse her zaman yanlıştır.
    </p>

    <h2>Düzeltme 1: Ücretli izin ve tatiller</h2>
    <p>
      2 hafta ücretli izin ve 10 resmi tatiliniz varsa, bu çalışmadığınız halde
      ücret aldığınız 20 gün — 160 saat demektir. Gerçek çalışılan saat böleni
      2.080&rsquo;den 1.920&rsquo;ye düşer.
    </p>
    <p>
      50.000 dolar ÷ 1.920 = 26,04 dolar/saat. Ücretli izninizin tamamını
      kullandığınız aynı iş, basit hesaplamanın önerdiğinden saat başına 2 dolar
      daha fazla kazandırır. 4 hafta ücretli izni olan bir iş, saat başına daha
      da fazla kazandırır; bu nedenle kimsenin kullanmadığı sınırsız ücretli izin,
      aynı maaş etiketinde bile kötü bir anlaşmadır.
    </p>

    <h2>Düzeltme 2: Yan haklar ve işveren tarafından ödenen maliyetler</h2>
    <p>
      İşveren tarafından ödenen yan haklar tazminat olarak sayılmalıdır çünkü
      aksi takdirde bunlar cebinizden çıkardı. Tipik eklemeler:
    </p>
    <p>
      <strong>Sağlık sigortası primi</strong> — kapsam düzeyine ve aile
      büyüklüğüne bağlı olarak yılda 6.000–12.000 dolar. <strong>401(k) eşlemesi</strong>{" "}
      — maaşın %3–6&rsquo;sı yaygındır, yani 50 bin dolarlık gelirde 1.500–3.000
      dolar. <strong>İşveren bordro vergileri</strong> (%7,65 FICA) size
      tazminat değildir ancak gerçek işe alım maliyetidir; kendi ücret
      hesabınızda bunları yok sayın. <strong>HSA katkıları, hayat sigortası, kısa
      süreli engellilik</strong> — yılda toplam 500–2.000 dolar.
    </p>
    <p>
      Bunları ekleyin ve 50 bin dolarlık maaş, 58–65 bin dolarlık bir toplam
      pakete dönüşür. Böleni yeniden hesaplayın: 60.000 dolar ÷ 1.920 = 31,25
      dolar/saat. Şimdi basit sayının 7 dolar/saat üzerindeyiz.
    </p>

    <h2>Düzeltme 3: Fazla mesai ücreti ödenmeyen çalışma ve işe gidiş-geliş</h2>
    <p>
      Maaşlı çalışanlar, 40 saat için ücret almalarına rağmen genellikle 45–50
      saat çalışır ve gidiş-geliş 30–90 dakika sürer. Her ikisi de başka amaçlar
      için kullanılamayan saatlerdir.
    </p>
    <p>
      Bunları dürüstçe ele alın. Ortalama 45 saat çalışıyor ve günlük 1 saat
      yolculuk yapıyorsanız, bu haftada 50 taahhüt edilen saat × 48 çalışılan
      hafta = yılda 2.400 taahhüt edilen saat demektir.
    </p>
    <p>
      Aynı 60 bin dolarlık toplam tazminat ÷ 2.400 taahhüt edilen saat = 25
      dolar/saat — şimdi <em>basit temelin altında</em>. Bu, daha düşük maaş
      etiketine sahip uzaktan işlerin bazen taahhüt edilen saat başına daha
      avantajlı çıkmasının aritmetiğidir.
    </p>

    <h2>Karşılaştırmalı örnek</h2>
    <p>
      <strong>Teklif A:</strong> 65.000 dolar maaş, 2 hafta ücretli izin, sağlık
      sigortası, %3 401(k) eşlemesi, günlük 1 saat yol, 45 saatlik çalışma
      haftaları. Toplam tazminat ≈ 73.000 dolar; taahhüt edilen saat 2.400 → 30,42 dolar/saat.
    </p>
    <p>
      <strong>Teklif B:</strong> 55.000 dolar maaş, 4 hafta ücretli izin, aynı
      sağlık sigortası, %5 401(k) eşlemesi, tamamen uzaktan, 40 saatlik çalışma
      haftaları. Toplam tazminat ≈ 65.000 dolar; taahhüt edilen saat 1.920 → 33,85 dolar/saat.
    </p>
    <p>
      Teklif B, kağıt üzerinde yılda 10.000 dolar daha az ve gerçek oranda saat
      başına 3,43 dolar daha fazladır. <a href="/tools/hourly-rate-calculator">Saatlik ücret
      hesaplayıcısı</a>, maaş, ücretli izin, tatiller ve yan hak değerini
      girdiğinizde bu matematiği otomatik olarak yapar.
    </p>

    <h2>Bunun ne işe yaradığı</h2>
    <p>
      <strong>Pazarlık:</strong> mevcut gerçek ücretinizi bilerek görüşmeye
      gitmek, tahmin yapmak yerine hedef bir rakamı gerekçelendirmenizi sağlar.
      Mevcut ücretiniz 31 dolar/saat ve rolünüz için piyasa 42 dolar/saat ise,
      belirli bir talebiniz olur.
    </p>
    <p>
      <strong>Serbest çalışma fiyatlandırması:</strong> yıllık 60 bin dolarlık
      bir işten ayrılıp serbest çalışmaya başlıyorsanız, yedek saatlik ücretiniz
      yan hakları kendiniz karşıladıktan sonra 31 dolar/saat&rsquo;i geçmeli ve
      tek başına çalışanların fiilen ulaştığı faturalanabilir-toplam saat
      oranındaki %30–40&rsquo;lık kaybı da hesaba katmalıdır. Bu genellikle
      başa baş değil, sürdürmek için 80–120 dolar/saat anlamına gelir.
    </p>
    <p>
      <strong>Ek iş değerlendirmesi:</strong> Saati 20 dolar kazandıran bir ek
      iş &ldquo;günlük işinizin altında&rdquo; değildir — bunu, yol ve yan
      haklar dahil gerçek günlük iş ücretinizle karşılaştırmanız gerekir. Çoğu
      zaman ek iş, elma elmaya karşılaştırmasında günlük işten saat başına daha
      fazla kazandırır.
    </p>

    <h2>İki dakikalık bir sağlaması</h2>
    <p>
      Yıllık maaşınızı alın. Kaba yan hak değeri için 8.000 dolar ekleyin.
      1.800&rsquo;e bölün (ücretli izin ve birkaç hastalık günü dahil gerçekçi
      bir çalışılan saat böleni). Sonuç, gerçek saatlik ücretinizin alt sınır
      tahminidir. Kesin cevaptan birkaç dolar içinde olacaktır.
    </p>
    <p>
      İşveren eşlemesi, sağlık primleri, faturalanabilir-taahhüt edilen saatler
      ve hedef ücret karşılaştırması dahil tam döküm için{" "}
      <a href="/tools/hourly-rate-calculator">saatlik ücret hesaplayıcısını</a>
      kullanın. Net ücret hesaplamaları için{" "}
      <a href="/tools/paycheck-calculator">maaş hesaplayıcısı</a> ve bu rakamla
      ne yapacağınız için{" "}
      <a href="/guides/how-to-negotiate-salary">maaş nasıl pazarlanır</a>{" "}
      rehberiyle birlikte kullanın.
    </p>
  </>
);