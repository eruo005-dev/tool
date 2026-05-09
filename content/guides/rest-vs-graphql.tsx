export const intro = (
  <>
    <p>
      REST vs GraphQL, backend mülakatlarında en çok sorulan sorulardan biridir — ve en
      çok yanlış anlaşılanlardan. Doğru cevap sıkıcıdır: ikisi de çalışır, probleminize
      uygun olanı seçin. Bu rehber, gerçekte ne olduklarını ve hangisinin ne zaman
      kazandığını açıklar.
    </p>
    <p>
      Aşağıdaki ödünleşimleri anlarsanız, bu konudaki mülakat sorularını yanıtlayabilir
      ve gerçek bir projede doğru kararı verebilirsiniz.
    </p>
  </>
);

export const body = (
  <>
    <h2>1. REST tek paragrafta</h2>
    <p>
      Kaynaklar URL'lere eşlenir. HTTP fiilleri (GET, POST, PUT, DELETE) eylemi tanımlar.
      Her uç nokta sabit bir şekil döndürür. Basit, önbelleğe alınabilir, her yerde bulunur.
      2026'da çoğu API için varsayılan seçim.
    </p>

    <h2>2. GraphQL tek paragrafta</h2>
    <p>
      Tek bir uç nokta. İstemciler tam olarak hangi alanları istediklerini belirten bir sorgu
      gönderir. Sunucu sorguyu çözer ve yalnızca bu alanları döndürür. Aşırı getirme ve
      eksik getirme sorunlarını çözer — istemciler ihtiyaç duyduklarını alır, fazlasını değil.
    </p>

    <h2>3. Aşırı getirme, temel sorun</h2>
    <p>
      REST ile <code>/users/42</code> yalnızca e-postayı isteseniz bile tüm kullanıcı
      nesnesini döndürür. GraphQL ile yalnızca e-postayı istersiniz, yalnızca e-postayı
      alırsınız. Mobil/bant genişliğine duyarlı uygulamalarda bu önemlidir.
    </p>

    <h2>4. Eksik getirme, diğer temel sorun</h2>
    <p>
      Bir kullanıcının gönderilerini ve yorumlarını göstermek için REST genellikle 3
      istek gerektirir. GraphQL bunu 1'de yapar. Daha az gidiş-dönüş = daha hızlı. Çok
      fazla ilişkili veriye sahip karmaşık arayüzler için büyük kazanç.
    </p>

    <h2>5. REST'in kazandığı yerler</h2>
    <p>
      Basit CRUD API'leri. Tüketicilerin değişkenlik gösterdiği genel API'ler (önbelleğe
      alınabilirlik önemlidir). Küçük yüzey alanına sahip mikro hizmetler. GraphQL deneyimi
      olmayan ekipler. Esnekliğe ihtiyacınız olmadığında karmaşıklık maliyetini ödemezsiniz.
    </p>

    <h2>6. GraphQL'in kazandığı yerler</h2>
    <p>
      Birçok kaynaktan veri çeken karmaşık ön yüzler. Bant genişliğini en aza indiren mobil
      uygulamalar. Her biri farklı veri şekillerine ihtiyaç duyan birçok istemci türüne (web +
      mobil + saat) sahip uygulamalar. Farklı ihtiyaçları olan birçok ekibe hizmet veren API'ler.
    </p>

    <h2>7. GraphQL'de önbelleğe alma daha zordur</h2>
    <p>
      REST, HTTP önbelleğe almayı kullanır — CDN'ler sorunsuz çalışır. GraphQL sorguları
      POST olduğundan, standart HTTP önbelleğe alma geçerli değildir. İstemci tarafı
      önbelleğe alma (Apollo, Relay) ve dikkatli sunucu tarafı önbelleğe alma gerekir.
      Gerçek bir operasyonel maliyet.
    </p>

    <h2>8. Dosya yükleme ve ikili veri</h2>
    <p>
      REST bunları doğal olarak işler. GraphQL uzantılara (çok parçalı belirtim) ihtiyaç
      duyar. Küçük bir sürtüşme ama gerçek. API'niz dosya ağırlıklıysa, REST daha basittir.
    </p>

    <h2>9. Hız sınırlama ve kısıtlama</h2>
    <p>
      REST ile daha kolaydır — uç nokta başına istekleri sayın. GraphQL'de bir sorgu çok
      veya az getirebilir; karmaşıklık tabanlı kısıtlamaya (sorgu maliyet analizi) ihtiyacınız
      vardır. İmkansız değil, sadece daha fazla iş.
    </p>

    <h2>10. Öğrenme eğrisi</h2>
    <p>
      REST temelde ücretsizdir — sadece HTTP'dir. GraphQL şemalar, çözümleyiciler,
      istemciler, araçlar ekler. Yeni ekip üyeleri için daha dik bir öğrenme eğrisi. Benimserseniz
      eğitim süresi ayırın.
    </p>

    <h2>11. Hibrit yaklaşım</h2>
    <p>
      Birçok şirket genel API'ler için REST ve dahili ön yüzler için GraphQL kullanır. Veya
      hizmetler arasında gRPC + harici olarak REST. Tüm sistem için birini seçmek zorunda
      değilsiniz.
    </p>

    <h2>12. Mülakat cevabı</h2>
    <p>
      &ldquo;REST varsayılandır — daha basit, önbelleğe alınabilir, evrensel olarak
      desteklenir. GraphQL, karmaşık iç içe verileriniz ve birden çok istemci türünüz
      olduğunda kazanır. Aşırı getirme acısı gerçek olmadıkça REST ile başlardım.&rdquo;
      Temel bilgiler için{" "}
      <a href="/guides/what-is-an-api">API nedir</a> ve daha fazlası için{" "}
      <a href="/guides/how-to-prepare-for-coding-interviews">mülakat hazırlığı</a>
      bölümüne bakın.
    </p>
  </>
);