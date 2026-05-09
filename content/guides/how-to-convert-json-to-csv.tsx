import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      JSON ve CSV, verilerin en sık dolaştığı iki formattır.
      JSON iç içe ve hiyerarşik; CSV ise düz ve tablo şeklindedir.
      Aralarında dönüşüm yapmak kulağa basit gelir ve genelde öyledir,
      ta ki uç durumlarla karşılaşana kadar: iç içe nesneler, değer olarak diziler,
      karışık şemalar, özel karakterler, on milyonlarca satır
      veya Excel'in CSV'nin nasıl görünmesi gerektiğine dair fikirleri.
      Bu kılavuz, gerçekten önemli olan dönüşüm kurallarını, iç içe verilerle nasıl başa çıkılacağını (düzleştirme vs yayma),
      kodlama ve ayraç tuzaklarını, büyük dosyalar için <a href="/learn/stream">akış</a> kullanımını,
      normal CSV'leri bozan Excel tuhaflıklarını ve ne zaman uygun bir ETL hattına yönelmeniz gerektiğini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Kolay yol dönüşümü</h2>
    <p>
      Zaten tablo şeklinde olan JSON (düz nesnelerden oluşan dizi) birebir CSV'ye dönüşür:
    </p>
    <pre>
{`[
  { "name": "Alice", "age": 30, "city": "NYC" },
  { "name": "Bob", "age": 25, "city": "LA" }
]`}
    </pre>
    <p>Şuna dönüşür:</p>
    <pre>
{`name,age,city
Alice,30,NYC
Bob,25,LA`}
    </pre>
    <p>
      Başlık satırı nesne anahtarlarını kullanır. Sütun sırası ya ekleme sırasıdır
      ya da alfabetiktir (açıkça seçin — aracınızın karar vermesine izin vermeyin).
    </p>

    <h2>İç içe veriler — düzleştirme veya yayma</h2>
    <p>
      İç içe JSON, düz CSV'ye sığmaz. Üç yaygın strateji:
    </p>
    <p>
      <strong>Nokta yoluyla düzleştirme:</strong>{" "}
      <code>user.address.city</code>, <code>user.address.city</code> adında bir sütun haline gelir.
      Tek seviyeli iç içelik için temiz; derin veya değişken yapılar için kullanışsız.
    </p>
    <p>
      <strong>Hücre içinde JSON:</strong> iç içe nesneleri veya dizileri
      tek bir sütunda kaçışlı JSON dizeleri olarak koyun:{" "}
      <code>{`"[{\\"id\\":1}]"`}</code>. Her şeyi korur, ancak
      yeniden ayrıştırmadan analiz edemezsiniz.
    </p>
    <p>
      <strong>Patlatma:</strong> bir diziyi, üst alanları çoğaltarak birden çok satıra dönüştürün.
      Dizi elemanı başına bir satır. Ters yönde kayıplıdır (orijinal yapıyı yeniden oluşturamazsınız).
    </p>
    <p>
      <strong>Tüketiciye göre seçim yapın:</strong> Excel'deki analistler patlatılmış satırlar ister;
      veri ambarları nokta yollarını ister; dışa aktarma hatları hücre içinde JSON ister.
    </p>

    <h2>Şema farklılıkları — satırların farklı anahtarları olduğunda</h2>
    <p>
      JSON nesnelerinin tümü aynı anahtarları paylaşmıyorsa, CSV bir seçim yapmaya zorlar:
    </p>
    <p>
      <strong>Birleşim başlıkları:</strong> herhangi bir yerde görünen her anahtarı dahil edin.
      Satırlar kullanılmayan hücreleri boş bırakır. Çoğu dönüştürücü için varsayılan.
    </p>
    <p>
      <strong>Kesişim başlıkları:</strong> yalnızca her satırda bulunan anahtarları dahil edin.
      Veri kaybına neden olur ancak tutarlı satırlar üretir.
    </p>
    <p>
      <strong>İlk nesne şeması:</strong> yalnızca ilk nesnedeki anahtarları kullanın.
      Ek anahtarlara sahip sonraki satırlardaki verileri sessizce atar. Kaçının.
    </p>
    <p>
      Birleşim genellikle istediğiniz şeydir. Satırlarda eksik anahtarlar olduğunda
      kullanıcıyı uyarın (veya günlüğe kaydedin) böylece veri boşluklarının var olduğunu bilirler.
    </p>

    <h2>Tırnak kullanımı ve kaçış</h2>
    <p>
      CSV kuralları (RFC 4180'e göre):
    </p>
    <p>
      Virgül, yeni satır veya çift tırnak içeren alanlar çift tırnak içine alınmalıdır.
    </p>
    <p>
      Tırnak içindeki çift tırnaklar ikiye katlanarak kaçılır:{" "}
      <code>{`"She said \\"hi\\""`}</code>.
    </p>
    <p>
      Tırnak içindeki yeni satırlar gerçektir — ayrıştırıcılar çok satırlı satırları işlemelidir.
    </p>
    <p>
      <strong>Dikkat:</strong> birçok araç (ve kişi) alanlardaki yeni satırlarda başarısız olur.
      Bazıları boşluklara normalleştirir; bazıları CSV'yi bozar; bazıları yine de Excel'de açılan bozuk çıktı üretir.
    </p>

    <h2>Ayraç savaşları</h2>
    <p>
      CSV, "virgülle ayrılmış değerler" anlamına gelir — öyle olmadığı zamanlar hariç.
    </p>
    <p>
      <strong>Virgül (,):</strong> ABD varsayılanı. Avrupa sayı biçimlerine sahip uluslararası verilerde bozulur.
    </p>
    <p>
      <strong>Noktalı virgül (;):</strong> Avrupa varsayılanı. Excel, virgülün ondalık ayracı olduğu yerel ayarlar için kullanır (Fransa, Almanya).
    </p>
    <p>
      <strong>Sekme (\t):</strong> "TSV." Virgülden daha güvenlidir çünkü sekme gerçek metinde nadiren görünür.
    </p>
    <p>
      <strong>Dikey çizgi (|):</strong> bazen veri alışverişi için kullanılır. Doğal metinde daha da nadirdir.
    </p>
    <p>
      <strong>Kural:</strong> TSV'yi doğru üretmek CSV'den daha kolaydır ancak insanların gözle kontrol etmesi daha zordur.
      Sistemler arasında veri göndermek için TSV'yi tercih edin. Excel'deki son kullanıcılar için yerel ayara duyarlı CSV kullanın.
    </p>

    <h2>Kodlama — BOM'lu (veya BOM'suz) UTF-8</h2>
    <p>
      CSV dosyalarının kodlamalarını bildiren bir başlığı yoktur. Deneyerek öğrenirsiniz.
    </p>
    <p>
      <strong>BOM'suz UTF-8:</strong> evrensel varsayılan.
    </p>
    <p>
      <strong>BOM'lu UTF-8:</strong> Windows'taki Excel, UTF-8'i otomatik algılamak için BOM'a ihtiyaç duyar.
      BOM olmadan, ASCII olmayan karakterler (é, ñ, 日) Excel Windows'ta bozuk görüntülenir.
    </p>
    <p>
      <strong>CP1252 / Windows-1252:</strong> bazı Windows araçlarının varsayılan olarak dışa aktardığı eski kodlama.
      Desteklediği 255 karakterin dışındaki herhangi bir karakterde bozulur.
    </p>
    <p>
      <strong>UTF-16:</strong> bazı Excel sürümleri, "Unicode Metin Olarak Kaydet" yaparsanız UTF-16 olarak kaydeder.
      Şimdi nadirdir ancak başarısız içe aktarmalara bakarsanız eninde sonunda görürsünüz.
    </p>
    <p>
      <strong>Excel için CSV mi sunuyorsunuz?</strong> BOM'lu UTF-8. Aksi halde BOM'suz UTF-8.
    </p>

    <h2>Büyük dosyalar — yüklemeyin, akış kullanın</h2>
    <p>
      500 MB'lık bir JSON dosyasını CSV yazmak için belleğe yüklemek → OOM.
      Akış kullanın:
    </p>
    <p>
      <strong>Akış JSON ayrıştırıcıları:</strong> JavaScript{" "}
      <code>stream-json</code>, Python <code>ijson</code>, Go{" "}
      <code>jsonitr</code>. Dosya okunurken nesneleri birer birer okuyun.
    </p>
    <p>
      <strong>Akış CSV yazıcıları:</strong> JSON okurken satır satır yazın.
      Sık sık boşaltın. Ağa yazarken geri basınç uygulayın.
    </p>
    <p>
      <strong>Satırla ayrılmış JSON (NDJSON):</strong> kaynağınız zaten satır başına bir JSON nesnesiyse,
      dönüştürme basittir — satırı oku, ayrıştır, CSV satırını yaz, tekrarla.
      Genellikle veri ambarlaması için en iyi seçimdir.
    </p>

    <h2>Excel'in fikirleri</h2>
    <p>
      Excel, CSV'nizin nasıl görünmesi gerektiğini bildiğini düşünür. Bilmez.
    </p>
    <p>
      <strong>Baştaki sıfırların silinmesi:</strong>{" "}
      <code>01234</code>, <code>1234</code> olur. <code>=&quot;01234&quot;</code> ile ön ekleyerek
      veya içe aktardıktan sonra sütunu metin olarak biçimlendirerek metin olmaya zorlayın.
    </p>
    <p>
      <strong>Uzun sayılar için bilimsel gösterim:</strong>{" "}
      <code>1234567890123456</code>, <code>1.23457E+15</code> olur.
      Uzun kimlikler, telefon numaraları, kredi kartı numaralarının tümü bozulur.
    </p>
    <p>
      <strong>Tarihlerin yeniden biçimlendirilmesi:</strong> <code>2026-04-22</code>
      {" "}yerel ayara bağlı olarak <code>22/04/2026</code> veya <code>4/22/2026</code>
      {" "}olabilir. Metin olarak önceden biçimlendirin veya kullanıcının otomatik biçimlendirmeyeceği ISO 8601 dizeleri kullanın.
    </p>
    <p>
      <strong>Gen adlarının tarihlere dönüşmesi:</strong> ünlü tuzak
      — SEPT1, 1-Eyl olur. Biyoinformatikçileri o kadar etkiler ki bazı genler Excel'den kaçınmak için yeniden adlandırılmıştır.
    </p>
    <p>
      <strong>CSV olarak kaydetme gidiş-dönüşü bozar:</strong> Excel, CSV'leri yerel ayara özgü biçimde kaydeder.
      Aç, kaydet ve CSV'ler sessizce ayraç, kodlama ve tarih biçimini değiştirebilir.
    </p>

    <h2>CSV'den JSON'a — tersi</h2>
    <p>
      Benzer kurallar, tersine çevrilmiş:
    </p>
    <p>
      Başlık satırı → JSON anahtarları.
    </p>
    <p>
      Her veri satırı → bir JSON nesnesi.
    </p>
    <p>
      Tür <a href="/learn/inference">çıkarımı</a>: sayı olarak ayrıştırmayı deneyin, başarısız olursa dizeye düşün.
      Bazı dönüştürücüler boolean ve null çıkarır; bazıları çıkarmaz.
      Tür beklentileriniz konusunda açık olun.
    </p>
    <p>
      Eksik değerler: boş dize, <code>null</code> veya eksik anahtar?
      Birini seçin ve belgeleyin.
    </p>

    <h2>CSV'nin yanlış format olduğu durumlar</h2>
    <p>
      <strong>Derinlemesine iç içe veriler:</strong> CSV yapıyı kaybeder.
      JSONL veya Parquet kullanın.
    </p>
    <p>
      <strong>10 GB'den büyük dosyalar:</strong> Sütunlu analitik için Parquet veya Arrow; CSV yavaştır.
    </p>
    <p>
      <strong>Önemli olan türlü veriler:</strong> JSON veya Parquet türleri korur; CSV kaybeder.
    </p>
    <p>
      <strong>İkili içerik:</strong> asla CSV. Base64 ile JSON'a kodlayın veya ikili yerel bir format kullanın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Virgülün güvenli olduğunu varsanmak.</strong> Virgül içeren herhangi bir metin — adresler, açıklamalar, tırnak içindeki metin — düzgün şekilde tırnak içine alınmalıdır.
      Kütüphaneyi kullanın, birleştirmeyin.
    </p>
    <p>
      <strong>Başlık satırını unutmak.</strong> Başlıksız CSV belirsizdir.
      Biçim açıkça yasaklamadıkça her zaman başlık ekleyin.
    </p>
    <p>
      <strong>Tırnaklı ve tırnaksız alanları tutarsız bir şekilde karıştırmak.</strong>
      RFC 4180 buna izin verir; ayrıştırıcılar genellikle izin vermez. Ya her şeyi tırnaklayın ya da hiçbir şeyi.
    </p>
    <p>
      <strong>Excel'i dönüştürücü olarak kullanmak.</strong> Excel sayıları, tarihleri ve kodlamayı bozar.
      Dönüştürmeyi kodlayın; Excel'i görüntülemek için kullanın.
    </p>
    <p>
      <strong>Satır sonlarını görmezden gelmek.</strong> CRLF (Windows) vs LF (Unix) basit ayrıştırıcıları bozabilir.
      RFC 4180 CRLF der; gerçeklik daha karmaşıktır.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      JSON'u anında CSV'ye dönüştürmek için{" "}
      <a href="/tools/json-to-csv">JSON'dan CSV'ye dönüştürücüyü</a> kullanın.
      Önce JSON'unuzu temizlemek için{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile ve
      ters yön için{" "}
      <a href="/tools/csv-to-json">CSV'den JSON'a dönüştürücü</a> ile eşleştirin.
    </p>
  </>
);