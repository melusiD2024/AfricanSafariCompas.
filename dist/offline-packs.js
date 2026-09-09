(function(){
  'use strict';
  const DB_NAME='african-safari-pocketbook',STORE='regional-packs',SCHEMA=1;
  const regions={
    'East Africa':['East','east'],'Southern Africa':['Southern','south'],'North Africa':['North','north'],
    'West Africa':['West','west'],'Central Africa':['Central','central'],'African Islands':['Islands','islands']
  };
  const cards=[...document.querySelectorAll('#packGrid [data-pack]')],summary=document.getElementById('offlinePackSummary'),clear=document.getElementById('clearOfflinePacks');
  if(!cards.length)return;

  function openDb(){return new Promise((resolve,reject)=>{const request=indexedDB.open(DB_NAME,SCHEMA);request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE,{keyPath:'region'})};request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)})}
  async function withStore(mode,task){const db=await openDb();return new Promise((resolve,reject)=>{const transaction=db.transaction(STORE,mode),store=transaction.objectStore(STORE);let result;try{result=task(store)}catch(error){reject(error);return}transaction.oncomplete=()=>{db.close();resolve(result)};transaction.onerror=()=>{db.close();reject(transaction.error)}})}
  function requestResult(request){return new Promise((resolve,reject)=>{request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)})}
  function createPack(region){const [atlasRegion,mapRegion]=regions[region];return {
    region,schema:SCHEMA,edition:'1.12.0',savedAt:new Date().toISOString(),
    countries:(window.africanAtlas||[]).filter(row=>row[1]===atlasRegion).map(([country,area,destinations])=>({country,region:area,destinations})),
    mapDestinations:(window.safariPlaces||[]).filter(place=>place.region===mapRegion).map(({name,code,countryName,type,tags})=>({name,code,countryName,type,tags})),
    wildlife:(window.pocketWildlife||[]).map(([name,scientific,kind,habitat])=>({name,scientific,kind,habitat})),
    wildlifeScope:'Continent-wide curated starter guide; not a country species count.',
    limits:'Static editorial reference only. Live travel advisories, health notices, political conditions, biodiversity results, photographs and uncached map tiles are not included.'
  }}
  function bytes(pack){return new Blob([JSON.stringify(pack)]).size}
  function sizeLabel(value){return value<1024?`${value} B`:`${(value/1024).toFixed(1)} KB`}
  function notify(message){const toast=document.getElementById('toast');if(!toast)return;toast.textContent=message;toast.classList.add('visible');setTimeout(()=>toast.classList.remove('visible'),2600)}
  async function allPacks(){return withStore('readonly',store=>requestResult(store.getAll()))}
  async function savePack(pack){await withStore('readwrite',store=>store.put(pack))}
  async function removePack(region){await withStore('readwrite',store=>store.delete(region))}
  async function render(){const packs=await allPacks(),byRegion=new Map(packs.map(pack=>[pack.region,pack]));cards.forEach(card=>{const region=card.dataset.pack,pack=byRegion.get(region)||createPack(region),saved=!!byRegion.get(region),button=card.querySelector('button'),detail=card.querySelector('small');card.classList.toggle('downloaded',saved);button.textContent=saved?'Remove':'Save guide';button.setAttribute('aria-pressed',String(saved));detail.textContent=saved?`${pack.countries.length} countries · ${pack.mapDestinations.length} mapped places · ${sizeLabel(bytes(pack))}`:`${pack.countries.length} countries · ${pack.mapDestinations.length} mapped places · includes global starter guide`});
    const total=packs.reduce((sum,pack)=>sum+bytes(pack),0);let storage='';try{const estimate=await navigator.storage?.estimate?.();if(estimate?.usage!=null)storage=` · App storage ${sizeLabel(estimate.usage)}`}catch(error){}
    summary.innerHTML=packs.length?`<strong>${packs.length} of 6 regions stored</strong><span>${sizeLabel(total)} of guide data${storage}</span>`:'<strong>No regional packs stored</strong><span>Choose a region to keep its reference index on this device.</span>';clear.hidden=!packs.length;
  }
  cards.forEach(card=>card.querySelector('button').addEventListener('click',async event=>{const button=event.currentTarget,region=card.dataset.pack;button.disabled=true;try{const existing=(await allPacks()).some(pack=>pack.region===region);if(existing){await removePack(region);notify(`${region} offline pack removed.`)}else{const pack=createPack(region);await savePack(pack);notify(`${region} saved: ${pack.countries.length} countries and ${pack.mapDestinations.length} mapped places.`)}await render()}catch(error){notify('This device could not update offline storage.')}finally{button.disabled=false}}));
  clear.addEventListener('click',async()=>{clear.disabled=true;try{await withStore('readwrite',store=>store.clear());await render();notify('All regional guide packs removed.')}finally{clear.disabled=false}});
  async function migrateLegacy(){const legacy=JSON.parse(localStorage.getItem('africanSafariPacks')||'[]');if(!Array.isArray(legacy)||!legacy.length)return;const saved=await allPacks();if(!saved.length)for(const region of legacy)if(regions[region])await savePack(createPack(region));localStorage.removeItem('africanSafariPacks')}
  window.offlineGuideStore={getAll:allPacks};
  migrateLegacy().then(render).catch(()=>{summary.innerHTML='<strong>Offline storage unavailable</strong><span>The guide remains usable while this app is open.</span>';cards.forEach(card=>card.querySelector('button').disabled=true)});
})();
