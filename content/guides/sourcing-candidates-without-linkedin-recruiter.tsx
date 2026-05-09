export const intro = (
  <>
    <p>
      LinkedIn Recruiter ayda 170$/koltuk'tan başlıyor — ve bu "Lite" katmanı.
      Küçük bir ekip veya solo bir işe alımcı için bu, bir kişiyi kendi başınıza işe almak
      ile gerçek bir kaynak bulma aracı kullanmak arasındaki farktır. Reddit'teki
      <a href="https://www.reddit.com/r/recruiting/" rel="noreferrer">r/recruiting</a>{" "}
      topluluğunun fikir birliği, Recruiter'ın yaptıklarının ~%70'ini ücretsiz araçlarla
      kopyalayabileceğiniz yönünde — EĞER geçici çözümleri biliyorsanız.
    </p>
    <p>
      İşte bağımsız işe alımcılar ve küçük şirket içi ekipler tarafından kullanılan gerçek
      oyun kitabı. Ücretsiz LinkedIn'de kaynak bulma, InMail olmadan işe alım yöneticilerini
      bulma, GitHub / Stack Overflow / Dribbble'dan aday çıkarma ve gerçekten işe yarayan
      sosyal medya taktiklerini kapsar.
    </p>
  </>
);

export const toc = [
  { id: "linkedin-free", label: "Ücretsiz LinkedIn'de kaynak bulma" },
  { id: "boolean", label: "Google Boolean aramaları" },
  { id: "github", label: "Mühendislik rolleri için GitHub" },
  { id: "design", label: "Tasarım için Dribbble + Behance" },
  { id: "hiring-mgrs", label: "İşe alım yöneticilerini bulma" },
  { id: "social", label: "Sosyal medya + topluluk kaynak bulma" },
];

