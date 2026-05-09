import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Metinden konuşmaya teknolojisi, 2020 civarında robotik sesli bir yenilikten
      gerçekten insansı bir araca dönüştü. Bu dönüşüm, eski birleştirme ve formant
      sentezi yaklaşımlarının yerini sinirsel TTS modellerinin (WaveNet, Tacotron,
      ardından Glow-TTS ve VALL-E) almasıyla gerçekleşti. Fark çarpıcı &mdash;
      modern TTS, dinleyicilerin sentetik olduğunu fark etmediği sesli kitap
      anlatımı, podcast reklamları, IVR sistemleri ve erişilebilirlik araçlarında
      kullanılıyor. Ancak TTS'yi iyi kullanmak, metni kopyalayıp yapıştırmaktan
      daha fazlasını gerektiriyor. Bu kılavuz, hassas kontrol için SSML işaretlemesini,
      ses seçim kriterlerini, prozodiyi (hız, perde, ses seviyesi), tarayıcının
      ücretsiz Web Speech API'si ile bulut TTS hizmetleri arasındaki ayrımı ve
      "teknik olarak metni okur" ile "ekran okuyucu kullanıcıları için gerçekten
      kullanışlıdır" arasındaki farkı yaratan erişilebilirlik hususlarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Sinirsel TTS'in farklı yaptığı şey</h2>
    <p>
      Eski TTS hatları, kaydedilmiş fonemleri (küçük konuşma parçaları) birleştirir
      ve birleşim yerlerini yumuşatırdı. Çıktı, bölümlere ayrılmış ve robotik
      geliyordu. Sinirsel TTS, dalga formunu doğrudan metinden derin öğrenme
      kullanarak üretir &mdash; ya iki aşamalı bir hatla (metinden mel-spektrograma,
      ardından sinirsel vokoderden dalga formuna) ya da uçtan uca (doğrudan metinden
      dalga formuna). Sonuç, doğal prozodi, nefes alma ve tonlamaya sahiptir.
    </p>
    <p>
      Günümüzün en son teknoloji sistemleri, 3&ndash;5 saniyelik referans sesten
      bir sesi klonlayabilir, duygusal tonu eşleştirebilir ve hatta bir konuşmacının
      aksanını diller arasında koruyabilir. Bunun karşılığı hesaplama gücüdür
      &mdash; sinirsel TTS, gerçek zamanlı üretim için bir GPU gerektirir; oysa eski
      birleştirme sistemleri 2005'te telefonlarda çalışıyordu.
    </p>

    <h2>SSML: TTS için işaretleme dili</h2>
    <p>
      Konuşma Sentezi İşaretleme Dili (SSML), metnin nasıl işleneceğini kontrol
      etmenizi sağlayan bir W3C standardıdır. TTS'e özgü etiketlerle HTML'e benzer.
    </p>
    <pre>{`<speak>
  <p>
    Eğitime hoş geldiniz.
    <break time="500ms"/>
    Bugün üç konuyu ele alacağız:
    SSML, <emphasis level="strong">ses seçimi</emphasis>
    ve <prosody rate="slow">dikkatlice tempolu anlatım</prosody>.
  </p>
  <p>
    Toplantı <say-as interpret-as="time">15:00</say-as>'te başlıyor
    ve kimlik <say-as interpret-as="characters">ABC123</say-as>'tür.
  </p>
</speak>`}</pre>
    <p>
      Tüm TTS motorları tüm SSML etiketlerini desteklemez. AWS Polly ve Google
      Cloud TTS geniş SSML desteği sunar; OpenAI'nin TTS API'si şu anda yalnızca
      düz metni destekler. SSML yazmadan önce motorunuzun belgelerini kontrol edin.
    </p>

    <h2>Temel SSML etiketleri</h2>
    <pre>{`<break time="500ms"/>        500 milisaniye duraklama
<prosody rate="slow">        Daha yavaş konuşma
<prosody rate="fast">        Daha hızlı
<prosody pitch="+3st">       Perdeyi 3 yarım ton yükselt
<prosody volume="+6dB">      Daha yüksek ses
<emphasis level="strong">    Kelimeleri vurgula
<say-as interpret-as="date"> "2024-04-23"ü "23 Nisan" olarak oku
<say-as interpret-as="telephone"> Rakamları telefon numarası olarak oku
<say-as interpret-as="characters"> Harf harf hecele
<phoneme alphabet="ipa" ph="t@'meItoU">domates</phoneme>
<sub alias="Dünya Sağlık Örgütü">DSÖ</sub>`}</pre>

    <h2>Ses seçimi</h2>
    <p>
      Ses, çıktının kişiliğini belirler. Çoğu bulut TTS hizmeti, dil başına
      düzinelerce ses sunar. Amazon Polly'de Matthew, Joanna, Ivy; Google'da
      wavenet sesleri (Male A/B/C kodlu); Azure'da 100'den fazla dilde 400'den
      fazla sinirsel ses bulunur.
    </p>
    <p>
      Ses seçim kriterleri: içeriğin formalitesine uygun (haber tarzı ses vs
      sohbet havası), hedeflediğiniz demografiye uygun (yaş, aksan, cinsiyet) ve
      gerçek metninizle test edin &mdash; bazı sesler uzun cümleleri diğerlerinden
      daha iyi işler.
    </p>

    <h2>Prozodi: hız, perde, ses seviyesi</h2>
    <p>
      Hız, yüzde olarak ölçülür ("yavaş", "orta", "hızlı" veya
      <code>%50</code>&ndash;<code>%200</code>). Tipik tercihler:
    </p>
    <pre>{`İçerik türü              Önerilen hız
Sesli kitap anlatımı      %90-95 (biraz yavaş, kelimelerin oturmasına izin ver)
Podcast reklam okuması    %100 (doğal)
Haber / duyurular         %105-110
Eğitim seslendirmesi      %90-100
Erişilebilirlik (ekran okuyucu) kullanıcı tercihi; varsayılan %100`}</pre>
    <p>
      Perde yarım ton (<code>-20st</code> ile <code>+20st</code>) veya yüzde olarak.
      Küçük kaymalar (+/- 2 yarım ton) bir diyalogdaki karakterleri ayırt etmek
      veya bir marka sesine uymak için kullanışlıdır; büyük kaymalar (+/- 10st)
      çizgi film gibi gelir.
    </p>
    <p>
      Ses seviyesi dB (<code>-40dB</code> ile <code>+6dB</code>) veya adlandırılmış
      seviyelerde. Nadiren gerekir &mdash; bunun yerine post-prodüksiyonda
      normalleştirin.
    </p>

    <h2>Web Speech API (tarayıcı tabanlı)</h2>
    <p>
      Tarayıcılar, <code>SpeechSynthesis</code> API'si aracılığıyla ücretsiz bir
      TTS motoru içerir. API anahtarı yok, karakter başına maliyet yok, çevrimdışı
      çalışır. Kalite işletim sistemine göre büyük ölçüde değişir &mdash; macOS ve
      iOS, Apple'ın yüksek kaliteli sinirsel seslerini kullanır; Windows iyi sinirsel
      sesler kullanır; Linux'ta genellikle yalnızca temel eSpeak sesleri bulunur.
    </p>
    <pre>{`const utter = new SpeechSynthesisUtterance("Merhaba dünya.");
utter.rate = 1.0;
utter.pitch = 1.0;
utter.volume = 1.0;
utter.voice = speechSynthesis.getVoices()
  .find(v => v.name.includes("Samantha"));
speechSynthesis.speak(utter);`}</pre>
    <p>
      Web Speech API'nin SSML desteği yoktur. Söyleyiş başına hız, perde, ses
      seviyesini kontrol edebilirsiniz, ancak cümle ortasında vurgu veya duraklama
      yapamazsınız. Daha zengin kontrol için bulut TTS kullanın.
    </p>

    <h2>Bulut TTS karşılaştırması</h2>
    <pre>{`Sağlayıcı      Sesler   Sinirsel   SSML   Fiyat (1M karakter başına)
AWS Polly       60+      Evet       Tam    $4 standart, $16 sinirsel
Google Cloud    220+     Evet       Tam    $4-$16 (katmana göre)
Azure           400+     Evet       Tam    $4-$16
ElevenLabs      düzinelerce Evet   Kısmi  $5-$30 (1M karakter başına)
OpenAI TTS      6        Evet       Yok    $15 (1M karakter başına)`}</pre>
    <p>
      Uzun biçimli içeriklerde (sesli kitaplar, podcast prodüksiyonu) maliyet
      önemlidir; 50.000 karakterlik bir bölüm ~$0,20&ndash;$0,80'dir. Gerçek
      zamanlı uygulamalarda (telefon sistemleri, oyunlar) gecikme daha önemlidir.
      ElevenLabs ve Azure, etkileyici anlatım için yaygın tercihlerdir; AWS ve
      Google ise yüksek hacimli IVR için.
    </p>

    <h2>Telaffuz kontrolü</h2>
    <p>
      TTS motorları alışılmadık kelimeleri, marka adlarını ve teknik terimleri
      yanlış telaffuz eder. Düzeltmeler:
    </p>
    <p>
      <strong>Metinde fonetik olarak yazın.</strong> "Metinde 'kubernetes'i
      'koo-bur-NET-eez' olarak yazın." İşe yarar ancak editörlere tuhaf görünür.
    </p>
    <p>
      <strong>SSML fonem etiketlerini kullanın.</strong> <code>&lt;phoneme alphabet=&quot;ipa&quot; ph=&quot;ku:b@rneItIs&quot;&gt;kubernetes&lt;/phoneme&gt;</code>.
      Hassastır ancak IPA bilgisi gerektirir.
    </p>
    <p>
      <strong>Özel bir sözlük tanımlayın.</strong> AWS Polly ve Google, tüm
      isteklere uygulanan bir sözlük dosyası yüklemeyi destekler &mdash; birçok
      metinde kullanılan marka adları için en iyisidir.
    </p>

    <h2>Ses çıktı formatı</h2>
    <p>
      Bulut TTS tipik olarak MP3 (iyi varsayılan, küçük dosya, evrensel destek),
      WAV veya PCM (kayıpsız, büyük, ileri düzenleme için iyi), OGG (MP3'ten
      küçük, daha az evrensel) veya gerçek zamanlı oynatma için bir
      <a href="/learn/stream">akış</a> formatı sunar.
    </p>
    <p>
      Nihai bir podcast veya video teslimatı için WAV veya 320kbps MP3 isteyin,
      herhangi bir son işleme (sıkıştırma, EQ, -16 LUFS'ye ses yüksekliği
      normalleştirme) uygulayın, ardından nihai formata aktarın. Ham TTS MP3'ü
      olduğu gibi kullanmayın &mdash; son işleme onu daha profesyonel yapar.
    </p>

    <h2>Erişilebilirlik hususları</h2>
    <p>
      Ekran okuyucu kullanıcıları günde saatlerce TTS çıktısı tüketir. TTS
      erişilebilir içerik için birkaç kural:
    </p>
    <p>
      Kullanıcının seçtiği ses ve hıza saygı gösterin &mdash; "zaman kazanmak için"
      hızlı bir hızı sabit kodlamayın. Ekran okuyucu kullanıcıları pratikle
      tipik olarak dakikada 300+ kelime hızında dinler.
    </p>
    <p>
      TTS motorlarının doğru yorumlayacağı noktalama işaretleri sağlayın. Bir
      tire (&mdash;) duraklama oluşturur; parantezler ifadeleri gruplar; bir
      cümleden sonra em-boşluk doğal nefes almaya izin verir. Motorların harfi
      harfine seslendirebileceği Unicode süslemelerinden ve özel karakterlerden
      kaçının ("yıldız", "siyah-küçük-kare").
    </p>
    <p>
      Erişilebilirlik odaklı uygulamalar için, bir sesi sabit kodlamak yerine bir
      ses seçme arayüzü sunun.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Tüm motorların SSML'yi desteklediğini varsaymak.</strong> OpenAI TTS,
      SSML'yi tamamen yok sayar. İşaretlemenizi gerçek motorunuza karşı test edin.
    </p>
    <p>
      <strong>Alternatifleri dinlemeden varsayılan sesi kullanmak.</strong>{" "}
      Ses seçimi, algılanan kaliteyi önemli ölçüde değiştirir. Karar vermeden önce
      aynı metin üzerinde üç veya dört sesi karşılaştırın.
    </p>
    <p>
      <strong>Uzun biçimli içerik için çok hızlı konuşmak.</strong> Sesli kitap
      anlatımında %100 hız tipik olarak çok hızlıdır; %90&ndash;95 kelimelerin
      oturmasını sağlar.
    </p>
    <p>
      <strong>Yanlış telaffuzları görmezden gelmek.</strong> Marka adları, ürün
      adları ve teknik jargon neredeyse her zaman sözlük girişleri veya fonem
      etiketleri gerektirir.
    </p>
    <p>
      <strong>Ham TTS'yi son işleme olmadan göndermek.</strong> Ses yüksekliği
      normalleştirme, EQ ve ince sıkıştırma, "robot okuması" ile "profesyonel
      anlatım" arasındaki farktır.
    </p>
    <p>
      <strong>Başta ve sonda sessizliği unutmak.</strong> Bulut TTS genellikle
      hemen konuşmaya başlayan çıktı üretir. Doğal tempo için her iki uca
      300&ndash;500ms sessizlik ekleyin.
    </p>
    <p>
      <strong>Gerektiğinde açıklama yapmadan sinirsel sesleri kullanmak.</strong>
      Bazı yargı bölgeleri, reklamlarda ve siyasi içeriklerde yapay zeka
      tarafından oluşturulan sesin açıklanmasını gerektirir.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Ses kontrolleriyle metinden konuşma oluşturmak için{" "}
      <a href="/tools/text-to-speech">metinden konuşmaya aracını</a> kullanın.
      Oluşturulan dosyanın başını ve sonunu düzeltmek için{" "}
      <a href="/tools/audio-trimmer">ses kırpma aracıyla</a> eşleştirin ve
      sentezlenen sesten altyazılar için bir transkript oluşturmak istediğinizde
      bir gidiş-dönüş iş akışında{" "}
      <a href="/tools/speech-to-text">konuşmadan metne aracını</a> kullanın.
    </p>
  </>
);