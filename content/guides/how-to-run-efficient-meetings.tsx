import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      8 kişinin bir saatlik toplantısı, 1 saatlik bir toplantı değildir
      — bu, içindeki herkesin saatlik ücretlerinin toplamıyla hesaplanan
      8 saatlik bir toplantıdır. Çoğu şirket, toplantıları maliyeti sıfırmış gibi yönetir. Bu rehber, bir toplantının gerçek dolar maliyetini, düzenlenmeye değer dört toplantı türünü, bir toplantının yapılıp yapılmayacağına karar vermek için tek soruluk testi ve toplantıların gerçekten zamanında bitmesini sağlayan taktiksel kuralları adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir toplantının gerçek maliyeti</h2>
    <p>
      Maliyet = Σ (her katılımcının tüm yan haklar dahil saatlik ücreti) ×
      toplantı süresi (saat cinsinden).
    </p>
    <p>
      Tüm yan haklar dahil ücret = maaş × 1.3-1.4 (yan haklar, vergiler,
      genel giderleri dahil etmek için). 120 bin dolar kazanan bir mühendis, şirkete saatte ~75 dolara mal olur.
    </p>
    <p>
      <strong>Örnek:</strong> Her biri 120 bin dolar kazanan 8 kıdemli
      mühendisle haftalık 1 saatlik senkronizasyon toplantısı = 600 dolar/toplantı = yılda 31.200 dolar. 200 kişilik bir şirkette, zamanın %20'sini alan toplantı şişkinliği, yan haklar dahil ekonomiyle genellikle milyonlara ulaşır.
    </p>
    <p>
      Bu maliyet çoğu bütçede görünmez çünkü zaten maaşlara harcanmıştır
      — ancak gerçek bir fırsat maliyetidir. Toplantıda geçen her saat, kod yazmamak, müşterilerle konuşmamak veya düşünmemek anlamına gelir.
    </p>

    <h2>Tek soruluk test</h2>
    <p>
      Planlamadan önce: <strong>Bu, eşzamansız bir belge olabilir mi?</strong>
    </p>
    <p>
      Cevap evetse → belgeyi yazın, paylaşın, eşzamansız yorumları toplayın.
    </p>
    <p>
      Cevap hayırsa → toplantı haklıdır, ancak odaklanmış tutun.
    </p>
    <p>
      Durum güncellemeleri, duyurular, sesli okunan slaytlar ve
      bilgilendirme amaçlı brifingler neredeyse her zaman testte başarısız olur. Okuma süresi &lt;&lt; konuşma süresidir ve belgelere daha sonra aranabilir.
    </p>

    <h2>Maliyetini karşılayan 4 toplantı türü</h2>
    <p>
      <strong>1. Karar toplantıları.</strong> Bir karar alınması gerekiyor,
      seçenekler önceden dağıtılmış ve karar verici + 2-4 bilgili
      kişi hazır bulunuyor. En fazla 30 dakika. Çıktı: karar
      + sorumlu + son tarih.
    </p>
    <p>
      <strong>2. Beyin fırtınası / yaratıcı toplantılar.</strong>
      Yüksek bant genişlikli fikir üretimi; burada ileri geri tartışma
      çıktıyı üretir. Küçük gruplar (3-6), net yönlendirme, zaman sınırı.
      Çıktı: sıralanmış fikir listesi + takip edilecekler.
    </p>
    <p>
      <strong>3. Eylem içeren durum / senkronizasyon toplantıları.</strong>
      Kısa, yardım gerektiren engellere bağlı güncellemeler. En iyi, 8 kişiden az ekiplerle günlük (stand-up), en fazla 15 dakika.
    </p>
    <p>
      <strong>4. İlişki / bire bir toplantılar.</strong> Güven
      oluşturma, koçluk, kariyer tartışması. Bunlar gerçekten yüksek
      bant genişliklidir ve eşzamansız yapılması zordur. Haftalık veya iki haftada bir, 30 dakika.
    </p>
    <p>
      Bunun dışındaki her şey genellikle kılık değiştirmiş bir belgedir.
    </p>

    <h2>Gündem kuralları</h2>
    <p>
      <strong>Yazılı gündem en az 24 saat önceden dağıtılır.</strong> İstisnasız. Gündem yoksa iptal edin — toplantının ne hakkında olduğu konusunda aslında net değilsiniz.
    </p>
    <p>
      <strong>Her gündem maddesinin bir sahibi ve istenen bir sonucu vardır.</strong>
      Sadece &ldquo;3. çeyrek lansmanını tartışmak&rdquo; değil, &ldquo;3. çeyrek
      lansman tarihine karar vermek — sahibi: Sam — sonuç: kilitlenmiş tarih.&rdquo;
    </p>
    <p>
      <strong>Madde başına süre.</strong> On beş dakika, 10 dakika,
      her neyse. Açık zaman sınırları, tek bir maddenin toplantıyı yutmasını önler.
    </p>
    <p>
      <strong>Ön okuma bağlantısı.</strong> Konuyu anlamak
      arka plan bilgisi gerektiriyorsa, ekleyin. Ön okumayı yapmayan
      katılımcılar davet dışı bırakılabilir — gerçekten, bu sağlıklı bir normdur.
    </p>

    <h2>Katılımcı kuralları</h2>
    <p>
      <strong>Yalnızca orada olması gereken kişileri davet edin.</strong>
      Varsayılan olarak daha az kişi. Birisi &ldquo;sadece bilgilendirilmek için&rdquo; dahil ediliyorsa, notları okuyabilir. Toplantı yoluyla bilgilendirmek pahalıdır ve zamanlarına saygısızlıktır.
    </p>
    <p>
      <strong>Amazon'un &ldquo;iki pizza kuralı&rdquo;:</strong>
      toplantı iki pizzayla beslenemiyorsa, çok büyüktür.
      Pratik üst sınır ~8 kişi; yaratıcı/karar toplantıları en iyi
      4-6 kişiyle çalışır.
    </p>
    <p>
      <strong>Açık roller.</strong> Bire birin ötesindeki her şey için:
      toplantıyı kim yönetir, notları kim alır, zamanı kim takip eder.
      Davetiyede belirtilir.
    </p>

    <h2>Toplantının kendisi — taktiksel kurallar</h2>
    <p>
      <strong>Zamanında başlayın.</strong> Katı. Geç gelenler
      yetişemiyorsa, bu bir geri bildirim sinyalidir. 8 kişinin
      5 dakika beklemesinin maliyeti 40 kişi-dakikasıdır.
    </p>
    <p>
      <strong>İlk 2 dakika: sonucu belirtin.</strong> &ldquo;Bu
      saatin sonunda X'e karar vermiş olacağız.&rdquo; Herkesi
      odaklar.
    </p>
    <p>
      <strong>Toplantı için gerekli değilse dizüstü bilgisayar / telefon yok.</strong>
      Birinin çoklu görev yapması gerekiyorsa, burada olmamalı.
      İstisna: belirlenmiş not alan kişi.
    </p>
    <p>
      <strong>Konu dışı maddeleri bekleme listesine alın.</strong> Toplantıyı
      gündemde tutun; konu dışına çıkanları daha sonra değerlendirilmek üzere bir &ldquo;bekleme listesine&rdquo; kaydedin.
    </p>
    <p>
      <strong>5 dakika erken bitirin.</strong> İnsanların
      işlemek ve bir sonraki şeye geçmek için zamanı olur, gecikmezler. Ayrıca
      toplantıların saate saygı duyduğuna dair güven oluşturur.
    </p>

    <h2>Notlar ve takip</h2>
    <p>
      <strong>Canlı not alma</strong> katılımcılar tarafından görülebilir (paylaşılan
      belge yansıtılır veya ekranda). Gerçek zamanlı uyumu zorlar.
    </p>
    <p>
      <strong>Her karar ← DYS (doğrudan sorumlu kişi)
      + tarih.</strong> &ldquo;Sahibi: Sam. Son tarih: Cuma. Engellenirse,
      Perşembe'ye kadar bildirin.&rdquo;
    </p>
    <p>
      <strong>Notlar 24 saat içinde paylaşılır</strong>, bilmesi gereken ancak
      toplantıda bulunmayan kişiler de dahil.
    </p>
    <p>
      Net takipler olmadan, &ldquo;harika toplantılar&rdquo; Pazartesi'ye kadar buharlaşır.
      Bir karar toplantısının çıktısı konuşma değildir
      — yazılı olarak alınan karar + sahip + son tarihtir.
    </p>

    <h2>Toplantısız zaman blokları</h2>
    <p>
      <strong>Üretici zamanı.</strong> Mühendisler, yazarlar, tasarımcılar
      çok saatli kesintisiz bloklara ihtiyaç duyar. Mümkünse Salı/Perşembe
      sabahlarını veya Çarşamba gününün tamamını toplantısız koruyun.
    </p>
    <p>
      <strong>Toplantısız Çarşamba.</strong> Shopify
      ve diğerlerinde popüler hale getirildi. Tüm şirket takvim dışı. Haftada 1 gün derin çalışma
      kazanılır.
    </p>
    <p>
      <strong>Varsayılan toplantı süresi 25 / 50 dakika</strong> 30 / 60
      yerine. Parkinson yasası, toplantıların süreyi doldurmasını sağlar;
      daha kısa aralıklar zamanında biter.
    </p>

    <h2>İptal etmeniz gereken toplantılar</h2>
    <p>
      <strong>Aktif engelleyicisi olmayan, tekrarlayan ritüellere dönüşmüş durum toplantıları.</strong> Slack / Notion'da eşzamansız stand-up ile değiştirin.
    </p>
    <p>
      <strong>&ldquo;Ekibi X hakkında bilgilendir&rdquo; toplantıları.</strong>
      Bir belge yazın. Tek yönlü bilgi aktarımı eşzamanlı
      zaman gerektirmez.
    </p>
    <p>
      <strong>Slaytların tüm ekibe okunduğu çeyreklik / yıllık değerlendirme toplantıları.</strong>
      Slaytları gönderin, yalnızca Soru-Cevap yapın.
    </p>
    <p>
      <strong>Net bir karar vericisi olmayan toplantılar.</strong> Kimse
      kararı veremiyorsa, toplantı bir tane üretemez.
      İptal edin; önce sahipliği düzeltin.
    </p>

    <h2>İptal et-azalt-kısalt çerçevesi</h2>
    <p>
      Üç ayda bir, tekrarlayan toplantılarınızı denetleyin:
    </p>
    <p>
      <strong>İptal edin:</strong> artık gerçek bir sorunu çözmüyor.
    </p>
    <p>
      <strong>Sıklığı azaltın:</strong> haftalık → iki haftada bir, günlük →
      haftada iki kez.
    </p>
    <p>
      <strong>Kısaltın:</strong> 60 → 30, 30 → 15. 60 dakikalık toplantıların %90'ı, küçük konuşmaları ve konu dışına çıkmayı kaldırdığınızda 30 dakikada yapılabilir.
    </p>
    <p>
      <strong>Katılımı azaltın:</strong> listeyi %30 oranında kesin.
      Birinin fark edip etmediğini izleyin.
    </p>
    <p>
      Disiplinli bir denetim çeyreği genellikle kişi başına haftada
      5-10 saat kazandırır.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Bir toplantının gerçek maliyetini{" "}
      <a href="/tools/meeting-cost-calculator">toplantı maliyeti
      hesaplayıcısı</a> ile hesaplayın. Brüt maaşlardan yan haklar dahil
      saatlik ücretlere çalışıyorsanız{" "}
      <a href="/tools/paycheck-calculator">maaş hesaplayıcısı</a>
      {" "}ile ve tersi için (saatlik ücretten maaşa){" "}
      <a href="/tools/hourly-rate-calculator">saatlik ücret hesaplayıcısı</a>
      {" "}ile birlikte kullanın.
    </p>
  </>
);