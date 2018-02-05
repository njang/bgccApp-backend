// require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  childId: String,
  title: String,
  date: String,
  body: String,
  type: 'document'
});

module.exports = mongoose.model('Document', DocumentSchema);
