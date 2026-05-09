/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      GitHub vs GitLab ve alternatifleri, ayrıca ölçeklenme tartışmalarında gündeme gelen ekip yönetimi özellikleri: birden çok depoyu yönetme, teknik olmayan iş arkadaşlarını ekibe dahil etme, proje yönetimi ve GitHub'ı her şeyi kapsayan bir platform olarak kullanma sorusu.
    </p>
  </>
);

export const toc = [
  { id: "github-vs-gitlab", label: "GitHub vs GitLab" },
  { id: "deepseek", label: "DeepSeek + Yapay Zeka odaklı alternatifler" },
  { id: "find-devs", label: "Yakınınızdaki / becerilerinize sahip geliştiricileri bulma" },
  { id: "multi-repos", label: "Birden çok depoyu organize etme" },
  { id: "non-tech-coworker", label: "Teknik olmayan iş arkadaşları + GitHub" },
  { id: "project-management", label: "PM aracınızı GitHub ile değiştirme" },
];

export const body = (
  <>
    <h2 id="github-vs-gitlab">Startup'ım için GitHub vs GitLab</h2>
    <p>
      2026'daki çoğu startup için: GitHub. Nedenleri:
    </p>
    <ul>
      <li>Daha büyük ağ etkileri — geliştiriciler GitHub'ı bekler.</li>
      <li>Daha iyi geliştirici aracı entegrasyonları (çoğu üçüncü taraf araç önce GitHub'ı hedefler).</li>
      <li>Daha güçlü yapay zeka özellikleri (Copilot platformun bir parçasıdır).</li>
      <li>Daha büyük pazar yeri + daha fazla başlangıç eylemi.</li>
    </ul>
    <p>
      GitLab'ın öne çıktığı yerler:
    </p>
    <ul>
      <li>
        <strong>Kendi sunucunda barındırma gereksinimleri.</strong> GitLab CE (ücretsiz, kendi sunucunda barındırılan) en olgun seçenektir. GitHub Enterprise Server mevcuttur ancak daha pahalıdır.
      </li>
      <li>
        <strong>Yerleşik CI/CD odağı.</strong> GitLab CI mükemmeldir; doğal olarak entegredir. GitHub Actions arayı kapattı ancak GitLab CI'nın YAML'ı bazen daha temizdir.
      </li>
      <li>
        <strong>Tek entegre platform.</strong> GitLab, depo + CI/CD + kayıt defteri + izleme + dağıtımları daha sıkı bir şekilde birleştirir.
      </li>
      <li>
        <strong>Uyumluluk / şirket içi.</strong> GitLab'ın kendi sunucunda barındırılan teklifi, düzenlemeye tabi sektörler için genellikle tedarik edilmesi daha kolaydır.
      </li>
    </ul>
    <p>
      Karar: bulut + küçük ekip → GitHub. Kendi sunucunda barındırma gereksinimi veya uyumluluk rejimi → GitLab. Çok fazla düşünüp kalmayın; ikisi de işe yarar.
    </p>

    <h2 id="deepseek">DeepSeek daha iyi bir yapay zeka odaklı alternatif mi?</h2>
    <p>
      DeepSeek, açık ağırlıklı bir modeldir (herhangi bir kod barındırma platformundan ayrı). İlgili karşılaştırma, yapay zeka kodlama araçları içindir:
    </p>
    <ul>
      <li>
        <strong>DeepSeek + Continue.dev veya Cursor:</strong> gizlilik isteyenler için mükemmel açık kaynak alternatifi. Kodlama görevlerinde ticari modellere yakın kalite. Kendi sunucunuzda barındırmak güçlü bir GPU gerektirir.
      </li>
      <li>
        <strong>Genel kodlama için Copilot'a karşı:</strong> Copilot daha sıkı IDE entegrasyonuna, daha geniş IDE desteğine ve fikri mülkiyet tazminatına sahiptir. Continue üzerinden DeepSeek, kurulum karmaşıklığı karşılığında gizlilik ve özelleştirme sunar.
      </li>
      <li>
        <strong>Kuruluşlar için:</strong> Copilot Enterprise, tedarik olgunluğu konusunda hala kazanır. DeepSeek tabanlı yığınlar, güçlü gizlilik gereksinimleri ve teknik bütçesi olan ekipler için bir seçenektir.
      </li>
    </ul>

    <h2 id="find-devs">Yakınımdaki / belirli becerilere sahip geliştiricileri nasıl bulurum?</h2>
    <p>
      GitHub'ın yerleşik araması:
    </p>
    <ul>
      <li>
        <strong>Kullanıcı araması:</strong> github.com/search?q=location:Berlin+language:Rust+followers:&gt;100&type=Users (Boolean niteleyicileri çalışır). Konum + dil etkinliği + takipçi sayısına göre geliştiricileri döndürür.
      </li>
      <li>
        <strong>Yıldız + güncellik bazında depo araması:</strong> bir alandaki aktif bakıcıları bulur.
      </li>
      <li>
        <strong>Sorun + PR etkinliği aramaları:</strong> yığınınıza aktif olarak katkıda bulunan geliştiricileri belirler.
      </li>
    </ul>
    <p>
      GitHub'ın ötesinde:
    </p>
    <ul>
      <li>Yerel buluşmalar + konferanslar (hala en yüksek sinyalli bağlantıları üretir).</li>
      <li>Stack Overflow Talent (ücretli; yığınınızdaki soruları yanıtlayan geliştiricileri hedefler).</li>
      <li>Geliştirici odaklı serbest çalışma platformları (Toptal, Codementor, Hired).</li>
      <li>Yığınınızdaki AKK toplulukları + Discord sunucuları.</li>
    </ul>

    <h2 id="multi-repos">Tek bir ürün için birden çok depoyu nasıl organize ederim?</h2>
    <p>
      İki desen:
    </p>
    <ul>
      <li>
        <strong>Monorepo:</strong> tüm kod tek bir depoda. Tek CI, kesintisiz değişiklikler için tek PR, kolay yeniden düzenleme. Araçlar: Turborepo, Nx, Bazel. Binlerce mühendise kadar çalışır (Google, Meta).
      </li>
      <li>
        <strong>Polyrepo:</strong> her hizmet için bir depo. Bağımsız CI, bağımsız dağıtımlar, net sahiplik. Koordinasyon maliyeti artar; depolar arası değişiklikler birden çok PR gerektirir.
      </li>
    </ul>
    <p>
      5-50 kişilik ekipler için: 2026'da monorepo genellikle doğru seçimdir. Araçlar, 2018'deki "monorepo çok zor" itirazını geçersiz kılacak kadar gelişti. 50 mühendisin üzerinde: kuruluş yapınıza göre duruma özel karar verin.
    </p>
    <p>
      Monorepo olmayan durumlar için: GitHub Projects (depolar arası görünümler), kuruluş düzeyinde CODEOWNERS ve kuruluş düzeyinde sırlar koordinasyona yardımcı olur.
    </p>

    <h2 id="non-tech-coworker">Teknik olmayan iş arkadaşım GitHub'ı kullanabilir mi?</h2>
    <p>
      Belirli kullanım durumları için evet; tam işbirliği eşitliği için hayır.
    </p>
    <ul>
      <li>
        <strong>İşe yarayanlar:</strong> GitHub web arayüzü üzerinden dosya düzenleme, sorun açma, PR'ları inceleme, kod hakkında yorum yapma, proje panolarına erişme.
      </li>
      <li>
        <strong>İşe yaramayanlar:</strong> Git CLI, dal yönetimi, PR oluşturma akışı, birleştirme çakışması çözümü.
      </li>
      <li>
        <strong>İşe yarayan iş akışı:</strong> teknik olmayan katkıda bulunanlar, bir dalda (GitHub otomatik olarak bir tane oluşturur) doğrudan web arayüzünde Markdown düzenler, bir PR açar, bir mühendis inceler ve birleştirir. Dokümantasyon, içerik, tasarım şartnameleri için yaygındır.
      </li>
      <li>
        <strong>Bunun ötesinde:</strong> onlar adına GitHub'a yayınlayan bir CMS (Forestry, Tina, Sanity) düşünün. Teknik olmayan katkıda bulunanların tanıdık bir arayüzde çalışmasını sağlar; mühendisler Git'te çalışır.
      </li>
    </ul>

    <h2 id="project-management">GitHub, proje yönetimi aracımın yerini alabilir mi?</h2>
    <p>
      Yalnızca mühendislik ekipleri için: evet, genellikle. GitHub Issues + Projects + Milestones, sprint planlamasını, kanban panolarını, bağımlılık takibini ve tükenme grafiklerini kapsar. Mühendislik odaklı startup'ların çoğu bunu yapar.
    </p>
    <p>
      Yetersiz kaldığı yerler:
    </p>
    <ul>
      <li>
        <strong>Çapraz fonksiyonel ekipler.</strong> Mühendislik dışı (satış, pazarlama, operasyon) ekipler GitHub UX'i ile zorlanır. Linear / Jira / Monday, çapraz fonksiyonel durumu daha iyi yönetir.
      </li>
      <li>
        <strong>Zaman takibi.</strong> GitHub'ın güçlü yanı değil. Ayrı bir araç (Toggl, Harvest) veya özel bir PM platformu gerekir.
      </li>
      <li>
        <strong>Yol haritası tarzı planlama.</strong> GitHub Projects'in bir yol haritası görünümü vardır ancak "üç aylık plan" sunumları için Linear veya Jira'nınki kadar cilalı değildir.
      </li>
      <li>
        <strong>Müşteriye yönelik iş takibi.</strong> Destek biletleri, müşteri talepleri, hesaba özel işler genellikle CRM / destek aracına gider.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Ekibiniz için Actions maliyetlerini tahmin edin",
  targetSlug: "github-actions-cost-estimator",
};

export const faq = [
  {
    q: "GitHub, startup'ım için gerçekten GitLab'dan daha mı iyi?",
    a: "Bulut + küçük ekip için: evet — daha büyük ağ etkileri, daha iyi entegrasyonlar, yapay zeka özellikleri, pazar yeri. GitLab, kendi sunucunuzda barındırma gereksinimleri, uyumluluk rejimleri ve tek bir entegre platform (depo + CI + kayıt defteri + izleme + dağıtım) isteyen ekipler için kazanır. Çok uzun süre düşünüp kalmayın; ikisi de işe yarar.",
  },
  {
    q: "DeepSeek, ekibim için GitHub'dan daha iyi bir alternatif mi?",
    a: "DeepSeek bir yapay zeka modelidir, bir barındırma platformu değil. Yapay zeka kodlama araçları için: DeepSeek + Continue.dev veya Cursor, kurulum karmaşıklığı karşılığında gizlilik ve özelleştirme sunar. Copilot, kuruluş ölçeğinde IDE entegrasyon genişliği ve fikri mülkiyet tazminatı konusunda hala kazanır.",
  },
  {
    q: "Yakınımdaki veya becerilerime sahip geliştiricileri nasıl bulurum?",
    a: "Boolean niteleyicileriyle (location:X language:Y followers:>100) GitHub kullanıcı araması. Yıldız + güncellik bazında depo araması, aktif bakıcıları belirler. GitHub'ın ötesinde: yerel buluşmalar, konferanslar, Stack Overflow Talent, serbest çalışma platformları (Toptal, Codementor), AKK Discord sunucuları.",
  },
  {
    q: "Tek bir ürün için birden çok depoyu nasıl organize ederim?",
    a: "İki desen. Monorepo: tüm kod tek bir depoda, tek CI, kolay yeniden düzenleme (araçlar: Turborepo, Nx, Bazel). Polyrepo: her hizmet için bir depo, bağımsız CI, net sahiplik. 2026'da 5-50 kişilik ekipler için: monorepo genellikle doğru. 50 mühendisin üzerinde: duruma özel.",
  },
  {
    q: "Teknik olmayan iş arkadaşım GitHub'ı kullanabilir mi?",
    a: "Belirli görevler için evet — web arayüzü üzerinden dosya düzenleme, sorun açma, PR'ları inceleme, yorum yapma. Bunun ötesinde hayır — Git CLI, dal yönetimi, birleştirme çakışması çözümü. Dokümantasyon/içerik işbirliği için, GitHub'a yayınlayan bir CMS (Forestry, Tina, Sanity) kullanın, böylece teknik olmayan katkıda bulunanlar tanıdık arayüzlerde çalışır.",
  },
  {
    q: "GitHub, proje yönetimi aracımın yerini alabilir mi?",
    a: "Yalnızca mühendislik ekipleri için: genellikle evet. Issues + Projects + Milestones, sprint planlamasını, kanban'ı, bağımlılıkları, tükenmeyi kapsar. Çapraz fonksiyonel ekiplerde (Linear/Jira/Monday daha iyi yönetir), zaman takibinde (Toggl/Harvest), cilalı yol haritası sunumlarında ve müşteriye yönelik iş takibinde (CRM) yetersiz kalır.",
  },
];