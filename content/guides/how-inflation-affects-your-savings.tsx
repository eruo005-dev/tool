import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir vadesiz hesaptaki dolar sabit bir dolar değildir. Enflasyon her yıl değerini sessizce aşındırır — yıllık %3 enflasyonda, bugün 100 dolar olan paranın on yıl sonra alım gücü 74 dolara düşer. Bu rehber, enflasyon matematiğinin gerçekte nasıl işlediğini, yüksek getirili bir tasarruf hesabının neden her zaman "size para kazandırmadığını" ve paranızı nereye koymaya karar vermeden önce kendi nakitiniz üzerinde hesaplamaları nasıl yapacağınızı açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Enflasyon nasıl ölçülür</h2>
    <p>
      Haberlerde gördüğünüz rakam neredeyse her zaman ABD Çalışma İstatistikleri Bürosu tarafından aylık yayınlanan{" "}
      <strong>Tüketici Fiyat Endeksi (CPI-U)</strong>'dir. Kentsel hanelerin tükettiği sabit bir ~80.000 mal ve hizmet sepetini takip eder — kira, benzin, bakkaliye, sağlık, giyim. CPI-U yıllık bazda %3 arttığında, bu sepet %3 daha pahalı hale gelir.
    </p>
    <p>
      1913'ten bu yana ABD uzun vadeli ortalaması yılda yaklaşık %3,1'dir. Federal Rezerv %2 enflasyonu hedefler, %2'nin altını endişe verici derecede düşük (deflasyon riski) ve %4'ün üstünü endişe verici derecede yüksek olarak değerlendirir.
    </p>

    <h2>Satın alma gücü formülü</h2>
    <p>
      Gelecekteki dolarlar daha az değerlidir. <code>n</code> yıl sonraki satın alma gücünü <code>r</code> enflasyon oranında hesaplamak için:{" "}
      <code>Gelecekteki satın alma gücü = Şimdiki $ ÷ (1 + r)^n</code>.
    </p>
    <p>
      Bugün 10.000 dolar, yıllık %3 enflasyonla, 10 yıl içinde <code>10.000 ÷ 1.03^10 = 7.441 dolar</code> satın alma gücüne sahiptir. Değerin %3 × 10 = %70'i değil — bu doğrusal yaklaşımdır. Bileşik etki, gerçek kaybı biraz daha küçük yapar çünkü her yılın enflasyonu zaten değer kaybetmiş bir tabana uygulanır.
    </p>
    <p>
      Ters yöne gitmek için — bugün 10.000 doların satın alma gücüne eşit olmak için ne kadar gelecek paraya ihtiyacınız var:{" "}
      <code>Gelecek $ = Şimdiki $ × (1 + r)^n</code>. 10.000 $ × 1.03^10 = 13.439 $. 10 yıl içinde aynı zenginliği hissetmek için ihtiyacınız olan miktar budur. <a href="/tools/inflation-calculator">Enflasyon hesaplayıcısı</a> her iki yönü de anında yapar.
    </p>

    <h2>Reel getiri vs nominal getiri</h2>
    <p>
      "Enflasyon %3" ve "birikimlerim %4 kazandırıyor" %7'lik bir kazanç değildir — neredeyse hiç kazanç değildir. Reel getiri (satın alma gücünde elinizde kalan) yaklaşık olarak: <code>nominal oran − enflasyon oranı</code>'dır. Daha kesin olarak: <code>(1 + nominal) / (1 + enflasyon) − 1</code>.
    </p>
    <p>
      %4,5 ödeyen yüksek getirili bir tasarruf hesabı, %3 enflasyonla (1.045 / 1.03) − 1 = %1,46 reel getiri sağlar. İşte bu kadar. Gerçekte bileşik kazandıran budur. Ne zaman bir "tasarruf oranı" görseniz, heyecanlanmadan önce bu çıkarmayı yapın.
    </p>
    <p>
      %3 enflasyonun olduğu bir yılda %0,01 ödeyen bir vadesiz hesabın reel getirisi kabaca <em>−%3</em>'tür. Bu nakit aktif olarak satın alma gücü kaybediyor. Dolar bazında küçülmemiştir, bu yüzden gözden kaçırmak kolaydır, ancak her ay daha az satın alır.
    </p>

    <h2>Bunun acil durum fonları için anlamı</h2>
    <p>
      Acil durum fonlarının likit kalması gerekir — Yüksek Getirili Tasarruf Hesabı (HYSA), para piyasası, Hazine bonoları — likit nakdin reel getirisi genellikle %0-1 veya negatif olsa bile. Amaç anında erişilebilirliktir. 3-6 aylık giderlerde %2 satın alma gücü kaybetmek, bir kriz sırasında yatırımları zararına satmaktan kaçınmak için ödediğiniz sigorta primidir.
    </p>
    <p>
      6 aylık giderlerin üzerindeki likit nakit, enflasyon hasarının pahalılaştığı yerdir. %0,01 faizli bir vadesiz hesapta duran 50.000 dolar ile %4,5 faizli bir HYSA arasındaki fark, yılda 2.250 dolar fırsat maliyetidir — saf sürtünmeden on yılda 22.500 dolar. Taşıyın.
    </p>

    <h2>Enflasyon ve uzun vadeli hedefler</h2>
    <p>
      Emeklilik planlaması enflasyona göre ayarlanmalıdır, aksi takdirde rakamlar size yalan söyler. 30 yıl içinde 1 milyon dolar, bugün 1 milyon dolar değildir — %3 enflasyonda, bugünün parasıyla 412.000 dolardır. 2055'te "nominal 1 milyon dolar" emeklilik hedefi aslında mütevazı bir hedeftir, göründüğü gibi bir dağ değildir.
    </p>
    <p>
      Çözüm: reel (enflasyona göre düzeltilmiş) rakamları hedefleyin. Hisse senetleri için %7 reel getiri varsayımı kullanın (%10 nominal eksi %3 enflasyon — S&P 500'ün uzun vadeli tarihsel reel getirisi) ve bugünün dolarıyla düşünün.{" "}
      <a href="/tools/401k-calculator">401(k) hesaplayıcımız</a> ve{" "}
      <a href="/tools/compound-interest-calculator">bileşik faiz hesaplayıcımız</a>, reel ve nominal varsayımlar arasında geçiş yapmanızı sağlar.
    </p>

    <h2>Enflasyonun aktif olarak size yardımcı olduğu zamanlar</h2>
    <p>
      Sabit faizli borç. 2021'den kalma %3,5 ipoteğiniz, %4 enflasyon dünyasında negatif %0,5 reel faiz oranına sahiptir. Banka, paralarını tutmanız için size (satın alma gücü olarak) ödeme yapıyor. Bu nedenle düşük faizli ipoteği olan kişiler enflasyon yükselişleri sırasında borcu kapatmak için acele etmemelidir — aritmetik borcu tutmayı destekler.
    </p>
    <p>
      Bunun tersi, enflasyonla yeniden fiyatlanan ve her ay aktif hasar veren değişken faizli borç ve kredi kartları için geçerlidir.{" "}
      <a href="/tools/debt-payoff-calculator">Borç ödeme hesaplayıcısı</a> bu tarafın matematiğini halleder.
    </p>

    <h2>İki dakikalık enflasyon denetimi</h2>
    <p>
      Hesaplarınızı açın. 1.000 doların üzerindeki her bakiye için <a href="/learn/apy">APY</a>'yi not edin. %3 çıkarın (makul bir uzun vadeli enflasyon varsayımı). Reel getirisi sıfırın altında olan her şey aktif olarak değer kaybediyor — bu bakiyeleri HYSA'lara, Hazine bonolarına veya zaman ufkunuza uygun yatırımlara taşımaya öncelik verin.
    </p>
    <p>
      Herhangi bir miktar ve zaman dilimi için matematiği <a href="/tools/inflation-calculator">enflasyon hesaplayıcısı</a> ile yapın. Birikimlerinizin zaman içinde ne hale geldiğinin tam resmi için{" "}
      <a href="/tools/compound-interest-calculator">bileşik faiz hesaplayıcısı</a>, getirileri bir enflasyon varsayımına karşı modellemenizi sağlar.
    </p>
  </>
);