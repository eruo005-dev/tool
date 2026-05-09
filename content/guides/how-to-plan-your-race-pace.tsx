import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Çoğu ilk kez yarışan kişi çok hızlı başlar, yarı yolda tükenir ve bitiş süresi, kondisyonlarının izin verdiğinden çok daha yavaş olur. Çözüm daha fazla antrenman değil, gerçek aerobik kapasitenize, parkur profiline ve yarış günü koşullarına uygun bir tempo planıdır. Bu rehber, adım adım gerçekçi bir hedef tempo belirlemenizi, yarış boyunca tempoyu nasıl böleceğinizi ve tükenmeyi önleyen taktiksel kuralları anlatır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Adım 1 — gerçekçi hedef temponuzu bulun</h2>
    <p>
      Tempo, <strong>son yarış verilerinden veya eşik testinden</strong> gelmelidir, umuttan değil. Kendinizinkini bulmanın üç yolu:
    </p>
    <p>
      <strong>(1) Son yarış dönüşümü.</strong> Son 5K süreniz, daha uzun mesafeleri makul ölçüde tahmin eder. Yaklaşık çarpanlar:
    </p>
    <p>
      <strong>10K süresi ≈ 5K süresi × 2.10</strong> (22:00 5K → 46:12 10K).
    </p>
    <p>
      <strong>Yarı maraton ≈ 5K × 4.67</strong> (22:00 5K → 1:42:45).
    </p>
    <p>
      <strong>Tam maraton ≈ 5K × 9.80</strong> (22:00 5K → 3:35:36).
    </p>
    <p>
      Bunlar, daha uzun mesafe için benzer antrenman hacmini varsayar. 5K için antrenman yapıp soğuk bir maratona atlarsanız, maraton formülün tahmin ettiğinden çok daha yavaş olur.
    </p>
    <p>
      <strong>(2) VDOT tabloları.</strong> Jack Daniels'ın VDOT sistemi (<em>Daniels' Running Formula</em> kitabından) herhangi bir son yarışı tüm mesafelerde eşdeğerine dönüştürür. Ücretsiz çevrimiçi hesaplayıcılar bunu kullanır.
    </p>
    <p>
      <strong>(3) Laktat eşik temposu.</strong> Yaklaşık 1 saat boyunca maksimum eforla sürdürebileceğiniz tempo, laktat eşiğinizdir. Yarı maraton temposu eşiğe yakındır; maraton temposu eşikten mil başına yaklaşık 15–30 saniye daha yavaştır.
    </p>

    <h2>Adım 2 — tempo stratejinize karar verin</h2>
    <p>
      <strong>Eşit bölünmeler (boyunca aynı tempo):</strong> fiziksel olarak en verimli tempo. Uygulaması zordur çünkü genellikle başlangıçta dinç hissedersiniz ve daha hızlı gitmek istersiniz.
    </p>
    <p>
      <strong>Negatif bölünmeler (ikinci yarı daha hızlı):</strong> çoğu mesafe için altın standart stratejidir. Neredeyse tüm maraton dünya rekorları negatif bölünmelerle koşulur. Hedef tempodan mil başına 5–10 saniye daha yavaş başlayın, hedef tempodan mil başına 5–15 saniye daha hızlı bitirin. İlk 5K'da disiplin gerektirir.
    </p>
    <p>
      <strong>Pozitif bölünmeler (ilk yarı daha hızlı):</strong> plan yapmazsanız varsayılan olarak olan şeydir. Genellikle tükenmeye yol açar. Bir strateji değil, sadece bir başarısızlık modudur.
    </p>
    <p>
      <strong>Yarış günü stratejisi:</strong> negatif bölünme hedefi seçin. Yarışın ilk %5-10'u hedef tempodan mil başına +10 saniye daha yavaş, ortası hedef tempoda, son %20'si hedef tempoda veya gücünüz varsa daha hızlı.
    </p>

    <h2>Adım 3 — yarışı bölümlere ayırın</h2>
    <p>
      Tam mesafeyi düşünmeyin. Antrenmanda daha önce koştuğunuz bölümlere ayırın.
    </p>
    <p>
      <strong>Maraton:</strong> 4 × 10K + 2.2K. Her 10K işaretinde planlanan bölünme sürelerini tutturun. 10K'da 15 saniye yavaşsanız, telafi etmeye çalışmayın; hedef tempoyu koruyun. 30 saniye hızlıysanız, hemen yavaşlayın — daha sonra karşılığını ödeyeceğiniz bir çek bozduruyorsunuz.
    </p>
    <p>
      <strong>Yarı maraton:</strong> kabaca 3 × 7K. İlk 7K: kontrollü, hafif kısıtlama. Orta 7K: hedef tempo. Son 7K: bacaklar izin veriyorsa hedef tempo veya daha hızlı.
    </p>
    <p>
      <strong>10K:</strong> kabaca 3 × 5 dakikalık efor. İlk 5 dakika: başlangıç heyecanına kapılmayın. Orta: ritminizi bulun. Son: son 1-2K'da depoyu boşaltın.
    </p>
    <p>
      <strong>5K:</strong> Hafif bir negatif bölünme işe yarar ancak esas olarak: km 1'den itibaren eşik temposunu koruyun. Zor hissettirecek; amaç bu.
    </p>

    <h2>Parkur ve hava durumu ayarlamaları</h2>
    <p>
      <strong>Tepeler.</strong> Tempoya değil, efora göre gidin. Yokuş yukarı tempo mil başına 15–30 saniye yavaşlar; yokuş aşağı tempo mil başına 10–20 saniye hızlanır. Tepelerde tempoyu korumak için zorlamayın — tükenirsiniz. Yokuş yukarı istikrarlı koşun, yokuş aşağıların size gelmesine izin verin.
    </p>
    <p>
      <strong>Sıcaklık.</strong> 15°C / 60°F üzerinde, her 5.5°C / 10°F artış için mil başına 5–10 saniye daha yavaş bekleyin. 24°C / 75°F'deki bir maraton, aynı kondisyonla 13°C / 55°F'dekinden tipik olarak 2–4 dakika daha yavaştır.
    </p>
    <p>
      <strong>Nem.</strong> Yüksek nem ({'>'}%70), sıcaklık cezasını etkili bir şekilde artırır. Vücudunuz verimli bir şekilde soğuyamaz.
    </p>
    <p>
      <strong>Rüzgar.</strong> Karşı rüzgarlar, 16 km/s / 10 mph rüzgar başına mil başına yaklaşık 5 saniyeye mal olur. Arkadan esen rüzgarlar bunun yaklaşık yarısını geri verir.
    </p>
    <p>
      <strong>Rakım.</strong> 1.200 metre / 4.000 feet üzerinde, kendi rakımınızın üzerindeki her 600 metre / 2.000 feet için tempo beklentisini mil başına 5–10 saniye azaltın, 1.800 metre / 6.000 feet üzerindeki yarışlar için daha fazla.
    </p>

    <h2>Beslenme ve sıvı alımı temposu</h2>
    <p>
      Tempo sadece koşu hızı değildir — zaman içinde kalori ve sıvı alımıdır:
    </p>
    <p>
      <strong>Maraton ve daha uzun:</strong> 30–45 dakikadan başlayarak saatte 30–60g karbonhidrat. İlk yardım istasyonunu atlayın, ondan sonra her birini alın.
    </p>
    <p>
      <strong>Yarı maraton:</strong> alışkınsanız 45 dakikada bir jel; aksi takdirde sadece su.
    </p>
    <p>
      <strong>10K ve daha kısa:</strong> beslenmeye gerek yok; bir yudumdan fazla içmeyin (midede sallanması, sıvı alımının yardım ettiğinden daha fazla yavaşlatır).
    </p>
    <p>
      <strong>Sıvı alımı:</strong> serin bir yarışta, susadığınızda yardım istasyonlarında için. Sıcakta, susamasanız bile her istasyonda için.
    </p>

    <h2>Dinlenme dönemi — unutulan tempo faktörü</h2>
    <p>
      Yarış günü temponuz, dinlenme dönemine bağlı olan yarış günü bacaklarınıza bağlıdır. Yaygın dinlenme dönemi önerileri:
    </p>
    <p>
      <strong>Maraton:</strong> 3 haftalık dinlenme dönemi. 3. hafta: %80 hacim, tam yoğunluk. 2. hafta: %60 hacim. 1. hafta: %40 hacim, çok kısa yarış temposu çalışması.
    </p>
    <p>
      <strong>Yarı maraton:</strong> 10–14 gün. Hacmi %30–40 azaltın ancak biraz yarış temposunda koşun.
    </p>
    <p>
      <strong>10K:</strong> 7–10 gün hafif dinlenme dönemi. Son zorlu antrenmanı 4–5 gün önce yapın.
    </p>
    <p>
      <strong>5K:</strong> 5 gün çok hafif dinlenme dönemi. Son yoğunluğu 3 gün önce yapın.
    </p>
    <p>
      En kötü tempo planı, kötü dinlenme dönemi bacaklarını kurtaramaz; en iyi antrenman, kötü tempoyu kurtaramaz. Her ikisi de önemlidir.
    </p>

    <h2>Zihinsel kontrol noktası taktiği</h2>
    <p>
      Çoğu koşucunun her yarışta işlerin zorlaştığı ve zihnin daha yavaş bir tempo için pazarlık yapmaya başladığı bir noktası vardır. Maratonlarda bu genellikle kilometre 29–35'tir (mil 18–22). Yarı maratonlarda kilometre 14–18 (mil 9–11). 10K'da kilometre 4. Önceden plan yapın: belirli bir mantra, bir şarkı, bir anı, sadece bir sonraki kilometre için tempoyu korumaya yönelik bir ipucu.
    </p>
    <p>
      Kontrol noktasında tempo disiplini, kişisel rekor ile tükenme arasındaki farktır. Kondisyon zaten oradadır; soru, onu uygulayıp uygulamayacağınızdır.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Hedef sürenizi veya temponuzu{" "}
      <a href="/tools/running-pace-calculator">koşu tempo hesaplayıcısına</a> girerek her km veya mil için bölünme sürelerini görün. Yarış günü yakıt ihtiyaçlarınızı tahmin etmek için{" "}
      <a href="/tools/calorie-calculator">kalori hesaplayıcısını</a> ve yarış öncesi interval antrenmanları için{" "}
      <a href="/tools/stopwatch">kronometreyi</a> kullanın.
    </p>
  </>
);