const VERSION = "v1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  // Solo trabajaremos con el método GET
  if (request.method !== "GET") {
    return; // si no es GET no haremos nada
  }

  // Buscar en el cache
  event.respondWith(cachedResponse(request));

  // Actualizar al cahe
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "/",
    "/index.html",
    "/assets/index.js",
    "/assets/MediaPlayer.js",
    "/assets/plugins/AutoPlay.js",
    "/assets/plugins/AutoPause.js",
    "/assets/index.css",
    "/assets/PlasticPollution.mp4",
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  // Le preguntamos al cache si tiene una copia de la peticion
  const response = await cache.match(request);
  // Si la tiene, retornará el response, si no, hará la petición al internet
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  // Se pide la copia actualizada
  const response = await fetch(request);
  // Esto es lo que se utilizara para poner actualizacion
  return cache.put(resquest, response);
}
