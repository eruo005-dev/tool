import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Finalden bir gece önce saat 22:00 ve notunu kurtarmak için tam olarak
      hangi puanın gerektiğini bilmen gerekiyor. Panik matematiği
      (&ldquo;95 mi lazım? Yoksa 75 mi?&rdquo;) önemlidir çünkü cevap,
      sabaha kadar çalışıp çalışmayacağını ya da dizüstünü kapatıp
      uyuyacağını söyler. Bu rehber, formülü, üç çözümlü örneği ve
      öğrencileri zorlayan uç durumları — gerekli puanın %100'ün üzerinde
      olduğu durum da dahil — adım adım açıklıyor.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>İhtiyacın olan tek formül</h2>
    <p>
      Final sınavında gereken notu hesaplamak için:
    </p>
    <p>
      <code>Gereken % = (Hedef − Mevcut kazanılan) / Final ağırlığı</code>
    </p>
    <p>
      Burada: <strong>Mevcut kazanılan</strong> = daha önce notlandırılmış her
      kategori için (kategori yüzde puanı × kategori ağırlığı) toplamıdır.
      <strong>Final ağırlığı</strong> = final sınavının ondalık olarak
      ağırlığıdır. <strong>Hedef</strong> = hedeflediğin nottur.
    </p>

    <h2>Çözümlü örnek 1 — basit durum</h2>
    <p>
      Ders izlencesi: Ödev %20 (ortalaman 85), Ara sınav %30 (72 aldın),
      Final %50. Hedef: B (80).
    </p>
    <p>
      Mevcut kazanılan = (0,85 × 20) + (0,72 × 30) = 17 + 21,6 = 38,6.
      Finalde gereken = (80 − 38,6) / 0,5 = 41,4 / 0,5 = <strong>%82,8</strong>.
      Finalden 82,8 alman, tam olarak 80 ile bitirmen için yeterli. Yapılabilir —
      yat uyu.
    </p>

    <h2>Çözümlü örnek 2 — &ldquo;iş bitti&rdquo; senaryosu</h2>
    <p>
      Ödev %20 @ %65. Quizler %10 @ %50. Ara sınav %30 @ %60. Final %40.
      Hedef: B (80).
    </p>
    <p>
      Mevcut kazanılan = (0,65 × 20) + (0,50 × 10) + (0,60 × 30) = 13 + 5 +
      18 = 36. Finalde gereken = (80 − 36) / 0,4 = %110. Finalden %110
      alman gerekiyor. <strong>Ek kredi olmadan matematiksel olarak imkansız.</strong>
      Hedefi C'ye (70) düşür: (70 − 36) / 0,4 = %85. Bu ulaşılabilir.
      Çabanı gerçekten yapabileceklerine göre ayarla.
    </p>

    <h2>Çözümlü örnek 3 — şanslı durum</h2>
    <p>
      Ödev %15 @ %95. Laboratuvarlar %20 @ %92. Ara sınav 1 %20 @ %90. Ara sınav 2
      %20 @ %88. Final %25. Hedef: A (90).
    </p>
    <p>
      Mevcut kazanılan = (0,95 × 15) + (0,92 × 20) + (0,90 × 20) + (0,88 ×
      20) = 14,25 + 18,4 + 18 + 17,6 = 68,25. Gereken = (90 − 68,25) /
      0,25 = <strong>%87</strong>. Finalden 87 almak sana tam olarak 90
      A'sını verir. Rahat ol. Panik yapmayı bırak, zayıf olduğun konuyu 90
      dakika gözden geçir ve yat.
    </p>

    <h2>Ağırlık kontrolü</h2>
    <p>
      Tüm kategori ağırlıklarını topla. %100'e ulaşmalılar. Ulaşmıyorsa,
      ders izlencende gizli bir kategori vardır — genellikle katılım,
      devam veya eğitmen takdiri — ve hesap makinesi onsuz doğru tahmin
      yapamaz. Profesörüne e-posta at.
    </p>

    <h2>Harf notu sınırları</h2>
    <p>
      Standart ABD sınırları: A 90+, B 80+, C 70+, D 60+. Çoğu okul
      89,5'i A'ya yuvarlar. Bazı izlenceler 93/83/73/63 (daha katı) veya
      88/78/68/58 (daha esnek) kullanır — hedef belirlemeden önce kendi
      izlenceni kontrol et.
    </p>
    <p>
      &ldquo;A-&rdquo; ve &ldquo;B+&rdquo; ayırım noktaları (87, 89, 92)
      kuruma göre değişir. İzlencende artı/eksi sınırları varsa, 90
      varsaymak yerine doğrudan onları hedef olarak kullan.
    </p>

    <h2>Gerekli puan %100'ün üzerinde olduğunda</h2>
    <p>
      Bu, hedefine ulaşmak için gereken puanları zaten kaybettiğin anlamına
      gelir. Üç seçenek:
    </p>
    <p>
      (1) <strong>Hedefi düşür.</strong> B hâlâ iyi bir sonuçtur; B- çoğu
      durumda kabul edilebilir. Gerçekçi olarak ulaşabileceğin hedefi bul.
    </p>
    <p>
      (2) <strong>Ek krediyi kontrol et.</strong> Birçok derste notun %1-3'ü
      değerinde isteğe bağlı ek kredi vardır. %3 ek kredi, mevcut
      kazanılanını da aynı %3 oranında değiştirir; bu bazen
      &ldquo;imkansız&rdquo; ile &ldquo;95 gerekiyor&rdquo; arasındaki
      farktır. Profesöre sormak her zaman değer.
    </p>
    <p>
      (3) <strong>Dersten çekilmeyi düşün</strong> okulun buna izin
      veriyorsa ve ders bırakma tarihi geçmişse. W notu not ortalamasını
      etkilemez (ancak mali yardım ve akademik ilerlemeyi etkiler —
      ikisini de kontrol et). Çoğu durumda W, D'den daha iyidir, yeter ki
      W sınırına ulaşmamış ol.
    </p>

    <h2>Eğri etkileri</h2>
    <p>
      Dersin eğriye tabi ise, hesap makinesinin cevabı bir{" "}
      <em>en kötü durum</em>dur. %78'lik ham puan, eğriden sonra %85
      olabilir, ancak finaller notlandırılana kadar eğriyi bilemezsin.
      Ham puan için plan yap, eğriyi bonus olarak gör.
    </p>

    <h2>Sınav gecesi için 30 saniyelik yaklaşım</h2>
    <p>
      <a href="/tools/grade-calculator">Not hesaplayıcıyı</a> aç,
      ders izlencenden ve not defterinden her kategori adını/ağırlığını/puanını
      gir, hedef notunu ekle. Araç, finalde ihtiyacın olan puanı hemen
      döndürür ve hedef ulaşılamazsa bir uyarı verir. Dersin kümülatif
      not ortalamasına etkisini burs veya kabul eşikleri için takip
      ediyorsan <a href="/tools/gpa-calculator">not ortalaması
      hesaplayıcısıyla</a> birlikte kullan.
    </p>
  </>
);