import { type ReactElement } from "react";

export const intro: ReactElement = (<p>n8n&rsquo;in AI Agent düğümü, herhangi bir iş akışını, arka planda LangChain tarafından desteklenen bir araç çağıran ajana dönüştürür.</p>);

export const body: ReactElement = (
  <>
    <p>n8n, adil kodlu bir iş akışı otomasyon platformudur ve AI Agent düğümü, geleneksel entegrasyon akışları ile <a href="/learn/llm">LLM</a> muhakemesi arasındaki köprüdür. Düğüm, LangChain&rsquo;in ajan yürütücüsünü sararak bir LLM&rsquo;nin bağlı düğümlerinizden hangilerini araç olarak çağıracağına karar vermesini sağlar. Slack mesajları gönderebilen, Postgres sorgulayabilen veya n8n&rsquo;in 400+ entegrasyonundan herhangi birini kullanabilen ajanlar elde edersiniz.</p>
    <h2>Ne olduğu</h2>
    <p>n8n&rsquo;in LangChain kategorisinde bir düğüm. Bir sohbet modeli, isteğe bağlı bellek ve alt düğümler olarak bir araç düğümleri listesi kabul eder. Her araç, LLM&rsquo;nin plan yapmak için kullandığı bir ad ve doğal dil açıklaması ile tanımlanır. Çıktı, herhangi bir araç döngüsünden sonra ajanın nihai yanıtıdır.</p>
    <h2>Kurulum / ayarlama</h2>
    <pre>{`# docker ile kendi kendine barındırma
docker volume create n8n_data
docker run -d -p 5678:5678 \\
  -v n8n_data:/home/node/.n8n \\
  --name n8n n8nio/n8n`}</pre>
    <h2>İlk çalıştırma</h2>
    <p><code>http://localhost:5678</code> adresini açın, sahip hesabınızı oluşturun ve yeni bir iş akışı başlatın. Bir Sohbet Tetikleyicisi, ardından bir AI Agent düğümü ve alt düğüm olarak bir OpenAI Sohbet Modeli ekleyin. HTTP İsteği veya Google Sheets gibi bir aracı Araç yuvasına sürükleyin ve ne yaptığını açıklayın.</p>
    <pre>{`$ curl -X POST http://localhost:5678/webhook/chat \\
  -d '{"chatInput":"X sayfasındaki son 5 satırı özetle"}'
{"output":"İşte 5 satır..."}`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Düz İngilizce istekler alan ve CRM, faturalama veya destek API&rsquo;lerinizi çağıran dahili bir &ldquo;ops botu&rdquo; oluşturun.</li>
      <li>Tek bir sohbet oturumunda ajanın bağlamı hatırlaması için bir Pencere Arabellek Bellek düğümü ekleyin.</li>
      <li>Bir planlayıcı ajanın uzman ajanlara yetki vermesini sağlamak için Ajan-olarak-Araç deseniyle birden çok ajanı istifleyin.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Araç açıklamaları düşündüğünüzden daha önemlidir. LLM, araçları düğüm adına göre değil, açıklama alanını okuyarak seçer, bu nedenle boş açıklamalı bir &ldquo;HTTP İsteği&rdquo; yok sayılır. Her araç için, ajanın onu ne zaman çağırması gerektiğini açıklayan bir net cümle yazın.</p>
    <p>Ajan döngüye girebilir. Aracınız, LLM&rsquo;nin anlamadığı bir hata döndürürse, maksimum yineleme sınırına ulaşana kadar sonsuza kadar yeniden deneyebilir. <code>maxIterations</code> değerini açıkça ayarlayın, araçlardan yapılandırılmış hatalar döndürün ve yeni bir ajanı ilk birkaç kez çalıştırdığınızda yürütme günlüğünü izleyin.</p>
    <h2>Kimler için</h2>
    <p>Halihazırda otomasyonlar için n8n kullanan ve üzerine LLM muhakemesi katmanı eklemek isteyen ekipler. 20 mevcut iş akışınız varsa ve bunları çağırabilecek bir ajan istiyorsanız, bu en kolay giriş yoludur &mdash; öğrenilecek yeni bir platform yok.</p>
  </>
);