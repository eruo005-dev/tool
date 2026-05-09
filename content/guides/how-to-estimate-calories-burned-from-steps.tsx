import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Adım sayaçları size tek bir şey söyler &mdash; kaç adım attığınız &mdash; ancak insanlar kalori, mesafe ve günlerinin gerçekten aktif olup olmadığını bilmek ister. Adımları kaloriye dönüştürmek mümkündür, ancak yaklaşıktır: hesaplama adım uzunluğuna, vücut ağırlığına, yürüme hızına ve araziye bağlıdır ve her adım sayacı bunların birkaçını sessizce tahmin eder. Bu rehber, adımların mesafeye dönüşümünü, tahmini aslında yönlendiren MET tabanlı kalori formülünü, vücut ağırlığının sonucu nasıl ölçeklendirdiğini, bileklik ve telefon adım sayımlarının sınırlarını ve günlük adım toplamını kalori defterinde kullanışlı bir sayıya dönüştürmek için pratik kuralları adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Adımdan mesafeye</h2>
    <p>
      Ortalama adım uzunluğu erkeklerde boyun yaklaşık %41'i, kadınlarda ise %40'ı kadardır. Pratik tahminler:
    </p>
    <pre>{`Yürüme adımı ~= 0,414 x boy (m)
Koşma adımı ~= 0,495 x boy (m)

1,78 cm (178 cm) boyunda bir kişi, yürüyüş:
Adım = 0,414 * 1,78 = 0,74 m
Mil başına adım = 1609 / 0,74 = ~2.175 adım`}</pre>
    <p>
      Kabaca kural: <strong>Yürüme hızında mil başına 2.000&ndash;2.500 adım</strong>,{" "}
      koşma hızında mil başına 1.500 adım. 10.000 adım = yürüyüşte ~4&ndash;5 mil veya koşuda ~6&ndash;7 mil.
    </p>

    <h2>Hıza göre MET değerleri</h2>
    <p>
      MET = metabolik eşdeğer. Bir MET = hareketsiz oturmanın enerji maliyeti (~1 kcal/kg/saat). Fiziksel Aktiviteler Özeti'nden yürüme ve koşma MET değerleri:
    </p>
    <pre>{`Aktivite                         Hız            MET
Yavaş yürüyüş                    3,2 km/s       2,5
Orta tempolu yürüyüş             4,0-4,8 km/s   3,0-3,5
Tempolu yürüyüş                  5,6 km/s       4,3
Çok tempolu yürüyüş              6,4 km/s       5,0
Jogging                          8,0 km/s       8,3
Koşu                             9,7 km/s       9,8
Koşu                             12,9 km/s      11,8
Koşu                             16,1 km/s      14,5`}</pre>
    <p>
      Enerji maliyeti, yürüme için hızla kabaca doğrusal, koşma için ise biraz daha dik bir şekilde ölçeklenir. Yokuş yukarı önemli ölçüde ekler &mdash; %5 eğim, kalori yakımına ~%30&ndash;50 ekler.
    </p>

    <h2>Kalori formülü</h2>
    <pre>{`kalori = MET x ağırlık(kg) x saat

Örnek: 80 kg kişi, tempolu yürüyüş (4,3 MET) 60 dakika:
kalori = 4,3 * 80 * 1 = 344 kcal`}</pre>
    <p>
      Yürüme dakikanızı değil, saat sayınızı girin. 45 dakikalık bir yürüyüş için saat = 0,75.
    </p>

    <h2>Doğrudan adımdan kaloriye (kısayol)</h2>
    <p>
      Çoğu adım takipçisi bu basitleştirmenin bir versiyonunu kullanır:
    </p>
    <pre>{`ortalama bir yürüyüşçü için adım başına kalori = 0,04 ila 0,05
                    vücut ağırlığı ve hıza göre ölçeklenir

Kabaca:
68 kg kişi için 10.000 adım yürüyüş:  ~400 kcal
100 kg kişi için 10.000 adım yürüyüş:  ~560 kcal`}</pre>
    <p>
      Daha temiz bir formül:
    </p>
    <pre>{`adım başına kcal = 0,57 * ağırlık(kg) / 1000
              (tempolu yürüyüş hızı için)`}</pre>

    <h2>Vücut ağırlığı ölçeklemesi</h2>
    <p>
      Kalori maliyeti vücut ağırlığıyla orantılıdır. Aynı mesafeyi yürüyen 90 kg'lık bir kişi, 68 kg'lık bir kişiden yaklaşık %33 daha fazla kalori yakar. İki ölçek önemlidir:
    </p>
    <ul>
      <li>Vücut ağırlığınızı hareket ettirmek enerji gerektirir &mdash; ağırlıkla doğrusal</li>
      <li>
        Daha ağır kişiler ayrıca daha uzun adımlara ancak daha yavaş tempoya sahip olma eğilimindedir, bu da kısmen telafi eder
      </li>
    </ul>
    <p>
      Genel &ldquo;5.000 adım = 250 kcal&rdquo; iddiaları bunu görmezden gelir ve %30'a kadar hatalı olabilir.
    </p>

    <h2>Hız, düşündüğünüzden daha önemlidir</h2>
    <p>
      3,2 km/s hızda (2,5 MET) 10.000 adım ≠ 6,4 km/s hızda (5,0 MET) 10.000 adım. Hız, aynı mesafe için kalori sayısını ikiye katlar. Takipçiniz, GPS destekli olmadığı sürece genellikle hızı bilmez; tahmin eder.
    </p>

    <h2>Arazi ve eğim</h2>
    <pre>{`Düz zemin           temel MET
%5 eğim            +%25-40 kcal
%10 eğim           +%50-80 kcal
Patika / çim        +%10-15 (yumuşak yüzey = daha fazla iş)
Kum / kar           +%30-50
Yokuş aşağı         -%10-15 ancak eklemlerde eksantrik yük`}</pre>
    <p>
      Adım sayaçları, barometrik altimetre ile eşleştirilmedikçe (birçok akıllı saatte bulunur) eğim farkındalığına sahip değildir.
    </p>

    <h2>Adım sayaçlarının doğruluğu</h2>
    <p>
      Cihazınızın adımları ne kadar iyi saydığı:
    </p>
    <ul>
      <li>
        <strong>Göğüs / bel pedometreleri:</strong> Yürüme hızında %95&ndash;99 doğru. En iyi seçenek.
      </li>
      <li>
        <strong>Bileklik takipçileri:</strong> Yürümede %90&ndash;97, yavaş tempoda %80'e düşebilir (kollar neredeyse sallanmaz) veya bebek arabası / alışveriş arabası / masa başı işlerini kaçırabilir.
      </li>
      <li>
        <strong>Cepteki telefon:</strong> %85&ndash;95 &mdash; telefon sabitse adımları kaçırabilir veya araç titreşiminden adım ekleyebilir.
      </li>
      <li>
        <strong>Masada telefon:</strong> %0. Telefon üzerinizde değilse, adımlar sayılmaz.
      </li>
    </ul>
    <p>
      Koşu hızında, tüm cihazlar ~%99 doğruluğa yakınsar.
    </p>

    <h2>Yaygın fazla ve eksik sayımlar</h2>
    <p>
      <strong>Hayali adımlar:</strong> yazma, alkışlama, yemek pişirme, saç kurutma, manuel işler. Bileklik takipçileri günde 500&ndash;2.000 hayali adım ekleyebilir.
    </p>
    <p>
      <strong>Kaçırılan adımlar:</strong> bebek arabası veya alışveriş arabası itme, eller cepte, bisiklete binme (bacaklar döner ancak adım olarak sayılmaz).
    </p>
    <p>
      Net sapma, aktivite düzeninize bağlıdır. Çoğu kullanıcı hafifçe fazla sayar.
    </p>

    <h2>Adım hedefleri bağlamında</h2>
    <pre>{`5.000     hareketsiz temel
7.500     biraz aktif
10.000    aktif (Japonya'da pedometre pazarlaması için popüler hale getirildi)
12.500    çok aktif
15.000+   yüksek derecede aktif yaşam tarzı`}</pre>
    <p>
      10.000 adım hedefi, araştırmadan değil, 1960'lardaki bir Japon pedometre markasından geldi. Güncel araştırma: faydalar yaklaşık 4.400 adımda başlar, ek getiriler 7.500&ndash;8.000 civarında düzleşir. 10.000 iyidir ancak sihirli değildir.
    </p>

    <h2>Adımlar vs yapılandırılmış egzersiz</h2>
    <p>
      Yürüme adımları düşük yoğunluklu aerobik çalışmadır &mdash; günlük enerji harcaması, kardiyovasküler sağlık ve toparlanma için harikadır. Bunların yerini almaz:
    </p>
    <ul>
      <li>Direnç antrenmanı (kas, kemik)</li>
      <li>Daha yüksek yoğunluklu kardiyo (VO2max)</li>
      <li>Hareketlilik çalışmaları</li>
    </ul>
    <p>
      10.000 adım artı haftada iki kaldırış, tek başına 20.000 adımdan daha iyi bir haftadır.
    </p>

    <h2>Kalori açığı için adımları kullanma</h2>
    <p>
      Adımlar, toplam günlük enerji harcamanıza (TDEE) eklenir, bu da aynı açıkta biraz daha fazla yemenize veya aynı alımda biraz daha hızlı kilo vermenize olanak tanır. 68 kg'lık bir kişi günde 8.000 ekstra adım yürürse ~320 kcal ekstra yakar, bu da diyet sabitse haftada ~2/3 lb kilo kaybı üretmek için yeterlidir.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Tüm adımların aynı kalori olduğunu varsaymak.</strong> Hız, ağırlık ve arazi önemlidir. Yavaş bir yürüyüş, tempolu bir yürüyüşün yarısı kadar kalori yaktırır.
    </p>
    <p>
      <strong>Takipçinin kalori tahminlerine kcal olarak güvenmek.</strong>{" "}
      Çoğu %20&ndash;30 iyimserdir. Mutlak değil, göreceli olarak kullanın.
    </p>
    <p>
      <strong>Sadece egzersiz adımlarını saymak.</strong> Günlük tesadüfi adımlar (işler, evde dolaşma) çoğu insan için spor salonu seanslarından daha fazlasını oluşturur.
    </p>
    <p>
      <strong>Cihazlar arasında adım sayılarını karşılaştırmak.</strong> Farklı algoritmalar kullanırlar. Aynı cihaz trendi önemlidir, cihazlar arası sayılar değil.
    </p>
    <p>
      <strong>Yavaş yürümede bileklik boşluğunu görmezden gelmek.</strong> Kolları sabit yavaş yürüyen yaşlı yetişkinler binlerce adım eksik sayılabilir.
    </p>
    <p>
      <strong>Takipçinin &ldquo;yakımını&rdquo; geri yemek.</strong>{" "}
      Fazla sayımlar birikir. Takipçiniz 2.800 kcal yakıldığını söylüyorsa, 2.500 muhtemelen daha yakındır.
    </p>
    <p>
      <strong>Telefonu taşımadan telefon adımlarını kullanmak.</strong> Telefon masada 4 saat geçirdiyse, bu 4 saatlik yürüme yakalanmamıştır.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Bir adım sayısını kalori tahminine dönüştürmek için{" "}
      <a href="/tools/steps-to-calories-calculator">adımdan kaloriye hesaplayıcı</a>'yı kullanın.
      Bunu günlük toplamınıza bağlamak için{" "}
      <a href="/tools/calorie-calculator">kalori hesaplayıcı</a>'yı kullanın ve
      yürüyüşler sırasında kalp atış hızınızı{" "}
      <a href="/tools/heart-rate-zone-calculator">kalp atış hızı bölgesi hesaplayıcı</a> ile çapraz referanslayarak kardiyo çabanızı doğrulayın.
    </p>
  </>
);