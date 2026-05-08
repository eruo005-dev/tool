export const intro = (
  <>
    <p>
      A complete reference for password security in 2026: how entropy actually works,
      why &ldquo;P@ssw0rd123!&rdquo; is weak, why &ldquo;correct horse battery
      staple&rdquo; is no longer enough, and what password length and structure are
      sufficient given current attack capabilities.
    </p>
    <p>
      Most password advice is recycled from 2005 and ignores how the threat model
      changed: brute-force is no longer the bottleneck (CSPRNGs and length defeat it);
      reuse, phishing, and credential stuffing are. This guide walks through the math
      first, then the practical guidance &mdash; both grounded in current attacker
      capabilities, not folk wisdom.
    </p>
  </>
);

export const toc = [
  { id: "entropy-formula", label: "What entropy actually means" },
  { id: "real-numbers", label: "Real entropy by structure (with examples)" },
  { id: "attacker-speeds", label: "Attacker speeds in 2026" },
  { id: "diceware", label: "Diceware passphrases: math and how-to" },
  { id: "managers", label: "Password managers: which to use" },
  { id: "two-factor", label: "Two-factor authentication: why it matters" },
  { id: "common-myths", label: "Myths that won't die" },
  { id: "real-attacks", label: "Real attacks: how passwords actually leak" },
  { id: "policies", label: "What good password policies look like" },
  { id: "site-categories", label: "Length recommendations by site type" },
  { id: "checklist", label: "Personal security checklist" },
];

