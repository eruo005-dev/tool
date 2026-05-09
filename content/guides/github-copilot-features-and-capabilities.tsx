/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      GitHub Copilot'ın neler yapıp neler yapamayacağı ve ondan en iyi şekilde
      yararlanmanızı sağlayacak iş akışı kalıpları. Doğruluk beklentilerini, kod
      yazma kapsamını, hata ayıklamayı, web geliştirmeyi, eski kodu, testleri +
      dokümantasyonu, ekip iş birliğini ve uç durumları (mobil, özelleştirme, API
      entegrasyonu) kapsar.
    </p>
  </>
);

export const toc = [
  { id: "accuracy", label: "Kod doğruluğu + tutarlılığı" },
  { id: "scope", label: "Copilot'ın yapabilecekleri ve yapamayacakları" },
  { id: "debug", label: "Copilot ile hata ayıklama" },
  { id: "web", label: "Web geliştirme" },
  { id: "legacy", label: "Eski kod + testler + dokümantasyon" },
  { id: "teams", label: "Ekipler + özelleştirme" },
  { id: "stack", label: "Çoklu dil, mobil, API entegrasyonu" },
];

export const body = (
  <>
    <h2 id="accuracy">Copilot'ın kodu ne kadar doğru?</h2>
    <p>
      Karmaşık bir cevap. Popüler dillerdeki (JS, Python, Go) yaygın kalıplar için
      önerilerin %80-95'i derlenir ve temel testleri geçer. Alışılmadık kalıplar veya
      nadir API'ler için doğruluk hızla düşer. Yaygın hata modları:
    </p>
    <ul>
      <li><strong>Kendinden emin ama yanlış API imzaları.</strong> Var olmayan hayali fonksiyon adları.</li>
      <li><strong>Makul ama ince bir şekilde bozuk mantık.</strong> Bir eksik veya fazla, yanlış karşılaştırma operatörü.</li>
      <li><strong>Güncelliğini yitirmiş kalıplar.</strong> Eğitim verilerinden kullanımdan kaldırılmış API'ler önerme.</li>
      <li><strong>Güvenlik karşıtı kalıplar.</strong> SQL string birleştirme, eksik girdi doğrulaması.</li>
    </ul>
    <p>
      Önerilere, kıdemsiz bir geliştiricinin işi gibi davranın: kabul etmeden önce
      gözden geçirin. Testler çoğu hayali sonucu yakalar.
    </p>

    <h2 id="scope">Copilot tüm uygulamaları yazabilir mi?</h2>
    <p>
      Hayır, anlamlı bir şekilde. Copilot satırları ve küçük blokları iyi tamamlar;
      sistemleri mimari etmez, ödünleşim kararları almaz veya 50.000 satırlık bir kod
      tabanında tutarlılığı sağlamaz. Doğru çerçeve: Copilot, mevcut geliştiriciler
      için bir üretkenlik çarpanıdır, bir geliştirici yedeği değildir.
    </p>
    <p>
      Belirli yetenekler + sınırlamalar:
    </p>
    <ul>
      <li>✅ Net yorumlardan fonksiyon gövdeleri (yaygın kalıplarda %90 doğruluk).</li>
      <li>✅ Şablon kod (CRUD, tür tanımları, test iskeletleri).</li>
      <li>✅ Benzer diller / çerçeveler arasında çeviri.</li>
      <li>✅ Dokümantasyon yorumları + JSDoc/Sphinx blokları.</li>
      <li>⚠️ Çok dosyalı yeniden düzenlemeler (Copilot Workspace + Chat yardımcı olur ancak insan döngüde).</li>
      <li>❌ Mimari kararlar, yeni algoritma tasarımı, sistem tasarımı.</li>
      <li>❌ Tüm kesitleri ilgilendiren konular (günlük kaydı stratejisi, hata yönetimi felsefesi).</li>
    </ul>

    <h2 id="debug">Copilot ile hata ayıklama</h2>
    <p>
      Copilot Chat (IDE'niz içindeki sohbet arayüzü) hata ayıklama için gerçekten
      kullanışlıdır:
    </p>
    <ul>
      <li>Bir hata mesajı + ilgili kodu yapıştırın; "bu neden başarısız oluyor?" diye sorun.</li>
      <li>Olası düzeltmeler isteyin; her birini değerlendirin.</li>
      <li>"Bunu hangi testler yakalardı?" diye sorarak kapsamı iyileştirin.</li>
    </ul>
    <p>
      Şunlar için daha az kullanışlıdır: ince yarış koşulları, dağıtık sistem
      hataları, modelin göremediği çok dosyalı bağlam gerektiren her şey.
    </p>

    <h2 id="web">Copilot web geliştirme için iyi mi?</h2>
    <p>
      Evet, özellikle web yığınlarında güçlü. JavaScript, TypeScript, React, Vue,
      Next.js, CSS, HTML — tümü eğitim verilerinde iyi temsil edilir. Yaygın
      kullanışlı durumlar:
    </p>
    <ul>
      <li>Kısa bir açıklamadan bileşen iskeleti oluşturma.</li>
      <li>Form doğrulama mantığı.</li>
      <li>Stil amacına göre Tailwind yardımcı sınıfları.</li>
      <li>API uç noktası işleyicileri.</li>
      <li>JSON şekillerinden tür tanımları.</li>
    </ul>
    <p>
      Şunlar için daha az kullanışlıdır: yeni CSS düzenleri, animasyon eğrileri,
      erişilebilirliğe özgü ARIA kalıpları. Bunlar, kalıp eşleştirmeden çok beğeni +
      test gerektirir.
    </p>

    <h2 id="legacy">Eski kod, testler, dokümantasyon</h2>
    <ul>
      <li>
        <strong>Eski kod:</strong> Copilot, bilinmeyen fonksiyonları özetleyebilir
        ("bu kodu açıkla"). Güvenlik ağı olarak güçlü test kapsamı olmadan yeniden
        düzenleme için daha az kullanışlıdır.
      </li>
      <li>
        <strong>Test oluşturma:</strong> test dosyalarını ve mutlu yol testlerini
        iskelet olarak oluşturmada iyidir. Uç durumlarda vasattır — insanların hala
        sınır koşullarını düşünmesi gerekir.
      </li>
      <li>
        <strong>Dokümantasyon:</strong> iyi bir ilk geçiş JSDoc/Sphinx/docstring
        bloğu. Doğruluk ve üslup için düzenleyin.
      </li>
    </ul>

    <h2 id="teams">Ekipler + özelleştirme</h2>
    <ul>
      <li>
        <strong>Ekip iş birliği:</strong> İş + Kurumsal katmanlar. Merkezi
        faturalandırma, devre dışı bırakma seçeneği, denetim günlükleri.
      </li>
      <li>
        <strong>Özel talimatlar:</strong> Kurumsal katman, depo başına özel
        talimatları (stil kılavuzları, adlandırma kuralları) destekler. İş katmanı
        desteklemez.
      </li>
      <li>
        <strong>Kodlama standartlarının uygulanması:</strong> Copilot, stil
        kılavuzunuzu uygulamaz. Üzerine linter'lar + biçimlendiriciler kullanın.
      </li>
    </ul>

    <h2 id="stack">Çoklu dil, mobil, API entegrasyonu</h2>
    <ul>
      <li>
        <strong>Çoklu dil desteği:</strong> Değişen kalitede 20'den fazla dil.
        Birinci kademe: JS/TS, Python, Go, Java, Ruby, PHP, C#. İkinci kademe: C/C++,
        Rust, Swift, Kotlin. Üçüncü kademe: Erlang, Elixir, Haskell, Clojure (çalışır
        ancak doğruluk düşer).
      </li>
      <li>
        <strong>Mobil geliştirme:</strong> Swift (iOS) + Kotlin (Android) ikisi de
        makul. React Native + Flutter çok güçlü (web yığını mirası).
      </li>
      <li>
        <strong>API entegrasyonu:</strong> eğitim verilerindeki popüler API'ler için
        iyidir (Stripe, Twilio, AWS SDK). Modelin fazla görmediği niş API'lerde
        zayıftır. Oluşturulan çağrıları her zaman güncel dokümantasyona karşı
        doğrulayın.
      </li>
      <li>
        <strong>IDE uyumluluğu:</strong> VSCode, JetBrains, Neovim, Cursor, Visual
        Studio. Niş bir IDE kullanıyorsanız Tabnine daha fazla IDE'de çalışır.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Ekibiniz için ROI hesaplayın",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "GitHub Copilot'ın kodu ne kadar doğru?",
    a: "Popüler dillerdeki yaygın önerilerin %80-95'i derlenir ve temel testleri geçer. Alışılmadık kalıplar veya nadir API'ler için daha düşüktür. Yaygın hatalar: hayali API'ler, bir eksik/fazla mantık, güncelliğini yitirmiş kalıplar, güvenlik karşıtı kalıplar. Önerilere kıdemsiz geliştirici işi gibi davranın — kabul etmeden önce gözden geçirin; testler çoğu hayali sonucu yakalar.",
  },
  {
    q: "GitHub Copilot tüm uygulamaları yazabilir mi?",
    a: "Hayır. Copilot satırları ve küçük blokları iyi tamamlar; sistemleri mimari etmez, ödünleşimler yapmaz veya büyük kod tabanlarında tutarlılığı sağlamaz. Üretkenlik çarpanıdır, yedek değildir.",
  },
  {
    q: "GitHub Copilot web geliştirme için iyi mi?",
    a: "Evet — özellikle güçlü. JS/TS, React, Vue, Next.js, Tailwind tümü iyi temsil edilir. Bileşen iskeleti oluşturma, form doğrulama, API işleyicileri, tür tanımları için kullanışlıdır. Yeni CSS, animasyon, erişilebilirliğe özgü ARIA kalıpları için daha az kullanışlıdır.",
  },
  {
    q: "GitHub Copilot hangi programlama dillerini destekliyor?",
    a: "Değişen kalitede 20'den fazla dil. Birinci kademe: JS/TS, Python, Go, Java, Ruby, PHP, C#. İkinci kademe: C/C++, Rust, Swift, Kotlin. Mobil: Swift, Kotlin, React Native, Flutter tümü makul. Niş: Erlang, Elixir, Haskell, Clojure azaltılmış doğrulukla çalışır.",
  },
  {
    q: "Copilot IDE'mde çalışıyor mu?",
    a: "VSCode, JetBrains (IntelliJ, WebStorm, GoLand vb.), Neovim, Cursor, Visual Studio tümü resmi olarak desteklenir. Niş IDE'ler için Tabnine daha geniş uyumluluğa sahiptir. Mobil/iPad geliştirme, kullandığınız IDE'nin eklentileri desteklemesini gerektirir.",
  },
];