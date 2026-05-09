/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Özgeçmişim PDF mi yoksa Word belgesi mi olmalı?&rdquo; sorusu,
      r/jobs ve r/resumes alt dizinlerinde en çok sorulan sorulardan biridir.
      Cevap, başvuru bağlamına, şirketin kullandığı ATS'ye ve incelemenin hangi
      aşamasında olduğunuza bağlıdır. Bu rehber, konunun pratik bir dökümünü
      sunar.
    </p>
  </>
);

export const toc = [
  { id: "default", label: "Varsayılan: PDF, ancak uyarılar var" },
  { id: "ats", label: "ATS'ler Word'ü ne zaman tercih eder" },
  { id: "plain-text", label: "Düz metin ne zaman kazanır" },
  { id: "what-recruiters-want", label: "İşe alımcılar aslında neyi açar" },
  { id: "tools", label: "Özgeçmiş dönüştürme araçları" },
];

export const body = (
  <>
    <h2 id="default">Varsayılan: PDF (ancak uyarılar var)</h2>
    <p>
      Doğrudan işe alımcıya veya doğrudan kariyer sayfasına yapılan başvuruların
      çoğu için PDF doğru varsayılandır. Nedenleri:
    </p>
    <ul>
      <li>
        <strong>Düzen bütünlüğü.</strong> Özgeçmişiniz, işe alımcının
        bilgisayarında sizinkiyle aynı görünür. Gizemli yazı tipi değişimi veya
        kenar boşluğu kayması olmaz.
      </li>
      <li>
        <strong>Evrensel uyumluluk.</strong> Her cihaz PDF açar. İşe alımcıların
        sizden yeniden göndermenizi istemesi gerekmez.
      </li>
      <li>
        <strong>Yanlışlıkla düzenlenmesi zordur.</strong> Word belgeleri bazen
        işe alımcılar tarafından inceleme sırasında notlanır ve düzenlemeler,
        dosyayı daha sonra açan herkese yayılır. PDF'ler orijinal halinizi
        korur.
      </li>
      <li>
        <strong>Daha küçük dosya boyutu.</strong> Sıkıştırılmış metin + gömülü
        yazı tipleri, çoğu durumda DOCX'in şişkinliğini yener.
      </li>
    </ul>
    <p>
      Uyarı: iş başvurusu açıkça Word (.docx) istiyorsa veya Word için güçlü
      bir tercihi olan bir ATS yükleme formuna besleme yapıyorsanız, onların
      istediğini yapın.
    </p>

    <h2 id="ats">ATS'ler Word'ü ne zaman tercih eder</h2>
    <p>
      Bazı eski ATS'ler (Taleo, iCIMS eski sürümleri) Word'ü PDF'den daha
      güvenilir bir şekilde ayrıştırır — metin çıkarma mantığı daha esnektir.
      Dikkat edilmesi gereken işaretler:
    </p>
    <ul>
      <li>
        <strong>Başvuru formu yüklemesi &ldquo;.doc, .docx, .pdf&rdquo; kabul
        ediyor</strong> ve PDF listede en sonda — teknik olarak destekliyorlar
        ancak ayrıştırıcıları Word için oluşturulmuş.
      </li>
      <li>
        <strong>Başvuru formu Word belgenizi form alanlarına ayrıştırıyor,
        ancak PDF'i ayrıştırmıyor.</strong> Güçlü işaret — Word gönderin.
      </li>
      <li>
        <strong>Başvuru formu &ldquo;.docx tercih edilir&rdquo; diyor.</strong>{" "}
        Dinleyin.
      </li>
    </ul>
    <p>
      Çoğu modern ATS (Greenhouse, Lever, Ashby, Workday) için PDF sorunsuzdur —
      PDF ayrıştırmayı düzeltmek için yılları olmuştur ve hata oranı düşüktür.
    </p>

    <h2 id="plain-text">Düz metin ne zaman kazanır</h2>
    <p>
      Düz metin (TXT) nadiren doğru birincil formattır, ancak belirli
      durumlarda kullanışlıdır:
    </p>
    <ul>
      <li>
        <strong>Yalnızca metin içeren bir başvuru formuna yapıştırıyorsunuz.</strong>{" "}
        Düz metin sürümü hiçbir biçimlendirmeyi korumaz, ancak ne girdiğinizi
        tamamen kontrol edersiniz. Yüklemenin biçimlendirilmiş sürümünüzü
        bozduğu durumlarda kullanışlıdır.
      </li>
      <li>
        <strong>Özgeçmişi{" "}
        <a href="/tools/resume-keyword-match-scorer">anahtar kelime eşleme
        puanlayıcımız</a></strong> veya benzer araçlardan geçiriyorsunuz —
        metin giriş formatıdır.
      </li>
      <li>
        <strong>E-posta gövdesi aracılığıyla gönderiyorsunuz</strong> (2026'da
        nadir, ancak kişisel ağ yönlendirmeleri için olur). E-posta gövdesinde
        düz metin + PDF eki iyidir; alıcı içeriği hemen görür.
      </li>
    </ul>

    <h2 id="what-recruiters-want">İşe alımcılar aslında neyi açar</h2>
    <p>
      Anonim işe alımcı anketleri tutarlı bir şekilde şunu gösteriyor:
    </p>
    <ul>
      <li>
        Çoğu işe alımcı önce PDF'leri açar. Daha cilalı görünürler ve
        biçimlendirme ile ilgili ne yapılacağına karar vermeyi gerektirmezler.
      </li>
      <li>
        Belirli ATS uzantıları kullanan işe alımcılar bazen Word'ü tercih eder
        çünkü sisteme temiz bir şekilde ayrışır.
      </li>
      <li>
        Düz metin, işe alımcılar tarafından nadiren doğrudan açılır; öncelikle
        bir ATS giriş formatıdır.
      </li>
    </ul>
    <p>
      Pratik iş akışı:
    </p>
    <ol>
      <li>
        Ana özgeçmişinizi <strong>Word (DOCX) veya Google Dokümanlar</strong>'da
        tutun — düzenlemesi en kolay olanıdır.
      </li>
      <li>
        Her başvuru için ana özgeçmişi özelleştirin (iş akışı için{" "}
        <a href="/guides/tailor-your-resume-to-job-postings-for-free">
          özgeçmiş özelleştirme rehberimize
        </a>{" "}
        bakın).
      </li>
      <li>
        Başvuru için <strong>PDF</strong> olarak dışa aktarın — başvuruların
        %95'i bu şekilde olmalıdır.
      </li>
      <li>
        Bir ATS özellikle istediğinde kullanmak üzere en güncel <strong>DOCX</strong>'i
        hazır bulundurun.
      </li>
      <li>
        Yalnızca bir metin alanına yapıştıracaksanız <strong>düz metin
        sürümü</strong> oluşturun.
      </li>
    </ol>

    <h2 id="tools">Özgeçmiş dönüştürme araçları</h2>
    <ul>
      <li>
        <strong>Word → PDF:</strong> Dosya → Farklı Kaydet → PDF. Yerleşik.
        Ücretsiz.
      </li>
      <li>
        <strong>Google Dokümanlar → PDF:</strong> Dosya → İndir → PDF Belgesi.
        Ücretsiz. Bulut tabanlıdır ancak özgeçmiş genellikle hassas değildir.
      </li>
      <li>
        <strong>PDF → Word (bir ATS istediğinde):</strong>{" "}
        <a href="/guides/pdf-to-word-and-editable-text">PDF'den Word'e
        rehberimize</a> bakın.
      </li>
      <li>
        <strong>PDF → düz metin:</strong>{" "}
        <a href="/tools/pdf-to-text">PDF'den metne aracımız</a>. Yalnızca
        tarayıcıda çalışır.
      </li>
      <li>
        <strong>Özgeçmiş anahtar kelime eşleme puanlaması:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">puanlayıcımız</a>, iş
        tanımı anahtar kelime örtüşmesini gösterir. Göndermeden önce %70+
        hedefleyin.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Özgeçmişinizi iş tanımına göre puanlayın (ücretsiz)",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "Özgeçmişim PDF mi, Word mü yoksa düz metin mi olmalı?",
    a: "Çoğu başvuru için varsayılan olarak PDF kullanın — düzeni korur, evrensel uyumluluk sağlar, yanlışlıkla düzenlenmesi zordur. Bazı eski ATS'ler (Taleo, eski iCIMS) Word'ü daha iyi ayrıştırır — formun işaretleri bunu gösteriyorsa DOCX gönderin. Düz metin yalnızca bir metin alanına yapıştırırken veya bir ayrıştırıcı aracından geçirirken kullanılır.",
  },
  {
    q: "Bir ATS, PDF özgeçmişimi reddeder mi?",
    a: "Çoğu modern ATS (Greenhouse, Lever, Ashby, Workday) PDF'i sorunsuz ayrıştırır. Eski sistemler (bazı Taleo, iCIMS dağıtımları) Word'ü daha güvenilir bir şekilde ayrıştırır. İşaretlere dikkat edin: başvuru '.docx tercih edilir' diyorsa veya Word'ü form alanlarına ayrıştırıp PDF'i ayrıştırmıyorsa, Word gönderin. Aksi takdirde PDF.",
  },
  {
    q: "Word özgeçmişimi PDF'e nasıl dönüştürebilirim?",
    a: "Word'de: Dosya → Farklı Kaydet → PDF. Google Dokümanlar'da: Dosya → İndir → PDF Belgesi. Her ikisi de yerleşik ve ücretsizdir. Göndermeden önce PDF'i her zaman önizleyin — yazı tipleri, sayfa sonları ve madde işareti stilleri kayabilir. Kaynak DOCX'te düzeltin, PDF'te değil.",
  },
  {
    q: "Neden özgeçmişimin düz metin sürümüne ihtiyaç duyayım?",
    a: "Yalnızca metin içeren başvuru formlarına (bazı eski ATS'ler) yapıştırmak, ücretsiz aracımız gibi özgeçmiş anahtar kelime puanlayıcılarından geçirmek veya kişisel ağ yönlendirmeleri için e-posta gövdesiyle göndermek için. Asla birincil gönderim formatı değildir — belirli iş akışları için bir çalışma formatıdır.",
  },
];