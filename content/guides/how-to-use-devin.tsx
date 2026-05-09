import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Cognition tarafından geliştirilen Devin, yönetilen otonom bir yazılım mühendisidir. 
    Slack, Linear, GitHub veya kendi web arayüzü üzerinden bir görev verirsiniz; 
    o da kendi bulut çalışma alanında planlama, düzenleme, test çalıştırma, 
    PR açma gibi işlemleri yapar ve işi bittiğinde veya takıldığında size rapor verir. 
    Piyasadaki en az müdahale gerektiren kodlama ajanıdır ve fiyatı da buna göre belirlenmiştir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Devin aslında nedir</h2>
    <p>
      Devin tamamen barındırılan bir ajandır. Yerel kurulum, Docker imajı veya seçilecek bir model yoktur. 
      Her "oturum", tarayıcı, kabuk ve düzenleyici içeren yeni bir bulut sanal makinesi başlatır. 
      Devin her üçünü de yönetir. Çalışma alanı başına uzun süreli belleğe sahiptir, 
      düzeltmelerden öğrenir ve görevleri paralel olarak çalıştırabilir. 
      Ödünleşim: OpenHands veya Claude Code'a kıyasla daha az kontrolünüz vardır 
      ve Cognition'ın altyapısı için <a href="/learn/inference">çıkarım</a> üzerine ekstra ödeme yaparsınız.
    </p>

    <h2>Kurulum</h2>
    <p>
      <a href="https://app.devin.ai">app.devin.ai</a> adresine kaydolun, 
      bir plan seçin (Core planı, kullandıkça öde ACU kredileri için aylık yaklaşık $20'den başlar; 
      Team planı, kredi paketiyle aylık $500'dür) ve entegrasyonlarınızı bağlayın:
    </p>
    <pre>{`# Devin'in ayarlarında:
# 1. GitHub'ı bağlayın (repo erişimi, PR izinleri)
# 2. Slack veya Linear'ı bağlayın (görev alımı)
# 3. Ajanın ihtiyaç duyduğu gizli bilgileri (DB URL'leri, API anahtarları) Secrets kasasına ekleyin
# 4. Repo kurallarınızı açıklayan bir "Devin Yönergeleri" belgesi yazın`}</pre>
    <p>
      Bu Yönergeler belgesi kritik öneme sahiptir. Devin, her görevden önce onu okur, 
      tıpkı Claude Code'un <code>CLAUDE.md</code> dosyasını okuması gibi.
    </p>

    <h2>İlk oturumunuz</h2>
    <p>
      <strong>Yeni oturum</strong>'a tıklayın ve bir özet yazın: ne istediğiniz, 
      hangi repo, herhangi bir kısıtlama. Devin bir plan oluşturur &mdash; onaylamadan önce okuyun. 
      İyi bir ilk görev, "projeyi React 18'den React 19'a yükselt, kullanımdan kaldırılmış API'leri güncelle, 
      test paketini yeşil tut" gibi bir şey olabilir. Çalışırken VM akışını izleyin. 
      İstediğiniz zaman bir sohbet mesajıyla müdahale edebilirsiniz.
    </p>

    <h2>Gerçekçi bir iş akışı</h2>
    <p>
      Devin, eşzamansız, çok adımlı işler için idealdir. Uygun kullanım alanları: 
      bağımlılık güncellemeleri, kod tabanına telemetri ekleme, geçiş scriptleri yazma, 
      test kapsamını genişletme, Sentry hatalarını PR'lara dönüştürme. 
      Slack'ten paralel olarak iki veya üç oturum başlatın, bir kahve alın, 
      incelemeye hazır taslak PR'larla geri dönün. Her PR'ı bir stajyerin işi gibi değerlendirin &mdash; 
      diff'i okuyun, yerelde çalıştırın ve inceleme yorumları bırakın. 
      Devin, PR yorumlarına yanıt verir ve düzeltmeleri bir insanın yapacağı gibi iter.
    </p>

    <h2>Tuzaklar ve sınırlamalar</h2>
    <p>
      ACU (ajan hesaplama birimi) tüketimi en büyük sürprizdir. 
      Amaçsız bir görev, fark etmeden $10&ndash;20 kredi harcayabilir. 
      Ayarlardan bütçe limitleri belirleyin ve oturum süresini sınırlayın. 
      Devin, görev başına Claude Code'u yerelde çalıştırmaktan daha yavaştır &mdash; 
      hız için değil, müdahalesiz çalışma için ödeme yapıyorsunuz. 
      Ayrıca, belirsiz ürün kararları gerektiren görevlerde sessizce başarısız olur; 
      "doğru" cevap bir insan kararı gerektiriyorsa, tahmin edecek ve PR'ı yeniden yazmak zorunda kalacaksınız.
    </p>

    <h2>Ne ZAMAN KULLANILMAMALI</h2>
    <p>
      Canlı, etkileşimli kodlama için Devin'i kullanmayın &mdash; gecikme süresi bunu çekilmez kılar. 
      Kaynak kodunu kesinlikle şirket içinde tutmanız gerektiğinde kullanmayın; 
      Cognition'ın kurumsal seçenekleri olsa da, varsayılan oturumlar onların bulutunda çalışır. 
      Tek satırlık bir hata düzeltmesi için de kullanmayın &mdash; özeti yazmak, 
      hatayı kendiniz düzeltmekten daha fazla zaman alır. Daha ucuz, kendi kendine barındırılan ajanlar için 
      <a href="/guides/how-to-use-openhands">OpenHands rehberimize</a>; 
      düzenleyici içi akış için <a href="/guides/how-to-set-up-cursor-ai-ide">Cursor</a>'a bakın.
    </p>
  </>
);