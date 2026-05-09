/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Hızlı yanıtlar iş dünyasında karşılaştığınız yaygın yapay zeka stratejisi sorularına; daha derinlemesine bilgiye ihtiyaç duyduğunuzda kapsamlı rehberlere bağlantılar içerir. Danışmanlık türleri, fintech, para birimi, eğitim, etik ve uzun rehberlerin hiçbirine tam olarak uymayan bir dizi ilgili konuyu kapsar.
    </p>
  </>
);

export const toc = [
  { id: "consulting-types", label: "Danışmanlık + strateji türleri" },
  { id: "fintech", label: "Fintech'te yapay zeka" },
  { id: "currency", label: "Para birimi + uluslararası genişleme" },
  { id: "training", label: "Ekip eğitimi + bütçe" },
  { id: "small-biz", label: "Küçük bütçeyle yapay zeka" },
  { id: "ethics-legal", label: "Etik + yasal hızlı başvurular" },
];

export const body = (
  <>
    <h2 id="consulting-types">Danışmanlık + strateji türleri</h2>

    <h3>Yapay zeka danışmanlığı ile yapay zeka stratejisi geliştirme arasındaki fark nedir?</h3>
    <p>
      <strong>Yapay zeka stratejisi</strong> planlama ve önceliklendirme aşamasıdır: hangi kullanım durumları, hangi sırayla, oluşturma vs satın alma, satıcı kısa listesi, <a href="/learn/roi">ROI</a> tahminleri. Çıktı genellikle bir yol haritası belgesidir. Süre: 4–12 hafta, $25k–$80k.{" "}
      <strong>Yapay zeka danışmanlığı</strong> stratejiye ek olarak uygulamayı da içerir: sistemi fiilen oluşturmak, iş akışınıza entegre etmek, ekibinizi eğitmek. Süre: 3–6 ay, $50k–$300k. Terimler pazarlamada birbirinin yerine kullanılır, ancak teslimatlar farklılık gösterir — imzalamadan önce ne satın aldığınızı teyit edin. Tam dökümümüzü <a href="/guides/how-to-choose-an-ai-consulting-firm">yapay zeka danışmanlık firması nasıl seçilir</a> sayfasında görebilirsiniz.
    </p>

    <h3>"Ajan yapay zeka" işim için ne anlama geliyor?</h3>
    <p>
      Bir "ajan", yalnızca metin üretmekle kalmayıp birden çok adımda eylemler gerçekleştirebilen bir yapay zeka sistemidir. 2026'da gerçekçi ajan kullanım durumları şunlardır: her adımın iyi tanımlandığı yapılandırılmış iş akışları (bir şirketi araştır, kişileri bul, iletişim taslağı hazırla, CRM'e kaydet). "Tamamen otonom yapay zeka çalışanları" hakkındaki pazarlama iddiaları çoğunlukla yük altında geçerli değildir — ajanların hala insan kontrol noktalarına ihtiyacı vardır. Kapsamınız dar ve iyi test edilmiş değilse, insanın sürece dahil olduğu bir model planlayın.
    </p>

    <h2 id="fintech">Fintech'te yapay zeka</h2>

    <h3>Başarılı fintech şirketleri yapay zekayı nasıl kullanıyor?</h3>
    <p>
      Beş iyi belgelenmiş kullanım durumu: (1) dolandırıcılık tespiti — işlem akışlarında örüntü eşleştirme, yapay zeka için çok uygun; (2) kredi puanlaması — yapay zekanın geleneksel büro modellerini desteklemesi, düzenleyici kısıtlamalarla; (3) müşteri desteği otomasyonu — seviye 1 bilet triyajı ve SSS; (4) uyumluluk izleme — KYC/AML örüntü işaretleme; (5) sıkı düzenleyici çerçeveler dahilinde kişiselleştirilmiş finansal tavsiye. Sıkıcı alanlar (dolandırıcılık, uyumluluk) genellikle en iyi ROI'yi sağlar. Gösterişli olanlar (kişiselleştirilmiş yatırım tavsiyesi) en yüksek düzenleyici ve sorumluluk riskini taşır.
    </p>

    <h2 id="currency">Para birimi + uluslararası genişleme</h2>

    <h3>Uluslararası genişleme için birden fazla para birimi platformu kullanmalı mıyım?</h3>
    <p>
      Hacim + karmaşıklığa bağlıdır. Erken aşama uluslararası (yılda $500k'nın altında USD dışı gelir) için Wise Business veya Stripe'ın çoklu para birimi alma gibi tek bir platform yeterlidir — tek gösterge paneli, %0.5–1 civarında öngörülebilir FX marjları. Orta aşama uluslararası (yılda $500k–$5M USD dışı) için birincil bir platform (Wise, Mercury) ve birincil tarafından iyi hizmet verilmeyen niş koridorlar için ikincil bir platform düşünün. Olgun uluslararası ($5M+) için, spot kurlar için genellikle özel bir FX sağlayıcısına (Cambridge, OFX, Convera) ve operasyonel hesaplar için ödeme platformunuza ihtiyacınız vardır. Tek bir platformda çok erken konsolide etmenin maliyeti: işlemlerde %2–4 gizli FX marjı. Çok fazla platformun maliyeti: operasyonel yük ve mutabakat karmaşıklığı.
    </p>

    <h3>FX / çoklu para birimi platformlarını nasıl değerlendiririm?</h3>
    <p>
      Beş kriter: gerçek zamanlı FX marj şeffaflığı (sadece "rekabetçi oranlar" değil), belirli para birimleriniz için koridor kapsamı, mutabakat hızı, kaynak/varış ülkelerinde düzenleyici lisanslama, muhasebe yığınınızla entegrasyon. Taahhüt vermeden önce her koridorda küçük bir işlemle test edin — yayınlanan oranlar ve gerçek oranlar genellikle farklılık gösterir.
    </p>

    <h2 id="training">Ekip eğitimi + bütçe</h2>

    <h3>Ekibim için yapay zeka eğitimine nasıl yatırım yapmalıyım?</h3>
    <p>
      Role göre kademeli yaklaşım. <strong>Herkes için:</strong> 4–8 saatlik ücretsiz Anthropic / DeepLearning.AI / Hugging Face kursları (istem mühendisliği ve yapay zeka temelleri). <strong>Kıdemli mühendisler için:</strong> konferans katılımı (koltuk başına $1k–$3k — AI Engineer Summit, QCon / MLSys'te uygulamalı oturumlar), satıcı sertifikaları (koltuk başına $200–$500) ve kıdemli bir danışmanla 4–6 haftalık çift programlama ($20k–$50k). <strong>Liderlik için:</strong> bilinçli oluşturma/satın alma kararları vermeleri için 4 haftalık bir yapay zeka stratejisi angajmanı ($15k–$30k). 10 kişilik bir ekip için toplam yıllık bütçe: $30k–$80k. ROI: daha hızlı teslimat ve daha iyi araç seçimi sayesinde genellikle 12–18 ay içinde pozitif.
    </p>

    <h2 id="small-biz">Küçük bütçeyle yapay zeka</h2>

    <h3>Küçük işletmeler bütçeyi aşmadan yapay zekayı nasıl kullanabilir?</h3>
    <p>
      Ayda $200'ın altında beş yüksek kaldıraçlı eylem: (1) ekip için ücretli ChatGPT veya Claude katmanı (ayda $20) — gerçek iş için yeterli kullanım ve akıl yürütme derinliği; (2) tekrarlayan görevler için yapılandırılmış istem şablonları (satış iletişimi, müşteri desteği, içerik taslakları) — ücretsiz; (3) mevcut SaaS yığınınız aracılığıyla tek bir taktiksel yapay zeka entegrasyonu (Notion AI, HubSpot AI özellikleri, Intercom Fin) — mevcut aboneliklerde genellikle $0–$50/ay artış; (4) ekip için ücretsiz eğitim — Anthropic kursu, DeepLearning.AI; (5) her şeyi yapma vaadiyle yapay zeka abonelik uygulamalarından kaçının (en iyi araçlardan daha kötü performans gösterirler). Gözden kaçan hamle: ekibinize, kullanmayacakları ek yapay zeka araçları satın almak yerine, halihazırda ödedikleri <a href="/learn/llm">LLM</a>'yi doğru kullanmayı öğretin.
    </p>

    <h2 id="ethics-legal">Etik + yasal hızlı başvurular</h2>

    <h3>Yapay zeka kullanmadan önce hangi etik hususları düşünmeliyim?</h3>
    <p>
      Altı madde: kullanıcılarla şeffaflık, sonuçsal kararlar için insan incelemesi, tarihsel olarak dezavantajlı gruplara karşı önyargı testi, yapay zeka işçilerin yerini aldığında işgücü etkisi, yüksek hacimde çevresel ayak izi, müşteri verileri üzerinde eğitim için onay. Yapılandırılmış bir çerçeve için <a href="/guides/how-to-evaluate-an-ai-tool">bir yapay zeka aracı nasıl değerlendirilir</a> sayfasına bakın.
    </p>

    <h3>Hangi yasal riskleri bilmeliyim?</h3>
    <p>
      Beş alan: veri gizliliği (GDPR / CCPA / sektöre özel), telif hakkı + fikri mülkiyet (tamamen yapay zeka tarafından oluşturulan içerik ABD'de telif hakkına tabi değildir), ifşa gereklilikleri (yapay zeka destekli işe alım / borç verme genellikle ifşa gerektirir), çıktı sorumluluğu (çoğu satıcı bunu reddeder; size ait olabilir), önyargı / ayrımcılık (yapay zeka katılımına bakılmaksızın mevcut yasa geçerlidir). Ayrıntılı bir döküm için <a href="/guides/how-to-evaluate-an-ai-tool">bir yapay zeka aracı nasıl değerlendirilir</a> sayfasına bakın.
    </p>

    <h3>Uyumluluk için yapay zeka karar alma sürecini nasıl belgelendiririm?</h3>
    <p>
      Üç asgari geçerli yapıt: (1) girdi günlüğü — karara hangi veriler girdi; (2) model + sürüm günlüğü — çıktıyı tam olarak hangi model üretti, mümkünse sürüm sabitleme ile; (3) çıktı günlüğü + insan inceleme kaydı — modelin ne döndürdüğü ve bir insanın bunu nasıl incelediği. Düzenlemeye tabi çoğu sektör, nihai kararın yalnızca onaylanmış değil, nitelikli bir kişi tarafından incelendiğine dair bir insan beyanı da gerektirir. Bu üç günlükle başlayın; özel uyumluluk rejiminiz gerektirdikçe daha fazlasını ekleyin.
    </p>

    <h3>Yapay zeka araçlarını kullanırken gizliliği nasıl ele alırım?</h3>
    <p>
      Üç kural: (1) herhangi bir yapay zeka girdisinden önce veri hassasiyetini sınıflandırın; (2) hassasiyeti doğru katmanla eşleştirin — her yerde herkese açık veri, eğitim garantisi olmayan ücretli katmanda dahili veri, kurumsal katmanda veya kendi kendine barındırılan modellerde hassas veri, yalnızca sertifikalı uyumlu araçlarda düzenlemeye tabi veri; (3) mümkün olduğunda ücretli katmanlarda bile tanımlayıcıları (hesap numaraları, tam PII) kaldırın — derinlemesine savunma. Kaymayı yakalamak için yapay zeka kullanımını üç ayda bir denetleyin.
    </p>
  </>
);

export const cta = {
  label: "Yapay zeka satıcınızı puanlayın (yapılandırılmış kontrol listesi)",
  targetSlug: "ai-tool-evaluation-scorecard",
};

export const faq = [
  {
    q: "Yapay zeka danışmanlığı ile yapay zeka stratejisi arasındaki fark nedir?",
    a: "Strateji planlama aşamasıdır (yol haritası, önceliklendirme, satıcı kısa listesi) — 4-12 hafta, $25k-$80k. Danışmanlık uygulamayı içerir (oluşturma, entegre etme, ekibinizi eğitme) — 3-6 ay, $50k-$300k. Terimler birbirinin yerine kullanılır; imzalamadan önce fiilen neyin teslim edildiğini teyit edin.",
  },
  {
    q: "Başarılı fintech şirketleri yapay zekayı nasıl kullanıyor?",
    a: "Beş kanıtlanmış model: dolandırıcılık tespiti, kredi puanlaması (düzenleyici kısıtlamalarla), müşteri desteği seviye 1 otomasyonu, KYC/AML uyumluluk izleme, sıkı düzenleyici çerçeveler dahilinde kişiselleştirilmiş finansal tavsiye. Sıkıcı kullanımlar (dolandırıcılık, uyumluluk) genellikle en iyi ROI'yi sağlar; gösterişli olanlar (yatırım tavsiyesi) en yüksek düzenleyici riski taşır.",
  },
  {
    q: "Ekibim için yapay zeka eğitimine nasıl yatırım yapmalıyım?",
    a: "Kademeli: herkes için ücretsiz temel bilgiler (Anthropic, DeepLearning.AI), kıdemli mühendisler için konferans katılımı (koltuk başına $1k-$3k), liderlik için yapay zeka stratejisi angajmanı ($15k-$30k), uygulamalı mühendisler için danışmanlarla çift programlama ($20k-$50k). 10 kişilik bir ekip için yıllık bütçe: $30k-$80k, genellikle 12-18 ay içinde pozitif ROI.",
  },
  {
    q: "Küçük işletmeler bütçeyi aşmadan yapay zekayı nasıl kullanabilir?",
    a: "Ayda $200 veya daha az: ekip için ücretli LLM katmanı, tekrarlayan görevler için yapılandırılmış istem şablonları, mevcut SaaS'te tek bir taktiksel yapay zeka entegrasyonu, ücretsiz eğitim ve en iyi araçlardan daha kötü performans gösteren yapay zeka abonelik uygulamalarından kaçınma. En çok gözden kaçan hamle: ekibinize halihazırda ödedikleri LLM'yi doğru kullanmayı öğretin.",
  },
];