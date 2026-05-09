import { type ReactElement } from "react";

export const intro: ReactElement = (<p>İşe yaramaz bir AI çıktısı ile gerçekten kullanışlı bir çıktı arasındaki fark neredeyse hiçbir zaman model değildir &mdash; komut istemidir.</p>);

export const body: ReactElement = (
  <>
    <p>Prompt mühendisliği kulağa korkutucu gelebilir, ancak küçük işletme sahipleri ve solo kurucular için birkaç tekrarlanabilir alışkanlığa indirgenir. ChatGPT veya Claude'a tek satırlık sorular yapıştırıp yumuşak, genel cevaplar alıyorsanız, modelin %70'ini masada bırakıyorsunuz demektir. Bu kılavuz, sürekli olarak yayınlanabilir, kullanılabilir çıktılar üreten formülü adım adım anlatıyor &mdash; doktora gerek yok.</p>

    <h2>4 parçalı formül: rol + görev + bağlam + format</h2>
    <p>Her güçlü prompt bir <em>rol</em> (AI'nın kim gibi davranması gerektiği), bir <em>görev</em> (ne yapması gerektiği), <em>bağlam</em> (durumunuzun ayrıntıları) ve bir <em>format</em> (cevabın nasıl şekillendirilmesi gerektiği) belirtir. Dört unsurdan herhangi birini kaçırırsanız kalite düşer. Bunu bir serbest çalışana brifing vermek gibi düşünün: sadece "bana bir şey yaz" demezdiniz.</p>

    <h2>Zayıf ve güçlü promptlar yan yana</h2>
    <ul>
      <li>Zayıf: "Bir soğuk e-posta yaz." Güçlü: "Sen bir B2B SaaS satış temsilcisisin. 50 kişilik bir ajansın pazarlama müdürüne 90 kelimelik bir soğuk e-posta yaz. Açılış: aracımız raporlama süresini %60 azaltıyor. Format: konu satırı + 3 kısa paragraf + tek harekete geçirici mesaj."</li>
      <li>Zayıf: "Bunu özetle." Güçlü: "Bu müşteri görüşmesi kaydını meşgul bir CEO için özetle. Döndür: 3 madde kazanım, 3 madde endişe, bir önerilen sonraki adım."</li>
      <li>Zayıf: "Ürünümü adlandırmama yardım et." Güçlü: "Sen bir marka stratejistisin. Kentsel y kuşağını hedefleyen bir köpek gezdirme uygulaması için 10 isim öner. Ton: sıcak ve eğlenceli. 'Pat' veya 'köpek yavrusu' içeren her şeyden kaçının. Her biri için .com kullanılabilirliği tahminini ekle."</li>
    </ul>

    <h2><a href="/learn/system-prompt">Sistem promptu</a> ve kullanıcı promptu</h2>
    <p>Sistem promptu, kişiliği ve değişmeyen kuralları belirler &mdash; AI'nın kim olduğu, asla ne yapmadığı, tüm oturum boyunca koruduğu ton. Kullanıcı promptu ise her seferinde gönderdiğiniz belirli istektir. Özel bir GPT veya Claude Projesi oluşturuyorsanız, dayanıklı şeyleri (stil kılavuzu, marka sesi, yasaklı kelimeler) sistem promptuna önceden yükleyin, böylece her mesajda kendinizi tekrarlamazsınız.</p>

    <h2>Düşünce zinciri ve az örnekli öğrenme</h2>
    <p>Düşünce zinciri, modelden "adım adım düşünmesini" veya "son cevabı vermeden önce bunu yüksek sesle çalışmasını" istemek anlamına gelir. Matematik, mantık veya çok adımlı akıl yürütme içeren her şeyde doğruluğu gözle görülür şekilde artırır. Az örnekli öğrenme, gerçek görevden önce modele 2-3 girdi &rarr; istenen çıktı örneği göstermek anlamına gelir. Etiketleme, sınıflandırma veya biçimlendirme gibi tekrarlayan her şey için az örnekli öğrenme, herhangi bir miktardaki talimattan daha iyidir.</p>

    <h2><a href="/learn/temperature-ai">Sıcaklık</a>: 0 vs 0.7</h2>
    <p>Sıcaklık rastgeleliği kontrol eder. Belirleyici, gerçekçi, tekrarlanabilir çıktı istediğinizde &mdash; veri çıkarma, kod, özetler, yanlışın sıkıcıdan daha kötü olduğu her şey &mdash; 0'a (veya yakınına) ayarlayın. Yaratıcılık istediğinizde &mdash; beyin fırtınaları, sloganlar, kurgu, varyant oluşturma &mdash; 0.7-1.0'a çıkarın. Çoğu sohbet arayüzü sıcaklığı gizler, ancak API ve çoğu oyun alanı onu gösterir.</p>

    <h2>Yineleyin, kazanımları kaydedin, bir kütüphane oluşturun</h2>
    <p>Promptlara kod gibi davranın. Biri işe yaradığında, onu bir Notion sayfasına, Google Dokümanına veya özel bir prompt kütüphanesi aracına kaydedin. Adlandırın, etiketleyin, hangi model ve hangi tarih olduğunu not edin. Gelecek ay aynı şeye ihtiyacınız olduğunda, onu yeniden icat etmeyeceksiniz. Bunu yapan solo kurucular zamanla kişisel bir hendek oluştururlar.</p>

    <h2>Yaygın hatalar</h2>
    <p>Belirsiz talimatlar ("daha iyi yap"), tek bir prompta 10 görev doldurmak ve göstermek yerine anlatmak. Her üçünün de çözümü aynıdır: modele "iyi"nin neye benzediğine dair bir örnek göstermek, onu sıfatlarla tanımlamak yerine. Bu, gösterme-anlatma kuralıdır ve çoğu insanın bugün yapabileceği en büyük tek yükseltmedir.</p>

    <h2>Alt satır</h2>
    <p>Rol + görev + bağlam + format kullanın, örnekler gösterin, sıcaklığı bilinçli seçin ve işe yarayanı kaydedin. Bunu bir ay yapın ve dokunduğunuz herhangi bir modelde kullanıcıların %95'ini geçeceksiniz.</p>
  </>
);