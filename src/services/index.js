const users = require('./users/users.service.js');
const logs = require('./logs/logs.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(logs);
};
