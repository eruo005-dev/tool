/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      2026 yılında "iş aramama yardım et" pazarına üç araç hakim: Jobscan
      (50$/ay), Teal (9–35$/ay) ve Huntr (30$/ay). Her biri diğerlerinin
      yapamadığı bir şey yapıyor ve her birinin gerçekten kullanışlı olan —
      ta ki olmayana kadar — bir ücretsiz katmanı var. Bu karşılaştırma:
      her birinin ne yaptığı, ücretsiz katmanların nerede sınırlandığı ve
      eğer birine ödeme yapacaksanız hangisini tercih etmeniz gerektiği.
    </p>
    <p>
      Canlı iş aramalarında üçünü de kullandık. Sonuç, "X kazanır"dan daha
      incelikli — farklı sorunları hedefliyorlar.
    </p>
  </>
);

export const toc = [
  { id: "quick", label: "Hızlı karar" },
  { id: "jobscan", label: "Jobscan" },
  { id: "teal", label: "Teal" },
  { id: "huntr", label: "Huntr" },
  { id: "free-tiers", label: "Ücretsiz katmanlar karşılaştırması" },
  { id: "stack", label: "En iyi ücretsiz kombinasyon" },
];

export const body = (
  <>
    <h2 id="quick">Hızlı karar</h2>
    <p>
      <strong>Jobscan</strong> = özgeçmiş-ve-İT puanlaması için en iyisi (bir seferde bir iş).{" "}
      <strong>Teal</strong> = aktif başvurularınızı yönetmek + yapay zeka özgeçmiş
      uyarlaması için en iyisi.{" "}
      <strong>Huntr</strong> = kanban tarzı iş arama organizasyonu için en iyisi.
    </p>
    <p>
      Birine ödeme yapacaksanız: <strong>Teal Pro</strong> en yüksek kaldıraçlı
      seçimdir çünkü yapay zeka özgeçmiş uyarlaması en çok zaman kazandırır. Yalnızca
      ücretsiz katmanları kullanıyorsanız: Teal ücretsiz (5 uygulama takibi) + bizim{" "}
      <a href="/tools/resume-keyword-match-scorer">sınırsız anahtar kelime puanlayıcımızı</a> birleştirerek
      her iki işi de kapsayın. Aşağıdaki "En iyi ücretsiz kombinasyon" bölümüne bakın.
    </p>

    <h2 id="jobscan">Jobscan</h2>
    <p>
      <strong>Ne işe yarar:</strong> bir özgeçmiş-ve-İT puanlama motoru. Özgeçmişinizi + bir
      İT'yi yapıştırın, beceri, unvan ve eğitim dökümleriyle yüzde eşleşme puanı alın.
    </p>
    <p>
      <strong>Güçlü yönleri:</strong>
    </p>
    <ul>
      <li>Üçü arasında en titiz anahtar kelime + beceri eşlemesi (yalnızca sıklık değil, beceri ontolojileri kullanır).</li>
      <li>Unvan eşleme puanlaması uyumsuzlukları yakalar (ör. özgeçmişte "Yazılım Mühendisi" vs İT'de "Kıdemli Yazılım Mühendisi").</li>
      <li>Hangi bölümlerin düzeltileceğine dair kapsam (Deneyim vs Eğitim vs Beceriler).</li>
    </ul>
    <p>
      <strong>Zayıf yönleri:</strong>
    </p>
    <ul>
      <li>50$/ay — üçünün en pahalısı.</li>
      <li>Ücretsiz katman: toplamda 5 tarama, ömür boyu (aylık değil). Pratik olarak ücretli abonelik gerektirir.</li>
      <li>Başvuruları takip etmez veya uyarlamaya yardımcı olmaz — yalnızca puanlar.</li>
    </ul>

    <h2 id="teal">Teal HQ</h2>
    <p>
      <strong>Ne işe yarar:</strong> bir iş arama çalışma alanı — başvuruları takip edin, yapay zeka ile
      özgeçmişleri uyarlayın, Chrome eklentisi ile iş panolarından işleri kaydedin.
    </p>
    <p>
      <strong>Güçlü yönleri:</strong>
    </p>
    <ul>
      <li>Üçü arasında en iyi yapay zeka özgeçmiş uyarlaması. Hafif düzenleme gerektiren İT hedefli maddeler oluşturur.</li>
      <li>LinkedIn / Indeed / vb.'den tek tıkla işleri yakalayan Chrome eklentisi.</li>
      <li>Fiyatlandırma esnekliği: 9$ haftalık, 29$ aylık, 79$ üç aylık (denemeden taahhüde geçiş dostu).</li>
    </ul>
    <p>
      <strong>Zayıf yönleri:</strong>
    </p>
    <ul>
      <li>Ücretsiz katman sınırları: 5 aktif iş takibi, sınırlı özgeçmiş oluşturucu, yapay zeka özellikleri yok.</li>
      <li>Özgeçmiş oluşturucu arayüzü engel oluyor — çoğu kullanıcı yine de Word/Google Docs'a aktarıyor.</li>
      <li>Eşleşme puanı özelliği Jobscan'ınkinden daha az doğru.</li>
    </ul>

    <h2 id="huntr">Huntr</h2>
    <p>
      <strong>Ne işe yarar:</strong> bir iş arama kanban panosu — başvuruları aşamaya göre
      görselleştirin, kişiler ve notlar ekleyin, tarayıcı eklentisi ile işleri klipsleyin.
    </p>
    <p>
      <strong>Güçlü yönleri:</strong>
    </p>
    <ul>
      <li>Görsel öğrenenler için üçü arasında en iyi arayüz (kanban + kartlar + sürükle-bırak).</li>
      <li>Şirket başına kişi takibi (işe alım uzmanı, işe alım müdürü, referans olan arkadaş).</li>
      <li>Ücretsiz katman en cömert olanı: 40 aktif başvuru.</li>
    </ul>
    <p>
      <strong>Zayıf yönleri:</strong>
    </p>
    <ul>
      <li>Yapay zeka özgeçmiş uyarlaması yok — ayrıca Teal veya ChatGPT kullanmak gerekir.</li>
      <li>Pro için 30$/ay, esasen Trello'nun Chrome eklentili hali için pahalı.</li>
      <li>Ücretsizde 40 aktif uygulama sınırı, agresif bir arama sırasında hızla doluyor.</li>
    </ul>

    <h2 id="free-tiers">Ücretsiz katmanlar karşılaştırması</h2>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Jobscan ücretsiz</th>
          <th>Teal ücretsiz</th>
          <th>Huntr ücretsiz</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Eşleşme puanlaması</td>
          <td>Ömür boyu 5 tarama</td>
          <td>Sınırlı</td>
          <td>Yok</td>
        </tr>
        <tr>
          <td>Özgeçmiş oluşturucu</td>
          <td>Yok</td>
          <td>Evet (sınırlı)</td>
          <td>Yok</td>
        </tr>
        <tr>
          <td>Yapay zeka özgeçmiş uyarlaması</td>
          <td>Yok</td>
          <td>Yalnızca ücretli</td>
          <td>Yok</td>
        </tr>
        <tr>
          <td>Başvuru takip sınırı</td>
          <td>Yok</td>
          <td>5 aktif</td>
          <td>40 aktif</td>
        </tr>
        <tr>
          <td>Chrome eklentisi</td>
          <td>Evet</td>
          <td>Evet</td>
          <td>Evet</td>
        </tr>
        <tr>
          <td>Şirket başına kişiler</td>
          <td>Yok</td>
          <td>Yok</td>
          <td>Evet (ücretsiz)</td>
        </tr>
      </tbody>
    </table>

    <h2 id="stack">En iyi ücretsiz kombinasyon (ödeme yok)</h2>
    <p>
      En çok ne yaptığınıza göre birini seçin:
    </p>
    <ul>
      <li>
        <strong>Birçok İT'ye karşı özgeçmiş puanlıyorsanız:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">sınırsız anahtar kelime puanlayıcımız</a>{" "}
        (tarama sınırı yok) + son doğrulama için Jobscan'ın 5 ücretsiz taraması.
      </li>
      <li>
        <strong>Birçok başvuruyu takip ediyorsanız:</strong> Huntr ücretsiz (40 uygulama)
        VEYA bir elektronik tablo (sınırsız).
      </li>
      <li>
        <strong>Ödeme yapmadan yapay zeka uyarlaması istiyorsanız:</strong> Yapılandırılmış bir
        komutla ChatGPT veya Claude ücretsiz (komutumuz{" "}
        <a href="/guides/free-job-search-tool-stack-2026">ücretsiz iş arama araç seti</a>{" "}
        rehberimizde).
      </li>
    </ul>
    <p>
      Bu kombinasyon, çoğu iş arayan için herhangi bir tek ücretli araçtan daha iyi performans gösterir. Yalnızca
      belirli bir duvara çarpıyorsanız birine ödeme yapın — 40'tan fazla başvuru takibi = Huntr Pro; haftada 20+ özgeçmiş uyarlaması = Teal Pro; her başvuruda titiz İT puanlaması gerekiyorsa = Jobscan Premium.
    </p>
  </>
);

export const cta = {
  label: "Özgeçmişinizi ücretsiz puanlayın (sınırsız tarama)",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "Jobscan 50$/ay değer mi?",
    a: "Ayda 30+ işe başvuruyor ve her biri için titiz anahtar kelime + unvan eşlemesi istiyorsanız, evet. Daha düşük hacim için ücretsiz anahtar kelime puanlayıcımız temel işlevi karşılar.",
  },
  {
    q: "Teal vs Huntr — hangisi daha iyi?",
    a: "Farklı işler. Teal yapay zeka özgeçmiş uyarlaması yapar (daha büyük zaman tasarrufu); Huntr görsel başvuru takibi yapar. Çok uyarlama yapıyorsanız Teal'i, çok takip yapıyorsanız Huntr'ı kullanın.",
  },
  {
    q: "ChatGPT, Teal'ın yapay zeka özgeçmiş oluşturucusunun yerini alabilir mi?",
    a: "Çoğunlukla evet, doğru komutla. İT'yi ve özgeçmişi yapıştırın, yapılandırılmış formatta uyarlanmış maddeler isteyin. Teal'ın kullanıcı deneyimi daha cilalı; ChatGPT ücretsizin metin üretiminde hız sınırı yok.",
  },
  {
    q: "Üçünün en ucuz ücretli seçeneği nedir?",
    a: "Teal 9$/hafta (dene ve iptal et dostu) en düşük giriş fiyatıdır. Huntr 30$/ay'dır ve haftalık seçeneği yoktur. Jobscan minimum 50$/ay'dır.",
  },
];