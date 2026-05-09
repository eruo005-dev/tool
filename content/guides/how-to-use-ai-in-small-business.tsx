import { type ReactElement } from "react";

export const intro: ReactElement = (<p>AI, küçük işletmenizi tek başına kurtarmaz &mdash; ancak net bir iş akışı ve net bir metrikle kullanıldığında, 30 gün içinde kendi masrafını sessizce çıkarır.</p>);

export const body: ReactElement = (
  <>
    <p>Çoğu küçük işletme sahibi ya yapay zekayı tamamen görmezden gelir ya da bir hafta sonu her şeyi yapay zekayla yapmaya çalışıp tükenir. Her iki yaklaşım da başarısız olur. Gerçek sonuçlar alan ekipler, yüksek acılı bir iş akışı seçer, sahiplenecek bir kişi atar ve her hafta kazanılan saatleri ölçer. Bu rehber, gerçekçi bir benimseme planı isteyen işletme sahipleri ve solo kurucular içindir &mdash; ajanların her şeyi devralacağına dair bir hype makalesi değil.</p>

    <h2>Yüksek acılı bir iş akışıyla başlayın</h2>
    <p>Yapay zekayı tüm şirketinize yaymayın. En çok saat kaybettiren ve %80 doğru olsa bile müşteriye zarar verme riski düşük olan tek bir görevi seçin. Çoğu KOBİ için en iyi üç seçenek müşteri desteği triyajı (ilk yanıtları taslaklama, biletleri özetleme), içerik üretimi (blog taslakları, sosyal medya altyazıları, ürün açıklamaları) ve satış erişimi (soğuk e-posta varyasyonları, toplantı özetleri, teklif taslakları)dır. Bunlardan birini kazanın, ardından diğerine geçin.</p>

    <h2>Önce test edilecek üç ücretsiz katman</h2>
    <ul>
      <li>ChatGPT ücretsiz &mdash; geniş, hızlı, en iyi genel amaçlı başlangıç noktası.</li>
      <li>Claude.ai ücretsiz &mdash; uzun metin yazma, nüanslı ton ve belge analizinde en güçlüsü.</li>
      <li>Gemini ücretsiz &mdash; Google Workspace ile sıkı entegre, ekibiniz zaten Gmail ve Docs'ta yaşıyorsa kullanışlı.</li>
    </ul>

    <h2>Neyi otomatikleştirmeli, neyi insana bırakmalı</h2>
    <p>Taslaklama, özetleme, etiketleme, çeviri ve biçimlendirmeyi otomatikleştirin &mdash; yani bir insanın müşteriye ulaşmadan önce çıktıyı hâlâ gözden geçirdiği her şeyi. İnsanları, yasal, mali, tıbbi veya duygusal (iade, şikayet, işten çıkarma, sağlık talepleri) her şeyde nihai onay konusunda sıkıca yetkili tutun. Güvenli bir kural: Yapay zeka taslak hazırlar, insanlar gönderir.</p>

    <h2>Gizlilik: Bir şey yapıştırmadan önce Kullanım Koşullarını okuyun</h2>
    <p>Müşteri adlarını, e-postalarını, telefon numaralarını, sağlık bilgilerini veya ödeme bilgilerini şartları kontrol etmeden asla ücretsiz bir tüketici katmanına yapıştırmayın. Ücretsiz katmanlar genellikle girdilerinizi model eğitimi için kullanır. Müşteri PII'sine dokunan herhangi bir şey için, verilerinizi eğitimin dışında bırakan ücretli veya iş planlarını (ChatGPT Team, Claude for Work, Gemini Business) kullanın. Şüpheniz varsa, önce adları gizleyin.</p>

    <h2>Çalışan başına maliyet ve beklenen <a href="/learn/roi">ROI</a></h2>
    <p>ChatGPT Team için kullanıcı başına aylık yaklaşık $20&ndash;30, Claude Pro için aylık yaklaşık $25 ve Gemini Business için aylık $20 bütçe ayırın. 5 kişilik bir ekip için bu, toplamda aylık $100&ndash;150 demektir. Her kişi haftada sadece 2 saat tasarruf etse ve saatlik yüklü maliyet $40 olsa, ayda yaklaşık $1,500 geri kazanırsınız. İlk iki ay boyunca haftalık kazanılan saatleri takip edin &mdash; ROI kanıtınız budur.</p>

    <h2>Yaygın hatalar</h2>
    <p>Üç hata çoğu dağıtımı batırır. Birincisi, yapay zekayı bir personel çarpanı yerine personel yedekleyicisi olarak görmek &mdash; insanlar bunu hissettikleri anda bağlantıyı koparır. İkincisi, eğitimi atlamak; herkesin "ChatGPT'yi kullanabileceğini" varsaymak değerin %80'ini masada bırakır. Üçüncüsü, inceleme iş akışının olmaması &mdash; halüsinasyon görmüş gerçeklerle doğrudan müşterilere giden yapay zeka tarafından oluşturulmuş e-postalar, aracın kazandırdığından daha fazlasına mal olur.</p>

    <h2>Alt satır</h2>
    <p>Bir iş akışı seçin, bir araç seçin, müşteri verileri söz konusu olduğu anda iş katmanı için ödeme yapın ve kazanılan saatleri ölçün. Bu dört şeyi yapan küçük işletmeler bileşik getiriler görür. Parlak ajanların ve otonom her şeyin peşinden koşanlar hâlâ tam fiyat ödüyor ve hiçbir şey alamıyor.</p>
  </>
);