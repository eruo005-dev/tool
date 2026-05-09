import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Günlük kalori hedefiniz, fitness alanındaki en kullanışlı sayıdır ve aynı zamanda en sık yanlış hesaplananıdır. Uygulamalar size bir sayı verir ancak bunu nasıl bulduklarını göstermez, çevrimiçi hesaplayıcılar yüzlerce kalori farkla çelişir ve sayının kendisi, bir elektronik tablo gibi davranmayan bir vücut için yalnızca bir tahmindir. Matematik aslında basittir: BMR'nizi tahmin edin, bir aktivite faktörüyle çarpın, bir açık ekleyin veya çıkarın. Bu kılavuz, Mifflin-St Jeor denklemini, gerçek hayata uyan aktivite çarpanlarını, kilo hedefleri için nasıl açık veya fazla belirleneceğini ve kalori matematiğine neden bir başlangıç noktası olarak yaklaşılması gerektiğini, bir sözleşme olarak değil, adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>TDEE = BMR × aktivite faktörü</h2>
    <p>
      <strong>TDEE</strong> (toplam günlük enerji harcaması), vücudunuzun tam bir günde yaktığı kalori miktarıdır. Hedefinize bağlı olarak eşleştirmek, altında kalmak veya aşmak istediğiniz sayıdır.
    </p>
    <p>
      <strong>BMR</strong> (bazal metabolizma hızı), vücudunuzun tam dinlenme halinde yaktığıdır — sadece temel işlevleri sürdürmek için. Hareketsiz bir kişide TDEE'nin kabaca %60-70'ini oluşturur, aktif bir kişide daha azdır.
    </p>
    <pre>{`TDEE = BMR x aktivite faktörü`}</pre>

    <h2>Mifflin-St Jeor denklemi</h2>
    <p>
      BMR tahmini için mevcut standart. Eski Harris-Benedict'ten daha modern popülasyonlar için daha doğrudur.
    </p>
    <pre>{`Erkek:    BMR = 10*kilo(kg) + 6.25*boy(cm) - 5*yaş + 5
Kadın:    BMR = 10*kilo(kg) + 6.25*boy(cm) - 5*yaş - 161

Örnek: 35 yaşında erkek, 80kg, 180cm
BMR = 800 + 1125 - 175 + 5 = 1,755 kcal`}</pre>
    <p>
      Pound ve inç cinsinden:{" "}
      <code>kilo(lb) * 4.536</code>, <code>boy(in) * 2.54</code>.
    </p>

    <h2>Aktivite çarpanları</h2>
    <p>
      Nasıl yaşamak istediğinizi değil, gerçekte nasıl yaşadığınızı yansıtan sayıyı seçin.
    </p>
    <pre>{`1.2    Hareketsiz         Masa başı iş, az egzersiz
1.375  Hafif              Hafif egzersiz haftada 1-3 gün
1.55   Orta               Orta egzersiz haftada 3-5 gün
1.725  Çok aktif          Zorlu egzersiz haftada 6-7 gün
1.9    Ekstra aktif       Fiziksel iş + günlük antrenman`}</pre>
    <p>
      Çoğu insan abartır. Haftada üç kez spor salonuna giden bir beyaz yakalı çalışanı neredeyse her zaman <em>hafif</em> (1.375) aktivitedir, <em>orta</em> değil. İki saatlik antrenman, on altı saatlik oturmayı telafi etmez. Düşük tarafta hata yapın; ilerleme durursa her zaman daha fazla yiyebilirsiniz.
    </p>

    <h2>Bir araya getirmek</h2>
    <pre>{`Aynı 35/80kg/180cm erkek, orta derecede aktif:
TDEE = 1,755 x 1.55 = 2,720 kcal/gün`}</pre>
    <p>
      Bu sizin koruma seviyenizdir. 2,720 kalori yiyin ve kilonuz haftalar boyunca bir hata payı dahilinde kabaca sabit kalır.
    </p>

    <h2>Kilo kaybı için açık belirleme</h2>
    <p>
      Bir kilogram vücut yağı ~7,700 kcal. Günlük 500 kalorilik açık = ~0.5 kg/hafta, 1,000 kalorilik açık = ~1 kg/hafta.
    </p>
    <pre>{`0.5 kg/hafta kaybetmek için:   TDEE - 500
1 kg/hafta kaybetmek için:     TDEE - 1,000 (agresif)
Alt sınırlar:                  1,200 kcal kadın / 1,500 kcal erkek`}</pre>
    <p>
      Tıbbi gözetim olmadan bu alt sınırların altına inmeyin. Çok düşük alımdan kaynaklanan hızlı kayıp, orantısız kas kaybı, metabolik yavaşlama ve daha yüksek geri tepme riski anlamına gelir. On iki hafta sonra önemli olan her sonuç için yavaş ve istikrarlı, şok diyetleri yener.
    </p>

    <h2>Kazanç için fazla belirleme</h2>
    <p>
      Kas kazanımı için mütevazı bir fazla hedefleyin — TDEE'nin 250-500 kcal üstü. Daha büyük fazlalar kas yapımını hızlandırmaz; sadece yağ ekler.
    </p>
    <pre>{`Yağsız toplu:   TDEE + 200-300
Standart:       TDEE + 300-500
Kirli toplu:    TDEE + 500+   (önerilmez)`}</pre>
    <p>
      Kas büyümesi, toplam kaloriyle değil, protein sentez hızıyla sınırlıdır. Daha fazla yiyerek ekstra büyümeyi zorlayamazsınız. Fazla depolanır.
    </p>

    <h2>Protein, yağ, karbonhidrat</h2>
    <p>
      Kalori sayısı belirlendikten sonra, bunu <a href="/learn/macros">makrolara</a> bölün:
    </p>
    <pre>{`Protein: Vücut ağırlığının kg'ı başına 1.6-2.2 g (lb başına 0.7-1.0 g)
Yağ:     Kalorilerin %20-30'u (hormonlar için minimum ~0.3 g/lb)
Karbonhidrat: Geri kalanı`}</pre>
    <p>
      Protein, bir açık sırasında en önemlisidir — vücut enerjiden yoksun olduğunda kası koruyan şeydir. Bir fazla sırasında, protein ve direnç antrenmanı, kalorileri yağ yerine kasa dönüştüren şeydir.
    </p>

    <h2>Kalori matematiği neden yaklaşıktır</h2>
    <p>
      Gerçek harcamanız tahminden 200-400 kcal farklı olabilir:
    </p>
    <ul>
      <li>Aynı istatistiklere sahip bireyler arasında BMR farkı: +/- %10</li>
      <li>NEAT (egzersiz dışı aktivite termojenezi) yüzlerce kalori oynar</li>
      <li>Besinlerin termik etkisi makro dağılımına göre değişir (+%5-30)</li>
      <li>Gıda etiketlerinde yasal olarak +/- %20 doğruluk payı vardır</li>
      <li>Ev yemeklerinde porsiyon tahminleri: son derece değişken</li>
    </ul>
    <p>
      Dolayısıyla reçete: sayıyı hesaplayın, 2-3 hafta boyunca ona göre yiyin, eğilimi ölçün ve sıfırdan yeniden hesaplamak yerine 100-200 kcal ayarlayın.
    </p>

    <h2>Takip doğruluğu</h2>
    <p>
      Mutfak terazisi, bardak ölçülerinden daha iyidir. Bardak ölçüleri, göz kararından daha iyidir. Göz kararı, hiç yoktan iyidir. İlk iki hafta kayıt tutmak — gevşek bile olsa — porsiyon boyutlarına dair algınızı kalibre eder; bundan sonra genellikle sadece teraziye dayalı protein takibiyle idare edebilirsiniz.
    </p>
    <p>
      En büyük kör noktalar: yemeklik yağ, soslar, içecekler, eşinizin tabağından aldığınız lokmalar. İki yemek kaşığı zeytinyağı 240 kcal'dir.
    </p>

    <h2>Metabolik adaptasyon</h2>
    <p>
      Haftalarca açıkta olmak, adaptif termojenezi tetikler — vücudunuz BMR ve NEAT'ı düşürür. 8. haftada bir plato, matematiğin yanlış olduğu anlamına gelmez; TDEE'nizin düştüğü anlamına gelir. Seçenekler:
    </p>
    <ul>
      <li>1-2 hafta korumada yiyin (diyet molası)</li>
      <li>100-200 kcal daha kesin</li>
      <li>Antrenman hacmini artırın (kardiyo veya adımlar)</li>
    </ul>
    <p>
      Bir platodan çıkış yolu, daha az kalori değil, bir diyet molası veya daha fazla aktivitedir.
    </p>

    <h2>Hesaplayıcı sizin için ne zaman yanlıştır</h2>
    <p>
      Mifflin-St Jeor formülü ortalama vücut kompozisyonunu varsayar. Çok yağsızsanız (erkekler için %10'un altında vücut yağı, kadınlar için %18), BMR'yi olduğundan düşük tahmin eder. Çok fazla vücut yağınız varsa, biraz fazla tahmin eder. Yüksek vücut yağı vakaları için, yağsız vücut kütlesini kullanarak Katch-McArdle ile hesaplayın:
    </p>
    <pre>{`Katch-McArdle:  BMR = 370 + 21.6 * YVK(kg)
YVK = kilo * (1 - vücut_yağ_yüzdesi)`}</pre>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Aktivite seviyesini abartmak.</strong> En yaygın hata. İlk seçiminizden bir kademe düşürün.
    </p>
    <p>
      <strong>Tam sayının peşinden koşmak.</strong> Günlük TDEE'niz doğal olarak yüzlerce kalori oynar. Günlük bir hedef değil, haftalık bir ortalama hedefleyin.
    </p>
    <p>
      <strong>Sıvı kalorileri görmezden gelmek.</strong> 16 oz latte 250-350 kcal, bira 150, şarap 120'dir. Yiyecek olarak algılanmadıkları için unutulurlar.
    </p>
    <p>
      <strong>Kesme döneminde proteini yetersiz almak.</strong> Gerekenden fazla kas kaybedersiniz. Diğer her şeyi kısarken bile proteini yüksek tutun.
    </p>
    <p>
      <strong>Her hafta yeniden hesaplamak.</strong> İstatistikleriniz o kadar hızlı değişmez. Haftalık değil, 2-5 kg kilo değişiminden sonra yeniden hesaplayın.
    </p>
    <p>
      <strong>Ölçüm aşamasını atlamak.</strong> Sayı, iki hafta boyunca ona göre yiyip terazinin ne yaptığını görene kadar bir tahmindir. Formüle değil, verilere güvenin.
    </p>
    <p>
      <strong>Hızlı sonuçlar için aşırı açıklar.</strong> Kas kaybedersiniz, kendinizi berbat hissedersiniz ve geri teper. Yavaş kayıplar kalıcıdır.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      İstatistiklerinizi, açık ve fazla seçenekleriyle bir TDEE için <a href="/tools/calorie-calculator">kalori hesaplayıcıya</a> girin. Sadece temel sayı için <a href="/tools/bmr-calculator">BMR hesaplayıcı</a> aktivite çarpanını atlar ve <a href="/tools/macro-calculator">makro hesaplayıcı</a> hedef kalorilerinizi protein, yağ ve karbonhidrata bölerek tabakta gerçekte ne olduğunu bilmenizi sağlar.
    </p>
  </>
);