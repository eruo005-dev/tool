/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Birine oyun bilgisayarınızı toplaması için iş veriyorsanız, parçaları teslim etmeden önce yapacağınız hazırlık çalışmaları zaman kazandırır, yanlış anlaşılmaları önler ve garanti haklarınızı korur. İşte pratik, toplama öncesi kontrol listesi.
    </p>
  </>
);

export const toc = [
  { id: "before-buying", label: "Parçaları satın almadan önce" },
  { id: "before-dropoff", label: "Teslim etmeden önce" },
  { id: "what-to-bring", label: "Parçalarla birlikte ne getirilmeli" },
  { id: "after-pickup", label: "Teslim aldıktan sonra" },
];

export const body = (
  <>
    <h2 id="before-buying">Parçaları satın almadan önce</h2>
    <ol>
      <li>
        <strong>Toplayıcıdan parça uyumluluk kontrolü isteyin.</strong> Çoğu profesyonel toplayıcı, satın alma işlemini yapmadan önce parça listenizi inceleyip uyumluluk sorunlarını (CPU/ anakart uyuşmazlığı, PSU watt değeri yetersizliği, soğutucu için kasa boşluğu) işaretler. Ücretsiz hizmet. Değerlendirin.
      </li>
      <li>
        <strong>Garanti koşullarını onaylayın.</strong> Bazı toplayıcılar yalnızca kendi tedarik ettikleri parçalar için işçilik garantisi verir. Sizin getirdiğiniz parçalara işçilik garantisi verip vermeyeceklerini doğrulayın.
      </li>
      <li>
        <strong>İşletim sistemi lisans koşullarını onaylayın.</strong> Kendi Windows lisansınızı getirin (daha ucuz) veya onların bir tane eklemesini sağlayın (pratik). Satın almadan önce doğrulayın.
      </li>
      <li>
        <strong>Takvimi kontrol edin.</strong> Bazı toplayıcılar 1-3 hafta sonrasına randevu alır. Belirli bir teslim tarihiniz varsa, erken rezervasyon yaptırın.
      </li>
    </ol>

    <h2 id="before-dropoff">Teslim etmeden önce — hazırlık kontrol listesi</h2>
    <ul>
      <li>
        <strong>Tüm orijinal kutuları saklayın.</strong> Toplayıcı, bir parça arızalı çıkarsa iade/değişim için onlara ihtiyaç duyabilir. Ayrıca kutular üretici garanti kartlarını içerir.
      </li>
      <li>
        <strong>Tüm fişleri saklayın.</strong> Gelecekteki herhangi bir RMA için gereklidir. Çıktı alın veya PDF olarak kaydedin.
      </li>
      <li>
        <strong>Mühürlü parçaları açmayın.</strong> Bazı perakendeciler (Amazon) açılmış kutu iadesini kabul eder; bazıları (Newegg, B&amp;H) kabul etmez. Toplayıcı, toplama sırasında kutuyu açacaktır.
      </li>
      <li>
        <strong>Parça listesinin eşleştiğini onaylayın.</strong> Teslim etmeden önce parça listesini yazdırın. Her bir parçanın mevcut olduğunu ve fişle eşleştiğini doğrulayın.
      </li>
      <li>
        <strong>Özel istekleri not edin.</strong> RGB renk tercihi, kasa fanı konfigürasyonu, belirli kablo yönlendirmesi. Yazılı olarak belirtin — sözlü istekler unutulur.
      </li>
      <li>
        <strong>Parçaları teslim etmeden önce fotoğraflayın.</strong> Özellikle seri numaraları ve her bir parçanın durumu. Teslimat durumu anlaşmazlıklarına karşı önlem.
      </li>
      <li>
        <strong>Teslim alma beklentilerini onaylayın.</strong> Tarih, nelerin dahil olduğu, peşin ödeme ve kalan ödeme koşulları.
      </li>
    </ul>

    <h2 id="what-to-bring">Parçalarla birlikte ne getirilmeli</h2>
    <ul>
      <li>Orijinal kutularındaki tüm parçalar.</li>
      <li>Parçalarla gelen tüm aksesuarlar (ek kablolar, montaj braketleri, kılavuzlar).</li>
      <li>Sağlıyorsanız Windows lisansı / etkinleştirme anahtarı.</li>
      <li>Parça listesinin ve özel isteklerin çıktısı.</li>
      <li>Toplama sırasında oluşabilecek sorular için telefon numaranız.</li>
      <li>Değerli teslimatlar için dükkan talep ediyorsa fotoğraflı kimlik.</li>
    </ul>

    <h2 id="after-pickup">Teslim aldıktan sonra — doğrulanması gerekenler</h2>
    <ol>
      <li>
        <strong>Görsel inceleme.</strong> Kablo yönetimi, belirgin bükülmüş pin olmaması, kasa panellerinin düzgün kapanması, fanların doğru yönde dönmesi.
      </li>
      <li>
        <strong>BIOS ayarları.</strong> BIOS'a önyükleme yapın. RAM için XMP/EXPO'nun etkin olduğunu onaylayın (belirtilen hızı gösterdiğini kontrol edin). Önyükleme önceliğinin doğru ayarlandığını onaylayın.
      </li>
      <li>
        <strong>Bağımsız stres testi yapın.</strong> 30 dakika boyunca OCCT veya Prime95 çalıştırın. CPU sıcaklıklarının 90°C'nin altında kaldığını doğrulayın. GPU için Furmark veya 3DMark çalıştırın.
      </li>
      <li>
        <strong>Tüm parçaların mevcut olduğunu doğrulayın.</strong> Kasayı açın (erişilebilirse). RAM sayısını, M.2 sürücülerin varlığını, GPU modelinin fişle eşleştiğini onaylayın.
      </li>
      <li>
        <strong>Tüm USB bağlantı noktalarını, ses ve Ethernet'i test edin.</strong> Cihazları takın, bağlantıyı doğrulayın.
      </li>
      <li>
        <strong>Garanti belgelerini doğrulayın.</strong> Tarihli, imzalı, nelerin kapsandığını listeleyen, servis talepleri için iletişim bilgilerini içeren.
      </li>
      <li>
        <strong>Orijinal parça kutularını saklayın.</strong> Bazı üretici garantileri RMA için orijinal ambalajı gerektirir.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "Kendi rakamlarınız için işe alma ve kendi yapma arasındaki başabaş noktasını bulun",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "PC toplama işi için işe almadan önce parçalar nasıl hazırlanır?",
    a: "Satın almadan önce toplayıcıdan uyumluluk kontrolü isteyin. Garanti koşullarını onaylayın (getirdiğiniz parçalara işçilik garantisi verecekler mi?). Fişleri ve kutuları saklayın. Mühürlü parçaları açmayın. Parça listesini yazdırın. Özel istekleri yazılı olarak not edin. Parçaları teslim etmeden önce fotoğraflayın. Teslim alma tarihini ve ödeme koşullarını onaylayın.",
  },
  {
    q: "PC toplama için parçaları teslim ederken ne getirmeliyim?",
    a: "Orijinal kutularındaki tüm parçalar (aksesuarlarla birlikte), kendiniz sağlıyorsanız Windows lisansı, yazdırılmış parça listesi ve özel istekler, toplama sırasında sorular için telefonunuz, değerli teslimatlar için dükkan talep ediyorsa fotoğraflı kimlik.",
  },
  {
    q: "Profesyonelce toplanmış bir bilgisayarı teslim aldıktan sonra neyi doğrulamalıyım?",
    a: "Kablo yönetimi ve bükülmüş pin olmaması için görsel inceleme. BIOS ayarları (XMP/EXPO etkin). Bağımsız stres testi (30 dk Prime95 + Furmark). Tüm parçaların mevcut olduğunu ve fişle eşleştiğini doğrulayın. USB + ses + Ethernet'i test edin. Garanti belgelerini doğrulayın. Gelecekteki RMA için kutuları saklayın.",
  },
];