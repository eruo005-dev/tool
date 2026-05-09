/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Developer Productivity Engineering (DPE) — bazen Developer Experience
      (DevX), Platform Engineering veya sadece DevTools olarak da adlandırılır — 2026'da en hızlı büyüyen
      uzmanlaşmış kariyer yollarından biridir. Şüphecilik (&ldquo;bu sadece yeniden adlandırılmış bir
      DevOps rolü mü?&rdquo;) haklı ama güncelliğini yitirmiş bir bakış açısıdır.
    </p>
    <p>
      Bu rehber dürüst pazar görüşünü sunar: DPE'nin DevOps'tan farkı, neden
      büyüdüğü, kariyer yolunun nasıl göründüğü ve &ldquo;çıkmaz sokak&rdquo;
      eleştirisinin haklı olup olmadığı.
    </p>
  </>
);

export const toc = [
  { id: "what-is-dpe", label: "DPE aslında nedir" },
  { id: "growth", label: "DPE büyüyor mu?" },
  { id: "career-arc", label: "Kariyer yolu + tavan" },
  { id: "dead-end", label: "Çıkmaz sokak mı?" },
];

export const body = (
  <>
    <h2 id="what-is-dpe">Developer productivity engineering aslında nedir</h2>
    <p>
      DPE, kuruluşunuzdaki geliştiricilerin üretkenliğini ölçme ve iyileştirme disiplinidir. Somut olarak: daha hızlı yerel derlemeler, daha güvenilir CI,
      daha iyi geliştirme ortamları, daha hızlı kod incelemesi, daha hızlı dağıtım, geliştirme ortamı
      kaymasından kaynaklanan daha az kesinti, daha iyi dahili araçlar, daha iyi dokümantasyon.
    </p>
    <p>
      Bu çerçeve Gradle Inc.'den geldi ve DevOps Raporu'nun Durumu'nda resmileştirildi
      (DORA metrikleri: dağıtım sıklığı, teslim süresi, MTTR, değişiklik başarısızlık oranı). Büyük
      teknoloji şirketleri bu unvanı 2019-2021 civarında benimsedi; orta ölçekli şirketler 2022-2024'te;
      2025-2026'da 50'den fazla mühendisi olan neredeyse herkes.
    </p>
    <p>
      Görebileceğiniz yakından ilişkili unvanlar:
    </p>
    <ul>
      <li><strong>Developer Experience Engineer (DevX):</strong> çoğunlukla aynı iş, daha çok ön uç odaklı.</li>
      <li><strong>Platform Engineer:</strong> örtüşen; daha çok altyapı temeline odaklı.</li>
      <li><strong>Build Engineer / Build Systems Engineer:</strong> derin uç uzmanı (Bazel, Buck2, monorepo çalışması).</li>
      <li><strong>Internal Tools Engineer:</strong> genellikle aynı rolün daha eski, daha az prestijli versiyonu.</li>
    </ul>

    <h2 id="growth">Developer productivity engineering büyüyor mu?</h2>
    <p>
      Evet, birden çok ölçülebilir boyutta:
    </p>
    <ul>
      <li>
        LinkedIn'de başlığında &ldquo;Developer Productivity&rdquo; geçen iş ilanları 2022'den 2025'e kabaca 4
        kat arttı (anekdot niteliğinde, ancak birden çok işe alım uzmanı gözlemiyle örtüşüyor).
      </li>
      <li>
        DPE konferansları (DPE Summit, Lead Dev) 2023-2025 boyunca başlatıldı ve büyüdü.
      </li>
      <li>
        NY/CA'daki maaş şeffaflığı açıklamaları, DPE rollerinin aynı seviyedeki genel SWE
        taban çizgilerinin %5-15 üzerinde olduğunu gösteriyor.
      </li>
      <li>
        Çoğu kuruluşun artık adlandırılmış bir &ldquo;Developer Productivity&rdquo; ekibi var
        (eskiden platform/alt yapı altında yer alırdı).
      </li>
    </ul>
    <p>
      Yapısal neden: Şirketler mühendislik ekiplerini, bu ekiplerin üretkenliğini korumak için
      geliştirici deneyimine yapılan yatırımdan daha hızlı büyüttü. Şimdi telafi
      yatırımı yapılıyor ve DPE bu yatırımın yapıldığı alan.
    </p>

    <h2 id="career-arc">Kariyer yolu + tavan</h2>
    <p>
      Tipik ilerleme:
    </p>
    <ol>
      <li>
        <strong>L4 / orta (3-5 yıl):</strong> geliştirici deneyiminin bir köşesine sahip olun —
        derleme sistemi, geliştirme ortamı, gözlemlenebilirlik. Ölçülebilir iyileştirmeler gönderin.
      </li>
      <li>
        <strong>L5 / kıdemli (5-8 yıl):</strong> önemli bir parçaya sahip olun + küçük
        projelere liderlik edin. Ekipler arası girişimler gönderin.
      </li>
      <li>
        <strong>L6 / personel (8-12 yıl):</strong> kuruluş için DPE'nin bir bölümünün teknik
        yönünü belirleyin. Çeyrekler arası projeleri yönetin.
      </li>
      <li>
        <strong>L7 / müdür (12+ yıl):</strong> yüzlerce mühendis seviyesinde şirket için DPE
        stratejisine sahip olun. Bu rollerden az sayıda var, yüksek ücret, yüksek etki.
      </li>
    </ol>
    <p>
      Ücret her seviyede SWE ile rekabetçidir — ortada biraz üstünde, kıdemli+ ile karşılaştırılabilir. Aralıklar için{" "}
      <a href="/tools/dev-tool-salary-estimator">maaş tahmin aracımıza</a> bakın.
    </p>

    <h2 id="dead-end">Dev tools / DPE çıkmaz bir kariyer mi?</h2>
    <p>
      Eleştirinin dar bir haklılık payı var. Argüman:
    </p>
    <ul>
      <li>DPE nadiren en büyük performans değerlendirmelerini alan &ldquo;sıcak&rdquo; ekiptir.</li>
      <li>Bir maliyet merkezidir, gelir merkezi değildir; durgunluklarda bütçe ilk kesilen yerdir.</li>
      <li>Beceriler kuruluşa özgüdür — Bazel büyünüz işveren değiştirdiğinizde doğrudan aktarılmaz.</li>
    </ul>
    <p>
      Karşı argümanlar:
    </p>
    <ul>
      <li>
        Kıdemli DPE mühendisleri, etraflarındaki herkesi hızlandırdıkları için teknolojide en çok
        işe alınan yetenekler arasında defalarca gösterilmiştir.
      </li>
      <li>
        Maliyet merkezi eleştirisi QA, IT, güvenlik için de geçerlidir — ve bunlar hala
        tam teşekküllü kariyerlerdir.
      </li>
      <li>
        Beceriler GERÇEKTEN aktarılır: derleme sistemi tasarımı, CI/CD, gözlemlenebilirlik, dahili
        araçların tümü taşınabilirdir. Satıcıya özgü bilgi, insanların düşündüğünden daha küçük bir
        kısımdır.
      </li>
    </ul>
    <p>
      Dürüst değerlendirme: DPE çıkmaz bir sokak değil, ancak liderliği geliştirici üretkenliğine
      <em>gözle görülür şekilde değer veren</em> işverenleri seçmelisiniz. CTO'nun
      dağıtım sıklığı veya DORA metrikleri hakkında konuştuğu şirketlerde DPE gelişir. CTO'nun
      bunlardan hiç bahsetmediği şirketlerde, değeriniz bilinmez.
    </p>
  </>
);

