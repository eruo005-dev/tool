import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>Vercel'in v0 aracı, doğal dil istemlerini shadcn/ui ve Tailwind CSS kullanarak üretime hazır React bileşenlerine dönüştürür.</p>
);

export const body: ReactElement = (
  <>
    <p>
      v0, Vercel'in üretken UI aracıdır. Düz bir İngilizce ile bir ekranı tanımlarsınız &mdash; veya bir Figma çerçevesi, bir
      ekran görüntüsü ya da kaba bir taslak yapıştırırsınız &mdash; ve size shadcn/ui temel bileşenlerini ve
      Tailwind sınıflarını kullanan çalışan bir React bileşeni döndürür. Next.js App Router çıktısı için optimize edilmiştir,
      böylece oluşturulan kod minimum düzenleme ile gerçek bir projeye eklenebilir. İterasyon sohbet tabanlıdır: çıktıyı
      sıfırdan bir istem düzenlemek yerine düzeltmelerle yanıtlayarak iyileştirirsiniz.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      v0, Vercel'in kendi modeli (v0-1.5-md) üzerine inşa edilmiş, daha ağır akıl yürütme gerektiren durumlarda öncü modellere
      geri dönüş yapan barındırılan bir web uygulamasıdır. Oluşturulan kod TypeScript, uygun olduğunda React Server Components ve
      MIT lisansı altındaki shadcn/ui bileşen kütüphanesini kullanır. Bakımcı: Vercel. Küçük bir ücretsiz katmanın ötesinde ücretlidir,
      mesaj kredileri ile faturalandırılır.
    </p>

    <h2>Kurulum</h2>
    <p>Yerel olarak kurulacak bir şey yok &mdash; v0, v0.dev adresinde bulunur. Oluşturulan bileşenleri bir projeye eklemek için:</p>
    <pre>{`npx shadcn@latest add "https://v0.dev/chat/b/<block-id>"
# veya v0 önizleme bölmesinden kopyala/yapıştır yapın`}</pre>

    <h2>İlk çalıştırma</h2>
    <p>v0.dev'i açın, Vercel hesabınızla giriş yapın ve &ldquo;üç katmanlı fiyatlandırma sayfası&rdquo; gibi bir istem yazın.</p>
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
      <li>Sohbet üzerinde iterasyon yapın &mdash; &ldquo;hero bölümünü karanlık yap, CTA'yı sağa taşı, bir referans satırı ekle&rdquo;.</li>
      <li>&ldquo;Kod Tabanına Ekle&rdquo; butonuna tıklayarak doğrudan bağlı bir GitHub deposuna gönderin ve bir PR açın.</li>
    </ul>

    <h2>Püf noktaları ve ipuçları</h2>
    <p>
      v0 genellikle henüz yüklemediğiniz bileşenleri içe aktarır. Kaydetmeden önce önerdiği shadcn add komutunu çalıştırın,
      aksi takdirde derleme eksik temel bileşenler nedeniyle başarısız olur. Oluşturulan sunucu bileşenleri bazen yalnızca istemci tarafına
      özel hook'ları çağırır &mdash; etkileşimli dosyaların en üstünde &ldquo;use client&rdquo; olduğundan emin olun.
    </p>
    <p>
      v0 çıktısını son bir taahhüt değil, güçlü bir ilk taslak olarak değerlendirin. CMS'nizden veya veritabanınızdan gelmesi gereken
      verileri satır içine alma eğilimindedir ve erişilebilirlik özellikleri iyi ancak mükemmel değildir &mdash; yayınlamadan önce
      sekme sırasını ve alternatif metinleri denetleyin.
    </p>

    <h2>Kimler için olduğu</h2>
    <p>
      Zaten Next.js + Tailwind yığınında çalışan kurucular ve full-stack mühendisler. İpucu: Her yeni üretimin mevcut
      token'larınızla eşleşmesi için v0 bağlamı olarak sabitlenmiş bir tasarım sistemi referans projesi bulundurun.
    </p>
  </>
);