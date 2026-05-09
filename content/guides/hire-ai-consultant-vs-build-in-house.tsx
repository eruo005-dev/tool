export const intro = (
  <>
    <p>
      Yapay zeka için "kiralama mı, yoksa kendi ekibini kurma mı" kararı, her işletmenin her yeni teknolojiyle karşılaştığı klasik sorudur. Ancak araçlar o kadar hızlı gelişiyor ki denklem değişti. Üç yıl önce bir ML doktorasına ihtiyacınız vardı. Bugün ise dokümanları okuyup API entegrasyonları yapabilen birine ihtiyacınız var.
    </p>
    <p>
      Bu rehber bir karar çerçevesi sunuyor: Danışmanlık ne zaman kazanır, şirket içi ekip ne zaman kazanır ve 2026'da en yaygın model haline gelen hibrit yol hangisidir.
    </p>
  </>
);

export const toc = [
  { id: "framework", label: "Karar çerçevesi" },
  { id: "consulting-wins", label: "Danışmanlık ne zaman kazanır" },
  { id: "in-house-wins", label: "Şirket içi ekip ne zaman kazanır" },
  { id: "hybrid", label: "Hibrit model" },
  { id: "training", label: "Ekibinize yapay zeka eğitimi yatırımı" },
  { id: "non-technical", label: "Teknik bilginiz yoksa başlangıç" },
];

