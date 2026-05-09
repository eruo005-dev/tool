import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Devin by Cognition, yönetilen bir otonom yazılım mühendisidir. Slack, Linear, GitHub veya kendi web arayüzü üzerinden bir görev verirsiniz; o da kendi bulut çalışma alanında çalışır &mdash; planlama, düzenleme, testleri çalıştırma, PR'lar açma &mdash; iş bittiğinde veya takıldığında size rapor verir. Piyasadaki en müdahalesiz kodlama ajanıdır ve fiyatı da buna göre belirlenmiştir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Devin aslında nedir</h2>
    <p>
      Devin tamamen barındırılan bir ajandır. Yerel kurulum, Docker imajı veya seçilecek bir model yoktur. Her &ldquo;oturum&rdquo;, tarayıcı, kabuk ve düzenleyici içeren yeni bir bulut VM'i başlatır. Devin üçünü de yönetir. Çalışma alanı başına uzun süreli belleğe sahiptir, düzeltmelerden öğrenir ve görevleri paralel olarak çalıştırabilir. Ödünleşim: OpenHands veya Claude Code'a kıyasla daha az kontrolünüz vardır ve <a href="/learn/inference">çıkarım</a> üzerine Cognition'ın altyapısı için ödeme yaparsınız.
    </p>

    <h2>Kurulum</h2>
    <p>
      <a href="https://app.devin.ai">app.devin.ai</a> adresine kaydolun, bir plan seçin (Core planı, kullandıkça öde ACU kredileri için aylık yaklaşık $20'den başlar; Team planı, kredi paketiyle aylık $500'dür) ve entegrasyonlarınızı bağlayın:
    </p>
    <pre>{`# Devin ayarları içinde:
# 1. GitHub'ı bağlayın (repo erişimi, PR izinleri)
# 2. Slack veya Linear'ı bağlayın (görev girişi)
# 3. Ajanın ihtiyaç duyduğu gizli bilgileri (DB URL'leri, API anahtarları) Secrets kasasına ekleyin
# 4. Repo kurallarınızı açıklayan bir "Devin Yönergeleri" belgesi yazın`}</pre>
    <p>
      Bu Yönergeler belgesi kritik öneme sahiptir. Devin, her görevden önce onu okur; tıpkı Claude Code'un <code>CLAUDE.md</code> dosyasını okuması gibi.
    </p>

    <h2>İlk oturumunuz</h2>
    <p>
      <strong>Yeni oturum</strong>'a tıklayın ve bir özet yazın: ne istediğiniz, hangi repo, herhangi bir kısıtlama. Devin bir plan oluşturur &mdash; onaylamadan önce okuyun. İyi bir ilk görev, &ldquo;projeyi React 18'den React 19'a yükselt, kullanımdan kaldırılmış API'leri güncelle, test paketini yeşil tut&rdquo; gibi bir şeydir. Çalışırken VM akışını izleyin. İstediğiniz zaman bir sohbet mesajıyla müdahale edebilirsiniz.
    </p>

    <h2>Gerçekçi bir iş akışı</h2>
    <p>
      Devin, eşzamansız, çok adımlı işlerde parlar. Uygun görevler: bağımlılık güncellemeleri, bir kod tabanına telemetri ekleme, geçiş betikleri yazma, test kapsamını doldurma, Sentry hatalarını PR'lara dönüştürme. Slack'ten paralel olarak iki veya üç oturum başlatın, bir kahve alın, geri gelin ve incelemeye hazır taslak PR'lar bulun. Her PR'ı bir stajyerin işi gibi değerlendirin &mdash; diff'i okuyun, yerel olarak çalıştırın ve inceleme yorumları bırakın. Devin, PR yorumlarına yanıt verir ve bir insanın yapacağı gibi düzeltmeleri gönderir.
    </p>

    <h2>Tuzaklar ve sınırlamalar</h2>
    <p>
      ACU (ajan bilgi işlem birimi) tüketimi ana sürprizdir. Amaçsız bir görev, fark etmeden $10&ndash;20 kredi harcayabilir. Ayarlardan bütçe limitleri belirleyin ve oturum süresini sınırlayın. Devin, görev başına Claude Code'u yerel olarak çalıştırmaktan daha yavaştır &mdash; hız için değil, müdahalesiz kısım için ödeme yapıyorsunuz. Ayrıca, belirsiz ürün kararları gerektiren görevlerde sessizce başarısız olur; eğer &ldquo;doğru&rdquo; cevap bir insan görüşmesi gerektiriyorsa, tahmin edecek ve yine de PR'ı yeniden yazmak zorunda kalacaksınız.
    </p>

    <h2>Ne ZAMAN kullanılmamalı</h2>
    <p>
      Devin'i canlı, etkileşimli kodlama için kullanmayın &mdash; gecikme süresi onu berbat hale getirir. Kaynak kodunu istisnasız olarak şirket içinde tutmanız gerektiğinde kullanmayın; Cognition'ın kurumsal seçenekleri olsa da, varsayılan oturumlar onların bulutunda çalışır. Ve tek satırlık bir hata düzeltmesi için kullanmayın &mdash; özeti yazmak, hatayı kendiniz düzeltmekten daha fazla zaman alır. Daha ucuz, kendi kendine barındırılan ajanlar için <a href="/guides/how-to-use-openhands">OpenHands rehberimize</a> bakın; düzenleyici içi akış için <a href="/guides/how-to-set-up-cursor-ai-ide">Cursor</a>'a göz atın.
    </p>
  </>
);
===END FILE===