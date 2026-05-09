/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Bir AI aracı satın almadan önce hangi soruları sormalıyım?&rdquo; doğru
      sorudur. Yanlış soru ise &ldquo;X, Y&rsquo;den daha iyi mi?&rdquo; — bu,
      verilerinize, yığınınıza, ekibinize ve ne için kullanacağınıza bağlıdır.
      Bu rehber yapılandırılmış bir değerlendirme çerçevesidir: 7 ağırlıklı kriter,
      kırmızı bayrak sinyalleri ve her alıcının kontrol listesinde olması gereken
      yasal/etik sorular.
    </p>
    <p>
      Herhangi bir satıcıyı{" "}
      <a href="/tools/ai-tool-evaluation-scorecard">AI araç değerlendirme skor kartımızla</a> puanlayın —
      iyi bir satın alma danışmanından ücretsiz olarak alacağınız aynı yapılandırılmış düşünceyi zorlar.
    </p>
  </>
);

export const toc = [
  { id: "framework", label: "7 kriterli çerçeve" },
  { id: "questions", label: "Satın almadan önce sorulacak sorular" },
  { id: "compare-fintech", label: "Fintech / dikey AI araçları nasıl karşılaştırılır" },
  { id: "legal", label: "Bilinmesi gereken yasal riskler" },
  { id: "ethics", label: "Etik konular" },
];

