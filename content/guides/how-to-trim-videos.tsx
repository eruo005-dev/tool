import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Video düzenlemenin yüzde doksanı sadece kırpmaktır &mdash; baştaki sessizliği,
      sondaki takılmayı, ortadaki garip duraklamayı kesmek. Çoğu kişinin fark etmediği
      şey, kırpmanın <em>kayıpsız</em> veya <em>kayıplı</em> olabileceği ve farkın
      hem dosya boyutunda hem de görüntü kalitesinde ortaya çıktığıdır. Bir ana karede
      keserseniz orijinal kodlamayı bozulmadan korursunuz. Ana kareler arasında
      keserseniz yeniden kodlamaya zorlarsınız, bu da kaliteyi düşürür. Bu kılavuz,
      kayıpsız ve kayıplı kesmeyi belirleyen ana kare mekaniğini, FFmpeg'in{" "}
      <code>-ss</code> ve <code>-to</code> bayraklarını, hassas ve hızlı mod
      arasındaki dengeyi, konteyner formatlarının nelerin mümkün olduğunu nasıl
      etkilediğini ve yeniden kodlamanın ne zaman doğru tercih olduğunu kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Ana kareler: modern videonun temel taşı</h2>
    <p>
      Modern video codec'leri (H.264, H.265, VP9, AV1) yalnızca ardışık kareler
      arasındaki farkları depolayarak sıkıştırma yapar. Bir <strong>ana kare</strong>
      (I-kare olarak da adlandırılır) tam, kendi kendine yeten bir görüntüdür. Diğer
      tüm kareler (P-kareler ve B-kareler) yeniden oluşturulmak için çevredeki
      karelere bağımlıdır. Bir videoda her 2&ndash;10 saniyede bir ana kare
      bulunabilir; geri kalanlar delta karelerdir.
    </p>
    <p>
      Bu, kırpma için önemlidir çünkü yalnızca bir ana karede temiz bir şekilde
      kesebilirsiniz. Ana kareler arasında keserseniz, ortaya çıkan dosya hiçbir
      dayanağı olmayan bir delta ile başlar, bu da kod çözücünün başarısız olması
      veya oynatıcının önceki ana kareden kod çözüp atlayarak yeniden hesaplama
      yapması anlamına gelir &mdash; yani yeniden kodlama.
    </p>

    <h2>Kayıpsız kırpma (akış kopyalama)</h2>
    <p>
      Ana kare sınırlarında kırpma yaptığınızda, kodlayıcıya &ldquo;yeniden kodlama,
      sadece sıkıştırılmış akışı kopyala&rdquo; diyebilirsiniz &mdash; FFmpeg'in{" "}
      <code>-c copy</code> bayrağı. Bu işlem, çok gigabaytlık bir dosya için bile
      saniyeler sürer ve çıktı, kaynakla piksel bazında aynıdır.
    </p>
    <pre>{`# Ana karelerde kayıpsız kırpma
ffmpeg -ss 00:00:10 -to 00:00:40 -i input.mp4 -c copy output.mp4

# Not: -ss -i'den önce = en yakın önceki ana kareye hızlı arama
# Bu, istenen konumdan hafif bir zamanlama sapmasına neden olabilir`}</pre>
    <p>
      İşin püf noktası: kesme noktanız en yakın önceki ana kareye yapışır. 10.0
      saniyeyi istediyseniz ancak en yakın ana kare 8.5 saniyedeyse, çıktınız 8.5s'de
      başlar. Çoğu sıradan kesme için bu sorun değildir. Kare hassasiyetinde
      düzenlemeler için ise yeterli değildir.
    </p>

    <h2>Hassas (yeniden kodlayarak) kırpma</h2>
    <p>
      Tam bir kareyi yakalamak için yeniden kodlamanız gerekir &mdash; önceki ana
      kareden hedefinize kadar kod çözün, ardından çıktıyı o kareden başlayarak yeni
      bir ana kare olarak yeniden kodlayın.
    </p>
    <pre>{`# Hassas kırpma, yeniden kodlar
ffmpeg -i input.mp4 -ss 00:00:10.500 -to 00:00:40.000 \\
  -c:v libx264 -preset slow -crf 18 -c:a aac -b:a 192k output.mp4

# -ss -i'den SONRA = doğru ancak daha yavaş (baştan kod çözer)
# crf 18 = görsel olarak kayıpsız H.264
# preset slow = kodlama süresi pahasına daha iyi sıkıştırma`}</pre>
    <p>
      Yeniden kodlama her zaman bir miktar kalite kaybına (nesil kaybı) neden olur ve
      klip uzunluğuyla orantılı zaman alır. 2 dakikalık bir çıktı için, makinenize ve
      ön ayarınıza bağlı olarak 30 saniye ile 5 dakika arasında bekleyin.
    </p>

    <h2>-ss konum taktiği</h2>
    <p>
      FFmpeg'in davranışı <code>-ss</code>'nin nerede olduğuna bağlıdır:
    </p>
    <pre>{`# -ss -i'den ÖNCE: en yakın ana kareye hızlı arama
#                (giriş tarafı arama, ana kareye yapışır)
ffmpeg -ss 00:00:10 -i input.mp4 -t 30 -c copy out.mp4

# -ss -i'den SONRA: hassas arama (çıkış tarafı arama)
#                (işaretten önceki her şeyi kod çözer, yavaş)
ffmpeg -i input.mp4 -ss 00:00:10 -t 30 -c libx264 out.mp4

# Birleşik: ana kareye hızlı arama, ardından hassas ayar
ffmpeg -ss 00:00:09 -i input.mp4 -ss 00:00:01 -t 29 -c libx264 out.mp4`}</pre>
    <p>
      Birleşik form yaygın bir uzlaşmadır &mdash; kabaca doğru bölgeye hızlı arama,
      ardından bu bölge içinde hassas ayar. Uzun bir dosyada saf çıkış tarafı aramadan
      çok daha hızlıdır.
    </p>

    <h2>Başlangıç ve süre vs başlangıç ve bitiş</h2>
    <p>
      <code>-to</code> kaynakta mutlak bir bitiş zamanı belirler. <code>-t</code> ise{" "}
      <code>-ss</code>'den itibaren bir süre belirler. <code>-ss</code> ile
      birleştirildiklerinde farklı sonuçlar üretirler:
    </p>
    <pre>{`ffmpeg -ss 00:00:10 -to 00:00:40 -i input.mp4 ...
# Çıktı: 30 saniye (kaynakta 10'dan 40'a)

ffmpeg -ss 00:00:10 -t 30 -i input.mp4 ...
# Çıktı: 10'dan başlayarak 30 saniye`}</pre>
    <p>
      Kaynakta tam bitiş karesini biliyorsanız <code>-to</code> kullanın. İstenen
      çıktı uzunluğunu biliyorsanız <code>-t</code> kullanın.
    </p>

    <h2>Konteyner formatları ve tuhaflıkları</h2>
    <p>
      <strong>MP4 (MPEG-4'te H.264/H.265)</strong> &mdash; çoğu web videosu için
      varsayılandır. Akış kopyalama ile ana karelerde temiz bir şekilde kırpılır.
      Faststart'ı destekler (<code>-movflags +faststart</code>) böylece moov atomu
      dosyanın başında olur ve video tamamen indirilmeden önce oynatılabilir.
    </p>
    <p>
      <strong>MOV (QuickTime)</strong> &mdash; Apple'ın konteyneri. Kırpma amaçları
      için MP4'e benzer. QuickTime Player, aynı mekanizmayı kullanarak varsayılan
      olarak kayıpsız kırpma yapar.
    </p>
    <p>
      <strong>WebM (VP9/VP8/AV1)</strong> &mdash; açık kaynak web videosu. Kırpma aynı
      şekilde çalışır; ana karelerde akış kopyalama sorunsuzdur.
    </p>
    <p>
      <strong>MKV (Matroska)</strong> &mdash; neredeyse tüm codec'leri destekler. Uzun
      çekimlerin kayıpsız kırpılması için iyidir.
    </p>
    <p>
      <strong>Ham MPEG-TS</strong> (genellikle yayınlardan veya eski çekimlerden) &mdash;
      her kare kendi kendine daha yakın olduğu için herhangi bir karede kırpılabilir,
      ancak format daha az verimlidir.
    </p>

    <h2>Bilerek yeniden kodlama zamanı</h2>
    <p>
      Kare hassasiyetinde kesmelere ihtiyacınız olmasa bile, şu durumlarda yeniden
      kodlayın:
    </p>
    <p>
      <strong>Kaynak gerekenden daha yüksek bit hızına sahipse.</strong> 50Mbps'lik
      bir kamera kaydını 8Mbps'ye sıkıştırmak, web kullanımı için anlamlı bir kalite
      kaybı olmadan dosyayı 6 kat küçültür.
    </p>
    <p>
      <strong>Codec hedefte oynatılamıyorsa.</strong> Eski tarayıcılar için HEVC
      (H.265) kaynağını H.264'e yeniden kodlamak.
    </p>
    <p>
      <strong>Klipleri birleştiriyorsanız.</strong> Birleştirme, eşleşen codec
      parametreleri gerektirir; yeniden kodlama bunları normalleştirir.
    </p>
    <p>
      <strong>Belirli bir çıktı spesifikasyonuna ihtiyacınız varsa.</strong> Sosyal
      platform gereksinimleri (Twitter'ın 140 saniyelik H.264'ü, Instagram'ın 1080p
      30fps sınırı) yeniden kodlamayı zorunlu kılar.
    </p>

    <h2>Ana kare aralığı ve parça boyutu</h2>
    <p>
      Kodlama hattını yukarı akışta kontrol ediyorsanız, kırpmayı beklediğiniz içerik
      için daha kısa bir ana kare aralığı belirleyin. 1 saniyelik bir ana kare aralığı,
      herhangi bir hedefin 1 saniyesi içinde kayıpsız kırpma yapmanızı sağlar, ancak
      dosyalar ~%10 daha büyük olur.{" "}
      <a href="/learn/stream">Akış</a> (HLS/DASH) için bu zaten normdur.
    </p>
    <pre>{`# Daha kolay kayıpsız kırpma için 1 saniyelik ana karelerle kodlama
ffmpeg -i source.mov -c:v libx264 -g 30 -keyint_min 30 \\
  -sc_threshold 0 -c:a aac output.mp4`}</pre>

    <h2>Sesle ilgili hususlar</h2>
    <p>
      Ses parçalarının da kendi kare sınırları vardır (AAC kareleri ~23ms'dir).
      Kayıpsız kırpma, kare hassasiyetinde ses garantisi vermez, ancak kayma
      algılanamaz düzeydedir (&lt;25ms). Konuşma sınırlarında kırpma yapıyorsanız,
      hassas bir kesme ile sesi yeniden kodlamayı tercih edebilirsiniz.
    </p>

    <h2>Meta verileri koruma</h2>
    <p>
      <code>-c copy</code> ile yapılan kırpma işlemleri neredeyse tüm meta verileri
      korur &mdash; zaman damgaları, GPS, kamera bilgileri, bölümler. Yeniden kodlama,
      genişletilmiş meta verileri kaldırabilir. Bunu açıkça korumak için{" "}
      <code>-map_metadata 0</code> ve MP4 için{" "}
      <code>-movflags use_metadata_tags</code> kullanın.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Akış kopyalama işe yararken yeniden kodlamak.</strong> Gereksiz yere
      zaman kaybettirir ve kaliteyi düşürür. Önce <code>-c copy</code>'yi deneyin.
    </p>
    <p>
      <strong>Akış kopyalamadan kare hassasiyetinde kesmeler beklemek.</strong> Akış
      kopyalama ana karelere yapışır. Hassasiyet önemliyse yeniden kodlamanız
      gerekir.
    </p>
    <p>
      <strong>Uzun dosyalarda -ss'yi -i'den sonra kullanmak.</strong> Baştan kod
      çözer ve çok uzun sürer. Hızlı arama için -ss'yi -i'den önce kullanın.
    </p>
    <p>
      <strong>Videoyu yeniden kodlarken -c:a'yı atlamak.</strong> Belirtmezseniz ses
      de yeniden kodlanır; kalite kaybı olabilir. Videoyu yeniden kodlarken sesi
      dokunulmadan tutmak için <code>-c:a copy</code> kullanın.
    </p>
    <p>
      <strong>Faststart olmadan kırpma yapmak.</strong> Moov atomu dosyanın sonunda
      kalır, bu nedenle video akışa uygun olmaz. Web için{" "}
      <code>-movflags +faststart</code> ekleyin.
    </p>
    <p>
      <strong>Codec parametreleri paylaşmayan kırpılmış segmentleri birleştirmek.</strong>{" "}
      Birleştirme başarısız olur. Birleştirmeden önce ortak bir spesifikasyona yeniden
      kodlayın.
    </p>
    <p>
      <strong>Zaman damgalarının sıfır olmayabileceğini unutmak.</strong> Kırpmadan
      sonra bazı oynatıcılar kaynağın başlangıç zaman damgasını gösterebilir. Sıfırlamak
      için <code>-reset_timestamps 1</code> ekleyin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      FFmpeg kurmadan videoları{" "}
      <a href="/tools/video-trimmer">video kırpma aracı</a> ile kırpın. Kırpılmış bir
      segmenti döngülü bir demoya dönüştürmek için{" "}
      <a href="/tools/video-to-gif">videodan GIF'e dönüştürücü</a> ile ve yayınlamadan
      önce ses parçasını çıkarmanız gerektiğinde{" "}
      <a href="/tools/video-mute">video sessize alma aracı</a> ile birlikte kullanın.
    </p>
  </>
);