export const intro = (
  <>
    <p>
      Temiz kod, düzyazı gibi okunan koddur — yeni bir geliştirici haritasız takip edebilir,
      ve gelecekteki siz korkmadan değiştirebilir. Temiz kod, estetik yarışmalarıyla
      ya da bir kitaptaki her kurala uymakla ilgili değildir; koda dokunacak bir sonraki
      kişinin bilişsel yükünü azaltmakla ilgilidir, ki bu neredeyse her zaman altı ay sonraki
      sizsiniz.
    </p>
    <p>
      Bu rehber, kalıcı olan kodu yeniden yazılması gereken koddan ayıran pratik, dil bağımsız
      ilkeleri kapsar. Teori değil; gerçek incelemelerde fark yaratan şeyler.
    </p>
  </>
);

export const body = (
  <>
    <h2>1. Şeyleri kesin olarak adlandırın</h2>
    <p>
      Adlandırma, okunabilirlikteki en büyük kaldıraçtır. <code>getUserData()</code> belirsizdir;{" "}
      <code>fetchActiveUserProfile()</code> açıktır. Kısaltmalardan kaçının, alanınızda standart
      olmadıkça. İsimler niyeti ortaya koymalıdır; bir değişkenin ne tuttuğunu açıklamak için
      yoruma ihtiyacınız varsa, isim yanlıştır.
    </p>

    <h2>2. Fonksiyonlar tek bir şey yapar</h2>
    <p>
      Tek Sorumluluk Prensibi, özetle: bir fonksiyonun değişmek için tek bir nedeni olmalıdır. Bir
      fonksiyonu "ve" olmadan tek bir kısa cümleyle tanımlayamıyorsanız, çok fazla şey yapıyordur.
      Parçalara ayırın — küçük odaklı fonksiyonlar test etmesi, yeniden kullanması ve anlaması
      daha kolaydır.
    </p>

    <h2>3. Fonksiyonları kısa tutun</h2>
    <p>
      Bir ekrana sığmayan bir fonksiyon genellikle birden çok fonksiyonu gizliyordur. Kaba bir
      tavan olarak 20 satırı hedefleyin. İstisnalar vardır (büyük switch tabloları, özel
      algoritmalar), ancak bunlar istisna gibi hissettirmelidir — norm değil.
    </p>

    <h2>4. Açıklığı zekaya tercih edin</h2>
    <p>
      Okunması zor olan tek satırlık bir ternary, bariz olan 8 satırlık bir if/else'den daha
      kötüdür. Gelecekteki siz, bariz versiyon için şimdiki size teşekkür edecek. Sektörün
      en iyi mühendisleri sıkıcı derecede açık kod yazar; zeki kod yazanlar, hava atmaya
      çalışan çaylaklardır.
    </p>

    <h2>5. Hataları açıkça ele alın</h2>
    <p>
      İstisnaları yutmayın. "Bir şeyler yanlış gitti" sinyali vermek için null döndürmeyin.
      Hatayı doğru seviyede ele alın veya bağlamla birlikte yayın. Her sessiz başarısızlık,
      gelecekteki bir hata ayıklama seansıdır.
    </p>

    <h2>6. Adlandırmanız gereken şeyi yorumlamayın</h2>
    <p>
      Tam olarak bunu yapan bir döngünün üstündeki <code>// Kullanıcılar arasında döngü yap ve e-postalar gönder</code>
      gürültüdür. Bir yorum <em>neden</em>i açıklamalıdır, <em>ne</em>yi değil. Kodun ne yaptığını
      açıklamak için bir yoruma ihtiyacı varsa, bunun yerine açıklayıcı bir isimle bir fonksiyon çıkarın.
    </p>

    <h2>7. Ölü kodu silin</h2>
    <p>
      Yorumlanmış kod, kullanılmayan importlar, terk edilmiş yardımcılar. Sürüm kontrolünüz eski
      sürümü zaten hatırlar. Ölü kodu sonsuza kadar taşımak dosyaları şişirir ve incelemeler
      sırasında "bekle, bu kullanılıyor mu?" sürtüşmesine yol açar. Silin.
    </p>

    <h2>8. Çağrı noktasını basit tutun</h2>
    <p>
      7 konumsal argüman alan bir fonksiyon bir tasarım sorununa işaret eder. Adlandırılmış parametre
      nesnelerini, mantıklı varsayılanları ve daha küçük fonksiyonlara bölmeyi tercih edin. Çağıran,
      çağrıyı okuyup tanıma atlamadan ne yaptığını bilmelidir.
    </p>

    <h2>9. Zor kısımları test edin</h2>
    <p>
      %100 kapsama ihtiyacınız yok; hataların maliyetli ve belirsiz olduğu yerlerde kapsama
      ihtiyacınız var. Karmaşık iş mantığı, uç durumlar, ayrıştırma, parayla ilgili her şey.
      Basit yapıştırıcı kod ve önemsiz getter'lar genellikle test gerektirmez — ancak zor
      kısımlar kesinlikle gerektirir.
    </p>

    <h2>10. Saf mantığı yan etkilerden ayırın</h2>
    <p>
      Hesaplama yapan fonksiyonlar aynı zamanda diske yazmamalı, API'leri çağırmamalı veya global
      durumu mutasyona uğratmamalıdır. Saf mantığı saf tutun — önemsiz bir şekilde test edilebilir.
      Yan etkileri programınızın kenarlarında izole edin. Bu tek desen, hata oranlarını önemli
      ölçüde azaltır.
    </p>

    <h2>11. İmkansız durumları imkansız kılın</h2>
    <p>
      Durumunuzdaki iki bayrak asla aynı anda doğru olamıyorsa, bunu kodda yönetmek yerine tip
      sisteminde imkansız kılın. "Kullanıcı giriş yapmış ancak kimliği yok" korunmamalı,
      temsil edilemez olmalıdır. Zengin tipler, tüm hata kategorilerini önler.
    </p>

    <h2>12. Derleyici için değil, okuyucu için yazın</h2>
    <p>
      Yazdığınız her kod, yazıldığı her sefer için 100 kez okunacaktır. Okuma için optimize edin.
      Tutarlı biçimlendirme (bir biçimlendirici kullanın), tutarlı adlandırma, tutarlı desenler.
      Öngörülebilirlik, kişisel stilden çok daha değerlidir.
    </p>

    <h2>Kod inceleme kontrol listeniz</h2>
    <p>
      Bir PR açmadan önce, kendi farkınızı şu sorularla inceleyin: İsimler açık mı? Her
      fonksiyon tek bir şey yapıyor mu? Hatalar ele alınıyor mu? Ölü kod var mı? Zor
      kısımlar için testler var mı? Bu 5 dakikalık kendi kendine inceleme, aksi takdirde
      yorumlarla geri dönecek olan çoğu şeyi yakalar.{" "}
      <a href="/guides/how-to-prepare-for-coding-interviews">Mülakat hazırlık rehberimiz</a> ile
      birlikte kullanarak baskı altında kodu açıklama becerisini de geliştirin.
    </p>
  </>
);