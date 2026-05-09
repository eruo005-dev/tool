import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Bir &ldquo;ev yapay zeka kümesi&rdquo; 2026&rsquo;da bir sunucu rafı değildir &mdash; üç
    ila beş günlük makinenin iyi kablolanmış, bir koordinatör arka plan programı çalıştıran ve
    hiçbirinin tek başına barındıramayacağı 70B&rsquo;lik bir modeli sunan halidir. Donanım
    kararları çoğunlukla ağ, soğutma ve ne kadar gürültüyle yaşamaya razı olduğunuzla ilgilidir.
    Yazılım kısmı çözülmüştür.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Bir ev kümesi ne işe yarar (ve yaramaz)</h2>
    <p>
      Şunlardan herhangi birini istiyorsanız bir tane kurun: yazmaktan gerçekten daha hızlı olan
      kod tamamlama, 7/24 çalışan çoklu etmen iş akışları, büyük belgelerin istek üzerine
      özetlenmesi, özel verileriniz üzerinde kendi RAG&rsquo;ınız veya evdeki dizüstü
      bilgisayarlar arasında tek bir GPU&rsquo;yu paylaşmanın bir yolu. İhtiyacınız sıradan
      sohbetse kurmayın &mdash; kullanmayacağınız kapasite için bir donanım vergisi ödüyorsunuz
      ve aylık 20 dolarlık bir bulut aboneliği daha hızlı hissettirecektir.
    </p>

    <h2>Topoloji: dört şekilden birini seçin</h2>

    <h3>1. Tek ana bilgisayar (1 makine)</h3>
    <p>
      Bir Mac Studio M2/M3/M4 Ultra (64&ndash;192 GB) veya 4090/5090 + 64&ndash;128 GB
      RAM&rsquo;li bir PC. En ucuzu, en sessizi, çalışır durumda tutması en kolayı, ağ
      sorunu yok. Aynı anda yalnızca bir model yüklenebilir ve bir veya iki eşzamanlı ciddi
      kullanıcıyla sınırlıdır. Çoğu hane için doğru başlangıç noktası.
    </p>

    <h3>2. Merkez ve uçlar (1 GPU ana bilgisayarı + N istemci)</h3>
    <p>
      Ciddi bir GPU ana bilgisayarı, Ollama, vLLM veya LM Studio&rsquo;yu sunucu modunda
      çalıştırır; LAN&rsquo;daki her dizüstü ve masaüstü bilgisayar, OpenAI uyumlu istemcisini
      ana bilgisayara yönlendirir. 5&ndash;10 kişilik bir haneye sorunsuzca hizmet verir.
      Herhangi bir birleştirme sihri gerektirmez &mdash; GPU ana bilgisayarı tüm modeli taşır.
      Kurulum için{" "}
      <a href="/guides/how-to-share-a-gpu-across-machines">bir GPU&rsquo;yu makineler arasında
      paylaşma</a> kılavuzuna bakın.
    </p>

    <h3>3. Pod (3&ndash;6 eş, sabit lider yok)</h3>
    <p>
      3&ndash;6 makul özellikli makine arasında Hyperspace, exo veya llama.cpp RPC. Hiçbir
      makinenin tüm modeli tutması gerekmez; katmanlar mevcut belleğe göre parçalanır.
      Herhangi bir üyenin uyumasına karşı dayanıklıdır. Birkaç mevcut makineniz varsa ve
      özel bir GPU ana bilgisayarı satın almak istemiyorsanız doğru seçimdir.{" "}
      <a href="/guides/how-to-combine-laptops-to-run-large-llms">büyük LLM&rsquo;leri çalıştırmak
      için dizüstü bilgisayarları birleştirme</a> ve daha derin{" "}
      <a href="/guides/how-to-set-up-a-hyperspace-pod">hyperspace pod kurulumu</a> kılavuzlarına
      bakın.
    </p>

    <h3>4. Hibrit (1 GPU ana bilgisayarı + taşma için pod)</h3>
    <p>
      Mac Studio günlük 70B&rsquo;yi çalıştırır; pod üyeleri, merkezin sığmadığı daha büyük
      veya özelleşmiş modellerin parçalanmış kopyalarını taşır. Sunucu arka plan programı,
      isteğin hangi modele ihtiyaç duyduğuna göre yük dengelemesi yapar. Yalnızca daha basit
      şekiller doygun hissettirdiğinde yapmaya değer.
    </p>

    <h2>Donanım alışveriş listesi, etkiye göre sıralanmış</h2>

    <h3>Bellek, saat hızından daha önemlidir</h3>
    <p>
      <a href="/learn/inference">Çıkarım</a> için, kullanılabilir birleşik bellek veya <a href="/learn/vrm-vram">VRAM</a> en belirleyici sayıdır.
      64 GB M2 Max ile çalışan 70B Q4, daha yüksek çekirdek başına hıza sahip 32 GB M3
      Max&rsquo;ten daha kullanışlıdır: daha büyük makine modele gerçekten sığar. 2026
      tipik perakende fiyatlarında seçeneklerin sıralaması:
    </p>
    <ul>
      <li><strong>$1.800&ndash;2.500:</strong> kullanılmış Mac Studio M2 Max 64 GB veya Mac Mini M4 Pro 64 GB.</li>
      <li><strong>$2.800&ndash;3.800:</strong> Mac Studio M2/M3 Ultra 128 GB. Tatlı nokta.</li>
      <li><strong>$4.500+:</strong> Mac Studio M3/M4 Ultra 192 GB. 70B FP8 veya herhangi bir güncel Mixtral barındırır.</li>
      <li><strong>$2.000&ndash;3.500 PC:</strong> 4090 veya 5090 + 64&ndash;128 GB DDR5. Küçük
        modellerde daha hızlı, 70B+ üzerinde yükleme yoluyla büyük Mac&rsquo;ten daha yavaş.</li>
      <li><strong>$8.000+:</strong> NVLink ile tek bir kasada çift 4090 / 5090. 70B için
        25+ token/sn tensör paralelliği.</li>
    </ul>

    <h3>Pod&rsquo;lar için ağ pazarlık konusu değildir</h3>
    <p>
      Wi-Fi 6, sıradan pod kullanımı için işe yarar; ciddi pod&rsquo;lar her üye arasında en
      az 2,5 GbE kablolu bağlantı ister. Kendini hızla amorti eden bileşenler:
    </p>
    <ul>
      <li><strong>2,5 GbE / 10 GbE anahtar ($120&ndash;300):</strong> &ldquo;birisi Zoom&rsquo;a
        katıldığında token&rsquo;lar takılıyor&rdquo; ile &ldquo;küme tek bir makine gibi
        davranıyor&rdquo; arasındaki fark.</li>
      <li><strong>USB-C/Thunderbolt ethernet adaptörleri ($30&ndash;60):</strong> yerleşik
        2,5 GbE&rsquo;si olmayan dizüstü bilgisayarlar için.</li>
      <li><strong>Cat 6 kablo döşemeleri:</strong> 2026&rsquo;da Cat 5e&rsquo;den kaçının;
        fiyat aynı ve pay önemli.</li>
    </ul>

    <h3>Güç, soğutma ve gürültü</h3>
    <ul>
      <li><strong>Çıkarım sırasında aktif ana bilgisayar başına 200&ndash;500 W sürekli çekiş
        planlayın</strong>. Bir 4090 ana bilgisayarı ~450 W&rsquo;a, bir Mac Studio Ultra ~150
        W&rsquo;a, bir pod&rsquo;daki dizüstü bilgisayar ~40&ndash;80 W&rsquo;a ulaşır.</li>
      <li><strong>Kesintisiz güç kaynağı ($150&ndash;300):</strong> uzun bir üretim sırasında
        oluşacak bir elektrik kesintisi tüm bağlamı boşa harcar. Küçük bir CyberPower veya APC
        ünitesi GPU ana bilgisayarını ve anahtarı kapsar.</li>
      <li><strong>Kapalı oda termal payı:</strong> 70B&rsquo;yi saatlerce çalıştırmak oda
        <a href="/learn/temperature-ai">sıcaklığını</a> belirgin şekilde yükseltir. Küçük bir
        taşınabilir klima veya sadece kapıyı açık bırakmak en ucuz çözümdür.</li>
      <li><strong>Akustik:</strong> tam gaz bir masaüstü GPU ~50 dBA&rsquo;dır, bu da aynı
        odada dikkat dağıtıcıdır. Ya ana bilgisayarı taşıyın (havalandırmalı kapılı bir dolap
        klasik cevaptır) ya da tam çıkarımda 35 dBA&rsquo;nın altında kalan Mac Silicon&rsquo;u
        seçin.</li>
    </ul>

    <h2>Bir kez kurulacak yazılım yığını</h2>
    <ol>
      <li><strong>GPU ana bilgisayarında Ollama</strong>: en kolay model getirme ve OpenAI uyumlu
        uç nokta. <a href="/guides/how-to-use-ollama">Kurulum kılavuzu</a>.</li>
      <li><strong>Yedek olarak llama.cpp</strong>: daha fazla kontrol, daha iyi yükleme ayarı,
        Ollama&rsquo;nın varsayılanları yeterli olmadığında kullanılır. <a href="/guides/how-to-use-llama-cpp">Kurulum kılavuzu</a>.</li>
      <li><strong>5+ eşzamanlı kullanıcı için verim gerektiğinde vLLM</strong>.</li>
      <li><strong>Tek ana bilgisayarı aştığınızda ve otomatik parçalama ile OpenAI uyumlu
        pod yüzeyi istediğinizde Hyperspace</strong>. <a href="/guides/how-to-set-up-a-hyperspace-pod">Kurulum kılavuzu</a>.</li>
      <li><strong>Herhangi bir uç noktanın HTTPS veya genel erişime ihtiyacı varsa bir ters
        proxy</strong> (Caddy veya Traefik).</li>
    </ol>

    <h2>2026&rsquo;da yerel tutmaya değer modeller</h2>
    <p>
      Küçük bir kütüphane seçin &mdash; her kıyaslama kazananını çalıştırmak, sürücüyü hiç
      kullanmadığınız şeylerle doldurmanın tarifidir. Kullanışlı bir üç model dizilimi:
    </p>
    <ul>
      <li><strong>Qwen 2.5 / Qwen 3.5 32B Q4:</strong> kod, yeniden düzenlemeler, uzun biçimli
        akıl yürütme. 70B&rsquo;nin altındaki en iyi açık ağırlıklı kod modeli.</li>
      <li><strong>Llama 3.3 70B Q4:</strong> genel amaçlı amiral gemisi. Küçük kurulumlarda
        yavaş, ancak diğer her şey için kalite çıtası.</li>
      <li><strong>Gemma 2 9B FP16:</strong> otomatik tamamlama ve küçük sınıflandırmalar için
        &ldquo;200 ms&rsquo;de cevap ver&rdquo; modeli.</li>
    </ul>
    <p>
      Birini değiştirmek isterseniz <a href="/tools/ai-model-compare">AI model karşılaştırma
      aracı</a> güncel kıyaslamaları takip eder.
    </p>

    <h2>Gerçekçi zaman çizelgesi ve bütçe</h2>
    <ul>
      <li><strong>1. Hafta sonu, $0&ndash;3.500:</strong> Ollama ile 8B + 32B modelleri çalıştıran
        tek ana bilgisayar. Yapay zekadan elde edeceğiniz değerin çoğu zaten karşılanmış
        olacak.</li>
      <li><strong>2. Hafta sonu, +$200&ndash;500:</strong> kablolu ağ yükseltmesi, uç noktayı
        evin geri kalanına açma, her istemciye kurulum. Artık bir ev yapay zeka yardımcınız
        var.</li>
      <li><strong>3. Hafta sonu (yalnızca gerekirse), +$0:</strong> bir Hyperspace pod&rsquo;una
        dönüştürün veya ikinci bir makine ekleyin. Artık 4.500 dolarlık bir kutu satın almadan
        70B barındırabilirsiniz.</li>
    </ul>

    <h2>Maliyet vs bulut, dürüstçe hesaplayın</h2>
    <p>
      Gerçek sayıları <a href="/tools/ai-cost-estimator">AI maliyet hesaplayıcıya</a> girin.
      API fiyatlandırmasına karşı bireysel bir yoğun kullanıcı için başabaş noktası kabaca:
    </p>
    <ul>
      <li>Aylık 60$ API harcaması &approx; 1.800$&rsquo;lık kullanılmış bir Mac Studio&rsquo;nun
        2,5 yılda geri ödenmesi.</li>
      <li>Aylık 200$ ekip API harcaması &approx; 3.500$&rsquo;lık bir Mac Studio Ultra&rsquo;nun
        18 ayda geri ödenmesi.</li>
      <li>Aylık 500$ ekip API harcaması &approx; donanım satın alımı olmadan 6 ay içinde
        çok makineli bir pod&rsquo;un geri ödenmesi.</li>
    </ul>
    <p>
      Finansal olmayan kazanımlar genellikle dolar hesabından daha büyüktür: hassas kod veya
      belgelerde gizlilik, hız sınırı yok, kota kaygısı yok ve dolapta çalışmaya devam eden
      sessiz bir uğultu.
    </p>
  </>
);