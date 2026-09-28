const CACHE = "eixo-offline-v5";
const BASE_PATH = "";

const PRECACHE = [
  "/",
  "/index.html",
  "/semana/",
  "/exercicios/",
  "/voce/",
  "/instalar/",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/treino/segunda/",
  "/treino/terca/",
  "/treino/quarta/",
  "/treino/quinta/",
  "/treino/sexta/",
  "/treino/sabado/",
  "/treino/domingo/",
  "/treino/segunda/praticar/",
  "/treino/terca/praticar/",
  "/treino/quarta/praticar/",
  "/treino/quinta/praticar/",
  "/treino/sexta/praticar/",
  "/treino/sabado/praticar/",
  "/treino/domingo/praticar/",
  "/exercicios/respiracao/",
  "/exercicios/gato-vaca/",
  "/exercicios/rock-back/",
  "/exercicios/rolo-torax/",
  "/exercicios/livro-aberto/",
  "/exercicios/agulha/",
  "/exercicios/parede/",
  "/exercicios/retracao/",
  "/exercicios/escapula/",
  "/exercicios/bird-dog/",
  "/exercicios/dead-bug/",
  "/exercicios/mcgill/",
  "/exercicios/ponte/",
  "/exercicios/prancha-lado/",
  "/exercicios/pallof/",
  "/exercicios/concha/",
  "/exercicios/flexor/",
  "/exercicios/isquio/",
  "/exercicios/figura4/",
  "/exercicios/noventa/",
  "/exercicios/panturrilha/",
  "/exercicios/tornozelo/",
  "/exercicios/pull-apart/",
  "/exercicios/rotacao-ombro/",
  "/exercicios/corte/",
  "/exercicios/rotacao-pe/",
  "/exercicios/cervical/",
  "/exercicios/trapazio/",
  "/exercicios/peito/",
  "/exercicios/press-up/",
  "/exercicios/crianca/",
  "/exercicios/rolo-gluteo/",
  "/exercicios/rolo-lado/",
  "/exercicios/descanso/",
  "/exercises/ex-9090.webp",
  "/exercises/ex-agulha.webp",
  "/exercises/ex-bird-dog.webp",
  "/exercises/ex-cervical.webp",
  "/exercises/ex-concha.webp",
  "/exercises/ex-corte.webp",
  "/exercises/ex-crianca.webp",
  "/exercises/ex-dead-bug.webp",
  "/exercises/ex-descanso.webp",
  "/exercises/ex-escapula.webp",
  "/exercises/ex-figura4.webp",
  "/exercises/ex-flexor.webp",
  "/exercises/ex-gato-vaca.webp",
  "/exercises/ex-isquio.webp",
  "/exercises/ex-livro-aberto.webp",
  "/exercises/ex-mcgill.webp",
  "/exercises/ex-pallof.webp",
  "/exercises/ex-panturrilha.webp",
  "/exercises/ex-parede.webp",
  "/exercises/ex-peito.webp",
  "/exercises/ex-ponte.webp",
  "/exercises/ex-prancha-lado.webp",
  "/exercises/ex-press-up.webp",
  "/exercises/ex-pull-apart.webp",
  "/exercises/ex-respiracao.webp",
  "/exercises/ex-retracao.webp",
  "/exercises/ex-rock-back.webp",
  "/exercises/ex-rolo-gluteo.webp",
  "/exercises/ex-rolo-lado.webp",
  "/exercises/ex-rolo-torax.webp",
  "/exercises/ex-rotacao-ombro.webp",
  "/exercises/ex-rotacao-pe.webp",
  "/exercises/ex-tornozelo.webp",
  "/exercises/ex-trapazio.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await Promise.all(
        PRECACHE.map(async (url) => {
          try {
            const response = await fetch(url, { cache: "reload" });
            if (response.ok) {
              await cache.put(url, response);
            }
          } catch {
            // Continua mesmo se um arquivo faltar na primeira instalação.
          }
        }),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  event.respondWith(networkThenCache(request));
});

async function networkThenCache(request) {
  const cache = await caches.open(CACHE);
  try {
    const fresh = await fetch(request);
    if (fresh.ok) {
      await cache.put(request, fresh.clone());
      return fresh;
    }
    const cached = await matchRequest(cache, request);
    if (cached) return cached;
    return fresh;
  } catch {
    const cached = await matchRequest(cache, request);
    if (cached) return cached;
    if (request.mode === "navigate") {
      const home = `${BASE_PATH}/`;
      const homeIndex = `${BASE_PATH}/index.html`;
      return (await cache.match(home)) || (await cache.match(homeIndex)) || Response.error();
    }
    return Response.error();
  }
}

async function matchRequest(cache, request) {
  const direct = await cache.match(request);
  if (direct) return direct;

  const url = new URL(request.url);
  const extras = [];
  if (url.pathname.endsWith("/")) {
    extras.push(url.pathname + "index.html");
  } else if (!url.pathname.split("/").pop()?.includes(".")) {
    extras.push(url.pathname + "/");
    extras.push(url.pathname + "/index.html");
  }
  for (const path of extras) {
    const hit = await cache.match(path);
    if (hit) return hit;
  }
  return undefined;
}
