/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Profesyonel PC montaj hizmetleri, 150 dolarlık Micro Center tezgah montajından
      800 dolarlık butik özel sıvı soğutma sistemlerine kadar uzanır. Her seviyenin neler içerdiğini ve ne bekleyeceğinizi bilmek, adil bir fiyat ile
      2 saatlik işçilik için fazla ödeme yapmak arasındaki farktır.
    </p>
    <p>
      Bu rehber pratik bir dökümdür: neler dahil, rezervasyon öncesi ne sorulmalı,
      perakendeciye göre maliyetler ve içine giremeyeceğiniz montajcıları nasıl değerlendireceğiniz.
    </p>
  </>
);

export const toc = [
  { id: "whats-included", label: "PC montajında neler var" },
  { id: "service-types", label: "Online vs mağaza içi vs yerel dükkan" },
  { id: "costs", label: "Belirli perakendeci fiyatlandırması" },
  { id: "ask-before", label: "Rezervasyon öncesi sorulması gereken sorular" },
  { id: "vetting", label: "Montajcıları değerlendirme + garanti" },
];

export const body = (
  <>
    <h2 id="whats-included">Profesyonel bir PC montaj hizmetinde neler var</h2>
    <p>
      Standart kapsam (tipik 100-300 dolar seviyesi):
    </p>
    <ul>
      <li>Bileşen montajı (CPU, soğutucu, RAM, GPU, depolama, PSU)</li>
      <li>Kablo yönlendirme + temel kablo yönetimi</li>
      <li>BIOS'un güncel sürüme güncellenmesi</li>
      <li>İşletim sistemi kurulumu (Windows 11) — bazen lisansı siz getirirsiniz, bazen dahildir</li>
      <li>Chipset + GPU sürücü kurulumu</li>
      <li>Temel stres testi (10–30 dakika yük)</li>
      <li>1–4 saat montaj süresi</li>
      <li>30 gün–12 ay işçilik garantisi (montajcıya göre değişir)</li>
    </ul>
    <p>
      Premium kapsam (300-800 dolar seviyesi) şunları ekler:
    </p>
    <ul>
      <li>Özel kablo uzatmaları / kılıflı PSU kabloları</li>
      <li>BIOS overclock doğrulaması (istenirse XMP/EXPO + hafif CPU OC)</li>
      <li>Premium kablo yönlendirme (tüm kablolar gizli, görünür kablo bağı yok)</li>
      <li>Genişletilmiş stres testi (birden fazla iş yükü türünde 1–4 saat)</li>
      <li>12–24 ay işçilik garantisi</li>
      <li>Bazen: özel boya, sanat veya temalı aydınlatma</li>
    </ul>

    <h2 id="service-types">Online vs mağaza içi vs yerel dükkan</h2>
    <ul>
      <li>
        <strong>Büyük mağaza içi (Micro Center, Best Buy):</strong> ~150-200 dolar. Tahmin edilebilir
        kalite, işletim sistemi kurulumu dahil, tipik 12 ay işçilik garantisi. Parçalarınızı getirin;
        aynı gün çalışan bir PC ile çıkın. Yakınında Micro Center olan herkes için varsayılan seçenek.
      </li>
      <li>
        <strong>Yerel PC dükkanı:</strong> 80-300 dolar. Kalite büyük ölçüde değişir. Sıra dışı
        kasa form faktörleri veya özel istekler için en iyisi. Karar vermeden önce Google yorumlarını okuyun
        — küçük dükkanlarda kalite mükemmelden berbat seviyesine kadar değişir.
      </li>
      <li>
        <strong>Online montajcı + kargo (NZXT BLD, Origin PC, Maingear, BLD by NZXT):</strong>{" "}
        Parça maliyeti üzerine 300-800 dolar. Standartlaştırılmış kalite, temiz kablo yönetimi,
        uzun garantiler (işçilikte 1-2 yıl). Daha yavaş teslimat (1-3 hafta). Micro Center'a yakın olmayan
        veya cilalı bir estetik isteyenler için en iyisi.
      </li>
      <li>
        <strong>Özel montajcılar (butik):</strong> Parçaların üzerine 500-2000 dolar. Özel su
        soğutma döngüleri, premium estetik, boya işleri, RGB programlama. Görünümün teknik özellikler kadar
        önemli olduğu halo yapılar için en iyisi.
      </li>
      <li>
        <strong>Bağımsız montajcılar (r/buildapcsales, yerel ilanlar):</strong>{" "}
        Tipik 100-250 dolar. Kalite tamamen kişiye bağlıdır; iyice araştırın.
      </li>
    </ul>

    <h2 id="costs">Belirli perakendeci fiyatlandırması (2025-2026)</h2>
    <ul>
      <li>
        <strong>Micro Center PC Montaj Hizmeti:</strong> ~150 dolar + parçalar. İşletim sistemi kurulumu,
        BIOS güncellemesi, sürücü kurulumu, 24 saat stres testi, 12 ay işçilik garantisi.
        En iyi fiyat için parçaların Micro Center'dan satın alınması gerekir.
      </li>
      <li>
        <strong>Best Buy Geek Squad PC Kurulumu:</strong> ~199 dolar + parçalar. Montajlar için Micro Center'dan
        daha az cilalı; yükseltme ve sorun giderme için daha iyi.
      </li>
      <li>
        <strong>NZXT BLD:</strong> 399 dolar hizmet ücreti, parçaları onlardan alırsanız 299 dolar.
        Online + kargo. 2 yıl işçilik garantisi. Temiz kablo yönetimiyle bilinir.
      </li>
      <li>
        <strong>Origin PC + Maingear:</strong> Seviyeye bağlı olarak 300-800 dolar hizmet ücreti.
        Özel boya ve estetik seçenekleri. Daha yavaş teslimat.
      </li>
      <li>
        <strong>Yerel PC tamir dükkanları:</strong> 80-300 dolar. Kalite değişir; Google yorumlarıyla
        doğrulayın ve garanti koşullarını sorun.
      </li>
    </ul>

    <h2 id="ask-before">PC montajı rezervasyonu öncesi sorulması gereken sorular</h2>
    <ol>
      <li>
        <strong>İşçilik garantisi nedir?</strong> Saygın herhangi bir montajcı için en az 12
        ay olmalıdır. Premium için 24+ ay.
      </li>
      <li>
        <strong>İşletim sistemi kurulumu + sürücü kurulumu dahil mi?</strong> Bazı yerler ekstra
        ücret alır. Parçaları bırakmadan önce teyit edin.
      </li>
      <li>
        <strong>Stres testi yapıyor musunuz? Ne kadar süreyle?</strong> 10 dakikalık "geçti" yeterli
        değildir. 30+ dakika Prime95 + Furmark veya AIDA64 isteyin.
      </li>
      <li>
        <strong>BIOS'ta XMP / EXPO'yu etkinleştirecek misiniz?</strong> Bu olmadan RAM'iniz
        belirtilen hızın %30 altında çalışır. Birçok düşük seviye montajcı bu adımı atlar.
      </li>
      <li>
        <strong>Kendi parçalarımı getirebilir miyim?</strong> Çoğu evet; bazıları parçaların
        kendilerinden satın alınmasını ister. Önceden doğrulayın.
      </li>
      <li>
        <strong>Teslimat süresi?</strong> Micro Center'da aynı gün; çoğu yerel dükkanda 3-7 gün;
        online montajcılarda 1-3 hafta.
      </li>
      <li>
        <strong>Montajı izleyebilir miyim?</strong> Bazı dükkanlar buna izin verir (özellikle
        öğrenmek için). Bazıları sorumluluk nedenleriyle izin vermez. Deneyimi istiyorsanız sormaya değer.
      </li>
      <li>
        <strong>Bir parça arızalı çıkarsa ne olur?</strong> RMA'ya yardımcı olacaklar mı, yoksa bu
        size mi kalıyor?
      </li>
    </ol>

    <h2 id="vetting">Montajcıları değerlendirme + garanti koşulları</h2>
    <p>
      Kırmızı bayraklar:
    </p>
    <ul>
      <li>
        <strong>İşçilik garantisi yok.</strong> Bazı yerel dükkanlar bunu yapar. Uzaklaşın.
      </li>
      <li>
        <strong>Aşırı acele iş (1 saatten az).</strong> Kaliteli stres testi
        montajdan daha uzun sürer.
      </li>
      <li>
        <strong>İşletim sistemi kurulumu veya sürücü kurulumu yok.</strong> Daha sonra eklemek sorun değil
        eğer rahatsanız; "çalışan bir PC ile çıkma" vaadi için
        dahil edilmelidir.
      </li>
      <li>
        <strong>Belirli stres testi metodolojisini tartışmaya isteksiz.</strong>{" "}
        "Test ediyoruz" bir cevap değildir.
      </li>
      <li>
        <strong>Yerel piyasadan çarpıcı fiyat farkı.</strong> Şüpheli
        ucuz = kesintiler; şüpheli pahalı = şişirme.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "DIY maliyetini kiralamayla karşılaştır (hesap makinesi)",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "Profesyonel PC montaj hizmetlerinde neler var?",
    a: "Standart (100-300 dolar): montaj, kablo yönlendirme, BIOS güncellemesi, işletim sistemi kurulumu, sürücü kurulumu, temel stres testi, 30 gün ila 12 ay işçilik garantisi. Premium (300-800 dolar): özel kablo uzatmaları, BIOS OC doğrulaması, premium kablo yönlendirme, genişletilmiş stres testleri, 12-24 ay garanti.",
  },
  {
    q: "Micro Center PC montajı için ne kadar ücret alıyor?",
    a: "Parçaları Micro Center'dan satın aldığınızda ~150 dolar + parçalar. İşletim sistemi kurulumu, BIOS güncellemesi, sürücü kurulumu, 24 saat stres testi, 12 ay işçilik garantisi dahildir. Tipik olarak aynı gün teslimat. Sürüş mesafesindeki çoğu ABD'li montajcı için varsayılan seçenek.",
  },
  {
    q: "PC montajı rezervasyonu öncesi hangi soruları sormalıyım?",
    a: "İşçilikte garanti süresi (en az 12+ ay), işletim sistemi + sürücü kurulumu dahil mi, stres testi süresi + metodolojisi, BIOS'ta XMP/EXPO'yu etkinleştirecekler mi, kendi parçalarımı getirebilir miyim, teslimat süresi, montajı izleyebilir miyim, bir parça arızalı çıkarsa ne olur. 8 sorunun tamamına belirli cevaplar = saygın montajcı.",
  },
  {
    q: "Online vs mağaza içi PC montajı — hangisi daha iyi?",
    a: "Mağaza içi (Micro Center / Best Buy): tahmin edilebilir kalite, ~150 dolar, aynı gün. Yerel PC dükkanı: değişken kalite, 80-300 dolar, Google yorumlarıyla araştırın. Online + kargo (NZXT BLD, Origin, Maingear): cilalı estetik, 300-800 dolar, 1-3 hafta teslimat, 1-2 yıl garanti. Yerel olarak mevcut olana göre seçim yapın.",
  },
];