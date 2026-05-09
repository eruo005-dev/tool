import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Asal sayı, 1'den büyük ve yalnızca 1 ile kendisine bölünebilen doğal sayıdır. Bu tanımı söylemesi üç saniye sürer ve modern kriptografinin büyük bir kısmının, sayılar teorisinin geniş bir bölümünün, hash hilelerinin, rastgele sayı tohumlamanın ve aksi halde pratik olmayacak bir avuç algoritmanın temelini oluşturur. Bir sayının asal olup olmadığını kontrol etmek kolay görünür ve küçük değerler için gerçekten de öyledir&mdash;ancak sayılar düzinelerce basamağa ulaştığında, saf yaklaşımlar umutsuzca yavaşlar. Modern asallık testi, 2.048 bitlik sayılar için milisaniyeler içinde "muhtemelen asal" kararı vermek üzere Miller-Rabin gibi olasılıksal algoritmalar kullanır; RSA ve benzeri sistemleri pratik kılan da budur. Bu kılavuz, tanımı, deneme bölmesini, Eratosten Kalburu'nu, Fermat ve Miller-Rabin testlerini, Mersenne asallarını ve asal sayıların günlük yazılımlarda nerede karşımıza çıktığını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Tanım, kenar durumlarla birlikte</h2>
    <p>
      Bir asal sayı <em>p</em>, 1'den büyük ve tam olarak iki farklı pozitif böleni olan doğal sayıdır: 1 ve <em>p</em>. Bu tanıma göre, 2 asaldır (bölenler 1 ve 2), 3 asaldır, 4 asal değildir (1, 2, 4), 5 asaldır ve bu böyle devam eder. <strong>1 asal değildir.</strong>{" "}
      0 veya negatif sayılar da asal değildir. 1'in dışlanması, Aritmetiğin Temel Teoremi'nin (benzersiz asal çarpanlara ayırma) düzgün çalışmasını sağlayan bir kuraldır.
    </p>
    <pre>{`30'dan küçük asallar: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

Not: 2 tek çift asaldır.
Diğer tüm asallar tektir.`}</pre>

    <h2>Deneme bölmesi</h2>
    <p>
      Ders kitabı kontrolü: <em>n</em>'in asal olup olmadığını test etmek için, 2'den <code> &radic;n</code>'ye kadar her tam sayıya bölmeyi deneyin. Hiçbiri tam bölünmezse, <em>n</em> asaldır. Yalnızca kareköküne kadar gitmeniz yeterlidir çünkü <code>&radic;n</code>'den büyük herhangi bir bölen, <code>&radic;n</code>'den küçük bir bölenle eşleşmelidir.
    </p>
    <pre>{`97 asal mı?
  √97 ≈ 9,85, bu yüzden bölenleri dene: 2, 3, 5, 7
  97 / 2 = 48,5    hayır
  97 / 3 = 32,33   hayır
  97 / 5 = 19,4    hayır
  97 / 7 = 13,86   hayır
  → 97 asaldır ✓

İyileştirme: yalnızca 2'yi, ardından tek sayıları test et: 3, 5, 7, 9...`}</pre>
    <p>
      Deneme bölmesi O(&radic;n) karmaşıklığındadır ve belki 10<sup>14</sup>'e kadar olan sayılar için uygundur. 20 basamaklı sayılar için çok yavaştır. Kriptografik 600 basamaklı sayılar için ise saçmadır&mdash;evrenin yaşından daha uzun süre beklersiniz.
    </p>

    <h2>Eratosten Kalburu</h2>
    <p>
      Belirli bir <em>N</em> sınırının altındaki <em>tüm</em> asalları istediğinizde, her sayıyı deneme bölmesiyle ayrı ayrı test etmek işi boşa harcar. Kalbur, hepsini bir kerede üretir: 2'den <em>N</em>'ye kadar sayıları yazın, 2'yi daire içine alın, 2'nin her katını çizin, işaretlenmemiş sonraki sayıyı (3) daire içine alın, 3'ün her katını çizin ve bu şekilde devam edin. Sonunda daire içinde kalan sayılar asaldır.
    </p>
    <pre>{`30'a kadar kalbur:
  Başlangıç: 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
  2'den sonra: 4,6,8,10,... çiz
  3'ten sonra: 9,15,21,27 çiz
  5'ten sonra: 25 çiz
  √30 ≈ 5,5'te dur

  Asallar: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29`}</pre>
    <p>
      Kalbur, O(N log log N) zaman ve O(N) bellek ile çalışır. N'nin 10<sup>8</sup>'e kadar olduğu durumlarda doğru algoritmadır; bunun ötesinde, bölümlenmiş kalburlar veya özelleşmiş testler daha iyidir.
    </p>

    <h2>Fermat'ın küçük teoremi</h2>
    <p>
      Eğer <em>p</em> asal ise ve <em>a</em>, <em>p</em> ile bölünemiyorsa, o zaman <code> a<sup>p-1</sup> &equiv; 1 (mod p)</code>. Bunu olasılıksal bir teste dönüştürebilirsiniz: rastgele bir <em>a</em> seçin, <code>a<sup>n-1</sup> mod n</code>'yi hesaplayın ve sonuç 1 değilse <em>n</em> kesinlikle bileşiktir. Ne yazık ki, bazı bileşik sayılar (Carmichael sayıları) her <em>a</em> için Fermat testini geçer, bu nedenle tek başına yeterli değildir.
    </p>

    <h2>Miller-Rabin</h2>
    <p>
      Miller-Rabin, büyük sayılar için ana asallık testidir. <code>a<sup>n-1</sup></code>'in karekök yapısını inceleyerek Fermat testini geliştirir. Rastgele bir tanık <em>a</em> ile, her tur ya <em>n</em>'nin bileşik olduğunu kanıtlar ya da "muhtemelen asal" der. <em>k</em> turdan sonra, bir bileşiği yanlışlıkla asal ilan etme olasılığı en fazla <code>4<sup>-k</sup></code>'ya düşer. Kırk tur, size 10<sup>24</sup>'te 1 hata oranı verir ki bu, bir donanım arızası olasılığından daha azdır.
    </p>

    <h2>Deterministik varyantlar</h2>
    <p>
      Belirli eşiklerin altındaki sayılar için, belirli küçük tanık kümeleri Miller-Rabin'i deterministik bir teste dönüştürür. <em>n</em> &lt; 3.317.044.064.679.887.385.961.981 için, ilk 13 asalı tanık olarak test etmenin doğru olduğu kanıtlanmıştır. AKS (2002), genel olarak polinom zamanında çalışan ilk deterministik asallık testiydi, ancak pratikte Miller-Rabin'den çok daha yavaştır.
    </p>

    <h2>Mersenne asalları</h2>
    <p>
      Bir <strong>Mersenne sayısı</strong> <code>M<sub>p</sub> = 2<sup>p</sup> &minus; 1</code>{" "}
      'dir. <em>p</em>'nin kendisi asal olduğunda ve <code>M<sub>p</sub></code> da asal olduğunda, buna Mersenne asalı denir. Örnekler: 3 (2<sup>2</sup>&minus;1), 7 (2<sup>3</sup>&minus;1), 31 (2<sup>5</sup>&minus;1), 127 (2<sup>7</sup>&minus;1). Great Internet Mersenne Prime Search (GIMPS) yenilerini arar ve son yıllarda bilinen en büyük asalı (24 milyondan fazla basamak) keşfetmiştir. Mersenne asalları, özelleşmiş Lucas-Lehmer testi ile test edilir.
    </p>

    <h2>Asalların kriptografi için önemi</h2>
    <p>
      RSA şifrelemesi, iki büyük asalı çarpmanın ucuz, ancak çarpımı asal çarpanlarına ayırmanın zor olması gerçeğine dayanır. 2.048 bitlik bir RSA anahtarı, kabaca 1.024 bitlik iki asal kullanır; bunları bulmak Miller-Rabin ile birkaç saniye sürer, ancak çarpımlarını çarpanlarına ayırmak bilinen algoritmalarla yüzyıllar alırdı. Eliptik eğri kriptografisi, alan aritmetiğini tanımlamak için asalları kullanır. Diffie-Hellman, grupları tanımlamak için onları kullanır. Büyük asallık testi yavaş olsaydı, modern HTTPS yavaş olurdu.
    </p>

    <h2>Günlük yazılımlarda asallar</h2>
    <p>
      Hash tablosu boyutları, çakışma modellerini en aza indirmek için genellikle asaldır. Doğrusal eşlemeli rastgele sayı üreteçleri, modül olarak asalları kullanır. Guguk kuşu hashing ve Bloom filtreleri, özellikleri asal parametrelere bağlı olan birden çok hash işlevi kullanır. Veritabanı bölümleme işlevleri bazen bir asal sayıya göre mod alır. Kütüphane kodunda 997, 10007 veya 1000003 gibi dizi boyutları gördüyseniz, bu hash dağılımı için seçilmiş bir asaldır.
    </p>

    <h2>Asal sayma işlevi</h2>
    <p>
      <code>&pi;(N)</code>, <em>N</em>'den küçük veya eşit asal sayıların miktarını belirtir. Asal Sayı Teoremi, <code>&pi;(N) ~ N / ln(N)</code> olduğunu söyler. N = 1.000.000 için <code>&pi;(N) = 78.498</code>, 72.382 tahminine yakındır. Sayılar büyüdükçe asallar daha nadir hale gelir, ancak asla tükenmezler&mdash;Öklid sonsuz sayıda olduklarını kanıtlamıştır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>1'e asal demek.</strong> 1, çarpımsal birimdir; yalnızca bir böleni vardır. Dışlanması, benzersiz çarpanlara ayırmayı çalıştırmak için bilinçli bir seçimdir.
    </p>
    <p>
      <strong>2'ye çift olduğu için bileşik demek.</strong> 2, tek çift asaldır. Diğer tüm asallar tektir, ancak 2'nin kendisi asaldır.
    </p>
    <p>
      <strong>Deneme bölmesini &radic;n yerine n/2'de durdurmak.</strong> Çarpanlar &radic;n etrafında çiftler halinde gelir. &radic;n'nin ötesini test etmek boşa iştir; öncesinde durmak hiçbir çarpanı kaçırmaz.
    </p>
    <p>
      <strong>Fermat testinin tek başına yeterli olduğunu varsaymak.</strong> Carmichael sayıları (561, 1105, 1729, ...) her aralarında asal tanık için Fermat testini geçer. Miller-Rabin, Carmichael sayılarının taklit edemeyeceği karekök yapısını kontrol ederek bunu düzeltir.
    </p>
    <p>
      <strong>Kriptografi için çok az Miller-Rabin turu kullanmak.</strong> 20 tur genel kontroller için aşırıdır. Kriptografik asal üretimi için 40+ tur veya deterministik tanık kümeleri kullanın.
    </p>
    <p>
      <strong>Çok büyük sayılar için basit deneme bölmesine güvenmek.</strong> 20 basamaklı bir sayının &radic;n'si 10<sup>10</sup>'a yakındır&mdash;kabaca 10 milyar deneme bölmesi. Miller-Rabin aynı işi milisaniyeler içinde yapar.
    </p>
    <p>
      <strong>"Muhtemelen asal" ile "asal"ı karıştırmak.</strong> Olasılıksal testlerin küçük ama sıfır olmayan bir hata oranı vardır. Kriptografik kullanım için hata oranı ihmal edilebilir; matematiksel kanıtlar için deterministik bir teste ihtiyacınız vardır.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Elle deneme bölmesi yapmayı bırakın;{" "}
      <a href="/tools/prime-number-checker">asal sayı denetleyicimiz</a> küçük sayıları deneme bölmesiyle, büyük girdileri ise Miller-Rabin ile işler. Bir aralıktaki asalların dağılımını analiz ederken bunu{" "}
      <a href="/tools/average-calculator">ortalama hesaplayıcı</a> ile ve büyük tamsayı değerlerini metin protokolleri aracılığıyla taşıma gibi kriptografiyle ilgili konular için <a href="/tools/base64-encoder-decoder">Base64 kodlayıcı</a> ile birlikte kullanın.
    </p>
  </>
);