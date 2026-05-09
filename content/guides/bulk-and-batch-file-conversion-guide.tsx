/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Bir dosyayı dönüştürmek kolaydır. 500 dosyayı dönüştürmek, çoğu çevrimiçi
      dönüştürücünün pes ettiği yerdir — ücretsiz kademeler oturum başına 1-5 dosyayla sınırlıdır ve
      ücretli seçenekler dosya başına veya dakika başına ücret alır. Doğru cevap,
      tek seferlik mi yoksa tekrarlayan mı toplu işlem yaptığınıza ve
      dosyalarınızın hassas olup olmadığına bağlıdır.
    </p>
    <p>
      Bu kılavuz, pratik toplu dönüştürme oyun kitabıdır: hangi yaklaşımın ne zaman
      kullanılacağı, farklı dosya türlerinin tek seferde nasıl işleneceği ve
      çoğu iş akışı için ücretli hizmetleri geride bırakan ücretsiz araç
      kombinasyonları.
    </p>
  </>
);

export const toc = [
  { id: "approaches", label: "Toplu dönüştürmeye üç yaklaşım" },
  { id: "automation", label: "Tekrarlayan görevler için otomasyon" },
  { id: "mixed-types", label: "Birden çok dosya türünü aynı anda dönüştürme" },
  { id: "speed", label: "Toplu dönüştürme neden bazen yavaştır" },
  { id: "tools", label: "Ölçeğe göre araçlar" },
];

