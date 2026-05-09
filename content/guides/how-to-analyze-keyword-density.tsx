import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Anahtar kelime yoğunluğu, bir sayfadaki toplam kelime sayısına oranla hedef terimin geçme yüzdesidir. Bir zamanlar SEO'da en çok tartışılan metrik, Google'ın 2003 sıralama algoritmasının bütün bölümlerinin üzerine inşa edildiği eksendi. On yıl süren kasıtlı doldurma cezaları, Panda güncellemesi, BERT ve anlamsal aramaya geçiş, yoğunluğu doğrudan sıralama gücünün çoğundan arındırdı. Ancak tanısal bir araç olarak hâlâ kullanışlıdır: bir sayfanın gerçekten ne hakkında olduğunu düşündüğünüz konu hakkında olup olmadığını, birincil amacı yeterince karşılayıp karşılamadığınızı veya dilin gereksiz doldurmaya kayıp kaymadığını size söyler. Bu kılavuz, temel hesaplamayı, tarihsel ve modern SEO kullanımını, aşırı kullanım cezalarını, kök bulma ve varyasyon yönetimini, "doğal sıklığın" ne anlama geldiğini ve LSI anahtar kelimelerinin aslında nereye oturduğunu kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Temel hesaplama</h2>
    <p>
      Anahtar kelime yoğunluğu (anahtar kelimenin geçme sayısı / toplam kelime sayısı) × 100'dür. "E-posta pazarlaması"ndan 15 kez bahseden 1.000 kelimelik bir makalenin tam eşleşme yoğunluğu yüzde 1,5'tir. Tek kelimelik bir anahtar kelime için sayma basittir. Çok kelimeli ifadelerde pay, ifadenin geçme sayısı olarak kalır ve payda toplam kelime sayısı olarak kalır; bu, yoğunluğu seyreltir çünkü iki kelimelik bir ifadenin bir geçişi payda bir olarak sayılır ancak paydada iki yuva tüketir. Çoğu yoğunluk aracı, ayarlama yapmadan kelime sayısı üzerinden ifade sayısını rapor eder; bu gelenektir.
    </p>
    <pre>{`Metin:     1.000 kelime toplam
İfade:   "e-posta pazarlaması" 15 kez geçiyor

Yoğunluk = (15 / 1000) * 100 = %1,5`}</pre>

    <h2>Tarihsel SEO: yoğunluğun anlamı</h2>
    <p>
      Aramanın ilk on yılında, anahtar kelime yoğunluğu güçlü bir sıralama sinyaliydi. Hedef terim için yoğunluğu yüzde 2-5 aralığında olan sayfalar, terimden yalnızca geçerken bahseden sayfaları geride bıraktı. Bu, on yıl süren aşırı optimizasyona yol açtı: hedef anahtar kelimelerle doldurulmuş ince sayfalar, tek terimler için sıralamak üzere oluşturulmuş giriş sayfaları ve yalnızca bir yoğunluk eşiğine ulaşmak için tasarlanmış altbilgi metni bahçeleri. İlk arama motorları yüksek yoğunluğu olumlu bir sinyal olarak ele aldı çünkü alternatif daha kötüydü—terimi tamamen görmezden gelmek.
    </p>

    <h2>Modern SEO: yoğunluğun şimdiki anlamı</h2>
    <p>
      Google'ın 2011 Panda güncellemesi, 2013 Hummingbird yeniden yazımı ve 2019 BERT ile 2022 MUM tarzı dil modelleri, sıralamayı kelime sıklığı eşleştirmesinden anlamsal anlayışa doğru kaydırdı. BERT, "koşu ayakkabıları" hakkındaki bir sayfa ile "koşucular için atletik ayakkabılar" hakkındaki bir sayfanın, aynı anahtar kelimelere sahip olmasalar bile aynı konu hakkında olduğunu söyleyebilir. Yoğunluk artık eskisi gibi doğrudan bir kaldıraç değil. Ancak yine de kullanışlı bir tanı aracıdır: "e-posta pazarlaması" hakkındaki sayfanız bu ifadeyi hiç kullanmıyorsa veya yalnızca başlıkta kullanıyorsa, sayfa düşündüğünüzden daha az odaklı olabilir.
    </p>

    <h2>Doldurma cezaları</h2>
    <p>
      Google'ın spam politikaları, anahtar kelime doldurmayı açıkça bir ihlal olarak listeler. Tespit, belirli bir yoğunluk eşiğine bağlı değildir—doğal yazı yerine mekanik yerleştirmeyi öneren kalıpları arar. Anahtar kelimeyi her cümlede tekrarlamak, alakasız yerlere eklemek veya altbilgi metnini ve alt özniteliklerini varyantlarla doldurmak, tümü işaretleyicileri tetikler. Doğal yazılmış yüzde 5 yoğunluğa sahip bir sayfa sorunsuz sıralanabilir; robot tarafından oluşturulmuş dolgu gibi okunan yüzde 2 yoğunluğa sahip bir sayfa bastırılabilir. Modern kural: okuyucular için yazın, yoğunluğun onu takip etmesine izin verin.
    </p>

    <h2>Doğal sıklık</h2>
    <p>
      Doğal sıklık, bilgili bir yazarın yoğunluğu hiç düşünmeden konuyu ele aldığında elde ettiğiniz yoğunluktur. Konuya göre değişir. Belirli bir ürünle ilgili teknik içerik, ürün adından sıkça bahseder—yüzde 2 ila 3 yaygın ve normaldir. Bir kategori hakkındaki daha geniş bir makale, yazar zamirler, eş anlamlılar ve kısmi referanslar kullandığı için kategori teriminden daha az bahseder. Bir terim için hedef yoğunluğunuz, bir insan yazarın o konuda doğal olarak üreteceğinin çok üstünde veya altındaysa, yoğunluk yazıda bir sorun olduğunu işaret ediyordur.
    </p>

    <h2>Kök bulma ve kısmi eşleşmeler</h2>
    <p>
      Yalnızca tam eşleşmeleri sayan bir yoğunluk aracı, bir konunun gerçek önemini eksik rapor eder. "E-posta pazarlaması", "e-posta pazarlamacısı" ve "pazarlama e-postaları"nın tümü, modern bir arama motoruna aynı konuyu işaret eder. Kök bulma, çekimli biçimleri (pazarlama, pazarlamacı, pazarlar) ortak bir köke indirger. Lemmatizasyon daha katıdır ve kelime biçimlerini sözlük temel sözcüklerine eşler. Çoğu yoğunluk aracı varsayılan olarak tam eşleşme ve bir geçiş olarak kök bulmalı eşleşme sunar. SEO analizi için, kök bulmalı sayılar genellikle daha dürüsttür.
    </p>

    <h2>LSI ve anlamsal terimler</h2>
    <p>
      "LSI anahtar kelimeleri", 1990'ların bir bilgi erişim tekniği olan Latent Semantic Indexing'den gevşek bir şekilde ödünç alınmış bir SEO terimidir. Google, adının SEO içeriğindeki popülaritesine rağmen, üretim sıralamasında gerçek LSI kullanmaz. Google'ın kullandığı şey, "kameralar" hakkındaki bir sayfanın muhtemelen "lens", "deklanşör", "diyafram" ve "pozlama"dan bahsetmesi gerektiğini tanıyan <a href="/learn/transformer">transformer</a> tabanlı dil modelleri aracılığıyla konu modellemesidir. Bunlara SEO araçlarında genellikle LSI anahtar kelimeleri denir, ancak daha iyi bir tanım anlamsal olarak ilişkili terimler veya birlikte oluşan konu terimleridir. Sayfanızın rakiplerinizin kapsadığı terimleri kapsadığını kontrol etmek, birincil anahtar kelimede bir yoğunluk eşiğine ulaşmaktan daha kullanışlıdır.
    </p>

    <h2>Rakip yoğunluk analizi</h2>
    <p>
      Yoğunluğunuzu optimize etmeden önce, en üst sıradaki rakiplerin ne kullandığını ölçün. Hedef sorgunuz için ilk beş organik sonucu alın, gezinme ve şablon metinleri çıkarın ve her biri için yoğunluğu hesaplayın. Medyan, Google'ın bu sorgu için uygun gördüğü yoğunluğu söyler. Sayfanız bu aralığın çok dışındaysa (çok daha yüksek veya çok daha düşük), içerik muhtemelen bilgi yoğunluğu veya alaka düzeyi açısından aykırı bir değerdir. Aşmaya çalışmadan önce rekabetçi taban çizgisini eşleştirin.
    </p>

    <h2>Belge bölgesine göre yoğunluk</h2>
    <p>
      Kelime konumu, ham yoğunluktan daha önemlidir. Başlık, H1, ilk paragraf, URL ve ilk görsel alt özniteliğindeki bir anahtar kelime, aynı anahtar kelimenin bir kenar çubuğunda on kez tekrarlanmasından daha güçlü bir konu sinyali verir. Modern yoğunluk analizi, farklı bölgeleri farklı şekilde ağırlıklandırmalı veya en azından bölge başına yoğunluğu (başlık, H1, giriş, gövde, altbilgi) rapor etmelidir. Doğru yoğunluğa sahip ancak yanlış yerlerde olan odaksız bir sayfa, önemli yerlerde daha düşük yoğunluğa sahip odaklı bir sayfadan daha kötü performans gösterir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Sabit bir yoğunluk sayısını hedeflemek.</strong> "Tam olarak yüzde 2 istiyorum" ifadesi, anahtar kelimenin mekanik olarak yerleştirildiği yapmacık yazılara yol açar. Okuyucu için yazın ve yoğunluğu tanısal bir araç olarak ölçün.
    </p>
    <p>
      <strong>İfade varyasyonlarını göz ardı etmek.</strong> Yalnızca tam eşleşmeleri saymak, "e-posta pazarlaması"nı ölçerken "pazarlama e-postaları"nı kaçırır. Dürüst bir tablo için kök bulmalı veya lemmatize edilmiş sayımlar kullanın.
    </p>
    <p>
      <strong>Sayfadaki her şeyi saymak.</strong> Gezinme, altbilgi, kenar çubuğu ve şablon metin, yoğunluk ölçümünü seyreltir veya şişirir. Bir arama motorunun yapacağı gibi yalnızca ana içerik alanını analiz edin.
    </p>
    <p>
      <strong>Alt metni ve meta etiketleri doldurmak.</strong> Anahtar kelime varyantlarıyla dolu görsel alt öznitelikleri ve meta açıklamaları, hâlâ cezaları tetikleyen eski bir kalıptır. Görseli tanımlayan alt metin yazın; sayfayı tanımlayan açıklamalar yazın.
    </p>
    <p>
      <strong>Çapa metnini göz ardı etmek.</strong> İç ve gelen çapa metni, arama motorlarının bir sayfayı konularla nasıl ilişkilendirdiğine katkıda bulunur. Aynı tam ifadenin ağır çapa metni tekrarı, manipülasyon sinyalidir.
    </p>
    <p>
      <strong>Düzenlemelerden sonra ölçmeyi unutmak.</strong> Tek bir bölüm eklemek veya girişi yeniden yazmak yoğunluğu yarım puan kaydırabilir. Sayfanın hâlâ amaçladığınız yere odaklandığını doğrulamak için önemli düzenlemelerden sonra yeniden ölçün.
    </p>
    <p>
      <strong>LSI anahtar kelimelerini sihirli olarak görmek.</strong> İlgili terimlerin bir listesini eklemek, konuyu kapsamlı bir şekilde yazmanın yerini tutmaz. İlgili terimler, bir araç olması gerektiğini söylediği için değil, konuyu ele aldığınız için görünmelidir.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Anahtar kelime yoğunluğunu, ifade sıklığını ve terim dağılımını{" "}
      <a href="/tools/keyword-density-checker">anahtar kelime yoğunluğu denetleyicisi</a> ile ölçün. Yoğunluğu optimize etmenin metni okumayı zorlaştırmadığından emin olmak için{" "}
      <a href="/tools/readability-score-checker">okunabilirlik puanı denetleyicisi</a> ile ve anahtar terimlerin arama sonuçlarında gösterilen snippet'e girdiğini onaylamak için{" "}
      <a href="/tools/meta-description-length-checker">meta açıklama uzunluğu denetleyicisi</a> ile birlikte kullanın.
    </p>
  </>
);