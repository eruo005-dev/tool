/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Converting one file is easy. Converting 500 files is where most online
      converters bail out — free tiers cap at 1–5 files per session and the
      paid options charge per file or per minute. The right answer depends on
      whether you&rsquo;re a one-time batcher or a recurring batcher, and
      whether your files are sensitive or not.
    </p>
    <p>
      This guide is the practical batch-conversion playbook: when to use
      which approach, how to handle different file types in one go, and the
      free-tool combos that beat paid services for most workflows.
    </p>
  </>
);

export const toc = [
  { id: "approaches", label: "Three approaches to batch conversion" },
  { id: "automation", label: "Automation for repetitive tasks" },
  { id: "mixed-types", label: "Converting multiple file types at once" },
  { id: "speed", label: "Why batch conversion is sometimes slow" },
  { id: "tools", label: "Tools by scale" },
];

export const body = (
  <>
    <h2 id="approaches">Three approaches to batch conversion</h2>
    <p>
      Pick based on volume + sensitivity:
    </p>
    <ol>
      <li>
        <strong>One-time, &lt; 50 files, non-sensitive:</strong> upload to a
        free online batch service like CloudConvert (10 minutes/day free) or
        FreeConvert (50MB cap). Sensitive content doesn&rsquo;t belong here —
        files go through their servers.
      </li>
      <li>
        <strong>One-time, any size, sensitive:</strong> install the appropriate
        free desktop tool (Pandoc for documents, FFmpeg for video, ImageMagick
        for images, Calibre for ebooks) and run a one-line batch command. 5
        minutes of setup, infinite files, fully local.
      </li>
      <li>
        <strong>Recurring batch (every week / every release):</strong> automate
        with a script. macOS Automator / Shortcuts, Windows Power Automate, or
        a bash/PowerShell script wrapping the free CLI tools. Set up once,
        runs forever.
      </li>
    </ol>

    <h2 id="automation">Batch conversion automation for repetitive tasks</h2>
    <p>
      The 5-minute automations that save 50 hours/year:
    </p>

    <h3>macOS — Automator workflow</h3>
    <pre><code>{`1. Open Automator → New → Quick Action
2. Drag "Get Specified Finder Items" or "Folder Action"
3. Drag the conversion action (e.g. "Change Type of Images")
4. Save as a Quick Action — appears in right-click menu

Or use a Shell Script step with one of:
  - sips -s format png input.jpg --out output.png
  - magick mogrify -format png *.jpg
  - pandoc -o output.docx input.md`}</code></pre>

    <h3>Windows — PowerShell loop</h3>
    <pre><code>{`# Convert all .docx in folder to .pdf using LibreOffice headless
Get-ChildItem -Filter "*.docx" | ForEach-Object {
  & "C:\\Program Files\\LibreOffice\\program\\soffice.exe" \\
    --headless --convert-to pdf $_.FullName
}

# Convert all images to webp using ImageMagick
Get-ChildItem -Filter "*.jpg" | ForEach-Object {
  magick $_.FullName "$($_.BaseName).webp"
}`}</code></pre>

    <h3>Cross-platform — Pandoc + bash</h3>
    <pre><code>{`# Convert all markdown in folder to HTML
for f in *.md; do
  pandoc "$f" -o "\${f%.md}.html"
done

# Convert all CSV to JSON (using jq)
for f in *.csv; do
  ... (csvjson tools or our online converter for one-offs)
done`}</code></pre>

    <h2 id="mixed-types">Converting multiple file types at once</h2>
    <p>
      The honest answer: most batch tools handle one file type at a time. A
      folder full of mixed PDFs, DOCXs, and images doesn&rsquo;t get
      converted by a single command. The two practical workarounds:
    </p>
    <ol>
      <li>
        <strong>Group then process.</strong> Move files into per-type folders
        (PDFs in one, images in another), run the right batch command on each.
        2 minutes of file management beats trying to write a single mega-script.
      </li>
      <li>
        <strong>Universal converters.</strong> Pandoc handles 30+ document
        formats; LibreOffice headless handles all Office formats and
        round-trips with reasonable fidelity. ImageMagick covers ~200 image
        formats. None of these is truly universal but together they cover
        ~99% of conversion needs.
      </li>
    </ol>
    <p>
      For SaaS solutions: CloudConvert handles mixed batches but charges per
      conversion or per minute on free tier. FreeConvert similar. Both upload
      files to their servers — not for sensitive content.
    </p>

    <h2 id="speed">Why batch conversion is sometimes slow</h2>
    <p>
      Conversion speed depends on:
    </p>
    <ul>
      <li>
        <strong>File size.</strong> Doubles the file, doubles the time —
        roughly linear for most formats. Video is the exception (compression
        algorithms are super-linear with quality settings).
      </li>
      <li>
        <strong>Source format complexity.</strong> Plain text → HTML: instant.
        Multi-column PDF with tables → DOCX: orders of magnitude slower because
        layout reflow is hard.
      </li>
      <li>
        <strong>Quality settings.</strong> Higher output quality = more
        compute. The default options are usually a middle ground; customizing
        for &ldquo;maximum quality&rdquo; in a batch can 10× the runtime.
      </li>
      <li>
        <strong>Disk vs memory.</strong> Reading 500 small files from disk is
        slow on spinning drives, fast on SSDs. Batch tools often process
        in-memory which is much faster.
      </li>
      <li>
        <strong>OCR specifically:</strong> the slowest. 5–15 seconds per PDF
        page for browser-side OCR; cloud GPUs do it in 1–2 seconds. Plan
        accordingly.
      </li>
    </ul>

    <h2 id="tools">Tools by batch scale</h2>
    <table>
      <thead>
        <tr>
          <th>Scale</th>
          <th>Type</th>
          <th>Recommended tool</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1–5 files</td><td>Any</td><td>Browser-only converters on this site (one at a time)</td></tr>
        <tr><td>5–50 files, non-sensitive</td><td>Mixed</td><td>CloudConvert / FreeConvert (free tiers)</td></tr>
        <tr><td>50+ files, documents</td><td>Documents</td><td>Pandoc CLI or LibreOffice headless</td></tr>
        <tr><td>50+ files, images</td><td>Images</td><td>ImageMagick CLI or macOS Quick Actions</td></tr>
        <tr><td>50+ files, video</td><td>Video</td><td>FFmpeg CLI</td></tr>
        <tr><td>Recurring weekly+</td><td>Any</td><td>Automator (Mac) / PowerShell (Win) / cron + bash</td></tr>
        <tr><td>Enterprise scale</td><td>Mixed</td><td>CloudConvert API or self-hosted on Lambda</td></tr>
      </tbody>
    </table>
  </>
);

