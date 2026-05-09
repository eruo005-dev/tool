import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Uzun bir belgeyi özetlemek kulağa basit gelir&mdash;önemli kısımları koru, gerisini at&mdash;ancak
      &ldquo;önemli&rdquo; tanımı hedef kitleye, amaca ve uzunluk hedefine göre büyük ölçüde değişir. Bir sözleşmenin hukuki özeti her yükümlülüğü ve son teslim tarihini korur. Aynı belgenin pazarlama özeti değer teklifini korur ve maddeleri atar. Bir blog yazısının üstündeki TL;DR iki cümleye sığmalıdır. Algoritmik taraf, 1950'lerdeki basit kelime sıklığı yaklaşımlarından 2000'lerde TextRank gibi grafik tabanlı yöntemlere ve içeriği sıfırdan yeniden yazabilen modern <a href="/learn/llm">LLM</a> soyutlayıcı özetlemeye kadar evrildi. Her yaklaşımın güçlü yönleri ve başarısızlık modları vardır. Bu kılavuz, çıkarımsal ve soyutlayıcı yöntemleri, TextRank algoritmasını, modern LLM özetlemeyi, okuma süresi hedeflerini ve özet kalitesinin nasıl kontrol edileceğini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Çıkarımsal ve soyutlayıcı</h2>
    <p>
      Çıkarımsal özetleme, doğrudan kaynaktan cümleler seçer ve bunları birbirine bağlar. Çıktı tamamen orijinal metnin birebir kopyasından oluşur, bu da atıfı temiz tutar ve <a href="/learn/hallucination">halüsinasyonu</a> önler ancak bazen garip geçişler ve tekrarlar üretir. Soyutlayıcı özetleme, anlamı yakalayan yeni cümleler üretir, bu daha doğal okunur ancak yanlış yorumlama veya ayrıntı uydurma riskini beraberinde getirir. LLM öncesi sistemlerin çoğu çıkarımsaldır. Modern LLM'ler varsayılan olarak soyutlayıcıdır, bu yüzden bazen kaynakta olmayan bir gerçeği güvenle özetlerler.
    </p>

    <h2>TextRank ve grafik tabanlı yöntemler</h2>
    <p>
      TextRank (Mihalcea ve Tarau, 2004), PageRank algoritmasını bir cümle grafiğine uygular. Her cümle bir düğümdür ve kenarlar bir benzerlik metriği (genellikle terim vektörlerinin kosinüs benzerliği veya uzunluğa göre normalleştirilmiş basit kelime örtüşmesi) ile ağırlıklandırılır. Bu grafik üzerinde PageRank çalıştırmak, cümleleri belge genelinde ne kadar &ldquo;merkezi&rdquo; olduklarına göre sıralar ve en yüksek puanlı N cümle özeti oluşturur. TextRank denetimsizdir, hızlıdır ve eğitim verisi olmadan çalışır, bu yüzden yaklaşık on beş yıl boyunca baskın açık kaynak özetleme tekniği olmuştur. Zayıf yönü: garip cümleleri yeniden yazamaz veya kaynak boyunca dağılmış fikirleri birleştiremez.
    </p>
    <pre>{`# Sözde kodda TextRank
cümleler = metni_cümlelere_ayır(metin)
grafik = benzerlik_grafiği_oluştur(cümleler)
puanlar = pagerank(grafik)
özet = [c için, _ in puana_göre_sırala(cümleler, puanlar)[:N]]
return " ".join(belge_sırasında(özet))`}</pre>

    <h2>Sıklık tabanlı ve TF-IDF yaklaşımları</h2>
    <p>
      Eski özetleyiciler, cümleleri terimlerinin sıklığına göre sıralar: en yaygın içerik kelimelerini (durdurma kelimeleri hariç) içeren cümleler önemli kabul edilir. TF-IDF, nadir terimleri daha yüksek ağırlıklandırarak bunu iyileştirir; bu belgeye özgü bir terimin, tüm belgelerde yaygın olan bir terimden daha fazla konuyu belirttiği teorisine dayanır. Bu yaklaşımlar haber makaleleri için kabul edilebilir şekilde çalışır ancak özel bir kelime dağarcığını eşit şekilde kullanan herhangi bir şeyde zorlanır.
    </p>

    <h2>LLM tabanlı soyutlayıcı özetleme</h2>
    <p>
      &ldquo;Aşağıdaki metni üç cümlede özetle&rdquo; komutu verilen modern bir LLM, çoğu öznel değerlendirmede TextRank'ten çok daha iyi çıktı üretir. Model yeniden yazabilir, fikirleri birleştirebilir, istenen bir tonu eşleştirebilir ve yeni yazılmış gibi okunan çıktı üretebilir. Ödünleşimler: hesaplama maliyeti, olası halüsinasyon ve şeffaf atıf eksikliği. Yüksek riskli özetler (hukuki, tıbbi, finansal) için, LLM çıktısını, iddiaların dayandığı kaynak cümleleri ortaya çıkaran çıkarımsal bir geçişle eşleştirin.
    </p>

    <h2>Bağlama göre uzunluk hedefleri</h2>
    <p>
      Uzunluğu, özetin nasıl tüketileceğine göre ayarlayın. Bir blog yazısının üstündeki TL;DR 1 ila 3 cümle, yaklaşık 30 ila 70 kelimedir. Bir raporun üstündeki yönetici özeti 100 ila 250 kelimedir. Bir <a href="/learn/meta-description">meta açıklama</a> 150 ila 160 karakterdir. Bir tweet veya X gönderisi 280 karakterdir. Akademik bir makaledeki öz 150 ila 300 kelimedir. Tüketim formatına uygun özetlemek işin yarısıdır&mdash;okuyucu yalnızca 160 karakter görecekse 500 kelimelik harika bir özet işe yaramaz.
    </p>
    <pre>{`TL;DR:              30-70 kelime
Yönetici özeti:     100-250 kelime
Öz:                 150-300 kelime
Meta açıklama:      150-160 karakter
Sosyal medya gönderisi: 50-280 karakter
Asansör konuşması:  30-60 kelime`}</pre>

    <h2>Hedef olarak okuma süresi</h2>
    <p>
      Ortalama okuma hızı genel metin için dakikada 200 ila 250 kelimedir, eğlence amaçlı okumada daha hızlı, yoğun teknik materyalde daha yavaştır. Bir okuyucu tipik olarak orijinali okumak için gereken sürenin yüzde 10 ila 20'sini ayıracaktır. 5.000 kelimelik bir makale (20 dakika) için bu, 200 kelimelik bir özet (1 dakika) anlamına gelir. Kelime sayısını, orijinal uzunluğun sabit bir oranı yerine okuyucunun olası zaman bütçesine göre hedefleyin.
    </p>

    <h2>Yapıyı koruma</h2>
    <p>
      Çok bölümlü bir belgeyi tek bir paragrafta toplayan bir özet, okuyucuların ihtiyaç duyduğu yapısal bilgiyi genellikle kaybeder. Farklı bölümleri olan bir rapor için, her bölümü bir veya iki cümlede özetleyerek ve bölüm başlıklarını koruyarak bölüm sınırlarını koruyun. Bu, orijinaliyle aynı üst düzey yapıya sahip, okuyucuların bir içindekiler tablosu gibi gezinebileceği taranabilir bir özet üretir. Soyutlayıcı özetleyiciler varsayılan olarak yapıyı düzleştirme eğilimindedir; onlardan açıkça korumalarını isteyin.
    </p>

    <h2>Kalite kontrolleri</h2>
    <p>
      Özeti kaynak olmadan okuyun ve sorun: Orijinali okumamış biri ana noktaları anlar mı? Ardından kaynağı okuyun ve sorun: Özet gerekli herhangi bir şeyi kaçırdı mı? Kaynak tarafından desteklenmeyen herhangi bir şey içeriyor mu? İlk kontrol, kullanışsız olacak kadar soyut özetleri yakalar. İkincisi, halüsinasyonları ve çarpıtmaları yakalar. Çıkarımsal yöntemler için cümlelerin mantıklı bir sırada olduğunu doğrulayın. Soyutlayıcı yöntemler için her iddianın kaynağa kadar izlenebildiğini doğrulayın.
    </p>

    <h2>Özel içeriği işleme</h2>
    <p>
      Hukuki metin, tıbbi kayıtlar, teknik şartnameler ve kod, genel özetleyicilerin gözden kaçırdığı alan kurallarına sahiptir. Hukuki metin her yükümlülüğün korunmasını gerektirir. Tıbbi kayıtlar birimlerin ve dozajların bozulmamasını gerektirir. Teknik şartnameler sayısal değerlerin tam olmasını gerektirir. Bu alanlar için genel amaçlı özetleme bir başlangıç noktasıdır, üretime hazır bir çıktı değildir. Ya alana özel ayarlanmış bir model kullanın ya da önemli herhangi bir şey için insan incelemesi yapın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Halüsinasyona yatkın çıktıya gerçekler için güvenmek.</strong> Soyutlayıcı bir LLM, sayılar, tarihler veya atıflar uyduran akıcı özetler üretebilir. Gerçek ağırlıklı içerik için her iddiayı kaynağa karşı doğrulayın veya çıkarımsal çıktı kullanın.
    </p>
    <p>
      <strong>Sabit oranlı özetler.</strong> &ldquo;Orijinalin yüzde onu&rdquo; kötü bir hedeftir çünkü 500 kelimelik bir yazının 50 kelimelik özeti iyidir ancak 50 kelimelik bir yazının 5 kelimelik özeti saçmadır. Özetin nasıl tüketileceğine uygun bir uzunluk seçin.
    </p>
    <p>
      <strong>Tezi atlamak.</strong> Destekleyici noktaları sıralayan ancak ana argümanı atlayan bir özet işe yaramaz. Özetin ilk cümlesinin ana noktayı belirttiğini kontrol edin.
    </p>
    <p>
      <strong>Belge tartışmacı olduğunda bölüm bölüm özetlemek.</strong> Bölüm özetleri referans belgeler için işe yarar ancak bölümler arasında inşa edilen argümanları bozar. Uzun biçimli argüman için tek bir anlatı olarak özetleyin.
    </p>
    <p>
      <strong>Hedef kitleyi görmezden gelmek.</strong> Bir mühendis, bir yönetici ve bir müşteri için özetlenen aynı belge çok farklı okunacaktır. Özet stilini seçmeden önce hedef kitleyi belirtin.
    </p>
    <p>
      <strong>Okunabilirliği kontrol etmemek.</strong> Okunabilirlikte 16. sınıf seviyesinde puan alan yoğun, jargon dolu bir özet amacını boşa çıkarır. Hedef kitlenin okuma seviyesini hedefleyin, genel okuyucular için genellikle 8 ila 10. sınıf.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Tarayıcıda ilk geçiş özetlerini{" "}
      <a href="/tools/text-summarizer">metin özetleyici</a> ile oluşturun. Özetin hedef kitleniz için doğru okuma seviyesinde olduğunu doğrulamak için{" "}
      <a href="/tools/readability-score-checker">okunabilirlik puanı denetleyicisi</a> ve özetin kaynağınızın merkezi olarak ele aldığı terimleri hala yüzeye çıkardığını onaylamak için{" "}
      <a href="/tools/keyword-density-checker">anahtar kelime yoğunluğu denetleyicisi</a> ile eşleştirin.
    </p>
  </>
);