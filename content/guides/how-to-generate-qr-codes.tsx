import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      QR kodu oluşturmak on saniye sürer. Menüde, kartvizitte veya posterde
      güvenilir şekilde taranabilen bir kod oluşturmak ise bir dakikanızı alır;
      kodun içinde ne olduğunu, ne kadar büyük basılacağını ve nerede
      kullanılacağını düşünmeniz gerekir. O bir dakikayı atlarsanız, konferans
      rozetini kimsenin tarayamadığı kişi olursunuz. İşte bundan nasıl
      kaçınacağınız.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Bir QR kodunun gerçekte neyi kodladığı</h2>
    <p>
      QR kodu, metin depolayan iki boyutlu bir barkoddur. Herhangi bir metin —
      bir URL, telefon numarası, Wi-Fi şifresi, düz bir cümle. Önemli olan şey:
      ne kadar çok karakter kodlarsanız, kod o kadar yoğun hale gelir ve küçük
      boyutlarda veya kavisli yüzeylerde taranması o kadar zorlaşır. Kısa bir
      20 karakterlik URL, bir oda boyunca temiz bir şekilde taranır. UTM
      parametreleriyle dolu 200 karakterlik bir izleme URL'si, mikroskobik
      noktalardan oluşan bir ızgaraya dönüşür.
    </p>

    <h2>Önce URL'yi kısaltın</h2>
    <p>
      Bir bağlantı kodluyorsanız, kendinize bir iyilik yapın ve oluşturmadan
      önce kısaltın. Bir Bitly bağlantısı, markalı kısa bir alan adı veya kendi
      sitenizde temiz bir özel kısa bağlantı — üçü de kodu seyrek ve taranabilir
      tutar. İkinci bir faydası daha vardır: hedef değişirse, kısa bir URL
      yönlendirir, ancak uzun orijinali gösteren bir QR kodu basılı materyale
      sonsuza kadar kilitlenir.
    </p>
    <p>
      <a href="/tools/qr-code-generator">QR kod oluşturucumuz</a> herhangi bir
      dize için bir kod üretir, ancak kodunuzun kalitesi, ona verdiğiniz URL'nin
      kalitesiyle başlar.
    </p>

    <h2>Hata düzeltme seviyeleri</h2>
    <p>
      QR kodlarının dört yedeklilik seviyesi vardır: L (%7), M (%15), Q (%25), H
      (%30). Daha yüksek seviyeler, kodun hasara — bir leke, ortada bir logo,
      bir katlanma — dayanmasını sağlar, ancak aynı veri için kodu daha yoğun
      hale getirir.
    </p>
    <ul>
      <li>
        <strong>L</strong>: temiz dijital bağlamlar (ekranda, e-postada).
      </li>
      <li>
        <strong>M</strong>: çoğu baskı işi için makul varsayılan.
      </li>
      <li>
        <strong>Q</strong>: dış mekan tabelaları, kirlenebilecek veya
        aşınabilecek her yer.
      </li>
      <li>
        <strong>H</strong>: kodun ortasına bir logo koymak istediğinizde — logo
        desenin bir kısmını kaplar ve H bunu kaldırabilir.
      </li>
    </ul>

    <h2>Minimum baskı boyutu</h2>
    <p>
      Makul bir temel: hata düzeltme seviyesi M ve kısa bir URL (30 karakterin
      altında) ile, 1 inç karelik bir baskı, 10-12 inç uzaktan tarama için
      güvenilir şekilde çalışır. Daha uzun URL'ler veya daha yüksek hata
      düzeltme seviyeleri bunu artırır. Bir oda boyunca taranması amaçlanan bir
      poster için, orantılı olarak ölçeklendirin — temel bir kural, kodun
      izleme mesafesinin yaklaşık 1/10'u kadar olması gerektiğidir.
    </p>
    <p>
      Daha küçük her zaman daha risklidir. Kod bir kartvizite sığması
      gerekiyorsa, URL'yi çok kısa tutun ve sadece ekranda değil, gerçek kağıt
      üzerinde test edin.
    </p>

    <h2>2-3 telefonda test edin</h2>
    <p>
      Herhangi bir şeyden 500 tane basmadan önce, kodu en az iki farklı
      telefonla — ideal olarak bir iPhone, bir Android ve daha eski bir cihaz —
      tarayın. İnsanların gerçekte kullanacağı mesafe ve açıdan tarayın.
      Ekranda iyi görünen kodların yaklaşık 10'da 1'i, gerçek bir telefonda
      gerçek ışıkta başarısız olur. Bunu baskıdan sonra öğrenmek pahalıdır.
    </p>

    <h2>Gerçek hayatta QR kodlarını ne bozar?</h2>
    <p>
      Taramaları her şeyden çok bozan üç şey vardır. <strong>Parlak
      kaplamalar</strong>: restoran ışığı altında lamine edilmiş bir menü,
      genellikle kodun olduğu yerde yansıma yapar. Mat yüzeyler çok daha iyi
      taranır. <strong>Kavisli yüzeyler</strong>: bir kahve fincanı veya su
      şişesi üzerindeki kod, yüzey sarıldığında bozulur; kodu en düz yüzeyde
      tutun. <strong>Düşük kontrast</strong>: siyah bir arka plan üzerinde koyu
      gri bir kod şık görünür ancak taranmaz. Koyu kod, açık arka plan, nokta.
      Renkleri tersine çevirmek teoride işe yarar ancak birçok tarama uygulaması
      bunu desteklemez.
    </p>

    <h2>Bir alışkanlık daha</h2>
    <p>
      QR kodunun altına küçük harflerle URL'yi yazdırın. Bazı telefonlar
      başarısız olur, bazı insanlar nasıl tarayacağını bilmez ve kısa bir URL
      bir saniyelik bir yedek çözümdür. Bir QR kodu bir URL'yi tamamlamalı, onun
      yerini almamalıdır.
    </p>
  </>
);