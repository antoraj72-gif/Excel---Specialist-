/* Excel Jarvis offline cache – version 8acafc2400c6
   First visit stores the app on the device; later it opens instantly, even with no internet.
   When a newer Excel Jarvis is uploaded, it is fetched quietly and used from the next launch. */
const CACHE = 'excel-jarvis-8acafc2400c6';
// Only the small files are stored at install, so the phone can offer "Install app" straight away.
// The big app page is stored right after, in the background.
const SMALL = ['manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'favicon-64.png'];
const storeApp = () => caches.open(CACHE).then(c => c.match('index.html').then(h => h || fetch('index.html', {cache: 'reload'}).then(r => r.ok && c.put('index.html', r)))).catch(() => null);
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SMALL)).catch(() => null).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('excel-jarvis-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); storeApp(); });
self.addEventListener('message', e => { if (e.data === 'store-app') e.waitUntil(storeApp()); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url); if (url.origin !== location.origin) return;
  if (url.pathname.endsWith('/version.json')) return;  // update check always asks the website
  const key = req.mode === 'navigate' ? 'index.html' : req;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(key, {ignoreSearch: true});
    const fresh = fetch(req, {cache: 'no-cache'}).then(r => { if (r && r.ok) c.put(key, r.clone()); return r; }).catch(() => null);
    if (key !== 'index.html') e.waitUntil(storeApp());
    if (hit) { e.waitUntil(fresh); return hit; }
    return (await fresh) || new Response('Offline – open Excel Jarvis once with internet to store it on this device.', {status: 503, headers: {'Content-Type': 'text/plain'}});
  }));
});
