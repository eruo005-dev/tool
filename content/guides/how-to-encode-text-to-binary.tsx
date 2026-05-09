import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      <a href="/tools/text-to-binary">Metni ikiliye</a> dönüştürmek, bir karakter yazdığınızda bilgisayarın
      gerçekte ne gördüğünü göstermenin en doğrudan yoludur. Her
      harf, ASCII için karakter başına 7 veya 8 bit ya da bir UTF-8
      Unicode karakteri için 32 bit'e kadar bir bit dizisi haline gelir.
      Dönüşüm mekanik görünür, ancak çıktıyı üç karar şekillendirir:
      ASCII vs UTF-8, 7-bit vs 8-bit çerçeveleme ve büyük-endian
      vs küçük-endian bayt sırası. Bunlardan birini yanlış yapmak,
      &ldquo;Merhaba&rdquo;yı diğer tarafta okunamaz bir çöp haline
      getirir. Bu kılavuz, bir baytın gerçekte neyi kodladığını, aynı
      karakterin kodlanmasında ASCII ve UTF-8'in nasıl farklılaştığını,
      endianness'in rolünü, meşru modern kullanımları (retro donanım,
      öğretim, ikili protokollerde hata ayıklama) ve kaçınılması
      gereken yaygın dönüşüm hatalarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir baytın içerdiği</h2>
    <p>
      Bir bayt 8 bittir. Her bit 0 veya 1'dir. 8 bit, genellikle 0
      ile 255 arasında ondalık veya 00 ile FF arasında onaltılık
      olarak yazılan 256 olası değer (<code>00000000</code> ile
      <code> 11111111</code> arası) verir. Metin kodlamaları her
      karakteri bir veya daha fazla bayta eşler; ikili dönüşüm bu
      baytları açık 0 ve 1 dizileri olarak gösterir.
    </p>

    <h2>ASCII &mdash; Karakter başına 7 bit</h2>
    <p>
      ASCII (1963, ANSI X3.4-1968 ile standartlaştırılmış) 7 bitte
      128 karakter tanımlar. Harfler, rakamlar, noktalama işaretleri
      ve kontrol kodları.
    </p>
    <pre>{`A = 65  = 01000001
a = 97  = 01100001
0 = 48  = 00110000
boşluk = 32 = 00100000
yeni satır = 10 = 00001010`}</pre>
    <p>
      Saf ASCII'de 8. bit sıfırdır. Birçok sistem tarihsel olarak
      ek biti genişletilmiş karakter kümeleri için kullandı
      (&ldquo;yüksek ASCII&rdquo; aksanlı harfler, kutu çizimi
      için), her satıcı farklı bir eşleme seçti &mdash; Unicode'un
      sonlandırmak için icat edildiği karmaşa.
    </p>

    <h2>UTF-8 &mdash; 1 ila 4 baytta Unicode</h2>
    <p>
      UTF-8 (RFC 3629), modern web'de baskın kodlamadır. Her Unicode
      kod noktasını 1 ila 4 bayt kullanarak kodlar:
    </p>
    <p>
      <strong>1 bayt</strong> (kod noktaları 0&ndash;127): ASCII ile
      aynıdır. <code>0xxxxxxx</code>. Baştaki bit 0.
    </p>
    <p>
      <strong>2 bayt</strong> (128&ndash;2047):
      <code> 110xxxxx 10xxxxxx</code>. Genişletilmiş Latin, Yunan,
      Kiril, İbrani, Arap alfabelerini kapsar.
    </p>
    <p>
      <strong>3 bayt</strong> (2048&ndash;65535):
      <code> 1110xxxx 10xxxxxx 10xxxxxx</code>. Çoğu CJK
      ideografını, Devanagari'yi ve BMP'yi kapsar.
    </p>
    <p>
      <strong>4 bayt</strong> (65536&ndash;1114111):
      <code> 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx</code>. Emoji,
      daha nadir CJK, tarihi yazıları kapsar.
    </p>
    <p>
      Örnek: UTF-8'de &ldquo;&eacute;&rdquo; (U+00E9)
      <code> 11000011 10101001</code>'dur (0xC3 0xA9 &mdash; iki bayt).
      &ldquo;&#128512;&rdquo; (U+1F600) emojisi dört UTF-8
      baytıdır.
    </p>

    <h2>UTF-16 ve UTF-32</h2>
    <p>
      <strong>UTF-16</strong>: Temel Çok Dilli Düzlem için 2 bayt,
      vekil çiftler aracılığıyla ek düzlemler için 4 bayt. JavaScript
      dizeleri, Java dizeleri ve Windows API'leri için varsayılan
      bellek içi kodlama. Endianness'i belirtmek için bir bayt sırası
      işareti (BOM) kullanır.
    </p>
    <p>
      <strong>UTF-32</strong>: kod noktası başına her zaman 4 bayt.
      Kod noktalarına rastgele erişimin önemli olduğu dahili
      temsiller dışında nadirdir.
    </p>

    <h2>Endianness</h2>
    <p>
      1 bayttan daha geniş kodlamalar (UTF-16, UTF-32, ikili
      sayılar) için baytların sırası önemlidir.
    </p>
    <p>
      <strong>Büyük-endian</strong> (ağ bayt sırası, Motorola
      68k): en anlamlı bayt önce. 16 bitlik
      <code> 0x1234</code> değeri <code>12 34</code> olarak saklanır.
    </p>
    <p>
      <strong>Küçük-endian</strong> (Intel x86, ARM varsayılanı,
      modern CPU'lar): en az anlamlı bayt önce.
      <code> 0x1234</code> değeri <code>34 12</code> olarak saklanır.
    </p>
    <p>
      UTF-16 dosyaları, okuyucuların bilmesi için bir bayt sırası
      işaretiyle (<code>FE FF</code> BE için, <code>FF FE</code> LE
      için) başlar. UTF-8'in endianness'i yoktur (tek baytlık
      birimler) ancak bazı sistemler yine de bir kodlama işareti
      olarak bir BOM (<code>EF BB BF</code>) ekler; bu birçok
      ayrıştırıcıyı bozar ve kaçınılması en iyisidir.
    </p>

    <h2>Adım adım dönüştürme</h2>
    <p>
      &ldquo;Hi&rdquo;yi ASCII ikiliye kodlamak için:
    </p>
    <pre>{`H -> 72  -> 01001000
i -> 105 -> 01101001

Tam: 01001000 01101001`}</pre>
    <p>
      JavaScript'te:
    </p>
    <pre>{`function textToBinary(str) {
  return [...str].map(ch =>
    ch.codePointAt(0).toString(2).padStart(8, '0')
  ).join(' ');
}

textToBinary('Hi');  // '01001000 01101001'`}</pre>
    <p>
      Not: <code>codePointAt(0)</code> tek bir Unicode kod noktası
      döndürür, ancak bu bir UTF-8 baytı ile aynı değildir. Uygun
      UTF-8 bayt düzeyinde çıktı için:
    </p>
    <pre>{`function utf8Binary(str) {
  const bytes = new TextEncoder().encode(str);
  return [...bytes].map(b =>
    b.toString(2).padStart(8, '0')
  ).join(' ');
}

utf8Binary('caf\u00e9');
// '01100011 01100001 01100110 11000011 10101001'`}</pre>

    <h2>7-bit çerçeveleme</h2>
    <p>
      Saf ASCII çıktısı bazen karakter başına 7 bit ile yazılır,
      baştaki sıfır atılır:
    </p>
    <pre>{`H = 1001000 (7 bit)
i = 1101001 (7 bit)`}</pre>
    <p>
      Tarihsel olarak 7-bit seri protokollerde ve 8-bit MIME
      evrensel hale gelmeden önceki e-posta taşımalarında
      kullanılmıştır. 2026'da bu öncelikle bir bulmaca tasarımı
      seçeneği veya kısıtlı radyo bağlantılarında bir bant genişliği
      hilesidir.
    </p>

    <h2>Taban-N dönüşümleri</h2>
    <p>
      İkili, taban-2'dir. İlgili kodlamalar daha kompakt tabanlar
      kullanır:
    </p>
    <p>
      <strong>Onaltılık</strong> (taban-16): basamak başına 4 bit.
      <code> H</code>, <code>48</code> olur.
    </p>
    <p>
      <strong>Sekizlik</strong> (taban-8): basamak başına 3 bit.
      <code> H</code>, <code>110</code> olur.
    </p>
    <p>
      <strong>Base64</strong>: 6 bitlik gruplar, 64 yazdırılabilir
      ASCII karakterinden biri olarak ifade edilir. İkilinin güvenli
      olmadığı metin içinde (e-posta, JSON, URL'ler) ikiliyi
      gömmek için yaygındır.
    </p>

    <h2>Bugünkü gerçek kullanımlar</h2>
    <p>
      <strong>Öğretim</strong>: bilgisayarların metni nasıl
      sakladığını göstermek. Herhangi bir metafordan daha açıktır.
    </p>
    <p>
      <strong>Hata ayıklama</strong>: bayt düzeyinde ikili
      protokollerde. Özel bir protokol &ldquo;3 bayt başlık, sihirli
      değer 0x4A6F&rdquo; dediğinde, ikili veya onaltılık dökümü
      okumak onaylama şeklinizdir.
    </p>
    <p>
      <strong>Retro bilgi işlem</strong>: delikli kartlar, kağıt
      bant, 6502 assembly, Z80. Orada her şey bittir.
    </p>
    <p>
      <strong>CTF veya bulmaca avlarında kodlama katmanları</strong>:
      Base64 içine sarılmış, onaltılık içine sarılmış, ikili içine
      sarılmış şifreli metin. Her katmanı tanıyın ve açın.
    </p>
    <p>
      <strong>Tabela ve yenilik</strong>: Tişörtler, dövmeler ve
      ara sıra fiziksel plaketler. Dönüştürün ve düzeltin &mdash;
      ters çevrilmiş bir bit kalıcıdır.
    </p>

    <h2>Karakter kodlaması tespiti</h2>
    <p>
      Bir ikili yığın verildiğinde, bu ASCII mi, Latin-1 mi, UTF-8
      mi yoksa başka bir şey mi? Sezgisel yöntemler:
    </p>
    <p>
      Tüm baytlar 0x80'in altında &rarr; ASCII veya UTF-8 olarak
      yorumlamak güvenlidir.
    </p>
    <p>
      0x80&ndash;0xBF baytları UTF-8'de asla ilk sırada görünmez
      &mdash; eğer biri bir &ldquo;karaktere&rdquo; başlıyorsa,
      geçerli UTF-8 değildir.
    </p>
    <p>
      Başlangıçta UTF-8 BOM'unun (0xEF 0xBB 0xBF) varlığı, güçlü
      bir UTF-8 sinyalidir.
    </p>
    <p>
      UTF-8 olarak çözümleme başarısızlığı genellikle Latin-1,
      Windows-1252 veya eski bir Asya kodlaması (Shift JIS,
      GB18030) anlamına gelir. Modern kütüphaneler
      (<code>chardet</code>, <code>uchardet</code>) çoğu zaman
      doğru yapar ancak sihirli değildir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Bir karakterin her zaman bir bayt olmadığını
      unutmak.</strong> UTF-8'de &ldquo;caf&eacute;&rdquo; 5
      karakter ancak 5&ndash;6 bayttır (birleşik veya ayrıştırılmış
      forma bağlı olarak). Karakter uzunluğunu her zaman bayt
      uzunluğundan ayırt edin.
    </p>
    <p>
      <strong>BMP dışı karakterler için <code>charCodeAt</code>
      kullanmak.</strong>
      Tam bir kod noktası değil, bir UTF-16 kod birimi döndürür.
      Emoji ve daha nadir CJK için <code>codePointAt</code>
      kullanın.
    </p>
    <p>
      <strong>Baştaki sıfırları atlamak.</strong>
      <code> A</code> ikili <code>01000001</code>'dir (8 bit);
      <code>1000001</code> yazmak düzenli görünür ancak sabit
      genişlikli ayrıştırıcıların kafasını karıştırır. Her zaman
      doldurun.
    </p>
    <p>
      <strong>Bir dosyanın ortasında endianness'i
      değiştirmek.</strong> Başlıklar için UTF-16-BE ve gövde için
      UTF-16-LE çıktısı verirseniz, okuyucu çöp alır. Birini seçin
      ve ona bağlı kalın; BOM seçimi duyurur.
    </p>
    <p>
      <strong>Yanlışlıkla UTF-8 BOM eklemek.</strong> Windows
      Notepad ünlü bir şekilde bir tane ekler. Birçok ayrıştırıcı
      (eski PHP, bazı JSON kütüphaneleri) takılır. Bir işaretçiye
      ihtiyacınız varsa, protokol düzeyinde
      <code> Content-Type: ...; charset=utf-8</code> kullanın.
    </p>
    <p>
      <strong>İkili çıktıyı birleştirilecek bir dize olarak
      ele almak.</strong> &ldquo;01000001&rdquo; dizesini başka
      birine eklemek sorun değildir; <code>0x41</code>'i bir sayı
      olarak eklemek farklıdır. Türü tutarlı tutun.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Metni{" "}
      <a href="/tools/binary-text-encoder">ikili metin kodlayıcı</a>
      ile ikiliye ve ikiliden dönüştürün. Kompakt metin içi ikili
      temsiline ihtiyacınız olduğunda{" "}
      <a href="/tools/base64-encoder-decoder">Base64 kodlayıcı/kod çözücü</a>
      {" "}ile ve taban dönüşümünü basit şifreleme ile karıştıran
      katmanlı bulmacalar için{" "}
      <a href="/tools/caesar-cipher">Sezar şifreleme aracı</a>
      ile birlikte kullanın.
    </p>
  </>
);