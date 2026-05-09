import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      GPA yükseltmek çoğunlukla aritmetiktir, çaba değil. Kümülatif ortalamaların nasıl çalıştığının matematiği, 3.2'yi yükseltmenin 2.5'e göre çok daha fazla A gerektirdiğini ve son sınıf derslerinin birinci sınıfa kıyasla neredeyse hiç kaldıraç etkisi olmadığını gösterir. Bu rehber, GPA'yı inatçı yapan seyreltme etkisini, notunuzu gerçekten hangi derslerin hareket ettirdiğini ve belirli bir hedefe ulaşmak için gereken dönem dönem matematiği açıklar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Seyreltme sorunu</h2>
    <p>
      GPA ağırlıklı bir ortalamadır. Daha önce aldığınız her ders sabittir ve yeni dersler, kredi saatleriyle orantılı olarak ortalamaya eklenir. Transkriptinizde ne kadar çok kredi varsa, tek bir yeni dersin notunuzu hareket ettirme gücü o kadar azalır.
    </p>
    <p>
      Diyelim ki 60 kredi saati üzerinden 3.0 GPA'ya sahip bir ikinci sınıf öğrencisisiniz. 3 kredilik bir ders alıp onu mükemmel yapıyorsunuz (4.0). Yeni GPA:{" "}
      <code>(3.0 × 60 + 4.0 × 3) / 63 = 3.048</code>. Mükemmel bir A, notunuzu 0.048 puan hareket ettirdi. Aynı dönemde 3.0'dan 3.5'e çıkmak için (15 kredi, hepsi A): <code>(3.0 × 60 + 4.0 × 15) / 75 = 3.2</code>. Mükemmel bir 4.0 dönemi sizi yalnızca 3.2'ye taşır. GPA bir süper tankerdir. Yavaş döner.
    </p>

    <h2>Yüksek kredili derslere öncelik verin</h2>
    <p>
      4 kredilik bir ders, GPA'nızı 3 kredilik bir dersten %33, 1 kredilik bir dersten ise 4 kat daha fazla etkiler. Hangi iki ders için en çok çalışacağınızı seçmek zorundaysanız, en fazla krediye sahip olanları seçin — 4 kredilik bir dersten A almak aynı çaba tavanına sahiptir ve 1 kredilik bir dersten daha fazla GPA hareketi sağlar. Beden eğitimi seçmeli dersleri ve bir kredilik seminerler yuvarlama hatalarıdır.
    </p>

    <h2>Tekrar almak vs. devam etmek</h2>
    <p>
      Çoğu okulda "not affı" veya tekrar alma politikası vardır — bir dersi tekrar alırsınız ve ya yeni not eski notun yerine geçer ya da her ikisi de sayılır. Yerine koyma senaryosunda: 4 kredilik bir derste D'yi A'ya çevirmek GPA'nızı önemli ölçüde değiştirir (kazanç: 3.0 not puanı × 4 kredi = kümülatifinize eklenen 12 kalite puanı). Kayıt işleri ofisinizin politikasını kontrol edin. Transkriptinizde başarısız veya başarısıza yakın bir ders varsa, bu genellikle mevcut en güçlü hamledir.
    </p>
    <p>
      Her iki not da sayılıyorsa (birçok eyalet sisteminde daha yeni politika), tekrar almak size daha az kazandırır — etkili bir şekilde ikisini ortalamasını alır ve daha önce olduğu gibi seyreltir. Bir dönemi buna adamadan önce matematiği yapın.
    </p>

    <h2>W (bırakma) tuzağı</h2>
    <p>
      Bir dersi W son tarihinden önce bırakmak onu GPA'nızdan çıkarır. Bırakma son tarihinden sonra dersten çekilmek genellikle transkriptinizde GPA'nıza dahil olmayan ancak görünen bir W bırakır. C veya D'den kaçınmak için stratejik bir W, GPA'nızı koruyabilir — ancak lisansüstü ve profesyonel okul kabul komiteleri W'leri niteliksel olarak değerlendirir. Bir veya iki tane görünmezdir. Transkriptte beş veya daha fazlası bir hikaye anlatır.
    </p>

    <h2>Geçti/kaldı — iki ucu keskin kılıç</h2>
    <p>
      G/K not seçeneği, GPA'nızı riske atmadan zor bir dersi geçmenizi sağlar, ancak aynı zamanda o dersle notunuzu <em>yükseltemeyeceğiniz</em> anlamına gelir. G/K'yı, C riskinin A ödülünden ağır bastığı bölüm dışı dersler için kullanın. Notlu dersleri, gerçekçi bir şekilde A-/A alabileceğiniz her şey için saklayın.
    </p>

    <h2>Ağırlıklı vs. ağırlıksız — kimin baktığına bağlı</h2>
    <p>
      Onur/AP derslerindeki lise öğrencilerinin ağırlıklı (genellikle 5.0 ölçeğinde) ve ağırlıksız (4.0 üzerinden) GPA'sı vardır. Üniversite kabul görevlileri tipik olarak kendi ölçeklerini kullanarak yeniden hesaplar, bu nedenle her iki sayı da sonuçta ortak bir paydaya indirgenir. Sadece ağırlıklı GPA'nızı şişirmek için AP derslerini yığmayın — kabul görevlileri bunu görecektir ve bir AP'deki B, kabul puanlamasında genellikle normal bir dersteki A'ya eşdeğerdir.
    </p>

    <h2>Gerçekçi hedef matematiği</h2>
    <p>
      Senaryoları planlamak için{" "}
      <a href="/tools/gpa-calculator">GPA hesaplayıcıyı</a> kullanın: mevcut kümülatif GPA'nızı + kredilerinizi girin, ardından varsayımsal bir gelecek dönemi girin. Hesaplayıcı, hedefinizin kalan kredi saatleriniz göz önüne alındığında gerçekten ulaşılabilir olup olmadığını ortaya çıkarır.
    </p>
    <p>
      Örnek: 90 kredi üzerinden 3.0 GPA'ya sahip bir üçüncü sınıf öğrencisi, mezuniyete kadar (30 kredi kaldı) 3.5 istiyor. Gerekli:{" "}
      <code>((3.5 × 120) − (3.0 × 90)) / 30 = 5.0</code>. İmkansız — 4.0'ın üzerinde ortalama alamazsınız. Gerçekçi tavan 3.25'tir (tüm A'lar). Bir hedef belirlemeden önce bu matematiği yapmayan öğrenciler genellikle ulaşılamaz hedefler koyar ve dönem ortasında pes eder.
    </p>

    <h2>Üç hamleli önceliklendirme</h2>
    <p>
      GPA'nızı yükseltmek için bir döneminiz varsa: (1) Programınızı, A alabileceğinizi bildiğiniz daha yüksek kredili derslerle doldurun. (2) C almanın gerçekçi olduğu dersleri bırakın veya G/K yapın. (3) Politikanız izin veriyorsa, not değiştirme kapsamında eski bir dersi tekrar alın.
    </p>
    <p>
      Atlayın: 1 kredilik seçmeli derslerde ekstra kredi puanları için tıkıştırmak, nefret edeceğiniz B'ler alacağınız AP'leri yığmak veya oyunun sonlarında bölüm değiştirmek (son sınıfta bölüm değiştirmek genellikle negatif bir GPA'yı kilitler çünkü onu hareket ettirmek için çok az yeni ders kalır).
    </p>
    <p>
      Kendi durumunuz için{" "}
      <a href="/tools/gpa-calculator">GPA hesaplayıcıda</a> sayıları çalıştırın, çalışma sürenizi her ders için{" "}
      <a href="/tools/grade-calculator">not hesaplayıcı</a> projeksiyonlarına göre planlayın ve bir dönemi buna adamadan önce bir hedefin matematiksel olarak ulaşılabilir olup olmadığını kontrol edin.
    </p>
  </>
);