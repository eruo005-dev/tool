import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      KDV (Katma Değer Vergisi), 170'ten fazla ülkede geçerli olan baskın tüketim vergisidir — tüm AB üye devletleri, Birleşik Krallık, Asya'nın çoğu, Afrika ve Latin Amerika dahil. ABD dışındaki müşterilere satış yapıyorsanız, bununla karşılaşırsınız. Matematiği doğru yaparsanız uyumlu kalırsınız; yanlış yaparsanız, tahsil edilmeyen vergiden kişisel olarak sorumlu olursunuz. Bu rehber, KDV ekleme ve KDV çıkarma formüllerini, ülkelere göre oranları, B2B tersine işlem kurallarını, kayıt eşiklerini ve en çok denetim baş ağrısına neden olan dört hatayı adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>KDV nedir — ve ABD satış vergisinden farkı</h2>
    <p>
      KDV çok aşamalı bir vergidir: tedarik zincirinin her aşamasında tahsil edilir ve her işletme ödediği KDV'yi girdiler üzerinden geri talep eder. Nihai tüketici toplam vergiyi üstlenir; işletmeler yalnızca tahsildardır.
    </p>
    <p>
      ABD satış vergisiyle karşılaştırın: tek aşamalı, yalnızca nihai satışta tahsil edilir. ABD'deki işletmeler girdileri üzerinden satış vergisini geri talep etmez.
    </p>
    <p>
      Pratik sonuç: KDV'ye kayıtlı bir işletme olarak, satışlarda KDV tahsil eder ("çıktı KDV"), alışlarda KDV'yi geri talep eder ("girdi KDV") ve farkı vergi dairesine ödersiniz. Bu nedenle KDV'ye "katma değer" vergisi denir — yalnızca eklediğiniz değer üzerinden vergi ödersiniz.
    </p>

    <h2>İki temel formül</h2>
    <p>
      <strong>KDV ekleme (net fiyatı biliyorsunuz, KDV eklemeniz gerekiyor):</strong>
    </p>
    <p>
      KDV tutarı = Net × (oran / 100)
      <br />
      Brüt = Net + KDV tutarı = Net × (1 + oran / 100)
    </p>
    <p>
      Örnek: %20 Birleşik Krallık KDV ile 100 £ net = 20 £ KDV = 120 £ brüt.
    </p>
    <p>
      <strong>KDV çıkarma (brüt fiyatı biliyorsunuz, neti bulmanız gerekiyor):</strong>
    </p>
    <p>
      Net = Brüt / (1 + oran / 100)
      <br />
      KDV tutarı = Brüt − Net
    </p>
    <p>
      Örnek: %20 ile 120 £ brüt = 100 £ net + 20 £ KDV.
    </p>
    <p>
      Yaygın hata: insanlar "KDV çıkarma" işlemini Brüt × 0,80 olarak hesaplar. Bu yanlıştır — 100 £ değil, 96 £ elde edersiniz. Doğru bölme 1,20'ye bölmektir.
    </p>

    <h2>Ülkelere göre standart oranlar</h2>
    <p>
      <strong>Birleşik Krallık:</strong> %20 standart, %5 indirimli (evsel yakıt, çocuk oto koltukları), %0 sıfır oranlı (çoğu gıda, çocuk giyimi, kitaplar).
    </p>
    <p>
      <strong>Almanya:</strong> %19 standart, %7 indirimli.
    </p>
    <p>
      <strong>Fransa:</strong> %20 standart, %10 / %5,5 / %2,1 indirimli kademeler.
    </p>
    <p>
      <strong>İrlanda:</strong> %23 standart, %13,5 / %9 / %4,8 / %0 indirimli.
    </p>
    <p>
      <strong>Hollanda:</strong> %21 standart, %9 indirimli.
    </p>
    <p>
      <strong>İspanya:</strong> %21 standart, %10 / %4 indirimli.
    </p>
    <p>
      <strong>İtalya:</strong> %22 standart, %10 / %5 / %4 indirimli.
    </p>
    <p>
      <strong>İsveç / Danimarka:</strong> %25 standart (Avrupa'nın en yükseği).
    </p>
    <p>
      <strong>Macaristan:</strong> %27 standart (AB'nin en yükseği).
    </p>
    <p>
      <strong>Kanada:</strong> %5 federal GST + eyalet PST/HST (değişir). Teknik olarak KDV değil ancak aynı mekanizma.
    </p>
    <p>
      <strong>Avustralya / Yeni Zelanda:</strong> %10 / %15 GST (başka bir adla KDV).
    </p>

    <h2>İndirimli ve sıfır oranlar — neler kapsar</h2>
    <p>
      İndirimli oranlar genellikle temel ihtiyaçlar için geçerlidir: gıda, kitaplar, ilaçlar, toplu taşıma, kültürel ürünler. Her ülke kendi listesini belirler — asla aktarılabilir olduğunu varsaymayın.
    </p>
    <p>
      <strong>Sıfır oranlı</strong> ≠ <strong>muaf</strong>. Sıfır oranlı satışlar hâlâ vergilendirilebilir (%0 oranında), bu nedenle ilgili maliyetler üzerinden girdi KDV'sini geri talep edebilirsiniz. Muaf satışlar KDV sisteminin dışındadır — ilgili girdi KDV'sini geri talep edemezsiniz. Nakit akışı için büyük fark.
    </p>

    <h2>B2B tersine işlem — sınır ötesi kural</h2>
    <p>
      Bir AB ülkesindeki KDV'ye kayıtlı bir işletme, başka bir AB ülkesindeki KDV'ye kayıtlı bir işletmeye sattığında:
    </p>
    <p>
      Satıcı %0 KDV tahsil eder (sıfır oranlı değil, tersine işlem uygulanır).
    </p>
    <p>
      Alıcı "kendi kendine muhasebeleştirir" — satın alımda kendi yerel oranında KDV ekler, ardından aynı beyannamede geri talep eder. Net KDV yükümlülüğü: sıfır. Sadece bir evrak kaydı.
    </p>
    <p>
      <strong>Koşullar:</strong> her iki taraf da KDV'ye kayıtlı, faturada geçerli KDV numaraları görüntülenmeli, mal/hizmetler fiilen sınırları aşmalı. Faturada "Tersine işlem uygulanır — Konsey Direktifi 2006/112/EC Madde 196" veya benzeri ifade yer almalıdır.
    </p>
    <p>
      Brexit sonrası: Birleşik Krallık → AB satışları artık AB içi değildir. Bunlar ihracattır (sıfır oranlı) ve AB alıcısı varışta ithalat KDV'sini halleder.
    </p>

    <h2>Kayıt eşikleri</h2>
    <p>
      Vergiye tabi cironuz bir eşiği aştığında KDV'ye kaydolmanız gerekir:
    </p>
    <p>
      <strong>Birleşik Krallık:</strong> 90.000 £ (Nisan 2024 itibarıyla — 85 bin £'dan yükseltildi).
    </p>
    <p>
      <strong>Almanya:</strong> 22.000 € (altındaysa küçük işletme muafiyeti).
    </p>
    <p>
      <strong>Fransa:</strong> 85.800 € (mallar) / 34.400 € (hizmetler).
    </p>
    <p>
      <strong>İrlanda:</strong> 75.000 € (mallar) / 37.500 € (hizmetler).
    </p>
    <p>
      <strong>Hollanda:</strong> 20.000 € (isteğe bağlı küçük işletme planı).
    </p>
    <p>
      <strong>AB'ye B2C satış yapan AB dışı yerleşikler:</strong> tüm AB ülkelerinde toplam 10.000 €, bir yerde (genellikle OSS) kaydı tetikler.
    </p>
    <p>
      Eşik altında gönüllü kayıt, B2B satış yapıyorsanız (müşteriler KDV'nizi geri talep eder, bu nedenle etkin fiyatınız değişmez) ve işletme maliyetlerinde geri talep edilebilir girdi KDV'niz varsa genellikle buna değer.
    </p>

    <h2>Dijital hizmetler ve OSS</h2>
    <p>
      AB tüketicilerine dijital hizmetler (SaaS, e-kitaplar, çevrimiçi kurslar) satmak: KDV, sizin ülkeniz oranında değil, <em>alıcının</em> ülke oranında tahsil edilir. Bir Alman tüketiciye SaaS satan Birleşik Krallık şirketi, %20 Birleşik Krallık KDV'si değil, %19 Alman KDV'si tahsil eder.
    </p>
    <p>
      <strong>OSS (Tek Durak Noktası):</strong> bir AB ülkesinde kaydolun, tüm AB B2C dijital satışlarını kapsayan tek bir beyanname verin. Her ülkede ayrı ayrı kaydolma zorunluluğunu ortadan kaldırır. 2021'de basitleştirildi; çoğu SaaS işletmesi kullanır.
    </p>
    <p>
      <strong>IOSS</strong> (İthalat OSS): 150 € altındaki AB'ye mal ithalatı için aynı fikir.
    </p>

    <h2>Fatura gereklilikleri</h2>
    <p>
      Geçerli bir KDV faturası şunları içermelidir:
    </p>
    <p>
      İşletme adınız, adresiniz, KDV numaranız.
    </p>
    <p>
      Müşteri adı, adresi, KDV numarası (B2B için).
    </p>
    <p>
      Benzersiz fatura numarası, düzenleme tarihi, vergi noktası tarihi.
    </p>
    <p>
      Mal/hizmet açıklaması, miktar, birim fiyat.
    </p>
    <p>
      Net tutar, uygulanan KDV oranı, KDV tutarı, brüt toplam.
    </p>
    <p>
      Tersine işlem için: direktif maddesine atıfta bulunan açık ifade.
    </p>
    <p>
      Bunlardan herhangi biri eksikse, müşteriniz girdi KDV'sini geri talep edemez — düzeltilmiş bir fatura için sizi takip ederler.
    </p>

    <h2>4 yaygın KDV hatası</h2>
    <p>
      <strong>Hata 1: Yanlış oran uygulanması.</strong> İndirimli oranlı bir üründe %20 kullanmak veya standart oran uygulanması gerekirken %0 kullanmak. HMRC/vergi dairesi yeniden değerlendirme yapar ve farkı cebinizden ödersiniz (artı cezalar).
    </p>
    <p>
      <strong>Hata 2: Toplam yerine satır bazında yuvarlama.</strong> KDV genellikle toplam üzerinden hesaplanmalı ve sonunda tek bir yuvarlama yapılmalıdır. Her satırı yuvarlamak, müşteri hesaplamalarıyla uyuşmayan birikimli hatalar oluşturabilir.
    </p>
    <p>
      <strong>Hata 3: B2B faturalarında müşterinin KDV numarasının eksik olması.</strong> Geçerli numara yoksa KDV tahsil etmiş olmanız gerekirdi. Vergi dairesi yeniden değerlendirme yapar ve KDV tarafınızdan ödenir.
    </p>
    <p>
      <strong>Hata 4: Tersine işlemi "KDV dahil değil" olarak ele almak.</strong> Tersine işlem yine de beyannamenizde raporlanmalıdır (KDV göstergesi ile net satış olarak) — sadece net sıfır olur. Raporlamayı atlarsanız eksik beyanname veriyorsunuz demektir.
    </p>

    <h2>Ne zaman muhasebeci almalı vs kendi başınıza yapmalı</h2>
    <p>
      Kendi başınıza yapmak şu durumlarda uygundur: tek ülke, tek KDV oranı, yalnızca B2C, eşik altı veya biraz üstü, basit ürünler.
    </p>
    <p>
      Şu durumlarda muhasebeci alın: sınır ötesi AB satışları, standart ve indirimli oranlı ürün karışımı, OSS kaydı, kısmi muafiyetli işletmeler, KDV marj planları (ikinci el mallar, tur operatörleri) veya denetim geçiriyorsanız. KDV'yi yanlış yapmanın maliyeti, muhasebeci ücretini hızla aşar — tahsil edilmeyen KDV için kişisel sorumluluk yaygındır.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Herhangi bir ülkenin oranında KDV ekleme veya KDV çıkarma işlemini <a href="/tools/vat-calculator">KDV hesaplayıcı</a> ile yapın. Uyumlu bir KDV faturası oluşturmak için <a href="/tools/invoice-generator">fatura oluşturucu</a> ve KDV dahil ile KDV hariç fiyatlandırmada marjları onaylamak için <a href="/tools/profit-margin-calculator">kar marjı hesaplayıcı</a> ile birlikte kullanın.
    </p>
  </>
);