var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CakeSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'title is required'] },
  description: { type: String, default: '' },
  completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
mongoose.model('Cake', CakeSchema);
var Cake = mongoose.model('Cake');

module.exports = Cake;
