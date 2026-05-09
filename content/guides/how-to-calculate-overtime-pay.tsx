import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Fazla mesai ücreti kulağa basit gelir — 40 saatten sonra bir buçuk katı — ve neredeyse her zaman bundan daha karmaşık olduğu ortaya çıkar. Federal kurallar bir katmandır. Eyalet kuralları üstüne eklenebilir. Vardiya farkları, çift mesai eşikleri, maaşlı-muaf olmayan sınıflandırmalar ve ücretli izinlerin tümü, bir maaş çekini yüzlerce dolar oynatabilecek uç durumlar yaratır. Bu kılavuz, fazla mesai çekinizi gerçekte yöneten matematiği ve bunu nasıl doğrulayacağınızı adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Federal temel: FLSA 40 saat kuralı</h2>
    <p>
      Adil Çalışma Standartları Yasası (FLSA) — federal ücret ve saat yasası — işverenlerin, muaf olmayan çalışanlara bir çalışma haftasında 40 saatin üzerindeki her saat için normal ücretlerinin en az 1,5 katını ödemesini zorunlu kılar. Bu tabandır. Eyaletiniz daha fazlasını talep edebilir; daha azını talep edemez.
    </p>
    <p>
      Bir çalışma haftası, sabit, yinelenen herhangi bir 168 saatlik dönemdir — Pazartesi–Pazar olmak zorunda değildir. İşvereniniz bunu seçer ve tutarlı tutmalıdır. İzin günleri 40 saatlik eşiğe dahil edilmez ve federal yasa günlük fazla mesai veya çift mesai <em>gerektirmez</em>.
    </p>

    <h2>Üstüne eklenen eyalet kuralları</h2>
    <p>
      <strong>Kaliforniya</strong> en katı olanıdır: bir günde 8 saatten sonra bir buçuk katı <em>ve</em> bir haftada 40 saatten sonra (hangisi önce gelirse), bir günde 12 saatten sonra çift mesai ve art arda yedinci çalışma gününde 9+ saat için çift mesai. Kaliforniya'da 14 saatlik bir vardiya, 8 saat normal, 4 saat 1,5× ve 2 saat 2× ücret üretir.
    </p>
    <p>
      <strong>Colorado</strong>'da 12 saatten sonra (8 değil) günlük fazla mesai vardır. Alaska'da 8 saatten sonra günlük fazla mesai vardır. Nevada'da yalnızca eyalet asgari ücretinin 1,5 katından az kazanan işçiler için 8 saatten sonra günlük fazla mesai vardır. Diğer her eyalet, bir sendika sözleşmesi aksini belirtmedikçe federal 40 saat kuralına uyar.
    </p>

    <h2>Bir buçuk katı ve çift mesai — matematik</h2>
    <p>
      <strong>Bir buçuk katı</strong> = 1,5 × taban ücret. Saatte 22 dolarda bu 33 dolar/saattir. Saatte 22 dolardan 45 saatlik bir hafta, 40 × 22 $ + 5 × 33 $ = 880 $ + 165 $ = 1.045 $ brüt öder — 45 × 22 $ = 990 $ değil.
    </p>
    <p>
      <strong>Çift mesai</strong> = 2 × taban ücret. Saatte 22 dolarda 44 dolar/saattir. Yalnızca eyalet kuralları (Kaliforniya 12+/gün, 7. gün 9+ saat) veya sendika sözleşmeleri tarafından tetiklenir. Federal yasa tek başına asla çift mesaiyi zorunlu kılmaz.
    </p>
    <p>
      <a href="/tools/overtime-calculator">Fazla mesai hesaplayıcı</a>, federal, Kaliforniya ve çoğu bordro yazılımını zorlayan günlük-artı-haftalık birikimi içeren özel kural kümelerini işler.
    </p>

    <h2>Ücretli izin sayılmaz</h2>
    <p>
      Federal yasa, 40 saatlik fazla mesai eşiğine yalnızca <em>çalışılan saatleri</em> sayar. 32 saat çalışır ve 16 saat ücretli izin kullanırsanız, çekiniz 48 saat gösterir ancak size sıfır fazla mesai borçludur. Bazı eyaletler ve sendika sözleşmeleri bunu geçersiz kılar — ayrıntılı bilgiyi okuyun.
    </p>
    <p>
      Tatiller için de aynı hikaye. Bir şirket tatilinde çalışmak, federal yasa kapsamında otomatik olarak fazla mesai veya tatil primi tetiklemez. Herhangi bir tatil 1,5× veya 2× primi sözleşmeye bağlıdır, yasal değildir.
    </p>

    <h2>Maaşlı-muaf olmayan tuzağı</h2>
    <p>
      Maaşlı-muaf değilseniz (fazla mesai amaçları için saatlik olarak sınıflandırılsanız da sabit bir haftalık maaş alıyorsanız), yine de fazla mesaiye hak kazanırsınız. Matematik: haftalık maaş ÷ 40 = varsayılan normal ücret. 40 saatin üzerindeki saatler, bu varsayılan ücretin 1,5 katını alır.
    </p>
    <p>
      1.000 dolar/hafta maaşta: 1.000 $ ÷ 40 = saatte 25 $ normal. 50 saatlik bir hafta, 1.000 $ + 10 × 37,50 $ = 1.375 $ öder. Bazı işverenler, fazla mesai primini 0,5×'e düşüren (maaş zaten tüm saatler için normal ücreti kapsadığından) &ldquo;değişken çalışma haftası&rdquo; yöntemini (FLSA § 778.114) kullanır — bu yasaldır ancak yazılı bir anlaşma dahil olmak üzere belirli koşulları karşılamalıdır.
    </p>

    <h2>Maaş çekinizi nasıl doğrulayabilirsiniz</h2>
    <p>
      Son maaş bordronuzu çekin. Bulun: o hafta çalışılan saatler, normal ücret, fazla mesai saatleri, fazla mesai ücreti ve brüt ücret. İlk dördünü, eyaletinizin kural kümesiyle birlikte <a href="/tools/overtime-calculator">fazla mesai hesaplayıcıya</a> girin. Bir dolar içinde eşleşiyorsa, sorun yoktur. Eşleşmiyorsa, hesaplayıcının dökümünü yazdırın ve İK'ya gösterin — bordro yazılımı bunu yeterince sık yanlış alır, kontrol etmeye değer.
    </p>
    <p>
      Yaygın hata kalıpları: bir vardiya farkı dahil edilmesi gerekirken (farklar FLSA kapsamında &ldquo;normal ücretin&rdquo; bir parçasıdır) fazla mesainin taban ücret üzerinden hesaplanması, Kaliforniya'da günlük-artı-haftalık çift sayma ve maaşlı-muaf olmayan çalışanların bordrodaki birinin onları muaf olarak ele alması nedeniyle sıfır fazla mesai alması. Üçünü de yakalamaya değer.
    </p>

    <h2>Ücret hırsızlığından şüpheleniyorsanız</h2>
    <p>
      Her şeyi belgeleyin — vardiya kayıtları, maaş bordroları, zamanlama e-postaları, Slack mesajları. İK veya bordro ile kibarca başlayın; çoğu vaka masum hatalardır. Bu çözülmezse,{" "}
      <a href="https://www.dol.gov/agencies/whd" rel="nofollow">ABD Çalışma Bakanlığı Ücret ve Saat Birimi</a> gizli şikayetleri kabul eder ve size hiçbir maliyeti olmadan soruşturur. Eyalet çalışma kurulları genellikle ücretleri federalden daha hızlı geri alır.
    </p>
    <p>
      Vergi sonrası ele geçeni modellemek için fazla mesai hesaplayıcıyı <a href="/tools/paycheck-calculator">maaş çeki hesaplayıcımızla</a> birlikte kullanın veya yan haklar ve ücretli izin dahil gerçek saatlik rakamınızı bulmak için <a href="/tools/hourly-rate-calculator">saatlik ücret hesaplayıcıyı</a> kullanın.
    </p>
  </>
);