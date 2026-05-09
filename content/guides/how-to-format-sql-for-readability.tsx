import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      300 satırlık bir SELECT ifadesini üç satıra sıkıştırmak, SQL'in
      okunamaz kod karşılığıdır. Onu biçimlendirin — birleştirmeleri girintileyin,
      sütunları hizalayın, anahtar kelimeleri büyük harf yapın, mantıksal
      sınırlarda ayırın — ve aynı sorgu hikayesini bir bakışta anlatır. Bu kılavuz,
      ekiplerin üzerinde gerçekten anlaştığı kuralları, hakkında fikir sahibi olmaya
      değer biçimsel kararları (başta virgül vs sonda virgül, nehir vs girinti),
      otomatik biçimlendiricileri, büyük projelerden stil rehberlerini ve PR'ları
      bir yıl sonra bile okunabilir tutan küçük kuralları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>SQL biçimlendirmesi neden çoğu kod biçimlendirmesinden daha önemlidir</h2>
    <p>
      SQL bildirimseldir ve genellikle iç içedir. Tek bir sorgu, tüm bir iş
      raporunun mantığı olabilir. Python veya JavaScript'in aksine, SQL
      iş akışlarında yıllarca linter'lar ve otomatik biçimlendiriciler yaygın
      değildi — ekipler çatışan alışkanlıklar edindi.
    </p>
    <p>
      Kötü biçimlendirilmiş SQL şunları gizler: yinelenen birleştirmeler, yanlış
      filtre yerleşimi (WHERE vs HAVING vs ON), gözden kaçan NULL işleme ve
      istenmeyen çapraz birleştirmeler. Biçimlendirme, sorgunun şeklini okunabilir
      kılarak bunları ortaya çıkarır.
    </p>

    <h2>Çoğu ekibin üzerinde anlaştığı temel kurallar</h2>
    <p>
      <strong>Anahtar kelimeler büyük harf.</strong> SELECT, FROM, WHERE, JOIN,
      GROUP BY, ORDER BY — hepsi büyük harf. Tablo ve sütun adları küçük harf
      kalır (veya veritabanınızın büyük/küçük harf kuralını izler).
    </p>
    <p>
      <strong>SELECT listelerinde her sütun için bir satır.</strong> Farklarda
      tek tek sütunları eklemek, kaldırmak ve yorumlamak daha kolaydır.
    </p>
    <p>
      <strong>Her birleştirme için bir satır.</strong> Her JOIN cümlesi kendi
      satırında, ON koşulu satır içinde veya girintili olarak.
    </p>
    <p>
      <strong>Mantıksal girinti.</strong> Alt sorgular ve CTE'ler üst
      öğelerinden girintili; ilgili cümleler hizalanmış.
    </p>
    <p>
      <strong>Sonda virgül.</strong> (Veya başta — görüşler farklıdır; aşağıya
      bakın.) Kod tabanınızda tutarlı olun.
    </p>

    <h2>Başta virgül vs sonda virgül — birini seçin</h2>
    <p>
      <strong>Sonda virgül stili</strong> (daha yaygın):
    </p>
    <p>
      <code>SELECT id, name, email, created_at FROM users</code>
      her sütun yeni bir satırda ve virgül sonda.
    </p>
    <p>
      <strong>Başta virgül stili</strong> (hataları yakalar, kutuplaştırıcı):
    </p>
    <p>
      <code>SELECT id , name , email , created_at FROM users</code>
      her sütun yeni bir satırda ve virgül başta.
    </p>
    <p>
      <strong>Başta virgül lehine argüman:</strong> son satır
      virgülle bitmez, bu nedenle son sütunu yorumlarken virgülü
      kaldırmayı unutmazsınız. Ayrıca, görsel hizalama hangi sütunların
      seçildiğini görmeyi kolaylaştırır.
    </p>
    <p>
      <strong>Aleyhine argüman:</strong> diğer dillere kıyasla garip
      görünür. Modern SQL biçimlendiricileri, sonda virgül yorumlamayı
      otomatik olarak halleder.
    </p>
    <p>
      Birini seçin, stil rehberinize yazın, bir biçimlendirici ile
      uygulayın.
    </p>

    <h2>&ldquo;Nehir&rdquo; stili</h2>
    <p>
      Klasik SQL biçimlendirmesi, her ana cümle anahtar kelimesini kendi
      satırına, sol kenarda görsel bir &ldquo;nehir&rdquo;
      boşluk oluşturmak için sağa hizalar:
    </p>
    <p>
      <code>   SELECT id, name FROM users WHERE active = true
      ORDER BY created_at DESC</code>
    </p>
    <p>
      (SELECT, FROM, WHERE, ORDER BY bir sütunda sağa hizalanmış olarak.)
    </p>
    <p>
      <strong>Artıları:</strong> çok taranabilir; cümleler göze çarpar.
    </p>
    <p>
      <strong>Eksileri:</strong> manuel olarak koruması zahmetli; modern
      biçimlendiriciler tarafından iyi desteklenmez.
    </p>
    <p>
      2026'da çoğu ekip girinti tabanlı stili (anahtar kelimeler
      sola hizalanmış, argümanlar altlarında girintili) kullanır çünkü
      temiz bir şekilde otomatik biçimlendirilir.
    </p>

    <h2>JOIN biçimlendirmesi</h2>
    <p>
      Her JOIN kendi satırında. ON koşulu ya:
    </p>
    <p>
      <strong>Satır içi</strong> kısa olduğunda: <code>JOIN orders ON
      orders.user_id = users.id</code>
    </p>
    <p>
      <strong>Girinti ile altında</strong> uzun veya çoklu
      koşul olduğunda:
    </p>
    <p>
      <code>JOIN orders ON orders.user_id = users.id AND
      orders.status = &apos;active&apos; AND orders.created_at &gt;=
      &apos;2026-01-01&apos;</code>
    </p>
    <p>
      Her zaman açık JOIN sözdizimi kullanın (INNER JOIN, LEFT JOIN) —
      asla WHERE koşullarıyla virgül birleştirmeleri yapmayın. Eski sözdizimi
      filtreleri ve birleştirme koşullarını karıştırarak hataları gizler.
    </p>

    <h2>CTE'ler (WITH cümleleri) — okunabilirlik süper gücü</h2>
    <p>
      Karmaşık sorguları adlandırılmış CTE'lere bölün. Her CTE, etiketli,
      yeniden kullanılabilir bir alt sorgudur. Sorgu planlayıcısı buna
      ihtiyaç duymasa bile, insanlar duyar.
    </p>
    <p>
      <code>WITH active_users AS (SELECT id FROM users WHERE active),
      recent_orders AS (SELECT user_id, SUM(total) FROM orders
      WHERE created_at &gt; CURRENT_DATE - 30) SELECT au.id,
      ro.total FROM active_users au LEFT JOIN recent_orders ro ON
      au.id = ro.user_id</code>
    </p>
    <p>
      Girinti kuralı: her CTE gövdesi, CTE adından iki boşluk girintili;
      CTE'ler boş bir satırla ayrılmış (veya en azından kapanış parantezi +
      virgül kendi satırında).
    </p>
    <p>
      <strong>Kural:</strong> bir alt sorgu iki kez başvuruluyorsa veya
      5-6 satırdan uzunsa, onu bir CTE'ye yükseltin. 3-5 adlandırılmış
      CTE'ye sahip sorgular bir paragraf gibi okunur; satır içi iç içe
      alt sorgular bir regex gibi okunur.
    </p>

    <h2>WHERE cümlesi biçimlendirmesi</h2>
    <p>
      Kısa WHERE: tek satır. <code>WHERE active = true</code>.
    </p>
    <p>
      Çok koşullu WHERE: her koşul kendi satırında, AND
      veya OR başta. Tek tek koşulları yorumlamayı kolaylaştırır.
    </p>
    <p>
      <code>WHERE active = true AND created_at &gt; &apos;2026-01-01&apos;
      AND role IN (&apos;admin&apos;, &apos;member&apos;)</code>
    </p>
    <p>
      <strong>OR mantığı için parantezler:</strong> önceliği açık hale
      getirmek için karışık AND/OR'u her zaman parantezleyin. <code>WHERE (a = 1 OR b =
      2) AND c = 3</code>, <code>WHERE a = 1 OR b = 2 AND c = 3</code>
      değil (bu <code>a = 1 OR (b = 2 AND c = 3)</code> anlamına gelir — sürpriz).
    </p>

    <h2>Adlandırma — biçimlendirmenin yazılı olmayan kısmı</h2>
    <p>
      <strong>Tanımlayıcılar için snake_case.</strong> user_id, userId
      değil. SQL, tırnak işareti olmayan tanımlayıcılar için büyük/küçük harfe
      duyarsızdır; motorlar arasında tutarlılık için snake_case'e bağlı kalın.
    </p>
    <p>
      <strong>Tekil veya çoğul tablolar?</strong> Birini seçin. &ldquo;
      users&rdquo; veya &ldquo;user&rdquo; — ikisi de işe yarar, ancak
      karıştırmayın. Çoğu ekip çoğul kullanır (&ldquo;users&rdquo;, &ldquo;orders
      &rdquo;) çünkü koleksiyonlardır.
    </p>
    <p>
      <strong>Takma adlar kısa ve anlamlıdır.</strong> <code>FROM
      users u JOIN orders o ON o.user_id = u.id</code>. Bağlamın
      kaybolduğu uzun sorgularda tek harfli takma adlardan kaçının.
    </p>
    <p>
      <strong>Birden fazla tablo söz konusu olduğunda sütunları
      niteleyin.</strong> <code>u.email</code>, çıplak <code>email</code>
      değil. Tablolar yeniden adlandırıldığında veya sütunlar
      eklendiğinde sorguların hayatta kalmasını sağlar.
    </p>

    <h2>Otomatik biçimlendiriciler</h2>
    <p>
      Elle biçimlendirmeyin. Bir araç seçin:
    </p>
    <p>
      <strong>sql-formatter (npm):</strong> açık kaynak, lehçe bilincinde
      (Postgres, MySQL, Snowflake, BigQuery, vb.). Yapılandırılabilir
      satır genişliği, anahtar kelime büyük/küçük harfi, virgül konumu. Yaygın
      olarak kullanılır.
    </p>
    <p>
      <strong>SQLFluff:</strong> Python tabanlı, fikir sahibi,
      üretim kalitesinde. Lehçe bilincinde, yapılandırılabilir kurallar. dbt
      ile entegre olur. Veri mühendisliği ortamlarında standarttır.
    </p>
    <p>
      <strong>DataGrip / SQL Developer / pgAdmin:</strong> IDE düzeyinde
      biçimlendiriciler, değişen kalite.
    </p>
    <p>
      <strong>Prettier SQL eklentisi:</strong> ekibiniz diğer diller için
      Prettier kullanıyorsa, tutarlılık için SQL eklentisini ekleyin.
    </p>
    <p>
      <strong>dbt kullanıcıları:</strong> dbt'ye özgü kurallarla SQLFluff
      standarttır. Bir ön-commit kancası olarak çalışır.
    </p>

    <h2>Okumaya değer stil rehberleri</h2>
    <p>
      <strong>GitLab veri ekibi stil rehberi:</strong> iyi bilinir,
      ayrıntılı, fikir sahibi. CTE-ilk, başta virgül, küçük harf
      anahtar kelimeler (evet, trende karşı çıkarlar).
    </p>
    <p>
      <strong>Mozilla SQL stil rehberi:</strong> kısa, pratik.
    </p>
    <p>
      <strong>Matt Mazur'un SQL stil rehberi:</strong> analitik
      mühendislik perspektifinden yazılmış; okunabilir.
    </p>
    <p>
      <strong>dbt Labs blogu:</strong> modern veri yığınında SQL stili
      üzerine devam eden tartışma.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Büyük ve küçük harf anahtar kelimeleri tutarsız
      bir şekilde karıştırmak.</strong> Birini seçin. Çoğu ekip: anahtar
      kelimeler için BÜYÜK HARF.
    </p>
    <p>
      <strong>SELECT *.</strong> Anlık sorgularda sorun yok, üretimde
      kötü. Açık sütun listeleri şema değişikliklerine dayanır
      ve amacı gösterir.
    </p>
    <p>
      <strong>CTE'ler yerine iç içe alt sorgular.</strong> Okuması
      zor, test etmesi zor. CTE'lere ayırın; sorgu planlayıcı genellikle
      onları eşdeğer olarak ele alır.
    </p>
    <p>
      <strong>Açık JOIN türü yok.</strong> <code>JOIN</code>
      çoğu motorda varsayılan olarak INNER JOIN'dir, ancak açık olmak
      onu bariz kılar.
    </p>
    <p>
      <strong>Yalnızca son sorguyu biçimlendirmek.</strong> Bir geçişte,
      bir dbt modelinde veya bir rapor yapılandırmasında SQL gönderiyorsanız,
      tekrar tekrar okunur. Bir kez biçimlendirin, ekibin saatlerini sonra
      kurtarın.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      SQL yapıştırın ve{" "}
      <a href="/tools/sql-formatter">SQL biçimlendirici</a> ile temiz
      biçimlendirilmiş bir sürüm alın. Sorgunuz temizlenmesi gereken JSON
      döndürdüğünde{" "}
      <a href="/tools/json-formatter">JSON biçimlendirici</a> ile ve
      tanımlayıcı büyük/küçük harflerini toplu olarak normalleştirmek için{" "}
      <a href="/tools/case-converter">büyük/küçük harf dönüştürücü</a> ile
      eşleştirin.
    </p>
  </>
);