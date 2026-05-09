import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Amazon Q Developer, AWS'nin kodlama asistanıdır &mdash; CodeWhisperer'ın halefi &mdash; satır içi tamamlamalar, ajan tarzı görevler ve derin AWS hizmet farkındalığı sunar.</p>);

export const body: ReactElement = (
  <>
    <p>2024'te CodeWhisperer'dan yeniden markalanan Amazon Q Developer, IDE tamamlama motorunu korur ve bir sohbet ajanı, otomatik kod yükseltmeleri (Java 8/11'den 17/21'e) ve AWS SDK desenlerine göre ayarlanmış güvenlik taramaları ekler. Amazon'un Copilot ve Cursor'a doğrudan yanıtıdır.</p>
    <h2>Ne olduğu</h2>
    <p>Q Developer, bir IDE eklentisi (VS Code, JetBrains, Visual Studio, Eclipse) ve bir CLI olarak çalışır. Üç yüzeyi kapsar: yazarken satır içi öneriler, çalışma alanınızı okuyabilen bir yan panel sohbeti ve çok dosyalı çekme istekleri üreten ajan görevleri (/dev, /transform, /test). İzin verdiğinizde AWS hesabınızı okur, böylece "bu Lambda neden zaman aşımına uğruyor" gibi soruları gerçek yapılandırmayla yanıtlayabilir.</p>
    <h2>Kurulum / kaydolma</h2>
    <pre>{`# VS Code
code --install-extension AmazonWebServices.amazon-q-vscode

# JetBrains: Ayarlar > Eklentiler > "Amazon Q" ara

# CLI (macOS)
brew install amazon-q

# AWS Builder ID (ücretsiz katman) veya IAM Identity Center (Pro) ile oturum açın`}</pre>
    <h2>İlk oturum</h2>
    <p>Oturum açtıktan sonra bir dosya açın ve yazmaya başlayın &mdash; tamamlamalar gri renkte görünür, kabul etmek için sekme tuşuna basın. Sohbet etmek için Q panelini açın veya bir fark üreten ajan görevini başlatmak için /dev komutunu çalıştırın.</p>
    <pre>{`$ q chat
> /dev bir DynamoDB tablosu ekle ve bunu siparişler Lambda'sına bağla
# Q, CDK değişiklikleri, Lambda düzenlemeleri ve testler oluşturur
# farkı inceleyin, ardından /accept`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>1. Bir Java 8 hizmetini Java 17'ye dönüştürmek için /transform kullanın ve Spring Boot yükseltmeleri otomatik olarak uygulanır.</li>
      <li>2. IAM aşırı izinlerini ve SDK yanlış kullanımını işaretleyen güvenlik odaklı bir tarama almak için /review çalıştırın.</li>
      <li>3. Sohbet paneline hesabınıza dayalı AWS soruları sorun &mdash; faturalama, CloudFormation kayması veya hizmet limitleri.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Ücretsiz Builder ID katmanı, cömert aylık satır içi öneriler ve birkaç ajan çağrısı kapsar; Pro (19$/kullanıcı/ay) limitleri kaldırır ve özel depolarınızda özelleştirme ekler. Özelleştirmeler, bir S3 referans kodu paketi ve tek seferlik bir eğitim işi gerektirir.</p>
    <p>Referans takibi açıkken Q Developer, genel depolarla birebir eşleşen kod önermez &mdash; lisans hijyeni için bu ayarı etkin bırakın. AWS dışı projeler için ajan hala çalışır, ancak hesap bilincine sahip süper güçleri kaybedersiniz.</p>
    <h2>Kimler için</h2>
    <p>AWS ağırlıklı ekipler, bir LTS yükseltmesi planlayan Java şirketleri ve doğrudan bulut konsoluna bağlı Copilot sınıfı tamamlamalar isteyen herkes.</p>
  </>
);