export const body = (
  <>
    <h2 id="approaches">Toplu dönüştürmeye üç yaklaşım</h2>
    <p>
      Hacim + hassasiyete göre seçim yapın:
    </p>
    <ol>
      <li>
        <strong>Tek seferlik, &lt; 50 dosya, hassas değil:</strong> CloudConvert (günde 10 dakika ücretsiz) veya
        FreeConvert (50MB sınırı) gibi ücretsiz bir çevrimiçi toplu hizmete yükleyin. Hassas içerik buraya ait değildir —
        dosyalar sunucularından geçer.
      </li>
      <li>
        <strong>Tek seferlik, herhangi bir boyut, hassas:</strong> uygun
        ücretsiz masaüstü aracını (belgeler için Pandoc, video için FFmpeg, görseller
        için ImageMagick, e-kitaplar için Calibre) kurun ve tek satırlık bir toplu komut çalıştırın. 5
        dakikalık kurulum, sınırsız dosya, tamamen yerel.
      </li>
      <li>
        <strong>Tekrarlayan toplu işlem (her hafta / her sürümde):</strong> bir
        komut dosyasıyla otomatikleştirin. macOS Automator / Shortcuts, Windows Power Automate veya
        ücretsiz CLI araçlarını saran bir bash/PowerShell betiği. Bir kez kurun,
        sonsuza kadar çalışır.
      </li>
    </ol>

    <h2 id="automation">Tekrarlayan görevler için toplu dönüştürme otomasyonu</h2>
    <p>
      Yılda 50 saat kazandıran 5 dakikalık otomasyonlar:
    </p>

    <h3>macOS — Automator iş akışı</h3>
    <pre><code>{`1. Automator'ı açın → Yeni → Hızlı Eylem
2. "Belirtilen Bulucu Öğelerini Al" veya "Klasör Eylemi"ni sürükleyin
3. Dönüştürme eylemini sürükleyin (ör. "Görüntü Türünü Değiştir")
4. Hızlı Eylem olarak kaydedin — sağ tık menüsünde görünür

Veya aşağıdakilerden biriyle bir Kabuk Betiği adımı kullanın:
  - sips -s format png input.jpg --out output.png
  - magick mogrify -format png *.jpg
  - pandoc -o output.docx input.md`}</code></pre>

    <h3>Windows — PowerShell döngüsü</h3>
    <pre><code>{`# Klasördeki tüm .docx dosyalarını LibreOffice başsız mod ile .pdf'ye dönüştürün
Get-ChildItem -Filter "*.docx" | ForEach-Object {
  & "C:\\Program Files\\LibreOffice\\program\\soffice.exe" \\
    --headless --convert-to pdf $_.FullName
}

# ImageMagick kullanarak tüm görselleri webp'ye dönüştürün
Get-ChildItem -Filter "*.jpg" | ForEach-Object {
  magick $_.FullName "$($_.BaseName).webp"
}`}</code></pre>

    <h3>Platformlar arası — Pandoc + bash</h3>
    <pre><code>{`# Klasördeki tüm markdown dosyalarını HTML'ye dönüştürün
for f in *.md; do
  pandoc "$f" -o "\${f%.md}.html"
done

# Tüm CSV dosyalarını JSON'a dönüştürün (jq kullanarak)
for f in *.csv; do
  ... (csvjson araçları veya tek seferlikler için çevrimiçi dönüştürücümüz)
done`}</code></pre>

    <h2 id="mixed-types">Birden çok dosya türünü aynı anda dönüştürme</h2>
    <p>
      Dürüst cevap: çoğu toplu araç aynı anda bir dosya türünü işler. Karışık
      PDF'ler, DOCX'ler ve görsellerle dolu bir klasör tek bir komutla
      dönüştürülmez. İki pratik geçici çözüm:
    </p>
    <ol>
      <li>
        <strong>Gruplandırın, ardından işleyin.</strong> Dosyaları türe göre klasörlere taşıyın
        (PDF'ler birinde, görseller diğerinde), her birinde doğru toplu komutu çalıştırın.
        2 dakikalık dosya yönetimi, tek bir mega betik yazmaya çalışmaktan daha iyidir.
      </li>
      <li>
        <strong>Evrensel dönüştürücüler.</strong> Pandoc 30'dan fazla belge
        biçimini işler; LibreOffice başsız mod tüm Office biçimlerini işler ve
        makul doğrulukla gidiş-dönüş yapar. ImageMagick ~200 görsel
        biçimini kapsar. Bunların hiçbiri gerçekten evrensel değildir ancak birlikte
        dönüştürme ihtiyaçlarının ~%99'unu karşılarlar.
      </li>
    </ol>
    <p>
      SaaS çözümleri için: CloudConvert karışık toplu işlemleri işler ancak
      dönüştürme başına veya ücretsiz kademede dakika başına ücret alır. FreeConvert benzerdir. Her ikisi de
      dosyaları kendi sunucularına yükler — hassas içerik için uygun değildir.
    </p>

    <h2 id="speed">Toplu dönüştürme neden bazen yavaştır</h2>
    <p>
      Dönüştürme hızı şunlara bağlıdır:
    </p>
    <ul>
      <li>
        <strong>Dosya boyutu.</strong> Dosyayı iki katına çıkarmak, süreyi iki katına çıkarır —
        çoğu biçim için kabaca doğrusaldır. Video bir istisnadır (sıkıştırma
        algoritmaları kalite ayarlarıyla birlikte süper doğrusaldır).
      </li>
      <li>
        <strong>Kaynak biçim karmaşıklığı.</strong> Düz metin → HTML: anında.
        Tablolu çok sütunlu PDF → DOCX: düzen yeniden akışı zor olduğu için
        kat kat daha yavaştır.
      </li>
      <li>
        <strong>Kalite ayarları.</strong> Daha yüksek çıktı kalitesi = daha fazla
        hesaplama. Varsayılan seçenekler genellikle orta yoldur; bir toplu işlemde
        &ldquo;maksimum kalite&rdquo; için özelleştirme, çalışma süresini 10 katına çıkarabilir.
      </li>
      <li>
        <strong>Disk vs bellek.</strong> Diskten 500 küçük dosya okumak, dönen
        sürücülerde yavaş, SSD'lerde hızlıdır. Toplu araçlar genellikle
        bellek içinde işlem yapar ki bu çok daha hızlıdır.
      </li>
      <li>
        <strong>Özellikle OCR:</strong> en yavaşı. Tarayıcı tarafı OCR için PDF sayfası başına 5-15
        saniye; bulut GPU'ları bunu 1-2 saniyede yapar. Buna göre
        plan yapın.
      </li>
    </ul>

    <h2 id="tools">Toplu işlem ölçeğine göre araçlar</h2>
    <table>
      <thead>
        <tr>
          <th>Ölçek</th>
          <th>Tür</th>
          <th>Önerilen araç</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1-5 dosya</td><td>Herhangi</td><td>Bu sitedeki tarayıcı tabanlı dönüştürücüler (birer birer)</td></tr>
        <tr><td>5-50 dosya, hassas değil</td><td>Karışık</td><td>CloudConvert / FreeConvert (ücretsiz kademeler)</td></tr>
        <tr><td>50+ dosya, belgeler</td><td>Belgeler</td><td>Pandoc CLI veya LibreOffice başsız mod</td></tr>
        <tr><td>50+ dosya, görseller</td><td>Görseller</td><td>ImageMagick CLI veya macOS Hızlı Eylemler</td></tr>
        <tr><td>50+ dosya, video</td><td>Video</td><td>FFmpeg CLI</td></tr>
        <tr><td>Haftalık+ tekrarlayan</td><td>Herhangi</td><td>Automator (Mac) / PowerShell (Win) / cron + bash</td></tr>
        <tr><td>Kurumsal ölçek</td><td>Karışık</td><td>CloudConvert API veya Lambda'da kendi barındırılan</td></tr>
      </tbody>
    </table>
  </>
);

export const cta = {
  label: "XML'den CSV'ye dönüştürücümüzü deneyin (yalnızca tarayıcı)",
  targetSlug: "xml-to-csv",
};

export const faq = [
  {
    q: "Yüzlerce dosyayı aynı anda nasıl dönüştürebilirim?",
    a: "Hassas olmayan içerik için: CloudConvert / FreeConvert ücretsiz kademeleri 5-50 dosyayı işler. Hassas içerik veya 50+ dosya için: Pandoc (belgeler), ImageMagick (görseller) veya FFmpeg (video) kurun ve terminalde tek satırlık bir toplu komut çalıştırın. Haftalık tekrarlayan: macOS Automator, PowerShell veya bash + cron ile otomatikleştirin.",
  },
  {
    q: "Birden çok dosya türünü aynı anda dönüştürebilir miyim?",
    a: "Çoğu toplu araç aynı anda bir türü işler. Geçici çözüm: dosyaları türe göre klasörlere gruplayın, klasör başına uygun toplu komutu çalıştırın. CloudConvert karışık toplu işlemleri işler ancak dosyaları kendi sunucularına yükler — hassas içerik için uygun değildir. Pandoc + LibreOffice + ImageMagick birlikte ihtiyaçların ~%99'unu karşılar.",
  },
  {
    q: "Toplu dönüştürme neden bazen yavaştır?",
    a: "Beş faktör: dosya boyutu (doğrusal), kaynak biçim karmaşıklığı (çok sütunlu PDF'ler yavaştır), kalite ayarları (maksimum kalite çalışma süresini 10 katına çıkarır), disk hızı (SSD'ler vs HDD'ler) ve işlem türü — OCR, tarayıcı tarafında PDF sayfası başına 5-15 saniye ile en yavaş olanıdır.",
  },
  {
    q: "Tekrarlayan görevler için toplu dönüştürmeyi nasıl otomatikleştiririm?",
    a: "macOS Automator / Shortcuts sürükle-bırak iş akışları oluşturur. Windows PowerShell döngüleri betiklemeyi işler. Güç kullanıcıları için platformlar arası bash + Pandoc / FFmpeg / ImageMagick CLI'ları. 5 dakikalık kurulum, sonsuza kadar çalışır — tekrarlayan manuel dönüştürmeye göre önemli ölçüde zaman kazandırır.",
  },
];