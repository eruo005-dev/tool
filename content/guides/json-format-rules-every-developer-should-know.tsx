export const intro = (
  <>
    <p>
      JSON, web API'lerin ortak dilidir &mdash; ve neredeyse her geliştirici onu
      spesifikasyondan değil, kopyala-yapıştır örneklerden öğrenir. Bu, ta ki
      işe yaramayana kadar işe yarar: sonda bir virgül, tek tırnak veya kaçışsız bir
      ters bölü, gece 2'de bir üretim yükünü bozar ve ayrıştırıcı hata mesajı
      işe yaramazdır.
    </p>
    <p>
      Bu, katı JSON (RFC 8259) kuralları, karşılaşacağınız esnek
      varyantlar (JSON5, JSONC), insanları yakalayan kodlama kenar durumları,
      ve büyük belgeleri, şemaları ve güvenlik risklerini ele alma kalıpları için
      eksiksiz bir referanstır. İhtiyacınız olana atlamak için bir çalışma
      referansı olarak düzenlenmiştir.
    </p>
  </>
);

export const toc = [
  { id: "spec", label: "RFC 8259: katı spesifikasyon" },
  { id: "syntax-rules", label: "6 katı kural" },
  { id: "string-escaping", label: "String kaçış kuralları" },
  { id: "numbers", label: "Sayı temsili tuzakları" },
  { id: "json5-jsonc", label: "JSON5 ve JSONC: her birini ne zaman kullanmalı" },
  { id: "common-errors", label: "En yaygın 10 ayrıştırıcı hatası ve çözümleri" },
  { id: "schema", label: "JSON Şeması: sözdiziminin ötesinde doğrulama" },
  { id: "large-files", label: "Büyük JSON'ları işleme (akış)" },
  { id: "encoding", label: "UTF-8, BOM'lar ve ikili veri" },
  { id: "security", label: "Güvenlik: prototip kirliliği, DoS, JSONP" },
  { id: "performance", label: "Performans ipuçları" },
  { id: "anti-patterns", label: "Anti-kalıplar ve tuzaklar" },
];

