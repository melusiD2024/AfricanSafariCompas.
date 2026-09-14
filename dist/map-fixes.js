const mapConnection=document.getElementById('mapConnection');
const offlineStatus=document.getElementById('offlineStatus');
const offlineDetail=document.getElementById('offlineDetail');
function updateMapConnection(failed=false){
 const online=navigator.onLine&&!failed;
 mapConnection.classList.toggle('offline',!online);
 offlineStatus.textContent=online?'Map search connected':'Offline Africa map';
 offlineDetail.textContent=online?'English overview and live place search':'English country outlines and curated places available';
}
window.addEventListener('online',()=>updateMapConnection());
window.addEventListener('offline',()=>updateMapConnection());
window.addEventListener('safari-map-error',()=>updateMapConnection(true));
document.querySelectorAll('[data-view="map"]').forEach(button=>button.addEventListener('click',()=>setTimeout(()=>window.safariMap?.invalidateSize(),80)));
document.querySelectorAll('#packGrid article').forEach(card=>{
 const button=card.querySelector('button');
 const sync=()=>{button.textContent=card.classList.contains('downloaded')?'Guide saved':'Save guide'};
 button.addEventListener('click',()=>setTimeout(sync));sync();
});
updateMapConnection(Boolean(window.safariMapFailed));
