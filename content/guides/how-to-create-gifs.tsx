import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      GIF, 1987'den kalma bir format olup hâlâ varlığını sürdürmektedir. Daha yeni formatlar daha verimli olsa da
      (WebP, APNG, AVIF animasyonları), GIF'in hâlâ kazandığı bir neden var: her yerde hiçbir zahmet olmadan çalışır.
      Slack'e, e-postaya, tweete, blog yazısına bir tane bırakın ve döngüye girsin. Bunun karşılığı dosya boyutu ve kalitedir &mdash;
      2&ndash;3MB üzeri GIF'ler mobilde sıkıntılıdır ve 256 renk paleti, canlı fotoğrafların posterize görünmesine neden olur.
      Bu kılavuz, gerçekten okunabilir olan kare hızını (60 değil 10&ndash;15fps), döngü sayılarını, 256 renk sınırlamasını ve
      bununla nasıl başa çıkılacağını, boyut-kalite dengesini, GIF'in videoyu ne zaman yendiğini ve çoğu kişinin göz ardı ettiği
      erişilebilirlik hususlarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Kare hızı: az çoktur</h2>
    <p>
      Sinema 24fps'de çalışır. Oyunlar 60fps'de. GIF'ler genellikle{" "}
      <strong>10&ndash;15fps</strong>'de çalışmalıdır. Neden daha düşük? GIF her kareyi tam bir görüntü olarak kodlar
      (palet düzeyinde sıkıştırma ile), bu nedenle kare hızını iki katına çıkarmak dosya boyutunu kabaca iki katına çıkarır.
      30fps'de 4 saniyelik bir klip 120 karedir; 12fps'de 48 karedir ve gündelik izleme için benzer bir pürüzsüzlük algısı sağlar.
    </p>
    <pre>{`Kullanım alanı                    Kare hızı
Tepki GIF'i (kısa döngü)       10-12 fps
Ürün tanıtımı (ekran kaydı)    15 fps
Animasyonlu simge              8-12 fps
İnce UI animasyonu             12 fps
Beyaz tahta çizimi             6-8 fps
Hızlı aksiyon (spor klibi)     15-20 fps (nadiren gerekir)`}</pre>
    <p>
      Videodan dönüştürüyorsanız, kaynağa tam bölünebilen bir kare hızı seçin. 30fps'lik bir videoyu 15fps'ye dönüştürmek,
      her iki kareden birini atlamak anlamına gelir &mdash; temiz. 14fps'de ise eşit olmayan atlamalar olur ve bu da takılma hissi yaratır.
    </p>

    <h2>256 renk paleti</h2>
    <p>
      GIF, görüntü başına en fazla 256 rengi destekler. Tam renkli fotoğraflar (milyonlarca renk) aşağı ölçeklenmek zorundadır,
      bu da yumuşak geçişlerde bantlanmaya neden olur &mdash; gökyüzü, cilt, gün batımları posterize görünür. İki hafifletme yöntemi:
    </p>
    <p>
      <strong>Global palet.</strong> Tüm kareler arasında paylaşılan tek bir 256 renk paleti.
      Daha küçük dosya, ancak palet, klipte herhangi bir yerde görünen tüm renkleri kapsamalıdır.
    </p>
    <p>
      <strong>Yerel paletler.</strong> Her kare kendi 256 renk paletine sahiptir.
      Dramatik şekilde değişen sahneler için daha yüksek kalite, ancak daha büyük dosya.
    </p>
    <p>
      <strong>Dithering (Titreşim)</strong>, ara renkleri taklit etmek için renk hatalarını bir piksel deseni olarak dağıtır.
      Floyd-Steinberg dithering yaygın bir seçimdir. Görünür bantlanmayı azaltır ancak daha kötü sıkışan gürültü ekler.
      Pürüzsüz kurumsal animasyonlar için dithering'i kapatın. Fotoğraflar için açın.
    </p>

    <h2>Dosya boyutu hedefleri</h2>
    <pre>{`Bağlam                       Hedef boyut
Slack tepki GIF'i           500 KB altı
Twitter/X satır içi         5 MB altı (platform sınırı 15 MB)
E-posta gömme               1 MB altı
Blog yazısı satır içi       2 MB altı
Ürün sayfası tanıtımı       3 MB altı
Dokümantasyon animasyonlu figür 2 MB altı`}</pre>
    <p>
      5MB üzeri her şey mobil bağlantılarda yavaş hissettirir. Hedefin üzerindeyseniz, önce boyutları küçültün (her yarıya indirme boyutu ~%75 azaltır),
      ardından kare hızını, ardından palet boyutunu, ardından uzunluğu azaltın.
    </p>

    <h2>Boyutlar süreden daha önemlidir</h2>
    <p>
      3 saniyelik 640&times;360 bir GIF, 2 saniyelik 1280&times;720 bir GIF'ten belirgin şekilde daha küçüktür.
      GIF piksel verimsizdir. Web satır içi kullanım için 480&ndash;720 piksel genişlik ideal noktadır &mdash;
      eylemi okumak için yeterli, hızlı göndermek için yeterince küçük. Retina GIF'lere yardımcı olmaz; kimse onların keskin olmasını beklemez.
    </p>

    <h2>Döngü sayısı ve hız ayarı</h2>
    <p>
      Varsayılan sonsuz döngüdür. Bu, tepki GIF'leri ve kısa döngüler için iyidir.
      10 saniye süren ürün tanıtımları için, sınırlı bir döngü sayısı (2&ndash;3 tekrar) düşünün, böylece izleyiciler yanındaki şeye konsantre olabilir.
    </p>
    <p>
      Hız ayarı önemlidir. Döngü noktasının görünmez olması için benzer bir karede başlayın ve bitirin.
      Döngüye girmeden önce son karede kısa bir duraklama (300&ndash;500ms bekleme) ekleyin &mdash;
      izleyiciler başa dönmek zorunda kalmadan az önce gördüklerini işlerler.
    </p>

    <h2>GIF videoyu ne zaman yener</h2>
    <p>
      GIF'ler her yerde otomatik oynar, hiçbir kontrol, dokun-oynat, ses, codec pazarlığı olmadan.
      4MB altındaki kısa, sessiz, döngülü içerik için GIF en az sürtünmeli yoldur.
      Slack satır içi önizleme yapar, e-posta istemcileri çoğunlukla görüntüler, dokümantasyon araçları kolayca gömer.
    </p>
    <p>
      Video, 4MB üzeri, renk doğruluğu önemli içerik, önemli detay içeren klipler ve 6&ndash;8 saniyeden uzun her şey için GIF'i yener.
      Modern araçlar (sessiz otomatik oynatma <code>&lt;video&gt;</code> etiketleri), video sıkıştırma verimliliğiyle GIF benzeri davranış sağlar.
      1080p'de MP4 olarak 10 saniyelik bir ürün tanıtımı, genellikle aynı klibin 480p GIF'inden daha küçüktür.
    </p>

    <h2>WebP ve APNG alternatifleri</h2>
    <p>
      <strong>WebP animasyonlu</strong> tam renk, alfa saydamlığı destekler ve GIF'ten 2&ndash;5 kat daha küçük sıkıştırır.
      Tarayıcı desteği 2020 itibarıyla evrenseldir. Slack, Discord ve çoğu web bağlamı artık WebP animasyonlarını işler.
      E-posta istemcileri hâlâ işlemez.
    </p>
    <p>
      <strong>APNG</strong> tam rengi destekler ve tüm büyük tarayıcılar tarafından desteklenir ancak çok az sosyal platform tarafından.
      Hedef kabul ediyorsa WebP kullanın; aksi takdirde GIF'e geri dönün.
    </p>

    <h2>Saydamlık</h2>
    <p>
      GIF, 1-bit saydamlığı destekler &mdash; her piksel ya tamamen opak ya da tamamen saydamdır, ara değer yoktur.
      Yumuşak kenarlar veya kısmi saydamlık (gölgeler, kenar yumuşatma) gerektiren kaplamalar için GIF görünür pürüzlülük üretir.
      Gerçek alfa saydamlığına ihtiyacınız varsa APNG veya WebP kullanın.
    </p>

    <h2>GIF'ler için ekran kaydı yakalama</h2>
    <p>
      Ekran kayıtları genellikle GIF çıktısı için aşırı boyutlu ve aşırı kare hızlıdır.
      İş akışı: ekranı yüksek kalitede MP4 veya MOV olarak yakalayın, önemli olan anı tam olarak kırpın,
      ~720 piksel genişliğe küçültün, 12&ndash;15fps'de dışa aktarın. Demo'nun parçası değilse fare hareketini arka plan hareketi olarak yakalamaktan kaçının; bu kareleri boşa harcar.
    </p>

    <h2>Erişilebilirlik ve hareket hassasiyeti</h2>
    <p>
      Döngülü hareket, vestibüler bozuklukları, dikkat sorunlarını ve migreni tetikleyebilir.
      Saygılı GIF kullanımı için yönergeler:
    </p>
    <p>
      Saniyede 3 defadan fazla yanıp sönmekten kaçının (WCAG 2.3.1 &mdash; nöbet eşiği).
      İçeriği tanımlayan bir alternatif metin sağlayın (&ldquo;Kanban sütunları arasında bir görevi sürüklemenin animasyonlu gösterimi&rdquo;),
      sadece &ldquo;GIF&rdquo; değil. Önemli içerikteki uzun otomatik döngülü GIF'ler için bir oynat/duraklat kontrolü düşünün veya video olarak gömün.
      Statik bir yedek sunabiliyorsanız <code>prefers-reduced-motion</code>'a saygı gösterin.
    </p>
    <pre>{`@media (prefers-reduced-motion: reduce) {
  .gif-element {
    /* JS veya picture öğesi aracılığıyla statik ilk kareye geç */
  }
}`}</pre>

    <h2>Altyazılar ve metin kaplamaları</h2>
    <p>
      GIF'lerde ses olmadığından, metin kaplamaları anlatının ağırlığını taşır.
      Metni büyük tutun (mobilde okunabilirlik için GIF yüksekliğinin en az %5'i), yüksek kontrastlı
      (koyu bir anahat veya arka plana sahip beyaz metin) ve rahat bir tempoda okunacak kadar uzun süre ekranda tutun
      (150&ndash;200ms'de 1 kelime). 12fps'de 3 karede (250ms) hızla geçen bir metin okunamaz.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>30+ fps'de dışa aktarma.</strong> Anlamlı bir pürüzsüzlük kazancı olmadan dosya boyutunu iki katına çıkarır.
      12&ndash;15 ideal noktadır.
    </p>
    <p>
      <strong>Boyutları göz ardı etme.</strong> 1080p GIF, dosya bütçelerine karşı bir suçtur.
      480&ndash;720 piksel genişliğe küçültün.
    </p>
    <p>
      <strong>Uzun biçimli içerik için GIF kullanma.</strong> 6&ndash;8 saniyeden veya 3MB üzeri her şey,
      sessiz otomatik oynatmalı MP4 olmalıdır.
    </p>
    <p>
      <strong>Renk yumuşak içeriğe dithering uygulama.</strong> Dither, logolarda, düz UI'da ve gradyan kurumsal sanatta
      berbat görünen gürültü ekler. Bunlar için kapatın.
    </p>
    <p>
      <strong>GIF alfasına güvenme.</strong> 1-bit'tir. Kenarlar pürüzlüdür.
      Gerçek saydamlığa ihtiyacınız varsa WebP veya APNG kullanın.
    </p>
    <p>
      <strong>Döngü dikişini unutma.</strong> Son kare görsel olarak ilk kareyle eşleşmelidir, aksi takdirde görünür bir sıçrama olur.
      Kayıt yaparken döngü noktasını planlayın.
    </p>
    <p>
      <strong>Alternatif metin yok.</strong> Ekran okuyucular hiçbir şey alamaz. &ldquo;Ödeme akışının animasyonlu GIF'i&rdquo; minimumdur.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Kareleri veya videoları <a href="/tools/gif-maker">GIF yapıcı</a> ile döngülü bir animasyonda birleştirin.
      Kaynağınız zaten kaydedilmiş bir klipse <a href="/tools/video-to-gif">videodan GIF'e dönüştürücü</a> ile
      ve GIF kodlamasından önce önemli olan tam 2&ndash;6 saniyeye kaynağı kırpmak için
      <a href="/tools/video-trimmer">video kırpıcı</a> ile eşleştirin.
    </p>
  </>
);