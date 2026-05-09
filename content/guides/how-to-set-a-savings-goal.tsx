import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Belirsiz bir tasarruf hedefi (&ldquo;Daha fazla biriktirmek istiyorum&rdquo;)
      çoğu insanın 3 ay içinde terk ettiği bir şeydir; spesifik bir hedef
      (&ldquo;31 Aralık'a kadar Japonya gezisi için 7.200$, her maaştan
      600$/ay&rdquo;) ise 5–10 kat daha yüksek tamamlanma oranına sahiptir.
      Fark irade gücü değil — matematik, hedef ve otomasyondur. Bu
      rehber, gerçekten ulaşacağınız bir tasarruf hedefi nasıl belirlenir,
      hedef + tarihten aylık katkı nasıl geri hesaplanır ve uyumu
      kolaylaştıran hesap yapısı konularında adım adım yol gösterir.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Adım 1 — hedefi adlandırın, üzerine bir sayı ve tarih koyun</h2>
    <p>
      &ldquo;Daha fazla biriktir&rdquo;in bitiş çizgisi yoktur. &ldquo;Mayıs
      2027'ye kadar 15.000$ peşinat biriktir&rdquo;in vardır. Spesifiklik
      hesap verebilirlik yaratır.
    </p>
    <p>
      Yaklaşık rakamlarla yaygın hedef örnekleri:
    </p>
    <p>
      <strong>Acil durum fonu:</strong> 3–6 aylık temel giderler.
      Çoğu hane: 10k$–25k$.
    </p>
    <p>
      <strong>Ev peşinatı (%20):</strong> %20 × ev fiyatı. 400k$'lık bir
      ev için 80k$.
    </p>
    <p>
      <strong>Düğün:</strong> ABD medyanı ~30k$'dır. Sizinki farklı olabilir.
    </p>
    <p>
      <strong>Araba değişimi:</strong> İkinci el güvenilir için 15k$, sıfır
      için 25–35k$.
    </p>
    <p>
      <strong>Tatil:</strong> Hedef ve süreye bağlı olarak 2–10k$.
    </p>
    <p>
      <strong>Başlangıç yatırım fonu:</strong> Makul çeşitlendirme ile
      vergilendirilebilir bir aracı kurum hesabı başlatmak için 10k$.
    </p>

    <h2>Adım 2 — aylık katkıyı geri hesaplayın</h2>
    <p>
      Formül:{" "}
      <code>Aylık = (Hedef − Mevcut) / Kalan ay sayısı</code>.
      Kısa vadeler (&lt; 2 yıl) için faizi yok sayın; uzun vadelerde
      dahil edin.
    </p>
    <p>
      Örnek: Mayıs 2027'ye kadar (24 ay kaldı) 15.000$ peşinat,
      şimdiden 2.000$ birikmiş. <code>($15.000 − $2.000) / 24 = 542$/ay</code>.
      Bu sizin tasarruf hedefiniz — net maaştan, otomatik olarak,
      çek hesabınızda görmeden önce çıkması gerekiyor.
    </p>
    <p>
      5+ yıllık vadeler için yüksek getirili bir tasarruf hesabında (%4–5
      2024–25'te), faizi dahil edin: Gelecek değer formülü veya tasarruf
      hedefi hesaplayıcımız ayarlama yapacaktır. %5 getiri için, 24 ayda
      15.000$ hedefi, gereken aylık mevduatı yaklaşık 513$/a düşürür.
    </p>

    <h2>Adım 3 — doğru hesabı seçin</h2>
    <p>
      <strong>Yüksek getirili tasarruf (HYSA).</strong> 2024–25'te %4–5 <a href="/learn/apy">APY</a>
      (Ally, Marcus, Wealthfront Cash, SoFi). Likit, FDIC sigortalı. 1–3
      yıl içinde ihtiyaç duyabileceğiniz her şey için en iyisi.
    </p>
    <p>
      <strong>CD'ler veya Hazine bonoları.</strong> Biraz daha yüksek
      oranlar, ancak 3–12 ay kilitli. Vadesinden önce ihtiyacınız
      olmayacağından emin olduğunuz para için kullanın.
    </p>
    <p>
      <strong>Aracı kurum (uzun vadeli hedefler için).</strong> 5+ yıl
      sonrası için, daha iyi beklenen getiri için geniş bir endeks
      fonuna (VTI/VOO/SWTSX) yatırım yapın. Daha yakın hedefler için
      uygun değil çünkü piyasa herhangi bir yılda %30–40 düşebilir.
    </p>
    <p>
      <strong>Çek hesabı.</strong> Tasarrufları asla burada tutmayın —
      düşük getiri ve harcamaya yüksek zihinsel erişim.
    </p>

    <h2>Adım 4 — transferi otomatikleştirin</h2>
    <p>
      Maaş gününden sonraki gün, hedef tutarınızı çek hesabından bu
      hedef için tasarruf hesabına taşıyan otomatik bir transfer ayarlayın.
      Birden fazla hedef kullanıyorsanız, her birindeki ilerlemeyi
      görebilmek için ayrı tasarruf alt hesapları veya &ldquo;kovalar&rdquo;
      oluşturun (Ally, Capital One 360 ve çoğu neobank bunu destekler).
    </p>
    <p>
      Otomasyon, disiplini 50'ye 1 yener. Kişisel finansta en yüksek
      kaldıraçlı eylem, tasarrufu her ay sizin karar vermeniz olmadan
      gerçekleşen bir varsayılan haline getirmektir.
    </p>

    <h2>Adlandırılmış hedef taktiği</h2>
    <p>
      Davranışsal araştırma (Hershfield 2011, Soman &amp; Zhao 2011),
      bir tasarruf hesabını (&ldquo;Japonya 2027&rdquo; veya &ldquo;Ev
      Fonu&rdquo; olarak &ldquo;Tasarruf 2&rdquo; yerine) etiketlemenin,
      insanların ona dokunmama olasılığını önemli ölçüde artırdığını
      gösteriyor. Aynı hesap, aynı faiz, daha iyi uyum çünkü gelecekteki
      benlik daha somut hale geliyor.
    </p>

    <h2>Adım 5 — kontrol noktaları oluşturun</h2>
    <p>
      Üç aylık incelemeler: Hedefte misiniz? Hedef Mayıs 2027'ye kadar
      15k$ idiyse ve Mayıs 2026'da 6.000$'ınız varsa, biraz öndesiniz
      (hedefte ~6.500$ olmalı). 3.000$'ınız varsa, ayarlayın: katkıyı
      artırın, tarihi uzatın veya hedefi düşürün.
    </p>
    <p>
      Dişinizi sıkmayın. Hayat değiştiğinde yapılacak doğru şey, planı
      tamamen terk etmek değil, ayarlamaktır.
    </p>

    <h2>Öncelik sıralaması — birden fazla hedefiniz olduğunda</h2>
    <p>
      Çoğu finans tavsiyesi bunları şu şekilde sıralar:
    </p>
    <p>
      <strong>(1) İşvereninizin 401(k) eşleşmesini alın</strong> — tamamen
      bedava para, her şeyden önce gelir.
    </p>
    <p>
      <strong>(2) 1.000$'lık başlangıç acil durum fonu</strong> — süslü
      bir şey yapmadan önce hayatta kalma tamponu.
    </p>
    <p>
      <strong>(3) ~%8'in üzerindeki tüm borçları ödeyin</strong> — kredi
      kartları, maaş günü kredileri, bazı kişisel krediler. %22 faizli
      borç, ödemek için %22 garantili getiridir; hiçbir yatırım bunu
      geçemez.
    </p>
    <p>
      <strong>(4) Diğer tasarruf hedeflerinden önce tam 3–6 aylık acil
      durum fonu</strong>.
    </p>
    <p>
      <strong>(5) Vergi avantajlı emeklilik hesaplarını maksimize edin</strong>
      (HSA, 401(k) limite kadar, IRA limite kadar).
    </p>
    <p>
      <strong>(6) Spesifik hedefler</strong> (ev, araba, seyahat) vergilendirilebilir
      tasarruf veya aracı kurumda.
    </p>
    <p>
      Kısa vadeli borç ve yetersiz acil durum fonu, tatil için biriktirmeye
      başlamadan önce tasarruf kapasitenizin çoğunu tüketmelidir. Bu
      yoksunluk değil — matematiktir.
    </p>

    <h2>Yaşam tarzı enflasyonu — sessiz hedef katili</h2>
    <p>
      Tasarruf hedeflerinin durmasının en yaygın nedeni, insanların
      biriktirememesi değil — her zammın tasarruftan önce yaşam tarzına
      gitmesidir. Zam aldığınızda, çek hesabınıza ulaşmadan önce yeni
      miktarın bir yüzdesini otomatik olarak tasarrufa aktarın. 5 yıl
      boyunca her zammın %50'sini tasarrufa koymak anlamlı bir servet
      inşa eder; %0'ı ise daha güzel bir daire inşa eder.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Hedef tutarınızı, başlangıç tarihinizi ve mevcut tasarruflarınızı{" "}
      <a href="/tools/savings-goal-calculator">tasarruf hedefi hesaplayıcısına</a>{" "}
      girerek gereken aylık katkıyı bulun. Hedef 5+ yıl sonraysa ve parayı
      yatırıma yönlendirecekseniz{" "}
      <a href="/tools/compound-interest-calculator">bileşik faiz
      hesaplayıcısını</a>, bu bir tampon oluşturmakla ilgiliyse — her hanenin
      diğer her şeyden önce ulaşması gereken bir hedef —{" "}
      <a href="/tools/emergency-fund-calculator">acil durum fonu
      hesaplayıcısını</a> kullanın.
    </p>
  </>
);