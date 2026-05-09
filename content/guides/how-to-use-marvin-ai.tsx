import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Marvin, Python fonksiyonlarını, olağan prompt mühendisliği karmaşası olmadan yapılandırılmış AI araçlarına dönüştürür.</p>);

export const body: ReactElement = (
  <>
    <p>Marvin, Prefect ekibinden bir Python araç setidir ve <a href="/learn/llm">LLM</a> çağrılarını tipli, güvenilir temel yapı taşlarına sarar. Prompt'ları elle yazmak ve yanıtları ayrıştırmak yerine, bir fonksiyon imzasını dekore edersiniz ve Marvin şema dönüşümünü, yeniden denemeleri ve doğrulamayı halleder. Normal Python gibi hissettirir, amaç da budur.</p>
    <h2>Ne olduğu</h2>
    <p>Marvin, küçük bir temel yapı taşı seti sunar &mdash; <code>classify</code>, <code>extract</code>, <code>generate</code>, <code>cast</code> ve <code>@ai_fn</code> dekoratörü &mdash; bunlar bir LLM arka ucuna (varsayılan olarak OpenAI) yetki verir ve Pydantic tipli sonuçlar döndürür. Perde arkasında, tür imzasından ve docstring'den bir <a href="/learn/system-prompt">sistem promptu</a> oluşturur, modeli çağırır ve JSON'u tekrar Python nesnelerine ayrıştırır.</p>
    <h2>Kurulum / ayarlar</h2>
    <pre>{`# kurulum
pip install marvin
export OPENAI_API_KEY=sk-...`}</pre>
    <h2>İlk çalıştırma</h2>
    <p>En hızlı demo sınıflandırmadır. Marvin'e bir dize ve bir etiket listesi verin, en iyi eşleşmeyi tipli bir değer olarak döndürür.</p>
    <pre>{`$ python -c "import marvin; print(marvin.classify('Bu harika!', ['olumlu','olumsuz']))"
olumlu`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Bir iş kuralını <code>@ai_fn</code> ile sarın, böylece ürün kodu doğrudan bir LLM yerine tipli bir fonksiyon çağırır.</li>
      <li>Yapılandırılmamış destek biletlerinden varlıkları (e-postalar, fiyatlar, tarihler) çıkarmak için <code>marvin.extract</code> kullanın.</li>
      <li>Şemanızla eşleşen test verileri oluşturmak için <code>marvin.generate</code>'ı Pydantic modelleriyle zincirleyin.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Marvin kasıtlı olarak incedir. Bir vektör deposu, sohbet arayüzü veya ajan döngüsü içermez &mdash; bunlara ihtiyacınız varsa, LangChain veya ControlFlow (yine Prefect'ten) ile eşleştirin. Marvin'i &ldquo;tipli fonksiyon&rdquo; katmanı olarak düşünün ve daha ağır çerçevelerle birleştirin.</p>
    <p>Token maliyetini hafife almak kolaydır çünkü dekore edilmiş her çağrı modele gidip gelir. Üretimde agresif bir şekilde önbelleğe alın ve çıktı alanı küçük ve bilindiğinde <code>@ai_fn</code> yerine <code>classify</code>'ı tercih edin &mdash; daha ucuz ve daha deterministiktir.</p>
    <h2>Kimler için</h2>
    <p>Tam bir ajan çerçevesi benimsemeden mevcut hizmetler içinde LLM özellikleri isteyen Python geliştiricileri. Halihazırda FastAPI, Prefect veya bir veri hattında yaşıyorsanız ve bugün yapılandırılmış çıktılara ihtiyacınız varsa, Marvin temiz bir şekilde uyum sağlar.</p>
  </>
);