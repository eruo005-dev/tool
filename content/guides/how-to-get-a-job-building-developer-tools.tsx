/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      İlk dev-tools işinizi almak çoğunlukla bir portföy + konumlandırma oyunudur.
      Kodlama mülakatı performansının baskın olduğu genel SWE rollerinin aksine,
      dev-tools işe alım yöneticileri, diğer geliştiricilerin gerçekten kullanmak isteyeceği
      bir aracı teslim edip edemeyeceğinizi önemser — ve kamuya açık çalışmalarınız
      durumu ya lehinize ya da aleyhinize çevirir.
    </p>
    <p>
      Bu rehber eksiksiz bir oyun kitabıdır: dev-tools için hangi şirketler işe alım yapar,
      işe alım yöneticileri ne arar, kariyer değiştirenler için en hızlı yol ve
      teklifleri kapatmanızı sağlayacak portföy + mülakat hazırlığı.
    </p>
  </>
);

export const toc = [
  { id: "companies", label: "Dev-tools rolleri için işe alım yapan şirketler" },
  { id: "what-hiring-managers-want", label: "İşe alım yöneticilerinin aradıkları" },
  { id: "first-job", label: "İlk dev-tools işinizi almak" },
  { id: "interview-prep", label: "İşe yarayan mülakat hazırlığı" },
];

