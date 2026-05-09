/* eslint-disable react/no-unescaped-entities */
/**
 * Bu kılavuz için yeniden kullanılabilir, JS'siz görseller. Saf satır içi SVG ve CSS animasyonları,
 * yani statik sayfada bir istemci bileşeni olmadan animasyon yaparlar.
 * Çok spesifik oldukları ve başka yerde kullanılmadıkları için /components yerine satır içinde tutuluyorlar.
 */
import type { CSSProperties, ReactNode } from "react";

const PodMeshDemo = () => (
  <figure className="my-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
    <style>{`
      @keyframes pod-pulse { 0%,100% { opacity:.25 } 50% { opacity:1 } }
      @keyframes pod-flow { 0% { offset-distance: 0% } 100% { offset-distance: 100% } }
      @keyframes pod-glow { 0%,100% { filter: drop-shadow(0 0 2px #3b82f6) } 50% { filter: drop-shadow(0 0 10px #3b82f6) } }
      .pod-edge { stroke:#94a3b8; stroke-width:1.5; stroke-dasharray:4 4; animation: pod-pulse 3s ease-in-out infinite; }
      .pod-edge.b { animation-delay:.5s } .pod-edge.c { animation-delay:1s } .pod-edge.d { animation-delay:1.5s } .pod-edge.e { animation-delay:2s }
      .pod-laptop { fill:#fff; stroke:#0f172a; stroke-width:1.5; }
      .pod-screen { fill:#0f172a; }
      .pod-shard { animation: pod-glow 2s ease-in-out infinite; }
      .pod-packet { offset-rotate:0deg; animation: pod-flow 4s linear infinite; }
    `}</style>
    <svg viewBox="0 0 520 320" role="img" aria-label="Beş dizüstü bilgisayar bir halka şeklinde düzenlenmiş, titreşen kesikli çizgilerle birbirine bağlı, her bir makineye bölünmüş model katmanlarını temsil eden renkli parçalar." style={{ width: "100%", height: "auto" }}>
      {/* Her düğüm çifti arasındaki kenarlar (beşgen ağ) */}
      <g>
        <line className="pod-edge"   x1="260" y1="60"  x2="450" y2="170" />
        <line className="pod-edge b" x1="450" y1="170" x2="380" y2="290" />
        <line className="pod-edge c" x1="380" y1="290" x2="140" y2="290" />
        <line className="pod-edge d" x1="140" y1="290" x2="70"  y2="170" />
        <line className="pod-edge e" x1="70"  y1="170" x2="260" y2="60"  />
        <line className="pod-edge"   x1="260" y1="60"  x2="380" y2="290" />
        <line className="pod-edge b" x1="260" y1="60"  x2="140" y2="290" />
        <line className="pod-edge c" x1="70"  y1="170" x2="450" y2="170" />
      </g>

      {/* Ekranın içinde model "parçaları" olan dizüstü bilgisayarlar */}
      {[
        { x: 260, y: 60,  shard: "#3b82f6", label: "Katmanlar 1–7"   },
        { x: 450, y: 170, shard: "#22c55e", label: "Katmanlar 8–14"  },
        { x: 380, y: 290, shard: "#f59e0b", label: "Katmanlar 15–21" },
        { x: 140, y: 290, shard: "#a855f7", label: "Katmanlar 22–28" },
        { x: 70,  y: 170, shard: "#ec4899", label: "Katmanlar 29–32" },
      ].map((n) => (
        <g key={`${n.x}-${n.y}`} transform={`translate(${n.x - 38},${n.y - 24})`}>
          <rect className="pod-laptop" x="0"  y="0"  width="76" height="46" rx="4" />
          <rect className="pod-screen" x="6"  y="6"  width="64" height="34" rx="2" />
          <rect className="pod-shard"  x="10" y="14" width="56" height="6"  rx="2" fill={n.shard} />
          <rect x="10" y="24" width="38" height="3" rx="1" fill="#475569" opacity=".55" />
          <rect x="10" y="30" width="48" height="3" rx="1" fill="#475569" opacity=".35" />
          <rect x="-4" y="46" width="84" height="3" rx="1.5" fill="#0f172a" />
          <text x="38" y="64" textAnchor="middle" fontSize="9" fontFamily="ui-monospace,monospace" fill="#0f172a">{n.label}</text>
        </g>
      ))}

      {/* Halka etrafında dolaşan prompt paketi */}
      <circle r="6" fill="#3b82f6" className="pod-packet"
        style={{ offsetPath: "path('M 260 60 L 450 170 L 380 290 L 140 290 L 70 170 Z')" } as CSSProperties} />
      <circle r="4" fill="#22c55e" className="pod-packet"
        style={{ offsetPath: "path('M 260 60 L 450 170 L 380 290 L 140 290 L 70 170 Z')", animationDelay: "-2s" } as CSSProperties} />
    </svg>
    <figcaption className="mt-2 text-center text-sm text-slate-500">
      Beş dizüstü bilgisayar, tek bir model. Katmanlar orantılı olarak bölünmüş; prompt halka boyunca akar ve yanıt geri gelir.
    </figcaption>
  </figure>
);

