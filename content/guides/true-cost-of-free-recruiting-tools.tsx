/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Ücretsiz&rdquo; işe alım araçlarının pazarlama metinlerinde bahsedilmeyen üç gizli maliyeti vardır: araçları birbirine bağlamak için harcanan zaman, hantal iş akışları nedeniyle kaybedilen adaylar ve ücretsiz katman sınırları ile gerçek ihtiyaçlarınız arasındaki boşluk. Bu kılavuz, her birini adım adım ele alır ve ardından bu maliyetlerin ne zaman ücretli bir ATS fiyatını aştığını gösterir.
    </p>
    <p>
      Okurken kendi rakamlarınızla{" "}
      <a href="/tools/free-recruiting-tool-true-cost-calculator">gerçek maliyet hesaplayıcımızı</a>{" "}
      çalıştırın.
    </p>
  </>
);

export const toc = [
  { id: "stitching", label: "Gizli maliyet #1: bağlantı kurma süresi" },
  { id: "loss", label: "Gizli maliyet #2: kullanıcı deneyimine kaybedilen adaylar" },
  { id: "ceiling", label: "Gizli maliyet #3: ücretsiz katman sınırlarına takılmak" },
  { id: "math", label: "Ücretli ne zaman kendini amorti eder?" },
  { id: "exception", label: "Ücretsizin hala kazandığı durumlar" },
];

export const body = (
  <>
    <h2 id="stitching">Gizli maliyet #1: bağlantı kurma süresi</h2>
    <p>
      Tipik bir ücretsiz işe alım yığını 4-6 ayrı araçtan oluşur: iş akışı takipçisi, eleme
      aracı, planlama, e-posta, iş ilanı, metrikler. Bunlar birbirleriyle iletişim kurmaz.
      Entegrasyon işi işe alımcıya kalır:
    </p>
    <ul>
      <li>Indeed başvuru e-postasını Trello panosuna yönlendirmek (5 dk).</li>
      <li>Aday bilgilerini Trello'dan Calendly davetine kopyala-yapıştır yapmak (3 dk).</li>
      <li>Metrik elektronik tablosunu Trello'dan manuel olarak güncellemek (10 dk/hafta).</li>
      <li>Calendly rezervasyonlarını Gmail şablonlarıyla takip etmek (15 dk/hafta).</li>
      <li>Aynı iş tanımını 8 panoda manuel olarak yeniden yayınlamak (30 dk/ilan).</li>
    </ul>
    <p>
      Muhafazakar bir tahminle bu, haftada 1-3 saat saf bağlantı kurma süresidir. Saatlik
      $60 tam yüklü maliyetle bu, yılda $3.000-9.000 eder — Workable Starter ($2.268/yıl)
      gibi ücretli bir ATS'nin maliyetinin oldukça üzerinde.
    </p>

    <h2 id="loss">Gizli maliyet #2: kullanıcı deneyimine kaybedilen adaylar</h2>
    <p>
      Sektör genelinde, aday deneyimi araştırmaları sürekli olarak hantal süreçlere
      atfedilebilen %5-15'lik bir kayıp oranı göstermektedir:
    </p>
    <ul>
      <li>
        <strong>Yavaş yanıt aralığı:</strong> SHRM 2024, 7 gün içinde geri dönüş alamayan
        adayların rakip bir teklifi kabul etme olasılığının %40 daha fazla olduğunu buldu. Ücretsiz yığınlar,
        Trello → e-posta → planlama aktarımında yavaşlama eğilimindedir.
      </li>
      <li>
        <strong>Planlama bağlantısı uyumsuzluğu:</strong> adayın bir panel ayarlaması gerekirken tek etkinlik
        türüne sahip bir Calendly bağlantısı göndermek = 3 günlük gidiş-geliş = aday kaybolur.
      </li>
      <li>
        <strong>Form terk etme:</strong> Google Forms işlevseldir ancak çirkindir; adaylar
        cilalı markalı bir başvuru sayfasında ~%10'a kıyasla başvuru adımında ~%25 oranında terk eder.
      </li>
    </ul>
    <p>
      Yılda 200 başvuru üzerinden %10 aday kaybı oranı = 20 kayıp aday. Bunların %5'i
      bile uygun işe alım olsaydı (1 kişi) ve gecikmiş bir işe alım, rol başına ~2 haftalık
      gelir kaybına mal olsaydı, matematik hızla çirkinleşir.
    </p>

    <h2 id="ceiling">Gizli maliyet #3: ücretsiz katman sınırlarına takılmak</h2>
    <p>
      Her ücretsiz aracın bir sınırı vardır. Model şöyledir:
    </p>
    <ul>
      <li>Trello ücretsiz: 10 pano. 5 gereksinimin üzerinde yer değiştirirsiniz.</li>
      <li>Calendly ücretsiz: 1 etkinlik türü. Yalnız çalışan işe alımcılar için iyi; ekip mülakatları için acı verici.</li>
      <li>Zoho Recruit ücretsiz: 1 aktif iş, 1 kullanıcı, 100 aday. Sadece tek kişilik.</li>
      <li>Hunter.io ücretsiz: Ayda 25 e-posta araması. Bir aramanın 12. gününde sınıra ulaşılır.</li>
      <li>Teal ücretsiz: Takip edilen 5 aktif başvuru. Gerçek bir arama için işe yaramaz.</li>
    </ul>
    <p>
      Sınır maliyeti iki şekilde ortaya çıkar: (1) iş yükünü araçlar arasında bölmeye
      başlarsınız (daha fazla bağlantı), veya (2) sınırına ilk ulaştığınız için yalnızca bir
      aracı ücretliye yükseltirsiniz — ve şimdi her iki dünyanın en kötü ergonomisine sahip
      hibrit bir ücretsiz/ücretli yığındasınız.
    </p>

    <h2 id="math">Ücretli ne zaman kendini amorti eder?</h2>
    <p>
      Başabaş noktası yaklaşık olarak şöyledir:
    </p>
    <p>
      <strong>Yıllık ücretli ATS maliyeti &lt; (bağlantı saatleri × saatlik ücret × 52) + (kaybedilen
      adaylar × aday başına değer)</strong>
    </p>
    <p>
      Tipik küçük ekipler için bu, işe alım yöneticisinin saatlik ücretine bağlı olarak
      yılda yaklaşık <strong>8-12 işe alım</strong> civarındadır. Kendi başabaş noktanızı
      görmek için hesap makinesine kendi rakamlarınızı girin.
    </p>
    <p>
      Yaygın senaryolar:
    </p>
    <ul>
      <li>
        <strong>Yalnız işe alımcı, yılda 4-6 işe alım:</strong> ücretsiz yığın yılda ~$2k
        kazandırır. Bağlantı maliyeti gerçektir ancak küçüktür; düşük hacimde kayıp oranı
        maliyeti küçüktür.
      </li>
      <li>
        <strong>Küçük ekip, yılda 10-15 işe alım:</strong> başa baş. Workable Starter veya
        SmartRecruiters orta katmanı iyi görünmeye başlar. Rakamları hesaplayın.
      </li>
      <li>
        <strong>Büyüyen ekip, yılda 20+ işe alım:</strong> ücretli neredeyse her zaman
        kazanır. Bağlantı süresi doğrusal olarak artar; kayıp oranı bileşik etki yapar;
        ücretsiz katman sınırları sert bir şekilde vurmaya başlar.
      </li>
    </ul>

    <h2 id="exception">Ücretsizin hala kazandığı durumlar (ve dürüst olduğu zamanlar)</h2>
    <p>
      Ücretsiz yığınlar üç durumda meşru olarak ücretliyi yener:
    </p>
    <ul>
      <li>
        <strong>Çok düşük hacim.</strong> Yılda 1-3 işe alım, büyüme planı yok. Bağlantı
        maliyeti, ücretlinin gereksiz hissettirecek kadar küçüktür.
      </li>
      <li>
        <strong>Tekrarlanmayan işe alım.</strong> Yıllık tek seferlik işe alım, aksi halde
        işe alım yükü yok. Abonelik tek seferlik için mantıklı değildir.
      </li>
      <li>
        <strong>İşe alımcı olarak işe alım yöneticisi.</strong> Tüm işe alımları kendisi yapan
        kurucu; zamanları aynı şekilde marjinal değildir. Gizli maliyet, yapabilecekleri diğer
        her şeyin fırsat maliyetidir — ki bu bazen hala ücretli araç maliyetinin altındadır.
      </li>
    </ul>
    <p>
      Bu durumların dışında, ücretli matematikte ücretsiz araç savunucularının kabul
      ettiğinden daha sık kazanır. Dürüst versiyon: &ldquo;tek kişilik, düşük hacimli, kurucu
      odaklı işe alım için ücretsiz; bunun üzerinde ücretli.&rdquo;
    </p>
  </>
);

