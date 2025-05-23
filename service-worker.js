self.addEventListener("install", (e) => {
  console.log("Service Worker instalado");
  e.waitUntil(
    caches.open("clp-cache").then((cache) => {
      return cache.addAll(["./", "./index.html", "./manifest.json"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
