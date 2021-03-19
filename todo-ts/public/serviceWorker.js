console.log('Registered');

const CACHE_NAME = "appV1";
const urlsToCache = [
    '/',
    '/index.html',
    '/asset-manifest.json',
    'images/logo.png',
    '/manifest.json',
    // '/static/js/bundle.js',
    // '/static/js/vendors~main.chunk.js',
    // '/static/js/main.chunk.js',
    '/static/media/bg.00ecbe2e.jpg'
    // 'static/media/cover-min.f6a21fa1.jpg',
    // 'static/js/2.a0125549.chunk.js',
    // 'static/js/main.a563d53d.chunk.js'
];

const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened Cache');
                return cache.addAll(urlsToCache);
            })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response;
            }).catch(err => console.log('Error', err))
    )
})

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))

    )
});