import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    StackBlitz tarafından geliştirilen Bolt.new, tarayıcı içinde çalışan, tam yığın bir yapay zeka
    oluşturucusudur. Ne istediğinizi yazarsınız ve bir WebContainer, sekmenizin içinde gerçek bir Node
    çalışma zamanı başlatır &mdash; kabuk için sunucu gidiş-dönüşü, yerel kurulum veya Docker
    gerekmez. Sonuç, prototipler ve pazarlama demoları için şaşırtıcı derecede hızlı bir
    çalıştırma süresidir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Bolt.new aslında nedir</h2>
    <p>
      Bolt.new, StackBlitz'in IDE'sine güç veren aynı WebContainer teknolojisi üzerine inşa edilmiş
      yapay zeka ürünüdür. Aracı, dosyaları düzenler, <code>npm install</code> komutunu çalıştırır,
      geliştirme sunucularını başlatır ve tek tıkla Netlify'a dağıtmanıza olanak tanır &mdash;
      tamamen istemci tarafında. Replit'teki gibi bir VM'ye SSH ile bağlanmazsınız; Node işlemi
      tam anlamıyla tarayıcı sekmenizde WebAssembly aracılığıyla çalışır.
    </p>

    <h2>Kurulum</h2>
    <p>
      <a href="https://bolt.new">bolt.new</a> adresine gidin ve GitHub veya Google ile oturum açın.
      Ücretsiz katman size günlük bir token kotası verir; Pro planlar, daha fazla token ve özel
      projelerle ayda yaklaşık 20 dolardan başlar. CLI gerekmez.
    </p>
    <pre>{`# İsteğe bağlı: alana ön ek ekleyerek herhangi bir herkese açık GitHub deposunu Bolt'ta açın.
https://bolt.new/github.com/<sahip>/<depo>

# Veya ana sayfadaki bir istemden başlayın.`}</pre>

    <h2>İlk oturumunuz</h2>
    <p>
      İyi bir ilk istem somut ve sınırlıdır: &ldquo;Sürükle-bırak yeniden sıralama, localStorage
      kalıcılığı ve karanlık mod geçişi olan bir Vite + React yapılacaklar uygulaması.&rdquo; Bolt
      planı ortaya koyar, dosyaları oluşturur, geliştirme sunucusunu çalıştırır ve önizlemeyi sağ
      bölmede gösterir. Sohbet yoluyla yineleyin (&ldquo;tamamlanan öğeler için bir filtre
      ekle&rdquo;) veya kodu doğrudan düzenleyin. İşiniz bittiğinde <strong>Dağıt</strong>
      düğmesine tıklayın.
    </p>

    <h2>Gerçekçi bir iş akışı</h2>
    <p>
      Bolt, bir prototip fabrikası olarak en güçlüdür. İstemleri aşamalı tutun, sık sık GitHub'a
      commit yapın (Bolt'un bir bağlayıcısı vardır) ve uygulama tarayıcıya özel kolaylığı aştığında
      depoyu yerel olarak çekin. UI ağırlıklı üretim için, bileşen düzeyinde çalışmak üzere{" "}
      <a href="/guides/how-to-use-v0-by-vercel">v0</a> ile eşleştirin ve kablolama için Bolt'a
      yapıştırın. Geri bildirim döngüsü &mdash; yaz, gör, ayarla &mdash; onu özel kılan şeydir;
      devasa bir şartname yazmak yerine bundan yararlanın.
    </p>

    <h2>Tuzaklar ve sınırlamalar</h2>
    <p>
      Tokenlar bütçedir. Agresif bir &ldquo;uygulamayı yeniden yaz&rdquo; istemi bir anda binlerce
      token yakabilir &mdash; isteklerinizi kapsamlandırın. WebContainer inanılmazdır ancak tam bir
      Linux değildir; yerel ikili dosyalar, Puppeteer, Docker, Rust araç zincirleri &mdash; hiçbiri
      çalışmaz. Node, saf JS paketleri ve statik ön yüzlere bağlı kalın. Mobil tarayıcılar daha uzun
      oturumlarda zorlanır; bir dizüstü bilgisayar kullanın. Oluşturulan kod biraz dağınık olma
      eğilimindedir &mdash; prodüksiyon olarak ele almadan önce bir yeniden düzenleme geçişi
      planlayın.
    </p>

    <h2>NE ZAMAN kullanılmamalı</h2>
    <p>
      Python, Go, Rust veya gerçek bir işletim sistemi gerektiren herhangi bir şey için Bolt'u
      kullanmayın &mdash; WebContainer bunları çalıştıramaz. Büyük mevcut kod tabanları için
      kullanmayın &mdash; içe aktarma çalışır ancak aracının bağlamı, Cursor veya Claude Code'da
      alacağınızdan daha sığdır. Çevrimdışı çalışma önemliyse de atlayın; her şey canlı bir
      tarayıcı oturumudur. Tam VM'li barındırılan bir deneyim için <a href="/guides/how-to-use-replit-agent">Replit Agent</a>'a
      bakın.
    </p>
  </>
);