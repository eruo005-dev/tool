import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>
    Anthropic Skills, 2025'in sonlarında ChatGPT'nin Custom GPT'lerine cevap olarak piyasaya sürüldü &mdash; Claude için yeniden kullanılabilir, paketlenmiş davranışlar. 2026 itibarıyla Claude.ai, Claude Desktop ve Claude Code ile birlikte geliyorlar. İşte model.
  </p>
);

export const body: ReactElement = (
  <>
    <h2>Skill Nedir</h2>
    <p>
      Belirli bir davranış + tetikleyici anahtar kelimeler + isteğe bağlı araç erişimi tanımlayan bir <code>SKILL.md</code> dosyası içeren bir dizin. Claude tetikleyici koşulu algıladığında, skill talimatlarını yükler ve bunları takip eder.
    </p>
    <h2>Skill'ler nerede çalışır</h2>
    <ul>
      <li><strong>Claude.ai web</strong> &mdash; kullanıcı tarafından yüklenebilir Skill'ler.</li>
      <li><strong>Claude Desktop</strong> &mdash; dosya sistemi erişimine sahip yerel Skill'ler.</li>
      <li><strong>Claude Code</strong> &mdash; <code>.claude/skills/</code> içindeki proje Skill'leri.</li>
      <li><strong>Anthropic API (Yönetilen Ajanlar)</strong> &mdash; ajan akışlarına gömülü.</li>
    </ul>
    <h2>Bir Skill'in Anatomisi</h2>
    <pre className="rounded bg-slate-900 p-3 text-xs text-slate-100"><code>{`---
name: review-pr
description: Bir pull request'i güvenlik, performans, stil açısından inceleyin. "PR incele" veya "kod incelemesi" istendiğinde kullanın.
---
# Talimatlar
1. PR diff'ini ve çevresindeki bağlamı okuyun.
2. Şunları işaretleyin: hatalar, güvenlik sorunları, performans düşüşleri, stil ihlalleri.
3. Ciddiyet derecelendirmeleriyle yapılandırılmış bir inceleme çıktısı verin.

# Örnekler
[1-2 ideal örnek inceleme]`}</code></pre>
    <h2>Skill'ler ve Custom GPT'ler</h2>
    <ul>
      <li><strong>Skill'ler:</strong> markdown ile tanımlanmış, git'te sürüm kontrollü, terminalde çalışır.</li>
      <li><strong>Custom GPT'ler:</strong> halka açık pazar yeri, üçüncü taraf API'ler için özel Eylemler, terminal sürümü yok.</li>
      <li><strong>Skill'leri seçin</strong> kod ağırlıklı veya terminal odaklı iş akışları için; <strong>Custom GPT'leri</strong> halka açık yapay zeka araçları için.</li>
    </ul>
    <h2>2026 Skill ekosistemi</h2>
    <p>
      Anthropic ~30 resmi Skill gönderiyor (slack-gif-creator, theme-factory, doc-coauthoring, mcp-builder, vb.). Eklenti pazarlarında yüzlercesi daha var. Skill+eklenti kombinasyonu hızla varsayılan Claude Desktop / Claude Code iş akışı haline geliyor.
    </p>
  </>
);