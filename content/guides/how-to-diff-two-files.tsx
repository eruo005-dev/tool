import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      İki dosyayı karşılaştırmak, her geliştiricinin günde yüzlerce kez yaptığı, ancak
      arka planda gerçekte ne olduğunu düşünmediği işlemlerden biridir. Perde arkasında, <code>diff</code>
      iki dizi arasındaki en kısa düzenleme betiğini hesaplar: birini diğerine dönüştüren en küçük
      ekleme ve silme kümesi. Bu, göründüğünden daha zor bir problemdir ve algoritma, ayrıntı düzeyi
      (satır, kelime, karakter) ve çıktı biçimi (birleşik, bağlam, yan yana) seçimlerinin her birinin
      ödünleşimleri vardır. Doğru seçim, diff'i kendiniz mi okuduğunuza, bir yama aracına mı
      beslediğinize yoksa satır düzeyindeki diff'lerin amacı kaçırdığı yapılandırılmış verileri mi
      karşılaştırdığınıza bağlıdır. Bu kılavuz, birleşik ve bağlam biçimlerini, satır-kelime-karakter
      ayrıntı düzeylerini, üç yönlü birleştirmeyi, çoğu aracın kullandığı Myers algoritmasını ve
      <code>git diff</code> ile bağımsız bir diff aracı arasında ne zaman seçim yapılacağını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Düzenleme betiği problemi</h2>
    <p>
      Diff, şu sorunun cevabıdır: A dizisi ve B dizisi verildiğinde, A'yı B'ye dönüştüren en kısa
      ekleme ve silme dizisi nedir? Yeniden sıralamaları yok sayarsak, minimum düzenleme mesafesi
      problemi, O(mn) zaman ve O(mn) alan ile iyi bilinen bir dinamik programlama çözümüne sahiptir.
      10.000 satırlık bir dosya için bu, 100 milyon hücrelik bellek anlamına gelir ki bu çok fazladır.
      Myers algoritması (Eugene Myers, 1986) aynı sorunu O((m+n)D) zamanında çözer; burada D,
      genellikle m+n'den çok daha küçük olan düzenleme betiğinin boyutudur. Git, çoğu GNU
      <code>diff</code> uygulaması ve çoğu çevrimiçi diff aracı, Myers veya bir sabır varyantını
      kullanır.
    </p>

    <h2>Birleşik diff biçimi</h2>
    <p>
      Birleşik diff, çekme isteklerinde ve <code>git diff</code> çıktısında gördüğünüz biçimdir. Her
      yığın, <code>@@ -10,7 +10,8 @@</code> gibi bir aralık başlığıyla başlar: eski dosyanın 10.
      satırından başlayarak, 7 satır uzunluğunda, yeni dosyanın 10. satırından başlayarak, 8 satır
      uzunluğunda olur. <code>-</code> ile ön eklenmiş satırlar kaldırılır, <code>+</code> ile ön
      eklenmiş satırlar eklenir ve ön eksiz satırlar bağlamdır. Varsayılan bağlam, her değişiklikten
      önce ve sonra üç satırdır; bu, bir insanın değişmeyen içerikte boğulmadan yön bulması için
      yeterlidir.
    </p>
    <pre>{`--- a/config.yml
+++ b/config.yml
@@ -10,7 +10,8 @@
server:
  host: localhost
-  port: 8080
+  port: 8443
+  tls: true
  timeout: 30
  retries: 3`}</pre>

    <h2>Bağlam diff biçimi</h2>
    <p>
      Bağlam diff, bazı yama tabanlı iş akışlarında hala kullanılan daha eski biçimdir. Her yığın,
      eski bloğu tamamen (değişiklik için <code>!</code>, silme için <code>-</code> ile ön eklenmiş
      satırlar) ve yeni bloğu tamamen (değişiklik için <code>!</code>, ekleme için <code>+</code> ile
      ön eklenmiş satırlar) gösterir. Birleşik biçimden daha ayrıntılıdır ancak eski ve yeni,
      iç içe geçmiş yerine bozulmamış bloklar olarak gösterildiği için bazı insanların okuması daha
      kolaydır. Çoğu modern araç varsayılan olarak birleşik biçimi kullanır.
    </p>

    <h2>Satır ayrıntı düzeyi</h2>
    <p>
      Satır düzeyindeki diff'ler varsayılandır çünkü çoğu kod ve metin tabanlı biçim satır odaklıdır.
      &ldquo;42. satır değiştirildi&rdquo; diyen bir diff, kod incelemesi için genellikle yeterince
      kesindir. Satır düzeyindeki diff'ler, tek bir uzun satır değiştiğinde sorun çıkarır: tüm satırı
      silinmiş ve tüm satırı eklenmiş olarak görürsünüz, bu da gerçek düzenlemeyi gizler. Uzun YAML
      değerleri, küçültülmüş JavaScript ve tek satırlı SVG belgelerinin tümü bu soruna sahiptir.
    </p>

    <h2>Kelime ve karakter ayrıntı düzeyi</h2>
    <p>
      Kelime düzeyindeki diff'ler, içeriği boşluklara göre böler ve diff algoritmasını belirteçler
      üzerinde çalıştırır. Karakter düzeyi bir adım daha ileri gider. Her ikisi de, düzyazı için
      gerekli ve uzun satırlı yapılandırılmış veriler için yararlı olan, tam satır içi değişikliği
      vurgulayan diff'ler üretir. Çoğu diff arayüzü varsayılan olarak satır düzeyini kullanır ve
      &ldquo;satır içi değişiklikleri göster&rdquo; seçeneği sunar. Git'in <code>--word-diff</code>
      bayrağı kelime düzeyinde çıktı üretir.
    </p>
    <pre>{`# Satır düzeyi
- Hızlı kahverengi tilki tembel köpeğin üzerinden atlar.
+ Hızlı kırmızı tilki uykulu köpeğin üzerinden atlar.

# Kelime düzeyi
Hızlı [-kahverengi-]{+kırmızı+} tilki [-atlar-]{+sıçrar+} [-tembel-]{+uykulu+} köpeğin üzerinden.`}</pre>

    <h2>Yan yana görünüm</h2>
    <p>
      Yan yana diff'ler, eski içeriği bir sütunda ve yeni içeriği diğer sütunda, hizalanmış satırlar
      ve vurgulanmış değişikliklerle gösterir. Bu, çoğu IDE diff aracının varsayılan olarak
      kullandığı görünümdür çünkü insanların görsel olarak şeyleri karşılaştırma şekline uyar.
      Birleşik biçim daha derli topludur ve dar terminaller veya bir yama dosyasını okumak için daha
      iyidir; yan yana biçim, tam dosya incelemesi için daha iyidir. Bazı araçlar, birleştirme
      çakışmaları için ortak bir ata sütunu ekleyen üç sütunlu bir görünüm sunar.
    </p>

    <h2>Üç yönlü birleştirme</h2>
    <p>
      İki yönlü diff, A ve B'yi karşılaştırır. Üç yönlü birleştirme, A ve B'yi ortak bir ata C'ye
      karşı karşılaştırır; <code>git merge</code> işlemi de bunu yapar. Hem A hem de B, C'ye göre
      bir satırı değiştirdiyse ancak farklı şekillerdeyse, bu bir çakışmadır&mdash;Git bunu
      <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>
