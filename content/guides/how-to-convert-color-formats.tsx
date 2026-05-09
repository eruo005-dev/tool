import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      HEX, RGB, HSL, HSB, OKLCH, CMYK — aynı rengin birçok temsili
      vardır ve her biri belirli bir bağlamda anlamlıdır. HEX
      derli topludur ve kopyalamaya uygundur. HSL ince ayar
      yapmak için sezgiseldir. OKLCH algısal olarak tek tiptir.
      CMYK baskı içindir. Bunlar arasında dönüşüm mekaniktir, ancak
      iş için doğru olanı seçmek ve gamut kırpma / hassasiyet
      kaybından kaçınmak en çok kafa karışıklığının yaşandığı yerdir.
      Bu kılavuz, renk modellerini, dönüşümlerin gerçekte nasıl
      çalıştığını, sRGB ve geniş gamut, yeni CSS Color 4
      biçimlerini (oklch, color(), display-p3), baskı
      hususlarını ve gidiş-dönüşlerde doğruluk kaybını nasıl
      önleyeceğinizi kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Yaygın biçimler</h2>
    <p>
      <strong>HEX:</strong> <code>#ff5733</code>. RGB için altı
      onaltılık basamak veya RGBA için sekiz. Derli toplu,
      kopyala-yapıştıra uygun, tasarım tokenları için varsayılan.
    </p>
    <p>
      <strong>RGB / RGBA:</strong> <code>rgb(255, 87, 51)</code>. Kırmızı,
      yeşil, mavi 0-255 tamsayıları (veya 0-100% ya da 0-1 ondalık).
      Alfa kanalı 0-1. Ekran çıktısının doğrudan temsili.
    </p>
    <p>
      <strong>HSL / HSLA:</strong>{" "}
      <code>hsl(12, 100%, 60%)</code>. Ton (0-360), doygunluk (%),
      açıklık (%). RGB'den daha kolay ince ayar — daha koyu bir kırmızı mı
      istiyorsunuz? Açıklığı düşürün, tonu koruyun.
    </p>
    <p>
      <strong>HSB / HSV:</strong> Ton, doygunluk, değer. HSL'ye benzer
      ancak farklı açıklık anlamları vardır. Photoshop HSB kullanır.
      CSS'de doğrudan desteklenmez.
    </p>
    <p>
      <strong>OKLCH / OKLAB:</strong>{" "}
      <code>oklch(67% 0.18 34)</code>. Algısal olarak tek tip bir
      renk uzayında açıklık, kroma, ton. Çamurlu orta noktalar olmadan
      düzgün enterpolasyon yapar. CSS Color 4.
    </p>
    <p>
      <strong>CMYK:</strong>{" "}
      <code>cmyk(0%, 66%, 80%, 0%)</code>. Cyan, magenta, sarı,
      anahtar (siyah). Baskı için. CSS'de desteklenmez; tasarım
      araçlarında ve baskı iş akışlarında kullanılır.
    </p>

    <h2>HEX ↔ RGB dönüşümü</h2>
    <p>
      Tamamen mekanik. HEX, kanal başına iki basamak olmak üzere
      0-255 tamsayılarının 16 tabanında kodlanmasıdır:
    </p>
    <pre>
{`#ff5733
  ff → 255 → R
  57 → 87  → G
  33 → 51  → B
= rgb(255, 87, 51)`}
    </pre>
    <p>
      <strong>3 basamaklı HEX:</strong> <code>#f53</code>,{" "}
      <code>#ff5533</code>'ün kısaltmasıdır — her basamak
      çoğaltılır. Kullanışlıdır ancak sizi 4096 renkle (16³)
      sınırlar.
    </p>
    <p>
      <strong>Alfa ile 8 basamaklı HEX:</strong> <code>#ff573380</code>
      {" "}— son iki basamak alfa değeridir 0-255 (80 = 128 = ~%50).
      CSS Color 4 bunu destekler.
    </p>

    <h2>RGB ↔ HSL dönüşümü</h2>
    <p>
      Mekanik değil — ton ve açıklığı bulmak için min/max
      matematiği içerir. Formül:
    </p>
    <pre>
{`R' = R/255, G' = G/255, B' = B/255
max = max(R', G', B'), min = min(R', G', B')

L = (max + min) / 2
S = (max-min) / (1 - |2L-1|)   // veya max=min ise 0
H = hangisinin max olduğuna bağlıdır:
  R max ise: H = 60 * ((G'-B')/(max-min) mod 6)
  G max ise: H = 60 * ((B'-R')/(max-min) + 2)
  B max ise: H = 60 * ((R'-G')/(max-min) + 4)`}
    </pre>
    <p>
      Bunu ezberlemenize gerek yok — kütüphaneler ve dönüştürücü
      araçlar halleder. Ancak matematiği bilmek, neden{" "}
      <code>hsl(0, 0%, 50%)</code>'nin gri olduğunu (doygunluk 0
      tonu önemsiz kılar) anlamanıza yardımcı olur.
    </p>

    <h2>sRGB ve geniş gamut</h2>
    <p>
      Geleneksel HEX / RGB / HSL, sRGB'yi varsayar — web'in
      varsayılan gamutu, görünür renklerin ~%35'ini kapsar. Modern
      ekranlar (iPhone, MacBook, üst düzey monitörler) Display P3
      (~%45) veya Rec2020 (~%75) gösterebilir.
    </p>
    <p>
      HEX, P3 renklerini temsil edemez. Markanızın telefonunuzda
      donuk görünen canlı bir kırmızısı varsa, muhtemelen sRGB'ye
      kırpıyorsunuzdur:
    </p>
    <pre>
{`/* yalnızca sRGB */
.brand { color: #ff0000; }

/* P3 destekli, sRGB yedek */
.brand {
  color: #ff0000;
  color: color(display-p3 1 0 0);
}`}
    </pre>
    <p>
      CSS Color 4 <code>color(display-p3 r g b)</code>, daha geniş
      gamutu açar. Tarayıcılar, sRGB ekranlarda bunu yok sayar ve
      yedeği kullanır.
    </p>

    <h2>OKLCH — algısal olarak tek tip</h2>
    <p>
      HSL renklerini doğrusal olarak karıştırmak çamurlu orta noktalar
      üretir: <code>hsl(240, 100%, 50%)</code> (mavi) ile{" "}
      <code>hsl(0, 100%, 50%)</code> (kırmızı) arasındaki orta nokta
      gri-mordur, hoş bir geçiş değildir.
    </p>
    <p>
      OKLCH, eşit sayısal adımların göze eşit derecede farklı
      göründüğü bir renk uzayı kullanarak bunu düzeltir. OKLCH'deki
      geçişler canlı ve pürüzsüz kalır. Gradyanlar, grafik renk
      skalaları ve tema token oluşturma için önerilir.
    </p>
    <pre>
{`/* sRGB'de gradyan — çamurlu görünebilir */
background: linear-gradient(#ff0000, #0000ff);

/* OKLCH'de gradyan — algısal olarak pürüzsüz */
background: linear-gradient(in oklch, #ff0000, #0000ff);`}
    </pre>

    <h2>CMYK dönüşümü — ve neden kayıplı olduğu</h2>
    <p>
      Monitör renkleri yayılan ışıktan (eklemeli RGB) gelir; baskı
      emilen ışıktan (çıkarımlı CMYK) gelir. Dönüşüm temelde
      kusurludur — CMYK tüm sRGB renklerini (özellikle parlak maviler,
      yeşiller) üretemez ve sRGB tüm CMYK renklerini (özellikle koyu
      kahverengiler, bazı sarılar) üretemez.
    </p>
    <p>
      <strong>Basit formül:</strong>
    </p>
    <pre>
{`K = 1 - max(R, G, B)
C = (1 - R - K) / (1 - K)
M = (1 - G - K) / (1 - K)
Y = (1 - B - K) / (1 - K)`}
    </pre>
    <p>
      Bu, temel dönüşüm için çalışır ancak mürekkep özelliklerini,
      kağıdı, baskı kalibrasyonunu yok sayar. Gerçek baskı iş
      akışları, doğru dönüşüm için ICC profilleri (GRACoL 2013,
      Fogra 51) kullanır. Tasarım araçları (Illustrator, InDesign)
      bunu otomatik olarak yapar.
    </p>
    <p>
      <strong>Pratik ipucu:</strong> ekranlar için CMYK'da tasarım
      yapmayın. sRGB'de (veya dikkatle Display P3'te) tasarım yapın
      ve ICC profil dönüşümü ile tasarım aracında baskıya aktarın.
    </p>

    <h2>Hassasiyet ve gidiş-dönüş</h2>
    <p>
      HEX → RGB kesindir (bire bir eşleme). RGB → HSL → RGB,
      kayan nokta matematiği nedeniyle çok küçük bir hassasiyet
      kaybına uğrayabilir, ancak genellikle kanal başına &lt;%1'dir.
      Çoğu kullanım için güvenlidir.
    </p>
    <p>
      sRGB → P3 → sRGB, <em>orijinal</em> sRGB gamutunda ise
      kayıpsızdır. Aksi takdirde, P3 → sRGB adımı kırpar.
    </p>
    <p>
      sRGB → CMYK → sRGB kayıplıdır. Zorunda kalmadıkça gidiş-dönüş
      yapmayın.
    </p>

    <h2>Erişilebilirlik ve kontrast</h2>
    <p>
      Bir rengin gücü, bir arka plana karşı kontrastıyla aynı şey
      değildir. WCAG kontrast oranları (gövde metni için 4.5:1),
      parlaklıktan (R, G, B'nin ağırlıklı bir kombinasyonu — doğrudan
      parlaklık değil) hesaplanır.
    </p>
    <p>
      HSL'ye dönüştürmek ve açıklığı eşleştirmek, eşleşen kontrastı
      garanti etmez. Her zaman bir kontrast denetleyicisi ile
      doğrulayın.
    </p>

    <h2>Renk seçici iş akışları</h2>
    <p>
      <strong>Tasarım araçları:</strong> Figma, Sketch, Photoshop'un
      tümü HEX, RGB, HSL, HSB girmenize ve aralarında geçiş yapmanıza
      olanak tanır. Figma, 2024'ten beri OKLCH'yi destekler.
    </p>
    <p>
      <strong>Geliştirici araçları:</strong> Chrome DevTools ve Firefox
      DevTools, herhangi bir renk değerinde temsiller arasında geçiş
      yapmanızı sağlayan renk seçicilere sahiptir.
    </p>
    <p>
      <strong>CLI / derleme:</strong>{" "}
      <code>culori</code> (JS), <code>colour-science</code> (Python)
      gibi kütüphaneler, OKLCH, Display P3 ve ICC profilleri dahil
      modern renk matematiğini halleder.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Baskı dosyalarından CMYK'yı kopyalayıp web'e yapıştırmak.</strong>
      {" "}Tarayıcılar CMYK'yı anlamaz. Tasarım aracınız aracılığıyla
      sRGB'ye dönüştürün.
    </p>
    <p>
      <strong>CMYK üzerinden gidiş-dönüşlerin kayıpsız olmasını beklemek.</strong>
      {" "}Değiller. sRGB'yi gerçek kaynak olarak tutun; her baskı işi
      için CMYK dışa aktarın.
    </p>
    <p>
      <strong>Çamurlu görünen sRGB gradyanları yapmak.</strong>{" "}
      <code>in oklch</code> veya <code>in hsl longer hue</code>
      kullanın.
    </p>
    <p>
      <strong>Display P3 yedeğini unutmak.</strong>{" "}
      <code>color(display-p3 ...)</code> kullanıyorsanız, eski
      tarayıcılar ve SDR ekranlar için her zaman bir HEX yedeği
      sağlayın.
    </p>
    <p>
      <strong>Açıklığı eşleştirip kontrast eşitliği beklemek.</strong>
      {" "}WCAG, HSL açıklığını değil, parlaklığı kullanır. Bir
      kontrast aracıyla kontrol edin.
    </p>
    <p>
      <strong>Gradyanlar veya kritik renkler için 3 basamaklı HEX kullanmak.</strong>
      {" "}Yalnızca 4096 renk mevcuttur; bantlaşma mümkündür. 6 basamaklı
      kullanın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      HEX / RGB / HSL / HSB / OKLCH'yi{" "}
      <a href="/tools/color-converter">renk dönüştürücü</a> ile
      dönüştürün. Gerçek tasarımlardan örnek almak için{" "}
      <a href="/tools/color-picker">renk seçici</a> ile
      ve erişilebilirliği doğrulamak için{" "}
      <a href="/tools/contrast-checker">kontrast denetleyicisi</a> ile
      eşleştirin.
    </p>
  </>
);