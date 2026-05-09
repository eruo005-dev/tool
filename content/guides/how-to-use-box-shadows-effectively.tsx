import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Kutu gölgesi, web'in derinlik sistemidir. Doğru yapıldığında,
      kartların katmanlı, butonların tıklanabilir, modallerin
      yüzüyormuş gibi hissettirir. Yanlış yapıldığında, sayfanızın
      2010 iOS skeuomorphism övgüsü gibi görünmesine neden olur. Bu
      kılavuz, altı kutu gölgesi değerini ve gerçekte ne yaptıklarını,
      Material Design ve modern tasarım sistemleri tarafından
      kullanılan yükseltme sistemini, iç gölgeleri, gerçekçi hissettiren
      çok katmanlı gölgeleri, karanlık mod farklılıklarını,
      performansı ve gölgelerin sonradan eklenmiş gibi görünmesine
      neden olan yaygın hataları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Altı değer, çözüldü</h2>
    <p>
      <code>box-shadow: offset-x offset-y blur spread color
      [inset]</code>
    </p>
    <p>
      <strong>offset-x:</strong> yatay mesafe. Pozitif = sağ,
      negatif = sol.
    </p>
    <p>
      <strong>offset-y:</strong> dikey mesafe. Pozitif = aşağı,
      negatif = yukarı. Çoğu gölgenin pozitif y değeri vardır (yukarıdan gelen ışık).
    </p>
    <p>
      <strong>blur:</strong> gölge kenarının ne kadar yumuşak olduğu. Yüksek =
      daha yumuşak, daha büyük görünen gölge. 0 = sert kenar.
    </p>
    <p>
      <strong>spread:</strong> bulanıklık uygulanmadan önce gölgenin ne kadar
      büyüdüğü veya küçüldüğü. Pozitif genişletir; negatif daraltır.
      Genellikle atlanır (varsayılan 0).
    </p>
    <p>
      <strong>color:</strong> gölge rengi, genellikle yarı saydam
      siyah veya koyu.
    </p>
    <p>
      <strong>inset:</strong> isteğe bağlı anahtar kelime — gölge
      öğenin dışında değil içinde görünür.
    </p>

    <h2>Yükseltme modeli</h2>
    <p>
      Material Design, her seviyenin bir öğenin ne kadar
      &ldquo;kaldırılmış&rdquo; olduğunu temsil ettiği katmanlı bir gölge
      sistemini popüler hale getirdi. Modern tasarım sistemleri
      (Tailwind, Radix Themes, Chakra) aynı modeli takip eder.
    </p>
    <p>
      <strong>Yükseltme 1 (xs):</strong> ince ayırma —
      <code> 0 1px 2px rgba(0,0,0,0.05)</code>. Kenarlıksız kartlar
      veya giriş alanları için.
    </p>
    <p>
      <strong>Yükseltme 2 (sm):</strong> kartlar, butonlar —
      <code> 0 1px 3px rgba(0,0,0,0.1)</code>.
    </p>
    <p>
      <strong>Yükseltme 3 (md):</strong> yüzen kartlar, açılır menüler —
      <code> 0 4px 6px rgba(0,0,0,0.1)</code>.
    </p>
    <p>
      <strong>Yükseltme 4 (lg):</strong> üzerine gelme durumları, popover'lar —
      <code> 0 10px 15px rgba(0,0,0,0.1)</code>.
    </p>
    <p>
      <strong>Yükseltme 5 (xl):</strong> modaller, çekmeceler —
      <code> 0 20px 25px rgba(0,0,0,0.15)</code>.
    </p>
    <p>
      <strong>Yükseltme 6 (2xl):</strong> büyük yüzen öğeler —
      <code> 0 25px 50px rgba(0,0,0,0.25)</code>.
    </p>
    <p>
      Projenizde tutarlı bir set kullanın. Tutarsız gölgeler,
      elle yapılmış bir tasarımın işaretidir.
    </p>

    <h2>Çok katmanlı gölgeler — gerçekçiliğin sırrı</h2>
    <p>
      Gerçek dünya gölgelerinin birden çok bileşeni vardır: nesnenin
      hemen altındaki sert &ldquo;temas&rdquo; gölgesi ve daha uzaktaki
      yumuşak ortam gölgesi. Tek bir CSS gölgesi bunlardan birini
      yaklaşık olarak verir; ikisini üst üste koymak nesnenin
      zemine oturmuş hissettirir.
    </p>
    <p>
      <code>box-shadow: 0 1px 2px rgba(0,0,0,0.08), 0 4px 12px
      rgba(0,0,0,0.04);</code>
    </p>
    <p>
      İlk katman sıkı ve daha keskindir (temas); ikincisi dağınıktır
      (ortam). Çok katmanlı gölgeler, Stripe
      ve Linear arayüzlerinin cilalı görünmesini sağlayan şeydir.
    </p>
    <p>
      <strong>Tailwind'in varsayılan shadow-md'si:</strong> dört
      katmanlı rgba gölgesi. Hesaplanan değere bakın — bu
      tek bir gölge değil, bir yığındır.
    </p>

    <h2>Renk — siyah her zaman doğru değildir</h2>
    <p>
      Saf siyah (#000) gölgeler, renkli arka planlarda kirli görünür.
      Bunun yerine:
    </p>
    <p>
      <strong>Gölge tonunu arka planla eşleştirin:</strong> mavi bir
      kartta, gölgeyi mavi-siyah olarak renklendirin.
      <code> rgba(30, 50, 100, 0.15)</code> yerine
      <code> rgba(0,0,0,0.15)</code> kullanın.
    </p>
    <p>
      <strong>Öğenin rengini düşük opaklıkta kullanın:</strong>
      mor bir buton için, <code>box-shadow: 0 4px 14px 0
      rgba(128, 0, 255, 0.39)</code> butonun gölge oluşturmak yerine
      parlıyormuş gibi hissettirir.
    </p>
    <p>
      <strong>Karanlık mod:</strong> koyu arka planlardaki gölgeler
      neredeyse görünmezdir. Vurgu tabanlı yükseltmeye (ince iç
      parlama, daha açık kenarlık veya artırılmış parlaklık) geçin
      veya çok daha koyu, daha büyük gölgeler kullanın (<code>rgba(0,0,0,0.6)</code>).
    </p>

    <h2>İç gölgeler</h2>
    <p>
      <code>inset</code> gölgeyi tersine çevirir — öğenin içinde
      görünür, basılı durumlar (basılı bir buton) veya
      neumorfik tasarımlar için kullanışlıdır.
    </p>
    <p>
      <code>box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);</code>
    </p>
    <p>
      Klasik kullanım: eski arayüzlerdeki giriş alanları, basılı buton durumları,
      ince iç kenarlıklı kart küçük resimleri.
    </p>
    <p>
      Tek bir kuralda iç ve dış gölgeler birleştirilebilir:
      <code> box-shadow: inset 0 1px 0 rgba(255,255,255,0.1),
      0 1px 2px rgba(0,0,0,0.2);</code> üstte parlak bir vurgu
      ve altta dökülen bir gölge oluşturur.
    </p>

    <h2>Filtre drop-shadow — karmaşık şekiller için</h2>
    <p>
      <code>box-shadow</code> gölgeyi öğenin dikdörtgen
      kenarlık kutusundan çizer. Saydamlığa sahip bir PNG'niz
      veya bir SVG simgeniz varsa, gölge dikdörtgen olur, şekli
      takip etmez.
    </p>
    <p>
      <strong>Çözüm:</strong> <code>filter: drop-shadow(...)</code>
      kullanın. Alfa kanallarını takip eder.
    </p>
    <p>
      <code>filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));</code>
    </p>
    <p>
      Oluşturması box-shadow'dan biraz daha pahalıdır (GPU filtre
      geçişi vs düzen tabanlı). Simgeler ve düzensiz şekiller için,
      dikdörtgenler için box-shadow kullanın.
    </p>

    <h2>Üzerine gelme ve geçiş</h2>
    <p>
      Klasik bir hareket: öğenin kalktığını önermek için üzerine
      gelindiğinde gölgede hafif artış.
    </p>
    <p>
      <code>.card {`{ box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: box-shadow 0.2s ease, transform 0.2s ease; }`} .card:hover
      {`{ box-shadow: 0 8px 16px rgba(0,0,0,0.15); transform:
      translateY(-2px); }`}</code>
    </p>
    <p>
      translateY kalkışı güçlendirir; daha büyük gölge, yüzeyden
      uzaklık olarak okunur.
    </p>
    <p>
      <strong>Geçişleri kısa tutun.</strong> 150-250ms duyarlı
      hissettirir; daha uzunu gecikmeli hissettirir.
    </p>

    <h2>Performans değerlendirmeleri</h2>
    <p>
      Gölgeler GPU hızlandırmalıdır ancak düz renk
      oluşturmaya kıyasla pahalıdır.
    </p>
    <p>
      <strong>Büyük öğelerde büyük bulanıklık yarıçapı</strong> en
      pahalı durumdur — GPU'nun büyük bir saydam
      alanı birleştirmesi gerekir. Bulanıklığı gerçekten ihtiyacınız
      olanla sınırlayın.
    </p>
    <p>
      <strong>Birçok katmanlı gölge × birçok öğe</strong> düşük
      uçlu cihazlarda kaydırma sırasında takılmaya neden olabilir. Her biri
      4 katmanlı gölgeye sahip 50 kartınız varsa, kaydırma
      performansını profilleme yapın.
    </p>
    <p>
      <strong>box-shadow'u canlandırmak</strong> her karede
      yeniden boyamayı tetikler. Bunun yerine <code>transform</code> ve
      <code> opacity</code>'i canlandırmayı tercih edin. Gölge değişikliğine
      ihtiyacınız varsa, opaklık geçişleri olan bir sözde öğe
      kullanmayı düşünün.
    </p>

    <h2>Karanlık mod — tam yeniden tasarım</h2>
    <p>
      Gölgeler koyu arka planlarda okunmaz. Alternatifler:
    </p>
    <p>
      <strong>Yükseltme olarak daha açık kenarlık.</strong> Koyu yüzeyler
      1px daha açık bir üst kenarlık alır (<code>border-top: 1px solid
      rgba(255,255,255,0.1)</code>).
    </p>
    <p>
      <strong>Arka plan parlaklık değişimi.</strong> Her yükseltme
      seviyesi = biraz daha açık yüzey (gölge yerine). Material
      Design'ın koyu teması bunu kullanır.
    </p>
    <p>
      <strong>Renkli parlama.</strong> Düşük opaklıkta marka renkli gölge,
      koyu arka planlarda yine de algılanabilir.
    </p>
    <p>
      <strong>Güçlü gölge.</strong> <code>rgba(0,0,0,0.6)</code> veya
      daha yüksek, önemli bulanıklıkla. Öğenin altında gerçek
      kontrast olduğunda en iyi sonucu verir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Renkli arka planlarda tam siyah gölgeler.</strong>
      Kirli okunur. Gölgeyi renklendirin.
    </p>
    <p>
      <strong>Düz bir tasarımda tek katmanlı gölge.</strong> Düz bir
      estetiği keskin, gerçekçi olmayan bir gölgeyle eşleştirir. Birden çok
      katman kullanın veya hiç gölge kullanmayın.
    </p>
    <p>
      <strong>Her şeyde gölge.</strong> Gölgeler kontrast
      ipuçlarıdır — her şeyde bir tane olduğunda, hiçbir şey öne çıkmaz.
    </p>
    <p>
      <strong>Her yükseltmede aynı gölge.</strong> Kartlar, açılır menüler, modaller ve kahraman
      görselleri için <code>shadow-md</code> kullanmak hiyerarşiyi
      düzleştirir. Gölgeyi anlamsal yükseltmeyle eşleştirin.
    </p>
    <p>
      <strong>Kenarlık yarıçapı etkileşimini unutmak.</strong> Sert
      köşeler yumuşak gölgelerle garip görünür. Gölge, öğenin
      kenarlık yarıçapını okur; görsel olarak uyumlu olduklarından emin olun.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Gölgeleri canlı olarak{" "}
      <a href="/tools/box-shadow-generator">kutu gölgesi oluşturucu</a>
      ile ayarlayın. Köşe yumuşaklığını gölge yumuşaklığıyla eşleştirmek için{" "}
      <a href="/tools/border-radius-generator">kenarlık yarıçapı oluşturucu</a>
      {" "}ve arka plan derinliğiyle gölgeleri katmanlarken{" "}
      <a href="/tools/gradient-generator">gradyan oluşturucu</a>
      {" "}ile birlikte kullanın.
    </p>
  </>
);