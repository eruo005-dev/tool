import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      JPG, PNG, WebP, AVIF, GIF, SVG, HEIC — yanlış görsel formatını seçmek
      bant genişliği, kalite veya uyumluluk kaybına yol açar. Doğru
      olanı seçmek ise sayfaları hızlandırır, görselleri netleştirir ve
      dosyaları kimse fark etmeden küçültür. Kurallar sezgisel değildir
      (JPG her zaman PNG'den küçük değildir; WebP
      her zaman JPG'den iyi değildir) ve son birkaç yılda AVIF'in
      yaygınlaşmasıyla manzara değişti. Bu
      kılavuz, her formatı en iyi kullanım alanıyla eşleştirir, önemli olan
      sıkıştırma ödünleşimlerini açıklar, şeffaflık ve
      animasyon desteğini, 2026'daki tarayıcı uyumluluğunu ve
      her kullanıcıya doğru formatı sunmak için modern iş akışını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Kısa versiyon</h2>
    <p>
      <strong>JPG:</strong> şeffaflığın önemli olmadığı
      ve kayıplı sıkıştırmanın sorun teşkil etmediği fotoğraflar için. Çoğu
      fotoğrafçılık için varsayılan.
    </p>
    <p>
      <strong>PNG:</strong> logolar, ekran görüntüleri, simgeler, şeffaflığı olan
      görseller için. Kayıpsız ancak daha büyük dosyalar.
    </p>
    <p>
      <strong>SVG:</strong> sonsuza kadar ölçeklenmesi gereken simgeler, basit illüstrasyonlar, logolar
      için. Küçük dosya, her boyutta mükemmel görüntüleme.
    </p>
    <p>
      <strong>WebP:</strong> JPG ve PNG'nin modern halefi. Benzer kalitede JPG'den ~%30
      daha küçük. Çok eski tarayıcılar dışında her yerde desteklenir.
    </p>
    <p>
      <strong>AVIF:</strong> daha da yeni. JPG'den ~%50 daha küçük.
      Modern tarayıcılarda (2023 sonu+) destek artık evrensel.
    </p>
    <p>
      <strong>GIF:</strong> eski. Yalnızca geriye dönük uyumluluğun önemli olduğu
      küçük döngülü animasyonlar için. Aksi halde MP4 veya WebM.
    </p>
    <p>
      <strong>HEIC:</strong> iPhone varsayılanı. Harika sıkıştırma ancak
      sınırlı web desteği. Yüklemeden önce JPG veya WebP'ye dönüştürün.
    </p>

    <h2>Kayıplı ve kayıpsız — temel ödünleşim</h2>
    <p>
      <strong>Kayıplı</strong> formatlar (JPG, WebP-kayıplı, AVIF, HEIC)
      bayt tasarrufu için piksel verilerini atar. Fotoğraflar için bu,
      makul kalite ayarlarında görünmez. Keskin kenarlar
      (metin, çizgi sanatı) için kayıplı yapaylıklar belirgindir.
    </p>
    <p>
      <strong>Kayıpsız</strong> formatlar (PNG, WebP-kayıpsız) her pikseli
      aynen korur. Daha büyük dosyalar ancak yapaylık yok.
    </p>
    <p>
      <strong>Kural:</strong> fotoğraflar için kayıplı, özellikle metin olmak üzere
      keskin kenarlı grafikler için kayıpsız kullanın.
    </p>

    <h2>JPG derinlemesine</h2>
    <p>
      <strong>En iyi kullanım:</strong> fotoğraflar, yumuşak geçişlere sahip
      gerçekçi görüntüler.
    </p>
    <p>
      <strong>Kalite ayarı:</strong> 75-85 ideal aralıktır.
      90'ın üzerinde, ihmal edilebilir kalite artışı için bayt harcıyorsunuz.
      60'ın altında yapaylıklar görünür hale gelir.
    </p>
    <p>
      <strong>Renk alt örneklemesi:</strong> 4:2:0 varsayılandır — parlaklığın
      renk çözünürlüğünün yarısı. Fotoğraflar için iyi;
      doygun metin içeren görüntüler için yıkıcı.
    </p>
    <p>
      <strong>Aşamalı JPG:</strong> her biri daha yüksek kalitede olan birden çok
      geçişte yüklenir. Daha iyi algılanan performans; biraz
      daha büyük dosya. Çoğu kodlayıcı artık bunu varsayılan olarak kullanır.
    </p>
    <p>
      <strong>Meta veriler:</strong> JPG, EXIF verileri (kamera,
      konum, ayarlar) taşır. Gizlilik ve dosya boyutu için yayınlamadan önce
      kaldırın.
    </p>

    <h2>PNG derinlemesine</h2>
    <p>
      <strong>En iyi kullanım:</strong> ekran görüntüleri, UI öğeleri, logolar,
      keskin kenarlı veya şeffaflığı olan herhangi bir görüntü.
    </p>
    <p>
      <strong>PNG-8 ve PNG-24:</strong> PNG-8, 256 renkli bir
      palet kullanır (GIF gibi). Basit simgeler için iyidir. PNG-24 tam
      renklidir.
    </p>
    <p>
      <strong>Sıkıştırma:</strong> PNG sıkıştırması kayıpsızdır ancak
      ayarlanabilir. <code>pngcrush</code>,{" "}
      <code>optipng</code>, <code>zopflipng</code> gibi araçlar,
      kalite kaybı olmadan varsayılan PNG çıktısının %20-40'ını kırpabilir.
    </p>
    <p>
      <strong>Şeffaflık:</strong> tam alfa kanalı. Herhangi bir
      arka plana karşı kenar yumuşatılmış kenarları destekler.
    </p>

    <h2>SVG derinlemesine</h2>
    <p>
      <strong>En iyi kullanım:</strong> logolar, simgeler, basit illüstrasyonlar,
      vektör formatında tasarlanmış her şey.
    </p>
    <p>
      <strong>Dosya boyutu:</strong> genellikle yüksek çözünürlüklerde PNG'den daha küçük,
      düşük çözünürlüklerde daha büyük. Çok sayıda yola sahip karmaşık
      illüstrasyonlar SVG'yi hızla şişirir.
    </p>
    <p>
      <strong>Ölçeklenebilirlik:</strong> her boyutta piksel mükemmelliği.
      Bulanıklaştırmaz veya piksellenmez. Retina ekranlar, SVG'leri
      2x varlıklar olmadan mükemmel şekilde işler.
    </p>
    <p>
      <strong>Güvenlik:</strong> SVG, betik desteğine sahip XML'dir.
      Kullanıcı tarafından yüklenen SVG'ler kötü amaçlı betikler içerebilir.
      Görüntülemeden önce temizleyin (<code>DOMPurify</code>, sunucu tarafı temizleme).
    </p>
    <p>
      <strong>Optimizasyon:</strong> SVGO, meta verileri kaldırır, yolları
      birleştirir, koordinatları yuvarlar. Üretim için gereklidir.
    </p>

    <h2>WebP derinlemesine</h2>
    <p>
      <strong>En iyi kullanım:</strong> modern web fotoğrafçılığı ve grafikleri.
      Hem kayıplı hem kayıpsız modları, ayrıca şeffaflık ve
      animasyonu destekler.
    </p>
    <p>
      <strong>Sıkıştırma:</strong> eşdeğer kalitede JPG'den ~%30
      daha küçük. Şeffaflığı olan fotoğraflar için PNG'den belirgin şekilde daha küçük.
    </p>
    <p>
      <strong>Destek:</strong> tüm modern tarayıcılar. Chrome, Edge, Firefox, Safari 14+ (2020+) için endişelenmeyin.
    </p>
    <p>
      <strong>Geri dönüş:</strong>{" "}
      <code>&lt;picture&gt;</code> etiketi içinde <code>source type=&quot;image/webp&quot;</code>
      {" "}ve <code>&lt;img&gt;</code> etiketinde JPG geri dönüşü. Veya
      sunucuda İçerik Türü anlaşması yoluyla sunun.
    </p>

    <h2>AVIF derinlemesine</h2>
    <p>
      <strong>En iyi kullanım:</strong> dosya boyutunun en önemli olduğu
      modern web görselleri.
    </p>
    <p>
      <strong>Sıkıştırma:</strong> JPG'den ~%50, WebP'den ~%20
      daha küçük. Ölçekte fotoğrafçılıkta önemli tasarruf.
    </p>
    <p>
      <strong>Destek:</strong> Chrome, Firefox, Safari 16+ (2022+).
      2026'da WebP geri dönüşü ile birincil format için güvenli.
    </p>
    <p>
      <strong>Kodlama hızı:</strong> yavaş — AVIF kodlaması,
      JPG'den 10-50 kat daha yavaş olabilir. Önceden kodlayın, istek
      anında kodlamayın.
    </p>
    <p>
      <strong>Kod çözme hızı:</strong> ayrıca JPG'den daha yavaş. Düşük
      uçlu mobil cihazlarda görsel ağırlıklı kaydırmayı etkiler.
    </p>

    <h2>GIF — bir nedenden ötürü eski</h2>
    <p>
      GIF yalnızca 256 renklidir, modern formatlara kıyasla berbat
      sıkıştırmaya sahiptir ve kalan tek avantajı evrensel
      destektir.
    </p>
    <p>
      <strong>Animasyon için:</strong> MP4 veya WebM, eşdeğer kalitede
      10 kat daha küçüktür. Twitter/GIF tarzı animasyonlar için <code>&lt;video autoplay muted
      loop playsinline&gt;</code> kullanın.
    </p>
    <p>
      <strong>Şeffaflık için:</strong> PNG, GIF'i açık ara yener.
      1 bit alfa ve tam alfa kanalı.
    </p>
    <p>
      Yalnızca eski e-posta istemcilerine veya eski belgelere
      gömüyorsanız GIF'e başvurun.
    </p>

    <h2>HEIC / HEIF</h2>
    <p>
      iOS 11'den (2017) bu yana Apple'ın varsayılan fotoğraf formatı.
      Mükemmel sıkıştırma — dosyalar eşdeğer JPG'nin yarısı boyutunda.
    </p>
    <p>
      <strong>Web desteği:</strong> zayıf. Yalnızca Safari; Chrome ve
      Firefox HEIC'i işlemez.
    </p>
    <p>
      <strong>İş akışı:</strong> yüklemede JPG veya WebP'ye dönüştürün.
      iOS ve çoğu görsel aracı bunu otomatik olarak yapabilir.
    </p>

    <h2>Modern sunum — picture öğesi</h2>
    <p>
      Her tarayıcının desteklediği en iyi formatı sunun:
    </p>
    <pre>
{`<picture>
  <source srcset="img.avif" type="image/avif">
  <source srcset="img.webp" type="image/webp">
  <img src="img.jpg" alt="...">
</picture>`}
    </pre>
    <p>
      Tarayıcı AVIF → WebP → JPG'yi dener, desteklediği ilkini seçer.
      Sıfır maliyetli aşamalı iyileştirme.
    </p>
    <p>
      <strong>Duyarlı varyantlar:</strong>{" "}
      <code>srcset</code> ve <code>sizes</code> ile farklı
      görüntü alanı boyutları için farklı çözünürlükler sunabilirsiniz.
      Mobil performans için gereklidir.
    </p>

    <h2>CDN görsel optimizasyonu</h2>
    <p>
      Modern CDN'ler (Cloudflare Images, Vercel, Netlify, imgix,
      Imagekit) istek üzerine otomatik dönüştürme yapar. Bir JPG yükleyin; CDN,
      Chrome'a AVIF, Safari 14'e WebP, eski tarayıcılara JPG sunar.
      URL parametrelerinden anında yeniden boyutlandırma.
    </p>
    <p>
      100'den fazla görseli olan herhangi bir site için, görsel
      optimizasyonlu bir CDN genellikle maliyete değer.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Fotoğraflar için PNG.</strong> Bir PNG fotoğrafı, görünür bir fark olmaksızın
      eşdeğer bir JPG'den genellikle 5 kat daha büyüktür.
      Şeffaflığa ihtiyacınız olduğunda PNG, olmadığında JPG kullanın.
    </p>
    <p>
      <strong>2026'da animasyonlar için GIF.</strong> MP4'ten 10 kat daha büyük.
      Video etiketleri kullanın.
    </p>
    <p>
      <strong>Küçük resim boyutunda tam çözünürlüklü görseller sunmak.</strong>
      300&times;200 olarak görüntülenen 4000&times;3000'lik bir JPG, baytların %95'ini
      boşa harcar. Sunucu tarafında yeniden boyutlandırın.
    </p>
    <p>
      <strong>Gömülü raster görsellere sahip SVG'ler.</strong> Amacı bozar.
      İçerik bitmap ise, bir bitmap formatı kullanın.
    </p>
    <p>
      <strong>EXIF meta verilerini tutmak.</strong> Bayt ekler, gizliliği
      sızdırır (coğrafi konum, cihaz bilgisi). Yüklemede kaldırın.
    </p>
    <p>
      <strong>%100 kalitede JPG.</strong> Görünür bir iyileşme olmadan %85'ten 10 kat daha büyük.
    </p>
    <p>
      <strong>2026'da AVIF'i görmezden gelmek.</strong> AVIF desteği artık
      WebP geri dönüşü ile birincil format olacak kadar geniştir.
    </p>

    <h2>Rakamları inceleyin</h2>
    <p>
      Formatlar arasında anında dönüşüm için{" "}
      <a href="/tools/image-format-converter">görsel format dönüştürücüyü</a> kullanın.
      Dışa aktarmadan önce doğru boyuta getirmek için{" "}
      <a href="/tools/image-resizer">görsel yeniden boyutlandırıcı</a> ve
      kalite kaybı olmadan daha da küçültmek için{" "}
      <a href="/tools/image-compressor">görsel sıkıştırıcı</a> ile birlikte kullanın.
    </p>
  </>
);