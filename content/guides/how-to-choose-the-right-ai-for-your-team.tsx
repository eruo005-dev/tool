import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026 yılında bir ekip için yapay zeka seçmek, kendiniz için yapay zeka seçmekten daha büyük bir olaydır. Yanlış bir seçim, en az bir yıl boyunca koltuk maliyetleri, eğitim giderleri ve entegrasyon borcu anlamına gelir. İşte ilk seferde doğru yapmak için oyun planı.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>4 haftalık seçim süreci</h2>

    <h3>1. Hafta: Kullanım alanlarını tanımlayın</h3>
    <p>
      Ekibi anket yapın. Yapay zekanın yapmasını istedikleri en iyi 5-10 görevi listeleyin (taslak yazma, kodlama, araştırma, toplantılar, müşteri desteği vb.). Sıklık ve etkiye göre sıralayın. Çoğu ekip, kullanımın %80'ini kapsayan 2-3 görev bulur.
    </p>

    <h3>2. Hafta: 3 adayı kısa listeye alın</h3>
    <p>
      2026'da çoğu ekip için kısa liste şunların bir alt kümesidir: ChatGPT Team, Claude Team, Gemini in Workspace (zaten Google kullanıyorsanız), Microsoft 365 Copilot (zaten Microsoft kullanıyorsanız). İşi karmaşıklaştırmayın &mdash; en fazla 3 tane seçin.
    </p>

    <h3>3. Hafta: 5 kişiyle pilot uygulama yapın</h3>
    <p>
      3 planın her birinde bir hafta boyunca 5 gerçek kullanıcı edinin. Anketten en iyi 3 görevlerini gerçekten yapmalarını sağlayın. Kazanılan zamanı, çıktı kalitesini (öznel) ve hayal kırıklığı anlarını takip edin.
    </p>

    <h3>4. Hafta: Karar verin ve kullanıma sunun</h3>
    <p>
      Duygulara değil, gerçek verilere dayanarak kazananı seçin. 30 dakikalık bir başlangıç oturumu, paylaşılan bir komut kütüphanesi ve her departman için bir şampiyon ile ekibe sunun.
    </p>

    <h2>Büyük resim varsayılanları</h2>
    <ul>
      <li><strong>Workspace (Google) kullanıyorsanız:</strong> Gemini Advanced (paketli veya $20/koltuk). En az dirençli yol.</li>
      <li><strong>Microsoft 365 kullanıyorsanız:</strong> Copilot for M365 ($30/koltuk). Excel Copilot tek başına genellikle bunu haklı çıkarır.</li>
      <li><strong>Mühendislik ağırlıklı ekip:</strong> Herkes için Claude Team ($25-30/koltuk) + Geliştiriciler için Cursor veya Copilot.</li>
      <li><strong>Karma bilgi işi:</strong> ChatGPT Team ($25-30/koltuk). En geniş özellik seti; en düşük eğitim maliyeti.</li>
      <li><strong>Gizliliğe duyarlı (düzenlemeye tabi sektörler):</strong> Veri saklamanın önemli olduğu analizler için Mistral / kendi barındırma + Anthropic.</li>
    </ul>

    <h2>Ekip maliyeti hesaplaması</h2>
    <ul>
      <li>10 koltuk &times; $25/ay = $250/ay, $3000/yıl.</li>
      <li>50 koltuk &times; $25/ay = $1250/ay, $15k/yıl.</li>
      <li>200 koltuk &times; $30/ay = $6000/ay, $72k/yıl &mdash; kurumsal sözleşme için bütçe ayırın.</li>
    </ul>
    <p>
      Çoğu ekip benimsemeyi hafife alır: İlk 90 günde koltukların yalnızca %30-50'si yapay zekayı haftalık olarak kullanacaktır. Eğitim planlayın. Her ekip için bir şampiyon seçin.
    </p>

    <h2>Ölçekte pazarlık edilecekler</h2>
    <ul>
      <li>Minimum koltuk taahhüdü (kamu minimumundan daha düşük).</li>
      <li>SOC 2 / gizlilik incelemeleri deneme sırasında değil, önceden teslim edilir.</li>
      <li>Özel saklama süreleri (bazı sektörler 0 gün gerektirir).</li>
      <li>Yıllık peşin ödeme indirimleri (genellikle %10-20).</li>
      <li>100+ koltuk anlaşmaları için özel müşteri temsilcisi.</li>
    </ul>

    <h2>Atlanacaklar</h2>
    <ul>
      <li>4 "Team" planının tamamını satın almayın &mdash; standart olarak birini seçin, güç kullanıcılarının kişisel olarak ikinci bir plan için ödeme yapmasına izin verin.</li>
      <li>Yapay zeka kullanımını zorunlu kılmayın. Zorunluluklar benimseme değil, kötü niyetli uyum üretir.</li>
      <li>Zaten bir yaşında olan tek bir modelde standartlaşmayın. Yıllık olarak yenileyin.</li>
    </ul>
    <p>
      Bireysel planları karşılaştırın:{" "}
      <a href="/compare/chatgpt-plus-vs-claude-pro">ChatGPT Plus vs Claude Pro</a>,{" "}
      <a href="/compare/anthropic-api-vs-openai-api">Anthropic API vs OpenAI API</a>. Ekip maliyetini hesaplayın: <a href="/tools/ai-coding-tool-cost-comparison">kodlama aracı karşılaştırması</a>,{" "}
      <a href="/tools/ai-monthly-cost-budgeter">aylık bütçe hesaplayıcısı</a>.
    </p>
  </>
);