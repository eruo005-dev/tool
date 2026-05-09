import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da bir yapay zeka kodlama asistanı seçmek gerçek bir karar &mdash; Cursor,
    Copilot, Claude Code ve Windsurf arasındaki farklar, pazarlama sayfalarında göründüğünden
    çok daha büyük. İşte ilk seferde doğru seçimi yapmanın yolu, gerçekten önemli olan sorularla.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Cevabı belirleyen üç soru</h2>
    <ol>
      <li><strong>Tek bir IDE'ye bağlı mısınız?</strong> Evet ise &rarr; Cursor veya Windsurf iş görür. Hayır
        (VS Code ile JetBrains arasında geçiş yapıyorsanız veya Vim kullanıyorsanız) &rarr; Copilot.</li>
      <li><strong>İşiniz çoğunlukla satır içi düzenlemeler mi yoksa çoğunlukla çok dosyalı yeniden düzenlemeler mi?</strong> Satır içi
        &rarr; Copilot veya Cursor Tab. Çok dosyalı &rarr; Claude Code.</li>
      <li><strong>Aylık bütçeniz ne kadar?</strong> 10$ &rarr; Copilot. 20$ &rarr; Cursor / Claude Pro'dan biri.
        40$+ &rarr; ikisi de.</li>
    </ol>

    <h2>Dürüst 2026 sıralaması</h2>
    <ul>
      <li><strong>En iyi otomatik tamamlama:</strong> Cursor Tab (2026'da Copilot'un biraz önünde).</li>
      <li><strong>En iyi ajan / çok dosyalı:</strong> Claude Code.</li>
      <li><strong>En iyi çoklu IDE:</strong> Copilot.</li>
      <li><strong>IDE'de en iyi ajan kullanıcı deneyimi:</strong> Windsurf Cascades.</li>
      <li><strong>Tek kurucu ortaklar ve bağımsız geliştiriciler için en iyisi:</strong> Sadece Cursor Pro.</li>
      <li><strong>En ucuz:</strong> Aylık 10$'a Copilot Pro veya Continue.dev (ücretsiz, kendi API anahtarınızla).</li>
    </ul>

    <h2>Bilmeye değer ücretsiz katmanlar</h2>
    <ul>
      <li><strong>GitHub Copilot Free</strong> &mdash; Ayda 50 sohbet mesajı, 2.000 tamamlama. Ara sıra kullananlar için
        gerçek bir üretkenlik.</li>
      <li><strong>Cursor ücretsiz</strong> &mdash; 2 haftalık Pro denemesi, ardından yavaş isteklerle düşürülmüş ancak
        kullanılabilir ücretsiz katman.</li>
      <li><strong>Continue.dev</strong> &mdash; ücretsiz açık kaynak eklentisi, kendi API anahtarlarınızı ekleyin.</li>
      <li><strong>Claude.ai web</strong> &mdash; IDE'nizde değil, ancak sohbet odaklı kodlama için ücretsiz.</li>
    </ul>

    <h2>5 dakikalık karar ağacı</h2>
    <ul>
      <li>Bütün gün Python yazıyorum &rarr; <strong>Cursor Pro + Claude Code</strong>.</li>
      <li>Büyük bir monorepoda JS/TS yazıyorum &rarr; <strong>Sadece Cursor Pro</strong>.</li>
      <li>JetBrains'te çalışıyorum &rarr; <strong>Copilot</strong> (Cursor mevcut değil).</li>
      <li>Kendi kod tabanımı yeniden düzenleyen bağımsız / solo bir geliştiriciyim &rarr; <strong>Claude Code</strong>
        (Claude Pro'ya dahil).</li>
      <li>Bir ekipteyim ve BT tek birini seçiyor &rarr; <strong>Copilot Business</strong> veya{" "}
        <strong>Cursor Business</strong>.</li>
      <li>0$ harcamak istiyorum &rarr; <strong>Continue.dev</strong> + sohbet için ücretsiz Claude.ai.</li>
    </ul>

    <h2>Yanlış seçmeyin</h2>
    <p>
      En büyük hata: "en iyi modele" göre seçim yapmak. Modeller her çeyrekte değişiyor
      ve tüm amiral gemisi araçlar zaten aynı Claude Sonnet 4.6 / GPT-5'e yönlendiriyor.
      Kullanıcı deneyimine, IDE kapsamına ve fiyat noktasına göre seçim yapın. Perde arkasındaki model
      çoğunlukla birbirinin yerine geçebilir.
    </p>
    <p>
      Tam $/koltuk hesabı için <a href="/tools/ai-coding-tool-cost-comparison">AI kodlama aracı maliyet karşılaştırması</a>nı
      kullanın. Karşılaştırın:{" "}
      <a href="/compare/claude-code-vs-cursor">Claude Code vs Cursor</a>,{" "}
      <a href="/compare/cursor-vs-github-copilot">Cursor vs Copilot</a>.
    </p>
  </>
);