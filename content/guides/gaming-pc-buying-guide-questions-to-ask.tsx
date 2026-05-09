/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Oyun bilgisayarı satın almak — hazır, toplanmış veya özel yapım — çoğu kişinin her 4-7 yılda bir verdiği 1000-3000 dolarlık bir karardır. Önceden sorulması gereken sorular, iyi alışverişleri pişmanlıktan ayırır. Bu rehber, satın alma öncesi tam kontrol listesidir.
    </p>
  </>
);

export const toc = [
  { id: "questions", label: "Satın almadan önce sorulacak 12 soru" },
  { id: "specs", label: "Donanım soruları" },
  { id: "warranty", label: "Garanti + destek soruları" },
  { id: "comparing", label: "Hazır seçenekleri karşılaştırma" },
];

export const body = (
  <>
    <h2 id="questions">Oyun bilgisayarı satın almadan önce sorulacak 12 soru</h2>
    <ol>
      <li>
        <strong>Birincil kullanım amacım nedir?</strong> Espor / AAA / <a href="/learn/stream">yayıncılık</a> /
        VR farklı donanımlar gerektirir. (Bkz.{" "}
        <a href="/tools/gaming-pc-spec-recommender">donanım öneri aracımız</a>.)
      </li>
      <li>
        <strong>Monitörümün çözünürlüğü ve yenileme hızı nedir?</strong> Bilgisayar donanımı panele uygun olmalıdır.
      </li>
      <li>
        <strong>Gerçek toplam bütçe nedir?</strong> Çevre birimleri, işletim sistemi lisansı, gerekirse monitör, oyunlar, dalgalanma koruyucu dahil. Bilgisayar tek başına toplamın %60-80'ini oluşturur.
      </li>
      <li>
        <strong>Bunun ne kadar dayanmasını istiyorum?</strong> 3 yıllık, 5 yıllık ve 7 yıllık sistemler farklı parçalar gerektirir.
      </li>
      <li>
        <strong>Daha sonra yükseltme yapacak mıyım?</strong> AM5 + DDR5 platformu 2027+ yılına kadar garantili yükseltme yolu sunar. Bazı Intel soketleri çıkmaz sokaktır.
      </li>
      <li>
        <strong>PSU markası ve seviyesi nedir?</strong> Ucuz PSU'lar arıza durumunda diğer parçalara zarar verir. Yalnızca A/B seviyesi (Corsair RM, Seasonic Focus, EVGA Gold).
      </li>
      <li>
        <strong>RAM hızı, zamanlamaları ve XMP/EXPO etkin mi?</strong> Varsayılan 4800'de DDR5, EXPO ile 6000'den %30 daha yavaştır.
      </li>
      <li>
        <strong>Kasa hava akışı / termal tasarımı nedir?</strong> Kötü kasalar termal darboğaza neden olur. Önü mesh hava akışlı kasalar daha güvenli seçimdir.
      </li>
      <li>
        <strong>Garanti nedir?</strong> Süresi, kapsamı ve entegratör üzerinden mi yoksa üretici pasif garantisi mi olduğu. (Aşağıdaki garanti rehberine bakın.)
      </li>
      <li>
        <strong>İşletim sistemi kurulumu ve sürücü kurulumu dahil mi?</strong> Profesyonel her sistemde olmalıdır.
      </li>
      <li>
        <strong>İade politikası nedir?</strong> 14 gün, 30 gün veya hiç yok mu?
      </li>
      <li>
        <strong>Yükseltme yolu nedir?</strong> Kolayca depolama ekleyebilir miyim? PSU gelecekteki GPU yükseltmesini destekler mi? Boş M.2 yuvaları var mı?
      </li>
    </ol>

    <h2 id="specs">Donanım soruları detaylı</h2>
    <ul>
      <li>
        <strong>CPU + GPU eşleştirmesi.</strong> Çözünürlük için dengeli mi? Üst seviye GPU, düşük bütçeli CPU ile yüksek FPS'de darboğaz yapar.
      </li>
      <li>
        <strong>RAM kapasitesi + hızı + çift kanal.</strong> Çift kanal yuvalarında 32 GB DDR5-6000 modern standarttır.
      </li>
      <li>
        <strong>Depolama seviyesi.</strong> İşletim sistemi ve oyunlar için NVMe Gen 4 (PCIe 4.0). SATA SSD yalnızca soğuk depolama için; HDD yalnızca kitaplığınız çok büyükse.
      </li>
      <li>
        <strong>PSU watt değeri + verimlilik derecesi.</strong> Parça watt değerini 100-200W boşlukla hesaplayın. Minimum Gold derecesi; Platinum güzel ama nadiren fiyat farkına değer.
      </li>
      <li>
        <strong>Soğutma.</strong> Stok soğutucu Ryzen 5 / i5 için yeterlidir; Ryzen 7+ / i7+ için yetersizdir. Daha iyi hava soğutucu (35-60$) veya AIO (100-150$).
      </li>
    </ul>

    <h2 id="warranty">Garanti + destek soruları</h2>
    <ul>
      <li>
        <strong>İşçilik garantisi ne kadar?</strong> En az 12 ay; premium üreticilerde 24 ay.
      </li>
      <li>
        <strong>Parça garantileri pasif mi?</strong> Her parçanın genellikle kendi üretici garantisi vardır (1-3 yıl). Entegratörün RMA süreçlerinde yardımcı olduğunu onaylayın.
      </li>
      <li>
        <strong>RMA / onarım süreleri nedir?</strong> Bazıları ödünç cihaz gönderir; çoğu göndermez.
      </li>
      <li>
        <strong>Onarım nerede yapılır?</strong> Onlara geri gönderilir, yerinde veya yetkili yerel serviste mi?
      </li>
      <li>
        <strong>Nakliye hasarını karşılıyorlar mı?</strong> Gönderilen hazır sistemlerde nakliye riski kime ait?
      </li>
    </ul>

    <h2 id="comparing">Hazır seçenekleri karşılaştırma</h2>
    <p>
      1500-3000$ arası hazır sistemleri karşılaştırmak için yan yana kontrol listesi:
    </p>
    <table>
      <thead>
        <tr>
          <th>Özellik</th>
          <th>Neden önemli</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>CPU modeli + termal boşluk</td><td>Darboğaz riski</td></tr>
        <tr><td>GPU modeli + garanti süresi</td><td>En pahalı parça; en uzun ömürlü bileşen</td></tr>
        <tr><td>RAM markası + hızı + kapasitesi</td><td>Bunda %30 performans farkı</td></tr>
        <tr><td>Depolama türü + kapasitesi</td><td>NVMe Gen 4 vs SATA büyük fark</td></tr>
        <tr><td>PSU markası + watt + derece</td><td>Sistem güvenilirliği</td></tr>
        <tr><td>Kasa hava akışı tasarımı</td><td>Yükseltmeler için termal boşluk</td></tr>
        <tr><td>Soğutma çözümü</td><td>CPU sınıfı için yeterli mi?</td></tr>
        <tr><td>İşçilik garantisi</td><td>En az 12 ay</td></tr>
        <tr><td>İşletim sistemi lisans türü</td><td>Perakende vs OEM taşınabilirliği etkiler</td></tr>
        <tr><td>İade süresi</td><td>Standart 14-30 gün</td></tr>
      </tbody>
    </table>
    <p>
      Tabloyu yazdırın; her aday için doldurun; yalnızca fiyata değil, çoğu kritere göre kazanan seçeneği belirleyin.
    </p>
  </>
);

