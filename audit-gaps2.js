const fs = require('fs');
const base = 'C:/Users/eruo0/Desktop/project/toolpazar';

// PWA
console.log('--- PWA ---');
['manifest.json', 'manifest.webmanifest'].forEach(f => {
  console.log('public/' + f + ':', fs.existsSync(base + '/public/' + f) ? 'EXISTS' : 'MISSING');
});
const publicFiles = fs.existsSync(base + '/public') ? fs.readdirSync(base + '/public') : [];
console.log('Has sw.js:', publicFiles.includes('sw.js'));

// Redirects / next.config
console.log('\n--- Redirects ---');
const nc = fs.readFileSync(base + '/next.config.ts', 'utf8');
console.log('Has redirects:', nc.includes('redirects'));
console.log('Has rewrites:', nc.includes('rewrites'));
console.log('Has headers:', nc.includes('headers'));
console.log('Has i18n:', nc.includes('i18n'));

// Schema.org / structured data
console.log('\n--- Structured Data ---');
const layout = fs.readFileSync(base + '/app/layout.tsx', 'utf8');
console.log('Has JSON-LD:', layout.includes('application/ld+json') || layout.includes('jsonLd'));
const page = fs.readFileSync(base + '/app/page.tsx', 'utf8');
console.log('Homepage has JSON-LD:', page.includes('application/ld+json'));

// Analytics
console.log('\n--- Analytics ---');
console.log('Has GA:', layout.includes('gtag') || layout.includes('analytics'));
console.log('Has Vercel Analytics:', layout.includes('@vercel/analytics'));

// Performance
console.log('\n--- Performance ---');
console.log('Has font optimization:', layout.includes('next/font'));
const css = fs.readFileSync(base + '/app/globals.css', 'utf8');
console.log('CSS size:', (css.length / 1024).toFixed(1) + 'KB');

// Breadcrumbs on tool/guide pages
console.log('\n--- UX ---');
const guideSlug = fs.readFileSync(base + '/app/guides/[slug]/page.tsx', 'utf8');
console.log('Guide has breadcrumbs:', guideSlug.includes('breadcrumb') || guideSlug.includes('href="/"'));

const toolSlug = fs.readFileSync(base + '/app/tools/[slug]/page.tsx', 'utf8');
console.log('Tool has breadcrumbs:', toolSlug.includes('breadcrumb') || toolSlug.includes('href="'));

// Content freshness
console.log('\n--- Content ---');
const stat = fs.statSync(base + '/content/guides/10000-step-myth-explained.tsx');
const age = Math.floor((Date.now() - stat.mtimeMs) / (1000 * 60 * 60));
console.log('Guide age (hours):', age);
console.log('Has lastUpdated/publishedDate in guides:', guideSlug.includes('lastUpdated') || guideSlug.includes('publishedDate'));

// Social share previews
console.log('\n--- Social ---');
console.log('Has twitter:card:', layout.includes('twitter'));
console.log('Has og:image:', layout.includes('og:image') || layout.includes('images:'));
console.log('Has canonical:', layout.includes('canonical'));

// Security headers
console.log('\n--- Security ---');
console.log('Has CSP:', nc.includes('Content-Security-Policy') || layout.includes('csp'));

// .gitignore check
console.log('\n--- Git ---');
const gi = fs.readFileSync(base + '/.gitignore', 'utf8');
console.log('Has .env in gitignore:', gi.includes('.env'));
console.log('Has .next in gitignore:', gi.includes('.next'));
