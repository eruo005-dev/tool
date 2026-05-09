/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Özelleştirme&rdquo; maddeleri yeniden yazmak değil — anahtar kelimeleri, unvanları ve somut deneyimleri, iş tanımının istediğiyle eşleştirmek, aynı zamanda dürüst kalmaktır. Ücretli araçlar (Teal AI, Jobscan Premium, ResumeWorded) bunu ayda 9–50$ karşılığında yapar. Anahtar kelime puanlayıcımız + genel bir <a href="/learn/llm">LLM</a> ile ücretsiz iş akışı, aynı sonucun ~%90'ını verir.
    </p>
    <p>
      Aşağıda: tam 5 adımlı iş akışı, işi yapan prompt ve göndermeden önce kendinize sormanız gereken sorular.
    </p>
  </>
);

export const toc = [
  { id: "workflow", label: "5 adımlı ücretsiz iş akışı" },
  { id: "prompt", label: "Tam LLM promptu" },
  { id: "validation", label: "Anahtar kelime puanlayıcı ile doğrulama" },
  { id: "honest", label: "Yalan söylemeden nasıl özelleştirilir" },
  { id: "stuffing", label: "Anahtar kelime doldurma neden ters teper" },
];

export const body = (
  <>
    <h2 id="workflow">5 adımlı ücretsiz iş akışı (İş tanımı başına 15 dakika)</h2>
    <ol>
      <li>
        <strong>Temeli puanlayın.</strong> Genel özgeçmişinizi + iş tanımını{" "}
        <a href="/tools/resume-keyword-match-scorer">anahtar kelime puanlayıcımıza</a> yapıştırın.
        Puanı not edin (genel bir özgeçmişte genellikle %30-50 olur).
      </li>
      <li>
        <strong>Boşlukları belirleyin.</strong> &ldquo;Eksik&rdquo; listesi, özgeçmişinizde hangi iş tanımı anahtar kelimelerinin olmadığını gösterir. Gerçekten deneyiminiz olanlara göre sıralayın.
      </li>
      <li>
        <strong>LLM özelleştirme promptunu çalıştırın.</strong> İkisini de aşağıdaki prompt ile ChatGPT veya Claude ücretsize yapıştırın. Yeniden yazılmış bir deneyim bölümü alın.
      </li>
      <li>
        <strong>Ses tonu için düzenleyin.</strong> Yapay zeka çıktısı biraz yapay okunur — her madde işaretinde 1-2 ifadeyi size benzeyecek şekilde düzeltin. Ham yapay zeka çıktısını asla göndermeyin.
      </li>
      <li>
        <strong>Yeniden puanlayın.</strong> Özelleştirilmiş özgeçmiş + iş tanımını anahtar kelime puanlayıcıya geri yapıştırın. Hedef: %70+ eşleşme. Düşükse, tekrarlayın.
      </li>
    </ol>

    <h2 id="prompt">Tam LLM promptu</h2>
    <p>Bunu ChatGPT veya Claude ücretsize kopyalayın:</p>
    <pre><code>{`[rol adını yapıştır] rolüne [şirket adını yapıştır] şirketinde başvuruyorum.

İşte tam iş tanımı:

[iş tanımını yapıştır]

İşte mevcut özgeçmişim:

[özgeçmişi yapıştır]

Özgeçmişimin deneyim bölümünü şu şekilde yeniden yaz:
1. Gerçekten yaptığım şeylerle eşleştikleri yerde iş tanımındaki fiilleri ve beceri terimlerini kullan
2. Rol başına bu iş tanımıyla en alakalı 2 madde işaretini çıkar
3. Toplam uzunluğu bir sayfada tut
4. Sahip olmadığım becerileri veya deneyimleri UYDURMA

Önerilen her madde işareti için, hangi iş tanımı gereksinimini karşıladığını kısaca not et (parantez içinde).
Göndermeden önce parantez içindekileri düzenleyip çıkaracağım.`}</code></pre>
    <p>
      Parantez içindeki notlar hilesi anahtardır — LLM'i her madde işaretini belirli bir iş tanımı gereksinimine bağlamaya zorlar, bu da hiçbir şeyin uydurulmadığını doğrulamanızı kolaylaştırır.
    </p>

    <h2 id="validation">Anahtar kelime puanlayıcı ile doğrulama</h2>
    <p>
      Özelleştirmeden sonra neden yeniden puanlamalısınız:
    </p>
    <ul>
      <li>
        <strong>Halüsinasyonları yakalarsınız.</strong> LLM, sahip olmadığınız &ldquo;Kubernetes deneyimi&rdquo; eklediyse, puanlayıcı bunu bir eşleşme olarak gösterir — sizi kaldırmaya teşvik eder.
      </li>
      <li>
        <strong>İyileştirmeyi ölçersiniz.</strong> Puan %35'ten %75'e mi çıktı? İş tanımının otomatik elemesini geçtiniz. %50'de mi takıldı? Boşluk gerçek bir beceri uyuşmazlığıdır — aktarılabilir deneyiminiz varsa yine de başvurun ancak daha zor bir eleme bekleyin.
      </li>
      <li>
        <strong>Hızlıca yineleme yapabilirsiniz.</strong> Bir madde işaretini düzenleyin, 5 saniyede yeniden puanlayın. Ücretli araçların ücret aldığı döngü budur.
      </li>
    </ul>

    <h2 id="honest">Yalan söylemeden nasıl özelleştirilir</h2>
    <p>
      &ldquo;Özelleştirme&rdquo; ile &ldquo;yalan söyleme&rdquo; arasındaki çizgi, gerçekte yaptıklarınızı tanımlamak için hangi kelimeleri kullandığınızdır. Üç kural:
    </p>
    <ol>
      <li>
        <strong>Aynı isim, farklı çerçeveleme sorun değildir.</strong> Bir şeyi &ldquo;React&rdquo; ile oluşturduysanız ve iş tanımı &ldquo;ReactJS&rdquo; istiyorsa, kesinlikle iş tanımının ifadesini kullanın.
      </li>
      <li>
        <strong>Yakın beceri bazen sorun değildir.</strong> Vue kullandıysanız ve iş tanımı React istiyorsa, &ldquo;Vue'da (React/Angular'a benzer) bileşen tabanlı arayüzler oluşturdum&rdquo; yazabilirsiniz — dürüst, doğru, anahtar kelimeyi yüzeye çıkarır.
      </li>
      <li>
        <strong>Tamamen yeni beceriler sorunludur.</strong> Kullanmadığınız bir beceri veya aracı asla listelemeyin. Telefon görüşmesi bunu yakalar; teklif geri çekilir.
      </li>
    </ol>

    <h2 id="stuffing">Anahtar kelime doldurma neden ters teper</h2>
    <p>
      &ldquo;Anahtar kelimelerle görünmez beyaz metin&rdquo; hilesi hala Reddit'te tartışılıyor. İşte neden işe yaramadığı:
    </p>
    <ul>
      <li>
        Modern ATS sistemleri anahtar kelime yoğunluğu anormalliklerini işaretler — 50 kez &ldquo;Python&rdquo; geçen bir özgeçmiş yükseltilmez, düşürülür.
      </li>
      <li>
        İşe alım uzmanları özgeçmişi kendi görüntüleyicilerinde açar, bu genellikle tüm metni gösterir. Beyaz üzerine beyaz, Cmd+A'ya veya yazdırmaya bastıkları anda görünür hale gelir.
      </li>
      <li>
        Otomatik elemeyi geçse bile, insan incelemesinde başarısız olur — önemli olan her hunideki bir sonraki adım budur.
      </li>
    </ul>
    <p>
      Yukarıdaki dürüst özelleştirme iş akışı, risk olmadan aynı eşleşme puanına ulaşmanızı sağlar. İş tanımı başına 15 dakika harcayın; daha az, daha iyi özgeçmişler gönderin; kamuya açık işe alım uzmanı verilerine göre yanıt oranı 5-10 kat artar.
    </p>
  </>
);

