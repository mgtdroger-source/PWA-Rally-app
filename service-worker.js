const CACHE_NAME = 'stc-pwa-v2-4-0';
const CACHE = 'stc-pwa-v2-4-0-cache';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./stc-config.json'];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.pathname.endsWith('/stc-config.json')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request).catch(() => caches.match('./index.html'));
    })
  );
});
