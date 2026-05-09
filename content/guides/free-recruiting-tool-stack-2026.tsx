/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Adayları bir ATS'ye para ödemeden takip etmenin en ucuz yolu nedir?&rdquo;
      sorusu her hafta <a href="https://www.reddit.com/r/recruiting/" rel="noreferrer">r/recruiting</a>{" "}
      ve <a href="https://www.reddit.com/r/smallbusiness/" rel="noreferrer">r/smallbusiness</a>{" "}
      sayfalarında karşımıza çıkıyor. Dürüst cevap: Greenhouse Essential veya Workable'ın yaptığının %80'ini
      karşılayan gerçek bir ücretsiz araç seti var — 5 ila 20 pozisyonlu ekipler için. Bu hacmin üzerinde,
      ücretsiz araçları birleştirmek abonelik ücretinden daha pahalıya patlıyor.
    </p>
    <p>
      Bu rehber, eksiksiz araç setini sunuyor. Her seçim, kullandığımız veya stres testine tabi tuttuğumuz
      bir araçtır; karşılaşacağınız sınır ve bu sınıra ulaştığınızda neye geçmeniz gerektiği belirtilmiştir.{" "}
      <a href="/tools/free-recruiting-tool-true-cost-calculator">Gerçek maliyet hesaplayıcıyı</a>{" "}
      kullanarak kendi başabaş noktanızı bulun.
    </p>
  </>
);

export const toc = [
  { id: "stack", label: "6 araçlık ücretsiz set" },
  { id: "pipeline", label: "Aday havuzu" },
  { id: "screening", label: "Özgeçmiş taraması" },
  { id: "scheduling", label: "Mülakat planlaması" },
  { id: "outreach", label: "Aday bulma + kaynak oluşturma" },
  { id: "metrics", label: "Metrikler + raporlama" },
  { id: "limits", label: "Ücretliye ne zaman geçilmeli" },
];

