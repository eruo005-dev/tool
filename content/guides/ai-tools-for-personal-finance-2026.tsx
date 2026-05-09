export const intro = (
  <>
    <p>
      Yapay zeka gerçekten kişisel finans konusunda yardımcı olabilir mi? 2026'da dürüst cevap: evet, çoğu insanın fark etmediği dar kapsamlı yollarla. Yapay zeka hisse senedi seçmede kötüdür. Harcamaları kategorize etmede, finansal mesajlar taslaklamada, hesap özetlerini özetlemede ve belirsiz para endişelerini somut eylemlere dönüştürmede iyidir.
    </p>
    <p>
      Bu rehber, kişisel finans için yüksek etkili yapay zeka uygulamalarının pratik bir listesidir — işe yarayan komutlar, hassas veri paylaşımı gerektirmeyen iş akışları ve ne beklenmesi gerektiğinin sınırları.
    </p>
  </>
);

export const toc = [
  { id: "what-works", label: "Yapay zekanın gerçekten iyi olduğu şeyler" },
  { id: "categorization", label: "Harcama kategorizasyonu + bütçe incelemesi" },
  { id: "prompts", label: "Finansal içgörüler için daha iyi komutlar" },
  { id: "negotiation", label: "Pazarlık + iletişim taslakları" },
  { id: "warnings", label: "Yapay zekanın yapamadığı (ve yapmaması gereken) şeyler" },
];

