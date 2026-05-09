/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Küçük işletmeler için bir geliştirme ekibiyle, GitHub Copilot neredeyse
      diğer tüm yazılım aboneliklerinden daha hızlı geri dönüş sağlar. Engel
      maliyet değil — benimseme mekaniği ve gerçek üretkenlik kazanımlarını
      ölçmektir. Bu rehber, küçük işletmeler için karar çerçevesidir.
    </p>
  </>
);

export const toc = [
  { id: "math", label: "Küçük ekipler için matematik" },
  { id: "rollout", label: "Kullanıma sunma oyun kitabı" },
  { id: "measure", label: "Gerçek üretkenlik kazancını ölçme" },
  { id: "objections", label: "Yaygın geliştirici itirazları" },
];

export const body = (
  <>
    <h2 id="math">Küçük ekipler için matematik</h2>
    <p>
      Kendi rakamlarınızla <a href="/tools/github-copilot-roi-calculator">ROI hesaplayıcımızı</a> kullanın.
      Kodlama görevlerinde muhafazakar %15 üretkenlik artışıyla hızlı kıyaslamalar:
    </p>
    <ul>
      <li><strong>3 kişilik geliştirici ekibi:</strong> $684/yıl abonelik. ~$50K/yıl tasarruf.</li>
      <li><strong>5 kişilik geliştirici ekibi:</strong> $1140/yıl abonelik. ~$80K/yıl tasarruf.</li>
      <li><strong>10 kişilik geliştirici ekibi:</strong> $2280/yıl abonelik. ~$170K/yıl tasarruf.</li>
      <li><strong>15 kişilik geliştirici ekibi:</strong> $3420/yıl abonelik. ~$250K/yıl tasarruf.</li>
    </ul>
    <p>
      Varsayılan üretkenlik kazancının yarısında bile (%7.5), <a href="/learn/roi">ROI</a> ezici bir
      şekilde yüksektir. Abonelik maliyeti, çoğu küçük işletme BT bütçesinin gürültü
      tabanının altındadır.
    </p>

    <h2 id="rollout">Küçük ekipler için kullanıma sunma oyun kitabı</h2>
    <ol>
      <li>
        <strong>60 gün boyunca 3-5 gönüllüyle pilot uygulama yapın.</strong> Kendi
        seçtikleri; zorunlu değil. İdeal olarak bir kıdemli geliştirici, bir orta
        seviye, bir junior içerir.
      </li>
      <li>
        <strong>Sonuçları takip edin.</strong> PR çıktısı, işlenen satırlar (uyarı),
        kendi bildirilen memnuniyet. Niteliksel sinyal, nicelikselden daha
        güvenilirdir — geliştiriciler bir aracın yardımcı olup olmadığını iyi
        değerlendirir.
      </li>
      <li>
        <strong>İş akışını iyileştirin.</strong> Bazı ekipler Copilot'u ilk
        taslaklar için yoğun kullanır; diğerleri yalnızca otomatik tamamlama için
        seyrek kullanır. Doğru kullanım şekli değişir.
      </li>
      <li>
        <strong>Pilot olumluysa (çoğu öyledir), tüm ekibe yayın.</strong>{" "}
        İsteğe bağlı katılım, zorunlu benimsemeden daha iyidir — açıkça
        katılmayan geliştiricilerin, yukarıdan zorlamanın çözmediği belirli
        endişeleri olma eğilimindedir.
      </li>
      <li>
        <strong>Business katmanı faturalandırmasını ayarlayın.</strong> Merkezi;
        kurum yöneticisi kontrolünde.
      </li>
      <li>
        <strong>Politikaları güncelleyin.</strong> Kuruluşun Copilot kullanımıyla
        ilgili Açık Kaynak katkıları, müşteri çalışmaları ve kod incelemelerindeki
        tutumunu belgeleyin. Belirsizliği azaltır.
      </li>
    </ol>

    <h2 id="measure">Gerçek üretkenlik kazancını ölçme</h2>
    <p>
      İşe yarayan niceliksel metrikler:
    </p>
    <ul>
      <li>
        <strong>Geliştirici başına haftalık PR sayısı.</strong> Copilot öncesi 60
        günlük temel çizgiyi, kullanıma sunma sonrası 60 günle karşılaştırın. Ekip
        büyüklüğü ve proje karmaşıklığına göre ayarlayın.
      </li>
      <li>
        <strong>Görev başlangıcından PR açılışına kadar geçen süre.</strong> İnceleme
        beklemesini içeren görev tamamlamadan daha hassastır.
      </li>
      <li>
        <strong>Geliştirici başına kod satırı (uyarı ile).</strong> Yapay zeka
        araçları ayrıntılı kodu teşvik eder; ham satır sayısı yanıltıcı olabilir.
        Yalnızca yönlendirici sinyal olarak kullanın.
      </li>
      <li>
        <strong>Test kapsamı eğilimleri.</strong> Sabit kalmalı veya iyileşmelidir.
        Test gönderimi, Copilot benimsemesine eşlik etmelidir.
      </li>
    </ul>
    <p>
      İşe yarayan niteliksel metrikler:
    </p>
    <ul>
      <li>
        <strong>Kendi bildirilen memnuniyet.</strong> Üç aylık anket: &ldquo;Copilot
        yardımcı oluyor mu?&rdquo; Çoğu ekip 3. ayda evet cevabında birleşir.
      </li>
      <li>
        <strong>&ldquo;Kişisel olarak ödemeniz gerekse tutar mıydınız?&rdquo;</strong>{" "}
        Elde tutma testi. Çoğu geliştirici evet derse, ROI gerçektir.
      </li>
      <li>
        <strong>Belirli kullanım senaryosu örnekleri.</strong> Geliştiricilerin
        &ldquo;Copilot bunu yazdı ve bana bir saat kazandırdı&rdquo; hikayeleri
        paylaşması. Anekdotsal ama birikir.
      </li>
    </ul>

    <h2 id="objections">Yaygın geliştirici itirazları + bunlara nasıl yanıt verilir</h2>
    <ul>
      <li>
        <strong>&ldquo;Kötü kod yazıyor.&rdquo;</strong> Bazen doğru. Çerçeve: bu bir
        başlangıç noktasıdır, bitiş çizgisi değil. Kod incelemesi hala gereklidir.
        Testler hala hataları yakalar.
      </li>
      <li>
        <strong>&ldquo;Beni daha kötü bir programcı yapacak.&rdquo;</strong> Aşırı
        güvenen juniorlar için endişe gerçektir. Azaltın: Copilot olmayan haftalarda
        kıdemliyle eşli programlama yapın; birleştirmeden önce üretilen kodu
        anladığınızdan emin olun.
      </li>
      <li>
        <strong>&ldquo;Gizlilik / eğitim verileri.&rdquo;</strong> Business ve
        Enterprise katmanları eğitim verisi kullanımından çıkar. Bunu sözleşmeye
        ekleyin.
      </li>
      <li>
        <strong>&ldquo;Kodumun GitHub sunucularında olmasını istemiyorum.&rdquo;</strong>{" "}
        Kendi kendine barındırılan alternatifler (Continue.dev yerel modellerle,
        Tabnine kendi kendine barındırılan, Codeium kendi kendine barındırılan)
        mevcuttur. Endişeyi kabul edin; alternatifleri sunun.
      </li>
      <li>
        <strong>&ldquo;Çıktıda telif hakkı.&rdquo;</strong> Gerçek endişe. Business ve
        Enterprise katmanları fikri mülkiyet tazminatı içerir. Bireysel katman
        içermez.
      </li>
      <li>
        <strong>&ldquo;Satıcı bağımlılığı.&rdquo;</strong> Mütevazı. Copilot bir
        düzenleyici eklentisidir — Cursor, Codeium veya Continue'e geçmek
        basittir. Kodunuz Copilot'ta yaşamaz.
      </li>
    </ul>
    <p>
      Çoğu itirazdaki desen: tamamen yanlış değil, doğru katman ve iş akışıyla
      ele alınabilir. Zorunlu benimseme başarısız olur; şeffaf itiraz yönetimiyle
      gönüllü odaklı benimseme başarılı olur.
    </p>
  </>
);

