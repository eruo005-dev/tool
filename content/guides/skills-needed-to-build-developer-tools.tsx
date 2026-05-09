/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Geliştirici araçları oluşturmak için yeterli deneyime sahip miyim?&rdquo; sorusu
      r/learnprogramming ve r/cscareerquestions'da her hafta gündeme geliyor. Dürüst cevap:
      insanların düşündüğünden daha az. 2026'da kullanışlı bir geliştirici aracı çıkarmak için
      gereken teknik çıta, disiplinli 2 yıllık bir geliştirici için ulaşılabilir. Başarılı bir
      geliştirici aracı işi için çıta daha yüksek, ancak bu farklı bir soru.
    </p>
    <p>
      Bu rehber pratik beceri yığınıdır: gerçekte neye ihtiyacınız var (Twitter'da
      kapı bekçiliği yapılanların aksine), araç türüne göre dil önerileri ve 2026'da
      junior/orta seviye geliştiricilerin makul bir şekilde neler çıkarabileceği.
    </p>
  </>
);

export const toc = [
  { id: "core-skills", label: "Gerçekten ihtiyacınız olan temel beceriler" },
  { id: "languages", label: "Araç türüne göre diller" },
  { id: "experience-level", label: "Ne kadar deneyim yeterlidir?" },
];

export const body = (
  <>
    <h2 id="core-skills">Gerçekten ihtiyacınız olan temel beceriler</h2>
    <p>
      Başarıyı en iyi tahmin edene göre sıralanmış beş kategori:
    </p>
    <ol>
      <li>
        <strong>Güçlü CLI + Unix akıcılığı.</strong> Borular, süreçler, sinyal yönetimi, çıkış
        kodları, ortam değişkenleri, dosya tanımlayıcıları. Bir GUI aracı oluştursanız bile,
        kullanıcılarınız kabuklarda yaşar.
      </li>
      <li>
        <strong>API tasarım zevki.</strong> Fonksiyon imzaları, hata anlamları, adlandırma,
        kullanımdan kaldırma politikası. Bu, iyi geliştirici araçlarını sinir bozucu olanlardan
        ayıran beceridir. İyi API'leri okuyarak geliştirin (Stripe, Anthropic, Go standart
        kütüphanesi) ve kötü olanları (komite tarafından yapılan herhangi bir şey).
      </li>
      <li>
        <strong>Dokümantasyon yazma.</strong> Muhtemelen kod kalitesinden daha yüksek bir
        benimsenme belirleyicisidir. Stripe belgeleri altın standarttır; onları inceleyin.
      </li>
      <li>
        <strong>Platformlar arası düşünme.</strong> Farklı kabuklar, satır sonları, yol
        ayırıcıları, renkli terminaller. Çoğu geliştirici aracı hatası, yazarın test etmediği
        platform uç durumlarıdır.
      </li>
      <li>
        <strong>Gözlemlenebilirlik + hata ayıklanabilirlik zihniyeti.</strong> Aracınız daha
        önce hiç görmediğiniz ortamlarda çalışıyor olacak. Kullanıcıların sahip olacağı
        &ldquo;şu anda ne oluyor?&rdquo; sorusu için inşa edin.
      </li>
    </ol>
    <p>
      İhtiyacınız olmayan şeyler (kapı bekçiliğine rağmen):
    </p>
    <ul>
      <li><strong>Derleyici teorisi.</strong> Bir derleyici oluşturmuyorsanız.</li>
      <li><strong>Dağıtık sistemler uzmanlığı.</strong> Çoğu geliştirici aracı uzun süre yerel CLI'lar veya tek sunuculu SaaS olarak kalır.</li>
      <li><strong>Lise ötesi matematik.</strong> Neredeyse hiç alakalı değil.</li>
      <li><strong>10 yıllık deneyim.</strong> Yaygın olarak kullanılan birçok geliştirici aracı, belirli bir acıyı yaşayan 2-3 yıllık geliştiriciler tarafından başlatıldı.</li>
    </ul>

    <h2 id="languages">Araç türüne göre diller</h2>
    <ul>
      <li>
        <strong>Bash:</strong> küçük yapıştırıcı betikler, post-commit kancaları, proje
        iskeleleri için uygundur. 200 satırdan büyük veya platformlar arası bakımını
        yapmak istediğiniz herhangi bir şey için yanlıştır. Bash becerileri hala bir üst beceri
        olarak gereklidir — neredeyse her geliştirici aracı bir noktada kabuk çağrısı yapar.
      </li>
      <li>
        <strong>Python:</strong> veriyle ilgili araçlar, AI/ML araçları,
        altyapı araçları (Pulumi, AWS CDK tarzı), başlatma süresinin kritik olmadığı
        çoğu CLI için uygundur. Küçük bir statik ikili dosya veya saniyeden kısa
        başlatma gerektiğinde yanlıştır. Ekosistem (Click, Typer, Rich) CLI oluşturmayı keyifli hale getirir.
      </li>
      <li>
        <strong>Go:</strong> statik ikili dosya, hızlı başlatma ve kolay çapraz derleme
        istediğiniz her CLI için uygundur. Docker, Terraform, Hugo, gh, kubectl, k9s
        — hepsi bir nedenden dolayı Go. 2026'da &ldquo;profesyonel görünümlü geliştirici aracı&rdquo;
        çıtası giderek Go şeklini alıyor.
      </li>
      <li>
        <strong>Rust:</strong> performans açısından kritik araçlar, dosya
        izleyicileri, ayrıştırıcılar, derleme hattındaki herhangi bir şey için uygundur.
        ripgrep, fd, bat, hyperfine, cargo güçlü yönleri gösterir. Daha dik öğrenme
        eğrisi; getirisi katlanarak artar.
      </li>
      <li>
        <strong>TypeScript / Node:</strong> kullanıcılarınız npm dünyasında yaşadığında veya
        JS ekosistemi araçları (lint'leyiciler, paketleyiciler, paket
        yardımcı programları) gönderdiğinizde uygundur. Bu kitle dışında yanlıştır çünkü
        Node başlatma süresi ve dağıtım sürtüşmesi birikir.
      </li>
      <li>
        <strong>Zig, Nim, V, Crystal:</strong> niş. Belirli bir nedeniniz yoksa Go veya Rust
        kullanın.
      </li>
    </ul>

    <h2 id="experience-level">Ne kadar deneyime ihtiyacınız var?</h2>
    <p>
      Gerçekçi eşikler:
    </p>
    <ul>
      <li>
        <strong>Junior (0–2 yıl):</strong> kesinlikle küçük bir geliştirici aracı çıkarabilir.
        En iyi başlangıç noktaları: kendi kaşıntınızı giderin (günlük iş akışınızda eksik bir
        araç), kullandığınız mevcut bir AÇYK geliştirici aracına düzeltmelerle katkıda bulunun
        veya net, dar kapsamlı bir CLI oluşturun (bir yapılandırma dosyası lint'leyicisi, bir
        metrik kazıyıcı, belirli bir özelliğe sahip bir JSON güzelleştiricisi). Sentry
        ölçeğinde bir platform ürünü oluşturmaya çalışmayın.
      </li>
      <li>
        <strong>Orta (3–5 yıl):</strong> gerçek benimsenme sağlayan geliştirici araçları
        çıkarabilir. Başarılı bağımsız geliştirici aracı kurucularının çoğu bu aralıkta
        başlattı. Bir yığının derin alan bilgisi ile eşleştirin (örneğin, 4 yıl React
        yaptıysanız → React'e özel bir araç çıkarın).
      </li>
      <li>
        <strong>Kıdemli+ (5+ yıl):</strong> inandırıcı bir şekilde geliştirici aracı şirketleri
        kurabilir. Alan uzmanlığı + yürütme hızı + uç durumları öngörme yeteneği, fonlanan
        şirketlerin aradığı şeydir.
      </li>
    </ul>
    <p>
      Desen: <strong>önce kendi acınızı çözün, oradan genişleyin</strong>. İncelediğimiz her
      başarılı bağımsız geliştirici aracı bu yayı izledi.
    </p>
  </>
);

