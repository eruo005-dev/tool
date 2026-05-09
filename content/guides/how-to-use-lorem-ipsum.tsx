import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Lorem ipsum, tasarım maketlerinde, CMS şablonlarında ve dokunulmamış WordPress sayfalarında muhtemelen binlerce kez gördüğünüz yer tutucu metindir. Çoğunlukla öyle olduğu için anlamsız Latince gibi görünür&mdash;MÖ 45'te Cicero'nun <em>De Finibus Bonorum et Malorum</em> adlı eserinin, 1500'lerde bilinmeyen bir dizgici tarafından, okuyucuları kelimeleri okumaya teşvik etmeden yazı tiplerini göstermek için yeniden düzenlenmiş karışık parçalarıdır. Doğru kullanıldığında, tasarımcıların ve geliştiricilerin içerik tarafından dikkatleri dağılmadan düzen ve tipografiyi göstermelerini sağlar. Yanlış kullanıldığında, üretime geçer ve ekibi utandırır. Bu kılavuz, geçmişi, sahte Latince'nin maketler için neden gerçek içerikten daha iyi olduğunu, ne zaman kullanmayı bırakıp gerçek metne geçileceğini, paragraf ve kelime uzunluğu hedeflerini ve belirli bağlamlara uyan Bacon Ipsum ve Hipster Ipsum gibi alternatifleri kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Nereden geldi</h2>
    <p>
      Klasik lorem ipsum pasajı <em> Lorem ipsum dolor sit amet, consectetur adipiscing elit</em> ile başlar. Hampden-Sydney Koleji'nden Latin bilgini Richard McClintock, bu ifadeyi 1982'de Cicero'nun MÖ 45'te yazdığı etik incelemesinin 1.10.32 ve 1.10.33 bölümlerine kadar takip etti. İlk kez karıştıran dizgici bilinmiyor, ancak metin 1960'larda Letraset kuru transfer harf sayfalarında ve ardından 1980'lerde Aldus PageMaker ile birlikte gelen şablonlarda görülüyor ve bu şekilde dijital tasarım sözlüğüne girdi. Bugün Figma'dan Microsoft Word'e kadar her şeyde varsayılan yer tutucudur.
    </p>

    <h2>Sahte Latince neden gerçek içerikten daha iyidir</h2>
    <p>
      Yer tutucu metnin tüm amacı, metin olmadan metin gibi görünmesidir. Gerçek İngilizce metin, inceleyen kişinin dikkatini anlama çeker&mdash;kelimeleri okurlar, ifade hakkında tartışırlar ve yakalamalarını istediğiniz düzen sorunlarını kaçırırlar. Lorem ipsum, kabaca İngilizce ile aynı harf dağılımına sahiptir, satır uzunlukları, paragraf ağırlığı ve düzensiz kenar boşluğu şeklinin doğal görünmesi için yeterlidir, ancak okuyucunun gözü ona takılmadan seker. Tipografi ve boşlukların asıl inceleme konusu olduğu maketler, tel çerçeveler ve bileşen kütüphaneleri için ideal nokta budur.
    </p>

    <h2>Kullanım durumuna göre uzunluk hedefleri</h2>
    <p>
      Gerçek içeriğin ne olacağına uygun bir uzunluk seçin. Başlıklar 4 ila 10 kelime, alt başlıklar 8 ila 15, gövde paragrafları 40 ila 80, giriş paragrafları 50 ila 100, uzun metinli makale paragrafları 80 ila 150 kelimedir. Dört adet aynı 200 kelimelik blokla doldurulmuş bir blog şablonu, herkesi gerçek düzenin nasıl nefes alacağı konusunda yanıltacaktır&mdash;kısa paragrafları uzun olanların yanına koyun, tek cümlelik paragrafları çok cümleli olanlarla karıştırın ve yer tutucunun gerçek yazının ritmini yansıttığından emin olun.
    </p>
    <pre>{`Başlık:      3-8 kelime
Alt Başlık:  8-15 kelime
Giriş:       30-60 kelime
Gövde:       50-120 kelime/paragraf
Altyazı:     5-15 kelime
Liste Öğesi: 3-10 kelime`}</pre>

    <h2>Paragraflar, kelimeler ve karakterler</h2>
    <p>
      Lorem ipsum oluşturucuları, paragraf sayısına, kelime sayısına, cümle sayısına veya karakter sayısına göre istekleri kabul eder. Paragraf sayısı, metin blokları için en yaygın olanıdır. Kelime sayısı, bir başlık veya <a href="/learn/meta-description">meta açıklama</a> gibi belirli bir genişliğe sığdırmanız gerektiğinde daha iyidir. Karakter sayısı, 20 karakterlik bir dizenin 40 karakterlik bir dizeden çok farklı bir şekilde yerleştiği düğme etiketleri, sekme başlıkları ve araç ipuçları gibi sıkı UI öğeleri için önemlidir. Kesme veya üç nokta davranışını test ettiğiniz her zaman karakter düzeyinde oluşturma kullanın.
    </p>

    <h2>Gerçek içeriğe ne zaman geçilmeli</h2>
    <p>
      Lorem ipsum, tel çerçeveleme, bileşen kütüphanesi çalışmaları ve erken düzen incelemesi sırasında uygundur. İçerik hiyerarşisini, tonu, sesi veya okunabilirliği incelediğiniz anda gerçek içeriğe geçin. Lorem ipsum'u inceleyen paydaşlar, giriş paragrafının çok uzun olup olmadığını veya harekete geçirici mesajın zorlayıcı olup olmadığını size söyleyemez&mdash;tipografiyi inceliyorlardır. Değiştirmek için en son güvenli nokta, herhangi bir kullanıcı testinden öncedir, çünkü test katılımcıları sahte Latince'ye odaklanacak ve kullanılamaz geri bildirim üretecektir. İyi bir kural, &ldquo;ilk dahili inceleme turundan sonra lorem ipsum yok&rdquo;tur.
    </p>

    <h2>Temalı alternatifler</h2>
    <p>
      Lorem ipsum'un yanlış hissettirdiği veya biraz mizahın inceleyenlerin ilgisini canlı tutmaya yardımcı olduğu durumlar için birkaç temalı yer tutucu oluşturucu mevcuttur. Bacon Ipsum et temalı anlamsız metinler üretir (&ldquo;Bacon ipsum dolor amet short ribs spare ribs brisket&rdquo;), Hipster Ipsum Brooklyn klişelerine yaslanır, Cupcake Ipsum tatlı kelimeleri kullanır ve Corporate Ipsum &ldquo;synergize vertical workflows&rdquo; gibi jargonları bir araya getirir. Bunlar, temanın markayla eşleştiği dahili maketler ve müşteriye yönelik tasarımlar için uygundur, ancak standart lorem ipsum'dan daha fazla dikkat çekerler ve okuyucu tasarıma bakmak yerine yer tutucuya gülmeye başlarsa incelemeleri rayından çıkarabilir.
    </p>

    <h2>Özel karakterleri ve biçimlendirmeyi yönetme</h2>
    <p>
      Gerçek içerik, nokta ve virgülün ötesinde noktalama işaretleri içerir: uzun çizgiler, üç noktalar, akıllı tırnak işaretleri, kesme işaretleri, parantezler, ara sıra sayılar. Standart lorem ipsum bunların neredeyse hiçbirine sahip değildir, bu da tasarımınızın üretimde olacağından daha temiz göründüğü anlamına gelir. İyi bir oluşturucu, noktalama çeşitliliğini açmanıza veya sayılar ve URL'ler eklemenize izin verir, böylece yer tutucu tipografiyi gerçek içeriğin yapacağı gibi çalıştırır. Tasarımınız alt sarkıtlar veya üst sarkıtlar için satır yüksekliğine bağlıysa, yer tutucunun g, j, p, q, y gibi harfleri ve aksanlı büyük harfleri içerdiğinden emin olun.
    </p>

    <h2>Erişilebilirlik ve yerelleştirme</h2>
    <p>
      Lorem ipsum, çevrilmemiş Latince'dir. Ekran okuyucular onu harfi harfine okuyacak ve ses çıktısı rahatsız edici olacaktır, bu nedenle lorem ipsum'u <code>aria-hidden</code> arkasında bile olsa üretim kodunda asla bırakmayın. Latin alfabesi dışındaki diller (Arapça, Çince, Japonca, Tayca) için tasarlanmış tasarımlar için, bu alfabede eşleşen bir yer tutucu kullanın çünkü satır sonu davranışı, metin yüksekliği ve glif yoğunluğu alfabeler arasında büyük farklılık gösterir. Latin lorem ipsum'da dengeli görünen bir site, gerçek Çince veya Arapça içerik gönderildiğinde sıkışık veya gevşek görünebilir.
    </p>

    <h2>Üretime geçme hatalarına karşı koruma</h2>
    <p>
      Klasik başarısızlık şekli, yer tutucu metnin üretime ulaşmasıdır. Kod tabanınızı ve CMS çıktınızı &ldquo;lorem ipsum&rdquo; dizesi için tarayan ve herhangi birini bulursa derlemeyi başarısız kılan bir lint adımı ekleyin. Birçok ekip bunu <code>TODO</code> yorumları için de yapar. Her şablonu yükleyen ve işlenmiş HTML'de &ldquo;consectetur&rdquo; kelimesini tarayan bir lansman öncesi kontrol ekleyin. Bu iki kontrol, üretimdeki yer tutucu olaylarının neredeyse tamamını yakalar.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Üretime göndermek.</strong> Bir numaralı başarısızlık. Şaşırtıcı sayıda halka açık web sitesinde bir alt etiketinde, altbilgisinde veya üç seviye derinlikte gömülü bir sayfada lorem ipsum bulunur. Bunun için lint yapın.
    </p>
    <p>
      <strong>Her yerde aynı bloğu kullanmak.</strong> Özdeş paragraflar, düzenin gerçek içerikten daha düzenli görünmesini sağlar. Maketin gerçekçi ritmi yansıtması için değişen uzunluklarda yeni paragraflar oluşturun.
    </p>
    <p>
      <strong>Lorem ipsum ile metni incelemek.</strong> Yer tutucuyu inceleyen paydaşlar ton veya netlik hakkında geri bildirim veremez. Soruyu sormadan önce gerçek içeriğe geçin.
    </p>
    <p>
      <strong>Müşteri çalışması için temalı bir oluşturucu seçmek.</strong> Bacon Ipsum, müşteriniz onu Figma dosyasında bulup kasıtlı olup olmadığını merak edene kadar komiktir. Dışa dönük maketler için standart lorem ipsum'a bağlı kalın.
    </p>
    <p>
      <strong>Latin alfabesi dışındaki alfabeleri görmezden gelmek.</strong> Japonca bir düzendeki Latin yer tutucu, satır yüksekliklerini, satır sonlarını ve karakter yoğunluğunu yanlış temsil eder. Latin alfabesi dışındaki diller için tasarım yaparken alfabeyle eşleşen bir yer tutucu kullanın.
    </p>
    <p>
      <strong>Çok fazla veya çok az noktalama çeşitliliği.</strong> Oluşturucu size yalnızca düz noktalar veriyorsa, düzeniniz gerçeklikten daha temiz görünür. Metni egzotik noktalama işaretleriyle dolduruyorsa, düzeniniz gerçeklikten daha dağınık görünür. Orta düzeyde çeşitlilik hedefleyin.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Kelime, cümle veya paragraf sayısına göre yer tutucu metin oluşturmak için{" "}
      <a href="/tools/lorem-ipsum-generator">lorem ipsum oluşturucuyu</a> kullanın. Daha sonra gerçek metni eklediğinizde, gerçek içeriğin tasarım ritmine gerçekten uyduğunu doğrulamak için{" "}
      <a href="/tools/readability-score-checker">okunabilirlik puanı denetleyicisi</a> ve farklı şablon yuvaları için tümü büyük harf başlıklar veya başlık durumu alt başlıklar gibi varyasyonlara ihtiyacınız olduğunda{" "}
      <a href="/tools/case-converter">büyük/küçük harf dönüştürücü</a> ile birlikte kullanın.
    </p>
  </>
);