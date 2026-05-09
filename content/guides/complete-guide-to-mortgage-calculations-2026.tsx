export const intro = (
  <>
    <p>
      Çoğu mortgage hesaplayıcısı size aylık bir rakam söyler ve orada durur. Bu kılavuz
      ise tam tersi yönde ilerler &mdash; bir ev kredisi satın alırken, yeniden finanse
      ederken veya erken ödeme yaparken önemli olan her hesaplama için eksiksiz bir
      referanstır. Her formül, çözümlü bir örnekle birlikte verilmiş, her ücret
      ayrıştırılmış ve her yaygın hata işaretlenmiştir.
    </p>
    <p>
      Kılavuz, baştan sona okuyabileceğiniz (yaklaşık 15 dakika sürer) veya ihtiyacınız
      olan bölüme atlayabileceğiniz şekilde düzenlenmiştir. Ev arıyorsanız, satın
      alınabilirlik ve PITI ile başlayın. Halihazırda bir mortgage'ınız varsa,
      amortisman, erken ödeme ve yeniden finansman başabaş noktasına geçin. İlk kez ev
      alacaksanız, tamamını bir kez okuyun.
    </p>
  </>
);

export const toc = [
  { id: "piti", label: "PITI: dört gerçek bileşen" },
  { id: "amortization", label: "Amortisman formülü ve matematiği" },
  { id: "apr", label: "APR vs faiz oranı vs APY" },
  { id: "affordability", label: "Satın alınabilirlik: 28/36 ve ötesi" },
  { id: "down-payment", label: "Peşinat: %20 efsanesi + gerçeklik" },
  { id: "pmi", label: "PMI matematiği ve nasıl kaldırılacağı" },
  { id: "closing-costs", label: "Kategoriye göre kapanış maliyetleri" },
  { id: "prepayment", label: "Erken ödeme: ekstra paraların en çok işe yaradığı yer" },
  { id: "refinance", label: "Yeniden finansman başabaş formülü" },
  { id: "escrow", label: "Emanet hesapları: nasıl çalışır" },
  { id: "fixed-vs-arm", label: "Sabit vs ARM: ARM'ler ne zaman mantıklıdır" },
  { id: "fifteen-vs-thirty", label: "15 yıl vs 30 yıl: gerçek karşılaştırma" },
  { id: "tax-deduction", label: "Mortgage faiz indirimi (ABD)" },
  { id: "mistakes", label: "En büyük 10 hata" },
];

