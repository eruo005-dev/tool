export const intro = (
  <>
    <p>
      <a href="/learn/meta-description">Meta açıklama</a>, Google'ın arama sonuçlarında sayfa başlığınızın altında gösterdiği kısa metindir.
      Sayfanızı doğrudan sıralamaz, ancak listeniz için reklam metni görevi görür. İyi bir
      meta açıklama, kötü bir meta açıklamaya kıyasla tıklama oranını iki katına çıkarabilir — ve halihazırda sıralamada olan bir sayfada <a href="/learn/ctr">TO</a>'yu iki katına çıkarmak, yapacağınız en yüksek <a href="/learn/roi">ROI</a>'li SEO çalışmasıdır.
    </p>
    <p>
      Bu kılavuz, 2026'da gerçekten önemli olan kuralları kapsar: uzunluk, niyet eşleştirme,
      tıklama kazandıran parantezler ve değiştiriciler ile Google'ın açıklamanızı görmezden gelip
      otomatik olarak bir tane oluşturmasına neden olan hatalar.
    </p>
  </>
);

export const body = (
  <>
    <h2>Meta açıklama nedir (ve ne değildir)</h2>
    <p>
      Meta açıklama, sayfanızın <code>&lt;head&gt;</code> bölümünde bulunan kısa bir HTML etiketidir:{" "}
      <code>&lt;meta name=&quot;description&quot; content=&quot;...&quot; /&gt;</code>. Bu bir
      sıralama faktörü değildir. Arama motorları bunu görüntüleyebilir veya görüntülemeyebilir — eğer sayfanızın gövde metninin sorguyu daha iyi yanıtladığını düşünürlerse, onu kullanırlar. Göreviniz, Google'ın değiştirmek için hiçbir nedeni olmayacak şekilde sorguyla sıkı sıkıya eşleşen bir açıklama yazmaktır.
    </p>

    <h2>En uygun uzunluk</h2>
    <p>
      Masaüstü için 150–160 karakter ve mobil öncelikli sorgular için yaklaşık 120 karakter hedefleyin.
      Daha uzun açıklamalar üç nokta ile kesilir — Google cümleyi kelimenin ortasında keser,
      bu da profesyonelce görünmez. Yazarken kesintinin masaüstünde ve mobilde tam olarak nerede olduğunu görmek için{" "}
      <a href="/tools/meta-description-length-checker">meta açıklama uzunluk denetleyicimizi</a> kullanın.
    </p>

    <h2>Anahtar kelimeyi öne koyun</h2>
    <p>
      Google, kullanıcının sorgusuyla eşleşen kelimeleri açıklamada kalın yapar. Birincil
      anahtar kelimeyi ilk 60 karaktere koyun, böylece hem masaüstünde hem de mobilde kalın görünür. Bundan sonra, insanlar için yazın — fayda, farklılaştırıcı ve tıklamaya davet eden bir fiil.
    </p>

    <h2>Dört parçalı formül</h2>
    <p>
      Güvenilir bir yapı: <strong>ne olduğu</strong> (1 cümle) + <strong>kimin için olduğu</strong>{" "}
      (1 ifade) + <strong>faydası</strong> (1 ifade) + <strong>harekete geçirici mesaj</strong>{" "}
      (2–3 kelime). Örnek: &ldquo;Ücretsiz çevrimiçi PDF birleştirici. Tarayıcınızda 50 adede kadar PDF'i birleştirin —
      yükleme yok, filigran yok. Saniyeler içinde deneyin.&rdquo;
    </p>

    <h2>Sorgu niyetini eşleştirin, sadece anahtar kelimeyi değil</h2>
    <p>
      Aynı anahtar kelimenin farklı niyetleri olabilir. &ldquo;En iyi bütçe dizüstü bilgisayar&rdquo; bir karşılaştırma
      sorgusudur; açıklama kısa bir liste vaat etmelidir. &ldquo;Bütçe dizüstü bilgisayar satın al&rdquo; ise
      işlemseldir; açıklama fiyat ve bulunabilirlik vaat etmelidir. Yazmadan önce,
      anahtar kelimeyi kendiniz arayın — ilk üç sonucun hangi niyete hizmet ettiğini not edin ve onu eşleştirin.
    </p>

    <h2>Belirli sayılar ve değiştiriciler kullanın</h2>
    <p>
      &ldquo;Ücretsiz,&rdquo; &ldquo;2026,&rdquo; &ldquo;60 saniyede,&rdquo; veya
      somut sayılar içeren açıklamalar, belirsiz metinlerden daha iyi performans gösterir. &ldquo;SEO öğrenin&rdquo; zayıftır. &ldquo;Ücretsiz 2026 kontrol listemizle 15 dakikada SEO öğrenin&rdquo; bir tıklamadır.
    </p>

    <h2>Tırnak işaretlerinden ve özel karakterlerden kaçının</h2>
    <p>
      Açıklamadaki çift tırnak işaretleri, kaçış karakteri kullanılmazsa HTML etiketini bozabilir. Bunun yerine tek tırnak veya
      uzun çizgi kullanın. Dikey çubuklar ve ve işaretleri sorunsuzdur. Emojiler bazı sorgularda çalışır ve bazılarında
      kaldırılır — en yüksek trafikli sayfalarınızda test etmeye değer, ancak güvenmeye değmez.
    </p>

    <h2>Sayfa başına bir tane yazın — kopya olmasın</h2>
    <p>
      Bir sitede yinelenen meta açıklamalar, Google'a sayfaların hiçbirinde benzersiz bir değeriniz olmadığını söyler.
      Dizine eklenebilir her sayfanın, kendi sorgusu için yazılmış kendi açıklaması olmalıdır.
      200 sayfanız varsa ve 200 açıklamayı elle yazamıyorsanız, sayfa başına en az bir benzersiz değişken (ürün adı, şehir vb.) içeren şablon
      açıklamalar yazın.
    </p>

    <h2>Search Console'dan test edin ve iyileştirin</h2>
    <p>
      Bir sayfa yayına girdikten sonra, Google Search Console'da TO'sunu izleyin. 4–10. sıralarda yer alan ve ortalamanın altında TO'ya sahip herhangi bir sayfa, meta açıklama yeniden yazımı için adaydır. Bir değişiklik yapın,
      iki hafta bekleyin ve karşılaştırın. Bu, sahip olduğunuz en sıkı SEO geri bildirim döngüsüdür.
    </p>

    <h2>TO'yu öldüren yaygın hatalar</h2>
    <p>
      Robotlar için yazmak (anahtar kelime doldurma), başlık etiketiyle aynı açıklamayı kullanmak,
      açıklamayı boş bırakarak Google'ın rastgele bir cümle oluşturmasına izin vermek ve
      açıklamaların açılış sayfasının içeriğiyle eşleşmemesi — kullanıcılar arama sonuçlarına geri döner
      ve Google bunu fark eder. Vaadi spesifik tutun ve sayfanın bunu yerine getirdiğinden emin olun.
    </p>

    <h2>Açıklamayı güçlü bir başlıkla eşleştirin</h2>
    <p>
      Harika bir açıklama, zayıf bir başlık altında boşa gider. İkisini de{" "}
      <a href="/tools/title-tag-length-checker">başlık etiketi uzunluk denetleyicimizden</a> birlikte geçirin — başlık
      beklentiyi belirler, açıklama uyumu onaylar. Ve aynı anda eksiksiz bir SEO etiketi setine ihtiyacınız varsa,{" "}
      <a href="/tools/meta-tag-generator">meta etiket oluşturucu</a> tek seferde başlık,
      açıklama ve Open Graph çıktısı verir.
    </p>

    <p>
      İlgili okumalar: <a href="/guides/seo-basics-for-beginners">Yeni başlayanlar için SEO temelleri</a>,{" "}
      <a href="/guides/how-to-start-a-blog">blog nasıl başlatılır</a> ve{" "}
      <a href="/guides/how-to-use-utm-parameters">hangi açıklamaların gerçek trafik kazandırdığını ölçmek için UTM parametreleri nasıl kullanılır</a>.
    </p>
  </>
);