import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      &ldquo;Kalite kaybı olmadan&rdquo; ifadesi teknik olarak bir yalandır — her kayıplı
      sıkıştırıcı bir şey kaybeder. Asıl soru, farkı anlayıp anlayamayacağınızdır.
      Doğru format, doğru boyutlar ve makul bir kalite ayarı ile 4MB'lık bir fotoğrafı
      200KB'a düşürebilirsiniz ve hiç kimse — siz bile — farkı göremez. Bu rehber,
      gerçekten işe yarayan ve yaramayan şeylerin kısa versiyonudur.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Üç kalite kolu</h2>
    <p>
      Her görsel sıkıştırma kararı aslında üç karardır ve çoğu kişi yalnızca birine
      dokunur. Kollar şunlardır: <strong>format</strong> (JPG, PNG, WebP,
      AVIF), <strong>boyutlar</strong> (piksel genişliği ve yüksekliği) ve{" "}
      <strong>sıkıştırma kalitesi</strong> (0-100 arası kaydırıcı). Üçünü de
      kullanırsanız dosya önemli ölçüde küçülür. Yalnızca kaydırıcıyı kullanırsanız
      tasarrufun büyük kısmını masada bırakırsınız.
    </p>

    <h2>JPG'nin PNG'ye üstün geldiği durumlar</h2>
    <p>
      JPG fotoğraflar içindir — sürekli tonlar, cilt, gökyüzü, manzaralar içeren
      her şey. PNG ise keskin kenarlar ve düz renkler içeren şeyler içindir: logolar,
      simgeler, arayüz ekran görüntüleri, metin. Bir fotoğrafı PNG olarak kaydederseniz
      4MB'lık bir dosya elde edersiniz, oysa 300KB'lık bir JPG görsel olarak aynı
      kaliteyi sağlar. Bir logoyu JPG olarak kaydederseniz kenarlarda çirkin
      sıkıştırma halkaları oluşur.
    </p>
    <p>
      Kabaca kural: görselin geçmişinde bir kamera varsa JPG'dir. Figma,
      Illustrator veya ekran görüntüsünden geldiyse PNG'dir.
    </p>

    <h2>WebP ve AVIF'in kazandığı durumlar</h2>
    <p>
      WebP genellikle aynı görsel kalitede JPG'den %25-35 daha küçüktür ve PNG gibi
      saydamlığı destekler. AVIF daha da ileri gider — genellikle JPG'den %50 daha
      küçüktür — ancak kodlayıcılar daha yavaştır ve eski yazılımlar bunu anlamaz.
      Modern bir web sitesi veya blog görseli için WebP varsayılan cevaptır.
      Tüm sistemi kontrol ediyorsanız ve son %20 tasarrufu önemsiyorsanız AVIF
      kullanın.
    </p>
    <p>
      Sitenizden ayrılan her şey için — e-posta, Slack, matbaa, iMessage — JPG
      veya PNG'de kalın. Alıcının araç zinciri yeni formatları işleyebilir de
      işlemeyebilir de.
    </p>

    <h2>Sıkıştırmadan önce yeniden boyutlandırın</h2>
    <p>
      Bu en sık atlanan ve en çok bayt tasarrufu sağlayan adımdır. Telefondan
      çıkan bir fotoğraf 4032×3024 pikseldir. Bir blog kahraman görseli belki
      1600 piksel genişliğinde görüntülenir. Telefon çözünürlüğünü tarayıcıya
      göndermek 6 kat israftır. Önce bir <a href="/tools/image-resizer">görsel
      yeniden boyutlandırıcı</a> ile yeniden boyutlandırın, ardından sonucu bir{" "}
      <a href="/tools/image-compressor">görsel sıkıştırıcı</a> ile sıkıştırın.
      Yeniden boyutlandırmadan sonra sıkıştırma, yalnızca sıkıştırmadan çok daha
      etkilidir.
    </p>

    <h2>Gerçek hayatta kabul edilebilir dosya boyutları</h2>
    <p>
      Hem yeniden boyutlandırma hem de sıkıştırma sonrası kabaca hedefler:
    </p>
    <ul>
      <li>
        <strong>Blog kahraman görseli</strong> (1600 piksel genişlik): 150-300KB.
        500KB'ın üzerinde sayfa hızı puanınız etkilenir.
      </li>
      <li>
        <strong>Ürün fotoğrafı</strong> (1200 piksel genişlik): Görsel başına
        80-180KB. Sayfada muhtemelen bir düzine var, bu yüzden her kilobayt
        birikir.
      </li>
      <li>
        <strong>E-posta eki fotoğrafı</strong> (1600 piksel genişlik, iyi kalite):
        200-400KB. Bunun altında büyük ekranlarda sıkıştırılmış görünmeye başlar.
      </li>
      <li>
        <strong>Sosyal medya yüklemesi</strong>: Platform zaten yeniden
        sıkıştıracaktır, bu yüzden 2MB'den fazla göndermenin anlamı yoktur.
      </li>
    </ul>

    <h2>Kalite kaydırıcısı ile test etme</h2>
    <p>
      Kalite ayarını seçmenin dürüst yolu: 90, 80 ve 70'te dışa aktarın, üçünü
      de %100 yakınlaştırmada yan yana açın ve orijinalden gerçekten farkı
      göremediğiniz en düşük sayıyı seçin. Çoğu fotoğraf için bu 80-85'tir.
      Metin içeren ekran görüntülerinde 90+ kalın, aksi takdirde harflerde
      saçaklanma görürsünüz. Hafızanıza güvenmeyin — yan yana açın.
    </p>

    <h2>İşe yaramayan şeyler</h2>
    <p>
      Bir dosyayı arka arkaya iki sıkıştırıcıdan geçirmek hiçbir işe yaramaz —
      sadece bozulmaları artırırsınız. Bir JPG'yi tekrar tekrar JPG olarak
      kaydetmek (açma, düzenleme, yeniden kaydetme) her seferinde kaliteyi
      düşürür; düzenleme yapacaksanız bir PNG veya RAW ana kopya saklayın.
      Zaten 200KB'ın altında olan bir dosyada son 5KB için takıntı yapmak
      neredeyse hiçbir zaman buna değmez.
    </p>
  </>
);