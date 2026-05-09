import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      WebP, web siteleri için harikadır ancak neredeyse her yerde baş belasıdır.
      Muhtemelen bir tarayıcıdan bir resim kaydetmiş, bir CMS'ye yüklemeye veya
      bir e-postaya eklemeye gitmiş ve formatın desteklenmediğini söyleyen bir
      uyarı almışsınızdır. Çözüm, hızlı bir JPG dönüşümüdür. İşte bunu ne zaman
      yapmanız gerektiği, hangi kalite ayarını seçeceğiniz ve insanları
      yakalayan şeffaflık tuhaflığıyla nasıl başa çıkacağınız.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>WebP neden var</h2>
    <p>
      Google, WebP'yi web resimlerini küçültmek için geliştirdi. Karşılaştırılabilir
      kalitede, bir WebP dosyası tipik olarak eşdeğer JPG'den %25-35 daha
      küçüktür ve bu, bir sayfa 20 resim yüklediğinde önemli bir fark yaratır.
      Chrome, Firefox, Safari ve Edge'in tümü WebP'yi yerel olarak destekler,
      bu nedenle çoğu web sitesi WebP sunar ve bant genişliğinden tasarruf
      sağlar. Web'deki hikayenin tamamı bu.
    </p>

    <h2>JPG neden hala güvenli varsayılan</h2>
    <p>
      Bir resim tarayıcı bağlamından çıktığı anda, WebP desteği sorunlu hale
      gelir. Bozulduğu belirli yerler:
    </p>
    <ul>
      <li>
        <strong>Eski CMS'ler</strong> (doğru eklentiye sahip olmayan bazı
        WordPress kurulumları, eski kurumsal araçlar) — yükleme başarısız olur
        veya resim görüntülenmez.
      </li>
      <li>
        <strong>Matbaalar</strong> — neredeyse hiçbiri WebP kabul etmez. JPG
        veya TIFF, nokta.
      </li>
      <li>
        <strong>Bazı e-posta istemcileri</strong> — özellikle Outlook. Satır içi
        bir resim olarak bir WebP gönderirseniz, alıcılarınızın yarısı kırık bir
        simge görür.
      </li>
      <li>
        <strong>iMessage fotoğraf önizlemeleri</strong> — WebP'ler güvenilir bir
        şekilde önizleme oluşturmaz; JPG'ler oluşturur.
      </li>
      <li>
        <strong>Eski slayt gösterisi ve belge yazılımları</strong> — PowerPoint,
        eski Keynote, 2021'den önceki çoğu Word sürümü.
      </li>
    </ul>
    <p>
      Bir resmin nereye gideceğinden emin değilseniz, JPG'ye dönüştürün. 100KB
      ekleyecek ve olası bir düzine hatadan kaçınacaksınız.
    </p>

    <h2>Kalite kaydırıcı rehberliği</h2>
    <p>
      JPG kalitesi 0-100 ölçeğindedir. Fotoğraflar için <strong>92</strong>
      ideal noktadır: kaynaktan esasen ayırt edilemez, makul dosya boyutu. Genel
      web kullanımı için 85'e, küçük resimler için 75'e düşürün. Metin içeren
      ekran görüntüleri veya grafikler için (JPG bunlar için gerçekten doğru
      format olmasa da), 95+ kalın aksi takdirde metin kenarları bulanıklaşır.
    </p>
    <p>
      En iyisi olduğunu düşünerek kaliteyi 100'e çıkarmayın. 100, çoğu JPG
      sıkıştırmasını devre dışı bırakır ve dosyayı 92'ye göre neredeyse hiç
      görsel iyileştirme olmadan şişirir. 92 pratik maksimumdur.
    </p>

    <h2>Şeffaflık sorunu</h2>
    <p>
      WebP şeffaflığı (alfa kanalı) destekler. JPG desteklemez. Şeffaf alanları
      olan bir WebP'yi JPG'ye dönüştürdüğünüzde, bu şeffaf piksellerin bir
      <em>şey</em> haline gelmesi gerekir — ve dönüştürücü sessizce siyahı
      seçerse, temiz bir kesim beklediğiniz yerde siyah bir kare üzerinde bir
      logoyla karşılaşırsınız.
    </p>
    <p>
      Standart çözüm: beyaza düzleştirin. Dışa aktarmadan önce arka planı beyaz
      olarak ayarlayın, böylece şeffaf alanlar beyaz pikseller haline gelir. Bu,
      çoğu belge ve e-posta arka planıyla eşleşir, böylece resim temiz görünür.
      Nihai arka planı biliyorsanız (belirli bir marka rengi, koyu bir tema),
      bunun yerine o renge düzleştirin.
    </p>
    <p>
      Şeffaflığın korunmasına gerçekten ihtiyacınız varsa, JPG yerine PNG'ye
      dönüştürün. Daha büyük dosya, ancak alfa kanalı hayatta kalır.
    </p>

    <h2>Toplu dönüştürme</h2>
    <p>
      Bir seferde bir dosyayı dönüştürmek, tek seferlik bir işlem için iyidir.
      Az önce bir fotoğraf dökümünden 40 WebP resmi indirdiyseniz, hepsini bir
      kerede bir toplu dönüştürücüye sürükleyin.{" "}
      <a href="/tools/webp-to-jpg">WebP'den JPG'ye dönüştürücümüz</a>{" "}
      tarayıcıda toplu işlemleri yönetir ve daha genel olan{" "}
      <a href="/tools/image-format-converter">resim formatı dönüştürücümüz</a>
      {" "}ayrıca birkaç PNG veya HEIC karışmışsa herhangi bir formattan formata
      kombinasyonunu yönetir.
    </p>

    <h2>Dosya adlarıyla ilgili bir tuzak</h2>
    <p>
      Bir CMS'ye veya dosya paylaşımına gönderilecek resimleri dönüştürüyorsanız,
      dosya adı uzantısının gerçekten <code>.webp</code>'den{" "}
      <code>.jpg</code>'ye değiştiğinden emin olun. Bazı araçlar orijinal adı
      korur, bu da size teknik olarak bir JPG olan{" "}
      <code>photo.webp</code> bırakır — bazı sistemler formatı uzantıdan
      çıkarır ve reddeder. Otuz saniyelik yeniden adlandırma, destek talebini
      kurtarır.
    </p>
  </>
);