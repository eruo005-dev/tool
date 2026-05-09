/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      2026'da freelancer'lar için yapay zeka gerçekten bir güç çarpanıdır — ancak yalnızca
      belirli operasyonel katmanlar için, müşterilerin size ödeme yaptığı iş için değil. Dürüst
      vaat: yapay zeka destekli bir solo freelancer, yapay zeka destekli olmayana kıyasla
      %30-40 daha fazla müşteri kapasitesi çalıştırabilir, öncelikle idari ve teslim öncesi işleri
      sıkıştırarak.
    </p>
    <p>
      Bu rehber, solopreneur'lar ve freelancer'lar için pratik yapay zeka oyun kitabıdır — neyi
      otomatikleştirmeli, ölçeklendirmeden önce neyi doğrulamalı ve kaliteden ödün vermeden veya
      tükenmeden nasıl büyümeli.
    </p>
  </>
);

export const toc = [
  { id: "force-multiplier", label: "Yapay zekanın gerçekten çarpan olduğu yerler" },
  { id: "validate", label: "İş fikirlerini yapay zeka ile doğrulama" },
  { id: "scale", label: "Birden çok müşteriye ölçeklenme" },
  { id: "stack", label: "Solo freelance yapay zeka yığını" },
  { id: "limits", label: "Yapay zekanın yardımcı olmadığı yerler" },
];

