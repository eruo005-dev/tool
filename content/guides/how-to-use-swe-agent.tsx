import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    SWE-agent, Princeton&rsquo;un özerk yazılım mühendisliği ajanıdır. Bir GitHub sorununu ve bir depoyu alır, ardından insan müdahalesi olmadan uçtan uca bir yama yazar, çalıştırır ve test eder.
  </p>
);

export const body: ReactElement = (
  <>
    <p>
      SWE-agent, Princeton NLP grubundan açık kaynaklı bir çerçevedir. Özel olarak tasarlanmış bir Ajan-Bilgisayar Arayüzü (ACI) aracılığıyla bir dil modelini yönlendirerek gerçek yazılım mühendisliği görevlerini çözmek için oluşturulmuştur. Popüler Python depolarındaki çözülmemiş GitHub sorunlarından oluşan bir kıyaslama olan SWE-bench'te çift haneli puanlara ulaşan ilk ajandır. Araştırmacılar ajan yeteneklerini incelemek, ekipler hata birikimlerini önceliklendirmek ve CTF oyuncuları bayrak kapmaca zorlukları için EnIGMA yan ürününü kullanır. MIT lisanslıdır ve SWE-agent yazarları tarafından sürdürülmektedir.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      Temel fikir ACI'dır: modele ham kabuk erişimi vermek yerine, SWE-agent bir modelin gerçekten iyi kullanabileceği dar, yüksek geri bildirimli komutlar (open, goto, edit, find_file, search_dir, submit) sunar. Bunları sanal alana alınmış bir Docker ortamında sarar, Claude, GPT veya LiteLLM tarafından desteklenen herhangi bir model gibi sağlayıcılara karşı ajan döngüsünü çalıştırır ve bir yama ile tam bir yörünge günlüğü yayar. Yapılandırma, istemleri, araçları ve modelleri koda dokunmadan değiştirebilmeniz için YAML dosyalarında bulunur.
    </p>

    <h2>Kurulum</h2>
    <pre>{`git clone https://github.com/SWE-agent/SWE-agent.git
cd SWE-agent
pip install --editable .
# Sanal alanda yürütme için Docker kurulu ve çalışır durumda olmalıdır`}</pre>

    <h2>İlk çalıştırma</h2>
    <p>
      Ajanı canlı bir GitHub sorununa yönlendirin ve depoyu klonlamasını, hatayı yeniden üretmesini, dosyaları düzenlemesini ve bir yama yaymasını izleyin. Önce API anahtarınızı ayarlayın.
    </p>
    <pre>{`$ export ANTHROPIC_API_KEY=sk-ant-...
$ sweagent run \\
  --agent.model.name=claude-sonnet-4 \\
  --problem_statement.github_url=https://github.com/pvlib/pvlib-python/issues/1603
[INFO] Depo /tmp/... konumuna klonlandı
[INFO] Adım 1: pvlib/iotools/psm3.py dosyasını aç
[INFO] Adım 7: gönder
[TAMAM] Yama trajectories/<run-id>/patch.diff dosyasına yazıldı`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>Toplu SWE-bench &mdash; kıyaslama numaralarını yerel olarak yeniden üretmek için veri kümesine karşı sweagent run-batch komutunu çalıştırın.</li>
      <li>Yerel sorunları düzeltin &mdash; kendi kod tabanınızdaki bir hatayı açıklayan bir metin dosyasına --problem_statement.path iletin.</li>
      <li>Modelleri değiştirin &mdash; ajan mantığını değiştirmeden Claude, GPT-4o, DeepSeek veya LiteLLM aracılığıyla yerel bir modeli denemek için YAML dosyasını düzenleyin.</li>
    </ul>

    <h2>Tuzaklar ve ipuçları</h2>
    <p>
      Maliyet gerçektir: tek bir SWE-bench örneği, öncü modellerde 50 bin&ndash;200 bin token tüketebilir ve tam veri kümesi çalıştırmaları hızla pahalılaşır. Kalibrasyon için on örnekle başlayın ve Docker ortamlarını önbelleğe alın &mdash; bunları her görev için yeniden oluşturmak, soğuk bir makinede duvar saati süresine hakim olur. Yörüngeler ayrıntılı JSON'dur; ham dosyaları izlemek yerine bunları dahili inspector_web aracıyla göz atın.
    </p>
    <p>
      Ajan, Python depoları ve pytest tarzı test paketleri için ayarlanmıştır. Python dışı diller ve özel derleme sistemleri çalışır ancak genellikle doğru kurulum ve test komutlarını içeren özel bir YAML gerektirir. Sonuç yayınlıyorsanız SWE-agent sürümünü sabitleyin &mdash; istemler iyileştirildikçe sürümler arasında davranış anlamlı şekilde değişir.
    </p>

    <h2>Kimin için olduğu</h2>
    <p>
      SWE-agent, ajan yeteneklerini kıyaslayan araştırmacılara ve Python kod tabanlarında özerk hata düzeltme konusunda meraklı mühendislik ekiplerine uygundur. İlk ciddi çalıştırmanızdan önce ACI makalesini okuyun &mdash; komutların neden bu şekilde şekillendirildiğini anlamak, sizi çerçeveyle mücadele etmekten kurtaracaktır.
    </p>
  </>
);
===END FILE===