export const body = (
  <>
    <h2 id="linkedin-free">Ücretsiz LinkedIn'de kaynak bulma (Recruiter olmadan)</h2>
    <p>
      Ücretsiz LinkedIn, ticari kullanımda aramalar için yumuşak sınırlara sahiptir (ayda
      ~100 arama, "arama limitinize ulaştınız" duvarına çarpmadan önce). Bu sınır içinde,
      işe yarayan ücretsiz filtreler:
    </p>
    <ul>
      <li>
        <strong>Ünvan + konum + şirket büyüklüğü:</strong> ücretsiz katmanda kalan üç
        filtre. "Kıdemli frontend mühendisi, San Francisco, 11–50" hızlıca daraltır.
      </li>
      <li>
        <strong>Deneyim yılı:</strong> açıkça yıl yerine "3. derece bağlantılar" +
        "mevcut şirket" olarak filtreleyin (bu filtre kısıtlıdır). Çoğu kıdemli mühendisin
        profilinde 3+ şirket bulunur.
      </li>
      <li>
        <strong>Okul + beceriler:</strong> hala ücretsiz, şaşırtıcı derecede az
        kullanılır.
      </li>
      <li>
        <strong>"Açık iş arıyor" rozeti:</strong> herkese görünür, aktif iş arayanları
        belirtir.
      </li>
    </ul>
    <p>
      Ardından kişiselleştirilmiş bir notla bağlantı isteği gönderin. Kabul oranının tatlı
      noktası, profillerindeki belirli bir şeye (bir gönderi, bir proje, bir şirket) atıfta
      bulunan 1-2 cümlelik bir nottur. Genel "merhaba, ben bir işe alımcıyım" ~%5 kabul
      alır. Spesifik olan %25-35 alır.
    </p>

    <h2 id="boolean">Google Boolean aramaları (LinkedIn geçici çözümü)</h2>
    <p>
      Herkese açık LinkedIn profilleri Google tarafından indekslenir. LinkedIn'in kısıtlı
      ücretsiz katman sınırlarının dışında arama yapabilirsiniz:
    </p>
    <pre><code>{`site:linkedin.com/in/ "react developer" "remote" -intern
site:linkedin.com/in/ ("data scientist" OR "ML engineer") "python" "boston"`}</code></pre>
    <p>
      Aynı mantık Stack Overflow, GitHub, Behance ve indekslenebilir kullanıcı profillerine
      sahip herhangi bir site için de geçerlidir. Boolean arama, en hafife alınan kaynak
      bulma becerisidir — bir saatlik pratiğe değer.
    </p>

    <h2 id="github">Mühendislik rolleri için GitHub</h2>
    <p>
      Herkese açık commit'ler herkese açıktır. GitHub'ın Gelişmiş Arama'sı, adayları dile,
      konuma (belirtilmişse) ve commit güncelliğine göre bulmanızı sağlar:
    </p>
    <pre><code>{`location:Berlin language:Rust followers:>100
language:Go location:NYC repos:>10`}</code></pre>
    <p>
      GitHub'da "iyi sinyal" şöyle görünür: tutarlı yakın tarihli commit'ler (son 12 ay),
      yalnızca fork'lar yerine repo sahipliği, kişisel projelerde README kalitesi ve şirket
      / konum içeren gerçek bir biyografi. Toplam commit sayısı daha zayıf bir sinyaldir —
      nicelikten çok nitelik.
    </p>
    <p>
      Profillerindeki e-posta yoluyla veya herkese açık repolarından birinde kibar bir
      tanıtımla bir issue açarak (tartışmalı ancak etkili; bazı bakımcılar bunu sinir bozucu
      bulur) iletişime geçin.
    </p>

    <h2 id="design">Tasarım rolleri için Dribbble + Behance</h2>
    <p>
      Dribbble ve Behance'in her ikisi de ücretsiz portföy aramasına sahiptir. Konuma, role
      ve müsaitliğe göre filtreler ücretsizdir (Dribbble "işe alınabilir" olarak işaretler).
      Behance proje güncelliğini gösterir. Her ikisi de ücretli katmanlar olmadan iletişim
      bilgilerini veya mesajlaşmayı açar. İletişim yaklaşımı: belirli bir projeye atıfta
      bulunun — tasarımcılar, roller olarak değil, yaratıcı insanlar olarak görülmeyi
      önemser.
    </p>

    <h2 id="hiring-mgrs">İşe alım yöneticilerini bulma (işe alımcıyı atlama hamlesi)</h2>
    <p>
      Doğrudan fırsatlar için başvuran iş arayanlar için, işe alım yöneticisini bulmak,
      başvuru kara deliğini atlamak anlamına gelir. Ücretsiz iş akışı:
    </p>
    <ol>
      <li>
        Şirketi LinkedIn'de bulun → Kişiler → ünvan arayın (ör.{" "}
        &ldquo;Mühendislik Başkan Yardımcısı&rdquo;, &ldquo;Pazarlama Direktörü&rdquo;).
      </li>
      <li>
        Şirket web sitesindeki ekip sayfasından çıkarabileceğiniz organizasyon şemasıyla
        çapraz referans yapın.
      </li>
      <li>
        E-posta kalıplarını bulun: çoğu şirket{" "}
        <code>ad@</code>, <code>ad.soyad@</code> veya{" "}
        <code>a.soyad@</code> + şirket alan adını kullanır. Hunter.io gibi ücretsiz
        araçlar ayda 25 ücretsiz arama verir. Apollo.io ücretsiz katmanı 60 verir.
      </li>
      <li>
        E-postayı NeverBounce ücretsiz katmanıyla doğrulayın veya sadece kısa, kibar bir
        tanıtım gönderin — geri dönen e-postalar önemsiz bir olaydır.
      </li>
    </ol>
    <p>
      Aynı oyun kitabı, adaylara soğuk mesaj atan işe alımcılar için de geçerlidir: adayı
      bulun, e-postalarını bulun, kısa ve spesifik bir mesaj gönderin.
    </p>

    <h2 id="social">Sosyal medya + topluluk kaynak bulma</h2>
    <p>
      Gerçek adayların takıldığı yerler (ücretsiz, premium hesap gerekmez):
    </p>
    <ul>
      <li>
        <strong>Slack toplulukları:</strong> Reactiflux (frontend), Designer Hangout
        (tasarım), Locally Optimistic (analitik), Rands Leadership (mühendislik
        yöneticileri). Çoğunda işveren dostu kurallara sahip #işler kanalları vardır.
      </li>
      <li>
        <strong>Discord sunucuları:</strong> Programming Discord, GameDev League, dile
        özel niş sunucular. Daha genç, daha kıdemsiz eğilimlidir ancak giriş seviyesi
        kaynak bulma için yüksek sinyaldir.
      </li>
      <li>
        <strong>Twitter / X:</strong> #işeAlım aramaları, teknoloji liderlerinin
        gönderilerine bireysel yanıtlar. Yavaş yanar ancak işe yaradığında yüksek
        kalitelidir.
      </li>
      <li>
        <strong>Reddit:</strong> r/forhire, r/jobsearch, niş alt gruplar (r/REMOTEjobs,
        r/cscareerquestions aylık işe alım başlıkları). Kuralları okuyun — çoğu alt grup,
        soğuk DM atan işe alımcıları yasaklar.
      </li>
      <li>
        <strong>Bülten sponsorlukları:</strong> ücretsiz değil, ancak ucuz (50–500$).
        İlgili bir niş bültende tek bir "işe alıyoruz" ifadesi, LinkedIn gönderilerinden
        daha iyi performans gösterir.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Kaynak bulunan adayları takip edin (ücretsiz pipeline aracı)",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "Ücretsiz LinkedIn, beni kilitlemeden önce ayda kaç aramaya izin veriyor?",
    a: "Ücretsiz hesaplar için takvim ayı başına yaklaşık 100 arama; limit opaktır ve aylık sıfırlanan bir 'ticari kullanım limitine ulaşıldı' duvarını tetikler. Sales Navigator (ücretli, ancak Recruiter'dan daha ucuz) bunu kaldırır.",
  },
  {
    q: "GitHub'da bir adayla iletişime geçmek sinir bozucu mu?",
    a: "Bazen. Norm: bir issue açın veya e-posta yoluyla iletişime geçin. Bir iletişim mekanizması olarak pull request açmayın. Bir kod incelemesinde bir iş hakkında mesaj atmayın. Çoğu mühendis, gerçek bir fırsat hakkında kibar, spesifik bir e-postayı umursamaz.",
  },
  {
    q: "Herhangi birinin e-postasını ücretsiz bulabilir miyim?",
    a: "Herkese açık alan adlarına sahip şirketlerdeki çoğu profesyonel için evet — Hunter.io ve Apollo.io ücretsiz katmanları, hedefli kaynak bulma için yeterli olan ayda 25-60 sorgulama verir. Herkese açık bir alan adında olmayan bireylerin kişisel Gmail/Outlook adresleri daha zordur.",
  },
  {
    q: "Soğuk iletişim, LinkedIn Recruiter olmadan gerçekten işe yarıyor mu?",
    a: "Evet — bağımsız işe alımcılar bunu tam zamanlı yapıyor. İşin püf noktası, hacim × özgüllüktür: 50 adaya bir kişiselleştirilmiş mesaj, Recruiter'da 500 genel InMail'i yener.",
  },
];