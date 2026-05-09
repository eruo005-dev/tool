import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Doğru kodsuz araç, Twitter'daki en gösterişli demoya sahip olan değil &mdash; aslında inşa ettiğin şeyle eşleşen araçtır.</p>);

export const body: ReactElement = (
  <>
    <p>Kodsuz geliştirme gerçekten iyi bir noktaya geldi. Artık arka uç kodu yazmadan bir pazarlama sitesi, bir CRUD uygulaması, bir iç panel veya küçük bir pazar yeri yayına alabilirsin &mdash; ancak yalnızca sorununun şekline uygun aracı seçersen. Başarısız olan çoğu kodsuz proje, kategorinin başarısızlığı değildir; bunlar uyumsuzluklardır (Webflow'da bir veritabanı uygulaması veya Bubble'da bir pazarlama sitesi inşa etmek). Ne inşa ettiğinle başla, ardından iki araca daralt ve onları bir test sürüşüne çıkar.</p>

    <h2>Adım 1: Gerçekte ne inşa ettiğini tanımla</h2>
    <p>Araçları karşılaştırmadan önce, ürünü tanımlayan bir cümle yaz. Blog ve formları olan bir pazarlama sitesi mi? Kullanıcı girişleri ve izinleri olan veritabanı destekli bir web uygulaması mı? İki tarafı birbirine bağlayan bir pazar yeri mi? Ekibinin verileri yönetmek için kullandığı bir iç araç mı? Bir iş akışı otomasyonu mu? Bu kategoriler farklı platformlara temiz bir şekilde eşlenir ve bu soruyu cevaplamadan önce bir araç seçmek, insanların üç ayını boşa harcamasına neden olur.</p>

    <h2>Kategoriye göre en iyi araçlar</h2>
    <ul>
      <li>Pazarlama siteleri ve açılış sayfaları &mdash; Webflow (görsel güç, olgun CMS) veya Framer (daha hızlı, daha iyi varsayılanlar, daha sıkı animasyonlar).</li>
      <li>Tam web uygulamaları &mdash; Bubble (en esnek, gerçek öğrenme eğrisi) veya mobil öncelikli için FlutterFlow.</li>
      <li>Airtable/Elektronik Tablo destekli uygulamalar &mdash; Softr ve Glide bir elektronik tabloyu bir günde gerçek bir uygulamaya dönüştürür.</li>
      <li>İç araçlar ve panolar &mdash; Retool, Appsmith veya Tooljet mevcut veritabanına bağlanır ve operatör arayüzlerini hızlıca oluşturur.</li>
      <li>Veritabanları ve dokümanlar &mdash; Yapılandırılmış veriler için Airtable, hafif dokümanlar için Notion, her ikisini de istiyorsan Coda.</li>
      <li>İş akışı otomasyonu &mdash; Zapier, Make veya n8n (kendi kendine barındırılabilir).</li>
    </ul>

    <h2>Dikkat edilmesi gereken fiyatlandırma tuzakları</h2>
    <p>Kodsuz fiyatlandırma açılış sayfasında ucuz görünür ve üretimde pahalı hale gelir. Giriş yapan her ekip üyesiyle çoğalan kullanıcı başına ücretlere, müşteriler arasında çoğalan çalışma alanı başına ücretlere, trafik aldığın gün yükseltmeye zorlayan kayıt veya satır sınırlamalarına ve tek bir kullanıcı eyleminin on faturalandırılmış işlemi tetiklediği otomasyon araçlarındaki "görev" veya "işlem" ölçümüne dikkat et. Taahhüt vermeden önce ilk yıl maliyetini mevcut kullanımının 10 katı olarak modelle.</p>

    <h2>Satıcı bağımlılığı ve dışa aktarılabilirlik</h2>
    <p>Verilerin her zaman kullanılabilir bir formatta dışa aktarılabilir olmalı &mdash; en azından CSV, ideal olarak tam bir şema dökümü. Kullanıcı arayüzün ve mantığın genellikle kodsuz platformlar arasında taşınabilir değildir; bir Bubble uygulaması Webflow'a taşınamaz ve bunun tersi de geçerlidir. Platformun ürün olduğunu kabul et ve buna göre plan yap: verilerinin bir yedeğini tut, mantığını aracın dışında belgele ve geçmişi olan ve gerçekçi satın alma/kapanma riski olan satıcıları seç.</p>

    <h2>Kodsuzun yetersiz kaldığı yerler</h2>
    <p>Kodsuz, %80'lik durum için mükemmeldir ve kalan %20'lik kısım için zahmetlidir. Gerçek zamanlı işbirliği (Figma seviyesinde senkronizasyon), ağır hesaplama, kiracılar arasında karmaşık izinler, düzenlenmiş veriler (HIPAA, katı SOC 2), yüksek hacimli API'ler ve derin kurumsal entegrasyonlar, duvarlara çarpacağın yerlerdir. Olağan kaçış, kodsuz bir ön uç arkasında özel bir arka uç veya ürün-pazar uyumu netleştiğinde koda yeniden yazmaktır. Kaçış planını ihtiyacın olmadan önce yap.</p>

    <h2>Hızlı değerlendirme nasıl yapılır</h2>
    <p>En riskli %20'lik kullanım durumunu ilk iki adayda bir hafta sonu boyunca inşa et. Giriş ekranını değil &mdash; zor kısmı. Araç bu yük altında kırılırsa, daha sonra kırılacaktır. Topluluk forumunu oku ve gerçek soruların ne kadar hızlı yanıtlandığını kontrol et. Değişiklik günlüğüne bak: aktif olarak bakımı yapılan bir platform her birkaç haftada bir güncelleme gönderir, ölmekte olan bir platform aylarca sessiz kalır.</p>

    <h2>Yaygın hatalar</h2>
    <p>Yalnızca pazarlama demolarına dayanarak seçim yapmak (demolar zor durumları gizler), yol haritasını görmezden gelmek (bugün eksik olan bir özellik bir yıl sonra hala eksik olabilir), yedekleme ve dışa aktarma planını atlamak, Bubble veya Webflow için öğrenme eğrisini hafife almak ("öğrenme yok" değildir) ve 10 kat daha fazla dokümantasyona sahip sıkıcı araç yerine trend olan aracı seçmek.</p>

    <h2>Özet</h2>
    <p>Önce ürünü tanımla, doğru kategoriyi seç, zor kısmı bir hafta sonunda prototiple ve bir çıkış planın olsun. Kodsuz ciddi bir seçimdir, bir kısayol değil &mdash; ona öyle davran.</p>
  </>
);