export const body = (
  <>
    <h2 id="what-works">Yapay zekanın kişisel finans için gerçekten iyi olduğu şeyler</h2>
    <p>
      En yüksek etkili beş uygulama:
    </p>
    <ol>
      <li>
        <strong>Harcama kategorizasyonu.</strong> Banka dökümünüzü yapıştırın. Yapay zeka işlemleri kategoriye göre gruplayabilir, yinelenen ücretleri işaretleyebilir ve "unuttuğunuz abonelikleri" belirleyebilir. Herhangi bir bütçeleme uygulamasından daha hızlıdır çünkü kategorilerinizi öğretmeniz gerekmez.
      </li>
      <li>
        <strong>Hesap özeti özetleme.</strong> 12 sayfalık bir aracı kurum hesap özetini veya emeklilik planı bildirimini yapıştırın. Ücretler, varlık dağılımı ve geçen çeyreğe göre kayda değer değişiklikler hakkında 200 kelimelik bir özet alın.
      </li>
      <li>
        <strong>Pazarlık taslakları.</strong> "Ev sahibime %5 kira indirimi isteyen, belirli piyasa verilerine atıfta bulunan kibar bir e-posta taslağı hazırla." Yapay zeka çerçeveleme ve ifade etmede mükemmeldir.
      </li>
      <li>
        <strong>Finansal terim açıklamaları.</strong> "Roth dönüşüm merdiveninin ne olduğunu, mezun ama SMMM olmayan birine anlatır gibi 200 kelimeyle açıkla." Bir mali danışmana danışma ücreti ödemeden jargonu keser.
      </li>
      <li>
        <strong>Karar ağacı keşfi.</strong> "X TL'm ve Y hedefim varsa, beni takaslarıyla birlikte değerlendirmem gereken 3 ana strateji üzerinde yürüt." Yapay zeka kararı vermez ancak seçenek uzayını yapılandırır.
      </li>
    </ol>

    <h2 id="categorization">Harcama kategorizasyonu + bütçe incelemesi</h2>
    <p>
      Birçok ücretli bütçeleme uygulamasının yerini alan iş akışı:
    </p>
    <ol>
      <li>
        Son 90 günlük banka + kredi kartı işlemlerinizi CSV olarak dışa aktarın.
      </li>
      <li>
        ChatGPT veya Claude'u açın (yükleme + muhakeme derinliği için ücretli katman tercih edilir, kopyala-yapıştır ile ücretsiz de çalışır).
      </li>
      <li>
        Şununla yapıştırın: "Her işlemi kategorize et. Tüm yinelenen ücretleri belirle. Harcamaları kategoriye göre topla. Herhangi bir anormalliği vurgula — alışılmadık derecede büyük veya yeni satıcı kalıpları."
      </li>
      <li>
        Çıktıyı inceleyin. Bariz hataları yeniden kategorize edin. Takip soruları sorun: "Bu çeyrekte geçen çeyreğe göre neye daha fazla harcıyorum?" veya "Hayatımı fazla etkilemeden iptal edebileceğim 5 yinelenen ücret hangisi?"
      </li>
    </ol>
    <p>
      Kritik: <strong>yapıştırmadan önce kişisel tanımlayıcıları çıkarın</strong>. Hesap numaraları, tam kart numaraları, adresler — bunların hiçbirinin konuşmada olması gerekmez. Çoğu banka dışa aktarmada karartmanıza izin verir. Yeni bir ChatGPT konuşması kullanın; bunu hafızaya veya kalıcı bağlama bağlamayın.
    </p>

    <h2 id="prompts">Finansal içgörüler için daha iyi komutlar</h2>
    <p>
      İnsanların finans için yapay zeka ile yaptığı en büyük hata: belirsiz sorular sormak. "Bütçe yapmama yardım et" size genel tavsiyeler verir. "Hisse senedine mi yoksa tahvile mi yatırım yapmalıyım?" size ders kitabı cevabı verir.
    </p>
    <p>
      Gerçekten işe yarayan komut yapısı:
    </p>
    <pre><code>{`Bağlam: [yaş]'ım, [gelir] kazanıyorum, [varlıklar]'ım var, [borç]'um var
ve [bölge]'de yaşıyorum. Hedefim [tarih]'e kadar [spesifik hedef].

Kısıtlamalar: Ayda [miktar] biriktirebiliyorum, risk toleransım
[düşük/orta/yüksek] ve bu paraya önümüzdeki 5 yıl içinde
[ihtiyacım olacak / olmayacak].

Soru: [spesifik soru]

Çıktı formatı: Bana 3 strateji ver, her biri: nasıl çalıştığı,
takasları, bu ay fiilen ne yapmam gerektiği.`}</code></pre>
    <p>
      Bunun yaptığı üç şey:
    </p>
    <ul>
      <li>Spesifikliği zorlar — girdiler somut olduğunda yapay zeka genel tavsiyelerin arkasına saklanamaz.</li>
      <li>Birden çok seçenek sunar — iyi finansal kararlar genellikle tek cevaplı değil, takaslarla ilgilidir.</li>
      <li>Eyleme dönüştürülebilirlik talep eder — "bu ay fiilen ne yapmam gerekir" cevabın gerçek mi yoksa palavra mı olduğunun testidir.</li>
    </ul>

    <h2 id="negotiation">Pazarlık + iletişim taslakları</h2>
    <p>
      Çoğu insanın yararlanmadığı en ucuz finansal kazanç: yapay zeka destekli pazarlık taslakları. Sigorta, kira, maaş, satıcı faturaları — hepsi pazarlık edilebilir, hepsi sakin ve profesyonelce ifade edilmiş bir taleple iyileştirilir.
    </p>
    <p>İşe yarayan örnekler:</p>
    <ul>
      <li>
        "İnternet sağlayıcımdan sadakat indirimi isteyen 100 kelimelik bir e-posta taslağı hazırla. 3 yıldır müşteriyim ve rakip teklifler X TL daha ucuz."
      </li>
      <li>
        "[Sebep]'i gerekçe göstererek X TL daha fazla isteyen bir maaş pazarlığı e-postası taslağı hazırla. Ton: kendine güvenen, hak iddia etmeyen. Uzlaşmaya kapı açan 1 satır ekle."
      </li>
      <li>
        "Sigorta şirketime [hayat değişikliği] nedeniyle yeniden fiyat teklifi talep eden kibar bir e-posta taslağı hazırla."
      </li>
    </ul>
    <p>
      Göndermeden önce yapay zeka taslaklarını her zaman düzenleyin — biraz tuhaf okunurlar ve insanlar bunu hisseder. 5 dakikalık düzenleme geçişi buna değer.
    </p>

    <h2 id="warnings">Yapay zekanın yapamadığı (ve yapmaması gereken) şeyler</h2>
    <p>
      Geçmemeniz gereken çizgiler:
    </p>
    <ul>
      <li>
        <strong>Hisse senedi seçimi.</strong> Yapay zeka piyasaları tahmin etmede kötüdür. 2026'da size "yapay zeka hisse senedi seçici" satan biri hava satıyordur. Yapay zekayı yatırım teziniz olarak kullanmayın.
      </li>
      <li>
        <strong>Vergi beyannamesi.</strong> Yapay zeka vergi yasasının %80'ini doğru, %20'sini feci şekilde yanlış anlar (hak kazanmadığınız kesintiler, AGI eşikleri, eyalete özgü kurallar). Bir SMMM kullanın veya TurboTax / FreeTaxUSA kullanın, ham yapay zeka değil.
      </li>
      <li>
        <strong>Hesap değişiklikleri / transferleri.</strong> Bir satıcı teklif etse bile, yapay zeka aracının sizin adınıza finansal işlemler yapmasına asla izin vermeyin. Hata oranı, geri döndürülemez para hareketleri için yeterince düşük değildir.
      </li>
      <li>
        <strong>Sigorta talepleri.</strong> Spesifik, zamana duyarlı ve yanlış beyan durumunda yasal sonuçları olan konular. Bir insanla konuşun.
      </li>
      <li>
        <strong>Düzenlemeye tabi herhangi bir şey.</strong> Bir finansal işlem lisans gerektiriyorsa (broker, CFP, SMMM), yapay zeka lisanslı değildir. Ona bir danışman olarak değil, bir araştırma asistanı olarak davranın.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Yapay zeka komut oluşturucuyu dene (ücretsiz)",
  targetSlug: "ai-prompt-generator",
};