export const body = (
  <>
    <h2 id="entropy-formula">What entropy actually means</h2>
    <p>
      Password entropy measures unpredictability in bits. Formula:
    </p>
    <pre>{`entropy = log2(pool_size) × length`}</pre>
    <p>
      Where <code>pool_size</code> is the number of possible characters and
      <code> length</code> is the password length. A 10-character password from a
      26-letter pool: log2(26) &times; 10 = 4.7 &times; 10 = 47 bits.
    </p>
    <p>
      Bits double the search space: 1 bit = 2 options, 10 bits = 1,024 options, 80 bits
      = ~1.2 sextillion options. Each additional bit doubles the average time to
      brute-force.
    </p>
    <p>
      <strong>Critical caveat</strong>: this formula assumes characters are uniformly
      RANDOM. A password of &ldquo;qwerasdfzxcv&rdquo; technically uses 12 chars from a
      26-pool (56 bits theoretical), but is in any sensible attacker&rsquo;s top 10,000
      passwords (~13 bits effective). The formula tells you the maximum possible entropy;
      whether the password achieves it depends on how it was generated.
    </p>

    <h2 id="real-numbers">Real entropy by password structure</h2>
    <table>
      <thead>
        <tr>
          <th>Password structure</th>
          <th>Theoretical entropy</th>
          <th>Real-world entropy</th>
          <th>Crack time (offline GPU)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&ldquo;password&rdquo; (top-100 list)</td>
          <td>38 bits</td>
          <td>~7 bits</td>
          <td>Instant (in any attacker dictionary)</td>
        </tr>
        <tr>
          <td>&ldquo;P@ssw0rd123!&rdquo; (leet-speak common word)</td>
          <td>78 bits</td>
          <td>~25 bits</td>
          <td>Seconds (rule-based dictionary attack)</td>
        </tr>
        <tr>
          <td>&ldquo;Tr1nity@2026&rdquo; (name + year + symbol)</td>
          <td>78 bits</td>
          <td>~32 bits</td>
          <td>Hours</td>
        </tr>
        <tr>
          <td>10 random a-z characters</td>
          <td>47 bits</td>
          <td>47 bits</td>
          <td>~3 days at 10⁹ guesses/sec</td>
        </tr>
        <tr>
          <td>10 random a-zA-Z0-9</td>
          <td>60 bits</td>
          <td>60 bits</td>
          <td>~36 years</td>
        </tr>
        <tr>
          <td>16 random a-zA-Z0-9 + symbols (94 pool)</td>
          <td>105 bits</td>
          <td>105 bits</td>
          <td>10²² years (uncrackable)</td>
        </tr>
        <tr>
          <td>20 random characters (94 pool)</td>
          <td>131 bits</td>
          <td>131 bits</td>
          <td>Heat-death-of-universe uncrackable</td>
        </tr>
        <tr>
          <td>Diceware 4 random words (7,776-word list)</td>
          <td>52 bits</td>
          <td>52 bits</td>
          <td>~year at 10⁹/sec</td>
        </tr>
        <tr>
          <td>Diceware 6 random words</td>
          <td>77 bits</td>
          <td>77 bits</td>
          <td>~10⁶ years at 10⁹/sec</td>
        </tr>
        <tr>
          <td>Diceware 7 random words</td>
          <td>91 bits</td>
          <td>91 bits</td>
          <td>~10¹¹ years</td>
        </tr>
      </tbody>
    </table>
    <p>
      <strong>The shape of the takeaway</strong>: human-chosen passwords lose 60-80% of
      their theoretical entropy because humans aren&rsquo;t random. CSPRNG-generated
      passwords (or true diceware rolls) achieve their theoretical entropy.
    </p>

    <h2 id="attacker-speeds">Attacker speeds in 2026</h2>
    <p>
      Brute-force speeds depend on the hash algorithm and hardware. Real numbers:
    </p>
    <ul>
      <li>
        <strong>MD5 (legacy, broken)</strong>: ~10¹¹ guesses/sec on a single high-end GPU
        (RTX 5090 or similar). Cluster: 10¹³+. MD5 is unsalted-friendly to attackers.
      </li>
      <li>
        <strong>SHA-1 (deprecated)</strong>: ~3 &times; 10¹⁰ guesses/sec.
      </li>
      <li>
        <strong>bcrypt cost 12 (default)</strong>: ~30,000 guesses/sec on a GPU. Designed
        to be slow. Most well-secured services use bcrypt or Argon2.
      </li>
      <li>
        <strong>Argon2id (modern recommendation)</strong>: ~10,000 guesses/sec at typical
        parameters. Memory-hard, GPU-resistant.
      </li>
      <li>
        <strong>scrypt</strong>: ~50,000 guesses/sec depending on parameters.
      </li>
    </ul>
    <p>
      <strong>Implication</strong>: 60-bit entropy passwords protected by Argon2id
      survive offline brute force essentially indefinitely. Same passwords protected by
      MD5 fall in days. The hash algorithm matters as much as the password length.
    </p>

    <h2 id="diceware">Diceware passphrases: math and how-to</h2>
    <p>
      Diceware uses physical dice to choose words from a 7,776-word list. Each word
      contributes log2(7,776) = 12.92 bits of entropy. 5-die rolls produce a 5-digit
      number; the number maps to a word.
    </p>
    <p>
      <strong>How to do it</strong>:
    </p>
    <ol>
      <li>Get the EFF long word list (eff.org/dice). It has 7,776 entries.</li>
      <li>Roll 5 standard dice (or one die 5 times). Read the values left-to-right as a 5-digit number, e.g., 41524.</li>
      <li>Look up that number in the list. That&rsquo;s your first word.</li>
      <li>Repeat 5-7 times for the desired entropy.</li>
      <li>Concatenate words with spaces or a unique separator: &ldquo;outlast-recolor-magnetic-finance-clutch-glaze&rdquo;.</li>
    </ol>
    <p>
      <strong>Modern recommendation</strong>: 6 words (77 bits) for ordinary passwords,
      7 words (91 bits) for important ones (master password, banking, sensitive
      accounts). Adding a separator character or capitalizing one word adds a few extra
      bits and breaks any word-list-based dictionary attack.
    </p>
    <p>
      <strong>Why physical dice?</strong> Computer-based RNGs are generally fine if
      they&rsquo;re CSPRNGs (<code>crypto.getRandomValues()</code> in browsers,{" "}
      <code>secrets.choice()</code> in Python). But dice provide audit-able randomness
      that can&rsquo;t be silently compromised by malware.
    </p>

    <h2 id="managers">Password managers: which to use</h2>
    <p>
      A password manager solves the only password problem that actually matters at scale:
      <strong>reuse</strong>. Without a manager, humans typically reuse 5-10 passwords
      across hundreds of accounts; one breach compromises all of them. With a manager:
      every account gets a unique random 20+ char password, and one master passphrase
      protects the vault.
    </p>
    <p>
      <strong>Top tier (recommended)</strong>:
    </p>
    <ul>
      <li>
        <strong>Bitwarden</strong>: open-source, free for individual use, $10/year for
        premium. Audited, host-it-yourself option, strong cryptography. Best balance of
        cost / features / trust.
      </li>
      <li>
        <strong>1Password</strong>: $36/year individual, $60/year family. Polished UX,
        proprietary but well-audited. Travel mode (hides vaults at borders) is unique.
      </li>
      <li>
        <strong>KeePassXC</strong>: open-source, free, fully offline. Stores vault as a
        local file. Best for paranoid users; sync via your own cloud (Dropbox, etc.).
      </li>
    </ul>
    <p>
      <strong>Browser-built-in (acceptable but less secure)</strong>: Chrome, Firefox,
      Safari. Free, convenient. Less protected against malware than dedicated managers
      because vault keys are easier for browser-resident attackers to access.
    </p>
    <p>
      <strong>Avoid</strong>: LastPass (multiple breaches with poor disclosure), any
      password manager not opened to security audit, anything storing passwords in plain
      text.
    </p>

    <h2 id="two-factor">Two-factor authentication: why it matters</h2>
    <p>
      Even a 130-bit password is vulnerable to phishing (the user types it into a fake
      site) and credential stuffing (attacker has the password from a different breach).
      Two-factor authentication (2FA) adds a second proof of identity.
    </p>
    <p>
      <strong>Methods, ranked by security</strong>:
    </p>
    <ol>
      <li>
        <strong>Hardware security keys (YubiKey, Titan)</strong>: $25-75 USB or NFC dongle.
        Phishing-resistant by design; the key cryptographically signs the request scoped
        to the real domain. The gold standard for high-stakes accounts (email, financial,
        admin).
      </li>
      <li>
        <strong>Passkeys (FIDO2/WebAuthn)</strong>: built-in to modern OSes (iOS, Android,
        macOS, Windows 11). Same cryptographic strength as security keys; uses device
        biometrics. The future of authentication; rolling out across major sites.
      </li>
      <li>
        <strong>TOTP apps (Authy, Google Authenticator, 1Password)</strong>: 6-digit code
        rotating every 30 seconds. Strong against credential stuffing; vulnerable to
        sophisticated phishing (real-time relay attacks). Use this where security keys
        aren&rsquo;t supported.
      </li>
      <li>
        <strong>SMS</strong>: a second factor, but vulnerable to SIM swap attacks (an
        attacker convinces your carrier to transfer your number). Better than nothing;
        worse than TOTP. Avoid for high-stakes accounts.
      </li>
    </ol>
    <p>
      <strong>Practical recommendation</strong>: enable 2FA everywhere offered. Use
      passkeys or hardware keys for email, password manager master, banking, and
      domain registrar. TOTP for everything else. SMS only if no other option exists.
    </p>

    <h2 id="common-myths">Myths that won&rsquo;t die</h2>
    <ul>
      <li>
        <strong>&ldquo;Change passwords every 90 days&rdquo;</strong>. NIST guidance
        (SP 800-63B) explicitly recommends AGAINST mandatory rotation since 2017. Forced
        rotation produces weaker passwords (humans add &ldquo;1&rdquo; then
        &ldquo;2&rdquo;...). Rotate after a known breach, not on a schedule.
      </li>
      <li>
        <strong>&ldquo;Composition rules make passwords stronger&rdquo;</strong>. The
        &ldquo;1 uppercase, 1 number, 1 symbol&rdquo; convention forces specific patterns
        attackers know to try first. Modern guidance: require length only.
      </li>
      <li>
        <strong>&ldquo;Hint questions improve security&rdquo;</strong>. Mother&rsquo;s
        maiden name, first car, favorite teacher &mdash; all easily guessed or harvested
        from social media. NIST SP 800-63B forbids them in current guidance.
      </li>
      <li>
        <strong>&ldquo;Don&rsquo;t reuse master password&rdquo;</strong>. Trivially true,
        but specifically: your password manager master is the highest-value secret you
        own. Use a unique, long passphrase. Memorize it. Write it down on paper and store
        in a safe (not in the manager).
      </li>
      <li>
        <strong>&ldquo;HTTPS makes my password secure&rdquo;</strong>. HTTPS protects
        your password in transit. It doesn&rsquo;t protect against the receiving server
        being compromised, the password being phished into a malicious clone, or the
        password manager being attacked. Multi-layer defense.
      </li>
    </ul>

    <h2 id="real-attacks">Real attacks: how passwords actually leak</h2>
    <p>
      Modern attackers rarely brute-force a single account. Real attack patterns:
    </p>
    <ol>
      <li>
        <strong>Database breaches</strong>: attacker compromises a server, dumps the user
        table. If hashes are weak (MD5, SHA-1, unsalted), passwords are recovered offline.
        Have I Been Pwned (<a href="https://haveibeenpwned.com">haveibeenpwned.com</a>)
        catalogs 12+ billion breached credentials.
      </li>
      <li>
        <strong>Credential stuffing</strong>: attacker takes leaked usernames+passwords
        from one breach and tries them on other sites. ~85% of attacks on most consumer
        sites in 2024-2025 are credential stuffing. Defense: unique passwords per site.
      </li>
      <li>
        <strong>Phishing</strong>: attacker sends fake login page, user enters real
        credentials. 90%+ of corporate breaches start here. Defense: passkeys / hardware
        keys (phishing-resistant), education, 2FA.
      </li>
      <li>
        <strong>Malware</strong>: keylogger, browser-extension stealer, password-manager
        attacker. Defense: keep OS and browser patched, verify password manager
        integrity, use hardware keys for highest-stakes accounts.
      </li>
      <li>
        <strong>Social engineering</strong>: convincing a customer service rep to reset
        the account. Defense: enable account-recovery 2FA, set up trusted contacts, use
        unique recovery emails.
      </li>
      <li>
        <strong>SIM swap</strong>: attacker convinces carrier to port your number.
        Defense: TOTP / hardware keys instead of SMS, carrier-level PINs.
      </li>
    </ol>
    <p>
      Notice: pure brute-force isn&rsquo;t in the top 6. Real attacks bypass entropy via
      reuse, phishing, or social engineering. That&rsquo;s why password managers + 2FA
      matter more than choosing &ldquo;a really strong password.&rdquo;
    </p>

    <h2 id="policies">What good password policies look like</h2>
    <p>
      For organizations setting password rules, current NIST guidance (SP 800-63B):
    </p>
    <ul>
      <li>Minimum 8 characters (12+ recommended).</li>
      <li>Allow at least 64 characters.</li>
      <li>Allow ALL printable Unicode (including spaces and emoji).</li>
      <li>Reject passwords on known-breach lists (HIBP API).</li>
      <li>Reject passwords on context-specific lists (your service name, common usernames).</li>
      <li>NO composition rules.</li>
      <li>NO mandatory rotation.</li>
      <li>NO hint questions.</li>
      <li>Use Argon2id, bcrypt cost 12+, or scrypt for hashing. Never MD5 or SHA-1.</li>
      <li>Require 2FA for any account with admin or privileged access.</li>
      <li>Lockout policies based on failed attempts per IP / per user, with rate-limiting.</li>
    </ul>

    <h2 id="site-categories">Length recommendations by site type</h2>
    <ul>
      <li>
        <strong>Throwaway / low-stakes (forums, news sites, free trials)</strong>: 12+
        random characters.
      </li>
      <li>
        <strong>Ordinary (email, social media, retail, work tools)</strong>: 16+ random
        characters.
      </li>
      <li>
        <strong>Financial (banks, brokerages, crypto exchanges)</strong>: 20+ random
        characters + 2FA via hardware key or passkey.
      </li>
      <li>
        <strong>Critical (password manager master, primary email, domain registrar)</strong>:
        diceware passphrase 7+ words OR 24+ random characters + hardware key 2FA.
      </li>
      <li>
        <strong>Server / SSH / API keys</strong>: ed25519 or RSA-4096 keys, not passwords.
        Passphrases on private keys 7+ diceware words.
      </li>
    </ul>

    <h2 id="checklist">Personal security checklist</h2>
    <ol>
      <li>Install a password manager (Bitwarden free is fine).</li>
      <li>Set a 7-word diceware master passphrase. Memorize it. Store on paper in a safe.</li>
      <li>Enable 2FA on the password manager (hardware key or passkey).</li>
      <li>Audit existing passwords: any reused? Get unique 20+ char ones generated and stored.</li>
      <li>Audit old breaches at <a href="https://haveibeenpwned.com">haveibeenpwned.com</a> with all your email addresses.</li>
      <li>Enable 2FA on email (the recovery vector for everything else). Use hardware key or passkey.</li>
      <li>Enable 2FA on banking, brokerages, and domain registrar.</li>
      <li>Set up account-recovery 2FA: trusted contacts, recovery codes printed, verified backup phone.</li>
      <li>Replace SMS 2FA with TOTP wherever possible.</li>
      <li>Review and revoke unused app permissions (Google, Apple, GitHub OAuth grants).</li>
      <li>Check periodically for new breaches involving your email (HIBP can alert).</li>
    </ol>

    <h2>The 80/20 takeaway</h2>
    <p>
      The math is clear: 80+ bits of true entropy is uncrackable by brute force. 130+
      bits is uncrackable forever. The <a href="/tools/password-generator">password
      generator</a> outputs 130-bit passwords by default. The hard problems aren&rsquo;t
      strength &mdash; they&rsquo;re reuse (solve with a password manager), phishing
      (solve with hardware keys / passkeys), and old breaches (solve with HIBP audit and
      unique passwords going forward).
    </p>
    <p>
      If you do three things: (1) use a password manager with unique 20+ char passwords,
      (2) enable hardware-key or passkey 2FA on your email and password manager,
      (3) check HIBP every 6 months for new breaches &mdash; you&rsquo;ve handled 95% of
      real-world attack vectors. The remaining 5% (sophisticated phishing, supply-chain
      malware) requires organizational defenses; for individuals, those three steps put
      you in the top 1% of security posture.
    </p>
  </>
);

