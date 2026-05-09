import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Barkodlar birbirinin yerine geçebilir gibi görünür — beyaz üzerinde siyah çubuklar, bir tarayıcı bip sesi, bir sorgulama — ama öyle değiller. Code 128, rastgele ASCII karakterleri taşır; EAN-13, 13 haneyle sınırlıdır; QR kodları kilobaytlar tutar; Data Matrix hasara dayanıklıdır. Yanlış formatı seçmek, başarısız taramalar, reddedilen sevkiyatlar veya perakende uyumluluk ihlalleri anlamına gelir. Bu kılavuz, baskın doğrusal ve 2D formatları, her birinin aslında ne için olduğunu, veri kapasitesini, tarayıcı uyumluluğunu, baskı boyutu minimumlarını, kontrol basamağı kurallarını ve sizi sürprizsiz çalışan bir etikete ulaştıracak varsayılanları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Doğrusal ve 2D — ilk karar</h2>
    <p>
      <strong>Doğrusal (1D) barkodlar</strong>, veriyi tek bir eksen boyunca çubuk genişliklerinde kodlar. Basit, eski sistemlerle uyumlu, ucuz lazer tarayıcılarla çalışır. Sınırlı kapasite (genellikle 20-40 karakter).
    </p>
    <p>
      <strong>2D barkodlar</strong>, veriyi bir matriste (kareler veya noktalardan oluşan bir ızgara) kodlar. Çok daha yüksek kapasite — QR kodları ~3 KB'a kadar tutar. Kamera tabanlı veya görüntüleme tarayıcıları gerektirir (2026'da evrensel — her akıllı telefon buna uygundur).
    </p>
    <p>
      Temel kural: birkaç haneyi kodluyorsanız ve perakende kasası uyumluluğuna ihtiyacınız varsa, doğrusal kullanın. URL'leri, JSON yüklerini veya 20 karakterden uzun herhangi bir şeyi kodluyorsanız, 2D kullanın.
    </p>

    <h2>Gerçekten karşılaşacağınız doğrusal formatlar</h2>
    <p>
      <strong>UPC-A:</strong> 12 hane. Kuzey Amerika perakendesinde baskın. Çoğu büyük mağaza perakendecisinde ürün listelemesi için gereklidir. İlk hane = ürün kategorisi; sonraki 5 = üretici kodu; sonraki 5 = ürün; son = kontrol basamağı.
    </p>
    <p>
      <strong>EAN-13:</strong> 13 hane. Uluslararası perakende standardı. UPC-A'nın bir üst kümesidir — bir UPC-A barkodu, başında sıfır olan bir EAN-13'tür. Avrupa/Asya pazarları için EAN-13 kullanın.
    </p>
    <p>
      <strong>EAN-8:</strong> 8 hane. Çok küçük ürünler (ruj, sakız) için kompakt versiyon. Sınırlı ürün kodu alanı; yeni tahsisler için nadiren kullanılır.
    </p>
    <p>
      <strong>Code 128:</strong> tüm 128 ASCII karakterini kodlar, değişken uzunluk. Nakliye ve lojistiğin işgücü — FedEx, UPS, USPS'in tamamı kullanır. Aynı veri için Code 39'dan daha yoğundur.
    </p>
    <p>
      <strong>Code 39:</strong> büyük harfler, rakamlar ve birkaç sembol. Daha eski, Code 128'den daha az yoğun, ancak bazı devlet ve otomotiv iş akışlarında (AIAG) hala gereklidir.
    </p>
    <p>
      <strong>ITF-14 (Interleaved 2 of 5):</strong> 14 hane. Perakende birimleri içeren nakliye kolilerinde kullanılır — "dış kutu" kodu.
    </p>

    <h2>2D formatlar — kapasiteye ihtiyacınız olduğunda kullanın</h2>
    <p>
      <strong>QR Kodu:</strong> baskın 2D format. 7089 haneye veya ~2953 bayta kadar. Her açıdan okur (3 köşede konum işaretleri). %30 hasara kadar hata düzeltme. ~2018'den beri her akıllı telefonda yerel kamera desteği. Tüketiciye yönelik her şey için varsayılan seçim.
    </p>
    <p>
      <strong>Data Matrix:</strong> çok kompakt (küçük boyutlarda en küçük 2D format). Endüstriyel işaretleme, tıbbi cihaz izlenebilirliği ve küçük elektronikte baskın. Küçük boyutlarda okur — 2mm'lik bir kareye basılabilir.
    </p>
    <p>
      <strong>PDF417:</strong> istiflenmiş doğrusal format. Ehliyetlerde, biniş kartlarında, dikdörtgen en-boy oranının kareden daha iyi uyduğu nakliye etiketlerinde kullanılır.
    </p>
    <p>
      <strong>Aztec Kodu:</strong> QR'a benzer kapasite; toplu taşıma biletlerinde (özellikle Avrupa demiryolu), havayolu biniş kartlarında kullanılır. Merkezi hedef tahtası konum işaretidir.
    </p>
    <p>
      <strong>MaxiCode:</strong> Paket yönlendirme için UPS'e özel format.
    </p>

    <h2>Bir bakışta veri kapasitesi</h2>
    <p>
      <strong>UPC/EAN:</strong> yalnızca 8-13 hane.
    </p>
    <p>
      <strong>Code 39:</strong> pratik maksimum ~40 büyük harf-alfanümerik karakter.
    </p>
    <p>
      <strong>Code 128:</strong> pratik maksimum ~80 ASCII karakteri.
    </p>
    <p>
      <strong>Data Matrix:</strong> 2335 ASCII karakterine kadar.
    </p>
    <p>
      <strong>QR Kodu:</strong> 4296 alfanümerik veya 2953 ikili bayta kadar.
    </p>
    <p>
      <strong>PDF417:</strong> 1850 ASCII karakterine kadar.
    </p>

    <h2>Perakende uyumluluğu — isteğe bağlı değil</h2>
    <p>
      <strong>Amazon'da satış:</strong> UPC veya EAN gerekli, GS1'den (resmi kayıt kuruluşu) satın alınmalıdır. Uydurma kodlar listenizin askıya alınmasına neden olur.
    </p>
    <p>
      <strong>Perakende mağazalarında satış:</strong> UPC-A (ABD) veya EAN-13 (Avrupa). Perakendeciler kasada tarar — kod küresel GS1 veritabanında olmalıdır.
    </p>
    <p>
      <strong>Nakliye:</strong> taşıyıcılar kendi etiketlerini tanımlar. FedEx/UPS, takip numaraları için Code 128 ve yönlendirme için MaxiCode kullanır.
    </p>
    <p>
      <strong>İlaç (ABD DSCSA):</strong> Ürün kimliği, parti, son kullanma tarihi, seri numarası için GS1 uygulama tanımlayıcılarıyla Data Matrix. Reçeteli ilaç birimleri için zorunludur.
    </p>

    <h2>Kontrol basamakları — sessiz koruyucu</h2>
    <p>
      Çoğu perakende barkod formatı bir kontrol basamağı içerir — diğerlerinden bir modulo algoritması kullanılarak hesaplanan son basamak. 12 UPC basamağından 11'ini okuyan ve eşleşmeyen bir kontrol hesaplayan bir tarayıcı taramayı reddeder.
    </p>
    <p>
      <strong>UPC-A / EAN-13:</strong> mod-10 ağırlıklı toplam.
    </p>
    <p>
      <strong>Code 128:</strong> mod-103 sağlama toplamı.
    </p>
    <p>
      <strong>QR ve Data Matrix:</strong> Reed-Solomon hata düzeltme kullanır, bu daha da ileri gider — yalnızca hataları tespit etmekle kalmaz, kısmen hasarlı kodlardan kurtulabilirler.
    </p>
    <p>
      <strong>Kontrol basamaklarını elle hesaplamayın.</strong> Bunu oluşturucunun yapmasına izin verin. Elle hesaplanan UPC kodları, iade edilen etiketlerin yaygın bir kaynağıdır.
    </p>

    <h2>Baskı boyutu ve çözünürlük</h2>
    <p>
      Barkodların minimum modül boyutları vardır (en küçük çubuk veya karenin genişliği). Çok küçük yazdırırsanız tarayıcı tek tek öğeleri çözemez.
    </p>
    <p>
      <strong>UPC-A:</strong> nominal %100 boyutu 1.469" genişlik, 1.02" yüksekliktir. Nominalin %80-200'ü aralığına izin verilir. %80'in altında tarayıcılar zorlanır.
    </p>
    <p>
      <strong>Code 128:</strong> 300 DPI baskıda tipik minimum modül 0.010". Termal yazıcılarda iyi küçülür.
    </p>
    <p>
      <strong>QR Kodu:</strong> telefon taraması için önerilen minimum 1cm × 1cm'dir. Bunun altında makro taramaya ihtiyacınız vardır.
    </p>
    <p>
      <strong>Sessiz bölge:</strong> barkodun etrafındaki boş alan. Atlanması taramayı bozar. Doğrusal kodların her iki ucunda 10× modül genişliğinde sessiz alana ihtiyacı vardır; QR kodlarının matrisin etrafında 4 modül beyaza ihtiyacı vardır.
    </p>

    <h2>Renk ve kontrast</h2>
    <p>
      Barkodların çubuklar ve arka plan arasında yüksek kontrasta ihtiyacı vardır.
    </p>
    <p>
      <strong>Beyaz üzerinde siyah</strong> güvenli varsayılandır.
    </p>
    <p>
      <strong>Renkli barkodlar</strong> çalışabilir ancak tarayıcı reddi riski taşır. Beyaz üzerinde kırmızı çubuklar yaygın lazer tarayıcılarda başarısız olur (lazer kırmızıdır ve kırmızı üzerinde beyaz, beyaz üzerinde beyaz olarak okunur). Beyaz/krem üzerinde koyu mavi veya siyah en güvenlisidir.
    </p>
    <p>
      <strong>Ters barkodlar</strong> (siyah üzerinde beyaz çubuklar) onları destekleyen 2D formatlarda çalışır ancak çoğu doğrusal tarayıcıyı bozar.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Kendi UPC'nizi oluşturmak.</strong> Perakendeciler GS1 kaydını kontrol eder. Uydurma bir UPC, ürününüzün listeden çıkarılmasına neden olur. Kodları GS1'den satın alın veya bir ürün kayıt hizmeti kullanın.
    </p>
    <p>
      <strong>Sessiz bölgeyi atlamak.</strong> Bir barkodu çubukların hemen yanında metin veya süslemeyle çevrelemek taramaları bozar.
    </p>
    <p>
      <strong>Taranmayan veriler için QR kullanmak.</strong> Kimsenin fotoğraflamadığı bir fişe basılan QR kodu boşa harcanmış mürekkeptir. Formatı iş akışına uydurun.
    </p>
    <p>
      <strong>QR kodlarında URL'leri izleme olmadan saklamak.</strong> Hedefi daha sonra değiştirmeniz gerekirse, QR'yi nihai URL'ye değil, kontrol ettiğiniz bir URL'ye (bir yönlendirmeyle) yönlendirin. Aksi takdirde yeniden basım tek seçeneğinizdir.
    </p>
    <p>
      <strong>Basılı malzemelerde küçük, düşük hata düzeltmeli QR.</strong> Fiziksel her şey çizilecektir. Baskıda orta veya yüksek hata düzeltme (%15 veya %25) kullanın, boyutu biraz artırsa bile.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Barkodları{" "}
      <a href="/tools/barcode-generator">barkod oluşturucu</a> ile oluşturun ve test edin. URL veya vCard yükleriyle 2D kodlara ihtiyacınız olduğunda{" "}
      <a href="/tools/qr-code-generator">QR kodu oluşturucu</a> ile ve barkod yükünün içinde kodlamak için benzersiz kimliklere ihtiyacınız varsa{" "}
      <a href="/tools/uuid-generator">UUID oluşturucu</a> ile eşleştirin.
    </p>
  </>
);