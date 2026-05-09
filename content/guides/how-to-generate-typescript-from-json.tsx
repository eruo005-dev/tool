import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      API yanıtları için TypeScript arayüzlerini elle yazmak sıkıcı
      ve hataya açıktır. Bunları örnek JSON'dan (veya bir JSON
      Şeması, OpenAPI spesifikasyonu ya da protobuf'dan) oluşturmak
      daha hızlı, daha doğru ve veriyle senkronize kalır. Ancak
      oluşturucular, oluşturulan türlerin kullanımını etkileyen
      seçimler yapar — isteğe bağlı vs zorunlu, birleşim vs enum,
      dar vs geniş türler. Bu rehber, bilmeye değer oluşturucuları,
      bunların <a href="/learn/inference">çıkarım</a>ındaki
      ödünleşimleri, derleme zamanı kontrolüne ek olarak çalışma
      zamanı doğrulamasının ne zaman yapılacağını ve API'ler
      geliştikçe oluşturulan türleri güncel tutma kalıplarını
      kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir oluşturucu ne yapar</h2>
    <p>
      Örnek JSON verildiğinde:
    </p>
    <pre>
{`{
  "id": 42,
  "name": "Alice",
  "active": true,
  "tags": ["admin", "staff"]
}`}
    </pre>
    <p>
      Bir oluşturucu şunu üretir:
    </p>
    <pre>
{`interface User {
  id: number;
  name: string;
  active: boolean;
  tags: string[];
}`}
    </pre>
    <p>
      Düz veriler için basit. Zorluklar iç içe nesneler, karışık
      diziler, isteğe bağlı alanlar ve null işleme ile başlar.
    </p>

    <h2>Karşılaşacağınız çıkarım kararları</h2>
    <p>
      <strong>İsteğe bağlı vs zorunlu:</strong> oluşturucu,
      örnekteki tüm alanların zorunlu olduğunu mu varsayar? Yoksa
      yalnızca zorunlu anahtarları mı işaretler (birden çok örnek
      sağlanırsa)? Genellikle tek örnekli çıkarımı en iyi çaba
      olarak ele almak istersiniz.
    </p>
    <p>
      <strong>Null olabilen alanlar:</strong> bir örnekte{" "}
      <code>&quot;email&quot;: null</code> varsa, bu{" "}
      <code>email: null</code>, <code>email?: string</code> veya{" "}
      <code>email: string | null</code> mudur? Oluşturucuya bağlıdır.
    </p>
    <p>
      <strong>Sayı vs literal:</strong>{" "}
      <code>{`"status": 1`}</code> — bu <code>status: number</code>
      {" "}mudur yoksa <code>status: 1</code> mi? Literal türler daha
      kesindir ancak API başka sayılar döndürürse kırılgandır.
    </p>
    <p>
      <strong>Dizi öğesi birleşimi:</strong>{" "}
      <code>[&quot;a&quot;, 1, true]</code> şuna dönüşür:{" "}
      <code>(string | number | boolean)[]</code>. Genellikle sorun
      yoktur, ancak bazen oluşturucu çekinir ve{" "}
      <code>any[]</code> çıktısı verir.
    </p>
    <p>
      <strong>Enum vs string:</strong>{" "}
      <code>&quot;status&quot;: &quot;pending&quot;</code> —{" "}
      <code>status: string</code> mi yoksa <code>status: &quot;pending&quot;</code> mi?
      Tek örnekli enum'lar tehlikelidir; çok örnekli çıkarım gerçek
      enum'ları tespit edebilir.
    </p>

    <h2>Bilmeye değer oluşturucular</h2>
    <p>
      <strong>quicktype:</strong> eski, güvenilir, birçok kaynak
      formatını (JSON, JSON Şeması, GraphQL, Postman) ve birçok hedef
      dili destekler. Çıktısı ergonomiktir.
    </p>
    <p>
      <strong>json-schema-to-typescript:</strong> JSON Şeması'nı
      (ham JSON değil) dönüştürür. Çıktı şemaya sadıktır; zaten bir
      şemanız olmasını gerektirir.
    </p>
    <p>
      <strong>openapi-typescript / openapi-fetch:</strong> OpenAPI'den
      türler ve türlenmiş fetch istemcileri oluşturur. REST API'leri
      için en iyisidir.
    </p>
    <p>
      <strong>graphql-codegen:</strong> GraphQL API'leri için türler
      ve Apollo/urql/diğerleri için hook'lar oluşturur.
    </p>
    <p>
      <strong>protobufjs / ts-proto:</strong> gRPC/protobuf için.
    </p>
    <p>
      <strong>VS Code paste-as-JSON:</strong> yerleşik komut,
      yapıştırılan JSON'u bir TypeScript arayüzüne dönüştürür. Tek
      seferlik kullanımlar için iyidir.
    </p>

    <h2>Yalnızca JSON'dan — şema yok</h2>
    <p>
      Hızlı tipleme için iyidir, ancak:
    </p>
    <p>
      Yalnızca bir örnek → oluşturucu isteğe bağlı ile zorunluyu
      ayırt edemez.
    </p>
    <p>
      Bir dizi öğesinin her zaman bir nesne mi yoksa bazen null mu
      olduğunu bilmenin yolu yoktur.
    </p>
    <p>
      Aralık/uzunluk/desen bilgisi yoktur.
    </p>
    <p>
      <strong>Daha iyi çıkarım için hack:</strong> oluşturucuya
      uç durumları (boş string, null, eksik anahtarlar) kapsayan
      birden çok örnek besleyin. Birleşimleri ve isteğe bağlıları
      daha doğru çıkarır.
    </p>

    <h2>JSON Şeması'ndan — daha zengin türler</h2>
    <p>
      JSON Şeması, JSON'un taşımadığı kısıtlamalar taşır. Şunları
      içeren bir şema:
    </p>
    <pre>
{`"status": { "enum": ["draft","published","archived"] }`}
    </pre>
    <p>
      Şunu oluşturur:
    </p>
    <pre>
{`status: "draft" | "published" | "archived";`}
    </pre>
    <p>
      Ham JSON'dan mümkün değildir. Kritik öneme sahip her şey için
      bir şema yazmaya değer.
    </p>

    <h2>Çalışma zamanı doğrulaması da önemlidir</h2>
    <p>
      Oluşturulan TypeScript arayüzleri yalnızca derleme zamanına
      aittir. Bir API hatalı biçimlendirilmiş veri döndürürse,
      kodunuz buna güvenir ve daha sonra çöker.
    </p>
    <p>
      <strong>Oluşturulan türleri çalışma zamanı doğrulamasıyla eşleştirin:</strong>
    </p>
    <p>
      <strong>Zod:</strong> şemayı bir kez tanımlayın, hem TS türünü
      hem de çalışma zamanı doğrulayıcısını elde edin.
    </p>
    <p>
      <strong>ajv:</strong> JSON Şeması'nı hızlı bir çalışma zamanı
      doğrulayıcısına derleyin.
    </p>
    <p>
      <strong>io-ts / runtypes:</strong> fp kampında benzer desen.
    </p>
    <p>
      API sınırında: güvenilmeyen JSON'u bir doğrulayıcıdan geçirin,
      oradan itibaren türlere güvenin.
    </p>

    <h2>Adlandırma ve stil</h2>
    <p>
      <strong>Türler için PascalCase:</strong>{" "}
      <code>User</code>, <code>user</code> değil.
    </p>
    <p>
      <strong>Interface vs type alias:</strong>{" "}
      <code>interface</code> nesne şekilleri için,{" "}
      <code>type</code> birleşimler ve eşlenmiş türler için. Çoğu
      oluşturucu interface çıktısı verir.
    </p>
    <p>
      <strong>İç içe tür adları:</strong> bazı oluşturucular iç içe
      nesneleri satır içine alır; diğerleri{" "}
      <code>UserAddress</code> gibi adlandırılmış alt türler oluşturur.
      Adlandırılmış alt türler genellikle yeniden kullanım için daha
      iyidir.
    </p>
    <p>
      <strong>camelCase vs snake_case:</strong> API'niz{" "}
      <code> snake_case</code> döndürüyorsa, bunu TS'de tutmaya mı
      yoksa dönüştürmeye mi karar verin. Tutmak, API kablo formatıyla
      eşleşir; dönüştürmek ergonomik olarak daha hoştur ancak sınırda
      eşleme gerektirir.
    </p>

    <h2>Türleri güncel tutma</h2>
    <p>
      API'ler değişir. Oluşturulan türler otomatik olarak yeniden
      oluşturulmalıdır.
    </p>
    <p>
      <strong>CI adımı:</strong> her derleme/dağıtımda türleri yeniden
      oluşturun. Şema değiştiyse ancak türler yeniden oluşturulmadıysa
      başarısız olun.
    </p>
    <p>
      <strong>Geliştirmede izleme modu:</strong> şema kaydedildiğinde
      yeniden oluşturun. Sıkı geri bildirim döngüsü.
    </p>
    <p>
      <strong>Oluşturulan dosyaları kaydedin:</strong> evet. PR'larda
      farkları görünür tutar. Sürüklenmeyi tespit etmek için CI'da
      yeniden oluşturun.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Tek örnekli çıkarıma güvenmek.</strong> Eksik alanlar
      zorunlu olmayan olarak çıkarılır. Birden çok örnek ekleyin veya
      manuel olarak not düşün.
    </p>
    <p>
      <strong>API sınırlarında çalışma zamanı doğrulaması yapmamak.</strong>{" "}
      Oluşturulan türler, veri hatalı biçimlendirildiğinde yalan söyler.
      Güvenilmeyen girdiyi doğrulayın.
    </p>
    <p>
      <strong>Farkı incelemeden yeniden oluşturmak.</strong> Bir şema
      ince ayarı her arayüzü değiştirebilir. Değişiklikleri herhangi
      bir kod gibi inceleyin.
    </p>
    <p>
      <strong>Elle yazılmış ve oluşturulmuş olanı aynı dosyada karıştırmak.</strong>{" "}
      Yeniden oluşturma, düzenlemelerinizin üzerine yazar. Oluşturulan
      çıktıyı ayrı tutun.
    </p>
    <p>
      <strong>null/undefined ayrımlarını görmezden gelmek.</strong>{" "}
      TypeScript bunları farklı ele alır. Oluşturulan türler de öyle
      yapmalıdır.
    </p>
    <p>
      <strong>Herhangi bir any sızıntısı bırakmak.</strong> Sıkı mod +{" "}
      <code>noImplicitAny</code> bunu yakalar. Oluşturucu çıktısını
      başıboş <code>any</code> için inceleyin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      JSON'u anında TypeScript arayüzlerine dönüştürmek için{" "}
      <a href="/tools/json-to-typescript">JSON'dan TypeScript'e dönüştürücü</a>'yü
      kullanın. Yeniden kullanılabilir bir şema elde etmek için{" "}
      <a href="/tools/json-schema-generator">JSON şema oluşturucu</a>
      {" "}ile ve örneği önce temizlemek için{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile
      eşleştirin.
    </p>
  </>
);