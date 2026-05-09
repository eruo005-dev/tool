import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Yaş farkı hesaplamak çıkarma işlemi gibi görünür ama öyle değildir. Bir kişi 1 Mart'ta, diğeri bir önceki yılın 28 Şubat'ında doğmuşsa, tam olarak bir yıl değil, bir yıl bir gün arayla doğmuşlardır — ve spor müsabakalarına katılım, evlat edinme evrakları veya titiz bir aile tartışması için bu bir gün önemlidir. İşte doğru yöntem, insanların gözden kaçırdığı uç durumlar ve ne zaman bir hesap makinesinin işi yapmasına izin vermeniz gerektiği.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Doğru yol: önce yıllar, sonra aylar, sonra günler</h2>
    <p>
      Temiz yöntem yukarıdan aşağıya çalışır. İki doğum tarihini alın. Önce yılları çıkarın. Sonra ayları çıkarın. Sonra günleri çıkarın. Gün farkı negatif çıkarsa, aylardan ödünç alırsınız — tıpkı ilkokuldaki uzun çıkarma işlemi gibi. Ay farkı da negatif olursa, yıllardan ödünç alırsınız.
    </p>
    <p>
      Örnek: A kişisi 2010-05-20 doğumlu, B kişisi 2007-08-03 doğumlu. Yıllar: 2010 - 2007 = 3. Aylar: 5 - 8 = -3. Günler: 20 - 3 = 17. Aylar negatif çıktı, bu yüzden bir yıl ödünç alın: 3 - 1 = 2 yıl ve -3 + 12 = 9 ay. Sonuç: 2 yıl, 9 ay, 17 gün.
    </p>

    <h2>Neden "sadece yılları çıkarmak" yanlıştır</h2>
    <p>
      Yaygın bir kestirme yol: doğum yılı eksi doğum yılı. Bu, günlük konuşmalar için iyidir ancak önemli olan herhangi bir şey için yanlıştır. 2015 ve 2017'de doğan iki kişi, sadece bir yıldan biraz fazla (Aralık 2015 ve Ocak 2017) ile neredeyse üç yıl (Ocak 2015 ve Aralık 2017) arasında bir farka sahip olabilir. Yıl tek başına, gerçek farkın 23 aya kadarını gizler.
    </p>
    <p>
      28 Şubat / 1 Mart sorunu klasik bir durumdur. 28 Şubat 2020'ye karşı 1 Mart 2021'de doğum, bir yıl bir gündür, bir yıl değil — ve bir kural "en az bir yıl" diyorsa, her ikisi de geçer; bir kural "tam olarak bir yıl" diyorsa, sadece biri geçer.
    </p>

    <h2>Artık yıl uç durumu</h2>
    <p>
      29 Şubat doğum günleri eğlenceli bir bilmecedir. 29 Şubat 2000'de doğan birinin teknik olarak her dört yılda bir "gerçek" bir doğum günü vardır. Yaş hesaplamaları için yaygın kurallar şunlardır: artık olmayan yıllarda, doğum günlerini 28 Şubat (çoğu yerde yasal varsayılan) veya 1 Mart (bazı yargı bölgeleri, bazı spor kuruluşları) olarak kabul edin. Bir kural seçin ve tutarlı olun. Günlük kullanım için 28 Şubat daha güvenli varsayılandır.
    </p>
    <p>
      Artık yıllar ayrıca bir "yıl" içindeki tam gün sayısının değiştiği anlamına gelir. İki tarih arasındaki toplam gün sayısına ihtiyacınız varsa, onları sayın — yılları 365 ile çarpmayın.
    </p>

    <h2>İnsanlar yaş farkını gerçekte ne için kullanır</h2>
    <p>
      Dört yaygın bağlam. <strong>Çiftler</strong>: klasik "kaç yıl arayla" — insanlar neredeyse her zaman yıl ve ay biçimini ister, ham günleri değil. <strong>Kardeşler</strong>: aynı biçim, aynı neden. <strong>Spor müsabakalarına katılım</strong>: gençlik ligleri genellikle "1 Eylül itibarıyla 12 yaşından küçük olmalı" gibi kesme noktaları belirler. Kesme noktası tarihinde gün kesinliğinde bir cevaba ihtiyacınız vardır. <strong>Evlat edinme, göçmenlik, aile hukuku</strong>: "en az X yıl daha genç" diyen herhangi bir evrak, kesin bir hesaplama ister.
    </p>

    <h2>Hesap makinesine ne zaman başvurmalı</h2>
    <p>
      Ödünç alma işlemini bir kez yapmak eğiticidir. On kez yapmak, tam da önemli olan yerde bir aritmetik hatası için reçetedir. Bizim{" "}
      <a href="/tools/age-gap-calculator">yaş farkı hesaplayıcımız</a> ödünç alma, artık yıllar ve uç durumları halleder — iki tarih girin ve sonucu okuyun. Sadece bir kişinin mevcut yaşına ihtiyacınız varsa,{" "}
      <a href="/tools/age-calculator">yaş hesaplayıcı</a> daha basit versiyondur.
    </p>

    <h2>Genellikle hataları yakalayan bir sağlama</h2>
    <p>
      Hesaplamayı yaptıktan sonra, kabaca bir çapraz kontrol yapın: büyük olanın bu yılki doğum günü, artı fark, kabaca küçük olanın bu yılki doğum gününe denk geliyor mu? İkisi bir gün içinde uyuşmuyorsa, bir aritmetik hatası yapmışsınızdır. Bu on saniyelik kontrol, herhangi bir formülden daha fazla aile tartışmasını kurtarmıştır.
    </p>
  </>
);