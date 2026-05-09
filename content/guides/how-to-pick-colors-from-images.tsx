import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Damlalık, dünyada zaten var olan bir rengi yakalamanın en hızlı yoludur. Bir ekran görüntüsüne gözlerini kısıp hex kodlarını tahmin etmek yerine, bir piksele tıklar ve değeri kopyalarsınız. Artık her işletim sistemi ve tasarım aracı bir damlalıkla birlikte geliyor ve tarayıcılar nihayet EyeDropper API'sini yerel olarak destekliyor. Zor kısım tıklamak değil, <em>doğru</em> pikseli seçmektir; çünkü sıkıştırılmış görüntüler, kenar yumuşatılmış kenarlar ve gamma kaydırmalı ekranlar, gözlerinizin gerçekte gördüğüyle eşleşmeyen bir değer verebilir. Bu kılavuz; araçları, örnekleme stratejisini, ekran görüntülerini işlemeyi, marka eşleştirme iş akışlarını ve &ldquo;sadece damlalığı kullan&rdquo;ın tam cevap olmadığını gösteren erişilebilirlik uyarılarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir damlalığın gerçekte ne yaptığı</h2>
    <p>
      İmlecin altındaki bir pikselin RGB değerini okur ve bu değeri istediğiniz formatta (hex, RGB, HSL, OKLCH) size verir. Sihir yok, sadece bir piksel okuma. İlginç olan her şey, hangi pikseli örneklediğinizdedir.
    </p>
    <p>
      Tek piksellik bir örnek kırılgandır. Fotoğraflar, JPEG'ler ve gürültülü her şey için 3x3 veya 5x5'lik bir ortalama daha güvenilirdir. Çoğu masaüstü aracı varsayılan olarak tek bir piksel kullanır ancak ayarlardan örnek boyutunu değiştirmenize izin verir.
    </p>

    <h2>Tarayıcı EyeDropper API'si</h2>
    <p>
      Chrome, Edge ve Opera <code>window.EyeDropper</code>'ı destekler. Tek bir yöntem, tek bir promise, geriye tek bir hex dizesi:
    </p>
    <pre>{`const eyeDropper = new EyeDropper();
const { sRGBHex } = await eyeDropper.open();
console.log(sRGBHex); // "#3b82f6"`}</pre>
    <p>
      İmleç bir büyütece dönüşür ve kullanıcı ekranda herhangi bir yere tıklar. Tarayıcı pencereleri, masaüstü, diğer uygulamalar arasında çalışır &mdash; gerçek işlenmiş piksellerden alır. Safari ve Firefox henüz bunu desteklemez; buna güvenmeden önce özellik tespiti yapın.
    </p>

    <h2>İşletim sistemi düzeyindeki damlalıklar</h2>
    <p>
      macOS Digital Color Meter (yerleşik), Windows PowerToys Color Picker, GNOME Color Picker &mdash; hepsi ekrandaki herhangi bir pikseli örneklemenize ve değeri panoya kopyalamanıza olanak tanır. Kısayol tuşları önemlidir; uygulamayı her seferinde açmak yerine bunları kullanmak için kendinizi eğitin.
    </p>
    <ul>
      <li>macOS: Shift-Cmd-4, Digital Color Meter'da boşluk çubuğuna basın</li>
      <li>PowerToys (Windows): Varsayılan olarak Win-Shift-C</li>
      <li>Figma: Seçili bir katmanla I tuşuna basın</li>
      <li>Photoshop: I</li>
      <li>Chrome DevTools: Herhangi bir renk değerinin yanındaki renk örneği</li>
    </ul>

    <h2>Örnekleme stratejisi</h2>
    <p>
      İyi bir örnek şunlardan kaçınır:
    </p>
    <p>
      <strong>Kenar yumuşatılmış kenarlar.</strong> Kenardan bir piksel ötedeki, ön plan ve arka planın bir karışımıdır. Düz bir bölgenin merkezine doğru ilerleyin.
    </p>
    <p>
      <strong>JPEG blok sınırları.</strong> Kalite 80'de, her 8x8'lik blokta hafif bir renk kayması olur. Bir bloğun dikiş yerini değil, merkezini örnekleyin.
    </p>
    <p>
      <strong>Gradyanlar.</strong> Değer, tam olarak nereye tıkladığınıza bağlıdır. Gradyanın hangi ucunu istediğinize karar verin; sonra orayı örnekleyin, yarısını değil.
    </p>
    <p>
      <strong>Gölgeler ve parlak noktalar.</strong> Bir markayı eşleştirmeye çalışıyorsanız, speküler parlak noktaları ve saf siyah gölgeleri yok sayın &mdash; orta ton bölgesini örnekleyin.
    </p>

    <h2>Ekran görüntülerinden örnekleme</h2>
    <p>
      Ekran görüntüleri gamma, renk profili ve (paylaşılırsa) sıkıştırmadan geçer. Ekran görüntüsü mutlaka orijinal ile aynı renk değildir. Marka renklerini güvenilir bir şekilde eşleştirmek için:
    </p>
    <ul>
      <li>Bir ekran görüntüsü yerine orijinal PNG veya SVG ile çalışın.</li>
      <li>Yalnızca bir ekran görüntüsü mevcutsa, 1x yakınlaştırmada alın.</li>
      <li>Örneklemeden önce işletim sistemi düzeyindeki &ldquo;renkleri iyileştir&rdquo; / HDR'yi devre dışı bırakın.</li>
      <li>5x5 örnekleyin ve tek bir piksel yerine ortalamayı kullanın.</li>
    </ul>

    <h2>Renkleri araçlar arasında eşleştirme</h2>
    <p>
      Hex mükemmel bir şekilde dönüş yapar: Figma'daki <code>#3b82f6</code>, CSS'deki ile aynıdır. RGB-255 mükemmel bir şekilde dönüş yapar. Sorunlu olduğu yerler:
    </p>
    <p>
      <strong>Yüzdeler.</strong> Bazı araçlar RGB'yi 0&ndash;1 kayan noktalı sayı olarak saklar ve yuvarlama kaymaya neden olabilir. Aktarım yaparken tamsayı RGB kullanın.
    </p>
    <p>
      <strong>Renk profilleri.</strong> Adobe-RGB dışa aktarımından örneklenen bir sRGB rengi aynı görünmeyecektir. Web çalışmaları için her zaman sRGB olarak dışa aktarın.
    </p>
    <p>
      <strong>HSL.</strong> HSL &harr; hex, doygunluk/parlaklık yüzdelerindeki tamsayı yuvarlaması nedeniyle kenarlarda kayıplıdır. Gerçeğin kaynağı olarak hex'i saklayın.
    </p>

    <h2>Markaya tam uyan renkleri elde etme</h2>
    <p>
      Logo PNG'sini örneklemek yaklaşıktır. Gerçek marka değerini almak için:
    </p>
    <ul>
      <li>Varsa marka kılavuzu PDF'ini kontrol edin.</li>
      <li>Markanın web sitesi CSS'sinde <code>:root</code> değişkenlerini inceleyin.</li>
      <li>SVG logosunu indirin ve fill özniteliğini okuyun.</li>
      <li>GitHub depolarında <code>tailwind.config.js</code> veya tema dosyalarına bakın.</li>
    </ul>
    <p>
      Bunların hiçbiri işe yaramadığında damlalığa başvurun. Yukarıdaki sıkıştırma ve profil sorunları nedeniyle damlalık, marka spesifikasyonu için son çaredir.
    </p>

    <h2>HDR ve geniş gamutlu ekranlar</h2>
    <p>
      Bir HDR monitörde damlalık, sRGB dışında değerler döndürebilir. Çoğu web iş akışı sRGB varsayar, bu nedenle değer kırpılır. Beklenmedik hex kodları görüyorsanız (piksel siyah göründüğünde <code>#101010</code> gibi şeyler), monitörünüz HDR modunda olabilir. Web kullanımı için renk seçerken SDR'ye geçin.
    </p>

    <h2>5x5 ortalama taktiği</h2>
    <p>
      Fotoğraflar için her zaman tek bir piksel yerine 3x3 veya 5x5 örnekleyin. Bir fotoğraftaki tek piksellik değere gürültü hakimdir. 5x5'lik bir ortalama size yerel ortalamayı verir, bu da bir insanın gerçekte algıladığı şeydir.
    </p>
    <pre>{`Kırmızı bir duvardaki tek piksel:      #c5302a
Aynı duvardaki 5x5 ortalama:        #c73330
İnsan tarafından algılanan renk:           5x5 değerine daha yakın`}</pre>

    <h2>Erişilebilirlik uyarıları</h2>
    <p>
      Damlalıklar &ldquo;bu piksel hangi renk&rdquo; sorusunu çözer ancak &ldquo;bu piksel hangi renk olmalı&rdquo; sorusunu çözmez. Bir markanın gri-beyaz alt başlığını örneklediniz diye onu kopyalamanız gerektiği anlamına gelmez &mdash; WCAG'yi geçemeyebilir. Seçim yaptıktan sonra her zaman kontrastı yeniden kontrol edin.
    </p>
    <p>
      Ayrıca: renk körlüğü. Sizin için göze çarpan bir renk, bir deuteranop için arka planıyla birleşebilir. Seçim yaptıktan sonra çifti bir simülatörden geçirin &mdash; erişilebilirliğin yargıcı olarak kendi gözlerinize güvenmeyin.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Kenar yumuşatılmış kenarlardan örnekleme.</strong> Düz bir bölgenin merkezine gidin. Kenar her zaman bir karışımdır.
    </p>
    <p>
      <strong>Orijinal mevcutken ekran görüntüsünden seçim yapma.</strong>{" "}
      Her sıkıştırma adımı rengi biraz kaydırır.
    </p>
    <p>
      <strong>Fotoğraflarda tek piksellik örnekler.</strong> Gürültü baskındır. Ortalama bir örnek alanı kullanın.
    </p>
    <p>
      <strong>Ekran renk profilini yok sayma.</strong> Geniş gamutlu bir monitörde yapılan sRGB seçimi, standart monitörlerde yeniden üretilemeyen bir değer döndürebilir.
    </p>
    <p>
      <strong>Kontrastı doğrulamama.</strong> Seçtiniz, markayla tutarlı ve yine de AA'yı geçemiyor. Sayıları hesaplayın.
    </p>
    <p>
      <strong>RGBA alfasını bir renk özelliği olarak ele alma.</strong> %40 opaklıkta <code>#000</code> seçmek size yeni bir renk değil, arka planla bir karışım verir. Düz bir değiştirme için etkili rengi istiyorsanız, harmanlanmış pikseli doğrudan örnekleyin.
    </p>
    <p>
      <strong>HDR/Night Shift/True Tone'u devre dışı bırakmayı unutma.</strong> Bunlar renk algınızı kaydırır ve bazıları işlenmiş gerçek değerleri de kaydırır.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Yüklenen herhangi bir görüntüden <a href="/tools/color-picker">renk seçici</a> ile bir hex seçin. Tam bir palet (yalnızca tek bir örnek değil) için <a href="/tools/color-extractor">renk çıkarıcıyı</a> kullanın ve tasarım aracınız az önce aldığınız hex yerine RGB, HSL veya OKLCH istediğinde hex'i <a href="/tools/color-converter">renk dönüştürücüden</a> geçirin.
    </p>
  </>
);