export const cta = {
  label: "Oluşturmadan önce geliştirici aracı fikrinizi puanlayın",
  targetSlug: "dev-tool-idea-scorer",
};

export const faq = [
  {
    q: "Geliştirici yardımcı programları oluşturmak için hangi becerilere ihtiyacım var?",
    a: "Temel beş: güçlü CLI/Unix akıcılığı, API tasarım zevki, dokümantasyon yazma, platformlar arası düşünme, gözlemlenebilirlik zihniyeti. İhtiyacınız olmayanlar: derleyici teorisi, dağıtık sistemler uzmanlığı, lise ötesi matematik, 10 yıllık deneyim. Başarılı bağımsız geliştirici aracı kurucularının çoğu 3-5 yılda çıkardı.",
  },
  {
    q: "Geliştirici araçları için hangi programlama dilini öğrenmeliyim?",
    a: "Statik ikili CLI'lar için Go (Docker/Terraform/Hugo tarzı). Performans açısından kritik araçlar için Rust (ripgrep/cargo tarzı). Veriyle ilgili araçlar, ML araçları, IaC için Python. JS ekosistemi araçları için TypeScript/Node. Küçük yapıştırıcı için Bash. 2026'da yeni genel amaçlı geliştirici araçları için varsayılan olarak Go'yu seçin.",
  },
  {
    q: "Geliştirici yardımcı programları için Bash vs Python vs Go — hangisi kullanılmalı?",
    a: "200 satırdan az yapıştırıcı için Bash. Veri/ML araçları, altyapı DSL'leri, başlatma süresinin kritik olmadığı platformlar arası için Python. Statik ikili dosyalar, hızlı başlatma, kolay çapraz derleme için Go — 2026'da yeni CLI'lar için baskın seçim. Birini seçin ve çıkarın; dil, yürütmeden daha az önemlidir.",
  },
  {
    q: "Geliştirici araçları oluşturmak için ne kadar deneyime ihtiyacınız var?",
    a: "Junior (0-2 yıl) kendi kaşıntısını gideren dar kapsamlı araçlar çıkarabilir. Orta (3-5 yıl), başarılı bağımsız geliştirici aracı kurucularının çoğunun başlattığı yerdir. Kıdemli+, VC destekli geliştirici aracı şirketlerinin ihtiyaç duyduğu alan uzmanlığına ve uç durum öngörüsüne sahiptir. Kendinizi engellemeyin.",
  },
];