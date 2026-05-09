import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Sayfa numaraları, 60 sayfalık bir sözleşmede birinin "12. sayfadaki tazminat maddesi" demesi ve belgede hiç numara olmamasına kadar önemsiz görünür. Ardından saatler süren bir arama başlar. Bu rehber, sayfa numaralarının gerçekten ne zaman önemli olduğunu, farklı belge türlerinin izlediği konumlandırma kurallarını ve profesyonel bir PDF'yi amatör olandan ayıran küçük kararları (ilk sayfayı atla, ek numaralandırması, toplam sayfa formatı) kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Sayfa numaraları ne zaman önemlidir</h2>
    <p>
      Dört durum sayfa numaralarını tartışılmaz kılar. <strong>Sözleşmeler ve yasal belgeler</strong> — maddeler diğer maddelere sayfa numarasıyla atıfta bulunur; hakemler ve yargıçlar sayfa numarasına göre gezinir. <strong>Yaklaşık 20 sayfanın üzerindeki kitaplar ve uzun raporlar</strong> — okuyucunun gerçekten çalışan bir içindekiler tablosuna ihtiyacı vardır. <strong>Ciltleme için baskı</strong> — sayfaları ciltlemek için fiziksel olarak ayırırsınız ve numaralandırılmamış sayfalar yanlış sırada sonlanabilir. <strong>İfade tutanakları, yeminli beyanlar ve tanık ifadeleri</strong> — genellikle mahkeme tarafından zorunlu kılınır, bazen yanında satır numaralandırması da bulunur.
    </p>
    <p>
      Kısa bir not, tek sayfalık bir fatura veya slayt çıktısı için sayfa numaralarını atlayın. Gerçek bir sorunu çözmeden görsel karmaşa eklerler.
    </p>

    <h2>Konum: alt orta</h2>
    <p>
      Çoğu iş belgesi için varsayılan. Raporlar, beyaz sayfalar, teklifler, sözleşmeler. Alt orta nötrdür — başlıklarla rekabet etmez, içerik yeniden akarken kaymaz ve hem tek taraflı hem de çift taraflı baskı için çalışır. Hangi kuralı izleyeceğinizden emin değilseniz, doğru cevap budur.
    </p>

    <h2>Konum: üst dış (kitaplar)</h2>
    <p>
      Kitaplar ve uzun yayınlar için numaralar üst dış köşeye gider — tek (sağ) sayfalarda sağ üst, çift (sol) sayfalarda sol üst. Bu, numarayı okuyucunun başparmağının doğal olarak döndüğü yere koyar, böylece hızlıca bir sayfaya geçebilirler. Bu, çoğu PDF sayfa numarası aracının "karşılıklı sayfalar" veya "aynalı kenar boşlukları" seçeneği olarak desteklediği aynalı düzenler gerektirir.
    </p>

    <h2>Konum: alt dış (başlıklı raporlar)</h2>
    <p>
      Belgenizde zaten çalışan başlıklar (bölüm adı, kitap başlığı) varsa, sayfa numarasını alt dış köşeye koymak üst kısmı temiz tutar ve sayfaları çevirirken numarayı bulmayı kolaylaştırır. Kurumsal yıllık raporlar ve akademik tezler bu düzeni kullanır.
    </p>

    <h2>"Sayfa X / Y" vs. düz numaralar</h2>
    <p>
      Okuyucunun belgeyle sıra dışı karşılaşma olasılığı olduğunda <em>Sayfa X / Y</em> kullanın — faksla gönderilen sözleşmeler, e-postadan taranmış belgeler, basılıp yeniden taranmış paketler. "Y" onlara bir bakışta belgenin tamamına sahip olup olmadıklarını söyler. Kitaplar, ciltli raporlar ve içindekiler tablosu olan her şey için düz numaralar kullanın — okuyucu zaten ne kadar uzun olduğunu bilir.
    </p>
    <p>
      Bir uç durum: belgeniz imzalanacaksa ve değişken uzunlukta ekleri varsa, ana gövde için "Sayfa X / Y" kullanmak ancak ekler için düz numaralar kullanmak en temiz kuraldır.
    </p>

    <h2>İlk sayfayı atla: ilk sayfa bir başlık veya kapak sayfası olduğunda</h2>
    <p>
      Kapak sayfaları, başlık sayfaları ve yasal başlık sayfaları numaralandırılmaz. Numaralandırmaya sayfa 2'den başlayın, ancak gelenek değişir: kitaplar geleneksel olarak başlık sayfasını "i" (gizli) olarak numaralandırır ve Arap rakamlarına ilk bölümde başlar. Çoğu iş belgesi için kapak sayfasını tamamen atlayın ve okuyucunun ilk gerçek sayfa olarak kabul ettiği yerde "1" ile başlayın. Çoğu araç bir "ilk N sayfayı atla" seçeneği sunar — manuel kırpma yerine bunu kullanın.
    </p>

    <h2>Ekler ve yeniden başlatma kuralları</h2>
    <p>
      Uzun belgeler genellikle ekler için numaralandırmayı yeniden başlatır: Ek A için <code>A-1, A-2, A-3</code>, Ek B için <code>B-1, B-2</code>. Bu, ana gövde mi yoksa bir ek mi olduğu konusunda belirsizlik olmadan "bkz. A-7" gibi bir referans vermeyi kolaylaştırır. Aracınız ön ekli numaralandırmayı desteklemiyorsa, ek başına ayrı PDF'lere bölmek ve ardından birleştirmek bazen daha basittir.
    </p>

    <h2>İş akışı</h2>
    <p>
      PDF'nizi <a href="/tools/pdf-page-numbers">PDF sayfa numarası aracımızda</a> açın, konumu seçin (alt orta güvenli varsayılandır), formatı seçin (seyahat edebilecek her şey için <em>Sayfa X / Y</em>, aksi halde düz numaralar), bir kapağınız varsa ilk sayfayı atla seçeneğini ayarlayın ve dışa aktarın. İlk, orta ve son sayfaları rastgele kontrol edin — belgenizde yatay sayfalar veya gömülü taramalar varsa, numara beklenmedik bir yere gelebilir ve şimdi düzeltmek imzalardan sonra düzeltmekten daha kolaydır.
    </p>
  </>
);