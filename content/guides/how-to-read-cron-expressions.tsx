import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Cron ifadeleri, boşluklarla ayrılmış beş veya altı anlaşılmaz belirteç gibi görünür ve çoğu
      mühendis, bir şey bozulana kadar örnekleri kopyalayıp yapıştırarak bunları öğrenir. Bu, zamanlama
      yanlış saatte çalışana, yaz saati uygulaması geçişini atlayana veya ayın son gününde hem gün hem de haftanın günü
      ayarlandığı için iki kez çalışana kadar sorun değildir. Her alanın ne anlama geldiğini, özel karakterlerin ne işe yaradığını ve klasik
      cron'un Quartz ve Kubernetes varyantlarından nasıl farklılaştığını anlamak, cron'u bir tahmin oyunundan
      hassas bir zamanlama diline dönüştürür. Bu kılavuz, beş alanlı ve altı alanlı
      formatları, <code>*</code>, <code>/</code>, <code>,</code> ve <code>-</code> anlamlarını,
      <code>@daily</code> gibi kısayolları, gün vs. haftanın günü tuzağını, saat dilimi
      yönetimini ve bir ifadenin İngilizce olarak nasıl yüksek sesle okunacağını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Beş alan</h2>
    <p>
      Klasik Unix cron'u soldan sağa beş alana sahiptir: dakika, saat, ayın günü, ay,
      haftanın günü. Her alanın sabit bir değer aralığı vardır.
    </p>
    <pre>{`┌───────────── dakika        (0 - 59)
│ ┌─────────── saat          (0 - 23)
│ │ ┌───────── ayın günü     (1 - 31)
│ │ │ ┌─────── ay            (1 - 12) veya OCA-ARA
│ │ │ │ ┌───── haftanın günü (0 - 6)  veya PAZ-CMT
│ │ │ │ │
* * * * *   çalıştırılacak komut`}</pre>
    <p>
      Her alan varsayılan olarak &ldquo;her&rdquo; (<code>*</code>) anlamına gelir.{" "}
      <code>* * * * *</code> gibi bir ifade her dakika sonsuza kadar çalışır. <code>0 * * * *</code> her saatin
      sıfırıncı dakikasında çalışır. <code>0 0 * * *</code> her gün gece yarısı çalışır.
    </p>

    <h2>Altı alanlı varyant (Quartz)</h2>
    <p>
      Java'nın Quartz zamanlayıcısı ve bazı bulut zamanlayıcıları, başa bir saniye alanı
      ve bazen sona bir yıl alanı ekler. Yani Quartz'da <code>0 0 0 * * *</code> her gün
      gece yarısı çalışır, her dakika değil. Kubernetes CronJobs klasik beş alanı kullanır. Örnekleri
      yapıştırmadan önce sisteminizin hangi varyantı konuştuğunu bilin.
    </p>
    <pre>{`5 alan (Unix):   dakika saat ayın_günü ay haftanın_günü
6 alan (Quartz): saniye dakika saat ayın_günü ay haftanın_günü
7 alan (Quartz): saniye dakika saat ayın_günü ay haftanın_günü yıl`}</pre>

    <h2>Özel karakterler</h2>
    <p>
      <code>*</code> &ldquo;bu alandaki her değer&rdquo; anlamına gelir. <code>,</code> belirli
      değerlerin bir listesini ayırır. <code>-</code> kapsayıcı bir aralığı belirtir. <code>/</code>
      adım anlamına gelir, <code>a/b</code> &ldquo;<em>a</em>'dan başlayarak, her <em>b</em>'de bir&rdquo; şeklindedir.
      Bunlar birleşir: dakika alanında <code>*/15</code> her 15 dakikada bir (0, 15, 30,
      45) anlamına gelir. <code>0,30</code> yalnızca 0 ve 30'da anlamına gelir. <code>9-17</code> 9'dan
      17'ye kadar olan her değer dahil anlamına gelir.
    </p>
    <pre>{`*/15 * * * *      her 15 dakikada bir
0 9-17 * * 1-5    saat başı, 9:00 - 17:00 arası, Pzt-Cum
0 0 1,15 * *      ayın 1'inde ve 15'inde gece yarısı
30 6-22/2 * * *   :30'da, 6:00'dan 22:00'a kadar her 2 saatte bir`}</pre>

    <h2>Kısayol dizeleri</h2>
    <p>
      Çoğu cron uygulaması adlandırılmış kısayolları kabul eder. <code>@yearly</code> (veya
      <code>@annually</code>) = <code>0 0 1 1 *</code>, 1 Ocak gece yarısı.{" "}
      <code>@monthly</code> = <code>0 0 1 * *</code>. <code>@weekly</code> = <code>0 0 * * 0</code>,
      Pazar gece yarısı. <code>@daily</code> (veya <code>@midnight</code>) = <code>0 0 * * *</code>.
      <code>@hourly</code> = <code>0 * * * *</code>. <code>@reboot</code> sistem başlangıcında bir kez
      çalışır (her yerde desteklenmez).
    </p>

    <h2>Ayın günü vs. haftanın günü</h2>
    <p>
      Klasik Unix cron'u bu iki alanı VEYA ilişkisiyle ele alır. Her ikisi de kısıtlanmışsa,
      iş <em>herhangi biri</em> eşleştiğinde çalışır. Bu, insanları sürekli olarak yanıltır.
    </p>
    <pre>{`0 0 15 * 1   ayın 15'inde VEYA her Pazartesi gece yarısı çalışır
             DEĞİL "yalnızca Pazartesi ise ayın 15'inde gece yarısı"

VE (yalnızca Pazartesi olduğunda ayın 15'inde) istiyorsanız, haftanın gününü
betiğinizin içinde kontrol etmelisiniz.`}</pre>
    <p>
      Quartz bunu tersine çevirir: iki alandan biri <code>?</code> olmalıdır (&ldquo;belirli bir
      değer yok&rdquo; anlamına gelir) ve diğeri kullanılan alandır. Lehçenizi bilin.
    </p>

    <h2>Haftanın günü numaralandırması</h2>
    <p>
      Klasik cron'da 0 = Pazar, 6 = Cumartesi, bazen 7 de Pazar olarak kabul edilir.
      Quartz'da 1 = Pazar, 7 = Cumartesi. Bazı sistemlerde 0 = Pazartesi. <code>* * * * 1</code>
      yazıp Salı günü çalıştığını keşfetmeden önce zamanlayıcınızın belgelerini her zaman
      doğrulayın.
    </p>

    <h2>Saat dilimleri</h2>
    <p>
      Klasik cron, sistem saat diliminde çalışır. Sunucunuz UTC ise ancak işin
      Doğu Saati ile 9:00'da çalışmasını istiyorsanız, dönüştürme yapmanız ve yaz saati uygulamasıyla başa çıkmanız gerekir. Modern
      zamanlayıcılar (Kubernetes CronJob <code>spec.timeZone</code>, AWS EventBridge,
      GitHub Actions, Vercel Cron) bir saat dilimini açıkça belirtmenize izin verir ve bu da DST'yi
      otomatik olarak yönetir. Kritik zamanlamalar için, UTC kullanın ve değişen bir yerel saati kabul edin
      veya adlandırılmış bölgeleri destekleyen bir zamanlayıcı kullanın.
    </p>

    <h2>Bir ifadeyi yüksek sesle okumak</h2>
    <p>
      Soldan sağa gidin ve her alanı tanımlayın. <code>*/5 9-17 * * 1-5</code> şu şekilde okunur:
      &ldquo;her 5 dakikada bir, 9:00'dan 17:00'a kadar, ayın her günü, her ay,
      Pazartesi'den Cuma'ya.&rdquo; Bilgi eklemeyen &ldquo;her&rdquo; ifadelerini kısaltın: &ldquo;Pazartesi'den Cuma'ya,
      9:00 ile 17:00 arasında her 5 dakikada bir.&rdquo;
    </p>

    <h2>Yaygın gerçek dünya desenleri</h2>
    <pre>{`0 0 * * *          her gün gece yarısı
0 */6 * * *        her 6 saatte bir
*/5 * * * *        her 5 dakikada bir
0 9 * * 1-5        hafta içi 9:00'da
0 0 1 * *          her ayın ilk günü gece yarısı
0 0 1 1 *          Yılbaşı gece yarısı
15 14 1 * *        her ayın 1'inde 14:15'te
0 22 * * 5         Cumaları 22:00'de
0 0 * * 0          Pazar gece yarısı (haftalık temizlik)`}</pre>

    <h2>Özel uzantılar</h2>
    <p>
      Bazı cron uygulamaları sözdizimini genişletir. <code>L</code> &ldquo;son&rdquo; anlamına gelir
      (ayın son günü, son Cuma). <code>W</code> &ldquo;en yakın hafta içi gün&rdquo; anlamına gelir.
      <code>#</code> bir aydaki belirli bir oluşumu seçer (<code>5#3</code> = üçüncü Cuma).
      Bunlar Quartz uzantılarıdır ve zamanlayıcınızda çalışmayabilir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Ayın günü ve haftanın gününü VE olarak ele almak.</strong> Klasik cron'da, her ikisini de
      ayarlamak VEYA anlamına gelir. <code>0 0 15 * 1</code> ayın 15'inde <em>ve</em> her Pazartesi
      çalışır, &ldquo;yalnızca Pazartesi olan 15. gün&rdquo; değil.
    </p>
    <p>
      <strong>Yanlış zamanlayıcı lehçesini kullanmak.</strong> Quartz varsayılan olarak altı alana sahiptir,
      klasik cron beş alana sahiptir. <code>0 0 0 * * *</code> her birinde farklı anlamlara gelir.
    </p>
    <p>
      <strong>Saat dilimlerini görmezden gelmek.</strong> Üretim sunucunuz UTC ise ve Pazartesi
      9:00 raporunuz yerel saatle 4:00'te çalışıyorsa, ayarlamayı unuttunuz demektir. Çalışma zamanınız
      bölgeleri yönetmediği sürece DST geçişleri de zamanlamaları kaydıracaktır.
    </p>
    <p>
      <strong><code>*/7</code>'nin her 7 dakikada bir çalıştığını varsaymak.</strong> Dakika
      alanında <code>*/7</code>, 0, 7, 14, 21, 28, 35, 42, 49, 56'da çalışır, ardından 0'a geri döner.
      :56 ile :00 arasındaki boşluk yalnızca 4 dakikadır. Adım gösterimi her saat yeniden başlar.
    </p>
    <p>
      <strong>Her dakika uzun süreli bir iş çalıştırmak ve üst üste binmek.</strong> Cron
      üst üste binen çalıştırmaları atlamaz. 2 dakikalık işiniz her dakika planlanmışsa,
      eşzamanlı örnekler birikecektir. Bir kilit dosyası ekleyin veya üst üste binmeyi zorunlu kılan bir
      zamanlayıcı kullanın.
    </p>
    <p>
      <strong><code>@reboot</code>'un evrensel olmadığını unutmak.</strong> Kubernetes
      CronJobs, birçok bulut zamanlayıcısı ve Unix olmayan sistemler bunu desteklemez. Bunun yerine bir
      systemd birimi veya başlangıç betiği kullanın.
    </p>
    <p>
      <strong>Aylık bekleyerek <code>0 0 31 2 *</code> yazmak.</strong> Şubat ayının 31
      günü yoktur, bu nedenle bu asla çalışmaz. Cron sizi uyarmaz; iş sessizce asla ateşlenmez.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir cron ifadesini{" "}
      <a href="/tools/cron-expression-explainer">cron ifade açıklayıcımıza</a> yapıştırarak sonraki
      çalışma zamanlarını ve düz İngilizce bir açıklamayı görün. Yeni bir
      zamanlama yazarken{" "}
      <a href="/tools/cron-expression-builder">cron oluşturucu</a> ile ve UTC cron zamanlamanızın yerel saatte ne anlama geldiğini
      kontrol etmek için <a href="/tools/time-zone-converter">saat dilimi dönüştürücü</a> ile
      eşleştirin.
    </p>
  </>
);