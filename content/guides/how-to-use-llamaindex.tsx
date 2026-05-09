import { type ReactElement } from "react";

export const intro: ReactElement = (
  <p>LlamaIndex, LLM'ler için özel olarak belgeleri işlemek ve özel bilgileriniz üzerinde RAG çalıştırmak amacıyla tasarlanmış bir veri çerçevesidir.</p>
);

export const body: ReactElement = (
  <>
    <p>
      LangChain her şey olmaya çalışırken, LlamaIndex daha dar ve derin kalır: 150'den fazla veri kaynağı için yükleyiciler,
      parçalama ve meta veri çıkarma işlem hatları, önemli her vektör veritabanı üzerinde bir VectorStoreIndex soyutlaması ve
      almayı yeniden sıralama ve yanıt senteziyle birleştiren sorgu motorları. Daha yeni bir Workflows API'si, basit sorgu
      işlem hatlarını aştığınızda olay odaklı orkestrasyon ekler.
    </p>

    <h2>Ne olduğu</h2>
    <p>
      LlamaIndex, MIT lisanslıdır ve LlamaIndex Inc. (Jerry Liu ve ekip) tarafından sürdürülmektedir. Python paketi
      llama-index-core temeldir; entegrasyonlar llama-index-vector-stores-qdrant gibi ayrı paketlerde bulunur. Bir
      TypeScript sürümü (npm'de llamaindex) temel ihtiyaçları karşılar. Ücretli bir yönetilen hizmet olan LlamaParse,
      açık kaynaklı ayrıştırıcının zorlandığı karmaşık PDF'leri ve tabloları işler.
    </p>

    <h2>Kurulum</h2>
    <pre>{`pip install llama-index
# veya modüler kurulum
pip install llama-index-core llama-index-llms-openai llama-index-embeddings-openai`}</pre>

    <h2>İlk çalıştırma</h2>
    <p>Bir belge klasörünü dizine ekleyin ve bunlarla ilgili bir soru sorun:</p>
    <pre>{`from llama_index.core import VectorStoreIndex, SimpleDirectoryReader

docs = SimpleDirectoryReader("./data").load_data()
index = VectorStoreIndex.from_documents(docs)
engine = index.as_query_engine()

print(engine.query("İade politikanız nedir?"))`}</pre>

    <h2>Günlük iş akışları</h2>
    <ul>
      <li>SentenceSplitter + TitleExtractor + gömme işlemleriyle bir IngestionPipeline oluşturun ve diske önbelleğe alın.</li>
      <li>Birkaç satır yapılandırma ile VectorStoreIndex'in arka ucunu Qdrant, Pinecone veya pgvector ile değiştirin.</li>
      <li>Çok adımlı yanıtlar için RAG'ı araç kullanan ajanlarla birleştirmek üzere Workflows ve AgentWorkflow kullanın.</li>
    </ul>

    <h2>Tuzaklar ve ipuçları</h2>
    <p>
      RAG kalitesi parçalamaya bağlıdır. Varsayılan ayarlar geneldir; chunk_size ve chunk_overlap'ı içeriğinize göre ayarlayın
      &mdash; sözleşmeler, forum gönderileri ve kod farklı değerler ister. Zafere ulaşmadan önce küçük etiketli bir setle
      hatırlamayı ölçün.
    </p>
    <p>
      Kalıcılık yaygın bir tuzaktır. Her çalıştırmada from_documents çağırmak her şeyi yeniden gömer ve sizi iki kez faturalandırır.
      StorageContext.persist() ve load_index_from_storage kullanın veya durumu sizin için koruyan gerçek bir vektör veritabanına
      gönderin.
    </p>

    <h2>Kimin için olduğu</h2>
    <p>
      Ürünü temelde "belgelerimizle sohbet" olan ekipler &mdash; hukuk, destek, dahili arama, araştırma. İpucu: bir müşteri
      tarafından sağlanan PDF'de birleştirilmiş hücreler veya taranmış tablolar olduğunda ilk seferde LlamaParse'a başvurun
      &mdash; bunlar için elle bir ayrıştırıcı yazmak, geri alamayacağınız bir ayınızı alır.
    </p>
  </>
);