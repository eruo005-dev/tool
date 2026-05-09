/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Oyun bilgisayarı için kiralama vs satın alma kararı çoğunlukla kullanım sıklığına göre belirlenir.
      Günlük kullanıcılar satın alır; ara sıra etkinlik kullanıcıları kiralar; aradaki herkes için gerçek bir
      seçenek söz konusudur. Bu rehber, çerçeve + matematiği sunar.
    </p>
  </>
);

export const toc = [
  { id: "framework", label: "Karar çerçevesi" },
  { id: "math", label: "Matematik" },
  { id: "scenarios", label: "Yaygın senaryolar" },
];

export const body = (
  <>
    <h2 id="framework">Kiralama vs satın alma karar çerçevesi</h2>
    <p>
      Beş faktör:
    </p>
    <ol>
      <li>
        <strong>Kullanım sıklığı.</strong> Günlük &gt; haftalık &gt; aylık &gt;
        ara sıra. Haftalık kullanımın ötesinde sahiplik kazanır. Yılda ~6 etkinliğin altında
        kiralama kazanır.
      </li>
      <li>
        <strong>Süre.</strong> 18 aydan uzun süre bir bilgisayara ihtiyacınız varsa,
        sahiplik aylık kiralamayı yener. 12 aydan kısa sürede aylık kiralama
        nakit akışı açısından kazanır.
      </li>
      <li>
        <strong>Nakit akışı.</strong> Peşin 1500-3000$ ödeyebiliyor musunuz? Ödeyemiyorsanız,
        aylık kiralama veya kirala-sahip ol seçeneği maliyeti yayar.
      </li>
      <li>
        <strong>Yaşam durumu.</strong> Yerleşik vs gezgin. Sık taşınmalar
        kiralamaya veya dizüstü bilgisayara yöneltir. Stabil konut sahipliği destekler.
      </li>
      <li>
        <strong>Teknoloji estetiği.</strong> En yeni GPU için her 2 yılda bir yükseltme mi yapmak istiyorsunuz? Sahip olma + yeniden satma, uzun vadeli kiralamayı maliyet açısından yener. Tutarlı, bakım gerektirmeyen performans mı istiyorsunuz? Abonelik psikolojik olarak
        daha basit yoldur.
      </li>
    </ol>

    <h2 id="math">Matematik</h2>
    <p>
      Kendi rakamlarınızla <a href="/tools/pc-rental-vs-buy-calculator">kiralama vs satın alma hesaplayıcımızı</a>{" "}
      kullanın. Hızlı referans noktaları:
    </p>
    <ul>
      <li>
        <strong>Günlük kullanıcı, 2200$'lık bilgisayar, 5 yıl ömür, %35 yeniden satış:</strong> yıllık
        sahiplik maliyeti ~340$/yıl. Aylık 150$'dan eşdeğer kiralama
        1800$/yıl tutar — sahiplik 5 kat kazanır.
      </li>
      <li>
        <strong>Haftalık etkinlik kullanıcısı (yılda 200 saat):</strong> yıllık sahiplik
        maliyeti ~340$/yıl, ~1.70$/saat. 180$ × 50 etkinlikten etkinlik kiralaması = 9000$/yıl.
        Sahiplik kesin olarak kazanır.
      </li>
      <li>
        <strong>Aylık etkinlik kullanıcısı (yılda 60 saat, 12 etkinlik):</strong> sahiplik
        ~340$/yıl. Etkinlik kiralaması 180$ × 12 = 2160$/yıl. Sahiplik 6 kat kazanır.
      </li>
      <li>
        <strong>Ara sıra etkinlik kullanıcısı (yılda 24 saat, 6 etkinlik):</strong> sahiplik
        340$/yıl. Etkinlik kiralaması 180$ × 6 = 1080$/yıl. Sahiplik hâlâ kazanır.
      </li>
      <li>
        <strong>Yılda bir etkinlik kullanıcısı:</strong> kiralama kazanır. Bir hafta sonu için
        bilgisayar almayın.
      </li>
    </ul>
    <p>
      Tipik girdiler için başabaş noktası, etkinlik kiralamalarında yılda yaklaşık 2-3 etkinliktir.
      Bunun altında kiralayın, üstünde satın alın.
    </p>

    <h2 id="scenarios">Yaygın senaryolar</h2>

    <h3>Üniversite öğrencisi, yurt, 4 yıl</h3>
    <p>
      Günlük kullanım → satın alın. Orta seviye bir 1440p sistem seçin (1500$). 4 yıl sonra
      ~700$'a satar. Net maliyet ~200$/yıl. 4 yıllık aylık kiralamalardan veya
      bulut oyunculuktan çok daha ucuz.
    </p>

    <h3>Sık seyahat eden, yolda oyun oynayan</h3>
    <p>
      Bir oyun dizüstü bilgisayarı veya bulut oyun aboneliği, bir masaüstü kiralamak veya satın almaktan
      daha iyidir. Masaüstü matematiği gezgin durumlar için işe yaramaz.
    </p>

    <h3>Espor takımı, antrenman maçları</h3>
    <p>
      Satın alın. Günlük kullanım matematiği ezici. Ayrıca rekabetçi oyun için yerel donanımın
      gecikme kontrolü önemlidir.
    </p>

    <h3>Sıradan oyuncu, haftada 2-3 saat mütevazı oyun</h3>
    <p>
      Bulut oyunculuk kazanır. Ayda 10-20$ vs yıllık 340$ sahiplik maliyeti. Düşük frekanslı
      sıradan kullanıcılar için maliyet karşılaştırması kesinlikle bulut oyunculuk tarafındadır.
    </p>

    <h3>Kongre veya turnuva organizatörü</h3>
    <p>
      Kiralama. Yılda bir hafta sonu için 4-20 makineye ihtiyacınız var. Etkinlik kiralama
      hizmetleri tam olarak bu durum için vardır.
    </p>

    <h3>İçerik üreticisi, <a href="/learn/stream">yayıncı</a> + oyuncu</h3>
    <p>
      Satın alın. Yayıncı seviyesi özellikler pahalıdır ancak günlük kullanım matematiği geçerlidir. Ayrıca
      içerik üreticileri tüm zincire (yakalama kartları, ses arayüzleri,
      sisteme göre ayarlanmış çevre birimleri) sahip olmaktan fayda sağlar.
    </p>
  </>
);

