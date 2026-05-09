import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026 yılında, müşteri destek yapay zekası üç anlama geliyor: ajan yardımcı pilotları (Intercom Fin, Zendesk AI),
    bilgi tabanı botları (Kapa.ai, Inkeep) ve tamamen otonom çözümler (Decagon, Sierra).
    Doğru seçim; hacme, kanala ve yapay zekanın ne kadar harekete geçmesini vs. yardımcı olmasını istediğinize bağlıdır.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>2026 müşteri destek yığını</h2>
    <ul>
      <li><strong>Intercom Fin</strong> &mdash; ajan yardımcı pilotu + otonom çözüm. B2B SaaS desteğinde mevcut lider.</li>
      <li><strong>Zendesk AI Agent</strong> &mdash; Zendesk biletleme sistemiyle sıkı entegrasyon. Yerleşik destek ekipleri için güçlü.</li>
      <li><strong>Decagon</strong> &mdash; 1. seviye biletler için otonom-ilk ajan.</li>
      <li><strong>Sierra</strong> &mdash; eski Salesforce yöneticilerinden ses-ilk yapay zeka ajanları.</li>
      <li><strong>Kapa.ai / Inkeep</strong> &mdash; ürününüze gömülü dokümantasyon tabanlı sohbet botları.</li>
    </ul>

    <h2>İnşa et vs. satın al</h2>
    <p>
      Çoğu destek ekibi için <strong>satın alın</strong>. Intercom Fin veya Zendesk AI günler içinde devreye alınır; özel bir Claude/GPT-5 RAG botu haftalar artı sürekli bakım gerektirir. Yalnızca olağandışı gizlilik gereksinimleriniz varsa, çok özel araç ihtiyaçlarınız varsa veya destek akışının sizin fikri mülkiyetiniz olduğu bir geliştirici araçları şirketiyseniz inşa edin.
    </p>

    <h2>Temel modeller</h2>
    <p>
      Çoğu CS AI aracı, perde arkasında Claude Sonnet, GPT-5 veya Gemini'ye yönlendirir. Aralarındaki kalite farklılıkları, üzerine inşa edilen ürünler arasındaki farklılıklardan daha küçüktür &mdash; modele göre değil, entegrasyon/kullanıcı deneyimine göre seçim yapın.
    </p>

    <h2>Gerçekçi beklentiler</h2>
    <ul>
      <li><strong>1. seviye biletler:</strong> Yapay zeka, bilgi tabanı RAG ile yaygın soruların %30-60'ını otonom olarak çözebilir.</li>
      <li><strong>2. seviye:</strong> En iyisi ajan yardımı olarak (yanıt taslakları oluşturur, sonraki adımları önerir).</li>
      <li><strong>Uç durumlar / kayıp riski:</strong> Her zaman insan. Yapay zeka, insan ajan için bağlamı özetleyebilir.</li>
    </ul>

    <h2>Fiyatlandırma</h2>
    <ul>
      <li>Intercom Fin / Zendesk AI: Çözüm başına $0.25-1.</li>
      <li>Decagon / Sierra: Kurumsal fiyatlandırma, yıllık $50k+.</li>
      <li>Kendin Yap (Claude API + RAG): Hacme bağlı olarak aylık $50-500.</li>
    </ul>
    <p>
      Kendin yap kurulumu için bütçe yapmak üzere <a href="/tools/ai-cost-estimator">AI maliyet hesaplayıcıyı</a> kullanın.
    </p>
  </>
);