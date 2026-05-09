import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      UTM parametreleri, Google Analytics ve diğer tüm büyük analitik platformlarının bir ziyareti belirli bir pazarlama kanalına, kampanyaya ve kreatife atfetmek için okuduğu beş sorgu dizesi etiketidir. Parametrelerin kendileri basittir &mdash; bir URL'ye eklenen beş tahmin edilebilir anahtar &mdash; ancak adlandırma, büyük/küçük harf kullanımı ve sınıflandırma etrafındaki kurallar, raporlarınızın kullanışlı olup olmadığına veya her çeyrek temizlenmesi gereken neredeyse kopyalardan oluşan bir yığın olup olmadığına karar verir. Bu kılavuz, beş parametrenin her birini ve ne zaman kullanılacağını,
      <code> Facebook</code> ve <code>facebook</code>'un ayrı kaynaklar olarak görünmesini önleyen adlandırma kurallarını, GA4 ile Universal Analytics arasındaki tuhaflıkları, tamamen benimseyebileceğiniz bir sınıflandırma şablonunu ve geriye dönük düzeltmeleri gerekli kılan yaygın hataları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>UTM'ler nedir</h2>
    <p>
      UTM, &ldquo;Urchin Tracking Module&rdquo; (Urchin İzleme Modülü) anlamına gelir &mdash;
      Urchin, Google'ın 2005'te satın aldığı ve temeli Google Analytics haline gelen analitik şirketiydi. Parametreler sadece sorgu dizesi anahtarlarıdır; URL'leri okuyan herhangi bir analitik aracı bunları alabilir.
    </p>
    <p>
      Etiketlenmiş bir bağlantı şöyle görünür:
    </p>
    <pre>{`https://example.com/pricing
  ?utm_source=newsletter
  &utm_medium=email
  &utm_campaign=spring_2026_launch
  &utm_content=hero_button
  &utm_term=pricing`}</pre>

    <h2>Beş parametre</h2>
    <p>
      <strong>utm_source</strong> &mdash; platform veya satıcı
      (<code>google</code>, <code>facebook</code>,
      <code> newsletter</code>, <code>partner_acme</code>). &ldquo;Tıklama nereden geldi?&rdquo; sorusunu yanıtlar.
      Her zaman gereklidir.
    </p>
    <p>
      <strong>utm_medium</strong> &mdash; pazarlama kanalı türü
      (<code>cpc</code>, <code>email</code>, <code>social</code>,
      <code> display</code>, <code>affiliate</code>, <code>organic</code>).
      &ldquo;Ne tür bir trafik?&rdquo; sorusunu yanıtlar. Her zaman gereklidir.
    </p>
    <p>
      <strong>utm_campaign</strong> &mdash; bağlantının parçası olduğu girişim
      (<code>spring_2026_launch</code>,
      <code> black_friday</code>). Her zaman gereklidir.
    </p>
    <p>
      <strong>utm_content</strong> &mdash; aynı kampanya içindeki birden çok bağlantıyı ayırt eder (<code>hero_button</code> vs
      <code> footer_link</code> veya A/B kreatif varyantları). İsteğe bağlıdır ancak kampanya başına birden fazla bağlantınız varsa şiddetle tavsiye edilir.
    </p>
    <p>
      <strong>utm_term</strong> &mdash; arama reklamları için ücretli anahtar kelime. Eski kullanım; Google Ads'de
      <code> {"{keyword}"}</code> ile otomatik etiketleme bunu otomatik olarak doldurur. Nadiren elle ayarlanır.
    </p>

    <h2>Daha sonra saatler kazandıran adlandırma kuralları</h2>
    <p>
      Üç kural, sınıflandırma kaymasının %90'ını önler.
    </p>
    <p>
      <strong>Tümü küçük harf.</strong> UTM değerleri büyük/küçük harfe duyarlıdır.
      <code> Email</code> ve <code>email</code>, raporunuzda iki farklı
      kaynaktır. Bağlantının oluşturulduğu noktada küçük harfe zorlayın.
    </p>
    <p>
      <strong>Kelimeler arasında alt çizgi.</strong> Boşluklar
      <code>%20</code> veya <code>+</code> olarak kodlanır, bu da raporlarda berbat görünür ve bazı araçları bozar. Tutarlı bir şekilde
      <code> _</code> kullanın.
    </p>
    <p>
      <strong>Kontrollü kelime dağarcığı.</strong> Her parametre için izin verilen
      değerleri yazın. <code>e-mail</code>,
      <code> email</code>, <code>newsletter</code> ve
      <code> eblast</code> ortamlarının tümü aynı anlama gelir &mdash; birini seçin ve belgeleyin.
    </p>
    <p>
      Minimal bir sınıflandırma:
    </p>
    <pre>{`utm_medium izin verilen değerler:
  cpc            ücretli arama
  display        banner reklamları
  paid_social    Facebook/Instagram/LinkedIn/TikTok ücretli
  email          işlemsel + bülten
  affiliate      ortak bağlantıları
  referral       diğer sitelerden ücretsiz bağlantılar
  organic_social ücretsiz sosyal gönderiler
  qr             basılı QR kodları`}</pre>

    <h2>Yalnızca harici bağlantıları etiketleyin</h2>
    <p>
      UTM'ler, kullanıcıları dışarıdan <strong>sitenize</strong>
      getiren bağlantılar içindir. Dahili bağlantıları etiketlemek, oturum ilişkilendirmesini bozar &mdash; GA4, yeni bir kampanya gördüğünde oturumu sıfırlar, bu nedenle UTM'li bir dahili bağlantı, kullanıcının kendi siteniz içinde tıklamasından kaynaklanan sahte bir &ldquo;yeni ziyaret&rdquo; oluşturur. Kendi alan adınızdaki bir bağlantıya asla UTM etiketi eklemeyin.
    </p>

    <h2>Universal Analytics'ten GA4 farklılıkları</h2>
    <p>
      GA4 aynı beş parametreyi okur, ancak Google'ın 2023'te tanıttığı iki yeni parametreyi de anlar:
    </p>
    <p>
      <strong>utm_source_platform</strong> &mdash; kaynağın üzerinde daha üst düzey bir gruplama (ör. Google Ads, Display &amp; Video 360).
    </p>
    <p>
      <strong>utm_creative_format</strong> ve
      <strong> utm_marketing_tactic</strong> &mdash; ücretli medya için isteğe bağlı boyutlar.
    </p>
    <p>
      GA4 ayrıca varsayılan olarak yeni kaynak/ortamda oturumu sıfırlarken, UA'nın 30 dakikalık bir penceresi vardı. UA tarzı davranışa ihtiyacınız varsa, Yönetici'de oturum zaman aşımını ayarlayın.
    </p>

    <h2>UTM değerlerini URL kodlama</h2>
    <p>
      Bir değer boşluk, noktalama işareti veya ASCII olmayan karakterler içeriyorsa, yüzde olarak kodlanmalıdır. Sorunu önlemenin en kolay yolu, bu karakterleri sınıflandırmanızda yasaklamaktır. Bunları dahil etmeniz gerekiyorsa, değeri kodlayın: &ldquo;q1 relaunch&rdquo; için <code>utm_campaign=q1%20relaunch</code>
      {" "}.
    </p>

    <h2>UTM'ler ve çok dokunuşlu ilişkilendirme</h2>
    <p>
      Varsayılan GA4 ilişkilendirmesi, veri odaklı veya son tıklamadır. Dönüşümden önceki <strong>son</strong> doğrudan olmayan tıklamadaki UTM'ler
      krediyi alır. Yeniden hedeflemeyi yoğun bir şekilde kullanıyorsanız,
      <code> utm_medium=display</code> değeriniz, huninin sonunda ateşlendiği için çoğu dönüşümü yönlendiriyormuş gibi görünecektir. İlk dokunuş ve yardımcı katkıları görmek için GA4'ün ilişkilendirme raporlarını veya harici bir model kullanın.
    </p>

    <h2>Kısaltma ve yönlendirmeler UTM'leri korur</h2>
    <p>
      301 veya 302 yönlendirmesi, uyumlu her sunucuda varsayılan olarak sorgu parametrelerini korur. Bağlantı kısaltıcılar (bit.ly, rebrand.ly)
      da UTM'leri iletir. UTM'lerin kaldırıldığı tek yer, agresif gizlilik tarayıcıları ve bazı e-posta uygulamalarıdır &mdash; ancak parametreler neredeyse her gerçek dünya senaryosunda açılış sayfasına iletilir.
    </p>

    <h2>Gizlilik ve yönlendirme sızıntısı</h2>
    <p>
      Bir URL'deki UTM'ler, pazarlama sınıflandırmanızı herkese açık hale getirir. Bir kullanıcı UTM etiketli bir bağlantıyı sosyal medyada paylaşırsa, tıklayan herkes adlandırma şemanızı görür ve kendisini orijinal kampanyaya atfeder. İki hafifletme yöntemi: analitik isteği ateşlendikten sonra URL'den UTM'leri <code>history.replaceState</code> ile kaldırın veya temiz bir hedefe yeniden yazan bir bağlantı kısaltıcı kullanın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Büyük/küçük harf kayması.</strong>
      <code> utm_source=Facebook</code> bir hafta,
      <code> utm_source=facebook</code> sonraki hafta. Rapor onları sonsuza kadar iki satıra böler. Bağlantıları oluşturan araçta küçük harfe zorlayın.
    </p>
    <p>
      <strong>Dahili bağlantıları etiketleme.</strong> Oturum sürekliliğini bozar; &ldquo;yeni ziyaretleri&rdquo; şişirir; ilişkilendirmeyi bozar. UTM'ler yalnızca haricidir.
    </p>
    <p>
      <strong>Boşlukları tutarsız bir şekilde <code>+</code> olarak kodlama.</strong>
      {" "}GA4 hem <code>%20</code> hem de <code>+</code>'yı okur, ancak
      raporlar URL'de hangisi varsa onu görüntüler, bu nedenle
      <code> spring+launch</code> ve <code>spring%20launch</code>
      iki kampanya gibi görünür. Sadece boşluklardan tamamen kaçının.
    </p>
    <p>
      <strong>Eksik ortam.</strong> GA4, ortam eksik olduğunda
      <code> (ayarlanmamış)</code> değerine düşer, bu da kanal gruplamasında <code>(doğrudan) / (hiçbiri)</code> içinde birleşir ve ücretli kanal raporlarından kaybolur. Ortamı asla boş bırakmayın.
    </p>
    <p>
      <strong>Kampanya adlarını yıllar arasında yeniden kullanma.</strong>
      <code> utm_campaign=spring_sale</code> 2025'te ve yine 2026'da
      yıldan yıla analizi bulanıklaştırır. Her zaman yılı ekleyin:
      <code> utm_campaign=spring_sale_2026</code>.
    </p>
    <p>
      <strong>Serbest metin kreatif adları.</strong>
      <code> utm_content=big_red_button</code> bir sefer,
      <code> utm_content=cta1</code> sonraki. Küçük ekipler için sorun değil; ölçekte karmaşaya dönüşür. Sınıflandırma spesifikasyonunuzda <code>utm_content</code>
      {" "}kurallarını belgeleyin.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Düzgün biçimlendirilmiş, küçük harfli UTM bağlantılarını{" "}
      <a href="/tools/utm-builder">UTM oluşturucu</a> ile oluşturun. Ekibinizin halihazırda yayınladığı bağlantıları denetlemek için{" "}
      <a href="/tools/utm-parser">UTM ayrıştırıcı</a> ve paylaşılabilir veya kurallı URL'lerden izleme parametrelerini kaldırmak için{" "}
      <a href="/tools/url-cleaner">URL temizleyici</a> ile birlikte kullanın.
    </p>
  </>
);