self.addEventListener("install", evento=>{
    console.log("SW: Instalando Service Worker");
    const instalacion=new Promise((resolve, reject)=>{
       setTimeout(()=>{
        console.log("SW: Instalacion terminada")
        self.skipWaiting();
        resolve();
    }, 5000)
    
})
evento.waitUntil(instalacion);
})
self.addEventListener("activate", evento=>{
    console.log("SW: Activado y listo para controlar la app");
})