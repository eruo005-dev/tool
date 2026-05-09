import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir maaş çekinde yaklaşık bir düzine satır kalemi bulunur ve çoğu kişi
      yalnızca en alttaki rakama bakar. Vergi zamanı şaşkına dönmenizin,
      İK'nın sağlık planınızdan çok fazla kesinti yaptığını fark etmemenizin
      ya da bilmeden 401(k)'nıza eksik katkı yapmanızın nedeni budur. Bu
      rehber, tipik bir ABD maaş çekindeki her satırı, sabit ve ayarlanabilir
      olanları ve en yaygın üç hatayı nasıl tespit edeceğinizi adım adım
      açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Brüt ve net — temel yapı</h2>
    <p>
      <strong>Brüt maaş</strong>, herhangi bir kesinti yapılmadan önce
      kazandığınız miktardır. Maaş ÷ ödeme dönemleri veya saatlik ücret ×
      çalışılan saat. İş teklif mektubunuzda belirtilen tutar budur.
    </p>
    <p>
      <strong>Net maaş</strong>, banka hesabınıza yatan miktardır. Brüt maaş
      eksi vergiler eksi vergi öncesi yan haklar eksi vergi sonrası
      kesintiler. Neredeyse herkes, eyalete ve yan hak yüküne bağlı olarak
      brütün %60–75'ini net olarak alır.
    </p>

    <h2>Vergi öncesi kesintiler (vergilendirilebilir gelirinizi azaltır)</h2>
    <p>
      Bunlar, federal gelir vergisi hesaplanmadan <em>önce</em> çıkarılır,
      bu nedenle vergi faturanızı da azaltır:
    </p>
    <p>
      <strong>401(k) / 403(b) katkıları.</strong> Yılda 23.000$'a kadar
      (2024–25, 50+ yaş için daha fazla). Katkıda bulunduğunuz her 1.000$,
      tipik orta sınıf oranlarında federal vergiden yaklaşık 220–350$
      tasarruf etmenizi sağlar.
    </p>
    <p>
      <strong>Geleneksel IRA</strong> katkıları (bordro üzerinden
      kesiliyorsa) — aynı mekanizma. Roth IRA'lar vergi sonrasıdır.
    </p>
    <p>
      <strong>Sağlık sigortası primi.</strong> Çoğu işveren sağlık planı
      vergi öncesidir. Tipik aile primi: maaş çeki başına 150–400$.
    </p>
    <p>
      <strong>HSA / FSA</strong> katkıları (HDHP'niz varsa). HSA'lar
      üçlü vergi avantajına sahiptir — ABD vergi kanunundaki en iyi fırsat,
      uygunsanız tamamen fonlayın.
    </p>
    <p>
      <strong>Ulaşım yardımları, bakıcı FSA'sı vb.</strong> Daha az
      yaygındır ancak vergi öncesidir.
    </p>

    <h2>Vergi kalemleri</h2>
    <p>
      <strong>Federal gelir vergisi stopajı.</strong> W-4 formunuza
      yazdıklarınıza dayanır. Form kafa karıştırıcı görünse de temel
      versiyonu şudur: evli-ortak-başvuru yapıyorsanız ve başka geliriniz
      yoksa? Sadece ad/SSN/imza kısımlarını doldurun. Daha karmaşık
      durumlar için çalışma sayfası veya IRS stopaj hesaplayıcısı gerekir.
    </p>
    <p>
      <strong>Sosyal Güvenlik (FICA): %6,2</strong> yıllık tavana kadar
      (2024'te 168.600$). Pazarlık konusu değil, herkes aynı oranı öder.
    </p>
    <p>
      <strong>Medicare: %1,45</strong> tavan yok. Bekar 200.000$ / evli
      250.000$ üzerinde ek %0,9 devreye girer.
    </p>
    <p>
      <strong>Eyalet gelir vergisi stopajı.</strong> Büyük farklılık
      gösterir — TX/FL/WA/NV/SD/WY/AK/TN/NH'de %0, CA'da en yüksek
      marjinal oran ~%13'e kadar.
    </p>
    <p>
      <strong>Yerel / şehir vergisi.</strong> NYC, Philadelphia, San
      Francisco ve birçok Ohio/Pennsylvania şehri, bunun üzerine kendi
      gelir vergilerini uygular.
    </p>
    <p>
      <strong>Eyalet maluliyet sigortası (SDI)</strong> yalnızca
      CA/NY/NJ/RI/HI'da. Genellikle brütün %0,5–1'i.
    </p>

    <h2>Vergi sonrası kesintiler (federal vergi hesaplandıktan sonra)</h2>
    <p>
      <strong>Roth 401(k) / Roth IRA</strong> katkıları — vergiler şimdi
      ödenir, gelecekteki çekimler vergisizdir.
    </p>
    <p>
      <strong>Ek hayat sigortası, kritik hastalık, evcil hayvan
      sigortası.</strong> Genellikle küçük miktarlardır.
    </p>
    <p>
      <strong>Hacizler</strong> — nafaka, öğrenci kredisi temerrüdü, IRS
      tahsilatı — yasal olarak zorunludur, gönüllü olan her şeyin önüne
      geçer.
    </p>
    <p>
      <strong>ESPP</strong> (çalışan hisse senedi satın alma planı). Brütün
      %15'ine kadar, indirimli olarak satın alınır, çoğu şirkette iyi bir
      fırsattır. Vergi sonrası.
    </p>

    <h2>En yaygın üç maaş çeki hatası</h2>
    <p>
      <strong>(1) Yanlış eyalet stopajı.</strong> Yıl ortasında taşındıysanız
      veya yaşadığınız eyaletten farklı bir eyalette uzaktan çalışıyorsanız,
      İK bazen yanlış eyalette stopaj yapar. Bunu gelecek Ocak ayında W-2
      formunuzun 17. satırında göreceksiniz. Her maaş çekindeki eyalet
      kodunu doğrulayarak erken fark edin.
    </p>
    <p>
      <strong>(2) Eksik 401(k) eşleşmesi.</strong> İşveren eşleşme satırını
      kontrol edin. Şirketiniz %3–6 eşleşme yapıyorsa ve görünmüyorsa, İK
      bir şeyi yanlış yapılandırmıştır. Eşleşme bedava paradır — 5 dakikalık
      bir e-postaya değer.
    </p>
    <p>
      <strong>(3) W-4'ten kaynaklanan yanlış stopaj.</strong> Yeni W-4
      formu (2020+) kafa karıştırıcıdır. Yaygın bir hata: çalışan bir eşi
      hesaba katmamak, büyük miktarda eksik stopaja neden olur. IRS stopaj
      hesaplayıcısını yılda bir kez çalıştırın.
    </p>

    <h2>Yılbaşından bugüne (YTD) sütunları</h2>
    <p>
      Her maaş çeki, bu dönemin yanında yılbaşından bugüne toplamlarını
      gösterir. Bunlar şu soruları yanıtlamanıza yardımcı olur:
    </p>
    <p>
      <strong>401(k) limitine ulaşma yolunda mıyım?</strong> YTD katkılar ×
      (52 / geçen ödeme dönemi) = tahmini yıllık. 23.000$ limitiyle
      karşılaştırın.
    </p>
    <p>
      <strong>Sosyal Güvenlik tavanına ulaştım mı?</strong> YTD brüt
      168.600$'ı geçtiğinde, SS stopajı yılın geri kalanında sıfıra düşer
      — net maaşınız %6,2 artar. Yüksek kazançlılar için Kasım/Aralık
      ayında güzel bir sürpriz.
    </p>
    <p>
      <strong>Federal stopajım yolunda mı?</strong> YTD federal ÷ YTD brüt,
      kabaca efektif vergi oranınızla eşleşmelidir. Çok düşükse, vergi
      zamanı borcunuz olur. Çok yüksekse büyük iade, yani hükümete faizsiz
      borç vermişsiniz demektir.
    </p>

    <h2>Gerçek bir maaş çeki için net hesaplama</h2>
    <p>
      Bekar, 80.000$ maaş, iki haftada bir (26 çek), 401(k)'ya %10 katkı,
      150$ sağlık primi, California.
    </p>
    <p>
      Çek başına brüt: 3.077$. 401(k): −308$. Sağlık: −150$. Vergiye tabi:
      2.619$. Federal stopaj: ~290$. FICA: 191$ + 45$ = 236$. CA gelir
      vergisi: ~105$. SDI: 15$. Net: <strong>çek başına 1.973$</strong>{" "}
      (brütün ~%64'ü).
    </p>

    <h2>Kendiniz hesaplayın</h2>
    <p>
      Maaşınızı + eyaletinizi + 401(k) yüzdenizi{" "}
      <a href="/tools/paycheck-calculator">maaş çeki hesaplayıcısına</a>{" "}
      girerek çek başına net maaşı tahmin edin. Saatlik bir işin yıllık
      eve giden para cinsinden ne kadar kazandırdığını kontrol etmek
      isterseniz{" "}
      <a href="/tools/hourly-rate-calculator">saatlik ücret hesaplayıcısıyla</a>{" "}
      çapraz kontrol yapın ve gerçek net maaşınızı öğrendikten sonra{" "}
      <a href="/tools/budget-calculator">bütçe hesaplayıcısıyla</a>{" "}
      birleştirin — brüt üzerinden bütçe yapmak, her ay gizemli bir şekilde
      parasız kalmanın en yaygın yoludur.
    </p>
  </>
);