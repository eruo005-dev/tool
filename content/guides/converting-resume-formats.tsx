/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Should my resume be a PDF or a Word doc?&rdquo; is one of the most
      asked questions on r/jobs and r/resumes. The answer depends on the
      application context, the ATS the company uses, and what stage of review
      you&rsquo;re at. This guide is the practical breakdown.
    </p>
  </>
);

export const toc = [
  { id: "default", label: "The default: PDF, with caveats" },
  { id: "ats", label: "When ATSes prefer Word" },
  { id: "plain-text", label: "When plain text wins" },
  { id: "what-recruiters-want", label: "What recruiters actually open" },
  { id: "tools", label: "Resume conversion tools" },
];

export const body = (
  <>
    <h2 id="default">The default: PDF (with caveats)</h2>
    <p>
      For most direct-to-recruiter and most direct-to-careers-page applications,
      PDF is the right default. Reasons:
    </p>
    <ul>
      <li>
        <strong>Layout fidelity.</strong> Your resume looks the same on the
        recruiter&rsquo;s machine as on yours. No mystery font substitution,
        no margin shifts.
      </li>
      <li>
        <strong>Universal compatibility.</strong> Every device opens PDFs.
        Recruiters won&rsquo;t need to ask you to re-send.
      </li>
      <li>
        <strong>Hard to accidentally edit.</strong> Word docs sometimes get
        annotated by recruiters during review and the edits propagate to
        whoever opens the file next. PDFs preserve your original.
      </li>
      <li>
        <strong>Smaller file size.</strong> Compressed text + embedded fonts
        beats the bloat of DOCX in most cases.
      </li>
    </ul>
    <p>
      The caveat: if the job application explicitly asks for Word (.docx), or
      if you&rsquo;re feeding into an ATS upload form that has a strong
      preference for Word, follow what they ask for.
    </p>

    <h2 id="ats">When ATSes prefer Word</h2>
    <p>
      Some older ATSes (Taleo, iCIMS old versions) parse Word more reliably
      than PDF — the text-extraction logic is more permissive. The signals to
      watch:
    </p>
    <ul>
      <li>
        <strong>Application form upload accepts &ldquo;.doc, .docx, .pdf&rdquo;</strong>{" "}
        with PDF last in the list — they&rsquo;re technically supporting it
        but their parser was built for Word.
      </li>
      <li>
        <strong>Application form parses your Word doc into form fields,
        but doesn&rsquo;t parse PDF.</strong> Strong signal — submit Word.
      </li>
      <li>
        <strong>Application form says &ldquo;.docx preferred.&rdquo;</strong>{" "}
        Listen.
      </li>
    </ul>
    <p>
      For most modern ATSes (Greenhouse, Lever, Ashby, Workday) PDF is fine —
      they&rsquo;ve had years to fix PDF parsing and the bug rate is low.
    </p>

    <h2 id="plain-text">When plain text wins</h2>
    <p>
      Plain text (TXT) is rarely the right primary format, but useful in
      specific situations:
    </p>
    <ul>
      <li>
        <strong>You&rsquo;re pasting into a text-only application form.</strong>{" "}
        A plain-text version preserves no formatting but you control exactly
        what goes in. Useful when the upload mangles your formatted version.
      </li>
      <li>
        <strong>You&rsquo;re running the resume through{" "}
        <a href="/tools/resume-keyword-match-scorer">our keyword match
        scorer</a></strong> or similar tools — text is the input format.
      </li>
      <li>
        <strong>You&rsquo;re submitting via email body</strong> (rare in 2026,
        but happens for personal-network referrals). Plain text in the email
        body + a PDF attachment is good; the recipient sees the content
        immediately.
      </li>
    </ul>

    <h2 id="what-recruiters-want">What recruiters actually open</h2>
    <p>
      Anonymous recruiter surveys consistently show:
    </p>
    <ul>
      <li>
        Most recruiters open PDFs first. They look more polished and require
        no decision about what to do with formatting.
      </li>
      <li>
        Recruiters who use specific ATS extensions sometimes prefer Word
        because it parses cleanly into the system.
      </li>
      <li>
        Plain text is rarely opened directly by recruiters; it&rsquo;s
        primarily an ATS-input format.
      </li>
    </ul>
    <p>
      The practical workflow:
    </p>
    <ol>
      <li>
        Maintain your master resume in <strong>Word (DOCX) or Google Docs</strong> —
        easiest to edit.
      </li>
      <li>
        For each application, tailor the master (see our{" "}
        <a href="/guides/tailor-your-resume-to-job-postings-for-free">
          resume tailoring guide
        </a>{" "}
        for the workflow).
      </li>
      <li>
        Export as <strong>PDF</strong> for the application — this is what 95%
        of submissions should be.
      </li>
      <li>
        Keep the latest <strong>DOCX</strong> handy in case an ATS specifically
        asks for it.
      </li>
      <li>
        Generate a <strong>plain-text version</strong> only when you&rsquo;re
        pasting into a text field.
      </li>
    </ol>

    <h2 id="tools">Resume conversion tools</h2>
    <ul>
      <li>
        <strong>Word → PDF:</strong> File → Save As → PDF. Built in. Free.
      </li>
      <li>
        <strong>Google Docs → PDF:</strong> File → Download → PDF Document.
        Free. Cloud-based but the resume isn&rsquo;t typically sensitive.
      </li>
      <li>
        <strong>PDF → Word (when an ATS asks):</strong> see our{" "}
        <a href="/guides/pdf-to-word-and-editable-text">PDF to Word guide</a>.
      </li>
      <li>
        <strong>PDF → plain text:</strong>{" "}
        <a href="/tools/pdf-to-text">our PDF to text tool</a>. Browser-only.
      </li>
      <li>
        <strong>Resume keyword match scoring:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">our scorer</a> shows JD
        keyword overlap. Aim for 70%+ before submitting.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Score your resume against the JD (free)",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "Should my resume be PDF, Word, or plain text?",
    a: "Default to PDF for most applications — preserves layout, universal compatibility, hard to accidentally edit. Some older ATSes (Taleo, older iCIMS) parse Word better — submit DOCX if the form's signals suggest it. Plain text only when pasting into a text field or running through a parser tool.",
  },
  {
    q: "Will an ATS reject my PDF resume?",
    a: "Most modern ATSes (Greenhouse, Lever, Ashby, Workday) parse PDF fine. Older systems (some Taleo, iCIMS deployments) parse Word more reliably. Watch for signals: if the application says '.docx preferred' or parses Word into form fields but not PDF, submit Word. Otherwise PDF.",
  },
  {
    q: "How do I convert my Word resume to PDF?",
    a: "In Word: File → Save As → PDF. In Google Docs: File → Download → PDF Document. Both built-in, free. Always preview the PDF before submitting — fonts, page breaks, and bullet styles can shift. Fix in the source DOCX, not the PDF.",
  },
  {
    q: "Why would I want a plain-text version of my resume?",
    a: "For pasting into text-only application forms (some older ATSes), running through resume keyword scorers like our free tool, or submitting via email body for personal-network referrals. It's never the primary submission format — it's a working format for specific workflows.",
  },
];
