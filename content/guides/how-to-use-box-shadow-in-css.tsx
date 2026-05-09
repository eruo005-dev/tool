import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      CSS <code>box-shadow</code> özelliği, modern arayüzlerin katmanlı yapıyı nasıl ilettiğini belirler: kartlar sayfadan yükselir, modal'lar loş bir arka planın üzerinde süzülür, butonlar tıklandığında aşağı iner ve hover durumları etkileşime işaret eder. Sözdizimi çoğu kişinin fark ettiğinden daha yeteneklidir &mdash; dört sayısal değer, bir renk, isteğe bağlı <code>inset</code> anahtar kelimesi ve tek bir öğede birden çok gölgeyi üst üste bindirme imkanı. Bir arayüz için gölge sistemi tasarlamak bileşik faiz gibi işler: bir yükseklik ölçeği tanımladığınızda her şey uyumlu hissettirir. Bu kılavuz, sözdizimini, yaygın kalıpları, koyu mod tuzaklarını ve yeniden kullanılabilir bir gölge ölçeğinin nasıl oluşturulacağını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Beş (veya altı) değer</h2>
    <p>
      Bir kutu gölgesi en fazla altı bileşenden oluşur:
    </p>
    <pre>{`box-shadow: <offset-x> <offset-y> <blur> <spread> <color> [inset];

box-shadow: 0 2px 8px 0 rgba(0,0,0,0.12);`}</pre>
    <ul>
      <li><strong>offset-x</strong>: yatay kaydırma. Pozitif değer gölgeyi sağa taşır.</li>
      <li><strong>offset-y</strong>: dikey kaydırma. Pozitif değer gölgeyi aşağı taşır.</li>
      <li><strong>blur</strong>: gölgenin yumuşaklığı. 0 keskin kenarlıdır, büyük değerler daha fazla bulanıklaştırır.</li>
      <li><strong>spread</strong> (isteğe bağlı): gölgeyi bulanıklaştırmadan önce büyütür veya küçültür.</li>
      <li><strong>color</strong>: gölge rengi, neredeyse her zaman yarı saydam.</li>
      <li><strong>inset</strong> (isteğe bağlı): gölgeyi öğenin dışı yerine içine çizer.</li>
    </ul>

    <h2>Işık yukarıdan gelir</h2>
    <p>
      Gerçek dünyadaki gölgeler ışıktan gelir ve çoğu UI kuralında ışık yukarıdan (veya hafifçe yukarı-soldan) gelir. Bu nedenle gölgeler aşağıya ve hafifçe sağa düşer. Pozitif Y kaydırması, sıfır veya hafif pozitif X kaydırması:
    </p>
    <pre>{`/* Doğal kart gölgesi */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);`}</pre>
    <p>
      Bu kuralı yalnızca belirli efektler için (ters yükseklik, kasvetli ürün fotoğrafçılığı) bozun. Genel UI için buna bağlı kalın, aksi takdirde arayüzünüz yanlış hissettirir.
    </p>

    <h2>İncelik cesareti yener</h2>
    <p>
      İyi UI gölgeleri şaşırtıcı derecede yumuşaktır. 1&ndash;2&nbsp;px kaydırma, 4&ndash;12&nbsp;px bulanıklık ve %5&ndash;15 siyah opaklık çoğu yükseklik ihtiyacını karşılar. Daha ağır gölgeler (20+ px bulanıklık, %30+ opaklık) eski ve ağır görünür; 2010'ların başında modaydı ve o zamandan beri modası geçti.
    </p>
    <pre>{`/* Çok ağır - 2010'lar stili */
box-shadow: 0 10px 30px rgba(0,0,0,0.4);

/* Modern ince */
box-shadow: 0 1px 3px rgba(0,0,0,0.08),
            0 4px 12px rgba(0,0,0,0.06);`}</pre>

    <h2>Derinlik için gölgeleri istifleme</h2>
    <p>
      Gerçek gölgelerin bir yakın temas gölgesi (sıkı, koyu) ve bir ortam gölgesi (geniş, yumuşak) vardır. Her ikisini virgülle ayrılmış bir listeyle birleştirmek, tek bir gölgeden daha doğal hissettirir:
    </p>
    <pre>{`.card {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 8px 24px rgba(0, 0, 0, 0.08);
}`}</pre>
    <p>
      İlk değer, kartın hemen altındaki temas gölgesini üretir; ikincisi ortam parıltısını ekler. Material Design ve shadcn gibi araçlar, tüm sistemlerini bu iki gölge deseni etrafında kurar.
    </p>

    <h2>Spread: gizli dördüncü sayı</h2>
    <p>
      Spread, bulanıklık uygulanmadan önce gölgenin işlenmiş boyutuna ekleme veya çıkarma yapar. Pozitif spread, büyük öğelerde kalın, yumuşak gölgeler için kullanışlıdır; negatif spread, gölgeyi sıkılaştırır, böylece yalnızca kenarlar görünür.
    </p>
    <pre>{`/* Sıkı iç hale */
box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);

/* Yükseltilmiş kart */
box-shadow: 0 10px 20px -5px rgba(0,0,0,0.15);`}</pre>
    <p>
      İlk desen, outline için klasik &ldquo;odak halkası&rdquo; yerine geçer; ikincisi gölgeyi kaldırır, böylece yalnızca dikey kaydırmasından daha &ldquo;sayfadan uzak&rdquo; olarak okunur.
    </p>

    <h2>İçe gölgeler</h2>
    <p>
      <code>inset</code> anahtar kelimesi gölgeyi öğenin içine çizer. Kullanım alanları:
    </p>
    <ul>
      <li><strong>Basılı buton durumu:</strong> ince iç gölge, tıklandığında butonun basık görünmesini sağlar.</li>
      <li><strong>Giriş alanları:</strong> iç gölge, çökük bir görünüm verir.</li>
      <li><strong>Paneller (dashboard):</strong> iç gölge, girintili bir alan yanılsaması yaratır.</li>
    </ul>
    <pre>{`.input {
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.08);
}

.button:active {
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);
}`}</pre>

    <h2>Bir yükseklik ölçeği oluşturma</h2>
    <p>
      Her öğe için gölge icat etmek yerine bir ölçek tanımlayın ve ona başvurun. Material Design 24 seviye kullanır (aşırı); çoğu sistem 4&ndash;6 ile gayet iyi çalışır. Pratik bir ölçek:
    </p>
    <pre>{`:root {
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow:    0 1px 3px rgba(0,0,0,0.08),
               0 4px 12px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.10),
               0 8px 24px rgba(0,0,0,0.08);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.12),
               0 4px 8px rgba(0,0,0,0.06);
  --shadow-xl: 0 20px 40px rgba(0,0,0,0.18);
}`}</pre>
    <p>
      UI kavramlarını seviyelere eşleyin:
    </p>
    <ul>
      <li><strong>sm</strong>: giriş kenarlıkları, ince kartlar.</li>
      <li><strong>base</strong>: varsayılan kartlar.</li>
      <li><strong>md</strong>: kartlar için hover durumları, açılır menüler.</li>
      <li><strong>lg</strong>: diyaloglar, popover'lar.</li>
      <li><strong>xl</strong>: tam ekran arka planlı modal'lar.</li>
    </ul>

    <h2>Hover geçişleri</h2>
    <p>
      Üzerine gelindiğinde yükselen bir kart, klasik bir etkileşim ipucudur. Gölgeyi küçük bir yukarı öteleme ve bir geçişle birleştirin:
    </p>
    <pre>{`.card {
  box-shadow: var(--shadow);
  transition: box-shadow 150ms ease, transform 150ms ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}`}</pre>
    <p>
      Öteleme fiziksel yükselmeyi satar; gölge yükseltmesi bunu pekiştirir. 150ms ideal noktadır &mdash; daha hızlı seğirmeli, daha yavaş gecikmeli hissettirir.
    </p>

    <h2>Koyu mod dikkat edilmesi gerekenler</h2>
    <p>
      Siyah arka planlar üzerindeki siyah gölgeler görünmez. Koyu modda, opaklığı önemli ölçüde artırın, arka plandan biraz daha açık bir gölge rengi kullanın veya gölge yerine ince bir iç kenarlık kullanın.
    </p>
    <pre>{`/* Açık mod */
.card { box-shadow: 0 2px 8px rgba(0,0,0,0.08); }

/* Koyu mod */
@media (prefers-color-scheme: dark) {
  .card {
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    /* Veya: ince bir parıltı */
    /* box-shadow: 0 0 0 1px rgba(255,255,255,0.06); */
  }
}`}</pre>
    <p>
      Birçok koyu tema, gölgeleri tamamen atlar ve bunun yerine yükseklik için kenarlıklar veya arka plan rengi adımları kullanır.
    </p>

    <h2>Renkli gölgeler</h2>
    <p>
      Gölgeler gri olmak zorunda değildir. Öğenin renginin ince bir tonu canlılık katabilir:
    </p>
    <pre>{`.primary-button {
  background: #3b82f6;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
}`}</pre>
    <p>
      Gölge, düşük opaklıkta buton rengiyle eşleşir ve butonun hafifçe parlamasını sağlar. Dikkatli kullanın &mdash; her gölgeyi renklendirmek zorlama görünür. Hero CTA'lar ve vurgu öğeleri için saklayın.
    </p>

    <h2>Performans</h2>
    <p>
      Birçok öğede büyük bulanıklıklı gölgeler, özellikle düşük kaliteli cihazlarda kaydırma performansını olumsuz etkileyebilir. Gölgeler rasterleştirilir ve her boyamada yeniden birleştirilir. Ağır UI'lar (gölgeli kartlarla dolu uzun akışlar) için şunları göz önünde bulundurun:
    </p>
    <ul>
      <li>Gölgeleri geçiş yapan öğelerde <code>will-change: box-shadow</code> kullanmak, böylece tarayıcı bunları kendi katmanlarına önceden yükseltir.</li>
      <li>Pahalı gölgeleri daha ucuz kenarlıklar veya arka plan gradyanlarıyla değiştirmek.</li>
      <li>DevTools'un Performans panelinde kaydırma performansını test etmek.</li>
    </ul>

    <h2>Yaygın hatalar</h2>
    <p>
      Sıfır bulanıklıkla offset-Y kullanmak ve gölge yerine keskin kenarlı siyah bir çizgi elde etmek &mdash; her zaman biraz bulanıklık ekleyin. %30&ndash;50 aralığında &ldquo;2012&rdquo; diye bağıran gölge opaklıkları seçmek. Koyu modu unutmak ve siyah gölgeleri görünmez bırakmak. Her iç içe öğede gölgeleri istifleyerek UI'ın fiziksel bir kartvizit yığını gibi görünmesine neden olmak. Odak halkaları için <code>box-shadow</code> kullanmak ve <code>outline</code>'ı kaldırdığınızda erişilebilirlik odak göstergelerini korumayı unutmak &mdash; klavye kullanıcıları bunlara güvenir. Ve ince olanı: gölgelerin hover'da büyümesine izin vermek ancak onları canlandırmamak, böylece yumuşakça geçiş yapmak yerine aniden belirmeleri &mdash; her zaman geçiş ekleyin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      <a href="/tools/box-shadow-generator">Kutu gölgesi oluşturucumuz</a>, canlı önizleme ve kopyalanmaya hazır CSS ile çok katmanlı gölgeler oluşturmanızı sağlar. Kart stillendirme için <a href="/tools/border-radius-generator">border-radius oluşturucu</a> ve yüksekliği tamamlayan arka planlar için <a href="/tools/gradient-generator">gradyan oluşturucu</a> ile birlikte kullanın.
    </p>
  </>
);