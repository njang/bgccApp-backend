// require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
  name: {
  	first: String,
  	last: String
  },
  dob: String,
  emergencyContact: Number,
  icon: Number,
  type: String
});

module.exports = mongoose.model('Child', ChildSchema);