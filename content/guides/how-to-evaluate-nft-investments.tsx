import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2021 NFT balonu sona erdi. Altı haneli rakamlara satılan JPEG'lerin çoğu artık sıfır veya sıfıra yakın değerde ve
    bir zamanlar ikonik olan koleksiyonların taban fiyatları %80-95 oranında çöktü. Bu, NFT'lerin öldüğü anlamına gelmez,
    ancak dürüst herhangi bir değerlendirmenin acı gerçekle başlaması gerektiği anlamına gelir: geleneksel anlamda yatırım yapmıyor,
    likit olmayan bir dijital varlık üzerinde spekülasyon yapıyorsunuz. Bu rehber, hala önemli olan NFT'ler için gerçek durum tespiti adımlarını anlatıyor.
  </p>
);

export const body: ReactElement = (
  <>
    <p>
      Yatırım tavsiyesi değildir. Lisanslı bir danışmana danışın. NFT yatırımı yüksek riskli bir spekülasyondur ve
      gaz ücretleri, platform ücretleri ve çoğu koleksiyonun sıfıra doğru gitme gerçeği dahil edildiğinde ortalama alıcı için beklenen getiri negatiftir.
      Aşağıdakilerin tümünü, güvenilir bir şekilde para kazanma stratejisi değil, riski değerlendirmek için bir çerçeve olarak ele alın.
    </p>

    <h2>Gerçek kullanım alanlarının hala var olduğu yerler</h2>
    <p>
      Çöküşe rağmen, bir avuç kategori gerçek fayda sağlayarak ayakta kaldı. Üyelik erişimli
      NFT'ler (Flyfish Club, Friends With Benefits gibi) devredilebilir kulüp kartları olarak işlev görür. Yaratıcı telif hakkı
      NFT'leri, müzisyenlerin ve sanatçıların doğrudan hayranlarına satış yapmasına ve en azından telif haklarını uygulayan pazaryerlerinde
      ikincil satışlardan bir pay almasına olanak tanır. Oyun içi işlevi olan oyun varlıkları &mdash; kostümler, arazi parselleri,
      üreme hakları &mdash; temel oyunun oyuncuları olduğu sürece hala aktif olarak işlem görür. Alan adları
      (ENS, Unstoppable Domains) küçük ama istikrarlı bir kategori olmaya devam ediyor.
    </p>

    <h2>Satın almadan önce kontrol edilmesi gerekenler</h2>
    <ul>
      <li>Son 30 ve 90 gündeki işlem hacmi &mdash; ölü koleksiyonları pohpohlayan tüm zamanların toplamı değil.</li>
      <li>6 aylık grafikte taban fiyat eğilimi. Sürekli bir düşüş genellikle terminaldir.</li>
      <li>Sahiplik yoğunluğu. İlk 10 cüzdan arzın %40'ından fazlasını elinde tutuyorsa, tek bir balina taban fiyatını çökertebilir.</li>
      <li>Ekibin kimliğinin açık olup olmadığı (gerçek isimler, gerçek geçmiş) veya anonim olup olmadığı.</li>
      <li>Yol haritası uygulaması &mdash; söz verdiklerini gerçekten teslim ettiler mi, yoksa hepsi &ldquo;çok yakında&rdquo; mı?</li>
      <li>Toplam arza karşı benzersiz sahip sayısı. Düşük benzersiz sahip sayısı, yıkama ticareti olasılığını gösterir.</li>
    </ul>

    <h2>Durum tespiti araçları</h2>
    <p>
      DappRadar, koleksiyon düzeyinde hacim ve sahip istatistikleri sağlar. NFTPriceFloor, taban geçmişini takip eder ve
      rug pull'ları işaretler. OpenSea analitiği, en büyük sahipleri ve liste baskısını gösterir. Daha derin cüzdan analizi için
      Nansen, akıllı para cüzdanlarını etiketleyerek kimin alıp kimin çıktığını görmenizi sağlar. Etherscan
      ile sözleşme sahipliğini, basım yetkisini ve telif haklarının zincir üzerinde uygulanabilir olup olmadığını doğrulayabilirsiniz.
    </p>

    <h2>Kırmızı bayraklar</h2>
    <p>
      Bir ünlü basımı neredeyse her zaman kötü biter &mdash; ünlü parasını alır, hayranlar kazıklanır. Henüz gerçekten var olmayan
      &ldquo;fayda&rdquo;lara dikkat edin (vadedilen airdrop'lar, stake etme, sürekli geliştirme aşamasında olan oyunlar).
      Koordineli patlamalarla hacmi şişiren taban süpürme botları, talep değil manipülasyon sinyalidir. Perakendeye boşaltılabilecek
      büyük miktarda arzı elinde tutan gizli ekip cüzdanlarına sahip koleksiyonlardan sakının. Discord tamamen fiyat muhabbeti ve
      gerçek bir topluluk değilse, siz çıkış likiditesisiniz.
    </p>

    <h2>Gaz, ücretler ve vergiler</h2>
    <p>
      Ethereum'daki gaz ücretleri küçük bir işlemin %2-10'unu kolayca yiyebilir ve pazar yeri ücretleri ek %2-2,5 ekler.
      Bir NFT'yi döndürmek, 1.000 doların altındaki pozisyonlar için genellikle potansiyel kazançtan daha pahalıya mal olur.
      Daha da kötüsü, IRS NFT'leri mülk olarak kabul eder: her satış, takas ve hatta başka bir token ile değişim vergiye tabi bir olaydır
      ve NFT koleksiyon ürünü olarak sınıflandırılırsa, normal %15-20 yerine %28'e kadar uzun vadeli sermaye kazancı vergisiyle
      karşılaşabilirsiniz. Maliyet esası kayıtlarını titizlikle tutun.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Zirve heyecanında trend olan bir koleksiyonun tabanını satın almak ve altı ay boyunca kan kaybını izlemek. İçine girdiğiniz
      yaratıcı ekonomisini sessizce öldüren telif hakkı atlama pazaryerlerini görmezden gelmek. Likit olmayan bir varlığa
      &ldquo;taban&rdquo; fiyattan çıkabiliyormuş gibi davranmak &mdash; gerçek çıkış fiyatı, genellikle tabanın %20-40 altında olan
      en yüksek tekliftir. Kaldıraç veya NFT teminatlı krediler kullanmak &mdash; ince bir piyasada zorunlu tasfiyeler yıkıcıdır.
    </p>

    <h2>Alt satır</h2>
    <p>
      NFT yatırımı, sanat koleksiyonculuğu kılığına girmiş yüksek riskli bir spekülasyondur. Gerçekten değer verdiğiniz bir şeye
      &mdash; bir üyelik, oynadığınız bir oyun, desteklediğiniz bir yaratıcı &mdash; küçük bir pozisyon almak mantıklı olabilir.
      NFT'leri hisse senetleri ve tahvillerin yanında bir portföy dağılımı olarak görmek mantıklı değildir. Bahsi buna göre ayarlayın,
      sıfıra gitmesini bekleyin ve önemli olacak kadar büyük herhangi bir satın alma işleminden önce lisanslı bir danışmana danışın.
    </p>
  </>
);