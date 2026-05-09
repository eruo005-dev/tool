import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir kredi teklifinde, kağıt üzerinde bir düzine sayı görünür ve yalnızca biri gerçekten karşılaştırmanız gereken sayıdır. Anapara, faiz oranı, <a href="/learn/apr">APR</a>, başlangıç ücreti, puanlar, vade, aylık ödeme, toplam faiz, erken ödeme cezası — aylık ödemeye bakarak kredi seçmek, insanların aynı kredide 5.000 $ fazla ödemesinin nedenidir. Bu rehber, neyi karşılaştırmanız gerektiğini, neyi görmezden gelmeniz gerektiğini ve hangi teklifin gerçekten daha ucuz olduğunu söyleyen tek hesaplamayı adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>APR faiz oranı değildir</h2>
    <p>
      <strong>Faiz oranı</strong>, borç verenin bakiye üzerinden talep ettiği orandır. <strong>APR</strong>, çoğu ücreti — başlangıç ücreti, işlem ücreti, indirim puanları — içerir ve gerçek yıllık maliyeti tek bir yüzde olarak ifade eder. İki borç veren de %7.0 faiz oranı teklif edebilir, ancak Borç Veren A 2.000 $ ücret alırken Borç Veren B sıfır ücret alıyorsa, APR'leri %7.4'e karşı %7.0 olabilir. <strong>Teklifler arasında faiz oranını değil, APR'yi karşılaştırın.</strong>
    </p>
    <p>
      Bir uyarı: APR, krediyi vade sonuna kadar tuttuğunuzu varsayar. Muhtemelen yeniden finanse edecek veya erken ödeyecekseniz, düşük faizli, yüksek ücretli bir teklif APR'nin önerdiğinden daha kötü görünür. Kısa vadeli kullanım için APR yerine toplam ödenen tutarı karşılaştırın.
    </p>

    <h2>Toplam maliyet hesaplaması — önemli olan tek şey</h2>
    <p>
      Her teklif için hesaplayın:{" "}
      <code>Toplam maliyet = (Aylık ödeme × Ay sayısı) + Peşin ücretler</code>.
      Ardından anaparayı çıkarın. Bu, paranın gerçek dolar cinsinden maliyetidir.
    </p>
    <p>
      Örnek: 20.000 $ kredi, 5 yıl.
    </p>
    <p>
      <strong>Teklif A:</strong> %6.5 faiz, 0 $ ücret. Aylık = 391.32 $. Toplam ödenen = 23.479 $. <strong>Faiz maliyeti: 3.479 $.</strong>
    </p>
    <p>
      <strong>Teklif B:</strong> %5.9 faiz, 800 $ başlangıç ücreti. Aylık = 385.64 $. Toplam ödenen = 23.138 $ + 800 $ ücret = 23.938 $.{" "}
      <strong>Faiz + ücretler: 3.938 $.</strong>
    </p>
    <p>
      &ldquo;Düşük faizli&rdquo; Teklif B aslında{" "}
      <strong>459 $ daha pahalıdır</strong>. Aylık ödeme 5.68 $ daha ucuzdur, ancak ücret bunu dengeler. APR'nin tam olarak bu nedenle var olmasının ve borç verenlerin başlangıç ücretini gizlerken &ldquo;en düşük faiz oranı&rdquo; reklamı yapmayı sevmelerinin nedeni budur.
    </p>

    <h2>Vade — en büyük gizli değişken</h2>
    <p>
      Daha uzun vade her zaman daha düşük aylık ödemeler <em>ve</em> daha fazla toplam faiz anlamına gelir. Borç verenler, ödemeleri cazip gösterecek vadeler sunar. Aylık ödemeye odaklanmayın — her zaman aynı vadeyi aynı vadeyle karşılaştırın veya toplam dolar tutarını kullanın.
    </p>
    <p>
      Aynı 20.000 $ %6.5 faizle: 3 yıl vade = 613 $/ay, 2.063 $ faiz. 5 yıl = 391 $/ay, 3.479 $ faiz. 7 yıl = 294 $/ay, 4.727 $ faiz. 7 yılı 3 yıla tercih etmek, aynı kredide size fazladan 2.664 $'a mal olur — faizde %129 artış.
    </p>

    <h2>Erken ödeme cezaları — her zaman kontrol edin</h2>
    <p>
      Bazı krediler (mortgage'da nadir, subprime otomobil ve bazı kişisel kredilerde yaygın) erken ödeme yapmanız durumunda sizi cezalandırır. 20.000 $ üzerinde %2'lik bir erken ödeme cezası, erken ödeme yapmanız durumunda cebinizden çıkan 400 $'dır. Açıklama belgesini okuyun — &ldquo;erken ödeme cezası&rdquo; görürseniz, bunu hesaba katın veya teklifi reddedin.
    </p>

    <h2>Başlangıç ücreti ve indirim puanları</h2>
    <p>
      <strong>Başlangıç ücreti</strong>, borç verenin krediyi yazmak için talep ettiği ücrettir. Genellikle anaparanın %0.5–2'si kadardır. Kaçınılmazdır ancak pazarlık edilebilir.
    </p>
    <p>
      <strong>İndirim puanları</strong> isteğe bağlıdır — faiz oranını düşürmek için anaparanın %1'ini ödersiniz, genellikle %0.25 oranında. Başabaş noktası hesaplaması: puanların maliyetini aylık tasarrufa bölün. Başabaş noktası, krediyi tutacağınız sürenin yarısından azsa, puanlar buna değer. Aksi takdirde, bunları atlayın.
    </p>

    <h2>4 sütunlu karşılaştırma tablosu</h2>
    <p>
      Tüm teklifler için yalnızca dört sütunlu basit bir karşılaştırma yapın: (1) APR, (2) aylık ödeme, (3) toplam maliyet (ödeme × ay + ücretler), (4) erken ödeme cezası evet/hayır. Diğer her şey gürültüdür. En düşük toplam maliyete sahip ve erken ödeme cezası olmayan teklif kazanır, nokta.
    </p>

    <h2>Önce yumuşak sorgulu ön onay</h2>
    <p>
      Ön onay, yumuşak bir kredi sorgulamasıdır — puanınızı etkilemez ve resmi olarak başvurmadan önce birden fazla borç verenden oranları görmenizi sağlar. Çoğu çevrimiçi borç veren (SoFi, LightStream, Upstart, Marcus) bunu sunar. 3–5 yumuşak sorgulu teklif alın, ardından yalnızca en iyi seçeneğiniz için sert sorgulu başvuru yapın.
    </p>
    <p>
      Birden fazla borç verene sert sorgulu başvuru yaparsanız, bunu 14 günlük bir pencere içinde yapın — kredi büroları, oran araştırması için yapılan sert sorgulamaları puanlama amaçları için tek bir sorgulama olarak ele alır. Bunları bir aya yayarsanız, puanınızı hiçbir şey için 10–20 puan düşürürsünüz.
    </p>

    <h2>Bir teklifi hemen diskalifiye eden kırmızı bayraklar</h2>
    <p>
      <strong>Zorunlu sigorta eklentileri</strong> (kredi hayatı, engellilik) ödemeye dahil edilmiş — neredeyse her zaman aşırı pahalıdır. Reddedin veya uzaklaşın.
    </p>
    <p>
      <strong>Önceden hesaplanmış faiz</strong> (subprime otomobilde görülür) — ne zaman öderseniz ödeyin tüm faizi peşin ödersiniz. Erken ödemeyi anlamsız kılar. Başka bir borç veren bulun.
    </p>
    <p>
      <strong>Belirtilmiş tavanı olmayan değişken faiz oranı</strong>. Oran, tavan olmadan aleyhinize hareket edebilir. Bir tavanı olan HELOC'larda kabul edilebilir, diğer her yerde tehlikelidir.
    </p>

    <h2>İmzalamadan önce sayıları hesaplayın</h2>
    <p>
      Her teklifi bir{" "}
      <a href="/tools/loan-calculator">kredi hesaplayıcıya</a> girin, toplam maliyeti hesaplayın, 4 sütunlu tablonuzda karşılaştırın. Birden fazla borcu birleştiriyorsanız, bunu bir{" "}
      <a href="/tools/debt-payoff-calculator">borç ödeme hesaplayıcı</a> ile eşleştirin ve kredi bir ev içinse, bir{" "}
      <a href="/tools/mortgage-calculator">mortgage hesaplayıcı</a> kullanın — mortgage matematiği, saf kredi matematiğinin atladığı PITI ve emanet hesaplarını içerir.
    </p>
  </>
);