import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Konuşmadan metne dönüştürme, 2022 civarında OpenAI&rsquo;nin Whisper modelinin temiz İngilizce ses kayıtlarında yaklaşık %5 kelime hata oranına ulaşmasıyla bir yenilik olmaktan çıktı &mdash; bu, insan transkripsiyon uzmanlarının doğruluğuna yakın. Whisper&rsquo;dan önce, otomatik transkripsiyon &ldquo;yoğun düzeltme gerektiren kullanılabilir&rdquo; ile &ldquo;komik&rdquo; arasında değişiyordu. Artık hızlı, standart donanımda ücretsiz ve prodüksiyon altyazıları, podcast gösteri notları ve toplantı özetleri için yeterince iyi. Ancak yine de öngörülebilir şekillerde başarısız oluyor &mdash; aksanlar, üst üste binen konuşmalar, gürültü, noktalama işaretleri, özel isimler &mdash; ve kullanım durumunuza uygun doğru modeli ve iş akışını seçmek önemlidir. Bu kılavuz, model katmanlarını, kelime hata oranının nasıl ölçüldüğünü, konuşmacı diarizasyonunu, noktalama işareti eklemeyi, aksan yönetimini, gürültü dayanıklılığını ve dil desteği manzarasını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Whisper model katmanları</h2>
    <p>
      OpenAI&rsquo;nin Whisper&rsquo;ı baskın açık modeldir. Boyutları şunlardır:
    </p>
    <pre>{`Model      Parametre   <a href="/learn/vrm-vram">VRAM</a> gereksinimi   Hız     Kalite
tiny       39M      ~1 GB      10x       Temel, İngilizce ağırlıklı
base       74M      ~1 GB      7x        Temiz İngilizce için yeterli
small      244M     ~2 GB      4x        Çoğu içerik için iyi
medium     769M     ~5 GB      2x        Profesyonel kaliteye yakın
large-v3   1550M    ~10 GB     1x        En son teknoloji doğruluk
turbo      809M     ~6 GB      8x        large-v3'ün hızlı versiyonu`}</pre>
    <p>
      Hız sütunu gerçek zamana göredir: 10x, 10 dakikalık bir ses dosyasının 1 dakikada yazıya döküldüğü anlamına gelir. Kalite, tiny'den medium'a dik bir şekilde yükselir, ardından platoya ulaşır &mdash; large, yalnızca zorlu seslerde (aksanlar, gürültü, müzik) belirgin şekilde daha iyidir. Temiz stüdyo konuşmaları için small ve medium genellikle neredeyse aynı çıktıyı üretir.
    </p>

    <h2>Kelime Hata Oranı (WER)</h2>
    <p>
      WER, standart doğruluk metriğidir: <code>(S + D + I) / N</code>, burada S yer değiştirmeleri, D silmeleri, I eklemeleri ve N referanstaki toplam kelime sayısını temsil eder. %5 WER, her 20 kelimeden birinin hatalı olduğu anlamına gelir.
    </p>
    <pre>{`Referans:     "toplantı salı günü saat üçte"
Transkripsiyon: "toplantı salı günü saat 3:00'te"

Yer değiştirmeler: "üç" -> "3:00" (1)
N = 5 kelime
WER = 1/5 = %20
(Teknik olarak doğru, ancak anlamsal olarak aynı
 -- WER, biçimlendirme farklılıklarını cezalandırır.)`}</pre>
    <p>
      En son teknoloji Whisper-large modeli, temiz konuşma İngilizcesinde %5&ndash;10 WER elde eder. Daha düşük kaliteli kaynak ses (telefon görüşmeleri, gürültülü odalar) WER&rsquo;i %15&ndash;30&rsquo;a çıkarır. İngilizce dışındaki diller ve ağır aksanlar için, hedef dilin eğitim verisi hacmine bağlı olarak %10&ndash;40 arası bekleyin.
    </p>

    <h2>Konuşmacı diarizasyonu</h2>
    <p>
      Diarizasyon, &ldquo;kimin ne zaman konuştuğu&rdquo; problemidir &mdash; bir transkripti etiketlenmiş konuşmacı sıralarına bölmek. Whisper, yerel olarak diarizasyon yapmaz; kelime kelime zaman damgalarıyla yazıya döker ve konuşmacı atamasını ayrı bir adıma bırakır.
    </p>
    <p>
      Yaygın diarizasyon işlem hatları: pyannote.audio (açık kaynak, doğru), AWS Transcribe (bulut, entegre), Deepgram (bulut, hızlı). Benzer sesli bölümleri gruplamak için ses gömme vektörlerini kümeler, ardından bunları Konuşmacı 1, Konuşmacı 2 vb. olarak etiketler. Daha fazla konuşmacı ve üst üste binen konuşmalarla doğruluk düşer.
    </p>
    <pre>{`# whisperx ile (Whisper + diarizasyonu birleştirir)
whisperx audio.mp3 --diarize --min_speakers 2 --max_speakers 4

# Çıktı formatı:
# [00:00.00 -> 00:05.12] KONUŞMACI_00: Günaydın millet.
# [00:05.20 -> 00:08.45] KONUŞMACI_01: Aramaya katıldığınız için teşekkürler.`}</pre>

    <h2>Noktalama işareti ekleme</h2>
    <p>
      Ham konuşma tanıma, küçük harfli, noktalama işaretsiz metin üretir. Ayrı bir noktalama modeli nokta, virgül, büyük harf ve cümle sınırları ekler. Whisper bunu içinde barındırır; eski ASR motorları yapmaz.
    </p>
    <p>
      Noktalama işaretleri şaşırtıcı derecede zordur çünkü konuşmanın net cümle sınırları yoktur. Konuşmacılar sesi keser, düşünce ortasında yeniden başlar, dolgu sözcükleri kullanır (&ldquo;ııı,&rdquo; &ldquo;şey,&rdquo; &ldquo;bilirsiniz&rdquo;). İyi noktalama modelleri denge kurar: duraklamaların ve tonlamanın doğal sınırlar önerdiği yerlerde cümleleri bölün, ancak her nefes alındığında parçalar oluşturmayın.
    </p>

    <h2>Aksan yönetimi</h2>
    <p>
      Whisper, birçok aksanlı İngilizce varyantı da dahil olmak üzere 680.000 saatlik çok dilli ses üzerinde eğitildi, bu da onu nispeten dayanıklı kılar. Ancak eğitim setinde yeterince temsil edilmeyen aksanlar için doğruluk hala düşer. Tipik WER cezası:
    </p>
    <pre>{`Aksan                 Nötr Amerikan'a göre WER artışı
Amerikan, İngiliz      temel seviye
Avustralya, Kanada    ~%1 artış
Hint İngilizcesi      ~%3-5 artış
Nijerya, Kenya        ~%5-8 artış
İskoç, İrlanda (kalın) ~%8-15 artış
Ağır Çinli ESL        ~%10-20 artış
Ağır Arap ESL         ~%8-15 artış`}</pre>
    <p>
      Azaltma yöntemleri: daha büyük modelleri kullanın (large-v3, aksanları base&rsquo;e göre belirgin şekilde daha iyi işler), Whisper&rsquo;ın <code>initial_prompt</code> parametresi aracılığıyla modele bağlam verin (&ldquo;Bu, tıbbi araştırmayı tartışan Nijeryalı İngilizce konuşmacıların bir kaydıdır&rdquo;), ve transkripsiyondan önce sesi temizleyin (gürültü giderme, normalleştirme).
    </p>

    <h2>Gürültülü ortamlar</h2>
    <p>
      Arka plan gürültüsü, WER&rsquo;in 1 numaralı düşmanıdır. Temiz bir stüdyo kaydı %4 WER ile yazıya dökülebilir; aynı içerik -20dB arka plan konuşmasıyla %15 WER&rsquo;e fırlayabilir. Azaltma yöntemleri:
    </p>
    <p>
      <strong>Temiz kaydedin.</strong> Yakın mikrofon, sessiz oda, dış mekanda rüzgar siperliği. Çöp girer, çöp çıkar.
    </p>
    <p>
      <strong>Transkripsiyon öncesi gürültü giderme.</strong> RNNoise (açık kaynak), Krisp veya Adobe&rsquo;nin Enhance Speech gibi araçlar kaydedilmiş sesi temizleyebilir. İhtiyatlı uygulayın &mdash; agresif gürültü giderme, konuşma ünsüzlerini kaldırabilir ve transkripsiyona yardımcı olmaktan çok zarar verebilir.
    </p>
    <p>
      <strong>Ses etkinliği algılama kullanın.</strong> Sesi konuşma bölümlerine ayırın ve her birini yazıya dökün, saf gürültü bölgelerini atlayın. <a href="/learn/hallucination">Halüsinasyon</a> riskini azaltır.
    </p>

    <h2>Halüsinasyonlar</h2>
    <p>
      Whisper bazen sessizlik veya sessizliğe yakın anlarda metin uydurur &mdash; klasik bir halüsinasyon, neredeyse sessiz sesin sonunda &ldquo;İzlediğiniz için teşekkürler!&rdquo; üretmektir (eğitim verilerinde çok sayıda YouTube bitişi vardı). Azaltma yöntemleri: transkripsiyondan önce sessizliği kırpın, sessiz bölgeleri atlamak için VAD (ses etkinliği algılama) kullanın, düşük olasılıklı bölümleri filtrelemek için <code>no_speech_threshold</code> etkinleştirin.
    </p>

    <h2>Dil desteği</h2>
    <p>
      Whisper, değişen kalitede ~100 dili destekler. En üst düzey (İngilizce kalitesine yakın): İspanyolca, Fransızca, Almanca, Mandarin Çincesi, Japonca, Portekizce, İtalyanca, Korece. Orta düzey (kullanılabilir, %10&ndash;20 WER): Arapça, Hintçe, Rusça, Endonezce, Türkçe, Lehçe, Felemenkçe. Düşük düzey (gürültülü, genellikle %30+ WER): sınırlı eğitim verisine sahip düşük kaynaklı diller &mdash; Svahili, Galce, Tagalog, Yoruba.
    </p>
    <p>
      İngilizce dışındaki diller için daha büyük modeller daha büyük fark yaratır. Tiny, Fransızca için kullanılamaz çıktı üretebilirken, medium mükemmeldir.
    </p>

    <h2>Bulut ve yerel karşılaştırması</h2>
    <p>
      <strong>Bulut transkripsiyonu</strong> (AWS, Google, Azure, Deepgram) &mdash; kolay API, yerel GPU gerektirmez, dakika başına ödeme yapılır. Deepgram ve AssemblyAI, İngilizce için genellikle en hızlı ve en doğrudur. Gizliliğe duyarlı içerik bulut için uygun olmayabilir.
    </p>
    <p>
      <strong>Yerel transkripsiyon</strong> &mdash; Whisper&rsquo;ı kendi makinenizde çalıştırın. Gizlilik güvenli, dakika başına maliyet yok, ancak büyük modeller için GPU gerektirir. CPU, kısa dosyalar için küçük modelle çalışır. Kişisel içeriğin tek seferlik transkripsiyonu için yerel, doğru varsayılandır.
    </p>

    <h2>Zaman damgaları ve hizalama</h2>
    <p>
      Whisper varsayılan olarak bölüm başına zaman damgaları çıkarır (bölüm başına yaklaşık 5&ndash;30 saniye). Altyazı ve alt yazı oluşturma için kelime düzeyinde zaman damgalarına ihtiyacınız vardır. whisperx gibi araçlar, wav2vec2 aracılığıyla zorunlu hizalama ekleyerek senkronize altyazılar için gereken saniyeden kısa kelime düzeyinde zamanlama üretir.
    </p>
    <pre>{`# whisperx ile kelime düzeyinde zamanlama
whisperx input.mp3 --model large-v3 --output_format srt

# Şu şekilde satırlar içeren .srt üretir:
# 00:00:01,220 --> 00:00:03,840
# Merhaba ve podcaste hoş geldiniz.`}</pre>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Prodüksiyon için tiny modelini kullanmak.</strong> WER %15&ndash;30+&rsquo;dur, bu da gerçek dünya transkriptlerinin yoğun düzeltme gerektirdiği anlamına gelir. Hız kritik değilse medium veya large kullanın.
    </p>
    <p>
      <strong>Diarizasyona inceleme yapmadan güvenmek.</strong> Konuşmacı sınırları, özellikle üst üste binen konuşmalarda sıklıkla yanlış yerleştirilir. Yayınlamadan önce manuel olarak doğrulayın.
    </p>
    <p>
      <strong>Giriş sesini temizlemeyi unutmak.</strong> Transkripsiyondan önce gürültü azaltma ve normalleştirme WER&rsquo;i yarıya indirebilir. Ekstra adıma değer.
    </p>
    <p>
      <strong>Whisper halüsinasyonlarını bırakmak.</strong> Uzun sessizlikler genellikle &ldquo;izlediğiniz için teşekkürler&rdquo; ve benzeri sahte metinleri tetikler. Sessizliği kırpın veya VAD kullanın.
    </p>
    <p>
      <strong>Mükemmel özel isimler beklemek.</strong> İsimler, markalar ve teknik jargon hataya açıktır. Bunları prompt parametresi aracılığıyla sağlayın veya hedefli bir bul-değiştir geçişi yapın.
    </p>
    <p>
      <strong>GPU mevcutken CPU&rsquo;da çalıştırmak.</strong> 10 dakikalık bir ses dosyası GPU-medium&rsquo;da 2 dakika, CPU&rsquo;da 20 dakika sürer. Toplu işler için GPU kuruluma değer.
    </p>
    <p>
      <strong>Dil ipuçlarını görmezden gelmek.</strong> Otomatik algılama çalışır ancak belirsizlik ekler. Dili biliyorsanız <code>--language tr</code> belirtin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Whisper&rsquo;ı yerel olarak kurmadan sesi metne dönüştürmek için{" "}
      <a href="/tools/speech-to-text">konuşmadan metne aracını</a> kullanın. Konuşmacı atamasının daha az önemli olduğu kısa mobil kayıtlar için{" "}
      <a href="/tools/voice-note-transcriber">ses notu dönüştürücü</a> ile ve sessiz bölgelerde halüsinasyonları önlemek için transkripsiyondan önce ölü havayı kırpmak amacıyla{" "}
      <a href="/tools/audio-silence-remover">ses sessizlik kaldırıcı</a> ile eşleştirin.
    </p>
  </>
);