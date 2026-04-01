self.addEventListener("install",e=>{
 e.waitUntil(
  caches.open("rutina-cache").then(cache=>{
   return cache.addAll(["index.html"]);
  })
 );
});