const ShardingDemo = () => (
  <figure className="my-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
    <style>{`
      @keyframes pod-fade { 0%,30% { opacity:0; transform: translateY(-6px) } 60%,100% { opacity:1; transform: translateY(0) } }
      .pod-bar { animation: pod-fade .8s ease-out both; }
    `}</style>
    <svg viewBox="0 0 520 220" role="img" aria-label="32 katmanlı bir model çubuğu, her biri beş dizüstü bilgisayardan birine yönlendirilen beş renkli parçaya ayrılıyor." style={{ width: "100%", height: "auto" }}>
      {/* Tüm model */}
      <text x="20" y="32" fontSize="11" fontFamily="ui-monospace,monospace" fill="#0f172a">qwen-3.5-32b · 32 katman · ~64 GB</text>
      <rect x="20" y="40" width="480" height="28" rx="4" fill="#e2e8f0" />
      {[
        { x: 20,  w: 96, c: "#3b82f6" },
        { x: 116, w: 96, c: "#22c55e" },
        { x: 212, w: 96, c: "#f59e0b" },
        { x: 308, w: 96, c: "#a855f7" },
        { x: 404, w: 96, c: "#ec4899" },
      ].map((s, i) => (
        <rect key={i} className="pod-bar" style={{ animationDelay: `${i * 0.15}s` }}
              x={s.x} y="40" width={s.w} height="28" rx="4" fill={s.c} />
      ))}

      {/* Aşağı oklar */}
      {[68, 164, 260, 356, 452].map((cx, i) => (
        <path key={i} className="pod-bar" style={{ animationDelay: `${i * 0.15 + 0.4}s` }}
              d={`M ${cx} 78 L ${cx} 110 M ${cx - 5} 102 L ${cx} 110 L ${cx + 5} 102`}
              stroke="#475569" strokeWidth="1.5" fill="none" />
      ))}

      {/* Beş hedef makine */}
      {[
        { x: 28,  c: "#3b82f6", t: "M1 · 24 GB"  },
        { x: 124, c: "#22c55e", t: "M2 · 16 GB"  },
        { x: 220, c: "#f59e0b", t: "M3 · 16 GB"  },
        { x: 316, c: "#a855f7", t: "M4 · 8 GB"   },
        { x: 412, c: "#ec4899", t: "M5 · 8 GB"   },
      ].map((m, i) => (
        <g key={i} className="pod-bar" style={{ animationDelay: `${i * 0.15 + 0.7}s` }}>
          <rect x={m.x} y="120" width="80" height="56" rx="6" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
          <rect x={m.x + 6} y="128" width="68" height="6" rx="2" fill={m.c} />
          <rect x={m.x + 6} y="140" width="48" height="4" rx="1" fill="#cbd5e1" />
          <rect x={m.x + 6} y="148" width="58" height="4" rx="1" fill="#cbd5e1" />
          <text x={m.x + 40} y="194" textAnchor="middle" fontSize="10" fontFamily="ui-monospace,monospace" fill="#0f172a">{m.t}</text>
        </g>
      ))}
    </svg>
    <figcaption className="mt-2 text-center text-sm text-slate-500">
      Katman ataması, boş <a href="/learn/vrm-vram">VRAM</a> ile orantılıdır. 24 GB'lık makine, 8 GB'lık olanlardan daha fazla katman taşır.
    </figcaption>
  </figure>
);

