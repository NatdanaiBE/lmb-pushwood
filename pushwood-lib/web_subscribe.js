var Pushwoosh = Pushwoosh || [];

var notiSubscribe = {
  init: (options) => {
    initOptions = {
      logLevel: 'info',
      applicationCode: options.applicationCode,
      defaultNotificationTitle: options.title,
      autoSubscribe: options.autoSubscribe || false
    };
    if (_.has(options, 'tags')) _.extend(initOptions, {tags: options.tags});
    if (_.has(options, 'image')) _.extend(initOptions, {defaultNotificationImage: options.image});
    if (_.has(options, 'safariWebsitePushID')) _.extend(initOptions, {safariWebsitePushID: options.safariWebsitePushID});
    
    Pushwoosh.push(['init', initOptions]);
    if (options.onReady) Pushwoosh.push(['onReady', options.onReady]);
    if (options.onSubscribe) Pushwoosh.push(['onSubscribe', options.onSubscribe]);
    if (options.onPushDelivery) Pushwoosh.push(['onPushDelivery', options.onPushDelivery]);
  },
  subscribe: () => {
    return Pushwoosh.subscribe();
  },
  unsubscribe: () => {
    return Pushwoosh.unsubscribe();
  }
};