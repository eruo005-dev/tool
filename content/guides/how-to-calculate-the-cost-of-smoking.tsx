import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir paket günlük alışkanlığın aylık maliyeti, bir sigara tiryakisinin bütçesindeki en büyük kalemlerden biridir ve neredeyse hiç kimse bunu hesaplamaz. Günlük alışveriş önemsiz görünür; yıllık toplam ise hayat değiştirir. Gerçek maliyet paket fiyatının ötesine geçer: sağlık sigortası ek ücretleri, diş tedavileri, ev sigortası ve bu paranın yatırılsaydı elde edeceği fırsat maliyeti. Bu rehber, günde bir paketin basit matematiğini yapar, ardından bileşik etkiyi, ikincil maliyetleri ve rakamları somut hale getiren motive edici bir çerçeve ekler. Amaç suçluluk değil; sigarayı bırakmanın finansal olarak neleri mümkün kıldığını göstererek bırakmayı kolaylaştırmaktır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Günde bir paketin aritmetiği</h2>
    <pre>{`Paket fiyatı (ABD ortalaması 2025):     ~$8,50
Günde bir paket:                 $8,50 x 365 = $3.102/yıl
10 yıl:                         ~$31.000
20 yıl:                         ~$62.000
30 yıl:                         ~$93.000`}</pre>
    <p>
      Bu nominal dolar cinsindendir, enflasyona göre ayarlanmamıştır. Tütün tüketim vergileri yükselmeye devam ettiği için gelecekteki maliyet daha da yüksektir.
    </p>

    <h2>Bölgesel fiyat farklılıkları</h2>
    <pre>{`New York City:     $14-16/paket   ($5.100-$5.800/yıl)
Chicago:           $12-13/paket   ($4.380-$4.745/yıl)
Kaliforniya:        $9-10/paket    ($3.285-$3.650/yıl)
Virginia:          $6-7/paket     ($2.190-$2.555/yıl)
Kentucky:          $6-7/paket     ($2.190-$2.555/yıl)
İngiltere (20'li paket):      ~£14 (~$17)   (£5.110/yıl)
Avustralya:         ~$45 AUD/paket (AUD $16.425/yıl)`}</pre>
    <p>
      Yaşadığınız yer büyük fark yaratır. New York'ta biri her iki yılda bir ikinci el araba değerinde sigara içer; Kentucky'de biri bunu her dört yılda bir yapar.
    </p>

    <h2>Yarım paket, iki paket ve vaping</h2>
    <pre>{`Günde yarım paket ($8,50):   $1.551/yıl
Günde iki paket ($8,50):    $6.205/yıl

Vaping/nikotin:
Tek kullanımlık:                  $6-8 her biri, her 1-3 günde bir = $900-$2.900/yıl
Doldurulabilir + likit:          $30-60/ay = $360-$720/yıl
Pod sistemleri:                  $15-25/hafta = $780-$1.300/yıl`}</pre>
    <p>
      Vaping seans başına daha ucuzdur, ancak bağımlılık ve sıklık genellikle toplam harcamayı günde bir paket seviyesine geri getirir. "Vaping yaparak para biriktireceğim" argümanı nadiren on iki ayı geçer.
    </p>

    <h2>Bileşik fırsat maliyeti</h2>
    <p>
      Gerçek rakam, bu dolarların yatırılsaydı ne olacağıdır. %7'lik bir ortalama reel getiri varsayalım:
    </p>
    <pre>{`$3.102/yıl %7 reel getiri ile:
10 yıl:   $42.900     (vs. $31.000 harcanan)
20 yıl:   $127.000    (vs. $62.000 harcanan)
30 yıl:   $293.000    (vs. $93.000 harcanan)
40 yıl:   $620.000    (vs. $124.000 harcanan)`}</pre>
    <p>
      Günde bir paket içen, bırakan ve tasarrufları yatıran 20'li yaşlardaki biri, çalışma hayatı boyunca çeyrek milyon dolarlık bir emeklilik farkıyla karşı karşıyadır. Günde iki paket içenler için bu rakam iki katına çıkar.
    </p>

    <h2>İkincil maliyetler: sigorta</h2>
    <p>
      Sigara içenler neredeyse her sigorta ürünü için daha fazla öder:
    </p>
    <pre>{`Sağlık sigortası (ACA):    %50'ye varan ek ücret mümkün
                           tipik: $1.000-$2.500 ekstra/yıl
Hayat sigortası:            Sigara içmeyene göre 2-3 kat prim
                           $500-$2.000 ekstra/yıl benzer kapsam için
Maluliyet sigortası:      %15-30 daha yüksek
Ev sigortası:             %5-15 daha yüksek (yangın riski)
Araba sigortası (bazı eyaletler): hafif artış`}</pre>
    <p>
      35 yaşında mütevazı hayat sigortası olan bir sigara tiryakisi, paket maliyetinden tamamen ayrı olarak, poliçeler arasında genellikle yılda $1.500-$2.500 daha fazla öder.
    </p>

    <h2>İkincil maliyetler: diş</h2>
    <p>
      Sigara içmek periodontal hastalık, diş kaybı ve lekelenme için en büyük risk faktörlerinden biridir. On yıl boyunca sigaraya bağlı tipik diş maliyetleri:
    </p>
    <ul>
      <li>Diş beyazlatma: $200-$500 seans başına, genellikle her 6-12 ayda bir</li>
      <li>Leke çıkarma için ekstra temizlik: Yılda $100-$150 ekstra</li>
      <li>Diş eti hastalığı tedavisi (küretaj/kök düzeltmesi): $1.000-$4.000</li>
      <li>Kaybedilen dişler için implantlar: Her biri $3.000-$5.000</li>
    </ul>

    <h2>İkincil maliyetler: tıbbi</h2>
    <p>
      Ciddi hastalıktan önce bile, sigara içenlerin temel tıbbi maliyetleri daha yüksektir:
    </p>
    <ul>
      <li>Daha fazla solunum yolu enfeksiyonu, daha fazla doktor ziyareti</li>
      <li>Daha yüksek reçete maliyetleri</li>
      <li>Daha fazla hastalık izni (yılda ~3-5 ekstra) ve kayıp ücretler</li>
      <li>Yaşam boyu biriken kronik hastalıkların daha erken başlangıcı</li>
    </ul>
    <p>
      CDC, ABD'de sigaraya atfedilebilen sağlık harcamalarının yılda ~170 milyar dolar olduğunu tahmin ediyor, bu da sigara içen başına yılda yaklaşık $5.800'e denk geliyor. Atıf belirsizliği hesaba katılsa bile, kişi başına düşen yük gerçektir.
    </p>

    <h2>Ev ve mülk maliyetleri</h2>
    <p>
      İç mekanda sigara içmek bir evin yeniden satış değerini düşürür (normalin $10.000-$30.000 altında), taşınırken boya ve halı değişimi gerektirir ve genellikle depozito kaybına yol açar. Arabanızda sigara içiyorsanız, yeniden satış değeri $500-$2.000 düşer.
    </p>

    <h2>Zaman maliyeti</h2>
    <p>
      Günde bir paket içen biri, aktif olarak sigara içmek için günde ~30 dakika harcar, ayrıca işte sigara molaları, paket satın alma vb. için ek 30 dakika.
    </p>
    <pre>{`1 saat/gün =  365 saat/yıl  =  15 gün/yıl  =  bir çalışma ayı`}</pre>
    <p>
      Bu bir azarlama değil; sigarayı bırakmanın programınıza geri kazandırdıklarının gerçekçi bir muhasebesidir.
    </p>

    <h2>Yıllık toplam maliyet, her şey dahil</h2>
    <pre>{`Orta maliyetli bir ABD şehrinde günde bir paket, 10 yıllık sigara tiryakisi:
Sigara:             $3.100
Sigorta ek ücretleri:   $1.800
Diş ekstraları:          $400
Tıbbi ekstralar:         $400
Fırsat maliyeti:       $4.000/yıl (kayıp bileşik getiri, 10 yıla yayılmış)
                        --------
Gerçek yıllık maliyet:       ~$9.700

30 yıllık kümülatif:     ~$291.000 (gerçek harcama ve kayıp servet)`}</pre>

    <h2>Bugün bırakırsanız ne kazanırsınız</h2>
    <p>
      Hemen:
    </p>
    <ul>
      <li>Satın alınmayan her paket tasarrufa/borca/geleceğe gider</li>
      <li>Sağlık/hayat sigortası 12 ay sigarasız kaldıktan sonra yeniden değerlendirilebilir (%50'ye varan tasarruf)</li>
      <li>Daha az market, benzin ve küçük alışveriş duraklarından tasarruf</li>
    </ul>
    <p>
      Gelecek, yatırılırsa: sigara parasının bir çalışma hayatı boyunca bileşik getirisi; genellikle yeterli emeklilik ile erken emeklilik arasındaki fark.
    </p>

    <h2>Motive edici çerçeve</h2>
    <p>
      "Yılda $3.000 tasarruf etmek için bırak" soyuttur. "Satın almadığınız her paket, tatil fonunuza doğru $12'dir" somuttur. İstediğiniz bir şeye dönüştürün:
    </p>
    <pre>{`Satın alınmayan paket  =  $8,50  =  üç günlük kahve
İçilmeyen hafta       =  $60    =  bir gece dışarı
Bırakılan ay          =  $255   =  hafta sonu gezisi
Bırakılan yıl         =  $3.100 =  ikinci el araba / Asya uçuşu
Bırakılan on yıl      =  $40.000+ =  peşinat / araba / üniversite fonu`}</pre>
    <p>
      Bıraktığınız sabah, tam sigara parasını bir tasarruf hesabına otomatik olarak aktarın. Bir ay içinde bakiye, kararı kendi kendini pekiştirir hale getirir.
    </p>

    <h2>Bırakma yardımcılarının maliyeti</h2>
    <p>
      Bant, sakız, pastil, Zyban, Chantix: 12 haftalık bir program için $200-$800. Sürekli sigara içmeye kıyasla, bu 1-3 ayda kendini amorti eder; yıllık tasarruflara karşı önemsiz bir yatırım.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Sadece paket fiyatını hesaplamak.</strong> Sigorta, diş, tıbbi ve fırsat maliyetini görmezden gelir, bu da genellikle gerçek rakamı ikiye veya üçe katlar.
    </p>
    <p>
      <strong>Vaping/nikotin alternatiflerinin ucuz olduğunu varsaymak.</strong>{" "}
      Kullanım sıklığı, kolaylık ve bulunabilirlikle artar ve potansiyel olarak harcamayı daha da yükseltir.
    </p>
    <p>
      <strong>Enflasyonu görmezden gelmek.</strong> Tütün fiyatları genel enflasyondan daha hızlı yükselir. Gelecekteki maliyetler bugünün rakamlarıyla olduğundan düşük gösterilir.
    </p>
    <p>
      <strong>Zaman vergisini unutmak.</strong> Günde bir saat gerçektir ve asla geri gelmez.
    </p>
    <p>
      <strong>Bileşik etkiyi hafife almak.</strong> Çeyrek milyon dolarlık bir emeklilik farkı abartı değildir; 30 yıl boyunca mütevazı getirilerin matematiğidir.
    </p>
    <p>
      <strong>Sigara parasını otomatik olarak biriktirmemek.</strong> Görünür bir bakiye olmadan, bırakmak kayıp gibi hissettirir, kazanç değil. Transferi otomatikleştirin.
    </p>
    <p>
      <strong>Azaltmaları batık maliyet olarak görmek.</strong> Yarım pakete düşmek bile yılda $1.500 tasarruf sağlar. Mükemmel bırakma anını beklemeyin.
    </p>

    <h2>Kendi rakamlarınızı hesaplayın</h2>
    <p>
      Günlük kullanımınızı ve paket fiyatınızı{" "}
      <a href="/tools/smoking-cost-calculator">sigara maliyeti hesaplayıcısına</a>{" "}
      girerek on yıllık ve ömür boyu toplamları görün. Bunu{" "}
      <a href="/tools/subscription-cost-calculator">abonelik maliyeti hesaplayıcısındaki</a>{" "}
      diğer yinelenen harcamalarla karşılaştırın ve aynı paranın{" "}
      <a href="/tools/compound-interest-calculator">bileşik faiz hesaplayıcısıyla</a> ne olacağını modelleyin; işte bu, bir paketi emeklilik kararına dönüştüren rakamdır.
    </p>
  </>
);