import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Görsel prompt kalitesi, &ldquo;vasat AI zırvası&rdquo; ile &ldquo;insanların gerçekten ayırt edemediği&rdquo; arasındaki farktır. İşte 2026'da Midjourney, DALL-E 4, FLUX, Imagen ve Stable Diffusion 3.5'te çalışan promptlar yazmanın yolu.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>5 parçalı yapı</h2>
    <p>
      <strong>Stil + konu + ışık + kamera + ekstralar + bayraklar</strong>ı üst üste koyun. Basit bir çalışan prompt:
    </p>
    <pre className="rounded bg-slate-900 p-3 text-xs text-slate-100"><code>{`sinematik kare, anamorfik lens, renk derecelendirilmiş,
küçük bir astronot kaskı takan labrador,
altın saat sıcak yan ışığı,
85mm portre lens sığ alan derinliği,
havada toz parçacıkları, göz teması,
--ar 16:9`}</code></pre>

    <h2>Her parçanın işlevi</h2>
    <ul>
      <li><strong>Stil:</strong> &ldquo;fotoğraf&rdquo;, &ldquo;sinematik kare&rdquo;, &ldquo;3D render&rdquo;, &ldquo;anime&rdquo; genel estetiği belirler.</li>
      <li><strong>Konu:</strong> Resmin NE olduğunu sade dille tanımlayın.</li>
      <li><strong>Işık:</strong> altın saat, stüdyo softbox, neon, kasvetli düşük anahtar &mdash; en büyük kalite kaldıracı.</li>
      <li><strong>Kamera:</strong> 24mm geniş / 85mm portre / makro / balık gözü kompozisyon hissini belirler.</li>
      <li><strong>Ekstralar:</strong> doku, atmosfer, ruh hali notları (örn. &ldquo;toz parçacıkları&rdquo;, &ldquo;göz teması&rdquo;).</li>
      <li><strong>Bayraklar:</strong> Midjourney <code>--ar</code>, <code>--no</code>, <code>--style raw</code>; SD'nin ayrı negatif promptu.</li>
    </ul>

    <h2>Yaygın hatalar</h2>
    <ul>
      <li>Başka hiçbir detay olmadan &ldquo;bir adamın fotoğrafı&rdquo; istemek. Modeller varsayılan olarak genel sonuç verir &mdash; zırva alırsınız.</li>
      <li>Çok fazla sıfat yığmak. ~30-40 token sonrasında modeller detay takibinde zayıflar.</li>
      <li>Konuyu sona koymak. Çoğu model ilk tokenları daha ağırlıklı değerlendirir.</li>
      <li>Telif rahatlığını kontrol etmeden sanatçı adları kullanmak &mdash; ticari kullanım riski.</li>
    </ul>

    <p>
      Promptları daha hızlı oluşturmak için <a href="/tools/ai-image-prompt-helper">AI görsel prompt yardımcısı</a>nı kullanın. Tam araç karşılaştırması için <a href="/guides/best-ai-for-image-generation">görsel üretimi için en iyi AI</a> sayfasına bakın.
    </p>
  </>
);