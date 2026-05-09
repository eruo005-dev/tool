import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Ses kırpma basit görünür: iki tutamacı kaydır, ortayı dışa aktar. Ardından kesme noktalarındaki tıklamayı, aniden duran fade-out'u, olması gerekenden 40MB daha büyük olan dosyayı ve sessizce 48kHz'den 44.1kHz'e değişen ve temponun %0.1 sapmasına neden olan örnekleme hızını fark edersiniz. İyi bir ses kırpma, nerede kestiğinize (sıfır geçişleri), nasıl fade yaptığınıza (tıklamaları önlemek için içe ve dışa) ve yeniden kodlama mı yoksa akış kopyalama mı yaptığınıza bağlıdır. Bu kılavuz, tıklama olmadan kesme mekaniğini, her kesim için fade in/out'un neden önemli olduğunu, kayıpsız ve yeniden kodlanmış kırpmaları, format farklılıklarını (WAV, MP3, OGG, FLAC), örnekleme hızı korumasını ve tüm bir klasörü işlerken saatler kazandıran toplu kırpma iş akışlarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Kesimler neden tıklar</h2>
    <p>
      Ses bir dalgadır. Sıfır olmayan bir genlikte dalganın ortasından kestiğinizde, kesim bir sonraki örneğe anlık bir sıçrama yaratır ve hoparlör bunu keskin bir geçici sinyal olarak üretir &mdash; bir tıklama veya patlama. Kesim noktasındaki genlik ne kadar yüksekse, tıklama o kadar yüksek olur.
    </p>
    <p>
      İki çözüm: <strong>sıfır geçişlerinde</strong> (dalga formunun sıfır genlik çizgisini geçtiği anlar) kesin, böylece sıçrama olmaz veya her kesimde genliği sıfıra indirmek için kısa bir <strong>fade</strong> uygulayın.
    </p>

    <h2>Sıfır geçişli kesimler</h2>
    <p>
      Sıfır geçişi, dalga formunun negatiften pozitife (veya tam tersi) geçtiği bir örnektir. Çoğu DAW ve ses düzenleyicide "sıfır geçişine yapıştır" özelliği bulunur. Manuel düzenlemeler için, tek tek örnekleri görene kadar yakınlaştırın ve hedef zamanınıza en yakın sıfır geçişini seçin.
    </p>
    <p>
      Sıfır geçişleri teoride mükemmeldir ancak karmaşık seslerde nadirdir. Birden fazla enstrümanın aynı anda olduğu müzik, bir enstrümanın pozitif genliği diğerinin negatifini iptal ettiğinden nadiren temiz bir sıfır geçişine sahiptir. Pratikte, müzik için fade'ler daha iyi çalışır.
    </p>

    <h2>Fade in ve fade out</h2>
    <p>
      Her kesimde kısa bir fade (5&ndash;50ms) uygulayın. Fade-in sessizlikten başlar ve tam genliğe yükselir; fade-out tam tersini yapar. İnsan kulağı 10ms'lik bir fade'i ses değişikliği olarak algılayamaz, ancak tıklamaları kesinlikle önler.
    </p>
    <pre>{`# FFmpeg: 10ms fade-in ve fade-out ile kırpma
ffmpeg -i input.mp3 -ss 00:01:23 -to 00:02:45 \\
  -af "afade=t=in:st=83:d=0.01,afade=t=out:st=164.99:d=0.01" \\
  -c:a libmp3lame -b:a 192k output.mp3`}</pre>
    <p>
      Doğal sönümlü müzikler için (piyano notaları, vokal kuyrukları), müzikal ifadeyi korumak için fade'i 50&ndash;200ms'ye uzatın. Konuşma için 10&ndash;30ms yeterlidir.
    </p>

    <h2>Kayıpsız ve yeniden kodlanmış kırpmalar</h2>
    <p>
      <strong>Kayıpsız kırpma</strong>, kodlanmış sesi çözmeden kopyalamak için <code>-c:a copy</code> kullanır. Hızlı, piksel mükemmel (örnek mükemmel), ancak yalnızca codec'in paket sınırlarında kesim yapabilir.
    </p>
    <p>
      <strong>Yeniden kodlanmış kırpma</strong>, ham örneklere çözer, herhangi bir örnek sınırında keser, efektler (fade'ler) uygular, yeniden kodlar. Daha yavaştır, kayıplı formatlar (MP3, AAC) için nesil kaybına neden olur, ancak örnek doğrudur.
    </p>
    <pre>{`# Kayıpsız MP3 kırpma (MP3 çerçeve sınırlarında keser, ~26ms her biri)
ffmpeg -i input.mp3 -ss 00:01:23 -to 00:02:45 -c:a copy output.mp3

# Yeniden kodlanmış MP3 kırpma (örnek doğru, hafif kalite kaybı)
ffmpeg -i input.mp3 -ss 00:01:23 -to 00:02:45 \\
  -c:a libmp3lame -b:a 192k output.mp3`}</pre>
    <p>
      MP3 çerçeveleri her biri 26ms'dir, bu nedenle kayıpsız MP3 kırpmaları hedefinizden 26ms'ye kadar sapabilir. AAC çerçeveleri 23ms'dir. FLAC ve WAV, kayıpsız formatlar oldukları ve yeniden kodlamanın hiçbir maliyeti olmadığı için örnek düzeyinde hassastır.
    </p>

    <h2>Format kılavuzu</h2>
    <pre>{`Format  Sıkıştırma  Kalite        Yaygın kullanım
WAV     Sıkıştırılmamış Bit-exact      Düzenleme master'ı, arşiv
FLAC    Kayıpsız     Bit-exact      Arşiv, yüksek kaliteli dağıtım
MP3     Kayıplı      192+ iyi       <a href="/learn/tr">Akış</a>, podcast'ler (eski)
AAC     Kayıplı      Aynı bit hızında MP3'ten daha iyi (iTunes, YT)
OGG     Kayıplı      MP3'ten daha iyi (oyun, bazı akışlar)
Opus    Kayıplı      128 kbps altında en iyisi (WebRTC, WhatsApp)
M4A     MP4'te AAC   Apple kayıtlar için varsayılan`}</pre>
    <p>
      Düzenleme ve kırpma için WAV veya FLAC ile çalışın, ardından sonunda dağıtım formatına yeniden kodlayın. MP3 veya AAC'nin her yeniden kodlaması kalite kaybına neden olur.
    </p>

    <h2>Örnekleme hızı koruması</h2>
    <p>
      Örnekleme hızı, saniyedeki ses örneği sayısıdır (CD için 44.1kHz, video için 48kHz, yüksek çözünürlük için 96kHz). Araçlar bazen yeniden kodlama sırasında sessizce yeniden örnekler &mdash; 48kHz'lik bir kaynak 44.1kHz'lik bir çıktıya dönüşür, bu da video ile senkronize olması gereken içerik için %0.1'lik bir perde/tempo kayması anlamına gelir.
    </p>
    <p>
      Videoya bağlı ses için her zaman videonun örnekleme hızıyla (neredeyse her zaman 48kHz) eşleştirin. Bağımsız dağıtılan müzik için 44.1kHz eski normdur. Gerekmedikçe asla yeniden örneklemeyin; yeniden örneklemeniz gerekiyorsa, yüksek kaliteli yeniden örnekleme kullanın (sox, soxr, uygun filtrelerle libswresample).
    </p>
    <pre>{`# Kırpma sırasında örnekleme hızı korumasını zorla
ffmpeg -i input.wav -ss 10 -to 40 -ar 48000 output.wav

# FFmpeg'in varsayılan yeniden örnekleyicisi yeterlidir; en iyi kalite için:
ffmpeg -i input.wav -ss 10 -to 40 -ar 48000 \\
  -resampler soxr -precision 28 output.wav`}</pre>

    <h2>Bit derinliği ve kanal düzeni</h2>
    <p>
      Bit derinliği (16-bit, 24-bit, 32-bit float) dinamik aralığı etkiler. Düzenleme ve kırpma için kaynağın kullandığını koruyun. Son dışa aktarımı yapmadığınız sürece 24-bit'i 16-bit'e düşürmeyin. Bit derinliğini azaltırken dithering gereklidir; atlanması <a href="/learn/tr/kuantizasyon">kuantizasyon</a> bozulmasına neden olur.
    </p>
    <p>
      Kanal düzeni (mono, stereo, 5.1, 7.1) de korunmalıdır. Bir kırpma sırasında stereo kaydı sessizce mono'ya düşürmek yaygın bir sürpriz hatadır.
    </p>

    <h2>Podcast'ler ve seslendirmeler için fade in/out</h2>
    <p>
      Konuşma içeriği için yaygın fade uzunlukları:
    </p>
    <pre>{`Açılış fade-in:     100-300 ms
Kapanış fade-out:    200-500 ms
Segmentler arası kesimler: 20-50 ms
Müzik yatakları fade in:  1-2 saniye
Müzik yatakları fade out: 2-4 saniye
Müzik kesimlerinden sonra:    ses devam etmeden önce 100ms sessizlik ekleyin`}</pre>
    <p>
      Asimetri (fade-out'un fade-in'den daha uzun olması) kasıtlıdır &mdash; kulak, kademeli başlangıçtan ziyade kademeli sönüme karşı daha az hassastır.
    </p>

    <h2>Toplu kırpma</h2>
    <p>
      Aynı kesime sahip bir dosya klasörünü işlemek için (örneğin, ilk 3 saniyelik sessizliği kaldırma), bir kabuk döngüsü kullanın:
    </p>
    <pre>{`# Bir klasördeki her WAV'ın ilk 3 saniyesini kırp
for f in *.wav; do
  ffmpeg -i "$f" -ss 3 -c:a copy "trimmed_$f"
done

# Veya adlandırılmış bir desen ve fade ile
for f in *.mp3; do
  ffmpeg -i "$f" -ss 0 -to 60 \\
    -af "afade=t=out:st=59.5:d=0.5" \\
    "clip60_$f"
done`}</pre>
    <p>
      Dosyalar arasında eşit olmayan kesimler için (dosya başına farklı kırpma süreleri), bir giriş ve kesim noktaları CSV'si oluşturun, ardından döngü yapın. Her dosyayı bir GUI'de açmaktan daha hızlıdır.
    </p>

    <h2>Sessizliği otomatik olarak kırpma</h2>
    <p>
      Sessizlik tabanlı kırpma ayrı bir beceridir &mdash; açık zaman damgası kesimleri yerine sessiz bölümleri kaldırma. Yalnızca baş/kuyruk sessizlik kırpması için FFmpeg'in silenceremove filtresi işe yarar:
    </p>
    <pre>{`# Baştan ve sondan sessizliği kaldır
ffmpeg -i input.mp3 \\
  -af "silenceremove=start_periods=1:start_silence=0.5:start_threshold=-40dB,
       areverse,
       silenceremove=start_periods=1:start_silence=0.5:start_threshold=-40dB,
       areverse" \\
  output.mp3`}</pre>
    <p>
      Eşik (burada -40dB) sessizlik olarak neyin sayılacağını kontrol eder. -35dB agresiftir (hafif nefes almayı kaldırır); -50dB naziktir (yalnızca gerçek sessizlik). Kaynağa göre ayarlayın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Fade olmadan dalganın ortasından kesmek.</strong> Kesim noktalarında tıklamalar oluşturur. Her zaman en az 10ms fade in ve out uygulayın.
    </p>
    <p>
      <strong>MP3'ü tekrar tekrar yeniden kodlamak.</strong> Her kodlama kalite kaybına neden olur. Bir WAV veya FLAC master'ı saklayın; yalnızca son dağıtım için MP3'e dışa aktarın.
    </p>
    <p>
      <strong>Örnekleme hızı kaymasını görmezden gelmek.</strong> Video için 44.1kHz'e yeniden örneklenen 48kHz ses, saatte ~4 saniye senkronizasyon kaybına neden olur.
    </p>
    <p>
      <strong>Örnek doğru ihtiyaçlar için kayıpsız kırpma kullanmak.</strong> MP3 kesimleri 26ms çerçeve sınırlarına yapışır. Konuşma zamanlamalı diyalog için, tam örneği yakalamak için yeniden kodlayın.
    </p>
    <p>
      <strong>Müzikte varsayılan fade uzunlukları.</strong> 10ms konuşma için yeterlidir ancak doğal sönümlü müzik için çok ani. Müzik için 50&ndash;200ms'ye uzatın.
    </p>
    <p>
      <strong>Kanal düzenini unutmak.</strong> Stereo yanlışlıkla mono olarak dışa aktarılırsa mekansal bilgi kaybolur ve dosya boyutu beklenmedik şekilde yarıya iner.
    </p>
    <p>
      <strong>Temizlemeden önce kırpmak.</strong> Kaynakta gürültü veya kırpılma varsa, master'da düzeltin ve ardından kırpmayı yeniden dışa aktarın &mdash; bozuk bir sinyali kırpılmış bir çıktıya pişirmeyin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Fade'ler ve format dönüşümü ile ses kırpmak için{" "}
      <a href="/tools/tr/ses-kirpici">ses kırpıcıyı</a> kullanın. Ana içerikten önce veya sonra ölü havayı temizlemek için{" "}
      <a href="/tools/tr/ses-sessizlik-temizleyici">ses sessizlik temizleyici</a> ile ve kırpmadan sonra tempoyu ayarlamanız gerektiğinde (podcast normalizasyonu için tipik){" "}
      <a href="/tools/tr/ses-hiz-degistirici">ses hız değiştirici</a> ile eşleştirin.
    </p>
  </>
);