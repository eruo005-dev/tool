import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Metin farkları, geliştiricilerin, yazarların, hukuk ekiplerinin ve incelemecilerin gerçekte neyin değiştiğini görmesini sağlar. &ldquo;Belgeyi güncelledim&rdquo; demek hiçbir şey ifade etmez. Bir fark size hangi kelimelerin taşındığını, hangi maddelerin eklendiğini, hangi sayıların değiştiğini tam olarak söyler. Fark okuyabilen biriyle okuyamayan biri arasındaki fark, kod incelemesi, sözleşme incelemesi ve belge incelemesinde haftada saatlerce tasarruf edilmesidir. Bu kılavuz, fark algoritmalarının nasıl çalıştığını (satır tabanlı, kelime tabanlı, karakter tabanlı), karşılaşacağınız fark formatlarını (birleşik, bağlam, yan yana), kod, düz metin ve sözleşmeler için pratik fark oluşturma yöntemlerini ve basit satır düzeyi karşılaştırmanın ötesine geçen araçları kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir farkın gerçekte hesapladığı şey</h2>
    <p>
      Bir fark algoritması, bir metni diğerine dönüştüren en küçük düzenleme kümesini bulur. &ldquo;En küçük&rdquo; anahtar kelimedir — her zaman birçok geçerli düzenleme dizisi vardır, ancak en kısa olanı en okunabilir olanıdır.
    </p>
    <p>
      <strong>Myers fark algoritması:</strong> 1986'dan beri standarttır. Git, çoğu IDE ve çoğu çevrimiçi araç tarafından kullanılır. En uzun ortak alt diziyi (LCS) hesaplar, ardından etrafına ekleme ve silme işlemlerini işaretler.
    </p>
    <p>
      <strong>Patience farkı:</strong> Bazaar ve git tarafından kullanılan bir alternatiftir (<code>--patience</code> ile). Kod gibi yapılandırılmış metinler için daha iyidir — fonksiyon imzalarını ve parantezleri daha sezgisel bir şekilde hizalar.
    </p>
    <p>
      <strong>Histogram farkı:</strong> Git'in 2.12'den beri varsayılanıdır. Genellikle gerçek kod için en net sonucu veren bir patience varyantıdır. Global olarak etkinleştirin: <code>git config --global diff.algorithm histogram</code>.
    </p>

    <h2>Granülerlik — satır, kelime veya karakter</h2>
    <p>
      <strong>Satır tabanlı:</strong> Git ve çoğu araçta varsayılandır. Hızlı, okunabilir, ancak yeniden biçimlendirdiğinizde gürültülüdür. Tek bir sarma değişikliği, tüm bir paragrafın değişmiş görünmesine neden olur.
    </p>
    <p>
      <strong>Kelime tabanlı:</strong> Bir satır içinde hangi kelimelerin değiştiğini vurgular. Git'in <code>--word-diff</code> seçeneği bunu etkinleştirir. Düz metin ve sözleşmeler için çok daha nettir.
    </p>
    <p>
      <strong>Karakter tabanlı:</strong> Tam olarak hangi karakterlerin değiştiğini vurgular. Çoğu okuma için aşırıya kaçar; yazım hatalarını veya yazdırılamayan karakter değişikliklerini (akıllı tırnaklar, bölünemez boşluklar) yakalamak için kullanışlıdır.
    </p>

    <h2>Yaygın fark formatları</h2>
    <p>
      <strong>Birleşik fark</strong> (<code>git diff</code> varsayılanı):
    </p>
    <pre>
{`@@ -10,5 +10,7 @@
 değişmeyen satır
-silinecek satır
+eklenecek satır 1
+eklenecek satır 2
 değişmeyen satır`}
    </pre>
    <p>
      <code>@@ -10,5 +10,7 @@</code> şu anlama gelir: &ldquo;Eski dosyada 10. satırdan başlayan 5 satır, yeni dosyada 10. satırdan başlayan 7 satıra karşılık gelir.&rdquo;
    </p>
    <p>
      <strong>Bağlam farkı</strong> (daha eski, daha az yaygın): Değişiklikler için <code>!</code> işaretçileriyle 3 satır bağlam gösterir.
    </p>
    <p>
      <strong>Yan yana fark:</strong> Araçlar, birleşik farkları görsel olarak solda eski, sağda yeni olacak şekilde işler. Uzun bloklar için daha iyidir; çok sayıda küçük değişiklik için daha kötüdür.
    </p>
    <p>
      <strong>Üç yönlü birleştirme farkı:</strong> Çakışmaları çözerken temel, yerel ve uzak sürümleri gösterir. Git'in <code>conflictstyle=diff3</code> seçeneği bunu etkinleştirir — varsayılana göre büyük bir kalite iyileştirmesidir.
    </p>

    <h2>Kod farkı oluşturma — standart iş akışı</h2>
    <p>
      <strong>git diff:</strong> Hazırlanmamış değişiklikler vs. indeks.
      <br />
      <strong>git diff --staged:</strong> Hazırlanmış vs. son commit.
      <br />
      <strong>git diff main..feature:</strong> Dal karşılaştırması.
      <br />
      <strong>git diff commit1 commit2:</strong> Rastgele commit'ler arasında.
    </p>
    <p>
      <strong>Boşlukları yoksay:</strong>{" "}
      <code>git diff -w</code> yalnızca boşluk olan değişiklikleri kaldırır — bir biçimlendirici çalıştırdıktan sonra inceleme yaparken kritiktir.
    </p>
    <p>
      <strong>Düz metin için kelime düzeyi:</strong>{" "}
      <code>git diff --word-diff</code>.
    </p>
    <p>
      <strong>İstatistik özeti:</strong>{" "}
      <code>git diff --stat</code> satır sayılarıyla dosyaları gösterir.
    </p>
    <p>
      <strong>Pickaxe:</strong>{" "}
      <code>git log -S&ldquo;arama terimi&rdquo;</code> bu dizenin eklendiği veya kaldırıldığı commit'leri bulur.
    </p>

    <h2>Düz metin ve belgelerde fark oluşturma</h2>
    <p>
      Kod fark araçları kodu iyi işler; düz metin farkları farklı bir özen gerektirir.
    </p>
    <p>
      <strong>Yeniden biçimlendirme gürültüsü:</strong> 80 karakterde sert satır sarma, tek bir kelime değiştiğinde farkları okunamaz hale getirir. Düz metin, farkları temiz tutmak için yumuşak sarma (satır başına bir cümle veya hiç sarma) kullanmalıdır.
    </p>
    <p>
      <strong>İzlenen değişiklikler</strong> (Word, Google Dokümanlar): Teknik olmayan kullanıcılar için yerel fark kullanıcı deneyimi. İşbirlikçi düzenleme için iyidir ancak git ile geri alınamaz.
    </p>
    <p>
      <strong>Markdown farkları:</strong> Biçimlendirme için markdown'ı düz metin olarak ele alın, ancak yapısal değişiklikleri (başlıklar, listeler) görsel olarak doğrulayın — fark araçları markdown'ı anlamsal olarak anlamaz.
    </p>

    <h2>Sözleşmeler ve yasal belgelerde fark oluşturma</h2>
    <p>
      <strong>Redline araçları</strong> (Microsoft Word'ün &ldquo;Karşılaştır&rdquo;, Litera, iManage) silmeler için üstü çizili ve eklemeler için altı çizili yasal tarzda bir redline üretir. Yasal inceleme için standarttır.
    </p>
    <p>
      <strong>Sözleşmeler için kelime düzeyi kritiktir.</strong> Tek bir değişen kelime sorumluluğu kaydırabilir.
    </p>
    <p>
      <strong>Biçimlendirme farkları daha az önemlidir;</strong> içerik farkları daha önemlidir. Yalnızca stil değişikliklerini yok saymanıza izin veren araçları kullanın.
    </p>
    <p>
      <strong>Her redline'ı imzalayın.</strong> En iyi uygulama: inceleme için hem temiz hem de redline'lı sürümleri dağıtın. Asla redline olmadan imzalamayın.
    </p>

    <h2>Yaygın fark araçları</h2>
    <p>
      <strong>git diff / git difftool:</strong> Kod için varsayılandır. Difftool'u Beyond Compare, Meld veya Delta ile yapılandırın.
    </p>
    <p>
      <strong>Delta:</strong> Sözdizimi vurgulamalı okunabilir git diff alternatifi. <code>git config pager.diff delta</code> ile kurun ve yapılandırın.
    </p>
    <p>
      <strong>VS Code fark görüntüleyicisi:</strong> Sözdizimi vurgulamalı yan yana görünüm. Dal karşılaştırmasından veya Git sekmesinden açılır.
    </p>
    <p>
      <strong>Beyond Compare, Meld, Kaleidoscope:</strong> Özel fark uygulamaları. Gündelik kullanım için ağır; karmaşık birleştirmeler için güçlüdür.
    </p>
    <p>
      <strong>Çevrimiçi fark denetleyicileri:</strong> Hızlı, tek kullanımlık metin karşılaştırması için — hassas içerik yüklemeyin. Özel olan her şey için yerel araçları kullanın.
    </p>
    <p>
      <strong>diff komutu (Unix):</strong>{" "}
      <code>diff dosya1 dosya2</code>. Eski, minimal. Birleşik için <code>-u</code>, özyinelemeli dizin farkı için <code>-r</code> kullanın.
    </p>

    <h2>Yama dosyaları</h2>
    <p>
      Bir dosyaya kaydedilen fark bir yamadır. <code>git apply yama.diff</code> veya <code>patch &lt; yama.diff</code> ile uygulayın.
    </p>
    <p>
      <strong>Kullanım durumları:</strong> Push/pull olmadan değişiklik paylaşma, salt okunur depolara katkıları inceleme, çatallanmış koda yukarı akış düzeltmeleri uygulama.
    </p>
    <p>
      <strong>Yama hijyeni:</strong> Hedef dosya kaydığında yamalar başarısız olur. Küçük, tek amaçlı yamalar temiz uygulanır; büyük yamalar bozulur.
    </p>

    <h2>Farkları verimli okuma</h2>
    <p>
      <strong>Önce silmeleri okuyun:</strong> Ne kaldırıldığını okuyun. Ne gittiğini anlamak, yeni olan için bağlam sağlar.
    </p>
    <p>
      <strong>Bağlam satırları:</strong> Varsayılan 3 satır yetersiz olduğunda bağlamı genişletin (<code>-U10</code>). Çok fazla bağlam değişiklikleri gizler; çok az bağlam nedenleri gizler.
    </p>
    <p>
      <strong>Gürültülü farkları bölün:</strong> Tek bir commit'te yeniden biçimlendirme + içerik değişiklikleri okunamaz. Bir commit'te yeniden biçimlendirin, sonrakinde içeriği değiştirin. Bu isteğe bağlı değildir.
    </p>
    <p>
      <strong>Boşluk karakterlerini kontrol edin:</strong> Git, sondaki boşlukları kırmızı arka planla işaretler. Bölünemez boşluklar, sekme-boşluk farkları, Windows/Unix satır sonları farklarda gizemli değişiklikler olarak görünür.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Yeniden biçimlendirilmiş kodu satır satır incelemek.</strong>
      İmkansız. Önce biçimlendirin, yeniden commit yapın, tekrar inceleyin.
    </p>
    <p>
      <strong>Boşluk gürültüsünü yok saymak.</strong> CRLF vs LF, sondaki boşluklar, sekme boyutları — hepsi gerçek değişiklikleri gizler. <code>.gitattributes</code> ile satır sonlarını normalleştirin.
    </p>
    <p>
      <strong>İkili dosyaları yapıştırmak.</strong> Fark araçları, ikili formatların (resimler, PDF'ler, Word belgeleri) anlamlı farklarını gösteremez. Format belirli araçları kullanın.
    </p>
    <p>
      <strong>Kod incelemesi için karakter düzeyi farkları kullanmak.</strong>
      Çok gürültülü. Satır düzeyi ve kelime düzeyi genişletme ideal noktadır.
    </p>
    <p>
      <strong>Düz metin için kelime farklarını atlamak.</strong> Satır düzeyi, paragraf değişikliklerini okunamaz hale getirir.
    </p>
    <p>
      <strong>Farklı kodlamalardaki dosyaları karşılaştırmak.</strong>{" "}
      UTF-8 vs CP1252 her şeyin değişmiş görünmesine neden olur. Önce kodlamayı normalleştirin.
    </p>

    <h2>Rakamları çalıştırın</h2>
    <p>
      İki metin bloğunu anında <a href="/tools/diff-checker">fark denetleyicisi</a> ile karşılaştırın. Ne kadar eklendiğini veya kaldırıldığını görmek için <a href="/tools/word-counter">kelime sayacı</a> ile eşleştirin ve karşılaştırmadan önce hızlı metin dönüşümleri için <a href="/tools/text-reverser">metin ters çevirici</a> kullanın.
    </p>
  </>
);