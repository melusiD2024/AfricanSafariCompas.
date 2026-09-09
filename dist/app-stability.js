(()=>{
 const dialogs=[...document.querySelectorAll('dialog')];let lastTrigger=null;
 const syncViewport=()=>document.documentElement.style.setProperty('--app-height',`${window.visualViewport?.height||window.innerHeight}px`);
 syncViewport();window.addEventListener('resize',syncViewport,{passive:true});window.visualViewport?.addEventListener('resize',syncViewport,{passive:true});
 document.addEventListener('click',event=>{const trigger=event.target.closest('button,a');if(trigger&&!trigger.closest('dialog'))lastTrigger=trigger;requestAnimationFrame(()=>{const open=dialogs.find(dialog=>dialog.open);document.body.classList.toggle('dialog-open',Boolean(open));if(open)open.setAttribute('aria-modal','true')})},{capture:true});
 dialogs.forEach(dialog=>{dialog.addEventListener('close',()=>{document.body.classList.toggle('dialog-open',dialogs.some(item=>item.open));if(lastTrigger?.isConnected)lastTrigger.focus({preventScroll:true})});dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close()}})});
 window.handleNativeBack=()=>{const open=[...dialogs].reverse().find(dialog=>dialog.open);if(open){open.close();return true}const active=document.querySelector('.view.active');if(active&&active.id!=='pocketbook'){window.openPocketbookView?.('pocketbook');return true}return false};
 document.querySelectorAll('.bottom-nav [data-view]').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.view==='map')setTimeout(()=>window.safariMap?.invalidateSize(),120)}));
 window.addEventListener('error',event=>{const image=event.target;if(image instanceof HTMLImageElement){image.classList.add('media-unavailable');image.alt=image.alt||'Photograph unavailable'}},true);
})();
