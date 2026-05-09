/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      r/MachineLearning, r/Entrepreneur ve çeşitli BT liderlik Slack gruplarındaki yapay zeka uygulama sonuç raporları 2026'da dikkat çekici şekilde tutarlı. Aynı birkaç hata tekrar tekrar karşımıza çıkıyor. Bunların hiçbiri teknik değil — her biri, yapay zeka ekiplerinin sürekli yaptığı bir planlama, kapsam belirleme veya paydaş uyumu başarısızlığı.
    </p>
    <p>
      İşte sahada test edilmiş liste ve her hatanın sizi ısırmadan önce ortaya çıkan uyarı işaretleri.
    </p>
  </>
);

export const toc = [
  { id: "first-step", label: "UYGULAMADAN ÖNCE ne yapmalı" },
  { id: "mistakes", label: "En yaygın 8 hata" },
  { id: "success", label: "İşe yaradığını nasıl anlarsınız" },
  { id: "growth", label: "Yapay zeka işimin büyümesine gerçekten yardımcı olacak mı?" },
];

export const body = (
  <>
    <h2 id="first-step">İşletmenizde yapay zeka uygulamadan ÖNCE ne yapmalısınız</h2>
    <p>
      İlk yapılacak şey bir satıcı seçmek veya ekibinizi eğitmek değil. Taşımaya çalıştığınız metriği tanımlamaktır. Yapay zeka projenizin başarılı olup olmayacağını belirleyen en büyük faktör: başlamadan önce başarıyı tanımladınız mı?
    </p>
    <p>
      Spesifik olarak, herhangi bir yapay zeka çalışması başlamadan önce şunları yazın:
    </p>
    <ul>
      <li>
        <strong>Metrik.</strong> Müşteri desteği yanıt süresi, belge işleme verimi, satış temsilcisi kapasitesi vb. İşletmenizin halihazırda takip ettiği belirli bir sayı.
      </li>
      <li>
        <strong>Mevcut temel değer.</strong> Metrik bugün ne durumda? Son 90 gün, tahminler değil.
      </li>
      <li>
        <strong>Hedef.</strong> Bu projeyi başarılı kılacak sayı nedir? Spesifik olun. &ldquo;Çok daha iyi&rdquo; bir hedef değildir.
      </li>
      <li>
        <strong>Son tarih.</strong> Ne zamana kadar? Son tarihsiz yapay zeka deneyleri sonsuza kadar sürer ve servete mal olur.
      </li>
      <li>
        <strong>Durdurma anahtarı.</strong> Hangi sayı, hangi tarihe kadar, bu projeyi iptal edeceğiniz anlamına gelir?
      </li>
    </ul>
    <p>
      Bu beş satır yazılmadan, teknik olarak başarılı bir yapay zeka dağıtımı bile başarısızlık gibi hissettirecektir çünkü kimse işe yarayıp yaramadığı konusunda anlaşamaz. Bunlarla birlikte, teknik olarak <em>marjinal</em> bir dağıtım net bir kazanç olabilir.
    </p>

    <h2 id="mistakes">En yaygın 8 hata</h2>

    <h3>1. Yanlış sorunu çözmek</h3>
    <p>
      Klasik: Bir ekip, ihtiyaç duyduklarını düşündükleri şeyi yapan bir yapay zeka sistemi oluşturmak için 4 ay harcar, ancak gerçek darboğazın başka bir yerde olduğunu keşfeder. Teşhis: Kapsam belirlemeden önce kullanıcının uçtan uca iş akışını inceleyin. Yapay zekanın hangi belirli adımın yerini aldığını bir cümleyle açıklayamıyorsanız, yeterince kapsam belirlememişsinizdir.
    </p>

    <h3>2. Hız önemliyken doğruluk için optimize etmek</h3>
    <p>
      Biraz daha az doğru ancak 10 kat daha hızlı bir sistem kullanılacaktır; sorgu başına 30 saniye süren mükemmel doğruluktaki bir sistem kullanılmayacaktır. Belge işleme ve müşteri desteği dağıtımlarında yaygındır. Teşhis: Modeli seçmeden önce kullanıcılardan sabır eşiklerini tanımlamalarını isteyin (&ldquo;5 saniye iyi, 30 saniye çok yavaş&rdquo;).
    </p>

    <h3>3. Değerlendirme düzeneğini atlamak</h3>
    <p>
      Değerlendirme düzeneği, herhangi bir model sürümüne karşı çalıştırabileceğiniz, beklenen çıktıları olan yapılandırılmış bir test setidir. Bir tane olmadan, öznel hisler olmadan &ldquo;GPT-4o burada Claude'dan daha mı iyi?&rdquo; sorusuna cevap veremezsiniz. Gördüğümüz her başarılı dağıtımın bir değerlendirme düzeneği vardır. Başarısız olanların çoğunda yoktur.
    </p>

    <h3>4. Veri kalitesini çok geç olana kadar görmezden gelmek</h3>
    <p>
      &ldquo;Çöp girer, çöp çıkar&rdquo; geleneksel yazılımdan bile daha doğrudur yapay zeka için. Müşteri destek biletleriniz tutarsız bir şekilde etiketlenmişse, hiçbir prompt mühendisliği alt akış modelini düzeltemez. Model seçiminden önce veri kalitesini denetleyin, sonradan değil.
    </p>

    <h3>5. Yapay zekayı kur ve unut olarak ele almak</h3>
    <p>
      Modeller kayar. Satıcılar yeni sürümler yayınlar. Üretimde uç durumlar ortaya çıkar. Yapay zeka sistemleri sürekli bakım gerektirir — tipik olarak lansmandan sonra önemli her dağıtım için 0,5–1 tam zamanlı çalışan. &ldquo;İnşa et ve git&rdquo; taahhütlerini kapsamlandıran ekipler 6 ay içinde pişman olur.
    </p>

    <h3>6. Kullanıcılara yapay zeka kullanımı hakkında bilgi vermemek</h3>
    <p>
      Kullanıcılar konuşma sırasında yapay zekanın kullanımda olduğunu keşfeder; kendilerini aldatılmış hisseder; meslektaşlarına anlatır; güven çöker. Yapay zeka katılımını baştan ve yüksek sesle açıklayın. Lansman öncesi birkaç saatlik iletişim çalışması, aylarca sürecek güven yeniden inşasını kurtarır.
    </p>

    <h3>7. Operasyon ve izleme için düşük bütçe ayırmak</h3>
    <p>
      Çoğu ekip model + entegrasyon maliyetini bütçeler ve şunları unutur: API hız sınırları, gözlemlenebilirlik araçları, prompt enjeksiyon saldırılarından kaynaklanan maliyet artışları, günlük depolama, değerlendirme düzeneği hesaplaması. Gerçekçi: Toplam proje maliyetinin %20–40'ı ilk yıl boyunca operasyonlara gider. Buna göre bütçe yapın.
    </p>

    <h3>8. Alternatifler sunmadan bir paydaşın veto etmesine izin vermek</h3>
    <p>
      Hukuk, güvenlik veya uyumluluk genellikle geçerli endişeler dile getirir — ancak ekip alternatiflerle geri dönmezse bu endişeler projeleri süresiz olarak durdurabilir. Bir paydaş bir endişe dile getirdiğinde 3 yol sunun: önerilen yaklaşım, daha muhafazakar bir versiyon ve endişenin gerçek olduğunu doğrulamanın bir yolu. Duran fikir birliği sessiz proje katilidir.
    </p>

    <h2 id="success">Yapay zeka danışmanlığının / uygulamasının işe yarayıp yaramadığını nasıl anlarsınız</h2>
    <p>
      Yolunda giden ve gitmeyen taahhütleri ayırt eden 6 aylık kontrol noktaları:
    </p>
    <ul>
      <li>
        <strong>2. Ay:</strong> Değerlendirme düzeneği hazır. Temel metrik ölçüldü. İlk prototip kullanıcıların elinde.
      </li>
      <li>
        <strong>3. Ay:</strong> Model/prompt'un 2. yinelemesi yayınlandı. Kullanıcı geri bildirimi toplanıyor. Etkileşim başına maliyet ölçülüyor.
      </li>
      <li>
        <strong>4. Ay:</strong> Kullanıcıların bir alt kümesine üretim dağıtımı. İzleme + maliyet panoları canlı. Orijinal metrik üzerinde ilk ölçülebilir etki.
      </li>
      <li>
        <strong>6. Ay:</strong> Tam kullanıma sunma. Orijinal metrik, önceden tanımlanmış hedefe karşı ölçülebilir bir miktarda iyileşti. Bilgi aktarımı çoğunlukla tamamlandı; ekibiniz danışman olmadan yineleme yapabilir.
      </li>
    </ul>
    <p>
      4. ayda kimseye üretim dağıtımı yoksa, proje muhtemelen yolunda gitmiyordur. 6. ay 12. aya dönüşmeden önce kapsam ve zaman çizelgesi hakkında zor bir konuşma yapın.
    </p>

    <h2 id="growth">Yapay zeka danışmanlığı işimin büyümesine gerçekten yardımcı olacak mı?</h2>
    <p>
      Dürüst cevap: tamamen kullanım durumu uyumuna bağlıdır. Yapay zeka şunlarda mükemmeldir:
    </p>
    <ul>
      <li>Büyük miktarlardaki yapılandırılmamış metni özetleme veya ondan çıkarım yapma</li>
      <li>İnsan incelemesi için taslak içerik (e-postalar, belgeler, kod) oluşturma</li>
      <li>Öğrenilmiş kalıplara dayalı olarak girdileri puanlama veya yönlendirme</li>
      <li>Yapılandırılmış veriler üzerinden konuşmaya dayalı arayüzler</li>
      <li>Ölçekte anormallikleri tespit etme veya kalıpları ortaya çıkarma</li>
    </ul>
    <p>
      Yapay zeka henüz şunlarda mükemmel değildir:
    </p>
    <ul>
      <li>Karmaşık alanlarda çok adımlı akıl yürütme gerektiren kararlar</li>
      <li>İnsan incelemesi olmadan %100 doğruluk gerektiren herhangi bir şey</li>
      <li>Çok küçük eğitim verisi + yüksek riskli görevler</li>
      <li>Dinamik ortamlarda uzun süre çalışan otonom ajanlar</li>
    </ul>
    <p>
      Kullanım durumunuzu ilk listeyle eşleştirin ve büyüme göreceksiniz. İkinciyle eşleştirin ve başarısız taahhüt istatistiğinde olacaksınız. Dürüst test: kendinize sorun, &ldquo;Akıllı ama kıdemsiz bir çalışan bunu doğru talimatlarla yapabilir mi?&rdquo; Cevap evet ise, yapay zeka muhtemelen yapabilir. Hayır ise, yapay zeka muhtemelen yapamaz — henüz.
    </p>
  </>
);

