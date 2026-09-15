const CACHE='african-safari-pocketbook-v92';
const ASSETS=['./','./index.html','./vendor/leaflet.css','./vendor/leaflet.js','./assets/africa-countries-110m.geojson','./assets/africa-country-reference.json','./assets/COUNTRY-DATA-LICENSE.txt','./assets/WILDLIFE-SOUND-LICENSES.txt','./assets/wildlife-sounds/african-elephant-alarm.ogg','./assets/wildlife-sounds/spotted-hyena-giggle.oga','./assets/wildlife-sounds/ring-tailed-lemur-cackle.ogg','./assets/wildlife-sounds/vervet-monkey-call.mp3','./offline-map.css','./accessibility-security.css','./vendor/LEAFLET-LICENSE.txt','./assets/NATURAL-EARTH-NOTICE.txt','./styles.css','./map.css','./offline-packs.css','./journal.css','./journal-data.css','./map-search.css','./safety-center.css','./final-polish.css','./africa.css','./mobile-app.css','./catalog.css','./wildlife.css','./wildlife-profile.css','./trip.css','./botswana.css','./safety.css','./real-map.css','./map-fixes.css','./route-actions.css','./app-upgrades.css','./pocketbook.css','./safari-atmosphere.css','./country-language.css','./country-depth.css','./places-hierarchy.css','./sos-access.css','./sticky-controls.css','./destination-directory.css','./places-search.css','./about.css','./trip-companion.css','./bookings.css','./airport-search.css','./booking-prototype.css','./safari-circle.css','./circle-community.css','./mobile-stability.css','./travel-health.css','./native-bridge.js','./app.js','./real-map.js','./botswana.js','./catalog.js','./country-depth.js','./destination-directory.js','./language-guide.js','./country-intelligence.js','./wildlife.js','./wildlife-profile.js','./offline-packs.js','./journal.js','./mobile.js','./safety.js','./map-fixes.js','./route-actions.js','./pocketbook.js','./safari-atmosphere.js','./about.js','./trip-companion.js','./bookings.js','./safari-circle.js','./travel-health.js','./circle-community.js','./app-stability.js','./manifest.webmanifest','./assets/app-logo.png','./assets/safari-dawn.png','./assets/safari-immersion-v1.jpg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
const SHELL_PATHS=new Set(ASSETS.map(asset=>new URL(asset,self.registration.scope).pathname));
const isNavigation=request=>request.mode==='navigate'||request.destination==='document';

// Cache only the versioned application shell. Cross-origin live sources and every
// API route always go to the network, so stale safety, health, booking or Circle
// data can never be presented as a current response.
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin||url.pathname.startsWith('/api/'))return;
  if(isNavigation(request)){
    event.respondWith(fetch(request).catch(()=>caches.match('./index.html')));
    return;
  }
  if(!SHELL_PATHS.has(url.pathname))return;
  event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
});
