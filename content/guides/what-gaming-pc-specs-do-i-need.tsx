/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Hangi oyun bilgisayarına ihtiyacım var?&rdquo; yanlış soru. Doğru soru
      şu: &ldquo;Gerçekten oynadığım oyunlar için, kullanacağım çözünürlük ve
      yenileme hızında hangi özelliklere ihtiyacım var?&rdquo;
    </p>
    <p>
      Bu rehber pratik karar akışını sunar: gerçek kullanım senaryonuzu belirleme,
      yaygın özellik hatalarından kaçınma ve yapınızı şekillendirmek için{" "}
      <a href="/tools/gaming-pc-spec-recommender">özellik öneri aracımızı</a> kullanma.
    </p>
  </>
);

export const toc = [
  { id: "use-case", label: "Gerçek kullanım senaryonuzu belirleyin" },
  { id: "common-mistakes", label: "Yaygın özellik hataları" },
  { id: "components", label: "Bileşen öncelik sırası" },
  { id: "future-proofing", label: "Geleceğe hazırlık gerçeklik kontrolü" },
];

export const body = (
  <>
    <h2 id="use-case">Gerçek kullanım senaryonuzu belirleyin</h2>
    <p>
      Parçaları seçmeden önce şunları cevaplayın:
    </p>
    <ol>
      <li>
        <strong>Birincil oyun türü.</strong> Espor (CS, Valorant, Apex, OW)
        düşük ayarlarda yüksek FPS'yi önceliklendirir. AAA tek oyunculu (Cyberpunk, Witcher)
        görsel kaliteyi önceliklendirir. Strateji / simülasyon oyunları (Cities Skylines, Civ)
        CPU odaklıdır. Farklı oyunlar farklı donanımları zorlar.
      </li>
      <li>
        <strong>Monitörünüzün çözünürlüğü + yenileme hızı.</strong> 1080p 144 Hz,
        4K 60 Hz veya 1440p 240 Hz'den çok farklı donanım gerektirir. Monitör,
        özelliklerinizin bir parçasıdır — 1080p panel için 4K uyumlu bir GPU seçmeyin.
      </li>
      <li>
        <strong><a href="/learn/stream">Yayın</a> / içerik üretimi.</strong> CPU + RAM gereksinimlerini artırır.
        Ayrıca OBS + Discord + tarayıcı + sohbet araçları çalıştıracaksanız,
        &ldquo;sadece oyun&rdquo; özellikleriniz yanlış olur.
      </li>
      <li>
        <strong>VR.</strong> GPU gereksinimlerini artırır. VR, monitör çözünürlüklerinden
        daha yüksek çözünürlüklerde tutarlı 90+ FPS gerektirir. Düşük özellikli GPU'lar
        hareket hastalığına neden olur.
      </li>
      <li>
        <strong>Beklenen kullanım yılı.</strong> 3 yıllık yapı vs 5 yıllık yapı vs
        elden çıkarma özellikleri farklı parçalar gerektirir. 5 yıllık yapılar,
        daha sonra yükseltmesi zor olan her şeyde (CPU, anakart, PSU, kasa) fazladan
        kapasiteye ihtiyaç duyar.
      </li>
    </ol>
    <p>
      Baskın kullanım senaryonuzla <a href="/tools/gaming-pc-spec-recommender">özellik öneri aracımızı</a> çalıştırarak
      bir seviye ve bütçe referansı alın.
    </p>

    <h2 id="common-mistakes">Yaygın oyun bilgisayarı özellik hataları</h2>
    <ul>
      <li>
        <strong>Üst düzey GPU, vasat CPU.</strong> Yüksek kare hızlarında GPU'yu
        darboğaz yapar. Özellikle espor: 1200 dolarlık GPU ile 200 dolarlık CPU,
        1080p'de dengeli bir orta seviye yapıdan daha kötü çalışır.
      </li>
      <li>
        <strong>Yetersiz RAM.</strong> 2026'da 16 GB yeni minimumdur. 32 GB ise
        konfor alanıdır. Modern AAA oyunlar + Discord + tarayıcı + Steam kolayca 16'yı aşar.
      </li>
      <li>
        <strong>Ucuz PSU.</strong> Bütçe PSU'lar arızalandığında diğer parçalara zarar verir.
        Tier A veya B markalarına bağlı kalın (Corsair RM, Seasonic Focus, EVGA Gold). PSU'dan
        tasarruf etmeden önce GPU'da bir kademe aşağı inerek para biriktirin.
      </li>
      <li>
        <strong>NVMe yerine SATA SSD.</strong> NVMe artık fiyat olarak standarttır;
        SATA 5 yıllık bir öneridir. Oyun yükleme süreleri NVMe'de çok daha iyidir.
      </li>
      <li>
        <strong>Soğutma yok veya yetersiz.</strong> Modern CPU'lar agresif bir şekilde
        kısıtlama yapar. i7/Ryzen 7+ sınıfı CPU'lardaki stok soğutucular sürekli oyun
        için yetersizdir. İyi bir hava soğutucu (35-60$) veya AIO (100-150$) için bütçe ayırın.
      </li>
      <li>
        <strong>Yanlış RAM hızı.</strong> JEDEC varsayılanında (4800) DDR5,
        EXPO ile DDR5-6000'den %30 daha yavaştır. Birçok yapı, kurucular XMP/EXPO'yu
        etkinleştirmeyi unuttuğu için RAM'i yavaş çalıştırır.
      </li>
      <li>
        <strong>Bugünün pahasına gelecek için satın almak.</strong> &ldquo;Bir gün 4K yapabilirim
        diye 4090 alayım.&rdquo; Şu anda sahip olduğunuz çözünürlük için ihtiyacınız olanı
        satın alın. GPU'lar hızla değer kaybeder.
      </li>
    </ul>

    <h2 id="components">Bileşen öncelik sırası</h2>
    <p>
      Sınırlı doları nereye harcamalı, sırasıyla:
    </p>
    <ol>
      <li>
        <strong>GPU.</strong> Oyun performansının en büyük belirleyicisi.
        Önce çözünürlük ve oyun türüne göre GPU'yu seçin, ardından onun etrafında
        bir yapı kurun.
      </li>
      <li>
        <strong>CPU.</strong> Makul ölçüde — GPU sınıfınız için &ldquo;dengeli&rdquo;
        CPU. AMD Ryzen 5 / 7 7000 serisi veya Intel i5/i7 14. nesil mantıklı
        varsayılanlardır. Uyumsuz uç noktalardan kaçının.
      </li>
      <li>
        <strong>RAM.</strong> 32 GB DDR5-6000, 1440p+ oyun ve yayın için rahat
        varsayılandır. Yalnızca kesinlikle espor-1080p bütçeniz varsa 16 GB.
      </li>
      <li>
        <strong>Depolama.</strong> 1-2 TB NVMe Gen 4. Yalnızca kitaplığınız 2 TB'ı
        aşarsa bir SATA SSD veya HDD ekleyin.
      </li>
      <li>
        <strong>PSU.</strong> Tier A/B marka, parça listenizin tepe çekiminin 100-200 W
        üzerinde boşluk. Orta seviye için 750W Gold; üst seviye için 850W; amiral gemisi için 1000W.
      </li>
      <li>
        <strong>Soğutma.</strong> Orta seviyeye kadar her şey için iyi bir hava soğutucu
        (35-60$). i7/Ryzen 7+ sınıfı veya CPU'yu ağır yükleyecekseniz AIO (100-150$).
      </li>
      <li>
        <strong>Kasa.</strong> İyi hava akışına sahip kasa (Fractal North, Lian Li Lancool,
        NZXT H7 Flow). Çok ucuza gitmeyin — kötü kasalar termal performansı mahveder.
      </li>
      <li>
        <strong>Anakart.</strong> İhtiyacınız olan özellikler için yeterince harcayın.
        &ldquo;Doğru sayıda M.2 yuvasına sahip ve CPU'nuzu destekliyor&rdquo; olmanın
        ötesi, oyun kullanım senaryolarında çoğunlukla lükstür.
      </li>
    </ol>

    <h2 id="future-proofing">Geleceğe hazırlık gerçeklik kontrolü</h2>
    <p>
      Dürüst hesap:
    </p>
    <ul>
      <li>
        <strong>GPU:</strong> nesil başına ~%30 değer kaybeder. 2-3 yıl için
        ihtiyacınız olanı satın alın; değiştirmeyi planlayın.
      </li>
      <li>
        <strong>CPU:</strong> 5-7 yıl kullanılabilir. En az bir yükseltme yolu olan
        bir platform seçin (AMD AM5'in 2027+ garantili desteği var; Intel soketleri daha
        sık değişir).
      </li>
      <li>
        <strong>RAM:</strong> 32 GB yeni rahat seviye. 64 GB saf oyun için bugün
        gereksizdir; 5+ yıl içinde kullanışlı olacaktır.
      </li>
      <li>
        <strong>PSU + Kasa:</strong> 7-10 yıl kullanılabilir. Buraya harcama yapmak en
        temiz geleceğe hazırlıktır çünkü PSU + kasa birden çok yeniden yapılandırma
        nesli boyunca taşınır.
      </li>
    </ul>
    <p>
      Bugünün pahasına gelecek için optimize etmek genellikle net kaybettirir:
      yarının GPU seçenekleri bugünün en üst seviyesinden daha iyi olacak ve
      2026 dönemi parçalarına kilitlenmiş olacaksınız. Şu anda ihtiyacınız olanı satın alın.
    </p>
  </>
);

