const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
  privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cfw6MZaQirY:APA91bEsWEsNhhCl3nTgIOvgqRnBVuSMRsjH9BA5byfYjBFu1GI4rJ4nKymxE-PAk79ZmYsQi6mPsD8BknV874QgQfpdS7Q6N0x1fk8ZujQrmllN4DEL7DxXa6F7_WpzaZA4q1FHhwcM","expirationTime":null,"keys":{"p256dh":"BNGfZ87Tz7dLXWlnZTrJwCGuiIEkpKt7RHUry6_8tzOL2L5Owaq2f2RjgrA49ZpMVdPikteT8hBt4pFu5EM4oLo","auth":"UbCrMynKcylPrycyu3XAqg"}};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
