import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Alt metin, bir görselin kısa yazılı açıklamasıdır; ekran okuyucular bunu kör ve az gören kullanıcılara bildirir, tarayıcılar görsel yüklenemediğinde görüntüler ve arama motorları görsel içeriğinizi anlamak için kullanır. İyi bir alt metin spesifik, kısa ve görselin bulunduğu bağlama göre yazılır; kötü alt metin ise ya eksiktir, anahtar kelimelerle doludur ya da tuhaf bir şekilde gerçekçidir. Bunu doğru yapmak, çoğu web sitesinin yapabileceği en büyük erişilebilirlik iyileştirmesidir ve her sayfadaki her görsel bundan faydalandığı için etkisi katlanarak artar. Bu kılavuz, alt metnin amacını, ne zaman tanımlama ne zaman altyazı kullanılacağını, dekoratif görsellerin özel durumunu, uzunluk yönergelerini ve alt metnin SEO ile nasıl etkileşime girdiğini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Alt metni kimler okur</h2>
    <p>
      Alt metni tüketen dört gerçek kitle vardır, bir değil:
    </p>
    <ul>
      <li><strong>Ekran okuyucu kullanıcıları</strong> &mdash; orijinal ve en önemli kitle. Okuyucu, alt metni sayfanın okuma sırasının bir parçası olarak bildirir.</li>
      <li><strong>Yavaş veya bozuk bağlantıdaki kullanıcılar</strong> &mdash; bir görsel yüklenemediğinde, tarayıcı görselin olması gereken yerde alt metni gösterir.</li>
      <li><strong>Arama motorları</strong> &mdash; alt metin, Google'ın görsel içeriğini ve sayfa konusunu anlamak için kullandığı sinyallerden biridir.</li>
      <li><strong>Sesli asistanlar ve yapay zeka ajanları</strong> &mdash; bir sayfayı özetlerken, görselleri tanımlamak için büyük ölçüde alt metne güvenirler.</li>
    </ul>
    <p>
      İyi alt metin aynı anda dört kitleye de hizmet eder. Bir makine veya belirli bir kullanıcı grubu için yazmıyorsunuz; pikselleri göremeyen herkes için yazıyorsunuz.
    </p>

    <h2>Tanımlayın, altyazı yapmayın</h2>
    <p>
      Altyazı, gören okuyuculara gösterilen editoryal bir yorumdur: &ldquo;Kurucumuz Jay, 2026 lansman etkinliğinde.&rdquo; Alt metin ise işlevsel bir tanımlamadır: &ldquo;Mavi bir blazer ceket giymiş, arkasında mor bir pankart olan küçük bir sahnede mikrofon tutan bir adam.&rdquo;
    </p>
    <p>
      Test: Görsel kaybolursa, alt metin görselin sayfaya kattığı şeyi aktarabiliyor mu? Cevap evetse, iyi bir alt metindir. Alt metin sadece &ldquo;Jay lansmanda&rdquo; diyorsa ve bilgi değerini kaybediyorsanız, bu altyazı yapmaktır, tanımlama değil.
    </p>
    <p>
      Görsel gerçekten sadece altyazıyı gösteriyorsa, altyazıyı alt metin olarak tekrarlayabilirsiniz &mdash; ancak genellikle daha kapsamlı bir tanımlama daha iyidir.
    </p>

    <h2>Uzunluk: kısa ama çok kısa değil</h2>
    <p>
      Ekran okuyucular, alt metin uzadığında kısayol navigasyonu sunmayı bırakır; kullanıcılar uzun bir tanımlamayı atlayamaz. Pratik aralık 80 ila 150 karakterdir. Grafikler veya infografikler gibi içeriğin <em>bilginin kendisi</em> olduğu karmaşık görseller için daha uzun tanımlamalar (250 karaktere kadar) uygundur.
    </p>
    <p>
      Hedef: Ekran okuyucunun tek bir nefeste okuyacağı bir cümle. Daha fazlasına ihtiyacınız varsa, daha uzun bir metin alternatifinin (sayfada başka bir yerde bir paragraf veya bir <code>aria-describedby</code> referansı) alt metni doldurmaktan daha iyi olup olmadığını düşünün.
    </p>

    <h2>Dekoratif görseller: boş alt metin</h2>
    <p>
      Her görsel bilgi taşımaz. Dekoratif görseller &mdash; arka plan dokuları, tamamen estetik süslemeler, konsepti zaten adlandıran bir etiketin yanındaki emoji benzeri bir simge &mdash; açıkça boş bir alt özniteliğine sahip olmalıdır:
    </p>
    <pre>{`<img src="/decorative-swirl.png" alt="" />`}</pre>
    <p>
      Boş alt metin, ekran okuyuculara görseli tamamen atlamasını söyler. Alt özniteliğini atlamak farklıdır &mdash; okuyucu bunun yerine dosya adını bildirir ve bu neredeyse her zaman işe yaramaz. <strong>Boş olsa bile her zaman alt ekleyin.</strong>
    </p>
    <p>
      Bir navigasyonda &ldquo;Menü&rdquo;nün yanındaki simge: dekoratif (boş alt). Bir düğmenin tek içeriği olan bir simge: işlevsel (<code>alt=&quot;Menüyü aç&quot;</code>).
    </p>

    <h2>Bağlam, resimden daha önemlidir</h2>
    <p>
      Aynı görsel, nerede göründüğüne bağlı olarak farklı alt metin gerektirebilir. Bir ürün sayfasındaki kırmızı bir elbisenin fotoğrafı, ürünü tanımlayan alt metin gerektirir: &ldquo;Kısa kollu ve V yakalı kırmızı A kesim pamuklu elbise.&rdquo; Renk teorisi hakkındaki bir blog yazısındaki aynı fotoğraf şunu gerektirebilir: &ldquo;Soluk gri bir duvarın önünde doygun kırmızı bir elbise.&rdquo;
    </p>
    <p>
      Şunu sorun: Bu görsel <em>bu sayfaya, bu anda</em> ne katıyor? Bunun için yazın.
    </p>

    <h2>İşlevsel görseller: eylemi tanımlayın</h2>
    <p>
      Bağlantılar veya düğmeler içindeki görseller, pikselleri değil, hedefi veya eylemi tanımlar. Bağlantı bir büyüteç görseli <em>ise</em>, alt metin &ldquo;büyüteç simgesi&rdquo; değil &mdash; &ldquo;Ara&rdquo;dır.
    </p>
    <pre>{`<a href="/cart">
  <img src="/cart-icon.svg" alt="Alışveriş sepetini görüntüle" />
</a>`}</pre>
    <p>
      Burada pikselleri tanımlamak, ekran okuyucu kullanıcılarını kaybolmuş bırakan klasik bir hatadır.
    </p>

    <h2>Karmaşık görseller: grafikler, diyagramlar, infografikler</h2>
    <p>
      Bir veri grafiği 120 karakterde özetlenemez. İyi uygulama modeli:
    </p>
    <ul>
      <li>Grafiği adlandıran kısa alt: <code>alt=&quot;Çubuk grafik: aylık gelir 2025&quot;</code>.</li>
      <li>Yakınlarda daha uzun bir metin alternatifi &mdash; ya temel çıkarımı özetleyen görünür bir altyazı (&ldquo;Gelir yıllık bazda %18 arttı, Kasım ayında zirve yaptı&rdquo;) ya da <code>aria-describedby</code> ile bağlanmış gizli bir uzun tanımlama.</li>
      <li>Grafik birincil içerikse, altında bir veri tablosu ekran okuyucu kullanıcılarına her sayıya erişim sağlar.</li>
    </ul>

    <h2>Alt metin ve SEO</h2>
    <p>
      Google, alt metnin arama motorlarının &ldquo;görselin konusunu anlamasına&rdquo; yardımcı olduğunu kamuoyuyla paylaştı. İyi tanımlayıcı alt metin &mdash; erişilebilirlik için iyi olanla aynı tür &mdash; görsel arama ve sayfanın daha geniş sıralaması için iyidir.
    </p>
    <p>
      Anahtar kelime dolu alt metin (&ldquo;ucuz kırmızı elbise kırmızı elbise satın al çevrimiçi kırmızı elbise indirim&rdquo;) barizdir ve cezalandırılır. Önce bir insan için yazın ve SEO değerini bir yan ürün olarak elde edin.
    </p>

    <h2>&ldquo;Görseli&rdquo; ile başlamayın</h2>
    <p>
      Ekran okuyucular, alt metni okumadan önce zaten &ldquo;görsel&rdquo; bildirir. Alt metne &ldquo;görseli&rdquo; veya &ldquo;resmi&rdquo; ile başlamak &ldquo;görsel bir köpeğin görseli&rdquo; oluşturur &mdash; gereksiz ve amatörce. Sadece içeriği tanımlayın.
    </p>
    <p>
      İstisna: <em>Belirli bir tür görsel olduğu gerçeği</em> önemliyse &mdash; &ldquo;Denizde fırtına tablosu&rdquo; ile &ldquo;Denizde fırtına fotoğrafı&rdquo; arasında &mdash; ortamı adlandırın.
    </p>

    <h2>Görsellerdeki insanlar</h2>
    <p>
      Bağlam için neyin alakalı olduğunu tanımlayın. Bağlam beklediğinde bilinen kişileri adlandırın (&ldquo;Kurucu Jay Smith&rdquo;). Stok fotoğraf konuları veya isimsiz kişiler için, ırk, cinsiyet ve yaşı yalnızca konuyla ilgiliyse tanımlayın &mdash; işe alımda çeşitlilik hakkındaki bir özellik bundan faydalanır; genel bir blog başlığı faydalanmaz.
    </p>
    <p>
      Şüpheye düştüğünüzde, spekülasyon yapmadan görünür olanı tanımlamaya yönelin. &ldquo;Laboratuvar önlüklü gülümseyen bir kadın&rdquo;, &ldquo;mutlu bir bilim insanı&rdquo;ndan daha iyidir.
    </p>

    <h2>Alt metninizi test etme</h2>
    <p>
      İki hızlı kontrol:
    </p>
    <ol>
      <li><strong>Sayfayı görseller olmadan okuyun:</strong> içerik, yalnızca alt metne dayanarak hala anlamlı mı? Hayırsa, alt metinler yetersiz yazılmıştır.</li>
      <li><strong>Alt metni izole olarak okuyun:</strong> çevreleyen paragraf olmadan anlamlı mı? Yalnızca bağlam kurtarıyorsa, alt metin bu sayfa için iyidir ancak yeniden kullanılamaz.</li>
    </ol>

    <h2>Ekran görüntüsü için alt metin yazma</h2>
    <p>
      Yazılım, hata mesajları ve eğitimlerin ekran görüntüleri farklı alt metin işlemi gerektirir:
    </p>
    <ul>
      <li><strong>Hata mesajları:</strong> gerçek hata metnini yazıya dökün. Alt: &ldquo;&lsquo;Ağ bağlantısı kayboldu. Tekrar dene?&rsquo; yazan, Tekrar Dene ve İptal düğmeleri olan hata iletişim kutusu.&rdquo;</li>
      <li><strong>UI eğitimleri:</strong> her pikseli değil, eylemi veya konumu tanımlayın. Alt: &ldquo;&lsquo;Gizlilik&rsquo; seçeneği vurgulanmış Ayarlar menüsü.&rdquo;</li>
      <li><strong>Ekran görüntüsü olarak yakalanmış veri tabloları:</strong> ya verileri yanında erişilebilir HTML olarak sağlayın ya da alt metne üst düzey bir özet verin (&ldquo;Aylık gelir tablosu, Q4 zirvesi 48 bin $&rdquo;) ve tam verilere bağlantı verin.</li>
    </ul>

    <h2>Alt, başlık ve altyazı arasındaki fark</h2>
    <p>
      Sıklıkla karıştırılan üç öznitelik:
    </p>
    <ul>
      <li><strong><code>alt</code></strong>: ekran okuyucular tarafından bildirilir, görsel yüklenemezse gösterilir. Birincil erişilebilirlik özniteliği.</li>
      <li><strong><code>title</code></strong>: fare kullanıcıları için üzerine gelindiğinde araç ipucu metni. Ekran okuyucular bazen okur, bazen okumaz &mdash; tutarsız. Erişilebilirlik için ona güvenmeyin.</li>
      <li><strong><code>&lt;figcaption&gt;</code></strong>: bir <code>&lt;figure&gt;</code> içinde görselin altında görünür altyazı. Ekran okuyucular tarafından okunur ve gören kullanıcılar tarafından görülür.</li>
    </ul>
    <p>
      Pratik kural: her zaman <code>alt</code> ayarlayın. Görünür bir altyazı faydalı olduğunda <code>figcaption</code> kullanın. Belirli bir nedeniniz yoksa <code>title</code>'ı atlayın.
    </p>

    <h2>Animasyonlu GIF'ler ve video posterleri</h2>
    <p>
      GIF'ler için, ilk kareyi değil, eylemi tanımlayın. Köpeğin sonra ayağa kalkıp kuyruk salladığı bir GIF'te &ldquo;oturan köpek&rdquo; alt metni yanıltıcıdır. Daha iyisi: &ldquo;Bir köpek oturmaktan kalkar ve kuyruğunu sallar.&rdquo;
    </p>
    <p>
      Video <code>poster</code> görselleri için alt metin, video öğesinin <code>aria-label</code> değerini takip eder. Posterin kendisi genellikle ayrı bir alt metin gerektirmez çünkü ekran okuyucular video kontrolünü birincil öğe olarak ele alır.
    </p>

    <h2>Alt metnin yerelleştirilmesi</h2>
    <p>
      Alt metin içeriktir ve siteniz yerelleştirildiğinde çeviri gerektirir. İspanyolca sayfalarda İngilizce alt metin göndermeyin &mdash; İspanyolca ekran okuyucular, İngilizce kelimeleri İspanyolca fonetikle okur ve kullanıcıların kafasını karıştırır. Alt metin dizelerini, düğme etiketleri ve başlıklarla birlikte çeviri dosyalarınıza ekleyin.
    </p>
    <p>
      Kültürel bağlam da tanımlamaları değiştirebilir. Geleneksel bir yemek, bir jest veya bir dönüm noktasının fotoğrafı, görseli görmeden bir çevirmen için açık olmayan bağlamsal bir tanımlama gerektirebilir. Çevirmenlere yalnızca İngilizce alt metni değil, görseli de sağlayın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Görsel bilgi taşıdığında alt metni boş bırakmak ve taşımadığında alt metne anahtar kelimeler doldurmak. &ldquo;Görseli&rdquo; ile başlamak. Bir galerideki her görsel için aynı alt metni kullanmak (12 vesikalık fotoğrafta &ldquo;Ekibimiz&rdquo; &mdash; kişileri adlandırın veya her birini tanımlayın). İşlevsel bir simge için eylem yerine pikselleri tanımlamak. Okuyucunun Jay'in kim olduğu hakkında hiçbir fikri olmadığında alt metni altyazı olarak yazmak (&ldquo;Jay konferansta&rdquo;). Alt özniteliğini tamamen unutmak, bu da ekran okuyucuların dosya adını bildirmesine neden olur &mdash; <code>IMG_8472.jpg</code> kullanışlı değildir. Ve zor olduğu için karmaşık grafiklerde alt metni atlamak &mdash; çabaya değer.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/alt-text-helper">Alt metin yardımcımız</a>, herhangi bir görsel için kısa, tanımlayıcı alt metin önerir ve eksik alt metinler, yinelenen alt metinler ve anahtar kelime doldurma gibi yaygın sorunları işaretler. Daha geniş meta içerik geçişi için, bunu <a href="/tools/meta-description-length-checker">meta açıklama uzunluk denetleyicisi</a> ile eşleştirin. Ve ekran okuyucu akışı için alt metin ifadelerini basitleştirirken, <a href="/tools/readability-score-checker">okunabilirlik puanı denetleyicisi</a> cümlelerinizi basit tutar.
    </p>
  </>
);