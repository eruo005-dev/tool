/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Ücretsiz ATS araçları işe yarar mı?&rdquo; en çok sorulan sorulardan biridir{" "}
      <a href="https://www.reddit.com/r/recruiting/" rel="noreferrer">r/recruiting</a>.
      Pazarlama cevabı (&ldquo;evet!&rdquo;) ile uygulayıcı cevabı
      (&ldquo;biraz&rdquo;) farklılaşır. Teknik özellik belgelerini inceledik, sınırları kontrol ettik ve
      her ücretsiz katmanın gerçekte ne yaptığını yazdık — özgeçmiş ayrıştırma, eleme
      ve ince yazıda gizlenen tuzaklar dahil.
    </p>
    <p>
      Üç kategori: katman sınırlı freemium ATS'ler, tamamen ücretsiz açık kaynak kendi barındırmalı ve
      &ldquo;hazır parçalarla kendi sistemini kur.&rdquo; Her birinin gerçek bir kullanım senaryosu ve gerçek bir
      başarısızlık modu vardır.
    </p>
  </>
);

export const toc = [
  { id: "freemium", label: "Freemium ATS'ler (sınırlamalarla)" },
  { id: "oss", label: "Açık kaynak kendi barındırmalı" },
  { id: "diy", label: "Kendin Yap: ücretsiz yığınını oluştur" },
  { id: "parsing", label: "Ücretsiz özgeçmiş ayrıştırma" },
  { id: "accuracy", label: "Ücretsiz eleme araçları gerçekten doğru mu?" },
];

