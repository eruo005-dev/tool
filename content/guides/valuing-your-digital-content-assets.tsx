/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;İçerik envanterimin bir değeri var mı?&rdquo; sorusu en çok birisi satmayı,
      satın alınmayı veya vergi beyanı vermeyi düşünürken gündeme gelir. Dürüst
      cevap: evet, ancak değer tamamen hangi mercekten baktığınıza bağlıdır.
      Vergi muhasebecileri, sigorta komisyoncuları ve içerik sitesi komisyoncuları aynı
      kütüphane için size birbirinden çok farklı rakamlar verecektir.
    </p>
    <p>
      Bu kılavuz, üç değerleme merceğini, her birinin ne zaman uygulanacağını ve
      savunulabilir bir tahminin nasıl oluşturulacağını açıklar. Matematik için{" "}
      <a href="/tools/content-inventory-value-estimator">içerik envanteri değer
      tahmin aracımız</a> ile birlikte kullanın.
    </p>
  </>
);

export const toc = [
  { id: "lenses", label: "Üç değerleme merceği" },
  { id: "replacement", label: "Yenileme maliyeti" },
  { id: "traffic", label: "Trafik kaynaklı değer" },
  { id: "revenue", label: "Gelir kaynaklı değer" },
  { id: "monetization", label: "Mevcut içeriği paraya çevirme" },
];

