import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Kırpma, gezegendeki en çok kullanılan ve en az düşünülen görüntü düzenleme işlemidir. İnsanlar genellikle "görüntüyü küçültmek" için buna başvurur; bu genellikle yanlış bir hedeftir — bunun için yeniden boyutlandırma vardır. Kırpma, çerçevede kaç piksel olduğunu değil, çerçevenin <em>içinde</em> ne olduğunu değiştirmekle ilgilidir. Doğru kullanırsanız fotoğraflarınız her platformda daha iyi görünür. Yanlış kullanırsanız, uzatılmış bir profil resmi veya omuzlarınızın kesildiği bir LinkedIn banner'ı gönderirsiniz.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Kırpma ve yeniden boyutlandırma — farklı hedefler</h2>
    <p>
      Yeniden boyutlandırma, görüntünün tamamını korur ve piksel sayısını değiştirir. Kırpma, piksel yoğunluğunu korur ve gösterilen şeyi değiştirir. Bir banner 1584&times;396 olmalıysa ve fotoğrafınız 3000&times;3000 ise, önce doğru en boy oranını elde etmek için kırpma yapar, ardından tam piksel boyutlarına yeniden boyutlandırırsınız. İkisinden yalnızca birini yapmak, ezilmiş bir yüzle sonuçlanmanın yoludur. <a href="/tools/image-cropper">Görüntü kırpma aracımız</a> kırpmayı halleder; <a href="/tools/image-resizer">görüntü yeniden boyutlandırma aracımız</a> ise ikinci adımı halleder.
    </p>

    <h2>Ezberlemeye değer en boy oranları</h2>
    <p>
      Tam piksel sayılarını hatırlamanıza gerek yok — sadece en boy oranlarını bilmeniz yeterli. Oran doğru olduğunda her platform görüntünüzü sığdıracaktır.
    </p>
    <ul>
      <li>
        <strong>1:1 kare</strong> — Instagram akışı, çoğu profil resmi, podcast sanatı, albüm kapakları.
      </li>
      <li>
        <strong>4:5 dikey</strong> — Instagram dikey gönderileri (akışta en fazla ekran alanını kaplar), LinkedIn görsel gönderileri.
      </li>
      <li>
        <strong>16:9 yatay</strong> — YouTube küçük resimleri, çoğu blog başlığı, sunum slaytları, Twitter/X satır içi görselleri.
      </li>
      <li>
        <strong>9:16 dikey</strong> — Hikayeler, Reels, TikTok, Shorts. Telefonda dikey modda tam ekran olan her şey.
      </li>
      <li>
        <strong>3:2 veya 2:3</strong> — klasik fotoğrafçılık oranları, standart baskı boyutları (4&times;6, 6&times;9).
      </li>
    </ul>
    <p>
      Herhangi bir gönderi için önce oranı belirleyin, ardından kırpın. Bu, yeniden çekim yapmaktan kurtarır.
    </p>

    <h2>Üçte bir kuralı, kısaca</h2>
    <p>
      Çerçeveyi zihinsel olarak iki yatay ve iki dikey çizgiyle dokuz eşit dikdörtgene bölün. İlginç şeyler — gözler, bir ufuk, odak noktası bir konu — tam ortada değil, bu çizgilerin kesişim noktalarının yakınında olmalıdır. Kırpma yaparken, bu en kullanışlı kılavuzdur. Konunuz tam ortadaysa ve arka plan sıkıcıysa, kırpmayı konu üçte bir çizgisine gelecek şekilde ayarlayın. Görüntü aniden nefes alır.
    </p>
    <p>
      Çoğu kırpma aracında üçte bir kuralı katmanı bulunur. Açın.
    </p>

    <h2>Profil resimlerini kırpma</h2>
    <p>
      Bir profil resmi neredeyse her zaman kare bir kırpmanın üzerinde bir daire olarak gösterilir. Yani: kare kırpın, ancak köşelerin kesileceğini hayal edin. Yüzü, asla kenarlara çok yakın olmayacak şekilde, ortalanmış bir dairenin içinde rahatça tutun. Belirli platformlar:
    </p>
    <ul>
      <li>
        <strong>LinkedIn</strong> — baş ve omuzların üst kısmı, düşündüğünüzden daha yakın. Uzaktan çekilmiş tam vücut bir fotoğraf profesyonellikten uzak görünür.
      </li>
      <li>
        <strong>Twitter/X</strong> — LinkedIn'e benzer, belki biraz daha yakın. Görsel, akışlarda genellikle küçük boyutlarda görünür.
      </li>
      <li>
        <strong>Instagram</strong> — daha fazla esneklik, ancak baş yine de baskın öğe olmalıdır.
      </li>
    </ul>

    <h2>Bir dakikalık test</h2>
    <p>
      Kaydetmeden önce, %50 yakınlaştırın ve şunu sorun: Daha sıkı kırparsam görüntü hala işe yarar mı? Cevap hayırsa, muhtemelen doğru kırpmadasınız. Cevap evetse, deneyin — daha sıkı kırpmalar neredeyse her zaman gevşek olanlardan daha güçlü görünür. Hiçbir şey katmayan boş alana sahip bir fotoğraf, boşa harcanmış piksellere sahip bir fotoğraftır.
    </p>
    <p>
      Tersini de sormaya değer: Kenarlara yakın, bir platformun daha fazla kırpabileceği önemli bir şey var mı? Çoğu sosyal platform, önizleme küçük resimlerini agresif bir şekilde kırpar. Gerçek konuyu her kenardan en az %10 içeride tutun.
    </p>

    <h2>Orijinali saklayın</h2>
    <p>
      Kırpma yıkıcıdır — kaydedip kapattığınızda, bu pikseller gider. Özellikle profesyonel fotoğraflar için, kırpılmamış orijinali her zaman bir yerde saklayın. Platformlar en boy oranı gereksinimlerini birkaç yılda bir değiştirir ve orijinalden yeniden kırpmak, önceden kırpılmış bir dosyayı kurtarmaya çalışmaktan daha iyidir.
    </p>
  </>
);