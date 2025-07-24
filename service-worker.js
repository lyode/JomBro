// sw.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('jombro-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/offline.html'
            ]);
        })
    );
});