export const cta = {
  label: "İmzalamadan önce yapay zeka satıcınızı puanlayın",
  targetSlug: "ai-tool-evaluation-scorecard",
};

export const faq = [
  {
    q: "İşletmemde yapay zeka uygulamadan önce yapmam gereken ilk şey nedir?",
    a: "Herhangi bir satıcı görüşmesinden önce başarı metriğini, temel değeri, hedefi, son tarihi ve durdurma anahtarını yazılı olarak tanımlayın. Proje başarısının en büyük belirleyicisi, başlamadan önce 'başarı'nın ne anlama geldiğini yazıp yazmadığınızdır.",
  },
  {
    q: "Yapay zeka uygularken en yaygın hatalar nelerdir?",
    a: "Yanlış sorunu çözmek (gerçek darboğaz için inşa edin), hız önemliyken doğruluk için optimize etmek, değerlendirme düzeneğini atlamak, veri kalitesini görmezden gelmek, yapay zekayı kur ve unut olarak ele almak, yapay zekayı kullanıcılara açıklamamak, operasyon + izleme için düşük bütçe ayırmak ve alternatifler sunmadan bir paydaşın veto etmesine izin vermek.",
  },
  {
    q: "Yapay zeka danışmanlığının işimin büyümesine gerçekten yardımcı olup olmayacağını nasıl anlarım?",
    a: "Kullanım durumunuzu yapay zekanın gerçekten güçlü olduğu alanlarla (özetleme, sınıflandırma, çıkarım, konuşmaya dayalı arayüzler, anormallik tespiti) eşleştirin ve henüz güçlü olmadığı alanlardan (çok adımlı akıl yürütme, %100 doğruluk gerektiren kararlar, yüksek riskli çok küçük eğitim verisi) kaçının. Net talimatlarla akıllı ama kıdemsiz bir çalışan görevi yapabiliyorsa, yapay zeka da muhtemelen yapabilir.",
  },
  {
    q: "Bir yapay zeka taahhüdü için 6 ayda başarı neye benzer?",
    a: "2. Ay: değerlendirme düzeneği + temel değer + prototip. 3. Ay: 2. yineleme yayınlandı + kullanıcı geri bildirimi. 4. Ay: kullanıcıların alt kümesine üretim + izleme. 6. Ay: tam kullanıma sunma + hedefe karşı ölçülebilir iyileşme + bilgi aktarımı çoğunlukla tamamlandı. 4. ayda üretimde hiçbir şey yoksa, proje yolunda gitmiyordur.",
  },
];