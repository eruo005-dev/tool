/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      GitHub Actions'ın &ldquo;DevOps uzmanlığı gerektirdiği&rdquo; yönünde bir ünü var.
      Bu, %90'lık durum için doğru değil. Çoğu ekip, PR'da test + main'de dağıtım yapmak ister; her ikisi de
      pazaryerindeki hazır action'ları kullanan 30 satırlık YAML dosyalarıdır. Bu
      kılavuz, bir CI/CD uzmanı olmadan Actions'ı kullanmak için pratik bir oyun kitabıdır.
    </p>
  </>
);

export const toc = [
  { id: "automate-tests", label: "DevOps işe almadan testleri otomatikleştirin" },
  { id: "deploy", label: "Uygulamanızı GitHub üzerinden dağıtın" },
  { id: "speed-up", label: "Otomasyonla geliştirmeyi hızlandırın" },
  { id: "common-patterns", label: "Yaygın kalıplar + şablonlar" },
];

export const body = (
  <>
    <h2 id="automate-tests">DevOps işe almadan kod testleri nasıl otomatikleştirilir</h2>
    <p>
      Minimum uygulanabilir test iş akışı:
    </p>
    <pre><code>{`name: Tests
on:
  pull_request:
  push:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4   # veya setup-python, setup-go, vb.
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test`}</code></pre>
    <p>
      <code>.github/workflows/tests.yml</code> olarak kaydedin. Push yapın. Testler her PR'da
      ve main'e yapılan her birleştirmede çalışır. Kurulum toplam 30 dakika sürer. Çoğu dil ekosisteminin
      eşdeğer bir hazır action'ı vardır (setup-python, setup-go, setup-java).
    </p>
    <p>
      Testler oturduktan sonra kapsam raporlaması ekleyin:
    </p>
    <ul>
      <li>Codecov / Coveralls entegrasyonu, kendi action'ları aracılığıyla.</li>
      <li>Aynı iş akışında lint çalıştırın (eslint, ruff, golangci-lint).</li>
      <li>Platformlar arası ihtiyacınız varsa, bir işletim sistemi / Node sürüm matrisinde çalıştırın.</li>
    </ul>

    <h2 id="deploy">Uygulamamı GitHub'ı kullanarak nasıl dağıtabilirim?</h2>
    <p>
      Üç yaygın kalıp:
    </p>
    <ol>
      <li>
        <strong>Vercel / Netlify / Cloudflare Pages.</strong> Deponuzu
        GitHub uygulamaları aracılığıyla bağlayın. Main'e push yapıldığında otomatik dağıtım. Sizin tarafınızda sıfır CI/CD kurulumu.
        Web uygulamaları için en az dirençli yol.
      </li>
      <li>
        <strong>GitHub Actions, bulutunuza dağıtır.</strong> Anahtarsız kimlik doğrulama için OIDC kullanın
        (modern en iyi uygulama). AWS (aws-actions/configure-aws-credentials), GCP (google-github-actions/auth),
        Azure (azure/login) için hazır action'lar mevcuttur. Ardından dağıtım komutunuzu çalıştırın (terraform apply, kubectl
        apply, gcloud run deploy, vb.).
      </li>
      <li>
        <strong>Kendi barındırdığınız çalıştırıcı ile dağıtım.</strong> Bulut kimlik bilgilerini herkese açık CI'ya
        açamadığınız ortamlar için. Kendi barındırdığınız çalıştırıcılar ağınızın içinde yaşar; dağıtımlar orada gerçekleşir.
      </li>
    </ol>
    <p>
      Güvenlik gereksinimlerinizi karşılayan en basitini seçin. Çoğu web uygulaması için:
      Vercel/Netlify bağlan ve çalıştır. Arka uç hizmetleri için: GitHub Actions + bulut
      OIDC.
    </p>

    <h2 id="speed-up">GitHub otomasyonu ile geliştirmeyi hızlandırın</h2>
    <p>
      CI/CD'nin ötesinde, gerçekten zaman kazandıran yaygın otomasyonlar:
    </p>
    <ul>
      <li>
        <strong>Dependabot PR'larını otomatik birleştirme.</strong> Test kapsamınız iyiyse,
        bağımlılık güncellemelerinin CI yeşil olduğunda kendiliğinden birleşmesine izin verin.
      </li>
      <li>
        <strong>Eski issue / PR temizliği.</strong> actions/stale, yapılandırılabilir sürelerden sonra eski
        issue'ları ve PR'ları kapatır. Issue takibini yönetilebilir tutar.
      </li>
      <li>
        <strong>Sürüm otomasyonu.</strong> release-please veya semantic-release,
        main'e yapılan commit'lerde otomatik olarak değişiklik günlükleri oluşturur ve sürümler yayınlar.
      </li>
      <li>
        <strong>Depolar arası bildirimler.</strong> Bir alt deponun testleri sizin değişikliğiniz nedeniyle
        bozulduğunda, sahibine bildirim gönderin.
      </li>
      <li>
        <strong>Issue triyajı.</strong> Etkilenen dosya yollarına, proje etiketlerine veya yapay zeka destekli
        kategorizasyona göre issue'ları otomatik olarak etiketleyin.
      </li>
      <li>
        <strong>Dokümantasyon dağıtımı.</strong> Push yapıldığında dokümantasyon sitesi oluşturun, GitHub Pages'e
        veya barındırma hizmetinize yayınlayın.
      </li>
    </ul>
    <p>
      Her biri 15-60 dakika kurulum gerektirir ve proje ömrü boyunca saatlerce
      zaman kazandırır.
    </p>

    <h2 id="common-patterns">Yaygın Actions kalıpları + ücretsiz şablonlar</h2>
    <p>
      Vakaların %90'ını kapsayan kalıplar:
    </p>
    <ul>
      <li>
        <strong>PR + main'de test.</strong> Yukarıdaki örnek.
      </li>
      <li>
        <strong>PR'da lint.</strong> Ayrı bir iş veya adım olarak eslint/ruff vb. ekleyin.
      </li>
      <li>
        <strong>Main'e push yapıldığında dağıt.</strong> Vercel/Netlify entegrasyonu web uygulamaları için
        halleder; arka uç için AWS/GCP OIDC.
      </li>
      <li>
        <strong>Paket oluştur + yayınla.</strong> Etiket push'unda, npm/PyPI/Maven
        paketi oluşturun ve yayınlayın.
      </li>
      <li>
        <strong>Zamanlanmış çalıştırmalar.</strong> Günlük güvenlik taraması, haftalık veritabanı
        temizliği, aylık metrik raporu.
      </li>
      <li>
        <strong>Manuel workflow_dispatch.</strong> GitHub arayüzünde bir düğmeye tıklayarak
        özel girdilerle bir iş akışı tetikleyin. Geçici dağıtımlar, veri doldurma işlemleri için kullanışlıdır.
      </li>
    </ul>
    <p>
      Her biri için GitHub'ın &ldquo;başlangıç iş akışlarını&rdquo; veya actions
      pazar yerini arayın. Çoğu kalıbın resmi şablonları vardır. Çatallayın + özelleştirin.
    </p>
  </>
);

