self.addEventListener('push', () => {
  console.log("incomming notifiaction");
  self.registration.showNotification("hello")

});
