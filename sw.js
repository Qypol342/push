self.addEventListener('push', () => {
  //self.registration.showNotification('Hello world!', {});
  self.sw.showNotification('Notifiaction working', {});
});
