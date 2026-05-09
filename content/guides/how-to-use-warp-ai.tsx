import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Warp, her komutu yapılandırılmış bir blok olarak ele alan ve üzerine bir <a href="/learn/agent">AI ajanı</a> ekleyen, Rust ile oluşturulmuş bir terminaldir. Böylece İngilizce olarak ne istediğinizi tanımlayabilir ve sonucu çalıştırmasını, açıklamasını veya betik haline getirmesini sağlayabilirsiniz.</p>);

export const body: ReactElement = (
  <>
    <p>Warp, IDE tarzı düzenleme ve paylaşılabilir bloklarla yeniden tasarlanmış bir terminal olarak başladı, ardından 2024&ndash;2025 yıllarında Agent Mode'a (Ajan Modu) ciddi bir yönelim gösterdi &mdash; bu, sizin adınıza kabuk işlerini planlayabilen, çalıştırabilen ve gözden geçirebilen, ancak yine de altında ham bir pty (sanal terminal) sunan bir terminaldir.</p>
    <h2>Ne olduğu</h2>
    <p>Warp'ta her komut bir bloktur: girdi, çıktı, çıkış kodu ve meta veri. AI, istemin yanında yer alır &mdash; soru sormak için # veya ctrl-` tuşlarına basın ve Warp'ın çok adımlı görevleri yürütmesine izin vermek için Agent Mode'a geçin. Ayrıca Workflows (parametreleştirilmiş komut parçacıkları) ve ekip tarafından paylaşılan bir Notebook (çalışma kitabı) sunar.</p>
    <h2>Kurulum / kayıt</h2>
    <pre>{`# macOS
brew install --cask warp

# Linux (Debian/Ubuntu)
curl -fsSL https://app.warp.dev/linux-deb.sh | sh

# Windows
winget install Warp.Warp

# AI özelliklerini etkinleştirmek için https://app.warp.dev adresine giriş yapın`}</pre>
    <h2>İlk oturum</h2>
    <p>Warp'ı açın ve doğal dilde bir istek yazmak için # tuşuna basın. Warp bir komut önerir, kuru bir açıklama gösterir ve enter tuşuna basmanızı bekler. Agent Mode (cmd-I) daha da ileri gider: adımları planlar, çalıştırır, çıktıyı okur ve yineler.</p>
    <pre>{`$ # bu hafta değiştirilmiş, 100MB'den büyük tüm log dosyalarını bul
  find . -type f -name "*.log" -size +100M -mtime -7
# çalıştırmak için enter'a basın veya önce düzenlemek için tab'a basın`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>1. Başarısız bir CI işini hata ayıklamak için Agent Mode'u kullanın &mdash; hatayı okur, bir düzeltme önerir ve yeniden çalıştırır.</li>
      <li>2. Ekibinizin her gün tekrarladığı k8s, docker veya git ritüelleri için yeniden kullanılabilir Workflows kaydedin.</li>
      <li>3. Yığın izlemelerinin veya uzun logların sade bir İngilizce özetini almak için bir bloğu &ldquo;Explain output&rdquo; (Çıktıyı Açıkla) seçeneğine yönlendirin.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Warp, AI özellikleri için komut bağlamını bulutuna gönderir; kurumsal planlar, bunun önemli olması durumunda sıfır saklama ve kendi anahtarını getirme (BYO-key) seçenekleri sunar. Makinenizden hiçbir şey çıkmadan önce belirteçleri temizlemek için Ayarlar'da komut düzeltmeyi (command redaction) açın.</p>
    <p>Agent Mode güçlüdür ancak yanılmaz değildir &mdash; yıkıcı komutları (rm, DROP, terraform apply) varsayılan olarak açık olan onay isteminin arkasında tutun. Zsh eklentileri sorun çıkarırsa, ajandan önce Warp'ın yerleşik kabuk modunu deneyin.</p>
    <h2>Kimler için</h2>
    <p>Modern bir CLI deneyimi ve kabuk semantiğini gerçekten anlayan bir AI işbirlikçisi isteyen, terminal ağırlıklı mühendisler, SRE'ler ve DevOps çalışanları.</p>
  </>
);