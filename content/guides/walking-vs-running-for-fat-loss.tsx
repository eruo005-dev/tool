import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Fitness dünyası 2025-2026'da bu konuda tersine döndü. Yürüyüş, özellikle yağ kaybı için, yeniden popüler hale geliyor.
    İşte dürüst hesaplama ve neden uzun yürüyüşler ve zone-2 yaklaşımının genellikle &ldquo;koşmalısın&rdquo; dogmasından daha iyi olduğu.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Kalori Hesabı</h2>
    <p>
      Koşmak mil başına ~100 kalori yakar. Yürümek ise ~80 kalori yakar. Yani mil başına koşmanın %20 avantajı vardır &mdash; bu, kültürel varsayımdan çok daha küçük bir farktır.
    </p>
    <h2>Yürüyüş Neden Yağ Kaybında Daha Başarılı</h2>
    <ul>
      <li>Devamlılık: insanlar 60+ dakika boyunca tutarlı şekilde yürür. 60+ dakika boyunca her gün koşmak, elit olmayanların çoğunu yıpratır.</li>
      <li>Toparlanma: yürüyüş, ertesi günkü ağırlık antrenmanını etkilemez. Koşu genellikle etkiler.</li>
      <li>Açlık tepkisi: yoğun kardiyo, telafi edici yeme davranışını tetikler; yürüyüş tetiklemez.</li>
      <li>Eklem maliyeti: koşu, sakatlanma riski taşır ve bu da insanları antrenmandan tamamen uzaklaştırabilir.</li>
    </ul>
    <h2>Koşunun Kazandığı Durumlar</h2>
    <ul>
      <li>Koşmaktan keyif alıyorsanız &mdash; devamlılık, teorik optimumun önüne geçer.</li>
      <li>Zaman kısıtlıysa: yakılan kalori açısından 30 dakika koşu &gt; 60 dakika yürüyüş.</li>
      <li>VO&#8322; max sınırı: yürüyüş bu sınıra ulaşmaz; koşu seansları veya HIIT ulaşır.</li>
    </ul>
    <h2>2026 Yılı İçin Önerilen Düzen</h2>
    <p>
      Çoğu yağ kaybı antrenman protokolü artık şunları öneriyor: günlük 8-10 bin adım + 2-3 kuvvet seansı + 1-2 zone 2 seansı
      (herhangi bir yöntem) + kalori açığı. Koşu isteğe bağlıdır, zorunlu değildir.
    </p>
    <p>
      Hesaplamayı yapın: <a href="/tools/step-count-target-calculator">adım sayısı hedefi</a>,{" "}
      <a href="/tools/calorie-calculator">kalori hesaplayıcı</a>.
    </p>
  </>
);