import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      İndirim matematiği basit görünür — 50 TL'lik bir üründe %20 indirim 10 TL eder, değil mi? Evet, ancak perakendeciler indirimleri üst üste ekler, vergiyi indirimli fiyata uygular, yüzde indirimi TL indirimiyle değiştirir, gerçekte BOGO olmayan BOGO fırsatları sunar ve hiç var olmamış MSRP fiyatlarına karşı kıyaslama yapar. Matematiği bilmek, size paraya mal olan &ldquo;tasarruflardan&rdquo; korur ve nadir görülen gerçekten iyi fırsatı yakalamanıza yardımcı olur. Bu rehber, her yaygın indirim yapısı için ihtiyacınız olan formülleri ve indirimli fiyatların sunuluşundaki psikolojik tuzakları kapsar. &ldquo;%30 indirim&rdquo; ile &ldquo;%30 artı %20 indirim&rdquo; arasındaki fark %50 değildir ve çoğu insanın parasını masada bıraktığı boşluk işte burasıdır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Yüzde indirim formülü</h2>
    <p>
      İndirimli fiyat, orijinal fiyat çarpı (1 eksi indirim oranı)na eşittir. Yani 80 TL'de %25 indirim:
    </p>
    <pre>{`indirimli = orijinal * (1 - indirim)
indirimli = 80 * (1 - 0.25) = 80 * 0.75 = 60.00`}</pre>
    <p>
      <em>Kazanılan miktar</em> için: <code>tasarruf = orijinal * indirim_orani</code>.
      Basit, ancak üst üste bindirme yapıldığında hatalar ortaya çıkar.
    </p>

    <h2>Üst üste bindirilen indirimler toplanmaz — çarpılır</h2>
    <p>
      Perakende matematiğinde en yanlış anlaşılan kural: %30 indirim artı kasada ek %20 indirim <strong>%50 indirim değildir</strong>. %44 indirimdir.
    </p>
    <pre>{`ustuste = orijinal * (1 - i1) * (1 - i2)
        = 100 * 0.70 * 0.80
        = 56.00

tasarruf = %44  (%50 değil)`}</pre>
    <p>
      Sıra önemli değildir — çarpma işlemi değişmelidir. Ancak her ek yüzde daha küçük bir tabana uygulanır, bu nedenle marjinal tasarruflar azalır.
    </p>

    <h2>TL indirimi vs yüzde indirimi</h2>
    <p>
      40 TL'lik bir üründe 20 TL indirim %50 indirimdir. 400 TL'lik bir üründe 20 TL indirim %5 indirimdir. TL indirimleri ucuz ürünlerde daha büyük, pahalı ürünlerde daha küçük görünürken, yüzde indirimleri tam tersi hissettirir. Perakendeciler daha büyük görünen çerçeveyi seçer. İkisini de gördüğünüzde aynı birime dönüştürün.
    </p>
    <pre>{`yuzde_esdeger = tl_indirimi / orijinal

125 TL'de 25 TL indirim = %20 indirim
500 TL'de 25 TL indirim = %5 indirim`}</pre>

    <h2>BOGO matematiği — genellikle %50 değil, %25 indirim</h2>
    <p>
      &ldquo;Bir tane al, ikinciye %50 indirim&rdquo; kulağa yarı fiyat gibi gelir. Öyle değildir. Bir ürün için tam fiyat, ikincisi için yarı fiyat ödersiniz — birleşik oran %25 indirimdir.
    </p>
    <pre>{`BOGO %50: 2 ürün, ödeme 1.0 + 0.5 = 1.5
          birlesik = 1.5 / 2 = ürün başına 0.75
          = her biri için %25 indirim

BOGO bedava: 2 ürün, ödeme 1.0 + 0.0 = 1.0
            birlesik = her biri için %50 indirim`}</pre>
    <p>
      BOGO yalnızca gerçekten iki ürün istiyorsanız işe yarar. İhtiyacınız olmayan ikinci bir ürünü %50 indirimle satın almak indirim değildir — bir satın almadır.
    </p>

    <h2>Vergi indirimden sonra uygulanır</h2>
    <p>
      Çoğu ABD eyaletinde satış vergisi, orijinal fiyata değil <em>indirimli</em> fiyata (gerçekte ödediğiniz tutar) uygulanır. Bu, bir indirimin aynı zamanda size vergiden de tasarruf sağladığı anlamına gelir.
    </p>
    <pre>{`orijinal = 100.00
indirim = %25
vergi   = %8

indirimli_fiyat = 100 * 0.75 = 75.00
vergi_tutari   = 75 * 0.08  = 6.00
toplam        = 81.00`}</pre>
    <p>
      Özel kupon kuralları olan birkaç eyalet, üretici kuponlarını mağaza indirimlerinden farklı şekilde ele alır. Eyaletinizi kontrol edin.
    </p>

    <h2>Orijinal fiyatı tersine hesaplama</h2>
    <p>
      Yalnızca indirimli fiyatı ve indirim yüzdesini gördüğünüzde geriye doğru çalışın:
    </p>
    <pre>{`orijinal = indirimli / (1 - indirim)

indirimli = 48, indirim = %20
orijinal = 48 / 0.80 = 60.00`}</pre>
    <p>
      Reklamı yapılan &ldquo;X TL tasarruf edin&rdquo; iddialarını doğrulamak için kullanışlıdır — matematik gerçekten işe yarıyor mu?
    </p>

    <h2>MSRP psikolojisi ve sahte çıpalar</h2>
    <p>
      &ldquo;200 TL'ydi, şimdi 120 TL&rdquo; bir fırsat gibi hissettirir. Ancak hiçbir şey 200 TL'ye satılmadıysa — MSRP hayali bir çıpa ise — o zaman 120 TL sadece fiyattır. Perakendeciler bu nedenle dava edildi ve birçok eyalet artık MSRP'nin son 90 gün içinde gerçek bir satış fiyatı olmasını şart koşuyor. Çıpaya güvenmeden önce, bir ürünün fiyat geçmişini her zaman tarayıcı uzantıları veya fiyat takip siteleri aracılığıyla kontrol edin.
    </p>

    <h2>İndirim kademeleri ve fiyat düşüş düzeni</h2>
    <p>
      Perakende indirimleri genellikle tahmin edilebilir bir düzeni izler: %25 indirim, ardından %40, ardından %50, ardından %60, ardından son. Her hafta indirim derinleşir ancak stok azalır. Oyun, bedeninizin kaç hafta dayanacağını tahmin etmektir. İyi bir kural: bugünkü fiyatı pişmanlık duymadan ödeyecekseniz satın alın; başka bir indirim için kumar oynarsanız, önce tükeneceğini varsayın.
    </p>

    <h2>Kupon kodları: site geneli vs kategori vs ürün</h2>
    <p>
      Kupon kodları, perakendeci tarafından belirlenen belirli bir sırayla uygulanır. Tipik sıra:
    </p>
    <ul>
      <li>Ürün düzeyinde indirimler (zaten gösterilen)</li>
      <li>Kategori indirimleri (ör. ayakkabılarda %20 indirim)</li>
      <li>Site geneli yüzde kodları</li>
      <li>TL indirim kodları (en son, en küçük tabana uygulanır)</li>
      <li>Vergi, ortaya çıkan ara toplama uygulanır</li>
    </ul>
    <p>
      Çoğu perakendeci sipariş başına yalnızca bir yüzde indirim koduna izin verir, bu nedenle farklı tarayıcı uzantılarından kodları üst üste bindirmek genellikle başarısız olur.
    </p>

    <h2>&ldquo;Çekici ürün&rdquo; tuzağı</h2>
    <p>
      Kapı açma fırsatları ve ön sayfa fırsatları genellikle meşru indirimlerdir — sizi içeri çekmek için özel olarak fiyatlandırılmış ürünler, böylece yanlarında tam fiyatlı ürünler satın alırsınız. Yalnızca çekici ürünü satın alırsanız kazanırsınız. 10 TL'lik çekici ürününüze tam fiyatlı 60 TL'lik bir sweatshirt eklerseniz, perakendeci kazanır. Alışveriş listeleri dürtüsel satın almaları yener.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Yüzdeleri çarpmak yerine toplamak; bahşiş veya vergiyi indirim öncesi toplam üzerinden hesaplamak; &ldquo;tasarruf&rdquo; nedeniyle satın almayı planlamadığınız bir şeyi satın almak; indirimli bir fiyatı sahte bir MSRP ile karşılaştırmak; ve 200 TL'lik bir dürtüsel satın almanın %40 indiriminin 80 TL tasarruf değil, hala 120 TL harcama olduğunu unutmak.
    </p>

    <h2>Hesaplamaları çalıştırın</h2>
    <p>
      <a href="/tools/discount-calculator">İndirim hesaplayıcı</a>
      <a href="/tools/sales-tax-calculator">Satış vergisi hesaplayıcı</a>
      <a href="/tools/percentage-calculator">Yüzde hesaplayıcı</a>
    </p>
  </>
);