import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      İkili, sekizli, onlu, onaltılı — programcıların karşılaştığı sayı sistemlerinin %99'unu bu dört taban kapsar. Aralarında dönüşüm yapmak, deseni bir kez gördüğünüzde basittir ve bellek dökümlerini okumak, bayrakları anlamak, Unicode'u çözmek, izinlerle çalışmak veya düşük seviyeli sistemlerde hata ayıklamak için gereklidir. Bu kılavuz, matematiği (hepsi sadece bitleri farklı şekilde gruplamaktır), ikili ve onaltılı arasında zihinsel dönüşümü hızlandıracak kısayolları, her taban için gerçek dünya kullanım durumlarını ve elle yapmak yerine ne zaman bir araç kullanılacağını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>"Taban" aslında nedir</h2>
    <p>
      Bir sayı tabanı, değerleri temsil etmek için kullanılan benzersiz basamak sayısıdır. Onlu sistem 10 (0-9) kullanır; ikili sistem 2 (0-1) kullanır; onaltılı sistem 16 (0-9, A-F) kullanır.
    </p>
    <p>
      Her basamak konumu, tabanın bir kuvvetini temsil eder. Onlu sistemde 345, 3×100 + 4×10 + 5×1 anlamına gelir — 10'un kuvvetleri (10^2, 10^1, 10^0).
    </p>
    <p>
      İkili sistemde 101, 1×4 + 0×2 + 1×1 = 5 anlamına gelir — 2'nin kuvvetleri.
    </p>
    <p>
      Onaltılı sistemde 2F, 2×16 + 15 = 47 anlamına gelir — 16'nın kuvvetleri.
    </p>

    <h2>Pratikte karşılaşacağınız dört taban</h2>
    <p>
      <strong>İkili (taban 2):</strong> basamaklar 0, 1. Dijital mantığın ve bitlerin doğal dili. Yoğun bit manipülasyonu, donanım, dosya biçimi ayrıştırma.
    </p>
    <p>
      <strong>Sekizli (taban 8):</strong> basamaklar 0-7. Her basamak 3 bit'e karşılık gelir. Tarihsel olarak eski sistemlerde kullanılmıştır; günümüzde çoğunlukla Unix dosya izinlerinde görülür (chmod 755 sekizlidir).
    </p>
    <p>
      <strong>Onlu (taban 10):</strong> basamaklar 0-9. İnsan odaklı sayılar.
    </p>
    <p>
      <strong>Onaltılı (taban 16):</strong> basamaklar 0-9, A-F. Her basamak 4 bit'e karşılık gelir. Her yerde: bellek adresleri, renk kodları (#FF5733), HTTP onaltılısı, özetler, Unicode kod noktaları.
    </p>

    <h2>Onlu → ikili</h2>
    <p>
      Tekrar tekrar 2'ye bölün ve kalanları kaydedin; kalanları aşağıdan yukarıya okuyun.
    </p>
    <p>
      Örnek: 13'ün ikilisi.
    </p>
    <p>
      13 / 2 = 6 kalan 1
    </p>
    <p>
      6 / 2 = 3 kalan 0
    </p>
    <p>
      3 / 2 = 1 kalan 1
    </p>
    <p>
      1 / 2 = 0 kalan 1
    </p>
    <p>
      Aşağıdan yukarıya okuyun: 1101. Doğrulama: 8 + 4 + 0 + 1 = 13. ✓
    </p>

    <h2>İkili → onlu</h2>
    <p>
      Her biti 2'nin bir kuvvetiyle çarpın ve toplayın.
    </p>
    <p>
      Örnek: 10110'nun onlusu.
    </p>
    <p>
      1×16 + 0×8 + 1×4 + 1×2 + 0×1 = 22.
    </p>

    <h2>İkili ↔ onaltılı — kısayol</h2>
    <p>
      Her onaltılı basamak = 4 bit. Bu, matematik yapmadan grup grup onaltılı ↔ ikili arasında dönüşüm yapmanızı sağlar.
    </p>
    <p>
      16 yarım baytı ezberleyin (veya ilk birkaç sefer bakın):
    </p>
    <p>
      0=0000, 1=0001, 2=0010, 3=0011, 4=0100, 5=0101, 6=0110,
      7=0111, 8=1000, 9=1001, A=1010, B=1011, C=1100, D=1101,
      E=1110, F=1111.
    </p>
    <p>
      İkili → onaltılı: ikiliyi sağdan 4 bitlik gruplara ayırın, her grubu dönüştürün.
    </p>
    <p>
      11010110 → 1101 0110 → D6.
    </p>
    <p>
      Onaltılı → ikili: her onaltılı basamağı 4 bit'e genişletin.
    </p>
    <p>
      B3 → 1011 0011.
    </p>

    <h2>İkili ↔ sekizli — aynı fikir, 3'lü gruplar</h2>
    <p>
      Her sekizli basamak = 3 bit.
    </p>
    <p>
      110101 → 110 101 → 65 (sekizli). Doğrulama: 6×8 + 5 = 53 onlu; ikili 110101 = 32+16+4+1 = 53. ✓
    </p>
    <p>
      Sekizli → ikili: her basamağı 3 bit'e genişletin.
    </p>
    <p>
      755 (sekizli) → 111 101 101 (ikili). chmod izinlerini okumak için kullanışlıdır: rwx-r-x-r-x.
    </p>

    <h2>Onlu ↔ onaltılı</h2>
    <p>
      İki yaklaşım:
    </p>
    <p>
      <strong>Doğrudan:</strong> tekrar tekrar 16'ya bölün ve kalanları kaydedin (0-15, 10-15 A-F olarak). Aşağıdan yukarıya okuyun.
    </p>
    <p>
      <strong>İkili üzerinden:</strong> küçük sayılar için zihinsel olarak daha kolaydır. Onlu → ikili → 4'lü gruplara ayır → onaltılı.
    </p>
    <p>
      Örnek: 202'nin onaltılısı.
    </p>
    <p>
      202 / 16 = 12 kalan 10 → A.
    </p>
    <p>
      12 / 16 = 0 kalan 12 → C.
    </p>
    <p>
      Aşağıdan yukarıya okuyun: CA. Doğrulama: 12×16 + 10 = 202. ✓
    </p>

    <h2>Kod okuma — taban önekleri</h2>
    <p>
      Çoğu dil ayırt etmek için önekler kullanır:
    </p>
    <p>
      <strong>0b</strong> veya <strong>0B</strong>: ikili. 0b1101.
    </p>
    <p>
      <strong>0o</strong> veya baştaki <strong>0</strong> (eski C/Python): sekizli. 0o755 veya 0755.
    </p>
    <p>
      <strong>0x</strong> veya <strong>0X</strong>: onaltılı. 0xFF.
    </p>
    <p>
      Önek yok: onlu.
    </p>
    <p>
      <strong>Tuzak:</strong> C'de baştaki sıfır sekizli bir tehlikedir. 075, onlu 61'dir, 75 değil. Modern JavaScript bunu bıraktı: 0o75 çalışır; 075, sıkı modda bir hatadır.
    </p>

    <h2>Renkler, bellek ve özetler için neden onaltılı</h2>
    <p>
      <strong>Renkler (#FF5733):</strong> RGB'nin 3 baytı, her bayt 0-255, 2 onaltılı basamakla kompakt bir şekilde ifade edilir. Ondalıktan (255, 87, 51) daha okunabilir ve alttaki baytlarla kolayca eşleşir.
    </p>
    <p>
      <strong>Bellek adresleri (0x7FFEDB5A):</strong> adres alanı doğal olarak 4 baytlık veya 8 baytlık sınırlara hizalanır. Onaltılı, hizalamayı ve maskelemeyi görünür kılar.
    </p>
    <p>
      <strong>Özetler (MD5, SHA-256):</strong> ikili veriler okunabilirlik için onaltılı olarak sunulur. 32 onaltılı karakter = 16 bayt = 128-bit MD5.
    </p>
    <p>
      <strong>Unicode kod noktaları (U+1F600):</strong> Unicode tablosu etkin bir şekilde onaltılı olarak indekslenir.
    </p>

    <h2>Unix izinleri için sekizli</h2>
    <p>
      Her izin üçlüsü (okuma-yazma-çalıştırma), bir sekizli basamağa düzgünce sığan 3 bit'e karşılık gelir.
    </p>
    <p>
      r = 4, w = 2, x = 1. Birleştirmek için toplayın: rw = 6, rx = 5, rwx = 7.
    </p>
    <p>
      755 = sahip rwx (7), grup rx (5), diğerleri rx (5). Dizinler için yaygındır.
    </p>
    <p>
      644 = sahip rw (6), grup r (4), diğerleri r (4). Normal dosyalar için yaygındır.
    </p>
    <p>
      600 = sahip rw, grup ve diğerleri hiçbir şey. SSH anahtarları için.
    </p>

    <h2>Bit düzeyi işlemler — tabanın önemli olduğu yer</h2>
    <p>
      AND, OR, XOR, NOT, bit kaydırmalar. Sayıyı nasıl yazdığınızdan bağımsız olarak ikili gösterim üzerinde çalışır.
    </p>
    <p>
      <strong>Bayrak kontrolü:</strong> <code>if (flags &amp; FLAG_ADMIN)</code>. Tanımlı sabitler genellikle tek bitlerdir (0x1, 0x2, 0x4...) ve onaltılı veya ikili, bit desenini görünür kılar.
    </p>
    <p>
      <strong>Bit maskeleri:</strong> <code>color &amp; 0xFF</code> son baytı çıkarır. Onaltılı maske doğrudan "bu 8 biti tut" olarak okunur.
    </p>
    <p>
      <strong>Kaydırmalar:</strong> <code>x &lt;&lt; 4</code> 16 ile çarpar; <code>x &gt;&gt; 4</code> 16'ya böler. 4 bitlik değerleri baytlara paketlemek için kullanışlıdır.
    </p>

    <h2>İkinin tümleyeni — negatif ikili</h2>
    <p>
      Bilgisayarlar işaretli tam sayıları ikinin tümleyenini kullanarak temsil eder. n-bitlik bir ikili sayıyı olumsuzlamak için: tüm bitleri ters çevirin ve 1 ekleyin.
    </p>
    <p>
      8-bit ikinin tümleyeninde -5: 5, 00000101'dir → ters çevir → 11111010 → 1 ekle → 11111011. Doğrulama: 11111011 + 00000101 = 00000000 (taşma ile). ✓
    </p>
    <p>
      8-bitlik bir bayt, -128 ile 127 arasındaki değerleri temsil eder; 16-bitlik bir int, -32.768 ile 32.767 arasındaki değerleri temsil eder; 32-bitlik bir int, yaklaşık ±2,1 milyarı temsil eder. İşaretli bir baytta, onaltılı FF = -1'dir, 255 değil.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>İşaretli ve işaretsizi karıştırmak.</strong> FF, 255 (işaretsiz bayt) veya -1'dir (işaretli bayt). Hangisi olduğunu her zaman bilin.
    </p>
    <p>
      <strong>Bit konumlarında birer yanlış.</strong> En sağdaki bit, bit 1 değil, bit 0'dır. Bit 3 için bayrak, 1 &lt;&lt; 3 = 8'dir, 16 değil.
    </p>
    <p>
      <strong>İkiliyi sağdan sola tutarsız okumak.</strong> En az anlamlı bit (LSB) en sağdakidir. Ağlar ve dosya biçimleri büyük endian VEYA küçük endian bayt sırası kullanır — her zaman belirtimi kontrol edin.
    </p>
    <p>
      <strong>Taban öneklerini karıştırmak.</strong> 010, onluda 10'dur ancak sekizlide 8'dir (C ailesi dillerinde).
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir sayıyı tabanlar arasında{" "}
      <a href="/tools/number-base-converter">sayı tabanı dönüştürücü</a> ile dönüştürün. Onaltılı renkleri RGB/HSL'ye çevirmek için{" "}
      <a href="/tools/color-converter">renk dönüştürücü</a> ve rastgele baytları daha yüksek tabanlı metne kodlamak için{" "}
      <a href="/tools/base64-encoder-decoder">Base64 kodlayıcı/kod çözücü</a>
      {" "} ile birlikte kullanın.
    </p>
  </>
);