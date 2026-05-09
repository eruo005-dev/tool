/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      DIY'ye karşı hazır alma sorusu oyun bilgisayarları için r/buildapc ve
      r/buildapcforme'da sürekli gündeme geliyor. Çoğu yanıt, "çok kolay" olduğu için
      içgüdüsel olarak DIY'i öneriyor. Dürüst cevap: zamanınızın değerine, hata riski
      toleransınıza ve montajı ne kadar keyif alacağınıza bağlı.
    </p>
    <p>
      Bu rehber yapılandırılmış bir karşılaştırmadır: 2026'da montaj yapmak aslında ne kadar zor,
      ne ters gidebilir ve denklemi bir yöne çeviren girdiler nelerdir.
      Kendi rakamlarınız için <a href="/tools/pc-build-vs-hire-calculator">montaj-vs-kiralama hesaplayıcımızı</a>{" "}
      kullanın.
    </p>
  </>
);

export const toc = [
  { id: "how-hard", label: "Montaj yapmak gerçekten zor mu?" },
  { id: "what-could-go-wrong", label: "Ne ters gidebilir" },
  { id: "savings", label: "DIY ile ne kadar tasarruf edebilirsiniz?" },
  { id: "decision", label: "Fiyat dışındaki karar faktörleri" },
];

