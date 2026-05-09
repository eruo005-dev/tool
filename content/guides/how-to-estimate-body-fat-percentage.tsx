import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Vücut yağ yüzdesi, BMI'nin yapamadığını size söyler: kilonuzun ne kadarının yağ, ne kadarının yağsız kütle olduğunu. 75 kg'daki iki kişinin sağlık profilleri çarpıcı şekilde farklı olabilir — biri %15 vücut yağına, diğeri %30'a sahip olabilir. İşin püf noktası, her ölçüm yönteminin önemli hata paylarına sahip olması ve ucuz yöntemlerin 5-10 puan sapma gösterebilmesidir. Bu rehber, Donanma bandı yöntemini (ücretsiz, ~%3-4 hata), deri kıvrım kaliperlerini (ucuz, beceri gerektirir), DEXA ve hidrostatik tartımı (altın standart, pahalı), biyoelektrik empedans tartılarını (pratik, güvenilmez) ve tüm bunların cinsiyet ve yaşa göre sağlık aralıklarına göre nasıl yorumlanacağını kapsar. Tutarlı bir şekilde kullanacağınız yöntemi seçin.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. BMI ve vücut yağ yüzdesi</h2>
    <p>
      BMI yalnızca boy ve kiloyu kullanır:
    </p>
    <pre>{`BMI = ağırlık (kg) / boy (m)²`}</pre>
    <p>
      Nüfus ölçeğinde kullanışlıdır ancak bireyler için yanıltıcıdır. Kaslı bir sporcu, 28 BMI ve %10 vücut yağı ile "fazla kilolu" olarak kaydedilebilir. Aynı BMI'ye sahip hareketsiz bir ofis çalışanı %28 vücut yağı taşıyabilir. Vücut yağ yüzdesi, BMI'nin yaklaşık olarak tahmin etmeye çalıştığı şey olan vücut kompozisyonunu düzeltir.
    </p>

    <h2>2. ABD Donanması bant yöntemi</h2>
    <p>
      En pratik ücretsiz yöntem. Yumuşak bir mezura gerektirir. Ölçümler:
    </p>
    <ul>
      <li><strong>Erkekler:</strong> boyun, göbek deliğinden bel</li>
      <li><strong>Kadınlar:</strong> boyun, göbek deliğinden bel, en geniş yerden kalça</li>
    </ul>
    <p>
      Artı boy. Formüller (inç cinsinden):
    </p>
    <pre>{`Erkekler:   %VY = 86.010 × log10(bel - boyun) - 70.041 × log10(boy) + 36.76
Kadınlar: %VY = 163.205 × log10(bel + kalça - boyun) - 97.684 × log10(boy) - 78.387`}</pre>
    <p>
      Hata aralığı: ±%3-4. ABD ordusu tarafından fitness uyumu için kullanılır. Ortalama yapılar için çok zayıf veya çok ağır deneklerden daha iyi çalışır.
    </p>

    <h2>3. Deri kıvrım kaliperleri</h2>
    <p>
      Belirlenen bölgelerde (tipik olarak 3 veya 7) bir deri-artı-yağ kıvrımını sıkıştırın ve kalınlığı milimetre cinsinden okuyun. Erkekler için Jackson-Pollock 3 bölgeli (göğüs, karın, uyluk) ve kadınlar için (triseps, suprailiak, uyluk) en yaygın olanıdır. Ucuz kaliperler 20 dolardan başlar; profesyonel modeller 200 doların üzerindedir.
    </p>
    <p>
      Doğruluk neredeyse tamamen <strong>teknisyen becerisine</strong> bağlıdır. Eğitimli bir değerlendirici ±%3'e ulaşabilir. Kendi kendini ölçen bir acemi %8 veya daha fazla sapma gösterebilir. Bu yolu seçerseniz, aynı bölgeleri günün aynı saatinde, ayakta, susuz kalmamış halde ölçün.
    </p>

    <h2>4. DEXA taramaları</h2>
    <p>
      Çift enerjili X-ışını absorpsiyometrisi, düşük doz X-ışınları kullanarak vücudunuzu kemik, yağsız doku ve yağ olarak ayırır. Hata: ±%1-2. Ayrıca bölgesel dağılım (kollar, bacaklar, gövde) ve kemik yoğunluğu verir. Maliyet: ABD'de tarama başına 50-150 dolar, bazı İngiltere NHS yollarında ücretsiz. Her 3-6 ayda bir değişiklikleri takip etmek için DEXA makul bir altın standarttır.
    </p>

    <h2>5. Hidrostatik tartım ve BodPod</h2>
    <p>
      Hidrostatik: suya daldırın ve yer değiştirmeyi ölçün. Hata: ±%1,5. Erişimi zordur. BodPod hava yer değiştirmesini kullanır ve benzer doğrulukla daha kullanışlıdır. Her ikisi de üniversite kinezyoloji laboratuvarlarında 25-75 dolara mevcuttur. Geçerli araştırma yöntemleridir ancak tekrarlanan ev kullanımı için nadiren pratiktir.
    </p>

    <h2>6. Biyoelektrik empedans (BIA) tartıları</h2>
    <p>
      Tüketici akıllı tartıları, vücuttan küçük bir akım geçirir ve dirençten yağ tahmin eder. <em>Hata her iki yönde de %5'i aşabilir</em> ve okumalar hidrasyonla günden güne değişir. Yalnızca ayaklı tartılar (Fitbit Aria, Renpho) en az doğru olanlardır; 8 elektrotlu tartılar (Tanita, Omron el-ayak) daha iyidir. Mutlak sayılar için değil, haftalar boyunca <strong>eğilimleri</strong> takip etmek için kullanışlıdır, her gün aynı saatte ölçüm yapılırsa.
    </p>

    <h2>7. Fotoğraflar ve ayna testi</h2>
    <p>
      Aynı aydınlatma ve kıyafetle aylık ön/yan/arka fotoğraflar, herhangi bir sayısal yöntemin gözden kaçırabileceği ilerlemeyi gösterir. 3-4 vücut bölgesinde (göğüs, bel, kalça, uyluk) bant ölçümleriyle birleştirildiğinde, bu herhangi bir yüzdeden daha ucuz, daha görsel ve tartışmasız daha motive edicidir. Sayılar yalan söyler; fotoğraflar söylemez.
    </p>

    <h2>8. Cinsiyete göre sağlık aralıkları</h2>
    <p>
      Amerikan Egzersiz Konseyi'nin yetişkinler için aralıkları:
    </p>
    <ul>
      <li>Temel yağ: erkekler %2-5, kadınlar %10-13</li>
      <li>Sporcular: erkekler %6-13, kadınlar %14-20</li>
      <li>Fitness: erkekler %14-17, kadınlar %21-24</li>
      <li>Kabul edilebilir: erkekler %18-24, kadınlar %25-31</li>
      <li>Obez: erkekler %25+, kadınlar %32+</li>
    </ul>
    <p>
      Kadınlar biyolojik olarak daha fazla temel yağ taşır (üreme işlevi, hormonlar). %15 vücut yağı olan bir erkek ve %22 vücut yağı olan bir kadın eşit derecede zayıftır.
    </p>

    <h2>9. Yaş ayarlamaları</h2>
    <p>
      Sağlıklı vücut yağı, yağsız kütle azaldıkça yaşla birlikte hafifçe artar. Aktif olarak direnç antrenmanı yapmıyorsanız, 30 yaşından sonra her on yılda "kabul edilebilir" aralıklara yaklaşık %1-2 ekleyin. Sarkopeni (yaşa bağlı kas kaybı) 50 civarında hızlanmaya başlar; orta yaştan sonra düşük vücut yağı sayılarının peşinden koşmaktan çok yağsız kütleyi korumak daha önemlidir.
    </p>

    <h2>10. Bel çevresinin tek başına neden kullanışlı olduğu</h2>
    <p>
      Sağlık riski için, bel-boy oranı basitlik açısından vücut yağ yüzdesini geçer:
    </p>
    <pre>{`Bel çevresini boyunuzun yarısından az tutun`}</pre>
    <p>
      5'10" boyundaki biri için bu 35 inçtir. Bunun üzerinde, toplam vücut yağından bağımsız olarak iç organ yağı riski artar. Tek bir bant ölçümü çoğu kardiyovasküler riski yakalar.
    </p>

    <h2>11. Mutlak sayıları değil, değişiklikleri takip etmek</h2>
    <p>
      Her yöntemin sistematik bir yanlılığı vardır. BIA tartınız %22 ve DEXA %18 derse, her iki sayı da yine de tutarlı bir şekilde ilerleme gösterebilir. Bir yöntem seçin, haftanın aynı günü, aynı saatte, aynı hidrasyon durumunda, aylarca kullanın. Mutlak sayıdan çok yön ve eğim önemlidir.
    </p>

    <h2>12. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Yöntemleri karşılaştırmak.</strong> Bir BIA tartısı ve bir DEXA, aynı kişiye aynı günde farklı sayılar verecektir. Kaynakları karıştırmayın.
      </li>
      <li>
        <strong>Tutarsız ölçüm yapmak.</strong> Sabah aç karnına vs akşam antrenman sonrası BIA okumalarını %3-5 oynatabilir. Koşulları sabitleyin.
      </li>
      <li>
        <strong>Tek haneli vücut yağının peşinden koşmak.</strong> Erkekler için yaklaşık %8'in ve kadınlar için yaklaşık %14'ün altında hormonlar, uyku, ruh hali ve bağışıklık işlevi bozulur.
      </li>
      <li>
        <strong>Bant ölçüm tekniğinde kayma.</strong> Çok sıkı veya çok gevşek çekin ve Donanma formülü bozulur. Her seferinde aynı gerilimi kullanın.
      </li>
      <li>
        <strong>Takıntı haline getirmek.</strong> Bel ölçüsü, güç sayıları ve kıyafetlerin uyumu genellikle bir yüzdeden daha iyi gerçek dünya geri bildirimidir.
      </li>
    </ul>

    <h2>13. Sayıları hesaplayın</h2>
    <p>
      Donanma yöntemini kullanarak bir tahmin almak için aşağıya bant ölçümlerinizi girin, ardından tam bir resim elde etmek için bunu BMR ve BMI sayılarınızla karşılaştırın.
    </p>
    <p>
      <a href="/tools/body-fat-calculator">Vücut yağı hesaplayıcı</a>
      <a href="/tools/bmr-calculator">BMR hesaplayıcı</a>
      <a href="/tools/bmi-calculator">BMI hesaplayıcı</a>
    </p>
  </>
);