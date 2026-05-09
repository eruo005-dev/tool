import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Oranlar, pratik matematiğin büyük bir kısmını sessizce yönetir — tarifler, en-boy oranları, boya karışımları,
      yakıt karışımları, harita ölçekleri, finansal kaldıraç, ekran çözünürlükleri, hatta bahis oranları.
      Bir oran, ölçeklendiğinde sabit kalan iki miktar arasındaki ilişkiyi ifade eder ve bu da onu, mutlak miktarlardan
      çok "birim başına ne kadar" önemli olduğunda doğru araç haline getirir. Yine de oranlar insanların kafasını karıştırır
      çünkü üç şekilde yazılabilirler (<code>3:2</code>, <code>3/2</code>,{" "}
      <code>3'e 2</code>), parça-parça veya parça-bütün ilişkilerini tanımlayabilirler ve
      bir orantıda bilinmeyeni bulmak, tersine çevrilmesi kolay bir yönde çapraz çarpma gerektirir.
      Bu kılavuz, gösterim, sadeleştirme, bilinmeyeni bulmak için çapraz çarpma, ölçeklendirme problemleri,
      parça-parça ve parça-bütün arasındaki fark ve karşılaşacağınız gerçek dünya oran problemlerini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir oran gerçekte ne anlama gelir</h2>
    <p>
      Bir oran, aynı türden iki miktarı karşılaştırır. <code>3:2</code>, "her 3 birime karşılık 2 birim vardır" anlamına gelir. Mutlak miktarlar 3 ve 2 veya 30 ve
      20 veya 300 ve 200 olabilir — ilişki aynıdır. <code>2:3:5</code> gibi üç terimli bir oran da aynı şekilde çalışır ve sabit oranları koruyan üç miktarı tanımlar.
    </p>
    <pre>{`Boya karışımı 2:3 (mavi:sarı)
  → 2 kısım mavi, 3 kısım sarı
  → 4:6, 20:30, 200:300'e ölçeklenir`}</pre>

    <h2>Parça-parça ve parça-bütün</h2>
    <p>
      "Üç erkeğe iki kız" parça-parçadır — 3:2 oranı toplamı yok sayar. "Beş öğrenciden üçü erkektir" parça-bütündür — 3:5 oranı sağ tarafta toplamı içerir. Bu önemlidir çünkü bir parça-parça oranını, terimleri toplayarak parça-bütüne dönüştürebilirsiniz: 3:2, 5'te 3 ve 5'te 2 anlamına gelir. İkisini karıştırmak, sözlü problemlerde en yaygın oran hatasıdır.
    </p>

    <h2>Oranları sadeleştirme</h2>
    <p>
      Her iki tarafı da en büyük ortak bölenlerine bölün. <code>12:18</code> bölü 6, <code>2:3</code>'ü verir. <code>24:36:60</code> bölü 12, <code>2:3:5</code>'i verir. Terimler tam sayı değilse, önce ondalık sayıları temizlemek için çarpın: <code>0.5:1.25</code> çarpı 4, EBOB'a böldükten sonra <code>2:5</code>'i verir.
    </p>
    <pre>{`12:18  → ebob = 6  → 2:3
45:30  → ebob = 15 → 3:2
1.5:2  → ×2 → 3:4
2/3 : 1/2 → ×6 → 4:3`}</pre>

    <h2>Bilinmeyeni bulmak için çapraz çarpma</h2>
    <p>
      Bir <code>a:b = c:x</code> orantısı verildiğinde, çapraz çarparak çözün: <code>a&middot;x = b&middot;c</code>, yani <code>x = b&middot;c / a</code>. Bu, ölçeklendirme problemleri için temel araçtır.
    </p>
    <pre>{`Bir tarif, 3 kurabiye için 2 su bardağı un gerektiriyor.
18 kurabiye için ne kadar un gerekir?

  2 : 3 = x : 18
  çapraz: 2 × 18 = 3 × x
         36 = 3x
         x = 12 su bardağı`}</pre>

    <h2>Tarifleri ölçeklendirme</h2>
    <p>
      Bir kurabiye tarifi, 24 kurabiye için 2 su bardağı un, 1 su bardağı şeker, 1/2 su bardağı tereyağı gerektiriyor. 36 kurabiye için, her bir malzemeyi 36/24 = 1,5 ile çarpın: 3 su bardağı un, 1,5 su bardağı şeker, 3/4 su bardağı tereyağı. Ölçeklendirme faktörü, istenen çıktının orijinal çıktıya oranıdır. Oranlar doğruluğu korur çünkü her malzeme aynı miktarda ölçeklenir.
    </p>

    <h2>En-boy oranları</h2>
    <p>
      Bir ekranın en-boy oranı genişlik:yüksekliktir. 16:9 modern TV standardıdır; 4:3 eski yayın standardıydı; 21:9 ultra geniştir. 16:9 bir videonuz ve 1.920 piksel genişliğinde bir tuvaliniz varsa, yükseklik 1.920 &times; 9 / 16 = 1.080 pikseldir. En-boy oranları ayrıca, bir görüntünün farklı oranlara sahip bir ekranda görüntülendiğinde letterboxing (çubuklar) olup olmayacağını da söyler.
    </p>
    <pre>{`16:9, 1920 genişlikte → 1080 yükseklik
16:9, 1280 genişlikte → 720 yükseklik
4:3, 1024 genişlikte  → 768 yükseklik
21:9, 3440 genişlikte → 1440 yükseklik`}</pre>

    <h2>Harita ölçekleri</h2>
    <p>
      1:24.000'lik bir harita ölçeği, haritadaki bir birimin gerçek dünyada 24.000 birime eşit olduğu anlamına gelir. Haritadaki bir inç, yerde 24.000 inçtir (2.000 fit). Haritacılar bazen ham oran yerine "1 inç = 2.000 fit" yazarlar, ancak matematik aynıdır. Topoğrafik haritalar genellikle 1:24.000 veya 1:50.000 kullanır; şehir sokak haritaları genellikle 1:10.000 veya daha incedir.
    </p>

    <h2>Yakıt ve kimyasal karışımları</h2>
    <p>
      İki zamanlı motorlar, yaygın olarak 50:1 olan bir benzin:yağ karışımıyla çalışır. 2 galon benzin için, yağ = 2 &times; 128 fl oz / 50 = 5,12 fl oz. Oranı yanlış almak motoru sıkıştırır (çok az yağ) veya bujiyi kirletir (çok fazla yağ). Beton karışımı, reçine kitleri ve karanlık oda kimyasalları aynı şekilde çalışır — oran kutsaldır, hacimler esnektir.
    </p>

    <h2>Bahis oranları ve olasılık</h2>
    <p>
      3:1 (aleyhte) oran, her 1 galibiyete karşı 3 kayıp anlamına gelir, yani olasılık 1/4 = %25'tir. 3:1 (lehine) oran, her 1 kayba karşı 3 galibiyet anlamına gelir, olasılık 3/4 = %75'tir. Aralarında <code>p = olumlu / (olumlu + olumsuz)</code> ile dönüşüm yapın. Amerikan spor bahisleri bunu farklı yazar (+300 veya &minus;150) ancak temel fikir hala bir orandır.
    </p>

    <h2>Üç terimli oranlar</h2>
    <p>
      Bir beton karışımı 1:2:4 çimento:kum:çakıl olabilir. Toplam 14 fit küp gerekiyorsa, birimi bulmak için toplam 1+2+4 = 7'ye bölün: parça başına 2 fit küp. Yani 2 çimento, 4 kum, 8 çakıl. "Parçaların toplamı" yöntemi, herhangi bir çok terimli oran için çalışır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Problemdeki oranı tersine çevirmek.</strong> Problem 3 erkeğe 2 kız diyorsa, oran 3:2'dir, 2:3 değil. Miktarları verilen sırayla yazın ve buna bağlı kalın.
    </p>
    <p>
      <strong>Problem parça-bütün isterken parça-parça kullanmak.</strong> "3:2 erkek:kız" SINIFIN 3/2'si erkek anlamına GELMEZ. Her 5 öğrenciden 3'ünün erkek olduğu anlamına gelir. Bütünü elde etmek için terimleri toplayın.
    </p>
    <p>
      <strong>Sadeleştirmeyi unutmak.</strong> 12:18 ve 2:3 aynı orandır, ancak sadeleştirilmiş biçim neredeyse her zaman problemin beklediği şeydir. Bağlam ham sayıları gerektirmedikçe her zaman en düşük terimlere indirgeyin.
    </p>
    <p>
      <strong>Birimleri karıştırmak.</strong> Fit ile inç veya dakika ile saniyeyi dönüştürmeden karşılaştırmak anlamsız oranlar verir. 3 fit : 2 inç, inç cinsinden normalleştirildiğinde aslında 18:1'dir. Oranı kurmadan önce birimleri kontrol edin.
    </p>
    <p>
      <strong>Yanlış çifti çapraz çarpmak.</strong> <code>a/b = c/d</code>'de, çapraz çarpımlar <code>a&middot;d</code> ve <code>b&middot;c</code>'dir. Yanlışlıkla <code>a&middot;c</code>'yi çarpmak kolaydır. Gerekirse fiziksel olarak bir X çizin.
    </p>
    <p>
      <strong>Oranların doğrudan toplandığını varsaymak.</strong> 1:2 ve 1:3 oranlarının ortalaması 1:2,5 değildir. Oranları birleştirmek için ortak bir faktör bulmanız ve parçaları uygun şekilde eklemeniz veya önce kesirlere dönüştürmeniz gerekir.
    </p>
    <p>
      <strong>Ölçeklenmiş tariflerde yuvarlamayı görmezden gelmek.</strong> Bir tarifi 1,5 ile ölçeklemek 2,25 su bardağı un verebilir, bu sorun değildir. Ancak yumurtaları 1,5 ile ölçeklemek 1,5 yumurta verir, bu mümkün değildir — 2'ye yuvarlayın ve biraz daha zengin bir parti kabul edin veya farklı şekilde ölçekleyin.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Bir tarifi veya boya partisini boyutlandırırken kafanızda çapraz çarpma yapmayı bırakın; <a href="/tools/ratio-calculator">oran hesaplayıcımızı</a> kullanın. Oranlarınız kesirler içerdiğinde karmaşık ara adımlar için <a href="/tools/fraction-calculator">kesir hesaplayıcı</a> ve cevabı yüzde olarak istediğinizde parça-bütün dönüşümleri için <a href="/tools/percentage-calculator">yüzde hesaplayıcı</a> ile eşleştirin.
    </p>
  </>
);