/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Two niche but high-search-intent conversion areas: ebook formats
      (PDF ↔ EPUB ↔ MOBI for reading on e-readers) and 3D printing formats
      (STL ↔ OBJ ↔ 3MF for slicing). Both have specific gotchas free
      converters often gloss over. This guide covers what to use, when, and
      what to expect.
    </p>
  </>
);

export const toc = [
  { id: "ebook-overview", label: "Ebook format overview" },
  { id: "pdf-to-epub", label: "PDF to EPUB for e-readers" },
  { id: "scientific", label: "Scientific PDFs with math symbols" },
  { id: "3d-overview", label: "3D printing format overview" },
  { id: "stl-obj", label: "STL to OBJ for 3D printing" },
  { id: "3mf", label: "Converting 3MF without losing details" },
];

export const body = (
  <>
    <h2 id="ebook-overview">Ebook format overview</h2>
    <p>
      The major ebook formats and what each is for:
    </p>
    <ul>
      <li>
        <strong>EPUB:</strong> open-standard, reflowable. Adjusts to screen size
        — text wraps, font scales. Used by Apple Books, Kobo, Adobe Digital
        Editions, most ebook readers except Kindle.
      </li>
      <li>
        <strong>MOBI:</strong> Amazon&rsquo;s older Kindle format. Mostly
        deprecated in 2026 — Amazon stopped accepting MOBI uploads in late
        2022. Convert old MOBI to EPUB (or AZW3) for forward compatibility.
      </li>
      <li>
        <strong>AZW3 / KF8:</strong> Amazon&rsquo;s current Kindle format.
        Better typography than MOBI. Newer Kindles support it.
      </li>
      <li>
        <strong>KFX:</strong> Amazon&rsquo;s newest format. Used by recent
        Kindles. Partially supported by Calibre + plugins; full support is
        difficult because the format is proprietary.
      </li>
      <li>
        <strong>PDF:</strong> not really an ebook format. Fixed-layout means it
        looks bad on small screens. Avoid for e-readers if you have any other
        choice.
      </li>
    </ul>
    <p>
      The universal converter: <strong>Calibre</strong> (free, open-source).
      Drag in your file, pick output format, get the result. Calibre handles
      almost every ebook format combination including PDF→EPUB.
    </p>

    <h2 id="pdf-to-epub">Converting PDF to EPUB for e-readers</h2>
    <p>
      The workflow:
    </p>
    <ol>
      <li>
        <strong>Install Calibre.</strong> Free, available on Mac, Windows, Linux.
      </li>
      <li>
        <strong>Drag the PDF into Calibre.</strong> It appears in your library.
      </li>
      <li>
        <strong>Click Convert Books.</strong> Select EPUB as the output format.
      </li>
      <li>
        <strong>Adjust settings.</strong> The defaults are good. For PDFs with
        complex layout, try the &ldquo;PDF Input&rdquo; tab and toggle
        &ldquo;No images&rdquo; if you want text-only.
      </li>
      <li>
        <strong>Click OK.</strong> EPUB lands in your library. Send to your
        e-reader.
      </li>
    </ol>
    <p>
      Caveats:
    </p>
    <ul>
      <li>
        Multi-column PDFs convert poorly. Calibre tries to flatten columns into
        single-column reflowable text but the order can scramble.
      </li>
      <li>
        Image-heavy PDFs become large EPUBs. Compress images first if size is
        a concern.
      </li>
      <li>
        Forms and interactive elements don&rsquo;t convert.
      </li>
      <li>
        For Kindle, convert PDF → EPUB → AZW3 (Calibre handles all three),
        then send via Send-to-Kindle email or USB.
      </li>
    </ul>

    <h2 id="scientific">Converting scientific PDFs with math symbols</h2>
    <p>
      Math notation in PDFs is usually rendered as embedded fonts or images.
      The conversion challenge:
    </p>
    <ul>
      <li>
        <strong>Calibre PDF → EPUB:</strong> preserves math as embedded images
        (the rendered glyphs). Readable, but you can&rsquo;t edit or re-render.
      </li>
      <li>
        <strong>Mathpix Snip:</strong> commercial, but converts math images into
        editable LaTeX. Best for academics needing to extract equations.
      </li>
      <li>
        <strong>arXiv source:</strong> if the paper is on arXiv, download the
        LaTeX source instead of the PDF. Compile to EPUB with Pandoc:
        <code>pandoc paper.tex -o paper.epub --mathml</code>. Math renders
        natively in EPUB readers that support MathML.
      </li>
      <li>
        <strong>Pandoc + custom workflow:</strong> for high-volume scientific
        document conversion, Pandoc can take Markdown with LaTeX math and
        produce EPUB / DOCX / PDF preserving the math.
      </li>
    </ul>
    <p>
      The honest answer: scientific PDF → readable e-reader format works
      OK for casual reading. For editing or re-rendering math, you need the
      LaTeX source (or pay Mathpix).
    </p>

    <h2 id="3d-overview">3D printing format overview</h2>
    <ul>
      <li>
        <strong>STL (Stereolithography):</strong> the universal 3D printing
        format. Just a triangle mesh — no color, no texture, no metadata. Every
        slicer accepts it. Default for hobbyist 3D printing.
      </li>
      <li>
        <strong>OBJ:</strong> mesh + texture coordinates + vertex colors. Used
        for 3D rendering and game development; sometimes for color 3D printing.
      </li>
      <li>
        <strong>3MF (3D Manufacturing Format):</strong> Microsoft + 3D printing
        consortium format. Includes mesh, color, materials, multi-part assemblies.
        The modern replacement for STL — but adoption is slower than expected.
      </li>
      <li>
        <strong>STEP / IGES:</strong> CAD interchange formats. Parametric
        models, not just meshes. Used in engineering. Most consumer slicers
        can&rsquo;t read STEP — convert to STL first.
      </li>
      <li>
        <strong>G-code:</strong> the slicer&rsquo;s output, the printer&rsquo;s
        input. Not a CAD format — printer-specific machine instructions.
      </li>
    </ul>

    <h2 id="stl-obj">Converting STL to OBJ for 3D printing</h2>
    <p>
      Most 3D modeling tools handle this round-trip. The free options:
    </p>
    <ul>
      <li>
        <strong>Blender:</strong> File → Import STL → File → Export OBJ.
        Preserves geometry, lets you add textures and vertex colors before
        export.
      </li>
      <li>
        <strong>MeshLab:</strong> minimal viewer-converter for mesh formats.
        Drag-and-drop conversion. Smaller install than Blender.
      </li>
      <li>
        <strong>FreeCAD:</strong> import STL, export to OBJ. Useful if you also
        need to edit the geometry.
      </li>
      <li>
        <strong>Online converters:</strong> upload STL, download OBJ. Convenient
        but uploads your model. Avoid for proprietary or commercial designs.
      </li>
    </ul>
    <p>
      The conversion itself is straightforward — both formats represent a
      triangle mesh, OBJ adds texture coordinates which STL doesn&rsquo;t have.
      What can go wrong:
    </p>
    <ul>
      <li>
        <strong>Scale mismatch.</strong> STL doesn&rsquo;t encode units. OBJ
        does. The converter has to guess. Verify the size in the slicer.
      </li>
      <li>
        <strong>Triangle order.</strong> Some tools reverse winding order
        which can flip normals. Check with normals visualization in your
        slicer.
      </li>
      <li>
        <strong>Vertex precision.</strong> STL stores vertices as binary
        floats. OBJ uses ASCII text. Round-trip can introduce tiny precision
        errors — usually invisible but rarely problematic for ultra-precise
        prints.
      </li>
    </ul>

    <h2 id="3mf">Converting 3MF without losing 3D printing details</h2>
    <p>
      3MF carries more information than STL: per-part materials, colors,
      multi-part assemblies, embedded thumbnails. Converting 3MF → STL throws
      this away. The strategies:
    </p>
    <ul>
      <li>
        <strong>If your slicer accepts 3MF:</strong> just use 3MF directly. Cura,
        PrusaSlicer, Bambu Studio all support it. No conversion needed.
      </li>
      <li>
        <strong>If you must convert to STL:</strong> export each part as a
        separate STL file. Loses the multi-part assembly metadata but
        preserves geometry. Re-assemble in the slicer.
      </li>
      <li>
        <strong>3MF to OBJ:</strong> Blender + the 3MF import addon, then
        export OBJ. Preserves colors and materials better than STL.
      </li>
      <li>
        <strong>For sharing:</strong> 3MF is the right modern format. Keep your
        master in 3MF; export to STL only when targeting old slicers.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Try our SVG to PNG converter",
  targetSlug: "svg-to-png",
};

