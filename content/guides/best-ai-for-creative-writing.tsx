import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    AI ile yaratıcı yazarlık 2026'da artık tek bir araç kararı değil. Kurgu taslağı için Sudowrite, edebi düzyazı için Claude, üslup çeşitliliği için ChatGPT, roman yapısı için NovelCrafter. İşte her birinin yerini bulduğu anlar.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Yaratıcı forma göre</h2>
    <ul>
      <li><strong>Edebi kurgu:</strong> Claude Sonnet 4.6. Ölçülü, karakter odaklı düzyazıda en iyisi. Bakış açısı ve zaman üzerinde belirli talimat takibi.</li>
      <li><strong>Tür kurgusu (gerilim, romantik, bilimkurgu):</strong> Sudowrite. Hikaye İncili, Vuruş Tablosu, Beyin Fırtınası araçlarıyla romancıya uygun kullanıcı deneyimi.</li>
      <li><strong>Senaryo yazımı:</strong> ChatGPT Plus veya Claude. İkisi de sektör formatı kısıtlamalarını güvenilir şekilde takip eder; bir <a href="/learn/system-prompt">sistem yönergesi</a> örneğiyle.</li>
      <li><strong>Şiir:</strong> Claude. Tebrik kartı ritimlerine daha az eğilimli; biçimsel kısıtlamaları takip etmede daha iyi.</li>
      <li><strong>Dünya inşası / D&D senaryoları:</strong> Claude (1M bağlam tüm bir ortam incilini sığdırır) + karakter içi etkileşim için özel GPT.</li>
      <li><strong>Oyun yazımı / etkileşimli kurgu:</strong> Inkle araçları veya durum takip sistem yönergesi ile Claude.</li>
      <li><strong>Çocuk kitapları / resimli kitaplar:</strong> ChatGPT (metin) + DALL-E veya Midjourney (illüstrasyonlar).</li>
    </ul>

    <h2>Kurguya özel araçlar</h2>
    <ul>
      <li><strong>Sudowrite</strong> ($10-29/ay) &mdash; kurguya özel, hikaye incili, tuval ve vuruş tablosu iş akışlarını içerir. 2026'da en çok kullanılan romancı aracı.</li>
      <li><strong>NovelCrafter</strong> ($14/ay) &mdash; kod + bölüm görünümü + AI yardımı. Planlamacılar için güçlü.</li>
      <li><strong>Plottr</strong> &mdash; AI destekli sahne kartlarıyla taslak ve yapı.</li>
      <li><strong>Lex</strong> &mdash; kenar boşluğunda AI ile dikkat dağıtmayan yazım.</li>
    </ul>

    <h2>Kaçınılması gerekenler</h2>
    <ul>
      <li>AI'nın tek satırlık bir yönlendirmeden tüm sahneleri yazmasına izin vermek. Çıktılar yetkin ama sıradan.</li>
      <li>İnsan sesi geçişini atlamak. AI düzyazısı akıcı ama ritmik olarak tahmin edilebilir.</li>
      <li>AI'yı doruk noktası için kullanmak. En duygusal sahneleri kendi kaleminize saklayın.</li>
    </ul>

    <h2>İki fiyatlandırma yolu</h2>
    <ul>
      <li><strong>$20/ay:</strong> Sadece Claude Pro. Çoğu edebi yazı için yeterli.</li>
      <li><strong>$30-50/ay:</strong> Claude Pro + Sudowrite. Sudowrite'ın kullanıcı deneyimi, her ikisini de haklı çıkaracak kadar romancıya özgü değer katar.</li>
    </ul>
    <p>
      Karşılaştır: <a href="/compare/claude-vs-chatgpt">Claude vs ChatGPT</a>.
    </p>
  </>
);