export const cta = {
  label: "Kullanım senaryonuz için bir seviye önerisi alın",
  targetSlug: "gaming-pc-spec-recommender",
};

export const faq = [
  {
    q: "Hangi oyun bilgisayarı özelliklerine ihtiyacım olduğunu nasıl anlarım?",
    a: "Baskın kullanım senaryonuzu (espor, AAA, yayın, VR) ve ardından monitörünüzün çözünürlüğü + yenileme hızını belirleyin. Bir seviye ve bütçe referansı almak için özellik öneri aracımızı kullanın. Çoğu özellik hatası, yanlış eksen için optimize etmekten kaynaklanır — üst düzey GPU ile vasat CPU, yetersiz RAM, ucuz PSU vb.",
  },
  {
    q: "Bir oyun bilgisayarı satın almadan önce hangi soruları sormalıyım?",
    a: "Altı: (1) birincil kullanım senaryosu, (2) hedef çözünürlük + yenileme hızı, (3) gelecekteki yükseltme öncelikleri, (4) termal ortam, (5) çevre birimleri + oyunlar dahil toplam bütçe, (6) kendin yap veya profesyonel. 1. ve 2. soruların cevabı özelliklerin %80'ini belirler.",
  },
  {
    q: "En yaygın oyun bilgisayarı özellik hataları nelerdir?",
    a: "Üst düzey GPU ile vasat CPU (yüksek FPS'de darboğaz), yetersiz RAM (16 GB artık minimum), ucuz PSU (arızada diğer parçalara zarar verir), NVMe yerine SATA, yetersiz CPU soğutması, XMP/EXPO hızı yerine varsayılan JEDEC'te çalışan RAM, varsayımsal gelecek kullanım senaryoları için aşırı satın alma.",
  },
  {
    q: "Her bileşene ne kadar harcamalıyım?",
    a: "Öncelik sırası: önce GPU (oyun performansında en büyük etki) → dengeli CPU → 32 GB DDR5 RAM → 1-2 TB NVMe → boşluklu tier A/B PSU → yeterli soğutma → iyi hava akışlı kasa → yeterli anakart. PSU veya kasadan çok ucuzlamayın (uzun ömürlü parçalar ve her şeyi etkiler).",
  },
];