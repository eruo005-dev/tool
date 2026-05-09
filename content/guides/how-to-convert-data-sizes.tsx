import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir kilobayt 1.000 bayttır, ancak bazen 1.024 bayt olur ve cevap kime ve ne zaman
      sorduğunuza bağlıdır. RAM üreticileri ve işletim sistemleri ikinin katlarını
      (1.024&nbsp;= 2<sup>10</sup>) kullanır çünkü bellek fiziksel olarak ikili düzende
      organize edilmiştir. Depolama üreticileri (sabit diskler, SSD'ler) onun katlarını
      kullanır çünkü pazarlama rakamları daha büyük görünür. IEC 60027-2 standardı 1998
      yılında ikili versiyonlara kendi öneklerini (KiB, MiB, GiB) vererek ve ondalık
      önekleri (KB, MB, GB) on tabanı için koruyarak bu karışıklığı çözmüştür. Neredeyse
      hiç kimse bu ayrımı net bir şekilde uygulamaz. Ağ bant genişliği genellikle saniye
      başına bit olarak ölçülür, saniye başına bayt değil; bu da &ldquo;100 Mbps
      internet&rdquo; ile &ldquo;100 MB/s disk&rdquo; karşılaştırılırken 8 katı bir
      kafa karışıklığına yol açar. Bu kılavuz, bit ve baytları, ondalık ve ikili önekleri,
      IEC standardını, bant genişliği ile depolama arasındaki farkı ve cevabı %10 veya
      1.000 kat kaçırmadan bu üç dünya arasında nasıl çeviri yapılacağını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bitler ve baytlar</h2>
    <p>
      Bir <strong>bit</strong>, tek bir ikili basamaktır&mdash;0 veya 1. Bir <strong>bayt</strong>
      ise 8 bittir ve 256 farklı değeri veya bir ASCII karakterini temsil etmeye yeterlidir.
      Küçük harf b bit anlamına gelir (Mbps = saniye başına megabit); büyük harf B bayt
      anlamına gelir (MB = megabayt). Bunları karıştırmak 8 kat hatalara yol açar.
    </p>
    <pre>{`1 bayt (B)  = 8 bit (b)
1 nibble    = 4 bit (yarım bayt)

"100 Mbps" = saniyede 100 megabit = 12,5 MB/s
"100 MB/s" = saniyede 100 megabayt = 800 Mbps`}</pre>

    <h2>Ondalık önekler (SI / depolama pazarlaması)</h2>
    <pre>{`1 KB  = 1.000 B         (kilobayt, SI)
1 MB  = 1.000 KB = 1.000.000 B
1 GB  = 1.000 MB = 10⁹ B
1 TB  = 1.000 GB = 10¹² B
1 PB  = 1.000 TB = 10¹⁵ B
1 EB  = 1.000 PB = 10¹⁸ B`}</pre>
    <p>
      Depolama üreticileri disk boyutlarını ondalık olarak belirtir. &ldquo;1 TB&rdquo; bir
      sabit disk 10<sup>12</sup> = 1.000.000.000.000 bayt tutar. İşletim sistemi bunu
      bildirdiğinde, Windows (ikili yorum kullanarak) bunu yaklaşık 931 GB olarak gösterir,
      bu da kullanıcıların kendilerini kandırılmış hissetmelerine neden olur. Disk, etikette
      yazdığı boyuttadır (ondalık) ve 931 ise ikili karşılığıdır.
    </p>

    <h2>İkili önekler (IEC 60027-2)</h2>
    <pre>{`1 KiB = 1.024 B              (kibibayt)
1 MiB = 1.024 KiB = 2²⁰ B    = 1.048.576 B
1 GiB = 1.024 MiB = 2³⁰ B    = 1.073.741.824 B
1 TiB = 1.024 GiB = 2⁴⁰ B    = 1.099.511.627.776 B
1 PiB = 1.024 TiB = 2⁵⁰ B`}</pre>
    <p>
      IEC bu önekleri 1998 yılında özellikle belirsizliği gidermek için tanıttı.
      &ldquo;Kibi,&rdquo; &ldquo;mebi,&rdquo; &ldquo;gibi&rdquo; kulağa tuhaf gelse de
      kesin anlamlıdır. Linux dağıtımları, bazı sunucu araçları ve giderek artan sayıda
      yazılım satıcısı bunları kullanır. Windows ve Apple hala ikili değerleri ondalık
      isimlerle (GB'nin GiB anlamında) gösterir, bu da kafa karışıklığının ana kaynağıdır.
    </p>

    <h2>KB ve KiB arasındaki fark</h2>
    <p>
      Fark ölçek büyüdükçe artar:
    </p>
    <pre>{`Birim  Ondalık        İkili          Fark
KB     1.000          1.024            %2,4
MB     1.000.000      1.048.576        %4,9
GB     10⁹            1,07 × 10⁹       %7,4
TB     10¹²           1,10 × 10¹²      %9,9
PB     10¹⁵           1,13 × 10¹⁵     %12,6`}</pre>
    <p>
      Gigabayt ölçeğinde, yeni sabit diskinizdeki &ldquo;eksik %7&rdquo; ondalık-ikili
      farkıdır, üretici hilesi değil. Terabayt ölçeğinde bu, etiketin %10'u kadardır.
    </p>

    <h2>Bellek ikili kullanır; depolama ondalık kullanır</h2>
    <p>
      RAM modülleri ve CPU önbellekleri ikili miktarlarda satılır çünkü bellek yongaları
      ikinin katları halinde satır ve sütunlar halinde düzenlenmiştir. 16 GB'lık bir DIMM
      gerçekten 16 × 1.073.741.824 = 17,18 milyar bayt tutar. Depolama aygıtları (HDD, SSD,
      USB bellekler) ondalık olarak satılır: &ldquo;2 TB&rdquo; bir SSD, 2 × 10<sup>12</sup>
      = 2 trilyon bayt tutar. İşletim sistemleri genellikle her iki tür boyutu da ondalık
      etiketlerle ikili olarak gösterir, bu nedenle disk alanı her zaman reklamı yapılandan
      daha küçük görünür ve bellek asla böyle görünmez.
    </p>

    <h2>Bant genişliği ve depolama</h2>
    <p>
      Ağ hızı <strong>saniye başına bit</strong> olarak belirtilir. Depolama hızı genellikle
      <strong>saniye başına bayt</strong> olarak belirtilir. Karşılaştırmak için:
    </p>
    <pre>{`100 Mbps internet = 100.000.000 bit/s = 12,5 MB/s
1 Gbps fiber      = 1.000.000.000 bit/s = 125 MB/s
10 Gbps omurga    = 1,25 GB/s

"1200 Mbps" olarak derecelendirilen ev Wi-Fi'si en iyi ihtimalle ~150 MB/s sağlar.
100 Mbps'de 1 GB'lık bir dosyayı indirmek yaklaşık 80 saniye sürer
(10 saniye değil, çünkü 8 katı faktörü vardır).`}</pre>

    <h2>Pratikte dosya boyutları</h2>
    <pre>{`Düz metin e-posta       ~10 KB
JPEG fotoğraf (telefon)  2-5 MB
MP3 şarkı (3,5 dk)      ~3,5 MB
1080p video (1 dk)      ~130 MB
4K video (1 dk)         ~400 MB
Linux ISO               ~3 GB
Tam çözünürlüklü film   ~50 GB (Blu-ray kalitesi)
Büyük veri seti         ~1 TB+`}</pre>

    <h2>Verim hesaplamaları</h2>
    <p>
      İndirme süresini tahmin etmek için, dosya boyutunu bant genişliğine bölün, her ikisini
      de aynı birime dönüştürdükten sonra. 50 Mbps bağlantıda 4 GB'lık bir film: 4 GB × 8 =
      32 Gb; 32 Gb / 0,05 Gbps = 640 sn = 10,7 dakika. Gerçek dünya verimi, protokol yükü
      nedeniyle genellikle reklamı yapılan bant genişliğinin %60-80'i kadardır, bu nedenle
      14 dakika olarak plan yapın.
    </p>

    <h2>Blok boyutları ve dosya sistemleri</h2>
    <p>
      Dosya sistemleri alanı bloklar halinde tahsis eder (modern sistemlerde genellikle 4
      KiB). 1 baytlık bir dosya diskte hala 4 KiB yer kaplar. Milyonlarca küçük dosyanız
      olduğunda, boyutlarının toplamı ile diskteki gerçek kullanımları arasındaki fark
      dramatik olabilir. Unix'teki <code>du</code> gibi araçlar gerçek blok kullanımını
      bildirir; dosya meta verilerini toplayan araçlar mantıksal boyutu bildirir.
    </p>

    <h2>Base64 ve metin kodlama yükü</h2>
    <p>
      İkili veri, metin taşımacılığı için Base64 ile kodlandığında %33 oranında şişer. 1
      MB'lık bir görüntü, 1,33 MB'lık bir dize haline gelir. Bir web API'sinde JSON ile
      kodlanmış ikili veri (Base64 aracılığıyla) bu vergiyi taşır. Büyük yükler için bunun
      yerine ikili taşıma (gRPC, multipart) kullanın.
    </p>

    <h2>Boyutları dürüstçe nasıl raporlamalı</h2>
    <p>
      Hedef kitleniz umursayabilecekse tabanınızı açıkça belirtin: &ldquo;500 GB
      (500.000.000.000 bayt)&rdquo; veya &ldquo;512 GiB (ikili)&rdquo; belirsizliği ortadan
      kaldırır. Yazılım satıcıları, dokümantasyonda giderek artan şekilde IEC öneklerini
      (KiB, MiB, GiB) kullanır ancak kullanıcılara hala ondalık önekleri gösterir çünkü
      &ldquo;MB&rdquo; daha tanınabilirdir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Bit ve baytları karıştırmak.</strong> Mbps saniye başına bittir; MB/s saniye
      başına bayttır. Oran 8'dir. 100 Mbps'lik bir internet planı size 12,5 MB/s indirme
      hızı sağlar, 100 değil.
    </p>
    <p>
      <strong>GB'nin 1.073.741.824 bayt olduğunu varsaymak.</strong> Modern dokümantasyon
      GB'yi ondalık (10<sup>9</sup>) ve GiB'yi ikili (2<sup>30</sup>) olarak ele alır.
      Windows hala ikili değerler için GB kullanır, bu da işletim sistemi raporları ile
      disk etiketleri arasındaki karşılaştırmaları karıştırır.
    </p>
    <p>
      <strong>Windows GB'sini depolama etiketi GB'siyle karşılaştırmak.</strong> 1 TB'lık
      diskiniz Windows'ta 931 GB olarak görünür çünkü Windows ikili GB (aslında GiB) kullanır
      ve disk ondalık TB olarak etiketlenmiştir. Hiçbir şey eksik değildir.
    </p>
    <p>
      <strong>Protokol yükünü göz ardı etmek.</strong> Reklamı yapılan 100 Mbps, pratikte
      TCP/IP başlıkları, yeniden iletimler ve Wi-Fi kodlamasından sonra 60-80 Mbps sağlar.
      Buna göre plan yapın.
    </p>
    <p>
      <strong>Bazı yerlerde &ldquo;KB&rdquo;yi 1.024, bazı yerlerde 1.000 anlamında
      kullanmak.</strong> Belge başına bir kural seçin ve ona bağlı kalın. İkili kastettiğinizde
      KiB/MiB tercih edin.
    </p>
    <p>
      <strong>Disk kullanımını tahmin etmek için mantıksal dosya boyutlarını toplamak.</strong>
      1.000 küçük dosyadan oluşan bir dizin, blok tahsisi nedeniyle toplam baytların toplamından
      daha fazla disk alanı kaplar. Özyinelemeli bir boyut listesi değil, <code>du</code>
      kullanın.
    </p>
    <p>
      <strong>Base64'ün &ldquo;sadece metin&rdquo; olduğunu varsaymak.</strong> İkili veriyi
      %33 oranında şişirir. Büyük yükler için bu, bant genişliği faturaları ve bellek kullanımı
      açısından önemlidir.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Herhangi bir veri boyutunu{" "}
      <a href="/tools/data-size-converter">veri boyutu dönüştürücümüze</a> yapıştırarak hem
      ondalık (KB, MB, GB) hem de ikili (KiB, MiB, GiB) değerleri yan yana görün. İkili
      verinin kodlama sonrası boyutunu kontrol etmek için{" "}
      <a href="/tools/base64-encoder-decoder">Base64 kodlayıcı</a> ve mesafe veya zaman da
      gerektiren daha geniş ölçek dönüşümleri için{" "}
      <a href="/tools/unit-converter">birim dönüştürücü</a> ile birlikte kullanın.
    </p>
  </>
);