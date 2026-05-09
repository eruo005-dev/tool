import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Bir fintech uygulaması geliştirmek, Stripe entegrasyonlu bir SaaS uygulaması geliştirmek değildir. Bu,
    yazılım kılığına girmiş, düzenlenmiş bir finans kurumu inşa etmektir &mdash; yol haritanız üzerinde veto
    yetkisine sahip banka ortakları, uyum denetçileri, dolandırıcılık analistleri ve avukatlarla birlikte.
    Doğru yığını kurarsanız 6&ndash;9 ay içinde piyasaya sürülebilirsiniz. Yanlış yaparsanız, farklılaştırılmış
    tek bir satır kod yazmadan önce 18 ay harcarsınız.
  </p>
);

export const body: ReactElement = (
  <>
    <p>
      Finansal tavsiye değildir. Lisanslı bir danışmana danışın. Fintech, bankacılık hukuku, menkul kıymetler
      düzenlemeleri, vergi ve tüketici korumasını aynı anda kapsar &mdash; kurucuların 300. günde değil, ilk
      günden itibaren fintech hukuk danışmanlığına ihtiyacı vardır.
    </p>

    <h2>Düzenlemeler önce gelir, sonra değil</h2>
    <p>
      ABD'de, eyaletler arası para taşımak için bir para aktarma lisansı gerekir &mdash; 50 eyalet, 50
      başvuru, hepsini kapsamak için kabaca 1&ndash;5 milyon dolar teminat bonosu ve yasal ücret. Müşteri
      mevduatı tutmak, bir banka ortağı gerektirir çünkü neredeyse kesinlikle kendi bankanızı kurmayacaksınız.
      Borç verme, eyalet bazında borç veren lisansları ve Tüketici Kredisi Yasası bildirimlerini gerektirir.
      Yatırımlar, SEC ve FINRA'yı devreye sokar. Kod yazmadan önce ürününüzü düzenleyici yüzeyle
      eşleştirin, çünkü yasal yol teknik mimariyi belirler.
    </p>

    <h2>Hizmet olarak banka ortakları</h2>
    <ul>
      <li>Unit &mdash; tam bankacılık yığını, neobankalar ve gömülü hesaplar için güçlü.</li>
      <li>Synctera &mdash; belirli kullanım durumları için banka sponsorluk pazar yeri.</li>
      <li>Treasury Prime &mdash; çok bankalı platform, yedeklilik için iyi.</li>
      <li>Column &mdash; geliştirici odaklı, doğrudan banka (ara katman değil).</li>
      <li>Bond (şimdi FIS'in parçası) ve Mercury hazine tipi hesaplar için.</li>
      <li>Plaid, Finicity ve MX hesap bağlama ve veri toplama için (mevduat değil).</li>
    </ul>

    <h2>Para hareketi gerçekten zordur</h2>
    <p>
      ACH ucuzdur ancak 1&ndash;3 iş günü sürer ve kolayca tersine çevrilir. RTP ve FedNow anlıktır ancak
      benimsenme kısmi. Havaleler hızlı ve kesindir ancak pahalıdır. Kart ağlarının (Visa, Mastercard) 120
      güne kadar geri ödeme riski ve %1.5&ndash;3 arası takas ücreti vardır. Her ağın kendi hata modları,
      mutabakat kalıpları ve dolandırıcılık profili vardır. Bir ödeme ürünü oluşturmak, kullanım durumunuza
      uyan ağı seçmek anlamına gelir &mdash; en iyi API dokümanlarına sahip olanı değil.
    </p>

    <h2>KYC, AML ve PCI</h2>
    <p>
      Müşterini Tanı ve kara para aklamayı önleme kontrolleri isteğe bağlı değildir. Onfido, Persona, Socure
      ve Alloy kimlik doğrulama ve yaptırım taraması yapar. Şüpheli Faaliyet Raporları dosyalarsınız, bir
      BSA görevlisi bulundurursunuz ve her işlem için beş yıllık bir denetim izi tutarsınız. Kart verilerine
      doğrudan dokunursanız, PCI-DSS uyumluluğu devreye girer &mdash; çoğu girişim, kart numaralarının
      altyapınıza hiç ulaşmaması için Stripe, Marqeta veya Lithic ile tokenize ederek bundan kaçınır.
    </p>

    <h2>Dolandırıcılık ve sorumluluk</h2>
    <p>
      Dolandırıcılık amansız ve düşmancadır. İlk haftadan itibaren hesap ele geçirme girişimleri, sentetik
      kimlik dolandırıcılığı ve işlem aklama bekleyin. Savunma katmanları: kartın bulunmadığı işlemler için
      3D Secure, cihaz parmak izi (Sift, Fingerprint), hız limitleri ve gerçek zamanlı ML puanlaması. Kart
      işlemlerinde geri ödemeler, tüketici fintech'inde gelirin %0.5&ndash;2'sini yer ve oranınız %1'i
      aşarsa sizi yüksek riskli tüccar kategorilerine itebilir. Yetkisiz işlemlerin sorumluluğu, E
      Yönetmeliği uyarınca genellikle müşteriye değil size aittir.
    </p>

    <h2>Kendi kendine yetme yolları</h2>
    <p>
      Küçük ekipler için iki kanıtlanmış giriş noktası: dikey neobanka (yetersiz hizmet verilen bir niş
      seçin &mdash; kamyoncular, içerik üreticileri, göçmenler &mdash; ve onlar için tam yığını oluşturun)
      veya gömülü ödemeli dikey SaaS (belirli bir sektöre yazılım satın ve üzerine ödemeleri katmanlayın,
      bu size tam bankacılık yığınına sahip olmadan dağıtım sağlar). İkinci yol, daha düşük düzenlemeli,
      gelire daha hızlı ulaşan ve yatırımcılar tarafından giderek daha fazla tercih edilen yoldur.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Uyum maliyetini hafife almak &mdash; ilk yıl lisanslar, denetimler ve danışmanlık için 200 bin&ndash;500
      bin dolar bekleyin. Yerinde bir banka ortağı olmadan piyasaya sürüp, ilk işlemin yerleşmesi gerektiğinde
      telaş yapmak. Denetim izini atlamak &mdash; düzenleyiciler 2019'dan belirli bir işlem isteyecek ve
      ona sahip olmanız gerekir. Ürün hızına aşırı odaklanıp uyumluluğu bir ürün gereksinimi yerine bir
      engel olarak görmek.
    </p>

    <h2>Sonuç</h2>
    <p>
      Fintech, üzerinde bir yazılım katmanı bulunan, öncelikle düzenlenmiş iş disiplinidir. Banka ortağınızı
      seçin, fintech hukuk danışmanı tutun veya sözleşme yapın, ilk tel çerçeveden itibaren KYC/AML'yi
      kapsayın ve lansmandan önce dolandırıcılığa karşı tasarlayın. Bu alanda kazanan şirketler en hızlı
      gönderim yapanlar değildir &mdash; uyumluluğu rekabetçi bir hendek olarak görenlerdir.
    </p>
  </>
);