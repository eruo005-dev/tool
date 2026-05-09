import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Kafein, gezegende en çok kullanılan psikoaktif maddedir ve aynı zamanda çoğu kullanıcının hislerine göre yönettiği maddedir. Faydalarını çöküş, titreme ve bozulmuş uyku olmadan elde etmenin gerçek kuralları sıkıcı ama somuttur: günde 400 mg'ın altında kalın, kesme zamanı seçerken 5-6 saatlik yarı ömre saygı gösterin, toleransın sabah dozunu bir yoksunluk bandına dönüştürdüğünü fark edin ve hesaplamayı değiştiren popülasyonlar ile ilaçlara göre ayarlama yapın. Bu rehber, mevcut güvenli alım tavanlarını, uyku bozulmasını tahmin eden yarı ömür matematiğini, toleransın nasıl oluştuğunu ve sıfırlandığını, yoksunluk haftasından kaçınan azaltma planını ve herkesten daha düşük bir tavana ihtiyaç duyan grupları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Günlük tavanlar</h2>
    <p>
      Sağlıklı yetişkinler için fikir birliği olan üst sınırlar:
    </p>
    <pre>{`FDA / EFSA yetişkinler:         400 mg/gün (~4 fincan demlenmiş kahve)
Tek doz:                       200 mg       (EFSA "güvenli tek doz")
Hamilelik:                     200 mg/gün   (yarıya indirilmiş)
Ergenler (12-18):              100 mg/gün
Çocuklar (12 yaş altı):        önerilmez, eğer verilecekse <2.5 mg/kg`}</pre>
    <p>
      400 mg bir tavandır, hedef değil. Çoğu insan kendini en iyi 150-300 mg aralığında hisseder. Sürekli olarak 400'e yaklaşmak toleransı hızla artırır ve gerçekten ekstra desteğe ihtiyacınız olduğunda kalan marjı tüketir.
    </p>

    <h2>Miligramlar nerede saklanıyor</h2>
    <pre>{`Filtre kahve, 240 ml:              80-120 mg
Espresso shot:                     60-75 mg
Soğuk demleme, 480 ml:             200-300 mg (daha yüksek olabilir)
Siyah çay, 240 ml:                 40-70 mg
Yeşil çay, 240 ml:                 30-50 mg
Matcha, 1 çay kaşığı:              60-80 mg
Yerba mate, 240 ml:                40-90 mg
Enerji içeceği, 480 ml:            150-300 mg
Antrenman öncesi tozu, 1 ölçek:    150-300 mg
Bitter çikolata, 28 gr:            12-25 mg
Coca-Cola, 355 ml:                 35 mg
Mountain Dew, 355 ml:              55 mg
Excedrin, 1 tablet:                65 mg
Kafein hapı (No-Doz):             200 mg`}</pre>
    <p>
      Soğuk demleme ve enerji içecekleri genellikle sinsi bir şekilde aşım yaptıranlardır. 600 ml'lik bir soğuk demleme tek başına 400 mg olabilir &mdash; tüm günlük bütçeniz bir fincanda.
    </p>

    <h2>5-6 saatlik yarı ömür</h2>
    <p>
      Kafein öngörülebilir bir bozunma ile temizlenir. Sağlıklı yetişkinlerde yarı ömür ortalama 5 saattir (karaciğer enzimlerine, sigara içmeye, hamileliğe, ilaçlara bağlı olarak 2-9 saat aralığı).
    </p>
    <pre>{`200 mg öğlen 12'de, 5 saat yarı ömür:
14:00   150 mg
17:00   100 mg
22:00    50 mg   <-- hala anlamlı şekilde uyarılmış
03:00    25 mg   <-- gece uykusunu parçalar`}</pre>
    <p>
      Bu nedenle öğleden sonra kahvesi, "hâlâ rahatça uykuya dalabiliyorsanız" bile uykuyu mahveder. Uykuya dalarsınız; sadece daha kötü uyursunuz.
    </p>

    <h2>Yatmadan önce kesme zamanı</h2>
    <p>
      Kanıta dayalı kesme zamanı: <strong>Hedeflenen uyku saatinden 8-10 saat önce</strong>, yavaş metabolize ediyorsanız daha da erken.
    </p>
    <pre>{`22:00 yatış:    son kafein 12:00-14:00 arası
23:00 yatış:    son kafein 13:00-15:00 arası
00:00 yatış:    son kafein 14:00-16:00 arası`}</pre>
    <p>
      "Saat 22:00'de espresso içerim ve uyurum." Muhtemelen uykuya dalabilirsiniz. Uyku çalışmaları, geç kafein alan alışkın içicilerde bile derin uyku parçalanmasında artış olduğunu göstermektedir. Subjektif his ("iyi uyudum") objektif ölçümün gerisinde kalır.
    </p>

    <h2>Tolerans</h2>
    <p>
      Düzenli kafein kullanımı adenosin reseptörlerini aşağı regüle eder. 7-14 gün içinde "normal uyanıklığınız", "kafeinli uyanıklığınız" haline gelir &mdash; sabah dozu artık temel seviyeyi yükseltmez, yoksunluğu uzak tutar.
    </p>
    <p>
      Tolerans bölgesinde olduğunuzun işaretleri:
    </p>
    <ul>
      <li>İlk fincan hiçbir şey hissettirmez; ikinci fincan "tamam, uyanık" gibi hissettirir</li>
      <li>Toplam 300+ mg alıma rağmen öğleden sonra çöküşü</li>
      <li>Geç uyursanız hafta sonları saat 11:00'de baş ağrısı</li>
      <li>Dozlar sürekli artıyor</li>
    </ul>

    <h2>Tolerans sıfırlama</h2>
    <p>
      Tam sıfırlama 7-14 gün ara vermeyi gerektirir. Daha kısa aralar (2-3 gün) kısmen sıfırlar ancak tam olarak değil. Seçenekler:
    </p>
    <p>
      <strong>Aniden bırakma.</strong> İşe yarar. İlk 2-4 gün zordur (baş ağrısı, yorgunluk, düşük ruh hali). 5. günden itibaren düzelir.
    </p>
    <p>
      <strong>Azaltma.</strong> Her 3 günde bir alımı yarıya indirin, tamamen bırakana kadar. Daha hafif yoksunluk, daha yavaş sıfırlama.
    </p>
    <p>
      <strong>Hedefli döngü.</strong> Yoğun kullanım haftaları, ardından hafif kullanım haftaları. Bazı sporcular, kafeini temel seviye yerine etkili bir ergojenik yardım olarak tutmak için bunu kullanır.
    </p>

    <h2>Yoksunluk</h2>
    <pre>{`Başlangıç:        Son dozdan 12-24 saat sonra
Tepe noktası:     24-48 saat
Süre:             Tipik olarak 2-9 gün
Belirtiler:       baş ağrısı, yorgunluk, beyin sisi, sinirlilik,
                  düşük ruh hali, azalmış bilişsel performans`}</pre>
    <p>
      Yoksunluk, kafeinin bir bağımlılık maddesi olarak sınıflandırılmasının meşru bir nedenidir. Gerçektir, öngörülebilirdir ve geçicidir. Kahvesiz bir hafta sonundan sonra "Pazartesi'ye ne oldu" deneyimini yaşadıysanız, yoksunluk yaşamışsınızdır.
    </p>

    <h2>Hassas popülasyonlar</h2>
    <p>
      Bazı gruplar kafeini daha yavaş metabolize eder veya daha düşük güvenli tavanlara sahiptir:
    </p>
    <ul>
      <li>
        <strong>Hamilelik:</strong> yarı ömür 3. trimesterde kabaca iki katına çıkar. 200 mg/gün tavanı.
      </li>
      <li>
        <strong>Doğum kontrol hapı kullananlar:</strong> yarı ömür ~%40 daha uzun. Genellikle insanları şaşırtır.
      </li>
      <li>
        <strong>Karaciğer hastalığı:</strong> çok daha yavaş temizlenme. Sadece tıbbi tavsiye ile.
      </li>
      <li>
        <strong>SSRI'lar / bazı antipsikotikler / kinolon antibiyotikler:</strong>{" "}
        daha yavaş temizlenme veya artan titreme.
      </li>
      <li>
        <strong>Genetik yavaş metabolize ediciler (CYP1A2 varyantları):</strong>{" "}
        İnsanların ~%10'u kafeini çok daha yavaş temizler; öğleden sonra kahvesi onları gerçekten bütün gece uyanık tutabilir.
      </li>
      <li>
        <strong>Kardiyak aritmiler:</strong> kliniğe danışın; kafein atakları tetikleyebilir.
      </li>
    </ul>

    <h2>Antrenman öncesi kafein</h2>
    <p>
      Kanıta dayalı performans artışı: Vücut ağırlığının kg'ı başına 3-6 mg, egzersizden 30-60 dakika önce. 80 kg'lık bir kişi için bu 240-480 mg'dır. Antrenman öncesi tozları genellikle kasıtlı olarak bu aralıktadır.
    </p>
    <p>
      Etkisi: Dayanıklılık performansında ~%2-5 artış, iyileştirilmiş güç çıkışı, algılanan eforda subjektif azalma. Tolerans etkiyi köreltir &mdash; sporcular genellikle yarışmadan önce "yeniden hassaslaştırmak" için bir hafta ara verir.
    </p>

    <h2>Hidrasyon ve uyku ile etkileşimler</h2>
    <p>
      Kafeinin hafif bir idrar söktürücü etkisi vardır ancak alışkın içiciler için net dehidrasyona neden olmaz. Normal dozlarda günlük su alımından kahveyi çıkarmak konusunda endişelenmeyin. Günün ikinci yarısı hakkında endişelenin: öğleden sonra 3'ten sonra 100 mg bile bazı insanlarda uykuyu parçalayabilir.
    </p>

    <h2>Örnek bir program</h2>
    <pre>{`07:00    uyanış
07:30    ilk kahve (120 mg)
10:00    ikinci kahve veya çay (80 mg)     -- günlük toplam ~200 mg
12:00    istenirse çay (50 mg)
14:00    son kafein, daha fazla yok
22:00    yatış (kesmeden 8 saat sonra)

Haftalık toplam: ~1,400 mg  (tavanın altında, tolerans altı)`}</pre>

    <h2>Sık yapılan hatalar</h2>
    <p>
      <strong>Sadece kahveyi saymak.</strong> Çay, çikolata, antrenman öncesi, enerji içecekleri, ilaçların hepsi eklenir. Kahveden temiz 200 mg artı 300 mg antrenman öncesi tozu 200 değil 500 eder.
    </p>
    <p>
      <strong>Uykuya dalıyorsanız geç kafeinin sorun olmadığını varsanmak.</strong>{" "}
      Uyku kalitesi, uykuya dalmada sorun olmasa bile düşer. Özellikle derin uyku zarar görür.
    </p>
    <p>
      <strong>Toleransı daha fazla içerek yenmeye çalışmak.</strong> Dozu iki katına çıkarmak toleransı orantılı olarak yeniden inşa eder. Etkinliğe dönüşün tek yolu sıfırlamadır.
    </p>
    <p>
      <strong>Zor bir haftada aniden bırakmak.</strong> Üç verimli gün kaybolur. Azaltın veya bırakmayı düşük riskli bir haftaya denk getirin.
    </p>
    <p>
      <strong>Soğuk demleme konsantrasyonunu görmezden gelmek.</strong> Soğuk demleme genellikle normal filtre kahvenin 2-3 katı kafein içerir. 480 ml soğuk demleme, 480 ml filtre kahve değildir.
    </p>
    <p>
      <strong>Enerji içeceklerini hidrasyon sanmak.</strong> Bunlar bir kafein dağıtım sistemidir, su değil. Yanında su için.
    </p>
    <p>
      <strong>Kesme zamanının olmaması.</strong> Sabit bir "son doz" kuralı olmadan, öğleden sonraki düşüşler sizi geç saatlerde kafein almaya iter, bu da ertesi gece uykusunu mahveder ve bu da ertesi öğleden sonra düşüşüne neden olur.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Günlük alımınızı{" "}
      <a href="/tools/caffeine-intake-calculator">kafein alım hesaplayıcısına</a>{" "}
      kaydedin, kalan kan seviyelerini yatış saatinize göre haritalandırsın. Toplam hidrasyonu{" "}
      <a href="/tools/water-intake-calculator">su alım hesaplayıcısında</a>{" "}
      takip edin ve{" "}
      <a href="/tools/sleep-cycle-calculator">uyku döngüsü hesaplayıcısının</a>{" "}
      kafein kesme zamanınızın saygı duyması gereken yatış saatini belirlemesine izin verin.
    </p>
  </>
);