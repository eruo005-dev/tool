import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir podcast'i 1.5 kat hızda dinlemek, dinleme sürenizin üçte birini kazandırır. 2 saatlik bir dersi 2 kat hıza çıkarmak, onu 1 saatlik bir tekrar seansına dönüştürür. Ancak bir sorun var: saf hız değişiklikleri seslerin çizgi film sincapları gibi çıkmasına neden olur (perde hızla birlikte yükselir). Bunu doğru yapmak, zaman genişletme (time-stretching) gerektirir &mdash; perdeyi korurken hızı değiştirmek &mdash; ki bu da WSOLA ve faz vokoderi gibi isimlere sahip sinyal işleme algoritmalarını kullanır. Bu kılavuz, hız kaydırıcısını hareket ettirdiğinizde gerçekte ne olduğunu, modern ses uygulamalarının perdeyi neden otomatik olarak koruduğunu, efektin arkasındaki algoritmaları ve bunların ödünleşimlerini, anlaşılabilirlik için hız sınırlarını ve konuşma kullanım durumları (1.5&ndash;2 kat podcast'ler) ile müzik kullanım durumları (ince perde korumalı tempo ayarlamaları) arasındaki ayrımı kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Saf yeniden örnekleme ve zaman genişletme</h2>
    <p>
      <strong>Saf yeniden örnekleme (Naive resampling)</strong>, sesi örnekleri daha hızlı oynatarak hızlandırır. 2 kat hızdaki 48kHz'lik bir akış, orijinal içerik için etkin bir şekilde 96kHz olur ve çıkış cihazı bunu frekansları sıkıştırarak 48kHz'de işler &mdash; perde bir oktav yükselir. Plakları daha hızlı döndürdüğünüzde çıkan ses budur.
    </p>
    <p>
      <strong>Zaman genişletme (Time-stretching)</strong>, perdeyi değiştirmeden süreyi değiştirir. Sinyal, kısa örtüşen pencerelere bölünür; algoritma, sınırlarda faz sürekliliğini koruyarak ya pencereleri tekrarlar (yavaşlatma için) ya da bazılarını atlar (hızlandırma için). Perde aynı kalır.
    </p>
    <pre>{`# FFmpeg: 1.5 kat hıza zaman genişletme, perdeyi koru
ffmpeg -i input.mp3 -af "atempo=1.5" output.mp3

# 2 kat hız (atempo, geçiş başına 0.5x ila 2.0x arasını destekler)
ffmpeg -i input.mp3 -af "atempo=2.0" output.mp3

# 3 kat hız zincirleme gerektirir (atempo sınırı filtre başına 2.0'dır)
ffmpeg -i input.mp3 -af "atempo=2.0,atempo=1.5" output.mp3

# Saf yeniden örnekleme (perde de değişir, eski efekt)
ffmpeg -i input.mp3 -af "asetrate=48000*1.5,aresample=48000" output.mp3`}</pre>

    <h2>WSOLA ve SOLA</h2>
    <p>
      SOLA (Senkronize Örtüşme-Ekleme) ve WSOLA (Dalga Formu Benzerliği Örtüşme-Ekleme), konuşma için klasik zaman genişletme algoritmalarıdır. Sinyali örtüşen ~25ms'lik çerçevelere ayırır ve dalga formunun sürekli olması için alt örnek hizalamasıyla bunları birbirine dikerler.
    </p>
    <p>
      WSOLA, SOLA'yı dalga formu benzerliğine dayalı en iyi hizalama noktası için küçük bir pencere arayarak geliştirir, bu da faz yapaylıklarını azaltır. Çoğu podcast uygulaması hız kontrollerinin arkasındaki algoritmadır. Konuşma için 2 kata kadar neredeyse şeffaftır; 2.5 katın ötesinde, algoritma seçiminden bağımsız olarak yapaylıklar duyulabilir hale gelir.
    </p>

    <h2>Faz vokoderi</h2>
    <p>
      Müzik için faz vokoderleri frekans alanında çalışır &mdash; STFT (kısa zamanlı Fourier dönüşümü) sinyali örtüşen FFT pencerelerine ayırır, algoritma her frekans bölmesinin genlik ve fazını manipüle eder ve ters STFT bunları yeni hızda yeniden birleştirir.
    </p>
    <p>
      Faz vokoderleri, karmaşık harmonik içeriği (akorlar, armonikler) WSOLA'dan daha iyi korur ancak geçici sesleri (davullar, ataklar) bozar. Modern uygulamalar (faz kilitleme, geçici ses algılama) bunu hafifletir, ancak müzikte aşırı hız değişiklikleri yine de bozulmaya neden olur. Bunun için üst düzey ticari araç &Eacute;lastique Pro'dur; açık kaynak eşdeğeri rubberband'dir.
    </p>

    <h2>Ses perdesi için PSOLA</h2>
    <p>
      PSOLA (Perde-Senkronize Örtüşme-Ekleme), <em>perde</em> kaydırma (hızı değiştirmeden perdeyi değiştirme) için kullanılır. WSOLA'nın karşılığıdır ve vokal ayar eklentilerinin arkasındaki algoritmadır. Doğrudan hız değişiklikleri için kullanılmaz, ancak birçok araç, perde ve hızı bağımsız olarak ayarlamanıza izin vermek için PSOLA ve WSOLA'yı birleştirir.
    </p>

    <h2>Podcast'ler için dinleme hızları</h2>
    <pre>{`Hız    Algılanan          Akılda Tutma
1.0x    Doğal tempo        Temel
1.25x   Hafif hızlı        ~1x'in %98'i
1.5x    Rahat hızlı        ~1x'in %95'i (ideal nokta)
1.75x   Hızlı, odak gerek  Çoğu için ~%88
2.0x    Oldukça hızlı      ~%80, azalan getiri
2.5x    Anlama hızla       Sadece hızlı konuşanlar için ~%60
          düşer
3.0x    Genelde kullanılmaz Yavaş konuşanlar dışında <%50`}</pre>
    <p>
      Bilinçli tempolu konuşmacılar (Dan Carlin, Joe Rogan konukları) 2x hızı iyi tolere eder. Zaten hızlı konuşan konuşmacılar (birçok teknoloji podcast'i) en iyi 1.5x hızda performans gösterir. Çok fazla sessizlik içeren röportaj ağırlıklı programlar, sessizlik kaldırma ve hızlandırmanın birleşmesi nedeniyle 1.75x hızda doğal gelebilir.
    </p>

    <h2>Müzik hız değişiklikleri</h2>
    <p>
      Müzik için küçük hız değişiklikleri (+/- %5) sıradan dinleyiciler için neredeyse algılanamaz ve canlı kayıt tempo kaymalarını düzeltebilir. Daha büyük değişiklikler (+/- %15) belirgindir ancak iyi algoritmalarla yine de müzikal gelebilir. Bunun ötesinde, remix bölgesine girersiniz.
    </p>
    <p>
      Not: DJ'ler genellikle perde ve tempoyu birlikte değiştirir (bir pikaptaki klasik vinil perde kontrolü). DJ bağlamlarında perdeyi korurken tempoyu değiştirmek kasıtlı olarak alışılmadık bir durumdur &mdash; hız değişikliği perdeyi <em>yükseltmelidir</em> çünkü beat eşleşmiş bir miksle eşleşen budur.
    </p>

    <h2>Öğrenme için yavaşlatma</h2>
    <p>
      Sesi 0.75x veya 0.5x'e yavaşlatmak, transkripsiyon, dil öğrenimi ve gitar tab çıkarma için kullanışlıdır. Zaman genişletme, yavaşlatmayı hızlandırmadan daha iyi yönetir çünkü algoritmanın çıkış örneği başına çalışacak daha fazla kaynak malzemesi vardır. Perde bozulmadan kalır, ifade netliği artar.
    </p>
    <p>
      0.5x hız, öğrenme uygulamaları için yaygın bir tabandır &mdash; bundan daha yavaşında yapaylıklar (bozulmuş ünsüzler, bulanık armonikler) netlik kazancından daha ağır basar.
    </p>

    <h2>Yaratıcı efektlerde perde-hız bağlantısı</h2>
    <p>
      Sincap efekti (perde değişikliğiyle saf hızlandırma), komedi ve lo-fi havası için kasıtlı olarak kullanılır. Yavaşlatılmış ve yankılanmış efekt (aynı hız ve perde düşüşü), doğranmış ve vidalanmış müzikte ve yavaşlatılmış remix TikTok'larında kullanılır. Her ikisi de zaman genişletmeyi atlar ve birleşik değişimi benimser.
    </p>
    <pre>{`# Sincap efekti (perdeyle hızlandırma)
ffmpeg -i input.mp3 \\
  -af "asetrate=48000*1.3,aresample=48000" output.mp3

# Yavaş-yankı efekti (perde düşüşüyle yavaşlatma)
ffmpeg -i input.mp3 \\
  -af "asetrate=48000*0.85,aresample=48000,aecho=0.8:0.9:500:0.3" \\
  output.mp3`}</pre>

    <h2>Video ve ses senkronizasyonu</h2>
    <p>
      Bir videoyu hızlandırırken, ses ve video birlikte hız değiştirmelidir. Çoğu video uygulaması bunu şeffaf bir şekilde yönetir &mdash; 1.5x hız ayarlayın ve her iki akış da ayarlanır. Perde arka planda ses zaman genişletilir (perde korunur) ve video kare sayısı azaltılır veya kare karıştırılır.
    </p>
    <pre>{`# Videoyu ve sesi birlikte hızlandır, perdeyi koru
ffmpeg -i input.mp4 \\
  -filter_complex "[0:v]setpts=0.667*PTS[v];[0:a]atempo=1.5[a]" \\
  -map "[v]" -map "[a]" output.mp4

# Not: setpts 0.667 = 1/1.5 (video daha hızlı oynar),
# atempo 1.5 = ses 1.5x oynar`}</pre>

    <h2>Kalite ipuçları</h2>
    <p>
      Sahip olduğunuz en yüksek kaliteli kaynaktan başlayın. Hız değişiklikleri, mevcut yapaylıkları artırır &mdash; sıkıştırma çınlaması, düşük örnekleme hızları, kırpma daha duyulabilir hale gelir. 320kbps MP3'ün zaman genişletilmiş hali, 128kbps olandan belirgin şekilde daha iyi duyulur.
    </p>
    <p>
      Profesyonel kalitede konuşma hızlandırma için, geçici ses algılama uygulayan araçlar kullanın &mdash; algoritma, ünsüzleri (patlamalı sesler, tıslamalar) bozulmadan korur, bu da yüksek hızlardaki en büyük yapaylıktır.
    </p>

    <h2>Podcast iş akışı: sessizlik kaldırma ile birleştirin</h2>
    <p>
      Sessizlik kaldırma artı hızlandırma birleşir. Bir podcast'in ölü hava olan %15'ini kaldırmak, ardından 1.5x uygulamak, size etkin bir şekilde 1.75x dinleme hızı verir. Premium podcast uygulamaları Overcast ("Smart Speed") varsayılan olarak bunu yapar &mdash; 2 saatlik bir programa abone olursunuz ve size aceleci gelmeden 1 saat 10 dakikada teslim eder.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Zaman genişletme demek istediğinizde saf yeniden örnekleme kullanmak.</strong>{" "}
      Bir podcast'te sincap sesleri, komik olmaya çalışmıyorsanız bir hatadır.
    </p>
    <p>
      <strong>Atempo'nun geçiş başına 2.0 sınırını aşmak.</strong> Filtreleri zincirleyin: 3x için
      <code> atempo=2.0,atempo=1.5</code>.
    </p>
    <p>
      <strong>Kayıplı kaynağa hız değişikliği uygulayıp tekrar kayıplı kodlamak.</strong>{" "}
      Kalite kaybını artırır. Mümkün olan en yüksek kaliteli kaynaktan başlayın.
    </p>
    <p>
      <strong>Müzikte geçici ses yapaylıklarını göz ardı etmek.</strong> Davullar büyük hız değişikliklerinde bozulur. Müzik için geçici ses korumalı araçlar (rubberband) kullanın.
    </p>
    <p>
      <strong>Video zaman damgası ayarını unutmak.</strong> Videoyu hızlandırırken, sadece birini değil, hem video PTS'sini hem de ses temposunu ayarlamalısınız.
    </p>
    <p>
      <strong>Yavaşlatmanın zahmetsiz olduğunu varsaymak.</strong> Hızlandırmadan daha iyidir ancak yine de 0.5x'in altında faz yapaylıkları üretir. Zorunda değilseniz 0.5'in altına inmeyin.
    </p>
    <p>
      <strong>Sadece konuşma ile test etmek.</strong> Konuşma için optimize edilmiş algoritmalar (WSOLA), müzikte duyulabilir yapaylıklar üretir. Temsili içerik üzerinde test edin.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Perde korumalı oynatma hızını değiştirmek için{" "}
      <a href="/tools/audio-speed-changer">ses hız değiştiriciyi</a> kullanın. Maksimum etkin hız kazancı için hızlandırmadan önce ölü havayı temizlemek üzere{" "}
      <a href="/tools/audio-silence-remover">ses sessizlik kaldırıcı</a> ile eşleştirin ve perdeyi bağımsız olarak ayarlamanız gerektiğinde (örneğin, bir müzik parçasını tempo değişikliği olmadan transpoze etmek){" "}
      <a href="/tools/audio-pitch-changer">ses perde değiştiriciyi</a> kullanın.
    </p>
  </>
);