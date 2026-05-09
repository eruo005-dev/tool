/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      İş arama araçları abonelik paketleri çığırından çıktı: Jobscan için aylık $20,
      Teal için $9, Huntr için $30, bir de LinkedIn Premium $40. İşsizken yılda $1,200
      ediyor. Neredeyse her ücretli özelliğin ücretsiz veya sadece tarayıcı tabanlı bir
      alternatifi var — bu rehber, hiçbir abonelik olmadan eksiksiz iş arama yığınını
      sunuyor.
    </p>
    <p>
      Kapsam: anahtar kelime puanlama, başvuru takibi, otomatik iş toplama, özgeçmiş
      uyarlama ve yapay zeka destekli araştırma. Aşağıdakilerin hepsini kendimiz
      kullanıyoruz.
    </p>
  </>
);

export const toc = [
  { id: "stack", label: "7 araçlık ücretsiz yığın" },
  { id: "tracking", label: "Başvuru takibi" },
  { id: "tailoring", label: "Özgeçmiş uyarlama" },
  { id: "ai", label: "İş arama için yapay zeka araçları" },
  { id: "automation", label: "İş başvurularını otomatikleştirme" },
  { id: "alerts", label: "İş bildirimleri + toplayıcılar" },
];

export const body = (
  <>
    <h2 id="stack">7 araçlık ücretsiz yığın</h2>
    <ol>
      <li>
        <strong>Anahtar kelime eşleşme puanlama:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">puanlayıcımız</a> — sınırsız tarama,
        hesap gerekmez.
      </li>
      <li>
        <strong>Başvuru takipçisi:</strong> <a href="/tools/recruiting-pipeline-tracker">işe alım boru hattı takipçimizi</a> iş
        arama panosu olarak yeniden kullanın (aşamaları yeniden adlandırın: Başvuruldu /
        OA / Ön Eleme / Yerinde Görüşme / Teklif) veya şirket / pozisyon / bağlantı /
        durum / sonraki adım sütunları olan bir Google E-Tablosu.
      </li>
      <li>
        <strong>Özgeçmiş uyarlama:</strong> Yapılandırılmış bir komutla (aşağıda şablon)
        ücretsiz ChatGPT veya ücretsiz Claude.
      </li>
      <li>
        <strong>İş toplama:</strong> Indeed RSS beslemeleri + LinkedIn bildirimleri +
        Google Jobs bildirimleri. Hepsi ücretsiz, hepsi e-posta.
      </li>
      <li>
        <strong>Maaş araştırması:</strong> levels.fyi (ücretsiz, çoğunlukla teknoloji),
        Glassdoor (sınırlamalarla ücretsiz), Payscale ücretsiz maaş raporu.
      </li>
      <li>
        <strong>İşe alım yöneticisi bulma:</strong> LinkedIn araması + tek seferlik e-posta
        sorgulamaları için RocketReach ücretsiz deneme.
      </li>
      <li>
        <strong>Pratik mülakatlar:</strong> Pramp (ücretsiz, teknoloji için eşler arası),
        davranışsal için ChatGPT/Claude ses modu.
      </li>
    </ol>

    <h2 id="tracking">Başvuru takibi (yerini alır: Huntr Pro aylık $30)</h2>
    <p>
      Huntr'ın amiral gemisi özelliği, başvurular, kişiler ve mülakat turlarını içeren bir
      kanban panosudur. Ücretsiz katman sizi 40 başvuruyla sınırlar ki bu gerçek bir iş
      araması için gülünçtür. Ücretsiz alternatifler:
    </p>
    <ul>
      <li>
        <strong>E-tablo:</strong> 6 sütun (şirket, pozisyon, bağlantı, başvuru tarihi,
        durum, sonraki adım). 5 dakikada oluşturulur, sonsuz ölçeklenebilir, sıralanabilir.
        Daha hızlı iş bulan kişiler daha süslü araçlar kullanmıyor — kayıt tutmada
        tutarlılar.
      </li>
      <li>
        <strong>Boru hattı takipçimiz:</strong> aşamaları iş arama akışına göre yeniden
        adlandırın. Hangi başvuruların soğuduğunu görmek için aşama içi gün sayacı vardır.
      </li>
      <li>
        <strong>Notion ücretsiz:</strong> daha süslü görünümler (zaman çizelgesi, takvim)
        istiyorsanız ve zaten Notion kullanıyorsanız. Veritabanı şablon galerisinde iyi
        başlangıç noktaları var.
      </li>
    </ul>

    <h2 id="tailoring">Özgeçmiş uyarlama (yerini alır: Teal AI Resume aylık $9)</h2>
    <p>
      Teal'in yaptığını yapan, herhangi bir ücretsiz <a href="/learn/llm">LLM</a>'de
      kullanılabilecek tam komut:
    </p>
    <pre><code>{`[şirket]'teki [pozisyon] için başvuruyorum. İşte iş tanımı:

[iş tanımını yapıştırın]

İşte mevcut özgeçmişim:

[özgeçmişi yapıştırın]

Deneyim bölümünü şu şekilde yeniden yazın:
1. İş tanımındaki fiilleri ve beceri terimlerini kullanın
2. Bu iş tanımıyla en alakalı her pozisyon için 2 madde işaretini vurgulayın
3. Toplam uzunluğu bir sayfanın altında tutun
4. Orijinalimde olmayan hiçbir şey hakkında yalan söylemeyin`}</code></pre>
    <p>
      Bunu çalıştırın, ardından çıktıyı{" "}
      <a href="/tools/resume-keyword-match-scorer">anahtar kelime puanlayıcımızla</a>
      doğrulayın. %75'in üzerinde eşleşme puanı alırsanız işiniz biter. %60'ın altındaysa,
      boşluk gerçek becerilerdir, ifade değil — aktarılabilir deneyiminiz varsa yine de
      başvurun, ancak daha zorlu bir eleme bekleyin.
    </p>

    <h2 id="ai">İş arama için yapay zeka araçları (yerini alır: ücretli yapay zeka iş avcıları)</h2>
    <p>
      2024–2025'te aylık $40–100 arasında bir dizi ücretli &ldquo;yapay zeka sizin için
      başvurur&rdquo; hizmeti (LazyApply, Sonara, Massive) piyasaya sürüldü. Çoğu sadece
      rastgele başvuru yapar, bu da yanıt oranınızı düşürür. Fark yaratan gerçek yapay
      zeka kullanım durumları:
    </p>
    <ul>
      <li>
        <strong>Şirket araştırma özetleri:</strong> &ldquo;[Şirketi] 200 kelimede özetle:
        ürünler, son yatırımlar, mühendislik kültürü (Glassdoor yorumları ve kamuya açık
        gönderilerden).&rdquo; Mülakat hazırlığı başına 20 dakika kazandırır.
      </li>
      <li>
        <strong>Deneme mülakat pratiği:</strong> Davranışsal pratik için ChatGPT ses modu;
        sistem tasarımı provası için ChatGPT veya Claude metin. Ücretsiz, sınırsız
        oturum.
      </li>
      <li>
        <strong>Ön yazı taslakları:</strong> İyi yönlendirilmiş bir LLM'den kullanılabilir
        bir ön yazının %80'i. Sesinize göre düzenleyin; ham çıktıyı asla göndermeyin.
      </li>
      <li>
        <strong>Maaş pazarlığı senaryoları:</strong> &ldquo;[Neden] gerekçesiyle $X daha
        fazla isteyen kibar bir pazarlık e-postası yaz. Ton: kendine güvenen, hak
        talep etmeyen.&rdquo;
      </li>
    </ul>
    <p>
      Yapay zeka araçlarının yerini alamayacağı şey: asıl başvuru. Otomatik rastgele
      başvurulardan daha iyi uyarlanmış başvurular yazacaksınız.
    </p>

    <h2 id="automation">Başvuruları otomatikleştirme (dürüst cevap)</h2>
    <p>
      &ldquo;İş başvurularını ücretsiz nasıl otomatikleştiririm?&rdquo; diye soran Reddit
      başlığı, <a href="https://www.reddit.com/r/jobsearchhacks/" rel="noreferrer">r/jobsearchhacks</a>'te
      iki haftada bir çıkar. Çoğu insanın duymak istemediği dürüst cevap: iyi başvuruları
      otomatikleştiremezsiniz. Otomatik başvuru Chrome uzantıları (LazyApply, Simplify vb.)
      bir akşamda özgeçmişinizi 100 işe gönderir — ve hiçbir şey uyarlanmadığı için yanıt
      oranınız dibe vurur.
    </p>
    <p>
      Gerçekten ölçeklenen şey:
    </p>
    <ul>
      <li>
        <strong>5 işe derinlemesine başvurun</strong> (her biri 15 dk uyarlama = toplam 75
        dk) ve 1 yanıt alın.
      </li>
      <li>
        <strong>100 işe genel bir özgeçmişle otomatik başvurun</strong> ve 0–1 yanıt alın.
      </li>
    </ul>
    <p>
      Matematik, birden çok işe alım uzmanı tarafından kamuya açık olarak ölçülmüştür.
      Uyarlanmış başvurular, genel başvurulara göre 5–10 kat daha yüksek yanıt oranına
      sahiptir. Uyarlamayı hızlandırmak için yapay zeka araçlarını kullanın —
      uyarlamayı atlamak için kullanmayın.
    </p>

    <h2 id="alerts">İş bildirimleri + toplayıcılar (yerini alır: ücretli iş ilanı üyelikleri)</h2>
    <p>
      Bu bildirimleri 1. günde kurun; sizi iş sitelerini tazelemekten kurtarır:
    </p>
    <ul>
      <li>
        <strong>LinkedIn İş Bildirimleri:</strong> 20 arama sorgusuna kadar kaydedin;
        günlük e-postalar.
      </li>
      <li>
        <strong>Indeed E-posta Bildirimleri:</strong> RSS beslemeleri de mevcuttur — daha
        fazla e-posta istemiyorsanız besleme okuyucunuza yönlendirin.
      </li>
      <li>
        <strong>Google Jobs:</strong> arama sonuçlarından, kaydedilmiş herhangi bir sorgu
        için &ldquo;Bildirim kur&rdquo;.
      </li>
      <li>
        <strong>Niş panolar:</strong> Wellfound (startuplar), Hacker News &ldquo;Who is
        hiring&rdquo; başlıkları, RemoteOK, We Work Remotely — çoğunun ücretsiz RSS veya
        günlük özet e-postaları vardır.
      </li>
    </ul>
    <p>
      Toplayıcılar (LinkedIn, Indeed, Google) ilanların ~%80'ini yakalar. Kalan %20,
      rekabetin en düşük olduğu yerdir — niş panolar ve doğrudan şirket kariyer sayfaları.
    </p>
  </>
);

