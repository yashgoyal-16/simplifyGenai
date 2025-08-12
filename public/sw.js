// Service Worker for SimplifyGenAI Performance Optimization
const CACHE_NAME = 'simplifygenai-v1.0.1';
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/pages/Index.tsx',
  '/src/index.css',
  '/manifest.json'
];

const DYNAMIC_CACHE_URLS = [
  // External CDN resources
  'https://cdn.jsdelivr.net/',
  'https://fonts.googleapis.com/',
  // Supabase assets
  'https://aybvvjxzepenfyzrhdrk.supabase.co/',
  'https://pbwgakwdrtkvnmewsajp.supabase.co/'
];

// Install event - cache static resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Installing and caching static files');
      return cache.addAll(STATIC_CACHE_URLS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension requests
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached version if available
      if (cachedResponse) {
        return cachedResponse;
      }

      // For dynamic content, use network-first strategy
      return fetch(event.request).then((response) => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response for caching
        const responseToCache = response.clone();
        
        // Cache dynamic resources
        const shouldCache = DYNAMIC_CACHE_URLS.some(url => 
          event.request.url.includes(url)
        );

        if (shouldCache) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
      });
    })
  );
});

// Handle background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'performance-metrics') {
    event.waitUntil(
      // Send cached analytics data when online
      console.log('Background sync: Sending performance metrics')
    );
  }
});