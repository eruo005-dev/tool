/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Kod hassastır. Ekiplerin GitHub Copilot hakkında dile getirdiği en büyük endişe veri
      işlemedir: kodunuz nereye gidiyor, kim görüyor, gelecekteki modelleri eğitiyor mu
      ve bir öneri yanlış çıktığında ne oluyor? Bu kılavuz pratik
      yanıtları adım adım açıklıyor.
    </p>
  </>
);

export const toc = [
  { id: "code-safety", label: "Kodunuz Copilot ile güvende mi?" },
  { id: "internet", label: "Copilot'un internet bağlantısına ihtiyacı var mı?" },
  { id: "training-data", label: "Copilot hangi koddan öğreniyor?" },
  { id: "broken-code", label: "Copilot bozuk kod yazarsa ne olur?" },
];

export const body = (
  <>
    <h2 id="code-safety">GitHub Copilot güvenliği: kodunuz güvende mi?</h2>
    <p>
      Genellikle birbirine karıştırılan üç farklı endişe vardır:
    </p>
    <ul>
      <li>
        <strong><a href="/learn/inference">Çıkarım</a> için kod iletimi.</strong> Evet, istem bağlamınız
        (imlecinizin etrafındaki kod), modelin öneriler üretebilmesi için GitHub'ın
        sunucularına gönderilir. Aktarım sırasında şifrelenir. Hizmetin çalışması için
        gereklidir.
      </li>
      <li>
        <strong>Kodunuzun eğitim için kullanılması.</strong> İş + Kurumsal katmanlar
        kodunuzu eğitim için kullanmamayı açıkça tercih eder. Bireysel katman:
        mevcut ayarları kontrol edin — geçmişte katılım zorunlu veya isteğe bağlı
        olarak değişiklik göstermiştir.
      </li>
      <li>
        <strong>Kod saklama.</strong> GitHub, istem ve öneri verilerini
        sınırlı sürelerle saklar (katmana göre değişir; İş + Kurumsal daha sıkı
        silme politikalarına sahiptir). Yüksek hassasiyetli kod tabanları için Kurumsal katmanın
        sıfır saklama modu doğru seçimdir.
      </li>
    </ul>
    <p>
      Çoğu ekip için: İş veya Kurumsal katmanı gerçekçi endişeleri giderir.
      Güvenlik rejiminiz tamamen hava boşluklu çalışma gerektiriyorsa, kendi kendine barındırılan
      alternatifler (Codeium, Tabnine self-hosted, Continue yerel modellerle) mevcuttur.
    </p>

    <h2 id="internet">Copilot'un internet bağlantısına ihtiyacı var mı?</h2>
    <p>
      Evet. Çıkarım GitHub'ın sunucularında gerçekleşir; düzenleyiciniz istemi gönderir
      ve tamamlamayı alır. İnternet olmadan öneriler görünmez.
      Bağlantı durumunu gösteren bir durum göstergesi görürsünüz.
    </p>
    <p>
      Yalnızca yerel alternatifler:
    </p>
    <ul>
      <li><strong>Continue.dev</strong> yerel bir Ollama modeli ile.</li>
      <li><strong>Tabnine self-hosted</strong> (ücretli).</li>
      <li><strong>Cursor</strong> yerel bir model ile.</li>
    </ul>
    <p>
      Bunlar makinenizde çalışır ancak model ağırlıkları için güçlü bir GPU ve önemli miktarda disk alanı gerektirir.
      Kalite genellikle GPT-4 sınıfının altındadır; açık modeller geliştikçe hızla kapanmaktadır.
    </p>

    <h2 id="training-data">GitHub Copilot hangi koddan öğreniyor?</h2>
    <p>
      Temel Copilot modeli, 2024 başındaki bir kesme tarihine kadar GitHub'daki herkese açık kod üzerinde eğitildi (belirli kesme tarihleri temel alınan modele göre değişir). Eğitim
      verileri, izinli lisanslı kodu (MIT, Apache 2.0, BSD) ve ayrıca bazı
      copyleft kodlarını (GPL) içerir.
    </p>
    <p>
      Telif hakkı + lisans sorusu gerçekten tartışmalıdır:
    </p>
    <ul>
      <li>
        2022-2024 yıllarında telif hakkı + DMCA ile ilgili toplu dava açıldı. Çoğu
      maddi iddia reddedildi veya daraltıldı; birkaçı 2026
      mahkemelerinde devam ediyor.
      </li>
      <li>
        GitHub, İş + Kurumsal müşterileri için fikri mülkiyet tazminatı sağlar —
        Copilot çıktısı bir telif hakkı iddiasını tetiklerse, GitHub savunmayı üstlenir.
      </li>
      <li>
        Pratik tavsiye: bağımsız inceleme yapmadan telif hakkı tescil ettireceğiniz
        kod için Copilot çıktısını kullanmayın. Tipik ticari
        yazılımlar için tazminat + sizin düzenlemeniz bunu sorun olmaktan çıkarır.
      </li>
    </ul>

    <h2 id="broken-code">Copilot uygulamanızı bozan bir kod yazarsa ne olur?</h2>
    <p>
      Gönderdiğiniz koddan siz sorumlusunuz — Copilot olsun ya da olmasın. Pratik
      sonuçlar:
    </p>
    <ul>
      <li>
        <strong>Üretim kesintilerinin sorumluluğu:</strong> sizdedir. Herhangi bir
        kaynaktan gelen herhangi bir kodla aynı. Copilot önerileri garantiyle gelmez.
      </li>
      <li>
        <strong>Kod incelemesi hala gereklidir.</strong> Copilot önerilerine, bir
        kıdemsiz geliştiricinin çekme isteği gibi davranın — birleştirmeden önce inceleyin, testleri çalıştırın, uç
        durumları doğrulayın.
      </li>
      <li>
        <strong>Test kapsamı daha önemlidir.</strong> Yapay zeka tarafından oluşturulan kod, insan yazımı kodun nadiren olduğu kadar
        ince bir şekilde yanlış olabilir (örneğin, bir API hakkında kendinden emin bir şekilde yanlış olmak). Testler bunları yakalar.
      </li>
      <li>
        <strong>Denetim izleri.</strong> Copilot'u düzenlenmiş ortamlarda benimsiyorsanız,
        hangi önerilerin kabul edildiğine, değiştirildiğine veya reddedildiğine dair kayıtlar tutun.
        Gelecekteki olay analizine yardımcı olur.
      </li>
    </ul>
    <p>
      Kod kalitesi araştırması (GitClear 2024), yapay zeka destekli kodun el yazımı koda göre daha fazla değişiklik
      ve biraz daha fazla tekrar içerdiğini göstermektedir. Bu eğilimi
      güçlü kod incelemesi + test kültürü ile dengeleyin.
    </p>
  </>
);

