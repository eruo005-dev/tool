import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Protein, neredeyse herkesin yağ yakmaya, kas yapmaya veya yaşlanmaya karşı koymaya çalışırken yetersiz tükettiği tek makro besindir. 0,8 g/kg'lık varsayılan öneri, hareketsiz yetişkinlerde eksikliği önlemek için tasarlanmıştır, vücut kompozisyonunu optimize etmek için değil. Modern spor beslenmesi araştırmaları, sıkı antrenman yapan herkes için tutarlı bir şekilde <strong>1,6-2,2 g/kg</strong> seviyesinde durmaktadır. Bu hedefe ulaşmak planlama gerektirir: proteini öğünlere yaymak, her seferinde lösin eşiğine ulaşmak ve hangi besinlerin gerçekten işe yaradığını bilmek. Bu rehber, hedefleri, dağılımı ve ister hayvansal ister bitkisel beslenin, sizi hedefe ulaştıracak belirli besinleri adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. &ldquo;g/kg&rdquo; gerçekte ne anlama geliyor</h2>
    <p>
      Hedefler, günde vücut ağırlığının kilogramı başına gram protein cinsinden ifade edilir. 70 kg (154 lb) ağırlığındaki bir kişi 1,8 g/kg tüketiyorsa, <code>70 × 1,8 = günde 126g protein</code> ihtiyacı vardır. Pound cinsinden kaba kestirme &ldquo;pound başına gram = 0,7-1,0&rdquo; şeklindedir — pratik planlama için yeterince yakındır.
    </p>

    <h2>2. Amaca göre hedef aralıklar</h2>
    <ul>
      <li><strong>Hareketsiz yaşam / koruma:</strong> 0,8 g/kg (GDA tabanı, optimal değil)</li>
      <li><strong>Genel sağlık / aktif yetişkin:</strong> 1,2-1,6 g/kg</li>
      <li><strong>Kas yapma (kuvvet antrenmanı):</strong> 1,6-2,2 g/kg</li>
      <li><strong>Kas koruyarak yağ kaybı:</strong> 1,8-2,4 g/kg</li>
      <li><strong>Yaşlı yetişkinler (50+):</strong> Sarkopeniyle mücadele için 1,2-1,6 g/kg</li>
      <li><strong>Dayanıklılık sporcuları:</strong> 1,4-1,8 g/kg</li>
    </ul>
    <p>
      Bu aralıkların üst sınırı sağlıklı böbrekler için tehlikeli değildir — onlarca yıllık araştırma, sporcularda 3+ g/kg'a kadar herhangi bir zarar göstermemiştir. Sınırlayıcı faktörler iştah ve bütçedir, güvenlik değil.
    </p>

    <h2>3. 3-5 öğüne dağıtın</h2>
    <p>
      <a href="/learn/protein-synthesis">Kas protein sentezi</a>, protein içeren her öğünden sonra zirve yapar ve ardından taban seviyesine döner. Tek seferde 150g protein yemek, bunu ~37g'lık 4 öğüne bölmekten daha az etkilidir. Her 3-5 saatte bir, öğün başına <strong>0,3-0,4 g/kg</strong> hedefleyin. 70 kg'lık bir kişi için bu, öğün başına 25-30g'dır.
    </p>

    <h2>4. Lösin eşiği</h2>
    <p>
      Lösin, kas protein sentezini tetikleyen amino asittir. Tam bir anabolik yanıt için eşik, öğün başına kabaca <strong>2,5-3g lösin</strong>dir; bu da ~25-30g yüksek kaliteli hayvansal proteine veya ~40g bitkisel proteine karşılık gelir. Bu eşiğin altında sinyal zayıftır. Üstünde ise azalan getiri söz konusudur. Her öğün lösin çizgisini geçmelidir.
    </p>

    <h2>5. Yaygın hayvansal besinlerin protein içeriği</h2>
    <ul>
      <li>Tavuk göğsü (100g pişmiş): 31g protein</li>
      <li>Yağsız sığır eti (100g pişmiş): 26g protein</li>
      <li>Somon (100g pişmiş): 25g protein</li>
      <li>Yunan yoğurdu (200g, %0 yağ): 20g protein</li>
      <li>Süzme peynir (100g): 11g protein</li>
      <li>Yumurta (2 büyük): 12g protein</li>
      <li>Peynir altı suyu proteini ölçeği (30g): 24g protein</li>
      <li>Ton balığı konservesi (süzülmüş, 120g): 26g protein</li>
    </ul>

    <h2>6. Hedefe ulaştıran bitkisel protein kaynakları</h2>
    <p>
      Veganların biraz daha fazla toplam proteine ihtiyacı vardır (~%10 ekleyin) çünkü bitkisel proteinler daha az sindirilebilir ve lösin oranı daha düşüktür. Yine de aşağıdakilerle kolayca ulaşılabilir:
    </p>
    <ul>
      <li>Sert tofu (100g): 15g protein</li>
      <li>Tempeh (100g): 20g protein</li>
      <li>Seitan (100g): 25g protein</li>
      <li>Mercimek, pişmiş (200g): 18g protein</li>
      <li>Edamame (100g): 11g protein</li>
      <li>Soya sütü (250ml): 7-8g protein</li>
      <li>Bezelye veya soya proteini ölçeği (30g): 24g protein</li>
      <li>Nohut, pişmiş (200g): 15g protein</li>
    </ul>
    <p>
      Soya ve bezelye proteini izolatları, peynir altı suyu proteini kadar kolaylıkla lösin eşiğini geçer. Karışık tahıl-baklagil öğünleri de işe yarar (pirinç + fasulye, humus + pide).
    </p>

    <h2>7. 150g için örnek bir gün</h2>
    <pre>{`Kahvaltı: 3 yumurta + 200g Yunan yoğurdu        → 38g
Öğle:     150g tavuk göğsü + kinoa            → 50g
Ara öğün: peynir altı suyu ölçeği + süt       → 32g
Akşam:    200g somon + mercimek               → 60g
Toplam:                                         180g`}</pre>
    <p>
      Bilinçli planlandığında hedefi aşmak kolaydır. Zor olan kısım, kahvaltıda ilk 30g'a ulaşmaktır — çoğu Batı kahvaltısı protein açısından fakirdir.
    </p>

    <h2>8. Önce kahvaltıyı düzeltin</h2>
    <p>
      Tipik bir kahvaltı (tost, mısır gevreği, poğaça, kahve) 5-10g protein sağlar. Bu, kas yapma açısından boşa harcanmış bir öğündür. Bunun yerine Yunan yoğurdu, yumurta, süzme peynir, füme somon, tofu karıştırması veya bir peynir altı suyu içeceği koyun. Kahvaltıyı 30g'a çıkarmak, çoğu protein alımı sorununu tek başına çözer.
    </p>

    <h2>9. Takviyeye ihtiyacınız var mı?</h2>
    <p>
      Hayır, ancak kullanışlıdırlar. Bir peynir altı suyu veya bitkisel protein içeceği, porsiyon başına 25g eklemenin en ucuz ve en hızlı yoludur. Günde bir ölçek, kabaca 1/3 maliyetle ve 10 saniyelik hazırlıkla 150g tavuk göğsünün yerini alır. Sihirli bir değnek değil — sadece verimli bir besindir.
    </p>

    <h2>10. Böbrekler, kemikler ve eski mitler</h2>
    <p>
      &ldquo;Yüksek protein böbreklere zarar verir&rdquo; iddiası, önceden böbrek hastalığı olan kişiler için geçerlidir. Sağlıklı yetişkinlerde, 2-3 g/kg alımının böbrek fonksiyonu üzerinde olumsuz bir etkisi yoktur. &ldquo;Protein kemiklerden kalsiyum sızdırır&rdquo; efsanesi onlarca yıl önce çürütüldü — kalsiyum yeterli olduğunda daha yüksek protein alımı, daha iyi kemik yoğunluğu ile ilişkilidir.
    </p>

    <h2>11. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Porsiyonları göz kararı tahmin etmek.</strong> Bir &ldquo;tavuk göğsü&rdquo; 80g ile 300g arasında değişir. Kalibrasyon yapmak için iki hafta boyunca yiyecekleri tartın.
      </li>
      <li>
        <strong>Toplam yiyecek ağırlığını protein olarak saymak.</strong> 100g yoğurt, 100g protein değildir — türüne bağlı olarak 5-20g'dır.
      </li>
      <li>
        <strong>Kahvaltıda proteini atlamak.</strong> Günlük hedefi etkili bir şekilde akşam yemeğine sıkıştıramazsınız.
      </li>
      <li>
        <strong>&ldquo;Yüksek protein&rdquo; etiketlerine güvenmek.</strong> Birçok ürün, porsiyon başına 15g olarak pazarlanır ancak çoğu insanın iki katına çıkardığı 50g'lık porsiyonlar kullanır. 100g başına sütunları okuyun.
      </li>
      <li>
        <strong>Bitkisel proteinin eksikliğini görmezden gelmek.</strong> Tek bir bitkisel kaynak, temel bir amino asitte düşük olabilir — gün boyunca kaynakları çeşitlendirin.
      </li>
    </ul>

    <h2>12. Rakamları hesaplayın</h2>
    <p>
      Kişiselleştirilmiş bir g/gün hedefi almak için aşağıya kilonuzu ve antrenman durumunuzu girin, ardından bunu günlük kalori ve makro planınıza yerleştirin.
    </p>
    <p>
      <a href="/tools/protein-intake-calculator">Protein alımı hesaplayıcısı</a>
      <a href="/tools/macro-calculator">Makro hesaplayıcı</a>
      <a href="/tools/calorie-calculator">Kalori hesaplayıcı</a>
    </p>
  </>
);