export const intro = (
  <>
    <p>
      Çoğu geliştirici yaklaşık altı git komutu kullanır ve gerisini doğaçlama yapar. Bu, bir şeyler
      ters gidip de, bağlanmamış değişikliklerle dolu bir detached HEAD ile karşı karşıya kalana ve
      <code>reset --hard</code> komutunun iki saatlik çalışmayı silip silmeyeceğini merak edene kadar
      gayet iyi çalışır.
    </p>
    <p>
      Bu rehber, günlük hayatta gerçekten işe yarayan komutları, ne yapmaya çalıştığınıza göre
      düzenlenmiş olarak kapsar — ayrıca her mühendisin bir noktada ihtiyaç duyduğu &ldquo;ah&rdquo;
      kurtarma komutlarını da içerir.
    </p>
  </>
);

export const body = (
  <>
    <h2>Günlük kullanım komutları</h2>

    <h3><code>git status</code></h3>
    <p>
      Diğer tüm komutlardan daha fazla çalıştırdığınız komut. Dalı, aşamalı ve aşamasız
      değişiklikleri ve izlenmeyen dosyaları gösterir. Şüpheye düştüğünüzde — <code>git status</code>
      çalıştırın.
    </p>

    <h3><code>git add -p</code></h3>
    <p>
      Etkileşimli aşamalandırma. Her değişiklikte adım adım ilerler ve aşamalandırılıp
      aşamalandırılmayacağını sorar. Klasik &ldquo;console.log'larımı yanlışlıkla commit ettim&rdquo;
      hatasını önler. Varsayılan olarak <code>git add .</code> yerine bunu kullanın.
    </p>

    <h3><code>git commit -m &quot;mesaj&quot;</code></h3>
    <p>
      Temel kaydetme. Açık mesajlar yazın — emir kipi (&ldquo;Eklendi&rdquo; değil, &ldquo;Ekle&rdquo;),
      kısa ilk satır, boş satır, ardından gerekirse detaylar.
    </p>

    <h3><code>git commit --amend</code></h3>
    <p>
      Son commit'i düzenleyin. Yazım hatası düzeltmeleri veya unutulan bir dosyayı eklemek için
      harikadır. Paylaşılan dallara gönderdiğiniz commit'leri değiştirmeyin — geçmişi yeniden yazar.
    </p>

    <h3><code>git log --oneline --graph --decorate --all</code></h3>
    <p>
      <code>git log</code>'dan gerçekten istediğiniz görünüm. Commit başına bir satır, dalların ve
      birleştirmelerin ASCII grafiği, tüm referansları gösterir. <code>git lg</code> olarak takma ad
      verin.
    </p>

    <h3><code>git diff</code> ve <code>git diff --staged</code></h3>
    <p>
      Aşamasız değişiklikleri (<code>git diff</code>) ve aşamalı değişiklikleri (<code>git diff
      --staged</code>) görüntüleyin. Her commit'ten önce diff'i okuyun — hataları ne sıklıkla
      yakaladığına şaşıracaksınız.
    </p>

    <h2>Dallandırma</h2>

    <h3><code>git switch -c feature/name</code></h3>
    <p>
      Yeni bir dal oluşturup ona geçmenin modern yolu (<code>git checkout -b</code> yerine geçer).
      Mevcut dallar arasında geçiş yapmak için <code>git switch dal-adi</code> kullanın.
    </p>

    <h3><code>git branch -vv</code></h3>
    <p>
      Dalları, izleme dalları ve ne kadar ileride/geride olduklarıyla birlikte listeleyin. Birden
      fazla özellik dalı üzerinde çalışırken kullanışlıdır.
    </p>

    <h3><code>git branch -d dal-adi</code></h3>
    <p>
      Birleştirilmiş bir dalı silin. Emin olduğunuzda <code>-D</code> kullanın — birleştirilmemiş
      olsa bile silmeye zorlar.
    </p>

    <h2>Senkronizasyon</h2>

    <h3><code>git fetch</code></h3>
    <p>
      Birleştirmeden uzak referansları indirin. Entegre etmeden önce origin'de ne olduğunu kontrol
      edin. Ne değiştiğini bilmek istediğinizde <code>git pull</code>'dan daha güvenlidir.
    </p>

    <h3><code>git pull --rebase</code></h3>
    <p>
      Yerel commit'lerinizi getirir ve origin'in üzerine yeniden oynatır. Geçmişi doğrusal tutar,
      varsayılan <code>git pull</code>'un &ldquo;birleştirme commit spam&rdquo;'inden kaçınır.
      <code>git config --global pull.rebase true</code> ile varsayılan olarak ayarlayın.
    </p>

    <h3><code>git push</code> ve <code>git push -u origin dal</code></h3>
    <p>
      Standart push. <code>-u</code> ilk push'ta upstream'i ayarlar, böylece sonraki push'lar nereye
      gideceğini bilir.
    </p>

    <h2>Geçmiş ve yeniden yazma</h2>

    <h3><code>git rebase -i HEAD~N</code></h3>
    <p>
      Etkileşimli rebase — temizlik aracı. Push yapmadan önce son N commit'i yeniden sıralayın,
      birleştirin, düzenleyin veya yeniden adlandırın. Dağınık WIP commit'lerini temiz bir PR
      geçmişine dönüştürmek için gereklidir.
    </p>

    <h3><code>git cherry-pick &lt;sha&gt;</code></h3>
    <p>
      Başka bir daldan belirli bir commit'i uygulayın. Geri kalanına ihtiyaç duymadan bir özellik
      dalından tek bir düzeltmeyi almak için harikadır.
    </p>

    <h3><code>git stash</code> / <code>git stash pop</code></h3>
    <p>
      Commit edilmemiş değişiklikleri geçici olarak kaydedin. Acilen dal değiştirmeniz gerektiğinde
      kullanışlıdır. Periyodik olarak <code>git stash list</code> kontrol edin — stash'ler unutulma
      eğilimindedir.
    </p>

    <h2>Kurtarma (&ldquo;ah&rdquo; komutları)</h2>

    <h3><code>git reflog</code></h3>
    <p>
      HEAD hareketlerinin geçmişi — reset'ler ve checkout'lar dahil yaptığınız her şeyi gösterir.
      Çalışmanızı kaybettiğinizi düşünüyorsanız, bakılacak ilk yer burasıdır. Git'te, 90 gün
      içinde hareket ettiyseniz neredeyse hiçbir şey gerçekten kaybolmaz.
    </p>

    <h3><code>git reset --soft HEAD~1</code></h3>
    <p>
      Son commit'i geri alır ancak değişiklikleri aşamalı tutar. Güvenli &ldquo;ah, şu commit'i
      yeniden yapayım&rdquo; komutu.
    </p>

    <h3><code>git reset --hard HEAD</code></h3>
    <p>
      Nükleer seçenek: tüm commit edilmemiş değişiklikleri atar. Yalnızca çalışmayı atmak
      istediğinizden <em>emin</em> olduğunuzda kullanın. Önce <code>git status</code> ile üç kez
      kontrol edin.
    </p>

    <h3><code>git revert &lt;sha&gt;</code></h3>
    <p>
      Önceki bir commit'i geri alan yeni bir commit oluşturun. Geçmişi yeniden yazmadığı için
      paylaşılan dallar için güvenlidir. Ana dalda <code>reset</code> yerine bunu kullanın.
    </p>

    <h2>Bonus: hayat kurtaran yapılandırma</h2>
    <p>
      Bunları bir kez ayarlayın ve her gün faydalanın: <code>git config --global pull.rebase true</code>,{" "}
      <code>git config --global push.autoSetupRemote true</code>,{" "}
      <code>git config --global init.defaultBranch main</code>,{" "}
      <code>git config --global rerere.enabled true</code>.{" "}
      <a href="/guides/how-to-write-clean-code">temiz kod rehberimiz</a> ile eşleştirin — temiz
      commit'ler temiz kodla birlikte gelir.
    </p>
  </>
);