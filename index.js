// exports.handler = async (event) => {
//     // TODO implement
//     return 'Hello from Lambda!';
// };
require('coffeescript/register');
exports.handler = require('./main.coffee');