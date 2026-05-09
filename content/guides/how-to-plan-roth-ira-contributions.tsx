import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Roth IRA, ABD vergi kanunlarının orta gelirli tasarruf sahiplerine sunduğu en avantajlı vergi hesaplarından biridir. Vergi sonrası dolarlarla katkıda bulunursunuz; bu noktadan itibaren, her bir dolar büyüme ve her nitelikli para çekme işlemi ömür boyu vergiden muaftır. 2026 katkı limiti <strong>7.500$</strong>'dır (50 yaş ve üzeri için 8.500$). Püf noktası: gelir kademeli azaltma limitleri kimin doğrudan katkıda bulunabileceğini sınırlar, katkılar kazanılmış gelirden gelmelidir ve 5 yıl kuralı kazançların ne zaman cezasız hale geleceğini etkiler. Bu rehber, doğrudan katkıları, arka kapı Roth stratejisini, 5 yıl kurallarını, para çekme esnekliğini ve bir Roth IRA'yı emeklilik portföyünüzün geri kalanına nasıl yerleştireceğinizi kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. 2026 katkı limiti</h2>
    <ul>
      <li>50 yaş altı: <strong>7.500$</strong></li>
      <li>50 yaş ve üzeri: <strong>8.500$</strong> (1.000$ telafi katkısı dahil)</li>
      <li>Eş katkısı: çalışmayan eş, çalışan eşin gelirini kullanarak katkıda bulunabilir</li>
    </ul>
    <p>
      Bir önceki vergi yılı için katkıda bulunmak üzere bir sonraki yılın 15 Nisan'ına kadar süreniz vardır. Mümkünse yılın başında katkıda bulunun — piyasada daha fazla zaman geçirin.
    </p>

    <h2>2. 2026 için gelir kademeli azaltma limitleri</h2>
    <p>
      Roth IRA uygunluğu, Düzeltilmiş Brüt Gelir'e (MAGI) bağlı olarak daha yüksek gelirlerde kademeli olarak azalır:
    </p>
    <ul>
      <li><strong>Bekar:</strong> 150 bin $'a kadar tam katkı, 165 bin $'da kademeli olarak biter</li>
      <li><strong>Ortak başvuran evli:</strong> 236 bin $'a kadar tam, 246 bin $'da kademeli olarak biter</li>
      <li><strong>Ayrı başvuran evli:</strong> 0-10 bin $ arasında kademeli olarak biter (fiilen uygun değil)</li>
    </ul>
    <p>
      Bu eşiklerin üzerinde doğrudan katkılara izin verilmez. İşte bu noktada arka kapı Roth devreye girer.
    </p>

    <h2>3. Yüksek kazançlılar için arka kapı Roth</h2>
    <p>
      Kademeli azaltma limitlerinin üzerindeki vergi mükellefleri için yasal bir çözüm:
    </p>
    <ol>
      <li>Geleneksel bir IRA'ya 7.500 $ (vergi indirimi olmayan) katkıda bulunun</li>
      <li>Geleneksel IRA'yı bir Roth IRA'ya dönüştürün</li>
      <li>Vergi indirimi olmayan matrahı bildiren Form 8606'yı dosyalayın</li>
    </ol>
    <p>
      <strong>Oransal kural uyarısı:</strong> Geleneksel, SEP veya BASİT IRA'larınızda vergi öncesi paranız varsa, dönüşüm orantılı olarak vergilendirilir. İşlemi gerçekleştirmeden önce, dönüşümün temiz olması için vergi öncesi IRA bakiyelerinizi mevcut 401(k)'nıza aktarın.
    </p>

    <h2>4. Mega arka kapı Roth</h2>
    <p>
      401(k)'niz vergi sonrası katkılara ve görevdeyken dağıtıma izin veriyorsa, birleşik 70 bin $ limitine kadar katkıda bulunabilir, ardından vergi sonrası kısmı bir Roth IRA'ya dönüştürebilirsiniz. Potansiyel olarak yılda 30 bin-40 bin $ ek Roth alanı. Plan belgenizde "vergi sonrası" katkıları (Roth 401(k) ile karıştırılmamalıdır) ve plan içi dönüşümleri kontrol edin.
    </p>

    <h2>5. 5 yıl kuralları (iki tane vardır)</h2>
    <p>
      <strong>Kural 1: Kazançlar.</strong> Kazançları vergisiz ve cezasız çekmek için, Roth IRA'nın 5 yıl boyunca açık olması VE 59,5 yaşında olmanız gerekir.
    </p>
    <p>
      <strong>Kural 2: Dönüşümler.</strong> Her Roth dönüşümünün kendi 5 yıllık süresi vardır. Dönüştürülen tutarları 5 yıl içinde çekmek %10 ceza tetikler (59,5 yaş altı).
    </p>
    <p>
      Katkıların kendisi her zaman, her yaşta, herhangi bir zamanda vergisiz ve cezasız olarak çekilebilir.
    </p>

    <h2>6. Para çekme esnekliği</h2>
    <p>
      Katkılar üzerinden zaten vergi ödediğiniz için, IRS bunları herhangi bir zamanda, herhangi bir nedenle, vergi veya ceza olmadan çekmenize izin verir. Bu, Roth IRA'yı birçok tasarruf sahibi için fiili bir yedek acil durum fonu haline getirir. Bunu gelişigüzel kullanmayın — o alanı geri koyamazsınız — ancak bu seçeneğin orada olduğunu bilmek agresif bir şekilde katkıda bulunmayı kolaylaştırır.
    </p>

    <h2>7. Roth IRA ve Roth 401(k) karşılaştırması</h2>
    <ul>
      <li>IRA çok daha geniş yatırım seçeneklerine sahiptir (herhangi bir ETF, hisse senedi, yatırım fonu)</li>
      <li>IRA'da zorunlu asgari dağıtım (RMD) yoktur; Roth 401(k) RMD'leri de 2024'te kaldırılmıştır</li>
      <li>401(k) daha yüksek katkı limitlerine sahiptir (24 bin $'a karşı 7,5 bin $)</li>
      <li>401(k) işveren eşleştirmesi alır; IRA almaz</li>
      <li>IRA'da gelir kademeli azaltma vardır; 401(k)'de yoktur</li>
    </ul>
    <p>
      İkisini de kullanın. Daha yüksek limitler ve eşleştirme için 401(k) Roth; yatırım esnekliği için IRA Roth.
    </p>

    <h2>8. Roth'tan en çok kim kazanır</h2>
    <ul>
      <li>Önünde onlarca yıllık vergisiz bileşik getiri olan genç kazançlılar</li>
      <li>Geliri artacak olan kariyerinin başındaki çalışanlar</li>
      <li>Gelecekteki oran artışlarına karşı vergi çeşitliliği isteyen emekliler</li>
      <li>Vergisiz varlıkları mirasçılara bırakmak isteyenler</li>
      <li>Sosyal Güvenlik gelirinin kendilerini daha yüksek dilimlere itmesini bekleyen herkes</li>
    </ul>

    <h2>9. Emeklilikte vergi çeşitliliği</h2>
    <p>
      Tamamen geleneksel bir emeklilik portföyü sizi gelecekteki vergi oranı artışlarına karşı savunmasız bırakır. Tamamen Roth bir portföy ise en yüksek kazanç yıllarında kesintileri boşa harcar. Çoğu orta kariyer çalışanı için ideal oran <strong>kabaca %60-70 geleneksel, %30-40 Roth</strong>'tur — her yıl hangi hesaptan çekeceğinizi seçerek emeklilikte vergilendirilebilir geliri yönetme esnekliği sağlar.
    </p>

    <h2>10. Katkı zamanlaması ve dolar maliyeti ortalaması</h2>
    <p>
      1 Ocak'tan bir sonraki yılın 15 Nisan'ına kadar herhangi bir zamanda katkıda bulunabilirsiniz. Seçenekler:
    </p>
    <ul>
      <li>1 Ocak'ta toplu ödeme: piyasada en uzun süre, tarihsel olarak zamanın ~%65'inde kazanır</li>
      <li>Aylık (2026'da 625$/ay): duygusal olarak daha pürüzsüz, beklenen getiri biraz daha düşük</li>
      <li>Ani nakit akışı: elinize geçtiğinde toplu ödeme</li>
    </ul>
    <p>
      Üçü de "sonra hallederim" varsayılanından daha iyidir.
    </p>

    <h2>11. İlk kez ev alacaklar istisnası</h2>
    <p>
      İlk kez ev satın alımı için Roth IRA kazançlarının 10.000 $'a kadarı cezasız (ve 5+ yıldır varsa vergisiz) çekilebilir. Her zaman mevcut olan katkı iadesiyle birleştiğinde, uzun süredir tutulan bir Roth IRA, ceza olmaksızın bir peşinatın önemli bir kısmını finanse edebilir.
    </p>

    <h2>12. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Katkı son tarihini kaçırmak.</strong> 15 Nisan, bir önceki vergi yılı için kesin bir son tarihtir.
      </li>
      <li>
        <strong>Kazanılmış gelir olmadan katkıda bulunmak.</strong> Roth, W-2 veya 1099 tazminatı gerektirir. Emekli bir eş yalnızca çalışan eşin gelirini kullanabilir.
      </li>
      <li>
        <strong>Yanlışlıkla oransal kuralı tetiklemek.</strong> Mevcut vergi öncesi IRA bakiyeleri varken arka kapı Roth denemek.
      </li>
      <li>
        <strong>Parayı yatırılmamış bırakmak.</strong> Aracı kurumlar katkıları otomatik olarak yatırmaz. Her para yatırdıktan sonra ETF'ler veya hedef tarih fonları satın alın.
      </li>
      <li>
        <strong>Katkıları gelişigüzel kullanmak.</strong> Kaybettiğiniz vergisiz alan, dolarları geri ödeseniz bile değiştirilemez.
      </li>
    </ul>

    <h2>13. Rakamları hesaplayın</h2>
    <p>
      Roth'un bileşik vergisiz büyüme altındaki büyümesini görmek ve vergilendirilebilir bir hesapla karşılaştırmak için yaşınızı, katkı oranınızı ve beklenen getirinizi girin.
    </p>
    <p>
      <a href="/tools/roth-ira-calculator">Roth IRA hesaplayıcı</a>
      <a href="/tools/401k-calculator">401k hesaplayıcı</a>
      <a href="/tools/retirement-calculator">Emeklilik hesaplayıcı</a>
    </p>
  </>
);