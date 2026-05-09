/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Oyun bilgisayarınızı kuracak birini nerede bulacağınız, yakınınızda bir
      Micro Center olup olmamasına, bütçenize ve aynı gün teslimat mı yoksa
      kargo ile gönderim mi istediğinize bağlıdır. Her seçeneğin kendine göre
      avantajları ve dezavantajları vardır.
    </p>
  </>
);

export const toc = [
  { id: "in-store", label: "Mağaza içi seçenekler (aynı gün)" },
  { id: "online", label: "Çevrimiçi montajcılar + kargo" },
  { id: "local", label: "Yerel PC mağazaları" },
  { id: "freelance", label: "Bağımsız / serbest montajcılar" },
  { id: "find-near-me", label: "Yakınınızdaki montajcıları bulma" },
];

export const body = (
  <>
    <h2 id="in-store">Mağaza içi seçenekler (aynı gün)</h2>
    <ul>
      <li>
        <strong>Micro Center PC Montaj Hizmeti.</strong> ~$150 + parçalar. Bir
        Micro Center mağazasına sürüş mesafesinde yaşamanız gerekir (çoğunlukla
        ABD'nin teknoloji yoğun metropollerinde). En iyi fiyat-kalite dengesi.
        12 ay işçilik garantisi.
      </li>
      <li>
        <strong>Best Buy Geek Squad.</strong> ~$199 + parçalar. Montaj
        konusunda Micro Center kadar iyi değil. Yükseltme veya onarım için daha
        uygun.
      </li>
      <li>
        <strong>Yerel PC tamir atölyeleri.</strong> $80-300. Kalite çok
        değişkendir. Karar vermeden önce Google yorumlarını kontrol edin.
      </li>
    </ul>

    <h2 id="online">Çevrimiçi montajcılar + kargo</h2>
    <ul>
      <li>
        <strong>NZXT BLD.</strong> ~$299-399 hizmet ücreti. 2 yıl işçilik
        garantisi. Temiz kablo yönetimi. 1-2 hafta montaj + kargo teslim süresi.
      </li>
      <li>
        <strong>Origin PC + Maingear + Falcon Northwest.</strong> Seviyeye bağlı
        olarak $300-800 hizmet ücreti. Butik estetik seçenekleri. 2-3 hafta
        teslim süresi.
      </li>
      <li>
        <strong>Skytech / iBuyPower / CyberPower.</strong> Düşük maliyetli
        çevrimiçi montajcılar. Daha ucuz hizmet ücretleri ancak parçalar genellikle
        ucuz SKU'lara (kalitesiz PSU, OEM RAM) yönelir. En iyisi hazır
        sistemler olarak; parça tedarik ediyorsanız dikkatli kullanın.
      </li>
      <li>
        <strong>Build Redux + Periphio.</strong> Güçlü yorumlara sahip yeni
        piyasa girişimleri. Karşılaştırmaya değer.
      </li>
    </ul>

    <h2 id="local">Yerel PC mağazaları</h2>
    <p>
      Kalite değişkendir. Değerlendirme süreci:
    </p>
    <ol>
      <li>Google Haritalar'da &ldquo;yakınımdaki PC montajcısı&rdquo; araması yapın.</li>
      <li>50'den fazla yorumu olan 4.0+ yıldızlı olanları filtreleyin.</li>
      <li>Son yorumları okuyun — özellikle oyun PC montajı hakkında olanları, dizüstü bilgisayar tamiri değil.</li>
      <li>Arayıp sorun: garanti, işletim sistemi kurulumu, stres testi yöntemi, BIOS XMP/EXPO.</li>
      <li>Karar vermeden önce Micro Center / çevrimiçi seçeneklerle karşılaştırın.</li>
    </ol>

    <h2 id="freelance">Bağımsız / serbest montajcılar</h2>
    <p>
      Bazı Reddit topluluklarında onaylanmış bağımsız montajcılar bulunur:
    </p>
    <ul>
      <li><strong>r/buildapcsales</strong> — etiketler, doğrulanmış iş yapmış montajcıları gösterir.</li>
      <li><strong>r/bapcsalescanada / bölgesel buildapc alt dizinleri</strong> ABD dışı için.</li>
      <li><strong>Yerel Discord sunucuları</strong> oyun veya PC montajı için.</li>
    </ul>
    <p>
      Bağımsızlar $80-250 arasında değişir. İyice araştırın: montaj fotoğrafları isteyin,
      garanti koşullarını sorun, referans isteyin. Ödemeyi yalnızca kabulden sonra yapın —
      asla peşin ödemeyin.
    </p>

    <h2 id="find-near-me">Yakınınızdaki montajcıları bulma</h2>
    <p>
      Hızlı arama stratejileri:
    </p>
    <ul>
      <li><strong>Google:</strong> &ldquo;özel PC montajcısı + [şehriniz]&rdquo;.</li>
      <li><strong>Yelp:</strong> &ldquo;bilgisayar tamiri&rdquo; ve yorumlarda &ldquo;özel montaj&rdquo;.</li>
      <li><strong>Reddit r/[şehriniz] alt dizinleri</strong> — tavsiye isteyin.</li>
      <li><strong>Yerel Facebook grupları</strong> PC meraklıları için.</li>
      <li><strong>Microcenter.com mağaza bulucu</strong> — bir saatlik sürüş mesafesinde varsa, genellikle en iyi seçeneğinizdir.</li>
    </ul>
  </>
);

export const cta = {
  label: "Numaralarınız için işe alım vs DIY hesaplayın",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "Oyun bilgisayarımı kuracak birini nerede bulabilirim?",
    a: "Sıralanmış en iyi seçenekler: Yakınsa Micro Center ($150 + parçalar), NZXT BLD ($299-399 + kargo) gibi çevrimiçi montajcılar, yerel PC mağazaları ($80-300, Google yorumlarıyla değerlendirin), r/buildapcsales veya yerel Discord üzerinden bulunan bağımsız montajcılar ($80-250, iyice araştırın).",
  },
  {
    q: "Bilgisayar mağazaları PC montaj hizmeti sunuyor mu?",
    a: "Evet. Micro Center, parçalar dahil en iyi fiyatlandırmaya sahiptir, yaklaşık $150. Best Buy Geek Squad yaklaşık $199. Bağımsız yerel PC tamir atölyeleri genellikle $80-300. Kalite değişir — Micro Center öngörülebilir seçenektir; yerel mağazalar Google yorumu değerlendirmesi gerektirir.",
  },
  {
    q: "Yakınımda yerel olarak bir oyun PC'si yaptırabilir miyim?",
    a: "Çoğu ABD metrosunda en az bir yetenekli PC montajcısı vardır. Google Haritalar'da 'yakınımdaki özel PC montajcısı' arayın, 50'den fazla yorumu olan 4.0+ yıldızlı olanları filtreleyin, özellikle oyun PC montajı hakkındaki son yorumları okuyun (dizüstü bilgisayar tamiri değil). Karar vermeden önce arayıp garanti + işletim sistemi kurulumunu doğrulayın.",
  },
  {
    q: "Çevrimiçi vs mağaza içi PC montaj hizmetleri — hangisi daha iyi?",
    a: "Mağaza içi (Micro Center): daha hızlı, ~$150, 12 ay garanti, öngörülebilir kalite. Çevrimiçi (NZXT BLD, Origin, Maingear): şık estetik, $299-800, 1-3 hafta kargo süresi, 2 yıl garanti. Yerel mağazalar: değişken. Erişilebilir olana ve neye değer verdiğinize göre seçin (hız vs estetik vs garanti süresi).",
  },
];