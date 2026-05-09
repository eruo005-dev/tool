/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Wave 43'te yayınladığımız iş arama dikeyi stratejik soruları kapsar (hangi araçların kullanılacağı, ATS gerçeği, Jobscan/Teal/Huntr karşılaştırması). Bu ek rehber, taktiksel AI istem oyun kitabıdır — ön yazılar, şirket araştırması, başvuru kişiselleştirme ve gerçekten kazandıran hibrit insan-AI iş akışı için daha yüksek kaliteli çıktı sağlayan belirli istemler.
    </p>
  </>
);

export const toc = [
  { id: "cover-letter", label: "İşe yarayan ön yazı istemleri" },
  { id: "company-research", label: "Mülakat öncesi AI şirket araştırması" },
  { id: "boolean-search", label: "İş eşleştirme için Boolean arama istemleri" },
  { id: "hybrid", label: "İnsan dokunuşunu AI ile birleştirmek" },
  { id: "time-savings", label: "AI'dan gerçek zaman tasarrufu" },
  { id: "disclosure", label: "İşverenlere AI kullandığınızı söylemeli misiniz?" },
];

export const body = (
  <>
    <h2 id="cover-letter">AI ön yazınızı yazabilir mi? (Evet, doğru istemle.)</h2>
    <p>
      Yanlış yol: &ldquo;[İş] için bir ön yazı yaz.&rdquo; Genel bir şablon alırsınız.
    </p>
    <p>
      Doğru yol:
    </p>
    <pre><code>{`[Şirket]'teki [rol] için 250 kelimelik bir ön yazı yaz.

Benim hakkımda: [özgeçmişinizden + LinkedIn'den bir paragraf].
Onlar hakkında: [Hakkımızda / kariyer sayfaları paragraflarını yapıştırın].
Bu rol hakkında: [3 belirli iş tanımı maddesini yapıştırın].

Açılış satırında, geçmişim ile misyonları arasında
BELİRLİ bir bağlantı kur. Sade dil kullan — "tutkuyla
kullanma" gibi dolgu yok. Geçmişimden somut bir metrik
ekle. Net bir sonraki adımla bitir.`}</code></pre>
    <p>
      Bu neden işe yarar: belirginlik (gerçek isimler, gerçek metrikler, gerçek misyon) zorlar, uzunluğu sınırlar (300 kelimeden uzun ön yazılar okunmaz) ve AI anlatımlarını (&ldquo;tutkulu,&rdquo; &ldquo;kullanma,&rdquo; &ldquo;sinerjik&rdquo;) yasaklar.
    </p>
    <p>
      Çıktıyı her zaman düzenleyin. AI ön yazıları %80 doğru ve %20 yanlış okunur. Farkı yaratan %20'dir — garip ifadeleri düzeltin, genel sıfatları değiştirin, belirli bir anekdot ekleyin.
    </p>

    <h2 id="company-research">Mülakat öncesi AI şirket araştırması</h2>
    <p>
      Karşılığını veren 200 kelimelik şirket brifingi:
    </p>
    <pre><code>{`Beni [şirket] hakkında 200 kelimeyle bilgilendir.

Şunları kapsa:
1. Ne yaptıkları + nasıl para kazandıkları
2. Son finansman veya önemli kilometre taşları (son 12 ay)
3. Kamuya açık gönderilerden / Glassdoor'dan / bloglarından
   mühendislik kültürü sinyalleri
4. [Sizin rolünüz] için geçerli olabilecek 3 zorluk

Kamuya açık olanın ötesinde spekülasyon yapma. Belirli
kaynakları belirt.`}</code></pre>
    <p>
      Mülakat hazırlığından önce çalıştırın. Yapılandırılmamış Google aramasında 30 dakika kazandırır.
    </p>
    <p>
      Daha derin mülakat hazırlığı için soru varyantı:
    </p>
    <pre><code>{`[Şirket]'in durumu göz önüne alındığında [yukarıdaki brifingi
yapıştırın], [rol] adaylarının karşılaşması muhtemel 3
mülakat sorusu nedir? Her biri için 2 cümlelik bir cevap
çerçevesi öner.`}</code></pre>

    <h2 id="boolean-search">İşe alım uzmanlarının yemin ettiği Boolean arama istemleri</h2>
    <p>
      Stack'inizde işe alım yapan şirketleri bulmak için Boolean aramaları kullanan iş arayanlar için:
    </p>
    <pre><code>{`[Sizin rolünüz]'ü [belirli becerileriniz] ile işe alan
şirketleri bulmak için Google Boolean aramaları oluşturun,
bariz eşleşmeyenleri (danışmanlıklar, işe alım ajansları,
stajyerlikler (aramıyorsanız)) hariç tutun.

Her birinin neye öncelik verdiğine dair açıklamalarla
birlikte 5 arama sorgusu döndür.`}</code></pre>
    <p>
      Modelin oluşturabileceği örnek çıktı:
    </p>
    <pre><code>{`site:lever.co OR site:greenhouse.io "Kıdemli React geliştirici"
  "uzaktan" -staj -ajans

site:linkedin.com/jobs "AI mühendisi" "Python" "PyTorch"
  "$150,000.." -işe_alım_uzmanı -personel`}</code></pre>
    <p>
      Bulduklarına göre sorguları yineleyin. Boolean aramaları hakkındaki çoğu işe alım yöneticisi blog yazısı aynı 5 deseni geri dönüştürür; AI, belirli durumunuza göre uyarlanmış varyantlar üretir.
    </p>

    <h2 id="hybrid">İş aramanızda insan dokunuşunu AI ile birleştirmek</h2>
    <p>
      2026'da iş aramalarını kazanan ekipler, AI aracılığıyla otomatik başvuru yapanlar değil. Yüksek kaldıraçlı insan işi için zaman kazanmak amacıyla AI kullananlardır:
    </p>
    <ul>
      <li>
        <strong>AI şunları yapar:</strong> ilk taslak ön yazılar, şirket araştırma brifingleri, özgeçmiş anahtar kelime taraması, deneme mülakat hazırlığı, maaş araştırma istemleri, takip şablonları.
      </li>
      <li>
        <strong>Siz şunları yaparsınız:</strong> ağ kurma konuşmaları, ön yazı girişini elle kişiselleştirme, referans isteme, gerçekten uyan rollere düşünceli başvurular yapma, gerçek mülakat cevaplarını yazma, mülakat sonrası ilişkiler kurma.
      </li>
    </ul>
    <p>
      Kaçınılması gereken tuzak: daha az kişisel olarak daha fazla işe başvurmak için AI kullanmak. Otomatik başvuru araçları (LazyApply, Sonara, Massive), hiçbir şey kişiselleştirilmediği için yanıt oranlarını düşürür. AI saatlerini daha az işe daha derinlemesine başvurmak için kullanın.
    </p>

    <h2 id="time-savings">İş başvurularında AI'dan gerçek zaman tasarrufu</h2>
    <p>
      Dürüst muhasebe:
    </p>
    <ul>
      <li>
        <strong>Ön yazı:</strong> geleneksel başvuru başına 30-45 dk → AI + düzenleme ile 8-12 dk. Tasarruf: başvuru başına ~20 dk.
      </li>
      <li>
        <strong>Şirket araştırması:</strong> 30 dk yapılandırılmamış Google araması → AI brifingi ile 10 dk. Tasarruf: başvuru başına ~20 dk.
      </li>
      <li>
        <strong>Özgeçmiş kişiselleştirme:</strong> 15-30 dk elle kişiselleştirme → <a href="/tools/resume-keyword-match-scorer">anahtar kelime puanlayıcımız</a> + AI madde yeniden yazımı ile 8-12 dk. Tasarruf: başvuru başına ~10 dk.
      </li>
      <li>
        <strong>Başvuru başına toplam:</strong> ~50 dk tasarruf. 12 başvuruluk bir haftada: 10 saat tasarruf.
      </li>
    </ul>
    <p>
      Bu 10 saati ağ kurma + daha iyi mülakat sonrası teşekkür yazıları yazma + stack'inizdeki kişilere ulaşma için yeniden yatırın. Birden çok işe alım uzmanı çalışmasına göre ağ kurma, işe alımların %60-70'ini hâlâ yönlendiriyor.
    </p>

    <h2 id="disclosure">İşverenlere başvurmak için AI kullandığınızı söylemeli misiniz?</h2>
    <p>
      Pratik rehberlik:
    </p>
    <ul>
      <li>
        <strong>Ön yazılar / özgeçmiş / başvuru metni.</strong> Proaktif olarak açıklamayın. Düzenlenmiş insan çıktısı gönderdiğiniz şeydir — bir eş anlamlılar sözlüğü veya yazar bir arkadaş kullanmanızla aynı. Standart, gönderdiğiniz kelimelerin size ait olmasıdır.
      </li>
      <li>
        <strong>Kodlama testleri.</strong> Sorulursa açıklayın. Bazı şirketler ev ödevlerinde AI kullanımını açıkça yasaklar; diğerleri umursamaz. Talimatları okuyun; net değilse sorun.
      </li>
      <li>
        <strong>Mülakat cevapları.</strong> Canlı AI kullanmayın. Nasıl hazırlandığınız sorulursa, &ldquo;İlk taslak araştırma ve şirket brifingleri için AI kullanıyorum&rdquo; 2026'da iyi bir cevaptır.
      </li>
      <li>
        <strong>Ev ödevleri.</strong> Kodlama testleriyle aynı — talimatları okuyun. Varsayılan: emin değilseniz açıklamadan AI kullanmayın.
      </li>
    </ul>
    <p>
      Genel kural: AI'ın araştırma asistanı + ilk taslak oluşturucu + sıkıcı kısımlar için araç olarak kullanılması geniş çapta kabul görür. AI'ın becerilerinizin / muhakemenizin / mülakat varlığınızın yerine geçmesi geniş çapta kabul görmez.
    </p>
  </>
);

