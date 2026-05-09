import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Haystack, deepset'in açık kaynaklı Python framework'üdür ve üretim kalitesinde <a href="/learn/llm">LLM</a> pipeline'ları (RAG, ajanlar ve arama) oluşturmak için net bir bileşen modeli sunar.</p>);

export const body: ReactElement = (
  <>
    <p>Haystack, ChatGPT döneminden önce, sinirsel aramaya odaklandığı zamandan beri varlığını sürdürüyor. Haystack 2.0 (2024'te yayınlandı), API'yi yazılı bileşenler ve pipeline'lar etrafında modernize etti ve artık LangChain veya LlamaIndex'e en üretim odaklı alternatiflerden biri haline geldi.</p>
    <h2>Ne olduğu</h2>
    <p>Pipeline'lar, yazılı giriş/çıkış soketlerine sahip Bileşenlerin (alıcılar, üreteçler, sıralayıcılar, dönüştürücüler) yönlendirilmiş grafikleridir. Belge Depoları (Elasticsearch, Weaviate, Qdrant, pgvector, OpenSearch, bellek içi) indekslenmiş içeriği tutar. Haystack, her büyük model sağlayıcısı ve vektör veritabanı için birinci taraf entegrasyonlarının yanı sıra deepset Cloud aracılığıyla sunucusuz bir seçenek sunar.</p>
    <h2>Kurulum / kayıt</h2>
    <pre>{`# Çekirdek
pip install haystack-ai

# Entegrasyonlar ayrı paketlerdir
pip install qdrant-haystack anthropic-haystack

# İsteğe bağlı yönetilen arayüz
# https://cloud.deepset.ai`}</pre>
    <h2>İlk oturum</h2>
    <p>Minimum bir RAG pipeline'ı üç bileşenden oluşur: bir gömme alıcısı, bir istem oluşturucu ve bir üreteç. Bunları birbirine bağlayın ve run() fonksiyonunu çağırın.</p>
    <pre>{`$ python
from haystack import Pipeline
from haystack.components.retrievers import InMemoryEmbeddingRetriever
from haystack.components.builders import PromptBuilder
from haystack.components.generators import OpenAIGenerator

p = Pipeline()
p.add_component("retriever", InMemoryEmbeddingRetriever(store))
p.add_component("prompt", PromptBuilder(template=tmpl))
p.add_component("llm", OpenAIGenerator(model="gpt-4o"))
p.connect("retriever", "prompt.documents")
p.connect("prompt", "llm")
print(p.run({"retriever": {"query_embedding": emb}}))`}</pre>
    <h2>Günlük iş akışları</h2>
    <ul>
      <li>1. Şirketinizin wiki ve Confluence dışa aktarımları üzerinde belge tabanlı bir Soru-Cevap hizmeti oluşturun.</li>
      <li>2. LLM'ye ulaşmadan önce hassasiyeti artırmak için alım sonrasına bir Sıralayıcı bileşeni ekleyin.</li>
      <li>3. Pipeline'ları Hayhooks (FastAPI sarmalayıcısı) arkasında dağıtarak Kubernetes ile ölçeklendirebileceğiniz bir REST uç noktası oluşturun.</li>
    </ul>
    <h2>Tuzaklar ve ipuçları</h2>
    <p>Haystack'in gücü, pipeline'ların serileştirilebilir YAML olmasıdır; bu da farkları ve CI incelemelerini kolaylaştırır. İstemleri şablonlarda tutun, sabit kodlanmış dizelerde değil; böylece yeniden dağıtmadan yineleme yapabilirsiniz. Değerlendirme bileşenleri (AnswerExactMatch, SASEvaluator) aynı pipeline grafiğine yerleşir, böylece CI'da test edebilirsiniz.</p>
    <p>Çok büyük külliyatlar için bellek içi yerine Elasticsearch veya OpenSearch belge depolarını tercih edin &mdash; InMemoryDocumentStore eğitimler için harikadır ancak üretim için uygun değildir. <a href="/learn/stream">Akış</a> yanıtları, üreteçlerde streaming_callback parametresini gerektirir; bunu kaçırmak kolaydır ve çıktıyı tüketme şeklinizi değiştirir.</p>
    <h2>Kimler için</h2>
    <p>RAG veya arama odaklı LLM ürünleri gönderen, not defteri tarzı bir araç seti yerine yazılı, gözlemlenebilir, dağıtılabilir bir framework isteyen ekipler için.</p>
  </>
);