export const cta = {
  label: "Kiralama vs satın alma hesaplayıcısını çalıştırın",
  targetSlug: "pc-rental-vs-buy-calculator",
};

export const faq = [
  {
    q: "Oyun bilgisayarı kiralamak mı satın almak mı — hangisi mantıklı?",
    a: "Günlük kullanıcılar satın alır. Ara sıra etkinlik kullanıcıları (yılda 1-2 etkinlik) kiralar. Aradaki herkes etkinlik sıklığına, kiralama ücretlerine ve nakit akışı durumuna bağlıdır. Kendi rakamlarınızla hesaplayıcımızı kullanın. Tipik girdiler için başabaş noktası yılda yaklaşık 2-3 etkinliktir — bunun altında kiralayın, üstünde satın alın.",
  },
  {
    q: "Etkinlikler için oyun bilgisayarı satın almalı mıyım yoksa kiralamalı mıyım?",
    a: "Yılda 6+ etkinliğe katılacaksanız satın alın (yıllık sahiplik maliyeti etkinlik kiralama maliyetini yener). Yılda 1-2 etkinlikse kiralayın. 2 ile 6 arasında bölgenizdeki kiralama ücretlerine bağlıdır. Kendi rakamlarınızla hesaplayıcımızı kullanın — başabaş noktası satın alma fiyatına, kullanım ömrüne ve kiralama ücretlerine göre değişir.",
  },
  {
    q: "Oyun bilgisayarı sahipliği sıradan oyuncular için değer mi?",
    a: "Haftada 2-3 saat sıradan oyun için: bulut oyunculuk kesin olarak kazanır (ayda 10-20$ vs yılda 340$ sahiplik maliyeti). Günlük kullanıcılar için: satın alın. Bulut oyunculuğun bant genişliği ve oyun desteği sınırlamaları vardır ancak sıradan kullanım için genellikle mantıklı seçimdir.",
  },
  {
    q: "Oyun bilgisayarı kiralamakla satın almak arasındaki başabaş noktası nedir?",
    a: "Tipik girdiler için (2200$'lık bilgisayar, 5 yıl ömür, %35 yeniden satış, 4 saatlik etkinlik kiralaması başına 180$): yılda yaklaşık 2-3 etkinlik. Bunun altında kiralayın. Üstünde sahiplik artan bir farkla kazanır. Kesin başabaş noktanız için kendi satın alma fiyatınız ve kiralama ücretlerinizle hesaplayıcımızı çalıştırın.",
  },
];