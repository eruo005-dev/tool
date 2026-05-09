import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      BMI, hiçbir zaman kişisel bir sağlık değerlendirmesi olarak kullanılmak üzere tasarlanmamış bir kilo-boy oranıdır — 1830'lardan kalma, popülasyon düzeyinde bir tarama istatistiğidir ve ölçümü ucuz olduğu için bireysel tanıya yükseltilmiştir. Bu sayı, kaba bir sinyal olarak kullanışlıdır ve bir hüküm olarak tehlikelidir. Bu rehber, BMI'ın size ne söylediğini ve ne söylemediğini, kimi sistematik olarak yanlış sınıflandırdığını ve buna göre hareket edip etmeyeceğinize karar verirken bunun yerine nelere bakmanız gerektiğini adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Formül ve standart kategoriler</h2>
    <p>
      <code>BMI = ağırlık (kg) / boy (m)<sup>2</sup></code>
    </p>
    <p>
      İmparatorluk birimleri: <code>BMI = 703 × ağırlık (lb) / boy (in)<sup>2</sup></code>. Yetişkinler için WHO kategorileri: zayıf (&lt;18.5), normal (18.5–24.9), fazla kilolu (25–29.9), obez sınıf I (30–34.9), sınıf II (35–39.9), sınıf III (40+).
    </p>

    <h2>BMI aslında neyi ölçer</h2>
    <p>
      BMI, toplam vücut kütlesini boya göre ölçer. Kası yağdan, deri altı yağı iç organ yağından veya iskelet yapısını vücut kompozisyonundan ayırt edemez. 10.000 hareketsiz yetişkinden oluşan bir popülasyonda BMI, vücut yağ yüzdesiyle makul ölçüde iyi korelasyon gösterir. Bireysel düzeyde ise son derece yanıltıcı olabilir.
    </p>

    <h2>BMI'ın sistematik olarak yanlış sınıflandırdığı kişiler</h2>
    <p>
      <strong>Kaslı sporcular:</strong> 1.78 m boyunda, 90.7 kg ağırlığındaki bir defans oyuncusunun BMI'ı 28.7'dir — teknik olarak "fazla kilolu" — ancak vücut yağ oranı %8'dir. NFL, BMI'a göre "obez" olarak sınıflandırılan ancak genel popülasyonun çoğundan daha sağlıklı vücut kompozisyonuna sahip adamlarla doludur.
    </p>
    <p>
      <strong>Kas kaybı yaşayan (sarkopeni) yaşlı yetişkinler:</strong> 10 lb kas kütlesi kaybetmiş ancak vücut yağını sabit tutmuş 75 yaşındaki bir kişi, sağlıklı seviyenin üzerinde vücut yağ yüzdesine sahipken "normal" bir BMI'a sahip olabilir. BMI iyi görünür; kompozisyon iyi değildir.
    </p>
    <p>
      <strong>Kısa veya çok uzun boylu kişiler:</strong> Boyun karesi paydası, aşırı boylarda aşırı düzeltme yapar. BMI, uzun boylu kişilerde yağlanmayı olduğundan fazla, kısa boylu kişilerde ise olduğundan az tahmin eder.
    </p>
    <p>
      <strong>Farklı etnik kökenler:</strong> Asya popülasyonlarında BMI'a göre vücut yağ oranı daha yüksektir; WHO, Asya'ya özgü BMI eşik değerleri önermektedir (fazla kilolu ≥ 23, obez ≥ 27.5). Siyah bireylerde genellikle BMI'a göre yağsız kütle daha yüksektir; standart sınır değerler aşırı tanıya yol açar.
    </p>

    <h2>Bunun yerine (veya yanında) ne ölçülmeli</h2>
    <p>
      <strong>Bel çevresi.</strong> Göbek deliği hizasından ölçülür: &gt; 40 inç (erkekler) / &gt; 35 inç (kadınlar) bağımsız olarak kardiyovasküler riski öngörür. Muhtemelen bir mezura ile ölçebileceğiniz en kullanışlı tek sayıdır. 42 inç bel çevresine sahip "normal bir BMI", 36 inç bel çevresine sahip "fazla kilolu bir BMI"dan daha kötüdür.
    </p>
    <p>
      <strong>Bel-boy oranı.</strong> Boydan bağımsız olarak tüm yetişkinler için &lt; 0.5 olmalıdır. Mutlak bel ölçümlerinden daha kolay iletilir ve popülasyonlar arasında işe yarar.
    </p>
    <p>
      <strong>Vücut yağ yüzdesi.</strong> Biyoelektrik empedans terazileri gürültülüdür (±%3 tipik hata); DEXA taramaları altın standarttır (±%1). Erkekler için sağlıklı %10–20; kadınlar için %18–28.
    </p>
    <p>
      <strong>Dinlenme kalp atış hızı + kan basıncı + açlık glukozu + HDL/LDL.</strong> Tek başına BMI'dan çok daha iyi bireysel sağlık belirteçleridir. Bunların hepsi normal aralıktaysa, "fazla kilolu" bir BMI muhtemelen sorun değildir. Birkaçı normal aralığın dışındaysa, "normal" bir BMI sizi korumaz.
    </p>

    <h2>BMI'ın aslında ne zaman kullanışlı olduğu</h2>
    <p>
      <strong>Popülasyon taraması.</strong> Halk sağlığı çalışmaları, ucuz, tekrarlanabilir ve milyonlarca insan arasında makul ölçüde öngörücü olduğu için kullanır. Bu ölçekte iyidir.
    </p>
    <p>
      <strong>Kendinizdeki değişimi takip etmek.</strong> Aynı boyda BMI 28'den BMI 24'e düştüyseniz, bir şey değişmiş demektir — muhtemelen sağlıklı bir yönde. Birey içindeki eğilim, tek nokta sınıflandırmasından daha anlamlıdır.
    </p>
    <p>
      <strong>Ciddi uç değerler için hızlı tarama.</strong> Vücut kompozisyonundan bağımsız olarak 42'lik bir BMI işaretlenmeye değerdir. 16'nın altındaki bir BMI işaretlenmeye değerdir. Uç değerler, 24–28 arasındaki sınır bölgesinden daha güvenilirdir.
    </p>

    <h2>Çocuklar ve ergenler — farklı kurallar</h2>
    <p>
      20 yaş altı kişiler için BMI, yetişkin kategorilerini değil, <strong>yaşa göre BMI persentillerini</strong> kullanır. Hesaplayıcı yalnızca yetişkinler için geçerlidir. Çocuklar için fazla kilolu = 85.–94. persentil; obez = ≥ 95. persentil. Bunun yerine pediatrik BMI persentil aracı kullanın.
    </p>

    <h2>Hamilelik, emzirme ve iyileşme</h2>
    <p>
      BMI, hamilelik sırasında veya doğum sonrası 6+ ay boyunca anlamlı değildir; klinik olarak hamilelik öncesi BMI kullanılır. Sakatlık sonrası iyileşen ve geçici olarak kas kütlesi kaybeden sporcular, iyileşme sırasında BMI'ı hedef olarak kullanmamalıdır.
    </p>

    <h2>Sayıyı okuyun, sonra ötesine bakın</h2>
    <p>
      Kendinizinkini <a href="/tools/bmi-calculator">BMI hesaplayıcıda</a> hesaplayın. Normal aralıktaysanız ve endişe verici bir bel ölçümünüz veya laboratuvar değeriniz yoksa, muhtemelen sorun yoktur. İşaretlendiyseniz, harekete geçmeden önce bir bel ölçümü ve temel laboratuvar testleri ile eşleştirin.{" "}
      <a href="/tools/body-fat-calculator">Vücut yağ hesaplayıcı</a>, çevre ölçümlerinden Donanma yöntemiyle bir tahmin verir ve{" "}
      <a href="/tools/ideal-weight-calculator">ideal kilo hesaplayıcı</a>, bir hedef belirliyorsanız karşılaştırma yapmak için dört formül tabanlı kilo aralığı sunar.
    </p>
  </>
);