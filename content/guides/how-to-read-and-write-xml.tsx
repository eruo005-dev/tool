import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      XML, 30 yıllık yapılandırılmış verinin dedesidir — ayrıntılı,
      katı ve hâlâ beklemediğiniz her yerde karşınıza çıkar: RSS beslemeleri,
      SOAP API'leri, SVG görüntüleri, Office dosya biçimleri (.docx, .xlsx),
      Android düzenleri, Maven derlemeleri, site haritaları ve kurumsal veri
      alışverişi. JSON web'i kazandı, ancak XML kurumsal dünyayı kazandı. Bu
      kılavuz XML sözdizimini (öğeler, nitelikler, ad alanları),
      XML'in JSON'a kıyasla ne zaman doğru seçim olduğunu, nasıl güvenli bir
      şekilde ayrıştırılıp oluşturulacağını (varlık kaçışı, enjeksiyon riskleri),
      şemaları (DTD, XSD, Relax NG), XPath ve XSLT'yi ve deneyimli
      geliştiricileri bile zorlayan tuzakları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>XML temelleri — sözdizimi kuralları</h2>
    <p>
      Her XML belgesinin tek bir kök öğeye ihtiyacı vardır. Etiketler
      düzgün bir şekilde iç içe geçmelidir. Nitelikler tırnak içine alınır.
      Büyük/küçük harf duyarlılığı önemlidir.
    </p>
    <p>
      <strong>Minimum geçerli XML:</strong>
    </p>
    <p>
      <code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</code>
      <br />
      <code>&lt;book id=&quot;42&quot;&gt;</code>
      <br />
      &nbsp;&nbsp;<code>&lt;title&gt;Dune&lt;/title&gt;</code>
      <br />
      &nbsp;&nbsp;<code>&lt;author&gt;Frank Herbert&lt;/author&gt;</code>
      <br />
      <code>&lt;/book&gt;</code>
    </p>
    <p>
      <strong>Öğeler ve nitelikler:</strong> öğeler kutulardır
      (<code>&lt;title&gt;Dune&lt;/title&gt;</code>); nitelikler onları
      tanımlar (<code>id=&quot;42&quot;</code>). İçerik için öğeleri,
      meta veriler için nitelikleri kullanın. İşaretleme içerebilecek veya
      yapıya ihtiyaç duyan içerik öğelere gider.
    </p>
    <p>
      <strong>Kendiliğinden kapanan:</strong> boş öğeler{" "}
      <code>&lt;br/&gt;</code> veya <code>&lt;br&gt;&lt;/br&gt;</code> kullanır.
      Her ikisi de geçerlidir.
    </p>

    <h2>XML vs JSON — hangisi ne zaman kazanır</h2>
    <p>
      <strong>JSON şunlar için kazanır:</strong> web API'leri, JavaScript
      tabanlı iş akışları, basit veri alışverişi, günümüzde geliştiriciye
      yönelik her şey. Daha hafif, yerel olarak ayrıştırılabilir, çaba
      harcamadan insan tarafından okunabilir.
    </p>
    <p>
      <strong>XML şunlar için kazanır:</strong> belge odaklı biçimler (karma
      içeriğin önemli olduğu yerler — satır içi etiketlerle metin), sıkı
      doğrulamalı şemalar (düzenlenmiş endüstriler), mevcut kurumsal
      entegrasyonlar (SOAP, SAP, IBM, bankacılık), bunu gerektiren araçlar
      (Office Open XML, Android düzenleri, SVG).
    </p>
    <p>
      <strong>XML'in JSON'da olmayan özellikleri:</strong> ad alanları
      (birden çok kaynaktan gelen verileri anahtar çakışması olmadan birleştirme),
      yorumlar, karma içerik (satır içi metin + öğeler), sıkı
      şemalar (XSD), öğelerden farklı nitelikler, XSLT
      dönüşümleri, XPath sorguları.
    </p>
    <p>
      <strong>JSON'da XML'de olmayan özellikler:</strong> dizi
      sözdizimi, yerel sayı/boolean türleri, kısalık, her modern dilde
      kitaplık olmadan evrensel destek.
    </p>

    <h2>Ad alanları — çoğu insanın nefret ettiği özellik</h2>
    <p>
      Ad alanları, farklı kaynaklardan XML karıştırdığınızda çakışmayı
      önler. HTML'deki bir <code>&lt;title&gt;</code> ile SVG'deki
      <code>&lt;title&gt;</code> farklı anlama gelir.
    </p>
    <p>
      <strong>Bildirim:</strong>{" "}
      <code>&lt;root xmlns:svg=&quot;http://www.w3.org/2000/svg&quot;&gt;</code>
    </p>
    <p>
      <strong>Kullanım:</strong> öğe adlarını önek olarak ekleyin:{" "}
      <code>&lt;svg:circle r=&quot;10&quot;/&gt;</code>.
    </p>
    <p>
      Ad alanları URI'dir ancak bunlar yalnızca tanımlayıcılardır — URL'nin
      çözümlenmesi gerekmez. Çoğu geliştirici ad alanlarını belgelerden
      kopyalar ve bir daha onları düşünmez.
    </p>

    <h2>Kaçış — 1 numaralı hata kaynağı</h2>
    <p>
      XML'de beş karakterin kaçış karakteri kullanması gerekir:
    </p>
    <p>
      <code>&lt;</code> → <code>&amp;lt;</code>
      <br />
      <code>&gt;</code> → <code>&amp;gt;</code>
      <br />
      <code>&amp;</code> → <code>&amp;amp;</code>
      <br />
      <code>&quot;</code> → <code>&amp;quot;</code> (nitelik değerlerinde)
      <br />
      <code>&apos;</code> → <code>&amp;apos;</code> (nitelik değerlerinde)
    </p>
    <p>
      <strong>CDATA bölümleri</strong> kaçış karakteri kullanmadan ham metin
      yerleştirmenizi sağlar:
    </p>
    <p>
      <code>&lt;![CDATA[buradaki herhangi bir &lt; veya &amp; karakteri gerçek anlamındadır]]&gt;</code>
    </p>
    <p>
      Kod parçacıkları, HTML içeriği veya önceden biçimlendirilmiş metin
      gömmek için harikadır. İç içe geçmesi gerekmez — yalnızca bloğu
      sarar.
    </p>

    <h2>XML şeması — yapıyı doğrulama</h2>
    <p>
      <strong>DTD (Belge Türü Tanımı):</strong> orijinal şema
      biçimi. Eski sözdizimi, sınırlı tür sistemi. Hâlâ HTML/SGML
      belge türlerinde görülür. Yeni DTD'ler yazmayın.
    </p>
    <p>
      <strong>XSD (XML Şema Tanımı):</strong> modern
      standart. Türleri (int, date, string kalıpları),
      numaralandırmaları, kardinaliteyi, kalıtımı destekler. Ayrıntılı ancak
      güçlüdür. Şemanın kendisi XML'dir.
    </p>
    <p>
      <strong>Relax NG:</strong> daha temiz şema sözdizimi, açık
      kaynak projelerde (DocBook) popülerdir. Kurumsal dünyada daha az
      yaygındır.
    </p>
    <p>
      <strong>Ne zaman doğrulama yapılmalı:</strong> girişte (hatalı
      biçimlendirilmiş verileri reddet) ve çıkışta (göndermeden önce hataları
      yakala). Şemalar çok büyürse seçici olarak doğrulayın — yüksek
      verimli bir boru hattındaki her mesajı doğrulamak performansı öldürür.
    </p>

    <h2>XML'i güvenli bir şekilde ayrıştırma</h2>
    <p>
      <strong>XXE saldırıları:</strong> XML dış varlık saldırıları. Bir
      saldırgan{" "}
      <code>&lt;!ENTITY xxe SYSTEM &quot;file:///etc/passwd&quot;&gt;</code>
      {" "}içeren XML gönderir ve ayrıştırıcınız bu dosyayı itaatkar bir şekilde
      okur. Ayrıştırıcınız varsayılan olarak dış varlıkları yüklüyorsa
      yıkıcıdır.
    </p>
    <p>
      <strong>Çözüm:</strong> XML ayrıştırıcınızda dış varlık
      çözümlemesini devre dışı bırakın. Her büyük ayrıştırıcının bir bayrağı
      vardır: Python'da <code>defusedxml</code>, Java'da{" "}
      <code>XMLInputFactory.setProperty(SUPPORT_DTD, false)</code>,
      Node'da <code>libxmljs</code> ile{" "}
      <code>noent: false</code>.
    </p>
    <p>
      <strong>Milyar kahkaha saldırısı:</strong> katlanarak büyüyen
      iç içe varlıklar. 10 seviye 10x genişleme = 10 milyar
      karakter. Saf ayrıştırıcıları çökertir. Modern ayrıştırıcılar çoğunlukla
      buna karşı koruma sağlar ancak kitaplığınızı kontrol edin.
    </p>
    <p>
      <strong>DOM vs SAX vs StAX:</strong>
    </p>
    <p>
      DOM tüm belgeyi belleğe yükler. Kolay, yavaş, büyük
      dosyalar için kötüdür.
    </p>
    <p>
      SAX olay odaklıdır — ayrıştırıcı akış yaparken geri çağrılarınızı
      çağırır. Hızlı, bellek açısından verimli, yazması daha zordur.
    </p>
    <p>
      StAX (çekme ayrıştırıcı) modern orta yoldur. İstediğiniz zaman
      olayları çekersiniz. Seçici işleme ile büyük dosyalar için iyidir.
    </p>

    <h2>XPath ve XSLT</h2>
    <p>
      <strong>XPath</strong> XML için bir sorgu dilidir. CSS
      seçicileri gibidir ancak daha güçlüdür. Örnekler:
    </p>
    <p>
      <code>/book/title</code> — doğrudan alt öğe yolu
      <br />
      <code>//title</code> — herhangi bir yerdeki herhangi bir başlık
      <br />
      <code>//book[@id=&apos;42&apos;]/title</code> — filtrelenmiş
      <br />
      <code>count(//book)</code> — işlev
    </p>
    <p>
      XPath çoğu dilde bulunur. Sorguların %80'ini karşılayan %20'yi
      öğrenin: yollar, nitelik filtreleri, text() düğümleri,
      position() filtreleri.
    </p>
    <p>
      <strong>XSLT</strong> XML'i diğer XML, HTML veya
      metne dönüştürür. Bildirimsel şablon dilidir. Güçlü ancak ezoteriktir —
      bir seçeneğiniz varsa, dönüşümler için bunun yerine normal bir dil
      kullanın.
    </p>

    <h2>Biçimlendirme ve girinti</h2>
    <p>
      XML boşluk kuralları incedir. Girinti genellikle öğe içeriğinde
      yok sayılır ancak nitelikler ve CDATA içinde korunur.
      Güzel yazdırıcılar tipik olarak 2 veya 4 boşluklu girinti
      kullanır.
    </p>
    <p>
      XML programlı olarak oluşturulduğunda (güzel yazdırma yok), genellikle
      dev bir satır olarak gelir. Biçimlendiriciler geliştiricilerin onu
      okumasına yardımcı olur. Tel biçiminin, biçimlendiricinin
      görüntülediğiyle eşleştiğini varsaymayın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Kaçış karakterini unutmak.</strong> Verideki ve işareti →
      ayrıştırma hatası. Verideki açılı parantez → ayrıştırma hatası.
      Kitaplığın serileştiricisini kullanın; dizeleri birleştirmeyin.
    </p>
    <p>
      <strong>Yanlış kodlama bildirimi.</strong> UTF-8 bildirimi yapmak
      ancak CP1252 yazmak (Windows'ta yaygın). ASCII 127'nin üzerindeki
      karakterler bozulur. Her zaman BOM olmadan UTF-8 olarak kaydedin.
    </p>
    <p>
      <strong>Sekmeleri ve boşlukları karıştırmak.</strong> XML'in
      kendisi umursamaz, ancak fark araçları ve insanlar umursar. Birini
      seçin.
    </p>
    <p>
      <strong>JSON yeterliyken XML kullanmak.</strong> Veriniz
      &ldquo;her biri alanlara sahip kayıtların listesi&rdquo; ise JSON
      kullanın. XML, ayrıntılılığını belge şeklindeki veya şema ağırlıklı
      sorunlarda haklı çıkarır.
    </p>
    <p>
      <strong>XML'i regex ile ayrıştırmak.</strong> Çalışmaz.
      XML düzenli bir dil değildir. Bir ayrıştırıcı kullanın.
    </p>
    <p>
      <strong>XXE güvenlik açıklarını açık bırakmak.</strong> Bazı
      dillerdeki varsayılan ayrıştırıcı ayarları tehlikelidir. Dış
      varlıkları açıkça devre dışı bırakın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      XML'i anında biçimlendirin ve doğrulayın{" "}
      <a href="/tools/xml-formatter">XML biçimlendirici</a> ile. Yük
      biçimlerini karşılaştırmak için{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile eşleştirin ve
      XML'iniz gerçekten HTML aromalı işaretleme olduğunda{" "}
      <a href="/tools/html-formatter">HTML biçimlendirici</a> ile kullanın.
    </p>
  </>
);