export const intro = (
  <>
    <p>
      Odaklanmış bir plan izlerseniz, sıfırdan başlayıp yaklaşık 90 gün içinde gerçek şeyler inşa edebilirsiniz.
      Bu bir "üç ayda kıdemli mühendis" planı değil — bu bir yalan — ama
      "çalışan bir uygulama inşa edip yayınlayabilirim" seviyesi, ki her kariyer aslında burada başlar.
    </p>
    <p>
      Çoğu insan kodlama öğrenmekte başarısız olur çünkü çok zor olduğu için değil, her hafta
      dil, eğitim ve framework değiştirdikleri için. Bu rehber size tek bir yol, tek bir
      dil ve bunu alışkanlık haline getirme yöntemini sunar.
    </p>
  </>
);

export const body = (
  <>
    <h2>Bir dil seçin ve ona bağlı kalın</h2>
    <p>
      Verileri, web kazımayı veya betik yazmayı seviyorsanız Python. Tarayıcıda şeyler inşa etmek
      istiyorsanız JavaScript. Fazla düşünmeyin — ikisi de işe yarar. Önemli olan bugün seçim yapmak
      ve 90 gün boyunca geçiş yapma dürtüsüne direnmektir. Temel bilgiler diller arasında aktarılır;
      sözdizimi düşündüğünüzden daha az önemlidir.
    </p>

    <h2>Her gün, en az 25 dakika kod yazın</h2>
    <p>
      Günlük pratik, hafta sonu tıkınmalarından daha iyidir. Günde 25 dakikalık bir{" "}
      <a href="/tools/pomodoro-timer">pomodoro seansı</a> materyali taze tutar ve
      kod yazmak için oturma alışkanlığını oluşturur ki bu savaşın yarısıdır. İki seans yapabilirseniz harika.
      Sadece bir seans yapabiliyorsanız, yine de gelin. Seriler önemlidir.
    </p>

    <h2>1–3. Haftalar: Temel bilgiler</h2>
    <p>
      Değişkenleri, veri türlerini, koşulları, döngüleri, fonksiyonları ve temel veri yapılarını
      (diziler/listeler ve sözlükler/nesneler) öğrenin. Tam bir kursun peşinden koşmayın — kısa
      dersler üzerinde çalışın ve örnekleri kendiniz yazın. Kopyala-yapıştır yok.
    </p>
    <h3>Günlük yapı</h3>
    <ul>
      <li>10 dakika okuma veya izleme</li>
      <li>15 dakika örnekler ve küçük varyasyonlar yazma</li>
      <li>Her seansı, bugünkü konsepti sıfırdan bakmadan yeniden yazarak bitirin</li>
    </ul>

    <h2>4–6. Haftalar: Hemen küçük bir şey inşa edin</h2>
    <p>
      Bir fonksiyon ve bir döngü yazabildiğiniz an, küçük bir projeye başlayın. Bir yapılacaklar listesi. Bir
      hesap makinesi. Bir klasördeki dosyaları yeniden adlandıran bir betik. Çirkin olacak. Yine de bitirin.
      Kötü bir projeyi yayınlamaktan, altı haftalık eğitimlerden daha fazlasını öğreneceksiniz.
    </p>

    <h2>7–9. Haftalar: Sürüm kontrolü, ekosistem ve hata ayıklama</h2>
    <p>
      Şimdi profesyonellerin kullandığı araçları ekleyin. <code>git init</code>,{" "}
      <code>git commit</code> ve <code>git push</code> öğrenin ve projelerinizi GitHub'a koyun. Hata
      mesajlarını okumayı ve bir hata ayıklayıcı kullanmayı öğrenin. Etkili bir şekilde arama yapmayı öğrenin — hata
      mesajını kopyalayıp dilinizin adını eklemek becerinin %80'idir.
    </p>
    <p>
      Bu noktada, günlük kullanacağınız araçları yer imlerine ekleyin: API yanıtları için bir <a href="/tools/json-formatter">JSON biçimlendirici</a>,
      auth başlıkları için bir base64 kodlayıcı ve log ayrıştırma için bir <a href="/tools/regex-tester">regex test aracı</a>. Tarayıcı
      geliştirici araçları (F12) ikinci eviniz olur.
    </p>

    <h2>10–12. Haftalar: Portföy projesini inşa edin</h2>
    <p>
      Hayatınızda gerçek bir sorunu çözen bir proje seçin ve bitirin. Başka birinin Twitter'ının bir kopyası değil —
      kişisel bir yardımcı program, bir arkadaşınızın istediği küçük bir araç, bir hobi için bir gösterge paneli.
      Yayınlayın, net bir README ile GitHub'a koyun ve ne inşa ettiğiniz ve ne öğrendiğiniz hakkında kısa bir blog yazısı yazın.
    </p>
    <p>
      Bu, kapıları açan eserdir. İşe alım yöneticileri tamamlanmış kursları umursamaz;
      yayınlanmış projeleri umursarlar. Bitmiş bir proje, düzineyle yarım kalmış projeden daha iyidir.
    </p>

    <h2>Bilinçli olarak nasıl pratik yapılır</h2>
    <p>
      Sadece nasıl çözeceğinizi bildiğiniz problemleri çözmeyin. Haftanın bir kısmını
      mevcut yeteneğinizin biraz üzerinde bir şeye ayırın. Diğer insanların kodlarını okuyun ve
      neden belirli seçimler yaptıklarını anlamaya çalışın. Takıldığınızda, kendi başınıza denemek için kendinize 15 dakika verin,
      ardından cevaba bakın — ancak yapıştırmayın, yeniden yazın.
    </p>

    <h2>Ayları boşa harcayan anti-kalıplar</h2>
    <h3>Eğitim cehennemi</h3>
    <p>
      Kendi kodunuzu yazmadan üst üste kurs izlemek. Belirti: izlerken her satırı anlarsınız,
      sonra boş bir editörde donup kalırsınız. Çözüm: her an, aktif olarak inşa ettiğiniz bir projeniz olmalı.
    </p>
    <h3>Framework atlaması</h3>
    <p>
      React ile başlayıp, sonra Vue'ya, sonra Svelte'ye, sonra Next.js'ye, sonra Astro'ya atlamak. Başka bir
      framework'e ihtiyacınız yok — bir şey yayınlamanız gerekiyor. Birini seçin ve ona bağlı kalın.
    </p>
    <h3>Erken optimizasyon</h3>
    <p>
      En "iyi" kurulum, en zarif klasör yapısı, mükemmel linting yapılandırması üzerinde kafa yormak.
      Bunlar yer değiştirme aktiviteleridir. Çalışan dağınık kod yazın, sonra temizleyin.
      Var olmayan kodu temizleyemezsiniz.
    </p>

    <h2>90 gün sonra ne olur</h2>
    <p>
      90. günde şunlara sahip olacaksınız: bir dilde temel akıcılık, git ve terminal ile rahatlık,
      ve en az bir tamamlanmış proje. Bu temeldir. Bir sonraki adım, en çok keyif aldığınız yönde
      derinleşmektir — frontend, backend, veri, otomasyon. Momentumunuzu korumak için,
      <a href="/guides/how-to-stay-productive-daily">günlük üretken kalma</a> rehberimize göz atın,
      çünkü dürüst olmak gerekirse zor kısım kod değil —
      yarın tekrar gelmektir.
    </p>

    <h2>Somut olarak ilk haftanız</h2>
    <ol>
      <li>Bugün, Python veya JavaScript'i seçin.</li>
      <li>Dili ve bir kod düzenleyiciyi kurun (VS Code güvenli varsayılandır).</li>
      <li>Her gün aynı saatte 25 dakikalık bir blok ayarlayın.</li>
      <li>İlk 5 dersinizi çalışın ve her örneği yazın.</li>
      <li>7. günde, hiçbir eğitim olmadan sıfırdan 20 satırlık bir program yazın.</li>
    </ol>
    <p>
      Bu kadar. Bir bootcamp'i bitirdiğinizde veya işe alındığınızda değil, birinci günden itibaren eğitimde bir geliştiricisiniz.
      Alışkanlık şimdi başlıyor.
    </p>
  </>
);