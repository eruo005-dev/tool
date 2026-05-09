import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      ABD satış vergisi katmanlı bir yapıdır. Bir eyalet oranı, bazen bir
      ilçe oranı, sıklıkla bir şehir oranı, ara sıra bir ulaşım bölgesi veya
      özel amaçlı bir oran ve kategoriye ve eyalete göre değişen bir muafiyet
      listesi bulunur. Ödeme sırasında gördüğünüz "%8,25" genellikle dört
      veya beş oranın bir araya gelmesidir. Büyük alışverişler için bütçe
      yaparken, sınır ötesi alımları karşılaştırırken, küçük bir işletme
      yürütürken veya vergisiz bir hafta sonunun size gerçekten bir şey
      kazandırıp kazandırmadığını anlamaya çalışırken bu matematiği doğru
      yapmak önemlidir. Bu rehber, katmanlı hesaplamayı, hizmet-mal
      ayrımını, dahil-hariç fiyatlandırmayı ve sayının en sık yanlış
      hesaplandığı durumları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Temel formül</h2>
    <p>
      Vergi tutarı, vergi öncesi fiyat ile birleşik vergi oranının çarpımına
      eşittir. Toplam, vergi öncesi fiyat artı vergiye eşittir.
    </p>
    <pre>{`vergi   = fiyat * oran
toplam = fiyat * (1 + oran)

fiyat = 100.00, oran = %8.25
vergi   = 100 * 0.0825 = 8.25
toplam = 108.25`}</pre>
    <p>
      Geriye kalan her şey sadece doğru oranı bulmaktır.
    </p>

    <h2>Eyalet + yerel oran katmanlaması</h2>
    <p>
      ABD'deki birleşik oranlar genellikle şunları içerir:
    </p>
    <ul>
      <li>Eyalet oranı (%0 ila ~%7,25)</li>
      <li>İlçe oranı</li>
      <li>Şehir oranı</li>
      <li>Özel bölge oranı (ulaşım, turizm, stadyum vb.)</li>
    </ul>
    <p>
      Bunlar çarpılmaz, toplanır. Kaliforniya'nın %7,25 eyalet + %1 yerel +
      %2,5'e kadar bölge = bazı şehirlerde %10,75'e kadar. Doğru oran,
      gönderim adresine veya satış noktasına bağlıdır; bu nedenle şehirler
      arası alışverişlerde farklı vergi uygulanabilir.
    </p>
    <pre>{`birleşik = eyalet + ilçe + şehir + bölge

CA taban + LA ilçesi + LA şehri + ulaşım
= %6,00 + %0,25 + %0,75 + %2,25
= %9,25`}</pre>

    <h2>Menşe bazlı ve varış bazlı</h2>
    <p>
      Eyaletler, verginin satıcının konumuna (menşe) mı yoksa alıcının
      konumuna (varış) mı göre hesaplanacağı konusunda ikiye ayrılır.
      Çoğu varış bazlıdır; bu nedenle çevrimiçi siparişler, deponun değil,
      sizin teslimat adresinize göre vergi hesaplar. Birkaç eyalet (örneğin
      Teksas, Arizona, Illinois eyalet içi satışlarda) belirli işlemler için
      menşe bazlı kullanır. Satıcıysanız, bu hangi oranı tahsil edeceğinizi
      etkiler.
    </p>

    <h2>Mallar ve hizmetler: her şey vergilendirilmez</h2>
    <p>
      Çoğu eyalet somut malları vergilendirir ancak hizmetleri (saç
      kesimi, hukuki danışmanlık, danışmanlık) vergilendirmez. İstisnalar
      hızla çoğalır:
    </p>
    <ul>
      <li>Bakkal ürünleri: birçok eyalette muaf, bazılarında indirimli oranda, birkaçında tam vergili</li>
      <li>Giyim: NJ, PA'da muaf (lüks olmayan), diğer yerlerde vergili</li>
      <li>Hazır yemek: bakkal ürünleri vergilendirilmese bile neredeyse her zaman vergili</li>
      <li>SaaS: ~20 eyalette vergili, her yıl artıyor</li>
      <li>Dijital indirmeler: büyük farklılık gösterir</li>
      <li>Kargo: bazı eyaletlerde ayrıca belirtilmezse vergili</li>
    </ul>

    <h2>Vergisiz hafta sonları &mdash; hesabı yapın</h2>
    <p>
      Okula dönüş vergi tatilleri genellikle 100 doların altındaki giyim
      ürünlerini ve 50 doların altındaki okul malzemelerini muaf tutar. %8
      vergiyle 300 dolarlık uygun ürün alımında 24 dolar tasarruf edersiniz
      &mdash; gerçek para, ancak genellikle hafta sonu için eklenen %2-3
      perakendeci kâr marjından daha küçüktür. Zaten almayı planlıyorsanız,
      tatil küçük bir kazançtır. %8 tasarruf için bir saat araba kullanıp
      kalabalıklarla uğraşıyorsanız, benzin ve zaman maliyeti muhtemelen
      vergi tasarrufunu aşar.
    </p>

    <h2>Dahil ve hariç fiyatlandırma</h2>
    <p>
      ABD fiyatlandırması <strong>hariçtir</strong> &mdash; etiket fiyatı
      vergiyi içermez, vergi kasada eklenir. Avrupa ve çoğu uluslararası
      fiyatlandırma <strong>dahildir</strong> &mdash; KDV fiyata
      yedirilmiştir. Aralarında dönüşüm yapmak için:
    </p>
    <pre>{`haricten_dahile: fiyat * (1 + oran)
dahilden_harice: dahil / (1 + oran)

100 dolar etiket + %8 vergi = 108 dolar dahil
120 euro dahil / 1.20 KDV = 100 euro KDV hariç`}</pre>

    <h2>Kullanım vergisi &mdash; bilmediğiniz yükümlülük</h2>
    <p>
      Eyalet dışından bir şey satın alırsanız ve satış vergisi tahsil
      edilmezse, çoğu eyalet gelir vergisi beyannamenizi verirken
      <em>kullanım vergisi</em> ödemenizi ister. Oranı satış vergisiyle
      aynıdır. Küçük alımlar için tarihsel olarak uygulanmamıştır, ancak
      eyaletler artık çevrimiçi pazaryerlerinin tahsilat ve ödeme yapmasını
      zorunlu kılmaktadır; bu da tüketiciler için bu sorunu büyük ölçüde
      çözmektedir. Büyük eyaletler arası alımlar (araba, mobilya, sanat)
      için kullanım vergisi gerçektir ve denetlenir.
    </p>

    <h2>İndirimli fiyat hesaplaması</h2>
    <p>
      Vergi, yüzde indirimlerinden sonra uygulanır. Mağaza kuponları
      vergilendirilebilir matrahı düşürür. Çoğu eyalette üretici kuponları
      <em>düşürmez</em> &mdash; vergi, kupon öncesi fiyat üzerinden
      hesaplanır çünkü üretici mağazayı geri öder.
    </p>
    <pre>{`mağaza kuponu:  vergi (fiyat - kupon) üzerinden
üretici kuponu: vergi tam fiyat üzerinden
indirim:        vergi tam fiyat üzerinden (indirimi sonra alırsınız)`}</pre>

    <h2>Yuvarlama kuralları</h2>
    <p>
      Vergi genellikle satır satır değil, toplam fatura üzerinden kuruşa
      kadar hesaplanır. Bazı sistemler hala satır başına yuvarlar ve bu da
      küçük farklılıklar yaratır. %8,25 altında 3,33 dolarlık bir ürün
      0,28 dolar yerine 0,27 dolar vergi gösteriyorsa, bunun nedeni 3,33
      &times; 0,0825 = 0,2747 &mdash; 0,27 dolara yuvarlanmasıdır.
    </p>

    <h2>Makbuzdan ters hesaplama</h2>
    <p>
      Yalnızca toplamınız varsa ve oranı biliyorsanız, ara toplamı geri
      çıkarın:
    </p>
    <pre>{`ara_toplam = toplam / (1 + oran)
vergi      = toplam - ara_toplam

toplam = 108.25, oran = %8.25
ara_toplam = 108.25 / 1.0825 = 100.00
vergi      = 8.25`}</pre>

    <h2>Sık yapılan hatalar</h2>
    <p>
      Yalnızca eyalet oranını kullanıp yerel katmanı atlamak &mdash; %3+
      fark edebilirsiniz. Mağaza kuponu kullanıldığında vergiyi tam fiyat
      üzerinden uygulamak. Vergiden muaf kategorileri (bakkal ürünleri,
      bazı eyaletlerde giyim) unutmak. Dahili harice çevirirken bölmek
      yerine oranı çıkarmak. Ve çevrimiçi alışverişlerin vergisiz olduğunu
      varsaymak &mdash; 2018 sonrası neredeyse tüm büyük satıcılar tahsilat
      yapmaktadır.
    </p>

    <h2>Hesaplamaları yapın</h2>
    <p>
      <a href="/tools/sales-tax-calculator">Satış vergisi hesaplayıcı</a>
      <a href="/tools/tip-calculator">Bahşiş hesaplayıcı</a>
      <a href="/tools/discount-calculator">İndirim hesaplayıcı</a>
    </p>
  </>
);