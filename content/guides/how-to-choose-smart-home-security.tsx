import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Akıllı ev güvenlik sistemi, ancak aldığı sıkıcı kararlar kadar iyidir &mdash; bulut mu yerel mi, kendin yap mı profesyonel mi ve elektrik kesildiğinde ne olacağı.</p>);

export const body: ReactElement = (
  <>
    <p>Akıllı bir ev güvenlik sistemi seçmek, insanların bir öğleden sonra verip yıllarca pişman olduğu kararlardan biridir. Pazarlama, gerçek ödünleşmeleri gizler &mdash; videonuzun sahibi kim, ikinci yılda aylık faturanız gerçekte ne kadar ve elektrik kesintisinde herhangi bir şey çalışıyor mu? Bu rehber, veri sızdırmadan veya cüzdanınızı boşaltmadan koruyan bir sistem isteyen ev sahipleri, kiracılar ve küçük işletme sahipleri içindir.</p>

    <h2>İlk karar: bulut ve yerel-yalnızca</h2>
    <p>Bulut sistemleri (Ring, Nest, Arlo) videoyu satıcının sunucularına aktarır, kolay mobil erişim sağlar ve abonelik gelirini temel iş modeli haline getirir. Yerel-yalnızca sistemler (UniFi Protect, Synology Surveillance, ev sunucusunda Frigate) görüntüleri mülkünüzde tutar &mdash; aylık ücret yok, izleyen üçüncü taraf yok, ancak daha fazla kurulum gerektirir. Çoğu kişi bulutta kalır; gizliliğe duyarlı kullanıcılar ve müşteri verilerini işleyen küçük işletmeler yerel seçeneği ciddi şekilde düşünmelidir.</p>

    <h2>Kendin yap ve profesyonel kurulum</h2>
    <ul>
      <li>Kendin yap: Ring Alarm, SimpliSafe, Abode, Eufy. Bir öğleden sonra kendi kendine kurulum, 200&ndash;500 dolar donanım, isteğe bağlı izleme.</li>
      <li>Profesyonel kurulum: ADT, Vivint, Brinks. Sözleşme tabanlı (36 ay boyunca ayda 30&ndash;70 dolar), profesyonel kurulum, daha fazla rehberlik ancak ayrılması zor.</li>
      <li>Kendin yap, kiracılara, küçük işletmelere ve esnekliğe değer veren herkese uyar. Profesyonel kurulum, daha büyük mülklere, her şeyi başkasının halletmesini isteyenlere ve sigorta indirimi evraklarıyla ilgilenenlere uyar.</li>
    </ul>

    <h2>Aylık hizmet maliyetleri</h2>
    <p>Bulut video depolama ve temel kendi kendine izleme için ayda 10&ndash;20 dolar bekleyin. Polis/itfaiye yönlendirmeli profesyonel 7/24 izleme ayda 25&ndash;50 dolar arasındadır. Her zaman küçük yazıları okuyun &mdash; bazı bulut planları yalnızca bir kamerayı kapsar ve her ek kamera için tekrar ödeme yaparsınız. Beş yıl içinde, hizmet ücreti genellikle donanımdan daha pahalıya gelir.</p>

    <h2>Temel katmanlar</h2>
    <p>Gerçek bir güvenlik sistemi kameradan daha fazlasına sahiptir. Kapı ve pencere sensörleri giriş noktalarını yakalar, hareket sensörleri iç mekan geçişlerini kapsar, cam kırılma sensörleri en yaygın zorla giriş yöntemini ele alır ve aynı merkeze bağlı duman/CO dedektörleri size 7/24 can güvenliği izlemesi sağlar. Kameralar tek başına tepkiseldir &mdash; alarmı zamanında tetikleyen aslında sensörlerdir.</p>

    <h2>Kameralar nereye gider (ve nereye gitmemelidir)</h2>
    <p>Evet: ön kapı, arka kapı, araba yolu, garaj ve erişimi kapsayan iç mekan ortak odası. Hayır: banyolar, yatak odaları ve komşunun pencerelerine veya karşıdaki kamu yoluna doğrultulmuş. ABD'nin birçok eyaletinde ve Avrupa'nın çoğunda, kamu yürüyüş yollarına doğrultulmuş dış mekan kameraları meşru gizlilik şikayetlerine ve giderek artan şekilde para cezalarına yol açar. Kameraları kendi mülkünüze doğru aşağıya açılı yerleştirin, dışarıya değil.</p>

    <h2>Yaygın hatalar</h2>
    <p>Tekrar tekrar karşımıza çıkan dört hata. Yerel yedekleme yok &mdash; internet kesildiğinde sisteminiz de kesilir. Kameralarda varsayılan şifreler, haftalar içinde herkese açık Shodan aramalarında görünür. Sokağa bakan dış mekan kameraları, komşu anlaşmazlıklarına neden olur. Ve evi satarken yönetici e-postasını değiştirmeyi unutmak, yeni sahibi kalıcı olarak dışarıda bırakır.</p>

    <h2>Elektrik ve internet kesintisine dayanıklılık</h2>
    <p>Alınmaya değer herhangi bir sistemin yedek pili (minimum 24&ndash;48 saat) ve ev internetiniz kesilirse hücresel yedeklemesi vardır. SimpliSafe, Ring Alarm Pro ve çoğu profesyonel sistem her ikisini de içerir. 7 günlük bir kesinti planı şöyle görünür: pil + hücresel yedekli merkez, yerel SD depolamalı en az bir kamera ve gerçek hava riski olan bir yerde yaşıyorsanız güneş enerjisi veya jeneratör seçeneği.</p>

    <h2>Sonuç</h2>
    <p>Gizlilik toleransınıza göre bulut veya yerel seçin, kameralarınızın altına sensörler yerleştirin, aylık ücreti dürüstçe bütçeye koyun ve ihtiyacınız olmadan önce sistemi bir elektrik kesintisine karşı test edin. Güvenlik, sıkıcı ve dayanıklı kurulumdur &mdash; gösterişli olan değil.</p>
  </>
);