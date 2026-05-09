import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Mentat, AbanteAI tarafından geliştirilen, terminalinizden doğrudan çoklu dosya düzenlemeleri planlayıp uygulayan açık kaynaklı bir komut satırı kodlama asistanıdır.</p>);

export const body: ReactElement = (
  <>
    <p>Mentat, mevcut ajan CLI'lerinden önce gelir ve temiz, betiklenebilir bir seçenek olarak kalır. Ona bir dizi dosya ve doğal dilde bir görev verirsiniz; tüm dosyaları kapsayan bir fark önerisi sunar, yamayı gösterir ve onayınızla uygular. Kendi API anahtarınızı getirin; OpenAI, Anthropic veya LiteLLM aracılığıyla yerel modellerle çalışır.</p>
    <h2>Ne olduğu</h2>
    <p>Mentat bir Python CLI'dir. Dahil ettiğiniz dosyaları ayrıştırır, bir <a href="/learn/context-window">bağlam penceresi</a> oluşturur ve modeli yapılandırılmış bir düzenleme için yönlendirir. Sohbet odaklı araçların aksine, birincil eylemi "bir fark üretmek"tir, bu da onu bir sohbet robotundan çok insan bir çift programcıya yaklaştırır. Proje, onu takip eden birçok ajan aracı için referans bir uygulama olmuştur.</p>
    <h2>Kurulum / kayıt</h2>
    <pre>{`# Python 3.10+ gerektirir
pipx install mentat

# API anahtarınızı ayarlayın
export OPENAI_API_KEY=sk-...
# veya
export ANTHROPIC_API_KEY=sk-ant-...`}</pre>
    <h2>İlk oturum</h2>
    <p>Proje kök dizininizden, bağlamda istediğiniz dosyalarla (veya dizinlerle) mentat'ı çalıştırın. İsteğinizi komut satırına yazın, önerilen farkı inceleyin ve onaylayın.</p>
    <pre>{`$ mentat src/api/ tests/
> Token bucket kullanarak /login uç noktasına hız sınırlaması ekle
# Mentat 3 dosyada birleşik bir fark yazdırır
# y kabul etmek, n reddetmek, e isteği düzenlemek için`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>1. Yalnızca bir görevle ilgili dizinleri dahil edin &mdash; daha küçük bağlam, daha ucuz, daha hızlı ve daha doğru düzenlemeler anlamına gelir.</li>
      <li>2. Oturum ortasında bağlamı yeniden başlatmadan ayarlamak için /include ve /exclude kullanın.</li>
      <li>3. Mentat'ı bir betiğe zincirleyin: bir görev tanımını boru hattına verin, farkı yakalayın ve CI'nın arkasına koyun.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Mentat .gitignore'a saygı duyar ve kendisine ilettiğiniz yolların dışındaki dosyalara dokunmayı reddeder; bu güzel bir güvenlik varsayılanıdır. Çok büyük depolar için, ajanı çağırmadan önce bağlamı daraltmak için bir grep adımıyla birleştirin.</p>
    <p>Birleşik farklar ürettiği için, kaydedilmemiş çalışmayla birleştirme çakışmaları uygulama adımını temiz bir şekilde iptal eder &mdash; önce commit veya stash yapın. /model gpt-4o veya /model claude-sonnet-4 ile oturum ortasında model değiştirin.</p>
    <h2>Kimler için</h2>
    <p>Ağır IDE entegrasyonları yerine yalın, fark-ilk iş akışını tercih eden terminal-yerel geliştiriciler ve ajan düzenlemelerini bir boru hattına betiklemek isteyen herkes.</p>
  </>
);