export const cta = {
  label: "Özgeçmişinizi herhangi bir iş tanımına göre puanlayın (ücretsiz)",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "İş araması için en iyi tek ücretsiz araç nedir?",
    a: "Bir e-tablo. Kulağa sıkıcı geliyor ama en yüksek kaldıraçlı şey — başvurulan her işi tarih, durum, sonraki adımla takip edin. Daha hızlı iş bulan kişiler daha süslü araçlar kullanmıyor; kayıt tutmada tutarlılar.",
  },
  {
    q: "Gerçekten iyi olan ücretsiz bir Jobscan sürümü var mı?",
    a: "Özgeçmiş anahtar kelime puanlayıcımız aynı temel işlevi (ilk N iş tanımı anahtar kelime eşleşmesi) tarama sınırı olmadan yapar. Jobscan, bizde olmayan başlık ve eğitim eşleştirmesini ekler, bu yüzden ikisini de kullanın — sınırsız yineleme için bizimkiyle başlayın, doğrulamak için bir Jobscan ücretsiz taramasıyla bitirin.",
  },
  {
    q: "LinkedIn Premium için ödeme yapmalı mıyım?",
    a: "Çoğu iş araması için hayır. InMail kredileri, işe alım yöneticilerine soğuk mesaj atmak için kullanışlıdır ancak bu mesajların çoğu yine de görmezden gelinir. 'Profilinizi kim görüntüledi' özelliği ilginçtir ancak eyleme dönüştürülebilir değildir. Aylık $40'ı bir kursa veya kahve sohbetlerine saklayın.",
  },
  {
    q: "Yapay zeka otomatik başvuru araçları işe yarıyor mu?",
    a: "Kısaca, kötü. Özgeçmişinizi daha fazla işe sokar ancak hiçbir şey uyarlanmadığı için yanıt oranınız 5–10 kat düşer. Bunun yerine uyarlamayı hızlandırmak için yapay zekayı kullanın.",
  },
];