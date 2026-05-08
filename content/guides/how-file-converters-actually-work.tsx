/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      File conversion looks magical from the outside — drag a PDF in, get a
      Word doc out. Behind the scenes it&rsquo;s the same set of techniques
      every converter uses. Understanding the basics helps you pick the right
      tool, debug failures, and call out marketing-driven nonsense in the AI-
      converter wave of 2026.
    </p>
  </>
);

export const toc = [
  { id: "basic-pipeline", label: "The basic conversion pipeline" },
  { id: "lossy-decoding", label: "Decoding, transforming, encoding" },
  { id: "encrypted", label: "Can you convert encrypted files?" },
  { id: "rare-formats", label: "Converting rare formats (the long tail)" },
  { id: "myths", label: "File converter myths debunked" },
];

export const body = (
  <>
    <h2 id="basic-pipeline">The basic conversion pipeline</h2>
    <p>
      Every file converter does three steps:
    </p>
    <ol>
      <li>
        <strong>Decode.</strong> Read the source file according to its format
        spec. A PDF gets parsed into objects (pages, text, images). A JPG gets
        decompressed into a pixel grid. A CSV gets split into rows and columns.
      </li>
      <li>
        <strong>Transform.</strong> Convert the in-memory representation to one
        that matches the target format. PDF text → Word text + paragraph
        styles. Pixel grid → re-encoded with a different compression algorithm.
        CSV rows → JSON objects.
      </li>
      <li>
        <strong>Encode.</strong> Write the transformed data in the target
        format&rsquo;s spec. Generate the DOCX zip-of-XML. Write the JPG
        bytestream. Output the JSON string.
      </li>
    </ol>
    <p>
      Quality and accuracy depend on how well each step is implemented. The
      decode step is usually the bottleneck — formats like PDF have decades of
      edge cases that &ldquo;technically valid&rdquo; software produces but
      that breaks naive parsers.
    </p>

    <h2 id="lossy-decoding">Why information disappears: decoding limits</h2>
    <p>
      Some information is lost in the decode step before transformation even
      begins:
    </p>
    <ul>
      <li>
        <strong>Scanned PDFs.</strong> Decoded as images, not text. To get text
        out, OCR is required (a separate decoding step on top of PDF parsing).
      </li>
      <li>
        <strong>Lossy-compressed source.</strong> JPG decode produces pixels,
        not the original photographer&rsquo;s pre-compression image. The lost
        detail can&rsquo;t be recovered.
      </li>
      <li>
        <strong>Proprietary file structures.</strong> Some old or rare formats
        have no published spec. Decoders are reverse-engineered, sometimes
        incompletely. Edge cases break.
      </li>
      <li>
        <strong>Embedded metadata not exposed.</strong> Some converters
        deliberately ignore metadata for simplicity. Even if the source has
        EXIF GPS data, the converter may not pass it through.
      </li>
    </ul>
    <p>
      The honest reality: even a perfectly-built converter can&rsquo;t recover
      information that was never in the source. Marketing copy that promises
      &ldquo;perfect conversion&rdquo; is glossing over which steps it skipped.
    </p>

    <h2 id="encrypted">Can you convert encrypted files?</h2>
    <p>
      Mostly no. Encrypted files (password-protected PDFs, encrypted ZIPs,
      DRM-protected ebooks) are designed to be unreadable without the key. A
      converter can only decode what it can read, which means:
    </p>
    <ul>
      <li>
        <strong>Password-protected PDFs:</strong> if you have the password, most
        converters accept it as input and proceed. If you don&rsquo;t have the
        password, no legitimate converter will brute-force it for you.
      </li>
      <li>
        <strong>Encrypted ZIP / 7z:</strong> same. Provide password, converter
        proceeds. No password, no conversion.
      </li>
      <li>
        <strong>DRM-protected media (Kindle KFX, Audible AAX, iTunes M4P):</strong>{" "}
        the DRM is the encryption. Removing it is illegal in many jurisdictions
        (DMCA section 1201 in the US). No reputable converter ships DRM-
        circumvention.
      </li>
      <li>
        <strong>Self-encrypted documents (Word / PDF passwords you set):</strong>{" "}
        you typically can&rsquo;t recover them via a converter. Password recovery
        tools exist; their legality depends on whether you&rsquo;re recovering
        your own password vs someone else&rsquo;s.
      </li>
    </ul>
    <p>
      If you&rsquo;ve genuinely lost your own password, vendor support paths
      (Microsoft account recovery, Adobe Acrobat password reset) sometimes
      work. Otherwise, plan to live without the file or reconstruct it from
      the original sources.
    </p>

    <h2 id="rare-formats">Converting rare formats: is it possible?</h2>
    <p>
      Almost always yes, with some patience. The framework:
    </p>
    <ol>
      <li>
        <strong>Check if the format has a published spec.</strong> Most
        non-trivial formats do. ISO standards, RFC, vendor whitepapers. If
        the spec exists, an open-source decoder probably exists.
      </li>
      <li>
        <strong>Search GitHub for the format name.</strong>{" "}
        &ldquo;[format] parser&rdquo; or &ldquo;[format] reader&rdquo; usually
        surfaces 1-3 implementations. Check stars + last-commit-date for
        viability.
      </li>
      <li>
        <strong>For binary formats with no spec:</strong> reverse-engineering
        guides on r/ReverseEngineering or specific format-research sites
        (Format Wiki) sometimes have field-by-field breakdowns.
      </li>
      <li>
        <strong>For truly obscure formats:</strong> if the file is a few KB,
        a hex editor + careful pattern matching often reveals the structure.
        Time-consuming but achievable.
      </li>
      <li>
        <strong>Last resort:</strong> hire a freelancer who specializes in
        data-format work. $100–500 for a one-off conversion of a single
        file is sometimes worth it.
      </li>
    </ol>

    <h2 id="myths">File converter myths: what you don&rsquo;t need to worry about</h2>
    <p>
      The myths that show up repeatedly on Reddit, debunked:
    </p>

    <h3>Myth: &ldquo;Converting files multiple times always damages quality.&rdquo;</h3>
    <p>
      Only true for lossy chains. PNG → BMP → TIFF → PNG is identical to the
      original. Even one lossy step then lossless preserves whatever quality
      survived the lossy save. Damage compounds only with repeated lossy
      operations.
    </p>

    <h3>Myth: &ldquo;PDFs always lose quality when edited.&rdquo;</h3>
    <p>
      Editing a PDF text field directly (in Acrobat) doesn&rsquo;t lose
      quality — text is text. Editing pixel-based content (rasterized images
      inside a PDF) does. Most simple text edits are loss-free.
    </p>

    <h3>Myth: &ldquo;AI-powered converters are smarter and more accurate.&rdquo;</h3>
    <p>
      For OCR specifically, modern AI models do outperform classical OCR on
      degraded inputs. For everything else (image format conversion, document
      structure, data format conversion), the underlying tech is the same;
      AI is marketing copy. The exception is layout-aware document
      conversion (PDF→DOCX preserving complex tables) where modern ML helps —
      but you pay a real cost for it.
    </p>

    <h3>Myth: &ldquo;Free converters are slower than paid.&rdquo;</h3>
    <p>
      Free CLI tools (Pandoc, FFmpeg, ImageMagick) are typically faster than
      paid SaaS, because they don&rsquo;t have the upload-process-download
      overhead. Browser-only is slower than cloud only because of the CPU
      gap, not because of the &ldquo;free&rdquo; tier.
    </p>

    <h3>Myth: &ldquo;Converting between similar formats is always lossless.&rdquo;</h3>
    <p>
      JPG ↔ HEIC are both lossy formats; converting from one to the other
      decodes one lossy format and re-encodes in another, accumulating
      artifacts both ways. Same for any pair of lossy formats.
    </p>

    <h3>Myth: &ldquo;A larger output file means higher quality.&rdquo;</h3>
    <p>
      Sometimes. A 5MB lossless PNG is higher quality than a 1MB JPG of the
      same image. But a 50MB JPG of a 5MB source isn&rsquo;t higher quality
      than the source — re-encoding doesn&rsquo;t recover lost data, it just
      pads the file with redundant compression.
    </p>
  </>
);

