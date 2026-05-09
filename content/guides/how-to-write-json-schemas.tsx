import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      JSON Schema, JSON verilerinin şeklini tanımlamanın bir yoludur;
      böylece makineler doğrulayabilir, insanlar anlayabilir ve API'ler
      dokümantasyon ve istemciler oluşturabilir. Bir şemayı bir kez yazın,
      doğrulama, otomatik tamamlama, test verisi oluşturma ve sözleşme
      testlerini ücretsiz olarak elde edin. Bu kılavuz, temel anahtar
      kelimeleri (type, properties, required, additionalProperties),
      birleştirme desenlerini (allOf, oneOf, $ref), taslakların nasıl
      farklılaştığını, JSON Schema ile alternatifler (OpenAPI, Zod,
      TypeBox) arasında ne zaman seçim yapmanız gerektiğini ve geçersiz
      verilerin sızmasına izin veren yaygın hataları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Minimal bir şema</h2>
    <pre>
{`{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "age":  { "type": "integer", "minimum": 0 }
  },
  "required": ["name"]
}`}
    </pre>
    <p>
      Bu doğrular:{" "}
      <code>{`{"name":"Alice","age":30}`}</code> ✓
    </p>
    <p>
      Reddeder:{" "}
      <code>{`{"age":30}`}</code> (eksik name),{" "}
      <code>{`{"name":"Alice","age":-1}`}</code> (negatif yaş).
    </p>

    <h2>Temel türler</h2>
    <p>
      <strong>string</strong>, <strong>number</strong>,{" "}
      <strong>integer</strong>, <strong>boolean</strong>,{" "}
      <strong>null</strong>, <strong>object</strong>,{" "}
      <strong>array</strong>. <code>integer</code>,{" "}
      <code>1.5</code>'i reddederken <code>number</code> kabul eder.
    </p>
    <p>
      <strong>Birleşim:</strong>{" "}
      <code>{`"type": ["string", "null"]`}</code> nullable olabilen
      alanlar için.
    </p>

    <h2>String kısıtlamaları</h2>
    <p>
      <strong>minLength / maxLength:</strong> karakter sınırları.
    </p>
    <p>
      <strong>pattern:</strong> string'in eşleşmesi gereken regex.
    </p>
    <p>
      <strong>format:</strong> <code>email</code>, <code>uri</code>,
      {" "}<code>date-time</code>, <code>uuid</code>, <code>hostname</code>.
      Formatlar varsayılan olarak bilgilendirme amaçlıdır; zorunlu kılmak
      için format doğrulamasını etkinleştirin.
    </p>
    <p>
      <strong>enum:</strong> izin verilen değerlerin beyaz listesi —{" "}
      <code>{`"enum": ["draft","published","archived"]`}</code>.
    </p>

    <h2>Sayı kısıtlamaları</h2>
    <p>
      <strong>minimum / maximum:</strong> kapsayıcı sınırlar.
    </p>
    <p>
      <strong>exclusiveMinimum / exclusiveMaximum:</strong>{" "}
      kapsayıcı olmayan sınırlar.
    </p>
    <p>
      <strong>multipleOf:</strong> bölen kontrolü. Sentler
      (<code>multipleOf: 0.01</code>) veya adım boyutları için
      kullanışlıdır.
    </p>

    <h2>Nesne kısıtlamaları</h2>
    <p>
      <strong>properties:</strong> anahtar → alt şema haritası.
    </p>
    <p>
      <strong>required:</strong> mevcut olması gereken anahtarların
      dizisi. <code>required</code> içinde olmaması isteğe bağlı
      anlamına gelir.
    </p>
    <p>
      <strong>additionalProperties:</strong> bilinmeyen anahtarları
      kontrol eder. <code>false</code>, listelenmeyen herhangi bir
      anahtarı reddeder; bir şema nesnesi, ekstra anahtarları o şemaya
      göre doğrular.
    </p>
    <p>
      <strong>patternProperties:</strong> özellik adlarını regex ile
      eşleştirir, değerlere alt şema uygular.
    </p>
    <p>
      <strong>minProperties / maxProperties:</strong> sayı sınırları.
    </p>

    <h2>Dizi kısıtlamaları</h2>
    <p>
      <strong>items:</strong> her öğenin eşleşmesi gereken şema.
    </p>
    <p>
      <strong>prefixItems (taslak 2020-12):</strong> demet modu — ilk
      öğe ilk şemayla, ikinci ikinciyle eşleşir, vb.
    </p>
    <p>
      <strong>minItems / maxItems:</strong> uzunluk sınırları.
    </p>
    <p>
      <strong>uniqueItems:</strong> tekrarları zorunlu kılar.
    </p>
    <p>
      <strong>contains:</strong> en az bir öğe bu şemayla eşleşmelidir.
    </p>

    <h2>Birleştirme</h2>
    <p>
      <strong>allOf:</strong> değer her alt şemayla eşleşmelidir.
      Temel bir şemayı genişletmek için kullanışlıdır.
    </p>
    <p>
      <strong>oneOf:</strong> tam olarak bir alt şema eşleşmelidir.
      Ayrıştırılmış birleşimler için yaygındır.
    </p>
    <p>
      <strong>anyOf:</strong> en az bir alt şema eşleşmelidir.
    </p>
    <p>
      <strong>not:</strong> olumsuzlama — değer alt şemayla
      eşleşmemelidir.
    </p>

    <h2>$ref — yeniden kullanılabilir parçalar</h2>
    <pre>
{`{
  "$defs": {
    "Address": {
      "type": "object",
      "properties": {
        "street": { "type": "string" },
        "city":   { "type": "string" }
      },
      "required": ["street","city"]
    }
  },
  "type": "object",
  "properties": {
    "shipping": { "$ref": "#/$defs/Address" },
    "billing":  { "$ref": "#/$defs/Address" }
  }
}`}
    </pre>
    <p>
      Tanımlar <code>$defs</code> içinde yaşar;{" "}
      <code>$ref</code>, bir JSON Pointer ile onları işaret eder.
    </p>

    <h2>Taslaklar önemlidir</h2>
    <p>
      <strong>Taslak 4:</strong> yaygın olarak desteklenir.{" "}
      <code>$defs</code> yerine <code>definitions</code> kullanır.
      Eski API araçları genellikle burada takılı kalır.
    </p>
    <p>
      <strong>Taslak 7:</strong> yaygın varsayılan.{" "}
      <code>if/then/else</code>, <code>readOnly</code>,{" "}
      <code>writeOnly</code> eklenmiştir.
    </p>
    <p>
      <strong>2019-09:</strong> <code>$defs</code>,{" "}
      <code>definitions</code> yerini alır. Yinelemeli referanslar
      temizlenmiştir.
    </p>
    <p>
      <strong>2020-12:</strong> demetler için <code>prefixItems</code>.
      Daha temiz dizi doğrulaması.
    </p>
    <p>
      <strong>Kural:</strong> doğrulayıcıların doğru sürümü seçmesi
      için her zaman <code>$schema</code> bildirin.
    </p>

    <h2>Koşullu şemalar — if/then/else</h2>
    <pre>
{`{
  "type": "object",
  "properties": { "kind": { "enum": ["user","admin"] }},
  "if": { "properties": { "kind": { "const": "admin" }}},
  "then": { "required": ["permissions"] }
}`}
    </pre>
    <p>
      Eğer <code>kind === &quot;admin&quot;</code> ise,{" "}
      <code>permissions</code> zorunlu hale gelir. Aksi halde ek
      kısıtlama yoktur.
    </p>

    <h2>JSON Schema vs alternatifler</h2>
    <p>
      <strong>OpenAPI:</strong> altında JSON Schema kullanır (bazı
      uzantılarla). HTTP API'leri için OpenAPI kullanın; yollar,
      yanıtlar ve kimlik doğrulamanın tek bir belgede olmasını
      istiyorsanız.
    </p>
    <p>
      <strong>TypeScript arayüzleri:</strong> derleme zamanı için
      harika, çalışma zamanında işe yaramaz. Her iki durumda da bir
      çalışma zamanı doğrulayıcıya ihtiyacınız vardır.
    </p>
    <p>
      <strong>Zod / Yup / Joi (JS ekosistemi):</strong> daha iyi DX,
      şema-kod-olarak. Formlar ve iç doğrulama için iyidir. Birlikte
      çalışabilirlik gerektiğinde JSON Schema'ya dışa aktarın.
    </p>
    <p>
      <strong>Protobuf / Avro:</strong> ikili verimlilik ve katı şema
      evrim kuralları gerektiğinde, JSON değil.
    </p>

    <h2>Araçlar</h2>
    <p>
      <strong>Doğrulayıcılar:</strong>{" "}
      <code>ajv</code> (JS, en hızlı), <code>jsonschema</code>
      {" "}(Python), <code>go-jsonschema</code> (Go).
    </p>
    <p>
      <strong>Belge oluşturucular:</strong>{" "}
      <code>json-schema-to-markdown</code>, Redocly, Stoplight.
    </p>
    <p>
      <strong>Kod oluşturucular:</strong>{" "}
      <code>json-schema-to-typescript</code>,{" "}
      <code>quicktype</code>, <code>datamodel-code-generator</code>{" "}
      (Python Pydantic).
    </p>
    <p>
      <strong>IDE entegrasyonu:</strong> VS Code, JSON dosyalarını
      eşleşen bir şemaya karşı otomatik olarak doğrular. Yapılandırma
      dosyaları için büyük bir üretkenlik kazancı.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>additionalProperties: false unutmak.</strong>{" "}
      Varsayılan, bilinmeyen anahtarları sessizce kabul etmektir.
      Sözleşme testlerini bozar.
    </p>
    <p>
      <strong>integer demek istediğinizde type: number kullanmak.</strong>{" "}
      Ondalıklı sayılar sızar.
    </p>
    <p>
      <strong>required eksik.</strong> <code>required</code> olmadan,
      her özellik isteğe bağlıdır. Zorunlu alanlarda kaçırmak kolaydır.
    </p>
    <p>
      <strong>Taslakları karıştırmak.</strong> Taslak 7'de{" "}
      <code>$defs</code> çalışmaz; 2020-12'de <code>definitions</code>
      çalışmaz (aslında izin verilir ancak kullanılmaz).
    </p>
    <p>
      <strong>Aşırı izin verici enum.</strong>{" "}
      <code>{`"enum": ["A", "a"]`}</code> her ikisini de kabul eder.
      Büyük/küçük harf duyarlılığına karar verin.
    </p>
    <p>
      <strong>Format doğrulaması yok.</strong> <code>format: email</code>
      {" "}bir ipucudur, doğrulayıcıda format modunu etkinleştirmediğiniz
      sürece zorunlu bir kontrol değildir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Örnek JSON'dan bir başlangıç şeması oluşturmak için{" "}
      <a href="/tools/json-schema-generator">JSON şema oluşturucuyu</a>
      kullanın. Örneğinizi düzenlemek için{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile
      eşleştirin ve kod tabanınız için türler almak üzere{" "}
      <a href="/tools/json-to-typescript">JSON'dan TypeScript dönüştürücüsünü</a>
      {" "}kullanın.
    </p>
  </>
);