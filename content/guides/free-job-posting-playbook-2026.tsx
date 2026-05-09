/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Nereye ücretsiz iş ilanı verebilirim ki gerçekten başvuru alsın?&rdquo; en sık
      sorulan küçük işletme sorusudur{" "}
      <a href="https://www.reddit.com/r/smallbusiness/" rel="noreferrer">r/smallbusiness</a>{" "}
      ve <a href="https://www.reddit.com/r/Recruitment/" rel="noreferrer">r/Recruitment</a>.
      Doğru cevap: ücretsiz iş ilanları işe yarar, ancak yalnızca optimize ederseniz — Indeed
      ücretsiz listeleri sponsorlu olanların altında gösterilir, LinkedIn ücretsiz sizi 1 aktif
      işle sınırlar ve Facebook Jobs 2023'te kapatıldı.
    </p>
    <p>
      İşte oyun kitabı: hangi ücretsiz panolar hâlâ sonuç veriyor, 0 TL ödemenize rağmen
      sıralamada yükselecek bir ilan nasıl yazılır ve tek bir iş tanımını 12 farklı platforma
      dönüştüren çoklu platform dağıtım taktiği.
    </p>
  </>
);

export const toc = [
  { id: "boards", label: "Hâlâ çalışan ücretsiz iş panoları" },
  { id: "facebook", label: "2026'da Facebook iş ilanı" },
  { id: "multi-post", label: "Çoklu platformda ilan verme" },
  { id: "writing", label: "Filtreleyen iş tanımları" },
  { id: "tracking", label: "Kaynak kalitesini takip etme" },
];

