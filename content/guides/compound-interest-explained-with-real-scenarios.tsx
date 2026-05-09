export const intro = (
  <>
    <p>
      Albert Einstein aslında bileşik faizi dünyanın sekizinci harikası olarak adlandırmadı (bu söz uydurmadır), ancak matematik gerçektir ve kişisel finansın en önemli kavramıdır. Bununla ilgili açıklamaların çoğu ya çok belirsizdir (&ldquo;param para kazandırır!&rdquo;) ya da çok matematik ağırlıklıdır (tam Black-Scholes tarzı türetmeler). Bu rehber ortada bir yerdedir: belirli sayılarla işlenmiş temel matematik ve gerçekten karşılaştığınız 12 gerçek senaryo.
    </p>
    <p>
      Bunu bir referans olarak kullanın. Sayılar, her bölümde belgelenen standart varsayımlara dayanmaktadır &mdash; kendi özel durumunuz için <a href="/tools/compound-interest-calculator">bileşik faiz hesaplayıcısında</a> değişiklik yapın.
    </p>
  </>
);

export const toc = [
  { id: "definition", label: "Bileşik ve basit faiz" },
  { id: "formula", label: "Formül ve nasıl kullanılır" },
  { id: "rule-of-72", label: "72 Kuralı ve kullanışlı kısayollar" },
  { id: "scenarios", label: "12 gerçek dünya senaryosu" },
  { id: "real-vs-nominal", label: "Reel ve nominal getiriler (enflasyon)" },
  { id: "tax-impact", label: "Hesap türleri: vergi avantajlı ve vergilendirilebilir" },
  { id: "starting-early", label: "Başlama yaşı: 25 ve 35 arasındaki fark" },
  { id: "lump-sum-vs-monthly", label: "Toplu para ve aylık katkılar" },
  { id: "fees", label: "Ücretler size karşı nasıl bileşik getiri sağlar" },
  { id: "sequence-risk", label: "Emekliliğe yakın getiri sırası" },
  { id: "frequency", label: "Aylık, günlük ve sürekli bileşik faiz" },
  { id: "real-world-products", label: "Bileşik getiriyi nereden alabilirsiniz" },
];

