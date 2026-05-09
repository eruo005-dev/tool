import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    GPT-5 (Ağustos 2025'te yayınlandı) GPT-4o'dan en büyük pratik sıçramadır. Öne çıkan kıyaslamaların ötesinde,
    günlük kullanımı etkileyen gerçek değişiklikler akıl yürütme yönlendiricisi, ses + çoklu ortam ve API yeniden yapılanmasıdır.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Öne çıkan değişiklikler</h2>
    <ul>
      <li><strong>Akıl yürütme yönlendiricisi:</strong> GPT-5 hızlı ve yavaş düşünme arasında otomatik olarak seçim yapar. Model değiştirmeniz gerekmez.</li>
      <li><strong>400k bağlam:</strong> GPT-4o'nun 4 katı, Claude (1M) ve Gemini'den (2M) daha küçük, ancak çoğu için yeterli.</li>
      <li><strong>Fiyat düşüşü:</strong> 1M token başına $2.50/$10, GPT-4o'nun aynı fiyatına karşı &mdash; ancak akıl yürütme otomatik olarak yönlendirilir.</li>
      <li><strong>Mini + nano katmanları:</strong> $0.25/$2 ve $0.05/$0.40, ucuz katman kullanımını önemli ölçüde genişletir.</li>
      <li><strong>Atlas + Operator:</strong> yerleşik aracı tarama.</li>
      <li><strong>Sora 2:</strong> Plus / Pro için ChatGPT'ye entegre video oluşturma.</li>
    </ul>

    <h2>Pratikte ne iyileşti</h2>
    <ul>
      <li>Gerçek sorgularda daha az belirgin halüsinasyon.</li>
      <li>Uzun istemlerde daha tutarlı talimat takibi.</li>
      <li>Ses modu (Gelişmiş Ses) artık sıra tabanlı değil, sohbet gibi hissettiriyor.</li>
      <li>Görüş: yoğun metinleri (PDF'ler, ekran görüntüleri) okumada daha iyi.</li>
    </ul>

    <h2>Pazarlamanın ima ettiği kadar değişmeyenler</h2>
    <ul>
      <li>Kodlama: SWE-bench'te hâlâ Claude Sonnet/Opus'un gerisinde. Otomatik tamamlama için sağlam, ajanlarda Claude'dan sonra ikinci.</li>
      <li>Bellek: budanmazsa hâlâ oturumlar arası sızıntı var.</li>
      <li>Uzun bağlam: 400k cömert ancak ~200k'dan sonra her zaman güvenilir değil.</li>
    </ul>

    <p>
      Maliyet hesaplamasını <a href="/tools/gemini-vs-chatgpt-cost-calculator">Gemini vs ChatGPT maliyet
      hesaplayıcısında</a> yapın. Claude ile karşılaştırma için <a href="/compare/claude-vs-chatgpt">Claude vs ChatGPT</a> sayfasına bakın.
    </p>
  </>
);