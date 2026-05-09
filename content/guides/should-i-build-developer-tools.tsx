export const intro = (
  <>
    <p>
      Geliştirici araçları mı yoksa tüketici uygulamaları mı inşa etmelisiniz? Dürüst cevap, 2024–2026 yıllarında yapay zeka araçları patlamasıyla değişti: geliştirici araçları kategorisi 5 yıl öncesine göre daha büyük, daha karlı ve daha dayanıklı — ancak akılda kalıcı bir araç çıkarmak için gereken çıta da daha yüksek.
    </p>
    <p>
      Bu rehber, gerçekten önemli olan konularda iki yolu karşılaştırıyor: pazar büyüklüğü, gelir elde etme süresi, kitleye ulaşma, savunulabilirlik ve yaşam tarzı. Ayrıca en sık gündeme gelen araçlar-ve-uygulamalar alt sorusu: dahili araçlar vs ticari ürünler ve açık kaynak vs tescilli iş modeli.
    </p>
  </>
);

export const toc = [
  { id: "comparison", label: "Geliştirici araçları vs tüketici uygulamaları: kafa kafaya" },
  { id: "internal-vs-commercial", label: "Dahili araçlar vs ticari geliştirici ürünleri" },
  { id: "oss-vs-proprietary", label: "Açık kaynak vs tescilli" },
  { id: "decision", label: "Nasıl karar verilir" },
];

