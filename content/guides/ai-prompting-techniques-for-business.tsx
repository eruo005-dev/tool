/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Prompt mühendisliği, AI'ın bir üretkenlik çarpanı mı yoksa genel bir cevap makinesi mi olduğu arasındaki farktır. İyi haber: 5-6 desen, pratik iş kullanım durumlarının %80'ini kapsar. Bir prompt mühendisliği sertifikasına ihtiyacınız yok — birkaç güvenilir şablona ve bunları kullanma disiplinine ihtiyacınız var.
    </p>
    <p>
      Bu rehber, sezgiye dayalı promptlamadan sürekli olarak daha iyi performans gösteren desenleri kapsar; buna doğrulama zinciri (modelin kendisiyle aynı fikirde olup olmadığını sorgulayan ve halüsinasyonları azaltan teknik) ve bunların teklif taslağı hazırlama, finansal analiz ve yasal belge incelemesi gibi yaygın iş akışlarına nasıl uygulanacağı dahildir.
    </p>
  </>
);

export const toc = [
  { id: "patterns", label: "İşe yarayan 6 desen" },
  { id: "operations", label: "İş operasyonları için prompt mühendisliği" },
  { id: "chain", label: "Doğrulama zinciri" },
  { id: "financial", label: "Finansal analiz için daha iyi promptlar" },
  { id: "writing", label: "Teklifler + yasal belgeler için AI" },
];

