import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Dify, görsel iş akışları, ajanlar, veri kümeleri ve API'leri tek bir yığında sunan açık kaynaklı bir LLMOps platformudur.</p>);

export const body: ReactElement = (
  <>
    <p>Dify, &ldquo;kodsuz bir oluşturucu&rdquo; ile &ldquo;tam bir LLMOps platformu&rdquo; arasında yer alır. Tarayıcıda prompt'lar ve ajanlar tasarlar, RAG için veri kümeleri eklersiniz ve platform bunları kimlik doğrulama, hız sınırlamaları ve analitik ile REST API'leri olarak sunar. Kendi sunucunuzda ücretsiz olarak barındırın veya yönetilen bulutu kullanın.</p>
    <h2>Ne olduğu</h2>
    <p>Bir Python arka ucu (Flask + Celery + Postgres + Redis + bir vektör deposu) artı bir Next.js ön ucu. Uygulamalar dört çeşittir: sohbet, ajan, iş akışı ve metin oluşturma. Veri kümeleri alım ve almayı yönetir; modeller, 30'dan fazla satıcıyı destekleyen bir sağlayıcı kaydı aracılığıyla bağlanır.</p>
    <h2>Kurulum / yapılandırma</h2>
    <pre>{`# docker compose ile kendi kendine barındırma
git clone https://github.com/langgenius/dify
cd dify/docker
cp .env.example .env
docker compose up -d`}</pre>
    <h2>İlk çalıştırma</h2>
    <p><code>http://localhost</code> adresine gidin, yönetici hesabını oluşturun ve bir model sağlayıcısı (OpenAI, Anthropic veya yerel bir Ollama uç noktası) bağlayın. Uygulama Oluştur'a tıklayın, Sohbet Robotu'nu seçin, bir <a href="/learn/system-prompt">sistem prompt'u</a> yazın ve yayınlayın &mdash; Dify paylaşılabilir bir URL ve bir API token'ı oluşturur.</p>
    <pre>{`$ curl -X POST http://localhost/v1/chat-messages \\
  -H "Authorization: Bearer app-xxx" \\
  -d '{"inputs":{},"query":"merhaba","user":"u1"}'
{"answer":"Merhaba!","conversation_id":"..."}`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Bir veri kümesi oluşturarak, dosyalar yükleyerek ve uygulama ayarlarında almayı etkinleştirerek bir RAG sohbet robotu oluşturun.</li>
      <li>Deterministik ardışık düzenler için HTTP çağrılarını, <a href="/learn/llm">LLM</a> düğümlerini, kod bloklarını ve koşulları zincirlemek üzere İş Akışı uygulama türünü kullanın.</li>
      <li>Oluşturulan web uygulaması URL'sini gömerek veya mevcut ürününüzden API'yi çağırarak bir dahili araç yayınlayın.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Docker Compose yığını birçok imaj çeker (Postgres, Redis, Weaviate, sandbox, SSRF proxy). En az 4&ndash;6 GB RAM ayırın ve 1 GB VPS'te çalıştırmayın. <code>sandbox</code> konteyneri kullanıcı kodunu yürütür ve <code>privileged</code> veya bir seccomp profili gerektirir &mdash; Dify'yi herkese açmadan önce güvenlik belgelerini okuyun.</p>
    <p>Sürüm yükseltmeleri bazen otomatik olmayan veritabanı geçişleri gerektirir. <code>docker compose pull</code> komutundan önce Postgres biriminizin anlık görüntüsünü alın. Ekip hızlı hareket eder ve küçük sürümler arasında yıkıcı değişiklikler olabilir.</p>
    <h2>Kimler için</h2>
    <p>Platform katmanını oluşturmadan LLM özellikleri göndermek isteyen ürün ekipleri. Prompt'lar, veri kümeleri, kimlik doğrulama, günlükler ve bir API ağ geçidini tek bir pakette istiyorsanız, Dify bugün mevcut olan en kapsamlı açık kaynak seçeneğidir.</p>
  </>
);
