import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2023-2025 dönemindeki ofise dönüş (RTO) baskısı, 2026'da çoğu bilgi işi için hibrit 3-2 (üç gün ofis, iki gün ev) modelinde dengelendi. İşte mevcut durum ve pazarlık yapıyorsanız bunun anlamı.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Her şirketin vardığı nokta</h2>
    <ul>
      <li><strong>Tamamen uzaktan:</strong> Büyük şirketlerin ~%15-20'si bunu korudu (GitLab, Automattic, bazı startup'lar).</li>
      <li><strong>Hibrit 3-2:</strong> 2026'nın baskın modeli (~%50).</li>
      <li><strong>Hibrit 4-1:</strong> ~%20.</li>
      <li><strong>Tamamen ofiste:</strong> ~%10-15, ağırlıklı olarak finansal hizmetler + genç startup'lar.</li>
    </ul>
    <h2>Verilerin gerçekte gösterdiği</h2>
    <ul>
      <li>Tamamen uzaktan + hibrit + ofis arasındaki verimlilik farkları çoğu bilgi rolü için KÜÇÜKTÜR.</li>
      <li>Genç çalışanlar yüz yüze zamandan daha fazla fayda sağlar (mentorluk, gözlem).</li>
      <li>Kıdemli çalışanlar uzaktan/hibrit çalışmada verimlilik artışı gösterir (odaklanma süresi işbirliğinden daha önemlidir).</li>
      <li>Esneklik sunan şirketlerde çalışan tutma oranı sürekli olarak daha iyidir.</li>
    </ul>
    <h2>2026'da pazarlık gücü</h2>
    <ul>
      <li>Rolünüz doldurulması zorsa: tamamen uzaktan çalışma hâlâ gerçekçi bir taleptir.</li>
      <li>Hibrit 2-3 (daha fazla uzaktan) genellikle ilan edilmese bile mevcuttur.</li>
      <li>Sıkıştırılmış programlar (10 saatlik günler, 4 günlük çalışma haftası) giderek normalleşiyor.</li>
      <li>5 gün dayatırlarsa, seyahat ödeneği / işe gidiş tazminatı isteyin.</li>
    </ul>
    <h2>Geri dönüyorsanız</h2>
    <ul>
      <li>Ofis günlerini farklı iş olarak ele alın: senkron + toplantılar + ilişkiler.</li>
      <li>Evdeki derin çalışma günlerini bloklayın; uzaktan günlerde varsayılan olarak toplantı yapmayın.</li>
      <li>Hangi günler gideceğinizi pazarlık edin &mdash; Salı/Çarşamba/Perşembe en verimli olanıdır.</li>
    </ul>
    <p>
      İlgili: <a href="/guides/four-day-work-week-evidence">4 günlük çalışma haftası kanıtı</a>,{" "}
      <a href="/guides/how-to-work-from-home-productively">evden verimli çalışma rehberi</a>.
    </p>
  </>
);