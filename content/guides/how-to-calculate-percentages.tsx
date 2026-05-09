import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Yüzdeler insanların kafasını karıştırır çünkü cevaplayabilecekleri beş farklı soru vardır ve formül her biri için biraz değişir.
      "80'in %15'i kaçtır?" sorusu, "320'nin yüzde kaçı 80'dir?" veya "İndirimli fiyat %25 indirimden sonra 60 TL ise, orijinal fiyat neydi?" sorularından farklıdır. İşte gerçekten ihtiyacınız olan, her biri çözümlü bir örnek ve zihinsel matematik kısayolu içeren beş formül.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. Y'nin X%'i</h2>
    <p>
      Formül: <code>(X / 100) &times; Y</code>. En yaygın versiyon.
      Örnek: 80'in %15'i <code>0.15 &times; 80 = 12</code>'dir.
    </p>
    <p>
      Zihinsel matematik kısayolu: Ondalık işaretini bir basamak sola kaydırarak %10'u bulun (80'in %10'u 8'dir), ardından ölçeklendirin. %15, %10 artı %10'un yarısıdır (8 + 4 = 12). %20, %10'un iki katıdır (16). %5, %10'un yarısıdır (4). Hemen hemen her yuvarlak yüzde bu kalıba indirgenebilir.
    </p>

    <h2>2. A, B'nin yüzde kaçıdır</h2>
    <p>
      Formül: <code>(A / B) &times; 100</code>. Örnek: 24, 80'in yüzde kaçıdır? <code>(24 / 80) &times; 100 = %30</code>.
    </p>
    <p>
      Unutmayın: A üstte, B alttadır. "A, B'nin yüzde kaçıdır" doğrudan "A bölü B"ye çevrilir. Hangi sayının payda olduğundan emin değilseniz, "nin/nın"dan sonra gelen sayıdır.
    </p>

    <h2>3. Yüzde değişimi</h2>
    <p>
      Formül: <code>((yeni - eski) / eski) &times; 100</code>. Örnek: fiyat 50 TL'den 65 TL'ye çıkıyor. Değişim:{" "}
      <code>((65 - 50) / 50) &times; 100 = %30 artış</code>. Fiyat 50 TL'den 40 TL'ye düşüyor: <code>((40 - 50) / 50) &times; 100 = -%20</code>, %20 azalış.
    </p>
    <p>
      Yaygın hata: <em>yeni</em> değere bölmek. Her zaman orijinal değere bölün. %50 düşüp ardından %50 yükselen bir hisse senedi başa baş noktasına gelmez — hala %25 aşağıdadır, çünkü %50'lik yükseliş daha küçük bir tabana uygulanır.
    </p>

    <h2>4. Ters yüzde (orijinali bulma)</h2>
    <p>
      Çoğu insanın takıldığı yer burasıdır. Bir tişört %25 indirimden sonra 60 TL'dir — orijinal fiyat neydi? Yanlış hareket: 60 TL alıp %25 ekleyerek size 75 TL vermek. Bu yanlıştır çünkü 80 TL'nin %25'i (gerçek indirim) 20 TL'dir, 15 TL değil. Doğru formül:{" "}
      <code>orijinal = indirimli / (1 - indirim %)</code>. Yani{" "}
      <code>60 / (1 - 0.25) = 60 / 0.75 = 80 TL</code>.
    </p>
    <p>
      Aynı kalıp vergi için de geçerlidir. Bir fiş %7 vergiyle toplam 107 TL gösteriyorsa — vergi öncesi fiyat <code>107 / 1.07 = 100 TL</code>'dir.
    </p>

    <h2>5. Bahşiş matematiği kısayolu</h2>
    <p>
      Restoran matematiği sadece %10 artı %10'un yarısıdır. Hesap 42 TL mi?{" "}
      <strong>%10'u 4.20 TL'dir</strong>, bunun yarısı 2.10 TL'dir, yani %15'i 6.30 TL, %20'si 8.40 TL'dir. %18 için, %20 alın ve biraz kesin. Zihinsel uzun bölme işlemi gerekmez.
    </p>
    <p>
      Gruplar için, <a href="/tools/tip-calculator">bahşiş hesaplayıcımız</a> vergi dahil kişi başına bölmeyi halleder. Diğer her şey için — indirimler, marjlar, not ortalamaları —{" "}
      <a href="/tools/percentage-calculator">yüzde hesaplayıcı</a> yukarıdaki beş formülün tamamını kapsar.
    </p>

    <h2>Kafanıza ne zaman güvenmemeli</h2>
    <p>
      Hesaplayıcının zihinsel matematiği her zaman yendiği üç durum: bileşik olan her şey (faiz, yatırım büyümesi, nüfus), uzun zincirler içeren her şey (%10 indirim artı %20 indirim <em>%30 değildir</em> — %28'dir, çünkü ikinci indirim zaten indirimli bir fiyata uygulanır) ve cevabın kağıt üzerinde olduğu her şey. Bir kahve bahşişi için kafanızda yapın. Bir ipotek hesaplaması için aracı kullanın.
    </p>

    <h2>Her zaman işe yarayan bir sağlama</h2>
    <p>
      Herhangi bir yüzde cevabına karar vermeden önce kendinize sorun: bu kabaca doğru aralıkta mı? 80'in %15'i, yarısından (40) belirgin şekilde az olmalıdır. 50 üzerinde %30'luk bir değişim 15 civarında olmalıdır. Hesaplayıcınız size 150 veriyorsa, ondalık işaretini yanlış yerleştirmişsinizdir. Bu üç saniyelik içgüdüsel kontrol, gerçekten paraya mal olan hataların %90'ını yakalar.
    </p>
  </>
);