export const cta = {
  label: "Ölçeklendirmeden önce Actions maliyetlerini tahmin edin",
  targetSlug: "github-actions-cost-estimator",
};

export const faq = [
  {
    q: "DevOps işe almadan kod testlerini nasıl otomatikleştiririm?",
    a: ".github/workflows/tests.yml dosyasında hazır action'lar (actions/checkout, actions/setup-node/python/go) kullanan 30 satırlık YAML. Testler her PR'da + main'e push'ta çalışır. Toplam 30 dakika kurulum. Büyüdükçe kapsam (Codecov/Coveralls), lint, işletim sistemi matrisi ekleyin.",
  },
  {
    q: "Uygulamamı GitHub'ı kullanarak nasıl dağıtabilirim?",
    a: "Üç seçenek: (1) Vercel/Netlify/Cloudflare Pages push'ta otomatik dağıtım (web uygulamaları için en kolayı), (2) AWS/GCP/Azure arka uç dağıtımları için GitHub Actions + bulut OIDC, (3) bulut kimlik bilgilerinin herkese açık CI'ya gidemediği ortamlar için kendi barındırdığınız çalıştırıcılar. Güvenlik ihtiyaçlarını karşılayan en basitini seçin.",
  },
  {
    q: "DevOps uzmanı olmadan GitHub Actions'ı nasıl kullanırım?",
    a: "İş akışlarının %90'ı için pazaryerindeki hazır action'ları kullanın. Gerekmedikçe özel Docker imajları oluşturmayın. İş akışınızı en yakın resmi başlangıç şablonuyla eşleştirin; oradan özelleştirin. Çoğu kalıbın (PR'da test, main'de dağıt, zamanlanmış işler, paket sürümü) savaşta test edilmiş şablonları vardır.",
  },
  {
    q: "GitHub otomasyonu ile geliştirmeyi nasıl hızlandırırım?",
    a: "Yeşil CI'da dependabot PR'larını otomatik birleştirme, eski issue temizliği (actions/stale), sürüm otomasyonu (release-please, semantic-release), alt depo testleri bozulduğunda depolar arası bildirimler, issue'ları otomatik etiketleme, otomatik dokümantasyon dağıtımı. Her biri proje ömrü boyunca saatler kazandırır; her biri 15-60 dk kurulum.",
  },
];