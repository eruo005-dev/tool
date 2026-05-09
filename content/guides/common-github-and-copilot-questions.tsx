/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      r/learnprogramming, r/programming, r/cscareerquestions ve r/SoftwareRecs
      altındaki sık sorulan GitHub + GitHub Copilot sorularına hızlı yanıtlar.
      Her biri, yanıtın daha fazla alana ihtiyaç duyduğu daha derin bir kılavuza
      bağlanır.
    </p>
  </>
);

export const toc = [
  { id: "abandoned", label: "Terk edilmiş + çevrimdışı + bakım" },
  { id: "find-code", label: "Sorununuzu çözen kodu bulma" },
  { id: "forking", label: "Çatallamanın (fork) gerçek anlamı" },
  { id: "deleted-recovery", label: "Silinen kodu kurtarma" },
  { id: "copilot-misc", label: "Copilot hataları + özelleştirme + güncellemeler" },
];

export const body = (
  <>
    <h2 id="abandoned">Bir açık kaynak projenin bakımının yapılıp yapılmadığını nasıl anlarım?</h2>
    <p>
      Beş sinyal (güvenilirlik sırasına göre):
    </p>
    <ol>
      <li>
        <strong>Son commit'ler.</strong> Son 90 gün içinde commit = aktif.
        6-12 ay = nedenini kontrol edin; hala canlı olabilir ancak düşük öncelikli. 1+ yıl
        = aksi açıkça belirtilmedikçe terk edilmiş olarak kabul edin.
      </li>
      <li>
        <strong>Son sürümler.</strong> Son 6 ayda gerçek bir sürüm atlaması
        aktif bakım olduğunu gösterir.
      </li>
      <li>
        <strong>PR + sorun yanıt süresi.</strong> Son PR'lara bakın — bakımcılar
        yanıt veriyor mu? &ldquo;200 gündür açık, yanıt yok&rdquo; kötü bir
        işarettir.
      </li>
      <li>
        <strong>Bakımcı sayısı.</strong> Tek bakımcılı projeler
        otobüs-faktörü riskidir. Çok bakımcılı + kuruluş sahipli daha güvenlidir.
      </li>
      <li>
        <strong>Finansman kaynağı.</strong> Vakıf destekli (Apache, Linux),
        kurumsal sponsorlu (Meta'dan React, Google'dan K8s) veya ticari
        destekli (Posthog, Sentry) projeler bakımcı değişimine dayanır.
      </li>
    </ol>

    <h2>Çoğu zaman çevrimdışıysam GitHub'ı kullanabilir miyim?</h2>
    <p>
      Evet — Git temelde çevrimdışıdır. git CLI'si internet olmadan çalışır;
      yerel olarak commit + dal oluşturma + geçmişe göz atma yapabilirsiniz. Yalnızca
      GitHub'a <code>push</code> yapmak veya işbirlikçilerden değişiklikleri <code>pull</code> etmek için
      internete ihtiyacınız vardır.
    </p>
    <p>
      İş akışı: hafta boyunca çevrimdışı çalışın, bağlantınız olduğunda push yapın.
      Ara sıra internet ziyareti çoğu kullanım durumu için yeterlidir.
    </p>

    <h2>GitHub bakım gerektirir mi?</h2>
    <p>
      Bireysel kullanıcılar için minimum düzeydedir. Periyodik öğeler:
    </p>
    <ul>
      <li>Kişisel Erişim Belirteçlerini döndürün (yıllık veya sızıntı şüphesinde).</li>
      <li>Ekip üyeliği değiştiğinde repo ayarlarını + izinleri gözden geçirin.</li>
      <li>Eski çatalları + dalları periyodik olarak temizleyin.</li>
      <li>Dependabot uyarılarını denetleyin; ya düzeltin ya da riski açıkça kabul edin.</li>
    </ul>

    <h2 id="find-code">Sorunumu çözen kodu bulmanın en kolay yolu nedir?</h2>
    <p>
      Üç arama stratejisi:
    </p>
    <ul>
      <li>
        <strong>GitHub kod araması.</strong> Ayırt edici fonksiyon adlarını,
        hata dizelerini veya belirli API kalıplarını arayın. &ldquo;Birisi daha önce
        Y kütüphanesiyle X'i yaptı mı?&rdquo; için iyidir.
      </li>
      <li>
        <strong>Sourcegraph genel arama.</strong> Farklı bir dizin, bazen
        GitHub'ın bulamadığını bulur. Ücretsiz katman genel repoları kapsar.
      </li>
      <li>
        <strong>Konuya göre npm / PyPI / crates araması.</strong> Önce iyi bilinen
        kütüphaneleri bulun; uygulamayı anlamanız gerekiyorsa kaynaklarına dalın.
      </li>
    </ul>
    <p>
      Öğrenmek için: popüler bir kütüphane seçin, kaynağı okuyun. Yüksek kaliteli
      üretim kodu okumaktan elde edilen birikim, kurs almaktan daha iyidir.
    </p>

    <h2 id="forking">&ldquo;Çatallama (forking)&rdquo; gerçekte ne anlama geliyor?</h2>
    <p>
      Çatal = başka birinin reposunun kişisel kopyanız. Pratik
      sonuçlar:
    </p>
    <ul>
      <li>
        Çatalınız, orijinalinde olmayan değişikliklere sahip olabilir.
      </li>
      <li>
        Değişiklik önermek için çatalınızdan orijinale bir Çekme İsteği (Pull Request) açabilirsiniz
        (standart AKK katkı akışı).
      </li>
      <li>
        Orijinal güncellenirse, çatalınızı GitHub arayüzünden &ldquo;senkronize edebilirsiniz&rdquo;.
      </li>
      <li>
        Çatallar repo toplamınıza dahil edilir ancak minimum depolama kullanır (GitHub
        yinelenenleri kaldırır).
      </li>
    </ul>
    <p>
      Ne zaman çatallanır: AKK projelerine katkıda bulunurken (çatal → dal → geri PR).
      Ne zaman çatallanmaz: yalnızca projeyi kullanmak istiyorsanız — sadece kurun / klonlayın,
      çatallamayın.
    </p>

    <h2 id="deleted-recovery">Yanlışlıkla sildiğim kodu nasıl kurtarırım?</h2>
    <p>
      Birden çok güvenlik ağı:
    </p>
    <ul>
      <li>
        <strong>Yerel Git geçmişi.</strong> Silmeden önce commit ettiyseniz,
        <code>git log</code> gösterir. <code>git checkout &lt;commit&gt; -- &lt;file&gt;</code> kurtarır.
      </li>
      <li>
        <strong>git reflog.</strong> HEAD değişiklikleri dahil işlemleri gösterir.
        Zorla push veya sıfırlamadan sonra kurtarabilir.
      </li>
      <li>
        <strong>GitHub kurtarma.</strong> Bir repoyu silerseniz, Ayarlar → Genel → Geri Yükle
        yoluyla geri yüklemek için ~90 gününüz vardır.
      </li>
      <li>
        <strong>Önbelleğe alınmış PR farkları.</strong> Zorla push kaldırmasından sonra bile,
        GitHub bazen silinen içeriği içeren eski PR farklarını gösterir.
      </li>
      <li>
        <strong>İşbirlikçi klonları.</strong> Başka biri repoyu klonladıysa,
        kopyalarında hala geçmiş vardır.
      </li>
    </ul>
    <p>
      İlk adım: panik yapmayın, yeni bir şey commit etmeyin. Ardından
      <code>git reflog</code> çalıştırın. Kazaların %95'i oradan kurtarılır.
    </p>

    <h2 id="copilot-misc">GitHub Copilot hataları, özelleştirme ve güncellemeler</h2>
    <ul>
      <li>
        <strong>Yaygın Copilot hataları:</strong> hayali API'ler (her zaman
        belgelerle doğrulayın), güvenli olmayan varsayılanlar (SQL birleştirme, eksik girdi
        doğrulaması), güncel olmayan kalıplar (eğitim verilerinden kullanımdan kaldırılmış
        API'ler), kendinden emin bir şekilde yanlış birer birer hatalar. Kod incelemesi + testler çoğunu yakalar.
      </li>
      <li>
        <strong>Özelleştirme:</strong> Bireysel / İş katmanlarında sınırlıdır.
        Kurumsal katman, repo başına özel talimatları destekler (stil kılavuzları,
        adlandırma kuralları). Tüm katmanlar için .editorconfig + linter'lar + biçimlendiriciler,
        özel Copilot kurallarının yapacağının çoğunu yapar.
      </li>
      <li>
        <strong>Güncelleme sıklığı:</strong> temel model güncellemeleri kademeli olarak gelir —
        GitHub, temel modelleri periyodik olarak değiştirir. Çoğu yükseltme için belirli tarihler
        duyurulmaz. Kararlı IDE eklentisi; büyük UX değişiklikleri yılda 1-2 kez.
      </li>
      <li>
        <strong>Çoklu dil desteği:</strong> Değişen kalitede 20'den fazla dil.
        En iyiler: JS/TS, Python, Go, Java, Ruby, PHP, C#. Mobil: Swift,
        Kotlin. Niş: Erlang, Elixir, Haskell, Clojure çalışır ancak doğruluk
        düşer.
      </li>
      <li>
        <strong>Açık kaynak projeler:</strong> AKK katkılarında Copilot kullanmak
        genellikle sorun değildir. Bazı bakımcılar, prensip olarak AI destekli PR'ları reddeder;
        göndermeden önce CONTRIBUTING.md'yi kontrol edin.
      </li>
    </ul>

    <h2>Copilot'un önerisinin doğru olup olmadığını nasıl anlarım?</h2>
    <p>
      Herhangi bir kodun doğru olduğunu bildiğiniz yolla aynı: çalıştırın, test edin, okuyun. Copilot
      çıktısı sihirli bir şekilde doğru veya yanlış değildir — bir başlangıç noktasıdır.
      Özellikle şunları kontrol edin:
    </p>
    <ul>
      <li>API çağrısı var mı? (En yaygın <a href="/learn/hallucination">halüsinasyon</a> türü.)</li>
      <li>Fonksiyon argümanları doğru sırada mı?</li>
      <li>Mantık, yorumun söylediğini gerçekten yapıyor mu?</li>
      <li>Kenar durumlar ele alınıyor mu? (Copilot burada zayıf.)</li>
      <li>Mevcut kod stilinizle eşleşiyor mu?</li>
    </ul>
  </>
);