export const body = (
  <>
    <h2 id="patterns">İş için işe yarayan 6 prompt deseni</h2>

    <h3>1. Rol + bağlam + görev + biçim</h3>
    <p>
      Herhangi bir iş görevi için en güvenilir prompt yapısı:
    </p>
    <pre><code>{`Sen [ilgili uzmanlığa sahip rol]'sün.
Bağlam: [durum, temel gerçekler, kısıtlamalar].
Görev: [özel talep].
Biçim: [öğe sayısı, yapı, uzunluk].`}</code></pre>
    <p>
      Örnek: &ldquo;Sen kıdemli bir finansal analistsin. Bağlam: [bu rakamlarla] bir SaaS şirketinin Q3 10-Q'sunu inceliyorum. Görev: en endişe verici 3 eğilimi belirle. Biçim: madde işaretli liste, eğilim başına bir cümle, endişe verici olan belirli rakamı dahil et.&rdquo; &ldquo;Bu 10-Q'yu analiz et&rdquo; ifadesini açık ara farkla yener.
    </p>

    <h3>2. Az örnekli gösterim</h3>
    <p>
      Modele istediğiniz girdi/çıktının 2-3 örneğini gösterin, ardından yeni bir girdi verin. Model, biçiminizi ve stilinizi yalnızca açıklamadan çok daha güvenilir bir şekilde yakalar.
    </p>
    <pre><code>{`Müşteri geri bildirimlerini nasıl özetlediğime dair örnekler:

Girdi: "Kamerayı açtığımda uygulama çökmeye devam ediyor"
Çıktı: { kategori: "hata", şiddet: "yüksek", alan: "kamera" }

Girdi: "Karanlık mod seçeneği olsa harika olurdu"
Çıktı: { kategori: "özellik_talebi", şiddet: "düşük", alan: "arayüz" }

Şimdi bunu kategorize et:
Girdi: "[yeni geri bildirim]"
Çıktı:`}</code></pre>

    <h3>3. <a href="/learn/chain-of-thought">Düşünce zinciri</a></h3>
    <p>
      Herhangi bir karmaşık akıl yürütme görevine &ldquo;adım adım düşün&rdquo; veya &ldquo;cevaplamadan önce, dikkate alınması gerekenleri listele&rdquo; ekleyin. Modeli çalışmasını yapılandırmaya zorlar, bu da genellikle doğruluğu artırır.
    </p>
    <p>
      Örnek: &ldquo;Bir fiyatlandırma modeli önermeden önce, ilgili hususları (müşteri ödeme alışkanlıkları, rekabet, ödeme istekliliği, operasyonel karmaşıklık) listeleyin, ardından bir öneride bulunun.&rdquo;
    </p>

    <h3>4. Ayrıştırma</h3>
    <p>
      Büyük bir soru sormayın; 3 küçük soru sorun. &ldquo;Bana bir pazarlama planı yaz&rdquo; genel çıktı üretir. &ldquo;[Ürün] için doğru hedef müşteri kim? Hangi acıyı hissediyorlar? Onlara en iyi hangi 3 kanal ulaşır?&rdquo; — üç odaklı prompt çok daha iyi çıktı üretir.
    </p>

    <h3>5. Öz-eleştiri</h3>
    <p>
      Bir cevap aldıktan sonra şunu sorun: &ldquo;Bunda yanlış olan ne? Neyi kaçırdın? Bir eleştirmen ne derdi?&rdquo; Takip sorusu, ilk yanıtın üstünkörü geçtiği sorunları ortaya çıkarır. Genellikle aksi takdirde kaçıracağınız sorunların %30-50'sini yakalar.
    </p>

    <h3>6. Kısıtlama + kişilik enjeksiyonu</h3>
    <p>
      &ldquo;Bu sunumu inceleyen şüpheci bir yatırımcı olarak yanıtla.&rdquo; &ldquo;Riskleri belirleyen bir güvenlik mimarı gibi davran.&rdquo; Kişilikler, modelin eğitiminin farklı bölümlerini etkinleştirir. Bir içeriğin birden çok mercekten incelenmesini sağlamak için kullanışlıdır.
    </p>

    <h2 id="operations">İş operasyonları için prompt mühendisliği</h2>
    <p>
      Yüksek kaldıraçlı operasyonel kullanım durumları:
    </p>
    <ul>
      <li>
        <strong>Müşteri desteği triyajı:</strong> sınıflandır + yönlendir + taslak yanıt.
        Doğru kategorize edilmiş 5 örnek biletle az örnekli desen.
      </li>
      <li>
        <strong>Satış adayı bulma:</strong> aday hesapları araştır, uyuma göre önceliklendir, iletişim taslağı hazırla. Açık uyum kriterleriyle rol + bağlam + görev deseni.
      </li>
      <li>
        <strong>Belge işleme:</strong> sözleşmelerden, faturalardan, makbuzlardan yapılandırılmış veri çıkarma. Örnek çıkarmalarla az örnekli desen.
      </li>
      <li>
        <strong>Dahili S&amp;C:</strong> RAG deseni. Bilgi tabanınızdan ilgili belgeleri alın, ardından alınan bağlam + soru ile prompt yapın. <a href="/learn/hallucination">Halüsinasyonu</a> azaltmak için &ldquo;cevap bağlamda yoksa bilmiyorum de&rdquo; ekleyin.
      </li>
      <li>
        <strong>Toplantı özetleme:</strong> eylem maddeleri, kararlar, açık sorularla yapılandırılmış çıktı. Biçim belirtilmiş desen kazanır.
      </li>
      <li>
        <strong>Kod incelemesi:</strong> &ldquo;Bu kodu [güvenlik / performans / okunabilirlik] odaklı kıdemli bir mühendis olarak incele. Satır numaralarıyla belirli sorunları listele.&rdquo; Kişilik + biçim kombinasyonu.
      </li>
    </ul>

    <h2 id="chain">Doğrulama zinciri (halüsinasyon katili)</h2>
    <p>
      Doğrulama zinciri, olgusal görevlerde halüsinasyonları önemli ölçüde azaltan çok adımlı bir tekniktir. Desen:
    </p>
    <ol>
      <li>
        <strong>Adım 1:</strong> Modelden soruyu cevaplamasını isteyin.
      </li>
      <li>
        <strong>Adım 2:</strong> Modelden cevabındaki her iddia için doğrulama soruları oluşturmasını isteyin (&ldquo;Bunun doğru olduğunu doğrulamak için hangi soruları sormam gerekir?&rdquo;).
      </li>
      <li>
        <strong>Adım 3:</strong> Modelin her doğrulama sorusunu bağımsız olarak cevaplamasını sağlayın (ayrı promptlarda en iyisi — ilk cevabına sabitlenmesini önler).
      </li>
      <li>
        <strong>Adım 4:</strong> Uzlaştırın. Doğrulama cevapları orijinal cevapla nerede çelişiyor? Bunlar halüsinasyonlardır.
      </li>
    </ol>
    <p>
      Yayınlanmış araştırma (Dhuliawala ve ark., 2023), CoVe'nin uzun biçimli soru cevaplamada olgusal hataları %30-50 oranında azalttığını buldu. Pratikte, en çok yüksek riskli çıktılar için kullanışlıdır — finansal analiz, yasal özetler, uyum incelemeleri.
    </p>
    <p>
      Hızlı CoVe şablonu:
    </p>
    <pre><code>{`Soru: [sorunuz]
İlk cevap: [modelin ilk yanıtı]

Şimdi, cevapları ilk cevaptaki iddiaları doğrulayacak
veya çürütecek 3-5 doğrulama sorusu oluşturun.

Her doğrulama sorusunu bağımsız olarak, belirli kaynağı
veya gerekçeyi belirterek cevaplayın.

Doğrulama cevapları ilk cevapla nerede çelişiyor?`}</code></pre>

    <h2 id="financial">Finansal analiz için daha iyi promptlar</h2>
    <p>
      Finansal analiz, belirsiz promptların gerçek paraya mal olduğu yerdir. Yapılandırılmış desen:
    </p>
    <pre><code>{`Sen bunu [amaç: yatırım / satın alma / borç verme / kişisel]
için inceleyen kıdemli bir SMMM'sin.

Bağlam: [finansalları, birimler ve zaman dilimi net
olacak şekilde yapıştırın].

Görevler (her birini ayrı ayrı yapın):
1. Olağandışı kalemleri belirleyin (boyut, değişim oranı,
   emsallerle tutarsızlık).
2. Karşılaştırılabilirliği etkileyen muhasebe seçimlerini
   işaretleyin (ör. hasılat tanıma, aktifleştirme).
3. [Amaçla ilgili belirli oranları veya metrikleri] hesaplayın.
4. Yönetime soracağınız 3 soruyu not edin.

Biçim: görev başına numaralı liste. Her bulgu için belirli
dolar tutarını veya yüzdeyi belirtin.`}</code></pre>
    <p>
      Modelin sayısal çalışmasını her zaman birincil kaynağa karşı doğrulayın — finansal halüsinasyonlar (yanlış dolar tutarları, yanlış mali yıl) yaygındır. Yüksek riskli analizler için doğrulama zincirini kullanın.
    </p>

    <h2 id="writing">Teklifler ve yasal belgeler için AI</h2>
    <p>
      Teklifler, sözleşmeler, mutabakat zabıtları — AI ilk taslaklarda parlar; insanlar incelemeyi üstlenmelidir.
    </p>
    <p>
      Teklif taslağı hazırlama deseni:
    </p>
    <pre><code>{`[Müşteri]'ye [hizmet] için 1 sayfalık bir teklif taslağı hazırla.

Bağlam:
- Müşteri: [web sitesi özetini yapıştırın]
- Hedefleri: [keşifte söyledikleri]
- Kapsamımız: [teslim edeceklerimizin 3-5 maddesi]
- Fiyatlandırma yaklaşımı: [sabit / zaman+malzeme / retainer]
- Zaman çizelgesi: [hafta]

Yapı:
1. Yönetici özeti (2-3 cümle)
2. Yaklaşım (3-5 madde)
3. Teslimatlar (numaralı liste)
4. Zaman çizelgesi (tablo biçimi)
5. Yatırım (tek bir sayı değil, aralık)
6. Sonraki adım

Ton: profesyonel, kendinden emin, spesifik (argo yok).`}</code></pre>
    <p>
      Yasal belgeler için (Gizlilik Sözleşmeleri, sözleşmeler, ekler): AI ilk taslaklar ve kırmızı çizgi çekme konusunda iyidir. AI, yargı yetkisine özgü uyum ve içtihat hukuku kaynaklı nüans konusunda kötüdür. Önemli bir şeyi imzalamadan önce her zaman gerçek bir avukata incelettirin.
    </p>
    <p>
      Yararlı bir kırmızı çizgi deseni:
    </p>
    <pre><code>{`Bu sözleşmeyi [benim rolüm: satıcı / müşteri] perspektifinden
inceleyin. Şunları belirleyin:
- Beni dezavantajlı duruma sokan maddeler
- Eksik korumalar
- Belirsiz dil
- Eksik olan sektör standardı öğeler

Her biri için, belirli değiştirme diliyle bir kırmızı çizgi
önerin.`}</code></pre>
  </>
);

