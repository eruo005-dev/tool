/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Mekanik sıradandır: 3+ kişinin müsait olduğu bir zaman bulmak, davetiye göndermek,
      yeniden planlamayı yönetmek, hatırlatıcıyı göndermek. Ücretli planlama araçları (GoodTime,
      Calendly Pro, yön değiştirmeden önce x.ai) ekip mülakatlarını ucuz hale getirir; ücretsiz
      araçların ise geçici çözümleri bilmiyorsanız haftada 2-3 aday saati kaybettiren boşlukları vardır.
    </p>
    <p>
      Bu rehber, işe alım iş akışları için gerçekten çalışan ücretsiz araçları kapsar —
      özellikle ekip mülakatı durumu (birden çok mülakatçı, birden çok tur,
      tampon süre). Bireysel ön görüşme planlaması kolaydır; ekip koordinasyonu, ücretsiz
      katmanların can sıkıcı hale geldiği yerdir.
    </p>
  </>
);

export const toc = [
  { id: "calendly", label: "İşe alım için ücretsiz Calendly" },
  { id: "team", label: "Ücretsiz araçlarla ekip / panel mülakatları" },
  { id: "google", label: "Google Takvim randevu aralıkları" },
  { id: "alternatives", label: "Cal.com kendi sunucunda barındırma + Doodle" },
  { id: "templates", label: "Yeniden planlamaları azaltan e-posta şablonları" },
];