export const body = (
  <>
    <h2 id="comparison">Geliştirici araçları vs tüketici uygulamaları: kafa kafaya</h2>
    <p>
      Önceliklerinize göre değişen ödünleşimler:
    </p>
    <ul>
      <li>
        <strong>Pazar büyüklüğü:</strong> tüketici daha büyük (milyarlarca kullanıcı); geliştirici araçları daha küçük (on milyonlarca geliştirici) ancak her kullanıcı daha değerli. Müşteri başına 1000 koltuk × 20$/koltuk olan bir SaaS geliştirici aracı, ayda 5$ × 4000 kullanıcı olan bir tüketici ürününe denk gelir.
      </li>
      <li>
        <strong>Dağıtım:</strong> geliştirici araçlarının belirli kanalları vardır (HN, GitHub trendleri, niş Slack'ler, Twitter/X). Tek bir kurucu için erişilebilir. Tüketici, içerik/sosyal/ücretli edinme gerektirir; kurulum başına maliyet hesabı acımasızdır.
      </li>
      <li>
        <strong>İlk paraya kadar geçen süre:</strong> geliştirici araçları — net bir acı varsa haftalar ila aylar. Tüketici — aylar ila yıllar; çoğu asla para kazandırmaz.
      </li>
      <li>
        <strong>Savunulabilirlik:</strong> geliştirici araçları entegrasyon derinliği, topluluk ve güvenilirlik markasıyla savunur. Tüketici, ağ etkileri ve UX markasıyla savunur. Her ikisi de gerçektir ancak farklı yatırımlar gerektirir.
      </li>
      <li>
        <strong>Destek yükü:</strong> geliştirici araçları — daha az kullanıcı ancak daha teknik ve bir şeyler bozulduğunda daha talepkar. Tüketici — daha basit istekleri olan ancak duygusal yoğunluğu yüksek birçok kullanıcı.
      </li>
      <li>
        <strong>Kurucu uyumu:</strong> geliştirici araçları — her gün kod yazmalı ve çözdüğünüz acıyı hissetmelisiniz. Tüketici — içinde olmasanız bile kitleyi önemsemelisiniz.
      </li>
    </ul>

    <h2 id="internal-vs-commercial">Dahili araçlar vs ticari geliştirici ürünleri</h2>
    <p>
      Yalnızca dahili geliştirici araçları (kendi ekibiniz için inşa edilenler), en yüksek <a href="/learn/roi">ROI</a>'li yapı temelidir. Tek bir müşteriye (kendinize) teslimat yapar, anında geri bildirim alır ve dağıtım ile fiyatlandırma karmaşıklığından kaçınırsınız. Halka açık geliştirici aracı girişimlerinin yaklaşık %30'u, kaçan dahili araçlar olarak başladı — Sentry, Linear, dbt, Posthog, GitHub Actions'ın hepsi bu soydan gelir.
    </p>
    <p>
      Dahiliden ticariye geçiş üç şey gerektirir: (1) çözdüğünüz acı, kendi ekibinizin ötesinde de var olmalı — 5+ harici görüşme ile doğrulayın; (2) dağıtım yoluna sahip olmalısınız (kitle, içerik, GitHub varlığı); (3) geçiş sonrası işin %80'inin kodlama değil, satış/destek/konumlandırma olduğunu kabul edin. Bu üçü karşılanmıyorsa, dahili tutun ve girişim yükü olmadan kaldıraçtan yararlanın.
    </p>

    <h2 id="oss-vs-proprietary">Bir iş modeli olarak açık kaynak vs tescilli</h2>
    <p>
      2026 gerçeği:
    </p>
    <ul>
      <li>
        <strong>Açık çekirdek:</strong> baskın model. Motoru açık kaynak yapın, barındırılan/çok kiracılı/kurumsal özellikler için ücret alın. Örnekler: GitLab, Sentry, Posthog, Supabase. İşe yarar çünkü AKK topluluğu pazarlama ve güven oluşturur; ücretli katman, bütçesi olan kullanıcıların küçük bir kısmını yakalar.
      </li>
      <li>
        <strong>Saf tescilli:</strong> değerin platform entegrasyonlarında veya veri ağ etkisinde olduğu araçlar için hala işe yarar (Linear, yakın zamanda Airbyte). Çıta daha yüksektir — AKK dağıtımı olmadan, açık pazarlama yatırımı gerekir.
      </li>
      <li>
        <strong>Saf açık kaynak / sponsorlukla finanse edilen:</strong> sürdürmesi nadiren mümkündür. Tek başına bakım yapanlar sonunda tükenir. Vakıf destekli (Linux, Node) veya kurumsal sponsorlu (Google'dan Kubernetes, Meta'dan React) dayanıklı türlerdir.
      </li>
    </ul>
    <p>
      2026'da yeni bir geliştirici aracı girişimi için: varsayılan olarak açık çekirdeği tercih edin. İstisna, temel değerin gerçekten barındırılan bir hizmet olduğu (CI çalıştırıcıları, gözlemlenebilirlik arka uçları) ve AKK sürümünün dağıtımı yönlendirmediği durumlardır.
    </p>

    <h2 id="decision">Nasıl karar verilir</h2>
    <p>
      Hızlı çerçeve:
    </p>
    <ol>
      <li>
        <strong>Sorunu yaşıyor musunuz?</strong> Bir geliştiriciyseniz ve acı günlük iş akışınızdaysa, geliştirici araçları kazanır. Hayatını görmediğiniz biri için inşa ediyorsanız, kategori ne olursa olsun tüketici risklidir.
      </li>
      <li>
        <strong>Dağıtım süper gücünüz nedir?</strong> Güçlü bir geliştirici kitlesi veya teknik içerik yazma yeteneği → geliştirici araçları. Güçlü yaratıcı/pazarlama/topluluk içgüdüleri → tüketici.
      </li>
      <li>
        <strong>Ne kadar zamanınız var?</strong> Geliştirici araçları, ~50 müşteriyle 10.000$ AAG'de tek bir kurucuyu ayakta tutabilir. Tüketicide 10.000$ AAG için 2.000–10.000 ödeme yapan kullanıcı gerekir; tek başına ulaşması daha zordur.
      </li>
      <li>
        <strong>Önce doğrulayın.</strong> 6 ay yatırım yapmadan önce fikrinizi{" "}
        <a href="/tools/dev-tool-idea-scorer">geliştirici aracı fikri puanlayıcımızda</a> çalıştırın. Yapılandırılmış değerlendirme, hislerden daha iyidir.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "Geliştirici aracı fikrinizi puanlayın (ücretsiz)",
  targetSlug: "dev-tool-idea-scorer",
};

export const faq = [
  {
    q: "Geliştirici araçları mı yoksa tüketici uygulamaları mı inşa etmeliyim?",
    a: "Sorunu yaşıyorsanız ve herhangi bir geliştirici kitleniz veya teknik içerik açınız varsa geliştirici araçları. Yaratıcı/pazarlama içgüdüleriniz varsa ve geliştirici olmayan bir kitleyi önemsiyorsanız tüketici. Geliştirici araçlarının daha küçük pazarları ancak daha yüksek kullanıcı başına değeri ve daha hızlı gelir elde etme süresi vardır.",
  },
  {
    q: "Dahili araçlar mı yoksa ticari geliştirici ürünleri mi inşa etmeliyim?",
    a: "Önce dahili inşa edin. Halka açık geliştirici aracı girişimlerinin yaklaşık %30'u (Sentry, Linear, dbt, Posthog) kaçan dahili araçlar olarak başladı. Geçiş yapmadan önce 5+ harici görüşme ile doğrulayın. Yapamıyorsanız, dahili tutun ve girişim yükü olmadan kaldıraçtan yararlanın.",
  },
  {
    q: "Geliştirici araçları için açık kaynak mı yoksa tescilli mi?",
    a: "2026'da varsayılan olarak açık çekirdek (motoru açın, barındırılan/kurumsal için ücret alın). Saf tescilli, değer platform entegrasyonlarında veya veri ağ etkilerinde olduğunda işe yarar. Saf AKK, tek başına bakım yapanlar için nadiren sürdürülebilirdir — vakıf veya kurumsal destekli olanlar dayanıklı türlerdir.",
  },
  {
    q: "Geliştirici aracı fikrimin inşa etmeye değer olup olmadığını nasıl anlarım?",
    a: "Yapılandırılmış bir çerçeve kullanın — talep sinyali, dağıtım yolu, savunulabilirlik, para kazanma netliği, inşa maliyeti ve kurucu-pazar uyumu üzerinden puanlayın. 6 ay inşa süresi taahhüt etmeden önce 75+/100 hedefleyin. Geliştirici aracı fikri puanlayıcımız bunu resmileştirir.",
  },
];