import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Windsurf, Codeium&rsquo;un yapay zeka tabanlı editörüdür &mdash; <strong>Cascade</strong> adlı bir ajan etrafında inşa edilmiş bir VS Code çatalıdır. Bu ajan tüm kod tabanınızı okur, çoklu dosya değişiklikleri planlar ve siz düzenleme yaparken kendini güncel tutar. En belirgin Cursor alternatifidir ve bazı iş akışlarında belirgin şekilde daha proaktif hissettirir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Windsurf aslında nedir</h2>
    <p>
      Windsurf editördür; Cascade ise onun içindeki ajandır. Cascade, Codeium&rsquo;un indeksleyicisi sayesinde tam repo farkındalığına sahiptir, terminal komutlarını çalıştırabilir ve Codeium&rsquo;un &ldquo;akışlar&rdquo; olarak adlandırdığı yapı etrafında tasarlanmıştır &mdash; ne yaptığınızı izler ve her turda yeni bir komut beklemeden işbirlikçi kalır. Alt tarafta, öncü modellere (Claude, GPT, Gemini) ve Codeium&rsquo;un kendi SWE-1 ailesine yönlendirme yapar.
    </p>

    <h2>Kurulum</h2>
    <p>
      macOS, Windows veya Linux için yükleyiciyi <code>windsurf.com</code> adresinden indirin. Bir Codeium hesabıyla giriş yapın ve ilk açılışta VS Code ayarlarınızı ve eklentilerinizi içe aktarın &mdash; bu bir çatal olduğu için neredeyse her şey taşınır. Ücretsiz katman size cömert bir otomatik tamamlama kotası ve ajanı denemek için daha küçük bir Cascade kredi havuzu sunar.
    </p>

    <h2>İlk oturum</h2>
    <p>
      Bir repo açın, Cascade&rsquo;i açmak için <code>Cmd+L</code> tuşuna basın ve değişikliği tanımlayın: &ldquo;hız sınırlayıcıyı rota işleyicisinden middleware&rsquo;e taşı ve bir saniyede üç kez vuran bir test ekle.&rdquo; Cascade bir plan önerir, ilgili dosyalara dokunur, onayladığınız komutları çalıştırır ve farkları satır içinde gösterir. Serbestçe düzenleme yapmasına izin vermek için <strong>Yazma modunu</strong>, siz düşünürken salt okunur kalması için <strong>Sohbet modunu</strong> kullanın.
    </p>

    <h2>Kurallar ve anılar</h2>
    <p>
      Proje kuralları için repo köküne bir <code>.windsurfrules</code> dosyası ekleyin (&ldquo;Drizzle kullanıyoruz, Prisma değil; her zaman bir migrasyon dosyası ekleyin&rdquo;) ve kişisel tercihler için genel kurallar panelini kullanın. Cascade ayrıca oturumlar arasında bilgileri kalıcı kılan bir Anılar sistemine sahiptir &mdash; bunu ara sıra gözden geçirin, çünkü kötü bir anı (&ldquo;kullanıcı promise&rsquo;ler yerine callback&rsquo;leri tercih eder&rdquo;) siz silene kadar her gelecek turu zehirleyecektir.
    </p>

    <h2>Yapılandırma tuzakları</h2>
    <p>
      Cascade&rsquo;e ortamınızda güvenene kadar kabuk komutları için otomatik kabulü kapatın; izin verirseniz neşeyle <code>pnpm install</code> veya bir migrasyon çalıştıracaktır. Yeniden düzenleme sırasında sessizce daha ucuz bir katmana atlanmamak için ayarlarda varsayılan bir model sabitleyin. Ve ilk büyük görevden önce indeks durumunu kontrol edin &mdash; Cascade, ilk repo indekslemesi tamamlandıktan sonra önemli ölçüde daha iyidir.
    </p>

    <h2>Windsurf ne zaman parlar</h2>
    <p>
      Planlayan, düzenleyen ve iyi kod tabanı farkındalığıyla komutları çalıştıran tek bir araç istediğiniz yepyeni özellikler ve önemsiz olmayan yeniden düzenlemeler. Akış tarzı arayüz, bir sohbet paneli ve dosyalar arasında gidip gelmekten gerçekten daha ergonomiktir ve otomatik tamamlama, indeksleyici sayesinde büyük repolarda en iyi sınıftır.
    </p>

    <h2>Ne zaman kullanılmamalı</h2>
    <p>
      JetBrains kısayollarına derinden bağlıysanız, bir ajan için editör değiştirmek büyük bir fedakarlıktır &mdash; Continue veya JetBrains AI Assistant daha mantıklı seçimlerdir. Aynı şekilde şirketiniz ikinci bir editör kurulumunu yasaklıyorsa da geçerlidir. Ve komut dosyalı, başsız ajan çalışmaları (CI, botlar) için, editöre bağlı bir araçtan ziyade Aider veya OpenCode gibi bir CLI daha uygundur.
    </p>
  </>
);