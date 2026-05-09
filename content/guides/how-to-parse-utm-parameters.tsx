import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      UTM parametrelerini gelen bir URL'den okumak kulağa tek satırlık bir iş gibi geliyor &mdash;
      <code> new URLSearchParams(location.search).get(&apos;utm_source&apos;)</code>
      {" "}ve işiniz bitti &mdash; ancak UTMLeri iyi kullanmak, onlarla ne yapacağınıza karar vermek anlamına gelir: ne zaman saklanacağı, ne zaman üzerine yazılacağı, ne zaman süresinin dolacağı ve analitiklerinize PII sızdırmadan nasıl bir atıflama zinciri oluşturulacağı. Beş parametre URL'den temiz bir şekilde gelir, ancak daha sonraki dönüşümler için birinci taraf çerezlere veya yerel depolamaya yükseltilmeleri gerekir ve ilk dokunuş ile son dokunuş arasındaki seçim, hangi kampanyaların kredi alacağını belirler. Bu kılavuz, ayrıştırma API'sini, bir atıflama zinciri oluşturmayı, ilk dokunuş ile son dokunuş kararını, GA4'ün aynı sorunu perde arkasında nasıl ele aldığını, yaygın sunucu tarafı ayrıştırma hatalarını ve UTMLerin günlüklere düştüğünde gizlilikle ilgili hususları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>UTMleri URL'den Çıkarma</h2>
    <p>
      Modern tarayıcılar ve Node size ücretsiz olarak
      <code> URLSearchParams</code> sağlar.
    </p>
    <pre>{`const params = new URLSearchParams(window.location.search);
const utms = {
  source:   params.get('utm_source'),
  medium:   params.get('utm_medium'),
  campaign: params.get('utm_campaign'),
  term:     params.get('utm_term'),
  content:  params.get('utm_content'),
};`}</pre>
    <p>
      <code>get()</code> parametre eksikse <code>null</code> döndürür.
      URL kod çözme otomatiktir &mdash; bir
      <code> utm_campaign=q1%20launch</code> şu şekilde çıkar:
      <code> &quot;q1 launch&quot;</code>.
    </p>

    <h2>Ne zaman okunmalı, ne zaman saklanmalı</h2>
    <p>
      UTMLeri bir oturumun ilk sayfa yüklenişinde okuyun. Herhangi biri varsa, saklayın. Hiçbiri yoksa, daha önce saklananı koruyun. Genellikle ihtiyacınız olan iki depolama alanı:
    </p>
    <p>
      <strong>Oturum kapsamlı</strong> (mevcut ziyaret): kullanıcının geldiği en son UTM seti. Bu ziyaretin dönüşümünde anlık atıflama için kullanılır.
    </p>
    <p>
      <strong>İlk dokunuş</strong> (tüm zamanlar): bu kullanıcının geldiği ilk UTM seti, bir kez yazılır ve asla üzerine yazılmaz. Kullanıcı çerezleri temizleyene veya depolamanızın süresi dolana kadar (genellikle 90 gün) yaşar.
    </p>
    <pre>{`function captureUtms() {
  const p = new URLSearchParams(location.search);
  const keys = ['utm_source','utm_medium','utm_campaign',
                'utm_term','utm_content'];
  const found = {};
  keys.forEach(k => {
    const v = p.get(k);
    if (v) found[k] = v;
  });
  if (Object.keys(found).length === 0) return;

  sessionStorage.setItem('last_touch', JSON.stringify(found));
  if (!localStorage.getItem('first_touch')) {
    localStorage.setItem('first_touch', JSON.stringify(found));
  }
}`}</pre>

    <h2>İlk dokunuş, son dokunuş ve çoklu dokunuş</h2>
    <p>
      <strong>İlk dokunuş</strong>, kullanıcıyı tanıtan kampanyaya tam kredi verir. Üst huniyi değerlendirmek için harikadır. Kullanıcıyı gerçekten dönüştüren besleme kampanyalarına karşı kördür.
    </p>
    <p>
      <strong>Son dokunuş</strong>, dönüşümden önceki son tıklamaya kredi verir. Hesaplaması kolaydır, ancak yeniden hedefleme ve markalı aramayı aşırı kredilendirme eğilimindedir.
    </p>
    <p>
      <strong>Doğrusal veya konum tabanlı</strong> çoklu dokunuş, krediyi tüm dokunuşlar arasında dağıtır. Daha doğru, uygulaması daha zor ve oturumlar arasında birleştirilmiş bir kullanıcı yolculuğu gerektirir.
    </p>
    <p>
      Çoğu SaaS için: hem ilk hem de son dokunuşu yakalayın, ikisini de raporlayın ve gelir operasyonlarının oran hakkında tartışmasına izin verin. Sayfa görüntüleme anında ikisini de yakalamak ekstra bir maliyet getirmez.
    </p>

    <h2>Atıflama zinciri</h2>
    <p>
      Bir kullanıcı dönüşüm yapmadan önce sitenizi altı kez ziyaret edebilir ve her ziyaret bir UTM seti taşıyabilir veya taşımayabilir. Sıra şöyle görünür:
    </p>
    <pre>{`ziyaret 1: utm_source=reddit    medium=social     campaign=launch_post
ziyaret 2: (doğrudan, UTM yok)
ziyaret 3: utm_source=newsletter medium=email      campaign=tip_tuesday
ziyaret 4: (doğrudan)
ziyaret 5: utm_source=google     medium=cpc        campaign=brand
ziyaret 6: (doğrudan) -> dönüşüm`}</pre>
    <p>
      İlk dokunuş <code>reddit / social</code> kredisini verir. Son dokunuş (doğrudan olmayan) <code>google / cpc</code> kredisini verir. Her ikisi de değerli olabilir; hiçbiri tam değildir. Tam zinciri oluşturmak için, yerel depolamada veya sunucuda, sınırsız büyümeyi önlemek için makul bir uzunlukta (10&ndash;20 dokunuş) sınırlandırılmış, yalnızca ekleme yapılabilen bir dizi saklayın.
    </p>

    <h2>Sunucu tarafında ayrıştırma</h2>
    <p>
      Sunucu ayrıştırması aynı URL kurallarını izler ancak iki tuzakla birlikte gelir. İlk olarak, Express gibi çerçeveler sorgu parametrelerini zaten çözer &mdash; <code>req.query.utm_source</code> okumak size çözülmüş bir dize verir, bu nedenle tekrar çözmek çift kod çözmedir. İkinci olarak, uygulamanız bir CDN'nin arkasındayken, CDN'nin sorgu dizesini bozulmadan ilettiğinden emin olun; bazı önbelleğe alma kuralları, parametreleri kaynak sunucuya ulaşmadan önce kaldırır.
    </p>
    <pre>{`app.get('/landing', (req, res) => {
  const { utm_source, utm_medium, utm_campaign,
          utm_term, utm_content } = req.query;
  if (utm_source) {
    logTouch(req.cookies.anon_id, {
      source: utm_source,
      medium: utm_medium,
      campaign: utm_campaign,
      ts: Date.now()
    });
  }
  res.render('landing');
});`}</pre>

    <h2>UTMleri analitik aracınıza iletme</h2>
    <p>
      GA4, Amplitude, Mixpanel veya benzerini kullanıyorsanız, UTMLeri URL'den otomatik olarak okurlar &mdash; onları iletmeniz gerekmez. Sakladığınız UTMLer, dahili panolar, CRM zenginleştirme ve istemci tarafı etiketinin ulaşamadığı sunucu tarafı olay günlüğü için ekstralardır.
    </p>
    <p>
      CRM'nize gönderirken, beş UTM'yi potansiyel müşteri oluşturma sırasında adlandırılmış alanlarla eşleyin (örneğin, HubSpot'un
      <code> hs_analytics_source</code>). Bunları bir kez ayarlayın; modeliniz tamamen son dokunuş değilse, sonraki ziyaretlerde üzerine yazmayın.
    </p>

    <h2>Çapraz alan ve alt alan birleştirme</h2>
    <p>
      Yerel depolama kaynak bazında olduğundan,
      <code> www.example.com</code> adresinden
      <code> app.example.com</code> adresine akan bir kullanıcı, saklanan UTMLerini kaybeder. Üç seçenek:
    </p>
    <p>
      <strong>Alt alanlar arasındaki bağlantıda UTMLeri iletin.</strong>
      Dar bir aktarım için iyidir (pazarlama sitesi &rarr; kayıt formu).
    </p>
    <p>
      <strong>Bir üst alan çerezi paylaşın</strong>
      (<code>Domain=.example.com</code>). Alt alanlar arasında çalışır ancak tamamen farklı alanlar arasında çalışmaz.
    </p>
    <p>
      <strong>Kullanıcıya her iki tarafın da paylaştığı sabit bir kimlik gönderin</strong>
      ve atıflamayı sunucu tarafında yapın. En güvenilir yaklaşım ancak en çok işi gerektirir.
    </p>

    <h2>Gizlilikle ilgili hususlar</h2>
    <p>
      UTM parametreleri kişisel veri değildir, ancak günlüğe kaydedilen, indekslenen ve paylaşılan URL'lerde bulunurlar. Gibi bir UTM
      <code> utm_content=abandoned_cart_24h_doug</code>, şablon dikkatsizse günlüklere bir kullanıcı adı sızdırır. İki kural:
    </p>
    <p>
      PII &mdash; ad, e-posta, telefon, hesap kimliği &mdash; asla UTM değerlerine koymayın. Kolaylık, uyumluluk riskine (GDPR, CCPA) değmez.
    </p>
    <p>
      Yakalama işleminden sonra UTMLeri görünür URL'den
      <code> history.replaceState</code> kullanarak kaldırın, böylece ileriye kopyalanmazlar ve URL'yi kurallı amaçlar için temiz tutun.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Her ziyarette ilk dokunuşun üzerine yazmak.</strong>
      İlk dokunuş deposuna koşulsuz yazmak onu siler. Ayarlamadan önce varlığını kontrol edin.
    </p>
    <p>
      <strong>Çift kod çözme.</strong>
      Sorgu parametreleri
      <code> URLSearchParams</code> veya <code>req.query</code> adresinden zaten çözülmüş olarak gelir.
      <code>decodeURIComponent</code> öğesini <code> &quot;q1 launch&quot;</code> üzerinde tekrar çağırmak, değer bir <code>%</code> içermiyorsa hiçbir şey yapmaz.
    </p>
    <p>
      <strong>Hiç bitmeyen kampanyaları etiketlemek.</strong>
      Eski UTM bağlantıları sonsuza kadar yaşar. İyi niyetli bir müşteri başarı temsilcisi, bir yıllık bir açılış sayfası URL'sine bağlantı verir ve bu kampanya bugünün raporunda canlanır. Eski URL'lerin süresini doldurun veya kampanya adlarını yılla sürümlendirin.
    </p>
    <p>
      <strong>UTMleri okumadan önce kaldırmak.</strong>
      Bazı güvenlik kitaplıkları, girişte URL'leri kurallaştırır; yakalama kodunuzdan önce çalışırlarsa, parametreler zaten gitmiştir. Sıra önemlidir.
    </p>
    <p>
      <strong>Atıflama boşluğunu doldurmak için yönlendireni yok saymak.</strong>
      UTMler eksik olduğunda, <code>document.referrer</code> genellikle yararlı sinyaller taşır (<code>facebook.com</code>,
      <code> t.co</code>, <code>google.com</code>). İki kaynağı çapraz referanslayın.
    </p>
    <p>
      <strong>Hata raporlarında UTMlerle birlikte tam URL'leri günlüğe kaydetmek.</strong>
      UTM değerleri, kampanya stratejisini ve bazen PII'yi üçüncü taraf hata izleme araçlarına sızdırır. Göndermeden önce URL'leri temizleyin.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Herhangi bir URL'yi{" "}
      <a href="/tools/utm-parser">UTM ayrıştırıcıya</a> yapıştırarak kodunuzun onu tam olarak nasıl okuyacağını görün. Bir sayfada UTM olmayan izleme de olduğunda tam parametre setini ayrıştırmak için{" "}
      <a href="/tools/query-string-parser">sorgu dizesi ayrıştırıcı</a>
      {" "}ile birlikte kullanın ve kullanıcıların paylaşmasını istediğiniz bir URL'nin UTM içermeyen bir sürümünü oluşturmak için{" "}
      <a href="/tools/url-cleaner">URL temizleyiciyi</a>
      {" "}kullanın.
    </p>
  </>
);