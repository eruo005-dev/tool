/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;GitHub müşteri işleri için güvenli mi?&rdquo; sorusu r/freelance ve
      r/cscareerquestions'da her hafta gündeme geliyor. Yanıt, güvenlikten ne
      anladığınıza bağlı — görünürlük, fikri mülkiyet koruması, güvenlik veya
      uyumluluk. Bu rehber her birini ele alıyor.
    </p>
  </>
);

export const toc = [
  { id: "private-vs-public", label: "Özel ve herkese açık repolar" },
  { id: "client-projects", label: "Müşteri projeleri için GitHub" },
  { id: "stolen-code", label: "Kod hırsızlığı + fikri mülkiyet koruması" },
  { id: "permissions", label: "İzinler + üretim güvenliği" },
  { id: "license", label: "Başkalarının kodunu yasal olarak kullanmak" },
  { id: "hacked", label: "Ya GitHub saldırıya uğrarsa?" },
  { id: "api-keys", label: "API anahtarı sızıntılarını önleme" },
];

export const body = (
  <>
    <h2 id="private-vs-public">Özel ve herkese açık repolar</h2>
    <ul>
      <li>
        <strong>Herkese açık:</strong> herkes okuyabilir. Kimin yazabileceğini siz
        kontrol edersiniz. Sınırsız repo için ücretsiz. Arama motorlarında görünür.
      </li>
      <li>
        <strong>Özel:</strong> yalnızca davet edilen işbirlikçiler okuyabilir veya
        yazabilir. Sınırsız repo için ücretsiz (2019'dan beri). Arama motorlarında
        veya işbirlikçi olmayanlara görünmez.
      </li>
    </ul>
    <p>
      Yeni repolar için varsayılan özeldir. Hassas bir şey göndermeden önce
      kontrol ettiğinizden emin olun.
    </p>

    <h2 id="client-projects">GitHub müşteri projeleri için güvenli mi?</h2>
    <p>
      Çoğu freelance + ajans işi için: mantıklı bir kurulumla evet.
    </p>
    <ul>
      <li>
        <strong>Müşteri işleri için özel repolar kullanın.</strong> İsterlerse
        müşteriyi işbirlikçi olarak ekleyin; aksi halde ekibinizle sınırlı tutun.
      </li>
      <li>
        <strong>Sırları işlemeyin.</strong> Ortam değişkenleri kullanın;
        müşterinin sırlarını GitHub Actions sırları veya bulut sağlayıcılarının
        gizli yöneticisi aracılığıyla yapılandırın.
      </li>
      <li>
        <strong>Önce Gizlilik Sözleşmesi (NDA) imzalayın.</strong> Müşteri
        gerektiriyorsa, GitHub Enterprise Cloud veya Enterprise Server uyumluluk
        özelliklerine (SAML SSO, denetim günlükleri, daha uzun saklama) sahiptir.
      </li>
      <li>
        <strong>Proje sonunda repoyu devredin.</strong> GitHub'ın yerleşik bir
        repo devir akışı vardır. Çalışma bittiğinde müşterinin organizasyonuna
        taşıyın.
      </li>
    </ul>
    <p>
      HIPAA / FedRAMP / benzer düzenlemelere tabi işler için: GitHub Enterprise
      Cloud uyumludur. İşlem yapmadan önce müşterinin uyumluluk ekibiyle belirli
      gereksinimleri teyit edin.
    </p>

    <h2 id="stolen-code">Kodum GitHub'da çalınırsa nasıl anlarım?</h2>
    <p>
      Pratik tespit yöntemleri:
    </p>
    <ul>
      <li>
        <strong>GitHub kod araması.</strong> Kodunuzdan ayırt edici dizeleri
        arayın. Doğrudan kopyala-yapıştır hırsızlığını yakalar.
      </li>
      <li>
        <strong>Sourcegraph genel araması.</strong> Aynı fikir, farklı dizin.
        Bazen GitHub aramasının yakalayamadığını yakalar.
      </li>
      <li>
        <strong>Ayırt edici değişken adları + yorumlar.</strong> Kodunuza sıra dışı
        tanımlayıcılar ekleyin. İntihal tespiti çok kolaylaşır.
      </li>
      <li>
        <strong>Lisans sinyali.</strong> Reponuz MIT/Apache ise, &ldquo;çalma&rdquo;
        çoğunlukla atıf eksikliğidir. Net bir LİSANS dosyası ekleyin.
      </li>
    </ul>
    <p>
      Gerçekten kritik fikri mülkiyet için: hiçbir şekilde GitHub'a koymayın.
      Sıkı erişim kontrolleri olan özel bir repo kullanın veya GitLab/Gitea'da
      kendi sunucunuzda barındırın.
    </p>

    <h2 id="permissions">GitHub izinleri + üretim güvenliği</h2>
    <p>
      Üretimi bozmayı önleyen dal koruma kuralları:
    </p>
    <ul>
      <li>
        <strong>Gerekli incelemeler.</strong> N onay olmadan ana dala birleştirmeyi
        engelleyin.
      </li>
      <li>
        <strong>Gerekli durum kontrolleri.</strong> CI geçene kadar birleştirmeyi
        engelleyin.
      </li>
      <li>
        <strong>Zorla gönderme yok.</strong> Ana dalda geçmişin yeniden
        yazılmasını önler.
      </li>
      <li>
        <strong>Kimin gönderebileceğini kısıtlayın.</strong> Dağıtımla ilgili
        dalları belirli rollere sınırlayın.
      </li>
      <li>
        <strong>Kod sahipleri.</strong> Belirli yollardaki değişiklikler için
        belirli kişilerin onayını gerektirin (ör. altyapı dizinleri altyapı
        ekibinin onayını gerektirir).
      </li>
    </ul>
    <p>
      Bunları herhangi bir ekip reposu için ilk günden ayarlayın. Bunları atlayan
      ekipler eninde sonunda &ldquo;bu neden üretimi bozdu?&rdquo; olayıyla
      karşılaşır ve bu, eksik bir koruma kuralına kadar izlenir.
    </p>

    <h2 id="license">Başka birinin kodunu indirip yasal olarak kullanabilir miyim?</h2>
    <p>
      Lisansa bağlıdır:
    </p>
    <ul>
      <li>
        <strong>MIT, Apache 2.0, BSD:</strong> izin verici. Kullanabilir,
        değiştirebilir, dağıtabilir, hatta ticari olarak kullanabilirsiniz. Atıf
        yapmalısınız.
      </li>
      <li>
        <strong>GPL, AGPL:</strong> copyleft. GPL kod kullanan yazılım
        dağıtıyorsanız, yazılımınız da GPL olmalıdır. AGPL bunu ağ üzerinden
        sunulan yazılımları da kapsayacak şekilde genişletir.
      </li>
      <li>
        <strong>Lisans yok:</strong> varsayılan telif hakkı geçerlidir. GitHub'da
        herkese açık olsa bile izinsiz yasal olarak kullanamazsınız.
      </li>
      <li>
        <strong>&ldquo;Kaynak mevcut&rdquo; (BSL, Elastic License):</strong>{" "}
        ikisi arasında bir yerde. Belirli şartları okuyun — genellikle dahili
        kullanıma izin verir ancak rakip bir hizmet olarak barındırmayı kısıtlar.
      </li>
    </ul>

    <h2 id="hacked">GitHub saldırıya uğrarsa koduma ne olur?</h2>
    <p>
      GitHub'ın güvenlik olayları oldu ancak bugüne kadar tam veritabanı ihlali
      yaşanmadı. Pratik riskler:
    </p>
    <ul>
      <li>
        <strong>Hesap ele geçirme.</strong> En yaygın olanı. İki faktörlü
        doğrulama (2FA) + bir parola yöneticisi ile azaltın.
      </li>
      <li>
        <strong>Token sızıntısı.</strong> Herkese açık repolara yanlışlıkla
        işlenen Kişisel Erişim Token'ları. GitHub Secret Scanning bunların
        çoğunu otomatik olarak yakalar.
      </li>
      <li>
        <strong>Sağlayıcı çapında ihlal.</strong> Varsayımsal. Gerçekçi önlem,
        yerel kopyaları (zaten vardır) bulundurmak ve GitHub'ı tek yedek olarak
        kullanmamaktır.
      </li>
    </ul>
    <p>
      Gerçekten kritik kod için: periyodik olarak ikinci bir sağlayıcıya (GitLab,
      Bitbucket, kendi sunucunuzda Gitea) yansıtın. Asla tek bir hata noktanız
      olmasın.
    </p>

    <h2 id="api-keys">API anahtarlarının sızmasını önleme</h2>
    <p>
      Standart uygulamalar:
    </p>
    <ul>
      <li>
        <strong>Sırları asla işlemeyin.</strong> .env dosyaları (gitignore'da),
        GitHub Actions sırları veya bulut gizli yöneticileri kullanın.
      </li>
      <li>
        <strong>GitHub Secret Scanning.</strong> Ücretsiz, bilinen token
        kalıplarını (AWS, Stripe vb.) tarar. Bazı token'ları ortak
        entegrasyonlar aracılığıyla otomatik olarak döndürür.
      </li>
      <li>
        <strong>İşleme öncesi kancalar (pre-commit hooks).</strong> git-secrets
        veya trufflehog gibi araçlar, token'ların yerel olarak işlenmesini
        engeller.
      </li>
      <li>
        <strong>Token'ları düzenli olarak döndürün.</strong> Önleme olsa bile,
        bazılarının sızacağını varsayın. Kısa token ömrü hasarı sınırlar.
      </li>
      <li>
        <strong>Bir token sızarsa:</strong> hemen döndürün, erişim günlüklerini
        denetleyin, zorla gönderme ile kaldırma işe yaramaz (Git geçmişi
        kopyalarda kalır — kalıcı olarak açığa çıktığını kabul edin).
      </li>
    </ul>
  </>
);

export const cta = {
  label: "GitHub profilinizi puanlayın (ücretsiz)",
  targetSlug: "github-profile-scorecard",
};

export const faq = [
  {
    q: "GitHub müşteri projeleri için güvenli mi?",
    a: "Mantıklı bir kurulumla evet: özel repolar kullanın, sırları işlemeyin, önce NDA imzalayın, proje sonunda repoyu devredin. HIPAA/FedRAMP/düzenlemeye tabi işler için: GitHub Enterprise Cloud uyumludur — işlem yapmadan önce müşterinin belirli gereksinimlerini teyit edin.",
  },
  {
    q: "Özel ve herkese açık repolar arasındaki gerçek fark nedir?",
    a: "Herkese açık: herkes okuyabilir, yazmayı siz kontrol edersiniz, arama motorlarında görünür. Özel: yalnızca davet edilen işbirlikçiler okuyabilir veya yazabilir, arama motorlarında dizinlenmez. Her ikisi de sınırsız repo için ücretsiz. Yeni repolar için varsayılan özeldir — hassas bir şey göndermeden önce kontrol edin.",
  },
  {
    q: "API anahtarlarımın GitHub'da çalınmasını nasıl önlerim?",
    a: "Sırları asla işlemeyin — .env (gitignore'da) + GitHub Actions sırları veya bulut gizli yöneticileri kullanın. GitHub Secret Scanning'i etkinleştirin, işleme öncesi kancalar (pre-commit hooks) kurun, token'ları düzenli olarak döndürün. Bir token sızarsa: hemen döndürün, erişim günlüklerini denetleyin, kalıcı olarak açığa çıktığını kabul edin.",
  },
];