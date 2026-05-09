import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Temiz bir kenarlık, rastgele bir fotoğrafı ürün kartına dönüştürür. Gösterişli bir kenarlık ise bir ürün kartını 2005 yılına götürür. Kenarlıklar, görüntünün sayfa arka planından nasıl ayrıldığını, diğer görüntülerden oluşan bir ızgarada nasıl okunduğunu ve profesyonel bir varlık mı yoksa amatör bir çıktı mı gibi hissettirdiğini sessizce kontrol ettiklerini fark edene kadar küçük bir tasarım kararı gibi görünür. Bu kılavuz, piksel ve yüzde cinsinden kenarlık genişliğini, farklı arka planlara karşı renk seçimini, yuvarlatılmış köşelerin ne zaman kullanılacağını, iç ve dış kenarlıklar arasındaki farkı, polaroid efektini ve çoğu tasarımcının atladığı erişilebilirlik hususlarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Pikseller ve yüzdeler</h2>
    <p>
      <strong>Sabit piksel kenarlık</strong> (örneğin 4 piksel), görüntünün boyutu ne olursa olsun aynı kalınlıkta kalır. <strong>Yüzde kenarlık</strong> (örneğin %2) ise görüntüyle birlikte ölçeklenir. Sabit piksel kenarlıklar, CSS'nin varsayılan olarak verdiği ve UI öğeleri için doğru hissettiren şeydir &mdash; 40 piksellik bir avatar üzerindeki 2 piksellik kenarlık, 400 piksellik bir banner üzerindekiyle aynı okunur.
    </p>
    <p>
      Yüzde kenarlıklar, kenarlığı CSS aracılığıyla eklemek yerine doğrudan görüntünün içine işlediğinizde önem kazanır &mdash; 1000 piksel genişliğindeki bir fotoğrafta %2'lik kenarlık 20 pikseldir ve görüntü daha sonra yeniden boyutlandırılırsa uygun şekilde ölçeklenir. Basılı fotoğraflar ve polaroid efektleri için yüzdeleri kullanın; web arayüzü için sabit pikselleri kullanın.
    </p>

    <h2>Kenarlık genişliği hassasiyetleri</h2>
    <pre>{`Bağlam                      Genişlik       Notlar
Avatar / profil dairesi     2-3 px         İnce, keskin
Izgaradaki küçük resim      1-2 px         Zar zor görünen ayırıcı
Ürün kartı                  1 px           Genellikle sadece 1px gri çizgi
Kahraman görseli            0 px           Nadiren kenarlık gerektirir
Polaroid / çerçeve efekti   %4-8 genişlik  Altta daha kalın (%10-15)
Baskı fotoğraf paspartusu   %5-10 genişlik Beyaz veya krem
Instagram tarzı besleme kartı 0-1 px       Düz olan daha moderndir`}</pre>
    <p>
      Emin değilseniz, düşündüğünüzden daha ince olun. 1 piksellik bir kenarlık neredeyse her zaman 4 piksellik bir kenarlıktan daha profesyonel görünür. Dikkat çeken kenarlıklar kötü yaşlanır; kenarları sessizce tanımlayan kenarlıklar iyi yaşlanır.
    </p>

    <h2>Renk seçimi</h2>
    <p>
      Kenarlık, kenarı tanımlamak için yeterli kontrasta sahip olmalı ancak görüntüyle rekabet edecek kadar olmamalıdır. Üç güvenilir yaklaşım:
    </p>
    <p>
      <strong>Hafif nötr.</strong> <code>#e5e7eb</code> (açık gri), <code>#d1d5db</code> veya sayfa arka planından biraz daha koyu bir tonda 1&ndash;2 piksellik kenarlık. Ürün kartları, küçük resimler, ızgaradaki her şey için kullanın. Neredeyse görünmez ancak görüntülerin arka planla birleşmesini önler.
    </p>
    <p>
      <strong>Koyu üzerine beyaz.</strong> Koyu bir sayfa arka planına yerleştirilen görüntüler için beyaz veya beyaza yakın bir kenarlık, paspartulu fotoğraf efekti oluşturur. Portföyler ve editoryal düzenler için çalışır.
    </p>
    <p>
      <strong>Görüntüyle eşleşen.</strong> Polaroid efekti için kenarlık krem veya kirli beyazdır &mdash; saf beyaz değil. <code>#faf8f3</code> veya <code>#f5f1e8</code> "kağıt" gibi okunur.
    </p>
    <p>
      Koyu fotoğraflarda siyah kenarlıklardan kaçının &mdash; görünmezler. Bilinçli olarak bir dergi veya çıkartma efekti yapmıyorsanız, doygun renklerden (kırmızı, mavi) kaçının.
    </p>

    <h2>Yuvarlatılmış ve kare köşeler</h2>
    <p>
      <strong>Kare köşeler</strong> resmi, editoryal, belgesel hissettirir. Haber fotoğrafları, baskı tasarımı, kurumsal materyaller.
    </p>
    <p>
      <strong>Yuvarlatılmış köşeler</strong> dostça, uygulama benzeri, modern hissettirir. iOS 7'den (2013) bu yana tüketici yazılımlarında varsayılandır. Kartlar için 4&ndash;8 piksel, belirgin görüntüler için 8&ndash;16 piksel, dairesel avatarlar için %50 kenar yarıçapı.
    </p>
    <p>
      Yarıçapı çevredeki arayüzle eşleştirin. Düğmeleriniz 8 piksel yarıçapa sahipse, görüntü kenarlıklarınız da aynı olmalıdır. Bir düzende 4 piksel ve 12 piksel yarıçapları karıştırmak özensiz görünür.
    </p>

    <h2>İç ve dış kenarlıklar</h2>
    <p>
      Bir <strong>dış kenarlık</strong> (CSS <code>border</code>) görüntü içeriğinin dışında yaşar &mdash; görüntü tam çözünürlüğünü korur. Bir <strong>iç kenarlık</strong> (görüntü üzerine çizilen bir çerçeve) görüntü alanını yer. Kenarlığı görüntünün içine işlemenin (iç) bir avantajı vardır: kenarlık, görüntü paylaşıldığında, indirildiğinde veya gömüldüğünde onunla birlikte gider. Dış kenarlıklar yalnızca CSS'nizde bulunur.
    </p>
    <pre>{`/* CSS dış kenarlık */
.photo {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

/* veya outline (düzeni etkilemez) */
.photo {
  outline: 2px solid #e5e7eb;
  outline-offset: 0;
}`}</pre>
    <p>
      Web arayüzü için CSS kenarlıklarını kullanın; sosyal medya, e-posta veya baskı için dışa aktarırken kenarlıkları görüntünün içine işleyin.
    </p>

    <h2>Polaroid efekti</h2>
    <p>
      Bir polaroid çerçevesinin üç özelliği vardır: beyazdan kreme kenarlık, diğer üç taraftan daha kalın alt kısım (tarihsel olarak %15 alt, %5 yanlar ve üst) ve genellikle hafif bir gölge. Yaklaşık oranlar:
    </p>
    <pre>{`görüntü çerçevenin %80 x %80'i
üst kenarlık    %5
yan kenarlıklar her biri %5
alt kenarlık    %15  (el yazısı başlık için)
gölge:  2-4px aşağı kaydırma, 10-20px bulanıklık, ~%15 opaklık`}</pre>
    <p>
      Polaroid hissi, kişisel portföyler, düğün sayfaları, vintage tarzı markalar için işe yarar. Kurumsal veya teknoloji için kaçının &mdash; nostaljik okunur ve modern arayüzle çatışabilir.
    </p>

    <h2>Küçük resimler için kenarlıklar</h2>
    <p>
      Bir ızgaradaki küçük resimlerin, görüntülerin görsel olarak birleşmesini önlemek için genellikle kenarlıklara ihtiyacı vardır. Çok açık gri renkte 1 piksellik bir kenarlık veya hücreler arasında bir CSS boşluğu işi görür. Küçük resimleriniz zaten tutarlı arka planlara sahipse (beyaz ürünler beyaz üzerine), kenarlığa ihtiyacınız vardır. Çeşitli içeriklere sahiplerse, içerik kenarları genellikle kendini tanımlar.
    </p>

    <h2>Kenarlıklar ve erişilebilirlik</h2>
    <p>
      Odak halkası, kenarlığın özel bir durumudur &mdash; bir kullanıcı bir görüntü bağlantısına sekmeyle gittiğinde görünür. Etkileşimli görüntülerde tarayıcının odak anahattını, görünür bir eşdeğeriyle değiştirmeden asla devre dışı bırakmayın. Klavye kullanıcıları, sayfada nerede olduklarını bilmek için buna güvenir.
    </p>
    <pre>{`a:focus-visible .photo {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}`}</pre>
    <p>
      Ayrıca: kenarlıklar dekoratiftir, bilgilendirici değildir. Bilgi bir renge bağlıysa (örneğin "stokta yok" anlamına gelen kırmızı kenarlık), renk körü ve ekran okuyucu kullanıcıları için bunu metin veya bir simgeyle çoğaltın.
    </p>

    <h2>Kenarlıklar yerine gölgeler</h2>
    <p>
      Hafif bir gölge (<code>box-shadow: 0 2px 8px rgba(0,0,0,0.08)</code>) genellikle bir kenarlığın yerini tamamen alır. Görüntüyü sayfadan kaldırır, ayrım yaratır ve 1 piksellik bir çizginin düzlüğünden kaçınır. Beyaz veya açık gri sayfa arka planlarında en iyi sonucu verir.
    </p>

    <h2>Basılı görüntüler için kenarlıklar</h2>
    <p>
      Baskı için (bültenler, broşürler, fotoğraf kitapları), kenarlıklar daha fazla etkiye sahiptir çünkü görsel ilgi yaratacak bir üzerine gelme durumu veya animasyon yoktur. Baskıda bir fotoğrafın etrafındaki 2 mm'lik beyaz paspartu, ekrandaki kalın bir polaroid çerçevesine eşdeğerdir &mdash; kasıtlı ve fark edilir. Sayfa kenarına uzanan kenarlıklar tasarlarken baskı taşmasını (kesim çizgisinin 3 mm ötesi) planlayın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Görüntüyle rekabet eden kenarlıklar.</strong> Kalın renkli bir kenarlık, dikkati içerikten uzaklaştırır. Hafif olun; 1&ndash;2 piksellik nötrler, yüksek sesli olanlardan daha iyidir.
    </p>
    <p>
      <strong>Kenar yarıçaplarını karıştırmak.</strong> Burada 4 piksel, şurada 12 piksel, başka yerde 0. Belirli bir değerden daha önemli olan, bir düzen genelinde tutarlılıktır.
    </p>
    <p>
      <strong>Fotoğraflarda siyah kenarlıklar.</strong> Görüntü içeriğiyle nadiren iyi kontrast oluştururlar ve eski moda okunurlar. Bunun yerine açık nötrler kullanın.
    </p>
    <p>
      <strong>Görüntü alanını boşa harcayan iç kenarlıklar.</strong> 1000 piksellik bir görüntüye %10'luk bir kenarlık işlerseniz, her iki tarafta 100 piksellik içerik kaybetmiş olursunuz. Tam çözünürlükte işleyin, ardından kenarlığı ekleyin.
    </p>
    <p>
      <strong>Görüntü bağlantılarındaki odak anahatlarını kaldırmak.</strong> Klavye erişilebilirliğini bozar. Varsayılanı beğenmiyorsanız, görünür bir özel anahatla değiştirin, asla tamamen bastırmayın.
    </p>
    <p>
      <strong>Bir ızgaradaki etkileşimli olmayan görüntülerde border-radius kullanmak.</strong> Görsel olarak işe yarar ancak düşük kaliteli mobil cihazlarda çok sayıda yuvarlatılmış görüntüyle performans sorunlarına neden olabilir. Gerçek bir cihazda test edin.
    </p>
    <p>
      <strong>Kenarlıkların düzene alan eklediğini unutmak.</strong> Dört tarafta 10 piksellik bir kenarlık, genişlik ve yüksekliğe 20 piksel ekler. Görüntü kabı sabitse, görüntünün kendisi küçülmek zorundadır. Boyutları tahmin edilebilir tutmak için <code>box-sizing: border-box</code> kullanın.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Bir grup görüntüye tutarlı kenarlıklar eklemek için{" "}
      <a href="/tools/image-border-adder">görüntü kenarlık ekleyici</a> aracını kullanın. Kenarlığı eşleşen yarıçaplarla birleştirmek için{" "}
      <a href="/tools/image-round-corners">görüntü köşe yuvarlama</a> aracıyla ve kenarlık geçişinden önce boyutları normallestirerek ızgaradaki her kartın tek tip görünmesini sağlamak için{" "}
      <a href="/tools/image-resizer">görüntü yeniden boyutlandırıcı</a> ile birlikte kullanın.
    </p>
  </>
);