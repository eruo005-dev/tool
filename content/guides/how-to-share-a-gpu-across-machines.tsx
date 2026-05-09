import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Bir masaüstü bilgisayarda boşta duran 24 GB'lık bir RTX 4090, LAN'ınızdaki diğer üç makine <a href="/learn/inference">çıkarım</a> beklerken boşa harcanmış potansiyeldir. GPU'ları makineler arasında paylaşmak eskiden pahalı InfiniBand ağları ve DGX sınıfı donanım anlamına geliyordu. 2026'da aynı sonuç &mdash; birden çok istemci, tek bir paylaşımlı hızlandırıcı, 100 ms'nin altında ilk token gecikmesi &mdash; standart donanımla bir hafta sonu projesidir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Paylaşmanın üç yolu, ne yapmaya çalıştığınıza göre sıralanmıştır</h2>

    <h3>1. Bir GPU birçok istemciye hizmet eder (%90'lık durum)</h3>
    <p>
      GPU'ları birleştirmek istemezsiniz &mdash; tüm bir ev veya ekibe hizmet edecek hızlı bir GPU istersiniz. Doğru desen, GPU ana bilgisayarında, herkesin araçlarını yönlendirdiği bir HTTP uç noktası açığa çıkaran bir model sunma arka plan programıdır. Bunlardan birini seçin:
    </p>
    <ul>
      <li><strong>Ollama (en kolayı):</strong> tek bir ikili dosya, OpenAI uyumlu uç nokta, tek satırda model çekme. <code>OLLAMA_HOST=0.0.0.0:11434 ollama serve</code> onu LAN'da kullanıma sunar. Kurulum için <a href="/guides/how-to-use-ollama">Ollama nasıl kullanılır</a> bölümüne bakın.</li>
      <li><strong>vLLM (en yüksek verim):</strong> 5 veya daha fazla eşzamanlı kullanıcı için doğru seçim. Sürekli toplu işleme artı PagedAttention, aynı donanımda saf tek akışlı bir sunucuya göre saniyede 5&ndash;20&times; daha fazla token sunabilir.</li>
      <li><strong>LM Studio sunucu modu:</strong> GPU ana bilgisayarı için bir GUI ve istemciler için bir API istiyorsanız. Ollama ile aynı OpenAI yüzeyi.</li>
    </ul>
    <p>
      Her üçü de OpenAI HTTP tel biçimini konuşur, bu nedenle istemcilerin (Cursor, Continue.dev, özel komut dosyaları, aracılar) paylaşılan GPU'yu kullanmaya başlamak için yalnızca bir temel URL değişikliği yapması gerekir.
    </p>

    <h3>2. Aynı makinede birden çok GPU'ya bölünmüş bir model</h3>
    <p>
      Bir kutuda iki adet 24 GB'lık kartınız varsa ve FP8'de (~70 GB) 70B'lik bir model çalıştırmak istiyorsanız, bu tensör paralelliğidir. Hem vLLM hem de TGI bunu yerel olarak halleder:
    </p>
    <pre className="overflow-x-auto rounded bg-slate-900 p-3 text-xs text-slate-100"><code>{`# vLLM: modeli bu ana bilgisayardaki her iki karta böl
vllm serve meta-llama/Llama-3.3-70B-Instruct \\
    --tensor-parallel-size 2 \\
    --gpu-memory-utilization 0.92 \\
    --max-model-len 32768`}</code></pre>
    <p>
      İki GPU'nun NVLink veya en azından her biri PCIe 4.0 x16 ile aynı kasada olması gerekir. Bir modeli makineler arasında PCIe üzerinden bölmek teknik olarak mümkündür ancak gecikme açısından engelleyicidir &mdash; bunun için tensör paralelliği yerine boru hattı paralelliğini (sonraki bölüm) kullanın.
    </p>

    <h3>3. Birden çok makineye bölünmüş bir model (boru hattı paralelliği)</h3>
    <p>
      Aynı LAN üzerindeki farklı makinelerin her biri bir modelin bir dilimini tutabilir ve token'ları ortaya çıkan halka üzerinden aktarabilir. Hyperspace, exo, llama.cpp RPC ve Petals'in farklı marka adları altında yaptığı şey tam olarak budur. Derinlemesine inceleme{" "}
      <a href="/guides/how-to-combine-laptops-to-run-large-llms">büyük LLM'leri çalıştırmak için dizüstü bilgisayarlar nasıl birleştirilir</a> bölümünde yer almaktadır &mdash; buradaki GPU'ya özgü endişe, hiçbir düğümün darboğaz haline gelmemesi için her bir parça üzerinde <em>hesaplamayı</em> <em>bellekle</em> eşleştirmektir.
    </p>

    <h2>Bir şey satın almadan önce yapmanız gereken verim matematiği</h2>
    <p>
      Bir sunma yığınının çıktısı, kullanıcı başına saniyedeki token sayısı ile eşzamanlı kullanıcı sayısının çarpımıdır. Her iki sayı da model boyutuna ve istek karışımına göre değişir. vLLM ile ölçülen, bir RTX 4090 (24 GB) üzerinde tek GPU için yaklaşık değer:
    </p>
    <table className="my-3 w-full text-left text-sm">
      <thead className="text-xs uppercase tracking-wide text-slate-500">
        <tr>
          <th className="py-1">Model</th>
          <th className="py-1">1 kullanıcı (tok/s)</th>
          <th className="py-1">4 kullanıcı (tok/s her biri)</th>
          <th className="py-1">16 kullanıcı (tok/s her biri)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-slate-100"><td className="py-1">Qwen 2.5 7B Q5</td><td className="py-1">120</td><td className="py-1">~95</td><td className="py-1">~55</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">Llama 3.1 8B FP16</td><td className="py-1">90</td><td className="py-1">~70</td><td className="py-1">~30</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">Mixtral 8x7B Q4</td><td className="py-1">55</td><td className="py-1">~45</td><td className="py-1">~25</td></tr>
        <tr className="border-t border-slate-100"><td className="py-1">Llama 3.3 70B Q4 (boşaltılmış)</td><td className="py-1">12</td><td className="py-1">~9</td><td className="py-1">durur</td></tr>
      </tbody>
    </table>
    <p>
      Desen: sürekli toplu işlemeli küçük modeller, 4&ndash;8 eşzamanlı kullanıcıya kadar doğrusala yakın ölçekleme sağlar. Bunun ötesinde matematik, önbellek basıncına ve istem uzunluğuna bağlıdır.
    </p>

    <h2>Ağ gereksinimleri (durum 1 için düşündüğünüzden daha az)</h2>
    <p>
      &ldquo;Tek GPU, çok sayıda istemci&rdquo; deseni için ağ, kompakt istek / yanıt token'ları görür &mdash; genellikle her gidiş dönüşte 1&ndash;10 KB. Standart bir 1 GbE LAN, 50'den fazla eşzamanlı kullanıcıyı zorlanmadan halleder. Hassas olan sayı bant genişliği değil, gecikmedir: her istemciden GPU ana bilgisayarına ping atın; 5 ms'nin altındaysa sorun yok. Wi-Fi kullanılabilir ancak kabloluya kıyasla gözle görülür bir ilk token gecikmesi ekler.
    </p>
    <p>
      Makineler arası tensör-paralel bölme (nadir, zor ve PCIe sınıfı donanım üzerinde yavaş) için 25 GbE+ bölgesindesiniz. Ev laboratuvarları için bunu atlayın.
    </p>

    <h2>Peki ya Apple Silicon, ROCm ve yalnızca CPU'lu ana bilgisayarlar?</h2>
    <ul>
      <li><strong>Apple Silicon (M1&ndash;M4, M-Ultra):</strong> birleşik bellek, 192 GB ile bir Mac Studio'yu piyasadaki en ucuz 70B ana bilgisayarı yapar. Ollama, LM Studio ve exo'nun tümü Metal'i yerel olarak kullanır &mdash; CUDA yok, ROCm yok, sadece çalışır.</li>
      <li><strong>AMD ROCm (RX 7900 XTX, MI300X):</strong> 2026'da vLLM ve llama.cpp'de ROCm desteği sağlamdır. Performans, çoğu iş yükü için eşdeğer silikonda CUDA'nın %10&ndash;25'i içindedir.</li>
      <li><strong>Intel Arc + iGPU:</strong> llama.cpp'de SYCL arka uçları aracılığıyla kullanılabilir; performans, GPU'nun kendisinden çok bellek bant genişliğine bağlıdır.</li>
      <li><strong>Yalnızca CPU:</strong> Q4&ndash;Q5'te 8B sınıfı modeller için gerçekçidir. AVX-512 ve Apple AMX hızlandırır; AVX-512 olmayan standart x86, 8B için saniyede ~5 token'da sınırlanır.</li>
    </ul>

    <h2>Kimlik doğrulama ve erişim kontrolü</h2>
    <p>
      Bir GPU LAN'da kullanıma sunulduğunda, açık bir AI uç noktası oluşturmuş olursunuz. <code>192.168.1.10:11434</code> adresine ulaşabilen herkes modellerinizi sorgulayabilir. Bunu, en azından aşağıdakileri yapan bir ters proxy olmadan genel internete açmayın:
    </p>
    <ul>
      <li>API anahtarı başlık kontrolü (<code>Authorization: Bearer ...</code>).</li>
      <li>Anahtar başına hız sınırlaması (Caddy, Traefik veya nginx'in tümü bunu tek bir yapılandırma bloğuyla halleder).</li>
      <li>HTTPS &mdash; modern OpenAI istemcileri, yerel olmayan ana bilgisayar uç noktaları için düz HTTP'yi reddeder.</li>
    </ul>
    <p>
      Ekip kurulumları için bir Hyperspace pod'u, kimlik doğrulama ve hazine katmanlarını yerel olarak halleder &mdash; <a href="/guides/how-to-set-up-a-hyperspace-pod">pod kılavuzuna</a> bakın.
    </p>

    <h2>30 dakikalık başlangıç</h2>
    <ol>
      <li>GPU ana bilgisayarını seçin. Kablolu ethernet'e takın.</li>
      <li>Ollama'yı kurun. İki model çekin: hız için bir 7B (<code>qwen2.5:7b</code>) ve kalite için bir 70B Q4 (<code>llama3.3:70b-q4_K_M</code>).</li>
      <li><code>OLLAMA_HOST=0.0.0.0:11434 ollama serve</code></li>
      <li>Her istemci makinede, OpenAI temel URL'sini{" "}
        <code>http://&lt;gpu-host-ip&gt;:11434/v1</code> adresine yönlendirin. Cursor, Continue.dev, özel komut dosyalarınız &mdash; aynı kod, farklı temel URL.</li>
      <li>Kullanım seviyenizde ücretli API'lere kıyasla ne kadar tasarruf edeceğinizi karşılaştırmak için <a href="/tools/ai-cost-estimator">AI maliyet tahmin aracını</a> kullanın.</li>
    </ol>
    <p>
      Bu temeldir. Ollama'nın verimini aşarsanız daha sonra vLLM ekleyin, tek bir GPU'nun bellek bütçesini aştığınızda bir pod (Hyperspace / exo) ekleyin.
    </p>
  </>
);