export const body = (
  <>
    <h2 id="framework">7 kriterli çerçeve</h2>
    <p>
      Herhangi bir AI aracını bu yedi kriter üzerinden 1-5 arası puanlayın, önemlerine göre ağırlıklandırılmış:
    </p>
    <ul>
      <li>
        <strong>Gizlilik + veri işleme (×3):</strong> Verileriniz üzerinde eğitim yapıyor mu?
        Veriler nerede saklanıyor? Kimler erişebiliyor? Saklama politikası? Vazgeçme seçeneği var mı?
        Eğitim yapılmaması garantisi sözleşmede mi yoksa sadece pazarlama metninde mi?
      </li>
      <li>
        <strong>Testlerinizde çıktı kalitesi (×3):</strong> Aracı kendi gerçek verilerinizle çalıştırın.
        Satıcı demoları, modeli gerçeklikten %30-50 daha iyi gösterecek şekilde hazırlanır.
        Gerçekten önemsediğiniz hata modlarına karşı test edin.
      </li>
      <li>
        <strong>Entegrasyon maliyeti (×2):</strong> Mevcut yığınınıza bağlamak için gereken mühendislik saati.
        Kimlik doğrulama, veri akışı, gözlemlenebilirlik, hata yönetimi. Harika kaliteye sahip ancak
        200 saat entegrasyon gerektiren bir araç, bazen yerel entegrasyonları olan daha zayıf bir araçtan daha kötüdür.
      </li>
      <li>
        <strong>12 aylık toplam sahip olma maliyeti (×2):</strong> Lisans ücretleri + kullanıcı başına + token başına +
        operasyon + eğitim. Yayınlanan &ldquo;ucuz&rdquo; AI araçlarının çoğu, üretim hacminde pahalıdır.
        Beklenen kullanımınızda hesaplamayı yapın.
      </li>
      <li>
        <strong>Satıcı istikrarı (×2):</strong> Fonlama aşaması, nakit akışı, müşteri sayısı,
        son işten çıkarmalar. 2026&rsquo;daki AI girişimleri, olmayı bekleyen bir mezarlıktır —
        18 ay içinde yok olacak bir satıcı seçmek pahalıdır.
      </li>
      <li>
        <strong>Uyumluluk uygunluğu (×2):</strong> SOC 2 Tip II, HIPAA, GDPR, sektöre özel
        sertifikalar. Pazarlama rozeti değil — gerçek denetim raporları.
      </li>
      <li>
        <strong>Geçiş maliyeti (×1):</strong> Veri dışa aktarma formatı, sözleşme kilitlenmesi,
        prompt taşınabilirliği. En ucuz hata fazla ödeme yapmaktır. En pahalısı ise
        terk edemediğiniz bir araca takılıp kalmaktır.
      </li>
    </ul>

    <h2 id="questions">Satın almadan önce sorulacak sorular</h2>
    <ol>
      <li>
        <strong>&ldquo;Taahhüt vermeden önce verilerimizle ücretli bir pilot çalışma yapabilir miyiz?&rdquo;</strong>{" "}
        Gerçek satıcılar evet der. Direnç gösteren satıcılar, demo kalitesinin
        dayanmayacağını işaret ediyordur.
      </li>
      <li>
        <strong>&ldquo;Veri saklama politikanız nedir?&rdquo;</strong>{" "}
        Spesifik olmalı: ne kadar süre, nerede, kimler erişebilir. &ldquo;Sektördeki en iyi uygulamaları takip ediyoruz&rdquo; bir cevap değildir.
      </li>
      <li>
        <strong>&ldquo;Verilerim modellerinizi eğitmek için kullanılacak mı?&rdquo;</strong> Cevap evetse, uzaklaşın (veya farklı bir katman kullanın). Hayırsa, yazılı olarak alın.
      </li>
      <li>
        <strong>&ldquo;İptal edersem verilerime ne olur?&rdquo;</strong>{" "}
        Silme zaman çizelgesi + doğrulama mekanizması. Bazı satıcılar &ldquo;kimliği kaldırılmış&rdquo; verileri sonsuza kadar saklar; bunun ne anlama geldiğini netleştirin.
      </li>
      <li>
        <strong>&ldquo;NDA altında inceleyebileceğimiz bir SOC 2 Tip II raporunuz var mı?&rdquo;</strong>{" "}
        Gerçek bir sertifika, bir denetim raporuyla gelir. Tek başına bir rozet sadece bir logodur.
      </li>
      <li>
        <strong>&ldquo;En son müşteri destekli yıllık tekrarlayan geliriniz (ARR) nedir? Müşteri sayınız?&rdquo;</strong>{" "}
        5 milyon doların altında ARR veya 100&rsquo;den az müşterisi olan satıcılar daha yüksek kaybolma riski taşır.
      </li>
      <li>
        <strong>&ldquo;Bana veri dışa aktarma formatını gösterin.&rdquo;</strong>{" "}
        Temiz JSON veya CSV olmalı, satıcıya özel ikili format değil. Aksi takdirde geçiş maliyetleri patlar.
      </li>
      <li>
        <strong>&ldquo;Model yükseltme sıklığınız nedir?&rdquo;</strong>{" "}
        Temel model üç ayda bir değiştirilirse, çıktı kaliteniz sizi şaşırtacak şekillerde kayabilir. Bazı satıcılar belirli bir model sürümüne kilitlenir; diğerleri döndürür.
      </li>
      <li>
        <strong>&ldquo;Aracın çalışmadığını keşfedersek, iptal süreci nedir?&rdquo;</strong>{" "}
        Net-30, net-90, otomatik yenileme maddeleri. Yıllık sözleşmelerde genellikle sürpriz otomatik yenileme koşulları bulunur.
      </li>
      <li>
        <strong>&ldquo;Bunu [benim tam kullanım senaryom] için kullanan bir müşteriyle konuşabilir miyim?&rdquo;</strong>{" "}
        Spesifiklik önemlidir — &ldquo;sektörünüzdeki bir müşteri&rdquo; iyidir ancak &ldquo;bunu tam olarak sizin kullanacağınız iş akışı için kullanan bir müşteri&rdquo; daha iyidir.
      </li>
    </ol>

    <h2 id="compare-fintech">Fintech ve dikey AI araçları nasıl karşılaştırılır</h2>
    <p>
      Alana özgü AI araçlarının (fintech, sağlık AI&rsquo;sı, hukuk AI&rsquo;sı) ek
      değerlendirmeleri vardır:
    </p>
    <ul>
      <li>
        <strong>Ekibin alan uzmanlığı.</strong> Kurucuların sektörünüzde çalışmış olması gerekir. Finans deneyimi olmadan &ldquo;finans için AI&rdquo; inşa eden genelci AI mühendisleri genellikle uyumluluk uç durumlarını kaçırır.
      </li>
      <li>
        <strong>Düzenleyici bilgi.</strong> Özellikle fintech için: FINRA, SEC, PCI-DSS, KYC/AML yükümlülüklerine aşinalık. Her birini ürünlerinde nasıl ele aldıklarını sorun.
      </li>
      <li>
        <strong>Denetim izleri.</strong> Düzenlemeye tabi sektörler, AI&rsquo;nın aldığı her kararın kaydına ihtiyaç duyar. &ldquo;Model evet dedi&rdquo; yeterli değildir. Girdileri, model sürümünü, çıktıyı ve insan incelemesini kaydeden araçlara bakın.
      </li>
      <li>
        <strong>Sorumluluk çerçevesi.</strong> AI kötü bir tavsiye verirse kim sorumlu? Çoğu satıcı tüm sorumluluğu reddeder; düzenlemeye tabi sektörlerde bu bir anlaşma bozucu olabilir.
      </li>
      <li>
        <strong>Düzenlemeye tabi emsallerde referans müşteriler.</strong> Bir bankanın bir fintech AI aracını onaylaması, on genel kurumsal referanstan daha değerlidir.
      </li>
    </ul>
    <p>
      Özellikle döviz/uluslararası ödeme araçları için: döviz kuru şeffaflığı, gizli FX marjları ve gerçekten ihtiyacınız olan tüm para birimlerini destekleyip desteklemedikleri hakkında soru sorun (sadece pazarlama ilk 10&rsquo;u değil).
    </p>

    <h2 id="legal">İşletmede AI kullanımıyla ilgili bilinmesi gereken yasal riskler</h2>
    <p>
      AI&rsquo;yı müşteriye yönelik bağlamlarda dağıtmadan önce hukukla netleştirilmesi gereken beş alan:
    </p>
    <ol>
      <li>
        <strong>Veri gizliliği yasaları.</strong> GDPR (AB), CCPA (Kaliforniya), eyaletten eyalete değişen ABD yamaları, sektöre özel (sağlık için HIPAA, finans için GLBA). Kişisel verilerin AI tarafından işlenmesi bunların çoğunu tetikler.
      </li>
      <li>
        <strong>Telif hakkı + fikri mülkiyet.</strong> AI tarafından oluşturulan içeriğin telif hakkı durumu belirsizdir. ABD Telif Hakkı Ofisi, tamamen AI tarafından oluşturulan eserlerin telif hakkına tabi olmadığına karar vermiştir. Önemli insan yazarlığı olabilir. Düzenleme sürecinizi belgeleyin.
      </li>
      <li>
        <strong>Bildirim gereklilikleri.</strong> Bazı yargı bölgeleri, AI insanlar hakkında önemli kararlar alırken (işe alım, kredi, sağlık) AI bildirimi gerektirir. Yargı bölgenizi kontrol edin.
      </li>
      <li>
        <strong>Çıktı sorumluluğu.</strong> AI&rsquo;nız halüsinasyon görürse ve bir müşteri yanlış bilgiye güvenirse, kim sorumlu? Çoğu satıcı sözleşmesi sorumluluğu reddeder; siz taşıyabilirsiniz. Buna göre plan yapın.
      </li>
      <li>
        <strong>Önyargı / ayrımcılık.</strong> AI odaklı işe alım, borç verme ve konut kararları, mevcut ayrımcılık karşıtı yasalara tabidir (Başlık VII, ECOA, Adil Konut Yasası). AI sizi muaf tutmaz.
      </li>
    </ol>

    <h2 id="ethics">AI dağıtmadan önce etik konular</h2>
    <ul>
      <li>
        <strong>Kullanıcılara karşı şeffaflık.</strong> Müşteriler AI ile etkileşime girdiğinde AI katılımını açıklayın. Gizli AI, keşfedildiğinde bir güven katilidir.
      </li>
      <li>
        <strong>Önemli kararlarda insan incelemesi.</strong> İşe alım, işten çıkarma, borç verme, sağlık — bunların döngüde bir insana ihtiyacı vardır. AI karar verici değil, danışman olarak.
      </li>
      <li>
        <strong>Önyargı testi.</strong> AI&rsquo;nızı, alanınızda tarihsel olarak ayrımcılığa maruz kalan gruplardan temsili örneklerle çalıştırın. Sonuçları belgeleyin.
      </li>
      <li>
        <strong>Çalışan etkisi.</strong> Çalışanların yerini alan AI dağıtımı, sadece bir not değil, gerçek bir konuşmayı hak eder. Yeniden beceri kazandırma, geçiş desteği, net iletişim.
      </li>
      <li>
        <strong>Çevresel etki.</strong> <a href="/learn/llm">LLM</a> <a href="/learn/inference">çıkarımı</a> gerçek bir karbon maliyetine sahiptir. Yüksek hacimli kullanım durumlarında araç seçiminde bunu göz önünde bulundurun.
      </li>
      <li>
        <strong>Veri kullanımı için onay.</strong> AI&rsquo;yı yalnızca açık onayla müşteri verileri üzerinde eğitin. Yeniden onay almadan mevcut verileri AI eğitimi için yeniden kullanmak çoğu yargı bölgesinde ihlaldir.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "AI satıcınızı puanlayın (ücretsiz, yapılandırılmış)",
  targetSlug: "ai-tool-evaluation-scorecard",
};

