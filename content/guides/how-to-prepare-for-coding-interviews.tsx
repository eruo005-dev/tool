export const intro = (
  <>
    <p>
      Kodlama mülakatları kendine özgü bir beceridir. Hazırlık yapmayan güçlü mühendisler rutin olarak başarısız olurken, iyi hazırlanan vasat mühendisler iş teklifi alır. İyi haber: bu beceri dar kapsamlı, öğrenilebilir ve hazırlığın getirisi muazzamdır — en iyi işverenlerden gelen bir teklif yıllık gelirinizi altı haneli rakamlara çıkarabilir.
    </p>
    <p>
      Bu rehber, 500 saatlik LeetCode versiyonu değil, verimli hazırlık versiyonudur. Çoğu aday, 8-12 haftaya yayılmış 40-100 odaklanmış saatle ihtiyaç duydukları seviyeye ulaşabilir.
    </p>
  </>
);

export const body = (
  <>
    <h2>1. Önce hedef şirket seviyesini belirleyin</h2>
    <p>
      Hazırlık derinliği hedefe göre değişir. FAANG L4/L5 rolleri, zaman baskısı altında sistem tasarımı <em>ve</em>{" "}
      algoritmalar gerektirir. Seri-B startup ise ev ödevi ve gerçek dünya kodlama eşleştirmesi olabilir. Asla kullanmayacağınız dinamik programlama alıştırmalarıyla bir ay geçirmeden önce neyle karşılaşacağınızı bilin.
    </p>

    <h2>2. Sorunları değil, kalıpları bilin</h2>
    <p>
      Yaklaşık 15 temel sorun kalıbı vardır: iki işaretçi, kayan pencere, grafiklerde BFS/DFS, ikili arama varyasyonları, dinamik programlama (1B ve 2B), aralıklar, yığınlar, trie'ler, topolojik sıralama, birleştir-bul, monoton yığın. Kalıpları öğrenmek, yeni bir sorunu bilinen bir şekil olarak tanımanızı sağlar. Belirli çözümleri ezberlemek ölçeklenmez.
    </p>

    <h2>3. Kolay sorunlarla başlayın, her birini bitirin</h2>
    <p>
      Erken hazırlık tuzağı: zor sorunlara atlamak, takılıp kalmak, çözümlere bakmak. Bu hiçbir şey kazandırmaz. Kolay sorunları rahatça çözene kadar yapın, ardından orta seviyeye geçin. Mevcut seviyenizin ötesinde şeyler yaparak daha iyi olmaya çalışmayı bırakın.
    </p>

    <h2>4. Bir sorunu üç kez çözün</h2>
    <p>
      Sıfırdan deneyin → çözümü okuyun → ertesi gün kitap kapalı, sıfırdan uygulayın. Bu üç aşamalı yaklaşım, maruz kalmayı kalıcılığa dönüştürür. Sadece bir çözümü okumak neredeyse hiçbir şey öğretmez.
    </p>

    <h2>5. Çözümü konuşarak anlatma pratiği yapın</h2>
    <p>
      Mülakatlar, doğruluk kadar iletişimi de puanlar. Düşüncelerinizi seslendirin: &ldquo;İlk aklıma gelen BFS çünkü en kısa yola ihtiyacımız var. Önce uç durumları ele alayım…&rdquo; Sessiz pratik yaparsanız, mülakatta sessiz olursunuz, bu da panik olarak algılanır, panik olmasanız bile.
    </p>

    <h2>6. Her zaman zamanlayıcı kullanın</h2>
    <p>
      Gerçek mülakatlar 45 dakikadır. 35 dakikalık bir zamanlayıcıyla pratik yapın,{" "}
      <a href="/tools/countdown-timer">geri sayım zamanlayıcımızı</a> kullanarak. Baskı her şeyi değiştirir — yapılandırılmamış bir saatte çözebileceğiniz sorunlar, birinin izlediği 35 dakikada çözebileceğiniz sorunlardan çok farklıdır.
    </p>

    <h2>7. Sadece bireysel değil, deneme mülakatları yapın</h2>
    <p>
      Bireysel hazırlık, mülakatları zorlaştıran şeylerin %40'ını kaçırır: karşıdaki kişi, tempo, baskı. Pramp, interviewing.io veya bir arkadaş. Sadece 5 deneme mülakatı, 30 bireysel sorundan daha fazla katkı sağlar.
    </p>

    <h2>8. Sistem tasarımını hedef kıdemle orantılı çalışın</h2>
    <p>
      Kıdemli+ roller için sistem tasarımı, sürecin yarısıdır. 2-3 kanonik sistem seçin (URL kısaltıcı, Twitter akışı, sohbet sistemi, araç paylaşımı) ve 45 dakikada tasarlama pratiği yapın — kapasite tahminleri, API'ler, veri modelleri, ölçekleme darboğazları. &ldquo;Designing Data Intensive Applications&rdquo; bunun için okumaya değer tek kitaptır.
    </p>

    <h2>9. Davranışsal hazırlık isteğe bağlı değildir</h2>
    <p>
      Çoğu mühendis davranışsal turların kolay olduğunu düşünür ve sonra başarısız olur. Şunları kapsayan 5-7 spesifik hikayeniz olsun: çatışma, liderlik, teknik ödünleşimler, başarısızlık ve belirsizlik. STAR yapısını (Durum, Görev, Eylem, Sonuç) kullanın ve sesli pratik yapın. Harika bir hikaye üç soruyu kapsar.
    </p>

    <h2>10. Baskı altında kendi kodunuzu gözden geçirin</h2>
    <p>
      Her sorundan sonra yazdıklarınızı tekrar okuyun. Neresi dağınıktı? Nerede tereddüt ettiniz? Hangi uç durumları kaçırdınız? Bu öz değerlendirme, gelişimin gerçekleştiği yerdir. Stil ve yapı tarafı için{" "}
      <a href="/guides/how-to-write-clean-code">temiz kod rehberimizle</a> birlikte kullanın.
    </p>

    <h2>11. Uyuyun, egzersiz yapın ve bir gün önce sıkı çalışmayın</h2>
    <p>
      Mülakattan bir gün önce bir ısınma sorunu yapın ve dinlenin. 24 saat kala zor sorunlara yüklenmek sizi yorar ve sarsar, daha keskin yapmaz. Bilişsel performans, bir önceki gece yaptığınız marjinal sorundan çok daha fazla uyku ve enerji tarafından belirlenir.
    </p>

    <h2>12. Yapılandırılmış bir haftalık plan oluşturun</h2>
    <p>
      8-12 haftalık hazırlık, haftada 4-6 saat, biraz geçmişi olan çoğu kişi için yeterlidir. Tutarlı ilerleme için{" "}
      <a href="/guides/how-to-plan-your-week">haftalık planlama rehberimizi</a> kullanın. Haftaları atlamak, hazırlığın durmasının 1 numaralı nedenidir.
    </p>

    <h2>İlk hazırlık haftanız</h2>
    <p>
      Bir hedef şirket seçin. Olası turları belirleyin. 15 kalıbı örnek sorunlarla eşleştirmek için bir saat harcayın. Her biri üç kez yapılan 3 kolay sorunla başlayın. İkinci haftanın sonunda bir deneme mülakatı yapın. Bu ritmi 8 hafta boyunca sürdürün. Tüm oyun kitabı bu.
    </p>
  </>
);