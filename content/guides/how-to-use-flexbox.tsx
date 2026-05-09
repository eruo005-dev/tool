import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Flexbox, CSS'in ilk günden beri sahip olması gereken tek boyutlu düzen aracıdır.
      Eskiden float, tablo veya mutlak konumlandırma gerektiren sorunları çözer:
      bir öğeyi dikeyde ortalamak, öğeler arasındaki boşluğu dağıtmak, görüntü alanı
      daraldığında kart sıralarının mantıklı davranmasını sağlamak.
      <code>flex-direction</code> ve <code>justify-content</code> oturduğunda, günlük düzen
      işlerinin %80'i beş satırlık bir kural haline gelir. Bu rehber, temel özellikleri
      gerçekten önemli oldukları sırayla ele alır, her gün yeniden kullanacağınız
      kalıpları gösterir ve flexbox ile grid arasındaki ayrımı, yanlış araca
      uzanmayı bırakacak kadar netleştirir.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Zihinsel model</h2>
    <p>
      Bir flex kabının bir <strong>ana ekseni</strong> ve bir{" "}
      <strong>çapraz ekseni</strong> vardır. <code>flex-direction</code>, ana
      eksenin hangi yönde çalışacağını seçer. Diğer her şey "öğeleri ana eksen
      boyunca hizala" veya "öğeleri çapraz eksen boyunca hizala"dır. Bu zihinsel
      modeli doğru anlayın ve özellik adları keyfi gelmeyi bırakır.
    </p>
    <pre>{`.container {
  display: flex;
  /* varsayılan: flex-direction: row; */
}`}</pre>
    <p>
      Bir öğe <code>display: flex</code> olduğu anda, doğrudan alt öğeleri flex
      öğeleri haline gelir. Alt öğelerin alt öğeleri, siz de onu flex yapmadığınız
      sürece etkilenmez.
    </p>

    <h2>flex-direction</h2>
    <p>
      Dört değer: <code>row</code> (varsayılan, soldan sağa), <code>row-reverse</code>,{" "}
      <code>column</code> (yukarıdan aşağıya) ve <code>column-reverse</code>. Çoğu
      düzen, yatay hizalama için <code>row</code> ve öğeleri dikey olarak
      istiflerken yine de flex süper güçlerini almak için <code>column</code>{" "}
      kullanır.
    </p>
    <pre>{`.navbar  { display: flex; flex-direction: row; }
.sidebar { display: flex; flex-direction: column; }`}</pre>
    <p>
      Yönü değiştirmek, ana ve çapraz eksenleri tersine çevirir. Bir satırın ana
      ekseni yataydır; bir sütunun ana ekseni dikeydir. <code>justify-content</code>{" "}
      ile <code>align-items</code> arasında seçim yaparken bunu aklınızda bulundurun.
    </p>

    <h2>justify-content: ana eksen boyunca</h2>
    <p>
      Öğelerin ana eksen boyunca nasıl yayılacağını kontrol eder. Gerçekten
      kullanacağınız değerler:
    </p>
    <pre>{`flex-start     başlangıçta topla (varsayılan)
flex-end       sonda topla
center         ortada topla
space-between  ilk ve son sabitlenir, aralarda eşit boşluk
space-around   eşit boşluklar, her kenarda yarım boşluk dahil
space-evenly   her yerde eşit boşluk, kenarlar dahil`}</pre>
    <p>
      <code>space-between</code>, navigasyon çubukları için en çok kullanılan
      değerdir: logo solda, bağlantılar sağda, ek sarmalayıcı gerekmez.
    </p>

    <h2>align-items: çapraz eksen boyunca</h2>
    <p>
      Öğelerin çapraz eksen üzerinde nasıl sıralanacağını kontrol eder. Değerler:
    </p>
    <pre>{`stretch      çapraz ekseni doldur (varsayılan)
flex-start   üst (satırda) / sol (sütunda)
flex-end     alt / sağ
center       orta
baseline     metin taban çizgilerini hizala`}</pre>
    <p>
      <em>Bir öğeyi her iki yönde ortalamak</em> artık iki satırlık bir iş:
    </p>
    <pre>{`.center {
  display: flex;
  justify-content: center;
  align-items: center;
}`}</pre>

    <h2>flex-wrap</h2>
    <p>
      Varsayılan olarak flex öğeleri tek bir satırda kalır ve sığmak için
      küçülür. Öğelerin birden çok satıra akmasına izin vermek için{" "}
      <code>flex-wrap: wrap</code> ekleyin. Medya sorguları olmadan duyarlı kart
      ızgaralarını mümkün kılan şey budur.
    </p>
    <pre>{`.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card {
  flex: 1 1 240px; /* büyü, küçül, 240px temel */
}`}</pre>
    <p>
      Kartlar artık masaüstünde üçlü, tablette ikili, telefonda tekli sıraya
      geçer, hiçbir kesme noktası olmadan. Flex karar verir.
    </p>

    <h2>flex-grow, flex-shrink, flex-basis</h2>
    <p>
      Bir flex öğesindeki bu üç özellik, alan için nasıl rekabet edeceğini
      kontrol eder. Kısa yazım: <code>flex: büyü küçül temel</code>.
    </p>
    <p>
      <strong>flex-grow</strong> &mdash; bu öğenin ne kadar fazla alanı
      emmesi gerektiği (0 = hiçbiri, 1 = eşit pay, 2 = iki kat pay).
    </p>
    <p>
      <strong>flex-shrink</strong> &mdash; kap çok küçük olduğunda bu öğenin
      alan vermeye ne kadar istekli olduğu (0 = asla küçülme, 1 = varsayılan).
    </p>
    <p>
      <strong>flex-basis</strong> &mdash; büyüme ve küçülme uygulanmadan önce
      öğenin tercih edilen boyutu. Bir uzunluk (<code>240px</code>) veya{" "}
      <code>auto</code> olabilir.
    </p>
    <pre>{`.sidebar { flex: 0 0 240px; }  /* sabit 240px sütun */
.main    { flex: 1 1 auto; }   /* kalan alanı emer */`}</pre>

    <h2>gap özelliği</h2>
    <p>
      <code>gap</code>, kenar boşlukları olmadan öğeler arasındaki boşluğu
      ayarlar. Hem flex hem de grid'de çalışır. Alt öğelerde{" "}
      <code>margin-right</code> yerine her zaman <code>gap</code>'i tercih edin
      &mdash; son öğe hileleri yok, <code>:last-child</code> geçersiz kılmaları
      yok.
    </p>
    <pre>{`.row {
  display: flex;
  gap: 16px;       /* öğeler arasında 16px */
  gap: 16px 8px;   /* sarıldığında 16px satır, 8px sütun */
}`}</pre>

    <h2>Kalıp: navigasyon çubuğu</h2>
    <pre>{`<nav class="nav">
  <div class="logo">Marka</div>
  <ul class="links">
    <li><a href="/a">Bir</a></li>
    <li><a href="/b">İki</a></li>
  </ul>
</nav>

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
}
.links { display: flex; gap: 16px; list-style: none; }`}</pre>

    <h2>Kalıp: kart sırası</h2>
    <pre>{`.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card {
  flex: 1 1 260px;
  display: flex;
  flex-direction: column;
}
.card__body { flex: 1; }  /* altbilgiyi aşağı it */`}</pre>
    <p>
      İç içe flex kullanımı sorunsuzdur ve genellikle gereklidir: kartın kendisi
      bir sütundur, gövdesi genişler ve altbilgi sıradaki her kartın altında
      sabit kalır.
    </p>

    <h2>Flexbox ve Grid</h2>
    <p>
      <strong>Flexbox tek boyutludur.</strong> Öğeleri tek bir eksen boyunca
      düzenlerken kullanın: bir navigasyon çubuğu, bir araç çubuğu, bir form
      satırları yığını, bir kart sırası.
    </p>
    <p>
      <strong>Grid iki boyutludur.</strong> Hem satırlar hem de sütunlar üzerinde
      açık kontrole ihtiyacınız olduğunda kullanın: bir kontrol paneli, tutarlı
      satırlara sahip bir galeri, başlık/kenar çubuğu/ana/içerik/altbilgi içeren
      bir sayfa düzeni.
    </p>
    <p>
      Birçok gerçek düzen ikisini birleştirir &mdash; sayfa kabuğu için grid,
      her hücrenin içeriği için flex. Birlikte iyi çalışırlar.
    </p>

    <h2>Flex hata ayıklama</h2>
    <p>
      Chrome ve Firefox'un her ikisinde de flex denetçileri vardır. Geliştirici
      Araçları'nda <code>display: flex</code> yanındaki küçük{" "}
      <code>flex</code> rozetine tıklayın ve tarayıcı eksenleri ve boş alanı
      gösterir. Bir öğe beklendiği gibi küçülmüyorsa, neredeyse her zaman{" "}
      <code>flex-shrink: 0</code> veya bir yerde açık bir genişlik vardır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>justify-content ve align-items'i karıştırmak.</strong> Unutmayın:
      <code>justify</code> ana ekseni, <code>align</code> çapraz ekseni takip
      eder. Bir sütunda <code>justify-content</code> dikeydir.
    </p>
    <p>
      <strong>Flex öğelerinin varsayılan olarak küçüldüğünü unutmak.</strong> Bir
      flex kabı içindeki <code>width: 300px</code>, yeterli alan yoksa yine de
      180px olabilir. <code>flex-shrink: 0</code> ayarlayın veya büyüme 0,
      küçülme 0 ile <code>flex-basis</code> kullanın.
    </p>
    <p>
      <strong>Gap yerine kenar boşlukları kullanmak.</strong> Boşluklar daha
      temizdir, sarmayı doğru şekilde işler ve <code>:last-child</code>
      istisnaları gerektirmez.
    </p>
    <p>
      <strong>Grid istediğinizde flex'e uzanmak.</strong> Sütunlar arasında
      satırları hizalamak için uğraşıyorsanız, ihtiyacınız olan flex değil,
      grid'dir.
    </p>
    <p>
      <strong>Sebepsiz yere flex kaplarını iç içe yerleştirmek.</strong> Her ek{" "}
      <code>display: flex</code> karmaşıklık ekler. Yalnızca gerçekten flex
      davranışına ihtiyacınız olan seviyelerde flex yapın.
    </p>
    <p>
      <strong>Dikey ortalamak için kaba yükseklik ayarlamak.</strong> Kabın,
      <code>align-items: center</code>'ın çalışması için dikey alana ihtiyacı
      vardır. Tam görüntü alanı merkez parçası için{" "}
      <code>min-height: 100vh</code> kullanın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Flex özelliklerini canlı olarak{" "}
      <a href="/tools/flexbox-playground">flexbox oyun alanında</a> önizleyin.
      İki boyutlu düzenler için{" "}
      <a href="/tools/grid-layout-generator">grid düzen oluşturucuya</a> uzanın
      ve ardından kart köşelerini yuvarlarken{" "}
      <a href="/tools/border-radius-generator">kenar yarıçapı oluşturucu</a>,
      değerlerinizi tüm düzen boyunca tutarlı tutar.
    </p>
  </>
);