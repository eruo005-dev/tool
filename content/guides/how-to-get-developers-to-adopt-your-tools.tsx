import React from 'react';

export const intro = (
  <>
    <p>
      Harika bir geliştirici aracı oluşturmak zordur. Geliştiricilerin bu aracı benimsemesini sağlamak daha da zordur — ve çoğu geliştirici aracı, yapım aşamasından ziyade bu aşamada başarısız olur. Benimseme, mühendislikten farklı bir beceridir ve lansman sonrası sessizce ölen geliştirici araçlarının üçte ikisi, çoğunlukla önlenebilir kalıpları paylaşır.
    </p>
    <p>
      Bu rehber, pratik benimseme oyun kitabıdır: iyi bir benimsemenin neye benzediği, işe yarayan stratejiler, işe yaramayan kalıplar ve geliştirici tükenmişliğini azaltan araçlar oluşturmanın belirli açısı — ki bu 2026'da gerçek bir kama haline geldi.
    </p>
  </>
);

export const toc = [
  { id: "what-good-looks-like", label: "İyi bir benimseme neye benzer" },
  { id: "strategies", label: "İşe yarayan benimseme stratejileri" },
  { id: "anti-patterns", label: "İşe yaramayan şeyler" },
  { id: "burnout", label: "Geliştirici tükenmişliğini azaltan araçlar" },
  { id: "what-makes-good", label: "İyi bir geliştirici aracını ne oluşturur, tekrar" },
];

