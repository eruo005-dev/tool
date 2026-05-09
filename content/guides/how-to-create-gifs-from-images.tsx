import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      GIF'ler yarı ölü, yarı vazgeçilmezdir. Birkaç saniyeden uzun her şey için berbattırlar, ancak e-posta, Slack önizlemeleri, Notion ve çoğu yardım masası aracında tıklama gerektirmeden satır içinde oynatılabilen tek animasyonlu format olmaya devam ediyorlar. 2 saniyelik bir ürün turu veya önce/sonra karşılaştırması yapıyorsanız, GIF hala doğru cevaptır. Bu kılavuz, ne zaman kullanılacağını, karelerinizin zamanlamasını nasıl ayarlayacağınızı ve dosya boyutunu nasıl makul tutacağınızı kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>GIF'in MP4'ü hala yendiği durumlar</h2>
    <p>
      Otomatik oynatma kaliteden daha önemli olduğunda GIF kullanın. E-posta istemcileri video etiketlerini kaldırır. Slack ve Discord bir GIF'i satır içine yerleştirir, ancak çoğu videoyu genişletmek için tıklama gerektirir. Yardım dokümanları, işe alıştırma ipuçları ve değişiklik günlüğü girdileri, bağlam içinde sessizce dönen bir GIF ile daha iyi okunur. 3 saniyenin altında, sesi olmayan ve küçük bir kareye sahip her şey GIF bölgesidir.
    </p>

    <h2>Bunun yerine MP4'e ne zaman geçilmeli</h2>
    <p>
      Klibiniz kabaca 8 saniyeyi geçtiğinde, çok fazla hareket içerdiğinde (kaydırma, panorama, video içeriği) veya Twitter veya LinkedIn'de yayınlanması gerektiğinde, MP4 veya WebM'ye geçin. 10 saniyelik iyi kalitede bir ekran kaydı MP4 olarak 1.2MB ve GIF olarak 18MB'dır. Twitter ve LinkedIn'in her ikisi de MP4'ü otomatik oynatır. Hiçbir faydası olmadan sadece GIF vergisini ödüyorsunuz.
    </p>

    <h2>Kare zamanlaması: önemli olan sayılar</h2>
    <p>
      Kare süresi milisaniye cinsinden ölçülür. Temel kurallar:
    </p>
    <p>
      <strong>Kare başına 80-200ms</strong> eğitim veya ürün turu içeriği için, her karenin ayrı bir adım olduğu durumlarda. 100ms (10 fps) ideal noktadır — duyarlı hissettirecek kadar hızlı, okunacak kadar yavaş.
    </p>
    <p>
      <strong>Kare başına 40-60ms</strong> imleç hareketi veya ince bir üzerine gelme animasyonu gibi akıcı hareketler için. 50ms'nin altında çoğu tarayıcı sizi yine de 100ms ile sınırlar — hala insanların ayağına takılan eski bir tuhaflık.
    </p>
    <p>
      <strong>500-1000ms</strong> son karede, bazen tutma karesi olarak adlandırılır. Döngünün doğrudan başa dönmek yerine nefes almasını sağlar.
    </p>

    <h2>Boyutlandırma kuralları: 2MB'ın altında kalın</h2>
    <p>
      Akış veya sohbet yerleştirmeleri için 2MB'ın altını hedefleyin. Bunun üzerinde Slack sıkıştırır, e-posta istemcileri kırpar ve Notion önizlemesi gecikmeye başlar. Etki sırasına göre kaldıraçlar:
    </p>
    <p>
      Önce boyutları düşürün — 600px genişliğinde bir GIF genellikle dokümanlar için yeterlidir ve 1200px olana kıyasla boyutu 4 kat azaltır. Ardından renk paletini azaltın (maksimum 256 renk; düz UI'ya sahip çoğu ekran kaydı için 128 veya 64 yeterlidir). Sonra kareleri kırpın — kopyaları kaldırın, kare hızını düşürün. Kaliteye en son dokunun; gradyanlarda çirkin bantlanmaya neden olma eğilimindedir.
    </p>

    <h2>Döngü vs tek seferlik</h2>
    <p>
      Varsayılan olarak sonsuz döngü kullanın. On vakadan dokuzunda, kullanıcının animasyonun ortasında gelebileceği bir akışa yerleştirme yapıyorsunuzdur ve bir döngü, kaydırmaya gerek kalmadan tüm diziyi yakalamalarını sağlar. Tek seferliği yalnızca uzun biçimli içerikler için kullanın (adım adım demo gibi), girişi tekrar izlemenin can sıkıcı olduğu durumlarda — ancak bu kadar uzunsa, tekrar MP4'ü düşünün.
    </p>

    <h2>Bilmeye değer iki tuzak</h2>
    <p>
      <strong>Saydamlık sınırlıdır.</strong> GIF yalnızca ikili saydamlığı destekler (tamamen açık veya tamamen kapalı). Yumuşak gölgeler ve kenar yumuşatılmış kenarlar çirkin bir hale gösterir. Gerçek alfaya ihtiyacınız varsa, WebP veya APNG kullanın — veya GIF'in içine, yerleştirileceği yere uyan düz bir arka plan ekleyin.
    </p>
    <p>
      <strong>GIF'ler gradyanlarda iyi değildir.</strong> 256 renkli palet sınırı, düzgün bir şekilde solan her şeyde görünür bantlanma üretir. Ya titrek bir çıktı seçin (gürültü ekler, bantlanmayı gizler) ya da daha düz renkler kullanmak için kaynağı yeniden tasarlayın.
    </p>

    <h2>Pratik bir iş akışı</h2>
    <p>
      Kaynağınızı nihai boyutların 2 katı ve ihtiyacınız olduğunu düşündüğünüz kare hızının iki katı olarak kaydedin — daha sonra ayrıntıyı taklit etmektense küçültmek daha kolaydır. Gerçekten önemli olan 3-5 saniyeye kırpın,{" "}
      <a href="/tools/gif-maker">GIF oluşturucumuza</a> atın, kare süresini 100ms olarak ayarlayın, boyutları 600-800px ile sınırlayın ve dışa aktarın. 2MB'ın üzerindeyse, başka bir şeye dokunmadan önce genişliği yarıya indirin. Bu iş akışı, bir dakikadan kısa sürede yayına hazır GIF'ler üretir.
    </p>
  </>
);