export const body = (
  <>
    <h2 id="freemium">Freemium ATS'ler — size gerçekte ne veriyorlar</h2>
    <p>
      Popüler &ldquo;ücretsiz ATS&rdquo; araçları, sert sınırları olan freemium modellerdir. 2026 ortası itibarıyla sınırlar:
    </p>
    <ul>
      <li>
        <strong>Recruitee Free:</strong> artık gerçek bir ücretsiz katman değil — yalnızca ücretsiz deneme.
      </li>
      <li>
        <strong>Recruiterflow Free trial:</strong> 14 gün sonra ücretli.
      </li>
      <li>
        <strong>Manatal Free trial:</strong> 14 gün sonra $15/koltuk.
      </li>
      <li>
        <strong>Zoho Recruit Free Forever:</strong> 1 aktif iş ilanı, 1 kullanıcı, 100 aday,
        1 GB depolama. Gerçek ücretsiz katman; düşük hacimde çalışan bireysel işe alımcılar için kullanılabilir.
        Yükseltme $25/koltuk ile rekabetçidir.
      </li>
      <li>
        <strong>Freshteam Free:</strong> 2024'te kullanımdan kaldırıldı — Freshworks ücretsiz planı sonlandırdı.
      </li>
      <li>
        <strong>SmartRecruiters Free:</strong> 5 aktif iş ilanı, 1 kullanıcı, aday yönetimi,
        kariyer sitesi. Gerçekten ücretsiz, ancak yükseltme baskısı agresif — 2. haftadan sonra satış görüşmesi hunisine girersiniz.
      </li>
    </ul>
    <p>
      Karar: <strong>Zoho Recruit Free</strong> ve <strong>SmartRecruiters Free</strong>{" "}
      2026 itibarıyla gerçekten sonsuza kadar ücretsiz olan iki seçenektir. Zoho bireysel kullanıcı dostu,
      SmartRecruiters çoklu iş ilanı dostudur. Her ikisi de aşama otomasyonu ve raporlamayı
      ücretli katmanların arkasına koyar.
    </p>

    <h2 id="oss">Açık kaynak kendi barındırmalı (barındırabiliyorsanız ücretsiz)</h2>
    <p>
      Kendi barındırmalı, yazılımı kendi sunucunuzda çalıştırdığınız anlamına gelir. Teknik
      beceri veya ekipte bir geliştirici gerektirir:
    </p>
    <ul>
      <li>
        <strong>Open-Source ATS / OSCATS:</strong> en eskisi. Aktif. PHP tabanlı. İş ilanlarını,
        adayları, başvuruları takip eder. Arayüzü eski. Bir sistem yöneticiniz varsa gerçekçi bir seçenek.
      </li>
      <li>
        <strong>Calibre / Recruiteefy / çatallar:</strong> çeşitli GitHub projeleri, çoğu
        bakımsız. Benimsemeden önce son taahhüt tarihini kontrol edin.
      </li>
      <li>
        <strong>Notion / Airtable şablonları:</strong> teknik olarak bir ATS değil ancak
        topluluk tarafından oluşturulan şablonlar kutudan çıktığı gibi aşama takibi, başvuru formları ve raporlar
        sunar. &ldquo;Gerçekten çalışan ücretsiz ATS&rdquo;ye en yakın seçenek.
      </li>
    </ul>
    <p>
      Açık kaynak ATS seçeneği çoğunlukla meraklıları çeker. Gerçek bir çalışan ekip için, kendi barındırmalı bir sistemi sürdürmektense
      freemium katman sınırlarını + elektronik tablo taşmasını kullanmak daha kolaydır.
    </p>

    <h2 id="diy">Kendin Yap: hazır parçalardan ücretsiz bir yığın oluşturma</h2>
    <p>
      Pratikte en yaygın &ldquo;ücretsiz ATS&rdquo;, birleştirilmiş yığındır:
    </p>
    <ol>
      <li>
        <strong>İşlem hattı:</strong>{" "}
        <a href="/tools/recruiting-pipeline-tracker">ücretsiz takip aracımız</a> (veya Trello /
        Notion).
      </li>
      <li>
        <strong>Özgeçmiş eleme:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">anahtar kelime puanlayıcımız</a>.
      </li>
      <li>
        <strong>Başvuru formu:</strong> Google Form → Sheet veya Typeform ücretsiz katmanı (ayda 10 yanıt
        işe alım için çok düşük; bunun yerine Tally ücretsiz kullanın).
      </li>
      <li>
        <strong>Planlama:</strong> Calendly ücretsiz.
      </li>
      <li>
        <strong>E-posta:</strong> Şablonlarla (hazır yanıtlar) Gmail.
      </li>
    </ol>
    <p>
      Toplam maliyet: $0/ay. Zaman maliyeti: 3 iş ilanlı bir ekip için haftada 1–2 saat birleştirme.
      Bu matematiğin sizin için işe yarayıp yaramadığını görmek için <a href="/tools/free-recruiting-tool-true-cost-calculator">gerçek maliyet hesaplayıcımıza</a>{" "}
      bakın.
    </p>

    <h2 id="parsing">Ücretsiz özgeçmiş ayrıştırma — ne işe yarar, ne yaramaz</h2>
    <p>
      &ldquo;Özgeçmiş ayrıştırma,&rdquo; bir PDF/Word özgeçmişini yapılandırılmış alanlara
      (isim, e-posta, iş geçmişi, beceriler) dönüştürmek anlamına gelir. Ücretli ATS'ler bunu Sovren veya
      RChilli gibi satıcılarla yapar. Ücretsiz seçenekler:
    </p>
    <ul>
      <li>
        <strong>LLM'ler (ChatGPT/Claude/Gemini ücretsiz):</strong> özgeçmiş metnini yapıştırın, yapılandırılmış
        çıktı (JSON şeması) isteyin. Standart formatlarda %90 doğruluk. İki sütunlu
        özgeçmişler, taranmış PDF'ler, garip yazı tiplerinde başarısız olur.
      </li>
      <li>
        <strong>Affinda Free Tier:</strong> ayda 100 ücretsiz ayrıştırma. Gerçek ATS kalitesinde
        ayrıştırıcı. Düşük hacim için dürüst ücretsiz seçenek.
      </li>
      <li>
        <strong>Açık kaynak ayrıştırıcılar (PyPI'de resume-parser vb.):</strong> düz metin
        özgeçmişler dışında kırılgan. Bir Python işlem hattını sürdürmekte rahat bir geliştirici değilseniz
        önermek zor.
      </li>
      <li>
        <strong>Apache Tika:</strong> ücretsiz OCR + metin çıkarma (ayrıştırma değil). Yapılandırma için
        bir <a href="/learn/llm">LLM</a> ile eşleştirin.
      </li>
    </ul>

    <h2 id="accuracy">Ücretsiz özgeçmiş eleme araçları gerçekten doğru mu?</h2>
    <p>
      Önceden eğitilmiş AI modelleri (GPT-4, Claude, Gemini), yayınlanan değerlendirmelere göre
      teknik rollerde özgeçmişleri iş tanımlarına karşı insan eleme uzmanlarıyla yaklaşık %75–85
      uyumla puanlar (alan gelişiyor — daha yeni kıyaslamalar değişiyor). Başarısızlık modları tutarlıdır:
    </p>
    <ul>
      <li>
        <strong>Anahtar kelime doldurmada yanlış pozitifler.</strong> Her yere
        &ldquo;React, Redux, Next.js&rdquo; ekleyen bir özgeçmiş, aday bunları zar zor kullanmış olsa bile
        iyi puan alır.
      </li>
      <li>
        <strong>Aktarılabilir becerilerde yanlış negatifler.</strong> Bir ön uç rolüne başvuran 5 yıllık arka uç mühendisi
        düşük puan alır çünkü iş tanımı anahtar kelimeleri özgeçmişte yoktur — ancak
        uyum sağlayabilir.
      </li>
      <li>
        <strong>Unvan uyuşmazlığı.</strong> Bir startup'ta &ldquo;Kıdemli Yazılım Mühendisi&rdquo; ile
        Google'daki aynı unvan farklı anlamlara gelir; eleme aracı bunu bilmez.
      </li>
    </ul>
    <p>
      Herhangi bir eleme aracını (ücretsiz veya ücretli) kullanmanın doğru yolu: bir karar aracı değil, bir triyaj aracı olarak.
      %70+ puan &ldquo;telefon görüşmesine değer&rdquo;; %30 puan
      &ldquo;referansınız yoksa geçin.&rdquo; Sınırda vakaları bir insan incelemeden asla reddetmeyin.
    </p>
  </>
);

export const cta = {
  label: "Ücretsiz özgeçmiş anahtar kelime puanlayıcımızı deneyin",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "1 kişilik bir işe alım ekibi için en iyi tamamen ücretsiz ATS hangisidir?",
    a: "Zoho Recruit Free Forever — 1 aktif iş ilanı, 1 kullanıcı, 100 aday, iyi bir arayüz. Bu hacmin altında ücretsiz işlem hattı takip aracımız yeterli olabilir; üstünde Zoho'yu yükseltmeniz veya SmartRecruiters Free'ye geçmeniz gerekir.",
  },
  {
    q: "Ücretsiz özgeçmiş ayrıştırıcılar insan incelemesini atlamak için yeterince doğru mu?",
    a: "Hayır ve olmamalıdır. Yapılandırılmış veri çıkarmak için ayrıştırıcıları kullanın; gerçek karar için insanları (veya ikinci bir geçiş olarak AI'yı) kullanın. Affinda'nın ücretsiz katmanı, düşük hacimde en iyi yalnızca ayrıştırma seçeneğidir.",
  },
  {
    q: "ChatGPT ücretsiz özgeçmişleri gerçekten eleyebilir mi?",
    a: "Triyaj için evet. 5-10 özgeçmişi ve iş tanımını yapılandırılmış bir komutla yapıştırın ('bu belirli gereksinimlere göre 1-5 arası sırala, bir tablo çıktısı ver'). Nihai işe alım kararları için hayır — herhangi bir eleme aracıyla aynı uyarı geçerlidir.",
  },
  {
    q: "Açık kaynak kendi barındırmalı ATS gerçek bir seçenek mi?",
    a: "Yalnızca bir sistem yöneticiniz varsa ve altyapıyı sürdürmeyi seviyorsanız. Çoğu ekip için, bir OSS ATS'yi kendiniz çalıştırmaktansa freemium ve elektronik tablo taşması daha az zahmetlidir.",
  },
];