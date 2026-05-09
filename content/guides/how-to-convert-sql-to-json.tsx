import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      İlişkisel satırlar ve JSON belgeleri veriyi farklı şekilde modeller. SQL tablosal,
      normalize edilmiş ve yabancı anahtarlıdır. JSON hiyerarşik, denormalize ve
      gömülüdür. Aralarında dönüşüm yapmak, sütunları anahtarlarla eşlemekten daha fazlasını içerir:
      ilişkileri düzleştirir veya iç içe geçirirsiniz, NULL ile eksik anahtarları nasıl ele alacağınıza karar verir,
      tarihleri, ondalık sayıları ve blobları temsil eder ve SQL'in kendi JSON
      fonksiyonları ile sorgu sonrası dönüşüm arasında seçim yaparsınız.
      Bu kılavuz, satırdan nesneye eşleme, birleştirmeler veya toplama yoluyla iç içe şekiller,
      NULL anlambilimi, tür doğruluğu, modern SQL JSON fonksiyonları
      (Postgres, MySQL, SQLite) ve performans/<a href="/learn/stream">streaming</a>
      ödünleşimlerini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Temel satırdan nesneye eşleme</h2>
    <p>
      Bir tablo satırı bir JSON nesnesi olur; bir sonuç kümesi bir nesne
      dizisi olur:
    </p>
    <pre>
{`-- SQL
SELECT id, name, email FROM users LIMIT 2;

-- JSON
[
  { "id": 1, "name": "Alice", "email": "a@x.com" },
  { "id": 2, "name": "Bob", "email": "b@x.com" }
]`}
    </pre>
    <p>
      Sütun adları anahtar olur. Sütun değerleri yazılı JSON skalerleri olur.
      Düz tablolar için basittir.
    </p>

    <h2>NULL ve eksik anahtarlar</h2>
    <p>
      SQL <code>NULL</code> değerinin iki makul JSON temsili vardır:
    </p>
    <p>
      <strong><code>null</code> olarak dahil et:</strong>{" "}
      <code>&#123;&ldquo;email&rdquo;: null&#125;</code>. Sütunun varlığını korur.
      Çoğu dönüştürücüde varsayılandır.
    </p>
    <p>
      <strong>Anahtarı atla:</strong>{" "}
      <code>&#123;&#125;</code>. Daha küçük yük; anahtarı bekleyen
      tüketicilerin kafasını karıştırabilir.
    </p>
    <p>
      <strong>API başına birini seçin:</strong> karıştırmak en kötüsüdür. Tüketicileriniz
      gerekli ve isteğe bağlı alanlarla Zod / JSON Schema kullanıyorsa, açık <code>null</code> daha net olur.
    </p>

    <h2>Tür doğruluğu</h2>
    <p>
      SQL'de JSON'da olmayan türler vardır:
    </p>
    <p>
      <strong>DECIMAL / NUMERIC:</strong> tam hassasiyet. JSON
      sayıları 64-bit çifttir. Para için, string olarak çıktı verin (
      <code>&ldquo;amount&rdquo;: &ldquo;19.99&rdquo;</code>) ve
      sunucu tarafında bir ondalık kütüphane ile ayrıştırın.
    </p>
    <p>
      <strong>BIGINT:</strong> JavaScript Number, 2^53'ün üzerinde hassasiyet kaybeder.
      Bu eşiğin üzerindeki ID'ler için string olarak çıktı verin.
    </p>
    <p>
      <strong>DATE / TIMESTAMP:</strong> JSON'da tarih türü yoktur.
      Kural: ISO 8601 stringleri (
      <code>&ldquo;2026-04-23T12:00:00Z&rdquo;</code>). Saat dilimi belirsizliğini
      önlemek için UTC şiddetle önerilir.
    </p>
    <p>
      <strong>BYTEA / BLOB:</strong> base64 olarak kodlayın. İkili veriyi doğrudan
      JSON stringlerine doldurmaya çalışmayın — U+10FFFF üzerindeki karakterler veya
      geçersiz UTF-8 ayrıştırıcıları bozar.
    </p>
    <p>
      <strong>UUID:</strong> string. Okunabilirlik için tireleri koruyun.
    </p>
    <p>
      <strong>BOOLEAN:</strong> doğrudan eşlenir. MySQL, TINYINT
      (0/1) olarak saklar — sorgunuzda veya sürücünüzde dönüştürün.
    </p>

    <h2>Birleştirmeler — düz ve iç içe</h2>
    <p>
      Bir birleştirme düz satırlar döndürür. JSON tipik olarak iç içe olmayı ister:
    </p>
    <pre>
{`-- SQL
SELECT u.id, u.name, p.title AS post_title
FROM users u JOIN posts p ON p.user_id = u.id;

-- Düz JSON (SQL sonucuyla aynı şekil)
[
  { "id": 1, "name": "Alice", "post_title": "Hello" },
  { "id": 1, "name": "Alice", "post_title": "Second" }
]

-- İç içe (tipik API şekli)
[
  {
    "id": 1,
    "name": "Alice",
    "posts": [
      { "title": "Hello" },
      { "title": "Second" }
    ]
  }
]`}
    </pre>
    <p>
      Düz, satırların bir tablo olarak işlenmesi için iyidir. İç içe, API'lerin
      genellikle istediği şeydir. İç içe üretmek için ya:
    </p>
    <p>
      <strong>Sorgu sonrası gruplama:</strong> düz sorguyu çalıştırın, uygulama kodunda üst anahtara göre
      gruplayın. Kolaydır ancak kablodan yinelenen üst sütunlar gönderir.
    </p>
    <p>
      <strong>SQL toplama:</strong> veritabanının JSON toplama
      fonksiyonlarını kullanın (sonraki gösterilmiştir). Daha az bayt, daha az gidiş-dönüş.
    </p>

    <h2>Postgres — json_agg, row_to_json, jsonb_build_object</h2>
    <p>
      Postgres'in mükemmel JSON desteği vardır:
    </p>
    <pre>
{`SELECT jsonb_build_object(
  'id', u.id,
  'name', u.name,
  'posts', (
    SELECT jsonb_agg(jsonb_build_object('title', p.title))
    FROM posts p WHERE p.user_id = u.id
  )
) FROM users u;`}
    </pre>
    <p>
      Sonuç, kullanıcı başına bir tane olmak üzere, gömülü bir posts dizisi ile bir JSONB belgeleri sütunudur.
      Tek bir JSON dizisi istiyorsanız dış düzeyde <code>jsonb_agg(...)</code> ile sarın.
    </p>
    <p>
      <strong>Ciddi işler için JSONB (ikili) kullanın.</strong> Türleri daha iyi korur
      ve indekslenebilir.
    </p>

    <h2>MySQL 5.7+ / MariaDB — JSON_OBJECT, JSON_ARRAYAGG</h2>
    <pre>
{`SELECT JSON_OBJECT(
  'id', u.id,
  'name', u.name,
  'posts', (
    SELECT JSON_ARRAYAGG(JSON_OBJECT('title', p.title))
    FROM posts p WHERE p.user_id = u.id
  )
) FROM users u;`}
    </pre>
    <p>
      Postgres ile aynı şekil. MySQL 8+ en uygun noktadır — 5.7 JSON fonksiyonları
      mevcuttur ancak daha yavaştır ve daha fazla tuhaflığı vardır.
    </p>

    <h2>SQLite 3.38+ — json_object, json_group_array</h2>
    <pre>
{`SELECT json_object(
  'id', u.id,
  'name', u.name,
  'posts', (
    SELECT json_group_array(json_object('title', p.title))
    FROM posts p WHERE p.user_id = u.id
  )
) FROM users u;`}
    </pre>
    <p>
      SQLite'ın fonksiyonları daha yenidir ancak tamamen işlevseldir. Yerel araçlar
      ve gömülü uygulamalar için harikadır.
    </p>

    <h2>SQL Server — FOR JSON</h2>
    <pre>
{`SELECT u.id, u.name,
  (SELECT p.title FROM posts p WHERE p.user_id = u.id FOR JSON PATH) AS posts
FROM users u
FOR JSON PATH, ROOT('users');`}
    </pre>
    <p>
      <code>FOR JSON PATH</code>, SQL Server'ın deyimidir. Sütun takma adlarında nokta
      gösterimi ile iç içe yolları destekler (
      <code>posts.title</code>).
    </p>

    <h2>Büyük sonuç kümelerini akışla aktarma</h2>
    <p>
      JSON'u bellekte oluşturmak ölçekte başarısız olur. 10 milyon satırlık bir döküm için:
    </p>
    <p>
      <strong>NDJSON / JSON Lines:</strong> satır başına bir JSON nesnesi, saran
      dizi yok. Uçtan uca akışla aktarılabilir — bir satır yaz, bir satır oku. Veri
      boru hatları için endüstri standardı.
    </p>
    <p>
      <strong>İmleç + akış serileştirici:</strong> bir veritabanı imleci kullanın
      (Postgres <code>DECLARE CURSOR</code>, MySQL arabelleksiz sonuç) ve bir
      akış JSON yazıcısı (Node'da jq, streamjson). Bir dizi yayar ancak asla
      tamamını bellekte tutmaz.
    </p>
    <p>
      <strong>Kaçının:</strong> tüm sonuç kümesini yükleyip ardından serileştirmek.
      Hızla bellek sınırlarına ulaşır.
    </p>

    <h2>Alıntılama ve kaçış</h2>
    <p>
      Uygulama kodunda manuel SQL'den JSON'a dönüşüm yapıyorsanız, serileştiricinin
      şunları işlediğinden emin olun:
    </p>
    <p>
      String sütunlarındaki tırnak işaretleri, ters eğik çizgiler, kontrol karakterleri (
      <code>&quot;</code>, <code>\\</code>, <code>\\n</code>,{" "}
      <code>\\u0000</code>).
    </p>
    <p>
      UTF-8 geçerliliği — Postgres, <code>bytea_output=escape</code> ile
      geçersiz UTF-8'i mutlu bir şekilde saklar; serileştiriciniz bundan hoşlanmaz.
    </p>
    <p>
      JSON'u string birleştirme ile oluşturmayın. Dilinizin JSON
      kütüphanesini veya veritabanının JSON fonksiyonlarını kullanın.
    </p>

    <h2>Şema evrimi</h2>
    <p>
      JSON çıktıları API sözleşmenizin bir parçasıdır. Sütun eklemek güvenlidir (ekstra
      anahtarlar iyi yazılmış tüketicileri bozmaz). Yeniden adlandırma ve kaldırma
      güvenli değildir — çıktınızı sürümleyin veya bir uyumluluk katmanı ekleyin.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>DECIMAL'ı JSON sayısı olarak döndürmek.</strong> Para üzerinde sessiz
      hassasiyet kaybı. String yapın.
    </p>
    <p>
      <strong>Saat dilimi olmayan TIMESTAMP.</strong>{" "}
      <code>&ldquo;2026-04-23 12:00&rdquo;</code> Z veya ofset olmadan
      tüketici için hiçbir şey ifade etmez.
    </p>
    <p>
      <strong>Kartezyen birleştirmeyi düzleştirmek.</strong> Kullanıcıları
      yineleme olmadan JOINlemek, kullanıcı satırını gönderi başına çoğaltır. İç içe
      çıktı için toplama kullanın.
    </p>
    <p>
      <strong>BIGINT'i JSON sayısı olarak kullanmak.</strong> JS
      tüketicilerinde sessizce kesilir. String olarak kodlayın.
    </p>
    <p>
      <strong>null ve eksik anahtar kurallarını karıştırmak.</strong> Tüketiciler
      &ldquo;ayarlanmamış&rdquo; ile &ldquo;bilinmiyor&rdquo; arasında ayrım yapamaz.
    </p>
    <p>
      <strong>JSON'u string birleştirme ile oluşturmak.</strong>
      {" "}Kaçış hataları olmaya hazır.
    </p>
    <p>
      <strong>Büyük sonuç kümelerini bellekte serileştirmek.</strong> NDJSON ve
      akış kullanın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      SQL tablo verilerini JSON'a dönüştürmek için <a href="/tools/sql-to-json">SQL'den JSON'a dönüştürücüyü</a> kullanın.
      Çıktıyı doğrulamak için <a href="/tools/json-formatter">JSON biçimlendirici</a> ile
      ve kaynak sorguları okunabilir tutmak için <a href="/tools/sql-formatter">SQL biçimlendirici</a> ile eşleştirin.
    </p>
  </>
);