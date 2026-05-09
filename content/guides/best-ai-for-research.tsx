import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da araştırma için en iyi yapay zeka tek bir araç değil &mdash; üçlü bir yığındır:
    temellendirilmiş web yanıtları için Perplexity, yüklenen kaynaklar arasında sentez için NotebookLM
    ve uzun belgeler üzerinde analiz için Claude veya Gemini. Birlikte kullanıldıklarında,
    akademisyenlerin ve analistlerin saatlerce yaptığı işlerin çoğunun yerini alırlar.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>2026 araştırma yığını</h2>
    <ul>
      <li><strong>Perplexity Pro</strong> &mdash; yapay zeka öncelikli arama. Atıflı yanıtlar, gerçek zamanlı web,
        Pro Search daha derin çok adımlı sorgular çalıştırır. $20/ay. Güncel bilgi gerektiren herhangi bir
        soru için varsayılan başlangıç noktası.</li>
      <li><strong>NotebookLM (Google, ücretsiz)</strong> &mdash; 50 PDF'e / Dokümana / siteye kadar yükleyin
        ve tamamen bu kaynaklara dayalı atıflı yanıtlar alın. Sesli genel bakışlar, zihin haritaları,
        zaman çizelgeleri. Makale yığını sentezi için 2026'nın en iyi ücretsiz aracı.</li>
      <li><strong>Claude Projects (Anthropic)</strong> &mdash; devam eden araştırma için kalıcı
        bağlam. 1M token penceresi çoğu kitap boyutundaki külliyatı sığdırır. Analiz için güçlü.</li>
      <li><strong>Gemini 2.5/3 Pro</strong> &mdash; 2M <a href="/learn/context-window">bağlam penceresi</a>, yerel çok modlu (ses,
        video). Kaynaklar sesli röportajlar veya video dersleri içerdiğinde en iyisi.</li>
    </ul>

    <h2>Araştırma türüne göre</h2>
    <ul>
      <li><strong>Literatür taraması:</strong> NotebookLM + Perplexity Pro Search. Kanonik makaleleri yükleyin,
        güncel literatürü taramak için Perplexity'yi kullanın.</li>
      <li><strong>Gazetecilik / doğrulama:</strong> Perplexity Pro. Atıf yoğunluğu kazandırır.</li>
      <li><strong>Pazar araştırması / rekabet istihbaratı:</strong> Perplexity Pro Search +{" "}
        <a href="/compare/perplexity-vs-google-search">Google</a> işlemsel sorgular için.</li>
      <li><strong>Hukuk araştırması:</strong> Claude (uzun belge muhakemesinde en iyisi) + Perplexity
        güncel içtihat için. Bkz. <a href="/guides/best-ai-for-legal-research">hukuk araştırması için en iyi yapay zeka</a>.</li>
      <li><strong>Akademik derin çalışma:</strong> Claude Projects + NotebookLM. Külliyatı yükleyin,
        farklı açılar için her ikisiyle de sohbet edin.</li>
      <li><strong>Patent araması:</strong> Perplexity Pro + analiz için Claude.</li>
    </ul>

    <h2>Peki ya ChatGPT ve Grok?</h2>
    <p>
      ChatGPT (Plus) yetkin ancak araştırma için ikincildir. Web araması gelişiyor, ancak
      Perplexity atıf yoğunluğunda kazanıyor ve Claude uzun belge analizinde kazanıyor. Grok'un
      avantajı gerçek zamanlı X verileridir &mdash; son dakika haberleri + sosyal duygu durumu için kullanışlı.
    </p>

    <h2>İki sekmeli iş akışı</h2>
    <p>
      Çoğu araştırmacının üzerinde anlaştığı desen: &ldquo;cevabı bul&rdquo; için Perplexity, Claude
      Project / NotebookLM &ldquo;bulduklarımızı analiz et&rdquo; için. Kaynakları keşfetmek ve
      atıf yapmak için Perplexity'yi kullanın; bunlar arasında sentez yapmak için Claude/NotebookLM'yi kullanın. Kombinasyon, her iki
      aracın tek başına olduğundan çok daha güçlüdür.
    </p>

    <h2>Araştırma yoğun kullanıcılar için fiyatlandırma</h2>
    <ul>
      <li><strong>$0:</strong> NotebookLM (ücretsiz) + Perplexity (hızlı arama ile ücretsiz katman). Hafif
        kullanım için iyi.</li>
      <li><strong>$20/ay:</strong> Sadece Perplexity Pro. Herhangi bir araştırmacı için sağlam temel.</li>
      <li><strong>$40/ay:</strong> Perplexity Pro + Claude Pro. Standart ciddi yığın.</li>
      <li><strong>$60/ay:</strong> Perplexity Pro + Claude Pro + Gemini Advanced. 2M bağlam +
        çok modlu özellik ekler.</li>
    </ul>
    <p>
      Araştırma odaklı araçları karşı karşıya karşılaştırın:{" "}
      <a href="/compare/claude-vs-perplexity">Claude vs Perplexity</a>,{" "}
      <a href="/compare/chatgpt-vs-perplexity">ChatGPT vs Perplexity</a>,{" "}
      <a href="/compare/perplexity-vs-google-search">Perplexity vs Google</a>.
    </p>
  </>
);