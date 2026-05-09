import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Emeklilik planlaması, bileşik faize ve kendi ataletinize karşı çalışan bir dizi sayıdır. 25 yaşında başlayın ve %10 tasarruf oranı sizi hedefe ulaştırır; 45 yaşında başlayın ve %25 artı iyimserliğe ihtiyacınız olur. Bu rehber, hedef sayıları (25x kuralı, %4 kuralı), hesap öncelik sırasını (401k eşleşmesi → Roth IRA → 401k → vergilendirilebilir), katkı limitlerini ve on yıllar boyunca gerçek paraya mal olan yaygın hataları adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Hedef sayı — yıllık harcamanın 25 katı</h2>
    <p>
      Temel kural: Emekli olmak için beklenen yıllık emeklilik harcamanızın 25 katına ihtiyacınız var. Emeklilikte yılda 60 bin dolar harcayın → 1,5 milyon dolar gerekir. 100 bin dolar harcayın → 2,5 milyon dolar.
    </p>
    <p>
      25 kat faktörü %4 kuralından gelir: Çeşitlendirilmiş bir portföy (%60 hisse/%40 tahvil), tarihsel getiriler varsayıldığında, 30 yıllık bir emeklilik boyunca yıllık %4 oranında güvenli bir şekilde para çekebilir ve tükenmez. 25 × %4 = yıllık harcamanın %100'ü.
    </p>
    <p>
      Uyarılar: %4, ABD piyasa geçmişinden türetilmiştir; düşük getirili ortamlar ve 40+ yıllık emeklilikler için %3,3-3,5 daha güvenli kabul edilir. Erken emekliler, getiri sırası riskine karşı sigorta olarak genellikle %3,5 etrafında plan yapar.
    </p>

    <h2>Başlangıç yaşı matematiği</h2>
    <p>
      Gelirinizin yüzde kaçını biriktirmeniz gerekiyor? Başlangıç yaşına göre değişir (%7 reel getiri varsayar, 65 yaşında 25 kat yıllık harcamayı hedefler):
    </p>
    <p>
      <strong>25 yaşında başla:</strong> Brüt gelirin ~%10-12'si.
    </p>
    <p>
      <strong>30 yaşında başla:</strong> ~%15.
    </p>
    <p>
      <strong>35 yaşında başla:</strong> ~%20.
    </p>
    <p>
      <strong>40 yaşında başla:</strong> ~%25.
    </p>
    <p>
      <strong>45 yaşında başla:</strong> ~%35.
    </p>
    <p>
      <strong>50 yaşında başla:</strong> ~%45 — ve muhtemelen 65'ten sonra emekli olursunuz ya da daha düşük bir hedefi kabul edersiniz.
    </p>
    <p>
      10 yıl sonra başlamanın maliyeti, gerekli tasarruf oranını kabaca ikiye katlamaktır. Bileşik büyüme affetmez.
    </p>

    <h2>Hesap öncelik sırası (ABD)</h2>
    <p>
      Çoğu kişi için tasarrufları tahsis etmenin en verimli sırası:
    </p>
    <p>
      <strong>1. İşveren eşleşmesine kadar 401(k).</strong> Eşleşen kısımda anında %50-100 getiri. İşvereniniz eşleşme yapmıyorsa bunu asla atlamayın.
    </p>
    <p>
      <strong>2. HSA (yüksek indirilebilir sağlık planınız varsa).</strong> Üçlü vergi avantajı: indirilebilir katkı, vergisiz büyüme, sağlık harcamaları için vergisiz çekim. Sağlık masraflarını cebinizden ödeyip HSA'nın büyümesine izin verebilirseniz, erişebileceğiniz en iyi emeklilik hesabı haline gelir.
    </p>
    <p>
      <strong>3. Roth IRA (uygunsanız).</strong> 2026'da 7.000 dolar limit (50+ ise 8.000 dolar). Vergisiz büyüme ve çekim. Gelir limitleri geçerlidir; aşarsanız backdoor Roth çalışır.
    </p>
    <p>
      <strong>4. Eşleşmenin ötesinde 401(k).</strong> 2026'da 23.500 dolar limit (50+ ise 31.000 dolar). Vergi öncesi, mevcut vergi faturanızı azaltır.
    </p>
    <p>
      <strong>5. Vergilendirilebilir aracı kurum.</strong> Vergi avantajlı alanı maksimize ettikten sonra. Vergi verimli endeks fonları, uzun vadeli sermaye kazancı oranları.
    </p>

    <h2>Geleneksel vs Roth — hangisini ne zaman kullanmalı</h2>
    <p>
      <strong>Geleneksel (vergi öncesi):</strong> Şimdi indirim alırsınız, daha sonra çekimlerde gelir vergisi ödersiniz. Mevcut vergi diliminiz beklenen emeklilik diliminizden yüksekse daha iyidir.
    </p>
    <p>
      <strong>Roth (vergi sonrası):</strong> Şimdi indirim yok, ancak çekimler vergisizdir. Mevcut diliminiz beklenen emeklilik diliminizden düşükse ve önünde on yıllarca büyüme olan genç çalışanlar için daha iyidir.
    </p>
    <p>
      Genel rehberlik: 20'li-30'lu yaşlarda ve kariyer başlangıcındaki düşük gelirli yıllarda Roth; indirimlerin en önemli olduğu en yüksek kazanç yıllarında geleneksel; emeklilikte vergi dilimi esnekliği için her ikisinin karışımı.
    </p>

    <h2>Varlık dağılımı — kayma yolu</h2>
    <p>
      Yaygın kural: Hisse senedi yüzdesi = 110 − yaşınız. 30'da: %80 hisse / %20 tahvil. 60'da: %50 / %50.
    </p>
    <p>
      Bir hedef tarih fonu (örneğin, Vanguard Target Retirement 2055) bunu otomatik olarak halleder — yıl yaklaştıkça agresiften muhafazakara kayar. Pasif yatırımcılar için iyi bir seçim.
    </p>
    <p>
      Kendi yönetenler için: 3 fonlu bir portföy (ABD toplam piyasa, uluslararası toplam piyasa, ABD tahvilleri) ihtiyacınız olanın %99'unu karşılar. Gider oranları &lt; 0,10 (Vanguard, Fidelity, Schwab endeks fonları).
    </p>
    <p>
      Kaçının: Çekirdek emeklilik tasarrufu olarak bireysel hisseler, yüksek ücretli aktif yönetilen fonlar (%1+ gider oranı yüz binlerce dolar kayıpla bileşiklenir), ücretleri %0,20'nin üzerinde olan hedef tarih fonları.
    </p>

    <h2>Sosyal Güvenlik — ne zaman talep edilmeli</h2>
    <p>
      ABD: 62 yaşında, tam emeklilik yaşında (doğum yılına bağlı olarak 66-67) veya 70 yaşına kadar erteleyerek talep edebilirsiniz.
    </p>
    <p>
      <strong>62'de talep:</strong> Tam emeklilik yaşına kıyasla aylık yardımda ~%30 azalma. Kalıcı.
    </p>
    <p>
      <strong>Tam emeklilik yaşında talep:</strong> Hesaplanan yardımınızın %100'ü.
    </p>
    <p>
      <strong>70'e erteleme:</strong> Tam emeklilik yaşına kıyasla ~%32 daha yüksek aylık yardım (her erteleme yılı için %8).
    </p>
    <p>
      Başabaş matematiği, 80'lerin başından ortasına kadar yaşamayı bekliyorsanız ertelemeyi destekler. Ertelemek uzun ömre karşı sigortadır; sağlık sorunlarınız veya acil ihtiyacınız varsa erken almak daha iyidir.
    </p>

    <h2>65 yaşından önce sağlık hizmeti</h2>
    <p>
      Medicare 65'te başlar. Ondan önce emekli olursanız bir köprüye ihtiyacınız var: COBRA (pahalı, maksimum 18 ay), ACA piyasa planları (gelire göre sübvansiyonlu — vergilendirilebilir geliri yöneten emekliler önemli sübvansiyonlar alabilir) veya eşinizin planı.
    </p>
    <p>
      Sübvansiyona uygun değilseniz, erken emeklilikte kişi başına yıllık ACA primleri + cepten harcamalar için 10-20 bin dolar bütçe ayırın.
    </p>

    <h2>5 yaygın emeklilik hatası</h2>
    <p>
      <strong>1. Başlamayı beklemek.</strong> 25 yerine 35'te başlamak, aynı tasarruf oranında nihai birikiminizi kabaca yarıya indirir.
    </p>
    <p>
      <strong>2. İş değiştirirken 401(k)'yi nakde çevirmek.</strong> Gelir vergisi + %10 ceza ödersiniz ve on yıllarca büyümeyi kaybedersiniz. Her zaman bir IRA'ya veya yeni işverenin 401(k)'sine aktarın.
    </p>
    <p>
      <strong>3. 30'lu/40'lı yaşlarda çok muhafazakar dağılım.</strong> 35'te %60 tahvil olmak, masada büyük bir büyüme bırakır. Genç yatırımcılar %80-100 hisse senedinde olmalıdır.
    </p>
    <p>
      <strong>4. Ücretleri görmezden gelmek.</strong> Yıllık %1 ücretler, 40 yılda servetinizin ~%28'ine mal olur. 30 yılda 500 bin dolar üzerinde %0,04 (endeks fonu) ile %1 (aktif yönetilen) arasındaki fark 300 bin doların üzerindedir.
    </p>
    <p>
      <strong>5. Lehdarları güncellememek.</strong> Emeklilik hesapları, vasiyetinizle değil, lehdar atamasıyla geçer. Şaşırtıcı sayıda hesap, atama hiç güncellenmediği için eski eşlere gider.
    </p>

    <h2>Yolda olup olmadığınızı nasıl kontrol edersiniz</h2>
    <p>
      Fidelity kriterleri (mevcut yıllık maaşın katı olarak):
    </p>
    <p>
      <strong>30'a kadar:</strong> 1x maaş birikmiş.
    </p>
    <p>
      <strong>40'a kadar:</strong> 3x.
    </p>
    <p>
      <strong>50'ye kadar:</strong> 6x.
    </p>
    <p>
      <strong>60'a kadar:</strong> 8x.
    </p>
    <p>
      <strong>67'ye kadar:</strong> 10x.
    </p>
    <p>
      Bu sayıların gerisindeyseniz = tasarruf oranını artırın, çalışma yıllarını uzatın veya emeklilik harcama hedefini düşürün. Önündeyseniz = tasarruf oranını düşürme, daha erken emekli olma veya yaşam tarzını yükseltme alanınız var.
    </p>

    <h2>Rakamları hesaplayın</h2>
    <p>
      Emeklilik tasarruf gidişatınızı{" "}
      <a href="/tools/retirement-calculator">emeklilik hesaplayıcısı</a>
      ile projelendirin. 5 yıl daha erken başlamanın sonucu nasıl değiştirdiğini görmek için{" "}
      <a href="/tools/compound-interest-calculator">bileşik faiz hesaplayıcısı</a>
      ve tüm hesapların anlık görüntüsü için{" "}
      <a href="/tools/net-worth-calculator">net değer hesaplayıcısı</a>
      ile birlikte kullanın.
    </p>
  </>
);