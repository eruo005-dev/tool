import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Windsurf, Codeium&rsquo;un yapay zeka odaklı editörüdür &mdash;{" "}
    <strong>Cascade</strong> adında, tüm kod tabanınızı okuyan, çok dosyalı değişiklikler planlayan
    ve siz düzenleme yaparken kendini güncel tutan bir ajan etrafında inşa edilmiş bir VS Code çatalıdır.
    En belirgin Cursor alternatifidir ve bazı iş akışlarında gözle görülür şekilde daha proaktif hissettirir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Windsurf aslında nedir</h2>
    <p>
      Windsurf editördür; Cascade ise onun içindeki ajandır. Cascade, Codeium&rsquo;un indeksleyicisi
      sayesinde tam repo farkındalığına sahiptir, terminal komutlarını çalıştırabilir ve Codeium&rsquo;un
      &ldquo;akışlar&rdquo; olarak adlandırdığı yapı etrafında tasarlanmıştır &mdash; ne yaptığınızı izler
      ve her seferinde yeni bir komut beklemeden işbirlikçi kalır. Altta, öncü modellere (Claude, GPT, Gemini)
      ve Codeium&rsquo;un kendi SWE-1 ailesine yönlendirme yapar.
    </p>

    <h2>Kurulum</h2>
    <p>
      macOS, Windows veya Linux için yükleyiciyi <code>windsurf.com</code> adresinden indirin. Bir Codeium
      hesabıyla oturum açın ve ilk açılışta VS Code ayarlarınızı ve eklentilerinizi içe aktarın
      &mdash; bu bir çatal olduğu için neredeyse her şey taşınır. Ücretsiz katman size cömert bir
      otomatik tamamlama kotası ve ajantı denemek için daha küçük bir Cascade kredi havuzu sunar.
    </p>

    <h2>İlk oturum</h2>
    <p>
      Bir repo açın, Cascade&rsquo;i açmak için <code>Cmd+L</code> tuşuna basın ve değişikliği tanımlayın:
      &ldquo;hız sınırlayıcıyı rota işleyicisinden middleware&rsquo;e taşı ve saniyede üç kez vuran bir test ekle.&rdquo;
      Cascade bir plan önerir, ilgili dosyalara dokunur, onayladığınız komutları çalıştırır ve satır içinde
      farkları gösterir. Serbestçe düzenleme yapmasına izin vermek için <strong>Yazma modunu</strong>,
      düşünürken salt okunur kalması için <strong>Sohbet modunu</strong> kullanın.
    </p>

    <h2>Kurallar ve anılar</h2>
    <p>
      Proje kuralları için repo köküne bir <code>.windsurfrules</code> dosyası bırakın (&ldquo;Prisma değil,
      Drizzle kullanıyoruz; her zaman bir migrasyon dosyası ekleyin&rdquo;) ve kişisel tercihler için genel
      kurallar panelini kullanın. Cascade ayrıca oturumlar arasında bilgileri kalıcı hale getiren bir Anılar
      sistemine sahiptir &mdash; ara sıra gözden geçirin, çünkü kötü bir anı (&ldquo;kullanıcı promise&rsquo;ler
      yerine callback&rsquo;leri tercih eder&rdquo;) siz onu silene kadar her gelecek adımı zehirleyecektir.
    </p>

    <h2>Yapılandırma tuzakları</h2>
    <p>
      Cascade&rsquo;e ortamınıza güvenene kadar kabuk komutları için otomatik kabulü kapatın; izin verirseniz
      neşeyle <code>pnpm install</code> veya bir migrasyon çalıştıracaktır. Ayarlarda varsayılan bir model
      sabitleyin, böylece yeniden düzenleme sırasında sessizce daha ucuz bir katmana atılmazsınız. Ve ilk
      büyük görevden önce indeks durumunu kontrol edin &mdash; Cascade, ilk repo indeksi tamamlandıktan sonra
      önemli ölçüde daha iyidir.
    </p>

    <h2>Windsurf ne zaman parlar</h2>
    <p>
      İyi bir kod tabanı farkındalığıyla planlama, düzenleme ve komut çalıştırma yapan tek bir araç
      istediğiniz yeni özellikler ve önemsiz olmayan yeniden düzenlemeler. Akış tarzı arayüz, bir sohbet
      paneli ve dosyalar arasında gidip gelmekten gerçekten daha ergonomiktir ve otomatik tamamlama,
      indeksleyici sayesinde büyük repolarda sınıfının en iyisidir.
    </p>

    <h2>Ne zaman kullanılmamalı</h2>
    <p>
      JetBrains kısayollarına derinden bağlıysanız, bir ajan için editör değiştirmek büyük bir fedakarlıktır
      &mdash; Continue veya JetBrains AI Assistant daha mantıklı seçimlerdir. Şirketiniz ikinci bir editör
      kurulumunu yasaklıyorsa da aynı durum geçerlidir. Ve betik tabanlı, başsız ajan çalışmaları (CI, botlar)
      için, bir editöre bağlı araçtan ziyade Aider veya OpenCode gibi bir CLI daha uygundur.
    </p>
  </>
);