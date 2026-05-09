import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      XML, HTML&rsquo;nin daha katı kuzeni gibi görünür, ancak önemli olan katı kısımdır. Tarayıcıların uyumsuz etiketleri ve eksik tırnakları affettiği HTML&rsquo;nin aksine, XML ayrıştırıcıları hatalı biçimlendirilmiş her şeyi reddeder&mdash;tek bir kaçışsız ve işareti işlemi durdurur. Bu katılık asıl noktadır: XML, sistemler arasında veri bütünlüğünün yazar rahatlığından daha önemli olduğu yerlerde kullanılır, bu yüzden hala SOAP, SAML, RSS, SVG, OOXML ve uzun bir endüstri formatları kuyruğuna güç verir. XML&rsquo;i insanlar için biçimlendirmek, okunabilirliği ayrıştırıcı için önemli boşluklar, farklar için kararlı öznitelik sırası, CDATA koruması ve ad alanı netliği arasında denge kurmak anlamına gelir. Bu kılavuz, XML bildirimi, DOCTYPE, ad alanları, öznitelik sıralaması, içerik içinde ve dışında boşluk yönetimi, CDATA blokları ve güzel yazdırma ile kanonik XML arasındaki farkı kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>XML bildirimi</h2>
    <p>
      <code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</code> bildirimi, varsa belgenin ilk satırı olmalıdır ve önünde görünür bir baştaki boşluk veya bayt sırası işareti olmamalıdır. Ayrıştırıcıya hangi XML sürümünün (1.0 evrenseldir; 1.1, adlarda daha fazla Unicode karakter desteği ekler ancak nadiren kullanılır) ve hangi karakter kodlamasının geçerli olduğunu söyler. Bildirim, UTF-8 ve UTF-16 içerik için isteğe bağlıdır, ancak açıkça dahil edilmesi, dosyalar sessizce yeniden kodlayabilecek sistemler arasında aktarıldığında belirsizliği önler.
    </p>
    <pre>{`<?xml version="1.0" encoding="UTF-8"?>
<root>
  <child>content</child>
</root>`}</pre>

    <h2>DOCTYPE ve şema referansları</h2>
    <p>
      DOCTYPE bildirimleri, XML&rsquo;de bir DTD (Belge Türü Tanımı) referans vermek için kullanılır. XML bildiriminden sonra ve kök öğeden önce görünürler. Modern XML kullanımı çoğunlukla DTD&rsquo;leri, kök öğede <code>xsi:schemaLocation</code> veya <code>xsi:noNamespaceSchemaLocation</code> öznitelikleri aracılığıyla referans verilen XSD şemalarıyla değiştirir. Biçimlendiriciler DOCTYPE ve şema referanslarını olduğu gibi bırakmalıdır&mdash;onları taşımak veya içlerindeki boşluğu değiştirmek belgeyi geçersiz kılabilir.
    </p>

    <h2>Ad alanları</h2>
    <p>
      XML ad alanları, belgeler birden çok kaynaktan gelen sözcük dağarcıklarını birleştirdiğinde öğe adı çakışmalarını önler. Bir ad alanı, varsayılan ad alanı için <code>xmlns=&quot;URI&quot;</code> veya önekli bir ad alanı için <code>xmlns:prefix=&quot;URI&quot;</code> ile bildirilir. URI, ayrıştırıcının getirdiği bir URL değil, bir tanımlayıcıdır. Tutarlı önek seçimleri belgeleri okumayı kolaylaştırır: XML Şeması için <code>xs</code> veya <code>xsd</code>, XML Şeması Örneği için <code>xsi</code>, SOAP Zarfı için <code>soap</code>, Atom beslemeleri için <code>atom</code>. Biçimlendiriciler tam öneki ve URI&rsquo;yi korur çünkü bunları değiştirmek her alt öğenin anlamını değiştirir.
    </p>

    <h2>Öznitelik sırası ve eşitlik</h2>
    <p>
      XML&rsquo;de zorunlu bir öznitelik sırası yoktur&mdash;aynı ada ve farklı sıralarda özniteliklere sahip iki öğe anlamsal olarak eşittir. Ancak, <em>metinsel</em> farklar sırayı önemser, bu nedenle tutarlı öznitelik sıralaması sürüm kontrolündeki gürültüyü azaltır. Alfabetik sıra en basit kuraldır ve XML Kanonikleştirmesinin (C14N) kullandığı şeydir. Daha okunabilir bir kural, önce <code>xmlns</code> bildirimlerini, ardından <code>id</code> ve <code>name</code>&rsquo;i, sonra alana özgü öznitelikleri yerleştirir. Birini seçin ve biçimlendiricinin bunu uygulamasına izin verin.
    </p>

    <h2>Önemli ve önemsiz boşluk</h2>
    <p>
      Metin içeriğinin dışındaki etiketler arasındaki boşluk genellikle önemsizdir ve biçimlendiriciler oraya serbestçe yeni satırlar ve girintiler ekler. Metin içeriğinin <em>içindeki</em> boşluk varsayılan olarak önemlidir&mdash;bir XML ayrıştırıcısı boşluğu tüketen uygulamaya bildirir. <code>xml:space=&quot;preserve&quot;</code> özniteliği, boşluğu değiştirilmemesi gereken bir öğeyi işaretler ve <code>xml:space=&quot;default&quot;</code>, biçimlendiricinin boşluğu normal şekilde ele almasına izin verir. Güzel yazdırma yaparken, bu özniteliklere saygı gösterin, aksi takdirde aşağı akış sistemlerinin tam anlamıyla yorumladığı içeriği bozma riskiniz vardır.
    </p>
    <pre>{`<root>
  <code xml:space="preserve">
    def hello():
        return "world"
  </code>
  <description>Allow reformatting here.</description>
</root>`}</pre>

    <h2>CDATA bölümleri</h2>
    <p>
      CDATA bölümleri <code>&lt;![CDATA[ ... ]]&gt;</code>, aksi takdirde kapsamlı kaçış gerektirecek gerçek metni&mdash;kod, HTML veya açılı ayraçlar ve ve işaretleriyle dolu herhangi bir şey&mdash;dahil etmek için kullanılır. CDATA içinde, kapanış <code>]]&gt;</code> dizisi dışındaki tüm karakterler tam anlamıyla alınır; eğer içeriğiniz bunu içeriyorsa, iki CDATA bölümüne ayırmanız gerekir. Biçimlendiriciler CDATA içeriğini asla yeniden biçimlendirmemelidir. Geçerli tek dönüşüm, CDATA&rsquo;yı kaçışlı metne veya tam tersine dönüştürmektir ve bu, biçimlendiricinin otomatik olarak yapmaması gereken anlamsal bir değişikliktir.
    </p>

    <h2>Karakter kaçışı</h2>
    <p>
      XML metin içeriğinde ve öznitelik değerlerinde beş karakter özel anlama sahiptir: <code>&amp;</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&apos;</code> (kesme işareti) ve <code>&quot;</code>. Bunlar sırasıyla <code>&amp;amp;</code>, <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;apos;</code> ve <code>&amp;quot;</code> olarak kaçış yapılmalıdır. <code>&amp;#x2014;</code> (em tire) gibi sayısal karakter referansları her yerde yasaldır. Bir biçimlendirici, adlandırılmış ve sayısal varlıklar arasında sessizce geçiş yapmamalıdır çünkü seçim tüketiciler için anlamlı olabilir.
    </p>

    <h2>Güzel yazdırma ve kanonik XML</h2>
    <p>
      Güzel yazdırma, bir XML belgesini insan tarafından okunabilir hale getirmek için yeniden yazar: tutarlı girinti, öğeler arasında yeni satırlar ve sarılmış öznitelikler. Kanonik XML (C14N), bir belgeyi dijital imzalar ve karma karşılaştırmaları için kullanılan bayt-özdeş normalleştirilmiş bir forma yeniden yazar. C14N kuralları şunları içerir: XML bildirimi yok, sıralanmış öznitelik sırası, öznitelik değerlerinde normalleştirilmiş boşluk, çözümlenmiş ad alanı bildirimleri ve boş öğe etiketlerinin başlangıç-ve-bitiş-etiketi çiftleriyle değiştirilmesi. C14N çıktısı özellikle okunabilir değildir ancak tekrarlanabilirdir, bu da SAML iddiaları veya XML-DSig belgeleri üzerindeki kriptografik işlemler için önemli olan şeydir.
    </p>

    <h2>Büyük XML dosyalarını işleme</h2>
    <p>
      500 MB&rsquo;lık bir XML dosyasını bellekte güzel yazdırmak çoğu ortamı tüketecektir. Bir çekme ayrıştırıcısı (Java&rsquo;da StAX, Python&rsquo;da <code>xml.etree.iterparse</code>) kullanan <a href="/learn/stream">Akış</a> biçimlendiricileri, keyfi olarak büyük belgeleri güzel yazdırabilir. Ara sıra temizlik için, dosyayı bilinen bir sınır öğesinde bölmek, parçaları biçimlendirmek ve yeniden birleştirmek yeterince iyi çalışır. Üretim hatları için, sonradan yeniden biçimlendirmek yerine serileştirme sırasında biçimlendirilmiş çıktı yayan araçları tercih edin.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong><code>xml:space=&quot;preserve&quot;</code> içeriğini yeniden biçimlendirme.</strong> Oradaki boşluğu kaldırın ve belgenin anlamını bozarsınız. İyi bir biçimlendirici özniteliğe otomatik olarak saygı gösterir.
    </p>
    <p>
      <strong>CDATA&rsquo;yı girintiyle bozma.</strong> CDATA içinde girinti yapan biçimlendiriciler, gerçek içeriğe baştaki boşluk ekler ve bu, tüketicilerin gördüklerini değiştirir. CDATA içeriğine dokunulmamalıdır.
    </p>
    <p>
      <strong>İmzalı belgelerde öznitelik sırasını değiştirme.</strong> SAML ve XML-DSig, imza doğrulaması için kanonik forma güvenir. İmzalı bir belgeyi yeniden biçimlendirmek, kanonikleştirmeyi aynı şekilde yeniden uygulamadığınız sürece imzayı bozar.
    </p>
    <p>
      <strong>Ve işaretlerini kaçış yapmayı unutma.</strong> Metin veya öznitelik değerinde ham bir <code>&amp;</code>, ayrıştırıcı hatası üretir. Her zaman <code>&amp;amp;</code> olarak kaçış yapın.
    </p>
    <p>
      <strong>Öznitelik tırnak stillerini karıştırma.</strong> XML, öznitelik değerleri etrafında tek veya çift tırnaklara izin verir, ancak karışık tırnak kullanımı farkları gürültülü hale getirir. Çift tırnak seçin ve biçimlendiricinin bunu uygulamasına izin verin.
    </p>
    <p>
      <strong>Boş öğe daraltmasının ücretsiz olduğunu varsayma.</strong> <code>&lt;tag&gt;&lt;/tag&gt;</code> ve <code>&lt;tag/&gt;</code> aynı bilgi kümelerine ayrıştırılır, ancak onları daraltan bir biçimlendirici bir belgenin bayt imzasını değiştirebilir. Çoğu kullanım için bu zararsızdır; kanonik belgeler için önemlidir.
    </p>
    <p>
      <strong>BOM içeren dosyaları özen göstermeden düzenleme.</strong> XML bildiriminden önceki bir bayt sırası işareti bazı kodlamalarda yasal ve diğerlerinde yasa dışıdır. Sessizce BOM ekleyen veya kaldıran biçimlendiriciler, aşağı akış ayrıştırıcılarını bozabilir.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      XML&rsquo;i tarayıcıda güzel yazdırın, daraltın veya kanonikleştirin{" "}
      <a href="/tools/xml-formatter">XML biçimlendirici</a> ile. Her iki spesifikasyonun örtüştüğü XHTML ve SVG belgeleri için{" "}
      <a href="/tools/html-formatter">HTML biçimlendirici</a> ile ve eski SOAP/XML yüklerini JSON REST eşdeğerlerine çevirirken{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile eşleştirin.
    </p>
  </>
);