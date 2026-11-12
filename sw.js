self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
const C='tap-cache-v2';
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET'||new URL(q.url).origin!==location.origin)return;
e.respondWith(fetch(new Request(q,{cache:'no-store'})).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put(q,x));return r}).catch(()=>caches.match(q)))});