=</code> ve
      <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> işaretçileriyle işaretler ve çözümü insana bırakır.
      A ve B farklı satırları değiştirdiyse, birleştirme otomatik olarak ilerler. Üç yönlü
      birleştirme, sürüm kontrolünün çalışmasının nedenidir&mdash;bu olmadan, her eşzamanlı
      düzenleme manuel çözüm gerektirirdi.
    </p>

    <h2>Yapılandırılmış diff'ler</h2>
    <p>
      Satır düzeyindeki diff'ler bazı biçimler için anlamsızdır. Yeniden sıralanmış bir JSON nesnesi,
      yalnızca boşluk içeren bir YAML değişikliği veya yeniden biçimlendirilmiş bir SQL sorgusu, sıfır
      anlamsal farkla büyük bir metinsel diff üretebilir. Yapılandırılmış diff araçları, her iki
      belgeyi de yerel veri modellerine ayrıştırır ve modelleri doğrudan karşılaştırır.
      <code>jq</code> ve özel <code>jsondiff</code> kütüphaneleri JSON'u işler. SQL ayrıştırıcıları
      AST diff'leri üretir. Ödünleşim karmaşıklıktır: metinsel diff her şeyde çalışır, yapısal diff
      biçimi anlamak zorundadır.
    </p>

    <h2>Git diff ne zaman kullanılır</h2>
    <p>
      <code>git diff</code>, Git tarafından izlenen herhangi bir dosya için doğru araçtır. Büyük
      dosyaları verimli bir şekilde işler, renklendirilmiş çıktı gösterir, <code>--word-diff</code>
      ile kelime düzeyini destekler, isteğe bağlı commit'leri veya dalları karşılaştırabilir ve
      <code>git diff &gt; my.patch</code> ile yama dosyaları üretir. Bir Git deposunun dışındaki
      dosyalar veya panonuzdaki metinleri karşılaştırmak için bağımsız bir diff aracı daha hızlıdır.
      Farklı ortamlardan iki yapılandırmayı veya iki API yanıt yükünü karşılaştırmak için,
      tarayıcı tabanlı bir diff aracı geçici bir depo kurmaktan daha iyidir.
    </p>

    <h2>Sabır diff'i ve histogram diff'i</h2>
    <p>
      Myers diff'i hızlıdır ancak bazen değişiklikleri kötü hizalayan yığınlar üretebilir&mdash;örneğin,
      taşınmış bir işlevi dosyada birbirinden uzakta büyük bir silme ve büyük bir ekleme olarak
      gösterebilir. Sabır diff'i (Bram Cohen, 2008) ve histogram diff'i (Git'in varyantı), daha
      insan tarafından okunabilir diff'ler üretmek için ortak benzersiz satırları çapa olarak
      kullanır, ancak biraz performans pahasına. Git, varsayılan Myers çıktısı gürültülü olduğunda
      bu algoritmalara geçen <code>--patience</code> ve <code>--histogram</code> bayraklarını sunar.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>İkili dosyaları karşılaştırmak.</strong> Metinsel diff araçları, ikili girdide anlamsız
      çıktı üretir. Eşitlik kontrolleri için <code>bsdiff</code> gibi bir ikili diff aracı kullanın
      veya hash özetlerini karşılaştırın. Git, ikili dosyaları algılar ve metin diff'i denemek
      yerine <code>Binary files differ</code> gösterir.
    </p>
    <p>
      <strong>Satır sonu farklılıklarını yok saymak.</strong> Windows ve Unix arasında taşınan bir
      dosya, her satır bir <code>\r</code> kazandığı veya kaybettiği için genellikle tamamen
      farklılaşır. Karşılaştırmadan önce satır sonlarını normalleştirmek için diff aracınızı veya
      Git'inizi yapılandırın.
    </p>
    <p>
      <strong>Kod incelemesinde yalnızca boşluk içeren diff'lere güvenmek.</strong> 500 satıra
      dokunan ancak tamamen boşluk değişikliklerinden oluşan bir çekme isteği, tek bir gerçek
      değişikliği gizleyebilir. Yalnızca anlamsal değişiklikleri görmek için
      <code>--ignore-all-space</code> bayrağını kullanın.
    </p>
    <p>
      <strong>JSON veya YAML için satır düzeyinde diff'e güvenmek.</strong> Yeniden sıralanmış
      anahtarlar büyük diff'ler gibi görünür ancak hiçbir şeyi değiştirmez. Yapılandırma verileri
      için yapılandırılmış bir diff aracı kullanın.
    </p>
    <p>
      <strong>Bir yamayı yanlış tabana uygulamak.</strong> Birleşik bir diff, satır numaraları ve
      bağlam içerir. Hedef dosya, yamanın beklenen tabanından sapmışsa, yama başarısız olur veya
      yanlış yere uygulanır. Sonuca güvenmeden önce yamanın temiz bir şekilde uygulandığını her
      zaman doğrulayın.
    </p>
    <p>
      <strong>Küçültülmüş dosyaları karşılaştırmak.</strong> Tek satırlık küçültülmüş paketler,
      işe yaramaz satır düzeyinde diff'ler üretir. Önce her iki tarafı da güzelleştirin, ardından
      karşılaştırın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Tarayıcıda iki belgeyi yan yana veya birleşik olarak{" "}
      <a href="/tools/diff-checker">diff denetleyicisi</a> ile karşılaştırın. Her iki taraf da JSON
      olduğunda ve yeniden sıralanmış anahtarları yok sayan yapısal bir karşılaştırmaya ihtiyacınız
      olduğunda{" "}
      <a href="/tools/json-diff-checker">JSON diff denetleyicisi</a> ile ve diff'lemeden önce her iki
      girdiyi de normalleştirmek için{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile eşleştirin; böylece boşluk ve
      anahtar sıralaması sonucu kirletmez.
    </p>
  </>
);