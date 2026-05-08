/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Converters fail. Browsers run out of memory mid-conversion, output
      files are corrupted, OCR returns gibberish, and the &ldquo;30
      seconds&rdquo; turns into 30 minutes of waiting. This guide is the
      systematic troubleshooting playbook — what to check, in what order,
      and the recovery options when things go truly wrong.
    </p>
  </>
);

export const toc = [
  { id: "common-failures", label: "Common failure modes" },
  { id: "speed", label: "Why conversions take so long" },
  { id: "large-files", label: "Handling very large files" },
  { id: "speed-tips", label: "Tips to convert faster" },
  { id: "recovery", label: "When a converter fails" },
];

export const body = (
  <>
    <h2 id="common-failures">Common failure modes (in order of frequency)</h2>

    <h3>1. Output looks corrupted or garbled</h3>
    <p>
      Almost always one of: wrong source format detected, encoding mismatch
      (UTF-8 vs Latin-1), or the file was a different format than its
      extension claimed. Diagnostic:
    </p>
    <ul>
      <li>Open the source in a hex editor (HxD on Windows, xxd on Mac/Linux). The first few bytes are usually a magic number identifying the actual format.</li>
      <li>Check the file extension matches the magic number. .pdf with no &ldquo;%PDF&rdquo; in the first 4 bytes is a renamed file.</li>
      <li>For text: check encoding. iconv (Mac/Linux) or Notepad++ &ldquo;Encoding&rdquo; menu (Windows) lets you re-save with explicit UTF-8.</li>
    </ul>

    <h3>2. Browser tab crashes or hangs</h3>
    <p>
      Memory exhaustion. Browser-side conversion holds the entire file in
      RAM, sometimes multiple times (during decoding, during processing,
      during encoding). For very large files, browser tabs are limited to
      around 2-4 GB of memory.
    </p>
    <p>Fixes:</p>
    <ul>
      <li>Close other tabs to free memory.</li>
      <li>Try Chrome instead of Safari (Chrome handles big tabs better in our experience).</li>
      <li>Split the file before converting — split a 1 GB PDF into 4 chunks of 250 MB.</li>
      <li>Switch to a desktop tool (FFmpeg, ImageMagick, Pandoc) for files &gt; 500 MB.</li>
    </ul>

    <h3>3. OCR returns gibberish</h3>
    <p>
      Tesseract gibberish usually means: low-resolution input, language
      mismatch (asking English OCR to parse Spanish text), or non-text
      content (a photograph mistaken for a scan). Fixes:
    </p>
    <ul>
      <li>Verify language selection matches the source.</li>
      <li>If the source is a scanned photo with poor lighting, retake or scan with better lighting before OCR.</li>
      <li>For mixed-language documents, run OCR per page or section with the right language each time.</li>
      <li>For low-resolution scans (under 200 DPI), upscale first using <a href="/tools/image-resizer">image resizer</a> with bicubic interpolation, then OCR.</li>
    </ul>

    <h3>4. PDF won&rsquo;t open in target app</h3>
    <p>
      The PDF is corrupted, password-protected, or uses a feature the target
      app doesn&rsquo;t support (XFA forms, layered PDFs). Diagnostic:
    </p>
    <ul>
      <li>Try opening in a different app (Adobe Reader, Preview, Chrome). If it opens elsewhere, the original target has a feature gap.</li>
      <li>Check for password protection — converters often fail silently on encrypted PDFs.</li>
      <li>For corrupted PDFs: <a href="/tools/pdf-organizer">our PDF organizer</a> or pdf-lib-based tools can sometimes salvage the readable pages.</li>
    </ul>

    <h3>5. Conversion completes but output is empty</h3>
    <p>
      Usually the source had no extractable content for the requested target.
      Examples: scanned PDF (no extractable text — needs OCR), image with
      transparency lost in flat conversion, encrypted document.
    </p>

    <h3>6. Special characters or accents missing</h3>
    <p>
      Encoding problem. Re-save the source as UTF-8, retry. If the source
      was Windows-1252 (common for Excel exports on Western European
      machines), the conversion needs to know to re-encode.
    </p>

    <h2 id="speed">Why some file conversions take so long</h2>
    <p>
      Speed depends on:
    </p>
    <ul>
      <li>
        <strong>Input file size and complexity.</strong> A 500 MB PDF takes
        longer than a 5 MB one. Multi-column or image-heavy PDFs are slower
        than text-only.
      </li>
      <li>
        <strong>Conversion type.</strong> Lossless reformats (PNG to BMP) are
        fast. Reflow + restructure (PDF to DOCX preserving layout) are slow.
      </li>
      <li>
        <strong>Browser-side vs cloud.</strong> Cloud servers have GPUs and
        more RAM. Browser-side relies on your CPU. Slower but private.
      </li>
      <li>
        <strong>OCR specifically.</strong> Always slow. 5–15 seconds per page
        for browser-side Tesseract. 1–2 seconds per page for cloud GPU OCR.
      </li>
      <li>
        <strong>Background tabs.</strong> Browsers throttle CPU on background
        tabs. Keep the conversion tab in foreground.
      </li>
    </ul>

    <h2 id="large-files">Converting large files: does size matter?</h2>
    <p>
      Yes, in three ways:
    </p>
    <ol>
      <li>
        <strong>Memory pressure.</strong> Browser tabs cap around 2-4 GB.
        Files over 500 MB are at risk of running out of memory mid-conversion.
        Symptoms: hang, crash, &ldquo;page unresponsive&rdquo; warnings.
      </li>
      <li>
        <strong>Linear-or-worse time complexity.</strong> Some conversions
        scale linearly with file size (bytes processed). Others scale
        super-linearly (image processing, video encoding). 10× the file size
        is rarely 10× the time.
      </li>
      <li>
        <strong>Upload bandwidth (if cloud-based).</strong> A 1 GB upload to
        cloud OCR over a 10 Mbps connection takes 13 minutes just to upload —
        before any processing.
      </li>
    </ol>
    <p>
      For files &gt; 500 MB, browser-only converters become unreliable. Switch
      to a desktop tool: FFmpeg for video, ImageMagick for images, Pandoc or
      LibreOffice headless for documents. They handle gigabytes without breaking
      a sweat.
    </p>

    <h2 id="speed-tips">Tips to convert files faster</h2>
    <ul>
      <li>
        <strong>Keep the conversion tab in foreground.</strong> Browser
        background tabs are throttled.
      </li>
      <li>
        <strong>Close other tabs.</strong> Free up memory and CPU for the
        conversion.
      </li>
      <li>
        <strong>Use lower-quality settings if you don&rsquo;t need pristine
        output.</strong> 90% JPG is visually identical to 100% but converts
        faster. 720p video instead of 1080p halves encoding time.
      </li>
      <li>
        <strong>Process in batches.</strong> Don&rsquo;t convert 100 files
        sequentially in 100 separate operations. Use a batch tool (FFmpeg,
        Pandoc) that re-uses the loaded engine.
      </li>
      <li>
        <strong>Skip unnecessary intermediate steps.</strong> PDF → DOCX → PDF
        is wasteful if you just need a different PDF. Find the direct path.
      </li>
      <li>
        <strong>Pre-process if possible.</strong> Strip pages you don&rsquo;t
        need before OCR. Resize huge images before format conversion. Don&rsquo;t
        OCR pages that are already text-extractable.
      </li>
    </ul>

    <h2 id="recovery">What happens when a file converter fails: recovery options</h2>
    <p>
      Failure recovery in priority order:
    </p>
    <ol>
      <li>
        <strong>Retry with a different tool.</strong> If browser-only fails,
        try desktop. If one cloud service fails, try another. Different
        engines have different failure modes — what one chokes on, another
        handles fine.
      </li>
      <li>
        <strong>Verify the source isn&rsquo;t corrupted.</strong> Open the
        source file in its native app. If it opens fine there, the converter
        is the problem. If it doesn&rsquo;t open, the source is the problem.
      </li>
      <li>
        <strong>Try converting via an intermediate format.</strong> Direct PDF
        → DOCX failing? Try PDF → ODT → DOCX, or PDF → Markdown → DOCX. The
        intermediate often dodges whatever the direct path is choking on.
      </li>
      <li>
        <strong>Salvage what you can.</strong> If the conversion partially
        succeeds (50 pages converted out of 100), accept the partial result
        and re-process only the failed pages.
      </li>
      <li>
        <strong>Recover from backup or original.</strong> Always keep the
        original. If the conversion eats the file, you have the master.
      </li>
      <li>
        <strong>If genuinely stuck:</strong> post on r/SoftwareRecs or
        SuperUser with the source file format, target format, and exact
        error. Specific edge cases often have community-known solutions.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "Try our PDF OCR tool (handles tricky scans)",
  targetSlug: "pdf-ocr-to-text",
};

