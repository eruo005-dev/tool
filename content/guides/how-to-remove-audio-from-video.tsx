import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bazen sesin gitmesi gerekir. Kritik bir anda kedinizin miyavladığı bir ürün tanıtımı. Mikrofonunuzun kapalı olduğunu unuttuğunuz bir ekran kaydı. Sosyal medyada otomatik oynatmak istediğiniz, istenmeyen sesin izleyicileri ürküteceği bir klip. Sesi öldürmenin iki yolu vardır &mdash; sessize alma (parçayı tutup susturma) ve sesi kaldırma (parçayı tamamen silme) &mdash; ve doğru seçim, daha sonra yeni ses eklemeyi planlayıp planlamadığınıza, dosya boyutunun sizin için önemli olup olmadığına ve hangi platformda yayınlayacağınıza bağlıdır. Bu kılavuz, sessize alma-ve-sesi kaldırma ayrımını, sessiz videoyu norm haline getiren platform otomatik oynatma politikalarını, sesi kaldırmanın dosya boyutundan tasarrufunu, ses değiştirme iş akışlarını ve genellikle daha iyi bir alternatif olan altyazıları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Sessize alma ve sesi kaldırma</h2>
    <p>
      <strong>Sessize alma</strong>, sesi sessizlikle değiştirir ancak ses parçasını sağlam tutar. Oynatıcılar hala bir ses göstergesi (sessize alınmış bir hoparlör simgesi) gösterir ve dosya boyutu orijinalinden neredeyse farksızdır &mdash; bir sıkıştırılmış ses akışını, başka bir sıkıştırılmış sessizlik ses akışıyla değiştirmişsinizdir.
    </p>
    <p>
      <strong>Sesi kaldırma</strong>, ses parçasını kapsayıcıdan tamamen kaldırır. Oynatıcılar hiçbir ses göstergesi göstermez; indirenler yalnızca video dosyası kaydeder. Dosya boyutu, ses parçasının katkıda bulunduğu miktar kadar düşer &mdash; tipik olarak H.264+AAC videolar için %5&ndash;15, yüksek kaliteli ses parçaları için bazen %20&ndash;30.
    </p>
    <pre>{`# Sesi tamamen kaldır (parçayı siler)
ffmpeg -i input.mp4 -c:v copy -an output.mp4

# Sesi sessize al (parçayı tutar, sessizlikle değiştirir)
ffmpeg -i input.mp4 -c:v copy -f lavfi -i anullsrc \\
  -shortest -c:a aac -map 0:v -map 1:a output.mp4`}</pre>

    <h2>Ne zaman sessize alınmalı</h2>
    <p>
      Parçayı tutun ve daha sonra sesi değiştirmeyi planladığınızda (sonradan anlatım, arka plan müziği, ses tasarımı) sessize alın. Sessize alma, ses kanalı düzenini ve örnekleme hızını korur, böylece düzenleyiciniz beklenen stereo/48kHz parçayı görür ve her seferinde yeniden yapılandırma yapmazsınız.
    </p>
    <p>
      Ayrıca, yayın platformunuz bir ses parçası beklediğinde sessize alın. Bazı eski iş akışları (yayın, belirli yükleyiciler, bazı reklam ağları) yalnızca video dosyalarını reddeder. Sessiz parça, kontrolü geçerli kılar.
    </p>

    <h2>Ne zaman ses kaldırılmalı</h2>
    <p>
      Nihai teslimat gerçekten sessiz olduğunda sesi kaldırın &mdash; bir açılış sayfasındaki döngüsel bir UI demosu, bir arka plan kahraman videosu, sessiz bir GIF tarzı ürün kartı. Dosya boyutundan tasarruf edersiniz ve oynatıcının takılıp sesi kısa süreliğine açma şansı yoktur.
    </p>

    <h2>Dosya boyutundan tasarruf</h2>
    <pre>{`Tipik ses parçası boyutları (yaygın bit hızlarında):
AAC 128 kbps stereo   = Dakikada 960 KB
AAC 192 kbps stereo   = Dakikada 1.44 MB
AAC 256 kbps stereo   = Dakikada 1.92 MB
Opus 96 kbps stereo   = Dakikada 720 KB
Sıkıştırılmamış 48kHz 16-bit stereo = Dakikada 11.5 MB`}</pre>
    <p>
      2Mbps video + 192kbps ses içeren 5 dakikalık bir video için toplam ~80MB'dır; sesi kaldırmak bunu ~73MB'a düşürür (~%9 tasarruf). 4Mbps'de 30 saniyelik bir otomatik oynatma döngüsü için toplam ~16MB'dır; sesi kaldırmak bunu ~15MB'a düşürür (~%6). Çok büyük değil, ama bedava.
    </p>

    <h2>Otomatik oynatma politikaları ve sessiz video</h2>
    <p>
      Son birkaç yılda her büyük tarayıcı ve platform otomatik oynatmayı sıkılaştırdı. Chrome, videoların sesle otomatik oynatılması için sessize alınmasını gerektirir. iOS Safari, <code>muted</code> özelliği artı <code>playsinline</code> gerektirir. Instagram ve TikTok, dokunmayla ses açılarak sessiz otomatik oynatılır. Sonuç: kullanıcı etkileşimi olmadan bir sayfada görünen herhangi bir video sessiz olmalıdır.
    </p>
    <pre>{`<video autoplay muted playsinline loop>
  <source src="/hero.mp4" type="video/mp4">
</video>`}</pre>
    <p>
      Yalnızca otomatik oynatmak için var olan videolar (kahraman bölümleri, ürün döngüleri, dekoratif arka plan) için, sesi kaynağında kaldırın. <code>muted</code> özelliği çalışır, ancak sesi kaldırmak, bir tarayıcı güncellemesinin veya kullanıcı ayarının videoyu beklenmedik şekilde seslendirmesi gibi uç durumları garanti eder.
    </p>

    <h2>Yeni sesle değiştirme</h2>
    <p>
      Yaygın bir iş akışı: orijinal sesi kaldırın, ardından anlatım veya arka plan müziği ekleyin.
    </p>
    <pre>{`# Orijinal sesi kaldır, yeni ses parçası ekle
ffmpeg -i video.mp4 -i narration.mp3 \\
  -c:v copy -c:a aac -b:a 192k \\
  -map 0:v:0 -map 1:a:0 -shortest output.mp4

# -shortest bayrağı, çıktıyı iki akıştan daha kısa olana göre keser
# Anlatım videodan daha uzunsa, -shortest'ı kaldırın ve bunun yerine videoyu doldurun`}</pre>
    <p>
      Yeni sesin uzunluğunu videoyla açıkça eşleştirin. Videonun ötesindeki hizalanmamış ses, bazı platformlarda oynatıcı hatalarına neden olur (Twitter'ın, sesten uzun video dosyalarında donduğu bilinmektedir).
    </p>

    <h2>Bir alternatif olarak altyazılar</h2>
    <p>
      Sesi kaldırmadan önce, altyazıların sorunu çözüp çözmediğini sorgulayın. Orijinal videoda bilgi aktaran bir anlatım varsa, sesi kaldırın ve altyazılar veya gömülü metin ekleyin &mdash; içeriği erişilebilir tutar, otomatik oynatma sessiz politikalarını karşılar ve sessiz ortamlardaki izleyicilere uyum sağlarsınız.
    </p>
    <p>
      Altyazı eklemek neredeyse her zaman sessiz videodan daha iyi bir kullanıcı deneyimidir. Instagram verileri, besleme videolarının %85'inin varsayılan olarak sessiz izlendiğini gösterir; altyazılı video izleyicileri tutar, altyazısız video onları kaybeder.
    </p>

    <h2>Çok parçalı dosyalarda ses parçası seçimi</h2>
    <p>
      Bazı MKV ve MP4 dosyalarında birden çok ses parçası bulunur (dublaj, yorum). Tüm sesi kaldırmak hepsini siler. Belirli parçaları bırakmak için:
    </p>
    <pre>{`# Yalnızca ilk ses parçasını tut, gerisini bırak
ffmpeg -i input.mkv -c copy -map 0:v -map 0:a:0 output.mkv

# Belirli bir parçayı bırak (parça indeksi 2), diğerlerini tut
ffmpeg -i input.mkv -c copy -map 0 -map -0:a:2 output.mkv`}</pre>

    <h2>Sesi kaldırırken meta verileri koruma</h2>
    <p>
      Video meta verileri (zaman damgaları, GPS, kamera markası) kapsayıcıda ve video akışında yaşar. Ses parçasını <code>-an</code> ile kaldırmak, video ve kapsayıcı meta verilerini korur ancak ses parçasına bağlı olan her şeyi (ses dili etiketi, ses codec bilgisi) bırakır. Çoğu kullanım için bu sorun değildir. Arşivleme için, kaldırdığınız şeyi ayrı bir meta veri alanında belgeleyin.
    </p>

    <h2>Kayıpsız ve yeniden kodlanmış ses kaldırma</h2>
    <p>
      Hem <code>-an</code> hem de harita tabanlı ses kaldırma, videoyu yeniden kodlamaktan kaçınmak için <code>-c:v copy</code> ile eşleştirilmelidir. <code>-c:v copy</code> öğesini atlarsanız, FFmpeg varsayılan ayarlarıyla yeniden kodlar ve bu da kaliteyi düşürebilir veya bit hızını değiştirebilir. Basit bir ses kaldırma işlemi için video akışına dokunmak için hiçbir neden yoktur.
    </p>

    <h2>Sesi normalleştirme ve sesi kaldırma</h2>
    <p>
      Orijinal ses çok yüksek veya çok alçaksa, kaldırmayın &mdash; normalleştirin. -14 LUFS (YouTube standardı) veya -16 LUFS (podcast standardı) ses yüksekliği normalleştirmesi, içeriği kaybetmeden seviyeyi düzeltir. Sesi kaldırmak, potansiyel olarak yararlı bilgileri atar; önce normalleştirin, yalnızca son çare olarak kaldırın.
    </p>
    <pre>{`# YouTube ses yüksekliğine normalleştir (-14 LUFS)
ffmpeg -i input.mp4 -af loudnorm=I=-14:TP=-1.5:LRA=11 \\
  -c:v copy output.mp4`}</pre>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Videoyu gereksiz yere yeniden kodlamak.</strong> Sesi kaldırmak asla video akışına dokunmamalıdır. Her zaman <code>-c:v copy</code> kullanın.
    </p>
    <p>
      <strong>Tarayıcıda sessize alınmış ile kaldırılmışı karıştırmak.</strong> Sessize alınmış bir videoda hala ses parçası vardır; kullanıcılar sesi açabilir. Kaldırılmış bir videonun sesi, orada hiçbir şey olmadığı için açılamaz.
    </p>
    <p>
      <strong>Platform otomatik oynatma kurallarını unutmak.</strong> Web'de otomatik oynatılması gereken herhangi bir video sessiz olmalıdır &mdash; ya sessize alınmış ya da sesi kaldırılmış.
    </p>
    <p>
      <strong>Altyazıların daha iyi hizmet edeceği durumlarda sesi kaldırmak.</strong> Metin değişimi olmadan kaldırılan anlatım, içeriği tamamen kaybeder.
    </p>
    <p>
      <strong>Değiştirirken birden çok ses parçasını bırakmak.</strong> Dosyada orijinal diyalog artı bir dublaj varsa, <code>-an</code> ile kaldırmak ikisini de siler; haritalama istediğinizi korur.
    </p>
    <p>
      <strong>Değiştirirken uyumsuz ses uzunluğu.</strong> Videodan daha uzun yeni ses, bazı platformlarda hatalara neden olur. <code>-shortest</code> kullanın veya önce sesi kırpın.
    </p>
    <p>
      <strong>Kısa videolar için en kısa bayrağını atlamak.</strong> 6 saniyelik döngüler için, 30 saniyelik bir ses parçası görünür videonun ötesinde çalar; izleyiciler açıklanamaz bir şekilde sessizlik duyar.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Düzenleme yazılımı yüklemeden bir video dosyasından sesi kaldırın veya sessize almak için <a href="/tools/video-mute">video sessize alma aracını</a> kullanın. Sesi kaldırmadan önce klibi kesmek için <a href="/tools/video-trimmer">video kırpma aracı</a> ile ve kaldırılan parçayı kendi ön kesimi gerektiren anlatım veya müzikle değiştirmeyi planladığınızda <a href="/tools/audio-trimmer">ses kırpma aracı</a> ile eşleştirin.
    </p>
  </>
);