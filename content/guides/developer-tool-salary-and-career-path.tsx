/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Geliştirici araçları oluşturarak aslında ne kadar kazanabilirsiniz — maaşlı bir mühendis,
      bağımsız bir üretici veya bir yan projeyi paraya çeviren biri olarak? 2026'daki cevap
      gerçekten cesaret verici: tam zamanlı geliştirici araçları maaşı, en iyi SWE rollerine
      rakip oluyor, bağımsız üretici geliştirici araçları tüketici bağımsız ürünlerine göre
      daha sık düşük altı haneli ARR seviyesini sürdürüyor ve yan projeden gelire geçiş yolu
      çoğu kategoriden daha kısa bir ilk-para-zamanına sahip.
    </p>
    <p>
      Bu rehber, her üç yolu da dürüst rakamlarla ele alıyor.
    </p>
  </>
);

export const toc = [
  { id: "fulltime", label: "Tam zamanlı geliştirici araçları maaşları" },
  { id: "indie", label: "Bağımsız geliştirici araçları" },
  { id: "side-project", label: "Yan projenizi paraya çevirmek" },
  { id: "monetization", label: "Geliştirici araçlarıyla para kazanılır mı?" },
];

export const body = (
  <>
    <h2 id="fulltime">Tam zamanlı geliştirici araçları maaşları</h2>
    <p>
      Seviye / kademe / bölgeye göre aralıklar için{" "}
      <a href="/tools/dev-tool-salary-estimator">maaş hesaplayıcımızı</a> kullanın. 2026 ABD için hızlı referans (toplam ücret orta noktaları):
    </p>
    <ul>
      <li>Junior (0–2 yıl) standart teknolojide: ~$110K. FAANG'de: ~$160K.</li>
      <li>Mid (3–5 yıl) standart teknolojide: ~$180K. FAANG'de: ~$260K.</li>
      <li>Senior (5–8 yıl) standart teknolojide: ~$240K. FAANG'de: ~$350K.</li>
      <li>Staff (8–12 yıl) standart teknolojide: ~$340K. FAANG'de: ~$500K.</li>
      <li>Principal (12+ yıl) standart teknolojide: ~$450K. FAANG'de: ~$700K.</li>
    </ul>
    <p>
      DPE / DevTools rolleri, kıtlık nedeniyle genel SWE'nin biraz üzerinde seyreder.
      Bu prim her seviyede tutarlıdır — ürün mühendisliği maaşının %5 ila %15'i arasında bir yerde.
    </p>

    <h2 id="indie">Bağımsız geliştirici araçları — gerçekçi olan nedir</h2>
    <p>
      2026'da geliştirici araçları bağımsız pazarı insanların düşündüğünden daha büyük:
    </p>
    <ul>
      <li>
        <strong>Hobi seviyesi:</strong> $0–$1K MRR. Çoğu bağımsız geliştirici aracı projesi
        sonsuza kadar burada kalır — ve bu genellikle sorun değildir. Portföy + kitle etkileri
        bu ölçekte bile birikir.
      </li>
      <li>
        <strong>Sürdürülebilir yan gelir:</strong> $1K–$5K MRR. Odaklanmış bir çalışmayla
        12–24 ayda ulaşılabilir. Günlük işinizi bırakmadan "f-you fonu"nu karşılar.
      </li>
      <li>
        <strong>Bağımsız tam zamanlı:</strong> $5K–$15K MRR. Birçok bağımsız kurucunun
        maaşını değiştirdiği yer. Ödeme yapan prosumer / KOBİ kullanıcıları olan dar ama derin araçlar için gerçekçi.
      </li>
      <li>
        <strong>Bağımsız ölçek:</strong> $15K–$50K MRR. Ya güçlü bir prosumer hiti ya da
        biraz B2B ivmesi gerektirir. Bazı kurucular için tek başına mümkün; genellikle bir veya iki
        serbest çalışan kiralamayı gerektirir.
      </li>
      <li>
        <strong>Bootstrapped iş:</strong> $50K+ MRR. Bu ölçekte gerçek bir bootstrapped
        işe geçtiniz. Bağımsız kurucular bazen bunu sürdürür; daha sık olarak 1–3 çalışan işe alırsınız.
      </li>
    </ul>
    <p>
      Seviyeleri ayıran şey: dağıtım, mühendislik değil. $0 MRR'de kalan bağımsız
      geliştirici aracı kurucuları genellikle kimsenin duymadığı iyi araçlar inşa etti. $5K+ seviyesindekiler
      koda olduğu kadar içerik / topluluk / kitleye de yatırım yaptı.
    </p>

    <h2 id="side-project">Geliştirici aracı yan projenizi paraya çevirmek</h2>
    <p>
      Küçük ölçekte tipik dönüşüm oranına göre sıralanmış beş gerçek para kazanma yolu:
    </p>
    <ol>
      <li>
        <strong>Açık kaynak üzerinde barındırılan SaaS katmanı.</strong> Açık çekirdek modeli.
        En yüksek gelir tavanı. Barındırılan altyapı oluşturmayı gerektirir; daha uzun sürer.
      </li>
      <li>
        <strong>Bireyler için Pro özellikleri.</strong> Güç özellikleri için ayda $5–$20.
        Ödemeye istekli net bir güç kullanıcı segmenti olduğunda çalışır (gelişmiş arama, daha büyük limitler, entegrasyonlar).
      </li>
      <li>
        <strong>Takım / iş katmanı.</strong> Şirket özellikleri için ayda koltuk başına $20–$200
        (SSO, denetim günlükleri, rol tabanlı erişim). Müşteri başına daha yüksek gelir; daha uzun satış döngüsü.
      </li>
      <li>
        <strong>Sponsorluk / GitHub Sponsors.</strong> Geniş bir ücretsiz kullanıcı tabanına sahip projeler için çalışır.
        Popüler projeler için tipik $0–$2K/ay; kurumsal sponsorları olan projeler için ara sıra daha fazla.
      </li>
      <li>
        <strong>Kullanım tabanlı fiyatlandırma.</strong> Çağrı başına / derleme başına / koltuk-saati başına ödeme.
        Fiyatı değerle uyumlu hale getirir ancak faturalama karmaşıklığı ekler.
      </li>
    </ol>
    <p>
      İlk para kazanma denemesi için: <strong>bireyler için ayda $9–$15 arası Pro özellikleriyle başlayın</strong>.
      En düşük satış döngüsü sürtünmesi, yinelemesi kolay, daha uzun vadeli hareketi çözerken gelir oluşturur.
    </p>

    <h2 id="monetization">Geliştirici araçları oluşturarak para kazanılır mı?</h2>
    <p>
      Evet — ve yol, tüketici yan projelerinden daha anlaşılır.
      2026'da işe yarayan kalıplar:
    </p>
    <ul>
      <li>
        <strong>Günlük işinizde gördüğünüz bir B2B sorununu çözün.</strong> Sentry,
        Linear, dbt'nin köken hikayesi. Sorunu derinden biliyorsunuz çünkü yaşadınız;
        alıcı aynı durumdaki şirketler.
      </li>
      <li>
        <strong>İyice nişleşin.</strong> "Postgres geçiş incelemesi için araç"
        dönüşüm sağlar. "Veritabanı işlemleri için araç" sağlamaz.
      </li>
      <li>
        <strong>Teknik içerik aracılığıyla dağıtın.</strong> En başarılı
        bağımsız geliştirici aracı kurucuları, alanları hakkında derinlemesine yazarlar.
        İçerik doğru alıcıları çeker; araç onları paraya çevirir.
      </li>
      <li>
        <strong>Mevcut bir dağıtım kanalını kullanın.</strong> VS Code uzantıları,
        GitHub uygulamaları, Slack uygulamaları, Chrome uzantıları, Stripe Apps Marketplace — hepsi
        size ücretsiz olarak pazar yeri varlığı + ödeme altyapısı sağlar.
      </li>
      <li>
        <strong>Sabırlı olun.</strong> En başarılı bağımsız geliştirici aracı projelerinin
        lansmandan anlamlı gelire ulaşması 12-36 ay sürdü. Birikim sizin lehinize çalışır;
        6. ayda pes etmeyin.
      </li>
    </ul>
    <p>
      Yapılandırılmış bir yaklaşım için:{" "}
      <a href="/tools/dev-tool-idea-scorer">fikir puanlayıcımızla</a> doğrulayın,
      <a href="/tools/cli-dx-checklist">CLI DX kontrol listemizle</a> spesifikasyonlara göre oluşturun,
      ardından sistematik dağıtım yapın.
    </p>
  </>
);

