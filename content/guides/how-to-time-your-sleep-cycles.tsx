import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Uykuyu kesintisiz tek bir blok halinde almazsınız &mdash; yaklaşık her 90 dakikada bir
      evrelerden geçersiniz ve derin uykunun ortasında uyanmak, &ldquo;of&rdquo; ile &ldquo;tamam,
      hadi gidelim&rdquo; arasındaki farktır. Alarmınızı bir döngünün ortası yerine sonuna denk
      gelecek şekilde ayarlamak, daha fazla uyumadan dinlenmiş hissetmenin en ucuz yoludur.
      Ancak işin püf noktası: Döngü uzunluğu kişiye ve geceye bağlı olarak aslında 85&ndash;110
      dakikadır, bu nedenle hesaplama yaklaşıktır.
      Bu rehber, bir döngü içinde neler olduğunu, döngü sınırına denk gelen bir uyanma saatinin
      nasıl seçileceğini, REM ve derin uykunun rolünü, 90 dakika kuralının sınırlarını ve
      <a href="/learn/sleep-debt"> uyku borcunun</a> gerçek maliyetini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Uykunun dört evresi</h2>
    <p>
      Her döngü şu aşamalardan geçer:
    </p>
    <ul>
      <li>
        <strong>N1</strong> &mdash; hafif dalma, 1&ndash;5 dakika. Uyanması
        kolaydır; uyuduğunuzu fark etmeyebilirsiniz bile.
      </li>
      <li>
        <strong>N2</strong> &mdash; hafif uyku, kalp atış hızı düşer, vücut
        <a href="/learn/temperature-ai"> sıcaklığı</a> azalır. Toplam uyku süresinin ~%45'i.
      </li>
      <li>
        <strong>N3</strong> &mdash; derin (yavaş dalga) uyku. Fiziksel onarım,
        büyüme hormonu, bağışıklık çalışması. Uyanması en zor evre. Toplam
        uykunun ~%15&ndash;20'si, gecenin ilk üçte birinde yoğunlaşır.
      </li>
      <li>
        <strong>REM</strong> &mdash; hızlı göz hareketi, rüyalar, hafıza
        pekiştirme. Toplam uykunun ~%20&ndash;25'i, gecenin son
        üçte birinde yoğunlaşır.
      </li>
    </ul>

    <h2>Tipik bir gece</h2>
    <pre>{`Yatma  0 dk  N1 -> N2 -> N3 -> N3 -> N2 -> REM    (döngü 1: ~90 dk, derin-ağırlıklı)
        90 dk  N2 -> N3 -> N2 -> REM                (döngü 2: ~90 dk, biraz daha az derin)
       180 dk  N2 -> N3 -> N2 -> REM                (döngü 3)
       270 dk  N2 -> REM                            (döngü 4: REM-ağırlıklı)
       360 dk  N2 -> REM                            (döngü 5: daha da fazla REM)
       450 dk  UYAN`}</pre>
    <p>
      Erken döngüler derin uyku ağırlıklıdır. Geç döngüler REM ağırlıklıdır. Sadece
      dört saat uyumak REM sürenizi yarıya indirir; sadece iki saat uyumak
      REM'i neredeyse sıfıra düşürür.
    </p>

    <h2>Döngü sonunda uyanma taktiği</h2>
    <p>
      Bir döngünün sonunda (N1 veya geç REM'de) uyanırsanız, nispeten
      uyanık hissedersiniz. N3'ün ortasında uyanırsanız uyku ataleti
      yaşarsınız &mdash; 15&ndash;60 dakika süren sis, sersemlik, kötü kararlar.
      &ldquo;<a href="/tools/sleep-calculator">Uyku hesaplayıcı</a>&rdquo; yaklaşımı: Uyanmak istediğiniz
      saatten geriye doğru 90 dakikalık parçalar halinde gidin, uykuya dalmak için ~14 dakika
      ekleyin, bir yatma saati seçin.
    </p>
    <pre>{`Saat 6:30'da mı uyanıyorsunuz? 90 dk'lık döngüleri geri sayın:
5 döngü = 7,5 saat  --> yatma saati 22:45  (uykuya dalmak için 14 dk ekle = 22:31)
4 döngü = 6,0 saat  --> yatma saati 00:15
3 döngü = 4,5 saat  --> yatma saati 01:45   (sadece acil durumda)`}</pre>
    <p>
      İyi zamanlanmış 4,5 saatlik uyku, derin uykunun ortasında biten 5 saatlik uykudan
      daha iyi hissettirebilir. Vurgu <em>olabilir</em> üzerinde &mdash; kronik kısa
      uyku, zamanlamadan bağımsız olarak yine de borç biriktirir.
    </p>

    <h2>90 dakika kuralı neden yaklaşıktır</h2>
    <p>
      Döngü uzunluğu değişir:
    </p>
    <ul>
      <li>Bireyler: 85&ndash;110 dakika</li>
      <li>Bir gece içinde: erken döngüler daha kısa, geç döngüler daha uzun</li>
      <li>Alkol veya geç öğünlerden sonra: bozulmuş, tahmin edilemez</li>
      <li>Egzersiz veya uyku yoksunluğundan sonra: derin uyku ağırlıklı, daha uzun N3 parçaları</li>
    </ul>
    <p>
      Kişisel döngünüz muhtemelen 90 artı-eksi 15 dakikadır. 90 dakika
      kuralı size yardımcı olmuyorsa, 95 veya 100'ü deneyin.
    </p>

    <h2>Uykuya dalma süresi de önemlidir</h2>
    <p>
      Çoğu insanın gerçekten uykuya dalması 10&ndash;20 dakika sürer. Eğer
      yatakta 45 dakika kaydırma yapıyorsanız, gerçek döngü başlangıcınız
      yatma saatinden 45 dakika sonradır, yatma saatinde değil. Ne zaman
      yattığınıza değil, ne zaman uyuduğunuza karar verin.
    </p>

    <h2>REM ve bilişsel performans</h2>
    <p>
      REM, hafıza pekiştirme, duygusal işleme ve
      yaratıcı atılım içgörülerinin gerçekleştiği evredir. Geç saatlere kadar çalışma
      veya kısa uykular yoluyla REM'i atlamanın belirli maliyetleri vardır:
    </p>
    <ul>
      <li>Duygusal tepkisellik artar (amigdala +%60)</li>
      <li>Yaratıcı problem çözme düşer</li>
      <li>Öğrenme pekiştirmesi zarar görür</li>
      <li>Ruh hali değişkenliği, düşük hayal kırıklığı toleransı</li>
    </ul>
    <p>
      REM gecenin son üçte birinde yoğunlaştığı için,
      o üçte birini kısaltmak orantısız şekilde zarar verir.
    </p>

    <h2>Derin uyku ve fiziksel iyileşme</h2>
    <p>
      N3, büyüme hormonunun salındığı, dokuların onarıldığı ve
      glimfatik sistemin beyindeki metabolik atıkları temizlediği evredir. Gecenin
      ilk üçte birini kesmek (geç yatmak), toplamda 8 saat uyusanız bile iyileşmeyi
      olumsuz etkiler.
    </p>
    <p>
      Sporcular: Zorlu antrenman günlerinde erken yatma saatlerine öncelik verin. Kaçırılan
      N3'ü daha geç uyuyarak telafi edemezsiniz.
    </p>

    <h2>Uyku borcu</h2>
    <p>
      Borç, kişisel ihtiyacınızın (yetişkinler için tipik olarak
      7&ndash;9 saat) altındaki her gece birikir. Bir hafta sonu uykusuyla tamamen
      ödeyemezsiniz.
    </p>
    <pre>{`Pazartesi-Cuma, 6 saat/gece:   Cuma'ya kadar -10 saat borç
Cumartesi & Pazar, 10 saat:    her biri +2 saat fazla
Net:                          hala -6 saat geride`}</pre>
    <p>
      Araştırmalar, 5 günlük uyku kısıtlamasından kaynaklanan reaksiyon süresi
      açıklarının, aradaki tam gecelere rağmen en az bir hafta sürdüğünü göstermektedir.
    </p>

    <h2>Kronotip</h2>
    <p>
      Bazı insanlar genetik olarak daha erken veya daha geç yatma saatlerine yatkındır. Kabaca
      kategoriler:
    </p>
    <ul>
      <li>Tarla kuşları (sabahçıllar): en yüksek uyanıklık 7&ndash;10, saat 22'de yorgun</li>
      <li>
        Üçüncü kuşlar (çoğu insan): en yüksek uyanıklık 10&ndash;14, saat
        23&ndash;00'da yorgun
      </li>
      <li>
        Baykuşlar: en yüksek uyanıklık 18&ndash;01, saat 01&ndash;03'e kadar yorgun değil
      </li>
    </ul>
    <p>
      Kronotipinizle kafein ve irade gücüyle savaşmak kısa vadede işe yarar
      ancak kardiyovasküler riski artırır. Mümkün olduğunda çalışma programınızı ve yatma
      saatinizi tipinize göre ayarlayın.
    </p>

    <h2>Şekerlemeler</h2>
    <p>
      Kısa şekerlemeler (10&ndash;20 dakika) yalnızca N1/N2'dir ve sizi uyanık bırakır.
      Daha uzun şekerlemeler (60&ndash;90 dakika) N3 ve biraz REM içerir ve
      gerçek bir iyileşme sağlar &mdash; ancak alarm N3'ü bölerse sizi sersemlemiş
      uyandırır.
    </p>
    <pre>{`Güç şekerlemesi:   10-20 dk    (hafif uykuda kal)
Tam döngü:        90 dk       (doğal sonunda uyan)
Kaçının:          30-60 dk    (derin uykuda uyan, sersem)`}</pre>

    <h2>Uyku takip cihazları: yararlı mı değil mi</h2>
    <p>
      Tüketici uyku takip cihazları yatma saati, uyanma saati ve
      toplam süre konusunda oldukça iyidir. Uyku evrelerini ayırt etmede
      vasattırlar &mdash; N3/REM sınıflandırmasının doğruluğu yazı tura atar gibidir.
      Evre dökümünü eğlence olarak görün, teşhis olarak değil. Yararlı
      sinyal haftalar içindeki eğilimdir.
    </p>

    <h2>Kafein ve uyku zamanlaması</h2>
    <p>
      Kafeinin yarı ömrü 5&ndash;6 saattir. Saat 15'teki bir kahve saat 21'de hala
      yarı yarıya etkindir. Uykuya dalmanızı mutlaka engellemez
      ancak derin uykuyu bastırır ve geceyi parçalar. Hassassanız, yatmadan
      8&ndash;10 saat önce son bardak.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Yatma saatini uyku saati olarak saymak.</strong> Gerçekten uykuya
      dalmanın 10&ndash;20 dakika sürdüğünü hesaba katın.
    </p>
    <p>
      <strong>90 dakika kuralına aşırı güvenmek.</strong> Bu bir
      kestirimdir. Size yardımcı olmuyorsa, 100 dakikalık aralıkları deneyin ve
      bakın.
    </p>
    <p>
      <strong>Borcu ödemek için şekerleme kullanmak.</strong> 20 dakikalık bir şekerleme,
      bir saatlik kaçırılan uykuya eşdeğer değildir. Uyanıklık için faydalıdır, onarım
      için değil.
    </p>
    <p>
      <strong>REM son olduğu için geç saatlere kadar ayakta kalmak.</strong> REM,
      sizin <em>kişisel</em> gecenizin son üçte birindedir. Geç yatma saatleri yine de
      derin uykunuzdan çalar.
    </p>
    <p>
      <strong>Zamanlamaya odaklanıp toplam süreyi görmezden gelmek.</strong> İyi
      zamanlanmış 6 saat, çoğu yetişkin için hala yetersizdir. Zamanlama bir
      eşitlik bozucudur, bir ikame değildir.
    </p>
    <p>
      <strong>Yatmadan hemen önce ışık ve ekranlar.</strong> Melatonini
      baskılar, uyku başlangıcını geciktirir, döngü zamanlamasını bozar.
    </p>
    <p>
      <strong>Uyku yardımcısı olarak alkol.</strong> Sizi daha hızlı uyutur,
      gecenin ikinci yarısında REM'i yok eder. Kalite için net negatif.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Bir uyanma veya yatma saati seçin{" "}
      <a href="/tools/sleep-cycle-calculator">uyku döngüsü hesaplayıcısında</a>{" "}
      ve döngüye uygun alternatifleri hesaplasın.{" "}
      <a href="/tools/pomodoro-timer">Pomodoro zamanlayıcı</a> ile günü yapılandırarak
      gerçekten programa uygun yatmanızı sağlayın ve{" "}
      <a href="/tools/fasting-timer">oruç zamanlayıcı</a> ile de yeme
      pencerelerinizi kronotipinize göre ayarlayın.
    </p>
  </>
);