/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      GitHub profiliniz 2026'da özgeçmişinizin bir parçasıdır. Geleneksel bir bilgisayar bilimi diploması olmayan geliştiriciler için genellikle en önemli kısımdır. Bu rehber, işe alım yöneticilerinin gerçekten mülakata almak isteyeceği bir portföy oluşturmak için pratik bir oyun planı sunar.
    </p>
  </>
);

export const toc = [
  { id: "what-employers-want", label: "İşe alım yöneticileri neye bakar" },
  { id: "no-degree", label: "Diplomasız işe alınmak" },
  { id: "monetize", label: "GitHub'daki koddan para kazanmak" },
  { id: "freelance", label: "GitHub üzerinden freelance iş bulmak" },
  { id: "job-opportunities", label: "GitHub aracılığıyla iş fırsatları bulmak" },
];

export const body = (
  <>
    <h2 id="what-employers-want">İşe alım yöneticileri gerçekte neye bakar</h2>
    <p>
      Yapılandırılmış 90 saniyelik inceleme deneyimi için{" "}
      <a href="/tools/github-profile-scorecard">profil puan kartımızla</a> kendinizi puanlayın. En önemli 8 kriter:
    </p>
    <ol>
      <li>
        <strong>Sabitlenmiş depolar.</strong> 4-6 tane, hepsi üretim kalitesinde. Ziyaretçilerin ilk gördüğü şey.
      </li>
      <li>
        <strong>README'ler.</strong> Sabitlenmiş her depo için net bir README — ne, neden, nasıl çalıştırılır, görselse ekran görüntüleri.
      </li>
      <li>
        <strong>Proje kalite sinyalleri.</strong> Testler, CI, dokümantasyon, demo bağlantıları. Kurs projesi değil, üretime hazır görünür.
      </li>
      <li>
        <strong>Son commit etkinliği.</strong> Son 12 ay en önemlisidir. Tutarlılık &gt; patlama.
      </li>
      <li>
        <strong>Dil derinliği.</strong> 10 dilde yüzeysel bilgi yerine 1-2 dilde derinleşmek.
      </li>
      <li>
        <strong>Açık kaynak katkıları.</strong> Kendi projeleriniz dışındaki projelere yapılan PR'lar.
      </li>
      <li>
        <strong>Biyografi + isim + fotoğraf + iletişim bilgileri.</strong> Gerçek, profesyonel.
      </li>
      <li>
        <strong>Yıldızlar + takipçiler.</strong> Gösteriş ama yüksek sayılarda gerçek sinyal.
      </li>
    </ol>

    <h2 id="no-degree">Diplomasız GitHub üzerinden gerçekten işe alınabilir miyim?</h2>
    <p>
      Evet, giderek yaygınlaşıyor. 2026 işe alım piyasası, güçlü GitHub portföyü olan ancak geleneksel bir bilgisayar bilimi diploması bulunmayan adayları düzenli olarak mülakata alıyor. Portföy çıtası, işe alım yöneticilerinin 90 saniyede görebildikleridir.
    </p>
    <p>
      Sıralama:
    </p>
    <ol>
      <li>
        <strong>4-6 üretim kalitesinde sabitlenmiş depo oluşturun.</strong> Gerçek projeler, eğitimler değil. Test kapsamı, README, varsa demo dağıtımı.
      </li>
      <li>
        <strong>2-3 önemli açık kaynak katkısı yapın.</strong> Gerçekten kullandığınız projelere PR'lar. Başkasının kodunda gezinebildiğinizi gösterir.
      </li>
      <li>
        <strong>6 teknik yazı yazın</strong> (kendi blogunuz, dev.to, Medium). Yapım deneyiminizden konular. İletişim kurabilme yeteneğini gösterir.
      </li>
      <li>
        <strong>GitHub bağlantısını belirgin şekilde kullanarak başvurun.</strong> Özgeçmişin en altında gizli değil.
      </li>
      <li>
        <strong>Açık kaynak topluluklarında ağ kurun.</strong> Kullandığınız kütüphanelerin etrafındaki Discord, Slack, topluluklar. Geleneksel olmayan işe alımların çoğu soğuk başvurulardan değil, buradan gelir.
      </li>
    </ol>
    <p>
      Dikkat edilmesi gereken önyargı: bazı büyük teknoloji FAANG seviyesi şirketler hala diplomaya çok takılır. 2026'da çoğu şirket takılmaz. Portföy güçlü olduğu sürece diplomasız birçok seçeneğiniz olacak.
    </p>

    <h2 id="monetize">GitHub'a koyduğum koddan nasıl para kazanırım?</h2>
    <p>
      2026'da bağımsız geliştiriciler için işe yarayan beş yol:
    </p>
    <ol>
      <li>
        <strong>GitHub Sponsors.</strong> Popüler bir açık kaynak projesi sürdürüyorsanız, kullanıcılar + şirketler aylık sponsor olur. Çoğu bakıcı ayda $0-2K alır; birkaç popüler proje $10K+ temizler. Profilinizde etkinleştirin.
      </li>
      <li>
        <strong>Açık çekirdek SaaS.</strong> Motoru açık kaynak yapın, barındırılan/kurumsal katman için ücret alın. Posthog, Sentry, dbt, GitLab'in tümü GitHub'da açık kaynak projeler olarak başladı.
      </li>
      <li>
        <strong>Bireyler için profesyonel özellikler.</strong> Eklenti pazarları (VS Code uzantıları, Figma eklentileri, Stripe Uygulamaları), şablon kütüphaneleri, ücretli Notion şablonları.
      </li>
      <li>
        <strong>Bilgiyi ürünleştirin.</strong> Blog → bülten → kurs → kitap. GitHub'ınız gerçekten bir şeyler inşa ettiğinizi kanıtlar; ürünler kitlenizi paraya çevirir.
      </li>
      <li>
        <strong>Danışmanlık.</strong> Açık kaynak görünürlüğü danışmanlık fırsatlarına yol açar. Yaygın yol: popüler bir kütüphaneyi sürdürün, o alanda sözleşmeli iş için işe alının.
      </li>
    </ol>

    <h2 id="freelance">GitHub profilimi kullanarak nasıl freelance iş bulurum?</h2>
    <p>
      Profilinizi işe alımcılar tarafından bulunabilir yapın:
    </p>
    <ul>
      <li>Gerçek ad + fotoğraf.</li>
      <li>Biyografide konum + saat dilimi.</li>
      <li>&ldquo;Freelance için müsait&rdquo; veya &ldquo;Çalışmaya açık&rdquo; notu.</li>
      <li>Portföy sitenize (veya portföy deponuzun GitHub Pages sitesine) bağlantı.</li>
      <li>Müşteriyle ilgili işleri sabitleyin — React sözleşmeleri yapıyorsanız, React projelerini sabitleyin.</li>
    </ul>
    <p>
      Dağıtım yolları:
    </p>
    <ul>
      <li>
        <strong>Freelance platformları (Upwork, Toptal, Contra, Codementor):</strong>{" "}
        profilinizde GitHub'ı listeleyin. İşe alımcılar eleme sırasında kontrol eder.
      </li>
      <li>
        <strong>Açık kaynakla ilgili yönlendirmeler.</strong> Popüler kütüphanelerin bakıcıları genellikle sözleşmeli işler için işe alınır. Popüler bir projeye sürekli katkılar görünürlüğü birleştirir.
      </li>
      <li>
        <strong>Doğrudan soğuk erişim.</strong> Stack'ini iyi bildiğiniz şirketlere e-posta gönderin; ilgili GitHub çalışmasından bahsedin. Küçük şirketlerde ~%5-10 yanıt oranı.
      </li>
      <li>
        <strong>Niş Discord / Slack toplulukları.</strong> Bazılarında #hiring veya #freelance kanalları vardır.
      </li>
    </ul>

    <h2 id="job-opportunities">GitHub üzerinden doğrudan nasıl iş fırsatları bulurum?</h2>
    <p>
      GitHub'ın kendisi büyük bir iş panosuna ev sahipliği yapmaz. Fırsatlar dolaylı olarak akar:
    </p>
    <ul>
      <li>
        <strong>İşe alımcılar GitHub'da arama yapar.</strong> Profiliniz aranabilir ise (gerçek ad, konum, herkese açık biyografi), InMail / DM alırsınız. Kalite değişir; bazı şirketler bunu iyi yapar, bazıları spam yapar.
      </li>
      <li>
        <strong>Açık kaynak bakıcı yolları.</strong> Şirketler, bağımlı oldukları projelerin bakıcılarını işe alır (Stripe, Cloudflare, Anthropic, GitHub'ın kendisi bunu yapar).
      </li>
      <li>
        <strong>Yetenek kaynağı platformları.</strong> Hired, Wellfound, Triplebyte, eşleştirme sürecinde GitHub'ınıza bağlantı verir.
      </li>
      <li>
        <strong>PR konuşmaları yoluyla ağ kurma.</strong> Uzun süreli açık kaynak ilişkileri bazen 1-2 yıl sonra işe alım konuşmalarına dönüşür.
      </li>
    </ul>
    <p>
      Genel prensip: bulunabilir olun, herkese açık inşa edin, haftalarca değil aylarca sürdürün. Birikim yavaş ve güvenilir bir şekilde karşılığını verir.
    </p>
  </>
);

export const cta = {
  label: "Puan kartıyla profilinizi puanlayın",
  targetSlug: "github-profile-scorecard",
};

export const faq = [
  {
    q: "İşverenleri etkileyecek bir GitHub portföyünü nasıl oluştururum?",
    a: "En önemli altı şey: 4-6 üretim kalitesinde sabitlenmiş depo (kurs projeleri değil), her biri net README + görselse canlı demo ile, 1-2 dilde derinlik (10 dilde yüzeysel değil), 1-2 önemli açık kaynak PR'ı, gerçek biyografi + fotoğraf + iletişim, son 12 ayda tutarlı commit temposu. 90 saniyelik işe alım yöneticisi görünümü için puan kartımızı kullanın.",
  },
  {
    q: "Diplomasız GitHub üzerinden gerçekten işe alınabilir miyim?",
    a: "Evet — 2026'da giderek yaygınlaşıyor. 4-6 üretim kalitesinde sabitlenmiş depo oluşturun, 2-3 önemli açık kaynak katkısı yapın, teknik yazılar yazın, GitHub bağlantısını belirgin şekilde kullanarak başvurun, açık kaynak topluluklarında ağ kurun. Bazı büyük teknoloji FAANG seviyesi hala diplomaya çok takılır; diğer çoğu şirket takılmaz.",
  },
  {
    q: "GitHub'a koyduğum koddan nasıl para kazanırım?",
    a: "Beş yol: GitHub Sponsors (çoğu $0-2K/ay, popüler olanlar $10K+), açık çekirdek SaaS (Posthog/Sentry/dbt modeli), bireyler için profesyonel özellikler (eklenti pazarları, ücretli şablonlar), bilgiyi ürünleştirme (blog → bülten → kurs → kitap), danışmanlık (açık kaynak görünürlüğü → sözleşmeli iş).",
  },
  {
    q: "GitHub profilimi kullanarak nasıl freelance iş bulurum?",
    a: "Profili işe alımcılar tarafından bulunabilir yapın: gerçek ad + fotoğraf + konum + 'freelance için müsait' notu + portföy sitesi + sabitlenmiş müşteriyle ilgili iş. Dağıtım yolları: freelance platformları (Upwork, Toptal, Contra), açık kaynakla ilgili yönlendirmeler, ilgili stack şirketlerine soğuk erişim, niş Discord/Slack #hiring kanalları.",
  },
  {
    q: "GitHub üzerinden doğrudan nasıl iş fırsatları bulurum?",
    a: "GitHub büyük bir iş panosuna ev sahipliği yapmaz; fırsatlar dolaylı olarak akar. İşe alımcılar yetenek için GitHub'da arama yapar (bulunabilir olun). Şirketler, bağımlı oldukları projelerin bakıcılarını işe alır. Yetenek platformları (Hired, Wellfound, Triplebyte) GitHub'ınıza bağlantı verir. PR konuşmaları yoluyla ağ kurma bazen 1-2 yıl sonra işe alıma dönüşür.",
  },
];