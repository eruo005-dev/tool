import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Replit Agent, tamamen tarayıcıda çalışan, bir komut isteminden çalışan uygulamalar oluşturur. Uygulamayı tanımlarsınız, o da kodu oluşturur, bağımlılıkları yükler, çalıştırır ve size canlı bir URL verir &mdash; dizüstü bilgisayar kurulumu veya dağıtım hattı gerekmez. Aynı gün kullanıcılara bir prototip sunmak isteyen kurucular, tasarımcılar ve mühendisler için tasarlanmıştır.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Replit Agent aslında nedir</h2>
    <p>
      Replit Agent, Replit'in tarayıcı tabanlı IDE'sinin üzerine inşa edilmiş yapay zeka destekli bir oluşturucudur. Arka planda, dosyalar oluşturabilen, kabuğu çalıştırabilen, paketleri kurabilen, bir Postgres veritabanı bağlayabilen, ortam değişkenlerini ayarlayabilen ve dağıtım yapabilen bir planlayıcıyı yönlendiren öncü modeller (Claude ve GPT sınıfı) kullanır. Çıktı, elle veya sohbet yoluyla düzenlemeye devam edebileceğiniz gerçek bir Replit çalışma alanıdır.
    </p>

    <h2>Kurulum</h2>
    <p>
      <a href="https://replit.com">replit.com</a> adresine giriş yapın. Agent, Replit Core planına (yaklaşık 20$/ay) aylık bir kredi limitiyle dahildir; bunun üzerinde kullandıkça öde kredileri mevcuttur. Kurulum adımı yok &mdash; sadece <strong>Create App</strong>'e tıklayın ve Agent akışını seçin.
    </p>
    <pre>{`# CLI kurulumu gerekmez. İsteğe bağlı yerel bağlantı:
npm install -g @replit/cli
replit login
replit connect   # mevcut klasörü bir Replit çalışma alanı olarak açar`}</pre>

    <h2>İlk oturumunuz</h2>
    <p>
      Agent başlangıç ekranında şöyle bir komut yazın: &ldquo;Kullanıcının bir URL yapıştırmasına ve bir markdown özeti almasına izin veren bir Next.js uygulaması. OpenAI API'sini kullan, geçmişi Postgres'te sakla, dağıt.&rdquo; Agent bir plan önerir &mdash; framework, şema, rotalar. Onaylayın ve oluşturmasını izleyin. Birkaç dakika içinde çalışan bir önizleme alacaksınız; isterseniz bir dağıtım bağlantısı da gelir.
    </p>

    <h2>Gerçekçi bir iş akışı</h2>
    <p>
      Agent'ı bir iskele kurucu ve bir eş programcı olarak düşünün. Sıfırdan çalışan bir iskelete ulaşmak için kullanın, ardından detaylı çalışma için düzenleyiciye geçin (veya SSH üzerinden Cursor bağlayın). Özellik düzeyindeki değişiklikler için sohbetle (&ldquo;e-posta girişi ekle&rdquo;), cilalama için elle yineleyin. Replit'in yerleşik Postgres, nesne depolama, sırlar ve tek tıkla dağıtım özellikleri, sekmeden çıkmadan çoğu küçük uygulama ihtiyacını karşılar.
    </p>

    <h2>Tuzaklar ve sınırlamalar</h2>
    <p>
      Agent'ı kontrolsüz bırakırsanız krediler hızla tükenir &mdash; tek bir &ldquo;uygulamayı yeniden oluştur&rdquo; komutu birkaç dolar harcayabilir. Spesifik ve aşamalı olun. Yığın, Agent'ın seçtiği şeydir; Node, Python ve Next.js'i tercih eder, Rust, Go veya sistem paketleri gerektiren herhangi bir şeyde daha zayıf kalır. Oluşturulan kod kalitesi prototipler için yeterlidir ancak üretim öncesinde yine de yeniden düzenleme yapmanız gerekir &mdash; yinelenen mantık, zayıf testler ve temizlemeniz gereken bir dosyada ara sıra sabit kodlanmış sırlar bekleyin.
    </p>

    <h2>Ne ZAMAN kullanılmamalı</h2>
    <p>
      Mevcut büyük kod tabanları için Replit Agent'ı atlayın &mdash; on yıllık bir monorepoda gezinmek için değil, yeşil alan için optimize edilmiştir. Kaynak ve verilerin altyapınızda kalması gereken düzenlenmiş ortamlar için atlayın. Ve halihazırda sevdiğiniz bir yerel kurulumunuz varsa atlayın &mdash; değeri &ldquo;dizüstü bilgisayar gerekmez&rdquo;; dizüstü bilgisayarınız zaten açıksa, <a href="/guides/how-to-use-bolt-new">Bolt.new</a>,{" "}
      <a href="/guides/how-to-use-v0-by-vercel">v0</a> veya düz{" "}
      <a href="/guides/how-to-set-up-claude-code">Claude Code</a> genellikle size daha sıkı bir çıktı verecektir.
    </p>
  </>
);