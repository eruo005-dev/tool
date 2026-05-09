/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Sıkça sorulan oyun bilgisayarı kurma/kiralama sorularına hızlı yanıtlar:
      r/buildapc, r/buildapcforme, r/SuggestALaptop ve benzer topluluklardan.
      Her biri, cevabın daha fazla alan gerektirdiği durumlarda daha detaylı bir
      kılavuza bağlanır.
    </p>
  </>
);

export const toc = [
  { id: "timing", label: "Zamanlama + hız" },
  { id: "watching", label: "Kurulumu izlemek" },
  { id: "hardest", label: "En zor parçalar" },
  { id: "experience", label: "Gerekli deneyim" },
  { id: "vetting", label: "Kurulumcuları değerlendirme" },
];

export const body = (
  <>
    <h2 id="timing">Profesyonel bir oyun bilgisayarı kurmak ne kadar sürer?</h2>
    <p>
      Kurulum süresi: 1-3 saat. Toplam teslim süresi:
    </p>
    <ul>
      <li>
        <strong>Micro Center aynı gün:</strong> sabah bırak, öğleden sonra al.
        Stres testi dahildir.
      </li>
      <li>
        <strong>Yerel PC mağazaları:</strong> 1-3 iş günü. Bazıları aynı gün.
      </li>
      <li>
        <strong>Çevrimiçi kurulumcular + kargo:</strong> toplam 1-3 hafta (kurulum
        sırası + montaj + kargo). NZXT BLD genellikle 1-2 hafta; Origin / Maingear
        2-3 hafta.
      </li>
      <li>
        <strong>Premium özel kurulumlar (su soğutma, özel boya):</strong> 2-6
        hafta.
      </li>
    </ul>
    <p>
      Hızlandırıcı faktörler: ön ödemeli siparişler sırayı atlar, parçalar zaten
      kurulumcunun stokundaysa bekleme süresi olmaz, basit kurulumlar karmaşık
      olanlardan daha hızlıdır.
    </p>

    <h2 id="watching">Birinin oyun bilgisayarımı kurmasını izleyebilir miyim?</h2>
    <p>
      Mağazaya bağlı. Bazıları izin verir (eğitici + güven oluşturur); bazıları
      sorumluluk nedenleriyle izin vermez. Deneyim sizin için önemliyse sormaya
      değer.
    </p>
    <p>
      Alternatifler: mağazadan kurulum sırasında fotoğraf çekmesini isteyin, aynı
      parçalar için YouTube'da kurulum videosu izleyin (çoğu popüler CPU/kasa için
      birden fazla video vardır) veya yerel olarak sunuluyorsa Micro Center'da
      "PC kurulumuna giriş" dersi alın.
    </p>

    <h2 id="hardest">Hangi parçaları takmak en zordur?</h2>
    <p>
      İlk kez kuracaklar için en zor 5 parça sıralaması:
    </p>
    <ol>
      <li>
        <strong>CPU'yu sokete yerleştirmek.</strong> Bükülen pinler en maliyetli
        hatadır.
      </li>
      <li>
        <strong>Ön panel G/Ç konektörleri.</strong> Minik pinler, uğraştırıcı.
        Kılavuz tek kurtarıcıdır.
      </li>
      <li>
        <strong>AIO radyatör + fanları kasaya monte etmek.</strong> Radyatör, fanlar
        ve vidaları aşırı sıkmadan hizalamak.
      </li>
      <li>
        <strong>EPS kablosunu yönlendirmek.</strong> Kablo ancak yetişir; kasa
        kanallarından dikkatlice geçirin.
      </li>
      <li>
        <strong>Temiz görünmesi için kablo yönetimi.</strong> İşlevsel olarak
        isteğe bağlıdır ancak dağınık olduğunda duygusal olarak acı vericidir.
      </li>
    </ol>
    <p>
      Her biri için ayrıntılı bilgi için{" "}
      <a href="/guides/gaming-pc-building-guide-for-beginners">yeni başlayanlar
      kurulum kılavuzumuza</a> bakın.
    </p>

    <h2 id="experience">Kendi oyun bilgisayarımı kurmak için deneyimli olmam gerekir mi?</h2>
    <p>
      Hayır. İlk kez kuranlar her gün başarıyla kurulum yapıyor. Gerekli beceriler:
    </p>
    <ul>
      <li>Temel mekanik yetenek (tornavida kullanmak).</li>
      <li>Sabır (kılavuzu okuyun, hiçbir şeyi zorlamayın).</li>
      <li>İlk açılış başarısız olduğunda sorun gidermeye istekli olmak.</li>
      <li>Hata durumlarını Google'da aramak ve Reddit başlıklarını okumakta rahat olmak.</li>
    </ul>
    <p>
      İhtiyacınız olmayanlar: önceden PC kurma deneyimi, elektronik geçmişi,
      lehimleme becerileri, bilgisayar mühendisliği eğitimi. Kurulum süreci
      mekanik montaj + kablo takmadır, mühendislik değil.
    </p>
    <p>
      İlk kurulumda dürüst sonuçlar: ~%75'i ilk denemede çalışır, ~%25'i 30
      dakikalık sorun giderme gerektirir (genellikle yanlış RAM yuvası, monitörün
      anakart portuna takılması veya EPS'nin bağlı olmaması). Neredeyse herkes
      aynı gün içinde çözer.
    </p>

    <h2 id="vetting">Bir PC kurulumcusunun uzmanlığı nasıl doğrulanır?</h2>
    <p>
      Beş değerlendirme adımı:
    </p>
    <ol>
      <li>
        <strong>Google yorumları.</strong> 4.0+ yıldız, 50+ yorum, güncel yorumlar
        (son 12 ay).
      </li>
      <li>
        <strong>Belirli kurulum fotoğrafları.</strong> Son kurulumlardan örnekler
        isteyin. Kablo yönetiminin kalitesi görünür. Kötü kablo yönetimi = kötü
        detay dikkati.
      </li>
      <li>
        <strong>Stres testi yöntemi.</strong> "Test ediyoruz" yeterli bir cevap
        değil. Prime95 + Furmark + süre belirtilmeli.
      </li>
      <li>
        <strong>BIOS işlemleri.</strong> XMP/EXPO'yu etkinleştirecekler mi? BIOS'u
        güncelleyecekler mi? Standart olmalı.
      </li>
      <li>
        <strong>Yazılı garanti.</strong> E-posta veya basılı makbuz. Sözlü
        garantiler uygun bir şekilde unutulur.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "Kurulum vs kiralama hesaplayıcısı (ücretsiz)",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "Profesyonel bir oyun bilgisayarı kurmak ne kadar sürer?",
    a: "Kurulumun kendisi: 1-3 saat. Toplam teslim süresi: Micro Center aynı gün; yerel mağazalar 1-3 gün; çevrimiçi kurulumcular + kargo 1-3 hafta; premium özel kurulumlar (su soğutma, boya) 2-6 hafta. Ön ödemeli siparişler sırayı atlar.",
  },
  {
    q: "Birinin oyun bilgisayarımı kurmasını izleyebilir miyim?",
    a: "Mağazaya bağlı. Bazıları izin verir (eğitici, güven oluşturur). Bazıları sorumluluk nedenleriyle izin vermez. Alternatifler: kurulum fotoğrafları isteyin, aynı parçalar için YouTube kurulum videoları izleyin, yerel olarak sunuluyorsa Micro Center kurulum dersi alın.",
  },
  {
    q: "Hangi oyun bilgisayarı parçalarını takmak en zordur?",
    a: "CPU'yu sokete yerleştirmek (bükülen pinler maliyetlidir), ön panel G/Ç konektörleri (minik pinler), AIO radyatör montajı, EPS kablosunu kasa içinde yönlendirmek, temiz görünmesi için kablo yönetimi. Mekanik zorluk çoğunlukla sabır + kılavuz okumakla ilgilidir; duygusal zorluk kablo yönetimindedir.",
  },
  {
    q: "Bir oyun bilgisayarı kurmak için deneyimli olmam gerekir mi?",
    a: "Hayır. İlk kez kuranların ~%75'i ilk denemede çalıştırır; ~%25'i 30 dakikalık sorun giderme gerektirir (genellikle yanlış RAM yuvası, monitörün anakart portuna takılması veya EPS'nin bağlı olmaması). Neredeyse herkes aynı gün içinde çözer. Gerekli beceriler: temel tornavida kullanımı, sabır, Google'da arama isteği.",
  },
  {
    q: "Bir PC kurulumcusunun uzmanlığı nasıl doğrulanır?",
    a: "Beş adım: Google yorumları 4.0+ ve 50+ güncel yorum, belirli kurulum fotoğrafları isteyin (kablo yönetimi görünür), belirli stres testi yöntemi (Prime95 + Furmark + süre), BIOS işlemleri (XMP/EXPO etkinleştirme, BIOS güncelleme), yazılı garanti (e-posta veya basılı).",
  },
];