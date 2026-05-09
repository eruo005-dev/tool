import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Fin sauna araştırmaları, arkasında sert ölüm verileri bulunan az sayıdaki uzun ömür uygulamasından biridir. İşte
    2026 kanıtlarının destekledikleri, desteklemedikleri ve pratik bir protokol.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Başlıca bulgu</h2>
    <p>
      KIHD çalışması (2.300+ orta yaşlı Fin erkeği, 20 yıllık takip), haftada 1 seansa kıyasla 4-7 seans/hafta için
      tüm nedenlere bağlı ölümlerde %40 azalma buldu; seanslar 19+ dakika ve 175°F+ sıcaklıkta. Etki, sigara,
      BMI, yaş, alkol, egzersiz kontrol edildikten sonra da geçerliydi.
    </p>
    <h2>Başlıca bulgunun ötesinde</h2>
    <ul>
      <li><strong>Kardiyo faydası:</strong> sauna, kalp atış hızı ve atım hacmi üzerinde orta yoğunlukta egzersizi taklit eder.</li>
      <li><strong>Endotel fonksiyonu:</strong> düzenli sauna, aerobik antrenmana benzer şekilde kan damarı reaktivitesini iyileştirir.</li>
      <li><strong>Kan basıncı düşüşü:</strong> haftada 4-7 seans, yıllar içinde %32 daha düşük KB ile ilişkilidir.</li>
      <li><strong>Uyku:</strong> yatmadan 90-120 dakika önce sauna, uykuya dalmayı hızlandırır.</li>
    </ul>
    <h2>Pratik</h2>
    <ul>
      <li>Öncesinde su için; sonrasında elektrolitleri yerine koyun.</li>
      <li>İlk baş dönmesi veya mide bulantısında çıkın.</li>
      <li>Kalp rahatsızlıkları, hamilelik, tansiyon ilaçları varsa atlayın (doktora danışın).</li>
      <li>Turlar arasında soğuk kontrast (60-90 saniye) kardiyovasküler sinyali güçlendirir.</li>
    </ul>
    <p>
      <a href="/tools/sauna-protocol-calculator">Sauna protokolü hesaplayıcısı</a> ile bir seans protokolü oluşturun.
    </p>
  </>
);