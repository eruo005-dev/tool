/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Oyun bilgisayarı kiralama — turnuvalar ve LAN partileri için etkinlik kiralaması dahil —
      belirli boşlukları temiz bir şekilde dolduran, beklenenden daha küçük bir pazardır. Bu rehber,
      kiralama ortamını kapsar: kim kiralar, ne zaman buna değer ve tipik fiyatlandırma nasıl görünür.
    </p>
  </>
);

export const toc = [
  { id: "categories", label: "Kiralama kategorileri" },
  { id: "pricing", label: "Tipik kiralama fiyatlandırması" },
  { id: "events", label: "Etkinlik kiralamaları (LAN partileri, turnuvalar)" },
  { id: "monthly", label: "Aylık abonelik kiralamaları" },
  { id: "cloud", label: "Alternatif olarak bulut oyun" },
];

export const body = (
  <>
    <h2 id="categories">Kiralama kategorileri</h2>
    <ul>
      <li>
        <strong>Etkinlik kiralaması (1 gün - 2 hafta):</strong> turnuvalar, LAN partileri,
        oyun kongreleri, içerik oluşturma için. Kiralama hizmetleri, yapılandırılmış bir
        bilgisayarı getirir veya gönderir.
      </li>
      <li>
        <strong>Aylık abonelik:</strong> sahipliğe alternatif olarak uzun vadeli kiralama.
        Kısa süreli görevler, öğrenciler, geçici yaşam durumundaki herkes için kullanışlıdır.
      </li>
      <li>
        <strong>Satın almadan önce dene:</strong> bazı perakendeciler, önceden monte edilmiş
        oyun bilgisayarlarında etkili bir şekilde kiralama gibi çalışan 30 günlük iade pencereleri sunar.
      </li>
      <li>
        <strong>Bulut oyun hizmetleri:</strong> farklı bir kategori — mevcut ekranınızı ve
        çevre birimlerinizi korursunuz; bilgisayar hesaplaması bir veri merkezinde çalışır.
      </li>
    </ul>

    <h2 id="pricing">Tipik kiralama fiyatlandırması</h2>
    <ul>
      <li>
        <strong>4 saatlik etkinlik kiralaması:</strong> seviyeye bağlı olarak 100-300 $ (RTX 4060
        bütçe vs RTX 4080 üst seviye).
      </li>
      <li>
        <strong>Günlük kiralama:</strong> Tipik bir oyun bilgisayarı için günlük 80-200 $.
      </li>
      <li>
        <strong>Haftalık kiralama:</strong> Haftalık 300-700 $.
      </li>
      <li>
        <strong>Aylık abonelik:</strong> Ana akım oyun için aylık 80-200 $;
        üst seviye için aylık 200-400 $. Rent-A-Center ve Aaron's gibi özel hizmetler
        kirala-sahip-ol yolları sunar.
      </li>
      <li>
        <strong>Bulut oyun (GeForce Now Premium, Boosteroid Premium):</strong>{" "}
        Aylık 10-20 $. Farklı bir değer önerisi — bilgisayar sahipliğini devam eden
        hizmet ücretleriyle takas edersiniz ve istikrarlı bir internet bağlantısına ihtiyacınız vardır.
      </li>
    </ul>

    <h2 id="events">Etkinlik kiralamaları — LAN partileri, turnuvalar</h2>
    <p>
      Etkinlik kiralamasının sahipliğe karşı kazandığı gerçekçi durumlar:
    </p>
    <ul>
      <li>
        <strong>Tek seferlik turnuva.</strong> Her gün oyun oynamıyorsunuz ancak bir hafta sonu
        için turnuva seviyesinde donanım istiyorsunuz.
      </li>
      <li>
        <strong>Seyahat dostu kurulum.</strong> Bir etkinliğe masaüstü bilgisayar taşımak
        istemiyorsunuz; kiralama mekanda.
      </li>
      <li>
        <strong>Çok makineli LAN.</strong> Sadece ara sıra kullanacağınız 6 bilgisayar satın almak
        yerine tek bir hafta sonu için 4-6 uyumlu makine kiralayın.
      </li>
      <li>
        <strong>Espor takımı antrenman alanı.</strong> Bazı takımlar, 3 yıl içinde eskiyecek
        bilgisayarlara sermaye bağlamak yerine kiralar.
      </li>
    </ul>
    <p>
      Etkinlik kiralamasının kaybettiği yer: her gün oyun oynayan herkes. Matematik, yıllık
      sahiplik maliyetine karşı yılda ~6 etkinliğin üzerinde işe yaramaz.{" "}
      <a href="/tools/pc-rental-vs-buy-calculator">Kirala vs satın al hesaplayıcımıza</a> bakın.
    </p>

    <h2 id="monthly">Aylık abonelik kiralamaları</h2>
    <p>
      Uzun vadeli kiralama niş ancak gerçektir. Kullanım durumları:
    </p>
    <ul>
      <li>
        <strong>Öğrenci / geçici konaklama:</strong> sık sık taşınır, her seferinde
        bir bilgisayar göndermek istemez.
      </li>
      <li>
        <strong>Kısa süreli görev:</strong> 6 aylık danışmanlık, staj.
      </li>
      <li>
        <strong>Nakit akışı kısıtlamaları:</strong> peşin satın alamaz; kirala-sahip-ol
        maliyeti yayar.
      </li>
    </ul>
    <p>
      Sahipliğe karşı matematik: aylık kiralamalar tipik olarak yıllık sahiplik maliyetinin
      3-5 katıdır. Esneklik için ödersiniz. 12 aydan sonra, sahiplik kesin olarak kazanır.
    </p>

    <h2 id="cloud">Kiralama alternatifi olarak bulut oyun</h2>
    <p>
      Bulut oyun hizmetleri (GeForce Now, Boosteroid, Shadow PC) temelde farklı bir
      değer önerisidir:
    </p>
    <ul>
      <li>
        <strong>Artıları:</strong> Ana akım seviyeler için aylık 10-20 $, peşin maliyet yok,
        yükseltme gerekmez, ekranı olan herhangi bir cihazda çalışır.
      </li>
      <li>
        <strong>Eksileri:</strong> istikrarlı 50+ Mbps düşük gecikmeli internet gerektirir,
        tüm oyunları desteklemez, performans tavanı üst düzey bilgisayarlardan düşüktür,
        sahipliğe giden yolu olmayan devam eden abonelik.
      </li>
      <li>
        <strong>En iyi olduğu yer:</strong> sıradan oyuncular, istikrarlı ev interneti
        durumundaki kişiler, donanım bakımı yapmak istemeyen herkes.
      </li>
      <li>
        <strong>En kötü olduğu yer:</strong> rekabetçi çok oyunculu (gecikme), mod yapımcıları,
        kırsal / düşük bant genişliği durumundaki herkes.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Kirala vs satın al hesaplayıcısı (etkinlik kullanım durumları)",
  targetSlug: "pc-rental-vs-buy-calculator",
};

