import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    DeepSeek'in 2026 fiyatlandırması, piyasadaki en uygun fiyatlı öncü sınıf API'dir. V3.2, 1 milyon token başına
    $0.27/$1.10 seviyesinde; yoğun olmayan saatlerde $0.135/$0.55'e düşer. R1 muhakeme fiyatı
    $0.55/$2.19'dur. Ayrıca tüketici sohbeti ücretsizdir. İşte tam döküm.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Tüketici sohbeti</h2>
    <ul>
      <li><strong>chat.deepseek.com</strong> &mdash; ücretsiz. V3.2 + R1 erişimi. Hafif kullanım için
        hesap gerekmez.</li>
    </ul>

    <h2>API fiyatlandırması (1 milyon token başına, USD)</h2>
    <ul>
      <li><strong>DeepSeek V3.2 (sohbet):</strong> $0.27 giriş / $1.10 çıkış. Önbellek isabetsizliği; önbellek isabeti
        $0.027 (önbellekte %90 indirim).</li>
      <li><strong>DeepSeek V3.2 yoğun olmayan saatler (UTC 16:30-00:30):</strong> $0.135 / $0.55. Yarı fiyat.</li>
      <li><strong>DeepSeek R1 (muhakeme):</strong> $0.55 / $2.19. Yoğun olmayan saatler: $0.275 / $1.10.</li>
      <li><strong>R1 muhakeme çıktısı:</strong> çıktı ücreti üzerinden düşünce tokenlerini içerir &mdash;
        görünen yanıt uzunluğunun ~5 katı kadar bütçe ayırın.</li>
    </ul>

    <h2>Ne alıyorsunuz</h2>
    <ul>
      <li>OpenAI uyumlu SDK &mdash; doğrudan değiştirme (<code>base_url=&quot;https://api.deepseek.com&quot;</code>).</li>
      <li>Araç kullanımı, <a href="/learn/json-mode">JSON modu</a>, yapılandırılmış çıktılar.</li>
      <li>128k <a href="/learn/context-window">bağlam penceresi</a>.</li>
      <li>Kendi barındırma için <a href="/learn/open-weights">açık ağırlıklar</a>.</li>
    </ul>

    <h2>Rakiplere karşı maliyet karşılaştırması</h2>
    <ul>
      <li>Claude Sonnet 4.6'ya karşı ($3 / $15): <strong>~10 kat daha ucuz</strong>.</li>
      <li>GPT-5'e karşı ($2.50 / $10): <strong>~9 kat daha ucuz</strong>.</li>
      <li>Gemini 2.5 Pro'ya karşı ($1.25 / $5): <strong>~5 kat daha ucuz</strong>.</li>
      <li>R1, o-pro muhakemeye karşı: <strong>~30 kat daha ucuz</strong>.</li>
    </ul>

    <h2>Gizlilik gerçekçiliği</h2>
    <p>
      DeepSeek bulut API'si, Çin altyapısı üzerinden yönlendirilir. Çoğu hassas olmayan iş yükü
      için bu sorun değildir; düzenlenmiş veriler (HIPAA, SOC 2 müşterileri) için çoğu ekip bunun yerine açık ağırlıkları
      kendi barındırır. V3.2 büyüktür (671B <a href="/learn/moe">MoE</a>) bu nedenle bir Hyperspace pod'u veya kiralık bulut GPU'su gerekir; daha küçük
      damıtılmış sürümler standart donanımda çalışır.
    </p>

    <h2>DeepSeek'in kazandığı durumlar</h2>
    <ul>
      <li>Toplam maliyetin önemli olduğu yüksek hacimli API iş yükleri.</li>
      <li>Ölçekte ajan döngüleri.</li>
      <li>Gömme ön işleme boru hatları.</li>
      <li>R1'in düşünce-token ekonomisinin aşırı düşünmeyi ucuz hale getirdiği muhakeme zincirleri.</li>
      <li>Gizlilik için açık ağırlıkları kendi barındırmaya istekli herkes.</li>
    </ul>

    <h2>DeepSeek'in doğru seçim olmadığı durumlar</h2>
    <ul>
      <li>SWE-bench görevlerinin en zor %5'i &mdash; Claude Opus gerçek bir fark yaratır.</li>
      <li>Güvenilirliğin baskın olduğu 30+ adımlı ajanlar &mdash; Claude / GPT-5 hala anlamlı
        şekilde önde.</li>
      <li>Marjinal kalite ve ton ayarının önemli olduğu müşteriye yönelik İngilizce çalışmalar.</li>
    </ul>
    <p>
      Karşılaştırma: <a href="/compare/claude-vs-deepseek">Claude vs DeepSeek</a>,{" "}
      <a href="/compare/deepseek-r1-vs-claude">DeepSeek R1 vs Claude</a>. Maliyet hesabı:{" "}
      <a href="/tools/claude-vs-deepseek-cost-calculator">maliyet hesaplayıcı</a>.
    </p>
  </>
);