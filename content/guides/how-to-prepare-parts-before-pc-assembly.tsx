/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      If you&rsquo;re hiring someone to build your gaming PC, the prep work you do
      before dropping off parts saves time, prevents misunderstandings, and
      protects your warranty rights. This is the practical pre-build checklist.
    </p>
  </>
);

export const toc = [
  { id: "before-buying", label: "Before buying parts" },
  { id: "before-dropoff", label: "Before drop-off" },
  { id: "what-to-bring", label: "What to bring with the parts" },
  { id: "after-pickup", label: "After pickup" },
];

export const body = (
  <>
    <h2 id="before-buying">Before buying parts</h2>
    <ol>
      <li>
        <strong>Get the builder&rsquo;s parts compatibility check.</strong> Most
        professional builders will review your parts list and flag compatibility
        issues (CPU/motherboard mismatch, PSU wattage shortfall, case clearance for
        cooler) before you commit to purchases. Free service. Take advantage.
      </li>
      <li>
        <strong>Confirm warranty terms.</strong> Some builders only warranty their
        labor on parts they sourced. Verify they&rsquo;ll labor-warranty parts you
        bring in.
      </li>
      <li>
        <strong>Confirm OS license terms.</strong> Bring your own Windows license
        (cheaper) or have them include one (convenient). Verify before buying.
      </li>
      <li>
        <strong>Check the calendar.</strong> Some builders book 1-3 weeks out. If
        you have a specific need-by date, book early.
      </li>
    </ol>

    <h2 id="before-dropoff">Before drop-off — preparation checklist</h2>
    <ul>
      <li>
        <strong>Keep all original boxes.</strong> The builder may need them for
        returns / exchanges if a part is DOA. Plus the boxes hold the manufacturer
        warranty cards.
      </li>
      <li>
        <strong>Save all receipts.</strong> Required for any future RMA. Print or
        save PDFs.
      </li>
      <li>
        <strong>Don&rsquo;t open sealed parts.</strong> Some retailers (Amazon)
        accept open-box returns; some (Newegg, B&amp;H) don&rsquo;t. Builder will
        unbox during build.
      </li>
      <li>
        <strong>Confirm part list matches.</strong> Print the parts list before
        drop-off. Verify each part is present + matches the receipt.
      </li>
      <li>
        <strong>Note any special requests.</strong> RGB color preference, case fan
        configuration, specific cable routing. Write it down — verbal requests get
        forgotten.
      </li>
      <li>
        <strong>Photograph parts before drop-off.</strong> Especially serial numbers
        + condition of each part. Insurance against drop-off-condition disputes.
      </li>
      <li>
        <strong>Confirm pickup expectations.</strong> Date, what&rsquo;s included,
        any pre-payment vs final-payment terms.
      </li>
    </ul>

    <h2 id="what-to-bring">What to bring with the parts</h2>
    <ul>
      <li>All parts in their original boxes.</li>
      <li>All accessories that came with parts (extra cables, mounting brackets, manuals).</li>
      <li>Windows license / activation key if you&rsquo;re providing it.</li>
      <li>Printed copy of part list + special requests.</li>
      <li>Your phone number for any questions during the build.</li>
      <li>Photo ID if the shop requires it for valuable drop-offs.</li>
    </ul>

    <h2 id="after-pickup">After pickup — what to verify</h2>
    <ol>
      <li>
        <strong>Visual inspection.</strong> Cable management, no obvious bent pins,
        case panels closed properly, fans spinning the right direction.
      </li>
      <li>
        <strong>BIOS settings.</strong> Boot to BIOS. Confirm XMP/EXPO is enabled
        for RAM (check rated speed displays). Confirm boot priority is set
        correctly.
      </li>
      <li>
        <strong>Stress test independently.</strong> Run OCCT or Prime95 for 30
        minutes. Verify CPU temps stay under 90°C. Run Furmark or 3DMark for GPU.
      </li>
      <li>
        <strong>Verify all parts present.</strong> Open the case (if accessible).
        Confirm RAM count, M.2 drives present, GPU model matches receipt.
      </li>
      <li>
        <strong>Test all USB ports + audio + Ethernet.</strong> Plug devices in,
        verify connectivity.
      </li>
      <li>
        <strong>Verify warranty paperwork.</strong> Dated, signed, lists what&rsquo;s
        covered, contact info for service requests.
      </li>
      <li>
        <strong>Save the original parts boxes.</strong> Some manufacturer warranties
        require original packaging for RMA.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "Find a hire-vs-DIY breakeven for your numbers",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "How to prepare your parts before hiring PC assembly?",
    a: "Get builder's compatibility check before buying. Confirm warranty terms (will they labor-warranty parts you brought?). Save receipts + boxes. Don't open sealed parts. Print part list. Note special requests in writing. Photograph parts before drop-off. Confirm pickup date + payment terms.",
  },
  {
    q: "What should I bring when dropping off parts for PC assembly?",
    a: "All parts in original boxes (with accessories), Windows license if providing your own, printed parts list + special requests, your phone for questions during build, photo ID if shop requires for valuable drop-offs.",
  },
  {
    q: "What should I verify after picking up a professionally built PC?",
    a: "Visual inspection of cable management + no bent pins. BIOS settings (XMP/EXPO enabled). Independent stress test (30-min Prime95 + Furmark). Verify all parts present + match receipt. Test USB + audio + Ethernet. Verify warranty paperwork. Save boxes for future RMA.",
  },
];
