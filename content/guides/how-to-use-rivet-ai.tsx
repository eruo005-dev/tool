import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Rivet, Ironclad&rsquo;ın <a href="/learn/llm">LLM</a> grafları için açık kaynaklı görsel IDE&rsquo;sidir &mdash; promptları düğüm grafları olarak oluşturun, ardından bunları herhangi bir JS/TS uygulamasına gömün.</p>);

export const body: ReactElement = (
  <>
    <p>Rivet, LLM iş akışlarına Unreal&rsquo;in oyun mantığına davrandığı gibi davranır: görsel olarak manipüle ettiğiniz düğümlerden oluşan bir graf. Promptları, dallanmaları, döngüleri, alt grafları ve araç çağrılarını bir tuval üzerinde birbirine bağlar, her yürütme adımını adım adım hata ayıklarsınız ve ardından grafiği, üretim uygulamanızın çalışma zamanında yüklediği bir dosya olarak gönderirsiniz.</p>
    <h2>Ne olduğu</h2>
    <p>Graf tasarlamak için bir masaüstü uygulaması (Electron) artı bunları çalıştırmak için başsız bir <code>@ironclad/rivet-node</code> kütüphanesi. Graflar, git&rsquo;e eklediğiniz JSON dosyalarıdır. Düğümler sohbet, metin, kod, veri, mantık ve G/Ç&rsquo;yi kapsar. Hata ayıklayıcı, her düğümün girdilerini ve çıktılarını göstererek bir dalın neden ateşlendiğini veya ateşlenmediğini incelemenizi sağlar.</p>
    <h2>Kurulum / ayarlama</h2>
    <pre>{`# masaüstü uygulaması
# https://rivet.ironcladapp.com adresinden indirin
# node çalışma zamanı
npm install @ironclad/rivet-node`}</pre>
    <h2>İlk çalıştırma</h2>
    <p>Rivet&rsquo;i açın, yeni bir proje oluşturun ve tuval üzerine bir Sohbet düğümü sürükleyin. Prompt girdisine bir Metin düğümü bağlayın, metne &ldquo;Merhaba de&rdquo; yazın ve Çalıştır&rsquo;a tıklayın. Sağdaki yürütme günlüğü, her düğümün girdisini, çıktısını ve token kullanımını gösterir.</p>
    <pre>{`$ node
const { runGraphInFile } = require('@ironclad/rivet-node');
await runGraphInFile('./graph.rivet-project', {
  graph: 'Main', openAiKey: process.env.OPENAI_API_KEY
});`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Çok adımlı bir aracıyı görsel olarak prototipleyin, ardından <code>.rivet-project</code> dosyasını diğer herhangi bir kaynak yapıtı gibi git&rsquo;e ekleyin.</li>
      <li>Yeniden kullanılabilir mantığı (alma, biçimlendirme, güvenlik önlemleri) paketlemek için alt graflar kullanın ve bunları bir üst graftan çağırın.</li>
      <li>Grafı, <code>runGraphInFile</code> ile bir Node arka ucuna gömün, böylece ürün kodu ince kalır ve prompt mantığı Rivet&rsquo;te kalır.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Rivet öncelikle JS/TS içindir. Node çalışma zamanı sağlamdır; Python kullanıcıları başsız çalıştırıcıyı bir alt süreç olarak çağırmalı veya grafiği yeniden uygulamalıdır, çünkü resmi bir Python SDK&rsquo;sı yoktur. Arka uç ağırlıklı olarak Python kullanıyorsa, benimsemeden önce bunu değerlendirin.</p>
    <p>Graf dosyaları git&rsquo;de kötü birleşir. Aynı grafiği düzenleyen iki kişi, elle çözülmesi zor olan JSON&rsquo;da çakışmalar üretecektir. Hangi grafiği kimin düzenleyeceğini koordine edin, sahipliği bölmek için alt graflara güvenin ve GitHub&rsquo;ın satır satır görünümü yerine Rivet&rsquo;in kendisindeki farkları inceleyin.</p>
    <h2>Kimin için olduğu</h2>
    <p>Promptlar için tasarımcı kalitesinde bir IDE isteyen JS/TS geliştiricileri ve bir ürün yöneticisi veya tasarımcının bir mühendisle mantığı birlikte yazdığı ekipler. Düz LangChain kodunu aştıysanız ancak barındırılan bir platform istemiyorsanız, Rivet yerel-öncelikli tatlı noktadır.</p>
  </>
);