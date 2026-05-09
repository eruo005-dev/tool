import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      &ldquo;5 dakikalık okuma&rdquo; ifadesi bir makalenin başında
      sadece bir süs değildir — beklentileri belirler, tıklama oranını
      artırır ve okuyuculara başlama izni verir. Matematik basittir
      (kelime sayısının okuma hızına bölümü) ancak ayrıntılar önemlidir:
      hangi okuma hızı, kelimeler nasıl sayılır, görseller ve kod blokları
      için nasıl ayarlama yapılır ve ne zaman yuvarlanır. Bu kılavuz,
      Medium, Substack ve New York Times gibi yayıncıların okuma süresini
      nasıl hesapladığını, okuma hızı ortalamalarının ardındaki bilimi ve
      karma içeriğin doğru şekilde nasıl ele alınacağını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Temel formül</h2>
    <p>
      <strong>Okuma süresi = kelime sayısı ÷ dakikadaki kelime sayısı</strong>
    </p>
    <p>
      Teknik olmayan içerik okuyan tipik bir yetişkin, dakikada ~240
      kelime okur. Akademik çalışmalar, anlayarak okuyan (hızlı okuma veya
      göz atma değil) yetişkinler için 200-300 KDS aralığında
      yoğunlaşır.
    </p>
    <p>
      <strong>Medium, 265 KDS kullanır.</strong>
    </p>
    <p>
      <strong>New York Times, 240 KDS kullanır.</strong>
    </p>
    <p>
      <strong>Akademik araştırma (Brysbaert 2019):</strong> Sessiz okuma
      238 KDS, sesli okuma 183 KDS.
    </p>
    <p>
      Birini seçin, tutarlı kullanın. 240 KDS güvenli orta yoldur.
    </p>

    <h2>Kelime olarak ne sayılır</h2>
    <p>
      En basit tanım: boşlukla ayrılmış belirteçler.
    </p>
    <p>
      <code>&quot;hello world foo&quot;.split(/\s+/).filter(Boolean).length</code>
      = 3.
    </p>
    <p>
      <strong>Uç durumlar:</strong>
    </p>
    <p>
      Tireli kelimeler: &ldquo;uzun-vadeli&rdquo; — 1 mi yoksa 2 mi
      sayılır? Çoğu sayaç <code>\s+</code> ile böler, bu nedenle 1'dir. Her
      iki şekilde de sorun yok; fazla düşünmeyin.
    </p>
    <p>
      Kısaltmalar: &ldquo;yapma&rdquo; = 1 kelime.
    </p>
    <p>
      Sayılar, noktalama işaretleri, URL'ler: boşluklarla çevriliyse her biri
      bir kelime sayılır.
    </p>
    <p>
      <strong>Yapmayın</strong> karakterleri 5'e bölerek saymayın
      (eski daktilo standardı) — karışık kelime uzunluklarına sahip modern
      düzyazı için daha az doğrudur.
    </p>

    <h2>Görseller için ayarlama</h2>
    <p>
      İnsanlar görselleri okumaz, ancak onlara bakarak zaman harcarlar.
      Medium'un algoritması ilk görsel için ~12 saniye ekler, sonraki
      görseller için azalır (her biri 3-10 sn).
    </p>
    <p>
      Basit yaklaşım: görsel başına 12 saniye ekleyin, toplamda belki 30
      saniye ile sınırlayın. Görsel içeriği yoğun makaleler için bu tek
      başına tahmini anlamlı şekilde artırır.
    </p>
    <p>
      Alternatif yaklaşım: görselleri tamamen yok sayın. Makaleleriniz
      ağırlıklı olarak metinse, görsel başına fark önemsenecek kadar
      küçüktür.
    </p>

    <h2>Kod blokları için ayarlama</h2>
    <p>
      Kod, düzyazıdan daha yavaş okunur — kabaca yarısı hızında. Bir
      Stanford çalışması, programcıların kod okurken ortalama ~100 KDS,
      düzyazı okurken ~250 KDS hızında olduğunu buldu.
    </p>
    <p>
      Düzyazı ve kodu karıştıran makaleler için:
    </p>
    <p>
      <strong>Seçenek A:</strong> Kod bloklarını ayıklayın, kelimeleri
      ayrı ayrı sayın, koda 100 KDS ve düzyazıya 240 KDS uygulayın. İki
      tahmini toplayın.
    </p>
    <p>
      <strong>Seçenek B:</strong> Sabit bir artış ekleyin (kod bloğu başına
      30 saniye veya kod için kelime süresinin 2 katı). Çoğu durum için
      yeterince yakındır ve uygulaması daha basittir.
    </p>
    <p>
      <strong>Seçenek C (yayıncılık varsayılanı):</strong> Farkı yok sayın.
      Tipik bir teknik makale için fark 10-20 saniyedir ve yuvarlanarak
      kaybolur.
    </p>

    <h2>Yuvarlama ve görüntüleme</h2>
    <p>
      Çıktı kullanılabilir olmalıdır. &ldquo;3.47 dakikalık okuma&rdquo;
      yapay görünür.
    </p>
    <p>
      <strong>Her zaman en yakın dakikaya yuvarlayın.</strong> 2.1 dakikalık
      bir makale &ldquo;3 dakikalık okuma&rdquo;dır — az söz vermek, çok
      söz vermekten iyidir.
    </p>
    <p>
      <strong>Bir dakikanın altındaki makaleler:</strong> &ldquo;&lt; 1
      dakikalık okuma&rdquo; veya &ldquo;Hızlı okuma.&rdquo;
    </p>
    <p>
      <strong>Çok uzun makaleler:</strong> bazı yayıncılar saatlere geçer.
      Kesirli saatlerden (&ldquo;2.5 saatlik okuma&rdquo;) kaçının;
      &ldquo;3 saatlik okuma&rdquo; deyin veya parçalara ayırın.
    </p>
    <p>
      <strong>Dil önemlidir:</strong> &ldquo;dakikalık okuma&rdquo;
      standarttır; &ldquo;okumak için dakikalar&rdquo; daha uzun ancak
      daha açıktır. Medium &ldquo;dakikalık okuma&rdquo;yı seçti. Bu
      yerleşti.
    </p>

    <h2>Doğruluğun daha önemli olduğu durumlar</h2>
    <p>
      Zaman baskısının gerçek olduğu içerikler için:
    </p>
    <p>
      <strong>Sesli kitaplar/podcast'ler:</strong> farklı hesaplama —
      konuşulan içerik için ~150-160 KDS. Dakika cinsinden uzunluk,
      tahmin edilmek yerine kesindir (süre).
    </p>
    <p>
      <strong>Konuşmadan metne:</strong> oluşturulan transkriptler ses
      süresini doğrudan devralır.
    </p>
    <p>
      <strong>E-posta kampanyaları:</strong> A/B testleri, vaat edilen
      okuma sürelerinin (&ldquo;3 dakikalık okuma&rdquo;) açma-tıklama
      oranlarını ~%10-15 artırdığını gösterir. Çok söz vermek (&ldquo;1
      dakika&rdquo; 5 dakikalık bir okuma için) güveni zedeler.
    </p>

    <h2>İngilizce olmayan içerik</h2>
    <p>
      Okuma hızları dile göre değişir:
    </p>
    <p>
      İngilizce: 238 KDS.
    </p>
    <p>
      Fransızca: ~214 KDS.
    </p>
    <p>
      İspanyolca: ~218 KDS.
    </p>
    <p>
      Çince: ~158 KDS (dakikadaki karakter sayısı, kelime değil — Çince'de
      boşluk kullanılmaz).
    </p>
    <p>
      Çince/Japonca için kelimeler yerine karakterleri sayın.
      Tipik hız: dakikada 300-400 Çince karakter.
    </p>

    <h2>Okuma seviyesi ve karmaşıklık</h2>
    <p>
      Okuyucular, yoğun akademik düzyazı veya alışılmadık teknik
      materyallerde yavaşlar. Flesch-Kincaid 12+ seviye metin, 8. seviye
      metinden kabaca %20-30 daha yavaş okunur.
    </p>
    <p>
      Çoğu yayıncı bunu yok sayar — tahminler doğası gereği kabadır.
      Hassasiyete ihtiyacınız varsa, okuma süresini bir okunabilirlik
      puanıyla (Flesch, Dale-Chall) eşleştirin, böylece okuyucular her
      ikisini de görür.
    </p>

    <h2>Okuma süresini faydalı yere koymak</h2>
    <p>
      <strong>Makalenin başı:</strong> standart yerleşim. Medium,
      Substack, New York Times — hepsi yazar adının yanına koyar.
    </p>
    <p>
      <strong>Önizleme kartında:</strong> bir makale listesinde, okuma
      süresi okuyucuların mevcut zamanlarına uygun olanı seçmesine
      yardımcı olur.
    </p>
    <p>
      <strong>E-posta bültenlerinde:</strong> &ldquo;5 şey, toplam 8
      dakikalık okuma&rdquo; iyi performans gösterir.
    </p>
    <p>
      <strong>Schema.org işaretlemesi:</strong> Makale üzerindeki <code>timeRequired</code>
      özelliği, arama motorlarının zengin sonuçlarda okuma süresini
      göstermesini sağlar. ISO 8601 süre formatında <code>timeRequired: &quot;PT5M&quot;</code>.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>200 KDS kullanmak (çok yavaş).</strong> Modern yetişkin
      okuyucular bunu aşar. 200 KDS okuma süresini olduğundan fazla
      gösterir. 240-265 kullanın.
    </p>
    <p>
      <strong>HTML veya markdown sözdizimini saymak.</strong> Önce
      işaretlemeyi kaldırın. <code>&lt;strong&gt;metin&lt;/strong&gt;</code>
      bir kelimedir (&ldquo;metin&rdquo;), üç belirteç değil.
    </p>
    <p>
      <strong>0 dakika göstermek.</strong> Her zaman &ldquo;&lt; 1
      dakikalık okuma&rdquo; veya &ldquo;1 dakikalık okuma&rdquo; ile
      tabanlayın. Asla sıfır göstermeyin.
    </p>
    <p>
      <strong>Yorumlardaki veya ilgili gönderi bölümlerindeki kelimeleri
      saymak.</strong> Yalnızca makale gövdesini sayın.
    </p>
    <p>
      <strong>Tahmini sabit kodlamak.</strong> Düzenlemelerin
      görüntülemeyi otomatik olarak güncellemesi için içerikten derleme/işleme
      zamanında hesaplayın.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Herhangi bir metni{" "}
      <a href="/tools/reading-time-estimator">okuma süresi hesaplayıcısına</a>
      {" "}yapıştırın ve anında kelime sayısı ve dakika alın. Ayrıntılı
      istatistikler için{" "}
      <a href="/tools/word-counter">kelime sayacı</a> ile
      ve tonu ve sınıf seviyesini kitlenizle eşleştirmek için{" "}
      <a href="/tools/readability-score-checker">okunabilirlik puanı
      denetleyicisi</a> ile birlikte kullanın.
    </p>
  </>
);