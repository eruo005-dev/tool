import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      HTML biçimlendirme, geliştirici ergonomisi ile çalışma zamanı gerçekliğinin kesiştiği noktada yer alır. İyi biçimlendirilmiş HTML okumayı, kod incelemesinde farkları görmeyi ve DevTools'ta hata ayıklamayı kolaylaştırır — ancak katı biçimlendirme kuralları aynı zamanda <a href="/learn/ssr">SSR</a> hidrasyonu, SEO ayrıştırıcıları ve boşlukların görünür alana dönüştüğü kırılgan orta yol için de önemlidir. Bu kılavuz, HTML sözdizimi temellerini, biçimlendiricilerin neyi düzeltip neyi düzeltmediğini, önemli olan belirli kuralları (boş öğeler, boolean nitelikler, boşluğa duyarlı etiketler), araçları (Prettier, HTMLHint, elle yazılan) ve şablon HTML'si ile çıktı HTML'sini biçimlendirme arasındaki ince farkları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>"Biçimlendirme" aslında neyi kapsar</h2>
    <p>
      HTML biçimlendirme, stil katmanıdır: girinti, nitelik sarma, tırnak tutarlılığı, boş satırlar, kapanış eğik çizgileri. Şunlardan ayrıdır:
    </p>
    <p>
      <strong>Doğrulama</strong> — HTML gerçekten spesifikasyona uygun mu? Biçimlendiriciler çoğunlukla bunu kontrol etmez.
    </p>
    <p>
      <strong>Lintleme</strong> — En iyi uygulamaları takip ediyor mu? HTMLHint, eslint-plugin-html kullanın.
    </p>
    <p>
      <strong>Erişilebilirlik</strong> — Doğru anlambilime sahip mi? axe-core veya eslint-plugin-jsx-a11y kullanın.
    </p>
    <p>
      Biçimlendirme kozmetiktir. Tarayıcı çoğunu yok sayar. Ancak geliştiriciler HTML'yi binlerce kez okur ve dağınık HTML her düzenlemeyi yavaşlatır.
    </p>

    <h2>Girinti kuralları</h2>
    <p>
      <strong>Standart:</strong> İç içe geçme seviyesi başına 2 boşluk. Prettier varsayılan olarak 2'yi kullanır, çoğu stil kılavuzu aynı fikirdedir. 4 boşluk ve sekmeler de işe yarar; birini seçin ve uygulayın.
    </p>
    <p>
      <strong>Alt öğeleri iç içe yerleştirin:</strong> her alt öğe bir girinti daha alır. Uzun satırlardaki nitelikler, ilk niteliğe hizalanmış veya etiketten girintili olarak satır başına bir tane olacak şekilde sarılır.
    </p>
    <p>
      <strong>Kapanış etiketleri:</strong> açılış etiketinin girintisiyle eşleşsin. Metin içindeki satır içi öğeler olmadıkça, kapanış etiketlerini asla satır ortasında garip bir şekilde "sarkıtmayın".
    </p>
    <p>
      <strong>Satır içi ve blok:</strong>{" "}
      <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>,{" "}
      <code>&lt;a&gt;</code>, <code>&lt;code&gt;</code> metinleriyle aynı satırda kalır. Bunları kendi satırlarına koymak, işlemeyi değiştiren boşluklar ekler.
    </p>

    <h2>Boş öğeler — kapanış etiketi gerekmez</h2>
    <p>
      Bu HTML5 öğelerinin asla içeriği yoktur:{" "}
      <code>&lt;area&gt;</code>, <code>&lt;base&gt;</code>,{" "}
      <code>&lt;br&gt;</code>, <code>&lt;col&gt;</code>,{" "}
      <code>&lt;embed&gt;</code>, <code>&lt;hr&gt;</code>,{" "}
      <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>,{" "}
      <code>&lt;link&gt;</code>, <code>&lt;meta&gt;</code>,{" "}
      <code>&lt;source&gt;</code>, <code>&lt;track&gt;</code>,{" "}
      <code>&lt;wbr&gt;</code>.
    </p>
    <p>
      HTML5, <code>&lt;br&gt;</code> veya{" "}
      <code>&lt;br/&gt;</code>'ye izin verir. XHTML, kendiliğinden kapanan eğik çizgiyi gerektiriyordu. Bir stil seçin, uygulayın.
    </p>
    <p>
      Prettier, HTML için varsayılan olarak eğik çizgiyi kaldırır; JSX için saklar (çünkü JSX bunu gerektirir).
    </p>

    <h2>Nitelik stili</h2>
    <p>
      <strong>Tırnak işaretleri:</strong> çift tırnak standarttır. Tek tırnak ayrıştırılır ancak yabancı görünür. Prettier varsayılan olarak çift tırnak uygular.
    </p>
    <p>
      <strong>Boolean nitelikler:</strong>{" "}
      <code>&lt;input required&gt;</code>,{" "}
      <code>&lt;input required=&quot;&quot;&gt;</code> veya{" "}
      <code>&lt;input required=&quot;required&quot;&gt;</code> ile eşdeğerdir. Kısa biçim tercih edilir.
    </p>
    <p>
      <strong>Nitelik sarma:</strong> bir öğede 3+ nitelik olduğunda veya biri uzun olduğunda, satır başına bir tane olacak şekilde sarın. Tek bir niteliği değiştirdiğinizde farkları cerrahi tutar.
    </p>
    <p>
      <strong>Sıralama:</strong> gevşek kural{" "}
      <code>class</code>, <code>id</code>, <code>data-*</code>,
      ardından diğer her şeydir. Prettier sıralamayı zorunlu kılmaz.
    </p>

    <h2>Boşluğa duyarlı etiketler</h2>
    <p>
      Çoğu HTML boşluğu yok sayar, ancak bu etiketler yok saymaz:
    </p>
    <p>
      <strong>&lt;pre&gt;:</strong> tüm boşlukları korur. Kod blokları, ASCII sanatı, şiir. Biçimlendiriciler <code>&lt;pre&gt;</code> içini yeniden biçimlendirmemelidir.
    </p>
    <p>
      <strong>&lt;textarea&gt;:</strong> ilk içeriğindeki boşluğu korur. Yaygın tuzak — bir <code>&lt;textarea&gt;</code> etrafındaki HTML'yi girintilemek, bu girintiyi kullanıcının girişine koyar.
    </p>
    <p>
      <strong>&lt;pre&gt; içinde &lt;code&gt;:</strong> kod blokları için{" "}
      <code>&lt;pre&gt;&lt;code&gt;</code> deseni — <code>&lt;pre&gt;</code> boşluğu korur, <code>&lt;code&gt;</code> anlamsal anlam verir. İçerikleriyle aynı satırda olmalıdır.
    </p>
    <p>
      <strong>Satır içi öğeler:</strong>{" "}
      <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code> vb. metin arasında — aralarındaki boşluk işlenir. Yeni bir satıra girintili olarak geçmek, görebileceğiniz fazladan boşluk ekler.
    </p>

    <h2>Şablon HTML'si ve çıktı HTML'si</h2>
    <p>
      Şablon motorları (EJS, Jinja, Blade, Svelte, JSX) okunabilirlik için biçimlendirmenize, ardından sıkıştırılmış HTML çıktısı almanıza olanak tanır. İki farklı optimizasyon hedefi:
    </p>
    <p>
      <strong>Kaynak (okunabilir):</strong> girintili, yorumlanmış, bölümlere ayrılmış. Biçimlendiriciler burada uygulanır.
    </p>
    <p>
      <strong>Çıktı (bayt verimli):</strong> küçültülmüş, boşluksuz, yorumsuz. Derleme araçları bunu halleder.
    </p>
    <p>
      Kaynak HTML'yi asla elle küçültmeyin. Modern paketleyiciler (Vite, Webpack, Next.js) üretimde çıktıyı otomatik olarak küçültür.
    </p>

    <h2>Anlamsal sıralama</h2>
    <p>
      Biçimlendirmenin ötesinde, HTML'nin önemli olan yapısal bir sırası vardır:
    </p>
    <p>
      <strong>Başlık hiyerarşisi:</strong> sayfa başına bir{" "}
      <code>&lt;h1&gt;</code>; seviyeleri atlamayın (<code>h2 → h4</code>, <code>h3</code> olmadan). Erişilebilirliği ve SEO'yu etkiler.
    </p>
    <p>
      <strong>Belge yapısı:</strong>{" "}
      <code>&lt;header&gt; → &lt;main&gt; → &lt;footer&gt;</code>
      {" "}içinde <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code> ve <code>&lt;section&gt;</code> ile. Anlamsal bir etiketin olduğu yerde her yerde div kullanmaktan kaçının.
    </p>
    <p>
      <strong>Head öğesi sırası:</strong>{" "}
      <code>&lt;meta charset&gt;</code> her şeyden önce, ardından viewport, sonra <code>title</code>, sonra CSS, sonra betikler. Sıralama, ayrıştırma performansı için önemlidir.
    </p>

    <h2>Prettier, HTMLHint ve arkadaşları</h2>
    <p>
      <strong>Prettier:</strong> modern varsayılan biçimlendirici. Görüşlü, minimum yapılandırma. Düzenleyici kaydetme kancalarıyla entegre olur. HTML, CSS, JS, JSX, Vue, Svelte'yi işler. Her şeyi düzeltemez (sarma kuralları ve yorum yerleşiminin tuhaflıkları vardır).
    </p>
    <p>
      <strong>HTMLHint:</strong> biçimlendirici değil, lint aracı. Kapatılmamış etiketleri, yinelenen kimlikleri, eksik alt metni, geçersiz nitelikleri yakalar. Prettier ile birlikte çalıştırın, onun yerine değil.
    </p>
    <p>
      <strong>js-beautify:</strong> daha eski biçimlendirici, hala kullanılıyor. Daha fazla yapılandırma, Prettier'dan daha az görüşlü.
    </p>
    <p>
      <strong>Tidy (HTML Tidy):</strong> onlarca yıllık C yardımcı programı. Bozuk HTML'yi temizler, eski CMS çıktılarını düzeltmek için kullanışlıdır. Modern kod tabanlarında nadiren kullanılır.
    </p>

    <h2>HTML içinde CSS</h2>
    <p>
      <code>&lt;style&gt;</code> blokları, bağımsız CSS olarak biçimlendirilmelidir (aynı girinti, seçiciler kendi satırlarında, satır başına bir bildirim). Prettier bunu halleder.
    </p>
    <p>
      Satır içi stiller (<code>style=&quot;...&quot;</code>) yaklaşık 80 karakterde kırılır. Karmaşık satır içi stiller bir kod kokusudur — bir sınıfa çıkarmayı düşünün.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>2026'da HTML'yi elle biçimlendirmek.</strong> Bir biçimlendirici kullanın. Nitelikleri hizalamak için harcadığınız her dakika boşa gider.
    </p>
    <p>
      <strong>Dizelerin içindeki HTML'yi biçimlendirmek.</strong> JavaScript'te HTML dizelerini birleştirmek tüm biçimlendirmeyi devre dışı bırakır ve XSS açıkları açar. Bir şablon sistemi veya JSX kullanın.
    </p>
    <p>
      <strong>Aşırı girintileme.</strong> Her iç içe geçme seviyesi yatay ekran alanına mal olur. Derin iç içe geçme, genellikle işaretlemenin düzleştirilebileceğinin bir işaretidir.
    </p>
    <p>
      <strong>&lt;pre&gt; içeriğini biçimlendirmek.</strong> Biçimlendirici, <code>&lt;pre&gt;</code> içindeki kodu yeniden biçimlendirerek bozar. Çoğu biçimlendirici <code>&lt;pre&gt;</code> ve <code>&lt;textarea&gt;</code>'ya saygı duyar ancak yapılandırmanızı kontrol edin.
    </p>
    <p>
      <strong>HTML'yi XML gibi ele almak.</strong> HTML5, XML değildir. Daha hoşgörülüdür (eksik kapanış etiketleri genellikle sorun değildir) ve daha az hoşgörülüdür (bazı öğeler kendiliğinden kapanamaz). Genel bir XML biçimlendirici değil, HTML bilincine sahip bir biçimlendirici kullanın.
    </p>
    <p>
      <strong>Kodlamayı yok saymak.</strong> BOM olmadan UTF-8 olarak kaydedin. Karakter kümesini <code>&lt;head&gt;</code> içinde ilk şey olarak bildirin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      HTML'yi anında{" "}
      <a href="/tools/html-formatter">HTML biçimlendirici</a> ile biçimlendirin. Sayfalardan içerik çıkarırken{" "}
      <a href="/tools/html-to-markdown">HTML'den markdown'a dönüştürücü</a> ile eşleştirin ve belgenin XHTML veya XML şeklinde olduğu ortaya çıktığında{" "}
      <a href="/tools/xml-formatter">XML biçimlendirici</a>yi kullanın.
    </p>
  </>
);