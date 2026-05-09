import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      CSS küçültme, düşük eforlu ve yüksek görünürlüklü bir performans kazancıdır: yorumları, boşlukları ve gereksiz sözdizimini kaldırın; gzip devreye girmeden önce bile %15–30 daha küçük boyut elde edersiniz. 2026'da evrensel hale gelen gzip sonrasında ek kazanç daha küçüktür, ancak asıl değer daha erken ilk boyamadadır—kritik CSS yolundaki her milisaniye önemlidir. Bu kılavuz, küçültmenin gerçekte ne yaptığını, küçültme ile sıkıştırma arasındaki farkı, daha agresif optimizasyonlara (temizleme, kritik CSS, satır içine alma) ne zaman başvurulacağını ve bunu düşünmeden yapmanızı sağlayan derleme hatlarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Küçültme gerçekte ne yapar</h2>
    <p>
      CSS küçültücüler bir dizi güvenli metin dönüşümü uygular:
    </p>
    <p>
      <strong>Boşlukları kaldırma:</strong> sekmeler, fazladan boşluklar, satır sonları.
    </p>
    <p>
      <strong>Yorumları kaldırma:</strong> /* ... */ blokları.
    </p>
    <p>
      <strong>Hex renkleri kısaltma:</strong> #ffffff → #fff, #ff00aa → #f0a.
    </p>
    <p>
      <strong>Gereksiz birimleri kaldırma:</strong> 0px → 0. Sıfırın birimi yoktur.
    </p>
    <p>
      <strong>Belirsiz olmadığında tırnak işaretlerini kaldırma:</strong> font-family:
      &ldquo;Arial&rdquo; → font-family: Arial (boşluk yoksa).
    </p>
    <p>
      <strong>Kuralları birleştirme:</strong> yinelenen seçicileri birleştirir, gereksiz bildirimleri daraltır.
    </p>
    <p>
      <strong>Uzun yazılışlı özellikleri kısaltma:</strong> margin-top: 10px;
      margin-right: 10px... → margin: 10px 10px 10px 10px → margin:
      10px.
    </p>
    <p>
      İyi bir küçültücü, ham CSS'den %20–40 oranında tasarruf sağlar. Kesin sayı, kaynağın ne kadar ayrıntılı olduğuna bağlıdır.
    </p>

    <h2>Küçültme vs. gzip vs. brotli</h2>
    <p>
      Bunlar alternatif değildir—üst üste bindirilmiş yöntemlerdir.
    </p>
    <p>
      <strong>Küçültme</strong>, daha küçük bir kaynak üreten bir metin dönüşümüdür. Derleme zamanında bir kez yapılır.
    </p>
    <p>
      <strong>Gzip</strong> / <strong>Brotli</strong>, sunucunuzun her istekte uyguladığı kayıpsız sıkıştırma yöntemleridir. Gzip, metni %70–85 oranında azaltır; Brotli, CSS'de gzip'ten tipik olarak %5–15 daha iyidir.
    </p>
    <p>
      <strong>Gzip'ten önce küçültmek buna değer mi?</strong> Evet, biraz.
      Küçültme, gzip'in zaten iyi işlediği yorumların, tekrarlanan boşlukların ve kullanılmayan belirteçlerin boyutunu azaltır, ancak aynı zamanda gzip'in kullanması için daha fazla kural arası benzerlik ortaya çıkarır. Gzip sonrası net kazanç ~%3–8'dir.
    </p>
    <p>
      Küçültmenin gerçek değeri gzip'lenmiş boyut değildir—daha hızlı ayrıştırma süresi, gzip olmayan yollarda (bazı CDN uç durumları) daha hızlı aktarım ve stillerin uygulanmasından önce bir tur daha az iletişim için daha küçük kaynaktır.
    </p>

    <h2>Küçültmenin ötesinde—daha yüksek etkili kazançlar</h2>
    <p>
      Küçültme %20–40'tır. Daha büyük kazançlar:
    </p>
    <p>
      <strong>Kullanılmayan CSS'i temizleme.</strong> Tailwind JIT, PurgeCSS, UnoCSS, sayfalarınızın kullanmadığı kuralları kaldırır. 200 KB Bootstrap'ten yalnızca kullanılan CSS'in 15 KB'ına inmek, herhangi bir küçültmeden önce %90'lık bir kesintidir.
    </p>
    <p>
      <strong>Kritik CSS'i satır içine alma.</strong> Ekranın üst kısmında görünen içeriği oluşturmak için gereken stilleri çıkarın ve bunları &lt;head&gt; içine satır içi olarak ekleyin. Gerisini erteleyin. Oluşturmayı engelleyen bir isteği ortadan kaldırır; <a href="/learn/lcp">LCP</a>'yi tipik olarak 200–800ms iyileştirir.
    </p>
    <p>
      <strong>HTTP/2 sunucu itmesi—bundan kaçının.</strong> 2016–2019 arasında popülerdi ancak Chrome'dan kaldırıldı ve kullanımdan kaldırıldı. Bunun yerine kaynak ipuçlarını (preload, preconnect) kullanın.
    </p>
    <p>
      <strong>Kritik olmayan stil sayfalarını tembel yükleme:</strong>
      <code> &lt;link rel=&ldquo;stylesheet&rdquo; href=&ldquo;non-
      critical.css&rdquo; media=&ldquo;print&rdquo; onload=&ldquo;
      this.media=&lsquo;all&rsquo;&rdquo;&gt;</code>. İlk boyamayı engellemez.
    </p>
    <p>
      <strong>Oluşturmayı engelleyen yazı tiplerini ortadan kaldırma.</strong>
      <code>font-display: swap</code>, web yazı tipi yüklenene kadar bir yedek yazı tipi gösterir. Yazı tipi indirme sırasında görünmez metni önler.
    </p>

    <h2>Derleme hattı—bir kez ayarlayın</h2>
    <p>
      Küçültmeyi manuel olarak yapmak boşa harcanmış efordur. Derlemenize entegre edin.
    </p>
    <p>
      <strong>Next.js, Vite, Astro, Nuxt</strong> üretim derlemelerinde CSS'i varsayılan olarak küçültür. Yapılandırma gerekmez.
    </p>
    <p>
      <strong>Özel hatlar için PostCSS + cssnano.</strong> <code>npm
      install -D cssnano</code> → postcss.config.js dosyasına ekleyin. Makul varsayılanlarla neredeyse optimum CSS üretir.
    </p>
    <p>
      <strong>esbuild</strong>, CSS'i JS ile birlikte çok yüksek hızda küçültür. Monorepolar ve büyük kod tabanları için iyidir.
    </p>
    <p>
      <strong>LightningCSS</strong> (Rust tabanlı, cssnano için birebir değiştirme): 30–100× daha hızlıdır, modern CSS özelliklerini işler. Daha yeni Parcel ve Next.js kurulumlarında varsayılandır.
    </p>

    <h2>CDN ve önbelleğe alma—çarpan etkileri</h2>
    <p>
      CDN ucunda önbelleğe alınmış küçük bir CSS dosyası, sonraki her kullanıcı için anında teslimattır.
    </p>
    <p>
      <strong>Dosya adında içerik karması:</strong> styles.a7f3b2.css. max-age=31536000 (bir yıl) ayarlamanızı sağlar çünkü içerik değiştiğinde URL değişir. Sonsuz önbelleğe alma, sıfır bayatlık.
    </p>
    <p>
      <strong>HTTP/2 çoğullama:</strong> ayrı CSS dosyası HTML/JS ile paralel olarak yüklenir. Birden çok stil sayfasına yardımcı olur (ancak tek bir büyük küçültülmüş dosya genellikle birçok küçük dosyayı yener; dosya başına 5–10 KB'ın altında ayrıştırma yükü baskın hale gelir).
    </p>

    <h2>Ölçüm—nereye bakmalı</h2>
    <p>
      <strong>Lighthouse:</strong> &ldquo;Oluşturmayı engelleyen kaynakları ortadan kaldırın&rdquo;, &ldquo;CSS'i küçültün&rdquo; ve &ldquo;Kullanılmayan CSS'i kaldırın&rdquo; için özel denetimler. Her dağıtımda çalıştırın.
    </p>
    <p>
      <strong>WebPageTest:</strong> şelale görünümü, CSS'in oluşturmayı ne zaman ve ne kadar süreyle engellediğini tam olarak gösterir.
    </p>
    <p>
      <strong>Chrome DevTools Kapsam sekmesi:</strong> bir sayfayı yükler ve her CSS dosyasının gerçekte ne kadarının kullanıldığının yüzdesini söyler. Bir Bootstrap sitesi genellikle %5–15 kapsam gösterir—geri kalanı temizleme malzemesidir.
    </p>
    <p>
      <strong><a href="/learn/core-web-vitals">Search Console'da Temel Web Verileri</a>:</strong> CSS optimizasyonundan kaynaklanan LCP iyileştirmeleri, &ldquo;İyi&rdquo; sayfa sayıları arttıkça burada görünür.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Küçültülmüş CSS'i manuel olarak sürdürmek.</strong> Kaynağı her zaman sürümleyin; derleme aracının küçültmesine izin verin. Küçültülmüş dosyayı asla düzenlemeyin.
    </p>
    <p>
      <strong>Geliştirme ortamında küçültme.</strong> Hata ayıklaması zordur. Kaynak haritaları kullanın; küçültülmüş CSS'i yalnızca üretimde haritalar olmadan gönderin.
    </p>
    <p>
      <strong>&ldquo;Dinamik sınıfları bozuyor&rdquo; diye PurgeCSS'i atlamak.</strong> Dinamik olarak oluşturulan sınıf adları için güvenli liste yapılandırması kullanın. Yine de diğer her şeyi temizleyin.
    </p>
    <p>
      <strong>Çok fazla kritik CSS'i satır içine almak.</strong> Satır içi bütçe 14 KB'dir (bir TCP gidiş-dönüşü). Bundan fazlası HTML'i hızlandırmak yerine geciktirmeye başlar.
    </p>
    <p>
      <strong>Mimari temizlik için birçok küçük stil sayfası.</strong> Her isteğin bir yükü vardır. Birleştirin, ardından küçültün, ardından sunun. Sayfa başına bir CSS dosyası iyidir; bileşen başına bir tane genellikle üretim için çok ayrıntılıdır.
    </p>

    <h2>NE küçültülmemeli</h2>
    <p>
      <strong>Deponuzdaki kaynak dosyalar.</strong> Her zaman derlemede küçültün, kaynakta değil.
    </p>
    <p>
      <strong>Markdown / MDX içeriği.</strong> İçerik kod değildir; okunabilir tutun.
    </p>
    <p>
      <strong>Geliştirme sırasında kütüphane CSS'i.</strong> Yığın izlerini hata ayıklanabilir tutar. Yalnızca üretim derlemesinde küçültün.
    </p>
    <p>
      <strong>Performans bütçesinin zaten gerisinde kaldığınızda.</strong> 200 KB'lık bir CSS paketini 150 KB'a küçültmek, bir domuzu rujlamaktır. Önce temizleyin, sonra küçültün.
    </p>

    <h2>Rakamları görün</h2>
    <p>
      CSS yapıştırın ve küçültülmüş çıktıyı anında{" "}
      <a href="/tools/css-minifier">CSS küçültücü</a> ile görün. JavaScript'i aynı şekilde sıkıştırmak için{" "}
      <a href="/tools/js-minifier">JS küçültücü</a> ile eşleştirin ve işaretlemeyi diğer yönde temizlerken{" "}
      <a href="/tools/html-formatter">HTML biçimlendirici</a> kullanın.
    </p>
  </>
);