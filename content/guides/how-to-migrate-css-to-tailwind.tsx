import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Tailwind daha az CSS ve daha hızlı iterasyon vaat ediyor, ancak mevcut bir stil sayfasını taşımak çoğu ekibin takıldığı nokta. Yanlış yaklaşımı seçerseniz, aylarınızı ölü CSS dosyalarının yanında bir yığın yardımcı sınıfla uğraşarak geçirirsiniz. Bu rehber, işe yarayan taşıma stratejilerini (büyük patlama vs bileşen bazında vs yardımcıları birlikte konumlandırma), tasarım tokenlarınızı korumak için gereken yapılandırmayı, iç içe seçiciler / sözde sınıflar / medya sorguları ile nasıl başa çıkılacağını, bileşen kütüphaneleriyle çalışmayı, yaygın hataları ve dönüşümü hızlandıran araçları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>İlk olarak, taşıma şeklinize karar verin</h2>
    <p>
      Üç uygulanabilir yol vardır. Yanlış olanı seçmek, acının ana kaynağıdır.
    </p>
    <p>
      <strong>Büyük patlama (tüm CSS'i bir kerede yeniden yazma):</strong> en hızlı bitiş, en yüksek risk. Sadece küçük kod tabanları (&lt;5k satır CSS) veya yeni projeler için çalışır.
    </p>
    <p>
      <strong>Yardımcıları eski CSS ile birlikte konumlandırma:</strong> Tailwind'i ekleyin, yeni bileşenlerde kullanmaya başlayın, mevcut olanlara dokunmayın. Düşük risk, yavaş bitiş, kayma potansiyeli. Amaç "yeni CSS yazmayı bırakmak" ise "tüm CSS'i silmek" değilse uygundur.
    </p>
    <p>
      <strong>Bileşen bazında:</strong> bir bileşen seçin, tamamen dönüştürün (özel CSS'ini kaldırın, yardımcılarla değiştirin), doğrulayın, devam edin. En iyi denge. En başarılı taşımalar bunu kullanır.
    </p>
    <p>
      Birini seçin ve tutarlı olun. Disiplin olmadan stratejileri karıştırmak, her yerde yarı bitmiş bileşenlere yol açar.
    </p>

    <h2>Mevcut tasarım tokenlarınızla eşleşecek şekilde yapılandırın</h2>
    <p>
      Tailwind varsayılanlarını körü körüne kullanmayın. Mevcut renklerinizi, boşluk ölçeğinizi, yazı tipi boyutlarınızı ve breakpoint'lerinizi{" "}
      <code>tailwind.config.js</code> dosyasına eşleyin:
    </p>
    <pre>
{`module.exports = {
  theme: {
    extend: {
      colors: {
        brand: { 50: '#f0f9ff', 500: '#3b82f6', 900: '#1e3a8a' },
        // mevcut --color-* tokenlarınızdan
      },
      spacing: {
        18: '4.5rem',  // farklı değerleriniz varsa
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '475px',  // özel breakpoint'leriniz varsa
      },
    },
  },
};`}
    </pre>
    <p>
      Bu tek adım, binlerce bul ve değiştir işlemini kurtarır. Yardımcı sınıflarınız artık tokenlarınızı yansıtır, böylece <code>bg-brand-500</code>
      {" "}tam olarak tasarım sisteminizin söylediği anlama gelir.
    </p>

    <h2>İç içe seçicileri dönüştürün</h2>
    <p>
      <code>.card &gt; .title &#123; color: blue; &#125;</code> gibi iç içe CSS, doğrudan alt öğe üzerindeki yardımcı sınıflara dönüşür.
    </p>
    <pre>
{`/* Önce */
.card { padding: 1rem; border: 1px solid gray; }
.card > .title { font-weight: 600; color: blue; }

/* Sonra */
<div class="p-4 border border-gray-300">
  <h3 class="font-semibold text-blue-600">...</h3>
</div>`}
    </pre>
    <p>
      Basamaklar yerine öğeler halinde düşünün. Bu en büyük zihniyet değişikliğidir.
    </p>

    <h2>Sözde sınıflar ve durumlar</h2>
    <p>
      Tailwind varyant öneklerini kullanır:
    </p>
    <pre>
{`/* Önce */
.button:hover { background: darkblue; }
.button:focus { outline: 2px solid blue; }
.button:disabled { opacity: 0.5; }

/* Sonra */
<button class="bg-blue-500 hover:bg-blue-700 focus:outline-2 focus:outline-blue-500 disabled:opacity-50">`}
    </pre>
    <p>
      Varyantları özgürce birleştirin: <code>md:hover:bg-gray-100</code>{" "}
      "orta+ ekranlarda, fareyle üzerine gelindiğinde" anlamına gelir. Sıralama yalnızca okunabilirlik için önemlidir — Tailwind onları doğru şekilde işler.
    </p>

    <h2>Medya sorguları → duyarlı önekler</h2>
    <p>
      Tailwind'in duyarlı önekleri mobil önceliklidir.{" "}
      <code>md:</code> = "768px ve üzeri",{" "}
      <code>lg:</code> = "1024px ve üzeri".
    </p>
    <pre>
{`/* Önce */
.layout { display: block; }
@media (min-width: 768px) { .layout { display: flex; } }

/* Sonra */
<div class="block md:flex">`}
    </pre>
    <p>
      Maksimum genişlik sorguları <code>max-*</code> varyantlarını kullanır (Tailwind 3.0+). Mobil öncelikli düşünürseniz onlara pek ihtiyacınız olmaz.
    </p>

    <h2>Bileşen kütüphaneleriyle başa çıkma</h2>
    <p>
      Bootstrap, Material UI veya benzerini kullanıyorsanız, ilk günden onları sökmeyin. Önce yaprak bileşenleri taşıyın (kendi butonlarınız, kartlarınız, düzenleriniz). Kendi stilleriniz oturduktan sonra, Tailwind tabanlı bileşen kütüphanelerine (shadcn/ui, Radix + Tailwind, Headless UI) geçin.
    </p>
    <p>
      Bazı kütüphaneler Tailwind'in temel sıfırlamasıyla çakışır (kenar boşluklarını, liste stillerini vb. sıfırlar). Tailwind'in preflight'unu kapsamlayın veya yapılandırmada erişimini sınırlamak için bir kök seçici ekleyin.
    </p>

    <h2>Tekrarlanan desenleri çıkarın</h2>
    <p>
      <code>class=&ldquo;flex items-center px-4 py-2 bg-blue-500 text-white rounded&rdquo;</code> her yerde göründüğünde, onu çıkarın. Seçenekler:
    </p>
    <p>
      <strong>Bileşen:</strong> <code>&lt;Button variant=&ldquo;primary&quot;&gt;</code>
      {" "}— React/Vue/Svelte uygulamaları için en iyisi. Yardımcı sınıflar tek bir dosyada yerel kalır.
    </p>
    <p>
      <strong>@apply yönergesi:</strong> bir CSS dosyasında{" "}
      <code>.btn-primary &#123; @apply flex items-center ...; &#125;</code> yazın. Bileşen olmayan kod tabanları için kullanışlıdır ancak yardımcı-ilk yaklaşımını bir şekilde bozar. Az kullanın.
    </p>
    <p>
      <strong>Tailwind eklentisi:</strong> <code>addComponents()</code> ile özel bileşenler kaydedin. Her yerde kullanılan tasarım sistemi temelleri için iyidir.
    </p>

    <h2>Dinamik sınıf adlarını yönetin</h2>
    <p>
      Tailwind, kaynak dosyaları sınıf dizeleri için tarayarak sınıfları derler. Dinamik birleştirme bunu bozar:
    </p>
    <pre>
{`// Kötü — Tailwind kaynakta 'bg-red-500'ü göremez
<div className={\`bg-\${color}-500\`}>

// İyi — kaynakta tam sınıf adları
<div className={color === 'red' ? 'bg-red-500' : 'bg-blue-500'}>

// Ayrıca iyi — yapılandırmada güvenli liste
// tailwind.config.js: safelist: ['bg-red-500', 'bg-blue-500']`}
    </pre>
    <p>
      Bu, "sınıfım neden çalışmıyor" hata raporlarının 1 numaralı kaynağıdır.
    </p>

    <h2>Kalan global stiller</h2>
    <p>
      Bazı stiller temiz bir şekilde dönüşmez:
    </p>
    <p>
      <strong>Karmaşık animasyonlar</strong> birçok anahtar kareyle — CSS olarak tutun, Tailwind'in{" "}
      <code>animate-*</code> uzantısı aracılığıyla referans verin.
    </p>
    <p>
      <strong>Yazdırma stilleri</strong> — Tailwind artık{" "}
      <code>print:</code> varyantını destekliyor, ancak karmaşık yazdırma CSS'i genellikle ayrı kalır.
    </p>
    <p>
      <strong>Üçüncü taraf gömülü stiller</strong> (işaretleme içeriği, CMS'den zengin metin) —{" "}
      <code>@tailwindcss/typography</code> eklentisini kullanın veya ayrı bir içerik stil sayfası tutun.
    </p>

    <h2>Dönüşümden sonra ölü CSS'i temizleyin</h2>
    <p>
      Ödül: eski CSS'i silin. Bunu sonunda değil, bileşen bazında yapın. Adımlar:
    </p>
    <p>
      1. Bileşeni Tailwind yardımcılarına dönüştürün.
    </p>
    <p>
      2. Şablondan sınıf adlarını kaldırın.
    </p>
    <p>
      3. Eşleşen CSS kurallarını silin.
    </p>
    <p>
      4. Uygulamayı çalıştırın; görsel olarak doğrulayın.
    </p>
    <p>
      5. Bileşeni ve CSS silme işlemini birlikte commit'leyin.
    </p>
    <p>
      CSS'i silmek için "her şey dönüştürülene kadar" beklerseniz, silmezsiniz.
    </p>

    <h2>Derleme boyutu ve performans</h2>
    <p>
      Modern Tailwind (3.0+) JIT derlemesi kullanır — yalnızca kullandığınız sınıfları oluşturur. Üretim CSS'i tipik olarak 10-50KB'dir. 500KB özel CSS'e sahip eski kod tabanları, taşıma sonrası genellikle 30KB'nin altına düşer.
    </p>
    <p>
      <code>npx tailwindcss -i in.css -o out.css --minify</code> ile kontrol edin — önceki ve sonraki dosya boyutlarını karşılaştırın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Aynı öğede hem eski CSS'i hem de Tailwind'i tutmak.</strong> Özgüllük savaşları. Yeni sınıflar eklerken eskilerini kaldırın, commit başına.
    </p>
    <p>
      <strong>30 yardımcı sınıfı satır içine almak.</strong> Bir noktada, bir bileşene çıkarın. ~15'ten uzun yardımcı zincirleri bir sorun işaretidir.
    </p>
    <p>
      <strong>Tailwind'in preflight'unu görmezden gelmek.</strong> Temel sıfırlaması varsayılan kenar boşluklarını/liste stillerini/buton stilini kaldırır. Etkinleştirdikten sonra düzenlerinizi kontrol edin.
    </p>
    <p>
      <strong>!important ile geçersiz kılmak.</strong> Tailwind <code>!</code> önekini sağlar (<code>!bg-red-500</code>). Son derece az kullanın — gerçek çözüm genellikle kaynak sırasıdır.
    </p>
    <p>
      <strong>İçerik glob'unu yapılandırmamak.</strong> Tailwind yalnızca <code>content: [...]</code> içinde listelenen dosyaları tarar. Eksik <code>.mdx</code> veya <code>.svelte</code> dosyaları, sınıfların üretimde kaybolması anlamına gelir.
    </p>
    <p>
      <strong>Taşımayı %100 yardımcı kapsamı olarak görmek.</strong>
      {" "}Karmaşık animasyonlar, yazdırma stilleri, üçüncü taraf içerik — biraz CSS bırakmak sorun değil.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Mevcut CSS kurallarını Tailwind yardımcı sınıflarına dönüştürmek için{" "}
      <a href="/tools/css-to-tailwind">CSS'den Tailwind'e dönüştürücüyü</a> kullanın. Sakladığınız eski stilleri göndermek için{" "}
      <a href="/tools/css-minifier">CSS küçültücü</a> ve Tailwind'in kutu dışında kapsamadığı akışkan değerler için{" "}
      <a href="/tools/css-clamp-generator">CSS clamp oluşturucu</a> ile eşleştirin.
    </p>
  </>
);