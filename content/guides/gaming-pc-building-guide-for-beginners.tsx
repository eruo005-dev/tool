/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      İlk oyun bilgisayarınızı toplamak 6-12 saat içinde başarılabilir. Zorluk,
      YouTube'un gösterdiğinden daha düşük, pazarlamanın önerdiğinden ise daha yüksektir.
      Bu rehber, gerçekçi toplama sürecini, gerekli araçları, kaçınılması gereken hataları
      ve bir şey ilk denemede açılmadığında nereden yardım isteyeceğinizi anlatır.
    </p>
  </>
);

export const toc = [
  { id: "tools", label: "İhtiyacınız olan araçlar" },
  { id: "process", label: "Toplama süreci" },
  { id: "hard-parts", label: "Takılması en zor parçalar" },
  { id: "first-boot", label: "İlk açılış sorun giderme" },
  { id: "common-mistakes", label: "Yaygın başlangıç hataları" },
];

export const body = (
  <>
    <h2 id="tools">Oyun bilgisayarı toplamak için ihtiyacınız olan araçlar</h2>
    <ul>
      <li>
        <strong>Manyetik Phillips tornavida (#2).</strong> Zamanın %95'inde ihtiyacınız olan tek tornavida.
      </li>
      <li>
        <strong>Anti-statik mat veya bileklik (isteğe bağlı).</strong> Modern parçalarda ESD hasarı nadirdir ancak
        topraklama yapmadan halı üzerinde durmak riski artırır. 10 dolarlık ucuz bir sigorta.
      </li>
      <li>
        <strong>Kablo bağı veya cırt cırt.</strong> Kablo yönetimi için. Yeniden kullanılabilir cırt cırtlı bağlar
        kablo bağlarından daha iyidir.
      </li>
      <li>
        <strong>El feneri veya telefon ışığı.</strong> Kasaların içi karanlıktır.
      </li>
      <li>
        <strong>Termal macun (bazen).</strong> Çoğu soğutucu, macun önceden uygulanmış olarak gelir.
        Macunsuz hava soğutucu = 10 dolarlık bir tüp satın alın.
      </li>
      <li>
        <strong>Önyüklenebilir USB sürücü (8 GB+).</strong> Windows kurulumu için.
        Microsoft'un Medya Oluşturma Aracı'nı kullanarak başlamadan önce hazırlayın.
      </li>
      <li>
        <strong>İsteğe bağlı: küçük parça tepsisi</strong> vidalar için. "O vida nereye gitti" anını önler.
      </li>
    </ul>

    <h2 id="process">Toplama süreci — işlem sırası</h2>
    <p>
      Gerçekçi süre: İlk toplama için 4-8 saat (araştırma + toplama + açılış + işletim sistemi),
      deneyimli için 2-3 saat.
    </p>
    <ol>
      <li>
        <strong>Anakart kılavuzunu baştan sona okuyun.</strong> 30 dakika iyi harcanmış zaman.
        Hangi RAM yuvalarını, hangi PCIe yuvasını, gücü nereye takacağınızı söyler.
      </li>
      <li>
        <strong>İşlemciyi anakarta takın (kasa dışında).</strong> En hassas an.
        Üçgen işaretlerini eşleştirin; nazikçe yerleştirin, zorlamayın.
      </li>
      <li>
        <strong>RAM'i kılavuzun önerdiği yuvalara takın.</strong>{" "}
        Genellikle çift kanal için A2 + B2 yuvaları. Kilitler tıklayana kadar sıkıca itin.
      </li>
      <li>
        <strong>M.2 NVMe sürücüsünü takın.</strong> Yuva anakart üzerindedir.
        Küçük bir vida onu yerinde tutar.
      </li>
      <li>
        <strong>İşlemci soğutucusunu takın.</strong> Önceden uygulanmamışsa termal macun uygulayın (bezelye büyüklüğünde).
        Çapraz desende sıkın. Fan kablosunu CPU_FAN'a takın.
      </li>
      <li>
        <strong>Anakartı kasaya monte edin.</strong> Kasadaki bağlantı noktası desenini anakartla eşleştirin.
        Bağlantı noktalarını atlamayın — kasayla doğrudan temas kısa devreye neden olur.
      </li>
      <li>
        <strong>PSU'yu takın.</strong> Çoğu modern kasada fan aşağı bakacak şekilde (kasa tabanının dışına).
      </li>
      <li>
        <strong>Güç kablolarını bağlayın.</strong> Anakarta 24-pin, anakartın üstüne EPS (8-pin CPU),
        GPU'ya PCIe (8-pin veya 6+2).
      </li>
      <li>
        <strong>Ön panel G/Ç kablolarını bağlayın.</strong> Güç düğmesi, LED, USB.
        Herkesi ilk seferde sinir eden minik konektörler. Kılavuz pin şemasını gösterir.
      </li>
      <li>
        <strong>GPU'yu en son takın.</strong> Üst PCIe x16 yuvası. Klip tıklayana kadar sıkıca itin.
        PCIe güç kablosunu bağlayın.
      </li>
      <li>
        <strong>Kablo yönetimi yapın.</strong> Kasa kanallarından geçirin, anakart tepsisinin arkasında
        kablo bağıyla sabitleyin.
      </li>
      <li>
        <strong>İlk açılış.</strong> Monitörü GPU'ya takın (anakarta DEĞİL). Gücü açın.
        POST ekranı görünürse başarılı. Görünmezse aşağıdaki sorun giderme bölümüne bakın.
      </li>
      <li>
        <strong>BIOS güncellemesi + XMP/EXPO etkinleştirme.</strong> Kritik adım. EXPO olmadan
        RAM, belirtilen hızından %30 daha yavaş çalışır.
      </li>
      <li>
        <strong>Windows'u USB'den kurun.</strong> 15 dakika. Mümkünse Microsoft hesabını atlayın
        (çevrimdışı kurulum daha esnektir).
      </li>
      <li>
        <strong>Sürücüleri yükleyin.</strong> Yonga seti (anakart üreticisinin sitesi) → GPU (NVIDIA / AMD sitesi) → Windows güncellemeleri.
      </li>
      <li>
        <strong>Stres testi yapın.</strong> 30 dk OCCT veya Prime95 (CPU); 30 dk Furmark
        veya 3DMark Time Spy stres (GPU). Sıcaklıkları ve kararlılığı doğrulayın.
      </li>
    </ol>

    <h2 id="hard-parts">Takılması en zor parçalar</h2>
    <ul>
      <li>
        <strong>İşlemciyi sokete takmak.</strong> Bükülmüş pinler en maliyetli hatadır.
        Hizalamayı üç kez kontrol edin.
      </li>
      <li>
        <strong>Ön panel G/Ç konektörleri.</strong> Küçük pinler, yanlış hizalamak kolay.
        Kılavuz tek akıl sağlığı kaynağıdır. Sonradan takılan adaptörler (NZXT Front-IO Cable Comb)
        yardımcı olur.
      </li>
      <li>
        <strong>EPS kablosunu kasadan geçirmek.</strong> Genellikle kablo zar zor ulaşır
        — kasanın kablo kanalından dikkatlice geçirmeniz gerekir.
      </li>
      <li>
        <strong>Temiz görünmek için kablo yönetimi.</strong> İşlevsel olarak isteğe bağlıdır ancak
        dağınık göründüğünde duygusal olarak acı vericidir.
      </li>
      <li>
        <strong>AIO soğutucu radyatör montajı.</strong> Radyatör + fanlar + vidaları
        aşırı sıkmadan hizalamak en ince işçilik gerektiren ikinci iştir.
      </li>
    </ul>

    <h2 id="first-boot">İlk açılış sorun giderme</h2>
    <p>
      Sistem ilk denemede POST yapmazsa:
    </p>
    <ol>
      <li><strong>Monitör GPU'ya takılı mı?</strong> 1 numaralı hata. Anakart bağlantı noktasından GPU bağlantı noktasına geçin.</li>
      <li><strong>RAM doğru yuvalarda mı?</strong> Kılavuzu kontrol edin. Genellikle çift kanal için A2 + B2.</li>
      <li><strong>EPS (CPU gücü) kablosu bağlı mı?</strong> Anakartın üstünde, genellikle unutulur.</li>
      <li><strong>24-pin tam oturdu mu?</strong> Her iki klip tıklayana kadar sıkıca itin.</li>
      <li><strong>GPU PCIe gücü bağlı mı?</strong> 6500 serisi ve üzeri tüm GPU'lar için gereklidir.</li>
      <li><strong>RAM, işlemci soğutucusu, GPU'yu yeniden takın.</strong> Genellikle bağlantı sorunudur.</li>
      <li><strong>Anakartın LED hata göstergesini kontrol edin.</strong> Çoğu modern kartta bulunur. Hangi alt sistemin arızalandığını söyler.</li>
      <li><strong>r/buildapc'ye gönderi atın.</strong> Yukarıdakilerden sonra takılırsanız, topluluk hızlıca yardım eder. Yapı fotoğrafları + parça listesi ekleyin.</li>
    </ol>

    <h2 id="common-mistakes">Kaçınılması gereken yaygın başlangıç hataları</h2>
    <ul>
      <li><strong>BIOS'ta XMP/EXPO'yu etkinleştirmeyi unutmak.</strong> En yaygın sessiz sorun.</li>
      <li><strong>Monitörü anakarta takmak.</strong> 1 numaralı ilk açılış siyah ekran nedeni.</li>
      <li><strong>Yetersiz PSU.</strong> Düşük güçlü PSU sonunda yük altında arızalanır.</li>
      <li><strong>Bükülmüş işlemci pinleri.</strong> Bu adımda yavaşlayın.</li>
      <li><strong>Bağlantı noktalarını atlamak.</strong> Anakart kısa devrelerine neden olur.</li>
      <li><strong>Herhangi bir şeyi aşırı sıkmak.</strong> PCB'leri çatlatır. Sıkı olana kadar sıkın, daha fazla değil.</li>
      <li><strong>Yanlış RAM yuvaları.</strong> Kılavuzu okuyun.</li>
      <li><strong>Stres testini atlamak.</strong> Arızalar oyunun ilk saatinde ortaya çıkar; stres testini daha erken yapın.</li>
    </ul>
  </>
);

export const cta = {
  label: "Kullanım senaryosuna göre özellik önerileri",
  targetSlug: "gaming-pc-spec-recommender",
};

export const faq = [
  {
    q: "Oyun bilgisayarı toplamak için hangi araçlara ihtiyacım var?",
    a: "Manyetik #2 Phillips tornavida (vidaların %95'i), kablo yönetimi için kablo bağı veya cırt cırt, el feneri, anti-statik mat (isteğe bağlı, 10 dolarlık ucuz sigorta), Windows kurulumu için önyüklenebilir USB sürücü. Çoğu soğutucu termal macun içerir. Bu kadar — özel aletlere gerek yok.",
  },
  {
    q: "Oyun bilgisayarı toplarken hangi parçaları takmak en zordur?",
    a: "İşlemciyi sokete takmak (bükülmüş pinler maliyetlidir), ön panel G/Ç konektörleri (küçük pinler, kılavuz tek akıl sağlığı kaynağıdır), EPS kablosunu kasadan geçirmek, AIO soğutucu radyatör montajı, temiz görünmek için kablo yönetimi. İşlevsel parçalar çoğunlukla kolaydır; zaman alan kısım estetik ve küçük konektörlerdir.",
  },
  {
    q: "İlk oyun bilgisayarınızı toplarken hatalardan nasıl kaçınılır?",
    a: "İlk 5: anakart kılavuzunu baştan sona okuyun (30 dakika iyi harcanmış zaman), işlemciyi sokete zorlamayın (bükülmüş pinler), RAM yuva konumlarını itmeden önce kontrol edin, kasa bağlantı noktalarını atlamayın (kartı kısa devre yapar), BIOS'ta XMP/EXPO'yu etkinleştirin (bu olmadan RAM %30 daha yavaş çalışır).",
  },
  {
    q: "PC'm ilk denemede açılmazsa ne yapmalıyım?",
    a: "Sıra: monitör anakarta değil GPU'ya takılı mı? RAM doğru yuvalarda mı? EPS (CPU gücü) bağlı mı? 24-pin tam oturdu mu? GPU PCIe gücü bağlı mı? RAM/CPU/GPU'yu yeniden takın. Anakart LED hata göstergesini kontrol edin. Hala takılıysa r/buildapc'ye fotoğraflarla gönderi atın — topluluk hızlıca yardım eder.",
  },
];