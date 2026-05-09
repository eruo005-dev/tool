import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Markdown, geliştiricilerin yazılarında kullandığı ortak dildir: README'ler,
      commit mesajları, GitHub sorunları, dokümantasyon siteleri, Obsidian notları,
      Notion sayfaları, Substack, sohbet uygulamaları. Yazması kolay,
      iyi yazması zordur. Temiz markdown, platformlar arasında tutarlı bir şekilde
      işlenir, git'te temiz bir şekilde farklılaşır ve büyüdükçe bakımı kolay kalır.
      Dağınık markdown, işleyicileri bozar, iç içe listelerde hataları gizler
      ve belgeleri git-diff kabuslarına dönüştürür.
      Bu kılavuz, sözdizimini (uç durumlar dahil),
      lezzet farklılıklarını (CommonMark vs GFM vs diğerleri), stil
      kurallarını, linting araçlarını ve okunabilir markdown'u
      sadece sizin makinenizde çalışan türden ayıran kalıpları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Markdown lezzetleri — gerçekte ne işe yarar</h2>
    <p>
      <strong>CommonMark:</strong> standartlaştırılmış özellik. Temel
      sözdiziminin tam olarak ne anlama geldiğini tanımlar.
      &ldquo;Taşınabilir&rdquo; markdown için referans uygulama.
    </p>
    <p>
      <strong>GitHub Flavored Markdown (GFM):</strong> CommonMark +
      tablolar, üstü çizili, görev listeleri, otomatik bağlantılar, dil
      ipuçlarıyla çevrelenmiş kod. Çoğu geliştiricinin gerçekte yazdığı şey.
      GitHub, GitLab ve birçok dokümantasyon oluşturucu tarafından desteklenir.
    </p>
    <p>
      <strong>MDX:</strong> markdown + JSX bileşenleri. Next.js
      dokümantasyonu, Docusaurus ve birçok modern dokümantasyon sitesi tarafından
      kullanılır. Taşınabilirliği bozar — MDX dosyaları GitHub'da işlenmez.
    </p>
    <p>
      <strong>Pandoc markdown:</strong> çok genişletilmiş — dipnotlar,
      tanım listeleri, alıntılar, ham LaTeX. Akademik yazılar için
      popülerdir.
    </p>
    <p>
      <strong>Obsidian markdown:</strong> GFM + vikibağlantıları (
      <code>[[böyle]]</code>) + gömülü öğeler. Geçerli GFM ancak vikibağlantıları
      başka yerlerde bozulur.
    </p>
    <p>
      <strong>Kural:</strong> aksini gerektiren bir nedeniniz yoksa GFM'yi
      hedefleyin. Geliştiricilerin ihtiyaç duyduğu özelliklerle en geniş
      desteği sağlar.
    </p>

    <h2>Başlıklar</h2>
    <p>
      <strong>ATX stili (tercih edilen):</strong>{" "}
      <code># H1</code>, <code>## H2</code>, vb. Temiz, linter dostu.
    </p>
    <p>
      <strong>Setext stili:</strong> başlık metninin altını <code>===</code>{" "}
      veya <code>---</code> ile çizme. Yalnızca H1/H2'yi destekler.
      Seviyeleri değiştirmek daha zordur.
    </p>
    <p>
      <strong>Belge başına bir H1.</strong> H1 genellikle başlıktır.
      Gövde içeriğine H2'den başlayın.
    </p>
    <p>
      <strong>Seviyeleri atlamayın.</strong>{" "}
      <code>## → ####</code> yanlıştır. Erişilebilirlik ve içindekiler
      oluşturucuları bozulur.
    </p>
    <p>
      <strong>Başlıkların etrafında boş satırlar.</strong> Katı
      CommonMark'ta gereklidir. Paragraflara yanlışlıkla devam edilmesini önler.
    </p>

    <h2>Listeler — kolayca karıştırılan kısım</h2>
    <p>
      <strong>Girinti:</strong> tutarlı bir şekilde 2 veya 4 boşluk kullanın.
      GFM genellikle 2; bazı linter'lar 4 bekler. Karıştırmak iç içe geçmeyi bozar.
    </p>
    <p>
      <strong>Madde işareti tutarlılığı:</strong>{" "}
      <code>-</code>, <code>*</code>, <code>+</code> arasından birini seçin.
      Markdownlint birini zorunlu kılar.
    </p>
    <p>
      <strong>Sıralı listeler:</strong>{" "}
      <code>1. 2. 3.</code> çalışır; <code>1. 1. 1.</code> da çalışır
      (işleyiciler yeniden numaralandırır). Tümü-1 stili, öğe eklerken
      yeniden numaralandırma yapmanız gerekmediği için bakımı daha kolaydır.
    </p>
    <p>
      <strong>Listelerden önce boş satır.</strong> Katı CommonMark'ta
      gereklidir. Aksi takdirde liste paragrafın ortasında başlar ve
      liste olarak işlenmez.
    </p>
    <p>
      <strong>Listelerde iç içe kod.</strong> Kod bloğunu, liste
      öğesinin içerik sütunuyla eşleşecek şekilde girintileyin. Bir boşluk
      farkı, kodu normal metne dönüştürür.
    </p>

    <h2>Kod blokları</h2>
    <p>
      <strong>Çevrelenmiş (tercih edilen):</strong>{" "}
      <code>```dil</code> ... <code>```</code>. Dil ipucu aracılığıyla
      sözdizimi vurgulamayı destekler. Kod olduğunda her zaman dili
      belirtin — düz metin blokları için bile{" "}
      <code>```text</code> kullanın.
    </p>
    <p>
      <strong>Girintili:</strong> 4 boşluk girinti, bir kod bloğunu
      işaretler. CommonMark özelliği. Listelerin içinde bozulur.
    </p>
    <p>
      <strong>Satır içi kod:</strong> tek ters tırnak{" "}
      <code>`böyle`</code>. Kod ters tırnak içeriyorsa, çift kullanın:{" "}
      <code>``içinde `ters tırnak` olan kod``</code>.
    </p>
    <p>
      <strong>Dil ipuçları:</strong> standart adları kullanın:{" "}
      <code>js</code>, <code>ts</code>, <code>python</code>,{" "}
      <code>go</code>, <code>rust</code>, <code>bash</code>,{" "}
      <code>shell</code>, <code>sql</code>, <code>json</code>,{" "}
      <code>yaml</code>, <code>html</code>, <code>css</code>,{" "}
      <code>diff</code>. Bilinmeyen diller vurgulama yapılmadan geçer.
    </p>

    <h2>Bağlantılar ve referanslar</h2>
    <p>
      <strong>Satır içi:</strong>{" "}
      <code>[metin](url)</code>. Tek seferlik bağlantılar için iyidir.
    </p>
    <p>
      <strong>Referans:</strong>{" "}
      <code>[metin][ref]</code> ve altta{" "}
      <code>[ref]: url</code>. Aynı URL birden çok kez göründüğünde veya
      URL'ler uzun olduğunda daha temizdir.
    </p>
    <p>
      <strong>Otomatik bağlantılar (GFM):</strong>{" "}
      <code>https://ornek.com</code> otomatik olarak dönüşür. Çıplak URL'ler
      tıklanabilir hale gelir.
    </p>
    <p>
      <strong>Başlıklar:</strong>{" "}
      <code>[metin](url &quot;başlık&quot;)</code> — üzerine gelindiğinde gösterilir.
      İsteğe bağlıdır ancak erişilebilirlik için kullanışlıdır.
    </p>
    <p>
      <strong>Resim sözdizimi:</strong>{" "}
      <code>![alternatif metin](yol)</code>. Erişilebilirlik için her zaman
      alternatif metin ekleyin.
    </p>
    <p>
      <strong>Göreceli vs mutlak:</strong> yeniden temellendirilen dokümanlarda
      (farklı yollarda sunulan GitHub README'leri), göreceli bağlantılar
      bozulur. Yayınlanan dokümanlarda mutlak yollar kullanın.
    </p>

    <h2>Tablolar (GFM)</h2>
    <p>
      Boru ile ayrılmış ve bir başlık ayırıcı satırı:
    </p>
    <pre>
{`| Sütun 1 | Sütun 2 |
| ------- | ------- |
| Satır 1 | Veri    |
| Satır 2 | Veri    |`}
    </pre>
    <p>
      <strong>Hizalama:</strong> ayırıcı satırda <code>:---</code> sola,
      <code>:---:</code> ortaya, <code>---:</code> sağa.
    </p>
    <p>
      <strong>Hücreleri otomatik hizalamayın.</strong> Tablo hücrelerini
      boşluklarla hizalamak için zaman harcamak boşunadır — işleyici bunu
      yok sayar ve tabloyu daha sonra düzenlemek hizalamayı tekrar bozar.
    </p>
    <p>
      <strong>Uzun hücreler:</strong> çok uzun hücre içeriğine sahip tablolar
      kötü işlenir. Hücre başına kısa bir ifadeden fazlasına sahipseniz
      bir tanım listesi veya düz metin düşünün.
    </p>

    <h2>Blok alıntılar ve çağrılar</h2>
    <p>
      <strong>Standart:</strong> <code>&gt; alıntılanan metin</code>.
      İç içe alıntılar: <code>&gt;&gt;</code>.
    </p>
    <p>
      <strong>GFM uyarıları (yeni):</strong> GitHub,{" "}
      <code>&gt; [!NOTE]</code>, <code>&gt; [!WARNING]</code>,{" "}
      <code>&gt; [!TIP]</code>, <code>&gt; [!IMPORTANT]</code>,{" "}
      <code>&gt; [!CAUTION]</code> ekledi. GitHub'da renkli çağrı
      kutuları olarak işlenir.
    </p>

    <h2>Satır sonları ve paragraflar</h2>
    <p>
      <strong>Paragraf:</strong> metin blokları arasında boş satır.
    </p>
    <p>
      <strong>Sert satır sonu:</strong> satır sonunda iki boşluk →
      <code>&lt;br&gt;</code>. Kod incelemesinde gözden kaçması kolaydır (sondaki
      boşluk). GFM ayrıca satır sonunda <code>\</code> kabul eder.
    </p>
    <p>
      <strong>Kural:</strong> sert satır sonları genellikle yanlıştır. İki
      ayrı satır istiyorsanız, bunları ayrı paragraflar yapın.
      Teknik yazılarda paragraf içinde sert satır sonları nadirdir.
    </p>

    <h2>Kaçış karakterleri</h2>
    <p>
      Markdown özel karakterlerini gerçek anlamda işlemek için ters eğik çizgi
      ile kaçış: <code>\*kalın değil\*</code> →{" "}
      <code>*kalın değil*</code>.
    </p>
    <p>
      Yaygın kaçış hedefleri: <code>*</code>, <code>_</code>,{" "}
      <code>#</code>, <code>&lt;</code>, <code>&gt;</code>,{" "}
      <code>[</code>, <code>]</code>, <code>\</code>,{" "}
      <code>\`</code>.
    </p>
    <p>
      Kod blokları veya satır içi kod içinde kaçış gerekmez.
      Her şey gerçek anlamındadır.
    </p>

    <h2>markdownlint ile linting</h2>
    <p>
      <strong>markdownlint-cli</strong> şunları yakalar: başlık aralıkları,
      liste girinti uyumsuzlukları, sondaki boşluklar, tutarsız
      madde işaretleri, çıplak URL'ler, yinelenen başlıklar, satır uzunluğu
      (yapılandırılmışsa).
    </p>
    <p>
      Proje köküne bir <code>.markdownlint.json</code> dosyası ekleyin.
      Yaygın geçersiz kılmalar: satır uzunluğu kuralını devre dışı bırakın (<code>MD013: false</code>
      ) çünkü düz metnin sert sarmaya ihtiyacı yoktur ve gerekirse birden çok H1'e
      izin verin (<code>MD025: false</code>).
    </p>
    <p>
      Prettier ayrıca markdown'u biçimlendirir. Birleştirin: Biçimlendirme için
      Prettier, kurallar için markdownlint.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Satır sonları için sondaki boşluk.</strong> Farklarda
      görünmez. Çoğu düzenleyici kaydederken onu kaldırır. Bunun yerine
      ayrı paragraflar olarak yazın.
    </p>
    <p>
      <strong>Boş satır olmadan sıkı listeler.</strong> İşleyicileri
      bozar. İlk öğeden önce her zaman boş bir satır koyun.
    </p>
    <p>
      <strong>Kod bloğu dilini unutmak.</strong> Vurgulama yok, birçok
      görüntüleyicide kopyalama düğmesi desteği yok. Her zaman belirtin.
    </p>
    <p>
      <strong>Derin iç içe listeler.</strong> 3 seviyenin ötesinde, markdown
      okunamaz hale gelir. Başlıklara veya alt bölümlere yeniden düzenleyin.
    </p>
    <p>
      <strong>Zengin metin yapıştırmak.</strong> Word veya Notion'dan kopyalamak
      genellikle HTML aralıkları ve bölünemez boşluklar ekler. Düz metin olarak
      yapıştırın, ardından biçimlendirin.
    </p>
    <p>
      <strong>HTML içinde markdown karışıklığı.</strong> Bir{" "}
      <code>&lt;div&gt;</code> içinde, çoğu işleyici markdown'u
      ayrıştırmaz. Div'in içine boş bir satır ekleyin veya{" "}
      <code>markdown=&quot;1&quot;</code> (Kramdown) veya benzerini kullanın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Markdown'u anında HTML'ye dönüştürmek için{" "}
      <a href="/tools/markdown-to-html">markdown'dan HTML'ye dönüştürücüyü</a> kullanın.
      Web sayfalarından içerik çıkarmak için <a href="/tools/html-to-markdown">HTML'den markdown'a</a>
      {" "}dönüştürücüyle ve oluşturulan çıktıyı temizlemek için{" "}
      <a href="/tools/html-formatter">HTML biçimlendiriciyle</a> birlikte kullanın.
    </p>
  </>
);