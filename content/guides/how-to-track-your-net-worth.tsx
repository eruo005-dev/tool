import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Net değer, finansal ilerlemenizin en net anlık görüntüsüdür:
      toplam varlıklar eksi toplam yükümlülükler. 5 yıl boyunca
      üç ayda bir takip etmek, finansal kararlarınızın işe yarayıp
      yaramadığı konusunda size herhangi bir bütçe uygulamasından
      daha fazlasını söyleyecektir. Bu rehber, nelere dahil edilmesi
      (ve nelerin dışarıda bırakılması) gerektiğini, zorlu varlıkların
      nasıl değerlendirileceğini, ne sıklıkta güncellenmesi
      gerektiğini ve büyük yaşam dönüm noktaları için doğru yolda
      olup olmadığınızı söyleyen bir avuç sayıyı kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Formül — ve gerçekte neyi ölçtüğü</h2>
    <p>
      <strong>Net değer = Varlıklar − Yükümlülükler.</strong>
    </p>
    <p>
      Varlıklar, yeniden satış değeri olan sahip olduğunuz şeylerdir.
      Yükümlülükler ise borçlu olduğunuz şeylerdir. Sayının kendisi,
      <strong>zaman içindeki yönünden</strong> daha az önemlidir —
      tek bir anlık görüntü yanıltıcı olabilir, ancak 5 yıllık bir
      eğilim çizgisi yanıltamaz.
    </p>
    <p>
      8.000$ net değere sahip ancak yıllık 20.000$+ büyüme gösteren
      32 yaşındaki biri, 400.000$ ile düz veya düşüşte olan
      55 yaşındaki birinden daha iyi durumdadır, çünkü yörünge
      yükseklikten daha önemlidir.
    </p>

    <h2>Varlık olarak ne sayılır — ve hangi fiyattan</h2>
    <p>
      <strong>Nakit ve nakde yakın.</strong> Vadesiz mevduat, tasarruf,
      para piyasası, mevduat sertifikası. Değer = bakiye. Kolay.
    </p>
    <p>
      <strong>Yatırım hesapları.</strong> 401(k), Bireysel Emeklilik
      Hesabı (IRA), aracı kurum, Sağlık Tasarruf Hesabı (HSA), 529.
      Değer = geleneksel hesaplar için vergi öncesi, portföyün
      mevcut piyasa değeri. Bazı yöntemler 401(k)'yi beklenen
      vergiye göre düşürür (örneğin, 100.000$'lık geleneksel 401(k)
      vergi sonrası 75.000$ olarak sayılır). Tutarlı olduğunuz
      sürece her iki yaklaşım da işe yarar.
    </p>
    <p>
      <strong>Gayrimenkul.</strong> Ev, kiralık mülkler, arsa.
      Değer = güncel piyasa değeri (Zillow/Redfin tahmini eksi
      satış maliyetleri için ~%3 veya güncel bir değerleme).
      İpotek borcunu yükümlülük olarak çıkarın.
    </p>
    <p>
      <strong>Araçlar.</strong> Ödediğiniz değil, Kelley Blue Book
      bireysel satış değerini kullanın. 3 yıl önce 40.000$'a
      alınan bir araba bugün 22.000$ değerinde olabilir; 40.000$'ı
      saymayın.
    </p>
    <p>
      <strong>İşletme sahipliği.</strong> Zorlu. Satılabilir bir
      işletmeniz varsa, ihtiyatlı bir 1–2× yıllık SDE (satıcının
      takdirine bağlı kazanç) veya güncel bir değerleme kullanın.
      Gerçekleşmemiş varsayımsal durumları saymayın.
    </p>
    <p>
      <strong>Kripto.</strong> Güncel piyasa değeri. Değişkendir;
      her anlık görüntüde güncelleyin.
    </p>

    <h2>NE sayılmamalı (veya dikkatlice sayılmalı)</h2>
    <p>
      <strong>Mobilya, giysi, kitaplar.</strong> Bunların yeniden
      satış değeri neredeyse sıfırdır. Net değerinizi bunlarla
      şişirmeyin.
    </p>
    <p>
      <strong>Mücevher, sanat, koleksiyon ürünleri.</strong> Yalnızca
      yakın zamanda değerlenmişse ve gerçekten o fiyattan
      satılabiliyorsa — &ldquo;10.000$ değerinde&rdquo; olup
      gerçekte satılamayan bir şey 10.000$ değerinde değildir.
    </p>
    <p>
      <strong>Hakedilmemiş hisse senedi opsiyonları / Kısıtlı Hisse
      Senedi Birimleri (RSU).</strong> Henüz sizin değil. Bazı
      yöntemler, hakedilmiş ancak kullanılmamış olanları kullanım
      fiyatı-piyasa farkına göre dahil eder; bu, ihtiyatlıysa
      kabul edilebilir.
    </p>
    <p>
      <strong>Emeklilik maaşı (tanımlanmış fayda).</strong> Bazı
      insanlar için en büyük varlık olabilir. Beklenen ödemelerin
      bugünkü değeri (NPV) ile değerleyin veya en azından varlığını
      işaretleyin.
    </p>
    <p>
      <strong>Sosyal Güvenlik beklenen faydaları.</strong> Genellikle
      kişisel net değerin dışında bırakılır — hak kazanmadan önce
      piyasa değeri yoktur.
    </p>

    <h2>Yükümlülükler listesi</h2>
    <p>
      <strong>İpotek.</strong> Kalan anapara bakiyesi (orijinal kredi
      tutarı değil).
    </p>
    <p>
      <strong>Araba kredileri.</strong> Kalan bakiye.
    </p>
    <p>
      <strong>Öğrenci kredileri.</strong> Kalan bakiye. Hem federal
      hem de özel olanları dahil edin.
    </p>
    <p>
      <strong>Kredi kartı bakiyeleri.</strong> Yalnızca bir sonraki
      ekstre döngüsünde ödenmeyen tutar. Her ay tamamını ödüyorsanız,
      bu amaçla bakiye fiilen sıfırdır.
    </p>
    <p>
      <strong>Kişisel krediler, tıbbi borç, vergi borcu, senetler.</strong>
      Hepsini ekleyin. Yükümlülükler utanç verici değildir — bunlar
      veridir.
    </p>

    <h2>Ne sıklıkta takip edilmeli</h2>
    <p>
      <strong>Üç ayda bir ideal sıklıktır.</strong> Aylık takip,
      piyasa oynaklığından kaynaklanan gürültü yaratır; yıllık takip
      ise rota düzeltme fırsatlarını kaçırır. Üç ayda bir takip,
      size yılda 4 veri noktası verir ve 12 ay içinde bir eğilim
      görmek için yeterlidir.
    </p>
    <p>
      Her çeyreğin 1. günü için tekrarlayan bir takvim etkinliği
      ayarlayın, 30 dakika ayırın, bir e-tablo veya hesap makinesini
      güncelleyin. Tamam.
    </p>

    <h2>Gerçekten işe yarayan kıyaslamalar</h2>
    <p>
      <strong>Fidelity'nin dönüm noktaları</strong> (kusurlu ancak
      yönsel olarak faydalı):
    </p>
    <p>
      <strong>30 yaş:</strong> Emeklilik hesaplarında yıllık maaşın
      1 katı.
    </p>
    <p>
      <strong>40 yaş:</strong> Yıllık maaşın 3 katı.
    </p>
    <p>
      <strong>50 yaş:</strong> Yıllık maaşın 6 katı.
    </p>
    <p>
      <strong>60 yaş:</strong> Yıllık maaşın 8 katı.
    </p>
    <p>
      <strong>67 yaş:</strong> Yıllık maaşın 10 katı.
    </p>
    <p>
      Bunlar, Sosyal Güvenlik desteği olan W-2 çalışanları için
      kaba kurallardır. Serbest çalışıyorsanız, erken emeklilik
      istiyorsanız veya emeklilikte daha yüksek bir yaşam tarzı
      istiyorsanız, daha fazlasına ihtiyacınız var.
    </p>
    <p>
      <strong>Daha basit Stanley/Danko formülü</strong> ({" "}
      <em>Milyoner Komşu</em> kitabından): beklenen net değer = yaş ×
      vergi öncesi gelir ÷ 10. 80.000$ kazanan 40 yaşındaki birinin
      &ldquo;yolunda&rdquo; olması için 320.000$ net değere sahip
      olması gerekir. Bunun 2 katının üzerinde = &ldquo;olağanüstü
      biriktirici.&rdquo; 0,5 katının altında = &ldquo;zayıf
      biriktirici.&rdquo;
    </p>

    <h2>Yönün size söyledikleri</h2>
    <p>
      <strong>Her çeyrek büyüyor, az da olsa:</strong>{" "}
      tasarruf ve yatırım yapıyorsunuz. Sistem çalışıyor. Rotada
      kalın.
    </p>
    <p>
      <strong>Durağan bir piyasada düz veya düşüş:</strong> harcamalar
      geliri tüketiyor veya zam sonrası yaşam tarzı enflasyonu var.
      Bütçeyi ve tasarruf oranını gözden geçirin.
    </p>
    <p>
      <strong>Piyasa çöküşünde %20+ düşüş:</strong> normal.
      Stratejiyi değiştirmeyin; satmayın. %30–40 düşüşler kabaca
      on yılda bir olur ve 1–3 yıl içinde toparlanır.
    </p>
    <p>
      <strong>Boğa piyasasında önemli ölçüde artış:</strong> şansı
      beceriyle karıştırmayın. Boğa piyasaları herkesi zeki
      gösterir. Yeniden dengeleyin; riski artırmayın.
    </p>

    <h2>İzlemeye değer iki oran</h2>
    <p>
      <strong>Borç-varlık oranı</strong> = Toplam yükümlülükler /
      Toplam varlıklar. 0,30'un altı sağlıklıdır; 0,50'nin üzeri
      zorlanmış demektir.
    </p>
    <p>
      <strong>Likid net değer</strong> = Nakit + yatırımlar − tüm
      borçlar. Ev özsermayesini hariç tutar (likid değil). Bu,
      &ldquo;yarın işimi kaybetsem, gerçekte neye sahip olurdum&rdquo;
      sayısıdır. Sağlıklı: en az 6 aylık temel giderler.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Anlık görüntünüzü almak için varlıklarınızı ve yükümlülüklerinizi{" "}
      <a href="/tools/net-worth-calculator">net değer hesaplayıcıya</a>
      {" "}girin. &ldquo;Oraya nasıl ulaşırım&rdquo; kısmı için{" "}
      <a href="/tools/savings-goal-calculator">tasarruf hedefi
      hesaplayıcı</a> ile ve disiplinli tasarrufun sizi 10, 20, 30
      yıl içinde nereye götürdüğünü görmek için{" "}
      <a href="/tools/compound-interest-calculator">bileşik faiz
      hesaplayıcı</a> ile eşleştirin.
    </p>
  </>
);