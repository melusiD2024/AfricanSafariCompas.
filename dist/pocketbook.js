function openPocketbookView(id){
  document.querySelectorAll('[data-view]').forEach(item=>item.classList.toggle('active',item.dataset.view===id));
  document.querySelectorAll('.view').forEach(view=>view.classList.toggle('active',view.id===id));
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='map')setTimeout(()=>window.safariMap?.invalidateSize(),80);
}
document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',event=>{
  event.preventDefault();openPocketbookView(button.dataset.go);
}));
const pocketSearch=document.getElementById('pocketSearch');
document.getElementById('pocketSearchForm').addEventListener('submit',event=>{
  event.preventDefault();
  document.getElementById('atlasSearch').value=pocketSearch.value;
  document.getElementById('atlasSearch').dispatchEvent(new Event('input'));
  openPocketbookView('explore');
  document.querySelector('.atlas-section')?.scrollIntoView({behavior:'smooth'});
});
document.getElementById('pocketWildlifeSearch').addEventListener('click',()=>{
  document.getElementById('animalSearch').value=pocketSearch.value;
  document.getElementById('animalSearch').dispatchEvent(new Event('input'));
  openPocketbookView('field');
});
document.getElementById('pocketSos').addEventListener('click',()=>document.getElementById('sosButton').click());
