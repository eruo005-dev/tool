import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      TOML (Tom&rsquo;s Obvious Minimal Language), JSON'dan daha okunabilir ve YAML'dan daha az boşluk duyarlı olacak şekilde tasarlanmış bir yapılandırma dosyası formatıdır.{" "}
      <code>Cargo.toml</code>, <code>pyproject.toml</code>,{" "}
      <code>hugo.toml</code> ve diğer birçok proje yapılandırmasında kullanılır. Bu
      kılavuz, TOML sözdizimini (skalerler, tablolar, diziler, satır içi), JSON ve YAML ile karşılaştırmasını, sürüm farklılıklarını (0.5 vs 1.0), yaygın tuzakları (tarih-saatler, iç içe tablolar, noktalı ve başlık tablolarının karıştırılması) ve TOML'yi alternatiflerine karşı ne zaman seçmeniz gerektiğini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Temel bilgiler</h2>
    <pre>
{`title = "Örnek"
port = 8080
enabled = true

[server]
host = "localhost"
timeout = 30

[[plugins]]
name = "auth"
version = "1.2.0"

[[plugins]]
name = "logging"
version = "0.9.0"`}
    </pre>
    <p>
      En üst düzey bir tablodur. Köşeli parantez içindeki bölümler alt tablolardır. Çift köşeli parantezler <code>[[...]]</code> tablo dizileridir.
    </p>

    <h2>Skaler türler</h2>
    <p>
      <strong>String:</strong> çift tırnaklı (kaçış karakterleriyle) veya tek tırnaklı (ham, kaçış yok):{" "}
      <code>&quot;merhaba&quot;</code>,{" "}
      <code>&apos;ham\string&apos;</code>.
    </p>
    <p>
      <strong>Çok satırlı string:</strong> üçlü tırnak —{" "}
      <code>&quot;&quot;&quot;...&quot;&quot;&quot;</code> veya{" "}
      <code>&apos;&apos;&apos;...&apos;&apos;&apos;</code>.
    </p>
    <p>
      <strong>Tam sayı:</strong>{" "}
      <code>42</code>, <code>-17</code>, <code>0xdeadbeef</code>
      {" "}(onaltılı), <code>0o777</code> (sekizli), <code>0b1010</code>
      {" "}(ikili).
    </p>
    <p>
      <strong>Ondalıklı sayı:</strong> <code>3.14</code>, <code>1e10</code>,{" "}
      <code>inf</code>, <code>nan</code>.
    </p>
    <p>
      <strong>Mantıksal:</strong> <code>true</code>,{" "}
      <code>false</code>. Sadece küçük harf.
    </p>
    <p>
      <strong>Tarih-saat (RFC 3339):</strong>{" "}
      <code>2026-04-22T10:30:00Z</code>, <code>2026-04-22</code>
      {" "}(tarih), <code>10:30:00</code> (yerel saat).
    </p>
    <p>
      <strong>Dizi:</strong>{" "}
      <code>[1, 2, 3]</code>,{" "}
      <code>[&quot;a&quot;, &quot;b&quot;]</code>. TOML 0.5 ve öncesinde homojen; 1.0+ sürümünde karışık türde dizilere izin verilir.
    </p>

    <h2>Tablolar</h2>
    <p>
      Tablo, bir dizi anahtar/değer çiftidir. Bildirmenin üç yolu vardır:
    </p>
    <p>
      <strong>Başlık tablosu:</strong>
    </p>
    <pre>
{`[server]
host = "localhost"
port = 8080`}
    </pre>
    <p>
      <strong>Satır içi tablo:</strong>
    </p>
    <pre>
{`server = { host = "localhost", port = 8080 }`}
    </pre>
    <p>
      <strong>Noktalı anahtarlar:</strong>
    </p>
    <pre>
{`server.host = "localhost"
server.port = 8080`}
    </pre>
    <p>
      Üçü de aynı mantıksal yapıyı üretir. Okunabilirlik için dosya başına bir stil seçin.
    </p>

    <h2>İç içe tablolar</h2>
    <pre>
{`[database]
url = "postgres://..."

[database.pool]
min = 2
max = 10`}
    </pre>
    <p>
      <code>database.pool</code> başlığı iç içe tabloyu adlandırır. Noktalı anahtar stili de çalışır:
    </p>
    <pre>
{`[database]
url = "postgres://..."
pool.min = 2
pool.max = 10`}
    </pre>

    <h2>Tablo dizileri</h2>
    <p>
      Çift köşeli parantez başlıkları, her biri kendi tablosu olan dizi öğelerini tanımlar:
    </p>
    <pre>
{`[[products]]
name = "Widget"
price = 9.99

[[products]]
name = "Gadget"
price = 14.99`}
    </pre>
    <p>
      Eşdeğer JSON:{" "}
      <code>{`"products":[{"name":"Widget",...},{"name":"Gadget",...}]`}</code>.
    </p>

    <h2>TOML vs JSON vs YAML</h2>
    <p>
      <strong>JSON:</strong> makineden makineye. Ayrıntılı, yorum yok, yapılandırma için kötü.
    </p>
    <p>
      <strong>YAML:</strong> insan dostu ancak boşluk duyarlı. İnce hatalar (<code>no</code> ifadesinin false olarak ayrıştırılması; tırnaksız{" "}
      <code>1.0</code> ifadesinin ondalıklı sayıya dönüşmesi). Çapalar ve referanslar güç katar ancak kafa karışıklığına yol açar.
    </p>
    <p>
      <strong>TOML:</strong> yapılandırma odaklı. Boşluk kuralları yok. Yorumlar desteklenir. Türler açıktır. YAML'dan daha az ifade gücüne sahiptir (birleştirme, referans yok).
    </p>
    <p>
      <strong>Genel kural:</strong> Proje yapılandırması için TOML, API yükleri ve makine tarafından oluşturulan veriler için JSON, çapa/geçersiz kılma ihtiyacınız olduğunda veya mevcut bir ekosistemle (Kubernetes, Ansible) uyum sağlamanız gerektiğinde YAML kullanın.
    </p>

    <h2>TOML sürüm farklılıkları</h2>
    <p>
      <strong>0.5 → 1.0:</strong> 1.0, karışık türde dizilere izin verir, tarih-saat işlemeyi netleştirir, yeniden bildirim kurallarını sıkılaştırır.
    </p>
    <p>
      <strong>Ayrıştırıcı uyumluluğu:</strong> eski ayrıştırıcılar, karışık diziler kullanan 1.0 dosyalarını reddedebilir. TOML paylaşırken 1.0'ı hedefleyin ve belgeleyin.
    </p>
    <p>
      <strong>Ayrıştırıcı sürümünü kontrol edin:</strong>{" "}
      <code>toml_edit</code> (Rust), <code>tomli</code> (Python 3.11+ standart kütüphanesi), <code>@iarna/toml</code> (JS). Karışık diziler kullanıyorsanız ayrıştırıcınızın 1.0'ı desteklediğini kontrol edin.
    </p>

    <h2>Yorumlar</h2>
    <pre>
{`# tam satır yorumu
port = 8080  # satır içi yorum`}
    </pre>
    <p>
      <code>#</code> ile başlar. Çok satırlı yorum sözdizimi yoktur. Yorumlar, yuvarlak yol ayrıştırıcısı (ör. <code>toml_edit</code>) kullanmadığınız sürece çoğu ayrıştırıcı tarafından korunmaz.
    </p>

    <h2>Yuvarlak yol koruması</h2>
    <p>
      Çoğu TOML ayrıştırıcısı yorumları atar ve anahtarları yeniden sıralar. Biçimlendirmeyi korurken yapılandırma dosyalarını düzenlemesi gereken araçlar için (Cargo'nun <code>Cargo.toml</code>'u düzenlemesi gibi), bir yuvarlak yol ayrıştırıcısı kullanın: Rust'ta <code>toml_edit</code>, Python'da <code>tomlkit</code>.
    </p>

    <h2>Yaygın tuzaklar</h2>
    <p>
      <strong>Tabloları yeniden tanımlama:</strong> <code>[server]</code>'ı iki kez bildiremezsiniz. İkinci başlık = hata.
    </p>
    <p>
      <strong>Aynı yol için başlık ve noktalı bildirimleri karıştırma:</strong>
    </p>
    <pre>
{`[server]
host = "x"
server.port = 8080  # hata — server zaten bildirildi`}
    </pre>
    <p>
      <strong>Tarih-saat saat dilimi:</strong> ofsetli tarih-saatler ile yerel tarih-saatler önemlidir. <code>2026-04-22T10:30:00Z</code> UTC'dir;{" "}
      <code>2026-04-22T10:30:00</code> ofsetsizdir (yerel saat).
    </p>
    <p>
      <strong>Onaltılı/sekizli/ikili yalnızca tam sayılar için:</strong> ondalıklı sayılar için değil.
    </p>
    <p>
      <strong>Ham stringler tek tırnak içeremez:</strong>{" "}
      kaçış karakterli temel stringler veya çok satırlı literal kullanın.
    </p>

    <h2>TOML'den JSON'a ve geri</h2>
    <p>
      TOML, JSON'a temiz bir şekilde dönüşür (TOML kesinlikle daha az ifade gücüne sahiptir — yorumlar ve bazı sayı biçimleri kaybolur). JSON'dan TOML'ye dönüşüm bir durumda kayıplıdır: JSON, tam sayı ve ondalıklı sayıyı ayırt etmez, bu nedenle <code>1</code>, dönüştürücüye bağlı olarak <code>1</code> veya <code>1.0</code> olarak yuvarlak yol yapabilir.
    </p>
    <p>
      Çoğu araç (dönüştürücümüz dahil) TOML'yi bir iç nesneye ayrıştırır, ardından JSON'a serileştirir. Çoğu veri için temizdir; tarih-saatler özel işlem gerektirebilir.
    </p>

    <h2>TOML ne zaman seçilmeli</h2>
    <p>
      <strong>Proje yapılandırması:</strong>{" "}
      <code>Cargo.toml</code>, <code>pyproject.toml</code> onu fiili bir standart haline getirdi.
    </p>
    <p>
      <strong>Araç yapılandırması:</strong> <code>netlify.toml</code>,{" "}
      <code>hugo.toml</code>, <code>black.toml</code>.
    </p>
    <p>
      <strong>İnsanların düzenlediği yapılandırma:</strong> JSON'dan daha net, YAML'dan daha az ısırıcı.
    </p>
    <p>
      <strong>Şunlar için kaçının:</strong> çapa/referans gerektiren her şey, derin iç içe geçme (YAML genellikle daha iyidir) veya ikili veri (stringlere base64 eklemek çirkinleşir).
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>YAML tarzı liste girintisi kullanmak.</strong> TOML dizileri kısa çizgi değil, köşeli parantez kullanır.
    </p>
    <p>
      <strong>String değerlerde tırnak işaretlerini unutmak.</strong> Tırnaksız stringler, çıplak anahtarlar dışında geçersizdir.
    </p>
    <p>
      <strong>Bir yol için noktalı ve başlık bildirimlerini karıştırmak.</strong>{" "}
      Ayrıştırıcı hatası.
    </p>
    <p>
      <strong>TOML tarihlerini string olarak ele almak.</strong> Bunlar birinci sınıf tarih-saat türleridir. Ayrıştırılmış tarih-saat nesnesini kullanın.
    </p>
    <p>
      <strong>Yuvarlak yol biçimlendirmesi beklemek.</strong> Çoğu ayrıştırıcı yeniden biçimlendirir. Biçimlendirme önemliyse yuvarlak yol ayrıştırıcısı kullanın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      TOML'yi anında JSON'a dönüştürmek için{" "}
      <a href="/tools/toml-to-json">TOML'den JSON'a dönüştürücüyü</a> kullanın. Yapılandırma biçimlerini karşılaştırırken{" "}
      <a href="/tools/yaml-json-converter">YAML/JSON dönüştürücü</a> ve çıktıyı düzenlemek için{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile birlikte kullanın.
    </p>
  </>
);