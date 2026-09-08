if(window.AndroidBridge){
 const install=document.getElementById('installApp');if(install)install.hidden=true;
 try{Object.defineProperty(navigator,'share',{configurable:true,value:({title='',text=''})=>{window.AndroidBridge.share(title,text);return Promise.resolve()}})}catch(e){}
 document.documentElement.classList.add('native-android');
}
