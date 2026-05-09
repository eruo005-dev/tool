/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Analitik yazılımı satın almadan işe alım metriklerini nasıl takip ederim?&rdquo; sorusu
      çoğunlukla bir kelime dağarcığı sorunudur. İşe alım kararlarını gerçekten yönlendiren 4 metrik,
      tek bir Google Sheet'e sığar, haftada 10 dakikada güncellenebilir ve ücretli ATS'lerdeki
      panolardan daha fazlasını söyler.
    </p>
    <p>
      Bu rehber, küçük bir ekip için hangi sayıların önemli olduğunu gösteren e-tablo şablonu +
      formüller + sayılardan oluşur. Ayrıca, tümü ücretsiz Google Sheets'te, bir CRM olarak da işlev
      gören bir aday veritabanı yapısı içerir.
    </p>
  </>
);

export const toc = [
  { id: "metrics", label: "Önemli olan 4 metrik" },
  { id: "template", label: "E-tablo şablonu" },
  { id: "candidate-db", label: "Aday veritabanı (CRM hafif)" },
  { id: "automation", label: "Ucuz otomasyon" },
  { id: "review", label: "Haftalık gözden geçirme kontrol listesi" },
];

export const body = (
  <>
    <h2 id="metrics">Önemli olan 4 metrik</h2>
    <p>
      İşe alım analitik araçları 30'dan fazla metrik sunar. 5-20 pozisyonlu bir ekip için yalnızca
      dört tanesi kararları yönlendirir:
    </p>
    <ol>
      <li>
        <strong>Kaynak kalitesi (kaynağa göre başvuranlar → işe alınanlar):</strong> hangi
        platformlara veya yönlendirme kanallarına ağırlık vermeniz gerektiğini söyler. Çoğu şirket,
        yıllarca hiç işe alım yapmayan platformlarda saatler harcar.
      </li>
      <li>
        <strong>Aşama dönüşüm oranları:</strong> telefon-görüşme %, görüşme-teklif %,
        teklif-kabul %. Herhangi birindeki düşüş, sürecinizin nerede bozulduğunu gösterir.
      </li>
      <li>
        <strong>Aşamada geçen gün:</strong> &ldquo;adaylar neden kayboluyor?&rdquo; sorusunun
        teşhisidir. Genellikle birinin onları pipeline'da 9 gün bekletmesinden kaynaklanır.
      </li>
      <li>
        <strong>İşe alım süresi (kaynak bulma → teklif kabulü):</strong> önemli olan tek üst düzey
        metriktir. SHRM 2024 medyanı: 44 gün. 60'ın üzerindeyseniz, bir şey bozuk demektir.
      </li>
    </ol>
    <p>
      Hepsi bu kadar. İşe alım başına maliyet, başvuru hacmi, aday memnuniyet puanları — 50+
      kişilik bir ekip değilseniz gürültüden ibarettir.
    </p>

    <h2 id="template">E-tablo şablonu</h2>
    <p>
      30 dakikada Google Sheets'te kendiniz oluşturun. İki sekme:
    </p>

    <h3>Sekme 1: Adaylar</h3>
    <p>Sütunlar:</p>
    <ul>
      <li><code>İsim</code></li>
      <li><code>Rol</code></li>
      <li><code>Kaynak</code> (LinkedIn, yönlendirme, Indeed vb.)</li>
      <li><code>Kaynak bulma tarihi</code></li>
      <li><code>Mevcut aşama</code> (Kaynak bulundu / Telefon / Görüşme / Teklif / İşe alındı / Reddedildi)</li>
      <li><code>Aşamaya giriş tarihi</code></li>
      <li><code>Aşamada geçen gün</code> (formül: <code>=BUGÜN() - F2</code>)</li>
      <li><code>Sonuç</code> (İşe alındı / Reddedildi / Çekildi / Aktif)</li>
      <li><code>Notlar</code></li>
    </ul>
    <p>
      {" "}
      <a href="/tools/recruiting-pipeline-tracker">İşe alım pipeline takip aracımızdan</a>{" "}
      dışa aktarma tam olarak bununla eşleşir — CSV'yi yapıştırın ve kullanmaya başlayın.
    </p>

    <h3>Sekme 2: Metrik panosu</h3>
    <p>Formüller (Adaylar sekmesinin adının &ldquo;Adaylar&rdquo; olduğu varsayılarak):</p>
    <pre><code>{`Kaynak kalitesi (kaynak başına):
  =EĞERSAY(Adaylar!C:C, "LinkedIn", Adaylar!H:H, "İşe alındı") /
   EĞERSAY(Adaylar!C:C, "LinkedIn")

Telefon-görüşme dönüşümü:
  =EĞERSAY(Adaylar!E:E, "Görüşme") /
   (EĞERSAY(Adaylar!E:E, "Görüşme") + EĞERSAY(Adaylar!E:E, "Telefon"))

Aşamaya göre ortalama aşamada geçen gün:
  =ORTALAMAEĞER(Adaylar!G:G, Adaylar!E:E, "Telefon")

İşe alım süresi (ortalama):
  "İşe alınma tarihi" sütunu ekleyin, ardından =ORTALAMA(İşe_alınma_tarihi - Kaynak_bulma_tarihi)`}</code></pre>
    <p>
      Haftada bir güncelleyin. Hangi kaynakların işe yaradığı ve huninin nerede sızdırdığı
      konusunda sizi dürüst tutar.
    </p>

    <h2 id="candidate-db">Aday veritabanı — ücretsiz CRM hafif</h2>
    <p>
      Bir aday veritabanı oluşturmak, adaylar sekmesine daha fazla sütun eklemek ve filtreleri
      kullanmaktan ibarettir. Önerilen eklemeler:
    </p>
    <ul>
      <li><code>Beceri etiketleri</code> (virgülle ayrılmış; <code>regex</code> ile filtreleyin)</li>
      <li><code>Deneyim yılı</code></li>
      <li><code>Maaş beklentisi</code></li>
      <li><code>Müsaitlik tarihi</code></li>
      <li><code>Son iletişim tarihi</code></li>
      <li><code>Ulaşma sıklığı</code> (her 60 günde bir, 90 günde bir vb.)</li>
    </ul>
    <p>
      100–500 aday için bu yeterlidir. Bunun üzerinde arama performansı düşer ve
      gerçek bir veritabanına (Notion, Airtable veya sonunda bir CRM) ihtiyacınız olur. Çoğu
      küçük ekip bu noktaya asla ulaşmaz.
    </p>

    <h2 id="automation">Ucuz otomasyon</h2>
    <p>
      Haftada 30 dakika kazandıran ücretsiz şeyler:
    </p>
    <ul>
      <li>
        <strong>Google Forms → Sheets:</strong> başvuru formu, Adaylar sekmesini otomatik olarak
        doldurur.
      </li>
      <li>
        <strong>Koşullu biçimlendirme:</strong> aşamada geçen gün &gt; 7 olan satırları vurgulayın,
        böylece eski adaylar görsel olarak öne çıkar.
      </li>
      <li>
        <strong>Takip için Apps Script:</strong> aşama değiştiğinde aday durumu e-postası gönderen
        20 satırlık bir kod. Google Workspace kişisel sürümünde ücretsiz çalışır.
      </li>
      <li>
        <strong>Yeni başvurular için Slack webhook'u:</strong> Forms → Apps Script →
        webhook → #is-alimi kanalına gönderi.
      </li>
    </ul>

    <h2 id="review">Haftalık gözden geçirme kontrol listesi (10 dakika)</h2>
    <p>Her Pazartesi sabahı uygulayın:</p>
    <ol>
      <li>&ldquo;Aşamada geçen gün&rdquo;e göre azalan sıralayın. &gt;7 gün olan her şey bir işlem gerektirir.</li>
      <li>Bu hafta ve geçen hafta telefon-görüşme dönüşümü. Büyük düşüş → tarama görüşmeleri iyi filtrelemiyor.</li>
      <li>Yeni adayların kaynak dağılımı. İki kaynak sıcak mı? Onlara yüklenin. Hiçbiri yok mu? İş ilanlarını yenileyin.</li>
      <li>Son 5 kapatılan pozisyon için ortalama işe alım süresi. 50 günün üzerinde → sürtüşmenin nerede olduğunu inceleyin.</li>
    </ol>
  </>
);

