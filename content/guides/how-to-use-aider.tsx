import type { ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Aider, projenizdeki dosyaları düzenleyen ve değişiklikleri doğrudan git'e aktaran bir çift-programlama CLI aracıdır. Bir projenin içinden çalıştırılır, ona sade İngilizce bir hedef verilir ve her seferinde bir değişiklik önerir &mdash; kabul edilen her değişiklik kendi git commit'i olarak kaydedilir.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Aider aslında ne yapar</h2>
    <p>
      Aider, sohbete eklediğiniz dosyaları bir <a href="/learn/llm">LLM</a>'nin bağlamına yükler, ardından modelden, modeliniz için anlaşılan düzenleme formatına bağlı olarak birleşik bir diff veya tüm dosyanın yeniden yazılmasını üretmesini ister. Kabul ettiğinizde, Aider düzenlemeyi uygular ve yazdığı bir mesajla <code>git commit</code> çalıştırır. Geri almak sadece <code>git reset --hard HEAD~1</code> komutudur, bu nedenle çözülmesi gereken sihirli bir durum yoktur.
    </p>

    <h2>Kurulum</h2>
    <pre>{`python -m pip install aider-install
aider-install`}</pre>
    <p>
      Yükleyici, Aider'i kendi izole ortamına koyar, böylece proje bağımlılıklarınızla çatışmaz. İlk çalıştırmadan önce kabuk profilinize <code>ANTHROPIC_API_KEY</code> veya <code>OPENAI_API_KEY</code> değişkenini ayarlayın.
    </p>

    <h2>İlk oturum</h2>
    <pre>{`cd my-project
aider --model sonnet src/handlers.py src/handlers_test.py`}</pre>
    <p>
      İstem içinde değişikliği tanımlayın: &ldquo;fetch_user işleyicisine üstel geri çekilme ile yeniden deneme ekleyin ve mevcut testi üç yeniden denemeyi kapsayacak şekilde genişletin.&rdquo; Aider her iki dosyayı da düzenleyecek, eğer ayarladıysanız test komutunu çalıştıracak ve commit yapacak. Dosya kümesini yönetmek için <code>/add</code> ve <code>/drop</code>, son commit'i geri almak için <code>/undo</code> ve düzenleme yapmadan tartışmak istediğinizde <code>/ask</code> komutlarını kullanın.
    </p>

    <h2>Model seçimi</h2>
    <p>
      Claude Sonnet ve GPT sınıfı öncü modeller, gerçek kod üzerinde tüm dosya düzenlemeleri için en uygun noktadır. Aider'in kendi liderlik tablosu en iyi canlı referanstır &mdash; sadece ham kod kalitesini değil, aynı zamanda pratikte ajanları bozan düzenleme formatı uyumluluğunu da ölçer. Maliyet hassasiyeti olan işler için, güçlü bir akıl yürütücünün plan yapması ve daha ucuz bir modelin yazması için bir <code>--architect</code> artı <code>--editor-model</code> ayrımı kullanın.
    </p>

    <h2>Yapılandırma tuzakları</h2>
    <p>
      Depo köküne bir <code>.aider.conf.yml</code> dosyası koyarak model, düzenleme formatı, lint komutu ve test komutunu sabitleyin. Aider, her düzenlemeden sonra linter'ınızı ve testlerinizi çalıştırır ve başarısızlıkları bir sonraki tura geri besler &mdash; bu en büyük kalite kazancıdır ve çoğu kullanıcı bunu atlar. Sohbet geçmişi ve önbelleğin commit'lere sızmasını önlemek için <code>.gitignore</code> dosyasına <code>.aider*</code> ekleyin.
    </p>

    <h2>Aider'in parladığı durumlar</h2>
    <p>
      Atomik commit'ler ve temiz bir diff izi istediğiniz, iki ila altı dosya arasındaki sınırlı değişiklikler. Bir testle çoğaltılabilen hata düzeltmeleri idealdir: başarısız olan testi yazın, Aider'e onu geçirmesini söyleyin ve yinelemesini izleyin.
    </p>

    <h2>Ne zaman kullanılmamalı</h2>
    <p>
      Henüz bir depo yapınız olmayan yeni başlangıç uygulamaları &mdash; Aider, bağlama hangi dosyaları koyacağınızı bildiğinizi varsayar ve geri alma yeteneği IDE ile entegre ajanlardan daha zayıftır. Ayrıca &ldquo;tüm depoyu oku ve bana kimlik doğrulamanın nasıl çalıştığını söyle&rdquo; türü keşifler için kullanmaktan kaçının; Cline veya Cursor gibi araçlar kod tabanını indeksler ve daha hızlı yanıt verir.
    </p>
  </>
);