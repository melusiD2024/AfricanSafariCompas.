if(window.L){
const geo={
  'Marrakech & Atlas':[31.63,-7.99],'Luxor & the Nile':[25.69,32.64],Dakar:[14.72,-17.47],
  'Kakum & Cape Coast':[5.35,-1.38],'Maasai Mara':[-1.49,35.14],Serengeti:[-2.33,34.83],
  Bwindi:[-1.05,29.72],Volcanoes:[-1.46,29.49],Loango:[-2.22,9.59],
  'Okavango Delta':[-19.28,22.9],Chobe:[-18.67,24.5],'Northern Tuli':[-22.22,29.12],
  'Moremi & Khwai':[-19.18,23.75],'Okavango Panhandle':[-18.42,21.85],
  'Savuti & Linyanti':[-18.45,23.75],'Makgadikgadi & Nxai Pan':[-20.15,24.75],
  'Central Kalahari':[-21.58,23.35],'Kgalagadi & Mabuasehube':[-24.8,22.2],
  'Khama Rhino Sanctuary':[-22.46,26.72],Mokolodi:[-24.75,25.8],Etosha:[-18.86,16.33],
  Kruger:[-23.99,31.55],'Victoria Falls':[-17.92,25.86],Andasibe:[-18.93,48.42],Seychelles:[-4.62,55.45]
};
const map=L.map('realMap',{zoomControl:true,minZoom:3,maxZoom:13}).setView([1.8,20.5],3);window.safariMap=map;
const tileLayer=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
tileLayer.on('tileerror',()=>{window.safariMapFailed=true;window.dispatchEvent(new Event('safari-map-error'))});
const geoMarkers=new Map();
places.forEach(place=>{
  const point=geo[place.name];if(!point)return;
  const icon=L.divIcon({className:'',html:'<div class="safari-marker"></div>',iconSize:[22,22],iconAnchor:[11,11]});
  const marker=L.marker(point,{icon}).addTo(map).bindPopup(`<strong>${place.name}</strong><span>${place.countryName} · ${place.type}</span>`);
  marker.on('click',()=>{selectPlace(place.name);markActive(place.name)});geoMarkers.set(place.name,marker)
});
function markActive(name){geoMarkers.forEach((marker,key)=>marker.setIcon(L.divIcon({className:'',html:`<div class="safari-marker ${key===name?'active':''}"></div>`,iconSize:[24,24],iconAnchor:[12,12]})))}
document.getElementById('placeList').addEventListener('click',event=>{const button=event.target.closest('[data-place]');if(!button)return;const marker=geoMarkers.get(button.dataset.place);if(marker){map.flyTo(marker.getLatLng(),6);marker.openPopup();markActive(button.dataset.place)}});
document.getElementById('mapFilters').addEventListener('click',()=>setTimeout(()=>{const visible=places.filter(p=>activeRegion==='all'||p.region===activeRegion).map(p=>geoMarkers.get(p.name)).filter(Boolean);geoMarkers.forEach(marker=>visible.includes(marker)?marker.addTo(map):marker.remove());if(visible.length)map.fitBounds(L.featureGroup(visible).getBounds().pad(.35))},0));
markActive('Marrakech & Atlas');setTimeout(()=>map.invalidateSize(),200);
}else{window.safariMapFailed=true;document.getElementById('realMap').hidden=true;document.getElementById('mapFallback').hidden=false;window.dispatchEvent(new Event('safari-map-error'))}
