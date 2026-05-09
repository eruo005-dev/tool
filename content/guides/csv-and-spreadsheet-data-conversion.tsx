/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Veri dönüşümü, çoğu analitik iş akışının merkezinde yer alır: bir sistemden CSV olarak dışa aktarılan veriler, başka bir sistemin JSON'a ihtiyacı vardır, bir analist bunu Excel'de görmek ister, bir mühendis XML gerektirir. Bu kılavuz, verilerinizi kaybetmeden formatlar arasında geçiş yapmak için pratik bir yol haritasıdır — ve her dönüşüm için ücretsiz araçlarımızdan hangisini kullanmanız gerektiğini söyler.
    </p>
  </>
);

export const toc = [
  { id: "csv-to-excel", label: "CSV'den Excel'e: en kolay yöntem" },
  { id: "json-to-csv", label: "Analiz için JSON'dan CSV'ye" },
  { id: "xml-to-csv", label: "Adım adım XML'den CSV'ye" },
  { id: "structure", label: "Formatlar arasında yapıyı korumak" },
  { id: "common-issues", label: "Yaygın tuzaklar" },
];

export const body = (
  <>
    <h2 id="csv-to-excel">CSV'den Excel'e: en kolay dönüşüm yöntemi</h2>
    <p>
      Üç seçenek, her biri uygulanabilir:
    </p>
    <ol>
      <li>
        <strong>CSV'yi doğrudan Excel'de açın.</strong> Evet — modern Excel, CSV'yi yerel olarak işler. Dosya → Aç → CSV'yi seçin. Excel, ayırıcıları otomatik olarak algılar. Ancak dikkatli olun: Excel bazen tarih veya sayı olduğunu düşündüğü alanları bozar (baştaki sıfırlar silinir, posta kodları bilimsel gösterime dönüşür). Veri bütünlüğü için bunun yerine Power Query'yi (Veri → Metin/CSV'den) kullanın — size sütun türü kontrolleri sağlar.
      </li>
      <li>
        <strong><a href="/tools/csv-to-excel-xml">CSV'den Excel'e dönüştürücümüzü</a> kullanın.</strong> CSV'yi yapıştırın, Excel, Google Sheets ve LibreOffice'in yerel olarak açtığı gerçek bir Excel dosyası (.xls SpreadsheetML 2003 formatı) indirin. Yalnızca tarayıcı tabanlı, yükleme yok, sayı ve metin sütun türlerini korur. Bir Excel dosyası paylaşmak istediğinizde en iyisidir.
      </li>
      <li>
        <strong>Google Sheets içe aktarma.</strong> Dosya → İçe Aktar → CSV'yi yükleyin. Genellikle Excel'den daha temiz tür algılama. Ücretsiz, ancak Google'ın sunucuları üzerinden gider.
      </li>
    </ol>
    <p>
      Çoğu kişinin karşılaştığı gizli tuzak: Excel, belirli dizeleri otomatik olarak tarihlere veya sayılara dönüştürür. Başında sıfır olan bir posta kodu sütununuz ("01234"), sayı gibi görünen işlem kimliği sütunlarınız veya tarih benzeri herhangi bir şeyiniz varsa, Excel bunları sessizce bozacaktır. Üretim verileri için her zaman Power Query'yi (Veri → Metin/CSV'den) kullanın — içe aktarmadan önce sütun türlerini kilitlemenizi sağlar.
    </p>

    <h2 id="json-to-csv">Veri analizi için JSON'dan CSV'ye</h2>
    <p>
      Temel düz durumlar için (basit alanlara sahip nesne dizisi) <a href="/tools/json-to-csv">JSON'dan CSV'ye dönüştürücümüzü</a> kullanın. Daha karmaşık durumlar:
    </p>
    <ul>
      <li>
        <strong>İç içe nesneler:</strong> dönüştürücü, iç içe alanları nokta-yol sütunlarına düzleştirir (<code>address.city</code>,{" "}
        <code>address.zip</code>). 1-2 seviye iç içelik için çalışır; daha derin iç içelik kullanışsız hale gelir.
      </li>
      <li>
        <strong>Diziler içindeki diziler:</strong> dönüştürücü bunları indeksler (<code>tags[0]</code>, <code>tags[1]</code>). Değişken uzunluktaki diziler için CSV, daha kısa satırlarda NULL sütunlara sahip olacaktır. Çoğu durum için kabul edilebilir; aşağı akış analiz aracınız normalleştirilmiş veri bekliyorsa, birden çok satıra dönüştürmeyi düşünün.
      </li>
      <li>
        <strong>Karma şemalar:</strong> bazı nesnelerde diğerlerinde olmayan alanlar varsa, tüm anahtarların birleşimi başlık kümesi haline gelir. Eksik alanlar için boş hücreler. Bu genellikle doğrudur.
      </li>
      <li>
        <strong>Çok büyük dosyalar:</strong> tarayıcı tarafı dönüşümü, ~100 MB'a kadar sorunsuz bir şekilde işler. Bunun üzerinde, bir CLI aracı (<code>jq</code> + bir CSV biçimlendirici) veya Python'da Pandas kullanın.
      </li>
    </ul>

    <h2 id="xml-to-csv">Adım adım XML'den CSV'ye</h2>
    <p>
      <a href="/tools/xml-to-csv">XML'den CSV'ye dönüştürücümüzü</a> kullanın. İş akışı:
    </p>
    <ol>
      <li>
        <strong>Satır öğesini belirleyin.</strong> XML'inizdeki tekrar eden birim nedir? Bir müşteri dışa aktarımında, genellikle{" "}
        <code>&lt;customer&gt;</code> veya <code>&lt;record&gt;</code>'dur. Aracımız, kökün ilk tekrar eden alt öğesini otomatik olarak algılar, ancak bir CSS seçici ile geçersiz kılabilirsiniz.
      </li>
      <li>
        <strong>XML'i yapıştırın.</strong> Araç, tarayıcının yerel DOMParser'ı ile ayrıştırır. Hatalar (eşleşmeyen etiketler, geçersiz karakterler) hemen gösterilir.
      </li>
      <li>
        <strong>Satır ve sütun sayısını doğrulayın.</strong> Sayı yanlış görünüyorsa (örneğin, 100 beklerken 1 satır), satır seçici muhtemelen yanlıştır. Manuel olarak ayarlayın.
      </li>
      <li>
        <strong>CSV'yi indirin veya kopyalayın.</strong> Tamamlandı.
      </li>
    </ol>
    <p>
      Derinlemesine iç içe veya hiyerarşik XML (iç içe dizilerle 3+ seviye iç içelik) için CSV doğru çıktı formatı değildir — geniş ve seyrek bir tablo elde edersiniz. Önce JSON'a dönüştürün, ardından gerçek bir ETL aracıyla işleyin.
    </p>

    <h2 id="structure">Formatları dönüştürürken dosya yapısını korumak</h2>
    <p>
      Genel ilke: kayıplı dönüşümler tek yönlüdür. Daha zengin bir formattan daha düz bir formata (XML → CSV, JSON → CSV, DOCX → düz metin) geçtiğinizde, orijinal yapıyı mükemmel bir şekilde geri kazanamazsınız. Buna göre plan yapın:
    </p>
    <ul>
      <li>
        <strong>Orijinali saklayın.</strong> Her zaman. Depolama ucuzdur, pişmanlık pahalıdır.
      </li>
      <li>
        <strong>Dönüşüm seçimlerinizi belgeleyin.</strong> İç içe alanları nokta-yol adlarıyla düzleştirdiyseniz, ne yaptığınızı yazın. Altı ay sonra yeniden yapılandırmanız gerektiğinde kendinize teşekkür edeceksiniz.
      </li>
      <li>
        <strong>Ara formatları akıllıca kullanın.</strong> XML → JSON (zengin → zengin) yapıyı korur. JSON → CSV (zengin → düz) kaybeder. XML → CSV → tekrar XML'e gitmeniz gerekiyorsa, veri kaybı bekleyin.
      </li>
      <li>
        <strong>Çok adımlı dönüşümler için:</strong> mümkün olduğunca az adım yapın. Her dönüşüm hatalara neden olabilir. Doğrudan XML → JSON, XML → CSV → JSON'dan daha iyidir.
      </li>
    </ul>

    <h2 id="common-issues">Veri dönüşümünde yaygın tuzaklar</h2>
    <ul>
      <li>
        <strong>Tarih biçimlendirme:</strong> CSV'nin tarih türü yoktur. Farklı araçlar "01/02/03" ifadesini farklı yorumlar (2 Ocak 2003; 1 Şubat 2003; veya başka bir şey). Taşınabilirlik için her zaman ISO 8601 (<code>2003-01-02</code>) kullanın.
      </li>
      <li>
        <strong>Baştaki sıfırlar:</strong> Posta kodları, kimlikler, hesap numaraları otomatik olarak tam sayılara dönüştürülür ve baştaki sıfırları kaybeder. Bunları CSV'de dize olarak tırnak içine alın (<code>"01234"</code>) veya Excel'de Power Query kullanın.
      </li>
      <li>
        <strong>Kodlama:</strong> ASCII olmayan karakterler (aksanlar, emoji, Latin olmayan alfabeler) UTF-8 gerektirir. Excel CSV içe aktarma bazen varsayılan olarak Windows-1252'yi kullanır — Power Query sihirbazında "Unicode (UTF-8)" seçeneğini seçin.
      </li>
      <li>
        <strong>Virgül içeren tırnaklı alanlar:</strong> RFC 4180, bunların tırnak içine alınması gerektiğini söyler. Bazı kötü CSV yazıcıları bunu yapmaz. Dönüştürücünüz takılırsa, girdi hatalı biçimlendirilmiştir — dönüştürmeden önce temizleyin.
      </li>
      <li>
        <strong>Excel'in satır sınırı:</strong> Excel yaklaşık 1 milyon satırı işler. Daha büyük dosyalar: birden çok sayfaya bölün veya gerçek bir veritabanı kullanın.
      </li>
      <li>
        <strong>Sütun adlarında özel karakterler:</strong> bazı araçlar nokta, eğik çizgi veya boşluğa izin vermez. BI araçlarına, veritabanlarına veya programatik herhangi bir şeye dışa aktarmadan önce sütun adlarını temizleyin.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "XML'den CSV'ye Dönüştür (ücretsiz, yalnızca tarayıcı)",
  targetSlug: "xml-to-csv",
};

