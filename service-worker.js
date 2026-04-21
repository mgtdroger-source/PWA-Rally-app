const CACHE_NAME = 'stc-pwa-v1-4-1';
const CACHE = 'stc-pwa-prototype-v1';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)));
});