export const body = (
  <>
    <h2 id="piti">PITI: bir mortgage ödemesinin dört gerçek bileşeni</h2>
    <p>
      Yalnızca &ldquo;anapara ve faiz&rdquo; gösteren her mortgage hesaplayıcısı, gerçek
      aylık maliyetinizi %25-40 oranında eksik gösterir. Borç vereninizin her ay tahsil
      ettiği gerçek kalem PITI'dir: <strong>A</strong>napara (Principal),{" "}
      <strong>F</strong>aiz (Interest), <strong>V</strong>ergi (Taxes),{" "}
      <strong>S</strong>igorta (Insurance). Buna bazen PMI ve AİD de eklenir.
    </p>
    <ul>
      <li>
        <strong>Anapara (Principal)</strong>: ödemenizin kredi bakiyesini azaltan kısmı.
        Küçük başlar (1. yıl: ödemenin ~%14'ü), 30. yılda ~%99'a çıkar.
      </li>
      <li>
        <strong>Faiz (Interest)</strong>: borç verenin ücreti. 30 yıllık bir kredinin
        %6,5 faizle 1. yılı: ödemenizin ~%86'sı faizdir. Amortisman eğrisi büyük ölçüde
        ön yüklüdür ve bunun erken ödeme zamanlaması için önemli etkileri vardır (aşağıda
        ele alınmıştır).
      </li>
      <li>
        <strong>Vergi (Taxes)</strong>: emanet hesabı üzerinden ödenen emlak vergisi.
        Bölgeye göre değişir &mdash; düşük vergili eyaletlerde (Hawaii, Alabama) yıllık
        ev değerinin %0,3-0,5'i, yüksek vergili eyaletlerde (New Jersey, Illinois,
        Texas'ın eyalet gelir vergisi olmaması takası) %2-2,5'i.
      </li>
      <li>
        <strong>Sigorta (Insurance)</strong>: ayrıca emanete alınan ev sahibi sigortası.
        400.000$'lık bir ev için tipik olarak yılda 1.200-2.500$. Kıyı/orman yangını
        bölgelerinde daha fazla.
      </li>
    </ul>
    <p>
      Çözümlü örnek: 400.000$'lık ev, %20 peşinat (80.000$), 320.000$ kredi, %6,5 faiz
      oranı, 30 yıl, %1,2 emlak vergisi, yılda 1.500$ sigorta:
    </p>
    <ul>
      <li>A&amp;F (aşağıdaki formül): ayda 2.022$</li>
      <li>Emlak vergisi: ayda 400$ (yılda 4.800$ &divide; 12)</li>
      <li>Sigorta: ayda 125$ (yılda 1.500$ &divide; 12)</li>
      <li><strong>Toplam PITI: ayda 2.547$</strong></li>
    </ul>
    <p>
      Reklamı yapılan A&amp;F rakamı (2.022$), gerçek aylık maliyetten (2.547$) %21 daha
      düşüktür. Her zaman PITI'ye karşı bütçe yapın. Rakamları kendiniz{" "}
      <a href="/tools/mortgage-calculator">mortgage hesaplayıcısında</a> çalıştırın.
    </p>

    <h2 id="amortization">Amortisman formülü</h2>
    <p>
      Sabit faizli bir mortgage üzerindeki aylık anapara ve faiz ödemesi tek bir formül
      kullanır. Bunu ezberleyin:
    </p>
    <pre>{`M = P × [r(1 + r)^n] / [(1 + r)^n − 1]`}</pre>
    <p>
      Burada: M = aylık ödeme, P = kredi anaparası, r = aylık faiz oranı (yıllık
      oran &divide; 12), n = toplam aylık ödeme sayısı (yıl &times; 12). 320.000$,
      %6,5 faiz, 30 yıl ile çözümlü örnek:
    </p>
    <ul>
      <li>r = 0,065 / 12 = 0,005417</li>
      <li>n = 360</li>
      <li>(1,005417)^360 = 7,026</li>
      <li>M = 320.000 &times; (0,005417 &times; 7,026) / (7,026 - 1)</li>
      <li>M = 320.000 &times; 0,038059 / 6,026</li>
      <li>M = ayda 2.022,62$</li>
    </ul>
    <p>
      Excel veya Google Sheets'te:{" "}
      <code>=PMT(0.065/12, 360, -320000)</code> &rarr; -2022.62. Negatif kredi tutarı
      kuralı, PMT'nin girişleri pozitif olarak ele almasındandır.
    </p>
    <p>
      <strong>Her ay faiz ve anapara arasındaki dağılım:</strong>
    </p>
    <ul>
      <li>Bu ayki faiz = kalan bakiye &times; aylık oran</li>
      <li>Bu ayki anapara = aylık ödeme &minus; bu ayki faiz</li>
      <li>Yeni bakiye = eski bakiye &minus; bu ayki anapara</li>
    </ul>
    <p>
      1. Ay: faiz = 320.000 &times; 0,005417 = 1.733,44$; anapara = 2.022,62 -
      1.733,44 = 289,18$. 360. Ay (son): faiz kuruşlardır, anapara ödemenin tamamıdır.
      Değişim kademeli olarak gerçekleşir; anaparanın tek bir ödemede faizi geçtiği
      nokta (crossover), %6,5 faizli 360 aylık bir kredinin yaklaşık 230. ayı
      civarındadır.
    </p>

    <h2 id="apr">APR vs faiz oranı vs APY</h2>
    <p>
      Üç terim sürekli karıştırılır. Borç veren teklifleri oranı kullanır; karşılaştırma
      APR kullanmalıdır; tasarruf hesapları APY kullanır.
    </p>
    <ul>
      <li>
        <strong>Faiz oranı (Interest rate)</strong>: kredi sözleşmenizdeki çıplak yüzde.
        Aylık A&amp;F'nizi hesaplamak için kullanılır.
      </li>
      <li>
        <strong>APR (Yıllık Yüzde Oranı)</strong>: oran artı çoğu borç veren ücreti,
        kredi vadesi boyunca amorti edilir. Federal yasa (TILA, Regulation Z) açıklama
        yapılmasını zorunlu kılar. Borç verenler arasında her zaman APR'yi APR ile
        karşılaştırın, asla ham oranı karşılaştırmayın. Mortgage kredilerinde oran ile
        APR arasındaki fark genellikle %0,1-0,8'dir.
      </li>
      <li>
        <strong>APY (Yıllık Yüzde Getiri)</strong>: bileşik faiz dahil edildiğinde
        efektif yıllık getiri. Krediler için değil, tasarruf hesapları için geçerlidir.
        <a href="/learn/apy">APY sözlük girişine</a> bakın.
      </li>
    </ul>
    <p>
      Örnek: Borç Veren A, 300.000$'lık bir kredide %6,0 faiz oranı ve 4.000$ ücret
      teklif ediyor. Borç Veren B, %6,5 faiz oranı ve ücretsiz teklif ediyor. APR
      karşılaştırması:
    </p>
    <ul>
      <li>Borç Veren A: %6,0 oran + amorti edilmiş 4.000$ ücret = ~%6,18 APR</li>
      <li>Borç Veren B: %6,5 oran + 0$ ücret = %6,5 APR</li>
    </ul>
    <p>
      Borç Veren A, daha yüksek ücretlere rağmen APR'de kazanır, çünkü 4.000$'ın 30 yıl
      boyunca amorti edilmesi, tam vade boyunca %0,5'lik bir orandan daha az etkilidir.
      Ancak yalnızca 5 yıl kalırsanız, Borç Veren B'nin ücretsiz yapısı daha ucuzdur.
      Her zaman APR'yi gerçek zaman ufkunuz için hesaplayın.
    </p>

    <h2 id="affordability">Satın alınabilirlik: 28/36 kuralı ve ötesi</h2>
    <p>
      Klasik satın alınabilirlik ölçütü iki oran kullanır:
    </p>
    <ul>
      <li>
        <strong>Ön uç oranı (%28)</strong>: PITI &le; brüt aylık gelirin %28'i.
        100.000$ brüt gelirde (ayda 8.333$), bu ayda 2.333$ PITI tavanıdır.
      </li>
      <li>
        <strong>Arka uç oranı (%36)</strong>: PITI + diğer tüm borçlar (araba kredisi,
        öğrenci kredileri, kredi kartları, nafaka) &le; brüt gelirin %36'sı. 100.000$
        brüt gelirde, bu ayda 3.000$ toplam borç tavanıdır.
      </li>
    </ul>
    <p>
      Borç verenler, %43'e kadar arka uç oranını onaylayabilir (Dodd-Frank'ten
      Nitelikli Mortgage kuralı). Birçok mali planlamacı, %28/36'nın zaten çok agresif
      olduğunu savunur ve iş kaybı, ARM'lerde faiz şoku veya beklenmedik büyük harcamalara
      karşı tampon için %25/30 veya %20/30 önerir. Çerçeve için{" "}
      <a href="/learn/how-much-house-can-i-afford">ne kadar ev alabilirim</a> destek
      sayfasını okuyun.{" "}
      <a href="/tools/mortgage-affordability-calculator">Mortgage satın alınabilirlik
      hesaplayıcısı</a> matematiği yapar.
    </p>

    <h2 id="down-payment">Peşinat: %20 efsanesi + gerçeklik</h2>
    <p>
      &ldquo;%20 peşinat&rdquo; kuralı yasal olarak zorunlu değildir &mdash; konvansiyonel
      kredilerde Özel Mortgage Sigortası'nın (PMI) devreye girdiği eşiktir. Gerçeklik:
    </p>
    <ul>
      <li>
        PMI'lı Konvansiyonel: en az %3 peşinat (Fannie Mae HomeReady, Freddie Mac
        Home Possible). PMI, kredinin yıllık %0,3-1,5'i arasındadır.
      </li>
      <li>
        FHA: Kredi puanı 580+ ile %3,5 peşinat. Mortgage Sigorta Primi (MIP), 2013
        sonrası krediler için kalıcıdır (tüm kredi ömrü boyunca), %20 öz sermayeye
        ulaşılarak iptal edilemez.
      </li>
      <li>VA: Uygun gaziler için %0 peşinat. PMI/MIP yok. Fonlama ücreti %1,25-3,3.</li>
      <li>
        USDA: Uygun kırsal mülkler için %0 peşinat. Gelir sınırları geçerlidir; yıllık
        %0,35 ücret.
      </li>
      <li>
        Konvansiyonel %20+: PMI yok. Daha düşük faiz oranı (tipik olarak %0,125-0,25
        daha iyi). Daha hızlı öz sermaye birikimi.
      </li>
    </ul>
    <p>
      Çoğu alıcı için %5-15 peşinat ideal noktadır: %20'den daha erişilebilir, FHA'nın
      kalıcı MIP'sinden kaçınır ve PMI maliyeti (yatırılabilecek nakdin fırsat maliyetine
      kıyasla) mevcut oranlarda genellikle mali açıdan mantıklıdır. Kendi senaryonuzu{" "}
      <a href="/tools/down-payment-calculator">peşinat hesaplayıcısında</a> çalıştırın.
    </p>

    <h2 id="pmi">PMI matematiği ve nasıl kaldırılacağı</h2>
    <p>
      Özel Mortgage Sigortası, %20'den az öz sermayeniz varsa temerrüde düşmeniz
      durumunda borç vereni (sizi değil) korur. Maliyet: orijinal kredinin yıllık
      %0,3-1,5'i, aylık olarak ödenir. %0,5 PMI ile 300.000$ kredi = yılda 1.500$ =
      ayda 125$.
    </p>
    <p>
      <strong>PMI nasıl kaldırılır</strong>:
    </p>
    <ul>
      <li>
        <strong>%78 LTV'de otomatik iptal</strong>: federal yasa, kredi-değer oranı
        %78'e ulaştığında, orijinal satın alma fiyatına (mevcut piyasa değerine değil)
        dayalı olarak PMI'nın kaldırılmasını zorunlu kılar. %10 peşinatlı 300.000$'lık
        bir evde (270.000$ kredi), bu, bakiyeyi 234.000$'a kadar ödediğiniz zamandır.
      </li>
      <li>
        <strong>%80 LTV'de iptal talebi</strong>: %80 LTV'ye ulaştığınızda daha erken
        kaldırma talep edebilirsiniz. Piyasa değeri artmışsa güncel bir değerleme
        (400-600$ maliyet) gerekebilir.
      </li>
      <li>
        <strong>Kaldırmak için yeniden finansman</strong>: ev değeri sizi %20+ öz
        sermayeye koyacak kadar yükseldiyse, PMI'sız yeni bir konvansiyonel krediye
        yeniden finanse edin.
      </li>
    </ul>

    <h2 id="closing-costs">Kategoriye göre kapanış maliyetleri</h2>
    <p>
      Kapanış tipik olarak kredi tutarının %2-5'i arasındadır. 300.000$'lık bir kredi
      için döküm:
    </p>
    <ul>
      <li><strong>Origination ücreti</strong>: Kredinin %0,5-1'i, 1.500-3.000$.</li>
      <li><strong>İndirim puanları (isteğe bağlı)</strong>: 1 puan = ~%0,25 oran indirimi için kredinin peşin %1'i. 3.000$, %0,25 oran düşüşü satın alır.</li>
      <li><strong>Değerleme</strong>: Müstakil bir ev için 500-800$.</li>
      <li><strong>Kredi raporu</strong>: 30-50$.</li>
      <li><strong>Tapu sigortası</strong>: 1.000-2.500$ (borç veren + malik poliçesi).</li>
      <li><strong>Kayıt ücretleri ve devir vergileri</strong>: eyalet/bölgeye özgüdür. NJ, NY, DC yüksektir (fiyatın %1-2'si). Birçok eyalette minimumdur.</li>
      <li><strong>Peşin ödenen kalemler</strong>: 1-2 aylık emlak vergisi + 12 aylık ev sahibi sigortası + kapanış tarihinden ilk ödemeye kadar peşin ödenen faiz. Kolayca 3.000-5.000$.</li>
      <li><strong>Denetim (kapanıştan ayrı ancak satın alma öncesi)</strong>: tipik 400-600$, eski evler için daha fazla.</li>
    </ul>
    <p>
      300.000$'lık bir krediyi kapatmak için toplam nakit: peşinatın üzerine tipik olarak
      9.000-15.000$. Eyalete özel rakamlar için{" "}
      <a href="/tools/closing-cost-estimator">kapanış maliyeti tahmin aracını</a>{" "}
      kullanın.
    </p>

    <h2 id="prepayment">Erken ödeme: ekstra paraların en çok işe yaradığı yer</h2>
    <p>
      Amortisman eğrisi ön yüklü olduğundan, ekstra anapara ödemelerinin zamanlaması
      son derece önemlidir. 30 yıl boyunca %6,5 faizli 300.000$'lık bir kredide:
    </p>
    <ul>
      <li>Yalnızca 1-7. yıllar için ayda ek 200$ (sonra dur): faizden ~72.000$ tasarruf, 25 yılda ödeme.</li>
      <li>Yalnızca 23-30. yıllar için ayda ek 200$: faizden ~3.500$ tasarruf, 29,5 yılda ödeme.</li>
      <li>30 yıl boyunca ayda ek 200$: faizden ~95.000$ tasarruf, 24 yılda ödeme.</li>
    </ul>
    <p>
      İlk 7 yıl, ömür boyu tasarrufun çoğunu sağlar. Neden? Çünkü 1. yıldaki her ekstra
      anapara doları, 30 yıllık bileşik faiz ücretinden kaçınır; 25. yıldaki aynı dolar
      yalnızca 5 yıldan kaçınır.
    </p>
    <p>
      <strong>Pratik taktikler</strong>:
    </p>
    <ul>
      <li>
        <strong>İki haftada bir ödeme</strong>: her 2 haftada bir aylık ödemenin yarısı.
        Yılda bir tam ekstra ödeme ekler (26 yarım ödeme = 13 tam ödeme). Tipik bir
        30 yıllık kredide ~50.000$ ve ~5 yıl tasarruf sağlar. Çoğu borç veren kayıt
        gerektirir; ücretlere dikkat edin.
      </li>
      <li>
        <strong>Yukarı yuvarlama</strong>: 2.022$'lık ödeme 2.100$ olur. Ekstra 78$/ay
        bileşik kazandırır.
      </li>
      <li>
        <strong>Beklenmedik gelirlerden toplu ödeme</strong>: ikramiyeler, vergi
        iadeleri, miras. 2. yılda anaparaya 5.000$ vs 20. yılda: ömür boyu faizde
        11.000$ vs 400$ tasarruf.
      </li>
    </ul>
    <p>
      <strong>Fırsat maliyeti kontrolü</strong>: ekstra anapara, kredi oranınıza eşit
      (vergi sonrası düzeltilmiş) garantili bir getiri sağlar. %6,5 oranında bu, çoğu
      mükellef için vergi sonrası ~%5,5'tir. Yatırım alternatiflerinizle karşılaştırın.
      Tarihsel %7 reel getirili hisse senetleri, çoğu oranda ekstra anaparayı yener;
      %4-5'teki güvenli varlıklar (tasarruf, mevduat sertifikası) yenmez. Karşılaştırmayı{" "}
      <a href="/tools/compound-interest-calculator">bileşik faiz hesaplayıcısında</a>{" "}
      yapın.
    </p>

    <h2 id="refinance">Yeniden finansman başabaş formülü</h2>
    <p>
      Yeniden finansman, kalan zaman ufkunuzda toplam tasarruf toplam maliyeti aştığında
      mantıklıdır. Formül:
    </p>
    <pre>{`Başabaş ayları = Kapanış maliyetleri / Aylık tasarruf`}</pre>
    <p>
      Örnek: 250.000$ kalan bakiye ile %7,5'ten %6,0'a yeniden finansman. Eski ödeme
      1.748$, yeni ödeme 1.499$. Tasarruf = ayda 249$. Kapanış maliyetleri = 5.000$.
      Başabaş = 5000 / 249 = 20 ay. Evde 20 aydan uzun süre kalacaksanız, yeniden
      finansman mantıklıdır.
    </p>
    <p>
      <strong>Dikkat edilmesi gerekenler</strong>:
    </p>
    <ul>
      <li>
        Vade sıfırlama tuzağı: 22 yılı kalmış 30 yıllık bir krediden yeni bir 30 yıllığa
        yeniden finansman, birikmiş ödeme ilerlemenizi siler. Yeni vadeyi, eski kredide
        kalan yıllardan &le; tutun.
      </li>
      <li>
        Maliyetsiz yeniden finansman pazarlaması: borç veren kapanış maliyetlerini
        öder ancak oranınızı %0,25-0,5 artırır. Yalnızca, oran artışının kaçınılan
        kapanış maliyetlerinden daha az maliyetli olacağı kadar kısa süre kalacaksanız
        değer.
      </li>
      <li>
        Oran kilitleme zamanlaması: başvuru süreci sırasında 30-60 gün için kitleyin.
        Aynı hafta 3-5 borç vereni araştırın (FICO, 14 gün içindeki mortgage oran
        araştırma sorgulamalarını tek bir sorgu olarak sayar).
      </li>
    </ul>

    <h2 id="escrow">Emanet hesapları: nasıl çalışır</h2>
    <p>
      Çoğu borç veren, emlak vergisini ve sigortayı emanet hesabında tutar. Yıllık
      toplamın 1/12'sini her ay mortgage ödemenizle birlikte tahsil eder, bakiyeyi
      (çoğu eyalette) faiz getirmeyen bir hesapta tutar ve faturalar vadesi geldiğinde
      öder. RESPA, yastığı 2 aylık ödemeyle sınırlar.
    </p>
    <p>
      <strong>Emanet açığı</strong>: emlak vergisi veya sigorta yıl ortasında arttığında,
      borç veren aylık ödemenizi yükselterek açığı kapatır. İlk kez ev alanlar için
      2-3. yıllarda vergi değerlendirmeleri ayarlandıkça yaygın bir sürprizdir.{" "}
      <strong>Emanet fazlası</strong>: tersi durum &mdash; borç veren fazlalığı iade
      eder.
    </p>
    <p>
      Bazı borç verenler emanet muafiyeti sunar (vergiyi/sigortayı doğrudan siz
      ödersiniz). Genellikle %20+ öz sermaye gerektirir ve oranınıza %0,125-0,25 ekler.
      Yalnızca toplu vergi faturasını kendiniz güvenilir bir şekilde yönetebiliyorsanız
      ve yastıkta faiz kazanmak istiyorsanız buna değer.
    </p>

    <h2 id="fixed-vs-arm">Sabit vs ARM: ARM'ler ne zaman mantıklıdır</h2>
    <p>
      Sabit: oran tüm vade için kilitlidir. Öngörülebilir. Sahibi tarafından kullanılan
      uzun vadeli evler için varsayılan seçimdir. Değişken Faizli Mortgage (ARM): oran
      başlangıç dönemi için sabittir (5/1, 7/1, 10/1 ARM), ardından bir endeks artı
      marja dayalı olarak yıllık olarak ayarlanır.
    </p>
    <p>
      ARM'ler şu durumlarda mantıklı olabilir:
    </p>
    <ul>
      <li>Ayarlamadan önce satacağınızdan veya yeniden finanse edeceğinizden eminseniz.</li>
      <li>
        Başlangıç oranı, sabit orandan anlamlı derecede düşükse (tipik olarak 5/1 veya
        7/1 ARM'ler için 30 yıllık sabite kıyasla %0,5-1 daha düşük).
      </li>
      <li>
        Yanılıyorsanız en kötü durum ayarlanmış ödemeyi kaldırabiliyorsanız (çoğu ARM,
        bireysel ayarlamaları %2 ve ömür boyu ayarlamaları başlangıç oranının %5-6
        üzerinde sınırlar).
      </li>
    </ul>
    <p>
      ARM'ler faiz oranlarının yükseldiği dönemlerde (2022-2025'in olduğu gibi) daha
      risklidir ve 2008 krizinden kötü bir ün kazanmıştır &mdash; ancak bu, ürünün
      kendisinden ziyade, düşük kredili borçlulara agresif tanıtım oranlı ARM'ler
      tarafından yönlendirilmiştir.
    </p>

    <h2 id="fifteen-vs-thirty">15 yıl vs 30 yıl: gerçek karşılaştırma</h2>
    <p>
      %6,5 (30 yıl) vs %5,75 (15 yıl, tipik olarak 30 yılın %0,5-0,75 altında) ile
      300.000$ kredi üzerinde karşılaştırma:
    </p>
    <ul>
      <li>30 yıl: ayda 1.896$, toplam faiz 383.000$, toplam ödenen 683.000$.</li>
      <li>15 yıl: ayda 2.491$, toplam faiz 148.000$, toplam ödenen 448.000$.</li>
      <li>Fark: %31 daha yüksek ödeme, %61 daha az faiz, 235.000$ tasarruf.</li>
    </ul>
    <p>
      15 yıl, toplam maliyette kazanır. 30 yıl, esneklikte kazanır (daha düşük gerekli
      ödeme, diğer hedefler için nakit akışı bırakır). Hibrit strateji: esneklik için
      30 yılı alın, ancak gönüllü olarak 15 yıllık eşdeğerini ödeyin. Hayat sürpriz
      yaparsa 30 yıllık ödemeye geri dönme seçeneğinizi korursunuz. Destekleyici analizi{" "}
      <a href="/learn/15-vs-30-year-mortgage">15 yıl vs 30 yıl mortgage</a> sayfasında
      okuyun.
    </p>

    <h2 id="tax-deduction">Mortgage faiz indirimi (ABD)</h2>
    <p>
      Federal gelir vergisi, 750.000$'a kadar olan kredilerde (2017 TCJA sonrası; eski
      krediler için 1 Milyon$) mortgage faizinin kalem kalem beyan edilmesine izin verir.
      Kalem kalem beyan, yalnızca kalem kalem toplamınız (mortgage faizi + 10.000$ ile
      sınırlı eyalet/yerel vergiler + hayır kurumu + AGI'nin %7,5'i üzerindeki tıbbi
      giderler) standart kesintiyi (2024 için bekar 14.600$ / evli 29.200$) aşarsa
      standart kesintiyi yener.
    </p>
    <p>
      Gerçeklik: bugün çoğu mortgage sahibi standart kesintiyi kullanır çünkü 2017
      TCJA bunu ikiye katlamıştır. %6,5 faizli 400.000$'lık bir mortgage'de bile 1. yıl
      faizi ~26.000$'dır. Artı 10.000$ SALT sınırı = evli bir çift için 36.000$ kalem
      kalem. Bu, standart kesintinin yalnızca 7.000$ üzerindedir &mdash; %22 diliminde
      kabaca yılda 1.500$ tasarruf sağlar. TCJA öncesindeki büyük kesinti değildir.
    </p>

    <h2 id="mistakes">En büyük 10 mortgage hatası</h2>
    <ol>
      <li>
        A&amp;F'yi &ldquo;gerçek&rdquo; ödeme yerine PITI (gerçek çek %25-40 daha
        büyüktür) olarak ele almak.
      </li>
      <li>
        APR'yi karşılaştırmadan oranları karşılaştırmak (daha düşük oranlı borç verenin
        ücretlerden sonra daha yüksek APR'si olabilir).
      </li>
      <li>
        Tamponsuz %28 PITI oranına zorlamak (iş kaybı + oran ayarlaması marjı
        aşabilir).
      </li>
      <li>
        Borç veren ön onayını maksimize etmek (sırf hak kazanabiliyorsunuz diye o kadar
        ev almalısınız anlamına gelmez).
      </li>
      <li>
        15 yıllık analizi atlamak (çoğu alıcı bunu asla yapmaz; bazıları bunu rahatça
        karşılayabilir).
      </li>
      <li>
        Başabaş noktasını hesaplamadan yeniden finanse etmek (maliyetsiz yeniden
        finansmanlar uzun vadeli kalışlarda ters tepebilir).
      </li>
      <li>
        Her yeniden finansmanda yeni bir 30 yıllığa sıfırlamak (ödeme ilerlemesini
        siler).
      </li>
      <li>
        Şişirilmiş emlak vergisi değerlendirmelerine itiraz etmemek (anlaşmazlıkların
        %50+'sı bir şey kazanır).
      </li>
      <li>
        Teklif zamanında kapanış maliyetlerini unutmak (peşinatın ötesinde kredinin
        %2-5'i genellikle sürprizdir).
      </li>
      <li>
        Marjinal başlangıç tasarrufu için faiz oranlarının yükseldiği döngülerde ARM
        almak.
      </li>
    </ol>

    <h2>Hepsini bir araya getirmek</h2>
    <p>
      Mortgage matematiği, dolar tutarları büyük olduğu için göz korkutucudur, ancak
      formüller basit ve istikrarlıdır. Ezberlenecek iki denklem: aylık A&amp;F
      (amortisman) ve yeniden finansman için başabaş ayları. Diğer her şey
      muhasebedir.
    </p>
    <p>
      En pahalı hatalar formül hataları değildir &mdash; bunlar kapsam hatalarıdır:
      PITI yerine A&amp;F'ye karşı bütçe yapmak, APR yerine oranları karşılaştırmak,
      muhafazakar oran yerine borç veren maksimumuna zorlamak, 15 yıllık alternatifi
      asla modellememek. Bir şey imzalamadan önce senaryolarınızı{" "}
      <a href="/tools/mortgage-calculator">mortgage hesaplayıcısında</a>,{" "}
      <a href="/tools/mortgage-affordability-calculator">satın alınabilirlik
      hesaplayıcısında</a> ve <a href="/tools/refinance-calculator">yeniden finansman
      hesaplayıcısında</a> çalıştırın. Yirmi dakikalık matematik, 30 yıl boyunca beş
      haneli dolar hatalarından kurtarır.
    </p>
  </>
);

export const cta = {
  label: "Ücretsiz mortgage hesaplayıcısında rakamlarınızı çalıştırın",
  targetSlug: "mortgage-calculator",
};

export const faq = [
  {
    q: "Kullanılacak en doğru mortgage formülü hangisidir?",
    a: "Standart amortisman formülü M = P × [r(1+r)^n] / [(1+r)^n − 1], herhangi bir sabit faizli mortgage için tam aylık anapara ve faiz ödemesini verir. Excel'in PMT işlevi aynı matematiği kullanır. P anapara, r aylık oran (yıllık / 12), n aylık ödeme sayısıdır (yıl × 12). Toplam PITI'yi elde etmek için yıllık emlak vergisinin 1/12'sini + yıllık sigortanın 1/12'sini ekleyin.",
  },
  {
    q: "Kapanış maliyetleri için ne kadar bütçe ayırmalıyım?",
    a: "Kredi tutarının %2-5'i tipiktir. 300.000$'lık bir kredide: 6.000$-15.000$. Yüksek vergili eyaletler (NJ, NY, DC) devir vergileri nedeniyle daha yüksektir; düşük vergili eyaletler (TX, FL) daha düşüktür. Kapanış, origination (1.500-3.000$), tapu sigortası (1.000-2.500$), değerleme (500-800$), peşin ödenen vergiler ve sigorta (3.000-5.000$), kayıt ücretleri ve borç veren idari ücretlerini içerir. Her zaman Kredi Tahminini (LE) kontrol edin &mdash; tolerans aralıkları dahilinde bağlayıcıdır.",
  },
  {
    q: "Yeniden finansman ne zaman gerçekten para kazandırır?",
    a: "Yeni oran tasarrufları, kalan zaman ufkunuzda kapanış maliyetlerini aştığında. Formül: başabaş ayları = kapanış maliyetleri / aylık tasarruf. Örnek: 5.000$ kapanış + ayda 250$ tasarruf = 20 ay başabaş. 20 aydan uzun kalın → yeniden finansman kazanır. Yaygın temel kural: %0,75-1 oran düşüşü ve 3+ yıl kalış, yeniden finansmanı tipik olarak değerli kılar. Yeniden finansmanda vadeyi her zaman 30 yıla sıfırlamaktan kaçının (ödeme ilerlemesini siler).",
  },
  {
    q: "Mortgage'ımdaki PMI'yı nasıl kaldırabilirim?",
    a: "Üç yol: (1) %78 kredi-değer oranına (LTV) kadar ödeyin &mdash; federal yasa, orijinal satın alma fiyatına dayalı olarak bu noktada otomatik iptali zorunlu kılar. (2) %80 LTV'de iptal talebinde bulunun &mdash; yeni değerleme gerekebilir (400-600$). (3) Ev değeri, artık %20+ öz sermaye olacak kadar yükseldiyse, yeni bir konvansiyonel krediye yeniden finanse edin. FHA kredilerinin kalıcı MIP'si vardır ve kaldırmak için yeniden finansman gerekir. VA ve USDA'da hiç PMI/MIP yoktur.",
  },
];