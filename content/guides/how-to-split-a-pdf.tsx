import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      120 sayfalık bir PDF'iniz var ve sadece 4. bölüme ihtiyacınız var. Ya da 30 sayfalık bir sözleşme, sadece 12-13. sayfaları imzalı, gerisi taslak. Veya e-postayla gönderilemeyecek kadar büyük bir rapor. Bir PDF'i bölmek genellikle göründüğünden daha hızlıdır, ancak yalnızca hangi modu istediğinizi ve bu süreçte neyi kaybedeceğinizi biliyorsanız. İşte gerçekten önemli olan şeyler.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>İnsanların PDF bölmesinin üç nedeni</h2>
    <p>
      Birincisi, daha büyük bir belgeden bir bölümü çıkarmak — bir ders kitabından bir bölüm, bir rapordan bir ek, yıllık bir paketten bir ayın hesap özeti. İkincisi, imzalı sayfaları taslaklardan ayırmak, böylece karşı imzalı versiyon müzakere geçmişi olmadan temiz bir şekilde gönderilir. Üçüncüsü, bir dosyayı e-posta eki sınırının altına indirmek için küçültmek (Gmail'in 25MB'ı genellikle engeldir).
    </p>
    <p>
      Bunların her biri biraz farklı bir bölme modu ister, işte insanların takıldığı nokta da burasıdır.
    </p>

    <h2>Sayfa aralıkları ve sayfa başına bir</h2>
    <p>
      Çoğu bölücü iki mod sunar. <strong>Sayfa aralığı</strong>, belirli sayfaları (örneğin, 12-13 veya 40-62) tek bir yeni PDF olarak çıkarır — bu, zamanın %90'ında istediğiniz şeydir. <strong>Sayfa başına bir</strong>, dosyayı her sayfa için bir tane olmak üzere N ayrı PDF'ye ayırır; bu, tüm bir belgeyi yeniden sıralamadığınız veya sayfaları bir tarama iş akışına beslemediğiniz sürece neredeyse her zaman aşırıya kaçmaktır.
    </p>
    <p>
      <a href="/tools/pdf-split">PDF bölme aracımız</a> her ikisini de tarayıcıda yapar, böylece dosya cihazınızdan asla ayrılmaz. Yalnızca bir bölüm alıyorsanız, aralığı yazın ve devam edin.
    </p>

    <h2>Bölmenin koruduğu şeyler</h2>
    <p>
      Sayfa içeriği, gömülü yazı tipleri, resimler ve metin katmanı (aranabilirlik için önemlidir) temiz bir şekilde korunur. Sakladığınız sayfalardaki açıklamalar ve vurgulamalar da onlarla birlikte gelir. Sakladığınız aralık içinde kalan dahili bağlantılar hala çalışacaktır.
    </p>

    <h2>Kaybettikleriniz</h2>
    <p>
      Genel yer imleri — bölümlere atlamanızı sağlayan kenar çubuğu içindekiler tablosu — genellikle silinir veya yalnızca aralığınızın içinde kalanlara indirgenir. Kestiğiniz sayfalara işaret eden dahili bağlantılar ölü bağlantılara dönüşecektir. Orijinal dosyadaki dijital imzalar, böldüğünüz anda geçersiz hale gelir; bu beklenen bir durumdur, imzalı baytlar artık eşleşmez.
    </p>
    <p>
      Yer imleri sizin için önemliyse (ders kitabı, sık sık başvuracağınız uzun rapor), bölmeden önce bunu umursayıp umursamadığınıza karar verin. Umursuyorsanız, tam dosyayı saklayın ve yalnızca paylaşırken bir aralık çıkarın.
    </p>

    <h2>Yer imine göre bölme (yapılandırılmış bölmeler)</h2>
    <p>
      Yaygın bir profesyonel iş akışı: düzgün yer imlerine sahip bir kitap veya rapor ve her bölümün kendi dosyası olacak şekilde bölmek istiyorsunuz. Temel bölücüler bunu yapmaz — yalnızca sayfa numaralarını anlarlar. Yer imine duyarlı bölmeler için, bir masaüstü aracına (PDFsam Basic ücretsizdir ve bunda şaşırtıcı derecede iyidir) ihtiyacınız vardır veya <code>pdftk</code> veya <code>qpdf</code> gibi bir şeyle komut dosyası oluşturursunuz.
    </p>
    <p>
      Çoğu insan için, bunun var olduğunu bilmek faydalıdır ancak kurulumuna değmez. Yılda iki kez bölme yapıyorsanız, sayfa aralıkları olan bir tarayıcı aracı yeterlidir.
    </p>

    <h2>E-posta boyutu için bölme</h2>
    <p>
      Amacınız "25MB'ın altına sığdırmak" ise, bölme ikinci en iyi cevaptır. Birincisi: dosyayı sıkıştırın. Taranmış PDF'ler genellikle %80-90 havadır — bir sıkıştırıcı onları kolayca yarıya indirebilir. Önce bunu deneyin. Dosya sıkıştırmadan sonra bile gerçekten çok büyükse (uzun taranmış sözleşmeler, resim ağırlıklı portföyler), kabaca iki eşit parçaya bölün ve net adlarla bir çift olarak gönderin: <code>rapor-bolum-1-2.pdf</code>.
    </p>

    <h2>Tek seferlik bölmeler için hızlı bir iş akışı</h2>
    <p>
      PDF'i açın, gerçekten ihtiyacınız olan sayfa aralığını not edin, bir bölücüye sürükleyin, aralığı girin ve içeriği yansıtan bir dosya adıyla kaydedin — <code>sozlesme-imza-sayfalari.pdf</code>, <code>belge(2)-bolunmus.pdf</code>'i her zaman yener. Kaynak dosyayı kapatmadan önce çıktının ilk ve son sayfasını kontrol edin. Kırk beş saniye ve ihtiyacınız olan alt kümeye tam olarak sahipsiniz.
    </p>
  </>
);