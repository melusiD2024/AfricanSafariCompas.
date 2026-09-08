const extraBotswanaRoutes=[
 ['Chobe Riverfront, Botswana','River cruises, elephants and easy access from Kasane.'],
 ['Makgadikgadi & Nxai Pan, Botswana','Salt pans, baobabs, zebra movement and meerkat country.'],
 ['Kgalagadi & Mabuasehube, Botswana','Remote desert camping, predators and exceptional night skies.'],
 ['Khama Rhino Sanctuary, Botswana','Community conservation and accessible rhino viewing.'],
 ['Ghanzi & western Kalahari, Botswana','San cultural experiences, bush walks and Kalahari landscapes.'],
 ['Mokolodi, Botswana','A short-stay wildlife experience close to Gaborone.'],
 ['Tsodilo & Gcwihaba, Botswana','Rock art, cultural heritage and cave-country exploration.']
];
extraBotswanaRoutes.forEach(([stop,copy])=>{if(!routeIdeas.Botswana.stops.includes(stop)){routeIdeas.Botswana.stops.push(stop);routeIdeas.Botswana.copy.push(copy)}});
document.getElementById('tryAnotherRoute').addEventListener('click',()=>{
 const selected=$$('#countries .selected').map(x=>x.dataset.value);
 selected.forEach(country=>{const idea=routeIdeas[country];idea.stops.push(idea.stops.shift());idea.copy.push(idea.copy.shift())});
 build();
 $('#toast').textContent='A different route has been suggested.';
});
document.getElementById('editSearch').addEventListener('click',()=>{
 document.querySelector('.planner-panel').scrollIntoView({behavior:'smooth',block:'start'});
 setTimeout(()=>document.querySelector('#countries button')?.focus(),450);
});