export const cta = {
  label: "Generate cryptographically random 130-bit passwords",
  targetSlug: "password-generator",
};

export const faq = [
  {
    q: "How long does it take to crack a 12-character random password?",
    a: "Depends on character pool and hash algorithm. 12 random alphanumeric chars (a-zA-Z0-9, 62 pool) = ~71 bits entropy. Against MD5 (broken hash) at 10¹¹ guesses/sec on consumer GPU: ~750 years average. Against bcrypt cost 12 at ~30,000 guesses/sec: ~10¹⁵ years (heat-death uncrackable). Same password against Argon2id: similar. The hash algorithm matters as much as the password length. Most modern services use bcrypt or Argon2id. Public service: enable HIBP password monitoring on your accounts to know if any leak.",
  },
  {
    q: "Is 'correct horse battery staple' still a strong passphrase?",
    a: "It's only ~44 bits entropy (4 random words from a small list), and it's now famous enough to be in attacker dictionaries verbatim. Modern guidance: 6-7 random words from the 7,776-word EFF diceware list = 77-91 bits. Add a separator character or capitalize one word for resistance to word-list dictionary attacks. Generate with physical dice or a CSPRNG (crypto.getRandomValues in browsers). Memorize the result. Use this for anything you must type from memory: password manager master, full-disk encryption.",
  },
  {
    q: "What's the safest way to generate a strong password?",
    a: "Use a password manager's built-in generator OR a CSPRNG-based tool (like our password generator that uses Web Crypto's getRandomValues). Both produce cryptographically random output. NEVER use Math.random() (predictable), online sites that send your password to their server (often logged), or your own 'random-looking' string (humans aren't random). For passwords you must memorize: roll physical dice using the EFF diceware word list to generate a 6-7 word passphrase. Verify the entropy after generation; tools like KeePassXC show entropy estimates that account for word-list attacks.",
  },
  {
    q: "Why do most modern password policies skip composition rules?",
    a: "NIST SP 800-63B (2017+) explicitly recommends AGAINST composition rules ('must contain 1 uppercase, 1 digit, 1 symbol'). Reasons: (1) They force specific patterns attackers know to try first ('Password1!' satisfies most rules). (2) They produce weaker passwords by limiting human creativity. (3) They cause users to write down passwords or reuse minor variations across sites. Modern policy: require length only (12+ chars), reject known-breach passwords (HIBP API), allow all printable Unicode. The result: stronger real-world passwords with less user friction.",
  },
];
