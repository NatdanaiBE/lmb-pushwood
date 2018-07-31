var pushNotification = null;
var notiSubscribe = {
  init: (options) => {
    pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");
    if (options.onSubscribe) document.addEventListener('push-notification', options.onSubscribe);
    if (options.onPushDelivery) document.addEventListener('push-receive', options.onPushDelivery);

    pushNotification.onDeviceReady({
      projectid: options.firebaseProjectId,
      appid: options.applicationCode,
      serviceName: options.serviceName || ""
    });

  },
  subscribe: (callback, error) => {
    pushNotification.registerDevice(callback, error)
  },
  unsubscribe: (callback) => {
    pushNotification.unregisterDevice(callback);
  }
}