export const cta = {
  label: "Özgeçmişinizi herhangi bir iş tanımına karşı puanlayın (ücretsiz)",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "AI gerçekten sizin için ön yazınızı yazabilir mi?",
    a: "Evet, doğru istemle — belirli şirket bilgisi, iş tanımı maddeleri ve kısıtlamalar (250 kelime sınırı, dolgu yok, somut bir metrik) dahil. Her zaman düzenleyin; AI çıktısı %80 doğru ve %20 yanlıştır ve %20'si kendini belli eder. Genel istemler, işe alım uzmanlarının tespit ettiği genel çıktı üretir.",
  },
  {
    q: "Mülakat öncesi şirketleri araştırmak için AI'ı nasıl kullanabilirim?",
    a: "Standart 200 kelimelik brifing istemi: ne yaptıklarını + nasıl para kazandıklarını, son finansman/kilometre taşlarını, mühendislik kültürü sinyallerini, rolünüzle ilgili 3 zorluğu kapsayın. Kaynakları belirtin. Mülakat hazırlığından önce çalıştırın. Yapılandırılmamış Google aramasına kıyasla mülakat başına 20-30 dk tasarruf sağlar.",
  },
  {
    q: "İş avı için en iyi AI Boolean arama istemi nedir?",
    a: "AI'dan, rolünüz + becerilerinizle belirli iş sitelerini (Lever, Greenhouse, LinkedIn) hedefleyen, bariz eşleşmeyenleri (danışmanlıklar, işe alım ajansları vb.) hariç tutan 5 Google Boolean sorgusu oluşturmasını isteyin. Sonuçlara göre yineleyin. Belirli durumunuza göre uyarlandığı için geri dönüştürülmüş blog desenlerinden daha iyidir.",
  },
  {
    q: "İş aramamda insan dokunuşunu AI ile nasıl birleştiririm?",
    a: "AI: ilk taslak ön yazılar, şirket brifingleri, anahtar kelime taraması, deneme mülakat hazırlığı, maaş araştırması, takip şablonları. Siz: ağ kurma konuşmaları, girişleri elle kişiselleştirme, referans isteme, gerçek mülakat cevaplarını yazma, ilişkiler kurma. İnsan işinin yerini almak için değil, ona zaman kazandırmak için AI kullanın.",
  },
  {
    q: "AI iş başvurularında gerçekten ne kadar zaman kazandırabilir?",
    a: "Başvuru başına ~50 dakika: ön yazılarda 20 dk, şirket araştırmasında 20 dk, özgeçmiş kişiselleştirmede 10 dk. Haftada 12 başvuru üzerinden: 10 saat tasarruf. Ağ kurmaya yeniden yatırın — işe alım uzmanı çalışmalarına göre işe alımların %60-70'ini hâlâ yönlendiriyor.",
  },
  {
    q: "İşverenlere başvurmak için AI kullandığımı söylemeli miyim?",
    a: "Ön yazılar/özgeçmiş: hayır, gönderdiğiniz kelimeler size aittir. Kodlama testleri: talimatları okuyun; bazıları AI kullanımını yasaklar, net değilse sorun. Mülakat cevapları: canlı kullanmayın; 'Araştırma ve ilk taslaklar için AI kullanıyorum' demek sorun değil. Ev ödevleri: talimatları okuyun; emin değilseniz varsayılan olarak açıklayın.",
  },
];