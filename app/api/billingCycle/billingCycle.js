const restful = require('node-restful');
const mongoose = restful.mongoose;

const CreditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true }
});

const DebitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
  status: { type: String, uppercase: true, enum: ['PAY', 'PENDENT', 'SCHEDULED'] }
});

const BillingCycleSchema = new mongoose.Schema({
  name: { type: String, require: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true },
  credits: [CreditSchema],
  debts: [DebitSchema]
});

module.exports = restful.model('BillingCycle'. BillingCycleSchema);