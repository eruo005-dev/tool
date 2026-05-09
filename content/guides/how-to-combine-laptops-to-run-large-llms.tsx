import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Tek bir dizüstü bilgisayar 16 GB RAM ile 7B modelini çalıştırabilir ve hızlı hissettirebilir. Ancak
    Llama 3.3 70B veya Qwen 3.5 72B'yi çalıştıramaz. Çözüm 5.000 dolarlık bir GPU yükseltmesi değil &mdash; çözüm,
    sahip olduğunuz makineleri bir araya getirmektir. Doğru çalışma zamanı ile üç veya dört dizüstü bilgisayar,
    hiçbirinin tek başına tutamayacağı bir modeli işbirlikçi bir şekilde yükleyebilir ve onu gruptaki en yavaş
    olanın hızında sunabilir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>"Dizüstü bilgisayarları birleştirmek" aslında ne anlama geliyor</h2>
    <p>
      Modern açık ağırlıklı LLM'ler, bir dizi <a href="/learn/transformer">transformer</a> katmanı olarak depolanır. Çoğu katman
      bağımsızdır &mdash; katman 12'nin katman 11 ile aynı makinede olması gerekmez,
      sadece aktivasyonları alması ve iletmesi yeterlidir. Dağıtık <a href="/learn/inference">çıkarım</a>
      çalışma zamanları bundan yararlanır: modeli <em>parçalara</em> ayırır, her parçayı
      farklı bir makineye verir ve token'ları ortaya çıkan halka üzerinden ardışık olarak iletir. Bu tekniğe
      <strong>ardışık düzen paralelliği</strong> denir ve herhangi bir ticari ağda
      (Wi-Fi, gigabit Ethernet, Thunderbolt köprüsü) çalışır.
    </p>
    <p>
      Aynı makinelere ihtiyacınız yok. 64 GB Mac Studio, 32 GB ThinkPad ve
      16 GB MacBook Air aynı gruba katılabilir &mdash; daha büyük makineler sadece
      daha fazla katman taşır. Darboğazınız en küçük değil, en yavaş üye olur.
    </p>

    <h2>2026'da bilmeye değer dört çalışma zamanı</h2>

    <h3>1. Hyperspace grupları (en kolay, OpenAI uyumlu)</h3>
    <p>
      Hyperspace, eşler arası bir grup yöneticisidir: bir makine <code>pod create</code> komutunu çalıştırır,
      diğer herkes bir davet bağlantısıyla katılır ve ortaya çıkan küme,
      OpenAI uyumlu bir HTTP uç noktası sunar. OpenAI protokolünü konuşan araçlar &mdash;
      Cursor, Continue.dev, OpenAI Python SDK'sı, özel ajanlar &mdash; kod değişikliği olmadan
      çalışır. NAT geçişi otomatiktir, bu nedenle ev yönlendiricilerinin arkasındaki üyelerin
      bağlantı noktası yönlendirmesine ihtiyacı yoktur. Tam kılavuz için <a href="/guides/how-to-set-up-a-hyperspace-pod">hyperspace grubu nasıl kurulur</a> bölümüne bakın.
    </p>

    <h3>2. exo (terminal öncelikli, Apple Silicon parlar)</h3>
    <p>
      exo (exo Labs'tan), yerel ağınızdaki makineleri otomatik olarak keşfeden ve
      modelleri mevcut belleğe göre parçalara ayıran açık kaynaklı bir dağıtık çıkarım motorudur.
      macOS, Linux, iPhone, iPad ve Android'de çalışır ve PCIe üzerinden kopyalama olmadığı için
      birleşik belleğe sahip Apple Silicon'da özellikle hızlıdır. Bir düğümü başlatmak için tek komut:
    </p>
    <pre className="overflow-x-auto rounded bg-slate-900 p-3 text-xs text-slate-100"><code>{`# kurulum
pip install exo

# aynı wifi üzerindeki her makinede:
exo`}</code></pre>
    <p>
      İlk düğüm, OpenAI'ın tel formatını konuşan bir localhost API uç noktası yazdırır.
      <code>exo run llama-3.1-70b</code> ile bir model çekin ve exo, keşfettiği küme topolojisine
      göre hangi katmanların nereye gideceğine karar verir.
    </p>

    <h3>3. llama.cpp RPC (en fazla kontrol, en düşük bağımlılık)</h3>
    <p>
      llama.cpp, herhangi bir makineyi bir parça işçisine dönüştüren yerleşik bir <code>rpc-server</code>
      moduyla birlikte gelir. Desen şudur: her yardımcı makinede <code>rpc-server</code>'ı başlatın,
      ardından "lider" makinede <code>llama-server</code>'ı yardımcıları işaret eden
      <code>--rpc 192.168.1.10:50052,192.168.1.11:50052</code> ile başlatın. Lider,
      katmanları yardımcılar arasında otomatik olarak dağıtır. Merkezi kayıt yok, çalıştırılacak arka plan
      programı yok &mdash; sadece iki ikili dosya ve bir IP adresleri listesi. llama.cpp'nin desteklediği
      her platformda çalışır. Daha önce yapmadıysanız önce <a href="/guides/how-to-use-llama-cpp">llama.cpp nasıl kullanılır</a>
      bölümünü okumaya değer.
    </p>

    <h3>4. Petals (gerçekten internet üzerinde dağıtık)</h3>
    <p>
      Petals, LLM'ler için BitTorrent tarzı bir ağdır: herkes boş hesaplama gücüne katkıda bulunabilir,
      herkes katılabilir ve şu anda sürü üzerinde yüklü olan bir modele karşı çıkarım çalıştırabilir.
      405B modelini çalıştırmak istiyorsanız ve genel ağ atlamalarından kaynaklanan saniyeler süren
      token başına gecikme süresini kabul ediyorsanız doğru seçimdir. Aynı LAN üzerindeki düşük gecikmeli
      yerel gruplar için doğru seçim değildir.
    </p>

    <h2>Aralarında seçim yapmak</h2>
    <table className="my-4 w-full text-left text-sm">
      <thead className="text-xs uppercase tracking-wide text-slate-500">
        <tr>
          <th className="py-1">Kullanım durumu</th>
          <th className="py-1">Seçim</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-slate-100"><td className="py-1">Bir grubu paylaşan 3-8 kişilik ekip, OpenAI API yüzeyine ihtiyaç duyar</td><td className="py-1">Hyperspace</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">Apple Silicon ağırlıklı ev, gündelik kullanım</td><td className="py-1">exo</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">Maksimum kontrol, özel <a href="/learn/quantization">niceleme</a>, karma Linux/Windows</td><td className="py-1">llama.cpp RPC</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">Herhangi bir özel havuzun tutabileceğinden daha büyük bir şey çalıştırma</td><td className="py-1">Petals</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">64+ GB ve iyi GPU'ya sahip tek makine</td><td className="py-1">Kümeleme yok &mdash; sadece Ollama kullanın</td></tr>
      </tbody>
    </table>

    <h2>Gerçekte ne kadar büyük bir model sığdırabilirsiniz?</h2>
    <p>
      Küme genelindeki toplam kullanılabilir bellek, seçtiğiniz nicelemede modelin disk boyutunu
      artı bağlam penceresi ek yükünü aşmalıdır. Kabaca kurallar:
    </p>
    <ul>
      <li><strong>Q4_K_M (4-bit):</strong> GB cinsinden model boyutu &asymp; milyar cinsinden parametreler &times; 0.6.
        Q4'te Llama 3.3 70B ~40 GB'dir.</li>
      <li><strong>Q5_K_M (5-bit):</strong> ~0.75&times; parametreler. 70B ~52 GB'dir.</li>
      <li><strong>Q8_0 (8-bit):</strong> ~1&times; parametreler. 70B ~70 GB'dir.</li>
      <li><strong>FP16 (16-bit):</strong> ~2&times; parametreler. 70B ~140 GB'dir.</li>
      <li><strong>Bağlam ek yükü:</strong> KV önbelleği için <a href="/learn/context-window">bağlam penceresinin</a> her 1k token'ı için ~0.5 GB ekleyin.</li>
    </ul>
    <p>
      Belirli bir yapılandırma için KV önbelleğini boyutlandırmak üzere <a href="/tools/llm-context-window-calculator">LLM bağlam penceresi hesaplayıcısını</a>
      ve kendi kendine barındırılan bir grubu eşdeğer bulut API harcamasıyla karşılaştırmak için
      <a href="/tools/ai-cost-estimator">AI maliyet tahmincisini</a> kullanın. Üç adet 32 GB dizüstü bilgisayar ve bir
      64 GB masaüstü bilgisayara sahip 5 kişilik bir ekip, elektrik maliyeti karşılığında Q4'te rahatça bir 70B modelini
      barındırabilir.
    </p>

    <h2>Ağ: çoğu kılavuzun atladığı kısım</h2>
    <p>
      Ardışık düzen paralelliği, her token'da aktivasyonları ağ üzerinden katmanlar arasında taşır.
      Tensör boyutları küçüktür (8B&ndash;70B ölçeklerinde tipik olarak token başına 4&ndash;16 KB), bu nedenle
      gecikme süresi bant genişliğinden daha fazla zarar verir. Kabaca en iyiden en kötüye sıralama:
    </p>
    <ul>
      <li><strong>Thunderbolt 4 / USB-C köprüsü (40 Gbps):</strong> iki dizüstü bilgisayar doğrudan kabloyla
        bağlandığında tek makine gibi hissettirir. İki düğümlü gruplar için en iyisi.</li>
      <li><strong>2.5 GbE / 10 GbE kablolu:</strong> 3-8 düğümlü ev kurulumları için ideal; sıfır token hızı kaybı.</li>
      <li><strong>1 GbE kablolu:</strong> 70B'ye kadar mevcut tüm açık ağırlıklı modeller için yeterli.</li>
      <li><strong>Wi-Fi 6 (5 GHz, görüş hattı):</strong> 7B-13B modelleri için kullanılabilir; 70B
        yavaştır ancak çalışır.</li>
      <li><strong>Birden fazla duvardan geçen Wi-Fi:</strong> en iyi ihtimalle saniyede 2&ndash;3 token bekleyin.</li>
    </ul>

    <h2>Hızlı sorun giderme</h2>
    <ul>
      <li><strong>Bir makinenin fanları çığlık atıyor.</strong> Katmanlar eşit olmayan şekilde atanmış. Çoğu çalışma
        zamanında bölmeyi ayarlamak için bir <code>--shard-mem</code> veya <code>--max-vram</code> bayrağı bulunur.</li>
      <li><strong>Token'lar üretim sırasında takılıyor.</strong> Genellikle Wi-Fi'de ağ titreşimi veya
        bir düğümün CPU'sunu zorlayan bir arka plan işlemi. O düğümü kabloya bağlayın, işlemi sonlandırın.</li>
      <li><strong>Küme oluşuyor ancak çıkarım başarısız oluyor.</strong> Karma hassasiyet uyuşmazlığı &mdash; her
        makine aynı nicelemeyi desteklemez. Her makinede aynı tam model dosyasını (aynı
        SHA) çekin.</li>
      <li><strong>Ek RAM'e rağmen Mac mini darboğaz oluyor.</strong> Küçük kasalarda sürekli yük altında güç sınırlaması
        devreye girer. Prizden güç alın, pil değil; hava akışı için makineyi yükseltin.</li>
    </ul>

    <h2>İş akışı aslında neye benziyor</h2>
    <p>
      Bir grup kurulduktan sonra, onu düşünmeyi bırakırsınız. Cursor, Continue.dev, özel
      ajanınız veya bir betik, api.openai.com'a karşı kullanacakları aynı
      OpenAI istemcisiyle <code>http://pod.local:5891/v1</code> adresini işaret eder. Grup, bir
      üye uyuduğunda yük devretmeyi, katılma/ayrılma durumunda yeniden parçalamayı ve gerçekten bir sınır modeline
      ihtiyaç duyan isteklerin %5'i için (toptan fiyatlarla) buluta geri dönmeyi halleder.
    </p>
    <p>
      Daha derin mimari &mdash; Raft'ın liderleri nasıl seçtiği, hazinenin ne yaptığı,
      yerel-bulut yönlendirmesinin nasıl çalıştığı &mdash; için tam
      <a href="/guides/how-to-set-up-a-hyperspace-pod">hyperspace grup kılavuzuna</a> bakın. Bir grupta çalıştırmaya değer
      açık ağırlıklı seçenekleri karşılaştırmak için
      <a href="/tools/ai-model-compare">AI model karşılaştırma aracı</a> güncel kıyaslamaları takip eder.
    </p>
  </>
);