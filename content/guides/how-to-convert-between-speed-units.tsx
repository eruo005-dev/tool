import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Hız dönüşümleri sürekli karşımıza çıkar — koşu temposu, araba
      hız göstergeleri, hava durumu rüzgarı, havacılık, tekne
      knotları, spor topu takibi. Her alan farklı bir birim seçer:
      ABD'de mph, dünyanın çoğunda km/h, fizikte m/s, denizcilikte
      ve havacılıkta knot, koşucular için dakika/mil. Dönüşümler
      mekaniktir, ancak tuzaklar birim seçimi, anlamlı rakamlar ve
      anlık hız ile tempo arasındaki farktır. Bu rehber, birim
      ailelerini, dönüşüm faktörlerini, hangisini ne zaman
      kullanacağınızı, tempo ↔ hız dönüşümünü (birim dönüşümüyle
      aynı şey değildir) ve yaygın tuzakları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Yaygın hız birimleri</h2>
    <p>
      <strong>m/s (metre/saniye):</strong> SI temel birimi. Fizik,
      mühendislik. 1 m/s = 3.6 km/h.
    </p>
    <p>
      <strong>km/h (kilometre/saat):</strong> dünyanın çoğunda
      arabalar, bisikletler, günlük hız.
    </p>
    <p>
      <strong>mph (mil/saat):</strong> ABD ve İngiltere arabaları,
      hava durumu, beyzbol atışları.
    </p>
    <p>
      <strong>knot (deniz mili/saat):</strong> denizcilik,
      havacılık, meteoroloji. 1 knot = 1.852 km/h ≈ 1.15 mph.
    </p>
    <p>
      <strong>ft/s (fit/saniye):</strong> ABD mühendisliği,
      balistik, eski fizik metinleri.
    </p>
    <p>
      <strong>Mach:</strong> ses hızının katı. Mach 1 ≈
      343 m/s ≈ 1236 km/h deniz seviyesinde, ancak irtifa ve
      <a href="/learn/temperature-ai">sıcaklık</a> ile değişir.
    </p>
    <p>
      <strong>Işık hızı (c):</strong> 299.792.458 m/s.
      Görelilik, parçacık fiziği.
    </p>

    <h2>Temel dönüşüm faktörleri</h2>
    <p>
      Birini ezberleyin: <strong>1 m/s = 3.6 km/h</strong>. Gerisi
      ondan gelir.
    </p>
    <pre>
{`km/h → m/s:  3.6'ya böl
m/s → km/h:  3.6 ile çarp

mph → km/h:  1.609344 ile çarp
km/h → mph:  1.609344'e böl (veya × 0.6214)

m/s → mph:   2.2369 ile çarp
ft/s → m/s:  0.3048 ile çarp
knot → km/h: 1.852 ile çarp
knot → mph:  1.15078 ile çarp`}
    </pre>
    <p>
      mph ve km/h arasındaki dönüşüm faktörü (1.609344), bir milin
      km cinsinden tam tanımıdır. Bilimsel çalışmalar için 6
      ondalığı koruyun; günlük kullanım için 1.609 yeterlidir.
    </p>

    <h2>Tempo vs hız — koşucu tuzağı</h2>
    <p>
      Koşu, yüzme, kürek çekme hız (mesafe/zaman) yerine
      <strong>tempo</strong> (zaman/mesafe) kullanır. Bunlar
      birbirinin tersidir:
    </p>
    <pre>
{`tempo = zaman / mesafe
hız = mesafe / zaman

Örnek: 6 mph koşu temposu
  = 10 dakikada 1 mil
  = 10:00 dk/mil temposu

8 dk/mil temposu
  = 8 dakikada 1 mil
  = 7.5 mph
  = 12.07 km/h`}
    </pre>
    <p>
      <strong>Püf nokta:</strong> tempoları dakikaları
      ortalamayarak ortalamazsınız. 8:00 ve 10:00'da iki milin
      ortalaması <em>9:00 değildir</em> — şöyledir:
    </p>
    <pre>
{`Toplam süre: 8 + 10 = 18 dk
Toplam mesafe: 2 mil
Ortalama tempo: 18/2 = 9:00 dk/mil  ← burada tesadüf
Ancak 2 mil için 8:00 + 12:00:
  20/2 = 10:00 — doğru
Farklı mesafelerdeki bölümler için, zamana değil mesafeye göre ağırlıklandırın.`}
    </pre>
    <p>
      Şüpheye düştüğünüzde, her şeyi saniye ve metreye çevirin,
      işlemi yapın, geri çevirin.
    </p>

    <h2>Hangi bağlamda hangi birim</h2>
    <p>
      <strong>Koşu, yürüyüş:</strong> dk/mil veya dk/km. Tempo.
    </p>
    <p>
      <strong>Bisiklet:</strong> mph veya km/h. Hız.
    </p>
    <p>
      <strong>Araba sürüşü:</strong> mph (ABD/İngiltere) veya km/h
      (diğer her yer). Hız göstergeleri.
    </p>
    <p>
      <strong>Rüzgar hızı (hava durumu):</strong> ABD'de mph,
      Avrupa/Kanada'da km/h, meteorolojide m/s. Denizcilik knot
      kullanır.
    </p>
    <p>
      <strong>Havacılık:</strong> çoğu hız için knot; yüksek hız
      için Mach. Yer hızı knot, gösterge hava hızı knot (KIAS).
    </p>
    <p>
      <strong>Top sporları:</strong> beyzbol atışları ve tenis
      servisleri için mph; Kuzey Amerika dışında aynı sporlarda
      km/h.
    </p>
    <p>
      <strong>Fizik / mühendislik:</strong> neredeyse her zaman m/s.
      Denklemleri basit tutar (F=ma, KE=½mv² hepsi SI'da).
    </p>

    <h2>Anlamlı rakamlar</h2>
    <p>
      55 mph'yi km/h'ye çevirmek: 55 × 1.609344 = 88.51392 km/h.
      Ancak girdiniz 2 anlamlı rakamdı, bu nedenle çıktı da öyle
      olmalı — 89 km/h, 88.51 değil.
    </p>
    <p>
      Dönüşüm yoluyla hassasiyeti şişirmeyin. 60 mph hız limiti
      &ldquo;yaklaşık 97 km/h&rdquo;dir, &ldquo;96.56 km/h&rdquo;
      değil.
    </p>

    <h2>Rüzgar hızı ölçekleri</h2>
    <p>
      Beaufort ölçeği bir birim değildir — belirli hız aralıklarına
      karşılık gelen kategorik (0-12) bir ölçektir:
    </p>
    <pre>
{`Beaufort  Açıklama    km/h
0         Sakin       0-1
3         Hafif       12-19
6         Kuvvetli    39-49
10        Fırtına     89-102
12        Kasırga     117+`}
    </pre>
    <p>
      Belirli bir Beaufort'u kesin bir hıza dönüştürmek yanlıştır —
      bu bir aralıktır. Kaba tahminler için orta noktayı kullanın.
    </p>

    <h2>Zaman-hız-mesafe problemleri</h2>
    <p>
      Klasik d = vt (mesafe = hız × zaman). Birimlere dikkat edin:
    </p>
    <pre>
{`Örnek: 55 mph'de 300 mil sürmek ne kadar sürer?
  t = d / v = 300 / 55 = 5.45 saat
    = 5s 27dk

Aynısı km cinsinden:
  d = 300 × 1.609 = 482.7 km
  v = 55 × 1.609 = 88.5 km/h
  t = 482.7 / 88.5 = 5.45 saat  ← aynı cevap`}
    </pre>
    <p>
      Bölmeden önce birimleri dönüştürün, her seferinde doğru cevabı
      alırsınız. Birimleri karıştırmak (km'yi mph'ye bölmek) anlamsız
      sonuçlar verir.
    </p>

    <h2>Anlık vs ortalama hız</h2>
    <p>
      Hız göstergeleri anlık hızı gösterir. Yolculuk özetleri
      ortalamayı gösterir. Bunlar farklıdır:
    </p>
    <pre>
{`Sürüş: 10 mph trafik sıkışıklığında 20 dk dahil 1 saatte 60 mil
  Ortalama hız: Saat boyunca 60 mph (ancak kısımları 80'de geçirdiniz)
  Tepe hız: belki 80 mph

Koşucu: Hızlı başlangıç ve yavaş bitişle 50 dk'da 10k
  Ortalama tempo: 5:00/km
  Ancak bireysel km bölümleri 4:15 ila 5:45 arasında değişebilir`}
    </pre>
    <p>
      &ldquo;Benim koşum&rdquo; ile &ldquo;maraton dünya rekoru
      temposu&rdquo; karşılaştırılırken, dünya rekoru tüm mesafe
      boyunca ortalama tempodur. 10k kişisel rekorunuz bir maraton
      temposuyla karşılaştırılabilir değildir.
    </p>

    <h2>Dikkat edilmesi gereken SI dışı karışıklıklar</h2>
    <p>
      <strong>Furlong/fortnight:</strong> şaka birimi, ancak ara
      sıra görülür. 1 furlong = 220 yard = 201.168 m. 1 fortnight =
      2 hafta = 1.209.600 s. 1 f/fn ≈ 0.000166 m/s.
    </p>
    <p>
      <strong>Rüzgarda knot vs yasal mil/saat:</strong>
      deniz tahminlerinde knot (deniz mili), kara tahminlerinde
      yasal mph. Karıştırmayın.
    </p>
    <p>
      <strong>Havacılıkta hava hızı türleri:</strong> IAS (gösterge),
      CAS (kalibre), TAS (gerçek), GS (yer). Hepsi knot ancak farklı
      anlamlar. Pilotun bakması gerekir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Pay ve paydayı değiştirmek.</strong> km/h'yi mph'ye
      mi çeviriyorsunuz? 1.609'a bölün, çarpmayın. Sağlama: aynı
      hız için mph &lt; km/h (mil &gt; km).
    </p>
    <p>
      <strong>Tempoları zamanı ortalamayarak ortalamak.</strong>
      Bölümler eşit değilse mesafeye göre ağırlıklandırın.
    </p>
    <p>
      <strong>Knot ve mph'yi karıştırmak.</strong> 1 knot ≈ 1.15
      mph. Yakın ancak birbirinin yerine kullanılamaz — fark
      havacılık ve yelkencilikte önemlidir.
    </p>
    <p>
      <strong>Mach 1'i sabit bir sayı olarak kullanmak.</strong>
      Sıcaklık/irtifaya bağlıdır. 35.000 ft'de Mach 1 ≈ 295 m/s;
      deniz seviyesinde ≈ 343 m/s.
    </p>
    <p>
      <strong>Dönüşümde aşırı hassasiyet.</strong> 55 mph hız
      limitiniz &ldquo;88.51392 km/h&rdquo; değildir. Girdi
      hassasiyetine yuvarlayın.
    </p>
    <p>
      <strong>Beaufort ölçeğini bir sayı olarak uygulamak.</strong>
      Bu bir aralıktır; &ldquo;Beaufort 4&rdquo;ü tek bir hıza
      dönüştürmek bilgi kaybına yol açar.
    </p>
    <p>
      <strong>Bir hesaplama içinde birimleri karıştırmak.</strong>
      Her zaman önce ortak bir birime dönüştürün, ardından hesaplayın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Hız birimleri arasında anında dönüşüm yapmak için{" "}
      <a href="/tools/speed-converter">hız dönüştürücüyü</a> kullanın.
      Koşu bölümleri için{" "}
      <a href="/tools/running-pace-calculator">koşu temposu hesaplayıcı</a>
      {" "}ve diğer her şey için{" "}
      <a href="/tools/unit-converter">birim dönüştürücü</a> ile
      birlikte kullanın.
    </p>
  </>
);