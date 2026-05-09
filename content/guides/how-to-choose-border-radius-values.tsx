import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Border radius, web üzerinde en az düşünülen tasarım kararlarından biridir. 4 piksel seçin, arayüzünüz kurumsal görünür; 16 piksel seçin, dostane hissettirir; 9999 piksel seçin, hap şekilleri elde edersiniz. Köşelerin şekli, kullanıcı tek bir kelime okumadan önce tonu belirler. Bu rehber, bir ürün genelinde tutarlı yarıçaplar seçmeyi, eleman boyutu ile yarıçap arasındaki ilişkiyi, iç içe yarıçap kurallarını, squircle ve superellipse gibi ileri düzey değerleri ve tanınmış tasarım sistemleri tarafından kullanılan ölçekleri kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Border radius neyi ifade eder</h2>
    <p>
      <strong>0px (keskin):</strong> resmi, teknik, verimli. Devlet formları, tablo verileri, terminal arayüzleri, finansal yazılımlar.
    </p>
    <p>
      <strong>2–4px (hafif):</strong> profesyonel, göze batmayan. Klasik Bootstrap dönemi; kurumsal SaaS'te hala yaygın.
    </p>
    <p>
      <strong>6–12px (dostane):</strong> modern tüketici uygulamaları. 2024–2026'da çoğu SaaS. GitHub, Linear, Stripe, Notion bu aralıkta.
    </p>
    <p>
      <strong>16–24px (yumuşak):</strong> eğlenceli, yaklaşılabilir. Gündelik kullanıcıları hedefleyen tüketici ürünleri. Duolingo, yeni Google ürünleri, Spotify.
    </p>
    <p>
      <strong>9999px (hap):</strong> rozetler, durum çipleri, birincil CTA butonları. "Belirgin eylem" olarak okunur — idareli kullanın.
    </p>
    <p>
      <strong>50%:</strong> daireler — avatarlar, nokta göstergeleri, ikon butonları. Kare bir elemanda <code>border-radius: 50%</code> bir daire oluşturur.
    </p>

    <h2>Yarıçap ölçekleri — tasarım sistemlerinin kullandıkları</h2>
    <p>
      <strong>Tailwind:</strong> sm (0.125rem / 2px), default (0.25rem / 4px), md (0.375rem / 6px), lg (0.5rem / 8px), xl (0.75rem / 12px), 2xl (1rem / 16px), 3xl (1.5rem / 24px), full (9999px). İyi bir genel amaçlı ölçek.
    </p>
    <p>
      <strong>Radix Themes:</strong> 6 adımlı ölçek (0–6), her biri belirgin bir role ve tutarlı iç içe geçme davranışına sahip.
    </p>
    <p>
      <strong>Material Design 3:</strong> şekil ailelerine (none, extra small, small, medium, large, extra large, full) dayalı tokenlar. Farklı bileşenler varsayılan olarak farklı yarıçaplar kullanır.
    </p>
    <p>
      Bileşen başına yeni değerler icat etmeyin. 4–6 adım seçin, bunları arayüz genelinde uygulayın.
    </p>

    <h2>Eleman boyutu algılanan yarıçapı etkiler</h2>
    <p>
      32px'lik bir butonda 4px yarıçap, 400px'lik bir kartta 4px yarıçaptan orantısal olarak farklı görünür.
    </p>
    <p>
      <strong>Genel kural:</strong> yarıçap, eleman boyutuyla kabaca orantılı olmalıdır. Küçük elemanlar küçük yarıçaplar alır; büyük kartlar daha büyük yarıçaplar alır. Ancak doğrusal değil — ilişki daha logaritmiktir.
    </p>
    <p>
      <strong>Pratik ölçek:</strong>
    </p>
    <p>
      Giriş alanları ve butonlar (32–40px yükseklik): 4–8px yarıçap.
    </p>
    <p>
      Kartlar (100–300px genişlik): 8–16px yarıçap.
    </p>
    <p>
      Hero bölümleri veya tam genişlik paneller: 16–24px yarıçap.
    </p>
    <p>
      Avatarlar ve ikon butonları: %50 (daire).
    </p>

    <h2>İç içe border radius — matematik</h2>
    <p>
      Yuvarlatılmış bir eleman başka birinin içinde olduğunda, iç yarıçap dış yarıçaptan daha küçük olmalıdır ki eşmerkezli görünsünler.
    </p>
    <p>
      <strong>Formül:</strong> iç yarıçap = dış yarıçap − boşluk.
    </p>
    <p>
      Örnek: kartın 16px yarıçapı ve 12px dolgusu var. İç eleman, hizalanmış eğriler için 16 − 12 = 4px yarıçapa sahip olmalıdır.
    </p>
    <p>
      <strong>Neden önemli:</strong> her ikisi de 16px kullanırsa, iç elemanın köşesi dış köşenin içinde garip bir şekilde durur — "hilal" görünümü oluşturur ve bozuk olarak algılanır.
    </p>
    <p>
      <strong>Apple'ın eşmerkezli köşeleri:</strong> Apple tasarım felsefesi bu kuralı donanım ve yazılımda açıkça uygular — iPhone ekran köşeleri, cihaz çerçevesiyle eşleşecek şekilde matematiksel olarak türetilir.
    </p>

    <h2>Squircle ve superellipse — sonraki adım</h2>
    <p>
      Standart <code>border-radius</code> her köşede bir çeyrek daire oluşturur. Apple tarzı "squircle" daha yumuşak bir şekil (superellipse) kullanır ve daha kademeli bir geçişe sahiptir — eğri kenar boyunca daha fazla yayılır.
    </p>
    <p>
      <strong>CSS yerel desteği:</strong> tek bir özellik olarak doğrudan desteklenmez. Geçici çözümler:
    </p>
    <p>
      <code>border-radius: 20% / 50%;</code> — eliptik köşeler, daireselden biraz farklı his.
    </p>
    <p>
      <strong>SVG veya Canvas:</strong> gerçek superellipse'ler için şekli <code> M/L/C</code> bezier eğrileriyle çizin.
    </p>
    <p>
      <strong>Modern öneri:</strong> <code>corner-shape: superellipse</code> CSS için tartışılıyor. 2026 itibarıyla tarayıcılarda henüz yayınlanmadı.
    </p>
    <p>
      Çoğu arayüz için, 12px dairesel yarıçap ile 12px squircle arasındaki görsel fark incedir — izleyiciler matematiği fark etmeden yumuşaklığı algılar. Yalnızca büyük boyutlarda görünür.
    </p>

    <h2>Bireysel köşe kontrolü</h2>
    <p>
      Asimetrik şekiller için yarıçap köşe başına ayarlanabilir.
    </p>
    <p>
      <code>border-top-left-radius: 12px; border-top-right-radius: 12px; border-bottom-right-radius: 0; border-bottom-left-radius: 0;</code>
    </p>
    <p>
      Kısa yazım: <code>border-radius: 12px 12px 0 0</code> (ÜS, ÜS, AS, AS — saat yönünde sol üstten başlayarak).
    </p>
    <p>
      <strong>Yaygın desenler:</strong>
    </p>
    <p>
      Bir panele bağlı sekmeler: yuvarlatılmış üst köşeler, keskin alt.
    </p>
    <p>
      Sohbet balonları: gönderene yakın bir keskin köşe (onlar için sol üst, sizin için sağ üst veya sağ alt) kaynağı belirtmek için.
    </p>
    <p>
      Listedeki kartlar: yalnızca dış kenarlarda yuvarlatılmış (ilk öğe üst yuvarlak, son öğe alt yuvarlak, ortadaki öğeler keskin).
    </p>

    <h2>Eliptik köşeler</h2>
    <p>
      Eğik çizgiyle ayrılmış iki değer eliptik köşeler oluşturur (farklı x ve y yarıçapları):
    </p>
    <p>
      <code>border-radius: 50px / 20px;</code> — geniş, kısa oval köşeler. "Damla" şekilleri, afişler veya benzersiz kart stilleri için kullanılır.
    </p>
    <p>
      <strong>Kullanım durumları:</strong> gösterişli pazarlama hero bölümleri, belirgin şekle sahip afiş kartları. Standart arayüz bileşenleri için değil — eliptik köşeler dekoratif olarak okunur, nötr değil.
    </p>

    <h2>Border radius ve performans</h2>
    <p>
      <strong>Kutu gölgesi + yuvarlatılmış köşeler:</strong> yoğun şekilde istiflendiğinde (birçok kart) işlemesi pahalıdır. Tarayıcılar bunun için optimize eder ancak üst düzey telefonlar büyük listelerde hala takılma gösterir.
    </p>
    <p>
      <strong>Görsellerde yuvarlatılmış köşeler:</strong> border radius'lu bir kapsayıcıda <code>overflow: hidden</code> standart yaklaşımdır. Performanslı.
    </p>
    <p>
      <strong>Border radius'u canlandırma:</strong> küçük değişiklikler için kabul edilebilir (büyüyen bir hap). Büyük şekil dönüşümlerini canlandırmaktan kaçının — bunun yerine SVG veya CSS maskesi kullanın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Çok fazla yarıçap değeri kullanmak.</strong> Butonlarınız 4px, 6px, 8px, 10px ve 12px'e sahipse, tutarsızlık özensiz olarak algılanır. 3–6 değer seçin, her yerde kullanın.
    </p>
    <p>
      <strong>Yarıçap stillerini karıştırmak.</strong> Bazı bileşenler keskin, diğerleri çok yuvarlak, belirgin bir sebep yok — birden fazla çelişen tasarımcı izlenimi verir.
    </p>
    <p>
      <strong>Eşmerkezli olmayan iç içe köşeler.</strong> Alt eleman, üst elemanla aynı yarıçapa sahip. Dolguyu çıkarın.
    </p>
    <p>
      <strong>Her butonda hap şekli.</strong> Hap şekli (<code>border-radius: 9999px</code>) belirgin ve acil olarak okunur. Her butonda kullanmak vurguyu azaltır. Birincil CTA'lar için saklayın.
    </p>
    <p>
      <strong>Giriş alanlarını yuvarlatmak ama kaplarını yuvarlatmamak.</strong> 4px yarıçaplı bir kartın içinde 8px yarıçaplı giriş alanları — yanlış görünür. İlgili bileşenler arasında köşe stillerini hizalayın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Bireysel köşe değerlerini{" "}
      <a href="/tools/border-radius-generator">border radius oluşturucu</a> ile ince ayar yapın.
      Bunu{" "}
      <a href="/tools/box-shadow-generator">kutu gölgesi oluşturucu</a> ile eşleştirin
      {" "}gölge yumuşaklığını köşe yuvarlatma ile uyumlu hale getirmek için ve{" "}
      <a href="/tools/aspect-ratio-calculator">en boy oranı hesaplayıcı</a>
      {" "}ile kartları kesme noktaları arasında tutarlı bir şekilde boyutlandırmak için.
    </p>
  </>
);