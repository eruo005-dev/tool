import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Okunabilirlik puanları, &ldquo;bunu okumak ne kadar zor?&rdquo; sorusunu bir sayıya dönüştürür. Formüller
      1940'lardan beri var, 1970'lerde ABD ordusu tarafından benimsendi ve bugün hâlâ yayınevlerinde, hukuk
      firmalarında ve devlet kurumlarında yazım kılavuzlarını şekillendiriyor. 60 puanlık bir Flesch Okuma
      Kolaylığı kabaca 8-9. sınıf okuma seviyesine denk gelir; 30'un altı akademik düzyazı gibi okunur;
      80'in üstü ise bir çocuk kitabı gibi okunur. Bu sayılar kaba göstergelerdir, kehanet değildir, ancak
      hedef kitlesi için fazla yoğun hale gelmiş düzyazıyı yakalayacak kadar tutarlıdırlar. Bu kılavuz, ana
      formülleri (Flesch-Kincaid, Flesch Okuma Kolaylığı, Gunning Fog, SMOG, Coleman-Liau, ARI), bunların
      farklılıklarını, puanları düşürmek için somut taktikleri, yaygın içerik türleri için hedef sınıf
      seviyelerini ve metriklerin sınırlarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Flesch Okuma Kolaylığı</h2>
    <p>
      Flesch Okuma Kolaylığı (Rudolf Flesch, 1948) tipik olarak 0 ile 100 arasında bir puan döndürür,
      yüksek puan daha kolay anlamına gelir. Formül şudur:
      <code> 206,835 &minus; 1,015 &times; (kelimeler/cümleler) &minus; 84,6 &times;
      (heceler/kelimeler)</code>. 90-100 puanı çok kolay düzyazı (5. sınıf) olarak okunur. 60-70
      puanı sade İngilizcedir (8-9. sınıf) ve genel kitleye yönelik yazılar için hedeftir. 30-50
      puanı zordur (üniversite seviyesi). 30'un altı çok zordur (akademik). Flesch Okuma Kolaylığı
      en çok atıf yapılan okunabilirlik metriğidir ve Microsoft Word ile birçok dil bilgisi
      denetleyicisine yerleşiktir.
    </p>

    <h2>Flesch-Kincaid Sınıf Seviyesi</h2>
    <p>
      Flesch-Kincaid Sınıf Seviyesi (J. Peter Kincaid, 1975, ABD Donanması eğitim kılavuzları için)
      metni bir ABD okul sınıf seviyesine eşler. Formül şudur:
      <code> 0,39 &times; (kelimeler/cümleler) + 11,8 &times; (heceler/kelimeler) &minus; 15,59</code>.
      Çıktı bir sınıf numarasıdır: 8,0 8. sınıf, 12,0 lise son sınıf, 16+ üniversite
      seviyesi anlamına gelir. Flesch-Kincaid Sınıf Seviyesi, teknik olmayan
      paydaşlara (&ldquo;bu 10. sınıf seviyesinde okunuyor&rdquo;) Okuma Kolaylığı'ndan (&ldquo;puanınız
      55&rdquo;) daha kolay iletilir.
    </p>
    <pre>{`Kelimeler: 142
Cümleler: 8
Hece: 220

kelimeler/cümleler = 17,75
heceler/kelimeler = 1,55

Flesch Okuma Kolaylığı = 206,835 - (1,015 * 17,75) - (84,6 * 1,55) = 57,7
Flesch-Kincaid Sınıf Seviyesi = (0,39 * 17,75) + (11,8 * 1,55) - 15,59 = 9,6`}</pre>

    <h2>Gunning Fog İndeksi</h2>
    <p>
      Gunning Fog (Robert Gunning, 1952), metni ilk okuyuşta anlamak için gereken sınıf seviyesini
      tahmin eder. Formül: <code>0,4 &times; ((kelimeler/cümleler) + 100 &times;
      (karmaşık kelimeler/kelimeler))</code>, burada karmaşık kelimeler, özel isimler, yaygın
      ekler ve bileşik kelimeler hariç, üç veya daha fazla heceli olanlardır. Gunning Fog, aynı metin
      için Flesch-Kincaid'den daha yüksek puan verme eğilimindedir çünkü karmaşık kelime kriteri
      katıdır. 12'lik bir Fog puanı, bir lise son sınıf öğrencisinin okuyabileceği anlamına gelir; 17+
      üniversite mezunu anlamına gelir.
    </p>

    <h2>SMOG İndeksi</h2>
    <p>
      SMOG (G. Harry McLaughlin, 1969, &ldquo;Basit Karmaşık Dil Ölçüsü&rdquo;) çok heceli
      kelimelere (3+ hece) odaklanır. Formül: <code>1,0430 &times;
      sqrt(çok heceliler &times; (30/cümleler)) + 3,1291</code>, 30 cümlelik
      örnekler üzerinden hesaplanır. SMOG, sağlık sektöründe popülerdir çünkü kısa süreli hatırlama
      ölçümlerinden ziyade tam anlama üzerinde doğrulanmıştır, bu da onu hastaların gerçekten
      anlaması gereken materyaller (onam formları ve ilaç prospektüsleri gibi) için daha
      öngörücü kılar.
    </p>

    <h2>Coleman-Liau ve ARI</h2>
    <p>
      Coleman-Liau İndeksi ve Otomatik Okunabilirlik İndeksi'nin ikisi de hataya açık olan hece
      saymayı önler. Sınıf seviyesini tahmin etmek için karakter sayıları ve kelime sayıları
      kullanırlar. Coleman-Liau: <code>0,0588 &times; L &minus; 0,296 &times; S &minus; 15,8</code>, burada L
      100 kelimedeki ortalama harf sayısı ve S 100 kelimedeki ortalama cümle sayısıdır. ARI:
      <code>4,71 &times; (karakterler/kelimeler) + 0,5 &times; (kelimeler/cümleler) &minus; 21,43</code>.
      Her ikisi de hece sayma buluşsal yöntemlerinin başarısız olduğu durumlarda (teknik jargon,
      kısaltmalar, İngilizce olmayan özel isimler) kullanışlıdır.
    </p>

    <h2>İçerik türüne göre hedef sınıf seviyeleri</h2>
    <p>
      Pazarlama metinleri 6-8. sınıfı hedefler. Haber yazıları 8-10. sınıfı hedefler (AP Stil Kılavuzu
      8'i önerir). Genel blog yazıları 8-12. sınıfı hedefler. Teknik dokümantasyon
      10-14. sınıfı hedefler. Hukuki ve akademik yazılar genellikle 16-20. sınıf puanı alır ancak
      mümkün olduğunca basitleştirilmelidir. 2010 ABD Sade Yazı Yasası da dahil olmak üzere devlet
      sade dil yönergeleri, halka yönelik iletişim için 8. sınıfı önerir. E-posta
      konu satırları ve sosyal medya gönderileri, zaman baskısı altında maksimum anlama için 3-5. sınıfı
      hedefler.
    </p>
    <pre>{`Pazarlama:       6-8. sınıf
Haber:           8-10. sınıf
Blog yazıları:   8-12. sınıf
Teknik döküman:  10-14. sınıf
Sade dil:        8. sınıf hedef (ABD yasası, devlet içeriği)
E-posta konuları: 3-5. sınıf`}</pre>

    <h2>Sınıf seviyesini düşürme taktikleri</h2>
    <p>
      Cümleleri kısaltın. Yüksek sınıf seviyesinin en büyük nedeni, birçok yan cümle içeren uzun
      cümlelerdir. 25 kelimenin üzerindeki cümleleri iki veya üçe bölün. Aynı anlamı taşıdıklarında
      çok heceli kelimeleri daha kısa eş anlamlılarıyla değiştirin: &ldquo;kullanmak&rdquo; için
      &ldquo;istifade etmek&rdquo; yerine, &ldquo;yardım etmek&rdquo; için &ldquo;kolaylaştırmak&rdquo;
      yerine, &ldquo;başlamak&rdquo; için &ldquo;başlatmak&rdquo; yerine, &ldquo;göstermek&rdquo; için
      &ldquo;kanıtlamak&rdquo; yerine. Edilgen çatıyı etken çatıyla değiştirin. Anlam katmadan
      uzunluk ekleyen kaçamaklı ifadeleri ve pekiştiricileri (&ldquo;çok&rdquo;,
      &ldquo;oldukça&rdquo;, &ldquo;tartışmalı olarak&rdquo;) kaldırın. Uzun
      paragrafları bölün. Bu hamlelerin her biri puanı düşürür ve her biri okuyucu tarafından
      fark edilir.
    </p>

    <h2>Fazla optimize etmeyin</h2>
    <p>
      Okuyucuya hizmet etmektense belirli bir puana ulaşmak için yazmak, yapmacık bir düzyazı
      üretir. Aşırı kısa cümleler kesik kesik okunur. Tüm çok heceli kelimeleri yasaklamak, hassas
      teknik terimleri ortadan kaldırır. Puanı bir hedef değil, bir sinyal olarak ele alın. İçeriğiniz
      14. sınıf puanı alıyorsa ve hedef kitle mühendislerse, bu muhtemelen sorun değildir. 14. sınıf
      puanı alıyorsa ve hedef kitle tüketicilerse, yeniden yazın. Sayı size daha yakından bakmanız
      gerekip gerekmediğini söyler, ne yapmanız gerektiğini değil.
    </p>

    <h2>Alana özgü metinleri ele alma</h2>
    <p>
      Hukuki, tıbbi ve bilimsel yazılar, puanları yükselten terminolojiyi zorunlu olarak içerir.
      Bazı araçlar, karmaşık kelime sayımlarından hariç tutmak üzere özel bir alan terimleri
      beyaz listesi eklemenize izin verir. Bu, kaçınılmaz kelime dağarcığından ayrı olarak, genel
      yazım stilinin daha dürüst bir puanını üretir. İçeriğiniz teknikse, jargonun etrafındaki
      düzyazının okunabilirliğini ölçün, jargonun kendisini değil.
    </p>

    <h2>Yapının okuma kolaylığı</h2>
    <p>
      Formüller yalnızca metni ölçer. Bir belgenin net bir şekilde düzenlenip düzenlenmediğini,
      faydalı başlıklara sahip olup olmadığını, diyagramlar içerip içermediğini veya uzun listeleri
      bölüp bölmediğini ölçmez. 8. sınıf seviyesindeki bir metin duvarı, net bölümleri ve
      görselleri olan 10. sınıf seviyesindeki bir sayfadan daha zor okunur. Okunabilirlik
      puanlarını yapısal kontrollerle birlikte kullanın: başlık hiyerarşisi, paragraf uzunluğu, satır
      uzunluğu, taranabilirlik. Kötü bir yapıya sahip 8 puanı hâlâ kötü okunur.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Tek bir puan için optimize etmek.</strong> Farklı formüller doğası gereği farklılık gösterir. Eğer
      metniniz Flesch-Kincaid'de 10. sınıf ve Gunning Fog'da 14. sınıf puanı alıyorsa, bu size
      kelime dağarcığınız hakkında bir şey söyler (Fog karmaşık kelimeleri doğrudan sayar). Birden
      fazla puana birlikte bakın.
    </p>
    <p>
      <strong>Hece sayısını oyunlaştırmak.</strong> Her çok heceli kelimeyi yapay bir kısa
      eş anlamlıyla değiştirmek anlamsız sözler üretir. Kesin anlam taşıyan kelimeleri koruyun ve
      değer katmadan uzunluk ekleyenleri kesin.
    </p>
    <p>
      <strong>Hedef kitleyi görmezden gelmek.</strong> Fizik doktorası yapmış kişilere yönelik 6. sınıf
      metni küçümseyici olarak okunur. Puanı evrensel bir &ldquo;sade olan daha iyidir&rdquo;
      kuralına değil, hedef kitleye göre ayarlayın.
    </p>
    <p>
      <strong>Belgenin tamamı yerine bir parçayı puanlamak.</strong> Okunabilirlik puanlarının
      istikrarlı olması için yeterli metne ihtiyacı vardır. 100 kelimenin altında formüller bir veya iki uzun
      cümleyle çılgınca dalgalanır. En az 100-200 kelimelik paragrafları veya tam
      belgeleri puanlayın.
    </p>
    <p>
      <strong>Özel isimleri unutmak.</strong> Kişi ve yer adları, gerçek karmaşıklığı yansıtmadan
      hece sayılarını şişirebilir. Bazı araçlar özel isimleri çıkarır; bazıları çıkarmaz.
      Hangisi olduğunu bilin ve puanı buna göre yorumlayın.
    </p>
    <p>
      <strong>Puanı mutlak gerçek olarak ele almak.</strong> Bir okunabilirlik formülü kaba bir
      göstergedir, bir anlama ölçüsü değildir. Özellikle tıbbi onam veya kamu güvenliği
      bildirimleri gibi yüksek riskli içerikler için gerçek okuyucularla doğrulayın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Metni birden çok formülde puanlayın ve her revizyondan sonra geçişleri{" "}
      <a href="/tools/readability-score-checker">okunabilirlik puanı denetleyicisi</a> ile karşılaştırın. Uzun biçimli
      içeriğin argümanı korurken sıkıştırılması gerektiğinde{" "}
      <a href="/tools/text-summarizer">metin özetleyici</a> ile ve basitleştirmeden sonra hedef kitlenizin
      aradığı anahtar terimlerin hâlâ öne çıktığını doğrulamak için{" "}
      <a href="/tools/keyword-density-checker">anahtar kelime yoğunluğu denetleyicisi</a> ile birlikte kullanın.
    </p>
  </>
);