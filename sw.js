// Service worker mínimo: permite instalar la app. No guarda copias de la página,
// así siempre se abre la versión más reciente (los pedidos cambian a diario).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