export const cta = {
  label: "Convert XML to CSV (free, browser-only)",
  targetSlug: "xml-to-csv",
};

export const faq = [
  {
    q: "How do file format converters actually work?",
    a: "Three-step pipeline: decode (parse source per format spec), transform (translate to target format's data model), encode (write target format bytes). Quality depends on each step. Decode is usually the bottleneck — real-world files have edge cases that simple parsers break on. Marketing copy promising 'perfect' conversion is usually skipping difficult cases.",
  },
  {
    q: "Can you convert encrypted files?",
    a: "If you have the password/key, yes — most converters accept it. If you don't, no — encryption is designed to prevent reading without the key. DRM-protected media (Kindle KFX, Audible AAX) is illegal to circumvent in most jurisdictions. Lost own passwords sometimes recoverable via vendor support; otherwise plan to reconstruct.",
  },
  {
    q: "Can I convert between rare file formats?",
    a: "Almost always, with patience. Check if the format has a published spec, search GitHub for parsers, consult format research sites (Format Wiki) for reverse-engineered specs, or use a hex editor for truly obscure formats. Last resort: hire a freelancer specialized in data-format work for $100-500 per file.",
  },
  {
    q: "What file converter myths should I ignore?",
    a: "Multiple conversions don't always lose quality (only lossy chains do). PDFs don't always lose quality on edit. 'AI-powered' converters are mostly marketing — the exception is OCR. Free CLI converters are often faster than paid SaaS. Larger output files don't mean higher quality — they may just be re-encoded with bloated settings.",
  },
];
