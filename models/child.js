// require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
  name: String,
  dob: String,
  emergencyContact: Number,
  type: String
});

module.exports = mongoose.model('Child', ChildSchema);