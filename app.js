if ('serviceWorker' in navigator ) {
    navigator.serviceWorker.register('sw.js')
    .then((reg)=>console.log("registered",reg))
    .catch((e)=>console.log("error",e));
}