export const cta = {
  label: "Ekibiniz için ROI hesaplayın",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "GitHub Copilot küçük işletmeler için değer mi?",
    a: "Geliştiricileri olan her ekip için neredeyse her zaman evet. 3 kişilik ekip: $684/yıl, muhafazakar %15 üretkenlik artışıyla ~$50K/yıl tasarruf sağlar. 10 kişilik ekip: $2280/yıl, ~$170K/yıl tasarruf sağlar. Abonelik maliyeti çoğu küçük işletme BT gürültü tabanının altındadır. Engel maliyet değil — benimseme mekaniğidir.",
  },
  {
    q: "GitHub Copilot'u ekibime nasıl sunarım?",
    a: "3-5 gönüllüyle (bir kıdemli, bir orta, bir junior) 60 günlük pilot uygulama. PR çıktısını ve niteliksel memnuniyeti takip edin. Olumluysa (çoğu pilot öyledir), isteğe bağlı katılımla tüm ekibe yayın (zorunlu benimseme başarısız olur). Business katmanı faturalandırmasını ayarlayın. Açık Kaynak / müşteri çalışmaları için politikaları belgeleyin.",
  },
  {
    q: "Copilot'tan gerçek üretkenlik kazancını nasıl ölçerim?",
    a: "Niceliksel: geliştirici başına haftalık PR sayısı (öncesi/sonrası 60 günlük temel çizgileri karşılaştırın), görev başlangıcından PR açılışına kadar geçen süre, test kapsamı eğilimleri. Niteliksel: kendi bildirilen memnuniyet (üç aylık anket), 'kişisel olarak ödemeniz gerekse tutar mıydınız' elde tutma testi, belirli kullanım senaryosu hikayeleri.",
  },
  {
    q: "Geliştiricilerin Copilot'a itirazlarını nasıl ele alırım?",
    a: "Yaygın itirazlar ve yanıtlar: 'kötü kod yazar' (bir başlangıç noktasıdır, kod incelemesi hala gereklidir), 'beni daha kötü programcı yapar' (aşırı güvenen juniorlar için gerçek — Copilot olmayan eşli oturumlarla azaltın), 'gizlilik' (Business/Enterprise çıkar), 'telif hakkı' (Business/Enterprise fikri mülkiyet tazminatı). Zorunlu benimseme başarısız olur; şeffaf yönetimle gönüllü odaklı benimseme başarılı olur.",
  },
];