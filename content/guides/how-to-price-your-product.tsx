import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Fiyatlandırma, çoğu girişimcinin göz ardı ettiği en yüksek kaldıraçlı koldur. %10'luk bir fiyat artışı genellikle net kârı %20-50 oranında etkilerken, %10'luk bir hacim artışı bunu yalnızca %5 oranında etkileyebilir. Yine de ilk kez girişim kuranların çoğu, rakiplere bakıp %20 indirim yaparak fiyat belirler ki bu, iyi bir ürünü eksik fiyatlamanın en hızlı yoludur. Bu rehber, dört fiyatlandırma yöntemini, her birinin ne zaman uygun olduğunu ve aslında para kaybettiren yaygın tuzakları ele alıyor.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Dört fiyatlandırma yöntemi</h2>
    <p>
      <strong>Maliyet artı (kâr marjı)</strong> — birim maliyeti hesapla, üzerine bir marj ekle. Basit, matematiksel olarak güvenli, ancak müşterilerin ne ödeyeceğini görmezden gelir. Örnek: birim maliyet 15$, %60 kâr marjı → 24$ fiyat. Maliyetlerin iyi anlaşıldığı ve sattığınız şeyin tam değerini yakalamaya çalışmadığınız durumlarda işe yarar.
    </p>
    <p>
      <strong>Rekabet bazlı</strong> — pazardaki benzer ürünlere göre fiyatlandırma. Müşterilerin özellikleri karşılaştırdığı emtia ürünleri için işe yarar. Farklılaştırılmış ürünler için tehlikelidir çünkü kendi değeriniz yerine başkasının maliyet yapısına odaklanırsınız.
    </p>
    <p>
      <strong>Değer bazlı</strong> — müşteri için yaratılan parasal değere göre fiyatlandırma. Müşterinin <a href="/learn/roi">ROI</a>'sini anlamayı gerektirir. Örnek: Saatte 60$ kazanan bir çalışanın haftada 20 saatini kurtaran bir SaaS, yılda 62.000$ değer yaratır. Bunun için yılda 12.000$ talep etmek, yaratılan değerin ~%20'sidir — makul bir yakalama oranı.
    </p>
    <p>
      <strong>Dinamik / katmanlı</strong> — farklı segmentler veya kullanım seviyeleri için farklı fiyatlar. SaaS standardı: 10:1 fiyat oranına sahip üç katman (Başlangıç, Ekip, Kurumsal). Fiyata duyarlı ve duyarsız alıcıların kendilerini seçmelerine olanak tanır.
    </p>

    <h2>Adım 1 — Birim ekonominizi bilin</h2>
    <p>
      Bir yöntem seçmeden önce, taban fiyatınızı bilin:
    </p>
    <p>
      <strong>COGS</strong> (satılan malın maliyeti) — bir birimi teslim etmenin doğrudan maliyeti. Fiziksel ürünler için: malzemeler + üretim + nakliye + yerine getirme. SaaS için: müşteri başına barındırma + destek + ödeme işleme.
    </p>
    <p>
      <strong>Değişken CAC</strong> — bir müşteri edinme maliyeti (reklamlar, ortaklık ücretleri, satış komisyonları).
    </p>
    <p>
      <strong>Katkı marjı</strong> = Fiyat − COGS − Değişken CAC. Pozitif olmalıdır. İdeal olarak, makul bir hacimde sabit maliyetleri karşılar.
    </p>
    <p>
      <strong>Hedef marj</strong> — iş türüne göre:
    </p>
    <p>
      E-ticaret / DTC: %40–60 brüt marj.
    </p>
    <p>
      SaaS: %70–85 brüt marj.
    </p>
    <p>
      Hizmetler: kaldıraca bağlı olarak %50–70 brüt marj.
    </p>
    <p>
      Bunların altında, neredeyse kesinlikle eksik fiyatlandırma yapıyorsunuz.
    </p>

    <h2>Adım 2 — Ödeme istekliliği verileriyle çapraz doğrulama</h2>
    <p>
      Değer bazlı fiyatlandırmada bile müşteri kanıtına ihtiyacınız var. Üç ucuz yöntem:
    </p>
    <p>
      <strong>Van Westendorp Fiyat Duyarlılığı Ölçer.</strong> 4 soru: &ldquo;Hangi fiyatta kaliteden şüphe edecek kadar ucuz? ucuz ama yine de kabul edilebilir? pahalı ama buna değer? düşünülemeyecek kadar pahalı?&rdquo; Eğrilerin kesişimi, çoğu müşterinin kabul ettiği bir fiyat aralığını ortaya çıkarır.
    </p>
    <p>
      <strong>Konjoint analizi</strong> (özellik-fiyat ödünleşimleri için). Müşterilere fiyat/özellik paketleri çiftleri gösterin; hangisini seçtiklerini görün. Her özelliğin &ldquo;değerini&rdquo; ortaya çıkarır. Daha fazla iş ama en temiz veri.
    </p>
    <p>
      <strong>Açılış sayfalarında A/B fiyat testi.</strong> Ziyaretçilerin yarısına 29$/ay, diğer yarısına 49$/ay gösterin. 49$'daki dönüşüm, 29$'daki dönüşümün %59'undan (29/49) azsa, 49$'da daha az para kazanıyorsunuz ve fiyatı düşürmelisiniz. Aksi takdirde, yükseltin.
    </p>

    <h2>%10 artış deneyi</h2>
    <p>
      Fiyatlarınız bir süredir sabitse ve elinizde somut veri yoksa, bu size ucuza çok şey söyler: yeni müşteriler için fiyatları %10 artırın, 4-6 hafta boyunca dönüşümü izleyin. Üç sonuç:
    </p>
    <p>
      <strong>Dönüşüm değişmedi</strong> → eksik fiyatlandırma yapıyordunuz. Yeni fiyatı koruyun. 3 ay içinde başka bir %10 testi planlayın.
    </p>
    <p>
      <strong>Dönüşüm %10'dan az düştü</strong> → yine de buna değer. Daha az dönüşüme rağmen ziyaretçi başına daha yüksek gelir. Yeni fiyatı koruyun.
    </p>
    <p>
      <strong>Dönüşüm %10'dan fazla düştü</strong> → tavanınıza ulaştınız veya aştınız. Geri alın, değer mesajınızı optimize edin veya 6 ay sonra daha iyi bir konumlandırma ile yeniden deneyin.
    </p>

    <h2>Katmanlı fiyatlandırma oyun kitabı (SaaS)</h2>
    <p>
      Üç katman, 10:1 fiyat oranı. Standart yapı:
    </p>
    <p>
      <strong>Başlangıç / Bireysel:</strong> 15–30$/ay. Bireyler veya küçük ekipler. Özellik sınırlı. Hedef: düşük engelli giriş, ağızdan ağıza pazarlama.
    </p>
    <p>
      <strong>Ekip / Profesyonel:</strong> 50–200$/ay. KOBİ'ler. Temel özellikler + işbirliği. Ana gelir katmanı.
    </p>
    <p>
      <strong>Kurumsal / İşletme:</strong> 500–5000+$/ay. Özel fiyatlandırma. SSO, denetim günlükleri, SLA, özel destek. Genellikle satışla kapatılır, koltuk başına fiyatlandırılır.
    </p>
    <p>
      Yaygın hata: çok fazla katman. 4'ten fazlası karar felcine neden olur ve dönüşümü azaltır. Net özellik farklılaştırıcıları (ör. koltuklar, API çağrıları, depolama) ile 3 katman bile en iyi şekilde çalışır.
    </p>

    <h2>Çıpalama ve yem fiyatlandırması</h2>
    <p>
      En yüksek katmanı önce gösterin. 5.000$/ay'lık bir Kurumsal katman, 200$/ay'lık bir Profesyonel katmanı makul gösterir. Çıpa olmadan, 200$ pahalı görünür.
    </p>
    <p>
      Yem etkisi: 89$'lık bir orta katman, 99$'lık üst katmandan &ldquo;sadece biraz daha kötü&rdquo; olduğunda, müşterileri 99$'a iter çünkü daha iyi bir anlaşma gibi gelir. Apple, iPhone depolama katmanlarında bunu yoğun olarak kullanır.
    </p>

    <h2>İndirimler ve promosyonlar — marj katilleri</h2>
    <p>
      <strong>%20 indirim</strong>, %50 marjlı bir üründe aynı toplam kârı korumak için <strong>%67 daha fazla hacim</strong> gerektirir. Sabit maliyetler fiyatla düşmediğinden, indirimlerin matematiği genellikle girişimcilerin beklediğinden daha kötüdür.
    </p>
    <p>
      İndirime daha temiz alternatifler:
    </p>
    <p>
      <strong>Değer katan paketler</strong> — fiyatı düşürmek yerine teklife bir şey ekleyin. Fiyat noktasını korur.
    </p>
    <p>
      <strong>Yıllık peşin ödeme</strong> — yıllık peşin ödemede 2 ay ücretsiz verin (~%17 indirim). Geliri kilitler, kaybı azaltır, fiyat çıpası bozulmaz.
    </p>
    <p>
      <strong>Segment bazlı fiyatlandırma</strong> — ana segmentinizi yamyamlaştırmayan öğrenci / kar amacı gütmeyen / küçük işletme indirimleri.
    </p>

    <h2>Fiyat artışları — mevcut müşterilere</h2>
    <p>
      Bir noktada mevcut müşterilere fiyatları artıracaksınız. Kaybı en aza indirmek için oyun kitabı:
    </p>
    <p>
      <strong>(1) Büyükanne hakkı</strong> mevcut müşterilere eski fiyatı bir süre (6–12 ay) koruyun. Bu süre boyunca oranlarını korurlar; yeni müşteriler yeni oranı hemen görür.
    </p>
    <p>
      <strong>(2) Erken duyurun</strong> — artıştan 30–60 gün önce, bir kurucu veya yöneticiden doğrudan e-posta ile. Nedenini açıklayın.
    </p>
    <p>
      <strong>(3) Değer iyileştirmelerine bağlayın.</strong> Son fiyattan bu yana eklenen yeni özellikler, SLA, entegrasyonlar. Artışı müşterilerin gerçekten istediği bir şeyle eşleştirin.
    </p>
    <p>
      İyi yürütülen bir %10–20 artıştan tipik kayıp: hesapların %2–5'i. Gelir etkisi neredeyse her zaman net pozitiftir.
    </p>

    <h2>&ldquo;Her zaman aşağı inebilirsin&rdquo; kuralı</h2>
    <p>
      Bir fiyatı her zaman düşürebilirsiniz. Yükseltmek çok daha zordur. Rahat olduğunuzdan %10–20 daha yüksek başlayın. Dönüşüm olmazsa, düşürün. Olursa, daha fazla değer yakalamış ve daha yüksek kalite sinyali vermiş olursunuz.
    </p>
    <p>
      Girişimci eksik fiyatlandırması o kadar yaygındır ki deneyimli yatırımcılar genellikle portföy şirketlerine ilk tavsiye olarak fiyatları artırmalarını söyler. Getiri genellikle oradadır; kayıp (biraz müşteri kaybı) neredeyse her zaman beklenenden daha küçüktür.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Maliyetlerinizi, hedef marjınızı ve ücretlerinizi{" "}
      <a href="/tools/pricing-calculator">fiyatlandırma hesaplayıcısına</a> girerek marj açısından doğru bir fiyat elde edin. Hacim varsayımlarını doğrulamak için{" "}
      <a href="/tools/break-even-calculator">başabaş hesaplayıcısı</a>
      {" "}ve ürün hattınız genelinde marj görünümü için{" "}
      <a href="/tools/profit-margin-calculator">kâr marjı hesaplayıcısı</a> ile birlikte kullanın.
    </p>
  </>
);