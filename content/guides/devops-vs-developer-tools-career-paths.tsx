/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      DevOps and Developer Tools (DevTools / DPE / DevX) are the two big
      &ldquo;internal-facing&rdquo; engineering specializations. They overlap, get
      confused often, and lead to different career arcs. Picking between them — or
      navigating roles that blend both — is a recurring question on
      r/cscareerquestions and r/devops.
    </p>
    <p>
      This guide is the honest comparison: what each role actually does, how comp +
      growth differ, and which to pick based on your strengths.
    </p>
  </>
);

export const toc = [
  { id: "definitions", label: "Clear definitions" },
  { id: "differences", label: "What's actually different" },
  { id: "comp-growth", label: "Comp + growth comparison" },
  { id: "which-to-pick", label: "Which to pick (decision framework)" },
];

export const body = (
  <>
    <h2 id="definitions">Clear definitions</h2>
    <p>
      <strong>DevOps:</strong> the discipline of bridging dev and ops — owning the
      deploy pipeline, runtime infrastructure, on-call, monitoring, incident
      response. Originated to break down silos between engineering teams and ops
      teams.
    </p>
    <p>
      <strong>Developer Tools / DPE / DevX:</strong> the discipline of measuring
      and improving the productivity of developers in your organization. Focus on
      local environments, build performance, internal tooling, the developer-facing
      slice of the SDLC.
    </p>
    <p>
      <strong>Platform Engineering:</strong> the umbrella term that&rsquo;s become
      common in 2024–2026. Often combines DevOps + DevTools at smaller companies; at
      bigger companies, sub-teams specialize.
    </p>
    <p>
      <strong>Site Reliability Engineering (SRE):</strong> the runtime-reliability
      sub-specialty. Closer to DevOps than DevTools but with its own tradition
      (Google&rsquo;s SRE book).
    </p>

    <h2 id="differences">What&rsquo;s actually different</h2>
    <ul>
      <li>
        <strong>Daily work:</strong>
        <ul>
          <li><strong>DevOps:</strong> deploy pipelines, runtime config, monitoring dashboards, on-call rotations, incident write-ups, capacity planning, infrastructure-as-code.</li>
          <li><strong>DevTools:</strong> local dev environments, build-system performance, test infrastructure, internal CLI/SDK design, dev-facing observability, codebase tooling (linters, formatters, codemods).</li>
        </ul>
      </li>
      <li>
        <strong>Tech stack:</strong>
        <ul>
          <li><strong>DevOps:</strong> Kubernetes, Terraform, Helm, AWS/GCP/Azure, Prometheus, Grafana, ArgoCD, FluxCD.</li>
          <li><strong>DevTools:</strong> Bazel, Buck2, language-specific build systems (Webpack, Vite, Cargo), GitHub Actions, internal CLIs (often Go), observability tooling.</li>
        </ul>
      </li>
      <li>
        <strong>On-call burden:</strong>
        <ul>
          <li><strong>DevOps:</strong> high. The role is partly defined by 24/7 reliability ownership.</li>
          <li><strong>DevTools:</strong> low to moderate. Some teams have on-call for build infra, but it&rsquo;s typically business-hours-ish.</li>
        </ul>
      </li>
      <li>
        <strong>User type:</strong>
        <ul>
          <li><strong>DevOps:</strong> production runtime + end users (indirectly).</li>
          <li><strong>DevTools:</strong> internal developers as direct users.</li>
        </ul>
      </li>
      <li>
        <strong>Failure-mode psychology:</strong>
        <ul>
          <li><strong>DevOps:</strong> high-stakes failure (production outage, customer impact). Stress profile of incident response.</li>
          <li><strong>DevTools:</strong> low-stakes failure mostly (dev productivity drops, but no customer-visible impact). Different stress profile — more about long-term improvement, less about firefighting.</li>
        </ul>
      </li>
    </ul>

    <h2 id="comp-growth">Comp + growth comparison</h2>
    <ul>
      <li>
        <strong>Comp:</strong> roughly equivalent at every level. Pay-transparency
        disclosures show DevTools/DPE 5–15% above generic SWE; DevOps comparable.
        SRE at top tech (Google, Meta) often above both. See our{" "}
        <a href="/tools/dev-tool-salary-estimator">salary estimator</a>.
      </li>
      <li>
        <strong>Growth runway:</strong> both are growing categories in 2026.
        DevOps as a labeled discipline is older; DevTools is the relative growth
        driver as companies invest in productivity.
      </li>
      <li>
        <strong>Job-listing volume:</strong> DevOps has more open roles in absolute
        terms; DevTools/DPE has fewer but is growing faster.
      </li>
      <li>
        <strong>Remote-friendliness:</strong> both lean remote-friendly. DevOps
        on-call coordination sometimes argues for time-zone alignment; DevTools
        less constrained.
      </li>
    </ul>

    <h2 id="which-to-pick">Which to pick — decision framework</h2>
    <p>
      Five questions to clarify the choice:
    </p>
    <ol>
      <li>
        <strong>Do you like operational pressure?</strong> The 3 AM page,
        debugging a live outage, managing risk under time pressure. Yes → DevOps.
        Indifferent or no → DevTools.
      </li>
      <li>
        <strong>Do you enjoy building tools other engineers will use?</strong>
        The empathy + product-thinking-for-internal-users angle. Yes → DevTools.
        Indifferent → DevOps.
      </li>
      <li>
        <strong>How comfortable are you with infrastructure?</strong> Heavy K8s,
        cloud, networking interest → DevOps. More codebase / build-system /
        compiler / language-tooling interest → DevTools.
      </li>
      <li>
        <strong>Are you optimizing for stability or visibility?</strong> DevOps
        is generally more visible (outages get attention); DevTools is more
        background but shapes the org&rsquo;s capability.
      </li>
      <li>
        <strong>Switching cost:</strong> low. The skills transfer in both
        directions. Many engineers have been both at different companies.
        Don&rsquo;t over-think the lock-in.
      </li>
    </ol>
    <p>
      The 2026 reality: hybrid &ldquo;Platform Engineer&rdquo; roles that touch
      both are increasingly common. If you&rsquo;re early in the decision, those
      roles let you sample both before specializing.
    </p>
  </>
);

export const cta = {
  label: "Salary ranges for DevTools / DPE / DevOps roles",
  targetSlug: "dev-tool-salary-estimator",
};

export const faq = [
  {
    q: "Is DevOps or developer tools the better career path?",
    a: "Both are growing; comp is roughly equivalent at every level. DevOps has more total open roles and on-call burden; DevTools/DPE is growing faster, has lower on-call, and focuses on internal-facing developer experience. Pick based on whether you enjoy operational pressure (DevOps) or building tools other engineers use (DevTools).",
  },
  {
    q: "What's the difference between DevOps and developer tools?",
    a: "DevOps: deploy pipelines, runtime infrastructure, on-call, incident response, IaC. DevTools/DPE: local dev environments, build performance, internal tooling, codebase tooling. Different daily work, similar tech-adjacency, similar pay. Platform Engineer is the umbrella term that often combines both at smaller companies.",
  },
  {
    q: "Can you switch between DevOps and developer tools?",
    a: "Yes — skills transfer well in both directions. Many engineers have done both at different companies. The 2026 reality is that hybrid 'Platform Engineer' roles increasingly span both, letting you sample before specializing. Switching cost is low; don't over-think the lock-in.",
  },
];
