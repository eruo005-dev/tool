import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir fotoğraf kolajı, birden fazla görseli tek bir kompozisyonda birleştirerek bir anı, projeyi veya ürün serisini tek bir görsel hikaye olarak okutur. İyi yapıldığında kolaj ritim, çeşitlilik ve net bir odak noktası getirir; kötü yapıldığında ise dağınık bir karalama defteri sayfasına benzer. İşin sırrı düzendedir: tutarlı boşluklar, düşünülmüş en-boy oranları, tek bir baskın görsel ve gözün fotoğraflar arasında hareket edebilmesi için yeterli nefes alma alanı. Bu rehber, her zaman işe yarayan ızgara desenlerini, karışık kaynak fotoğraflar arasında en-boy oranlarını nasıl dengeleyeceğinizi ve temiz baskı alacak bir çözünürlükte nasıl dışa aktarım yapacağınızı kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Fotoğrafları seçmeden önce bir ızgara seçin</h2>
    <p>
      Önce yapıya karar verin, ardından görselleri buna yerleştirin. &ldquo;12 fotoğrafım var, onları düzenle&rdquo; ile başlamak, 12 küçük kare ve hiyerarşi olmamasıyla sonuçlanmanın yoludur. Yaygın yapılar:
    </p>
    <ul>
      <li><strong>2&nbsp;&times;&nbsp;2 ızgarası:</strong> dört eşit karo. Temiz, demokratik, &ldquo;bir şeyin dört görünümü&rdquo; için çalışır.</li>
      <li><strong>3&nbsp;&times;&nbsp;3 ızgarası:</strong> dokuz eşit karo. Instagram tarzı. Benzer çekimlerden oluşan bir dizi için harika.</li>
      <li><strong>Öne çıkan + küçük resimler:</strong> yanında üç veya dört küçük resim bulunan büyük bir fotoğraf. Net hiyerarşi.</li>
      <li><strong>Dikey şerit:</strong> aynı genişlikte, farklı yüksekliklerde üst üste dizilmiş görseller. &ldquo;Önce/sonra&rdquo; veya sıra için iyidir.</li>
      <li><strong>Mozaik:</strong> birbirine uyan değişken boyutlu karolar. En esnek, dengelemesi en zor olanı.</li>
    </ul>

    <h2>En-boy oranı dengelemesi</h2>
    <p>
      Portre ve manzara fotoğraflarının doğal oranlarında karışımı, temiz bir ızgarayla çatışır. İki çıkış yolu:
    </p>
    <ol>
      <li><strong>Her şeyi tek bir orana kırpın</strong> (genellikle kare veya 4:3). Temiz, öngörülebilir, ancak içerik kaybına neden olur.</li>
      <li><strong>Düzeni doğal oranlara göre tasarlayın.</strong> Portreleri uzun bir sütunda, manzaraları geniş bir satırda, kareleri kendi bloklarında gruplayın.</li>
    </ol>
    <p>
      Tek sayfalık bir poster kolajı için tutarlı kırpma kazanır. Kompozisyonu korumanın önemli olduğu bir hikaye anlatımı düzeni için doğal şekillere uyum sağlayın.
    </p>

    <h2>Boşluk ve dolgu</h2>
    <p>
      Karolar arasındaki boşluk &mdash; genellikle &ldquo;oluk&rdquo; olarak adlandırılır &mdash; hissi kontrol eder. Dar oluklar (4&ndash;8&nbsp;px) birleşik okunur; geniş oluklar (20&ndash;40&nbsp;px) ayrı nesnelerden oluşan bir koleksiyon olarak okunur. Sıfır oluk, tek bir panorama olarak okunur.
    </p>
    <p>
      Dış dolgu (tüm kolajın etrafındaki kenar boşluğu) genellikle iç oluğa eşit veya ondan fazladır. 8&nbsp;px'lik bir iç oluk, 16&nbsp;px'lik dış dolgu ile eşleşir. 20&nbsp;px'lik bir iç oluk, 40&nbsp;px'lik dış dolgu ile eşleşir.
    </p>

    <h2>Arka planlar</h2>
    <p>
      Oluk rengi tasarımın bir parçasıdır. Seçenekler:
    </p>
    <ul>
      <li><strong>Beyaz:</strong> galeri temizliğinde, iyi baskı alır, her fotoğrafla çalışır.</li>
      <li><strong>Siyah:</strong> renkleri canlandırır, ruhlu, kaliteli hissettirir ancak baskısı ağırdır.</li>
      <li><strong>Marka rengi:</strong> kolajı görsel bir kimliğe çeker. Fotoğraflarla çatışmayacak bir orta ton seçin.</li>
      <li><strong>Fotoğraf arka planı:</strong> görsellerden birinin bulanıklaştırılmış, renklendirilmiş versiyonu. Zengin ancak karmaşıklık riski taşır.</li>
    </ul>
    <p>
      Emin değilseniz, baskı için beyazı, ekran için koyu griyi seçin. Ekranda saf siyah, fotoğrafların kendisi koyu değilse sert gelebilir.
    </p>

    <h2>Bir kahraman seçin</h2>
    <p>
      Her iyi kolajda, açıkça yıldız olan bir görsel vardır &mdash; daha büyük, doğal bir odak noktasına (merkez veya üçte bir kuralını takip eden) yerleştirilmiş veya görsel olarak farklı. Bir kahraman olmadan, göz nereye odaklanacağını bilemez ve kolaj düz hissettirir.
    </p>
    <p>
      Mozaik için temel kural: diğerlerinin yaklaşık 2 katı büyüklüğünde bir karo. Öne çıkan düzen için kahraman, tuvalin %50&ndash;60'ını kaplar.
    </p>

    <h2>Renk ve ton uyumu</h2>
    <p>
      Çok farklı renk paletlerine sahip bir kolaj kaotik görünür. Birleştirme seçenekleri:
    </p>
    <ul>
      <li>Tümünü siyah-beyaza dönüştürün.</li>
      <li>Her karoya aynı filtreyi veya ön ayarı uygulayın.</li>
      <li>Zaten aynı paleti paylaşan fotoğrafları seçin (aynı yer, aynı ışık).</li>
      <li>Olukları ve arka planı, birden çok fotoğrafta görünen bir renkle renklendirin.</li>
    </ul>
    <p>
      İnce bir birlik, katı bir eşleştirmeden daha etkilidir. Sadece tüm görsellerde doygunluğu biraz azaltmak bile kolajın koordineli hissettirmesini sağlar.
    </p>

    <h2>Yuvarlak ve kare karolar</h2>
    <p>
      Yuvarlatılmamış kare karolar modern-minimal okunur. Hafif yuvarlatma (4&ndash;8&nbsp;px) dikkat çekmeden yumuşaklık katar. Ağır yuvarlatma (16&ndash;24&nbsp;px) arkadaş canlısı ve uygulama benzeri hissettirir ancak baskı kolajını çizgi film gibi gösterebilir.
    </p>
    <p>
      Dairesel karolar, profil resmi ızgaraları (ekip sayfaları, katkıda bulunan duvarları) için harikadır ancak hikaye kolajları için nadiren doğrudur &mdash; çok fazla kenar kaybolur.
    </p>

    <h2>Altyazılar ve metin</h2>
    <p>
      Kolajın altyazıya ihtiyacı varsa, fotoğrafların üzerine bindirmek yerine onlar için bir şerit ayırın. Her karonun altında bir altyazı bulunan 2&nbsp;&times;&nbsp;2'lik bir ızgara sıkı bir kompozisyon haline gelir; yüzlerin üzerinde yüzen altyazılar gürültüye dönüşür.
    </p>
    <p>
      Altyazı türünü, sayfanın geri kalanının gövde metni boyutunun %60&ndash;75'i kadar basit bir sans-serif olarak ayarlayın. Altyazıları kısa tutun &mdash; her biri bir satır &mdash; aksi takdirde düzeni ele geçiren bir paragrafa dönüşürler.
    </p>

    <h2>Dışa aktarma çözünürlüğü</h2>
    <p>
      Ekran kullanımı için, retina ekranları kapsamak üzere görüntüleme boyutunun iki katında dışa aktarın. 1200&nbsp;px genişliğinde görüntülenecek bir kolaj 2400&nbsp;px olarak dışa aktarılmalıdır.
    </p>
    <p>
      Baskı için, fiziksel boyutun 300&nbsp;DPI'ını kullanın:
    </p>
    <pre>{`4x6 baskı:   1200 x 1800 px
5x7 baskı:   1500 x 2100 px
8x10 baskı:  2400 x 3000 px
11x14 baskı: 3300 x 4200 px`}</pre>
    <p>
      Kaynak fotoğraflar, bu yoğunlukta karolarını dolduracak yeterli çözünürlüğe sahip olmalıdır. Kolajınız 2400&nbsp;px genişliğindeyse ve tek bir karo tuvallerin üçte birini dolduruyorsa, bu karonun en az 800&nbsp;px genişliğinde bir kaynağa ihtiyacı vardır.
    </p>

    <h2>Çıktı için dosya formatı</h2>
    <p>
      Baskı için: Yazıcının JPEG yapaylıklarıyla uğraşmaması için TIFF veya yüksek kaliteli PNG olarak dışa aktarın. Ekran için: Kalite 85&ndash;90 arası JPEG, boyut ve kalite dengesini en iyi şekilde sağlar. Şeffaf alanlar için (nadir ancak mümkün): PNG veya WebP.
    </p>
    <p>
      Daha sonra boşlukları ayarlamak veya bir fotoğrafı sıfırdan yeniden oluşturmadan değiştirmek için her zaman katmanlı bir kaynak (PSD, AFPUB, Figma çerçevesi) kaydedin.
    </p>

    <h2>Doğru fotoğraf sayısını seçme</h2>
    <p>
      Kolaj başına daha fazla fotoğraf daha iyi değildir. İzleyicinin gözü, düzen bir katalog gibi hissettirmeye başlamadan önce yalnızca bir avuç görsele odaklanabilir. Kabaca kılavuz:
    </p>
    <ul>
      <li><strong>2&ndash;3 fotoğraf:</strong> kompakt bir hikaye anlatır, her görsel nefes alacak alana sahiptir.</li>
      <li><strong>4&ndash;6 fotoğraf:</strong> çoğu kolaj için ideal nokta; kahraman artı destekleyici.</li>
      <li><strong>7&ndash;9 fotoğraf:</strong> yalnızca ızgara formatı; tümü eşit statüde.</li>
      <li><strong>10+ fotoğraf:</strong> bir galeri veya mozaik desenine dönüşür; bireysel görseller küçülür.</li>
    </ul>
    <p>
      Paylaşacak 15 harika fotoğrafınız olduğunda, kalabalık bir tane yerine iki ayrı kolaj düşünün. Veya bir ızgara düzeni ve bir lightbox ile gerçek bir galeri gönderin.
    </p>

    <h2>Üçte bir kuralı ve odak akışı</h2>
    <p>
      Çoklu görsel düzenlerinde göz, ima edilen yollar boyunca hareket eder: sol üstten sağ alta (Batı okuma yönü) veya en büyük öğeden dışarı doğru. Daha ilgi çekici bir kompozisyon için kahraman görseli tam ortada değil, üçte bir kuralının kesişim noktasına yerleştirin.
    </p>
    <p>
      Birden çok fotoğrafta yüzler varsa, bakışların tuvalin dışına yönelmemesi için bunları düzenleyin. Sola bakan bir özne, bakışları kompozisyonun geri kalanına doğru gitmesi için düzenin sağ tarafında yer almalıdır.
    </p>

    <h2>Baskı taşması ve güvenli bölgeler</h2>
    <p>
      Ticari yazıcılar, arka planın son kesim çizgisinin ötesine uzandığı bir taşma alanı &mdash; genellikle her tarafta 3&nbsp;mm &mdash; gerektirir. Kolajınızın kenara kadar uzanan fotoğrafları varsa, bunların taşma bölgesine uzanması gerekir, aksi takdirde basılı parçada ince beyaz şeritler oluşur.
    </p>
    <p>
      Tersine, önemli içeriği (yüzler, logolar, metin) kesim çizgisinin en az 3&nbsp;mm içinde &mdash; &ldquo;güvenli bölge&rdquo; &mdash; tutun, böylece küçük kesim farklılıkları onu kırpmaz. Her yazıcı, sipariş ettiğiniz belirli boyut için taşma ve güvenli çizgileri olan bir şablon sağlar.
    </p>

    <h2>Sosyal medya en-boy oranları</h2>
    <p>
      Farklı platformlar, bir kolaj gönderisi için farklı en-boy oranları ister:
    </p>
    <ul>
      <li><strong>Instagram beslemesi:</strong> 1:1 kare (1080&nbsp;&times;&nbsp;1080) veya 4:5 portre (1080&nbsp;&times;&nbsp;1350).</li>
      <li><strong>Instagram Hikayesi / Reels:</strong> 9:16 (1080&nbsp;&times;&nbsp;1920).</li>
      <li><strong>Facebook beslemesi:</strong> 1.91:1 manzara (1200&nbsp;&times;&nbsp;630) veya 4:5 portre.</li>
      <li><strong>Pinterest:</strong> 2:3 portre (1000&nbsp;&times;&nbsp;1500) &mdash; uzun kolajlar daha fazla etkileşim alır.</li>
      <li><strong>Twitter/X:</strong> 16:9 manzara (1200&nbsp;&times;&nbsp;675).</li>
    </ul>
    <p>
      Genel bir tasarımı sığdırmak için kırpmak yerine kolajı platformun tercih ettiği orana göre tasarlayın. Düzenin nefes alma alanı yeterince değişir, bu nedenle yeniden tasarlanmış bir sürüm genellikle önemli ölçüde daha iyi görünür.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Her karoyu aynı boyutta yapmak ve hiçbir şeyin neden öne çıkmadığını merak etmek &mdash; bir kolajın bir kahramana ihtiyacı vardır. Kırpma kuralı olmadan çılgınca farklı oranları karıştırmak, bir karmaşa yaratır. Dış dolgu olmadan tüm tuvali uçtan uca doldurmak, kolajın sıkışık hissettirmesine neden olur ve baskı taşması için güvenli bölge bırakmaz. Altyazıların fotoğraf içeriğiyle, özellikle yüzlerle örtüşmesine izin vermek. Ve baskı günü klasiği: web önizlemesi iyi göründüğü için 72 DPI'da dışa aktarmak, ardından fotoğraf laboratuvarından pikselli bir 4&nbsp;&times;&nbsp;6 almak. Sipariş vermeden önce her zaman nihai piksel boyutlarını baskı boyutuna göre kontrol edin.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/photo-collage">Fotoğraf kolajı aracımız</a>, ızgara seçimi, boşluk, arka planlar ve baskı çözünürlüğünde dışa aktarma işlemlerini tek bir akışta halleder. Kaynak fotoğraflarınızın yerleştirilmeden önce yeniden boyutlandırılması gerekiyorsa, <a href="/tools/image-resizer">görsel yeniden boyutlandırıcı</a> önce onları normalleştirir. Ve tek tek karoların veya tüm kolajın etrafında çerçeveli bir kenarlık istediğinizde, <a href="/tools/image-border-adder">görsel kenarlık ekleyici</a> kompozisyonu tamamlar.
    </p>
  </>
);