export const faq = [
  {
    q: "CSV'yi Excel'e dönüştürmenin en kolay yolu nedir?",
    a: "Üç seçenek: CSV'yi doğrudan Excel'de açın (Dosya → Aç), gerçek bir .xls dosyası için CSV'den Excel'e dönüştürücümüzü kullanın veya sütun türü kontrolü sağlayan Excel Power Query (Veri → Metin/CSV'den) ile içe aktarın. Power Query yöntemi, Excel'in posta kodlarını, kimlikleri ve tarih benzeri dizeleri otomatik olarak bozmasını önler.",
  },
  {
    q: "Veri analizi için JSON'u CSV'ye nasıl dönüştürebilirim?",
    a: "Düz dizi-of-nesneler JSON için JSON'dan CSV'ye aracımızı kullanın. İç içe nesneler nokta-yol sütunlarıyla düzleştirilir; diziler indekslenir. Derinlemesine iç içe veya çok büyük (>100 MB) JSON için bunun yerine jq veya Pandas kullanın. Orijinal JSON'u saklayın — CSV'ye düzleştirildikten sonra yapıyı kurtaramazsınız.",
  },
  {
    q: "XML'yi CSV'ye adım adım nasıl dönüştürebilirim?",
    a: "XML'den CSV'ye dönüştürücümüzü kullanın. (1) Tekrar eden satır öğesini belirleyin (varsayılan olarak otomatik algılanır), (2) XML'i yapıştırın, (3) satır ve sütun sayısını doğrulayın, (4) CSV'yi indirin. Derinlemesine iç içe XML için önce JSON'a dönüştürün, ardından gerçek bir ETL aracıyla işleyin — CSV, hiyerarşik veriler için doğru çıktı değildir.",
  },
  {
    q: "Formatları dönüştürürken dosya yapımı nasıl koruyabilirim?",
    a: "Orijinali her zaman saklayın. Gelecekteki sizin için dönüşüm seçimlerinizi belgeleyin. Ara formatları akıllıca kullanın — XML → JSON yapıyı korur; JSON → CSV kayıplıdır. Mümkün olduğunca az adım yapın — her dönüşüm hata ekler. Kayıplı adımlar (zengin → düz) için, ters dönüşümün veri kaybıyla sonuçlanacağını bekleyin.",
  },
];