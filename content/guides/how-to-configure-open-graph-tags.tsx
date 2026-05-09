import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Open Graph, Facebook'un 2010 yılında tanıttığı, bir URL paylaşıldığında nasıl önizleneceğini kontrol eden meta veri protokolüdür. LinkedIn, Twitter (Twitter Kartları aracılığıyla), Slack, Discord, iMessage ve çoğu sohbet platformu Open Graph etiketlerini okur. Bunları doğru ayarlarsanız, bağlantınız cilalı bir kartla (büyük resim, çarpıcı başlık, odaklanmış açıklama) paylaşılır ve tıklama alır. Yanlış ayarlarsanız, bağlantınız düz bir URL olarak veya daha kötüsü, rastgele bir dekoratif öğeden kırpılmış uzatılmış bir küçük resimle paylaşılır. Etiketlerin kendisi basit <code>&lt;meta&gt;</code> öğeleridir, ancak resim boyutları, önbelleğe alma davranışı, geri dönüş zincirleri ve platforma özgü tuhaflıklar herkesi ilk seferde yakalar. Bu kılavuz, temel og:* özelliklerini, 1200x630 resim standardını, Twitter Kartı varyantlarını, hata ayıklama iş akışlarını ve gerçekten önemli olan etiketler ile sadece gürültü olanları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Her zaman ihtiyacınız olan dört etiket</h2>
    <p>
      Dört Open Graph etiketi, bağlantı paylaşma davranışının yüzde 95'ini kapsar:
      <code>og:title</code>, <code>og:description</code>, <code>og:image</code> ve
      <code>og:url</code>. Dizine eklenebilir her sayfada bu dördü de bulunmalıdır. Birçok platform, <code>og:title</code> eksik olduğunda HTML <code>&lt;title&gt;</code> etiketine ve <code>og:description</code> eksik olduğunda <a href="/learn/meta-description">meta açıklamaya</a> geri döner, ancak geri dönüşe güvenmek, arama sonuçlarının aksine sosyal paylaşım için uyarlanmış daha kısa, daha etkili metin yazma yeteneğinizi kaybetmeniz anlamına gelir.
    </p>
    <pre>{`<meta property="og:title" content="Ücretsiz JSON Biçimlendirici" />
<meta property="og:description" content="JSON'u anında biçimlendirin, doğrulayın ve küçültün. Giriş gerektirmez." />
<meta property="og:image" content="https://ornek.com/og/json-formatter.png" />
<meta property="og:url" content="https://ornek.com/araclar/json-formatter" />`}</pre>

    <h2>og:type ve og:site_name</h2>
    <p>
      <code>og:type</code>, platforma sayfanın ne tür bir içerik temsil ettiğini söyler:
      <code>website</code>, <code>article</code>, <code>video.movie</code>, <code>music.song</code>,
      <code>book</code> veya <code>profile</code>. Çoğu sayfa <code>website</code> kullanır;
      içerik odaklı sayfalar, <code>article:published_time</code> ve <code>article:author</code> gibi ek özellikleri etkinleştiren <code>article</code> kullanır. <code>og:site_name</code>, sitenizin insan tarafından okunabilir adıdır ve bazı platformlarda önizleme kartının üzerinde gösterilir. Her ikisi de dört temel etikete göre ikincildir ancak cilalılık katar.
    </p>

    <h2>og:image boyutları ve biçimi</h2>
    <p>
      Önerilen <code>og:image</code> boyutu 1200 piksel x 630 piksel, en boy oranı 1.91:1'dir. Bu, Facebook, LinkedIn, Slack ve Twitter'ın (summary_large_image kullanırken) rahatça işlediği boyuttur. Desteklenen minimum boyut 600 x 315 pikseldir. Bundan küçük resimler, kahraman kartı yerine başlığın yanında küçük resim olarak gösterilir. Maksimum dosya boyutu genellikle 8 MB'dir, ancak hızlı işleme için 500 KB'ın altında tutun. PNG ve JPEG'in her ikisi de desteklenir. GIF bazı platformlarda çalışır. WebP çoğu modern platformda çalışır ancak bazı eski kazıyıcı uygulamalarında başarısız olur.
    </p>
    <pre>{`Önerilen:     1200 x 630 piksel (1.91:1)
Minimum:       600 x 315 piksel
Maks. dosya:  ~8 MB (platform sınırı)
Hedef boyut:  < 500 KB (hızlı işleme için)
Biçimler:     PNG, JPEG (en güvenli); WebP (çoğu modern)`}</pre>

    <h2>Resim boyutlarını açıkça belirtme</h2>
    <p>
      Platformların resim indirilmeden önce önizlemeyi düzenlemesine yardımcı olmak için <code>og:image:width</code> ve <code>og:image:height</code> ekleyin. Bu önemlidir çünkü birçok kazıyıcının kısa bir zaman aşımı vardır: boyutları hızlıca belirleyemezlerse, resmi atlarlar ve yalnızca metin içeren bir karta geri dönerler.
    </p>
    <pre>{`<meta property="og:image" content="https://ornek.com/og/anasayfa.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="JSON doğrulama sonuçlarını gösteren gösterge paneli" />`}</pre>

    <h2>Twitter Kartı etiketleri</h2>
    <p>
      Twitter, hem Open Graph hem de Twitter'a özgü meta etiketlerini okur ve her ikisi de mevcut olduğunda Twitter'a özgü olanları tercih eder. İki ana kart türü <code>summary</code> (küçük kare resim) ve <code>summary_large_image</code> (Facebook'a benzer tam genişlikte 1.91:1 kart). <code>twitter:card</code>, isteğe bağlı olarak <code>twitter:site</code> (sitenizin Twitter kullanıcı adı) ve <code>twitter:creator</code> (makale yazarının kullanıcı adı) ekleyin. Zaten og:image ve og:description'ınız varsa, twitter:image ve twitter:description ile geçersiz kılmadığınız sürece Twitter bunları kullanır.
    </p>
    <pre>{`<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@siteniz" />
<meta name="twitter:creator" content="@yazar" />`}</pre>

    <h2>Mutlak URL'ler gereklidir</h2>
    <p>
      <code>og:image</code> ve <code>og:url</code> değerleri, göreli yollar değil, mutlak URL'ler olmalıdır. Kazıyıcılar bu URL'leri genellikle yönlendiren sayfanın bağlamı olmadan bağımsız olarak getirir, bu nedenle <code>/images/hero.png</code> gibi göreli bir yol, kazıyıcının kendi alan adına çözümlenir ve başarısız olur. Tüm değerler için <code>https://</code> kullanın, <code>http://</code> değil ve protokol-göreli <code>//ornek.com/hero.png</code> kullanmayın çünkü bazı eski kazıyıcılar bunu ayrıştıramaz.
    </p>

    <h2>Önbelleğe alma ve Facebook hata ayıklayıcısı</h2>
    <p>
      Facebook, LinkedIn ve çoğu platform, kazınmış meta verileri günler veya haftalar boyunca önbelleğe alır. og etiketlerini güncellerseniz ve URL'yi tekrar paylaşırsanız, önbellek süresi dolana kadar eski önizlemeyi görürsünüz. Facebook'un developers.facebook.com/tools/debug/ adresindeki Paylaşım Hata Ayıklayıcısı, Facebook'un tam olarak ne gördüğünü gösterir ve "Yeniden Kazı" ile yenilemeye zorlamanıza olanak tanır. LinkedIn'in benzer bir Gönderi Denetçisi aracı vardır. Twitter'ın Kart Doğrulayıcısı mevcuttu ancak kullanımdan kaldırıldı; Twitter yenilemesini zorlamak için URL'ye sahte bir sorgu parametresi ekleyin. Bir lansmanı duyurmadan önce her yeni sayfayı en az bir hata ayıklayıcıda test edin.
    </p>

    <h2>og:locale ile yerelleştirme</h2>
    <p>
      <code>og:locale</code>, dili ve bölgeyi belirtir (<code>en_US</code>, <code>fr_FR</code>, <code>pt_BR</code> gibi). Çok dilli siteler için <code>og:locale:alternate</code>, desteklenen ek yerel ayarları listeler. Yerelleştirilmiş paylaşım önizlemeleri Facebook dışında nadirdir, ancak etiketler, aşağı akış çeviri araçlarına ve erişilebilirlik yazılımlarına doğru dili işaret eder.
    </p>

    <h2>Makaleye özgü özellikler</h2>
    <p>
      <code>og:type</code> <code>article</code> olduğunda, <code>article:published_time</code> (ISO 8601 tarih-saat), <code>article:modified_time</code>, <code>article:author</code> (bir URL veya ad), <code>article:section</code> ve <code>article:tag</code> ekleyin. Bunlar, LinkedIn ve Facebook'taki bazı zengin paylaşımlarda görünür ve Pocket ile Instapaper gibi aşağı akış araçlarının içeriği kategorize etmesine yardımcı olur.
    </p>

    <h2>Dinamik og:image oluşturma</h2>
    <p>
      Birçok site, sunucusuz işlevler veya uç çalışanlar kullanarak og resimlerini anında oluşturur: Vercel OG, Cloudinary veya ev yapımı bir Puppeteer işi. Oluşturucu, sayfa başlığını ve bir şablonu alır ve markalı tipografiye sahip 1200x630 PNG üretir. Bu, her resmi manuel olarak tasarlamadan binlerce sayfa için iyi ölçeklenir. Çıktıyı agresif bir şekilde önbelleğe alın çünkü her sosyal paylaşım onu getirecektir. İyi bir resmin bayat önbelleği, viral bir an sırasında önbellek isabetsizliğinden daha iyidir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Göreli resim URL'leri.</strong> Kazıyıcılar göreli yolları çözümleyemez. og:image ve og:url için her zaman mutlak <code>https://</code> URL'leri kullanın.
    </p>
    <p>
      <strong>Yanlış en boy oranı.</strong> 1.91:1'e yakın olmayan resimler tahmin edilemez bir şekilde kırpılır&mdash;genellikle başlık metnini veya logonuzu keser. 1200x630 için tasarlayın ve platformların küçültmesine izin verin.
    </p>
    <p>
      <strong>og:url'yi unutmak.</strong> og:url olmadan, bazı platformlar kullanıcının yapıştırdığı URL'yi kullanır; bu URL, paylaşım başına değişen UTM parametreleri veya izleme kimlikleri içerebilir. og:url'yi <a href="/learn/canonical-url">kurallı URL'ye</a> ayarlayın.
    </p>
    <p>
      <strong>Hata ayıklayıcıda test etmemek.</strong> CMS önizlemeleri gerçek kazıyıcılarla eşleşmez. Lansmandan önce her zaman Facebook Paylaşım Hata Ayıklayıcısı ve en az iki platformda gerçek bir paylaşımla test edin.
    </p>
    <p>
      <strong>Güncellemelerden sonra önbellek sorunları.</strong> Platformlar günlerce önbelleğe alır. Belirli bir URL için önbelleği güncellemek üzere Facebook Hata Ayıklayıcısı'nın zorla yenileme düğmesini kullanın.
    </p>
    <p>
      <strong>og resminde çok küçük metin.</strong> Resim mobilde küçük boyutlarda işlenir. Kaynakta 40 pikselden kısa olan başlıklar genellikle telefonda okunamaz hale gelir. Gerçek işleme boyutunda tasarlayın.
    </p>
    <p>
      <strong>property ve name niteliklerini karıştırmak.</strong> <code>og:*</code> etiketleri <code>property=</code> kullanır; <code>twitter:*</code> etiketleri <code>name=</code> kullanır. Bunları karıştırırsanız, bazı kazıyıcılar etiketleri tamamen yok sayar.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Saniyeler içinde eksiksiz bir og etiket seti oluşturun:{" "}
      <a href="/tools/open-graph-generator">Open Graph oluşturucu</a>. Daha geniş baş etiketleri seti (karakter seti, görüntü alanı, kurallı) için <a href="/tools/meta-tag-generator">meta etiket oluşturucu</a> ve aramada zengin snippet'lerin yanı sıra sosyal medyada cilalı kartların kilidini açan <a href="/learn/json-ld">JSON-LD</a> eklemek için <a href="/tools/schema-markup-generator">şema işaretleme oluşturucu</a> ile eşleştirin.
    </p>
  </>
);