export const faq = [
  {
    q: "How do I convert PDF to EPUB for better e-reader reading?",
    a: "Use Calibre (free, open-source). Drag the PDF in, click Convert Books, select EPUB. Defaults are good. For Kindle, then convert EPUB to AZW3. Multi-column PDFs convert poorly — text order can scramble. Image-heavy PDFs make large EPUBs.",
  },
  {
    q: "How do I convert STL to OBJ files for 3D printing?",
    a: "Free options: Blender (most powerful, lets you add textures), MeshLab (lightweight viewer-converter), FreeCAD (good if you also need to edit). All preserve geometry. STL doesn't encode units or texture coordinates; verify scale in your slicer after conversion.",
  },
  {
    q: "How do I convert 3MF without losing 3D printing details?",
    a: "If your slicer accepts 3MF (Cura, PrusaSlicer, Bambu Studio all do), use 3MF directly. If you must convert to STL: export each part as separate STL — preserves geometry but loses multi-part assembly. To OBJ: use Blender's 3MF import addon, export OBJ — preserves colors better than STL.",
  },
  {
    q: "How do I convert scientific PDFs with math symbols to EPUB?",
    a: "Calibre PDF → EPUB preserves math as rendered images (readable but not editable). For editable LaTeX: Mathpix (paid) extracts equations. If the paper is on arXiv, download LaTeX source instead and use Pandoc with --mathml flag — math renders natively in MathML-supporting readers.",
  },
];
