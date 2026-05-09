import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir restoran faturasını bölmek, hesap gelene kadar basit görünür; ta ki birisi 48 dolarlık bifteği sipariş ederken siz yan salata yiyene kadar. &ldquo;Eşit bölüşmek&rdquo; dostane görünür ama bir öğünde kişi başı 15&ndash;25 doları sessizce kaydırabilir ve bu, haftalık dışarıda yemek yiyen bir arkadaş grubunda hızla birikir. Bu rehber, gerçek matematiği kapsar &mdash; eşit bölüşme, kişisel hesap, ortak başlangıç paylaşımı, vergi ve bahşiş yönetimi &mdash; ayrıca Venzo talepleri ve garip yuvarlamalar için sosyal oyun kitabını sunar. Amaç kimseyi kuruş hesabına boğmak değil. Yöntemi şeffaf hale getirmek, böylece kimse akşam yemeğine kin besleyerek ayrılmaz.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Eşit bölüşme vs kişisel hesap: sipariş vermeden önce bir kural seçin</h2>
    <p>
      Hesap bölmede en önemli an, menüler gelmeden önceki andır. Yöntemi önceden belirleyin ve herkes ona göre sipariş versin. Eğer eşit bölüşme ise, kimse 40 dolarlık ana yemek konusunda garip hissetmemeli; eğer kişisel hesap ise, kimse sessizce başkasının başlangıç turunu sübvanse etmemeli.
    </p>
    <ul>
      <li><strong>Eşit bölüşme</strong> &mdash; siparişler kabaca benzer olduğunda işe yarar</li>
      <li><strong>Kişisel hesap</strong> &mdash; siparişler çok farklı olduğunda veya biri içmiyorsa işe yarar</li>
      <li><strong>Hibrit</strong> &mdash; ana yemekleri kişiselleştir, ortak tabakları + vergiyi + bahşişi eşit böl</li>
    </ul>

    <h2>Eşit bölüşme formülü</h2>
    <p>
      Toplam fatura (vergi dahil) bahşiş yüzdesiyle çarpılır, ardından kişi sayısına bölünür. Çoğu kişi bazı bölgelerde bahşiş tabanına vergiyi dahil etmeyi unutur veya diğerlerinde dahil eder. 120 dolarlık bir ara toplam, %8,875 vergi, vergi öncesi %20 bahşiş için:
    </p>
    <pre>{`ara toplam      = 120.00
vergi           = 120.00 * 0.08875 = 10.65
bahşiş (vergi öncesi) = 120.00 * 0.20    = 24.00
toplam         = 120.00 + 10.65 + 24.00 = 154.65
kişi başı (4 kişi) = 154.65 / 4 = 38.66`}</pre>

    <h2>Kişisel hesap formülü</h2>
    <p>
      Herkes kendi ürünlerini artı vergi ve bahşişten <em>payını</em> öder. En temiz yöntem orantılıdır: herkesin vergi ve bahşiş payı, ara toplamdaki payına eşittir.
    </p>
    <pre>{`kişi_payı = kişi_ürünleri * (1 + vergi_oranı + bahşiş_oranı)

Alice 28 dolar sipariş etti:
  28 * (1 + 0.08875 + 0.20) = 28 * 1.28875 = 36.08

Bob 42 dolar sipariş etti:
  42 * 1.28875 = 54.13`}</pre>

    <h2>Ortak başlangıçlar ve tatlıların yönetimi</h2>
    <p>
      Ortak tabaklar, kişisel hesabın bozulduğu yerdir. İki makul kural:
    </p>
    <ul>
      <li><strong>Ortak ürünlerin eşit bölüşümü</strong> &mdash; kalamar 18 dolar, 4 kişi arasında = kişi başı 4.50 dolar, kişisel toplamlarına eklenir</li>
      <li><strong>Yemediysen atla</strong> &mdash; o üründen yemeyen kişi hiçbir şey ödemez</li>
    </ul>
    <p>
      Lokma saymaya çalışmayın. Akşam yemeğini mahvetmenin en hızlı yoludur.
    </p>

    <h2>İçecekler &mdash; en büyük kızgınlık kaynağı</h2>
    <p>
      Alkol genellikle en büyük dalgalanma faktörüdür. İki kokteyl içen ve iki içmeyen kişinin olduğu bir masada 40 doların üzerinde bir asimetri olabilir. İçki dengesizse, diğer her şeyi eşit bölüşseniz bile içecekleri özellikle kişiselleştirin. Sipariş vermeden önce kuralı duyurun: &ldquo;Yemeği eşit bölüşüyoruz, içecekler ayrı.&rdquo;
    </p>

    <h2>Bahşiş üzerinde vergi, vergi üzerinde bahşiş</h2>
    <p>
      Teknik olarak bahşişi vergi öncesi ara toplam üzerinden verirsiniz. Pratikte birçok hesap makinesi ve kişi, vergi sonrası toplam üzerinden bahşiş verir ve bu küçük bir miktar ekler. 120 dolarlık bir fatura, %8,875 vergi, %20 bahşiş için:
    </p>
    <pre>{`vergi öncesi bahşiş  = 120 * 0.20 = 24.00
vergi sonrası bahşiş = 130.65 * 0.20 = 26.13
4 kişi başına fark = 0.53`}</pre>
    <p>
      Fark çok küçük. Bir yöntem seçin, tutarlı kalın.
    </p>

    <h2>Venmo / Zelle / nakit görgü kuralları</h2>
    <p>
      Kartı uzatan kişi puanları ve avantajı alır. Karşılığında matematiği yapar ve talepleri gönderir. En iyi uygulamalar:
    </p>
    <ul>
      <li>Talepleri <strong>24 saat</strong> içinde gönderin &mdash; hafıza hızla silinir</li>
      <li>Yuvarlıyorsanız <em>aşağı</em> yuvarlayın &mdash; 38.66 dolar istemek küçük görünür, 38 dolar cömert okunur</li>
      <li>Açık bir not ekleyin: &ldquo;Luigi&rsquo;de akşam yemeği 4/22&rdquo;</li>
      <li>İşlem ücretlerinden kaçınmak için arkadaşlar ve aile seçeneğini kullanın</li>
      <li>İkiden fazla takip etmeyin &mdash; kaybolurlarsa onları tek seferlik kişi olarak işaretleyin</li>
    </ul>

    <h2>Garip yuvarlama stratejisi</h2>
    <p>
      Kişi başı 38.66 dolar yazmak, birini size 38.66 dolar Venmo yapmaya zorlar ve klinik hissettirir. Daha iyisi: &ldquo;Kişi başı 40 dolar karşılar&rdquo; deyin ve fazladan 5.36 doların yuvarlama hatasına karışmasına izin verin. Cömert okunur, matematiği basitleştirir ve vergi hesaplamalarındaki farklılıkları kapsar. Yuvarlama ~%5&rsquo;i aşarsa, bunun yerine kişiselleştirin.
    </p>

    <h2>Grup büyüklüğü etkileri</h2>
    <p>
      Büyük gruplar (8+) bölünmesi en zor olanlardır. Birçok restoran, 6 veya 8 kişilik gruplara otomatik olarak %18&ndash;20 bahşiş ekler &mdash; tekrar bahşiş vermeden önce faturayı kontrol edin. Büyük gruplar ayrıca bir ortak kaynak trajedisi modeline girer: eşit bölüşme duyurulursa, birkaç kişi maliyetin dışsallaştırıldığını bilerek pahalı sipariş verir. 6&rsquo;dan büyük herhangi bir grup için önceden kişisel hesaba bağlanın.
    </p>

    <h2>Biri payını ödemeyi reddettiğinde</h2>
    <p>
      Olur. İki seçenek: bunu kabullenin ve onlarla bir daha asla hesap bölmeyin veya bir kibar takip mesajı gönderin: &ldquo;Merhaba, akşam yemeğinden 38 dolarlık Venmo talebi hala açık &mdash; fırsat bulduğunda gönderebilir misin?&rdquo; Hala ödemezlerse, not alın ve gelecekteki davranışı ayarlayın. Büyütmeyin &mdash; 38 dolar bir arkadaşlığa değmez.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Kuralı önceden duyurmadan eşit bölüşmek; büyük gruplarda otomatik bahşişi unutup çift bahşiş vermek; kupon indirimi olduğunda indirimli toplam üzerinden bahşiş vermek (sektör geleneği: indirim öncesi ara toplam üzerinden bahşiş); ve üç hafta sonra kimsenin akşam yemeğini hatırlamadığı bir zamanda Venmo talepleri göndermek. Kuralı belirleyin, masada matematiği yapın, uyumadan önce talepleri gönderin.
    </p>

    <h2>Hesaplamaları çalıştırın</h2>
    <p>
      <a href="/tools/bill-split-calculator">Hesap bölme hesaplayıcısı</a>
      <a href="/tools/tip-calculator">Bahşiş hesaplayıcısı</a>
      <a href="/tools/expense-split-calculator">Gider bölme hesaplayıcısı</a>
    </p>
  </>
);