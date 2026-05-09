import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      SVG'ler vektör görüntülerdir: sonsuz ölçeklenebilir, basit olduklarında küçük boyutludur ve tarayıcılarda ve modern tasarım araçlarında logolar, simgeler ve diyagramlar için mükemmeldir. Ancak sosyal medya yüklemeleri, e-posta, Office belgeleri, eski yazılımlar, baskı sağlayıcıları gibi birçok hedef raster piksel ister. SVG'yi PNG'ye dönüştürmek kolay görünür, ancak çıktı çözünürlüğünü doğru ayarlamak, saydamlığı korumak ve pürüzlü kenarlardan kaçınmak biraz düşünme gerektirir. Bu kılavuz, PNG çıktısına gerçekten ne zaman ihtiyacınız olduğunu, dışa aktarma boyutunun nasıl seçileceğini, sonucu başarılı veya başarısız kılan saydamlık ve kenar yumuşatma ayrıntılarını ve SVG'yi olduğu gibi bırakmanın daha akıllıca bir hareket olduğu durumları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Vektör ve raster tek cümlede</h2>
    <p>
      Vektörler, şekilleri (çizgiler, eğriler, dolgular) matematiksel olarak tanımlar ve herhangi bir boyutta işlenir; rasterler ise sabit bir çözünürlükte renkli piksellerden oluşan bir ızgarayı tanımlar. Bir vektörü büyütün, net kalır; bir rasteri büyütün, bulanık veya pürüzlü hale gelir.
    </p>
    <p>
      SVG vektördür; PNG rasterdir. SVG'yi PNG'ye dönüştürmek, bu PNG için sabit bir çözünürlük seçer ve piksel ızgarasını bu boyutta kilitler.
    </p>

    <h2>PNG'ye gerçekten ne zaman ihtiyacınız var</h2>
    <p>
      SVG çoğu modern web bağlamında daha iyidir, ancak PNG şu durumlarda kazanır:
    </p>
    <ul>
      <li><strong>Sosyal medya yüklemeleri</strong> &mdash; neredeyse hiçbir platform SVG'yi kabul etmez.</li>
      <li><strong>E-posta imzaları ve HTML e-postaları</strong> &mdash; Outlook ve birçok istemci SVG'yi kaldırır.</li>
      <li><strong>Office ve PDF belgeleri</strong> &mdash; raster, sürümler arasında daha güvenilir bir şekilde yapıştırılır.</li>
      <li><strong>Simgeler (favicon)</strong> &mdash; tarihsel olarak ICO veya PNG; SVG simgeler moderndir ancak evrensel değildir.</li>
      <li><strong>Baskı sağlayıcıları ve fotoğraf laboratuvarları</strong> &mdash; belirtilen DPI'da raster bekler.</li>
      <li><strong>Eski veya kısıtlayıcı CMS'ler</strong> &mdash; güvenlik nedenleriyle SVG'yi engeller.</li>
    </ul>
    <p>
      Bu kategorilerden birinde değilseniz, SVG olarak bırakın.
    </p>

    <h2>Çıktı çözünürlüğünü seçme</h2>
    <p>
      SVG'yi PNG'ye dönüştürürken en büyük karar, çıktı piksel boyutudur. Kendinize sorun: Bu görüntünün en büyük görüntülenme boyutu piksel cinsinden ne kadar olacak?
    </p>
    <p>
      Asla daha büyük görüntülenmeyecek 40&nbsp;piksellik bir simge için, 80&nbsp;px (retina için 2&times;) veya 120&nbsp;px (yeni telefonlar için 3&times;) olarak dışa aktarın. 1440p monitörde 500&nbsp;px genişliğinde bir kahraman görüntüsü olarak görünebilecek bir logo için, 1000&nbsp;px veya 1500&nbsp;px olarak dışa aktarın. 2 inç genişliğinde, 300 DPI'da bir baskı logosu için: 600&nbsp;px genişlik.
    </p>
    <p>
      Emin değilseniz, büyük boyutta dışa aktarın. Tarayıcıda bir PNG'yi küçültmek iyi görünür; büyütmek kötü görünür. "Çok büyük" olmanın marjinal dosya boyutu maliyeti, neredeyse her zaman sigortaya değer.
    </p>

    <h2>Saydamlık</h2>
    <p>
      SVG'ler varsayılan olarak saydam arka plana sahiptir; PNG'ler tam alfa kanalını destekler. Dönüştürürken saydamlığı korumak için, dışa aktarma aracınızın arka plan rengi eklemediğinden emin olun. Çoğu araç varsayılan olarak saydam bir arka plan kullanır, ancak bazıları (özellikle eski veya toplu dönüştürücüler) beyaz bir arka plan ekleyebilir. Çıktıyı her zaman kontrol edin.
    </p>
    <p>
      Saydamlık gerekiyorsa, PNG-24 veya PNG-32'ye dışa aktarın (alfa kanalı ile). PNG-8 saydamlığı destekler ancak yalnızca tek bir saydam renk ile sınırlıdır, bu da kenar yumuşatma sorunlarına neden olur.
    </p>

    <h2>Kenar yumuşatma ve pürüzlü kenarlar</h2>
    <p>
      SVG'ler, işleme motoru tarafından kenar yumuşatma ile işlenir. PNG'ye dönüştürürken, kenar yumuşatma, piksellerin arka planla karışmasını sağlayarak pürüzlü kenarları önler. Ancak, çıktı boyutu çok küçükse veya dönüştürücü kenar yumuşatmayı desteklemiyorsa, pürüzlü kenarlar oluşabilir.
    </p>
    <p>
      Pürüzlü kenarları önlemek için:
    </p>
    <ul>
      <li>Yeterince yüksek bir çözünürlükte dışa aktarın (en az 2&times; hedef boyut).</li>
      <li>Kenar yumuşatmayı destekleyen bir dönüştürücü kullanın (çoğu modern araç destekler).</li>
      <li>Saydam bir arka plan üzerinde keskin kenarlı şekiller için, kenar yumuşatmayı kapatmayı düşünün (ancak bu genellikle daha kötü görünür).</li>
    </ul>

    <h2>SVG'yi olduğu gibi bırakmanın daha iyi olduğu durumlar</h2>
    <p>
      SVG'yi PNG'ye dönüştürmek her zaman gerekli değildir. Aşağıdaki durumlarda SVG olarak bırakın:
    </p>
    <ul>
      <li><strong>Web siteleri ve uygulamalar</strong> &mdash; SVG, modern tarayıcılar tarafından yerel olarak desteklenir ve daha küçük dosya boyutu sunar.</li>
      <li><strong>Duyarlı tasarım</strong> &mdash; SVG, herhangi bir boyuta ölçeklenir ve piksel yoğunluğundan bağımsızdır.</li>
      <li><strong>Etkileşimli veya animasyonlu grafikler</strong> &mdash; SVG, CSS ve JavaScript ile kolayca stillendirilebilir ve canlandırılabilir.</li>
      <li><strong>Erişilebilirlik</strong> &mdash; SVG, ekran okuyucular tarafından okunabilen metin ve etiketler içerebilir.</li>
      <li><strong>Düzenleme ihtiyacı</strong> &mdash; SVG, bir metin düzenleyicide veya vektör grafik yazılımında düzenlenebilir.</li>
    </ul>
    <p>
      PNG'ye yalnızca yukarıda listelenen belirli kullanım durumları için ihtiyacınız varsa dönüştürün. Aksi takdirde, SVG'yi kullanmak daha iyidir.
    </p>

    <h2>Özet</h2>
    <p>
      SVG'yi PNG'ye dönüştürmek basit bir işlemdir, ancak doğru çıktıyı elde etmek için çözünürlük, saydamlık ve kenar yumuşatma konularını dikkate almanız gerekir. Hedefinizi ve görüntünün nasıl kullanılacağını anlayarak, her seferinde mükemmel PNG'yi oluşturabilirsiniz. Ve unutmayın: mümkün olduğunda SVG'yi kullanın; PNG'yi yalnızca gerektiğinde kullanın.
    </p>
  </>
);