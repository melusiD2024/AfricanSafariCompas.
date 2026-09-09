const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
$$('.nav-link').forEach(button=>button.addEventListener('click',()=>{const id=button.dataset.view;$$('.nav-link').forEach(x=>x.classList.toggle('active',x===button));$$('.view').forEach(x=>x.classList.toggle('active',x.id===id));window.scrollTo({top:0,behavior:'smooth'})}));
$$('.chip,.interest').forEach(button=>button.addEventListener('click',()=>button.classList.toggle('selected')));$$('#budget button').forEach(button=>button.addEventListener('click',()=>{$$('#budget button').forEach(x=>x.classList.remove('selected'));button.classList.add('selected')}));
const nights=$('#nights'),nightOutput=$('#nightOutput');nights.addEventListener('input',()=>nightOutput.textContent=`${nights.value} ${nights.value==='1'?'day':'days'}`);
const routeIdeas={
 'Botswana':{name:'Botswana beyond the headlines',stops:['Northern Tuli, Botswana','Moremi & Khwai, Botswana','Okavango Panhandle, Botswana','Savuti & Linyanti, Botswana','Central Kalahari, Botswana'],copy:['Riverlands, hides, cycling and walking in the Tuli Block.','Community concessions, floodplains and diverse game viewing.','Boating, fishing, birding and access to Tsodilo.','Predator country, elephants and private concessions.','Desert wildlife, San culture and immense night skies.']},
 'Namibia':{name:'Desert to the Atlantic',stops:['Sossusvlei, Namibia','Swakopmund, Namibia','Etosha, Namibia'],copy:['Towering dunes and desert light.','Atlantic air and coastal adventure.','Waterhole wildlife and self-drive routes.']},
 'South Africa':{name:'Bush, coast & culture',stops:['Greater Kruger, South Africa','Cape Town, South Africa','KwaZulu-Natal, South Africa'],copy:['Big-game drives and varied lodges.','Mountain, culture and coast.','Wetlands and wildlife.']},
 'Zimbabwe':{name:'Hwange to the Zambezi',stops:['Hwange, Zimbabwe','Victoria Falls, Zimbabwe','Mana Pools, Zimbabwe'],copy:['Large herds and excellent guiding.','The falls and riverside downtime.','Remote floodplains and walking.']},
 'Zambia':{name:'Valleys made for walking',stops:['South Luangwa, Zambia','Lower Zambezi, Zambia','Livingstone, Zambia'],copy:['Walking safaris and riverine wildlife.','Canoeing and game drives.','The Zambezi and a regional finale.']},
 'Kenya':{name:'Savanna to the sea',stops:['Maasai Mara, Kenya','Laikipia, Kenya','Kenyan Coast'],copy:['Open plains and seasonal wildlife movement.','Conservancies and varied landscapes.','Indian Ocean rest after the bush.']},
 'Tanzania':{name:'The northern circuit',stops:['Serengeti, Tanzania','Ngorongoro, Tanzania','Zanzibar, Tanzania'],copy:['Vast plains and classic game viewing.','Highland scenery and crater wildlife.','Island culture and coast.']},
 'Uganda':{name:'Forests & the Nile',stops:['Bwindi, Uganda','Queen Elizabeth, Uganda','Murchison Falls, Uganda'],copy:['Mountain forest and primate trekking.','Savanna and crater landscapes.','The Nile and powerful falls.']},
 'Rwanda':{name:'Land of a thousand hills',stops:['Volcanoes, Rwanda','Nyungwe, Rwanda','Akagera, Rwanda'],copy:['Mountain landscapes and primates.','Ancient rainforest and canopy trails.','Savanna, lakes and wildlife.']},
 'Ethiopia':{name:'Highlands & heritage',stops:['Simien Mountains, Ethiopia','Lalibela, Ethiopia','Bale Mountains, Ethiopia'],copy:['Escarpments and endemic wildlife.','Rock-hewn heritage.','High-altitude landscapes and wildlife.']},
 'Morocco':{name:'Atlas to Sahara',stops:['Marrakech, Morocco','Atlas Mountains, Morocco','Sahara, Morocco'],copy:['Medina culture and food.','Mountain villages and walking.','Desert camps and immense skies.']},
 'Egypt':{name:'Nile & desert',stops:['Cairo, Egypt','Luxor, Egypt','Red Sea, Egypt'],copy:['Museums, monuments and city energy.','Nile heritage and ancient sites.','Coast, reef and desert.']},
 'Ghana':{name:'Coast, culture & forest',stops:['Accra, Ghana','Cape Coast, Ghana','Kakum, Ghana'],copy:['Contemporary culture and food.','Atlantic history and coast.','Rainforest canopy and wildlife.']},
 'Senegal':{name:'Dakar to the delta',stops:['Dakar, Senegal','Saint-Louis, Senegal','Sine-Saloum, Senegal'],copy:['Music, art and Atlantic energy.','Historic island city.','Mangroves, birdlife and waterways.']},
 'Madagascar':{name:'Island of endemics',stops:['Andasibe, Madagascar','Avenue of the Baobabs, Madagascar','Isalo, Madagascar'],copy:['Rainforest and lemurs.','Iconic trees and western landscapes.','Canyons and dry-country trails.']}
};
function showToast(){$('#toast').classList.add('show');setTimeout(()=>$('#toast').classList.remove('show'),2200)}
function getRouteIdea(country){if(routeIdeas[country])return routeIdeas[country];const row=(window.africanAtlas||[]).find(x=>x[0]===country),sites=row?row[2].split(' · ').slice(0,3):[`${country} highlights`];return{name:`Discover ${country}`,stops:sites.map(s=>`${s}, ${country}`),copy:sites.map(()=>`A locally guided mix of nature, heritage and culture.`)}}
function build(){
 const selected=$$('#countries .selected').map(x=>x.dataset.value);
 if(!selected.length){$('#toast').textContent='Choose at least one country.';showToast();return}
 const total=Number(nights.value);
 const suggestedStops=total<=3?1:total<=5?2:total<=8?3:total<=11?4:5;
 let stops=[];
 if(selected.length===1){
  const country=selected[0],idea=getRouteIdea(country),limit=country==='Botswana'?5:3,count=Math.min(total,limit,suggestedStops);
  stops=idea.stops.slice(0,count).map((s,i)=>({s,c:idea.copy[i]}));
 }else{
  selected.slice(0,Math.min(total,3,suggestedStops)).forEach(country=>{const idea=getRouteIdea(country);stops.push({s:idea.stops[0],c:idea.copy[0]})});
 }
 const count=stops.length,base=Math.floor(total/count),rem=total%count;let day=1;
 $('#timeline').innerHTML=stops.map((item,i)=>{const stay=base+(i<rem?1:0),start=day,end=day+stay-1;day=end+1;const days=start===end?`Day ${start}`:`Days ${start}–${end}`;return `<article><div class="day">${days}</div><div class="dot"></div><div><h3>${item.s}</h3><p>${item.c}</p><span>${stay} ${stay===1?'day':'days'} · ${i?'Road or air transfer':'Arrival'}</span></div></article>`}).join('');
 const style=$('#budget .selected').dataset.value;
 $('#routeTitle').textContent=selected.length===1?getRouteIdea(selected[0]).name:`${selected[0]}, ${selected[1]}${selected[2]?` & ${selected[2]}`:''}`;
 $('#routeNights').textContent=`${total} ${total===1?'day':'days'}`;$('#routeCountries').textContent=`${selected.length} ${selected.length===1?'country':'countries'}`;$('#routeStyle').textContent=style;
 $('#toast').textContent='Your African route has been rebuilt.';showToast();$('.route-panel').scrollIntoView({behavior:'smooth',block:'start'})
}
$('#buildRoute').addEventListener('click',build);$('#saveRoute').addEventListener('click',e=>{e.currentTarget.textContent=e.currentTarget.textContent==='♥'?'♡':'♥';$('#toast').textContent=e.currentTarget.textContent==='♥'?'Route saved to your trips.':'Route removed from saved trips.';showToast()});
const places=[
 {name:'Marrakech & Atlas',code:'MA',region:'north',countryName:'Morocco',type:'Culture & mountains',x:235,y:91,tags:['Culture','Mountains','Desert']},{name:'Luxor & the Nile',code:'EG',region:'north',countryName:'Egypt',type:'Heritage journey',x:466,y:112,tags:['Heritage','River','Desert']},
 {name:'Dakar',code:'SN',region:'west',countryName:'Senegal',type:'City & coast',x:147,y:194,tags:['Music','Coast','Culture']},{name:'Kakum & Cape Coast',code:'GH',region:'west',countryName:'Ghana',type:'Forest & heritage',x:251,y:248,tags:['Forest','History','Coast']},
 {name:'Maasai Mara',code:'KE',region:'east',countryName:'Kenya',type:'Savanna safari',x:486,y:276,tags:['Wildlife','Culture','Savanna']},{name:'Serengeti',code:'TZ',region:'east',countryName:'Tanzania',type:'Plains safari',x:477,y:327,tags:['Wildlife','Photography','Migration']},{name:'Bwindi',code:'UG',region:'east',countryName:'Uganda',type:'Primate forest',x:443,y:255,tags:['Primates','Forest','Trekking']},{name:'Volcanoes',code:'RW',region:'central',countryName:'Rwanda',type:'Mountain forest',x:430,y:280,tags:['Primates','Mountains','Guided']},{name:'Loango',code:'GA',region:'central',countryName:'Gabon',type:'Forest & coast',x:338,y:309,tags:['Rainforest','Coast','Wildlife']},
 {name:'Okavango Delta',code:'BW',region:'south',countryName:'Botswana',type:'Wetland safari',x:382,y:427,tags:['Water','Wildlife','Fly-in']},{name:'Chobe',code:'BW',region:'south',countryName:'Botswana',type:'River safari',x:408,y:397,tags:['Elephants','Boats','Wildlife']},{name:'Etosha',code:'NA',region:'south',countryName:'Namibia',type:'Wildlife reserve',x:328,y:411,tags:['Self-drive','Waterholes','Wildlife']},{name:'Kruger',code:'ZA',region:'south',countryName:'South Africa',type:'Wildlife reserve',x:414,y:487,tags:['Big Five','Self-drive','Lodges']},{name:'Victoria Falls',code:'ZW',region:'south',countryName:'Zimbabwe',type:'Natural landmark',x:421,y:407,tags:['Waterfall','Adventure','Border hub']},
 {name:'Andasibe',code:'MG',region:'islands',countryName:'Madagascar',type:'Endemic rainforest',x:566,y:416,tags:['Lemurs','Forest','Endemics']},{name:'Seychelles',code:'SC',region:'islands',countryName:'Seychelles',type:'Island & reef',x:600,y:301,tags:['Reef','Beach','Nature']}
];
places.push(
 {name:'Northern Tuli',code:'BW',region:'south',countryName:'Botswana',type:'Riverland reserve',x:425,y:455,tags:['Walking','Hides','Wildlife']},
 {name:'Moremi & Khwai',code:'BW',region:'south',countryName:'Botswana',type:'Community and reserve safari',x:387,y:415,tags:['Wildlife','Mokoro','Community']},
 {name:'Okavango Panhandle',code:'BW',region:'south',countryName:'Botswana',type:'River and heritage safari',x:376,y:394,tags:['Boats','Birding','Rock art']},
 {name:'Savuti & Linyanti',code:'BW',region:'south',countryName:'Botswana',type:'Predator and elephant safari',x:400,y:400,tags:['Predators','Elephants','Wildlife']},
 {name:'Makgadikgadi & Nxai Pan',code:'BW',region:'south',countryName:'Botswana',type:'Salt-pan safari',x:407,y:430,tags:['Migration','Meerkats','Self-drive']},
 {name:'Central Kalahari',code:'BW',region:'south',countryName:'Botswana',type:'Desert wilderness',x:390,y:453,tags:['Desert','Stargazing','Self-drive']},
 {name:'Kgalagadi & Mabuasehube',code:'BW',region:'south',countryName:'Botswana',type:'Remote desert safari',x:374,y:477,tags:['Predators','Camping','Self-drive']},
 {name:'Khama Rhino Sanctuary',code:'BW',region:'south',countryName:'Botswana',type:'Community wildlife sanctuary',x:419,y:456,tags:['Rhino','Community','Self-drive']},
 {name:'Mokolodi',code:'BW',region:'south',countryName:'Botswana',type:'Day safari reserve',x:415,y:475,tags:['Rhino','Day trip','Walking']}
);
window.safariPlaces=places;
let activeRegion='all',selectedMapPlace=places[0];function renderMap(){const query=$('#mapSearch').value.toLowerCase().trim();const visible=places.filter(p=>(activeRegion==='all'||p.region===activeRegion)&&(!query||`${p.name} ${p.countryName} ${p.type}`.toLowerCase().includes(query)));$('#placeList').innerHTML=visible.length?visible.map(p=>`<button class="place-item ${p.name===selectedMapPlace.name?'selected':''}" data-place="${p.name}"><span class="place-code">${p.code}</span><span><strong>${p.name}</strong><small>${p.countryName} · ${p.type}</small></span><i>›</i></button>`).join(''):'<p class="no-places">No destinations match that search.</p>';$('#mapPins').innerHTML=places.map(p=>`<circle class="map-pin ${visible.includes(p)?'visible':''} ${p.name===selectedMapPlace.name?'selected':''}" data-place="${p.name}" cx="${p.x}" cy="${p.y}" r="${p.name===selectedMapPlace.name?10:7}" tabindex="0"><title>${p.name}</title></circle>`).join('');$$('[data-place]').forEach(el=>el.addEventListener('click',()=>selectPlace(el.dataset.place)))}
function selectPlace(name){selectedMapPlace=places.find(p=>p.name===name);$('#selectedPlace').innerHTML=`<p class="eyebrow dark">Curated destination</p><h2>${selectedMapPlace.name}</h2><p>${selectedMapPlace.countryName} · ${selectedMapPlace.type}</p><div>${selectedMapPlace.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="place-actions"><button class="save-map-place" data-save-place="${selectedMapPlace.name}">♡ Save place</button><button class="country-map-brief" data-country-brief="${selectedMapPlace.countryName}">Country brief</button></div>`;renderMap()}$$('#mapFilters button').forEach(button=>button.addEventListener('click',()=>{activeRegion=button.dataset.region;$$('#mapFilters button').forEach(x=>x.classList.toggle('selected',x===button));renderMap()}));$('#mapSearch').addEventListener('input',renderMap);renderMap();
if('serviceWorker' in navigator)navigator.serviceWorker.register('service-worker.js').catch(()=>{$('#offlineStatus').textContent='Online map preview'});
