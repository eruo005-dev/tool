/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Garanti koşulları, iyi bir oyun bilgisayarı satın alımını pahalı öğrenme deneyimlerinden ayırır. İşçilik ve parça kapsamı, nakliye hasarı ve iade politikalarındaki ince ayrıntılar, hazır ve özel yapım bilgisayarların en çok farklılaştığı noktalardır. Bu rehber, pratik haritayı adım adım gösterir.
    </p>
  </>
);

export const toc = [
  { id: "warranty-types", label: "Garanti kapsamı türleri" },
  { id: "professional", label: "Profesyonel montajcı garantileri" },
  { id: "returns", label: "İade politikaları" },
  { id: "rma", label: "RMA süreci" },
];

export const body = (
  <>
    <h2 id="warranty-types">Garanti kapsamı türleri</h2>
    <ul>
      <li>
        <strong>İşçilik garantisi:</strong> montajın kendisini kapsar. Montajcı bir şeyi yanlış bağladıysa veya bir parçayı hatalı taktıysa, ücretsiz olarak düzeltir. Süre: montajcıya bağlı olarak 30 gün ile 24 ay arası.
      </li>
      <li>
        <strong>Parça garantisi:</strong> her bir bileşenin üretici garantisi, tipik olarak 1-3 yıl (anakart 3, işlemci 3, GPU 2-3, RAM ömür boyu, PSU seviyesine bağlı olarak 5-10 yıl).
      </li>
      <li>
        <strong>Sistem garantisi:</strong> bazı hazır sistem entegratörleri (Origin PC, Maingear) tüm sistemi kapsayan birleşik garanti sunar. Daha yüksek maliyet, müşteri için daha temiz bir deneyim.
      </li>
      <li>
        <strong>Nakliye hasarı:</strong> kargoyla gönderilirse, nakliye sırasındaki hasarı kim karşılar? Bazı montajcılar kargoyu sigortalar; bazıları sigortalamaz. Çevrimiçi montajcılar için kritik bir soru.
      </li>
    </ul>

    <h2 id="professional">Profesyonel montajcı garantileri</h2>
    <ul>
      <li>
        <strong>Micro Center PC Build Service:</strong> Montaj için 12 aylık işçilik garantisi. Parçalar üretici garantilerine tabidir.
      </li>
      <li>
        <strong>NZXT BLD:</strong> 2 yıllık işçilik garantisi + sistem düzeyinde destek.
      </li>
      <li>
        <strong>Origin PC + Maingear + Falcon Northwest:</strong> İşçilik için 1-3 yıl kapsamlı garanti + parçalarda uzatılmış süre. En üst düzey kapsam.
      </li>
      <li>
        <strong>Yerel PC mağazaları:</strong> Tipik olarak 30 gün ile 12 ay arası işçilik garantisi. Yazılı olarak teyit edin — bazı mağazalar sözlü olarak garanti verir ancak belgelemez.
      </li>
      <li>
        <strong>iBuyPower / CyberPower / Skytech:</strong> 1 yıllık sınırlı garanti. RMA süreci yavaş olabilir. Bütçe hazır sistemler daha kısa garanti + daha yavaş onarıma yönelir.
      </li>
    </ul>

    <h2 id="returns">İade politikaları</h2>
    <p>
      Tipik olan nedir:
    </p>
    <ul>
      <li>
        <strong>Çevrimiçi perakendeciler (Amazon, Best Buy):</strong> Çoğu hazır oyun bilgisayarında 30 günlük iade süresi. Satın almadan önce teyit edin.
      </li>
      <li>
        <strong>Özel yapım (Origin PC, NZXT BLD):</strong> 14-30 gün iade. Bazen stok yenileme ücreti uygulanır (%10-20).
      </li>
      <li>
        <strong>Yerel PC mağazaları:</strong> Özel yapımlar için genellikle iade yoktur. Parçalarınızla monte edildikten sonra tekrar satılamaz. Rezervasyon yapmadan önce teyit edin.
      </li>
      <li>
        <strong>iBuyPower / CyberPower:</strong> 30 günlük iade politikaları ancak %15-20 stok yenileme ücreti yaygındır.
      </li>
    </ul>
    <p>
      İade haklarını etkileyen uç durumlar:
    </p>
    <ul>
      <li>
        <strong>İşletim sistemi etkinleştirildi:</strong> Bazı perakendeciler Windows etkinleştirildikten sonra iadeyi reddeder. Güç vermeden önce teyit edin.
      </li>
      <li>
        <strong>Özel yapılandırma:</strong> Sipariş üzerine üretilen sistemler, hazır sistemlere göre genellikle daha katı iade koşullarına sahiptir.
      </li>
      <li>
        <strong>Hasar / kullanım:</strong> Açık — hasarlı veya yoğun kullanım belirtileri gösteriyorsa iade edilemez.
      </li>
    </ul>

    <h2 id="rma">Arızalı parçalar için RMA süreci</h2>
    <p>
      Bir parça garanti kapsamında arızalandığında izlenecek adımlar:
    </p>
    <ol>
      <li>
        <strong>Önce teşhis edin.</strong> Hangi parçanın arızalandığını belirleyin. Reddit r/buildapc ve üretici forumları teşhis konusunda yardımcı olur.
      </li>
      <li>
        <strong>Entegratörle iletişime geçin (hazır sistem satın aldıysanız).</strong>{" "}
        Bazıları RMA'yı sizin için halleder; bazıları "üreticiyle iletişime geçin" der. Saygın montajcılar bunu halleder.
      </li>
      <li>
        <strong>Üreticiyle iletişime geçin (kendi montajınızı yaptıysanız).</strong> Web sitelerinde bir RMA talebi açın. Satın alma belgesi + seri numarası gerekir.
      </li>
      <li>
        <strong>Parçayı gönderin.</strong> Çoğu üretici garanti taleplerinde geri gönderim kargosunu karşılar; bazıları karşılamaz.
      </li>
      <li>
        <strong>Onarım / değişim süresi:</strong> Tipik olarak 1-4 hafta. Bazı üreticiler üst düzey seviyeler için çapraz gönderim sunar (arızalı parçayı göndermeden önce yenisini yollarlar).
      </li>
      <li>
        <strong>Yeniden takın.</strong> İlk montajı entegratör yaptıysa ve sistem garantisi hala geçerliyse, yeniden takmayı da onlar halledebilir. Aksi takdirde bu size kalmıştır.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "DIY ve kiralama karşılaştırma hesaplayıcısı",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "Profesyonelce monte edilmiş PC'lerde hangi garantiyi alırsınız?",
    a: "İşçilik garantisi (montajı kapsar): montajcıya bağlı olarak 30 gün ile 24 ay arası. Parça garantisi (üretici): tipik olarak 1-3 yıl. Sistem garantisi (Origin PC, Maingear, Falcon NW): 1-3 yıl kapsamlı. Micro Center: 12 ay işçilik. NZXT BLD: 2 yıl işçilik.",
  },
  {
    q: "Profesyonelce monte edilmiş bir oyun bilgisayarını iade edebilir misiniz?",
    a: "Bazen. Çevrimiçi perakendeciler + özel montajcılar tipik olarak 14-30 gün iade süresi sunar; sipariş üzerine üretimlerde %10-20 stok yenileme ücreti yaygındır. Yerel PC mağazaları genellikle özel yapımlar için iade kabul etmez. İşletim sistemi etkinleştirmesi, özel yapılandırma ve herhangi bir kullanım iade hakkını geçersiz kılabilir — güç vermeden önce teyit edin.",
  },
  {
    q: "Oyun bilgisayarları için RMA süreci nasıl işler?",
    a: "Arızalı parçayı teşhis edin, entegratörle (hazır sistemse) veya doğrudan üreticiyle iletişime geçin. Satın alma belgesi + seri numarası ile RMA açın. Parçayı gönderin (garanti taleplerinde geri gönderim kargosu genellikle karşılanır). Tipik olarak 1-4 hafta süre; bazı üst düzey seviyeler çapraz gönderim sunar. Yeniden takma genellikle size kalmıştır, sistem garantisi kapsamıyorsa.",
  },
];