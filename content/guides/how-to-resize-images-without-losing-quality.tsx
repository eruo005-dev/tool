import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir görseli yeniden boyutlandırmak basittir; görünür kalite kaybı olmadan yeniden boyutlandırmak ise şaşırtıcı derecede kolayca yanlış yapılabilir. Çok agresif küçültürseniz bulanık sonuçlar alırsınız. Safça büyütürseniz piksellenme olur. Yanlış algoritmayı kullanırsanız düz çizgiler titrer, yüzler yumuşar, metin okunamaz hale gelir. Bu kılavuz, yeniden örneklemenin matematiğini, hangi iş için hangi algoritmanın seçileceğini, kalite bozulmadan ne kadar büyütme yapılabileceğini, yapay zeka büyütmenin ne zaman kullanılacağını ve yeniden boyutlandırma kalitesiyle etkileşime giren dosya biçimi seçimlerini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Yeniden boyutlandırma, yeniden örnekleme ve sıkıştırma</h2>
    <p>
      Birbiriyle sıkça karıştırılan üç farklı işlem:
    </p>
    <p>
      <strong>Yeniden boyutlandırma</strong> bir görselin piksel boyutlarını değiştirir — 4000×3000 → 1600×1200. Görsel sonrasında daha az veri içerir.
    </p>
    <p>
      <strong>Yeniden örnekleme</strong>, yeniden boyutlandırma içindeki algoritmik adımdır: yeni piksellerin eskilerden nasıl türetildiği. Farklı algoritmalar (en yakın komşu, çift doğrusal, çift kübik, Lanczos) farklı görsel sonuçlar verir.
    </p>
    <p>
      <strong>Sıkıştırma</strong> aynı piksel boyutlarını korur ancak pikselleri daha verimli kodlayarak dosya boyutunu küçültür (JPEG kalitesi, WebP kalitesi, AVIF ayarları).
    </p>
    <p>
      Aynı boyutlarda daha küçük dosya mı istiyorsunuz? Sıkıştırın. Belirli bir düzen için daha küçük boyutlar mı istiyorsunuz? Yeniden boyutlandırın. Genellikle ikisini de yaparsınız: hedef boyutlara yeniden boyutlandırın, ardından sıkıştırın.
    </p>

    <h2>Yeniden örnekleme algoritmaları — gerçek kullanım için sıralandı</h2>
    <p>
      <strong>En yakın komşu:</strong> en yakın kaynak pikseli seçer. Hızlıdır ancak piksellenir. Yalnızca piksel sanatı veya sert kenarların korunması gerektiğinde kullanın.
    </p>
    <p>
      <strong>Çift doğrusal:</strong> 4 komşu pikselin ortalamasını alır. Yumuşaktır ancak hafif bulanıktır. Çift kübikten daha hızlıdır. Kalitenin kritik olmadığı küçük resimler için kabul edilebilir.
    </p>
    <p>
      <strong>Çift kübik:</strong> kübik bir fonksiyonla 16 komşu kullanır. Çift doğrusaldan daha keskindir, kenarlarda hafif halkalanma olur. Photoshop&rsquo;un varsayılanıdır. İyi bir genel amaçlı seçimdir.
    </p>
    <p>
      <strong>Lanczos (Lanczos3 veya Lanczos5):</strong> 6 veya 10 komşulu sinc tabanlı bir çekirdek kullanır. Yapay zeka olmayan en keskin sonuçtur; ince detayları en iyi korur. Büyük küçültmeler için tarayıcıların varsayılanıdır. Belirli boyutlara küçültülen fotoğraflar için en iyi seçimdir.
    </p>
    <p>
      <strong>Mitchell-Netravali:</strong> daha yumuşak bir Lanczos alternatifidir; halkalanma yapaylıklarını azaltır. Lanczos&rsquo;un çok keskin geldiği büyük küçültmeler için iyidir.
    </p>
    <p>
      Temel kural: fotoğraflar için Lanczos3, piksel sanatı için en yakın komşu, daha iyisi yoksa çift kübik.
    </p>

    <h2>Küçültme — güvenli yön</h2>
    <p>
      Büyükten küçüğe gitmek (örneğin, 4K → 1080p) kayıplıdır ancak affedicidir. Yeniden boyutlandırılmış görselin zaten gösteremeyeceği bilgileri atıyorsunuz.
    </p>
    <p>
      <strong>Bir kez yeniden boyutlandırın, birden fazla değil.</strong> 4000px → 800px&rsquo;i doğrudan yeniden boyutlandırın, 4000 → 2000 → 1200 → 800 şeklinde değil. Her yeniden örnekleme geçişi hafif yumuşamaya neden olur.
    </p>
    <p>
      <strong>Agresif küçültmelerden sonra hafif keskinleştirme uygulayın.</strong> 4000px&rsquo;den 400px&rsquo;e düşürmek kenarları yumuşatır; %30-50&rsquo;lik bir keskin olmayan maske veya hafif yarıçaplı bir keskinleştirme canlılığı geri kazandırır.
    </p>
    <p>
      <strong>JPEG sıkıştırmadan önce küçültün, sonra değil.</strong> Büyük bir JPEG&rsquo;i sıkıştırıp ardından yeniden boyutlandırmak blok yapaylıklarını artırır. Önce yeniden boyutlandırın, ardından makul bir kalitede sıkıştırın.
    </p>

    <h2>Büyütme — tehlikeli yön</h2>
    <p>
      Büyütme, var olmayan verileri icat eder. Geleneksel algoritmalar (çift kübik, Lanczos) bulanıklık üretir; yakalanmamış detayı ekleyemezler.
    </p>
    <p>
      <strong>Geleneksel algoritmalarla güvenli büyütme sınırı:</strong> orijinal boyutun yaklaşık %150-200&rsquo;üne kadar. Bunun ötesinde, normal izleme mesafesinde bulanıklık görünür hale gelir.
    </p>
    <p>
      <strong>Yapay zeka büyütücüler</strong> (Topaz Gigapixel, Waifu2x, Real-ESRGAN, Gigapixel AI, Upscayl) eğitilmiş modellere dayanarak makul detaylar hayal eder. Makul derecede keskin bir kaynağın 2x veya 4x yapay zeka büyütmesi gerçekten keskin görünebilir. Dikkat: yapay zeka büyütücüler özellikleri &ldquo;uydur&rdquo;abilir — yüzler hafifçe yanlış görünebilir, metin anlamsız hale gelebilir.
    </p>
    <p>
      <strong>Kritik kullanımlar için büyütme yapmayın.</strong> Baskı, arşiv, hukuki, adli. Kaynak 800px ise ve baskı için 2000px&rsquo;e ihtiyacınız varsa, daha iyi bir büyütücüye değil, daha yüksek çözünürlüklü bir kaynağa ihtiyacınız vardır.
    </p>

    <h2>Boyutlar ve biçim — hedef seçimi</h2>
    <p>
      <strong>Web için:</strong>
    </p>
    <p>
      Kahraman görselleri: 72 DPI&rsquo;da 1600-2000px genişlik.
    </p>
    <p>
      İçerik görselleri: 1000-1200px genişlik.
    </p>
    <p>
      Küçük resimler: 400-600px genişlik.
    </p>
    <p>
      Avatarlar: 200-400px kare.
    </p>
    <p>
      Retina için 2x yoğunluklu sürümler sunun (1200px CSS piksel genişliği için 2400px), <code>srcset</code> ile tembel yükleme yapın.
    </p>
    <p>
      <strong>Baskı için:</strong> nihai baskı boyutunda 300 DPI. 300 DPI&rsquo;da bir A4 baskı minimum 2480×3508 piksel gerektirir.
    </p>
    <p>
      <strong>Sosyal medya için:</strong> platforma özel özellikler yıllık değişir. Instagram kare için 1080×1080, Hikayeler için 1080×1920, OG görselleri için 1200×630, Twitter/X başlıkları için 1500×500.
    </p>

    <h2>Biçim seçimi yeniden boyutlandırmayla etkileşir</h2>
    <p>
      <strong>PNG:</strong> kayıpsızdır, keskin kenarlı grafikler (logolar, arayüz) için iyidir, fotoğraflar için kötüdür (büyük dosyalar). Temiz bir şekilde yeniden boyutlandırılır.
    </p>
    <p>
      <strong>JPEG:</strong> kayıplıdır, fotoğraflar için harikadır, keskin kenarlar için kötüdür. Yeniden boyutlandırmadan sonra yeniden kodlama gereklidir ve hafif kayıplıdır. Web için kaliteyi 80-85&rsquo;te tutun; daha düşüğü görünür yapaylıklara neden olur.
    </p>
    <p>
      <strong>WebP:</strong> eşdeğer kalitede JPEG&rsquo;den %25-35 daha küçüktür; saydamlığı destekler; 2026&rsquo;da yaygın olarak desteklenir. Eski uyumluluk kritik değilse web fotoğrafları için tercih edin.
    </p>
    <p>
      <strong>AVIF:</strong> JPEG&rsquo;den %30-50 daha küçüktür; daha iyi kalite; kodlaması yavaştır. Bir kez oluşturduğunuz kahraman görselleri için en iyisidir.
    </p>
    <p>
      <strong>SVG:</strong> vektördür, kalite kaybı olmadan sonsuz yeniden boyutlandırılır. Simgeler, logolar, illüstrasyonlar için kullanın. Fotoğraflar için değil.
    </p>

    <h2>En boy oranını koruma</h2>
    <p>
      <strong>Kasıtlı olarak germiyorsanız her zaman orantılı olarak yeniden boyutlandırın.</strong> Genişliği 1200 ile sınırlamak ve yüksekliğin otomatik hesaplanmasına izin vermek görseli doğal tutar.
    </p>
    <p>
      <strong>Sabit çerçeveli hedefler için</strong> (4:3 bir fotoğraftan 1:1 kare gibi), seçenekler: kırp (içerik kaybı), sığdır (dolgu ile posta kutusu) veya doldur (doldurmak için kırp + yakınlaştır).
    </p>
    <p>
      &ldquo;Akıllı kırp&rdquo; araçları nesneleri algılar ve kırpmayı onlara ortalar. Toplu küçük resimler için kullanışlıdır.
    </p>

    <h2>Meta veri ve EXIF</h2>
    <p>
      Çoğu yeniden boyutlandırıcı varsayılan olarak EXIF&rsquo;i kaldırır, bu da kamera bilgilerini, GPS&rsquo;i, orijinal tarihi siler. Genellikle web için istenir.
    </p>
    <p>
      EXIF&rsquo;i korumanız gerekiyorsa (fotoğraf arşivleri, yasal kayıtlar), bunu destekleyen bir yeniden boyutlandırıcı kullanın. <code>-auto-orient</code> ile ImageMagick, EXIF&rsquo;i bozmadan döndürmeyi uygular.
    </p>
    <p>
      <strong>Fotoğraflardaki GPS koordinatları</strong> bir gizlilik sızıntısıdır — mobil cihazda çekilmiş fotoğrafları yayınlamadan önce her zaman kaldırın.
    </p>

    <h2>Toplu yeniden boyutlandırma</h2>
    <p>
      10+ görsel için komut satırı veya betik araçları zaman kazandırır.
    </p>
    <p>
      <strong>ImageMagick:</strong> <code>magick mogrify -resize 1200x1200 -quality 85 -format webp *.jpg</code>. Endüstri standardı, betiklenebilir, küçültmeler için varsayılan olarak Lanczos.
    </p>
    <p>
      <strong>Sharp (Node.js):</strong> hızlıdır, WebP/AVIF hazırdır, sunucu tarafı iş akışları için harikadır.
    </p>
    <p>
      <strong>cwebp</strong> ve <strong>avifenc:</strong> mükemmel sıkıştırma ayarlarına sahip biçime özel araçlar.
    </p>
    <p>
      <strong>Squoosh.app:</strong> Google&rsquo;dan tarayıcı tabanlı, toplu olmayan araç; kalite/boyut ödünleşimlerini karşılaştırmak için harika bir arayüze sahiptir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Gerçek piksellerle değil, CSS ile yeniden boyutlandırma.</strong> 400px&rsquo;de görüntülemek için 4000px&rsquo;lik bir görsel sunmak bant genişliğini boşa harcar (10-15× daha fazla veri) ve sayfa hızını düşürür.
    </p>
    <p>
      <strong>Yeniden boyutlandırmadan önce büyütme.</strong> Kaynağı düşürmek, ardından büyütmek, sonra küçültmek, orijinali küçültmekten her zaman daha kötüdür.
    </p>
    <p>
      <strong>JPEG kalitesini çok düşük kaydetme.</strong> 60 veya altı, görünür bloklar, renk bantlaşması ve kenar halkaları oluşturur. 80-85 genellikle ideal noktadır.
    </p>
    <p>
      <strong>Retina/HiDPI&rsquo;yi unutmak.</strong> 1200×800&rsquo;lik bir görsel retinada yumuşak görünür. srcset aracılığıyla @2x veya @3x sunun.
    </p>
    <p>
      <strong>Renk uzayını göz ardı etmek.</strong> sRGB web standardıdır. Adobe RGB veya ProPhoto&rsquo;daki görseller web tarayıcılarında soluk veya yanlış görünecektir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir görseli tarayıcıda{" "}
      <a href="/tools/image-resizer">görsel yeniden boyutlandırıcı</a> ile yeniden boyutlandırın. Yeniden boyutlandırmadan sonra dosya boyutunu küçültmek için{" "}
      <a href="/tools/image-compressor">görsel sıkıştırıcı</a> ile eşleştirin ve kullanım durumunuz için doğru biçimi (web için WebP, grafikler için PNG, eski sistemler için JPEG) çıktılamak için{" "}
      <a href="/tools/image-format-converter">görsel biçim dönüştürücü</a>
      {" "}kullanın.
    </p>
  </>
);