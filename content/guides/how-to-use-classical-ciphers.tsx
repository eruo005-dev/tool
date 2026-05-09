import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Klasik şifreler &mdash; Sezar, Atbash, Vigen&egrave;re, çit
      direği, Playfair &mdash; Jül Sezar&rsquo;ın lejyonlarından
      Amerikan İç Savaşı&rsquo;na ve I. Dünya Savaşı&rsquo;na kadar
      sırları taşıyan yer değiştirme ve aktarma yöntemleridir.
      Herhangi bir modern standartta bunlar oyuncaktır: bir Sezar
      kaydırması 26 denemede kaba kuvvetle çözülür, tek alfabeli bir
      yer değiştirme bir öğleden sonra frekans analiziyle çözülür ve
      Vigen&egrave;re, anahtar kısaysa Kasiski incelemesine yenik
      düşer. Ancak yine de anlaşılmaya değerdirler. Klasik şifreler,
      şifrelemenin nasıl öğretildiği, bulmaca avlarının nasıl
      oluşturulduğu, CTF zorluklarının nasıl başladığı ve
      öğrencilerin kriptanalizin neye benzediğini ilk kez nasıl
      gördüğüdür. Bu kılavuz, yer değiştirme prensibini, Sezar ve
      ROT13 özelliklerini, frekans analizini, Vigen&egrave;re
      iyileştirmesini ve zayıflığını, aktarma ve yer değiştirme
      karşılaştırmasını, bunların hiçbirinin 2026&rsquo;da neden
      güvenli olmadığını ve hala gerçek eğitim değerine sahip
      oldukları yerleri kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Yer değiştirme ve aktarma</h2>
    <p>
      Klasik şifreler iki ana aileye ayrılır:
    </p>
    <p>
      <strong>Yer değiştirme şifreleri</strong> her harfi bir kurala
      göre başka bir harfle değiştirir. Harfler aynı sırada kalır;
      kimlikleri değişir. Sezar, Atbash, Vigen&egrave;re ve tüm
      Enigma ailesi yer değiştirme şifreleridir.
    </p>
    <p>
      <strong>Aktarma şifreleri</strong> harfleri değiştirmeden
      yeniden düzenler. Bir çit direği şifresi mesajı zikzak
      şeklinde yazar ve satır satır okur. Harflerin tümü hala
      mevcuttur; sıraları değişir.
    </p>
    <p>
      Modern şifreler (AES, ChaCha20) her iki fikri de birçok tur
      yer değiştirme ve aktarma yoluyla birleştirir &mdash; ancak
      herhangi bir klasik tasarımdan katbekat daha karmaşıktır.
    </p>

    <h2>Sezar şifresi</h2>
    <p>
      En basit yer değiştirme: her harf alfabede sabit bir N miktarı
      kadar kayar. Sezar&rsquo;ın kendisinin N = 3 kullandığı
      söylenir.
    </p>
    <pre>{`düz metin:  HELLO WORLD
kaydırma 3:    KHOOR ZRUOG
kaydırma 13:   URYYB JBEYQ  (bu ROT13)
kaydırma 25:   GDKKN VNQKC`}</pre>
    <p>
      Şifre çözme, ters yönde kaydırma veya eşdeğer olarak
      <code> 26 - N</code> ile yapılır. Yalnızca 25 önemsiz anahtar
      vardır &mdash; kaba kuvvet anlıktır.
    </p>
    <p>
      <strong>ROT13</strong>, N = 13 olan Sezar&rsquo;dır. Zarafeti,
      iki kez kaydırmanın sizi geri getirmesidir:
      <code> ROT13(ROT13(x)) = x</code>. Usenet ve yorumlardaki
      spoiler&rsquo;ları gizlemek için kullanılır, asla güvenlik
      için değil.
    </p>

    <h2>Tek alfabeli yer değiştirme</h2>
    <p>
      Sezar&rsquo;ı genelleştirin: bir kaydırma yerine, 26 harfin
      keyfi bir permütasyonunu tanımlayın. Anahtar uzayı
      <code> 26! &asymp; 4 &times; 10^26</code>&rsquo;a sıçrar,
      kulağa çok gibi gelir ancak frekans analiziyle kolayca
      çözülür.
    </p>
    <p>
      <strong>Atbash</strong>, A &harr; Z, B &harr; Y vb. şeklinde
      olan belirli bir tek alfabeli şifredir. Aslen İbranice olup
      İncil metinlerinde kullanılmıştır. Deseni tanırsanız şifre
      çözme önemsizdir.
    </p>

    <h2>Frekans analizi</h2>
    <p>
      İngilizce harfler tahmin edilebilir oranlarda görünür. E
      yaklaşık %12.7, T %9.1, A %8.2 ve bu şekilde Z&rsquo;ye kadar
      %0.07&rsquo;ye iner. Birkaç yüz harflik bir yer değiştirme
      şifresi şifreli metni verildiğinde, her karakterin frekansını
      sayın, en yükseği E ile, sonrakini T ile eşleştirin ve
      yineleyin.
    </p>
    <p>
      İkili harf frekansları da yardımcı olur. <strong>TH</strong> en
      yaygın İngilizce iki harfli dizidir;
      <strong> HE</strong>, <strong>IN</strong>, <strong>ER</strong>,
      <strong> AN</strong> onu takip eder. Üç harfli desenler
      (<strong>THE</strong>) ve yaygın kelime şekilleri (cümle
      başındaki 3 harfli bir kelime genellikle &ldquo;THE&rdquo; veya
      &ldquo;AND&rdquo;dir) işi tamamlar.
    </p>
    <p>
      Arap bilgin El-Kindi, 9. yüzyılda frekans analizini tanımlayarak
      sonraki bin yıl boyunca her yer değiştirme şifresini kırdı.
    </p>

    <h2>Vigen&egrave;re &mdash; çok alfabeli iyileştirme</h2>
    <p>
      Vigen&egrave;re (16. yüzyıl, genellikle Blaise de
      Vigen&egrave;re&rsquo;e atfedilir ancak Bellaso önce
      yayınlamıştır) her harfi farklı bir miktarda kaydırmak için bir
      anahtar kelime kullanır ve anahtar kelime boyunca döngü yapar.
    </p>
    <pre>{`düz metin: ATTACK AT DAWN
anahtar:   LEMONL EM ONLE
şifreli metin:LXFOPV EF RNHR`}</pre>
    <p>
      Harf A + L = L, T + E = X, T + M = F vb. (A = 0, ..., Z = 25,
      mod 26 olarak ele alınır). Aynı düz metin harfi, konuma bağlı
      olarak farklı şifreli metin harflerine şifrelenir ve basit
      frekans analizini etkisiz hale getirir.
    </p>
    <p>
      300 yıl boyunca Vigen&egrave;re&rsquo;ye <em>le chiffre
      ind&eacute;chiffrable</em> (çözülemez şifre) denildi. Ardından
      Friedrich Kasiski 1863&rsquo;te bir kırma yöntemi yayınladı.
    </p>

    <h2>Kasiski incelemesi</h2>
    <p>
      Şifreli metinde tekrarlanan dizileri bulun. Vigen&egrave;re&rsquo;de,
      aynı düz metin dizisi anahtarın aynı kısmıyla hizalandığında,
      aynı şifreli metni üretir. Tekrarlar arasındaki mesafeyi
      ölçün &mdash; anahtar uzunluğu büyük olasılıkla bu mesafenin
      bir bölenidir.
    </p>
    <p>
      Anahtar uzunluğu bilindiğinde, şifreli metni N iç içe geçmiş
      akışa (her N&rsquo;inci harf) bölün, her biri basit bir Sezar
      şifresidir. Her birini frekans analiziyle kırın.
    </p>
    <p>
      Modern istatistiksel varyantlar (uyum indeksi, Friedman testi)
      Vigen&egrave;re&rsquo;yi kısa bir anahtarla herhangi bir anlamlı
      şifreli metinde saniyeler içinde kırar.
    </p>

    <h2>Tek kullanımlık şerit</h2>
    <p>
      Vigen&egrave;re&rsquo;yi genişletin: mesajla aynı uzunlukta,
      gerçekten rastgele oluşturulmuş, tam olarak bir kez kullanılan
      bir anahtar kullanın. Bu, tek kullanımlık şerittir (OTP) ve
      kanıtlanabilir şekilde kırılamaz tek şifredir. Püf noktası:
      anahtar mükemmel rastgele olmalı, gizli tutulmalı, güvenli bir
      şekilde dağıtılmalı ve asla yeniden kullanılmamalıdır. Bir tek
      kullanımlık şeridi bir kez bile yeniden kullanmak güvenliği
      tamamen çökertir (bkz. VENONA çözümleri).
    </p>
    <p>
      OTP&rsquo;ler gerçek kullanım görmüştür &mdash; diplomatik
      hatlar, bazı istihbarat iletişimleri &mdash; ancak anahtar
      dağıtım sorunu onları genel kullanım için pratik yapmaz.
    </p>

    <h2>Aktarma şifreleri</h2>
    <p>
      <strong>Çit direği</strong>: düz metni N raylı bir zikzak
      şeklinde yazın, satır satır okuyun.
    </p>
    <pre>{`HELLO WORLD 3 raylı:
H . . . O . . . R . .
. E . L . W . R . L .
. . L . . . O . . . D
Satırları oku: HOR ELWRL LOD -> HORELWRLLOD`}</pre>
    <p>
      <strong>Sütunlu aktarma</strong>: sabit genişlikte bir ızgaraya
      yazın, bir anahtar kelime tarafından belirlenen bir sırayla
      sütunları okuyun. I. Dünya Savaşı&rsquo;na kadar kullanıldı.
      Elle kırılabilir ancak zahmetlidir.
    </p>

    <h2>Playfair şifresi</h2>
    <p>
      1854&rsquo;te Charles Wheatstone tarafından icat edildi, onu
      tanıtan Lord Playfair&rsquo;in adını aldı. Bir 5&times;5 anahtar
      karesi kullanarak ikili harfleri şifreler. Harf frekansı
      hilesini kırdı çünkü çiftler şifrelenir, bireysel harfler değil.
    </p>
    <p>
      I. Dünya Savaşı&rsquo;nda ve II. Dünya Savaşı&rsquo;na kadar
      İngiliz kuvvetleri tarafından taktik iletişim için kullanıldı,
      hızın uzun vadeli gizlilikten daha önemli olduğu yerlerde.
      Yeterli şifreli metin verildiğinde saatler içinde elle kırıldı.
    </p>

    <h2>Bunların hiçbiri 2026&rsquo;da neden güvenli değil</h2>
    <p>
      Ortak nokta: klasik şifreler, şifreli metnin koruduğu bir yapıya
      sahiptir (harf frekansları, kelime şekilleri, tekrarlar). Modern
      kriptanaliz bu tür herhangi bir yapıyı kullanır. Saf bir yer
      değiştirme şifresi &ldquo;hello world&rdquo; uzunluğunda
      kırılır. İyi yapılandırılmış bir akış şifresi (ChaCha20,
      AES-<a href="/learn/ctr">CTR</a>) şifreli metni istatistiksel
      olarak rastgeleden ayırt edilemez bırakır &mdash; saldırılacak
      yapı yoktur.
    </p>
    <p>
      2026&rsquo;da gerçek güvenlik için kimlik doğrulamalı şifreleme
      kullanın: simetrik için AES-GCM veya ChaCha20-Poly1305; hibrit
      için X25519 + AES-GCM. Libsodium veya dilinizin standart
      <code>crypto</code> modülü size doğru varsayılanları verir.
    </p>

    <h2>Klasik şifrelerin hala değerli olduğu yerler</h2>
    <p>
      <strong>Eğitim</strong>: anahtar, anahtar uzayı, anahtar uzayı
      boyutu, frekans analizi ve Kerckhoffs ilkesi fikirlerine
      mümkün olan en net girişimdir. Sezar, Vigen&egrave;re ve
      frekans analizi olmayan bir kriptografi dersi 200 yıllık
      tarihi kaçırıyor demektir.
    </p>
    <p>
      <strong>Bulmaca ve kaçış odası tasarımı</strong>: tanındığında
      dakikalar içinde elle çözülebilir, içgörüyü ödüllendirecek
      kadar zorludur. Çoğu kaçış odası &ldquo;kodu&rdquo; klasik
      şifrelerdir.
    </p>
    <p>
      <strong>CTF zorlukları</strong>: bayrak kapma
      yarışmalarındaki kripto kategorileri genellikle Sezar ile
      başlar, ardından Vigen&egrave;re, tekrarlayan anahtarlı XOR ve
      zayıf RSA eklenir &mdash; her biri klasik sezgi üzerine inşa
      edilir.
    </p>
    <p>
      <strong>Gizleme, şifreleme değil</strong>: ROT13 hala spoiler
      etiketlerinde, USENET imzalarında ve bazı son derece hafif
      yapılandırma gizlemelerinde görünür. Bunu güvenlikle
      karıştırmayın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Herhangi bir klasik şifreyi güvenlik olarak ele almak.</strong>
      Üretime gönderilen ve klasik olduğu anlaşılan herhangi bir
      &ldquo;şifreleme&rdquo; kırılmıştır. Geliştiriciler bazen
      yapılandırma değerlerini ROT13&rsquo;ler ve bunun önemli
      olduğunu düşünürler; önemli değildir.
    </p>
    <p>
      <strong>Birden çok mesajda bir Vigen&egrave;re anahtarını
      yeniden kullanmak.</strong> Kasiski saldırısını önemsiz hale
      getirir &mdash; saldırgan aynı anahtara karşı analiz edecek
      daha fazla şifreli metin alır.
    </p>
    <p>
      <strong>Kısa anahtarların güvenlik katacağını beklemek.</strong>
      7 kaydırmalı bir Sezar, 3 kaydırmalı olandan anlamlı şekilde
      daha zor değildir &mdash; kaba kuvvet aynı maliyettedir. Tek
      savunma anahtar uzayı boyutudur ve klasik anahtar uzayları
      küçüktür.
    </p>
    <p>
      <strong>Şifreyi &ldquo;güçlendirmek&rdquo; için boşlukları ve
      noktalama işaretlerini kaldırmak.</strong> Frekans analizine
      karşı yalnızca biraz yardımcı olur ve elle şifrelemeyi
      zorlaştırır. Gerçek şifrelerin desteğe ihtiyacı yoktur.
    </p>
    <p>
      <strong>Büyük/küçük harf ve alfabetik olmayan karakterleri
      tutarsız bir şekilde karıştırmak.</strong> Bir kural seçin:
      A&ndash;Z büyük harfe indirgeyin veya büyük/küçük harfi
      koruyun ve noktalama işaretlerini geçirin. Yarı yolda
      uygulamalar şifre çözme hataları üretir.
    </p>
    <p>
      <strong>Özel klasik varyantların yeni olduğunu iddia etmek.</strong>
      Alfabeyi ters çevirip ardından Sezar uygulayıp bir tekerlemeyle
      XOR&rsquo;lamak hala klasiktir ve hala kırılmıştır. Herhangi
      bir yeni şifre, varyantınızın geçmediği profesyonel
      kriptanalizden geçmelidir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Kaydırmaları anında şifreleyin ve şifresini çözün{" "}
      <a href="/tools/caesar-cipher">Sezar şifre aracı</a> ile.
      Katmanlı tarihsel sinyal bulmacaları için{" "}
      <a href="/tools/morse-code-translator">Mors kodu çevirici</a>
      {" "}ile eşleştirin ve alıştırmalar şifreleri taban
      dönüşümleriyle birleştirdiğinde{" "}
      <a href="/tools/binary-text-encoder">ikili metin kodlayıcı</a>
      {" "}ile kullanın.
    </p>
  </>
);