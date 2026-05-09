import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir görseli çevirmek, onu yatay veya dikey bir eksende yansıtarak solu sağa veya üstü alta döndürür, herhangi bir döndürme işlemi olmadan. Simetri maketleri oluşturmak, ters taranmış sayfaları düzeltmek ve fotoğrafları ütü aktarmaları için hazırlamak (uygulandığında ters döner) için başvurulan yöntemdir. Ancak çevirme, metin, filigran, yön belirten ipuçları veya tanınabilir logolar içeren herhangi bir görseli bozar ve bu, ikinci kez bakana kadar her zaman belli olmaz. Bu kılavuz, ne zaman çevirme yapılacağını, ne zaman yapılmayacağını ve bunun kayıpsız nasıl yapılacağını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Yatay ve dikey çevirme</h2>
    <p>
      <strong>Yatay çevirme</strong> soldan sağa yansıtır: öznenin sol eli sağ eli olur ve metin tersten okunur. <strong>Dikey çevirme</strong> yukarıdan aşağıya yansıtır: görsel baş aşağı döner ve ayrıca yansıtılır. Dikey çevirme, günlük işlerde çok daha az yaygındır ancak belirli transfer malzemeleri ve yansıma efektleri için doğru işlemdir.
    </p>
    <p>
      Her iki işlem de kendilerinin tersidir: aynı eksen boyunca iki kez çevirin ve başladığınız yere geri dönersiniz.
    </p>

    <h2>Çevirmenin zararsız olduğu durumlar</h2>
    <p>
      Simetrik veya soyut içerikler için &mdash; manzaralar, bulutlar, dokular, desenler, çoğu yemek fotoğrafçılığı &mdash; yatay çevirme fark edilemez. Bu nedenle stok siteleri ve tasarımcılar bir düzene sığdırmak için rahatça çevirme yapar: öznenin bakışını diğer yöne çevirmek, kompozisyonu yeniden dengelemek veya aynı görseli bir sayfa düzeninde tekrar gibi görünmeden iki kez kullanmak.
    </p>
    <p>
      Yüzler kısmen simetriktir; bir portreyi çevirmek genellikle iyi görünür, ancak öznenin asimetrik bir özelliği varsa (bir ben, bir tarafa taranmış saç, eğik gözlük çerçeveleri) sorun olabilir.
    </p>

    <h2>Çevirmenin görseli bozduğu durumlar</h2>
    <p>
      Bir görseli çevirin ve yönün her tanınabilir işareti tersine döner. Sorunlar:
    </p>
    <ul>
      <li><strong>Metin:</strong> kitap sırtları, tabelalar, tişört baskıları, dövmeler, plakalar &mdash; hepsi anlamsız ayna görüntüsüne dönüşür.</li>
      <li><strong>Logolar:</strong> swoosh, yarısı yenmiş elma, altın kemerler &mdash; markayı bilen herkes için anında yanlış olur.</li>
      <li><strong>El kullanımı:</strong> bir gitaristin telleri çalan eli, bir tenisçinin raketi, bir cerrahın neşteri &mdash; çevirme, sağ elini kullananları solak yapar.</li>
      <li><strong>Saat yüzleri ve kol saatleri:</strong> neredeyse her zaman ince yollarla asimetriktir (kurma kolu, tarih penceresi).</li>
      <li><strong>Haritalar ve diyagramlar:</strong> kuzey artık yukarıda değildir, doğu ve batı yer değiştirir, her etiket tersten okunur.</li>
    </ul>
    <p>
      Uygulamadan önce olası herhangi bir çevirme adayını bu öğeler açısından tarayın.
    </p>

    <h2>Ayna efektleri ve yansımalar</h2>
    <p>
      Dikey çevirme, klasik yansıma maketleri için başlangıç noktasıdır: ürün, aynadaki ikizinin üzerinde, yansımayı arka planda solduran yumuşak bir gradyanla asılı durur. Teknik:
    </p>
    <ol>
      <li>Görseli orijinalin altına kopyalayın.</li>
      <li>Kopyaya dikey çevirme uygulayın.</li>
      <li>Yansımanın üst kısmında ~%60 opaklıktan alt kısma doğru %0'a solan bir gradyan maskesi ekleyin.</li>
      <li>Bir boşluk oluşturmak için yansımayı orijinalden birkaç piksel aşağı kaydırın.</li>
    </ol>
    <p>
      Yansımaya hafif bir bulanıklık (1&ndash;2&nbsp;px) eklemek, hafif dağınık bir ayna yüzeyini simüle ederek efekti daha da inandırıcı kılar.</p>

    <h2>Ütü aktarmaları ve ayna baskısı</h2>
    <p>
      Kumaşa ütülediğiniz her şey &mdash; özel tişörtler, bez çantalar, yamalar &mdash; yüzü aşağı bakacak şekilde uygulanır, bu da basılı görselin aktarıldığında ters döndüğü anlamına gelir. Baskıdan önce tasarımı yatay olarak çevirmelisiniz. Bu adımı unutun ve tişörtünüz adınızı tersten yazılmış olarak gururla duyuracaktır.
    </p>
    <p>
      Aynı kural bazı geçici dövme kağıtları ve belirli çıkartma malzemeleri için de geçerlidir. Transfer ortamının talimatlarını her zaman kontrol edin; bazıları "yüzü yukarı"dır ve önceden çevirme gerektirmez.
    </p>

    <h2>Kayıpsız çevirme</h2>
    <p>
      90° döndürme gibi, yatay ve dikey çevirmeler, pikselleri kodlayıp yeniden kodlamak yerine 8×8 MCU bloklarını yeniden sıralayarak JPEG'lerde kayıpsız olarak gerçekleştirilebilir. "Kayıpsız çevirme" iddiasında bulunan herhangi bir araç, bir JPEG'i ölçülebilir bir kalite değişikliği olmadan kaydetmelidir.
    </p>
    <p>
      PNG, WebP, AVIF ve TIFF varsayılan olarak kayıpsızdır, bu nedenle bunları çevirmek her zaman piksel mükemmelliğindedir. Bir PNG'yi yüz kez çevirebilirsiniz ve dosya yalnızca boyut olarak (farklı sıkıştırma çalıştırmaları nedeniyle) değişir, görüntü verilerinde asla değişmez.
    </p>

    <h2>Çevirme artı döndürme: tüm yönelimleri kapsama</h2>
    <p>
      Yatay çevirme + 180° döndürme = dikey çevirme. Bu özdeşlik, yalnızca yatay ve döndürme sunan bir araçta dikey çevirmeye ihtiyacınız olduğunu fark ettiğinizde ortaya çıkar. Herhangi bir görselin dört önemsiz olmayan yönelimi şunlardır: orijinal, yatay çevirme, 180° döndürme ve yatay çevirme + 180°.
    </p>
    <p>
      Hangi dönüşüme ihtiyacınız olduğunu bulmaya çalışıyorsanız, hepsini bir küçük resim üzerinde deneyin ve karşılaştırın.
    </p>

    <h2>Toplu çevirme</h2>
    <p>
      Kullanım durumları: baskıdan önce bir yığın transfer tasarımını işleme, ters beslenmiş bir taramanın her sayfasını tersine çevirme veya sağdan sola dil desteği için tüm bir simge setinin ayna çiftlerini oluşturma. İyi bir toplu araç şunları yapmanıza olanak tanır:
    </p>
    <ul>
      <li>Toplu işlemi uygulamadan önce çevirmeyi bir dosyada önizleme.</li>
      <li>Orijinalleri korumak için çıktıyı yeni bir klasöre yazma.</li>
      <li>Dosya adlarına <code>-flipped</code> gibi bir sonek ekleme.</li>
    </ul>

    <h2>RTL düzenleri için çevirme</h2>
    <p>
      Bir arayüzü Arapça, İbranice, Farsça veya diğer sağdan sola diller için yerelleştirirken, yönlü simgelerin genellikle çevrilmesi gerekir: oklar, ilerleme göstergeleri, geri düğmeleri, konuşma balonları. Yönsüz simgeler (ayarlar dişlileri, ziller, kameralar) aynı kalmalıdır. CSS bunu oluşturma zamanında <code>transform: scaleX(-1)</code> ile yapabilir, ancak araçlar CSS yolunu desteklemediğinde varlıkları önceden çevirmek daha güvenlidir.
    </p>
    <p>
      Asla tüm bir simge setini körü körüne çevirmeyin; her zaman seçerek yapın, çünkü bayraklar, saatler ve marka glifleri ters çevrilmemelidir.
    </p>

    <h2>Hızlı bir simetri testi olarak çevirme</h2>
    <p>
      Tasarımcılar, bir düzeltme okuma numarası olarak yatay çevirmeyi kullanır. Saatlerce bir düzene baktıktan sonra, onu çevirmek, gözün fark etmeyi bıraktığı kompozisyon sorunlarını &mdash; garip hizalamalar, dengesiz ağırlık, başlık dulları &mdash; ortaya çıkarır. Bu, yazım hatalarını yakalamak için basılı kopyayı tersten okumakla aynı numaradır.
    </p>

    <h2>Yaygın simetri ve yansıma hileleri</h2>
    <p>
      Bir görselin yarısını çevirip orijinaliyle birleştirmek, soyut posterlerde ve albüm kapaklarında popüler olan zorlamalı simetri görünümü yaratır. İş akışı:
    </p>
    <ol>
      <li>Kaynağı yalnızca sol yarıya kırpın.</li>
      <li>Yarıyı çoğaltın.</li>
      <li>Kopyayı yatay olarak çevirin.</li>
      <li>Çevrilmiş kopyayı, orta dikişi paylaşacak şekilde orijinal yarının sağına yerleştirin.</li>
    </ol>
    <p>
      Sonuç, dikey merkez çizgisi etrafında mükemmel simetriktir. Portrelerde (tuhaf ve büyüleyici), mimaride (rüya gibi) ve doğa çekimlerinde harika çalışır.
    </p>

    <h2>Gizli asimetrileri kontrol etme</h2>
    <p>
      Bir çevirmeyi uygulamadan önce, 10 saniyelik bir asimetri taraması yapın: görünür herhangi bir metin, herhangi bir logo veya marka işareti, herhangi bir tarafa özgü aksesuar (sol elde alyans, bir sporcunun baskın tarafı, bir kol saati) var mı? Bir tane bulursanız, çevirmenin hala kabul edilebilir olup olmadığına veya bağlamın asimetrinin anlamını koruyup korumadığına karar verin.
    </p>
    <p>
      Ürün fotoğrafçılığında bir endüstri geleneği vardır: ürünü tutan kişilerin olduğu çekimler genellikle ürünü öznenin sağ elinde gösterir. Böyle bir çekimi çevirmek, ürünü sol ele taşır ve hissi ince bir şekilde değiştirir.
    </p>

    <h2>CSS'de çevirme ve kalıcı çevirme</h2>
    <p>
      CSS, görselleri oluşturma zamanında yatay için <code>transform: scaleX(-1)</code> veya dikey için <code>transform: scaleY(-1)</code> ile çevirebilir. Kaynak dosyada değişiklik olmaz, çevirme kozmetiktir ve bunu cihaz başına veya medya sorgusu başına değiştirebilirsiniz. Bunu şu durumlarda kullanın:
    </p>
    <ul>
      <li>Aynı görsel bazı bağlamlarda çevrilmiş, bazılarında çevrilmemiş olarak görünüyorsa.</li>
      <li>RTL dil düzenleri için koşullu olarak çevirme yapmak istiyorsanız.</li>
      <li>Görsel, ayna durumlarını içeren bir animasyonun parçasıysa.</li>
    </ul>
    <p>
      Hedef CSS'yi desteklemediğinde (e-posta, baskı, dışa aktarılan belgeler) veya dağıtım için kalıcı bir sürüm istediğinizde çevirmeyi dosyaya kalıcı olarak uygulayın.
    </p>

    <h2>SVG'leri çevirme</h2>
    <p>
      SVG'ler, yol verilerini yeniden yazarak (dosyaya kalıcı olarak) veya bir grupta <code>transform=&quot;scale(-1,1)&quot;</code> ile çevrilir. Etkileşimli bileşenler için dönüşüm yaklaşımı daha iyidir çünkü orijinal şekil verilerini bozulmadan tutar ve değiştirilebilir. SVG'yi yeniden işlemeyecek yerlere gönderilen statik varlıklar için, çevirmeyi yol verilerine kalıcı olarak uygulamak daha temiz bir dosya üretir.
    </p>

    <h2>Görsel düzenleyicilerde çevirme ve döndürme</h2>
    <p>
      Çoğu araç "çevirme" ve "döndürme"yi farklı menü öğelerine ayırır. Seçeneği arıyorsanız:
    </p>
    <ul>
      <li><strong>Photoshop:</strong> Görüntü &gt; Görüntü Döndürme &gt; Kanvası Yatay/Dikey Çevir.</li>
      <li><strong>GIMP:</strong> Görüntü &gt; Dönüştür &gt; Yatay/Dikey Çevir.</li>
      <li><strong>macOS Önizleme:</strong> Araçlar &gt; Yatay/Dikey Çevir.</li>
      <li><strong>Windows Fotoğraflar uygulaması:</strong> Düzenle menüsü, araç çubuğundaki döndürme ve çevirme simgeleri.</li>
      <li><strong>Figma:</strong> bir katmana sağ tıklayın ve "Yatay Çevir"i seçin.</li>
    </ul>
    <p>
      Kısayol tuşları araca göre değişir ancak davranış tutarlıdır: çevirme bir yansımadır, döndürme değildir ve iki işlem ayrıdır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      En pahalı hata, unutulmuş bir ön çevirme ile 200 tişört basmaktır. İkinci en pahalı: marka logosu görünen bir ürün fotoğrafını sessizce çevirip markanın web sitesine göndermek. Daha ince sorunlar, öznenin belirgin asimetrik özelliklere sahip olduğu (bir tarafa taranmış saç, bir kravat klipsi) bir portreyi çevirmek ve kimsenin fark etmeyeceğini düşünmektir &mdash; diğer fotoğraflarla karşılaştırdıklarında fark edeceklerdir. Ayrıca pusula yönünü veya GPS yönünü tanımlayan EXIF meta verilerine dikkat edin; bir çevirme bu alanları güncellemez, bu nedenle "doğuya bakan" olarak etiketlenmiş bir fotoğraf, yatay bir çevirmeden sonra özne artık batıya bakıyor olsa bile bunu iddia etmeye devam edecektir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      <a href="/tools/image-flip">Görsel çevirme aracımız</a>, JPEG'ler için kayıpsız mod ile hem yatay hem de dikey çevirmeleri destekler. Gerçekte ihtiyacınız olan bir ayna yerine 90 veya 180 derecelik bir dönüş olduğunda, <a href="/tools/image-rotate">görsel döndürme aracı</a> doğru seçimdir. Ve çevirme kompozisyon sorunlarını ortaya çıkarırsa, <a href="/tools/image-cropper">görsel kırpma aracı</a>, bunları başka bir yeniden kodlama turu olmadan düzeltir.
    </p>
  </>
);