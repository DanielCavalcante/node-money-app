const app = require('express');

module.exports = function(server) {
  const router = app.Router();
  server.use('/api', router);

  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');
}