export const body = (
  <>
    <h2 id="companies">Dev-tools rolleri için işe alım yapan şirketler</h2>
    <p>
      İşe alma olasılığı + ekibin büyüklüğüne göre kategorize edilmiştir:
    </p>
    <ul>
      <li>
        <strong>Adlandırılmış DPE/DevX ekiplerine sahip büyük teknoloji şirketleri:</strong> Google (Engineering
        Productivity), Meta (Developer Infrastructure), Microsoft (Developer Velocity),
        Amazon (Builder Tools), Apple (Internal Tools), Stripe (Developer Productivity),
        Shopify (Developer Acceleration), Airbnb (Tooling), Netflix (Productivity
        Engineering). 1. kademe ücret.
      </li>
      <li>
        <strong>Dev-tools şirketleri (ürünün kendisi araçtır):</strong> GitHub, GitLab,
        JetBrains, Vercel, Netlify, Cloudflare, Datadog, Sentry, HashiCorp, Confluent,
        MongoDB, Posthog, Linear, dbt Labs, Supabase. Ücret değişkendir; misyon uyumu
        yüksektir.
      </li>
      <li>
        <strong>AI laboratuvarları + AI araçları girişimleri:</strong> Anthropic, OpenAI, Cohere,
        Replicate, LangChain, Cursor (Anysphere ekibi), çeşitli YC AI girişimleri. 1.
        kademe ücret laboratuvarlarda; girişimlerde yüksek potansiyel.
      </li>
      <li>
        <strong>Platform ekipleri olan orta ölçekli şirketler:</strong> Stripe, Uber, Lyft,
        DoorDash, Airbnb, Square, Mercado Libre, Booking.com, Spotify (Backstage
        ekibi ünlü örnektir). Güçlü DPE bütçeleri.
      </li>
      <li>
        <strong>Açık kaynak ağırlıklı şirketler:</strong> Red Hat, Canonical, GitLab, Hugging
        Face, Sourcegraph, Postman. Genellikle doğrudan AKK katkıda bulunanları işe alırlar.
      </li>
    </ul>
    <p>
      Şu ifadeleri açıkça belirten rollere odaklanın: &ldquo;Developer Productivity,&rdquo;
      &ldquo;Developer Experience,&rdquo; &ldquo;Platform Engineer,&rdquo; &ldquo;Build
      Engineer,&rdquo; &ldquo;Internal Tools&rdquo; veya &ldquo;Tooling Engineer&rdquo;.
    </p>

    <h2 id="what-hiring-managers-want">İşe alım yöneticilerinin aradıkları</h2>
    <p>
      Kamuya açık işe alım ilanları ve dev-tools işe alım yöneticileriyle yapılan gayriresmi
      görüşmeler tutarlı bir şekilde beş şeyi ortaya çıkarmaktadır:
    </p>
    <ol>
      <li>
        <strong>Kamuya açık çalışmalar.</strong> Teslim ettiğiniz en az 1-2 dev
        aracı (kendi aracınız veya önemli AKK katkıları) olan bir GitHub profili. Bu
        en büyük sinyaldir — işleri bitirebildiğinizi ve zevkiniz olduğunu gösterir.
      </li>
      <li>
        <strong>Kullanıcılar için empati.</strong> Araçlar, yazarları kullanıcılarının
        acısını hissetmediğinde başarısız olur. Mülakatlar bunu &ldquo;X aracını 50 mühendislik bir ekibe nasıl yaygınlaştıracağınızı anlatın&rdquo; diyerek sorgular.
      </li>
      <li>
        <strong>Sistem düşüncesi.</strong> Dev araçları build, CI, deploy, runtime ile
        ilgilidir. İşe alım yöneticileri, yalnızca önünüzdeki dilimi değil, tüm
        hattı kapsayacak şekilde akıl yürütme yeteneğini test eder.
      </li>
      <li>
        <strong>Dokümantasyon + iletişim.</strong> Araçlar dokümanlarla yaşar veya ölür.
        Temiz bir README ve net PR açıklamaları yazan bir aday öne çıkar.
      </li>
      <li>
        <strong>Pragmatizm.</strong> Dev araçları, gerçek sorunları mümkün olan en basit
        araçlarla çözme disiplinidir. Aşırı mühendislik kırmızı bayraktır; görüşlü ancak
        orantılı tasarım yeşil bayraktır.
      </li>
    </ol>

    <h2 id="first-job">İlk dev-tools işinizi almak</h2>
    <p>
      Normal geliştiriciden dev araçlarına giden en hızlı yollar (etki sırasına göre):
    </p>
    <ol>
      <li>
        <strong>İç rotasyon.</strong> Mevcut işvereninizden platform/DevX ekibine 6 aylık
        bir rotasyon isteyin. Maaşınızı korursunuz, portföy oluşturursunuz ve
        unvanı elinizde bulundurarak dışarıya başvurursunuz. Bu, herhangi bir dış iş
        aramasından daha hızlı dönüşüm sağlar.
      </li>
      <li>
        <strong>Bir AKK dev aracı teslim edin.</strong> 8 haftalık gece ve hafta sonu.
        Gerçek araç, oyuncak değil. Yüksek sinyalli bir şey seçmek için{" "}
        <a href="/tools/dev-tool-idea-scorer">fikir puanlayıcımızı</a> kullanın. Başvurunuzda
        GitHub bağlantısıyla dev-tools rollerine başvurun.
      </li>
      <li>
        <strong>Dev-tool projelerine önemli AKK katkıları.</strong> Gerçekten kullandığınız
        1-2 proje seçin. Önemsiz olmayan PR'lar gönderin (yazım hatası düzeltmeleri değil; gerçek özellikler,
        dokümantasyon revizyonları veya test kapsamı iyileştirmeleri). Bunlara
        başvurularda atıfta bulunun.
      </li>
      <li>
        <strong>Konferans konuşması veya teknik blog serisi.</strong> Bir dev-tools
        konusu hakkında 6 yazı yazın (CI/CD geçişiniz, build sistemi optimizasyonunuz,
        dahili araç dönüşümünüz). Kamuya açık güvenilirlik oluşturur. Bazı şirketler (Stripe,
        Cloudflare) açıkça blog yazarlarını işe alır.
      </li>
      <li>
        <strong>Hayran olduğunuz ekiplere soğuk e-posta gönderme.</strong> LinkedIn'de
        DPE/DevX liderlerini bulun, teslim ettikleri belirli bir şeye atıfta bulunan 100
        kelimelik bir not gönderin, GitHub'ınızı ekleyin. ~%10 yanıt oranı; sıfırdan iyidir.
      </li>
    </ol>

    <h2 id="interview-prep">İşe yarayan mülakat hazırlığı</h2>
    <p>
      Dev-tools mülakatları genel SWE süreçlerinden farklıdır. Bekleyin:
    </p>
    <ul>
      <li>
        <strong>Geliştirici araçları çerçevesiyle sistem tasarımı.</strong> &ldquo;Twitter tasarlayın&rdquo;
        yerine &ldquo;Dahili bir özellik bayrağı servisi tasarlayın.&rdquo;
        Bunları özellikle pratik edin — kısıtlamalar farklıdır.
      </li>
      <li>
        <strong>Ürün / UX soruları.</strong> &ldquo;200 mühendise yeni bir dahili aracın
        yaygınlaştırma planını anlatın.&rdquo; &ldquo;X için geriye dönük uyumluluğu nasıl
        yönetirdiniz?&rdquo; Geçmiş çalışmalarınızdan hikayeler hazırlayın.
      </li>
      <li>
        <strong>API tasarımı.</strong> &ldquo;[Bir dev aracı] için API'yi tasarlayın.&rdquo;
        Mülakat öncesinde aip.dev (Google'ın stil kılavuzu) ve Stripe'ın API tasarım
        blogunu okuyun.
      </li>
      <li>
        <strong>Kodlama turları:</strong> hala olur, ancak genellikle kıdemli+ seviyelerde
        daha düşük ağırlıklıdır. Yalnızca LeetCode yerine CLI tarzı problemler (bir komutu ayrıştırma, bir dizini dolaşma)
        pratik edin.
      </li>
      <li>
        <strong>Belirli araçlar hakkında trivia.</strong> Stack'inizi bilin — bir Bazel
        ekibine başvuruyorsanız Bazel'i tazeleyin. Bir CI/CD rolü ise GitHub Actions /
        GitLab CI / Buildkite farklarını bilin.
      </li>
    </ul>
    <p>
      Özgeçmişinizdeki portföy bağlantısı + geçmiş dev-tools çalışmalarından net ve belirli
      hikayeler, bu roller için LeetCode desen ezberlemesinden daha önemlidir.
    </p>
  </>
);

