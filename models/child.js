// require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
  name: String,
  dob: String,
  phone: String,
  type: String
});

module.exports = mongoose.model('Child', ChildSchema);