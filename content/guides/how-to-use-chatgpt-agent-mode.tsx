export const intro = (
  <>
    <p>
      ChatGPT ajan modu, OpenAI tarafından barındırılan ajandır: ne yapması gerektiğini söyleyin, o da
      gezinir, tıklar, okur ve bir sonuçla geri döner. Bugün bir ajana sahip olmanın en kolay
      yoludur — kod, SDK veya altyapı gerektirmez. Bir ChatGPT Plus, Pro veya Team
      sohbetinin içinde yaşar.
    </p>
    <p>
      Bu kılavuz, onu etkinleştirmeyi, ilk gerçek görevi ve hassas bir şey için
      güvenmeden önce ayarlamak isteyeceğiniz güvenlik önlemlerini adım adım anlatır.
      Nisan 2026'da, mevcut ChatGPT ajan deneyimine göre yazılmıştır.
    </p>
  </>
);

export const body = (
  <>
    <h2>Nedir (ve ne değildir)</h2>
    <p>
      Ajan modu, ChatGPT'nin çok adımlı bir görevi tamamlamak için bir tarayıcı, bir terminal
      ve bir dosya çalışma alanı kullanmasını sağlar; siz de izlersiniz. Şöyle düşünün: &ldquo;en
      ucuz üç uçuşu bul, aktarma sürelerine göre karşılaştır ve karşılaştırmayı bir belgeye
      yaz.&rdquo; Bu bir arka plan işçisi <strong>değildir</strong> — sohbetinizin içinde canlı
      olarak çalışır ve siz kapattığınızda durur. Sürekli çalışan otomasyonlar için{" "}
      <a href="/guides/how-to-set-up-an-ai-agent">kurulum genel bakışı</a> bölümümüze bakın.
    </p>

    <h2>Adım 1 — Erişiminiz olduğunu onaylayın</h2>
    <p>
      Ajan modu, Plus, Pro ve Team planlarında sunulur. Ücretsiz katman hesapları bunu
      görmez. Enterprise veya Education kullanıyorsanız, yöneticiniz bunu kapatmış olabilir;
      bir öğleden sonrayı hata ayıklamaya harcamadan önce onlara sorun.
    </p>

    <h2>Adım 2 — Bir sohbet içinde etkinleştirin</h2>
    <p>
      Herhangi bir konuşmayı açın. Besteci'de, araçlar açılır menüsüne tıklayın ve
      <strong>ajan modu</strong>'nu seçin veya etkinleştirmek için <code>/agent</code> yazın.
      Besteci'nin değiştiğini göreceksiniz — ChatGPT artık sohbet duruşunda değil, ajan
      duruşundadır.
    </p>

    <h2>Adım 3 — İyi bir ilk komut yazın</h2>
    <p>
      Ajan komutları, sohbet komutları değildir. Şunları içermelidir:
    </p>
    <ul>
      <li><strong>Hedef</strong> — istediğiniz sonuç.</li>
      <li><strong>Kaynaklar</strong> — kullanılacak siteler veya hesaplar.</li>
      <li><strong>Durdurma koşulu</strong> — ne zaman tamamlanmış sayılacağı.</li>
      <li><strong>Çıktı şekli</strong> — bir belge, bir tablo, bir e-posta taslağı.</li>
    </ul>
    <p>
      Örnek: &ldquo;Lizbon'da Pazar günleri açık olan üç bağımsız kitapçı bul,
      adreslerini ve çalışma saatlerini bir işaretleme tablosuna yaz. Üçten sonra dur;
      daha fazla listeleme.&rdquo; Komutu çalıştırmadan önce sıkılaştırmak için{" "}
      <a href="/tools/prompt-improver">komut iyileştirici</a>'mizi kullanın — ajan
      token'ları sohbet token'larından daha pahalıdır.
    </p>

    <h2>Adım 4 — İlk çalıştırmayı baştan sona izleyin</h2>
    <p>
      İlk seferde, <strong>uzaklaşmayın</strong>. Sekmeleri açmasını, tıklamasını ve
      akıl yürütmesini izleyin. İki şey göreceksiniz: beklediğinizden daha akıllı olduğu yerler
      ve kendinden emin bir şekilde yanlış şeyi yaptığı yerler. Çalışma sırasında
      &ldquo;dur ve bana sor&rdquo; veya &ldquo;bunun yerine bu siteyi kullan&rdquo; ile
      müdahale edebilirsiniz.
    </p>

    <h2>Adım 5 — Hassas işlemleri manuel olarak onaylayın</h2>
    <p>
      <em>Yazma</em> işlemi yapan her şey için — e-posta gönderme, bir sitede yayınlama,
      &ldquo;satın al&rdquo; düğmesine tıklama — ajan modu duraklayacak ve onayınızı
      isteyecektir. Bunu devre dışı bırakmayın. Patronunuza yanlış e-postayı kendinden emin
      bir şekilde gönderen bir ajan, kötü bir gündür. Tek bir tıklamanın küçük sürtünmesi
      buna değer.
    </p>

    <h2>Adım 6 — Yalnızca gerektiğinde giriş yapın</h2>
    <p>
      Ajan modu, sitelere giriş yapmanızı isteyebilir. Bunu, ajanın tarayıcı penceresinde,
      o tek oturum için satır içinde yapın. Ajana şifre kaydetmeyin; şifre yöneticinizi
      kullanın ve istendiğinde bunları yazın. İki faktörlü kodları veya banka kimlik
      bilgilerini bir ajanla asla paylaşmayın — bu ajanla değil, başka hiçbir ajanla.
    </p>

    <h2>Ajan modu için iyi görevler</h2>
    <ul>
      <li>Kısa bir liste araştırmak (kitaplar, uçuşlar, daireler, araçlar).</li>
      <li>Sabit bir kriter setine göre 3–10 öğeyi karşılaştırmak.</li>
      <li>API'si olmayan bir siteden veri çekmek.</li>
      <li>Gezinme yoluyla bir e-posta, belge veya elektronik tablo taslağı hazırlamak.</li>
      <li>Gözetiminiz altında hafif form doldurma.</li>
    </ul>

    <h2>Ajan modu için kötü görevler</h2>
    <ul>
      <li>Baştan sona yaklaşık ~20 dakikadan uzun süren her şey.</li>
      <li>Gece boyunca veya bir programa göre çalışan görevler (bir SDK veya Zapier kullanın).</li>
      <li>Büyük ölçekli veri toplama (yüzlerce sayfa).</li>
      <li>Gerçek paranız veya gerçek kimlik bilgilerinizle ilgili her şey.</li>
    </ul>

    <h2>Ne zaman ondan ayrılmalı</h2>
    <p>
      Aynı ajan modu görevini haftalık olarak çalıştırdığınızı fark ederseniz, onu aşmışsınız
      demektir. İşi zamanlayabilen bir SDK veya platforma geçin — geliştirici yolu için{" "}
      <a href="/guides/how-to-build-an-agent-with-the-openai-agents-sdk">
        OpenAI Agents SDK kılavuzu
      </a>
      {' '}bölümüne veya tam karar ağacı için{" "}
      <a href="/guides/how-to-set-up-an-ai-agent">ajan kurulum genel bakışı</a>
      'mıza bakın.
    </p>
  </>
);