export const body = (
  <>
    <h2 id="lenses">Üç değerleme merceği</h2>
    <p>
      &ldquo;İçeriğimin değeri ne kadar?&rdquo; konuşmalarının her biri üç
      mercekten birine indirgenir ve doğru cevap kimin sorduğuna bağlıdır:
    </p>
    <ol>
      <li>
        <strong>Yenileme maliyeti.</strong> Bu içeriği yeniden oluşturmanın maliyeti ne
        olurdu? Kullanım alanları: sigorta planlaması, kurucu geçişleri, dahili muhasebe.
      </li>
      <li>
        <strong>Trafik kaynaklı değer.</strong> Mevcut organik trafiğin SEO değeri
        nedir? Kullanım alanları: alan adı açık artırmaları, içerik sitesi komisyonculuğu,
        reklam satın alma alternatifleriyle karşılaştırma.
      </li>
      <li>
        <strong>Gelir kaynaklı değer.</strong> Gelire doğrudan katkı nedir?
        Kullanım alanları: stratejik satın almalar, finansman, birleşme ve satın almalar.
      </li>
    </ol>
    <p>
      Olgun anlaşmalar her üçüne de atıfta bulunur. Yalnızca bir rakamınız varsa,
      masada para bırakıyorsunuz veya hak ettiğinizden daha azını almanız isteniyor demektir.
    </p>

    <h2 id="replacement">Mercek 1: yenileme maliyeti</h2>
    <p>
      En basit model. Üç girdi:
    </p>
    <ul>
      <li>
        <strong>Parça sayısı.</strong> Makaleler, videolar, podcast'ler, kurslar — yalnızca
        anlamlı parçaları sayın (200 kelimelik bir karalama, 2000 kelimelik bir
        rehberle eşdeğer değildir).
      </li>
      <li>
        <strong>Parça başına saat.</strong> Araştırma + taslak + düzenleme + yayınlama.
        Tipik aralıklar: kısa bir blog yazısı için 2–4 saat, derinlemesine bir rehber için 6–12,
        araştırmalı uzun metin için 20+ saat.
      </li>
      <li>
        <strong>Yüklü saatlik ücret.</strong> Bunu yeniden oluşturması için bir serbest
        yazar veya danışmana ödeyeceğiniz miktar. 2026'da kaliteli içerik yazarları için
        aralık: $50–$150/saat; konu uzmanları için $100–$250/saat.
      </li>
    </ul>
    <p>
      Örnek: 120 makale × 4 saat × $75/saat = $36.000 yenileme maliyeti.
    </p>
    <p>
      Ne zaman kullanılır: vergi beyannameleri (maliyet yöntemi), sigorta, dahili K&Z. Bu
      rakam muhafazakardır — çoğu satın alan, ivmesi olan bir portföy için bundan daha
      fazlasını ödeyecektir.
    </p>

    <h2 id="traffic">Mercek 2: trafik kaynaklı değer</h2>
    <p>
      İçerik kütüphanenizi organik tıklamalardan oluşan bir vadeli gelir olarak ele alır. Girdiler:
    </p>
    <ul>
      <li>
        <strong>Aylık organik trafik.</strong> Google Search Console veya GA4'ten
        — son 90 günlük ortalama. En yüksek ayı seçmeyin.
      </li>
      <li>
        <strong>Ortalama TBM.</strong> Aynı anahtar kelimeler için bu trafiği Google
        Ads'den satın almanın maliyeti. Ahrefs / Semrush / Google Ads anahtar kelime
        planlayıcıdan alın. Nişe göre çok değişir — finans $5+, yaşam tarzı $0.30.
      </li>
      <li>
        <strong>Çarpan.</strong> İçerik siteleri Empire Flippers ve Motion Invest gibi
        platformlarda yıllık gelirin 2–4 katı arasında işlem görür. Varsayılan olarak 2.5×
        kullanın; büyüyen nişler için daha yüksek, düşen veya yapay zeka tarafından bozulan
        nişler için daha düşük.
      </li>
    </ul>
    <p>
      Matematik: aylık_trafik × 12 × TBM × çarpan. Örnek: 8000 aylık ziyaret × 12
      × $1.20 × 2.5 = $288.000 trafik kaynaklı değer.
    </p>
    <p>
      Ne zaman kullanılır: alan adı açık artırmaları, içerik sitesi satışları (Empire Flippers, Flippa),
      SEO trafiği için &ldquo;inşa et vs satın al&rdquo; karşılaştırması.
    </p>

    <h2 id="revenue">Mercek 3: gelir kaynaklı değer</h2>
    <p>
      Doğrudan gelir sağlayan içerik için — potansiyel müşteriler, dönüşümler, ücretli üyelikler:
    </p>
    <ul>
      <li>
        <strong>Dönüşüm oranı.</strong> Ziyaretçi → ödeme yapan müşteri. Analitik
        + CRM'den alın. Tipik SaaS / DTC: %1–3. İçerik ağırlıklı potansiyel müşteri yaratma: %0.5–1.5.
      </li>
      <li>
        <strong>Müşteri YD.</strong> Ömür boyu, ilk yıl değil. SaaS: $200–$5000+.
        Ortaklık / potansiyel müşteri yaratma: $50–$300.
      </li>
      <li>
        <strong>Çarpan.</strong> Yukarıdaki gibi 2–4×.
      </li>
    </ul>
    <p>
      Matematik: aylık_trafik × 12 × dönüşüm_oranı × YD × çarpan. Örnek: 8000 × 12 ×
      0.015 × $120 × 2.5 = $43.200.
    </p>
    <p>
      Ne zaman kullanılır: alıcının trafiğinizden çok müşteri hattınızla ilgilendiği
      stratejik satın almalar. Birleşme ve satın alma görüşmeleri. Gelir paylaşımı ortaklıkları.
    </p>
    <p>
      Not: Gelir kaynaklı değerlemeler genellikle aynı site için trafik kaynaklı
      değerlemelerden <em>daha düşüktür</em>, çünkü çoğu içerik sitesinin dönüşüm
      oranları düşüktür. Trafik kaynaklı değer maddi olarak daha yüksekse gelir kaynaklıyı
      kullanmayın — bu, varlık değerini eksik gösterir.
    </p>

    <h2 id="monetization">Mevcut içeriği paraya çevirme (az kullanılan hamle)</h2>
    <p>
      Satmadan veya vergi amaçlı değerlemeden önce şunu sorun: bu envanteri gerçekten
      paraya çevirdiniz mi? Çoğu kişi çevirmemiştir. Seçenekler:
    </p>
    <ul>
      <li>
        <strong>Ezoic / Mediavine / AdThrive görüntülü reklamları.</strong> Minimum trafik
        eşiklerine ulaştığınızda (Mediavine 50K oturum/ay, AdThrive 100K), bir içerik
        sitesinde $20–$40 BGB ile görüntülü reklamlar gerçek paradır.
      </li>
      <li>
        <strong>Ortaklık bağlantıları.</strong> Amazon Associates kolay giriştir; niş
        programlarda (Impact, ShareASale, doğrudan anlaşmalar) daha iyi marjlar. %1–5 dönüşüm ×
        komisyon oranı × ziyaret.
      </li>
      <li>
        <strong>Sponsorlu yerleşimler.</strong> Banner'lar, sponsorlu makaleler. Nişe
        bağlı — finans, B2B, yazılım öder; eğlence daha zordur.
      </li>
      <li>
        <strong>E-posta listesi oluşturma.</strong> Paraya çevrilmemiş olsa bile, etkileşimli bir e-posta listesi
        bir içerik sitesinin satış değerine 2–5× ekler.
      </li>
      <li>
        <strong>İçeriği ürünleştirme.</strong> En iyi rehberlerinizi bir
        Gumroad e-kitabı ($19), bir video kursu ($99) veya ücretli bir bülten halinde derleyin.
        Genellikle ziyaretçi başına görüntülü reklamlardan daha iyi performans gösterir.
      </li>
    </ul>
    <p>
      Çıkarım: Ayda $0 üreten bir içerik kütüphanesi, altta yatan içerik aynı olsa bile,
      ayda $500 üreten aynı kütüphaneden daha düşük fiyata satılır.
      Değerlemeden önce paraya çevirin.
    </p>
  </>
);

