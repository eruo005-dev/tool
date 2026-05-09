import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Yuvarlak köşeler modern tasarımın bir standardı haline geldi &mdash; kartlar, avatarlar, uygulama ikonları, ürün kutucukları. Çoğu zaman tarayıcı bunları tek bir CSS <code>border-radius</code> özelliği ile halleder, ancak bazen köşeleri doğrudan görüntü dosyasına işlemeniz gerekir: CSS desteğinin zayıf olduğu e-postalar için; PDF ve sunum dışa aktarımları için; stillendirilmiş bir ortam dışında oluşturulan küçük resimler için; ve dikdörtgen olmayan bir şeklin etrafında şeffaf köşelere ihtiyaç duyduğunuz her durum için. Bu kılavuz, köşeleri piksellere ne zaman işleyeceğinizi, ne zaman CSS olarak bırakacağınızı ve avatarlar, kartlar ve dairesel kırpmalar için doğru yarıçapı nasıl seçeceğinizi kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>CSS yarıçapı ve işlenmiş köşeler</h2>
    <p>
      HTML ve CSS'yi kontrol ediyorsanız, <code>border-radius</code> neredeyse her zaman doğru cevaptır. Tek satırlık bir koddur, çözünürlükten bağımsızdır ve görüntüyü yeniden dışa aktarmadan şekli değiştirebilirsiniz.
    </p>
    <pre>{`.card img {
  border-radius: 12px;
  overflow: hidden;
}`}</pre>
    <p>
      İşlenmiş köşelere ihtiyacınız olduğunda, tüketen ortam CSS'yi kaldırıyordur (Outlook gibi e-posta istemcileri), bir tarayıcı dışında oluşturuyordur (ofis belgeleri, mesajlaşma uygulamaları) veya alfa kanalı olan gerçek bir görüntü dosyasına ihtiyaç duyuyordur (şeffaf köşeli PNG/WebP).
    </p>

    <h2>Piksel cinsinden yarıçap ve yüzde cinsinden yarıçap</h2>
    <p>
      Sabit bir <strong>piksel yarıçapı</strong> (ör. 12&nbsp;px), görüntü boyutundan bağımsız olarak aynı fiziksel yuvarlaklığı korur. 200&nbsp;px'lik bir avatar ve 1000&nbsp;px'lik bir kartın her ikisi de 12&nbsp;px'lik bir eğri alır &mdash; büyük olanda görsel olarak sıkı, küçük olanda belirgindir.
    </p>
    <p>
      Bir <strong>yüzde yarıçapı</strong> görüntüyle birlikte ölçeklenir: kısa kenarın %10'u. %10'da 200&nbsp;px'lik bir kare 20&nbsp;px'lik bir eğri alır; %10'da 1000&nbsp;px'lik bir kare 100&nbsp;px alır. Şeklin boyutlar arasında tutarlı hissetmesini istediğinizde yüzde kullanın &mdash; aynı squircle şeklinin 16, 32, 64, 128 ve 512&nbsp;px'de göründüğü uygulama ikonlarını düşünün.
    </p>

    <h2>Tam daire: %50 yarıçap</h2>
    <p>
      Bir karede %50'lik bir <code>border-radius</code> mükemmel bir daire oluşturur; bir dikdörtgende bir hap veya elips oluşturur. Bu, kullanıcı avatarları için standart şekildir. Bunu bir dosyaya işlerken, hem kare bir kaynak görüntüye hem de şeffaflığı destekleyen bir formata (PNG, WebP, AVIF) ihtiyacınız vardır. JPEG'ler şeffaf dairesel bir arka plan tutamaz &mdash; köşeleri belirttiğiniz herhangi bir arka plan rengiyle, genellikle beyazla doldururlar.
    </p>
    <p>
      Dairesel bir avatarı tahmin edilemeyen bir arka plana yapıştıracaksanız, her zaman PNG veya WebP olarak dışa aktarın. Yerleşim arka planının düz beyaz ve değişmez olduğunu biliyorsanız, beyaz köşe dolgulu JPEG işe yarar ve bayt tasarrufu sağlar.
    </p>

    <h2>Şeffaflık: PNG, WebP, AVIF</h2>
    <p>
      Şeffaf yuvarlak köşeler bir alfa kanalı gerektirir. Biçim seçenekleriniz:
    </p>
    <ul>
      <li><strong>PNG</strong> &mdash; her yerde desteklenir, kayıpsız, daha büyük dosyalar. Güvenli varsayılan.</li>
      <li><strong>WebP</strong> &mdash; benzer kalitede PNG'den %25&ndash;35 daha küçük, tüm modern tarayıcılarda desteklenir.</li>
      <li><strong>AVIF</strong> &mdash; daha da küçük, kodlaması daha yavaş, desteği artıyor.</li>
      <li><strong>GIF</strong> &mdash; yalnızca ikili şeffaflığı destekler (tamamen opak veya tamamen şeffaf), bu nedenle köşe kenarı pürüzlü görünecektir. Bunun için kaçının.</li>
    </ul>
    <p>
      JPEG, şeffaf köşeler için kesinlikle bir seçenek değildir; alfa kanalı yoktur.
    </p>

    <h2>Eğrinin kenar yumuşatması</h2>
    <p>
      Şeffaf bir arka plana karşı yuvarlak bir köşenin kenar yumuşatmaya ihtiyacı vardır: pürüzlü görünmemesi için eğri kenarı boyunca kısmen şeffaf pikseller. İyi araçlar bunu varsayılan olarak yapar; kötü olanlar, küçük boyutlarda belirgin olan bir merdiven basamağı kenarı üretir.
    </p>
    <p>
      Dışa aktarılan görüntünüzde görünür pürüzler varsa, aracın hedef boyutta mı yoksa küçültülmüş bir boyutta mı dışa aktardığını ve ardından tarayıcının ölçeklemesine izin verip vermediğini kontrol edin. Kenar yumuşatma açıkken son boyutta oluşturma, en temiz eğriyi verir.
    </p>

    <h2>İş için yarıçap seçimi</h2>
    <ul>
      <li><strong>Bir akıştaki fotoğraf kartları:</strong> İnce bir modern görünüm için 8&ndash;12&nbsp;px, daha yumuşak bir his için 16&ndash;20&nbsp;px.</li>
      <li><strong>Uygulama ikonları (iOS stili):</strong> Kenarın ~%22,37'si (iOS &ldquo;squircle&rdquo; formülü) veya özel bir squircle aracı kullanın.</li>
      <li><strong>Avatarlar:</strong> Daire için %50 veya yuvarlatılmış kare görünümü için %25&ndash;35.</li>
      <li><strong>Ürün görselleri:</strong> Hafif bir yumuşaklık ipucu ile neredeyse dikdörtgen için 4&ndash;8&nbsp;px.</li>
      <li><strong>Hero banner'lar:</strong> genellikle 0&nbsp;px (keskin kenarlar) veya renkli bir kapsayıcıya yerleştirilmişlerse 12&ndash;16&nbsp;px.</li>
    </ul>

    <h2>Bireysel köşe yarıçapları</h2>
    <p>
      Tüm köşelerin aynı yarıçapa ihtiyacı yoktur. Fotoğraf-metin kartları için yaygın bir desen, yalnızca üst iki köşeyi (fotoğrafın olduğu yer) yuvarlamak ve alt kısmı kare bırakmaktır, böylece aşağıdaki metin bölümü temiz bir şekilde hizalanır. CSS:
    </p>
    <pre>{`img.card-top {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`}</pre>
    <p>
      İşlenmiş asimetrik köşeler için, dört köşe yarıçapını da ayrı ayrı gösteren bir araç seçin.
    </p>

    <h2>Elips (dairesel olmayan) köşeler</h2>
    <p>
      Bir kenarlık yarıçapı aslında köşe başına iki değer alabilir: biri yatay eğri için, diğeri dikey eğri için, eliptik bir köşe üretir. CSS'de:
    </p>
    <pre>{`border-radius: 40px / 20px; /* her köşede geniş-kısa elips */`}</pre>
    <p>
      Eliptik köşeler, işlenmiş görüntü biçiminde nadirdir, ancak ayırt edici marka şekilleri veya sayfadaki her kartla aynı eğriye sahipmiş gibi görünmemesi gereken büyük hero görüntüleri için kullanışlıdır.
    </p>

    <h2>Gölgeler ve yuvarlak köşeler birlikte</h2>
    <p>
      Hedef ortam CSS'yi desteklemediği için köşeleri işliyorsanız, büyük olasılıkla <code>box-shadow</code>'u da desteklemiyordur. Bu durumlarda, gölgeyi de görüntüye işleyin &mdash; daha büyük bir tuvalde dışa aktarın, yuvarlak dikdörtgeni çizin, altına yumuşak bir gölge ekleyin ve tüm bileşimi şeffaf bir PNG olarak kaydedin.
    </p>
    <p>
      Bu yaklaşım ayrıca, yuvarlatılmış bir kapsayıcıdaki CSS <code>overflow: hidden</code> bir alt öğenin gölgesini kırptığında ortaya çıkan &ldquo;gölgenin yuvarlak maske tarafından kırpılması&rdquo; sorununu da çözer.
    </p>

    <h2>Toplu yuvarlama</h2>
    <p>
      Ürün katalogları, ekip fotoğraf galerileri veya ikon setleri için toplu araçlar, yüzlerce dosyayı aynı yarıçapla tek seferde yuvarlar. Aranacak kullanışlı seçenekler: en boy oranını koru, dosya başına çıktı biçimini seç, görüntü yapıştırıldığında kırpmayı önlemek için yuvarlatılmış şeklin etrafına şeffaf bir dolgu ekle.
    </p>

    <h2>Bırakma yerleşimi için güvenli dolgu</h2>
    <p>
      Başka bir kompozisyona yapıştırılacak yuvarlak köşeli bir görüntüyü dışa aktarırken, şeklin etrafına birkaç piksel şeffaf dolgu ekleyin. Bu, yuvarlamanın kenarının kapsayıcı kenarlığına garip bir şekilde dokunmasını önler ve hizalama için size hareket alanı sağlar.
    </p>
    <pre>{`Kaynak görüntü: 500 x 500
Hedef yuvarlatılmış çıktı: 500 x 500
Daha güvenli çıktı: 10 px şeffaf dolgu ile 520 x 520`}</pre>
    <p>
      Dolgulu sürüm hala 500&nbsp;px olarak okunur, ancak aşağı akış düzenleyicilere temiz bir bırakma varlığı sağlar.
    </p>

    <h2>Erişilebilirlik etkileri</h2>
    <p>
      Düğmeler ve etkileşimli öğeler üzerinde ağır yuvarlama, bazı kullanıcılar için algılanan dokunulabilirliği zedeleyebilir &mdash; şekil, kontrollerden ziyade dekoratif öğelere benzemeye başlar. Tasarım kuralları, etkileşimli öğeler için 4&ndash;8&nbsp;px yarıçap önerir, böylece tasarımınızın geri kalanı 16+&nbsp;px kullansa bile hala &ldquo;dokunulabilir şey&rdquo; olarak okunurlar.
    </p>
    <p>
      Bilişsel veya motor erişilebilirlik ihtiyaçları olan kullanıcılar için, düğmeler arasında tutarlı şekil dili önemlidir: 16&nbsp;px yarıçaplı bir düğme, 16&nbsp;px yarıçaplı bir kart ve hap şeklinde bir etiket birlikte yaşayabilir, ancak düğmeler aynı arayüzde yarıçaplar arasında rastgele değişmemelidir.
    </p>

    <h2>E-posta istemcileri ve yuvarlak köşeler</h2>
    <p>
      Outlook, özellikle CSS <code>border-radius</code> ile ünlü bir şekilde tutarsızdır. E-posta imzaları ve pazarlama e-postaları için köşeleri görüntü dosyasına işleyin ve PNG gönderin. İşlenmiş PNG köşelerine sahip satır içi <code>&lt;img&gt;</code> etiketleri her e-posta istemcisinde hayatta kalır; CSS kuralları bazılarında hayatta kalır ve diğerleri tarafından yok sayılır.
    </p>
    <p>
      Aynı durum birçok eski PDF oluşturucu, Word'den PDF'ye dönüştürücü ve bazı kurumsal belge sistemleri için de geçerlidir. Oluşturma ortamı tahmin edilemez olduğunda, işleyin.
    </p>

    <h2>Maske ve kırpma</h2>
    <p>
      Bir maske aracılığıyla köşeleri yuvarlamak, görüntünün tamamını bozulmadan tutar ve yalnızca köşe bölgelerini gizler. Bir daireye (veya yuvarlatılmış şekle) kırpma aslında pikselleri kaldırır. Çoğu amaç için eşdeğerdirler, ancak maskeler, kaynağı kaybetmeden maskeyi daha sonra geri almanıza veya değiştirmenize olanak tanır; kırpmalar kalıcıdır.
    </p>
    <p>
      CSS'de <code>border-radius</code> etkili bir şekilde bir maskedir. Görüntü düzenleyicilerde, altındaki orijinali korumak istiyorsanız &ldquo;katman maskesi ekle&rdquo; veya &ldquo;tahribatsız yuvarlama&rdquo; seçeneklerini arayın.
    </p>

    <h2>Boyutlar arasında yuvarlama oranı</h2>
    <p>
      Tasarım sisteminiz 16&ndash;512&nbsp;px ikon boyutları arasında aynı yarıçapı kullanıyorsa, en küçük ikonlar neredeyse hiç yuvarlatılmamış (16&nbsp;px'lik bir ikonda 2&nbsp;px'lik bir eğri neredeyse karedir) ve en büyükleri sert görünür. Orantılı bir ölçek daha iyi çalışır:
    </p>
    <pre>{`16 px ikon  -> 3 px yarıçap
24 px ikon  -> 4 px yarıçap
32 px ikon  -> 6 px yarıçap
64 px ikon  -> 10 px yarıçap
128 px ikon -> 20 px yarıçap
512 px uygulama ikonu -> 100 px yarıçap (kabaca iOS squircle oranı)`}</pre>
    <p>
      Kenar uzunluğunun kabaca %15&ndash;20'si, tüm boyutlarda tutarlı bir &ldquo;dostça yuvarlatılmış&rdquo; his üretir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Yuvarlak köşeleri JPEG olarak kaydetmek ve her varlıkta çirkin bir beyaz köşe dolgusu ile bitmek &mdash; tasarımcıların 400 dışa aktarımın tamamının PNG olarak yeniden yapılması gerektiğini keşfettiklerinde bir gün kaybetmelerine neden olan bir karışıklık. Diğer bir sık yapılan hata: kare yerine dikdörtgen bir tuvalde yüzde yarıçapı kullanmak ve yuvarlatılmış bir dikdörtgen beklerken hap şekli elde etmek &mdash; 800&nbsp;&times;&nbsp;400 dikdörtgenin %50'sinin 400&nbsp;px olduğunu unutmayın, bu da her kısa uçta yuvarlak yarım daireler üretir. Bir daire istiyorsanız, kaynak kare olmalıdır; yuvarlatılmış bir dikdörtgen istiyorsanız, piksel değerleri veya daha küçük bir yüzde kullanın. Son olarak, CSS ile stillendirebileceğiniz görüntülere köşeleri işlemek, sizi kolay yeniden tasarımlardan kilitler &mdash; oluşturma ortamı desteklediğinde her zaman CSS'yi tercih edin.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/image-round-corners">Görüntü köşe yuvarlama aracımız</a>, her köşe için yarıçap kontrolü ve şeffaf PNG/WebP çıktısı ile herhangi bir görüntüye yuvarlak köşeler işler. İşaretlemeyi kontrol ettiğinizde CSS-ilk sürümü için <a href="/tools/border-radius-generator">kenarlık yarıçapı oluşturucu</a> tam kuralı üretir. Ve dairesel avatarların özel durumu için <a href="/tools/profile-pic-circle-cropper">profil resmi daire kırpıcı</a>, kare-ilk kırpmayı ve %50 yuvarlamayı tek adımda halleder.
    </p>
  </>
);