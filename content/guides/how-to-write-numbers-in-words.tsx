import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Sayıları kelimelerle yazmak, çek yazma, yasal sözleşmeler veya bölgeye özel biçimlendirme ile karşılaşana kadar bir okul alıştırması gibi görünür.
      &ldquo;1.234,56&rdquo; bir çekte &ldquo;bin iki yüz otuz dört ve 56/100 dolar&rdquo; olur &mdash; ve her
      bankanın nerede tire kullanılacağı, ondalık kısmın nasıl ele alınacağı ve boş alana ne yazılacağı konusunda ince kuralları vardır. Sıra sayıları başka bir katman ekler (birinci, ikinci, üçüncü) ve Amerikan ile İngiliz İngilizcesi arasındaki milyar/milyar ayrımı, uluslararası belgelerde altı haneli yanlış anlamalara neden olur. Bu kılavuz, asıl ve sıra sayı dönüşümünü, çek yazma kurallarını, kısa ve uzun ölçeği ve negatif ile ondalık değerlerin nasıl ele alındığını kapsar.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>Asıl sayılar</h2>
    <p>
      Standart sayma kelimeleri. Bir, iki, üç&hellip; on, on bir&hellip;
      yirmi, yirmi bir. Kurallar:
    </p>
    <ul>
      <li>21&ndash;99 arası sayılar (onun katı olmayanlar) tire ile yazılır: yirmi bir, altmış yedi</li>
      <li>Yüzler, binler, milyonlar isteğe bağlı olarak &ldquo;ve&rdquo; kullanır (Amerikan kullanımı kaldırır; İngiliz kullanımı korur)</li>
      <li>Kelime formunda virgül yoktur</li>
    </ul>
    <pre>{`1234 -&gt; "bin iki yüz otuz dört"
     -&gt; "bin iki yüz ve otuz dört" (UK)`}</pre>

    <h2>Sıra sayıları</h2>
    <p>
      Sıra bildiren kelimeler. Birinci, ikinci, üçüncü, dördüncü&hellip; Çoğu, asıl sayıya -ncı eklenerek oluşturulur, birkaç düzensiz olanı vardır:
    </p>
    <ul>
      <li>1. = birinci, 2. = ikinci, 3. = üçüncü (düzensiz)</li>
      <li>5. = beşinci (&ldquo;ş&rdquo; değişimi)</li>
      <li>8. = sekizinci (bir &ldquo;z&rdquo;)</li>
      <li>9. = dokuzuncu (&ldquo;u&rdquo; yok)</li>
      <li>12. = on ikinci (bir &ldquo;i&rdquo;)</li>
      <li>20. = yirminci (&ldquo;i&rdquo; &rarr; &ldquo;inci&rdquo;)</li>
    </ul>
    <p>
      Bileşik sıra sayılarında sıra eki yalnızca son kısma gelir:
      yirmi birinci, yüz yirmi üçüncü.
    </p>

    <h2>Çek yazma formatı</h2>
    <p>
      Bir çekteki yasal tutar, kelime formudur. Bankalar, sayısal tutarla olan tutarsızlıkları çözmek için bunu kullanır. Kurallar:
    </p>
    <ul>
      <li>Dolar kelimelerle, sentler 100 üzerinden kesir olarak</li>
      <li>Bileşik sayıları tirele (yirmi bir, vb.)</li>
      <li>Kalan satırı, değişikliği önlemek için uzun bir çizgi veya dalgalı çizgi ile doldur</li>
      <li>Sıfır sent: &ldquo;ve 00/100&rdquo; veya &ldquo;ve hiç/100&rdquo; yaz</li>
    </ul>
    <pre>{`$1.234,56
-&gt; "Bin iki yüz otuz dört ve 56/100 dolar"

$50,00
-&gt; "Elli ve 00/100 dolar"`}</pre>
    <p>
      &ldquo;Ve&rdquo; yalnızca dolar ile sent kesri arasında görünür &mdash; yaygın okul öğretisinin aksine, dolar kısmının içinde değil.
    </p>

    <h2>Kısa ve uzun ölçek</h2>
    <p>
      Uluslararası karışıklığın en yaygın kaynağı:
    </p>
    <ul>
      <li>
        <strong>Kısa ölçek</strong> (ABD, modern İngiltere, çoğu İngilizce): her
        yeni kelime bir öncekinin 1000&times; katıdır. Milyon (10&#8310;),
        milyar (10&#8313;), trilyon (10&#185;&#178;).
      </li>
      <li>
        <strong>Uzun ölçek</strong> (Kıta Avrupası, Latin Amerika,
        tarihi İngiltere): her kelime bir öncekinin 1.000.000&times; katıdır.
        Milyon (10&#8310;), milyar (10&#8313;), trilyon (10&#185;&#178;).
      </li>
    </ul>
    <pre>{`10^9 (bir ve 9 sıfır):
  ABD/İngiltere modern: bir milyar
  Fransızca:       un milliard
  Almanca:         eine Milliarde
  İspanyolca:      mil millones / un millardo

10^12:
  ABD/İngiltere modern: bir trilyon
  Fransızca:       un billion
  Almanca:         eine Billion`}</pre>
    <p>
      Uluslararası sözleşmeler yazıyorsanız, basamak sayısını parantez içinde yazın: &ldquo;bir milyar (10&#8313;).&rdquo;
    </p>

    <h2>Negatif sayılar</h2>
    <p>
      Bağlama bağlı olarak üç kural:
    </p>
    <ul>
      <li>&ldquo;Negatif&rdquo; öneki &mdash; &ldquo;negatif elli&rdquo;</li>
      <li>&ldquo;Eksi&rdquo; öneki &mdash; İngiliz/matematik kullanımında yaygın</li>
      <li>Parantez &mdash; muhasebede &ldquo;(elli)&rdquo;</li>
    </ul>
    <p>
      Çekler için negatifler oluşmaz &mdash; negatif bir tutar için çek yazamazsınız.
    </p>

    <h2>Ondalık sayılar</h2>
    <p>
      Birkaç yaklaşım:
    </p>
    <ul>
      <li>&ldquo;Üç virgül bir dört&rdquo; &mdash; virgülden sonra basamak basamak</li>
      <li>&ldquo;Üç ve on dört yüzde bir&rdquo; &mdash; karışık sayı olarak</li>
      <li>&ldquo;Üç virgül on dört&rdquo; &mdash; gayri resmi, daha az kesin</li>
    </ul>
    <pre>{`3,14
  "üç virgül bir dört"
  "üç ve on dört yüzde bir"

0,5
  "sıfır virgül beş"
  "yarım"
  "beş onda bir"`}</pre>

    <h2>Kesirler</h2>
    <ul>
      <li>1/2 &rarr; yarım</li>
      <li>1/3 &rarr; üçte bir</li>
      <li>1/4 &rarr; çeyrek (veya dörtte bir)</li>
      <li>2/3 &rarr; üçte iki</li>
      <li>5/8 &rarr; sekizde beş</li>
    </ul>
    <p>
      Karışık sayılar: &ldquo;üç buçuk.&rdquo;
    </p>

    <h2>Bölge kuralları</h2>
    <p>
      Farklı dillerin farklı basamak gruplamaları ve
      adları vardır. Fransızca 60'tan sonra yirmilerle sayar (&ldquo;quatre-vingt&rdquo;
      = 80, &ldquo;quatre-vingt-dix&rdquo; = 90). Almanca bileşik: 21
      &ldquo;einundzwanzig&rdquo; (bir-ve-yirmi). İspanyolca, İtalyanca,
      Portekizce daha düzenlidir ancak cinsiyet uyumu vardır
      (&ldquo;doscientos&rdquo; vs &ldquo;doscientas&rdquo;). Bir bölge
      kütüphanesi bunu halleder; elle yazılmış dönüştürücüler neredeyse her zaman
      İngilizce olmayan girdilerde bozulur.
    </p>

    <h2>Yüzde ve para birimi biçimlendirme</h2>
    <p>
      Sayılar biçimlendirilmiş çıktının parçası olduğunda:
    </p>
    <ul>
      <li>&ldquo;%25&rdquo; &rarr; &ldquo;yüzde yirmi beş&rdquo;</li>
      <li>&ldquo;100$&rdquo; &rarr; &ldquo;yüz dolar&rdquo;</li>
      <li>&ldquo;50,00€&rdquo; &rarr; &ldquo;elli euro&rdquo; (ve virgüllü ondalığa dikkat edin)</li>
    </ul>

    <h2>Yıl telaffuzu</h2>
    <p>
      Yılların kendi kuralları vardır:
    </p>
    <ul>
      <li>1999 &rarr; &ldquo;bin dokuz yüz doksan dokuz&rdquo;</li>
      <li>2000 &rarr; &ldquo;iki bin&rdquo;</li>
      <li>2005 &rarr; &ldquo;iki bin (ve) beş&rdquo;</li>
      <li>2010 &rarr; &ldquo;yirmi on&rdquo; veya &ldquo;iki bin on&rdquo;</li>
      <li>2024 &rarr; &ldquo;yirmi yirmi dört&rdquo; (şimdi standart)</li>
    </ul>

    <h2>Telefon numaraları ve basamak dizileri</h2>
    <p>
      Telefon numaraları, PIN'ler ve tanımlayıcılar tam sayı olarak değil, basamak basamak okunur. &ldquo;555-1234&rdquo; &ldquo;beş beş beş, bir iki üç dört&rdquo;tür, &ldquo;beş yüz elli beş, bin iki yüz otuz dört&rdquo; değil.
    </p>

    <h2>Yaygın hatalar</h2>
    <p>
      Amerikan İngilizcesinde &ldquo;bin <em>ve</em> iki yüz&rdquo; yazmak (&ldquo;ve&rdquo; çeklerde sentlerden önce gelir, doların içinde değil). Basamak değerleri arasında tire kullanmak (&ldquo;iki-yüz&rdquo; &mdash; yanlış, &ldquo;iki yüz&rdquo; olmalı). Fransız bir muhatapla sözleşmede 10&#8313;'e &ldquo;milyar&rdquo; demek. Çekte kalan boşluğu doldurmayı unutmak, değişikliğe yer bırakmak. Ve kelime formunda herhangi bir yerde virgül kullanmak &mdash; &ldquo;bin iki yüz otuz dört&rdquo;te virgül yoktur.
    </p>

    <h2>Sayıları çalıştır</h2>
    <p>
      <a href="/tools/number-to-words">Sayıyı yazıya çevir</a>
      <a href="/tools/roman-numeral-converter">Roma rakamı dönüştürücü</a>
      <a href="/tools/number-base-converter">Sayı tabanı dönüştürücü</a>
    </p>
  </>
);