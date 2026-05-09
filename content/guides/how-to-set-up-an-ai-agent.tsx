export const intro = (
  <>
    <p>
      &ldquo;<a href="/learn/agent">AI ajanı</a>&rdquo; her şeyi kapsayan bir terim haline geldi ve kurulum adımları tamamen hangi türe ihtiyacınız olduğuna bağlı. Gelen kutunuzu özetleyen bir Zapier iş akışı bir ajandır. Kod tabanınızı yeniden düzenleyen Claude Code bir ajandır. Beş araç çağrısını düzenleyen bir LangGraph durum makinesi bir ajandır. Bunları ayağa kaldırmak için yaptığınız iş aynı değildir.
    </p>
    <p>
      Bu rehber bir karar ağacıdır. On dakika içinde, sorununuza hangi dört yoldan birinin uyduğunu, kabaca ne kadara mal olacağını ve sırada ne okumanız gerektiğini bileceksiniz. Nisan 2026'da, mevcut araç nesline (Claude Opus 4.7, GPT-5 sınıfı modeller, OpenAI AgentKit, Claude Agent SDK 0.1.48) göre yazılmıştır.
    </p>
  </>
);

export const body = (
  <>
    <h2>Adım 1 — Aracı adlandırmadan önce işi adlandırın</h2>
    <p>
      Bir cümle yazın: <em>&ldquo;Beni izlemeden X'i alıp Y'yi üreten bir ajan istiyorum.&rdquo;</em> Bu cümleyi tamamlayamıyorsanız, henüz bir ajana ihtiyacınız yok — bir isteme ihtiyacınız var. Önce{" "}
      <a href="/tools/prompt-improver">istem geliştiricimizi</a> ve{" "}
      <a href="/tools/ai-prompt-generator">istem oluşturucumuzu</a> deneyin. Ajanlar, tek cevaplar için değil, <strong>araç kullanımı olan çok adımlı görevler</strong> içindir.
    </p>

    <h2>Adım 2 — Doğru şeridi seçin</h2>
    <p>
      2026'da dört gerçek seçenek var. İşi yapabilecek en üst düzey olanı seçin. Daha aşağı inmek esneklik kazandırır ancak haftalarınıza mal olur.
    </p>

    <h3>Şerit A — Barındırılan bir ajan ürünü kullanın (1 saat)</h3>
    <p>
      Çoğu bilgi işi görevi için cevap <strong>ChatGPT ajan modu</strong>,{" "}
      <strong>Claude'un bilgisayar kullanımı</strong> veya Sierra, Intercom Fin ya da Zapier Agents gibi dikey bir üründür. Sıfır kod, bir yapılandırma ekranı, bir saatten kısa sürede canlı.{" "}
      <a href="/guides/how-to-use-chatgpt-agent-mode">ChatGPT ajan modu rehberimize</a> bakın — &ldquo;bunu benim için yap&rdquo; kullanım durumlarının %70'ini kapsar.
    </p>

    <h3>Şerit B — Kodsuz bir platform kullanın (1 gün)</h3>
    <p>
      Görev, uygulamaları birbirine bağlamayı içeriyorsa — Slack'ten Gmail'e, bir tabloya — <strong>Zapier Agents</strong>, <strong>n8n</strong> veya{" "}
      <strong>OpenAI'ın Agent Builder'ını</strong> kullanın. Akışı çizersiniz, bir menüden araçlar seçersiniz ve ajan onların altyapısında çalışır. Yinelenen maliyet, ancak operasyon yükü size ait değildir.
    </p>

    <h3>Şerit C — Bir ajan SDK'sı kullanın (1 hafta)</h3>
    <p>
      Bir geliştiriciyseniz ve ajantı <em>kendi</em> kodunuzun yönetmesini istiyorsanız, <strong>OpenAI Agents SDK</strong>'yı (<code>pip install openai-agents</code>) veya <strong>Claude Agent SDK</strong>'yı (<code>pip install claude-agent-sdk</code>, Mart 2026 itibarıyla sürüm 0.1.48) kullanın. Her ikisi de size Ajanlar, araçlar, devir teslimler, korkuluklar verir — ve onları kendiniz barındırırsınız.{" "}
      <a href="/guides/how-to-build-an-agent-with-the-openai-agents-sdk">OpenAI SDK rehberimize</a>{" "}
      ve <a href="/guides/how-to-build-an-agent-with-the-claude-agent-sdk">Claude SDK rehberimize</a> bakın.
    </p>

    <h3>Şerit D — Bir çerçeve kullanın (2+ hafta)</h3>
    <p>
      Çok ajanlı, uzun süreli veya durum bilgisi olan iş akışları için <strong>LangGraph</strong> (durum bilgisi olan grafikler), <strong>CrewAI</strong> (role dayalı ekipler), <strong>AutoGen</strong> (çok ajanlı konuşmalar) veya <strong>MetaGPT</strong> (yazılım ekipleri) kullanın. Bunlar en fazla kontrolü ve kendinizi asmanız için en fazla ipi verir. Bu şeridi yalnızca Şerit C'yi aştıysanız seçin.
    </p>

    <h2>Adım 3 — Nerede çalışacağına karar verin</h2>
    <p>
      Üç seçenek. <strong>Barındırılan</strong>: satıcı çalıştırır (ChatGPT, Claude, Zapier). En kolayı, en az esnek, koltuk başına veya görev başına fiyatlandırma.{" "}
      <strong>Dizüstü bilgisayarınız</strong>: SDK'yı bir API anahtarıyla yerel olarak çalıştırın. Yineleme yapmak en hızlısı, üretim için berbat. <strong>Sunucunuz</strong>: Fly, Render veya bir VPS üzerinde küçük bir Python hizmeti — ajan gerçekten yararlı işler yapmaya başladığında pratik seçim.
    </p>

    <h2>Adım 4 — İhtiyaç duyduğu araçlara bağlayın</h2>
    <p>
      Neredeyse her kullanışlı ajanın dışarıya ulaşması gerekir: bir dosya okumak, bir API çağırmak, bir veritabanını sorgulamak, bir mesaj göndermek. 2026'da bunun standardı <strong><a href="/learn/mcp">MCP</a></strong>'dir (Model Bağlam Protokolü).{" "}
      <a href="/guides/how-to-connect-an-agent-to-mcp-tools">MCP kurulum rehberimize</a> bakın — bir sunucu kurun, araçları beyaz listeye ekleyin ve ajan bunları Claude, OpenAI ve çoğu çerçeve arasında aynı şekilde kullanabilsin. MCP, bu yıl ajan mühendisliğindeki en büyük yaşam kalitesi iyileştirmesidir.
    </p>

    <h2>Adım 5 — Salt okunur ile başlayın, yazma işlemlerini yavaşça ekleyin</h2>
    <p>
      En yaygın üretim hatası, bir ajana çok erken yazma erişimi vermektir. <em>Salt okunur araçlarla</em> başlayın: sorgulamasına, özetlemesine ve önermesine izin verin. On veya yirmi çalıştırmada yargısına güvendikten sonra, her seferinde bir yazma aracı ekleyin (mesaj gönder → taslak oluştur → taslağı gönder). Her Claude ve OpenAI SDK'sı açık beyaz listeyi destekler; kullanın.
    </p>

    <h2>Adım 6 — Tokenlar için bütçe ayırın ve sınırlayın</h2>
    <p>
      Döngüye giren bir ajan bir öğleden sonra 50 dolar yakabilir. Göndermeden önce, sağlayıcı düzeyinde çalıştırma başına bir token tavanı ve günlük bir harcama sınırı belirleyin. İstemlerinizi{" "}
      <a href="/tools/ai-token-counter">AI token sayacımızda</a> çalıştırın, böylece 100 kez döngüye sokmadan önce taban maliyeti bilirsiniz.
    </p>

    <h2>Adım 7 — Ölçün ve yineleyin</h2>
    <p>
      Her çalıştırmayı günlüğe kaydedin: girdiler, araç çağrıları, çıktılar, token harcaması, kullanıcı geri bildirimi. Üretimdeki en iyi ajanlar sıkıcı görünür — dar bir görev, sıkı bir araç seti, %95+ başarı, %5'i inceleyen bir insan. En kötüleri demolarda etkileyici görünür ve ilk kez gerçek bir kullanıcıyla karşılaştıklarında patlarlar.
    </p>

    <h2>Dürüst kısa liste</h2>
    <p>
      Bugün başlamak için yalnızca üç yer seçmem istenseydi: kişisel araştırma ve gezinme görevleri için <strong>ChatGPT ajan modu</strong>, kod tabanınızı içeren her şey için <strong>Claude Code</strong> ve uygulamalar arası otomasyon için <strong>Zapier Agents</strong>. Diğer her şey, bu üçü yeterli olmadığında içindir.
    </p>
  </>
);