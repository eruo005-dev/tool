import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    2026'da öğrenciler ders çalışma, makale taslakları, problem setleri, dil öğrenimi ve
    araştırma için yapay zeka kullanıyor. Doğru araçlar ne okuduğunuza ve okulunuzun yapay zekayı nasıl ele aldığına bağlı &mdash; ancak
    çoğu öğrenci ayda 25 doların altında çalışan bir yığın buluyor.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Dürüst öğrenci yığını</h2>
    <ul>
      <li><strong>Önce ücretsiz katman:</strong> NotebookLM (ücretsiz) + ChatGPT ücretsiz + Perplexity ücretsiz +
        Claude ücretsiz. Çoğu ödev bununla yapılır.</li>
      <li><strong>20 dolar ödeyebiliyorsanız:</strong> Bir ücretli plan seçin. ChatGPT Plus öğrenciler için en iyi
        çok yönlü araçtır &mdash; ses modu, kod yorumlayıcı, görsel oluşturma, en geniş yardım.</li>
      <li><strong>25 dolar ödeyebiliyorsanız:</strong> Bilgisayar bilimi öğrencileri için Cursor Pro ekleyin. Kodlama
        iş akışları için Claude + GPT-5'i bir araya getirir.</li>
    </ul>

    <h2>Derse göre</h2>
    <ul>
      <li><strong>STEM problem setleri:</strong> ChatGPT Plus veya Claude. Her ikisi de adım adım
        çözümlerde mükemmeldir. &ldquo;Bunda yeniymişim gibi açıkla&rdquo; çerçevesini kullanın.</li>
      <li><strong>Makale taslakları:</strong> Claude Pro. Daha temiz ses, daha az &ldquo;yapay zeka kokusu.&rdquo;</li>
      <li><strong>Araştırma makaleleri / literatür taramaları:</strong> NotebookLM (ücretsiz) + Perplexity Pro. Kaynaklarınızı
        NotebookLM'ye yükleyin ve onlarla sohbet edin.</li>
      <li><strong>Dil öğrenimi:</strong> ChatGPT ses modu (2026'da en iyisi) veya Duolingo Max
        ($14/ay). Gerçek zamanlı telaffuz geri bildirimi.</li>
      <li><strong>Bilgisayar bilimi / programlama:</strong> Cursor Pro veya Claude Code. Öğrenci Paketi aracılığıyla ücretsiz GitHub Copilot.</li>
      <li><strong>Matematik:</strong> Zor muhakeme için Claude Opus veya DeepSeek R1. Çözümü gösterin.</li>
      <li><strong>Sınava hazırlık:</strong> Pratik sorular için ChatGPT, açıklamalar için Claude.</li>
    </ul>

    <h2>Bilmeye değer ücretsiz avantajlar</h2>
    <ul>
      <li><strong>GitHub Öğrenci Paketi:</strong> Doğrulanmış öğrenciler için ücretsiz Copilot Pro.</li>
      <li><strong>NotebookLM:</strong> ücretsiz, Google hesabı dışında kayıt gerekmez. En iyi makale yığını aracı.</li>
      <li><strong>Claude.ai ücretsiz katmanı:</strong> Ödeme olmadan Sonnet erişimi.</li>
      <li><strong>ChatGPT ücretsiz:</strong> Hız sınırları olan GPT-5.</li>
      <li><strong>Perplexity ücretsiz:</strong> hızlı arama sınırsız; Pro Search hız sınırlı.</li>
    </ul>

    <h2>Dürüstlük sorunu</h2>
    <p>
      Okullar hala yapay zeka kurallarını belirliyor. 2026'daki pratik normlar: Kavramları anlamak, beyin fırtınası yapmak, taslak hazırlamak ve düzenleme yapmak için yapay zeka
      yaygın olarak kabul edilir. Yapay zekanın tüm makaleyi yazması veya bildirilmeden notlandırılan problem setlerini çözmesi
      çoğu kurumda akademik sahtekarlıktır.
      Emin olmadığınızda, profesöre sorun &mdash; açık cevap sizi her iki şekilde de korur.
    </p>

    <h2>İşe yarayan bir iş akışı</h2>
    <p>
      Ödevi okuyun. 5-10 ana kaynak bulmak için Perplexity'yi kullanın. Bunları NotebookLM'ye bırakın.
      NotebookLM'den her birini özetlemesini isteyin. Taslağınızı kendiniz çıkarın. Her bölümü genişletmek için Claude veya ChatGPT'yi kullanın. Yoğun bir şekilde düzenleyin. NotebookLM'den gerçek kaynaklara atıf yapın. Yapay zekayı tamamen atlamaktan daha iyi bir anlayışla,
      sürenin yarısında bitirin.
    </p>
    <p>
      İlgili okumalar: <a href="/guides/how-to-take-better-notes">daha iyi not nasıl alınır</a>,{" "}
      <a href="/guides/how-to-focus-better">daha iyi nasıl odaklanılır</a>.
    </p>
  </>
);