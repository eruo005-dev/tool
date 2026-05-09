import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Yıllık maaşı saatlik ücrete çevirmek basit bir bölme işlemi gibi görünür.
      İşin püf noktası, cevabın neyi karşılaştırmaya çalıştığınıza bağlı olmasıdır
      — bir işe alımcının ilan ettiği maaş, bir sözleşmeli saatlik ücret, kendi
      serbest çalışma faturanız veya çalıştığınız saat başına elinize geçen net
      ücret. Her biri farklı bir bölen kullanır. Bu rehber dört durumu da
      açıklar ve genellikle 10 saniyede işe yarayan zihinsel hesap kuralını
      verir.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>10 saniye kuralı (kabaca)</h2>
    <p>
      <strong>Yıllık maaşı 2.000'e bölün</strong> kabaca saatlik karşılığını
      bulmak için. $100.000/yıl ≈ $50/saat. $60.000/yıl ≈
      $30/saat. Bunun nedeni tipik bir tam zamanlı yılın ~52 hafta ×
      40 saat = 2.080 saat olmasıdır; 2.000, daha temiz bir sayıdır ve ayrıca
      yaklaşık olarak 2 hafta ücretsiz tatili de dengeler.
    </p>
    <p>
      Bunu zihinsel matematik için kullanın: &ldquo;Pazarım için 72 bin dolar çok mu düşük?&rdquo;
      → 72 bin dolar / 2.000 = 36$/saat — saatlik ücretinizin ne olması
      gerektiğini bildiğinizle karşılaştırın.
    </p>

    <h2>Dört farklı saatlik eşdeğer</h2>
    <p>
      <strong>(1) Nominal saatlik</strong> = Maaş / 2.080. İK'nın maaş
      hesaplamalarında kullandığı budur. 75.000$ / 2.080 = 36,06$/saat.
    </p>
    <p>
      <strong>(2) Çalışma saati (tatil ayarlamalı)</strong> = Maaş /
      2.000 (veya 3 hafta tatil yapıyorsanız 1.960). Tatil haftalarınız için
      ödeme almadığınız sözleşmeli ücretlerle karşılaştırmak için daha iyidir. 75.000$ / 2.000 = 37,50$/saat.
    </p>
    <p>
      <strong>(3) İşverenin tam yüklü saatlik ücreti</strong> = Maaş + yan haklar
      (sağlık sigortası, 401k eşlemesi, bordro vergileri, ücretli izin) / 2.080.
      Çoğu W-2 işi için yan haklar %25–40 ekler — tam yüklü saatlik ücret tipik olarak
      75.000$ × 1,35 / 2.080 = 48,68$/saattir. Bu, serbest çalışanların W-2 işini
      bırakırken teklif vermesi gereken rakamdır.
    </p>
    <p>
      <strong>(4) Net ele geçen saatlik ücret</strong> = (Maaş − vergiler − ödediğiniz
      yan haklar) / fiilen çalışılan saat. Bu, harcadığınız saat başına fiilen
      elinize geçen miktardır. Kaliforniya'da 401(k) ve sağlık primi olan 75 bin dolarlık bir iş için:
      yaklaşık 55.000$ net / 2.080 = yaşanılan zamanın 26,44$/saati,
      hatta ücretsiz fazla mesaiyi sayarsanız daha da az.
    </p>

    <h2>Serbest çalışma / sözleşme matematiği — çok farklı</h2>
    <p>
      W-2 istihdamından serbest çalışmaya geçiyorsanız, talep etmeniz gereken
      saatlik ücret eski maaşınızın nominal saatlik ücretinden <strong>çok daha yüksektir</strong>.
      Artık şunları karşılıyorsunuz:
    </p>
    <p>
      <strong>Serbest meslek vergisi (%15,3)</strong> işverenin eskiden
      yarısını karşıladığı.
    </p>
    <p>
      <strong>Kendi sağlık sigortanız</strong>, genellikle aile planı için yılda 8–20 bin dolar.
    </p>
    <p>
      <strong>Kendi emeklilik katkılarınız</strong> (işverenden eşleme yok).
    </p>
    <p>
      <strong>Tatil, hastalık izni ve resmi tatiller</strong> tamamen ücretsizdir.
    </p>
    <p>
      <strong>Faturalanamayan zaman</strong> — idari işler, satış, fatura kesme,
      takip, teklifler. Bir serbest çalışanın çalışma saatlerinin %15–40'ı
      faturalanamaz.
    </p>
    <p>
      Temel kural: <strong>serbest çalışma saatlik ücreti = W-2 saatlik ücreti × 1,5 ila
      2,0 katı</strong> aynı yıllık net geliri ve eşdeğer yan hakları elde etmek için. W-2'de
      saatte 50 dolar kazanıyorsanız, yüklenici olarak saatte 75–100 dolar talep edin.
    </p>

    <h2>50 hafta / 2.000 saat kuralı — neden kullanılır</h2>
    <p>
      ABD'de maaştan saatliğe dönüşüm kuralı 2.080 saati (52 × 40) kullanır.
      2.000 saat kuralı (50 hafta × 40 saat) 2 hafta tatili hesaba katar ve daha
      temiz saatlik rakamlar üretir. Avrupa genellikle 1.920 saat (48 × 40) veya
      daha azını kullanır, bu da daha fazla tatili yansıtır. Avustralya 1.976
      (52 × 38) kullanır. Teklif vermeden önce karşı tarafınızın hangi standardı
      kullandığını kontrol edin.
    </p>

    <h2>Ters yön — saatlikten maaşa</h2>
    <p>
      <code>Yıllık maaş = Saatlik × 2.080</code> (tam zamanlı) veya{" "}
      <code>× (saat/hafta × 52)</code> daha azı için.
    </p>
    <p>
      40$/saat × 2.080 = yıllık 83.200$ nominal. Haftada 25 saat yarı zamanlı:
      40$ × 25 × 52 = yıllık 52.000$.
    </p>

    <h2>&ldquo;Bu teklif adil mi?&rdquo; mantık kontrolü</h2>
    <p>
      Bir teklifi veya serbest çalışma projesini değerlendirirken, saatliğe
      çevirin ve &ldquo;bunu saatlik ücret olarak kabul eder miydim?&rdquo; diye sorun.
      Düzenli olarak 55 saatlik haftaları olan bir iş için yıllık 60.000$ maaş teklifi,
      saatte 20,98$'a denk gelir — muhtemelen aynı beceri seti için yerel piyasa
      oranınızın altındadır. Maaş rakamı piyasanın altındaki ücreti gizleyebilir;
      saatlik ücret bunu ortaya çıkarır.
    </p>

    <h2>Fazla mesai ve muaf statü karmaşıklıkları</h2>
    <p>
      ABD yasalarına göre (FLSA), saatlik çalışanlar haftada 40 saatin üzerinde
      bir buçuk kat ücret alır; maaşlı-muaf çalışanlar almaz. 75 bin dolar maaşlı
      olup 55 saatlik haftalar çalışıyorsanız, efektif saatliğiniz 75.000 / (55 × 52)
      = 26,22$/saattir — 40 saatlik haftalarda 36$/saate karşı. Fazla mesai tavan
      eşiği 2019 itibarıyla federal olarak yıllık 35.568$'dı ve artması önerildi;
      eyalet kuralları değişir (Kaliforniya: çoğu muaf rol için yıllık ~66.000$).
    </p>

    <h2>Sözleşme almak için başabaş noktası matematiği</h2>
    <p>
      100 bin dolarlık bir W-2 işinden sözleşmeye geçiyorsanız, sözleşme ücretinizin
      karşılaması gerekir: (1) maaş, (2) değiştireceğiniz yan hakların ~%35'i,
      (3) %10–20 faturalanamayan zaman, (4) serbest meslek vergisinin yarısı.
      Kabaca başabaş noktası: 100 bin dolar × 1,5 / (2.000 × 0,80 faturalanabilir)
      = eşdeğer net gelir için ~94$/saat. Sözleşme 75$/saat ise, maaş kesintisi
      yapıyorsunuz demektir.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Yukarıda açıklanan dört dönüşüm için <a href="/tools/hourly-rate-calculator">saatlik ücret
      hesaplayıcısını</a> kullanın. Belirli bir maaşta net ele geçeni istiyorsanız
      <a href="/tools/paycheck-calculator">maaş çeki hesaplayıcısıyla</a> eşleştirin ve
      sözleşmeli işin &ldquo;ne talep etmeliyim?&rdquo; tarafı için
      <a href="/tools/freelance-rate-calculator">serbest çalışma ücreti
      hesaplayıcısını</a> kullanın — yan haklar, faturalanamayan zaman ve vergi
      yükü dahil.
    </p>
  </>
);