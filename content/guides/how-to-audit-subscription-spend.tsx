import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Abonelik harcamaları, kişisel bütçelerin sessiz katilidir. Aylık 9,99 dolarlık bir hizmet masum görünür—ta ki on iki tanesini biriktirene kadar. Bunlara <a href="/learn/stream">streaming</a>, bulut depolama, fitness uygulamaları, haber bültenleri ve unuttuğunuz o fantazi futbol ligi dahildir. Üç aylık bir denetim, her yinelenen ücreti ortaya çıkarır, gerçek yıllık maliyeti hesaplamanızı sağlar ve bugün sıfırdan satın almayacağınız her şeyi iptal etmenize yardımcı olur. Çoğu kişi bu alıştırmayı ilk kez yaptığında yinelenen harcamalarında %20-40 oranında bir azalma görür. Bu rehber, tüm iş akışını—hesap özetlerini çekmekten temiz bir şekilde iptal etmeye kadar—hafta sonu süren bir projeye dönüştürmeden adım adım anlatır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Üç aylık denetimler neden yıllık denetimlerden daha iyidir</h2>
    <p>
      Yıllık incelemeler çok şey kaçırır. Şubat ayında başlatılan ücretsiz bir deneme Mart ayında ücretliye dönüşür ve yalnızca Aralık ayında denetim yaparsanız, varlığını unuttuğunuz bir şey için on ay ödemiş olursunuz. 90 günlük bir döngü, denemeden ücretliye geçişleri, fiyat artışlarını ve çifte faturalandırmayı birikmeden yakalar. Denetimi yinelenen bir takvim etkinliğine (Ocak, Nisan, Temmuz, Ekim aylarının ilk cumartesisi) koyun ve dişçi randevusu gibi davranın.
    </p>

    <h2>Adım 1: Her yinelenen ücreti çekin</h2>
    <p>
      Son 90 günlük banka ve kredi kartı hesap özetlerinizi açın. Aylık veya yıllık görünen ücretleri arayın: streaming, SaaS, spor salonu, bulut yedekleme, sigorta, üyelikler, haber siteleri, alan adları ve uygulama mağazası paketleri. Apple veya Google üzerinden faturalanan <strong>uygulama mağazası aboneliklerini</strong> unutmayın—bunlar tek bir satır öğesi içinde saklanır ve genellikle dört veya beş ayrı uygulama içerir.
    </p>
    <ul>
      <li>Kredi kartı portalları &mdash; çoğunda artık &ldquo;yinelenen ücretler&rdquo; filtresi var</li>
      <li>Apple ID &rarr; Abonelikler</li>
      <li>Google Play &rarr; Ödemeler ve abonelikler</li>
      <li>PayPal &rarr; Otomatik ödemeler</li>
      <li>E-postanız &mdash; &ldquo;makbuz&rdquo; ve &ldquo;yenileme&rdquo; için arama yapın</li>
    </ul>

    <h2>Adım 2: Her şeyi yıllıklandırın</h2>
    <p>
      Aylık fiyatlandırma psikolojik bir el çabukluğudur. Aylık 14,99 dolarlık bir hizmet yılda 179,88 dolara mal olur. Bunlardan beş tane biriktirin ve eğlenceli bir şey satın almadan 900 dolara ulaşırsınız. Her aylık ücreti 12 ile, her haftalık ücreti 52 ile çarpın. Ardından listeyi yıllık maliyete göre azalan şekilde sıralayın—ilk üçte birlik kısım genellikle sürprizlerin olduğu yerdir.
    </p>
    <pre>{`aylık * 12 = yıllık
haftalık * 52 = yıllık
üç aylık * 4 = yıllık
iki yıllık / 2 = yıllık`}</pre>

    <h2>Adım 3: Her birine 0'dan 10'a kadar puan verin</h2>
    <p>
      Her aboneliğin yanına, içgüdüsel bir puan yazın: bu size son 90 günde ne kadar değer kattı? <strong>4 veya altı</strong> puan alan her şey iptal adayıdır. 5-7 puanları &ldquo;düşür veya duraklat&rdquo; adaylarıdır. Yalnızca 8+ puanlar otomatik yenilemeyi hak eder.
    </p>

    <h2>Adım 4: Unutulan deneme tuzağı</h2>
    <p>
      Ücretsiz denemeler, unutkanlık yoluyla dönüşüm sağlamak için tasarlanmıştır. Bir denemeye başlar başlamaz, bitiminden <em>iki gün önce</em> bir takvim hatırlatıcısı ayarlayın. Daha da iyisi: yenileme girişiminin başarısız olması için harcama limiti olan bir sanal kart numarası kullanın. Halihazırda dönüşmüş bir deneme bulursanız, şartları kontrol edin—birçok sağlayıcı, 7-14 gün içinde iptal edip kibarca sorarsanız son ücreti iade edecektir.
    </p>

    <h2>Adım 5: Aile ve paket planlarla birleştirin</h2>
    <p>
      Aile planları, en yüksek kaldıraçlı tek hamledir. Dört kişiye bölünmüş 17,99 dolarlık bir aile müzik planı kişi başı 4,50 dolar—bireysel ücretin yarısından az. Hane halkınız için aynı denetimi yapın ve şunları arayın:
    </p>
    <ul>
      <li>Müzik ve video streaming aile kademeleri</li>
      <li>Bulut depolama aile paylaşımları (iCloud, Google One)</li>
      <li>Parola yöneticisi aile planları (genellikle 2 bireyselden daha ucuz)</li>
      <li>Çok kuşaklı ortak depo kulübü üyelikleri</li>
      <li>Paket fırsatları (streaming + kablosuz, internet + TV)</li>
    </ul>

    <h2>Adım 6: İptal iş akışını uygulayın</h2>
    <p>
      İptal kullanıcı deneyimi, doğası gereği çekişmelidir. 30 dakika ayırın, bir liste yapın ve sırayla üzerinde çalışın. Her biri için:
    </p>
    <ul>
      <li>İptal onayının ekran görüntüsünü alın</li>
      <li>Onay e-postasını kaydedin</li>
      <li>Mümkünse dosyadaki kartı kaldırın</li>
      <li>Bir sonraki fatura tarihini not edin—&ldquo;sürpriz&rdquo; bir son ücrete dikkat edin</li>
    </ul>
    <p>
      Bir hizmet iptal düğmesini gizlerse, <code>[hizmet adı] abonelik iptal</code> araması genellikle tam yolu ortaya çıkarır. ABD federal kurallarına göre, şirketler iptal taleplerini yerine getirmek zorundadır—bir &ldquo;elde tutma teklifi&rdquo; yanıt verme zorunluluğu değildir.
    </p>

    <h2>Adım 7: Kalanlar için pazarlık yapın</h2>
    <p>
      Denetimden sağ çıkan abonelikler için, sohbette 10 dakika harcamak genellikle elde tutma teklifleri yoluyla %20-30 indirim sağlar. Anahtar ifadeler: &ldquo;İptal etmeyi düşünüyorum,&rdquo; &ldquo;Daha iyi bir fırsat görüyorum,&rdquo; &ldquo;Hangi sadakat teklifleriniz var.&rdquo; Sigorta, kablosuz ve kablolu TV özellikle iyi yanıt verir.
    </p>

    <h2>Adım 8: Bir abonelik defteri oluşturun</h2>
    <p>
      Basit bir elektronik tablo tutun: hizmet, kategori, aylık maliyet, yıllık maliyet, yenileme tarihi, puan, notlar. Her üç ayda bir güncelleyin. Bir yıl içinde desenler göreceksiniz—hangi kategoriler büyüyor, hangi denemeler dönüştü, hangi fiyat artışları sizi atlattı. Bu defter, tüm denetimin en değerli tek çıktısıdır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Üç desen sürekli olarak ortaya çıkar. Birincisi, yalnızca büyük markaları denetlerken 3-5 dolarlık ücretleri görmezden gelmek—bunlardan bir düzinesi yılda 700 dolara ulaşır. İkincisi, yazılı onay olmadan sözlü olarak iptal etmek ve hala fatura almak. Üçüncüsü, bir hizmeti iptal ettikten sonra verileri yedeklemeyi unutmak—bulut depolama, fotoğraf kitaplıkları ve not uygulamaları, hesap kapanmadan önce dışa aktarma gerektirir.
    </p>

    <h2>Denetim kontrol listesi</h2>
    <ul>
      <li>Son 90 günlük hesap özetlerini toplayın</li>
      <li>Her yinelenen ücreti belirleyin</li>
      <li>Her birini yıllıklandırın</li>
      <li>0-10 arası bir değer puanı atayın</li>
      <li>4 veya altı puan alan her şeyi iptal edin</li>
      <li>5-7 puanlarını düşürün veya duraklatın</li>
      <li>Kalanlar için pazarlık yapın</li>
      <li>Bir abonelik defteri oluşturun</li>
      <li>Bir sonraki denetim için takvim hatırlatıcısı ayarlayın</li>
    </ul>
  </>
);