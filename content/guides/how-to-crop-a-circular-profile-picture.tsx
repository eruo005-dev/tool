import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      İyi bir dairesel profil fotoğrafı üç şey yapar: yüzü ortalar, dairenin çeneyi veya kulakları kesmeyeceği kadar boşluk bırakır ve retina ekranlarda hala net görünecek bir çözünürlükte dışa aktarır. Platformlar, kullanıcıların yüklediği avatarları işleme sırasında daire şeklinde kırpar, ancak dairenin dosyaya gömülü olmasını istiyorsanız (e-posta imzaları, PDF'ler veya sunumlar için), kırpma işlemini kendiniz yapmanız ve şeffaflıkla dışa aktarmanız gerekir. Bu kılavuz, yüzü çerçevelemeyi, doğru kare kırpmayı seçmeyi, her büyük platformun gerçekte kullandığı avatar boyutlarını ve herhangi bir arka plana düşen şeffaf bir PNG'nin nasıl dışa aktarılacağını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir kare ile başlayın</h2>
    <p>
      Bir daire, bir karenin içine çizilir, bu nedenle ilk adım her zaman şudur: kaynak fotoğrafınızı bir kareye kırpın. Dairesel maske daha sonra bu karenin dört köşe parçasını kaldıracaktır. 1200&nbsp;&times;&nbsp;800 piksel bir manzara fotoğrafıyla başlayıp 800&nbsp;&times;&nbsp;800 piksel bir kareye kırparsanız, 400&nbsp;px genişlik kaybedersiniz; hangi 400 pikseli kaybedeceğinizi planlayın.
    </p>
    <p>
      Dikdörtgen bir fotoğraf üzerinde doğrudan dairesel bir kırpma çizmenize izin veren araçlar, kare kırpmayı sizin için dahili olarak yapar. Aynı işlem, tek adım.
    </p>

    <h2>Fotoğrafı değil, yüzü ortaya koyun</h2>
    <p>
      İnsanlar içgüdüsel olarak kırpmayı fotoğrafa ortalar, ancak asıl istediğiniz yüzün dairede ortalanmasıdır. Kare kutuyu, gözler dairenin üst üçte birlik kısmına (göz çizgisinin doğal olarak okunduğu yere) oturacak ve çene alt kenarın iyice içinde olacak şekilde çekin.
    </p>
    <p>
      İyi bir kural: daire çapının kabaca %20-30'u saç çizgisinin üzerinde boşluk olmalıdır. Daha azı kafanın üst kısmının kenara değmesine neden olur; daha fazlası yüzün küçük görünmesine neden olur.
    </p>

    <h2>Çene için yer bırakın</h2>
    <p>
      En yaygın avatar hatası, dairenin alt kısmını öpen bir çenedir. Platformlar bazen avatarın etrafında bir kenarlık oluşturur ve mükemmel bir kırpmayı kafa kesmeye dönüştürür. Dairenin alt kısmını çenenin en az %5 altında boşluk bırakacak şekilde doldurun.
    </p>
    <p>
      Emin değilseniz, biraz uzaklaştırın. Dairenin %70'ini dolduran bir yüz kendinden emin görünür; %95'ini dolduran bir yüz sıkışık görünür.
    </p>

    <h2>Omuz çizgileri ve çerçeveleme ipuçları</h2>
    <p>
      Sadece omuzların üst kısmını dahil etmek (tüm köprücük kemiği yerine) yüzü görsel olarak sabitler ve havada uçan bir kafa gibi görünmesini engeller. Boyundan kırpmaktan kaçının &mdash; bu gurur verici değildir ve bir sabıka fotoğrafı gibi okunur. Ya omuzları dahil edin ya da boyundan daha sıkı kırpın.
    </p>
    <p>
      Orijinal fotoğraf çok fazla omuz ve gövde gösteriyorsa, doğru kırpma düşündüğünüzden daha sıkıdır. Yüz baskın olmalıdır.
    </p>

    <h2>Arka plan seçimi</h2>
    <p>
      Temiz veya bulanık bir arka plan yüzü öne çıkarır; karmaşık bir arka plan dikkat için rekabet eder. Kaynak fotoğrafın karmaşık bir arka planı varsa, üç seçeneğiniz vardır:
    </p>
    <ul>
      <li>Dairenin çoğunlukla yüz ve minimum arka plan içermesi için daha sıkı yeniden kırpın.</li>
      <li>Kırpmadan önce bir arka plan kaldırma işlemi kullanın, yalnızca konuyu ve düz veya şeffaf bir arka planı koruyun.</li>
      <li>Yüzü keskin tutan ve dairenin kenarlarını yumuşatan ince bir radyal bulanıklık uygulayın.</li>
    </ul>

    <h2>Platforma özel boyutlar</h2>
    <p>
      Her platform, önerilen bir avatar boyutunu belirtir. Tam olarak bu boyutta veya daha büyük yüklemek, sıkıştırma sürprizlerinden kaçınır:
    </p>
    <pre>{`LinkedIn:   400 x 400 px (40 px kadar küçük görüntülenir)
Twitter/X:  400 x 400 px minimum
Instagram:  320 x 320 px görüntülenir, 1080 önerilen yükleme
Facebook:   170 x 170 px masaüstü, 128 x 128 mobil
GitHub:     500 x 500 px önerilen
Slack:      512 x 512 px önerilen
YouTube:    800 x 800 px önerilen, 98 x 98 olarak görüntülenir`}</pre>
    <p>
      Kural: küçültme ve retina oluşturmadan kurtulmak için en büyük görüntüleme boyutunun en az 2 katını yükleyin.
    </p>

    <h2>Dairesel çıktı için şeffaf PNG</h2>
    <p>
      Daireyi bir dosyaya gömdüğünüzde, köşeler şeffaf olmalıdır, aksi takdirde avatar beyaz olmayan herhangi bir şeyin üzerine düştüğünde bir kutu olarak görünürler. Yalnızca PNG ve WebP (ve AVIF) gerekli alfa kanalını destekler.
    </p>
    <p>
      Hedef kesinlikle JPEG gerektiriyorsa (bazı eski İK sistemleri), köşe dolgusunu hedefin arka plan rengiyle eşleştirin: beyaz sayfalar için beyaz, koyu arayüzler için siyah. Göndermeden önce dosyayı gerçek arka planına yerleştirerek iki kez kontrol etmeye değer.
    </p>

    <h2>Daire kenarını yumuşatma</h2>
    <p>
      Yumuşatma olmayan dairesel bir maske, "amatör" diye bağıran pikselli pürüzlü bir kenar üretir. Her modern araç varsayılan olarak yumuşatma yapar, ancak dışa aktarılan avatarınız pürüzlülük gösteriyorsa, aracın 1 bitlik bir maske çıkarmadığını doğrulayın (çok eski yazılımlarda veya GIF dışa aktarımında yaygındır).
    </p>
    <p>
      Ekstra pürüzsüzlük için, hedef boyutun 2 katında dışa aktarın. Tarayıcı veya platform küçültecek ve ortalama alma kenarı daha da yumuşatacaktır.
    </p>

    <h2>Gözlükler, şapkalar ve aksesuarlar</h2>
    <p>
      Gözlük çerçeveleri ve şapka kenarları genellikle sıkı bir dairenin kenarını geçer. Göndermeden önce dışa aktarılan avatarı kontrol edin: daire tarafından kırpılan bir gözlüğün alt çerçevesi görsel olarak garip. Bunları korumak için daha geniş kırpın veya ince ise kısmi kırpmayı kabul edin.
    </p>
    <p>
      Aynı şey küpeler, büyük kolyeler ve sakallar için de geçerlidir &mdash; hepsi kenarla karşılaşabilir. Kırpmayı uygulamadan önce çekimde ne olduğunu bilin.
    </p>

    <h2>Renk, parlaklık ve tekdüzelik</h2>
    <p>
      Avatarlarının koordineli hissetmesini isteyen ekipler bazen aynı ince filtreyi uygular: küçük bir kontrast artışı, sıcak ton kayması veya siyah-beyaz dönüşümü. Küçük birleştirici ayarlamalar bile bir Ekip sayfasının rastgele değil, kasıtlı görünmesini sağlar.
    </p>
    <p>
      Herkes aynı düz arka plandaysa (şirket çapında vesikalık çekimi), sonuç kaliteli hissettirir. İnsanlar gündelik anlık görüntüler yüklüyorsa, birleştirici bir filtre en iyi ikinci seçenektir.
    </p>

    <h2>Tek kaynaktan birden çok boyut</h2>
    <p>
      Tek bir platform, avatarınızı birden çok çözünürlükte isteyebilir &mdash; LinkedIn 400&nbsp;px yükleme kullanır ancak arayüzünde 40-240&nbsp;px arasında görüntüler. Ana avatarı ihtiyacınız olacak en büyük boyutta (800-1024&nbsp;px) dışa aktarın ve aşağı akış tüketicilerinin küçültmesine izin verin.
    </p>
    <p>
      Düzinelerce ekip avatarını yöneten tasarım sistemleri için, her bir kaynaktan 80&nbsp;px, 160&nbsp;px, 320&nbsp;px ve 640&nbsp;px sürümleri çıkaran bir toplu iş akışı, tasarım daha büyük veya daha küçük varyantlar gerektirdiğinde daha sonra önemli ölçüde zaman kazandırır.
    </p>

    <h2>Arka planlar: düz, bulanık veya şeffaf</h2>
    <p>
      Bir profil fotoğrafı için üç yaygın arka plan işlemi:
    </p>
    <ul>
      <li><strong>Şeffaf:</strong> en esnek; avatar herhangi bir sayfa rengine temiz bir şekilde düşer.</li>
      <li><strong>Düz marka rengi:</strong> sitenin geri kalanıyla koordineli; kontrastı sağlar.</li>
      <li><strong>Fotoğrafın kendisinin bulanık versiyonu:</strong> modern ve atmosferik; yüzle rekabet etmeden sıcaklığı korur.</li>
    </ul>
    <p>
      Avatarınızın gerçekten sahiplenilmemiş bir profil yuvası gibi görünmesini istemiyorsanız, orta gri "varsayılan fotoğraf" arka planından kaçının.
    </p>

    <h2>Animasyonlu ve video profil resimleri</h2>
    <p>
      Bazı platformlar (Twitter/X, TikTok, bazı bölgelerde LinkedIn) animasyonlu GIF veya kısa video profil resimlerini destekler. Çerçeveleme kuralları aynıdır &mdash; yüz ortalanmış, çene boşluğu için dolgu &mdash; ancak bir kararlılık kontrolü ekleyin: yüz tüm döngü boyunca ortalanmış kalmalıdır. Kamerayı takip etmek veya hızlı kafa dönüşleri avatarların meşgul ve profesyonelce olmayan hissetmesine neden olur.
    </p>
    <p>
      Döngüleri 3 saniyenin altında, mümkünse 1&nbsp;MB'ın altında tutun ve animasyonu kaldıran platformlar için her zaman statik bir görüntü yedeği sağlayın.
    </p>

    <h2>Grup fotoğrafları ve ekip ızgaraları</h2>
    <p>
      Bir ızgarada dairesel avatarların bulunduğu Ekip veya Hakkında sayfaları için tutarlılık çok önemlidir. Kırpma ölçeği her konuda eşleşmelidir: aynı yüz-daire oranı, saçın üzerinde aynı boşluk, mümkünse aynı arka plan işlemi.
    </p>
    <p>
      Tutarlılığı sağlamanın en kolay yolu, aynı çerçevelemeyle tek bir fotoğraf çekimidir. İkinci en kolayı, bir şablon kaplamasıdır &mdash; her avatarın sığması gereken dairesel bir kılavuz &mdash; kırpma sırasında her fotoğrafa uygulanır. Karışık kırpma stilleri, her bir fotoğraf iyi olsa bile profesyonelce görünmez.
    </p>

    <h2>Aydınlatma ve daha hoş ifadeler</h2>
    <p>
      Avatar boyutundaki yüzler, ne kadar küçük görüntülenirlerse ince ifade ayrıntılarını o kadar kaybeder. Bir yerde 40&nbsp;px'de görünecek fotoğraflar için, abartılı ifadeler nötr olanlardan daha iyi çevrilir &mdash; ince bir gülümseme, küçük boyutlarda gülümseme olmayana dönüşür. Yumuşak, eşit aydınlatma ayrıca avatar ölçeğinde dramatik yan aydınlatmadan daha iyi okunur; bu, 40&nbsp;px'de yüzün yarısını gölgeye dönüştürebilir.
    </p>
    <p>
      Yeni bir avatar çekiyorsanız, doğrudan ön aydınlatma veya göz hizasının biraz üzerinde yumuşak ışık seçin. Duygusal portreleri tam boyutlu fotoğraflar için saklayın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Son görüntüleme boyutunda (ör. YouTube için 98&nbsp;px) 2 kat veya 3 kat yerine dışa aktarmak ve retina ekranlarda bulanık bir avatar elde etmek. JPEG olarak kaydetmek ve şeffaf köşeler yerine kare köşeler elde etmek. Platformun kendi kenarlığının çeneyi keseceği kadar sıkı kırpmak. Fotoğraf yerine yüzü ortalamak &mdash; yüz çerçevenin tam ortasında değil, üst kısmında oturmalıdır. Ve bir manzara grup fotoğrafı yükleyip platformun, konuyu tamamen kesen bir kareye otomatik olarak kırpmasına izin vermenin belirgin başarısızlığı: önce manuel olarak kırpın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/profile-pic-circle-cropper">Profil resmi daire kırpıcımız</a>, kare-ilk kırpma, yüz ortalama, şeffaf PNG dışa aktarma ve 2 kat retina boyutlandırmayı tek bir iş akışında halleder. Dairesel olmayan dikdörtgen kırpmalar için <a href="/tools/image-cropper">görüntü kırpıcı</a>, serbest biçimli oran kilitleri sunar. Belirli bir boyut ve arka plan gerektiren resmi belge tarzı portreler için <a href="/tools/passport-photo-maker">pasaport fotoğrafı yapıcı</a>, bir vesikalık alır ve uyumlu bir dosya çıkarır.
    </p>
  </>
);