import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Markdown tabloları ilk bakışta basit görünür&mdash;üç dikey çizgi ve bir tireli ayırıcı&mdash;ancak
      sütunları hizalamaya, hücre içeriğindeki dikey çizgileri kaçış karakteriyle kullanmaya veya bir tabloyu
      GitHub Flavored Markdown ile CommonMark arasında taşımaya kalktığınızda sorunlar ortaya çıkar. GitHub'da
      harika görünen bir tablo, statik site oluşturucuda bozulabilir; bir e-tablodan temizce kopyalanan bir tablo
      ise düzensiz dikey çizgiler ve eksik başlıklarla gelebilir. Ayrıca spesifikasyon, tabloları CommonMark
      seviyesinde standartlaştırmayı reddeder, bu da her işleyicinin onları biraz farklı uygulaması anlamına gelir.
      Sözdizimini bir kez doğru öğrenmek, README dosyaları, dokümantasyon siteleri ve blog yazılarında saatlerce
      süren manuel uğraşmayı önler. Bu kılavuz; dikey çizgi sözdizimi, başlık ayırıcıları, hizalama, özel
      karakterleri kaçış karakteriyle kullanma, GFM ile CommonMark arasındaki farklar ve mevcut verilerden geçerli
      tablolar oluşturmanın en hızlı yolunu kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Dikey çizgi ve tire iskeleti</h2>
    <p>
      Her Markdown tablosu üç satır türünden oluşur: bir başlık satırı, tirelerden oluşan bir ayırıcı satır
      ve bir veya daha fazla veri satırı. Baştaki ve sondaki dikey çizgiler çoğu işleyicide isteğe bağlıdır,
      ancak bunları her zaman eklemek, kaynağı okumayı kolaylaştırır ve bir hücre, işleyicinin anlamlı
      kabul ettiği bir karakterle başladığında ayrıştırıcı belirsizliğini azaltır.
    </p>
    <pre>{`| Sütun A | Sütun B | Sütun C |
| -------- | -------- | -------- |
| hücre 1  | hücre 2  | hücre 3  |
| hücre 4  | hücre 5  | hücre 6  |`}</pre>
    <p>
      Çoğu katı ayrıştırıcıda ayırıcı satırın her sütun için en az üç tireye ihtiyacı vardır, ancak
      GFM tek bir tireyi kabul eder. Kaynağın görsel olarak hizalanmasını istiyorsanız tireleri başlık
      genişliğine göre doldurun&mdash;işlenmiş çıktı her iki durumda da aynıdır.
    </p>

    <h2>İki nokta üst üste ile sütun hizalama</h2>
    <p>
      Hizalama, ayırıcı satırda iki nokta üst üsteleri nereye koyduğunuzla kontrol edilir. Soldaki iki nokta
      sola hizalı, sağdaki iki nokta sağa hizalı ve her iki taraftaki iki nokta ortalanmış anlamına gelir.
      Hiç iki nokta olmadığında çoğu işleyici varsayılan olarak sola hizalar, ancak bazıları bunun yerine
      işleyicinin CSS'sine saygı gösterir, bu nedenle hizalama önemli olduğunda her zaman açıkça belirtin.
    </p>
    <pre>{`| Sol      | Orta     | Sağ     |
| :------- | :------: | ------: |
| elma     | 1.50     | 12      |
| muz      | 0.75     | 6       |
| kiraz    | 3.25     | 120     |`}</pre>
    <p>
      Sağa hizalama, sayısal sütunlar için özellikle kullanışlıdır çünkü monospace işlenmiş kaynakta
      ondalık noktalarını görsel olarak hizalar, ancak nihai HTML çıktısı herhangi bir dolgu yerine bir CSS
      <code>text-align</code> kuralı kullanır.
    </p>

    <h2>GFM ve CommonMark karşılaştırması</h2>
    <p>
      CommonMark'ın temel spesifikasyonu tabloları hiç tanımlamaz. Tablolar, GitHub Flavored Markdown
      uzantısıdır ve daha sonra MultiMarkdown ve Pandoc gibi diğer lezzetler tarafından benimsenmiştir,
      ancak her uygulama küçük farklılıklar gösterir. GFM bir başlık satırı gerektirir, GFM ayırıcı satırı
      olmayan tabloları reddeder ve GFM hücreler içinde kalın ve kod gibi satır içi biçimlendirmeye izin verir
      ancak iç içe listeler veya paragraflar gibi blok öğelerini yasaklar. Pandoc, her biri farklı kurallara
      sahip boru tabloları, ızgara tabloları ve çok satırlı tabloları destekler. Şüpheye düştüğünüzde, GFM
      spesifikasyonuna göre yazın çünkü statik site oluşturucuları, dokümantasyon araçları ve sohbet
      platformları arasında en geniş çalışma zamanı desteğine sahiptir.
    </p>

    <h2>Hücreler içinde dikey çizgileri kaçış karakteriyle kullanma</h2>
    <p>
      Bir hücre içindeki ham bir dikey çizgi karakteri, bir sütun sınırı olarak yorumlanır ve tablonuzu
      sessizce bozar. Bunu bir ters eğik çizgi ile kaçış karakteriyle kullanın veya içerik kod benzeriyse
      değeri bir kod aralığına sarın. HTML varlıkları da işe yarar ancak kaynağı okumayı zorlaştırır.
    </p>
    <pre>{`| Komut             | Açıklama                |
| ----------------- | ----------------------- |
| \`ls | grep x\`    | x ile eşleşen dosyaları listele |
| a \\| b            | Gerçek dikey çizgi karakteri |
| \`cat a.txt\`      | Dosya içeriğini yazdır   |`}</pre>
    <p>
      Hücrenin tamamını ters tırnak içine almak en sağlam seçenektir çünkü işleyici bir kod aralığı
      içinde tablo sözdizimini ayrıştırmayı durdurur. Bu aynı zamanda işleyicinin onu yemeden gerçek
      bir ters eğik çizgi eklemenin tek yoludur.
    </p>

    <h2>Hücreler içinde satır içi biçimlendirme</h2>
    <p>
      GFM hücreleri satır içi biçimlendirmeyi kabul eder: <code>**</code> ile kalın, <code>_</code> ile
      italik, ters tırnaklarla satır içi kod, bağlantılar, resimler ve satır içi HTML. Başlıklar,
      alıntı blokları, listeler ve çok paragraflı metin gibi blok düzeyindeki öğelere bir hücre içinde
      izin verilmez. Bir hücre içinde bir listeye ihtiyacınız varsa, görsel satır sonları oluşturmak için
      <code>&lt;br&gt;</code> etiketlerini kullanın veya tamamen bir HTML <code>&lt;table&gt;</code>
      öğesine geçin.
    </p>

    <h2>Uzun içerik ve sarma ile başa çıkma</h2>
    <p>
      Markdown tabloları zarif bir şekilde sarmaz. Tek bir uzun hücre, sütunu daha geniş yapar ve dar
      görüntü alanlarında yatay kaydırmaya zorlar. İçeriğiniz yoğun metin içeriyorsa, bir tanım listesi
      veya <code>&lt;h3&gt;</code> başlıklarıyla bir dizi kısa alt bölüm halinde yeniden yapılandırmayı
      düşünün. Tablo referans tarzı verilerse, kaydırmayı kabul edin ve CSS'nizin tabloyu bir
      <code>overflow-x: auto</code> kabına sarmasını sağlayın, böylece mobil okuyucular sayfa düzenini
      bozmadan yatay olarak kaydırabilir.
    </p>

    <h2>E-tablolardan ve CSV'den tablo oluşturma</h2>
    <p>
      Excel, Google Sheets veya Numbers'dan doğrudan kopyalayıp yapıştırmak genellikle Markdown
      işleyicilerinin anlamadığı sekmeyle ayrılmış değerler üretir. TSV veya CSV'yi, virgülleri veya
      sekmeleri <code> | </code> ile değiştirerek ve bir başlık ayırıcı satırı ekleyerek dikey çizgiyle
      ayrılmış Markdown'a dönüştürün. Tırnak içindeki CSV alanlarındaki gömülü virgüllere dikkat
      edin&mdash;saf bir bul ve değiştir onları bozacaktır. Çoğu tablo oluşturucu bunu doğru şekilde
      işler, tırnakları kaldırır ve boşlukları tek adımda normalleştirir.
    </p>
    <pre>{`İsim,Rol,Başlangıç
Alice,Mühendis,2024-01-15
Bob,"Yönetici, Operasyon",2023-08-01

şuna dönüşür

| İsim  | Rol                | Başlangıç   |
| ----- | ------------------ | ----------- |
| Alice | Mühendis           | 2024-01-15  |
| Bob   | Yönetici, Operasyon | 2023-08-01  |`}</pre>

    <h2>Listeler ve alıntı blokları içinde tablolar</h2>
    <p>
      Bir liste öğesi veya alıntı bloğu içinde bir tabloyu iç içe yerleştirmek dikkatli girinti gerektirir.
      Çoğu GFM ayrıştırıcısı, tablonun liste öğesinin içeriğiyle aynı miktarda girintilenmesini gerektirir,
      bu genellikle iki veya dört boşluk anlamına gelir. Sekmeler ve boşlukları karıştırmak iç içe
      yerleştirmeyi bozacaktır. İşlemesini sağlayamazsanız, açık bir <code>&lt;table&gt;</code>
      kullanarak satır içi HTML'ye geri dönün&mdash;sonuç daha çirkin bir kaynak ancak kurşun geçirmez
      bir işlemedir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Ayırıcı satırın eksik olması.</strong> Başlığın hemen altında tireli satır olmadan, GFM
      içeriği bir paragraf olarak ele alır ve tüm dikey çizgileri metne dönüştürür. Tek satırlı bir
      tablo için bile her zaman ayırıcıyı ekleyin.
    </p>
    <p>
      <strong>Eşit olmayan sütun sayıları.</strong> Başlıkta dört sütun varsa ve bir veri satırında üç
      varsa, bazı işleyiciler fazla hücreyi sessizce atar, diğerleri düzensiz bir tablo oluşturur ve
      bazıları onu hiç ayrıştırmayı reddeder. Her satırdaki dikey çizgileri sayın.
    </p>
    <p>
      <strong>Hücre içeriğinde kaçış karakteri kullanılmamış dikey çizgiler.</strong> Bir hücre içindeki
      ham bir <code>|</code>, hücreyi erken sonlandırır ve sonraki her sütunu kaydırır. Ters eğik çizgi
      ile kaçış karakteri kullanın veya değeri ters tırnak içine alın.
    </p>
    <p>
      <strong>Hücrelere blok öğeleri koymaya çalışmak.</strong> Listeler, çok paragraflı içerik ve
      çitlenmiş kod blokları tablo hücrelerine ait değildir. Yumuşak satır sonları için
      <code>&lt;br&gt;</code> kullanın ve hücre içeriğini kısa tutun.
    </p>
    <p>
      <strong>Hizalamanın her yerde çalıştığını varsaymak.</strong> Ayırıcıdaki iki nokta sözdizimi
      yalnızca GFM'ye aittir. Katı CommonMark ayrıştırıcıları bunu yok sayar ve Sphinx gibi bazı
      dokümantasyon oluşturucuları bunun yerine kendi yönerge tabanlı tablo biçimlerini kullanır.
    </p>
    <p>
      <strong>E-tablo yazılımından körü körüne kopyalayıp yapıştırmak.</strong> Sekmeyle ayrılmış çıktı
      Markdown değildir. Tablo işlenmeden önce ayırıcıları dönüştürmeniz ve ayırıcı satırı eklemeniz
      gerekir.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Manuel dikey çizgi saymayı atlayın ve kaynak verilerinizden{" "}
      <a href="/tools/markdown-table-generator">markdown tablo oluşturucu</a> ile tablolar oluşturun.
      Tablonuzun tam olarak nasıl işleneceğini göndermeden önce önizlemek için{" "}
      <a href="/tools/markdown-to-html">markdown'dan HTML'ye dönüştürücü</a> ile eşleştirin ve mevcut
      HTML tablolarını eski sayfalardan temiz Markdown kaynağına çekmek için{" "}
      <a href="/tools/html-to-markdown">HTML'den Markdown'a dönüştürücü</a>'yü kullanın.
    </p>
  </>
);