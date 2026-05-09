import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Ağız bantlama, 2023-2024 yıllarında James Nestor&rsquo;un &ldquo;Nefes&rdquo; kitabı ve Andrew Huberman sayesinde ana akım haline geldi.
    2026&rsquo;ya gelindiğinde eczanelerin bantları stoklayacak kadar yaygınlaştı. İşte dürüst kanıtlar + gerçekten ne zaman işe yaradığı.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>İddia</h2>
    <p>
      Geceleri dudaklarınızı kapatmak burundan nefes almayı zorunlu kılar, bu da (savunucularına göre) uyku kalitesini artırır, horlamayı azaltır,
      kan oksijenini yükseltir.
    </p>
    <h2>Gerçek kanıtlar</h2>
    <ul>
      <li><strong>Doğrulanmış ağız solunumcuları:</strong> uyku verimliliğinde hafif iyileşme, ağız kuruluğu + boğaz ağrısında gerçek azalma.</li>
      <li><strong>Horlama azaltma:</strong> hafif vakalarda orta düzeyde kanıt. Uyku apneniz varsa CPAP&rsquo;ın yerini TUTMAZ.</li>
      <li><strong>Genel nüfus:</strong> çoğu çalışmada plasebo düzeyinde etkiler. Sağlıklı burun solunumcularının çoğu anlamlı kazanç görmez.</li>
      <li><strong>Azalan uyku apnesi olayları:</strong> DESTEKLENMEMEKTEDİR. Teşhis edilmemiş obstrüktif uyku apneniz varsa tehlikeli olabilir.</li>
    </ul>
    <h2>Kimler ağız bandı KULLANMAMALI</h2>
    <ul>
      <li>Uyku apnesi (teşhis edilmiş veya şüphelenilen).</li>
      <li>Şiddetli septum deviasyonu / kronik tıkanıklık.</li>
      <li>Yakın zamanda soğuk algınlığı / sinüs enfeksiyonu geçirenler.</li>
      <li>Çocuklar &mdash; sonuçsuz güvenlik verileri.</li>
    </ul>
    <h2>Denemek isterseniz</h2>
    <ul>
      <li>Bunun için tasarlanmış bir bant kullanın (3M Microfoam, Hostage Tape, MyoTape) &mdash; koli bandı değil.</li>
      <li>Ağzın üzerine uygulayın, tamamen kapatmayın; güvenlik açıklığı bırakın.</li>
      <li>Yüksek sesle horluyor veya 7-8 saat uykuya rağmen bitkin hissediyorsanız önce uyku testi yaptırın.</li>
    </ul>
  </>
);