export const cta = {
  label: "Seviye + kademe + bölgeye göre maaş aralıkları",
  targetSlug: "dev-tool-salary-estimator",
};

export const faq = [
  {
    q: "Geliştirici araçları oluşturan bir işi nasıl alırım?",
    a: "Öncelik sırasına göre beş yol: (1) işvereninizin platform/DevX ekibine iç rotasyon — açık ara en hızlısı, (2) 8 hafta içinde bir AKK dev aracı teslim edin, (3) kullandığınız dev-tool projelerine önemli PR'lar, (4) 6 yazılık bir teknik blog serisi yazın, (5) LinkedIn'de DPE liderlerine belirli GitHub çalışmalarıyla soğuk e-posta gönderin.",
  },
  {
    q: "Hangi şirketler geliştirici araç rolleri için işe alım yapar?",
    a: "Büyük teknoloji (Google, Meta, Microsoft, Amazon, Apple) adlandırılmış DPE ekipleri. Dev-tool ürün şirketleri (GitHub, GitLab, Vercel, Datadog, Sentry, HashiCorp). AI laboratuvarları + araç girişimleri (Anthropic, OpenAI, LangChain, Cursor). Platform ekipleri olan orta ölçekli şirketler (Stripe, Uber, Lyft, Spotify). AKK ağırlıklı (Red Hat, GitLab, Hugging Face).",
  },
  {
    q: "İşe alım yöneticileri geliştirici araç rollerinde ne arar?",
    a: "Kamuya açık çalışmalar (1-2 teslim edilmiş araç veya önemli AKK PR'ları), kullanıcılar için empati (yaygınlaştırma muhakemesi), sistem düşüncesi (build/CI/deploy/runtime genelinde), dokümantasyon kalitesi ve pragmatizm (gerçek sorunları en basit araçlarla çözmek — aşırı mühendislik değil). GitHub portföy bağlantısı LeetCode tekrarlarını yener.",
  },
  {
    q: "Kariyer değiştiren biri olarak ilk geliştirici araçları işimi nasıl alırım?",
    a: "İşvereninizin bir platform ekibi varsa iç rotasyon — en hızlı yol, maaşınızı korur, unvanı alırsınız. Yoksa, 8 hafta içinde bir AKK dev aracı teslim edin (iyi seçmek için fikir puanlayıcımızı kullanın), ardından GitHub bağlantısıyla dışarıya başvurun. Kullandığınız bir araca önemli bir AKK katkısı eklemek daha da hızlandırır.",
  },
];