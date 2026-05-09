import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Regex'in okunamaz olduğuna dair bir ünü vardır ve vahşi doğada gördüğünüz çoğu regex bunu hak eder. Ancak kullanılan alt küme küçüktür — yaklaşık on yapı taşı, gerçek dünyadaki eşleştirmelerin %90'ını kapsar. Bunları öğrenin, desenler oluşturun ve Stack Overflow'dan 200 karakterlik canavarları kopyalayıp yapıştırmayı bırakın. Bu kılavuz, yapı taşlarını, gerçekten kullanacağınız dört çalışılmış örneği ve regex yazmayı bırakıp bunun yerine bir ayrıştırıcı yazmanız gerektiği kuralını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>On yapı taşı</h2>
    <p>
      <code>.</code> herhangi bir tek karakterle eşleşir (genellikle yeni satır hariç).{" "}
      <code>*</code> önceki şeyin sıfır veya daha fazlasıdır. <code>+</code> bir veya daha fazlasıdır. <code>?</code> önceki şeyi isteğe bağlı yapar (sıfır veya bir).
    </p>
    <p>
      <code>[abc]</code> bir karakter sınıfıdır — kümedeki herhangi bir tek karakterle eşleşir.
      <code>[^abc]</code> olumsuzlanmıştır — kümede olmayan herhangi bir karakterle eşleşir. Aralıklar çalışır:
      <code>[a-z]</code>, <code>[0-9]</code>, <code>[A-Za-z0-9_]</code>.
    </p>
    <p>
      <code>^</code> satır/dize başına sabitler. <code>$</code> sona sabitler.
      <code>\d</code> bir rakamdır, <code>\w</code> bir kelime karakteridir (harf, rakam, alt çizgi), <code>\s</code> boşluktur. Bunlardan herhangi birini büyük harf yapın (<code>\D</code>,
      <code>\W</code>, <code>\S</code>) tersine çevirmek için.
    </p>
    <p>
      <code>()</code> bir yakalama grubu oluşturur — eşleşen metin kaydedilir ve referans alınabilir. <code>|</code> alternatiftir (&ldquo;veya&rdquo;). Bu kadar. Geriye kalan her şey, bu on tanenin üzerindeki varyasyonlar ve bayraklardır.
    </p>

    <h2>Çalışılmış örnek: e-posta doğrulama</h2>
    <p>
      Gerçekçi regex, mükemmel olan değil:
    </p>
    <pre><code>{"^[\\w.+-]+@[\\w-]+\\.[a-zA-Z]{2,}$"}</code></pre>
    <p>
      Bir veya daha fazla kelime karakteri, nokta, artı veya tire, ardından <code>@</code>, ardından bir alan adı, ardından bir nokta, ardından 2+ harften oluşan bir TLD. Bu, bariz çöpleri reddeder ve gerçek e-postaları kabul eder. &ldquo;Mükemmel&rdquo; RFC-5322 e-posta regex'i 6.000 karakter uzunluğundadır ve hala yanlıştır. Denemeyin. Hafif bir regex artı gerçek bir onay e-postası kullanın — tek gerçek doğrulama budur.
    </p>

    <h2>Çalışılmış örnek: tüm URL'leri bulma</h2>
    <pre><code>{"https?:\\/\\/[\\w.-]+(?:\\/[\\w\\/.%?=&#-]*)?"}</code></pre>
    <p>
      <code>https?</code> <code>http</code> veya <code>https</code> ile eşleşir. Ardından
      <code>:\/\/</code>, ardından ana bilgisayar (kelime karakterleri, noktalar, tireler), ardından isteğe bağlı bir yol. <code>(?:...)</code> yakalamayan bir gruptur — <code>?</code> için gruplamak istediğinizde ancak yakalanan metne ihtiyacınız olmadığında kullanışlıdır. Sohbet günlüklerinden, e-postalardan ve belgelerden URL'leri kazımak için yeterince iyidir. Sorgu dizelerini önemsediğiniz gerçek URL'leri ayrıştırmak için yeterince iyi değildir — bunun için bir URL kitaplığı kullanın.
    </p>

    <h2>Çalışılmış örnek: telefon numaralarını çıkarma</h2>
    <pre><code>{"\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}"}</code></pre>
    <p>
      İsteğe bağlı bir açık parantez, üç rakam, isteğe bağlı kapanış parantezi, isteğe bağlı ayırıcı (tire, nokta, boşluk), üç rakam, ayırıcı, dört rakam. (555) 123-4567, 555.123.4567, 555 123 4567 ve 5551234567'yi yakalar. Ülke kodlarını veya uluslararası formatları işlemez — bunlara ihtiyacınız varsa, regex seçmeden önce girdiye göre dallanın veya <code>libphonenumber</code> gibi bir kitaplık kullanın.
    </p>

    <h2>Çalışılmış örnek: geri referanslarla değiştirme</h2>
    <p>
      Yakalama grupları, değiştirme dizesinde <code>$1</code>,
      <code>$2</code> vb. olarak (veya bazı tatlarda <code>\1</code>, <code>\2</code>) referans alınabilir. Diyelim ki &ldquo;Soyad, Ad&rdquo; şeklinde bir listeniz var ve &ldquo;Ad Soyad&rdquo; istiyorsunuz:
    </p>
    <pre><code>{"Eşleşme: ^(\\w+), (\\w+)$\nDeğiştir: $2 $1"}</code></pre>
    <p>
      &ldquo;Smith, John&rdquo; &ldquo;John Smith&rdquo; olur. Regex'in gerçekten parladığı yer burasıdır — elle saatler sürecek toplu metin dönüşümleri. Önce deseni birkaç girdi üzerinde test edin, ardından değiştirmeyi çalıştırın. Sonucu gerçek bir dosyaya kaydetmeden önce <a href="/tools/diff-checker">diff denetleyicimiz</a> gibi bir diff aracıyla sağlık kontrolü yapın.
    </p>

    <h2>40 karakter kuralı</h2>
    <p>
      Regex'iniz 40 karaktere yaklaşıyorsa, muhtemelen yanlış sorunu çözüyorsunuzdur. Gerçek ayrıştırıcılar (CSV, JSON, HTML, programlama dilleri) iç içe yapıya, kaçış dizilerine ve regex'in temiz bir şekilde ifade edemeyeceği uç durumlara sahiptir — HTML'nin regex ile hiçbir şekilde ayrıştırılamayacağı ünlüdür çünkü etiketler keyfi olarak iç içe geçebilir.
    </p>
    <p>
      40 karakter sınırına ulaştığınızda durun ve sorun: bunun için bir kitaplık var mı? Neredeyse her zaman, evet. <code>csv.reader</code>, <code>JSON.parse</code>, bir URL ayrıştırıcı, bir HTML ayrıştırıcı. Regex, küçük, düz, satır odaklı desenler içindir. Yapı için bir ayrıştırıcı kullanın.
    </p>

    <h2>Yineleme iş akışı</h2>
    <p>
      Regex'i bir test aracında aşamalı olarak yazın — asla körü körüne, asla üretim kodunda. Örnek girdi yapıştırın, deseni her seferinde bir blok oluşturun, eşleşmelerin canlı olarak vurgulanmasını izleyin. <a href="/tools/regex-tester">Regex testimiz</a> döngüdür: girdi yapıştırın, bir desen deneyin, neyin eşleştiğini görün, iyileştirin. Uç durumlar buldukça test senaryoları ekleyin. İstediğiniz her şeyle eşleştiğinde ve istemediğiniz hiçbir şeyle eşleşmediğinde, kodunuza kopyalayın. Beş dakikalık test, üretimde bir regex'te hata ayıklamak için iki saatten iyidir.
    </p>
  </>
);