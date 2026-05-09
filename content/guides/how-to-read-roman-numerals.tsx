import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Romen rakamları hala şaşırtıcı yerlerde karşımıza çıkıyor&mdash;film telif tarihleri, Super Bowl
      logoları, saat yüzleri, papa isimleri, kitap bölümleri ve dokuzuncu sınıfta yazdığınız taslak.
      Sistem yabancı görünüyor çünkü aynı anda hem toplamalı hem de konumsal, yan yana duran iki harfin
      anlamını değiştiren bir çıkarma hilesi var. Yedi temel sembolü ve dört çıkarma çiftini
      içselleştirdiğinizde, 3.999&rsquo;un altındaki herhangi bir rakamı okumak yaklaşık iki saniyelik
      bir zihinsel aritmetik gerektirir. Bunun ötesinde, gösterim bozulur&mdash;bir milyonu, üst çizgi
      veya neredeyse hiç kimsenin tanımadığı modern uzantılar olmadan yazmanın temiz bir yolu yoktur.
      Bu kılavuz, yedi harfi, çıkarma ilkesini, saatlerde neden bazen IV yerine IIII kullanıldığını,
      her iki yönde nasıl dönüştürüleceğini ve sistemin hala geçerli olduğu modern bağlamları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Yedi sembol</h2>
    <p>
      Romen rakamlarındaki her şey, sabit değerlere sahip yedi harften oluşur. I 1&rsquo;dir, V 5&rsquo;tir,
      X 10&rsquo;dur, L 50&rsquo;dir, C 100&rsquo;dür, D 500&rsquo;dür ve M 1.000&rsquo;dir. Sistemin
      tüm alfabesi budur. Standart kullanımda sıfır, negatif veya kesirli gösterim yoktur&mdash;Romalılar
      kesirleri <em>uncia</em> temelli ayrı bir onikilik sistemle ele alırdı.
    </p>
    <pre>{`I = 1      C = 100
V = 5      D = 500
X = 10     M = 1000
L = 50`}</pre>
    <p>
      Desene dikkat edin: harfler &ldquo;bir&rdquo; birimleri (I, X, C, M) ve
      &ldquo;beş&rdquo; birimleri (V, L, D) arasında gidip gelir. Her seviye, altındaki bir birimin on katıdır,
      bu da sistemi, yer değeri kullanmasa bile, gizli bir ondalık sistem haline getirir.
    </p>

    <h2>Varsayılan toplamadır</h2>
    <p>
      Semboller azalan sırada göründüğünde, onları toplarsınız. VIII, 5 + 1 + 1 + 1 = 8&rsquo;dir. LXXVII
      50 + 10 + 10 + 5 + 1 + 1 = 77&rsquo;dir. MMXXVI, 1000 + 1000 + 10 + 10 + 5 + 1 = 2026&rsquo;dır.
      &ldquo;Azalan sıra&rdquo; kuralı, gösterimi belirsiz olmaktan çıkarır&mdash;soldan sağa gider ve
      biriktirirsiniz.
    </p>

    <h2>Çıkarma ilkesi</h2>
    <p>
      Daha küçük bir sembol, daha büyük bir sembolün <strong>önünde</strong> göründüğünde, küçük olanı
      büyük olandan çıkarın. IV, 5 &minus; 1 = 4&rsquo;tür. IX, 10 &minus; 1 = 9&rsquo;dur. XL, 50 &minus; 10 = 40&rsquo;tır.
      XC, 100 &minus; 10 = 90&rsquo;dır. CD, 500 &minus; 100 = 400&rsquo;dür. CM, 1.000 &minus; 100 = 900&rsquo;dür. Tam
      olarak altı geçerli çıkarma çifti vardır; diğer her şey geçersizdir.
    </p>
    <pre>{`İzin verilen çıkarma çiftleri:
IV = 4    XL = 40    CD = 400
IX = 9    XC = 90    CM = 900

Geçersiz:
IC (99 için) — XCIX olmalı
IM (999 için) — CMXCIX olmalı`}</pre>
    <p>
      Çıkarma kuralı şudur: yalnızca bir on kuvvetini (I, X, C) sonraki iki yüksek sembolden
      çıkarabilirsiniz. I&rsquo;yi V veya X&rsquo;ten, X&rsquo;i L veya C&rsquo;den ve C&rsquo;yi D veya M&rsquo;den çıkarabilirsiniz. V, L veya D&rsquo;yi
      hiçbir şeyden çıkaramazsınız ve birden fazla seviye boyunca çıkarma yapamazsınız.
    </p>

    <h2>Bir ondalık sayıyı Romen rakamına dönüştürme</h2>
    <p>
      En temiz algoritma açgözlü ikamedir. En büyükten en küçüğe doğru değerler arasında yürüyün&mdash;M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, I&mdash;ve her
      adımda, kalan sayıya sığdığı kadar mevcut belirtecin kopyasını çıkarın, ardından
      çıkarın. 1994 için: M (994 kaldı), CM (94 kaldı), XC (4 kaldı), IV (0 kaldı), MCMXCIV verir.
    </p>
    <pre>{`1994 → M CM XC IV → MCMXCIV
2026 → MM XX VI → MMXXVI
3888 → MMM DCCC LXXX VIII → MMMDCCCLXXXVIII (4000 altındaki en uzun rakam)
49  → XL IX → XLIX`}</pre>

    <h2>Romen rakamını ondalık sayıya dönüştürme</h2>
    <p>
      Soldan sağa okuyun. Geçerli harfin değeri, sonraki harfin değerinden büyük veya eşitse, onu ekleyin. Aksi takdirde çıkarın. MCMXCIV şu şekilde ilerler:
      M (+1000), C (&minus;100 çünkü M &gt; C... bekle, C &lt; M, yani çıkar), M (+1000),
      X (&minus;10), C (+100), I (&minus;1), V (+5), toplam 1994. Algoritmanın uygulanması kolaydır
      ve yalnızca tek bir geçiş gerektirir.
    </p>

    <h2>3.999 tavanı</h2>
    <p>
      Standart Romen rakamları en fazla MMMCMXCIX = 3.999&rsquo;a kadar çıkar. 4.000 yazmak için
      arka arkaya dört M&rsquo;ye ihtiyacınız olur, bu da &ldquo;aynı harften en fazla üç tane&rdquo;
      kuralını ihlal eder. Tarihsel geçici çözümler, bir harfin üzerinde &ldquo;1.000 ile çarp&rdquo;
      anlamına gelen bir çubuk (vinculum) içerir, yani V&#772; 5.000 anlamına gelir. Pratikte, bir sayı
      3.999&rsquo;u aştığında, insanlar Arap rakamlarına geçer. Film telifleri neredeyse hiç bu duvara çarpmaz ve
      çarptıklarında stüdyolar yılı normal şekilde yazar.
    </p>

    <h2>Romen rakamlarını hala gördüğünüz yerler</h2>
    <p>
      Film ve TV telif tarihleri bunları kullanır, kısmen gelenekten ve kısmen Romen
      rakamlarının ilk bakışta okunması daha zor olduğu için&mdash;ki bu, alaycı bir şekilde, bir tekrarın ne kadar
      eski olduğunu gizlemeye yardımcı olur. Super Bowl bunları kullanır (Super Bowl 50 hariç, çünkü
      &ldquo;L&rdquo; ürünlerde zayıf göründüğü için &ldquo;50&rdquo; olarak stilize edilmiştir). Papalar, hükümdarlar ve
      gemiler sıra sayıları olarak Romen rakamlarını alır&mdash;II. Elizabeth, VIII. Henry, Apollo 11 bir
      istisnadır çünkü NASA Arap rakamlarını tercih etmiştir. Kitap önsözleri, ön sayfa sayıları için bunları kullanır.
      Saat yüzleri bunları kullanır, genellikle VIII&rsquo;in karşısında görsel simetri için IV yerine IIII ile.
    </p>

    <h2>Saatlerde neden IV yerine IIII</h2>
    <p>
      Bir saat vitrininde dolaşın ve Romen rakamlı çoğu analog saatin 4 konumunda
      IV değil IIII gösterdiğini fark edeceksiniz. Geleneksel açıklamalar: karşı taraftaki VIII ile görsel
      simetri (her ikisi de dört karakter genişliğindedir), IV kullanma konusundaki isteksizlik
      çünkü Latince&rsquo;de IVPITER (Jüpiter)&rsquo;in ilk iki harfidir ve I-I-I-I kadranları için aynı kalıbı
      dört kez yapmanın döküm kolaylığı. Big Ben ünlü bir şekilde
      IV kullanır. Bu bir doğruluk meselesi değil, bir stil seçimidir.
    </p>

    <h2>Romen rakamlarıyla aritmetik</h2>
    <p>
      Romalılar yazılı formla aritmetik yapmazlardı&mdash;<em>abaküs</em> adı verilen bir sayma tahtası
      kullanır ve sonuçları daha sonra rakamlarla yazarlardı. MCMXCIV
      ve CCXXXIII&rsquo;ü harfleri manipüle ederek toplamaya çalışmak bir kabustur. Bu, konumsal gösterim ve
      sıfır ile Arap rakamlarının nihayetinde kazanmasının nedenlerinden biridir: toplama, çarpma ve özellikle
      bölme, rakamlar yer değeri taşıdığında çok daha kolaydır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Geçersiz çıkarma çiftleri kullanmak.</strong> 99 için IC yanlıştır; XCIX olmalıdır.
      IIII saatlerde gayri resmi olarak kabul edilir, ancak resmi olarak 4&rsquo;ün doğru biçimi IV&rsquo;tür.
      Çıkarma kuralı yalnızca bir seviye aşağıda çalışır ve yalnızca çıkarılan sembol olarak I, X veya C ile çalışır.
    </p>
    <p>
      <strong>Dört özdeş harfi üst üste koymak.</strong> Standart Romen rakamları asla
      IIII, XXXX, CCCC veya MMMM göstermez (saat istisnası hariç). Dönüşümünüz herhangi bir şeyden dört tane
      üretiyorsa, bir çıkarma adımını kaçırmışsınızdır&mdash;sayıyı tekrar kontrol edin.
    </p>
    <p>
      <strong>Bir yılı kelime olarak okumak.</strong> Bir film jeneriğinin başında MCM 1900&rsquo;dür,
      &ldquo;mick-em&rdquo; değil. Rakamı toplamsal parçalara ayırın ve toplayın; asla telaffuz etmeye
      çalışmayın.
    </p>
    <p>
      <strong>L ve I&rsquo;yi karıştırmak.</strong> Süs yazı tiplerinde L ve I benzer görünebilir.
      Bağlam sizi kurtarır&mdash;LI 51&rsquo;dir, II değil. Şüpheye düştüğünüzde, vuruşları sayın ve L&rsquo;nin
      yatay bir tabanı olduğunu hatırlayın.
    </p>
    <p>
      <strong>Sıfırın var olduğunu varsaymak.</strong> Romen sıfırı yoktur. Kavram Avrupa&rsquo;ya
      yüzyıllar sonra Arap matematiği aracılığıyla girmiştir. Bir bilmece sizden sıfırı temsil eden Romen rakamını
      isterse, cevap ortaçağ keşişleri tarafından kullanılan &ldquo;N&rdquo;dir (<em>nulla</em> için), ancak
      standart gösterimin bir parçası değildir.
    </p>
    <p>
      <strong>3.999 tavanını unutmak.</strong> 4.000 gibi bir yılı veya büyük bir sayıyı temsil etmeniz
      gerektiğinde, Romen rakamları bozulur. Yeni bir gösterim icat etmeyin; Arap
      rakamlarına geçin.
    </p>
    <p>
      <strong>Rakamları ileriye bakmadan soldan sağa okumak.</strong> Ekleyip çıkarmayacağınıza karar vermek için her
      harfi bir sonrakiyle karşılaştırmalısınız. Tek başına okumak, IV&rsquo;ün 4 yerine 6 (5 + 1) gibi görünmesine
      neden olur. Her zaman bir sonraki harfe bakın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Bir telif tarihini veya bir Super Bowl logosunu kontrol ederken Romen rakamlarını elle
      çevirmeyin; rakamımızı{" "}
      <a href="/tools/roman-numeral-converter">Romen rakamı dönüştürücüye</a> yapıştırın. Eski dosya
      başlıklarından opak tanımlayıcıları çözerken{" "}
      <a href="/tools/base64-encoder-decoder">Base64 kodlayıcı</a> ile ve eski ve modern ölçüm
      sistemleri arasında çeviri yapmanın bitişik sorunu için{" "}
      <a href="/tools/unit-converter">birim dönüştürücü</a> ile eşleştirin.
    </p>
  </>
);