export const body = (
  <>
    <h2 id="calendly">İşe alım için ücretsiz Calendly</h2>
    <p>
      Calendly ücretsiz, bireysel işe alım uzmanının ön görüşme aramalarını temiz bir şekilde kapsar.
      Ücretsiz katmanda olmasını isteyeceğiniz özellikler:
    </p>
    <ul>
      <li>
        <strong>Sadece 1 etkinlik türü.</strong> "30 dk telefon ön görüşmesi" ile
        "60 dk teknik" ayrımını ödeme yapmadan yapamazsınız. Geçici çözüm: türü
        etkinlik adına ekleyin ve döndürün (mod değiştirirken yeniden adlandırın).
      </li>
      <li>
        <strong>Sıralı atama yok.</strong> Birden çok işe alım uzmanı olan ekipler tek bir
        planlama bağlantısını paylaşamaz. Geçici çözüm: her işe alım uzmanı kendi bağlantısını yayınlar ve
        koordinatör yanıtlarken birini seçer.
      </li>
      <li>
        <strong>Tampon süre yok.</strong> Ardışık mülakatlar sizi yıpratır. Geçici çözüm:
        müsaitlik aralıklarınızı manuel olarak bölün (9–9:50, 10–10:50, vb.).
      </li>
      <li>
        <strong>Çok aşamalı bağlantı yok.</strong> Telefon → yüz yüze görüşmeyi tek bir
        akışta planlayamazsınız. Geçici çözüm: aşama başına ayrı bağlantılar gönderin; rezervasyonları{" "}
        <a href="/tools/recruiting-pipeline-tracker">işe alım hattı takipçinizde</a> etiketleyin.
      </li>
    </ul>
    <p>
      Karar: düşük hacimde bireysel işe alım uzmanları için kullanılabilir. Haftada ~5 adayın üzerinde
      geçici çözümler yorucu hale gelir.
    </p>

    <h2 id="team">Ücretsiz araçlarla ekip / panel mülakatları</h2>
    <p>
      3 mülakatçı + 1 adayı 4 takvim üzerinde koordine etmek en zor
      ücretsiz araç durumudur. Gerçekçi seçenekler:
    </p>
    <ul>
      <li>
        <strong>Google Takvim "Bir zaman bul":</strong> tüm mülakatçıları
        zorunlu katılımcı olarak ekleyin, hepsinin müsaitlik durumunu görün, boş bir blok seçin.
        Herkes Google Workspace'teyse ücretsiz.
      </li>
      <li>
        <strong>Microsoft Outlook Planlama Asistanı:</strong> Microsoft 365
        kuruluşları için aynı konsept.
      </li>
      <li>
        <strong>Doodle Ücretsiz:</strong> anket tabanlı — 5 zaman seçeneği gönderin, alıcılar oy verir.
        Yavaş (günler süren gidiş geliş) ancak kuruluşlar ve ücretsiz e-posta
        hesapları arasında çalışır.
      </li>
      <li>
        <strong>Cal.com kendi sunucunda barındırma:</strong> açık kaynaklı Calendly alternatifi; kendi
        sunucunuzda barındırırsanız, sıralı atama, tampon süre ve birden çok etkinlik türünü
        ücretsiz alırsınız. Kurulum için bir geliştirici gerektirir.
      </li>
    </ul>
    <p>
      Hiçbir maliyeti olmayan ekip mülakatı taktiği: adaya yönelik e-postada <strong>üç adlandırılmış zaman
      bloğu</strong>. "Gelecek hafta bu 30 dk'lık aralıklardan herhangi biri sizin için uygun mu? Salı 10:00, Çarşamba 14:00, Perşembe 11:00 ET." Anket aracının
      gidiş gelişini tamamen atlayın. Çoğu aday ilk yanıtta birini seçer.
    </p>

    <h2 id="google">Google Takvim randevu aralıkları</h2>
    <p>
      Daha az bilinen: Google Takvim'de 2023'ten beri ücretsiz Google Workspace kişisel
      hesaplarında yerleşik "randevu zamanlamaları" (eski adıyla "randevu aralıkları") bulunur. Calendly gibi herkese açık bir rezervasyon sayfası yayınlamanıza olanak tanır. Sınırlamalar:
    </p>
    <ul>
      <li>Kişisel Google ücretsiz katmanında aynı anda bir randevu zamanlaması.</li>
      <li>Sıralı atamayı yerel olarak desteklemez.</li>
      <li>Calendly'nin kullanıcı deneyiminden daha az cilalı ancak işlevsel.</li>
    </ul>
    <p>
      Zaten Gmail'i olan bireysel bir işe alım uzmanı için bu yeterli olabilir — ayrı bir
      hesaba gerek yoktur.
    </p>

    <h2 id="alternatives">Cal.com kendi sunucunuzda barındırma + Doodle (ücretsiz Calendly alternatifleri)</h2>
    <p>
      <strong>Cal.com</strong>, açık kaynaklı ve kendi sunucunuzda barındırılabilen Calendly rakibidir.
      Bulut ücretsiz katmanı 1 etkinlik türüyle sınırlıdır (Calendly ücretsiz ile aynı), ancak
      kendi sunucunuzda barındırılan sürüm, çalıştırabiliyorsanız tüm özellikleri ücretsiz verir. Gerektirir:
    </p>
    <ul>
      <li>Bir sunucu (Vercel ücretsiz, Railway ücretsiz deneme veya kendi VPS'iniz).</li>
      <li>Bir veritabanı (Postgres — Supabase ücretsiz katmanı çalışır).</li>
      <li>E-posta gönderme (Resend ücretsiz katmanı veya işlemsel Gmail).</li>
    </ul>
    <p>
      Kurulum bir geliştirici için 2-3 saat sürer; sıfır devam eden maliyet; sıralı atama + tampon +
      çoklu etkinlik türleri sağlar. Teknik yardımınız varsa değer; bakımı siz yapacaksanız
      değmez.
    </p>
    <p>
      <strong>Doodle</strong> anket tabanlıdır ve işe alım için şaşırtıcı derecede az kullanılır.
      Ücretsiz katman, Calendly ücretsizin yapamadığı çok kişili planlama durumunu halleder.
      Dezavantajı: herkesin önce oy vermesi gerektiğinden doğrudan rezervasyondan daha yavaştır.
    </p>

    <h2 id="templates">Yeniden planlamaları azaltan e-posta şablonları</h2>
    <p>
      En ucuz planlama iyileştirmesi bir araç değil — "üzgünüm, kaydırabilir miyiz?" mesajlarını
      azaltan bir e-posta şablonudur. İşe yarayan şablonlar:
    </p>
    <ul>
      <li>
        <strong>24 saat kala onay:</strong> "Kısa hatırlatma: yarın [saat]'te buluşuyoruz.
        İşte [video bağlantısı]. Bir şey çıkarsa, hemen yanıtlayın ve başka bir zaman bulalım."
      </li>
      <li>
        <strong>Yeniden planlama teklifi dahil:</strong> her onaya 2-3 alternatif zaman ekleyin.
        Adayın biriyle yanıt vermesi için zihinsel maliyeti düşürür.
      </li>
      <li>
        <strong>Gününde hatırlatma:</strong> 1 saat kala, "1 saat sonra [bağlantı]'da görüşürüz."
        Yayınlanmış işe alım uzmanı verilerine göre katılım olmamaları ~%30 azaltır.
      </li>
    </ul>
    <p>
      Bunları yeniden yazmaktan kaçınmak için Gmail şablonlarını (ücretsiz, ayarlarda) veya metin genişletici
      araçlarını (TextBlaze ücretsiz) kullanın.
    </p>
  </>
);

export const cta = {
  label: "Ücretsiz işe alım hattı aracımızda mülakat turlarını takip edin",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "İşe alım için Calendly ücretsiz kullanabilir miyim?",
    a: "Evet, bireysel işe alım uzmanı ön görüşme aramaları için. 1 etkinlik türü sınırı ve tampon süre eksikliği, haftada 5 adayın üzerinde can sıkar — o zaman ücretli Calendly veya Cal.com kendi sunucunuzda barındırma değerli hale gelir.",
  },
  {
    q: "Ücretli araçlar olmadan 4 kişilik bir panel mülakatını nasıl planlarım?",
    a: "4 takvimin tümünde Google Takvim 'Bir zaman bul' (bir Workspace kuruluşu içinde çalışır) veya adaya yönelik 3 zaman seçeneğini manuel olarak gönderin. Doodle, kuruluşlar arası planlama için çalışır ancak anket adımıyla işleri yavaşlatır.",
  },
  {
    q: "Cal.com gerçekten ücretsiz mi?",
    a: "Bulut sürümü, Calendly ile aynı 1 etkinlik türü ücretsiz sınırına sahiptir. Kendi sunucunuzda barındırılan sürüm her şey için ücretsizdir ancak kendi sunucunuzda çalıştırmanızı gerektirir — bir geliştiriciniz varsa yaklaşık 2-3 saatlik kurulum.",
  },
  {
    q: "Mülakat katılım olmamalarını en çok ne azaltır?",
    a: "1 saat kala hatırlatma e-postası — yayınlanmış çoğu işe alım uzmanı verisi %25-35 katılım olmama azalması gösterir. Calendly ücretsizde yerleşik onay vardır ancak gününde hatırlatma yoktur — bunun yerine bir Gmail şablonu yazın.",
  },
];