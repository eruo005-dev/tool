import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Harika bir fotoğraf kötü kırpıldığında amatör görünür. Vasat bir fotoğraf iyi kırpıldığında ise bilinçli bir tercih gibi durur. Web için kırpma işlemi, zevkten çok belirli en-boy oranlarını tutturmakla ilgilidir &mdash; Instagram 1:1 veya 4:5 ister, Twitter 16:9 ister, LinkedIn başlığı 4:1 ister, Pinterest 2:3 ister ve kendi sitenizin ızgarası muhtemelen başka bir oran ister. Oranı yanlış ayarlayın, platform sizin için kırpar ve genellikle de kötü kırpar. Bu rehber, önemli olan en-boy oranlarını, odak noktasının nereye konulacağını, akıllı kırpma otomasyonu ile manuel kontrol arasında ne zaman seçim yapılacağını, Retina 2x matematiğini ve yüzler ile ana öğelerin öngörülemeyen kaplarda kesilmesini önleyen güvenli bölge kurallarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Platformlara göre en-boy oranları</h2>
    <pre>{`Bağlam                         En-Boy Oranı   Önerilen boyut
Instagram akışı (kare)         1:1            1080x1080
Instagram akışı (dikey)        4:5            1080x1350
Instagram hikaye / Reels       9:16           1080x1920
Twitter/X satır içi            16:9           1200x675
Twitter/X başlık               3:1            1500x500
Facebook link paylaşımı        1.91:1         1200x630
Facebook kapak                 16:9           820x312
LinkedIn gönderi görseli       1.91:1         1200x628
LinkedIn kapak                 4:1            1584x396
Pinterest pin                  2:3            1000x1500
YouTube küçük resim            16:9           1280x720
Open Graph varsayılan          1.91:1         1200x630
Blog kahraman görseli          16:9           1920x1080
Ürün kartı                     1:1            800x800`}</pre>
    <p>
      Bunlar zaman zaman değişir &mdash; platformlar özelliklerini günceller &mdash; ancak temel en-boy oranları sabittir. Önce orana göre kırpın, ardından hedef piksel boyutlarına yeniden boyutlandırın.
    </p>

    <h2>Başlangıç noktası olarak üçte bir kuralı</h2>
    <p>
      Kareyi 3&times;3'lük bir ızgaraya bölün. Ana konuları çizgilerin kesişim noktalarına veya çizgilerin üzerine yerleştirin. Ufuk çizgileri tam ortada değil, üst veya alt üçte birlik kısımda olur. Bir portrede gözler üst yatay üçte birlik kısma gelir. Bu katı bir kural değildir &mdash; merkezi simetri resmi portreler ve ürün fotoğrafları için işe yarar &mdash; ancak anlık bir çekimden ziyade kompoze edilmiş olarak algılanan varsayılan kuraldır.
    </p>

    <h2>Odak noktası: gözün ilk takıldığı yer</h2>
    <p>
      Kırpma yaparken, izleyicinin ilk ne göreceğini seçiyorsunuz. Bir portre için bu genellikle yüzdür. Bir ürün için ürünün kendisidir. Bir manzara için tüm manzaradan ziyade belirli bir özelliktir (dağ, deniz feneri). İzleyicinin gözü konuyu bulmak için görselde arama yapmak zorunda kalıyorsa, kırpma yanlış demektir. Konuyu belirgin hale gelene kadar hareket ettirin.
    </p>
    <p>
      Tarayıcı tarafından kırpılabilecek duyarlı görseller için CSS ile net bir odak noktası belirleyin:
    </p>
    <pre>{`img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 50% 30%;  /* yatayda ortala,
                                 üstten %30 -> yüzleri korur */
}`}</pre>
    <p>
      Varsayılan <code>object-position: 50% 50%</code> değeri her taraftan eşit şekilde kırpar ve portrelerde kafaları keser. <code>50% 30%</code>, portre ağırlıklı içerik için daha güvenli bir varsayılandır.
    </p>

    <h2>Akıllı kırpma vs manuel</h2>
    <p>
      Akıllı kırpma algoritmaları (yüz algılama, belirginlik algılama) sizin için bir merkez seçer. Benzer fotoğraf grupları için iyi çalışırlar &mdash; bir ürün fotoğrafı kataloğu veya bir portre galerisi gibi. Karmaşık kompozisyonlarda başarısız olurlar: farklı derinliklerde iki yüz, merkezden uzak bir yüz, "önemli" öğenin bağlamsal olduğu görseller (yanındaki yüz değil, bir saati tutan el).
    </p>
    <p>
      Herhangi bir kahraman görseli, pazarlama varlığı veya yayınlanmış küçük resim için manuel olarak kırpın. Görsel başına beş dakika, CEO'nun kafasını kesen bir akıllı kırpmayı düzeltmek için harcayacağınız 15 dakikadan iyidir.
    </p>

    <h2>Retina ve piksel yoğunluğu</h2>
    <p>
      Yüksek yoğunluklu ekranlar (iPhone, MacBook Retina, çoğu modern Android), mantıksal piksel sayısının 2 katı veya 3 katı olarak işleme koyar. Retina ekranda 400 piksel genişliğindeki bir kart aslında 800 fiziksel pikseldir. Kaynağınızı, keskin kalması için ekran boyutunun 2 katı olarak dışa aktarın.
    </p>
    <pre>{`Ekran boyutu   2x dışa aktar   3x dışa aktar
200x200        400x400         600x600
400x400        800x800         1200x1200
800x600        1600x1200       2400x1800`}</pre>
    <p>
      3x dışa aktarma çoğu durumda gereksizdir &mdash; dosya boyutu cezası, zar zor algılanabilen keskinlik kazancına değmez. 2x mantıklı temel seviyedir. 1x ekran kullananlara 2x dosyayı göndermemek için farklı yoğunlukları <code>srcset</code> ile sunun.
    </p>

    <h2>Duyarlı düzenler için güvenli bölgeler</h2>
    <p>
      Kahraman görseliniz masaüstünde 16:9, mobilde 4:5 olarak işlenebilir ve bir paylaşım kartı tarafından 1.91:1 olarak kırpılabilir. En kötü kırpma senaryosuna göre plan yapın. Kritik öğeleri (yüzler, metinler, logolar, harekete geçirici mesajlar) merkezi <strong>güvenli bölgede</strong> tutun &mdash; kabaca yatayda orta %50 ve dikeyde %60. Bu bölgenin dışındaki her şey bazı platformlarda kırpılabilir.
    </p>

    <h2>Yüz kırpmasından kaçınma</h2>
    <p>
      En yaygın kırpma hatası, kafanın üst kısmını kesmektir. Telefon kameraları baş boşluğu bırakarak kompozisyon yapar; sosyal medya kırpmaları bunu kaldırır. Kurallar: Konunun kafasının üstünde en az %10 boşluk bırakın. Asla omuzlar ve çene arasından kırpmayın &mdash; omuzlardan veya göğüs ortasından kesin. Asla bir eklemden (diz, dirsek, bilek) kırpmayın &mdash; ampüte edilmiş gibi görünür; bunun yerine uzvun ortasından kırpın.
    </p>

    <h2>Görsellerde metin</h2>
    <p>
      Görseliniz üzerine yerleştirilmiş metin içeriyorsa (bir ürün etiketi, bir alıntı kartı, bir harekete geçirici mesaj), bu metni güvenli bölgenin içinde tutun ve her tarafta %10&ndash;15 boşluk bırakın. Platformlar metin ağırlıklı görselleri cezalandırır (Facebook, %20'den fazla metin içeren reklamları reddederdi) ve herhangi bir kırpma, korunmayan metni ilk önce kesecektir.
    </p>

    <h2>Kırpmaya karşı genişletme</h2>
    <p>
      Bir fotoğraf 4:3 ise ve 16:9'a ihtiyacınız varsa, iki seçeneğiniz vardır: üst ve alt kısmı kırpmak (içerik kaybı) veya sağa ve sola genişletmek (bulanık kenar dolgusu, düz arka plan veya üretken dolgu gerektirir). Çoğu editoryal bağlamda kırpın. Resmi logolar, ürün ambalajları veya tüm kompozisyonun önemli olduğu durumlarda, kırpmak yerine uyumlu bir renk arka planı ile genişletin.
    </p>

    <h2>Mobil akışlarda kare vs dikey</h2>
    <p>
      Instagram'ın akışı eskiden tamamen kareydi; şimdi 4:5 dikey, daha fazla dikey ekran alanı kaplıyor ve genellikle daha yüksek etkileşim alıyor. Sosyal medya için çekim yapıyorsanız, içerik için dikey en-boy oranlarını, ızgara tutarlılığı için kareyi tercih edin. Pinterest için 2:3 tartışılmazdır &mdash; 1:1 pinler gömülür.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Eklemlerden kırpmak.</strong> Bilek, diz veya dirsekten kesmek, konuların ampüte edilmiş görünmesine neden olur. Bunun yerine ön kolun veya uyluğun ortasından kırpın.
    </p>
    <p>
      <strong>Her konuyu ortalamak.</strong> Tam merkez kompozisyonu simetrik ürünler için iyidir ancak portreler ve manzaralar için statik görünür. Varsayılan olarak üçte bir kuralını kullanın.
    </p>
    <p>
      <strong>Baş boşluğunu görmezden gelmek.</strong> Telefon portrelerinde başın üstünde nefes alma alanı vardır; sosyal medya kırpmaları bunu kaldırır. Saç çizgisinin üzerinde %10 boşluk bırakın.
    </p>
    <p>
      <strong>Retina ekranlar için 1x dışa aktarmak.</strong> Görseller modern telefonlarda ve dizüstü bilgisayarlarda yumuşak görünür. Ekran boyutunun 2 katı olarak dışa aktarın.
    </p>
    <p>
      <strong>Tüm platformlar için tek bir kırpma kullanmak.</strong> 16:9'luk bir blog kahraman görseli, Open Graph tarafından 1.91:1'e merkezden kırpılır ve üst ile alt kısmı kaybeder. Platforma özel bir varyant dışa aktarın veya konuyu güvenli bölgede tutun.
    </p>
    <p>
      <strong>Yeniden boyutlandırmadan önce kırpmak.</strong> Zaten yeniden boyutlandıracaksanız, cömertçe kırpın ve yeniden boyutlandırma adımının son boyutları halletmesine izin verin. Daha fazla esneklik elde edersiniz.
    </p>
    <p>
      <strong>Metin güvenli kenar boşluklarını unutmak.</strong> Çerçevenin kenarındaki üst üste bindirilmiş metin, agresif herhangi bir kırpmada kesilir. Çerçevenin içinde %10&ndash;15 kenar boşluğu bırakın.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Herhangi bir en-boy oranına{" "}
      <a href="/tools/image-cropper">görsel kırpma aracı</a> ile kırpın. Kırpmadan sonra platforma özel piksel boyutlarını tutturmak için{" "}
      <a href="/tools/image-resizer">görsel yeniden boyutlandırma aracı</a> ile ve nihai varlığı sayfa ağırlığını şişirmeyen bir dosya boyutunda göndermek için{" "}
      <a href="/tools/image-compressor">görsel sıkıştırma aracı</a> ile birlikte kullanın.
    </p>
  </>
);