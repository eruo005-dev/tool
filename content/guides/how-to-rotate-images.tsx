import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir resmi döndürmek, yan dönmüş bir telefon fotoğrafını düzeltmeye çalışana ya da her döndürdüğünüzde kalite kaybeden bir JPEG ile uğraşana kadar basit görünür. Modern sorunlar, EXIF yönlendirme etiketleri (uygulamalara bir fotoğrafın nasıl görüntüleneceğini söyleyen görünmez meta veriler) ile kayıpsız ve yeniden kodlanmış döndürme arasındaki farktır. İkisini de doğru yaparsanız, yüzlerce tarama veya telefon fotoğrafını bozulma izi olmadan toplu olarak döndürebilirsiniz. Bu kılavuz, vakaların %95'ini kapsayan 90/180/270° döndürmeleri, kapsamayan rastgele açılı döndürmeleri ve EXIF yönlendirme sorunlarını kesin olarak nasıl tespit edip düzelteceğinizi ele alır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Önemli olan üç döndürme</h2>
    <p>
      Döndürme ihtiyaçlarının yüzde doksan beşi saat yönünde 90°, saat yönünün tersine 90° veya 180°'dir. Bunlar, JPEG'lerde kayıpsız olarak yapılabilen tek döndürmelerdir ve "bunu yan çektim" ve "bu tarama ters" senaryolarının her birini halleder. Kullanmaya değer herhangi bir araç, bunları tek tıklamalı düğmeler olarak sunar.
    </p>
    <p>
      Rastgele açılar (ufku düzeltmek için 7°, bir belge taramasını düzeltmek için 3°) farklı bir konudur. Her zaman yeniden örnekleme gerektirirler, bu da yeniden kodlama anlamına gelir ve JPEG'lerde kalite kaybı demektir.
    </p>

    <h2>EXIF yönlendirme: görünmez döndürme</h2>
    <p>
      Telefonlar, cihazı çevirdiğinizde sensör verilerini fiziksel olarak döndürmez. Bunun yerine, "bunu saat yönünde 90° döndürülmüş olarak görüntüle" (veya sola veya ters) diyen bir <strong>Yönlendirme</strong> EXIF etiketi yazarlar. Fotoğraf uygulamaları etiketi okur ve anında döndürür; basit araçlar bunu görmezden gelir ve resmi yan gösterir.
    </p>
    <p>
      EXIF Yönlendirme etiketinin sekiz olası değeri:
    </p>
    <pre>{`1 = Normal
2 = Yatay ayna
3 = 180 döndür
4 = Dikey ayna
5 = Yatay ayna + saat yönünde 270 döndür
6 = Saat yönünde 90 döndür
7 = Yatay ayna + saat yönünde 90 döndür
8 = Saat yönünde 270 döndür`}</pre>
    <p>
      Değer 6, ünlü "portre iPhone fotoğrafı" durumudur. Piksel arabelleği manzaradır; etiket, görüntüleme için onu dik hale getirir.
    </p>

    <h2>Web'de neden yan fotoğraflar oluşur</h2>
    <p>
      Tarayıcılar (tüm modern olanlar) artık <code>&lt;img&gt;</code> etiketlerini işlerken EXIF yönlendirmesine saygı duyar. Ancak görüntü, sunucu tarafında yeniden boyutlandırma, küçük resim oluşturucu veya eski işlem hatlarına sahip CSS <code>background-image</code> üzerinden geçtiğinde, etiket kaybolabilir veya yok sayılabilir. Sonuçta, piksel arabelleği ham manzara biçiminde kalır ve yan görüntülenir.
    </p>
    <p>
      Kalıcı çözüm, döndürmeyi <em>pişirmektir</em>: pikselleri fiziksel olarak döndürün ve Yönlendirme etiketini kaldırın. Ardından gelen her araç, dik bir görüntü görür ve tartışılacak bir şey kalmaz.
    </p>

    <h2>Kayıpsız ve yeniden kodlanmış döndürme</h2>
    <p>
      JPEG, pikselleri MCU adı verilen 8×8 veya 16×16 bloklar halinde depolar. 90, 180 veya 270° döndürme, blokları ham piksellere geri kodlamadan yeniden düzenler; matematik işe yarar çünkü 90°'lik bir dönüş, blok ızgarasını yeniden indeksler. Buna <em>kayıpsız döndürme</em> denir ve iyi bir araçla bir JPEG'i 90° döndürmenin neden bayt olarak aynı kalitede bir görüntü ürettiğini açıklar.
    </p>
    <p>
      Diğer herhangi bir açı veya safça kod çözüp döndürüp yeniden kodlayan herhangi bir araç, size bir sıkıştırma nesli kaybettirir. Üç veya dört döngüden sonra görünür bozulmalar göreceksiniz.
    </p>

    <h2>PNG, WebP ve diğer biçimler</h2>
    <p>
      PNG, WebP (kayıpsız), AVIF (kayıpsız) ve TIFF, JPEG değildir ve MCU hizalama kısıtlamasına sahip değildir. Kodlayıcı/kod çözücü kayıpsız olduğu için döndürme her zaman piksel mükemmeldir. İstediğiniz açıda, istediğiniz sıklıkta kalite kaybı olmadan döndürebilirsiniz; yalnızca dosya boyutu değişir ve o da çok az.
    </p>
    <p>
      Kayıplı WebP ve kayıplı AVIF, JPEG gibi davranır: gerçek bir kayıpsız 90° yolu vardır, ancak yalnızca araç bunu kullanırsa.
    </p>

    <h2>Rastgele açılı döndürme ve genişleyen tuval</h2>
    <p>
      Örneğin ufku düzeltmek için 7° döndürdüğünüzde, döndürülmüş dikdörtgen artık orijinal sınırlayıcı kutusuna sığmaz. Araçlar üç seçenek sunar:
    </p>
    <ul>
      <li><strong>Tuvale genişlet:</strong> çıktı, döndürülmüş görüntüyü sığdırmak için büyür; köşeler saydamdır (PNG/WebP) veya bir arka plan rengiyle doldurulur.</li>
      <li><strong>Sığdırmak için kırp:</strong> orijinal en boy oranını koruyun; köşelerde biraz içerik kaybedin.</li>
      <li><strong>İçe yazılan dikdörtgene kırp:</strong> döndürülmüş içeriği koruyun; daha fazla kenar kaybedin ancak boş köşe kalmaz.</li>
    </ul>
    <p>
      Ufuk düzeltme için, içe yazılan dikdörtgene kırpma genellikle istediğiniz şeydir. Yaratıcı efektler için, düz bir renkle tuvale genişletme daha kontrol edilebilirdir.
    </p>

    <h2>Toplu döndürme iş akışları</h2>
    <p>
      Üç yaygın toplu iş:
    </p>
    <ol>
      <li><strong>EXIF'i normalleştir:</strong> döndürmeyi piksellere pişirin ve bir klasördeki her dosya için Yönlendirme etiketini kaldırın. Yan küçük resimleri sonsuza kadar düzeltir.</li>
      <li><strong>Bir tarama grubunu düzeltin:</strong> tarayıcı beslemesi ters olduğu için her sayfa 90° yan çıktı; yüzlerce dosyaya tek bir döndürme uygulayın.</li>
      <li><strong>Bir alt kümeyi koşula göre döndürün:</strong> yalnızca portre yönelimli dosyalar, yalnızca bir ad deseniyle eşleşen dosyalar vb.</li>
    </ol>
    <p>
      İyi toplu araçlar, 847. dosyada yanlış yönü seçtiğinizi keşfetmemeniz için önce tek bir dosyayı önizler.
    </p>

    <h2>Saat yönünde ve saat yönünün tersine</h2>
    <p>
      Çoğu yazılımda kural, aksi belirtilmedikçe "90° Döndür"ün saat yönünde olduğu yönündedir. Yan bir portreyi 90° döndürürseniz ve dik durmak yerine ters dönerse, saat yönünün tersine ihtiyacınız vardı. Her zaman birini yapıp kontrol etmekte ve yanlışsa geri almakta utanılacak bir şey yok.
    </p>
    <p>
      Yararlı bir anımsatıcı: bir direksiyon simidini çevirdiğinizi hayal edin. 90° sağ, görüntünün üstünü sağ tarafa çevirir; 90° sol, üstü sola çevirir.
    </p>

    <h2>Çevirme döndürme değildir</h2>
    <p>
      Yatay çevirme (ayna) ve 180° döndürme, simetrik içerikte benzer görünür ancak metin ve yüzlerde farklılık gösterir. 180° döndürme metni ters çevirir ancak okuma yönünü korur; yatay çevirme her harfi tersine çevirir. Döndürme kastettiğinizde çevirme kullanmayın, yoksa birine ayna görüntüsü bir kartvizit verirsiniz.
    </p>

    <h2>Döndürme yoluyla meta verileri koruma</h2>
    <p>
      Döndürmeyi piksellere pişirdiğinizde, iyi bir araç EXIF'in geri kalanını (kamera markası/modeli, GPS, zaman damgası) tutar ve yalnızca Yönlendirme etiketini 1'e sıfırlar. Kötü bir araç her şeyi kaldırır; bu paylaşım için iyi olabilir ancak yazarlık veya yakalama verilerini korumanız gerekiyorsa yıkıcıdır.
    </p>
    <p>
      Döndürmeyi <em>ve</em> meta verilerin gitmesini (gizlilik için) istiyorsanız, her ikisini de görünmez bir şekilde yapan bir araca güvenmek yerine döndürmeyi özel bir EXIF kaldırıcı ile birleştirin.
    </p>

    <h2>Telefon fotoğrafları: Yönlendirme pişirme iş akışı</h2>
    <p>
      Bir içerik işlem hattı (ürün yüklemeleri, kullanıcı tarafından gönderilen fotoğraflar, bir blog arka ucu) oluşturuyorsanız, alımda Yönlendirmeyi pişirin:
    </p>
    <ol>
      <li>EXIF Yönlendirme etiketini okuyun.</li>
      <li>1'den farklıysa, karşılık gelen piksel döndürmesini uygulayın.</li>
      <li>Yönlendirme etiketini 1'e sıfırlayın.</li>
      <li>Sonucu standart sürüm olarak kaydedin.</li>
    </ol>
    <p>
      Ardından gelen her araç, nötr bir Yönlendirme etiketine sahip dik bir görüntü görür; basit bir yeniden boyutlandırma etiketi kaldırdığında artık yan küçük resimler olmaz.
    </p>

    <h2>Dokunmatik ekranlarda döndürme yönü</h2>
    <p>
      Çoklu dokunma döndürme hareketleri (iki parmak, döndürme) sürekli döndürür; bu yaratıcı çalışma için kullanışlıdır ancak hassas 90° sonuçları için öngörülemezdir. Çoğu iyi araç, ana yönlerin yakınında 90°'lik artışlara yapışır. İnce döndürmeleriniz 89,7° veya 90,2° sonuçlar üretiyorsa, 90°'ye yapışma ayarını arayın veya hareket yerine açık 90° düğmesini kullanın.
    </p>

    <h2>Eğri düzeltme ve döndürme</h2>
    <p>
      3° eğri olan taranmış bir sayfa bir döndürme sorunu değil, bir eğri düzeltme sorunudur. Eğri düzeltme araçları, bir görüntüdeki doğal yatay veya dikey çizgileri (metin taban çizgileri, ufuk, bina kenarları) algılar ve düzeltmeyi otomatik olarak hesaplar. Aynı açıya manuel döndürme tek bir dosya için iyidir; bir yığın tarama için otomatik eğri düzeltme saatler kazandırır.
    </p>
    <p>
      Eğri düzeltmeden sonra, genellikle içe yazılan dikdörtgene kırpmak istersiniz, böylece köşeler (artık arka plan parçaları içeren) temizce kaybolur. Sıralama her zaman: önce eğri düzeltme, sonra kırpma.
    </p>

    <h2>Duyarlı tasarım bağlamında döndürme</h2>
    <p>
      CSS, görüntü dosyasına dokunmadan işleme zamanında <code>transform: rotate(7deg)</code> ile döndürebilir. Bu, döndürmenin dekoratif bir efekt olduğu ve kaynak görüntünün diğer kullanımlar için bozulmadan kalması gerektiğinde doğru seçimdir. Döndürmeyi yalnızca şu durumlarda pişirin:
    </p>
    <ul>
      <li>Hedef, CSS dönüşümlerini desteklemiyorsa (e-posta, bazı CMS'ler).</li>
      <li>Döndürülmüş görüntünün yeni sınırlayıcı kutu boyutlarına ihtiyacınız varsa.</li>
      <li>Döndürme, stil vermekten ziyade kaynaktaki bir hatayı düzeltiyorsa.</li>
    </ul>

    <h2>Dosya adı hijyeni</h2>
    <p>
      Döndürmeyi pişirdikten sonra, işlenmiş dosyayı orijinalinden bir bakışta ayırt edebilmek için çıktı dosya adına bir sonek ekleyin (<code>-döndürülmüş</code>, <code>-dik</code>). Bu, orijinalin hala bir yerde var olabileceği ve yanlışlıkla yan kaynağı kullanmak istemediğiniz iş akışları için özellikle yararlıdır.
    </p>
    <p>
      Döndürürken orijinalin üzerine asla yazmayın; her zaman yeni bir dosya adına yazın. Yön hakkında fikrinizi değiştirirseniz, orijinal hala oradadır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Klasik hata, her döndürme yönünü denerken bir JPEG'i dört kez yeniden kodlamaktır. Her kayıt daha fazla bozulma ekler. Bir yön seçin, bir kez önizleyin, bir kez uygulayın. Diğer bir ince tuzak: boyutları 8 veya 16'nın katları olmayan bir JPEG'i döndürmek, aracı ya birkaç kenar pikselini kırpmaya ya da kayıplı döndürmeye geri dönmeye zorlar; aracın uyarısını dikkatlice okuyun. Ayrıca, "kayıpsız döndürme" iddiasında bulunan ancak aslında yüksek kalite ayarıyla yeniden kodlayan araçlara dikkat edin; fark her zaman görünür olmasa da ölçülebilir. Son olarak, dikey afişler yapmak için metin içeren PNG'leri döndürmek genellikle yeni yönelimde çirkin kenar yumuşatma üretir; döndürmektense yeniden dizmek daha iyidir.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/image-rotate">Görüntü döndürme aracımız</a>, JPEG'ler için 90/180/270° döndürmeleri kayıpsız olarak halleder ve diğer biçimler için rastgele açıları destekler. Gerçekten bir döndürme yerine ayna görüntüsüne ihtiyacınız varsa, <a href="/tools/image-flip">görüntü çevirme aracı</a> doğru düğmedir. Ve döndürme çarpık bir kompozisyonu ortaya çıkardığında, <a href="/tools/image-cropper">görüntü kırpma aracı</a> onu düzeltir.
    </p>
  </>
);