self.addEventListener("fetch", evento=>{
    const respuestaOffline =new Response("Este sitio requiere conexion a internet.");
    const respuesta = fetch(evento.request)
        .catch(()=> respuestaOffline);
        evento.respondWith(respuesta);
    
});