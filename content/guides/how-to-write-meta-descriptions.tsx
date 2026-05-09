import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      <a href="/learn/meta-description">Meta açıklama</a>, bir sayfanın başlığının altında arama sonuçlarında görünen kısa paragraftır. Sıralamaları doğrudan etkilemez—Google bunu 2009'da doğruladı ve o zamandan beri tekrarladı—ancak bir arama yapan kişinin tıklama olasılığı üzerinde büyük bir etkiye sahiptir. Doğru uzunlukta ve net bir harekete geçirici mesaj içeren ilgi çekici bir açıklama, genel veya kesilmiş bir açıklamaya kıyasla tıklama oranını iki katına çıkarabilir. Uzunluğu yanlış ayarlarsanız Google, sayfa içeriğinden yeniden yazar; doğru ayarlar ve güçlü bir CTA ile, sıralamanızın zaten kazandırdığı trafiği toplarsınız. Bu kılavuz, karakter ve piksel sınırlarını, Google'ın açıklamaları neden yeniden yazdığını, dönüşüm sağlayan bir açıklamanın nasıl yapılandırılacağını, sayfalar arasındaki kopyaların nasıl ele alınacağını ve mobil ile masaüstü kesintilerinin nasıl kontrol edileceğini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Uzunluk sınırları: 155-160 karakter</h2>
    <p>
      Meta açıklamalar için pratik karakter sınırı, masaüstü Google'da 155 ila 160 karakterdir ve bu genellikle yaklaşık 920 piksel açıklama metni görüntüler. Mobil kesinti daha kısadır, yaklaşık 120 karakter, çünkü görüntü alanı daha dardır. Bing, yaklaşık 168 karaktere kadar görüntüler. 155-160 aralığı, birincil arama motorları için güvenli hedeftir. Bu sınırı aşmak, açıklamanın üç nokta ile kesilmesi riskini taşır; çok altında kalmak ise tıklamayı satabileceğiniz önemli snippet alanını boşa harcar.
    </p>
    <pre>{`Google masaüstü:  ~155-160 karakter (~920 px)
Google mobil:     ~120 karakter
Bing:             ~168 karakter
Güvenli hedef:    150-160 karakter`}</pre>

    <h2>Piksel genişliği ve karakter sayısı</h2>
    <p>
      Google aslında karakter sayısına değil, piksel genişliğine göre kesinti yapar. Karakter aralığı bir vekildir. Büyük M, W veya em tire gibi geniş karakterler, i, l ve noktalama işaretleri gibi dar karakterlerden piksel başına daha fazla yer kaplar. Çok sayıda geniş karakter kullanan bir açıklama 145 karakterde kesilebilir; çok sayıda dar karakter kullanan bir açıklama ise 165 karaktere sığabilir. Piksel duyarlı denetleyiciler, Google'ın kullandığı aynı yazı tipinde gerçek genişliği ölçer. Sıradan düzyazı için 155-160 karakter aralığı güvenilirdir.
    </p>

    <h2>Google'ın açıklamaları neden yeniden yazdığı</h2>
    <p>
      Google, açıklamaların yaklaşık yüzde 60 ila 70'ini yeniden yazar ve sorguyla daha iyi eşleşen sayfa içeriğini kullanır. Meta açıklamanız, arama yapan kişinin sorgusundaki terimlerden bahsetmediğinde, Google genellikle gövdeden bunları içeren bir snippet çeker. Açıklamanız çok kısa, genel (&ldquo;Sitemize hoş geldiniz&rdquo;) veya sayfayı açıkça tanımlamıyorsa, Google onu geçersiz kılar. Sayfanızın sıralandığı olası sorguları içeren ve bir pazarlama sloganı değil, doğal bir snippet gibi okunan açıklamalar yazarak yeniden yazmaları azaltabilirsiniz.
    </p>

    <h2>Dönüşüm sağlayan yapı</h2>
    <p>
      En iyi performans gösteren açıklamalar üç bölümden oluşur: arama yapan kişinin amacıyla eşleşen bir kanca, sayfanın sunduğu belirli bir vaat ve bir harekete geçirici mesaj. Tipik bir yapı, üçünü de 150 karaktere sığdırır. Değer teklifiyle başlayın, sayfayı farklı kılan şeyi belirtin ve okuyucuya bir sonraki adımda ne yapması gerektiğini söyleyin. Her açıklamaya marka adıyla başlamaktan kaçının—marka zaten alan adında görünür.
    </p>
    <pre>{`Zayıf:
Acme'ye hoş geldiniz. Widget'lar ve aletler satıyoruz. Bugün bizi ziyaret edin.

Güçlü:
Ücretsiz 2 günlük kargo ve 90 günlük garanti ile 500'den fazla su geçirmez widget'ı inceleyin. Modelleri karşılaştırın, 10.000'den fazla yorumu okuyun, bugün sipariş verin.`}</pre>

    <h2>Hedef sorguyu doğal bir şekilde ekleyin</h2>
    <p>
      Google, snippet'te sorgu terimlerini kalın yapar, bu da gözü çeker ve <a href="/learn/ctr">TO</a>'yu artırır. Olası hedef sorguyu bir kez, doğal bir şekilde, açıklamanın ilk yarısında ekleyin. Doldurmayın—aynı ifadenin birden çok kez kullanılması spam gibi görünür ve yeniden yazmayı tetikleyebilir. Sayfanız birkaç yakından ilişkili sorguyu hedefliyorsa, açıklama için en yüksek hacimli olanı seçin ve diğerlerinin, Google'ın sorguya özel snippet'ler çıkarabileceği gövdede görünmesine izin verin.
    </p>

    <h2>Harekete geçirici mesaj seçenekleri</h2>
    <p>
      &ldquo;Daha fazla bilgi edinin&rdquo; en zayıf CTA'dır çünkü yazılmış her bağlantıyı tanımlar. Daha güçlü CTA'lar belirgindir: &ldquo;Planları karşılaştırın&rdquo;, &ldquo;Ücretsiz teklif alın&rdquo;, &ldquo;Şablonu indirin&rdquo;, &ldquo;14 gün ücretsiz deneyin&rdquo;, &ldquo;Tasarrufunuzu hesaplayın.&rdquo; CTA, tıklamadan sonra ne olacağına dair beklenti oluşturmalıdır. Uyumsuz CTA'lar (bir hesap makinesi vaat edip 2.000 kelimelik bir makale sunmak) hem TO'ya hem de hemen çıkma oranına zarar verir.
    </p>

    <h2>Sayfalar arasında yinelenen açıklamalar</h2>
    <p>
      Birçok CMS varsayılan olarak aynı açıklamayı bir bölümdeki veya şablondaki her sayfaya kopyalar. Bu hafif derecede zararlıdır: Google'ın Search Console'u yinelenen meta açıklamaları işaretler ve aynı açıklamalar, Google'ın bunları paylaşan her sayfayı yeniden yazacağını garanti eder. Dizine eklenebilir her sayfanın benzersiz, sayfaya özel bir açıklaması olmalıdır. Büyük siteler için, hiçbir iki sayfanın aynı dizeyi paylaşmaması için şablon alanlarından (ürün adı, kategori, ana özellik) açıklamalar oluşturun.
    </p>

    <h2>Mobil ve masaüstü kesintisi</h2>
    <p>
      Mobil SERP'ler, görüntü alanı daha dar olduğu için daha erken kesinti yapar. Masaüstünde düzgün görünen 160 karakterlik bir açıklama, mobilde 120'de kesilebilir. En önemli içeriği öne yükleyin: ilk 120 karakter, bağımsız bir teklif olarak durmalıdır. CTA'yı ve destekleyici ayrıntıları, sahip olunması güzel ancak gerekli olmayan son 30-40 karaktere koyun.
    </p>

    <h2>Neler dahil edilmemeli</h2>
    <p>
      Açıklamada çift tırnak kullanmayın—Google bunları kaldırır. HTML, unicode karakterlerin ötesinde emojiler veya anahtar kelime dolu listeler eklemeyin. Marka adını tekrar tekrar eklemeyin. Şablon açıklamalara tarih veya &ldquo;2023'te güncellendi&rdquo; eklemeyin çünkü bunlar anında bayatlar ve kullanıcılara içeriğin güncel olmayabileceğini işaret eder. Başlık etiketini açıklamada tekrarlamayın—bu yer israfıdır ve yeni bilgi içermez.
    </p>

    <h2>Takip ve iyileştirme</h2>
    <p>
      Google Search Console'da, Performans verilerinin TO sütununu sorgular ve sayfalar arasında karşılaştırın. 2-6. sıralarda yer alan ve ortalamanın altında TO'ya sahip sayfalar, meta açıklama iyileştirmeleri için adaydır. Yeniden yazın, Google'ın yeniden taraması ve yeniden sunması için iki ila dört hafta bekleyin ve TO'yu tekrar karşılaştırın. 10. sıranın altındaki değişiklikleri ölçmek daha zordur çünkü gösterim hacmi istatistiksel güven için çok düşüktür.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>160 karakteri aşmak.</strong> Snippet cümle ortasında kesilir. Önemli içeriği ilk 120'de ve tam teklifi ilk 155'te tutun.
    </p>
    <p>
      <strong>Açıklamaları ilk paragraftan otomatik oluşturmak.</strong> Gövde metninin ilk 160 karakterini alan CMS varsayılanları, asla bir CTA veya hedefli bir teklif içermeyen yavan açıklamalar üretir. Açıklamaları bilinçli olarak yazın.
    </p>
    <p>
      <strong>Bir bölümde aynı açıklamayı kullanmak.</strong> Kopyalar, sayfa başına fırsatı boşa harcar ve Search Console'da işaretlenir. Dizine eklenebilir her sayfanın benzersiz bir açıklamaya ihtiyacı vardır.
    </p>
    <p>
      <strong>Anahtar kelimeleri doldurmak.</strong> Hedef sorguyu üç veya dört kez belirtmek yeniden yazmayı tetikler ve arama yapanlara spam gibi görünür. Bir doğal bahsetme yeterlidir.
    </p>
    <p>
      <strong>Harekete geçirici mesajı atlamak.</strong> Okuyucuya ne yapması gerektiğini söylemeden üç nokta veya nokta ile biten açıklamalar, TO'yu masada bırakır. Her açıklamayı belirli bir eylemle bitirin.
    </p>
    <p>
      <strong>Google'ın açıklamanızı kullanacağını varsaymak.</strong> Google çoğu açıklamayı yeniden yazar. Olası sorgularla eşleşen ve doğal bir snippet gibi okunan bir tane yazın, böylece yeniden yazma şansını azaltın.
    </p>
    <p>
      <strong>Çift tırnak kullanmak.</strong> Google, açıklamalardan çift tırnak işaretlerini kaldırır. Bunlardan kaçınmak için tek tırnak kullanın veya ifadeyi yeniden düzenleyin.
    </p>

    <h2>Rakamları kontrol edin</h2>
    <p>
      Karakter sayısını, piksel genişliğini ve SERP önizlemesini{" "}
      <a href="/tools/meta-description-length-checker">meta açıklama uzunluğu denetleyicisi</a> ile kontrol edin.
      Başlık ve açıklamanın tek bir snippet olarak birlikte çalışması için{" "}
      <a href="/tools/title-tag-length-checker">başlık etiketi uzunluğu denetleyicisi</a> ve kombinasyonun hem masaüstünde hem de mobilde arama sonuçlarında tam olarak nasıl görüneceğini görmek için{" "}
      <a href="/tools/serp-snippet-preview">SERP snippet önizlemesi</a> ile birlikte kullanın.
    </p>
  </>
);