import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Replit Agent, tamamen tarayıcıda çalışan, bir komut isteminden
    uygulamalar oluşturur. Uygulamayı tarif edersiniz, o da kodu
    hazırlar, bağımlılıkları yükler, çalıştırır ve size canlı bir URL
    sunar &mdash; dizüstü bilgisayar kurulumu veya dağıtım hattı
    gerekmez. Aynı gün içinde kullanıcılara bir prototip sunmak
    isteyen kurucular, tasarımcılar ve mühendisler için tasarlanmıştır.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Replit Agent aslında nedir</h2>
    <p>
      Replit Agent, Replit'in tarayıcı tabanlı IDE'sinin üzerine
      yerleştirilmiş yapay zeka yapıcısıdır. Arka planda, dosya
      oluşturabilen, kabuğu çalıştırabilen, paketler yükleyebilen,
      Postgres veritabanı bağlayabilen, ortam değişkenleri ayarlayabilen
      ve dağıtım yapabilen bir planlayıcıyı yönlendiren öncü modeller
      (Claude ve GPT sınıfı) kullanır. Çıktı, elle veya sohbet yoluyla
      düzenlemeye devam edebileceğiniz gerçek bir Replit çalışma
      alanıdır.
    </p>

    <h2>Kurulum</h2>
    <p>
      <a href="https://replit.com">replit.com</a> adresine giriş yapın.
      Agent, Replit Core planına (yaklaşık aylık 20$) dahildir ve aylık
      bir kredi limiti sunar; bunun üzerinde kullandıkça öde kredileri
      mevcuttur. Kurulum adımı yok &mdash; sadece <strong>Create App</strong>'e
      tıklayın ve Agent akışını seçin.
    </p>
    <pre>{`# CLI kurulumu gerekmez. İsteğe bağlı yerel bağlantı:
npm install -g @replit/cli
replit login
replit connect   # mevcut klasörü Replit çalışma alanı olarak açar`}</pre>

    <h2>İlk oturumunuz</h2>
    <p>
      Agent başlangıç ekranında şöyle bir komut yazın: &ldquo;Kullanıcının
      bir URL yapıştırıp karşılığında markdown özeti almasını sağlayan
      bir Next.js uygulaması. OpenAI API'sini kullan, geçmişi Postgres'te
      sakla, dağıt.&rdquo; Agent bir plan önerir &mdash; framework, şema,
      rotalar. Onaylayın ve inşa etmesini izleyin. Birkaç dakika içinde
      çalışan bir önizleme alırsınız; isterseniz bir dağıtım bağlantısı
      da gelir.
    </p>

    <h2>Gerçekçi bir iş akışı</h2>
    <p>
      Agent'ı bir iskele kurucu ve bir eş programcı olarak düşünün.
      Sıfırdan çalışan bir iskelete ulaşmak için kullanın, ardından
      detaylı çalışma için düzenleyiciye geçin (veya SSH üzerinden
      Cursor'a bağlanın). Özellik düzeyindeki değişiklikler için
      sohbetle (&ldquo;e-posta girişi ekle&rdquo;), ince ayarlar için
      elle yineleyin. Replit'in yerleşik Postgres, nesne depolama,
      sırlar ve tek tıkla dağıtım özellikleri, sekmeden ayrılmadan
      çoğu küçük uygulama ihtiyacını karşılar.
    </p>

    <h2>Tuzaklar ve sınırlamalar</h2>
    <p>
      Agent'ı kontrolsüz bırakırsanız krediler hızla tükenir &mdash; tek
      bir &ldquo;uygulamayı yeniden oluştur&rdquo; komutu birkaç dolara
      mal olabilir. Spesifik ve aşamalı olun. Kullanılan yığın Agent'ın
      seçtiği şeydir; Node, Python ve Next.js'yi tercih eder, Rust, Go
      veya sistem paketleri gerektiren herhangi bir şeyde daha zayıf
      kalır. Üretilen kod kalitesi prototipler için yeterlidir ancak
      üretim öncesinde yine de yeniden düzenleme yapmanız gerekir
      &mdash; tekrarlanan mantık, zayıf testler ve temizlemeniz gereken
      bir dosyada ara sıra sabit kodlanmış sırlar bekleyin.
    </p>

    <h2>Ne ZAMAN kullanılmamalı</h2>
    <p>
      Mevcut büyük kod tabanları için Replit Agent'ı atlayın &mdash; on
      yıllık bir monorepoda gezinmek için değil, yeşil alan için
      optimize edilmiştir. Kaynak ve verilerin altyapınızda kalması
      gereken düzenlenmiş ortamlar için atlayın. Ve halihazırda
      sevdiğiniz bir yerel kurulumunuz varsa atlayın &mdash; değeri
      &ldquo;dizüstü bilgisayar gerekmez&rdquo;; dizüstü bilgisayarınız
      zaten açıksa, <a href="/guides/how-to-use-bolt-new">Bolt.new</a>,{" "}
      <a href="/guides/how-to-use-v0-by-vercel">v0</a> veya düz{" "}
      <a href="/guides/how-to-set-up-claude-code">Claude Code</a>
      genellikle size daha sıkı bir çıktı verecektir.
    </p>
  </>
);