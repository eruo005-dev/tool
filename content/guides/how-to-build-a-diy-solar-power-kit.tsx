import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Bir DIY güneş enerjisi kiti, düşündüğünüzden daha ucuzdur &mdash; ve YouTube videolarının itiraf ettiğinden daha fazla iş gerektirir. İşte yanlış parçalara para harcamadan bir kiti nasıl boyutlandıracağınız, özelliklerini belirleyeceğiniz ve kuracağınız.
  </p>
);

export const body: ReactElement = (
  <>
    <p>
      Güneş enerjisi artık niş bir alan değil. 2016'da 2.000 dolara mal olan 400W'lık bir kit bugün 500 dolar ve lityum bataryalar on yılda %80 düştü. İşin püf noktası: çoğu başlangıç kiti eksik boyutlandırılmış, uyumsuz veya mesafe için çok ince kabloyla gönderiliyor. Önce sistemi planlayın, sonra parçaları satın alın.
    </p>

    <h2>Kiti kullanım amacınıza göre eşleştirin</h2>
    <p>
      Gerçekte neye güç vermek istediğinizle başlayın. 100W'lık bir panel ve küçük bir batarya, bir dizüstü bilgisayar, telefonlar ve LED ışıklarını çalıştırır &mdash; hafta sonu kampı için yeterlidir. 100Ah LiFePO4 bataryalı 400W'lık bir kit, küçük bir karavan veya minibüs dönüşümünü (buzdolabı, ışıklar, fanlar, cihaz şarjı) kapsar. 200&ndash;400Ah depolamalı 1.000W'lık bir dizi, küçük bir buzdolabı ve su pompası olan küçük bir kabini çalıştırır. Kesintiler sırasında tüm ev yedeklemesi için 5.000W+ panele ve 10&ndash;20kWh batarya bankasına bakıyorsunuz.
    </p>

    <h2>Temel bileşenler, açıklamalı</h2>
    <ul>
      <li><strong>Paneller:</strong> monokristal varsayılandır &mdash; metrekare başına polikristalden daha verimlidir ve fiyatlar artık neredeyse aynıdır.</li>
      <li><strong>Şarj kontrol cihazı:</strong> MPPT (maksimum güç noktası takibi), daha ucuz PWM ünitelerinden %15&ndash;30 daha fazla enerji çıkarır. 200W'ın üzerindeki her şey için ekstra 50&ndash;150 dolara değer.</li>
      <li><strong>Batarya bankası:</strong> LiFePO4 açık ara kazanandır &mdash; 10+ yıl ömür, %80+ kullanılabilir deşarj derinliği, havalandırma gerektirmez. Kurşun-asit başlangıçta daha ucuzdur ancak zamanla kullanılabilir kWh başına daha pahalıya mal olur.</li>
      <li><strong>İnvertör:</strong> yalnızca saf sinüs dalgası. Modifiye sinüs dalgası hassas elektronikleri bozar ve bazı motorların yüksek sesle uğuldamasına neden olur.</li>
    </ul>

    <h2>Gerçekçi maliyet aralıkları</h2>
    <p>
      Batarya ve invertörlü komple bir 400W kiti, akıllı alışveriş yaparsanız 400&ndash;800 dolara mal olur. 1.000W'lık bir kabin kurulumu, iyi bir LiFePO4 bankası dahil olmak üzere yaklaşık 1.000&ndash;2.000 dolara denk gelir. 10kWh depolamalı 5.000W'lık tüm ev yedekleme sistemi, batarya markası ve invertör kalitesine bağlı olarak 5.000&ndash;15.000 dolar arasındadır. Şebeke bağlantılı sistemler sayaç, ara bağlantı ve genellikle lisanslı bir kurulumcu ekler &mdash; buna göre bütçe yapın.
    </p>

    <h2>Kurulum karmaşıklığı</h2>
    <p>
      Taşınabilir zemin kurulumları tak-çalıştırdır &mdash; aç, bağla, şarj et. Kalıcı çatı montajları flaş, sızdırmazlık ve yapısal değerlendirme gerektirir. Zemin montajları çatı delinmesini önler ancak bahçe alanı kaplar. Şebeke bağlantısı neredeyse her zaman izin, elektrik denetimi ve kamu hizmeti onayı gerektirir. Müstakil bir yapıda şebekeden bağımsız sistem genellikle izinsizdir, ancak varsaymadan önce ilçe yönetmeliğinizi kontrol edin.
    </p>

    <h2>Kablo boyutlandırması amatörlerin para kaybettiği yerdir</h2>
    <p>
      Uzun DC hatları voltajı hızla düşürür. 30A taşıyan 12V'de 30 metrelik bir hat minimum 6 AWG kablo gerektirir; 8 AWG ile daha ileri giderseniz, hasadınızın %10&ndash;15'ini ısı olarak kaybedersiniz. Kablo satın almadan önce bir voltaj düşümü hesaplayıcısı kullanın ve kurulum nemli bir yerdeyse kalaylı deniz kablosu satın alın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Bataryayı eksik boyutlandırmak 1 numaralı pişmanlıktır &mdash; paneller bankayı şarj eder, ancak gece boyunca yüklerinizi asıl çalıştıran bankadır. MC4 konektörlerinde polariteyi ters çevirmek şarj kontrol cihazlarını anında yakar. Mesafe için çok ince kablo çekmek performansı sessizce öldürür. Batarya ile invertör arasında uygun bir sigortayı atlamak, olmayı bekleyen bir yangındır.
    </p>

    <h2>Sonuç</h2>
    <p>
      Gerçek yüklerinize artı %30 marjla boyutlandırın, PWM/kurşun-asit kombinasyonu daha ucuz olsa bile MPPT ve LiFePO4 satın alın ve her şeyi sigortalayın. Kitinizin kendini kaç yılda amorti edeceğini görmek için <a href="/tools/solar-panel-payback-calculator">güneş paneli geri ödeme hesaplayıcımızı</a> kullanın.
    </p>
  </>
);