const CostCompareDemo = () => (
  <figure className="my-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
    <style>{`
      @keyframes pod-grow { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
      .pod-grow { transform-origin: left center; animation: pod-grow 1.2s cubic-bezier(.2,.7,.2,1) both; }
    `}</style>
    <svg viewBox="0 0 520 200" role="img" aria-label="Aylık AI maliyetini karşılaştıran çubuk grafik: bulut 1.400 dolar, pod ise elektrik olarak yaklaşık 14 dolar." style={{ width: "100%", height: "auto" }}>
      <text x="20" y="22" fontSize="12" fontFamily="ui-sans-serif,system-ui" fill="#0f172a" fontWeight="600">Aylık maliyet · 5 kişilik ekip · ~30M token</text>

      <text x="20" y="60" fontSize="11" fontFamily="ui-monospace,monospace" fill="#475569">Bulut API (sınır modeli)</text>
      <rect className="pod-grow" x="20"  y="68" width="460" height="22" rx="4" fill="#ef4444" />
      <text x="486" y="84" fontSize="11" fontFamily="ui-monospace,monospace" fill="#0f172a">$1,400</text>

      <text x="20" y="118" fontSize="11" fontFamily="ui-monospace,monospace" fill="#475569">Pod (sadece elektrik)</text>
      <rect className="pod-grow" style={{ animationDelay: ".4s" }} x="20" y="126" width="14" height="22" rx="4" fill="#22c55e" />
      <text x="40" y="142" fontSize="11" fontFamily="ui-monospace,monospace" fill="#0f172a">~$14</text>

      <text x="20" y="180" fontSize="10" fontFamily="ui-sans-serif,system-ui" fill="#64748b">
        Bulut rakamı, milyon token başına ~$3 giriş / $15 çıkış olan Sonnet sınıfı fiyatlandırmasına dayanmaktadır. Pod rakamı, aktif makinelerde ortalama ~150 W ve kWh başına $0.13 olduğunu varsayar.
      </text>
    </svg>
  </figure>
);

const TerminalCard = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="my-6 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-sm">
    <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-2 text-xs text-slate-300">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      <span className="ml-2 font-mono">{title}</span>
    </div>
    <pre className="!my-0 overflow-x-auto bg-slate-900 px-4 py-3 text-sm leading-relaxed text-slate-100"><code>{children}</code></pre>
  </div>
);

export const intro = (
  <>
    <p>
      Hyperspace Pods, küçük bir grup insanın — bir aile, bir girişim, birkaç
      arkadaş — sahip oldukları dizüstü bilgisayarları ve masaüstü bilgisayarları tek bir
      paylaşılan AI kümesinde birleştirmesini sağlar. Herkes CLI'yi kurar, biri bir pod
      oluşturur, bir davet bağlantısı paylaşır ve makineler eşler arası bir ağ
      oluşturur. Herhangi bir dizüstü bilgisayarın sahip olduğundan daha fazla belleğe ihtiyaç duyan modeller —
      Qwen 3.5 32B, GLM-5 Turbo — otomatik olarak grup genelinde parçalanır.
    </p>
    <p>
      Dışarıdan bakıldığında, bir <code>pk_*</code> anahtarına sahip, IDE'nize, aracınıza
      veya OpenAI protokolünü konuşan herhangi bir araca doğrudan entegre olan, OpenAI uyumlu bir API uç noktası gibi görünür.
      Anahtarı yapıştırmak ve temel URL'yi değiştirmek dışında hiçbir yapılandırma
      gerekmez. Bu kılavuz, Pod'ların ne olduğu, parçalamanın nasıl çalıştığı ve bir tane kurmak için
      dört komut konusunda size yol gösterir. Pod'lar bugün Hyperspace v5.19 ile birlikte geliyor.
    </p>
  </>
);

