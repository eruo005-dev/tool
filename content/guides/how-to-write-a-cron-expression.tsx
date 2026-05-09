export const intro = (
  <>
    <p>
      Cron ifadeleri, zamanlanmış işlerin konuştuğu dildir — bir sunucuya bir görevin ne zaman
      çalıştırılacağını söyleyen beş alanlı bir dizedir. Kompakt, biraz şifrelidirler ve bir kez
      nasıl okunacağını öğrendiğinizde, neredeyse her programı tek bir satırda tanımlayabilirsiniz.
      Ayrıca yanlış anlaşılması kolay olmakla ünlüdürler, bu yüzden insanlar yanlışlıkla her dakika
      temizlik işlerini her saniye çalıştırmaya başlarlar.
    </p>
    <p>
      Bu kılavuz, cron alan sırasını, kısayolları, operatörleri ve gerçek kesintilere neden olan
      hataları kapsar. Sonunda, cron ifadelerini bir bakışta okuyup yazabilmeli — ya da en azından
      ChatGPT'nin size verdiği ifadeyi mantıklı bir şekilde kontrol edebilmelisiniz.
    </p>
  </>
);

export const body = (
  <>
    <h2>Standart cron'un beş alanı</h2>
    <p>
      Standart bir cron ifadesi, bu sırayla boşlukla ayrılmış beş alana sahiptir:{" "}
      <strong>dakika</strong> (0–59), <strong>saat</strong> (0–23), <strong>ayın günü</strong>{" "}
      (1–31), <strong>ay</strong> (1–12 veya OCA–ARA), <strong>haftanın günü</strong> (0–6, 0 ve
      7 Pazar, veya PAZ–CTS). Bazı sistemler (Quartz, systemd) başta bir saniye alanı veya sonda
      bir yıl alanı ekler — kopyala-yapıştır yapmadan önce platformunuzun belgelerini kontrol edin.
    </p>

    <h2>Dört operatör</h2>
    <p>
      <strong>*</strong> &ldquo;her değer&rdquo; anlamına gelir. <strong>,</strong> belirli değerleri
      listeler (<code>1,5,10</code>). <strong>-</strong> bir aralık tanımlar (<code>1-5</code> = 1,2,3,4,5).
      <strong>/</strong> bir aralık tanımlar (<code>*/15</code> dakika alanında = her 15 dakikada bir).
      Bunları serbestçe birleştirin: <code>0 9-17/2 * * PZT-CUM</code> = hafta içi her gün 9:00'dan
      17:00'a kadar her 2 saatte bir.
    </p>

    <h2>Bir kez ezberlenen klasik desenler</h2>
    <p>
      Her dakika: <code>* * * * *</code>. Her 15 dakikada bir: <code>*/15 * * * *</code>. Her
      saat başı: <code>0 * * * *</code>. Her gün gece yarısı: <code>0 0 * * *</code>.
      Her gün saat 9'da: <code>0 9 * * *</code>. Her Pazartesi saat 9'da: <code>0 9 * * PZT</code>.
      Ayın ilk günü saat 3'te: <code>0 3 1 * *</code>. Bu on tanesi gerçek programların %80'ini kapsar.
    </p>

    <h2>İfadeleri görsel olarak oluşturun, sonra kopyalayın</h2>
    <p>
      Cron ifadelerini elle yazmak klasik durumlar için iyidir, ancak daha süslü şeyler
      (üç aylık raporlar, dönüşümlü haftalar, ayın son günü) hata yapmaya müsaittir. İstediğiniz
      deseni tıklayarak oluşturmak için{" "}
      <a href="/tools/cron-expression-builder">cron ifade oluşturucumuzu</a> kullanın, ardından
      dizeyi crontab'ınıza kopyalayın. Herhangi bir ifadeyi tekrar düz İngilizce'ye çeviren{" "}
      <a href="/tools/cron-expression-explainer">cron ifade açıklayıcı</a> ile mantıklı olup
      olmadığını kontrol edin.
    </p>

    <h2>Saat dilimine dikkat edin</h2>
    <p>
      Cron, sizin saat diliminizde değil, sunucunun saat diliminde çalışır. <code>0 9 * * *</code>{" "}
      için ayarlanan bir iş, sunucu saatinde 9'da çalışır. Sunucunuz UTC'deyse ve siz New York'taysanız,
      bu yazın yerel saatle 4, kışın 5 demektir. Zaman açısından hassas bir şey planlamadan önce
      her zaman sistem saat dilimini kontrol edin. Platformunuz destekliyorsa, cron yapılandırmasında
      açıkça ayarlayın (<code>CRON_TZ=America/New_York</code>).
    </p>

    <h2>&ldquo;Hem haftanın günü hem de ayın günü&rdquo; tuzağı</h2>
    <p>
      Çoğu cron uygulamasında, hem ayın günü hem de haftanın günü belirtilmişse ( <code>*</code>
      değil), iş <em>her ikisi</em> eşleştiğinde değil, <em>birisi</em> eşleştiğinde çalışır. Yani{" "}
      <code>0 0 15 * PZT</code>, ayın 15'inde gece yarısı <em>ve</em> her Pazartesi çalışır —
      muhtemelen istediğiniz bu değildir. &ldquo;15'ine denk gelen Pazartesi&rdquo; istiyorsanız,
      sisteminizin belgelerine bakın veya uygulama kodunda halledin.
    </p>

    <h2>İşleri birbirine çok yakın planlamayın</h2>
    <p>
      A işi 20 dakika sürüyorsa ve B işini A başladıktan 5 dakika sonra çalışacak şekilde
      planlarsanız, A uzun sürdüğünde örtüşen yürütmeler elde edebilirsiniz. Bir kilit dosyası,
      bir veritabanı bayrağı veya eşzamanlılık 1 olarak ayarlanmış bir kuyruk kullanın. Klasik bir
      kesinti, gece içe aktarma işinin iki örneğinin aynı anda çalışması ve verileri bozmasıdır.
    </p>

    <h2>Her şeyi günlüğe kaydedin — cron varsayılan olarak sessizdir</h2>
    <p>
      Başarısız bir cron işi size e-posta göndermez. Kontrol ettiğiniz bir yerde stderr'e
      kaydetmez. Sadece sessizce çalışmayı durdurur. Çıktıyı bir günlük dosyasına yönlendirin:{" "}
      <code>* * * * * /path/to/job &gt;&gt; /var/log/job.log 2&gt;&amp;1</code>. Daha iyisi:
      hataları bir izleme hizmetine (Sentry, Datadog) gönderin ve iş <em>çalışmayı durdurduğunda</em>
      sizi uyaran bir kalp atışı hizmeti (Dead Man's Snitch, healthchecks.io) kullanın.
    </p>

    <h2>Yüksek eşzamanlılık işlerini kademelendirin</h2>
    <p>
      On cron işiniz varsa ve hepsi <code>0 0 * * *</code>'da çalışacak şekilde ayarlanmışsa,
      hepsi gece yarısı ateşlenir ve sunucu yükünüzü zirveye çıkarır. Onları kademelendirin:
      biri 00:00'da, sonraki 00:05'te, sonraki 00:12'de. Tek bir yoğun dakika olmaz, sürü etkisi olmaz.
    </p>

    <h2>Kısayollar: @hourly, @daily, @reboot</h2>
    <p>
      Çoğu cron sistemi adlandırılmış kısayolları destekler: <code>@yearly</code>, <code>@monthly</code>,{" "}
      <code>@weekly</code>, <code>@daily</code> (= <code>0 0 * * *</code>),{" "}
      <code>@hourly</code> (= <code>0 * * * *</code>) ve <code>@reboot</code> (sistem başladığında
      bir kez çalışır). Eşleştiklerinde bunları kullanın — okumaları daha kolaydır ve eşdeğer
      beş alanlı ifadelerden daha az hataya müsaittirler.
    </p>

    <h2>Güvenmeden önce test edin</h2>
    <p>
      Yeni bir cron işini üretime koymadan önce, komutu doğrudan çalıştırın ve çalıştığını
      doğrulayın. Ardından, birkaç dakika sonrasına planlayın ve ateşlendiğini izleyin. Ardından
      gerçek programa taşıyın. Haftada bir kez çalışan işler en tehlikelidir — çalıştırmalar
      arasında sessiz başarısızlık biriktirmek için en fazla zamana sahiptirler.
    </p>

    <p>
      İlgili: <a href="/guides/how-to-use-regex-effectively">regex'i etkili bir şekilde kullanma</a>,{" "}
      <a href="/guides/how-to-format-json-properly">JSON'u doğru biçimlendirme</a> ve{" "}
      <a href="/guides/what-is-an-api">API nedir</a> — planladığınız sistemler hakkında bağlam için.
    </p>
  </>
);