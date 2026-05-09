import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir gün batımı fotoğrafı, bir spor ayakkabı düz çekimi veya bir rakibin açılış sayfası buldunuz ve tam renklerini istiyorsunuz. Bir ekran görüntüsünden hex değerlerini gözle tahmin etmek yavaştır ve genellikle açıklıkta 10-15 puan sapar. Bir renk çıkarıcı, pikselleri doğrudan okur ve saniyeler içinde kullanılabilir bir palet sunar. Bu kılavuz, çıkarma işleminin nasıl çalıştığını, çıktıya ne zaman güveneceğinizi ve ne zaman geçersiz kılacağınızı kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Baskın renk ve tam palet</h2>
    <p>
      İnsanların karıştırdığı iki farklı iş. <strong>Baskın renk</strong> tek bir hex değeridir — bir ürün fotoğrafıyla eşleşen bir kahraman arka planı ayarlamak veya görsele uyan bir kart vurgusu seçmek için kullanışlıdır. <strong>Tam palet</strong> genellikle 5-8 renktir — ruh hali panoları, marka sistemleri ve bir fotoğrafın başlık yerleşimi için yeterli kontrasta sahip olup olmadığını kontrol etmek için kullanışlıdır.
    </p>
    <p>
      Gerçekten baskın bir renk istediğinizde bir palet isterseniz, doymuş bir vurgu olması gereken bir arka planı ortalamaya tabi tutarsınız. Başlamadan önce hangisine ihtiyacınız olduğuna karar verin.
    </p>

    <h2>Otomatik çıkarıcılar aslında nasıl çalışır</h2>
    <p>
      Perde arkasında, çoğu çıkarıcı <a href="/learn/quantization">niceleme</a> çalıştırır — genellikle k-means veya bir medyan-kesme algoritması. Görüntü örneklenir (genellikle hız için önce küçültülür), her piksel RGB uzayında çizilir ve algoritma N küme merkezi bulur. Her küme merkezi, kovasına kaç piksel düştüğüne göre ağırlıklandırılmış bir palet rengi haline gelir.
    </p>
    <p>
      Bu, çıktının "bir tasarımcının seçeceği renkler" olmadığı anlamına gelir. "En büyük piksel kümelerinin istatistiksel ortalama rengidir." Çoğu zaman bunlar aynı şeydir. Bazen değildir.
    </p>

    <h2>Ne zaman güvenmeli, ne zaman gözle kontrol etmeli</h2>
    <p>
      Temiz ürün çekimlerinde, düz illüstrasyonlarda ve net bir konusu olan fotoğraflarda çıkarıcıya güvenin. Baskın renk beklediğiniz gibi olacaktır.
    </p>
    <p>
      Ağır gradyanlar, ten tonları veya karışık aydınlatma içeren görsellerde bunu geçersiz kılın. Bir gün batımı fotoğrafı size arayüzünüzde aynı görünen altı bulanık turuncu verecektir. Doygunlukta en uzak olan ikisini seçin ve gerisini atın. Benzer şekilde, çok fazla gökyüzü olan fotoğraflar, konu kırmızı bir araba olsa bile baskın olarak maviyi döndürecektir.
    </p>

    <h2>Kullanım durumu: kahraman arka planlarını ürün fotoğraflarıyla eşleştirme</h2>
    <p>
      Ürün görselini <a href="/tools/color-extractor">renk çıkarıcımıza</a> bırakın, paletten ikinci veya üçüncü rengi alın (ilki değil — bu genellikle fotoğrafın arka planıdır) ve kahraman arka planınız olarak kullanın. Görsel, sayfanın üzerinde yüzmek yerine görsel olarak sayfaya oturur. Beş dakikalık ince ayar, cilada büyük kazanç.
    </p>

    <h2>Kullanım durumu: ruh hali panoları ve marka sistemleri</h2>
    <p>
      İstediğiniz marka gibi hissettiren 5-10 referans görseli toplayın. Her birinden bir palet çıkarın, ardından çapraz referans yapın. Birden çok görselde görünen renkler marka yönünüzdür. Yalnızca bir kez görünen renkler gürültüdür — onları kesin.
    </p>

    <h2>Kullanım durumu: logo kontrast kontrolleri</h2>
    <p>
      Logo yerleştirmeyi planladığınız bir fotoğrafı çıkarıcıya bırakın. Tüm baskın renkler %40-70 açıklık aralığındaysa, logonuz kaybolacaktır. Görseli bir katmanla koyulaştırın, logoyu daha net kontrasta sahip bir köşeye taşıyın veya farklı bir fotoğraf seçin. Hex değerlerine sahip olduğunuzda, HSL elde etmek için bunları{" "}
      <a href="/tools/color-converter">bir renk dönüştürücüden</a> geçirin — kontrast hata ayıklarken açıklık, RGB'den daha kolay anlaşılır.
    </p>

    <h2>Neredeyse her zaman yapacağınız iki ayar</h2>
    <p>
      İlk olarak, çıkarılan değerlerde doygunluğu %5-10 artırın. Gerçek fotoğraflar griye doğru ortalanır ve ham çıktı ekranda soluk görünme eğilimindedir. İkinci olarak, gövde metni için en koyu rengi %10-15 daha koyuya kaydırın — çıkarılan "koyu" renkler genellikle beyaz arka planlarda WCAG AA kontrastını karşılamak için hala çok açıktır. İki küçük ayar, çıkarılan bir paleti "yeterince yakın"dan "gönderilmeye hazır"a dönüştürür.
    </p>
  </>
);