const CACHE = 'synapse-v1'
self.addEventListener('install', e => { self.skipWaiting() })
self.addEventListener('activate', e => { self.clients.claim() })
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return
  if (e.request.url.includes('supabase') || e.request.url.includes('openrouter') || e.request.url.includes('googleapis') || e.request.url.includes('netlify/functions')) return
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})
