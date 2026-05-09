import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Kısaltmalar, teknik alanların ve ürün ekiplerinin anlamı akılda kalıcı bir şeye sıkıştırma yoludur.
      Doğru yapıldığında, bir kısaltma zihne kazınır (LASER, SCUBA, NASA). Yanlış yapıldığında, okuyucuyu bir sözlüğe bakmaya zorlayan anlamsız bir baş harf yığınına dönüşür (MPVSXD, SAMPL). Bu kılavuz, iyi kısaltmaların nasıl oluşturulduğunu, kısaltmalar ve baş harf kısaltmaları arasındaki farkı, telaffuz edilebilirlik kurallarını, ürün ekiplerinin içeriden jargon yaratmadan özellikleri nasıl adlandırdığını, adlandırma danışmanları tarafından kullanılan desen tekniklerini ve bir kısaltmanın yerini aldığı ifadeden ne zaman daha kötü olduğunu kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Kısaltma vs baş harf kısaltması vs kısaltma</h2>
    <p>
      <strong>Kısaltma:</strong> bir kelime olarak telaffuz edilir. NASA, NATO,
      LASER, SCUBA, RADAR.
    </p>
    <p>
      <strong>Baş harf kısaltması:</strong> harf harf telaffuz edilir. FBI,
      IBM, HTML, CSS, SQL.
    </p>
    <p>
      <strong>Kısaltma:</strong> herhangi bir kısaltılmış biçim. vb., Dr.,
      yakl. Kısaltmaları ve baş harf kısaltmalarını alt kümeler olarak içerir.
    </p>
    <p>
      Günlük kullanımda çizgiler bulanıklaşır, ancak bir tane tasarlarken
      ayrım önemlidir. Telaffuz edilebilir kısaltmalar, baş harf kısaltmalarından çok daha iyi akılda kalır.
    </p>

    <h2>İyi bir kısaltmayı ne oluşturur</h2>
    <p>
      <strong>Telaffuz edilebilir.</strong> Dönüşümlü ünsüzler ve ünlüler,
      garip kümelerden kaçınma. NASA vs NSDUH.
    </p>
    <p>
      <strong>Akılda kalıcı / anlamlı kelime.</strong> Kavramla ilgili mevcut bir İngilizce
      kelimeyi heceliyorsa, akılda kalır.
      SCUBA (Kendinden İçerikli Sualtı Solunum Cihazı) harikadır
      çünkü "scuba" zaten bağlamı çağrıştırır.
    </p>
    <p>
      <strong>Kısa.</strong> 3–5 harf. Altı üst sınırdır.
      Bunun ötesinde, insanlar onu bir kelime olarak görmeyi bırakır.
    </p>
    <p>
      <strong>Türetilmiş, zorlanmamış.</strong> Doğru kelimeyi elde etmek için
      "Yapay" kelimesinden 2/5 harf seçmek zorunda kaldıysanız, okuyucular gözlerini kısar.
      En iyi kısaltmalar doğal olarak ortaya çıkar.
    </p>
    <p>
      <strong>Mevcut kısaltmalarla çakışma yok.</strong> Sizin
      "SCRUM"unuz Agile'ın scrum'ıyla çakışır; "AAA"nız
      kimlik doğrulama, sigorta, pillerle çakışır. Önce kontrol edin.
    </p>

    <h2>Telaffuz edilebilirlik kuralları</h2>
    <p>
      Ünsüz-ünlü-ünsüz (CVC) deseni en kolayıdır:{" "}
      <strong>N</strong>A<strong>S</strong>A, <strong>L</strong>
      ASE<strong>R</strong>. Beyniniz onları gerçek kelimeler olarak ayrıştırır.
    </p>
    <p>
      Arka arkaya üç ünsüzden kaçının. "STLN" telaffuz edilemez.
      "FRSC" garip bir ünlü eklemesini zorlar.
    </p>
    <p>
      Ortadaki ünlüler yardımcı olur. "CIPHER" çalışır; "CPHR"
      çalışmaz.
    </p>
    <p>
      İngilizce'de yaklaşık 21 ünsüz ve 5 ünlü vardır. Rastgele
      4 harfli dizilerin telaffuz edilebilir olma şansı belki 5'te 1'dir.
      Kaba kuvvet kullanmayın; genişletmenizle başlayın ve hangi ünlülerin
      göründüğüne bakın.
    </p>

    <h2>Desen teknikleri</h2>
    <p>
      <strong>Geriye dönük kısaltma:</strong> önce hedef kelimeyi seçin, ardından
      bir genişletmeyi tersine mühendislikle oluşturun. ABD VATANSEVER Yasası
      ("Amerika'yı Terörizmi Engellemek ve Engellemek İçin Gerekli Uygun Araçları Sağlayarak Birleştirme ve Güçlendirme") bir geriye dönük kısaltmadır — zorlanmış genişletme, akılda kalıcı
      isim.
    </p>
    <p>
      <strong>Kısmi harfler:</strong> AIDS (Edinilmiş Bağışıklık
      Yetmezliği Sendromu) A, I, D, S harflerini alır — "Sendrom"
      yalnızca son ünsüzünü katkıda bulunur. Her kelimenin
      ilk harfini almak zorunda değilsiniz.
    </p>
    <p>
      <strong>Fonetik değiştirme:</strong> edatları ve bağlaçları atın,
      yalnızca anlamlı isimleri ve fiilleri tutun. "SCUBA"
      "için"i yok sayar.
    </p>
    <p>
      <strong>Birleşik kelime + kısaltma:</strong>{" "}
      <strong>GIF</strong> (Grafik Değişim Biçimi) katı harf kuralından çok sese dayanan hibrit
      bir isimdir.
    </p>

    <h2>Özellikleri veya ürünleri adlandırırken</h2>
    <p>
      Bir özelliği bir kısaltmadan sonra adlandırmak genellikle bir hatadır.
      Kullanıcılar sizin dahili terminolojinizi bilmez. "MFA'yı Etkinleştir"
      mühendislere iyi gelir, diğer herkese anlamsızdır.
    </p>
    <p>
      <strong>UX metni için tam ifadeyi, dokümantasyon ve
      dahili terimler için kısaltmaları kullanın.</strong> Kullanıcılar "Çok faktörlü kimlik doğrulama"yı görür;
      dokümanlar ikinci kullanımda "(MFA)" diyebilir.
    </p>
    <p>
      İstisna: iyi bilinen tüketici kısaltmaları (PIN, SMS, PDF,
      GPS). Bunlar yaygın kullanıma girmiştir ve açıklama gerektirmez.
    </p>

    <h2>Düzenlenmiş endüstrilerde kısaltmalar</h2>
    <p>
      Tıp, hukuk ve hükümet kısaltmaları sever — ve
      onları yanlış kullanır. "CBC, BMP, LFTs, A1C" içeren hastalar için bir PDF kılavuzu
      yararlı değildir. Hasta odaklı içerik, her
      kısaltmayı ilk kullanımda açıklamalıdır.
    </p>
    <p>
      Sade dil zorunlulukları (ABD Sade Yazma Yasası 2010, AB
      düzenlemeleri) genellikle kısaltmaların açıklanmasını gerektirir. Geniş bir
      kitle için yazarken, ilk kullanımda açıklayın ve aşinalık varsaymaktan
      kaçının.
    </p>

    <h2>Bir kısaltmayı benimsemeden önce test etme</h2>
    <p>
      <strong>Yüksek sesle söyleyin.</strong> Sizi tereddüt ettiriyor veya
      garip geliyorsa, yeniden çalışın.
    </p>
    <p>
      <strong>Arayın.</strong> Zaten bir anlamı var mı?
      Diğer dillerde saldırgan anlamları var mı?
      Küresel ekipler bu adımı atlayarak utanç verici isimler yayınladı.
    </p>
    <p>
      <strong>Ticari marka veritabanlarını kontrol edin.</strong> USPTO ve EUIPO
      ücretsiz olarak aranabilir. Kısa kısaltmalar genellikle alınmıştır.
    </p>
    <p>
      <strong>Yeni okuyucular üzerinde test edin.</strong> 5 kişiden 3'ü bir gün sonra ne anlama geldiğini hatırlayamıyorsa, yeterince akılda kalıcı
      değildir.
    </p>

    <h2>Kısaltma ne zaman kullanılmamalı</h2>
    <p>
      <strong>Genişletme yalnızca bir kez kullanılır.</strong> 400 kelimelik bir
      blog yazısı yazıyorsanız ve "Müşteri Edinme
      Maliyeti"nden üç kez bahsetmeniz gerekiyorsa, sadece ifadeyi kullanın.
      Üç kullanım için MEM yapmak neredeyse hiçbir şey kazandırmaz ve
      karışıklık riski taşır.
    </p>
    <p>
      <strong>Hedef kitle terimi bilmiyor.</strong> "API" bir geliştirici
      dokümanında iyidir; "API", teknik olmayan
      KOBİ'ler için bir pazarlama sayfasında iyi değildir.
    </p>
    <p>
      <strong>İfade zaten kısa.</strong> "Hızlı Yanıt"
      → "QR" çalışır çünkü genişletme nadiren kullanılır.
      Ancak "e-posta"yı kısaltmak saçma olurdu.
    </p>

    <h2>Büyük harf kullanımı ve stil</h2>
    <p>
      <strong>Kısaltma büyük harf kullanımı:</strong> geleneksel olarak tümü büyük harf (NASA,
      SCUBA), ancak son derece yaygın olanlar genellikle zamanla
      küçük harfe geçer (lazer, radar, tüplü dalış, pdf). Stil kılavuzunuzu izleyin.
    </p>
    <p>
      <strong>Baş harf kısaltmaları:</strong> genellikle tümü büyük harf. İstisna:
      id, url, json dosya yollarında (görsel stil seçimi).
    </p>
    <p>
      <strong>Çoğullar:</strong> kesme işareti olmadan küçük harf s ekleyin.
      "PDF'ler" değil "PDFs".
    </p>
    <p>
      <strong>Belirsiz artikeller:</strong> "a" vs "an"
      telaffuza bağlıdır, harfe değil. "Bir HTML sayfası"
      (eytch olarak telaffuz edilir) vs "bir URL" (yoo olarak telaffuz edilir).
    </p>

    <h2>Beyin fırtınası adayları</h2>
    <p>
      Bir kavram için bir kısaltma üzerinde beyin fırtınası yapmak için:
    </p>
    <p>
      1. Tam ifadedeki her anlamlı kelimeyi listeleyin.
    </p>
    <p>
      2. Her kelime için, ilk harfi <em>ve</em> güçlü
      fonetik harfleri not edin ("Çıkart"taki "X").
    </p>
    <p>
      3. Farklı sıralarda kombinasyonları deneyin. Genişletmede dilbilgisi
      zorunlu değildir.
    </p>
    <p>
      4. Gerçek kelimelere karşı çapraz referans yapın. İyi bir eşleşme
      kendini belli eder.
    </p>
    <p>
      5. Çakışmaları ve istenmeyen anlamları kontrol edin.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Her özellik için bir kısaltma türetmek.</strong> Dahili
      ekip şakası, imkansız bir işe alım süreci haline gelir. Her şeyi
      açıkça yazın.
    </p>
    <p>
      <strong>Mevcut olanlarla çakışan kısaltmalar.</strong> ACL
      = erişim kontrol listesi veya Ön Çapraz Bağ veya
      Amerikan Mısır Deliği Ligi. Bağlam önemlidir, ancak mümkünse benzersiz bir
      tane seçin.
    </p>
    <p>
      <strong>Zorlanmış geriye dönük kısaltmalar.</strong> Genişletmeyi okumak
      sizi rahatsız ediyorsa, okuyuculara da aynısını yapacaktır.
    </p>
    <p>
      <strong>Küresel anlam kontrolünü atlamak.</strong> Zekice
      kısaltmanız başka bir dilde veya kültürel
      bağlamda utanç verici bir anlama gelir. Her zaman arayın.
    </p>
    <p>
      <strong>Müşteriye yönelik arayüzlerde kısaltmalar kullanmak.</strong> Güç
      kullanıcıları kısalığı sever; yeni kullanıcılar onları gürültü olarak okur.
      Varsayılan olarak her şeyi yazın.
    </p>
    <p>
      <strong>Akılda kalıcılık testini görmezden gelmek.</strong> İnsanlar
      bir hafta içinde ne anlama geldiğini unutursa, işini yapmıyordur.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Bir ifadeden aday kısaltmalar oluşturmak için{" "}
      <a href="/tools/acronym-generator">kısaltma oluşturucuyu</a> kullanın.
      URL güvenli
      kısaltmalar için{" "}
      <a href="/tools/slug-generator">kısa bağlantı oluşturucuyla</a> ve
      kullanımlar arasında büyük/küçük harf kullanımını normalleştirmek için{" "}
      <a href="/tools/case-converter">büyük/küçük harf dönüştürücüyle</a> eşleştirin.
    </p>
  </>
);