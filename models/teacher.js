// require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ChildSchema = require("./Child");

const TeacherSchema = new Schema({
  name: String,
  children: [ ChildSchema ],
  type: 'teacher'
});

module.exports = mongoose.model('Teacher', TeacherSchema);
