/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Sıfır abonelik ücretiyle çalışan bir işe alım hattı kurmak 45 dakikalık bir işlemdir. 
      Reddit'te "gerçek bir ATS olmadan işe alımı nasıl organize ediyorsunuz?" sorusuna 
      "tamamen e-postalarla"dan "12 veritabanlı bir Notion imparatorluğu kurdum"a kadar 
      yanıtlar gelir. İkisi de farklı nedenlerle yanlıştır. İşte pratik orta yol.
    </p>
    <p>
      Bu rehber adım adım kurulumu anlatır: hangi araçlar, nasıl bağlanır, ne otomatikleştirilir 
      ve bir dakikanızı harcamadan başvuruların alt %60'ını eleyen eleme sorusu taktiği.
    </p>
  </>
);

export const toc = [
  { id: "stages", label: "Aşamalarınızı tanımlayın" },
  { id: "tools", label: "Araçları bağlayın" },
  { id: "screening", label: "Eleme soruları" },
  { id: "remote", label: "Uzaktan / dağıtık ekipler" },
  { id: "outreach", label: "Aday bulma + takip otomasyonu" },
];

export const body = (
  <>
    <h2 id="stages">Adım 1: işe alım aşamalarınızı tanımlayın</h2>
    <p>
      Çoğu küçük ekibin kullandığı standart 6 aşamalı huni:
    </p>
    <ol>
      <li><strong>Kaynak / Başvuru</strong> — aday sistemde ama iletişime geçilmedi.</li>
      <li><strong>Telefon ön görüşmesi</strong> — işe alımcı veya yönetici ile 30 dk'lık görüşme.</li>
      <li><strong>Mülakat</strong> — teknik / panel / çok turlu.</li>
      <li><strong>Teklif</strong> — teklif yapıldı; karar bekleniyor.</li>
      <li><strong>İşe alındı</strong> — olumlu sonuç.</li>
      <li><strong>Reddedildi</strong> — olumsuz sonuç.</li>
    </ol>
    <p>
      4 alt aşama ekleme isteğine direnin. Boru hattı sorunlarının çoğu aşamaları fazla detaylandırmaktan kaynaklanır 
      (her işe alım aracı bunu teşvik eder çünkü panoları daha havalı gösterir). 
      Neyin işe yaradığını görmek için 6 aşama yeterlidir.
    </p>

    <h2 id="tools">Adım 2: araçları bağlayın</h2>
    <p>
      Minimum uygulanabilir ücretsiz boru hattı:
    </p>
    <ul>
      <li>
        <strong>Boru hattı takipçisi:</strong>{" "}
        <a href="/tools/recruiting-pipeline-tracker">işe alım boru hattı takipçimiz</a>{" "}
        yukarıdaki 6 aşamayla. Veya aynı sütun yapısına sahip Trello.
      </li>
      <li>
        <strong>Başvuru formu:</strong> Tally ücretsiz (sınırsız yanıt, başvuru kullanım durumları için 
        Google Forms'tan çok daha iyi) veya başvuruların ortak bir gelen kutusuna gittiği web sitenizde basit bir sayfa.
      </li>
      <li>
        <strong>Gelen kutusu:</strong> Gmail, ekip genelinde "işe alım" gibi ortak bir etiketle.
      </li>
      <li>
        <strong>Takvim:</strong> Ön görüşmeler için Calendly ücretsiz; ekip koordinasyonu için Google Takvim.
      </li>
      <li>
        <strong>Notlar / aday bağlamı:</strong> boru hattı takipçisindeki not alanı veya tüm mülakat turlarının notlarını içeren rol başına tek bir Google Dokümanı.
      </li>
    </ul>
    <p>
      Kurulum süresi: 30–45 dakika. Sürekli bakım: Kayıt tutmada disiplinli olursanız haftada ~10 dk.
    </p>

    <h2 id="screening">Adım 3: başvuruları azaltan eleme soruları</h2>
    <p>
      Küçük işletme işe alımında en az konuşulan taktik: <strong>başvuru formunuza 1–3 eleme sorusu ekleyin</strong>. 
      Rastgele başvuruları eler ve size daha hızlı sinyal verir:
    </p>
    <ul>
      <li>
        <strong>"Bu belirli role neden ilgi duyduğunuzu 2–3 cümleyle açıklayın."</strong> — 
        Genel başvuruları öldürür. İş tanımını okumayanlar uğraşmaz.
      </li>
      <li>
        <strong>Bir somut deneyim sorusu.</strong> "İş tanımındaki ana beceriyi kullandığınız bir projeyi anlatın" — 
        gerçek deneyimi anahtar kelime dolu özgeçmişlerden ayırır.
      </li>
      <li>
        <strong>Maaş beklentisi + konum.</strong> Telefon ön görüşmesine zaman harcamadan önce 
        ücret/coğrafya uyumsuzluklarını eler.
      </li>
    </ul>
    <p>
      Tally ve Google Forms bunları eklemenize izin verir. Adaya maliyeti: 90 saniye. 
      Size kazandırdığı zaman: tipik hacimlerde ayda 5–10 saat.
    </p>

    <h2 id="remote">Adım 4: uzaktan / dağıtık işe alım ekipleri</h2>
    <p>
      Birden çok görüşmecinin farklı zaman dilimlerinde koordinasyonu, ücretsiz araçların zorlandığı yerdir. 
      Pratik kurulum:
    </p>
    <ul>
      <li>
        <strong>Paylaşılan boru hattı:</strong> birden çok işe alımcının aynı panoyu görmesi gerekiyorsa, 
        localStorage takipçimiz yeterli olmaz. Ekip erişimli Trello veya paylaşılan bir Google E-Tablo kullanın 
        — her ikisi de küçük ekipler için ücretsizdir.
      </li>
      <li>
        <strong>Rol başına Slack kanalı:</strong> #hiring-eng-2026 vb. İş tanımını, boru hattı bağlantısını 
        ve güncel kısa listeyi sabitleyin. "Durum güncellemesi?" e-postalarını azaltır.
      </li>
      <li>
        <strong>Eşzamansız mülakat geri bildirimi:</strong> her görüşmecinin notları için bölümler içeren 
        aday başına paylaşılan Google Dokümanı. Greenhouse'un puan kartı özelliğini ücretsiz olarak değiştirir.
      </li>
      <li>
        <strong>Saat dilimi farkında Calendly:</strong> ücretsiz Calendly aday saat dilimlerini halleder; 
        siz kendi yerel saatinizde müsaitliğinizi ayarlarsınız.
      </li>
    </ul>

    <h2 id="outreach">Adım 5: aday bulma + takip otomasyonu</h2>
    <p>
      Sıkıcı kısımları otomatikleştiren ücretsiz araçlar:
    </p>
    <ul>
      <li>
        <strong>Gmail şablonları:</strong> "başvurunuz için teşekkürler", "takvim bağlantısı" 
        ve ret e-postaları için. Ayarlar → Genel → Şablonlar.
      </li>
      <li>
        <strong>Boomerang ücretsiz / Mixmax ücretsiz:</strong> takipler için zamanlanmış gönderme.
      </li>
      <li>
        <strong>Aşama e-postaları için Apps Script:</strong> 20 satır Google Apps Script, 
        adayın e-tablodaki satırı aşama değiştirdiğinde aday durum e-postası gönderebilir. 
        Google Workspace'te ücretsiz.
      </li>
      <li>
        <strong>Calendly otomatik onay:</strong> yerleşik, ücretsiz. Google Takviminiz aracılığıyla 
        1 saat önce hatırlatıcı ekleyin (manuel ayar, ücretsiz).
      </li>
    </ul>
    <p>
      Adayları boru hattında ilerleten takip kalıpları:
    </p>
    <ul>
      <li>Başvuruyu 48 saat içinde onaylayın.</li>
      <li>Ön görüşmeyi 5 gün içinde planlayın.</li>
      <li>Yerinde görüşmeden sonraki 5 gün içinde karar verin.</li>
      <li>Son aşamadan itibaren 7 gün içinde reddedin.</li>
    </ul>
    <p>
      Adayların çoğu, bu zaman çizelgelerinden birinin ihlal edilmesi nedeniyle kaybolur. 
      Ücretsiz araçlar bunları zorunlu kılamaz — disiplin sağlar. İyi haber: disiplin ücretsizdir.
    </p>
  </>
);

export const cta = {
  label: "Ücretsiz boru hattınıza şimdi başlayın",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "Ücretsiz bir işe alım boru hattı kurmak ne kadar sürer?",
    a: "İlk kurulum için 30-45 dakika (boru hattı aracı + başvuru formu + Calendly + gelen kutusu etiketi). Ardından haftada ~10 dk bakım.",
  },
  {
    q: "Eleme soruları gerçekten aday hacmini azaltır mı?",
    a: "Evet — 1-3 kısa soru eklediğinizde genellikle %30-50 daha az başvuru olur ve kalan başvurular daha kalitelidir. Eleme görüşmelerinde kazanılan zaman, huninin tepesindeki hafif düşük hacimden fazlasını telafi eder.",
  },
  {
    q: "Ücretsiz bir boru hattı uzaktan / dağıtık ekipleri yönetebilir mi?",
    a: "Küçük ekipler (2-3 işe alımcı) için evet — Trello ücretsiz + Slack kanalı + paylaşılan Google Dokümanı koordinasyon ihtiyaçlarını karşılar. Bunun üzerinde gerçek zamanlı işbirliği özelliklerine ihtiyacınız olur, bu da ücretli ATS'lerin değerli olmaya başladığı noktadır.",
  },
  {
    q: "Ücretsiz bir boru hattı kurarken en yaygın hata nedir?",
    a: "Çok fazla aşama eklemek. 6 standart aşama (Kaynak, Telefon, Mülakat, Teklif, İşe Alındı, Reddedildi) yeterlidir; her ek alt aşama bakım yükü getirir ve küçük ölçekte nadiren daha iyi içgörü sağlar.",
  },
];