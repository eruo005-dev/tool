import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da Çin'den en çok konuşulan iki açık ağırlıklı model: Kimi K2 (Moonshot, 1M bağlam, ~1T <a href="/learn/moe">MoE</a>) ve
    DeepSeek V3.2 (671B MoE, üst düzey akıl yürütme + kodlama). Farklı güçlü yönler, farklı uyumlar.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Başlıca farklar</h2>
    <ul>
      <li><strong>Bağlam:</strong> Kimi K2 = 1M token. DeepSeek V3.2 = 128k.</li>
      <li><strong>En iyi olduğu alan:</strong> Kimi = uzun belge çalışması. DeepSeek = kodlama + akıl yürütme.</li>
      <li><strong>Fiyatlandırma:</strong> Kimi $0.60/$2.50. DeepSeek V3.2 $0.27/$1.10. R1 $0.55/$2.19.</li>
      <li><strong><a href="/learn/open-weights">Açık ağırlıklar</a>:</strong> her ikisi de, özel lisanslarla (ticari kullanımdan önce okuyun).</li>
    </ul>
    <h2>Kimi K2'yi tercih edin</h2>
    <ul>
      <li>Uzun belge akıl yürütme (1M bağlam).</li>
      <li>Parçalamadan tüm kod tabanı analizi.</li>
      <li>Bağlam biriktiren uzun süreli ajanlar.</li>
      <li>Açık ağırlıklı uzun bağlam kullanım durumları.</li>
    </ul>
    <h2>DeepSeek V3.2 / R1'i tercih edin</h2>
    <ul>
      <li>Kod üretimi + ajan tabanlı SWE.</li>
      <li>Yüksek hacimli API döngüleri (en ucuz sınır seviyesi).</li>
      <li>R1'in düşünce token ekonomisinin aşırı düşünmeyi ucuz hale getirdiği akıl yürütme zincirleri.</li>
      <li>OpenAI SDK birebir değiştirme.</li>
    </ul>
    <h2>Kendi sunucunuzda barındırma</h2>
    <p>
      Her ikisi de ciddi GPU'lar gerektirir. K2, V3.2'den (~1T vs 671B) bile daha büyüktür. Standart donanım için,
      DeepSeek-Distill-Qwen-32B veya Qwen 3.5 32B'yi tercih edin &mdash; daha küçük bütçelerde rekabetçi.
    </p>
    <p>
      Tüm açık ağırlıklı seçenekleri <a href="/tools/open-source-llm-tracker">açık kaynak LLM izleyicisi</a> üzerinden takip edin.
    </p>
  </>
);