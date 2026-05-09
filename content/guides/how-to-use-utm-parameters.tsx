export const intro = (
  <>
    <p>
      UTM parametreleri, bir URL'ye eklediğiniz beş sorgu dizesi etiketidir; böylece analiz aracınız
      trafiğin nereden geldiğini bilir. Onlar olmadan, bir bülten, bir podcast sponsorluğu, bir tweet
      ve bir arkadaşınızın blog yazısı &ldquo;doğrudan&rdquo; veya &ldquo;yönlendirme&rdquo; olarak
      görünür — hangi kampanyanın kaydolmayı sağladığını bilemezsiniz.
    </p>
    <p>
      Tutarlı kullanıldığında, UTM'ler pazarlamayı bir tahmin oyunundan ölçülebilir bir sisteme dönüştürür.
      Tutarsız kullanıldığında, temizlenmesi haftalar süren bir veri karmaşası yaratır. Bu kılavuz,
      her parametrenin ne işe yaradığını, verilerin düzenli kalması için nasıl adlandırılması gerektiğini
      ve raporlamayı mahveden hataları kapsar.
    </p>
  </>
);

export const body = (
  <>
    <h2>Beş UTM parametresi</h2>
    <p>
      Google Analytics, beş adlandırılmış sorgu parametresini okur: <strong>utm_source</strong>,{" "}
      <strong>utm_medium</strong>, <strong>utm_campaign</strong>,{" "}
      <strong>utm_term</strong> ve <strong>utm_content</strong>. İlk üçü, herhangi bir yararlı rapor
      için gereklidir. Son ikisi isteğe bağlıdır — term, ücretli arama anahtar kelimeleri içindir,
      content ise aynı kampanya içindeki bağlantı varyantlarını A/B test etmek içindir.
    </p>

    <h2>Her parametrenin gerçek anlamı</h2>
    <p>
      <strong>Source</strong>, yönlendirendir: platform veya yayın. Örnekler: newsletter,
      twitter, google, producthunt. <strong>Medium</strong>, kanal türüdür: email, social,
      cpc (ücretli arama), referral, affiliate. <strong>Campaign</strong>, adlandırılmış çabadır:
      spring-launch-2026, black-friday-2026, feature-x-announcement. Source ve medium'u
      karıştırırsanız, raporlar bozulur — newsletter bir source'dur, email bir medium'dur; bunlar
      birbirinin yerine kullanılamaz.
    </p>

    <h2>Tutarlı bir şema ile URL'ler oluşturun</h2>
    <p>
      Analitiği zehirlemenin en hızlı yolu, üç ekip arkadaşınızın UTM'leri elle yazmasına izin vermektir.
      Biri &ldquo;Facebook,&rdquo; kullanır, diğeri &ldquo;facebook,&rdquo; üçüncüsü &ldquo;FB&rdquo; kullanır —
      şimdi aynı platform için kaynak raporunda üç ayrı satırınız var. Bir kural belirleyin (tümü küçük harf,
      alt çizgi değil kısa çizgi) ve her bağlantıyı aynı şekilde oluşturmak için{" "}
      <a href="/tools/utm-builder">UTM oluşturucumuzu</a> kullanın.
    </p>

    <h2>Ölçeklenebilir bir adlandırma kuralı</h2>
    <p>
      Her şeyi küçük harf yapın. Kelimeler arasında kısa çizgi kullanın (utm_campaign=spring-sale-2026,
      Spring_Sale_2026 değil). Source'u kısa ve insan tarafından okunabilir tutun (twitter, twitter-feed-link değil).
      Tekrarlayan kampanyalar yürütüyorsanız, kampanya adına tarih veya çeyrek ekleyin — bu, her şeyi yeniden
      adlandırmadan yıldan yıla karşılaştırma yapmanızı sağlar. Şemayı paylaşılan bir belgede belgeleyin,
      böylece yeni ekip arkadaşları kendi formatlarını icat etmez.
    </p>

    <h2>UTM'ler nereye konulmalı — ve nereye konulmamalı</h2>
    <p>
      Kendi siteniz dışına yerleştirdiğiniz her bağlantıyı etiketleyin: sosyal paylaşımlar, e-posta kampanyaları,
      ortaklıklar, reklamlar, sponsorluklar. Kendi sitenizdeki sayfalar arasındaki dahili bağlantıları
      etiketlemeyin — bu, oturum verilerinin üzerine yazacak ve kullanıcıları kendinize yanlış atfedecektir.
      Dahili tıklamaları izlemeniz gerekiyorsa, UTM'leri değil, analiz aracınızda olay izlemeyi kullanın.
    </p>

    <h2>Paylaşmadan önce UTM bağlantılarını kısaltın</h2>
    <p>
      UTM etiketli uzun URL'ler, bir tweet veya bültende spam gibi görünür. Paylaşmadan önce bunları bir URL
      kısaltıcıdan geçirin. Yalnızca kısaltıcının yönlendirmede sorgu dizesini koruduğundan emin olun (çoğu korur).
      Bir yığın gizemli UTM bağlantısı devralırsanız,{" "}
      <a href="/tools/utm-parser">UTM ayrıştırıcımız</a> bunları source, medium
      ve campaign'lerine ayırarak neyin çalıştığını denetlemenizi sağlar.
    </p>

    <h2>Yönlendirmeyi değil, hedefi izleyin</h2>
    <p>
      Açılış sayfanız farklı bir URL'ye yönlendiriyorsa (301 veya 302), bazı analiz kurulumları
      yönlendirmede UTM parametrelerini kaybeder. Yayınlamadan önce etiketli bir bağlantıyı kendiniz test edin —
      tıklayın, sayfaya gelin ve UTM'lerin gerçek zamanlı analitiğinizde göründüğünü onaylayın.
    </p>

    <h2>Çok kanallı lansmanlar için kampanya adlandırma</h2>
    <p>
      Bir kampanya e-posta, sosyal ve ücretli reklamlar arasında yürütüldüğünde,{" "}
      <strong>utm_campaign</strong>'i her üçünde de aynı tutun, ancak{" "}
      <strong>utm_medium</strong> ve <strong>utm_source</strong>'ı değiştirin. Bu şekilde kampanya raporu
      bunları bir araya getirir ve source/medium raporu kanala göre ayırır. Bu, &ldquo;lansman 4.200 kaydolma
      getirdi, %60'ı e-postadan, %25'i sosyalden, %15'i ücretliden&rdquo; demenizi sağlayan kalıptır.
    </p>

    <h2>A/B testi için utm_content kullanma</h2>
    <p>
      Aynı bağlantının iki versiyonu — biri utm_content=button-top, diğeri
      button-bottom. Aynı kampanya, aynı source, aynı medium. Şimdi içerik dökümü size
      hangi versiyonun daha fazla dönüşüm sağladığını söyler. Bunu CTA metin testleri, görsel testleri veya e-postadaki
      konu satırı testleri için kullanın.
    </p>

    <h2>Kaçınılması gereken yaygın hatalar</h2>
    <p>
      Kendi dahili bağlantılarınızı etiketlemek. URL'de PII (e-posta adresleri, kullanıcı kimlikleri) içeren
      bağlantıları etiketlemek — bu, her analiz raporunda kullanıcı verilerini açığa çıkarır. UTM değerlerine
      boşluk eklemek (<code>%20</code> veya kısa çizgi kullanın). İlgisiz çabalar için aynı kampanya adını
      yeniden kullanmak. Birçok analiz aracında UTM değerlerinin büyük/küçük harfe duyarlı olduğunu unutmak.
    </p>

    <h2>Hepsini bir araya getirmek</h2>
    <p>
      Bir adlandırma belgesiyle başlayın. Paylaşılan her bağlantıyı{" "}
      <a href="/tools/utm-builder">UTM oluşturucudan</a> geçirin. Analiz source/medium raporunuzu
      aylık olarak yazım hataları veya kopyalar için denetleyin. Veriler temizlendikten sonra, kanalları
      gerçekten karşılaştırabilirsiniz — ki tüm mesele budur.
    </p>

    <p>
      İlgili: <a href="/guides/seo-basics-for-beginners">Yeni başlayanlar için SEO temelleri</a>,{" "}
      <a href="/guides/how-to-start-a-blog">blog nasıl başlatılır</a> ve{" "}
      <a href="/guides/how-to-write-a-meta-description">meta açıklama nasıl yazılır</a> ki
      şimdi ölçtüğünüz tıklamaları kazansın.
    </p>
  </>
);
===END FILE===