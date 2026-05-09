import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026 yılında hukuk araştırması yapay zekası üç kademeye ayrılıyor: dikey hukuk yapay zekaları (Harvey, Spellbook, Co-Counsel),
    belge inceleme uzmanları (Hebbia, Kira) ve hukuk işleri için kullanılan genel amaçlı modeller (Claude, GPT-5, Gemini).
    Seçiminizi, davanın önemine, yargı yetkisine ve iş akışınızın ne kadar <a href="/learn/hallucination">halüsinasyon</a> riskini
    kaldırabileceğine göre yapın.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Dikey çözümler (üretim kalitesinde hukuk)</h2>
    <ul>
      <li><strong>Harvey</strong> &mdash; büyük hukuk bürolarının dava + işlem işlerinde lider. İçtihat hukuku
        üzerinde RAG, sözleşme analizi, taslak hazırlama. Kurumsal fiyatlandırma.</li>
      <li><strong>Co-Counsel (Thomson Reuters)</strong> &mdash; sıkı Westlaw entegrasyonu, ölçekte
        hukuk sekreteri görevleri.</li>
      <li><strong>Spellbook</strong> &mdash; Word'de sözleşme taslağı + kırmızı çizgi. Daha düşük riskli,
        daha geniş kullanıcı tabanı.</li>
      <li><strong>Hebbia</strong> &mdash; özel hukuk külliyatı üzerinde belge inceleme kalitesinde RAG.</li>
    </ul>

    <h2>Hukuk işleri için genel amaçlı modeller</h2>
    <ul>
      <li><strong>Claude Sonnet/Opus</strong> &mdash; uzun belge analizi için en iyisi (1M bağlam
        600 sayfalık bir sözleşmeyi kapsar). En temiz çıktı, ihtiyatlı ifadelerde dikkatli.</li>
      <li><strong>Gemini 2.5/3 Pro</strong> &mdash; en uzun belgeler için 2M bağlam. Büyük veri odalarında
        durum tespiti için kullanışlı.</li>
      <li><strong>Perplexity Pro</strong> &mdash; atıflarla birlikte içtihat ve mevzuat güncellemelerini
        bulmak için. Her atfı bağımsız olarak doğrulayın &mdash; LLM'ler hala davaları uyduruyor.</li>
    </ul>

    <h2>Pratikte işe yarayanlar</h2>
    <ul>
      <li><strong>Sözleşme taslağı (şablon tarzı):</strong> Word'de Spellbook. Standart sözleşmelerde
        taslak hazırlama süresini %40-60 oranında azaltır.</li>
      <li><strong>Sözleşme incelemesi / kırmızı çizgiler:</strong> Düşük riskli işler için Spellbook; yüksek riskli işler için Harvey veya
        insan avukat.</li>
      <li><strong>Uzun belge özetleme (ifade tutanakları, düzenleyici dosyalar):</strong>{" "}
        Claude veya Gemini. Her şeyi kaynağa karşı teyit edin.</li>
      <li><strong>Kanun / içtihat araştırması:</strong> Üzerine Co-Counsel eklenmiş Westlaw / Lexis.
        Genel LLM'ler atıflar için güvenilmezdir.</li>
    </ul>

    <h2>Halüsinasyon uyarısı</h2>
    <p>
      Her genel amaçlı <a href="/learn/llm">LLM</a>, hukuki bağlamlarda uydurma dava atıfları yaparken yakalanmıştır.
      Kural: <strong>Dosyalamadan veya müvekkil işinde alıntı yapmadan önce her dava atfını yetkili bir veritabanına karşı doğrulayın</strong>. Dikey hukuk yapay zekaları (Harvey, Co-Counsel) bunu azaltmak için
      Westlaw/Lexis'e dayanır; genel modeller dayanmaz.
    </p>

    <h2>Fiyatlandırma</h2>
    <ul>
      <li><strong>$20/ay:</strong> Claude Pro veya ChatGPT Plus + Westlaw aboneliği &mdash;
        bireysel / küçük ofis temel seviyesi.</li>
      <li><strong>$50-150/koltuk:</strong> Spellbook, ContractPodAi.</li>
      <li><strong>Kurumsal:</strong> Harvey, Co-Counsel &mdash; altı haneli yıllık sözleşmeler.</li>
    </ul>
    <p>
      <em>Hukuki tavsiye değildir; eğitim amaçlıdır.</em> Karşılaştır:{" "}
      <a href="/compare/claude-vs-gemini">Claude vs Gemini</a>.
    </p>
  </>
);