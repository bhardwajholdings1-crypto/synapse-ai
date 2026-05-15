// SYNAPSE AI — Service Worker
// BhardwajTechnologieS | Built by Arnav Bhardwaj

const CACHE = 'synapse-ai-v1'
const ASSETS = [
  '/',
  '/index.html',
  '/app.html',
  '/login.html',
  '/style.css',
  '/manifest.json',
]

// Install — cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  )
  self.skipWaiting()
})

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  )
  self.clients.claim()
})

// Fetch — serve from cache, fallback to network
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  )
})
