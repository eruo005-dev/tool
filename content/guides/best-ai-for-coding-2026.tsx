import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026 itibarıyla, dürüst cevap şu: her görev için en iyi kodu yazan tek bir AI modeli yok &mdash;
    ancak belirli çalışma türleri için açıkça öne çıkan birkaç model var. İşte hangi AI'nın hangi alanda gerçekten kazandığının ve önemli olan maliyet-kalite dengesinin dökümü.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Göreve göre mevcut liderler</h2>
    <ul>
      <li><strong>Çok dosyalı yeniden düzenleme + ajan çalışması:</strong> Claude Opus 4.7 / Sonnet 4.6,{" "}
        <a href="/guides/how-to-set-up-a-hyperspace-pod">Claude Code</a> üzerinden. En yüksek SWE-bench puanları; uzun vadede en güvenilir.</li>
      <li><strong>Satır içi otomatik tamamlama:</strong> GitHub Copilot veya Cursor (Tab). Gecikme odaklı optimize edilmiş, "bu satırı tamamla" için yenilmesi zor.</li>
      <li><strong>Ucuz yüksek hacimli kodlama:</strong> DeepSeek V3.2 ($0.27/$1.10) veya Qwen 3.5 72B (açık ağırlıklar). Claude fiyatlandırmasının ~%90'ı, kalitenin ~%95'i.</li>
      <li><strong>Mantık ağırlıklı hata ayıklama:</strong> Claude Opus 4.7 veya DeepSeek R1. İkisi de zorlu akıl yürütme ve matematikte mükemmel.</li>
      <li><strong>Çok dilli / İngilizce olmayan kod:</strong> Qwen 3.5 (Çince için en iyi açık ağırlık), GPT-5 (en geniş kapsam).</li>
      <li><strong>Vibe-kodlama / GUI uygulama prototipleme:</strong> Cursor + Claude Sonnet veya Bolt.new tek seferde full-stack için.</li>
    </ul>

    <h2>Sadece modeller değil, araçlar</h2>
    <p>
      Model cevabın yarısı. Modelin etrafındaki araçlar diğer yarısı. 2026'da,
      önemli olan yığın:
    </p>
    <ul>
      <li><strong><a href="/compare/claude-code-vs-cursor">Claude Code</a></strong> &mdash; terminal ajanı, yeniden düzenleme için en iyisi. Claude Pro ile birlikte gelir.</li>
      <li><strong><a href="/compare/cursor-vs-github-copilot">Cursor</a></strong> &mdash; AI IDE, en iyi otomatik tamamlama + ajan. $20-200/ay.</li>
      <li><strong>GitHub Copilot</strong> &mdash; en ucuz premium ($10/ay), her IDE'de çalışır.</li>
      <li><strong>Windsurf</strong> &mdash; Cascades ajan akışları, $15/ay. Sessizce mükemmel.</li>
      <li><strong>Continue.dev</strong> &mdash; açık kaynak eklenti, kendi API anahtarını getir. Maliyet bilincine sahip ekipler için iyi.</li>
    </ul>

    <h2>Kesin rakamlarla fiyatlandırma</h2>
    <ul>
      <li>İyi otomatik tamamlama isteyen solo geliştirici: <strong>Copilot Pro $10/ay</strong>.</li>
      <li>En iyi ajan + en iyi otomatik tamamlama isteyen solo geliştirici: <strong>Cursor Pro $20/ay + Claude Pro $20/ay = $40/ay</strong>.</li>
      <li>5+ kişilik ekipler: <strong>Cursor Business veya Copilot Business $19-25/koltuk</strong>.</li>
      <li>Yoğun ajan kullanıcıları: <strong>Claude Max $100/ay</strong> veya <strong>Cursor Ultra $200/ay</strong>.</li>
    </ul>
    <p>
      <a href="/tools/ai-coding-tool-cost-comparison">AI kodlama aracı maliyet karşılaştırması</a>nı kullanarak ekip büyüklüğünüzü 9 plana karşı çalıştırın.
    </p>

    <h2>Dile göre</h2>
    <ul>
      <li><strong>Python:</strong> Claude Sonnet lider, Qwen 3.5 ucuzda güçlü.</li>
      <li><strong>JavaScript / TypeScript:</strong> Tüm sınır modeller mükemmel. Claude framework bilgisinde lider (Next.js vb.).</li>
      <li><strong>Rust:</strong> Claude Sonnet + GPT-5 en iyisi; küçük açık ağırlıklar hala geride.</li>
      <li><strong>Go:</strong> Claude deyimsel kodda tutarlı bir şekilde kazanır.</li>
      <li><strong>SQL / veritabanı:</strong> Gemini 2.5 Pro ve GPT-5 şema akıl yürütmede lider.</li>
      <li><strong>Gömülü / C++:</strong> Claude Opus en güvenli seçim; çıktı daha muhafazakar.</li>
    </ul>

    <h2>2026 varsayılan yığını</h2>
    <p>
      2026'da çoğu profesyonel geliştirici için: IDE'nizde satır içi düzenlemeler için Cursor Pro veya Copilot,
      artı yeniden düzenleme ve çok dosyalı çalışma için Claude Code, artı amiral gemisi kalitesi gerektirmeyen
      yüksek hacimli otomasyon için DeepSeek V3.2. Bu ~$40/ay ve kodlama iş akışlarının %95'ini kapsar.
    </p>
    <p>
      Belirli çiftleri birebir karşılaştırın:{" "}
      <a href="/compare/claude-code-vs-cursor">Claude Code vs Cursor</a>,{" "}
      <a href="/compare/cursor-vs-github-copilot">Cursor vs Copilot</a>,{" "}
      <a href="/compare/claude-vs-deepseek">Claude vs DeepSeek</a>.
    </p>
  </>
);