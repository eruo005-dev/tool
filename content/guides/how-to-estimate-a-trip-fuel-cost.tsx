import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Yolculuk yakıt maliyeti, kişisel finansın en basit hesaplamalarından biridir, ancak insanlar tahmin yürütürken rutin olarak %30-50 oranında sapar. Temel formül, üç sayının çarpımından oluşur: mesafe, yakıt fiyatı ve yakıt ekonomisi. Her sayıyı doğru almak — şehir içi MPG ile otoyol MPG'sinin ne zaman geçerli olduğunu, rakım ve karşı rüzgarların tüketimi nasıl etkilediğini ve iki farklı aracı veya rotayı nasıl karşılaştıracağını bilmek — araba kullanmak, uçmak veya trenle gitmek konusunda bilinçli kararlar vermenizi sağlar. Bu rehber, formülü, gerçekçi girdileri ve tahminlerin pompadaki gerçek değerle uyuşmasını sağlayan sağduyulu ayarlamaları ortaya koyar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. Temel formül</h2>
    <pre>{`yakıt maliyeti = (mesafe / MPG) × galon başına fiyat

Metrik sistemde:
yakıt maliyeti = (mesafe × L/100km / 100) × litre başına fiyat`}</pre>
    <p>
      30 MPG'lik bir arabayla 1.200 millik bir yolculuk, galonu 3,50$'dan: <code>1200 / 30 × 3,50 = 140$</code>. 8 L/100km ve 1,80€/L ile 2.000 km'lik bir yolculuk: <code>2000 × 8 / 100 × 1,80 = 288€</code>.
    </p>

    <h2>2. Hangi MPG değeri kullanılmalı</h2>
    <p>
      Çoğu araba üç EPA değeri yayınlar: şehir içi, otoyol ve karma. Yolculuklar için <strong>otoyol MPG'si</strong>; şehir içi sürüş için <strong>şehir içi MPG'si</strong> kullanın. Karma sürüşler için, karma değer iyi bir varsayılandır. Gerçek dünya MPG'si tipik olarak EPA etiket değerlerinin %10-15 altındadır çünkü EPA testleri idealize edilmiş koşullar altında yapılır.
    </p>
    <p>
      Kendi yakıt kayıtlarınız en güvenilir bilgi kaynağıdır. 3-5 depo dolumundan sonra, arabanızın gerçek MPG'sini 1-2 MPG hassasiyetle bileceksiniz.
    </p>

    <h2>3. Şehir içi vs otoyol: fark çok büyük olabilir</h2>
    <p>
      Tipik modern araba:
    </p>
    <ul>
      <li>Şehir içi: 25-28 MPG</li>
      <li>Otoyol: 35-40 MPG</li>
      <li>Karma: 30-33 MPG</li>
    </ul>
    <p>
      Hibritler bu farkı tersine çevirir: Prius'lar otoyoldan <em>daha iyi</em> şehir içi MPG'si alır çünkü rejeneratif frenleme enerjiyi geri kazanır. Dizel kamyonlar ve büyük SUV'ler, otoyol MPG'sine kıyasla %40+ daha kötü şehir içi MPG'sine sahip olabilir. Her zaman doğru değeri uygulayın.
    </p>

    <h2>4. Gerçek dünya MPG'sini düşüren faktörler</h2>
    <ul>
      <li><strong>60-65 mil/saatin üzerinde hız</strong>: 65 mil/saatin üzerindeki her 10 mil/saat, MPG'yi ~%10 düşürür</li>
      <li><strong>Karşı rüzgarlar / yan rüzgarlar</strong>: %5-15 kayıp</li>
      <li><strong>Yağmur veya kar</strong>: %5-20 kayıp</li>
      <li><strong>Dağlık arazide yokuş yukarı sürüş</strong>: Tırmanışta %20-40 kayıp</li>
      <li><strong>Soğuk hava</strong> (özellikle -6°C'nin altında): %15-30 kayıp</li>
      <li><strong>Yüksek sıcaklıklarda klima açık</strong>: %5-10 kayıp</li>
      <li><strong>Tavan kutusu veya bisiklet taşıyıcısı</strong>: %10-25 kayıp</li>
      <li><strong>Ağır yük</strong>: Boş ağırlığın üzerindeki her 45 kg için ~%1</li>
      <li><strong>Düşük lastik basıncı</strong>: Belirtilen değerin altındaki her 0,07 bar için %0,2</li>
    </ul>
    <p>
      Faktörlerin birleşimi: Kışın tavan kutusuyla dağ yolculuğu MPG'yi %40+ düşürebilir. Buna göre bütçe yapın.
    </p>

    <h2>5. Örnek bir yolculuk hesabı</h2>
    <p>
      Los Angeles'tan San Francisco'ya, 380 mil, çoğunlukla otoyol, çoğunlukla düz, 35 otoyol MPG'si olan orta boy sedan, benzin galonu 4,20$:
    </p>
    <pre>{`gerekli galon = 380 / 35 = 10,86 galon
yakıt maliyeti = 10,86 × 4,20$ = 45,60$`}</pre>
    <p>
      Karşı rüzgarlar ve tepeler için %10 ekleyin: toplamda ~50$. 20 MPG otoyol değerine sahip bir kamyonet: 80$. 3,5 mil/kWh ve 0,35$/kWh şarj ile bir EV: ~38$. Bir Amtrak tren bileti: 60-80$. Tek başına bir yolculuk için hepsi rekabetçi; 2+ yolcu ile EV kazanır.
    </p>

    <h2>6. Çok etaplı yolculuk hesabı</h2>
    <p>
      Karma otoyol ve şehir içi sürüş içeren yolculuklar, etaplara bölünerek hesaplanmalıdır:
    </p>
    <pre>{`LA → Phoenix (otoyol, 400 mi @ 35 MPG) = 11,4 gal
Phoenix şehir içi (3 gün, 75 mi @ 25 MPG) = 3,0 gal
Phoenix → LA (otoyol, 400 mi) = 11,4 gal
Toplam: 25,8 gal × 4,00$/gal = 103$`}</pre>
    <p>
      Koşullar değişiyorsa, tüm yolculuk için tek bir MPG değerini ortalamayın. Etaplara ayırın ve her bölüm için uygun MPG'yi kullanın.
    </p>

    <h2>7. Rakım değişimi</h2>
    <p>
      Tırmanmak yakıt tüketir; inmek bir kısmını geri verir (ancak yalnızca vites boşta giderseniz). Denver'dan (1.609 m) Aspen'e (2.410 m) orta eğimli bir yolculuk, yokuş yukarı MPG'yi %20-30 düşürebilir. Dönüşte %10-15 geri kazanırsınız. Net: dağlardan geçen gidiş-dönüş için ~%10 kayıp. Tek yön: yokuş yukarı ~%25 kayıp, yokuş aşağı %10 kazanç.
    </p>

    <h2>8. Rota üzerinde fiyat avı</h2>
    <p>
      Yakıt fiyatları birçok bölgede 50 mil içinde galon başına 40 sent değişebilir. GasBuddy ve Google Haritalar artık canlı fiyatları gösteriyor. 12 galonluk bir depo için 30 sentlik bir tasarruf 3,60$'dır. 5 depo dolumlu bir yolculukta bu 18$'dır. 2 dakikalık bir kontrole değer, ancak 20 millik bir sapmaya değmez. Eyalet sınırları çarpıcı olabilir — Oregon'dan Kaliforniya'ya, New Jersey'den New York'a 0,50$+ oynayabilir.
    </p>

    <h2>9. Dizel ve premium yakıt hususları</h2>
    <p>
      Dizel, normal benzinden galon başına 0,30-0,80$ daha pahalıdır. Premium (91+ oktan) 0,30-0,60$ daha pahalıdır. Motorunuz premium gerektiriyorsa, düşük oktan kullanmayın — vuruntu sensörleri ateşleme zamanlamasını geri çeker ve hem MPG'yi hem de gücü düşürür. Arabanız premiumu yalnızca "tavsiye ediyorsa", küçük bir MPG kaybıyla (%2-4) çoğu zaman normal benzin iyidir.
    </p>

    <h2>10. İki aracı karşılaştırma</h2>
    <p>
      Aynı yılda 5.000 mil için:
    </p>
    <pre>{`20 MPG SUV:     250 galon × 3,50$ = 875$/yıl
30 MPG sedan:   167 galon × 3,50$ = 584$/yıl
40 MPG hibrit:  125 galon × 3,50$ = 437$/yıl
EV (3 mi/kWh):  1.667 kWh × 0,18$ = 300$/yıl`}</pre>
    <p>
      10 yıl boyunca, SUV sadece yakıtta hibritten 4.400$ daha fazla harcar. Bunu satın alma fiyatı, bakım ve sigorta farklılıklarıyla karşılaştırın.
    </p>

    <h2>11. EV yolculuk hesabı</h2>
    <p>
      EV'ler kWh başına fiyatlandırılır:
    </p>
    <pre>{`maliyet = (mesafe / mil başına kWh) × kWh başına fiyat`}</pre>
    <p>
      Evde şarj (düşük tarife): 0,08-0,15$/kWh — benzinden çok daha ucuz. Otoyollardaki DC hızlı şarj cihazları: 0,35-0,60$/kWh — genellikle mil başına benzin maliyetine yakındır. EV yolculuk maliyetleri, şarj ağına göre büyük farklılık gösterir. Yola çıkmadan önce ABRP (A Better Route Planner) ile şarj duraklarını planlayın.
    </p>

    <h2>12. Geçiş ücretleri, feribotlar ve yakıt dışı maliyetler</h2>
    <p>
      Bir yolculuk bütçesi şunları içermelidir:
    </p>
    <ul>
      <li>Geçiş ücretleri: rotaya göre araştırın (kuzeydoğudaki eyaletler arası yolculuklar için 0-100$+)</li>
      <li>Feribotlar: uygulanabilir yerlerde 10-100$+</li>
      <li>Varış noktasında park: genellikle unutulur</li>
      <li>Aşınma ve yıpranma (IRS standart kilometresi bir nedenle mil başına 67 senttir — yakıt bunun yarısından azdır)</li>
    </ul>
    <p>
      Gerçek yolculuk toplam maliyeti için, araç tarafında amortisman tahmini amacıyla IRS oranını uygulayın.
    </p>

    <h2>13. Yakıt tasarrufu sağlayan sürüş alışkanlıkları</h2>
    <ul>
      <li>Sabit hız: düz otoyolda hız sabitleyici</li>
      <li>Duruşları önceden tahmin edin: fren yapmak yerine vites boşta git</li>
      <li>Zamanınız varsa 60-65 mil/saat sürün — 75 mil/saat hıza göre %10-15 tasarruf sağlar</li>
      <li>Ani kalkışlardan kaçının: şehir içinde %20-40 yakıt kaybı</li>
      <li>Lastik basıncını ayda bir kontrol edin</li>
      <li>Kullanılmadığında tavan kutularını çıkarın</li>
    </ul>

    <h2>14. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Saf otoyol yolculuğu için karma MPG kullanmak.</strong> MPG'yi %15-20 düşük gösterir ve yakıt maliyetini olduğundan fazla hesaplar.
      </li>
      <li>
        <strong>EPA değerlerini varsaymak.</strong> Çoğu araba gerçek dünyada %10-15 daha az verim sağlar.
      </li>
      <li>
        <strong>Havayı görmezden gelmek.</strong> Soğuk bir arabada kış yolculuğu %25+ daha fazla yakıt tüketebilir.
      </li>
      <li>
        <strong>Geçiş ücretlerini unutmak.</strong> I-95 koridoru geçiş ücretleri bir yolculuğa kolayca 30-80$ ekler.
      </li>
      <li>
        <strong>Kendi MPG'nizi kaydetmemek.</strong> Arabanızın gerçek MPG'si önemli olan tek değerdir.
      </li>
    </ul>

    <h2>15. Hesaplamaları yapın</h2>
    <p>
      Hızlı bir tahmin için aşağıya mesafenizi, MPG'nizi ve yakıt fiyatınızı girin, ardından rota bazında doğruluk için bu kılavuzdaki ayarlamalardan herhangi birini ekleyin.
    </p>
    <p>
      <a href="/tools/fuel-cost-calculator">Yakıt maliyeti hesaplayıcısı</a>
      <a href="/tools/moving-cost-calculator">Taşınma maliyeti hesaplayıcısı</a>
      <a href="/tools/trip-cost-calculator">Yolculuk maliyeti hesaplayıcısı</a>
    </p>
  </>
);