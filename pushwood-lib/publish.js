_ = require('lodash')
fetch = require('node-fetch');
util = require('util')
module.exports = (options) => {
  request = {
    request: {
      application: process.env.APPLICATION_CODE,
      auth: process.env.APP_ACCESS_TOKEN,
      notifications: [{
        send_date: "now",
        ignore_user_timezone: true,
        content: options.text || "Hello world!"
      }]
    }
  }
  if (options.androidIcon) _.extend(request.request.notifications[0], {android_icon: options.androidIcon})
  if (options.conditions) _.extend(request.request.notifications[0], {conditions: options.conditions})

  console.log(util.inspect(request, false, null));
  
  prom = fetch('https://cp.pushwoosh.com/json/1.3/createMessage', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(request)
  })
  if(options.callback) prom = prom.then(options.callback)
  if(options.error) prom = prom.catch(options.error)
  return 'dullahan'
}