import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Taşınmak her zaman düşündüğünüzden daha pahalıya mal olur. En bariz kalem kamyon veya taşıyıcı ücretidir, ancak gizli maliyetler &mdash; ambalaj malzemeleri, sigorta, fatura devirleri, temizlik, işten izin, depozitolar ve taşıma bahşişleri &mdash; etiket fiyatını kolayca ikiye katlayabilir. Yerel bir DIY taşınma 500–1.500 $ arasında olabilir. Uzun mesafeli, tam hizmetli bir taşınma 3.000–12.000 $ arasında olabilir. Eyaletler arası tüm bir evi taşımak genellikle 10.000 $'ı bulur. Bu rehber her maliyet kategorisini ayrıntılı olarak ele alır, DIY, hibrit ve tam hizmet seçeneklerini karşılaştırır ve taşınma günü şişmeyecek doğru tahminler almanız için bir yöntem sunar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. Üç taşınma türü</h2>
    <ul>
      <li>
        <strong>DIY</strong>: Kamyonu siz kiralar, paketler, yükler, sürer ve boşaltırsınız. En ucuz, en çok zaman alan ve en fazla fiziksel efor gerektiren.
      </li>
      <li>
        <strong>Hibrit (&ldquo;siz paketleyin, onlar sürsün&rdquo;)</strong>: Taşınabilir konteyner hizmetleri (PODS, U-Pack) veya sadece yükleme için kiralanan işçi. Orta seçenek.
      </li>
      <li>
        <strong>Tam hizmet</strong>: Profesyonel taşıyıcılar paketler, yükler, taşır, boşaltır ve bazen açar. En kolay, en pahalı.
      </li>
    </ul>

    <h2>2. DIY yerel taşınma maliyet dökümü</h2>
    <p>
      Tipik 2 yatak odalı yerel DIY taşınma (50 milden az):
    </p>
    <ul>
      <li>Kamyon kiralama (U-Haul 17&rsquo;, 1 gün): 80–150 $</li>
      <li>Kilometre: Mil başına 0,70–1,20 $ (kısa mesafede genellikle dahildir)</li>
      <li>Yakıt: Kamyon boyutu ve mesafeye bağlı olarak 60–120 $</li>
      <li>Kamyon sigortası: 25–60 $</li>
      <li>Ambalaj malzemeleri: 100–300 $</li>
      <li>Taşıma battaniyesi/el arabası kiralama: 30–60 $</li>
      <li>Arkadaşlar ve pizza: 50–100 $</li>
      <li>Eski yer için temizlik malzemeleri veya temizlik hizmeti: 0–200 $</li>
    </ul>
    <p>
      Toplam: <strong>350–1.000 $</strong>. 2–3 saat için yükleyici kiralarsanız 200–500 $ ekleyin.
    </p>

    <h2>3. Tam hizmet yerel taşınma</h2>
    <p>
      Profesyonel taşıyıcılar yerel taşınmalar için saatlik ücret alır, genellikle 2–3 taşıyıcı ve bir kamyon için saatte 100–200 $. 2 yatak odalı bir ev genellikle 4–6 saat sürer. Beklenen:
    </p>
    <ul>
      <li>İşçilik: 500–1.200 $</li>
      <li>Kamyon ücreti / seyahat masrafı: 50–150 $</li>
      <li>Paketleme hizmeti (isteğe bağlı): Oda başına 200–500 $</li>
      <li>Sağlanan ambalaj malzemeleri: 50–150 $</li>
      <li>Bahşiş: İşçilik maliyetinin %15–20'si</li>
    </ul>
    <p>
      Toplam: 2 yatak odalı yerel taşınma için <strong>700–2.500 $</strong>.
    </p>

    <h2>4. Uzun mesafeli taşınmalar: ağırlık ve mesafe</h2>
    <p>
      Eyaletler arası taşınmalar, eşyalarınızın ağırlığı artı mesafeye göre fiyatlandırılır. Temel formül:
    </p>
    <pre>{`eyaletler arası maliyet ≈ ağırlık (lbs) × lb başına oran × mesafe faktörü + hizmetler`}</pre>
    <p>
      1.000 mil taşınan tipik 2 yatak odalı bir ev (5.000–7.000 lbs) 3.000–6.000 $'a mal olur. Kıtalararası 3 yatak odalı (8.000–10.000 lbs): 6.000–12.000 $. 4+ yatak odalı: 10.000–20.000 $. Kontrol edebileceğiniz en büyük değişken maliyet: <strong>ağırlık envanterinden önce eşyaları ayıklamak</strong>.
    </p>

    <h2>5. Eşya ayıklama: en yüksek kaldıraçlı hazırlık</h2>
    <p>
      Taşıdığınız her kilo size iki kez maliyet çıkarır &mdash; taşınma sırasında ve daha sonra yine de atarken. Satın, bağışlayın veya atın:
    </p>
    <ul>
      <li>Bir yıldır kullanmadığınız mobilyalar</li>
      <li>Özlemeyeceğiniz her şey: eski elektronikler, yedek mutfak aletleri, küçülen kıyafetler</li>
      <li>Tekrar okumayacağınız kitaplar (kitaplar ağırdır)</li>
      <li>Askılığa dönüşmüş spor ekipmanları</li>
    </ul>
    <p>
      Taşıma ağırlığını 2.000 lbs azaltmak, uzun mesafeli bir taşınmada 1.000–2.000 $ tasarruf sağlayabilir.
    </p>

    <h2>6. Ambalaj malzemesi bütçesi</h2>
    <p>
      Tipik 2 yatak odalı ihtiyaçlar:
    </p>
    <ul>
      <li>30–50 kutu (küçük, orta, büyük karışık): 80–200 $</li>
      <li>Bant (6–10 rulo): 25–50 $</li>
      <li>Balonlu naylon: 25–50 $</li>
      <li>Paket kağıdı (5 lb paket): 20–40 $</li>
      <li>Kalemler, etiketler: 10–20 $</li>
      <li>Elbise kutuları (3–5): 40–100 $</li>
      <li>Yatak poşetleri, tabak kutuları: 30–80 $</li>
    </ul>
    <p>
      Yeni toplam: 200–500 $. İçki dükkanlarından kutu isteyerek, yerel Buy Nothing gruplarından temin ederek veya Home Depot&rsquo;un taşıma malzemeleri programını kullanarak %50–70 tasarruf edin.
    </p>

    <h2>7. Taşıma sigortası</h2>
    <p>
      Federal yasaya göre, eyaletler arası taşıyıcılar iki seviye sunar:
    </p>
    <ul>
      <li>Serbest bırakılan değer (ücretsiz, pound başına 60 sent): 3.000 $'lık TV'nizi kırarlarsa, pound başına 6 $ = belki 30 $ alırsınız</li>
      <li>Tam değer koruması (beyan edilen değerin %2–5'i): gerçek değiştirme</li>
    </ul>
    <p>
      40.000 $'lık ev eşyası için tam değer 800–2.000 $'a mal olur. Ev veya kiracı sigortanız aracılığıyla üçüncü taraf taşıyıcı sigortası daha ucuz olabilir. Uzun mesafeli bir taşınmada asla teminatı reddetmeyin &mdash; tek bir kötü kaza 5.000 $'ın üzerinde hasarlı eşyaya neden olabilir.
    </p>

    <h2>8. Tam hizmet taşınmalarda gizli ücretler</h2>
    <ul>
      <li>Uzun taşıma ücreti: kamyon kapıya 75 feet içinde park edemezse</li>
      <li>Merdiven ücreti: birinci katın üzerindeki her kat için</li>
      <li>Asansör ücreti: asansör rezerve edilmeli veya kullanılmalıysa</li>
      <li>Servis ücreti: dar sokaklar daha küçük bir kamyon gerektiriyorsa</li>
      <li>Piyano/kasa/sıcak küvet ücreti: özel eşyalar</li>
      <li>Transit depolama (SIT): teslimat gecikirse ayda 100–300 $</li>
      <li>Ambalaj malzemeleri (teklife dahil değilse): 200–600 $</li>
    </ul>
    <p>
      Teklifte bunların hepsini özellikle sorun. Saygın taşıyıcılar bunları peşinen listeler; şaibeli olanlar, eşyalarınızı teslim etmek için daha yüksek bir faturayla teslimat günü sizi şaşırtır.
    </p>

    <h2>9. Doğru tahminler almak</h2>
    <p>
      Üç tür tahmin:
    </p>
    <ul>
      <li>
        <strong>Bağlayıcı olmayan</strong>: kaba tahmin; nihai fatura daha yüksek olabilir. Kaçının.
      </li>
      <li>
        <strong>Bağlayıcı</strong>: envantere dayalı sabit fiyat, gerçek ağırlıktan bağımsız.
      </li>
      <li>
        <strong>Bağlayıcı aşmamak kaydıyla</strong>: fiyatı sınırlar; gerçek ağırlık daha azsa, daha az ödersiniz. En iyi seçenek.
      </li>
    </ul>
    <p>
      Her zaman ev içi (sanal veya fiziksel) envanter incelemeleriyle 3+ teklif alın. Telefon üzerinden teklif verenlerden kaçının &mdash; bu klasik rehine-yük dolandırıcılığı düzeneğidir.
    </p>

    <h2>10. Yan taşınma maliyetleri</h2>
    <ul>
      <li>Yeni yer için güvence depozitosu: 1–2 aylık kira</li>
      <li>İlk + son ay (sıkı piyasalarda yaygın)</li>
      <li>Evcil hayvan ücretleri, temizlik ücretleri, anahtar ücretleri</li>
      <li>Fatura devir/depozito ücretleri: fatura başına 50–300 $</li>
      <li>İnternet kurulumu: 0–200 $</li>
      <li>Yeni ehliyet, tescil (eyaletler arası): 50–400 $</li>
      <li>Yeni plakalar, güvenlik muayeneleri: 50–200 $</li>
      <li>Yeni mutfak/banyo temel ihtiyaçlarını stoklama: 200–500 $</li>
    </ul>
    <p>
      Bunlar teknik olarak &ldquo;taşınma&rdquo; değildir ancak aynı aya denk gelir ve bütçeleri altüst eder. Kıtalararası bir taşınma için yan giderlere 1.000–3.000 $ ekleyin.
    </p>

    <h2>11. İşten izin</h2>
    <p>
      Taşınma tipik olarak 1–3 gün ücretli izin ve biraz uzaktan çalışma aksaması gerektirir. Saatlik bir işçi için bu gerçek gelirdir. Maaşlı için, yakılan tatil günleridir. Bunu DIY (daha fazla gün) ve tam hizmet (daha az gün) arasındaki toplam taşınma maliyeti karşılaştırmasına dahil edin.
    </p>

    <h2>12. Eyaletler arası ve uluslararası dolandırıcılık kırmızı bayrakları</h2>
    <ul>
      <li>Telefon üzerinden düşük teklif</li>
      <li>Peşin büyük depozito talep etmek</li>
      <li>Listelenmiş fiziksel adres veya DOT numarası yok</li>
      <li>Sadece nakit talep etmek</li>
      <li>Bağlayıcı tahmin vermeyi reddetmek</li>
      <li>Rehine yüklerinden (ek ödeme için eşyaları tutma) bahseden yorumlar</li>
    </ul>
    <p>
      Şirketin USDOT ve MC numaralarını her zaman <em>fmcsa.dot.gov</em> adresinde doğrulayın. Uluslararası taşınmalar için AMSA üye listesini kontrol edin.
    </p>

    <h2>13. Yaygın hatalar</h2>
    <ul>
      <li>
        <strong>Ayıklamadığınız bir ağırlık üzerinden tahmin almak.</strong> Tutulan her kilo iki katına mal olur.
      </li>
      <li>
        <strong>En ucuz teklifi almak.</strong> Genellikle bir dolandırıcılık.
      </li>
      <li>
        <strong>Sigortayı atlamak.</strong> Pound başına 60 sentlik teminat, sahip olmaya değer hiçbir şeyin yerini koymaz.
      </li>
      <li>
        <strong>Yan maliyetleri unutmak.</strong> Depozitolar ve kurulum ücretleri 1–3 bin $'a kadar çıkar.
      </li>
      <li>
        <strong>Çok geç rezervasyon yapmak.</strong> Yaz taşınmaları (Mayıs–Ağustos) dolar ve %20–30 daha pahalı olur. 6–8 hafta önceden rezervasyon yapın.
      </li>
    </ul>

    <h2>14. Rakamları hesaplayın</h2>
    <p>
      Ev boyutunuzu, mesafenizi ve hizmet seviyenizi girerek tahmini tüm maliyeti alın, ardından bunu kira-gelir oranınız ve taşınma bütçenizle karşılaştırın.
    </p>
    <p>
      <a href="/tools/moving-cost-calculator">Taşınma maliyeti hesaplayıcı</a>
      <a href="/tools/apartment-affordability-calculator">Daire satın alınabilirlik hesaplayıcı</a>
      <a href="/tools/trip-cost-calculator">Seyahat maliyeti hesaplayıcı</a>
    </p>
  </>
);