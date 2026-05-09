import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Base64, ikili verilerin yalnızca metin taşıyan kanallardan geçmesini sağlayan yapıştırıcıdır. E-posta gövdeleri,
      JSON yükleri, URL parametreleri, HTML veri nitelikleri ve OAuth token'ları ASCII için tasarlanmıştır; bu, ham bir görüntü veya bir şifreleme anahtarının
      olduğu gibi eklenemeyeceği anlamına gelir&mdash;rastgele baytlar kontrol karakterleriyle çakışır, karakter kümesi dönüşümleri tarafından bozulur
      veya yeni satır bekleyen bir ayrıştırıcının kafasını karıştırır. Base64, baytları, makul her metin taşımasında hayatta kalan 64 karakterli bir alfabe kullanarak yeniden yazar, bunun bedeli
      kabaca %33 boyut artışıdır. Bu bir kodlamadır, şifreleme değildir&mdash;herkes onu çözebilir.
      Bu kılavuz, alfabeyi, üç bayttan dört karaktere dönüşümün matematiğini,
      dolgu kurallarını, URL güvenli varyantını, veri URL'lerini ve boyut ödünleşiminin ne zaman
      değer olduğu konusunda vereceğiniz kararları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>İkili veriyi neden metin olarak kodlamalıyız</h2>
    <p>
      Metin tabanlı protokoller, yük için yalnızca güvenli bir bayt alt kümesini ayırır. SMTP,
      7-bit ASCII için belirtilmiştir; yüksek biti ayarlanmış herhangi bir bayt, bir posta
      aktarıcısı tarafından silinebilir veya bozulabilir. HTTP başlıkları yeni satır içeremez.
      JSON dizeleri ham kontrol karakterleri içeremez. URL sorgu dizelerinde <code>?</code>, <code>&amp;</code>,
      ve <code>=</code> gibi ayrılmış karakterler bulunur. Bunlardan herhangi biri aracılığıyla bir PNG göndermek istiyorsanız,
      ya güvenli olmayan her baytı ayrı ayrı kaçırırsınız (çirkin ve ayrıntılı) ya da tüm yükü
      evrensel olarak güvenli bir alfabe kullanarak yeniden kodlarsınız. Base64, her
      metin işleme sisteminin kabul ettiği 64 sembol seçti.
    </p>

    <h2>Alfabe</h2>
    <p>
      Standart Base64, <code>A&ndash;Z</code>, <code>a&ndash;z</code>, <code>0&ndash;9</code>,
      artı <code>+</code> ve <code>/</code>&mdash;altmış dört farklı sembol kullanır. Eşittir işareti{" "}
      <code>=</code> dolgu olarak ayrılmıştır. Birlikte bu, ASCII, UTF-8, EBCDIC posta ağ geçitleri
      ve yazıcı sürücülerinden değişmeden geçen 65 karakterdir.
    </p>
    <pre>{`Index  Char      Index  Char      Index  Char      Index  Char
0      A         16     Q         32     g         48     w
1      B         17     R         33     h         49     x
...    ...       ...    ...       ...    ...       ...    ...
25     Z         41     p         57     5         (62    +)
26     a         42     q         58     6         (63    /)

Dolgu: =`}</pre>

    <h2>Kodlama matematiği nasıl çalışır</h2>
    <p>
      Base64, <strong>üç baytı</strong> (24 bit) alır ve bunları <strong>dört
      6-bitlik gruba</strong> böler, ardından her 6-bitlik değeri alfabede arar. Üç bayt girer,
      dört karakter çıkar&mdash;her zaman. %33'lük genişleme buradan gelir: 4 / 3
      = 1.333.
    </p>
    <pre>{`Giriş baytları:   M       a       n
ASCII:         77      97      110
İkili:        01001101 01100001 01101110
6'ya böl:  010011 010110 000101 101110
Değerler:        19     22     5      46
Base64:        T      W      F      u

"Man" → "TWFu"`}</pre>

    <h2>Dolgu</h2>
    <p>
      Giriş uzunluğu üçün katı olmadığında, çıktıyı <code>=</code> ile doldurursunuz,
      böylece uzunluk dördün katı olur. Bir artık bayt, iki karakter artı <code>==</code> üretir;
      iki artık bayt, üç karakter artı <code>=</code> üretir. Dolgu, kod çözücülerin verinin nerede bittiğini bilmesini sağlar
      ve &ldquo;bu tam olarak üç bayttır&rdquo; ile &ldquo;bu bir bayttır&rdquo; arasında ayrım yapar.
    </p>
    <pre>{`"M"   → "TQ=="    (1 bayt  → 2 karakter + ==)
"Ma"  → "TWE="    (2 bayt → 3 karakter + =)
"Man" → "TWFu"    (3 bayt → 4 karakter, dolgu yok)`}</pre>
    <p>
      Bazı ayrıştırıcılar eksik dolguyu tolere eder; diğerleri reddeder. Katı bir kod çözücü (RFC 4648) için Base64 üretiyorsanız,
      her zaman dolguyu ekleyin. <code>=</code> işaretinin özel anlamı olduğu bir URL sorgu dizesi için üretiyorsanız,
      dolguyu kaldırabilir ve kod çözme sırasında geri ekleyebilirsiniz.
    </p>

    <h2>URL güvenli Base64</h2>
    <p>
      <code>+</code> ve <code>/</code> karakterleri URL sözdizimiyle çakışır&mdash;<code>+</code>
      form kodlu verilerde &ldquo;boşluk&rdquo; anlamına gelir ve <code>/</code> bir yol ayırıcısıdır.
      RFC 4648, bunları <code>-</code> ve <code>_</code> ile değiştiren URL güvenli bir alternatif tanımlar.
      Dolgu <code>=</code> genellikle kaldırılır çünkü o da ayrılmış bir URL karakteridir.
      JWT'ler bu varyantı yalnızca kullanır.
    </p>
    <pre>{`Standart: SGVsbG8gd29ybGQ+
URL güvenli: SGVsbG8gd29ybGQ-

Standart kullanır: + / =
URL güvenli kullanır: - _ (dolgu yok)`}</pre>

    <h2>Veri URL'leri</h2>
    <p>
      Bir veri URL'si, tüm bir dosyayı bir URL'nin içine gömer ve yük tipik olarak Base64 kodludur.
      Biçim <code>data:[mime];base64,[yük]</code> şeklindedir. Bu nedenle bazen bir HTML <code>src</code> niteliğinde
      40KB'lık bir çöp yığını görürsünüz&mdash;bu satır içi bir görüntüdür,
      bir HTTP gidiş-dönüşünden tasarruf sağlar, ancak sayfa boyutu pahasına ve tarayıcı önbelleği yeniden kullanımı olmaz. Veri URL'lerini
      küçük simgeler ve kritik yol görüntüleri için kullanın; ~10KB'nin üzerindeki her şey genellikle
      gerçek bir dosya olarak sunulmak için daha iyidir.
    </p>
    <pre>{`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUg..." />

data:text/plain;base64,SGVsbG8gd29ybGQh  → "Hello world!"`}</pre>

    <h2>%33 vergisi gerçektir</h2>
    <p>
      Base64, yükleri her zaman 4/3 faktörüyle şişirir. 1MB'lık bir görüntü, 1.33MB'lık bir dize haline gelir.
      Kabloda bu, Base64 metnini iyi sıkıştıran gzip tarafından kısmen dengelenir, ancak
      kodlama, kod çözme ve sıkıştırmayı açmanın CPU maliyeti artar. Satır içi küçük resimler ve
      yazı tipleri için sorun yoktur. Mobil bir uygulamadaki kullanıcı tarafından yüklenen fotoğraflar için,
      çok parçalı bir yüklemeye kıyasla israftır.
    </p>

    <h2>Base64 şifreleme değildir</h2>
    <p>
      Herkes Base64'ü çözebilir. Hiçbir şeyi gizlemez&mdash;bu bir kodlama dönüşümüdür, aynı
      kategoride hex gibi. Bir parolayı Base64'te &ldquo;şifrelenmiş&rdquo; olarak saklamak, onu
      düz metin olarak saklamakla eşdeğerdir. Gerçek kriptografi kullanın (AES, libsodium, parolalar için bcrypt).
      Base64 yalnızca baytları metin kanallarından taşımak içindir.
    </p>

    <h2>Pratikte yaygın kullanımlar</h2>
    <p>
      Temel HTTP kimlik doğrulaması <code>Authorization: Basic base64(kullanıcı:parola)</code> gönderir. JWT'ler başlığı,
      yükü ve imzayı Base64 ile kodlar. E-posta ekleri MIME gövdelerinde Base64'tür. Kriptografik
      anahtar dışa aktarımları&mdash;SSH genel anahtarları, PEM sertifikaları&mdash;ham baytları BAŞLANGIÇ/BİTİŞ
      işaretçileri arasında Base64 olarak sarar. Webhook imzaları ve HMAC sonuçları genellikle Base64 kodludur. API
      yanıtları bazen yanıtı tek bir JSON belgesi olarak tutmak için PDF'ler veya görüntüler gibi ikili blob'ları Base64 ile kodlar.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Çift kodlama.</strong> Zaten kodlanmış Base64'ü kodlamak, yasal ancak daha uzun bir dize üretir
      ve bu, baytlarınıza değil Base64'e çözülür. Kod çözülmüş çıktınız daha fazla Base64 gibi görünüyorsa, kodlayıcıyı iki kez çalıştırmışsınızdır.
    </p>
    <p>
      <strong>Eksik dolgu.</strong> Aktarım sırasında kaldırılmış bir <code>=</code>, katı
      kod çözücülerin &ldquo;geçersiz uzunluk&rdquo; hataları fırlatmasına neden olur. Ya hoşgörülü bir kod çözücü kullanın ya da
      uzunluk dördün katı olana kadar <code>=</code> işaretini yeniden ekleyin.
    </p>
    <p>
      <strong>URL güvenli ve standart alfabeleri karıştırmak.</strong> URL güvenli bir dizeyi standart bir kod çözücüye beslemek,
      <code>-</code> ve <code>_</code> üzerinde başarısız olur. Hangi varyantı ürettiğinizi bilin ve buna göre kod çözün
      veya kod çözmeden önce normalleştirin.
    </p>
    <p>
      <strong>Base64'ü şifreleme olarak ele almak.</strong> Öyle değildir. Amaç gizlilikse,
      gerçek kriptografiye ihtiyacınız vardır. Base64 yalnızca taşıma güvenliği sağlar.
    </p>
    <p>
      <strong>Çok parçalı çalışırken büyük ikili yükler için Base64 kullanmak.</strong> %33'lük
      vergi, serileştirme ve günlük kaydı maliyetleriyle birleşir. Taşıma ikiliyi destekliyorsa
      (gRPC, ham HTTP gövdeleri, çok parçalı form yüklemeleri), Base64'ü atlayın.
    </p>
    <p>
      <strong>Çıktının satır sonlarıyla sarıldığını varsaymak.</strong> RFC 2045 (MIME) 76
      karakterde sarar; RFC 4648 sarmaz. Base64 dizelerini eşitlik için karşılaştırıyorsanız,
      önce boşlukları kaldırın.
    </p>
    <p>
      <strong>Karakter kümesini belirtmeden bir UTF-8 dizesini kodlamak.</strong> Base64
      karakterler üzerinde değil, baytlar üzerinde çalışır. <code>&ldquo;caf&eacute;&rdquo;</code> dizesini
      Latin-1 olarak kodlamak, UTF-8'den farklı bir sonuç verir. Base64'lemeden önce her zaman bayt kodlaması üzerinde anlaşın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      İsteğe bağlı URL güvenli moduyla anında kodlayın ve kod çözün,{" "}
      <a href="/tools/base64-encoder-decoder">Base64 kodlayıcı ve kod çözücümüzde</a>. Bir görüntü veya yük üzerindeki
      boyut artışını kontrol ederken <a href="/tools/data-size-converter">veri boyutu dönüştürücü</a> ile eşleştirin ve
      bir Base64 dizesinin şeklini bir kod çözücüye vermeden önce doğrulamak için{" "}
      <a href="/tools/regex-tester">regex test aracını</a> kullanın.
    </p>
  </>
);