import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      İki tarih arasındaki yaşı hesaplamak kulağa basit gelir — yılları çıkarırsın — ama uç durumlar önemlidir. Artık yıllar, dahil eden ve hariç tutan sayma, "23 yaşında"nın tamamlanmış yıllar mı yoksa içinde yaşadığın yıl mı olduğu, amaca ve yargı yetkisine göre değişen yasal yaşlar, haftalara karşı aylarla ölçülen gebelik. Bu rehber, matematiği, karşılaşacağın kuralları ve tuzakların gerçekten nerede can yaktığını adım adım anlatır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Yıl/Ay/Gün ayrıştırması</h2>
    <p>
      İki tarih arasındaki yaşı ifade etmenin standart yolu: yıllar, aylar, günler — en büyük birimden başlayarak, her seviyede ödünç alarak.
    </p>
    <p>
      Algoritma:
    </p>
    <p>
      1. Yıllar = bitişYılı − başlangıçYılı. Bitiş (ay, gün) başlangıçtan yıl içinde daha erken ise (son doğum günü henüz gerçekleşmediyse) 1 çıkar.
    </p>
    <p>
      2. Aylar = bitişAyı − başlangıçAyı (negatifse mod 12), gerekirse yıl ayarlanır.
    </p>
    <p>
      3. Günler = bitişGünü − başlangıçGünü. Negatifse, önceki ayın gün sayısından ödünç al (ve ayları 1 azalt).
    </p>
    <p>
      Örnek: başlangıç 1990-03-15, bitiş 2026-04-23 → Yıllar = 36, Aylar = 1, Günler = 8. (15 Mart 1990 → 15 Mart 2026 = 36 yıl; + 1 ay + 8 gün 23 Nisan 2026'ya ulaşır.)
    </p>

    <h2>Artık yıllar — 29 Şubat tuzağı</h2>
    <p>
      Artık yıl: 4'e bölünebilir, ancak 400'e bölünmedikçe yüzyıl yılları hariç. Yani 2000 artık yıldı, 1900 değildi, 2100 olmayacak.
    </p>
    <p>
      29 Şubat 2000'de doğan biri: tam olarak ne zaman 25 yaşına girer? Yasal olarak (çoğu yargı yetkisinde) 1 Mart 2025'te (artık olmayan yıllar). Artık yıllarda (2024, 2028) 29'unda kutlarlar. Bunu işlemeyen yazılımlar "1 Mart" döndürür veya 29 Şubat girişinde çöker.
    </p>
    <p>
      Artık yıllar boyunca gün sayma matematiği: eğer aralık 29 Şubat'ı içeriyorsa, bu gün normal sayılır — yılda ortalama ~365.25 gün.
    </p>

    <h2>Dahil eden ve hariç tutan gün sayma</h2>
    <p>
      "15 Mart'tan 20 Mart'a kaç gün" sorusunun iki geçerli cevabı vardır:
    </p>
    <p>
      <strong>Hariç tutan:</strong> 20 − 15 = 5 gün. Çoğu tarih matematiğinde kullanılır (iki zaman damgası arasındaki süre).
    </p>
    <p>
      <strong>Dahil eden:</strong> 20 − 15 + 1 = 6 gün. Bir kişinin mevcut veya aktif olduğu takvim günlerini sayarken kullanılır (otel konaklamaları, hastane yatışları, "gezi X gün sürdü").
    </p>
    <p>
      Konuşmada belirsiz; bağlam kuralı belirler. Yasal ve tıbbi genellikle dahil edeni tercih eder; finansal/süre matematiği hariç tutanı tercih eder.
    </p>

    <h2>Yıl cinsinden yaş — tamamlanmış vs yaşanmış yıl</h2>
    <p>
      Batı ülkelerinde: "23 yaşında" = doğumdan bu yana 23 tamamlanmış yıl. 24. doğum gününde 24 olursun.
    </p>
    <p>
      Geleneksel Kore / Doğu Asya yaş sayma (aşamalı olarak kaldırılıyor ancak tarihsel olarak kullanılıyor): doğumda 1'sin ve her Yeni Yıl'da bir yaş alırsın. 31 Aralık'ta doğan bir bebek ertesi gün "2 yaşında" olur. Güney Kore 2023'te resmen Batı sayma sistemine geçti, ancak kültürel kullanım devam ediyor.
    </p>
    <p>
      Çin geleneksel sayma ("nominal yaş", xūsuì): Kore'ye benzer — doğumda 1, her ay yeni yılında +1.
    </p>
    <p>
      Hesaplama açısından: aksi açıkça belirtilmedikçe yazılım ve yasal bağlamlarda her zaman tamamlanmış yılları kullan.
    </p>

    <h2>Gebelik — hafta ve ay kuralları</h2>
    <p>
      Gebelik, son adet döneminden (LMP) itibaren haftalarla sayılır, gebe kalmadan değil. "9 aylık" bir gebelik aslında 40 haftadır = ~10 kameri ay veya ~9 takvim ayı.
    </p>
    <p>
      Trimesterler:
    </p>
    <p>
      <strong>Birinci:</strong> 1–12. haftalar.
    </p>
    <p>
      <strong>İkinci:</strong> 13–27. haftalar.
    </p>
    <p>
      <strong>Üçüncü:</strong> 28–40. haftalar.
    </p>
    <p>
      Tahmini doğum tarihi = LMP + 280 gün (40 hafta). Naegele kuralı: LMP + 1 yıl − 3 ay + 7 gün.
    </p>
    <p>
      Doğumdan sonra, bebek yaşı ilk ~3 ay haftalarla, sonra ~2 yaşına kadar aylarla, sonra yıllarla ifade edilir. Gelişimsel kilometre taşları bu kuralları takip eder.
    </p>

    <h2>Yasal yaş — amaca ve yargı yetkisine göre değişir</h2>
    <p>
      Bir kişinin birden çok "yasal yaşı" vardır:
    </p>
    <p>
      <strong>İçki (ABD):</strong> 21 (federal asgari).
    </p>
    <p>
      <strong>İçki (BK / AB'nin çoğu):</strong> 18 (bazı ülkelerde bira/şarap için 16).
    </p>
    <p>
      <strong>Araba kullanma (ABD):</strong> 16 tipik (eyalete göre değişir, bazıları 14 veya 15 kısıtlamalarla).
    </p>
    <p>
      <strong>Araba kullanma (AB):</strong> 18 tipik, bazı ülkelerde denetimle 17.
    </p>
    <p>
      <strong>Oy kullanma:</strong> neredeyse her yerde 18; Avusturya, İskoçya (bazı seçimler), Brezilya'da (isteğe bağlı) 16.
    </p>
    <p>
      <strong>Sözleşme imzalama (reşit olma yaşı):</strong> çoğu Batı yargı yetkisinde 18, birkaçında 21.
    </p>
    <p>
      <strong>Cezai sorumluluk:</strong> büyük farklılık gösterir — 10 (BK), 12 (birçok AB ülkesi), 14 (Almanya, Japonya, Çin).
    </p>
    <p>
      <strong>Emeklilik yaşı:</strong> OECD'de standart 65–67, yükseliyor; ülkeye ve doğum yılına göre değişir.
    </p>

    <h2>Biyolojik ve kronolojik yaş</h2>
    <p>
      <strong>Kronolojik:</strong> doğumdan bu yana geçen süre. Bir doğum gününün ölçtüğü şey.
    </p>
    <p>
      <strong>Biyolojik yaş:</strong> tipik olarak biyobelirteçlerden (DNA metilasyonu "epigenetik saatler" Horvath, PhenoAge, GrimAge gibi) türetilen fizyolojik yaşlanma ölçüsü. Kronolojik yaştan 10+ yıl farklı olabilir.
    </p>
    <p>
      Biyolojik yaş, araştırmaların mortalite ve hastalık riskiyle ilişkilendirdiği değişkendir. Kronolojik yaş yalnızca ortalama olarak onunla ilişkilidir. Tıbbi kararlar için biyolojik yaş giderek daha önemli hale gelir — yasal kararlar için kronolojik yaş önemlidir.
    </p>

    <h2>Evcil hayvan yaşı dönüşümleri — "köpek yılları"nın ötesinde</h2>
    <p>
      Eski "köpek yılı = insan yılı × 7" kuralı yanlıştır. Daha iyi yaklaşım (AVMA ve araştırmaya dayalı):
    </p>
    <p>
      <strong>Köpekler:</strong> 1. yıl ≈ 15 insan yılı. 2. yıl ≈ +9 (toplam 24). Sonraki her köpek yılı ≈ +4–5. Büyük ırklar küçüklerden daha hızlı yaşlanır.
    </p>
    <p>
      Daha yeni epigenetik model: insan_yaşı = 16 × ln(köpek_yaşı) + 31. Bu modele göre 10 yaşındaki bir köpek ≈ 68 insan yılı.
    </p>
    <p>
      <strong>Kediler:</strong> 1. yıl ≈ 15 insan yılı, 2. yıl ≈ +9 (toplam 24), ardından yılda +4. 10 yaşındaki bir kedi ≈ 56 insan yılı.
    </p>

    <h2>İş günü aritmetiği</h2>
    <p>
      Soru iş günleriyle ilgiliyse (takvim günleri değil), hafta sonlarını ve tatilleri atla:
    </p>
    <p>
      <strong>Hafta sonları:</strong> tüm günlerin ~5/7'si hafta içidir. 30 takvim günü ≈ 21–22 iş günü.
    </p>
    <p>
      <strong>Tatiller:</strong> ABD'de ~10 federal tatil; BK'de 8 banka tatili; her ülke farklıdır. Ülke başına yıllık tatil sayısı ~6 (ABD) ile ~15 (Japonya) arasında değişir.
    </p>
    <p>
      İş bağlamlarında son tarihler verirken açık ol: "10 iş günü" ile "2 hafta" 4+ takvim günü fark edebilir.
    </p>

    <h2>Saat dilimleri — tarihlerin konuma göre farklılık gösterdiği durumlar</h2>
    <p>
      Tokyo'da "30 Kasım'da doğdu" = New York'ta "29 Kasım". Saat dilimleri arasında yaş hesaplarken bir kural seç: doğum yerindeki doğum tarihi (en yaygın) veya UTC (yazılım dışında nadiren gerekli). Birer birer hatalardan kaçınmak için tutarlı ol.
    </p>

    <h2>Yaygın hesaplama hataları</h2>
    <p>
      <strong>Hata 1:</strong> Bitiş tarihinin doğum günü henüz gerçekleşmediğinde bir yıl çıkarmayı unutmak. 15 Haziran 1990 doğumlu biri 23 Nisan 2026'da 35'tir — 36 değil, çünkü 15 Haziran 2026 henüz gelmedi.
    </p>
    <p>
      <strong>Hata 2:</strong> Yıl başına 365.25 veya 365 günü tekdüze kullanmak. Kaba yaş tahminleri için iyi, kesin gün sayımları için hassasiyeti kaybeder.
    </p>
    <p>
      <strong>Hata 3:</strong> Dahil eden saymada birer birer hata. "Pazartesiden Cumaya" — 4 gün (hariç tutan) veya 5 (dahil eden)?
    </p>
    <p>
      <strong>Hata 4:</strong> 32 bit tarih türleri kullanan yazılımın 2038'de sessizce sarması veya 1970'ten önce başarısız olması. Uygun tarih kütüphaneleri kullan.
    </p>

    <h2>Sayıları çalıştır</h2>
    <p>
      İki tarih arasındaki yaşı günlere kadar hesaplamak için <a href="/tools/age-calculator">yaş hesaplayıcıyı</a> kullan. Gelecek bir tarih için geri sayım için <a href="/tools/countdown-timer">geri sayım zamanlayıcısı</a> ve LMP tabanlı gebelik matematiğiyle çalışıyorsan <a href="/tools/pregnancy-calculator">gebelik hesaplayıcısı</a> ile eşleştir.
    </p>
  </>
);