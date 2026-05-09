import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Zed, Rust ile yazılmış yüksek performanslı, açık kaynaklı bir editördür ve Agent Panel'i, onu Anthropic'in Claude modelleri tarafından desteklenen tam bir AI kodlama çalışma alanına dönüştürür.</p>);

export const body: ReactElement = (
  <>
    <p>Zed, hayatına aynı ekip tarafından geliştirilen, GPU hızlandırmalı bir Atom halefi olarak başladı. 2025 yılında Agent Panel, Düzenleme Tahminleri ve çok oyunculu işbirliği özelliklerini yayınlayarak, GPL/Apache karışımı bir lisansla tamamen açık kaynak kalırken Cursor ve Copilot ile doğrudan rekabete girdi.</p>
    <h2>Ne olduğu</h2>
    <p>Zed, kendi GPUI araç seti aracılığıyla işleyen yerel bir masaüstü editörüdür (macOS, Linux, Windows önizleme). Agent Panel, çalışma alanınıza bağlı bir sohbet panelidir: dosyaları okuyabilir, kabuk komutları çalıştırabilir ve araç çağrıları aracılığıyla çoklu dosya düzenlemeleri uygulayabilir. Düzenleme Tahminleri, siz yazarken bir sonraki düzenlemeyi öneren satır içi bir modeldir (Zeta). İşbirliği modu, arabellekleri ve terminalleri gerçek zamanlı olarak paylaşır.</p>
    <h2>Kurulum / Kayıt</h2>
    <pre>{`# macOS
brew install --cask zed

# Linux
curl -f https://zed.dev/install.sh | sh

# https://zed.dev adresinden GitHub ile giriş yapın
# İsteğe bağlı: Ayarlar'dan kendi Anthropic / OpenAI anahtarınızı ekleyin`}</pre>
    <h2>İlk oturum</h2>
    <p>Bir proje klasörü açın, ardından Agent Panel'i açmak için cmd-? (veya ctrl-?) tuşlarına basın. Bir model seçin &mdash; varsayılan Claude Sonnet'tir &mdash; ve bir istek yazın. Ajan, parça parça kabul edebileceğiniz bir fark önerecektir.</p>
    <pre>{`$ zed ~/code/my-app
# cmd-? Agent Panel'i açar
> src/auth.ts dosyasını async/await kullanacak şekilde yeniden düzenle ve testler ekle
# Zed bir fark gösterir, uygulamak için cmd-enter tuşlarına basarsınız`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>1. Ajandan bir özellik eklemesini isteyin &mdash; birden fazla dosyayı düzenler ve test komutunu çalıştırır.</li>
      <li>2. Bağlamı hassas bir şekilde kapsamlandırmak için @ ile dosyaları veya sembolleri sohbete sürükleyin.</li>
      <li>3. Ajan daha büyük görevleri hallederken satır düzeyinde tamamlamalar için Düzenleme Tahminlerini (kabul etmek için sekme) kullanın.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Yerleşik Zed barındırılan planı size aylık bir Claude kotası verir; yoğun kullanıcılar, kısıtlamayı önlemek için Ayarlar &rsquo; AI altında kendi API anahtarlarını eklemelidir. Proje kökündeki kural dosyaları (.rules) ajanı yönlendirir &mdash; bunları kısa ve spesifik tutun.</p>
    <p>Windows desteği hâlâ önizleme aşamasındadır, bu nedenle PTY ve dosya izleme ile ilgili pürüzler bekleyin. İşbirliği, herkesin giriş yapmasını ve aynı Zed sürümünde olmasını gerektirir.</p>
    <h2>Kimler için</h2>
    <p>Hızlı, yerel, açık kaynaklı bir editör içinde Cursor sınıfı ajan özellikleri isteyen ve IDE'lerinden ayrılmadan gerçek zamanlı çiftli programlamaya değer veren ekipler için geliştiriciler.</p>
  </>
);