import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir Fransız hamur işi tarifinin yarısındasınız ve 250g un istiyor, sizin ölçü
      kaplarınız ise ABD geleneksel birimlerinde. Göz kararı yapıyorsunuz, hamur
      yapışkan bir kütleye dönüşüyor ve şimdi internete kızgınsınız. Yemek
      dönüşümleri, partileri mahveden üç tuzağa rastlayana kadar basit görünür: kuru
      malzemelerde hacim ve ağırlık farkı, ABD/İngiltere/metrik bardak farkı ve
      kimsenin üzerinde anlaşamadığı fırın sıcaklıkları. Bu rehber, karşılaşacağınız
      birim sistemlerini, hassasiyetin önemli olduğu (fırıncılık) ve olmadığı
      (çorbalar) durumları, profesyonel mutfakların kullandığı un ve şeker ağırlık
      tablolarını ve keklerinizi tuğlaya çevirmekten kurtaran <a href="/learn/temperature-ai">sıcaklık</a> dönüşümlerini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>İnsanların kafasını karıştıran üç bardak boyutu</h2>
    <p>
      Bir &ldquo;bardağın&rdquo; tek bir birimi yoktur. <strong>ABD geleneksel bardağı</strong>
      240ml, <strong>ABD yasal bardağı</strong> (besin etiketlerinde kullanılır) 236.588ml'den
      yuvarlanmış 240ml, Avustralya, Yeni Zelanda ve Kanada'da kullanılan <strong>metrik bardak</strong>
      250ml ve tarihi <strong>İngiltere imparatorluk bardağı</strong>
      284ml idi &mdash; ancak modern İngiltere tarifleri neredeyse her zaman gram kullanır. Bir
      tarif &ldquo;1 bardak un&rdquo; diyorsa ve siz 240ml olması gerekirken 250ml'lik bir bardak
      kullanıyorsanız, %4 fazla eklemiş olursunuz. Ekmek veya makaronlar için bu, hidrasyon
      oranını bozmaya yeter.
    </p>

    <h2>Çay kaşığı ve yemek kaşığı</h2>
    <p>
      Bunlar küresel olarak daha tutarlıdır. Bir <strong>çay kaşığı</strong> Avustralya hariç her yerde
      5ml'dir, orada bazen 5ml bazen değildir. Bir{" "}
      <strong>yemek kaşığı</strong> ABD ve İngiltere'de 15ml, Avustralya'da 20ml'dir. Yemek
      kaşıklarındaki bu %33'lük fark, tuz, kabartma tozu veya güçlü baharatlar içeren her şeyde
      önemlidir &mdash; 15ml olması gerekirken bir yemek kaşığı karbonat koyarsanız tadı sabun
      gibi olur.
    </p>
    <pre>{`1 çay kaşığı  = 5 ml
1 yemek kaşığı = 15 ml (ABD/İngiltere) veya 20 ml (AU)
1 sıvı ons = 29.5735 ml
1 ABD bardağı = 16 yemek kaşığı = 48 çay kaşığı = 240 ml
1 metrik bardak = 250 ml
1 pint (ABD) = 473 ml, 1 pint (İngiltere) = 568 ml`}</pre>

    <h2>Un için hacim ve ağırlık</h2>
    <p>
      Bu, tarif başarısızlığının en büyük kaynağıdır. Bir bardak un, nasıl alındığına bağlı olarak
      120g ile 155g arasında herhangi bir ağırlıkta olabilir. Sıkıştırılmış bir bardak (al-salla)
      ~150g'dır. Kaşıkla alınıp düzeltilmiş bir bardak ~125g'dır. Bu, ana bileşende %20'lik bir
      fark anlamına gelir, bu nedenle ciddi her fırıncılık tarifi artık unu ağırlıkla belirtir.
      <strong> Fırıncılık için mutfak terazisi kullanın</strong> &mdash; 15 dolarlık bir terazi,
      kurabiyelerinizin bir kumar olmaktan çıktığı ilk seferde kendini amorti eder.
    </p>
    <p>
      Referans ağırlıklar: çok amaçlı un 125g/bardak, ekmek unu 130g/bardak, kek unu
      115g/bardak, tam buğday unu 130g/bardak. Bunlar kaşıkla alıp düzeltme yöntemini varsayar.
    </p>

    <h2>Şeker, tereyağı ve diğer yoğun temel malzemeler</h2>
    <p>
      Toz şeker undan daha yoğun ve daha tutarlıdır: ABD bardağı başına 200g. Esmer şeker
      nasıl paketlendiğine bağlıdır &mdash; sıkıştırılmış bir bardak ~220g, gevşek bir bardak
      ~170g'dır. &ldquo;1 bardak sıkıştırılmış esmer şeker&rdquo; diyen tarifler, bir kaşığın
      tersiyle bastırın, böylece döküldüğünde bardak şeklini korusun anlamına gelir. ABD'de
      tereyağı 113g'lik çubuklar halinde (çeyrek pound) gelir ve her çubukta 8 yemek kaşığı
      bulunur. Avrupa'da tereyağı neredeyse her zaman gramla ölçülür.
    </p>

    <h2>Sıvılar daha basittir ancak onsa dikkat edin</h2>
    <p>
      Sıvı ons hacmi ölçer. Ağırlık ons kütleyi ölçer. Su için neredeyse eşittirler (8 sıvı ons = 236g su),
      kafa karışıklığının kaynağı da budur. Daha yoğun herhangi bir şey için &mdash; bal, pekmez, krema
      &mdash; 8 sıvı ons, 8 onstan daha ağırdır. &ldquo;8 ons bal&rdquo; isteyen bir tarif
      belirsizdir; bağlam hacmi belirtmiyorsa ağırlık olduğunu varsayın.
    </p>

    <h2>Fırın sıcaklıkları: Fahrenheit, Celsius, gaz işaretleri</h2>
    <p>
      Yaygın dönüşüm C = (F &minus; 32) &times; 5/9'dur, ancak bu referans noktalarını ezberleyin
      çünkü sürekli karşınıza çıkarlar: 350&deg;F = 175&deg;C = gaz işareti 4
      (klasik fırıncılık), 375&deg;F = 190&deg;C = gaz işareti 5, 400&deg;F = 200&deg;C = gaz
      işareti 6, 425&deg;F = 220&deg;C = gaz işareti 7 (pizza), 450&deg;F = 230&deg;C = gaz
      işareti 8.
    </p>
    <pre>{`F     C     Gaz  Yaygın Kullanım
250   120   1/2  Beze, yavaş kurutma
300   150   2    Yavaş kızartmalar
350   175   4    Çoğu fırıncılık (varsayılan)
375   190   5    Muffin, hızlı ekmekler
400   200   6    Sebze kızartma
425   220   7    Pizza, yüksek ısıda kızartma
450   230   8    Ekmek kabuğu, ızgara
500   260   10   Napoli pizzası (ev tipi maksimum)`}</pre>
    <p>
      Konveksiyon (fanlı) fırınlar daha sıcak çalışır. Geleneksel bir tariften dönüştürürken
      sıcaklığı 15&ndash;20&deg;C (~25&deg;F) düşürün veya süreyi %20 azaltın.
    </p>

    <h2>Bölgesel tarif dili</h2>
    <p>
      Amerikan tarifleri bardak, tereyağı çubuğu ve Fahrenheit kullanır. İngiliz tarifleri gram,
      mililitre ve Celsius kullanır &mdash; ve kendiliğinden kabaran una Amerikalıların
      kendiliğinden kabaran un dediği şeyi derler (aynı şey, farklı isim). Avustralya tarifleri
      20ml'lik yemek kaşığını kullanır. Fransız tarifleri neredeyse her zaman ağırlık bazlıdır,
      tereyağı gram, sıcaklıklar Celsius cinsindendir. Sevdiğiniz bir tarif bulduğunuzda, orijinal
      ölçülerin yanına dönüşümleri yazmak için 10 dakika ayırın &mdash; gelecekteki siz size
      teşekkür edecek.
    </p>

    <h2>Hassasiyet ne zaman önemlidir ve ne zaman değildir</h2>
    <p>
      <strong>Fırıncılık, pasta ve şekerlemeler</strong> kimyadır &mdash; un:yağ:sıvı:kabartıcı
      oranları, şeyin kabarıp kabarmayacağını veya çöküp çökmeyeceğini belirler. Her şeyi
      tartın. <strong>Çorbalar, yahniler, wok yemekleri ve kavurmalar</strong> affedicidir
      &mdash; göz kararı yeterlidir. <strong>Şekerleme ve şeker işleri</strong> ölçü kapları değil,
      bir termometre gerektirir &mdash; sıcaklık aşamaları (yumuşak top, sert kırılma)
      ağırlıklardan daha önemlidir. <strong>Ekşi maya</strong> ağırlık takıntılıdır çünkü
      fırıncı yüzdeleri hamuru tanımlar.
    </p>

    <h2>Bir tarifin tamamını dönüştürme</h2>
    <p>
      Parça parça dönüştürmeyin &mdash; yuvarlama hataları birikir. Önce en büyük bileşeni
      (genellikle un veya sıvı) dönüştürün, ardından diğerlerini orantılı olarak ölçeklendirin.
      İkiye katlama veya yarıya indirme için, başlamadan önce tüm tarifi hedef birimlerde
      yeniden yazın ve yumurta sayısını iki kez kontrol edin &mdash; bir yumurtayı çırpmadan
      ve ölçmeden yarıya indiremezsiniz ve 30g çırpılmış yumurta kabaca büyük bir yumurtanın
      yarısıdır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Sıvı ons ve ağırlık onsunu birbirinin yerine kullanmak.</strong> Sıvı ons hacimdir,
      ağırlık ons kütledir. Sadece su için eşittirler.
    </p>
    <p>
      <strong>Unu kaşıkla almak yerine daldırarak almak.</strong> Bardağı torbaya daldırmak
      unu sıkıştırır ve 20&ndash;30g ekler. Kaşıkla bardağa koyun, ardından bir bıçakla
      düzeltin.
    </p>
    <p>
      <strong>Fırın sıcaklıklarını konveksiyonu ayarlamadan dönüştürmek.</strong> Fanlı
      fırınlar sıcak çalışır &mdash; geleneksel sıcaklıktan 20&deg;C çıkarın, yoksa kekiniz
      oturmadan önce kızarır.
    </p>
    <p>
      <strong>1 bardağın her yerde 250ml olduğunu varsaymak.</strong> ABD tariflerinde
      240ml'dir. %4'lük fark ekmek hidrasyonunu bozar.
    </p>
    <p>
      <strong>Yanlış yemek kaşığını kullanmak.</strong> Avustralya yemek kaşıkları 20ml'dir,
      15ml değil. Tuz, karbonat veya kabartma tozu için bu, yemeği mahvetmeye yeter.
    </p>
    <p>
      <strong>Esmer şeker için sıkıştırmadan dönüşümlere güvenmek.</strong> Sıkıştırılmış ve
      gevşek esmer şeker bardakları %30 farklıdır. Tarifler neredeyse her zaman
      sıkıştırılmış anlamına gelir.
    </p>
    <p>
      <strong>Rakımı göz ardı etmek.</strong> 3.000ft'nin üzerinde, kabartıcılar aşırı
      kabarır ve sıvılar daha hızlı buharlaşır. Dönüşüm tabloları bunu kapsamaz &mdash;
      rakıma özgü ayarlamalara bakın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Bardak, gram, yemek kaşığı ve fırın sıcaklıklarını tek bir yerde dönüştürmek için{" "}
      <a href="/tools/cooking-converter">yemek dönüştürücüyü</a> kullanın. Fermantasyon ve
      mayalanma başlangıç zamanlarını saat dilimleri arasında takip etmek için{" "}
      <a href="/tools/unix-timestamp-converter">unix zaman damgası dönüştürücü</a> ve
      işbirlikçilerle çok aşamalı pişirmeleri koordine etmek için{" "}
      <a href="/tools/time-zone-converter">saat dilimi dönüştürücü</a> ile eşleştirin.
    </p>
  </>
);