export const body = (
  <>
    <h2 id="stack">6 araçlık ücretsiz set (sıfır abonelik)</h2>
    <p>
      Altı araç, ücretli katman yok, kredi kartı gerekmez. Bunları birleştirin ve küçük bir ekip için
      çalışan bir aday havuzu elde edin:
    </p>
    <ol>
      <li>
        <strong>Havuz / aday takipçisi:</strong>{" "}
        <a href="/tools/recruiting-pipeline-tracker">aday havuzu takip aracımız</a> veya
        aşama sütunları olan bir Trello panosu. Bunu özellikle geliştirdik çünkü Trello'nun
        ücretsiz katmanı sizi 10 pano ile sınırlıyor ve kart başına alanlar kısıtlı.
      </li>
      <li>
        <strong>Özgeçmiş taraması:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">özgeçmiş anahtar kelime puanlayıcımız</a> ile
        eşleşme puanları; aboneliksiz hızlı ayrıştırma için özgeçmişleri yapılandırılmış bir
        komutla ChatGPT ücretsiz veya Claude ücretsiz'e yapıştırın.
      </li>
      <li>
        <strong>Mülakat planlaması:</strong> Calendly ücretsiz (1 etkinlik türü, sınırsız
        rezervasyon) veya Google Takvim randevu aralıkları (Google Workspace kişisel ile ücretsiz).
      </li>
      <li>
        <strong>Aday bulma:</strong> Google Sheets + <code>GMass</code> ücretsiz deneme sürümü ile
        posta birleştirme özellikli Gmail veya LinkedIn bağlantı notları (Recruiter koltuğu yok).
      </li>
      <li>
        <strong>İş ilanı:</strong> Indeed ücretsiz (organik), LinkedIn ücretsiz (1 aktif iş),
        ZipRecruiter ücretsiz deneme, ardından Google Jobs yapılandırılmış işaretlemeye sahip
        her şeyi otomatik olarak toplar.
      </li>
      <li>
        <strong>Metrikler:</strong> Google Sheets şablonu — kaynağa göre başvuranları, aşamadaki
        gün sayısını, teklif kabul oranını kopyalayın. Aşağıdaki metrikler bölümünde bir şablonumuz var.
      </li>
    </ol>

    <h2 id="pipeline">Aday havuzu (Workable Starter, Greenhouse Ücretsiz Deneme yerine geçer)</h2>
    <p>
      Araç seti olmadan yapmanın en zor kısmı, her ücretli ATS'nin sunduğu aşamalı kanban görünümüdür.
      İki gerçek ücretsiz seçenek:
    </p>
    <ul>
      <li>
        <strong>Trello:</strong> Ücretsiz katman yeterlidir. Her pozisyon için bir pano oluşturun,
        sütunlar = aşamalar, kartlar = adaylar. Sınır: kart düzeyindeki alanlar kısıtlıdır,
        ücretsizde otomasyon yoktur, 10 pano sınırına hızla ulaşılır.
      </li>
      <li>
        <strong>Notion ücretsiz:</strong> Aşama seçimi olan veritabanı görünümü. Trello'dan daha iyi
        özel alan desteği sunar, ancak &ldquo;zaman çizelgesi&rdquo; görünümlerinin kilidini açmak
        ücretli bir özelliktir.
      </li>
      <li>
        <strong>Havuz takip aracımız:</strong> 6 sabit aşama, aşama içi gün sayacı, CSV
        dışa aktarma. Tek makine (tarayıcı localStorage) — ekip senkronizasyonu yok. İşe alımın
        sorumlusu tek bir kişiyse doğru seçim; iki koordineli işe alımcı için uygun değil.
      </li>
    </ul>

    <h2 id="screening">Özgeçmiş taraması (Jobscan, Teal premium yerine geçer)</h2>
    <p>
      İki tamamlayıcı araç, ücretli özgeçmiş tarama araçlarının yaptığının çoğunu karşılar:
    </p>
    <ol>
      <li>
        <strong>Anahtar kelime eşleşme puanı:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">puanlayıcımız</a> iş tanımını tokenize eder
        ve özgeçmişte ne olduğunu ve neyin eksik olduğunu gösterir. Ücretsiz, yalnızca tarayıcı,
        aylık tarama sınırı yok.
      </li>
      <li>
        <strong>Yapılandırılmış komut taraması:</strong> 10 özgeçmişi bir ChatGPT veya Claude
        ücretsiz sohbetine yapıştırın ve şunu sorun: &ldquo;Her birini [JD'den 3 spesifik
        gereksinim] için 1-5 ölçeğinde puanla. Çıktıyı tablo olarak ver.&rdquo; 10 PDF'i
        soğuk okumaktan daha hızlıdır. Kaydedilmesini istemeyeceğiniz hiçbir şeyi yapıştırmayın
        — her iki sağlayıcı da ücretsiz katmanlarda komutları saklayabilir.
      </li>
    </ol>
    <p>
      Bu setin <em>yapamadığı</em> şeyler: beceri normalizasyonu (&ldquo;React.js&rdquo;
      = &ldquo;ReactJS&rdquo;), eğitim bilgisi çıkarma, çalışma izni kontrolleri. Uyumluluk
      rejiminiz bu sinyalleri gerektiriyorsa, ücretsiz araçları aşmışsınız demektir.
    </p>

    <h2 id="scheduling">Mülakat planlaması (GoodTime, Calendly Pro yerine geçer)</h2>
    <p>
      Calendly ücretsiz, tek başına çalışan işe alımcılar için yeterlidir: bir etkinlik türü,
      bağlantınız, adaylar bir zaman seçer. Sınırlamalar ekip mülakatlarında can sıkar:
    </p>
    <ul>
      <li>
        <strong>Sıralı dağıtım:</strong> ücretsizde yok. Geçici çözüm: birden fazla davetliyle
        Google Takvim &ldquo;uygun zaman bul&rdquo; özelliği + adaya 3 spesifik seçenek gönderin.
      </li>
      <li>
        <strong>Tampon süre:</strong> ücretsizde yok. Geçici çözüm: müsaitlik aralıklarınıza
        manuel olarak ekleyin (Calendly'yi ayrı ayrı 9–10 ve 11–12 olarak ayarlayın).
      </li>
      <li>
        <strong>Çok aşamalı planlama:</strong> ücretsizde yok. Geçici çözüm: her aşama için
        bir bağlantı gönderin; rezerve edilen etkinliği havuz takipçinizde etiketleyin.
      </li>
    </ul>

    <h2 id="outreach">Aday bulma + kaynak oluşturma (LinkedIn Recruiter yerine geçer)</h2>
    <p>
      LinkedIn Recruiter, koltuk başına aylık ~170$'dan başlar. Ücretsiz geçici çözümler:
    </p>
    <ul>
      <li>
        <strong>Ücretsiz LinkedIn araması + bağlantı notları:</strong> ayda 100 arama yumuşak
        sınırı; kişiselleştirilmiş not içeren bağlantı talepleri ~%30 oranında kabul edilir
        (püf nokta: belirli bir gönderilerine veya projelerine atıfta bulunun).
      </li>
      <li>
        <strong>Google'da Boolean aramaları:</strong>{" "}
        <code>site:linkedin.com/in/ "react developer" "san francisco"</code> LinkedIn'in
        kapalı aramasının dışındaki herkese açık profilleri gösterir.
      </li>
      <li>
        <strong>Mühendislik rolleri için GitHub:</strong> herkese açık commit'ler herkese açıktır;
        dile ve aktiviteye göre arama yapın.
      </li>
      <li>
        <strong>Slack toplulukları:</strong> niş geliştirici/tasarımcı Slack'lerinde iş panoları
        bulunur. Designer Hangout, Reactiflux vb. #hiring kanalları.
      </li>
    </ul>
    <p>
      Kaynak oluşturma stratejisinin ayrıntıları için{" "}
      <a href="/guides/sourcing-candidates-without-linkedin-recruiter">
        LinkedIn Recruiter olmadan aday bulma
      </a>{" "}
      rehberimize bakın.
    </p>

    <h2 id="metrics">Metrikler + raporlama (Lever Analytics, Greenhouse Insights yerine geçer)</h2>
    <p>
      Küçük ekipler için gerçekten önemli olan 4 metrik:
    </p>
    <ul>
      <li>
        <strong>Kaynağa göre başvuran sayısı:</strong> iyi adaylar nereden geliyor?
      </li>
      <li>
        <strong>Aşama dönüşümü:</strong> telefon-yüzyüze %, yüzyüze-teklif %, teklif kabul oranı.
      </li>
      <li>
        <strong>Aşamadaki gün sayısı:</strong> adaylar &ldquo;telefon görüşmesi&rdquo; aşamasında
        14 gün kalıyorsa, planlama darboğazdır.
      </li>
      <li>
        <strong>İşe alım süresi:</strong> kaynak oluşturma → teklif kabulü, takvim günü olarak.
      </li>
    </ul>
    <p>
      Havuz takip aracımız dördünü de içeren CSV dışa aktarır. Bunu bir Google Sheet pivot
      tablosuna aktarın, haftalık güncelleyin. Tam şablon için{" "}
      <a href="/guides/recruiting-metrics-on-a-free-spreadsheet">
        ücretsiz bir e-tabloda işe alım metrikleri
      </a>{" "}
      sayfasına bakın.
    </p>

    <h2 id="limits">Ücretliye ne zaman geçilmeli</h2>
    <p>
      Ücretsiz araç seti öngörülebilir eşiklerde yetersiz kalır:
    </p>
    <ul>
      <li>
        <strong>~15 aktif pozisyon.</strong> Trello pano sınırına ulaşır; Notion karmaşıklaşır.
      </li>
      <li>
        <strong>Paralel çalışan 2+ işe alımcı.</strong> Paylaşılan bir arka uç olmadan kişiler
        arasında gerçek zamanlı senkronizasyon yoktur.
      </li>
      <li>
        <strong>Uyumluluk / EEO raporlaması.</strong> Ücretsiz araçlar korunan sınıf verilerini
        takip etmez; ücretli ATS'ler denetim izleriyle bunu yapar.
      </li>
      <li>
        <strong>Aday self-servis portalı.</strong> &ldquo;Süreçte neredeyim?&rdquo; e-postaları
        ~50 aktif adayın üzerinde yük haline gelir.
      </li>
    </ul>
    <p>
      Sizin rakamlarınız için ücretlinin ne zaman kazandığını görmek üzere{" "}
      <a href="/tools/free-recruiting-tool-true-cost-calculator">
        gerçek maliyet hesaplayıcıyı
      </a>{" "}
      çalıştırın — genellikle işe alım yöneticisinin saatlik ücretine bağlı olarak yılda 8-12
      işe alım civarında.
    </p>
  </>
);

export const cta = {
  label: "Adayları şimdi takip etmeye başlayın (ücretsiz, hesap gerekmez)",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "En çok önerilen ücretsiz işe alım aracı hangisidir?",
    a: "Havuz görünümü için Trello; tekrarlanan şikayet 10 pano sınırıdır. Tek başına çalışan işe alımcılar için havuz takip aracımız daha yoğundur çünkü sabit işe alım aşamaları ve yerleşik bir aşama içi gün sayacı vardır.",
  },
  {
    q: "Uyumluluğu yöneten tamamen ücretsiz bir ATS var mı?",
    a: "Hayır. EEO raporlaması, OFCCP denetim izleri ve yapılandırılmış veri aday kayıtlarını yöneten her ATS ücretlidir. Bu uyumluluk tetikleyicilerinin altında ücretsiz araçlar yeterlidir; üstünde ise ücretli olan tek yasal yoldur.",
  },
  {
    q: "Google, ücretsiz iş panolarına iş ilanı verdiğim için beni cezalandırır mı?",
    a: "Hayır — Google Jobs, ücretli veya ücretsiz yerleştirmeden bağımsız olarak yapılandırılmış veri ilanlarını toplar. Kariyer sayfanızda JobPosting JSON-LD kullanın ve indekslenirsiniz.",
  },
  {
    q: "Trello + Calendly + Gmail kullanıp buna ATS diyebilir miyim?",
    a: "5 pozisyonlu bir ekip için işlevsel olarak evet. Düzenlemeye tabi sektörlerde (finans, sağlık, devlet sözleşmeleri) ölçekli işe alım yapıyorsanız yasal olarak hayır — bir denetim izine ihtiyacınız var.",
  },
];