import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Alkol matematiği, çoğu içicinin fark ettiğinden daha önemlidir. Bir &ldquo;kadeh şarap&rdquo; %11 ABV'de 125 ml veya %14.5 ABV'de 250 ml anlamına gelebilir — aynı isim için neredeyse üç kat daha fazla alkol. Sağlık yönergeleri dahilinde kalmak, toleransınızı takip etmek veya gerçekte ne içtiğinizi bilmek istiyorsanız, tutarlı bir birime ihtiyacınız var. Birleşik Krallık &ldquo;birimleri&rdquo; (10 ml saf alkol), ABD &ldquo;standart içkileri&rdquo; (14 g saf alkol) kullanır ve barmenler ikisini de kullanmaz. Bu rehber size formülleri, eşik değerleri ve hızlı zihinsel kestirmeleri sunar, böylece bardağınızda ne olursa olsun doğru sayabilirsiniz.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. Birleşik Krallık birim formülü</h2>
    <p>
      Bir BK birimi = 10 ml (8 g) saf etanol. Formül basittir:
    </p>
    <pre>{`birim = (ABV% × hacim ml) / 1000`}</pre>
    <p>
      175 ml'lik bir kadeh %13 şarap: <code>13 × 175 / 1000 = 2.275 birim</code>. Bir pint (568 ml) %5 bira: <code>5 × 568 / 1000 = 2.84 birim</code>. 25 ml'lik bir tek %40 alkollü içki: <code>40 × 25 / 1000 = 1.0 birim</code>. Matematik her içecek için aynıdır — sadece ABV ve hacim değişir.
    </p>

    <h2>2. ABD &ldquo;standart içkisi&rdquo;</h2>
    <p>
      ABD, bir standart içkiyi 14 g (17.7 ml) saf alkol olarak tanımlar. Bu kabaca 1.75 BK birimine eşittir. Tipik ABD pratik kuralları:
    </p>
    <ul>
      <li>12 oz (355 ml) %5 bira = 1 standart içki</li>
      <li>5 oz (148 ml) %12 şarap = 1 standart içki</li>
      <li>1.5 oz (44 ml) %40 alkollü içki = 1 standart içki</li>
    </ul>
    <p>
      Bunlar kabaca eşleşecek şekilde tasarlanmıştır. Gerçekte, %7.5 ABV'de 16 oz'luk bir bardaktaki bir craft IPA, bir değil <strong>2 standart içkiye</strong> daha yakındır.
    </p>

    <h2>3. Haftalık yönergeler</h2>
    <p>
      Birleşik Krallık Baş Tıp Görevlileri, 3+ güne yayılmış ve birkaç alkolsüz gün içeren <strong>haftada en fazla 14 birim</strong> önermektedir. ABD Beslenme Yönergeleri, erkekler için günde en fazla 2 standart içki ve kadınlar için 1 standart içki önermektedir — bu sırasıyla haftada yaklaşık 14 ve 7'ye denk gelir. DSÖ'nün tutumu daha nettir: <em>sağlık için hiçbir alkol seviyesi güvenli değildir</em>. Bu sayılar hedef değil, tavan değerlerdir.
    </p>

    <h2>4. Şarap matematiği çoğu kişinin sayıyı kaybettiği yerdir</h2>
    <p>
      Şarap şişeleri 750 ml gelir. %13 ABV'de bu, şişe başına <code>13 × 750 / 1000 = 9.75 BK birimi</code> veya ~5.5 ABD standart içkisi demektir. %14 şarabın &ldquo;büyük&rdquo; 250 ml'lik restoran porsiyonu 3.5 birimdir — haftalık limitinizin dörtte biri tek bir bardakta. Yeni Dünya kırmızıları ve beyazları rutin olarak %14-15 ABV'ye ulaşır; eski Avrupa şarapları %11-12'ye daha yakındır. Etiketi her zaman kontrol edin.
    </p>

    <h2>5. Bira matematiği güç seviyesine göre</h2>
    <p>
      Bira ABV'si ~%3 (hafif lager) ile %12+ (imperial stout) arasında değişir. Bir BK pinti (568 ml) için hızlı tablo:
    </p>
    <ul>
      <li>%3.5 session bitter: 2.0 birim</li>
      <li>%4.5 standart lager: 2.6 birim</li>
      <li>%5.5 craft pale ale: 3.1 birim</li>
      <li>%7.5 IPA: 4.3 birim</li>
      <li>%10 imperial stout: 5.7 birim</li>
    </ul>
    <p>
      Tek bir sert IPA pinti, bir kadeh şarabı geçebilir. &ldquo;Sadece bir bira&rdquo; sabit bir doz değildir.
    </p>

    <h2>6. Alkollü içkiler ve kokteyller</h2>
    <p>
      Bir BK pub ölçüsü 25 ml'dir (bazı publar 35 ml döker). Bir ABD shot'ı tipik olarak 1.5 oz (44 ml)'dir. Çoğu alkollü içki %37-40 ABV'dedir. 25 ml cin dökülen bir cin tonik 1 birimdir; bir duble 2 birimdir. Kokteyller genellikle birden fazla bileşen arasında 50-90 ml alkollü içki içerir — bir Long Island Iced Tea tek bir bardakta <strong>4-5 birime</strong> ulaşabilir. Dökülen miktarı göremediğinizde, daha fazla olduğunu varsayın.
    </p>

    <h2>7. Kestirme zihinsel matematik</h2>
    <p>
      Hızlı tahmin için bunları ezberleyin:
    </p>
    <ul>
      <li>%4 biranın pinti = 2.3 birim</li>
      <li>Küçük (125 ml) %12 şarap = 1.5 birim</li>
      <li>Orta (175 ml) %13 şarap = 2.3 birim</li>
      <li>Büyük (250 ml) %14 şarap = 3.5 birim</li>
      <li>Tek alkollü içki (25 ml, %40) = 1 birim</li>
    </ul>
    <p>
      Emin olmadığınızda yukarı yuvarlayın. Eksik tahmin etmek varsayılan başarısızlık modudur.
    </p>

    <h2>8. BK birimlerini ABD içkilerine dönüştürme</h2>
    <p>
      Bir ABD standart içkisi = 1.75 BK birimi. Dönüştürmek için:
    </p>
    <pre>{`ABD içkileri = BK birimleri / 1.75
BK birimleri = ABD içkileri × 1.75`}</pre>
    <p>
      BK haftalık limiti 14 birim = kabaca 8 ABD standart içkisi. ABD günlük limiti 2 içki = 3.5 BK birimi. Aynı etanol, farklı ambalaj.
    </p>

    <h2>9. Zaman ve kan alkolü</h2>
    <p>
      Karaciğeriniz saatte yaklaşık bir birim işler (her ~90 dakikada bir ABD standart içkisi). Bir saatte 4 birim içerseniz, bir sonraki saate 3 birimlik alkol taşıyorsunuz demektir. Yiyecek emilimi yavaşlatır ancak toplamı azaltmaz. Kahve sizi ayıltmaz — sadece zaman ayıltır.
    </p>

    <h2>10. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>ml yerine &ldquo;kadeh&rdquo; kullanmak.</strong> Evdeki dökülen miktarlar restoran porsiyonlarından %30-50 daha fazladır. Gözünüzü kalibre etmek için bir kez ölçün.
      </li>
      <li>
        <strong>ABV artışını görmezden gelmek.</strong> Craft bira ve Yeni Dünya şarabı son on yılda daha güçlü hale geldi. 2015 IPA'sı ile 2026 IPA'sı aynı içecek değildir.
      </li>
      <li>
        <strong>Kokteylleri &ldquo;tek içki&rdquo; olarak saymak.</strong> Her kokteyldeki alkollü içkileri sayın ve toplayın. Bir margarita genellikle 1 değil, 2 birimdir.
      </li>
      <li>
        <strong>İçilmeyen günleri unutmak.</strong> BK yönergesi 14 birim <em>3+ güne yayılmış</em> şeklindedir. Cumartesi günü on birim, günde 2 birim ile aynı şey değildir.
      </li>
      <li>
        <strong>&ldquo;Düşük kalorili&rdquo; etiketlerine güvenmek.</strong> Düşük kalorili bir bira yine de %5 ABV olabilir. Kalori sayısı ve alkol içeriği bağımsızdır.
      </li>
    </ul>

    <h2>11. Sayıları hesaplayın</h2>
    <p>
      Tahmin etmek yerine gerçek içeceğinizin ABV'sini ve hacmini girin. Ardından bunu günlük kalori hesabınızla eşleştirin — alkol 7 kcal/g'dır, sadece yağdan sonra ikinci sıradadır.
    </p>
    <p>
      <a href="/tools/alcohol-unit-calculator">Alkol birim hesaplayıcı</a>
      <a href="/tools/caffeine-intake-calculator">Kafein alım hesaplayıcı</a>
      <a href="/tools/calorie-calculator">Kalori hesaplayıcı</a>
    </p>
  </>
);