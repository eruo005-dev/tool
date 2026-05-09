import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      BMR, komadayken yakacağınız kaloridir. TDEE ise gerçek hayatınızı yaşarken yaktığınız kaloridir. Her iki sayı da önemlidir, ancak kilo vermeye, almaya veya korumaya çalışıyorsanız, hedefinize göre yemeniz gereken TDEE'dir. Bu kılavuz, mevcut klinik standart olan Mifflin-St Jeor denklemi ile her ikisinin de nasıl hesaplanacağını ve TDEE'nin gerçek hedefiniz için bir kalori hedefine nasıl dönüştürüleceğini açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>BMR ve TDEE — fark nedir?</h2>
    <p>
      <strong>BMR (Bazal Metabolizma Hızı)</strong>, vücudunuzun sadece hayatta kalmak için yaktığı enerjidir: kalp atışı, akciğer solunumu, beyin çalışması, hücre bölünmesi. Nötr <a href="/learn/temperature-ai">sıcaklıkta</a>, karanlık bir odada, 24 saat boyunca tamamen hareketsiz yatmak. Çoğu yetişkin için BMR 1.400 ile 1.800 kcal/gün arasındadır.
    </p>
    <p>
      <strong>TDEE (Toplam Günlük Enerji Harcaması)</strong>, BMR artı diğer her şeydir: mutfağa yürümek, yazı yazmak, yiyecekleri sindirmek, vücut ısısını düzenlemek ve herhangi bir bilinçli egzersiz. TDEE, ne kadar aktif olduğunuza bağlı olarak tipik olarak BMR'nin 1,2–1,9 katıdır.
    </p>
    <p>
      BMR'ye göre yemek yemezsiniz. TDEE'ye göre yersiniz, ardından kilo değişimi için ekleme veya çıkarma yaparsınız.
    </p>

    <h2>Mifflin-St Jeor denklemi</h2>
    <p>
      1990'larda yapılan çalışmalar, modern vücut kompozisyonları için Harris-Benedict'ten (1919) daha doğru olduğunu gösterdikten sonra Beslenme ve Diyetetik Akademisi tarafından standart olarak kabul edilmiştir.
    </p>
    <p>
      Erkekler için:{" "}
      <code>BMR = (10 × kg) + (6.25 × cm) − (5 × yaş) + 5</code>. Kadınlar için:{" "}
      <code>BMR = (10 × kg) + (6.25 × cm) − (5 × yaş) − 161</code>. Ağırlık kilogram, boy santimetre, yaş yıl cinsinden.
    </p>
    <p>
      82 kg (180 lbs) ve 178 cm (5'10") boyunda 32 yaşındaki bir erkeğin BMR'si <code>(10 × 82) + (6.25 × 178) − (5 × 32) + 5 = 820 + 1113 − 160 + 5 = 1.778 kcal</code>'dir. <a href="/tools/bmr-calculator">BMR hesaplayıcı</a>, emperyal-metrik dönüşümü ve aktivite çarpanını tek adımda halleder.
    </p>

    <h2>Aktivite çarpanı — ve çoğu insanın neden yanlış yaptığı</h2>
    <p>
      BMR'yi haftanıza dürüstçe uyan faktörle çarpın:
    </p>
    <p>
      <strong>1,2 — hareketsiz.</strong> Masa başı iş, neredeyse hiç bilinçli egzersiz yok, günde 5.000 adımdan az yürüyüş. Evden çalışıyor ve antrenman yapmıyorsanız, bu sizsiniz.
    </p>
    <p>
      <strong>1,375 — hafif aktif.</strong> Masa başı iş ancak günde 5.000–10.000 adım yürüyüş veya haftada 1–3 gün orta yoğunlukta egzersiz.
    </p>
    <p>
      <strong>1,55 — orta derecede aktif.</strong> Haftada 4–5 gün egzersiz. Çoğu rekreasyonel ağırlık kaldırıcı ve koşucu burada yer alır.
    </p>
    <p>
      <strong>1,725 — çok aktif.</strong> Günlük antrenman, genellikle birden fazla seans veya fiziksel olarak zorlu bir iş. İnşaat işçileri, ekipman taşıyan turne müzisyenleri, saha eğitimindeki askeri personel.
    </p>
    <p>
      <strong>1,9 — ekstra aktif.</strong> Ağır antrenman bloklarındaki elit dayanıklılık sporcuları. Bunu okuyan neredeyse hiç kimse bu kategoriye girmez.
    </p>
    <p>
      Evrensel hata, gerçeklikten bir seviye yukarıda bir faktör seçmektir. Haftada üç spor salonu seansı 1,375'tir, 1,55 değil. Çok yüksek seçerseniz, hesaplanan TDEE'niz gerçek yakımınızı aşar ve "açığınız" koruma seviyesine dönüşür. "Kilo vermeyi bıraktım" ifadesinin olağan açıklaması budur.
    </p>

    <h2>TDEE'yi bir hedefe dönüştürmek</h2>
    <p>
      Bir kilo vücut yağı kabaca 3.500 kcal'dir. 7 güne bölündüğünde, günlük 500 kcal'lik bir açık, haftada yaklaşık 0,5 kg kayıp sağlar. Aynı matematik, kazançlar için tersine işler.
    </p>
    <p>
      <strong>Kesim (yağ kaybı):</strong> TDEE − 300 ila 500 kcal/gün. Agresif kesimler kısa vadede işe yarar ancak antrenman iyileşmesine ve hormonlara zarar verir. 500/gün makul bir tavan; 300/gün, rekabetçi fizik antrenörlerinin kas korumak için kullandığı miktardır.
    </p>
    <p>
      <strong>Koruma:</strong> TDEE ± 100 kcal. Vücut yeniden kompozisyonunun gerçekleştiği yer burasıdır — antrenman ve protein tarafından yönlendirilen, kalori manipülasyonuyla değil, yağ sabit kalırken veya düşerken yavaş yağsız kütle kazanımı.
    </p>
    <p>
      <strong>Yalın kazanç:</strong> TDEE + 200 ila 300 kcal/gün. +700 kcal/gün ile "kirli toplu alımlar", +250 ile neredeyse aynı miktarda kas ve üç kat daha fazla yağ üretir. Yavaş daha iyidir.
    </p>

    <h2>Önce protein, sonra kaloriler</h2>
    <p>
      Karbonhidrat/yağ oranları hakkında endişelenmeden önce, hedef vücut ağırlığının kilosu başına 0,8–1,0 gram proteine ulaşın. Protein, açıkta yağsız kütleyi korur, en doyurucu makro besindir ve sindirimi karbonhidrat veya yağdan daha fazla kalori harcar. 180 lbs'lik bir hedef, günde 145–180 g anlamına gelir — her öğünde yaklaşık bir avuç büyüklüğünde tavuk, balık veya Yunan yoğurdu porsiyonu.
    </p>

    <h2>Ne zaman yeniden hesaplama yapılmalı</h2>
    <p>
      Her 5 kg'lık kilo değişiminde veya her 3 ayda bir, hangisi önce gelirse. BMR vücut kütlesiyle ölçeklenir, bu nedenle 10 kg vermek, koruma kalorilerinizin başladığınızdan ~200 kcal/gün daha düşük olduğu anlamına gelir. Yeniden hesaplama yapmamak, durmuş yağ kaybının en yaygın ikinci nedenidir (aktivite çarpanı hakkında yalan söylemekten sonra).
    </p>
    <p>
      Sayı için <a href="/tools/bmr-calculator">BMR hesaplayıcıyı</a>, hedef bazlı hedefler için <a href="/tools/calorie-calculator">kalori hesaplayıcıyı</a> ve bir kalori tabanınız olduğunda TDEE'yi protein, karbonhidrat ve yağa bölmek için <a href="/tools/macro-calculator">makro hesaplayıcıyı</a> kullanın.
    </p>
  </>
);