export const cta = {
  label: "İçeriğinizin değerini tahmin edin (ücretsiz)",
  targetSlug: "content-inventory-value-estimator",
};

export const faq = [
  {
    q: "Dijital varlıklarımı ve içeriğimi nasıl değerlerim?",
    a: "Kitleye bağlı olarak üç mercek: yenileme maliyeti (vergi/sigorta için), trafik kaynaklı değer (alan adı açık artırmaları, komisyoncu satışları için), gelir kaynaklı değer (stratejik satın almalar için). Olgun anlaşmalar her üçüne de atıfta bulunur. Üçünü aynı anda hesaplamak için içerik envanteri değer tahmin aracımızı kullanın.",
  },
  {
    q: "İçerik envanterimin bir değeri var mı?",
    a: "Evet — paraya çevrilmemiş içeriğin bile yenileme değeri vardır (yeniden oluşturmanın maliyeti). Trafiği olan paraya çevrilmiş içerik, trafik kaynaklı değer ekler. Gelire bağlı içerik, gelir kaynaklı değere sahiptir. Çoğu içerik sahibi, yalnızca tek bir mercekle düşündükleri için envanterlerini eksik değerler.",
  },
  {
    q: "İçerik siteleri hangi çarpandan işlem görür?",
    a: "İçerik siteleri Empire Flippers, Motion Invest ve Flippa'da yıllık gelirin 2-4 katı arasında işlem görür. Varsayılan olarak 2.5× kullanın. Büyüyen nişler için daha yüksek (3-4×); düşen veya yapay zeka tarafından bozulan nişler için daha düşük (1.5-2×). Her zaman pazardaki son karşılaştırılabilir satışlara göre kıyaslama yapın.",
  },
  {
    q: "Henüz paraya çevirmediğim mevcut içeriği nasıl paraya çevirebilirim?",
    a: "Görüntülü reklamlar (Mediavine 50K oturum/ay, AdThrive 100K), ortaklık bağlantıları (Amazon Associates giriş seviyesi; niş programlar daha iyi), B2B/finans/yazılım nişleri için sponsorlu içerik, e-posta listesi oluşturma (satış değerini 2-5× çarpar) veya e-kitap/kurs/ücretli bülten olarak ürünleştirme. Mütevazı bir para kazanma bile satış değerini önemli ölçüde artırır.",
  },
];