export const body = (
  <>
    <h2 id="definition">Bileşik ve basit faiz</h2>
    <p>
      <strong>Basit faiz</strong>: yalnızca orijinal anapara üzerinden ödenen faiz.
      5% basit faizle, yıllık ödemeli 1.000$ kredi: sonsuza kadar yılda 50$ (veya anapara
      geri ödenene kadar). Birkaç belirli bağlamda kullanılır (bazı eyaletlerde oto kredileri,
      basit faiz kuponlu tahviller), ancak tasarruflar için nadirdir.
    </p>
    <p>
      <strong>Bileşik faiz</strong>: anapara ARTı birikmiş faiz üzerinden ödenen faiz.
      Yıllık bileşik 5% ile 1.000$:
    </p>
    <ul>
      <li>1. Yıl: bakiye 1.050$ (50$ faiz)</li>
      <li>2. Yıl: bakiye 1.102,50$ (52,50$ faiz &mdash; 1.050$ üzerinden)</li>
      <li>3. Yıl: bakiye 1.157,63$ (55,13$ faiz &mdash; 1.102,50$ üzerinden)</li>
      <li>30. Yıl: bakiye 4.321,94$</li>
    </ul>
    <p>
      Aynı %5 oranı, aynı başlangıç tutarı, aynı süre. Bileşik, basit faizi üçe katlar.
      Fark, zamanla büyüyen &ldquo;faizin faizi&rdquo;dir.
    </p>

    <h2 id="formula">Formül ve nasıl kullanılır</h2>
    <p>Tek bir mevduat için (yinelenen katkı yok):</p>
    <pre>{`A = P × (1 + r/n)^(n × t)`}</pre>
    <p>
      Burada: A = bitiş tutarı, P = anapara, r = yıllık oran (ondalık), n =
      yıllık bileşik dönemi sayısı, t = yıl.
    </p>
    <p>
      <strong>Çözülmüş örnek</strong>: 10 yıl boyunca aylık bileşik %7 ile 10.000$:
    </p>
    <ul>
      <li>r/n = 0,07 / 12 = 0,005833</li>
      <li>n &times; t = 12 &times; 10 = 120</li>
      <li>(1,005833)^120 = 2,0097</li>
      <li>A = 10.000 &times; 2,0097 = 20.097$</li>
    </ul>
    <p>
      %7 ile 10 yılda ikiye katlandı. Hesap tablosu: <code>=FV(0.07/12, 120, 0, -10000)</code>.
    </p>
    <p>
      Devam eden aylık katkılar için (çoğu emeklilik birikimi için gerçek dünya durumu):
    </p>
    <pre>{`FV = P × (1 + r)^n + PMT × [((1 + r)^n − 1) / r]`}</pre>
    <p>
      Burada r ve n artık aylıktır (yıllık oran &divide; 12, yıl &times; 12), PMT
      aylık katkıdır. Hesap tablosu:{" "}
      <code>=FV(annual_rate/12, years*12, -monthly_contribution, -starting_balance)</code>.
    </p>

    <h2 id="rule-of-72">72 Kuralı ve kullanışlı kısayollar</h2>
    <p>
      72 Kuralı: ikiye katlama yılını bulmak için 72'yi yıllık oranınıza bölün. Zihinsel
      matematik için kullanışlıdır. Örnekler:
    </p>
    <ul>
      <li>%3 &rarr; ikiye katlamak için 24 yıl (yüksek getirili tasarruf)</li>
      <li>%5 &rarr; 14,4 yıl (uzun vadeli tahvil fonu)</li>
      <li>%7 &rarr; 10,3 yıl (borsanın reel getirisi)</li>
      <li>%10 &rarr; 7,2 yıl (nominal borsa tarihsel)</li>
      <li>%15 &rarr; 4,8 yıl (olağanüstü yıl, Warren Buffett bölgesi)</li>
    </ul>
    <p>
      <strong>Varyantlar</strong>: 114 Kuralı = ÜÇE KATLAMA yılı. 144 Kuralı = DÖRDE
      KATLAMA yılı. 70 Kuralı daha doğru versiyondur (ekonomistler tarafından nüfus
      ikiye katlaması için kullanılır); tipik oranlar için fark küçüktür.
    </p>
    <p>
      <strong>Zihinsel matematik zinciri</strong>: %7 ile 10K$, 10 yılda 20K$, 20
      yılda 40K$, 30 yılda 80K$, 40 yılda 160K$ olur. Her ikiye katlama en büyük mutlak
      dolar tutarını ekler &mdash; 40. yıl 80K$ ekler, 10. yıl yalnızca 10K$ ekler. Bu
      nedenle piyasada geçirilen süre, piyasa zamanlamasından daha önemlidir.
    </p>

    <h2 id="scenarios">12 gerçek dünya senaryosu</h2>
    <p>Aksi belirtilmedikçe tüm senaryolar %7 yıllık reel getiri varsayar. %7, enflasyon sonrası tarihsel S&amp;P 500 getirisidir.</p>

    <h3>1. 25 yaşından itibaren Roth IRA'yı maksimize etmek</h3>
    <p>
      40 yıl boyunca (25-65 yaş) %7 ile yılda 7.000$: 65 yaşında bakiye = 1.558.000$.
      Emeklilikte tamamen vergisiz. Toplam katkı: 280.000$. Büyüme: 1.278.000$.
    </p>

    <h3>2. 35 yaşından itibaren Roth IRA'yı maksimize etmek (10 yıl gecikme)</h3>
    <p>
      30 yıl boyunca %7 ile yılda 7.000$: 65 yaşında bakiye = 735.000$. 10 yıl
      beklemekten önceki sonucun yarısı. Kaybedilen 10 yılın maliyeti 823.000$.
    </p>

    <h3>3. 22 yaşında başlamak, 30 yaşına kadar 9 yıllık öncelik</h3>
    <p>
      22'den 30'a (9 yıl) yılda 7.000$, sonra HİÇBİR ŞEY. 65 yaşına kadar %7: 65
      yaşında bakiye = 608.000$. 2. senaryo ile karşılaştırın (35'te başla, 30 yıl
      boyunca katkı yap): 735.000$. 22-30 arası 9 yıllık katkılar (toplam 63K$) neredeyse
      35'te başlayan 30 yıllık katkılarla (210K$) eşleşiyor. Zaman kazanır.
    </p>

    <h3>4. 22'den 65'e S&amp;P 500'e ayda 200$</h3>
    <p>
      43 yıl boyunca %7 ile yılda 2.400$: 65 yaşında bakiye = 716.000$. Toplam katkı:
      103.000$. Büyüme: 613.000$. Katkıda bulunulan her dolar için altı dolar büyüme.
    </p>

    <h3>5. Standart eşleşmeli 401(k) (%3 siz + %3 işveren)</h3>
    <p>
      50.000$ maaş &times; %6 birleşik = 22'den 65'e %7 ile yılda 3.000$: 895.000$.
      İkiye katlayarak 6.000$ (50K$ maaş &times; %12): 1.791.000$. Eşleşme tek başına
      bir kariyer boyunca 448.000$ üretir &mdash; bu nedenle &ldquo;eşleşmeyi her zaman
      yakalayın&rdquo; evrensel tavsiyedir.
    </p>

    <h3>6. 5 yılda ev peşinatı için birikim</h3>
    <p>
      60 ay boyunca %4 (yüksek getirili tasarruf) ile ayda 1.000$: 66.250$. Aynı %7
      (daha agresif) ile 60 ay: 71.890$. Fazladan 5.640$ getiriye değer mi? Muhtemelen
      hayır &mdash; 5 yıl, borsa oynaklık riski için çok kısa. 1-5 yıllık hedefler için
      yüksek getirili tasarruf veya kısa vadeli Hazine bonolarına bağlı kalın.
    </p>

    <h3>7. Doğumdan itibaren 529 üniversite birikimi</h3>
    <p>
      0. yıldan 18. yıla kadar %6 (daha kısa ufuk nedeniyle daha muhafazakar) ile ayda
      300$: toplam katkı 64.800$, 18 yaşında bakiye: 115.000$. 2026 oranlarında tipik
      özel okul ücretinin kabaca 1,5 yılına veya eyalet içi devlet üniversitesi ücretinin
      ~3 yılına eşdeğer.
    </p>

    <h3>8. 30'da vs 50'de 1 yıl beklemenin maliyeti</h3>
    <p>
      Aynı 10.000$, 30'da vs 50'de yatırıldı, her ikisi de 65 yaşına ulaşıyor. 30'da:
      %7 ile 35 yıl = 107.000$. 50'de: %7 ile 15 yıl = 27.600$. 10K$'da 20 yıllık
      gecikmenin maliyeti: 79.400$ kayıp. 1 yıllık gecikmenin maliyeti (30'da tek bir
      katkıyı atlamak): kabaca 7.000$ kayıp büyüme.
    </p>

    <h3>9. %1 gider oranı sürüklenmesi</h3>
    <p>
      30 yıl boyunca %7 net ile ayda 1.000$: 1.222.000$. %6 net ile (%1 gider oranı
      nedeniyle): 1.005.000$. Gider oranı 30 yılda 217.000$'a mal olur &mdash; brüt
      getirinin yaklaşık %18'i. Bu nedenle düşük maliyetli endeks fonları (%0,03-0,10)
      çok önemlidir.
    </p>

    <h3>10. 1 milyon$'lık birikim üzerinde enflasyon etkisi</h3>
    <p>
      1.000.000$, 65 yaşında 2026 dolarında harika görünüyor. 2056 dolarında (%3
      enflasyon varsayarak), 2026 satın alma gücünde 1 milyon$ için 2.427.000$ gerekir.
      Satın alma gücü hedefinizi bilmek için her zaman reel terimlerle (nominal %10
      yerine ~%7 reel) projeksiyon yapın. <a href="/learn/nominal-vs-real-returns">Nominal
      ve reel getiriler sözlük girişinde</a> daha fazlası var.
    </p>

    <h3>11. Mortgage'ı erken ödeyin veya yatırım yapın?</h3>
    <p>
      30 yıl boyunca %6,5 mortgage'da ayda 200$ ek anapara: faizde ~95.000$ tasarruf,
      mortgage 24. yılda ödenir. Aynı 200$/ay %7 reel getiri ile yatırılırsa: 30 yılda
      bakiye = 245.000$. Matematik yatırım yapmayı söylüyor. Davranışsal karşı argüman:
      mortgage'ı ödemek psikolojik kesinlik + emeklilikte azaltılmış aylık yük sağlar.
      Çoğu finansal danışman, mortgage oranı %5'in altındaysa yatırım yapmayı, %6'nın
      üzerindeyse ödemeyi söyler. %5-6 oran aralığı bir yargı çağrısıdır. Kendi
      durumunuzu <a href="/tools/mortgage-payoff-accelerator">mortgage ödeme
      hızlandırıcısında</a> çalıştırın.
    </p>

    <h3>12. 401(k)'den erken para çekmenin maliyeti</h3>
    <p>
      Borçları ödemek için 30 yaşında çekilen 50.000$. Emekliliğe 35 yıl boyunca %7'de
      kaybedilen büyüme: 533.000$. Artı anlık maliyetler: %22 federal gelir vergisi
      (11.000$) + %10 erken çekim cezası (5.000$) + eyalet gelir vergisi (değişir,
      genellikle 2.000-5.000$) = anlık 18.000$+ darbe. 30'da 50K$ çekimin etkin maliyeti:
      bir ömür boyu 551.000$+. Başka bir yerden borç alın; mevcut borç için asla
      emeklilik birikimine dokunmayın.
    </p>

    <h2 id="real-vs-nominal">Reel ve nominal getiriler (enflasyon)</h2>
    <p>
      <strong>Nominal getiri</strong>: enflasyondan önceki başlık numarası.
      &ldquo;S&amp;P 500 tarihsel olarak %10 getiri sağladı.&rdquo;
    </p>
    <p>
      <strong>Reel getiri</strong>: enflasyon çıkarıldıktan sonra. &ldquo;S&amp;P 500
      tarihsel olarak reel olarak %7 getiri sağladı.&rdquo;
    </p>
    <p>
      %3'lük fark tam olarak tarihsel enflasyon oranıdır (1928-2024 ortalaması). Bugünün
      satın alma gücünde emeklilik projeksiyonları için HER ZAMAN reel getirileri
      kullanın. Aksi takdirde projeksiyon size yalan söyler.
    </p>
    <p>
      <strong>Yalan ne kadar büyük?</strong> %3 enflasyonda 30 yıl sonraki 1.000.000$
      = bugünün satın alma gücünde 412.000$. Yarısından az. &ldquo;Milyoner
      olacaksınız&rdquo; projeksiyonu, bunun yarısının sadece enflasyon olduğunu
      fark edene kadar harika gelir.
    </p>

    <h2 id="tax-impact">Hesap türleri: vergi avantajlı ve vergilendirilebilir</h2>
    <p>
      Aynı brüt bileşik getiriler, hesap türüne göre çok farklı net sonuçlar. 30 yıl
      boyunca %7 ile ayda 1.000$:
    </p>
    <ul>
      <li>
        <strong>Roth IRA / Roth 401(k)</strong>: 1.222.000$. Tümü vergisiz çekilebilir.
      </li>
      <li>
        <strong>Geleneksel 401(k) / Geleneksel IRA</strong>: 1.222.000$ nominal.
        %22 emeklilik dilimi vergisinden sonra: harcanabilir 953.000$.
      </li>
      <li>
        <strong>Vergilendirilebilir aracı kurum</strong>: ~1.050.000$ (yıllık temettü
        vergisi + yeniden dengelemede sermaye kazançları ~%14 yer). Kalan gerçekleşmemiş
        kazançlar üzerindeki sermaye kazancı vergisinden sonra: ~890.000$ harcanabilir.
      </li>
      <li>
        <strong>HSA (ABD, uygunsanız)</strong>: 1.222.000$. Vergisiz katkılar,
        büyüme ve nitelikli tıbbi çekimler. ABD vergi kanunundaki en iyi hesap.
      </li>
    </ul>
    <p>
      Roth ve HSA sonuçları, aynı katkılar ve getiriler için vergilendirilebilir
      hesaplardan %10-25 daha yüksektir. Bu nedenle finansal planlamacılar vergi
      avantajlı hesaplara öncelik verir.
    </p>

    <h2 id="starting-early">Başlama yaşı: 25 ve 35 arasındaki fark</h2>
    <p>
      İki kardeş, aynı plan, farklı başlangıç yaşları:
    </p>
    <ul>
      <li>
        <strong>Kardeş A 25'te başlar</strong>: 40 yıl boyunca %7 ile ayda 500$ &rarr;
        65'te 1.316.000$.
      </li>
      <li>
        <strong>Kardeş B 35'te başlar</strong>: 30 yıl boyunca %7 ile ayda 500$ &rarr;
        65'te 612.000$.
      </li>
      <li>
        <strong>Fark</strong>: Kardeş A toplamda 60.000$ daha fazla katkı yaptı (240K$'a
        karşı 180K$) ancak 704.000$ daha fazla ile sonuçlandı. 10 ekstra yıl, 60K$
        mevduat ve erken mevduatların bileşik etkisinden ~644K$ katkıda bulundu.
      </li>
    </ul>
    <p>
      <strong>Pratik çıkarım</strong>: beklemenin maliyeti, 20'li yaşlarınızda
      hissedildiğinden çok daha yüksektir. 22-25 yaşlarında başlayan küçük miktarlar
      (100-200$/ay) bile, 35-40 yaşlarında başlayan büyük miktarlardan (800-1.000$/ay)
      daha iyi performans gösterir.
    </p>

    <h2 id="lump-sum-vs-monthly">Toplu para ve aylık katkılar</h2>
    <p>
      Matematiksel olarak: toplu para yatırımı zamanın yaklaşık 2/3'ünde kazanır. Piyasa
      yükselme eğilimindedir, bu nedenle daha erken yatırım yapmak daha fazla büyüme
      sağlar. Dolar maliyeti ortalaması (DCA), zirveden satın alma riskini azaltır.
    </p>
    <p>
      Vanguard'ın araştırması: toplu para, 12 ay boyunca DCA'dan ortalama olarak ~%2,4
      daha yüksek 10 yıllık getiri sağlar. 12 ay boyunca beklemenin (DCA) maliyeti:
      piyasa %7 reel getiri sağlarken para piyasasında %4 kazanan nakit tutmak =
      ortalama olarak yarım yıl için %3 sürüklenme = ~%1,5 maliyet.
    </p>
    <p>
      <strong>Pratik rehberlik</strong>: maaş çekinden gelen yeni aylık katkılar için,
      zaten etkili bir şekilde DCA yapıyorsunuz; bu sorun değil. Beklenmedik nakit
      girişleri (miras, ikramiye, uzlaşma) için, duygusal belirsizlik sizi 6-12 ay
      boyunca DCA'ya itmedikçe toplu parayı düşünün. Matematik toplu parayı söyler;
      davranış, hangisiyle gerçekten yapabiliyorsanız onu söyler.
    </p>

    <h2 id="fees">Ücretler size karşı nasıl bileşik getiri sağlar</h2>
    <p>
      %1'lik bir ücret, &ldquo;%1 daha az getiri&rdquo; anlamına gelmez. Her yıl %1
      daha az bileşik getiri anlamına gelir ve bu on yıllar boyunca çarpımsaldır.
    </p>
    <p>
      Üç ücret seviyesinde aynı senaryo, 30 yıl boyunca %7 brüt ile ayda 1.000$:
    </p>
    <ul>
      <li>%0,05 gider (Vanguard VTSAX): 1.206.000$</li>
      <li>%1 gider (tipik aktif yönetilen fon): 1.005.000$</li>
      <li>%2 gider (bazı 401(k) hedef tarihli fonlar): 828.000$</li>
    </ul>
    <p>
      %1'lik ücret 30 yılda 201.000$'a mal olur. %2'lik ücret 378.000$'a mal olur.
      Her zaman gider oranlarını kontrol edin; varsa 401(k)'nizde düşük maliyetli
      endeks fonlarına geçin.
    </p>

    <h2 id="sequence-risk">Emekliliğe yakın getiri sırası</h2>
    <p>
      Aynı 30 yıllık ortalama getiriye sahip iki emekli, özellikle emekliliğin 1-5.
      yıllarında getirilerin SIRASINA bağlı olarak çok farklı sonuçlara sahip olabilir.
    </p>
    <p>
      <strong>Emekli A</strong>: 2000'de 1 milyon$ ile emekli oldu, yılda 40.000$
      çekiyor (%4 kuralı). 2000-2002 teknoloji çöküşüyle karşı karşıya kaldı (-%49).
      Portföy, hala para çekerken ~500.000$'a düştü. 2010'a kadar (stresin zirvesi):
      ~280.000$. 2010-2020 güçlü getirilerine rağmen toparlanması zor.
    </p>
    <p>
      <strong>Emekli B</strong>: 2010'da 1 milyon$ ile emekli oldu, aynı plan. Önce
      2010-2020 boğa piyasasıyla karşı karşıya kaldı. Portföy, çekimlere rağmen 2020'de
      1,7 milyon$'a ulaştı.
    </p>
    <p>
      30 yıl boyunca aynı ortalama getiri; çok farklı sonuçlar. Bu, getiri sırası
      riskidir ve bu nedenle emeklilik planlaması, tek bir ortalama getiri projeksiyonu
      yerine giderek daha fazla Monte Carlo simülasyonu (1000+ tarihsel senaryo
      çalıştırma) kullanmaktadır. Birikim yapanlar (henüz emekli olmamış) için sıra
      riski çok daha az önemlidir &mdash; erken kötü yıllar sorun değildir çünkü hala
      düşükten alıyorsunuz.
    </p>

    <h2 id="frequency">Aylık, günlük ve sürekli bileşik faiz</h2>
    <p>
      Bileşik faiz sıklığı, oran veya süreden daha az önemlidir. %7 YBB'de:
    </p>
    <ul>
      <li>Yıllık bileşik: efektif yıllık oran %7,00</li>
      <li>Aylık: %7,23</li>
      <li>Günlük: %7,25</li>
      <li>Sürekli: %7,25 (matematiksel limit, e^0,07 - 1)</li>
    </ul>
    <p>
      100K$ üzerinde 30 yılda, aylık ve günlük arasındaki fark ~5K$'dır. Çoğu emeklilik
      hesabı sürekli bileşik getiri sağlar (her işlem); tasarruf hesapları günlük
      bileşik getiri sağlar; tahviller tipik olarak altı ayda bir. Pratik projeksiyonlar
      için aylık bileşik yeterince yakındır &mdash; sıklık konusunda takıntılı olmayın.
    </p>

    <h2 id="real-world-products">Bileşik getiriyi nereden alabilirsiniz</h2>
    <p>
      <strong>Hisse senetleri (S&amp;P 500 endeks fonu)</strong>: ~%10 nominal, ~%7 reel
      tarihsel. En iyi uzun vadeli araç. Düşük maliyetli: VTSAX, FXAIX, SWPPX veya
      herhangi bir büyük aracı kurumun S&amp;P 500 endeks fonu (%0,02-0,04 gider).
    </p>
    <p>
      <strong>Tahviller (Hazine veya toplam tahvil fonu)</strong>: Tarihsel olarak %3-5
      nominal. Daha az oynak; daha düşük uzun vadeli getiri. Kısa-orta vadeli (1-10 yıl)
      hedefler veya emekliliğe yakın portföy çeşitlendiricisi olarak en iyisi.
    </p>
    <p>
      <strong>Yüksek getirili tasarruf</strong>: 2026'da %4-5. Sigortalı (FDIC 250K$'a
      kadar). Acil durum fonları ve 1-5 yıllık hedefler için en iyisi.
    </p>
    <p>
      <strong>I-bond'lar (ABD Hazine enflasyon korumalı)</strong>: enflasyona bağlı
      değişken oran. Yüksek enflasyon dönemlerinde ~%5. Kişi başına yılda 10K$ satın
      alma limiti. Uzun vadeli holdinglerde enflasyon koruması için en iyisi.
    </p>
    <p>
      <strong>CD'ler</strong>: 1-5 yıllık vadeler için 2026'da %4-5. Parayı
      kilitleyebiliyorsanız tasarruftan daha iyidir; daha az esnektir.
    </p>
    <p>
      <strong>Gayrimenkul (hesapta GYO'lar veya doğrudan mülkiyet)</strong>: Tarihsel
      olarak ~%9-10 nominal. Çeşitlendirici; daha az likit (doğrudan mülkiyet) veya
      oynak (GYO'lar). Çoğu perakende yatırımcı, hedef tarihli fon GYO tahsisi yoluyla
      yeterli gayrimenkul maruziyeti elde eder.
    </p>

    <h2>80/20 çıkarımı</h2>
    <p>
      Bileşik faiz matematiği basittir: gelecekteki değer orana, süreye ve miktara
      bağlıdır. Süre açık ara en önemlisidir &mdash; 25'te başlamak vs 35'te başlamak,
      aynı aylık katkıyla bile tipik olarak 2&times; nihai bakiye üretir. Bugünün satın
      alma gücünü projekte etmek için nominal (%10) değil, reel getirileri (%7 enflasyon
      sonrası) kullanın. Vergilendirilebilir hesaplardan önce vergi avantajlı hesapları
      (Roth, HSA, eşleşmeli geleneksel 401(k)) kullanın. Düşük maliyetli endeks fonlarını
      (%1+ değil, %0,05 gider) kullanın.
    </p>
    <p>
      Kendi özel sayılarınızı <a href="/tools/compound-interest-calculator">bileşik faiz
      hesaplayıcısında</a> çalıştırın; zihinsel kısayollar için destekleyici{" "}
      <a href="/learn/rule-of-72">72 Kuralı sözlük girişini</a> kontrol edin ve kısa
      tanım için <a href="/learn/compound-interest">bileşik faiz sözlüğünü</a> okuyun.
      Çoğu insanın yapabileceği en değerli finansal eylem, 20'li yaşlarında bir Roth IRA
      veya 401(k) eşleşmesine başlamak ve asla durmamaktır; bileşik matematik gerisini
      halleder.
    </p>
  </>
);

export const cta = {
  label: "Herhangi bir bileşik faiz senaryosunu saniyeler içinde çalıştırın",
  targetSlug: "compound-interest-calculator",
};

export const faq = [
  {
    q: "Ayda 100$, 30 yılda ne kadar büyür?",
    a: "%7 reel getiride: 30 yıl boyunca yılda 1.200$ = 122.000$ bitiş bakiyesi, bunun 36.000$'ı katkılar ve 86.000$'ı büyümedir. %10 nominalde: 228.000$. 'Fark' enflasyondur — satın alma gücü açısından bu sayılar aynı görünür. Emeklilikte gerçekte ne satın alabileceğinizi bilmek için her zaman reel terimlerle (~%7) projeksiyon yapın. Mümkün olduğunda katkıları artırın; ayda 200$'a ikiye katlamak, sonucu kabaca 244K$ reel / 456K$ nominale ikiye katlar.",
  },
  {
    q: "Getiri oranındaki küçük farklılıklar 30 yılda neden bu kadar önemli?",
    a: "Bileşik getiri, farkı katlanarak çarpar. 30 yıl boyunca %6 ile ayda 1.000$ = 1.005.000$; %7 ile = 1.222.000$; %8 ile = 1.490.000$. Sadece %1 fazla getiri = 217K$-268K$ daha fazla. 40 yılda fark patlar: %6 ile ayda 1.000$ = 1.953.000$; %8 ile = 3.490.000$. Bu nedenle gider oranları (%1 sürüklenme) ve vergi verimliliği (sermaye kazançları sürüklenmesi) çok önemlidir — bunlar on yıllar boyunca size karşı bileşik getiri sağlayan etkili negatif getirilerdir.",
  },
  {
    q: "Daha fazla biriktirmeye mi yoksa daha yüksek getiri elde etmeye mi odaklanmalıyım?",
    a: "Her ikisine de, ancak kaldıraç zaman ufkuna göre değişir. Erken kariyer (30 yaş altı): birikim oranı en önemlisidir çünkü bileşik getiri sağlayacak çok az sermayeniz vardır. %5 birikimden %15 birikime geçmek katkılarınızı üçe katlar. Orta kariyer (30-50): denge — bileşik getiri sağlayacak yeterli sermayeniz vardır VE anlamlı katkı yapacak geliriniz vardır. Geç kariyer (50+): getiri oranı en önemlisidir çünkü fazla yeni sermaye eklemezsiniz ancak bileşik getiri büyük bir taban üzerinde çalışır. Her zaman optimizasyondan önce: vergi avantajlı hesaplarınızı (Roth IRA, 401(k) eşleşmesi, HSA) maksimize edin çünkü vergi tasarruflarından 'ücretsiz getiri' sağlarlar.",
  },
  {
    q: "Matematiksel olarak en uygun katkı stratejisi nedir?",
    a: "Önce 401(k) eşleşmesini yakalamak için katkı yapın (anında %50-100 getiri). Ardından ~%7'nin üzerindeki borçları ödeyin (borç oranına eşit garantili getiri). Ardından Roth IRA'yı maksimize edin (yılda 7.000$ — esneklik + vergisiz büyüme). Ardından uygunsanız HSA'yı (bekar 4.300$ / aile 8.550$ — üçlü vergi avantajı). Ardından kalan 401(k) tavanını maksimize edin (toplam 23.500$). Ardından vergilendirilebilir aracı kurum. Her hesap içinde düşük maliyetli endeks fonlarını (%1+ değil, %0,05 gider aralığı) seçin. Her zamla birlikte katkıları otomatik olarak artırın. Matematik piyasa zamanlamasını umursamaz — ne zaman yapabiliyorsanız başlayın, aylık katkı yapın, asla durmayın.",
  },
];