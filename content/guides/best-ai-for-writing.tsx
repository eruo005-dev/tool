import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da yazma işleri için en iyi yapay zeka, tamamen ne yazdığınıza bağlıdır. Pazarlama metinleri,
    uzun nesir, teknik dokümanlar, senaryolar ve şiirlerin hepsi farklı modelleri tercih eder. İşte
    detaylı döküm.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Yazma türüne göre</h2>
    <ul>
      <li><strong>Uzun denemeler / makaleler:</strong> Claude Sonnet 4.6. Daha temiz bir ses, daha az
        pazarlama kokan, ton talimatlarını güvenilir şekilde takip eder.</li>
      <li><strong>Pazarlama metinleri / reklam metinleri:</strong> ChatGPT Plus (GPT-5). Daha geniş
        stilistik yelpaze, belirli marka seslerini yakalamada daha iyidir.</li>
      <li><strong>Teknik yazı / dokümantasyon:</strong> Claude. Kaynağa sadık, karmaşık konularda
        daha az halüsinasyon görür.</li>
      <li><strong>E-posta / iş yazışmaları:</strong> Her iki amiral gemisi de iyidir; Claude kutudan
        çıktığı gibi daha doğal okunur.</li>
      <li><strong>Yaratıcı kurgu:</strong> Bkz. <a href="/guides/best-ai-for-creative-writing">yaratıcı yazarlık için en iyi yapay zeka</a>.</li>
      <li><strong>Ön yazılar / özgeçmişler:</strong> Ton ayarlamasında Claude kazanır.</li>
      <li><strong>Bülten taslakları:</strong> Claude veya ChatGPT; ikisi de mükemmel.</li>
      <li><strong>Çeviriler:</strong> GPT-5 (en geniş dil kapsamı), Gemini (Asya dilleri).</li>
    </ul>

    <h2>2026'nın dürüst seçimleri</h2>
    <ul>
      <li><strong>Varsayılan:</strong> Ayda 20$'a Claude Pro. En temiz çıktı, en az &ldquo;yapay zeka
        kokusu.&rdquo;</li>
      <li><strong>Görsel üretime de ihtiyacınız varsa:</strong> Ayda 20$'a ChatGPT Plus.</li>
      <li><strong>İkisine de sık ihtiyacınız varsa:</strong> Ayda 40$'a her iki abonelik.</li>
      <li><strong>Yüksek hacimli yazma otomasyonu için:</strong> DeepSeek V3.2 API. %90 daha ucuz,
        kalitenin ~%95'i.</li>
    </ul>

    <h2>Sohbetin ötesindeki araçlar</h2>
    <p>
      Yapay zekayı taslak oluşturma iş akışına entegre etmek isteyen yazarlar için sohbet
      arayüzünün ötesine bakın: Kurgu için Sudowrite; belge içi düzenleme için Notion AI; dikkat
      dağıtmayan taslak oluşturma için Lex; toplantı notundan taslağa için Granola. Bunlar aynı
      modelleri yazmaya özel bir kullanıcı deneyimiyle sarar.
    </p>

    <h2>Sık yapılan hatalar</h2>
    <ul>
      <li>İstediğiniz sesin örnekleri olmadan &ldquo;1500 kelimelik bir blog yazısı&rdquo; istemek.
        Ton referansı olarak her zaman önceden yazılmış 2-3 paragraf yapıştırın.</li>
      <li>Yapay zekanın tüm metni yazmasına izin vermek. En iyi iş akışı insan taslağı &rarr; yapay
        zeka doldurma &rarr; insan düzenlemesidir. En az üç geçiş.</li>
      <li>İnsan düzenlemesini atlamak. Yapay zeka metni akıcı ama tahmin edilebilirdir; kişilik
        düzenlemede yaşar.</li>
    </ul>
    <p>
      Karşılaştırın: <a href="/compare/claude-vs-chatgpt">Claude vs ChatGPT</a>,{" "}
      <a href="/compare/claude-vs-gemini">Claude vs Gemini</a>.
    </p>
  </>
);