import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Renk paleti seçimi, zevkin matematikle buluştuğu yerdir. İyi seçin,
      ürününüz, slaydınız veya markanız kasıtlı olarak okunur. Kötü seçin
      ve aşağı yönlü her karar yanlış gelir — butonlar çok gürültülü,
      arka planlar bulanık, erişilebilirlik bozuk. Bu rehber, renk teorisi
      temelini (HSL, RGB'den daha iyidir), %95 kullanım durumunu kapsayan
      dört palet şemasını, estetik kaybetmeden WCAG kontrastını nasıl
      yakalayacağınızı, gerçekten kullanılmaya değer paletler üreten
      araçları ve bir bakışta "amatör" sinyali veren hataları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>HSL — düşünmek için renk modeli</h2>
    <p>
      RGB (kırmızı-yeşil-mavi) size ekranın ne yaptığını söyler. HSL (renk
      tonu-doygunluk-parlaklık) size insanların ne algıladığını söyler.
      Paletleri HSL cinsinden düşünün, uygulama zamanında hex/RGB'ye
      dönüştürün.
    </p>
    <p>
      <strong>Renk tonu (0-360°):</strong> renk ailesi — kırmızı (0), turuncu
      (30), sarı (60), yeşil (120), camgöbeği (180), mavi (240), mor
      (270), eflatun (300).
    </p>
    <p>
      <strong>Doygunluk (%0-100):</strong> ne kadar canlı. %0 = gri tonlama.
      %100 = neon.
    </p>
    <p>
      <strong>Parlaklık (%0-100):</strong> %0 = siyah. %50 = saf renk.
      %100 = beyaz.
    </p>
    <p>
      HSL'de akıcı olduğunuzda, varyantları sistematik olarak
      oluşturabilirsiniz: renk tonunu sabit tutun, gölgeler ve tonlar için
      parlaklığı değiştirin; parlaklığı sabit tutun, renk uyumları için
      renk tonunu döndürün; arka planlar ve kenarlıklar için doygunluğu
      azaltın.
    </p>

    <h2>Dört palet şeması — birini seçin ve ona bağlı kalın</h2>
    <p>
      <strong>1. Tek renkli.</strong> Bir renk tonu, birden çok parlaklık/
      doygunluk varyantı. Bozmak en zor, uyumlu görünmesi en kolay.
      Faydacı arayüzler, minimalist markalar için harika. Dezavantaj:
      düz hissedilebilir. Çözüm: güçlü bir vurgu rengi (beyaz, siyah veya
      tek bir tamamlayıcı patlama).
    </p>
    <p>
      <strong>2. Benzer.</strong> Çarkta bitişik 2-3 renk tonu
      (ör. teal + mavi + çivit). Uyumlu, sakin, doğal. Manzara
      hissi veren markalar, editoryal tasarım için iyi. Dezavantaj: harekete
      geçirici mesajlar için kontrast eksikliği. Çözüm: eylem öğeleri için
      tamamlayıcı vurgu kullanın.
    </p>
    <p>
      <strong>3. Tamamlayıcı.</strong> Çarkta zıt iki renk tonu
      (mavi + turuncu, kırmızı + yeşil). Yüksek kontrast, canlı, harekete
      geçirici mesaj ağırlıklı tasarımlar için iyi. Dezavantaj: aşırı
      kullanım gürültülü hissettirir. Çözüm: 60-30-10 kuralı — bir renk
      baskındır, tamamlayıcı vurgudur, nötrler gerisini taşır.
    </p>
    <p>
      <strong>4. Üçlü.</strong> Eşit aralıklı üç renk tonu (120° aralıklı).
      Eğlenceli, enerjik. Çocuk markaları, eğlence için iyi.
      Dezavantaj: birinin baskın olmaması için dengelemek çok zordur.
      Yalnızca güçlü bir tasarım içgüdünüz varsa veya bir tasarımcı
      inceliyorsa kullanın.
    </p>

    <h2>60-30-10 kuralı</h2>
    <p>
      Profesyonel paletler, anlamlı miktarda nadiren 3-4'ten fazla renk
      kullanır. Güvenilir bir dağılım:
    </p>
    <p>
      <strong>%60</strong> — baskın (genellikle nötr: beyaz, açık
      gri, koyu arka plan).
    </p>
    <p>
      <strong>%30</strong> — ikincil (marka rengi, bölümler
      ve daha büyük arayüz için kullanılır).
    </p>
    <p>
      <strong>%10</strong> — vurgu (harekete geçirici mesajlar, vurgular,
      öne çıkması gereken etkileşimli öğeler).
    </p>
    <p>
      6 eşit renk kullanırken bulursanız, bir palet değil, bir
      gökkuşağı yapmışsınızdır. Geri çekilin.
    </p>

    <h2>Nötrler — amatörlerin köşe kestiği yer</h2>
    <p>
      "Nötr" saf gri anlamına gelmez. Sıcak tonlu
      nötrler (hafif sarı/kahverengi) davetkar hissettirir; soğuk nötrler
      (hafif mavi) klinik hissettirir. Nötr <a href="/learn/temperature-ai">sıcaklığı</a>nı
      uyum için marka renginizle eşleştirin.
    </p>
    <p>
      #888888 gri yerine, HSL(220, %10, %53) deneyin — çok hafif
      mavi tonlu bir nötr. Büyük yüzeylerdeki farkı fark edin.
    </p>
    <p>
      Bir <strong>tonal rampa</strong> oluşturun: her nötrün neredeyse
      beyazdan neredeyse siyaha 9-10 değeri. Tailwind'in gray-50'den
      gray-900'e kadar olanı kanonik örnektir. Adlandırılmış adımlara
      sahip olmak, her seferinde yeni hex kodları seçmek yerine tutarlı
      bir şekilde seçmenizi sağlar ("kenarlıklar gray-200, soluk metin
      gray-500").
    </p>

    <h2>Erişilebilirlik — WCAG kontrastı pazarlık konusu değil</h2>
    <p>
      <strong>Kontrast oranı</strong>, iki renk arasındaki algılanan
      parlaklık farkıdır. WCAG minimumları tanımlar:
    </p>
    <p>
      <strong>4.5:1</strong> normal metin için arka planda (AA).
    </p>
    <p>
      <strong>3:1</strong> büyük metin (18pt+), arayüz bileşenleri,
      grafik öğeler için (AA).
    </p>
    <p>
      <strong>7:1</strong> AAA için — daha yüksek erişilebilirlik.
    </p>
    <p>
      Göndermeden önce her metin/arka plan çiftini bir kontrast denetleyicisiyle
      kontrol edin. Figma'da beyaz üzerinde açık gri metin şık görünür ancak
      erişilebilirlikte başarısız olur ve düşük görüşlü kullanıcılar veya
      loş ekranlar için okunamaz.
    </p>
    <p>
      <strong>Yaygın hata:</strong> beyaz üzerinde #aaaaaa civarında "soluk" gri
      metin. 2.3:1 — rahat standartta bile başarısız. Gövde metni için
      minimum #6b7280 (Tailwind gray-500)'e yükseltin.
    </p>

    <h2>Anlamsal renkler — sadece estetik değil</h2>
    <p>
      Markanın ötesinde, rollere ihtiyacınız var. Yaygın anlamsal çiftler:
    </p>
    <p>
      <strong>Başarı:</strong> yeşil (renk tonu 120-140).
    </p>
    <p>
      <strong>Uyarı:</strong> kehribar/sarı (renk tonu 40-50). Az kullanın
      — beyaz üzerinde kontrast zayıftır; daha güçlü bir arka planla eşleştirin.
    </p>
    <p>
      <strong>Tehlike/hata:</strong> kırmızı (renk tonu 0-15).
    </p>
    <p>
      <strong>Bilgi:</strong> mavi (renk tonu 200-220).
    </p>
    <p>
      Bunlar marka paletinizin dışında olmalıdır, böylece bir "sil"
      butonu, markanız mavi olsa bile tehlikeli görünür.
    </p>

    <h2>Karanlık mod — sadece ters çevirme değil</h2>
    <p>
      Uygun bir karanlık mod paleti, tersi değil, kendi tasarımıdır.
    </p>
    <p>
      <strong>Arka planlar:</strong> saf siyah (#000) değil. Çok koyu
      gri (#0a0a0a, #111) göz yorgunluğunu azaltır ve gölgelerin çalışmasını
      sağlar.
    </p>
    <p>
      <strong>Metin:</strong> koyuda saf beyaz (#fff) değil. Hafif
      kirli beyaz (#e5e5e5, #f5f5f5) OLED ekranlarda parlamayı azaltır.
    </p>
    <p>
      <strong>Doygunluk:</strong> karanlık mod arayüzleri için marka
      renklerini %20-30 oranında doygunluğunu azaltın. Tam doygunlukta marka
      renkleri koyu arka planlarda şiddetli hissettirir.
    </p>
    <p>
      <strong>Yükseklik:</strong> yüksekliği belirtmek için gölgeler değil,
      biraz daha açık arka planlar kullanın — Material Design'ın yüzey
      sistemi kanonik referanstır.
    </p>

    <h2>Gerçek paletler üreten araçlar</h2>
    <p>
      <strong>Coolors</strong> (coolors.co) — oluşturmak için boşluğa basın,
      favorileri kilitleyin, yineleyin. Palet yönlerini keşfetmenin en hızlı
      yolu.
    </p>
    <p>
      <strong>Adobe Color</strong> (color.adobe.com) — renk çarkı
      odaklı, yerleşik uyum kurallarıyla. Oluşturulan paletlerde canlı WCAG
      kontrastını gösterir.
    </p>
    <p>
      <strong>Tailwind'in paleti</strong> (tailwindcss.com/docs/
      customizing-colors) — 22 renk ailesi için önceden oluşturulmuş 11
      adımlı rampalar. Web projelerinin ~%80'i için olduğu gibi kullanın.
    </p>
    <p>
      <strong>Radix Colors</strong> (radix-ui.com/colors) — erişilebilirlik
      yerleşik olarak tasarlanmış 12 adımlı rampalar. Eşleşen açık ve
      koyu varyantlar. Tasarım sistemlerini hedefler.
    </p>
    <p>
      <strong>Huemint</strong> (huemint.com) — marka uygulamalarını
      dikkate alan yapay zeka tabanlı palet oluşturma.
    </p>
    <p>
      <strong>Site ilhamı:</strong> Awwwards, Dribbble, Mobbin.
      Kopyalamayın — kombinasyonların nasıl çalıştığını gözlemleyin.
    </p>

    <h2>Sektör gelenekleri — ne zaman uymalı, ne zaman kırmalı</h2>
    <p>
      <strong>Bankacılık/finans:</strong> maviler ve yeşiller (güven,
      istikrar). Lacivert baskındır.
    </p>
    <p>
      <strong>Sağlık:</strong> teal, yeşil, beyaz. Kırmızıdan kaçının
      (klinik kırmızı = acil durum).
    </p>
    <p>
      <strong>Yemek teslimatı:</strong> turuncular, kırmızılar (iştah).
    </p>
    <p>
      <strong>Teknoloji/SaaS:</strong> maviler, morlar. Notion benzeri pasteller
      mevcut trend.
    </p>
    <p>
      <strong>Lüks:</strong> siyah, altın, koyu lacivert, beyaz.
    </p>
    <p>
      Bunlar varsayılanlardır, kurallar değil. Farklılaşma genellikle
      kategoriye karşı bilinçli seçim yapmak anlamına gelir (Mailchimp'in
      SaaS dünyasında sarısı, Liquid Death'in punk siyahı).
      Kasıtlı sapma marka stratejisidir; kazara sapma gürültüdür.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Çok fazla renk.</strong> Baskınlığı olmayan 7 renkli bir palet
      kaos olarak okunur. 60-30-10 kuralıyla 3-4'e indirin.
    </p>
    <p>
      <strong>Her yerde saf siyah.</strong> #000000 serttir. Daha iyi
      algılanan sıcaklık için #1a1a1a veya #0f172a (slate-900) ile
      yumuşatın.
    </p>
    <p>
      <strong>Titreşen kombinasyonlar.</strong> Mavi arka planda kırmızı
      metin vb. Tam doygunlukta bitişik renkler görsel uğultu yaratır.
      Birinin doygunluğunu azaltın veya parlaklığı değiştirin.
    </p>
    <p>
      <strong>Gerçek içerikte test edilmemiş.</strong> Palet 9 renk örneği
      olarak harika görünür; gerçek kopya, butonlar, formlar içeren bir
      sayfaya uygulandığında bozuk görünür. Sadece renk örnekleri değil,
      bir test sayfası oluşturun.
    </p>
    <p>
      <strong>Karanlık mod planı yok.</strong> Kullanıcılar bunu bekler.
      Erken karar verin veya sonradan uyarlamaya takılıp kalın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Kesin renkleri seçin ve{" "}
      <a href="/tools/color-picker">renk seçici</a> ile varyantları keşfedin.
      HSL/RGB/HEX dönüşümü için{" "}
      <a href="/tools/color-converter">renk dönüştürücü</a> ile ve kahramanlar
      ve arka planlar için çok duraklı geçişler oluşturmak üzere{" "}
      <a href="/tools/gradient-generator">gradyan oluşturucu</a> ile
      eşleştirin.
    </p>
  </>
);