import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Favicon, sitenizin tarayıcı sekmesinde, yer imi çubuğunda, arama sonuçlarında, push bildirimlerinde ve uygulama simgesinde sahip olduğu 16×16 piksellik penceredir. Bir üründeki en küçük tasarım sorunlarından biridir — ve en görünür olanlarından. İyi bir favicon 16 pikselde tanınabilir ve 512 piksele temiz bir şekilde ölçeklenir. Kötü bir favicon ise kimsenin tanıyamayacağı bulanık, küçültülmüş bir logodur. Bu kılavuz, 2026'da gerçekten ihtiyacınız olan boyutları, piksel düzeyinde işlemeye dayanan tasarım ilkelerini, hangi dosya formatlarını kullanacağınızı ve her platformu mutlu eden HTML etiketlerini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Favicon neden göründüğünden daha önemlidir</h2>
    <p>
      Kullanıcılar tarayıcı sekmelerini metinden önce şekil ve renge göre tarar. Tanınabilir bir favicon, sekme tanımlama süresini ~1,5 saniyeden (sekme başlığını okuma) ~0,2 saniyeye (desen eşleştirme) düşürür. Çok sekmeli kullanıcılar için bu, günde dakikalara birikir.
    </p>
    <p>
      Ayrıca şuralarda da görünür: yer imi çubukları, geçmiş, arama motoru sonuçları (Google, mobil sonuçlarda favicon gösterir), push bildirimleri, PWA simgeleri, iOS/Android ana ekranına ekleme. Tüm bu bağlamlar için tek bir görüntü setiyle tasarım yapıyorsunuz.
    </p>

    <h2>Gerçekten ihtiyacınız olan boyutlar</h2>
    <p>
      2026'da eksiksiz bir favicon seti şunları kapsar:
    </p>
    <p>
      <strong>16×16 PNG</strong> — tarayıcı sekmesi (klasik).
    </p>
    <p>
      <strong>32×32 PNG</strong> — retina tarayıcı sekmesi, Windows görev çubuğu.
    </p>
    <p>
      <strong>48×48 PNG</strong> — Windows görev çubuğu yüksek DPI, ARIA.
    </p>
    <p>
      <strong>180×180 PNG</strong> (apple-touch-icon) — iOS ana ekranına ekleme, Safari sabitlenmiş sekme.
    </p>
    <p>
      <strong>192×192 PNG</strong> — Android ana ekranı, PWA.
    </p>
    <p>
      <strong>512×512 PNG</strong> — PWA açılış ekranı, Android uyarlanabilir simgeler.
    </p>
    <p>
      <strong>favicon.ico</strong> (çok boyutlu ICO) — eski tarayıcılar, masaüstü kısayolları. İçine 16 + 32 + 48 boyutlarını birleştirin.
    </p>
    <p>
      <strong>SVG</strong> — destekleyen tarayıcılar için vektör tabanlı sekme simgesi (Firefox, Safari, Chrome, Edge). Sonsuza kadar ölçeklenir.
    </p>
    <p>
      Artık eski 30+ Apple/Windows döşeme simgelerine ihtiyacınız yok; modern platformlar bunları yukarıdakilerden türetir. Favicon.io ve favicon oluşturucumuz, tek bir kaynak görüntüden tüm seti üretir.
    </p>

    <h2>Tasarım ilkeleri — 16 pikselde ne işe yarar</h2>
    <p>
      <strong>Basitlik zorunludur.</strong> 16×16 bir görüntüde toplam 256 piksel bulunur. Ayrıntılı logolar bulanıklaşır. Güçlü bir öğe seçin — bir harf, geometrik bir şekil, basitleştirilmiş bir monogram.
    </p>
    <p>
      <strong>Yüksek kontrast.</strong> Faviconlar açık ve koyu tarayıcı kromunda görüntülenir. Her ikisinde de test edin. Beyaz zemin üzerinde beyaz bir logo, açık mod bir sekmede görünmez.
    </p>
    <p>
      <strong>Güçlü siluet.</strong> Favicona gözlerinizi kısarak bakın. Şeklinin ne olduğunu anlayamıyorsanız, bir sekmede de okunmayacaktır.
    </p>
    <p>
      <strong>İnce çizgilerden kaçının.</strong> 16×16'da, 1 piksellik bir kontur ya vardır ya da yoktur — düzgün ölçekleme yoktur. Rasterleştirmeye dayanacak kalın, cesur konturlar kullanın.
    </p>
    <p>
      <strong>Sadece logonuzu değil, marka renginizi kullanın.</strong> Tek harfli renkli bir kare, genellikle küçültülmüş bir logodan daha iyi çalışır.
    </p>
    <p>
      <strong>Tuvali doldurun.</strong> Güvenli alan boşluğu olan uygulama simgelerinin aksine, faviconlar kenarlara yakın doldurulmalıdır. Boşluk, 16×16'da pikselleri boşa harcar.
    </p>

    <h2>İşe yarayan renk stratejileri</h2>
    <p>
      <strong>Renkli arka planda tek harf:</strong> Gmail, Notion, Linear, Vercel. Basit, tanınabilir, her boyutta ayırt edici.
    </p>
    <p>
      <strong>Geometrik işaret:</strong> Stripe'ın / işareti, Slack'in hashtag'i, GitHub'ın octocat'i. Şekil öncelikli tanıma.
    </p>
    <p>
      <strong>Renk + sembol:</strong> YouTube'un kırmızı oynatma üçgeni. Renk ağır işi yapar; sembol onaylar.
    </p>
    <p>
      <strong>Fotogerçekçi ayrıntılardan kaçının.</strong> Gölgeler, ince varyasyonlara sahip gradyanlar, kabartmalı metin — küçük boyutlarda tamamen kaybolur.
    </p>

    <h2>Karanlık mod dikkat edilmesi gerekenler</h2>
    <p>
      Tarayıcı sekmelerinde açık mod ve karanlık mod kromu bulunur. Şeffaf arka plana sahip koyu renkli bir favicon, koyu kromda kaybolur; açık renkli bir favicon ise açık kromda kaybolur.
    </p>
    <p>
      <strong>Seçenek 1:</strong> her ikisinde de çalışan düz bir arka plan kullanın. Çoğu marka rengi işe yarar.
    </p>
    <p>
      <strong>Seçenek 2:</strong> kullanıcı renk düzenine yanıt veren medya sorgulu SVG favicon. Modern tarayıcı SVG faviconları gerektirir:
    </p>
    <p>
      <code>@media (prefers-color-scheme: dark) {`{ path { fill: white; } }`}</code>
    </p>
    <p>
      SVG'nin kendisine gömülüdür. Destekleyen tarayıcılar buna uyar; diğerleri varsayılan SVG işlemeye geri döner.
    </p>

    <h2>HTML etiketleri — neler eklenmeli</h2>
    <p>
      &lt;head&gt; bölümünüzde:
    </p>
    <p>
      <strong>&lt;link rel=&ldquo;icon&rdquo; type=&ldquo;image/x-icon&rdquo; href=&ldquo;/favicon.ico&rdquo;&gt;</strong> — eski sistemler için yedek.
    </p>
    <p>
      <strong>&lt;link rel=&ldquo;icon&rdquo; type=&ldquo;image/png&rdquo; sizes=&ldquo;32×32&rdquo; href=&ldquo;/favicon-32x32.png&rdquo;&gt;</strong> — modern tarayıcılar, yüksek DPI ekranlar.
    </p>
    <p>
      <strong>&lt;link rel=&ldquo;apple-touch-icon&rdquo; sizes=&ldquo;180×180&rdquo; href=&ldquo;/apple-touch-icon.png&rdquo;&gt;</strong> — iOS ana ekranına ekleme.
    </p>
    <p>
      <strong>&lt;link rel=&ldquo;manifest&rdquo; href=&ldquo;/site.webmanifest&rdquo;&gt;</strong> — içinde 192/512 simgeleri referans alan PWA meta verileri.
    </p>
    <p>
      <strong>&lt;meta name=&ldquo;theme-color&rdquo; content=&ldquo;#1e293b&rdquo;&gt;</strong> — Android tarayıcı krom rengi, PWA açılış ekranı.
    </p>

    <h2>site.webmanifest dosyası</h2>
    <p>
      PWA'lara ve Android Chrome'a sitenizi yüklenebilir bir uygulama olarak nasıl işleyeceğini söyleyen bir JSON dosyası:
    </p>
    <p>
      <code>
        {`{ "name": "Free Tool Arena", "short_name": "FTA", "icons": [ { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" }, { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" } ], "theme_color": "#0f172a", "background_color": "#ffffff", "display": "standalone" }`}
      </code>
    </p>
    <p>
      short_name'i 12 karakterin altında tutun — Android ana ekran ızgarasında görünen budur.
    </p>

    <h2>Test etme — faviconların sessizce başarısız olduğu yerler</h2>
    <p>
      <strong>Tarayıcı sekmeleri.</strong> Siteyi Chrome, Safari, Firefox'ta açın — hem açık hem de karanlık mod kromunda.
    </p>
    <p>
      <strong>Yer imi çubuğu.</strong> Bir yer imini sürükleyin. Metin olmadan okunabiliyor mu?
    </p>
    <p>
      <strong>Google arama sonuçları.</strong> Mobil Google, sonuçların yanında favicon gösterir. Çeşitli yakınlaştırma seviyelerinde test edin.
    </p>
    <p>
      <strong>iOS ana ekranına ekleme.</strong> Safari &rarr; Paylaş &rarr; Ana Ekrana Ekle. Simge keskin mi? Doğru şekilde dolgulu mu? iOS tarafından otomatik olarak yuvarlanır.
    </p>
    <p>
      <strong>Android ana ekranına ekleme.</strong> Chrome &rarr; Uygulamayı Yükle. Uyarlanabilir simgeler, güvenli alanı bilen 512×512 gerektirir.
    </p>
    <p>
      <strong>Gerçek cihazlar, sadece simülatörler değil.</strong> Ölçekleme algoritmaları farklılık gösterir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Ayrıntılı bir logoyu küçültmek.</strong> Ayrıntılı logolar 16×16'da lapa haline gelir. Küçük boyutlar için özel olarak basitleştirilmiş bir işaret oluşturun.
    </p>
    <p>
      <strong>Açık kromda şeffaf arka plan.</strong> Karanlık mod için tasarlanmış, açık tarayıcı sekmesinde görünmez.
    </p>
    <p>
      <strong>Eksik apple-touch-icon.</strong> iOS, genellikle kötü görünen sitenin bir ekran görüntüsüne geri döner.
    </p>
    <p>
      <strong>Sadece .ico göndermek.</strong> Eski sistem. Modern tarayıcılar belirli boyutlarda PNG'leri tercih eder. ICO, ana varlık değil, bir yedek olarak kalır.
    </p>
    <p>
      <strong>Güncellemeleri sürümlememek.</strong> Tarayıcılar faviconları agresif bir şekilde önbelleğe alır. Dosyayı önbellek temizleme olmadan güncellemek, kullanıcıların haftalarca eski simgeyi görmesi anlamına gelir. Değiştirirken href'e ?v=2 ekleyin.
    </p>
    <p>
      <strong>Manifest dosyasını görmezden gelmek.</strong> PWA yüklemesi ve Android ana ekranı buna bağlıdır. Eksik manifest = eksik yükleme istemi.
    </p>

    <h2>Bir tasarımcı ne zaman işe alınmalı</h2>
    <p>
      Markayı tanımlayan işaretler için bir tasarımcıyla çalışın veya yerleşik tipografi/ikonografi kullanın. Hızlı MVP veya dahili araçlar için, iyi bir yazı tipine sahip marka renginde bir kare üzerinde tek harfli bir monogram tamamen profesyoneldir. Çoğu ürün için "hemen yayınla", "3 haftada özel illüstrasyon"dan daha iyidir.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Tek bir kaynak görüntüden eksiksiz bir favicon seti (16, 32, 180, 192, 512 + ICO) oluşturmak için{" "}
      <a href="/tools/favicon-generator">favicon oluşturucuyu</a> kullanın. İşaretinizin küçültmeye nasıl dayandığını önizlemek için{" "}
      <a href="/tools/image-resizer">görüntü yeniden boyutlandırıcı</a> ile ve SVG'yi PNG ana dosyalarına dönüştürürken{" "}
      <a href="/tools/image-format-converter">görüntü formatı dönüştürücü</a> ile eşleştirin.
    </p>
  </>
);