export const cta = {
  label: "GitHub Copilot YG tahmini alın",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "Bir açık kaynak projenin gerçekten bakımının yapılıp yapılmadığını nasıl anlarım?",
    a: "Beş sinyal: son commit'ler (son 90 gün = aktif, 1+ yıl = terk edilmiş), son sürümler, PR/sorun yanıt süresi, bakımcı sayısı (tek bakımcı = otobüs-faktörü riski), finansman kaynağı (vakıf/kurumsal/ticari destek değişime dayanır).",
  },
  {
    q: "Çoğu zaman çevrimdışıysam GitHub'ı kullanabilir miyim?",
    a: "Evet — Git temelde çevrimdışıdır. CLI internet olmadan çalışır; yerel olarak commit + dal + geçmişe göz atma. Yalnızca push veya pull için internete ihtiyaç vardır. Hafta boyunca çevrimdışı çalışın, bağlandığınızda senkronize edin.",
  },
  {
    q: "Yeni başlayanlar için 'çatallama (forking)' gerçekte ne anlama geliyor?",
    a: "Çatal = başka birinin reposunun kişisel kopyanız. Kendi değişikliklerinize sahip olabilir, orijinale PR'lar açabilir, gerektiğinde yukarı akıştan senkronize edebilirsiniz. Standart AKK katkı akışı: çatal → dal → PR. Yalnızca bir projeyi kullanmak istiyorsanız çatallamayın — bunun yerine klonlayın.",
  },
  {
    q: "Yanlışlıkla sildiğim kodu nasıl kurtarırım?",
    a: "Panik yapmayın. git reflog, 'kaybolmuş' görünenler dahil son işlemleri gösterir. git checkout <commit> -- <file> geçmişten kurtarır. GitHub repo silme işleminin 90 günlük geri yükleme penceresi vardır. Zorla push ile kaldırılanlar bazen PR farklarında hayatta kalır. İşbirlikçi klonlarında hala tam geçmiş bulunur.",
  },
  {
    q: "GitHub Copilot'un önerisinin doğru olup olmadığını nasıl anlarım?",
    a: "Herhangi bir kodla aynı yol — çalıştırın, test edin, okuyun. Özellikle şunları kontrol edin: API çağrısı var mı (en yaygın halüsinasyon), argümanlar doğru sırada mı, mantık yorumla eşleşiyor mu, kenar durumlar ele alınıyor mu (zayıf nokta), stilinizle eşleşiyor mu? Testler çoğu ince hatayı yakalar.",
  },
];