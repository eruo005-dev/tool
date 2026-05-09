/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      GitHub Pages, deponuza bağlı ücretsiz bir statik barındırma hizmetidir. Birçok küçük
      proje ve portföy için doğru seçimdir. Diğerleri (dinamik içerik,
      kimlik doğrulama, büyük dosyalar) için geleneksel web barındırma hizmetine ihtiyacınız vardır. Bu kılavuz,
      artıları ve eksileri ve ayrıca ücretsiz katmanları aştığınızda GitHub'ın maliyetini ele alır.
    </p>
  </>
);

export const toc = [
  { id: "pages-vs-hosting", label: "GitHub Pages vs geleneksel barındırma" },
  { id: "cost", label: "GitHub'ın maliyeti nedir?" },
  { id: "non-code", label: "GitHub'ı kod dışı belgeler için kullanma" },
  { id: "replace-slack", label: "GitHub, Slack'in yerini alabilir mi?" },
];

export const body = (
  <>
    <h2 id="pages-vs-hosting">GitHub Pages vs web barındırma</h2>
    <p>
      GitHub Pages'in güçlü yönleri:
    </p>
    <ul>
      <li>Genel depolar için ücretsiz (ve ücretli GitHub planlarıyla özel depolar).</li>
      <li>Belirlenen dalınıza gönderim yaptığınızda otomatik olarak dağıtılır.</li>
      <li>CNAME ile özel alan adı desteği.</li>
      <li>Varsayılan olarak HTTPS.</li>
      <li>1 GB depolama, ayda 100 GB bant genişliği yumuşak limitleri.</li>
    </ul>
    <p>
      Sınırlamalar:
    </p>
    <ul>
      <li>Yalnızca statik — sunucu tarafı kod yok (veritabanı yok, kimlik doğrulama yok, API yok).</li>
      <li>Derleme zaman aşımı (Pages derlemesi başına 10 dakika).</li>
      <li>Hata ayıklama için günlük erişimi yok.</li>
      <li>Bazı derleme adımı kısıtlamaları (yerel olarak Jekyll; GitHub Actions aracılığıyla diğer oluşturucular).</li>
    </ul>
    <p>
      GitHub Pages ne zaman kullanılır: dokümantasyon siteleri, proje açılış sayfaları, basit
      portföyler, statik bloglar (Jekyll/Hugo/Astro/Next-static-export). Arka ucu olmayan
      içerik siteleri için en iyisidir.
    </p>
    <p>
      Geleneksel barındırmaya (Vercel, Netlify, AWS, kendi sunucunuz) ihtiyacınız olduğunda:
      dinamik içerik, sunucu tarafından oluşturulan sayfalar, kimlik doğrulama akışları, veritabanları, API'ler, dosya
      yüklemeleri. Vercel/Netlify ücretsiz katmanları da cömerttir ve Pages'den daha fazla kullanım durumunu kapsar.
    </p>

    <h2 id="cost">GitHub'ın maliyeti nedir?</h2>
    <ul>
      <li>
        <strong>Ücretsiz katman:</strong> sınırsız genel + özel depo. Kişisel hesaplar için ayda 2000 GitHub
        Actions dakikası; kuruluşlar için 3000. 500 MB Paket
        depolama. Codespaces ayda 60 saat (2 çekirdek).
      </li>
      <li>
        <strong>Pro (aylık $4):</strong> daha fazla Actions dakikası (3000), daha fazla Codespaces
        saati, gelişmiş özellikler (codeowners, taslak PR'ler, gerekli incelemeler).
      </li>
      <li>
        <strong>Team (aylık/koltuk $4):</strong> kuruluşlar için — ekip izinleri
        ve araçları ekler.
      </li>
      <li>
        <strong>Enterprise (aylık/koltuk $21):</strong> SAML SSO, denetim günlüğü API'si,
        Enterprise Cloud'a özel özellikler.
      </li>
    </ul>
    <p>
      Tek başına geliştiriciler ve küçük ekipler için: ücretsiz katman çoğu kullanım durumunu kapsar.
      Sürpriz fatura kaynağı GitHub Actions dakikalarıdır —{" "}
      <a href="/tools/github-actions-cost-estimator">Actions maliyet hesaplayıcımıza</a> bakın.
    </p>

    <h2 id="non-code">GitHub'ı kod dışı belgeler için kullanma</h2>
    <p>
      Evet — teknik yazım, tasarım dokümanları, yapılandırılmış
      içerik için giderek daha yaygın hale geliyor. Güçlü yönler:
    </p>
    <ul>
      <li>
        <strong>Markdown / metin üzerinde sürüm kontrolü.</strong> Sürümler arasında tam olarak neyin değiştiğini görün.
        Diff görünümü, düzyazı incelemesi için harikadır.
      </li>
      <li>
        <strong>PR tabanlı inceleme süreci.</strong> Dokümantasyon değişiklikleri için kod incelemesiyle aynı araçlar.
      </li>
      <li>
        <strong>Taslaklar için dallandırma.</strong> Devam eden çalışmaları yayınlanan
        içerikten ayrı tutun.
      </li>
      <li>
        <strong>Pages aracılığıyla ücretsiz barındırma.</strong> Markdown'ı tek bir yapılandırma dosyasıyla yayınlanan bir siteye
        dönüştürün.
      </li>
    </ul>
    <p>
      Kod dışı kullanım için zayıf yönler:
    </p>
    <ul>
      <li>İkili dosyalar (Figma, Sketch, Word belgeleri) iyi diff yapmaz.</li>
      <li>Teknik olmayan işbirlikçiler Git iş akışıyla zorlanır.</li>
      <li>Görsel ağırlıklı içerik depoları şişirir (büyük medya için Git LFS kullanın).</li>
    </ul>
    <p>
      En uygun: dokümantasyon, teknik yazım, bloglar, yapılandırılmış içerik,
      tasarım şartnameleri. En uygunsuz: görsel tasarım dosyaları, büyük ikili dosyalar, teknik olmayan
      kişilerle hızlı yineleme.
    </p>

    <h2 id="replace-slack">GitHub, Slack'in yerini alabilir mi?</h2>
    <p>
      Çoğu ekip için hayır. GitHub Discussions, Issues ve Pull Request yorumları,
      kod etrafında eşzamansız, yapılandırılmış konuşmayı yönetir. Slack ise
      eşzamanlı, serbest biçimli ekip sohbetini yönetir. Farklı işler için farklı araçlar.
    </p>
    <p>
      GitHub'ın Slack iş akışınızdan <em>neyi</em> değiştirebileceği:
    </p>
    <ul>
      <li>Kodla ilgili tartışmalar (PR yorumlarına + Issues'a taşıyın).</li>
      <li>Belirli depolar hakkında eşzamansız sorular (Discussions'a taşıyın).</li>
      <li>Yayınlanan özelliklerle ilgili durum güncellemeleri (sürüm notlarına + Discussions'a taşıyın).</li>
    </ul>
    <p>
      GitHub'ın <em>neyi</em> değiştiremeyeceği:
    </p>
    <ul>
      <li>Eşzamanlı ekip sohbeti (su soğutucusu muhabbeti, hızlı sorular, koridor konuşmaları).</li>
      <li>Sesli/görüntülü aramalar.</li>
      <li>Ekipler arası duyurular.</li>
      <li>Mühendislik dışı ekip koordinasyonu.</li>
    </ul>
    <p>
      Gerçekçi hamle, mühendisliğe özel Slack kanallarını GitHub'da
      birleştirmektir — Slack'i tamamen ortadan kaldırmak değil. Eşzamanlı
      ve ekipler arası ihtiyaçlar için yine de bir taneye ihtiyacınız olacak.
    </p>
  </>
);

export const cta = {
  label: "GitHub Actions maliyetlerini tahmin edin",
  targetSlug: "github-actions-cost-estimator",
};

export const faq = [
  {
    q: "GitHub Pages ile web barındırma arasındaki fark nedir?",
    a: "GitHub Pages: ücretsiz statik barındırma, gönderimde otomatik dağıtım, HTTPS, özel alan adları. Dokümantasyon siteleri, portföyler, basit statik bloglar için en iyisidir. Sınırlamalar: sunucu tarafı kod yok, 10 dakikalık derleme zaman aşımı, günlük yok. Geleneksel barındırma (Vercel, Netlify, AWS): dinamik içerik, sunucu tarafı oluşturma, kimlik doğrulama, veritabanları, API'ler.",
  },
  {
    q: "GitHub'ın gerçek maliyeti nedir?",
    a: "Ücretsiz katman: sınırsız genel + özel depo, kişisel için ayda 2000 Actions dakikası (kuruluş için 3000), 500 MB Paket, 60 Codespaces saati. Pro aylık $4: daha fazla kapasite. Team koltuk başına $4: kuruluş özellikleri. Enterprise koltuk başına $21: SAML SSO, denetim günlükleri. Sürpriz faturalar genellikle Actions aşımından gelir.",
  },
  {
    q: "Kod dışı belgeleri yönetmek için GitHub'ı kullanabilir miyim?",
    a: "Evet — sürüm kontrolü, PR incelemesi, dallandırma Markdown/metin için çalışır. Dokümanlar, teknik yazım, bloglar, tasarım şartnameleri için en iyisidir. İyi diff yapmayan ikili dosyalar (Figma, Word) ve Git ile zorlanan teknik olmayan işbirlikçiler için zayıftır.",
  },
  {
    q: "GitHub, ekip iletişimi için Slack'in yerini alabilir mi?",
    a: "Çoğu ekip için hayır. GitHub, kod etrafında eşzamansız yapılandırılmış konuşmayı yönetir (Discussions, Issues, PR yorumları). Slack, eşzamanlı serbest biçimli ekip sohbetini yönetir. Gerçekçi hamle: mühendisliğe özel Slack kanallarını GitHub'da birleştirin, geri kalanı için Slack'i koruyun.",
  },
];