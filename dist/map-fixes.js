const mapConnection=document.getElementById('mapConnection');
const offlineStatus=document.getElementById('offlineStatus');
const offlineDetail=document.getElementById('offlineDetail');
function updateMapConnection(failed=false){
 const online=navigator.onLine&&!failed;
 mapConnection.classList.toggle('offline',!online);
 offlineStatus.textContent=online?'Detailed map connected':'Offline locator map';
 offlineDetail.textContent=online?'OpenStreetMap detail and live search available':'Country outlines and curated coordinates remain available';
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