export const cta = {
  label: "Ücretsiz AI prompt oluşturucuyu deneyin",
  targetSlug: "ai-prompt-generator",
};

export const faq = [
  {
    q: "Prompt mühendisliği iş operasyonlarımı nasıl iyileştirebilir?",
    a: "Altı temel desen: rol + bağlam + görev + biçim, az örnekli gösterim, düşünce zinciri, ayrıştırma, öz-eleştiri, kişilik enjeksiyonu. Destek triyajına, satış adayı bulmaya, belge işlemeye, dahili S&amp;C'ye (RAG), toplantılara ve kod incelemesine uygulayın. Yapılandırılmış promptlar, sezgiye dayalı promptlamadan sürekli olarak daha iyi performans gösterir.",
  },
  {
    q: "'Doğrulama zinciri' AI kararları için ne anlama geliyor?",
    a: "Halüsinasyonları azaltmak için çok adımlı bir teknik: (1) ilk cevabı al, (2) her iddia için doğrulama soruları oluştur, (3) bunları bağımsız olarak cevapla, (4) çelişkileri uzlaştır. Yayınlanmış araştırma, uzun biçimli S&amp;C'de olgusal hatalarda %30-50 azalma gösteriyor. En çok finansal analiz veya yasal özetler gibi yüksek riskli çıktılar için kullanışlıdır.",
  },
  {
    q: "AI daha iyi iş teklifleri ve yasal belgeler yazmama yardımcı olabilir mi?",
    a: "İlk taslaklar ve kırmızı çizgi çekme için evet. Yargı yetkisine özgü uyum ve içtihat hukuku nüansı için hayır. Teklifler için yapılandırılmış teklif desenini (bağlam + yapı + ton) kullanın; sözleşmeler için perspektiften kırmızı çizgi desenini kullanın. Önemli yasal belgeleri her zaman gerçek bir avukata incelettirin.",
  },
  {
    q: "AI finansal analizi için daha iyi promptlar nasıl yazarım?",
    a: "Rol + bağlam + görevler + biçim desenini kullanın. Amacı belirtin (yatırım / satın alma / borç verme). Ayrı görevlere ayrıştırın (olağandışı kalemler, muhasebe seçimleri, oranlar, yönetim soruları). Sayısal çalışmayı birincil kaynağa karşı doğrulayın — finansal halüsinasyonlar yaygındır. Yüksek riskli analizler için doğrulama zincirini uygulayın.",
  },
];