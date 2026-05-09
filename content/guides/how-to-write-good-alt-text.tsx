import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Alt metin, görselleri ekran okuyucular için erişilebilir, Google için aranabilir ve görsel yüklenemediğinde görünür kılan görünmez etikettir. İyi alt metin spesifik ve işlevseldir; kötü alt metin ise ya eksiktir, aşırı uzundur ya da sadece dosya adını tekrarlar. Bu rehber, alt metnin ne söylemesi gerektiğini ve söylememesi gerektiğini, görsellerin dekoratif olduğu durumları (boş alt doğrudur), karmaşık grafikler ve infografikler için alt metni, SEO etkilerini, WCAG gereksinimlerini ve erişilebilirlik denetimlerinde sıkça işaretlenen yaygın kalıpları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Alt metnin amacı</h2>
    <p>
      Alt metin üç kitleye hizmet eder:
    </p>
    <p>
      <strong>Ekran okuyucu kullanıcıları:</strong> kör ve az gören kullanıcılar, görseli görmek yerine alt metni duyar. Alt metin olmadan hiçbir şey duymazlar — veya daha kötüsü, dosya adını duyarlar.
    </p>
    <p>
      <strong>Arama motorları:</strong> Google, alt metni görsel arama ve sayfa alaka düzeyi için bir sinyal olarak kullanır.
    </p>
    <p>
      <strong>Görselleri devre dışı veya bozuk bağlantıları olan kullanıcılar:</strong>{" "}
      alt metin, görsel yüklenemediğinde yedek metin olarak görüntülenir.
    </p>
    <p>
      Her <code>&lt;img&gt;</code> etiketinin bir <code>alt</code>
      {" "}niteliğine ihtiyacı vardır. Her zaman. Dekoratif görseller için değer boş olabilir (<code>alt=&quot;&quot;</code>), ancak nitelik mevcut olmalıdır.
    </p>

    <h2>İşlevsel eşdeğerlik kuralı</h2>
    <p>
      İyi alt metin, görselin bağlam içinde ne <em>yaptığını</em> tanımlar, her görsel detayı değil.
    </p>
    <p>
      Örnek: tariflerle ilgili bir makalede kullanılan, yemek yapan bir şef görseli.
    </p>
    <p>
      <strong>Kötü:</strong> <code>alt=&quot;görsel&quot;</code> — işe yaramaz.
    </p>
    <p>
      <strong>Kötü:</strong>{" "}
      <code>alt=&quot;Beyaz şapka ve önlük giyen, gazlı ocakta tahta mutfak aletleriyle tencere karıştıran bir şefin fotoğrafı&quot;</code> — aşırı uzun.
    </p>
    <p>
      <strong>İyi:</strong>{" "}
      <code>alt=&quot;Şef ocakta makarna sosu karıştırıyor&quot;</code>
      {" "}— spesifik, işlevsel, 125 karakterin altında.
    </p>

    <h2>Dekoratif görseller — boş alt</h2>
    <p>
      Her görsel bilgi iletmez. Tamamen dekoratif görseller — arka plan desenleri, ayırıcılar, stok doldurucular —{" "}
      <code>alt=&quot;&quot;</code> olmalıdır, böylece ekran okuyucular onları atlar.
    </p>
    <p>
      <strong>Dekoratif olduğunu gösteren işaretler:</strong> görsel arka plan veya doku; yanındaki metin zaten tam olarak tanımlıyor; görsel, çevreleyen bağlam olmadan hiçbir anlam taşımıyor.
    </p>
    <p>
      <strong>Bilgilendirici olduğunu gösteren işaretler:</strong> görsel veri gösteriyor; görsel, bir şey hakkında tek bilgi kaynağı; görsel, bağlantının hedefi (örneğin, simge düğmesi).
    </p>
    <p>
      Asla <code>alt=&quot;dekoratif&quot;</code> veya{" "}
      <code>alt=&quot;aralayıcı&quot;</code> kullanmayın. Ekran okuyucular bu kelimeleri okur. Boş olan doğrudur.
    </p>

    <h2>Alt metin uzunluğu</h2>
    <p>
      <strong>125 karakter</strong> yaygın olarak belirtilen sınırdır. Bu bir HTML veya ARIA kuralı değildir — eski JAWS ekran okuyucu davranışından gelir. Bu uzunluğu hedefleyin.
    </p>
    <p>
      <strong>50 karakterin altı:</strong> basit görseller için idealdir.
    </p>
    <p>
      <strong>50-125 karakter:</strong> çoğu bilgilendirici görsel için uygundur.
    </p>
    <p>
      <strong>125 karakterin üzeri:</strong> bir{" "}
      <code>longdesc</code>, bitişik bir paragraf veya görsel konseptini bölmeyi düşünün.
    </p>

    <h2>Karmaşık görseller — çizelgeler, diyagramlar, infografikler</h2>
    <p>
      Tek bir alt niteliği bir çubuk grafiği etkili bir şekilde tanımlayamaz. Katmanlı metin kullanın:
    </p>
    <p>
      <strong>Kısa alt:</strong> görseli tanımlar —{" "}
      <code>alt=&quot;Çubuk grafik: 2020-2024 yılları arasında çeyreklere göre gelir&quot;</code>.
    </p>
    <p>
      <strong>Bitişik metin veya başlık:</strong> verileri özetler — &ldquo;Gelir, 2020'de 12 milyon dolardan 2024'te 31 milyon dolara yükseldi ve en büyük sıçrama 2022'nin üçüncü çeyreğinde gerçekleşti.&rdquo;
    </p>
    <p>
      <strong>Görselin altında veri tablosu:</strong> erişilebilirlik için, ekran okuyucuların gezinebileceği bir HTML tablosunda ham verileri ekleyin.
    </p>
    <p>
      <strong>Bağlantılı tam açıklama:</strong> görsel karmaşıksa (akış şeması, mimari diyagramı), tam açıklamanın bulunduğu bir metin sayfasına bağlantı verin.
    </p>

    <h2>Bağlantı olan görseller için alt metin</h2>
    <p>
      Bir görsel, bir <code>&lt;a&gt;</code> etiketi içindeki tek içerik olduğunda, alt metin ekran okuyucuların bağlantının hedefi olarak okuduğu şeydir.
    </p>
    <p>
      <strong>Kötü:</strong>{" "}
      <code>&lt;a href=&quot;/profil&quot;&gt;&lt;img alt=&quot;simge&quot;&gt;&lt;/a&gt;</code>
      {" "}— ekran okuyucu &ldquo;simge bağlantısı&rdquo; der.
    </p>
    <p>
      <strong>İyi:</strong>{" "}
      <code>&lt;a href=&quot;/profil&quot;&gt;&lt;img alt=&quot;Profilinizi görüntüleyin&quot;&gt;&lt;/a&gt;</code>.
    </p>
    <p>
      Simgenin kendisini değil, hedefi/eylemi tanımlayın.
    </p>

    <h2>Metin içeren görseller</h2>
    <p>
      Bir görsel çoğunlukla metinse (bir alıntı kartı, bir promosyon grafiği), alt metin metni tekrarlamalıdır.
    </p>
    <p>
      Örnek: üzerinde{" "}
      <code>&quot;%50 indirim — Cuma günü sona eriyor&quot;</code> yazan bir promosyon grafiği. Alt metin:{" "}
      <code>alt=&quot;%50 indirim — Cuma günü sona eriyor&quot;</code>. &ldquo;Metin içeren promosyon görseli&rdquo; değil.
    </p>
    <p>
      <strong>Daha da iyisi:</strong> mümkün olduğunda görsellerde metin kullanmaktan kaçının. Gerçek HTML metni indekslenebilir, çevrilebilir, yeniden boyutlandırılabilir ve alt metin hileleri olmadan erişilebilirdir.
    </p>

    <h2>Gereksizlik — bağlamı tekrarlamayın</h2>
    <p>
      Çevreleyen metin görseli zaten adlandırıyorsa, alt metin kısa kalmalıdır. Örnek:
    </p>
    <p>
      Gövde: &ldquo;Kurucumuz Jane Doe, şirketi 2018'de kurdu.&rdquo;
      <br />
      Görsel: Jane bir kürsüde.
    </p>
    <p>
      <strong>Kötü:</strong>{" "}
      <code>alt=&quot;Kurucumuz Jane Doe bir kürsüde konuşuyor&quot;</code> — gövdede zaten bulunan &ldquo;Kurucumuz Jane Doe&rdquo;yu tekrarlar.
    </p>
    <p>
      <strong>İyi:</strong>{" "}
      <code>alt=&quot;Jane bir kürsüde konuşuyor&quot;</code>. Okuyucu yeni bilgi alır.
    </p>

    <h2>Asla &ldquo;Görseli&rdquo; veya &ldquo;Resmi&rdquo; ile başlamayın</h2>
    <p>
      Ekran okuyucular zaten bunun bir görsel olduğunu bildirir. &ldquo;Köpek görseli&rdquo;, &ldquo;Görsel, köpek görseli&rdquo; olur.
    </p>
    <p>
      Ön eki atlayın. Konuyla başlayın: &ldquo;Frisbee yakalayan golden retriever&rdquo;.
    </p>

    <h2>SEO etkileri</h2>
    <p>
      Google, alt metni görsel arama sıralaması ve bir içerik sinyali olarak kullanır. Anahtar kelime dolu alt metin daha kötü sıralanır, daha iyi değil.
    </p>
    <p>
      <strong>Önce kullanıcılar için yazın.</strong> Arama motorlarının doğal dili ödüllendirmesi on yıldır tutarlıdır.
    </p>
    <p>
      <strong>İlgili anahtar kelimeler iyidir</strong> görseli doğru bir şekilde tanımladıklarında. Sayfanız ekşi mayalı ekmekle ilgiliyse ve görsel bir ekşi mayalı somun gösteriyorsa,{" "}
      <code>alt=&quot;Çatlak kabuklu ekşi mayalı ekmek&quot;</code>
      {" "}<code>alt=&quot;ekmek&quot;</code>'ten daha iyidir.
    </p>

    <h2>WCAG gereksinimleri</h2>
    <p>
      <strong>WCAG 1.1.1 Metin Dışı İçerik (Seviye A):</strong> bilgi ileten tüm metin dışı içerik, metin alternatiflerine sahip olmalıdır. Birçok ülkede yasal gerekliliktir.
    </p>
    <p>
      <strong>Otomatik test</strong> (Lighthouse, axe, WAVE) eksik alt niteliklerini yakalar ancak kaliteyi değerlendiremez. Zor durumlar için manuel inceleme gerekir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Alt'ı eksik bırakmak.</strong> Ekran okuyucular dosya adını okur. <code>DSC_00123.jpg</code>, &ldquo;D-S-C-sıfır-sıfır-bir-iki-üç-nokta-j-p-g&rdquo; olur.
    </p>
    <p>
      <strong>Dosya adını alt olarak kullanmak.</strong>{" "}
      <code>alt=&quot;hero-bg.png&quot;</code> hiç yoktan kötüdür.
    </p>
    <p>
      <strong>Aynı alt metni birçok görsele kopyalamak.</strong> Her görselin spesifik alt metne ihtiyacı vardır.
    </p>
    <p>
      <strong>Her pikseli tanımlamak.</strong> İşlevsel eşdeğerlik, foto-gerçekçilik değil.
    </p>
    <p>
      <strong>Anahtar kelime doldurmak.</strong> Google bunu yakalar; sıralamalara zarar verir.
    </p>
    <p>
      <strong>Alt yerine title kullanmak.</strong> Title niteliği araç ipucu olarak gösterilir; alt, erişilebilirlik standardıdır. İkisi bir arada bulunabilir ancak birbirinin yerine geçmez.
    </p>
    <p>
      <strong>CMS toplu yüklemelerini unutmak.</strong> WordPress, Shopify vb. boş alt alanları ekler. Düzenli olarak denetleyin.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Görselleriniz için{" "}
      <a href="/tools/alt-text-helper">alt metin yardımcısı</a> ile alt metin taslakları oluşturun. Görselin kendisini optimize etmek için{" "}
      <a href="/tools/image-format-converter">görsel format dönüştürücü</a> ve yüklemeden önce{" "}
      <a href="/tools/image-compressor">görsel sıkıştırıcı</a> ile birlikte kullanın.
    </p>
  </>
);