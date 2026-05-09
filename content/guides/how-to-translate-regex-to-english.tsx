import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Regex, birçok kod tabanının yazmaya cesaret edemediği bir koddur. Birisi üç yıl önce bir desen yazdı,
      çalışıyor, kimse dokunmaya cesaret edemiyor ve şimdi onu değiştirmeniz gerekiyor. Bir regex'i tekrar
      İngilizce cümlelere çevirmek, onun gerçekte ne yaptığını, birinin ne yaptığını düşündüğüne karşı denetlemenin en hızlı yoludur. Bu, kod incelemelerinde, dokümantasyonda ve hataların yayınlanmadan önce yakalanmasında işe yarayan bir beceridir. Çeviri, öngörülebilir kuralları takip eder—çapalar "başlangıcında" olur,
      karakter sınıfları "herhangi bir karakter" olur,
      niceleyiciler "tam olarak N" veya "bir veya daha fazla" olur—
      ve yapıları birkaç kez gördükten sonra, bir regex okumak mekanik hale gelir.
      Bu kılavuz, desenlerin parça parça nasıl çevrileceğini, yaygın yapıları ve İngilizce
      karşılıklarını, gelecekteki sizin için karmaşık bir regex'in nasıl belgeleneceğini ve desenin yazarın amaçladığından farklı bir şey söylediği yaygın başarısızlıkları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Soldan sağa, parça parça çevirin</h2>
    <p>
      Regex, girdiye karşı soldan sağa çalışır, bu nedenle aynı şekilde okumak size anında bir
      İngilizce cümle verir. Deseni atomlara (bir karakter, bir sınıf, bir grup, bir
      niceleyici) ayırın ve her birini çevirin, "sonra" ile birleştirin.
    </p>
    <pre>{`Desen: ^\d{3}-\d{4}$

^         dizenin başlangıcı
\d{3}     tam olarak üç rakam
-         bir tire
\d{4}     tam olarak dört rakam
$         dizenin sonu

İngilizce: "tam olarak üç rakam, bir tire, tam olarak dört rakam ve başka hiçbir şey"`}</pre>

    <h2>İngilizce'de çapalar</h2>
    <p>
      <code>^</code> "başlangıçta" anlamına gelir. <code>$</code> "sonda" anlamına gelir.
      Birlikte, "tüm dize, aralarındaki her şeydir" anlamına gelir. Onlar olmadan,
      regex bir dizenin <em>içinde</em> arama yapar, bu genellikle aşırı eşleşme hatalarının kaynağıdır.
      <code>\b</code> "bir kelime sınırında" anlamına gelir—tam kelimeleri izole etmek için kullanışlıdır.
    </p>

    <h2>İngilizce'de niceleyiciler</h2>
    <p>
      <code>?</code> "isteğe bağlı olarak" veya "sıfır veya bir" anlamına gelir. <code>*</code>
      "sıfır veya daha fazla" anlamına gelir. <code>+</code> "bir veya daha fazla" anlamına gelir. <code>{`{n}`}</code>
      "tam olarak n" anlamına gelir. <code>{`{n,m}`}</code> "n ile m arasında" anlamına gelir.{" "}
      <code>{`{n,}`}</code> "en az n" anlamına gelir.
    </p>
    <pre>{`\d?       isteğe bağlı olarak bir rakam
\d*       sıfır veya daha fazla rakam
\d+       bir veya daha fazla rakam
\d{3}     tam olarak 3 rakam
\d{2,4}   2 ile 4 arasında rakam
\d{5,}    en az 5 rakam`}</pre>

    <h2>Karakter sınıfları</h2>
    <p>
      <code>[abc]</code> "a, b veya c'den herhangi biri" anlamına gelir. <code>[a-z]</code> "herhangi bir
      küçük harf" anlamına gelir. <code>[^0-9]</code> "rakam olmayan herhangi bir şey" anlamına gelir.
      Kısa yazım sınıfları: <code>\d</code> = rakam, <code>\w</code> = kelime karakteri (harf,
      rakam, alt çizgi), <code>\s</code> = boşluk. Büyük harf formları olumsuzlamalardır:{" "}
      <code>\D</code> = rakam değil, <code>\W</code> = kelime karakteri değil, <code>\S</code> = boşluk değil.
    </p>

    <h2>Alternatif</h2>
    <p>
      Dikey çubuk <code>|</code> "veya" olarak çevrilir. <code>cat|dog|bird</code>
      "kedi, köpek veya kuş" olarak okunur. Alternatif düşük önceliğe sahiptir—parantez olmadan,
      <code>cat|dog food</code> "kedi" veya "köpek maması" anlamına gelir, "kedi
      maması" veya "köpek maması" değil.
    </p>

    <h2>Gruplar</h2>
    <p>
      Düz parantezler <code>(...)</code> numaralandırılmış bir yakalama grubu oluşturur: "grup N olarak yakalandı." <code>(?:...)</code> yakalamayan bir gruptur—yalnızca gruplama için kullanılır,
      hatırlamaz. Adlandırılmış gruplar <code>(?&lt;name&gt;...)</code> bir ad altında yakalar.
      Çeviri yaparken, okuyucunun bu bölümün daha sonra başvurulabileceğini bilmesi için grup numarasından veya adından bahsetmek yardımcı olur.
    </p>
    <pre>{`(\d{4})-(\d{2})-(\d{2})
"dört rakam (grup 1), tire, iki rakam (grup 2), tire,
iki rakam (grup 3)"

(?<year>\d{4})
"dört rakam, 'year' olarak yakalandı"`}</pre>

    <h2>İleriye/geriye bakmalar</h2>
    <p>
      <code>(?=...)</code> "ardından" anlamına gelir (tüketmeden). <code>(?!...)</code>
      "ardından gelmeyen" anlamına gelir. <code>{`(?<=...)`}</code> "öncesinde" anlamına gelir.
      <code>{`(?<!...)`}</code> "öncesinde olmayan" anlamına gelir. Bunlar koşullardır, eşleşmeler değil,
      bu nedenle İngilizce, bunların kontroller olduğunu ve yakalanan metnin parçası olmadığını yansıtmalıdır.
    </p>
    <pre>{`\d+(?=px)
"bir veya daha fazla rakam, ardından 'px' (ancak 'px' yakalanmaz)"

(?<!\$)\d+
"bir veya daha fazla rakam, öncesinde dolar işareti olmayan"`}</pre>

    <h2>Adım adım örnek açıklamalar</h2>
    <pre>{`^https?:\/\/[^\s]+$

^         dizenin başlangıcı
https     literal "https"
?         's' isteğe bağlıdır (bu nedenle http'yi de eşleştirir)
:\/\/      literal "://"
[^\s]+    bir veya daha fazla boşluk olmayan karakter
$         dizenin sonu

İngilizce: "http veya https ile başlayan, ardından ://,
sonra bir veya daha fazla boşluk olmayan karakter içeren bir URL"`}</pre>
    <pre>{`\b[A-Z][a-z]+\b

\b         kelime sınırı
[A-Z]      bir büyük harf
[a-z]+     bir veya daha fazla küçük harf
\b         kelime sınırı

İngilizce: "büyük harfle başlayan ve ardından bir veya daha fazla
küçük harf gelen bir kelime"`}</pre>
    <pre>{`^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$

^                    başlangıç
(?=.*[A-Z])          ileriye bakma: bir yerde büyük harf içermelidir
(?=.*\d)             ileriye bakma: bir yerde rakam içermelidir
[A-Za-z\d]{8,}       sonra 8+ harf veya rakam
$                    son

İngilizce: "en az 8 harf veya rakam içerir, en az bir büyük harf ve en az bir
rakam ile" — klasik bir şifre kuralı`}</pre>

    <h2>Karmaşık bir regex'i belgeleme</h2>
    <p>
      Bir desen 30 karakteri aştığında, üstüne onu İngilizce'ye çeviren bir yorum ekleyin.
      <code>x</code> bayrağını (genişletilmiş mod) destekleyen dillerde, açıklamayı
      boşluk ve <code>#</code> yorumlarıyla desenin içine gömebilirsiniz.
      Amaç, bir sonraki kişinin—altı ay sonra siz de dahil—niyeti
      regex'i sıfırdan zihinsel olarak derlemeden anlayabilmesidir.
    </p>

    <h2>Yazar niyeti uyuşmazlığını tespit etme</h2>
    <p>
      Bir regex'i İngilizce'ye çevirmek genellikle desenin yazarın düşündüğü gibi olmadığını ortaya çıkarır. Klasik örnekler: tamamen geçerli adresleri reddeden e-posta doğrulayıcıları,
      yalnızca ABD formatlarını kabul eden telefon numarası desenleri, "http://."'ye izin veren URL denetleyicileri.
      Desenin İngilizce okumanız, hata mesajına veya
      değişken adına göre yanlış geliyorsa, bir hata buldunuz demektir.
    </p>

    <h2>İngilizce çok uzadığında</h2>
    <p>
      Çeviriniz üç cümleden uzunsa, regex'in daha küçük regex'lere bölünüp bölünemeyeceğini veya bir ayrıştırıcı ile değiştirilip değiştirilemeyeceğini düşünün. Bazı görevler
      gerçekten düzenli dillerdir ve tek bir desene sığar; diğerleri (e-posta, URL, HTML)
      doğru regex'i yüzlerce karakterle ölçen standartlar tarafından belirtilir. Bunun yerine bir kütüphane kullanın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Kaçış karakterlerini özel olarak okumak.</strong> <code>\.</code> değişmez bir noktadır,
      "herhangi bir karakter" değil. <code>\(</code> değişmez bir parantezdir, bir grup değil.
      Çeviri yaparken, her zaman ters eğik çizgileri kontrol edin ve sonraki karakteri özelliksizleştirdiklerini not edin.
    </p>
    <p>
      <strong>Açgözlü ile doğruyu karıştırmak.</strong> Açgözlü bir <code>.+</code> mümkün olduğunca çok
      eşleştirir; İngilizce çevirisi hala "bir veya daha fazla herhangi bir karakter"dir,
      ancak pratik davranışı, çapalar yerinde olmadığında sizi şaşırtabilir.
    </p>
    <p>
      <strong>Mod bayrağı bağlamını kaçırmak.</strong> <code>^</code> varsayılan olarak "dizenin
      başlangıcı" anlamına gelir, ancak <code>m</code> bayrağı ile "herhangi bir satırın
      başlangıcı" anlamına gelir. <code>.</code> varsayılan olarak yeni satırları eşleştirmez, ancak <code>s</code>
      (dotall) ile eşleştirir. Çeviri yapmadan önce bayrakları kontrol edin.
    </p>
    <p>
      <strong>İleriye/geriye bakmaları eşleşmenin bir parçası olarak tanımlamak.</strong> İleriye ve geriye bakmalar
      iddialardır; koşulları kontrol ederler ancak karakterleri tüketmezler. Onları
      "ardından" veya "öncesinde" olarak çevirin, asla eşleşen dizenin bir parçası olarak değil.
    </p>
    <p>
      <strong>Önceliği unutmak.</strong> <code>cat|dog food</code>, "kedi maması
      veya köpek maması" değildir. "Kedi veya köpek maması"dır. Alternatif, birleştirmeden daha gevşek bağlanır.
    </p>
    <p>
      <strong>Yakalama grubu numaralandırmasını gözden kaçırmak.</strong> Gruplar, soldan sağa
      açılan parantezlere göre numaralandırılır. İç içe gruplar da sayılır. Bir geri referans görürseniz{" "}
      <code>\2</code>, parantezleri dikkatlice saymanız gerekir.
    </p>
    <p>
      <strong>Lehçenin standart olduğunu varsaymak.</strong> <code>\p{`{L}`}</code>,{" "}
      <code>{`(?<=...)`}</code> ve adlandırılmış gruplar her lehçede mevcut değildir.
      Bir lehçeden diğerine çeviri yapmak, derlenmeyen desenler üretebilir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir regex'i, vurgulanmış atomlarla sade bir dil dökümü almak için{" "}
      <a href="/tools/regex-to-english">regex'ten İngilizce'ye çevirmenimize</a> yapıştırın. Bunu, İngilizce'nin gerçek
      eşleştirme davranışıyla eşleştiğini onaylamak için{" "}
      <a href="/tools/regex-tester">regex test edici</a> ile eşleştirin ve İngilizce olarak ne istediğinizi tanımlayıp bir desen almak istediğinizde,
      <a href="/tools/regex-builder">regex oluşturucuyu</a> kullanın.
    </p>
  </>
);