export const body = (
  <>
    <h2 id="force-multiplier">Yapay zekanın solo çalışma için gerçekten çarpan olduğu yerler</h2>
    <p>
      Yapay zekanın solo iş yükünü sıkıştırdığı beş alan:
    </p>
    <ol>
      <li>
        <strong>Görüşme öncesi keşif.</strong> Potansiyel bir müşterinin
        web sitesini, LinkedIn'ini, son basın haberlerini ChatGPT/Claude'a yapıştırın.
        Şunu sorun: &ldquo;Bana bu şirketi 200 kelimede özetle: ne yapıyorlar, hedef
        kitleleri kim, hizmetimle ilgili olabilecek 3 zorluk nedir.&rdquo; 30 dakika yerine 5 dakikalık
        hazırlık.
      </li>
      <li>
        <strong>Teklif taslakları.</strong> &ldquo;[Müşterinin bağlamına] hitap eden [hizmet] için
        1 sayfalık bir teklif taslağı hazırla. Kapsam, zaman çizelgesi, fiyat aralığı,
        sonraki adım CTA'sını dahil et.&rdquo; Ses tonu için düzenleyin. Teklif süresini %60-80 oranında kısaltır.
      </li>
      <li>
        <strong>E-posta triyajı.</strong> Yapay zeka uzun gelen zincirleri özetler, yanıtlar
        tasarlar, eylemleri işaretler. Müşteri iletişimlerini yöneten solo freelancer'lar için
        günde 30-60 dakika tasarruf edin.
      </li>
      <li>
        <strong>Proje planlaması.</strong> Bir brif yapıştırın; kilometre taşları,
        risk değerlendirmesi ve başlangıç toplantısı için sorular içeren bir proje planı isteyin. Yapılandırılmış
        düşünme, sıfırdan başlamaktan daha hızlıdır.
      </li>
      <li>
        <strong>Pazarlama içeriği.</strong> Vaka çalışması taslakları, LinkedIn gönderileri, aylık
        bülten taslakları. Ses tonu için yoğun şekilde düzenleyin; ham çıktıyı asla yayınlamayın.
      </li>
    </ol>

    <h2 id="validate">İş fikirlerini yapay zeka ile doğrulama</h2>
    <p>
      Yeni bir hizmet veya ürünleştirilmiş teklif başlatmadan önce, standart doğrulama
      yöntemleri (müşteri görüşmeleri, duman testleri, ön siparişler) hala önemlidir — ancak yapay zeka
      erken aşama araştırmasını sıkıştırır:
    </p>
    <ul>
      <li>
        <strong>Pazar büyüklüğü mantık kontrolü.</strong> &ldquo;[Hedef kitleyi] hedefleyen [hizmet] için
        adreslenebilir pazarın kabaca bir tahmini nedir? Mevcut
        rekabet nedir? Tipik fiyat aralığı nedir?&rdquo; Birincil kaynaklarla
        çapraz doğrulama yapın.
      </li>
      <li>
        <strong>Müşteri sorunu görüşmeleri.</strong> Hipotezinize dayanarak müşteri keşif
        görüşmeleri için 30 aday sorudan oluşan bir liste oluşturun. Görüşme hazırlığının ilk
        yarım gününü kurtarır.
      </li>
      <li>
        <strong>Açılış sayfası kopya yinelemesi.</strong> Başlık + alt başlık
        + CTA'nın 3 varyantını tasla. Trafiğiniz varsa A/B testi yapın; aksi takdirde soğuk
        erişimde kullanın.
      </li>
      <li>
        <strong>Rekabet analizi.</strong> 5 rakip web sitesini yapıştırın; konumlandırma
        matrisini, fiyatlandırma modellerini ve doldurabileceğiniz boşlukları isteyin.
      </li>
      <li>
        <strong>Fiyatlandırma yapısı keşfi.</strong> &ldquo;Bu ölçekte [hizmet] için 3 fiyatlandırma modelini
        karşılaştır: saatlik, proje bazlı, retainer. Ödünleşimler?&rdquo; Erken
        teklif tasarımı için kullanışlıdır.
      </li>
    </ul>
    <p>
      Yapay zekanın doğrulama için yapamadığı şey: müşterilerinizle gerçekten konuşmak. &ldquo;Yapay zeka bana bir
      pazar olduğunu söyledi&rdquo; diye görüşmeleri atlayın ve kimsenin satın almadığı
      bir şey inşa edersiniz.
    </p>

    <h2 id="scale">Bir freelance pratiğini yapay zeka ile birden çok müşteriye ölçekleme</h2>
    <p>
      2-3 müşteriden 6-10 müşteriye geçmenin mekaniği, çoğunlukla müşteri başına
      genel gideri azaltmakla ilgilidir. Yapay zeka bunun çoğu için çok uygundur:
    </p>
    <ol>
      <li>
        <strong>Müşteri katılımı.</strong> İlk görüşme özetini, proje
        başlangıç belgesini, beklenti uyumunu otomatikleştirin. Yapay zeka dolgulu şablon tabanlı yaklaşım, her müşteri için
        boş başlamaktan daha iyidir.
      </li>
      <li>
        <strong>Tekrarlayan teslimatlar.</strong> Birden çok müşteri için benzer işler yapıyorsanız
        (aylık raporlar, içerik, denetimler), müşteriye özel
        bağlamı alan ve özelleştirilmiş teslimatı çıktı olarak veren istemler oluşturun. Teslimat başına %30-60
        tasarruf sağlar.
      </li>
      <li>
        <strong>Durum güncellemeleri.</strong> Haftalık müşteri e-postaları bir vergidir. Proje notlarınızı + bilet
        güncellemelerinizi alan ve e-posta taslağını çıktı olarak veren bir istem oluşturun.
        Düzenleyin, gönderin.
      </li>
      <li>
        <strong>Zaman takibi ve faturalama.</strong> Mevcut araçlar (Harvest,
        FreshBooks) bunu halleder; yapay zeka, madde işaretli bir dökümden zaman girişlerini
        kategorize etmeye yardımcı olur.
      </li>
      <li>
        <strong>Retainer yenileme teklifleri.</strong> &ldquo;Bu çeyrekteki bu teslimatlara
        dayanarak, etkiyi gösteren ve gelecek çeyrek için kapsam öneren bir yenileme teklifi taslağı hazırla.&rdquo; Yılda 4×
        kullanışlıdır, her seferinde yarım gün kurtarır.
      </li>
    </ol>
    <p>
      Gerçekçi kapasite kazancı: yılda 150.000$'dan yılda 200.000$'a çıkan, yapay zekayı
      idari zamanın %30-40'ını geri kazanmak için kullanan solo bir freelancer. 10× değil. Size 10× yapay zeka-
      freelance vaadi satan biri, vibe satıyordur.
    </p>

    <h2 id="stack">Solo freelance yapay zeka yığını</h2>
    <p>
      2026'da birden çok solo uygulayıcı arasında test edilmiştir:
    </p>
    <ul>
      <li>
        <strong>Birincil <a href="/learn/llm">LLM</a>:</strong> Claude veya ChatGPT, ücretli katman (ayda 20$). Ücretsiz
        katmanlar, en çok ihtiyacınız olduğu anda kullanımı sınırlar.
      </li>
      <li>
        <strong>E-posta triyajı:</strong> Yerleşik yapay zeka özelliklerine sahip Superhuman (ayda 30$),
        veya Gmail + manuel bir istem iş akışı.
      </li>
      <li>
        <strong>Takvim / planlama:</strong> Calendly ücretsiz veya round-robin istiyorsanız ve
        2 saatlik bir kuruluma alerjiniz yoksa Cal.com kendi kendine barındırılan.
      </li>
      <li>
        <strong>CRM hafif:</strong> Notion + bir veritabanı şablonu veya Airtable ücretsiz.
        Haftalık olarak sonraki eylem alanını yapay zeka ile doldurun.
      </li>
      <li>
        <strong>Zaman takibi:</strong> Harvest (ayda 14$) veya Toggl ücretsiz.
      </li>
      <li>
        <strong>Faturalama:</strong> FreshBooks (ayda 21$) veya Stripe Invoicing
        (yalnızca işlem ücretleri).
      </li>
      <li>
        <strong>Belge taslağı:</strong> Google Dokümanlar + ChatGPT yan yana.
      </li>
      <li>
        <strong>Kaçının:</strong> Yukarıdakilerin hepsini yapmayı vaat eden yapay zeka-her şey üretkenlik
        paketleri. Her kategoride en iyi araçlardan daha düşük performans gösterirler.
      </li>
    </ul>
    <p>
      Toplam yığın maliyeti: ayda 80–120$. Kapasite açılımı: disiplininize bağlıdır,
      ancak deneyimimize göre %25–40.
    </p>

    <h2 id="limits">Yapay zekanın yardımcı olmadığı yerler (ve insanların hala kazandığı yerler)</h2>
    <ul>
      <li>
        <strong>Müşterilerin ödeme yaptığı gerçek yaratıcı iş.</strong> Değeriniz
        özgün strateji, derin teknik yargı veya ilişki odaklıysa, yapay zeka
        destekleyici katmanları hızlandırır ancak işinizi yapmaz.
      </li>
      <li>
        <strong>Hassas müşteri verileri.</strong> Ücretsiz LLM'ler girdiler üzerinde eğitim alabilir. Eğitim yok
        garantili ücretli katmanları kullanın veya hassas işleri yerel olarak çalıştırın.
      </li>
      <li>
        <strong>Yüksek riskli karar verme.</strong> Yapay zeka danışman olarak, karar verici olarak değil.
        Özellikle yasal, düzenleyici veya insan kaynakları bağlamlarında.
      </li>
      <li>
        <strong>Gerçek müşteri ilişkileri kurma.</strong> Yapay zeka kontrol e-postasını
        taslaklayabilir; şimdi mi yoksa iki hafta sonra mı göndereceğinizi yalnızca siz bilirsiniz.
        Zamanlama ve yargı, ilişkinin ta kendisidir.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Ücretsiz saatlik ücret hesaplayıcıyı deneyin",
  targetSlug: "hourly-rate-calculator",
};

