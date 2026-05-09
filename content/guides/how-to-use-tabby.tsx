import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Tabby, kendi kendine barındırılabilen, açık kaynaklı bir GitHub Copilot alternatifidir &mdash; <a href="/learn/inference">çıkarım</a> sunucusunu kendi GPU'nuzda çalıştırır ve her düzenleyicide özel kod tamamlama alırsınız.</p>);

export const body: ReactElement = (
  <>
    <p>TabbyML tarafından geliştirilen Tabby, bir Rust sunucusu, özenle seçilmiş küçük kod modelleri ve IDE eklentilerini tek bir Docker imajında paketler. Kaynak kodunu üçüncü taraf bulutlara gönderemeyen ancak yine de satır içi AI tamamlamaları ve depo bilincine sahip sohbet isteyen ekipler arasında popülerdir.</p>
    <h2>Ne olduğu</h2>
    <p>Tabby üç şey sunar: StarCoder2 veya DeepSeek-Coder gibi modelleri sunan bir çıkarım sunucusu (Rust, llama.cpp arka ucu); VS Code, JetBrains, Vim ve Emacs için düzenleyici eklentileri; ve RAG tarzı sohbet için Git depolarınızı indeksleyen bir web Kod Tarayıcısı. CPU, CUDA, ROCm veya Apple Metal üzerinde çalışır.</p>
    <h2>Kurulum / kaydolma</h2>
    <pre>{`# NVIDIA GPU ile Docker
docker run -it --gpus all \\
  -p 8080:8080 -v $HOME/.tabby:/data \\
  tabbyml/tabby \\
  serve --model StarCoder2-3B --device cuda

# http://localhost:8080 adresini ziyaret edin ve yönetici hesabı oluşturun`}</pre>
    <h2>İlk oturum</h2>
    <p>Sunucu çalıştıktan sonra, VS Code eklentisini kurun, http://localhost:8080 adresine yönlendirin ve yönetici arayüzündeki token'ı yapıştırın. Yazmaya başlayın &mdash; orta seviye bir GPU'da birkaç yüz milisaniye içinde gri tamamlamalar belirir.</p>
    <pre>{`$ code --install-extension TabbyML.vscode-tabby
# Ayarlarda, tabby.endpoint = http://localhost:8080 olarak ayarlayın
# Bir fonksiyon imzası yazmaya başlayın, tamamlamalar akar`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>1. Sohbetin kendi kodunuzdan alıntı yapması için yönetici arayüzünde bir GitHub/GitLab deposu bağlayın.</li>
      <li>2. Modeller sekmesinden modelleri değiştirin &mdash; sunucular için daha büyük modeller, dizüstü bilgisayarlar için Qwen2.5-Coder-1.5B.</li>
      <li>3. Depo genelinde "şifreleri nerede hash'liyoruz" gibi dosya alıntılarıyla sorular için Yanıt Motoru sekmesini kullanın.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p><a href="/learn/vrm-vram">VRAM</a> sınırlayıcı faktördür: 3B model 6GB'a sığar, 7B modeller 12GB+ ister ve daha büyükleri int4 nicelemeden faydalanır. Her konteyner yeniden başlatıldığında ağırlıkları yeniden indirmemek için TABBY_MODEL_CACHE_ROOT'u hızlı bir SSD'ye ayarlayın.</p>
    <p>Tabby'nin varsayılan telemetrisi anonimdir ve --no-usage-tracking ile kolayca devre dışı bırakılabilir. Bir ekip dağıtımı için, bir OAuth proxy'sinin arkasına koyun &mdash; yerleşik kimlik doğrulama token tabanlıdır ve internet erişimi için tasarlanmamıştır.</p>
    <h2>Kimler için</h2>
    <p>Güvenlik bilincine sahip ekipler, düzenlemeye tabi sektörler, hava boşluklu ortamlar ve SaaS aboneliği olmadan Copilot tarzı tamamlamalar isteyen hobiciler.</p>
  </>
);