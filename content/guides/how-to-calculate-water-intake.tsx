import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      &ldquo;Günde sekiz bardak&rdquo; kuralı herkesin hatırladığı ama neredeyse hiçbir araştırmanın desteklemediği bir kuraldır. Gerçek su ihtiyacı; vücut ağırlığı, iklim, aktivite ve beslenmeye bağlı olarak üç kata kadar değişir ve sizi susuz kalmaktan koruyan alımın büyük kısmı bardaktan değil, yiyeceklerden gelir. Çok az içerseniz bilişsel işlevler, böbrek fonksiyonları ve atletik performans düşer; çok fazla içerseniz hiponatremi ile hastaneye kaldırılmanız gerçekten mümkündür. Bu rehber, 8x8 kuralının nereden geldiğini, daha iyi bir başlangıç noktası olan vücut ağırlığı formüllerini, iklim ve egzersizin bu sayıyı nasıl değiştirdiğini, gerçekten susuz kalıp kalmadığınızı nasıl anlayacağınızı ve çok fazla suyun gerçek sınırlarını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>&ldquo;Günde 8 bardak&rdquo; kuralı nereden geldi</h2>
    <p>
      Genellikle 1945 tarihli bir Ulusal Araştırma Konseyi raporuna atfedilir. Asıl öneri &ldquo;tüketilen her kalori için yaklaşık 1 mL su&rdquo; idi ve 2.000 kalorilik bir diyet için bu 2 litreye denk geliyordu. Ancak aynı rapor şunu da belirtiyordu: &ldquo;bu miktarın çoğu hazır yiyeceklerde bulunur.&rdquo; İkinci cümle kayboldu. 8x8 kuralı iyi bir kısayoldur ancak bir hidrasyon çalışmasına dayanmaz.
    </p>

    <h2>Vücut ağırlığına göre (daha iyi temel)</h2>
    <p>
      Vücut ağırlığı formülü, vücudunuzun gerçekte ihtiyaç duyduğu miktara daha yakındır çünkü daha büyük vücutların nemlendirecek daha fazla dokusu vardır.
    </p>
    <pre>{`Temel:  ağırlık(lb) * 0,5 ila 0,7  =  günlük ons
           veya  ağırlık(kg) * 30 ila 40  =  günlük mililitre

68 kg kişi:  2,2 ila 3,1 L/gün
80 kg kişi:  2,4 ila 3,2 L/gün`}</pre>
    <p>
      &ldquo;Günlük&rdquo; burada sadece sade su değil, tüm kaynaklardan alınan toplam sıvı alımı anlamına gelir. Meyve, çorba, kahve, süt, çayın hepsi sayılır.
    </p>

    <h2>Yiyecekler su alımının ~%20'sini sağlar</h2>
    <p>
      Meyve ve sebzeler çoğunlukla sudur: karpuz %92, salatalık %96, çilek %91, portakal %86. Ekmek bile ~%35, et ~%60 sudur. Tipik bir Batı diyeti günlük suyun ~%20'sini sağlar; Akdeniz veya meyve ağırlıklı diyetler bunu %30+'a çıkarabilir.
    </p>
    <p>
      Pratik sonuç: temel ihtiyacınız 2,5 L/gün diyorsa, <em>içmeniz</em> gereken miktar daha çok 2 L'dir &mdash; kalanını yiyecekler karşılar.
    </p>

    <h2>İklim ayarlaması</h2>
    <p>
      Sıcaklık ve nem sıvı ihtiyacını artırır; soğuk ve kuru koşullar genellikle biraz daha az gerektirir ancak yine de solunum yoluyla susuzluğa neden olabilir.
    </p>
    <pre>{`Sıcak nemli  (30 C, %70 nem)         +500-1000 mL/gün
Sıcak kuru   (35 C, düşük nem)      +500-1500 mL/gün
Soğuk kuru   (sıfır altı, yükseklik) +250-500 mL/gün (hafife almak kolay)
Klima ofis   (21 C, %40 nem)         temel`}</pre>
    <p>
      Yüksek irtifada (&gt;2.500 m / 8.000 ft) daha hızlı nefes alma ve artan idrar çıkışı yoluyla su kaybedersiniz. İlk 48 saat için 500&ndash;1000 mL ekleyin, ardından azaltın.
    </p>

    <h2>Egzersiz ayarlaması</h2>
    <p>
      Orta yoğunlukta egzersizde saatte yaklaşık 400&ndash;800 mL, sıcakta daha fazla. Ciddi dayanıklılık sporları ter yoluyla saatte 1,5 L kaybedebilir.
    </p>
    <pre>{`Hafif (yürüyüş, yoga):      saatte 200-400 mL ek
Orta (spor salonu, koşu):   saatte 400-600 mL
Yoğun (futbol, HIIT):      saatte 600-1000 mL
Sıcakta dayanıklılık yarışı: saatte 1500 mL'ye kadar`}</pre>
    <p>
      60 dakikayı geçen her şey için elektrolit ekleyin. Su tek başına hacmi değiştirir ancak sodyumu değiştirmez ve sade suyla uzun terli seanslar hiponatremiye doğru gider.
    </p>

    <h2>Kafein, alkol ve diüretikler</h2>
    <p>
      Eski bilgi: kafein susuz bırakır, bu yüzden kahve sayılmaz. Güncel kanıt: kafeinin hafif bir idrar söktürücü etkisi vardır ve bu etki büyük ölçüde kahvedeki su ile dengelenir. Alışkanlık haline getirenler (günlük kahve) için net etki sıfıra yakındır. Sabah fincanınız sayılır.
    </p>
    <p>
      Alkol gerçekten susuz bırakır &mdash; etanol vazopressini baskılayarak sıvı alımından daha fazla idrar çıkışına neden olur. Her standart içki, net sıfır için ~250 mL su gerektirir.
    </p>

    <h2>Hidrasyon belirteçleri</h2>
    <p>
      Susuz kalıp kalmadığınızı bilmek için bir uygulamaya ihtiyacınız yok. Vücudunuz size söyler:
    </p>
    <p>
      <strong>İdrar rengi.</strong> Açık saman rengi = susuz kalmamış. Elma suyu veya daha koyu = su için. Tamamen berrak = hafif fazla sıvı. Sabah idrarı doğal olarak daha koyudur ve iyi bir belirteç değildir.
    </p>
    <p>
      <strong>Susuzluk.</strong> Fitness kültüründe hafife alınır. Susuzluk, dehidrasyon performansı bozmadan önce tepki verir, ancak yaşlı bir yetişkin değilseniz (susuzluk tepkisi yaşla birlikte körelir).
    </p>
    <p>
      <strong>İdrar sıklığı.</strong> Uyanık saatlerde kabaca her 2&ndash;4 saatte bir. Çok daha az = kuru; çok daha fazla = aşırı alım.
    </p>
    <p>
      <strong>Egzersiz boyunca kilo değişimi.</strong> Vücut ağırlığının &gt;%2'sinin kaybı, o seans için dehidrasyonu gösterir. Kaybedilen kg başına 1,5 L değiştirin.
    </p>

    <h2>Çok fazla su içebilir misiniz?</h2>
    <p>
      Evet. Su zehirlenmesi (hiponatremi), böbrekleriniz fazla suyu atamayacağı kadar hızlı bir şekilde kan sodyumunun kritik derecede düşmesiyle oluşur. Belirtiler: mide bulantısı, baş ağrısı, kafa karışıklığı, nöbetler. Vakalar arasında aşırı sıvı alan maratoncular ve su içme yarışmaları yer alır.
    </p>
    <pre>{`Sağlıklı böbrekler saatte ~800-1000 mL işleyebilir.
Birkaç saat boyunca saatte 1,5+ L içmek hiponatremi riski taşır.`}</pre>
    <p>
      Günlük hayatta buna kazara ulaşmak zordur. Sade su içen dayanıklılık sporcuları için gerçek bir risktir. Uzun eforlarda elektrolit karışımları çözümdür.
    </p>

    <h2>Ne zaman içilmeli</h2>
    <p>
      Bardakları bir anda devirmek yerine güne yayarak:
    </p>
    <ul>
      <li>Uyanınca 1 bardak (gece susuz kalırsınız)</li>
      <li>Her öğünden önce 1 bardak (tokluk hissine de yardımcı olur)</li>
      <li>Çalışma saatlerinde yudumlayın</li>
      <li>Yatmadan 1&ndash;2 saat önce 1 bardak; hemen önce kafaya dikmekten kaçının</li>
      <li>Antrenman öncesi/sırası/sonrası: her aşamada 200&ndash;400 mL</li>
    </ul>

    <h2>Böbrekler, hormonlar ve özel durumlar</h2>
    <p>
      Kronik böbrek hastalığı, kalp yetmezliği ve bazı ilaçlar optimal alımı değiştirir. Sıvı kısıtlaması veya potasyum/sodyum dengesi içeren tıbbi bir durumunuz varsa, buradaki formüller geçerli değildir &mdash; doktorunuzun planını izleyin.
    </p>
    <p>
      Hamilelik: ~+300 mL/gün. Emzirme: ~+700 mL/gün.
    </p>

    <h2>Pratik hedefler</h2>
    <pre>{`Hareketsiz 70 kg yetişkin, ılıman iklim:
  ~2,5 L toplam sıvı (yiyecek + içecek)
  ~2,0 L içeceklerden (su, kahve, çay vb.)

Aktif 90 kg yetişkin, sıcak iklim, 1 saat antrenman:
  ~4,0 L toplam sıvı
  ~3,2 L içeceklerden, bunun ~1L'si antrenman sırasında/çevresinde`}</pre>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>8x8'i mutlak doğru kabul etmek.</strong> Hareketsiz, ılıman iklimdeki yetişkinler için bir kuraldır. Vücudunuza ve koşullarınıza göre ayarlayın.
    </p>
    <p>
      <strong>Yiyecekleri su kaynağı olarak görmezden gelmek.</strong> Sadece su şişelerini takip etmek, içmeniz gereken miktarı olduğundan fazla tahmin etmenize neden olur.
    </p>
    <p>
      <strong>Bir litreyi bir anda içmek.</strong> Böbrekleriniz bunu o kadar hızlı işleyemez; çoğu doğrudan dışarı çıkar. Gün boyunca yudumlayın.
    </p>
    <p>
      <strong>Uzun eforlar sırasında sadece sade su içmek.</strong> Hiponatremi riski. Bir saati geçen her şey için elektrolit kullanın.
    </p>
    <p>
      <strong>Sabah ilk iş idrar rengini kullanmak.</strong> Her zaman koyudur; yararlı bir belirteç değildir. Öğleye doğru kontrol edin.
    </p>
    <p>
      <strong>Susuzluğa değil, bir sayıya göre içmek.</strong> Susuzluk artı idrar rengi kontrolü, herhangi bir tablodan daha doğrudur.
    </p>
    <p>
      <strong>Yatmadan önce büyük miktarlarda su içmek.</strong> Tuvalet ziyaretlerinden uyku bölünmesi. Günün erken saatlerinde tüketin.
    </p>

    <h2>Sayıları hesaplayın</h2>
    <p>
      Kilo, aktivite ve iklimi{" "}
      <a href="/tools/water-intake-calculator">su alımı hesaplayıcısına</a> girerek
      kişiselleştirilmiş bir litre/gün hedefi alın. Toplam kafein miktarınızı{" "}
      <a href="/tools/caffeine-intake-calculator">kafein alımı hesaplayıcısıyla</a>{" "}
      (kahve hem sıvı hem de uyarıcı sağlar) izleyin ve{" "}
      <a href="/tools/calorie-calculator">kalori hesaplayıcısıyla</a> beslenme
      düzeninize göre dengeleyin, böylece yiyeceklerden gelen su katkısı bir sır olmaktan çıksın.
    </p>
  </>
);