export const faq = [
  {
    q: "Yapay zeka gerçekten freelance işimi daha hızlı büyütmeme yardımcı olabilir mi?",
    a: "Evet — kıdemli solo freelancer'lar için tipik kapasite kazancı, idari zamanın %25-40'ının geri kazanılmasıdır. Görüşme öncesi araştırma, teklif taslakları, e-posta triyajı, proje planlaması, pazarlama içeriği. 10× değil (bunu satan vibe satıyordur). Gerçek müşteri işi — yargınız ve yaratıcı çıktınız — yapay zeka yerini almaz.",
  },
  {
    q: "İş fikrimi doğrulamama hangi yapay zeka araçları yardımcı olabilir?",
    a: "Yapay zekayı şunlar için kullanın: pazar büyüklüğü mantık kontrolleri, müşteri sorunu görüşme soruları oluşturma, açılış sayfası kopya yinelemesi, rekabet analizi, fiyatlandırma yapısı keşfi. Müşteri görüşmelerini atlamak için yapay zekayı kullanmayın — gerçek insanlarla konuşmak hala önemli olan doğrulamadır.",
  },
  {
    q: "Freelance işimi birden çok müşteriye ölçeklemek için yapay zekayı nasıl kullanabilirim?",
    a: "Müşteri başına genel gideri otomatikleştirin: katılım belgeleri, tekrarlayan teslimatlar (müşteriye özel bağlamı alan ve özelleştirilmiş işi çıktı olarak veren istemler oluşturun), haftalık durum e-postaları, zaman takibi kategorizasyonu, retainer yenileme teklifleri. Kapasite kazancı, idari genel gideri azaltmaktan gelir, yapay zekanın müşteri işini yapmasından değil.",
  },
  {
    q: "2026'da solo bir freelancer için yapay zeka yığını nedir?",
    a: "Ücretli LLM (ayda 20$), e-posta aracı (ayda 0-30$), Calendly ücretsiz, Notion/Airtable'da CRM, zaman takibi (ayda 14$), faturalama (ayda 21$ veya işlem ücretleri). Toplam ayda 80-120$. 'Yapay zeka her şeyi yapar' üretkenlik paketlerinden kaçının — her boyutta en iyi araçlardan daha düşük performans gösterirler.",
  },
];