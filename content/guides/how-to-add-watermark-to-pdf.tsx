import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir PDF üzerindeki filigran iki iş yapar: okuyucuya belgenin hangi durumda
      olduğunu (taslak, örnek, gizli) söyler ve sıradan paylaşımları çoğu kişinin
      uğraşmayacağı kadar zorlaştırır. Hepsi bu. DRM değildir, şifreleme değildir
      ve kararlı biri 30 saniyede kaldırabilir. Bu rehber, filigranların gerçekten
      eklemeye değer olduğu durumları, ne yazılması gerektiğini ve okunabilirliği
      bozmadan işlerini yapmaları için nasıl biçimlendirileceklerini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Filigranın gerçekten yardımcı olduğu durumlar</h2>
    <p>
      Üç durum emeğine değer. Dahili olarak dolaşan <strong>Taslaklar</strong> — büyük
      çapraz bir &ldquo;TASLAK&rdquo;, birinin 3. sürümü bir müşteri toplantısında
      nihai olarak alıntılamasını engeller. Sözleşme imzalanmadan önce paylaştığınız
      <strong>İş örnekleri</strong> — portföyler, örnek bölümler, teklif sunumları.
      Filigran, bunun tam teslimat olmadığına dair nazik bir hatırlatmadır. Belirli
      bir kitleye sahip <strong>Gizli belgeler</strong> — filigrandaki alıcının adı,
      iletmeden önce iki kere düşünmelerini sağlar.
    </p>

    <h2>Güvenlik tiyatrosu olduğu durumlar</h2>
    <p>
      Fikri mülkiyet hırsızlığından endişelendiğiniz için filigran ekliyorsanız,
      durun. Beş dakikası olan herkes PDF'i görseller olarak yeniden dışa aktarabilir,
      OCR çalıştırabilir ve temiz bir kopya elde edebilir. Filigranlar sıradan
      paylaşımları caydırır, motive olmuş aktörleri değil. İçerik gerçekten korumaya
      ihtiyaç duyuyorsa, gerçek bir çözüm kullanın — yalnızca görüntüleme amaçlı
      belge portalları, süresi dolan bağlantılar veya uygun DRM. Filigran etiketlemek
      içindir, kilitlemek için değil.
    </p>

    <h2>Stil: çapraz TASLAK</h2>
    <p>
      Taslaklar için gelenek, her sayfada büyük, açık gri, çapraz ve ortalanmış
      olmasıdır. 60-80 punto yazı tipi, %15-20 opaklık, 45 derece döndürülmüş.
      Bir bakışta okunacak kadar büyük, gövde metninin hala okunabilir olması için
      yeterince açık. Tamamı büyük harflerle &ldquo;TASLAK&rdquo;, başka bir şey
      değil.
    </p>

    <h2>Stil: ortalanmış GİZLİ</h2>
    <p>
      Gizli belgeler için yatay ortalanmış bir damga çapraz olandan daha iyi
      çalışır — daha resmi ve daha az geçici hissettirir. 40-50 punto, koyu kırmızı
      veya siyah, hafif istiyorsanız %10-15 opaklık, iddialı istiyorsanız %40-60.
      Altına daha küçük puntoyla alıcının adını ekleyin; iletmeyi caydırmada en
      etkili yöntemdir.
    </p>

    <h2>Stil: düşük opaklıkta şirket adı veya logosu</h2>
    <p>
      İş örnekleri ve portföyler için logonuzu veya şirket adınızı, %10 opaklıkta,
      sayfada çapraz ortalanmış veya döşenmiş olarak kullanın. Amaç, bir ekran
      görüntüsüne bakan herkesin, filigran işin önüne geçmeden kaynağı
      tanımlayabilmesidir. Gösterişli bir marka rengi değil, gri tutun —
      gösterişli filigranlar çabuk bayatlar ve içeriğinizle dikkat çekmek için
      savaşır.
    </p>

    <h2>Metin ve logo karşılaştırması</h2>
    <p>
      Metin filigranları temiz bir şekilde ölçeklenir ve alıcı başına düzenlemesi
      kolaydır. Logo filigranları daha cilalı görünür ancak temiz bir şeffaf PNG
      gerektirir ve kaynak düşük çözünürlüklüyse piksellenebilir. Temel kural:
      dışa dönük örnekler için (müşteriler, potansiyel müşteriler) logo, dahili
      durumlar için (TASLAK, İNCELEME İÇİN, YALNIZCA DAHİLİ) metin kullanın.
    </p>

    <h2>Yazı tipi boyutu ve opaklık kuralları</h2>
    <p>
      Yazı tipi boyutu, odanın karşısından okunabilirlik için gövde metninizin
      1,5-2 katı olmalıdır. Standart bir mektup veya A4 sayfasında bu genellikle
      48-72 puntodur. İnsanların takıldığı nokta opaklıktır: %10 boş bir sayfada
      görünmez hissettirir ancak gövde metni üzerinde net okunur çünkü mürekkep
      siyah yazının üzerine katmanlanır. %30 ve üzeri içeriği gizlemeye başlar.
      Çoğu durum için %12-18'i hedefleyin ve en yoğun sayfanızda test edin.
    </p>

    <h2>Renk ve kontrast</h2>
    <p>
      Varsayılan olarak orta gri (#808080 veya #A0A0A0) kullanın. Beyaz sayfalarda
      çalışır, belgedeki hiçbir marka rengiyle çatışmaz ve fotokopide okunabilir.
      Kırmızı acil olarak algılanır (GİZLİ için iyi, TASLAK için yanlış). Tam
      opaklıkta doygun hiçbir renkten kaçının — akar ve tabloları okunamaz hale
      getirir.
    </p>

    <h2>İş akışı</h2>
    <p>
      PDF'inizi <a href="/tools/pdf-watermark">PDF filigran aracımıza</a> sürükleyin,
      metni seçin veya bir logo yükleyin, opaklığı yaklaşık %15'e ayarlayın,
      konumlandırın (TASLAK için çapraz-orta, GİZLİ için yatay-orta, örnekler için
      köşe-döşeme) ve dışa aktarın. Göndermeden önce çıktıyı her zaman yeniden açın
      ve her sayfayı kaydırın — bazen bir filigran imza satırının veya kritik bir
      tablonun üzerine gelir ve bunu alıcıdan önce yakalamak istersiniz.
    </p>
  </>
);