export const cta = {
  label: "Seviye + bölgeye göre geliştirici araçları maaşını tahmin edin",
  targetSlug: "dev-tool-salary-estimator",
};

export const faq = [
  {
    q: "Geliştirici aracı maaşı: ne kadar kazanabilirsiniz?",
    a: "ABD 2026 toplam ücret orta noktaları: junior $110K-$160K, mid $180K-$260K, senior $240K-$350K, staff $340K-$500K, principal $450K-$700K. DPE/DevTools, kıtlık nedeniyle genel SWE'nin %5-15 üzerindedir. Seviye + kademe + bölgeye göre aralıklar için maaş hesaplayıcımızı kullanın.",
  },
  {
    q: "Geliştirici araçları oluşturarak para kazanılır mı?",
    a: "Evet — tüketici yan projelerinden daha anlaşılır. Kalıplar: günlük işinizden bir B2B sorununu çözün, iyice nişleşin ('Postgres geçiş incelemesi', 'veritabanı işlemleri'nden daha iyidir), teknik içerik aracılığıyla dağıtın, mevcut pazaryerlerini kullanın (VS Code, GitHub Apps, Slack, Stripe) ve sabırlı olun (anlamlı gelire 12-36 ay).",
  },
  {
    q: "Bağımsız oyun geliştiricileri ve geliştirici aracı bağımsız üreticileri gelir açısından nasıl karşılaştırılır?",
    a: "Geliştirici aracı bağımsız üreticileri, bağımsız oyun geliştiricilerine göre $1K-$15K MRR'ye daha güvenilir bir şekilde ulaşır. Geliştirici aracı alıcılarına (geliştiriciler/şirketler) teknik içerik + pazaryerleri aracılığıyla ulaşmak daha kolaydır; bağımsız oyunların geniş tüketici dağıtımına ihtiyacı vardır. Her ikisi de daha yüksek seviyelere ulaşabilir ancak geliştirici araçlarının daha yüksek bir tabanı vardır.",
  },
  {
    q: "Geliştirici aracı yan projemi nasıl paraya çevirebilirim?",
    a: "Bireyler için ayda $9-$15 arası Pro özellikleriyle başlayın (en düşük satış sürtünmesi). Prosumer ivmesi elde ettiğinizde takım/iş katmanı ekleyin (koltuk başına $20-$200). Açık kaynak üzerinde barındırılan SaaS en yüksek tavana sahiptir ancak daha fazla altyapı gerektirir. GitHub Sponsors, geniş ücretsiz kullanıcı tabanları için çalışır. Kullanım tabanlı fiyatlandırma değerle uyumlu hale getirir ancak faturalama karmaşıklığı ekler.",
  },
];