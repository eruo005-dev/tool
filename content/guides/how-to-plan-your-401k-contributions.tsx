import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      401(k), ABD'li çalışanların kullanabileceği en güçlü servet biriktirme aracıdır. Vergi ertelenmiş (veya Roth ile vergisiz) büyüme, işveren katkısı, yüksek katkı limitleri ve otomatik maaş kesintisi, uzun vadeli sonuçlar için herhangi bir yatırım seçiminden daha fazlasını sağlar. 2026 katkı limiti, 50 yaş altı için <strong>24.000$</strong> ve 50+ telafi katkısı ile <strong>31.500$</strong>'dır. Çoğu kişi, işveren katkısını kaçırarak veya geleneksel ile Roth arasında bu takası anlamadan seçim yaparak bedava parayı masada bırakır. Bu rehber, katkı limitlerini, işveren eşleştirme matematiğini, Geleneksel vs Roth'u, telafi katkılarını, hak ediş sürelerini ve ne kadar yatırılacağına dair bir karar ağacını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. 2026 katkı limitleri</h2>
    <ul>
      <li>Çalışan isteğe bağlı ertelemesi: <strong>24.000$</strong> (2025'te 23.500$'dan arttı)</li>
      <li>50+ telafi katkısı: ek <strong>7.500$</strong> (toplam 31.500$)</li>
      <li>60-63 süper telafi katkısı (SECURE 2.0): ek <strong>11.250$</strong></li>
      <li>Çalışan + işveren birleşik limiti: <strong>70.000$</strong> (veya telafilerle 77.500$ / 81.250$)</li>
    </ul>
    <p>
      Çoğu çalışan, %25+ işveren eşleştirmesine sahip olmadığı için birleşik limite asla ulaşmaz. Ancak eğer sahipseniz — bazı teknoloji ve finans işverenleri bu kadar yükseğe çıkar — yılda 70.000$'a kadar biriktirebilirsiniz.
    </p>

    <h2>2. İşveren eşleştirmesi: bedava para</h2>
    <p>
      Tipik eşleştirme, "%100 ilk %3, sonraki %2'nin %50'si" şeklindedir — bu, %5'lik bir katkı üzerinde %4'lük etkili bir eşleştirmedir. 80.000$'lık bir maaşta, bu sadece işe gelmeniz karşılığında yılda 3.200$'dır. <strong>Her zaman en azından eşleştirmeyi maksimize edecek kadar katkı yapın</strong>. Bunu yapmamak, %4'lük bir zammı reddetmekle eşdeğerdir.
    </p>

    <h2>3. Emeklilik katkıları için öncelik sırası</h2>
    <ol>
      <li>Tam işveren eşleştirmesine kadar 401(k)</li>
      <li>Yüksek faizli borcu ödeyin (%20+ kredi kartları)</li>
      <li>Yıllık limite kadar Roth IRA (2026'da 7.500$, 50+ ise 8.500$)</li>
      <li>Uygunsa limite kadar HSA (üçlü vergi avantajı)</li>
      <li>Yıllık isteğe bağlı limite kadar 401(k)</li>
      <li>Endeks fonları ile vergilendirilebilir aracı kurum hesabı</li>
    </ol>
    <p>
      Roth IRA, 401(k)'nizin geri kalanından önce gelir çünkü size daha fazla esneklik sağlar: daha geniş yatırım seçenekleri ve katkıların istediğiniz zaman vergisiz çekilmesi.
    </p>

    <h2>4. Geleneksel vs Roth 401(k)</h2>
    <p>
      <strong>Geleneksel</strong>: katkılar vergi öncesidir, yatırımlar vergi ertelenmiş olarak büyür, emeklilikte çekimler olağan gelir olarak vergilendirilir.
    </p>
    <p>
      <strong>Roth</strong>: katkılar vergi sonrasıdır, büyüme ve nitelikli çekimler vergisizdir.
    </p>
    <p>
      Basit kural: Emeklilikte vergi oranınızın bugünkünden <strong>daha yüksek</strong> olmasını bekliyorsanız Roth'u seçin. <strong>Daha düşük</strong> ise gelenekseli seçin. Kariyerlerinin başındaki genç kazançlılar genellikle Roth ile kazanır. Kariyer ortasındaki en yüksek kazançlı çalışanlar genellikle geleneksel ile kazanır. Katkıları %50/%50 bölmek makul bir korunmadır.
    </p>

    <h2>5. Vergi öncesi vs vergi sonrasının matematiği</h2>
    <pre>{`Geleneksel: 1.000$ vergi öncesi 10.000$'a büyür → %22'den çekilir → 7.800$ net
Roth:        780$ vergi sonrası 7.800$'a büyür → vergisiz çekilir → 7.800$ net`}</pre>
    <p>
      Marjinal oranınız her iki dönemde de aynıysa, matematik aynıdır. Fark, şimdi ile emeklilik arasındaki <strong>oran farklılıklarından</strong> kaynaklanır. Roth ayrıca gelecekteki vergi oranı artışlarına karşı koruma sağlar — ABD mali gidişatı göz önüne alındığında önemsiz olmayan bir risk.
    </p>

    <h2>6. Hak ediş takvimleri</h2>
    <p>
      Katkılarınız her zaman %100 sizindir. İşveren eşleştirmeleri bir hak ediş takvimine tabi olabilir:
    </p>
    <ul>
      <li><strong>Anında</strong>: ilk günden sizin (en iyisi)</li>
      <li><strong>Uçurum (3 yıl)</strong>: 3. yıla kadar %0 hak edilmiş, sonra %100</li>
      <li><strong>Kademeli (2-6 yıl)</strong>: 2. yıldan itibaren yılda %20</li>
    </ul>
    <p>
      Tamamen hak etmeden ayrılmak, hak edilmemiş işveren parasını kaybettirir. İş değiştirmeyi düşünüyorsanız, hak ediş takviminizi kontrol edin — bir atlamayı 6 ay geciktirmek 10.000$+ değerinde olabilir.
    </p>

    <h2>7. 401(k) kredileri: genellikle kötü bir fikir</h2>
    <p>
      Çoğu plan, bakiyenizin %50'sine veya 50.000$'a kadar (hangisi daha düşükse) krediye izin verir. Kredi kontrolü yok, faiz kendinize geri ödenir. Ancak:
    </p>
    <ul>
      <li>Piyasadan çıkan para bileşik büyümeyi kaçırır</li>
      <li>5 yıl içinde geri ödenmelidir (veya işten ayrılırsanız hemen)</li>
      <li>Temerrüde düşerseniz, kalan bakiye bir çekim olarak kabul edilir — 59½ yaşından küçükse vergilendirilir artı %10 ceza</li>
    </ul>
    <p>
      Yalnızca alternatifi olmayan gerçek acil durumlar için kullanın.
    </p>

    <h2>8. Erken çekim cezası ve istisnalar</h2>
    <p>
      59½ yaşından önce para çekmek, tutar üzerinden %10 ceza artı olağan gelir vergisi tetikler. İstisnalar şunları içerir: SEPP 72(t) önemli ölçüde eşit periyodik ödemeler, zorluk (çok dar tanım), ilk ev alımı (ömür boyu 10.000$), engellilik ve 55 Kuralı (55 yaşına bastığınız yıl işverenden ayrılma).
    </p>

    <h2>9. Gerekli asgari dağıtımlar (RMD'ler)</h2>
    <p>
      Geleneksel 401(k) RMD'leri 73 yaşında başlar (SECURE 2.0 kapsamında 2033'e kadar 75'e yükselecek). Roth 401(k) RMD'leri 2024'ten itibaren kaldırıldı ve Roth IRA kurallarıyla eşleşti. Önemli bir geleneksel bakiyeniz varsa, RMD'ler sizi daha yüksek vergi dilimlerine itebilir — emeklilik ile 73 yaş arasındaki düşük gelirli yıllarda Roth dönüşümlerini değerlendirin.
    </p>

    <h2>10. 401(k) içinde yatırım seçimi</h2>
    <p>
      Çoğu plan 15-30 fon sunar. Neredeyse herkes için doğru seçim şudur:
    </p>
    <ul>
      <li>Beklenen emeklilik yılınıza uyan düşük maliyetli bir <strong>hedef tarih fonu</strong> VEYA</li>
      <li>3 fonlu tembel portföy: ABD toplam piyasa + uluslararası + tahviller</li>
    </ul>
    <p>
      Gider oranlarını kontrol edin. 30 yıl boyunca birleştirilen %1'lik bir ücret farkı, nihai bakiyenizin yaklaşık %25'ine mal olur. %0,5'in üzerindeki her şey incelemeyi hak eder.
    </p>

    <h2>11. Maksimize etmenin erken olduğu durumlar</h2>
    <p>
      Aşağıdaki durumlarda 401(k)'yi maksimize etmeyin:
    </p>
    <ul>
      <li>%10'un üzerinde <a href="/learn/apr">APR</a>'ye sahip kredi kartı borcunuz varsa</li>
      <li>3 aylık acil durum fonunuz yoksa</li>
      <li>Erken çekim yapmaya zorlanacaksanız (%10 ceza)</li>
      <li>12 ay içinde iş değişikliğinde daha iyi bir eşleştirmeniz varsa</li>
    </ul>
    <p>
      Önce eşleştirme tartışılmaz. Eşleştirmenin ötesinde, diğer finansal öncelikler genellikle kazanır.
    </p>

    <h2>12. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Eşleştirmeyi kaçırmak.</strong> Tahminen ABD'li çalışanların %20'si işveren eşleştirmelerinden daha az katkı yapıyor.
      </li>
      <li>
        <strong>Parayı kötü planlardaki eski 401(k)'lerde bırakmak.</strong> Daha iyi fon seçenekleri elde etmek için bir IRA'ya veya mevcut işvereninizin planına aktarın.
      </li>
      <li>
        <strong>Hedef tarih fonunu emeklilik yılına göre değil, mevcut yaşa göre seçmek.</strong> "Genç görünen tarihli olanı" değil, 2055 hedefini seçin.
      </li>
      <li>
        <strong>Yaşam tarzı harcamaları için kredi çekmek.</strong> Emeklilik birikimlerini nakde çevirmenin en kötü şekli.
      </li>
      <li>
        <strong>İş değiştirirken parayı bozdurmak.</strong> Küçük bakiyeler silinir ve vergilendirilir + cezalandırılır. Her zaman aktarın.
      </li>
    </ul>

    <h2>13. Rakamları hesaplayın</h2>
    <p>
      Maaşınızı, katkı oranınızı, işveren eşleştirmenizi ve emekliliğe kalan yıllarınızı girerek 65 yaşında 401(k)'nizin ne kadar olabileceğini görün.
    </p>
    <p>
      <a href="/tools/401k-calculator">401k hesaplayıcı</a>
      <a href="/tools/roth-ira-calculator">Roth IRA hesaplayıcı</a>
      <a href="/tools/retirement-calculator">Emeklilik hesaplayıcı</a>
    </p>
  </>
);