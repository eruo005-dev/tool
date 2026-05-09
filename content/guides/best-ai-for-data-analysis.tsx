import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da veri analizi için yapay zeka üç kategoriye ayrılıyor: elektronik tablo ile sohbet (ChatGPT
    Code Interpreter, Gemini in Sheets), IDE içi not defterleri (Cursor + Claude on Jupyter) ve
    otonom ajanlar (DataChef, Julius AI). Doğru seçim, veri seti boyutuna ve ne kadar
    kontrol sahibi olmanız gerektiğine bağlı.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Göreve göre</h2>
    <ul>
      <li><strong>Elektronik tablo keşfi:</strong> ChatGPT Plus + Code Interpreter. Bir CSV dosyası bırakın,
        düz İngilizce sorular sorun, grafikler alın. Anlık analiz için en iyisi.</li>
      <li><strong>Sheets yerel:</strong> Gemini in Workspace. Sıkı entegrasyon, hücre içinde
        önerilen formüller.</li>
      <li><strong>Pandas / Jupyter / profesyonel analiz:</strong> Claude Code veya Cursor + Claude. İkisi de
        hızlıca doğal pandas + matplotlib yazar.</li>
      <li><strong>SQL sorguları:</strong> Şema muhakemesi için GPT-5 veya Gemini. DBT + Cursor güçlü bir
        kombinasyon.</li>
      <li><strong>Uzun tablo çok dosyalı analiz:</strong> Claude Sonnet 4.6 (1M bağlam) tek bir istemde
        tüm bir CSV dizinini işler.</li>
      <li><strong>Raporlama / panolar:</strong> Tek seferlik raporlar için ChatGPT Pro + Code Interpreter.
        Üretimleştirilmiş panolar için Hex / Mode.</li>
    </ul>

    <h2>Uzmanlık araçları</h2>
    <ul>
      <li><strong>Julius AI</strong> &mdash; CSV öncelikli sohbet. Teknik olmayan
        analistler için cilalı kullanıcı deneyimi.</li>
      <li><strong>DataChef</strong> &mdash; ajan tabanlı veri hazırlığı. Dağınık CSV'leri otonom olarak temizler.</li>
      <li><strong>Hex</strong> &mdash; yerleşik yapay zeka asistanına sahip not defteri. Ekipler için güçlü.</li>
      <li><strong>Tableau Pulse / Power BI Copilot</strong> &mdash; BI iş akışları için.</li>
    </ul>

    <h2>Fiyatlandırma</h2>
    <ul>
      <li>$20: ChatGPT Plus (Code Interpreter dahil). Çoğu kullanıcı için analizlerin %90'ı.</li>
      <li>$20-$40: Uzun bağlam kazanımları için Claude Pro ekleyin.</li>
      <li>$50-$100/ay: Ciddi ekip düzeyinde analiz için Hex / Mode.</li>
    </ul>
    <p>
      Karşılaştır: <a href="/compare/claude-vs-gemini">Claude vs Gemini</a>,{" "}
      <a href="/compare/chatgpt-vs-gemini">ChatGPT vs Gemini</a>.
    </p>
  </>
);