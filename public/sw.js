const CACHE = 'teknoarac-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.map(x => caches.delete(x))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(c => c || fetch(e.request).then(r => { if(r.ok) { const x = r.clone(); caches.open(CACHE).then(ca => ca.put(e.request, x)); } return r; }))));
