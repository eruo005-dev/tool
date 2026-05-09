import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      HTML'yi Markdown'a dönüştürmek, kayıpsız gibi görünür; ta ki birleştirilmiş hücrelere sahip
      ilk <code>&lt;table&gt;</code> etiketinizle, satır içi stillerle dolu bir <code>&lt;div&gt;</code>
      çorbasıyla veya her paragrafın dekoratif bir span içine sarıldığı eski bir CMS
      dışa aktarımıyla karşılaşana kadar. Markdown, kasıtlı olarak küçük bir dildir&mdash;kabaca
      düz yazı yazan bir yazarın ihtiyaç duyduğu HTML alt kümesini kapsar&mdash;ve
      bu alt kümenin ötesindeki her şey ya atılmalı, yaklaşık olarak ifade edilmeli ya da ham HTML
      geçişi olarak korunmalıdır. Dönüşümü doğru yapmak, hangi öğelerin temiz bir şekilde eşleştiğini,
      hangilerinin kayıplı olduğunu, iç içe HTML'nin nasıl ele alınacağını ve dönüştürücünüzü
      yapıyı kaybetmeden başarısız olacak şekilde nasıl yapılandıracağınızı bilmek anlamına gelir.
      Bu kılavuz, güvenli eşleme öğelerini, kayıplı olanları, iç içe HTML'nin nasıl işleneceğini
      ve toplu içerik taşıma için en iyi stratejileri kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Güvenli alt küme</h2>
    <p>
      Bir avuç HTML öğesi, sıfır bilgi kaybıyla bire bir Markdown'a eşlenir. Başlıklar
      <code>&lt;h1&gt;</code>'den <code>&lt;h6&gt;</code>'ya <code>#</code>'den
      <code>######</code>'ya dönüşür. Paragraflar, boş satırla ayrılmış metin haline gelir.
      <code>&lt;strong&gt;</code> ve <code>&lt;b&gt;</code> ikisi de <code>**bold**</code> olur.
      <code>&lt;em&gt;</code> ve <code>&lt;i&gt;</code> ise <code>_italic_</code> olur.
      <code>&lt;code&gt;</code> ters tırnak aralıklarına, <code>&lt;pre&gt;&lt;code&gt;</code>
      çitli kod bloklarına ve <code>&lt;blockquote&gt;</code> <code>&gt;</code>-ön ekli satırlara
      dönüşür. Kaynak HTML'niz yalnızca bu etiketlerden oluşuyorsa, dönüştürücünüz HTML'ye
      mükemmel bir şekilde geri dönen temiz Markdown üretebilir.
    </p>

    <h2>Bağlantılar ve resimler</h2>
    <p>
      Bağlantılar ve resimler, nitelikler minimum düzeyde olduğunda temiz bir şekilde dönüşür.
      <code>&lt;a href=&quot;/about&quot;&gt;Hakkında</code> <code>[Hakkında](/about)</code> olur
      ve <code>&lt;img src=&quot;x.png&quot; alt=&quot;X&quot;&gt;</code>
      <code>![X](x.png)</code> olur. <code>class</code>, <code>id</code>,
      <code>rel</code>, <code>target</code>, <code>loading</code> veya satır içi stiller gibi
      ek nitelikler standart Markdown'da ifade edilemez ve atılmalıdır. Bu niteliklerden herhangi
      biri içeriğinizde anlamsal bir anlam taşıyorsa&mdash;örneğin, harici bağlantılarda
      <code>target=&quot;_blank&quot;</code>&mdash;dönüştürücünüz ya satır içi HTML'ye geri dönecek
      ya da dönüşümden sonra nitelikleri manuel olarak ekleyebilmeniz için sizi uyaracak şekilde
      yapılandırılmalıdır.
    </p>
    <pre>{`HTML:  <a href="https://example.com" target="_blank" rel="noopener">Dokümanlar</a>
Kayıplı: [Dokümanlar](https://example.com)
Kayıpsız: <a href="https://example.com" target="_blank" rel="noopener">Dokümanlar</a>`}</pre>

    <h2>Listeler ve iç içe yerleştirme</h2>
    <p>
      Sırasız listeler <code>-</code>, <code>*</code> veya <code>+</code> satırları olur; sıralı
      listeler <code>1.</code>, <code>2.</code> vb. olur. Çoğu dönüştürücü, sayıları her satırda
      <code>1.</code> olarak normalleştirir çünkü Markdown işleyicileri otomatik olarak artırır.
      İç içe listeler çalışır ancak katı Markdown'da her seviye için dört boşluk girintisi ve
      GFM'de iki boşluk gerektirir. Asıl sorun, HTML listeleri blok düzeyinde alt öğeler
      içerdiğinde ortaya çıkar&mdash;paragraflar, kod blokları, tablolar veya diğer listeler.
      Bunlar, liste öğesi içinde boş bir satır ve devam girintili içerik gerektirir; bu da birçok
      saf dönüştürücünün yanlış yaptığı bir şeydir.
    </p>

    <h2>Tablolar ve diğer kayıplı öğeler</h2>
    <p>
      HTML tabloları, Markdown tablolarının yapamadığı şeyleri destekler: <code>rowspan</code> ve
      <code>colspan</code> ile birleştirilmiş hücreler, başlıklar, birden çok tbody bölümü, sol
      sütundaki başlıklar ve hücrelerin içinde rastgele HTML. Bir dönüştürücünün üç seçeneği
      vardır: tabloyu bir GFM boru tablosuna düzleştirip desteklenmeyen özellikleri atmak,
      tüm <code>&lt;table&gt;</code> öğesini Markdown içinde ham HTML olarak yaymak veya bir hata
      verip insan incelemesi istemek. Dokümantasyon içeriği için, ham HTML geçişi genellikle doğru
      seçimdir çünkü yapıyı korumak, kaynağın okunabilirliğinden daha önemlidir.
    </p>

    <h2>İç içe ve dekoratif HTML</h2>
    <p>
      Eski CMS dışa aktarımları genellikle içeriği <code>wp-block-paragraph</code>,
      <code>mce-container</code> veya <code>post-content</code> gibi sınıflara sahip dekoratif
      <code>&lt;div&gt;</code> ve <code>&lt;span&gt;</code> öğelerine sarar. Bu öğeler hiçbir anlam
      taşımaz ve dönüşümden önce kaldırılmalıdır. İyi yapılandırılmış bir dönüştürücü, tamamen
      dekoratif kapları açar ve alt öğelerini tutar. Daha agresif dönüştürücüler bir beyaz liste
      uygular: bilinen güvenli etiketler kümesinin dışındaki her şey ya açılır ya da tamamen atılır.
    </p>
    <pre>{`Girdi:
<div class="wp-block-group">
  <div class="wp-block-column">
    <p>Merhaba <span class="emphasis">dünya</span>.</p>
  </div>
</div>

Çıktı:
Merhaba **dünya**.`}</pre>

    <h2>Satır içi stiller ve renk</h2>
    <p>
      Markdown'da renk, yazı tipi ailesi, boyut veya başka herhangi bir CSS özelliği için sözdizimi
      yoktur. Kaynağınız hataları işaretlemek için <code>&lt;span style=&quot;color: red&quot;&gt;</code>
      veya vurgulamalar için <code>&lt;mark&gt;</code> kullanıyorsa, stili atmak, bir emoji veya
      unicode işaretiyle değiştirmek veya HTML geçişini korumak arasında seçim yapmanız gerekir.
      Teknik dokümanlar için geçiş iyidir. Blog yazıları için, stili atmak genellikle daha temizdir
      ve stil, Markdown işlendikten sonra CSS sınıfları aracılığıyla yeniden eklenmelidir.
    </p>

    <h2>Kod blokları ve dil ipuçları</h2>
    <p>
      İyi biçimlendirilmiş bir <code>&lt;pre&gt;&lt;code class=&quot;language-python&quot;&gt;</code>
      bloğu, dil etiketiyle birlikte çitli bir kod bloğuna temiz bir şekilde dönüşür. Ancak birçok
      düzenleyici <code>class=&quot;lang-python&quot;</code>, <code>class=&quot;python&quot;</code>
      veya hiçbir şey yaymaz ve highlight.js ile Prism farklı sınıf kuralları kullanır. İyi bir
      dönüştürücü, dili yaygın sınıf ön eklerinden herhangi birinden algılar ve hiçbir dil
      tanımlanamadığında etiketsiz bir çite geri döner. Girintiyi dikkatlice koruyun&mdash;Markdown
      işleyicileri, çitler arasındaki içerik konusunda katıdır.
    </p>

    <h2>Toplu taşıma stratejisi</h2>
    <p>
      Tek seferlik dönüşümler için HTML'yi bir dönüştürücüye yapıştırın ve çıktıyı elle temizleyin.
      Toplu bir taşıma için&mdash;örneğin, bin CMS gönderisi&mdash;dönüşümü Turndown (JavaScript)
      veya html2text (Python) gibi bir araçla komut dosyası haline getirin, kuralları HTML
      kalıplarınıza uyacak şekilde ayarlayın ve önce yirmi gönderilik bir örnek üzerinde dönüşümü
      çalıştırın. Bozulan kalıpları arayın: özel kısa kodlar, gömülü widget'lar,
      <code>&lt;iframe&gt;</code> gömmeleri ve bir WYSIWYG düzenleyici tarafından oluşturulan
      her şey. Tam toplu işlemi çalıştırmadan önce bu kalıplar için dönüşümler oluşturun, aksi
      takdirde çıktıyı temizlemek için haftalar harcarsınız.
    </p>

    <h2>Gidiş-dönüş testi</h2>
    <p>
      Dönüştürücü kalitesini kontrol etmenin en hızlı yolu, bir örneği HTML'den Markdown'a ve geri
      dönüştürmektir. Gidiş-dönüşü değişmeden atlatan öğeler güvenlidir. Bozulan, niteliklerini
      kaybeden veya yeniden yapılanan öğeler, elle veya özel kurallarla ele almanız gerekenlerdir.
      Temsili bir örnek üzerinde çalıştırılan bir gidiş-dönüş farkı, taşıma işleminiz için somut
      bir kapsama sayısı verir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Dönüşümün kayıpsız olduğunu varsaymak.</strong> Markdown, gerçek dünya HTML'sinin
      belki yüzde altmışını temiz bir şekilde kapsar. Geri kalanı seçimler gerektirir. Taşıma
      programınızda inceleme ve temizlik için plan yapın.
    </p>
    <p>
      <strong>Tabloları sessizce atmak.</strong> Dönüştürücünüz karmaşık bir tabloyu borulu metin
      paragraflarına dönüştürürse, yapıyı kaybedersiniz. Tablolar için ya HTML geçişini zorlayın
      ya da manuel inceleme için işaretleyin.
    </p>
    <p>
      <strong>Dekoratif sarmalayıcıları tutmak.</strong> Her <code>&lt;div&gt;</code> ve
      <code>&lt;span&gt;</code> öğesini ham HTML geçişine dönüştürmek, Markdown'a geçmenin amacını
      boşa çıkarır. Anlamsal ağırlık taşımayanları kaldırın.
    </p>
    <p>
      <strong>Resim yollarının değiştiğini unutmak.</strong> Markdown resimleri, göreli yolları
      HTML'den farklı kullanır ve taşıma sırasında bir site yeniden yapılanması genellikle her
      resmi bozar. Resim yollarını dönüşümün bir parçası olarak yeniden yazın, sonradan değil.
    </p>
    <p>
      <strong>Kod blokları içindeki boşlukları görmezden gelmek.</strong> Kodda baştaki sekmeler,
      sondaki boşluklar ve boş satırlar önemlidir. Boşlukları agresif bir şekilde kırpan
      dönüştürücüler, kod örneklerinizi bozacaktır.
    </p>
    <p>
      <strong>HTML varlıklarını işlememek.</strong> <code>&amp;mdash;</code>,
      <code>&amp;nbsp;</code> ve <code>&amp;#x2014;</code> gibi varlıklar, kod blokları içinde
      olmadıkları sürece dönüşüm sırasında gerçek karakterlerine dönüştürülmelidir.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Tek dosyaları veya tüm grupları{" "}
      <a href="/tools/html-to-markdown">HTML'den Markdown'a dönüştürücü</a> ile dönüştürün.
      Çıktınızın girdinizle aynı şekilde işlendiğini doğrulamak için gidiş-dönüş{" "}
      <a href="/tools/markdown-to-html">Markdown'dan HTML'ye dönüştürücü</a> ile eşleştirin ve
      dönüştürücünün tutarlı bir girdi şekline sahip olması için dönüşümden önce kaynağı
      düzenlemek üzere <a href="/tools/html-formatter">HTML biçimlendiriciyi</a> kullanın.
    </p>
  </>
);