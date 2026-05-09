import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Her takas, değişim ve satış vergiye tabi bir olaydır &mdash; ve IRS artık 1099'ları beyannamenizle eşleştirmede oldukça başarılıdır.</p>);

export const body: ReactElement = (
  <>
    <p>Kripto vergi takibi kavramsal olarak zor değildir &mdash; sadece her birinin maliyet esası, tarihi, geliri ve kâr/zarar bilgisi gerektiren çok sayıda işlemdir. Zorluk ölçekten kaynaklanır. İki borsa ve bir öz-saklama cüzdanı kullanan sıradan bir kullanıcı, bir yılda kolayca yüzlerce vergiye tabi olay yaratabilir ve Uniswap'teki her takas veya köprü işlemi sayılır. Vergi takibinizi Nisan ayında değil, Aralık kapanmadan önce düzene koyun.</p>

    <h2>IRS kriptoyu nasıl ele alıyor</h2>
    <p>ABD'de IRS, kriptoyu para birimi değil, mülk olarak ele alır. Bu, sermaye kazançları kurallarının geçerli olduğu anlamına gelir: kısa vadeli (bir yıldan az tutulan) normal gelir oranınız üzerinden vergilendirilir, uzun vadeli (bir yıldan fazla) ise tercihli %0/15/20'lik dilimleri alır. Vergiye tabi bir olay, kriptodan elden çıkarma yapan herhangi bir şeydir &mdash; USD karşılığı satmak, bir coini başka bir coinle takas etmek, kriptoyu mal veya hizmetler için harcamak veya elden çıkarmayı tetikleyecek şekilde gas ücreti ödemek. Kendi cüzdanlarınız arasında coin taşımak vergiye tabi değildir. Satın almak ve tutmak vergiye tabi değildir.</p>

    <h2>Ağır işi yapan araçlar</h2>
    <ul>
      <li>Koinly &mdash; güçlü genel amaçlı, iyi DeFi kapsamı, temiz arayüz.</li>
      <li>CoinTracker &mdash; sıkı TurboTax entegrasyonu, ABD'li mükellefler için sağlam.</li>
      <li>TokenTax &mdash; daha yüksek temas, daha pahalı, CPA hizmetlerini paketler.</li>
      <li>ZenLedger &mdash; IRS odaklı, denetimler için makul destek.</li>
    </ul>
    <p>Dördü de büyük borsalardan ve zincirlerden veri çeker, maliyet esasını hesaplar ve Form 8949 + Schedule D çıktısı verir. Birini seçin ve ona bağlı kalın &mdash; yıl ortasında değiştirmek acı vericidir çünkü maliyet esası devreder.</p>

    <h2>Borsalara güvenli bağlanma</h2>
    <p>Bir borsayı vergi aracına bağlarken her zaman salt okunur API anahtarları kullanın. Asla para çekme izni vermeyin; aracın buna ihtiyacı yoktur. Öz-saklama cüzdanları için yalnızca genel adresi yapıştırın &mdash; asla anahtarları değil. Bir vergi aracı tohum ifadenizi veya özel anahtarınızı isterse sekmeyi kapatın.</p>

    <h2>Maliyet esası yöntemleri</h2>
    <p>FIFO (ilk giren ilk çıkar) IRS varsayılanıdır ve açıkça başka bir şey seçmediyseniz en güvenli seçimdir. LIFO (son giren ilk çıkar) ve HIFO (en yüksek giren ilk çıkar) yükselen piyasalarda faturanızı düşürebilir, ancak IRS belirli tanımlama kuralları ve yeterli kayıt gerektirir. Çoğu vergi yazılımı yöntemleri değiştirmenize ve sonuçları karşılaştırmanıza izin verir &mdash; sadece tutarlılık kurallarını anlamadan yıldan yıla yöntem değiştirmeyin.</p>

    <h2>DeFi ve NFT'ler işi daha da kötüleştiriyor</h2>
    <p>Likidite havuzu yatırımları, getiri çiftçiliği, borç verme protokolleri, köprüler ve NFT basımlarının tümü vergiye tabi olaylar yaratır &mdash; genellikle işlem başına birden fazla. Stake ödülleri, kontrolü ele geçirdiğinizde gerçeğe uygun piyasa değerinde gelirdir, ardından sattığınızda sermaye kazancıdır. Airdrop'lar alındığında olağan gelirdir. Kayıp anahtarlar ve rug-pull token'ları karmaşıktır: IRS, terk zararı olarak nitelendirilen şeyler için kılavuzu sıkılaştırmıştır. Vergi yazılımının yetersiz kaldığı ve manuel incelemenin başladığı yer burasıdır.</p>

    <h2>Fiilen dolduracağınız formlar</h2>
    <p>Form 8949 her elden çıkarmayı listeler: edinme tarihi, satış tarihi, hasılat, maliyet esası, kâr veya zarar. Toplamlar Schedule D'ye aktarılır. Kriptoyu gelir olarak aldıysanız (stake, madencilik, airdrop'lar, hizmet karşılığı ödeme), bu, bir ticaret veya iş olup olmadığına bağlı olarak Schedule 1 veya Schedule C'ye gider. Form 1040'ın üst kısmındaki "dijital varlık" sorusu isteğe bağlı değildir &mdash; dürüstçe cevaplayın.</p>

    <h2>Ne zaman bir CPA tutmalı</h2>
    <p>Birkaç yüzden fazla işleminiz, anlamlı DeFi faaliyetiniz, NFT ticaretiniz, kriptoda işletme geliriniz veya çözülmemiş önceki yıl sorunlarınız varsa, bir kripto uzmanı CPA'ya ödeme yapın. Basit bir beyan için 500&ndash;3.000 dolar bekleyin, karmaşık durumlar için daha fazla. Bu, aksi takdirde tek başınıza karşılaşacağınız bir denetime karşı ucuz bir sigortadır.</p>

    <h2>Sık yapılan hatalar</h2>
    <p>Küçük cüzdanları unutmak, gas ücretlerini görmezden gelmek, takası vergiye tabi olmayan bir olay olarak ele almak, airdrop'ları kaçırmak, borsa CSV dışa aktarımlarını API içe aktarımlarıyla mutabık kılmamak ve Nisan'a kadar beklemek. Ayrıca: borsanızın 1099'unun doğru olduğunu varsaymak &mdash; genellikle değildir, özellikle cüzdanlar arası maliyet esası için.</p>

    <h2>Özet</h2>
    <p>Ocak ayında bir vergi aracı seçin, salt okunur API'leri bağlayın, aylık mutabakat yapın ve yıl karmaşıklaştıysa uzman bir CPA kiralayın. Bu genel bilgidir, vergi tavsiyesi değildir &mdash; özel durumunuz hakkında kalifiye bir profesyonele danışın.</p>
  </>
);