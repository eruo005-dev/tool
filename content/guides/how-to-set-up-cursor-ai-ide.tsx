export const intro = (
  <>
    <p>
      Cursor, yapay zeka odaklı bir kod düzenleyicidir — bir düzenleyici içi ajan etrafında yeniden inşa edilmiş bir VS Code çatalıdır. Nisan 2026 itibarıyla, düzenleyici tabanlı yapay zeka kodlamada pazar lideridir ve yaklaşık 50 milyar dolar değerleme turunu kapattığı ve yaklaşık 2 milyar dolar yıllık tekrarlayan gelire (ARR) ulaştığı bildirilmektedir. Uzun süreli otonom işler için değil, hızlı ve akış içinde kodlama için çoğu geliştiricinin tercih ettiği araç budur.
    </p>
    <p>
      Bu kılavuz, sizi indirme işleminden bir saatten kısa sürede üretken bir kuruluma ulaştırır ve ardından 2025'te birçok kişiyi mağdur eden kredi fiyatlandırması tuzağını açıklar.
    </p>
  </>
);

export const body = (
  <>
    <h2>Adım 1 — Kurulum</h2>
    <p>
      <a href="https://cursor.com">cursor.com</a> adresinden indirin. macOS, Linux ve Windows sürümleri mevcuttur. VS Code'dan geliyorsanız, uzantılarınız ve ayarlarınız ilk açılışta içe aktarılacaktır — Cursor bir çatal olduğu için bildiklerinizin %95'i aynen geçerlidir.
    </p>

    <h2>Adım 2 — Giriş yapın</h2>
    <p>
      Bir hesap oluşturun ve bir plan seçin. Ücretsiz sürümün sınırlı istek hakkı vardır, Pro varsayılan ücretli katmandır, İş/Kurumsal sürümler ise SSO ve gizlilik garantileri ekler. İşvereninizin katı veri işleme kuralları varsa, kaynak kodunu açmadan önce "Gizlilik Modu"nun açık olduğundan emin olun.
    </p>

    <h2>Adım 3 — Deponuzu dizine ekleyin</h2>
    <p>
      Bir proje klasörü açın; Cursor onu dizine eklemeyi teklif edecektir. Kabul edin. Dizine ekleme, kodunuzu gömer, böylece ajan yalnızca o anda açık olanı görmek yerine talep üzerine ilgili dosyaları alabilir. Monorepolar için ilk seferde birkaç dakika sürer ve ardından artımlı olarak güncellenir.
    </p>

    <h2>Adım 4 — Üç modu öğrenin</h2>
    <p>Cursor'un üç ana ajan yüzeyi vardır. Hangisine başvuracağınızı bilin:</p>
    <ul>
      <li>
        <strong>Satır içi düzenleme</strong> (<code>⌘K</code> / <code>Ctrl+K</code>) — ajandan mevcut seçimi değiştirmesini isteyin. Küçük düzenlemeler, yeniden adlandırmalar, "buraya tür ekle" gibi işlemler için en iyisidir.
      </li>
      <li>
        <strong>Sohbet paneli</strong> (<code>⌘L</code> / <code>Ctrl+L</code>) — depo üzerinde konuşma tarzı soru-cevap. "X nerede", "bu işlevi açıkla" gibi durumlar için en iyisidir.
      </li>
      <li>
        <strong>Ajan modu</strong> — çok dosyalı otonom düzenlemeler. "Uçtan uca yeni bir uç nokta ekle", "bu görevi uygula" gibi işlemler için en iyisidir. Her değişikliği yazmadan önce onaylayın.
      </li>
    </ul>

    <h2>Adım 5 — Mod başına model seçin</h2>
    <p>
      Cursor size bir model seçici sunar. Pratikte:
    </p>
    <ul>
      <li>
        <strong>Satır içi düzenlemeler:</strong> hızlı bir Sonnet sınıfı model — gecikme süresi önemlidir, derinlik değil.
      </li>
      <li>
        <strong>Ajan modu:</strong> Claude Opus 4.7 veya GPT-5 sınıfı — kalite önemlidir, gecikme süresi daha az önemlidir.
      </li>
      <li>
        <strong>Sohbet:</strong> kod tabanınıza en iyi uyan model. Birkaçını deneyin; göreve göre değiştirin.
      </li>
    </ul>

    <h2>Adım 6 — Kurallar dosyası</h2>
    <p>
      Depo kökünde <code>.cursorrules</code> oluşturun. Bu, Cursor'un CLAUDE.md versiyonudur — ajanın her oturumda okuduğu kalıcı talimatlar. Stil, kurallar ve "bunu asla yapma" kurallarını buraya koyun. Kısa ve spesifik olmak, uzun ve kibar olmaktan daha iyidir.
    </p>
    <pre><code>{`- TypeScript katı mod. Yorum yapılmadıkça 'any' yok.
- React bileşenlerini 300 satırın altında tutun; daha büyükse bölün.
- Sunucu bileşenlerini tercih edin; yalnızca gerektiğinde 'use client' kullanın.
- /generated altındaki dosyaları değiştirmeyin.`}</code></pre>

    <h2>Adım 7 — Kredi fiyatlandırması tuzağı</h2>
    <p>
      Cursor, 2025'in ortalarında kredi tabanlı fiyatlandırmaya geçti. Tuzak: tek bir uzun ajan çalıştırması, aylık kredilerinizi bir öğleden sonrada tüketebilir (bir ekibin yıllık aboneliğini bir günde tükettiğine dair yaygın olarak anlatılan bir hikaye vardır). Kendinizi koruyun:
    </p>
    <ul>
      <li>
        Hesap ayarlarında sabit bir aylık harcama limiti belirleyin.
      </li>
      <li>
        Ajan modu görevlerini küçük tutun. Bir görev saatlerce otonomi gerektiriyorsa, Claude Code'a devredin —{" "}
        <a href="/guides/how-to-set-up-claude-code">Claude Code kurulum kılavuzumuza</a> bakın.
      </li>
      <li>
        Rutin düzenlemeler için daha ucuz bir modelle satır içi düzenleme kullanın. Ajan modunu zor durumlar için saklayın.
      </li>
    </ul>

    <h2>Adım 8 — Ezberlemeye değer klavye kısayolları</h2>
    <ul>
      <li><code>⌘K</code> — satır içi düzenleme.</li>
      <li><code>⌘L</code> — sohbet paneli.</li>
      <li><code>⌘I</code> — ajan bestecisi.</li>
      <li><code>⌘⇧L</code> — geçerli dosyayı sohbet bağlamına ekle.</li>
      <li>Sohbette <code>@</code> — bir dosyaya, sembole veya belgeye başvur.</li>
    </ul>

    <h2>Çoğu kişinin üzerinde uzlaştığı iş akışı</h2>
    <p>
      Sıkı düzenleyici içi döngü için Cursor — küçük düzenlemeler, yeniden düzenlemeler, hızlı açıklamalar. Saatlerce akıl yürütme veya tam bir depo taraması gerektiren her şey için Claude Code. Düzenleyici bağlamınızda istemediğiniz tek seferlik sorular için ChatGPT (web). Bu yığın — artı her şeyin maliyetini tahmin etmek için{" "}
      <a href="/tools/ai-token-counter">token sayacımız</a> — bu yıl ürün çıkaran geliştiriciler arasında en yaygın kurulumdur.
    </p>
  </>
);