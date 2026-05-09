/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Başarılı geliştirici araçlarının paylaştığı pratik kalıplardan oluşan bir derleme: CI/CD boru hattı araçları için en iyi uygulamalar, araç geliştirmede kullanılan IDE'ler ve editörler, şirketlerin gerçekte neye para ödediği, test yaklaşımları, dokümantasyon standartları, başarı metrikleri ve yayınlanmış kodlarda sürekli karşımıza çıkan framework'ler/kütüphaneler.
    </p>
  </>
);

export const toc = [
  { id: "ci-cd", label: "CI/CD boru hattı araçları için en iyi uygulamalar" },
  { id: "ides", label: "Araç geliştirmek için IDE'ler + editörler" },
  { id: "what-companies-pay-for", label: "Şirketlerin geliştirici araçlarına ödediği bedeller" },
  { id: "testing", label: "Geliştirici araçlarını doğru şekilde test etme" },
  { id: "docs", label: "Dokümantasyonda en iyi uygulamalar" },
  { id: "metrics", label: "Başarıyı ölçme" },
  { id: "tools-for-tools", label: "En iyi framework'ler + kütüphaneler" },
];

export const body = (
  <>
    <h2 id="ci-cd">CI/CD boru hattı araçları için en iyi uygulamalar</h2>
    <p>
      CI/CD boru hatları içinde çalışan araçlar (GitHub Actions, GitLab CI, Buildkite eklentileri, CI'da çalıştırılan özel CLI'lar) geliştiriyorsanız:
    </p>
    <ul>
      <li>
        <strong>Idempotent işlemler.</strong> CI hataları olur. Aracınız tekrar denenebilir olmalı. Yıkıcı herhangi bir işlem açık onay veya durum kontrolü gerektirmelidir.
      </li>
      <li>
        <strong>Önbellek farkındalığı.</strong> CI önbelleklerinden yararlanın; önbellek anahtarlarını net bir şekilde belgeleyin. Hata ayıklama için bir --no-cache bayrağı sağlayın.
      </li>
      <li>
        <strong>Hızlı hata modları.</strong> Girdi yanlış olduğunda boru hattının yarısını çalıştırdıktan sonra dakikalar içinde değil, saniyeler içinde başarısız olun. Pahalı işlemlerden önce ön kontroller yapın.
      </li>
      <li>
        <strong>Yapılandırılmış çıktı.</strong> JSON veya GitHub Actions açıklama formatı. Düz metin günlükleri kullanışlıdır ancak yapılandırılmış kanal, aracınızı diğer CI araçlarıyla birleştirilebilir kılar.
      </li>
      <li>
        <strong>Sır yönetimi disiplini.</strong> Sırları asla yankılamayın; günlüklerde karartın; hangi ortam değişkenlerinin önemli olduğunu belgeleyin; gerekli sırlar eksik olduğunda yüksek sesle başarısız olun.
      </li>
      <li>
        <strong>Paralellik desteği.</strong> CI çalıştırmaları pahalıdır. Dahili olarak paralelleştiren (veya nasıl parçalanacağını belgeleyen) araçlar kullanıcılara gerçek para kazandırır.
      </li>
    </ul>

    <h2 id="ides">Geliştirici araçları oluşturmak için en iyi IDE'ler ve editörler</h2>
    <p>
      2026'da çalışan dev-tool mühendislerinin gerçekte kullandıkları:
    </p>
    <ul>
      <li>
        <strong>VSCode + Cursor.</strong> Baskın seçim. Eklenti ekosistemi, AI entegrasyonu, iyi hata ayıklama deneyimi. Cursor özellikle AI-native iş akışı için dev-tool geliştiricileri arasında çok fazla pay aldı.
      </li>
      <li>
        <strong>JetBrains (GoLand, IntelliJ, RustRover).</strong> Daha ağır, ancak daha güçlü yeniden düzenleme ve derin dil anlayışı. Büyük kod tabanları veya Java/Kotlin/Go/Rust ile çalışırken buna değer.
      </li>
      <li>
        <strong>Neovim.</strong> Niş ama sadık. Lua odaklı, sonsuz yapılandırılabilir. Daha dik öğrenme eğrisi; yatırım yapanlar için bileşik üretkenlik artışı sağlar. LazyVim ve AstroVim ön ayarları kurulum süresini önemli ölçüde azaltır.
      </li>
      <li>
        <strong>Helix.</strong> Modern modal editör. Vim'den daha az yapılandırma gerektirir; 2026'da yükselen üçüncü sıradaki editör.
      </li>
      <li>
        <strong>Zed.</strong> Daha yeni giren. Çok oyunculu öncelikli tasarım, çok hızlı. İzlemeye değer; henüz baskın değil.
      </li>
    </ul>
    <p>
      Birini seçin ve derinlemesine öğrenin. Tek bir editörde kas hafızasının birleşik etkisi, geçiş yapmaktan elde edilecek marjinal özellik kazanımlarını geride bırakır.
    </p>

    <h2 id="what-companies-pay-for">Şirketlerin geliştirici araçlarına ödediği bedeller</h2>
    <p>
      Alıcının bakış açısı. Bir aracı "güzel fikir"den bütçe kalemine dönüştüren şeyler:
    </p>
    <ul>
      <li>
        <strong>Uyumluluk + denetim izleri.</strong> SOC 2, HIPAA, GDPR, SSO, denetim günlükleri. Şirketler, temel işlevsellik vasat olsa bile bunlar için ödeme yapar.
      </li>
      <li>
        <strong>Güvenilirlik + SLA'lar.</strong> Şirketlerin bağımlı olduğu araçların %99,9+ çalışma süresi sözleşmelerine ihtiyacı vardır. SLA, altyapıya yakın araçlar için fiyatı haklı çıkaran şeydir.
      </li>
      <li>
        <strong>Zaman tasarrufu × ekip büyüklüğü.</strong> Her mühendise haftada 2 saat × 50 mühendis × 80$/saat = 416.000$/yıl kazandıran bir araç. Yıllık 50.000$'lık bir aboneliği haklı çıkarmak kolaydır.
      </li>
      <li>
        <strong>Mevcut sistemlerle entegrasyon.</strong> SAML/SSO, SCIM sağlama, şirketin gözlemlenebilirlik yığını, şirketin CI'sı. Temiz entegre olan araçlar anlaşmaları kapatır; mevcut altyapıyı değiştirmeyi gerektiren araçlar kapatamaz.
      </li>
      <li>
        <strong>Destek yanıtı.</strong> Kurumsal müşteriler bir Slack Connect kanalı ve 4 saatlik yanıt süresi ister. Aracın teknik kalitesi, hata ayıklama yardımının hızından daha az önemlidir.
      </li>
      <li>
        <strong>Tahmin edilebilir fiyatlandırma.</strong> Koltuk başına veya sabit ücret. Şirketler tahmin edemedikleri kullanım tabanlı faturalardan nefret eder. Kullanım tabanlı daha ucuz olsa bile, tahmin edilebilir fiyatlandırma kurumsal anlaşmaları kazanır.
      </li>
    </ul>

    <h2 id="testing">Geliştirici araçlarını doğru şekilde test etme</h2>
    <p>
      Dev-tool test etmenin kendine özgü kalıpları vardır:
    </p>
    <ul>
      <li>
        <strong>Çıktı için anlık görüntü testleri.</strong> CLI çıktısı, oluşturulan kod, dokümantasyon — tümü, sürpriz çıktı değişikliklerini yakalayan anlık görüntü testlerinden yararlanır.
      </li>
      <li>
        <strong>Platformlar arası CI matrisi.</strong> Linux, macOS, Windows. Bash 3 ve Bash 5. Farklı kabuklar. Platforma özgü hataları müşteri raporlarında değil, CI'da yakalayın.
      </li>
      <li>
        <strong>Gerçek yapıtlara karşı entegrasyon testleri.</strong> Gerçek Docker imajları, gerçek Kubernetes kümeleri (CI'da), gerçek veritabanları. Sahtekarlar (mocks) uç durumlar hakkında yalan söyler.
      </li>
      <li>
        <strong>Performans regresyon testleri.</strong> Derleme süresi, başlangıç süresi, bellek. CI'da eşikler belirleyin; aşıldığında başarısız olsun.
      </li>
      <li>
        <strong>Geriye dönük uyumluluk testleri.</strong> Aracınızın kararlı API'leri varsa, birleştirme öncesi kontrol olarak son sürümün test paketini mevcut kod üzerinde çalıştırın.
      </li>
    </ul>

    <h2 id="docs">Geliştirici araçları için dokümantasyonda en iyi uygulamalar</h2>
    <p>
      Stripe + Anthropic + Cloudflare çıtayı belirliyor:
    </p>
    <ul>
      <li>
        <strong>İlk 60 saniyede hızlı başlangıç.</strong> Kurulum + ilk kullanışlı çıktı. Daha ayrıntılı olan her şey okuyucuları kaybeder.
      </li>
      <li>
        <strong>Gerçek, çalıştırılabilir örnekler.</strong> Kopyala-yapıştır-çalıştır. CI'da test edin ki bayatlamasınlar.
      </li>
      <li>
        <strong>Kavramsal dokümanların API referansından ayrı olması.</strong> Kavramsal dokümanlar nedenini açıklar; referans dokümanlar ne olduğunu açıklar. Karıştırmak okuyucuların kafasını karıştırır.
      </li>
      <li>
        <strong>Çalışan arama.</strong> Algolia DocSearch (OSS için ücretsiz) standarttır. İyi bir arama olmadan, dokümanların geri kalanı bir anlam ifade etmez.
      </li>
      <li>
        <strong>Sürümleme.</strong> Eski sürümlerin eski dokümanlarına ihtiyacı vardır. v1.5 kullanıcılarını v3.0 dokümanlarını okumaya zorlamayın.
      </li>
      <li>
        <strong>Yemek kitabı bölümü.</strong> Uçtan uca tam örneklerle yaygın senaryolar. Hızlı Başlangıç'tan sonra dokümanların en çok kullanılan kısmı.
      </li>
    </ul>

    <h2 id="metrics">Bir geliştirici aracının başarısını ölçme</h2>
    <p>
      Sürdürülebilir başarıyı öngören metrikler (gösteriş amaçlı olmayanlar):
    </p>
    <ul>
      <li>
        <strong>Deneme kullanıcılarının 30 günlük tutunma oranı</strong> —{" "}
        <a href="/guides/how-to-get-developers-to-adopt-your-tools">benimseme kılavuzunda</a> ele alınmıştır.
      </li>
      <li>
        <strong>Günlük / haftalık aktif kullanıcılar</strong> — alışkanlık haline gelmesi gereken araçlar için.
      </li>
      <li>
        <strong>İlk değere ulaşma süresi</strong> — kurulumdan ilk kullanışlı çıktıya kadar. 5 dakikanın altı çıtadır.
      </li>
      <li>
        <strong>Geliştirici kitlesi içinde Net Tavsiye Skoru (NPS).</strong> 40'ın üzeri güçlüdür; 60'ın üzeri nadirdir. Dev araçları için NPS, ürün içi anketlerden gelir, e-posta patlamalarından değil.
      </li>
      <li>
        <strong>Dokümantasyon trafik kalıpları.</strong> Hangi sayfalar en çok trafik alıyor? Kullanıcılar nereye geliyor vs nereden ayrılıyor? Doküman boşluklarını ortaya çıkarır.
      </li>
    </ul>
    <p>
      Göz ardı edilecekler: GitHub yıldızları (gösteriş), Twitter bahsetmeleri (gürültü), bir kerelik HN ön sayfası (uzun vadede hiçbir şeyle ilişkili değildir).
    </p>

    <h2 id="tools-for-tools">Geliştirici araçları oluşturmak için en iyi framework'ler + kütüphaneler</h2>
    <ul>
      <li>
        <strong>CLI framework'leri:</strong> Cobra (Go), Click + Typer (Python), Clap (Rust), Yargs / Commander (Node). Dilinize uygun olanı seçin; hepsi olgundur.
      </li>
      <li>
        <strong>TUI framework'leri:</strong> Charm Bubbletea (Go), Textual (Python), Ratatui (Rust), Ink (Node). Hepsi keyifli arayüzler üretir; Bubbletea + Charm ekosistemi 2026'da en üretken olanıdır.
      </li>
      <li>
        <strong>Çıktı biçimlendirme:</strong> tabwriter (Go), Rich (Python), Tabled (Rust). Tablo düzenini elle yapmayın.
      </li>
      <li>
        <strong>Yapılandırma + serileştirme:</strong> Viper (Go), Pydantic Settings (Python), Serde (Rust), Zod (TS). YAML'yi elle ayrıştırmayın.
      </li>
      <li>
        <strong>Hata sarma + görüntüleme:</strong> Cobra'da yerleşikler vardır; Rust'ta thiserror + miette; TS'de better-error-stack ile güzel yazdırılmış hatalar.
      </li>
      <li>
        <strong>Dağıtım:</strong> goreleaser (Go), cargo-dist (Rust), nfpm (çok formatlı paketler), chocolatey + scoop (Windows), homebrew formülleri. Dağıtım hedefleriniz için doğru olanı seçin; goreleaser + cargo-dist, "tek yapılandırma tüm platformları kapsar"a en yakın olanlardır.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Aracınızda CLI Kullanıcı Deneyimi kontrol listesini çalıştırın",
  targetSlug: "cli-dx-checklist",
};

export const faq = [
  {
    q: "CI/CD boru hattı araçları oluşturmak için en iyi uygulamalar nelerdir?",
    a: "Idempotent işlemler (CI hataları olur; araçlar tekrar denenebilir olmalı), önbellek farkındalığı, hızlı hata modları (pahalı işlemlerden önce ön kontroller), yapılandırılmış çıktı (JSON/GHA açıklamaları), sır yönetimi disiplini (asla yankılama, karartma, eksikte yüksek sesle başarısız ol), paralellik desteği (CI çalıştırmaları pahalıdır — parçalama gerçek para kazandırır).",
  },
  {
    q: "Geliştirici araçları oluşturmak için en iyi IDE'ler hangileridir?",
    a: "VSCode/Cursor baskındır (eklentiler, AI entegrasyonu). JetBrains (GoLand, IntelliJ, RustRover) daha güçlü yeniden düzenleme ve büyük kod tabanları için. Neovim, yatırım yapıldığında bileşik üretkenlik için. Helix ve Zed yükseliyor. Birini seçin ve derinlemesine öğrenin — kas hafızası marjinal özellik kazanımlarını yener.",
  },
  {
    q: "Şirketler geliştirici araçlarında neye para ödüyor?",
    a: "Uyumluluk + denetim izleri (SOC 2, HIPAA, SSO, denetim günlükleri), güvenilirlik + SLA'lar, zaman tasarrufu × ekip büyüklüğü matematiği, mevcut sistemlerle entegrasyon (SAML, SCIM, gözlemlenebilirlik), destek yanıtı (Slack Connect + 4 saatlik yanıt), tahmin edilebilir fiyatlandırma (koltuk başına, kurumsal için öngörülemeyen kullanım tabanlıyı yener).",
  },
  {
    q: "Geliştirici araçlarını nasıl doğru şekilde test ederim?",
    a: "CLI çıktısı ve oluşturulan kod için anlık görüntü testleri, platformlar arası CI matrisi (Linux/macOS/Windows + birden çok kabuk), gerçek yapıtlara karşı entegrasyon testleri (gerçek konteynerler, kümeler, veritabanları), eşiklerle performans regresyon testleri, son sürümün paketini mevcut kod üzerinde çalıştıran geriye dönük uyumluluk testleri.",
  },
  {
    q: "Bir geliştirici aracının başarısını nasıl ölçerim?",
    a: "Deneme kullanıcılarının 30 günlük tutunma oranı (en öngörücü olan), alışkanlık araçları için GAK/HAK, ilk değere ulaşma süresi (5 dakikanın altı çıtadır), ürün içi NPS (40+ güçlü, 60+ nadir), dokümantasyon trafik kalıpları. GitHub yıldızlarını, Twitter bahsetmelerini ve HN ön sayfa isabetlerini görmezden gelin — hiçbiri uzun vadeli sürdürülebilir kullanımı öngörmez.",
  },
];