export const body = (
  <>
    <h2 id="how-hard">Kendi oyun bilgisayarınızı monte etmek gerçekten zor mu?</h2>
    <p>
      Pazarlamanın gösterdiğinden daha kolay, YouTube eğitimlerinin önerdiğinden daha zor.
      Dürüst zorluk profili:
    </p>
    <ul>
      <li>
        <strong>Mekanik montaj:</strong> kolay. Modern parçalar anahtarlıdır; çoğu şeyi
        yanlış takmanız fiziksel olarak mümkün değildir. CPU soketleri hâlâ en
        riskli an — ağır ellerden bükülen pinler 300 dolarlık bir parçayı mahveder.
      </li>
      <li>
        <strong>Kablo yönetimi:</strong> orta. Temiz görünmesi pratik gerektirir. Performansı
        etkilemez — tamamen estetiktir. İlk montajlar her zaman dağınık görünür.
      </li>
      <li>
        <strong>BIOS + ilk açılış:</strong> orta. Bazen sistem ilk denemede POST geçer.
        Bazen geçmez ve QR kodlu LED hata ayıklayıcıyla bir saat geçirirsiniz.
        Yaygın ilk açılış sorunları: RAM yanlış yuvalarda, monitör GPU yerine anakarta
        takılı, EPS güç kablosu tam oturmamış.
      </li>
      <li>
        <strong>Termal yönetim:</strong> çoğu montaj için düşük zorluk. Modern AIO
        soğutucular ve CPU soğutucuları, stok ayarlarda çoğunlukla aptal geçirmezdir. Özel
        su soğutma devreleri çok daha zordur.
      </li>
      <li>
        <strong>İşletim sistemi kurulumu + sürücüler:</strong> kolay. USB'den Windows 11 kurulumu
        15 dakika sürer; yonga seti + GPU sürücüleri 15 dakika daha ekler.
      </li>
    </ul>
    <p>
      İlk kez montaj yapan biri için toplam gerçekçi zaman yatırımı: kutudan çıkarmadan
      işletim sistemi kurulumu ve sürücü güncellemesine kadar 6–12 saat. Deneyimli montajcılar
      bunu 2–3 saatte yapar.
    </p>

    <h2 id="what-could-go-wrong">Ne ters gidebilir (ve ne sıklıkta)</h2>
    <p>
      Birden fazla r/buildapc ölüm sonrası incelemesine göre ilk kez montaj yapanlar için hata
      olasılığı ortalama %15–25'tir. En yaygın hatalar:
    </p>
    <ul>
      <li>
        <strong>Bükülmüş CPU pinleri (~%5).</strong> Maliyetli. Ya CPU'yu değiştirin ya da
        bir iğne ile geri bükmeyi deneyin (bazen işe yarar, bazen yaramaz).
      </li>
      <li>
        <strong>RAM yanlış yuvalarda (~%10).</strong> Teşhis edildiğinde ucuz düzeltme (kılavuzun
        belirttiği çift kanal yuvalarına yeniden takın), ancak panikli bir ilk
        açılışa neden olur.
      </li>
      <li>
        <strong>Monitör GPU yerine anakart portunda (~%10).</strong> İlk açılışta siyah
        ekran. Ücretsiz düzeltme.
      </li>
      <li>
        <strong>EPS / 24-pin güç kablosu takılı değil (~%5).</strong> Ücretsiz düzeltme.
      </li>
      <li>
        <strong>Unutulan vidalı ayaklar anakart kısa devresine neden olur (~%3).</strong> Kötü.
        Anakarta zarar verebilir. Vidalı ayakları her zaman kasa şablonunuza göre sayın.
      </li>
      <li>
        <strong>BIOS'ta yanlış RAM hızı (~%15).</strong> BIOS'ta EXPO/XMP'yi etkinleştirdiğinizde
        ücretsiz düzeltme. Varsayılan JEDEC hızlarındaki RAM, belirtilenden %30 daha yavaştır;
        birçok montajcı RAM'lerini farkında olmadan yavaş çalıştırır.
      </li>
      <li>
        <strong>Yetersiz PSU (~%5).</strong> Bazen sistem çalışır ancak yük altında güç
        dalgalanmaları PSU'yu tetikler ve çökmelere neden olur. Teşhis: kutlamadan önce stres testi yapın.
      </li>
    </ul>
    <p>
      Bunların çoğu sorun giderme süresiyle düzeltilebilir. Maliyetli hatalar
      (bükülmüş pinler, anakart kısa devresi) sigorta yapılması gerekenlerdir.
    </p>

    <h2 id="savings">DIY ile ne kadar tasarruf edebilirsiniz?</h2>
    <p>
      NZXT BLD veya Origin PC gibi bir hizmetten özel yapım bir bilgisayarla karşılaştırıldığında:
      parça maliyetinde %5–15 tasarruf. Best Buy veya Amazon'dan önceden monte edilmiş ve
      gönderilmiş bir bilgisayarla karşılaştırıldığında: %10–25. iBuyPower veya CyberPower
      gibi ucuz ön montajlı bilgisayarlarla karşılaştırıldığında: genellikle başa baş — bunlar
      kendinizin satın almayacağı ucuz PSU/RAM/soğutma kullanır.
    </p>
    <p>
      Yerel montaj hizmetine kıyasla daha büyük tasarruf: genellikle 80–300 dolar hizmet
      ücretine karşılık sizin zamanınız. Saatlik değeriniz 40 dolar ve 8 saat harcıyorsanız, matematik
      320 dolar zamanınız vs 150 dolar hizmet ücreti + garanti değeridir. Kendi
      rakamlarınız için <a href="/tools/pc-build-vs-hire-calculator">montaj-vs-kiralama hesaplayıcısını</a> çalıştırın.
    </p>

    <h2 id="decision">Fiyat dışındaki karar faktörleri</h2>
    <ul>
      <li>
        <strong>Beceri geliştirme.</strong> İlk DIY montajı, sistemi hiçbir okumanın
        öğretemeyeceği şekilde öğretir. Gelecekteki yükseltmeler ve sorun giderme
        kolaylaşır.
      </li>
      <li>
        <strong>Kişiselleştirme.</strong> DIY, tam olarak istediğiniz kasa, fan,
        RGB, kablo görünümünü seçmenizi sağlar. Ön montajlı bilgisayarlar kasa kalitesi ve PSU'da
        ödün verir.
      </li>
      <li>
        <strong>Garanti tercihleri.</strong> Ön montajlı garanti tüm sistemi
        kapsar. DIY garantisi parça başınadır ve montaj sorunları size aittir. Güvenilirlik
        konusunda endişeliyseniz önemlidir.
      </li>
      <li>
        <strong>Zaman + risk toleransı.</strong> Projeden keyif alacak
        ve boş bir Cumartesi gününüz varsa, DIY. Bu hafta sonu oyun oynamayı
        tercih ediyorsanız, dışarıdan kiralayın veya ön montajlı alın.
      </li>
      <li>
        <strong>Yerel kaynaklar.</strong> Bir Micro Center yakınında mı yaşıyorsunuz? ~150 dolara
        garantiyle montaj yapıyorlar. Uzak bir yerde mi yaşıyorsunuz? Gönderilen ön montajlı
        pratik yolunuzdur.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Montaj vs kiralama hesaplayıcısı (ücretsiz)",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "Oyun bilgisayarımı kendim mi monte etmeliyim yoksa birine mi yaptırmalıyım?",
    a: "Hesaplayıcıyı gerçekçi hata olasılıklarıyla (ilk kez montaj yapanlar için %15-25) çalıştırın. Deneyimli montajcılar için DIY neredeyse her zaman kazanır. İlk kez montaj yapanlar için saatlik değere ve zaman toleransına bağlıdır. Parasal olmayan faktörler (beceri geliştirme, kişiselleştirme memnuniyeti) DIY'i teşvik eder. Kolaylık, kiralamayı teşvik eder.",
  },
  {
    q: "Kendi oyun bilgisayarınızı monte etmek gerçekten zor mu?",
    a: "Pazarlamanın önerdiğinden daha kolay, YouTube eğitimlerinin gösterdiğinden daha zor. Mekanik montaj kolaydır (parçalar anahtarlıdır). BIOS ilk açılışı bir saat sürebilir. Kablo yönetimi pratik gerektirir. Gerçekçi süre: ilk montaj 6-12 saat, deneyimli 2-3 saat. Montaj için toplam beceri seviyesi düşüktür; sistem ilk denemede POST geçmediğinde hata ayıklama daha zor kısımdır.",
  },
  {
    q: "Oyun bilgisayarı monte ederken ne ters gidebilir?",
    a: "En yaygın hatalar (sıklıklarıyla): bükülmüş CPU pinleri (%5, pahalı), RAM yanlış yuvalarda (%10, ücretsiz düzeltme), monitör anakart portunda (%10, ücretsiz düzeltme), EPS gücü takılı değil (%5, ücretsiz), eksik vidalı ayaklar kısa devreye neden olur (%3, pahalı), BIOS'ta yanlış RAM hızı (%15, ücretsiz düzeltme), yetersiz PSU (%5). Çoğu düzeltilebilir; bükülmüş pinler + anakart kısa devresi maliyetli olanlardır.",
  },
  {
    q: "Kendi oyun bilgisayarınızı monte ederek ne kadar tasarruf edebilirsiniz?",
    a: "NZXT BLD / Origin PC'den özel yapıma kıyasla %5-15 tasarruf. Best Buy / Amazon'dan ön montajlıya kıyasla %10-25. iBuyPower / CyberPower ile kabaca başa baş (bunlar sizin satın almayacağınız ucuz parçalar kullanır). Yerel montaja kıyasla daha büyük tasarruf genellikle 80-300 dolar hizmet ücretine karşı sizin zamanınızdır — kendi rakamlarınız için hesaplayıcımızı çalıştırın.",
  },
];