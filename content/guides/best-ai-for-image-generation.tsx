import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da önemli olan beş görüntü oluşturma modeli var: Midjourney v7, FLUX 1.1 Pro Ultra, DALL-E 4,
    Imagen 4 ve Stable Diffusion 3.5 Large. Her biri farklı bir alanda lider &mdash; hangisinin &ldquo;en iyi&rdquo; olduğuna göre değil, ne oluşturduğunuza göre seçim yapın.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Kullanım alanına göre liderler</h2>
    <ul>
      <li><strong>Pazarlama kalitesinde kahraman görselleri:</strong> Midjourney v7. En tutarlı stil, en iyi
        komut anlayışı, reklam yaratıcılığında altın standart.</li>
      <li><strong>Fotogerçekçilik:</strong> FLUX 1.1 Pro Ultra (4MP). Cilt dokusu, ışık gerçekçiliği konusunda
        DALL-E ve Imagen'ı geçiyor.</li>
      <li><strong>Görsellerde metin:</strong> Imagen 4 + DALL-E 4 her ikisi de mükemmel. FLUX rekabetçi
        ancak çok satırlı düzenlerde kaybediyor.</li>
      <li><strong>Ücretsiz / açık ağırlık:</strong> Stable Diffusion 3.5 Large veya FLUX dev. ComfyUI /
        Automatic1111 / DiffusionBee üzerinde çalıştırın.</li>
      <li><strong>Yinelemeli düzenleme:</strong> ChatGPT'de DALL-E 4. Yazarak iç boyama.</li>
      <li><strong>Hız:</strong> FLUX Schnell veya SDXL Turbo &mdash; iyi bir GPU'da saniyenin altında.</li>
    </ul>

    <h2>Fiyatlandırma</h2>
    <ul>
      <li><strong>Midjourney:</strong> $10-120/ay. v7 Pro+ katmanlarında.</li>
      <li><strong>ChatGPT Plus ($20/ay):</strong> DALL-E 4 + Sora içerir.</li>
      <li><strong>Gemini Advanced ($20/ay):</strong> Imagen 4 + Veo içerir.</li>
      <li><strong>Replicate / fal.ai (FLUX API):</strong> Görsel başına ~$0.05.</li>
      <li><strong>Kendi barındırman SD 3.5:</strong> $0 (elektrik).</li>
    </ul>

    <h2>Dürüst 2026 yılı yığını</h2>
    <ul>
      <li>Pazarlama / marka çalışmaları: <strong>Midjourney</strong> ($10-30/ay).</li>
      <li>Günlük bilgi çalışması + ara sıra görsel: <strong>ChatGPT Plus veya Gemini Advanced</strong>
        ($20/ay) &mdash; zaten sohbet için ödüyorsunuz.</li>
      <li>Yoğun oluşturma / yineleme: Replicate ekleyin veya FLUX'u kendi barındırın.</li>
    </ul>

    <h2>Nelerden kaçınılmalı</h2>
    <ul>
      <li>İzin vermemiş kişilerin gerçek insan yüzleri. Yapması kolay, etik ve genellikle
        yasal olarak yanlış.</li>
      <li>Müşteri çalışmaları için tescilli şirketlerin marka logolarını IP'yi kontrol etmeden oluşturmak.</li>
      <li>Komut mühendisliği aşamasını atlamak &mdash; iyi bir komut, 30 tembel komuttan daha fazla üretir.</li>
    </ul>
    <p>
      Karşılaştır: <a href="/compare/chatgpt-vs-gemini">ChatGPT vs Gemini</a>.
    </p>
  </>
);