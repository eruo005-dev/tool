import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir baskın için saat 20.00 Doğu Zaman Dilimi'nde planlama yapıyorsunuz. Loncanızın yarısı Avrupa'da, iki kişi Avustralya'da ve Kaliforniya'daki biri yanlış hesaplama yaptığı için her seferinde bir saat geç geliyor. Discord bunu 2021'de dinamik zaman damgalarıyla çözdü &mdash; her izleyicinin yerel saat diliminde otomatik olarak görüntülenen kısa bir işaretleme. Kimse bir şey dönüştürmüyor. Kimse saat 03.00'te gelmiyor. Bu kılavuz, tam sözdizimini, yedi format harfinin tamamını, etiketlerin arkasındaki epoch matematiğini ve bunları Discord'daki en az kullanılan özellik haline getiren pratik kullanım durumlarını (etkinlikler, son teslim tarihleri, geri sayımlar, sunucu takviye süre sonları) kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Sözdizimi</h2>
    <p>
      Bir Discord zaman damgası, <code>&lt;t:EPOCH:FORMAT&gt;</code> biçiminde düz metin etiketidir. <code>EPOCH</code>, saniye cinsinden (milisaniye değil) bir unix zaman damgasıdır. <code>FORMAT</code>, Discord'a nasıl görüntüleneceğini söyleyen tek bir harftir. Başka bir kullanıcı mesajınızı okuduğunda, istemcisi, seçilen formatı kullanarak epoch'u kendi saat dilimine dönüştürür.
    </p>
    <pre>{`<t:1713830400:F>
// New York'taki izleyici için görüntülenir: Tuesday, April 23, 2024 8:00 AM
// Tokyo'daki izleyici için görüntülenir:    Tuesday, April 23, 2024 9:00 PM
// Londra'daki izleyici için görüntülenir:   Tuesday, April 23, 2024 1:00 PM`}</pre>
    <p>
      Epoch her yerde aynı sayıdır. Yalnızca görüntülenen çıktı farklılık gösterir. Unix zamanının var olmasının nedeni tam olarak budur &mdash; saat diliminden bağımsız andır.
    </p>

    <h2>Yedi format harfi</h2>
    <pre>{`<t:1713830400:t>  Kısa saat         8:00 AM
<t:1713830400:T>  Uzun saat          8:00:00 AM
<t:1713830400:d>  Kısa tarih         4/23/2024
<t:1713830400:D>  Uzun tarih         April 23, 2024
<t:1713830400:f>  Kısa tarih/saat    April 23, 2024 8:00 AM    (varsayılan)
<t:1713830400:F>  Uzun tarih/saat    Tuesday, April 23, 2024 8:00 AM
<t:1713830400:R>  Göreceli           2 saat içinde / 3 gün önce`}</pre>
    <p>
      Format harfini tamamen atlarsanız (<code>&lt;t:1713830400&gt;</code>), Discord varsayılan olarak <code>f</code>'yi kullanır. Gerçek biçimlendirme, izleyicinin yerel ayarlarına saygı gösterir &mdash; ABD'li kullanıcılar "4/23/2024" görür, Avrupalı kullanıcılar "23/04/2024" görür ve 24 saatlik saat kullanan kullanıcılar "8:00 PM" yerine "20:00" görür.
    </p>

    <h2>Epoch nasıl alınır</h2>
    <p>
      Hedef anınızın unix zaman damgasına (1970-01-01 UTC'den bu yana geçen saniye) ihtiyacınız var. Bunu elde etmenin üç yolu. Bir zaman damgası oluşturma aracı kullanın ve sonucu yapıştırın. Konsolda çalıştırın: JavaScript <code>Math.floor(new Date('2024-04-23T12:00Z').getTime() / 1000)</code>. Bir kabuk kullanın: Linux'ta <code>date -d '2024-04-23 12:00 UTC' +%s</code> veya macOS'te <code>date -j -f '%Y-%m-%d %H:%M' '2024-04-23 12:00' +%s</code>.
    </p>

    <h2>Göreceli format en önemli özelliktir</h2>
    <p>
      <code>&lt;t:EPOCH:R&gt;</code>, "3 saat içinde", "2 gün içinde", "5 dakika önce" olarak görüntülenir ve zaman geçtikçe canlı olarak güncellenir. Sayfa yenileme gerektirmez &mdash; Discord her birkaç saniyede bir yeniden hesaplar. Bu, onu geri sayım sayaçları, etkinlik hatırlatıcıları ve "X süre önce yayınlandı" etiketleri için mükemmel kılar.
    </p>
    <pre>{`Etkinlik <t:1713830400:R> başlıyor!
Cevabınızı <t:1713744000:F>'a kadar verin.

// Canlı olarak görüntülenir:
Etkinlik 3 saat içinde başlıyor!
Cevabınızı Monday, April 22, 2024 8:00 AM'a kadar verin.`}</pre>

    <h2>Tek mesajda formatları birleştirme</h2>
    <p>
      Maksimum netlik için formatları karıştırın. Klasik bir etkinlik gönderisi, mutlak bir zamanı (böylece insanlar takvimlerine ekleyebilir) göreceli bir zamanla (böylece ne kadar yakında olduğunu bir bakışta bilirler) eşleştirir.
    </p>
    <pre>{`**Baskın Gecesi**
Ne zaman: <t:1713830400:F> (<t:1713830400:R>)
Güçlendirmeler için lütfen 10 dakika erken gelin.`}</pre>

    <h2>Kullanım durumu: etkinlik planlama</h2>
    <p>
      En bariz olanı. Etkinlik gönderinizde herkesi ET dışında kafası karıştıran "akşam 8 ET" yerine uzun formatlı bir zaman damgası yapıştırın. Avrupalı üyeler bunu OAS'de, Asyalı üyeler JST'de görür, kimse "bekle bu benim için saat kaç" diye sormaz. Discord etkinlik özelliği aynı mantığı kullanır, ancak bağımsız zaman damgaları her kanalda, başlıkta veya DM'de çalışır.
    </p>

    <h2>Kullanım durumu: son teslim tarihleri</h2>
    <p>
      Hackathon'lar, ödüller, yarışma başvuruları ve ödev grubu görevleri için son teslim tarihini <code>&lt;t:EPOCH:F&gt;</code> artı <code>&lt;t:EPOCH:R&gt;</code> olarak yapıştırın. Göreceli etiket, "3 gün içinde"den "4 saat içinde"ye ve "2 dakika önce"ye doğru geri sayarken otomatik bir aciliyet duygusu yaratır.
    </p>

    <h2>Kullanım durumu: sunucu yönetimi</h2>
    <p>
      Moderasyon botları genellikle susturma süreleri, yasaklama süre sonları ve takviye yenilemeleri için zaman damgaları gönderir. "Kullanıcı <code>&lt;t:1713830400:R&gt;</code>'a kadar susturuldu" gibi bir günlük mesajı, her personel üyesine kendi saat diliminde susturmanın ne zaman kalkacağını söyler. Aynı şey turnuva tabloları, çekiliş bitiş zamanları ve planlı bakım pencereleri için de geçerlidir.
    </p>

    <h2>Bilinmesi gereken sınırlamalar</h2>
    <p>
      Discord zaman damgaları yalnızca Discord istemcilerinde &mdash; masaüstü uygulaması, mobil uygulamalar ve web istemcisi &mdash; görüntülenir. Web kancalarının gömülü altbilgi zaman damgalarında çalışmazlar (bu alan kendi ISO dizesidir) ve ekran okuyucu dışa aktarımlarında veya harici uygulamalara mesaj kopyala-yapıştır işlemlerinde çalışmazlar. Kopyalanan şey ham <code>&lt;t:...&gt;</code> metnidir. Ayrıca özel format dizelerini desteklemezler &mdash; yedi harf size sunulan tek seçenektir.
    </p>

    <h2>Bot entegrasyon ipuçları</h2>
    <p>
      Discord botları oluştururken, önceden biçimlendirilmiş dizeler yerine bu etiketleri kullanarak zaman damgaları çıktısı verin. Botunuz kullanıcının saat dilimini bilmez, ancak Discord bilir &mdash; işi ona bırakın. Etkinlik duyurusu botları için, kullanıcı girdisini ISO 8601 artı bir saat dilimi olarak kabul edin, unix saniyelerine dönüştürün ve gömülü öğede <code>&lt;t:EPOCH:F&gt;</code> yayınlayın. Bu, her komutta kullanıcılara "hangi saat dilimindesiniz" diye sormaktan çok daha güvenilirdir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Saniye yerine milisaniye kullanmak.</strong> JavaScript'in <code>Date.now()</code> işlevi ms döndürür. Bir Discord etiketine 1713830400000 yapıştırırsanız, yıl 56.304'te bir tarih alırsınız. Önce 1000'e bölün.
    </p>
    <p>
      <strong>Yanlış format harfini kullanmak.</strong> <code>F</code> ve <code>f</code> farklıdır. Büyük harfler uzun biçimler, küçük harfler kısa biçimler üretir. <code>R</code>, büyük/küçük harfe duyarlı olmayan tek formattır ve kısa biçimi yoktur.
    </p>
    <p>
      <strong>Baştaki t: unutmak.</strong> <code>&lt;t:EPOCH:F&gt;</code> şeklindedir, <code>&lt;EPOCH:F&gt;</code> değil. <code>t</code>, Discord'a bunun bir zaman damgası etiketi olduğunu söyler.
    </p>
    <p>
      <strong>Etiketin yanına statik bir saat yazmak.</strong> "Etkinlik akşam 8 ET (<code>&lt;t:...:F&gt;</code>)" yazmak amacı bozar &mdash; ET dışındaki izleyici iki farklı saat görür ve kafası karışır. Sadece etiketi kullanın.
    </p>
    <p>
      <strong>Etiketin web kancalarına verilen yanıtlarda çalıştığını varsaymak.</strong> Çoğu web kancası bağlamı onu işler; bazı eski entegrasyonlar onu kaldırır. Planlı bir duyuru için güvenmeden önce hedef kanalınızda test edin.
    </p>
    <p>
      <strong>Tekrarlanan etkinlikler için zaman damgaları kullanmak.</strong> Her etiket sabit bir andır. "Her Salı akşam 8" tek bir etiketle kodlanamaz &mdash; her oluşum için bir etikete veya etiketi haftalık olarak yeniden yazan bir bota ihtiyacınız vardır.
    </p>
    <p>
      <strong>Yaz saati uygulaması geçişlerini unutmak.</strong> Etkinliğiniz etkinlik organizatörü için "yerel saatle akşam 8" ise, seçtiğiniz unix epoch sabittir. Etkinlikten önce YSU değişirse, "akşam 8"iniz yerel saatle akşam 7 veya 9 olur. Epoch'u gerçekten istediğiniz duvar saati anına göre seçin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      <a href="/tools/discord-timestamp">Discord zaman damgası oluşturucu</a>yu kullanarak konsola dokunmadan <code>&lt;t:EPOCH:FORMAT&gt;</code> etiketleri oluşturun. Epoch'un amaçladığınız anla eşleştiğini doğrulamak için <a href="/tools/unix-timestamp-converter">unix zaman damgası dönüştürücü</a> ve bir etkinliğin kitlenizin bölgelerinde nasıl göründüğünü yayınlamadan önce kontrol etmek için <a href="/tools/time-zone-converter">saat dilimi dönüştürücü</a> ile birlikte kullanın.
    </p>
  </>
);