export const faq = [
  {
    q: "My file converter isn't working — what do I do?",
    a: "Systematic checks: (1) verify source file isn't corrupted (opens in native app?), (2) check magic-number vs file extension match, (3) for browser hangs, close other tabs / try Chrome / split the file, (4) for gibberish output, check encoding (UTF-8 vs Latin-1) and OCR language. If still stuck, try a different converter or convert via an intermediate format.",
  },
  {
    q: "What happens when a file converter fails?",
    a: "Recovery options: retry with a different tool, verify source isn't corrupted, try an intermediate format (PDF → ODT → DOCX often works when direct PDF → DOCX fails), salvage partial output, recover from original (always keep masters). Last resort: post on r/SoftwareRecs with format details — specific edge cases have community-known fixes.",
  },
  {
    q: "Why do file conversions take so long?",
    a: "Five factors: file size and complexity, conversion type (lossless reformats are fast, reflow + restructure are slow), browser-side vs cloud (cloud has GPUs), OCR is always slow, browser background tabs get CPU-throttled. To speed up: keep tab in foreground, close other tabs, use lower quality where acceptable, batch with desktop tools.",
  },
  {
    q: "Does file size affect conversion speed?",
    a: "Yes. Memory pressure caps browser tabs around 2-4 GB. Time complexity is linear-or-worse with size. Upload bandwidth matters for cloud tools. Files over 500 MB push browser tools to their limits — switch to FFmpeg / ImageMagick / Pandoc / LibreOffice headless desktop tools for gigabyte-scale files.",
  },
];
