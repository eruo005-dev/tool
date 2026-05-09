import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da PDF'leri işleyen üç yapay zeka kategorisi var: bir PDF ile sohbet (ChatGPT, Claude, Gemini),
    birçoğuyla sohbet (NotebookLM, Claude Projects) ve yapılandırılmış çıkarım (DocuPanda,
    LlamaParse). Kaç PDF olduğuna ve çıktının ne kadar yapılandırılmış olması gerektiğine göre seçim yapın.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Göreve göre</h2>
    <ul>
      <li><strong>1 PDF ile sohbet:</strong> Claude (1M bağlam tüm kitapları sığdırır). 600 sayfalık bir
        PDF'yi claude.ai'ye bırakın, her şeyi sorun.</li>
      <li><strong>50 PDF'e kadar sohbet:</strong> NotebookLM (ücretsiz). Atıflarla çapraz kaynak
        sentezi için en iyi ücretsiz araç.</li>
      <li><strong>Uzun süreli PDF araştırma projesi:</strong> Claude Projects ($20/ay). Tüm oturumlar arasında
        kalıcı bağlam.</li>
      <li><strong>Tabloları / yapılandırılmış verileri çıkarma:</strong> DocuPanda, LlamaParse veya Reducto AI.
        Uzmanlaşmış; karmaşık tablolar için sade Claude'dan daha iyi.</li>
      <li><strong>Taranmış PDF'ler için OCR:</strong> Gemini 2.5 Pro (2026'da LLM'ler arasında en iyi OCR) veya
        Mistral OCR gibi özel araçlar.</li>
      <li><strong>PDF'leri karşılaştırma:</strong> Her iki dosyayı tek bir istemde Claude ile. Kolay.</li>
      <li><strong>PDF'leri imzalama / doldurma:</strong> Yapay zeka değer katmaz &mdash; bir PDF düzenleyici kullanın.
        <a href="/tools/pdf-editor">PDF düzenleyicimizi</a> veya ilgili araçları deneyin.</li>
    </ul>

    <h2>Fiyatlandırma</h2>
    <ul>
      <li>$0: NotebookLM (ücretsiz, 50 kaynağa kadar, atıflar).</li>
      <li>$20: Claude Pro &mdash; en büyük tek PDF <a href="/learn/context-window">bağlam penceresi</a>.</li>
      <li>$0.10-0.50/sayfa: DocuPanda, LlamaParse, Reducto yapılandırılmış çıkarım için.</li>
    </ul>

    <h2>PDF araştırması için 2026'nın dürüst iş akışı</h2>
    <p>
      PDF'lerinizi NotebookLM'ye bırakın. Orada geniş sentez soruları sorun. Belirli bir makale üzerinde derinlemesine analiz
      için, o PDF'nin yüklendiği Claude Projects'e geçin. İşe gidip gelirken bir özeti dinlemek için NotebookLM'deki sesli
      genel bakış özelliğini kullanın. Bu, çoğu ücretli PDF aracını yenen
      $20/ay'lık iş akışıdır.
    </p>

    <h2>Bu sitedeki diğer kullanışlı PDF araçları</h2>
    <ul>
      <li><a href="/tools/merge-pdf">PDF birleştirici</a> &mdash; tarayıcınızda PDF'leri birleştirin.</li>
      <li><a href="/tools/pdf-split">PDF bölücü</a> &mdash; sayfaları çekin.</li>
      <li><a href="/tools/pdf-compress">PDF sıkıştırıcı</a> &mdash; paylaşmadan önce küçültün.</li>
      <li><a href="/tools/pdf-to-text">PDF'den metne</a> &mdash; yapay zeka işleme için çıkarın.</li>
    </ul>
  </>
);