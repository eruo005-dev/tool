import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir görselden palet çıkarmak sihir gibi görünse de aslında kümelemedir.
      Milyonlarca pikselden oluşan bir fotoğrafı alıp, bunları bir avuç temsili renge indirger ve sonucu bir dizi hex kodu olarak çıktılarsınız.
      Tasarımcılar bunu moodboard'lardan palet türetmek için, markalar rakip varlıklarını tersine mühendislikle analiz etmek için ve geliştiriciler UI vurgularını yüklenen içerikle eşleştirmek için kullanır.
      Bu rehber, önemli olan iki algoritmayı (k-means ve median-cut), "baskın" ile "ortalama" arasındaki farkı, logolardan temiz paletlerin nasıl çıkarılacağını ve naif çıkarımları dağınık gösteren tuzakları (JPEG artefaktları, şeffaf PNG'ler, neredeyse aynı renkler) kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>"Renk çıkarmak" aslında ne anlama geliyor</h2>
    <p>
      Bir görsel, 3B renk uzayında (R, G, B) bir nokta bulutudur. N renkten oluşan bir palet çıkarmak, bu bulutu en iyi temsil eden N küme merkezini bulma görevidir.
      Farklı algoritmalar "en iyi"yi farklı tanımlar; bu yüzden iki araç aynı fotoğraftan size iki farklı palet verebilir.
    </p>
    <p>
      Tüm çıkarıcılar şunun bir versiyonunu yapar: görseli alt örnekle, bir renk uzayı seç, N merkez noktası seç, yinele. Kalite çıtası "çıktının görselin hissini yansıtıp yansıtmadığı"dır.
    </p>

    <h2>K-means kümeleme</h2>
    <p>
      İşe yarar algoritma. Rastgele N merkez seç, her pikseli en yakın merkeze ata, merkezleri atanan piksellerin ortalaması olarak yeniden hesapla, sabitlenene kadar tekrarla.
    </p>
    <pre>{`1. N merkez noktasını rastgele başlat
2. her piksel için: en yakın merkeze ata
3. her merkezi = piksellerinin ortalaması olarak güncelle
4. hareket < epsilon olana kadar 2-3'ü tekrarla`}</pre>
    <p>
      <strong>Artıları:</strong> basit, öngörülebilir, size tam olarak N renk verir.{" "}
      <strong>Eksileri:</strong> başlangıç tohumlarına duyarlıdır, küçük ama önemli renkleri (çoğunlukla mavi bir görselin içindeki bir marka kırmızısı) birleştirebilir ve ham RGB'deki mesafeler insan algısıyla uyuşmaz.
    </p>

    <h2>Median-cut</h2>
    <p>
      GIF ve PNG palet oluşturucularının kullandığı algoritma. Renk uzayını yinelemeli olarak böler: en geniş aralığa sahip kanalı bul, medyanından böl, N kutu elde edene kadar her yarıda tekrarla.
    </p>
    <pre>{`kutu = tüm pikseller
kutu sayısı < N iken:
  en büyük kanal aralığına sahip kutuyu seç
  o kanalın medyanından böl
çıktı = her son kutunun ortalama rengi`}</pre>
    <p>
      <strong>Artıları:</strong> deterministiktir, aykırı değerleri korumada iyidir, görsel-<a href="/learn/quantization">niceleme</a> görevleri için standarttır. <strong>Eksileri:</strong> görsel dar dağılımlara sahipse size tuhaf şekilde benzer komşular verebilir.
    </p>

    <h2>Baskın ve ortalama</h2>
    <p>
      Bunlar iki farklı sorudur:
    </p>
    <p>
      <strong>Baskın renk</strong> = en yaygın renk (en büyük küme). Bir gün batımı fotoğrafı için baskın renk, baskın bulut/gökyüzü rengidir, ağırlıklı bir karışım değil.
    </p>
    <p>
      <strong>Ortalama renk</strong> = tüm piksellerin ortalaması. Kırmızı ve mavi bir görsel için ortalama, çamur rengi bir mordur &mdash; görselde aslında bulunmayan bir renk.
    </p>
    <p>
      Tek bir temsili vurgu seçerken baskın rengi kullanın. Ortalama genellikle yanlıştır; renkli şeyler için kirli kahverengiler üretme eğilimindedir.
    </p>

    <h2>Algısal olarak tekdüze renk uzayları</h2>
    <p>
      Ham RGB'de kümeleme, mesafelerin gözünüzün gördüğüyle eşleşmediği anlamına gelir. Neredeyse aynı görünen iki mavi, RGB'de 40 birim uzakta olabilirken, koyu yeşil ve açık sarı sadece 30 birim uzaktadır. Daha iyi sonuçlar Lab, OKLab veya HSL'den gelir.
    </p>
    <pre>{`RGB:  hızlı, yanlış (algıyla eşleşmez)
HSL:  iyi, sezgisel, parlaklıkta zayıf
Lab:  algısal olarak tekdüze, biraz yavaş
OKLab: daha yeni, algısal olarak mükemmel, hızlı`}</pre>
    <p>
      Çıktı paletiniz neredeyse aynı renklere sahipse, çıkarıcı muhtemelen RGB'de kümeleme yapıyordur. Araç değiştirin veya önce Lab/OKLab'a dönüştürün.
    </p>

    <h2>Bir logodan marka renkleri çıkarma</h2>
    <p>
      Logolar özeldir: genellikle şeffaf veya beyaz arka planlı 2&ndash;4 keskin, düz renge sahiptirler. Çıkarma kuralları:
    </p>
    <ul>
      <li>Saf beyaz pikselleri yoksay (genellikle arka plandır).</li>
      <li>Neredeyse şeffaf pikselleri yoksay (işleme artefaktları).</li>
      <li>Birbirine 5 birimden daha yakın renkleri birleştir.</li>
      <li>En fazla 3&ndash;5 renk döndür &mdash; marka paletleri küçüktür.</li>
    </ul>
    <p>
      Logonuz bir JPEG ise, sıkıştırma artefaktları çekersiniz: kenarlarda haleler, ince bantlanma. Renk şartnamesi için çıkarmadan önce SVG'ye dönüştürün veya Figma'da yeniden çizin.
    </p>

    <h2>Fotoğraflardan palet çıkarma</h2>
    <p>
      Fotoğraflar gradyanlara sahiptir. Milyonlarca benzersiz renk. Çıkarma seçenekleri:
    </p>
    <p>
      <strong>Kaç renk?</strong> Beş, insanların okuyabileceği bir palet için ideal noktadır. Sekiz, ton çeşitliliği sağlar. Onun üzerinde, kullanıcılar bazı renk örneklerini ayırt edemez.
    </p>
    <p>
      <strong>Doygunluk filtresi?</strong> Kümelemeden önce düşük doygunluktaki pikselleri atmak, "renkli" renkleri vurgular ve bej dolu bir paletten kaçınır. Moodboard'lar için kullanışlıdır.
    </p>
    <p>
      <strong>İşlemeden önce yeniden boyutlandırın.</strong> 4K bir fotoğraf 8M piksele sahiptir; 200 piksel genişliğe yeniden boyutlandırmak 50K pikseldir ve %99 oranında doğrudur. Her zaman önce alt örnekleyin.
    </p>

    <h2>"Çamurlu orta" sorunu</h2>
    <p>
      Çok sayıda cilt tonuna sahip bir fotoğrafta k-means, dar bir bronzluk aralığı çekme eğilimindedir &mdash; hepsi teknik olarak doğru, hepsi görsel olarak işe yaramaz. Azaltmalar:
    </p>
    <p>
      Daha fazla merkez (örneğin 16) kümeleyin, ardından en yaygın 5'i tutun. Bu "fazla çıkar ve yinelenenleri kaldır" hilesi güvenilir bir şekilde ilginç paletler üretir.
    </p>
    <p>
      Kümelemeden önce pikselleri doygunluğa göre ağırlıklandırın, böylece canlı renkler nötr renklerden daha fazla etkiye sahip olur.
    </p>

    <h2>Şeffaf PNG'ler</h2>
    <p>
      Alfa kanalını atlarsanız, tamamen şeffaf pikseller, görselin şeffaf alanlar için tanımlanmamış RGB'sine bağlı olan "renklere" katkıda bulunur &mdash; genellikle keyfi. Kümelemeden önce her zaman pikselleri alfa &gt; %50'ye göre filtreleyin.
    </p>

    <h2>Çıktı formatları</h2>
    <p>
      Hex, geliştiricilerin istediğidir; RGB, bazı tasarım araçlarının istediğidir; HSL, CSS'nin sevdiğidir. İyi bir çıkarma aracı, her rengin görseldeki yüzdesiyle birlikte her üçünü de çıktılar.
    </p>
    <pre>{`#4a6fa5  RGB(74,111,165)    HSL(215,36%,47%)   38%
#c8a862  RGB(200,168,98)    HSL(41,51%,58%)    24%
#2e2b29  RGB(46,43,41)      HSL(24,6%,17%)     18%
#e4e1d7  RGB(228,225,215)   HSL(46,17%,87%)    12%
#8c3a2f  RGB(140,58,47)     HSL(7,50%,37%)     8%`}</pre>

    <h2>Tekrarlanabilirlik</h2>
    <p>
      Rastgele tohumlarla k-means deterministik değildir &mdash; iki kez çalıştırın, biraz farklı paletler elde edin. İyi araçlar, kararlı çıktı için PRNG'yi tohumlar veya yapısı gereği deterministik olan median-cut'ı kullanır. Paletleri bir tasarım hattının parçası olarak çıkarıyorsanız, tekrarlanabilirlik önemlidir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Ortalama renge güvenmek.</strong> Neredeyse hiçbir zaman istediğiniz şey değildir. Baskın veya en iyi N küme merkezini kullanın.
    </p>
    <p>
      <strong>Sıkıştırılmış bir JPEG'den çıkarmak.</strong> JPEG renk alt örneklemesi ve blok artefaktları, orijinalde gerçekten olmayan renkler ekler. Mümkün olduğunda PNG veya ham kaynaktan çalışın.
    </p>
    <p>
      <strong>Alfa kanalını atlamak.</strong> Filtrelemezseniz şeffaf PNG'ler hayalet renkler ekler.
    </p>
    <p>
      <strong>RGB'de kümeleyip paletin neden yanlış göründüğünü merak etmek.</strong>{" "}
      Lab veya OKLab, insan görüşüyle çok daha iyi uyum sağlar.
    </p>
    <p>
      <strong>20 renk istemek.</strong> İnsan gözü yalnızca 5&ndash;8 palet girişini güvenilir bir şekilde ayırt edebilir. Daha fazlası gürültüdür.
    </p>
    <p>
      <strong>Alt örneklememek.</strong> 24MP'lik bir fotoğraftan tam çözünürlükte çıkarma yapmak israftır ve doğruluğu artırmaz.
    </p>
    <p>
      <strong>Sıklığa göre sıralamayı unutmak.</strong> Estetik olarak sıralanmış bir palet, baskın rengi gizleyebilir. Kullanıcılar hangisinin ana renk olduğunu bilsin diye piksel sayısına göre sıralayın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Anlık bir palet için bir görseli{" "}
      <a href="/tools/color-extractor">renk çıkarıcıya</a> sürükleyin; hex, RGB ve HSL ile birlikte gelsin. Tek bir rengi{" "}
      <a href="/tools/color-picker">renk seçici</a> ile ince ayar yapın ve tasarım aracınızın gerçekten anladığı bir formatta değere ihtiyacınız olduğunda herhangi bir renk örneğini{" "}
      <a href="/tools/color-converter">renk dönüştürücü</a> ile formatlar arasında dönüştürün.
    </p>
  </>
);