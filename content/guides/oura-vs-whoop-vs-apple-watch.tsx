import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da önemli olan üç giyilebilir teknoloji kategorisi var: Oura Ring (uyku + toparlanma), Whoop 5.0 (performans toparlanması),
    Apple Watch / Garmin (çoklu spor + sürekli sağlık takibi). Gerçekten bakacağınız şeye göre seçim yapın.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Oura Ring 4</h2>
    <ul>
      <li><strong>En uygun:</strong> uyku takibi, günlük hazır olma durumu, adet takibi, stres.</li>
      <li><strong>Fiyat:</strong> 349$ yüzük + 5.99$/ay Oura üyeliği.</li>
      <li><strong>Güçlü yönler:</strong> tak ve unut form faktörü, tüketici giyilebilir cihazları arasında en iyi <a href="/learn/hrv">HRV</a>/uyku doğruluğu.</li>
      <li><strong>Zayıf yönler:</strong> gerçek zamanlı egzersiz kalp atış hızı yok, GPS yok, değiştirilebilir pil can sıkıcı.</li>
    </ul>
    <h2>Whoop 5.0</h2>
    <ul>
      <li><strong>En uygun:</strong> efor/toparlanma döngülerini optimize eden sporcular için.</li>
      <li><strong>Fiyat:</strong> 239$+/yıl (abonelik donanımı içerir).</li>
      <li><strong>Güçlü yönler:</strong> günlük efor hedefi + toparlanma puanı en uygulanabilir geri bildirim döngüsüdür.</li>
      <li><strong>Zayıf yönler:</strong> ekransız bileklik; sıkı antrenman yapmıyorsanız hileli gelebilir.</li>
    </ul>
    <h2>Apple Watch Ultra 3 / Series 10</h2>
    <ul>
      <li><strong>En uygun:</strong> genel günlük sağlık + fitness + ekosistem entegrasyonu.</li>
      <li><strong>Fiyat:</strong> 399$ (Series) - 799$ (Ultra), abonelik yok.</li>
      <li><strong>Güçlü yönler:</strong> EKG, AFib tespiti, düşme algılama, kan oksijeni, GPS, üçüncü taraf uygulamalar.</li>
      <li><strong>Zayıf yönler:</strong> uyku takibi istiyorsanız gece şarjı; Series 10'da pil sınırlayıcı.</li>
    </ul>
    <h2>Garmin (Fenix / Forerunner / Venu)</h2>
    <ul>
      <li><strong>En uygun:</strong> ciddi dayanıklılık sporcuları (koşu, bisiklet, triatlon).</li>
      <li><strong>Fiyat:</strong> 200-1.000$+ seviyeye bağlı.</li>
      <li><strong>Güçlü yönler:</strong> 2-3 hafta pil, gelişmiş antrenman metrikleri, askeri sınıf GPS.</li>
      <li><strong>Zayıf yönler:</strong> kullanıcı deneyimi Apple'ın gerisinde, daha zayıf üçüncü taraf uygulama ekosistemi.</li>
    </ul>
    <h2>Karar kısayolu</h2>
    <ul>
      <li>Uyku + toparlanmayı optimize ediyorsanız: <strong>Oura</strong>.</li>
      <li>Haftada 4+ gün sıkı antrenman yapıyorsanız: <strong>Whoop veya Garmin</strong>.</li>
      <li>Her şey için tek bir giyilebilir cihaz istiyorsanız: <strong>Apple Watch</strong>.</li>
      <li>Hepsini istiyor ve bütçeniz yetiyorsa: <strong>Oura + Apple Watch</strong>.</li>
    </ul>
  </>
);