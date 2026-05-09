import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Serbest çalışma ücretini rakiplerin ne kadar aldığına bakıp %20
      kırarak belirlemek, çoğu serbest çalışanın düşük ücret almasına ve
      aşırı iş yüküne girmesine yol açar. Doğru ücret, <strong>ihtiyacınız
      olan gelirden geriye doğru hesaplanır</strong> ve serbest çalışmanın
      getirdiği vergiler, yan haklar, genel giderler ve faturalandırılamayan
      süreler için düzeltilir. Bu rehber, beş girdiyi, formülü, piyasa
      karşılaştırmalarını ve ücretinizi ne zaman (ve nasıl) artıracağınızı
      adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>5 girdili formül</h2>
    <p>
      <strong>Serbest çalışma ücreti = (Hedef net gelir + Vergiler + Yan
      haklar + Genel giderler) / Yıllık faturalandırılabilir saat</strong>
    </p>
    <p>
      <strong>(1) Hedef net gelir</strong> — vergilerden sonra cebinizde
      kalmak istediğiniz miktar. &ldquo;Yılda net 80.000$ kazanmak
      istiyorum&rdquo; somut bir başlangıç noktasıdır.
    </p>
    <p>
      <strong>(2) Vergiler</strong> — ABD'de serbest meslek vergisi %15,3
      artı federal + eyalet gelir vergisidir. Çoğu kazanç sahibi için
      toplam %25–35 beklenir, yüksek vergili eyaletlerde daha fazla. Net
      hedefi ~1,4 ile çarparak brütü bulun.
    </p>
    <p>
      <strong>(3) Yan haklar</strong> — bir W-2 işvereninin sizin için
      ödeyeceği şeyler. Sağlık sigortası (aile için yılda 6–20 bin$),
      emeklilik katkısı (3–10 bin$), ücretli izin + hastalık izni + tatiller
      (3–5 haftalık değer). Toplam: tek başına çalışan bir serbest
      çalışan için genellikle yılda 15–25 bin$.
    </p>
    <p>
      <strong>(4) Genel giderler</strong> — yazılım, abonelikler, ekipman,
      ofis, muhasebeci, şirket kurulum ücretleri, pazarlama. Genellikle
      yılda 3–15 bin$.
    </p>
    <p>
      <strong>(5) Yıllık faturalandırılabilir saat</strong> — çoğu kişinin
      yanıldığı nokta burasıdır. Haftada 40 saat × 50 hafta = 2.000 saat
      mantıklı gelir, ancak <strong>çalışma saatlerinizin yalnızca
      %50–70'i faturalandırılabilir</strong>. İdari işler, satış, teklifler,
      fatura kesme, takip, müşteri arama, beceri geliştirme ve müşteriler
      arasındaki boşluklar gerisini yer. Gerçekçi bir faturalandırılabilir
      hedef <strong>yılda 1.000–1.400 saattir</strong>.
    </p>

    <h2>Örnek bir hesaplama</h2>
    <p>
      Hedef: 80 bin$ net gelir. Sağlık sigortası + emeklilik + ücretli izin
      karşılığı: 20 bin$. Genel giderler: 5 bin$. Vergiler: toplam %30.
    </p>
    <p>
      Gerekli brüt = (80.000$ + 20.000$ + 5.000$) / (1 − 0,30) =
      yılda 150.000$.
    </p>
    <p>
      2.000 saatlik bir yılın %65'i faturalandırılabilir = 1.300 saat.
    </p>
    <p>
      Ücret = 150.000$ / 1.300 = <strong>115$/saat</strong>.
    </p>
    <p>
      Bu, 80 bin$ net gelirli bir W-2 işini karşılamak için almanız
      gereken ücrettir — eski maaşın &ldquo;eşdeğeri&rdquo; değil, tüm
      serbest çalışma giderlerinden sonra aynı yaşam gelirini sağlayan
      miktar.
    </p>

    <h2>Neden muhtemelen çok az ücret alıyorsunuz</h2>
    <p>
      İlk kez serbest çalışanlarda yaygın üç tuzak:
    </p>
    <p>
      <strong>Tuzak 1: Eski W-2 saatlik ücretinizi kullanmak.</strong>
      Maaşlı çalışan olarak 40$/saat ≈ 83 bin$ brüt maaş. Serbest
      çalışan olarak 40$/saat almak, net gelirin belki 25–35 bin$ olması
      anlamına gelir — %50–70 kesinti, çünkü yan haklar ve genel giderler
      artık aynı havuzdan çıkar.
    </p>
    <p>
      <strong>Tuzak 2: Faturalandırılamayan süreyi göz ardı etmek.</strong>
      Fatura kesmek, defter tutmak veya bir müşteri adayına teklif vermek
      için ücret almazsınız. Ama bunların her birine saatler harcarsınız.
    </p>
    <p>
      <strong>Tuzak 3: Upwork/Fiverr'da dibe doğru yarışmak.</strong>
      Küresel iş gücüyle ve fiyata göre seçim yapan müşterilerle rekabet
      edersiniz. 20$/saatlik bir iş, 150$/saatlik bir işle aynı saatleri
      harcar ama 7,5 kat daha az kazandırır.
    </p>

    <h2>Değer bazlı fiyatlandırma vs saatlik fiyatlandırma</h2>
    <p>
      Saatlik ücretler, kazancınızı günün saatleriyle sınırlar. Değer
      bazlı (proje veya retainer) fiyatlandırma, müşteriye sağlanan etkiye
      göre ücret belirlemenizi sağlar ve saatlerden bağımsızdır.
    </p>
    <p>
      Bir SaaS müşterisi, 100 bin$'lık bir kurumsal anlaşma kazandıran bir
      haftalık iş için size 10 bin$ ödüyorsa, 10 kat getiri elde ediyordur.
      Bu, onlara genellikle 40 saat için 150$/saat (6 bin$) ödemekten daha
      cazip gelir — aynı iş, daha yüksek fiyat, çünkü çerçeve zaman karşılığı
      para yerine sonuç karşılığı paradır.
    </p>
    <p>
      Zamanınızın değerini ölçmek için saatlik başlayın, ardından işiniz
      yeterince tahmin edilebilir hale geldiğinde proje fiyatlandırmasına
      geçin. &ldquo;Proje saatlerini tahmin et, 1,3 ile çarp, saatlik
      ücretinden teklif ver, sabit fiyat olarak sun&rdquo; yaygın bir
      başlangıç yaklaşımıdır.
    </p>

    <h2>Piyasa karşılaştırmaları</h2>
    <p>
      Üçgenleme yapmak için faydalı referans noktaları:
    </p>
    <p>
      <strong>Maaş dönüşümü:</strong> Serbest çalışma saatlik ücreti ≈
      W-2 maaşı ÷ 1.000. Yani 80 bin$ W-2 hedefi, ~80$/saat serbest
      çalışma tabanını ve yan haklar sonrası 110–130$/saat gibi bir
      rakamı işaret eder. (Yukarıdaki geriye doğru hesaplama formülü daha
      hassastır.)
    </p>
    <p>
      <strong>Platformlar:</strong> Toptal, Gun.io, A.Team ücretleri,
      onaylanmış uzaktan teknik işler için üst sınırları verir. 2024–25
      için: kıdemli yazılım mühendisi 100–200$/saat, tasarımcı 80–150$/saat,
      metin yazarı 75–200$/saat.
    </p>
    <p>
      <strong>Danışmanlık firması fiyatları:</strong> Ajanslar ve firmalar,
      çalışanlarına ödediklerinin 2–4 katını faturalandırır. Bir ajans,
      sizin becerilerinize sahip biri için 300$/saat alıyorsa, bağımsız
      olarak 150$/saat almak agresif değildir — hâlâ piyasanın %50 altında
      olurken, ajans çalışanından daha fazla kazanırsınız.
    </p>

    <h2>Ücretinizi ne zaman ve nasıl artırmalısınız</h2>
    <p>
      Temel kural: Aşağıdakilerden herhangi biri gerçekleştiğinde %10–20
      artırın —
    </p>
    <p>
      <strong>İş akışınız aşırı dolu.</strong> 3 ay sonrasına randevu
      alıyorsanız, fiyat çok düşük.
    </p>
    <p>
      <strong>Kendinizi geliştirdiniz.</strong> Yeni sertifika, daha büyük
      vaka çalışması, yayınlanmış iş, belirgin beceri iyileşmesi.
    </p>
    <p>
      <strong>En az yılda bir kez.</strong> Enflasyon tek başına yılda
      %3–5'tir. Artırmamak maaş kesintisidir.
    </p>
    <p>
      En temiz yöntem: <strong>yeni müşterilere hemen yeni ücret</strong>,
      mevcut müşterilere sözleşme yenilemede 30 gün bildirimle. İyi
      müşterilerin çoğu kabul eder. Birkaçı gider — ve bu neredeyse her
      zaman zaten gitmesi gereken fiyata duyarlı müşterilerdir.
    </p>

    <h2>Depozito ve kapsam genişlemesi koruması</h2>
    <p>
      Sadece fiyatlandırma yeterli değildir — ödeme yapısı da önemlidir:
    </p>
    <p>
      <strong>Herhangi bir projeye başlamadan önce %30–50 depozito
      isteyin.</strong> Ödemeyenler kendiliğinden elenir.
    </p>
    <p>
      <strong>Revizyonları açıkça kapsamlandırın.</strong> &ldquo;İki tur
      revizyon dahildir; ek turlar X$/saat.&rdquo; Bu olmadan sürekli
      &ldquo;bir şey daha&rdquo; istenir ve efektif saatlik ücretiniz sıfıra
      yaklaşır.
    </p>
    <p>
      <strong>Uzun projelerde aşamalı faturalandırma</strong> yaparak yavaş
      ödeyen bir müşteriden aylarca alacak biriktirmekten kaçının.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Hedef gelirinizi, vergi oranınızı, yan hak karşılığınızı ve
      faturalandırılabilir yüzdenizi{" "}
      <a href="/tools/freelance-rate-calculator">serbest çalışma ücreti
      hesaplayıcısına</a> girerek kesin bir ücret elde edin. Eski W-2
      maaşınızı eşdeğer serbest çalışma saatlik ücretine çevirmek için{" "}
      <a href="/tools/hourly-rate-calculator">saatlik ücret hesaplayıcısını</a>
      {" "}ve ilk müşterinize fatura kesmeye hazır olduğunuzda{" "}
      <a href="/tools/invoice-generator">fatura oluşturucuyu</a> kullanın.
    </p>
  </>
);