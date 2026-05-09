import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Runway — kasadaki paranın bitmesine kalan ay sayısı — erken aşama bir
      girişim için en önemli rakamdır. İşe alım, pazarlama, ürün kapsamı,
      fon toplama zamanlaması gibi her şey buna bağlıdır. Bu rehber, runway'i
      doğru hesaplama yöntemini, onu uzatan gerçek kaldıraçları ve fon
      toplama sürecinde hayatta kalan girişimleri batanlardan ayıran
      &ldquo;18 ay kuralını&rdquo; adım adım anlatır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Formül — ama doğru yakımla</h2>
    <p>
      <strong>Runway (ay) = Eldeki nakit / Net aylık yakım</strong>
    </p>
    <p>
      Burada <strong>net aylık yakım</strong> = (Aylık nakit çıkışı −
      Aylık nakit girişi). Nakit girişi, tahsil edilen gelirdir, fatura
      edilen gelir değil. Mart ayında imzalanıp Haziran'da faturalanan bir
      kurumsal anlaşma, Nisan ayının runway'ine yardımcı olmaz.
    </p>
    <p>
      Örnek: Bankada 2,0 milyon dolar, aylık 250 bin dolar gider, aylık
      tahsil edilen gelir 50 bin dolar. Net yakım = 200 bin dolar. Runway =
      2.000 / 200 = <strong>10 ay</strong>.
    </p>
    <p>
      Kritik: Geçen ayın rakamını değil, <strong>son 3 aylık ortalama
      yakımı</strong> kullanın. Tek aylar çok gürültülüdür — bir kerelik
      AWS artışları, geciken faturalar veya maaş ödeme zamanlaması tek bir
      ayı %30 oranında saptırabilir.
    </p>

    <h2>Brüt yakım ve net yakım</h2>
    <p>
      <strong>Brüt yakım</strong> = aylık nakit çıkışı (gelir ne olursa
      olsun tüm giderler).
    </p>
    <p>
      <strong>Net yakım</strong> = brüt yakım − gelir.
    </p>
    <p>
      Runway için doğru rakam net yakımdır. Ancak ikisini de takip edin,
      çünkü gelir buharlaşabilir (müşteri kaybı, kurumsal anlaşma
      gecikmeleri, mevsimsellik). Brüt yakımı bilmek, gelir sıfıra düşerse
      size en kötü durum runway'ini söyler — her zaman planlamanız gereken
      bir senaryo.
    </p>

    <h2>18 ay kuralı</h2>
    <p>
      Yaygın VC tavsiyesi: Bir turu kapattıktan sonra <strong>18–24
      aylık</strong> runway'iniz olmalıdır. Neden?
    </p>
    <p>
      Fon toplama 3–6 ay sürer (başlangıçtan kapanışa). İyi kilometre
      taşlarına ulaşmak 6–9 ay alır. Yatırımcılar çek yazmadan önce 6+
      aylık icra verisi görmek ister. Toplam: bir turdan diğerine minimum
      15–18 ay.
    </p>
    <p>
      12 aylık runway'de zaten fon toplamaya başlıyorsunuzdur. 9 ayda
      &ldquo;şimdi topluyorum&rdquo; modundasınızdır ve her gecikme riski
      artırır. 6 ayda sıkıntıdasınızdır — yatırımcılar karşısındaki
      pazarlık gücünüz kaybolur ve daha kötü şartlar kabul edersiniz.
    </p>
    <p>
      <strong>Pratik kural:</strong> Bir sonraki fon toplamaya runway 9
      aya düştüğünde başlayın. Turu 6 aya düşmeden kapatın.
    </p>

    <h2>Runway'i uzatan 4 kaldıraç</h2>
    <p>
      <strong>(1) Giderleri kısın.</strong> Anında, kontrol edilebilir.
      Zorunlu olmayan yazılımlar, seyahat, pazarlama deneyleri,
      taşeronlar. 250 bin dolarlık yakımda %20 gider kesintisi = ayda
      50 bin dolar tasarruf = bankadaki her 500 bin dolar için 2,5 ek ay
      runway.
    </p>
    <p>
      <strong>(2) Geliri büyütün.</strong> Kesintilerden daha yüksek
      kaldıraç ancak hareket etmesi daha yavaş. Gelir doğrudan net
      yakımdan düşer. Uyarı: Gelir büyütmek işe alım veya reklam harcaması
      gerektiriyorsa, net etki 3–6 ay boyunca negatif olabilir.
    </p>
    <p>
      <strong>(3) Daha fazla sermaye toplayın.</strong> Öz sermaye, borç,
      girişim borcu, gelire dayalı finansman, dönüştürülebilir senet
      uzantıları. Her birinin farklı maliyet ve seyreltme profilleri
      vardır. Girişim borcu tipik olarak %2–4 faiz + varant karşılığında
      6–12 ay ek runway sağlar.
    </p>
    <p>
      <strong>(4) Nakit çıkışlarını yavaşlatın (gider kesintisiyle aynı
      şey değil).</strong> Ödeme koşullarını müzakere edin (Net-30 yerine
      Net-60), kritik olmayan ödemeleri erteleyin, yıllık abonelikleri
      aylığa çevirin, ikramiye veya kurucu maaşını erteleyin. Toplam
      harcamayı azaltmaz, sadece zamanlamasını kaydırır. 60–90 günlük
      köprülemeler için kullanışlıdır.
    </p>

    <h2>Çalışan sayısı: 1 numaralı kaldıraç</h2>
    <p>
      İnsanlar genellikle bir girişimin yakımının %60–80'ini oluşturur.
      Maaş bordrosunda %10'luk bir azalma, sahip olduğunuz tüm yazılım
      aboneliklerini kesmekten daha fazla runway kazandırır. Çoğu kurucunun
      direndiği matematik:
    </p>
    <p>
      Tohum aşaması bir girişimde mühendis başına ortalama toplam maliyet:
      180–220 bin dolar (maaş + yan haklar + ekipman + genel gider). Bir
      mühendisi çıkarmak = ayda ~18 bin dolar = 500 bin dolar nakit
      tabanında 3 aylık runway.
    </p>
    <p>
      <strong>Acı verici ama genellikle doğru olan:</strong> dürüstlük ve
      adil kıdem tazminatıyla erken yapılan bir kesinti turu, en iyi
      insanların gönüllü olarak ayrıldığı ve daha zayıf bir ekiple aynı
      nakit sorunuyla baş başa kaldığınız yavaş bir açlıktan daha iyidir.
    </p>

    <h2>Gizli runway katilleri</h2>
    <p>
      <strong>Taahhüt edilmiş ancak ödenmemiş giderler.</strong> Üç ayda
      bir faturalanan yıllık sözleşmeler, bekleyen faturalar, tahakkuk
      etmiş izin ödemeleri. Bunlar &ldquo;eldeki nakit&rdquo; içinde
      görünmez ancak onu etkileyecektir. Gerçek runway'i hesaplarken
      bilinen taahhüt edilmiş çıkışları nakitten düşün.
    </p>
    <p>
      <strong>Müşterilerden gelen ödeme koşullarının kayması.</strong>
      Net-30 faturaları 60 günde ödenmeye başlarsa, alacaklarınız büyür ve
      nakit girişiniz düşer. DSO'yu (günlük satış bakiyesi) aylık takip
      edin.
    </p>
    <p>
      <strong>Unuttuğunuz bir kerelik maliyetler.</strong> Fon toplama
      avukatlık ücreti, vergi faturası, ofis taşıma, bir kesinti için
      kıdem tazminatı, tahakkuk etmiş ikramiyeler. &ldquo;Ortalama ay ×
      12&rdquo; hesaplaması değil, bu kalemleri içeren 12 aylık bir
      projeksiyon oluşturun.
    </p>

    <h2>Runway'in 3 versiyonunu senaryolaştırın</h2>
    <p>
      Tek bir runway rakamı hesaplamayın. Üçünü hesaplayın:
    </p>
    <p>
      <strong>Temel senaryo</strong> — mevcut yakım, mevcut gelir
      gidişatı.
    </p>
    <p>
      <strong>Kötü senaryo</strong> — gelir %30 düşerse, en büyük müşteri
      kaybedilirse veya bir pilot başarısız olursa.
    </p>
    <p>
      <strong>İyi senaryo</strong> — potansiyel müşteri hattı beklendiği
      gibi dönüşürse, pazarlama kanalı ölçeklenirse.
    </p>
    <p>
      Kararları kötü senaryoya göre alın. Harcamaları temel senaryoya göre
      planlayın. İyi senaryo gerçekleşirse kutlayın.
    </p>

    <h2>Nakit dönüşüm tuzağı</h2>
    <p>
      Hokey sopası büyümesi yakalayan girişimler bazen yine de nakit
      sıkıntısı çeker — çünkü büyüme işletme sermayesi gerektirir (stok,
      peşin reklam harcaması, anlaşmaları kapatmadan önce yeni işe
      alınanların rampası).
    </p>
    <p>
      Kabaca kural: Satış döngünüz 30 günden uzunsa veya stok taşıyorsanız,
      yıllık %50 büyümek, bu büyümenin %20–40'ı kadar ek işletme sermayesi
      gerektirebilir. Büyümenin ürettiği gelir için değil, <em>tahmin
      ettiğiniz büyüme</em> için nakit planlayın.
    </p>

    <h2>Runway çok kısa olduğunda: dürüst seçenekler</h2>
    <p>
      Runway 6 aydan azsa ve fon toplayamıyorsanız:
    </p>
    <p>
      <strong>Mevcut yatırımcılardan köprü turu</strong> — bir SAFE veya
      önceki tur şartlarında dönüştürülebilir borç. Düşük değerleme
      turundan daha az acı vericidir.
    </p>
    <p>
      <strong>Gelir odaklı pivot</strong> — uzun vadeli vizyon çalışmasını
      bırakın ve bu çeyrekte nakit getiren hizmetlere veya ücretli
      pilotlara odaklanın.
    </p>
    <p>
      <strong>Satın alma-yönetici görüşmelerine</strong> erken başlayın,
      çıkışa çaresizce ihtiyaç duymadan önce. 6 ay kala müzakere edilen
      bir satın alma-yönetici anlaşması, 2 ay kala yapılandan farklı bir
      konuşmadır.
    </p>
    <p>
      <strong>Gönüllü tasfiye</strong> — kıdem tazminatı ve son vergileri
      hâlâ ödeyebilecekken. Çalışanlara karşı dürüsttür, bir sonraki
      girişiminiz için itibarınızı korur. Dağınık bir çöküşten daha
      iyidir.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Nakit, aylık yakım ve aylık geliri{" "}
      <a href="/tools/startup-runway-calculator">girişim runway
      hesaplayıcısına</a> girerek ay cinsinden runway'i ve tahmini sıfır
      noktası tarihini görün.{" "}
      <a href="/tools/break-even-calculator">Başabaş noktası
      hesaplayıcısıyla</a> paranız bitmeden kârlılığa ulaşıp
      ulaşamayacağınızı ve{" "}
      <a href="/tools/cash-flow-calculator">nakit akışı
      hesaplayıcısıyla</a> bir kerelik kalemler dahil ay bazlı görünümü
      kontrol edin.
    </p>
  </>
);