import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Akşam 8'de Doğu Saati'ne bir baskın planlıyorsunuz. Loncanızın yarısı Avrupa'da, iki
      kişi Avustralya'da ve Kaliforniya'daki biri saat hesabını yanlış yaptığı için
      sürekli bir saat geç geliyor. Discord bunu 2021'de dinamik zaman damgalarıyla çözdü
      &mdash; her izleyicinin yerel saat diliminde otomatik olarak görüntülenen kısa bir
      işaretleme. Kimse bir şey dönüştürmez. Kimse sabah 3'te gelmez. Bu kılavuz tam
      sözdizimini, yedi format harfinin tamamını, etiketlerin arkasındaki epoch
      matematiğini ve onları Discord'daki en az kullanılan özellik haline getiren pratik
      kullanım durumlarını (etkinlikler, son tarihler, geri sayımlar, sunucu boost
      sürelerinin dolması) kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Sözdizimi</h2>
    <p>
      Bir Discord zaman damgası,{" "}
      <code>&lt;t:EPOCH:FORMAT&gt;</code> biçiminde düz metin etiketidir. <code>EPOCH</code>, saniye cinsinden (milisaniye değil) bir unix zaman damgasıdır. <code>FORMAT</code>, Discord'a nasıl görüntüleneceğini söyleyen tek bir harftir. Başka bir kullanıcı mesajınızı okuduğunda, istemcisi epoch'u seçilen formatı kullanarak kendi saat dilimine dönüştürür.
    </p>
    <pre>{`<t:1713830400:F>
// New York'taki izleyici için görüntülenir: Tuesday, April 23, 2024 8:00 AM
// Tokyo'daki izleyici için görüntülenir:    Tuesday, April 23, 2024 9:00 PM
// Londra'daki izleyici için görüntülenir:   Tuesday, April 23, 2024 1:00 PM`}</pre>
    <p>
      Epoch her yerde aynı sayıdır. Yalnızca görüntülenen çıktı farklılık gösterir. Unix zamanının var olmasının nedeni tam olarak budur &mdash; saat diliminden bağımsız andır.
    </p>

    <h2>Yedi format harfi</h2>
    <pre>{`<t:1713830400:t>  Kısa saat        8:00 AM
<t:1713830400:T>  Uzun saat        8:00:00 AM
<t:1713830400:d>  Kısa tarih       4/23/2024
<t:1713830400:D>  Uzun tarih        April 23, 2024
<t:1713830400:f>  Kısa tarih/saat  April 23, 2024 8:00 AM    (varsayılan)
<t:1713830400:F>  Uzun tarih/saat   Tuesday, April 23, 2024 8:00 AM
<t:1713830400:R>  Göreceli         in 2 hours / 3 days ago`}</pre>
    <p>
      Format harfini tamamen atlarsanız (<code>&lt;t:1713830400&gt;</code>), Discord
      varsayılan olarak <code>f</code>'yi kullanır. Gerçek biçimlendirme, izleyicinin yerel ayarlarına saygı duyar &mdash; ABD'li kullanıcılar &ldquo;4/23/2024,&rdquo; görürken, Avrupalı kullanıcılar &ldquo;23/04/2024,&rdquo; görür ve 24 saatlik saat kullananlar &ldquo;8:00 PM&rdquo; yerine &ldquo;20:00&rdquo; görür.
    </p>

    <h2>Epoch nasıl alınır</h2>
    <p>
      Hedef anınızın unix zaman damgasına (1970-01-01 UTC'den bu yana geçen saniye) ihtiyacınız var. Bunu elde etmenin üç yolu. Bir zaman damgası oluşturma aracı kullanın ve sonucu yapıştırın. Konsolda çalıştırın: JavaScript <code>Math.floor(new Date('2024-04-23T12:00Z').getTime() / 1000)</code>.
      Bir kabuk kullanın: Linux'ta <code>date -d '2024-04-23 12:00 UTC' +%s</code> veya
      macOS'ta <code>date -j -f '%Y-%m-%d %H:%M' '2024-04-23 12:00' +%s</code>.
    </p>

    <h2>Göreceli format en önemli özelliktir</h2>
    <p>
      <code>&lt;t:EPOCH:R&gt;</code>, &ldquo;3 saat içinde,&rdquo; &ldquo;2 gün içinde,&rdquo; &ldquo;5 dakika önce&rdquo; olarak görüntülenir ve zaman geçtikçe canlı olarak güncellenir. Sayfa yenileme gerektirmez &mdash; Discord her birkaç saniyede bir yeniden hesaplar. Bu, onu geri sayım sayaçları, etkinlik hatırlatıcıları ve &ldquo;X süre önce gönderildi&rdquo; etiketleri için mükemmel kılar.
    </p>
    <pre>{`Etkinlik <t:1713830400:R> başlıyor!
Cevabınızı <t:1713744000:F>'a kadar verin.

// Canlı olarak görüntülenir:
Etkinlik 3 saat içinde başlıyor!
Cevabınızı Monday, April 22, 2024 8:00 AM'a kadar verin.`}</pre>

    <h2>Tek mesajda formatları birleştirme</h2>
    <p>
      Maksimum netlik için formatları karıştırın. Klasik bir etkinlik gönderisi, mutlak bir zamanı (böylece insanlar takvimlerine ekleyebilir) göreceli bir zamanla (böylece ne kadar yakında olduğunu bir bakışta anlarlar) birleştirir.
    </p>
    <pre>{`**Baskın Gecesi**
Ne zaman: <t:1713830400:F> (<t:1713830400:R>)
Lütfen bufflar için 10 dakika erken gelin.`}</pre>

    <h2>Kullanım durumu: etkinlik planlama</h2>
    <p>
      En bariz olanı. Etkinlik gönderinizde &ldquo;TSİ 20:00&rdquo; yerine &mdash; ki bu TSİ dışındaki herkesin kafasını karıştırır &mdash; uzun formatlı bir zaman damgası yapıştırın. Avrupalı üyeler bunu OAS'de, Asyalı üyeler JST'de görür, kimse &ldquo;bekle bu benim için saat kaç&rdquo; diye sormaz. Discord etkinlik özelliği altta yatan aynı mantığı kullanır, ancak bağımsız zaman damgaları herhangi bir kanalda, başlıkta veya DM'de çalışır.
    </p>

    <h2>Kullanım durumu: son tarihler</h2>
    <p>
      Hackathon'lar, ödüller, yarışma başvuruları ve ödev grubu görevleri için son tarihi <code>&lt;t:EPOCH:F&gt;</code> artı{" "}
      <code>&lt;t:EPOCH:R&gt;</code> olarak yapıştırın. Göreceli etiket, &ldquo;3 gün içinde&rdquo;den &ldquo;4 saat içinde&rdquo;ye ve &ldquo;2 dakika önce&rdquo;ye doğru geri sayarken otomatik bir aciliyet yaratır.
    </p>

    <h2>Kullanım durumu: sunucu yönetimi</h2>
    <p>
      Moderasyon botları genellikle susturma süreleri, yasaklama bitişleri ve boost yenilemeleri için zaman damgaları gönderir. &ldquo;kullanıcı <code>&lt;t:1713830400:R&gt;</code>'a kadar susturuldu&rdquo; gibi bir günlük mesajı, her personel üyesine susturmanın ne zaman kalkacağını kendi saat diliminde söyler. Aynı şey turnuva tabloları, çekiliş bitiş zamanları ve planlı bakım pencereleri için de geçerlidir.
    </p>

    <h2>Bilinmesi gereken sınırlamalar</h2>
    <p>
      Discord zaman damgaları yalnızca Discord istemcilerinde &mdash; masaüstü uygulaması, mobil uygulamalar ve web istemcisi &mdash; görüntülenir. Webhook'ların gömülü altbilgi zaman damgalarında (bu alan kendi ISO dizesidir) çalışmazlar ve ekran okuyucu dışa aktarımlarında veya harici uygulamalara mesaj kopyala-yapıştır işlemlerinde çalışmazlar. Kopyalanan şey ham <code>&lt;t:...&gt;</code> metnidir. Ayrıca özel format dizelerini de desteklemezler &mdash; yedi harf size sunulan tek seçenektir, başka bir şey yoktur.
    </p>

    <h2>Bot entegrasyon ipuçları</h2>
    <p>
      Discord botları oluştururken, önceden biçimlendirilmiş dizeler yerine bu etiketleri kullanarak zaman damgaları çıktısı verin. Botunuz kullanıcının saat dilimini bilmez, ancak Discord bilir &mdash; işi onun yapmasına izin verin. Etkinlik duyurusu botları için, kullanıcı girdisini ISO 8601 artı bir saat dilimi olarak kabul edin, unix saniyelerine dönüştürün ve gömülü öğede <code>&lt;t:EPOCH:F&gt;</code> yayınlayın. Bu, her komutta kullanıcılara &ldquo;hangi saat dilimindesiniz&rdquo; diye sormaktan çok daha güvenilirdir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Saniye yerine milisaniye kullanmak.</strong> JavaScript'in{" "}
      <code>Date.now()</code> işlevi ms döndürür. Bir Discord etiketine 1713830400000 yapıştırırsanız, yıl 56.304'te bir tarih alırsınız. Önce 1000'e bölün.
    </p>
    <p>
      <strong>Yanlış format harfini kullanmak.</strong> <code>F</code> ve <code>f</code>{" "}
      farklıdır. Büyük harfler uzun biçimler, küçük harfler kısa biçimler üretir.{" "}
      <code>R</code> büyük/küçük harfe duyarsız olan tek formattır ve kısa biçimi yoktur.
    </p>
    <p>
      <strong>Baştaki t: kısmını unutmak.</strong>{" "}
      <code>&lt;t:EPOCH:F&gt;</code> şeklindedir, <code>&lt;EPOCH:F&gt;</code> değil.{" "}
      <code>t</code>, Discord'a bunun bir zaman damgası etiketi olduğunu söyler.
    </p>
    <p>
      <strong>Etiketin yanına statik bir saat yazmak.</strong> &ldquo;Etkinlik TSİ 20:00 (<code>&lt;t:...:F&gt;</code>)&rdquo; yazmak amacı bozar &mdash; TSİ dışındaki izleyici iki farklı saat görür ve kafası karışır. Sadece etiketi kullanın.
    </p>
    <p>
      <strong>Etiketin webhook yanıtlarında çalıştığını varsaymak.</strong> Çoğu webhook bağlamı onu görüntüler; bazı eski entegrasyonlar onu kaldırır. Planlı bir duyuru için güvenmeden önce hedef kanalınızda test edin.
    </p>
    <p>
      <strong>Tekrarlayan etkinlikler için zaman damgaları kullanmak.</strong> Her etiket tek bir sabit andır. &ldquo;Her Salı saat 20:00&rdquo; tek bir etiketle kodlanamaz &mdash; her oluşum için bir etikete veya etiketi haftalık olarak yeniden yazan bir bota ihtiyacınız vardır.
    </p>
    <p>
      <strong>Yaz saati uygulaması geçişlerini unutmak.</strong> Etkinliğiniz etkinlik organizatörü için &ldquo;yerel saatle 20:00&rdquo; ise, seçtiğiniz unix epoch sabittir. Etkinlikten önce yaz saati değişirse, &ldquo;20:00&rdquo; yerel saatle 19:00 veya 21:00 olur. Epoch'u gerçekten istediğiniz duvar saati anına göre seçin.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Konsola dokunmadan <code>&lt;t:EPOCH:FORMAT&gt;</code> etiketleri oluşturmak için <a href="/tools/discord-timestamp">Discord zaman damgası oluşturucuyu</a> kullanın. Epoch'un amaçladığınız anla eşleştiğini doğrulamak için <a href="/tools/unix-timestamp-converter">unix zaman damgası dönüştürücüyle</a> ve bir etkinliğin kitlenizin bölgelerinde nasıl göründüğünü göndermeden önce kontrol etmek için <a href="/tools/time-zone-converter">saat dilimi dönüştürücüyle</a> eşleştirin.
    </p>
  </>
);
===END FILE===