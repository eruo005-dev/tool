export const intro = (
  <>
    <p>
      JSON, 4.000 satırlık, tek bir gereksiz virgül içeren sıkıştırılmış bir dosyayı açıp hatayı bulmak için bir saat harcayana kadar basit görünür. JSON'u doğru biçimlendirmek yarı estetik yarı hayatta kalma meselesidir: tutarlı girintileme, geçerli sözdizimi ve mantıklı anahtar sıralaması, bir dosyayı dakikalar içinde hata ayıklayabileceğiniz bir dosya ile öğleden sonranızı mahvedecek bir dosya arasındaki farktır.
    </p>
    <p>
      Bu kılavuz, geçerli JSON'un kurallarını, dosyaları bakımı yapılabilir kılan kuralları ve sizin için biçimlendirecek, doğrulayacak ve farkını alacak araçları kapsar, böylece bir daha asla parantezleri elle hizalamak zorunda kalmazsınız.
    </p>
  </>
);

export const body = (
  <>
    <h2>Tartışmasız kurallar</h2>
    <p>
      JSON katıdır. Anahtarlar çift tırnaklı dizeler olmalıdır. Dizeler asla tek tırnak değil, çift tırnak kullanmalıdır. Sondaki virgül yok — bir dizi veya nesnedeki son öğeden sonra virgül geçersizdir. Yorum yok (JSON5 veya JSONC'nin yazmanıza izin verebileceğinin aksine). Tırnaksız anahtar yok. Tanımsız (undefined) yok. Bunlar stil kuralları değil; bunlardan herhangi birini ihlal etmek dosyayı ayrıştırılamaz hale getirir.
    </p>

    <h2>İki veya dört boşluk seçin ve buna bağlı kalın</h2>
    <p>
      JSON'un resmi bir girintileme kuralı yoktur. İki boşluk derli topludur ve yapılandırmalar için iyidir; dört boşluk derinlemesine iç içe geçmiş veriler için daha okunabilirdir. Sekmeler işe yarar ancak düzenleyiciler arasında tutarsız görüntülenir. Altın kural: ne seçerseniz seçin, dosyanın her yerinde uygulayın. Karışık girintileme, farkın yarısının boşluk karakterlerinden oluştuğu çekme isteklerini incelemenize neden olur.
    </p>

    <h2>Bir kez biçimlendirin, sonsuza kadar otomatikleştirin</h2>
    <p>
      JSON'u elle biçimlendirmek zaman kaybıdır. Seçtiğiniz girintileme ile güzel biçimlendirilmiş çıktı almak için{" "}
      <a href="/tools/json-formatter">JSON biçimlendiricimize</a> yapıştırın. Düzenleyicilerde, Prettier veya VS Code'un yerleşik JSON biçimlendiricisi kaydederken aynısını yapar. Tarayıcıdaki API yanıtları için bir JSON görüntüleyici uzantısı bunları otomatik olarak biçimlendirir.
    </p>

    <h2>Göndermeden önce doğrulayın</h2>
    <p>
      Geçersiz JSON sessizce bozulur. Bir API uç noktasının bir istemciye bozuk JSON döndürmesi, yararlı bir satır numarası olmadan ayrıştırma hatası verir. Kontrol etmediğiniz her şeyi doğrulayın: başlangıçta yüklenen yapılandırma dosyaları, üçüncü taraf API'lerden gelen veriler, testlerdeki sabit veriler. Yukarıdaki JSON biçimlendirici, ilk geçersiz belirteci işaretler ve hangi satırı düzelteceğinizi söyler.
    </p>

    <h2>Fark alırken anahtarları sıralayın</h2>
    <p>
      JSON'u git'e eklerseniz, sıralanmış anahtarlar farkları okunabilir kılar. Anahtarları farklı sırada olan iki özdeş nesne, <code>git diff</code>'e tamamen farklı görünür. Çoğu biçimlendiricide "anahtarları alfabetik olarak sırala" seçeneği vardır; yapılandırma dosyaları ve şema tanımları için bunu açın. Sitemiz için, anahtar sırasından bağımsız olarak yalnızca gerçek değişiklikleri görmek için dosyayı{" "}
      <a href="/tools/json-diff-checker">JSON fark denetleyicimizden</a> geçirin.
    </p>

    <h2>Üretim için küçültün, insanlar için güzel biçimlendirin</h2>
    <p>
      Güzel biçimlendirilmiş JSON çok fazla boşluk içerir — okumak için harika, ağ aktarımı için savurgan. API yanıtları ve paketlenmiş yapılandırmalar üretimde küçültülmeli ve yalnızca bir düzenleyicide açtığınızda güzel biçimlendirilmelidir. Derleme araçları bunu otomatik olarak halleder, ancak JSON'u elle gönderiyorsanız, kabloya gideni küçültün.
    </p>

    <h2>Veri türlerine dikkat edin</h2>
    <p>
      <code>42</code> bir sayıdır; <code>&quot;42&quot;</code> bir dizedir — bunlar birbirinin yerine kullanılamaz. <code>true</code>, <code>false</code> ve <code>null</code> yalnızca küçük harftir. Tarihler her zaman dizedir (JSON'un tarih türü yoktur) — kural ISO 8601'dir (&ldquo;2026-04-22T10:30:00Z&rdquo;). Büyük tamsayılar JavaScript'te hassasiyet kaybedebilir — 2^53'ün üzerinde, bunları dize olarak gönderin.
    </p>

    <h2>Numaralandırılmış anahtarlar yerine dizileri tercih edin</h2>
    <p>
      Bir anti-desen: <code>&#123; &quot;item1&quot;: ..., &quot;item2&quot;: ... &#125;</code>. Bir dizi kullanın: <code>&#123; &quot;items&quot;: [...] &#125;</code>. Diziler sırayı korur, temiz bir şekilde yinelenir ve anahtarlardan tamsayı ayrıştırmayı gerektirmez. Nesne anahtarlarını yalnızca anahtarın gerçek bir anlamı olduğunda kullanın (kullanıcı kimliği, bölge kodu vb.).
    </p>

    <h2>İç içe verileri zahmetsizce yönetin</h2>
    <p>
      Derinlemesine iç içe geçmiş JSON — üç veya dört seviye — hızla okunamaz hale gelir. Kendi şemanızı tasarlıyorsanız, mümkün olduğunca düzleştirin. Kontrol edemediğiniz üçüncü taraf verileri için, önemsemediğiniz dalları katlamak üzere JSON biçimlendiricinin daraltma kontrollerini kullanın.
    </p>

    <h2>JSON vs YAML vs TOML</h2>
    <p>
      JSON, API'ler ve programatik veriler için varsayılandır. YAML, insanların yazması daha kolaydır ancak kendi tuzaklarına sahiptir (anlamlı boşluk, Norveç sorunu). TOML, yapılandırmalar için basittir. Biçimler arasında geçiş yapmanız gerekiyorsa,{" "}
      <a href="/tools/yaml-json-converter">YAML / JSON dönüştürücümüz</a> yaygın durumu halleder.
    </p>

    <h2>Yaygın hatalar ve bunlardan nasıl kaçınılır</h2>
    <p>
      Akıllı tırnak kullanan belgelerden JSON kopyalayıp yapıştırmak — tırnak gibi görünürler ama değildirler. Windows yollarında ters eğik çizgileri kaçış karakteriyle kullanmayı unutmak (<code>&quot;C:\\Users\\me&quot;</code>, <code>&quot;C:\Users\me&quot;</code> değil). UTF-8 JSON dosyalarına BOM (bayt sırası işaretleri) eklemek — bazı ayrıştırıcılar bunlarda takılır. Tırnak işaretlerini otomatik olarak dönüştüren bir kelime işlemcide JSON düzenlemek. Çözüm: bir kod düzenleyici kullanın ve göndermeden önce doğrulayın.
    </p>

    <p>
      İlgili: <a href="/guides/what-is-schema-markup">şema işaretlemesi nedir</a>,{" "}
      <a href="/guides/how-to-use-regex-effectively">regex etkili bir şekilde nasıl kullanılır</a> ve{" "}
      <a href="/guides/what-is-an-api">API nedir</a> — JSON'un modern geliştirmede nerede göründüğüne dair tam resim için.
    </p>
  </>
);