import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Letta (eski adıyla MemGPT), durum bilgisi olan ajanlar için açık kaynaklı bir framework'tür &mdash; konuşmalar arasında kendi uzun vadeli hafızasını yöneten LLM'ler.</p>);

export const body: ReactElement = (
  <>
    <p>MemGPT, Berkeley'de LLM'lere işletim sistemi tarzı bir bellek hiyerarşisi kazandıran bir araştırma projesi olarak başladı: küçük bir bağlam içi çalışma seti, daha büyük bir arşiv deposu ve bunlar arasında geçiş yapmak için araçlar. 2024'te Letta olarak yeniden markalaştı ve şimdi bir sunucu, bir Python/TypeScript SDK ve Ajan Geliştirme Ortamı (ADE) &mdash; durum bilgisi olan ajanlar için görsel bir hata ayıklayıcı sunuyor.</p>
    <h2>Ne olduğu</h2>
    <p>Letta, ajan durumuyla kalıcı bir sunucu çalıştırır: çekirdek bellek blokları (kişilik, insan), arşiv belleği (vektör deposu) ve mesaj geçmişi. Ajanlar kimlik numarasıyla adreslenebilir ve yeniden başlatmalarda hayatta kalır. Onlarla REST veya WebSocket üzerinden konuşursunuz; araçları çağırır, kendi bellek bloklarını günceller ve oturumlar arasında öğrenmeye devam ederler.</p>
    <h2>Kurulum / kayıt</h2>
    <pre>{`# Docker (önerilen)
docker run -it -p 8283:8283 \\
  -v ~/.letta:/root/.letta \\
  letta/letta:latest

# Veya pip
pip install letta
letta server

# Bulut seçeneği: https://app.letta.com (yönetilen)`}</pre>
    <h2>İlk oturum</h2>
    <p>ADE'yi http://localhost:8283 adresinde açın, bir ajan oluşturun ve sohbet etmeye başlayın. Sağdaki bellek panelini izleyin &mdash; adınızı söylediğinizde, ajanın "insan" bloğunu gerçek zamanlı olarak güncellediğini göreceksiniz.</p>
    <pre>{`$ letta run
> Merhaba, ben Jay ve SEO araçları geliştiriyorum.
# ajan çekirdek belleğe yazar:
#   insan: "Adı Jay. SEO araçları geliştiriyor."
> Ne üzerinde çalışıyorum?
# ajan çekirdek bellekten hatırlar, <a href="/learn/context-window">bağlam penceresinden</a> değil`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>1. Haftalarca süren konuşmalar boyunca tercihleri hatırlayan kişisel bir asistan oluşturun.</li>
      <li>2. Ajanlara araçlar verin (Python fonksiyonları veya <a href="/learn/mcp">MCP</a> sunucuları) böylece sadece hatırlamakla kalmaz, aynı zamanda hareket de edebilirler.</li>
      <li>3. Hata ayıklarken bellek düzenlemelerini incelemek ve araç çağrılarını adım adım takip etmek için ADE'yi kullanın.</li>
    </ul>
    <h2>Tuzaklar &amp; ipuçları</h2>
    <p>Arşiv belleği bir vektör deposu kullanır (varsayılan olarak pgvector) &mdash; üretimde dayanıklı bir Postgres'e yönlendirin, konteynır içi SQLite'a değil, yoksa yeniden başlatmada anılarınızı kaybedersiniz. Letta, OpenAI uyumlu herhangi bir uç noktayı destekler, bu nedenle Ollama veya vLLM aracılığıyla yerel modeller gizlilik hassasiyeti olan dağıtımlar için gayet iyi çalışır.</p>
    <p>Çekirdek bellek blokları kasıtlı olarak küçüktür (birkaç KB) &mdash; her zaman bağlam içindedirler. Daha büyük bilgileri arşive itin ve ajanın onu almasına izin verin. Ajanın kendi hafızasını kendi kendine düzenlemesi güçlüdür ancak bazen yararlı bilgilerin üzerine yazar; eğer bu önemliyse, bellek bloklarınızı API aracılığıyla sürümleyin.</p>
    <h2>Kimin için</h2>
    <p>Uzun ömürlü asistanlar, arkadaş uygulamaları, müşteri destek botları ve "ajan sizi hatırlar" özelliğinin temel değer önerisi olduğu herhangi bir ürün geliştiren geliştiriciler için.</p>
  </>
);