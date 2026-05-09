import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Acil durum fonu, kişisel finansın en düşük teknolojili, en yüksek değerli parçasıdır. Klasik kural, bir iş kaybı, tıbbi fatura veya büyük bir onarım durumunda sizi kredi kartı borcuna veya yanlış zamanda yatırım satmaya zorlamadan hazır olacak şekilde, likit ve düşük riskli bir hesapta <strong>3-6 aylık temel harcamalar</strong> bulundurmaktır. Çoğu kişi ya bu adımı tamamen atlar (krediye güvenerek) ya da aşırıya kaçıp 2 yıllık harcamayı hiçbir şey kazandırmayan tasarrufta tutar. Bu rehber, gerçekte ne kadar ihtiyacınız olduğunu, "harcama" olarak neyin sayıldığını, parayı nerede tutmanız gerektiğini ve diğer hedeflerinizi durdurmadan nasıl biriktireceğinizi adım adım anlatır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. Acil durum fonu neden neredeyse her şeyden önce gelir</h2>
    <p>
      Federal Rezerv anketi, ABD'li yetişkinlerin <strong>~%35'inin</strong> beklenmedik 400 dolarlık bir masrafı borçlanmadan karşılayamadığını ortaya koyuyor. Araba bozulduğunda, bu en az %20+ faizli bir kredi kartı veya %400+ <a href="/learn/apr">APR</a> ile bir maaş günü kredisi anlamına gelir. Bu faiz oranları, fonu atlayarak elde edeceğiniz herhangi bir yatırım getirisini gölgede bırakır. Acil durum tasarrufu savunma sermayesidir: görevi büyümek değil, hayat olayları gerçekleştiğinde finansal durumunuzun çökmesini önlemektir.
    </p>

    <h2>2. 3-6 ay kuralı</h2>
    <p>
      <strong>Temel</strong> aylık harcamalarınızın 3-6 ayını hedefleyin:
    </p>
    <ul>
      <li>Tek gelirli hane, istikrarlı W-2: 3 ay</li>
      <li>Çift gelirli, her ikisi de istikrarlı: 3 ay</li>
      <li>Tek ebeveyn, tek gelir, küçük çocuklar: 6 ay</li>
      <li>Serbest çalışan, freelance, komisyonlu: 6-9 ay</li>
      <li>Emekliliğe yakın, sabit gelire geçiş: 6-12 ay</li>
      <li>Yüksek gelirli ancak değişken (teknoloji, satış, startup): 6 ay</li>
    </ul>

    <h2>3. "Temel harcama" olarak ne sayılır</h2>
    <p>
      Yarın işinizi kaybetseniz bile ödemek zorunda kalacağınız harcamalar:
    </p>
    <ul>
      <li>Kira veya ipotek (ek anapara değil)</li>
      <li>Faturalar, internet (temel paket)</li>
      <li>Market alışverişi (normal, kısılmış değil)</li>
      <li>Sigorta: sağlık, araba, ev/kiracı</li>
      <li>Ulaşım: yakıt, toplu taşıma, araba sigortası</li>
      <li>Asgari borç ödemeleri (ekstra ödeme değil)</li>
      <li>Çocuk bakımı (iş aramak için gerekliyse)</li>
      <li>Telefon</li>
    </ul>
    <p>
      Hariç: dışarıda yemek, iptal edeceğiniz abonelikler, seyahat, spor salonu üyelikleri, isteğe bağlı alışveriş, emeklilik katkıları.
    </p>

    <h2>4. Örnek bir hesaplama</h2>
    <pre>{`Kira:            $1,800
Faturalar/telefon:   $250
Market:         $600
Sigorta:         $350
Ulaşım:         $200
Asgari borç ödemeleri:     $300
Ara toplam:        $3,500

3 aylık fon:  $10,500
6 aylık fon:  $21,000`}</pre>
    <p>
      Temel sayı neredeyse her zaman mevcut harcamanızdan düşüktür. Birçok kişi "aylık yaşam tarzı" ile "aylık hayatta kalma"yı karıştırır.
    </p>

    <h2>5. Nerede tutulmalı</h2>
    <p>
      Acil durum tasarrufları <strong>likit</strong> (1-2 iş günü içinde erişilebilir), <strong>güvenli</strong> (anapara riski yok) ve <strong>bir miktar kazandıran</strong> olmalıdır. 2026'daki en iyi seçenekler:
    </p>
    <ul>
      <li>Yüksek getirili tasarruf hesabı (HYSA): %4-5 <a href="/learn/apy">APY</a>, FDIC sigortalı</li>
      <li>Para piyasası fonu: benzer getiri, aracı kurumda tutulur</li>
      <li>Kısa vadeli Hazine bonoları (4-26 hafta): eyalet vergisinden muaf</li>
      <li>Bir kısmı için I-bond'lar (12 aylık kilitlenme süresinden sonra)</li>
    </ul>
    <p>
      Kaçının: 3 aydan uzun vadeli mevduatlar, süre riski olan tahvil fonları, hisse senetleri, kripto. Amaç getiri optimizasyonu değil, istikrardır.
    </p>

    <h2>6. Nerede <em>tutulmamalı</em></h2>
    <ul>
      <li>Vadesiz hesap: faiz yok, kullanma cazibesi yüksek</li>
      <li>Normal aracı kurumda hisse senetleri: tam ihtiyacınız olduğunda %40 düşebilir</li>
      <li>Fiziksel nakit: faiz yok, yangın/hırsızlık riski, kullanımı zor</li>
      <li>Kripto: değişken ve zayıf sigortalı</li>
      <li>401(k) veya IRA: erken erişimde cezalar ve gecikmeler</li>
    </ul>

    <h2>7. Aşamalı olarak biriktirin</h2>
    <p>
      Başka hiçbir şey yapmadan önce 6 ayı peşin doldurmaya çalışmayın. Mantıklı ilerleme:
    </p>
    <ol>
      <li>1.000 dolarlık başlangıç fonu (çoğu küçük acil durumu karşılar)</li>
      <li>%10 APR üzerindeki kredi kartı borçlarını ödeyin</li>
      <li>1 aylık fon</li>
      <li>İşverenin 401(k) eşleştirmesinin tamamı</li>
      <li>3 aylık fon</li>
      <li>Roth IRA'yı maksimize edin, 6 aylık fona ulaşın</li>
    </ol>
    <p>
      Başlangıçtaki 1.000 dolar, mevcut yüksek faizli borçları öderken çoğu acil durumun borca dönüşmesini engeller.
    </p>

    <h2>8. "HELOC acil durum fonu olarak" kısayolu</h2>
    <p>
      Ev sahipleri bazen şöyle der: "Nakit fona ihtiyacım yok, 100 bin dolarlık bir konut kredisi limitim var." Bu, tam da acil durum fonunun inşa edildiği senaryolarda başarısız olur — bankalar, işten çıkarmaların yaşandığı dönemlerde, tam da ihtiyaç duyulduğunda HELOC kullanılabilirliğini dondurma veya azaltma eğilimindedir. <strong>Acil durumlar için krediye güvenmeyin</strong>. Bir kredi limiti tamamlayıcı olabilir, ancak ikame olamaz.
    </p>

    <h2>9. Fon ne zaman kullanılır (ve ne zaman kullanılmaz)</h2>
    <p>
      Meşru kullanımlar: beklenmedik tıbbi fatura, iş kaybı, ertelenemeyecek büyük araba veya ev onarımı, aile acil durumu için seyahat.
    </p>
    <p>
      Meşru değil: tatil, yeni televizyon, yıllık sigorta primi (bu ayrı bir biriktirme fonudur), "indirimdeydi." Kullanırsanız, hemen yeniden biriktirin.
    </p>

    <h2>10. Bilinen harcamalar için ayrı biriktirme fonları</h2>
    <p>
      Yıllık sigorta, araba bakımı, tatil hediyeleri ve ev onarımları öngörülebilirdir. Bunlar için acil durum fonunu tüketmeyin — her kategori için ayrı tasarruf kovaları (aylık olarak fonlanan) oluşturun. Bu, acil durum fonunu gerçek acil durumlar için ayırır ve "her zaman olan" harcamaların şok gibi hissedilmesini önler.
    </p>

    <h2>11. Yıllık olarak yeniden ayarlama</h2>
    <p>
      Temel aylık harcamalarınız değişir: yeni daire, yeni bebek, ödenmiş araba. Yılda bir kez hesaplamayı tekrar yapın. Kira ayda 200 dolar arttıysa, 6 aylık hedefiniz 1.200 dolar arttı. Tersine, büyük bir borç ödemesi aylık ihtiyacınızı azaltabilir.
    </p>

    <h2>12. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Temel harcamalar yerine tam harcama üzerinden hesaplamak.</strong> İş kaybı sırasında dışarıda yemeyi kesebilirsiniz. 6 aylık yaşam tarzı genellikle gereksizdir.
      </li>
      <li>
        <strong>Vadesiz hesapta tutmak.</strong> %0 getiri, sağlıklı bir fonda yılda 500-1.000 dolara mal olur ve harcama sızıntıları daha olasıdır.
      </li>
      <li>
        <strong>Hisse senetlerine yatırmak.</strong> Getiri sırası riski, para küçükken ve en çok ihtiyaç duyulduğunda maksimumdur.
      </li>
      <li>
        <strong>Asla yeniden biriktirmemek.</strong> Bir acil durumdan sonra, öncelik diğer hedeflere devam etmeden önce yeniden doldurmaya kayar.
      </li>
      <li>
        <strong>Krediye acil durum fonu demek.</strong> Ekonomi kötüleştiğinde kredi buharlaşır.
      </li>
    </ul>

    <h2>13. Rakamları hesaplayın</h2>
    <p>
      Kesin bir tasarruf hedefi elde etmek için temel aylık harcamalarınızı ve hedef ay sayısını girin, ardından mevcut tasarruf oranınızda ne kadar sürede biriktireceğinizi modelleyin.
    </p>
    <p>
      <a href="/tools/emergency-fund-calculator">Acil durum fonu hesaplayıcısı</a>
      <a href="/tools/budget-calculator">Bütçe hesaplayıcısı</a>
      <a href="/tools/savings-goal-calculator">Tasarruf hedefi hesaplayıcısı</a>
    </p>
  </>
);