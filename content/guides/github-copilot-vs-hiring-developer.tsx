/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Copilot'u mu benimseyelim yoksa başka bir geliştirici mi işe alalım?&rdquo; yanlış bir soru — bunlar farklı kategoriler. Doğru çerçeve: mevcut geliştiricilerinize Copilot verin ve yeni kapasiteye ihtiyacınız olduğunda işe alım yapın. Bu rehber, maliyet hesaplarını, güvenlik endişelerini ve benimseme oyun kitabını adım adım açıklıyor.
    </p>
  </>
);

export const toc = [
  { id: "framing", label: "Neden aslında bir takas değil" },
  { id: "cost-comparison", label: "Maliyet karşılaştırması" },
  { id: "ai-replace", label: "Yapay zeka geliştirici işlerini ortadan kaldıracak mı?" },
  { id: "small-business", label: "Küçük işletmeler için buna değer mi?" },
  { id: "freelance", label: "Serbest çalışanlar için verimlilik" },
];

export const body = (
  <>
    <h2 id="framing">Neden aslında bir takas değil</h2>
    <p>
      GitHub Copilot, mevcut geliştiriciler için bir verimlilik çarpanıdır (koltuk başına $228/yıl). Bir geliştirici işe alımı ise tam bir çalışan maliyetidir (toplam $150K-300K). Bunlar farklı finansal kategorilerdir; farklı yatırım getirileri ve farklı karar zaman çizelgeleri vardır.
    </p>
    <p>
      Doğru soru çifti:
    </p>
    <ol>
      <li>
        <strong>Mevcut geliştiricilerimize Copilot vermeli miyiz?</strong> Neredeyse her zaman evet — <a href="/tools/github-copilot-roi-calculator">ROI hesaplayıcımıza</a> bakın. Aktif olarak kod yazan geliştiricilerin olduğu her ekip büyüklüğünde matematik işe yarar.
      </li>
      <li>
        <strong>Ek geliştirici kapasitesine ihtiyacımız var mı?</strong> Ayrı bir soru. Cevap evetse, işe alın (ve yeni çalışana Copilot verin). Hayırsa, önce mevcut kapasiteyi Copilot ile optimize edin.
      </li>
    </ol>
    <p>
      Bunu &ldquo;Copilot ya da işe alım&rdquo; olarak çerçeveleyen şirketler genellikle her ikisine de yetersiz yatırım yapar. Doğru cevap neredeyse her zaman &ldquo;her ikisi de, sırayla&rdquo;dır.
    </p>

    <h2 id="cost-comparison">Maliyet karşılaştırması (seçim yapmak zorunda kalındığında)</h2>
    <ul>
      <li>
        <strong>GitHub Copilot Business:</strong> Koltuk başına $228/yıl. 15 kişilik bir ekip için $3420/yıl. Kodlama görevlerinde muhafazakar %15 verimlilik artışı → tipik orta seviye ücret için yıllık $200K+ zaman tasarrufu.
      </li>
      <li>
        <strong>Bir ek orta seviye geliştirici (ABD):</strong> $180K taban + $25K ikramiye + $15K hisse senedi ≈ toplam $220K. Bir geliştiriciye eşdeğer kapasite ekler.
      </li>
      <li>
        <strong>Bir ek yurtdışı geliştirici:</strong> Toplam $40K-80K. Kapasite ekler (koordinasyon yüküyle birlikte).
      </li>
      <li>
        <strong>Bir sözleşmeli/serbest geliştirici:</strong> Saat başına $80-200. İhtiyaca göre değişken kapasite.
      </li>
    </ul>
    <p>
      Dolar başına kapasite: Copilot en yüksek kaldıraçlı harcamadır. Yeni işe alım size net yeni kapasite sağlar. Farklı sorunları çözerler.
    </p>

    <h2 id="ai-replace">Yapay zeka geliştirici işlerini ortadan kaldıracak mı?</h2>
    <p>
      Çok yıllı çalışmalara (GitHub, GitClear, Microsoft Research) ve 2023-2026 sektör gözlemlerine dayanan dürüst değerlendirme:
    </p>
    <ul>
      <li>
        <strong>Verimlilik kazanımları:</strong> Kodlama görevlerinde %10-30. 10 kat iş gücü kaybı değil. Rakamlar gerçek ama ılımlı.
      </li>
      <li>
        <strong>Kıdemli geliştirici kaldıracı:</strong> artar. Kıdemli geliştiriciler Copilot'u daha iddialı projeler için iskele olarak kullanır. Kıdemsiz ve kıdemli arasındaki kaldıraç farkı açılabilir.
      </li>
      <li>
        <strong>Kıdemsiz geliştirici becerileri:</strong> Üretken olmak için gereken asgari beceri seviyesi yükselebilir. Kıdemsiz geliştiriciler, anlamadıkları kod için Copilot'a aşırı güvenmemeye dikkat etmelidir.
      </li>
      <li>
        <strong>Net istihdam etkisi:</strong> 2026 itibarıyla, yazılım mühendisliği istihdamı kabaca istikrarlıdır. 2023'ün karamsar tahminleri gerçekleşmedi. Copilot'u benimseyen şirketler geliştiricileri işten çıkarmadı — daha fazla ürün çıkardı.
      </li>
      <li>
        <strong>Uzun vadeli:</strong> belirsiz. Modeller gelişmeye devam ediyor; yapay zeka yeteneği ile iş gücü talebi arasındaki ilişki gelişmeye devam edecek. Makul çerçeve: 5 yıllık ufukta yapay zeka işi değiştirir, ortadan kaldırmaz.
      </li>
    </ul>

    <h2 id="small-business">GitHub Copilot küçük işletmeler için buna değer mi?</h2>
    <p>
      Geliştiricileri olan her ekip için neredeyse her zaman evet. Matematik:
    </p>
    <ul>
      <li>3 kişilik geliştirici ekibi: $684/yıl. %15 verimlilik artışı × ekip ücreti ~$50K tasarruf.</li>
      <li>10 kişilik geliştirici ekibi: $2280/yıl. %15 verimlilik artışı × ekip ücreti ~$170K tasarruf.</li>
    </ul>
    <p>
      Engel maliyet değil — benimseme. Bazı geliştiriciler beğeni, verimlilik iddiası şüpheciliği veya eğitim verisi endişeleri nedeniyle Copilot'a direnir. Doğru hamle:
    </p>
    <ol>
      <li>60 gün boyunca 3-5 gönüllü ile pilot uygulama yapın.</li>
      <li>PR çıktılarını ekip taban çizgisiyle karşılaştırın.</li>
      <li>Memnuniyetlerini anketle ölçün.</li>
      <li>Olumluysa, isteğe bağlı katılımla tüm ekibe yayın (zorla benimsetme kızgınlığa yol açar).</li>
    </ol>

    <h2 id="freelance">Serbest çalışanlar + bağımsız yükleniciler için Copilot</h2>
    <p>
      Bireysel geliştiriciler için Copilot Individual (ayda $10 veya yılda $100), teknolojideki en yüksek kaldıraçlı aboneliklerden biridir:
    </p>
    <ul>
      <li>
        <strong>Daha hızlı proje teslimi.</strong> Kodlama görevlerinde %10-30, bir proje boyunca birikir.
      </li>
      <li>
        <strong>Alan değiştirme hızı.</strong> Sık kullanmadığınız bir dilde çalışmak hızlanır — Copilot, Google'da arayacağınız deyimleri doldurur.
      </li>
      <li>
        <strong>Dokümantasyon oluşturma.</strong> İlk geçiş yorumları + JSDoc/Sphinx bloklarında oldukça iyidir.
      </li>
      <li>
        <strong>Teklif taslağı hazırlama.</strong> Teknik yazıları iskelelemekte iyidir.
      </li>
    </ul>
    <p>
      Makul bir saatlik ücrete sahip bireysel geliştiriciler için <a href="/learn/roi">ROI</a> ezici bir şekilde yüksektir. Size bir düzine saat kazandıran araçlar için yılda $100, kendini defalarca amorti eder.
    </p>
  </>
);

