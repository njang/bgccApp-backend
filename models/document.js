// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  type: String,
  childID: String,
  date: String,
  template: String,
  rest: String
});

module.exports = mongoose.model('Document', DocumentSchema);