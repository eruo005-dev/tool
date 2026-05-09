import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Birden fazla borcu aynı anda ödemek için iki ana strateji vardır —{" "}
      <strong>kartopu</strong> (önce en küçük bakiye) ve{" "}
      <strong>çığ</strong> (önce en yüksek faiz oranı). Matematik çığı
      destekler, psikoloji kartopunu destekler ve beyniniz için yanlış
      olanı seçmek genellikle insanların planı tamamen terk etmesine neden
      olur. Bu rehber, matematiği, davranışsal kanıtları ve pratikte
      genellikle kazanan hibrit yaklaşımı adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Her bir strateji tek cümlede</h2>
    <p>
      <strong>Kartopu:</strong> Borçları bakiyeye göre, en küçükten
      başlayarak sıralayın. Her şeye asgari ödemeleri yapın, her ekstra
      lirayı en küçük borca yönlendirin. Ödendiğinde, o ödemeyi bir
      sonraki en küçük borca aktarın. Borçsuz kalana kadar tekrarlayın.
    </p>
    <p>
      <strong>Çığ:</strong> Borçları faiz oranına göre, en yüksekten
      başlayarak sıralayın. Aynı her yere asgari kuralı, ekstra paralar
      en yüksek faiz oranına gider. Her biri ödendikçe ödemeleri
      aktarın. Matematiksel olarak en uygun.
    </p>

    <h2>Karşılaştırmalı bir örnek</h2>
    <p>
      Üç borç, ayda 800 TL mevcut:
    </p>
    <p>
      <strong>Kredi kartı A:</strong> %22 faizle 2.500 TL, asgari 75 TL/ay.
    </p>
    <p>
      <strong>Kredi kartı B:</strong> %18 faizle 6.000 TL, asgari 150 TL/ay.
    </p>
    <p>
      <strong>Araba kredisi:</strong> %5,5 faizle 12.000 TL, asgari 280 TL/ay.
    </p>
    <p>
      Toplam asgari ödemeler: 505 TL/ay. Ekstra: 295 TL/ay.
    </p>
    <p>
      <strong>Kartopu</strong> (önce en küçük = Kart A): Kart A ~7 ayda
      ödenir. Ardından 75 TL asgari + 295 TL ekstra = 370 TL'yi Kart
      B'ye, 150 TL asgariye ek olarak yönlendirin → Kart B'ye ayda 520
      TL; bu noktadan itibaren ~12 ayda ödenir. Sonra tümü araba
      kredisine.{" "}
      <strong>Toplam ödeme süresi: ~32 ay. Ödenen toplam faiz: ~2.480 TL.</strong>
    </p>
    <p>
      <strong>Çığ</strong> (önce en yüksek faiz = Kart A — bu durumda
      aynı çünkü en yüksek faiz oranına ve en küçük bakiyeye sahip):
      bu örnek için kartopu ile aynı.{" "}
      <strong>Toplam ödeme süresi: 32 ay. Toplam faiz: 2.480 TL.</strong>
    </p>
    <p>
      Ancak bunun yerine Kart A %22 faizle 8.000 TL ve Kart B %18 faizle
      2.500 TL olsaydı:
    </p>
    <p>
      <strong>Kartopu</strong> önce Kart B'yi (en küçük) bitirir ve planın
      ömrü boyunca çığdan ~200 TL daha az faiz tasarrufu sağlar.
      <strong>Çığ</strong> önce %22 faizli kartı (en yüksek faiz) bitirir.
      Aynı toplam aylık ödemede, çığ kartopuna kıyasla toplam faizde
      yaklaşık <strong>%3–8</strong> tasarruf sağlar — bu örnekte,
      bakiyelere ve vadeye bağlı olarak ~300–800 TL.
    </p>

    <h2>Çığın büyük kazandığı durumlar</h2>
    <p>
      Çığ, en büyük matematiksel tasarrufu şu durumlarda sağlar:
    </p>
    <p>
      <strong>Yüksek faizli ve büyük bakiyeli bir borcunuz varsa.</strong>
      1.000 TL'lik bir mağaza kartını öderken %25 faizli 20.000 TL'lik bir
      kredi kartı ciddi para kaybettirir.
    </p>
    <p>
      <strong>Faiz oranları geniş bir aralığa yayılmışsa.</strong> %5'e
      karşı %28, %16'ya karşı %18'den çok daha büyük optimallik farkları
      yaratır.
    </p>
    <p>
      <strong>Borç vadesi uzunsa.</strong> Ne kadar uzun süre ödeme
      yaparsanız, faiz oranı optimizasyonu o kadar bileşik etki yaratır.
    </p>

    <h2>Kartopunun pratikte kazandığı durumlar</h2>
    <p>
      Çığın optimal olduğu matematiği tartışmasızdır. Ancak 2012'de
      yapılan bir Kellogg School of Management çalışması (Gal &amp;
      McShane), kartopu yöntemini uygulayan kişilerin çığ uygulayanlardan
      daha fazla toplam borç ödediğini buldu, çünkü erken kazanımlar
      motivasyonlarını korudu ve pes etmelerini engelledi. 8. ayda
      moralsizlikten bir çığ planını bırakırsanız, sıfır lira tasarruf
      etmiş olursunuz. Bir kartopu planını tamamlarsanız, matematiksel
      olarak "optimal olmayan" strateji, terk ettiğiniz optimal stratejiyi
      yener.
    </p>
    <p>
      Kartopu size uygunsa: 5+ borcunuz varsa (erken kazanımları
      sıklaştırır), geçmiş planları bıraktıysanız, mali travmadan
      çıkıyorsanız ve güveni yeniden inşa etmek için kazanımlara
      ihtiyacınız varsa veya faiz oranları matematiksel farkın toplamda
      500 TL'den az olacağı kadar yakınsa.
    </p>

    <h2>Çoğu finans yazarının aslında önerdiği hibrit</h2>
    <p>
      <strong>Önce 1.000 TL'den küçük herhangi bir borcu ödeyin</strong>
      (faiz oranına bakılmaksızın) zihinsel yükü temizlemek ve ivme
      kazanmak için, ardından kalan borçlar için çığ yöntemine geçin.
      Hızlı bir kazanım elde edersiniz, ardından optimal yolda olursunuz.
    </p>
    <p>
      Başka bir hibrit: <strong>Önce kredi puanınızı en çok etkileyen
      borcu ele alın.</strong> Dönen bir hesapta yüksek kullanım (limitin
      %30'unun üzerinde) kredinize aktif olarak zarar verir; bunu ödemek,
      her iki saf stratejiyi de geride bırakacak bir bakiye transferi veya
      refinansmanın önünü açabilir.
    </p>

    <h2>Mümkün olduğunda her zaman refinansman veya konsolidasyon yapın</h2>
    <p>
      Ödeme sırasını optimize etmeden önce, tüm borç yığınını daha düşük
      bir faiz oranına dönüştürüp dönüştüremeyeceğinizi kontrol edin:
    </p>
    <p>
      <strong>%0 bakiye transferi</strong> — 12–21 ay tanıtım dönemi olan
      kredi kartları. %3–5 transfer ücreti. Yalnızca promosyon döneminde
      gerçekten öderseniz işe yarar; sonrasında normal bir{" "}
      <a href="/learn/apr">APR</a>'ye sıfırlanır ve daha kötü bir
      durumda olursunuz.
    </p>
    <p>
      <strong>Borç konsolidasyonu için kişisel kredi</strong> — kredi
      notuna bağlı olarak genellikle %7–20 arası sabit faiz. Birden fazla
      dönen borcu, sabit ödeme tarihi olan tek bir taksitli krediye
      dönüştürür.
    </p>
    <p>
      <strong>Ev sermayesi (HELOC veya nakit çıkışlı refinansman)</strong> —
      en ucuz faiz, ancak artık borcunuz evinizle güvence altına alınmıştır.
      Yalnızca istikrarlı geliri olan ve sonrasında kartları tekrar
      doldurmayacak borçlular için.
    </p>

    <h2>Her iki stratejinin de gerektirdiği taktiksel kurallar</h2>
    <p>
      <strong>(1) Yığına ekleme yapmayı durdurun.</strong> Ödeme süresince
      yeni kredi kartı harcamalarını dondurun. Bakiyeler büyümeye devam
      ederse, borç ödeme matematiği anında başarısız olur.
    </p>
    <p>
      <strong>(2) Hedef borca asgariden fazlasını ödeyin.</strong> Her ay
      sahip olduğunuz ekstra paralar buraya gider. Kartlarda yalnızca
      asgari ödeme yapmak 15+ yıl sürebilir.
    </p>
    <p>
      <strong>(3) Her yerde asgari ödemeleri otomatik ödemeye alın</strong>
      böylece hedef olmayan bir borçta kaçırılan ödeme nedeniyle kredinize
      zarar vermezsiniz.
    </p>
    <p>
      <strong>(4) Ödeme süresince küçük bir acil durum fonu (1.000 TL)
      bulundurun.</strong> Bu olmadan, herhangi bir araba tamiri veya
      sağlık faturası karta yansır ve ilerlemeyi geri alır.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Borçlarınızı, faiz oranlarınızı ve asgari ödemelerinizi{" "}
      <a href="/tools/debt-payoff-calculator">borç ödeme hesaplayıcısına</a>{" "}
      girin — her iki strateji altında toplam ödeme süresini ve ödenen
      faizi yan yana gösterir, böylece tam dolar farkını görebilirsiniz.
      Bu 1.000 TL'lik tamponu boyutlandırmak için{" "}
      <a href="/tools/emergency-fund-calculator">acil durum fonu
      hesaplayıcısı</a> ile birlikte kullanın ve tam yaklaşım için{" "}
      <a href="/guides/how-to-pay-off-debt-fast">borcu hızlı ödeme
      rehberimize</a> bakın.
    </p>
  </>
);