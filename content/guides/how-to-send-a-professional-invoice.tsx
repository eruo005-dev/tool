import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Fatura, para talep eden, muhasebe kayıtlarını tetikleyen ve bir satışın koşullarını kaydeden yasal bir belgedir. Özensiz bir fatura, ödenmesi daha uzun sürer, vergi sorunları yaratır ve zaman zaman anlaşmazlıklarla sonuçlanır. Bu rehber, uygun bir faturada bulunması gereken her alanı, en hızlı ödenen biçimlendirmeyi ve DSO'yu 45 günden 18 güne indiren ödeme koşulu taktiklerini adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Her faturanın ihtiyaç duyduğu 10 alan</h2>
    <p>
      <strong>(1) &ldquo;Fatura&rdquo; kelimesi.</strong> Apaçık görünüyor. &ldquo;Ekstre&rdquo; veya &ldquo;Makbuz&rdquo; başlıklı bir belge, müşterinin AP sistemi tarafından farklı şekilde yönlendirilebilir. &ldquo;Fatura&rdquo; sihirli kelimedir.
    </p>
    <p>
      <strong>(2) Fatura numarası.</strong> Sıralı, benzersiz. INV-2026-0142 formatı işe yarar. Kendi muhasebeniz ve PO eşleştirmeli AP sistemi kullanan herhangi bir müşteri için gereklidir.
    </p>
    <p>
      <strong>(3) Düzenleme tarihi ve vade tarihi.</strong> Her ikisi de açık. &ldquo;Net 30&rdquo; değil — gerçek bir vade tarihi (&ldquo;Vade: 15 Haziran 2026&rdquo;). Müşteriler hesaplama yapmak zorunda kalmadıklarında daha hızlı işlem yaparlar.
    </p>
    <p>
      <strong>(4) İşletme bilgileriniz.</strong> Yasal işletme adı, adres, vergi kimliği (ABD'de EIN, AB/İngiltere'de KDV numarası), telefon, e-posta. Bir ticari unvan (DBA) altında faaliyet gösteriyorsanız, her ikisini de ekleyin.
    </p>
    <p>
      <strong>(5) Müşteri bilgileri.</strong> Yasal kuruluş (sadece &ldquo;John&rdquo; değil — &ldquo;Acme Corp Inc.&rdquo;), fatura adresi, AP iletişim kişisi, AP e-postası. Yanlış fatura adresi, fatura gecikmelerinin ilk 3 nedeninden biridir.
    </p>
    <p>
      <strong>(6) Satır kalemleri.</strong> Her kalem: açıklama, miktar, birim fiyat, toplam tutar. Spesifik açıklamalar (&ldquo;Web tasarım hizmetleri — Nisan 2026&rdquo;) belirsiz olanlardan (&ldquo;sunulan hizmetler&rdquo;) daha iyidir çünkü AP ekiplerinin hızlı onay için bağlama ihtiyacı vardır.
    </p>
    <p>
      <strong>(7) Ara toplam, vergi, genel toplam.</strong> Her birini ayrı ayrı gösterin. Genel toplam daha büyük bir yazı tipinde olmalıdır — AP ekibi onu tarar.
    </p>
    <p>
      <strong>(8) Ödeme koşulları.</strong> Net 15 / 30 / 60, teklif ediliyorsa erken ödeme indirimi (&ldquo;2/10 net 30&rdquo; = 10 gün içinde ödenirse %2 indirim, aksi halde tam tutar 30 günde vadesi gelir).
    </p>
    <p>
      <strong>(9) Ödeme yöntemleri ve talimatları.</strong> EFT detayları, havale talimatları, çek posta adresi, Stripe veya PayPal bağlantısı. Kolaylaştırın — yalnızca &ldquo;... emrine çek&rdquo; olan bir fatura, EFT + kredi kartı seçenekleri olan bir faturadan daha yavaş ödenir.
    </p>
    <p>
      <strong>(10) Sipariş numarası (varsa).</strong> Müşteri bir PO düzenlediyse, eşleşmelidir. Faturada PO yoksa = büyük şirket AP sisteminden ödeme yapılmaz.
    </p>

    <h2>Profesyonel biçimlendirme kuralları</h2>
    <p>
      PDF, Word veya Google Doküman değil. Kilitlenebilir, düzenlenemez, tutarlı görüntüleme.
    </p>
    <p>
      Tek sayfa. Daha fazlasına ihtiyacınız varsa, satır kalemlerini özetleyin ve bir detay sayfası ekleyin. Birçok AP sistemi, otomatik yönlendirme için tek sayfayla sınırlıdır.
    </p>
    <p>
      Logonuz en üstte, küçük. Profesyonel görünüm, düşündüğünüzden daha önemlidir — logosuz bir Word belgesi bir birey gibi görünür; markalı bir PDF, takip edecek gerçek bir işletme gibi görünür.
    </p>
    <p>
      Net yazı tipi. Gövde metni için 10–11 punto, fatura toplamı için 14 punto ve üzeri Arial veya benzeri bir sans-serif. Dekoratif yazı tipleri amatör olduğunuzu gösterir.
    </p>

    <h2>Ödeme koşulları — ne istemeli ve ne alacaksınız</h2>
    <p>
      <strong>Net 15</strong> — agresif. Bazı küçük müşteriler bunu ödeyecektir; çoğu kurumsal müşteri ödemez çünkü AP döngüleri aylıktır.
    </p>
    <p>
      <strong>Net 30</strong> — sektör standardı. Aksini bilmiyorsanız varsayılan.
    </p>
    <p>
      <strong>Net 60, Net 90</strong> — büyük işletmeler tarafından dayatılır. Bazen pazarlık ederek düşürebilirsiniz ancak nadiren tamamen kurtulursunuz.
    </p>
    <p>
      <strong>Depozito + kilometre taşı ödemeleri</strong> — 10 bin doların üzerindeki proje işleri için. Tipik: sözleşme imzalandığında %30, kilometre taşında %30, teslimatta %40. İşin kötüye gitmesi durumunda karşılıksız çalışma riskinizi azaltır.
    </p>
    <p>
      <strong>Retainer (Danışmanlık ücreti)</strong> — sabit aylık, her dönemin başında ödenir. Alabilirseniz en iyi nakit akışı yapısı.
    </p>

    <h2>Erken ödeme indirimi matematiği (2/10 net 30)</h2>
    <p>
      30 günlük tam süre yerine 10 gün içinde ödeme için %2 indirim sunmak, yaklaşık %36 yıllık indirim oranına eşdeğerdir. Sert ama işe yarar: birçok AP ekibi erken ödeme indirimlerini yakalamak için teşvik edilir ve siz 20 gün daha erken ödeme alırsınız.
    </p>
    <p>
      Şu durumlarda iyi bir taktik: daha hızlı nakde ihtiyacınız varsa, daha büyük meblağlar faturalandırıyorsanız veya sermaye maliyetiniz (veya kredi limiti faiz oranınız) yüksekse.
    </p>
    <p>
      Şu durumlarda kötü bir taktik: faturalarınızın çoğu küçükse, %2 marjınız için anlamlıysa veya müşterileriniz genellikle zamanında ödüyorsa.
    </p>

    <h2>Daha hızlı ödeme almak için gönderme taktikleri</h2>
    <p>
      <strong>Salı veya Çarşamba sabahı gönderin.</strong> Pazartesi hafta sonu e-postalarına gömülür; Cuma öğleden sonra hafta sonu boyunca bekler. Hafta ortası faturalar aynı gün incelenir.
    </p>
    <p>
      <strong>E-posta konusu: &ldquo;Fatura INV-2026-0142 — Vade 15 Haziran, Acme Corp.&rdquo;</strong> Fatura numarasını ve müşteri adını ekleyin; AP ekipleri tam konuya göre takip eder.
    </p>
    <p>
      <strong>Gövde: 2-3 cümle.</strong> &ldquo;Nisan ayı çalışması için INV-2026-0142 numaralı fatura ekte olup, toplam 8.400 dolar olup vadesi 15 Haziran'dır. Ödeme yöntemleri faturada listelenmiştir. Herhangi bir sorunuzu yanıtlamaktan mutluluk duyarım.&rdquo; Kısa, profesyonel, ödeme odaklı.
    </p>
    <p>
      <strong>28. günde ikinci bir hatırlatma gönderin.</strong> Kısa, kibar bir dürtme. Savunmacı olmayan. &ldquo;Merhaba — sadece hatırlatayım, 0142 numaralı faturanın vadesi 15'inde. Herhangi bir şeye ihtiyacınız olursa bana bildirin.&rdquo; &ldquo;Unutulan&rdquo; faturaların %60'ı bu hatırlatmadan sonraki bir hafta içinde ödenir.
    </p>

    <h2>Bir fatura vadesi geçtiğinde ne yapmalı</h2>
    <p>
      <strong>31. gün (1 gün gecikme):</strong> her şeyin yolunda olup olmadığını soran dostça bir mesaj.
    </p>
    <p>
      <strong>37. gün (1 hafta gecikme):</strong> daha doğrudan. Vade tarihine açıkça atıfta bulunun ve bir güncelleme isteyin.
    </p>
    <p>
      <strong>45. gün (2 hafta gecikme):</strong> bir yöneticiye veya satın alma irtibatına yükseltin. Faturanın bir kopyasını ve önceki tüm e-postaları ekleyin.
    </p>
    <p>
      <strong>60. gün ve sonrası:</strong> gecikme ücretlerinden bahseden resmi vadesi geçmiş bildirimi (sözleşmeniz izin veriyorsa — tipik olarak ödenmemiş bakiye üzerinde aylık %1,5). O müşteri için diğer işlerde yeni çalışmayı durdurmayı düşünün.
    </p>
    <p>
      <strong>90. gün ve sonrası:</strong> tahsilat veya küçük alacaklar davası. Genellikle doğrudan takibi tükettikten sonraki son çare seçeneği.
    </p>

    <h2>Gecikme ücretleri — bunları eklemeli misiniz?</h2>
    <p>
      Vadesi geçmiş faturalarda aylık %1-2 gecikme ücretine izin veren sözleşme dili standarttır ve uygulanabilir. Avantajları:
    </p>
    <p>
      Çoğu müşteri, ücreti ödemek yerine faturanızı kuyrukta yukarı taşıyacaktır.
    </p>
    <p>
      Küçük alacaklar davasına gelirse, ücret tahsil edilebilir ve zaman maliyetinizin bir kısmını karşılar.
    </p>
    <p>
      Dezavantajları: küçük işletme müşterileri geri adım atabilir veya maddeye içerleyebilir. Genellikle çalıştığınız müşterilere bağlı olarak bir karar.
    </p>

    <h2>Vergi işlemleri — yargı yetkisi temelleri</h2>
    <p>
      <strong>ABD:</strong> satış vergisi yalnızca fiziksel ürünlerde (genellikle) veya belirli hizmetlerde (eyalete göre değişir). Çoğu B2B hizmeti satış vergisine tabi değildir.
    </p>
    <p>
      <strong>AB / İngiltere:</strong> çoğu satışta KDV. Oran değişir (İngiltere %20, Almanya %19, Fransa %20, vb.). AB içi sınır ötesi B2B için ters ibra uygulanır.
    </p>
    <p>
      <strong>Kanada:</strong> eyalete ve ürün türüne bağlı olarak GST/HST/PST.
    </p>
    <p>
      Şüpheye düştüğünüzde, bir muhasebeciye danışın — tahsilat ve ödeme kuralları katıdır ve yanlış yapmak, müşteri için değil sizin için vergi yükümlülüğü yaratır.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      <a href="/tools/invoice-generator">Fatura oluşturucu</a> ile baskıya hazır bir fatura oluşturun — satır kalemleri, vergi, ödeme talimatları, PDF dışa aktarma. Fatura oranınızın istediğiniz marjla eşleştiğinden emin olmak için <a href="/tools/hourly-rate-calculator">saatlik ücret hesaplayıcı</a> ve AB/İngiltere müşterilerine fatura kesiyorsanız <a href="/tools/vat-calculator">KDV hesaplayıcı</a> ile birlikte kullanın.
    </p>
  </>
);