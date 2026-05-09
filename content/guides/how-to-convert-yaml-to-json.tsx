import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      YAML ve JSON aynı veriyi temsil eder ancak farklı sorunları
      çözer. YAML insan dostudur (Kubernetes manifestleri, CI
      yapılandırmaları, Docker Compose). JSON ise makine dostudur (API'ler,
      token'lar, loglar). Aralarında dönüşüm yapmak basit görünse de
      bazı püf noktaları vardır: YAML, JSON'un bir üst kümesidir ancak
      YAML'ın anchor'lar, çok satırlı dizeler ve örtük tipleme gibi
      özellikleri dikkat edilmezse gidiş-dönüşe dayanmaz. Bu kılavuz,
      dönüşüm kurallarını, dikkat edilmesi gereken YAML özelliklerini,
      sayısal hassasiyeti, yorumları, anchor'ları/alias'ları,
      gidiş-dönüşü ve hangi formatın ne zaman kullanılacağını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Temel eşleme</h2>
    <p>
      YAML 1.2, JSON'un katı bir üst kümesidir, bu nedenle geçerli herhangi bir JSON
      geçerli bir YAML'dır. Ters yöne giderken özellikler kaybolur. Temel eşlemeler:
    </p>
    <p>
      <strong>YAML eşlemesi:</strong> <code>anahtar: değer</code> →{" "}
      <strong>JSON nesnesi:</strong> <code>&#123;&ldquo;anahtar&rdquo;: &ldquo;değer&rdquo;&#125;</code>
    </p>
    <p>
      <strong>YAML dizisi:</strong> <code>- öğe</code> (tireler ve
      girintilerle) → <strong>JSON dizisi:</strong>{" "}
      <code>[&ldquo;öğe&rdquo;]</code>
    </p>
    <p>
      <strong>YAML skaleri:</strong> <code>isim: Ali</code> →{" "}
      <strong>JSON dizesi:</strong> <code>&ldquo;Ali&rdquo;</code>
    </p>
    <p>
      Yapının dönüşümü mekaniktir. İlginç kısım skalerlerdedir.
    </p>

    <h2>Örtük tipleme — Norveç sorunu</h2>
    <p>
      YAML, tırnak işareti olmayan skalerler için türleri tahmin eder. <code>true</code>,{" "}
      <code>false</code>, <code>evet</code>, <code>hayır</code>,{" "}
      <code>açık</code>, <code>kapalı</code>, <code>null</code>, <code>~</code>
      {" "}boolean/null olur. Sayılar int veya float olur. Bu,
      ünlü &ldquo;Norveç sorununa&rdquo; yol açar:
    </p>
    <pre>
{`ülkeler:
  - GB
  - NO   # YAML 1.1'de boolean false olarak ayrıştırılır`}
    </pre>
    <p>
      YAML 1.1 (varsayılan olarak hala PyYAML tarafından kullanılır!){" "}
      <code>NO</code>'yu <code>false</code> olarak ele alır. JSON çıktısı{" "}
      <code>[&ldquo;GB&rdquo;, false]</code> alır — yanlış.
    </p>
    <p>
      <strong>Çözüm:</strong> YAML 1.2 ayrıştırıcıları kullanın (ruamel.yaml, js-yaml
      4+, go-yaml v3) veya değerleri tırnak içine alın: <code>- &ldquo;NO&rdquo;</code>.
    </p>

    <h2>Sayılar ve hassasiyet</h2>
    <p>
      YAML, <code>01</code>'i 1, <code>0x1f</code>'i 31,{" "}
      <code>1.5e3</code>'ü 1500, <code>.inf</code>'i sonsuz,{" "}
      <code>.nan</code>'ı NaN olarak ayrıştırır. JSON, sonsuz veya NaN'ı
      desteklemez — bunlar <code>null</code> veya hata olur.
    </p>
    <p>
      <strong>Baştaki sıfırlar:</strong> <code>versiyon: 007</code>{" "}
      JSON'da <code>7</code> olur — sıfır dolgusu kaybolur.
      Tırnak içine alın: <code>versiyon: &ldquo;007&rdquo;</code>.
    </p>
    <p>
      <strong>Büyük sayılar:</strong> YAML bazı ayrıştırıcılarda keyfi
      hassasiyeti destekler, JSON ise spesifikasyon olarak 64-bit
      double ile sınırlıdır. Number.MAX_SAFE_INTEGER (9.007 × 10¹⁵) değerini aşan sayılar
      sessizce hassasiyet kaybeder. ID'ler için dizeler olarak çıktı verin:{" "}
      <code>&ldquo;1234567890123456789&rdquo;</code>.
    </p>

    <h2>Çok satırlı dizeler</h2>
    <p>
      YAML'ın birkaç çok satırlı stili vardır, hepsi kaçışlı yeni satırlarla
      JSON dizesine dönüşür:
    </p>
    <pre>
{`literal: |
  Satır 1
  Satır 2      # Yeni satırları korur

katlanmış: &gt;
  Uzun paragraf
  saran          # Yeni satırlar boşluk olur

düz: "\\n kaçışları ile"`}
    </pre>
    <p>
      JSON çıktısı: literal blok için <code>&ldquo;Satır 1\nSatır 2&rdquo;</code>.
      Bloğun girintisi, blok başlangıcının içindeyse içeriğin bir parçası
      olur.
    </p>

    <h2>Yorumlar kaybolur</h2>
    <p>
      JSON'da yorum yoktur. Her YAML yorumu dönüşümde kaybolur.
      Yorumlar önemliyse (Kubernetes manifestleri yoğun yorumludur),
      ya YAML kaynağını gerçek kaynak olarak tutun ya da JSON5 /
      JSONC gibi yorum koruyan bir uzantıya sahip JSON kullanın.
    </p>

    <h2>Anchor'lar ve alias'lar</h2>
    <p>
      YAML, tekrarlanan içeriğe referansları destekler:
    </p>
    <pre>
{`varsayılanlar: &varsayılanlar
  port: 8080
  host: localhost

sunucu1:
  <<: *varsayılanlar
  isim: birincil

sunucu2:
  <<: *varsayılanlar
  isim: ikincil`}
    </pre>
    <p>
      JSON'da anchor yoktur — dönüştürücüler onları genişleterek
      yinelenen nesneler üretir. YAML'a geri dönerseniz, paylaşılan
      referansı kaybetmiş ve büyük yapılandırmalarda dosya boyutunu
      iki katına çıkarmış olursunuz.
    </p>
    <p>
      <strong>Geçici çözüm:</strong> YAML gerçek kaynaksa, onu YAML'da
      tutun ve JSON'u aşağı akışta oluşturun. Gidiş-dönüş yapmayın.
    </p>

    <h2>YAML'da anahtarlar herhangi bir tür olabilir</h2>
    <p>
      YAML, dize olmayan anahtarlara izin verir:
    </p>
    <pre>
{`? [a, b]
: "demet anahtarı"
42: "sayı anahtarı"
true: "boolean anahtarı"`}
    </pre>
    <p>
      JSON anahtarları dize olmalıdır. Dönüştürücüler ya dizeleştirir (
      <code>&ldquo;[a,b]&rdquo;</code>, <code>&ldquo;42&rdquo;</code>)
      ya da hata verir. Çoğu gerçek dünya YAML'ı yalnızca dize anahtarları kullanır,
      bu nedenle bu nadirdir, ancak sessizce dönüşen boolean/sayısal
      anahtarlara dikkat edin.
    </p>

    <h2>Ayrıştırıcı seçimi</h2>
    <p>
      <strong>js-yaml (Node.js):</strong> V4+'te varsayılan olarak YAML 1.2.
      Hızlı, yaygın olarak kullanılır.
    </p>
    <p>
      <strong>ruamel.yaml (Python):</strong> YAML 1.2, gidiş-dönüşte
      yorumları ve biçimlendirmeyi korur. En iyi Python seçeneği.
    </p>
    <p>
      <strong>PyYAML (Python):</strong> Yalnızca YAML 1.1. Norveç
      sorununa sahiptir. Yeni projeler için kaçının.
    </p>
    <p>
      <strong>go-yaml.v3:</strong> YAML 1.2, AST aracılığıyla yorumları
      korumayı destekler.
    </p>
    <p>
      <strong>yq:</strong> komut satırı aracı — <code>yq -o json
      yapilandirma.yaml</code> hızlıca dönüştürür.
    </p>

    <h2>YAML vs JSON ne zaman kullanılır</h2>
    <p>
      <strong>YAML şunlar için daha iyidir:</strong> insan tarafından düzenlenen
      yapılandırmalar (CI/CD, Kubernetes, Docker Compose, Ansible), yorumların
      yardımcı olduğu uzun dosyalar, anchor'lar aracılığıyla DRY'nin değer kattığı her yer.
    </p>
    <p>
      <strong>JSON şunlar için daha iyidir:</strong> API'ler, servisler
      arası veri alışverişi, log formatları, makine tarafından oluşturulan veya
      ölçekte ayrıştırılan her şey. JavaScript onu yerel olarak ayrıştırır.
    </p>
    <p>
      <strong>Yaygın desen:</strong> YAML kaynağı sürüm kontrolünde,
      JSON çalışma zamanında. Derleme veya ilk yüklemede dönüştürün.
    </p>

    <h2>Gidiş-dönüş</h2>
    <p>
      YAML → JSON → YAML kayıpsız değildir. Kaybedersiniz:
    </p>
    <p>
      Yorumlar.
    </p>
    <p>
      Orijinal skaler stilleri (tırnaklı vs düz vs blok).
    </p>
    <p>
      Anchor/alias referansları (genişletilmiş).
    </p>
    <p>
      Dize olmayan anahtarlar (dizeleştirilmiş).
    </p>
    <p>
      Sıralama (JSON nesneleri sırasızdır; yeniden serileştirilmiş YAML
      anahtarları sıralayabilir).
    </p>
    <p>
      YAML'ı programlı olarak değiştirmeniz ve biçimlendirmeyi korumanız
      gerekiyorsa, kaynak AST'yi tutan yorum bilincine sahip ayrıştırıcılar
      (Python'da ruamel.yaml, JS'de yaml-edit-ts) kullanın, saf
      dönüştür-değiştir-serileştir döngüsünü değil.
    </p>

    <h2>Çıktıyı doğrulama</h2>
    <p>
      Dönüşümden sonra, JSON'u beklenen şemanıza göre doğrulayın.
      Çoğu hata sessiz tür değişiklikleridir (dize olması gereken boolean,
      sıfırları korumak için dize olması gereken sayı).
    </p>
    <p>
      JSON Şeması tür kaymasını yakalar. Ayrıca anahtarların hayatta
      kaldığından emin olmak için küçük örnekleri manuel olarak karşılaştırın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Modern YAML için YAML 1.1 ayrıştırıcısı kullanmak.</strong> Her yerde
      boolean dönüşüm hataları. 1.2 ayrıştırıcısına yükseltin.
    </p>
    <p>
      <strong>Sürüm dizelerini tırnak içine almamak.</strong>{" "}
      <code>versiyon: 1.0</code> <code>1</code> (float) olur. Kullanın{" "}
      <code>versiyon: &ldquo;1.0&rdquo;</code>.
    </p>
    <p>
      <strong>Yorumların hayatta kalacağını varsaymak.</strong> Hayatta kalmazlar
      aracınız onları her iki yönde de açıkça korumadıkça.
    </p>
    <p>
      <strong>Yeniden düzenleme olarak gidiş-dönüş yapmak.</strong> YAML → JSON →
      YAML, anchor'ları genişletecek ve yeniden biçimlendirecektir. YAML
      insan tarafından bakımı yapılıyorsa, gidiş-dönüş yapmayın.
    </p>
    <p>
      <strong>JSON sayı hassasiyetini aşmak.</strong> Büyük ID'ler
      ve zaman damgaları JSON'da dize temsiline ihtiyaç duyar.
    </p>
    <p>
      <strong>Örtük türlere güvenmek.</strong> Boolean, sayı, tarih veya null
      gibi görünen herhangi bir dizeyi tırnak içine alın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      YAML ve JSON arasında{" "}
      <a href="/tools/yaml-json-converter">YAML ↔ JSON dönüştürücü</a> ile
      dönüşüm yapın. Çıktıyı güzel yazdırmak ve doğrulamak için{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile
      ve yapıyı kilitlemek için{" "}
      <a href="/tools/json-schema-generator">JSON şema oluşturucu</a>
      {" "}ile eşleştirin.
    </p>
  </>
);