if ('serviceWorker' in navigator) {
  if(navigator.serviceWorker.controller)
  {
    console.log('Active service worker found, no need to register')
  }
  else
  {
    navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      console.log('Service worker registered!');
    });
  }
}