export const body = (
  <>
    <h2 id="what-it-is">Bir Pod aslında nedir</h2>
    <p>
      Bir pod, Hyperspace CLI'sini çalıştıran ve <a href="/learn/inference">çıkarım</a>
      işini paylaşmayı kabul etmiş bir grup makinedir. Üyelik, API anahtarları ve paylaşılan hazine,
      Raft mutabakatı kullanılarak her üyede çoğaltılır, bu nedenle bağımlı olunacak merkezi bir
      sunucu yoktur. İnternetiniz kesilirse, pod yerel ağınızda çalışmaya devam eder.
      Bir üyenin dizüstü bilgisayarı kapanırsa, pod onun etrafında yeniden parçalanır.
    </p>

    {PodMeshDemo()}

    <p>
      Yukarıdaki resim çoğu insanın ilk başta inanmadığı kısımdır: gerçekten
      bir aracı yoktur. Bir prompt makinenizden çıkar, pod üyelerinizin makineleri
      arasında atlar ve yanıt aynı şekilde geri gelir. Koordinatör yönlendirmeyi seçer,
      ancak veri düzlemi doğrudandır.
    </p>

    <h2 id="how-sharding-works">Otomatik parçalama nasıl çalışır</h2>
    <p>
      Katman aralıklarını yapılandırmaz veya VRAM bütçesini elle hesaplamazsınız. Pod'a hangi
      modeli istediğinizi söylersiniz — örneğin <code>qwen-3.5-32b</code> — ve
      koordinatör her üyenin boş belleğini inceler, modelin katmanlarını orantılı olarak
      böler ve token'ları ortaya çıkan halka üzerinden boru hattına iletir.
    </p>

    {ShardingDemo()}

    <p>
      Dikkat edilmesi gereken iki şey var. Birincisi, daha fazla VRAM'e sahip makineler
      daha fazla katman taşır, bu nedenle güçlü bir masaüstü ve ince bir dizüstü bilgisayar
      sorunsuz bir şekilde bir arada bulunur — masaüstü sadece daha fazla yük çeker. İkincisi,
      çıkarım boru hattına alındığı için, her makine aynı anda farklı bir token üzerinde
      çalışır; verim, halkadaki en yavaş makineye göre artar, en hızlıya göre değil.
    </p>

    <h2 id="setup">Bir pod kurma (4 komut)</h2>
    <p>
      Aynı kurulum macOS, Linux ve WSL2 altındaki Windows'ta çalışır. En az 16 GB birleşik
      belleğe veya 8 GB özel VRAM'e sahip bir makine getirin; daha küçük makineler
      yine de katılabilir, sadece daha az katman alırlar.
    </p>

    <h3>Adım 1 — CLI'yi kurun</h3>
    <TerminalCard title="install.sh">{`# macOS / Linux
curl -fsSL https://hyperspace.ai/install | sh

# Windows (PowerShell, WSL2 içinde)
irm https://hyperspace.ai/install.ps1 | iex`}</TerminalCard>

    <h3>Adım 2 — Pod'u oluşturun</h3>
    <p>
      İlk üye, ilk Raft liderine ev sahipliği yapacak makinede <code>pod create</code>
      komutunu çalıştırır. Herhangi bir üye daha sonra lider olabilir; burası sadece pod'un
      doğduğu yerdir.
    </p>
    <TerminalCard title="hyperspace pod create">{`$ hyperspace pod create --name "ekip-podu" --models qwen-3.5-32b,glm-5-turbo,gemma-4

  Pod oluşturuldu.
  Üyeler:     1 (siz)
  Hazine:     $0.00
  API temeli: http://pod.local:5891/v1
  API anahtarı: pk_live_4f9c…7a32   (bir kez gösterilir — şimdi kopyalayın)`}</TerminalCard>

    <h3>Adım 3 — Diğerlerini davet edin</h3>
    <p>
      Davet bağlantısı kısa ömürlüdür ve genel bir URL'ye değil, pod'un kimliğine
      bağlıdır. Ev yönlendiricilerinin arkasındaki üyelerin bağlantı noktası yönlendirmesine
      ihtiyacı yoktur; ağ, NAT geçişini otomatik olarak halleder.
    </p>
    <TerminalCard title="hyperspace pod invite">{`$ hyperspace pod invite --uses 4 --expires 24h

  https://hyperspace.ai/i/k7Q8e3-r2tL  (4 kullanım · 24 saat içinde sona erer)

# Her davetlinin makinesinde:
$ hyperspace pod join https://hyperspace.ai/i/k7Q8e3-r2tL
  "ekip-podu"na katıldı. 24 GB boş VRAM algılandı.
  Koordinatör qwen-3.5-32b'yi yeniden parçalıyor…  tamam.`}</TerminalCard>

    <h3>Adım 4 — Araçlarınızı ona yönlendirin</h3>
    <p>
      Pod, OpenAI uyumlu bir uç nokta sunar. Bu protokolü konuşan herhangi bir şey —
      OpenAI Python SDK'sı, IDE'niz, bir{" "}
      <a href="/guides/how-to-build-an-agent-with-the-claude-agent-sdk">ajan SDK'sı</a>,
      bir kod tamamlama eklentisi, özel bir betik — kod değişikliği olmadan çalışır.
    </p>
    <TerminalCard title="python">{`from openai import OpenAI

client = OpenAI(
    base_url="http://pod.local:5891/v1",
    api_key="pk_live_4f9c…7a32",
)

resp = client.chat.completions.create(
    model="qwen-3.5-32b",
    messages=[{"role": "user", "content": "Bu fonksiyonu netlik için yeniden düzenle…"}],
)
print(resp.choices[0].message.content)`}</TerminalCard>

    <h2 id="cost">Bu, maliyet hesabını neden değiştiriyor</h2>
    <p>
      Bulut AI için ödeme yapan beş kişilik bir ekip, API çağrılarına ayda tipik olarak
      500–2.000 dolar harcar. Aynı ekibin mevcut makineleri, Qwen 3.5 (SWE-bench'te
      rekabetçi) ve GLM-5 Turbo'yu (araç çağırma ve web araştırması için BrowseComp'ta #1)
      marjinal elektrik maliyetiyle sunabilir. Günlük işler için — kod incelemesi,
      yeniden düzenlemeler, araştırma, taslak hazırlama — yerel modeller bunu halleder ve
      kimseye fatura kesilmez.
    </p>

    {CostCompareDemo()}

    <p>
      Bir sorgu, kimsenin yerel olarak sahip olmadığı bir sınır modeline gerçekten ihtiyaç
      duyduğunda, pod, paylaşılan hazineden toptan fiyatlarla buluta geri döner. Bu nedenle
      "tamamen yerel" ve "tamamen bulut" arasında seçim yapmak zorunda değilsiniz —
      varsayılan olarak mantıklı bir yerel seçeneğiniz ve buna gerçekten ihtiyaç duyan
      sorguların %5'i için toptan bir kaçış kapağınız vardır. Hangi modellerin
      ağırlıklarının üzerinde performans gösterdiğine dair bir referans noktası isterseniz,{" "}
      <a href="/tools/ai-model-compare">AI model karşılaştırma aracımız</a>
      mevcut kıyaslamaları yan yana gösterir.
    </p>

    <h2 id="lineup">Pratik bir üç model kurulumu</h2>
    <p>
      Vahşi doğada gördüğümüz çoğu pod, her biri en iyi olduğu işi yapan aynı üç
      modelde karar kılıyor:
    </p>
    <ul>
      <li>
        <strong>Qwen 3.5 32B</strong> kod ve akıl yürütme için — yeniden düzenlemeler,
        kod incelemesi ve uzun biçimli düşünme için beygir.
      </li>
      <li>
        <strong>GLM-5 Turbo</strong> gezinme ve araştırma için — araç çağırma ve web
        araştırması için BrowseComp'ta mevcut lider.
      </li>
      <li>
        <strong>Gemma 4</strong> hızlı hafif görevler için — otomatik tamamlama, küçük
        sınıflandırmalar, iki saniye beklemekten nefret edeceğiniz her şey.
      </li>
    </ul>
    <p>
      Üçü de karma donanıma sahip beş makinelik bir podda aynı anda yüklenir.
      Koordinatör her isteği, çağıranın istediği modele yönlendirir; hiçbir uğraşma
      gerekmez.
    </p>

    <h2 id="what-makes-this-different">Bunu farklı kılan nedir</h2>
    <ul>
      <li>
        <strong>Aracı yok.</strong> Prompt'lar IDE'nizden pod üyelerinizin donanımına
        ve geri gider. Verilerinizi okuyan arada bir sunucu yoktur.
      </li>
      <li>
        <strong>Satıcıya bağımlılık yok.</strong> Pod üyeliği, API anahtarları ve
        hazine, Raft kullanılarak kendi makinelerinizde çoğaltılır. İnternet
        giderse, yerel ağ çalışmaya devam eder. Pod'unuzun bağlı olduğu
        başka birinin bulutunda bir veritabanı yoktur.
      </li>
      <li>
        <strong>Otomatik parçalama.</strong> Katman aralıklarını yapılandırmaz
        veya VRAM bütçelerini hesaplamazsınız. Pod'a hangi modeli istediğinizi söyleyin;
        çevrimiçi olan donanıma nasıl bölüneceğini o halleder.
      </li>
      <li>
        <strong>Gerçek NAT geçişi.</strong> Dinamik IP'li bir ev yönlendiricisinin
        arkasındaki arkadaşınız mı? Çalışır. VPN, Tailscale veya bağlantı noktası
        yönlendirmesi gerekmez.
      </li>
      <li>
        <strong>Yerel olduğunda ücretsiz.</strong> Bulut faturaları kullanımla
        artar. Yerel donanımda pod çıkarımı hiçbir şeyle artmaz. 10.000'inci
        prompt'unuzun marjinal maliyeti, dizüstü bilgisayarınızın zaten kullandığı
        elektriktir.
      </li>
    </ul>

    <h2 id="treasury-marketplace">Hazine ve bilgi işlem pazarı</h2>
    <p>
      Hazine, hiçbir yerel modelin yeterince iyi olmadığı nadir bulut geri dönüş
      sorgusunu finanse eden paylaşılan bir bakiyedir. Herhangi bir üye onu
      doldurabilir; her harcama her üyenin defterine çoğaltılır, bu nedenle
      sürpriz faturalar olmaz. Pod boştayken — gece boyunca, hafta sonları, herkes
      öğle yemeğindeyken — bilgi işlemini Hyperspace pazarında kiralayabilir
      ve hazineye alacak kaydedebilir, kimin neyi kullanabileceğini kontrol eden
      ayrıntılı izinlerle.
    </p>

    <h2 id="common-mistakes">Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Pod'un birleşik VRAM'inden daha büyük bir model yüklemek.</strong>
        CLI sizi uyarır, ancak uyarıyı atlarsanız pod diskte takas edilen katmanlara
        geri döner ve verim çöker. Sığan bir model seçin.
      </li>
      <li>
        <strong>Lideri en sık kapanan dizüstü bilgisayara koymak.</strong>
        Raft yeniden seçim yapar, ancak her lider değişikliğinde 2-3 saniyelik bir
        aksama görürsünüz. Açık kalan masaüstünü terfi ettirin.
      </li>
      <li>
        <strong>Bulut geri dönüşünün çağrı başına isteğe bağlı olduğunu unutmak.</strong>
        Yalnızca gerçekten istediğinizde isteğinizde <code>fallback="auto"</code>
        parametresini iletin. Aksi takdirde pod yerel modelin yanıtını döndürür
        ve hazine olduğu gibi kalır.
      </li>
      <li>
        <strong>Token'ları prompt uzunluğuna bakarak saymak.</strong>
        Yerel ücretsizdir ancak gecikme ücretsiz değildir — uzun prompt'lar
        boru hattını hala yavaşlatır. Hız için ayar yapıyorsanız, önce
        prompt'larınızı{" "}
        <a href="/tools/ai-token-counter">AI token sayacımızdan</a> geçirin.
      </li>
    </ul>

    <h2 id="when-not-to">Bir Pod'un doğru cevap olmadığı zamanlar</h2>
    <p>
      Bir dizüstü bilgisayarı olan ve havuz yapacak arkadaşı olmayan yalnız bir
      geliştiriciyseniz,{" "}
      <a href="/guides/how-to-use-ollama">Ollama</a> veya{" "}
      <a href="/guides/how-to-use-lm-studio">LM Studio</a> gibi tek düğümlü bir
      kurulum daha basittir ve size koordinasyon yükü olmadan aynı yerel-ilk
      faydaları sağlar. Pod'lar, en az üç makine havuz yaptığında kendini amorti
      eder — otomatik parçalama ve paylaşılan hazinenin kendini ödemeye başladığı
      yer burasıdır.
    </p>
  </>
);

