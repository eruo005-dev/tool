import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>Lovable, komutları dağıtılabilir React + Supabase uygulamalarına dönüştüren, canlı bir GitHub yansımasına sahip bir yapay zeka full-stack oluşturucusudur.</p>
);

export const body: ReactElement = (
  <>
    <p>
      Lovable &mdash; eski adıyla GPT Engineer &mdash; bir uygulamayı sohbet üzerinden tanımlamanıza ve dosya dosya
      yan yana bir ön izlemede görmenize olanak tanır. Yalnızca UI araçlarının aksine, bir arka uç da kurar: kimlik doğrulama ve Postgres için Supabase,
      iş mantığı için sunucusuz işlevler ve ödemeler için Stripe, hepsi bir komut uzağınızdadır. Her proje,
      sahibi olduğunuz gerçek bir GitHub deposuna yansıtılır, böylece istediğiniz zaman çıkış yapabilir ve seçtiğiniz düzenleyicide devam edebilirsiniz.
    </p>

    <h2>Nedir</h2>
    <p>
      Lovable, Stockholm merkezli bir ekip tarafından oluşturulmuş barındırılan bir platformdur. Oluşturulan yığın, ön uçta Vite + React + TypeScript +
      Tailwind + shadcn/ui ve arka uçta Supabase'dir. Kod, dışa aktarıldıktan sonra standart bir MIT benzeri
      proje lisansı altında size aittir. Hizmetin kendisi bir SaaS'tır ve ücretsiz günlük mesaj kotası ve daha yoğun kullanım için ücretli katmanları vardır.
    </p>

    <h2>Kurulum</h2>
    <p>Lovable tarayıcı tabanlıdır. Dışa aktarılan bir projeyi yerel olarak çalıştırmak için:</p>
    <pre>{`git clone https://github.com/<siz>/<lovable-projeniz>.git
cd <lovable-projeniz>
npm install
npm run dev`}</pre>

    <h2>İlk çalıştırma</h2>
    <p>
      lovable.dev adresinde, &ldquo;Yeni Proje&rdquo;ye tıklayın ve bir komut yazın. Lovable depoyu hazırlar ve bir ön izleme açar;
      takip eden mesajlar aynı kod tabanını düzenler.
    </p>
    <pre>{`// Tipik bir oluşturulmuş page.tsx
import { supabase } from "@/integrations/supabase/client"

export default function Dashboard() {
  // Lovable sizin için fetch, tablo ve auth korumasını yazar
  return <TaskList />
}`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Bir MVP komutu verin, Supabase'i tek tıkla bağlayın, ardından Lovable'dan satır düzeyinde güvenlik politikaları eklemesini isteyin.</li>
      <li>Ön izlemedeki bir düğmeyi işaret etmek ve neyin değişmesi gerektiğini söylemek için &ldquo;Öğe seç&rdquo;i kullanın.</li>
      <li>Her değişikliği GitHub'a gönderin, bir PR'deki farkları inceleyin ve Vercel veya Netlify aracılığıyla dağıtın.</li>
    </ul>

    <h2>Tuzaklar ve ipuçları</h2>
    <p>
      Lovable bağımlılıklar konusunda cömerttir &mdash; göndermeden önce package.json'ı denetleyin, aksi takdirde npm'in yarısını
      üretime taşırsınız. Supabase entegrasyonu tabloları hızlıca oluşturur, ancak nadiren indeks ekler; yavaş sorguları
      erken profilleyin. Uzun sohbetler de kayar: uygulama kendisiyle çelişmeye başlarsa, aynı GitHub deposunu işaret eden yeni bir sohbet başlatın.
    </p>
    <p>
      Sırlar hassas bir noktadır. API anahtarlarını asla sohbete yapıştırmayın &mdash; bunun yerine Supabase Edge Function sırlarını veya Vercel
      ortam değişkenlerini kullanın ve Lovable'a değerleri sabit kodlamak yerine bunlardan okumasını hatırlatın.
    </p>

    <h2>Kimler için</h2>
    <p>
      Bir öğleden sonra çalışan bir SaaS iskeleti isteyen solo kurucular ve ürün yöneticileri. İpucu: MVP komutundan hemen sonra,
      Lovable'dan testler ve hata sınırları eklemesini isteyin &mdash; bunları nadiren kendiliğinden önerir.
    </p>
  </>
);