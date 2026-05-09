import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      <code>clamp()</code>, son on yılın CSS'e en faydalı
      eklemelerinden biridir. Bir değerin, görüntü alanı genişliğine
      veya başka bir bağlama bağlı olarak minimum ve maksimum
      arasında akıcı bir şekilde ölçeklenmesini sağlar. Bir dizi
      medya sorgusunu tek bir satırla değiştirir. Bu kılavuz,
      <code>clamp()</code> sözdizimini, akıcı tipografinin
      arkasındaki matematiği, tercih edilen değer ifadelerinin nasıl
      türetileceğini, <code>clamp()</code> ile medya sorguları
      arasında ne zaman seçim yapılacağını, tarayıcı desteğini ve
      yaygın tuzakları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Sözdizimi</h2>
    <pre>
{`clamp(MİN, TERCİH EDİLEN, MAKS)`}
    </pre>
    <p>
      Min ve maks ile sınırlandırılmış tercih edilen değeri döndürür.
    </p>
    <p>
      Basit örnek:
    </p>
    <pre>
{`font-size: clamp(1rem, 2.5vw, 1.5rem);`}
    </pre>
    <p>
      400px görüntü alanı genişliğinde → <code>2.5vw</code> = 10px →
      16px'e (1rem) yükseltilir.
    </p>
    <p>
      800px'de → 20px → aralık içinde → 20px döndürür.
    </p>
    <p>
      1200px'de → 30px → 24px'e (1.5rem) düşürülür.
    </p>

    <h2>Akıcı tipografi — en önemli kullanım alanı</h2>
    <p>
      Eski yöntem: medya sorgusu kırılma noktaları.
    </p>
    <pre>
{`h1 { font-size: 2rem; }
@media (min-width: 640px) { h1 { font-size: 2.5rem; }}
@media (min-width: 1024px) { h1 { font-size: 3rem; }}`}
    </pre>
    <p>
      <code>clamp()</code> yöntemi:
    </p>
    <pre>
{`h1 { font-size: clamp(2rem, 1.5rem + 2vw, 3rem); }`}
    </pre>
    <p>
      Boyut, görüntü alanıyla birlikte sorunsuz bir şekilde büyür.
      Kırılma noktalarında sarsıntılı sıçramalar olmaz. Daha az CSS.
    </p>

    <h2>Tercih edilen değer formülü</h2>
    <p>
      Ortadaki argümanın biraz matematik yapması gerekir: değerin
      belirli bir küçük görüntü alanında minimuma ve belirli bir
      büyük görüntü alanında maksimuma ulaşması için bir görüntü
      alanı birimini sabit bir ofsetle birleştirin.
    </p>
    <p>
      320px görüntü alanında 16px, 1280px görüntü alanında 32px
      font-size mı istiyorsunuz?
    </p>
    <p>
      <strong>Artış:</strong> 32 − 16 = 16px, 1280 − 320 = 960px
      üzerinde = görüntü alanının px'i başına %1.667 = <code>1.667vw</code>
      {" "}(1vw = görüntü alanının %1'i olduğundan).
    </p>
    <p>
      <strong>Ofset:</strong> 320px görüntü alanında, <code>1.667vw</code>
      {" "}= 5.33px. 16px istiyorsunuz, bu nedenle 16 − 5.33 = 10.67px ≈{" "}
      <code>0.667rem</code> ekleyin.
    </p>
    <p>
      <strong>İfade:</strong>{" "}
      <code>clamp(1rem, 0.667rem + 1.667vw, 2rem)</code>.
    </p>
    <p>
      <code>0.667rem + 1.667vw</code>, 320px'de tam olarak 1rem
      (16px) ve 1280px'de 2rem (32px) değerine ulaşır. Bunun
      ötesinde, clamp devreye girer.
    </p>

    <h2>Tipografinin ötesinde</h2>
    <p>
      <strong>Aralık (Spacing):</strong>
    </p>
    <pre>
{`padding: clamp(1rem, 5vw, 3rem);`}
    </pre>
    <p>
      Hero bölümleri, mobil cihazları ezmeden masaüstünde daha fazla
      nefes alma alanı kazanır.
    </p>
    <p>
      <strong>Izgara aralığı (Grid gap):</strong>
    </p>
    <pre>
{`gap: clamp(0.5rem, 2vw, 2rem);`}
    </pre>
    <p>
      <strong>Kenar yarıçapı (Border radius):</strong>
    </p>
    <pre>
{`border-radius: clamp(4px, 1vw, 16px);`}
    </pre>
    <p>
      <strong>Bölüm maksimum genişliği (Section max-width):</strong>
    </p>
    <pre>
{`max-width: clamp(400px, 80vw, 1200px);`}
    </pre>
    <p>
      Bir uzunluk değerinin bağlama göre değiştiği her yerde,
      <code>clamp()</code> birden çok bildirimi değiştirebilir.
    </p>

    <h2>Clamp içinde diğer birimleri kullanma</h2>
    <p>
      <code>clamp()</code> herhangi bir uzunluk birimiyle çalışır —
      px, rem, em, %, vw, vh, ch, ex ve konteyner sorgu birimleri
      (cqi, cqw). Serbestçe karıştırın:
    </p>
    <pre>
{`width: clamp(300px, 50%, 800px);
font-size: clamp(1rem, 5cqi, 2rem);  /* konteyner sorguları */`}
    </pre>
    <p>
      Konteyner sorgu birimleri, <code>@container</code> ile
      eşleştirildiğinde özellikle güçlüdür — bileşenlerin görüntü
      alanına değil, kendi konteynerleri içinde akıcı bir şekilde
      ölçeklenmesini sağlar.
    </p>

    <h2>clamp() ve medya sorguları</h2>
    <p>
      <strong>clamp() kullanın</strong> bir değer görüntü alanı
      boyutuyla sorunsuz bir şekilde ölçeklendiğinde — tipografi,
      aralık, boşluk, orantılı boyutlandırma.
    </p>
    <p>
      <strong>Medya sorguları kullanın</strong> düzen yapıyı
      değiştirdiğinde — sütun sayısı, gizlenen/gösterilen öğeler,
      flex yönü, tamamen farklı bileşenler.
    </p>
    <p>
      Bir arada bulunurlar. Medya sorgusuyla yönetilen bir ızgaranın
      içinde <code>font-size: clamp(...)</code> olan bir bileşen
      tamamen normaldir.
    </p>

    <h2>Erişilebilirlik — minimum önemlidir</h2>
    <p>
      Kullanıcılar genellikle okunabilirlik için minimum bir tarayıcı
      yazı tipi boyutu ayarlar. Küçük bir <code>vw</code> tabanlı
      tercih edilen değere sahip <code>clamp()</code>, küçük görüntü
      alanlarında kullanıcının minimumunun altına düşebilir.
    </p>
    <p>
      <strong>Kural:</strong> tercih edilen değerde saf{" "}
      <code>vw</code> yerine <code>rem</code> tabanlı bir bileşen
      kullanın. Bu şekilde kullanıcı yakınlaştırması ve temel yazı
      tipi boyutu değişiklikleri ölçeklenmeye devam eder:
    </p>
    <pre>
{`/* İyi */
font-size: clamp(1rem, 0.8rem + 1.5vw, 1.5rem);

/* Kötü — kullanıcının temel yazı tipini yok sayar */
font-size: clamp(16px, 4vw, 24px);`}
    </pre>

    <h2>Jeneratör araçları bir nedenle var</h2>
    <p>
      Tercih edilen değer matematiği hataya açıktır. Hedef
      boyutlarınızı ve kırılma noktalarınızı bir jeneratöre girin
      ve ifadeyi alın. Çok sayıda ücretsiz araç var, kendi{" "}
      <a href="/tools/css-clamp-generator">CSS clamp jeneratörümüz</a>
      {" "}dahil.
    </p>
    <p>
      Birini yer imlerine ekleyin — akıcı bir tasarım sistemi
      oluşturduğunuz her seferinde kullanacaksınız.
    </p>

    <h2>Tarayıcı desteği</h2>
    <p>
      <strong>clamp() 2020'den beri evrenseldir.</strong> Chrome 79+,
      Firefox 75+, Safari 13.1+. 2026'da bir endişe kaynağı değil.
    </p>
    <p>
      <strong>Konteyner sorgu birimleri (cqi/cqw):</strong> Chrome 105+,
      Firefox 110+, Safari 16+. Çoğu proje için artık güvenli.
    </p>

    <h2>Clamp'te hata ayıklama</h2>
    <p>
      Öğeyi geliştirici araçlarında inceleyin. Chrome ve Firefox,
      geçerli görüntü alanında hesaplanan değeri gösterir ve clamp
      ifadesini vurgular. Pencereyi ayarlayın ve güncellenmesini
      izleyin.
    </p>
    <p>
      <strong>Tuzak:</strong> tercih edilen değeriniz tüm görüntü
      alanlarında min veya maks'ta takılı kaldıysa, ya kırılma
      noktalarınız tutmuyordur ya da matematiğiniz yanlıştır. Bir
      jeneratör bunu yakalar.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Tercih edilende yalnızca vw kullanmak.</strong> Kullanıcı
      yakınlaştırmasını ve temel yazı tipi değişikliklerini yok sayar.
      rem + vw kullanın.
    </p>
    <p>
      <strong>Minimumu çok düşük ayarlamak.</strong> Mobilde metin
      okunamaz hale gelir. Minimum, amaçlanan mobil değeriniz
      olmalıdır, daha küçük değil.
    </p>
    <p>
      <strong>Maksimumu çok yüksek ayarlamak.</strong> Geniş
      monitörlerde metin veya boşluk şişer. Maksimum, amaçlanan
      masaüstü değeriniz olmalıdır.
    </p>
    <p>
      <strong>Sabit olması gereken şeyler için clamp kullanmak.</strong>
      Buton dolgusu genellikle akıcı ölçekleme gerektirmez.
    </p>
    <p>
      <strong>Px tabanlı medya sorgularıyla tutarsız bir şekilde
      birleştirmek.</strong> Rem tabanlı kırılma noktaları seçin ve
      onlara bağlı kalın; clamp() rem'lerle daha iyi çalışır.
    </p>
    <p>
      <strong>Matematiği tekrar tekrar elle yapmak.</strong> Bir
      jeneratör kullanın. Saatlerce zaman kazanırsınız.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Min/maks boyutlarından ve görüntü alanı aralığından bir{" "}
      <code>clamp()</code> ifadesi oluşturmak için{" "}
      <a href="/tools/css-clamp-generator">CSS clamp jeneratörünü</a>
      {" "}kullanın. Nihai stil sayfasını göndermek için{" "}
      <a href="/tools/css-minifier">CSS küçültücü</a> ve akıcı
      türü görsel cilalama ile eşleştirmek için{" "}
      <a href="/tools/gradient-generator">CSS gradyan jeneratörü</a>
      {" "}ile birleştirin.
    </p>
  </>
);