import { type ReactElement } from "react";

export const intro: ReactElement = (<p>Dify is an open-source LLMOps platform that offers visual workflows, agents, datasets, and APIs in a single stack.</p>);

export const body: ReactElement = (
  <>
    <p>Dify sits between a &ldquo;no-code builder&rdquo; and a &ldquo;full LLMOps platform.&rdquo; You design prompts and agents in the browser, add datasets for RAG, and the platform exposes them as REST APIs with authentication, rate limits, and analytics. Host it on your own server for free or use the managed cloud.</p>
    <h2>What it is</h2>
    <p>A Python backend (Flask + Celery + Postgres + Redis + a vector store) plus a Next.js frontend. Applications come in four flavors: chat, agent, workflow, and text generation. Datasets handle ingestion and retrieval; models connect through a provider registry that supports over 30 vendors.</p>
    <h2>Installation / setup</h2>
    <pre>{`# self-host with docker compose
git clone https://github.com/langgenius/dify
cd dify/docker
cp .env.example .env
docker compose up -d`}</pre>
    <h2>First run</h2>
    <p>Go to <code>http://localhost</code>, create the admin account, and connect a model provider (OpenAI, Anthropic, or a local Ollama endpoint). Click Create Application, choose Chatbot, write a <a href="/learn/system-prompt">system prompt</a>, and publish &mdash; Dify generates a shareable URL and an API token.</p>
    <pre>{`$ curl -X POST http://localhost/v1/chat-messages \\
  -H "Authorization: Bearer app-xxx" \\
  -d '{"inputs":{},"query":"hello","user":"u1"}'
{"answer":"Hello!","conversation_id":"..."}`}</pre>
    <h2>Daily workflows</h2>
    <ul>
      <li>Create a RAG chatbot by building a dataset, uploading files, and enabling retrieval in the application settings.</li>
      <li>Use the Workflow application type to chain HTTP calls, <a href="/learn/llm">LLM</a> nodes, code blocks, and conditions for deterministic pipelines.</li>
      <li>Publish an internal tool by embedding the generated web app URL or calling the API from your existing product.</li>
    </ul>
    <h2>Pitfalls and tips</h2>
    <p>The Docker Compose stack pulls many images (Postgres, Redis, Weaviate, sandbox, SSRF proxy). Allocate at least 4&ndash;6 GB of RAM and don't run it on a 1 GB VPS. The <code>sandbox</code> container executes user code and requires <code>privileged</code> or a seccomp profile &mdash; read the security docs before exposing Dify publicly.</p>
    <p>Version upgrades sometimes require database migrations that aren't automatic. Snapshot your Postgres volume before <code>docker compose pull</code>. The team moves fast and there may be breaking changes between minor versions.</p>
    <h2>Who it's for</h2>
    <p>Product teams that want to ship LLM features without building the platform layer. If you need prompts, datasets, authentication, logs, and an API gateway in one package, Dify is the most comprehensive open-source option today.</p>
  </>
);