export const body = (
  <>
    <h2 id="what-good-looks-like">İyi bir benimseme neye benzer</h2>
    <p>
      Yeni geliştirici araçları için en kullanışlı tek benimseme metriği: <strong>deneme kullanıcılarının 30 günlük tutma oranı</strong>. Spesifik olarak, aracınızı ilk haftalarında kuran kişilerin yüzde kaçı 30 gün sonra hala kullanıyor?
    </p>
    <ul>
      <li>&lt;%10: araç, insanların çözeceğini düşündüğü sorunu çözmüyor.</li>
      <li>%10–25: gerçek bir sinyal var ancak iş akışında sürtünme var.</li>
      <li>%25–50: sağlam benimseme; genellikle anlamlı bir kullanıcı alt kümesinin ürün-pazar uyumu bulduğu anlamına gelir.</li>
      <li>%50+: nadir; genellikle elde tutulan kullanıcı segmenti için güçlü PMF'yi gösterir.</li>
    </ul>
    <p>
      Diğer gecikmeli göstergeler (GitHub yıldızları, HN ön sayfası, Twitter bahsedilmeleri) iyi hissettirir ancak gelir veya sürekli kullanımı tahmin etmez. Yıldız sayıları tek bir HN hitiyle hızla şişer; sürekli kullanım şişmez.
    </p>

    <h2 id="strategies">İşe yarayan benimseme stratejileri</h2>
    <ol>
      <li>
        <strong>Zaten şikayet edilen bir sorunu çözün.</strong> Kullanıcıların kamuoyunda şikayet ettiği acı noktalarını hedefleyen araçlar, yeni bir iş akışı sunan araçlardan daha hızlı benimsenir. İnsanların şikayet etmek için kullandığı dili Reddit / HN / Twitter'da arayın — bu, açılış sayfanızın metni haline gelir.
      </li>
      <li>
        <strong>İlk 5 dakikayı büyülü hale getirin.</strong> En büyük kaldıraç noktası. Kurulum + ilk kullanışlı çıktı &gt; 5 dakika sürüyorsa, kullanıcı kaybediyorsunuz. Her adımı kısalt. Demoyu yapılandırma olmadan çalıştırın.
      </li>
      <li>
        <strong>Geliştiricilerin zaten bulunduğu yerde dağıtın.</strong> GitHub trendleri, HN Show HN, niş Slack'ler, Discord sunucuları, niş haber bültenleri (Pointer, TLDR Newsletter, dev.to en iyi seçimler). Genel teknoloji basını, geliştirici araçları için nadiren bir fark yaratır.
      </li>
      <li>
        <strong>Öğreten teknik içerik yazın.</strong> İlgili bir sorunu çözen ve aracınızdan geçerken bahseden yazılar, açık lansman yazılarından daha iyi dönüşüm sağlar. Sentry'nin blogu, Stripe'ın mühendislik blogu, Cloudflare'in blogu — hepsi bu kalıbı kullanır.
      </li>
      <li>
        <strong>Derinlemesine bir kişilik için oluşturun, sonra genişletin.</strong>
        &ldquo;Herkes için araç&rdquo; kimseyi dönüştürmez. &ldquo;Postgres kullanan YC aşamasındaki girişimlerdeki backend mühendisleri için araç&rdquo; bu kitleyi dönüştürür. Yalnızca bir kişiliği mükemmelleştirdikten sonra genişletin.
      </li>
      <li>
        <strong>Aracı, başkalarının üzerine inşa edebileceği bir temel haline getirin.</strong> Aracınızın, diğer geliştiricilerin sarabileceği veya genişletebileceği temiz bir API'si varsa, kullanıcı tabanı katlanır. Vercel, Sentry, Posthog'un tümü bu çarpandan yararlanır.
      </li>
      <li>
        <strong>Herkese açık yol haritası + duyarlı sorun izleyici.</strong> Geliştiriciler, bakımcıları gerçekten yanıt veren araçlara güvenir. Sorunları hızlı bir şekilde kapatmak (hatta &ldquo;düzeltilmeyecek&rdquo; açıklamalarıyla bile) onları görmezden gelmekten daha hızlı güven oluşturur.
      </li>
    </ol>

    <h2 id="anti-patterns">Benimseme için işe yaramayan şeyler</h2>
    <ul>
      <li>
        <strong>Twitter'da yalvarmak.</strong> &ldquo;Lütfen yeni aracımı RT yapın!&rdquo; kibar görmezden gelmeler alır. Aynı çabayı faydalı bir teknik yazı dizisi + sonunda araçtan bahsetmek için harcamak dönüşüm sağlar.
      </li>
      <li>
        <strong>Geliştirici kitlesine ücretli reklamlar.</strong> Geliştiriciler alışılmadık şekilde reklam körüdür. Hedefli Twitter / Reddit / haber bülteni sponsorlukları bazen işe yarar; banner reklamlar neredeyse hiçbir zaman.
      </li>
      <li>
        <strong>Mühendislik liderlerine soğuk e-posta göndermek.</strong> Çok düşük dönüşüm. Bunlardan yüzlerce alıyorlar. İstisna: yayınladıkları belirli bir şeye atıfta bulunan, sıkı bir şekilde alakalı bir araç içeren 200 kelimelik bir e-posta bazı yanıtlar alır.
      </li>
      <li>
        <strong>Influencer tarzı pazarlama.</strong> Geliştiriciler abartıya güvenmez. 5 şık tanıtım videosu ve sıfır teknik derinliği olan bir araç kötü sinyal verir.
      </li>
      <li>
        <strong>Net bir kama olmadan yerleşik bir rakibi &ldquo;bozmak&rdquo;.</strong> &ldquo;Daha iyi bir X oluşturuyoruz&rdquo; demek, kamayı belirtmeden reddedilir. Spesifiklik (&ldquo;Y için özel olarak X oluşturuyoruz, Z için optimize edilmiş&rdquo;) dikkat çeker.
      </li>
    </ul>

    <h2 id="burnout">Geliştirici tükenmişliğini azaltan araçlar</h2>
    <p>
      Geliştirici tükenmişliği 2026'da gerçek ve büyüyen bir sorundur. Tükenmişlik azaltmayı açıkça hedefleyen araçların yeni bir fırsatı var:
    </p>
    <ul>
      <li>
        <strong>Nöbet deneyimi araçları.</strong> Daha akıllı yönlendirme, daha az yanlış pozitif sayfa, daha iyi ölüm sonrası analizler. Pagerduty Insights, Incident.io gibi araçlar başlıyor; alanda yer var.
      </li>
      <li>
        <strong>Daha iyi yerel geliştirme ortamları.</strong> &ldquo;Benim makinemde çalışıyor&rdquo; hata ayıklaması saatler harcatır. Bu döngüyü sıkıştıran araçlar değerlidir. Devcontainers, Coder, Gitpod yönü işaret ediyor.
      </li>
      <li>
        <strong>Kod inceleme yorgunluğu araçları.</strong> PR farklarını özetleyen, güvenli değişiklikleri otomatik onaylayan, inceleme işini adil bir şekilde dağıtan araçlar. Graphite'ın unsurları var; daha fazlası için yer var.
      </li>
      <li>
        <strong>Mühendislik ekipleri için eşzamansız-ilk iletişim araçları.</strong> Senkron kesintileri azaltmak. Linear bariz örnek; alan daha geniş.
      </li>
      <li>
        <strong>Otomatik belgeleyen veya otomatik özetleyen araçlar.</strong> Hızlı hareket eden ekiplerde tükenmişliğe neden olan &ldquo;tatil sonrası yetişme&rdquo; vergisini azaltır.
      </li>
    </ul>

    <h2 id="what-makes-good">İyi bir geliştirici aracını ne oluşturur</h2>
    <p>
      Her şeyi bir araya getirirsek: iyi benimsenen araçlar ortak bir profile sahiptir. İyi tanımlanmış bir sorunu derinlemesine çözerler, &lt; 5 dakikada kurulurlar, geliştiricilerin zaten çalıştığı yere entegre olurlar, birleştirilebilirlik için makine tarafından okunabilir çıktı sunarlar ve kullanıcıların zamanına saygılı hissettirirler. CLI DX kontrol listesi (16 madde) bunu resmileştirir — <a href="/tools/cli-dx-checklist">kontrol listesi aracımıza</a> bakın.
    </p>
  </>
);

