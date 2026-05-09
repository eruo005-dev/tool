import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    &ldquo;AI akıcılığı&rdquo; 2026'nın aslında belirli bir anlamı olan moda sözcüğüdür: bir kişinin
    AI'dan ortalama kullanıcıya göre 5 kat daha fazla çıktı almasını sağlayan pratik beceriler.
    İşte somut kontrol listesi.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Önemli olan 8 alt beceri</h2>
    <ol>
      <li><strong>Prompt yapısı:</strong> Rol / Görev / Hedef Kitle / Kısıtlamalar / Biçim / Örnek. Tek satırlık sorular yazmayı bırakın.</li>
      <li><strong>Model seçimi:</strong> Belirli bir görev için Claude'un GPT'yi, GPT'nin Gemini'yi, Gemini'nin DeepSeek'i ne zaman yendiğini bilmek.</li>
      <li><strong>Araç kullanımı:</strong> Web araması, kod yorumlayıcı, dosya yükleme, ajanlarla bir <a href="/learn/llm">BDM</a> çalıştırmak.</li>
      <li><strong>Kalite kalibrasyonu:</strong> Halüsinasyonları tespit etmek ve yanıtları temellendirmek.</li>
      <li><strong>Yineleme:</strong> İlk çıktıyı kabul etmek yerine takip etmek + promptları yeniden yazmak.</li>
      <li><strong>Bağlam yönetimi:</strong> Projeleri, özel GPT'leri, sistem promptlarını, RAG'ı ne zaman kullanacağını bilmek.</li>
      <li><strong>Maliyet bilinci:</strong> Önbelleğe alma, toplu API'ler, model değiştirme, kendi kendine barındırma zamanı.</li>
      <li><strong>Gizlilik duruşu:</strong> Neyi yapıştırmamanız gerektiğini bilmek.</li>
    </ol>

    <h2>Bunu gerçekten nasıl geliştirirsiniz</h2>
    <ul>
      <li>90 gün boyunca günde bir gerçek görev için AI kullanın. Sıradan sohbet değil &mdash; gerçek iş.</li>
      <li>Bunda iyi olduğu bilinen kişilerden (Karpathy, Riley Goodside, Simon Willison) haftada 1-2 prompt okuyun.</li>
      <li>Kişisel bir prompt kütüphanesinde neyin işe yaradığını ve yaramadığını takip edin.</li>
      <li>Kafa kafaya karşılaştırma yapın: aynı görevi 2-3 modelde çalıştırın, çıktıları derecelendirin.</li>
    </ul>

    <h2>Yaygın boşluklar</h2>
    <ul>
      <li>Yalnızca tek model kullanımı &mdash; model seçme becerisini kaçırmak.</li>
      <li>Projeleri / özel GPT'leri kullanmamak &mdash; her seferinde bağlamı yeniden icat etmek.</li>
      <li>Kalite kalibrasyonu yok &mdash; alıntıları doğrulamadan AI çıktısına güvenmek.</li>
      <li><a href="/learn/prompt-caching">Prompt önbelleğe almanın</a> varlığından haberdar olmamak &mdash; API'de gerekenden 10 kat daha fazla ödemek.</li>
    </ul>
    <p>
      Pratik yapılacak araçlar: <a href="/tools/prompt-rewriter">prompt yeniden yazıcı</a>,{" "}
      <a href="/tools/system-prompt-generator">sistem prompt oluşturucu</a>,{" "}
      <a href="/tools/ai-model-picker-quiz">AI model seçici testi</a>.
    </p>
  </>
);