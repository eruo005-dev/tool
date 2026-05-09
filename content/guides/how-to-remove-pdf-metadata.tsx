import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Oluşturduğunuz her PDF, sessiz bir yolcu taşır: meta veriler. Adınız, kullandığınız
      yazılım, kaydettiğiniz tam zaman, bazen kullanıcı adınızı da içeren bilgisayarınızdaki
      tam dosya yolu. Geçen ay gönderdiğiniz bir PDF&rsquo;yi açın ve özelliklerini kontrol edin
      — içinde ne olduğuna muhtemelen şaşıracaksınız. Bu kılavuz, hangi meta verilerin
      gerçekten depolandığını, bunları ne zaman temizlemeniz gerektiğini, neyi temizlemeniz
      gerektiğini ve hepsini temizlediğinizi nasıl doğrulayacağınızı kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir PDF&rsquo;de gerçekte ne gizlidir</h2>
    <p>
      Her PDF&rsquo;deki standart meta veri alanları Başlık, Yazar, Konu, Anahtar Kelimeler,
      Oluşturan (kaynak belgeyi yapan uygulama — örn. &ldquo;Microsoft
      Word&rdquo;), Üretici (PDF&rsquo;yi üreten kütüphane — örn. &ldquo;Acrobat
      Distiller 15.0&rdquo;), Oluşturma Tarihi ve Değiştirme Tarihi&rsquo;dir.
    </p>
    <p>
      Bunun yanı sıra, PDF&rsquo;ler XMP meta verileri (daha genişletilebilir bir blok), gömülü
      dosya ekleri, içinde hâlâ adınızın bulunduğu form alanı varsayılanları ve bazen
      — insanların en çok gözden kaçırdığı şey — kaynak belgenin tam dosya yolunu
      içerebilir. <code>C:\Kullanıcılar\ahmet\Masasüstü\gizli.docx</code> dosyasından bir Word
      belgesi dışa aktarın ve bu yol, PDF&rsquo;nin XMP bloğuna kadar gidebilir.
    </p>

    <h2>Ne zaman önemlidir: gazetecilik ve kaynak koruma</h2>
    <p>
      Bir gazeteciyseniz ve bir kaynak size sızdırılmış bir belgeyi PDF olarak gönderiyorsa,
      meta veriler, içeriği daha okumadan onları tanımlayabilir. Reality Winner davası
      bunun en bilinen örneğidir — yazıcı takip noktaları ve meta veriler, sızıntıyı tek bir
      kişiye indirgemeye yardımcı oldu. Yayınlamadan önce ve ideal olarak dosyayı ağa bağlı
      bir makinede açmadan önce her zaman meta verileri temizleyin ve yeniden dışa aktarın.
    </p>

    <h2>Ne zaman önemlidir: iş arama ve anonimleştirme</h2>
    <p>
      Özgeçmişinizi Word&rsquo;den dışa aktarıyorsunuz. Yazar alanı &ldquo;Ayşe Yılmaz&rdquo;
      ve Oluşturan alanı &ldquo;Mac için Microsoft Word 2019&rdquo; olarak okunuyor.
      Sorun yok. Ancak anonim yazı örnekleri, takma adlı portföyler gönderiyorsanız veya
      hâlihazırda çalıştığınız bir şirkete başvuruyor ve sessiz, paralel bir arama yapmak
      istiyorsanız, bu meta veriler, dosya adınızın sağladığını düşündüğünüz anonimleştirmeyi
      bozar.
    </p>

    <h2>Ne zaman önemlidir: dava ve keşif</h2>
    <p>
      Hukuki keşifte meta veriler kanıttır. Değiştirme tarihleri, bir belgenin ne zaman
      yazıldığına dair iddialarla çelişebilir. Yazar alanları, imzaya rağmen bir şeyi
      gerçekte kimin yazdığını gösterebilir. Koruyucu bir karar kapsamında belge üretiyorsanız,
      meta verilerin kapsam dahilinde olup olmadığını kontrol edin — bazen onları korumalı,
      bazen temizlemelisiniz. Bunu yanlış yaparsanız her iki durumda da başınız belaya girer.
    </p>

    <h2>Temizlenecek alan listesi</h2>
    <p>
      En azından şunları temizleyin: <code>Başlık</code>, <code>Yazar</code>, <code>Konu</code>,
      <code>Anahtar Kelimeler</code>, <code>Oluşturan</code>, <code>Üretici</code>, <code>OluşturmaTarihi</code>,
      <code>DeğiştirmeTarihi</code>. Ayrıca, aracınız izin veriyorsa XMP paketini tamamen
      kaldırın ve gömülü dosyalar ile form alanı varsayılanlarını kontrol edin.{" "}
      <a href="/tools/pdf-metadata-remover">PDF meta veri temizleyicimizde</a> hızlı bir geçiş,
      standart alanları halleder; ardından ayrı bir görüntüleyici ile doğrulayın.
    </p>

    <h2>Meta veri temizlemenin yapmadığı şeyler</h2>
    <p>
      Meta veri temizleme, görünür içeriği karartmaz. Adınız belge gövdesinde, bir imza
      satırında, bir başlıkta yazılıysa veya bir görsele gömülüyse, hâlâ oradadır. Meta veri
      kaldırma yalnızca gizli alanlarla ilgilidir. Görünür içerik için gerçek karartmaya
      ihtiyacınız vardır — metni piksel seviyesinde karartmak, üzerine siyah bir kutu çizmek
      değil (herkes kaldırabilir).
    </p>
    <p>
      Benzer şekilde, meta veri kaldırma, izlenen değişikliklere, yorumlara, gömülü yazı
      tiplerine (kimlik bilgisi taşıyabilir) veya form alanı değerlerine dokunmaz. Birçok
      &ldquo;temizlenmiş&rdquo; PDF, bu kanallardan biri aracılığıyla hâlâ kimlik sızdırır.
    </p>

    <h2>Temizlediğinizi nasıl doğrulayabilirsiniz</h2>
    <p>
      Tek bir aracın &ldquo;temizlendi&rdquo; onayına güvenmeyin. Çıktıyı{" "}
      <a href="/tools/pdf-metadata-viewer">PDF meta veri görüntüleyicimizde</a> veya başka
      bir denetleyicide yeniden açın ve tüm alanlara bakın. Çoğu aracın unuttuğu şey XMP
      bloğudur. Linux veya Mac&rsquo;te <code>exiftool</code>, özel alanlar dahil her şeyi
      döker. Windows&rsquo;ta, sağ tıklama özellikleri standart alanları gösterir ancak
      XMP&rsquo;yi göstermez.
    </p>
    <p>
      Hassas yayınlar için çift katmanlı bir yaklaşım: meta verileri temizleyin, ardından
      PDF&rsquo;yi yeni bir PDF&rsquo;ye yazdırın (bu, dosyayı yeniden oluşturur ve kalan
      alanların çoğunu bırakır), ardından tekrar doğrulayın. Kaynak belgeyi sıfırdan yeniden
      oluşturmadan temiz bir sayfaya en yakın şey budur.
    </p>
  </>
);