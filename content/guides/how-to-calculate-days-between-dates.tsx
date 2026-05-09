import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      İki tarih arasındaki günleri saymak, artık yıllar, dahil eden ve hariç tutan uç noktalar, iş günleri ve takvim günleri, saat dilimleri ve bankaların faiz tahakkukları için hâlâ kullandığı 30/360 kuralı gibi uç durumlar ortaya çıkana kadar basit görünen bir problemdir. Tarih farkı hesaplayıcı yaygın durumları ele alır, ancak sayının arka planda ne yaptığını anlamak, sözleşmeler, maaş bordrosu, proje planlaması veya seyahat için doğru türü seçmenizi sağlar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Üç tür gün sayma</h2>
    <p>
      <strong>(1) Takvim günleri.</strong> Hafta sonları ve tatiller dahil her gün sayılır. &ldquo;İade için 30 gün&rdquo; takvim günleridir. Jülyen gün numaralarının basit çıkarımı.
    </p>
    <p>
      <strong>(2) İş günleri.</strong> Hafta sonları ve bölgesel tatiller hariç tutulur. &ldquo;Para 3 iş gününde temizlenir&rdquo; bankacılık iş günleri anlamına gelir — Pazartesi–Cuma, federal tatiller hariç.
    </p>
    <p>
      <strong>(3) İşlem günleri.</strong> Özellikle borsalar için: yılda ~252 gün (hafta sonları + piyasa tatilleri hariç). Kantitatif finansta getiri hesaplamaları için kullanılır.
    </p>

    <h2>Dahil eden ve hariç tutan uç noktalar</h2>
    <p>
      Tarih matematiğindeki en zorlu uç durum. 1 Ocak ile 2 Ocak arasındaki günler:
    </p>
    <p>
      <strong>Bitiş hariç (fark):</strong> 1 gün. Çıkarma işleminin size verdiği budur. 2 Ocak − 1 Ocak = 1.
    </p>
    <p>
      <strong>Her iki uç dahil (aralık):</strong> 2 gün. &ldquo;Tatil günleri&rdquo; sayarken kullanışlıdır — 1 Ocak ve 2 Ocak'ta izinliyseniz, bu 2 gün tatildir.
    </p>
    <p>
      Çoğu sözleşme &ldquo;30 gün içinde&rdquo; der ve başlangıç tarihi hariç takvim günlerini kasteder. Bir son tarih belirsizse, her zaman yazılı olarak netleştirin.
    </p>

    <h2>Artık yıllar — iyi bir hesaplayıcıda yerleşiktir</h2>
    <p>
      Artık yıl kuralı: 4'e bölünebilen, ancak 400'e bölünemeyen yüzyıllar hariç. 2000 artık yıldı; 1900 değildi; 2100 olmayacak. 2024 artık yıl, 2028 de artık yıl, vb. İyi bir tarih hesaplayıcı bunu otomatik olarak halleder — sizin zihinsel matematiğiniz muhtemelen halletmez.
    </p>
    <p>
      1 Şubat 2024'ten 1 Şubat 2025'e = 366 gün (29 Şubat 2024 dahil). 1 Şubat 2025'ten 1 Şubat 2026'ya = 365 gün. Manuel tarih matematiği ile yıllık abonelik yenilemelerini manuel olarak ayarlayan kişiler bazen artık yıllarda bir gün kaybeder.
    </p>

    <h2>Saat dilimleri — aynı an, farklı gün</h2>
    <p>
      31 Aralık 2024 23:00 ET zaman damgası, 1 Ocak 2025 04:00 UTC'dir. Saat dilimleri arasında &ldquo;son girişten bu yana geçen günler&rdquo;i hesaplıyorsanız ve birisi gece yarısı giriş yaparsa, cevap hangi dilime bağlı olduğunuza bağlıdır.
    </p>
    <p>
      En iyi uygulama: tüm tarihleri dahili olarak UTC'de saklayın, kullanıcının yerel saat diliminde görüntüleyin. Tarih hesaplayıcımız, açıkça bir zaman damgası girmediğiniz sürece girdileri medeni tarih olarak ele alır (saat dilimini yok sayar).
    </p>

    <h2>İş günü matematiği — gizli tatil sorunu</h2>
    <p>
      &ldquo;5 iş günü&rdquo; hesaplamak bir tatil takvimi gerektirir. ABD federal: yılda 11 tatil. İngiltere: 8 banka tatili. Japonya: 16. Hindistan: bölgesel farklılıklarla düzinelerce. &ldquo;İş günleri&rdquo; ülkeden ülkeye ve hatta aynı ülkedeki borç veren ile borç alan arasında farklılık gösterir (mortgage sektörü iş günlerini mahkemelerden farklı sayar).
    </p>
    <p>
      Kesinlik için belirli tatil takvimini adlandırın: &ldquo;5 ABD federal iş günü&rdquo; açıktır; tek başına &ldquo;5 iş günü&rdquo; açık değildir.
    </p>

    <h2>30/360 gün sayma kuralı (finans)</h2>
    <p>
      Tahvil faiz hesaplamalarında kullanılır: her ayın 30 gün ve her yılın 360 gün olduğunu varsayar. 91 günlük bir takvim dönemi, 30/360 altında 90 gün olabilir ve tahakkuk eden faizi 1/365 oranında etkileyebilir. Kişisel finans matematiği için geçerli değildir, profesyonel finansta yaygındır.
    </p>
    <p>
      ACT/365 ve ACT/360 varyantları da mevcuttur. Bir tahvil üzerinde tahakkuk eden faizi hesaplıyorsanız ve sayı karşı tarafla uyuşmuyorsa, kontrol edilecek ilk şey gün sayma kuralıdır.
    </p>

    <h2>Yaygın kullanım durumları</h2>
    <p>
      <strong>Proje teslim tarihleri.</strong> &ldquo;Q2'ye kadar teslim&rdquo; — bugün ile Haziran ayının son Cuması arasında kaç iş günü var? İş günü matematiğini kullanın.
    </p>
    <p>
      <strong>Yaş hesaplamaları.</strong> Doğum tarihinden hedef tarihe yıl/ay/gün. 29 Şubat uç durumunu ele alın — artık olmayan bir yılda 29 Şubat'ta doğan bir kişinin doğum günü, yargı yetkisine bağlı olarak 28 Şubat veya 1 Mart'tır.
    </p>
    <p>
      <strong>Hisse senedi hak ediş uçurumları.</strong> Startup hisseleri tipik olarak 1 yıl boyunca hak edilir (&ldquo;uçurum&rdquo;). 15 Mart 2024'te işe alındı → uçurum 15 Mart 2025'tir. Not: bazı uçurumlar bir sonraki çeyreğin/ayın başına yuvarlanır.
    </p>
    <p>
      <strong>Seyahat ve vize planlaması.</strong> Schengen Bölgesi kuralı: herhangi bir kayan 180 günlük pencerede maksimum 90 gün. Dikkatli tarih aralığı çıkarma gerektirir; e-tablolar burada zihinsel matematiği yener.
    </p>
    <p>
      <strong>Bordro dönemleri.</strong> İki haftalık bordro dönemleri takvim aylarına göre kayar. Bazı yıllarda 26 yerine 27 iki haftalık maaş çeki vardır; işverenler bunu farklı şekilde ele alır.
    </p>
    <p>
      <strong>Kredi vadesi.</strong> &ldquo;Başlangıçtan itibaren 5 yıl&rdquo; — 5 × 365 gün mü eklersiniz? Yoksa 5 takvim yılı mı (artık yılları ele alarak)? Sözleşmeler tipik olarak ikincisini belirtir.
    </p>

    <h2>Bir tuzak daha — tarih dizesi formatı</h2>
    <p>
      <strong>&ldquo;3/4/2025&rdquo;</strong> ABD'de 4 Mart, İngiltere, Avrupa ve dünyanın geri kalanının çoğunda 3 Nisan'dır. ISO formatı (YYYY-AA-GG) gerçekten belirsiz olmayan tek temsildir ve herhangi bir veritabanının saklaması gereken budur. Uluslararası bir kitleye e-posta veya sözleşmelerde tarih gönderirken, ayı yazın (&ldquo;4 Mart 2025&rdquo; veya &ldquo;4 March 2025&rdquo;).
    </p>

    <h2>Sizinkini çalıştırın</h2>
    <p>
      Takvim günü matematiği için <a href="/tools/date-difference-calculator">tarih farkı hesaplayıcıyı</a> kullanın — iki tarih girin, gün, hafta, ay, yıl cinsinden sayıyı alın. Doğum tarihi tabanlı hesaplamalar için <a href="/tools/age-calculator">yaş hesaplayıcı</a> ile ve ikinci tarih &ldquo;şimdi&rdquo; olduğunda ve kalan canlı günleri istediğinizde <a href="/tools/countdown-timer">geri sayım zamanlayıcı</a> ile birleştirin.
    </p>
  </>
);