export const cta = {
  label: "Ekibinizin gerçek maliyetini hesaplayın",
  targetSlug: "free-recruiting-tool-true-cost-calculator",
};

export const faq = [
  {
    q: "Ücretli ve ücretsiz için tipik başabaş işe alım sayısı nedir?",
    a: "Çoğu küçük ekip için yılda yaklaşık 8-12 işe alım, ancak işe alım yöneticisinin saatlik ücretine (daha yüksek ücret → ücretli kendini daha erken amorti eder) ve aday kaybını ne kadar agresif ölçtüğünüze göre değişir.",
  },
  {
    q: "'Kaybedilen adaylar' yumuşak bir maliyet değil mi?",
    a: "Evet — ve bu yüzden ölçene kadar görmezden gelmek kolaydır. Dürüst hareket, bir miktar kaybın var olduğunu varsaymak (sektör verilerine göre %5-15), bunu muhafazakar bir şekilde fiyatlandırmak ve matematiği yeniden yapmaktır. Sıfır kayıp varsaymak iyimser hatadır.",
  },
  {
    q: "Yıl ortasında ücretsizden ücretliye geçmeli miyim?",
    a: "Geçiş maliyetleri gerçektir (8-20 saat veri taşıma, eğitim, yapılandırma). Geçişi, yoğun bir gereksinim haftasında değil, işe alımın yavaşladığı bir dönemde planlayın. Geçiş yapması gereken çoğu ekip, geçiş o an pahalı hissettirdiği için çok bekler.",
  },
  {
    q: "Ücretsiz katmanlar sunan yeni yapay zeka işe alım girişimleri ne olacak?",
    a: "Çoğu, deneme süresi dışında aslında ücretsiz değildir — 'koltuk sınırıyla ücretsiz' veya '<belirli hacme kadar> ücretsiz'dir. Fiyatlandırma sayfasını dikkatlice okuyun ve 'beta' veya 'değişebilir' olarak listelenen herhangi bir ücretsiz katman özelliğini fiilen 12 aylık bir bahis olarak değerlendirin.",
  },
];