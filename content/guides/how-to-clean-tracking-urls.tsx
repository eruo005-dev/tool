import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bugün internette dolaşan her bağlantı, önceden yüklenmiş izleme
      çöpleriyle gelir: Facebook'tan <code>fbclid</code>,
      Google Ads'den <code> gclid</code>,
      Mailchimp'ten <code> mc_cid</code>,
      çapraz alan Google Analytics'ten <code> _ga</code> ve
      iyi bir önlem olarak beş <code>utm_*</code> parametresi.
      Bunların hiçbiri hangi sayfaya geldiğinizi değiştirmez; hepsi
      URL'yi karmaşıklaştırır, bağlantıyı paylaştığınız kişiye
      pazarlama verilerini sızdırır ve kendi analizlerinizde
      yinelenen içerik baş ağrıları yaratır.
      Bunları temizlemek küçük bir kural seti ve biraz özen gerektirir &mdash;
      bazı parametreler sizin kontrol ettiğiniz verilerdir, diğerleri ise
      aşağı akışta üçüncü taraflar tarafından eklenir. Bu kılavuz, en yaygın
      izleme parametrelerini ve bunları kimin eklediğini, paylaştığınız
      URL'leri temizlemek ile kendi sitenizdeki URL'leri kurallaştırmak
      arasındaki farkı, güvenli bir izin listesi ve engelleme listesi
      yaklaşımını, bunları kaldırmanın gizlilik gerekçesini ve
      temizlemenin sorun çıkardığı köşe durumları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Olağan şüpheliler</h2>
    <p>
      Gerçek dünya URL'lerinde biriken parametrelerin kapsamlı olmayan bir turu.
    </p>
    <p>
      <strong>utm_source, utm_medium, utm_campaign, utm_term,
      utm_content</strong> &mdash; sizin veya pazarlama ekibinizin eklediği
      Urchin/Google Analytics parametreleri. Analizler tetiklendikten sonra
      kaldırmak güvenlidir.
    </p>
    <p>
      <strong>gclid, gclsrc, dclid, wbraid, gbraid</strong> &mdash;
      Google Ads tıklama kimlikleri. Otomatik etiketleme açıkken Google Ads
      tarafından otomatik olarak eklenir. Tıklamaları Ads'e bağlamak için
      GA4 tarafından gereklidir, ancak yalnızca varışta &mdash; sunucu
      tarafında yakalandıktan sonra ölü ağırlıktır.
    </p>
    <p>
      <strong>fbclid</strong> &mdash; Facebook tıklama kimliği, kullanıcı
      tıkladığında Facebook tarafından herhangi bir giden bağlantıya eklenir.
      Facebook Ads'e atıf için kullanılır.
    </p>
    <p>
      <strong>msclkid</strong> &mdash; Microsoft/Bing Ads tıklama kimliği.
    </p>
    <p>
      <strong>ttclid</strong> &mdash; TikTok tıklama kimliği.
    </p>
    <p>
      <strong>li_fat_id</strong> &mdash; LinkedIn tıklama kimliği.
    </p>
    <p>
      <strong>twclid</strong> &mdash; X/Twitter tıklama kimliği.
    </p>
    <p>
      <strong>mc_cid, mc_eid</strong> &mdash; Mailchimp kampanya kimliği
      ve kodlanmış abone kimliği. İkincisi, gerçek bir kişiyi liste
      kaydına kadar tanımlayabilir.
    </p>
    <p>
      <strong>_ga, _gl</strong> &mdash; Google Analytics çapraz alan
      bağlayıcı parametreleri. Kullanıcı, GA bağlayıcısı tarafından
      süslenmiş bir bağlantıya tıkladığında mülkleriniz arasında eklenir.
    </p>
    <p>
      <strong>yclid</strong> &mdash; Yandex tıklama kimliği.
    </p>
    <p>
      <strong>oly_anon_id, oly_enc_id</strong> &mdash; Yayıncılık
      sitelerinde yaygın olan Omeda tanımlayıcıları.
    </p>

    <h2>Paylaştığınız URL'leri temizlemek vs sitenizdeki URL'ler</h2>
    <p>
      Aynı &ldquo;temizleme&rdquo; şemsiyesi altında iki çok farklı sorun
      yatar.
    </p>
    <p>
      <strong>Paylaşılabilir URL'ler.</strong> Bir kullanıcı adres
      çubuğundaki bağlantıyı bir arkadaşına göndermek için kopyalamak
      istediğinde, yönlendiren kampanya etiketlerini veya reklam ağının
      eklediği tıklama kimliğini taşımamalıdır. Çözüm istemci tarafındadır:
      sayfa yüklemesinde analizler tetiklendikten sonra, URL'yi
      <code> history.replaceState</code> ile temiz bir sürüme yeniden yazın.
    </p>
    <p>
      <strong>Sitenizdeki kurallı URL'ler.</strong> Sayfalarınız, kullanıcıyı
      hangi izleme varyantı getirirse getirsin, yalnızca bir tane <a href="/learn/canonical-url">kurallı URL</a>'ye sahip olmalıdır. Temiz URL'yi
      işaret eden bir <code> &lt;link rel=&quot;canonical&quot;&gt;</code>
      ayarlayın ve site haritanızın, dahili bağlantılarınızın ve OG
      etiketlerinizin aynı formu kullandığından emin olun. Bu, izleme
      varyantlarının ayrı sayfalar olarak indekslenmesini önler.
    </p>

    <h2>Yakaladıktan sonra kaldırma deseni</h2>
    <p>
      İzleme araçlarının parametreleri tam olarak bir kez görmesine izin
      verin, ardından kaldırın.
    </p>
    <pre>{`// Analizler location.search'i okuduktan sonra çalışır
const TRACKING = new Set([
  'utm_source','utm_medium','utm_campaign','utm_term','utm_content',
  'gclid','gclsrc','dclid','wbraid','gbraid',
  'fbclid','msclkid','ttclid','li_fat_id','twclid','yclid',
  'mc_cid','mc_eid','_ga','_gl'
]);

const url = new URL(location.href);
const keep = new URLSearchParams();
for (const [k, v] of url.searchParams) {
  if (!TRACKING.has(k)) keep.append(k, v);
}
url.search = keep.toString();
history.replaceState(null, '', url.toString());`}</pre>
    <p>
      Yüklemede bir kez çalışır; bir gezinme tetiklemez veya analizleri
      bozmaz. Adres çubuğu artık kopyalanmaya hazır temiz URL'yi gösterir.
    </p>

    <h2>İzin listesi vs engelleme listesi</h2>
    <p>
      Bir engelleme listesi (bu bilinen kötü anahtarları kaldır) çoğu
      sitenin kullandığı şeydir. Affedicidir &mdash; bilinmeyen parametreler
      hayatta kalır &mdash; ancak yeni platformlar yeni tıklama kimlikleri
      icat ettikçe bakım gerektirir.
    </p>
    <p>
      Bir izin listesi (yalnızca bu anahtarları tut) daha katıdır ve
      kendi kendini idame ettirir. İzin verilen kümede olmayan herhangi bir
      parametre kaldırılır. URL'nin küçük, sabit bir dizi anlamlı parametre
      (arama, sayfalama, bir filtre veya iki) taşıdığı ve geri kalan her
      şeyin izleme olduğu siteler için en iyisidir.
    </p>
    <p>
      Büyük içerik siteleri engelleme listeleri kullanma eğilimindedir;
      odaklanmış uygulamalar ve e-ticaret izin listeleri kullanma eğilimindedir.
    </p>

    <h2>Kurallı etiketler SEO tarafını halleder</h2>
    <p>
      URL'leri istemci tarafında yeniden yazmasanız bile, doğru bir
      <code> &lt;link rel=&quot;canonical&quot;&gt;</code> arama motoru
      tarafındaki çoğu yinelemeyi çözer.
    </p>
    <pre>{`<link rel="canonical" href="https://example.com/pricing" />`}</pre>
    <p>
      Bu head'deyken, Google
      <code> /pricing?utm_source=newsletter</code> ve
      <code> /pricing?fbclid=abc123</code>'ün
      <code> /pricing</code> ile aynı sayfa olduğunu anlar ve sıralama
      sinyallerini temiz URL'de birleştirir.
    </p>

    <h2>Yönlendirme spam'i ve gereksiz parametreler</h2>
    <p>
      Meşru izlemenin ötesinde, URL'ler gereksiz şeyler toplar:
    </p>
    <p>
      <strong>Yönlendirme spam'i</strong> &mdash; analizlerinizde görünmek
      için sahte kampanyalar enjekte eden botlar. Belirtiler: hiç
      ayarlamadığınız bir UTM kaynağı (&ldquo;semalt.com&rdquo;,
      &ldquo;buttons-for-website.com&rdquo;), aniden trafik yönlendiriyor.
      URL düzeyinde değil, analiz düzeyinde filtreleyin.
    </p>
    <p>
      <strong>Kopyala-yapıştır kazaları</strong> &mdash;
      <code> &amp;amp;</code> olması gereken yerde <code>&amp;</code>,
      fazladan soru işaretleri, bir doküman yapıştırmasından kalan
      parçalar. URL() ile bir kaldırma ve yeniden oluşturma çoğunu düzeltir.
    </p>

    <h2>Yer imi ve arşivleme</h2>
    <p>
      Bir kullanıcının bugün yer imine eklediği bir URL altı ay sonra
      yeniden açılabilir. Yer imi tek kullanımlık bir <code>gclid</code>
      içeriyorsa, reklam ağı bunu süresi dolmuş olarak reddedebilir veya
      tekrar saldırı bayrağı koyabilir. Temiz bir URL'ye yeniden yazmak,
      yer imlerinin uzun vadede geçerli kalmasını sağlar.
    </p>

    <h2>Her şeyi körü körüne kaldırmayın</h2>
    <p>
      Bazı sorgu parametreleri gerçek uygulama durumu taşır ve bunları
      kaldırmak sayfayı bozar.
    </p>
    <p>
      <strong>Sayfalama</strong>:
      <code> ?page=3</code>. İçerik için gereklidir.
    </p>
    <p>
      <strong>Arama sorguları</strong>:
      <code> ?q=keyboard</code>. URL'nin tüm amacı.
    </p>
    <p>
      <strong>Filtreler ve sıralama düzeni</strong>:
      <code> ?sort=price_asc&amp;in_stock=1</code>.
    </p>
    <p>
      <strong>URL üzerinden iletilen kimlik doğrulama/oturum belirteçleri</strong>
      (nadir ancak sihirli bağlantı akışlarında olur). Alıcı kod bunları
      tüketmeden önce asla kaldırmayın.
    </p>

    <h2>Kaldırmanın gizlilik gerekçesi</h2>
    <p>
      İzleme parametreleri URL'ye dokunan her sisteme sızar: tarayıcı
      geçmişi, proxy günlükleri, yönlendiren başlıkları, ekran görüntüleri,
      paylaşılan panolar. Bir <code>mc_eid</code>
      {" "}bireysel bir aboneyi tanımlayabilir; bir
      <code> fbclid</code> bir Facebook reklam kitlesine yeniden
      katılabilir. Analizlere hizmet ettikten sonra bunları kaldırmak
      temel hijyendir &mdash; Safari, Brave ve Firefox zaten bilinen
      izleme parametrelerini giden bağlantılardan varsayılan olarak
      kaldırır, bu nedenle proaktif olarak temizlemek URL'lerinizi
      tarayıcıların gittiği yöne uygun hale getirir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Analizler tetiklenmeden önce kaldırmak.</strong> Yeniden
      yazmanız sayfa yüklemesinde çalışır, ancak GA4'ün sayfa görüntüleme
      isteği hala yolda olabilir. Kaldırmayı bir
      <code> gtag(&apos;event&apos;)</code> onayından sonra veya kısa bir
      <code>setTimeout</code> ile ya da
      <code> requestIdleCallback</code> aracılığıyla çalıştırın.
    </p>
    <p>
      <strong>Kurallı etiketi unutmak.</strong> Adres çubuğunu yeniden
      yazmak yalnızca insanlara yardımcı olur. Arama motorları ve sosyal
      tarayıcılar, OG etiketlerini okumadan önce JavaScript'inizi çalıştırmaz.
      Bir kurallı bağlantı ayarlayın.
    </p>
    <p>
      <strong>Sizin eklemediğiniz parametreleri kaldırmak.</strong> Bir
      üçüncü taraf gömülü içeriği, sitenizin bilmediği bir sorgu
      parametresine güveniyorsa, katı bir izin listesi onu bozacaktır.
      Bir izin listesi dağıtmadan önce gömülü içerikleri denetleyin.
    </p>
    <p>
      <strong>Derin bağlantıları bozmak.</strong> Mobil uygulama derin
      bağlantı şemaları bazen uygulamaya özel parametreleri web üzerinden
      iletir. Aşırı hevesli bir temizleyici, uygulamanın başlatıldıktan
      sonra ihtiyaç duyduğu yükü kaldırabilir.
    </p>
    <p>
      <strong>Her gezinmede kaldırmak.</strong> Temizlemeyi sayfanın ilk
      yüklenmesinde çalıştırın, her SPA rota değişikliğinde değil.
      Yönlendirici aracılığıyla ayarladığınız dahili durum (<code>?tab=billing</code>)
      izleme değildir.
    </p>
    <p>
      <strong>Bunu sunucu tarafında 301 ile yapmak.</strong>
      <code> ?utm_source=newsletter</code> için 301 yönlendirmesi yapmak
      işe yarar ancak analiz isteğini tamamen bozar &mdash; yönlendirme,
      UTM'leri okuyan JS çalışmadan önce gerçekleşir. Yakaladıktan sonra
      istemci tarafında kaldırın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Herhangi bir URL'den izleme parametrelerini anında{" "}
      <a href="/tools/url-cleaner">URL temizleyici</a> ile kaldırın.
      Hangisini tutacağınıza karar vermeden önce her parametreyi görmek
      istediğinizde{" "}
      <a href="/tools/query-string-parser">sorgu dizesi ayrıştırıcı</a>
      {" "}ile eşleştirin ve sorguyla birlikte tam bir
      protokol/ana bilgisayar/yol dökümü için{" "}
      <a href="/tools/url-parser">URL ayrıştırıcı</a>'yı kullanın.
    </p>
  </>
);