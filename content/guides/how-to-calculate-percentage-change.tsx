import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      &ldquo;Gelir 80 bin dolardan 100 bin dolara çıktı&rdquo; — büyüme
      oranı nedir? %20 değildir (bu, mutlak tutarın yanlışlıkla yeni
      değere bölünmesidir) ve formülü tersine çalıştırırsanız %25 de
      değildir. Doğru paydayı seçerseniz cevap %25'tir. Bu kılavuz,
      yüzde değişim formülünü, &ldquo;yüzde&rdquo; ve &ldquo;yüzde
      puanı&rdquo;nın neden aynı şey olmadığını ve yıldan yıla ve
      bileşik büyümenin ardındaki matematiği kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>İhtiyacınız olan tek formül</h2>
    <p>
      Eski bir değerden yeni bir değere yüzde değişim:{" "}
      <code>((yeni − eski) / eski) × 100%</code>. Eski değer her zaman
      paydada yer alır. Olay bundan ibaret.
    </p>
    <p>
      80 bin $ → 100 bin $: <code>(100 − 80) / 80 = 0,25 = %25</code>. Gelir
      %25 arttı. 100'e bölseydiniz, %20 elde ederdiniz, bu da farklı bir
      soruyu yanıtlar (&ldquo;artış, yeni toplamın hangi kesridir?&rdquo;)
      ve büyüme oranı değildir.
    </p>

    <h2>Artışlar ve azalışlar — aynı formül, işarete dikkat edin</h2>
    <p>
      100 bin $ → 80 bin $: <code>(80 − 100) / 100 = −0,20 = −%20</code>. %20
      azalış. Not: %25'lik bir artışın ardından %20'lik bir azalış sizi
      başlangıç değerine geri getirir — bu simetri değil, çarpımsal
      matematiktir. Bir yüzde değişimini geri almak için, ters yönde daha
      büyük bir yüzde değişimine ihtiyacınız vardır.
    </p>
    <p>
      Spesifik olarak: %50'lik bir düşüşün telafisi için %100'lük bir artış
      gerekir (100 $ → 50 $ → 100 $). %90'lık bir düşüşün telafisi için
      %900'lük bir artış gerekir. Bu nedenle portföy çöküşleri çok acımasızdır
      ve değişken bir yatırımın &ldquo;ortalama&rdquo; getirisi, gerçekte
      kazandığınız şey değildir.
    </p>

    <h2>Yüzde ve yüzde puanı</h2>
    <p>
      Bunlar haberlerde birbirinin yerine kullanılır ve bu anlamı
      değiştirir. Bir faiz oranı %4'ten %5'e çıkarsa:
    </p>
    <p>
      <strong>1 yüzde puanı</strong> (mutlak fark) artmıştır.
      Ayrıca <strong>yüzde 25</strong> (yukarıdaki formülü kullanarak
      göreceli değişim) artmıştır. Her ikisi de doğrudur; farklı şeyleri
      tanımlarlar. &ldquo;Mortgage faizleri %25 arttı&rdquo; ve
      &ldquo;mortgage faizleri 1 puan arttı&rdquo; aynı olayı iki farklı
      şekilde anlatır. Kesinlik önemli olduğunda &ldquo;puan&rdquo;
      kullanın.
    </p>

    <h2>Yıldan yıla (YoY) büyüme</h2>
    <p>
      Aynı formül, takvim yılları arasında uygulanır. Nisan 2025 geliri
      ve Nisan 2024 geliri:{" "}
      <code>(2025_nisan − 2024_nisan) / 2024_nisan</code>. YoY doğal olarak
      mevsimselliği kontrol eder, bu nedenle perakende sektörü 4. çeyreği
      3. çeyreğe karşı değil, 4. çeyreği 4. çeyreğe karşı raporlar.
    </p>

    <h2>Bileşik büyüme (CAGR)</h2>
    <p>
      Tek bir &ldquo;ortalama&rdquo; oran istediğiniz çok dönemli büyüme
      için:{" "}
      <code>CAGR = (bitiş / başlangıç)^(1/yıl) − 1</code>. 5 yılda
      10 bin dolardan 20 bin dolara büyüyen bir portföyün CAGR değeri{" "}
      <code>(20000/10000)^(1/5) − 1 = 1,1487 − 1 = %14,87</code> yıllıktır.
      %100/5 = %20 değil. Bu doğrusal matematik bileşik etkiyi göz ardı eder.
    </p>
    <p>
      <a href="/tools/compound-interest-calculator">Bileşik faiz
      hesaplayıcısı</a> bunu her iki yönde de çözer — bir başlangıç,
      bitiş ve zaman aralığı verin, size içkin oranı döndürür.
    </p>

    <h2>İşlenmiş bir tablo</h2>
    <p>
      Hesap makinesine uzanmadan önce bazı sezgileri netleştirelim:
    </p>
    <p>
      10 → 11 <strong>+%10</strong>'dur. 11 → 10 <strong>−%9,09</strong>'dur,
      −%10 değil. 100 → 150 <strong>+%50</strong>'dir. 150 → 100{" "}
      <strong>−%33,3</strong>'tür. 50 → 200 <strong>+%300</strong>'dür,
      &ldquo;4 kat büyüme %400 demek değildir.&rdquo; &ldquo;4×&rdquo;
      kelimesi 4 ile çarpmak anlamına gelir, bu da %300'lük bir artıştır,
      çünkü başlangıç değeri zaten bir kez sayılmıştır.
    </p>

    <h2>&ldquo;%X daha fazla&rdquo; yanlış alıntılandığında</h2>
    <p>
      &ldquo;%200 daha fazla&rdquo; üç katı anlamına gelir — orijinal artı
      aynısından iki tane daha. Manşetler rutin olarak &ldquo;%200 daha
      fazla&rdquo; ifadesini &ldquo;iki katına çıktı&rdquo; (ki bu +%100'dür)
      anlamında kullanır. Bu ifadeyi gördüğünüzde, iddiayı kabul etmeden
      önce mutlak sayıları yerine koyun.
    </p>
    <p>
      &ldquo;3 kat daha hızlı&rdquo;, sürenin üçte birinde bitirmek veya
      eşdeğer olarak %200 hızlanma anlamına gelir. &ldquo;3 kat daha
      fazla,&rdquo; kelimenin tam anlamıyla okunduğunda, kazancın orijinalin
      3 katı olduğu anlamına gelir (yani yeni değer orijinalin 4 katıdır).
      Çoğu yazar &ldquo;3 kat kadar&rdquo; demek ister ancak daha az kesin
      olan versiyonu yazar.
    </p>

    <h2>Hesap makinesini hızlıca kontrol edin</h2>
    <p>
      Herhangi bir yüzde değişim çıktısına güvenmeden önce, tek bir satırla
      sağlama yapın: cevap başlangıç değerinden büyük mü yoksa küçük mü?
      Ardından: başlangıç değerinin kabaca hangi kesri? Araç &ldquo;80 bin $
      → 100 bin $ %20 değişimdir&rdquo; derse, hemen bir şeylerin yanlış
      olduğunu anlarsınız — 20 bin $, 80 bin $'ın dörtte biridir, bu nedenle
      değişim ~%25'tir. Kabaca zihinsel matematik, işaret hatalarını ve
      payda takas hatalarını yayılmadan önce yakalar.
    </p>
    <p>
      Beş standart yüzde sorusu için <a href="/tools/percentage-calculator">yüzde
      hesaplayıcısını</a> ve CAGR veya çok dönemli büyüme ihtiyacınız
      olduğunda <a href="/tools/compound-interest-calculator">bileşik faiz
      hesaplayıcısını</a> kullanın.
    </p>
  </>
);