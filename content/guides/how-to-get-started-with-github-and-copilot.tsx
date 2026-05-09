/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      GitHub'a başlamak ilk başta bunaltıcı gelebilir çünkü platform çok sayıda işlevi
      bir arada sunar — sürüm kontrolü, barındırma, iş birliği, CI/CD, proje yönetimi.
      İlk projeniz için bunun yalnızca küçük bir kısmına ihtiyacınız var. Bu rehber,
      GitHub Copilot'u da ekliyorsanız dahil olmak üzere, pratik ilk hafta kurulumunu
      adım adım anlatır.
    </p>
  </>
);

export const toc = [
  { id: "first-project", label: "GitHub'daki ilk projeniz" },
  { id: "copilot-setup", label: "Copilot'u kurma" },
  { id: "team-onboarding", label: "Bir ekibi GitHub'a alıştırma" },
  { id: "learning-curve", label: "Gerçekçi öğrenme eğrisi" },
];

export const body = (
  <>
    <h2 id="first-project">GitHub'daki ilk projeniz</h2>
    <p>
      Minimum uygulanabilir iş akışı:
    </p>
    <ol>
      <li>
        <strong>Kaydolun</strong> github.com adresine (ücretsiz).
      </li>
      <li>
        <strong>"New repository" butonuna tıklayın.</strong> Bir isim seçin. Herkese
        açık veya özel olmasına karar verin (öğrenme amaçlı herkese açık iyidir, hassas
        bir şey içeriyorsa özel yapın).
      </li>
      <li>
        <strong>README + .gitignore ile başlatın.</strong> Dilinize uygun .gitignore
        şablonunu seçin (Node, Python vb.).
      </li>
      <li>
        <strong>Bilgisayarınıza klonlayın.</strong> HTTPS URL'sini kopyalayın, terminalde{" "}
        <code>git clone &lt;url&gt;</code> komutunu çalıştırın.
      </li>
      <li>
        <strong>Dosyaları ekleyin, commit yapın, push yapın.</strong>
        <pre><code>{`git add .
git commit -m "Initial commit"
git push`}</code></pre>
      </li>
      <li>
        <strong>GitHub'ı yenileyin.</strong> Kodunuz artık barındırılıyor.
      </li>
    </ol>
    <p>
      Tüm ilk gün bundan ibaret. Diğer her şeyi (dallar, PR'lar, Actions,
      issue'lar) ihtiyacınız oldukça ekleyeceksiniz.
    </p>

    <h2 id="copilot-setup">GitHub Copilot'u kurma</h2>
    <ol>
      <li><code>github.com/features/copilot</code> adresine kaydolun. 30 günlük ücretsiz deneme.</li>
      <li>IDE'nize eklentiyi yükleyin — VSCode, JetBrains, Neovim, Cursor'un tümü destekler.</li>
      <li>Eklentiye GitHub hesabınızla giriş yapın.</li>
      <li>Herhangi bir kod dosyasını açın. Bir fonksiyon yorumu yazın. Copilot gövdeyi önerir. Kabul etmek için Tab'a, reddetmek için Esc'ye basın.</li>
    </ol>
    <p>
      Zaman yatırımı: Kurulum için 10 dakika. Kabul alışkanlıklarınızın (hangi önerileri
      alıp reddettiğiniz) oturması 1-2 hafta. Çoğu kişi 2. haftada anlamlı verimlilik
      artışı görür.
    </p>

    <h2 id="team-onboarding">Bir ekibi GitHub'a alıştırma</h2>
    <p>
      5-15 kişilik bir ekip için:
    </p>
    <ul>
      <li>
        <strong>1. Gün:</strong> organizasyonu oluşturun, ekip üyelerini ekleyin, depo
        izinlerini ayarlayın.
      </li>
      <li>
        <strong>2-3. Gün:</strong> dal oluşturma, PR açma ve kod inceleme görgü kuralları
        üzerine 30 dakikalık bir uygulamalı anlatım. Çoğu ekipte konuya aşina biri vardır —
        onun liderlik etmesine izin verin.
      </li>
      <li>
        <strong>2. Hafta:</strong> testler ve lint için GitHub Actions'ı tanıtın. Mevcut
        iş akışı şablonlarını kullanın; başlangıçta özel bir şey oluşturmayın.
      </li>
      <li>
        <strong>2. Ay:</strong> iş takibi için GitHub Issues + Projects'i tanıtın
        (Jira/Linear'dan geçiş yapmak isterseniz). İsteğe bağlı.
      </li>
    </ul>
    <p>
      Her şeyi bir anda öğretmeye çalışmayın. Git ansiklopedisi bir hatadır; yaparak
      öğrenin.
    </p>

    <h2 id="learning-curve">Gerçekçi öğrenme eğrisi</h2>
    <ul>
      <li><strong>1. Hafta:</strong> commit + push + clone. Temel bilgilerde rahat hissedin.</li>
      <li><strong>2. Hafta:</strong> dallar + pull request'ler. İş birliği zihniyeti oturur.</li>
      <li><strong>1. Ay:</strong> kod inceleme görgü kuralları, .gitignore, temel Actions.</li>
      <li><strong>3. Ay:</strong> rebase, cherry-pick, çakışma çözümü, Issues + Projects.</li>
      <li><strong>1. Yıl:</strong> GitHub'ın öğrenilmesi gereken bir araç değil, altyapı gibi hissettirecek kadar rahat olun.</li>
    </ul>
    <p>
      Copilot özelinde: Kabul alışkanlıklarınızın oturması 1-2 hafta. Hangi tür
      istemlerin faydalı öneriler ürettiğini içselleştirmeniz 6 ay sürer.
    </p>
  </>
);

export const cta = {
  label: "GitHub profilinizi puanlayın (ücretsiz)",
  targetSlug: "github-profile-scorecard",
};

export const faq = [
  {
    q: "İlk projem için GitHub'ı nasıl kullanabilirim?",
    a: "Kaydolun, README + .gitignore ile bir depo oluşturun, bilgisayarınıza klonlayın, kod ekleyin, commit yapın, push yapın. İlk gün bu kadar — diğer her şeyi (dallar, PR'lar, Actions) ihtiyacınız oldukça öğreneceksiniz.",
  },
  {
    q: "GitHub'ı öğrenmek ne kadar sürer?",
    a: "1. Hafta: temel bilgiler (commit/push/clone). 2. Hafta: dallar + PR'lar. 1. Ay: kod inceleme + Actions. 3. Ay: ileri düzey işlemler. 1. Yıl: öğrenilmesi gereken bir araç değil, altyapı gibi hissettirir.",
  },
  {
    q: "GitHub Copilot'a nasıl başlayabilirim?",
    a: "github.com/features/copilot adresine kaydolarak 30 günlük ücretsiz denemeye başlayın. IDE'nize eklentiyi yükleyin (VSCode, JetBrains, Neovim, Cursor). Giriş yapın. Bir fonksiyon yorumu yazın, öneriyi görün. Kurulum 10 dakika; kabul alışkanlıklarının oturması 1-2 hafta.",
  },
  {
    q: "Ekibim için GitHub'ı öğrenmenin en kolay yolu nedir?",
    a: "1. Gün: organizasyon + izinler. 2-3. Gün: dallar ve PR'lar üzerine 30 dakikalık uygulamalı anlatım (deneyimli bir ekip üyesinin liderlik etmesine izin verin). 2. Hafta: testler/lint için şablonlarla Actions'ı tanıtın. 2. Ay: isteğe bağlı Issues + Projects. Her şeyi bir anda öğretmeye çalışmayın.",
  },
];