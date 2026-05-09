import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Bir <a href="/learn/sitemap-xml">XML site haritası</a>, arama motorlarının taramasını istediğiniz URL'lerin makine tarafından okunabilir bir dizinidir ve büyük motorların 2005'ten beri üzerinde anlaştığı bir spesifikasyonla (<code>sitemaps.org</code>) sarılmıştır. Sihirli bir şekilde sıralamaları yükseltmez, ancak büyük veya derin sitelerde, özellikle ana sayfadan üç tıklamadan fazla uzakta olan veya az sayıda gelen bağlantısı olan sayfalar için keşfedilebilirliği anlamlı şekilde artırır. Formatın kendisi basittir, ancak boyut sınırları, tazelik sinyalleri ve gönderme iş akışının keskin kenarları vardır. Bu kılavuz, gerekli XML yapısını, <code> &lt;lastmod&gt;</code>, <code> &lt;changefreq&gt;</code> ve <code> &lt;priority&gt;</code> öğelerini (ve Google'ın 2026'da hangilerini hâlâ okuduğunu), 50 MB / 50.000 URL sınırlarını, daha büyük siteler için site haritası indekslerini, gzip'lemeyi ve Google Search Console ile Bing Webmaster Tools'a nasıl gönderip izleneceğini kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir site haritasının yaptığı ve yapmadığı şeyler</h2>
    <p>
      Bir site haritası, arama motorlarına "bunlar var olan URL'ler, işte ne zaman değiştiklerini" söyler. Tarayıcıların sayfaları daha hızlı bulmasına ve yeni güncellenmiş olanlara öncelik vermesine yardımcı olur.
    </p>
    <p>
      <strong>Dizine eklemeyi zorlamaz.</strong> Google yine de her URL'nin dahil edilmeye değer olup olmadığına karar verir. Dahili bağlantıların yerini almaz &mdash; yalnızca site haritası aracılığıyla ulaşılabilen bir sayfa, zayıf bir önem sinyalidir.
    </p>

    <h2>Geçerli minimum site haritası</h2>
    <pre>{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-04-22</lastmod>
  </url>
  <url>
    <loc>https://example.com/pricing</loc>
    <lastmod>2026-04-18</lastmod>
  </url>
</urlset>`}</pre>
    <p>
      XML bildirimi ve <code>xmlns</code> gereklidir. Her <code>&lt;url&gt;</code> bir <code>&lt;loc&gt;</code> gerektirir; diğer her şey isteğe bağlıdır. URL'ler mutlak olmalı, tek bir kurallı alan adı kullanmalı ve URL kodlamalı olmalıdır (ASCII olmayan karakterler yüzde kodlamalı UTF-8 olarak).
    </p>

    <h2>lastmod &mdash; Google'ın gerçekten kullandığı tek isteğe bağlı öğe</h2>
    <p>
      John Mueller ve Gary Illyes, Google'ın <code>&lt;lastmod&gt;</code> öğesini yeniden tarama sinyali olarak kullandığını, ancak yalnızca gerçek içerik değişiklik tarihiyle tutarlı olduğunda kullandığını defalarca doğruladı. Her yeniden oluşturmada <code>lastmod</code> değerini geçerli saate ayarlayan sistemlerin site haritasının lastmod değeri tamamen yok sayılır.
    </p>
    <p>
      W3C Datetime formatını kullanın: <code>2026-04-22</code> veya tam <code> 2026-04-22T14:30:00+00:00</code>. Yalnızca tarih olması yeterlidir. Değeri yalnızca sayfanın anlamlı içeriği değiştiğinde güncelleyin &mdash; her şablon düzeltmesinde değil.
    </p>

    <h2>changefreq ve priority &mdash; Google tarafından yok sayılır</h2>
    <p>
      Google, <code>&lt;changefreq&gt;</code> ve <code> &lt;priority&gt;</code> öğelerini yok saydığını kamuya açık bir şekilde belirtmiştir (2020, 2024'te yeniden onaylanmıştır). Bing bunları hâlâ zayıf ipuçları olarak kullanır. Özellikle Bing veya dahili araçlar için ihtiyacınız yoksa, bunları yeni site haritalarından çıkarın &mdash; gürültü ve dosya boyutu eklerler.
    </p>
    <p>
      Dahil edilirse: <code>changefreq</code> değerleri <code> always</code>, <code>hourly</code>, <code>daily</code>, <code> weekly</code>, <code>monthly</code>, <code> yearly</code>, <code>never</code> alır. <code> priority</code> 0.0 ile 1.0 arasında bir sayıdır, varsayılan 0.5'tir.
    </p>

    <h2>Boyut sınırları</h2>
    <p>
      Tek bir site haritası en fazla <strong>50.000 URL</strong> içerebilir ve sıkıştırılmamış olarak <strong>50 MB'tan</strong> büyük olamaz. Gzip sıkıştırılmış site haritalarına izin verilir (dosya uzantısı <code> .xml.gz</code>); 50 MB sınırı hâlâ sıkıştırılmamış boyut için geçerlidir.
    </p>
    <p>
      Sınırlardan birine ulaşırsanız site haritanız tamamen reddedilir, kesilmez. Sınıra çok yaklaşmadan birden fazla site haritasına bölün &mdash; 40.000 URL ve 40 MB makul eşiklerdir.
    </p>

    <h2>Daha büyük siteler için site haritası indeksi</h2>
    <p>
      50.000 URL'nin üzerindeki sitelerin bir site haritası indeksine ihtiyacı vardır: site haritalarının site haritası.
    </p>
    <pre>{`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-posts.xml.gz</loc>
    <lastmod>2026-04-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-products.xml.gz</loc>
    <lastmod>2026-04-21</lastmod>
  </sitemap>
</sitemapindex>`}</pre>
    <p>
      Bir indeksin kendisi en fazla 50.000 alt site haritasıyla sınırlıdır. İndeks dosyaları iç içe yerleştirilemez &mdash; yalnızca bir seviye derinliktedir.
    </p>
    <p>
      İçerik türüne (yazılar, ürünler, kategoriler) veya tarihe (ay/yıl başına bir site haritası) göre bölün. Tarihe göre bölmek, site haritası başına lastmod değerini anlamlı kılar &mdash; eski aylar nadiren değişir, bu nedenle Google hangi dosyaları atlayacağını hızla öğrenir.
    </p>

    <h2>Neler dahil edilmeli ve çıkarılmalı</h2>
    <p>
      Yalnızca 200 döndüren, dizine eklenebilir kurallı URL'leri ve Google'ın değerlendirmesini istediğiniz URL'leri dahil edin. Hariç tutun:
    </p>
    <p>
      301 veya 302 yönlendirmesi yapan URL'ler &mdash; bunun yerine hedefi listeleyin. 404/410 URL'leri. <code> &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;</code> ile işaretlenmiş URL'ler. Kurallı olmayan sürümler (eğer <code>?utm=</code> varyantları varsa, temiz URL'yi listeleyin). <a href="/learn/robots-txt">robots.txt</a> tarafından engellenen sayfalar.
    </p>
    <p>
      Search Console, site haritanızdaki her noindex veya kurallı olmayan <a href="/learn/canonical-url">URL</a> için bir uyarı kaydeder &mdash; temiz tutmak raporun kullanışlı kalmasına yardımcı olur.
    </p>

    <h2>Gönderme ve keşfetme</h2>
    <p>
      Arama motorlarına site haritanız hakkında bilgi vermenin üç yolu:
    </p>
    <p>
      <strong>robots.txt:</strong> <code> Sitemap: https://example.com/sitemap.xml</code> ekleyin. Her büyük motor tarafından otomatik olarak alınır.
    </p>
    <p>
      <strong>Google Search Console:</strong> Sol gezinme çubuğundaki Site Haritaları raporu. URL'yi yapıştırın, gönderin; GSC son okuma zamanını, URL sayısını, keşfedilen/dizine eklenen ayrımını ve herhangi bir ayrıştırma hatasını gösterecektir.
    </p>
    <p>
      <strong>Bing Webmaster Tools:</strong> benzer gönderme akışı. Ayrıca robots.txt bildirimini de onurlandırır.
    </p>
    <p>
      Eski ping uç noktası (<code>google.com/ping?sitemap=</code>) Haziran 2023'te kullanımdan kaldırılmıştır ve artık 404 döndürmektedir. Kullanmayın.
    </p>

    <h2>Görsel, video ve haber uzantıları</h2>
    <p>
      Temel site haritası spesifikasyonu yalnızca URL'leri işler. Üç XML uzantısı medya meta verileri ekler:
    </p>
    <p>
      <strong>Görsel site haritası uzantısı</strong> (<code>xmlns:image</code>): URL başına görselleri listeler. Görsel ağırlıklı siteler için kullanışlıdır &mdash; e-ticaret, fotoğrafçılık, tarifler. Google Görseller keşfi fayda sağlar.
    </p>
    <p>
      <strong>Video site haritası uzantısı</strong>: süre, küçük resim, içerik URL'si. Oynatıcı karmaşık olduğunda Google Video sonuçlarında görünmek için gereklidir.
    </p>
    <p>
      <strong>Haber site haritası</strong>: en fazla 1.000 URL'den oluşan ayrı dosya, yalnızca son iki günde yayınlanan makaleler, Google Haberler'de yer almak için.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      <strong>Noindex veya yönlendirilmiş URL'lerin dahil edilmesi.</strong> Google bunları çakışma olarak işaretler ve site haritası sinyallerinizi yok saymaya başlayabilir. Her yeniden oluşturmada listeyi temizleyin.
    </p>
    <p>
      <strong>Her derlemede lastmod değerini otomatik güncelleme.</strong> Alanı kullanışsız hale getirir. lastmod değerini yalnızca gerçek içerik değiştiğinde artırın &mdash; yayın güncelleme zaman damgalarına bağlayın, dağıtım zamanlarına değil.
    </p>
    <p>
      <strong>Protokolleri veya alan adlarını karıştırma.</strong> <code> https://www.example.com/sitemap.xml</code> adresindeki bir site haritası yalnızca bu tam ana bilgisayardaki URL'leri listeleyebilir. http/https veya www/non-www arasında geçiş yapmak, site haritasının aynı varyantta yaşamasını gerektirir.
    </p>
    <p>
      <strong>.gz uzantısı olmadan gzip'leme.</strong> Google sıkıştırılmış site haritalarını uzantıya göre algılar. <code>Content-Encoding: gzip</code> ile sunulan ancak içinde gzip'lenmiş baytlar bulunan bir <code>.xml</code> dosyası ayrıştırıcıların kafasını karıştırır.
    </p>
    <p>
      <strong>Yönlendirme zincirlerini listeleme.</strong> İki veya daha fazla atlama ile yönlendiren site haritası URL'leri, dizine eklenmeden önce genellikle düşer. Her şeyi doğrudan-200 tutun.
    </p>
    <p>
      <strong>İçerik değişikliklerinde güncellemeyi unutma.</strong> Bir veritabanından her gece yeniden oluşturulan bir site haritası taze kalır. Bir metin dosyasında elle tutulan bir site haritası haftalar içinde gerçeklikle uyuşmamaya başlar.
    </p>

    <h2>Sayıları çalıştırın</h2>
    <p>
      Geçerli bir URL listesi ve <code>&lt;lastmod&gt;</code> etiketli site haritasını <a href="/tools/sitemap-url-generator">site haritası URL oluşturucu</a> ile oluşturun. <code>Sitemap:</code> satırının yerinde olması için <a href="/tools/robots-txt-generator">robots.txt oluşturucu</a> ve listelediğiniz URL'lerin izleme karmaşası olmadan kurallı sürümler olduğundan emin olmak için <a href="/tools/url-cleaner">URL temizleyici</a> ile eşleştirin.
    </p>
  </>
);