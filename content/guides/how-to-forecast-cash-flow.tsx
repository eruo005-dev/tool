import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Başarısız olan küçük işletmelerin çoğu kağıt üzerinde kârlıdır — nakitleri biter. Kâr ve nakit akışı farklı rakamlardır ve aralarındaki uçurum, şirketleri diğer tüm tek nedenlerden daha fazla öldürür. Düzgün bir nakit akışı tahmini, ay ay faturaları ödeyip ödeyemeyeceğinizi, maaş bordrosunu karşılayıp karşılayamayacağınızı ve büyümeyi finanse edip edemeyeceğinizi gösterir. Bu kılavuz, 13 haftalık bir tahmin oluşturmayı, en önemli kategorileri ve nakitin daralacağını söyleyen bir avuç sinyali adım adım anlatır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Nakit akışı ve kâr — neden ayrışırlar</h2>
    <p>
      <strong>Kâr</strong> gelir tablosudur: gelir eksi giderler, kazanıldığında muhasebeleştirilir.
    </p>
    <p>
      <strong>Nakit akışı</strong> banka hesabıdır: para girişi, para çıkışı, paranın fiilen hareket ettiği tarihlerde.
    </p>
    <p>
      Bir ajans Ocak ayında 50 bin dolar fatura keser (gelir kaydedilir). Müşteri Mart ayında öder. Kira, maaş bordrosu ve SaaS hizmetleri yine de Ocak ve Şubat aylarında tahsil edilir. Kağıt üzerinde Ocak kârlıydı; gerçekte ise herhangi bir nakit gelmeden önce banka hesabı 70 bin dolar düştü.
    </p>
    <p>
      Farka neden olan üç muhasebe kalemi:
    </p>
    <p>
      <strong>Alacak hesapları (AR).</strong> Faturalanmış ancak henüz tahsil edilmemiş gelir. Size borçlu olunan para nakit değildir.
    </p>
    <p>
      <strong>Envanter.</strong> Ödediğiniz ancak henüz satmadığınız stok. Nakit çıkışı var, henüz gelir yok.
    </p>
    <p>
      <strong>Sermaye harcamaları.</strong> Ekipman, kiralık alan iyileştirmeleri — gelir tablosunda yıllara yayılarak giderleştirilir, ancak nakit ilk ayda çıkmıştır.
    </p>

    <h2>13 haftalık döner tahmin (standart)</h2>
    <p>
      13 hafta, CFO standardı ufuktur: bir sonraki maaş bordrosu döngüsünü, üç aylık vergiyi ve büyük alacak tahsilatlarını görecek kadar uzun; tahminlerin hâlâ gerçekçi kalacağı kadar kısa.
    </p>
    <p>
      Yapı:
    </p>
    <p>
      <strong>Satır 1: Açılış nakit bakiyesi.</strong> Önceki haftanın kapanış nakdi.
    </p>
    <p>
      <strong>Satır 2-N: Nakit girişleri.</strong> Belirli müşterilerden alacak tahsilatları, haftalık yeni satış tahmini, diğer gelirler (iadeler, hibeler, vergi iadesi).
    </p>
    <p>
      <strong>Satır N-M: Nakit çıkışları.</strong> Maaş bordrosu tarihleri, kira, yinelenen yazılımlar (vade tarihine göre), tedarikçilere borç hesapları ödemeleri, üç aylık vergiler, borç servisi.
    </p>
    <p>
      <strong>Kapanış nakit bakiyesi.</strong> Açılış + girişler − çıkışlar. Bu, gelecek haftanın açılış nakdi olur.
    </p>
    <p>
      Her Pazartesi güncelleyin. Bir kez oluşturulduktan sonra 30 dakika sürer. Güncelleme disiplini değeri oluşturur — tahminler kaydığında fark etmenizi sağlar.
    </p>

    <h2>Nakit akışlarını doğru şekilde kategorize edin</h2>
    <p>
      Muhasebe standartları nakit akışını üç kategoriye ayırır — gerçekte ne olduğunu görmek için faydalıdır:
    </p>
    <p>
      <strong>İşletme nakit akışı.</strong> Günlük iş: müşteri ödemeleri girer, işletme giderleri çıkar. Sağlıklı işletme = pozitif işletme nakit akışı.
    </p>
    <p>
      <strong>Yatırım nakit akışı.</strong> Ekipman alımları, satın almalar, varlık satışları. Büyüyen şirketler için genellikle negatiftir (gelecekteki kapasiteye harcama).
    </p>
    <p>
      <strong>Finansman nakit akışı.</strong> Kredi giriş/çıkışları, öz sermaye toplama, ödenen temettüler veya dağıtımlar.
    </p>
    <p>
      İşletme nakit akışı pozitif ancak toplam nakdi çöken bir işletme, büyümeyi bilançodan finanse ediyordur. İşletme nakit akışı negatif ve finansman nakit akışı pozitif olan bir işletme ise son turla yaşıyordur — tehlikeli.
    </p>

    <h2>Adım 1 — alacak tahsilatlarını gerçekçi tahmin edin</h2>
    <p>
      Nakit akışı tahmin hatasının 1 numaralı kaynağı, faturaların vade tarihinde ödendiğini varsaymaktır. Genellikle ödenmezler.
    </p>
    <p>
      Gerçek <strong>DSO'nuzu (günlük satış bakiyesi)</strong> takip edin = (Alacak bakiyesi / günlük gelir). DSO 45 günse ancak Net-30 fatura kesiyorsanız, alacak tahmininiz ödemenin 30. günde değil, 15 gün gecikmeli yapılacağını varsaymalıdır.
    </p>
    <p>
      Müşteri bazında ayarlama: uzun borç hesapları döngüsü olan büyük müşteriler 60–90 günde öder. Bunu varsayın. Küçük müşteriler genellikle daha hızlı öder. Tahmine bir ortalama değil, bir yaşlandırma profili ekleyin.
    </p>

    <h2>Adım 2 — ödeme zamanlamasına bağlanın, tahmin etmeyin</h2>
    <p>
      Çoğu çıkış, verilere sahip olduğunuzda kesin olarak bilinir:
    </p>
    <p>
      <strong>Maaş bordrosu</strong> — sabit tarihler ve tutarlar. İşveren vergilerini dahil edin (brüt maaş bordrosuna ~%8–12 ekleyin).
    </p>
    <p>
      <strong>Kira</strong> — ayın 1'i veya sonu, sabit.
    </p>
    <p>
      <strong>Yazılım abonelikleri</strong> — yenileme tarihleri bilinebilir; kredi kartı ekstrenizden çekin ve tarihe göre listeleyin.
    </p>
    <p>
      <strong>Üç aylık tahmini vergiler</strong> — 15 Nisan, 15 Haziran, 15 Eylül, 15 Ocak. Unutması kolay; geldiklerinde büyük etki yaratır.
    </p>
    <p>
      <strong>Yıllık maliyetler</strong> — sigorta, alan adı yenilemeleri, yıl sonu için muhasebeci ücreti. Vadesi gelen ayda listeleyin.
    </p>

    <h2>Adım 3 — dürüstlük indirimiyle satış tahmini ekleyin</h2>
    <p>
      Gelir tahminleri, iyimserliğin sızdığı yerdir. İndirim disiplini:
    </p>
    <p>
      <strong>Net teslim tarihi olan imzalı sözleşmeler:</strong>{" "}
      Beklenen değerin %100'ü doğru haftada.
    </p>
    <p>
      <strong>Sözlü taahhüt veya niyet mektubu:</strong> Değerin %60'ı, müşterinin söylediğinden bir ay öteye atılmış.
    </p>
    <p>
      <strong>Güçlü fırsat hattı fırsatı:</strong> Değerin %30'u, 2 ay sonrası.
    </p>
    <p>
      <strong>Huninin tepesindeki sorgulamalar:</strong> tahmine hiç dahil etmeyin.
    </p>
    <p>
      Her kurucu, dönüşüm hızını abartır. Satış tahminlerindeki dürüst indirim genellikle %30–50'dir, uygulamak istediğimiz %10 değil.
    </p>

    <h2>Sinyal #1: Minimum bakiye gözetleme kulesi</h2>
    <p>
      13 hafta boyunca minimum nakit bakiyesi nedir? 30 günlük işletme giderinin altına düşerse, strese giriyorsunuz demektir.
    </p>
    <p>
      2 haftalık işletme giderinin altında: acil durum modu. Tahsilatları hızlandırmaya başlayın (alacak yaşlandırma raporu müşterilerini arayın), kritik olmayan ödemeleri geciktirin, varsa kredi limitinizi açın.
    </p>
    <p>
      Hedef: en az 60 günlük işletme gideri olan bir minimum nakit tamponu bulundurun. 3–6 ay rahattır. &lt;30 gün uyarı durumudur.
    </p>

    <h2>Sinyal #2: Büyüyen alacak yaşlandırma kovaları</h2>
    <p>
      Alacak yaşlandırma raporunu aylık olarak çekin. Size borçlu olunanı ne kadar geciktiğine göre ayırır:
    </p>
    <p>
      <strong>Güncel</strong> — henüz vadesi gelmemiş.
    </p>
    <p>
      <strong>1–30 gün gecikmiş</strong> — genellikle normal.
    </p>
    <p>
      <strong>31–60 gün gecikmiş</strong> — araştırın. Müşteriyi arayın.
    </p>
    <p>
      <strong>61–90 gün gecikmiş</strong> — durumu yükseltin, tahsilat aramalarını veya teslimatları bekletmeyi düşünün.
    </p>
    <p>
      <strong>90+ gün gecikmiş</strong> — tahsil edilmesi olası değil, silin veya tahsilata gönderin.
    </p>
    <p>
      &gt;60 günlük kova, toplam alacakların yüzdesi olarak büyüyorsa, üst satır geliriniz iyi olsa bile işletme sermayeniz kötüleşiyordur.
    </p>

    <h2>Sinyal #3: Borç hesapları koşullarının esnetilmesi</h2>
    <p>
      Alacak hesaplarının tersi: tedarikçilere koşullarınızdan daha geç ödeme yapıyorsanız (Net-30'u Net-45 veya 60'a esnetmek), operasyonları finanse etmek için tedarikçi kredisi kullanıyorsunuz demektir — nakit darlığının kaba bir erken göstergesi. Sürdürülemez ve ilişkilere zarar verir.
    </p>
    <p>
      Bunu düzenli olarak yaptığınızı fark ederseniz, nakit sorunu yapısaldır ve bir düzeltme gerektirir (fon toplama, maliyet düşürme, daha hızlı tahsilat, koşul yeniden müzakere) — sadece daha iyi zamanlama değil.
    </p>

    <h2>Nakit daraldığında ne kesilir</h2>
    <p>
      Kesintilerin sırası, en kolaydan en zora:
    </p>
    <p>
      <strong>(1) İsteğe bağlı</strong> — pazarlama deneyleri, seyahat, ikramlı öğle yemekleri, yeni yazılımlar, işe alım duraklamaları.
    </p>
    <p>
      <strong>(2) Ertelenebilir</strong> — tedarikçilerle daha uzun ödeme koşulları müzakere edin, sermaye alımlarını geciktirin, yazılım kademelerini düşürün.
    </p>
    <p>
      <strong>(3) Personel azaltımları</strong> — son çare ancak en yüksek kaldıraç. Kademeli olarak değil, bir kez kararlı bir şekilde yapmak daha iyidir.
    </p>
    <p>
      Nakit getiren şeyleri kesmeyin (satış elemanları, en iyi performans gösterenler, mevcut müşteri desteği). Bunlar sizin gelirinizdir. Tahsilat sağlamayan şeyleri kesin.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Aylık giriş ve çıkışları{" "}
      <a href="/tools/cash-flow-calculator">nakit akışı hesaplayıcısına</a>
      {" "}girerek aylar ve çeyrekler boyunca durumunuzu görün.{" "}
      <a href="/tools/startup-runway-calculator">startup pist hesaplayıcısı</a>
      {" "}ile sıfıra kadar olan aylar görünümü ve{" "}
      <a href="/tools/budget-calculator">bütçe hesaplayıcısı</a>
      {" "}ile kişisel hane nakit akışı için aynı görünüm için eşleştirin.
    </p>
  </>
);