export const cta = {
  label: "Ekibiniz için Copilot ROI'sini hesaplayın",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "GitHub Copilot vs bir geliştirici işe almak — hangisi daha az maliyetli?",
    a: "Farklı kategoriler. Copilot (koltuk başına $228/yıl) mevcut geliştiriciler için bir verimlilik çarpanıdır. Yeni geliştirici işe alımı (toplam $150-300K) net yeni kapasitedir. Doğru çerçeve: mevcut geliştiricilere Copilot verin, yeni kapasiteye ihtiyacınız olduğunda işe alın. Neredeyse hiçbir zaman ya-ya da değildir.",
  },
  {
    q: "Yapay zeka geliştirici işimi ortadan kaldıracak mı?",
    a: "Çok yıllı çalışmalar, kodlama görevlerinde %10-30 verimlilik artışı gösteriyor, 10 kat iş gücü kaybı değil. Kıdemli geliştirici kaldıracı artar; kıdemsiz geliştirici beceri tabanı yükselir. 2026 itibarıyla yazılımda net istihdam kabaca istikrarlıdır. Yapay zekayı benimseyen şirketler, geliştiricileri işten çıkarmak yerine daha fazla ürün çıkardı.",
  },
  {
    q: "GitHub Copilot küçük işletmeler için buna değer mi?",
    a: "Geliştiricileri olan ekipler için neredeyse her zaman evet. 3 kişilik ekip: ~$50K verimlilik kazancı için $684/yıl. 10 kişilik ekip: ~$170K için $2280/yıl. Engel, geliştirici benimsemesidir (beğeni, şüphecilik, eğitim verisi endişeleri), maliyet değil. Önce gönüllülerle pilot uygulama yapın.",
  },
  {
    q: "Serbest çalışanlar için GitHub Copilot — sizi daha üretken yapıyor mu?",
    a: "Evet — anlamlı ölçüde. Bireysel katman yılda $100, kodlama görevlerinde ~%10-30 zaman kazandırır; makul bir saatlik ücrete sahip bireysel geliştiriciler için ROI ezicidir. En iyi kullanım alanları: daha hızlı teslimat, yabancı dillerde çalışma, dokümantasyon oluşturma, teklif iskelesi hazırlama.",
  },
];