export const cta = {
  label: "Aracınızda CLI DX kontrol listesini çalıştırın",
  targetSlug: "cli-dx-checklist",
};

export const faq = [
  {
    q: "Geliştiricilerin araçlarımı benimsemesini nasıl sağlarım?",
    a: "Zaten şikayet edilen bir sorunu çözün (açılış sayfanızda onların dilini kullanın), ilk 5 dakikayı büyülü hale getirin, geliştiricilerin olduğu yerde dağıtın (GitHub, HN, niç Slack'ler, geliştirici haber bültenleri), öğreten teknik içerik yazın (araçtan geçerken bahsederek), genişletmeden önce bir kişilik için derinlemesine oluşturun, birleşik benimseme için temiz bir API sunun, duyarlı bir sorun izleyici çalıştırın.",
  },
  {
    q: "İyi bir geliştirici aracını ne oluşturur?",
    a: "İyi tanımlanmış bir sorunu derinlemesine çözer, 5 dakikadan kısa sürede kurulur, geliştiricilerin zaten çalıştığı yere entegre olur, birleştirilebilirlik için makine tarafından okunabilir çıktı sunar, kullanıcıların zamanına saygı duyar. Kötü araçlar geniş-ve-sığdır; iyi araçlar net genişletilebilirlikle dar-ve-derindir.",
  },
  {
    q: "Geliştirici tükenmişliğini azaltan araçları nasıl oluşturabilirim?",
    a: "2026'da gerçek talebi olan kategoriler: nöbet deneyimi iyileştirmesi (daha akıllı yönlendirme, daha az yanlış sayfa), yerel geliştirme ortamları ('benim makinemde çalışıyor' hata ayıklamasını sıkıştırma), kod inceleme yorgunluğu araçları (özetleme, güvenli farkları otomatik onaylama), eşzamansız-ilk ekip iletişimi, yetişme vergisini azaltan otomatik belgeleme araçları.",
  },
  {
    q: "Yeni geliştirici araçları için hangi benimseme metrikleri önemlidir?",
    a: "Deneme kullanıcılarının 30 günlük tutma oranı en öngörücü tek metriktir. <%10, aracın algılanan sorunu çözmediği anlamına gelir; %10-25 sinyal var ancak iş akışı sürtünmesi var; %25-50 bazı kullanıcı segmentleri için sağlam PMF; %50+ nadirdir ve güçlü PMF'yi gösterir. GitHub yıldızları ve HN ön sayfa ziyaretleri iyi hissettirir ancak sürekli kullanımı tahmin etmez.",
  },
];