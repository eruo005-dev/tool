import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Satır sonları, düz metindeki en ortama bağımlı karakterlerdir.
      Windows CRLF, Unix LF kullanır, klasik Mac ise yalnızca CR kullanırdı;
      PDF'ler, e-postalar ve kazınmış web sayfaları ise üçünü de gelişigüzel karıştırır.
      Satır sonlarını kaldırmak kulağa tek satırlık bir işlem gibi gelir ancak aslında
      neyi koruduğunuza karar vermenizi gerektirir: Paragraflar mı? Cümleler mi?
      Madde işaretli yapı mı? Toplu bir kaldırma işlemi yapıyı bozar; saf bir
      regex, üç satır sonu türünden birini kaçırır. Bu kılavuz,
      üç satır sonu türünü, hepsinde çalışan kalıpları, paragraf koruma
      stratejilerini ve temizlenmiş metni başka bir araca yeniden aktardığınızda
      ortaya çıkan tuzakları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Üç satır sonu türü</h2>
    <p>
      Yalnızca üç karakter önemlidir ve bunların kombinasyonları çoğu
      sorunun kaynağıdır:
    </p>
    <ul>
      <li><strong>LF</strong> (<code>\n</code>, U+000A) &mdash; Unix, macOS, Linux</li>
      <li><strong>CRLF</strong> (<code>\r\n</code>, U+000D U+000A) &mdash; Windows, çoğu e-posta, HTTP</li>
      <li><strong>CR</strong> (<code>\r</code>, U+000D) &mdash; klasik Mac, artık nadir ancak bazı dışa aktarımlarda hala var</li>
    </ul>
    <p>
      Windows kaynaklı bir e-postadan kazınıp bir Mac metin düzenleyicisinden
      kaydedilen bir dosya her üçünü de içerebilir.
    </p>

    <h2>Saf yaklaşım neden başarısız olur</h2>
    <p>
      <code>text.replace(/\n/g, &rdquo; &rdquo;)</code> yalnızca LF'yi hedefler. Bir
      CRLF dosyasında bu, her satırın arkasında başıboş bir CR bırakır; bu da
      bazı düzenleyicilerde garip bir kutu olarak görünür veya imleç taşıma
      davranışına neden olur.
    </p>
    <pre>{`girdi (CRLF):  "satır 1\\r\\nsatır 2\\r\\n"
/\\n/g sonrası:    "satır 1\\r satır 2\\r "
                        ^        ^ başıboş CR'ler`}</pre>

    <h2>Evrensel satır sonu regex'i</h2>
    <p>
      Her üç türü de herhangi bir sırayla eşleştirin:
    </p>
    <pre>{`/\\r\\n|\\r|\\n/g`}</pre>
    <p>
      Bu, CRLF'yi bir birim olarak eşleştirir (böylece çift değiştirme yapmazsınız),
      ardından yalın CR'yi ve ardından yalın LF'yi eşleştirir. Sıra önemlidir
      &mdash; CRLF'yi ilk sıraya koyun.
    </p>

    <h2>Tek satıra düzleştirme</h2>
    <p>
      Her satır sonunu bir boşlukla değiştirin, ardından boşluk dizilerini
      daraltın:
    </p>
    <pre>{`metin
  .replace(/\\r\\n|\\r|\\n/g, " ")
  .replace(/\\s+/g, " ")
  .trim()`}</pre>
    <p>
      Bunu, bir PDF'den bir kelime işlemciye metin kopyalarken, her görsel
      satırın yumuşak bir satır sonu olduğu ve akıcı bir düzyazı istediğinizde
      kullanın.
    </p>

    <h2>Paragrafları koru, içlerini düzleştir</h2>
    <p>
      PDF'den kopyalama durumlarının çoğu, paragrafların korunmasını ancak tek
      sarmaların düzleştirilmesini ister. Paragraf sonlarını (arka arkaya iki
      veya daha fazla satır sonu) algılayın, tek satır sonlarını bir boşlukla
      değiştirin, ardından paragrafları geri yükleyin.
    </p>
    <pre>{`metin
  .replace(/\\r\\n?/g, "\\n")          // LF'ye normalleştir
  .replace(/\\n{2,}/g, "\\u0000")     // paragraflar için geçici işaretçi
  .replace(/\\n/g, " ")              // tek satır sonlarını düzleştir
  .replace(/\\u0000/g, "\\n\\n")      // paragrafları geri yükle`}</pre>

    <h2>Önce normalleştir, sonra işlem yap</h2>
    <p>
      En temiz strateji: <strong>her zaman</strong> önce LF'ye normalleştirin.
      Bu, sonraki her kuralı basitleştirir.
    </p>
    <pre>{`const lf = metin.replace(/\\r\\n?/g, "\\n");`}</pre>
    <p>
      Normalleştirmeden sonra, eşleştirmeniz gereken tek satır sonu
      <code>\n</code> olur.
    </p>

    <h2>Madde işaretli ve numaralı listeleri koruma</h2>
    <p>
      Madde işaretli liste öğeleri, bir satırın başında &ldquo;- öğe&rdquo; veya &ldquo;1.
      öğe&rdquo; gibi görünür. Bunları düzleştirmek listeyi bozar. Düzleştirmeden
      önce bunları algılayın:
    </p>
    <pre>{`// Madde işareti kalıplarından önce gelen satır sonlarını düzleştirme
metin.replace(/\\n(?!\\s*(?:[-*&bull;]|\\d+\\.))/g, " ")`}</pre>
    <p>
      Bu, madde işareti satırlarından önceki satır sonlarını korur ve diğer her
      yerde düzleştirir. Karakter sınıfını madde işareti stilinize göre ayarlayın.
    </p>

    <h2>PDF'lerden yumuşak sarma işleme</h2>
    <p>
      PDF'ler sık sık bir kısa çizgi ile kelimenin ortasında bölünür. Yeniden
      akış için kısa çizgiyi ve satır sonunu kaldırın:
    </p>
    <pre>{`metin.replace(/-\\n/g, "")   // kısa çizgiyi kaldır
    .replace(/\\n/g, " ")`}</pre>
    <p>
      Gerçek kısa çizgili bileşiklere dikkat edin (&ldquo;yeniden-\nfaktör&rdquo;
      &ldquo;yenidenfaktör&rdquo; olur, oysa siz &ldquo;yeniden-faktör&rdquo;
      istemiştiniz). Bir sözlük olmadan düzeltmesi zordur; genellikle kabul edilebilir.
    </p>

    <h2>Geri dönüş: tersine çevrilebilir olun</h2>
    <p>
      Temizliği geri almanız gerekirse, orijinalin bir kopyasını saklayın. Satır
      sonu kaldırma işlemi güvenilir bir şekilde tersine çevrilebilir değildir
      &mdash; &ldquo;cümle sonu.\nSonraki cümle&rdquo;yi &ldquo;cümle sonu.
      Sonraki cümle&rdquo;ye daralttığınızda, orijinal satır sonunu kurtaramazsınız.
      Metninizi her adımda sürümleyin.
    </p>

    <h2>Birçok dosyada toplu düzleştirme</h2>
    <p>
      Toplu işler için bir döngüde normalleştirin ve temizleyin:
    </p>
    <pre>{`# bash tek satırlık
for f in *.txt; do
  tr -d '\\r' &lt; "$f" | tr '\\n' ' ' &gt; "\${f%.txt}.flat"
done`}</pre>
    <p>
      Veya Python'da pathlib + io ile. Her zaman önce yeni dosya adlarına
      yazın, farkı alın, ardından değiştirin.
    </p>

    <h2>Satır sonlarını ne zaman korumalı</h2>
    <p>
      Bazı içerikler gerçekten satır sonlarının korunmasını gerektirir: kod,
      şiir, adresler, CSV tarzı veriler, sohbet dökümleri. Metin, satır
      düzeninde kodlanmış herhangi bir yapısal anlam taşıyorsa, kaldırmadan
      önce iki kez düşünün. Bir düzleştirme işlemi yıkıcıdır.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Yalnızca <code>\n</code>'yi değiştirip arkada başıboş <code>\r</code>
      karakterleri bırakmak. Paragrafları düzleştirip tüm yapıyı kaybetmek.
      Yumuşak sarma kısa çizgilerini, gerçek bileşik kelimeleri de ele almadan
      kaldırmak. Önce normalleştirmeyi unutup her satır sonu türü için üç ayrı
      regex yazmak. Ve yedekleme yapmadan orijinal dosya üzerinde işlem yapmak.
    </p>

    <h2>Sayıları çalıştır</h2>
    <p>
      <a href="/tools/line-break-remover">Satır sonu kaldırıcı</a>
      <a href="/tools/whitespace-remover">Boşluk kaldırıcı</a>
      <a href="/tools/remove-duplicate-lines">Yinelenen satırları kaldır</a>
    </p>
  </>
);