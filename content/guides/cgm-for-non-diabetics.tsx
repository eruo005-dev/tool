import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Sürekli glikoz monitörleri (Dexcom Stelo, Abbott Lingo, Levels Health) 2025-2026 sağlıklı yaşam giyilebilir teknoloji hikayesidir.
    Stelo, diyabetik olmayanlar için reçetesiz olarak piyasaya sürüldü. İşte ayda 89$'a değip değmediğine dair dürüst bir değerlendirme.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Gerçekte neyi ölçüyorlar</h2>
    <p>
      Her 1-15 dakikada bir interstisyel glikoz (kan glikozunun 5-15 dakika gerisinde). Sensör 14-15 gün dayanır,
      NFC + Bluetooth ile telefona bağlanır.
    </p>
    <h2>Gerçekte ne öğreniyorsunuz</h2>
    <ul>
      <li>Belirli yiyeceklere verdiğiniz glikoz tepkisi (genellikle şaşırtıcı).</li>
      <li>Görünüşte &ldquo;sağlıklı&rdquo; yiyeceklerden (yulaf ezmesi, smoothie'ler, hurma) kaynaklanan ani yükselmeler.</li>
      <li>Egzersizin yemek sonrası ani yükselmeleri nasıl azalttığı.</li>
      <li>Stres ve kötü uykunun bazal seviyenizi nasıl yükselttiği.</li>
    </ul>
    <h2>Öğrenemeyebilecekleriniz</h2>
    <ul>
      <li>Kişiselleştirilmiş içgörüler, insülin duyarlılığı hakkında okuyan biri için çoğunlukla yeni değil.</li>
      <li>Optimizasyon, bazı kullanıcılar için kaygı uyandırıcı ve düzensiz hale gelebilir.</li>
      <li>Metabolik olarak sağlıklı diyabetik olmayanlar için &ldquo;ortalama&rdquo; ve &ldquo;optimal&rdquo; arasındaki fark küçüktür.</li>
    </ul>
    <h2>En uygun olanlar</h2>
    <ul>
      <li><strong>Prediyabetikler</strong> &mdash; somut geri bildirim davranış değişikliğini tetikler.</li>
      <li><strong>Metabolik sendrom</strong> &mdash; yiyecek-davranış bağlantısını içsel olarak deneyimlemek.</li>
      <li><strong>Performans sporcuları</strong> &mdash; beslenme ve toparlanma içgörüleri.</li>
    </ul>
    <h2>Şu durumlarda atlayın</h2>
    <ul>
      <li>Metabolik olarak sağlıklı ve zaten iyi besleniyorsanız &mdash; minimum yeni bilgi, ayda 89$.</li>
      <li>Yeme bozukluğu geçmişi &mdash; veri geri bildirimi kısıtlamayı pekiştirebilir.</li>
    </ul>
  </>
);