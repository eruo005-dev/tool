/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Normal yazılım geliştirmeden geliştirici araçları oluşturmaya geçiş yaygındır,
      sıkça denenmiştir ve çoğu kişinin düşündüğünden daha hızlıdır — genellikle karar
      anından ilk "geliştirici araçları" unvanlı role 6–12 ay. Bu yol, büyük ölçüde
      halihazırda yaptıklarınızı doğru konumlandırmakla ilgilidir.
    </p>
    <p>
      Bu rehber pratik bir oyun kitabıdır: CRUD/SaaS deneyiminizi geliştirici araçları
      pozisyonuna nasıl dönüştüreceğiniz, gerçekten eklemeniz gereken beceriler (zaten
      sahip olduklarınızın aksine) ve uygun olmazsa nasıl geri döneceğiniz.
    </p>
  </>
);

export const toc = [
  { id: "translate", label: "Mevcut deneyiminizi tercüme edin" },
  { id: "gaps", label: "Hangi yeni becerileri eklemelisiniz" },
  { id: "transition-roles", label: "Geçişi kolaylaştıran roller" },
  { id: "back-to-product", label: "Normal geliştirmeye geri dönmek" },
];

export const body = (
  <>
    <h2 id="translate">Mevcut deneyiminizi tercüme edin</h2>
    <p>
      Çoğu CRUD uygulaması geliştiricisi, geliştirici araçları deneyimlerini
      küçümser. Son 2 yılınızı düşünün:
    </p>
    <ul>
      <li>CI/CD hatları oluşturdunuz veya bakımını yaptınız mı? Bu bir geliştirici aracıdır.</li>
      <li>Diğer geliştiricilerin kullandığı dahili betikler yazdınız mı? Geliştirici aracı.</li>
      <li>Test framework'ü, gözlemlenebilirlik yığını veya dağıtım sürecinin sahibi miydiniz? Geliştirici aracı.</li>
      <li>Ekibinizin linting, biçimlendirme veya sürüm araçlarını oluşturdunuz veya iyileştirdiniz mi? Geliştirici aracı.</li>
      <li>Dahili kütüphaneler veya SDK'lar oluşturdunuz mu? Geliştirici aracı.</li>
    </ul>
    <p>
      Bunlar geliştirici araçları deneyimidir. Geçiş sıfırdan başlamak değil —
      yeniden konumlandırmaktır. 30 dakika ayırın, sahibi olduğunuz her dahili aracı /
      kütüphaneyi / hattı / betiği listeleyin ve özgeçmişinizdeki maddeleri bu çalışmayı
      öne çıkaracak şekilde yeniden yazın. Kendinizi daha önce olduğunuzdan 2 yıl daha
      deneyimli göstereceksiniz.
    </p>

    <h2 id="gaps">Hangi yeni becerileri gerçekten eklemelisiniz</h2>
    <p>
      Gerçekten yeni öğrenilmesi gereken beceriler (zaten sahip olduklarınız değil):
    </p>
    <ol>
      <li>
        <strong>Genel API tasarımı.</strong> Dahili kütüphaneler özensiz olabilir. Genel
        SDK'lar ve CLI'lar sürümleme, kullanımdan kaldırma politikası, hata semantiği
        gerektirir. İlkeler için{" "}
        <code>github.com/golang/go/wiki/CodeReviewComments</code> ve{" "}
        <code>aip.dev</code> (Google'ın API stil kılavuzu) adreslerini okuyun.
      </li>
      <li>
        <strong>Geliştirici araçları için gözlemlenebilirlik.</strong> Uygulama
        gözlemlenebilirliğinden farklıdır çünkü müşterilerinizin derleme/çalışma
        zamanı ortamlarını enstrümente ediyorsunuz. Sentry SDK kaynak kodu harika bir
        öğretmendir.
      </li>
      <li>
        <strong>Platformlar arası CLI dağıtımı.</strong> brew, apt, scoop, npm, cargo,
        Docker, GitHub sürümleri. Her birinin püf noktaları vardır. Yazdığınız CLI,
        paket yöneticisi kayıtlarında beklediğinizden daha fazla zaman geçirir.
      </li>
      <li>
        <strong>Birinci sınıf bir yapıt olarak dokümantasyon.</strong> Geliştirici
        araçları dokümanlarla başarılı olur veya başarısız olur. Çıtayı içselleştirmek
        için Stripe dokümanlarını, Twilio dokümanlarını, Anthropic API dokümanlarını
        okuyun.
      </li>
      <li>
        <strong>"Ben olmayan" geliştiriciler için empati.</strong> En zor geçiş:
        aracınız, yığını, ekip büyüklüğü ve beceri seviyesi sizinkinden farklı olan
        kişiler tarafından kullanılacak. Müşteri görüşmeleri + dogfooding tek çözümdür.
      </li>
    </ol>

    <h2 id="transition-roles">Geçişi kolaylaştıran roller</h2>
    <p>
      Normal geliştirme ile geliştirici araçları arasında temiz bir köprü kuran üç rol:
    </p>
    <ul>
      <li>
        <strong>Platform mühendisi / SRE benzeri:</strong> dahili geliştirici
        platformlarının sahibi. Çoğu şirkette artık bunlar var; unvan değişiyor.
      </li>
      <li>
        <strong>DevX / Geliştirici Deneyimi:</strong> büyük şirketlerde açık bir
        geliştirici araçları rolü. DPE (Geliştirici Üretkenlik Mühendisliği) kardeş
        unvandır.
      </li>
      <li>
        <strong>Açık kaynak bakımcısı (işveren desteğiyle):</strong> bazı şirketler
        açık kaynak projelerini personellendirmek için açıkça işe alım yapar (Stripe,
        Cloudflare, Anthropic, GitHub'ın kendisi).
      </li>
    </ul>
    <p>
      En hızlı yol genellikle <em>dahili</em>dir: mevcut işvereninizden platform/devx
      ekibinde 6 aylık bir rotasyon isteyin, portföyünüzü orada oluşturun, ardından
      unvan elinizdeyken harici başvuru yapın.
    </p>

    <h2 id="back-to-product">Normal geliştirmeye geri dönmek</h2>
    <p>
      Beceri aktarılabilirliği her iki yönde de yüksektir. Geliştirici araçları
      deneyimi şu alanlara iyi uyum sağlar:
    </p>
    <ul>
      <li><strong>Kıdemli ürün mühendisliği</strong> — test, dağıtım, işletilebilirlik konusunda güçlü görüşler.</li>
      <li><strong>Backend / altyapı</strong> — doğal örtüşme.</li>
      <li><strong>Teknik lider / personel mühendisliği</strong> — sistem düşüncesi, geliştirici araçlarının varsayılanıdır.</li>
    </ul>
    <p>
      Gerçekten daha zor olan tek geçiş: <strong>geliştirici araçları → tüketici
      şirketlerinde frontend ürün mühendisliği</strong>. En iyi tüketici şirketlerinde
      frontend çıtası yüksektir ve geliştirici araçları çalışması bunu günlük olarak
      çalıştırmaz. 6 aylık odaklı frontend çalışmasıyla çözülebilir, ancak gerçek bir
      boşluktur.
    </p>
  </>
);

export const cta = {
  label: "Role ve bölgeye göre geliştirici araçları maaşlarını tahmin edin",
  targetSlug: "dev-tool-salary-estimator",
};

export const faq = [
  {
    q: "Normal geliştirmeden geliştirici araçlarına nasıl geçiş yapabilirim?",
    a: "Halihazırda yaptıklarınızı yeniden konumlandırarak başlayın — CI/CD çalışması, dahili betikler, gözlemlenebilirlik, SDK'ların hepsi sayılır. 5 yeni beceri ekleyin: genel API tasarımı, geliştirici aracı gözlemlenebilirliği, platformlar arası CLI dağıtımı, ürün olarak dokümantasyon, siz olmayan geliştiriciler için empati. Portföy oluşturmak için bir platform/DevX ekibine dahili rotasyon kullanın.",
  },
  {
    q: "CRUD uygulamalarından geliştirici araçlarına: gerçekçi zaman çizelgesi nedir?",
    a: "Karar anından ilk 'geliştirici araçları' unvanlı role 6-12 ay. CI/CD veya dahili araç deneyiminiz varsa daha hızlı. Yalnızca UI/CRUD çalışması yaptıysanız daha yavaş — harici başvuru yapmadan önce pivotu göstermek için bir yan proje olarak bir OSS geliştirici aracı yayınlamayı planlayın.",
  },
  {
    q: "Geliştirici araçları uygun değilse normal geliştirmeye geri dönebilir miyim?",
    a: "Evet — beceri aktarılabilirliği yüksektir. Geliştirici araçları deneyimi, kıdemli ürün, backend, altyapı ve teknik lider rollerine iyi uyum sağlar. Geri dönüşü zor olan tek alan, tüketici şirketlerinde frontend ürün mühendisliğidir; burada günlük frontend kası zayıflar. Bu yöne gidiyorsanız 6 aylık bir toparlanma süresi planlayın.",
  },
];