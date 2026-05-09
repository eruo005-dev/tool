import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      CSS <code>border-radius</code> özelliği, herhangi bir kutunun köşelerini yuvarlar ve web'deki en yüksek <a href="/learn/roi">ROI</a>'li tasarım araçlarından biridir: tek bir satır, bir kartın, düğmenin veya avatarın tüm hissini değiştirir. Temel bilgiler basittir, ancak tam özellik şaşırtıcı derecede derindir &mdash; dört köşenin tümü için kısa yazım, her bir köşe için ayrı özellikler, piksel ve yüzde birimleri, eliptik yarıçaplar ve her tasarım sisteminin eninde sonunda ihtiyaç duyduğu hap, daire ve kare yuvarlak (squircle) desenleri. Bu kılavuz, sözdizimi varyasyonlarını gerçekten ihtiyaç duyduğunuz sırayla adım adım açıklar, yüzdeye karşı piksel kullanım zamanını anlatır ve kopyalanmaya hazır kodlarla yaygın şekil desenlerini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>En basit biçim</h2>
    <p>
      Tek bir değer dört köşenin tümüne uygulanır:
    </p>
    <pre>{`.card {
  border-radius: 8px;
}`}</pre>
    <p>
      Bu, çoğu sitenin ihtiyaç duyduğu şeyin %80'idir: her kartın, düğmenin ve giriş alanının her köşesini yumuşatan tek bir yarıçap. Tasarım sisteminiz için bir değer seçin (genellikle 4, 6, 8, 12 veya 16&nbsp;px), küresel olarak uygulayın ve daha fazla düşünmeyi bırakın.
    </p>

    <h2>Kısa yazım: bir, iki, üç veya dört değer</h2>
    <p>
      <code>padding</code> ve <code>margin</code> gibi, <code>border-radius</code> da belirli anlamları olan en fazla dört değer kabul eder:
    </p>
    <pre>{`border-radius: 8px;                  /* dört köşenin tümü */
border-radius: 8px 16px;             /* sol üst+sağ alt, sağ üst+sol alt */
border-radius: 8px 16px 4px;         /* SÜ, SÜ+SA, SA */
border-radius: 8px 16px 4px 12px;    /* SÜ, SÜ, SA, SA (sol üstten saat yönünde) */`}</pre>
    <p>
      Dört değerli biçim, sol üstten başlayarak saat yönündedir, padding ve margin ile aynı sıradadır (üst, sağ, alt, sol köşelere uyarlanmıştır).
    </p>

    <h2>Her bir köşe için ayrı özellikler</h2>
    <p>
      Yalnızca belirli köşeleri yuvarlamak istediğinizde, her bir köşe için ayrı özellikler dört değerli kısa yazımdan daha açıktır:
    </p>
    <pre>{`.tab {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  /* alt köşeler kare kalır */
}`}</pre>
    <p>
      Yaygın desenler:
    </p>
    <ul>
      <li><strong>Sekme şekli:</strong> üst köşeler yuvarlak, alt kare.</li>
      <li><strong>Üstte resim olan kart:</strong> resimde üst yarıçap, dış kartta eşleştir, alt kare veya kartla eşleşen.</li>
      <li><strong>Kuyruklu sohpet balonu:</strong> üç köşe yuvarlak, konuşmacı tarafında bir kare.</li>
      <li><strong>Altbilgisi olan modal:</strong> içerikle eşleşmesi için üst köşeler yuvarlak, altbilgi alt yuvarlamayı alır.</li>
    </ul>

    <h2>Yüzdeye karşı pikseller</h2>
    <p>
      Sabit bir piksel yarıçapı (<code>border-radius: 12px</code>), öğe boyutundan bağımsız olarak aynı görsel eğriyi korur. Bir yüzde (<code>border-radius: 50%</code>) kutuyla birlikte ölçeklenir: bir daire için kısa kenarın %50'si veya öğeyle birlikte büyüyen orantılı eğriler.
    </p>
    <p>
      Bir tasarım sistemi genelinde tutarlı eğriler için pikseller kullanın. Boyutla birlikte şekil değiştirmesi gereken şekiller için yüzdeler kullanın:
    </p>
    <ul>
      <li>Bir karede <code>50%</code> bir daire verir.</li>
      <li>Bir dikdörtgende <code>50%</code>, yarım daire uçları olan bir hap verir.</li>
      <li><code>25%</code>, ölçeklenen yuvarlak kare bir şekil verir.</li>
    </ul>

    <h2>Hap ve kapsül düğmeler</h2>
    <p>
      Klasik hap düğmesi: yarıçapı yüksekliğin yarısına eşit veya daha büyük yapın:
    </p>
    <pre>{`.pill {
  height: 40px;
  padding: 0 20px;
  border-radius: 9999px;
}`}</pre>
    <p>
      <code>9999px</code> (veya herhangi bir büyük değer) kullanmak yaygın bir kullanımdır: yarıçap, yüksekliğin yarısında doygunluğa ulaşır, bu nedenle değerin yükseklikle tam olarak eşleşmesi gerekmez. Düğme, yüksekliği veya dolguyu daha sonra değiştirseniz bile mükemmel hap şeklinde kalır.
    </p>

    <h2>Mükemmel daireler</h2>
    <p>
      Mükemmel bir daire, kare bir kap artı %50 yarıçap gerektirir:
    </p>
    <pre>{`.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}`}</pre>
    <p>
      Öğe kare değilse, %50 bir elips üretir. Avatar ızgaraları için, <code>aspect-ratio: 1 / 1</code> veya açık genişlik ve yükseklik ile kare boyutları zorunlu kılın.
    </p>

    <h2>Eliptik yarıçaplar</h2>
    <p>
      Bir köşe, o köşede bir elips üreten farklı yatay ve dikey yarıçaplara sahip olabilir. Sözdizimi bir eğik çizgi kullanır:
    </p>
    <pre>{`.hero {
  border-radius: 40px / 20px;
}`}</pre>
    <p>
      Bu, her köşeyi olduğundan daha geniş bir elips yapar. Dört değerli kısa yazımla birleştirildiğinde yaratıcı şekiller üretebilirsiniz:
    </p>
    <pre>{`.blob {
  border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
}`}</pre>
    <p>
      Bu, dekoratif arka planlar için kullanışlı, organik, damla benzeri bir şekil üretir.
    </p>

    <h2>Yarıçap ve taşma kırpma</h2>
    <p>
      Yuvarlak bir kutu, arka planını ve kenarlığını yarıçapta kırpar, ancak alt öğeler varsayılan olarak eğrinin ötesine sızar. Alt öğeleri de kırpmak için &mdash; kartın kenarına uzanan resimler, video yerleştirmeleri &mdash; <code>overflow: hidden</code> ekleyin:
    </p>
    <pre>{`.card {
  border-radius: 12px;
  overflow: hidden;
}`}</pre>
    <p>
      Dikkat: <code>overflow: hidden</code> ayrıca alt öğelerin kutu gölgelerini de kırpar, bu nedenle dışarı taşması gereken kendi gölgesine sahip bir alt öğeniz varsa, farklı bir yaklaşıma ihtiyacınız vardır (genellikle alt öğede değil, üst öğede gölge).
    </p>

    <h2>Yarıçap ve kenarlıklar</h2>
    <p>
      Hem <code>border</code> hem de <code>border-radius</code> olduğunda, kenarlık eğriyi takip eder. Küçük yarıçaplarda kenarlıkları ince tutun; 8&nbsp;px'lik bir yarıçapta 2&nbsp;px'lik bir kenarlık iyi okunur, ancak 12&nbsp;px'lik bir yarıçapta 10&nbsp;px'lik bir kenarlık hantal ve karikatürize görünür.
    </p>
    <p>
      Dikdörtgen öğelerde büyük yarıçaplı kenarlıklar, uzun uçlarda görünür bir "gerilmiş halka" efekti üretebilir &mdash; eğri daha sıkı olduğu için kenarlık orada daha kalın görünür. Haplar için bu genellikle sorun değildir; dikdörtgen kartlar için daha küçük yarıçaplar düşünün.
    </p>

    <h2>Yarıçap ve dış çizgiler</h2>
    <p>
      Geçmişte, <code>outline</code> <code>border-radius</code>'a saygı göstermezdi &mdash; dış çizgi, yuvarlak bir öğenin etrafına keskin köşeli bir dikdörtgen çizerdi. Modern tarayıcılar yuvarlak dış çizgileri yerel olarak destekler, ancak eski tarayıcıları desteklemeniz gerekiyorsa veya ekstra kontrol istiyorsanız, yarıçapa saygı duyan yaygın bir yedek olarak <code>0 0 0 2px color</code> ile <code>box-shadow</code> kullanılır.
    </p>

    <h2>Kare yuvarlak (squircle) sorunu</h2>
    <p>
      iOS uygulama simgeleri, kare yuvarlak (squircle) adı verilen bir şekil kullanır &mdash; gerçek bir yuvarlak dikdörtgen değil, bir süperelipstir. CSS <code>border-radius</code> gerçek bir kare yuvarlak üretemez; eğrileri dairesel yaylardır. Çoğu tasarım bağlamında fark algılanamaz, ancak iOS ikonografisini tam olarak eşleştiriyorsanız, <code>border-radius</code> yerine bir kare yuvarlak formülü ile SVG veya <code>clip-path</code>'e ihtiyacınız vardır.
    </p>

    <h2>Tasarım sistemi ön ayarları</h2>
    <p>
      Bileşen başına yarıçap seçmek yerine, bir ölçek tanımlayın ve kullanın:
    </p>
    <pre>{`:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}`}</pre>
    <p>
      Ardından bileşenler değişkenlere başvurur. Sistemi değiştirmek yüz düzenleme yerine tek bir düzenlemedir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Yuvarlak bir kare isterken bir dikdörtgende %50 yarıçap kullanmak ve hap elde etmek. <code>overflow: hidden</code>'ı unutmak ve alt öğe resimlerinin yuvarlak köşelerden taştığını görmek. Küçük öğelere devasa yarıçaplar uygulamak, içeriğin bir damla içinde sıkışmış hissetmesine neden olmak. Bir tasarımda tutarsız yarıçaplar kullanmak (burada 4&nbsp;px, şurada 6&nbsp;px, başka bir yerde 7&nbsp;px) hiçbir şeyin tek bir sistem gibi hissettirmemesi. Kenarlıkları karikatürize olma noktasına kadar yuvarlamak. Ve tablo öğelerinin tuhaflıkları olduğunu bilmeden bir tablo öğesine <code>border-radius</code> koymak &mdash; ayrıca <code>border-collapse: separate</code> ve köşe hücrelerinde yarıçaplar ayarlamadığınız sürece hücreler eğrinin ötesine sızabilir.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/border-radius-generator">border-radius oluşturucumuz</a>, her bir köşe yarıçapının herhangi bir kombinasyonu için canlı bir görsel ve kopyalanmaya hazır CSS sunar. Kart stillendirme için <a href="/tools/box-shadow-generator">kutu gölgesi oluşturucu</a> ve modern görünümlü arka planlar için <a href="/tools/gradient-generator">gradyan oluşturucu</a> ile birlikte kullanın.
    </p>
  </>
);