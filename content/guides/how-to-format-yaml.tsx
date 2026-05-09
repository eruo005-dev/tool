import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      YAML basit görünür, ta ki sessizce yanlış ayrıştırana kadar. Başıboş bir sekme, tırnak işareti olmayan bir <code>yes</code>
      ifadesinin boole değerine dönüşmesi, başında sıfır olan bir sayının sekizlik sayı haline gelmesi&mdash;YAML, JSON'dan daha fazla tuzak ve doğru görünen ancak doğru olmayan çıktı üretme yöntemine sahiptir. Yine de DevOps dünyasının çoğu YAML'ı standartlaştırmıştır, bu nedenle CI boru hatları,
      Kubernetes bildirimleri, Ansible oyun kitapları ve Docker Compose dosyalarının tümü, biçimlendirmenin tam olarak doğru olmasına bağlıdır.
      Okunabilir ve tutarlı YAML ayrıca birleştirme çatışmalarını azaltır ve inceleme farklarını anlamlı kılar. Bu kılavuz, girinti
      kurallarını, dizelerin ne zaman tırnak içine alınacağını, blok ve akış stillerini, katlanmış ve değişmez skalerleri, anahtar/değer hizalamasını ve
      bir biçimlendirici ile bir lint aracı arasındaki farkı kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Girinti kuralları</h2>
    <p>
      YAML, yapıyı ifade etmek için girinti kullanır. Seviye başına iki boşluk evrensel kuraldır.
      Girinti için sekmelere izin verilmez&mdash;YAML belirtimi bunları açıkça yasaklar ve her ayrıştırıcı, sekmelerle girintilenmiş bir belgeyi reddeder.
      Her iç içe seviye, üst seviyesinden en az bir boşluk daha fazla girintilenmelidir ve aynı seviyedeki tüm kardeşler
      tam olarak aynı girintiye sahip olmalıdır. Belirtim tam olarak iki boşluk gerektirmez, ancak tutarlı herhangi bir sayı
      işe yarar; topluluk iki boşlukta karar kılmıştır.
    </p>
    <pre>{`server:
  host: localhost
  ports:
    - 8080
    - 8443
  tls:
    enabled: true
    cert: /etc/ssl/cert.pem`}</pre>

    <h2>Dizeler ve ne zaman tırnak kullanılacağı</h2>
    <p>
      YAML, tırnak işareti olmayan değerlerden türleri çıkarmaya çalışır ve sorunların başladığı yer burasıdır.
      <code>yes</code>, <code>no</code>, <code>true</code>, <code>false</code>, <code>on</code>,
      <code>off</code> ve bunların büyük harf varyantları YAML 1.1'de boole değerleri olarak ayrıştırılır.
      <code>null</code>, <code>Null</code>, <code>NULL</code>, <code>~</code> ve boş bir değerin tümü null olarak ayrıştırılır.
      Çıplak bir <code>12345</code> bir tamsayıdır. Çıplak bir <code>3.14</code> bir kayan noktalı sayıdır.
      <code>0777</code>, YAML 1.1'de sekizlik veya YAML 1.2'de bir dizedir. Güvenli kural, başka bir tür olarak yorumlanabilecek herhangi bir dizeyi tırnak içine almaktır&mdash;sürüm numaraları, ülke kodları, telefon numaraları, sıfırla başlayabilecek herhangi bir şey
      ve dize olarak kalmasını istediğiniz herhangi bir değişmez <code>yes</code>/<code>no</code>.
    </p>

    <h2>Tek tırnak ve çift tırnak</h2>
    <p>
      Tek tırnaklı dizeler değişmezdir: kaçış dizisi yoktur ve dize içindeki değişmez bir kesme işareti iki
      kesme işareti olarak yazılır. Çift tırnaklı dizeler, tam C stili kaçış kümesini destekler: <code>\n</code>, <code>\t</code>, <code>\uXXXX</code>
      vb. Çoğu yapılandırma dosyası dizesi için tek tırnaklar daha güvenlidir çünkü yanlışlıkla
      ters eğik çizgi kaçışları konusunda endişelenmeniz gerekmez. Yalnızca açıkça kaçış dizilerine ihtiyacınız olduğunda çift tırnak kullanın.
    </p>
    <pre>{`message: 'Bu değişmez bir dizedir.'
path: "C:\\\\Users\\\\me\\\\file.txt"
newline: "ilk satır\\nikinci satır"`}</pre>

    <h2>Blok stili ve akış stili</h2>
    <p>
      YAML, koleksiyonlar için iki stili destekler. Blok stili, yapılandırma dosyaları için okunabilir varsayılan olan girinti ve tireleri kullanır. Akış stili, JSON gibi küme parantezleri ve köşeli parantezler kullanır; kompakttır ancak farkları okumayı zorlaştırır. Akış stili,
      kısa satır içi koleksiyonlar (bir etiket listesi veya küçük bir kayıt) için uygundur, ancak iç içe geçtiğinde okunamaz hale gelir. Yaygın bir
      kural, tek satıra sığan kısa diziler dışında her şey için blok stilidir.
    </p>
    <pre>{`# Blok stili
services:
  web:
    image: nginx
    ports:
      - 80
      - 443

# Akış stili
services: { web: { image: nginx, ports: [80, 443] } }`}</pre>

    <h2>Katlanmış ve değişmez skalerler</h2>
    <p>
      Uzun dizeler, <code>|</code> (değişmez) veya <code>&gt;</code> (katlanmış) göstergesiyle blok skalerler olarak yazılabilir.
      Değişmez, her yeni satırı tam olarak korur. Katlanmış, tek yeni satırları boşluklara ve paragraf sonlarını (boş satırlar)
      tek yeni satırlara dönüştürür; bu, uzun düzyazıyı sarma noktalarına bağlı kalmadan sarmak için kullanışlıdır. Her iki stil de bir
      sondaki yeni satır göstergesini kabul eder: sondaki yeni satırı kaldırmak için <code>-</code>, tüm sondaki yeni satırları korumak için <code>+</code> veya hiçbir şey
      (kırpma) bir sondaki yeni satırı korumak için.
    </p>
    <pre>{`literal: |
  ilk satır
  ikinci satır
  üçüncü satır

katlanmis: &gt;
  tüm bu satırlar
  tek boşluklarla
  birleştirilecek

  boş bir satır yeni satır olur

kirpilmis: |-
  sondaki yeni satır yok`}</pre>

    <h2>Çapalar, takma adlar ve birleştirme anahtarları</h2>
    <p>
      YAML, çapalarla (<code>&amp;name</code>) yeniden kullanılabilir değerler tanımlamanıza ve bunlara takma adlarla
      (<code>*name</code>) başvurmanıza olanak tanır. Birleştirme anahtarı <code>&lt;&lt;:</code>, takma adlı bir eşlemeyi başka bir eşlemeye birleştirir. Biçimlendiriciler genellikle
      bunları olduğu gibi bırakır çünkü bir çapayı yeniden adlandırmak tüm başvuruları değiştirir. Birleştirme anahtarı bir YAML 1.1 özelliğidir ve YAML 1.2'nin bir parçası değildir,
      bu nedenle bazı yeni ayrıştırıcılar onu yok sayar&mdash;ona güvenmeden önce hedef çalışma zamanınızı kontrol edin.
    </p>

    <h2>Anahtar/değer hizalaması</h2>
    <p>
      Bazı ekipler, okunabilirlik için değerleri dikey olarak hizalar: <code>host:      localhost</code>,
      <code>port:      8080</code>. Çoğu biçimlendirici bunu otomatik olarak yapmaz çünkü yeni bir uzun anahtar
      eklendiğinde hizalama bozulur ve her satırın yeniden hizalanması gerekir. Daha temiz kural, iki nokta üst üsteden sonra tek bir boşluktur. Dikey hizalamayı,
      anahtar kümesinin sabit olduğu referans tabloları için saklayın.
    </p>

    <h2>Biçimlendirici ve lint aracı</h2>
    <p>
      Bir biçimlendirici, bir YAML belgesini tutarlı bir düzene yeniden yazar: girinti, tırnak kullanımı, blok/akış seçimi ve boş satırlar.
      Bir lint aracı, bir belgeyi mutlaka yeniden yazmadan stil veya anlamsal sorunlar için analiz eder: &ldquo;bu anahtarda sondaki boşluk&rdquo;, &ldquo;bu satır 120 karakteri aşıyor&rdquo;, &ldquo;bu değer bir dize olmalıdır.&rdquo;
      Prettier, YAML'ı biçimlendirir. <code>yamllint</code>, yapılandırılabilir kurallarla onu lint eder. Ciddi YAML projelerinin çoğu, kaydederken biçimlendiriciyi ve CI'da lint aracını çalıştırarak her ikisini de kullanır.
    </p>

    <h2>Çoklu belge dosyaları</h2>
    <p>
      Tek bir YAML dosyası, <code>---</code> ile ayrılmış birden çok belge içerebilir. Kubernetes bildirimleri, birkaç kaynağı bir araya getirmek için bu modeli yaygın olarak kullanır.
      Her belge bağımsız olarak ayrıştırılır, bu nedenle birindeki sözdizimi hatası diğerlerini engellemez.
      Biçimlendiriciler, belge ayırıcısına saygı göstermeli ve her belgeyi kendi başına biçimlendirmelidir. İsteğe bağlı bir sondaki
      <code>...</code>, bir belgenin sonunu açıkça işaretler, ancak nadiren kullanılır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Girinti için sekmeler kullanmak.</strong> Her YAML ayrıştırıcısı, sekmeleri girinti olarak reddeder. Dosyanızda bir satırın başında herhangi bir yerde bir sekme varsa, ayrıştırıcı genellikle eksik bir eşleme hakkında gizemli bir mesajla hata verecektir. YAML için boşluk kullanacak şekilde düzenleyicinizi yapılandırın.
    </p>
    <p>
      <strong>Tırnak işareti olmayan Norveç.</strong> <code>NO</code> ülke kodu, YAML 1.1'de boole
      <code>false</code> olarak ayrıştırılır. Aynı tuzak <code>yes</code>, <code>on</code>,
      <code>Y</code> için de geçerlidir. Ülke kodlarını ve belirsiz olabilecek diğer kısa dizeleri tırnak içine alın.
    </p>
    <p>
      <strong>Başında sıfır olan sürüm dizeleri.</strong> <code>version: 007</code>, ayrıştırıcıya bağlı olarak tamsayı
      <code>7</code> (veya sekizlik 7) olur. Sürüm dizelerini tırnak içine alın.
    </p>
    <p>
      <strong>Kardeşler arasında tutarsız girinti.</strong> Aynı seviyedeki tüm kardeşler tam olarak aynı
      girintiye sahip olmalıdır. Burada iki boşluk, orada üç boşluk bir yapı hatası üretir veya daha kötüsü, sessizce farklı bir ağaç şekli
      üretir.
    </p>
    <p>
      <strong>Dizelerin içindeki sondaki boşluk.</strong> Katlanmış bir blok skaler içindeki bir satırdaki sondaki boşluk, katlama
      davranışını değiştirir. Bir biçimlendirici, sondaki boşluğu otomatik olarak kırpmalıdır, ancak boşluğun anlamlı olduğu değişmez bir blok skaler içinde değil.
    </p>
    <p>
      <strong>Belge ayırıcısını unutmak.</strong> Birkaç YAML belgesini aralarında
      <code>---</code> olmadan tek bir dosyada birleştirmek, çoklu belge akışı değil, tek bir hatalı belge üretir. Her zaman ayırıcıyı ekleyin.
    </p>
    <p>
      <strong>Blok ve akışı tutarsız bir şekilde karıştırmak.</strong> Bir alt listenin blok stilinde ve diğerinin akış stilinde olması
      farkları okumayı zorlaştırır. İç içe geçme seviyesi başına bir stil seçin ve ona bağlı kalın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      YAML belgelerinizi{" "}
      <a href="/tools/yaml-formatter">YAML biçimlendirici</a> ile güzel yazdırın ve normalleştirin. Bir yapılandırmayı YAML ve JSON biçimleri arasında taşımanız gerektiğinde
      (YAML 1.2, JSON'ın katı bir üst kümesidir) bunu{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile eşleştirin ve bir yapılandırma
      değişikliğini kaydetmeden önce iki YAML sürümünü yan yana karşılaştırmak için{" "}
      <a href="/tools/diff-checker">fark denetleyicisini</a> kullanın.
    </p>
  </>
);