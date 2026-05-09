import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Maraton katılımı, koşu kulübü patlamasıyla 2025-2026'da rekor seviyelere ulaştı. Daha önce hiç maraton koşmadıysanız, işte sizi sakatlamayacak gerçekçi bir 16-20 haftalık ilk maraton planı.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Ön Koşullar</h2>
    <ul>
      <li>Haftada 15+ mil rahatça koşabiliyor olmak.</li>
      <li>Yürümeden 6 mil boyunca durmadan koşabiliyor olmak.</li>
      <li>3-6 aylık düzenli koşu temeli.</li>
      <li>Değilse, önce 10K koşun; maraton bloğundan önce bu temeli oluşturun.</li>
    </ul>
    <h2>18 haftalık yapı</h2>
    <ul>
      <li><strong>1-4. Haftalar:</strong> temel oluşturma. Haftada 20-25 mil. Uzun koşu 8 milden 12 mile çıkar.</li>
      <li><strong>5-8. Haftalar:</strong> haftada 25-30 mil. Uzun koşu 13-16 mil. Haftada bir antrenman (tempo veya interval).</li>
      <li><strong>9-12. Haftalar:</strong> haftada 30-40 mil. Uzun koşu 16-18 mil. Haftada iki antrenman.</li>
      <li><strong>13-15. Haftalar:</strong> zirve. Haftada 40-50 mil. Uzun koşu 18-22 mil (en az bir 20+).</li>
      <li><strong>16-18. Haftalar:</strong> daralma. Haftada 30 / 20 / 12 mil. Yarış haftası hafiftir.</li>
    </ul>
    <h2>80/20 kuralı</h2>
    <p>
      Koşularınızın %80'i kolay olmalı (bölge 2). %20'si daha zor olabilir (tempo, interval, adım atma). Çoğu başlangıç seviyesindeki koşucu ortayı çok fazla koşar &mdash; kolay günlerde yeterince kolay, zor günlerde yeterince zor değil.
    </p>
    <h2>Yarış haftası tavizsiz kurallar</h2>
    <ul>
      <li>Yeni bir şey denemeyin (yiyecek, ayakkabı, ekipman).</li>
      <li>48 saat önceden agresif şekilde su için, yarış sabahı su alımını azaltın.</li>
      <li>3 gün önceden karbonhidrat yükleyin (sadece yarıştan önceki gece makarna değil).</li>
      <li>Yarış sırasında ne zaman besleneceğinizi tam olarak planlayın &mdash; her 30-45 dakikada bir jel.</li>
    </ul>
    <p>
      <a href="/tools/running-pace-calculator">Koşu hızı hesaplayıcısında</a> hız hedefleri oluşturun. Bölge 2'de uzun koşular: <a href="/tools/zone-2-heart-rate-calculator">bölge 2 kalp atış hızı hesaplayıcısı</a>.
    </p>
  </>
);