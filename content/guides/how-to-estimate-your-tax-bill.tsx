import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Vergi faturanızı Nisan ayından önce tahmin etmek, hoş bir iade ile sürpriz beş haneli bir ödeme arasındaki farktır. Matematik göz korkutucu görünür ancak bir hesap makinesinin saniyeler içinde yapabileceği altı adıma ayrılır — zor kısım hangi girdileri toplayacağını bilmektir. Bu rehber, brüt gelirden vergilendirilebilir gelire geçişi, kötü kararlara neden olan marjinal-efektif oran karışıklığını, stopaj kontrollerini ve üç aylık tahmini ödemelerin ne zaman zorunlu hale geldiğini adım adım açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>6 adımlı hesaplama</h2>
    <p>
      <strong>(1) Brüt gelir.</strong> Toplam maaş + ikramiyeler + serbest çalışma + faiz + temettüler + sermaye kazançları + ek iş. Her şey.
    </p>
    <p>
      <strong>(2) Düzenlemeler (satır üstü kesintiler).</strong> 401(k), geleneksel IRA, HSA, öğrenci kredisi faizi, serbest çalışma vergisinin yarısı. Sonuç: <strong>Düzeltilmiş Brüt Gelir (AGI).</strong>
    </p>
    <p>
      <strong>(3) Standart veya kalem kalem kesinti.</strong> 2024–25 standardı: 14.600$ bekar / 29.200$ evli ortak başvuru / 21.900$ hane reisi. Yalnızca ipotek faiziniz + SALT (10 bin $ ile sınırlı) + bağışlar standardı aşarsa kalem kalem yapın.
    </p>
    <p>
      <strong>(4) Vergilendirilebilir gelir = AGI − kesinti.</strong> Dilimlerin uygulandığı sayı budur.
    </p>
    <p>
      <strong>(5) Dilimleri uygulayın</strong> aşamalı olarak (hepsi tek bir oranda değil — aşağıya bakın). Bu sizin <strong>kredi öncesi verginizdir.</strong>
    </p>
    <p>
      <strong>(6) Kredileri çıkarın.</strong> Çocuk Vergi Kredisi, Tasarruf Sahibi Kredisi, eğitim kredileri, EITC. Kesintilerin (vergilendirilebilir geliri azaltan) aksine, krediler vergiyi bire bir azaltır.
    </p>

    <h2>Marjinal ve efektif oran — iyi kararları öldüren kafa karışıklığı</h2>
    <p>
      ABD <strong>aşamalı dilimler</strong> kullanır. Marjinal oranınız, son dolarınızın düştüğü dilimdir; efektif oranınız ise tüm gelir üzerindeki ortalamadır. Bekar mükellef, 120 bin $ vergilendirilebilir gelir (2024):
    </p>
    <p>
      İlk 11.600 $ %10 = 1.160 $. Sonraki 35.550 $ (47.150 $'a kadar) %12 = 4.266 $. Sonraki 53.375 $ (100.525 $'a kadar) %22 = 11.743 $. Son 19.475 $ (120 bin $'a kadar) %24 = 4.674 $. Toplam: <strong>21.843 $.</strong>
    </p>
    <p>
      <strong>Marjinal oran: %24</strong> (son doların dilimi).{" "}
      <strong>Efektif oran: %18,2</strong> (21.843 $ / 120.000 $). 1.000 $'lık bir zam %24 (marjinal) üzerinden vergilendirilir, %18 (efektif) değil. 1.000 $'lık bir 401(k) katkısı vergiden 240 $ (marjinal) tasarruf sağlar, 182 $ değil.
    </p>
    <p>
      Bunları karıştıran kişiler bazen "sonraki dilime girmemek" için zammı reddeder — bu asla doğru hamle değildir. Bir zam her zaman size daha fazla ele geçen para bırakır, sadece tam miktarı değil.
    </p>

    <h2>Eyalet vergisi — büyük ölçüde değişen ek</h2>
    <p>
      TX, FL, WA, NV, SD, WY, AK, TN, NH'de %0. CO'da sabit %4,40. CA'da %9,3'e kadar aşamalı (375 bin $'ın üzerindeki dilim %13,3'e fırlar). New York 25 milyon $'ın üzerinde %10,9 ile zirve yapar. Eyalet vergisini her zaman ayrı modelleyin — federalin üzerine %0 ila %13 ekleyebilir.
    </p>

    <h2>Üstüne FICA (çalışanlar için)</h2>
    <p>
      <strong>Sosyal Güvenlik: %6,2</strong> 168.600 $'a kadar olan ücretlerde (2024). <strong>Medicare: %1,45</strong> üst sınır yok. 200 bin $ bekar / 250 bin $ evli üzerinde ek %0,9 Medicare. İşvereniniz sizin adınıza aynı miktarı öder. FICA yalnızca ücretlere uygulanır, yatırım gelirine değil.
    </p>
    <p>
      <strong>Serbest çalışan: %15,3</strong> (her iki yarı), yarısı satır üstü düşülebilir. Serbest çalışanlar ve konser çalışanları için vergi faturasına önemli ölçüde ekler.
    </p>

    <h2>İnsanların kaçırdığı yaygın kesintiler</h2>
    <p>
      <strong>HSA katkıları</strong> HDHP'niz varsa — 4.150 $ bekar / 8.300 $ aile (2024). Üçlü vergi avantajlı ve çoğu kişi yetersiz fonlar.
    </p>
    <p>
      <strong>Backdoor Roth</strong> yüksek kazançlılar için — doğru yapıldığında meşru, bir kesinti değil ancak gelir limitlerinin ötesinde Roth erişimi sağlar.
    </p>
    <p>
      <strong>Ev ofis kesintisi</strong> serbest çalışanlar için — ya basitleştirilmiş (metrekare başına 5 $ × maksimum 300 ft²) ya da fiili gider yöntemi.
    </p>
    <p>
      <strong>SEP-IRA veya Solo 401(k)</strong> serbest çalışanlar için — normal bir 401(k)'den çok daha yüksek katkı limitleri.
    </p>
    <p>
      <strong>Değer kazanmış menkul kıymetler yoluyla hayır bağışları</strong> — sermaye kazançlarını gerçekleştirmeden piyasa değerini düşün.
    </p>

    <h2>Stopaj — iadeleri küçük tutun, cezalardan kaçının</h2>
    <p>
      W-2 çalışanlarından her ödeme döneminde vergi kesilir. Hedef: stopaj ≈ toplam vergi faturası, size ya küçük bir iade (ideal olarak 1.000 $'ın altında) ya da küçük bir bakiye borcu bırakır.
    </p>
    <p>
      5.000 $'lık bir iade, hükümete 5.000 $'ı faizsiz ödünç verdiğiniz anlamına gelir. Bu bir nakit sürprizi değil, kötü bir tahsistir.
    </p>
    <p>
      5.000 $'lık bir bakiye borcu, <strong>eksik ödeme cezasını</strong> (şu anda ~%8 yıllık) tetikleyebilir. Güvenli liman: geçen yılın toplam vergisinin en az %100'ünü (AGI &gt; 150 bin $ ise %110) veya bu yılki tahmini verginin %90'ını stopajlayın.
    </p>

    <h2>Üç aylık tahmini ödemeler — ne zaman gerekli</h2>
    <p>
      1099 yüklenicisi, serbest çalışan veya önemli yatırım geliriniz varsa, üç aylık tahmini ödemeler göndermeniz gerekir (15 Nis, 15 Haz, 15 Eyl, 15 Oca). Bunu görmezden gelirseniz, verginin üstüne eksik ödeme cezası ödersiniz. IRS Direct Pay (ücretsiz) veya EFTPS kullanarak ödeme yapın.
    </p>

    <h2>"Marjinal oran X'e karar verir" kuralı</h2>
    <p>
      Tüm kesinti matematiği (401(k), HSA, bağış) marjinal orandadır.
      <a href="/tools/roth-vs-traditional-breakeven">Roth ve geleneksel karşılaştırması</a> genellikle marjinal oran karşılaştırmasıdır: mevcut marjinal &gt; beklenen emeklilik marjinali ise geleneksel; tersi ise Roth.
    </p>

    <h2>31 Aralık'tan önce sayıları hesaplayın</h2>
    <p>
      Çoğu vergi hamlesi (401(k), HSA, bağış, ertelenmiş tazminat, zarar hasadı) yıl sonundan önce yapılmalıdır.{" "}
      <a href="/tools/tax-calculator">Vergi hesaplayıcısını</a> Kasım ayında çalıştırın — bordronuzun yılbaşından bugüne sütunlarından YTD brüt, stopaj ve tahmini tam yıl brütünü girin. Stopajın yolunda olduğunu doğrulamak için{" "}
      <a href="/tools/paycheck-calculator">maaş çeki hesaplayıcısıyla</a> çapraz kontrol yapın ve her satırın ne anlama geldiği için{" "}
      <a href="/guides/how-to-read-your-paycheck">maaş çeki rehberimize</a> bakın.
    </p>
  </>
);