import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir CMS'den, WYSIWYG düzenleyiciden veya bir kod üreteçten kopyalayıp yapıştırdıktan sonra
      deponuza gelen HTML neredeyse her zaman çirkindir: tutarsız girintileme, içeriğe yapışık kapanış
      etiketleri, rastgele sırada dağılmış nitelikler ve projenin kurallarıyla uyuşmayan kendi kendini
      kapatan etiketler. Tarayıcı umursamaz&mdash;HTML gibi görünen hemen her şeyi ayrıştırır&mdash;ancak
      insanlar ve diff araçları çok umursar. Tutarlı biçimlendirme, incelemeleri hızlı tutar, diff'leri
      anlamlı kılar ve karmaşık HTML'nin gizlediği yapısal hataları ortaya çıkarır. Bu kılavuz,
      girinti boyutunu, nitelik sıralamasını, kendi kendini kapatan ve boş öğeleri, Prettier'ın
      html-tidy'den farkını, satır içi ve blok düzeyi kuralları ve HTML'yi ölçekte okunabilir kılan
      belirli kuralları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Girinti boyutu ve karakteri</h2>
    <p>
      İki boşluklu girintileme, JavaScript ve CSS ekosistemiyle eşleşen modern HTML varsayılanıdır.
      Dört boşluklu ve sekme girintileme, eski kod tabanlarında ve bazı kurumsal stil kılavuzlarında
      hala yaygındır. Mutlak kural tutarlılıktır: karışık sekmeler ve boşluklar, diff aracı
      hizalamasını bozar ve her commit'te gürültülü boşluk değişikliklerine neden olur. Düzenleyicinizi
      <code>editorconfig</code> veya bir Prettier yapılandırmasıyla yapılandırın, böylece her katkıda
      bulunan aynı çıktıyı üretir ve değiştirilen dosyalarda biçimlendiriciyi çalıştıran bir
      commit-öncesi kancası ekleyin.
    </p>
    <pre>{`.editorconfig
[*.html]
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true`}</pre>

    <h2>Boş öğeler ve kendi kendini kapatma sözdizimi</h2>
    <p>
      HTML5'te hiçbir zaman kapanış etiketi olmayan 14 boş öğe vardır: <code>area</code>,
      <code>base</code>, <code>br</code>, <code>col</code>, <code>embed</code>, <code>hr</code>,
      <code>img</code>, <code>input</code>, <code>link</code>, <code>meta</code>, <code>param</code>,
      <code>source</code>, <code>track</code> ve <code>wbr</code>. HTML5 spesifikasyonu hem
      <code>&lt;br&gt;</code> hem de <code>&lt;br /&gt;</code>'a izin verir ve bunları aynı şekilde
      ele alır, ancak proje stili genellikle birini seçer. Düz <code>&lt;br&gt;</code>, HTML5
      deyimidir. Kendi kendini kapatan <code>&lt;br /&gt;</code>, XHTML'den kalma bir alışkanlıktır
      ancak geliştiricilerin her iki dilde de tutarlı bir kural istediği JSX ile ilgili kod
      tabanlarında yaygın olmaya devam eder. Birini seçin ve biçimlendiriciyle zorunlu kılın.
    </p>

    <h2>Blok ve satır içi öğeler</h2>
    <p>
      Blok düzeyindeki öğeler (<code>div</code>, <code>section</code>, <code>article</code>,
      <code>header</code>, <code>footer</code>, <code>p</code>, <code>h1</code>-<code>h6</code>,
      <code>ul</code>, <code>ol</code>, <code>li</code>, <code>table</code>) kendi satırlarında
      bulunur ve alt öğeleri bir düzey girintilenir. Satır içi öğeler (<code>span</code>,
      <code>a</code>, <code>em</code>, <code>strong</code>, <code>code</code>), metnin doğal
      akması için çevreleyen metinle aynı satırda kalır. Satır içi öğeleri kendi satırlarına
      bölmek, özellikle esnek ve ızgara düzenlerinde başıboş bir boşluğun hizalamayı etkilediği
      durumlarda, işlemeyi değiştiren istenmeyen boşluk düğümleri ekleyebilir.
    </p>
    <pre>{`<p>Bu bir <a href="/">bağlantıdır</a> cümle içinde.</p>

Değil:
<p>
  Bu bir
  <a href="/">bağlantıdır</a>
  cümle içinde.
</p>`}</pre>

    <h2>Nitelik sıralaması</h2>
    <p>
      Hiçbir resmi spesifikasyon bir nitelik sırası zorunlu kılmaz, ancak tutarlı sıralama taramayı
      hızlandırır ve gözden geçirenlerin eksik değerleri fark etmesine yardımcı olur. Yaygın olarak
      kullanılan bir sıra şudur: önce yapısal nitelikler (<code>id</code>, <code>class</code>),
      ardından öğeye özgü nitelikler (<code>href</code>, <code>src</code>, <code>type</code>,
      <code>value</code>), ardından meta veriler (<code>name</code>, <code>title</code>,
      <code>alt</code>, <code>role</code>, <code>aria-*</code>), ardından olay işleyicileri
      (<code>onclick</code>), en son <code>data-*</code> nitelikleri. Prettier varsayılan olarak
      nitelikleri sıralamaz, ancak <code>prettier-plugin-organize-attributes</code> eklentisi ve
      birçok linter, ekibiniz bir tane seçerse bir sıra zorunlu kılabilir.
    </p>

    <h2>Nitelik sarma</h2>
    <p>
      Bir etiket, projenin baskı genişliği ayarında (genellikle 80 veya 100 karakter) tek bir satıra
      sığmayacak kadar çok niteliğe sahip olduğunda, her niteliği kendi satırına sarın ve kapanış
      köşeli parantezini yeni bir satıra koyun. Prettier bunu, <code>singleAttributePerLine</code>
      etkinleştirildiğinde veya satır baskı genişliğini aştığında otomatik olarak yapar.
    </p>
    <pre>{`<button
  type="button"
  class="btn btn-primary"
  data-action="submit"
  aria-label="Değişiklikleri kaydet"
  disabled
&gt;
  Kaydet
</button>`}</pre>

    <h2>Nitelikler için tırnak stili</h2>
    <p>
      HTML5, boşluk, tırnak, ve işareti, eşittir işareti veya açılı parantez içermeyen değerler için
      tırnak işaretsiz nitelik değerlerini kabul eder. Tırnaklı değerler evrensel olarak daha
      güvenlidir ve her modern stil kılavuzunda normdur. Çift tırnak varsayılandır. Tek tırnak
      işe yarar ancak HTML, JS şablonlarına gömüldüğünde JavaScript dize içeriğiyle çakışabilir.
      Çift tırnak seçin ve biçimlendiricinizde kilitleyin.
    </p>

    <h2>Boolean nitelikler</h2>
    <p>
      <code>disabled</code>, <code>checked</code>, <code>readonly</code>, <code>required</code>,
      <code>selected</code> ve <code>hidden</code> gibi HTML boolean nitelikleri, mevcut olduğunda
      true, değerden bağımsız olarak yok olduğunda false'tur. Bunları <code>disabled</code>,
      <code>disabled=&quot;&quot;</code> veya <code>disabled=&quot;disabled&quot;</code> olarak
      yazabilirsiniz ve üçü de aynı anlama gelir. Yalın ad biçimi modern deyimdir.
      <code>disabled=&quot;false&quot;</code> yazmayın&mdash;yine de true'dur, çünkü nitelik
      mevcuttur ve &ldquo;false&rdquo; dizesi yok sayılır. Girişin devre dışı olmaması için
      niteliği tamamen kaldırın.
    </p>

    <h2>Prettier'a karşı html-tidy'ye karşı js-beautify</h2>
    <p>
      Prettier modern varsayılandır: hızlı, fikir sahibi, minimum yapılandırma ve gömülü CSS ve
      JavaScript'i tutarlı bir şekilde işler. HTML'yi birçok dili kapsayan proje çapında bir
      biçimlendiricinin parçası olarak biçimlendirir. html-tidy klasik araçtır: çok yapılandırılabilir,
      bozuk HTML'yi onarmada iyidir, ancak daha yavaştır ve garip yönlerde daha fazla fikir sahibidir.
      js-beautify (HTML moduyla) aralarında bir yerdedir: Prettier'dan daha fazla düğme ve tidy'den
      daha hızlı çalışma sunar. Yeni projeler için Prettier en az dirençli yoldur; bozuk HTML'yi
      onarmanız gereken eski temizlikler için html-tidy daha iyidir.
    </p>

    <h2>Anlamlı boşlukları koruma</h2>
    <p>
      <code>&lt;pre&gt;</code>, <code>&lt;textarea&gt;</code> ve CSS'de <code>white-space: pre</code>
      olan herhangi bir öğenin içinde boşluk önemlidir. Biçimlendiriciler bu içerikleri yalnız
      bırakmalıdır&mdash;yeniden girintileme yok, daraltma yok, sondaki boşluk kırpma yok. Prettier
      ve html-tidy varsayılan olarak buna saygı duyar. Bir <code>&lt;pre&gt;</code> içinde baştaki
      boşlukları ekleyen veya kaldıran biçimlendirici çıktısı görürseniz, bir biçimlendirici hatası
      veya yanlış yapılandırılmış bir geçersiz kılma olup olmadığını kontrol edin.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Oluşturulan dosyaları yeniden biçimlendirme.</strong> Şablon motorları, paketleyiciler
      ve CMS dışa aktarımları, kasıtlı bir yapıya sahip olabilecek HTML üretir. Derleme çıktısı
      HTML'sinde bir biçimlendirici çalıştırmak, gerçek değişiklikleri gizleyen gürültü yaratır.
      Kaynağı biçimlendirin, çıktıyı değil.
    </p>
    <p>
      <strong>Satır içi metni satırlar arasında bölme.</strong> <code>&lt;a&gt;</code> veya
      <code>&lt;em&gt;</code> etiketlerini kendi satırlarına koymak, esnek ve ızgara düzenlerinde
      işlemeyi değiştiren boşluk düğümleri ekler. Satır içi öğeleri çevreleyen metinle aynı satırda
      tutun.
    </p>
    <p>
      <strong>Kendi kendini kapatma stillerini karıştırma.</strong> Aynı dosyada bazı
      <code>&lt;br /&gt;</code> ve bazı <code>&lt;br&gt;</code> olması, biçimlendiricinin
      çalışmadığı veya yanlış yapılandırıldığı anlamına gelir. Birini seçin ve zorunlu kılın.
    </p>
    <p>
      <strong>Büyük bir dosyada manuel girintileme.</strong> İnsanlar boşluk saymakta kötüdür.
      Girintiyi gözle ayarlamak yerine her zaman commit'ten önce biçimlendiriciyi çalıştırın.
    </p>
    <p>
      <strong><code>disabled=&quot;false&quot;</code> yazmak.</strong> Mevcut bir boolean nitelik
      her zaman true'dur. False yapmak için niteliği kaldırın.
    </p>
    <p>
      <strong>Tırnak işaretsiz nitelik değerleri.</strong> Basit değerler için teknik olarak
      geçerlidir ancak birisi bir boşluk veya tırnak eklediği anda kırılgandır. Nitelik değerlerini
      her zaman tırnak içine alın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Karmaşık HTML'yi anında temizleyin{" "}
      <a href="/tools/html-formatter">HTML biçimlendirici</a> ile. Boşluk ve kendi kendini kapatma
      kurallarının farklı olduğu XHTML ve XML türevi işaretleme için{" "}
      <a href="/tools/xml-formatter">XML biçimlendirici</a> ile eşleştirin ve içeriğin okunabilir
      hale geldiğinde Markdown olarak daha iyi ifade edileceğine karar verdiğinizde{" "}
      <a href="/tools/html-to-markdown">HTML'den Markdown'a dönüştürücü</a> kullanın.
    </p>
  </>
);