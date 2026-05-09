import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Çoğu işletme, büyük başlık rakamı olduğu için gelir büyümesine odaklanır. Ancak marjda 5 puanlık bir iyileşme, genellikle %20'lik bir gelir artışından daha iyi performans gösterir: daha hızlı, çalışan sayısını artırmadan ve bankaya gerçek nakit girişi sağlayarak. Bu rehber, üç marj rakamını (brüt, faaliyet, net), bunları gerçekten hareket ettiren kaldıraçları ve bir marjın sağlıklı mı yoksa yapısal bir sorun mu olduğunu söyleyen sektör kıyaslamalarını adım adım ele alır.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Üç marj ve her birinin size söyledikleri</h2>
    <p>
      <strong>Brüt marj</strong> = (Gelir − SMM) / Gelir. Ürün veya hizmeti teslim etmenin verimliliği. %80 brüt marja sahip bir SaaS, her 1$'lık gelir için 0,20$ teslimat maliyetine sahiptir. %40 brüt marja sahip fiziksel bir ürünün maliyeti 0,60$'dır.
    </p>
    <p>
      <strong>Faaliyet marjı</strong> = (Gelir − SMM − Faaliyet Giderleri) / Gelir. Satış, pazarlama, Ar-Ge, idari giderler dahil tüm faaliyet maliyetlerini içerir. Vergiler ve tek seferlik kalemler hariç, asıl işletmenin kârlılığı.
    </p>
    <p>
      <strong>Net marj</strong> = Net gelir / Gelir. Her şeyden sonra — vergiler, faiz, tekrarlanmayan kalemler. Banka hesabına geçen rakam.
    </p>
    <p>
      Her biri farklı bir sorunu ortaya çıkarır. Zayıf brüt marj = ürün maliyet yapısı sorunu. Brüt marj sağlıklı ancak faaliyet marjı zayıf = SG&A'ya aşırı harcama yapıyorsunuz. Her ikisi de sağlıklı ancak net marj zayıf = vergi veya borç sorunu.
    </p>

    <h2>Sektör kıyaslamaları — "sağlıklı" olan neye benzer</h2>
    <p>
      Brüt marj sektöre göre büyük ölçüde değişir:
    </p>
    <p>
      <strong>SaaS:</strong> %70–85 brüt; %10–25 faaliyet (ölçekte); %10–20 net.
    </p>
    <p>
      <strong>E-ticaret / DTC:</strong> %40–60 brüt; %5–15 faaliyet; %5–10 net.
    </p>
    <p>
      <strong>Hizmet / danışmanlık:</strong> %50–70 brüt; %10–20 faaliyet; %8–15 net.
    </p>
    <p>
      <strong>Fiziksel perakende:</strong> %25–50 brüt; %3–8 faaliyet; %2–5 net.
    </p>
    <p>
      <strong>Restoranlar:</strong> Yiyecekte %30–40 brüt; en iyi ihtimalle %5–15 faaliyet.
    </p>
    <p>
      <strong>İmalat:</strong> %25–45 brüt; %8–15 faaliyet.
    </p>
    <p>
      Sektör aralığınızın alt sınırının altındaysanız, işletmenizin yapısal bir sorunu var demektir. Üst sınırın üzerindeyseniz, ya gerçek bir kaldıraç buluyorsunuzdur ya da — dikkatli olun — büyümeye yeterince yatırım yapmıyorsunuzdur.
    </p>

    <h2>Kaldıraç 1: Fiyatları artırın (en yüksek kaldıraç)</h2>
    <p>
      %40 brüt marjda %5'lik bir fiyat artışı neredeyse tamamen alt satıra yansır — çoğu işletmedeki en yüksek kaldıraçlı hamledir. Fiyatlandırma rehberimizde tam olarak ele alınmıştır, ancak marj matematiği:
    </p>
    <p>
      100$'lık satış, %40 brüt marj = 40$ katkı. Fiyatı 105$'a (%5 artış) çıkarın, katkı 45$ olur (değişmeyen hacimde brüt kârda %12,5 artış). Fiyat artışı nedeniyle müşterilerin %5'ini kaybederseniz, müşteri başına katkı müşterilerin %95'inde %12,5 daha yüksektir = brüt kârda %6,9 net artış.
    </p>
    <p>
      Çoğu işletme, müşteri fiyat toleransını 2-4 kat eksik tahmin eder. Fiyattan elde edilen marj kazançları neredeyse her zaman mevcuttur; sadece peşinden gitmek rahatsız edicidir.
    </p>

    <h2>Kaldıraç 2: Birim maliyeti düşürün (SMM)</h2>
    <p>
      Seçenekler işletme türüne bağlıdır:
    </p>
    <p>
      <strong>Fiziksel ürünler.</strong> Tedarikçilerle hacim eşiklerinde pazarlık yapın, daha az satıcıda birleşin, alternatif malzeme veya bileşenlere geçin, paketleme ağırlığını azaltın (nakliye maliyeti), toplu fiyatlandırma için sipariş miktarlarını artırın, gereksiz SKU varyantlarını ortadan kaldırın.
    </p>
    <p>
      <strong>SaaS.</strong> Pahalı özellikleri yeniden mimarilendirin, altyapı sözleşmelerini müzakere edin (AWS/GCP taahhüt indirimleri liste fiyatından %40–60), hacim haklı çıkardığında 3. taraf API'leri şirket içi alternatiflerle değiştirin, bilişim kaynaklarını doğru boyutlandırın.
    </p>
    <p>
      <strong>Hizmetler.</strong> Tekrarlayan işleri ürünleştirin, sadece kıdemli personelle teslimat yerine kıdemliler tarafından yönlendirilen kıdemsiz personel kullanın, şablonları ve süreçleri standartlaştırın, prim fiyatı kazandırmayan özel kapsamı ortadan kaldırın.
    </p>

    <h2>Kaldıraç 3: Ürün karmasını iyileştirin</h2>
    <p>
      A ürünü %30 marja, B ürünü %55 marja sahipse, çabayı B'ye kaydırın. Hiçbir ürünün fiyatını veya maliyetini değiştirmeden, harmanlanmış marjı iyileştirirsiniz.
    </p>
    <p>
      Taktikler:
    </p>
    <p>
      <strong>Yüksek marjlı ürünleri</strong> kataloğunuzda, web sitenizde ve satış konuşmalarınızda öne çıkarın.
    </p>
    <p>
      <strong>En düşük marjlı ürünleri</strong> stratejik değillerse geri plana alın veya durdurun. Bunları taşımanın gerçek bir maliyeti vardır (SKU yönetimi, destek, envanter).
    </p>
    <p>
      <strong>Düşük marjlı ürünleri</strong> yüksek marjlı eklentilerle paketleyin — yazıcı + tekrar dolum mürekkep, araba + garanti, yemek + içecek.
    </p>
    <p>
      <strong>Kademeli üst satışlar</strong> — müşterileri, farklı olarak daha yüksek marja sahip üst kademelere yönlendirin.
    </p>

    <h2>Kaldıraç 4: Faaliyet giderlerini azaltın (SG&A)</h2>
    <p>
      Brüt marj birim ekonomisini belirler; faaliyet marjı genel gider verimliliğini yansıtır. Ana maliyet kategorileri:
    </p>
    <p>
      <strong>Pazarlama.</strong> En düşük çeyrekteki kanalları kesin, en iyi performans gösterenlere yeniden tahsis edin. CAC'yi kanala göre ölçün; CAC/LTV &gt; 0,3 olan kanalları kapatın.
    </p>
    <p>
      <strong>Satış.</strong> Satış temsilcileri arasında verimlilik 3-5 kat farklılık gösterir. Her yıl en düşük %20'yi işten çıkarın; yükseltin.
    </p>
    <p>
      <strong>Yazılım yığını.</strong> Yıllık olarak denetleyin. Tipik bir şirkette %20–40 oranında SaaS israfı vardır (kullanılmayan koltuklar, örtüşen araçlar, üst kademeye ihtiyaç duymadığınız özellikler).
    </p>
    <p>
      <strong>Gayrimenkul.</strong> Uzaktan/hibrit çalışma bunu tersine çevirdi — ofisleri küçültün, kullanılmayan alanı alt kiraya verin.
    </p>
    <p>
      <strong>Profesyonel hizmetler.</strong> Hukuk, muhasebe, danışmanlık harcamalarını gözden geçirin. Sabit retainer ücretleri, karşılık gelen bir değer olmadan yukarı doğru sürüklenir.
    </p>

    <h2>Kaldıraç 5: Müşteri yaşam boyu değerini (LTV) artırın</h2>
    <p>
      Müşteri başına marj daha derin bir rakamdır. Her ikisi de 1.000$ ödeyen iki müşteriden biri 3. ayda ayrılırken diğeri 3 yıl kalırsa, aynı fiyatlandırmada bile katkı marjları çok farklıdır.
    </p>
    <p>
      <strong>Müşteri kaybını azaltın</strong> — yeni müşteri edinmekten daha kolaydır. Yıllık müşteri kaybında 5 puanlık bir azalma genellikle LTV'yi %20–40 artırır.
    </p>
    <p>
      <strong>Mevcut müşterilere üst satış yapın</strong> — çok düşük CAC ile genişleme geliri. Kurumsal SaaS, bu şekilde rutin olarak &gt;%100 net gelir tutma oranı üretir.
    </p>
    <p>
      <strong>Çapraz satış yapın</strong> — mevcut müşterilere ek ürün kategorileri. Halihazırda ödediğiniz edinme maliyetinden yararlanır.
    </p>

    <h2>Büyüme gibi görünen marj tuzakları</h2>
    <p>
      <strong>Tuzak 1: Hacim için indirim yapmak.</strong> Toplu indirimler geliri harika gösterebilir ancak marjı yok eder. Bazen gereklidir; genellikle değildir.
    </p>
    <p>
      <strong>Tuzak 2: Kanal genişletme.</strong> Amazon veya Walmart eklemek, %40 daha düşük marjla (komisyon oranları + reklam maliyetleri) hacmi 3 katına çıkarabilir. Gelir artsa bile net kâr düşebilir.
    </p>
    <p>
      <strong>Tuzak 3: Özellik şişkinliği.</strong> Müşterilerin istediği her şeyi inşa etmek, karşılığında fiyat artışı olmadan SMM'yi (destek, operasyon, bakım) artırır. Marj sessizce aşınır.
    </p>
    <p>
      <strong>Tuzak 4: Birim ekonomisi negatif müşteri segmentleri.</strong> CAC &gt; LTV olan bir segment, her yeni müşteriyle değeri yok ediyordur. Negatif marjlı bir segmenti büyütmek büyüme gibi görünür ancak aslında kayıpları hızlandırır.
    </p>

    <h2>90 günlük marj sprinti</h2>
    <p>
      Marjın hızlı bir iyileştirmeye ihtiyacı varsa, odaklanmış bir sprint:
    </p>
    <p>
      <strong>1-2. Hafta: Denetim.</strong> Ürün hattına göre P&amp;L, SKU'ya göre brüt marj, tedarikçi harcama analizi, SaaS araç envanteri.
    </p>
    <p>
      <strong>3-4. Hafta: Fiyat testi.</strong> %10+ fiyat artışı için 2-3 ürün belirleyin. Yeni müşteri fiyatlandırmasında test edin.
    </p>
    <p>
      <strong>5-6. Hafta: Maliyet müzakeresi.</strong> İlk 10 tedarikçi. Yeniden müzakere edin veya alternatifleri araştırın.
    </p>
    <p>
      <strong>7-8. Hafta: Karma kaydırma.</strong> Yüksek marjlı ürünleri tanıtın, düşük marjlılardan geri çekilin. Gerekirse satış komisyonu ayarlamaları.
    </p>
    <p>
      <strong>9-12. Hafta: Ölçüm.</strong> Marjları yeniden hesaplayın. Odaklanmış bir sprintten gerçek iyileşme: 3–8 puan.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      Marjlarınızı satır satır{" "}
      <a href="/tools/profit-margin-calculator">kâr marjı hesaplayıcı</a>
      {" "}ile kontrol edin. Marj iyileştirmelerinin gerekli hacmi nasıl değiştirdiğini görmek için{" "}
      <a href="/tools/break-even-calculator">başabaş noktası hesaplayıcı</a>
      {" "}ve marj denkleminin fiyat belirleme tarafı için{" "}
      <a href="/tools/pricing-calculator">fiyatlandırma hesaplayıcı</a>
      {" "}ile birlikte kullanın.
    </p>
  </>
);