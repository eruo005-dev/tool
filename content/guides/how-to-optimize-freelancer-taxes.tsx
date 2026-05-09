import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Serbest çalışanlar, aynı brüt gelir üzerinden W-2 çalışanlarından daha fazla vergi öder &mdash; aktif olarak plan yapmadıkları sürece. Serbest meslek vergisi, üç aylık tahmini ödemeler ve IRS'nin neredeyse size sunduğu kesintiler arasında, bilgili bir serbest çalışan ile hazırlıksız bir kişi arasındaki fark yılda rutin olarak $5,000&ndash;$15,000'dir. Denetim alanına girmeden kazandığınızın daha fazlasını nasıl koruyacağınız aşağıda açıklanmıştır.
  </p>
);

export const body: ReactElement = (
  <>
    <p>
      Mali tavsiye değildir. Lisanslı bir danışmana danışın. Vergi yasaları yıllık olarak değişir ve eyalete göre farklılık gösterir &mdash; serbest meslek konusunda uzmanlaşmış bir SMMM, kendini birçok kez amorti edecektir.
    </p>

    <h2>Üç aylık tahmini ödemeler</h2>
    <p>
      $1,000'den fazla borcunuz olacağını düşünüyorsanız, IRS sizden Form 1040-ES aracılığıyla üç ayda bir ödeme yapmanızı ister. Son tarihler kabaca 15 Nisan, 15 Haziran, 15 Eylül ve 15 Ocak'tır. Bunları atlarsanız, eksik ödeme cezası ödersiniz &mdash; şu anda yıllık %8, çeyrek başına hesaplanır. Güvenli liman: geçen yılki toplam verginizin %100'ünü (AGI'nız $150k'nın üzerindeyse %110) ödeyin ve Nisan ayında ne borcunuz olursa olsun cezalardan kaçınırsınız.
    </p>

    <h2>Serbest meslek vergisi en büyüğüdür</h2>
    <p>
      Serbest meslek vergisi, net kazancınızın %15,3'üdür (ücret tabanına kadar %12,4 Sosyal Güvenlik, artı sınırsız %2,9 Medicare ve $200k'nın üzerinde ek %0,9). Bunun yarısını 1040'ınızda düşebilirsiniz, ancak yine de can sıkıcıdır. Bu nedenle, ~$60k net kârın üzerinde bir S-corp seçimi mantıklı olabilir &mdash; kendinize makul bir maaş ödersiniz, geri kalanını temettü olarak alırsınız ve temettü kısmında serbest meslek vergisinden tasarruf edersiniz. Seçim yapmadan önce rakamları hesaplayın.
    </p>

    <h2>IRS'nin almanızı beklediği kesintiler</h2>
    <ul>
      <li>Ev ofisi: basitleştirilmiş yöntem 300 sqft'ye kadar $5/sqft'dir (maksimum $1,500); fiili yöntem, kira, kamu hizmetleri ve sigortanın iş yüzdesini kullanır.</li>
      <li>Ekipman ve yazılım &mdash; Bölüm 179, uygun ekipmanın amortismana tabi tutmak yerine ilk yılda 1,16 milyon $'a kadarını giderleştirmenize olanak tanır.</li>
      <li>Sağlık sigortası primleri &mdash; eşinizin işveren planına uygun değilseniz, satırın üzerinde düşülebilir.</li>
      <li>SEP IRA (net kazancın %25'ine kadar) veya Solo 401(k) (2024'te $69,000'a kadar) &mdash; büyük vergi ertelenmiş alan.</li>
      <li>İş seyahati için IRS standart oranında kilometre, eşzamanlı olarak takip edilir.</li>
      <li>Profesyonel gelişim, abonelikler ve sektör üyelikleri.</li>
    </ul>

    <h2>Defter tutma disiplini</h2>
    <p>
      Kurumsal muhasebeye ihtiyacınız yok &mdash; temiz kayıtlara ihtiyacınız var. QuickBooks Self-Employed, Wave veya Xero, işletme hesabınızla senkronize olur ve işlemleri otomatik olarak kategorize eder. Kural: özel bir işletme hesabı, her harcama buradan geçer, makbuzlar fotoğraflanır veya bulut depolamaya kaydedilir. Vergi zamanında, SMMM'niz 10 saatlik bir ayakkabı kutusu yerine 10 dakikada temiz bir kar-zarar tablosu alır.
    </p>

    <h2>NEYİ düşmemeli</h2>
    <p>
      Yalnız başına yenen yemekler düşülemez. Müşteri yemekleri, belgelerle %50 oranında düşülebilir. Normal ofisinize veya müşteri sahanıza gidiş-geliş düşülemez &mdash; yalnızca iş yerleri arasındaki seyahat veya geçici çalışma yerlerine yapılan seyahat. İş dışında giyebileceğiniz kıyafetler (iş için giyseniz bile) düşülemez. İşle karışık kişisel telefon kullanımı, %100 değil, makul bir yüzde bölünmesi gerektirir. Temel kural: IRS sizi denetlerse, belgelerle savunabilir misiniz?
    </p>

    <h2>Emeklilik ve SMMM görüşmesi</h2>
    <p>
      Solo 401(k) veya SEP IRA, serbest çalışanların göz ardı ettiği en büyük vergi kaldıracıdır. $100k net kârda, bir Solo 401(k)'yi maksimize etmek $30k+ vergiye tabi geliri koruyabilir ve size birleşik federal ve eyalet vergisinde $9,000&ndash;$12,000 tasarruf sağlayabilir. Bir saatlik SMMM strateji oturumu $300&ndash;$500'a mal olur ve genellikle ilk yılda birkaç bin dolar tasarruf sağlar &mdash; işletme yapısı, emeklilik hesabı seçimi ve üç aylık ödeme zamanlaması gerçek paranın olduğu yerlerdir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Üç aylık ödemeleri atlamak ve cezalar artı beş haneli bir Nisan faturası almak. Kişisel ve işi aynı hesapta karıştırmak &mdash; denetim kırmızı bayrağı ve defter tutma kabusu. Belgelerle desteklemeden agresif bir ev ofisi kesintisi yapmak. Eyalet tahmini vergilerini unutmak (çoğu eyalet de üç aylık ödeme ister). İlk günden itibaren her faturanın %25&ndash;30'unu ayrı bir vergi rezerv hesabına ayırmamak.
    </p>

    <h2>Alt satır</h2>
    <p>
      Serbest çalışan vergi optimizasyonu %80 rutin disiplin ve %20 akıllı yapıdır. Üç ayda bir ödeyin, temiz defterler tutun, bir Solo 401(k)'yi maksimize edin ve yılda bir strateji oturumu için bir SMMM kiralayın. Her faturadan ne kadar ayıracağınızı tam olarak bulmak için ücretsiz <a href="/tools/freelancer-tax-reserve-calculator"> freelancer-tax-reserve-calculator</a> aracını kullanın. Serbest çalışanlar için denetim riski düşüktür, ancak yalnızca belgeleriniz sağlamsa &mdash; ve gerçekten hakkınız olan her kesintiyi almanızı sağlayan da sağlam belgelerdir.
    </p>
  </>
);