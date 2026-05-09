import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      CSS Grid, tarayıcıda iki boyutlu düzen için tasarlanmış ilk düzen sistemidir. Satırlar ve sütunlar birinci sınıf vatandaşlardır, iz boyutlandırması için özel bir birim (<code>fr</code>) vardır ve tek bir sarmalayıcı div olmadan yaklaşık on satırda tüm bir sayfayı tanımlayabilirsiniz. Grid, her iki eksende hizalama gerektiren her şey için flexbox'tan kesinlikle daha yeteneklidir, ancak basit tek eksenli işler için daha ayrıntılıdır. Bu kılavuz, gerçekten kullanacağınız özellikleri, grid'i parlak kılan püf noktalarını (auto-fill, minmax, adlandırılmış alanlar) ve grid'in doğru araç olduğu durumlar için temel kuralı kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Grid zihinsel modeli</h2>
    <p>
      Bir grid kabı, <strong>izleri</strong> (satırlar ve sütunlar) tanımlar ve grid öğeleri, kesişim noktalarındaki hücrelere yerleşir. İzleri açıkça tanımlayabilir (<code>grid-template-columns</code>) veya öğeler geldikçe tarayıcının bunları örtük olarak oluşturmasına izin verebilirsiniz. Geriye kalan her şey: bir öğenin hangi hücreleri kaplayacağını seçmektir.
    </p>
    <pre>{`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}`}</pre>
    <p>
      Üç eşit sütun, 16px boşluk, bitti. Medya sorgusu yok, sarmalayıcı yok.
    </p>

    <h2>fr birimi</h2>
    <p>
      <code>fr</code>, &ldquo;kalan alanın kesri&rdquo; anlamına gelir. Sabit boyutlu izler tahsis edildikten sonra, kalan alan <code>fr</code> izleri arasında orantılı olarak bölünür.
    </p>
    <pre>{`grid-template-columns: 200px 1fr 1fr;
/* 200px kenar çubuğu, iki eşit esnek sütun */

grid-template-columns: 1fr 3fr;
/* ana sütun, kenar çubuğunun 3 katı */`}</pre>
    <p>
      <code>fr</code>, grid'in akışkan hissettirmesini sağlayan şeydir. Yüzdeler de çalışır ancak boşlukları hesaba katmaz, bu nedenle genellikle taşmaya neden olurlar. <code>fr</code>'yi tercih edin.
    </p>

    <h2>grid-template-columns ve grid-template-rows</h2>
    <p>
      Değerler sabit boyutları, fr birimlerini, <code>auto</code>'yu ve işlevleri karıştırabilir:
    </p>
    <pre>{`grid-template-columns: 240px 1fr;        /* kenar çubuğu + ana */
grid-template-columns: repeat(4, 1fr);   /* dört eşit */
grid-template-columns: 1fr 2fr 1fr;      /* ağırlıklı */
grid-template-rows: auto 1fr auto;       /* başlık, ana, altbilgi */`}</pre>
    <p>
      <code>repeat(n, ...)</code>, tekrarlayan izler için sözdizimsel şekerdir. <code>auto</code>, içeriğe göre boyutlandırır. Klasik &ldquo;sabit altbilgi&rdquo; düzeni, <code>min-height: 100vh</code> olan bir gövdede sadece <code>grid-template-rows: auto 1fr auto</code>'dur.
    </p>

    <h2>Duyarlı izler için minmax</h2>
    <p>
      <code>minmax(a, b)</code>, bir iz için minimum ve maksimum boyut belirler. Sütunların çok küçülmesini veya çok genişlemesini bu şekilde engellersiniz.
    </p>
    <pre>{`grid-template-columns: repeat(3, minmax(200px, 1fr));
/* her biri en az 200px olan üç sütun */`}</pre>

    <h2>auto-fill ve auto-fit</h2>
    <p>
      Görünüm alanı değiştikçe kendilerini yeniden saran kartlar elde etmek için <code>repeat</code>'i <code>auto-fill</code> veya <code>auto-fit</code> ile birleştirin &mdash; kesme noktaları gerekmez.
    </p>
    <pre>{`/* auto-fill: boş sütunlar görünmez izler olarak korunur */
grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

/* auto-fit: boş sütunlar daralır, kalan öğeler esner */
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));`}</pre>
    <p>
      <strong>Temel kural:</strong> Kartların az sayıda olsa bile satırı doldurmak için esnemesini istiyorsanız <code>auto-fit</code>; tutarlı bir boyutta kalmalarını ve sağda boşluk bırakmalarını istiyorsanız <code>auto-fill</code>.
    </p>

    <h2>Öğelerde grid-column ve grid-row</h2>
    <p>
      Bir öğeyi <code>grid-column</code> veya <code>grid-row</code> ile birden çok iz boyunca yerleştirin:
    </p>
    <pre>{`.hero  { grid-column: 1 / -1; }          /* tam genişlik */
.card  { grid-column: span 2; }          /* iki sütun genişliğinde */
.photo { grid-row: 1 / 3; grid-column: 2 / 4; }`}</pre>
    <p>
      Satır numaraları 1 tabanlıdır. <code>-1</code> son satır anlamına gelir. <code>span N</code> kısa yazımı &ldquo;neredeysem oradan başla, N tane iz al&rdquo; der.
    </p>

    <h2>Adlandırılmış grid alanları</h2>
    <p>
      Sayfa düzeyindeki düzenler için <code>grid-template-areas</code> en okunabilir seçenektir &mdash; düzeni kelimenin tam anlamıyla ASCII olarak çizersiniz.
    </p>
    <pre>{`.page {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
}
header  { grid-area: header; }
aside   { grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }`}</pre>
    <p>
      Mobilde düzeni değiştirmek, bir medya sorgusu içinde şablonu yeniden yazmak meselesi haline gelir &mdash; DOM yeniden yapılandırması gerekmez.
    </p>

    <h2>Medya sorgusu olmadan duyarlı grid'ler</h2>
    <pre>{`.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}`}</pre>
    <p>
      On kart mı? Masaüstünde üçlü dört sıra artı bir ikili sıra, tablette iki sütun, telefonda tek sütun. Hepsi tek bir kuraldan. Bu desen tek başına, çerçevelerin eskiden gönderdiği grid sistemi CSS'inin çoğunun yerini alır.
    </p>

    <h2>Grid öğeleri hizalama</h2>
    <p>
      Grid'in iki hizalama katmanı vardır: kap, izleri hizalar (<code>justify-content</code>, <code>align-content</code>) ve her hücre, içeriğini hizalar (<code>justify-items</code>, <code>align-items</code> veya öğe başına <code>justify-self</code>, <code>align-self</code>).
    </p>
    <pre>{`.grid {
  justify-content: center;   /* izlerin kendileri ortalanır */
  align-items: center;       /* öğe içeriği hücresinde ortalanır */
}`}</pre>
    <p>
      Flexbox ile aynı anahtar kelimeler, aynı zihinsel model &mdash; sadece bir flex satırı yerine grid hücrelerine uygulanır.
    </p>

    <h2>Grid ve Flexbox</h2>
    <p>
      <strong>Tek eksen mi? Flexbox.</strong> Navigasyon çubukları, araç çubukları, yığılmış öğelerin kenar çubukları. Tarayıcı, öğelerin nerede sarılacağına karar verir.
    </p>
    <p>
      <strong>Hizalanması gereken iki eksen mi? Grid.</strong> Panolar, hizalanmış satırlara sahip fotoğraf galerileri, tam sayfa düzenleri. İzlere siz karar verirsiniz.
    </p>
    <p>
      Mutlu bir şekilde iç içe geçerler &mdash; kabuk için grid, her hücrenin içinde flex. Birini dininiz olarak seçmeyin.
    </p>

    <h2>Boşluklar ve hizalama</h2>
    <p>
      <code>gap</code> (eski adıyla <code>grid-gap</code>) izler arasındaki boşluğu ayarlar. Her zaman kullanın &mdash; sarmayı doğru şekilde işler ve sondaki öğe kenar boşluğu sorununu önler.
    </p>
    <pre>{`.grid {
  gap: 16px;        /* satırlar ve sütunlar için aynı */
  gap: 24px 16px;   /* 24px satır boşluğu, 16px sütun boşluğu */
}`}</pre>

    <h2>Örtük izler</h2>
    <p>
      Öğeler açık izlerin dışına çıkarsa, grid otomatik olarak yenilerini oluşturur. Boyutlarını <code>grid-auto-rows</code> ve <code>grid-auto-columns</code> ile kontrol edin.
    </p>
    <pre>{`.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}`}</pre>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>fr yerine yüzde kullanmak.</strong> <code>33.33%</code> boşlukları hesaba katmaz ve taşmaya neden olur. <code>1fr</code> matematiği doğru yapar.
    </p>
    <p>
      <strong>Satırların hizalanması gerektiğinde flex'e yönelmek.</strong> Aynı satırdaki iki kartın farklı yükseklikleri varsa ve eşit olmalarını istiyorsanız, grid daha temiz bir cevaptır.
    </p>
    <p>
      <strong>Taşan öğelerde min-width: 0 ayarlamayı unutmak.</strong> Grid öğeleri varsayılan olarak <code>min-width: auto</code> değerine sahiptir ve içerik genişliklerinin altına küçülmeyi reddedebilir. Uzun bir kelime düzeninizi bozuyorsa <code>min-width: 0</code> ayarlayın.
    </p>
    <p>
      <strong><code>auto-fit</code>'in halledebileceği kesme noktalarını sabit kodlamak.</strong> <code>repeat(auto-fit, minmax(X, 1fr))</code> birçok medya sorgusunun yerini alır.
    </p>
    <p>
      <strong>auto-fit ve auto-fill'i karıştırmak.</strong> İzlerden daha az öğe olana kadar aynı şekilde davranırlar. Ardından <code>auto-fit</code> öğeleri doldurmak için esnetir; <code>auto-fill</code> boşluklar bırakır.
    </p>
    <p>
      <strong>Her grid satırını adlandırmak.</strong> Basit başlayın; satırları yalnızca düzen fayda sağlayacak kadar karmaşık hale geldiğinde adlandırın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Bir grid'i görsel olarak <a href="/tools/grid-layout-generator">grid düzen oluşturucu</a> ile iskeleye oturtun. Her grid hücresinin içindeki tek boyutlu satırlar için <a href="/tools/flexbox-playground">flexbox oyun alanına</a> geçin ve grid'in tek bir uyumlu yüzey olarak okunması için kart köşelerinizi <a href="/tools/border-radius-generator">kenar yuvarlatma oluşturucu</a> ile yuvarlayın.
    </p>
  </>
);
===END FILE===