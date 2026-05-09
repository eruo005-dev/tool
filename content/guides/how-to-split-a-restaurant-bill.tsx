import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Hesap masanın ortasına gelir, birisi telefonunu çıkarır ve on dakika sonra bir grup yetişkin hâlâ mezelerin hesaba katılıp katılmayacağını tartışıyordur. Bir restoran hesabını adil bir şekilde bölüşmek şaşırtıcı derecede zengin bir matematik problemidir — bahşiş vergiden önce mi sonra mı, kişi başına mı yoksa eşit bölüşüm mü, bir kişi su içerken paylaşılan bir şişe şarap nasıl ele alınır. Bu rehber, temiz matematiği ve en az onun kadar önemli olan sosyal-matematik katmanını adım adım açıklıyor.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>En basit durum: eşit bölüşüm</h2>
    <p>
      Dört kişi, 120 TL yemek, 10 TL vergi, 26 TL bahşiş (vergi öncesi %20). Toplam 156 TL ÷ 4 = kişi başı 39 TL. On saniye sürer ve — herkesin benzer miktarda yediği bir hesapta — en adil seçenektir. Kuruşuna kadar hassas olmak, herhangi bir 2 TL farkın önemli olduğundan çok daha fazla zaman kaybettirir.
    </p>

    <h2>Bahşiş vergiden önce mi sonra mı?</h2>
    <p>
      ABD'de yaygın gelenek, bahşişi <em>vergi öncesi</em>{" "}
      ara toplam üzerinden vermektir. Vergi, devlete aktarılan bir geçiş kalemidir; garsonunuz bunun oluşmasında rol oynamamıştır. 100 TL yemek ara toplamı artı 8 TL vergide, %20 bahşiş = 20 TL, 21.60 TL değil. Fark öğün başına küçüktür ancak bir yıl boyunca dışarıda yemek yendiğinde anlamlı hale gelir.
    </p>
    <p>
      Pratikte, "vergiyi ikiye katla" kısayolu (birçok ABD eyaletinde size bahşiş miktarını verir) vergi sonrası rakamlar üzerinden bahşiş vermektir. Sorun değil — garsonların umurunda olmaz — ancak vergi öncesi %20'den biraz daha yüksek bir bahşiştir.
    </p>

    <h2>Ürün bazlı (kalem kalem) bölüşüm</h2>
    <p>
      Masada büyük farklılıklar olduğunda — bir biftek, bir salata, bir ana yemeği paylaşan üç kişi, şarap söyleyen biri ve su içen başka biri — eşit bölüşüm, su içen kişiyi herkesin eğlencesi için para ödemeye zorlar. Kalem kalem bölüşün.
    </p>
    <p>
      Herkes kendi ürünleri için öder, ardından vergi ve bahşiş orantılı olarak dağıtılır. Kişi A: 40 TL yemek. Kişi B: 20 TL yemek. 100 TL ara toplamda, Kişi A vergi ve bahşişin %40'ını, Kişi B %20'sini öder. Eşit paylar değil — <em>orantılı</em> paylar.{" "}
      <a href="/tools/bill-split-calculator">Hesap bölüşüm hesaplayıcısı</a>{" "}
      kişi başı ara toplamları girdiğinizde bunu temiz bir şekilde halleder.
    </p>

    <h2>Paylaşılan ürünler, bir kişi kaçınıyor</h2>
    <p>
      Klasik durum: masa için bir şişe şarap, bir kişi hamile veya araba kullanıyor ve su içiyor. Sosyal açıdan doğru hareket, şarabı o kişinin payından çıkarmaktır. Şarabı ara toplamdan çıkarın, kalanı nasıl uygunsa bölüşün, ardından şarabı sadece içenler arasında bölüşün.
    </p>
    <p>
      Bunu sessizce yapmak doğru harekettir. Kaçınan kişi, akşam yemeği sırasında bunu yüksek sesle müzakere etmek zorunda kalmamalıdır. Masadaki bir kişi matematiği yapar ve düzeltmeyi zaten içeren kişi başı toplamları açıklar.
    </p>

    <h2>Kişi başı farklı bahşiş oranları</h2>
    <p>
      Bazen gruptan biri hizmet olağanüstü olduğu için %25 bahşiş bırakmak isterken, bir diğeri %18'in tavan olduğunu düşünür. Bu hızla garipleşir. En temiz versiyon: bölüşmeden önce grup bahşişini açıklayın (genellikle %20) ve fazla bahşiş vermek isteyenin masaya özel olarak ekstra nakit bırakmasına izin verin. Bahşiş oranlarını ürün bazlı matematiğe karıştırmak mümkündür ancak 500 TL'nin altındaki hiçbir hesapta buna değmez.
    </p>

    <h2>Kredi kartı ek ücretleri ve bölünmüş ödeme sürtüşmesi</h2>
    <p>
      Birçok restoran, kredi kartı ödemeleri için ~%3 ek ücret yansıtır. Grup birden fazla kartla ödeme yapıyorsa, bu ek ücret her işleme ayrı ayrı uygulanır ve birikir. Dört kart, her biri kendi payında %3 ek ücrete tabi, yine toplamın %3'üdür — ancak bir kişi başkalarından nakit alıp tüm hesabı kendi kartına yatırıyorsa, o kişi toplam tutarın %3'ünü üstlenirken nakit ödeyenler bundan kurtulur. 2 TL'lik bir kart ek ücret farkı kavga etmeye değmez, ancak matematiğin neden hatalı hissettirdiğini anlamaya değer.
    </p>

    <h2>Yuvarlama ve "kimsede kuruş yok" sorunu</h2>
    <p>
      Kişi başı 39.47 TL korkunç bir cevaptır çünkü kimse 0.47 TL vermeyecek ve kimin bozuk para alacağını takip etmeyecektir. Yukarı yuvarlayın. 156.47 TL'lik bir hesapta kişi başı 40 TL, 3.53 TL fazla ödeme yapar, bu da garson için biraz daha büyük bir bahşiş olur — iyi bir sorun. Hesaplayıcı, seçim yapabilmeniz için hem kesin hem de yuvarlanmış tutarları gösterir.
    </p>

    <h2>İşi kolaylaştıran sosyal kural</h2>
    <p>
      Masadaki bir kişi "hesap matematiği" kişisiyse, bırakın o yapsın. Hoşlanır, daha hızlıdır ve gruptan müzakere etmelerini istemek yerine rakamları açıklar. En kötü sonuç, yedi kişinin aynı anda hesap makinesi uygulamalarını açması ve üç farklı cevabın ortaya çıkmasıdır. Birini belirleyin ve çıktıya güvenin.
    </p>

    <h2>30 saniyelik yaklaşım</h2>
    <p>
      <a href="/tools/bill-split-calculator">Hesap bölüşüm hesaplayıcısını</a> açın, vergi öncesi ara toplamı, vergiyi, bahşiş yüzdesini ve yemek yiyenlerin sayısını girin. Yemek kabaca eşitse — herkes benzer yediyse — eşit bölüşüm iyidir. Değilse, kişi başı moduna geçin, her yemek yiyenin vergi öncesi ara toplamını girin ve aracın vergi/bahşişi orantılı olarak dağıtmasına izin verin. Aynı hesapta sadece bahşiş matematiği için{" "}
      <a href="/tools/tip-calculator">bahşiş hesaplayıcısı</a> ile birlikte kullanın.
    </p>
  </>
);