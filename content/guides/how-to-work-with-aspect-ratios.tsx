import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      En-boy oranı, bir dikdörtgenin genişliğinin yüksekliğine oranıdır ve
      her yerde karşımıza çıkar — 16:9 video, 4:3 fotoğraf, 1:1 sosyal
      medya kareleri, 21:9 ultra geniş, 9:16 dikey video, tasarımda altın
      oran. Doğru oranı kullanmak, görsellerin bozulmaması, videolarda
      siyah bant oluşmaması ve görseller yüklenirken düzenin sıçrama
      yapmaması anlamına gelir. Bu rehber, standart oranları, CSS
      <code>aspect-ratio</code> özelliğini, duyarlı teknikleri, sosyal medya
      ve video için platforma özel gereksinimleri ve yeniden boyutlandırma
      veya kırpma sırasında kullanacağınız aritmetiği kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Oran aslında nedir</h2>
    <p>
      Oran, iki boyut arasındaki ilişkidir ve <code> w:h</code> şeklinde
      yazılır. Boyutu değil, orantıyı belirtir.
    </p>
    <p>
      <strong>16:9:</strong> Her 9 birim yükseklik için 16 birim genişlik.
      1920×1080, 1280×720, 640×360 olabilir — hepsi 16:9.
    </p>
    <p>
      <strong>Ondalık form:</strong> 16/9 = 1.778. Orantıyı tanımlayan tek
      bir sayı.
    </p>
    <p>
      Bir görselin belirli bir orana sahip olup olmadığını kontrol etmek
      için genişliği yüksekliğe bölün. Sonuç, oranın ondalık formuyla
      eşleşiyorsa, doğru orandasınız.
    </p>

    <h2>En sık karşılaşacağınız oranlar</h2>
    <p>
      <strong>16:9 (1.778):</strong> HD video, YouTube, modern TV'ler,
      çoğu monitör. Ekran çağının baskın oranı.
    </p>
    <p>
      <strong>4:3 (1.333):</strong> eski TV'ler, eski dijital kameralar,
      çoğu tablet (iPad), baskı fotoğrafları.
    </p>
    <p>
      <strong>1:1 (1.000):</strong> Instagram besleme gönderileri (geçmiş
      varsayılan), albüm kapakları, uygulama simgeleri, profil resimleri.
    </p>
    <p>
      <strong>3:2 (1.500):</strong> DSLR fotoğraflar, çoğu baskı. 35mm
      film. Stok fotoğrafçılıkta hala yaygın.
    </p>
    <p>
      <strong>21:9 (2.333):</strong> ultra geniş monitörler, bazı sinema
      videoları.
    </p>
    <p>
      <strong>9:16 (0.5625):</strong> dikey video — TikTok, Instagram
      Reels, YouTube Shorts, mobil telefon dikey modu.
    </p>
    <p>
      <strong>2:3 (0.667):</strong> dikey Instagram gönderileri, Pinterest
      pinleri, e-kitap kapakları.
    </p>
    <p>
      <strong>1.91:1 (1.910):</strong> Facebook/LinkedIn bağlantı önizleme,
      Open Graph görselleri. Standart sosyal paylaşım boyutu.
    </p>
    <p>
      <strong>Altın oran (1.618):</strong> ara sıra baskı düzenlerinde
      kullanılır; web arayüzünde nadiren zorunludur.
    </p>

    <h2>CSS aspect-ratio özelliği</h2>
    <p>
      Modern CSS'de buna özel bir özellik vardır:
    </p>
    <p>
      <code>.card {`{ aspect-ratio: 16 / 9; width: 100%; }`}</code>
    </p>
    <p>
      Öğe tam genişliği alır ve yükseklik orandan hesaplanır. Padding
      hileleri yok, JS yok, 2021'den beri yaygın olarak destekleniyor.
    </p>
    <p>
      <strong>Yaygın kullanımlar:</strong>
    </p>
    <p>
      <code>aspect-ratio: 16 / 9;</code> video küçük resimleri ve
      gömülü içerikler için.
    </p>
    <p>
      <code>aspect-ratio: 1;</code> kare kartlar, avatarlar, ürün
      kutucukları için.
    </p>
    <p>
      <code>aspect-ratio: 4 / 5;</code> dikey kartlar (Instagram besleme
      görselleri) için.
    </p>

    <h2>Padding-top hilesi (eski)</h2>
    <p>
      <code>aspect-ratio</code> gelmeden önce, yöntem şuydu:
    </p>
    <p>
      <code>.wrapper {`{ position: relative; padding-top: 56.25%;
      /* 9 / 16 × 100 */ }`} .content {`{ position: absolute; top: 0;
      left: 0; width: 100%; height: 100%; }`}</code>
    </p>
    <p>
      Yüzde olarak padding-top, ana öğenin genişliğine göredir ve bu da
      en-boy oranını simüle eder. Hileli ama her yerde çalışırdı.
    </p>
    <p>
      <strong>Ne zaman hala kullanılmalı:</strong> 2021'den eski
      tarayıcıları desteklerken. Aksi halde <code>aspect-ratio</code> kullanın.
    </p>

    <h2>Görsellerden kaynaklanan düzen kaymasını önleme</h2>
    <p>
      Web Temel Metrikleri, düzen kaymalarını cezalandırır. Net boyutları
      olmayan görseller, yüklendiklerinde içeriği etrafa iter.
    </p>
    <p>
      <strong>Çözüm:</strong> Duyarlı CSS kullanırken bile
      <code>&lt;img&gt;</code> etiketlerinde her zaman genişlik ve yükseklik
      nitelikleri sağlayın.
    </p>
    <p>
      <code>&lt;img src=&quot;photo.jpg&quot; width=&quot;1600&quot;
      height=&quot;900&quot; alt=&quot;...&quot;&gt;</code>
    </p>
    <p>
      Modern tarayıcılar bunları en-boy oranını hesaplamak ve görsel
      yüklenmeden önce alan ayırmak için kullanır. <code>style=
      &quot;max-width: 100%; height: auto&quot;</code> ile birleştirildiğinde,
      düzen kayması olmayan duyarlı görseller elde edersiniz.
    </p>

    <h2>Sosyal medya platformu gereksinimleri</h2>
    <p>
      <strong>Instagram besleme:</strong> kare (1:1), dikey (4:5)
      veya yatay (1.91:1). Bu aralıkların dışındakiler kırpılır.
    </p>
    <p>
      <strong>Instagram Hikayeler ve Reels:</strong> 9:16 dikey,
      1080×1920 piksel.
    </p>
    <p>
      <strong>TikTok:</strong> 9:16, 1080×1920.
    </p>
    <p>
      <strong>YouTube video:</strong> 16:9, 1920×1080 (veya daha yüksek).
    </p>
    <p>
      <strong>YouTube Shorts:</strong> 9:16, 1080×1920.
    </p>
    <p>
      <strong>Twitter/X besleme görseli:</strong> 16:9 önerilir;
      1200×675'e kadar çoğu oranı destekler.
    </p>
    <p>
      <strong>Facebook/LinkedIn bağlantı önizleme (OG görseli):</strong>
      1200×630, 1.91:1 oranı.
    </p>
    <p>
      <strong>Pinterest pin:</strong> Maksimum görünürlük için 2:3 (1000×1500).
    </p>

    <h2>Kırpma ve ölçekleme</h2>
    <p>
      Bir görsel gerekli oranla eşleşmediğinde iki seçeneğiniz vardır:
    </p>
    <p>
      <strong>Ölçekle (mektup kutusu/sütun kutusu):</strong> görselin
      tamamını koruyun, bantlar ekleyin. Video oynatıcılar bunu yapar.
    </p>
    <p>
      <strong>Kırp:</strong> kenarları kesin. Görsel alanı korur ancak
      içerik kaybı olur. Instagram ve Facebook, aşırı geniş görseller için
      bunu yapar.
    </p>
    <p>
      <strong>CSS'de object-fit:</strong>
    </p>
    <p>
      <code>object-fit: cover;</code> — doldurmak için ölçekle, fazlalığı
      kırp. Çoğu kart görseli için varsayılan.
    </p>
    <p>
      <code>object-fit: contain;</code> — sığdırmak için ölçekle, mektup
      kutusu bırak. Logolar/simgeler için varsayılan.
    </p>
    <p>
      <code>object-fit: fill;</code> — sığdırmak için uzat (genellikle
      yanlış — görseli bozar).
    </p>

    <h2>Orandan yeni bir boyut hesaplama</h2>
    <p>
      Bir boyut verildiğinde, diğerini hesaplayın:
    </p>
    <p>
      Yeni yükseklik = yeni genişlik × (oran_y / oran_g)
    </p>
    <p>
      Örnek: 800px genişliğinde 16:9 → yükseklik = 800 × (9/16) = 450px.
    </p>
    <p>
      Bir görseli hedef orana kırparken: görselin içine sığan, odak
      noktası etrafında ortalanmış hedef genişlik ve yüksekliği hesaplayın.
    </p>

    <h2>Duyarlı oranlar</h2>
    <p>
      Bazen tüm kesme noktalarında tek bir oran yanlış görünür. Masaüstünde
      yatay kartlar, mobilde kare olmaya ihtiyaç duyabilir.
    </p>
    <p>
      <code>.card {`{ aspect-ratio: 4 / 3; }`} @media (max-width:
      640px) {`{ .card { aspect-ratio: 1; } }`}</code>
    </p>
    <p>
      Veya daha temiz temalama için kesme noktası tarafından kontrol edilen
      CSS özel özelliklerini kullanın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Ondalık ve oran gösterimini karıştırmak.</strong>
      <code> aspect-ratio: 0.5625</code> ve <code>aspect-ratio:
      9/16</code> eşdeğerdir ancak bir kod tabanında karıştırmak kafa
      karıştırıcıdır. Birini seçin.
    </p>
    <p>
      <strong>img etiketlerinde genişlik/yükseklik unutmak.</strong> Düzen
      kaymasına neden olur ve <a href="/learn/core-web-vitals">Core Web Vitals</a>'a zarar verir.
    </p>
    <p>
      <strong>cover veya contain yerine fill kullanmak.</strong>
      <code> object-fit: fill</code> uzatır; fotoğraflar için neredeyse
      her zaman yanlıştır.
    </p>
    <p>
      <strong>Platform oran sınırlarına uymamak.</strong> Instagram'a 21:9
      görsel yüklemek piksel israfıdır — kırpılır.
    </p>
    <p>
      <strong>Oran yerine piksel boyutlarını sabit kodlamak.</strong>
      1200×800 kart, biri görüntü alanını yeniden boyutlandırana kadar
      çalışır. Oranı tanımlayın, tarayıcının piksel boyutunu hesaplamasına
      izin verin.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Hedef boyutları anında{" "}
      <a href="/tools/aspect-ratio-calculator">en-boy oranı hesaplayıcısı</a> ile hesaplayın.
      Hedef oranınızda piksel mükemmeliyetinde yeniden boyutlandırmalar
      üretmek için{" "}
      <a href="/tools/image-resizer">görsel yeniden boyutlandırıcı</a> ile
      ve belirli bir platform kırpmasına uymanız gerektiğinde{" "}
      <a href="/tools/image-cropper">görsel kırpıcı</a> ile birlikte kullanın.
    </p>
  </>
);