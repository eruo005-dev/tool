export const intro = (
  <>
    <p>
      DevOps ve Geliştirici Araçları (DevTools / DPE / DevX), iki büyük
      &ldquo;içe dönük&rdquo; mühendislik uzmanlık alanıdır. Örtüşürler, sıkça
      karıştırılırlar ve farklı kariyer yollarına yol açarlar. Bunlar arasında
      seçim yapmak veya her ikisini de harmanlayan rolleri yönetmek,
      r/cscareerquestions ve r/devops'ta sıkça sorulan bir sorudur.
    </p>
    <p>
      Bu rehber dürüst bir karşılaştırmadır: her rolün gerçekte ne yaptığı,
      ücret ve büyümenin nasıl farklılaştığı ve güçlü yönlerinize göre hangisini
      seçmeniz gerektiği.
    </p>
  </>
);

export const toc = [
  { id: "definitions", label: "Net tanımlar" },
  { id: "differences", label: "Gerçek farklar" },
  { id: "comp-growth", label: "Ücret ve büyüme karşılaştırması" },
  { id: "which-to-pick", label: "Hangisini seçmeli (karar çerçevesi)" },
];

export const body = (
  <>
    <h2 id="definitions">Net tanımlar</h2>
    <p>
      <strong>DevOps:</strong> geliştirme ve operasyon arasında köprü kurma
      disiplini — dağıtım hattına, çalışma zamanı altyapısına, nöbetçiliğe,
      izlemeye ve olay müdahalesine sahip olmak. Mühendislik ekipleri ve operasyon
      ekipleri arasındaki siloları yıkmak için ortaya çıkmıştır.
    </p>
    <p>
      <strong>Geliştirici Araçları / DPE / DevX:</strong> kuruluşunuzdaki
      geliştiricilerin üretkenliğini ölçme ve iyileştirme disiplini. Yerel
      ortamlara, derleme performansına, dahili araçlara ve SDLC'nin geliştiriciye
      yönelik kısmına odaklanır.
    </p>
    <p>
      <strong>Platform Mühendisliği:</strong> 2024–2026'da yaygınlaşan şemsiye
      terim. Küçük şirketlerde genellikle DevOps ve DevTools'u birleştirir; büyük
      şirketlerde alt ekipler uzmanlaşır.
    </p>
    <p>
      <strong>Site Güvenilirliği Mühendisliği (SRE):</strong> çalışma zamanı
      güvenilirliği alt uzmanlığı. DevTools'tan çok DevOps'a yakındır ancak kendi
      geleneğine sahiptir (Google'ın SRE kitabı).
    </p>

    <h2 id="differences">Gerçek farklar</h2>
    <ul>
      <li>
        <strong>Günlük iş:</strong>
        <ul>
          <li><strong>DevOps:</strong> dağıtım hatları, çalışma zamanı yapılandırması, izleme panoları, nöbetçi rotasyonları, olay raporları, kapasite planlaması, altyapı-kod.</li>
          <li><strong>DevTools:</strong> yerel geliştirme ortamları, derleme sistemi performansı, test altyapısı, dahili CLI/SDK tasarımı, geliştiriciye yönelik gözlemlenebilirlik, kod tabanı araçları (lint'ler, biçimlendiriciler, kod dönüşümleri).</li>
        </ul>
      </li>
      <li>
        <strong>Teknoloji yığını:</strong>
        <ul>
          <li><strong>DevOps:</strong> Kubernetes, Terraform, Helm, AWS/GCP/Azure, Prometheus, Grafana, ArgoCD, FluxCD.</li>
          <li><strong>DevTools:</strong> Bazel, Buck2, dile özgü derleme sistemleri (Webpack, Vite, Cargo), GitHub Actions, dahili CLI'lar (genellikle Go), gözlemlenebilirlik araçları.</li>
        </ul>
      </li>
      <li>
        <strong>Nöbetçi yükü:</strong>
        <ul>
          <li><strong>DevOps:</strong> yüksek. Rol kısmen 7/24 güvenilirlik sahipliği ile tanımlanır.</li>
          <li><strong>DevTools:</strong> düşük ila orta. Bazı ekiplerin derleme altyapısı için nöbetçisi vardır, ancak genellikle iş saatleri içindedir.</li>
        </ul>
      </li>
      <li>
        <strong>Kullanıcı türü:</strong>
        <ul>
          <li><strong>DevOps:</strong> üretim çalışma zamanı + son kullanıcılar (dolaylı olarak).</li>
          <li><strong>DevTools:</strong> doğrudan kullanıcı olarak dahili geliştiriciler.</li>
        </ul>
      </li>
      <li>
        <strong>Başarısızlık modu psikolojisi:</strong>
        <ul>
          <li><strong>DevOps:</strong> yüksek riskli başarısızlık (üretim kesintisi, müşteri etkisi). Olay müdahalesinin stres profili.</li>
          <li><strong>DevTools:</strong> çoğunlukla düşük riskli başarısızlık (geliştirici üretkenliği düşer, ancak müşteri tarafından görülebilir bir etki olmaz). Farklı stres profili — daha çok uzun vadeli iyileştirme, daha az yangın söndürme.</li>
        </ul>
      </li>
    </ul>

    <h2 id="comp-growth">Ücret ve büyüme karşılaştırması</h2>
    <ul>
      <li>
        <strong>Ücret:</strong> her seviyede kabaca eşdeğer. Ücret şeffaflığı
        açıklamaları, DevTools/DPE'nin genel SWE'den %5–15 daha yüksek olduğunu;
        DevOps'un karşılaştırılabilir olduğunu gösteriyor. Google, Meta gibi en iyi
        teknoloji şirketlerinde SRE genellikle her ikisinden de yüksektir.{" "}
        <a href="/tools/dev-tool-salary-estimator">Maaş tahmin aracımıza</a> bakın.
      </li>
      <li>
        <strong>Büyüme potansiyeli:</strong> her ikisi de 2026'da büyüyen
        kategorilerdir. DevOps etiketli bir disiplin olarak daha eskidir; DevTools,
        şirketlerin üretkenliğe yatırım yapmasıyla göreceli büyüme itici gücüdür.
      </li>
      <li>
        <strong>İş ilanı hacmi:</strong> DevOps'un mutlak anlamda daha fazla açık
        pozisyonu vardır; DevTools/DPE'nin daha azı vardır ancak daha hızlı
        büyümektedir.
      </li>
      <li>
        <strong>Uzaktan çalışma dostluğu:</strong> her ikisi de uzaktan çalışmaya
        yatkındır. DevOps nöbetçi koordinasyonu bazen saat dilimi uyumu gerektirir;
        DevTools daha az kısıtlamaya sahiptir.
      </li>
    </ul>

    <h2 id="which-to-pick">Hangisini seçmeli — karar çerçevesi</h2>
    <p>
      Seçimi netleştirmek için beş soru:
    </p>
    <ol>
      <li>
        <strong>Operasyonel baskıyı sever misiniz?</strong> Gece 3'teki sayfa,
        canlı bir kesintiyi hata ayıklama, zaman baskısı altında risk yönetimi.
        Evet → DevOps. Kayıtsız veya hayır → DevTools.
      </li>
      <li>
        <strong>Diğer mühendislerin kullanacağı araçlar oluşturmaktan hoşlanır
        mısınız?</strong> İç kullanıcılar için empati + ürün düşüncesi. Evet →
        DevTools. Kayıtsız → DevOps.
      </li>
      <li>
        <strong>Altyapı konusunda ne kadar rahatsınız?</strong> Yoğun K8s, bulut,
        ağ ilgisi → DevOps. Daha çok kod tabanı / derleme sistemi / derleyici / dil
        araçları ilgisi → DevTools.
      </li>
      <li>
        <strong>İstikrar mı yoksa görünürlük mü için optimize ediyorsunuz?</strong>
        DevOps genellikle daha görünürdür (kesintiler dikkat çeker); DevTools daha
        arka plandadır ancak organizasyonun yeteneğini şekillendirir.
      </li>
      <li>
        <strong>Geçiş maliyeti:</strong> düşük. Beceriler her iki yönde de
        aktarılabilir. Birçok mühendis farklı şirketlerde her ikisinde de
        bulunmuştur. Kilitlenme konusunda fazla düşünmeyin.
      </li>
    </ol>
    <p>
      2026 gerçeği: her ikisine de dokunan hibrit &ldquo;Platform Mühendisi&rdquo;
      rolleri giderek yaygınlaşıyor. Karar aşamasının başındaysanız, bu roller
      uzmanlaşmadan önce her ikisini de denemenize olanak tanır.
    </p>
  </>
);

export const cta = {
  label: "DevTools / DPE / DevOps rolleri için maaş aralıkları",
  targetSlug: "dev-tool-salary-estimator",
};

export const faq = [
  {
    q: "DevOps mu yoksa geliştirici araçları mı daha iyi bir kariyer yolu?",
    a: "Her ikisi de büyüyor; ücret her seviyede kabaca eşdeğer. DevOps'un daha fazla toplam açık pozisyonu ve nöbetçi yükü vardır; DevTools/DPE daha hızlı büyüyor, daha düşük nöbetçi yüküne sahip ve içe dönük geliştirici deneyimine odaklanıyor. Operasyonel baskıyı seviyorsanız (DevOps) veya diğer mühendislerin kullanacağı araçlar oluşturmaktan hoşlanıyorsanız (DevTools) buna göre seçim yapın.",
  },
  {
    q: "DevOps ve geliştirici araçları arasındaki fark nedir?",
    a: "DevOps: dağıtım hatları, çalışma zamanı altyapısı, nöbetçilik, olay müdahalesi, IaC. DevTools/DPE: yerel geliştirme ortamları, derleme performansı, dahili araçlar, kod tabanı araçları. Farklı günlük işler, benzer teknoloji yakınlığı, benzer maaş. Platform Mühendisi, küçük şirketlerde genellikle her ikisini de birleştiren şemsiye terimdir.",
  },
  {
    q: "DevOps ve geliştirici araçları arasında geçiş yapabilir misiniz?",
    a: "Evet — beceriler her iki yönde de iyi aktarılır. Birçok mühendis farklı şirketlerde her ikisinde de bulunmuştur. 2026 gerçeği, hibrit 'Platform Mühendisi' rollerinin giderek her ikisini de kapsaması ve uzmanlaşmadan önce denemenize olanak tanımasıdır. Geçiş maliyeti düşüktür; kilitlenme konusunda fazla düşünmeyin.",
  },
];