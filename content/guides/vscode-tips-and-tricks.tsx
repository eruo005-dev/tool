export const intro = (
  <>
    <p>
      VS Code, çoğu geliştiricinin üzerinde uzlaştığı editördür — ücretsiz, hızlı ve
      sonuna kadar yapılandırılabilir. Ancak çoğu kişi yapabileceklerinin belki %10'unu
      kullanır. Aşağıdaki klavye kısayollarını, eklentileri ve iş akışı püf noktalarını
      öğrenmek sizi gözle görülür şekilde hızlandıracaktır.
    </p>
    <p>
      Aşağıda gerçekten önemli olan ipuçları var — deneyimli geliştiricilerin her gün
      kullandıkları.
    </p>
  </>
);

export const body = (
  <>
    <h2>1. Komut paletini öğrenin</h2>
    <p>
      Cmd/Ctrl + Shift + P komut paletini açar. VS Code'daki her özelliğe buradan
      ulaşılabilir. Menülerde avlanmayı bırakın. Tek bir kısayol hatırlayacaksanız, bu
      olsun.
    </p>

    <h2>2. Hızlı dosya atlama</h2>
    <p>
      Cmd/Ctrl + P, ada göre herhangi bir dosyaya atlar. Bulanık eşleştirme yapar.
      Dosya ağacına tıklamaktan çok daha hızlıdır. Bir sembole atlamak için
      &ldquo;@&rdquo;, bir satıra atlamak için &ldquo;:&rdquo; ile birleştirin.
    </p>

    <h2>3. Çoklu imleç düzenleme</h2>
    <p>
      İmleç eklemek için Alt + tıklayın. Cmd/Ctrl + D, geçerli kelimenin bir sonraki
      geçtiği yeri seçer (daha fazla eklemek için basmaya devam edin). Bu, tekrarlayan
      düzenlemeler ve yeniden düzenlemeler için en büyük zaman tasarrufudur.
    </p>

    <h2>4. Entegre terminal</h2>
    <p>
      Ctrl + `, VS Code içinde bir terminal açar. Bölünmüş paneller, test çalıştırma,
      log takibi — hepsi editörden ayrılmadan. Geliştirme sunucusu, testler ve git için
      birden fazla terminaliniz bile olabilir.
    </p>

    <h2>5. Kaynak kontrol paneli</h2>
    <p>
      Cmd/Ctrl + Shift + G, git entegrasyonunu açar. Değişiklik parçalarını sahneleyin,
      commit mesajları yazın, farkları satır içinde görün. Git işlerinin %80'i için
      CLI'ye ihtiyacınız yok. CLI'yi rebase ve zor işlemler için saklayın.
    </p>

    <h2>6. Olmazsa olmaz eklentiler</h2>
    <p>
      ESLint, Prettier, GitLens, Error Lens, Path Intellisense. Bu temel başlangıç
      paketidir. İhtiyaca göre dil bazlı olanları (Python, Go, Rust) ekleyin. 50
      eklenti kurmayın — editörü yavaşlatırlar.
    </p>

    <h2>7. Kod parçacıkları</h2>
    <p>
      Bir kod parçacığı öneki yazın (&ldquo;log&rdquo; gibi console.log için) ve Tab'a
      basın. Kendi parçacıklarınızı Preferences &gt; User Snippets üzerinden oluşturun.
      Bir haftada şaşırtıcı miktarda yazma tasarrufu sağlar.
    </p>

    <h2>8. Zen modu</h2>
    <p>
      Cmd/Ctrl + K Z, kodunuz dışındaki her şeyi gizler. Odaklanmış derin çalışma için
      harika. Bildirimleri fark etmeyi bırakıp sadece kod yazmanız gerektiğinde
      kullanın.
    </p>

    <h2>9. Ayarlar senkronizasyonu</h2>
    <p>
      Dahili. GitHub ile oturum açın, tüm eklentileriniz/ayarlarınız/klavye
      kısayollarınız makineler arasında senkronize olur. Bir kez ayarlayın, yeni bir
      kurulumu asla tekrar yapılandırmayın.
    </p>

    <h2>10. Kaydederken biçimlendir</h2>
    <p>
      &ldquo;Editor: Format On Save&rdquo; seçeneğini etkinleştirin ve Prettier/Black/gofmt
      ile eşleştirin. Kod stili hakkında bir daha düşünmeyin. Ekibinizin PR'ları bir
      gecede temizlenir.
    </p>

    <h2>11. Tanıma / referanslara git</h2>
    <p>
      F12 tanıma gider. Shift + F12 referansları listeler. Dokümantasyon için üzerine
      gelin. Bu üçü, yabancı bir kod tabanını hızlı okumanın temelidir. Bir dil sunucusu
      kuruluysa daha da iyi çalışır.
    </p>

    <h2>12. Fareyi kullanmayı bırakın</h2>
    <p>
      Cidden. Sekme gezinmesi (Cmd/Ctrl + Tab), bölünmüş editörler (Cmd/Ctrl + \), ekmek
      kırıntıları. Fareye her uzandığınızda, henüz öğrenmediğiniz bir kısayol vardır.
      Daha geniş üretkenlik zihniyeti için <a href="/guides/how-to-learn-coding-fast">kodlamayı
      hızlı öğrenme</a> ve editörünüz ayarlandıktan sonra <a href="/guides/how-to-write-clean-code">
      temiz kod alışkanlıkları</a> bölümüne bakın.
    </p>

    <h2>Çalınacak minimal yapılandırma</h2>
    <p>
      Kaydederken biçimlendir: açık. Otomatik kaydet: odak değişiminde. Sekme boyutu: 2.
      Sondaki boşlukları kırp: açık. Silmeyi onayla: kapalı. Bu 5 ayar tek başına bir
      haftalık kullanımda kendini amorti edecektir.
    </p>
  </>
);