export const faq = [
  {
    q: "Prompt'um Hyperspace'in sunucularından geçiyor mu?",
    a: "Hayır. Veri düzlemi tamamen eşler arasıdır — prompt'unuz doğrudan makinenizden pod üyelerinizin makinelerine ve geri gider. Hyperspace'in altyapısı NAT geçişine ve ilk el sıkışmaya yardımcı olur ancak prompt'u veya yanıtı asla görmez.",
  },
  {
    q: "Bir pod üyesinin dizüstü bilgisayarı istek ortasında uyku moduna geçerse ne olur?",
    a: "Koordinatör düşen düğümü algılar, modeli kalan üyeler arasında yeniden parçalar ve devam eden isteği yeniden dener. Tipik olarak 1-3 saniyelik bir aksama görürsünüz; istek başarıyla tamamlanır.",
  },
  {
    q: "Bir Hyperspace Pod'u Cursor, Claude Code veya OpenAI-SDK betiğimle kullanabilir miyim?",
    a: "Evet. Pod, OpenAI uyumlu bir uç nokta sunar, bu nedenle bir temel URL ve API anahtarı ayarlamanıza izin veren herhangi bir araç değişiklik yapılmadan çalışır — pod'un URL'sini ve pk_* anahtarını yapıştırın ve işiniz biter.",
  },
  {
    q: "Bir pod aslında ne kadar büyük bir model çalıştırabilir?",
    a: "Üyeleriniz arasındaki boş VRAM'i toplayın. Beş orta sınıf makineden oluşan bir pod, Qwen 3.5 32B gibi 32B parametreli modelleri rahatça çalıştırabilir; daha büyük kurulumlar 70B sınıfı modelleri çalıştırmıştır. CLI, yüklemeden önce neyin sığdığını size söyler.",
  },
  {
    q: "Pod gerçekten ücretsiz mi, yoksa bir Hyperspace aboneliği var mı?",
    a: "Pod'ların kendisi ücretsizdir — CLI açık kaynaktır ve çıkarım zaten sahip olduğunuz donanımda gerçekleşir. Paylaşılan hazine, yalnızca pod'unuzun yerel olarak çalıştıramayacağı bir sınır modeline yapılan bulut geri dönüş çağrısını tercih ettiğinizde para harcar ve bunlar toptan fiyatlarla faturalandırılır.",
  },
];