export const faq = [
  {
    q: "Bir AI aracı satın almadan önce hangi soruları sormalıyım?",
    a: "İlk 10: verilerimizle ücretli pilot, veri saklama ayrıntıları, verilerimiz üzerinde eğitim e/h, iptal sonrası silme, SOC 2 Tip II raporu, ARR/müşteri sayısı, veri dışa aktarma formatı, model yükseltme sıklığı, iptal süreci, tam kullanım senaryosunu kullanan müşteri. Bunlardan herhangi birinde belirsiz yanıtlar kırmızı bayraktır.",
  },
  {
    q: "Farklı fintech AI araçlarını nasıl inceler ve karşılaştırırım?",
    a: "Standart 7 kriterli çerçeve ARTILARI: ekibin alan uzmanlığı, düzenleyici bilgi (FINRA, SEC, PCI-DSS, KYC/AML), denetim izleri, sorumluluk çerçevesi, düzenlemeye tabi emsallerde referans müşteriler. Finans geçmişi olmayan genelci AI mühendisleri genellikle uyumluluk uç durumlarını kaçırır.",
  },
  {
    q: "İşletmemde AI kullanımıyla ilgili hangi yasal riskleri bilmeliyim?",
    a: "Beş alan: veri gizliliği yasaları (GDPR, CCPA, sektöre özel), telif hakkı/FM (tamamen AI tarafından oluşturulan çalışma ABD&rsquo;de telif hakkına tabi değildir), AI önemli kararlar aldığında bildirim gereklilikleri, çıktı sorumluluğu (çoğu satıcı bunu reddeder; siz taşıyabilirsiniz), önyargı/ayrımcılık yasası (AI sizi Başlık VII, ECOA vb.&rsquo;den muaf tutmaz).",
  },
  {
    q: "AI kullanmadan önce hangi etik konuları düşünmeliyim?",
    a: "Kullanıcılara karşı şeffaflık (AI&rsquo;yı açıklayın), önemli kararlarda insan incelemesi (işe alım, borç verme, sağlık), tarihsel olarak ayrımcılığa uğramış gruplara karşı önyargı testi, AI çalışanların yerini aldığında çalışan etkisi, yüksek hacimde çevresel ayak izi ve modelleri eğitmek için veri kullanımına onay.",
  },
];