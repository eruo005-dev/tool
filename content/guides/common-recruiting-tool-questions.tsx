/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Kısa yanıtlar, işe alım/iş arama araçlarıyla ilgili sürekli sorulan sorulara. Bu sorular{" "}
      <a href="https://www.reddit.com/r/recruiting/" rel="noreferrer">r/recruiting</a>,{" "}
      <a href="https://www.reddit.com/r/jobsearchhacks/" rel="noreferrer">r/jobsearchhacks</a>
      ve <a href="https://www.reddit.com/r/smallbusiness/" rel="noreferrer">r/smallbusiness</a>{" "}
      subredditlerinde sıkça soruluyor. Her biri, eğer yanıt &ldquo;işte ayrıntılı olarak nasıl yapılır&rdquo; şeklindeyse daha derin bir kılavuza bağlanır.
    </p>
  </>
);

export const toc = [
  { id: "screening", label: "Tarama + ayrıştırma" },
  { id: "outreach", label: "Aday bulma + takip" },
  { id: "search", label: "İş arama araçları" },
  { id: "boards", label: "Panolar + toplayıcılar" },
  { id: "operations", label: "Operasyonlar + yazma" },
];

export const body = (
  <>
    <h2 id="screening">Tarama + ayrıştırma</h2>

    <h3>Ücretli araçlar olmadan özgeçmişleri ücretsiz nasıl tararım?</h3>
    <p>
      İki adımlı bir iş akışı. İlk olarak,{" "}
      <a href="/tools/resume-keyword-match-scorer">anahtar kelime puanlayıcımızı</a> kullanarak
      iş tanımı-anahtar kelime örtüşmesine göre ön eleme yapın. İkinci olarak, en yüksek puanlı özgeçmişleri
      ChatGPT veya Claude'a (ücretsiz) yapılandırılmış bir sıralama yönergesiyle yapıştırın: &ldquo;Bunları [iş tanımındaki 3 spesifik gereksinime] göre 1–5 ölçeğinde sırala.&rdquo; Toplam süre: 10 özgeçmiş için 5 dakika.
      Tam mekanizma için <a href="/guides/free-ats-reality-check">ücretsiz ATS gerçeklik kontrolü</a> kılavuzumuza bakın.
    </p>

    <h3>Özgeçmiş taraması sırasında hangi soruları sormalıyım?</h3>
    <p>
      Üç tür: (1) <strong>somut deneyim</strong> — &ldquo;bana [iş tanımında istenen beceri]yi kullandığın bir
      projeden bahset&rdquo;; (2){" "}
      <strong>ücret / lokasyon uyumu</strong> — uyumsuzlukları erken eleyin; (3){" "}
      <strong>motivasyon</strong> — &ldquo;neden özellikle bu rol?&rdquo; Genel başvuru eleyicisi.
      Tarama aşamasında davranışsal soruları atlayın — onları mülakata saklayın.
    </p>

    <h3>Ücretsiz özgeçmiş ayrıştırma araçları işe yarıyor mu?</h3>
    <p>
      Düşük hacim için Affinda'nın ücretsiz katmanı (ayda 100 ayrıştırma) en doğru olanıdır.
      Sıfır maliyetli açık kaynak için: bir <a href="/learn/llm">LLM</a>'ye JSON şeması yönergesiyle standart formatlarda ~%90 doğruluk oranına ulaşır.
      Her ikisi de iki sütunlu özgeçmişler ve taranmış PDF'lerde başarısız olur. Tam karşılaştırma için{" "}
      <a href="/guides/free-ats-reality-check">ücretsiz ATS gerçeklik kontrolü</a> kılavuzuna bakın.
    </p>

    <h3>Ücretsiz geçmiş kontrol araçları gerçek mi?</h3>
    <p>
      Yüzeysel kontroller için evet: TrueFinder ücretsiz sosyal medya araması, ilçe düzeyindeki kamuya açık veritabanları aracılığıyla mahkeme kaydı sorgulamaları (ücretsiz ancak yavaş), LinkedIn istihdam doğrulaması.
      FCRA (ABD Adil Kredi Raporlama Yasası) kapsamındaki her şey için — kredi, sabıka, motorlu taşıt — yasal olarak FCRA uyumlu bir sağlayıcı kullanmalısınız. En ucuzu:
      Checkr ~$30/kontrol.
    </p>

    <h2 id="outreach">Aday bulma + takip</h2>

    <h3>İşe alım aday bulma için en iyi ücretsiz e-posta araçları hangileri?</h3>
    <p>
      Şablonlu Gmail temel ihtiyaçları karşılar — Ayarlar → Genel → Şablonlar. Sıralı gönderimler (gönder + yanıt yoksa otomatik takip) için: Mailtrack ücretsiz (açık izleme),
      Streak ücretsiz (Gmail'de CRM) veya GMass ücretsiz deneme (posta birleştirme). Hiçbiri Outreach
      veya Apollo'nun otomasyonuyla boy ölçüşemez, ancak düşük hacimde manuel yaklaşım aslında daha iyi performans gösterir — aynı şablonu 200 adaya gönderen işe alımcılar görmezden gelinir.
    </p>

    <h3>Adaylara takip mesajlarını otomatikleştiren ücretsiz araçlar var mı?</h3>
    <p>
      Yerleşik Gmail şablonları + zamanlanmış gönderme (ücretsiz) çoğu durumu kapsar. Tam sıralı
      otomasyon için: Mailmeteor ücretsiz, Google Sheets üzerinde posta birleştirme + basit sıralama yapar. Boomerang ücretsiz, zamanlanmış gönderimler için. Aday yanıtında durmayan otomatik sıralama araçlarından kaçının — en kötü izlenimi yaratırlar.
    </p>

    <h3>Ekip mülakatlarını koordine etmek için en iyi ücretsiz araçlar hangileri?</h3>
    <p>
      Herkes aynı Google Workspace kuruluşundaysa Google Takvim &ldquo;Uygun zaman bul&rdquo; ücretsizdir. Kuruluşlar arası anketler için Doodle ücretsiz. Cal.com kendi kendine barındırılan, barındırabiliyorsanız ücretli özellikleri ücretsiz olarak sunar. Ayrıntılı döküm için{" "}
      <a href="/guides/free-interview-scheduling-for-recruiters">ücretsiz mülakat planlama</a>{" "}
      kılavuzuna bakın.
    </p>

    <h2 id="search">İş arama araçları</h2>

    <h3>İş arama otomasyonu için en iyi ücretsiz yapay zeka araçları hangileri?</h3>
    <p>
      Gerçekten yüksek kaldıraçlı kullanımlar: şirket araştırma özetleri (kamuya açık bilgileri yapıştırın, 200 kelimelik bir özet isteyin), deneme mülakatı pratiği (ChatGPT ses modu), ön yazı taslakları (yapılandırılmış bir yönergeyle ücretsiz LLM), maaş pazarlığı senaryosu oluşturma. Otomatik başvuru araçları (LazyApply, Sonara) yanıt oranlarını düşürür — kaçının.
    </p>

    <h3>İş ilanlarını otomatik olarak bulan yapay zeka araçları var mı?</h3>
    <p>
      Çoğunlukla kötü. Yapay zekalı toplayıcı girişimleri (Adzuna AI, Workscape) Indeed/LinkedIn ilanlarını marjinal olarak daha iyi filtrelemeyle yeniden kullanır. Ücretsiz alternatif: belirli sorgularla LinkedIn İş Uyarıları, Indeed E-posta Uyarıları ve Google İş Uyarıları kurun. Daha iyi sinyal, sıfır abonelik.
    </p>

    <h3>Sektörümde iş bulmama yardımcı olacak hangi ücretsiz araçlar var?</h3>
    <p>
      Çoğu sektör için, niş panolar sinyal açısından toplayıcılardan daha iyidir. Teknoloji: Wellfound, Hacker News &ldquo;Who is hiring,&rdquo; önemli Slack'ler. Tasarım: Dribbble Jobs, Behance Jobs. Pazarlama: Workshop bülteni, Demand Curve iş panosu. Satış: Bravado ücretsiz katman. Finans: eFinancialCareers (ücretsiz). Sektörünüzü + &ldquo;niş iş panosu&rdquo; sorgulayın — genellikle 2–3 kaliteli seçenek vardır.
    </p>

    <h3>Birini seçmeden önce ücretsiz iş arama araçlarını nasıl karşılaştırabilirim?</h3>
    <p>
      Üç kriter: (1) <strong>Sert sınır önemlidir</strong> — Teal'in 5 başvuru sınırı gerçek bir arama için işe yaramaz; (2) <strong>İş akışı entegrasyonu</strong> — işleri yakalamak için bir Chrome uzantısı var mı? (3) <strong>Dışa aktarma</strong> — farklı bir araca geçtiğinizde verilerinizi alabiliyor musunuz? Çoğu ücretsiz araç 3. kriterde başarısız olur — bir aylık veri taahhüt etmeden önce kontrol etmeye değer.
    </p>

    <h2 id="boards">Panolar + toplayıcılar</h2>

    <h3>Ücretsiz iş panosu toplayıcıları zaman kazandırır mı?</h3>
    <p>
      Çoğunlukla evet. Indeed ve LinkedIn zaten çoğu ücretli panodan toplama yapar. Toplayıcıların toplayıcıları (LinkedIn Glassdoor'u, Indeed ZipRecruiter'ı toplar, vb.) iki kaydedilmiş aramayla ~%80 kapsama alanı sağlar. Uzmanlaşmış toplayıcılar niç alanlarda yardımcı olur: RemoteOK uzaktan çalışma için, Wellfound girişimler için. E-posta uyarıları kurun ve toplayıcıların size gelmesine izin verin.
    </p>

    <h3>İş ilanlarını aynı anda birden fazla platforma ücretsiz nasıl yayınlarım?</h3>
    <p>
      İş tanımını yazdıktan sonra manuel çapraz yayınlama platform başına 10 dakika sürer. Otomasyon için tek gerçek ücretsiz seçenek, kariyer sayfanızı Google Jobs'a otomatik olarak indeksletmektir (herkes için çalışır). Ücretli araçlar (Recruitee, Workable'ın çoklu yayıncısı) ayda $89+ tutarındadır. Manuel iş akışı için{" "}
      <a href="/guides/free-job-posting-playbook-2026">ücretsiz iş ilanı yayınlama kılavuzuna</a>{" "}
      bakın.
    </p>

    <h2 id="operations">Operasyonlar + yazma</h2>

    <h3>Ücretsiz bir aday veritabanını nasıl oluştururum?</h3>
    <p>
      Google E-Tablo: ad, iletişim bilgileri, kaynak, beceri etiketleri, son iletişim tarihi, ulaşma sıklığı. Yerinde filtreleme ve sıralama. 100–500 aday için çalışır; bunun üzerinde arama performansı düşer. Ayrıntılı şablon için{" "}
      <a href="/guides/recruiting-metrics-on-a-free-spreadsheet">
        ücretsiz bir e-tabloda işe alım metrikleri
      </a>{" "}
      kılavuzumuza bakın.
    </p>

    <h3>Kaliteli adayları çeken iş tanımları oluşturmaya hangi ücretsiz araçlar yardımcı olur?</h3>
    <p>
      İki şey fark yaratır: (1) <strong>spesifiklik</strong> — &ldquo;Stripe entegrasyonu yayınlamış&rdquo; ifadesi &ldquo;3+ yıl ödeme deneyimi&rdquo;nden daha iyidir; ve (2){" "}
      <strong>maaş aralığını en üstte belirtmek</strong> — başvurmadan önce ücret açısından uymayan %60'lık kesimi eler. Yardımcı araçlar: ilk taslaklar için ChatGPT ücretsiz, kapsayıcılık puanlaması için Textio ücretsiz deneme, iş tanımının gerçekten istediğiniz becerileri yansıttığını doğrulamak için anahtar kelime puanlayıcımız.
    </p>

    <h3>Özgeçmişimi her başvuru için nasıl özelleştiririm?</h3>
    <p>
      Başvuru başına 15 dakika ideal süredir. İş akışı: özgeçmiş + iş tanımını{" "}
      <a href="/tools/resume-keyword-match-scorer">anahtar kelime puanlayıcımıza</a> yapıştırarak boşlukları bulun,
      ardından ChatGPT/Claude'dan (beceri uydurmadan) eksik terimleri öne çıkaran maddeleri yeniden yazmasını isteyin, ardından yeniden puanlayın. %70+ eşleşme hedefleyin. Tam kılavuz:{" "}
      <a href="/guides/tailor-your-resume-to-job-postings-for-free">
        özgeçmişinizi iş ilanlarına göre uyarlama
      </a>.
    </p>
  </>
);

