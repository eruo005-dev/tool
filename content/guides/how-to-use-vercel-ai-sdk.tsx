import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>Vercel AI SDK, Node, edge veya tarayıcıdan herhangi bir <a href="/learn/llm">LLM</a>'i çağırmak, <a href="/learn/stream">stream</a> yapmak ve araç kullanmak için bir TypeScript araç setidir.</p>
);

export const body: ReactElement = (
  <>
    <p>
      AI SDK (paket adı ai), OpenAI, Anthropic, Google, Mistral, Groq, Cohere,
      Amazon Bedrock ve daha birçok servisin wire formatlarını tek bir API arkasında normalize eder. Size generateText, streamText, generateObject (Zod ile doğrulanmış yapılandırılmış çıktı için) ve doğrudan streaming UI'lara bağlanan bir dizi React/Svelte/Vue hook'u sunar. TypeScript AI uygulamaları için fiili standarttır.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      SDK, Apache-2.0 lisanslıdır, Vercel tarafından bakımı yapılır ve ai (çekirdek), @ai-sdk/openai ve benzerleri
      (sağlayıcılar) ile @ai-sdk/react (UI hook'ları) olarak ayrılmıştır. Node 18+ hedefler, Vercel Edge Runtime'da çalışır ve
      izin veren sağlayıcılar için tarayıcıda da çalışır.
    </p>

    <h2>Kurulum</h2>
    <pre>{`npm install ai @ai-sdk/openai zod
# artı ihtiyacınız olan UI paketi
npm install @ai-sdk/react`}</pre>

    <h2>İlk çalıştırma</h2>
    <p>Bir API rotasından yanıtı stream edin ve bir React bileşeninde görüntüleyin:</p>
    <pre>{`// app/api/chat/route.ts
import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export async function POST(req: Request) {
  const { messages } = await req.json()
  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages,
  })
  return result.toDataStreamResponse()
}`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>String ayrıştırmak yerine doğrulanmış JSON almak için bir Zod şemasıyla generateObject kullanın.</li>
      <li>Modelin fonksiyonlarınızı çağırmasına izin vermek için tools: bir araç tanımları kaydı geçirin; SDK döngüyü yönetir.</li>
      <li>İstemci tarafında, useChat()'i /api/chat rotanıza bağlayın &mdash; streaming token'lar, araç çağrıları ve hatalar otomatik olarak gelir.</li>
    </ul>

    <h2>Püf noktaları ve ipuçları</h2>
    <p>
      SDK, mesaj yapısını ve araç çağrısı semantiğini değiştiren büyük bir sürüm atlaması (v4'ten v5'e) geçirdi. 2024
      tarihli blog yazıları genellikle v3'ü hedefler; kopyala-yapıştır yapmadan önce paket sürümünü kontrol edin. Ayrıca toDataStreamResponse'un
      özel bir protokol kullandığını unutmayın &mdash; yerleşik hook'lar dışında tüketiyorsanız, önce stream spesifikasyonunu okuyun.
    </p>
    <p>
      Edge runtime hızlıdır ancak sınırlıdır. Node API'leri yok, 1MB paket sınırı ve bazı sağlayıcıların SDK'ları geçişli olarak fs veya crypto
      çeker. Edge'e bir sohbet rotası dağıtmadan önce next build ile paketinizi kontrol edin.
    </p>

    <h2>Kimler için</h2>
    <p>
      Bir web uygulamasına LLM özelliği ekleyen herhangi bir TypeScript geliştiricisi. İpucu: tüm model seçimini tek bir
      ortam değişkeninin arkasına koyun &mdash; gpt-4o'yu claude-sonnet-4 ile değiştirmek bir refactor değil, bir yapılandırma değişikliği haline gelir.
    </p>
  </>
);