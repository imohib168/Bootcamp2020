console.log('Registered');

const CACHE_NAME = "appV1";
const urlsToCache = [
    '/',
    '/index.html',
    '/asset-manifest.json',
    '/manifest.json',
    'images/logo.png',
    '/static/media/bg.00ecbe2e.jpg',
    '/static/css/main.a48dfd3c.chunk.css',
    '/static/js/2.a7232e4c.chunk.js',
    '/static/js/main.ca85332f.chunk.js',
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