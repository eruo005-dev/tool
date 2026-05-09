export const intro = (
  <>
    <p>
      Çoğu genç geliştirici tahmin yürüterek hata ayıklar — bir console.log ekler, bir satırı değiştirir ve tekrar çalıştırır. Kıdemli geliştiriciler ise hipotezler oluşturup bunları test ederek hata ayıklar. Bu öğrenilebilir bir beceridir. Bu rehber, adım adım tekrarlanabilir bir hata ayıklama sürecini anlatır.
    </p>
    <p>
      Hata ayıklama, gerçek mühendislik işinin %50'sidir. Bu konuda iyi olmak, kod yazmayı öğrendikten sonra geliştirebileceğin en yüksek etkili beceridir.
    </p>
  </>
);

export const body = (
  <>
    <h2>1. Önce, hatayı yeniden üretin</h2>
    <p>
      Hatayı yeniden üretemezseniz, düzeltemezsiniz. Hatayı her seferinde tetikleyen güvenilir bir adım dizisi bulun. Yeniden üretim olmadan, her "düzeltme" bir tahmindir. Buraya zaman ayırın — saatlerce sürecek işten kurtarır.
    </p>

    <h2>2. Bir hipotez oluşturun</h2>
    <p>
      Belirtilere dayanarak, ne olduğunu düşünüyorsunuz? Bunu yazın. Bir hipotez yanlışlanabilir olmalıdır ("bu değişken 42. satırda null"). "Garip bir şey oluyor" bir hipotez değildir.
    </p>

    <h2>3. Hipotezi test edin</h2>
    <p>
      Teorinizi doğrulayan veya çürüten bir log ekleyin, bir kesme noktası koyun veya bir assertion yazın. Her seferinde tek bir deney yapın. Beş şeyi değiştirip tekrar çalıştırmayın — hiçbir şey öğrenmezsiniz.
    </p>

    <h2>4. Hata mesajını dikkatlice okuyun</h2>
    <p>
      Çoğu hata, size tam olarak neyin yanlış olduğunu söyler. Stack trace'ler size tam dosya ve satırı verir. Her kelimeyi okuyun. İki kez okumadan Google'a yapıştırmayın. Zamanın yarısında cevap tam oradadır.
    </p>

    <h2>5. Gerçek bir hata ayıklayıcı kullanın</h2>
    <p>
      Chrome DevTools, VS Code hata ayıklayıcı, pdb. Kesme noktaları, yürütmeyi duraklatmanıza ve durumu incelemenize olanak tanır. Karmaşık hatalar için console.log'dan çok daha hızlıdır. 30 dakikalık öğrenme yatırımına değer.
    </p>

    <h2>6. Kodda ikili arama yapın</h2>
    <p>
      Hata yakın zamanda mı ortaya çıktı? git bisect, log-2-N adımda sorunlu commit'i bulur. Hata büyük bir fonksiyonda mı? Yarısını yorumlayın, hangi yarıda hata olduğunu görün, tekrarlayın. Arama alanını yarıya indirmek, doğrusal taramadan daha iyidir.
    </p>

    <h2>7. Önce bariz olanı kontrol edin</h2>
    <p>
      Servis çalışıyor mu? Doğru branch'te misiniz? Dosyayı kaydettiniz mi? Ortam değişkeni ayarlanmış mı? Kıdemliler daha az utanır çünkü 2 saat hata ayıklamadan önce bunları kontrol ederler.
    </p>

    <h2>8. Lastik ördek yöntemiyle hata ayıklama</h2>
    <p>
      Hatayı, satır satır, cansız bir nesneye (veya soru sormayan bir iş arkadaşına) yüksek sesle açıklayın. Zamanın yarısında, hatayı cümlenin ortasında fark edersiniz. Sözlü ifadeyi zorlamak işe yarar.
    </p>

    <h2>9. Mola verin</h2>
    <p>
      30 dakikadır takıldınız mı? 10 dakika uzaklaşın. Ekrana bakmadığınızda beyniniz işlemeye devam eder. Cevap genellikle mutfaktan dönerken gelir. Tünel görüşü sizi yavaşlatır, hızlandırmaz.
    </p>

    <h2>10. Düzelttikten sonra bir test yazın</h2>
    <p>
      Her hata, eksik bir testtir. Onu yakalayacak olan testi yazın. Regresyonu önler, düzeltmeyi belgeler ve zamanla daha güçlü bir test paketi oluşturur. Daha geniş alışkanlıklar için,{" "}
      <a href="/guides/how-to-write-clean-code">temiz kod rehberine</a> bakın.
    </p>

    <h2>11. Bir hata ayıklama günlüğü tutun</h2>
    <p>
      Zor hatalar için, ne denediğinizi ve ne öğrendiğinizi yazın. Gelecekteki siz (veya takım arkadaşınız) size teşekkür edecek. Devir teslimleri kolaylaştırır ve çıkmaz sokakların tekrarlanmasını önler.
    </p>

    <h2>12. Her şey başarısız olursa, basitleştirin</h2>
    <p>
      Kodu minimal bir yeniden üretime indirgeyin. Hata kaybolana kadar her şeyi kaldırın, sonra tekrar ortaya çıkana kadar geri ekleyin. Eklediğiniz son şey neredeyse her zaman nedendir. Daha geniş beceri bağlamı için, <a href="/guides/how-to-learn-coding-fast">hızlı kod öğrenme rehberine</a> bakın.
    </p>
  </>
);