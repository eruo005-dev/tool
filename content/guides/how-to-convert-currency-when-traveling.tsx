import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Çoğu gezginin aldığını düşündüğü "döviz kuru", gerçekte aldıkları kur değildir. Havaalanı büfe fiyat farkları, ATM ücretleri, kart yabancı işlem ücretleri ve dinamik para birimi dönüştürme oyunları arasında, bankalar arası kur ile hesabınıza yansıyan tutar arasındaki fark işlem başına %3-8 olabilir. İki haftalık bir gezide bu, yüzlerce dolar demektir. Bu kılavuz, karşılaşacağınız kur türlerini, yerel para almanın en ucuz yollarını, satış noktası tuzaklarını ve büyük bir yurtdışı satın alma işlemini nasıl koruyacağınızı anlatır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Karşılaşacağınız üç döviz kuru</h2>
    <p>
      <strong>Bankalar arası / piyasa ortası kuru:</strong> "gerçek" kur. Bankaların birbirleriyle kullandığı, Google ve XE'nin gösterdiği kur. Bu kuru kişisel olarak asla alamazsınız.
    </p>
    <p>
      <strong>Perakende kuru:</strong> bankalar arası kur + bir banka veya döviz bürosu tarafından eklenen fiyat farkı. Tipik perakende fiyat farkları: kart ağları (Visa/Mastercard) için %0,5-3, bankalar için %3-6, havaalanı büfeleri ve oteller için %5-12.
    </p>
    <p>
      <strong>Dinamik para birimi dönüştürme (DCC) kuru:</strong> yabancı bir satıcının, sizi kendi para birimleri yerine kendi para biriminizden ödemeye davet etmesi. Neredeyse her zaman kart ağınızın doğal kurundan %3-8 daha kötüdür. Her zaman reddedin.
    </p>
    <p>
      Kural: size teklif edilen herhangi bir kuru, başka bir perakende hizmetinin kuruyla değil, Google'daki piyasa ortası kuruyla karşılaştırın. "Bankadan sadece %2 daha kötü" olması, yine de olması gerekenden %2 daha pahalı olduğu anlamına gelir.
    </p>

    <h2>Yerel para birimi elde etme yolları, en iyiden en kötüye</h2>
    <p>
      <strong>1. Ücretsiz banka kartıyla yerel ATM.</strong> Charles Schwab Investor Checking (ABD), Starling / Revolut / Wise (BK/AB), Chime gibi kartlar ATM ücretlerini iade eder. Minimum fiyat farkıyla bankalar arası kuru alırsınız. Tipik toplam maliyet: %0,1-0,5.
    </p>
    <p>
      <strong>2. Yabancı işlem ücreti olmayan kredi kartı.</strong> Çoğu seyahat kartı (Chase Sapphire, Capital One Venture, vb.) size %0 para birimi dönüştürme ücretiyle ağ kurunu verir. Tipik maliyet: bankalar arası kurun %0,5-1 üzeri.
    </p>
    <p>
      <strong>3. Çoklu para birimi hesapları (Wise / Revolut / Currencies Direct).</strong> Piyasa ortası kurlarına yakın kurlarla birden çok para biriminde bakiye tutun. Sık seyahat edenler veya yurtdışı geliri olan uzaktan çalışanlar için iyidir.
    </p>
    <p>
      <strong>4. Yabancı bir banka ATM'sinde standart banka banka kartı.</strong> Tipik maliyet: %2-4 döviz kuru fiyat farkı + 3-5$ ATM ücreti. Ara sıra kullanım için fena değil.
    </p>
    <p>
      <strong>5. Yerel banka döviz bürosu (şube içi).</strong> Değişken kurlar; tipik olarak bankalar arası kurun %1,5-3 üzeri. Küçük miktarlar için uygun.
    </p>
    <p>
      <strong>6. Turistik bölgelerdeki döviz büroları.</strong> Tipik olarak bankalar arası kurun %3-6 üzeri. Başka seçenek yoksa kaçının.
    </p>
    <p>
      <strong>7. Havaalanı döviz büfeleri.</strong> Bankalar arası kurun %8-12 üzeri. Başka seçenek yoksa sadece 50-100$'lık "varış parası" için.
    </p>
    <p>
      <strong>8. Otel resepsiyon döviz bozdurma.</strong> Genellikle bankalar arası kurun %10-15 üzeri. Sadece acil durumlarda.
    </p>

    <h2>DCC — terminaldeki tuzak</h2>
    <p>
      Yurtdışındaki restoranlarda, mağazalarda ve otellerde, kart terminali şunu sorabilir: "USD (kendi para biriminiz) veya EUR (yerel) olarak ödemek ister misiniz?" Bu DCC'dir.
    </p>
    <p>
      USD'yi seçmek, satıcı veya işlemcisi tarafından belirlenen bir kuru uygular — neredeyse her zaman kart ağınızın kurundan %3-8 daha kötüdür. Makbuzda USD rakamını görürsünüz ve netlik kazandığınızı düşünürsünüz; gerçekte, bir fiyat farkı ödemiş olursunuz.
    </p>
    <p>
      <strong>Her zaman yerel para birimini seçin.</strong> Kart ağınız dönüşümü kendi (çok daha iyi) kuruyla yapar ve yine de ekstrenizde kendi para biriminizdeki tutarı görürsünüz.
    </p>
    <p>
      DCC bazen bir "hizmet" veya "kolaylık" olarak sunulur. Bu gizli bir fiyat farkıdır.
    </p>

    <h2>Bilmeniz gereken kart ücretleri</h2>
    <p>
      <strong>Yabancı işlem ücreti:</strong> bankanızın, yabancı para birimindeki herhangi bir işlem için ağ kurunun üzerine eklediği bir yüzde (genellikle %1-3). Seyahat kartları bunu affeder.
    </p>
    <p>
      <strong>Nakit avans ücreti:</strong> yurtdışındaki bir ATM'den nakit çekmek için kredi kartı kullanmak, nakit avans olarak işlem görür (%3-5 + 1. günden itibaren faiz). ATM'ler için banka kartı, alışverişler için kredi kartı kullanın.
    </p>
    <p>
      <strong>ATM işletmecisi ücreti:</strong> kartınızdan bağımsız olarak yabancı ATM'nin kendi ücreti. Genellikle 2-5$. Bazı kartlar (Schwab gibi) bunları iade eder.
    </p>
    <p>
      <strong>Ağ ücreti:</strong> Visa ve Mastercard, "döviz kuru ücreti olmayan" kartlarda bile küçük bir ücret (%0,2-1) ekler. Bu, kura dahildir; kaçınılmazdır.
    </p>

    <h2>Nakit ve kart stratejisi</h2>
    <p>
      <strong>Nakit hala önemlidir:</strong> kırsal alanlar, küçük pazarlar, bahşişler, taksi şoförleri, bazı Avrupa ülkeleri (Almanya şaşırtıcı derecede nakit ağırlıklıdır), acil durumlar.
    </p>
    <p>
      <strong>Kart şunlar için daha iyidir:</strong> büyük alışverişler (daha iyi kur, dolandırıcılık koruması, birçok kartta yerleşik seyahat sigortası bulunur), restoranlar, oteller, ulaşım, çevrimiçi rezervasyonlar.
    </p>
    <p>
      <strong>Yaklaşık bölünme:</strong> günlük bütçenizin %10-20'sini nakit olarak taşıyın; diğer her şey için kart kullanın. Daha büyük ATM tutarları çekin (daha az ücret olayı) ancak büyük nakit bakiyeleri taşımayın.
    </p>

    <h2>Seyahatten önce — hazırlık kontrol listesi</h2>
    <p>
      <strong>Seyahat tarihlerinizi ve ülkelerinizi bankanıza ve kart kuruluşlarınıza bildirin.</strong> İlk işlemdeki dolandırıcılık bloklarını azaltır. Artık birçok banka seyahati otomatik olarak algıladığı için daha az kritiktir.
    </p>
    <p>
      <strong>Henüz yoksa, en az bir ay önceden döviz kuru ücreti olmayan bir kart alın.</strong>
    </p>
    <p>
      <strong>ATM PIN'inizi rakam olarak bilin.</strong> Birçok yabancı ATM yalnızca sayısal kabul eder; harf-rakam eşlemesi çalışmaz.
    </p>
    <p>
      <strong>Çip ve PIN uyumluluğunu kontrol edin.</strong> Çoğu modern kart çalışır; bazıları hala imzayı varsayılan olarak alır ve bu, otomatik Avrupa tren istasyonlarında ve gişelerde başarısız olur.
    </p>
    <p>
      <strong>Farklı bir ağdan yedek bir kart taşıyın.</strong> Ana kart kaybolursa, dondurulursa veya bloke edilirse, gezi bitmez.
    </p>

    <h2>Büyük bir yurtdışı satın alma işlemini korumak</h2>
    <p>
      Yabancı para biriminde pahalı bir şey satın almak (araba, mülk, okul ücreti, düğün mekanı): anlaşma ile ödeme arasındaki döviz kuru hareketleri binlerce dolara mal olabilir.
    </p>
    <p>
      <strong>Seçenek 1: vadeli işlem sözleşmesiyle sabitleyin.</strong> Wise, Currencies Direct, OFX gibi hizmetler vadeli kurlar sunar — bugün anlaşın, 30/60/90 gün içinde ödeyin. Döviz riskini ortadan kaldırır.
    </p>
    <p>
      <strong>Seçenek 2: parayı erken satın alın.</strong> Kur uygun olduğunda dönüştürün, çoklu para birimi hesabında tutun. Dezavantajı: nakit bakiyesinin fırsat maliyeti.
    </p>
    <p>
      <strong>Seçenek 3: riski kabul edin.</strong> 10.000$'ın altındaki alımlar için, koruma karmaşıklığı genellikle buna değmez.
    </p>
    <p>
      Para birimi çiftinin 5 yıllık aralığını kontrol edin — uygun bir noktadaysanız (örneğin, güçlü yerel para birimi), sabitleyin.
    </p>

    <h2>Hızlı dönüşümler için pratik matematik</h2>
    <p>
      Bir referans noktasını ezberleyin. EUR ≈ USD × 1,1 (değişir). GBP ≈ USD × 1,25. JPY: kabaca USD × 150. Ardından pratik matematik için yuvarlayın.
    </p>
    <p>
      20 EUR için hızlı dönüşüm: 20 × 1,1 = 22. Bu USD'dir.
    </p>
    <p>
      65€'luk bir akşam yemeği için: 65 × 1,1 ≈ 72 USD.
    </p>
    <p>
      Menüler ve sokak fiyatları için yeterince iyi. Büyük alımlar için tam kuru kontrol edin.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Canlı çapraz kurları{" "}
      <a href="/tools/currency-converter">para birimi dönüştürücü</a> ile alın.
      Gezi bütçenizi kendi para biriminizde planlamak için{" "}
      <a href="/tools/budget-calculator">bütçe hesaplayıcı</a> ve dönüşümden sonra yerel bahşiş gelenekleri için{" "}
      <a href="/tools/tip-calculator">bahşiş hesaplayıcı</a> ile birlikte kullanın.
    </p>
  </>
);