import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da toplantı yapay zekası net liderlere oturdu: not alanlar için Granola, ölçekte
    transkriptler için Otter, Workspace ekipleri için Fellow + Gemini ve platformlar arası için Fireflies.
    Doğru seçim, canlı kayıt yapıp yapmadığınıza, bir not defteri arkadaşı isteyip istemediğinize veya
    kurumsal entegrasyona ihtiyacınız olup olmadığına bağlıdır.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>2026 liderleri</h2>
    <ul>
      <li><strong>Granola</strong> &mdash; toplantı içi not alma için yapay zeka not defteri. Siz
        madde işaretlerini yazarsınız, yapay zeka geri kalanını sesten doldurur. Bireysel odak.</li>
      <li><strong>Otter.ai</strong> &mdash; ölçekte transkriptler + özetler, Zoom,
        Teams, Meet ile entegre olur. Güçlü ücretsiz katman.</li>
      <li><strong>Fireflies.ai</strong> &mdash; platformlar arası kaydedici, büyük kurumsal CRM
        senkronizasyonu (Salesforce, HubSpot).</li>
      <li><strong>Fellow</strong> &mdash; toplantı gündemleri + yapay zeka notları. Tekrarlayan
        bire bir görüşmeler yapan yöneticiler için güçlü.</li>
      <li><strong>Meet'te Gemini / Teams'te Microsoft Copilot</strong> &mdash; yerel, paketle birlikte
        ücretsiz, temel ancak gelişiyor.</li>
      <li><strong>Read.ai</strong> &mdash; toplantı analitiği + duygu durumu.</li>
    </ul>

    <h2>Senaryoya göre</h2>
    <ul>
      <li><strong>Bireysel kurucu / danışman:</strong> Granola ($14/ay). Görüşme sırasında kendi
        notlarınızı almak için en iyisi.</li>
      <li><strong>Satış ekibi:</strong> Fireflies veya Gong ($60-100/koltuk). CRM senkronizasyonu, anlaşma
        zekası.</li>
      <li><strong>Bire bir görüşmeler + ekip toplantıları yapan yöneticiler:</strong> Fellow ($7-15/koltuk). Gündem +
        eylem maddeleri.</li>
      <li><strong>Workspace ekibi:</strong> Meet'te Gemini (Workspace ile birlikte verilir). Ücretsiz, yeterince
        iyi.</li>
      <li><strong>Kendi kendine koçluk için her şeyi kaydetme:</strong> Otter Pro ($17/ay).</li>
    </ul>

    <h2>Gizlilik gerçeği</h2>
    <p>
      Çoğu toplantı yapay zeka aracı katılımcıları kaydeder. İki taraflı rıza gerektiren yargı bölgelerinde (CA, FL, IL,
      WA, MA, MD, MT, NV, NH, PA), kaydı açıkça duyurmalı ve sözlü
      onay almalısınız. Kibar versiyonu: Görüşmenin başında &ldquo;Yapay zeka not alacak &mdash; sizin için sorun yok mu?&rdquo;
      demek.
    </p>

    <h2>Gizlilik odaklı seçenekler</h2>
    <ul>
      <li><strong>Sadece yerel:</strong> Granola (transkriptler Plus'ta yalnızca yerel olabilir).</li>
      <li><strong>Kendi barındırma:</strong> Yerel olarak çalışan Whisper (OpenAI) + herhangi bir yerel <a href="/learn/llm">LLM</a>'ye karşı
        kendi özetleme isteminiz <a href="/guides/how-to-use-ollama">Ollama</a> aracılığıyla.</li>
    </ul>

    <h2>Fiyatlandırma</h2>
    <ul>
      <li>$0: Meet'te Gemini, Teams'te Microsoft Copilot (Workspace / 365 lisansı ile).</li>
      <li>$10-20: Otter Pro, Granola Pro.</li>
      <li>$15-25/koltuk: Fellow, ekipler için Fireflies.</li>
      <li>$60-100/koltuk: Satış kalitesi için Gong, Chorus.</li>
    </ul>
  </>
);