export const cta = {
  label: "DPE maaşını seviye + bölgeye göre tahmin edin",
  targetSlug: "dev-tool-salary-estimator",
};

export const faq = [
  {
    q: "Developer productivity engineering gerçek bir kariyer mi?",
    a: "Evet — ve 2026'da en hızlı büyüyen uzmanlaşmış kariyer yollarından biri. Büyük teknoloji şirketleri bu unvanı 2019-2021 civarında benimsedi; orta ölçekli şirketler 2022-2024'te; 50'den fazla mühendisi olan neredeyse herkes şimdi. İş ilanları 2022'den bu yana ~4 kat arttı. Ücret her seviyede SWE ile rekabetçi.",
  },
  {
    q: "DPE / developer tools büyüyor mu?",
    a: "Evet, birden çok ölçüde: iş ilanları 2022'den 2025'e 4 kat arttı, DPE Summit + Lead Dev konferansları, genel SWE'ye göre %5-15 prim gösteren maaş şeffaflığı açıklamaları, adlandırılmış DPE ekipleri artık kuruluşlarda standart. Geliştirici deneyimine yönelik telafi yatırımı yapısal itici güçtür.",
  },
  {
    q: "Developer tools oluşturmak çıkmaz bir kariyer mi?",
    a: "Hayır, ancak uyarılarla. Maliyet merkezi eleştirisi geçerlidir ancak DPE'ye özgü değildir (QA, IT, güvenlik için de geçerlidir — ve bunlar tam teşekküllü kariyerlerdir). Beceriler aktarılır: derleme sistemleri, CI/CD, gözlemlenebilirlik taşınabilirdir. Liderliği geliştirici üretkenliğine gözle görülür şekilde değer veren işverenleri seçin — DORA metriği bilincine sahip CTO'lar.",
  },
  {
    q: "DPE ve DevOps arasındaki fark nedir?",
    a: "DevOps, dağıtım ve çalışma zamanı tarafına (altyapı, nöbet, CI/CD boru hatları) odaklanır. DPE, geliştiriciye yönelik tarafa (yerel ortamlar, derleme performansı, dahili araçlar, geliştirici metrikleri) odaklanır. Özellikle her iki işi de tek bir ekibin yaptığı küçük şirketlerde önemli örtüşme vardır. Ölçekte uzmanlaşırlar.",
  },
];