export const faq = [
  {
    q: "Oyun bilgisayarı kiralamanın maliyeti nedir?",
    a: "Etkinlik kiralaması (4 saat): 100-300 $. Günlük: 80-200 $. Haftalık: 300-700 $. Aylık abonelik: Ana akım için aylık 80-200 $, üst seviye için aylık 200-400 $. GeForce Now Premium gibi bulut oyun hizmetleri: Aylık 10-20 $ (farklı değer önerisi — bilgisayar sahipliği yok).",
  },
  {
    q: "Etkinlikler için oyun bilgisayarı satın almalı mıyım yoksa kiralamalı mıyım?",
    a: "Hesaplayıcımızı kullanın. Etkinlik başına 180 $ kiralama ile yılda 4 veya daha az etkinlik için kiralama kazanır. Yılda 6+ etkinlik için sahiplik kazanır. Günlük kullanıcılar her zaman sahiplenir. İstikrarlı ev interneti olan ve üst düzey performansa ihtiyaç duymayan kullanıcılar için bulut oyun kazanır.",
  },
  {
    q: "Satın almak yerine oyun bilgisayarı kiralayabilir miyim?",
    a: "Evet — Rent-A-Center, Aaron's ve özel hizmetler aylık kiralamalar veya kirala-sahip-ol yolları sunar. Tipik olarak yıllık sahiplik maliyetinin 3-5 katı. Nakit akışı kısıtlamaları, öğrenciler, kısa süreli görevler için kullanışlıdır. 12 aydan sonra, sahiplik kesin olarak kazanır.",
  },
  {
    q: "Turnuvalar ve LAN partileri için en iyi oyun bilgisayarı kiralaması?",
    a: "Mekanınıza uyumlu özellikte makineler getiren veya gönderen etkinlik kiralama hizmetleri. 4 saatlik bir etkinlik için makine başına 100-300 $ fiyatlandırma. Bir hafta sonu için 4-6 makineye ihtiyacınız olduğunda ve bunları satın almak istemediğinizde kullanışlıdır. Yerel hizmetleri bulmak için özellikle 'oyun bilgisayarı kiralama + [şehriniz]' araması yapın.",
  },
];
