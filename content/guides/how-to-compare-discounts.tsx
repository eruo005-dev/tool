import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      &ldquo;%40 indirim artı ekstra %20&rdquo; %60 indirim değildir. &ldquo;Bir tane alana bir tane bedava&rdquo; her iki ürün için %50 indirim anlamına gelmez, ikisini de istemiyorsanız. Perakende indirim dili, gerçek tasarruftan daha büyük görünecek şekilde optimize edilmiştir ve gerçek fiyatı ortaya çıkaran matematik neredeyse hiçbir zaman etikette yer almaz. Bu rehber, kümülatif indirimleri, BOGO fırsatlarını ve yüzde indirim artı kupon kombinasyonlarını nasıl fiyatlandıracağınızı kapsar, böylece gerçek bir fırsatı yuvarlatılmış olandan ayırt edebilirsiniz.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Tek indirim temelleri</h2>
    <p>
      Önce, kolay durum. 120$'lık bir üründe %30 indirim:{" "}
      <code>$120 × (1 − 0,30) = $84</code>. 36$ tasarruf ettiniz. Diğer tüm indirim senaryoları, birden çok kez uygulanan bu temel üzerine inşa edilir.
    </p>

    <h2>Kümülatif indirimler toplanmaz — bileşik etki yapar</h2>
    <p>
      &ldquo;%40 indirim, artı kasada ekstra %20&rdquo; %60 gibi görünür, %60 gibi hissettirir ve %60 değildir. İndirimler toplamsal değil, çarpımsal olarak birikir.
    </p>
    <p>
      100$ ile başlayın. %40 indirim → 60$. Ardından buna %20 indirim → 60$ × 0,80 = 48$. 40$ değil, 48$ ödediniz. Etkili indirim{" "}
      <code>1 − (0,60 × 0,80) = 1 − 0,48 = %52</code>'dir.
    </p>
    <p>
      Kümülatif yüzde indirimleri için genel formül:{" "}
      <code>Etkili indirim = 1 − (1 − d₁)(1 − d₂)(1 − d₃)…</code>.
      Sıra matematiksel olarak önemli değildir — 100$ × 0,80 × 0,60, 100$ × 0,60 × 0,80 ile aynıdır — ancak kasa sistemleri bunları genellikle belirli bir sırayla uygular, bu nedenle <em>görüntülenen</em> ara fiyat sıraya bağlıdır, ancak nihai toplam bağlı değildir.
    </p>

    <h2>Yüzde indirim vs dolar indirim — ne zaman hangisini seçmeli</h2>
    <p>
      50$'lık bir üründe 20$ indirim %40 indirimdir. 200$'lık bir üründe 20$ indirim %10'dur. Dolar bazlı kuponlar daha ucuz ürünlerde daha değerlidir; yüzde indirimleri pahalı ürünlerde daha değerlidir. Bir mağaza seçmenize izin veriyorsa, başabaş noktası <code>dolar_indirimi / etiket_fiyatı = yüzde_indirimi</code> olduğu yerdir. Bunun altında dolar indirimini alın; üstünde yüzde indirimini alın.
    </p>

    <h2>BOGO ve miktar bazlı fırsatlar</h2>
    <p>
      40$'lık bir üründe &ldquo;Bir tane al, ikinciyi %50 indirimli al&rdquo;: 40$ + 20$ = 60$ ödersiniz. Ürün başına etkili fiyat 30$ veya her biri için %25 indirimdir. %50 değil.
    </p>
    <p>
      30$'lık bir üründe &ldquo;Bir tane alana bir tane bedava&rdquo;: 30$'a iki tane = her biri 15$, %50 etkili indirim — ancak yalnızca iki tane almayı planlıyorsanız. Yalnızca bir tane istiyorsanız, ihtiyacınız olan şeydeki etkili indirim %0'dır; tam fiyat ödediniz.
    </p>
    <p>
      Etiket fiyatı her biri 12,99$ iken &ldquo;3 tane 30$&rdquo;: normalde 38,97$, şimdi 30$, %23 etkili. Bu format genellikle hissettirdiğinden daha zayıf bir fırsattır, çünkü etiket fiyatı yüksek belirlenmiştir.
    </p>

    <h2>Vergi öncesi vs vergi sonrası indirim sırası</h2>
    <p>
      Çoğu ABD satış vergisi, indirimlerden <em>sonra</em> uygulanır, önce değil. 100$'lık ürün, %20 indirim, %8 satış vergisi: 100$ × 0,80 = 80$, ardından 80$ × 1,08 = 86,40$. Bir kupon, vergi faturanızı orantılı olarak azaltır.
    </p>
    <p>
      Hediye kartları ters yönde çalışır — vergiden <em>sonra</em> uygulanır, çünkü fiyat indirimi değil, ödeme olarak kabul edilirler. 100$'lık ürün, %8 vergi = 108$, eksi 20$ hediye kartı = cepten 88$. 100$ üzerinden tam vergi ödediniz.
    </p>

    <h2>İndirim matematiği — &ldquo;son indirim&rdquo; yine de matematik hak ediyor</h2>
    <p>
      &ldquo;89,99$, şimdi 49,99$, ekstra %40 indirim&rdquo; olarak işaretlenmiş bir ürün <code>$49,99 × 0,60 = $29,99</code>'a gelir. Bu, orijinal 89,99$'dan %67 etkili indirimdir. 60$'da istediyseniz buna değer; dürtü yüzdenin kendisinden geldiyse değmez.
    </p>
    <p>
      Tuzak: çıpalama. Mağazalar, daha sonraki bir &ldquo;%70 indirim&rdquo;in kahramanca görünmesi için başlangıç fiyatlarını kasıtlı olarak yüksek belirler. Güvenmeniz gereken sayı, indirim yüzdesi değil, <em>kapıdan çıkış fiyatıdır</em>.
    </p>

    <h2>Birim fiyat karşılaştırmaları</h2>
    <p>
      16 oz şişe 4,49$ vs 24 oz 5,99$: oz başına fiyatlar 0,281$ ve 0,250$'dır. Büyük olan, ons başına %11 daha ucuzdur. Market raf etiketleri bunu genellikle zaten gösterir; çevrimiçi alışveriş genellikle göstermez, bu yüzden kendiniz hesaplayın.{" "}
      <a href="/tools/discount-calculator">İndirim hesaplayıcı</a>, tam olarak bu karşılaştırma için bir birim fiyat modu içerir.
    </p>

    <h2>Abonelik ve paket matematiği</h2>
    <p>
      Aylık 10$'lık bir hizmette &ldquo;Yıllık fatura ile %20 tasarruf edin&rdquo;: nominal 120$, indirimli 96$ — yılda 24$ tasarruf. Bu tasarrufun gerçek dünya değeri, 12. ayda hala kullanma olasılığınıza bağlıdır. Yıllık kayıp oranı %30 ise, beklenen tasarruf yılda 24$ × 0,7 = 16,80$'dır, tam 24$ değil.
    </p>
    <p>
      Paket fiyatlandırması (&ldquo;3 ürünü 50$'a paketleyin, her biri ayrı ayrı 20$&rdquo;) yalnızca 3'ünü de istiyorsanız paket indirimine (burada %17) değer. Üçüncüyü sırf paket yüzünden satın almak, aksi takdirde satın almayacağınız bir şeyde %0 tasarruftur.
    </p>

    <h2>30 saniyelik indirim denetimi</h2>
    <p>
      Kasadan önce: sepeti etiket fiyatından toplayın. Kapıdan çıkış fiyatınızı (tüm indirimler ve vergiden sonra) yazın. Etkili yüzde indirimini bulmak için bölün. Reklamı yapılan başlık sayısından düşükse, pazarlama sisi için ödeme yapıyorsunuz. Eşleşiyorsa, fırsat belirtildiği gibidir.
    </p>
    <p>
      <a href="/tools/discount-calculator">İndirim hesaplayıcı</a>, kümülatif yüzde indirimlerini, dolar bazlı kuponları, BOGO oranlarını, vergi öncesi/sonrası sırasını ve birim fiyat karşılaştırmalarını tek seferde halleder — hızlı mantık kontrolleri için <a href="/tools/percentage-calculator">yüzde hesaplayıcı</a> ve birden çok eyalette alışveriş yaparken <a href="/tools/sales-tax-calculator">satış vergisi hesaplayıcı</a> ile birlikte kullanın.
    </p>
  </>
);