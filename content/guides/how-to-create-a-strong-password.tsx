import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Çoğu ele geçirilen hesap, karmaşık bir hack saldırısının sonucu değildir
      — bunlar, siteler arasında yeniden kullanılan zayıf şifrelerin sonucudur. Bir site kimlik bilgilerini sızdırdığında (ve her yıl birkaç site sızdırır), bu kimlik bilgileri her büyük hizmette denenir. Bu rehber, 2026'da bir şifreyi gerçekten güçlü yapan şeyi, şifre yöneticilerinin nereye oturduğunu, geçiş anahtarlarının ortamı nasıl değiştirdiğini ve insanların hesaplarını kaybetmesine neden olan beş şifre hatasını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir şifreyi güçlü yapan şey — matematik</h2>
    <p>
      Şifre gücü entropi (bit) ile ölçülür. Daha yüksek entropi, kaba kuvvet saldırısı için daha uzun süre anlamına gelir.
    </p>
    <p>
      <strong>8 karakter, yalnızca küçük harf (26^8):</strong> Modern bir GPU kümesinde kırmak için ~5 saat.
    </p>
    <p>
      <strong>8 karakter, büyük/küçük harf + rakam + sembol (~95^8):</strong>
      ~2 ay.
    </p>
    <p>
      <strong>12 karakter, büyük/küçük harf + rakam + sembol:</strong>
      ~34.000 yıl.
    </p>
    <p>
      <strong>16 karakter, büyük/küçük harf + rakam + sembol:</strong>
      kaba kuvvetle etkili bir şekilde kırılamaz.
    </p>
    <p>
      Ders: uzunluk, karmaşıklığı yener. 16 rastgele karakter, büyük/küçük harf/sembol içeren 10 karmaşık karakterden daha iyidir.
    </p>

    <h2>2026 şifre kuralları (NIST uyumlu)</h2>
    <p>
      NIST SP 800-63B'den modern yönergeler:
    </p>
    <p>
      <strong>Hassas hesaplar için minimum 12 karakter</strong>
      (bankacılık, e-posta, birincil kimlik). Yüksek değerli varlıkları koruyan hesaplar için 15+.
    </p>
    <p>
      <strong>Zorunlu karmaşıklık kuralları yok.</strong> NIST, eski "büyük harf, rakam ve sembol içermelidir" kuralını açıkça kaldırdı çünkü bu kural, gerçek entropi kazancı olmadan "Password1!" gibi tahmin edilebilir kalıplara yol açar.
    </p>
  </>
);