self.addEventListener('push', () => {
  self.registration.showNotification('Hello world!2', {});
  //self.sw.showNotification('Notifiaction working', {});
});