export const faq = [
  {
    q: "Yapay zeka kişisel finansımı daha iyi yönetmeme gerçekten yardımcı olabilir mi?",
    a: "Dar görevler için evet: harcama kategorizasyonu, hesap özeti özetleme, pazarlık taslakları, finansal terim açıklamaları, karar alanı keşfi. Hisse senedi seçimi, vergi beyannamesi verme, işlem yürütme veya düzenlemeye tabi herhangi bir şey için hayır. Yapay zekaya bir mali danışman olarak değil, bir araştırma ve taslak hazırlama asistanı olarak davranın.",
  },
  {
    q: "Daha iyi finansal içgörüler elde etmek için yapay zeka komutlarını nasıl kullanabilirim?",
    a: "Belirsiz sorular sormayı bırakın. Yapılandırılmış bir komut kullanın: durumunuzu (yaş, gelir, varlıklar, borç, bölge), kısıtlamaları (tasarruf oranı, risk toleransı, zaman çizelgesi), spesifik soruyu ve gerekli çıktı formatını (ör. 'takaslarıyla birlikte 3 strateji') belirtin. Spesifik girdi, spesifik çıktı demektir.",
  },
  {
    q: "Yapay zeka finansal analizi için daha iyi komutlar nasıl yazarım?",
    a: "Bağlam (kategoriler değil sayılar), kısıtlamalar (sizin için gerçekten mümkün olan), açık format gereksinimleri (seçenek sayısı, çıktı yapısı) ve bir takip döngüsü (yapay zekadan kendi cevabına meydan okumasını isteyin) ekleyin. Varsayımsal 'yapmalı mıyım' sorularından kaçının — '3 yaklaşımı karşılaştır' şeklinde ifade edin.",
  },
  {
    q: "Finansal verileri yapay zeka araçlarıyla paylaşmak güvenli mi?",
    a: "Önce tanımlayıcıları çıkarın (hesap numaraları, tam kart numaraları, adresler). Kalıcı hafızası olmayan yeni konuşmalar kullanın. Ücretsiz katmanlar verileriniz üzerinde eğitim yapabilir — gizlilik politikasını kontrol edin. Yüksek hassasiyetli veriler için, eğitim yapmama garantili kurumsal katmanları kullanın veya kendi kendine barındırılan modellerle yerel olarak işleyin.",
  },
];