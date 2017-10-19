// Initializes the `logs` service on path `/logs`
const createService = require('feathers-mongoose');
const createModel = require('../../models/logs.model');
const hooks = require('./logs.hooks');
const filters = require('./logs.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'logs',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/logs', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('logs');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