export const body = (
  <>
    <h2 id="spec">RFC 8259: katı spesifikasyon</h2>
    <p>
      JSON ilk olarak 2002'de Douglas Crockford tarafından belirtildi (RFC 4627), 2014'te
      RFC 7159'a güncellendi ve 2017'de RFC 8259 olarak sonlandırıldı (ayrıca ECMA-404
      ve ISO/IEC 21778 olarak da yayınlandı). RFC 8259 mevcut yetkili spesifikasyondur;
      aracınız bir varyant belirtmeden &ldquo;JSON desteği&rdquo; iddia ediyorsa, bu
      RFC 8259 anlamına gelmelidir. Spesifikasyon kısadır &mdash; örnekler dahil yaklaşık 16 sayfa &mdash;
      ve bir kez okumaya değer.
    </p>
    <p>
      Katı JSON kasıtlı olarak minimaldir. Tam olarak altı değer türü vardır: nesne,
      dizi, string, sayı, boolean, null. Yorum yok. Sonda virgül yok. Tırnaksız
      anahtarlar yok. Tek tırnaklı stringler yok. <code>undefined</code> yok. Tarih türü yok.
      İkili tür yok. Yorum yok (evet, bunu iki kez söylemeye değer). Minimalizm bir
      özelliktir: JSON'u her dilde basit ayrıştırıcılarla ayrıştırmayı güvenli kılar.
    </p>

    <h2 id="syntax-rules">6 katı kural</h2>
    <ol>
      <li>
        <strong>Anahtarlar string olmalı, çift tırnaklı.</strong> <code>{`{"name": "alice"}`}</code>{" "}
        geçerlidir; <code>{`{name: "alice"}`}</code> ve <code>{`{'name': 'alice'}`}</code> geçersizdir.
      </li>
      <li>
        <strong>Sonda virgül yok.</strong> <code>{`{"a": 1, "b": 2,}`}</code> geçersizdir.{" "}
        <code>{`[1, 2, 3,]`}</code> geçersizdir. JSON'u kopyalayıp yapıştıran insanlar arasında
        en yaygın ayrıştırıcı hatası nedenidir.
      </li>
      <li>
        <strong>Yorum yok.</strong> Ne <code>// satır</code> ne de <code>{`/* blok */`}</code>{" "}
        katı JSON'da izin verilmez. Yorumlara ihtiyacınız varsa, JSON5/JSONC veya
        <code>__comment</code> anahtarı gibi bir kural kullanın.
      </li>
      <li>
        <strong>Stringler yalnızca çift tırnak kullanır.</strong>{" "}
        <code>{`{"name": 'alice'}`}</code> geçersizdir. ECMAScript ve Python, kaynak kodda
        tek tırnaklı stringlere izin verir, bu da bunu sık bir yapıştırma hatası yapar.
      </li>
      <li>
        <strong>Stringler belirli karakterleri kaçırmalıdır.</strong> Çift tırnak içinde,
        şunları kaçırmalısınız: <code>{`"`}</code> olarak <code>{`\\"`}</code>, <code>\</code> olarak{" "}
        <code>{`\\\\`}</code>, kontrol karakterleri (0-31) olarak <code>{`\\uXXXX`}</code> veya adlandırılmış
        kaçışlar. İleri eğik çizgiler <em>kaçırılabilir</em> (<code>{`\\/`}</code>) ancak
        olması gerekmez.
      </li>
      <li>
        <strong>Sayılar belirli bir formatı takip eder.</strong> Yalnızca ondalık (onaltılık, sekizlik yok).
        <code>0.x</code> dışında başında sıfır yok. <code>+</code> işareti yok. <code>NaN</code>{" "}
        ve <code>Infinity</code>'ye İZİN VERİLMEZ (JavaScript çıktısı için büyük bir tuzak).
      </li>
    </ol>

    <h2 id="string-escaping">String kaçış kuralları</h2>
    <p>
      Bir JSON stringi içindeki kaçışların tam listesi:
    </p>
    <ul>
      <li><code>{`\\"`}</code> &rarr; <code>{`"`}</code></li>
      <li><code>{`\\\\`}</code> &rarr; <code>\</code></li>
      <li><code>{`\\/`}</code> &rarr; <code>/</code> (isteğe bağlı)</li>
      <li><code>{`\\b`}</code> &rarr; geri al (U+0008)</li>
      <li><code>{`\\f`}</code> &rarr; form besleme (U+000C)</li>
      <li><code>{`\\n`}</code> &rarr; yeni satır (U+000A)</li>
      <li><code>{`\\r`}</code> &rarr; satır başı (U+000D)</li>
      <li><code>{`\\t`}</code> &rarr; sekme (U+0009)</li>
      <li><code>{`\\uXXXX`}</code> &rarr; 4 onaltılık basamak olarak herhangi bir Unicode kod noktası</li>
    </ul>
    <p>
      <strong>U+FFFF üzerindeki kod noktaları</strong>: bir UTF-16 vekil çifti kullanın.
      Gözyaşlarıyla gülen emoji (U+1F602) şu şekilde kodlanır:{" "}
      <code>{`\\uD83D\\uDE02`}</code>. Çoğu ayrıştırıcı bunu şeffaf bir şekilde işler.
    </p>
    <p>
      <strong>Tek tırnakların kaçırılması gerekmez</strong> &mdash; JSON stringlerinde özel
      bir anlamları yoktur. <code>{`"don't"`}</code> geçerlidir;{" "}
      <code>{`"don\\'t"`}</code> da geçerlidir (kaçış gereksizdir ancak
      yasak değildir).
    </p>

    <h2 id="numbers">Sayı temsili tuzakları</h2>
    <p>
      JSON sayıları, spesifikasyona göre 64-bit kayan noktalı sayılardır (IEEE 754 çift duyarlıklı). Sonuçları:
    </p>
    <ul>
      <li>
        <strong>2^53'ün üzerinde tamsayı hassasiyeti kaybı</strong>. JavaScript'in{" "}
        <code>Number.MAX_SAFE_INTEGER</code> değeri 9007199254740991'dir. Gibi 64-bit bir ID
        <code> 12345678901234567890</code>, temsil edilebilir en yakın çift duyarlıklı sayıya yuvarlanır.
        Çözüm: büyük ID'leri JSON stringleri olarak gönderin (<code>&quot;12345678901234567890&quot;</code>),
        sayı olarak değil.
      </li>
      <li>
        <strong>Kayan nokta klasikleri</strong>. <code>0.1 + 0.2</code> şu şekilde serileştirilir:
        <code> 0.30000000000000004</code>. Para, sent (tamsayı) veya
        açıkça sabit hassasiyetli bir string olarak serileştirilmelidir.
      </li>
      <li>
        <strong>NaN ve Infinity geçerli JSON DEĞİLDİR</strong>. JavaScript'in
        <code> JSON.stringify(NaN)</code> ifadesi <code>&quot;null&quot;</code> döndürür. Eğer
        özel kayan noktaları iletmeniz gerekiyorsa, şöyle bir string sentinel kullanın:
        <code> &quot;Infinity&quot;</code> ve alıcı tarafta ayrıştırın.
      </li>
      <li>
        <strong>Başında + veya sonunda ondalık nokta yok</strong>. <code>+1</code> geçersizdir;
        <code>1</code> yazın. <code>1.</code> geçersizdir; <code>1.0</code> veya
        sadece <code>1</code> yazın.
      </li>
    </ul>

    <h2 id="json5-jsonc">JSON5 ve JSONC: her birini ne zaman kullanmalı</h2>
    <p>
      Araçlarda yaygın olan ancak API'lerde asla kullanılmayan iki esnek varyant:
    </p>
    <ul>
      <li>
        <strong>JSONC (Yorumlu JSON)</strong>: JSON + <code>// satır</code> ve
        <code> {`/* blok */`}</code> yorumları. VS Code ayarları, tsconfig.json,
        ESLint yapılandırmaları tarafından kullanılır. Desteklemesi basittir; çoğu JSON ayrıştırıcısı,
        ayrıştırmadan önce yorumları kaldıracak şekilde genişletilebilir.
      </li>
      <li>
        <strong>JSON5</strong>: JSONC artı tırnaksız anahtarlar, tek tırnaklar, sonda virgüller,
        onaltılık sayılar, başında/sonunda ondalık noktalar ve birkaç kolaylık daha. Bazı
        Babel yapılandırmaları, RollupJS ve insanların elle düzenlediği yapılandırma dosyaları tarafından kullanılır.
        Spesifikasyon json5.org adresindedir. <code>json5</code> npm paketini veya eşdeğerini kullanın.
      </li>
    </ul>
    <p>
      Temel kural: <strong>API yükleri her zaman katı JSON kullanır</strong>. <strong>Elle
      düzenlenen yapılandırma dosyaları</strong> JSONC (çoğu araç destekler) veya JSON5 (eğer
      kolaylık istiyorsanız) kullanabilir. Belgelenmedikçe bir ayrıştırıcının JSON5'i işlediğini asla varsaymayın.
    </p>

    <h2 id="common-errors">En yaygın 10 ayrıştırıcı hatası ve çözümleri</h2>
    <ol>
      <li>
        <strong>&ldquo;JSON'da N konumunda beklenmeyen X belirteci&rdquo;</strong>. Girişinizdeki
        N konumuna bakın. Neredeyse her zaman: sonda virgül, tek tırnak, tırnaksız
        anahtar veya bir stringde kaçışsız karakter. <a href="/tools/json-formatter">
          JSON biçimlendiriciyi</a> kullanın &mdash; tam olarak hatalı karakteri işaret eder.
      </li>
      <li>
        <strong>&ldquo;JSON girişinin beklenmeyen sonu&rdquo;</strong>. Kesilmiş giriş.
        Kaynağı kontrol edin: eksik kopyalanmış yük, ağ yanıtı kesilmiş, dosya yazma
        temizlenmemiş.
      </li>
      <li>
        <strong>&ldquo;Sonlandırılmamış string&rdquo;</strong>. Eksik kapanış tırnağı veya
        bozuk bir kaçış dizisi oluşturan kaçışsız bir ters bölü. Şunları kontrol edin:{" "}
        <code>\</code> ardından geçerli bir kaçış oluşturmayan bir karakter.
      </li>
      <li>
        <strong>&ldquo;Yinelenen anahtarlar&rdquo;</strong>. RFC 8259 reddetmeyi
        gerektirmez ancak davranışın uygulama tanımlı olmasını önerir. Çoğu ayrıştırıcı son
        değeri sessizce tutar. Yinelenen anahtarlarla JSON üretmeyin; alırsanız,
        bu kaynakta bir hatadır.
      </li>
      <li>
        <strong>Başlangıçta BOM (Bayt Sırası İşareti)</strong>. Bazı Windows araçları UTF-8'i
        BOM ile kaydeder (başlangıçta <code>EF BB BF</code> baytları). RFC 8259 bunu yasaklar.
        Ayrıştırmadan önce kaldırın: <code>{`text.replace(/^\\uFEFF/, '')`}</code>.
      </li>
      <li>
        <strong>Tek tırnaklı stringler</strong>. Çift tırnağa dönüştürün. Yalnızca dış
        tırnaklar değil &mdash; stringin içindeki herhangi bir <code>{`"`}</code> kaçırılmalıdır.
      </li>
      <li>
        <strong>İçeride kalan yorumlar</strong>. Katı JSON olarak ayrıştırmadan önce kaldırın veya
        JSONC uyumlu bir ayrıştırıcıya geçin. Kaldırmak için regex kullanmayın; stringlerin içindeki
        yorumlar yanlış eşleşecektir.
      </li>
      <li>
        <strong>Sonda virgüller</strong>. Kaldırın: regex <code>{`/,(\\s*[}\\]])/g`}</code> &rarr;{" "}
        <code>{`$1`}</code>. Dikkatli olun: aynı regex bir stringin içinde veriyi
        bozabilir. Mümkünse bir JSON5 ayrıştırıcısı kullanın.
      </li>
      <li>
        <strong>Yanlış içerik türü</strong>. Sunucu JSON'u şununla gönderir:{" "}
        <code>Content-Type: text/html</code>. Tarayıcılar HTML olarak ayrıştırmaya çalışır ve başarısız olur.
        Başlıkları kontrol edin; &ldquo;geçersiz JSON&rdquo; gibi görünen çoğu getirme hatası
        içerik türü hatalarıdır.
      </li>
      <li>
        <strong>Çıktıda NaN / Infinity</strong>. Bunları üreten kod (başlatılmamış
        kayan noktalar, sıfıra bölme) aşağı akış ayrıştırıcılarını çökertir. Serileştirmeden önce
        temizleyin: null veya bir string sentinel ile değiştirin.
      </li>
    </ol>

    <h2 id="schema">JSON Şeması: sözdiziminin ötesinde doğrulama</h2>
    <p>
      <code>JSON.parse</code> yalnızca SÖZDİZİMİ hatalarını yakalar. Geçerli bir JSON belgesi yine de
      yanlış şekle sahip olabilir: eksik zorunlu alanlar, yanlış türde alanlar, aralık dışı
      değerler. JSON Şeması, beklenen şekli bildirmenin ve programlı olarak
      doğrulamanın standart yoludur.
    </p>
    <p>Bir kullanıcı nesnesi için örnek şema:</p>
    <pre>{`{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["id", "email"],
  "properties": {
    "id": { "type": "integer", "minimum": 1 },
    "email": { "type": "string", "format": "email" },
    "name": { "type": "string", "maxLength": 100 },
    "age": { "type": "integer", "minimum": 0, "maximum": 150 }
  },
  "additionalProperties": false
}`}</pre>
    <p>
      <strong>Dile göre doğrulayıcılar</strong>: Ajv (JavaScript/TypeScript &mdash; en hızlı
      ve en popüler), jsonschema (Python), NJsonSchema (.NET), justify (Java),
      json_schemer (Ruby). Hepsi aynı Taslak 2020-12 spesifikasyonunu uygular; diller arasında
      geçiş yapmak çoğunlukla mekaniktir.
    </p>
    <p>
      <strong>OpenAPI ilişkisi</strong>: OpenAPI 3.x, istek / yanıt şekilleri için JSON Şeması kullanır.
      OpenAPI spesifikasyonunuzdan türler ve doğrulayıcılar oluşturun; ikisini de asla
      elle yazmayın.
    </p>
    <p>
      <strong>TypeScript'te alternatifler</strong>: Zod, io-ts, yup, valibot. Şemayı
      TypeScript kodunda tanımlayın (tür çıkarımı alır), çalışma zamanında doğrulayın, ayrı bir şema
      dosyası yoktur. TS ağırlıklı kod tabanları için daha iyi DX; TS olmayan tüketicilerle
      daha az birlikte çalışabilirlik.
    </p>

    <h2 id="large-files">Büyük JSON'ları işleme (akış)</h2>
    <p>
      <code>JSON.parse</code> tüm belgeyi belleğe yükler. ~100MB üzerindeki dosyalar için
      bu imkansız hale gelir. Akış ayrıştırıcıları her seferinde bir belirteç işler:
    </p>
    <ul>
      <li>
        <strong>jq</strong> (CLI): rutin olarak 100GB JSON dosyalarını işler.{" "}
        <code>jq .users[] huge.json</code> her kullanıcıyı ayrıştırıldıkça yayar.
      </li>
      <li>
        <strong>Python ijson</strong>: <code>for item in ijson.items(file, &quot;users.item&quot;)</code>{" "}
        belgeyi yüklemeden yineler.
      </li>
      <li>
        <strong>Node JSONStream</strong>:{" "}
        <code>fs.createReadStream(...).pipe(JSONStream.parse(&apos;users.*&apos;)).on(&apos;data&apos;, ...)</code>.
      </li>
      <li>
        <strong>Go encoding/json Decoder</strong>: bellek verimli ayrıştırma için belirteç akışı API'si.
      </li>
    </ul>
    <p>
      <strong>NDJSON / JSONL</strong>: her satırın ayrı bir JSON nesnesi olduğu alternatif bir format.
      Akışı önemsizdir (satır satır okuyun, her birini ayrıştırın).
      Günlük toplama, ML eğitim verileri ve büyük veri dışa aktarımları için standarttır. Dosya
      uzantısı <code>.ndjson</code> veya <code>.jsonl</code>.
    </p>

    <h2 id="encoding">UTF-8, BOM'lar ve ikili veri</h2>
    <p>
      RFC 8259, UTF-8 kodlaması gerektirir (eski RFC 7159'da isteğe bağlı UTF-16 / UTF-32 ile).
      Ağ JSON'u her zaman BOM olmadan UTF-8 olmalıdır.
    </p>
    <p>
      <strong>İkili veri</strong> yerel olarak sığmaz. Kurallar:
    </p>
    <ul>
      <li>
        <strong>Base64 kodlama</strong>: en yaygın. %33 boyut ek yükü ekler. Bkz.{" "}
        <a href="/tools/base64-encoder-decoder">Base64 kodlayıcı</a>.
      </li>
      <li><strong>Hex kodlama</strong>: daha basit ancak %100 boyut ek yükü.</li>
      <li>
        <strong>Bant dışı</strong>: bir URL veya imzalı referans gönderin; istemci
        ikiliyi ayrı olarak getirir. ~10KB üzerindeki dosyalar için en iyisi.
      </li>
    </ul>

    <h2 id="security">Güvenlik: prototip kirliliği, DoS, JSONP</h2>
    <p>
      <strong>Prototip kirliliği</strong>: şu gibi anahtarlara sahip güvenilmeyen JSON:
      <code> __proto__</code>, <code>constructor</code>, <code>prototype</code>, nesnelere
      körü körüne birleştirirseniz JavaScript Nesne prototipini değiştirebilir. Güvenli birleştirme
      kütüphaneleriyle (Lodash 4.17.21+ güvenlidir) azaltın veya hedef
      nesneler için Object.create(null) kullanın.
    </p>
    <p>
      <strong>Ayrıştırıcı DoS</strong>: çok derin iç içe geçme (10.000+ seviye) bazı ayrıştırıcılarda
      yığını patlatabilir. Giriş boyutunu ve derinliğini sınırlayın. Çoğu modern ayrıştırıcı varsayılan olarak
      makul sınırlara sahiptir.
    </p>
    <p>
      <strong>JSON ele geçirme (tarihsel)</strong>: eski tarayıcılarda üst düzey JSON
      dizileriyle ilgili bir güvenlik sorunu. Modern tarayıcılar bunu düzeltti. IE 5/6'yı
      desteklemiyorsanız endişelenmeyin.
    </p>
    <p>
      <strong>JSONP</strong>: <code>&lt;script&gt;</code> aracılığıyla çapraz kaynak yükleme için
      bir geri çağırma işlevine sarılmış JSON. Tüm modern tarayıcılarda CORS desteği nedeniyle
      büyük ölçüde geçersizdir. JSONP, rastgele JavaScript çalıştırır &mdash; veri kaynağı
      tehlikeye girerse, bir XSS'niz olur. Yeni kod için kaçının; CORS veya uygun
      Access-Control-Allow-Origin başlıklarıyla getirme kullanın.
    </p>

    <h2 id="performance">Performans ipuçları</h2>
    <ul>
      <li>
        <strong>Çift ayrıştırmadan kaçının</strong>. <code>JSON.parse(JSON.parse(s))</code>{" "}
        birisi JSON'u serileştirdiğinde, ardından sonucu bir string olarak JSON kodladığında olur.
        Bir kez ayrıştırın. Daha iyi çözüm: yukarı akışta çift kodlamayı durdurun.
      </li>
      <li>
        <strong>Mesaj boyutunu göz önünde bulundurun</strong>. HTTP üzerinden JSON, aktarım sırasında
        gzip/brotli sıkıştırılır. Alan adı uzunluğu, spesifikasyonun ima ettiğinden daha az önemlidir.
        Ancak depolanan JSON (veritabanları, dosyalar) için: daha kısa alan adları birleşir.
        Uzlaşma: API'lerde okunabilir, sık kullanılan dahili depolamada kısaltılmış.
      </li>
      <li>
        <strong>10MB üzeri dosyalar için akış</strong>. 100MB'lık bir stringde <code>JSON.parse</code>
        5-15 saniye sürer ve tarayıcı sekmesini dondurabilir.
      </li>
      <li>
        <strong>İkili ağırlıklı veya yüksek frekanslı yükler için protobuf veya CBOR kullanın</strong>.
        Her ikisi de JSON'dan 2-5 kat daha küçük ve daha hızlıdır. Ödünleşim: insan tarafından okunamaz, şema
        gerektirir.
      </li>
    </ul>

    <h2 id="anti-patterns">Anti-kalıplar ve tuzaklar</h2>
    <ul>
      <li>
        <strong>String türünde tarihler</strong>. JSON'da Tarih türü yoktur, bu nedenle tarihler
        string haline gelir. Birden çok format rekabet eder: ISO 8601 (<code>2026-01-15T12:00:00Z</code>{" "}
        &mdash; tercih edilen), Unix zaman damgası (saniye sayısı), JavaScript Tarih string
        formatı. API sözleşmenizde birini seçin; karıştırmayın. ISO 8601,
        birlikte çalışabilir seçimdir.
      </li>
      <li>
        <strong>Kayan nokta olarak para</strong>. Tamsayı sent veya string kodlu ondalık sayılar kullanın.
        Kayan noktalar hassasiyet kaybeder; <code>0.1 + 0.2 = 0.30000000000000004</code>.
      </li>
      <li>
        <strong>Sayı olarak büyük tamsayılar</strong>. 2^53 üzerindeki ID'ler hassasiyet kaybeder. String
        olarak gönderin.
      </li>
      <li>
        <strong>JSON içerik türü olarak sunulan JSON dosyalarında yorumlar</strong>. Sunmadan önce
        kaldırın veya içerik türünü <code>application/jsonc</code> (yaygın olarak tanınmaz)
        veya kural <code>application/x-jsonc</code> olarak değiştirin.
      </li>
      <li>
        <strong>Yineleme sırasında mutasyon</strong>. Bazı ayrıştırıcılar (Python json) düz
        sözlükler döndürür; diğerleri sıralı sözlükler döndürür; davranış değişir. Yinelediğiniz
        şeyi mutasyona uğratmayın; bir kopyasını yineleyin.
      </li>
      <li>
        <strong>Anahtar sırasına güvenmek</strong>. RFC 8259, nesnelerin
        &ldquo;sırasız&rdquo; olduğunu söyler. Çoğu ayrıştırıcı pratikte ekleme sırasını korur (V8,
        Python 3.7+, Go); bazıları korumaz. Doğruluk için sıraya güvenmeyin.
      </li>
    </ul>

    <h2>80/20 çıkarımı</h2>
    <p>
      Altı kural, karşılaşacağınız neredeyse tüm ayrıştırma hatalarını kapsar. Şema
      doğrulama kalıbı (Ajv, Zod, JSON Şeması), geri kalanını sözleşme düzeyinde yakalar,
      böylece hatalar erken ortaya çıkar. Büyük belgeler için akış ayrıştırıcılarına veya NDJSON'a geçin.
      İkili veriler için Base64 kodlayın veya bant dışı gönderin. Nesnelere birleştirmeden önce
      güvenilmeyen JSON'u her zaman doğrulayın (prototip kirliliği).
    </p>
    <p>
      Tek seferlik güzel yazdırma ve doğrulama için <a href="/tools/json-formatter">JSON biçimlendiriciyi</a>;
      komut satırı iş akışları için <code>jq</code>; çalışma zamanı doğrulaması için Ajv veya
      Zod kullanın. RFC 8259'u bir kez okuyun. Bu sayfayı yer imlerine ekleyin. Çoğu JSON
      baş ağrısı geçer.
    </p>
  </>
);

export const cta = {
  label: "JSON'u tarayıcıda anında biçimlendirin ve doğrulayın",
  targetSlug: "json-formatter",
};

export const faq = [
  {
    q: "JSON ayrıştırıcım neden 'Beklenmeyen belirteç' diyor?",
    a: "Sıklık sırasına göre beş yaygın neden: (1) Bir nesne veya dizideki son öğeden sonra sonda virgül — katı JSON bunu yasaklar. (2) Çift tırnak yerine tek tırnaklı stringler. (3) Tırnaksız anahtarlar (JavaScript nesne değişmezlerinde geçerlidir; JSON'da geçersizdir). (4) Bir string içinde bozuk bir kaçış dizisi oluşturan kaçışsız ters bölü. (5) Yorumlar — katı JSON'da yorum yoktur. Hata mesajındaki 'N konumu' tam olarak karakteri işaret eder; JSON'unuzu satır:sütun görmek için bir biçimlendiriciye yapıştırın.",
  },
  {
    q: "JSON, JSON5 ve JSONC arasındaki fark nedir?",
    a: "JSON (RFC 8259), API'lerde kullanılan katı standarttır: yorum yok, sonda virgül yok, yalnızca çift tırnaklı anahtarlar. JSONC (Yorumlu JSON), // ve /* */ yorumları ve sonda virgüller ekler; VS Code ayarları ve tsconfig.json tarafından kullanılır. JSON5, JSONC artı tırnaksız anahtarlar, tek tırnaklı stringler, onaltılık sayılar ve diğer birkaç kolaylıktır; bazı derleme aracı yapılandırmalarında kullanılır. Temel kural: API'ler her zaman katı JSON; elle düzenlenen yapılandırma dosyaları JSONC veya JSON5 kullanabilir. Belgelendirilmedikçe bir ayrıştırıcının JSON5'i desteklediğini asla varsaymayın.",
  },
  {
    q: "100MB'den büyük JSON dosyalarını nasıl işlerim?",
    a: "JSON.parse ve eşdeğer yükleyiciler tüm belgeyi belleğe okur — nesne temsili için tipik olarak dosya boyutunun 2-5 katı. >100MB dosyalar için akış ayrıştırıcıları kullanın: jq (CLI, 100GB'ı kolayca işler), Python ijson, Node JSONStream, Go encoding/json Decoder. Alternatif format: NDJSON (yeni satırla ayrılmış JSON) burada her satır ayrı bir JSON nesnesidir — satır satır okuyarak akışı önemsizdir. NDJSON, günlük toplama, ML eğitim verileri ve büyük veri dışa aktarımları için standarttır.",
  },
  {
    q: "JSON'um neden yanlış sayılara sahip (hassasiyet kaybı)?",
    a: "JSON sayıları, spesifikasyona göre IEEE 754 64-bit kayan noktalı sayılardır. JavaScript'in Number.MAX_SAFE_INTEGER değeri 2^53 - 1 = 9007199254740991'dir. Daha büyük tamsayılar (veritabanlarından uzun ID'ler, blok zinciri işlem ID'leri, Twitter snowflake ID'leri) temsil edilebilir en yakın kayan noktaya yuvarlanır — sessiz veri bozulması. Çözüm: büyük tamsayıları JSON stringleri olarak gönderin, alıcı tarafta BigInt veya kütüphaneye özel büyük tamsayı türleri olarak ayrıştırın. Para aynı soruna sahiptir: 0.1 + 0.2 = 0.30000000000000004. Parayı tamsayı sent (veya daha küçük birimler) veya sabit hassasiyetli stringler olarak saklayın; asla kayan nokta olarak değil.",
  },
];