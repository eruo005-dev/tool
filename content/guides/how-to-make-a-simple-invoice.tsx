export const intro = (
  <>
    <p>
      Eğer hiç serbest çalıştıysanız, bir hizmet sattıysanız veya ek işten para kazandıysanız, muhtemelen bir fatura yazmışsınızdır — ve bunu bir kelime işlemcide yaptıysanız, büyük ihtimalle önemli bir şeyi atlamışsınızdır. Profesyonel bir fatura oluşturmak on dakikadan az sürer, düz bir e-postadan daha hızlı ödenir ve Nisan ayındaki vergi beyannamenizin size minnettar kalacağı bir kağıt izi bırakır.
    </p>
    <p>
      Bu rehber, basit bir faturanın neleri mutlaka içermesi gerektiğini, nelerin dışarıda bırakılması gerektiğini, sizi gerçekten ödeyecek ödeme koşullarının nasıl belirleneceğini ve faturanızın gerçek bir işletmeden gelmiş gibi görünmesini sağlayacak küçük dokunuşları kapsar — çünkü öyle.
    </p>
  </>
);

export const body = (
  <>
    <h2>Her faturanın mutlaka içermesi gerekenler</h2>
    <p>
      En azından: "Fatura" kelimesi, benzersiz bir fatura numarası, düzenlenme tarihi, işletme adınız ve iletişim bilgileriniz, müşterinizin adı ve iletişim bilgileri, faturalandırdığınız kalemlerin satır satır listesi, bir ara toplam, varsa vergi, ödenecek toplam tutar ve ödeme talimatları. Bunlardan herhangi birini atlarsanız, müşterinizin muhasebe ekibi sorularla geri gönderecektir — bu da ödemenizi bir hafta geciktirir.
    </p>

    <h2>Faturalarınızı sırayla numaralandırın</h2>
    <p>
      001'den başlayın (ilk müşterinizin sizin ilk müşteriniz olduğunu bilmesini istemiyorsanız 1001'den) ve artırın. Asla bir numarayı tekrar kullanmayın. Bir vergi dairesi kayıtlarınızı görmek istediğinde kontrol ettiği ilk şey sıralı numaralandırmadır — boşluklar veya tekrarlar bir şeyin gizlendiğini düşündürür. Bizim <a href="/tools/invoice-generator">fatura oluşturucumuz</a>, izin verirseniz bunu otomatik olarak halleder.
    </p>

    <h2>İşe uygun ödeme koşulları belirleyin</h2>
    <p>
      Varsayılan "Net 30" (30 gün içinde öde) kurumsal muhasebe departmanlarından kalma bir alışkanlıktır. Küçük müşteriler için Net 7 veya Net 14 daha makuldür ve paranızı daha hızlı almanızı sağlar. Büyük projeler için %50 peşin artı teslimatta %50 normaldir. Koşulları faturada açıkça yazın — "Ödeme, düzenlenme tarihinden itibaren 14 gün içinde vadesi gelir" — ve kimsenin matematik yapmasına gerek kalmaması için kesin vade tarihini ekleyin.
    </p>

    <h2>İşi ayrıntılı olarak tanımlayın</h2>
    <p>
      "Danışmanlık, 2.000 TL" zayıf bir satır kalemidir — bir denetçiye keyfi görünür ve pazarlığa davetiye çıkarır. "Açılış sayfası tasarımı, 12 saat × 85 TL/saat = 1.020 TL" spesifiktir. İşi, miktar, birim fiyat ve açıklama ile 2-6 kaleme bölün. İlk kez fiyatlandırma yapıyorsanız, numaranızı bizim <a href="/tools/freelance-rate-calculator">serbest çalışan ücret hesaplayıcımız</a> veya <a href="/tools/hourly-rate-calculator">saatlik ücret hesaplayıcımız</a> ile bulun.
    </p>

    <h2>Vergileri doğru şekilde ele alın</h2>
    <p>
      Vergi kuralları ülkeye ve nasıl kayıtlı olduğunuza göre değişir. ABD'de, şahıs şirketleri genellikle hizmetlerde satış vergisi talep etmez ancak mallarda talep edebilir — eyaletinizi kontrol edin. İngiltere ve AB'de KDV, kayıtlı olup olmadığınıza ve müşterinizin nerede olduğuna bağlıdır. Vergiyi oranıyla birlikte kendi satırında listeleyin, asla bir satır kaleminin içine gömmeyin. Vergi talep etmiyorsanız, "Vergi: 0,00 TL" yazan bir satır, satırı tamamen atlamaktan daha iyidir — soruyu daha sorulmadan cevaplar.
    </p>

    <h2>Birden fazla ödeme seçeneği ekleyin</h2>
    <p>
      Ödemeyi ne kadar kolaylaştırırsanız, paranızı o kadar hızlı alırsınız. En azından: banka havalesi bilgileri (veya bir ödeme bağlantısı) ve uluslararası müşteriler için Wise veya PayPal gibi bir platform seçeneği. ABD içi için Zelle, ACH veya basit bir Stripe fatura bağlantısı iyi çalışır. Açık talimatlar ekleyin — hesap numarası, banka kodu ve fatura numaranızı yazmaları gereken referans/açıklama alanı.
    </p>

    <h2>Teslim edileni kaydedin</h2>
    <p>
      Tek satırlık bir proje notu ("22 Nisan 2026'da Dropbox üzerinden teslim edildi — 12 dosya") döngüyü kapatır ve bir kayıt oluşturur. Bu, altı ay sonra işin gerçekten tamamlanıp tamamlanmadığı konusunda bir anlaşmazlık çıkarsa önemlidir.
    </p>

    <h2>Word belgesi değil, PDF olarak gönderin</h2>
    <p>
      Bir PDF düzenlenemez — müşteri tutarı kazara (veya kasıtlı olarak) değiştiremez. Word belgeleri alıcının cihazında yeniden akar ve genellikle profesyonel görünmez. PDF'i bir kez oluşturun, kısa bir e-postaya ekleyin ve yıla göre düzenlenmiş bir klasörde bir kopyasını saklayın.
    </p>

    <h2>Kibarca ve zamanında takip edin</h2>
    <p>
      Ödenmemiş faturaların çoğu reddedilmez, unutulur. Vade tarihinden iki gün önce dostça bir hatırlatma, vade tarihinde bir tane daha ve vadesi geçtikten yedi gün sonra daha resmi bir not gönderin. Profesyonel bir üslup koruyun — bu çeyrekte geç ödeyen müşteri, genellikle gelecek çeyrekte en iyi ödeyen müşteridir. Her faturanın her eşiği ne zaman geçtiğini takip etmek için <a href="/tools/deadline-calculator">son tarih hesaplayıcımızı</a> kullanın.
    </p>

    <h2>Kayıtları en az beş yıl saklayın</h2>
    <p>
      Çoğu ülkedeki vergi daireleri beş ila yedi yıl geriye dönük denetim yapabilir. Gönderdiğiniz her faturayı — bir PDF yeterlidir — açıkça adlandırılmış bir klasörde saklayın. Yıl sonunda, bu dosya gelir belgelerinizin %80'ini oluşturur.
    </p>

    <h2>Bir şablon kullanın, tekerleği yeniden icat etmeyin</h2>
    <p>
      Her seferinde sıfırdan bir fatura oluşturmayın. İşletme bilgileriniz, logonuz ve ödeme talimatlarınızla temiz bir şablon kaydedin. Her iş için sadece fatura numarasını, müşteriyi, kalemleri ve toplamı güncellersiniz. Bizim <a href="/tools/invoice-generator">fatura oluşturucumuz</a> bir dakikadan kısa sürede baskıya hazır bir versiyon üretir.
    </p>

    <p>
      İlgili: <a href="/guides/how-to-price-freelance-work">serbest çalışma işlerine nasıl fiyat verilir</a>, <a href="/guides/how-to-save-on-taxes">vergilerden nasıl tasarruf edilir</a> ve <a href="/guides/how-to-calculate-profit-margin">kar marjı nasıl hesaplanır</a> böylece her faturanın maliyetlerden sonra size ne kazandırdığını bilirsiniz.
    </p>
  </>
);