export const body = (
  <>
    <h2 id="boards">2026'da hâlâ çalışan ücretsiz iş panoları</h2>
    <p>
      Etkinlik, rol türüne göre değişir. Mühendislik / tasarım / uzaktan roller niş
      panolardan organik trafik alır; yerel saatlik roller geniş toplayıcı erişimine ihtiyaç duyar.
    </p>
    <ul>
      <li>
        <strong>Indeed (ücretsiz organik):</strong> hâlâ en yüksek hacimli toplayıcı. Ücretsiz
        listeler sponsorlu olanların altında görünür — genellikle sayfa 2–3 sonuçları. Geçici çözüm:
        ilk 72 saat için günlük 1$ sponsorlu bütçe ekleyin, ardından ücretsize dönün.
      </li>
      <li>
        <strong>LinkedIn (ücretsiz, 1 aktif iş):</strong> beyaz yakalı roller için çalışır.
        Sınırlama: hesap başına aynı anda yalnızca 1 ücretsiz ilan; 50 başvurudan sonra
        gösterilmez.
      </li>
      <li>
        <strong>Google Jobs:</strong> <code>JobPosting</code> yapılandırılmış verisine sahip
        herhangi bir şirket kariyer sayfasını indeksler. Sitenizde varsa, otomatik olarak
        Google'ın ücretsiz iş toplayıcısına girersiniz. Çoğu küçük işletme sitesinde yoktur —
        <a href="/learn/json-ld">JSON-LD</a> eklemek 20 dakika sürer.
      </li>
      <li>
        <strong>Wellfound (eski adıyla AngelList Talent):</strong> girişim odaklı, belirli bir
        hacme kadar işverenler için ücretsiz. Erken aşama şirketler için en iyisi.
      </li>
      <li>
        <strong>Hacker News &ldquo;Who is hiring&rdquo; başlığı:</strong> ayın ilk iş günü
        saat ~09:00 ET'de. Ücretsiz, ~10K geliştirici gözü. Düz metin ilan, başvuru yok,
        adaylar size doğrudan e-posta gönderir.
      </li>
      <li>
        <strong>Reddit role-specific alt dizinleri:</strong> r/forhire, etiketle işveren
        gönderilerine izin verir; bazı niş alt dizinlerin (r/REMOTEjobs, r/cscareerquestions
        işe alım başlıkları) kendi kuralları vardır — göndermeden önce kenar çubuğunu okuyun.
      </li>
      <li>
        <strong>Slack toplulukları:</strong> niş topluluklar (Reactiflux #jobs, Designer
        Hangout #jobs, Locally Optimistic for analytics) işverenlerin ücretsiz olarak ilan
        verebileceği aktif iş kanallarına sahiptir.
      </li>
    </ul>

    <h2 id="facebook">Facebook Jobs geri mi geldi? (Hayır.)</h2>
    <p>
      Meta, Facebook Jobs'ı Şubat 2023'te kapattı. Gruplardaki ve Marketplace'teki gönderiler
      hâlâ adaylara ulaşıyor (özellikle saatlik / yerel / restoran / perakende roller için) ancak
      artık yapılandırılmış bir iş panosu yüzeyi değil. Yerine geçenler:
    </p>
    <ul>
      <li>
        <strong>Facebook Marketplace &gt; Jobs:</strong> bazı bölgelerde yerel saatlik roller
        için mevcut. Sınırlı hedefleme.
      </li>
      <li>
        <strong>Facebook Grupları:</strong> yerel iş grupları (&ldquo;[şehriniz] iş ilanları&rdquo;
        araması) işveren gönderilerini kabul eder; kurallar yöneticiye göre değişir.
      </li>
      <li>
        <strong>Instagram Hikâye / Reels:</strong> zaten bir kitleniz varsa, işe alım duyurusu
        yayınlamak takipçilere ulaşır. Soğuk çalışmaz.
      </li>
    </ul>

    <h2 id="multi-post">Bir öğleden sonrada 12 platformda ilan verme</h2>
    <p>
      Bir iş tanımı → birçok yerleşim. İş akışı:
    </p>
    <ol>
      <li>Tanımı bir kez yazın (sonraki bölüm ne yazılacağını kapsar).</li>
      <li>Önce Indeed ücretsize gönderin — bu sizin kanonik bağlantınız.</li>
      <li>Aynı tanımı LinkedIn, Wellfound, niş Slack/Discord kanalları, kendi kariyer sayfanızda çapraz yayınlayın.</li>
      <li>Her yerleşim için, başvuru formuna <em>geri</em> bağlantı verin (Indeed'e değil), böylece huniyi kontrol eder ve kaynak verisini yakalarsınız.</li>
      <li>Her yerleşim için bir UTM parametresi ayarlayın: <code>?utm_source=indeed</code>, <code>?utm_source=linkedin</code>, vb. Artık hangi panoların gerçekten işe alım yaptığını bilirsiniz.</li>
    </ol>
    <p>
      Bu, kaynak atamasıyla bir düzine yerleşim için 60–90 dakikadır. Ücretli çoklu yayınlama
      araçları (Recruitee, Workable'ın iş panosu özelliği) bunu aylık 89$+ karşılığında otomatikleştirir —
      ~10 aktif gereksinimin üzerinde değer, altında gereksiz.
    </p>

    <h2 id="writing">Filtreleyen iş tanımları yazma (herkesi çekmeyen)</h2>
    <p>
      Her küçük işletme ilanının yaptığı hata: &ldquo;daha fazla başvuru&rdquo; için optimize
      etmek. Daha fazla istemezsiniz — doğru olanları istersiniz. Filtreleme mekanikleri:
    </p>
    <ul>
      <li>
        <strong>En üstte maaş aralığı.</strong> Uymayan tüm nüfusu atlar. Size, teklifi
        zaten reddedecek birini elemek için 30 saat kazandırır.
      </li>
      <li>
        <strong>Spesifik somut gereksinimler.</strong> &ldquo;Stripe entegrasyonunu
        üretime gönderdi&rdquo; ifadesi &ldquo;3+ yıl ödeme deneyimi&rdquo; ifadesini yener.
        Birincisi filtreler; ikincisi filtrelemez.
      </li>
      <li>
        <strong>Gerçek şirket detayları.</strong> Şirketin neden çalışmaya değer olduğuna dair
        bir paragraf — genel &ldquo;hızlı hareket ederiz&rdquo; metni değil. Önemseyen kişiler
        için kendi kendine seçim yapar.
      </li>
      <li>
        <strong>Formda bir eleme sorusu.</strong> &ldquo;2 cümlede neden uygunsunuz?&rdquo;
        sorusu bile rastgele başvuranların %60'ını eler. Adaylara 90 saniyeye mal olur; size
        saatler kazandırır.
      </li>
    </ul>

    <h2 id="tracking">Kaynak kalitesini takip etme (hangi pano işe alım yapıyor)</h2>
    <p>
      12 panoda ilan vermek, hangilerinin iyi aday ürettiğini söyleyemezseniz boşa çabadır.
      Minimum uygulanabilir takip:
    </p>
    <ul>
      <li>Her bağlantıda UTM parametreleri (yukarıda ele alındı).</li>
      <li>Başvuru formunuzda kaynak alanı (serbest metin veya açılır menü).</li>
      <li>Kaynak sütunu olan bir boru hattı takipçisi — aday başına kaynak içeren{" "}
        <a href="/tools/recruiting-pipeline-tracker">işe alım boru hattı takipçimize</a> bakın.</li>
      <li>Aylık inceleme: hangi kaynaklar teklif aşamasına geldi? Hangileri işe alıma dönüştü?</li>
    </ul>
    <p>
      30 gün sonra net bir sinyal göreceksiniz: 1–2 kaynak, uygun adayların %60'ını üretir.
      Geri kalanlarda ilan vermeyi bırakın. Çoğu küçük şirket sonsuza kadar &ldquo;12 panonun
      tamamında&rdquo; saatler harcar; veriler size odaklanmanızı söyler.
    </p>
  </>
);

export const cta = {
  label: "Başvuruları kaynağa göre takip edin (ücretsiz boru hattı takipçisi)",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "Herhangi bir iş panosuna ödeme yapmadan gerçekten işe alım yapabilir miyim?",
    a: "Çoğu küçük işletme için evet. Indeed ücretsiz + LinkedIn ücretsiz + Google Jobs (kariyer sayfanızdaki JobPosting yapılandırılmış verisi aracılığıyla) + 2 niş yerleşim çoğu ihtiyacı karşılar. Yılda ~5 işe alımın altında, ücretli yerleşimi haklı çıkarmak zordur.",
  },
  {
    q: "Facebook Marketplace iş ilanı vermek için iyi mi?",
    a: "Yalnızca yerel saatlik roller için. Restoran, perakende, konaklama — evet, adaylar orada. Yazılım mühendisliği, uzaktan işler — hayır, kitle uyuşmuyor.",
  },
  {
    q: "Indeed ücretsiz ilanımın sıralamada yükselmesini nasıl sağlarım?",
    a: "Sponsorlu olanların üzerine çıkaramazsınız, ancak ilk 72 saat için günlük 1$ ödeyerek ilk ivmeyi yakalayabilir, ardından ücretsize düşebilirsiniz. Başvuruların çoğu zaten 1. haftada gelir.",
  },
  {
    q: "Google Jobs ücretsiz bir ilanı indeksler mi?",
    a: "Evet — Google Jobs, Indeed/LinkedIn'e ödeme yapıp yapmadığınıza bakılmaksızın, herkese açık bir kariyer sayfasındaki herhangi bir yapılandırılmış veri JobPosting'ini indeksler. Yerleşim bağımsızdır.",
  },
];