export const cta = {
  label: "Sınırsız ücretsiz anahtar kelime puanlayıcı",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "En yüksek yatırım getirisine sahip tek ücretsiz işe alım aracı nedir?",
    a: "Bir e-tablo. İster aday veritabanı, ister kaynak kalitesi takipçisi veya iş başvuru günlüğü olarak kullanın — disiplinli kayıt tutma, herhangi bir süslü aracı yener. Çoğu ücretli işe alım analiz aracı, daha güzel arayüzlü e-tablolardır.",
  },
  {
    q: "Her şeyi yapan ücretsiz bir araç var mı?",
    a: "Hayır ve ücretsiz araçlarının tam bir ATS'nin yerini aldığını iddia edenlere dikkat edin. Dürüst ücretsiz yığın, birbirine bağlanmış 4-6 araçtan oluşur — ücretsiz işe alım araç yığını kılavuzumuza bakın.",
  },
  {
    q: "Ücretsiz araçların artık yeterli olmadığını nasıl anlarım?",
    a: "Üç sinyal: (1) araçları birbirine bağlamak için haftada 2+ saat harcıyorsanız, (2) 2 veya daha fazla araçta ücretsiz katman sınırlarına ulaştıysanız, (3) yavaş aktarımlar nedeniyle adaylar süreç ortasında kayboluyorsa. Gerçek maliyet hesaplayıcımızı çalıştırarak sayısallaştırın.",
  },
];