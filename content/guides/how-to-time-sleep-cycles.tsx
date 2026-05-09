import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Sersemlemiş uyanmak ne kadar uyuduğunuzla ilgili değil—alarmınızın uyku döngünüzün hangi aşamasında çaldığıyla ilgilidir. Uyku, hafif, derin ve REM uykusundan oluşan 90 dakikalık döngüler halinde ilerler. Döngünün ortasında (özellikle derin uykuda) uyanmak berbat hissettirir; döngünün sonunda uyanmak ise dinç hissettirir. Yatma saatinizi planlanan uyanma saatinize göre ayarlamak veya tam tersi, mevcut en ucuz uyku müdahalelerinden biridir—hiçbir takviye, hiçbir alet, sadece aritmetik. Bu rehber, uyku döngülerinin gerçekte nasıl çalıştığını, döngü temelli zamanlamanın matematiğini, pratikte nasıl kullanılacağını (şekerleme zamanlaması dahil), basit modelin ne zaman bozulduğunu ve döngü zamanlamasının gerçekte neyi düzeltip düzeltemeyeceğini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Uyku döngüsü temelleri</h2>
    <p>
      Tam bir uyku döngüsü yaklaşık 90 dakika sürer ve dört aşamadan geçer:
    </p>
    <p>
      <strong>N1 (hafif uyku, ~5 dk):</strong> uyanıklıktan uykuya geçiş. Uyanması kolay.
    </p>
    <p>
      <strong>N2 (hafif uyku, ~20 dk):</strong> vücut <a href="/learn/temperature-ai">sıcaklığı</a> düşer, kalp atış hızı yavaşlar. Toplam uyku süresinin çoğu burada geçer.
    </p>
    <p>
      <strong>N3 (derin uyku, ~30 dk):</strong> yavaş dalga uykusu. Fiziksel iyileşme, bağışıklık fonksiyonu, büyüme hormonu. Uyanması en zor aşama. Gecenin ilk üçte birinde baskındır.
    </p>
    <p>
      <strong>REM (~20 dk/döngü, sonraki döngülerde daha uzun):</strong> rüya uykusu. Hafıza pekiştirme, öğrenme. Gecenin son üçte birinde baskındır. Kapalı göz kapaklarının altında gözler hızla hareket eder; kaslar felçlidir.
    </p>
    <p>
      Döngü gece boyunca tekdüze değildir. Erken döngüler derin uyku ağırlıklıdır; geç döngüler REM ağırlıklıdır.
    </p>

    <h2>Döngü sonunda uyanmak neden iyi hissettirir</h2>
    <p>
      <strong>Uyku ataleti</strong> uyandıktan sonraki sersemlik halidir. N3'ten (derin uyku) çekildiğinizde şiddetlidir—kortizol ve adrenalin henüz yetişmemiştir; beyniniz hala adenozini temizlemektedir.
    </p>
    <p>
      Bir döngünün sonunda (geç REM veya hafif uykuya geçiş) uyanın ve doğal uyanıklığa daha yakınsınız. Uyku ataleti bir saat yerine dakikalar sürer.
    </p>

    <h2>Matematik—geriye doğru planlama</h2>
    <p>
      <strong>06:30'da uyanmanız mı gerekiyor?</strong>
    </p>
    <p>
      5 döngü (7,5 saat uyku) + uykuya dalmak için ~15 dk → yatma saati 22:45.
    </p>
    <p>
      6 döngü (9 saat) + 15 dk → yatma saati 21:15. Çoğu yetişkin için muhtemelen çok fazla.
    </p>
    <p>
      4 döngü (6 saat) + 15 dk → yatma saati 00:15. Kısa ama uyanık uyanırsınız.
    </p>
    <p>
      <strong>Genel kural:</strong> 4, 5 veya 6 döngüyü hedefleyin—arada bir şeyi değil.
    </p>

    <h2>İleriye doğru planlama—önce yatma saati</h2>
    <p>
      <strong>23:00'te yatıyor musunuz?</strong>
    </p>
    <p>
      Uykuya dalmak için 15 dk varsayın. Döngüler ~23:15'te başlar.
    </p>
    <p>
      Döngü 1 ~00:45'te biter.
      <br />
      Döngü 2 ~02:15'te biter.
      <br />
      Döngü 3 ~03:45'te biter.
      <br />
      Döngü 4 ~05:15'te biter (6 saat uyku).
      <br />
      Döngü 5 ~06:45'te biter (7,5 saat uyku). Hedef.
      <br />
      Döngü 6 ~08:15'te biter (9 saat uyku).
    </p>
    <p>
      Alarmınızı döngü bitiş zamanlarından birine kurun, aralarına değil.
    </p>

    <h2>Uykuya dalma süresi önemlidir</h2>
    <p>
      15 dakikalık uykuya dalma varsayımı, döngü matematiğindeki en zayıf halkadır. Uykuya dalmak 5 ila 60+ dakika sürebilir.
    </p>
    <p>
      <strong>Çabuk uykuya dalıyorsanız:</strong> döngü hesaplamalarını 10–15 dakika ileri kaydırın.
    </p>
    <p>
      <strong>30+ dakika sürüyorsa:</strong> ışıkların söndüğü saatten değil, tipik uykuya dalma zamanınızdan geriye doğru plan yapın.
    </p>
    <p>
      <strong>Bir hafta boyunca takip edin</strong> gerçek uykuya dalma sürenizi öğrenmek için. Çoğu fitness takipçisi bunu makul ölçüde iyi tahmin eder (Apple Watch, Oura, Whoop).
    </p>

    <h2>Bireysel döngü farklılıkları</h2>
    <p>
      90 dakika nüfus ortalamasıdır. Bireysel döngüler 70 ila 110 dakika arasında değişir. Döngü uzunluğu gece boyunca da değişir—erken döngüler kısa, geç döngüler uzun olma eğilimindedir.
    </p>
    <p>
      <strong>Pratik çıkarım:</strong> döngü zamanlaması kaba bir kılavuzdur, kronometre değil. 15 dakikalık alarm uyanma penceresi genellikle bir kişinin döngü bitiş aralığı içindedir.
    </p>
    <p>
      Akıllı alarmlı uyku takipçileri (Oura, Apple Watch, Sleep Cycle uygulaması) gerçek döngü aşamasını algılar ve yapılandırılabilir bir pencere içinde sizi en hafif uyku sırasında uyandırır. Çoğu insan için bu, sabit zamanlı alarmlardan daha iyidir.
    </p>

    <h2>Şekerleme zamanlaması</h2>
    <p>
      Kısa şekerlemeler ve uzun şekerlemeler farklı mekanizmalarla çalışır:
    </p>
    <p>
      <strong>20 dakikalık güç şekerlemesi:</strong> N1/N2'de kalır. Kolay uyanma, sersemlik yok, küçük bilişsel artış. Gece uykusunu bozmadan öğleden sonra enerjisi için idealdir.
    </p>
    <p>
      <strong>90 dakikalık şekerleme:</strong> tam uyku döngüsü. REM içerir. <a href="/learn/sleep-debt">Uyku borcu</a> iyileşmesi için çalışır. Döngü sonunda uyanın → dinç hissedin.
    </p>
    <p>
      <strong>30–60 dakikalık şekerlemelerden kaçının.</strong> N3'e (derin uyku) girersiniz ancak döngü ortasında uyanırsınız → şiddetli uyku ataleti. Klasik "sizi daha kötü hissettiren şekerleme."
    </p>
    <p>
      <strong>Şekerleme zamanlaması da önemlidir:</strong> 13:00–15:00 şekerlemeleri doğal sirkadiyen düşüşle uyumludur. 16:00'dan sonraki şekerlemeler gece uyku basıncından çalmaya başlar.
    </p>

    <h2>Döngü zamanlamasının daha az önemli olduğu durumlar</h2>
    <p>
      <strong>Şiddetli uyku yoksunluğu:</strong> toplamda 4 saat uyuyorsanız, döngü sonunda uyanmak döngü ortasında uyanmaktan daha iyidir, ancak yine de berbat hissedeceksiniz. Toplam miktarı düzeltin.
    </p>
    <p>
      <strong>Ters vardiyalı çalışanlar:</strong> döngü matematiği hala geçerlidir ancak <a href="/learn/circadian-rhythm">sirkadiyen ritminiz</a> size karşı savaşır. Tutarlılık ve karanlık/aydınlık yönetimi zamanlamadan daha önemlidir.
    </p>
    <p>
      <strong>İlaç etkisindeki uyku:</strong> uyku ilaçları, antihistaminikler, alkol döngü mimarisini bozar. Sayılar ve zamanlama işe yaramaz.
    </p>
    <p>
      <strong>Uyku apnesi:</strong> döngüleri ciddi şekilde parçalar. Takipçiniz "5 döngü" diyebilir ancak gerçek onarıcı uyku %30 olabilir. Apneyi tedavi edin, zamanlamayı değil.
    </p>

    <h2>Toplam uyku hala daha önemlidir</h2>
    <p>
      Döngü zamanlaması, yeterli toplam uykunun üzerine ince ayar katmanıdır. Günde 5 saat uyuyorsanız, mükemmel zamanlanmış uyanmalar birikmiş uyku borcunu düzeltmez.
    </p>
    <p>
      Çoğu yetişkinin 7–9 saate (5–6 döngü) ihtiyacı vardır. Gençlerin 8–10 saate (5–7 döngü) ihtiyacı vardır. Çocukların 9–12+ saate ihtiyacı vardır. Elit sporcular ve hızlı öğrenenler genellikle daha fazlasına ihtiyaç duyar.
    </p>
    <p>
      <strong>Uyku borcu birikir.</strong> Bir hafta boyunca her gece 6 saat uyumak ≈ sarhoş olmak gibidir. Hiçbir döngü büyüsü bunu düzeltmez; sadece ekstra uyku düzeltir.
    </p>

    <h2>Aydınlık ve karanlık—eksik parça</h2>
    <p>
      Döngü zamanlaması, planlanan saatlerde uykuya dalıp uyanacağınızı varsayar. Sirkadiyen ritminiz uyumsuzsa, bu varsayım bozulur.
    </p>
    <p>
      <strong>Sabah ışığı</strong> (parlak, uyandıktan sonraki 30 dk içinde) sirkadiyen saatinizi ileri alır—sizi daha erken uykulu hissettirir.
    </p>
    <p>
      <strong>Akşam karanlığı</strong> (yatmadan 2 saat önce loş ışık, yatakta telefon yok) melatonini yükseltir → daha hızlı uykuya dalma.
    </p>
    <p>
      <strong>Gece mavi ışığı</strong> melatonini baskılar. Ekranlar en büyük suçludur. Loş mod veya gözlükler yardımcı olur; fiziksel mesafe daha çok yardımcı olur.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Döngüleri kesin kabul etmek.</strong> 90 dakika bir ortalamadır, kural değil. Kaba bir kılavuz olarak kullanın, kronometre olarak değil.
    </p>
    <p>
      <strong>Uykuya dalma süresini görmezden gelmek.</strong> Tahmini uykuya dalma süresi yerine ışıkların söndüğü saatten planlama yapmak her döngüyü 15–45 dakika kaydırır.
    </p>
    <p>
      <strong>Az uyurken zamanlamayı optimize etmek.</strong> 2 saat eksiğiniz varsa, öncelik daha iyi zamanlanmış uyku değil, daha fazla uykudur.
    </p>
    <p>
      <strong>Döngüler arasında birden fazla alarm kurmak.</strong> Ertelemek sizi tek bir temiz uyanıştan daha kötü hissettiren parçalanmış N1 uykusuna çeker.
    </p>
    <p>
      <strong>Çok uzun şekerleme yapmak.</strong> 30–60 dk en kötü aralıktır—bir döngüyü tamamlamadan N3'e ulaşırsınız.
    </p>
    <p>
      <strong>Uyku tutarlılığını görmezden gelmek.</strong> Her gece aynı saatte yatmak, tutarsız bir programda mükemmel döngü matematiğinden daha iyidir. Vücut saatiniz yerleşir.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Uyanma saatinizden geriye doğru bir{" "}
      <a href="/tools/sleep-cycle-calculator">uyku döngüsü hesaplayıcı</a> ile plan yapın.
      Jet lag yönetimi için bir{" "}
      <a href="/tools/time-zone-converter">saat dilimi dönüştürücü</a>
      {" "}ve iyi uykuyu tamamlayan gündüz enerji yönetimi için bir{" "}
      <a href="/tools/pomodoro-timer">pomodoro zamanlayıcı</a>
      {" "}ile birlikte kullanın.
    </p>
  </>
);