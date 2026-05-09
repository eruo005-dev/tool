import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Görselleri web için yeniden boyutlandırmak, çoğu sitenin asla tamamlayamadığı en yüksek kaldıraçlı performans iyileştirmesidir. 600&nbsp;px'lik bir karta yerleştirilen 4000&nbsp;&times;&nbsp;3000 piksel bir telefon fotoğrafı, bant genişliğini boşa harcar, mobil veriyi tüketir ve En Büyük İçerikli Boya puanınızı düşürür. Çözüm, tarayıcının gerçekte boyadığı boyuta yakın pikseller göndermektir, genellikle retina ekranlar için 2x tampon ile. Bunu doğru yapmak, gerçek piksel boyutlarını seçmek, cihaz piksel oranını anlamak ve küçültmenin ne zaman yeterli olduğunu, ne zaman kırpmanız gerektiğini bilmek anlamına gelir. Bu kılavuz, her kararı ve kalite ile dosya boyutu arasındaki ödünleşimleri adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Kaynaktan değil, boyanmış boyuttan başlayın</h2>
    <p>
      Sayfayı bir tarayıcıda açın, görseli inceleyin ve CSS'de işlenen genişliğini piksel cinsinden not edin. Bu sayı &mdash; kaynak dosyanın gerçek boyutu değil &mdash; her yeniden boyutlandırma kararı için temel oluşturur. 1200&nbsp;px genişliğinde boyanmış bir kahraman görseli, 4800&nbsp;px'lik bir kaynak göndermemeli ve 96&nbsp;px'lik bir avatarın 1080p portre olması için hiçbir sebep yoktur.
    </p>
    <p>
      Boyanmış boyutu öğrendikten sonra bir hedef seçersiniz. Retina olmayan için hedef, boyanmış boyuta eşittir. Retina desteği için iki katına çıkarın. 3x cihazlar (üst düzey telefonlar) için, yalnızca keskin detayların önemli olduğu görsellerde üç katına çıkarın.
    </p>

    <h2>Piksel boyutları ve dosya boyutu</h2>
    <p>
      Piksel boyutları (genişlik ve yükseklik) keskinliği kontrol eder. Dosya boyutu (KB), görselin ne kadar hızlı indirileceğini kontrol eder. İlişkilidirler ancak aynı ayar değildirler. Bir fotoğrafın boyutlarını yarıya indirmek, dosya boyutunu kabaca dörtte birine düşürür çünkü pikseller 2B bir ızgaradır. Kalite kaydırıcısını yarıya indirmek (JPEG 90 &rarr; 45) de baytları küçültür ancak boyutları değiştirmez, netlikten ödün vererek hız kazandırır.
    </p>
    <p>
      Önce yeniden boyutlandırın, sonra sıkıştırın. Yeniden boyutlandırma, ihtiyacınız olmayan verileri atar; sıkıştırma, belki de ihtiyacınız olan verileri atar.
    </p>

    <h2>Cihaz piksel oranı ve 2x kuralı</h2>
    <p>
      CSS pikseli ile cihaz pikseli aynı şey değildir. Cihaz piksel oranı (DPR) 2 veya 3 olan modern bir telefon, her CSS pikseli için birden çok donanım pikseli boyar. Görsel öğeniz CSS'de <code>width: 400px</code> ise ve kullanıcının DPR&nbsp;2'si varsa, tarayıcı 800 donanım pikseline kadar ayrıntı gösterebilir. 400&nbsp;px'lik bir kaynak gönderirseniz yumuşak görünür; 800&nbsp;px gönderirseniz net görünür.
    </p>
    <p>
      Pragmatik kural: her zaman 2x boyanmış boyutta dışa aktarın ve yalnızca müşterilerin yakınlaştıracağı kritik kahraman görselleri için 3x ile uğraşın.
    </p>

    <h2>srcset ile duyarlı boyutlandırma</h2>
    <p>
      Tek bir boyut seçmek yerine, <code>srcset</code> özelliği bir menü sunmanıza ve tarayıcının seçmesine izin verir. Tipik bir ürün görseli 400&nbsp;px, 800&nbsp;px ve 1200&nbsp;px genişliklerinde gönderilebilir.
    </p>
    <pre>{`<img
  src="/img/product-800.jpg"
  srcset="/img/product-400.jpg 400w,
          /img/product-800.jpg 800w,
          /img/product-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 600px"
  alt="Kırmızı deri cüzdan, önden görünüm"
/>`}</pre>
    <p>
      <code>sizes</code> özelliği, tarayıcıya görselin ne kadar büyük işleneceğini söyler, böylece CSS henüz yüklenmemişken doğru kaynağı seçebilir.
    </p>

    <h2>Küçültme ve kırpma</h2>
    <p>
      Küçültme, tüm çerçeveyi daha küçük bir boyutta korur; kırpma, kompozisyonu yeniden şekillendirmek veya sıkılaştırmak için kenarları atar. En boy oranı zaten doğru olduğunda ve yalnızca daha az piksele ihtiyacınız olduğunda küçültmeyi kullanın. Konu boş alanda kaybolduğunda veya bir düzen belirli bir oran gerektirdiğinde &mdash; kare karolar, 16:9 kahraman banner'ları veya 4:5 Instagram besleme gönderileri gibi &mdash; kırpmayı kullanın.
    </p>
    <p>
      Bunları karıştırmak yaygındır: önce doğru orana kırpın, ardından hedef genişliğe küçültün. Önce küçültmek, atacağınız pikselleri yeniden boyutlandırmak için CPU'yu boşa harcar.
    </p>

    <h2>En boy oranı kilitleri</h2>
    <p>
      Çoğu yeniden boyutlandırma aracı varsayılan olarak &ldquo;oranları sınırla&rdquo; seçeneğini kullanır &mdash; bir boyutu değiştirin, diğeri de onu takip eder. Bunu yalnızca kasıtlı olarak germek istediğinizde (neredeyse hiç) veya bir tuvali sabit bir orana doldururken devre dışı bırakın. Kazara kilidin açılmasıyla %8 gerilmiş bir yüz, doğal olmayan ve belirgindir.
    </p>
    <p>
      Uyumsuz bir kaynaktan sabit bir çıktı oranına ihtiyacınız varsa, doğru akış şudur: tuvali ayarlayın, görseli içine yerleştirin, kalan alanı düz bir arka plan veya bulanık uzantı ile doldurun.
    </p>

    <h2>Kalite ve boyut ödünleşimleri</h2>
    <p>
      JPEG kalite ayarları doğrusal değildir. 100'den 90'a düşüş algılanamaz ve baytların %40&ndash;60'ını kurtarır. 90'dan 75'e düşüş, fotoğraflarda neredeyse hiç görünür maliyet olmadan %30 daha kurtarır. 60'ın altında, özellikle gökyüzü ve gradyanlarda bloklanma ve renk bantlaşması görmeye başlarsınız.
    </p>
    <ul>
      <li><strong>Kahraman fotoğrafçılığı:</strong> JPEG 80&ndash;85 veya WebP 80.</li>
      <li><strong>Küçük resimler ve liste karoları:</strong> JPEG 70&ndash;75 veya WebP 70.</li>
      <li><strong>UI ekran görüntüleri ve diyagramlar:</strong> PNG veya WebP kayıpsız.</li>
      <li><strong>Logolar ve düz illüstrasyonlar:</strong> Kaynağınız varsa SVG, aksi halde PNG.</li>
    </ul>

    <h2>Biçim, ayarlardan daha önemlidir</h2>
    <p>
      Bayt başına en büyük kalite kazancı genellikle doğru biçimi seçmektir. WebP, eşdeğer kalitede JPEG'den %25&ndash;35 daha küçüktür. AVIF, WebP'den %20&ndash;30 daha küçüktür ancak yavaş kodlanır. Modern tarayıcılardaki fotoğraflar için, JPEG yedeklemesiyle WebP gönderin; az renkli grafikler için PNG'de kalın veya SVG'ye geçin.
    </p>
    <p>
      Şeffaf logolar için PNG'yi JPEG'e dönüştürmeyin &mdash; etraflarında beyaz bir kutu elde edersiniz. &ldquo;Kaliteyi yükseltmek&rdquo; için JPEG'i PNG'ye dönüştürmeyin; JPEG yapaylıklarını geri alamazsınız ve PNG çok büyük olur.
    </p>

    <h2>Yaygın ekran ve dışa aktarma ön ayarları</h2>
    <p>
      Aklınızda tutmanız gereken kullanışlı başlangıç boyutları:
    </p>
    <ul>
      <li><strong>Blog kahramanı:</strong> 1200&nbsp;&times;&nbsp;630 (ayrıca Open Graph önizleme varsayılanı).</li>
      <li><strong>Ürün ızgarası karosu:</strong> 2x kaynakta 600&nbsp;&times;&nbsp;600.</li>
      <li><strong>Avatar:</strong> 80&ndash;160&nbsp;px boyanmış, bu nedenle 160&ndash;320&nbsp;px kaynak.</li>
      <li><strong>Satır içi makale görseli:</strong> 720&nbsp;px boyanmış, 1440&nbsp;px kaynak.</li>
      <li><strong>Masaüstünde tam kanama kahraman:</strong> 4K desteği için 1920&nbsp;&times;&nbsp;1080 veya 2560&nbsp;&times;&nbsp;1440.</li>
    </ul>

    <h2>Toplu yeniden boyutlandırma iş akışı</h2>
    <p>
      Ürün katalogları ve makale grupları için maksimum bir genişlik belirleyin ve aracın daha büyük olanları küçültmesine izin verirken daha küçük dosyaları olduğu gibi bırakın. Tipik bir kural &ldquo;1600&nbsp;px'den geniş görsel yok, JPEG 82&rdquo;dir. Bunu tüm klasör üzerinde çalıştırın ve iyi, daha küçük varlıklara dokunmadan dokunulmamış bir fotoğraf kitaplığındaki baytların %60&ndash;80'ini kesersiniz.
    </p>
    <p>
      Orijinalleri her zaman saklayın. Yeniden boyutlandırılmış kopyalar türevdir; onları kaybederseniz, her zaman ana dosyalardan yeniden oluşturabilirsiniz.
    </p>

    <h2>Sanat yönlendirmesi için picture öğesi</h2>
    <p>
      Farklı kesme noktalarında temelde farklı bir kırpma istediğinizde (masaüstünde geniş kahraman, mobilde dar portre) srcset yeterli olmadığında <code>&lt;picture&gt;</code> öğesini kullanın:
    </p>
    <pre>{`<picture>
  <source media="(max-width: 600px)"
          srcset="/img/hero-portrait.jpg">
  <source media="(min-width: 601px)"
          srcset="/img/hero-landscape.jpg">
  <img src="/img/hero-landscape.jpg"
       alt="Zirvedeki ekip">
</picture>`}</pre>
    <p>
      <code>&lt;picture&gt;</code> öğesi, kesme noktası başına aynı görselin farklı boyutlarını değil, gerçekten farklı görseller sunmanıza olanak tanır.
    </p>

    <h2>Tembel yükleme doğru şekilde</h2>
    <p>
      <code>loading=&quot;lazy&quot;</code> özelliği, ekran dışı görselleri kaydırma görünümüne gelene kadar erteler. Bu neredeyse her zaman iyi bir fikirdir &mdash; <a href="/learn/lcp">LCP</a> hedefinize ulaşmak için hevesle yüklenmesi gereken ekran üstü kahraman görseli hariç.
    </p>
    <pre>{`<!-- Ekran üstü -->
<img src="/hero.jpg" fetchpriority="high" alt="...">

<!-- Ekran altı -->
<img src="/below-fold.jpg" loading="lazy" alt="...">`}</pre>
    <p>
      LCP görselindeki <code>fetchpriority=&quot;high&quot;</code> ipucu en yeni araçtır; modern tarayıcılar, bu indirmeyi diğer sayfa varlıklarına göre önceliklendirmek için kullanır.
    </p>

    <h2>Yeniden örnekleme algoritmaları ve neden önemlidir</h2>
    <p>
      Bir araç bir görseli küçülttüğünde, her çıktı pikselinin bir kaynak piksel bölgesinden ne olması gerektiğini hesaplaması gerekir. Farklı algoritmalar farklı sonuçlar verir:
    </p>
    <ul>
      <li><strong>En yakın komşu:</strong> en yakın kaynak pikselini seçer. Hızlıdır ancak pürüzlü, pikselli çıktı üretir. Piksel sanatı dışında kaçının.</li>
      <li><strong>Çift doğrusal:</strong> en yakın dört pikselin ortalamasını alır. Hızlıdır, küçük küçültmeler için iyidir, büyüklerde biraz bulanıktır.</li>
      <li><strong>Çift kübik:</strong> daha yumuşak bir eğri ile 4&nbsp;&times;&nbsp;4'lük bir komşuluğu örnekler. Çoğu düzenleyicide varsayılandır; hız ve kalite arasında iyi bir denge.</li>
      <li><strong>Lanczos:</strong> 8&nbsp;&times;&nbsp;8'lik bir pencere üzerinde sinc tabanlı bir filtre kullanır. Önemli küçültmeler için en iyi görünüme sahiptir ancak daha yavaştır ve hafifçe halkalanma yapabilir.</li>
    </ul>
    <p>
      Web iş akışları için çift kübik veya Lanczos doğru varsayılandır. Ucuz araçlar bazen çift doğrusal veya daha kötüsünü varsayılan olarak kullanır; küçültmeleriniz yumuşak veya pürüzlü görünüyorsa, hangi algoritmanın kullanıldığını kontrol edin.
    </p>

    <h2>Büyütme: dürüst cevap</h2>
    <p>
      Olmayan ayrıntıyı ekleyemezsiniz. Klasik büyütücüler (çift kübik, Lanczos) yalnızca mevcut pikselleri daha büyük bir ızgaraya yayarak bulanık bir sonuç üretir. Yapay zeka büyütücüler (ESRGAN, Topaz, Nvidia'nın araçları), eğitim verilerine dayanarak makul ayrıntılar hayal eder, bu etkileyici görünebilir ancak kaynakta olmayan belirli öğeler de icat eder.
    </p>
    <p>
      Kural: her zaman sahip olduğunuz en yüksek çözünürlüklü kaynaktan başlayın. Baskı için bir web JPEG'ini asla büyütmeyin. Kesinlikle yapmanız gerekiyorsa, kritik olmayan kullanımlar için 2&times;'te yapay zeka büyütme kabul edilebilir; 4&times;'te belirgin <a href="/learn/hallucination">halüsinasyon</a> yapaylıkları göstermeye başlar.
    </p>

    <h2>CDN tarafı yeniden boyutlandırma</h2>
    <p>
      Her boyut varyantını derleme zamanında oluşturmak yerine, modern CDN'ler (Cloudflare Images, Imgix, Cloudinary, Vercel Image Optimization) tek bir yüksek çözünürlüklü kaynaktan anında yeniden boyutlandırır. Bir ana dosya yüklersiniz, CDN her istek için doğru boyutu sunar.
    </p>
    <p>
      Ödünleşim: ilk istek yavaştır çünkü CDN varyantı hesaplar, sonraki istekler önbelleğe alınır. Maliyetler, sunulan benzersiz varyantlarla ölçeklenir. İçerik siteleri için bu, önceden oluşturulmuş bir boyut merdiveni sürdürmekten genellikle daha ucuz ve daha basittir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Her sitenin en az bir kez yaptığı hata: &ldquo;tarayıcı onu küçültecek&rdquo; diyerek 20&nbsp;MB'lık bir kamera RAW çıktısını doğrudan CMS'ye yüklemek. Tarayıcı küçültür, ancak her baytı hücresel ağ üzerinden indirdikten sonra. Diğer klasikler: en boy oranının kilidini açmak ve yüzleri germek, bir JPEG'i büyütmek (piksel icat edemezsiniz, yalnızca bulanıklık icat edersiniz) ve fotoğraflar için &ldquo;kaliteyi korumak&rdquo; amacıyla PNG olarak kaydetmek &mdash; PNG kayıpsızdır ancak fotoğraflar için JPEG'den 4&ndash;8&times; daha büyüktür. Ayrıca, düşük kalitede yeniden örnekleyen araçlara dikkat edin; hızlı bir en yakın komşu küçültme, çift kübik veya Lanczos'un pürüzsüz olacağı yerde pürüzlü kenarlar üretir.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Tam piksel boyutlarını ayarlamak, çıktıyı önizlemek ve tek tıklamayla dışa aktarmak için bir dosyayı <a href="/tools/image-resizer">görsel yeniden boyutlandırıcımıza</a> bırakın. Sonraki sıkıştırma adımı için <a href="/tools/image-compressor">görsel sıkıştırıcı</a>, boyutlara dokunmadan kalite ödünleşimlerini yönetir. Ve kompozisyonu yalnızca boyuttan ziyade değiştirmeniz gerektiğinde, <a href="/tools/image-cropper">görsel kırpıcı</a> bir oranı kilitlemenize ve konuyu çerçevelemenize olanak tanır.
    </p>
  </>
);