export const body = (
  <>
    <h2 id="framework">Karar çerçevesi</h2>
    <p>
      Cevabı belirleyen üç değişken vardır:
    </p>
    <ol>
      <li>
        <strong>Kullanım senaryosu işinize ne kadar özgü?</strong> Yaygın kullanım senaryoları (müşteri hizmetleri yapay zekası, belge özetleme, e-posta taslağı oluşturma) için hazır çözümler ve bunu 50 kez yapmış danışmanlar vardır. Özgün senaryolar (size ait veriler, benzersiz iş akışınız, sektörünüzün düzenlemeleri) ise şirket içi uzmanlık gerektirir.
      </li>
      <li>
        <strong>Mühendislik ekibinizin kapasitesi nedir?</strong> API entegrasyonu deneyimine sahip 5 kıdemli mühendisiniz varsa, şirket içi maliyetiniz, bu işi mevcut özellik geliştirmelerinin üzerine yapacak 2 kişilik bir ekibe göre çok daha düşüktür.
      </li>
      <li>
        <strong>Bu ne kadar ölçeklenecek?</strong> Tek seferlik bir dağıtım mı? Danışmanlık kazanır. 3 yıl boyunca üzerinde sürekli iyileştirme yapacağınız bir yetenek mi? Şirket içi ekip kendini amorti eder.
      </li>
    </ol>

    <h2 id="consulting-wins">Danışmanlık ne zaman kazanır</h2>
    <ul>
      <li>
        <strong>Standart kullanım senaryosu + sıkı zaman çizelgesi.</strong> Bir SaaS şirketi için müşteri hizmetleri yapay zekası, iyi bilinen bir yoldur; bir danışman, ekibinizin öğrenirken 6 ayda yapacağını 6 haftada teslim eder.
      </li>
      <li>
        <strong>Uyumluluk yükü olan düzenlemeye tabi sektörler.</strong> Sağlık, finans, hukuk — bu alanlarda teslimat yapmış danışmanlar, ekibinizin ilk 3 ayını tüketecek tuzakları (HIPAA, SOC 2 Tip II, model denetim izleri) bilir.
      </li>
      <li>
        <strong>Strateji / önceliklendirme çalışmaları.</strong> 50 fikirden hangi 5'inin takip etmeye değer olduğunu belirlemek için 3 aylık bir danışmanlık, daha sonra her şeyi şirket içinde inşa etseniz bile yüksek kaldıraçlı bir yatırımdır.
      </li>
      <li>
        <strong>Tek seferlik dağıtımlar.</strong> Yıllarca kullanacağınız ancak üzerinde hiç iyileştirme yapmayacağınız, belirli bir dar iş akışı için özel bir dahili araç oluşturmak.
      </li>
      <li>
        <strong>Mühendislik kapasiteniz yok.</strong> İki mühendisiniz zaten iş yükü altında eziliyorsa, dışarıdan yardım almadan yapay zeka işi eklemek her ikisini de geciktirir.
      </li>
    </ul>

    <h2 id="in-house-wins">Şirket içi ekip ne zaman kazanır</h2>
    <ul>
      <li>
        <strong>Ana ürün özellikleri.</strong> Ürününüzün bir parçası olarak kullanıcılarınıza gönderdiğiniz her şey. İyileştirme döngüsü dışarıya devredilemeyecek kadar önemlidir. Ne işe yaradığını ancak her gün içinde olarak öğrenirsiniz.
      </li>
      <li>
        <strong>Sürekli iyileştirme.</strong> Önümüzdeki 2 yıl boyunca her hafta prompt'ları ince ayar yapacak, modelleri fine-tune edecek veya RAG boru hatlarını ayarlayacaksanız, danışmana harcanan her dolar, şirket içi uzmanlık oluşturmayan bir dolardır.
      </li>
      <li>
        <strong>Güçlü mevcut mühendislik ekibi.</strong> 3-4 ay içinde yapay zekaya geçiş yapabilecek mühendisleriniz varsa, bu genellikle 6 aylık bir danışmanlık anlaşmasından daha ucuzdur ve bilgi sizde kalır.
      </li>
      <li>
        <strong>Yüksek riskli veri gizliliği.</strong> Verileri üçüncü bir tarafla (DPA altında bile) hiçbir şekilde paylaşamadığınızda, tek yol şirket içi ekiptir. Kendi kendine barındırılan modeller veya dikkatle incelenmiş kurumsal planlar üzerine inşa edin.
      </li>
      <li>
        <strong>Stratejik farklılaşma hedefleri.</strong> Yapay zeka yeteneğinin rekabetçi bir farklılaştırıcı olması gerekiyorsa, farklılaştırıcıyı dışarıya devredemezsiniz.
      </li>
    </ul>

    <h2 id="hybrid">Hibrit model (2026'da çoğu ekibin aslında yaptığı)</h2>
    <p>
      Başarılı bir yapay zeka kullanıma sunumunun en yaygın şekli:
    </p>
    <ol>
      <li>
        <strong>1-3. aylar: Strateji için bir danışman kiralayın.</strong> Aylık 5.000-15.000 dolar arası yarı zamanlı yapay zeka danışmanı. Çıktı: önceliklendirilmiş kullanım senaryoları, satın alma veya geliştirme önerileri, satıcı kısa listesi, ekibiniz için eğitim planı.
      </li>
      <li>
        <strong>3-6. aylar: Danışman ve mühendisleriniz ilk kullanım senaryosunu teslim eder.</strong> Kıdemli danışman, ilk üretim dağıtımında mühendislerinizle birlikte çalışır. Bilgi aktarımı sürecin bir parçasıdır. Toplam: 50.000-150.000 dolar.
      </li>
      <li>
        <strong>6-12. aylar: Ekibiniz devralır.</strong> Danışman, aylık 2.000-5.000 dolar veya sıfır ücretle kontrol danışmanına dönüşür. Mühendisleriniz dağıtılan sistem üzerinde iyileştirmeler yapar ve bir sonraki kullanım senaryosuna bağımsız olarak başlar.
      </li>
      <li>
        <strong>2. yıl ve sonrası: Yeni alanlar için ara sıra danışmanlıkla birlikte şirket içi ekip.</strong> Ekibinizin daha önce yalnızca destek için yapay zeka yaptığı bir durumda, yasal inceleme için yapay zeka gibi yeni ve yabancı bir alanda bir kullanım senaryosuna giriştiğinizde, 4-6 haftalığına bir uzman getirin.
      </li>
    </ol>
    <p>
      Bu model, toplam maliyeti makul seviyede tutar (1. yılda 75.000-200.000 dolar), ekibinizin yeteneğini geliştirir ve her iki uç noktadan da (danışmanlara aşırı bağımlılık veya kritik altyapı üzerinde sıfırdan yapay zeka öğrenen, iş yükü altında ezilen mühendisler) kaçınır.
    </p>

    <h2 id="training">Ekibinize yapay zeka eğitimi yatırımı nasıl yapılır</h2>
    <p>
      İster danışmanlık ağırlıklı, ister şirket içi, ister hibrit bir yol izleyin, ekibinizin yapay zeka okuryazarlığına ihtiyacı vardır. En uygun maliyetli seçenekler:
    </p>
    <ul>
      <li>
        <strong>Kendi hızınızda ilerleyen kurslar (kişi başı 0-500 dolar):</strong> Anthropic'in Prompt Mühendisliği Kursu (ücretsiz), DeepLearning.AI uzmanlıkları (~aylık 50 dolar), Hugging Face NLP kursu (ücretsiz), Andrew Ng / Andrej Karpathy YouTube serileri (ücretsiz).
      </li>
      <li>
        <strong>Konferans katılımı (kişi başı 1.000-3.000 dolar):</strong> AI Engineer Summit, QCon'da uygulamalı oturumlar, NeurIPS atölyeleri. En çok, üretim modellerini görmesi gereken kıdemli mühendisler için uygundur.
      </li>
      <li>
        <strong>Dahili uygulama projeleri (ücretsiz):</strong> Cuma öğleden sonralarını yapay zeka deneylerine ayırın. Doğrudan faturalandırılamaz; uzun vadede yetenek üzerindeki <a href="/learn/roi">yatırım getirisi</a> çok büyüktür.
      </li>
      <li>
        <strong>Satıcıya özel sertifikalar (kişi başı 200-500 dolar):</strong> AWS Certified Machine Learning, Google Cloud Generative AI vb. En çok, o satıcının teknoloji yığınına bağlıysanız kullanışlıdır.
      </li>
      <li>
        <strong>4-6 hafta boyunca kıdemli bir danışmanla çalışmak (20.000-50.000 dolar):</strong> bilgi aktarımı odaklı danışmanlık modeli. Ekibiniz, kıdemli biriyle birlikte gerçek iş çıkarır; 6 aylık kalıpları 6 haftada öğrenirler.
      </li>
    </ul>

    <h2 id="non-technical">Teknik bilginiz yoksa başlangıç</h2>
    <p>
      Teknik bilgiye sahip olmayan bir kurucu veya yöneticiyseniz, yol farklıdır. Yapay zekayı sıfırdan inşa etmeye çalışmamalı (ve çalışmamalısınız). İzlenecek adımlar:
    </p>
    <ol>
      <li>
        <strong>30 gün boyunca her gün ChatGPT / Claude / Gemini kullanın.</strong> Yapay zekanın neler yapıp neler yapamayacağını kullanarak öğrenin. Teknik bilgiye sahip olmayan kurucuların çoğu, iki hafta denemeden yapay zeka hakkında fikir sahibi olur. Yapmayın.
      </li>
      <li>
        <strong>Bir iş için yapay zeka topluluğuna katılın.</strong> Sektörünüzdeki pratik uygulamalara odaklanmış bir Slack, LinkedIn grubu veya forum. Başkalarının neler teslim ettiğini, nerelerde duvara çarptıklarını ve hangi satıcıların güvenilir olduğunu öğrenirsiniz.
      </li>
      <li>
        <strong>Sektörünüzde çalışmış bir danışmandan 4 haftalık bir strateji danışmanlığı alın.</strong> 15.000-30.000 dolar. Önceliklendirilmiş bir yol haritası yazarlar ve önce neyi inşa edeceğinizi bilirsiniz.
      </li>
      <li>
        <strong>Hazır araçlarla bir kullanım senaryosunu pilot olarak uygulayın</strong> (erken aşamada özel geliştirme yok). 5.000-15.000 dolar. Sonuçları takip edin.
      </li>
      <li>
        <strong>Sonra karar verin:</strong> kalıcı bir yapay zeka mühendisi işe alın (~180.000-280.000 dolar toplam maliyet), danışman kullanmaya devam edin veya hazır araçlarla kalın.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "Yapay zeka danışmanlığının yatırım getirisini hesaplayın",
  targetSlug: "ai-consulting-roi-calculator",
};

export const faq = [
  {
    q: "Yapay zeka danışmanı mı kiralamalıyım yoksa şirket içinde mi geliştirmeliyim?",
    a: "Danışmanlık şu durumlarda kazanır: sıkı zaman çizelgeli standart kullanım senaryoları, düzenlemeye tabi sektörler, strateji/önceliklendirme çalışmaları, tek seferlik dağıtımlar, mühendislik kapasitenizin olmadığı durumlar. Şirket içi ekip şu durumlarda kazanır: ana ürün özellikleri, sürekli iyileştirme, güçlü bir mühendislik ekibiniz olduğunda, yüksek riskli veri gizliliği, stratejik farklılaşma hedefleri. Çoğu ekip hibrit bir yol seçer.",
  },
  {
    q: "Tipik hibrit yapay zeka kullanıma sunum modeli nedir?",
    a: "1-3. aylar: Strateji için danışman (aylık 5-15 bin dolar). 3-6. aylar: Danışman ve mühendisleriniz ilk dağıtımda birlikte çalışır (50-150 bin dolar). 6-12. aylar: Ekibiniz devralır, danışman kontrol danışmanı olur. 2. yıl ve sonrası: Yeni alanlar için ara sıra uzman danışmanlığıyla birlikte şirket içi ekip. 1. yıl toplamı: 75-200 bin dolar.",
  },
  {
    q: "Ekibime yapay zeka eğitimi yatırımını nasıl yapabilirim?",
    a: "Katmanlı yaklaşım: Herkes için ücretsiz kendi hızında kurslar (Anthropic, DeepLearning.AI, Hugging Face), kıdemli mühendisler için konferans katılımı (kişi başı 1-3 bin dolar), dahili uygulama projeleri (Cuma öğleden sonraları), teknoloji yığını uyumu için satıcı sertifikaları ve hızlandırılmış bilgi aktarımı için 4-6 haftalık danışmanla çalışma anlaşması.",
  },
  {
    q: "Teknik bilgim yoksa yapay zekaya nasıl başlayabilirim?",
    a: "30 gün boyunca her gün ChatGPT/Claude/Gemini kullanın, sektörünüzdeki bir iş için yapay zeka topluluğuna katılın, 4 haftalık bir strateji danışmanlığı alın (15-30 bin dolar), hazır araçlarla bir kullanım senaryosunu pilot olarak uygulayın (5-15 bin dolar). Ardından kalıcı bir yapay zeka mühendisi işe alıp almamaya, danışman kullanmaya devam etmeye veya hazır araçlarla kalmaya karar verin.",
  },
];