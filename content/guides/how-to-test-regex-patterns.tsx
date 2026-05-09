import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Regex süper bir güçtür, ta ki olmadığı ana kadar. Doğru görünen bir kalıp çok fazla, çok az
      ya da hiç eşleşmeyebilir ve dilinizin regex motorunun verdiği hata mesajları genellikle ya
      sessizlik (sıfır eşleşme) ya da işleminizi askıya alan felaket geri izlemedir. Regex'i doğru
      yapmanın tek güvenilir yolu, onu kasıtlı bir girdi kümesine karşı test etmektir: eşleşmesi
      gereken dizeler, eşleşmemesi gerekenler ve sınırlardaki zorlu uç durumlar. Ardından yakalama
      gruplarını inceler ve gerçekten istediğiniz şeyi yakaladıklarını doğrularsınız. Bu kılavuz,
      bir test matrisinin nasıl oluşturulacağını, açgözlü ve tembel niceleyiciler arasındaki farkı,
      çıpaları ve kelime sınırlarını, yakalama gruplarını, en kullanışlı bayrakları ve felaket geri
      izlemeyi üretime ulaşmadan önce nasıl tespit edeceğinizi kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Kalıpla değil, test senaryolarıyla başlayın</h2>
    <p>
      Bir regex yazmadan önce, eşleşmesi gereken girdileri, reddetmesi gereken girdileri ve uç
      durumları yazın. Bir e-posta doğrulayıcı için bunlar; bariz e-postalar, artı adreslemeli
      e-postalar, uluslararası alan adları, baştaki/sondaki boşluklar, boş dizeler ve RFC'nin
      geçerli dediği ancak sezgilerin reddettiği klasik "a@b.c"dir. Kalıbı bu durumlara karşı
      yinelemeli olarak oluşturun; ezberden tek seferde yazmaya çalışmayın.
    </p>
    <pre>{`Eşleşmeli:         alice@example.com
                    bob+tag@sub.example.co.uk
                    c@d.ef
Eşleşmemeli:        @example.com
                    alice@
                    alice@@example.com
                    alice example.com
                    (boş)`}</pre>

    <h2>Çıpalar: başlangıç, bitiş, kelime sınırı</h2>
    <p>
      <code>^</code> dizenin başlangıcına (veya <code>m</code> bayrağı ile satır başına) çıpalar.
      <code>$</code> sona çıpalar. Çıpalar olmadan, <code>\d+</code> dizenin herhangi bir yerindeki
      rakamları eşleştirir, tüm dizeyi değil. <code>\b</code> bir kelime sınırıdır: bir kelime
      karakteri ile kelime olmayan bir karakter arasındaki geçişi eşleştirir.{" "}
      <code>\bcat\b</code> "cat" kelimesini eşleştirir ancak "catalog"u eşleştirmez.
    </p>
    <pre>{`^\d+$      tüm dize rakamlardan oluşur
\d+        bir yerde rakam içerir
\bcat\b    bağımsız "cat" kelimesi
\bcat      bir kelimenin başındaki "cat" ("catalog"u da eşleştirir)`}</pre>

    <h2>Açgözlü ve tembel niceleyiciler</h2>
    <p>
      Varsayılan olarak, niceleyiciler <strong>açgözlüdür</strong>&mdash;mümkün olduğunca çok
      eşleştirirler. <code>&lt;.+&gt;</code> ifadesi <code>&lt;a&gt;text&lt;/a&gt;</code> karşısında
      tüm dizeyi eşleştirir çünkü <code>.+</code> her şeyi yer ve sonra geri izler. Tembel biçim
      <code>&lt;.+?&gt;</code> ilk <code>&gt;</code>'de durur. <code>?</code> eklenmiş niceleyiciler
      tembel hale gelir: <code>*?</code>, <code>+?</code>, <code>{`{2,5}?`}</code>.
    </p>
    <pre>{`Girdi: <a>text</a>
<.+>     eşleşir  <a>text</a>          (açgözlü, tüm dize)
<.+?>    eşleşir  <a>                  (tembel, ilk >'de durur)
<[^>]+>  eşleşir  <a>                  (karakter sınıfı, geri izleme yok)`}</pre>

    <h2>Karakter sınıfları</h2>
    <p>
      Köşeli parantezler kabul edilebilir karakterler kümesini tanımlar. <code>[abc]</code> a, b
      veya c'yi eşleştirir. <code>[a-z]</code> herhangi bir küçük harfi eşleştirir. <code>[^abc]</code>
      (içinde şapka işareti) "a, b, c dışındaki her şey" anlamına gelir. Yaygın kısaltmalar: <code>\d</code>
      <code>[0-9]</code>'dur, <code>\w</code> <code>[A-Za-z0-9_]</code>'dir, <code>\s</code>
      boşluktur ve büyük harf sürümleri (<code>\D</code>, <code>\W</code>, <code>\S</code>)
      bunların tümleyenleridir.
    </p>

    <h2>Yakalama grupları ve geri başvurular</h2>
    <p>
      Parantezler numaralandırılmış yakalama grupları oluşturur. <code>(\d+)-(\d+)</code> ifadesi
      <code>123-456</code> karşısında grup 1'de "123"ü ve grup 2'de "456"yı yakalar. Geri
      başvurular yakalanan bir değeri yeniden kullanır: <code>(\w+)\s+\1</code> "the the" gibi
      yinelenen bir kelimeyi eşleştirir. Adlandırılmış gruplar <code>{`(?<year>\\d{4})`}</code>
      karmaşık kalıpları okunabilir kılar. Yakalamayan gruplar <code>(?:...)</code>, hiçbir zaman
      başvurmayacağınız numaralandırılmış bir grup oluşturmadan niceleyiciler için gruplama
      kullanmanızı sağlar.
    </p>
    <pre>{`(\d{4})-(\d{2})-(\d{2})   üç gruplu tarih
(?:foo|bar)+              yakalamayan seçenek
(?<y>\d{4})-(?<m>\d{2})   adlandırılmış gruplar
(\w+)\s+\\1                yinelenen kelime`}</pre>

    <h2>Bayraklar</h2>
    <p>
      <code>g</code> tüm eşleşmeleri bulur (yalnızca ilkini değil). <code>i</code> büyük/küçük harf
      duyarsızdır. <code>m</code>, <code>^</code> ve <code>$</code>'nin dize sınırlarının yanı sıra
      satır sınırlarını da eşleştirmesini sağlar. <code>s</code> (dotall), <code>.</code>'nin yeni
      satırları eşleştirmesini sağlar. <code>u</code>, JavaScript'te tam Unicode eşleştirmeyi
      etkinleştirir. <code>x</code> (genişletilmiş), okunabilirlik için kalıba boşluk ve yorum
      eklemenize olanak tanır.
    </p>
    <pre>{`/hello/i      HELLO, Hello, hello'yu eşleştirir
/^abc/gm      her satırın başındaki "abc"yi eşleştirir
/a.b/s        . yeni satırları da eşleştirir`}</pre>

    <h2>İleriye ve geriye bakma</h2>
    <p>
      İleriye ve geriye bakmalar sıfır genişlikli iddialardır&mdash;karakter tüketmeden bir koşulu
      kontrol ederler. <code>{`\\d+(?=px)`}</code> ardından "px" gelen rakamları eşleştirir ancak
      "px"yi eşleşmeye dahil etmez. <code>{`(?<=\\$)\\d+`}</code> dolar işaretinden önce gelen
      rakamları eşleştirir, dolar işaretini dahil etmez. Olumsuz sürümler
      <code>(?!...)</code> ve <code>{`(?<!...)`}</code> yokluğu iddia eder.
    </p>

    <h2>Felaket geri izleme tuzağı</h2>
    <p>
      Bazı kalıplar, eşleşmeyen girdilerle karşılaştıklarında üstel olarak birçok yolu keşfeder.{" "}
      <code>(a+)+b</code> ifadesi <code>aaaaaaaaaaaaaaaaX</code> karşısında başarısız olmadan önce
      milyarlarca adım atar. Suçlu, aynı şeyi eşleştiren iç içe niceleyicilerdir. Uyarı işaretleri:
      kendisi aynı karakterleri eşleştirebilecek bir niceleyici içeren bir gruptur. Savunma amaçlı
      yeniden yazmalar, mevcut olduğunda sahiplenici niceleyicileri, atomik grupları veya tekrarlanan
      gruplar içindeki <code>.+</code> yerine <code>[^&quot;]+</code> gibi kısıtlayıcı bir karakter
      sınıfı kullanmayı içerir.
    </p>
    <pre>{`Tehlikeli:  ^(\w+)+$         iç içe niceleyici
            ^(a|a)*$          belirsiz seçenek
            ^(a|aa)*$         örtüşen dallar

Daha güvenli: ^\w+$             tek niceleyici
            ^[^"]*$           belirli karakter sınıfı`}</pre>

    <h2>Test stratejisi</h2>
    <p>
      Dağıttığınız her regex için eşleşmeli ve eşleşmemeli satırları içeren bir dosya bulundurun.
      Kalıbı her değiştirdiğinizde çalıştırın. Bir hata raporu geldiğinde ("bu dize eşleşmemesi
      gerekirken eşleşti"), önce başarısız olan dizeyi test dosyasına ekleyin, regex'in başarısız
      olduğunu doğrulayın, ardından düzeltin ve yeniden çalıştırın. Bu, kalıplar için birim
      testidir.
    </p>

    <h2>Lehçe farklılıkları</h2>
    <p>
      JavaScript, Python, PCRE (PHP, Perl), .NET, Go (RE2) ve grep tarzının tümü farklı
      yeteneklere sahiptir. RE2 (Go, Rust'ın <code>regex</code> sandığı) doğrusal zamanı garanti
      eder ancak geri başvuruları ve geriye bakmaları bırakır. JavaScript'in dotall bayrağı
      nispeten yenidir. Dağıtım yapacağınız gerçek motorda test edin&mdash;regex101'de çalışan bir
      kalıp, dilinizde farklı davranabilir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Çıpaları unutmak.</strong> <code>\d+</code> herhangi bir yerdeki tüm rakamları
      eşleştirir. <code>^\d+$</code> tüm dizenin rakamlardan oluşmasını gerektirir. Bilinçli
      seçim yapın; yanlış olanı yanlış pozitiflere neden olur.
    </p>
    <p>
      <strong>Daha büyük bir kalıbın içinde <code>.*</code> kullanmak.</strong> Nokta-yıldız,
      açgözlü olduğu için çok fazla dahil her şeyi eşleştirir. Yapılandırılmış metin ayrıştırırken
      tırnak dışındaki her şey için <code>[^&quot;]*</code> gibi belirli bir karakter sınıfı
      kullanın.
    </p>
    <p>
      <strong>Meta karakterleri kaçışlamamak.</strong> Gerçek dizelerdeki noktalar <code>\.</code>
      olmalıdır. Gerçek telefon numaralarındaki parantezler <code>\(</code> ve <code>\)</code>
      olmalıdır. Noktayı kaçışlamadan <code>example.com</code>, "exampleXcom"u da eşleştirir.
    </p>
    <p>
      <strong>HTML veya JSON ayrıştırmak için regex kullanmak.</strong> HTML düzenli bir dil
      değildir. Bir ayrıştırıcı kullanın. Regex, bilinen yapı içindeki basit kalıpların cerrahi
      çıkarımı için çalışır, tam ayrıştırma için değil.
    </p>
    <p>
      <strong>Unicode'u görmezden gelmek.</strong> JavaScript'te <code>\w</code> varsayılan olarak
      yalnızca ASCII'dir, bu nedenle <code>caf&eacute;</code> eşleşmez. Unicode duyarlı eşleştirme
      için <code>u</code> bayrağı artı <code>\p{`{L}`}</code> karakter sınıflarını kullanın.
    </p>
    <p>
      <strong>Üretimde felaket geri izleme.</strong> Düşmanca girdilere karşı iç içe niceleyiciler
      hizmetinizi dondurabilir. Güvenilmeyen girdi alan her şey için doğrusal zamanlı motorlar
      (RE2, Rust regex) kullanın veya bir zaman aşımı ekleyin.
    </p>
    <p>
      <strong>Olumsuz durumları test etmemek.</strong> İstediğiniz her şeyi eşleştiren bir regex,
      istemediğiniz şeyleri de eşleştiriyorsa işe yaramaz. Test kümenize her zaman eşleşmemesi
      gereken girdileri ekleyin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Kalıbınızı ve örnek dizelerinizi, eşleşmeleri, yakalamaları ve bayrak davranışını gerçek
      zamanlı olarak görmek için <a href="/tools/regex-tester">regex test aracımıza</a> yapıştırın.
      Sıfırdan bir kalıp oluştururken <a href="/tools/regex-builder">regex oluşturucu</a> ile
      eşleştirin ve başka birinin kalıbını amaçlandığı gibi okuyup okumadığınızı doğrulamak için
      <a href="/tools/regex-to-english">regex'ten İngilizce'ye çeviriciyi</a> kullanın.
    </p>
  </>
);