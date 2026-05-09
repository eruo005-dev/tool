import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Dedup, dünyadaki en basit metin işlemi gibi görünür: birden fazla kez geçen satırları kaldırmak. Gerçekte &ldquo;yinelenen&rdquo; bir spektrumdur. Baştaki boşluk anlamlı mı? Büyük/küçük harf fark eder mi? İlk geçen mi kazanmalı, yoksa sonuncu mu? Sondaki boşluklar iki satırı farklı mı yoksa aynı mı yapar? Peki ya belleğe sığmayacak 10 GB'lık bir dosya? Doğru cevap tamamen neyi temizlediğinize bağlıdır &mdash; e-posta listeleri, günlük dosyaları, kaynak kodu, alışveriş listeleri &mdash; ve yanlış olanı seçmek, ihtiyacınız olan veriyi sessizce atabilir. Bu kılavuz, her dedup kararını ve her birini ele alan kalıpları adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Tam vs normalleştirilmiş dedup</h2>
    <p>
      Tam dedup, baytları karşılaştırır. Normalleştirilmiş dedup, bir dönüşümden sonra karşılaştırma yapar &mdash; küçük harf, kırpma, boşlukları daraltma vb. Gerçek dünya listeleri neredeyse her zaman bir miktar normalleştirme gerektirir, çünkü gerçek dünya kaynakları tutarsız biçimlendirmeye sahiptir.
    </p>
    <pre>{`girdiler:
  "user@example.com"
  "User@Example.com"
  "  user@example.com  "
  "user@example.com\\r"

tam dedup:       4 satır (hepsi farklı)
normalleştirilmiş dedup:  1 satır`}</pre>

    <h2>Büyük/küçük harf duyarsız dedup</h2>
    <p>
      E-postalar, kullanıcı adları, alan adları için yaygındır. Küçük harfe çevirerek bir anahtar oluşturun, çıktı için orijinali koruyun:
    </p>
    <pre>{`const seen = new Set();
const result = [];
for (const line of lines) {
  const key = line.toLowerCase();
  if (!seen.has(key)) {
    seen.add(key);
    result.push(line);   // orijinal büyük/küçük harfi koru
  }
}`}</pre>

    <h2>Kırpılmış karşılaştırma</h2>
    <p>
      Baştaki ve sondaki boşluklar, aynı içeriği sessizce farklılaştırır. Karşılaştırma için kırpın, çıktı için hangi sürümü tercih ederseniz onu koruyun:
    </p>
    <pre>{`const key = line.trim();`}</pre>
    <p>
      Gerçekten agresif eşleştirme için, iç boşlukları da daraltın:
    </p>
    <pre>{`const key = line.replace(/\\s+/g, " ").trim();`}</pre>

    <h2>İlkini koru vs sonuncuyu koru</h2>
    <p>
      İki satır eşleştiğinde, hangi kopyayı saklarsınız? Varsayılan ilkini korumadır: listeyi dolaşın, gördüğünüz her şeyi atlayın. Sonuncuyu korumak ikinci bir geçiş gerektirir:
    </p>
    <pre>{`// sonuncuyu koru: DAHA SONRAKİ geçeni sakla
const map = new Map();
lines.forEach((line, i) =&gt; map.set(keyOf(line), { line, i }));
const result = [...map.values()]
  .sort((a, b) =&gt; a.i - b.i)
  .map(x =&gt; x.line);`}</pre>
    <p>
      İlkini korumak günlükler için doğrudur (en erken kayıt önemlidir). Sonuncuyu korumak değişiklik akışları için doğrudur (son durum kazanır).
    </p>

    <h2>Benzersiz vs tüm yinelenenler</h2>
    <p>
      Bir yineleme kaldırma işi için üç olası çıktı:
    </p>
    <ul>
      <li><strong>Benzersiz</strong> &mdash; her farklı satır bir kez</li>
      <li><strong>Yalnızca ilk geçen</strong> &mdash; sırayı korur</li>
      <li><strong>Yalnızca yinelenenler</strong> &mdash; birden fazla kez geçen satırlar (ters yön)</li>
    </ul>
    <pre>{`// &gt; 1 kez geçen satırlar
const counts = new Map();
for (const line of lines) {
  counts.set(line, (counts.get(line) || 0) + 1);
}
const dupes = [...counts.entries()]
  .filter(([_, n]) =&gt; n &gt; 1)
  .map(([line]) =&gt; line);`}</pre>

    <h2>Unix: sort | uniq</h2>
    <p>
      Klasik tek satırlık. Ancak not: <code>uniq</code> yalnızca <em>ardışık</em> yinelenenleri kaldırır, bu yüzden önce sıralarsınız.
    </p>
    <pre>{`sort input.txt | uniq &gt; output.txt

sort -f input.txt | uniq -i &gt; output.txt   # büyük/küçük harf duyarsız
sort input.txt | uniq -c &gt; counts.txt      # sayılarla birlikte
sort input.txt | uniq -d &gt; dupes.txt       # yalnızca yinelenenler`}</pre>

    <h2>awk ile sırayı korumak</h2>
    <p>
      Sıralama, düzeni bozar. <code>awk</code>, orijinal sırayı koruyarak yineleme kaldırır:
    </p>
    <pre>{`awk '!seen[$0]++' input.txt &gt; output.txt`}</pre>
    <p>
      Püf noktası: <code>seen[$0]++</code> ilk geçişte 0'dır (yanlış, yani <code>!</code> = doğru, yazdır) ve sonrasında &ge; 1 (doğru, yani <code>!</code> = yanlış, atla).
    </p>

    <h2>Büyük dosyalar: <a href="/learn/stream">akış</a> dedup</h2>
    <p>
      Bellek içi <code>Set</code> O(N) alan gerektirir. RAM'den büyük dosyalar için iki seçeneğiniz var:
    </p>
    <ul>
      <li>
        Harici sıralama + uniq &mdash; disk tabanlı, her boyut için çalışır, O(N log N) zaman
      </li>
      <li>
        Bloom filtresi &mdash; sabit alan, olasılıksal, nadir yinelenenleri kaçırabilir veya benzersizleri yinelenen olarak değerlendirebilir
      </li>
    </ul>
    <pre>{`# GNU sort otomatik olarak diske taşar
sort -u --parallel=4 -S 2G -T /tmp huge.txt &gt; dedup.txt`}</pre>

    <h2>Uzun satırlar için hash tabanlı anahtarlar</h2>
    <p>
      Satırlar çok uzunsa (&gt;1&nbsp;KB her biri) ve milyonlarcası varsa, tam satırları bir <code>Set</code> içinde saklamak bellek israfıdır. Bunun yerine bir hash saklayın:
    </p>
    <pre>{`import crypto from "crypto";
const seen = new Set();
for (const line of lines) {
  const h = crypto.createHash("sha1").update(line).digest("hex");
  if (!seen.has(h)) { seen.add(h); out.push(line); }
}`}</pre>
    <p>
      İnsan metninde SHA-1 çakışmaları yok denecek kadar nadirdir. Düşmanca girdiler için SHA-256 kullanın.
    </p>

    <h2>Sayı sütunu ile dedup</h2>
    <p>
      Bazen yinelenen kaldırılmış listeyi <em>her birinin kaç kez geçtiğiyle</em> birlikte istersiniz. Frekans analizi için kullanışlıdır:
    </p>
    <pre>{`sort input.txt | uniq -c | sort -rn | head -20`}</pre>
    <p>
      <code>-c</code> bayrağı sayıları öne ekler; <code>sort -rn</code> en yüksekleri başa koyar.
    </p>

    <h2>Anahtar sütuna göre CSV dedup</h2>
    <p>
      Tablo verileri için &ldquo;yinelenen&rdquo; genellikle &ldquo;anahtar sütunda aynı değer&rdquo; anlamına gelir, tam satır eşleşmesi değil. CSV uyumlu bir araç kullanın:
    </p>
    <pre>{`# csvkit
csvsort -c email input.csv | uniq -f2   # yaklaşık

# veya daha iyisi: bir betiğe yükleyin ve sütuna göre yineleme kaldırın
import csv
seen = set()
with open("in.csv") as f, open("out.csv", "w") as g:
    r = csv.DictReader(f)
    w = csv.DictWriter(g, r.fieldnames)
    w.writeheader()
    for row in r:
        if row["email"].lower() not in seen:
            seen.add(row["email"].lower())
            w.writerow(row)`}</pre>

    <h2>Yaygın hatalar</h2>
    <p>
      <code>uniq</code>'in önce sıralamadan yineleme kaldırdığını varsaymak. Kırpmadan ham satırları karşılaştırmak ve aslında yalnızca boşluk varyantları olan %80 &ldquo;yinelenen&rdquo; hayatta kalanı elde etmek. Sıra önemliyken sırayı kaybetmek. Sorun için yanlış kopyayı (ilk vs son) atmak. 20&nbsp;GB'lık bir dosyada bellek içi dedup çalıştırmak ve çökmek. Ve yalnızca bir sütun önemliyken tam satırlarda yineleme kaldırmak.
    </p>

    <h2>Sayıları çalıştır</h2>
    <p>
      <a href="/tools/remove-duplicate-lines">Yinelenen satırları kaldır</a>
      <a href="/tools/text-sorter">Metin sıralayıcı</a>
      <a href="/tools/line-counter">Satır sayacı</a>
    </p>
  </>
);