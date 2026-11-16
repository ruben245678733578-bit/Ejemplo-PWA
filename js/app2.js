if(navigator.serviceWorker){
  navigator.serviceWorker.register("/SW.js");
}
if( window.caches){
  caches.open("espacio-1");
  caches.has("espacio-1").then(console.log);
  caches.open("cache-v1.1")
  
     caches.open("practica").then(cache=>{
   cache.add("/img/main2.jpg");
   cache.addAll(["/index.html", "/SW.js"]).then(()=>[
   cache.delete("/img/main2.jpg")
   ]);
   cache.put("index.html", new Response("index modificado"));
   cache.put("SW.js", new Response("Ruben Rodriguez Flores"));
   cache.match("/SW.js").then(respuesta=>{
    respuesta.text().then(console.log);
   cache.match("/index.html")
   .then(respuesta=>{
   respuesta.text().then(console.log);
    });
   });
  });
  caches.keys().then(console.log);
}
