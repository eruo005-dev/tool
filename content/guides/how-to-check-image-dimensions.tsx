import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir görselin tam piksel boyutlarını bilmek, hemen her tasarım ve web iş akışında ilk adımdır: kaynak dosyanın planlanan kullanım için yeterince büyük olup olmadığını doğrulamak, kırpma için en-boy oranını hesaplamak, gerekli DPI değerinde baskı çıktısını kontrol etmek veya gizemli bir şekilde bulanık görünen bir düzeni hata ayıklamak. Çoğu işletim sistemi, sağ tıklama bilgi panelinde boyutları gösterir, ancak özel bir araç toplu işlemler için daha hızlıdır ve verileri en-boy oranı, DPI ve dosya ağırlığı ile birlikte gösterir. Bu kılavuz, boyutların size aslında ne söylediğini, DPI ve piksel sayısının nasıl ilişkili olduğunu ve yaygın web ve baskı hedefleri için hangi boyutları hatırlamanız gerektiğini açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Genişlik ve yükseklik gerçekte ne anlama geliyor</h2>
    <p>
      Genişlik ve yükseklik, görseli bir piksel ızgarası olarak tanımlar. 1920&nbsp;&times;&nbsp;1080 bir dosyada 1920 sütun ve 1080 satır bulunur, toplamda 2.073.600 piksel &mdash; yani 2 megapikselin biraz üzeri. Bu ızgara ham veridir; görselin yazdırıldığında veya ekranda görüntülendiğinde ne kadar büyük görüneceği hakkında hiçbir şey söylemez.
    </p>
    <p>
      Görebileceğiniz diğer tüm sayılar &mdash; inç, santimetre, punto, DPI &mdash; piksel ızgarasından ve varsayılan veya bildirilen bir çıktı boyutundan türetilir.
    </p>

    <h2>Boyutlardan en-boy oranı</h2>
    <p>
      Genişliği yüksekliğe bölün, sadeleştirin ve en-boy oranını elde edersiniz. 1920/1080, 16:9'a sadeleşir. 1200/800, 3:2'ye sadeleşir. En-boy oranını bilmek önemlidir çünkü görselin kırpma veya posta kutusu görünümü olmadan hedef bir çerçeveye sığıp sığamayacağını belirler.
    </p>
    <p>
      Bir bakışta tanınması gereken yaygın oranlar:
    </p>
    <ul>
      <li><strong>1:1</strong> &mdash; kare, Instagram akışı, profil avatarları.</li>
      <li><strong>4:3</strong> &mdash; klasik dijital kamera, eski monitörler, sunumlar.</li>
      <li><strong>3:2</strong> &mdash; 35mm film, DSLR'ler, standart baskılar.</li>
      <li><strong>16:9</strong> &mdash; HD video, YouTube küçük resimleri, modern dizüstü bilgisayar ekranları.</li>
      <li><strong>9:16</strong> &mdash; dikey video, Hikayeler, Reels, TikTok.</li>
      <li><strong>21:9</strong> &mdash; ultra geniş sinema, kahraman banner'ları.</li>
    </ul>

    <h2>Pikseller, DPI ve fiziksel boyut arasındaki ilişki</h2>
    <p>
      İnç başına piksel (PPI, genellikle gevşek bir şekilde DPI olarak adlandırılır), piksel ızgarası ile fiziksel boyut arasında dönüşüm yapar. 300 PPI'da 3000&nbsp;&times;&nbsp;2000 bir görsel, 10&nbsp;&times;&nbsp;6,67 inç olarak temiz bir şekilde basılır. Aynı dosya 72 PPI'da 41,67&nbsp;&times;&nbsp;27,78 inç olarak "basılır" ancak pikselli görünecektir.
    </p>
    <p>
      Ekran görüntüleme için DPI meta verileri neredeyse her zaman yok sayılır: tarayıcılar ve ekranlar, bildirilen inçlerle değil, piksellerle ilgilenir. Görseli yeniden örneklemeden PPI etiketini özgürce değiştirebilirsiniz; yalnızca baskı boyutu iddiası değişir, tek bir piksel veri değişmez.
    </p>

    <h2>Meta verileri okuma: belirtilen ile gerçek arasındaki fark</h2>
    <p>
      Bir dosyanın başlığı istediği boyutları iddia edebilir; iyi bir denetleyici gerçek piksel ızgarasını ölçer. Bazen meta verilerin gerçeklikle uyuşmadığı dosyalar bulursunuz &mdash; genellikle bir araç pikselleri yeniden boyutlandırdığı halde başlığı güncellemeyi unuttuğu için veya tam tersi. Gerçek piksel sayısına güvenin.
    </p>
    <p>
      Araçlar tipik olarak ayrıca şunları da gösterir: dosya boyutu KB/MB cinsinden, renk derinliği (8-bit, 16-bit), renk uzayı (sRGB, Adobe RGB, Display P3) ve şeffaflık bayrağı (PNG alfa kanalı).
    </p>

    <h2>Yaygın kullanımlar için minimum boyutlar</h2>
    <ul>
      <li><strong>Instagram akış gönderisi:</strong> en az 1080&nbsp;&times;&nbsp;1080.</li>
      <li><strong>Instagram hikayesi/Reel:</strong> 1080&nbsp;&times;&nbsp;1920.</li>
      <li><strong>YouTube küçük resmi:</strong> minimum 1280&nbsp;&times;&nbsp;720, önerilen 1920&nbsp;&times;&nbsp;1080.</li>
      <li><strong>Facebook bağlantı önizlemesi:</strong> 1200&nbsp;&times;&nbsp;630.</li>
      <li><strong>Twitter/X akış içi fotoğraf:</strong> 1200&nbsp;&times;&nbsp;675.</li>
      <li><strong>LinkedIn gönderi görseli:</strong> 1200&nbsp;&times;&nbsp;627.</li>
      <li><strong>Blog kahraman banner'ı:</strong> 1920&nbsp;&times;&nbsp;1080 çoğu düzende işe yarar.</li>
    </ul>
    <p>
      Bunları aklınızda tutmak, tasarımcılarla yüzlerce gidiş gelişi kurtarır.
    </p>

    <h2>Baskıya hazır boyutlar</h2>
    <p>
      300 PPI baskı için &mdash; fotoğraf baskıları, kartvizitler ve çoğu profesyonel baskı işi için standart &mdash; minimum piksel boyutlarını elde etmek için inçleri 300 ile çarpın:
    </p>
    <pre>{`4x6 baskı:    1200 x 1800 px
5x7 baskı:    1500 x 2100 px
8x10 baskı:   2400 x 3000 px
11x17 poster: 3300 x 5100 px
Kartvizit (3.5x2): 1050 x 600 px`}</pre>
    <p>
      Gazeteler, daha pürüzlü kağıt kalitesi nedeniyle 150&ndash;200 PPI'ı kabul eder; büyük formatlı banner'lar, onları uzaktan görüntülediğiniz için 100 PPI veya daha azını tolere eder.
    </p>

    <h2>İzleme mesafesi ve algılanan keskinlik</h2>
    <p>
      DPI gereksinimleri normal okuma mesafesini varsayar (baskı için yaklaşık 12&nbsp;inç / 30&nbsp;cm, telefon için bir kol mesafesi). 20 DPI'da basılmış bir otoyol reklam panosu 100 metrede net görünür. 300 DPI'da basılmış bir ürün kutusu 1 metrede net görünür. Temel kural: izleme mesafesi her iki katına çıktığında DPI'ı yarıya indirin.
    </p>
    <p>
      Bu nedenle boyutlar tek başına kaliteyi belirlemez; kullanım bağlamı belirler.
    </p>

    <h2>Duyarlı web boyutlandırması</h2>
    <p>
      Web görselleri için doğru piksel boyutları, CSS işlenmiş genişliğine ve cihaz piksel oranına bağlıdır. Bir CSS pikseli, DPR-2 bir cihazda 400 genişliğindeyse, 800 donanım pikseli kaynağa ihtiyacınız vardır. Orijinalin boyutlarını kontrol etmek, retina ekranlar için ne kadar yukarı ölçekleme &mdash; varsa &mdash; yapmak zorunda kalacağınızı söyler.
    </p>
    <p>
      Hızlı bir denetim: kahraman görselinizin içsel genişliğini alın, boyanmış CSS genişliğine bölün ve oran 2'nin altındaysa retina kullanıcılarına yumuşak görseller sunuyorsunuz demektir.
    </p>

    <h2>Boyutlar SEO için neden önemlidir</h2>
    <p>
      Arama motorları, görsel dizinleri oluşturmak ve bir görselin gösterilmeye değer olup olmadığını tespit etmek için içsel boyutları ayrıştırır. Çok küçük görseller (yaklaşık 300&nbsp;&times;&nbsp;200'ün altı) genellikle tamamen atlanır. Asla yeniden boyutlandırılmayan çok büyük görseller, sayfa hızına karşı bir sıralama sinyali olabilir.
    </p>
    <p>
      HTML'de <code>width</code> ve <code>height</code> niteliklerini bildirmek ayrıca, <a href="/learn/core-web-vitals">Core Web Vitals</a> metriği olan düzen kaymasını da önler. Bu değerler, kaynak dosyanın içsel boyutlarıyla eşleşmelidir.
    </p>

    <h2>Aynı anda birden çok dosyayı kontrol etme</h2>
    <p>
      Bir yükleme klasörünü denetlerken, toplu boyut denetleyicisi, dosya adı, genişlik, yükseklik, en-boy oranı, DPI ve dosya boyutunu içeren bir tablo üretir. Kahraman kullanımı için çok küçük görselleri bulmak için en küçük yüksekliğe göre sıralayın; şişkinliği bulmak için dosya boyutuna göre sıralayın; sabit bir düzene sığmayacak herhangi bir şeyi bulmak için en-boy oranına göre filtreleyin. Haftalık tempoda aynı rapor, içerik yönergelerinizden kaçan yüklemeleri yakalamak için harika bir yoldur.
    </p>

    <h2>Farklı platformlarda boyutları okuma</h2>
    <p>
      Bir araç açmadan tek bir dosyayı kontrol etmenin hızlı yolları:
    </p>
    <ul>
      <li><strong>macOS Finder:</strong> bir dosya seçin, Quick Look için boşluk tuşuna basın; boyutlarla birlikte tam Bilgi için Cmd+I tuşlarına basın.</li>
      <li><strong>Windows Explorer:</strong> sağ tıklayın, Özellikler, Ayrıntılar sekmesi genişlik ve yüksekliği gösterir.</li>
      <li><strong>Linux:</strong> terminalden <code>file image.jpg</code> veya <code>identify image.jpg</code> (ImageMagick).</li>
      <li><strong>Web tarayıcısı:</strong> yüklenmiş bir sayfadaki herhangi bir görsele sağ tıklayın ve "İncele"yi seçin &mdash; Geliştirici Araçları, işlenmiş ve içsel boyutu gösterir.</li>
    </ul>
    <p>
      Özel araçlar, boyutların yanında en-boy oranı, DPI ve renk profiline ihtiyacınız olduğunda veya bir toplu işlem yapıyorsanız kullanışlı hale gelir.
    </p>

    <h2>Megapikseller ve sayının gerçekte ne anlama geldiği</h2>
    <p>
      Megapiksel (MP), sadece genişlik&nbsp;&times;&nbsp;yüksekliğin bir milyona bölünmesidir. 24&nbsp;MP'lik bir kamera, 6000&nbsp;&times;&nbsp;4000 görseller üretir. Başlıktaki sayı, belirli bir DPI'da maksimum baskı boyutunu söyler ancak sensör kalitesi, lens keskinliği veya düşük ışık performansı hakkında hiçbir şey söylemez. 12&nbsp;MP'lik bir iPhone fotoğrafı, diğer faktörler baskın olduğu için genellikle ucuz bir kameradan 48&nbsp;MP'lik bir fotoğraftan daha iyi görünür.
    </p>
    <p>
      Web için 4&ndash;8&nbsp;MP'nin üzerindeki her şey fazlalıktır. Baskı için 12&ndash;16&nbsp;MP, 300 DPI'da 11&nbsp;&times;&nbsp;14 inç'e kadar rahatça kapsar.
    </p>

    <h2>HTML'de boyutları bildirme</h2>
    <p>
      CSS onları yeniden boyutlandıracak olsa bile, <code>&lt;img&gt;</code> öğelerinde her zaman <code>width</code> ve <code>height</code> niteliklerini ekleyin. Nitelikler, tarayıcıya içsel en-boy oranını söyler, böylece görsel yüklenmeden önce doğru kutuyu ayırabilir ve düzen kaymasını önleyebilir:
    </p>
    <pre>{`<img
  src="/hero.jpg"
  width="1200"
  height="630"
  alt="Ekip fotoğrafı"
/>`}</pre>
    <p>
      Sayılar, kaynak dosyanın gerçek piksel boyutlarıyla eşleşmelidir. CSS yine de işlenen boyutu belirleyecektir; nitelikler yalnızca oranı iletir.
    </p>

    <h2>Üretimde boyut uyuşmazlıkları</h2>
    <p>
      Bir boyut sorununa kadar uzanan yaygın belirtiler:
    </p>
    <ul>
      <li><strong>Retina ekranlarda bulanık kahraman görseli:</strong> kaynak içsel genişlik, CSS boyalı genişliğe çok yakın.</li>
      <li><strong>Görünür düzen kayması:</strong> eksik <code>width</code> ve <code>height</code> nitelikleri, tarayıcıyı görsel yüklendikten sonra yeniden akışa zorlar.</li>
      <li><strong>Sıkıştırılmış veya gerilmiş avatar:</strong> kaynak kare değil ancak CSS, <code>object-fit: cover</code> olmadan 1:1 bir kapsayıcıyı zorlar.</li>
      <li><strong>Yavaş ürün ızgarası:</strong> orijinaller 4000&nbsp;px genişliğinde, 300&nbsp;px boyayan kutucuklara teslim edilir.</li>
    </ul>
    <p>
      İçsel boyutları (dosyanın ne olduğu) işlenmiş boyutlarla (tarayıcının ne boyadığı) karşılaştırarak hata ayıklayın. Geliştirici Araçları Ağ paneli her ikisini de gösterir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      DPI'ı piksel sayısıyla karıştırmak: Preview'da bir JPEG'in DPI etiketini 72'den 300'e değiştirmek tek bir piksel eklemez &mdash; sadece dosyayı yeniden etiketler. Görsel, fiilen yeniden örneklemediğiniz sürece daha keskin basılmayacaktır. Diğer bir yaygın hata: macOS Retina ekranlarındaki araçlar tarafından bildirilen, bazen mantıksal (CSS) pikselleri ve bazen donanım piksellerini gösteren ekran görüntüsü boyutlarına güvenmek. Emin olmak için diskteki gerçek dosyayı doğrulayın. Son olarak, yatay 1920&nbsp;&times;&nbsp;1080 ile dikey 1080&nbsp;&times;&nbsp;1920'yi, uyuşmayan yönü sessizce kırpan bir platforma yüklerken karıştırmak &mdash; her zaman önce platformun hangi boyutu istediğini kontrol edin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir dosyayı <a href="/tools/image-dimensions-checker">görsel boyut denetleyicimize</a> bırakarak piksel genişliği, yüksekliği, en-boy oranı, DPI ve dosya boyutunu tek bir görünümde alın. Boyutlar hedefiniz için yanlış olduğunda, <a href="/tools/image-resizer">görsel yeniden boyutlandırıcı</a> çözümdür. Belirli bir genişlik ve yüksekliğin bir düzen oranına sığıp sığamayacağını hesaplamak için <a href="/tools/aspect-ratio-calculator">en-boy oranı hesaplayıcısı</a> anında matematiği yapar.
    </p>
  </>
);