export const cta = {
  label: "Özelleştirilmiş özgeçmişinizi puanlayın (ücretsiz, sınırsız)",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "Her özgeçmişi özelleştirmek için ne kadar zaman harcamalıyım?",
    a: "10-15 dakika ideal noktadır. Daha azında boşlukları ele almazsınız; daha fazlasında teker döndürürsünüz. Yukarıdaki LLM iş akışı bu hedefi tutturur.",
  },
  {
    q: "Her başvuru için özgeçmişimi özelleştirmeli miyim?",
    a: "Gerçekten istediğiniz roller için evet. Huniyi doldurmak için serpme başvurular için genel bir özgeçmiş yeterlidir — ancak çok daha düşük bir yanıt oranı bekleyin. Matematik: 1 yanıt alan 5 özelleştirilmiş başvuru, 0-1 yanıt alan 50 genel başvuruyu yener.",
  },
  {
    q: "Özgeçmişimi özelleştirmek için yapay zeka kullanmak hile olarak kabul edilir mi?",
    a: "İşverenlerin umursadığı hiçbir anlamda değil. Yapay zeka, gerçek deneyiminizi iş tanımının terimleriyle eşleşecek şekilde yeniden yazar — işe alım uzmanları ve yöneticiler, aday değerlendirmelerini işe alım komiteleri için düzenlerken aynısını yapar. Önemli olan, temeldeki deneyimin gerçek olup olmadığıdır.",
  },
  {
    q: "İyi bir anahtar kelime eşleşme puanı nedir?",
    a: "%70-85 ideal noktadır. %60'ın altında otomatik elemeyi geçmekte zorlanırsınız; %90'ın üzerinde insan incelemesinde anahtar kelime doldurma gibi görünmeye başlar. Hedef 'açıkça alakalı'dır, 'mükemmel örtüşme' değil.",
  },
];