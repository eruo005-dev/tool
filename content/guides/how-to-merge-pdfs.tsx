import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      PDF birleştirme kulağa basit gelir—ta ki muhasebecinizin tek dosya olarak istediği beş vergi belgesiyle ya da tek bir paket olarak gönderilmesi gereken imzalı bir sözleşme ve ekleriyle karşı karşıya kalana kadar. Çoğu kişi Google'daki ilk sonuca tıklar, hassas belgelerini rastgele bir siteye yükler ve en iyisini umar. Buna ihtiyacınız yok. Bu rehber, birleştirmenin ne zaman işe yaradığını, kaçınmanız gereken gizlilik tuzağını ve insanların sürekli karşılaştığı birkaç püf noktasını kapsıyor.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Birleştirme ne zaman işe yarar</h2>
    <p>
      Sürekli karşılaşılan üç senaryo: vergi sezonu (W-2'ler, 1099'lar, makbuzlar ve çizelgeler CPA'nız için tek dosyada birleştirilir), imzalı sözleşmeler (orijinal anlaşma ve ayrı e-postalarla gelen imza sayfaları) ve portföyler (dağınık bir zip yerine tek bir bağlantı olarak gönderilen 3-8 örnek PDF). Her üçünde de alıcı tek bir şey ister—ilk dokunuşta açılan, sıralı, tek bir dosya.
    </p>
    <p>
      Ayrıca, dörtten fazla ek göndereceğiniz zaman birleştirin. Tek bir dosyayı kaybetmek daha zordur, arşivlemek daha kolaydır ve genellikle parçalarının toplamından daha küçüktür.
    </p>

    <h2>Şüpheli yükleme sorunu</h2>
    <p>
      "PDF birleştir" araması yapın ve ilk sonuçların çoğu dosyalarınızı kendi sunucularına yüklemenizi ister. Bir yemek tarifi PDF'si için sorun değil. Ancak SSN'nizi içeren bir 1040, imzalı bir kira sözleşmesi veya bir tıbbi kayıt için sorun. Dosyanızı ne kadar süre tuttuklarını, kimlerin erişimi olduğunu veya bir eğitim setine dahil olup olmadığını bilmiyorsunuz.
    </p>
    <p>
      Daha güvenli yaklaşım, birleştirmeyi yerel olarak yapan tarayıcı tabanlı bir araçtır—yani PDF cihazınızdan asla ayrılmaz.{" "}
      <a href="/tools/merge-pdf">PDF birleştiricimiz</a> tarayıcınızda çalışır: dosyaları sürükleyin, sıralayın, indirin. Hiçbir şey bir sunucuya dokunmaz.
    </p>

    <h2>Acrobat'ın hâlâ kazandığı yerler</h2>
    <p>
      Sadece birleştirme için, ücretsiz bir tarayıcı içi araç, hız ve kolaylık açısından Acrobat'ı geçer. Ancak Acrobat, üç şey için fiyat etiketini hâlâ hak ediyor: iki sözleşme sürümünü karşılaştırma ve üzerinde düzeltme yapma, karmaşık formları doldurma ve düzleştirme ve PDF/A arşivleme gereksinimleriyle çalışma. Bir avukat veya uyum ekibiyseniz, lisansı saklayın. Diğer herkes için, muhtemelen yılda bir kez ihtiyacınız olacak.
    </p>

    <h2>Parola korumalı dosyalar</h2>
    <p>
      En yaygın hata: birleştirdiğiniz PDF'lerden biri parola korumalıdır. Bazı araçlar sessizce atlar, bazıları hata verir, bazıları boş bir sayfa birleştirir. Önce kilidini açın (herhangi bir PDF görüntüleyicide açın, yeni bir dosya olarak PDF'ye yazdırın veya sahip parolasını kullanın), <em>sonra</em> birleştirin. Yasal olarak kilidini açamıyorsanız, onu birleştirmemelisiniz.
    </p>

    <h2>Birleştirmede kaybolanlar</h2>
    <p>
      Sayfa içeriği, yazı tipleri ve gömülü görseller bozulmadan kalır. Kaybolanlar: genel yer imleri (her kaynak dosyanın yer imleri genellikle taşınmaz veya çakışır), form alanları (doldurulabilir formlar birleştirmede genellikle bozulur—önce düzleştirin) ve dijital imzalar (birleştirme, imzalanan baytlar değiştiği için onları geçersiz kılar).
    </p>
    <p>
      Paketiniz imzalı bir PDF içeriyorsa, önce imzasız sayfaları birleştirin, ardından imzalı dosyayı ayrı olarak ekleyin veya sonunda birleştirilmiş paketi yeniden imzalayın. İmzalı bir PDF'yi birleştirip imzanın geçerli olacağını umarak göndermeyin.
    </p>

    <h2>Büyük dosyaları yönetme</h2>
    <p>
      200 sayfalık taranmış bir PDF kolayca 80 MB'a ulaşabilir. Bunlardan ikisini birleştirin ve Gmail'in 25 MB ek sınırını aşarsınız. İki seçenek: çıktıyı sıkıştırın (taramalar yoğun şekilde sıkışır—genellikle 80 MB, görünür kayıp olmadan 10 MB'a düşer) veya ek yerine bir bağlantıyla gönderin. Çoğunlukla taramalardan oluşuyorsa, e-postalamadan önce bir sıkıştırıcıdan geçirin.
    </p>

    <h2>Basit bir iş akışı</h2>
    <p>
      Her kaynak dosyayı, sıranın belli olması için bir numara önekiyle yeniden adlandırın (<code>01-w2.pdf</code>,{" "}
      <code>02-1099.pdf</code>). Hepsini aynı anda birleştiriciye sürükleyin. Çıktının ilk ve son sayfasına göz atarak hiçbir şeyin kopyalanmadığından veya düşmediğinden emin olun. Tarihi içeren net bir dosya adıyla kaydedin. Üç dakika, işte bu kadar—teslim edebileceğiniz temiz bir dosyanız var.
    </p>
  </>
);