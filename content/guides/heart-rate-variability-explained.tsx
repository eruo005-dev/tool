import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    <a href="/learn/hrv">HRV</a> (kalp atış hızı değişkenliği) 2010'ların sonlarının sağlıklı yaşam metriği haline geldi ve 2026'ya kadar ana akım olarak kaldı.
    Whoop, Oura ve Apple Watch bunu gösteriyor. İşte gerçekte neyi ölçtüğü, neyin yükselttiği ve
    yaygın hatalar.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>HRV nedir</h2>
    <p>
      Kalp atışları arasındaki zaman farkı, milisaniye cinsinden ölçülür. Yüksek = daha iyi adapte olmuş, daha fazla parasempatik
      ton, genellikle daha formda. Genetik + yaş temel seviyenizi belirler; yaşam tarzı ~%10-20 oynatır.
    </p>
    <h2>Yaşa göre tipik aralıklar</h2>
    <ul>
      <li>Yirmili yaşlar: 60-90 ms (rMSSD, yaygın metrik)</li>
      <li>Otuzlu yaşlar: 50-80</li>
      <li>Kırklı yaşlar: 40-70</li>
      <li>Elli ve üzeri: 30-60</li>
    </ul>
    <p>
      Sporcular genellikle yaşıtlarına göre %20-30 daha yüksek çalışır. Kendi temel seviyenizle karşılaştırın, başkalarınınkiyle değil.
    </p>
    <h2>HRV'yi ne yükseltir</h2>
    <ul>
      <li>Uyku kalitesi + süresi (en büyük tek kaldıraç).</li>
      <li><a href="/learn/zone-2">Bölge 2 kardiyo</a> + kuvvet antrenmanı.</li>
      <li>Hidrasyon.</li>
      <li>Daha düşük alkol tüketimi (büyük etki &mdash; bir içki %10-30 düşürür).</li>
      <li>Çözülmüş duygusal stres.</li>
    </ul>
    <h2>Ne düşürür</h2>
    <ul>
      <li>Uykudan 3 saat içinde geç yemek + alkol.</li>
      <li>Toparlanma olmadan aşırı antrenman.</li>
      <li>Akut hastalık (erken sinyal &mdash; HRV hasta hissetmeden önce düşer).</li>
      <li>Kronik stres.</li>
    </ul>
    <h2>Yaygın hatalar</h2>
    <ul>
      <li>HRV'nizi başkalarınınkiyle karşılaştırmak. İşe yaramaz.</li>
      <li>Antrenman uyarısı pahasına HRV için günlük optimize etmek.</li>
      <li>Tek günlük değişimi anlamlı okumak (7 günlük hareketli ortalamaya bakın).</li>
    </ul>
  </>
);