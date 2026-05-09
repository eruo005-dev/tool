import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da e-posta için yapay zeka, gelen kutusu içi araçlar (Superhuman AI, Shortwave, Gmail'de Gemini)
    ve gelen kutusu dışı araçlar (ChatGPT, Claude) olarak ikiye ayrılır. Doğru seçim, yapay zekanın
    gelen kutunuzun içinde mi yoksa dışında mı olmasını istediğinize bağlıdır.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>İş akışına göre</h2>
    <ul>
      <li><strong>Gmail kullanıcıları:</strong> Gmail'de Gemini (Gemini Advanced veya Workspace ile ücretsiz).
        Yerel, hızlı, sesinizi öğrenir.</li>
      <li><strong>Güç kullanıcı gelen kutusu:</strong> Superhuman AI (30-40$/ay). Yanıtlar tasarlar, konuları
        özetler, akıllıca erteler.</li>
      <li><strong>Apple Mail / Outlook:</strong> Shortwave (35$/ay) veya Apple Intelligence (M serisi Mac'lerle
        ücretsiz). İkisi de özetleme ve yanıt yardımı ekler.</li>
      <li><strong>Uzun e-postalar / dikkatli yazma:</strong> Yan tarafta Claude Pro. Riskli durumlarda ton
        ayarlamada en iyisi.</li>
      <li><strong>Toplu erişim (satış / soğuk):</strong> Lavender, Smartlead AI veya Instantly.
        Ölçekte kişiselleştirme.</li>
    </ul>

    <h2>Pratikte işe yarayanlar</h2>
    <ul>
      <li><strong>Uzun bir konuyu özetleme:</strong> &ldquo;ÖZET + yapılacaklar&rdquo; komutu herhangi bir
        amiral gemisiyle mükemmel çalışır.</li>
      <li><strong>Bir iş arkadaşının tonunu yakalama:</strong> önceki 3 e-postalarını örnek olarak yapıştırın,
        ardından bir yanıt isteyin. Claude bu konuda tutarlı bir şekilde kazanır.</li>
      <li><strong>Zor e-posta (işten çıkarma, çatışma, zor talep):</strong> Claude veya ChatGPT ile taslak
        oluşturun, sonra bir saat bekleyip yeniden düzenleyin. Yapay zekanın ilk taslağını göndermeyin.</li>
      <li><strong>Bülten triyajı:</strong> Shortwave veya Superhuman bunları tek bir özette birleştirir.</li>
    </ul>

    <h2>İşe yaramayanlar</h2>
    <ul>
      <li>Her e-postaya otomatik yanıt verme. Yapay zeka, sıradan bir satırın aslında önemli olup olmadığını
        güvenilir bir şekilde ayırt edemez.</li>
      <li>Yapay zekanın sizin incelemeniz olmadan göndermesine izin vermek. Utanç verici hataları önlemek ucuzdur.</li>
      <li>Bağlam olmadan &ldquo;e-posta&rdquo; istemek. Yapay zeka e-postaları, örnekler ve kısıtlamalar olmadan
        genel okunur.</li>
    </ul>

    <h2>Fiyatlandırma</h2>
    <ul>
      <li>0$: Ücretsiz Gmail hesabıyla Gmail'de Gemini; ücretsiz ChatGPT; ücretsiz Claude.</li>
      <li>20$: ChatGPT Plus, Claude Pro veya Gemini Advanced.</li>
      <li>30-40$: Gelen kutusu yerel için Superhuman veya Shortwave.</li>
    </ul>
    <p>
      İlgili: <a href="/guides/how-to-write-professional-emails">profesyonel e-postalar nasıl yazılır</a>.
    </p>
  </>
);