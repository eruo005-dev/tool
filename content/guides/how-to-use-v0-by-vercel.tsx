import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>v0 by Vercel, doğal dil istemlerini shadcn/ui ve Tailwind CSS kullanarak üretime hazır React bileşenlerine dönüştürür.</p>
);

export const body: ReactElement = (
  <>
    <p>
      v0, Vercel&rsquo;in üretken UI aracıdır. Bir ekranı düz İngilizce ile tanımlarsınız &mdash; veya bir Figma çerçevesi, bir
      ekran görüntüsü ya da kaba bir taslak yapıştırırsınız &mdash; ve size shadcn/ui temel bileşenleri ve
      Tailwind sınıflarını kullanan çalışan bir React bileşeni döndürür. Next.js App Router çıktısı için optimize edilmiştir, bu nedenle oluşturulan kod minimum temizlikle gerçek bir projeye eklenir.
      Yineleme sohbet tabanlıdır: istemi sıfırdan düzenlemek yerine düzeltmelerle yanıt vererek çıktıyı iyileştirirsiniz.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      v0, Vercel&rsquo;in kendi modeli (v0-1.5-md) üzerine inşa edilmiş, daha ağır akıl yürütme için son teknoloji modellere
      geri dönüşleri olan barındırılan bir web uygulamasıdır. Oluşturulan kod, TypeScript, uygun olduğunda React Server Components ve
      MIT lisansı altındaki shadcn/ui bileşen kitaplığını kullanır. Bakımcı: Vercel. Küçük bir ücretsiz katmanın ötesinde ücretlidir, mesaj
      kredileriyle faturalandırılır.
    </p>

    <h2>Kurulum</h2>
    <p>Yerel olarak kurulacak bir şey yok &mdash; v0, v0.dev adresinde bulunur. Oluşturulan bileşenleri bir projeye çekmek için:</p>
    <pre>{`npx shadcn@latest add "https://v0.dev/chat/b/<block-id>"
# veya v0 önizleme bölmesinden kopyala/yapıştır`}</pre>

    <h2>İlk çalıştırma</h2>
    <p>v0.dev'i açın, Vercel hesabınızla oturum açın ve &ldquo;üç katmanlı fiyatlandırma sayfası&rdquo; gibi bir istem yazın.</p>
    <pre>{`// v0, app/ klasörüne ekleyeceğiniz bu tür dosyaları döndürür
export default function Pricing() {
  return (
    <section className="py-24">
      <h1 className="text-4xl font-bold">Fiyatlandırma</h1>
      {/* ardından üç Card bileşeni gelir */}
    </section>
  )
}`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Bir rakibin açılış sayfasının ekran görüntüsünü yapıştırın ve markalı bir eşdeğerini isteyin.</li>
      <li>Sohbette yineleme yapın &mdash; &ldquo;hero bölümünü koyu yap, CTA'yı sağa taşı, bir referans satırı ekle&rdquo;.</li>
      <li>Doğrudan bağlı bir GitHub deposuna göndermek ve bir PR açmak için &ldquo;Kod Tabanına Ekle&rdquo;ye tıklayın.</li>
    </ul>

    <h2>Tuzaklar ve ipuçları</h2>
    <p>
      v0 genellikle henüz yüklemediğiniz bileşenleri içe aktarır. Kaydetmeden önce önerdiği shadcn add komutunu çalıştırın,
      aksi takdirde derleme eksik temel bileşenler nedeniyle bozulur. Oluşturulan sunucu bileşenleri bazen yalnızca istemciye özel hook'ları çağırır
      &mdash; etkileşimli dosyaların en üstünde &ldquo;use client&rdquo; olduğundan emin olun.
    </p>
    <p>
      v0 çıktısını son bir taahhüt değil, güçlü bir ilk taslak olarak değerlendirin. CMS'nizden veya veritabanınızdan gelmesi gereken verileri satır içine alma eğilimindedir
      ve erişilebilirlik özellikleri iyi ancak mükemmel değildir &mdash; yayınlamadan önce sekme sırasını ve alt metni denetleyin.
    </p>

    <h2>Kimler için olduğu</h2>
    <p>
      Zaten Next.js + Tailwind yığınında yaşayan kurucular ve full-stack mühendisler. İpucu: Her yeni üretimin mevcut token'larınızla eşleşmesi için
      v0 bağlamı olarak bir tasarım sistemi referans projesini sabitleyin.
    </p>
  </>
);