export const cta = {
  label: "Pipeline takip aracı — doğrudan e-tablonuza dışa aktarır",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "Takip edilmesi en basit işe alım metriği nedir?",
    a: "İşe alım süresi — bir adayın kaynak bulunması ile teklifi kabul etmesi arasındaki gün sayısı. Tek bir sayı, roller arasında karşılaştırılabilir, e-tabloda hesaplaması kolay. Bağlam için SHRM'in 2024 medyanı 44 gündür.",
  },
  {
    q: "Bir Google Sheet gerçekten işe alım analitik yazılımının yerini alabilir mi?",
    a: "5-20 pozisyonlu bir ekip için evet. Kararları yönlendiren 4 metrik (kaynak kalitesi, aşama dönüşümü, aşamada geçen gün, işe alım süresi) tek bir sayfaya sığar. ~50 pozisyonun üzerinde manuel güncelleme yükü can sıkmaya başlar.",
  },
  {
    q: "İşe alım başına maliyeti takip etmeli miyim?",
    a: "Yalnızca işe alıma gerçek para harcıyorsanız (ücretli iş ilanı siteleri, ajans ücretleri, kaynak bulma araçları). Ücretsiz araçlar kullanan küçük bir ekip için asıl maliyet zaman maliyetidir — bunun yerine işe alım başına saat ölçün.",
  },
  {
    q: "İdeal telefon-görüşme dönüşüm oranı nedir?",
    a: "Sektör genelinde kabaca %25-40'tır. %20'nin altı, tarama kriterlerinizin çok gevşek olduğu (herkes telefonu geçiyor) veya iş tanımınızın yanlış adayları çektiği anlamına gelebilir. %50'nin üzeri, görüşme öncesi çok sıkı tarama yapıyor olabileceğiniz anlamına gelir.",
  },
];