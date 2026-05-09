import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Üniversite maliyetleri son yirmi yılda yılda yaklaşık %5 oranında arttı &mdash; bu, enflasyon oranının kabaca iki katı. Dört yıllık bir devlet üniversitesinde eyalet içi eğitim, yurt ve yemek dahil kağıt üzerinde şu anda 115.000$+ tutuyor. Özel üniversiteler 350.000$'ı buluyor. Çocuğunuz bugün yeni doğmuşsa ve liseye kadar bekleyip başlarsanız, bileşik faiz avantajının büyük kısmını kaçırır ve üniversite masraflarını nakit akışından veya kredilerle karşılamak zorunda kalırsınız. Bu rehber; 529 planı, Coverdell ESA, UTMA/UGMA hesapları, yaşa dayalı varlık dağılım stratejileri, öngörülen gelecek maliyetleri ve bu hesapların mali yardım üzerindeki sıklıkla göz ardı edilen etkisini kapsar. Buradan aylık ne kadar biriktirmeniz gerektiği ve bunu hangi yapıda biriktireceğiniz konusunda net bir rakamla çıkacaksınız.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. Gelecekteki maliyeti hesaplayın</h2>
    <p>
      Bugünkü maliyetle (College Board tarafından yayınlanan ortalama) başlayın, ardından tarihsel üniversite enflasyonu olan yıllık ~%5 ile artırın:
    </p>
    <pre>{`gelecekteki maliyet = bugünkü maliyet × (1.05)^okula başlama yılı`}</pre>
    <p>
      Bugünkü dört yıllık devlet üniversitesi eyalet içi toplam maliyeti: ~115.000$. 18 yıl sonra %5 ile:
      <code> 115000 × 1.05^18 ≈ 276.000$</code>. Özel üniversite: 700.000$+. Bu korkutucu rakamlar, ancak yardımlar, burslar ve eyalet içi indirimler genellikle gerçek maliyeti yarıya indirir.
    </p>

    <h2>2. 529 planları varsayılan hesaptır</h2>
    <p>
      529 planı, devlet destekli bir eğitim birikim planıdır ve şu özelliklere sahiptir:
    </p>
    <ul>
      <li>Vergiden muaf büyüme</li>
      <li>Nitelikli eğitim harcamaları için vergiden muaf para çekme</li>
      <li>30'dan fazla eyalette eyalet gelir vergisi indirimi veya kredisi</li>
      <li>Katkıda bulunanlar için gelir sınırı yok</li>
      <li>Yüksek katkı limitleri (eyalete göre 235.000$ - 580.000$)</li>
    </ul>
    <p>
      Kendi eyaletinizin planını kullanmak zorunda değilsiniz, ancak kullanmazsanız eyalet vergi indirimini kaybedebilirsiniz. Kendi eyaletinizde indirim yoksa ücretlere göre araştırma yapın (Utah ve Nevada sürekli olarak düşük ücretlidir).
    </p>

    <h2>3. Nitelikli 529 harcaması sayılanlar</h2>
    <ul>
      <li>Öğrenim ücreti ve zorunlu harçlar</li>
      <li>Yurt ve yemek (kampüs içi veya dışı, okulun belirlediği limite kadar)</li>
      <li>Zorunlu ders kitapları, malzemeler, ekipman</li>
      <li>Zorunlu bilgisayarlar ve yazılımlar</li>
      <li>K-12 öğrenim ücreti (yararlanıcı başına yılda 10.000$'a kadar)</li>
      <li>Çıraklık programları ve belirli öğrenci kredisi geri ödemeleri (yararlanıcı başına ömür boyu 10.000$)</li>
    </ul>
    <p>
      Nitelikli olmayanlar: ulaşım, sağlık sigortası, ders dışı faaliyet ücretleri. Nitelikli olmayan para çekme işlemleri, kazanç kısmı üzerinden gelir vergisi artı %10 ceza tetikler.
    </p>

    <h2>4. Coverdell ESA'ları</h2>
    <p>
      Daha az yaygın bir alternatif:
    </p>
    <ul>
      <li>Yıllık katkı limiti: Yararlanıcı başına 2.000$ (tüm katkıda bulunanların toplamı)</li>
      <li>Gelir aşamalı çıkışı: Bekar için 95.000$-110.000$, evli için 190.000$-220.000$</li>
      <li>30 yaşına kadar kullanılmalıdır</li>
      <li>Tarihsel olarak 529'lardan daha geniş K-12 esnekliği, ancak 529'lar da arayı kapattı</li>
      <li>Çoğu 529'dan daha geniş yatırım seçenekleri (brokerde tutulan herhangi bir varlık)</li>
    </ul>
    <p>
      2.000$ limiti ESA'ları tamamlayıcı kılar. Çoğu aile ana araç olarak 529 kullanır.
    </p>

    <h2>5. UTMA/UGMA hesapları</h2>
    <p>
      Çocuk adına açılan emanet hesapları:
    </p>
    <ul>
      <li>Katkı limiti yok</li>
      <li>Kullanım kısıtlaması yok (eğitime bağlı değil)</li>
      <li>Çocuk vergisi: İlk ~1.300$'lık kazanılmamış gelir vergiden muaf, sonraki ~1.300$ çocuk oranından, üstü ebeveyn oranından vergilendirilir</li>
      <li>Reşit olma yaşında (eyalete göre 18-21) çocuğun parası olur</li>
      <li>Mali yardım için 529'dan çok daha kötüdür (öğrenci varlığı olarak sayılır)</li>
    </ul>
    <p>
      UTMA/UGMA, 529'lar var olmadan önce mantıklıydı. Günümüzde genellikle yalnızca eğitim dışı kullanımlar için esneklik istendiğinde tercih edilir.
    </p>

    <h2>6. Yaşa dayalı 529 portföyleri</h2>
    <p>
      Çoğu 529 planı, çocuk üniversiteye yaklaştıkça hisse senedi ağırlıklıdan tahvil ağırlıklıya otomatik olarak yeniden dengeleyen yaşa dayalı bir seçenek sunar:
    </p>
    <ul>
      <li>0-5 yaş: %80-90 hisse senedi</li>
      <li>6-10 yaş: %60-75 hisse senedi</li>
      <li>11-14 yaş: %40-55 hisse senedi</li>
      <li>15-17 yaş: %20-30 hisse senedi</li>
      <li>18+ yaş: %0-15 hisse senedi</li>
    </ul>
    <p>
      Amaç, öğrenim ücreti faturaları geldiğinde paranın piyasadan çıkmış olmasıdır. 17. yılda bir hisse senedi çöküşü, toparlanma şansı hiç olmayan bir portföyü paramparça edebilir.
    </p>

    <h2>7. Ayda ne kadar biriktirilmeli</h2>
    <p>
      Yeni doğmuş bir bebek için devlet üniversitesi eyalet içi eğitimini karşılamak için kabaca hesaplama (18 yıllık ufuk, %7 net getiri, %5 enflasyon):
    </p>
    <pre>{`gelecekteki maliyet ≈ 276.000$
gerekli aylık birikim ≈ 475$/ay`}</pre>
    <p>
      5 yaşında başlarsanız bu ~750$/ay'a fırlar. 10 yaşında: ~1.400$/ay. 15 yaşında: 3.500$+/ay. <strong>Erken başlamak her şeydir.</strong>
    </p>

    <h2>8. Mali yardım etkisi (FAFSA)</h2>
    <p>
      FAFSA kurallarına göre:
    </p>
    <ul>
      <li>Ebeveyne ait 529, değerinin en fazla %5,64'ü oranında yardıma sayılır</li>
      <li>Öğrenciye ait varlıklar (UTMA/UGMA) %20 oranında sayılır</li>
      <li>Büyükanne/büyükbabaya ait 529: FAFSA Basitleştirme Yasası (2023+) sonrası artık sayılmaz</li>
    </ul>
    <p>
      529 sahibi olmak yardımı anlamlı şekilde olumsuz etkilemez. Aslında, birikim yapmanın yardım dostu yollarından biridir.
    </p>

    <h2>9. Büyükanne/büyükbaba 529'ları: artık gizli bir kazanç</h2>
    <p>
      FAFSA reformu sonrası, büyükanne/büyükbabaya ait 529'lar:
    </p>
    <ul>
      <li>Ebeveyn veya öğrenci varlığı olarak sayılmaz</li>
      <li>Dağıtıldığında öğrenci geliri olarak sayılmaz (önceden sorundu)</li>
      <li>Ebeveyne ait 529'lar gibi vergiden muaf büyür</li>
    </ul>
    <p>
      Büyükanne/büyükbaba yardım etmek istiyorsa, bu artık ebeveynlere hediye vermekten kesinlikle daha iyidir.
    </p>

    <h2>10. &ldquo;Kasten eksik fonlama&rdquo; stratejisi</h2>
    <p>
      Bir 529'u tamamen fonlamak iki risk taşır: çocuğunuz üniversiteye gitmez veya beklenenden daha ucuz bir okula gider. Her iki durumda da, nitelikli olmayan para çekme işlemleri size gelir vergisi + %10 cezaya mal olur. Makul bir strateji, öngörülen maliyetin ~%60-70'ini 529'da, kalanını ise vergilendirilebilir bir broker hesabında biriktirmektir. Fazlası gerekirse broker hesabını kullanabilirsiniz; fazlalık kalırsa ceza uygulanmaz.
    </p>

    <h2>11. SECURE 2.0: 529'dan Roth IRA'ya aktarım</h2>
    <p>
      2024'ten itibaren, kullanılmayan 529 fonları yararlanıcının Roth IRA'sına aktarılabilir:
    </p>
    <ul>
      <li>529 hesabı 15+ yıldır açık olmalıdır</li>
      <li>Ömür boyu limit: Yararlanıcı başına 35.000$</li>
      <li>Yıllık Roth IRA katkı limitlerine tabidir</li>
      <li>Son 5 yıl içinde yapılan katkılar uygun değildir</li>
    </ul>
    <p>
      Bu, &ldquo;ya gereğinden fazla fonlarsam&rdquo; riskini büyük ölçüde ortadan kaldırır &mdash; fazlalık, çocuğun emeklilik birikimlerine erken başlaması olabilir.
    </p>

    <h2>12. Burslar, hibeler ve iş-okul programları hedefi düşürür</h2>
    <p>
      Ortalama bir eyalet içi öğrenci, yardım sonrası yayınlanan maliyetin ~%65'ini öder. Özel üniversiteler, liyakat ve ihtiyaç temelli yardımlarla öğrenim ücretini büyük ölçüde indirir. Etiket fiyatı için plan yapmayın — net fiyat için plan yapın. Çocuğunuz lisedeyken her okulun net fiyat hesaplayıcısını (web sitelerinde yasal olarak zorunludur) kullanın.
    </p>

    <h2>13. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Geç başlamak.</strong> Bileşik faiz işin çoğunu yapar; ilk 5-10 yılı kaçırmak, aylık katkıların 3-5 kat daha yüksek olması anlamına gelir.
      </li>
      <li>
        <strong>Yanlış eyalet planını seçmek.</strong> Yüksek ücretli planlar yılda %0.5-1+ tutar; 18 yılda bu, nihai bakiyenin %10-20'si demektir.
      </li>
      <li>
        <strong>529'da aşırı birikim yapmak.</strong> Nitelikli olmayan para çekme işlemlerinde vergi cezası; vergilendirilebilir bir broker hesabı da ekleyin.
      </li>
      <li>
        <strong>Üniversiteyi emekliliğin önüne koymak.</strong> Çocuklar üniversite için borçlanabilir; siz emeklilik için borçlanamazsınız.
      </li>
      <li>
        <strong>Fon seçeneklerini göz ardı etmek.</strong> Yaşa dayalı portföyler iyi varsayılanlardır; ancak temeldeki fon gider oranlarını kontrol edin.
      </li>
    </ul>

    <h2>14. Rakamları hesaplayın</h2>
    <p>
      Çocuğunuzun yaşına, beklenen üniversite türüne ve varsayılan getiriye göre aylık birikim hedefi belirlemek için aşağıdaki hesaplayıcıyı kullanın.
    </p>
    <p>
      <a href="/tools/college-savings-calculator">Üniversite birikim hesaplayıcısı</a>
      <a href="/tools/compound-interest-calculator">Bileşik faiz hesaplayıcısı</a>
      <a href="/tools/savings-goal-calculator">Birikim hedefi hesaplayıcısı</a>
    </p>
  </>
);