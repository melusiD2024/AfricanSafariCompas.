window.requestSafariLocation=(success,error,options)=>{const locate=()=>navigator.geolocation.getCurrentPosition(success,error,options);if(!window.AndroidBridge?.requestLocationPermission){locate();return}const permission=event=>{if(event.detail?.granted)locate();else error?.({code:1,message:'Location permission was not granted.'})};window.addEventListener('native-location-permission',permission,{once:true});try{window.AndroidBridge.requestLocationPermission()}catch(requestError){window.removeEventListener('native-location-permission',permission);locate()}};
if(window.AndroidBridge){
 const install=document.getElementById('installApp');if(install)install.hidden=true;
 try{Object.defineProperty(navigator,'share',{configurable:true,value:({title='',text=''})=>{window.AndroidBridge.share(title,text);return Promise.resolve()}})}catch(e){}
 document.documentElement.classList.add('native-android');
}
