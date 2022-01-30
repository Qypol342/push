self.addEventListener('push', () => {
  self.showNotification('Hello world!2');
  //self.sw.showNotification('Notifiaction working', {});
});
