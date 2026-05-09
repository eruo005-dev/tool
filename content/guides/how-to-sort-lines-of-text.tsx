import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir satır listesini sıralamak, &ldquo;Item 10&rdquo; öğesinin &ldquo;Item 2&rdquo; öğesinden önce geldiğini, büyük-küçük harf karışıklığını veya İspanyolca &ntilde; harfinin yanlış alfabetik sıraya yerleştiğini fark edene kadar tek tıklamalık bir işlemdir. &ldquo;Bu satırları sırala&rdquo; ifadesi bir düzine kararı gizler: alfabetik mi sayısal mı, büyük-küçük harf duyarlı mı değil mi, doğal mı sözlükbilimsel mi, kararlı mı değil mi ve hangi yerelin sıralama kuralları kullanılacak. Bu kılavuz her seçeneği adım adım açıklar, yaygın hataların nerede yapıldığını gösterir ve gerçek dünya verilerini doğru şekilde işleyen özel modları &mdash; karışık alfanümerik için doğal sıralama, en yeni ilk için ters sıralama ve İngilizce olmayan metinler için yerel duyarlı sıralama &mdash; kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Sözlükbilimsel vs alfabetik vs sayısal</h2>
    <p>
      Çoğu &ldquo;alfabetik&rdquo; sıralama teknik olarak
      <strong>sözlükbilimseldir</strong> &mdash; karakter karakter kod noktasına göre karşılaştırma. Bu saf harfler için işe yarar ancak sürprizler üretir:
    </p>
    <pre>{`sözlükbilimsel:       sayısal:
  Apple                Apple
  Banana               Banana
  Item 10              Item 2
  Item 2               Item 10
  Zebra                Zebra`}</pre>
    <p>
      &ldquo;Item 10&rdquo; sözlükbilimsel olarak &ldquo;Item 2&rdquo; öğesinden önce sıralanır çünkü ASCII'de &lsquo;1&rsquo; &lt; &lsquo;2&rsquo;. Doğal sıralama bunu düzeltir.
    </p>

    <h2>Büyük-küçük harf duyarlılığı</h2>
    <p>
      ASCII'de büyük harflerin tümü küçük harflerden daha düşük kod noktalarına sahiptir. Büyük-küçük harf duyarlı bir sıralama şunları üretir:
    </p>
    <pre>{`Apple
Banana
apple
banana`}</pre>
    <p>
      Büyük-küçük harf duyarsız sıralama bunları bir araya getirir:
    </p>
    <pre>{`apple
Apple
banana
Banana`}</pre>
    <p>
      Büyük-küçük harf duyarsız sıralama, insan tarafından okunabilir listeler için neredeyse her zaman insanların istediği şeydir. Büyük-küçük harf duyarlı sıralama, tanımlayıcıları, kodu veya büyük-küçük harfin anlam taşıdığı herhangi bir şeyi sıralarken doğrudur.
    </p>

    <h2>Doğal sıralama</h2>
    <p>
      Doğal sıralama, rakam dizilerini tanır ve bunları sayısal olarak karşılaştırır. Dosya adları, sürüm numaraları, bölüm listeleri ve gömülü sayılar içeren her şey için istediğiniz şey budur.
    </p>
    <pre>{`v1.2
v1.10
v1.9

doğal sıralama:
v1.2
v1.9
v1.10`}</pre>
    <p>
      JavaScript'te, <code>localeCompare</code> ile
      <code>{`{ numeric: true }`}</code> size ücretsiz olarak doğal sıralama sağlar.
    </p>

    <h2>Kararlı sıralama</h2>
    <p>
      Kararlı bir sıralama, eşit karşılaştırılan satırların göreceli sırasını korur. Kararsız sıralama bunları yeniden karıştırabilir. Bu, bir anahtara göre sıralama yaparken ve önceki bir sıralamanın eşitlik bozucu olarak korunmasını istediğinizde önemlidir.
    </p>
    <pre>{`girdi (yaşa göre sıralanmış):
Alice  30
Bob    30
Carol  25

isme göre sırala (kararlı):
Alice  30
Bob    30
Carol  25

isme göre sırala (kararsız):
Alice/Bob sırası değişebilir`}</pre>
    <p>
      Çoğu modern dil sıralaması kararlıdır: JavaScript'in
      <code>Array.sort</code> (ES2019'dan beri), Python'un <code>sorted</code>,
      Java'nın <code>Collections.sort</code>. Unix <code>sort -s</code>
      kararlıdır.
    </p>

    <h2>Ters sıralama</h2>
    <p>
      Artan sırada sırala, ardından ters çevir. Veya bir azalan bayrağı geçir. Çoğu dilde tek satırlık bir çözüm vardır:
    </p>
    <pre>{`// JS
arr.sort((a, b) =&gt; b.localeCompare(a));

// Python
sorted(lines, reverse=True)

// Unix
sort -r`}</pre>

    <h2>Yerel duyarlı sıralama</h2>
    <p>
      Kod noktası sırası birçok dilde alfabetik sıra değildir. Birkaç örnek:
    </p>
    <ul>
      <li>İspanyolca &ntilde; n ve o arasında sıralanır</li>
      <li>Almanca &szlig; geleneksel olarak &ldquo;ss&rdquo; olarak sıralanır</li>
      <li>İsveççe &aring; &auml; &ouml; z'den sonra sıralanır, a/o'nun varyantları olarak değil</li>
      <li>Çekçe ch tek bir sıralama birimidir</li>
      <li>Fransızca birincil düzeyde aksanları yok sayar, eşitlik bozucu olarak kullanır</li>
    </ul>
    <p>
      Doğru yerel ayarla <code>Intl.Collator</code> kullanın:
    </p>
    <pre>{`const coll = new Intl.Collator("sv");
arr.sort(coll.compare);`}</pre>

    <h2>Aksan işleme</h2>
    <p>
      Temel harf ve aksan duyarlı karşılaştırma <code>sensitivity</code> ile ayarlanır:
    </p>
    <ul>
      <li><code>base</code> &mdash; a = &aacute; = A = &Aacute;</li>
      <li><code>accent</code> &mdash; a = A, a &ne; &aacute;</li>
      <li><code>case</code> &mdash; a = &aacute;, a &ne; A</li>
      <li><code>variant</code> &mdash; her şeyi ayırt eder (varsayılan)</li>
    </ul>

    <h2>Başlık satırıyla sıralama</h2>
    <p>
      Birçok gerçek veride sıralanmaması gereken bir başlık veya başlık satırı bulunur. Ya önce onu ayırın, ilk sıralayan bir karakterle (<code>!</code> veya <code>#</code>) ön ekleyin ya da ilk satırı hariç tutan dilimi sıralayıp yeniden başa ekleyin.
    </p>

    <h2>Sütuna göre sıralama</h2>
    <p>
      Sekme veya virgülle ayrılmış veriler için genellikle tüm satırı değil, bir sütunu sıralamak istersiniz. Unix: <code>sort -k2</code> ikinci alana göre sıralar. Bir elektronik tabloda, aralığı sıralayın ve sütunu anahtar olarak seçin. CSV verilerinde saf bir satır sıralaması yalnızca ilk sütuna göre alfabetik sıralama verir.
    </p>

    <h2>Büyük dosyalar ve bellek</h2>
    <p>
      10&nbsp;GB'lık bir dosyayı bellekte sıralamak işe yaramaz. Harici bir birleştirmeli sıralama veya otomatik olarak diske taşan Unix <code>sort</code> komutunu kullanın. Gerektiğinde geçici dizini ve bellek sınırını açıkça ayarlayın.
    </p>
    <pre>{`sort -T /tmp -S 2G input.txt -o output.txt`}</pre>

    <h2>Yaygın hatalar</h2>
    <p>
      Dosya adları için sözlükbilimsel sıralama kullanmak ve &ldquo;file10&rdquo; öğesinin &ldquo;file2&rdquo; öğesinden önce gelmesi. Karışık büyük-küçük harfli insan isimlerinde büyük-küçük harf duyarlı sıralama çalıştırmak. Almanca veya İspanyolca listeleri varsayılan ASCII sıralamasıyla sıralamak. Sıralama çıktısını, kararsız bir algoritma çalıştırdığınızda &ldquo;kararlı&rdquo; olarak okumak. Başlık satırınızın artık listenin ortasında bir yerde olduğunu unutmak.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      <a href="/tools/text-sorter">Metin sıralayıcı</a>
      <a href="/tools/remove-duplicate-lines">Yinelenen satırları kaldır</a>
      <a href="/tools/text-joiner">Metin birleştirici</a>
    </p>
  </>
);