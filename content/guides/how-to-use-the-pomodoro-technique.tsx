import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Pomodoro Tekniği, sabit 25 dakikalık çalışma bloklarının 5 dakikalık
      molalarla ayrıldığı ve her dört blokta bir daha uzun bir mola verilen
      bir üretkenlik sistemidir. 1980'lerin sonunda Francesco Cirillo
      tarafından domates şeklindeki bir mutfak zamanlayıcısı kullanılarak
      icat edilmiştir (bu nedenle <em>pomodoro</em>, İtalyancada domates
      anlamına gelir). Zaman yönetimini dışsallaştırdığı, işe başlama
      eşiğini düşürdüğü ve yorulduğunuzu fark etmeden önce toparlanma
      sağladığı için işe yarar. Bu kılavuz, 25/5 döngüsünü, dört-blok-ve-uzun-mola
      düzenini, görevleri nasıl gruplayacağınızı, bağlam değişiklikleri ve
      kesintilerle ne yapmanız gerektiğini ve klasik 25/5'in işinize
      uymadığı durumlarda popüler varyantları (50/10, 90 dakikalık derin
      çalışma) kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Klasik 25/5 döngüsü</h2>
    <p>
      Bir &ldquo;pomodoro&rdquo; = 25 dakika odaklanmış çalışma ve ardından
      5 dakika mola. Dört pomodorodan sonra 15&ndash;30 dakikalık daha
      uzun bir mola verin.
    </p>
    <pre>{`25 dk çalışma  |  5 dk mola
25 dk çalışma  |  5 dk mola
25 dk çalışma  |  5 dk mola
25 dk çalışma  |  20 dk mola   <-- uzun mola
(tekrar)`}</pre>
    <p>
      Dört pomodoro = 2 saat geçen süre, yaklaşık 1s 40dk çalışma. Çoğu
      kişi pomodoro 8&ndash;12 civarında (dört saat odaklanmış çalışma)
      duvara çarpar. Bu, çoğu insanın normal 8 saatlik bir iş gününde
      yaptığından daha fazla odaklanmış çalışmadır.
    </p>

    <h2>Neden 25 dakika</h2>
    <p>
      Herkesin &ldquo;sadece bir pomodoro yap&rdquo; taahhüdünde
      bulunabileceği kadar kısa. Başlama eşiğini aşıp akışa geçmek için
      yeterince uzun. Kritik olarak, zihinsel yorgunluk birikmeden sona
      erer, böylece bir sonraki bloğa tam kapasiteyle dönersiniz.
    </p>
    <p>
      Daha kısa aralıklar (15 dk) aceleye getirilmiş hissettirme
      eğilimindedir; daha uzun olanlar (60+ dk) toparlanma amacını
      bozar ve işlevsel olarak sıradan çalışma seanslarına dönüşür.
      Yirmi beş iyi ayarlanmış bir varsayılandır.
    </p>

    <h2>Nasıl başlanır</h2>
    <ol>
      <li>Üzerinde çalışılacak bir görev yazın.</li>
      <li>25 dakikalık bir zamanlayıcı başlatın.</li>
      <li>
        Sadece o görev üzerinde çalışın. Başka bir fikir gelirse, daha
        sonra halletmek üzere bir &ldquo;yakalama&rdquo; kağıdına not
        alın.
      </li>
      <li>
        Zamanlayıcı çaldığında, cümlenin ortasında bile olsa durun. Bir
        çentik atın.
      </li>
      <li>5 dakikalık bir mola verin. Ayağa kalkın, ekrandan uzağa bakın.</li>
      <li>Tekrarlayın.</li>
    </ol>
    <p>
      Zor kısım, zamanlayıcı çaldığında gerçekten durmaktır. Akış
      halindeyseniz devam etme isteği gelir. Teknik, molayı gerektirir,
      çünkü mola bir sonraki bloğu üretken kılan şeydir.
    </p>

    <h2>&ldquo;Çalışma&rdquo; olarak ne sayılır</h2>
    <p>
      Bir görev veya yakından ilişkili küçük görevler kümesi. E-posta
      triyajı bir pomodoro olabilir; bir kod incelemesi bir pomodoro
      olabilir; bir belgenin bir bölümünü yazmak bir pomodoro (veya
      birkaçı) olabilir.
    </p>
    <p>
      Büyük görevler bölünür. Bir blog yazısı şöyle olabilir: pomodoro 1
      taslak, pomodoro 2 giriş taslağı, pomodoro 3 gövde taslağı,
      pomodoro 4 düzenleme. Sadece bir parça üzerinde 25 dakikaya
      ihtiyacınız olduğunu bilmek, aktivasyon enerjisini aşmanızı
      sağlar.
    </p>

    <h2>Mola gerçekten önemlidir</h2>
    <p>
      Mola isteğe bağlı değildir. Tekniğin bir parçasıdır. Beş dakika:
    </p>
    <ul>
      <li>Ayağa kalkmak, yürümek, esnemek</li>
      <li>Su almak</li>
      <li>Pencereden dışarı bakmak (uzak mesafe görüşü göz yorgunluğunu giderir)</li>
      <li>Haberleri veya Twitter'ı kaydırmamak</li>
    </ul>
    <p>
      Diğer ekranlarla doldurulan molalar dikkati geri getirmez. Fiziksel
      hareket ve görsel dinlenme getirir.
    </p>

    <h2>Dört blok ve uzun mola</h2>
    <p>
      Dört pomodorodan sonra (~2 saat geçen süre), 15&ndash;30 dakikalık
      daha uzun bir dinlenme yapın. Dışarı çıkın, yemek yiyin, birini
      arayın. Bu uzun mola, dikkat ve iradenin damla damla değil,
      tamamen yenilenmesini sağlar.
    </p>
    <p>
      Bunu görmezden gelirseniz, 5.&ndash;8. pomodorolarınız ilk dörtten
      daha düşük kalitede olur. Hala &ldquo;çalışıyor&rdquo; olursunuz
      ancak çıktı düşer.
    </p>

    <h2>Kesintilerle başa çıkma</h2>
    <p>
      Cirillo'nun çerçevesi:
    </p>
    <p>
      <strong>İç kesintiler</strong> (bir şeyi kontrol etmek istersiniz,
      bir iş hatırlarsınız): kağıda not alın, göreve dönün, pomodorodan
      sonra halledin.
    </p>
    <p>
      <strong>Dış kesintiler</strong> (iş arkadaşı, telefon, Slack):
      bilgilendirin, müzakere edin, zamanlayın, geri arayın. Gerçekten
      acilse, pomodoroyu iptal edin &mdash; sayılmaz. Bir pomodoroya
      devam edemezsiniz; yenisini başlatın.
    </p>
    <p>
      &ldquo;15 dakika içinde size döneceğim&rdquo; disiplini bazen
      sosyaldir; çoğu kesinti için hem mümkün hem de takdir edilir.
    </p>

    <h2>Görev gruplama</h2>
    <p>
      Tek bir pomodoro, tek bir iş türü için en iyi sonucu verir. E-posta,
      toplantılar ve kodu 25 dakikalık bir blokta karıştırmak bloğu
      boşa harcar. Benzer olanı benzerle gruplayın:
    </p>
    <ul>
      <li>1 pomodoro = sabahki tüm e-postalarınız</li>
      <li>1 pomodoro = tüm kod incelemeleriniz</li>
      <li>2&ndash;4 pomodoro = derin odaklı özellik çalışması</li>
      <li>1 pomodoro = idari / fatura / planlama</li>
    </ul>
    <p>
      Daha az geçiş yaparsınız ve her blok kendi kategorisinde ivme
      kazanır.
    </p>

    <h2>Bağlam değiştirme maliyeti</h2>
    <p>
      Görevler arasındaki her geçiş, bilişsel kurulum süresine mal olur
      &mdash; en azından birkaç dakikalık &ldquo;nerede kalmıştım&rdquo;,
      karmaşık işlerde daha uzun. Pomodorolar, 25 dakika boyunca tek bir
      şeye bağlılığı zorunlu kılar ve bu da bir gün içindeki geçiş
      maliyetini büyük ölçüde azaltır. Yapı, zamanlayıcıdan çok
      kısıtlama ile ilgilidir.
    </p>

    <h2>Varyantlar</h2>
    <p>
      25/5 varsayılanı her iş türüne uymaz.
    </p>
    <p>
      <strong>50/10.</strong> Elli dakika çalışma, on dakika mola. Bağlamı
      tamamen yüklemek 10&ndash;15 dakika süren derin teknik işler için
      daha iyidir. İki 50/10 bloğu klasik 2 saatlik dilime sığar.
    </p>
    <p>
      <strong>52/17.</strong> DeskTime'ın yüksek performanslı çalışanlar
      üzerindeki verileri bu oranı önermiştir. Daha uzun toparlanmadan
      fayda sağlayan bilgi işleri için çalışır.
    </p>
    <p>
      <strong>90 dakikalık ultradian.</strong> Vücudun doğal 90 dakikalık
      bilişsel döngüsüyle uyumludur. Ardından 20&ndash;30 dakikalık bir
      dinlenme ile bir 90 dakikalık derin çalışma bloğu. Cal
      Newport'un &ldquo;derin çalışma&rdquo; protokolüne en yakın olanı.
    </p>
    <pre>{`25/5    varsayılan, çoğu görev için iyi
50/10   uzun bağlamlı işler (kod, yazma, analiz)
90/20   günde en fazla bir veya iki, ağır derin odak
15/5    çok isteksiz başlangıçlar, tükenmişlik sonrası rehabilitasyon`}</pre>

    <h2>Toplantılarda ve işbirliğinde pomodorolar</h2>
    <p>
      Bireysel pomodorolar temiz bir şekilde uygulanır; ekip pomodoroları
      daha az. Toplantılar kendi saatlerinde işler. Toplantılarınızın
      etrafında pomodorolar kullanın &mdash; biri öncesinde ve biri
      sonrasında &mdash; toplantının kendisini pomodoro yapmaya
      çalışmak yerine.
    </p>
    <p>
      Çift programlama pomodoro ile iyi çalışabilir: 25 dakikalık işarette
      rolleri değiştirin, birlikte mola verin. Her iki kişiyi de zinde
      tutar ve devir teslimleri doğal hale getirir.
    </p>

    <h2>Pomodoroları takip etme</h2>
    <p>
      Kağıt üzerinde basit bir çentik (veya bir pomodoro uygulaması) size
      veri sağlar. Çoğu kişi iyi bir günde 8&ndash;12 pomodoro sayar.
      Bu sayı, gerçekçi planlama yapmanıza yardımcı olur &mdash; bir
      görev 4 pomodoro alıyorsa ve bugün 8 pomodoronuz varsa, neyin
      mümkün olduğunu bilirsiniz.
    </p>
    <p>
      Günlük maksimum pomodoro sayısı için optimize etmeyin. İşin
      kalitesi, zamanlayıcıların miktarından daha önemlidir.
    </p>

    <h2>Pomodoro'nun işe yaramadığı durumlar</h2>
    <ul>
      <li>
        Bağlamı yüklemek 30+ dakika süren derin matematiksel / tasarım
        işleri &mdash; bunun yerine 50/10 veya 90 dakikalık blokları
        deneyin.
      </li>
      <li>
        İşbirlikçi toplantılar &mdash; çeyrek saatte bir duraklatılamaz.
      </li>
      <li>
        Kesintinin, işin dinlenmeye ihtiyaç duyduğundan daha fazla ivmeyi
        bozduğu yaratıcı akış seansları.
      </li>
      <li>
        Durdurmanın başlamaktan daha zor olduğu DEHB hiperfokusu; katı
        zamanlayıcı rahatsız edici hissedilebilir.
      </li>
    </ul>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Mola sırasında çalışmak.</strong> Tüm amacı bozar. Mola,
      bir sonraki pomodoroyu üretken kılan şeydir.
    </p>
    <p>
      <strong>Bir pomodoroya birden fazla görev sıkıştırmak.</strong>
      Geçiş maliyeti bloğu mahveder. Benzer görevleri bir pomodoro
      içinde gruplayın, bir dakika içinde değil.
    </p>
    <p>
      <strong>Ne üzerinde çalışılacağını yazmamak.</strong> İlk birkaç
      dakikayı karar vererek harcarsınız. Zamanlayıcıyı başlatmadan
      önce görevi seçin.
    </p>
    <p>
      <strong>5 dakikalık molayı daha fazla ekran için kullanmak.</strong>{" "}
      Twitter dikkati geri getirmez. Bunun yerine ayağa kalkın.
    </p>
    <p>
      <strong>&ldquo;Duraklatılmış&rdquo; pomodorolara devam etmek.</strong>
      Kural: kesintiye uğrayan pomodorolar geçersiz sayılır. Yenisini
      başlatın.
    </p>
    <p>
      <strong>50/10 isteyen işe 25/5'i zorlamak.</strong> Blok uzunluğunu
      göreve uydurun, tersi değil.
    </p>
    <p>
      <strong>Çıktı yerine çentik sayısını optimize etmek.</strong>
      Pomodoro saymak bir planlama aracıdır, bir performans metriği
      değil.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Bir bloğu{" "}
      <a href="/tools/pomodoro-timer">pomodoro zamanlayıcısı</a> ile
      başlatın. Manuel kontrolü tercih ederseniz,{" "}
      <a href="/tools/stopwatch">kronometre</a> mola otomasyonu olmadan
      geçen çalışma süresini takip eder ve{" "}
      <a href="/tools/countdown-timer">geri sayım zamanlayıcısı</a>,
      50/10 veya 90 dakikalık derin çalışma varyantlarını kullanırken
      isteğe bağlı blok uzunluklarını yönetir.
    </p>
  </>
);