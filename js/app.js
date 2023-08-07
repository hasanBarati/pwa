
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(()=>console.log("serviceworker is registerd"))
    .catch(()=>console.log("error"))
}