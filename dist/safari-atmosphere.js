(function(){
  'use strict';
  const readArray=key=>{try{const value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value:[]}catch(error){return[]}};
  const time=document.getElementById('fieldTime'),light=document.getElementById('fieldLight'),connection=document.getElementById('fieldConnection');
  function updateClock(){const now=new Date(),hour=now.getHours();time.textContent=new Intl.DateTimeFormat(undefined,{hour:'2-digit',minute:'2-digit'}).format(now);light.textContent=hour<6?'Before dawn':hour<9?'Golden morning':hour<16?'High daylight':hour<19?'Golden evening':'After dark'}
  function updateConnection(){const online=navigator.onLine;connection.textContent=online?'Online trail':'Offline ready';connection.closest('div')?.classList.toggle('offline',!online)}
  async function updateKit(){document.getElementById('fieldSightingCount').textContent=readArray('safariPocketbookSightings').length;document.getElementById('fieldSavedCount').textContent=readArray('safariPocketbookSavedPlaces').length;try{const packs=await window.offlineGuideStore?.getAll?.();document.getElementById('fieldPackCount').textContent=packs?.length||0}catch(error){document.getElementById('fieldPackCount').textContent='—'}}
  updateClock();updateConnection();updateKit();setInterval(updateClock,30000);window.addEventListener('online',updateConnection);window.addEventListener('offline',updateConnection);document.addEventListener('visibilitychange',()=>{if(!document.hidden){updateClock();updateKit()}});document.addEventListener('click',event=>{if(event.target.closest('[data-delete-sighting],[data-remove-place],[data-save-place],[data-save-live-place],#sightingForm button,#clearOfflinePacks,#packGrid button'))setTimeout(updateKit,350)});
})();