export const cta = {
  label: "Try our XML to CSV converter (browser-only)",
  targetSlug: "xml-to-csv",
};

export const faq = [
  {
    q: "How do I convert hundreds of files at once?",
    a: "For non-sensitive content: CloudConvert / FreeConvert free tiers handle 5-50 files. For sensitive content or 50+ files: install Pandoc (documents), ImageMagick (images), or FFmpeg (video) and run a one-line batch command in terminal. Recurring weekly: automate with macOS Automator, PowerShell, or bash + cron.",
  },
  {
    q: "Can I convert multiple file types at once?",
    a: "Most batch tools handle one type at a time. Workaround: group files by type into folders, run the appropriate batch command per folder. CloudConvert handles mixed batches but uploads files to their servers — not for sensitive content. Pandoc + LibreOffice + ImageMagick together cover ~99% of needs.",
  },
  {
    q: "Why is batch conversion sometimes slow?",
    a: "Five factors: file size (linear), source format complexity (multi-column PDFs are slow), quality settings (max quality 10×s runtime), disk speed (SSDs vs HDDs), and operation type — OCR is the slowest at 5-15 seconds per PDF page browser-side.",
  },
  {
    q: "How do I automate batch conversion for recurring tasks?",
    a: "macOS Automator / Shortcuts builds drag-and-drop workflows. Windows PowerShell loops handle scripting. Cross-platform bash + Pandoc / FFmpeg / ImageMagick CLIs for power users. 5-minute setup, runs forever — saves significant time over recurring manual conversion.",
  },
];
