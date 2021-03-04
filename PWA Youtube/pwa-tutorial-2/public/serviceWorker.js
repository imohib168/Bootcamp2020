const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("Opened Cache");
                return cache.addAll(urlsToCache);
            })
    )
})

// Listen for Request
self.addEventListener('install', () => {

})

// Activate SW
self.addEventListener('install', () => {

})