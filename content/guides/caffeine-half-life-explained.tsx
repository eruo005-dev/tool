import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Kafeinin ortalama yarılanma ömrü 5-6 saattir. Saat 16:00'da içilen bir kahve, gece yarısı hâlâ %25 oranında sisteminizdedir.
    İşte gerçek matematik ve uykuyu bozmadan enerji için kafeinin nasıl zamanlanacağı.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Yarılanma ömrü matematiği</h2>
    <p>
      Sabah 08:00'de 200mg kahve: 13:00-14:00'te 100mg, 18:00-19:00'da 50mg, gece yarısı 25mg, yaklaşık 25 saat sonra tamamen temizlenir.
      Genetik faktörler önemlidir (CYP1A2 hızlı ve yavaş metabolize edenlerde bu süre 2-3 kat değişir).
    </p>
    <h2>Pratikte anlamı</h2>
    <ul>
      <li><strong>Saat 23:00 yatışı için kesme zamanı:</strong> uykuda %25'in altına düşmesi için kafeini 13:00-15:00 arasında bırakın.</li>
      <li><strong>Öğleden sonra geç kahve:</strong> uykuya dalsanız bile derin uykuyu ölçülebilir şekilde azaltır.</li>
      <li><strong>Sisteminizde kafein varken uyursanız:</strong> aynı sürede bile uyku kalitesi %30-40 düşer.</li>
    </ul>
    <h2>Optimum zamanlama</h2>
    <ul>
      <li>İlk kahve uyandıktan 90-120 dakika sonra (kortizol zirvesini bekleyin).</li>
      <li>İkinci doz (iki kez içiyorsanız) öğleden önce.</li>
      <li>Yatmadan 8-10 saat önce kesin sınır.</li>
      <li>Gün sonu istekleri için dekaf veya matcha (düşük doz) tercih edin.</li>
    </ul>
    <h2>Kafein döngüsü</h2>
    <p>
      Tolerans geliştirmek gerçektir. Hassasiyeti sıfırlamak için her 3-6 ayda bir 7-14 gün kafeine ara verin. İlk 3 gün zordur;
      2. haftada yıllardır olmadığınız kadar iyi uyursunuz.
    </p>
  </>
);