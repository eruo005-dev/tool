import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      JSON farkı almak kulağa kolay gelir — sadece bir metin farkı
      alırsınız. Ancak JSON yapısaldır, satırlardan oluşmaz, bu
      nedenle bir metin farkı, biçimlendirme değişikliklerini ve
      anahtar sıralamalarını gerçek farklılıklar olarak işaretler.
      Doğru bir JSON farkı, nesneleri (sıradan bağımsız),
      dizileri (sıraya bağımlı) ve türleri anlar. Bu kılavuz, JSON
      farkının nasıl çalıştığını, dizi eşleme, sayısal hassasiyet,
      eksik-vs-null etrafındaki tuzakları, metin farkının aslında
      doğru araç olduğu durumları ve farkların kod incelemesi, API
      sözleşme testi ve hata ayıklamada nasıl kullanılacağını
      kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Metin farkı neden JSON'da başarısız olur</h2>
    <p>
      Bu iki JSON değerini ele alalım:
    </p>
    <pre>
{`{ "a": 1, "b": 2 }
{ "b": 2, "a": 1 }`}
    </pre>
    <p>
      Bir metin farkı, bunların farklı olduğunu söyler. Bir JSON
      farkı, aynı olduklarını söyler. JSON'da nesne anahtar sırası
      anlamsaldır.
    </p>
    <p>
      Aynı şey biçimlendirme için de geçerli — <code>{`{"a":1}`}</code> ve{" "}
      <code>{`{ "a": 1 }`}</code> aynıdır. Ve sondaki
      yeni satırlar, girintileme, dizelerin içindeki boşluklar (aslında
      bu anlamsaldır — dikkatli olun).
    </p>

    <h2>Yapısal fark temelleri</h2>
    <p>
      Bir JSON farkı, ağacı yinelemeli olarak dolaşır ve değişiklikleri
      anlamsal terimlerle rapor eder:
    </p>
    <p>
      <strong>Eklendi:</strong> yenisinde mevcut olan, eskisinde olmayan anahtar.
    </p>
    <p>
      <strong>Kaldırıldı:</strong> eskisinde mevcut olan, yenisinde olmayan anahtar.
    </p>
    <p>
      <strong>Değişti:</strong> her ikisinde de mevcut olan, değerleri farklı anahtar.
    </p>
    <p>
      <strong>Değişmedi:</strong> her ikisinde de mevcut olan, değerleri aynı anahtar.
    </p>
    <p>
      İç içe yapılar için, nesne/diziye yinelemeli olarak dalın ve
      satır numaraları yerine <code>user.address.city</code> gibi
      yolları rapor edin.
    </p>

    <h2>Dizi farkı almak zordur</h2>
    <p>
      Nesne anahtarları benzersizdir; dizi konumları değildir.
      Eğer şunlara sahipseniz:
    </p>
    <pre>
{`eski: [{ "id": 1 }, { "id": 2 }, { "id": 3 }]
yeni: [{ "id": 2 }, { "id": 3 }]`}
    </pre>
    <p>
      0. konum <code>{`{id:1}`}</code>'den{" "}
      <code>{`{id:2}`}</code>'ye mi değişti ve 2. konum mu
      kaldırıldı? Yoksa 0. konum tamamen mi kaldırıldı?
    </p>
    <p>
      <strong>Konumsal eşleme:</strong> dizine göre karşılaştır.
      Basit, ancak eklemelere duyarlı.
    </p>
    <p>
      <strong>Anahtarlı eşleme:</strong> fark aracına belirli bir
      alana göre eşlemesini söyleyin (örneğin, <code>id</code>).
      <code>{`{id:2}`}</code>'yi konumdan bağımsız olarak aynı
      <code>{`{id:2}`}</code> ile eşleştirir.
    </p>
    <p>
      <strong>LCS (en uzun ortak alt dizi):</strong> diziyi metin
      gibi ele al; en iyi düzenleme sırasını bul. Sıralı listeler
      için iyidir.
    </p>
    <p>
      Doğru stratejiyi seçmek, dizinin neyi temsil ettiğine bağlıdır.
      Araca hangi alanın kimlik olduğunu söyleyin, o da doğru olanı
      yapar.
    </p>

    <h2>Sayısal hassasiyet tuzakları</h2>
    <p>
      JSON sayıları tür bilgisi taşımaz. <code>1</code>
      {" "}ile <code>1.0</code> aynı mıdır? Çoğu araç evet der.
      <code>0.1 + 0.2</code> <code>0.3</code>'e eşit midir? Diliniz
      <code>0.30000000000000004</code> der, bu yüzden belki hayır.
    </p>
    <p>
      <strong>Sayıları karşılaştırırken,</strong> hesaplama ile
      oluşturulan kayan noktalı sayılar için epsilon toleransı
      kullanın. Yalnızca tamsayılar ve elle yazılmış ondalıklar
      için tam eşleme.
    </p>
    <p>
      <strong>JSON sayı taşmasına dikkat edin:</strong> JS,
      <code>9007199254740993</code>'ü
      <code>9007199254740992</code> olarak ayrıştırır
      (bir bit kaybeder). Verilerinizde 2^53'ün üzerinde
      kimlikler varsa, bunlar için dizeler kullanın — ve fark
      aracınızı <code>&quot;12345&quot;</code> ile <code>12345</code>'i
      farklı olarak ele alacak şekilde yapılandırın.
    </p>

    <h2>Eksik vs null vs tanımsız</h2>
    <p>
      JSON'da <code>null</code> vardır ancak <code>undefined</code>
      yoktur. Bir anahtarın olmaması, bir anahtarın <code>null</code>
      değeriyle mevcut olmasından farklıdır:
    </p>
    <pre>
{`{ "a": null }   vs   {}`}
    </pre>
    <p>
      Bazı API'ler bunları aynı şekilde ele alır; bazıları almaz.
      Fark aracınızın tutarlı bir duruşu olmalıdır:
    </p>
    <p>
      <strong>Katı:</strong> eksik ve null farklıdır. Sözleşme
      testi için daha güvenlidir.
    </p>
    <p>
      <strong>Gevşek:</strong> eksik ve null aynıdır. İsteğe bağlı
      alanların düştüğü API yanıtlarını karşılaştırmak için
      kullanışlıdır.
    </p>

    <h2>Farkı görüntüleme</h2>
    <p>
      <strong>Yan yana:</strong> eski solda, yeni sağda,
      değişiklikler vurgulanmış. Küçük nesneler için en iyisi.
    </p>
    <p>
      <strong>Birleşik (yol tabanlı):</strong> JSON yoluna göre
      değişiklik listesi:{" "}
      <code>~user.email: &quot;old@x&quot; -&gt; &quot;new@x&quot;</code>.
      Az sayıda değişiklik içeren büyük nesneler için kompakt.
    </p>
    <p>
      <strong>JSON Patch (RFC 6902):</strong> işlemlerin yapılandırılmış
      çıktısı:{" "}
      <code>{`[{"op": "replace", "path": "/user/email", "value": "new@x"}]`}</code>.
      Makine tarafından okunabilir; yeniyi üretmek için eski nesneye
      uygulanabilir.
    </p>
    <p>
      <strong>JSON Merge Patch (RFC 7396):</strong> yamanın yalnızca
      kısmi bir JSON nesnesi olduğu daha basit biçim. Dizi
      işlemlerini iyi temsil edemez; basit nesne güncellemeleri
      için iyidir.
    </p>

    <h2>Yaygın kullanım durumları</h2>
    <p>
      <strong>API sözleşme testi:</strong> bilinen bir uç noktaya
      istek atın, yanıtı bir anlık görüntüyle karşılaştırın. Şema
      kaydığında uyarır.
    </p>
    <p>
      <strong>Yapılandırma dosyası incelemesi:</strong> neyin
      değiştiğini görmek için iki yapılandırma sürümünü karşılaştırın.
      Biçimlendirilmiş YAML/JSON üzerinde git farkından çok daha
      temiz.
    </p>
    <p>
      <strong>Senkronizasyon hata ayıklama:</strong> neyin eksik
      veya hatalı biçimlendirilmiş olduğunu bulmak için bir
      senkronizasyonun kaynağını ve hedefini karşılaştırın.
    </p>
    <p>
      <strong>Testlerde durum anlık görüntüleri:</strong> Jest'in
      <code>toMatchSnapshot</code>'i bir metin farkı yapar; yapısal
      durum için bir JSON farkı daha temizdir.
    </p>

    <h2>Bunun yerine metin farkı ne zaman kullanılır</h2>
    <p>
      <strong>Biçimlendirme önemlidir:</strong> bir JSON dosyasının
      girintilemesinin değişip değişmediğini kontrol etme — metin
      farkı.
    </p>
    <p>
      <strong>JSON5/JSONC'de yorumlar:</strong> JSON fark araçları
      yorumları kaldırır; metin farkı onları korur.
    </p>
    <p>
      <strong>Sürüm kontrolü:</strong> JSON dosyalarında git farkı.
      Çirkin, ancak zaten entegre. PR incelemesi için, yapısal bir
      fark eklentisi (Gitiles'ın json-diff'i gibi) daha hoştur.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>JSON'u metin olarak farklamak.</strong> Biçimlendirme
      gürültüsü gerçek değişiklikleri gömer. Yapısal fark kullanın.
    </p>
    <p>
      <strong>Dizi sırası anlambilimini görmezden gelmek.</strong>
      Sıra önemli değilse (örneğin, etiketler), fark aracına
      söyleyin. Önemliyse (örneğin, bir iş akışındaki adımlar),
      konumsal farkı koruyun.
    </p>
    <p>
      <strong>Null ve eksik olanı aynı kabul etmek.</strong> API'ler
      bunları ayırt eder. Sözleşme testiniz de ayırt etmelidir.
    </p>
    <p>
      <strong>Güzel biçimlendirilmiş JSON'u karşılaştırmak.</strong>
      Bir taraf küçültülmüş ve diğer taraf güzel biçimlendirilmişse,
      metin farkı her satırı değişmiş olarak gösterir. Önce biçimi
      normalleştirin.
    </p>
    <p>
      <strong>Kayan noktalı sayıları tam eşleme.</strong> Hesaplanan
      kayan noktalı sayılar nadiren bayt bazında eşleşir. Tolerans
      kullanın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      JSON yapılarını anında{" "}
      <a href="/tools/json-diff-checker">JSON fark denetleyicisi</a> ile
      karşılaştırın. Fark almadan önce normalleştirmek için{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile
      ve düz bir satır farkına ihtiyacınız olduğunda{" "}
      <a href="/tools/diff-checker">metin fark denetleyicisi</a> ile
      eşleştirin.
    </p>
  </>
);