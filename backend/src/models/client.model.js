const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
  company: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: Number, require: true},
  contact: { type: String, require: true },
});

const client = mongoose.model('client',clientSchema)

module.exports = client