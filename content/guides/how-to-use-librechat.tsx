import { type ReactElement } from "react";

export const intro: ReactElement = (<p>LibreChat, tek bir arayüzden tüm büyük model sağlayıcılarıyla konuşan açık kaynaklı bir ChatGPT klonudur.</p>);

export const body: ReactElement = (
  <>
    <p>LibreChat, sadık bir ChatGPT yeniden uygulaması olarak başladı ve çoklu sağlayıcılı bir sohbet merkezine dönüştü. Tek bir arayüz, OpenAI, Anthropic, Google, Azure, AWS Bedrock, yerel Ollama ve OpenAI Assistants API'sini bir araya getiriyor. Bunun üzerine eklentiler, çok modlu girdiler, ön ayarlar ve kullanıcı başına API anahtarları ekliyor.</p>
    <h2>Ne olduğu</h2>
    <p>Sohbet geçmişi için MongoDB ve konuşma araması için Meilisearch tarafından desteklenen bir Node.js + React monorepo'su. Kimlik doğrulama, e-posta, Google, GitHub, Discord, Facebook, Apple ve OpenID'yi destekler. Modeller, uç noktaları, özel sağlayıcıları ve hız sınırlarını bildirdiğiniz <code>librechat.yaml</code> aracılığıyla yapılandırılır.</p>
    <h2>Kurulum / ayarlar</h2>
    <pre>{`# docker compose
git clone https://github.com/danny-avila/LibreChat
cd LibreChat
cp .env.example .env
cp librechat.example.yaml librechat.yaml
docker compose up -d`}</pre>
    <h2>İlk çalıştırma</h2>
    <p><code>http://localhost:3080</code> adresini açın, bir hesap oluşturun (ilk kullanıcı CLI aracılığıyla yönetici yapılabilir), sağ üst menüden bir API anahtarı ekleyin ve sohbete başlayın. Yan yana karşılaştırma yapmak için sohbet sırasında model açılır menüsünden sağlayıcıları değiştirin.</p>
    <pre>{`$ npm run create-user admin@example.com Admin password123
Kullanıcı başarıyla oluşturuldu
$ npm run ban-user someone@example.com`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Takım arkadaşlarınızın aynı temelden başlaması için bir sağlayıcı, model, <a href="/learn/system-prompt">sistem istemi</a> ve <a href="/learn/temperature-ai">sıcaklık</a> ile bir Ön Ayar kaydedin.</li>
      <li>LibreChat'ten ayrılmadan dosya yüklemek ve OpenAI'nin kod yorumlayıcısını çalıştırmak için Asistanları etkinleştirin.</li>
      <li>Sohbeti araç çağıran aracılara genişletmek için eklentiler (web araması, DALL·E, Zapier, özel eylemler) ekleyin.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p><code>librechat.yaml</code>, özel uç noktalar için tek doğruluk kaynağıdır, ancak başlangıçta okunur &mdash; değişiklikler bir konteyner yeniden başlatması gerektirir. Yeniden başlatmadan önce YAML'nizi doğrulayın çünkü bir yazım hatası API konteynerini çökertecek ve şanslıysanız sessizce son iyi yapılandırmaya geri dönecektir.</p>
    <p>Kullanıcılar konuşmaları asla silmezse MongoDB hızla büyür. Eski konuları arşivleyen bir saklama politikası veya cron işi ayarlayın ve Meilisearch'i kalıcı bir birime koyun, aksi takdirde her yeniden dağıtımda tam metin arama dizinlerini kaybedersiniz.</p>
    <h2>Kimler için</h2>
    <p>Çoklu sağlayıcı desteği ve gerçek kimlik doğrulama ile cilalı, kendi barındırılan bir ChatGPT isteyen herkes. Tek bir planı paylaşan aileler, API anahtarları aracılığıyla birleşik faturalandırma isteyen küçük ekipler ve ChatGPT arayüzünü seven ancak verilerine sahip olmak isteyen meraklılar.</p>
  </>
);