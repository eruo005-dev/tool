import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    70B parametreli bir modeli çalıştırmak eskiden 30.000 dolarlık bir sunucu gerektiriyordu. 2026'ya gelindiğinde, 2.000 dolarlık bir masaüstü bilgisayarda, 1.800 dolarlık bir Mac Studio'da veya zaten sahip olduğunuz üç dizüstü bilgisayarda çalışıyor. Anahtar, hangi ödünleşimi yapacağınızı bilmek &mdash; <a href="/learn/quantization">niceleme</a>, boşaltma veya havuzlama &mdash; ve bir sonraki GB'ın peşinden koşmayı ne zaman bırakıp ihtiyaç duyan istemler için buluta yönlendireceğinizi anlamaktır.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>"70B"nin aslında ne kadar ağır olduğu</h2>
    <p>
      Parametre sayısı manşet sayıdır; diskteki boyut nicelemeye bağlıdır. Aynı Llama 3.3 70B ağırlıkları birçok çeşitte gelir:
    </p>
    <table className="my-3 w-full text-left text-sm">
      <thead className="text-xs uppercase tracking-wide text-slate-500">
        <tr>
          <th className="py-1">Niceleme</th>
          <th className="py-1">Dosya boyutu</th>
          <th className="py-1">FP16'ya göre kalite</th>
          <th className="py-1">Gerekli minimum bellek</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-slate-100"><td className="py-1">FP16 (tam)</td><td className="py-1">~140 GB</td><td className="py-1">%100</td><td className="py-1">144 GB toplam</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">Q8_0 (8-bit)</td><td className="py-1">~70 GB</td><td className="py-1">~%99,5</td><td className="py-1">76 GB toplam</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">Q5_K_M (5-bit)</td><td className="py-1">~52 GB</td><td className="py-1">~%98</td><td className="py-1">58 GB toplam</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">Q4_K_M (4-bit)</td><td className="py-1">~42 GB</td><td className="py-1">~%96</td><td className="py-1">48 GB toplam</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">Q3_K_M (3-bit)</td><td className="py-1">~32 GB</td><td className="py-1">~%93</td><td className="py-1">38 GB toplam</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">IQ2_XS (2-bit)</td><td className="py-1">~22 GB</td><td className="py-1">~%88</td><td className="py-1">26 GB toplam</td></tr>
      </tbody>
    </table>
    <p>
      Q4_K_M neredeyse herkes için en uygun noktadır &mdash; 3,3 kat daha az bellek için ~%4 kalite kaybı. Q3'ün ötesinde model, gözle görülür şekilde daha kötü kod ve akıl yürütme üretmeye başlar. "Gerekli minimum bellek" sütunu, tipik bağlam uzunluklarında KV önbelleği için 6&ndash;8 GB alan ekler.
    </p>

    <h2>Yol 1: Yeterli birleşik belleğe sahip tek bir makine</h2>
    <p>
      Apple Silicon'un birleşik bellek mimarisi, Mac'leri en ucuz tek kutu 70B ana bilgisayarları yapar. İlgili yapılandırmalar:
    </p>
    <ul>
      <li><strong>M2 Max MacBook Pro 64 GB</strong> (~2.800 $ ikinci el): 70B Q4'ü saniyede 6&ndash;9 token ile çalıştırır. Pille dostu. En ucuz taşınabilir seçenek.</li>
      <li><strong>Mac Studio M2 Ultra 128 GB</strong> (~3.500 $ yenilenmiş): 70B Q5'i saniyede 12&ndash;16 token ile çalıştırır. Ciddi bireysel kullanım için en uygun nokta.</li>
      <li><strong>Mac Studio M3/M4 Ultra 192 GB</strong> (4.000 $+): 70B FP8 veya Mixtral 8x22B'yi saniyede 18&ndash;22 token ile çalıştırır.</li>
    </ul>
    <p>
      PC tarafında, tek bir 24 GB RTX 4090 veya RTX 5090, <a href="/learn/vrm-vram">VRAM</a>'de bir 70B modelini tutamaz, ancak llama.cpp'nin GGUF boşaltması, çalıştırmak için katmanları RAM ve VRAM arasında <a href="/learn/stream">aktaracaktır</a>. 4090 + 64 GB DDR5 sistemde saniyede 8&ndash;14 token bekleyin. Bu ödünleşmeye değer çünkü 4090'lar daha küçük modeller için de mükemmeldir.
    </p>

    <h2>Yol 2: GPU boşaltma (az kullanılan numara)</h2>
    <p>
      Tüm modeli VRAM'e sığdırmanız gerekmez. llama.cpp'nin{" "}
      <code>--n-gpu-layers</code> bayrağı, N <a href="/learn/transformer">dönüştürücü</a> katmanını GPU'ya yüklemenize ve geri kalanını CPU RAM'inde tutmanıza olanak tanır. GPU, katmanlarında hızlı matris matematiği yapar; CPU, katmanlarında daha yavaş matematik yapar; sistem RAM veri yolu üzerinden aktivasyonları değiştirirler.
    </p>
    <pre className="overflow-x-auto rounded bg-slate-900 p-3 text-xs text-slate-100"><code>{`# 24 GB GPU + 64 GB sistem RAM'inde 70B Q4_K_M
# Llama 3.3 70B'de toplam 80 katman; 32'si 24 GB VRAM'e sığar
./llama-server \\
    -m models/llama-3.3-70b-instruct.Q4_K_M.gguf \\
    -ngl 32 \\
    -c 8192 \\
    --host 0.0.0.0 \\
    --port 8080`}</code></pre>
    <p>
      Hız, boşaltılan katmanlarla kabaca doğrusal olarak ölçeklenir: GPU'da 0 katman = saf CPU'da ~3 token/sn; 4090'da 32 katman = ~10 token/sn; 80 katman (tümü GPU'da, 80+ GB VRAM gerektirir) = ~25 token/sn. Çoğu kurulum için, GPU'daki katmanların %30&ndash;50'si eğrinin dirseğidir.
    </p>

    <h2>Yol 3: Zaten sahip olduğunuz makineleri havuzlama</h2>
    <p>
      Üç adet 32 GB dizüstü bilgisayar, aralarında bir 70B Q4 tutabilir &mdash; her biri ~26 katman depolar ve token'ları bir halka üzerinde boru hattına alır. İki adet 64 GB Mac ve bir adet 32 GB Linux kutusu aynısını yapar. Karma donanıma sahip dört makinelik bir küme, 32k bağlam için yer olacak şekilde Q5'te bir 70B'yi rahatça barındırır. Bilinmeye değer çalışma zamanları, <a href="/guides/how-to-combine-laptops-to-run-large-llms">büyük LLM'leri çalıştırmak için dizüstü bilgisayarlar nasıl birleştirilir</a> bölümünde ele alınmıştır.
    </p>
    <p>
      Satın almaya göre havuzlamanın avantajı: mevcut makineleri diğer her şey için kullanışlı tutarsınız ve daha fazla kapasite eklemek bir davet bağlantısıdır, 4.000 dolarlık bir donanım satın alımı değil. Dezavantajı: saniyedeki token sayısı en yavaş üye tarafından sınırlanır ve dizüstü bilgisayarını kapatan herkes modeli yeniden dağıtır.
    </p>

    <h2>Hızların gerçekte nasıl hissettirdiği</h2>
    <ul>
      <li><strong>20+ tok/sn:</strong> okuyabildiğiniz kadar hızlı. Amiral gemisi bulut hissi.</li>
      <li><strong>10&ndash;20 tok/sn:</strong> kod ve düzyazı için tamamen kullanılabilir. Düşünme hızı.</li>
      <li><strong>5&ndash;10 tok/sn:</strong> arka plan görevleri için iyi. "Bunu özetle" ve eşzamansız aracılar için iyi; sohbet için biraz yavaş.</li>
      <li><strong>2&ndash;5 tok/sn:</strong> fark edilir bekleme. Toplu işler için kullanın, etkileşimli oturumlar için değil.</li>
      <li><strong>2 tok/sn'nin altı:</strong> bir şey yanlış yapılandırılmış. Neredeyse her zaman GPU boşaltma devre dışı veya takas çakışması.</li>
    </ul>

    <h2><a href="/learn/context-window">Bağlam penceresi</a>: sessiz çarpan</h2>
    <p>
      Bellek maliyeti, bağlam penceresiyle birlikte artar çünkü KV önbelleği, istemdeki her belirteç için anahtarları ve değerleri depolar. Kabaca boyutlandırma:
    </p>
    <ul>
      <li>4k bağlamda 70B: ~2 GB KV önbelleği.</li>
      <li>32k bağlamda 70B: ~16 GB KV önbelleği.</li>
      <li>128k bağlamda 70B: ~64 GB KV önbelleği &mdash; modelden daha büyük.</li>
    </ul>
    <p>
      Bağlam pencerenizi yarıya indirmek bazen bir niceleme kademesi yukarı çıkmanıza izin verir. Bir akşamı bellek yetersiz hatalarıyla harcamadan önce bir yapılandırma planlamak için <a href="/tools/llm-context-window-calculator">LLM bağlam penceresi hesaplayıcısını</a> kullanın.
    </p>

    <h2>Güç, ısı ve gürültü gerçeği</h2>
    <p>
      70B'yi bir 4090 masaüstünde tam gaz çalıştırmak ~450&ndash;550 W çeker ve kasa sıcaklıklarını zorlar. Aynı yük altındaki bir Mac Studio M2 Ultra ~120&ndash;180 W çeker ve fısıltı gibi sessiz kalır. Bunu, eşiniz aynı odada telefondayken bir ev ofisinde çalıştırıyorsanız, Mac önemli bir prim değerindedir.
    </p>
    <p>
      Pod'lar ısıyı dağıtır. Her biri %30'da iki dizüstü bilgisayar, %90'da bir masaüstü bilgisayardan daha sessizdir ve hiçbir fan tepe yapmaz, hava akışlarını mutlu tutar.
    </p>

    <h2>70B'nin yanlış cevap olduğu zamanlar</h2>
    <p>
      İş yükleriniz uzun bağlamlı akıl yürütme, karmaşık kod incelemesi veya kalite gerektiren çok adımlı aracılar içerdiğinde 70B'yi yerel olarak çalıştırın. Şunlar için uğraşmayın:
    </p>
    <ul>
      <li>Otomatik tamamlama, belge özetleri, basit sınıflandırma &mdash; 80 tok/sn'de bir 8B modeli çok daha iyi bir deneyimdir.</li>
      <li>Tek seferlik sorular &mdash; barındırılan bir sınır modeli için ödeyeceğiniz 5 sent, yerel bir 70B'yi bekleyerek harcadığınız zamandan daha ucuzdur.</li>
      <li>Güncel web verileri gerektiren herhangi bir şey &mdash; daha küçük bir yerel modeli bir arama aracıyla eşleştirin veya buluta geri dönün (bir Hyperspace pod'u otomatik olarak her ikisine de yönlendirebilir).</li>
    </ul>

    <h2>Üç referans yapılandırması</h2>
    <ul>
      <li><strong>1.800 $ en ucuz yol:</strong> ikinci el Mac Studio M2 Max 64 GB + Ollama. Tek kullanıcı, 70B Q4, 6&ndash;8 tok/sn.</li>
      <li><strong>3.500 $ en uygun nokta:</strong> Mac Studio M2 Ultra 128 GB + Ollama veya LM Studio. 3 kişilik ekip kullanımı, 70B Q5, 12&ndash;16 tok/sn.</li>
      <li><strong>0 $ (zaten varsa):</strong> Wi-Fi 6 üzerinden bir Hyperspace pod'una (<a href="/guides/how-to-set-up-a-hyperspace-pod">kurulum kılavuzu</a>) katılmış 4&ndash;5 mevcut dizüstü bilgisayar. 5 kişilik ekip kullanımı, 70B Q4, 8&ndash;12 tok/sn, gerçekten bir sınır modeline ihtiyacınız olduğunda toptan fiyatlı bulut yedeklemesi ile.</li>
    </ul>
    <p>
      Kendi maliyet rakamlarınızı girmek ve bulut API'leriyle karşılaştırmak için <a href="/tools/ai-cost-estimator">AI maliyet tahmincisi</a> matematiği yapar. Bellek bütçenize uyan açık ağırlıklı modelleri karşılaştırmak için <a href="/tools/ai-model-compare">AI model karşılaştırma</a> aracı, akıl yürütme, kod ve çok dilli çalışma genelinde güncel kıyaslamaları takip eder.
    </p>
  </>
);