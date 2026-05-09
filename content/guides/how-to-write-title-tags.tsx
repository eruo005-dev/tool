import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      <code>&lt;title&gt;</code> etiketi, bir sayfadaki en yüksek kaldıraçlı SEO metnidir. SERP'de mavi tıklanabilir başlık olarak, tarayıcı sekmelerinde, ona geri dönen sosyal paylaşımlarda ve yer imlerinde görünür. Google'ın en eski doğrulanmış sıralama sinyallerinden biridir ve hala en güçlülerinden biridir. Ayrıca sıkı sınırları vardır: masaüstü Google'da yaklaşık 60 karakter veya kabaca 600 piksel; Google, başlığınızın içerikle eşleşmediğini düşündüğünde agresif bir şekilde yeniden yazar. Güçlü bir başlık, bir arayanın yazdığı tam sorguyu, değer vaat eden belirli bir değiştiriciyi ve zaman içinde hatırlanabilirlik oluşturmak için yeterli markayı birleştirir. Bu kılavuz, piksel ve karakter sınırlarını, marka yerleşimini, ayırıcı karakterleri, tıklanmaya değer değiştiricileri ve Google'ın başlıkları nasıl yeniden yazdığını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Uzunluk sınırları: 60 karakter, 600 piksel</h2>
    <p>
      Google, masaüstünde yaklaşık 600 piksel başlık metni görüntüler; bu, ortalama genişlikteki metnin kabaca 60 karakterine karşılık gelir. Mobil kırpma benzer veya biraz daha dardır. 50-60 karakter aralığı güvenli hedeftir. 60 karakterin üzerindeki başlıklar genellikle üç nokta ile kırpılır. 30 karakterin altındaki başlıklar, farklılaşmak için çok belirsiz olma eğilimindedir. 60'ın üzerindeki her karakter, Google'ın başlığınızı tam olarak göstereceğine dair bir bahistir ve bu bahis genellikle kaybeder.
    </p>
    <pre>{`Masaüstü Google:  ~600 px = ~60 karakter
Mobil Google:   ~600 px = ~60 karakter (dar işleme)
Güvenli hedef:     50-60 karakter
Minimum kullanışlı:  30 karakter`}</pre>

    <h2>Piksel genişliği, karakter sayısından daha önemlidir</h2>
    <p>
      Google, nerede kırpılacağına karar vermek için karakterleri değil piksel genişliğini kullanır. Geniş harfler (M, W, genel olarak büyük harfler) ve özel karakterler daha fazla piksel tüketir. Dar harfler (i, l, t, noktalama işaretleri) daha az tüketir. 63 karakterlik dar metne sığan bir başlık 600 pikseli aşabilir; 57 karakterlik geniş metne sığan bir başlık rahatça sığabilir. Piksel duyarlı denetleyiciler, Google'ın SERP'lerinde kullandığı Arial yazı tipine göre ölçüm yapar ve bu, yalnızca karakter sayısından daha doğru bir kırpma noktası verir.
    </p>

    <h2>Sorgu eşleşmesi ve tıklanabilirlik</h2>
    <p>
      Sorgu terimi başlıkta, ideal olarak başa yakın bir yerde görünmelidir. Google, SERP'de eşleşen terimleri kalın yapar ve bu da gözü çeker. Ancak yalnızca eşleşme yeterli değildir; başlık aynı zamanda arayan kişinin istediği bir şeyi vaat etmelidir. <a href="/learn/ctr">TO</a>'yu artıran değiştiriciler arasında sayılar (&ldquo;10 yol&rdquo;, &ldquo;5 dakika&rdquo;), yıl (&ldquo;2026 rehberi&rdquo;), özgüllük (&ldquo;serbest çalışanlar için&rdquo;, &ldquo;bütçe dostu&rdquo;), duygusal dil (&ldquo;nihai&rdquo;, &ldquo;kanıtlanmış&rdquo;) ve format vaatleri (&ldquo;kontrol listesi&rdquo;, &ldquo;şablon&rdquo;, &ldquo;hesap makinesi&rdquo;) bulunur. En akılda kalıcı olanı değil, hedef sorgu için kullanıcı amacına uyan değiştiriciyi seçin.
    </p>

    <h2>Marka yerleşimi</h2>
    <p>
      Çoğu site, marka adını her başlığın sonuna, sayfaya özgü içerikten ayırarak ekler: <code>Birincil Anahtar Kelime &#124; Marka</code>. Bu sıralama, benzersiz, sorguyla eşleşen içeriği ilk sıraya koyarken zaman içinde marka bilinirliği oluşturur. Güçlü markalar (Amazon, New York Times, Wikipedia) için marka önce gelebilir çünkü markanın kendisi tıklamaları yönlendirir. Daha küçük markalar için markanın önce gelmesi değerli karakterleri boşa harcar. Mantıklı bir varsayılan: içerik sayfalarında marka sonda, ana sayfada ve birincil kategori sayfalarında marka başta.
    </p>
    <pre>{`İçerik sayfası:    JSON Nasıl Biçimlendirilir: Yeni Başlayanlar Kılavuzu | Freetoolarea
Kategori sayfası:   Ücretsiz SEO Araçları - Başlık, Meta, Şema | Freetoolarea
Ana sayfa:       Freetoolarea - Geliştiriciler için Ücretsiz Çevrimiçi Araçlar`}</pre>

    <h2>Ayırıcı karakterler</h2>
    <p>
      Dikey çubuk <code>|</code>, kısa çizgi <code>-</code>, uzun çizgi <code>&mdash;</code> ve iki nokta üst üste
      <code>:</code> yaygın ayırıcılardır. Dikey çubuklar görsel olarak en belirgin olanıdır ve profesyonel SEO'da en yaygın olanıdır. Kısa çizgiler biraz daha yumuşak hissettirir. Uzun çizgiler daha editoryal bir ton iletir. İki nokta üst üste, başlık &ldquo;konu: açıklama&rdquo; modelini takip ettiğinde işe yarar. Tek bir başlık içinde ayırıcıları karıştırmaktan kaçının. Her ayırıcı karakter bütçenizde 1-2 karaktere mal olur, bu nedenle uzun başlıklarda tekrarlanan ayırıcılar hızla birikir.
    </p>

    <h2>Yeniden yazılan başlık etiketi kalıplarından kaçının</h2>
    <p>
      Google, kötü olduğunu düşündüğü başlıkları yeniden yazar: aşırı uzun, anahtar kelimelerle dolu, birçok sayfada aynı veya içerikle uyuşmayan. Yaygın tetikleyiciler: her başlığa marka adıyla başlayıp ardından genel kategori metni eklemek, birden çok parantez veya dikey çubuk eklemek, aynı anahtar kelimeyi iki veya üç kez tekrarlamak ve TAMAMI BÜYÜK HARF kullanmak. Google başlığınızı canlı ortamda yeniden yazarsa, bir <code>site:</code> araması yaparak hangi değiştirmeyi seçtiğini bulabilirsiniz. Orijinal başlığınızı Google'ın seçtiği şeye yaklaştırın; yeniden yazma genellikle durur.
    </p>

    <h2>Sayfa başına benzersiz başlıklar</h2>
    <p>
      Dizine eklenebilir her sayfanın benzersiz bir başlık etiketi olmalıdır. Yinelenen başlıklar (özellikle sayfalama, sıralama varyasyonları veya filtre kombinasyonlarında) Google'ın kafasını karıştırır ve tarama bütçesini boşa harcar. Filtre URL'lerini birleştirmek için kanonik etiketler kullanın ve kanonik sayfanın ayırt edici bir başlığa sahip olduğundan emin olun. Google Search Console, Kapsam raporunda yinelenen başlıkları işaretler.
    </p>

    <h2>Başlık-açıklama eşleştirmesi</h2>
    <p>
      Başlık ve <a href="/learn/meta-description">meta açıklama</a>, tek bir SERP snippet'i olarak birlikte çalışır. Başlık 600 piksel kalın mavi alan alır; açıklama 920 piksel daha küçük metin alır. İyi eşleştirilmiş başlıklar ve açıklamalar birbirini tekrar etmez: başlık birincil vaadi yapar, açıklama ayrıntıları ve bir HAE ekler. &ldquo;Ücretsiz Çevrimiçi SQL Biçimlendirici&rdquo; diyen bir başlık ve &ldquo;Ücretsiz çevrimiçi SQL biçimlendirici&hellip;&rdquo; ile başlayan bir açıklama 30 karakteri boşa harcar. Bunun yerine açıklamanın başlığı tamamlamasını sağlayın.
    </p>

    <h2>Search Console'da TO takibi</h2>
    <p>
      Google Search Console'un Performans raporu, sorgu ve sayfa başına TO'yu gösterir. 2-6. sıralarda yer alan ve ortalamanın altında TO'ya sahip sayfalar, başlık yeniden yazma adaylarıdır. Kıyaslamalar: 1. sıra ortalama yüzde 30-35 TO, 3. sıra yüzde 10-12, 10. sıra yüzde 2-3 civarındadır. Sayfanız yüzde 4 TO ile 3. sıradaysa, başlık yetersiz kalıyordur. Yeniden yazın, iki ila dört hafta bekleyin, karşılaştırın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>60 karakteri aşmak.</strong> Kırpma yaklaşık 600 pikselde gerçekleşir. Üç nokta ile biten başlıklar son karakterleri boşa harcar ve harekete geçirici mesajı gizler. Yalnızca karakter olarak değil, piksel olarak ölçün.
    </p>
    <p>
      <strong>İçerik sayfalarında marka adıyla başlamak.</strong> Markanın önce gelmesi, belirli konunun önde olması gereken içerik sayfalarında ilk 15-20 karakteri yakar.
    </p>
    <p>
      <strong>Anahtar kelime doldurmak.</strong> &ldquo;SQL Biçimlendirici, SQL Güzelleştirici, SQL Çevrimiçi Biçimlendir&rdquo; aynı terimi üç kez tekrarlar ve hem kullanıcılara hem de Google'a spam gibi okunur. Bir birincil anahtar kelime artı bir değiştirici yeterlidir.
    </p>
    <p>
      <strong>Birçok sayfada aynı başlıklar.</strong> Sayfalanmış arşivler, filtrelenmiş kategori sayfaları ve şablonlanmış ürün listeleri genellikle başlıkları paylaşır. Her biri benzersiz olmalı ve belirli sayfanın ne içerdiğini açıklamalıdır.
    </p>
    <p>
      <strong>İçerikle eşleşmeyen başlıklar yazmak.</strong> Google bunu algılar ve agresif bir şekilde yeniden yazar. Başlığınız &ldquo;hesap makinesi&rdquo; vaat ediyorsa, sayfada bir tane olmalıdır; aksi takdirde Google, başlığı sayfanın ne hakkında olduğunu düşündüğüyle değiştirecektir.
    </p>
    <p>
      <strong>TAMAMI BÜYÜK HARF kullanmak.</strong> Tamamı büyük harf başlıklar spam gibi görünür ve bazı araçlar veya tarayıcılar bunları yine de küçük harfe dönüştürür. Tutarlı bir şekilde başlık durumu veya cümle durumu kullanın.
    </p>
    <p>
      <strong>Emoji davranışını unutmak.</strong> Bazı emojiler SERP'lerde gösterilir, bazıları kaldırılır ve destek zamanla değişir. Emojilerden görsel farklılaşmaya güvenmeden önce idareli kullanın ve gerçek SERP görüntüsünü doğrulayın.
    </p>

    <h2>Rakamları kontrol edin</h2>
    <p>
      Piksel genişliğini, karakter sayısını ve kırpmayı{" "}
      <a href="/tools/title-tag-length-checker">başlık etiketi uzunluk denetleyicisi</a> ile kontrol edin.{" "}
      <a href="/tools/meta-description-length-checker">meta açıklama uzunluk denetleyicisi</a>
      {" "}ile eşleştirin, böylece başlık ve açıklama tek bir SERP snippet'i olarak birlikte çalışır ve değişikliği canlıya almadan önce işlenmiş kombinasyonu hem masaüstü hem de mobil formatlarda görmek için{" "}
      <a href="/tools/serp-snippet-preview">SERP snippet önizlemesini</a> kullanın.
    </p>
  </>
);