export const cta = {
  label: "Kullanım amacınıza göre bir seviye önerisi alın",
  targetSlug: "gaming-pc-spec-recommender",
};

export const faq = [
  {
    q: "Oyun bilgisayarı satın almadan önce hangi soruları sormalıyım?",
    a: "Toplam on iki: birincil kullanım amacı, monitör çözünürlüğü + yenileme hızı, tüm dahil toplam bütçe, beklenen kullanım ömrü, yükseltme planları, PSU markası/seviyesi, RAM hızı + XMP/EXPO etkin, kasa hava akışı, garanti süresi + kapsamı, işletim sistemi kurulumu dahil mi, iade politikası, yükseltme yolu. Herhangi bir satın alma öncesinde 12'sini de kapsayın.",
  },
  {
    q: "Hazır oyun bilgisayarı seçeneklerini nasıl değerlendiririm?",
    a: "Yan yana karşılaştırın: CPU + termal boşluk, GPU + garanti, RAM markası/hızı/kapasitesi, depolama türü, PSU markası + watt, kasa hava akışı, soğutma yeterliliği, işçilik garantisi, işletim sistemi lisans türü, iade süresi. Yalnızca fiyata göre seçim yapmayın — özellikle PSU ve garanti (uzun vadeli risk) olmak üzere çoğu kritere göre seçin.",
  },
];