/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Açık kaynak geliştirici araçlarına katkıda bulunmak, bir geliştirici araçları kariyeri inşa eden herkes için en yüksek kaldıraçlı hamlelerden biridir. Portföyünüzü, ağınızı ve üretim ölçeğinde gerçekte neyin yayınlandığına dair muhakeme yeteneğinizi geliştirir. Zor kısım: İtibarınızı ilk günden yakmadan Açık Kaynak projelerinin yazılı olmayan kurallarında gezinmek.
    </p>
    <p>
      Bu rehber pratik bir oyun kitabıdır: iyi ilk görevler nasıl bulunur, birleştirilecek bir PR nasıl yazılır, önemli katkılara nasıl geçilir ve insanları korkutan &ldquo;uyumsuz yeni gelen&rdquo; hatalarından nasıl kaçınılır.
    </p>
  </>
);

export const toc = [
  { id: "find-projects", label: "Doğru projeleri bulmak" },
  { id: "first-pr", label: "İlk PR'ınız (ve alay konusu olmamak)" },
  { id: "scale-up", label: "Önemli katkılara geçiş yapmak" },
  { id: "etiquette", label: "Açık Kaynak görgü kuralları" },
];

export const body = (
  <>
    <h2 id="find-projects">Katkıda bulunmak için doğru projeleri bulmak</h2>
    <p>
      Yüksek kaliteli bir hedef listesi oluşturan üç filtre:
    </p>
    <ol>
      <li>
        <strong>Gerçekten kullandığınız araçlar.</strong> Sadece özgeçmişi doldurmak için kullanmadığınız projeleri seçmeyin. Acıyı hissetmediğiniz için kötü PR'lar yazarsınız. Bakımcılar bunu anlar.
      </li>
      <li>
        <strong>Aktif ama şişkin değil.</strong> Son taahhüt sıklığına (son 30 gündeki taahhütler) ve PR birleştirme oranına (son 90 günde birleştirilen PR'lar vs. açılanlar) bakın. Sağlıklı projelerde her ikisi de vardır. Ölü projeler (3 aydır taahhüt yok) PR'ınızı birleştirmez. Aşırı şişkin projelerin (Linux, Kubernetes çekirdeği) ilk kez katkıda bulunanlar için 6+ ay süren süreçleri vardır.
      </li>
      <li>
        <strong>Hoşgeldiniz diyen bir topluluk.</strong> Son 20 kapatılmış PR'ı okuyun. Bakımcılar incelemelerde destekleyici mi? Yoksa kısa ve küçümseyici mi? Katkınızın kalıcı olması için kültürel uyum önemlidir.
      </li>
    </ol>

    <h2 id="first-pr">İlk PR'ınız — ve alay konusu olmamak</h2>
    <p>
      İlk PR'ları temiz bir şekilde yerleştiren model:
    </p>
    <ol>
      <li>
        <strong>Bir `good first issue` etiketi bulun.</strong> Çoğu projede bunlar vardır. Yaşı 14 günden büyük (birisi sessizce başlamamış) ve 90 günden küçük (hala güncel) olanları filtreleyin.
      </li>
      <li>
        <strong>Başlamadan önce görev hakkında yorum yapın.</strong> İki cümle: &ldquo;Bunu almak istiyorum. Önerdiğim yaklaşım: [bir satır].&rdquo; Bir bakımcının onayını bekleyin. Boşa harcanan işi önler.
      </li>
      <li>
        <strong>Önce katkıda bulunan belgelerini okuyun.</strong> Stil rehberi, test kuralları, PR şablonu. Bunu atlamak, PR'ların küçük detaylar için geri gönderilmesinin 1 numaralı nedenidir.
      </li>
      <li>
        <strong>Test yazın.</strong> Küçük değişiklikler için bile. &ldquo;Manuel olarak test edildi&rdquo; diyen PR açıklamaları daha az güven kazanır.
      </li>
      <li>
        <strong>İncelemecinin zamanına saygı duyan bir PR açıklaması.</strong> Ne değişti, neden, nasıl test edilir, açık sorular. Tipik değişiklikler için 100-200 kelime.
      </li>
      <li>
        <strong>İnceleme yorumlarına hızlı ve kibarca yanıt verin.</strong> Anlaşmazlık sorun değildir; üslup sorundur. &ldquo;X'in nedenini biraz daha açıklar mısınız?&rdquo; ifadesi &ldquo;Y yüzünden katılmıyorum&rdquo; ifadesinden daha iyi karşılanır.
      </li>
    </ol>
    <p>
      Kaçınılması gereken sahtekarlık sendromu karşıtı model: PR açıklamanızda 5 kez özür dilemek. Kendine güvenen, kısa ve mütevazı olun: &ldquo;X özelliğini Y yaklaşımıyla uygular; testler eklendi; incelemede ayarlamaya açığım.&rdquo;
    </p>

    <h2 id="scale-up">Önemli katkılara geçiş yapmak</h2>
    <p>
      Bir yazım hatası düzeltmesi bir işe alım yöneticisinin fikrini değiştirmez. Önemli katkılar değiştirir. Geçici katkılardan önemli katkılara ilerleme:
    </p>
    <ol>
      <li>
        <strong>1-3 küçük PR.</strong> Bakımcı güveni oluşturun. Katkı belgelerini kontrol ederler, geri bildirime yanıt verdiğinizi, kodunuzun makul olduğunu görürler.
      </li>
      <li>
        <strong>1-2 orta boy PR.</strong> Testleri olan bir özellik, tekrarlanabilirliği olan önemsiz olmayan bir hata düzeltmesi, bir dokümantasyon revizyonu. 100-500 satır anlamlı değişiklik.
      </li>
      <li>
        <strong>1 büyük PR veya sürekli alan sahipliği.</strong> Büyük bir görevi üstlenmek (bir performans iyileştirmesi, yeni bir alt sistem) veya projenin bir köşesinin fiili bakımcısı olmak (ör. &ldquo;Windows uyumluluk hikayesine ben sahibim&rdquo;). Bu, işe alım konuşmalarını değiştiren seviyedir.
      </li>
      <li>
        <strong>Bakımcı / taahhütçü statüsü.</strong> Bazı projeler bunu `MAINTAINERS.md` veya taahhüt erişimi ile resmileştirir. Çoğunlukla 6-12 ay boyunca sürekli katkıdan sonra olur.
      </li>
    </ol>
    <p>
      Zaman yatırımı: 3-6 ay boyunca haftada 2-5 saat sürekli çalışma sizi orta boy PR bölgesine getirir. Çoğu kariyer değiştirici için bu yeterlidir — halka açık bir Açık Kaynak projesinde sürekli varlık başlı başına bir farklılaştırıcı haline gelir.
    </p>

    <h2 id="etiquette">Açık Kaynak görgü kuralları: yazılı olmayan kurallar</h2>
    <ul>
      <li>
        <strong>Bir satırlık düzeltmeden daha büyük herhangi bir şey için</strong> bir görev ve bakımcı onayı olmadan PR açmayın. Kapsamı veya mimariyi önceden tartışmadan değiştiren &ldquo;Geçici özellik PR'ları&rdquo; birleştirilmeden kapatılır.
      </li>
      <li>
        <strong>2. günde bakımcıları inceleme için rahatsız etmeyin.</strong> Çoğu projenin zımni 1-2 haftalık bir SLA'sı vardır. Bekleyin, ardından sizden bir şeye ihtiyaçları olup olmadığını kibarca sorun.
      </li>
      <li>
        <strong>Stil tercihlerini tartışmayın.</strong> Mevcut kod tabanına uyun. İlk kez katkıda bulunan birinin sekmeler ve boşluklar hakkında güçlü fikirleri kırmızı bayraktır.
      </li>
      <li>
        <strong>Önceki çalışmalara atıfta bulunun.</strong> PR'ınız başka birinin fikri veya kodu üzerine inşa ediliyorsa, bunu açıkça belirtin. Birinin çalışmasını sessizce yeniden uygulamayın.
      </li>
      <li>
        <strong>PR'ınız reddedilirse, zarafetle kabul edin.</strong> Bakımcılar projeyi bir bütün olarak görür; siz bir PR görürsünüz. Düşünceli bir takip yorumu yazarak katılmadığınızı belirtin, konuşmayı 5 yerde yeniden başlatarak değil.
      </li>
      <li>
        <strong>Başkalarının PR'larını incelemeye yardımcı olun.</strong> En yüksek kaldıraçlı katkıda bulunan hamlesi. Bakımcılar kimin incelediğini hatırlar — hem itibar nedenleriyle hem de inceleme yazmaktan daha zor olduğu için.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Geliştirici araçları rolleri için maaş beklentileri",
  targetSlug: "dev-tool-salary-estimator",
};

export const faq = [
  {
    q: "Açık kaynak geliştirici araçlarına nasıl katkıda bulunabilirim?",
    a: "Gerçekten kullandığınız, aktif ancak şişkin olmayan, hoşgeldiniz diyen bakımcıları olan projeleri seçin. Bir 'good first issue' bulun, yaklaşımınızla başlamadan önce yorum yapın, testler yazın, net bir PR açıklaması yazın. 1-3 küçük PR, ardından orta boy PR'lar ve bakımcı statüsü için 6-12 ay boyunca sürekli katkı ile güven oluşturun.",
  },
  {
    q: "Alay konusu olmadan açık kaynağa nasıl katkıda bulunabilirim?",
    a: "Üç kural: önce katkıda bulunan belgelerini okuyun (atlamak, PR'ların didiklenmesinin 1 numaralı nedenidir), küçük değişiklikler için bile testler yazın, incelemecinin zamanına saygı duyan bir PR açıklaması yazın. PR'ınızda 5 kez özür dilemeyin — kendinize güvenen, kısa ve mütevazı olun. Mevcut kod stilini eşleştirin; yeni biri olarak sekmeler-boşluklar tartışmasına girmeyin.",
  },
  {
    q: "Geçici PR'lar ile önemli katkılar arasındaki fark nedir?",
    a: "Geçici: 1 satırlık düzeltmeler, yazım hataları. İşe alım kriterlerini etkilemez. Orta: testleri olan özellikler, tekrarlanabilirliği olan önemsiz olmayan hata düzeltmeleri, dokümantasyon revizyonları (100-500 satır). Önemli: büyük PR'lar, sürekli alan sahipliği ('Windows uyumluluğuna ben sahibim') veya bakımcı statüsü. Önemli seviye işe alım konuşmalarını değiştirir.",
  },
  {
    q: "Anlamlı bir Açık Kaynak katılımcısı olmak ne kadar sürer?",
    a: "3-6 ay boyunca haftada 2-5 saat sürekli çalışma sizi orta boy PR bölgesine getirir. 6-12 ay sizi bakımcı seviyesinde tanınmaya getirir. Bileşik etki gerçektir: bir projeye önemli katkılarınız olduğunda, bir sonraki proje daha kolaydır çünkü bakımcılar geçmiş performansınızı görebilir.",
  },
];