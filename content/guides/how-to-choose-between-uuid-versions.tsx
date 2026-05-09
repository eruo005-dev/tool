import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      UUID'ler (Evrensel Olarak Benzersiz Tanımlayıcılar), koordinasyon gerektirmeden
      kimlik oluşturmanın en popüler yoludur. 128 bit, etkili bir şekilde
      benzersizliği garanti eder, merkezi bir otoriteye ihtiyaç duymaz. Ancak
      &ldquo;UUID&rdquo; tek bir şey değildir — çok farklı özelliklere sahip yedi
      belirtilmiş sürüm (v1'den v8'e) vardır. Yanlış olanı seçmek veritabanı
      performansını düşürebilir, zamanlama bilgisi sızdırabilir veya güvenlik
      açısından hassas bağlamlarda tahmin edilebilir kimlikler oluşturabilir. Bu
      kılavuz, her sürümün ne işe yaradığını, 2026'da varsayılan olarak hangisinin
      kullanılacağını, veritabanları için v4 ve v7 tartışmasını ve UUID'lerin tamamen
      yanlış seçim olduğu durumları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>UUID formatı</h2>
    <p>
      Bir UUID 128 bittir ve genellikle tirelerle ayrılmış 32 onaltılık basamak
      olarak gösterilir: <code>550e8400-e29b-41d4-a716-446655440000</code>.
    </p>
    <p>
      Sürüm, üçüncü grubun ilk basamağında (burada &ldquo;4&rdquo;) kodlanmıştır.
      Varyant, dördüncü grubun ilk basamağındadır (burada &ldquo;a&rdquo; → RFC varyantı).
    </p>
    <p>
      128 bit, yaklaşık 3.4×10^38 benzersiz değer sağlar. Çakışmalar pratik
      herhangi bir amaç için etkili bir şekilde imkansızdır.
    </p>

    <h2>Sürüm 4 — rastgele (yıllardır varsayılan)</h2>
    <p>
      v4 UUID'leri, 122 bit rastgele veri + sürüm/varyant için 6 sabit bitten
      oluşur. Bilgi sızıntısı yok, zamanlama yok, MAC adresi yok. Sadece
      rastgelelik.
    </p>
    <p>
      <strong>Artıları:</strong> evrensel olarak desteklenir, meta veri sızdırmaz,
      her yerde çalışır, oluşturması basittir.
    </p>
    <p>
      <strong>Eksileri:</strong> sıralanabilir değildir. B-tree indekslerine
      rastgele eklenir, sayfa bölünmelerine ve veritabanlarında zayıf önbellek
      yerelliğine neden olur. Birincil anahtar olarak rastgele UUID'ler, sıralı
      kimliklere kıyasla veritabanı yazma verimini 3-10 kat azaltabilir.
    </p>
    <p>
      <strong>Şu durumlarda kullanın:</strong> kimlik öncelikle bir referanstır
      (yoğun bir indeks değil) veya sıfır meta veri sızıntısına ihtiyacınız var
      (güvenlik tokenları, herkese açık tanımlayıcılar, olay kimlikleri).
    </p>

    <h2>Sürüm 1 — MAC + zaman damgası</h2>
    <p>
      v1, 60 bitlik bir zaman damgası + 14 bitlik saat dizisi + 48 bitlik düğüm
      kimliğini (genellikle oluşturan makinenin MAC adresi) kodlar.
    </p>
    <p>
      <strong>Artıları:</strong> zamana göre kısmen sıralanabilir; MAC benzersizse
      benzersizliği garanti eder.
    </p>
    <p>
      <strong>Eksileri:</strong> makine MAC'ini ve oluşturma zamanını sızdırır.
      Tahmin edilebilir. MAC'i ifşa eden eski uygulamalar, belge yazarlarını sonradan
      tespit etmek için kullanılmıştır.
    </p>
    <p>
      <strong>Şu durumlarda kullanın:</strong> 2026'da neredeyse hiçbir zaman. v7,
      sızıntı olmadan meşru kullanım durumlarını çözmüştür. v1, eski sistemlerde
      kalmıştır.
    </p>

    <h2>Sürüm 3 ve 5 — ad alanı tabanlı (belirleyici)</h2>
    <p>
      v3 ve v5, bir ad alanı içindeki bir adı (MD5 veya SHA-1 kullanarak) hash'ler.
      Aynı girdiler her zaman aynı UUID'yi üretir.
    </p>
    <p>
      <strong>Şu durumlarda kullanın:</strong> belirleyici kimlik oluşturma —
      kayıtların yinelenmesini önleme, sistemler arasında harici anahtarlardan
      (URL'ler, e-posta adresleri) tutarlı kimlikler oluşturma. Çakışma direnci
      için v3 (MD5) yerine v5'i (SHA-1) tercih edin.
    </p>
    <p>
      <strong>Uyarı:</strong> rastgele değildir. Ad alanını bilen ve adı tahmin
      edebilen bir saldırgan UUID'yi hesaplayabilir.
    </p>

    <h2>Sürüm 7 — zamana göre sıralı rastgele (veritabanları için yeni varsayılan)</h2>
    <p>
      v7, RFC 9562 (2024) ile standartlaştırılmıştır. İlk 48 bit, Unix-milisaniye
      zaman damgasıdır; kalan 74 bit rastgeledir.
    </p>
    <p>
      <strong>Artıları:</strong> sözlükbilimsel olarak sıralanabilir (daha yeni
      UUID'ler eskilerinden sonra sıralanır). B-tree indekslerine düzgün bir şekilde
      sığacak kadar sıralıdır, v4'ün rastgeleliğinin çoğunu korurken veritabanı
      yazma performansını önemli ölçüde artırır.
    </p>
    <p>
      <strong>Eksileri:</strong> oluşturma zamanını (milisaniye hassasiyeti) sızdırır.
      Güvenlik modeliniz için bu önemliyse v4 kullanın.
    </p>
    <p>
      <strong>Şu durumlarda kullanın:</strong> veritabanında birincil anahtar,
      yüksek kardinaliteli indeks, zaman sıralamasının yardımcı olduğu olay
      kimlikleri. Çoğu durumda, v7 2026'da yeni sistemler için en iyi varsayılandır.
    </p>

    <h2>Sürüm 6 — yeniden sıralanmış v1</h2>
    <p>
      v6, zaman damgası bitlerinin sözlükbilimsel olarak sıralanacak şekilde yeniden
      düzenlenmiş halidir. Nadiren kullanılır; pratikte v7 onun yerini almıştır.
    </p>

    <h2>Sürüm 8 — özel</h2>
    <p>
      v8, UUID formatını korurken özel kimlik şemaları için &ldquo;ne istersen yap&rdquo;
      sürümüdür. Belirli verileri (kiracı kimlikleri, parça anahtarları) gömerken
      UUID uyumlu kalmak istediğinizde kullanışlıdır.
    </p>

    <h2>v4 ve v7 veritabanı kararı</h2>
    <p>
      <strong>Eski tavsiye:</strong> &ldquo;UUID'ler B-tree indekslerini mahveder;
      otomatik artan tamsayılar kullanın.&rdquo; v4 için doğruydu.
    </p>
    <p>
      <strong>Yeni tavsiye:</strong> v7 boşluğu kapatıyor. PostgreSQL'deki
      karşılaştırmalar, v7 UUID eklemelerinin v4'ten 2-5 kat daha hızlı olduğunu
      ve indeks-yerelliği için sıralı bigint ile karşılaştırılabilir olduğunu
      gösteriyor.
    </p>
    <p>
      <strong>Yine de bigint'i seçin:</strong> birincil anahtar yalnızca dahiliyse,
      depolama verimliliği önemliyse (8 bayt vs 16), dağıtık oluşturmaya ihtiyacınız
      yoksa.
    </p>
    <p>
      <strong>UUID (v7) seçin:</strong> kimliklerin koordinasyon olmadan
      oluşturulması gerekiyorsa (mikro hizmetler, çevrimdışı istemciler, toplu
      içe aktarmalar için ön oluşturma), kimlikler harici olarak ifşa ediliyorsa
      (URL'ler, API'ler), veriler sistemler arasında birleştiriliyorsa.
    </p>

    <h2>Anlaşılması gereken performans tuzakları</h2>
    <p>
      <strong>Depolama:</strong> UUID 16 bayttır; bigint 8 bayttır. Büyük bir
      şemada yüzlerce yabancı anahtar sütununda bu önemlidir (indeksler için daha
      fazla RAM, daha fazla G/Ç).
    </p>
    <p>
      <strong>Metin depolama:</strong> UUID'leri dize olarak (VARCHAR(36)) depolamak
      2-3 kat daha fazla depolama ve daha yavaş karşılaştırmalar demektir. Her zaman
      yerel bir UUID türü (Postgres, SQL Server), BINARY(16) (MySQL) veya en
      azından CHAR(36) kullanın.
    </p>
    <p>
      <strong>İndeks sırası:</strong> v4 eklemeleri indeks boyunca rastgele dağılır
      ve arabellek havuzu değişimine neden olur. v7 ve sıralı bigint'ler sona eklenir.
    </p>

    <h2>UUID'lerin yanlış cevap olduğu durumlar</h2>
    <p>
      <strong>İnsan tarafından okunabilir kimlikler:</strong> sipariş numaraları,
      fatura numaraları, biletler. Müşteriler bir UUID'yi telefonla güvenilir bir
      şekilde okuyamaz. Kısa kimlikler (NanoID, ShortID) veya özel diziler kullanın.
    </p>
    <p>
      <strong>Kısa URL'ler:</strong> bit.ly tarzı yönlendirmeler. UUID'ler kısa
      değildir. Sıralı kimliklerin base62 kodlamasını veya NanoID'yi (22 karakter,
      URL güvenli) kullanın.
    </p>
    <p>
      <strong>Güvenlik tokenları:</strong> UUID'ler tüm sürümlerde kriptografik
      olarak güçlü değildir. Tokenlar için uygun bir CSPRNG (Node'da
      crypto.randomBytes, Python'da secrets) kullanın. v4 birçok durumda yeterince
      rastgeledir ancak kimlik doğrulama tokenları için açık kripto kütüphaneleri
      kullanın.
    </p>

    <h2>UUID'ye alternatifler</h2>
    <p>
      <strong>ULID</strong> (Evrensel Olarak Benzersiz Sözlükbilimsel Olarak
      Sıralanabilir Tanımlayıcı): 128 bit, zaman damgası + rastgele, Crockford
      base32 kodlu (26 karakter). Büyük/küçük harf duyarsız, özel karakter yok,
      URL güvenli. Esasen daha güzel bir kodlamaya sahip v7 UUID'leri. v7'nin
      standart hale gelmesinden bu yana benimsenmede hafif bir düşüş.
    </p>
    <p>
      <strong>NanoID:</strong> UUID'den daha kısa (varsayılan olarak 22 karakter),
      özelleştirilebilir alfabe. URL'ler için iyidir.
    </p>
    <p>
      <strong>KSUID:</strong> segment tarzı zaman damgası + rastgele, 27 karakter.
      Sıralanabilir. Bazı Go ekosistemlerinde popülerdir.
    </p>
    <p>
      <strong>Snowflake tarzı kimlikler:</strong> 64 bit zaman + makine + dizi.
      Twitter'ın orijinal tasarımı; şimdi Discord, Instagram vb. tarafından
      kullanılıyor. Sıkı, sıralanabilir, makine koordineli. Bigint sütunlarına
      sığar.
    </p>

    <h2>Oluşturma en iyi uygulamaları</h2>
    <p>
      <strong>Kanıtlanmış bir kütüphane kullanın</strong>, elle yazılmış rastgelelik
      değil. Node: crypto.randomUUID() (v4) veya uuid paketi (v7+). Python: uuid
      modülü. Rust: uuid sandığı. Java: java.util.UUID.
    </p>
    <p>
      <strong>Kaynakta oluşturun.</strong> İstemcilerin, mobil uygulamaların veya
      hizmetlerin, eklemeden önce kendi varlıkları için kimlikler oluşturmasına izin
      verin. &ldquo;Veritabanının otomatik artan kimlik döndürmesini bekle&rdquo;
      gidiş-dönüşünü önler.
    </p>
    <p>
      <strong>Yerel türde saklayın.</strong> Postgres/SQL Server'da UUID sütunu,
      MySQL'de BINARY(16). VARCHAR'dan kaçının.
    </p>
    <p>
      <strong>v1 UUID'lerini ifşa etmeyin.</strong> Geçmişte v1 UUID'leri
      oluşturduysanız, bunları düşük entropili olarak kabul edin. Güvenlik açısından
      hassas olanları yeniden oluşturun.
    </p>

    <h2>Hızlı karar ağacı</h2>
    <p>
      Veritabanında birincil anahtara mı ihtiyacınız var? → v7.
    </p>
    <p>
      Sıfır meta veri sızıntısı olan herkese açık bir kimliğe mi ihtiyacınız var? → v4.
    </p>
    <p>
      Bazı kaynak verilerden (URL, e-posta) belirleyici bir kimliğe mi ihtiyacınız var? → v5.
    </p>
    <p>
      Kısa, kullanıcıya yönelik bir kimliğe mi ihtiyacınız var? → NanoID, UUID değil.
    </p>
    <p>
      Bir güvenlik tokenına mı ihtiyacınız var? → crypto.randomBytes, UUID değil.
    </p>
    <p>
      Tamamen dahili ve sıfır dağıtık oluşturma ihtiyacı mı var? → bigint otomatik
      artan iyidir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      <a href="/tools/uuid-generator">UUID oluşturucu</a> ile UUID'ler (v4 rastgele
      veya v1 zaman damgası) oluşturun. UUID'ler yerine kriptografik olarak güçlü
      sırlara ihtiyacınız olduğunda{" "}
      <a href="/tools/password-generator">şifre oluşturucu</a> ile ve ad alanı ve
      addan v5 tarzı belirleyici kimlik hesaplaması için{" "}
      <a href="/tools/hash-generator">hash oluşturucu</a> ile eşleştirin.
    </p>
  </>
);