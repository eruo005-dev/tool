import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Renk kontrastı, web'de en sık ihlal edilen erişilebilirlik kuralıdır ve düzeltilmesi en kolay olanlardan biridir. WCAG, ön plan ve arka plan parlaklığı arasındaki sayısal oranları tanımlar; bunları karşılamazsanız, düşük görüşe sahip kişiler, kötü ekranlar veya güneş ışığı parlaması metninizi okuyamaz. İyi haber şu ki, matematik tamamen otomatikleştirilebilir ve eşikler iyi tanımlanmıştır. Bu kılavuz, oranların ne anlama geldiğini, AA ve AAA arasındaki farkı, büyük metin esnekliğinin nerede uygulandığını, parlaklığın aslında nasıl hesaplandığını ve ekiplerin gövde metnini bir kez kontrol edip işi bitmiş saymasına neden olan daha ince durumları (bağlantı renkleri, devre dışı durumlar, karanlık mod) açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>WCAG eşikleri</h2>
    <p>
      Kontrast, 1:1 (kontrast yok) ile 21:1 (saf siyah üzerinde saf beyaz) arasında bir oran olarak ifade edilir. Ezberlemeniz gereken eşikler:
    </p>
    <pre>{`                     Normal metin   Büyük metin   UI bileşenleri
WCAG AA              4.5 : 1        3 : 1         3 : 1
WCAG AAA             7 : 1          4.5 : 1       yok`}</pre>
    <p>
      <strong>Normal metin</strong>, 18pt (≈24px) normal veya 14pt kalın'ın altındaki her şeydir. <strong>Büyük metin</strong>, 18pt+ normal veya 14pt+ kalın'dır. <strong>UI bileşenleri</strong>, form kenarlıkları, simgeler, odak göstergeleri — anlam taşıyan metin olmayan her şeyi içerir.
    </p>

    <h2>AA ve AAA</h2>
    <p>
      <strong>AA, çoğu yargı bölgesinde yasal taban çizgisidir</strong> (ADA, Section 508, EN 301 549, AODA). Halka açık bir ürün gönderiyorsanız, en azından AA'yı hedefleyin.
    </p>
    <p>
      <strong>AAA altın standarttır</strong>. Yalnızca birkaç yerde devlet hizmetleri için gereklidir. Ürün çalışmaları için, gövde metninde AAA'ya ulaşmak makul bir kuzey yıldızıdır — size hiçbir maliyeti yoktur ve kötü ekranlar, doğrudan güneş ışığı ve yaşlanan kullanıcılar için size pay sağlar.
    </p>

    <h2>Parlaklık nasıl hesaplanır</h2>
    <p>
      Kontrast oranı, ham RGB'den değil, bağıl parlaklıktan gelir. Her kanal 0–1'e normalleştirilir, gama çözülür, ardından insan gözünün o renge ne kadar duyarlı olduğuna göre ağırlıklandırılır:
    </p>
    <pre>{`L = 0.2126 R + 0.7152 G + 0.0722 B`}</pre>
    <p>
      Yeşil baskındır. Saf yeşil (#00ff00) 0.7152 parlaklığa sahiptir; saf kırmızı 0.2126; saf mavi 0.0722. Bu nedenle koyu mavi siyah üzerinde berbat görünür (her ikisi de çok düşük parlaklığa sahiptir) koyu kırmızı siyah üzerinde en azından biraz okunabilir.
    </p>
    <pre>{`kontrast oranı = (L_açık + 0.05) / (L_koyu + 0.05)`}</pre>
    <p>
      <code>+ 0.05</code> sıfıra bölmeyi önler ve parlamayı hesaba katar. Pratik çıkarım: kontrastı "renklerin ne kadar farklı göründüğünden" sezemezsiniz. Sayıları hesaplayın.
    </p>

    <h2>Büyük metin esnekliği</h2>
    <p>
      Daha büyük metnin okunması daha kolaydır, bu nedenle WCAG büyük metin için 3:1'e düşmenize izin verir. Bu, gövde metninde başarısız olacak orta gri başlıklara izin verir. Sınırlar:
    </p>
    <pre>{`18pt normal  =  24px           (AA büyük izin verilir)
14pt kalın    =  18.66px kalın   (AA büyük izin verilir)`}</pre>
    <p>
      Yaygın bir hata: 18px kalın alt başlıklar için esnekliği kullanmak. 18px kalın, 14pt kalın değildir — ~13.5pt'dir. Dürüst olmak için pt cinsinden ölçün.
    </p>

    <h2>Paragrafların içindeki bağlantı renkleri</h2>
    <p>
      Bağlantıların <em>iki</em> kontrasta ihtiyacı vardır: sayfa arka planına karşı <strong> ve</strong> çevreleyen gövde metnine karşı. WCAG 1.4.1, rengin tek sinyal olamayacağını söyler. Geçmek için iki yol:
    </p>
    <p>
      <strong>Bağlantının altını çizin.</strong> Artık alt çizgi sinyali taşır ve bağlantı renginin yalnızca metin-arka plan oranını karşılaması gerekir.
    </p>
    <p>
      <strong>Bağlantı ile gövde metni arasında 3:1 renk farkı</strong> ve arka plana karşı geçerli bir kontrast kullanın.
    </p>
    <p>
      Estetik için alt çizgileri kaldırırsanız, renk dışı sinyallemeyi kapsamak için 3:1-metne testine ve başka bir sinyale (kalın, üzerine gelindiğinde alt çizgi) ihtiyacınız vardır.
    </p>

    <h2>Devre dışı durumlar</h2>
    <p>
      WCAG, devre dışı kontrolleri kontrast gereksinimlerinden açıkça muaf tutar — ancak bu "görünmez olması sorun değil" anlamına gelmez. Kullanıcıların yine de bir düğmenin var olduğunu, sadece etkileşimli olmadığını görmeleri gerekir. Yaygın bir model: metin kontrastını düğmeye karşı ~3:1'de tutun ve arka plan dolgusunu açın. Azaltılmış opaklık görsel olarak işe yarar; sadece ~2:1'in altına düşmeyin, aksi takdirde kontrol bulunamaz hale gelir.
    </p>

    <h2>Yer tutucu metni</h2>
    <p>
      Çoğu tarayıcı, yer tutucu metnini ~%40 opaklıkta işler ve bu neredeyse her zaman AA'da başarısız olur. Bunu geçersiz kılın:
    </p>
    <pre>{`::placeholder {
  color: #6b7280; /* gray-500, beyaz üzerinde ~4.6:1 */
  opacity: 1;
}`}</pre>
    <p>
      Ve unutmayın, yer tutucular asla etiketlerin yerini almamalıdır. Geçerli kontrasta sahip olsalar bile, kullanıcı yazmaya başlar başlamaz kaybolurlar.
    </p>

    <h2>Karanlık mod</h2>
    <p>
      Saf siyah üzerinde saf beyaz 21:1'dir — teknik olarak mükemmel ancak OLED ekranlarda aslında acı vericidir. Her iki ucu da yumuşatın:
    </p>
    <pre>{`bg:   #0a0a0a   (siyaha yakın)
text: #e5e5e5   (beyaza yakın)
oran: 14.5 : 1   (yeterli, gözler için daha kolay)`}</pre>
    <p>
      Karanlık mod paletinizi ayrı ayrı denetleyin. Ekipler genellikle açık modu halleder, ardından her bileşen için kontrastı yeniden kontrol etmeden renkleri tersine çevirir. Kenarlık renkleri, devre dışı durumlar ve marka renkleri genellikle özel karanlık mod değerlerine ihtiyaç duyar.
    </p>

    <h2>Görsellerin üzerindeki metin</h2>
    <p>
      Manşetli kahraman görselleri, kontrastın en dramatik şekilde başarısız olduğu yerdir çünkü arka plan düz bir renk değildir. Seçenekler:
    </p>
    <p>
      <strong>Koyu katman.</strong> Görselin üzerinde %40–60 siyah bir gradyan, ortalama parlaklığı beyaz metnin geçmesi için yeterince düşürür.
    </p>
    <p>
      <strong>Metin gölgesi.</strong> İnce bir <code>text-shadow: 0 1px 3px rgba(0,0,0,0.6)</code> görsele dokunmadan yerel kontrast ekler.
    </p>
    <p>
      <strong>Kapsayıcı arka planı.</strong> Metni doğrudan görselin üzerine değil, yarı saydam bir panelin üzerine yerleştirin.
    </p>

    <h2>Başarısız olan marka renkleri</h2>
    <p>
      Şaşırtıcı sayıda marka paleti, varsayılan ağırlıklarda AA'da başarısız olur. Beyaz üzerinde orta yeşiller (#4caf50 civarı) genellikle 2.2:1'dir. Gök mavileri (#3b82f6 civarı) yaklaşık 3.7:1'dir — büyük metin veya düğme arka planları için iyi, 14px gövde metni için değil. Başarısız bir marka rengini devraldığınızda:
    </p>
    <p>
      Tonu gövde kullanımı için koyulaştırın ve orijinalini çizimler ve simgeler için saklayın. Çoğu tasarım sistemi her ikisini de gönderir — onlara <code>blue-500</code> ve <code>blue-700</code> adını verin — ve hangisinin metin için olduğunu belgeleyin.
    </p>

    <h2>Otomatik ve manuel kontroller</h2>
    <p>
      Otomatik araçlar aritmetik başarısızlıkları yakalar — düz renk üzerinde düz renk — ancak şunları kaçırır:
    </p>
    <ul>
      <li>Görseller veya gradyanlar üzerindeki metin</li>
      <li>Çalışma zamanı teması durumuna bağlı içerik</li>
      <li>Dinamik olarak oluşturulan renkler (kullanıcı avatarları, çizelgeler)</li>
      <li>Yalnızca klavye navigasyonu sırasında görünen odak göstergeleri</li>
    </ul>
    <p>
      Temel olarak axe veya Lighthouse'u çalıştırın; ardından en çok ziyaret edilen on sayfanızı hem açık hem de karanlık modda, odak görünür durumdayken manuel olarak nokta kontrolü yapın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Yalnızca birincil metin rengini kontrol etmek.</strong> İkincil, üçüncül, devre dışı ve yer tutucu renklerin tümü kendi kontrollerine ihtiyaç duyar.
    </p>
    <p>
      <strong>Güzel bir monitörde bir kez test etmek.</strong> Düşük kaliteli mobil ekranlar, projektörler ve güneş ışığı kontrastı etkili bir şekilde azaltır. AA size pay sağlar — tasarım incelemesinde hepsini harcamayın.
    </p>
    <p>
      "İnce" UI için <strong>gri üzerine gri kullanmak.</strong> İnce, okunamaz anlamına gelmemelidir. Zaman damgası metniniz AA'yı geçemiyorsa, kontrastını artırın veya tamamen atlanacağını kabul edin.
    </p>
    <p>
      <strong>Durumu iletmek için renge güvenmek.</strong> "Hata" için kırmızı metin ve "başarı" için yeşil metin her zaman bir simge veya etiketle eşleştirilmelidir.
    </p>
    <p>
      <strong>Odak göstergelerini unutmak.</strong> Odak halkalarının bitişik renklere karşı 3:1 olması gerekir. Varsayılan tarayıcı halkası genellikle geçer; özel halkalar genellikle geçmez.
    </p>
    <p>
      <strong>Metin arka planı olarak bir gradyan seçmek.</strong> Test etmeniz gereken, ortalamayı değil, gradyandaki en kötü durum noktasıdır.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Anında bir AA / AAA kararı için ön plan ve arka plan değerlerinizi{" "}
      <a href="/tools/contrast-checker">kontrast denetleyicisine</a> bırakın. Markayı kaybetmeden bir rengi geçme aralığına itmeniz gerektiğinde,{" "}
      <a href="/tools/color-converter">renk dönüştürücü</a> hex, HSL ve OKLCH'yi yan yana değiştirmenize olanak tanır ve{" "}
      <a href="/tools/color-picker">renk seçici</a> mevcut varlıklardan kesin değerleri çeker, böylece bir tahminden değil, gerçek kaynaktan başlarsınız.
    </p>
  </>
);