export const cta = {
  label: "Ekibiniz için Copilot ROI'sini hesaplayın",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "GitHub Copilot güvenliği: kodum güvende mi?",
    a: "Kod, çıkarım için GitHub'a gönderilir (aktarım sırasında şifrelenir). İş + Kurumsal, eğitim verisi kullanımını devre dışı bırakır; Bireysel katman değişir. İş + Kurumsal daha sıkı saklama politikalarına sahiptir. Yüksek hassasiyetli kod tabanları için Kurumsal sıfır saklama modu veya kendi kendine barındırılan alternatifler (Codeium, Tabnine, Continue yerel modellerle).",
  },
  {
    q: "GitHub Copilot internet bağlantısı gerektiriyor mu?",
    a: "Evet. Çıkarım GitHub'ın sunucularında gerçekleşir. Yalnızca yerel alternatifler (Continue.dev Ollama ile, Tabnine self-hosted, Cursor yerel modellerle) güçlü GPU + ağırlıklar için önemli disk alanı gerektirir. Kalite GPT-4 sınıfının altındadır ancak gelişmektedir.",
  },
  {
    q: "GitHub Copilot hangi koddan öğreniyor?",
    a: "2024 başındaki kesme tarihine kadar GitHub'daki herkese açık kod. İzinli lisanslı + bazı copyleft içerir. 2022-2024 toplu davaları çoğunlukla reddedildi veya daraltıldı; bazıları devam ediyor. İş + Kurumsal müşterileri fikri mülkiyet tazminatı alır — çıktı bir iddiayı tetiklerse GitHub savunur.",
  },
  {
    q: "Copilot uygulamamı bozan bir kod yazarsa ne olur?",
    a: "Gönderdiğiniz koddan siz sorumlusunuz — Copilot veya başka bir araç. Aynı inceleme süreci. Testler daha önemlidir (yapay zeka kodu, insan kodunun nadiren olduğu kadar API'ler hakkında kendinden emin bir şekilde yanlış olabilir). Düzenlenmiş ortamlarda denetim izlerini takip edin.",
  },
];