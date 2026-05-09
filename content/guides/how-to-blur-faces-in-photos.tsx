import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Fotoğraflarda yüzleri bulanıklaştırmak, gazeteciler, blog yazarları, emlakçılar ve kalabalık, çocuk veya izleyici fotoğraflarını çevrimiçi paylaşan herkes için rutin bir gizlilik görevidir. İş kulağa basit gelse de (bir yüzün üzerini karalamak), bunu iyi yapmak, tanınmayı imkansız kılmak için ne kadar bulanıklığın yeterli olduğunu, hangi tekniklerin tersine çevrilebilir olduğunu (ve bu nedenle güvensiz olduğunu) ve aynı karede plaka ve kimlik kartları gibi ekstralarla nasıl başa çıkılacağını bilmeyi gerektirir. Yeniden oluşturulabilen pikselleştirme, çok hafif Gauss bulanıklıkları veya hâlâ bilgi sızdıran sansür kutuları gerçek başarısızlıklardır. Bu kılavuz, güvenli teknikleri, güvensiz olanları ve toplu iş akışlarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Tek kural: bulanıklık geri döndürülemez olmalıdır</h2>
    <p>
      Güvenli olan tek bulanıklık, orijinal bilgiyi yok edendir. Onu yalnızca gizleyen (orijinal piksellerin teorik olarak kurtarılabildiği) herhangi bir teknik, inceleme altında başarısız olur. Bu, aşağıdakileri kapsam dışı bırakır:
    </p>
    <ul>
      <li><strong>Döndürme veya girdap filtreleri</strong> &mdash; ters işlemle tam anlamıyla geri döndürülebilir.</li>
      <li><strong>Zayıf Gauss bulanıklığı</strong> &mdash; AI süper çözünürlük modelleri makul yüzler hayal edebilir.</li>
      <li><strong>Düşük çözünürlüklü pikselleştirme</strong> &mdash; araştırmacılar pikselleştirilmiş metin ve yüzlerin kurtarılmasını göstermiştir.</li>
      <li><strong>Emoji veya çıkartma kaplamaları</strong> &mdash; yalnızca alttaki katman dışa aktarımdan önce düzleştirilmişse güvenlidir; aksi takdirde orijinal dosyada kalır.</li>
    </ul>
    <p>
      Sağlam bir redaksiyon için, düzleştirilmiş bir dışa aktarımda katı siyah çubuklar (veya katı renk dolguları) kurşun geçirmez seçenek olmaya devam eder.
    </p>

    <h2>Gauss bulanıklığı ve pikselleştirme</h2>
    <p>
      <strong>Gauss bulanıklığı</strong> pikselleri yumuşak bir lekeye dönüştürür ve yarıçap ile birlikte ince ayrıntıyı kademeli olarak kaybeder. Organik görünür ve genellikle estetik ilk tercihtir.
    </p>
    <p>
      <strong>Pikselleştirme</strong> (mozaik), piksel bloklarını ortalama renkleriyle değiştirir. Daha hemen "sansürlü" olarak okunur ve gelenek gereği görsel olarak gizlilikle ilişkilendirilir.
    </p>
    <p>
      Her ikisinin de tanınabilirliği yok etmek için agresif olması gerekir. 2&nbsp;px'lik bir Gauss bulanıklığı kozmetiktir, redaktif değildir. Yararlı bir temel kural: en kısa özellik (göz, burun, ağız) bulanıklığın 3-4 "kutusundan" daha azını kaplamalıdır. Karede 40&nbsp;px'lik bir yüz için bu, kabaca 15-20&nbsp;px'lik bir Gauss sigması veya 12-16&nbsp;px'lik bir pikselleştirme blok boyutu anlamına gelir.
    </p>

    <h2>Ne kadar bulanıklık yeterlidir</h2>
    <p>
      İyi bir test: bulanık yüzü, olası kişilerin bulanık olmayan küçük resimlerinin yanında görüntüleyin. Hâlâ güvenilir bir şekilde doğru olanı seçebiliyorsanız, bulanıklık çok zayıftır. Halka açık kullanım için, elinizde sınırsız zaman olsa bile kişiyi güvenle tanımlayamayacağınız bir çıktı istersiniz.
    </p>
    <p>
      Şüpheye düştüğünüzde, bulanıklık yarıçapını ikiye katlayın. Aşırı bulanıklaştırmanın bir maliyeti yoktur; az bulanıklaştırma amacı bozar.
    </p>

    <h2>Yüzler ve etraflarındaki her şey</h2>
    <p>
      Redaksiyon sadece yüzlerle ilgili değildir. Tek bir karede aşağıdakileri gizlemeniz gerekebilir:
    </p>
    <ul>
      <li>Arka plandaki arabalardaki <strong>plakalar</strong>.</li>
      <li>Gizliliğin önemli olduğu emlak fotoğraflarındaki <strong>ev numaraları ve sokak işaretleri</strong>.</li>
      <li>İnsanlarda veya masalarda görünen <strong>rozetler, isim etiketleri, kimlik kartları</strong>.</li>
      <li>Özel bilgileri gösteren <strong>bilgisayar ekranları ve telefon ekranları</strong>.</li>
      <li>Karedeki belgelerdeki <strong>imzalar</strong>.</li>
      <li>Yüz bulanık olsa bile bir kişiyi tanımlayabilecek <strong>dövmeler</strong>.</li>
    </ul>
    <p>
      Yayınlamadan önce karenin her santimetresini tarayın. Bir öğeyi kaçırmanın maliyeti, hiçbir şeyi bulanıklaştırmamakla aynıdır.
    </p>

    <h2>Otomatik yüz algılama</h2>
    <p>
      Modern araçlar, yüzleri otomatik olarak algılayabilir ve her birine bulanıklık uygulayabilir. Kalabalık fotoğrafları veya toplu işleme için bu büyük bir zaman tasarrufudur. Uyarılar:
    </p>
    <ul>
      <li>Algılama, profilleri ve kısmen görünen yüzleri, özellikle arkadan olanları kaçırır.</li>
      <li>Çocukların yüzleri ve standart olmayan açılar daha sık kaçırılır.</li>
      <li>Her çıktıyı incelemelisiniz; dedektöre körü körüne güvenmeyin.</li>
    </ul>
    <p>
      Otomatik algılamayı bir ilk geçiş olarak ele alın. Kaçırılan hedefler için görüntüyü her zaman manuel olarak tarayın.
    </p>

    <h2>Düzleştirin ve yeniden dışa aktarın</h2>
    <p>
      En sinsi hata: Photoshop veya Affinity'de bir filtre katmanı olarak bulanıklık uygulamak, katmanlı dosyayı kaydetmek ve orijinali paylaşmaktır. Orijinal yüz, bulanıklık katmanının altında yaşar ve araca sahip herkes onu ortaya çıkarabilir. Paylaşmadan önce her zaman görüntüyü <strong>düzleştirin</strong> ve tek katmanlı bir formata (JPEG, PNG) aktarın.
    </p>
    <p>
      Aynı kural iPhone Mesajları'ndaki emoji çıkartmaları için de geçerlidir — çıkartma, düzenleme meta verilerinde ayrı bir katmandır ve orijinal kurtarılabilir. Sadece Paylaş'a dokunmayın, "Farklı Kaydet" ile temiz bir JPEG'e aktarın.
    </p>

    <h2>Bulanıklık gücü ön ayarları</h2>
    <p>
      Tipik boyuttaki yüzler için iyi çalışan yaklaşık ayarlar (karede 40-80&nbsp;px'lik bir yüz kullanarak):
    </p>
    <pre>{`Gauss bulanıklığı:        yarıçap 15-25 px, 2-3 geçiş
Pikselleştirme:           blok boyutu 12-20 px
Güçlü pikselleştirme:    blok boyutu 25-40 px
Katı siyah kutu:         yüzün etrafındaki en büyük güvenli kenar boşluğu`}</pre>
    <p>
      Daha büyük yüzler için orantılı olarak ölçeklendirin. 300&nbsp;px'lik bir yüz, karşılaştırılabilir şekilde redaktif olmak için çok daha büyük bir bulanıklığa ihtiyaç duyar.
    </p>

    <h2>Bir klasörü toplu olarak bulanıklaştırma</h2>
    <p>
      Gazetecilik iş akışları için — bir protestodan kalabalık fotoğrafları galerisi veya seyircilerin olduğu 200 emlak fotoğrafı — toplu araçlar, tüm dosyalara otomatik algılama ve aynı bulanıklık ön ayarını uygular. İyi toplu araçlar:
    </p>
    <ul>
      <li>Çalıştırmadan önce her dosya için algılanan yüzlerin önizlemelerini gösterir.</li>
      <li>Algılama hassasiyetini ayarlamanıza izin verir (katı vs. izin verici).</li>
      <li>Manuel düzeltmeleri destekler — dedektörün kaçırdığı bir yüz ekleyin, yanlış pozitifi kaldırın.</li>
      <li>Çıktıları ayrı bir klasöre yazar ve orijinalleri korur.</li>
    </ul>

    <h2>Plaka özellikleri</h2>
    <p>
      Plaka redaksiyonu, yüz redaksiyonundan daha zordur çünkü plakalar küçüktür ve genellikle garip açılardadır. Bir yüzü karıştırmak için yeterince güçlü bir Gauss bulanıklığı, bir plaka üzerinde genellikle çok zayıftır çünkü plaka karakterleri daha yüksek kontrasta sahiptir ve bulanıklık yarıçapı farklı şekilde etkileşir.
    </p>
    <p>
      Plakalar için, yumuşak bir bulanıklıktan ziyade katı bir renk kutusu veya agresif pikselleştirme daha güvenlidir. Plakanın tamamı üzerine 5-10&nbsp;px kenar boşluğu olan bir dikdörtgen çizin ve katı olarak doldurun; güvenlik araştırmalarında plakalar yumuşak bulanıklıklardan kurtarılmıştır.
    </p>

    <h2>Çocuklar ve hassas kişiler</h2>
    <p>
      Kişi bir çocuk, bir protestocu veya kimliğinin belirlenmesi onları riske atabilecek herhangi biri olduğunda, daha ağır redaksiyon yönünde hata yapın. Estetik bulanıklıklar yerine katı siyah veya renkli kutular düşünün. Zarif bir Gauss'tan birkaç saniyelik "stil puanı", yeniden yapılandırma riskine değmez.
    </p>

    <h2>Maskeleme ve yerinde bulanıklaştırma</h2>
    <p>
      İki yaklaşım vardır:
    </p>
    <ul>
      <li><strong>Yerinde bulanıklaştırma:</strong> yüz bölgesindeki pikseller, kendilerinin bulanık bir versiyonuyla değiştirilir. Hızlı ve sezgisel.</li>
      <li><strong>Maskeli kompozit:</strong> tüm görüntünün bulanık bir kopyası, yüz bölgesiyle sınırlı bir maske aracılığıyla üste yerleştirilir. Daha esnektir (maske kenarını yumuşatabilir, bulanıklığı daha sonra ayarlayabilirsiniz).</li>
    </ul>
    <p>
      Kamuya açık yayın için, dışa aktarmadan önce düzleştirirseniz her ikisi de çalışır. Redaksiyonu daha sonra revize edebileceğiniz iş akışları için, maskeli bir kompozit daha affedicidir — kaynak dosyayı yalnızca özel tutun.
    </p>

    <h2>Gizlilik öncelikli iş akışı</h2>
    <p>
      Kamuya açık yayın için fotoğrafları redakte ederken, piksel redaksiyonuna paralel olarak meta veri sızıntılarını en aza indiren bir süreç kullanın:
    </p>
    <ol>
      <li>Orijinalin dokunulmamış kalması için kaynak dosyayı çoğaltın.</li>
      <li>Kopyadan EXIF'i (GPS, zaman damgaları, seri numaraları) kaldırın.</li>
      <li>Yüz/plaka/rozet redaksiyonu uygulayın.</li>
      <li>Tüm katmanları düzleştirin.</li>
      <li>Yeni bir dosya adı altında temiz bir JPEG veya PNG olarak dışa aktarın.</li>
      <li>Kaçırılan redaksiyonlar için çıktıyı görsel olarak inceleyin.</li>
      <li>Kaldırılan hiçbir verinin kalmadığını onaylamak için dışa aktarımı bir EXIF görüntüleyicide açın.</li>
    </ol>
    <p>
      Herhangi bir adımı atlamak bir sızıntı yaratır. Çoğu gizlilik başarısızlığı, teknik başarısızlıklar değil, iş akışı başarısızlıklarıdır.
    </p>

    <h2>Video hususları</h2>
    <p>
      Videoda yüzleri bulanıklaştırmak, fotoğraf sorununun daha katı bir versiyonudur — her kare bulanıklaştırılmalı ve yüz konumları kareler arasında hareket eder. Modern video araçları, hareket takipli redaksiyon sunar: yüzü bir kez işaretleyin, aracın klipte onu takip etmesine izin verin.
    </p>
    <p>
      Manuel kare kare çalışma yalnızca kısa klipler için pratiktir. Birkaç saniyeden uzun herhangi bir şey için bir izleyici kullanın. İzleyicinin yüzü kaybettiği kareleri yakalamak için sonucu her zaman normal hızda ve ağır çekimde tarayın.
    </p>

    <h2>Yasal hususlar ve rıza</h2>
    <p>
      Teknik gizlilik açısının ötesinde, farklı yargı bölgeleri, insanları halka açık yerlerde fotoğraflama, reşit olmayanların görüntülerini yayınlama ve görüntüleri ticari amaçlarla kullanma konusunda farklı kurallara sahiptir. Yüzleri bulanıklaştırmak, bir fotoğrafı otomatik olarak yayınlamak için yasal hale getirmez:
    </p>
    <ul>
      <li>GDPR, bazı durumlarda yeniden tanımlama mümkünse, bulanık görüntüleri bile kişisel veri olarak kabul eder.</li>
      <li>Bazı ülkeler, bulanıklaştırmadan bağımsız olarak rıza gerektirir.</li>
      <li>Kalabalık sahne istisnaları büyük ölçüde değişir.</li>
    </ul>
    <p>
      Ticari yayın veya hassas içerik için bir avukata danışın. Bulanıklaştırma bir araçtır, yasal bir kalkan değildir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Yüzü bulanıklaştırmak ancak kişiyi hâlâ tanımlayan bir isim etiketi, dövme veya tişört sloganı bırakmak. AI'nın tersine çevirebileceği zayıf bir Gauss bulanıklığı kullanmak. Düzleştirilmiş dışa aktarım yerine katmanlı kaynak dosyayı kaydederek orijinali bulanıklığın altında korumak. Manuel inceleme olmadan otomatik algılamaya güvenmek — dedektörler çocukları, profilleri ve küçük arka plan yüzlerini kaçırır. Yansıtıcı yüzeylerin (aynalar, cam kapılar, araba camları) ek tanınabilir görüntüler taşıdığını unutmak. Ve sosyal medya özelliği: platformun yerleşik "yüzü bulanıklaştır" aracını kullanmak ve bazı uygulamalar orijinal pikselleri meta verilerde gönderdiğinde dışa aktarımın temiz olduğuna güvenmek. Düzleştirin, yeniden dışa aktarın, inceleyin.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/image-blur-censor">Görüntü bulanıklaştırma sansür aracımız</a>, otomatik yüz algılama, ayarlanabilir bulanıklık gücü, katı kutu seçeneği sunar ve dışa aktarmadan önce düzleştirir — böylece orijinal asla kurtarılamaz. Redaksiyon sonrası dosya boyutu optimizasyonu için <a href="/tools/image-compressor">görüntü sıkıştırıcı</a> çıktıyı kırpar. Ve konum ve kamera meta verilerini kaldıran son bir gizlilik geçişi için sonucu <a href="/tools/exif-remover">EXIF kaldırıcıdan</a> geçirin.
    </p>
  </>
);