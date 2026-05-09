import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      <a href="/learn/temperature-ai">Sıcaklık</a> dönüşümü, Avrupa'daki bir markette kafanızda doğru bir şekilde yapmanız gerektiğinde, fırınınız bir ölçekte kalibre edilmişken tarif başka bir ölçekteyken veya bir laboratuvar protokolü Kelvin belirtirken cihazınız Santigrat okuduğunda, önemsiz görünen ancak doğru yapılması gereken becerilerden biridir. Pratikte dört ölçek karşımıza çıkar—Santigrat, Fahrenhayt, Kelvin, Rankine—ve her birinin var olmak için bir nedeni vardır. Kelvin ve Santigrat aynı adım boyutunu paylaşır ancak sıfır noktaları farklıdır. Fahrenhayt daha küçük bir adıma ve daha tuhaf bir sıfır noktasına sahiptir. Rankine ise Kelvin'in Fahrenhayt adımlarıyla ifade edilmiş halidir. Bunları mühendislik veya tıbbi bağlamlarda karıştırmak ölümcül olabilir, bu nedenle formülleri ezbere bilmek ve cevap için zihinsel bir sağlamlık kontrolü yapmak önemlidir. Bu kılavuz, dört ölçeği, dönüşüm formüllerini, mutlak sıfırı, kalibrasyon noktası olarak insan vücut sıcaklığını ve her ölçeğin profesyonel standart olduğu durumları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Dört ölçek</h2>
    <p>
      <strong>Santigrat</strong> (&deg;C), standat atmosfer basıncında suyun donma noktasını 0 ve kaynama noktasını 100 olarak belirler. <strong>Fahrenhayt</strong> (&deg;F) bunları 32 ve 212 olarak belirler. <strong>Kelvin</strong> (K, derece işareti yok) Santigrat'ın adım boyutunu paylaşır ancak mutlak sıfırdan başlar: 0 K = &minus;273,15 &deg;C. <strong>Rankine</strong> (&deg;R) Fahrenhayt'ın adım boyutunu paylaşır ve mutlak sıfırdan başlar: 0 &deg;R = &minus;459,67 &deg;F.
    </p>
    <pre>{`                Donma  Kaynama  Mutlak sıfır
Santigrat    C  0       100     −273,15
Fahrenhayt   F  32      212     −459,67
Kelvin       K  273,15  373,15  0
Rankine      R  491,67  671,67  0`}</pre>

    <h2>Santigrat'tan Fahrenhayt'a ve geri</h2>
    <p>
      <code>F = C &times; 9/5 + 32</code>. Veya eşdeğer olarak, <code>F = C &times; 1,8 + 32</code>.
      Ters yönde: <code>C = (F &minus; 32) &times; 5/9</code>. Çıkarma işlemi önce yapılır—bu yaygın aritmetik tuzağıdır.
    </p>
    <pre>{`20 °C → 20 × 1,8 + 32 = 68 °F
0 °C → 32 °F
100 °C → 212 °F
37 °C (vücut sıcaklığı) → 98,6 °F

68 °F → (68 − 32) × 5/9 = 20 °C
32 °F → 0 °C
−40 °F → −40 °C  (ölçekler burada kesişir)`}</pre>

    <h2>Zihinsel kestirmeler</h2>
    <p>
      F'den C'yi hızlıca tahmin etmek için: 30 çıkarın, 2'ye bölün. &ldquo;86 &deg;F&rdquo; &rarr; 56 / 2 = 28 &deg;C (gerçek: 30). Hava durumu sohbeti için yeterince doğru. C'den F için, ikiye katlayın ve 30 ekleyin: 20 &deg;C &rarr; 40 + 30 = 70 &deg;F (gerçek: 68). Bu kestirmeler uç noktalarda doğruluğu kaybeder ancak insanların normalde karşılaştığı aralık için işe yarar.
    </p>

    <h2>Santigrat ve Kelvin</h2>
    <p>
      <code>K = C + 273,15</code>. 0,15 hassas çalışma için önemlidir; hava durumu için 273'e yuvarlamak yeterlidir ancak termodinamik ödevi için yanlıştır. Kelvin farkları ve Santigrat farkları aynıdır—10 K'lik bir değişim, 10 &deg;C'lik bir değişime eşittir. Bu nedenle fizikteki sıcaklık katsayıları, başlangıç sıcaklığı Santigrat olsa bile her zaman Kelvin cinsindendir.
    </p>

    <h2>Fahrenhayt ve Rankine</h2>
    <p>
      <code>R = F + 459,67</code>. Rankine, bazı ABD termodinamik ve havacılık bağlamlarında kullanılır çünkü mutlak bir ölçek verirken Fahrenhayt adımlarını korur. Bu alanların dışında nadiren karşılaşırsınız.
    </p>

    <h2>Mutlak sıfır</h2>
    <p>
      0 K = 0 &deg;R = &minus;273,15 &deg;C = &minus;459,67 &deg;F. Bu, klasik moleküler hareketin durduğu sıcaklıktır. Buna ulaşamazsınız (termodinamiğin üçüncü yasası); yalnızca asimptotik olarak yaklaşabilirsiniz. Laboratuvarlarda şimdiye kadar elde edilen en soğuk sıcaklıklar, sıfırın birkaç milyarda biri Kelvin'dir. Negatif Kelvin veya Rankine değerleri normal anlamda anlamsızdır.
    </p>

    <h2>Sağlamlık kontrolü olarak insan vücudu</h2>
    <p>
      Normal vücut sıcaklığı ~37 &deg;C = 98,6 &deg;F = 310,15 K'dir. Ateş 38 &deg;C (100,4 &deg;F) ve üzeridir. Hipotermi 35 &deg;C'nin (95 &deg;F) altında başlar. Dönüşümünüz 200 veya 30 gibi bir vücut sıcaklığı üretiyorsa, bir basamak kaydırmışsınızdır. Ayrıca kullanışlı: oda sıcaklığı ~20&ndash;22 &deg;C = 68&ndash;72 &deg;F'dir. Bir buz banyosu 0 &deg;C'dir. Kaynar su 100 &deg;C'dir. Bunları korkuluk olarak aklınızda bulundurun.
    </p>

    <h2>Pişirme sıcaklıkları</h2>
    <p>
      Fırın tarifleri ölçek farklılıklarıyla çakışır. Anahtar dönüşümler:
    </p>
    <pre>{`350 °F = 177 °C   (klasik kurabiyeler, güveçler)
400 °F = 204 °C   (sebze kızartma)
425 °F = 218 °C   (pizza, kızartma)
450 °F = 232 °C   (yüksek ısıda kızartma)
500 °F = 260 °C   (yassı ekmekler, bazı pizza taşları)
180 °C = 356 °F   (hafif pişirme)
200 °C = 392 °F
220 °C = 428 °F`}</pre>
    <p>
      Çoğu fırın 5 &deg;C veya 25 &deg;F'lik artışlarla yuvarlar, bu nedenle bir tarifin tam değeri aralıktan daha az önemlidir. 177 &deg;C gerektiren bir tarif, 175 &deg;C veya 180 &deg;C'de de gayet iyi sonuç verir.
    </p>

    <h2>Bilimsel kurallar</h2>
    <p>
      Fizik ve kimya varsayılan olarak Kelvin kullanır çünkü termodinamik denklemler mutlak bir ölçek gerektirir. İdeal gaz yasası <code>PV = nRT</code> yalnızca Kelvin ile çalışır—Santigrat girerseniz yanlış cevaplar alırsınız. İklim bilimi Santigrat kullanır çünkü deltalar küçüktür ve Kelvin adımları aynıdır. Biyoloji ve tıp, ABD tüketici pazarı dışında neredeyse her yerde Santigrat kullanır.
    </p>

    <h2>Her ölçeğin standart olduğu durumlar</h2>
    <p>
      Santigrat: dünyanın çoğu, hava durumu, ABD dışında yemek pişirme, biyoloji, meteoroloji. Fahrenhayt: ABD tüketici hava durumu, ABD ev yemekleri, ABD tıbbi çizelgeleri. Kelvin: fizik, kimya, mühendislik termodinamiği, astronomi. Rankine: bazı ABD havacılık ve HVAC hesaplamaları.
    </p>

    <h2>Hassasiyet ve yuvarlama</h2>
    <p>
      Hava durumu raporları için genellikle bir ondalık yeterlidir. Vücut sıcaklığı için derecenin onda biri klinik olarak önemlidir. Bilimsel çalışmalar için tam formülü kullanın ve girdiniz kadar anlamlı rakam taşıyın. Raporlarken, ölçümünüzün hassasiyetine uygun şekilde yuvarlayın—termometreniz 0,1'e kadar okuyorken 98,6001 &deg;F demek sahte hassasiyettir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Aritmetiği yanlış sırada yapmak.</strong> <code>F = C &times; 9/5 + 32</code> önce çarpma, sonra toplama anlamına gelir. Önce 32 eklerseniz, çarpan faktörü kadar yanlış bir cevap alırsınız.
    </p>
    <p>
      <strong>Farklar için ofseti kullanmak.</strong> 10 &deg;C'lik bir sıcaklık <em>farkı</em> 18 &deg;F'dir (sadece 9/5 ile çarpın), 50 &deg;F değil. Ofsetler yalnızca mutlak sıcaklıklar için geçerlidir, farklar için değil.
    </p>
    <p>
      <strong>Hassas çalışmada 273,15'i 273'e yuvarlamak.</strong> 0,15 ofseti fizik ve termodinamik için önemlidir. Sadece gündelik hava durumu dönüşümünde atın.
    </p>
    <p>
      <strong>Kelvin'in derece işaretini atladığını unutmak.</strong> &ldquo;300 K&rdquo; şeklindedir, &ldquo;300 &deg;K&rdquo; değil. Santigrat ve Fahrenhayt derece işaretini korur, Kelvin korumaz. Küçük bir biçimlendirme, büyük bir güvenilirlik maliyeti.
    </p>
    <p>
      <strong>İdeal gaz hesaplamalarını Santigrat cinsinden yapmak.</strong> Gaz yasaları mutlak sıcaklık gerektirir. Santigrat kullanmak, özellikle hatanın değere göre en büyük olduğu 0 &deg;C civarında, son derece yanlış cevaplar verir.
    </p>
    <p>
      <strong>Termometre birimlerini yanlış okumak.</strong> 37 gösteren bir ABD termometresi muhtemelen Santigrat'tır (bu bir tıbbi termometredir); Birleşik Krallık'ta 37 gösteren bir hava durumu uygulaması olağandışıdır; ABD'de muhtemelen Fahrenhayt'tır. Bir sayıya güvenmeden önce her zaman birimi kontrol edin.
    </p>
    <p>
      <strong>Fahrenhayt'ta &ldquo;negatif&rdquo;in tehlikeli derecede soğuk anlamına geldiğini varsaymak.</strong> Sıfır &deg;F (&minus;18 &deg;C) soğuktur, felaket değildir. Her iki ölçekte de &minus;40 ciddi derecede soğuktur. Bağlam önemlidir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Baskı altında 9/5 çarpımını yapmayı bırakın; değerinizi{" "}
      <a href="/tools/temperature-converter">sıcaklık dönüştürücümüze</a> yapıştırın ve dört ölçeği de bir kerede alın. Tüm ölçüm dönüşümleri seti için{" "}
      <a href="/tools/unit-converter">birim dönüştürücü</a> ile ve sıcaklık dönüşümü bir tarifte hacim veya ağırlıkla eşleştirildiğinde{" "}
      <a href="/tools/cooking-converter">yemek dönüştürücü</a> ile eşleştirin.
    </p>
  </>
);